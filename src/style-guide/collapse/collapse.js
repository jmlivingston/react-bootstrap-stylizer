// src/style-guide/collapse/collapse.js
import React, { Component } from 'react';
import htmlContent from './collapse-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="collapse" title="Collapse" bootstrapUrlSuffix="/components/collapse" htmlContent={ htmlContent } />
    );
  }
}
