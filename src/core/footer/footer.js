// src/core/footer/footer.js
import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-primary text-white">
                <div className="container text-center">
                    <a href="/" className="text-white">Home</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="/style-guide" className="text-white">Style Guide</a>
                </div>
            </footer>
        );
    }
}