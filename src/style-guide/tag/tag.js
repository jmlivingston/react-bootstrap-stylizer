// src/style-guide/tag/tag.js
import React, { Component } from 'react';
import htmlContent from './tag-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="tag" title="Tag" bootstrapUrlSuffix="/components/tag" htmlContent={ htmlContent } />
    );
  }
}
