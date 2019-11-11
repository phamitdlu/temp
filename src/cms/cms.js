import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'


import { HomePageTemplate } from '../templates/HomePage'
import { ComponentsPageTemplate } from '../templates/ComponentsPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { DefaultPageTemplate } from '../templates/DefaultPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplate } from '../templates/SinglePost'

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('components-page', ({ entry }) => (
  <ComponentsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))

import uuid from 'uuid/v4';
/**
 * Create the control widget, this will add a form element to the cms UI
 */
const IdControl = window.createClass({  
    getInitialState: function() {    return {};  },
    componentDidMount: function() {
        // If this widget doesn't have an ID yet we create one using the UUID package    
        if (!this.props.value) { 
            this.props.onChange(uuid());    
        } 
    }, 
    handleChange() { 
        this.props.onChange(uuid());
    },  
    render: function() { 
        return window.h('p', null, `${this.props.value}`);
    }
});

/**
 * Create the preview widget, this will display the widgets value in the NetlifyCMS preview pane
 */
const IdPreview = window.createClass({  
    getInitialState: function() { console.log(this.props); return {}; }, 
    render: function() { 
        return window.h('p', null, `ID: ${this.props.value}`);  
    }
});

// Register the widget. This lets NetlifyCMS know about our custom widget
CMS.registerWidget('id', IdControl, IdPreview);
console.log(uuid());