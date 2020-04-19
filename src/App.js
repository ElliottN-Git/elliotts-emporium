import React from 'react';

//CSS
import classes from './App.module.css';
//

//Components
import Layout from './Components/Layout/Layout';
import Dashboard from './Containers/Dashboard/Dashboard';
//

function App() {
  return (
    <Layout className={classes.App}>
      <Dashboard />
      <h1>Website In Development...</h1>
    </Layout>
  );
}

export default App;
