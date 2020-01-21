import React from 'react';
import { connect } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { StyledCard } from './styledComponents';
import * as actions from '../actions';

const mapStateToProps = () => {
  const props = {};
  return props;
};

const actionCreators = {
  handleLike: actions.likePost,
};

class Article extends React.Component {
  handleClick = (slug, token, currentLikeStatus) => event => {
    event.stopPropagation();
    const { handleLike } = this.props;
    handleLike(slug, token, currentLikeStatus);
  };

  render() {
    const {
      article: { title, author, createdAt, favorited, favoritesCount, tagList, slug, body },
      token,
    } = this.props;
    const formedDate = formatDistanceToNow(new Date(createdAt), {
      includeSeconds: true,
      addSuffix: true,
    });

    return (
      <StyledCard size="small" title={title} extra={<span>created {formedDate}</span>}>
        <div className="ArticleMainSection">
          <p>author: {author.username}</p>
          <p className="Article-Body">{body}</p>
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
        <div className="ArticleLikeSection" onClick={this.handleClick(slug, token, favorited)}>
          {favorited ? (
            <label htmlFor="imgTest">
              {' '}
              <Icon type="heart" theme="filled" />
              {favoritesCount}
            </label>
          ) : (
            <label htmlFor="imgTest2">
              {' '}
              <Icon type="heart" />
              {favoritesCount}
            </label>
          )}
        </div>

        <div className="ArticleTagsSection">
          {tagList.map(item => (
            <span key={uniqueId()}> #{item}</span>
          ))}
        </div>
      </StyledCard>
    );
  }
}

Article.propTypes = {
  handleLike: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    favorited: PropTypes.bool.isRequired,
    favoritesCount: PropTypes.number.isRequired,
    tagList: PropTypes.array.isRequired,
    slug: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, actionCreators)(Article);
