import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, FieldArray } from 'formik';
import { Input, Button } from 'antd';
import { compact, uniqueId } from 'lodash';
import * as Yup from 'yup';
import axios from 'axios';
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

class CreateNewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      user: { token },
    } = this.props;
    return (
      <Formik
        validateOnChange
        initialValues={{
          title: '',
          description: '',
          body: '',
          tagList: [],
        }}
        validationSchema={ValidationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          const sendDataToServer = async () => {
            const tagList = compact(data.tagList);
            const article = { ...data, tagList };
            const { history } = this.props;
            const config = {
              headers: { Authorization: `Token ${token}` },
            };
            try {
              const response = await axios.post(
                `https://conduit.productionready.io/api/articles`,
                { article },
                config
              );
              const url = `/articles/${response.data.article.slug}`;
              history.push({
                pathname: url,
                state: response.data.article,
              });
            } catch (error) {
              console.log(error);
            }
          };
          sendDataToServer();
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting, handleSubmit, touched }) => (
          <>
            <Form className="loginForm">
              <Field name="title" type="input" as={Input} placeholder="enter article's title" />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}

              <Field
                name="description"
                type="input"
                as={Input}
                placeholder="enter article's description"
              />
              {errors.description && touched.description ? <div>{errors.description}</div> : null}

              <Field name="body" type="input" as={Input} placeholder="enter article's body" />
              {errors.body && touched.body ? <div>{errors.body}</div> : null}
              <FieldArray name="tagList">
                {arrayHelpers => (
                  <>
                    <Field
                      name="tagList[0]"
                      type="input"
                      as={Input}
                      placeholder="enter hashTag"
                      key={0}
                    />
                    {values.tagList.slice(1).map((item, index) => (
                      <Field
                        name={`tagList[${index + 1}]`}
                        type="input"
                        as={Input}
                        placeholder="enter hashTag"
                        key={index}
                      />
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
                sub
              </Button>
            </Form>
          </>
        )}
      </Formik>
    );
  }
}

export default withRouter(connect(mapStateToProps, actionCreators)(CreateNewArticle));
