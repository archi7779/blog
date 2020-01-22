import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Login from './components/Login';
import Registration from './components/Registration';
import MainPage from './components/MainPage';
import CreateNewArticle from './components/CreateNewArticle';
import OpenedArticle from './components/OpenedArticle';
import { getCookie } from './components/functions/cookieFunc';
import Nav from './components/Nav';
import 'antd/dist/antd.css';

const authToken = getCookie('authToken');
const mapStateToProps = state => {
  const props = {
    user: state.user,
  };
  return props;
};

// я все время при установки зависимостей пишу --save это норм, или надо все же разделять dev dep от обычных
function App({ user }) {
  return (
    <Router basename="/blog/">
      <div className="App">
        <Nav />
        <Route exact path="/login">
          {Object.keys(user).length > 0 || authToken ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/registration">
          {Object.keys(user).length > 0 || authToken ? <Redirect to="/" /> : <Registration />}
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/add">
          {Object.keys(user).length > 0 || authToken ? (
            <CreateNewArticle />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/articles/:id">
          {Object.keys(user).length > 0 || authToken ? <OpenedArticle /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/articles/:id/edit">
          {Object.keys(user).length > 0 || authToken ? (
            <CreateNewArticle />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </div>
    </Router>
  );
}

App.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};
export default connect(mapStateToProps)(App);
