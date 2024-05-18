import React, { Component } from "react";
import SatoFormats from 'components/SatoFormats'
import OtherFormats from 'components/OtherFormats'


class FormatsComponent extends Component {

  render() {
    return (
      <main id="main">
        <SatoFormats/>
        <OtherFormats/>
      </main>
    );
  };
}

export default FormatsComponent;
