// src/style-guide/content-typography/content-typography.js
import React, { Component } from 'react';
import htmlContent from './content-typography-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="content-typography" title="Content - Typography" bootstrapUrlSuffix="/content/typography" htmlContent={ htmlContent } />
    );
  }
}
