---
title: List of things you’ll need
date: 2018-07-17T21:10:57+01:00
description: This is a list of things you’ll need to set up your Indiego Hugo website
tags: 
- IndieGo
image: 
imageAlt: 
imageCap: 
draft: false
---

## Minimal config in `config.yml`

1. `baseURL`: your site’s web address
2. `title`: The name of your site
3. `theme`: The name of your theme. If you change this from `indiegomin`, then you need to change the name of the [theme folder](https://github.com/growdigital/indiego/tree/master/themes) as well.
4. `author > name`: Use your own name, not mine
5. `author > email`: Ditto email
6. `params > description`: The description of your site
7. `params > publisher`: The organisation publishing the content, used in [microformats](https://www.indiego.org.uk/social#microformats-used)
8. `params > publisherLogo`: The publisher’s logo, in a bitmap format, set to 220 pixels × 220 pixels
9. `params > twitter`: Your Twitter handle
10. `params > facebook`: Your Facebook handle
11. `params > email`: Your (public facing) email address, used for [web sign-in](http://microformats.org/wiki/web-sign-in) on the [IndieWeb](https://indieweb.org/How_to_set_up_web_sign-in_on_your_own_domain)
12. `params > googleplus`: Your Google+ handle
13. `params > fbapp_id`: Your Facebook App ID, to enable posting
14. `params > tel`: Your (public facing) phone number, as a single number with country prefix (eg `+447398474064`) used for [web sign-in](http://microformats.org/wiki/web-sign-in) on the [IndieWeb](https://indieweb.org/How_to_set_up_web_sign-in_on_your_own_domain)

I know, 14 things is a **lot** of config. But it’s worth it.

## Some graphical things to get you moving

1. A logo for the home page! All graphics are stored as individual components in [`themes/indiegomin/src/modules/components/graphics`](https://github.com/growdigital/indiego/tree/master/themes/indiegomin/src/modules/components/graphics)
2. A favicon. To get properly setup with favicons, look at using the awesome [Favicon Generator](https://realfavicongenerator.net/)

