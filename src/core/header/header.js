// src/core/header/header.js
import React, { Component } from 'react';
import Theme from '../style/theme';
import './header.scss';

export default class Header extends Component {
    constructor() {
        super();
        this.updateTheme = this.updateTheme.bind(this);
        this.theme = new Theme();
        this.themes = this.theme.getThemes();
        this.currentTheme = this.theme.getTheme();
    }

    updateTheme(item) {
        this.theme.setTheme(item);
    }

    render() {
        let themeLinks = this.themes.map((item, index) => {
            return (
                <a key={index} className="dropdown-item" disabled={item.name === this.currentTheme.name ? "disabled" : false}
                    onClick={() => this.updateTheme(item)}>{item.name}</a>
            )
        });
        return (
            <div className="bg-primary">
                <nav className="navbar navbar-toggleable-md fixed-top">
                    <div className="container">
                        <button className="navbar-toggler mr-2" type="button" data-toggle="collapse" aria-expanded="false" aria-controls="exCollapsingNavbar2" data-target="#exCollapsingNavbar2" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#/">Home</a>
                        <div className="collapse navbar-collapse" id="exCollapsingNavbar2" aria-expanded="false">
                            <ul className="nav navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#/style-guide">Style Guide <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.currentTheme.name}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        {themeLinks}
                                    </div>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="//www.johnlivingston.io" target="_new">
                                        johnlivingston.io
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="//github.com/jmlivingston/react-bootstrap-stylizer" target="_new">
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}