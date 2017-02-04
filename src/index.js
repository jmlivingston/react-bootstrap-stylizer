import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.css';
import { hashHistory } from 'react-router';
import Routes from './routes';

import "../node_modules/tether/dist/css/tether.min.css";
import "../node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css";

import '../node_modules/jquery/dist/jquery.slim.min.js';
import '../node_modules/tether/dist/js/tether.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Footer from './core/footer/footer';
import Header from './core/header/header';

ReactDOM.render(
  <div>
    <main id="panel">
      <Header />
      <div className="main">
        <Routes history={hashHistory} />
      </div>
      <Footer />
    </main>
  </div>,
  document.getElementById('root')
);

function testInput(input) {
  let className = 'input-has-value';
  if (input.parentElement.classList.contains('app-tool-tip')) {
    if (input.value !== '') {
      if (input.parentElement.classList) {
        input.parentElement.classList.add(className);
      }
      else {
        input.parentElement.className += ' ' + className;
      }
    }
    else {
      if (input.parentElement.classList) {
        input.parentElement.classList.remove(className);
      }
      else {
        input.parentElement.className = input.parentElement.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  }
}


setTimeout(function () {
  var inputs = document.querySelectorAll('input');
  [].forEach.call(inputs, function (input) {
    testInput(input);
    input.addEventListener('keyup', function () {
      testInput(input);
    });
  });
}, 500)
