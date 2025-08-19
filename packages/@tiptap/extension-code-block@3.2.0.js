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

// .beyond/uimport/@tiptap/extension-code-block.3.2.0.js
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

// .beyond/uimport/@tiptap/extension-code-block.3.2.0.js
var extension_code_block_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1jb2RlLWJsb2NrLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWNvZGUtYmxvY2svc3JjL2NvZGUtYmxvY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tY29kZS1ibG9jay9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2NvZGVfYmxvY2tfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ29kZUJsb2NrIiwiYmFja3RpY2tJbnB1dFJlZ2V4IiwiZGVmYXVsdCIsImV4dGVuc2lvbl9jb2RlX2Jsb2NrXzNfMl8wX2RlZmF1bHQiLCJ0aWxkZUlucHV0UmVnZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiaW1wb3J0X3N0YXRlIiwiTm9kZSIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwibGFuZ3VhZ2VDbGFzc1ByZWZpeCIsImV4aXRPblRyaXBsZUVudGVyIiwiZXhpdE9uQXJyb3dEb3duIiwiZGVmYXVsdExhbmd1YWdlIiwiSFRNTEF0dHJpYnV0ZXMiLCJjb250ZW50IiwibWFya3MiLCJncm91cCIsImNvZGUiLCJkZWZpbmluZyIsImFkZEF0dHJpYnV0ZXMiLCJsYW5ndWFnZSIsIm9wdGlvbnMiLCJwYXJzZUhUTUwiLCJlbGVtZW50IiwiX2EiLCJjbGFzc05hbWVzIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbGFzc0xpc3QiLCJsYW5ndWFnZXMiLCJmaWx0ZXIiLCJjbGFzc05hbWUiLCJzdGFydHNXaXRoIiwibWFwIiwicmVwbGFjZSIsInJlbmRlcmVkIiwidGFnIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwicmVuZGVySFRNTCIsIm5vZGUiLCJtZXJnZUF0dHJpYnV0ZXMiLCJjbGFzcyIsImF0dHJzIiwiYWRkQ29tbWFuZHMiLCJzZXRDb2RlQmxvY2siLCJhdHRyaWJ1dGVzIiwiY29tbWFuZHMiLCJzZXROb2RlIiwidG9nZ2xlQ29kZUJsb2NrIiwidG9nZ2xlTm9kZSIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiTW9kLUFsdC1jIiwiZWRpdG9yIiwiQmFja3NwYWNlIiwiZW1wdHkiLCIkYW5jaG9yIiwic3RhdGUiLCJzZWxlY3Rpb24iLCJpc0F0U3RhcnQiLCJwb3MiLCJwYXJlbnQiLCJ0eXBlIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJjbGVhck5vZGVzIiwiRW50ZXIiLCIkZnJvbSIsImlzQXRFbmQiLCJwYXJlbnRPZmZzZXQiLCJub2RlU2l6ZSIsImVuZHNXaXRoRG91YmxlTmV3bGluZSIsImVuZHNXaXRoIiwiY2hhaW4iLCJjb21tYW5kIiwidHIiLCJkZWxldGUiLCJleGl0Q29kZSIsInJ1biIsIkFycm93RG93biIsImRvYyIsImFmdGVyIiwibm9kZUFmdGVyIiwibm9kZUF0Iiwic2V0U2VsZWN0aW9uIiwiU2VsZWN0aW9uIiwibmVhciIsInJlc29sdmUiLCJhZGRJbnB1dFJ1bGVzIiwidGV4dGJsb2NrVHlwZUlucHV0UnVsZSIsImZpbmQiLCJnZXRBdHRyaWJ1dGVzIiwibWF0Y2giLCJhZGRQcm9zZU1pcnJvclBsdWdpbnMiLCJQbHVnaW4iLCJrZXkiLCJQbHVnaW5LZXkiLCJwcm9wcyIsImhhbmRsZVBhc3RlIiwidmlldyIsImV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsImlzQWN0aXZlIiwidGV4dCIsImdldERhdGEiLCJ2c2NvZGUiLCJ2c2NvZGVEYXRhIiwiSlNPTiIsInBhcnNlIiwibW9kZSIsInNjaGVtYSIsInRleHROb2RlIiwicmVwbGFjZVNlbGVjdGlvbldpdGgiLCJUZXh0U2VsZWN0aW9uIiwiTWF0aCIsIm1heCIsImZyb20iLCJzZXRNZXRhIiwiZGlzcGF0Y2giLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQ0FBQTtBQUFB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