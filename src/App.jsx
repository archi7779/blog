import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Login from './components/Login';
import Registration from './components/Registration';
import MainPage from './components/MainPage';
import CreateNewArticle from './components/CreateNewArticle'
import OpenedArticle from './components/OpenedArticle'
import EditArticle from "./components/EditArticle";
import Nav from './components/Nav';


import 'antd/dist/antd.css';

const mapStateToProps = state => {
  const props = {
    user: state.user,
  };
  return props;
};

// я все время при установки зависимостей пишу --save это норм, или надо все же разделять dev dep от обычных
function App({ user }) {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/login">
          {Object.keys(user).length > 0 ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/registration">
          {Object.keys(user).length > 0 ? <Redirect to="/" /> : <Registration />}
        </Route>
        <Route exact path="/">
          {!Object.keys(user).length > 0 ? <Redirect to="/login" /> : <MainPage />}
        </Route>
        <Route exact path="/add">
          {!Object.keys(user).length > 0 ? <Redirect to="/login" /> : <CreateNewArticle />}
        </Route>
        <Route exact path="/articles/:id">
          {!Object.keys(user).length > 0 ? <Redirect to="/login" /> :  <OpenedArticle />}
        </Route>
        <Route exact path="/articles/:id/edit">
          {!Object.keys(user).length > 0 ? <Redirect to="/login" /> :  <EditArticle />}
        </Route>
      </div>
    </Router>
  );
}
export default connect(mapStateToProps)(App);
