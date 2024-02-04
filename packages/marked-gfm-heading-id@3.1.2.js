System.register(["github-slugger@2.0.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["github-slugger","2.0.0"],["marked-gfm-heading-id","3.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('github-slugger@2.0.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/marked-gfm-heading-id.3.1.2.js
var marked_gfm_heading_id_3_1_2_exports = {};
__export(marked_gfm_heading_id_3_1_2_exports, {
  getHeadingList: () => getHeadingList,
  gfmHeadingId: () => gfmHeadingId
});
module.exports = __toCommonJS(marked_gfm_heading_id_3_1_2_exports);

// node_modules/marked-gfm-heading-id/src/index.js
var import_github_slugger = __toESM(require("github-slugger@2.0.0"), 0);
var slugger;
var headings = [];
function gfmHeadingId({
  prefix = ""
} = {}) {
  return {
    headerIds: false,
    hooks: {
      preprocess(src) {
        headings = [];
        slugger = new import_github_slugger.default();
        return src;
      }
    },
    renderer: {
      heading(text, level, raw) {
        raw = raw.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "");
        const id = `${prefix}${slugger.slug(raw)}`;
        const heading = {
          level,
          text,
          id
        };
        headings.push(heading);
        return `<h${level} id="${id}">${text}</h${level}>
`;
      }
    }
  };
}
function getHeadingList() {
  return headings;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1nZm0taGVhZGluZy1pZC4zLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQtZ2ZtLWhlYWRpbmctaWQvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmtlZF9nZm1faGVhZGluZ19pZF8zXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJnZXRIZWFkaW5nTGlzdCIsImdmbUhlYWRpbmdJZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZ2l0aHViX3NsdWdnZXIiLCJfX3RvRVNNIiwicmVxdWlyZSIsInNsdWdnZXIiLCJoZWFkaW5ncyIsInByZWZpeCIsImhlYWRlcklkcyIsImhvb2tzIiwicHJlcHJvY2VzcyIsInNyYyIsImRlZmF1bHQiLCJyZW5kZXJlciIsImhlYWRpbmciLCJ0ZXh0IiwibGV2ZWwiLCJyYXciLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJyZXBsYWNlIiwiaWQiLCJzbHVnIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQ0FBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixtQ0FBQTs7O0FDQUEsSUFBQU8scUJBQUEsR0FBMEJDLE9BQUEsQ0FBQUMsT0FBQTtBQUMxQixJQUFJQyxPQUFBO0FBRUosSUFBSUMsUUFBQSxHQUFXLEVBQUM7QUFFVCxTQUFTUixhQUFhO0VBQUVTLE1BQUEsR0FBUztBQUFHLElBQUksQ0FBQyxHQUFHO0VBQ2pELE9BQU87SUFDTEMsU0FBQSxFQUFXO0lBQ1hDLEtBQUEsRUFBTztNQUNMQyxXQUFXQyxHQUFBLEVBQUs7UUFDZEwsUUFBQSxHQUFXLEVBQUM7UUFDWkQsT0FBQSxHQUFVLElBQUlILHFCQUFBLENBQUFVLE9BQUEsQ0FBYztRQUM1QixPQUFPRCxHQUFBO01BQ1Q7SUFDRjtJQUNBRSxRQUFBLEVBQVU7TUFDUkMsUUFBUUMsSUFBQSxFQUFNQyxLQUFBLEVBQU9DLEdBQUEsRUFBSztRQUN4QkEsR0FBQSxHQUFNQSxHQUFBLENBQ0hDLFdBQUEsQ0FBWSxFQUNaQyxJQUFBLENBQUssRUFDTEMsT0FBQSxDQUFRLG1CQUFtQixFQUFFO1FBQ2hDLE1BQU1DLEVBQUEsR0FBSyxHQUFHZCxNQUFBLEdBQVNGLE9BQUEsQ0FBUWlCLElBQUEsQ0FBS0wsR0FBRztRQUN2QyxNQUFNSCxPQUFBLEdBQVU7VUFBRUUsS0FBQTtVQUFPRCxJQUFBO1VBQU1NO1FBQUc7UUFDbENmLFFBQUEsQ0FBU2lCLElBQUEsQ0FBS1QsT0FBTztRQUVyQixPQUFPLEtBQUtFLEtBQUEsUUFBYUssRUFBQSxLQUFPTixJQUFBLE1BQVVDLEtBQUE7QUFBQTtNQUM1QztJQUNGO0VBQ0Y7QUFDRjtBQUVPLFNBQVNuQixlQUFBLEVBQWlCO0VBQy9CLE9BQU9TLFFBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpbGVhcm4vYXBwL291dCJ9