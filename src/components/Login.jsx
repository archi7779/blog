import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as yup from 'yup';
import * as actions from '../actions';

const mapStateToProps = state => {
  const props = {
    user: state.user,
    login: state.loginState,
    netError: state.netError,
  };
  return props;
};

const actionCreators = {
  doLogin: actions.logInWithEmainAndPassword,
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email()
    .required('Please Enter your Email'),
  password: yup.string().required('Please Enter your password'),
  // .matches(
  //     "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // )
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { login, netError, doLogin } = this.props;
    return (
      <Formik
        validateOnChange
        initialValues={{
          password: '',
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          doLogin(data);
          setSubmitting(false);
        }}
      >
        {({ errors }) => (
          <>
            <Form className="loginForm">
              <Field
                name="email"
                type="input"
                as={Input}
                placeholder="enter ur email"
                disabled={login === 'requested'}
                className={errors.email || Object.entries(netError).length > 0 ? 'error' : ''}
              />
              {/* //надо ли тут доставать точный текст ошибки, или можно свой собственный добавить, так как вариант ошибки только один = неверный адресс\пароль */}
              {errors.email && <div>{errors.email}</div>}
              <Field
                name="password"
                type="input"
                as={Input}
                placeholder="enter ur password"
                disabled={login === 'requested'}
                className={errors.password || Object.entries(netError).length > 0 ? 'error' : ''}
              />
              {errors.password && <div>{errors.password}</div>}
              {Object.entries(netError).length > 0 && <div>Email or Password incorrect</div>}
              <Button
                type="primary"
                htmlType="submit"
                disabled={login === 'requested'}
                className="subBut"
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
export default connect(mapStateToProps, actionCreators)(Login);
