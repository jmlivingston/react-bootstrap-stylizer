// src/style-guide/content-figures/content-figures.js
import React, { Component } from 'react';
import htmlContent from './content-figures-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="content-figures" title="Content - Figures" bootstrapUrlSuffix="/content/figures" htmlContent={ htmlContent } />
    );
  }
}
