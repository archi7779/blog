import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { findIndex } from 'lodash';
import * as actions from '../actions';
// нативно не смогу подключить ридукс

const loginState = handleActions(
  {
    [actions.loginStateRequest]() {
      return 'requested';
    },
    [actions.loginStateFailure]() {
      return 'failed';
    },
    [actions.loginStateSuccess]() {
      return 'finished';
    },
  },
  'none'
);

const registrationState = handleActions(
  {
    [actions.registrationStateRequest]() {
      return 'requested';
    },
    [actions.registrationStateFailure]() {
      return 'failed';
    },
    [actions.registrationStateSuccess]() {
      return 'finished';
    },
  },
  'none'
);

const user = handleActions(
  {
    [actions.userInfoFromServer](state, { payload }) {
      return {
        ...payload.user,
      };
    },
    [actions.logOut]() {
      return {};
    },
  },
  {}
);

const articles = handleActions(
  {
    [actions.getArticlesFromServer](state, { payload: { data } }) {
      // тут настраиваем пагинацию
      const articlesToStore = data.articles;
      return [...articlesToStore];
    },
    [actions.updateLikeStatus](state, { payload: { article } }) {
      const numOFArticleInState = findIndex(state, post => post.slug === article.slug);
      // тут все нормально в такой записи?
      // eslint-disable-next-line no-param-reassign
      state[numOFArticleInState] = article;
      return [...state];
    },
  },
  []
);

const page = handleActions(
  {
    [actions.setPage](state, { payload }) {
      return payload || 1;
    },
  },
  1
);

const netError = handleActions(
  {
    [actions.netErrorToState](state, { payload: { data } }) {
      return {
        ...data.errors,
      };
    },
  },
  {}
);

export default combineReducers({
  user,
  loginState,
  registrationState,
  netError,
  articles,
  page,
});
