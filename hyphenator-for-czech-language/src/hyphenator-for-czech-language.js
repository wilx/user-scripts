import hyphenopoly from "hyphenopoly";
import csWasmUrl from "hyphenopoly/patterns/cs.wasm";

const CZECH_LANGUAGE = "cs";
const CZECH_TEST_WORD = "nejneobhospodarovavatelnejsimi";
const PROCESSED_ATTRIBUTE = "data-hyphenator-for-czech-language";
const SKIPPED_TAGS = new Set([
    "ABBR",
    "ACRONYM",
    "AUDIO",
    "BR",
    "BUTTON",
    "CODE",
    "IMG",
    "INPUT",
    "KBD",
    "LABEL",
    "MATH",
    "OPTION",
    "PRE",
    "SAMP",
    "SCRIPT",
    "STYLE",
    "SUB",
    "SUP",
    "SVG",
    "TEXTAREA",
    "VAR",
    "VIDEO"
]);

function dataUrlToArrayBuffer (dataUrl) {
    const commaIndex = dataUrl.indexOf(",");
    const metadata = dataUrl.slice(0, commaIndex);
    const payload = dataUrl.slice(commaIndex + 1);

    if (metadata.endsWith(";base64")) {
        const binary = atob(payload);
        const bytes = new Uint8Array(binary.length);

        for (let i = 0; i !== binary.length; ++i) {
            bytes[i] = binary.charCodeAt(i);
        }

        return bytes.buffer;
    }

    const decoded = decodeURIComponent(payload);
    const bytes = new Uint8Array(decoded.length);

    for (let i = 0; i !== decoded.length; ++i) {
        bytes[i] = decoded.charCodeAt(i);
    }

    return bytes.buffer;
}

let czechHyphenatorPromise;

function getCzechHyphenator () {
    if (!czechHyphenatorPromise) {
        czechHyphenatorPromise = hyphenopoly.config({
            loader: async () => dataUrlToArrayBuffer(csWasmUrl),
            require: [CZECH_LANGUAGE]
        }).get(CZECH_LANGUAGE);
    }

    return czechHyphenatorPromise;
}

function getSelectedNodes () {
    const host = document.location.host;
    console.log("location.host: " + host);

    if (host.startsWith("www.ceska-justice.cz")
        || host.startsWith("www.zdravotnickydenik.cz")) {
        console.log("using rules for Ceska Justice");
        return document.body.querySelectorAll("article.post");
    }
    if (/^(.+\.)?(ihned|hn)\.(cz|news)$/.test(host)) {
        console.log("using rules for IHned");
        return document.body.querySelectorAll("article, .perex, div[id=main-content], div[id=content] h1, div.content-column, div.article, div.content");
    }
    if (host.endsWith(".aktualne.cz")) {
        console.log("using rules for Aktualne");
        return document.body.querySelectorAll(
            "div.clanek, div.titulek-clanku, div.obsah, div.page, "
            + "h1.e-web-aktualne-articles-show__title, "
            + "p.e-web-aktualne-articles-show-header__perex, "
            + "div.e-web-aktualne-articles-show-body__tiptap-content"
        );
    }
    if (host === "www.ceskenoviny.cz") {
        console.log("using rules for Ceske Noviny");
        return document.body.querySelectorAll("div.box-article");
    }
    if (host.endsWith(".idnes.cz")) {
        console.log("using rules for IDnes");
        return document.body.querySelectorAll("div.art-full, div.col, div.hp-b, div[id=main] div[id=content]");
    }
    if (host.endsWith(".reflex.cz")) {
        console.log("using rules for Reflex");
        return document.body.querySelectorAll("article");
    }
    if (host.endsWith(".respekt.cz")) {
        console.log("using rules for Respekt");
        return document.body.querySelectorAll("div.layout_content-text, div.layout_content-full");
    }
    if (host.endsWith(".ceskatelevize.cz")) {
        console.log("using rules for Ceska televize");
        return document.body.querySelectorAll("article, div[id=myPage] div[id=mainPanel]");
    }
    if (host.endsWith(".seznam.cz") || host.endsWith(".seznamzpravy.cz")) {
        console.log("using rules for Seznam");
        return document.body.querySelectorAll("main");
    }
    if (/^(.+\.)?neviditelnypes.lidovky\.cz$/.test(host)) {
        console.log("using rules for Neviditelny Pes");
        return document.body.querySelectorAll("div[id=art-full], div[id=col-c]");
    }
    if (host.endsWith(".lidovky.cz")) {
        console.log("using rules for Lidovky");
        return document.body.querySelectorAll("div[id=content]");
    }
    if (host === "svobodneforum.cz") {
        console.log("using rules for Svobodne forum");
        return document.body.querySelectorAll("main");
    }
    if (host.endsWith(".rozhlas.cz")) {
        console.log("using rules for Rozhlas");
        return document.body.querySelectorAll("div.main, div[id=main], div[id=aside]");
    }
    if (host === "mediahub.cz") {
        console.log("using rules for Mediahub");
        return document.body.querySelectorAll("section[id=section-content], section[id=section-sidebar], div.container");
    }
    if (host === "cs.wikipedia.org") {
        console.log("using rules for Ceska Wikipedia");
        return document.body.querySelectorAll("div[id=bodyContent]");
    }
    if (host.endsWith(".novinky.cz")) {
        console.log("using rules for Novinky");
        return document.body.querySelectorAll("div#szn-clanky main section, div#szn-clanky header, main section[data-dot=tpl-content]");
    }
    if (host.endsWith(".info.cz")) {
        console.log("using rules for Info");
        return document.body.querySelectorAll("article");
    }
    if (host.endsWith(".tyden.cz")) {
        console.log("using rules for Tyden");
        return document.body.querySelectorAll("div.article, div.articles");
    }
    if (/^(www\.)?echo24\.cz$/.test(host)) {
        console.log("using rules for Echo24");
        return document.body.querySelectorAll("div[id=content], article, section");
    }
    if (host.endsWith("parlamentnilisty.cz")) {
        console.log("using rules for Parlamentni Listy");
        return document.body.querySelectorAll("div[id=main]");
    }
    if (/^(.+\.)?forum24\.cz$/.test(host)) {
        console.log("using rules for Forum24");
        return document.body.querySelectorAll("article");
    }
    if (/^(.+\.)?euro\.cz$/.test(host)) {
        console.log("using rules for Euro.cz");
        return document.body.querySelectorAll("div[id=article]");
    }
    if (/^(.+\.)?e15\.cz$/.test(host)) {
        console.log("using rules for E15");
        return document.body.querySelectorAll("article");
    }
    if (/^(.+\.)?neovlivni\.cz$/.test(host)) {
        console.log("using rules for Neovlivni");
        return document.body.querySelectorAll("section");
    }
    if (/^www\.sysifos\.cz$/.test(host)) {
        console.log("using rules for sysifos.cz");
        document.documentElement.setAttribute("lang", CZECH_LANGUAGE);
        return document.body.querySelectorAll("div[id=blok005a]");
    }
    if (/^(.+\.)?denikreferendum\.cz$/.test(host)) {
        console.log("using rules for Denik Referendum");
        return document.body.querySelectorAll("div[id=content]");
    }
    if (/^(.+\.)?denik\.cz$/.test(host)) {
        console.log("using rules for Denik");
        return document.body.querySelectorAll("div.content");
    }
    if (/^(.+\.)?irozhlas\.cz$/.test(host)) {
        console.log("using rules for iRozhlas");
        return document.body.querySelectorAll("article");
    }
    if (/^(.+\.)?epravo\.cz$/.test(host)) {
        console.log("using rules for epravo.cz");
        return document.body.querySelectorAll(".article, .article-detail");
    }
    if (/^www\.ahaonline\.cz$/.test(host)) {
        console.log("using rules for ahaonline.cz");
        return document.body.querySelectorAll("article");
    }
    if (/^www\.christnet\.eu$/.test(host)) {
        console.log("using rules for christnet.eu");
        return document.body.querySelectorAll(".article-text");
    }
    if (/^tn\.nova\.cz$/.test(host)) {
        console.log("using rules for tn.nova.cz");
        return document.body.querySelectorAll("div.article");
    }
    if (/^www\.autoforum\.cz$/.test(host)) {
        console.log("using rules for autoforum.cz");
        return document.body.querySelectorAll("div.article-detail, div#content-right");
    }

    console.log("No rule matched.");
    return [];
}

function shouldSkipElement (node) {
    return node.nodeType === Node.ELEMENT_NODE && SKIPPED_TAGS.has(node.tagName);
}

function hasSkippedAncestor (node, root) {
    let element = node.parentElement;

    while (element && element !== root) {
        if (shouldSkipElement(element)) {
            return true;
        }
        element = element.parentElement;
    }

    return false;
}

function hyphenateTextNodes (root, hyphenateText) {
    const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode (textNode) {
                if (!textNode.nodeValue.trim()) {
                    return NodeFilter.FILTER_REJECT;
                }

                const parent = textNode.parentElement;
                if (!parent
                    || parent.closest("[" + PROCESSED_ATTRIBUTE + "]") !== root
                    || hasSkippedAncestor(textNode, root)) {
                    return NodeFilter.FILTER_REJECT;
                }

                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );
    const textNodes = [];

    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }

    textNodes.forEach((textNode) => {
        textNode.nodeValue = hyphenateText(textNode.nodeValue);
    });
}

function prepareRoot (root) {
    if (root.getAttribute(PROCESSED_ATTRIBUTE) === "true" || shouldSkipElement(root)) {
        return false;
    }

    root.setAttribute(PROCESSED_ATTRIBUTE, "true");

    if (!root.getAttribute("lang")) {
        root.setAttribute("lang", CZECH_LANGUAGE);
    }

    return true;
}

async function hyphenatorForCzechLanguageOnSelectedSites () {
    console.log("Hyphenator here.");

    try {
        const nodes = Array.from(getSelectedNodes()).filter(prepareRoot);
        console.log("Got " + nodes.length + " nodes.");

        if (nodes.length === 0) {
            return;
        }

        const hyphenateText = await getCzechHyphenator();
        const sample = hyphenateText(CZECH_TEST_WORD);
        console.log("Czech Hyphenopoly sample: " + sample);

        nodes.forEach((node) => {
            hyphenateTextNodes(node, hyphenateText);
        });
    } catch (error) {
        console.error("Hyphenator for Czech language failed.", error);
    }
}

hyphenatorForCzechLanguageOnSelectedSites();
