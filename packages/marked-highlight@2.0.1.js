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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1oaWdobGlnaHQuMi4wLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkLWhpZ2hsaWdodC9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJtYXJrZWRIaWdobGlnaHQiLCJtb2R1bGUiLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwiRXJyb3IiLCJsYW5nUHJlZml4IiwiYXN5bmMiLCJ3YWxrVG9rZW5zIiwidG9rZW4iLCJ0eXBlIiwibGFuZyIsImdldExhbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInRleHQiLCJ0aGVuIiwidXBkYXRlVG9rZW4iLCJjb2RlIiwicmVuZGVyZXIiLCJpbmZvU3RyaW5nIiwiZXNjYXBlZCIsIm1hdGNoIiwiY2xhc3NBdHRyIiwiZXNjYXBlIiwicmVwbGFjZSIsImVzY2FwZVRlc3QiLCJlc2NhcGVSZXBsYWNlIiwiUmVnRXhwIiwic291cmNlIiwiZXNjYXBlVGVzdE5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZU5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZW1lbnRzIiwiZ2V0RXNjYXBlUmVwbGFjZW1lbnQiLCJjaCIsImh0bWwiLCJlbmNvZGUiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBTyxTQUFTRCxnQkFBZ0JFLFNBQVM7RUFDdkMsSUFBSSxPQUFPQSxZQUFZLFlBQVk7SUFDakNBLFVBQVU7TUFDUkMsV0FBV0Q7SUFDYjtFQUNGO0VBRUEsSUFBSSxDQUFDQSxXQUFXLE9BQU9BLFFBQVFDLGNBQWMsWUFBWTtJQUN2RCxNQUFNLElBQUlDLE1BQU0saUNBQWlDO0VBQ25EO0VBRUEsSUFBSSxPQUFPRixRQUFRRyxlQUFlLFVBQVU7SUFDMUNILFFBQVFHLGFBQWE7RUFDdkI7RUFFQSxPQUFPO0lBQ0xDLE9BQU8sQ0FBQyxDQUFDSixRQUFRSTtJQUNqQkMsV0FBV0MsT0FBTztNQUNoQixJQUFJQSxNQUFNQyxTQUFTLFFBQVE7UUFDekI7TUFDRjtNQUVBLE1BQU1DLE9BQU9DLFFBQVFILEtBQUs7TUFFMUIsSUFBSU4sUUFBUUksT0FBTztRQUNqQixPQUFPTSxRQUFRQyxRQUFRWCxRQUFRQyxVQUFVSyxNQUFNTSxNQUFNSixJQUFJLENBQUMsRUFBRUssS0FBS0MsWUFBWVIsS0FBSyxDQUFDO01BQ3JGO01BRUEsTUFBTVMsT0FBT2YsUUFBUUMsVUFBVUssTUFBTU0sTUFBTUosSUFBSTtNQUMvQ00sWUFBWVIsS0FBSyxFQUFFUyxJQUFJO0lBQ3pCO0lBQ0FDLFVBQVU7TUFDUkQsS0FBS0EsTUFBTUUsWUFBWUMsU0FBUztRQUM5QixNQUFNVixRQUFRUyxjQUFjLElBQUlFLE1BQU0sS0FBSyxFQUFFO1FBQzdDLE1BQU1DLFlBQVlaLE9BQ2QsV0FBV1IsUUFBUUcsYUFBYWtCLE9BQU9iLElBQUksT0FDM0M7UUFDSk8sT0FBT0EsS0FBS08sUUFBUSxPQUFPLEVBQUU7UUFDN0IsT0FBTyxhQUFhRixhQUFhRixVQUFVSCxPQUFPTSxPQUFPTixNQUFNLElBQUk7QUFBQTtNQUNyRTtJQUNGO0VBQ0Y7QUFDRjtBQUVBLFNBQVNOLFFBQVFILE9BQU87RUFDdEIsUUFBUUEsTUFBTUUsUUFBUSxJQUFJVyxNQUFNLEtBQUssRUFBRTtBQUN6QztBQUVBLFNBQVNMLFlBQVlSLE9BQU87RUFDMUIsT0FBUVMsUUFBUztJQUNmLElBQUksT0FBT0EsU0FBUyxZQUFZQSxTQUFTVCxNQUFNTSxNQUFNO01BQ25ETixNQUFNWSxVQUFVO01BQ2hCWixNQUFNTSxPQUFPRztJQUNmO0VBQ0Y7QUFDRjtBQUdBLElBQU1RLGFBQWE7QUFDbkIsSUFBTUMsZ0JBQWdCLElBQUlDLE9BQU9GLFdBQVdHLFFBQVEsR0FBRztBQUN2RCxJQUFNQyxxQkFBcUI7QUFDM0IsSUFBTUMsd0JBQXdCLElBQUlILE9BQU9FLG1CQUFtQkQsUUFBUSxHQUFHO0FBQ3ZFLElBQU1HLHFCQUFxQjtFQUN6QixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztBQUNQO0FBQ0EsSUFBTUMsdUJBQXdCQyxNQUFPRixtQkFBbUJFO0FBQ3hELFNBQVNWLE9BQU9XLE1BQU1DLFFBQVE7RUFDNUIsSUFBSUEsUUFBUTtJQUNWLElBQUlWLFdBQVdXLEtBQUtGLElBQUksR0FBRztNQUN6QixPQUFPQSxLQUFLVixRQUFRRSxlQUFlTSxvQkFBb0I7SUFDekQ7RUFDRixPQUFPO0lBQ0wsSUFBSUgsbUJBQW1CTyxLQUFLRixJQUFJLEdBQUc7TUFDakMsT0FBT0EsS0FBS1YsUUFBUU0sdUJBQXVCRSxvQkFBb0I7SUFDakU7RUFDRjtFQUVBLE9BQU9FO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haWxlYXJuL2FwcC9vdXQifQ==