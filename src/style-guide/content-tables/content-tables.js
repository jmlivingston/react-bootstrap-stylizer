// src/style-guide/content-tables/content-tables.js
import React, { Component } from 'react';
import htmlContent from './content-tables-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="content-tables" title="Content - Tables" bootstrapUrlSuffix="/content/tables" htmlContent={ htmlContent } />
    );
  }
}
