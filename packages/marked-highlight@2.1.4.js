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

// .beyond/uimport/marked-highlight.2.1.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtaGlnaGxpZ2h0LjIuMS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC1oaWdobGlnaHQvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmtlZF9oaWdobGlnaHRfMl8xXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwibWFya2VkSGlnaGxpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJFcnJvciIsImxhbmdQcmVmaXgiLCJhc3luYyIsIndhbGtUb2tlbnMiLCJ0b2tlbiIsInR5cGUiLCJsYW5nIiwiZ2V0TGFuZyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGV4dCIsInRoZW4iLCJ1cGRhdGVUb2tlbiIsImNvZGUiLCJ1c2VOZXdSZW5kZXJlciIsInJlbmRlcmVyIiwiaW5mb1N0cmluZyIsImVzY2FwZWQiLCJjbGFzc0F0dHIiLCJlc2NhcGUiLCJyZXBsYWNlIiwibWF0Y2giLCJlc2NhcGVUZXN0IiwiZXNjYXBlUmVwbGFjZSIsIlJlZ0V4cCIsInNvdXJjZSIsImVzY2FwZVRlc3ROb0VuY29kZSIsImVzY2FwZVJlcGxhY2VOb0VuY29kZSIsImVzY2FwZVJlcGxhY2VtZW50cyIsImdldEVzY2FwZVJlcGxhY2VtZW50IiwiY2giLCJodG1sIiwiZW5jb2RlIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw4QkFBQTs7O0FDQU8sU0FBU0UsZ0JBQWdCSSxPQUFBLEVBQVM7RUFDdkMsSUFBSSxPQUFPQSxPQUFBLEtBQVksWUFBWTtJQUNqQ0EsT0FBQSxHQUFVO01BQ1JDLFNBQUEsRUFBV0Q7SUFDYjtFQUNGO0VBRUEsSUFBSSxDQUFDQSxPQUFBLElBQVcsT0FBT0EsT0FBQSxDQUFRQyxTQUFBLEtBQWMsWUFBWTtJQUN2RCxNQUFNLElBQUlDLEtBQUEsQ0FBTSxpQ0FBaUM7RUFDbkQ7RUFFQSxJQUFJLE9BQU9GLE9BQUEsQ0FBUUcsVUFBQSxLQUFlLFVBQVU7SUFDMUNILE9BQUEsQ0FBUUcsVUFBQSxHQUFhO0VBQ3ZCO0VBRUEsT0FBTztJQUNMQyxLQUFBLEVBQU8sQ0FBQyxDQUFDSixPQUFBLENBQVFJLEtBQUE7SUFDakJDLFdBQVdDLEtBQUEsRUFBTztNQUNoQixJQUFJQSxLQUFBLENBQU1DLElBQUEsS0FBUyxRQUFRO1FBQ3pCO01BQ0Y7TUFFQSxNQUFNQyxJQUFBLEdBQU9DLE9BQUEsQ0FBUUgsS0FBQSxDQUFNRSxJQUFJO01BRS9CLElBQUlSLE9BQUEsQ0FBUUksS0FBQSxFQUFPO1FBQ2pCLE9BQU9NLE9BQUEsQ0FBUUMsT0FBQSxDQUFRWCxPQUFBLENBQVFDLFNBQUEsQ0FBVUssS0FBQSxDQUFNTSxJQUFBLEVBQU1KLElBQUEsRUFBTUYsS0FBQSxDQUFNRSxJQUFBLElBQVEsRUFBRSxDQUFDLEVBQUVLLElBQUEsQ0FBS0MsV0FBQSxDQUFZUixLQUFLLENBQUM7TUFDdkc7TUFFQSxNQUFNUyxJQUFBLEdBQU9mLE9BQUEsQ0FBUUMsU0FBQSxDQUFVSyxLQUFBLENBQU1NLElBQUEsRUFBTUosSUFBQSxFQUFNRixLQUFBLENBQU1FLElBQUEsSUFBUSxFQUFFO01BQ2pFLElBQUlPLElBQUEsWUFBZ0JMLE9BQUEsRUFBUztRQUMzQixNQUFNLElBQUlSLEtBQUEsQ0FBTSxpS0FBaUs7TUFDbkw7TUFDQVksV0FBQSxDQUFZUixLQUFLLEVBQUVTLElBQUk7SUFDekI7SUFDQUMsY0FBQSxFQUFnQjtJQUNoQkMsUUFBQSxFQUFVO01BQ1JGLEtBQUtBLElBQUEsRUFBTUcsVUFBQSxFQUFZQyxPQUFBLEVBQVM7UUFFOUIsSUFBSSxPQUFPSixJQUFBLEtBQVMsVUFBVTtVQUM1QkksT0FBQSxHQUFVSixJQUFBLENBQUtJLE9BQUE7VUFDZkQsVUFBQSxHQUFhSCxJQUFBLENBQUtQLElBQUE7VUFDbEJPLElBQUEsR0FBT0EsSUFBQSxDQUFLSCxJQUFBO1FBQ2Q7UUFDQSxNQUFNSixJQUFBLEdBQU9DLE9BQUEsQ0FBUVMsVUFBVTtRQUMvQixNQUFNRSxTQUFBLEdBQVlaLElBQUEsR0FDZCxXQUFXUixPQUFBLENBQVFHLFVBQUEsR0FBYWtCLE1BQUEsQ0FBT2IsSUFBSSxPQUMzQztRQUNKTyxJQUFBLEdBQU9BLElBQUEsQ0FBS08sT0FBQSxDQUFRLE9BQU8sRUFBRTtRQUM3QixPQUFPLGFBQWFGLFNBQUEsSUFBYUQsT0FBQSxHQUFVSixJQUFBLEdBQU9NLE1BQUEsQ0FBT04sSUFBQSxFQUFNLElBQUk7QUFBQTtNQUNyRTtJQUNGO0VBQ0Y7QUFDRjtBQUVBLFNBQVNOLFFBQVFELElBQUEsRUFBTTtFQUNyQixRQUFRQSxJQUFBLElBQVEsSUFBSWUsS0FBQSxDQUFNLEtBQUssRUFBRTtBQUNuQztBQUVBLFNBQVNULFlBQVlSLEtBQUEsRUFBTztFQUMxQixPQUFRUyxJQUFBLElBQVM7SUFDZixJQUFJLE9BQU9BLElBQUEsS0FBUyxZQUFZQSxJQUFBLEtBQVNULEtBQUEsQ0FBTU0sSUFBQSxFQUFNO01BQ25ETixLQUFBLENBQU1hLE9BQUEsR0FBVTtNQUNoQmIsS0FBQSxDQUFNTSxJQUFBLEdBQU9HLElBQUE7SUFDZjtFQUNGO0FBQ0Y7QUFHQSxJQUFNUyxVQUFBLEdBQWE7QUFDbkIsSUFBTUMsYUFBQSxHQUFnQixJQUFJQyxNQUFBLENBQU9GLFVBQUEsQ0FBV0csTUFBQSxFQUFRLEdBQUc7QUFDdkQsSUFBTUMsa0JBQUEsR0FBcUI7QUFDM0IsSUFBTUMscUJBQUEsR0FBd0IsSUFBSUgsTUFBQSxDQUFPRSxrQkFBQSxDQUFtQkQsTUFBQSxFQUFRLEdBQUc7QUFDdkUsSUFBTUcsa0JBQUEsR0FBcUI7RUFDekIsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7QUFDUDtBQUNBLElBQU1DLG9CQUFBLEdBQXdCQyxFQUFBLElBQU9GLGtCQUFBLENBQW1CRSxFQUFBO0FBQ3hELFNBQVNYLE9BQU9ZLElBQUEsRUFBTUMsTUFBQSxFQUFRO0VBQzVCLElBQUlBLE1BQUEsRUFBUTtJQUNWLElBQUlWLFVBQUEsQ0FBV1csSUFBQSxDQUFLRixJQUFJLEdBQUc7TUFDekIsT0FBT0EsSUFBQSxDQUFLWCxPQUFBLENBQVFHLGFBQUEsRUFBZU0sb0JBQW9CO0lBQ3pEO0VBQ0YsT0FBTztJQUNMLElBQUlILGtCQUFBLENBQW1CTyxJQUFBLENBQUtGLElBQUksR0FBRztNQUNqQyxPQUFPQSxJQUFBLENBQUtYLE9BQUEsQ0FBUU8scUJBQUEsRUFBdUJFLG9CQUFvQjtJQUNqRTtFQUNGO0VBRUEsT0FBT0UsSUFBQTtBQUNUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9