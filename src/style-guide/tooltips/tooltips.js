// src/style-guide/tooltips/tooltips.js
import React, { Component } from 'react';
import htmlContent from './tooltips-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="tooltips" title="Tooltips" bootstrapUrlSuffix="/components/tooltips" htmlContent={ htmlContent } />
    );
  }
}
