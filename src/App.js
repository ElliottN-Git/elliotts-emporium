import React from 'react';

//CSS
import classes from './App.module.css';
//

//Components
import Layout from './Containers/Layout/Layout';
// import Dashboard from './Containers/Dashboard/Dashboard';
// import Header from './Components/UI/Header/Header';
// import HeaderText from './Components/UI/HeaderText/HeaderText';
// import Background from './Components/UI/Backgrounds/Background';
// import ResumeTile from './Containers/ResumeTile/ResumeTile';
//


function App() {
  return (
    <div className={classes.App}>
      <Layout>
        {/* <Header>
          <HeaderText />
        </Header>
        <Dashboard />
        <Background>
          <ResumeTile />
        </Background>
        <div style={{height: '200px', width: '100%'}}></div> */}
      </Layout>
    </div>
  );
}

export default App;
