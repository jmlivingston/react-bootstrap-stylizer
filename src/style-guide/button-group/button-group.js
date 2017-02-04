// src/style-guide/button-group/button-group.js
import React, { Component } from 'react';
import htmlContent from './button-group-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="button-group" title="Button Group" bootstrapUrlSuffix="/components/button-group" htmlContent={ htmlContent } />
    );
  }
}
