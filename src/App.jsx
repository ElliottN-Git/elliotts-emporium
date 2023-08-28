import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ScrollToTop from './Containers/Routes/ScrollToTop/ScrollToTop';


//Components
import Layout from './Containers//Layout/Layout';
import Home from './Containers/Routes/Home'
import ResumePage from './Containers/Routes/ResumePage/ResumePage';
import MindMapePage from './Containers/Routes/MindMapePage/MindMape';
import BurgerBuilder from './Containers/Routes/BurgerBuilderPage/BurgerBuilder';
import NextJSandAPIs from './Containers/Routes/NextJSandAPIsPage/NextJSandAPIs';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }


  render() {
    const { loading } = this.state;

    if (loading) { // if component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }

    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Layout>
            <ScrollToTop />
            <Route render={({ location }) => (
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  component={Home}
                  key="home"
                />

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

                <Route path='/burgerbuilder' component={BurgerBuilder}
                />

                <Route path='/nextjsandapis' component={NextJSandAPIs}
                />

                <Route render={() => <h1 style={{ position: 'absolute', top: '40%', color: 'whitesmoke' }}>404: Page not found</h1>} />
              </Switch>
            )}
            />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
