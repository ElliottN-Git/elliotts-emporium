import React from 'react';

//CSS
import classes from './App.module.css';
//

//Components
import Layout from './Containers/Layout/Layout';
import Dashboard from './Containers/Dashboard/Dashboard';
import Header from './Components/UI/Header/Header';
import HeaderText from './Components/UI/HeaderText/HeaderText';
import Background from './Components/UI/Backgrounds/Background';
//

//Background images
// const backgroundImages = {
//   header: "url('../../../assets/images/headerImgSpace.jpg')",
//   second: "url('../../../assets/images/BGimg2.jpg')"
// }
//

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Header>
          <HeaderText />
        </Header>
        <Dashboard />
        <Background />
      </Layout>
    </div>
  );
}

export default App;
