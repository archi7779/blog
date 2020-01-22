import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, FieldArray, useField } from 'formik';
import { Input, Button } from 'antd';
import { compact } from 'lodash';
import * as Yup from 'yup';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../actions';

function MyInput(props) {
  const [field, meta] = useField(props);
  return (
    <>
      <Input {...field} {...props} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
}

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
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    location: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      user: { token },
      location: { state },
    } = this.props;
    return (
      <Formik
        validateOnChange
        initialValues={{
          title: state ? state.title : '',
          description: state ? state.description : '',
          body: state ? state.body : '',
          tagList: state ? state.tagList : [],
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
              // eslint-disable-next-line no-console
              console.log(error);
            }
          };
          sendDataToServer();
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <>
            <Form className="loginForm">
              <MyInput name="title" placeholder="enter article's title" />
              <MyInput name="description" placeholder="enter article's description" />
              <MyInput name="body" placeholder="enter article's body" />
              <FieldArray name="tagList">
                {arrayHelpers => (
                  <>
                    <MyInput name="tagList[0]" placeholder="enter hashTag" key={0} />
                    {values.tagList.slice(1).map((item, index) => (
                      <MyInput
                        name={`tagList[${index + 1}]`}
                        placeholder="enter hashTag"
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={index}
                      />
                    ))}
                    <Button
                      type="primary"
                      htmlType="button"
                      disabled={isSubmitting}
                      onClick={() => values.tagList[0] && arrayHelpers.push()}
                      className="CreateNewArticle-addNewArticle-Button"
                    >
                      add another hashTag
                    </Button>
                  </>
                )}
              </FieldArray>
              <Button
                type="primary"
                htmlType="submit"
                disabled={isSubmitting}
                className="CreateNewArticle-Submit-Button"
              >
                Submit
              </Button>
            </Form>
          </>
        )}
      </Formik>
    );
  }
}

CreateNewArticle.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tagList: PropTypes.array.isRequired,
      body: PropTypes.string.isRequired,
    }),
  }),
};

export default withRouter(connect(mapStateToProps, actionCreators)(CreateNewArticle));
