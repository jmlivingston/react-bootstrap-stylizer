// src/style-guide/progress/progress.js
import React, { Component } from 'react';
import htmlContent from './progress-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="progress" title="Progress" bootstrapUrlSuffix="/components/progress" htmlContent={ htmlContent } />
    );
  }
}
