import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Subjects from '../../containers/Subjects';
import StudentDetails from '../../containers/StudentDetails';
import Dashboard from '../../containers/Dashboard'
import NotFoundPage from '../404';
import Home from '../../containers/Home';
import TodoList from '../../containers/TodoList'
import Teachers from '../../containers/Teachers';
import TeacherDetails from '../../containers/TeacherDetails';
import Group from '../../containers/Group';
import Profile from '../../containers/Profile';
import SignInPage from '../../containers/SignInPage';
import SignUpPage from '../../containers/SignUpPage';
import AuthProvider from '../../containers/AuthProvider'
import SignUpSuccessfullyPage from '../SignUpSuccessfull';
import StudyProgress from '../../containers/StudyProgress';

const App = () => {
  return (
    <Switch>

      <Route
        path='(/|/dashboard)'
        render={() => <AuthProvider>{<Dashboard />}</AuthProvider>}
        exact
      />

      <Route
        path="/me/subjects"
        render={() => <AuthProvider>{<Subjects />}</AuthProvider>}
        exact
      />

      <Route
        path="/me/progress"
        render={() => <AuthProvider>{<StudyProgress />}</AuthProvider>}
        exact
      />

      <Route
        path='/login'
        component={SignInPage}
        exact
      />

      <Route
        path='/signup'
        component={SignUpPage}
        exact
      />
      <Route
        path='/me/todos'
        render={() => <AuthProvider>{<TodoList />}</AuthProvider>}
        exact
      />
      <Route
        path='/me/teachers'
        render={() => <AuthProvider>{<Teachers />}</AuthProvider>}
        exact
      />
      <Route
        path="/me/teachers/:id"
        render={() => <AuthProvider>{<TeacherDetails isMyTeacher={true} />}</AuthProvider>}
        exact
      />
      <Route
        path="/teachers/:id"
        render={() => <AuthProvider>{<TeacherDetails isMyTeacher={false} />}</AuthProvider>}
        exact
      />
      <Route
        path='/me/group'
        render={() => <AuthProvider>{<Group />}</AuthProvider>}
        exact
      />

      <Route
        path='/home'
        render={() => <AuthProvider home={true}>{<Home />}</AuthProvider>}
        exact
      />

      <Route
        path='/students/:id'
        render={() => <AuthProvider>{<StudentDetails />}</AuthProvider>}
        exact
      />

      <Route
        path='/signup-ok'
        component={SignUpSuccessfullyPage}
        exact
      />

      <Route
        path='/(me/profile|me)'
        component={() => <AuthProvider>{<Profile />}</AuthProvider>}
        exact
      />

      {/* Not found route
      Trigger when url doesn't match with some route below */}

      <Route
        component={NotFoundPage}
      />

    </Switch>
  );
};

export default App;
