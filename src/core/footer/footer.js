// src/core/footer/footer.js
import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container text-center">
                    <a href="#/">Home</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="#/style-guide">Style Guide</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="//www.johnlivingston.io" target="_new">
                        johnlivingston.io
                    </a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="//github.com/jmlivingston/react-bootstrap-stylizer" target="_new">
                        GitHub
                    </a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="//jmlivingston.github.io/angular-bootstrap-stylizer" target="_new">
                        Angular Version
                    </a>
                </div>
            </footer>
        );
    }
}