// src/style-guide/forms/forms.js
import React, { Component } from 'react';
import htmlContent from './forms-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="forms" title="Forms" bootstrapUrlSuffix="/components/forms" htmlContent={ htmlContent } />
    );
  }
}
