import React, { Component, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'views/Home';

const Error403 = lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import("views/errors/Error403")), 0);
}));
const Error404 = lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import("views/errors/Error404")), 0);
}));


class Layout extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-inner">
          <Header/>
          <Routes>
            <Route exact={true} path='/errors/403' element={<Error403/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Layout;
