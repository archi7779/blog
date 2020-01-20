import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, FieldArray } from 'formik';
import { Input, Button } from 'antd';
import * as Yup from 'yup';
import axios from 'axios';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

const ValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  body: Yup.string().required('Required'),
});

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

class EditArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      user: { token },
      location: { state },
      history,
    } = this.props;
    return (
      <Formik
        validateOnChange
        initialValues={{
          title: state.title,
          description: state.description,
          body: state.body,
          tagList: state.tagList,
        }}
        validationSchema={ValidationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          const sendDataToServer = async () => {
            const config = {
              headers: { Authorization: `Token ${token}` },
            };
            try {
              const article = data;
              const response = await axios.put(
                `https://conduit.productionready.io/api/articles/${state.slug}`,
                { article },
                config
              );
              const url = `/articles/${response.data.article.slug}`;
              history.push({
                pathname: url,
                state: response.data.article,
              });
            } catch (error) {
              // eslint-disable-next-line no-console
              console.log(error);
              throw error;
            }
          };
          sendDataToServer();
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting, touched }) => (
          <>
            <Form>
              <div>title</div>
              <Field name="title" type="input" as={Input} placeholder="enter article's title" />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}

              <div>description</div>
              <Field
                name="description"
                type="input"
                as={Input}
                placeholder="enter article's description"
              />
              {errors.description && touched.description ? <div>{errors.description}</div> : null}
              <div>body</div>
              <Field name="body" type="input" as={Input} placeholder="enter article's body" />
              {errors.body && touched.body ? <div>{errors.body}</div> : null}
              <FieldArray name="tagList">
                {arrayHelpers => (
                  <>
                    <div>tag</div>
                    <Field
                      name="tagList[0]"
                      type="input"
                      as={Input}
                      placeholder="enter hashTag"
                      key={0}
                    />
                    {values.tagList.slice(1).map((item, index) => (
                      <div key={uniqueId()}>
                        <div>tag</div>
                        <Field
                          name={`tagList[${index + 1}]`}
                          type="input"
                          as={Input}
                          placeholder="enter hashTag"
                          key={`${values.tagList.length}${item}`}
                        />
                      </div>
                    ))}
                    <Button
                      type="primary"
                      htmlType="button"
                      disabled={isSubmitting}
                      onClick={() => values.tagList[0] && arrayHelpers.push()}
                    >
                      add another hashTag
                    </Button>
                  </>
                )}
              </FieldArray>
              <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                save changes
              </Button>
            </Form>
          </>
        )}
      </Formik>
    );
  }
}
EditArticle.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      author: PropTypes.object.isRequired,
      createdAt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      favorited: PropTypes.bool.isRequired,
      favoritesCount: PropTypes.number.isRequired,
      tagList: PropTypes.array.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
export default withRouter(connect(mapStateToProps, actionCreators)(EditArticle));
