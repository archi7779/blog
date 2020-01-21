import { createAction } from 'redux-actions';
import axios from 'axios';

export const logOut = createAction('LOG_OUT');

export const userInfoFromServer = createAction('USER_INFO_FROM_SERVER');

export const netErrorToState = createAction('NET_ERR_TO_STATE');

export const setPage = createAction('SET_START_PAGING');

export const loginStateRequest = createAction('LOG_IN_REQUEST');
export const loginStateSuccess = createAction('LOG_IN_SUCCESS');
export const loginStateFailure = createAction('LOG_IN_FAILURE');
export const logInWithEmainAndPassword = user => async dispatch => {
  dispatch(loginStateRequest());
  try {
    const response = await axios.post('https://conduit.productionready.io/api/users/login', {
      user,
    });
    dispatch(loginStateSuccess());
    dispatch(userInfoFromServer(response.data));
  } catch (error) {
    dispatch(netErrorToState(error.response));
    dispatch(loginStateFailure());
  }
};

export const registrationStateRequest = createAction('REGISTRATION_IN_REQUEST');
export const registrationStateSuccess = createAction('REGISTRATION_SUCCESS');
export const registrationStateFailure = createAction('REGISTRATION_FAILURE');
export const registrWithUserData = user => async dispatch => {
  dispatch(registrationStateRequest());
  try {
    const response = await axios.post(' https://conduit.productionready.io/api/users', { user });
    dispatch(registrationStateSuccess());
    dispatch(userInfoFromServer(response.data));
    // программный редирект
  } catch (error) {
    dispatch(netErrorToState(error.response));
    dispatch(registrationStateFailure());
  }
};

export const getArticles = createAction('GET_ARTICLES_FROM_SERVER');
export const getArticlesFromServer = createAction('GET_ARTICLES_FROM_SERVER');
export const askArticlesFromServer = ([token, page]) => async dispatch => {
  // меняем страницу
  if (page === 1) {
    dispatch(setPage());
  } else {
    dispatch(setPage(page));
  }

  const limit = 10;
  // чувствую что хочу переписать это место
  const offset = page === 1 ? '' : `offset=${(page - 1) * 10}`;
  const params = `?limit=${limit}&${offset}`;
  const url = `https://conduit.productionready.io/api/articles${params}`;
  const config = {
    headers: { Authorization: `Token ${token}` },
  };
  try {
    const articles = await axios.get(url, config);
    dispatch(getArticlesFromServer(articles));
  } catch (error) {
    // обработать бы
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const updateLikeStatus = createAction('UPDATE_POST_LIKE_STATUS');
export const likePost = (slug, token, currentLikeStatus) => async dispatch => {
  const config = {
    headers: { Authorization: `Token ${token}` },
  };

  if (!currentLikeStatus) {
    try {
      const response = await axios.post(
        `https://conduit.productionready.io/api/articles/${slug}/favorite`,
        '',
        config
      );
      const article = response.data;
      dispatch(updateLikeStatus(article));
    } catch (error) {
      // обработать бы
      // eslint-disable-next-line no-console
      console.log(error);
    }
  } else {
    try {
      const response = await axios.delete(
        `https://conduit.productionready.io/api/articles/${slug}/favorite`,
        config
      );
      const article = response.data;
      dispatch(updateLikeStatus(article));
    } catch (error) {
      // обработать бы
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
};