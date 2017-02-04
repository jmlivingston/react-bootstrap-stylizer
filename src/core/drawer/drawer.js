/*// src/core/drawer/drawer.js
import React, { Component } from 'react';
import '../../../node_modules/slideout/index.css';
import './drawer.scss';

var SlideOut = require('slideout');
let slideout = null;

export default class Drawer extends Component {
    componentDidMount = function () {
        slideout = new SlideOut({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 256,
            'tolerance': 70
        });
    }
    slideToggle = function () {
        slideout.toggle();
        return;
    }
    render() {
        return (
            <nav id="menu" className="menu">                
                <ul className="nav nav-pills nav-stacked">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/style-guide">Style Guide</a>
                    </li>
                </ul>
                <input type="hidden" id="slide-toggle" onClick={this.slideToggle} />
                <h1>TODO: Styling</h1>
            </nav>
        );
    }
}*/