System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["@tiptap/extension-code-block","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/keymap', dep), dep => dependencies.set('@tiptap/pm@3.2.0/transform', dep), dep => dependencies.set('@tiptap/pm@3.2.0/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/schema-list', dep), dep => dependencies.set('@tiptap/core@3.2.0', dep)],
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

// .beyond/uimport/temp/@tiptap/extension-code-block.3.2.0.js
var extension_code_block_3_2_0_exports = {};
__export(extension_code_block_3_2_0_exports, {
  CodeBlock: () => CodeBlock,
  backtickInputRegex: () => backtickInputRegex,
  default: () => extension_code_block_3_2_0_default,
  tildeInputRegex: () => tildeInputRegex
});
module.exports = __toCommonJS(extension_code_block_3_2_0_exports);

// node_modules/@tiptap/extension-code-block/dist/index.js
var import_core = require("@tiptap/core@3.2.0");
var import_state = require("@tiptap/pm@3.2.0/state");
var backtickInputRegex = /^```([a-z]+)?[\s\n]$/;
var tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/;
var CodeBlock = import_core.Node.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: true,
      exitOnArrowDown: true,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: element => {
          var _a;
          const {
            languageClassPrefix
          } = this.options;
          const classNames = [...(((_a = element.firstElementChild) == null ? void 0 : _a.classList) || [])];
          const languages = classNames.filter(className => className.startsWith(languageClassPrefix)).map(className => className.replace(languageClassPrefix, ""));
          const language = languages[0];
          if (!language) {
            return null;
          }
          return language;
        },
        rendered: false
      }
    };
  },
  parseHTML() {
    return [{
      tag: "pre",
      preserveWhitespace: "full"
    }];
  },
  renderHTML({
    node,
    HTMLAttributes
  }) {
    return ["pre", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), ["code", {
      class: node.attrs.language ? this.options.languageClassPrefix + node.attrs.language : null
    }, 0]];
  },
  addCommands() {
    return {
      setCodeBlock: attributes => ({
        commands
      }) => {
        return commands.setNode(this.name, attributes);
      },
      toggleCodeBlock: attributes => ({
        commands
      }) => {
        return commands.toggleNode(this.name, "paragraph", attributes);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      Backspace: () => {
        const {
          empty,
          $anchor
        } = this.editor.state.selection;
        const isAtStart = $anchor.pos === 1;
        if (!empty || $anchor.parent.type.name !== this.name) {
          return false;
        }
        if (isAtStart || !$anchor.parent.textContent.length) {
          return this.editor.commands.clearNodes();
        }
        return false;
      },
      Enter: ({
        editor
      }) => {
        if (!this.options.exitOnTripleEnter) {
          return false;
        }
        const {
          state
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");
        if (!isAtEnd || !endsWithDoubleNewline) {
          return false;
        }
        return editor.chain().command(({
          tr
        }) => {
          tr.delete($from.pos - 2, $from.pos);
          return true;
        }).exitCode().run();
      },
      ArrowDown: ({
        editor
      }) => {
        if (!this.options.exitOnArrowDown) {
          return false;
        }
        const {
          state
        } = editor;
        const {
          selection,
          doc
        } = state;
        const {
          $from,
          empty
        } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        if (!isAtEnd) {
          return false;
        }
        const after = $from.after();
        if (after === void 0) {
          return false;
        }
        const nodeAfter = doc.nodeAt(after);
        if (nodeAfter) {
          return editor.commands.command(({
            tr
          }) => {
            tr.setSelection(import_state.Selection.near(doc.resolve(after)));
            return true;
          });
        }
        return editor.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [(0, import_core.textblockTypeInputRule)({
      find: backtickInputRegex,
      type: this.type,
      getAttributes: match => ({
        language: match[1]
      })
    }), (0, import_core.textblockTypeInputRule)({
      find: tildeInputRegex,
      type: this.type,
      getAttributes: match => ({
        language: match[1]
      })
    })];
  },
  addProseMirrorPlugins() {
    return [new import_state.Plugin({
      key: new import_state.PluginKey("codeBlockVSCodeHandler"),
      props: {
        handlePaste: (view, event) => {
          if (!event.clipboardData) {
            return false;
          }
          if (this.editor.isActive(this.type.name)) {
            return false;
          }
          const text = event.clipboardData.getData("text/plain");
          const vscode = event.clipboardData.getData("vscode-editor-data");
          const vscodeData = vscode ? JSON.parse(vscode) : void 0;
          const language = vscodeData == null ? void 0 : vscodeData.mode;
          if (!text || !language) {
            return false;
          }
          const {
            tr,
            schema
          } = view.state;
          const textNode = schema.text(text.replace(/\r\n?/g, "\n"));
          tr.replaceSelectionWith(this.type.create({
            language
          }, textNode));
          if (tr.selection.$from.parent.type !== this.type) {
            tr.setSelection(import_state.TextSelection.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))));
          }
          tr.setMeta("paste", true);
          view.dispatch(tr);
          return true;
        }
      }
    })];
  }
});
var index_default = CodeBlock;

// .beyond/uimport/temp/@tiptap/extension-code-block.3.2.0.js
var extension_code_block_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWNvZGUtYmxvY2suMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tY29kZS1ibG9jay9zcmMvY29kZS1ibG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1jb2RlLWJsb2NrL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25fY29kZV9ibG9ja18zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJDb2RlQmxvY2siLCJiYWNrdGlja0lucHV0UmVnZXgiLCJkZWZhdWx0IiwiZXh0ZW5zaW9uX2NvZGVfYmxvY2tfM18yXzBfZGVmYXVsdCIsInRpbGRlSW5wdXRSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJpbXBvcnRfc3RhdGUiLCJOb2RlIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJsYW5ndWFnZUNsYXNzUHJlZml4IiwiZXhpdE9uVHJpcGxlRW50ZXIiLCJleGl0T25BcnJvd0Rvd24iLCJkZWZhdWx0TGFuZ3VhZ2UiLCJIVE1MQXR0cmlidXRlcyIsImNvbnRlbnQiLCJtYXJrcyIsImdyb3VwIiwiY29kZSIsImRlZmluaW5nIiwiYWRkQXR0cmlidXRlcyIsImxhbmd1YWdlIiwib3B0aW9ucyIsInBhcnNlSFRNTCIsImVsZW1lbnQiLCJfYSIsImNsYXNzTmFtZXMiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsYXNzTGlzdCIsImxhbmd1YWdlcyIsImZpbHRlciIsImNsYXNzTmFtZSIsInN0YXJ0c1dpdGgiLCJtYXAiLCJyZXBsYWNlIiwicmVuZGVyZWQiLCJ0YWciLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJyZW5kZXJIVE1MIiwibm9kZSIsIm1lcmdlQXR0cmlidXRlcyIsImNsYXNzIiwiYXR0cnMiLCJhZGRDb21tYW5kcyIsInNldENvZGVCbG9jayIsImF0dHJpYnV0ZXMiLCJjb21tYW5kcyIsInNldE5vZGUiLCJ0b2dnbGVDb2RlQmxvY2siLCJ0b2dnbGVOb2RlIiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJNb2QtQWx0LWMiLCJlZGl0b3IiLCJCYWNrc3BhY2UiLCJlbXB0eSIsIiRhbmNob3IiLCJzdGF0ZSIsInNlbGVjdGlvbiIsImlzQXRTdGFydCIsInBvcyIsInBhcmVudCIsInR5cGUiLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsImNsZWFyTm9kZXMiLCJFbnRlciIsIiRmcm9tIiwiaXNBdEVuZCIsInBhcmVudE9mZnNldCIsIm5vZGVTaXplIiwiZW5kc1dpdGhEb3VibGVOZXdsaW5lIiwiZW5kc1dpdGgiLCJjaGFpbiIsImNvbW1hbmQiLCJ0ciIsImRlbGV0ZSIsImV4aXRDb2RlIiwicnVuIiwiQXJyb3dEb3duIiwiZG9jIiwiYWZ0ZXIiLCJub2RlQWZ0ZXIiLCJub2RlQXQiLCJzZXRTZWxlY3Rpb24iLCJTZWxlY3Rpb24iLCJuZWFyIiwicmVzb2x2ZSIsImFkZElucHV0UnVsZXMiLCJ0ZXh0YmxvY2tUeXBlSW5wdXRSdWxlIiwiZmluZCIsImdldEF0dHJpYnV0ZXMiLCJtYXRjaCIsImFkZFByb3NlTWlycm9yUGx1Z2lucyIsIlBsdWdpbiIsImtleSIsIlBsdWdpbktleSIsInByb3BzIiwiaGFuZGxlUGFzdGUiLCJ2aWV3IiwiZXZlbnQiLCJjbGlwYm9hcmREYXRhIiwiaXNBY3RpdmUiLCJ0ZXh0IiwiZ2V0RGF0YSIsInZzY29kZSIsInZzY29kZURhdGEiLCJKU09OIiwicGFyc2UiLCJtb2RlIiwic2NoZW1hIiwidGV4dE5vZGUiLCJyZXBsYWNlU2VsZWN0aW9uV2l0aCIsIlRleHRTZWxlY3Rpb24iLCJNYXRoIiwibWF4IiwiZnJvbSIsInNldE1ldGEiLCJkaXNwYXRjaCIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtDQUFB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