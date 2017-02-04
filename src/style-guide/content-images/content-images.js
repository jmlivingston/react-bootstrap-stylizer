// src/style-guide/content-images/content-images.js
import React, { Component } from 'react';
import htmlContent from './content-images-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="content-images" title="Content - Images" bootstrapUrlSuffix="/content/images" htmlContent={ htmlContent } />
    );
  }
}
