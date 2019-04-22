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
  dest: 'public',
  plugins: {
    '@vuepress/last-updated': {},
    '@vuepress/medium-zoom': {},
    // '@vuepress/plugin-active-header-links': {},
    // '@vuepress/plugin-back-to-top': {},
    // '@vuepress/plugin-google-analytics': {},
    // 'vuepress-plugin-flowchart': {},
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
    locales: {
      '/': {
        lang: 'en-US', // this will be set as the lang attribute on <html>
        title: 'Thai bank',
        description: package.descriptionTH,
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!',
        // config for Service Worker 
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
      },
      '/th/': {
        lang: 'th-TH',
        title: 'ธนาคารในประเทศไทย',
        description: package.description,
        // text for the language dropdown
        selectText: 'ภาษา',
        // label for this locale in the language dropdown
        label: 'ไทย',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'สนับสนุน !',
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'ช่วยเราทำให้หน้านี้ดีขึ้น!',
        // config for Service Worker 
        serviceWorker: {
          updatePopup: {
            message: "มีข้อมูลใหม่",
            buttonText: "อัพเดต"
          }
        },
      }
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