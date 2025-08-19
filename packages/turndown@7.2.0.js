System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["turndown","7.2.0"]]);
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

// .beyond/uimport/turndown.7.2.0.js
var turndown_7_2_0_exports = {};
__export(turndown_7_2_0_exports, {
  default: () => turndown_7_2_0_default
});
module.exports = __toCommonJS(turndown_7_2_0_exports);

// node_modules/turndown/lib/turndown.browser.es.js
function extend(destination) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (source.hasOwnProperty(key)) destination[key] = source[key];
    }
  }
  return destination;
}
function repeat(character, count) {
  return Array(count + 1).join(character);
}
function trimLeadingNewlines(string) {
  return string.replace(/^\n*/, "");
}
function trimTrailingNewlines(string) {
  var indexEnd = string.length;
  while (indexEnd > 0 && string[indexEnd - 1] === "\n") indexEnd--;
  return string.substring(0, indexEnd);
}
var blockElements = ["ADDRESS", "ARTICLE", "ASIDE", "AUDIO", "BLOCKQUOTE", "BODY", "CANVAS", "CENTER", "DD", "DIR", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "FRAMESET", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "HTML", "ISINDEX", "LI", "MAIN", "MENU", "NAV", "NOFRAMES", "NOSCRIPT", "OL", "OUTPUT", "P", "PRE", "SECTION", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"];
function isBlock(node) {
  return is(node, blockElements);
}
var voidElements = ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"];
function isVoid(node) {
  return is(node, voidElements);
}
function hasVoid(node) {
  return has(node, voidElements);
}
var meaningfulWhenBlankElements = ["A", "TABLE", "THEAD", "TBODY", "TFOOT", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"];
function isMeaningfulWhenBlank(node) {
  return is(node, meaningfulWhenBlankElements);
}
function hasMeaningfulWhenBlank(node) {
  return has(node, meaningfulWhenBlankElements);
}
function is(node, tagNames) {
  return tagNames.indexOf(node.nodeName) >= 0;
}
function has(node, tagNames) {
  return node.getElementsByTagName && tagNames.some(function (tagName) {
    return node.getElementsByTagName(tagName).length;
  });
}
var rules = {};
rules.paragraph = {
  filter: "p",
  replacement: function (content) {
    return "\n\n" + content + "\n\n";
  }
};
rules.lineBreak = {
  filter: "br",
  replacement: function (content, node, options) {
    return options.br + "\n";
  }
};
rules.heading = {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function (content, node, options) {
    var hLevel = Number(node.nodeName.charAt(1));
    if (options.headingStyle === "setext" && hLevel < 3) {
      var underline = repeat(hLevel === 1 ? "=" : "-", content.length);
      return "\n\n" + content + "\n" + underline + "\n\n";
    } else {
      return "\n\n" + repeat("#", hLevel) + " " + content + "\n\n";
    }
  }
};
rules.blockquote = {
  filter: "blockquote",
  replacement: function (content) {
    content = content.replace(/^\n+|\n+$/g, "");
    content = content.replace(/^/gm, "> ");
    return "\n\n" + content + "\n\n";
  }
};
rules.list = {
  filter: ["ul", "ol"],
  replacement: function (content, node) {
    var parent = node.parentNode;
    if (parent.nodeName === "LI" && parent.lastElementChild === node) {
      return "\n" + content;
    } else {
      return "\n\n" + content + "\n\n";
    }
  }
};
rules.listItem = {
  filter: "li",
  replacement: function (content, node, options) {
    content = content.replace(/^\n+/, "").replace(/\n+$/, "\n").replace(/\n/gm, "\n    ");
    var prefix = options.bulletListMarker + "   ";
    var parent = node.parentNode;
    if (parent.nodeName === "OL") {
      var start = parent.getAttribute("start");
      var index = Array.prototype.indexOf.call(parent.children, node);
      prefix = (start ? Number(start) + index : index + 1) + ".  ";
    }
    return prefix + content + (node.nextSibling && !/\n$/.test(content) ? "\n" : "");
  }
};
rules.indentedCodeBlock = {
  filter: function (node, options) {
    return options.codeBlockStyle === "indented" && node.nodeName === "PRE" && node.firstChild && node.firstChild.nodeName === "CODE";
  },
  replacement: function (content, node, options) {
    return "\n\n    " + node.firstChild.textContent.replace(/\n/g, "\n    ") + "\n\n";
  }
};
rules.fencedCodeBlock = {
  filter: function (node, options) {
    return options.codeBlockStyle === "fenced" && node.nodeName === "PRE" && node.firstChild && node.firstChild.nodeName === "CODE";
  },
  replacement: function (content, node, options) {
    var className = node.firstChild.getAttribute("class") || "";
    var language = (className.match(/language-(\S+)/) || [null, ""])[1];
    var code = node.firstChild.textContent;
    var fenceChar = options.fence.charAt(0);
    var fenceSize = 3;
    var fenceInCodeRegex = new RegExp("^" + fenceChar + "{3,}", "gm");
    var match;
    while (match = fenceInCodeRegex.exec(code)) {
      if (match[0].length >= fenceSize) {
        fenceSize = match[0].length + 1;
      }
    }
    var fence = repeat(fenceChar, fenceSize);
    return "\n\n" + fence + language + "\n" + code.replace(/\n$/, "") + "\n" + fence + "\n\n";
  }
};
rules.horizontalRule = {
  filter: "hr",
  replacement: function (content, node, options) {
    return "\n\n" + options.hr + "\n\n";
  }
};
rules.inlineLink = {
  filter: function (node, options) {
    return options.linkStyle === "inlined" && node.nodeName === "A" && node.getAttribute("href");
  },
  replacement: function (content, node) {
    var href = node.getAttribute("href");
    if (href) href = href.replace(/([()])/g, "\\$1");
    var title = cleanAttribute(node.getAttribute("title"));
    if (title) title = ' "' + title.replace(/"/g, '\\"') + '"';
    return "[" + content + "](" + href + title + ")";
  }
};
rules.referenceLink = {
  filter: function (node, options) {
    return options.linkStyle === "referenced" && node.nodeName === "A" && node.getAttribute("href");
  },
  replacement: function (content, node, options) {
    var href = node.getAttribute("href");
    var title = cleanAttribute(node.getAttribute("title"));
    if (title) title = ' "' + title + '"';
    var replacement;
    var reference;
    switch (options.linkReferenceStyle) {
      case "collapsed":
        replacement = "[" + content + "][]";
        reference = "[" + content + "]: " + href + title;
        break;
      case "shortcut":
        replacement = "[" + content + "]";
        reference = "[" + content + "]: " + href + title;
        break;
      default:
        var id = this.references.length + 1;
        replacement = "[" + content + "][" + id + "]";
        reference = "[" + id + "]: " + href + title;
    }
    this.references.push(reference);
    return replacement;
  },
  references: [],
  append: function (options) {
    var references = "";
    if (this.references.length) {
      references = "\n\n" + this.references.join("\n") + "\n\n";
      this.references = [];
    }
    return references;
  }
};
rules.emphasis = {
  filter: ["em", "i"],
  replacement: function (content, node, options) {
    if (!content.trim()) return "";
    return options.emDelimiter + content + options.emDelimiter;
  }
};
rules.strong = {
  filter: ["strong", "b"],
  replacement: function (content, node, options) {
    if (!content.trim()) return "";
    return options.strongDelimiter + content + options.strongDelimiter;
  }
};
rules.code = {
  filter: function (node) {
    var hasSiblings = node.previousSibling || node.nextSibling;
    var isCodeBlock = node.parentNode.nodeName === "PRE" && !hasSiblings;
    return node.nodeName === "CODE" && !isCodeBlock;
  },
  replacement: function (content) {
    if (!content) return "";
    content = content.replace(/\r?\n|\r/g, " ");
    var extraSpace = /^`|^ .*?[^ ].* $|`$/.test(content) ? " " : "";
    var delimiter = "`";
    var matches = content.match(/`+/gm) || [];
    while (matches.indexOf(delimiter) !== -1) delimiter = delimiter + "`";
    return delimiter + extraSpace + content + extraSpace + delimiter;
  }
};
rules.image = {
  filter: "img",
  replacement: function (content, node) {
    var alt = cleanAttribute(node.getAttribute("alt"));
    var src = node.getAttribute("src") || "";
    var title = cleanAttribute(node.getAttribute("title"));
    var titlePart = title ? ' "' + title + '"' : "";
    return src ? "![" + alt + "](" + src + titlePart + ")" : "";
  }
};
function cleanAttribute(attribute) {
  return attribute ? attribute.replace(/(\n+\s*)+/g, "\n") : "";
}
function Rules(options) {
  this.options = options;
  this._keep = [];
  this._remove = [];
  this.blankRule = {
    replacement: options.blankReplacement
  };
  this.keepReplacement = options.keepReplacement;
  this.defaultRule = {
    replacement: options.defaultReplacement
  };
  this.array = [];
  for (var key in options.rules) this.array.push(options.rules[key]);
}
Rules.prototype = {
  add: function (key, rule) {
    this.array.unshift(rule);
  },
  keep: function (filter) {
    this._keep.unshift({
      filter,
      replacement: this.keepReplacement
    });
  },
  remove: function (filter) {
    this._remove.unshift({
      filter,
      replacement: function () {
        return "";
      }
    });
  },
  forNode: function (node) {
    if (node.isBlank) return this.blankRule;
    var rule;
    if (rule = findRule(this.array, node, this.options)) return rule;
    if (rule = findRule(this._keep, node, this.options)) return rule;
    if (rule = findRule(this._remove, node, this.options)) return rule;
    return this.defaultRule;
  },
  forEach: function (fn) {
    for (var i = 0; i < this.array.length; i++) fn(this.array[i], i);
  }
};
function findRule(rules2, node, options) {
  for (var i = 0; i < rules2.length; i++) {
    var rule = rules2[i];
    if (filterValue(rule, node, options)) return rule;
  }
  return void 0;
}
function filterValue(rule, node, options) {
  var filter = rule.filter;
  if (typeof filter === "string") {
    if (filter === node.nodeName.toLowerCase()) return true;
  } else if (Array.isArray(filter)) {
    if (filter.indexOf(node.nodeName.toLowerCase()) > -1) return true;
  } else if (typeof filter === "function") {
    if (filter.call(rule, node, options)) return true;
  } else {
    throw new TypeError("`filter` needs to be a string, array, or function");
  }
}
function collapseWhitespace(options) {
  var element = options.element;
  var isBlock2 = options.isBlock;
  var isVoid2 = options.isVoid;
  var isPre = options.isPre || function (node2) {
    return node2.nodeName === "PRE";
  };
  if (!element.firstChild || isPre(element)) return;
  var prevText = null;
  var keepLeadingWs = false;
  var prev = null;
  var node = next(prev, element, isPre);
  while (node !== element) {
    if (node.nodeType === 3 || node.nodeType === 4) {
      var text = node.data.replace(/[ \r\n\t]+/g, " ");
      if ((!prevText || / $/.test(prevText.data)) && !keepLeadingWs && text[0] === " ") {
        text = text.substr(1);
      }
      if (!text) {
        node = remove(node);
        continue;
      }
      node.data = text;
      prevText = node;
    } else if (node.nodeType === 1) {
      if (isBlock2(node) || node.nodeName === "BR") {
        if (prevText) {
          prevText.data = prevText.data.replace(/ $/, "");
        }
        prevText = null;
        keepLeadingWs = false;
      } else if (isVoid2(node) || isPre(node)) {
        prevText = null;
        keepLeadingWs = true;
      } else if (prevText) {
        keepLeadingWs = false;
      }
    } else {
      node = remove(node);
      continue;
    }
    var nextNode = next(prev, node, isPre);
    prev = node;
    node = nextNode;
  }
  if (prevText) {
    prevText.data = prevText.data.replace(/ $/, "");
    if (!prevText.data) {
      remove(prevText);
    }
  }
}
function remove(node) {
  var next2 = node.nextSibling || node.parentNode;
  node.parentNode.removeChild(node);
  return next2;
}
function next(prev, current, isPre) {
  if (prev && prev.parentNode === current || isPre(current)) {
    return current.nextSibling || current.parentNode;
  }
  return current.firstChild || current.nextSibling || current.parentNode;
}
var root = typeof window !== "undefined" ? window : {};
function canParseHTMLNatively() {
  var Parser = root.DOMParser;
  var canParse = false;
  try {
    if (new Parser().parseFromString("", "text/html")) {
      canParse = true;
    }
  } catch (e) {}
  return canParse;
}
function createHTMLParser() {
  var Parser = function () {};
  {
    if (shouldUseActiveX()) {
      Parser.prototype.parseFromString = function (string) {
        var doc = new window.ActiveXObject("htmlfile");
        doc.designMode = "on";
        doc.open();
        doc.write(string);
        doc.close();
        return doc;
      };
    } else {
      Parser.prototype.parseFromString = function (string) {
        var doc = document.implementation.createHTMLDocument("");
        doc.open();
        doc.write(string);
        doc.close();
        return doc;
      };
    }
  }
  return Parser;
}
function shouldUseActiveX() {
  var useActiveX = false;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch (e) {
    if (root.ActiveXObject) useActiveX = true;
  }
  return useActiveX;
}
var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();
function RootNode(input, options) {
  var root2;
  if (typeof input === "string") {
    var doc = htmlParser().parseFromString('<x-turndown id="turndown-root">' + input + "</x-turndown>", "text/html");
    root2 = doc.getElementById("turndown-root");
  } else {
    root2 = input.cloneNode(true);
  }
  collapseWhitespace({
    element: root2,
    isBlock,
    isVoid,
    isPre: options.preformattedCode ? isPreOrCode : null
  });
  return root2;
}
var _htmlParser;
function htmlParser() {
  _htmlParser = _htmlParser || new HTMLParser();
  return _htmlParser;
}
function isPreOrCode(node) {
  return node.nodeName === "PRE" || node.nodeName === "CODE";
}
function Node(node, options) {
  node.isBlock = isBlock(node);
  node.isCode = node.nodeName === "CODE" || node.parentNode.isCode;
  node.isBlank = isBlank(node);
  node.flankingWhitespace = flankingWhitespace(node, options);
  return node;
}
function isBlank(node) {
  return !isVoid(node) && !isMeaningfulWhenBlank(node) && /^\s*$/i.test(node.textContent) && !hasVoid(node) && !hasMeaningfulWhenBlank(node);
}
function flankingWhitespace(node, options) {
  if (node.isBlock || options.preformattedCode && node.isCode) {
    return {
      leading: "",
      trailing: ""
    };
  }
  var edges = edgeWhitespace(node.textContent);
  if (edges.leadingAscii && isFlankedByWhitespace("left", node, options)) {
    edges.leading = edges.leadingNonAscii;
  }
  if (edges.trailingAscii && isFlankedByWhitespace("right", node, options)) {
    edges.trailing = edges.trailingNonAscii;
  }
  return {
    leading: edges.leading,
    trailing: edges.trailing
  };
}
function edgeWhitespace(string) {
  var m = string.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: m[1],
    leadingAscii: m[2],
    leadingNonAscii: m[3],
    trailing: m[4],
    trailingNonAscii: m[5],
    trailingAscii: m[6]
  };
}
function isFlankedByWhitespace(side, node, options) {
  var sibling;
  var regExp;
  var isFlanked;
  if (side === "left") {
    sibling = node.previousSibling;
    regExp = / $/;
  } else {
    sibling = node.nextSibling;
    regExp = /^ /;
  }
  if (sibling) {
    if (sibling.nodeType === 3) {
      isFlanked = regExp.test(sibling.nodeValue);
    } else if (options.preformattedCode && sibling.nodeName === "CODE") {
      isFlanked = false;
    } else if (sibling.nodeType === 1 && !isBlock(sibling)) {
      isFlanked = regExp.test(sibling.textContent);
    }
  }
  return isFlanked;
}
var reduce = Array.prototype.reduce;
var escapes = [[/\\/g, "\\\\"], [/\*/g, "\\*"], [/^-/g, "\\-"], [/^\+ /g, "\\+ "], [/^(=+)/g, "\\$1"], [/^(#{1,6}) /g, "\\$1 "], [/`/g, "\\`"], [/^~~~/g, "\\~~~"], [/\[/g, "\\["], [/\]/g, "\\]"], [/^>/g, "\\>"], [/_/g, "\\_"], [/^(\d+)\. /g, "$1\\. "]];
function TurndownService(options) {
  if (!(this instanceof TurndownService)) return new TurndownService(options);
  var defaults = {
    rules,
    headingStyle: "setext",
    hr: "* * *",
    bulletListMarker: "*",
    codeBlockStyle: "indented",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
    linkReferenceStyle: "full",
    br: "  ",
    preformattedCode: false,
    blankReplacement: function (content, node) {
      return node.isBlock ? "\n\n" : "";
    },
    keepReplacement: function (content, node) {
      return node.isBlock ? "\n\n" + node.outerHTML + "\n\n" : node.outerHTML;
    },
    defaultReplacement: function (content, node) {
      return node.isBlock ? "\n\n" + content + "\n\n" : content;
    }
  };
  this.options = extend({}, defaults, options);
  this.rules = new Rules(this.options);
}
TurndownService.prototype = {
  turndown: function (input) {
    if (!canConvert(input)) {
      throw new TypeError(input + " is not a string, or an element/document/fragment node.");
    }
    if (input === "") return "";
    var output = process.call(this, new RootNode(input, this.options));
    return postProcess.call(this, output);
  },
  use: function (plugin) {
    if (Array.isArray(plugin)) {
      for (var i = 0; i < plugin.length; i++) this.use(plugin[i]);
    } else if (typeof plugin === "function") {
      plugin(this);
    } else {
      throw new TypeError("plugin must be a Function or an Array of Functions");
    }
    return this;
  },
  addRule: function (key, rule) {
    this.rules.add(key, rule);
    return this;
  },
  keep: function (filter) {
    this.rules.keep(filter);
    return this;
  },
  remove: function (filter) {
    this.rules.remove(filter);
    return this;
  },
  escape: function (string) {
    return escapes.reduce(function (accumulator, escape) {
      return accumulator.replace(escape[0], escape[1]);
    }, string);
  }
};
function process(parentNode) {
  var self = this;
  return reduce.call(parentNode.childNodes, function (output, node) {
    node = new Node(node, self.options);
    var replacement = "";
    if (node.nodeType === 3) {
      replacement = node.isCode ? node.nodeValue : self.escape(node.nodeValue);
    } else if (node.nodeType === 1) {
      replacement = replacementForNode.call(self, node);
    }
    return join(output, replacement);
  }, "");
}
function postProcess(output) {
  var self = this;
  this.rules.forEach(function (rule) {
    if (typeof rule.append === "function") {
      output = join(output, rule.append(self.options));
    }
  });
  return output.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function replacementForNode(node) {
  var rule = this.rules.forNode(node);
  var content = process.call(this, node);
  var whitespace = node.flankingWhitespace;
  if (whitespace.leading || whitespace.trailing) content = content.trim();
  return whitespace.leading + rule.replacement(content, node, this.options) + whitespace.trailing;
}
function join(output, replacement) {
  var s1 = trimTrailingNewlines(output);
  var s2 = trimLeadingNewlines(replacement);
  var nls = Math.max(output.length - s1.length, replacement.length - s2.length);
  var separator = "\n\n".substring(0, nls);
  return s1 + separator + s2;
}
function canConvert(input) {
  return input != null && (typeof input === "string" || input.nodeType && (input.nodeType === 1 || input.nodeType === 9 || input.nodeType === 11));
}
var turndown_browser_es_default = TurndownService;

// .beyond/uimport/turndown.7.2.0.js
var turndown_7_2_0_default = turndown_browser_es_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90dXJuZG93bi43LjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy90dXJuZG93bi9saWIvdHVybmRvd24uYnJvd3Nlci5lcy5qcyJdLCJuYW1lcyI6WyJ0dXJuZG93bl83XzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwidHVybmRvd25fN18yXzBfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInJlcGVhdCIsImNoYXJhY3RlciIsImNvdW50IiwiQXJyYXkiLCJqb2luIiwidHJpbUxlYWRpbmdOZXdsaW5lcyIsInN0cmluZyIsInJlcGxhY2UiLCJ0cmltVHJhaWxpbmdOZXdsaW5lcyIsImluZGV4RW5kIiwic3Vic3RyaW5nIiwiYmxvY2tFbGVtZW50cyIsImlzQmxvY2siLCJub2RlIiwiaXMiLCJ2b2lkRWxlbWVudHMiLCJpc1ZvaWQiLCJoYXNWb2lkIiwiaGFzIiwibWVhbmluZ2Z1bFdoZW5CbGFua0VsZW1lbnRzIiwiaXNNZWFuaW5nZnVsV2hlbkJsYW5rIiwiaGFzTWVhbmluZ2Z1bFdoZW5CbGFuayIsInRhZ05hbWVzIiwiaW5kZXhPZiIsIm5vZGVOYW1lIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzb21lIiwidGFnTmFtZSIsInJ1bGVzIiwicGFyYWdyYXBoIiwiZmlsdGVyIiwicmVwbGFjZW1lbnQiLCJjb250ZW50IiwibGluZUJyZWFrIiwib3B0aW9ucyIsImJyIiwiaGVhZGluZyIsImhMZXZlbCIsIk51bWJlciIsImNoYXJBdCIsImhlYWRpbmdTdHlsZSIsInVuZGVybGluZSIsImJsb2NrcXVvdGUiLCJsaXN0IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJsaXN0SXRlbSIsInByZWZpeCIsImJ1bGxldExpc3RNYXJrZXIiLCJzdGFydCIsImdldEF0dHJpYnV0ZSIsImluZGV4IiwicHJvdG90eXBlIiwiY2FsbCIsImNoaWxkcmVuIiwibmV4dFNpYmxpbmciLCJ0ZXN0IiwiaW5kZW50ZWRDb2RlQmxvY2siLCJjb2RlQmxvY2tTdHlsZSIsImZpcnN0Q2hpbGQiLCJ0ZXh0Q29udGVudCIsImZlbmNlZENvZGVCbG9jayIsImNsYXNzTmFtZSIsImxhbmd1YWdlIiwibWF0Y2giLCJjb2RlIiwiZmVuY2VDaGFyIiwiZmVuY2UiLCJmZW5jZVNpemUiLCJmZW5jZUluQ29kZVJlZ2V4IiwiUmVnRXhwIiwiZXhlYyIsImhvcml6b250YWxSdWxlIiwiaHIiLCJpbmxpbmVMaW5rIiwibGlua1N0eWxlIiwiaHJlZiIsInRpdGxlIiwiY2xlYW5BdHRyaWJ1dGUiLCJyZWZlcmVuY2VMaW5rIiwicmVmZXJlbmNlIiwibGlua1JlZmVyZW5jZVN0eWxlIiwiaWQiLCJyZWZlcmVuY2VzIiwicHVzaCIsImFwcGVuZCIsImVtcGhhc2lzIiwidHJpbSIsImVtRGVsaW1pdGVyIiwic3Ryb25nIiwic3Ryb25nRGVsaW1pdGVyIiwiaGFzU2libGluZ3MiLCJwcmV2aW91c1NpYmxpbmciLCJpc0NvZGVCbG9jayIsImV4dHJhU3BhY2UiLCJkZWxpbWl0ZXIiLCJtYXRjaGVzIiwiaW1hZ2UiLCJhbHQiLCJzcmMiLCJ0aXRsZVBhcnQiLCJhdHRyaWJ1dGUiLCJSdWxlcyIsIl9rZWVwIiwiX3JlbW92ZSIsImJsYW5rUnVsZSIsImJsYW5rUmVwbGFjZW1lbnQiLCJrZWVwUmVwbGFjZW1lbnQiLCJkZWZhdWx0UnVsZSIsImRlZmF1bHRSZXBsYWNlbWVudCIsImFycmF5IiwiYWRkIiwicnVsZSIsInVuc2hpZnQiLCJrZWVwIiwicmVtb3ZlIiwiZm9yTm9kZSIsImlzQmxhbmsiLCJmaW5kUnVsZSIsImZvckVhY2giLCJmbiIsInJ1bGVzMiIsImZpbHRlclZhbHVlIiwidG9Mb3dlckNhc2UiLCJpc0FycmF5IiwiVHlwZUVycm9yIiwiY29sbGFwc2VXaGl0ZXNwYWNlIiwiZWxlbWVudCIsImlzQmxvY2syIiwiaXNWb2lkMiIsImlzUHJlIiwibm9kZTIiLCJwcmV2VGV4dCIsImtlZXBMZWFkaW5nV3MiLCJwcmV2IiwibmV4dCIsIm5vZGVUeXBlIiwidGV4dCIsImRhdGEiLCJzdWJzdHIiLCJuZXh0Tm9kZSIsIm5leHQyIiwicmVtb3ZlQ2hpbGQiLCJjdXJyZW50Iiwicm9vdCIsIndpbmRvdyIsImNhblBhcnNlSFRNTE5hdGl2ZWx5IiwiUGFyc2VyIiwiRE9NUGFyc2VyIiwiY2FuUGFyc2UiLCJwYXJzZUZyb21TdHJpbmciLCJlIiwiY3JlYXRlSFRNTFBhcnNlciIsInNob3VsZFVzZUFjdGl2ZVgiLCJkb2MiLCJBY3RpdmVYT2JqZWN0IiwiZGVzaWduTW9kZSIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiZG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsInVzZUFjdGl2ZVgiLCJIVE1MUGFyc2VyIiwiUm9vdE5vZGUiLCJpbnB1dCIsInJvb3QyIiwiaHRtbFBhcnNlciIsImdldEVsZW1lbnRCeUlkIiwiY2xvbmVOb2RlIiwicHJlZm9ybWF0dGVkQ29kZSIsImlzUHJlT3JDb2RlIiwiX2h0bWxQYXJzZXIiLCJOb2RlIiwiaXNDb2RlIiwiZmxhbmtpbmdXaGl0ZXNwYWNlIiwibGVhZGluZyIsInRyYWlsaW5nIiwiZWRnZXMiLCJlZGdlV2hpdGVzcGFjZSIsImxlYWRpbmdBc2NpaSIsImlzRmxhbmtlZEJ5V2hpdGVzcGFjZSIsImxlYWRpbmdOb25Bc2NpaSIsInRyYWlsaW5nQXNjaWkiLCJ0cmFpbGluZ05vbkFzY2lpIiwibSIsInNpZGUiLCJzaWJsaW5nIiwicmVnRXhwIiwiaXNGbGFua2VkIiwibm9kZVZhbHVlIiwicmVkdWNlIiwiZXNjYXBlcyIsIlR1cm5kb3duU2VydmljZSIsImRlZmF1bHRzIiwib3V0ZXJIVE1MIiwidHVybmRvd24iLCJjYW5Db252ZXJ0Iiwib3V0cHV0IiwicHJvY2VzcyIsInBvc3RQcm9jZXNzIiwidXNlIiwicGx1Z2luIiwiYWRkUnVsZSIsImVzY2FwZSIsImFjY3VtdWxhdG9yIiwic2VsZiIsImNoaWxkTm9kZXMiLCJyZXBsYWNlbWVudEZvck5vZGUiLCJ3aGl0ZXNwYWNlIiwiczEiLCJzMiIsIm5scyIsIk1hdGgiLCJtYXgiLCJzZXBhcmF0b3IiLCJ0dXJuZG93bl9icm93c2VyX2VzX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsc0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sc0JBQUE7OztBQ0FBLFNBQVNPLE9BQVFDLFdBQUEsRUFBYTtFQUM1QixTQUFTQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJQyxTQUFBLENBQVVDLE1BQUEsRUFBUUYsQ0FBQSxJQUFLO0lBQ3pDLElBQUlHLE1BQUEsR0FBU0YsU0FBQSxDQUFVRCxDQUFBO0lBQ3ZCLFNBQVNJLEdBQUEsSUFBT0QsTUFBQSxFQUFRO01BQ3RCLElBQUlBLE1BQUEsQ0FBT0UsY0FBQSxDQUFlRCxHQUFHLEdBQUdMLFdBQUEsQ0FBWUssR0FBQSxJQUFPRCxNQUFBLENBQU9DLEdBQUE7SUFDNUQ7RUFDRjtFQUNBLE9BQU9MLFdBQUE7QUFDVDtBQUVBLFNBQVNPLE9BQVFDLFNBQUEsRUFBV0MsS0FBQSxFQUFPO0VBQ2pDLE9BQU9DLEtBQUEsQ0FBTUQsS0FBQSxHQUFRLENBQUMsRUFBRUUsSUFBQSxDQUFLSCxTQUFTO0FBQ3hDO0FBRUEsU0FBU0ksb0JBQXFCQyxNQUFBLEVBQVE7RUFDcEMsT0FBT0EsTUFBQSxDQUFPQyxPQUFBLENBQVEsUUFBUSxFQUFFO0FBQ2xDO0FBRUEsU0FBU0MscUJBQXNCRixNQUFBLEVBQVE7RUFFckMsSUFBSUcsUUFBQSxHQUFXSCxNQUFBLENBQU9WLE1BQUE7RUFDdEIsT0FBT2Es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TSxNQUFNO0VBQ3BDLElBQUlhLEVBQUEsR0FBS2hOLG1CQUFBLENBQW9CMEIsV0FBVztFQUN4QyxJQUFJdUwsR0FBQSxHQUFNQyxJQUFBLENBQUtDLEdBQUEsQ0FBSWhCLE1BQUEsQ0FBTzVNLE1BQUEsR0FBU3dOLEVBQUEsQ0FBR3hOLE1BQUEsRUFBUW1DLFdBQUEsQ0FBWW5DLE1BQUEsR0FBU3lOLEVBQUEsQ0FBR3pOLE1BQU07RUFDNUUsSUFBSTZOLFNBQUEsR0FBWSxPQUFPL00sU0FBQSxDQUFVLEdBQUc0TSxHQUFHO0VBRXZDLE9BQU9GLEVBQUEsR0FBS0ssU0FBQSxHQUFZSixFQUFBO0FBQzFCO0FBVUEsU0FBU2QsV0FBWWhDLEtBQUEsRUFBTztFQUMxQixPQUNFQSxLQUFBLElBQVMsU0FDUCxPQUFPQSxLQUFBLEtBQVUsWUFDaEJBLEtBQUEsQ0FBTTlCLFFBQUEsS0FDTDhCLEtBQUEsQ0FBTTlCLFFBQUEsS0FBYSxLQUFLOEIsS0FBQSxDQUFNOUIsUUFBQSxLQUFhLEtBQUs4QixLQUFBLENBQU05QixRQUFBLEtBQWE7QUFJM0U7QUFFQSxJQUFPaUYsMkJBQUEsR0FBUXZCLGVBQUE7OztBRHI4QmYsSUFBTy9NLHNCQUFBLEdBQVFzTywyQkFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9