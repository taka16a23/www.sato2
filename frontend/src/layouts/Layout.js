import React, { Component, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import AliasRoutes from "routes/AliasRoutes";
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'views/Home';
import SecurityPortal from 'views/SecurityPortal';
import SideNavigationLayout from 'layouts/SideNavigationLayout';


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
