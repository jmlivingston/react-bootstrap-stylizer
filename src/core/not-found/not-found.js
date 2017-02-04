// src/core/not-found/not-found.js
import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}