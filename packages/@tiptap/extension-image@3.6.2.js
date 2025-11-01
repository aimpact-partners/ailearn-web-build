System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.6.2/state","prosemirror-view@1.40.1","@tiptap/pm@3.6.2/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.6.2/keymap","@tiptap/pm@3.6.2/transform","@tiptap/pm@3.6.2/model","prosemirror-commands@1.7.1","@tiptap/pm@3.6.2/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.6.2/schema-list","@tiptap/core@3.6.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.6.2"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.6.2"],["@tiptap/extension-image","3.6.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.6.2/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.6.2/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.6.2/keymap', dep), dep => dependencies.set('@tiptap/pm@3.6.2/transform', dep), dep => dependencies.set('@tiptap/pm@3.6.2/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.6.2/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.6.2/schema-list', dep), dep => dependencies.set('@tiptap/core@3.6.2', dep)],
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

// .beyond/uimport/temp/@tiptap/extension-image.3.6.2.js
var extension_image_3_6_2_exports = {};
__export(extension_image_3_6_2_exports, {
  Image: () => Image,
  default: () => extension_image_3_6_2_default,
  inputRegex: () => inputRegex
});
module.exports = __toCommonJS(extension_image_3_6_2_exports);

// node_modules/@tiptap/extension-image/dist/index.js
var import_core = require("@tiptap/core@3.6.2");
var inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
var Image = import_core.Node.create({
  name: "image",
  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: true,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [{
      tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["img", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes)];
  },
  addCommands() {
    return {
      setImage: options => ({
        commands
      }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options
        });
      }
    };
  },
  addInputRules() {
    return [(0, import_core.nodeInputRule)({
      find: inputRegex,
      type: this.type,
      getAttributes: match => {
        const [,, alt, src, title] = match;
        return {
          src,
          alt,
          title
        };
      }
    })];
  }
});
var index_default = Image;

// .beyond/uimport/temp/@tiptap/extension-image.3.6.2.js
var extension_image_3_6_2_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWltYWdlLjMuNi4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWltYWdlL3NyYy9pbWFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1pbWFnZS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2ltYWdlXzNfNl8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkltYWdlIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9pbWFnZV8zXzZfMl9kZWZhdWx0IiwiaW5wdXRSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJOb2RlIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJpbmxpbmUiLCJhbGxvd0Jhc2U2NCIsIkhUTUxBdHRyaWJ1dGVzIiwib3B0aW9ucyIsImdyb3VwIiwiZHJhZ2dhYmxlIiwiYWRkQXR0cmlidXRlcyIsInNyYyIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJwYXJzZUhUTUwiLCJ0YWciLCJyZW5kZXJIVE1MIiwibWVyZ2VBdHRyaWJ1dGVzIiwiYWRkQ29tbWFuZHMiLCJzZXRJbWFnZSIsImNvbW1hbmRzIiwiaW5zZXJ0Q29udGVudCIsInR5cGUiLCJhdHRycyIsImFkZElucHV0UnVsZXMiLCJub2RlSW5wdXRSdWxlIiwiZmluZCIsImdldEF0dHJpYnV0ZXMiLCJtYXRjaCIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDZCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNkJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLDZCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLDZCQUFBOzs7QUNBQSxJQUFBUyxXQUFBLEdBQXFEQyxPQUFBO0FBcUQ5QyxJQUFNTCxVQUFBLEdBQWE7QUFNbkIsSUFBTUgsS0FBQSxHQUFRTyxXQUFBLENBQUFFLElBQUEsQ0FBS0MsTUFBQSxDQUFxQjtFQUM3Q0MsSUFBQSxFQUFNO0VBRU5DLFdBQUEsRUFBYTtJQUNYLE9BQU87TUFDTEMsTUFBQSxFQUFRO01BQ1JDLFdBQUEsRUFBYTtNQUNiQyxjQUFBLEVBQWdCLENBQUM7SUFDbkI7RUFDRjtFQUVBRixPQUFBLEVBQVM7SUFDUCxPQUFPLEtBQUtHLE9BQUEsQ0FBUUgsTUFBQTtFQUN0QjtFQUVBSSxNQUFBLEVBQVE7SUFDTixPQUFPLEtBQUtELE9BQUEsQ0FBUUgsTUFBQSxHQUFTLFdBQVc7RUFDMUM7RUFFQUssU0FBQSxFQUFXO0VBRVhDLGNBQUEsRUFBZ0I7SUFDZCxPQUFPO01BQ0xDLEdBQUEsRUFBSztRQUNIbkIsT0FBQSxFQUFTO01BQ1g7TUFDQW9CLEdBQUEsRUFBSztRQUNIcEIsT0FBQSxFQUFTO01BQ1g7TUFDQXFCLEtBQUEsRUFBTztRQUNMckIsT0FBQSxFQUFTO01BQ1g7TUFDQXNCLEtBQUEsRUFBTztRQUNMdEIsT0FBQSxFQUFTO01BQ1g7TUFDQXVCLE1BQUEsRUFBUTtRQUNOdkIsT0FBQSxFQUFTO01BQ1g7SUFDRjtFQUNGO0VBRUF3QixVQUFBLEVBQVk7SUFDVixPQUFPLENBQ0w7TUFDRUMsR0FBQSxFQUFLLEtBQUtWLE9BQUEsQ0FBUUYsV0FBQSxHQUFjLGFBQWE7SUFDL0MsRUFDRjtFQUNGO0VBRUFhLFdBQVc7SUFBRVo7RUFBZSxHQUFHO0lBQzdCLE9BQU8sQ0FBQyxXQUFPUixXQUFBLENBQUFxQixlQUFBLEVBQWdCLEtBQUtaLE9BQUEsQ0FBUUQsY0FBQSxFQUFnQkEsY0FBYyxDQUFDO0VBQzdFO0VBRUFjLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsUUFBQSxFQUNFZCxPQUFBLElBQ0EsQ0FBQztRQUFFZTtNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTQyxhQUFBLENBQWM7VUFDNUJDLElBQUEsRUFBTSxLQUFLdEIsSUFBQTtVQUNYdUIsS0FBQSxFQUFPbEI7UUFDVCxDQUFDO01BQ0g7SUFDSjtFQUNGO0VBRUFtQixjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0w1QixXQUFBLENBQUE2QixhQUFBLEVBQWM7TUFDWkMsSUFBQSxFQUFNbEMsVUFBQTtNQUNOOEIsSUFBQSxFQUFNLEtBQUtBLElBQUE7TUFDWEssYUFBQSxFQUFlQyxLQUFBLElBQVM7UUFDdEIsTUFBTSxJQUFLbEIsR0FBQSxFQUFLRCxHQUFBLEVBQUtFLEtBQUssSUFBSWlCLEtBQUE7UUFFOUIsT0FBTztVQUFFbkIsR0FBQTtVQUFLQyxHQUFBO1VBQUtDO1FBQU07TUFDM0I7SUFDRixDQUFDLEVBQ0g7RUFDRjtBQUNGLENBQUM7QUN0SUQsSUFBT2tCLGFBQUEsR0FBUXhDLEtBQUE7OztBRkRmLElBQU9FLDZCQUFBLEdBQVFzQyxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=