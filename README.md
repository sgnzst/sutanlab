# Sutanlab Homepage

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1ee84c1098024c34a204f9f9f6a764b1)](https://app.codacy.com/app/sutanlab/sutanlab.github.io?utm_source=github.com&utm_medium=referral&utm_content=sutanlab/sutanlab.github.io&utm_campaign=Badge_Grade_Dashboard) [![Build Status](https://travis-ci.org/sutanlab/sutanlab.github.io.svg?branch=development)](https://travis-ci.org/sutanlab/sutanlab.github.io) [![David](https://img.shields.io/david/sutanlab/sutanlab.github.io.svg)](https://github.com/sutanlab/sutanlab.github.io) [![Website](https://img.shields.io/website/https/sutanlab.js.org.svg)](https://sutanlab.js.org) [![Performance](test/lh-scores/lighthouse_performance.svg)](https://sutanlab.js.org) [![Accessibility](test/lh-scores/lighthouse_accessibility.svg)](https://sutanlab.js.org) [![Best Practice](test/lh-scores/lighthouse_best-practices.svg)](https://sutanlab.js.org) [![SEO](test/lh-scores/lighthouse_seo.svg)](https://sutanlab.js.org) [![PWA](test/lh-scores/lighthouse_pwa.svg)](https://sutanlab.js.org)

> My Personal Homepage & Blog site with NuxtJS : https://sutanlab.js.org

### Required in System

1. [NodeJS](https://nodejs.org/en/download/)
2. [Globally Lighthouse Badges](https://github.com/emazzotta/lighthouse-badges)

### Build setup

``` bash
$ npm install # install dependencies

$ npm run dev # serve with hot reload at local server

$ npm run build # build for production

$ npm start # launch server for production

$ npm run generate # generate static project

$ npm run test # test with jest environment

$ npm run deploy # deploy static site to Github Pages

$ npm run score # generate lighthouse badges for deployed site
```

### Use make post template

``` bash
$ ./post -h # output instructions

$ ./post -c {POST_TITLE} # create post

$ ./post -d {POST_TITLE} # create draft post

$ ./post -p {POST_TITLE} # publish/promote a draft to a post
```

#### Note: How to resolve System limit for number of file watchers reached

```bash
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

This site use Nuxt.js Framework. [Read Nuxt.js Documentation](https://nuxtjs.org).

### Special Thanks to :

- [Marina Aisa](https://marinaaisa.com/blog/blog-using-vue-nuxt-markdown)
- [Irfan Maulana](https://github.com/mazipan/blog-2.0)
- [Vitor Britto](https://github.com/vitorbritto/forcefiles/blob/master/scripts/initpost.sh)
- [JS ORG](https://github.com/js-org/js.org)

* * *

Copyright © 2019 by Sutan Gading Fadhillah Nasution
