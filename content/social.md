---
title: Social
description: Indiego outputs microformat-ready posts and pages which can be previewed by different social networks
menu: main
date: 2018-02-09T19:21:11Z
image: https://www.indiego.org.uk/assets/img/social.png
imageAlt: Happy pacman face chatting RSS symbols to Google Plus, Facebook and Twitter logos – blah! blah! blah!
draft: false
---

# Socially aware

Indiego outputs all blog and status posts in a format which can be previewd in all major social networks. What this means in practise is a **nice picture** when you post a link to Facebook, Twitter and Google.

Currently, you still need to use a third party service to share your <abbr title="Really Simple Syndication">[RSS](https://en.wikipedia.org/wiki/RSS)</abbr> news feed with social networks. I use the free plans on [Hootsuite](https://hootsuite.com/) for Facebook & WordPress, and [dlvr.it](https://dlvrit.com/) for Twitter, Google+ & Linkedin.

## How did you do it?

Well, I read this post called [Must-Have Social Meta Tags for Twitter, Google+, Facebook and More](https://moz.com/blog/meta-data-templates-123). It covers the basics, with examples and with plenty of further reading.

## Microformats used

Indiego uses **4** different [microformats](https://en.wikipedia.org/wiki/Microformat):

1. [h-entry](http://microformats.org/wiki/h-entry) open format
2. [Twitter cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards) for Twitter
3. [Facebook Open Graph](https://developers.facebook.com/docs/sharing/opengraph) for Facebook
4. [schema.org](http://schema.org/docs/gs.html) for [Google+](https://developers.google.com/+/web/snippet/) et al (including [Pinterest](https://developers.pinterest.com/docs/rich-pins/articles/?))

### Micformat files

Just so you know, the microformats are defined in 3 places:

1. [micro-twitog](https://github.com/growdigital/indiego/blob/master/themes/indiegomin/layouts/partials/micro-twitog.html) partial for Twitter cards and Facebook Open Graph, pulled into the `<head>`
2. [micro-schema](https://github.com/growdigital/indiego/blob/master/themes/indiegomin/layouts/partials/micro-schema.html) partial for Schema, inserted into the top of the `blog` & `status` `<article>`
3. [h-entry](http://microformats.org/wiki/h-entry) classes scattered in the `blog` & `status` `<article>`

### Microformat validator tools

To ensure the microformats in your posts validate properly, use these tools:

* Indiewebify.me h-entry validator  
  <https://indiewebify.me/validate-h-entry/>
* Twitter Card validator  
  <https://cards-dev.twitter.com/validator>
* Facebook Debugger  
  <https://developers.facebook.com/tools/debug/>
* Google Structured Data Testing Tool  
  <https://search.google.com/structured-data/testing-tool>
* Pinterest Rich Pins Validator  
  <https://developers.pinterest.com/tools/url-debugger/>
