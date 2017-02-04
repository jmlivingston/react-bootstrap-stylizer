// src/style-guid.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import StyleGuide from './style-guide/style-guide';
import StyleGuideAlerts from './style-guide/alerts/alerts.js';
import StyleGuideBreadcrumb from './style-guide/breadcrumb/breadcrumb.js';
import StyleGuideButtonGroup from './style-guide/button-group/button-group.js';
import StyleGuideButtons from './style-guide/buttons/buttons.js';
import StyleGuideCard from './style-guide/card/card.js';
import StyleGuideCarousel from './style-guide/carousel/carousel.js';
import StyleGuideCode from './style-guide/code/code.js';
import StyleGuideCollapse from './style-guide/collapse/collapse.js';
import StyleGuideContentFigures from './style-guide/content-figures/content-figures.js';
import StyleGuideContentImages from './style-guide/content-images/content-images.js';
import StyleGuideContentTables from './style-guide/content-tables/content-tables.js';
import StyleGuideContentTypography from './style-guide/content-typography/content-typography.js';
import StyleGuideDropdowns from './style-guide/dropdowns/dropdowns.js';
import StyleGuideForms from './style-guide/forms/forms.js';
import StyleGuideInputGroup from './style-guide/input-group/input-group.js';
import StyleGuideJumbotron from './style-guide/jumbotron/jumbotron.js';
import StyleGuideLayoutGrid from './style-guide/layout-grid/layout-grid.js';
import StyleGuideLayoutMediaObject from './style-guide/layout-media-object/layout-media-object.js';
import StyleGuideListGroup from './style-guide/list-group/list-group.js';
import StyleGuideModal from './style-guide/modal/modal.js';
import StyleGuideNavBar from './style-guide/nav-bar/nav-bar.js';
import StyleGuideNavs from './style-guide/navs/navs.js';
import StyleGuidePagination from './style-guide/pagination/pagination.js';
import StyleGuidePopovers from './style-guide/popovers/popovers.js';
import StyleGuideProgress from './style-guide/progress/progress.js';
import StyleGuideTag from './style-guide/tag/tag.js';
import StyleGuideTooltips from './style-guide/tooltips/tooltips.js';
import NotFound from './core/not-found/not-found';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/style-guide" component={StyleGuide} />
    <Route path="/style-guide/alerts" component={StyleGuideAlerts} />
    <Route path="/style-guide/breadcrumb" component={StyleGuideBreadcrumb} />
    <Route path="/style-guide/button-group" component={StyleGuideButtonGroup} />
    <Route path="/style-guide/buttons" component={StyleGuideButtons} />
    <Route path="/style-guide/card" component={StyleGuideCard} />
    <Route path="/style-guide/carousel" component={StyleGuideCarousel} />
    <Route path="/style-guide/code" component={StyleGuideCode} />
    <Route path="/style-guide/collapse" component={StyleGuideCollapse} />
    <Route path="/style-guide/content-figures" component={StyleGuideContentFigures} />
    <Route path="/style-guide/content-images" component={StyleGuideContentImages} />
    <Route path="/style-guide/content-tables" component={StyleGuideContentTables} />
    <Route path="/style-guide/content-typography" component={StyleGuideContentTypography} />
    <Route path="/style-guide/dropdowns" component={StyleGuideDropdowns} />
    <Route path="/style-guide/forms" component={StyleGuideForms} />
    <Route path="/style-guide/input-group" component={StyleGuideInputGroup} />
    <Route path="/style-guide/jumbotron" component={StyleGuideJumbotron} />
    <Route path="/style-guide/layout-grid" component={StyleGuideLayoutGrid} />
    <Route path="/style-guide/layout-media-object" component={StyleGuideLayoutMediaObject} />
    <Route path="/style-guide/list-group" component={StyleGuideListGroup} />
    <Route path="/style-guide/modal" component={StyleGuideModal} />
    <Route path="/style-guide/nav-bar" component={StyleGuideNavBar} />
    <Route path="/style-guide/navs" component={StyleGuideNavs} />
    <Route path="/style-guide/pagination" component={StyleGuidePagination} />
    <Route path="/style-guide/popovers" component={StyleGuidePopovers} />
    <Route path="/style-guide/progress" component={StyleGuideProgress} />
    <Route path="/style-guide/tag" component={StyleGuideTag} />
    <Route path="/style-guide/tooltips" component={StyleGuideTooltips} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;