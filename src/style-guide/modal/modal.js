// src/style-guide/modal/modal.js
import React, { Component } from 'react';
import htmlContent from './modal-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="modal" title="Modal" bootstrapUrlSuffix="/components/modal" htmlContent={ htmlContent } />
    );
  }
}
