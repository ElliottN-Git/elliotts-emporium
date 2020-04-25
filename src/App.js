import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

//CSS
import classes from './App.module.css';
//

//Components
import Layout from './Containers/Layout/Layout';
import Home from './Containers/Routes/Home'
import TestPage from './Containers/Routes/TestPage/TestPage';

// import Dashboard from './Containers/Dashboard/Dashboard';
// import Header from './Components/UI/Header/Header';
// import HeaderText from './Components/UI/HeaderText/HeaderText';
// import Background from './Components/UI/Backgrounds/Background';
// import ResumeTile from './Containers/ResumeTile/ResumeTile';
//


function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Layout>
          <Route render={({ location }) => (
            <Switch location={location}>
              <Route
                exact
                path="/test"
                component={TestPage}
                key="test"
              />

              <Route
                exact
                path=""
                component={Home}
                key="home"
              />
            </Switch>
          )}
          />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
