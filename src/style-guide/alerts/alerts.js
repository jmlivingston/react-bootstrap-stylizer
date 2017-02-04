// src/style-guide/alerts/alerts.js
import React, { Component } from 'react';
import htmlContent from './alerts-markup.html';
import StyleGuideCode from '../code/code.js';

export default class StyleGuideAlert extends Component {
  render() {
    return (
      <StyleGuideCode id="alerts" title="Alerts" bootstrapUrlSuffix="/components/alerts" htmlContent={ htmlContent } />
    );
  }
}
