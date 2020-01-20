import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { StyledCard } from './styledComponents';
import { findIndex } from 'lodash';
import { formatDistanceToNow } from 'date-fns';
import {Icon, Button} from 'antd'


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
      handleClick =  (slug, token, currentLikeStatus, flag) => async event => {
        event.stopPropagation();
        const { handleLike, history, location: {state}, articles }= this.props;
        await handleLike(slug, token, currentLikeStatus);
         const url = `/articles/${state.slug}`;
         const numOFArticleInState = findIndex(articles, post => post.slug === slug);
          history.replace({
               pathname: url,
               state: articles[numOFArticleInState],
             });

      };

      handleEditClick = (event) => {
         const {location: {state}, history} = this.props
         const url = `/articles/${state.slug}/edit`;
        history.push({
            pathname: url,
            state: state
        })
      }

      render() {
      console.log(this.props)
        const {location: {state}, user: {token} } = this.props;
        const authorName = this.props.user.username;
        const currentUser = state.author.username;
            const formedDate = formatDistanceToNow(new Date(state.createdAt), {
              includeSeconds: true,
              addSuffix: true,
            });
        return (
         <StyledCard size="small" title={state.title} extra={<span>created {formedDate}</span>}>
                      <div className="ArticleMainSection">
                        <p>
                          author: <a>{state.author.username}</a>
                        </p>
                        <p>{state.body}</p>
                      </div>
                      <div className="ArticleLikeSection" onClick={this.handleClick(state.slug, token, state.favorited)}>
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
                          <a href="#"> #{item}</a>
                        ))}
                      </div>
                      {authorName === currentUser && <Button onClick={this.handleEditClick}>edit</Button> }
                    </StyledCard>);
      }
}

export default withRouter(connect(mapStateToProps, actionCreators)(OpenedArticle));