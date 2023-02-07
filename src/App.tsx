import React, {Suspense, memo} from 'react';
import './App.css';
import './global/css/common.css';
import './global/css/reset.css';
import './global/css/global.css';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import {useRoutes} from 'react-router-dom';
import router from './routes';

const App = memo(() => {
  const element = useRoutes(router);
  return (
    <>
      <Header />
      <Suspense fallback="请等待">{element}</Suspense>
      <Footer />
    </>
  );
});

export default App;
