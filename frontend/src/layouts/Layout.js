import React, { Component, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'views/Home';
import News from 'views/News';
import SecurityPortal from 'views/SecurityPortal';
import SecurityKnowledge from 'views/SecurityKnowledge';
import Formats from 'views/Formats';
import Group from 'views/Group';
import Rules from 'views/Rules';
import AliasRoutes from "routes/AliasRoutes";


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
            <Route exact={true} path={AliasRoutes.Error403} element={<Error403/>}/>
            <Route path={AliasRoutes.News} element={<News/>}/>
            <Route path={AliasRoutes.SecurityPortal} element={<SecurityPortal/>}/>
            <Route path={AliasRoutes.SecurityKnowledge} element={<SecurityKnowledge/>}/>
            <Route path={AliasRoutes.Formats} element={<Formats/>}/>
            <Route path={AliasRoutes.AboutRule} element={<Rules/>}/>
            <Route path={AliasRoutes.AboutGroup} element={<Group/>}/>
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
