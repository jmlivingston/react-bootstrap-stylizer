// src/style-guide/jumbotron/jumbotron.js
import React, { Component } from 'react';
import htmlContent from './jumbotron-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="jumbotron" title="Jumbotron" bootstrapUrlSuffix="/components/jumbotron" htmlContent={ htmlContent } />
    );
  }
}
