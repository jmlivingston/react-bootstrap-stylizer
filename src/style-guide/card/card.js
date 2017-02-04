// src/style-guide/card/card.js
import React, { Component } from 'react';
import htmlContent from './card-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="card" title="Card" bootstrapUrlSuffix="/components/card" htmlContent={ htmlContent } />
    );
  }
}
