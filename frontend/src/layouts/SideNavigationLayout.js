import React, { Component, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'views/Home';
import News from 'views/News';
import SecurityKnowledge from 'views/SecurityKnowledge';
import Formats from 'views/Formats';
import Rules from 'views/Rules';
import Hall from 'views/Hall';
import Group from 'views/Group';
import Query from 'views/Query';
import Boards from 'views/Boards';
import AliasRoutes from "routes/AliasRoutes";
import SideNavigations from 'components/SideNavigations';

const Error403 = lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import("views/errors/Error403")), 0);
}));
const Error404 = lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import("views/errors/Error404")), 0);
}));


class Layout extends Component {

  render() {
    return (
      <div className="container">
        <SideNavigations/>
        <div className="main-area">
          <Routes>
            <Route exact={true} path={AliasRoutes.Error403} element={<Error403/>}/>
            <Route exact={true} path={AliasRoutes.News} element={<News/>}/>
            <Route exact={true} path={AliasRoutes.SecurityKnowledge} element={<SecurityKnowledge/>}/>
            <Route exact={true} path={AliasRoutes.Formats} element={<Formats/>}/>
            <Route exact={true} path={AliasRoutes.AboutRule} element={<Rules/>}/>
            <Route exact={true} path={AliasRoutes.AboutGroup} element={<Group/>}/>
            <Route exact={true} path={AliasRoutes.AboutHall} element={<Hall/>}/>
            <Route exact={true} path={AliasRoutes.AboutQuery} element={<Query/>}/>
            <Route exact={true} path={AliasRoutes.Board} element={<Boards/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}

export default Layout;
