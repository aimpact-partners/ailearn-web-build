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

// .beyond/uimport/temp/marked-highlight.2.0.6.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1oaWdobGlnaHQuMi4wLjYuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkLWhpZ2hsaWdodC9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibWFya2VkX2hpZ2hsaWdodF8yXzBfNl9leHBvcnRzIiwiX19leHBvcnQiLCJtYXJrZWRIaWdobGlnaHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIkVycm9yIiwibGFuZ1ByZWZpeCIsImFzeW5jIiwid2Fsa1Rva2VucyIsInRva2VuIiwidHlwZSIsImxhbmciLCJnZXRMYW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0ZXh0IiwidGhlbiIsInVwZGF0ZVRva2VuIiwiY29kZSIsInJlbmRlcmVyIiwiaW5mb1N0cmluZyIsImVzY2FwZWQiLCJtYXRjaCIsImNsYXNzQXR0ciIsImVzY2FwZSIsInJlcGxhY2UiLCJlc2NhcGVUZXN0IiwiZXNjYXBlUmVwbGFjZSIsIlJlZ0V4cCIsInNvdXJjZSIsImVzY2FwZVRlc3ROb0VuY29kZSIsImVzY2FwZVJlcGxhY2VOb0VuY29kZSIsImVzY2FwZVJlcGxhY2VtZW50cyIsImdldEVzY2FwZVJlcGxhY2VtZW50IiwiY2giLCJodG1sIiwiZW5jb2RlIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw4QkFBQTs7O0FDQU8sU0FBU0UsZ0JBQWdCSSxPQUFBLEVBQVM7RUFDdkMsSUFBSSxPQUFPQSxPQUFBLEtBQVksWUFBWTtJQUNqQ0EsT0FBQSxHQUFVO01BQ1JDLFNBQUEsRUFBV0Q7SUFDYjtFQUNGO0VBRUEsSUFBSSxDQUFDQSxPQUFBLElBQVcsT0FBT0EsT0FBQSxDQUFRQyxTQUFBLEtBQWMsWUFBWTtJQUN2RCxNQUFNLElBQUlDLEtBQUEsQ0FBTSxpQ0FBaUM7RUFDbkQ7RUFFQSxJQUFJLE9BQU9GLE9BQUEsQ0FBUUcsVUFBQSxLQUFlLFVBQVU7SUFDMUNILE9BQUEsQ0FBUUcsVUFBQSxHQUFhO0VBQ3ZCO0VBRUEsT0FBTztJQUNMQyxLQUFBLEVBQU8sQ0FBQyxDQUFDSixPQUFBLENBQVFJLEtBQUE7SUFDakJDLFdBQVdDLEtBQUEsRUFBTztNQUNoQixJQUFJQSxLQUFBLENBQU1DLElBQUEsS0FBUyxRQUFRO1FBQ3pCO01BQ0Y7TUFFQSxNQUFNQyxJQUFBLEdBQU9DLE9BQUEsQ0FBUUgsS0FBSztNQUUxQixJQUFJTixPQUFBLENBQVFJLEtBQUEsRUFBTztRQUNqQixPQUFPTSxPQUFBLENBQVFDLE9BQUEsQ0FBUVgsT0FBQSxDQUFRQyxTQUFBLENBQVVLLEtBQUEsQ0FBTU0sSUFBQSxFQUFNSixJQUFJLENBQUMsRUFBRUssSUFBQSxDQUFLQyxXQUFBLENBQVlSLEtBQUssQ0FBQztNQUNyRjtNQUVBLE1BQU1TLElBQUEsR0FBT2YsT0FBQSxDQUFRQyxTQUFBLENBQVVLLEtBQUEsQ0FBTU0sSUFBQSxFQUFNSixJQUFJO01BQy9DLElBQUlPLElBQUEsWUFBZ0JMLE9BQUEsRUFBUztRQUMzQixNQUFNLElBQUlSLEtBQUEsQ0FBTSxpS0FBaUs7TUFDbkw7TUFDQVksV0FBQSxDQUFZUixLQUFLLEVBQUVTLElBQUk7SUFDekI7SUFDQUMsUUFBQSxFQUFVO01BQ1JELEtBQUtBLElBQUEsRUFBTUUsVUFBQSxFQUFZQyxPQUFBLEVBQVM7UUFDOUIsTUFBTVYsSUFBQSxJQUFRUyxVQUFBLElBQWMsSUFBSUUsS0FBQSxDQUFNLEtBQUssRUFBRTtRQUM3QyxNQUFNQyxTQUFBLEdBQVlaLElBQUEsR0FDZCxXQUFXUixPQUFBLENBQVFHLFVBQUEsR0FBYWtCLE1BQUEsQ0FBT2IsSUFBSSxPQUMzQztRQUNKTyxJQUFBLEdBQU9BLElBQUEsQ0FBS08sT0FBQSxDQUFRLE9BQU8sRUFBRTtRQUM3QixPQUFPLGFBQWFGLFNBQUEsSUFBYUYsT0FBQSxHQUFVSCxJQUFBLEdBQU9NLE1BQUEsQ0FBT04sSUFBQSxFQUFNLElBQUk7QUFBQTtNQUNyRTtJQUNGO0VBQ0Y7QUFDRjtBQUVBLFNBQVNOLFFBQVFILEtBQUEsRUFBTztFQUN0QixRQUFRQSxLQUFBLENBQU1FLElBQUEsSUFBUSxJQUFJVyxLQUFBLENBQU0sS0FBSyxFQUFFO0FBQ3pDO0FBRUEsU0FBU0wsWUFBWVIsS0FBQSxFQUFPO0VBQzFCLE9BQVFTLElBQUEsSUFBUztJQUNmLElBQUksT0FBT0EsSUFBQSxLQUFTLFlBQVlBLElBQUEsS0FBU1QsS0FBQSxDQUFNTSxJQUFBLEVBQU07TUFDbkROLEtBQUEsQ0FBTVksT0FBQSxHQUFVO01BQ2hCWixLQUFBLENBQU1NLElBQUEsR0FBT0csSUFBQTtJQUNmO0VBQ0Y7QUFDRjtBQUdBLElBQU1RLFVBQUEsR0FBYTtBQUNuQixJQUFNQyxhQUFBLEdBQWdCLElBQUlDLE1BQUEsQ0FBT0YsVUFBQSxDQUFXRyxNQUFBLEVBQVEsR0FBRztBQUN2RCxJQUFNQyxrQkFBQSxHQUFxQjtBQUMzQixJQUFNQyxxQkFBQSxHQUF3QixJQUFJSCxNQUFBLENBQU9FLGtCQUFBLENBQW1CRCxNQUFBLEVBQVEsR0FBRztBQUN2RSxJQUFNRyxrQkFBQSxHQUFxQjtFQUN6QixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztBQUNQO0FBQ0EsSUFBTUMsb0JBQUEsR0FBd0JDLEVBQUEsSUFBT0Ysa0JBQUEsQ0FBbUJFLEVBQUE7QUFDeEQsU0FBU1YsT0FBT1csSUFBQSxFQUFNQyxNQUFBLEVBQVE7RUFDNUIsSUFBSUEsTUFBQSxFQUFRO0lBQ1YsSUFBSVYsVUFBQSxDQUFXVyxJQUFBLENBQUtGLElBQUksR0FBRztNQUN6QixPQUFPQSxJQUFBLENBQUtWLE9BQUEsQ0FBUUUsYUFBQSxFQUFlTSxvQkFBb0I7SUFDekQ7RUFDRixPQUFPO0lBQ0wsSUFBSUgsa0JBQUEsQ0FBbUJPLElBQUEsQ0FBS0YsSUFBSSxHQUFHO01BQ2pDLE9BQU9BLElBQUEsQ0FBS1YsT0FBQSxDQUFRTSxxQkFBQSxFQUF1QkUsb0JBQW9CO0lBQ2pFO0VBQ0Y7RUFFQSxPQUFPRSxJQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9hcHAvb3V0In0=