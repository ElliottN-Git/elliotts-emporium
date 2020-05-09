import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ScrollToTop from './Containers/Routes/ScrollToTop/ScrollToTop';


//Components
import Layout from './Containers//Layout/Layout';
import Home from './Containers/Routes/Home'
import ResumePage from './Containers/Routes/ResumePage/ResumePage';
import MindMapePage from './Containers/Routes/MindMapePage/MindMape';

const App = () => {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <div>
        <Layout>
          <ScrollToTop />
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
                path="/mindmape"
                component={MindMapePage}
                key="mindmape"
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
