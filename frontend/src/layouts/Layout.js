import React, { Component } from 'react';

import { Routes, Route } from "react-router-dom";

import Header from 'components/Header';
import SecurityPortal from 'views/security/portal/SecurityPortal';
import Home from 'views/Home';
import SideNavigationLayout from 'layouts/SideNavigationLayout';
import Footer from 'components/Footer';
import AliasRoutes from "routes/AliasRoutes";


class Layout extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-inner">
          <Header/>
          <div id="content">
            <div className="content-inner">
              <Routes>
                <Route path={AliasRoutes.SecurityPortal} element={<SecurityPortal/>}/>
                <Route exact={true} path="/" element={<Home/>}/>
                <Route path='*' element={<SideNavigationLayout/>}/>
              </Routes>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Layout;
