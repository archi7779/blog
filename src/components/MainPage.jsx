import React from 'react';
import { connect } from 'react-redux';
import { Button, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { ArticleWrapper } from './styledComponents';
import * as actions from '../actions';
import { getCookie, deleteCookie } from './functions/cookieFunc';
import Article from './Article';

const mapStateToProps = state => {
  const props = {
    user: state.user,
    articles: state.articles,
    page: state.page,
  };
  return props;
};
const actionCreators = {
  logOut: actions.logOut,
  getArticles: actions.askArticlesFromServer,
  cookieLogin: actions.logInWithCookieAuthToken,
};

class MainPage extends React.Component {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    page: 1,
    authToken: getCookie('authToken') ? getCookie('authToken') : null,
  };

  componentDidMount() {
    const {
      user: { token },
      page,
      getArticles,
      authToken,
      cookieLogin,
    } = this.props;
    cookieLogin(authToken);
    getArticles([token || 'optional', page]);
  }

  handleLogOut = () => {
    const { logOut, user:{token} } = this.props;
    deleteCookie('authToken')
    logOut();
  };

  hanglePrevClick = () => {
    const {
      user: { token },
      page,
      getArticles,
    } = this.props;
    if (page === 1) {
      return;
    }
    const newPage = page - 1;
    getArticles([token || 'optional', newPage]);
  };

  hangleNextClick = () => {
    const {
      user: { token },
      page,
      getArticles,
    } = this.props;
    const newPage = page + 1;
    getArticles([token || 'optional', newPage]);
  };

  handleClick = article => {
    const { history } = this.props;
    const url = `/articles/${article.slug}`;
    history.push({
      pathname: url,
      state: article,
    });
  };

  render() {
    const { articles, user, page } = this.props;
    return (
      <>
        <div className="mainPage">
          <div>
            {user.username && <div className="logInIndicator">u logged as {user.username}</div>}
            <Button type="primary" onClick={this.hanglePrevClick} className="MainPage-Prev-Button">
              Prev
            </Button>
            <span>{page}</span>
            <Button type="primary" onClick={this.hangleNextClick} className="MainPage-Next-Button">
              Next
            </Button>
            <Button type="primary" onClick={this.handleLogOut} className="logOut">
              LogOut
            </Button>
          </div>
          {!articles.length > 0 && <Spin />}
          {articles.map(article => (
            <ArticleWrapper
              key={uniqueId()}
              onClick={() => {
                this.handleClick(article);
              }}
            >
              <Article article={article} token={user.token} />
            </ArticleWrapper>
          ))}
        </div>
      </>
    );
  }
}

MainPage.propTypes = {
  authToken: PropTypes.string,
  cookieLogin: PropTypes.func.isRequired,
  page: PropTypes.number,
  getArticles: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

export default withRouter(connect(mapStateToProps, actionCreators)(MainPage));
