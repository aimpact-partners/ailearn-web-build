System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-highlight","2.1.4"]]);
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

// .beyond/uimport/temp/marked-highlight.2.1.4.js
var marked_highlight_2_1_4_exports = {};
__export(marked_highlight_2_1_4_exports, {
  markedHighlight: () => markedHighlight
});
module.exports = __toCommonJS(marked_highlight_2_1_4_exports);

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
      const lang = getLang(token.lang);
      if (options.async) {
        return Promise.resolve(options.highlight(token.text, lang, token.lang || "")).then(updateToken(token));
      }
      const code = options.highlight(token.text, lang, token.lang || "");
      if (code instanceof Promise) {
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      }
      updateToken(token)(code);
    },
    useNewRenderer: true,
    renderer: {
      code(code, infoString, escaped) {
        if (typeof code === "object") {
          escaped = code.escaped;
          infoString = code.lang;
          code = code.text;
        }
        const lang = getLang(infoString);
        const classAttr = lang ? ` class="${options.langPrefix}${escape(lang)}"` : "";
        code = code.replace(/\n$/, "");
        return `<pre><code${classAttr}>${escaped ? code : escape(code, true)}
</code></pre>`;
      }
    }
  };
}
function getLang(lang) {
  return (lang || "").match(/\S*/)[0];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1oaWdobGlnaHQuMi4xLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkLWhpZ2hsaWdodC9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibWFya2VkX2hpZ2hsaWdodF8yXzFfNF9leHBvcnRzIiwiX19leHBvcnQiLCJtYXJrZWRIaWdobGlnaHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIkVycm9yIiwibGFuZ1ByZWZpeCIsImFzeW5jIiwid2Fsa1Rva2VucyIsInRva2VuIiwidHlwZSIsImxhbmciLCJnZXRMYW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0ZXh0IiwidGhlbiIsInVwZGF0ZVRva2VuIiwiY29kZSIsInVzZU5ld1JlbmRlcmVyIiwicmVuZGVyZXIiLCJpbmZvU3RyaW5nIiwiZXNjYXBlZCIsImNsYXNzQXR0ciIsImVzY2FwZSIsInJlcGxhY2UiLCJtYXRjaCIsImVzY2FwZVRlc3QiLCJlc2NhcGVSZXBsYWNlIiwiUmVnRXhwIiwic291cmNlIiwiZXNjYXBlVGVzdE5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZU5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZW1lbnRzIiwiZ2V0RXNjYXBlUmVwbGFjZW1lbnQiLCJjaCIsImh0bWwiLCJlbmNvZGUiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLDhCQUFBOzs7QUNBTyxTQUFTRSxnQkFBZ0JJLE9BQUEsRUFBUztFQUN2QyxJQUFJLE9BQU9BLE9BQUEsS0FBWSxZQUFZO0lBQ2pDQSxPQUFBLEdBQVU7TUFDUkMsU0FBQSxFQUFXRDtJQUNiO0VBQ0Y7RUFFQSxJQUFJLENBQUNBLE9BQUEsSUFBVyxPQUFPQSxPQUFBLENBQVFDLFNBQUEsS0FBYyxZQUFZO0lBQ3ZELE1BQU0sSUFBSUMsS0FBQSxDQUFNLGlDQUFpQztFQUNuRDtFQUVBLElBQUksT0FBT0YsT0FBQSxDQUFRRyxVQUFBLEtBQWUsVUFBVTtJQUMxQ0gsT0FBQSxDQUFRRyxVQUFBLEdBQWE7RUFDdkI7RUFFQSxPQUFPO0lBQ0xDLEtBQUEsRUFBTyxDQUFDLENBQUNKLE9BQUEsQ0FBUUksS0FBQTtJQUNqQkMsV0FBV0MsS0FBQSxFQUFPO01BQ2hCLElBQUlBLEtBQUEsQ0FBTUMsSUFBQSxLQUFTLFFBQVE7UUFDekI7TUFDRjtNQUVBLE1BQU1DLElBQUEsR0FBT0MsT0FBQSxDQUFRSCxLQUFBLENBQU1FLElBQUk7TUFFL0IsSUFBSVIsT0FBQSxDQUFRSSxLQUFBLEVBQU87UUFDakIsT0FBT00sT0FBQSxDQUFRQyxPQUFBLENBQVFYLE9BQUEsQ0FBUUMsU0FBQSxDQUFVSyxLQUFBLENBQU1NLElBQUEsRUFBTUosSUFBQSxFQUFNRixLQUFBLENBQU1FLElBQUEsSUFBUSxFQUFFLENBQUMsRUFBRUssSUFBQSxDQUFLQyxXQUFBLENBQVlSLEtBQUssQ0FBQztNQUN2RztNQUVBLE1BQU1TLElBQUEsR0FBT2YsT0FBQSxDQUFRQyxTQUFBLENBQVVLLEtBQUEsQ0FBTU0sSUFBQSxFQUFNSixJQUFBLEVBQU1GLEtBQUEsQ0FBTUUsSUFBQSxJQUFRLEVBQUU7TUFDakUsSUFBSU8sSUFBQSxZQUFnQkwsT0FBQSxFQUFTO1FBQzNCLE1BQU0sSUFBSVIsS0FBQSxDQUFNLGlLQUFpSztNQUNuTDtNQUNBWSxXQUFBLENBQVlSLEtBQUssRUFBRVMsSUFBSTtJQUN6QjtJQUNBQyxjQUFBLEVBQWdCO0lBQ2hCQyxRQUFBLEVBQVU7TUFDUkYsS0FBS0EsSUFBQSxFQUFNRyxVQUFBLEVBQVlDLE9BQUEsRUFBUztRQUU5QixJQUFJLE9BQU9KLElBQUEsS0FBUyxVQUFVO1VBQzVCSSxPQUFBLEdBQVVKLElBQUEsQ0FBS0ksT0FBQTtVQUNmRCxVQUFBLEdBQWFILElBQUEsQ0FBS1AsSUFBQTtVQUNsQk8sSUFBQSxHQUFPQSxJQUFBLENBQUtILElBQUE7UUFDZDtRQUNBLE1BQU1KLElBQUEsR0FBT0MsT0FBQSxDQUFRUyxVQUFVO1FBQy9CLE1BQU1FLFNBQUEsR0FBWVosSUFBQSxHQUNkLFdBQVdSLE9BQUEsQ0FBUUcsVUFBQSxHQUFha0IsTUFBQSxDQUFPYixJQUFJLE9BQzNDO1FBQ0pPLElBQUEsR0FBT0EsSUFBQSxDQUFLTyxPQUFBLENBQVEsT0FBTyxFQUFFO1FBQzdCLE9BQU8sYUFBYUYsU0FBQSxJQUFhRCxPQUFBLEdBQVVKLElBQUEsR0FBT00sTUFBQSxDQUFPTixJQUFBLEVBQU0sSUFBSTtBQUFBO01BQ3JFO0lBQ0Y7RUFDRjtBQUNGO0FBRUEsU0FBU04sUUFBUUQsSUFBQSxFQUFNO0VBQ3JCLFFBQVFBLElBQUEsSUFBUSxJQUFJZSxLQUFBLENBQU0sS0FBSyxFQUFFO0FBQ25DO0FBRUEsU0FBU1QsWUFBWVIsS0FBQSxFQUFPO0VBQzFCLE9BQVFTLElBQUEsSUFBUztJQUNmLElBQUksT0FBT0EsSUFBQSxLQUFTLFlBQVlBLElBQUEsS0FBU1QsS0FBQSxDQUFNTSxJQUFBLEVBQU07TUFDbkROLEtBQUEsQ0FBTWEsT0FBQSxHQUFVO01BQ2hCYixLQUFBLENBQU1NLElBQUEsR0FBT0csSUFBQTtJQUNmO0VBQ0Y7QUFDRjtBQUdBLElBQU1TLFVBQUEsR0FBYTtBQUNuQixJQUFNQyxhQUFBLEdBQWdCLElBQUlDLE1BQUEsQ0FBT0YsVUFBQSxDQUFXRyxNQUFBLEVBQVEsR0FBRztBQUN2RCxJQUFNQyxrQkFBQSxHQUFxQjtBQUMzQixJQUFNQyxxQkFBQSxHQUF3QixJQUFJSCxNQUFBLENBQU9FLGtCQUFBLENBQW1CRCxNQUFBLEVBQVEsR0FBRztBQUN2RSxJQUFNRyxrQkFBQSxHQUFxQjtFQUN6QixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztBQUNQO0FBQ0EsSUFBTUMsb0JBQUEsR0FBd0JDLEVBQUEsSUFBT0Ysa0JBQUEsQ0FBbUJFLEVBQUE7QUFDeEQsU0FBU1gsT0FBT1ksSUFBQSxFQUFNQyxNQUFBLEVBQVE7RUFDNUIsSUFBSUEsTUFBQSxFQUFRO0lBQ1YsSUFBSVYsVUFBQSxDQUFXVyxJQUFBLENBQUtGLElBQUksR0FBRztNQUN6QixPQUFPQSxJQUFBLENBQUtYLE9BQUEsQ0FBUUcsYUFBQSxFQUFlTSxvQkFBb0I7SUFDekQ7RUFDRixPQUFPO0lBQ0wsSUFBSUgsa0JBQUEsQ0FBbUJPLElBQUEsQ0FBS0YsSUFBSSxHQUFHO01BQ2pDLE9BQU9BLElBQUEsQ0FBS1gsT0FBQSxDQUFRTyxxQkFBQSxFQUF1QkUsb0JBQW9CO0lBQ2pFO0VBQ0Y7RUFFQSxPQUFPRSxJQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=