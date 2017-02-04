// src/style-guide/nav-bar/nav-bar.js
import React, { Component } from 'react';
import htmlContent from './nav-bar-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="nav-bar" title="NavBar" bootstrapUrlSuffix="/components/navbar" htmlContent={ htmlContent } />
    );
  }
}
