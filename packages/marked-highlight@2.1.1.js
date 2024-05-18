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

// .beyond/uimport/temp/marked-highlight.2.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1oaWdobGlnaHQuMi4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkLWhpZ2hsaWdodC9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibWFya2VkX2hpZ2hsaWdodF8yXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJtYXJrZWRIaWdobGlnaHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIkVycm9yIiwibGFuZ1ByZWZpeCIsImFzeW5jIiwid2Fsa1Rva2VucyIsInRva2VuIiwidHlwZSIsImxhbmciLCJnZXRMYW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0ZXh0IiwidGhlbiIsInVwZGF0ZVRva2VuIiwiY29kZSIsInJlbmRlcmVyIiwiaW5mb1N0cmluZyIsImVzY2FwZWQiLCJjbGFzc0F0dHIiLCJlc2NhcGUiLCJyZXBsYWNlIiwibWF0Y2giLCJlc2NhcGVUZXN0IiwiZXNjYXBlUmVwbGFjZSIsIlJlZ0V4cCIsInNvdXJjZSIsImVzY2FwZVRlc3ROb0VuY29kZSIsImVzY2FwZVJlcGxhY2VOb0VuY29kZSIsImVzY2FwZVJlcGxhY2VtZW50cyIsImdldEVzY2FwZVJlcGxhY2VtZW50IiwiY2giLCJodG1sIiwiZW5jb2RlIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw4QkFBQTs7O0FDQU8sU0FBU0UsZ0JBQWdCSSxPQUFBLEVBQVM7RUFDdkMsSUFBSSxPQUFPQSxPQUFBLEtBQVksWUFBWTtJQUNqQ0EsT0FBQSxHQUFVO01BQ1JDLFNBQUEsRUFBV0Q7SUFDYjtFQUNGO0VBRUEsSUFBSSxDQUFDQSxPQUFBLElBQVcsT0FBT0EsT0FBQSxDQUFRQyxTQUFBLEtBQWMsWUFBWTtJQUN2RCxNQUFNLElBQUlDLEtBQUEsQ0FBTSxpQ0FBaUM7RUFDbkQ7RUFFQSxJQUFJLE9BQU9GLE9BQUEsQ0FBUUcsVUFBQSxLQUFlLFVBQVU7SUFDMUNILE9BQUEsQ0FBUUcsVUFBQSxHQUFhO0VBQ3ZCO0VBRUEsT0FBTztJQUNMQyxLQUFBLEVBQU8sQ0FBQyxDQUFDSixPQUFBLENBQVFJLEtBQUE7SUFDakJDLFdBQVdDLEtBQUEsRUFBTztNQUNoQixJQUFJQSxLQUFBLENBQU1DLElBQUEsS0FBUyxRQUFRO1FBQ3pCO01BQ0Y7TUFFQSxNQUFNQyxJQUFBLEdBQU9DLE9BQUEsQ0FBUUgsS0FBQSxDQUFNRSxJQUFJO01BRS9CLElBQUlSLE9BQUEsQ0FBUUksS0FBQSxFQUFPO1FBQ2pCLE9BQU9NLE9BQUEsQ0FBUUMsT0FBQSxDQUFRWCxPQUFBLENBQVFDLFNBQUEsQ0FBVUssS0FBQSxDQUFNTSxJQUFBLEVBQU1KLElBQUEsRUFBTUYsS0FBQSxDQUFNRSxJQUFBLElBQVEsRUFBRSxDQUFDLEVBQUVLLElBQUEsQ0FBS0MsV0FBQSxDQUFZUixLQUFLLENBQUM7TUFDdkc7TUFFQSxNQUFNUyxJQUFBLEdBQU9mLE9BQUEsQ0FBUUMsU0FBQSxDQUFVSyxLQUFBLENBQU1NLElBQUEsRUFBTUosSUFBQSxFQUFNRixLQUFBLENBQU1FLElBQUEsSUFBUSxFQUFFO01BQ2pFLElBQUlPLElBQUEsWUFBZ0JMLE9BQUEsRUFBUztRQUMzQixNQUFNLElBQUlSLEtBQUEsQ0FBTSxpS0FBaUs7TUFDbkw7TUFDQVksV0FBQSxDQUFZUixLQUFLLEVBQUVTLElBQUk7SUFDekI7SUFDQUMsUUFBQSxFQUFVO01BQ1JELEtBQUtBLElBQUEsRUFBTUUsVUFBQSxFQUFZQyxPQUFBLEVBQVM7UUFDOUIsTUFBTVYsSUFBQSxHQUFPQyxPQUFBLENBQVFRLFVBQVU7UUFDL0IsTUFBTUUsU0FBQSxHQUFZWCxJQUFBLEdBQ2QsV0FBV1IsT0FBQSxDQUFRRyxVQUFBLEdBQWFpQixNQUFBLENBQU9aLElBQUksT0FDM0M7UUFDSk8sSUFBQSxHQUFPQSxJQUFBLENBQUtNLE9BQUEsQ0FBUSxPQUFPLEVBQUU7UUFDN0IsT0FBTyxhQUFhRixTQUFBLElBQWFELE9BQUEsR0FBVUgsSUFBQSxHQUFPSyxNQUFBLENBQU9MLElBQUEsRUFBTSxJQUFJO0FBQUE7TUFDckU7SUFDRjtFQUNGO0FBQ0Y7QUFFQSxTQUFTTixRQUFRRCxJQUFBLEVBQU07RUFDckIsUUFBUUEsSUFBQSxJQUFRLElBQUljLEtBQUEsQ0FBTSxLQUFLLEVBQUU7QUFDbkM7QUFFQSxTQUFTUixZQUFZUixLQUFBLEVBQU87RUFDMUIsT0FBUVMsSUFBQSxJQUFTO0lBQ2YsSUFBSSxPQUFPQSxJQUFBLEtBQVMsWUFBWUEsSUFBQSxLQUFTVCxLQUFBLENBQU1NLElBQUEsRUFBTTtNQUNuRE4sS0FBQSxDQUFNWSxPQUFBLEdBQVU7TUFDaEJaLEtBQUEsQ0FBTU0sSUFBQSxHQUFPRyxJQUFBO0lBQ2Y7RUFDRjtBQUNGO0FBR0EsSUFBTVEsVUFBQSxHQUFhO0FBQ25CLElBQU1DLGFBQUEsR0FBZ0IsSUFBSUMsTUFBQSxDQUFPRixVQUFBLENBQVdHLE1BQUEsRUFBUSxHQUFHO0FBQ3ZELElBQU1DLGtCQUFBLEdBQXFCO0FBQzNCLElBQU1DLHFCQUFBLEdBQXdCLElBQUlILE1BQUEsQ0FBT0Usa0JBQUEsQ0FBbUJELE1BQUEsRUFBUSxHQUFHO0FBQ3ZFLElBQU1HLGtCQUFBLEdBQXFCO0VBQ3pCLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0FBQ1A7QUFDQSxJQUFNQyxvQkFBQSxHQUF3QkMsRUFBQSxJQUFPRixrQkFBQSxDQUFtQkUsRUFBQTtBQUN4RCxTQUFTWCxPQUFPWSxJQUFBLEVBQU1DLE1BQUEsRUFBUTtFQUM1QixJQUFJQSxNQUFBLEVBQVE7SUFDVixJQUFJVixVQUFBLENBQVdXLElBQUEsQ0FBS0YsSUFBSSxHQUFHO01BQ3pCLE9BQU9BLElBQUEsQ0FBS1gsT0FBQSxDQUFRRyxhQUFBLEVBQWVNLG9CQUFvQjtJQUN6RDtFQUNGLE9BQU87SUFDTCxJQUFJSCxrQkFBQSxDQUFtQk8sSUFBQSxDQUFLRixJQUFJLEdBQUc7TUFDakMsT0FBT0EsSUFBQSxDQUFLWCxPQUFBLENBQVFPLHFCQUFBLEVBQXVCRSxvQkFBb0I7SUFDakU7RUFDRjtFQUVBLE9BQU9FLElBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FwcC9vdXQifQ==