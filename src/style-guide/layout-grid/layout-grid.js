// src/style-guide/layout-grid/layout-grid.js
import React, { Component } from 'react';
import htmlContent from './layout-grid-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="layout-grid" title="Layout - Grid" bootstrapUrlSuffix="/layout/grid" htmlContent={ htmlContent } />
    );
  }
}
