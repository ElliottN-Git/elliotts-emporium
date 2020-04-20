import React from 'react';

//CSS
import classes from './App.module.css';
//

//Components
import Layout from './Containers/Layout/Layout';
import Dashboard from './Containers/Dashboard/Dashboard';
import Header from './Components/UI/Header/Header';
import HeaderText from './Components/UI/HeaderText/HeaderText';
//

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Header />
        <HeaderText />
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
