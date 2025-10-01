import React, { Component, lazy } from 'react';

import { Routes, Route } from "react-router-dom";

import NewsPage from 'views/NewsPage';
import Hall from 'views/about/hall/Hall';
import BoardsPage from 'views/BoardsPage';
import Rules from 'views/about/rule/Rules';
import Formats from 'views/formats/Formats';
import Group from 'views/about/group/Group';
import Query from 'views/about/query/Query';
import AliasRoutes from "routes/AliasRoutes";
import ActivityPage from 'views/ActivityPage';
import Activities from 'views/activities/Activities';
import SideNavigations from 'components/SideNavigations';
import SecurityKnowledge from 'views/security/knowledge/SecurityKnowledge';


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
            <Route exact={false} path={AliasRoutes.News + '/*'} element={<NewsPage/>}/>
            <Route exact={true} path={AliasRoutes.Activities} element={<Activities/>}/>
            <Route exact={true} path={AliasRoutes.ActivitiesYear + '/:year'} element={<Activities/>}/>
            <Route exact={false} path={AliasRoutes.Activity} element={<ActivityPage/>}/>
            <Route exact={true} path={AliasRoutes.SecurityKnowledge} element={<SecurityKnowledge/>}/>
            <Route exact={true} path={AliasRoutes.Formats} element={<Formats/>}/>
            <Route exact={true} path={AliasRoutes.AboutRule} element={<Rules/>}/>
            <Route exact={true} path={AliasRoutes.AboutGroup} element={<Group/>}/>
            <Route exact={true} path={AliasRoutes.AboutHall} element={<Hall/>}/>
            <Route exact={true} path={AliasRoutes.AboutQuery} element={<Query/>}/>
            <Route exact={false} path={AliasRoutes.Board + '/year/:year'} element={<BoardsPage/>}/>
            <Route exact={false} path={AliasRoutes.Board + '/*'} element={<BoardsPage/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}

export default Layout;
