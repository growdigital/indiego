---
title: Features
description: Additional feature branches for Indiego Hugo CMS starter kit. Each feature branch has its own subdomain. Copy at your whim & leisure. 
menu: main
date: 2018-02-09T19:21:11Z
image:
imageAlt:
draft: false
---

# Feature branches

* [Webfonts](https://webfonts.indiego.org.uk/) 
* [Progressive Web App](https://pwa.indiego.org.uk/) 

## Planned feature branches

* Comments by [Staticman](https://staticman.net/) 
* Simple analytics
* [Netlify CMS](https://www.netlifycms.org/)
* CSS grid
* SVG icons
* [Webmention](https://indieweb.org/Webmention)
* Shop with [Snipcart](https://snipcart.com/blog/hugo-tutorial-static-site-ecommerce)

## Feature branch file differences

Created a new theme for each feature branch called `goplus`. This makes it easier to merge the default theme `go` from the master branch.

### [Progressive Web App](https://pwa.indiego.org.uk/)

This is a manual process at the moment. There is a [Real Favicon Generator plugin for Gulp](https://realfavicongenerator.net/favicon/gulp) but I think the amount of complexity involved in setting it up isn't worth it for this project, so all the favicon generation is done via the website. It is also possible to put site variables into the `manifest.json` by [creating a custom output in Hugo](https://gohugo.io/templates/output-formats/) but again, haven’t done this.

```
themes/goplus/
  layouts/partials
    metahead.html
    pwa-register-serviceworker.html
    pwa.html
  static
    manifest.json
    offline.html
    serviceworker.js
  static/assets/pwa
    android-chrome-192x192.png
    android-chrome-512x512.png
    apple-touch-icon.png
    browserconfig.xml
    favicon-16x16.png
    favicon-32x32.png
    favicon.ico
    faviconData.json
    mstile-70x70.png
    mstile-144x144.png
    mstile-150x150.png
    mstile-310x150.png
    mstile-310x310.png
    safari-pinned-tab.svg
```
