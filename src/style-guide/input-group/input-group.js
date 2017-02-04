// src/style-guide/input-group/input-group.js
import React, { Component } from 'react';
import htmlContent from './input-group-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="input-group" title="Input Group" bootstrapUrlSuffix="/components/input-group" htmlContent={ htmlContent } />
    );
  }
}
