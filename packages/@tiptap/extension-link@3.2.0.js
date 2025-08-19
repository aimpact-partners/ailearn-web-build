System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0","linkifyjs@4.3.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["linkifyjs","4.3.2"],["@tiptap/extension-link","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/keymap', dep), dep => dependencies.set('@tiptap/pm@3.2.0/transform', dep), dep => dependencies.set('@tiptap/pm@3.2.0/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/schema-list', dep), dep => dependencies.set('@tiptap/core@3.2.0', dep), dep => dependencies.set('linkifyjs@4.3.2', dep)],
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

// .beyond/uimport/@tiptap/extension-link.3.2.0.js
var extension_link_3_2_0_exports = {};
__export(extension_link_3_2_0_exports, {
  Link: () => Link,
  default: () => extension_link_3_2_0_default,
  isAllowedUri: () => isAllowedUri,
  pasteRegex: () => pasteRegex
});
module.exports = __toCommonJS(extension_link_3_2_0_exports);

// node_modules/@tiptap/extension-link/dist/index.js
var import_core = require("@tiptap/core@3.2.0");
var import_linkifyjs = require("linkifyjs@4.3.2");
var import_core2 = require("@tiptap/core@3.2.0");
var import_state = require("@tiptap/pm@3.2.0/state");
var import_linkifyjs2 = require("linkifyjs@4.3.2");
var import_core3 = require("@tiptap/core@3.2.0");
var import_state2 = require("@tiptap/pm@3.2.0/state");
var import_state3 = require("@tiptap/pm@3.2.0/state");
var import_linkifyjs3 = require("linkifyjs@4.3.2");
var UNICODE_WHITESPACE_PATTERN = "[\0- \xA0\u1680\u180E\u2000-\u2029\u205F\u3000]";
var UNICODE_WHITESPACE_REGEX = new RegExp(UNICODE_WHITESPACE_PATTERN);
var UNICODE_WHITESPACE_REGEX_END = new RegExp(`${UNICODE_WHITESPACE_PATTERN}$`);
var UNICODE_WHITESPACE_REGEX_GLOBAL = new RegExp(UNICODE_WHITESPACE_PATTERN, "g");
function isValidLinkStructure(tokens) {
  if (tokens.length === 1) {
    return tokens[0].isLink;
  }
  if (tokens.length === 3 && tokens[1].isLink) {
    return ["()", "[]"].includes(tokens[0].value + tokens[2].value);
  }
  return false;
}
function autolink(options) {
  return new import_state.Plugin({
    key: new import_state.PluginKey("autolink"),
    appendTransaction: (transactions, oldState, newState) => {
      const docChanges = transactions.some(transaction => transaction.docChanged) && !oldState.doc.eq(newState.doc);
      const preventAutolink = transactions.some(transaction => transaction.getMeta("preventAutolink"));
      if (!docChanges || preventAutolink) {
        return;
      }
      const {
        tr
      } = newState;
      const transform = (0, import_core2.combineTransactionSteps)(oldState.doc, [...transactions]);
      const changes = (0, import_core2.getChangedRanges)(transform);
      changes.forEach(({
        newRange
      }) => {
        const nodesInChangedRanges = (0, import_core2.findChildrenInRange)(newState.doc, newRange, node => node.isTextblock);
        let textBlock;
        let textBeforeWhitespace;
        if (nodesInChangedRanges.length > 1) {
          textBlock = nodesInChangedRanges[0];
          textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, textBlock.pos + textBlock.node.nodeSize, void 0, " ");
        } else if (nodesInChangedRanges.length) {
          const endText = newState.doc.textBetween(newRange.from, newRange.to, " ", " ");
          if (!UNICODE_WHITESPACE_REGEX_END.test(endText)) {
            return;
          }
          textBlock = nodesInChangedRanges[0];
          textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, newRange.to, void 0, " ");
        }
        if (textBlock && textBeforeWhitespace) {
          const wordsBeforeWhitespace = textBeforeWhitespace.split(UNICODE_WHITESPACE_REGEX).filter(Boolean);
          if (wordsBeforeWhitespace.length <= 0) {
            return false;
          }
          const lastWordBeforeSpace = wordsBeforeWhitespace[wordsBeforeWhitespace.length - 1];
          const lastWordAndBlockOffset = textBlock.pos + textBeforeWhitespace.lastIndexOf(lastWordBeforeSpace);
          if (!lastWordBeforeSpace) {
            return false;
          }
          const linksBeforeSpace = (0, import_linkifyjs2.tokenize)(lastWordBeforeSpace).map(t => t.toObject(options.defaultProtocol));
          if (!isValidLinkStructure(linksBeforeSpace)) {
            return false;
          }
          linksBeforeSpace.filter(link => link.isLink).map(link => ({
            ...link,
            from: lastWordAndBlockOffset + link.start + 1,
            to: lastWordAndBlockOffset + link.end + 1
          })).filter(link => {
            if (!newState.schema.marks.code) {
              return true;
            }
            return !newState.doc.rangeHasMark(link.from, link.to, newState.schema.marks.code);
          }).filter(link => options.validate(link.value)).filter(link => options.shouldAutoLink(link.value)).forEach(link => {
            if ((0, import_core2.getMarksBetween)(link.from, link.to, newState.doc).some(item => item.mark.type === options.type)) {
              return;
            }
            tr.addMark(link.from, link.to, options.type.create({
              href: link.href
            }));
          });
        }
      });
      if (!tr.steps.length) {
        return;
      }
      return tr;
    }
  });
}
function clickHandler(options) {
  return new import_state2.Plugin({
    key: new import_state2.PluginKey("handleClickLink"),
    props: {
      handleClick: (view, pos, event) => {
        var _a, _b;
        if (event.button !== 0) {
          return false;
        }
        if (!view.editable) {
          return false;
        }
        let link = null;
        if (event.target instanceof HTMLAnchorElement) {
          link = event.target;
        } else {
          let a = event.target;
          const els = [];
          while (a.nodeName !== "DIV") {
            els.push(a);
            a = a.parentNode;
          }
          link = els.find(value => value.nodeName === "A");
        }
        if (!link) {
          return false;
        }
        const attrs = (0, import_core3.getAttributes)(view.state, options.type.name);
        const href = (_a = link == null ? void 0 : link.href) != null ? _a : attrs.href;
        const target = (_b = link == null ? void 0 : link.target) != null ? _b : attrs.target;
        if (options.enableClickSelection) {
          options.editor.commands.extendMarkRange(options.type.name);
        }
        if (link && href) {
          window.open(href, target);
          return true;
        }
        return false;
      }
    }
  });
}
function pasteHandler(options) {
  return new import_state3.Plugin({
    key: new import_state3.PluginKey("handlePasteLink"),
    props: {
      handlePaste: (view, event, slice) => {
        const {
          state
        } = view;
        const {
          selection
        } = state;
        const {
          empty
        } = selection;
        if (empty) {
          return false;
        }
        let textContent = "";
        slice.content.forEach(node => {
          textContent += node.textContent;
        });
        const link = (0, import_linkifyjs3.find)(textContent, {
          defaultProtocol: options.defaultProtocol
        }).find(item => item.isLink && item.value === textContent);
        if (!textContent || !link) {
          return false;
        }
        return options.editor.commands.setMark(options.type, {
          href: link.href
        });
      }
    }
  });
}
var pasteRegex = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)/gi;
function isAllowedUri(uri, protocols) {
  const allowedProtocols = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  if (protocols) {
    protocols.forEach(protocol => {
      const nextProtocol = typeof protocol === "string" ? protocol : protocol.scheme;
      if (nextProtocol) {
        allowedProtocols.push(nextProtocol);
      }
    });
  }
  return !uri || uri.replace(UNICODE_WHITESPACE_REGEX_GLOBAL, "").match(new RegExp(`^(?:(?:${allowedProtocols.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"));
}
var Link = import_core.Mark.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: false,
  exitable: true,
  onCreate() {
    if (this.options.validate && !this.options.shouldAutoLink) {
      this.options.shouldAutoLink = this.options.validate;
      console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.");
    }
    this.options.protocols.forEach(protocol => {
      if (typeof protocol === "string") {
        (0, import_linkifyjs.registerCustomProtocol)(protocol);
        return;
      }
      (0, import_linkifyjs.registerCustomProtocol)(protocol.scheme, protocol.optionalSlashes);
    });
  },
  onDestroy() {
    (0, import_linkifyjs.reset)();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: true,
      enableClickSelection: false,
      linkOnPaste: true,
      autolink: true,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (url, ctx) => !!isAllowedUri(url, ctx.protocols),
      validate: url => !!url,
      shouldAutoLink: url => !!url
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(element) {
          return element.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [{
      tag: "a[href]",
      getAttrs: dom => {
        const href = dom.getAttribute("href");
        if (!href || !this.options.isAllowedUri(href, {
          defaultValidate: url => !!isAllowedUri(url, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return null;
      }
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    if (!this.options.isAllowedUri(HTMLAttributes.href, {
      defaultValidate: href => !!isAllowedUri(href, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    })) {
      return ["a", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, {
        ...HTMLAttributes,
        href: ""
      }), 0];
    }
    return ["a", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setLink: attributes => ({
        chain
      }) => {
        const {
          href
        } = attributes;
        if (!this.options.isAllowedUri(href, {
          defaultValidate: url => !!isAllowedUri(url, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return chain().setMark(this.name, attributes).setMeta("preventAutolink", true).run();
      },
      toggleLink: attributes => ({
        chain
      }) => {
        const {
          href
        } = attributes || {};
        if (href && !this.options.isAllowedUri(href, {
          defaultValidate: url => !!isAllowedUri(url, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return chain().toggleMark(this.name, attributes, {
          extendEmptyMarkRange: true
        }).setMeta("preventAutolink", true).run();
      },
      unsetLink: () => ({
        chain
      }) => {
        return chain().unsetMark(this.name, {
          extendEmptyMarkRange: true
        }).setMeta("preventAutolink", true).run();
      }
    };
  },
  addPasteRules() {
    return [(0, import_core.markPasteRule)({
      find: text => {
        const foundLinks = [];
        if (text) {
          const {
            protocols,
            defaultProtocol
          } = this.options;
          const links = (0, import_linkifyjs.find)(text).filter(item => item.isLink && this.options.isAllowedUri(item.value, {
            defaultValidate: href => !!isAllowedUri(href, protocols),
            protocols,
            defaultProtocol
          }));
          if (links.length) {
            links.forEach(link => foundLinks.push({
              text: link.value,
              data: {
                href: link.href
              },
              index: link.start
            }));
          }
        }
        return foundLinks;
      },
      type: this.type,
      getAttributes: match => {
        var _a;
        return {
          href: (_a = match.data) == null ? void 0 : _a.href
        };
      }
    })];
  },
  addProseMirrorPlugins() {
    const plugins = [];
    const {
      protocols,
      defaultProtocol
    } = this.options;
    if (this.options.autolink) {
      plugins.push(autolink({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: url => this.options.isAllowedUri(url, {
          defaultValidate: href => !!isAllowedUri(href, protocols),
          protocols,
          defaultProtocol
        }),
        shouldAutoLink: this.options.shouldAutoLink
      }));
    }
    if (this.options.openOnClick === true) {
      plugins.push(clickHandler({
        type: this.type,
        editor: this.editor,
        enableClickSelection: this.options.enableClickSelection
      }));
    }
    if (this.options.linkOnPaste) {
      plugins.push(pasteHandler({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type
      }));
    }
    return plugins;
  }
});
var index_default = Link;

// .beyond/uimport/@tiptap/extension-link.3.2.0.js
var extension_link_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1saW5rLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpbmsvc3JjL2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGluay9zcmMvaGVscGVycy9hdXRvbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saW5rL3NyYy9oZWxwZXJzL2NsaWNrSGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saW5rL3NyYy9oZWxwZXJzL3Bhc3RlSGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saW5rL3NyYy9oZWxwZXJzL3doaXRlc3BhY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGluay9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2xpbmtfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTGluayIsImRlZmF1bHQiLCJleHRlbnNpb25fbGlua18zXzJfMF9kZWZhdWx0IiwiaXNBbGxvd2VkVXJpIiwicGFzdGVSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJpbXBvcnRfbGlua2lmeWpzIiwiaW1wb3J0X2NvcmUyIiwiaW1wb3J0X3N0YXRlIiwiaW1wb3J0X2xpbmtpZnlqczIiLCJpbXBvcnRfY29yZTMiLCJpbXBvcnRfc3RhdGUyIiwiaW1wb3J0X3N0YXRlMyIsImltcG9ydF9saW5raWZ5anMzIiwiVU5JQ09ERV9XSElURVNQQUNFX1BBVFRFUk4iLCJVTklDT0RFX1dISVRFU1BBQ0VfUkVHRVgiLCJSZWdFeHAiLCJVTklDT0RFX1dISVRFU1BBQ0VfUkVHRVhfRU5EIiwiVU5JQ09ERV9XSElURVNQQUNFX1JFR0VYX0dMT0JBTCIsImlzVmFsaWRMaW5rU3RydWN0dXJlIiwidG9rZW5zIiwibGVuZ3RoIiwiaXNMaW5rIiwiaW5jbHVkZXMiLCJ2YWx1ZSIsImF1dG9saW5rIiwib3B0aW9ucyIsIlBsdWdpbiIsImtleSIsIlBsdWdpbktleSIsImFwcGVuZFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25zIiwib2xkU3RhdGUiLCJuZXdTdGF0ZSIsImRvY0NoYW5nZXMiLCJzb21lIiwidHJhbnNhY3Rpb24iLCJkb2NDaGFuZ2VkIiwiZG9jIiwiZXEiLCJwcmV2ZW50QXV0b2xpbmsiLCJnZXRNZXRhIiwidHIiLCJ0cmFuc2Zvcm0iLCJjb21iaW5lVHJhbnNhY3Rpb25TdGVwcyIsImNoYW5nZXMiLCJnZXRDaGFuZ2VkUmFuZ2VzIiwiZm9yRWFjaCIsIm5ld1JhbmdlIiwibm9kZXNJbkNoYW5nZWRSYW5nZXMiLCJmaW5kQ2hpbGRyZW5JblJhbmdlIiwibm9kZSIsImlzVGV4dGJsb2NrIiwidGV4dEJsb2NrIiwidGV4dEJlZm9yZVdoaXRlc3BhY2UiLCJ0ZXh0QmV0d2VlbiIsInBvcyIsIm5vZGVTaXplIiwiZW5kVGV4dCIsImZyb20iLCJ0byIsInRlc3QiLCJ3b3Jkc0JlZm9yZVdoaXRlc3BhY2UiLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJsYXN0V29yZEJlZm9yZVNwYWNlIiwibGFzdFdvcmRBbmRCbG9ja09mZnNldCIsImxhc3RJbmRleE9mIiwibGlua3NCZWZvcmVTcGFjZSIsInRva2VuaXplIiwibWFwIiwidCIsInRvT2JqZWN0IiwiZGVmYXVsdFByb3RvY29sIiwibGluayIsInN0YXJ0IiwiZW5kIiwic2NoZW1hIiwibWFya3MiLCJjb2RlIiwicmFuZ2VIYXNNYXJrIiwidmFsaWRhdGUiLCJzaG91bGRBdXRvTGluayIsImdldE1hcmtzQmV0d2VlbiIsIml0ZW0iLCJtYXJrIiwidHlwZSIsImFkZE1hcmsiLCJjcmVhdGUiLCJocmVmIiwic3RlcHMiLCJjbGlja0hhbmRsZXIiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwidmlldyIsImV2ZW50IiwiX2EiLCJfYiIsImJ1dHRvbiIsImVkaXRhYmxlIiwidGFyZ2V0IiwiSFRNTEFuY2hvckVsZW1lbnQiLCJhIiwiZWxzIiwibm9kZU5hbWUiLCJwdXNoIiwicGFyZW50Tm9kZSIsImZpbmQiLCJhdHRycyIsImdldEF0dHJpYnV0ZXMiLCJzdGF0ZSIsIm5hbWUiLCJlbmFibGVDbGlja1NlbGVjdGlvbiIsImVkaXRvciIsImNvbW1hbmRzIiwiZXh0ZW5kTWFya1JhbmdlIiwid2luZG93Iiwib3BlbiIsInBhc3RlSGFuZGxlciIsImhhbmRsZVBhc3RlIiwic2xpY2UiLCJzZWxlY3Rpb24iLCJlbXB0eSIsInRleHRDb250ZW50IiwiY29udGVudCIsInNldE1hcmsiLCJ1cmkiLCJwcm90b2NvbHMiLCJhbGxvd2VkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJuZXh0UHJvdG9jb2wiLCJzY2hlbWUiLCJyZXBsYWNlIiwibWF0Y2giLCJqb2luIiwiTWFyayIsInByaW9yaXR5Iiwia2VlcE9uU3BsaXQiLCJleGl0YWJsZSIsIm9uQ3JlYXRlIiwiY29uc29sZSIsIndhcm4iLCJyZWdpc3RlckN1c3RvbVByb3RvY29sIiwib3B0aW9uYWxTbGFzaGVzIiwib25EZXN0cm95IiwicmVzZXQiLCJpbmNsdXNpdmUiLCJhZGRPcHRpb25zIiwib3Blbk9uQ2xpY2siLCJsaW5rT25QYXN0ZSIsIkhUTUxBdHRyaWJ1dGVzIiwicmVsIiwiY2xhc3MiLCJ1cmwiLCJjdHgiLCJhZGRBdHRyaWJ1dGVzIiwicGFyc2VIVE1MIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInRhZyIsImdldEF0dHJzIiwiZG9tIiwiZGVmYXVsdFZhbGlkYXRlIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsImFkZENvbW1hbmRzIiwic2V0TGluayIsImF0dHJpYnV0ZXMiLCJjaGFpbiIsInNldE1ldGEiLCJydW4iLCJ0b2dnbGVMaW5rIiwidG9nZ2xlTWFyayIsImV4dGVuZEVtcHR5TWFya1JhbmdlIiwidW5zZXRMaW5rIiwidW5zZXRNYXJrIiwiYWRkUGFzdGVSdWxlcyIsIm1hcmtQYXN0ZVJ1bGUiLCJ0ZXh0IiwiZm91bmRMaW5rcyIsImxpbmtzIiwiZGF0YSIsImluZGV4IiwiYWRkUHJvc2VNaXJyb3JQbHVnaW5zIiwicGx1Z2lucyIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDRCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNEJBQUE7RUFBQUUsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLDRCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULDRCQUFBOzs7QUNDQSxJQUFBVSxXQUFBLEdBQXFEQyxPQUFBO0FBRXJELElBQUFDLGdCQUFBLEdBQW9ERCxPQUFBO0FDRnBELElBQUFFLFlBQUEsR0FBZ0dGLE9BQUE7QUFFaEcsSUFBQUcsWUFBQSxHQUFrQ0gsT0FBQTtBQUVsQyxJQUFBSSxpQkFBQSxHQUF5QkosT0FBQTtBQ0p6QixJQUFBSyxZQUFBLEdBQThCTCxPQUFBO0FBRTlCLElBQUFNLGFBQUEsR0FBa0NOLE9BQUE7QUNEbEMsSUFBQU8sYUFBQSxHQUFrQ1AsT0FBQTtBQUNsQyxJQUFBUSxpQkFBQSxHQUFxQlIsT0FBQTtBQ0RkLElBQU1TLDBCQUFBLEdBQTZCO0FBRW5DLElBQU1DLHdCQUFBLEdBQTJCLElBQUlDLE1BQUEsQ0FBT0YsMEJBQTBCO0FBQ3RFLElBQU1HLDRCQUFBLEdBQStCLElBQUlELE1BQUEsQ0FBTyxHQUFHRiwwQkFBQSxHQUE2QjtBQUNoRixJQUFNSSwrQkFBQSxHQUFrQyxJQUFJRixNQUFBLENBQU9GLDBCQUFBLEVBQTRCLEdBQUc7QUhhekYsU0FBU0sscUJBQXFCQyxNQUFBLEVBQW1EO0VBQy9F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LElBQUEsRUFBTXNDLFNBQVM7VUFDdkRBLFNBQUE7VUFDQXREO1FBQ0YsQ0FBQztRQUNIUyxjQUFBLEVBQWdCLEtBQUt6RCxPQUFBLENBQVF5RDtNQUMvQixDQUFDLENBQ0g7SUFDRjtJQUVBLElBQUksS0FBS3pELE9BQUEsQ0FBUTJILFdBQUEsS0FBZ0IsTUFBTTtNQUNyQ29DLE9BQUEsQ0FBUS9FLElBQUEsQ0FDTmQsWUFBQSxDQUFhO1FBQ1hMLElBQUEsRUFBTSxLQUFLQSxJQUFBO1FBQ1gyQixNQUFBLEVBQVEsS0FBS0EsTUFBQTtRQUNiRCxvQkFBQSxFQUFzQixLQUFLdkYsT0FBQSxDQUFRdUY7TUFDckMsQ0FBQyxDQUNIO0lBQ0Y7SUFFQSxJQUFJLEtBQUt2RixPQUFBLENBQVE0SCxXQUFBLEVBQWE7TUFDNUJtQyxPQUFBLENBQVEvRSxJQUFBLENBQ05hLFlBQUEsQ0FBYTtRQUNYTCxNQUFBLEVBQVEsS0FBS0EsTUFBQTtRQUNieEMsZUFBQSxFQUFpQixLQUFLaEQsT0FBQSxDQUFRZ0QsZUFBQTtRQUM5QmEsSUFBQSxFQUFNLEtBQUtBO01BQ2IsQ0FBQyxDQUNIO0lBQ0Y7SUFFQSxPQUFPa0csT0FBQTtFQUNUO0FBQ0YsQ0FBQztBS25iRCxJQUFPQyxhQUFBLEdBQVE5TCxJQUFBOzs7QU5EZixJQUFPRSw0QkFBQSxHQUFRNEwsYUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9