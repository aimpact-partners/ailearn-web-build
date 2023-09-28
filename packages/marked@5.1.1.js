System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked","5.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// .beyond/uimport/temp/marked.5.1.1.js
var marked_5_1_1_exports = {};
__export(marked_5_1_1_exports, {
  Hooks: () => Hooks,
  Lexer: () => Lexer,
  Marked: () => Marked,
  Parser: () => Parser,
  Renderer: () => Renderer,
  Slugger: () => Slugger,
  TextRenderer: () => TextRenderer,
  Tokenizer: () => Tokenizer,
  defaults: () => defaults,
  getDefaults: () => getDefaults,
  lexer: () => lexer,
  marked: () => marked,
  options: () => options,
  parse: () => parse,
  parseInline: () => parseInline,
  parser: () => parser,
  setOptions: () => setOptions,
  use: () => use,
  walkTokens: () => walkTokens
});
module.exports = __toCommonJS(marked_5_1_1_exports);

// node_modules/marked/lib/marked.esm.js
function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
var defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = ch => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon") return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
var noopTest = {
  exec: function noopTest2() {}
};
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function checkDeprecations(opt, callback) {
  if (!opt || opt.silent) {
    return;
  }
  if (callback) {
    console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");
  }
  if (opt.sanitize || opt.sanitizer) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
  if (opt.highlight || opt.langPrefix !== "language-") {
    console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");
  }
  if (opt.mangle) {
    console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");
  }
  if (opt.baseUrl) {
    console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");
  }
  if (opt.smartypants) {
    console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");
  }
  if (opt.xhtml) {
    console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");
  }
  if (opt.headerIds || opt.headerPrefix) {
    console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.");
  }
}
function outputLink(cap, link, raw, lexer2) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map(node => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var Tokenizer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, "");
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: "blockquote",
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0].replace(/^\t+/, t => " ".repeat(3 * t.length));
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        if (!list.loose) {
          const spacers = list.items[i].tokens.filter(t => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => /\n.*\n/.test(t.raw));
          list.loose = hasMultipleLineBreaks;
        }
      }
      if (list.loose) {
        for (i = 0; i < l; i++) {
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = "paragraph";
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
      return {
        type: "def",
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map(c => {
          return {
            text: c
          };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => {
            return {
              text: c
            };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = match[0].length - 1;
      let rDelim,
        rLength,
        delimTotal = lLength,
        midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const raw = src.slice(0, lLength + match.index + rLength + 1);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: "text",
          raw: text,
          text
        }]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: "text",
          raw: text,
          text
        }]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.lheading = edit(block.lheading).replace(/bull/g, block.bullet).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = {
  ...block
};
block.gfm = {
  ...block.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
};
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = {
  ...block.normal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};
inline._punctuation = "\\p{P}$+<=>`^|~";
inline.punctuation = edit(inline.punctuation, "u").replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
inline.anyPunctuation = /\\[punct]/g;
inline._escapes = /\\([punct])/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim, "u").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline.anyPunctuation = edit(inline.anyPunctuation, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = edit(inline._escapes, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = {
  ...inline
};
inline.pedantic = {
  ...inline.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
};
inline.gfm = {
  ...inline.normal,
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = {
  ...inline.gfm,
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "",
    i,
    ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
var Lexer = class {
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */Object.create(null);
    this.options = options2 || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options2) {
    const lexer2 = new Lexer(options2);
    return lexer2.lex(src);
  }
  static lexInline(src, options2) {
    const lexer2 = new Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function (getStartIndex) {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({
      src,
      tokens
    });
    return tokens;
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function (getStartIndex) {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var Renderer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html, block2) {
    return html;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul",
      startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>
`;
  }
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
};
var TextRenderer = class {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var Slugger = class {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options2 = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options2.dryrun);
  }
};
var Parser = class {
  constructor(options2) {
    this.options = options2 || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  static parse(tokens, options2) {
    const parser2 = new Parser(options2);
    return parser2.parse(tokens);
  }
  static parseInline(tokens, options2) {
    const parser2 = new Parser(options2);
    return parser2.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "",
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space":
          {
            continue;
          }
        case "hr":
          {
            out += this.renderer.hr();
            continue;
          }
        case "heading":
          {
            out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
            continue;
          }
        case "code":
          {
            out += this.renderer.code(token.text, token.lang, token.escaped);
            continue;
          }
        case "table":
          {
            header = "";
            cell = "";
            l2 = token.header.length;
            for (j = 0; j < l2; j++) {
              cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                header: true,
                align: token.align[j]
              });
            }
            header += this.renderer.tablerow(cell);
            body = "";
            l2 = token.rows.length;
            for (j = 0; j < l2; j++) {
              row = token.rows[j];
              cell = "";
              l3 = row.length;
              for (k = 0; k < l3; k++) {
                cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                  header: false,
                  align: token.align[k]
                });
              }
              body += this.renderer.tablerow(cell);
            }
            out += this.renderer.table(header, body);
            continue;
          }
        case "blockquote":
          {
            body = this.parse(token.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }
        case "list":
          {
            ordered = token.ordered;
            start = token.start;
            loose = token.loose;
            l2 = token.items.length;
            body = "";
            for (j = 0; j < l2; j++) {
              item = token.items[j];
              checked = item.checked;
              task = item.task;
              itemBody = "";
              if (item.task) {
                checkbox = this.renderer.checkbox(checked);
                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                    item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                      item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: "text",
                      text: checkbox
                    });
                  }
                } else {
                  itemBody += checkbox;
                }
              }
              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, checked);
            }
            out += this.renderer.list(body, ordered, start);
            continue;
          }
        case "html":
          {
            out += this.renderer.html(token.text, token.block);
            continue;
          }
        case "paragraph":
          {
            out += this.renderer.paragraph(this.parseInline(token.tokens));
            continue;
          }
        case "text":
          {
            body = token.tokens ? this.parseInline(token.tokens) : token.text;
            while (i + 1 < l && tokens[i + 1].type === "text") {
              token = tokens[++i];
              body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
            }
            out += top ? this.renderer.paragraph(body) : body;
            continue;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "",
      i,
      token,
      ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape":
          {
            out += renderer.text(token.text);
            break;
          }
        case "html":
          {
            out += renderer.html(token.text);
            break;
          }
        case "link":
          {
            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
            break;
          }
        case "image":
          {
            out += renderer.image(token.href, token.title, token.text);
            break;
          }
        case "strong":
          {
            out += renderer.strong(this.parseInline(token.tokens, renderer));
            break;
          }
        case "em":
          {
            out += renderer.em(this.parseInline(token.tokens, renderer));
            break;
          }
        case "codespan":
          {
            out += renderer.codespan(token.text);
            break;
          }
        case "br":
          {
            out += renderer.br();
            break;
          }
        case "del":
          {
            out += renderer.del(this.parseInline(token.tokens, renderer));
            break;
          }
        case "text":
          {
            out += renderer.text(token.text);
            break;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }
};
var Hooks = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  preprocess(markdown) {
    return markdown;
  }
  postprocess(html) {
    return html;
  }
};
__publicField(Hooks, "passThroughHooks", /* @__PURE__ */new Set(["preprocess", "postprocess"]));
var Marked = class {
  defaults = getDefaults();
  options = this.setOptions;
  parse = this.#parseMarkdown(Lexer.lex, Parser.parse);
  parseInline = this.#parseMarkdown(Lexer.lexInline, Parser.parseInline);
  Parser = Parser;
  parser = Parser.parse;
  Renderer = Renderer;
  TextRenderer = TextRenderer;
  Lexer = Lexer;
  lexer = Lexer.lex;
  Tokenizer = Tokenizer;
  Slugger = Slugger;
  Hooks = Hooks;
  constructor(...args) {
    this.use(...args);
  }
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table":
          {
            for (const cell of token.header) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
            for (const row of token.rows) {
              for (const cell of row) {
                values = values.concat(this.walkTokens(cell.tokens, callback));
              }
            }
            break;
          }
        case "list":
          {
            values = values.concat(this.walkTokens(token.items, callback));
            break;
          }
        default:
          {
            if (this.defaults.extensions && this.defaults.extensions.childTokens && this.defaults.extensions.childTokens[token.type]) {
              this.defaults.extensions.childTokens[token.type].forEach(childTokens => {
                values = values.concat(this.walkTokens(token[childTokens], callback));
              });
            } else if (token.tokens) {
              values = values.concat(this.walkTokens(token.tokens, callback));
            }
          }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    args.forEach(pack => {
      const opts = {
        ...pack
      };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach(ext => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if (ext.renderer) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function (...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if (ext.tokenizer) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if (ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new Renderer(this.defaults);
        for (const prop in pack.renderer) {
          const prevRenderer = renderer[prop];
          renderer[prop] = (...args2) => {
            let ret = pack.renderer[prop].apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret;
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          const prevTokenizer = tokenizer[prop];
          tokenizer[prop] = (...args2) => {
            let ret = pack.tokenizer[prop].apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new Hooks();
        for (const prop in pack.hooks) {
          const prevHook = hooks[prop];
          if (Hooks.passThroughHooks.has(prop)) {
            hooks[prop] = arg => {
              if (this.defaults.async) {
                return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then(ret2 => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = pack.hooks[prop].call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[prop] = (...args2) => {
              let ret = pack.hooks[prop].apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        opts.walkTokens = function (token) {
          let values = [];
          values.push(pack.walkTokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = {
        ...this.defaults,
        ...opts
      };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = {
      ...this.defaults,
      ...opt
    };
    return this;
  }
  #parseMarkdown(lexer2, parser2) {
    return (src, opt, callback) => {
      if (typeof opt === "function") {
        callback = opt;
        opt = null;
      }
      const origOpt = {
        ...opt
      };
      opt = {
        ...this.defaults,
        ...origOpt
      };
      const throwError = this.#onError(opt.silent, opt.async, callback);
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      checkDeprecations(opt, callback);
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (callback) {
        const highlight = opt.highlight;
        let tokens;
        try {
          if (opt.hooks) {
            src = opt.hooks.preprocess(src);
          }
          tokens = lexer2(src, opt);
        } catch (e) {
          return throwError(e);
        }
        const done = err => {
          let out;
          if (!err) {
            try {
              if (opt.walkTokens) {
                this.walkTokens(tokens, opt.walkTokens);
              }
              out = parser2(tokens, opt);
              if (opt.hooks) {
                out = opt.hooks.postprocess(out);
              }
            } catch (e) {
              err = e;
            }
          }
          opt.highlight = highlight;
          return err ? throwError(err) : callback(null, out);
        };
        if (!highlight || highlight.length < 3) {
          return done();
        }
        delete opt.highlight;
        if (!tokens.length) return done();
        let pending = 0;
        this.walkTokens(tokens, token => {
          if (token.type === "code") {
            pending++;
            setTimeout(() => {
              highlight(token.text, token.lang, (err, code) => {
                if (err) {
                  return done(err);
                }
                if (code != null && code !== token.text) {
                  token.text = code;
                  token.escaped = true;
                }
                pending--;
                if (pending === 0) {
                  done();
                }
              });
            }, 0);
          }
        });
        if (pending === 0) {
          done();
        }
        return;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then(src2 => lexer2(src2, opt)).then(tokens => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then(tokens => parser2(tokens, opt)).then(html => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        const tokens = lexer2(src, opt);
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html = parser2(tokens, opt);
        if (opt.hooks) {
          html = opt.hooks.postprocess(html);
        }
        return html;
      } catch (e) {
        return throwError(e);
      }
    };
  }
  #onError(silent, async, callback) {
    return e => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        if (callback) {
          callback(null, msg);
          return;
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      if (callback) {
        callback(e);
        return;
      }
      throw e;
    };
  }
};
var markedInstance = new Marked(defaults);
function marked(src, opt, callback) {
  return markedInstance.parse(src, opt, callback);
}
marked.options = marked.setOptions = function (opt) {
  markedInstance.setOptions(opt);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function (...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function (tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.Hooks = Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parse = marked;
var parser = Parser.parse;
var lexer = Lexer.lex;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC41LjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5lc20uanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJIb29rcyIsIkxleGVyIiwiTWFya2VkIiwiUGFyc2VyIiwiUmVuZGVyZXIiLCJTbHVnZ2VyIiwiVGV4dFJlbmRlcmVyIiwiVG9rZW5pemVyIiwiZGVmYXVsdHMiLCJnZXREZWZhdWx0cyIsImxleGVyIiwibWFya2VkIiwib3B0aW9ucyIsInBhcnNlIiwicGFyc2VJbmxpbmUiLCJwYXJzZXIiLCJzZXRPcHRpb25zIiwidXNlIiwid2Fsa1Rva2VucyIsIm1vZHVsZSIsImFzeW5jIiwiYmFzZVVybCIsImJyZWFrcyIsImV4dGVuc2lvbnMiLCJnZm0iLCJoZWFkZXJJZHMiLCJoZWFkZXJQcmVmaXgiLCJoaWdobGlnaHQiLCJob29rcyIsImxhbmdQcmVmaXgiLCJtYW5nbGUiLCJwZWRhbnRpYyIsInJlbmRlcmVyIiwic2FuaXRpemUiLCJzYW5pdGl6ZXIiLCJzaWxlbnQiLCJzbWFydHlwYW50cyIsInRva2VuaXplciIsInhodG1sIiwiY2hhbmdlRGVmYXVsdHMiLCJuZXdEZWZhdWx0cyIsImVzY2FwZVRlc3QiLCJlc2NhcGVSZXBsYWNlIiwiUmVnRXhwIiwic291cmNlIiwiZXNjYXBlVGVzdE5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZU5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZW1lbnRzIiwiZ2V0RXNjYXBlUmVwbGFjZW1lbnQiLCJjaCIsImVzY2FwZSIsImh0bWwiLCJlbmNvZGUiLCJ0ZXN0IiwicmVwbGFjZSIsInVuZXNjYXBlVGVzdCIsInVuZXNjYXBlIiwiXyIsIm4iLCJ0b0xvd2VyQ2FzZSIsImNoYXJBdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiY2FyZXQiLCJlZGl0IiwicmVnZXgiLCJvcHQiLCJvYmoiLCJuYW1lIiwidmFsIiwiZ2V0UmVnZXgiLCJub25Xb3JkQW5kQ29sb25UZXN0Iiwib3JpZ2luSW5kZXBlbmRlbnRVcmwiLCJjbGVhblVybCIsImJhc2UiLCJocmVmIiwicHJvdCIsImRlY29kZVVSSUNvbXBvbmVudCIsImUiLCJpbmRleE9mIiwicmVzb2x2ZVVybCIsImVuY29kZVVSSSIsImJhc2VVcmxzIiwianVzdERvbWFpbiIsInByb3RvY29sIiwiZG9tYWluIiwicnRyaW0iLCJyZWxhdGl2ZUJhc2UiLCJub29wVGVzdCIsImV4ZWMiLCJzcGxpdENlbGxzIiwidGFibGVSb3ciLCJjb3VudCIsInJvdyIsIm1hdGNoIiwib2Zmc2V0Iiwic3RyIiwiZXNjYXBlZCIsImN1cnIiLCJjZWxscyIsInNwbGl0IiwiaSIsInRyaW0iLCJzaGlmdCIsImxlbmd0aCIsInBvcCIsInNwbGljZSIsInB1c2giLCJjIiwiaW52ZXJ0IiwibCIsInN1ZmZMZW4iLCJjdXJyQ2hhciIsInNsaWNlIiwiZmluZENsb3NpbmdCcmFja2V0IiwiYiIsImxldmVsIiwiY2hlY2tEZXByZWNhdGlvbnMiLCJjYWxsYmFjayIsImNvbnNvbGUiLCJ3YXJuIiwib3V0cHV0TGluayIsImNhcCIsImxpbmsiLCJyYXciLCJ0aXRsZSIsInRleHQiLCJzdGF0ZSIsImluTGluayIsInRva2VuIiwidHlwZSIsInRva2VucyIsImlubGluZVRva2VucyIsImluZGVudENvZGVDb21wZW5zYXRpb24iLCJtYXRjaEluZGVudFRvQ29kZSIsImluZGVudFRvQ29kZSIsIm1hcCIsIm5vZGUiLCJtYXRjaEluZGVudEluTm9kZSIsImluZGVudEluTm9kZSIsImpvaW4iLCJjb25zdHJ1Y3RvciIsInNwYWNlIiwic3JjIiwicnVsZXMiLCJibG9jayIsIm5ld2xpbmUiLCJjb2RlIiwiY29kZUJsb2NrU3R5bGUiLCJmZW5jZXMiLCJsYW5nIiwiaW5saW5lIiwiX2VzY2FwZXMiLCJoZWFkaW5nIiwidHJpbW1lZCIsImRlcHRoIiwiaHIiLCJibG9ja3F1b3RlIiwidG9wIiwiYmxvY2tUb2tlbnMiLCJsaXN0IiwiaXN0YXNrIiwiaXNjaGVja2VkIiwiaW5kZW50IiwiYmxhbmtMaW5lIiwiZW5kc1dpdGhCbGFua0xpbmUiLCJsaW5lIiwibmV4dExpbmUiLCJyYXdMaW5lIiwiaXRlbUNvbnRlbnRzIiwiZW5kRWFybHkiLCJidWxsIiwiaXNvcmRlcmVkIiwib3JkZXJlZCIsInN0YXJ0IiwibG9vc2UiLCJpdGVtcyIsIml0ZW1SZWdleCIsInQiLCJyZXBlYXQiLCJ0cmltTGVmdCIsInNlYXJjaCIsIm5leHRCdWxsZXRSZWdleCIsIk1hdGgiLCJtaW4iLCJoclJlZ2V4IiwiZmVuY2VzQmVnaW5SZWdleCIsImhlYWRpbmdCZWdpblJlZ2V4IiwidGFzayIsImNoZWNrZWQiLCJ0cmltUmlnaHQiLCJzcGFjZXJzIiwiZmlsdGVyIiwiaGFzTXVsdGlwbGVMaW5lQnJlYWtzIiwic29tZSIsInByZSIsImRlZiIsInRhZyIsInRhYmxlIiwiaXRlbSIsImhlYWRlciIsImFsaWduIiwicm93cyIsImoiLCJrIiwibGhlYWRpbmciLCJwYXJhZ3JhcGgiLCJpblJhd0Jsb2NrIiwidHJpbW1lZFVybCIsInJ0cmltU2xhc2giLCJsYXN0UGFyZW5JbmRleCIsImxpbmtMZW4iLCJyZWZsaW5rIiwibGlua3MiLCJub2xpbmsiLCJlbVN0cm9uZyIsIm1hc2tlZFNyYyIsInByZXZDaGFyIiwibERlbGltIiwibmV4dENoYXIiLCJwdW5jdHVhdGlvbiIsImxMZW5ndGgiLCJyRGVsaW0iLCJyTGVuZ3RoIiwiZGVsaW1Ub3RhbCIsIm1pZERlbGltVG90YWwiLCJlbmRSZWciLCJyRGVsaW1Bc3QiLCJyRGVsaW1VbmQiLCJsYXN0SW5kZXgiLCJpbmRleCIsImNvZGVzcGFuIiwiaGFzTm9uU3BhY2VDaGFycyIsImhhc1NwYWNlQ2hhcnNPbkJvdGhFbmRzIiwiYnIiLCJkZWwiLCJhdXRvbGluayIsInVybCIsInByZXZDYXBaZXJvIiwiX2JhY2twZWRhbCIsImlubGluZVRleHQiLCJfcGFyYWdyYXBoIiwiX2xhYmVsIiwiX3RpdGxlIiwiYnVsbGV0IiwibGlzdEl0ZW1TdGFydCIsIl90YWciLCJfY29tbWVudCIsIm5vcm1hbCIsInJlZmxpbmtTZWFyY2giLCJfcHVuY3R1YXRpb24iLCJibG9ja1NraXAiLCJhbnlQdW5jdHVhdGlvbiIsIl9zY2hlbWUiLCJfZW1haWwiLCJfYXR0cmlidXRlIiwiX2hyZWYiLCJzdHJvbmciLCJtaWRkbGUiLCJlbmRBc3QiLCJlbmRVbmQiLCJlbSIsIl9leHRlbmRlZF9lbWFpbCIsIm91dCIsImNoYXJDb2RlQXQiLCJyYW5kb20iLCJ0b1N0cmluZyIsImNyZWF0ZSIsImlubGluZVF1ZXVlIiwibGV4IiwibGV4SW5saW5lIiwibmV4dCIsImxlYWRpbmciLCJ0YWJzIiwibGFzdFRva2VuIiwiY3V0U3JjIiwibGFzdFBhcmFncmFwaENsaXBwZWQiLCJleHRUb2tlbml6ZXIiLCJjYWxsIiwic3RhcnRCbG9jayIsInN0YXJ0SW5kZXgiLCJJbmZpbml0eSIsInRlbXBTcmMiLCJ0ZW1wU3RhcnQiLCJmb3JFYWNoIiwiZ2V0U3RhcnRJbmRleCIsImVyck1zZyIsImVycm9yIiwiRXJyb3IiLCJrZWVwUHJldkNoYXIiLCJPYmplY3QiLCJrZXlzIiwiaW5jbHVkZXMiLCJsYXN0SW5kZXhPZiIsInN0YXJ0SW5saW5lIiwiaW5mb3N0cmluZyIsInF1b3RlIiwic2x1Z2dlciIsImlkIiwic2x1ZyIsImJvZHkiLCJzdGFydGF0dCIsImxpc3RpdGVtIiwiY2hlY2tib3giLCJ0YWJsZXJvdyIsImNvbnRlbnQiLCJ0YWJsZWNlbGwiLCJmbGFncyIsImltYWdlIiwic2VlbiIsInNlcmlhbGl6ZSIsInZhbHVlIiwiZ2V0TmV4dFNhZmVTbHVnIiwib3JpZ2luYWxTbHVnIiwiaXNEcnlSdW4iLCJvY2N1cmVuY2VBY2N1bXVsYXRvciIsImhhc093blByb3BlcnR5IiwiZHJ5cnVuIiwidGV4dFJlbmRlcmVyIiwibDIiLCJsMyIsImNlbGwiLCJpdGVtQm9keSIsInJldCIsInJlbmRlcmVycyIsInVuc2hpZnQiLCJwcmVwcm9jZXNzIiwibWFya2Rvd24iLCJwb3N0cHJvY2VzcyIsIl9fcHVibGljRmllbGQiLCJTZXQiLCJhcmdzIiwidmFsdWVzIiwiY29uY2F0IiwiY2hpbGRUb2tlbnMiLCJwYWNrIiwib3B0cyIsImV4dCIsInByZXZSZW5kZXJlciIsImFwcGx5IiwicHJvcCIsInByZXZUb2tlbml6ZXIiLCJwcmV2SG9vayIsInBhc3NUaHJvdWdoSG9va3MiLCJoYXMiLCJhcmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJvcmlnT3B0IiwidGhyb3dFcnJvciIsInByb3RvdHlwZSIsImRvbmUiLCJlcnIiLCJwZW5kaW5nIiwic2V0VGltZW91dCIsImFsbCIsImNhdGNoIiwibWVzc2FnZSIsIm1zZyIsInJlamVjdCIsIm1hcmtlZEluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDV0EsU0FBU1YsY0FBYztFQUNyQixPQUFPO0lBQ0xXLE9BQU87SUFDUEMsU0FBUztJQUNUQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsS0FBSztJQUNMQyxXQUFXO0lBQ1hDLGNBQWM7SUFDZEMsV0FBVztJQUNYQyxPQUFPO0lBQ1BDLFlBQVk7SUFDWkMsUUFBUTtJQUNSQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLFFBQVE7SUFDUkMsYUFBYTtJQUNiQyxXQUFXO0lBQ1huQixZQUFZO0lBQ1pvQixPQUFPO0VBQ1Q7QUFDRjtBQUVBLElBQUk5QixXQUFXQyxhQUFZO0FBRTNCLFNBQVM4QixlQUFlQyxhQUFhO0VBQ25DaEMsV0FBV2dDO0FBQ2I7QUFLQSxJQUFNQyxhQUFhO0FBQ25CLElB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