// src/style-guide/list-group/list-group.js
import React, { Component } from 'react';
import htmlContent from './list-group-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="list-group" title="List Group" bootstrapUrlSuffix="/components/list-group" htmlContent={ htmlContent } />
    );
  }
}
