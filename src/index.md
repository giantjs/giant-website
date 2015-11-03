<!-- @@@page:index@@@ -->
<!-- @@@title:GiantJS@@@ -->

<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>


- ![GiantJS logo](images/giantjs-logo.png)
- **gigantic** /dʒʌɪˈɡantɪk/
 
  *adjective*
  
  1. of very great size or extent; huge or enormous: *that gigantic codebase was over 100kloc*
  2. built with the front end framework "GiantJS"


- <a href="https://twitter.com/giantjsorg" class="twitter-follow-button" data-show-count="false">Follow @giantjsorg</a>  
- <iframe src="https://ghbtns.com/github-btn.html?user=giantjs&repo=giant&type=star&count=true" frameborder="0" scrolling="0" width="120px" height="20px"></iframe>

GiantJS is a full-featured, modular framework for building complex, modern Single-Page Applications. It targets multi-platform, enterprise-grade projects, stimulating unlimited, steady growth.

The purpose of GiantJS is to give developers a *single, coherent system* with recurring practices and patterns, serving as a solid foundation to a *wide variety* of applications.

Features
--------

- ### Complete

  Covers all major aspects of modern web applications.

- ### Modular

  Doesn't force you to use functionality you don't need.

- ### Scalable

  Allows your application to grow fast.

- ### Extensible

  Can be tailored to the application.

- ### Coherent

  Uses the same recurring patterns across modules.

- ### Isomorphic

  Designed to run in both browser & Node.
  
- ### Object-oriented

  Built on a flexible, prototype-based, custom class system.

- ### Evented

  De-couples components via universal, bubbling events.

- ### Data-driven

  Maintains application state in a central datastore.

Who's using it?
---------------

- **[Production Minds](https://pmp.productionminds.com)**

  Online collaboration system for the film industry.

  ![The Production Minds Platform](https://raw.githubusercontent.com/giantjs/giantjs.org/master/images/pmp.png)

- **[In The Window™](https://thewindow.com)**

  Social platform for designers.

  ![In The Window™](https://raw.githubusercontent.com/giantjs/giantjs.org/master/images/in-the-window.png)
  
- **[Mangahigh.com](https://mangahigh.com/login)**

  Math education platform.

  ![Mangahigh.com](https://raw.githubusercontent.com/giantjs/giantjs.org/master/images/mangahigh.png)

Roadmap
-------

**The goal is to get to version 1.0 by the end of 2015.** The figures below indicate how close each module is to that, in terms of feature-readiness. (Not including documentation.) Version 1.0 will be released when all modules in the first table stand at 100%.

### Initial release

| Module name | Tier | Description | Progress
|:------------|:-----|:------------|----------:
| **giant** | N/A | Framework umbrella package | 100%
| **giant-development** | N/A | Framework contribution tools | 100%
| giant-project-boilerplate | N/A | Project boilerplate | planned
| giant-module-boilerplate | N/A | Module boilerplate | planned
| giant-assertion | essentials | Extensible assertions | 80%
| giant-behaviors | essentials | Common class behaviors | planned
| giant-data | essentials | Basic data structures | 100%
| giant-event | essentials | Universal events | 100%
| giant-oop | essentials | OOP & testing tools | 100%
| giant-table | essentials | Indexed tables | 100%
| giant-templating | essentials | String templating | 90%
| giant-utils | essentials | General utility classes | 90%
| giant-entity | core | Entity framework | 100%
| giant-i18n | core | Internationalization | 95%
| giant-routing | core | Routing | 100%
| giant-rest | core | REST API access | planned
| giant-widget | core | Widget framework | 90%
| giant-cli | auxiliary | Application building tools | planned
| giant-asset | auxiliary | Asset management | 90%
| giant-basic-widgets | auxiliary | Basic widgets | planned
| giant-common-widgets | obsolete | Commonly used widgets | N/A
| giant-transport | obsolete | Transport layer | N/A

### To be released later

| Module name | Tier | Description | Progress
|:------------|:-----|:------------|---------:
| giant-session | core | User session management | planned
| giant-automation | auxiliary | Batch scripting tools | planned
| giant-cli-tools | auxiliary | CLI building tools | 30%
| giant-diagnostic-widgets | auxiliary | Runtime diagnostic tools | planned
| giant-ga-tools | auxiliary | Google Analytics integration | planned
| giant-grunt-tools | auxiliary | [Grunt](http://gruntjs.com/) integration | 80%
| giant-logging | auxiliary | Logging | planned
| giant-material-widgets | auxiliary | Widgets based on [Google Material Design](https://www.google.com/design/spec/material-design) | planned
| giant-offline | auxiliary | Offline entity persistence | planned

GiantJS is in alpha. Frequent breaking changes may occur.
