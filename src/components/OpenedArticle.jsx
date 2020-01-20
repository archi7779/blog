import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { findIndex, uniqueId } from 'lodash';
import { formatDistanceToNow } from 'date-fns';
import { Icon, Button } from 'antd';
import PropTypes from 'prop-types';

import { StyledCard } from './styledComponents';
import * as actions from '../actions';

const mapStateToProps = state => {
  const props = {
    user: state.user,
    articles: state.articles,
  };
  return props;
};

const actionCreators = {
  handleLike: actions.likePost,
};

class OpenedArticle extends React.Component {
  handleClick = (slug, token, currentLikeStatus) => async event => {
    event.stopPropagation();
    const {
      handleLike,
      history,
      location: { state },
      articles,
    } = this.props;
    await handleLike(slug, token, currentLikeStatus);
    const url = `/articles/${state.slug}`;
    const numOFArticleInState = findIndex(articles, post => post.slug === slug);
    history.replace({
      pathname: url,
      state: articles[numOFArticleInState],
    });
  };

  handleEditClick = () => {
    const {
      location: { state },
      history,
    } = this.props;
    const url = `/articles/${state.slug}/edit`;
    history.push({
      pathname: url,
      state,
    });
  };

  render() {
    const {
      location: { state },
      user: { token, username },
    } = this.props;
    const authorName = username;
    const currentUser = state.author.username;
    const formedDate = formatDistanceToNow(new Date(state.createdAt), {
      includeSeconds: true,
      addSuffix: true,
    });
    return (
      <StyledCard size="small" title={state.title} extra={<span>created {formedDate}</span>}>
        <div className="ArticleMainSection">
          <p>author:{state.author.username}</p>
          <p>{state.body}</p>
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
        <div
          className="ArticleLikeSection"
          onClick={this.handleClick(state.slug, token, state.favorited)}
        >
          {state.favorited ? (
            <label htmlFor="imgLike">
              {' '}
              <Icon type="heart" theme="filled" />
              {state.favoritesCount}
            </label>
          ) : (
            <label htmlFor="imgLike2">
              {' '}
              <Icon type="heart" />
              {state.favoritesCount}
            </label>
          )}
        </div>

        <div className="ArticleTagsSection">
          {state.tagList.map(item => (
            <span key={uniqueId()}> #{item} </span>
          ))}
        </div>
        {authorName === currentUser && <Button onClick={this.handleEditClick}>edit</Button>}
      </StyledCard>
    );
  }
}
OpenedArticle.propTypes = {
  handleLike: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      author: PropTypes.object.isRequired,
      createdAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      favorited: PropTypes.bool.isRequired,
      favoritesCount: PropTypes.number.isRequired,
      tagList: PropTypes.array.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
export default withRouter(connect(mapStateToProps, actionCreators)(OpenedArticle));
