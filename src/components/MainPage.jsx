import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { ArticleWrapper } from './styledComponents';
import * as actions from '../actions';
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
};

class mainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    page: 1,
  };

  componentDidMount() {
    const {
      user: { token },
      page,
      getArticles,
    } = this.props;
    getArticles([token, page]);
  }

  handleLogOut = () => {
    const { logOut } = this.props;
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
    getArticles([token, newPage]);
  };

  hangleNextClick = () => {
    const {
      user: { token },
      page,
      getArticles,
    } = this.props;
    const newPage = page + 1;
    getArticles([token, newPage]);
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
          {/*
          создать компонент артикла
          настроить пагинацию
          history api
          */}
          <div>
            <button onClick={this.hanglePrevClick}>Prev</button>
            <span>{page}</span>
            <button onClick={this.hangleNextClick}>Next</button>
          </div>

          {articles.map(article => (
            <ArticleWrapper
              onClick={() => {
                this.handleClick(article);
              }}
            >
              <Article article={article} token={user.token} />
            </ArticleWrapper>
          ))}

          <Button type="primary" onClick={this.handleLogOut} className="logOut">
            LogOut
          </Button>
        </div>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, actionCreators)(mainPage));
