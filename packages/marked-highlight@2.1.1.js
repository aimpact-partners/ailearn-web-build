System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-highlight","2.1.1"]]);
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

// .beyond/uimport/marked-highlight.2.1.1.js
var marked_highlight_2_1_1_exports = {};
__export(marked_highlight_2_1_1_exports, {
  markedHighlight: () => markedHighlight
});
module.exports = __toCommonJS(marked_highlight_2_1_1_exports);

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
    renderer: {
      code(code, infoString, escaped) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtaGlnaGxpZ2h0LjIuMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC1oaWdobGlnaHQvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmtlZF9oaWdobGlnaHRfMl8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwibWFya2VkSGlnaGxpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJFcnJvciIsImxhbmdQcmVmaXgiLCJhc3luYyIsIndhbGtUb2tlbnMiLCJ0b2tlbiIsInR5cGUiLCJsYW5nIiwiZ2V0TGFuZyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGV4dCIsInRoZW4iLCJ1cGRhdGVUb2tlbiIsImNvZGUiLCJyZW5kZXJlciIsImluZm9TdHJpbmciLCJlc2NhcGVkIiwiY2xhc3NBdHRyIiwiZXNjYXBlIiwicmVwbGFjZSIsIm1hdGNoIiwiZXNjYXBlVGVzdCIsImVzY2FwZVJlcGxhY2UiLCJSZWdFeHAiLCJzb3VyY2UiLCJlc2NhcGVUZXN0Tm9FbmNvZGUiLCJlc2NhcGVSZXBsYWNlTm9FbmNvZGUiLCJlc2NhcGVSZXBsYWNlbWVudHMiLCJnZXRFc2NhcGVSZXBsYWNlbWVudCIsImNoIiwiaHRtbCIsImVuY29kZSIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsZUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsOEJBQUE7OztBQ0FPLFNBQVNFLGdCQUFnQkksT0FBQSxFQUFTO0VBQ3ZDLElBQUksT0FBT0EsT0FBQSxLQUFZLFlBQVk7SUFDakNBLE9BQUEsR0FBVTtNQUNSQyxTQUFBLEVBQVdEO0lBQ2I7RUFDRjtFQUVBLElBQUksQ0FBQ0EsT0FBQSxJQUFXLE9BQU9BLE9BQUEsQ0FBUUMsU0FBQSxLQUFjLFlBQVk7SUFDdkQsTUFBTSxJQUFJQyxLQUFBLENBQU0saUNBQWlDO0VBQ25EO0VBRUEsSUFBSSxPQUFPRixPQUFBLENBQVFHLFVBQUEsS0FBZSxVQUFVO0lBQzFDSCxPQUFBLENBQVFHLFVBQUEsR0FBYTtFQUN2QjtFQUVBLE9BQU87SUFDTEMsS0FBQSxFQUFPLENBQUMsQ0FBQ0osT0FBQSxDQUFRSSxLQUFBO0lBQ2pCQyxXQUFXQyxLQUFBLEVBQU87TUFDaEIsSUFBSUEsS0FBQSxDQUFNQyxJQUFBLEtBQVMsUUFBUTtRQUN6QjtNQUNGO01BRUEsTUFBTUMsSUFBQSxHQUFPQyxPQUFBLENBQVFILEtBQUEsQ0FBTUUsSUFBSTtNQUUvQixJQUFJUixPQUFBLENBQVFJLEtBQUEsRUFBTztRQUNqQixPQUFPTSxPQUFBLENBQVFDLE9BQUEsQ0FBUVgsT0FBQSxDQUFRQyxTQUFBLENBQVVLLEtBQUEsQ0FBTU0sSUFBQSxFQUFNSixJQUFBLEVBQU1GLEtBQUEsQ0FBTUUsSUFBQSxJQUFRLEVBQUUsQ0FBQyxFQUFFSyxJQUFBLENBQUtDLFdBQUEsQ0FBWVIsS0FBSyxDQUFDO01BQ3ZHO01BRUEsTUFBTVMsSUFBQSxHQUFPZixPQUFBLENBQVFDLFNBQUEsQ0FBVUssS0FBQSxDQUFNTSxJQUFBLEVBQU1KLElBQUEsRUFBTUYsS0FBQSxDQUFNRSxJQUFBLElBQVEsRUFBRTtNQUNqRSxJQUFJTyxJQUFBLFlBQWdCTCxPQUFBLEVBQVM7UUFDM0IsTUFBTSxJQUFJUixLQUFBLENBQU0saUtBQWlLO01BQ25MO01BQ0FZLFdBQUEsQ0FBWVIsS0FBSyxFQUFFUyxJQUFJO0lBQ3pCO0lBQ0FDLFFBQUEsRUFBVTtNQUNSRCxLQUFLQSxJQUFBLEVBQU1FLFVBQUEsRUFBWUMsT0FBQSxFQUFTO1FBQzlCLE1BQU1WLElBQUEsR0FBT0MsT0FBQSxDQUFRUSxVQUFVO1FBQy9CLE1BQU1FLFNBQUEsR0FBWVgsSUFBQSxHQUNkLFdBQVdSLE9BQUEsQ0FBUUcsVUFBQSxHQUFhaUIsTUFBQSxDQUFPWixJQUFJLE9BQzNDO1FBQ0pPLElBQUEsR0FBT0EsSUFBQSxDQUFLTSxPQUFBLENBQVEsT0FBTyxFQUFFO1FBQzdCLE9BQU8sYUFBYUYsU0FBQSxJQUFhRCxPQUFBLEdBQVVILElBQUEsR0FBT0ssTUFBQSxDQUFPTCxJQUFBLEVBQU0sSUFBSTtBQUFBO01BQ3JFO0lBQ0Y7RUFDRjtBQUNGO0FBRUEsU0FBU04sUUFBUUQsSUFBQSxFQUFNO0VBQ3JCLFFBQVFBLElBQUEsSUFBUSxJQUFJYyxLQUFBLENBQU0sS0FBSyxFQUFFO0FBQ25DO0FBRUEsU0FBU1IsWUFBWVIsS0FBQSxFQUFPO0VBQzFCLE9BQVFTLElBQUEsSUFBUztJQUNmLElBQUksT0FBT0EsSUFBQSxLQUFTLFlBQVlBLElBQUEsS0FBU1QsS0FBQSxDQUFNTSxJQUFBLEVBQU07TUFDbkROLEtBQUEsQ0FBTVksT0FBQSxHQUFVO01BQ2hCWixLQUFBLENBQU1NLElBQUEsR0FBT0csSUFBQTtJQUNmO0VBQ0Y7QUFDRjtBQUdBLElBQU1RLFVBQUEsR0FBYTtBQUNuQixJQUFNQyxhQUFBLEdBQWdCLElBQUlDLE1BQUEsQ0FBT0YsVUFBQSxDQUFXRyxNQUFBLEVBQVEsR0FBRztBQUN2RCxJQUFNQyxrQkFBQSxHQUFxQjtBQUMzQixJQUFNQyxxQkFBQSxHQUF3QixJQUFJSCxNQUFBLENBQU9FLGtCQUFBLENBQW1CRCxNQUFBLEVBQVEsR0FBRztBQUN2RSxJQUFNRyxrQkFBQSxHQUFxQjtFQUN6QixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztBQUNQO0FBQ0EsSUFBTUMsb0JBQUEsR0FBd0JDLEVBQUEsSUFBT0Ysa0JBQUEsQ0FBbUJFLEVBQUE7QUFDeEQsU0FBU1gsT0FBT1ksSUFBQSxFQUFNQyxNQUFBLEVBQVE7RUFDNUIsSUFBSUEsTUFBQSxFQUFRO0lBQ1YsSUFBSVYsVUFBQSxDQUFXVyxJQUFBLENBQUtGLElBQUksR0FBRztNQUN6QixPQUFPQSxJQUFBLENBQUtYLE9BQUEsQ0FBUUcsYUFBQSxFQUFlTSxvQkFBb0I7SUFDekQ7RUFDRixPQUFPO0lBQ0wsSUFBSUgsa0JBQUEsQ0FBbUJPLElBQUEsQ0FBS0YsSUFBSSxHQUFHO01BQ2pDLE9BQU9BLElBQUEsQ0FBS1gsT0FBQSxDQUFRTyxxQkFBQSxFQUF1QkUsb0JBQW9CO0lBQ2pFO0VBQ0Y7RUFFQSxPQUFPRSxJQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9hcHAvb3V0In0=