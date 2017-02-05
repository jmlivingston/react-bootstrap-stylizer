// ./src/style-guide/style-guide.js
import React, { Component } from 'react';
import '../../node_modules/prismjs/themes/prism-okaidia.css'
import '../../node_modules/prismjs/prism'

import StyleGuideAlerts from './alerts/alerts.js';
import StyleGuideBreadcrumb from './breadcrumb/breadcrumb.js';
import StyleGuideButtonGroup from './button-group/button-group.js';
import StyleGuideButtons from './buttons/buttons.js';
import StyleGuideCard from './card/card.js';
import StyleGuideCarousel from './carousel/carousel.js';
import StyleGuideCollapse from './collapse/collapse.js';
import StyleGuideContentFigures from './content-figures/content-figures.js';
import StyleGuideContentImages from './content-images/content-images.js';
import StyleGuideContentTables from './content-tables/content-tables.js';
import StyleGuideContentTypography from './content-typography/content-typography.js';
import StyleGuideDropdowns from './dropdowns/dropdowns.js';
import StyleGuideForms from './forms/forms.js';
import StyleGuideInputGroup from './input-group/input-group.js';
import StyleGuideJumbotron from './jumbotron/jumbotron.js';
import StyleGuideLayoutGrid from './layout-grid/layout-grid.js';
import StyleGuideLayoutMediaObject from './layout-media-object/layout-media-object.js';
import StyleGuideListGroup from './list-group/list-group.js';
import StyleGuideModal from './modal/modal.js';
import StyleGuideNavBar from './nav-bar/nav-bar.js';
import StyleGuideNavs from './navs/navs.js';
import StyleGuidePagination from './pagination/pagination.js';
import StyleGuidePopovers from './popovers/popovers.js';
import StyleGuideProgress from './progress/progress.js';
import StyleGuideTag from './tag/tag.js';
import StyleGuideTooltips from './tooltips/tooltips.js';

require('./style-guide.scss');

export default class StyleGuide extends Component {
    constructor() {
        super();
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    isHidden(title) {
        return (this.state.value !== '' && title.indexOf(this.state.value.toLowerCase())) === -1 ? 'hide' : '';
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1>Style Guide</h1>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-secondary float-right" onClick={this.expandCollapse}>Expand / Collapse</button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div>
                    <div className={this.isHidden('alerts')}>
                        <StyleGuideAlerts />
                    </div>
                    <div className={this.isHidden('breadcrumb')}>
                        <div className="container">
                            <hr />
                        </div>
                        <StyleGuideBreadcrumb />
                    </div>
                    <div className={this.isHidden('button group')}>
                        <StyleGuideButtonGroup />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('buttons')}>
                        <StyleGuideButtons />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('cards')}>
                        <StyleGuideCard />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('carousel')}>
                        <StyleGuideCarousel />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('collapse')}>
                        <StyleGuideCollapse />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('content - figures')}>
                        <StyleGuideContentFigures />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('content - images')}>
                        <StyleGuideContentImages />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('content - tables')}>
                        <StyleGuideContentTables />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('typography')}>
                        <StyleGuideContentTypography />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('dropdowns')}>
                        <StyleGuideDropdowns />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('forms')}>
                        <StyleGuideForms />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('input group')}>
                        <StyleGuideInputGroup />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('jumbotron')}>
                        <StyleGuideJumbotron />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('layout grid')}>
                        <StyleGuideLayoutGrid />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('layout media object')}>
                        <StyleGuideLayoutMediaObject />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('list group')}>
                        <StyleGuideListGroup />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('modal')}>
                        <StyleGuideModal />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('nav bar')}>
                        <StyleGuideNavBar />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('navs')}>
                        <StyleGuideNavs />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('pagination')}>
                        <StyleGuidePagination />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('popovers')}>
                        <StyleGuidePopovers />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('progress')}>
                        <StyleGuideProgress />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('tags')}>
                        <StyleGuideTag />
                        <div className="container">
                            <hr />
                        </div>
                    </div>
                    <div className={this.isHidden('tooltips')}>
                        <StyleGuideTooltips />
                    </div>
                </div>
            </div>
        );
    }

    expandCollapse() {
        document.querySelectorAll('.panel-heading > a.collapse-link').forEach(function (e) { e.click() });
    }
}