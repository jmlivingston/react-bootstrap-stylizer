// src/style-guide/dropdowns/dropdowns.js
import React, { Component } from 'react';
import htmlContent from './dropdowns-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="dropdowns" title="Dropdowns" bootstrapUrlSuffix="/components/dropdowns" htmlContent={ htmlContent } />
    );
  }
}
