console.log('Czech typography fixer here.');
// window.addEventListener ("load", czech_typography_fixer_main, true);

function czechTypographyFixerMain () {
    let nodes = [];

    const host = document.location.host;
    console.log('location.host: ' + host);
    if (host.startsWith('www.ceska-justice.cz')
      || host.startsWith('www.zdravotnickydenik.cz')) {
        console.log('using rules for Česká Justice');
        nodes = document.body.querySelectorAll('article.post');
    } else if (/^(.+\.)?ihned\.(cz|news)$/.test(host)) {
        console.log('using rules for IHned');
        nodes = document.body.querySelectorAll('article, .perex, div[id=main-content], div[id=content] h1, div.content-column, div.article');
    } else if (host.endsWith('.aktualne.cz')) {
        console.log('using rules for Aktualne');
        nodes = document.body.querySelectorAll('div.clanek, div.titulek-clanku, div.obsah, div.page');
    } else if (host === 'www.ceskenoviny.cz') {
        console.log('using rules for České Noviny');
        nodes = document.body.querySelectorAll('div.box-article');
    } else if (host.endsWith('.idnes.cz')) {
        console.log('using rules for IDnes');
        nodes = document.body.querySelectorAll('div.art-full, div.col, div.hp-b, div[id=main] div[id=content]');
    } else if (host.endsWith('.reflex.cz')) {
        console.log('using rules for Reflex');
        nodes = document.body.querySelectorAll('article');
    } else if (host.endsWith('.respekt.cz')) {
        console.log('using rules for Respekt');
        nodes = document.body.querySelectorAll('div.layout_content-text, div.layout_content-full');
    } else if (host.endsWith('.ceskatelevize.cz')) {
        console.log('using rules for Česká televize');
        nodes = document.body.querySelectorAll('article, div[id=myPage] div[id=mainPanel]');
    } else if (host.endsWith('.seznam.cz') || host.endsWith('.seznamzpravy.cz')) {
        console.log('using rules for Seznam');
        nodes = document.body.querySelectorAll('main');
    } else if (/^(.+\.)?neviditelnypes.lidovky\.cz$/.test(host)) {
        console.log('using rules for Neviditelný Pes');
        nodes = document.body.querySelectorAll('div[id=art-full], div[id=col-c]');
    } else if (host.endsWith('.lidovky.cz')) {
        console.log('using rules for Lidovky');
        nodes = document.body.querySelectorAll('div[id=content]');
    } else if (host === 'svobodneforum.cz') {
        console.log('using rules for Svobodné fórum');
        nodes = document.body.querySelectorAll('main');
    } else if (host.endsWith('.rozhlas.cz')) {
        console.log('using rules for Rozhlas');
        nodes = document.body.querySelectorAll('div.main, div[id=main], div[id=aside]');
    } else if (host === 'mediahub.cz') {
        console.log('using rules for Mediahub');
        nodes = document.body.querySelectorAll('main section article, section[id=section-content], section[id=section-sidebar], div.container');
    } else if (host.endsWith('.novinky.cz')) {
        console.log('using rules for Novinky');
        nodes = document.body.querySelectorAll('main[role=main], div[id=articleBox], div[id=articleContent], div[id=articleHeaderBig], div[id=page] div[id=subpage] div[id=main]');
    } else if (host.startsWith('news.google.')) {
        console.log('using rules for Google News');
        nodes = document.body.querySelectorAll('div.section-stream-content');
    } else if (host.endsWith('.info.cz')) {
        console.log('using rules for Info');
        nodes = document.body.querySelectorAll('article');
    } else if (host.endsWith('.tyden.cz')) {
        console.log('using rules for Týden');
        nodes = document.body.querySelectorAll('div.article, div.articles');
    } else if (host.endsWith('cs.wikipedia.org')) {
        console.log('using rules for Česká Wikipedie');
        nodes = document.body.querySelectorAll('div[id=bodyContent]');
    } else if (/^(www\.)?echo24\.cz$/.test(host)) {
        console.log('using rules for Echo24');
        nodes = document.body.querySelectorAll('div[id=content], article, section');
    } else if (host.endsWith('parlamentnilisty.cz')) {
        console.log('using rules for Parlamentni Listy');
        nodes = document.body.querySelectorAll('div[id=main]');
    } else if (/^(.+\.)?forum24\.cz$/.test(host)) {
        console.log('using rules for Forum24');
        nodes = document.body.querySelectorAll('article');
    } else if (/^(.+\.)?euro\.cz$/.test(host)) {
        console.log('using rules for Euro.cz');
        nodes = document.body.querySelectorAll('div[id=article]');
    } else if (/^(.+\.)?zpovednice\.cz$/.test(host)) {
        console.log('using rules for Zpovednice');
        nodes = document.body.querySelectorAll('td.conftext, td.absoltext');
    } else if (/^(.+\.)?e15\.cz$/.test(host)) {
        console.log('using rules for E15');
        nodes = document.body.querySelectorAll('article');
    } else if (/^(.+\.)?neovlivni\.cz$/.test(host)) {
        console.log('using rules for Neovlivni');
        nodes = document.body.querySelectorAll('section');
    } else if (/^www\.sysifos\.cz$/.test(host)) {
        console.log('using rules for sisyfos.cz');
        nodes = document.body.querySelectorAll('div[id=blok005a]');
    } else if (/^(.+\.)?denikreferendum\.cz$/.test(host)) {
        console.log('using rules for Deník Referendum');
        nodes = document.body.querySelectorAll('div[id=content]');
    } else if (/^(.+\.)?denik\.cz$/.test(host)) {
        console.log('using rules for Deník');
        nodes = document.body.querySelectorAll('div.content');
    } else if (/^(.+\.)?irozhlas\.cz$/.test(host)) {
        console.log('using rules for iRozhlas');
        nodes = document.body.querySelectorAll('article');
    } else if (/^(.+\.)?epravo\.cz$/.test(host)) {
        console.log('using rules for epravo.cz');
        nodes = document.body.querySelectorAll('.article, .article-detail');
    } else if (/^www\.ahaonline\.cz$/.test(host)) {
        console.log('using rules for ahaonline.cz');
        nodes = document.body.querySelectorAll('article');
    } else if (/^tn\.nova\.cz$/.test(host)) {
        console.log('using rules for tn.nova.cz');
        nodes = document.body.querySelectorAll('div.article');
    } else {
        console.log('No rule matched.');
    }
    console.log('Got ' + nodes.length + ' nodes.');

    const textNodes = [];
    let i;
    for (i = 0; i !== nodes.length; ++i) {
        const node = nodes[i];
        var walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT,
            {
                acceptNode: (n) => {
                    if (n.parentNode && n.parentNode.nodeName === 'SCRIPT') {
                    // console.log('rejecting text of node ' + n.parentNode.nodeName);
                        return NodeFilter.FILTER_REJECT;
                    } else {
                    // console.log('accepting text of node ' + n.parentNode.nodeName);
                        return NodeFilter.FILTER_ACCEPT;
                    }
                }
            }, false);

        var textNode;
        while ((textNode = walk.nextNode())) {
            textNodes.push(textNode);
        }
    }

    for (i = 0; i !== textNodes.length; ++i) {
        transmogrifyTextNode(textNodes[i]);
    }
}

function transmogrifyTextNode (textNode) {
    const czechTypographyFixerReSingleLetters = /(\b[IKOSUVZikosuvz]) +/gu;
    const czechTypographyFixerReSingleA = /(\b[Aa]) +/gu;
    const czechTypographyFixerRePercents = /(\d) ([%°‰℃℉])/gu;
    const czechTypographyFixerReDates = /(\d{1,2}\.) (ledna|února|března|dubna|května|června|července|srpna|září|října|listopadu|prosince)/gu;
    const czechTypographyFixerReStraightToCzechQuotes = /(\D|^)"([^"]*)"/gu;
    // const czechTypographyFixerReEnglishToCzechQuotes = /“([^”]*)”/gu;
    const czechTypographyFixerReSingleQuotes = /([^\da-z]|^)'([^']*)'/giu;
    const czechTypographyFixerReFixBoth99Quotes = /„([^”]*)”/gu;

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

czechTypographyFixerMain();
