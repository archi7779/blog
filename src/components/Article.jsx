import React from 'react';
import { connect } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { StyledCard } from './styledComponents';
import * as actions from '../actions';
import { Icon } from 'antd';

const mapStateToProps = state => {
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
          <p>
            author: <a>{author.username}</a>
          </p>
          <p>{body}</p>
        </div>
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
            <a href="#"> #{item}</a>
          ))}
        </div>
      </StyledCard>
    );
  }
}
export default connect(mapStateToProps, actionCreators)(Article);
