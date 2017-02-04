// src/style-guide/navs/navs.js
import React, { Component } from 'react';
import htmlContent from './navs-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="navs" title="Alerts" bootstrapUrlSuffix="/components/navs" htmlContent={ htmlContent } />
    );
  }
}
