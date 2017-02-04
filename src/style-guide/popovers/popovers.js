// src/style-guide/popovers/popovers.js
import React, { Component } from 'react';
import htmlContent from './popovers-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="popovers" title="Alerts" bootstrapUrlSuffix="/components/popovers" htmlContent={ htmlContent } />
    );
  }
}
