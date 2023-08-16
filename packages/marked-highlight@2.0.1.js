System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-highlight","2.0.1"]]);
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

// .beyond/uimport/temp/marked-highlight.2.0.1.js
var marked_highlight_2_0_1_exports = {};
__export(marked_highlight_2_0_1_exports, {
  markedHighlight: () => markedHighlight
});
module.exports = __toCommonJS(marked_highlight_2_0_1_exports);

// node_modules/marked-highlight/src/index.js
function markedHighlight(options) {
  if (typeof options === "function") {
    options = {
      highlight: options
    };
  }
  if (!options || typeof options.highlight !== "function") {
    throw new Error("Must provide highlight function");
  }
  if (typeof options.langPrefix !== "string") {
    options.langPrefix = "language-";
  }
  return {
    async: !!options.async,
    walkTokens(token) {
      if (token.type !== "code") {
        return;
      }
      const lang = getLang(token);
      if (options.async) {
        return Promise.resolve(options.highlight(token.text, lang)).then(updateToken(token));
      }
      const code = options.highlight(token.text, lang);
      updateToken(token)(code);
    },
    renderer: {
      code(code, infoString, escaped) {
        const lang = (infoString || "").match(/\S*/)[0];
        const classAttr = lang ? ` class="${options.langPrefix}${escape(lang)}"` : "";
        code = code.replace(/\n$/, "");
        return `<pre><code${classAttr}>${escaped ? code : escape(code, true)}
</code></pre>`;
      }
    }
  };
}
function getLang(token) {
  return (token.lang || "").match(/\S*/)[0];
}
function updateToken(token) {
  return code => {
    if (typeof code === "string" && code !== token.text) {
      token.escaped = true;
      token.text = code;
    }
  };
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1oaWdobGlnaHQuMi4wLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkLWhpZ2hsaWdodC9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibWFya2VkX2hpZ2hsaWdodF8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJtYXJrZWRIaWdobGlnaHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIkVycm9yIiwibGFuZ1ByZWZpeCIsImFzeW5jIiwid2Fsa1Rva2VucyIsInRva2VuIiwidHlwZSIsImxhbmciLCJnZXRMYW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0ZXh0IiwidGhlbiIsInVwZGF0ZVRva2VuIiwiY29kZSIsInJlbmRlcmVyIiwiaW5mb1N0cmluZyIsImVzY2FwZWQiLCJtYXRjaCIsImNsYXNzQXR0ciIsImVzY2FwZSIsInJlcGxhY2UiLCJlc2NhcGVUZXN0IiwiZXNjYXBlUmVwbGFjZSIsIlJlZ0V4cCIsInNvdXJjZSIsImVzY2FwZVRlc3ROb0VuY29kZSIsImVzY2FwZVJlcGxhY2VOb0VuY29kZSIsImVzY2FwZVJlcGxhY2VtZW50cyIsImdldEVzY2FwZVJlcGxhY2VtZW50IiwiY2giLCJodG1sIiwiZW5jb2RlIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw4QkFBQTs7O0FDQU8sU0FBU0UsZ0JBQWdCSSxPQUFBLEVBQVM7RUFDdkMsSUFBSSxPQUFPQSxPQUFBLEtBQVksWUFBWTtJQUNqQ0EsT0FBQSxHQUFVO01BQ1JDLFNBQUEsRUFBV0Q7SUFDYjtFQUNGO0VB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