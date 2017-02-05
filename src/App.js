import React, { Component } from 'react';
import './App.scss';
import Theme from './core/style/theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateTheme = this.updateTheme.bind(this);
    this.theme = new Theme();
    let themes = this.theme.getThemes();
    this.originalThemes = themes.filter(t => { return t.path.toLowerCase().indexOf('original') !== -1; });
    this.customThemes = themes.filter(t => { return t.path.toLowerCase().indexOf('bootswatch') === -1 && t.path.toLowerCase().indexOf('original') === -1; });
    this.bootswatchThemes = themes.filter(t => { return t.path.toLowerCase().indexOf('bootswatch') !== -1 && t.path.toLowerCase().indexOf('original') === -1; });
    this.currentTheme = this.theme.getTheme();
  }

  updateTheme(item) {
    this.theme.setTheme(item);
  }

  render() {
    let originalThemeButtons = this.originalThemes.map((item, index) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
          <button className={"btn btn-block mb-2 " + (item.name === this.currentTheme.name ? 'btn-primary' : 'btn-secondary')} disabled={item.name === this.currentTheme.name ? "disabled" : false}
            onClick={() => this.updateTheme(item)}>{item.name.replace('Custom - ', '')}</button>
        </div>
      )
    });
    let customThemeButtons = this.customThemes.map((item, index) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
          <button className={"btn btn-block mb-2 " + (item.name === this.currentTheme.name ? 'btn-primary' : 'btn-secondary')} disabled={item.name === this.currentTheme.name ? "disabled" : false}
            onClick={() => this.updateTheme(item)}>{item.name.replace('Custom - ', '')}</button>
        </div>
      )
    });
    let bootswatchThemeButtons = this.bootswatchThemes.map((item, index) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
          <button className={"btn btn-block mb-2 " + (item.name === this.currentTheme.name ? 'btn-primary' : 'btn-secondary')} disabled={item.name === this.currentTheme.name ? "disabled" : false}
            onClick={() => this.updateTheme(item)}>{item.name.replace('Bootswatch - ', '')}</button>
        </div>
      )
    });
    return (
      <div className="App">
        <div className="App-header container">
          <h2 className="display-4 text-center p-2">React - Bootstrap Stylizer</h2>
          <h3 className="display-5 text-center p-2">Style your React project with Bootstrap v4.0 SASS like a <strong>boss</strong>!</h3>
          <h2 className="bg-success text-white p-2">
            Build
          </h2>
          <ul>
            <li>
              Clone first with: <strong>git clone https://github.com/jmlivingston/react-bootstrap-stylizer</strong>
            </li>            
            <li>
              Install packages and run: <strong>npm install & npm run</strong>
            </li>
            <li>
              Open the <a href="#/style-guide">Style Guide</a> to see primary Bootstrap components.
            </li>
            <li>
              Pick a theme from the dropdown menu. <a href="//bootswatch.com/4-alpha/">Bootswatch</a> themes use the SASS files provided by <a href="//bootswatch.com/4-alpha/">Bootswatch</a>. Many of these are great off the shelf, but they're also great starting points.
            </li>
            <li>
              Review all components or click on a specific component to make tweaks specifically to that component.
            </li>
            <li>
              Tweak the SASS in core/style directory. Typically you would start with the _variables.scss which are the default Bootstrap variables.
              For example: try changing the $body-bg variable to something different.
              </li>
            <li>
              For more details on Bootstrap's customization options, see: <a href="//v4-alpha.getbootstrap.com/getting-started/options" target="_new">Customization Options</a>. This is not a comprehensive list of all the variables, but should get you started.
            </li>
          </ul>

          <h2 className="bg-success text-white p-2">
            Export
          </h2>
          <ul>
            <li>
              Copy files from the theme folder you are targeting. For example: core/style/themes/bootstwatch/lumen.
            </li>
            <li>
              Copy the _bootstrap.scss from the original folder.
            </li>
            <li>
              Install the latest Bootstrap package via npm into your package. Important: Make sure this is the same version as in the _bootstrap.scss.
            </li>
          </ul>

          <h2 className="bg-success text-white p-2">Optimize</h2>
          <ul>
            <li>
              Bootstrap 4 is now minified to 152 KB, but you can further optimize it by commenting out components you don't need in _bootstrap.scss.
            </li>
          </ul>
          <h2 className="bg-success text-white p-2">
            Style Guide
          </h2>
          <p>
            The markup in the style guide is meant to be used by developers, UX, and clients alike. Developers can focus on ensuring code is modular, avoid code duplication, and use the code snippets to quickly scaffold pages.
            UX can use the page as an interactive style guide for review with the client.
          </p>
          <h2 className="bg-success text-white p-2">Theming</h2>
          <p>For theming support, checkout the code in core/style/theme.js, app.js, and core/header/header.js.</p>
          <h4>Original</h4>
          <div className="row">
            {originalThemeButtons}
          </div>
          <h4>Custom</h4>
          <div className="row">
            {customThemeButtons}
          </div>
          <h4>Bootswatch</h4>
          <div className="row">
            {bootswatchThemeButtons}
          </div>

          <h2 className="bg-success text-white p-2">
            Credit
          </h2>
          <p>None of this would be possible without these awesome technologies:</p>
          <ul>
            <li><a href="//facebook.github.io/react" target="_new">React</a>
            </li>
            <li><a href="//github.com/facebookincubator/create-react-app" target="_new">create-react-app</a>
            </li>
            <li>
              <a href="//v4-alpha.getbootstrap.com/" target="_new">Bootstrap v4.0</a>
            </li>
            <li>
              <a href="//bootswatch.com/4-alpha/" target="_new">Bootswatch</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
