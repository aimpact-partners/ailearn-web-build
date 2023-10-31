System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-highlight","2.0.6"]]);
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

// .beyond/uimport/marked-highlight.2.0.6.js
var marked_highlight_2_0_6_exports = {};
__export(marked_highlight_2_0_6_exports, {
  markedHighlight: () => markedHighlight
});
module.exports = __toCommonJS(marked_highlight_2_0_6_exports);

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
      if (code instanceof Promise) {
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtaGlnaGxpZ2h0LjIuMC42LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC1oaWdobGlnaHQvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmtlZF9oaWdobGlnaHRfMl8wXzZfZXhwb3J0cyIsIl9fZXhwb3J0IiwibWFya2VkSGlnaGxpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJFcnJvciIsImxhbmdQcmVmaXgiLCJhc3luYyIsIndhbGtUb2tlbnMiLCJ0b2tlbiIsInR5cGUiLCJsYW5nIiwiZ2V0TGFuZyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGV4dCIsInRoZW4iLCJ1cGRhdGVUb2tlbiIsImNvZGUiLCJyZW5kZXJlciIsImluZm9TdHJpbmciLCJlc2NhcGVkIiwibWF0Y2giLCJjbGFzc0F0dHIiLCJlc2NhcGUiLCJyZXBsYWNlIiwiZXNjYXBlVGVzdCIsImVzY2FwZVJlcGxhY2UiLCJSZWdFeHAiLCJzb3VyY2UiLCJlc2NhcGVUZXN0Tm9FbmNvZGUiLCJlc2NhcGVSZXBsYWNlTm9FbmNvZGUiLCJlc2NhcGVSZXBsYWNlbWVudHMiLCJnZXRFc2NhcGVSZXBsYWNlbWVudCIsImNoIiwiaHRtbCIsImVuY29kZSIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsZUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsOEJBQUE7OztBQ0FPLFNBQVNFLGdCQUFnQkksT0FBQSxFQUFTO0VBQ3ZDLElBQUksT0FBT0EsT0FBQSxLQUFZLFlBQVk7SUFDakNBLE9BQUEsR0FBVTtNQUNSQyxTQUFBLEVBQVdEO0lBQ2I7RUFDRjtFQUVBLElBQUksQ0FBQ0EsT0FBQSxJQUFXLE9BQU9BLE9BQUEsQ0FBUUMsU0FBQSxLQUFjLFlBQVk7SUFDdkQsTUFBTSxJQUFJQyxLQUFBLENBQU0saUNBQWlDO0VBQ25EO0VBRUEsSUFBSSxPQUFPRixPQUFBLENBQVFHLFVBQUEsS0FBZSxVQUFVO0lBQzFDSCxPQUFBLENBQVFHLFVBQUEsR0FBYTtFQUN2QjtFQUVBLE9BQU87SUFDTEMsS0FBQSxFQUFPLENBQUMsQ0FBQ0osT0FBQSxDQUFRSSxLQUFBO0lBQ2pCQyxXQUFXQyxLQUFBLEVBQU87TUFDaEIsSUFBSUEsS0FBQSxDQUFNQyxJQUFBLEtBQVMsUUFBUTtRQUN6QjtNQUNGO01BRUEsTUFBTUMsSUFBQSxHQUFPQyxPQUFBLENBQVFILEtBQUs7TUFFMUIsSUFBSU4sT0FBQSxDQUFRSSxLQUFBLEVBQU87UUFDakIsT0FBT00sT0FBQSxDQUFRQyxPQUFBLENBQVFYLE9BQUEsQ0FBUUMsU0FBQSxDQUFVSyxLQUFBLENBQU1NLElBQUEsRUFBTUosSUFBSSxDQUFDLEVBQUVLLElBQUEsQ0FBS0MsV0FBQSxDQUFZUixLQUFLLENBQUM7TUFDckY7TUFFQSxNQUFNUyxJQUFBLEdBQU9mLE9BQUEsQ0FBUUMsU0FBQSxDQUFVSyxLQUFBLENBQU1NLElBQUEsRUFBTUosSUFBSTtNQUMvQyxJQUFJTyxJQUFBLFlBQWdCTCxPQUFBLEVBQVM7UUFDM0IsTUFBTSxJQUFJUixLQUFBLENBQU0saUtBQWlLO01BQ25MO01BQ0FZLFdBQUEsQ0FBWVIsS0FBSyxFQUFFUyxJQUFJO0lBQ3pCO0lBQ0FDLFFBQUEsRUFBVTtNQUNSRCxLQUFLQSxJQUFBLEVBQU1FLFVBQUEsRUFBWUMsT0FBQSxFQUFTO1FBQzlCLE1BQU1WLElBQUEsSUFBUVMsVUFBQSxJQUFjLElBQUlFLEtBQUEsQ0FBTSxLQUFLLEVBQUU7UUFDN0MsTUFBTUMsU0FBQSxHQUFZWixJQUFBLEdBQ2QsV0FBV1IsT0FBQSxDQUFRRyxVQUFBLEdBQWFrQixNQUFBLENBQU9iLElBQUksT0FDM0M7UUFDSk8sSUFBQSxHQUFPQSxJQUFBLENBQUtPLE9BQUEsQ0FBUSxPQUFPLEVBQUU7UUFDN0IsT0FBTyxhQUFhRixTQUFBLElBQWFGLE9BQUEsR0FBVUgsSUFBQSxHQUFPTSxNQUFBLENBQU9OLElBQUEsRUFBTSxJQUFJO0FBQUE7TUFDckU7SUFDRjtFQUNGO0FBQ0Y7QUFFQSxTQUFTTixRQUFRSCxLQUFBLEVBQU87RUFDdEIsUUFBUUEsS0FBQSxDQUFNRSxJQUFBLElBQVEsSUFBSVcsS0FBQSxDQUFNLEtBQUssRUFBRTtBQUN6QztBQUVBLFNBQVNMLFlBQVlSLEtBQUEsRUFBTztFQUMxQixPQUFRUyxJQUFBLElBQVM7SUFDZixJQUFJLE9BQU9BLElBQUEsS0FBUyxZQUFZQSxJQUFBLEtBQVNULEtBQUEsQ0FBTU0sSUFBQSxFQUFNO01BQ25ETixLQUFBLENBQU1ZLE9BQUEsR0FBVTtNQUNoQlosS0FBQSxDQUFNTSxJQUFBLEdBQU9HLElBQUE7SUFDZjtFQUNGO0FBQ0Y7QUFHQSxJQUFNUSxVQUFBLEdBQWE7QUFDbkIsSUFBTUMsYUFBQSxHQUFnQixJQUFJQyxNQUFBLENBQU9GLFVBQUEsQ0FBV0csTUFBQSxFQUFRLEdBQUc7QUFDdkQsSUFBTUMsa0JBQUEsR0FBcUI7QUFDM0IsSUFBTUMscUJBQUEsR0FBd0IsSUFBSUgsTUFBQSxDQUFPRSxrQkFBQSxDQUFtQkQsTUFBQSxFQUFRLEdBQUc7QUFDdkUsSUFBTUcsa0JBQUEsR0FBcUI7RUFDekIsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7QUFDUDtBQUNBLElBQU1DLG9CQUFBLEdBQXdCQyxFQUFBLElBQU9GLGtCQUFBLENBQW1CRSxFQUFBO0FBQ3hELFNBQVNWLE9BQU9XLElBQUEsRUFBTUMsTUFBQSxFQUFRO0VBQzVCLElBQUlBLE1BQUEsRUFBUTtJQUNWLElBQUlWLFVBQUEsQ0FBV1csSUFBQSxDQUFLRixJQUFJLEdBQUc7TUFDekIsT0FBT0EsSUFBQSxDQUFLVixPQUFBLENBQVFFLGFBQUEsRUFBZU0sb0JBQW9CO0lBQ3pEO0VBQ0YsT0FBTztJQUNMLElBQUlILGtCQUFBLENBQW1CTyxJQUFBLENBQUtGLElBQUksR0FBRztNQUNqQyxPQUFPQSxJQUFBLENBQUtWLE9BQUEsQ0FBUU0scUJBQUEsRUFBdUJFLG9CQUFvQjtJQUNqRTtFQUNGO0VBRUEsT0FBT0UsSUFBQTtBQUNUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWlsZWFybi9hcHAvb3V0In0=