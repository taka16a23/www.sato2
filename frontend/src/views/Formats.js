import React, { Component } from "react";
import AliasRoutes from "routes/AliasRoutes";
import { ServiceFactory } from 'services';
import downlaodImg from 'assets/images/formats_download.svg';
import formImg from 'assets/images/formats_form.svg';
import SatoFormats from 'components/SatoFormats'
import OtherFormats from 'components/OtherFormats'
import SideNavigations from 'components/SideNavigations';


class FormatsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="container">
        <SideNavigations/>
        <div className="main-area">
          <main id="main">
            <SatoFormats/>
            <OtherFormats/>
          </main>
        </div>
      </div>
    );
  };
}

export default FormatsComponent;
