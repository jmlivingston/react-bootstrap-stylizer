// src/style-guide/buttons/buttons.js
import React, { Component } from 'react';
import htmlContent from './buttons-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="buttons" title="Buttons" bootstrapUrlSuffix="/components/buttons" htmlContent={ htmlContent } />
    );
  }
}
