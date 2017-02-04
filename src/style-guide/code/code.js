// src/style-guide/code/code.js
import React, { Component } from 'react';

export default class StyleGuideCode extends Component {
    constructor() {
        super();
        this.state = { bootstrapUrlPrefix: '//v4-alpha.getbootstrap.com' };
    }
    render() {
        return (
            <div className="container">
                <h3><a href={'#/style-guide/' + this.props.id}>{this.props.title}</a></h3>
                <div dangerouslySetInnerHTML={{ __html: this.props.htmlContent }} />
                <br />
                <div id={'accordion-' + this.props.id} role="tablist" aria-multiselectable="true" className="p-t-1">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="panel-buttons">
                            <a data-toggle="collapse" data-parent={'#accordion-' + this.props.id} href={'#collapse-' + this.props.id} aria-expanded="true" aria-controls={'collapse-' + this.props.id}
                                className="collapse-link btn btn-primary btn-sm">
                                &lt;Code&gt;
                            </a>&nbsp;   
                            <a className="btn btn-secondary btn-sm" href={ this.state.bootstrapUrlPrefix + (this.props.bootstrapUrlSuffix || '') } target="new">Bootstrap <i className="fa fa-external-link"></i></a>
                        </div>
                        <br />
                        <div id={'collapse-' + this.props.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby="panel-buttons">
                            <pre><code className="language-html">{this.props.htmlContent}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
