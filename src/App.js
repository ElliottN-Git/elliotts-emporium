import React from 'react';

//CSS
import classes from './App.module.css';
//

//Components
import Layout from './Containers/Layout/Layout';
import Dashboard from './Containers/Dashboard/Dashboard';
//

function App() {
  return (
    <Layout className={classes.App}>
      <Dashboard />
    </Layout>
  );
}

export default App;
