// src/style-guide/breadcrumb/breadcrumb.js
import React, { Component } from 'react';
import htmlContent from './breadcrumb-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="breadcrumb" title="Breadcrumb" bootstrapUrlSuffix="/components/breadcrumb" htmlContent={ htmlContent } />
    );
  }
}
