// src/style-guide/pagination/pagination.js
import React, { Component } from 'react';
import htmlContent from './pagination-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="pagination" title="Alerts" bootstrapUrlSuffix="/components/pagination" htmlContent={ htmlContent } />
    );
  }
}
