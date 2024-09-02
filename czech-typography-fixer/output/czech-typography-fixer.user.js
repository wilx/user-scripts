// ==UserScript==
// @name        czech-typography-fixer
// @description Czech typography fixer for Czech news sites.
// @version     1.0.149
// @author      wilx
// @homepage    https://github.com/wilx/user-scripts/czech-typography-fixer
// @include     /^https?:\/\/www\.ceska-justice\.cz\/.*$/
// @include     /^https?:\/\/www\.zdravotnickydenik\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?ihned\.(cz|news)\/.*$/
// @include     /^https?:\/\/.+\.aktualne\.cz\/.*$/
// @include     /^https?:\/\/www\.ceskenoviny\.cz\/.*$/
// @include     /^https?:\/\/.+\.(ihned|hn)\.cz\/.*$/
// @include     /^https?:\/\/.+\.reflex\.cz\/.*$/
// @include     /^https?:\/\/.+\.respekt\.cz\/.*$/
// @include     /^https?:\/\/.+\.ceskatelevize\.cz\/.*$/
// @include     /^https?:\/\/.+\.seznam\.cz\/.*$/
// @include     /^https?:\/\/.+\.seznamzpravy\.cz\/.*$/
// @include     /^https?:\/\/.+\.lidovky\.cz\/.*$/
// @include     /^https?:\/\/svobodneforum\.cz\/.*$/
// @include     /^https?:\/\/.+\.rozhlas\.cz\/.*$/
// @include     /^https?:\/\/mediahub\.cz\/.*$/
// @include     /^https?:\/\/.+\.novinky\.cz\/.*$/
// @include     /^https?:\/\/news\.google\.com\/.*$/
// @include     /^https?:\/\/.+\.info\.cz\/.*$/
// @include     /^https?:\/\/.+\.tyden\.cz\/.*$/
// @include     /^https?:\/\/cs\.wikipedia\.org\/.*$/
// @include     /^https?:\/\/(www\.)?echo24\.cz\/.*$/
// @include     /^https?:\/\/.+\.parlamentnilisty\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?forum24\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?euro\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?zpovednice\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?e15\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?neovlivni\.cz\/.*$/
// @include     /^https?:\/\/www\.sysifos\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?denikreferendum\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?neviditelnypes.lidovky\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?denik\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?irozhlas\.cz\/.*$/
// @include     /^https?:\/\/(.+\.)?epravo\.cz\/.*$/
// @include     /^https?:\/\/www\.ahaonline\.cz\/.*$/
// @include     /^https?:\/\/tn\.nova\.cz\/.*$/
// @include     /^https?:\/\/www\.autoforum\.cz\/.*$/
// @downloadURL https://github.com/wilx/user-scripts/raw/master/czech-typography-fixer/output/czech-typography-fixer.user.js
// @grant       none
// @namespace   https://github.com/wilx/user-scripts/czech-typography-fixer
// @noframes
// @run-at      document-end
// @updateURL   https://github.com/wilx/user-scripts/raw/master/czech-typography-fixer/output/czech-typography-fixer.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
const czechTypographyFixerReSingleLetters = /(\b[IKOSUVZikosuvz]) +/gu;
const czechTypographyFixerReSingleA = /(\b[Aa]) +/gu;
const czechTypographyFixerRePercents = /(\d) ([%°‰℃℉])/gu;
const czechTypographyFixerReDates = /(\d{1,2}\.) (ledna|února|března|dubna|května|června|července|srpna|září|října|listopadu|prosince)/gu;
const czechTypographyFixerReStraightToCzechQuotes = /(\D|^)"([^"]*)"/gu;
// const czechTypographyFixerReEnglishToCzechQuotes = /“([^”]*)”/gu;
const czechTypographyFixerReSingleQuotes = /([^\da-z]|^)'([^']*)'/giu;
const czechTypographyFixerReFixBoth99Quotes = /„([^”]*)”/gu;
class CzechTypographyFixer {
  #rules = [{
    name: 'Česká Justice',
    hostTest: host => host.startsWith('www.ceska-justice.cz') || host.startsWith('www.zdravotnickydenik.cz'),
    selector: 'article.post'
  }, {
    name: 'IHned',
    hostTest: host => /^(.+\.)?(ihned|hn)\.(cz|news)$/.test(host),
    selector: 'article, .perex, div[id=main-content], div[id=content] h1, div.content-column, div.article, div.content'
  }, {
    name: 'Aktualne',
    hostTest: host => host.endsWith('.aktualne.cz'),
    selector: 'div.clanek, div.titulek-clanku, div.obsah, div.page'
  }, {
    name: 'České Noviny',
    hostTest: host => host === 'www.ceskenoviny.cz',
    selector: 'div.box-article'
  }, {
    name: 'IDnes',
    hostTest: host => host.endsWith('.idnes.cz'),
    selector: 'div.art-full, div.col, div.hp-b, div[id=main] div[id=content]'
  }, {
    name: 'Reflex',
    hostTest: host => host.endsWith('.reflex.cz'),
    selector: 'article'
  }, {
    name: 'Respekt',
    hostTest: host => host.endsWith('.respekt.cz'),
    selector: 'div.layout_content-text, div.layout_content-full'
  }, {
    name: 'Česká televize',
    hostTest: host => host.endsWith('.ceskatelevize.cz'),
    selector: 'article, div[id=myPage] div[id=mainPanel]'
  }, {
    name: 'Seznam',
    hostTest: host => host.endsWith('.seznam.cz') || host.endsWith('.seznamzpravy.cz'),
    selector: 'main'
  }, {
    name: 'Neviditelný Pes',
    hostTest: host => /^(.+\.)?neviditelnypes.lidovky\.cz$/.test(host),
    selector: 'div[id=art-full], div[id=col-c]'
  }, {
    name: 'Lidovky',
    hostTest: host => host.endsWith('.lidovky.cz'),
    selector: 'div[id=content]'
  }, {
    name: 'Svobodné fórum',
    hostTest: host => host === 'svobodneforum.cz',
    selector: 'main'
  }, {
    name: 'Rozhlas',
    hostTest: host => host.endsWith('.rozhlas.cz'),
    selector: 'div.main, div[id=main], div[id=aside]'
  }, {
    name: 'Mediahub',
    hostTest: host => host === 'mediahub.cz',
    selector: 'main section article, section[id=section-content], section[id=section-sidebar], div.container'
  }, {
    name: 'Novinky',
    hostTest: host => host.endsWith('.novinky.cz'),
    selector: 'div#szn-clanky main section, div#szn-clanky header'
  }, {
    name: 'Google News',
    hostTest: host => host.startsWith('news.google.'),
    selector: 'div.section-stream-content'
  }, {
    name: 'Info',
    hostTest: host => host.endsWith('.info.cz'),
    selector: 'article'
  }, {
    name: 'Týden',
    hostTest: host => host.endsWith('.tyden.cz'),
    selector: 'div.article, div.articles'
  }, {
    name: 'Česká Wikipedie',
    hostTest: host => host.endsWith('cs.wikipedia.org'),
    selector: 'div[id=bodyContent]'
  }, {
    name: 'Echo.cz',
    hostTest: host => /^(www\.)?echo24\.cz$/.test(host),
    selector: 'div[id=content], article, section'
  }, {
    name: 'Parlamentni Listy',
    hostTest: host => host.endsWith('parlamentnilisty.cz'),
    selector: 'div[id=main]'
  }, {
    name: 'Forum24',
    hostTest: host => /^(.+\.)?forum24\.cz$/.test(host),
    selector: 'article'
  }, {
    name: 'Euro.cz',
    hostTest: host => /^(.+\.)?euro\.cz$/.test(host),
    selector: 'div[id=article]'
  }, {
    name: 'Zpovednice',
    hostTest: host => /^(.+\.)?zpovednice\.cz$/.test(host),
    selector: 'td.conftext, td.absoltext'
  }, {
    name: 'E15',
    hostTest: host => /^(.+\.)?e15\.cz$/.test(host),
    selector: 'article'
  }, {
    name: 'Neovlivni',
    hostTest: host => /^(.+\.)?neovlivni\.cz$/.test(host),
    selector: 'section'
  }, {
    name: 'sisyfos.cz',
    hostTest: host => /^www\.sysifos\.cz$/.test(host),
    selector: 'div[id=blok005a]'
  }, {
    name: 'Deník Referendum',
    hostTest: host => /^(.+\.)?denikreferendum\.cz$/.test(host),
    selector: 'div[id=content]'
  }, {
    name: 'Deník',
    hostTest: host => /^(.+\.)?denik\.cz$/.test(host),
    selector: 'div.content'
  }, {
    name: 'iRozhlas',
    hostTest: host => /^(.+\.)?irozhlas\.cz$/.test(host),
    selector: 'article'
  }, {
    name: 'epravo.cz',
    hostTest: host => /^(.+\.)?epravo\.cz$/.test(host),
    selector: '.article, .article-detail'
  }, {
    name: 'ahaonline.cz',
    hostTest: host => /^www\.ahaonline\.cz$/.test(host),
    selector: 'article'
  }, {
    name: 'tn.nova.cz',
    hostTest: host => /^tn\.nova\.cz$/.test(host),
    selector: 'div.article'
  }, {
    name: 'autoforum.cz',
    hostTest: host => /^www\.autoforum\.cz$/.test(host),
    selector: 'div.article-detail, div#content-right'
  }];
  run() {
    let nodes = [];
    const host = document.location.host;
    console.log(`location.host: ${host}`);
    for (let i = 0; i !== this.#rules.length; ++i) {
      const rule = this.#rules[i];
      if (rule.hostTest(host)) {
        console.log(`Using rules for ${rule.name}`);
        nodes = document.body.querySelectorAll(rule.selector);
        break;
      }
      if (i == this.#rules.length - 1) {
        console.log('No rule matched.');
      }
    }
    console.log(`Got ${nodes.length} nodes.`);
    const textNodes = [];
    for (let i = 0; i !== nodes.length; ++i) {
      const node = nodes[i];
      const walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
        acceptNode: n => {
          if (n?.parentNode?.nodeName === 'SCRIPT') {
            // console.log('rejecting text of node ' + n.parentNode.nodeName);
            return NodeFilter.FILTER_REJECT;
          } else {
            // console.log('accepting text of node ' + n.parentNode.nodeName);
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      });
      let textNode;
      while (textNode = walk.nextNode()) {
        textNodes.push(textNode);
      }
    }
    for (let i = 0; i !== textNodes.length; ++i) {
      this.#transmogrifyTextNode(textNodes[i]);
    }
  }
  #transmogrifyTextNode(textNode) {
    let text = textNode.nodeValue;
    text = text.replace(czechTypographyFixerReSingleLetters, '$1\u00a0');
    text = text.replace(czechTypographyFixerReSingleA, '$1\u00a0');
    text = text.replace(czechTypographyFixerRePercents, '$1\u00a0$2');
    text = text.replace(czechTypographyFixerReDates, '$1\u00a0$2');
    // XXX This breaks proper Czech quotes if they are already in the text multiple times.
    // text = text.replace(czechTypographyFixerReEnglishToCzechQuotes, '„$1“');
    text = text.replace(czechTypographyFixerReStraightToCzechQuotes, '$1„$2“');
    text = text.replace(czechTypographyFixerReFixBoth99Quotes, '„$1“');
    text = text.replace(czechTypographyFixerReSingleQuotes, '$1‚$2‘');

    // console.log("text after: >" + text + "<");
    textNode.nodeValue = text;
  }
  constructor() {
    console.log('Czech typography fixer here.');
  }
}
const fixer = new CzechTypographyFixer();
fixer.run();
/******/ })()
;
//# sourceMappingURL=czech-typography-fixer.js.map