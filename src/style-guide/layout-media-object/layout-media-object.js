// src/style-guide/layout-media-object/layout-media-object.js
import React, { Component } from 'react';
import htmlContent from './layout-media-object-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="layout-media-object" title="Layout - Media Object" bootstrapUrlSuffix="/layout/media-object" htmlContent={ htmlContent } />
    );
  }
}
