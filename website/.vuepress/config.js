const package = require('../../package.json')

module.exports = {
  base: "/thaibank/",
  head: [
    ['meta', {
      hid: 'author',
      key: 'author',
      content: package.author
    }]
  ],
  locales: {
    '/': {
      lang: 'th-TH',
      title: 'ธนาคารในประเทศไทย',
      description: package.descriptionTH,
    },
    '/en/': {
      lang: 'en-US',
      title: 'Thai bank',
      description: package.description,
    }
  },
  dest: 'public',
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        // Don't forget to install moment yourself
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).format("DD MMM YYYY HH:mm:ss")
      }
    },
    '@vuepress/medium-zoom': {},
    '@vuepress/plugin-active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
      headerTopOffset: 120
    },
    '@vuepress/plugin-back-to-top': {},
    '@vuepress/plugin-google-analytics': {
      'ga': 'UA-124896160-11'
    },
    'flowchart': {},
    // '@vssue/vuepress-plugin-vssue': {
    //   // set `platform` rather than `api`
    //   platform: 'github',

    //   // all other options of Vssue are allowed
    //   owner: 'kamontat',
    //   repo: 'thaibank',
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // },
    // '@vuepress/pwa': {
    //   updatePopup: true
    // },
    'seo': {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }
  },
  themeConfig: {
    displayAllHeaders: true,
    activeHeaderLinks: true,
    locales: {
      '/': {
        sidebar: 'auto',
        lang: 'th-TH',
        // text for the language dropdown
        selectText: 'ภาษา',
        // label for this locale in the language dropdown
        label: 'ไทย',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'สนับสนุน !',
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'ช่วยเราทำให้หน้านี้ดีขึ้น!',
        lastUpdated: 'อัพเดตล่าสุด',
        // config for Service Worker 
        serviceWorker: {
          updatePopup: {
            message: "มีข้อมูลใหม่",
            buttonText: "อัพเดต"
          }
        },
        nav: [{
          text: 'เปรียบเทียบ',
          items: [{
            text: 'บัญชี',
            link: '/compare/account'
          }, {
            text: 'บัตรเครดิต',
            link: '/compare/credit'
          }, {
            text: 'แอพพลิเคชั่น',
            link: '/compare/application'
          }, {
            text: 'เว็บไซต์',
            link: '/compare/website'
          }]
        }, {
          text: 'ธนาคาร',
          items: [{
            text: 'ธนาคารกสิกรไทย',
            link: '/bank/k'
          }, {
            text: 'ธนาคารไทยพาณิชย์',
            link: '/bank/scb'
          }, {
            text: 'ธนาคารกรุงศรีอยุธยา',
            link: '/bank/ks'
          }, {
            text: 'ธนาคารกรุงไทย',
            link: '/bank/ktb'
          }, {
            text: 'ธนาคารกรุงเทพ',
            link: '/bank/bb'
          }, {
            text: 'ธนาคารทหารไทย',
            link: '/bank/tmb'
          }, {
            text: 'ธนาคารธนชาต',
            link: '/bank/t'
          }, {
            text: 'ธนาคารออมสิน',
            link: '/bank/gsb'
          }]
        }, {
          text: 'ข้อมูล',
          items: [{
            text: 'ลิขสิทธิ์',
            link: '/info/licenses'
          }, {
            text: 'ผู้สนับสนุน',
            link: '/info/contribute'
          }]
        }],
      },
      '/en/': {
        lang: 'en-US', // this will be set as the lang attribute on <html>
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last Updated',
        // config for Service Worker 
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [{
          text: 'comparison',
          items: [{
            text: 'Account',
            link: '/compare/account'
          }, {
            text: 'Credit card',
            link: '/compare/credit'
          }, {
            text: 'Application',
            link: '/compare/application'
          }, {
            text: 'Website',
            link: '/compare/website'
          }]
        }, {
          text: 'Bank',
          items: [{
            text: 'Kasikorn Bank',
            link: '/bank/k'
          }, {
            text: 'Siam Commercial Bank',
            link: '/bank/scb'
          }, {
            text: 'Bank of Ayudhya',
            link: '/bank/ks'
          }, {
            text: 'Krungthai Bank',
            link: '/bank/ktb'
          }, {
            text: 'Bangkok Bank',
            link: '/bank/bb'
          }, {
            text: 'TMB Bank',
            link: '/bank/tmb'
          }, {
            text: 'Thanachart Bank',
            link: '/bank/t'
          }, {
            text: 'Government Savings Bank',
            link: '/bank/gsb'
          }]
        }, {
          text: 'Information',
          items: [{
            text: 'License',
            link: '/info/licenses'
          }, {
            text: 'Contribute',
            link: '/info/contribute'
          }]
        }]
      },
    },
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'kamontat/thaibank',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'kamontat/thaibank',
    // if your docs are not at the root of the repo:
    docsDir: 'website',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
  }
}