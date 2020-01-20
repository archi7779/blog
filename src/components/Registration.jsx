import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import * as actions from '../actions';

const mapStateToProps = state => {
  const props = {
    user: state.user,
    registrationStatus: state.registrationState,
    netError: state.netError,
  };
  return props;
};

const actionCreators = {
  doRegistration: actions.registrWithUserData,
};
const validationSchema = yup.object({
  username: yup
    .string()
    .required()
    .max(50),
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

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { doRegistration, registrationStatus, netError } = this.props;
    return (
      <Formik
        validateOnChange
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          doRegistration(data);
          setSubmitting(false);
        }}
      >
        {({ errors }) => (
          <>
            <Form className="loginForm">
              <Field
                name="username"
                type="input"
                as={Input}
                placeholder="enter ur login"
                disabled={registrationStatus === 'requested'}
                className={errors.username || netError.username ? 'error' : ''}
              />

              {netError.username && <div>{netError.username}</div>}
              {errors.username && <div>{errors.username}</div>}
              <Field
                name="email"
                type="input"
                as={Input}
                placeholder="enter ur email"
                disabled={registrationStatus === 'requested'}
                className={errors.email || netError.email ? 'error' : ''}
              />
              {netError.email && <div>{netError.email}</div>}
              {errors.email && <div>{errors.email}</div>}
              <Field
                name="password"
                type="password"
                as={Input}
                placeholder="enter ur password"
                disabled={registrationStatus === 'requested'}
                className={errors.password || netError.password ? 'error' : ''}
              />
              {netError.password && netError.password.map(item => <div>{item}</div>)}
              {errors.password && <div>{errors.password}</div>}
              <Button
                type="primary"
                htmlType="submit"
                disabled={registrationStatus === 'requested'}
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

Registration.propTypes = {
  doRegistration: PropTypes.func.isRequired,
  registrationStatus: PropTypes.string.isRequired,
  netError: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, actionCreators)(Registration);
