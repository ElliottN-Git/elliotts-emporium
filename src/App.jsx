import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//Components
import Layout from './Containers//Layout/Layout';
import Home from './Containers/Routes/Home'
import ResumePage from './Containers/Routes/ResumePage/ResumePage';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Route render={({ location }) => (
            <Switch location={location}>
              <Route
                exact
                path="/resume"
                component={ResumePage}
                key="resume"
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
