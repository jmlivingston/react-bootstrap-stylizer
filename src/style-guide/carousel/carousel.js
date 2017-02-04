// src/style-guide/carousel/carousel.js
import React, { Component } from 'react';
import htmlContent from './carousel-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="carousel" title="Carousel" bootstrapUrlSuffix="/components/carousel" htmlContent={ htmlContent } />
    );
  }
}
