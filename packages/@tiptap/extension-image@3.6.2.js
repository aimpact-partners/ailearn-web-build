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

// .beyond/uimport/@tiptap/extension-image.3.6.2.js
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

// .beyond/uimport/@tiptap/extension-image.3.6.2.js
var extension_image_3_6_2_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1pbWFnZS4zLjYuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1pbWFnZS9zcmMvaW1hZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taW1hZ2Uvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl9pbWFnZV8zXzZfMl9leHBvcnRzIiwiX19leHBvcnQiLCJJbWFnZSIsImRlZmF1bHQiLCJleHRlbnNpb25faW1hZ2VfM182XzJfZGVmYXVsdCIsImlucHV0UmVnZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiTm9kZSIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwiaW5saW5lIiwiYWxsb3dCYXNlNjQiLCJIVE1MQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJncm91cCIsImRyYWdnYWJsZSIsImFkZEF0dHJpYnV0ZXMiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFyc2VIVE1MIiwidGFnIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsImFkZENvbW1hbmRzIiwic2V0SW1hZ2UiLCJjb21tYW5kcyIsImluc2VydENvbnRlbnQiLCJ0eXBlIiwiYXR0cnMiLCJhZGRJbnB1dFJ1bGVzIiwibm9kZUlucHV0UnVsZSIsImZpbmQiLCJnZXRBdHRyaWJ1dGVzIiwibWF0Y2giLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw2QkFBQTtBQUFBQyxRQUFBLENBQUFELDZCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyw2QkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUiw2QkFBQTs7O0FDQUEsSUFBQVMsV0FBQSxHQUFxREMsT0FBQTtBQXFEOUMsSUFBTUwsVUFBQSxHQUFhO0FBTW5CLElBQU1ILEtBQUEsR0FBUU8sV0FBQSxDQUFBRSxJQUFBLENBQUtDLE1BQUEsQ0FBcUI7RUFDN0NDLElBQUEsRUFBTTtFQUVOQyxXQUFBLEVBQWE7SUFDWCxPQUFPO01BQ0xDLE1BQUEsRUFBUTtNQUNSQyxXQUFBLEVBQWE7TUFDYkMsY0FBQSxFQUFnQixDQUFDO0lBQ25CO0VBQ0Y7RUFFQUYsT0FBQSxFQUFTO0lBQ1AsT0FBTyxLQUFLRyxPQUFBLENBQVFILE1BQUE7RUFDdEI7RUFFQUksTUFBQSxFQUFRO0lBQ04sT0FBTyxLQUFLRCxPQUFBLENBQVFILE1BQUEsR0FBUyxXQUFXO0VBQzFDO0VBRUFLLFNBQUEsRUFBVztFQUVYQyxjQUFBLEVBQWdCO0lBQ2QsT0FBTztNQUNMQyxHQUFBLEVBQUs7UUFDSG5CLE9BQUEsRUFBUztNQUNYO01BQ0FvQixHQUFBLEVBQUs7UUFDSHBCLE9BQUEsRUFBUztNQUNYO01BQ0FxQixLQUFBLEVBQU87UUFDTHJCLE9BQUEsRUFBUztNQUNYO01BQ0FzQixLQUFBLEVBQU87UUFDTHRCLE9BQUEsRUFBUztNQUNYO01BQ0F1QixNQUFBLEVBQVE7UUFDTnZCLE9BQUEsRUFBUztNQUNYO0lBQ0Y7RUFDRjtFQUVBd0IsVUFBQSxFQUFZO0lBQ1YsT0FBTyxDQUNMO01BQ0VDLEdBQUEsRUFBSyxLQUFLVixPQUFBLENBQVFGLFdBQUEsR0FBYyxhQUFhO0lBQy9DLEVBQ0Y7RUFDRjtFQUVBYSxXQUFXO0lBQUVaO0VBQWUsR0FBRztJQUM3QixPQUFPLENBQUMsV0FBT1IsV0FBQSxDQUFBcUIsZUFBQSxFQUFnQixLQUFLWixPQUFBLENBQVFELGNBQUEsRUFBZ0JBLGNBQWMsQ0FBQztFQUM3RTtFQUVBYyxZQUFBLEVBQWM7SUFDWixPQUFPO01BQ0xDLFFBQUEsRUFDRWQsT0FBQSxJQUNBLENBQUM7UUFBRWU7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0MsYUFBQSxDQUFjO1VBQzVCQyxJQUFBLEVBQU0sS0FBS3RCLElBQUE7VUFDWHVCLEtBQUEsRUFBT2xCO1FBQ1QsQ0FBQztNQUNIO0lBQ0o7RUFDRjtFQUVBbUIsY0FBQSxFQUFnQjtJQUNkLE9BQU8sQyxJQUNMNUIsV0FBQSxDQUFBNkIsYUFBQSxFQUFjO01BQ1pDLElBQUEsRUFBTWxDLFVBQUE7TUFDTjhCLElBQUEsRUFBTSxLQUFLQSxJQUFBO01BQ1hLLGFBQUEsRUFBZUMsS0FBQSxJQUFTO1FBQ3RCLE1BQU0sSUFBS2xCLEdBQUEsRUFBS0QsR0FBQSxFQUFLRSxLQUFLLElBQUlpQixLQUFBO1FBRTlCLE9BQU87VUFBRW5CLEdBQUE7VUFBS0MsR0FBQTtVQUFLQztRQUFNO01BQzNCO0lBQ0YsQ0FBQyxFQUNIO0VBQ0Y7QUFDRixDQUFDO0FDdElELElBQU9rQixhQUFBLEdBQVF4QyxLQUFBOzs7QUZEZixJQUFPRSw2QkFBQSxHQUFRc0MsYUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9