System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/keymap', dep), dep => dependencies.set('@tiptap/pm@3.2.0/transform', dep), dep => dependencies.set('@tiptap/pm@3.2.0/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/schema-list', dep)],
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

// .beyond/uimport/@tiptap/core.3.2.0.js
var core_3_2_0_exports = {};
__export(core_3_2_0_exports, {
  CommandManager: () => CommandManager,
  Editor: () => Editor,
  Extension: () => Extension,
  Fragment: () => Fragment6,
  InputRule: () => InputRule,
  Mark: () => Mark,
  MarkView: () => MarkView,
  Node: () => Node3,
  NodePos: () => NodePos,
  NodeView: () => NodeView,
  PasteRule: () => PasteRule,
  Tracker: () => Tracker,
  callOrReturn: () => callOrReturn,
  canInsertNode: () => canInsertNode,
  combineTransactionSteps: () => combineTransactionSteps,
  createChainableState: () => createChainableState,
  createDocument: () => createDocument,
  createElement: () => h,
  createNodeFromContent: () => createNodeFromContent,
  createStyleTag: () => createStyleTag,
  defaultBlockAt: () => defaultBlockAt,
  deleteProps: () => deleteProps,
  elementFromString: () => elementFromString,
  escapeForRegEx: () => escapeForRegEx,
  extensions: () => extensions_exports,
  findChildren: () => findChildren,
  findChildrenInRange: () => findChildrenInRange,
  findDuplicates: () => findDuplicates,
  findParentNode: () => findParentNode,
  findParentNodeClosestToPos: () => findParentNodeClosestToPos,
  flattenExtensions: () => flattenExtensions,
  fromString: () => fromString,
  generateHTML: () => generateHTML,
  generateJSON: () => generateJSON,
  generateText: () => generateText,
  getAttributes: () => getAttributes,
  getAttributesFromExtensions: () => getAttributesFromExtensions,
  getChangedRanges: () => getChangedRanges,
  getDebugJSON: () => getDebugJSON,
  getExtensionField: () => getExtensionField,
  getHTMLFromFragment: () => getHTMLFromFragment,
  getMarkAttributes: () => getMarkAttributes,
  getMarkRange: () => getMarkRange,
  getMarkType: () => getMarkType,
  getMarksBetween: () => getMarksBetween,
  getNodeAtPosition: () => getNodeAtPosition,
  getNodeAttributes: () => getNodeAttributes,
  getNodeType: () => getNodeType,
  getRenderedAttributes: () => getRenderedAttributes,
  getSchema: () => getSchema,
  getSchemaByResolvedExtensions: () => getSchemaByResolvedExtensions,
  getSchemaTypeByName: () => getSchemaTypeByName,
  getSchemaTypeNameByName: () => getSchemaTypeNameByName,
  getSplittedAttributes: () => getSplittedAttributes,
  getText: () => getText,
  getTextBetween: () => getTextBetween,
  getTextContentFromNodes: () => getTextContentFromNodes,
  getTextSerializersFromSchema: () => getTextSerializersFromSchema,
  h: () => h,
  injectExtensionAttributesToParseRule: () => injectExtensionAttributesToParseRule,
  inputRulesPlugin: () => inputRulesPlugin,
  isActive: () => isActive,
  isAndroid: () => isAndroid,
  isAtEndOfNode: () => isAtEndOfNode,
  isAtStartOfNode: () => isAtStartOfNode,
  isEmptyObject: () => isEmptyObject,
  isExtensionRulesEnabled: () => isExtensionRulesEnabled,
  isFunction: () => isFunction,
  isList: () => isList,
  isMacOS: () => isMacOS,
  isMarkActive: () => isMarkActive,
  isNodeActive: () => isNodeActive,
  isNodeEmpty: () => isNodeEmpty,
  isNodeSelection: () => isNodeSelection,
  isNumber: () => isNumber,
  isPlainObject: () => isPlainObject,
  isRegExp: () => isRegExp,
  isString: () => isString,
  isTextSelection: () => isTextSelection,
  isiOS: () => isiOS,
  markInputRule: () => markInputRule,
  markPasteRule: () => markPasteRule,
  mergeAttributes: () => mergeAttributes,
  mergeDeep: () => mergeDeep,
  minMax: () => minMax,
  nodeInputRule: () => nodeInputRule,
  nodePasteRule: () => nodePasteRule,
  objectIncludes: () => objectIncludes,
  pasteRulesPlugin: () => pasteRulesPlugin,
  posToDOMRect: () => posToDOMRect,
  removeDuplicates: () => removeDuplicates,
  resolveExtensions: () => resolveExtensions,
  resolveFocusPosition: () => resolveFocusPosition,
  rewriteUnknownContent: () => rewriteUnknownContent,
  selectionToInsertionEnd: () => selectionToInsertionEnd,
  sortExtensions: () => sortExtensions,
  splitExtensions: () => splitExtensions,
  textInputRule: () => textInputRule,
  textPasteRule: () => textPasteRule,
  textblockTypeInputRule: () => textblockTypeInputRule,
  updateMarkViewAttributes: () => updateMarkViewAttributes,
  wrappingInputRule: () => wrappingInputRule
});
module.exports = __toCommonJS(core_3_2_0_exports);

// node_modules/@tiptap/core/dist/index.js
var import_state = require("@tiptap/pm@3.2.0/state");
var import_view = require("@tiptap/pm@3.2.0/view");
var import_keymap = require("@tiptap/pm@3.2.0/keymap");
var import_transform = require("@tiptap/pm@3.2.0/transform");
var import_model = require("@tiptap/pm@3.2.0/model");
var import_model2 = require("@tiptap/pm@3.2.0/model");
var import_model3 = require("@tiptap/pm@3.2.0/model");
var import_model4 = require("@tiptap/pm@3.2.0/model");
var import_model5 = require("@tiptap/pm@3.2.0/model");
var import_model6 = require("@tiptap/pm@3.2.0/model");
var import_state2 = require("@tiptap/pm@3.2.0/state");
var import_state3 = require("@tiptap/pm@3.2.0/state");
var import_state4 = require("@tiptap/pm@3.2.0/state");
var import_state5 = require("@tiptap/pm@3.2.0/state");
var import_transform2 = require("@tiptap/pm@3.2.0/transform");
var import_model7 = require("@tiptap/pm@3.2.0/model");
var import_state6 = require("@tiptap/pm@3.2.0/state");
var import_model8 = require("@tiptap/pm@3.2.0/model");
var import_state7 = require("@tiptap/pm@3.2.0/state");
var import_state8 = require("@tiptap/pm@3.2.0/state");
var import_transform3 = require("@tiptap/pm@3.2.0/transform");
var import_commands = require("@tiptap/pm@3.2.0/commands");
var import_state9 = require("@tiptap/pm@3.2.0/state");
var import_commands2 = require("@tiptap/pm@3.2.0/commands");
var import_commands3 = require("@tiptap/pm@3.2.0/commands");
var import_state10 = require("@tiptap/pm@3.2.0/state");
var import_model9 = require("@tiptap/pm@3.2.0/model");
var import_commands4 = require("@tiptap/pm@3.2.0/commands");
var import_transform4 = require("@tiptap/pm@3.2.0/transform");
var import_transform5 = require("@tiptap/pm@3.2.0/transform");
var import_commands5 = require("@tiptap/pm@3.2.0/commands");
var import_commands6 = require("@tiptap/pm@3.2.0/commands");
var import_commands7 = require("@tiptap/pm@3.2.0/commands");
var import_commands8 = require("@tiptap/pm@3.2.0/commands");
var import_schema_list = require("@tiptap/pm@3.2.0/schema-list");
var import_commands9 = require("@tiptap/pm@3.2.0/commands");
var import_state11 = require("@tiptap/pm@3.2.0/state");
var import_commands10 = require("@tiptap/pm@3.2.0/commands");
var import_commands11 = require("@tiptap/pm@3.2.0/commands");
var import_commands12 = require("@tiptap/pm@3.2.0/commands");
var import_commands13 = require("@tiptap/pm@3.2.0/commands");
var import_commands14 = require("@tiptap/pm@3.2.0/commands");
var import_commands15 = require("@tiptap/pm@3.2.0/commands");
var import_state12 = require("@tiptap/pm@3.2.0/state");
var import_state13 = require("@tiptap/pm@3.2.0/state");
var import_schema_list2 = require("@tiptap/pm@3.2.0/schema-list");
var import_state14 = require("@tiptap/pm@3.2.0/state");
var import_transform6 = require("@tiptap/pm@3.2.0/transform");
var import_model10 = require("@tiptap/pm@3.2.0/model");
var import_state15 = require("@tiptap/pm@3.2.0/state");
var import_transform7 = require("@tiptap/pm@3.2.0/transform");
var import_transform8 = require("@tiptap/pm@3.2.0/transform");
var import_commands16 = require("@tiptap/pm@3.2.0/commands");
var import_schema_list3 = require("@tiptap/pm@3.2.0/schema-list");
var import_transform9 = require("@tiptap/pm@3.2.0/transform");
var import_state16 = require("@tiptap/pm@3.2.0/state");
var import_state17 = require("@tiptap/pm@3.2.0/state");
var import_state18 = require("@tiptap/pm@3.2.0/state");
var import_state19 = require("@tiptap/pm@3.2.0/state");
var import_state20 = require("@tiptap/pm@3.2.0/state");
var import_state21 = require("@tiptap/pm@3.2.0/state");
var import_transform10 = require("@tiptap/pm@3.2.0/transform");
var import_state22 = require("@tiptap/pm@3.2.0/state");
var import_state23 = require("@tiptap/pm@3.2.0/state");
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all) __defProp2(target, name, {
    get: all[name],
    enumerable: true
  });
};
function createChainableState(config) {
  const {
    state,
    transaction
  } = config;
  let {
    selection
  } = transaction;
  let {
    doc
  } = transaction;
  let {
    storedMarks
  } = transaction;
  return {
    ...state,
    apply: state.apply.bind(state),
    applyTransaction: state.applyTransaction.bind(state),
    plugins: state.plugins,
    schema: state.schema,
    reconfigure: state.reconfigure.bind(state),
    toJSON: state.toJSON.bind(state),
    get storedMarks() {
      return storedMarks;
    },
    get selection() {
      return selection;
    },
    get doc() {
      return doc;
    },
    get tr() {
      selection = transaction.selection;
      doc = transaction.doc;
      storedMarks = transaction.storedMarks;
      return transaction;
    }
  };
}
var CommandManager = class {
  constructor(props) {
    this.editor = props.editor;
    this.rawCommands = this.editor.extensionManager.commands;
    this.customState = props.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const {
      rawCommands,
      editor,
      state
    } = this;
    const {
      view
    } = editor;
    const {
      tr
    } = state;
    const props = this.buildProps(tr);
    return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      const method = (...args) => {
        const callback = command2(...args)(props);
        if (!tr.getMeta("preventDispatch") && !this.hasCustomState) {
          view.dispatch(tr);
        }
        return callback;
      };
      return [name, method];
    }));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(startTr, shouldDispatch = true) {
    const {
      rawCommands,
      editor,
      state
    } = this;
    const {
      view
    } = editor;
    const callbacks = [];
    const hasStartTransaction = !!startTr;
    const tr = startTr || state.tr;
    const run3 = () => {
      if (!hasStartTransaction && shouldDispatch && !tr.getMeta("preventDispatch") && !this.hasCustomState) {
        view.dispatch(tr);
      }
      return callbacks.every(callback => callback === true);
    };
    const chain = {
      ...Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
        const chainedCommand = (...args) => {
          const props = this.buildProps(tr, shouldDispatch);
          const callback = command2(...args)(props);
          callbacks.push(callback);
          return chain;
        };
        return [name, chainedCommand];
      })),
      run: run3
    };
    return chain;
  }
  createCan(startTr) {
    const {
      rawCommands,
      state
    } = this;
    const dispatch = false;
    const tr = startTr || state.tr;
    const props = this.buildProps(tr, dispatch);
    const formattedCommands = Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      return [name, (...args) => command2(...args)({
        ...props,
        dispatch: void 0
      })];
    }));
    return {
      ...formattedCommands,
      chain: () => this.createChain(tr, dispatch)
    };
  }
  buildProps(tr, shouldDispatch = true) {
    const {
      rawCommands,
      editor,
      state
    } = this;
    const {
      view
    } = editor;
    const props = {
      tr,
      editor,
      view,
      state: createChainableState({
        state,
        transaction: tr
      }),
      dispatch: shouldDispatch ? () => void 0 : void 0,
      chain: () => this.createChain(tr, shouldDispatch),
      can: () => this.createCan(tr),
      get commands() {
        return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
          return [name, (...args) => command2(...args)(props)];
        }));
      }
    };
    return props;
  }
};
var EventEmitter = class {
  constructor() {
    this.callbacks = {};
  }
  on(event, fn) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event].push(fn);
    return this;
  }
  emit(event, ...args) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      callbacks.forEach(callback => callback.apply(this, args));
    }
    return this;
  }
  off(event, fn) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      if (fn) {
        this.callbacks[event] = callbacks.filter(callback => callback !== fn);
      } else {
        delete this.callbacks[event];
      }
    }
    return this;
  }
  once(event, fn) {
    const onceFn = (...args) => {
      this.off(event, onceFn);
      fn.apply(this, args);
    };
    return this.on(event, onceFn);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
};
function combineTransactionSteps(oldDoc, transactions) {
  const transform = new import_transform.Transform(oldDoc);
  transactions.forEach(transaction => {
    transaction.steps.forEach(step => {
      transform.step(step);
    });
  });
  return transform;
}
var removeWhitespaces = node => {
  const children = node.childNodes;
  for (let i = children.length - 1; i >= 0; i -= 1) {
    const child = children[i];
    if (child.nodeType === 3 && child.nodeValue && /^(\n\s\s|\n)$/.test(child.nodeValue)) {
      node.removeChild(child);
    } else if (child.nodeType === 1) {
      removeWhitespaces(child);
    }
  }
  return node;
};
function elementFromString(value) {
  if (typeof window === "undefined") {
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  }
  const wrappedValue = `<body>${value}</body>`;
  const html = new window.DOMParser().parseFromString(wrappedValue, "text/html").body;
  return removeWhitespaces(html);
}
function createNodeFromContent(content, schema, options) {
  if (content instanceof import_model.Node || content instanceof import_model.Fragment) {
    return content;
  }
  options = {
    slice: true,
    parseOptions: {},
    ...options
  };
  const isJSONContent = typeof content === "object" && content !== null;
  const isTextContent = typeof content === "string";
  if (isJSONContent) {
    try {
      const isArrayContent = Array.isArray(content) && content.length > 0;
      if (isArrayContent) {
        return import_model.Fragment.fromArray(content.map(item => schema.nodeFromJSON(item)));
      }
      const node = schema.nodeFromJSON(content);
      if (options.errorOnInvalidContent) {
        node.check();
      }
      return node;
    } catch (error) {
      if (options.errorOnInvalidContent) {
        throw new Error("[tiptap error]: Invalid JSON content", {
          cause: error
        });
      }
      console.warn("[tiptap warn]: Invalid content.", "Passed value:", content, "Error:", error);
      return createNodeFromContent("", schema, options);
    }
  }
  if (isTextContent) {
    if (options.errorOnInvalidContent) {
      let hasInvalidContent = false;
      let invalidContent = "";
      const contentCheckSchema = new import_model.Schema({
        topNode: schema.spec.topNode,
        marks: schema.spec.marks,
        nodes: schema.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [{
              tag: "*",
              getAttrs: e => {
                hasInvalidContent = true;
                invalidContent = typeof e === "string" ? e : e.outerHTML;
                return null;
              }
            }]
          }
        })
      });
      if (options.slice) {
        import_model.DOMParser.fromSchema(contentCheckSchema).parseSlice(elementFromString(content), options.parseOptions);
      } else {
        import_model.DOMParser.fromSchema(contentCheckSchema).parse(elementFromString(content), options.parseOptions);
      }
      if (options.errorOnInvalidContent && hasInvalidContent) {
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${invalidContent}`)
        });
      }
    }
    const parser = import_model.DOMParser.fromSchema(schema);
    if (options.slice) {
      return parser.parseSlice(elementFromString(content), options.parseOptions).content;
    }
    return parser.parse(elementFromString(content), options.parseOptions);
  }
  return createNodeFromContent("", schema, options);
}
function createDocument(content, schema, parseOptions = {}, options = {}) {
  return createNodeFromContent(content, schema, {
    slice: false,
    parseOptions,
    errorOnInvalidContent: options.errorOnInvalidContent
  });
}
function defaultBlockAt(match) {
  for (let i = 0; i < match.edgeCount; i += 1) {
    const {
      type
    } = match.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }
  return null;
}
function findChildren(node, predicate) {
  const nodesWithPos = [];
  node.descendants((child, pos) => {
    if (predicate(child)) {
      nodesWithPos.push({
        node: child,
        pos
      });
    }
  });
  return nodesWithPos;
}
function findChildrenInRange(node, range, predicate) {
  const nodesWithPos = [];
  node.nodesBetween(range.from, range.to, (child, pos) => {
    if (predicate(child)) {
      nodesWithPos.push({
        node: child,
        pos
      });
    }
  });
  return nodesWithPos;
}
function findParentNodeClosestToPos($pos, predicate) {
  for (let i = $pos.depth; i > 0; i -= 1) {
    const node = $pos.node(i);
    if (predicate(node)) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node
      };
    }
  }
}
function findParentNode(predicate) {
  return selection => findParentNodeClosestToPos(selection.$from, predicate);
}
function getExtensionField(extension, field, context) {
  if (extension.config[field] === void 0 && extension.parent) {
    return getExtensionField(extension.parent, field, context);
  }
  if (typeof extension.config[field] === "function") {
    const value = extension.config[field].bind({
      ...context,
      parent: extension.parent ? getExtensionField(extension.parent, field, context) : null
    });
    return value;
  }
  return extension.config[field];
}
function flattenExtensions(extensions) {
  return extensions.map(extension => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const addExtensions = getExtensionField(extension, "addExtensions", context);
    if (addExtensions) {
      return [extension, ...flattenExtensions(addExtensions())];
    }
    return extension;
  }).flat(10);
}
function getHTMLFromFragment(fragment, schema) {
  const documentFragment = import_model3.DOMSerializer.fromSchema(schema).serializeFragment(fragment);
  const temporaryDocument = document.implementation.createHTMLDocument();
  const container = temporaryDocument.createElement("div");
  container.appendChild(documentFragment);
  return container.innerHTML;
}
function isFunction(value) {
  return typeof value === "function";
}
function callOrReturn(value, context = void 0, ...props) {
  if (isFunction(value)) {
    if (context) {
      return value.bind(context)(...props);
    }
    return value(...props);
  }
  return value;
}
function isEmptyObject(value = {}) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}
function splitExtensions(extensions) {
  const baseExtensions = extensions.filter(extension => extension.type === "extension");
  const nodeExtensions = extensions.filter(extension => extension.type === "node");
  const markExtensions = extensions.filter(extension => extension.type === "mark");
  return {
    baseExtensions,
    nodeExtensions,
    markExtensions
  };
}
function getAttributesFromExtensions(extensions) {
  const extensionAttributes = [];
  const {
    nodeExtensions,
    markExtensions
  } = splitExtensions(extensions);
  const nodeAndMarkExtensions = [...nodeExtensions, ...markExtensions];
  const defaultAttribute = {
    default: null,
    validate: void 0,
    rendered: true,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: true,
    isRequired: false
  };
  extensions.forEach(extension => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
      extensions: nodeAndMarkExtensions
    };
    const addGlobalAttributes = getExtensionField(extension, "addGlobalAttributes", context);
    if (!addGlobalAttributes) {
      return;
    }
    const globalAttributes = addGlobalAttributes();
    globalAttributes.forEach(globalAttribute => {
      globalAttribute.types.forEach(type => {
        Object.entries(globalAttribute.attributes).forEach(([name, attribute]) => {
          extensionAttributes.push({
            type,
            name,
            attribute: {
              ...defaultAttribute,
              ...attribute
            }
          });
        });
      });
    });
  });
  nodeAndMarkExtensions.forEach(extension => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const addAttributes = getExtensionField(extension, "addAttributes", context);
    if (!addAttributes) {
      return;
    }
    const attributes = addAttributes();
    Object.entries(attributes).forEach(([name, attribute]) => {
      const mergedAttr = {
        ...defaultAttribute,
        ...attribute
      };
      if (typeof (mergedAttr == null ? void 0 : mergedAttr.default) === "function") {
        mergedAttr.default = mergedAttr.default();
      }
      if ((mergedAttr == null ? void 0 : mergedAttr.isRequired) && (mergedAttr == null ? void 0 : mergedAttr.default) === void 0) {
        delete mergedAttr.default;
      }
      extensionAttributes.push({
        type: extension.name,
        name,
        attribute: mergedAttr
      });
    });
  });
  return extensionAttributes;
}
function mergeAttributes(...objects) {
  return objects.filter(item => !!item).reduce((items, item) => {
    const mergedAttributes = {
      ...items
    };
    Object.entries(item).forEach(([key, value]) => {
      const exists = mergedAttributes[key];
      if (!exists) {
        mergedAttributes[key] = value;
        return;
      }
      if (key === "class") {
        const valueClasses = value ? String(value).split(" ") : [];
        const existingClasses = mergedAttributes[key] ? mergedAttributes[key].split(" ") : [];
        const insertClasses = valueClasses.filter(valueClass => !existingClasses.includes(valueClass));
        mergedAttributes[key] = [...existingClasses, ...insertClasses].join(" ");
      } else if (key === "style") {
        const newStyles = value ? value.split(";").map(style2 => style2.trim()).filter(Boolean) : [];
        const existingStyles = mergedAttributes[key] ? mergedAttributes[key].split(";").map(style2 => style2.trim()).filter(Boolean) : [];
        const styleMap = /* @__PURE__ */new Map();
        existingStyles.forEach(style2 => {
          const [property, val] = style2.split(":").map(part => part.trim());
          styleMap.set(property, val);
        });
        newStyles.forEach(style2 => {
          const [property, val] = style2.split(":").map(part => part.trim());
          styleMap.set(property, val);
        });
        mergedAttributes[key] = Array.from(styleMap.entries()).map(([property, val]) => `${property}: ${val}`).join("; ");
      } else {
        mergedAttributes[key] = value;
      }
    });
    return mergedAttributes;
  }, {});
}
function getRenderedAttributes(nodeOrMark, extensionAttributes) {
  return extensionAttributes.filter(attribute => attribute.type === nodeOrMark.type.name).filter(item => item.attribute.rendered).map(item => {
    if (!item.attribute.renderHTML) {
      return {
        [item.name]: nodeOrMark.attrs[item.name]
      };
    }
    return item.attribute.renderHTML(nodeOrMark.attrs) || {};
  }).reduce((attributes, attribute) => mergeAttributes(attributes, attribute), {});
}
function fromString(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (value.match(/^[+-]?(?:\d*\.)?\d+$/)) {
    return Number(value);
  }
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  return value;
}
function injectExtensionAttributesToParseRule(parseRule, extensionAttributes) {
  if ("style" in parseRule) {
    return parseRule;
  }
  return {
    ...parseRule,
    getAttrs: node => {
      const oldAttributes = parseRule.getAttrs ? parseRule.getAttrs(node) : parseRule.attrs;
      if (oldAttributes === false) {
        return false;
      }
      const newAttributes = extensionAttributes.reduce((items, item) => {
        const value = item.attribute.parseHTML ? item.attribute.parseHTML(node) : fromString(node.getAttribute(item.name));
        if (value === null || value === void 0) {
          return items;
        }
        return {
          ...items,
          [item.name]: value
        };
      }, {});
      return {
        ...oldAttributes,
        ...newAttributes
      };
    }
  };
}
function cleanUpSchemaItem(data) {
  return Object.fromEntries(Object.entries(data).filter(([key, value]) => {
    if (key === "attrs" && isEmptyObject(value)) {
      return false;
    }
    return value !== null && value !== void 0;
  }));
}
function getSchemaByResolvedExtensions(extensions, editor) {
  var _a;
  const allAttributes = getAttributesFromExtensions(extensions);
  const {
    nodeExtensions,
    markExtensions
  } = splitExtensions(extensions);
  const topNode = (_a = nodeExtensions.find(extension => getExtensionField(extension, "topNode"))) == null ? void 0 : _a.name;
  const nodes = Object.fromEntries(nodeExtensions.map(extension => {
    const extensionAttributes = allAttributes.filter(attribute => attribute.type === extension.name);
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
      editor
    };
    const extraNodeFields = extensions.reduce((fields, e) => {
      const extendNodeSchema = getExtensionField(e, "extendNodeSchema", context);
      return {
        ...fields,
        ...(extendNodeSchema ? extendNodeSchema(extension) : {})
      };
    }, {});
    const schema = cleanUpSchemaItem({
      ...extraNodeFields,
      content: callOrReturn(getExtensionField(extension, "content", context)),
      marks: callOrReturn(getExtensionField(extension, "marks", context)),
      group: callOrReturn(getExtensionField(extension, "group", context)),
      inline: callOrReturn(getExtensionField(extension, "inline", context)),
      atom: callOrReturn(getExtensionField(extension, "atom", context)),
      selectable: callOrReturn(getExtensionField(extension, "selectable", context)),
      draggable: callOrReturn(getExtensionField(extension, "draggable", context)),
      code: callOrReturn(getExtensionField(extension, "code", context)),
      whitespace: callOrReturn(getExtensionField(extension, "whitespace", context)),
      linebreakReplacement: callOrReturn(getExtensionField(extension, "linebreakReplacement", context)),
      defining: callOrReturn(getExtensionField(extension, "defining", context)),
      isolating: callOrReturn(getExtensionField(extension, "isolating", context)),
      attrs: Object.fromEntries(extensionAttributes.map(extensionAttribute => {
        var _a2, _b;
        return [extensionAttribute.name, {
          default: (_a2 = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _a2.default,
          validate: (_b = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _b.validate
        }];
      }))
    });
    const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
    if (parseHTML) {
      schema.parseDOM = parseHTML.map(parseRule => injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
    }
    const renderHTML = getExtensionField(extension, "renderHTML", context);
    if (renderHTML) {
      schema.toDOM = node => renderHTML({
        node,
        HTMLAttributes: getRenderedAttributes(node, extensionAttributes)
      });
    }
    const renderText = getExtensionField(extension, "renderText", context);
    if (renderText) {
      schema.toText = renderText;
    }
    return [extension.name, schema];
  }));
  const marks = Object.fromEntries(markExtensions.map(extension => {
    const extensionAttributes = allAttributes.filter(attribute => attribute.type === extension.name);
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
      editor
    };
    const extraMarkFields = extensions.reduce((fields, e) => {
      const extendMarkSchema = getExtensionField(e, "extendMarkSchema", context);
      return {
        ...fields,
        ...(extendMarkSchema ? extendMarkSchema(extension) : {})
      };
    }, {});
    const schema = cleanUpSchemaItem({
      ...extraMarkFields,
      inclusive: callOrReturn(getExtensionField(extension, "inclusive", context)),
      excludes: callOrReturn(getExtensionField(extension, "excludes", context)),
      group: callOrReturn(getExtensionField(extension, "group", context)),
      spanning: callOrReturn(getExtensionField(extension, "spanning", context)),
      code: callOrReturn(getExtensionField(extension, "code", context)),
      attrs: Object.fromEntries(extensionAttributes.map(extensionAttribute => {
        var _a2, _b;
        return [extensionAttribute.name, {
          default: (_a2 = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _a2.default,
          validate: (_b = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _b.validate
        }];
      }))
    });
    const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
    if (parseHTML) {
      schema.parseDOM = parseHTML.map(parseRule => injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
    }
    const renderHTML = getExtensionField(extension, "renderHTML", context);
    if (renderHTML) {
      schema.toDOM = mark => renderHTML({
        mark,
        HTMLAttributes: getRenderedAttributes(mark, extensionAttributes)
      });
    }
    return [extension.name, schema];
  }));
  return new import_model4.Schema({
    topNode,
    nodes,
    marks
  });
}
function findDuplicates(items) {
  const filtered = items.filter((el, index) => items.indexOf(el) !== index);
  return Array.from(new Set(filtered));
}
function sortExtensions(extensions) {
  const defaultPriority = 100;
  return extensions.sort((a, b) => {
    const priorityA = getExtensionField(a, "priority") || defaultPriority;
    const priorityB = getExtensionField(b, "priority") || defaultPriority;
    if (priorityA > priorityB) {
      return -1;
    }
    if (priorityA < priorityB) {
      return 1;
    }
    return 0;
  });
}
function resolveExtensions(extensions) {
  const resolvedExtensions = sortExtensions(flattenExtensions(extensions));
  const duplicatedNames = findDuplicates(resolvedExtensions.map(extension => extension.name));
  if (duplicatedNames.length) {
    console.warn(`[tiptap warn]: Duplicate extension names found: [${duplicatedNames.map(item => `'${item}'`).join(", ")}]. This can lead to issues.`);
  }
  return resolvedExtensions;
}
function getSchema(extensions, editor) {
  const resolvedExtensions = resolveExtensions(extensions);
  return getSchemaByResolvedExtensions(resolvedExtensions, editor);
}
function generateHTML(doc, extensions) {
  const schema = getSchema(extensions);
  const contentNode = import_model2.Node.fromJSON(schema, doc);
  return getHTMLFromFragment(contentNode.content, schema);
}
function generateJSON(html, extensions) {
  const schema = getSchema(extensions);
  const dom = elementFromString(html);
  return import_model5.DOMParser.fromSchema(schema).parse(dom).toJSON();
}
function getTextBetween(startNode, range, options) {
  const {
    from,
    to
  } = range;
  const {
    blockSeparator = "\n\n",
    textSerializers = {}
  } = options || {};
  let text = "";
  startNode.nodesBetween(from, to, (node, pos, parent, index) => {
    var _a;
    if (node.isBlock && pos > from) {
      text += blockSeparator;
    }
    const textSerializer = textSerializers == null ? void 0 : textSerializers[node.type.name];
    if (textSerializer) {
      if (parent) {
        text += textSerializer({
          node,
          pos,
          parent,
          index,
          range
        });
      }
      return false;
    }
    if (node.isText) {
      text += (_a = node == null ? void 0 : node.text) == null ? void 0 : _a.slice(Math.max(from, pos) - pos, to - pos);
    }
  });
  return text;
}
function getText(node, options) {
  const range = {
    from: 0,
    to: node.content.size
  };
  return getTextBetween(node, range, options);
}
function getTextSerializersFromSchema(schema) {
  return Object.fromEntries(Object.entries(schema.nodes).filter(([, node]) => node.spec.toText).map(([name, node]) => [name, node.spec.toText]));
}
function generateText(doc, extensions, options) {
  const {
    blockSeparator = "\n\n",
    textSerializers = {}
  } = options || {};
  const schema = getSchema(extensions);
  const contentNode = import_model6.Node.fromJSON(schema, doc);
  return getText(contentNode, {
    blockSeparator,
    textSerializers: {
      ...getTextSerializersFromSchema(schema),
      ...textSerializers
    }
  });
}
function getMarkType(nameOrType, schema) {
  if (typeof nameOrType === "string") {
    if (!schema.marks[nameOrType]) {
      throw Error(`There is no mark type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema.marks[nameOrType];
  }
  return nameOrType;
}
function getMarkAttributes(state, typeOrName) {
  const type = getMarkType(typeOrName, state.schema);
  const {
    from,
    to,
    empty
  } = state.selection;
  const marks = [];
  if (empty) {
    if (state.storedMarks) {
      marks.push(...state.storedMarks);
    }
    marks.push(...state.selection.$head.marks());
  } else {
    state.doc.nodesBetween(from, to, node => {
      marks.push(...node.marks);
    });
  }
  const mark = marks.find(markItem => markItem.type.name === type.name);
  if (!mark) {
    return {};
  }
  return {
    ...mark.attrs
  };
}
function getNodeType(nameOrType, schema) {
  if (typeof nameOrType === "string") {
    if (!schema.nodes[nameOrType]) {
      throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema.nodes[nameOrType];
  }
  return nameOrType;
}
function getNodeAttributes(state, typeOrName) {
  const type = getNodeType(typeOrName, state.schema);
  const {
    from,
    to
  } = state.selection;
  const nodes = [];
  state.doc.nodesBetween(from, to, node2 => {
    nodes.push(node2);
  });
  const node = nodes.reverse().find(nodeItem => nodeItem.type.name === type.name);
  if (!node) {
    return {};
  }
  return {
    ...node.attrs
  };
}
function getSchemaTypeNameByName(name, schema) {
  if (schema.nodes[name]) {
    return "node";
  }
  if (schema.marks[name]) {
    return "mark";
  }
  return null;
}
function getAttributes(state, typeOrName) {
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (schemaType === "node") {
    return getNodeAttributes(state, typeOrName);
  }
  if (schemaType === "mark") {
    return getMarkAttributes(state, typeOrName);
  }
  return {};
}
function removeDuplicates(array, by = JSON.stringify) {
  const seen = {};
  return array.filter(item => {
    const key = by(item);
    return Object.prototype.hasOwnProperty.call(seen, key) ? false : seen[key] = true;
  });
}
function simplifyChangedRanges(changes) {
  const uniqueChanges = removeDuplicates(changes);
  return uniqueChanges.length === 1 ? uniqueChanges : uniqueChanges.filter((change, index) => {
    const rest = uniqueChanges.filter((_, i) => i !== index);
    return !rest.some(otherChange => {
      return change.oldRange.from >= otherChange.oldRange.from && change.oldRange.to <= otherChange.oldRange.to && change.newRange.from >= otherChange.newRange.from && change.newRange.to <= otherChange.newRange.to;
    });
  });
}
function getChangedRanges(transform) {
  const {
    mapping,
    steps
  } = transform;
  const changes = [];
  mapping.maps.forEach((stepMap, index) => {
    const ranges = [];
    if (!stepMap.ranges.length) {
      const {
        from,
        to
      } = steps[index];
      if (from === void 0 || to === void 0) {
        return;
      }
      ranges.push({
        from,
        to
      });
    } else {
      stepMap.forEach((from, to) => {
        ranges.push({
          from,
          to
        });
      });
    }
    ranges.forEach(({
      from,
      to
    }) => {
      const newStart = mapping.slice(index).map(from, -1);
      const newEnd = mapping.slice(index).map(to);
      const oldStart = mapping.invert().map(newStart, -1);
      const oldEnd = mapping.invert().map(newEnd);
      changes.push({
        oldRange: {
          from: oldStart,
          to: oldEnd
        },
        newRange: {
          from: newStart,
          to: newEnd
        }
      });
    });
  });
  return simplifyChangedRanges(changes);
}
function getDebugJSON(node, startOffset = 0) {
  const isTopNode = node.type === node.type.schema.topNodeType;
  const increment = isTopNode ? 0 : 1;
  const from = startOffset;
  const to = from + node.nodeSize;
  const marks = node.marks.map(mark => {
    const output2 = {
      type: mark.type.name
    };
    if (Object.keys(mark.attrs).length) {
      output2.attrs = {
        ...mark.attrs
      };
    }
    return output2;
  });
  const attrs = {
    ...node.attrs
  };
  const output = {
    type: node.type.name,
    from,
    to
  };
  if (Object.keys(attrs).length) {
    output.attrs = attrs;
  }
  if (marks.length) {
    output.marks = marks;
  }
  if (node.content.childCount) {
    output.content = [];
    node.forEach((child, offset) => {
      var _a;
      (_a = output.content) == null ? void 0 : _a.push(getDebugJSON(child, startOffset + offset + increment));
    });
  }
  if (node.text) {
    output.text = node.text;
  }
  return output;
}
function isRegExp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}
function objectIncludes(object1, object2, options = {
  strict: true
}) {
  const keys = Object.keys(object2);
  if (!keys.length) {
    return true;
  }
  return keys.every(key => {
    if (options.strict) {
      return object2[key] === object1[key];
    }
    if (isRegExp(object2[key])) {
      return object2[key].test(object1[key]);
    }
    return object2[key] === object1[key];
  });
}
function findMarkInSet(marks, type, attributes = {}) {
  return marks.find(item => {
    return item.type === type && objectIncludes(Object.fromEntries(Object.keys(attributes).map(k => [k, item.attrs[k]])), attributes);
  });
}
function isMarkInSet(marks, type, attributes = {}) {
  return !!findMarkInSet(marks, type, attributes);
}
function getMarkRange($pos, type, attributes) {
  var _a;
  if (!$pos || !type) {
    return;
  }
  let start = $pos.parent.childAfter($pos.parentOffset);
  if (!start.node || !start.node.marks.some(mark2 => mark2.type === type)) {
    start = $pos.parent.childBefore($pos.parentOffset);
  }
  if (!start.node || !start.node.marks.some(mark2 => mark2.type === type)) {
    return;
  }
  attributes = attributes || ((_a = start.node.marks[0]) == null ? void 0 : _a.attrs);
  const mark = findMarkInSet([...start.node.marks], type, attributes);
  if (!mark) {
    return;
  }
  let startIndex = start.index;
  let startPos = $pos.start() + start.offset;
  let endIndex = startIndex + 1;
  let endPos = startPos + start.node.nodeSize;
  while (startIndex > 0 && isMarkInSet([...$pos.parent.child(startIndex - 1).marks], type, attributes)) {
    startIndex -= 1;
    startPos -= $pos.parent.child(startIndex).nodeSize;
  }
  while (endIndex < $pos.parent.childCount && isMarkInSet([...$pos.parent.child(endIndex).marks], type, attributes)) {
    endPos += $pos.parent.child(endIndex).nodeSize;
    endIndex += 1;
  }
  return {
    from: startPos,
    to: endPos
  };
}
function getMarksBetween(from, to, doc) {
  const marks = [];
  if (from === to) {
    doc.resolve(from).marks().forEach(mark => {
      const $pos = doc.resolve(from);
      const range = getMarkRange($pos, mark.type);
      if (!range) {
        return;
      }
      marks.push({
        mark,
        ...range
      });
    });
  } else {
    doc.nodesBetween(from, to, (node, pos) => {
      if (!node || (node == null ? void 0 : node.nodeSize) === void 0) {
        return;
      }
      marks.push(...node.marks.map(mark => ({
        from: pos,
        to: pos + node.nodeSize,
        mark
      })));
    });
  }
  return marks;
}
var getNodeAtPosition = (state, typeOrName, pos, maxDepth = 20) => {
  const $pos = state.doc.resolve(pos);
  let currentDepth = maxDepth;
  let node = null;
  while (currentDepth > 0 && node === null) {
    const currentNode = $pos.node(currentDepth);
    if ((currentNode == null ? void 0 : currentNode.type.name) === typeOrName) {
      node = currentNode;
    } else {
      currentDepth -= 1;
    }
  }
  return [node, currentDepth];
};
function getSchemaTypeByName(name, schema) {
  return schema.nodes[name] || schema.marks[name] || null;
}
function getSplittedAttributes(extensionAttributes, typeName, attributes) {
  return Object.fromEntries(Object.entries(attributes).filter(([name]) => {
    const extensionAttribute = extensionAttributes.find(item => {
      return item.type === typeName && item.name === name;
    });
    if (!extensionAttribute) {
      return false;
    }
    return extensionAttribute.attribute.keepOnSplit;
  }));
}
var getTextContentFromNodes = ($from, maxMatch = 500) => {
  let textBefore = "";
  const sliceEndPos = $from.parentOffset;
  $from.parent.nodesBetween(Math.max(0, sliceEndPos - maxMatch), sliceEndPos, (node, pos, parent, index) => {
    var _a, _b;
    const chunk = ((_b = (_a = node.type.spec).toText) == null ? void 0 : _b.call(_a, {
      node,
      pos,
      parent,
      index
    })) || node.textContent || "%leaf%";
    textBefore += node.isAtom && !node.isText ? chunk : chunk.slice(0, Math.max(0, sliceEndPos - pos));
  });
  return textBefore;
};
function isMarkActive(state, typeOrName, attributes = {}) {
  const {
    empty,
    ranges
  } = state.selection;
  const type = typeOrName ? getMarkType(typeOrName, state.schema) : null;
  if (empty) {
    return !!(state.storedMarks || state.selection.$from.marks()).filter(mark => {
      if (!type) {
        return true;
      }
      return type.name === mark.type.name;
    }).find(mark => objectIncludes(mark.attrs, attributes, {
      strict: false
    }));
  }
  let selectionRange = 0;
  const markRanges = [];
  ranges.forEach(({
    $from,
    $to
  }) => {
    const from = $from.pos;
    const to = $to.pos;
    state.doc.nodesBetween(from, to, (node, pos) => {
      if (!node.isText && !node.marks.length) {
        return;
      }
      const relativeFrom = Math.max(from, pos);
      const relativeTo = Math.min(to, pos + node.nodeSize);
      const range2 = relativeTo - relativeFrom;
      selectionRange += range2;
      markRanges.push(...node.marks.map(mark => ({
        mark,
        from: relativeFrom,
        to: relativeTo
      })));
    });
  });
  if (selectionRange === 0) {
    return false;
  }
  const matchedRange = markRanges.filter(markRange => {
    if (!type) {
      return true;
    }
    return type.name === markRange.mark.type.name;
  }).filter(markRange => objectIncludes(markRange.mark.attrs, attributes, {
    strict: false
  })).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
  const excludedRange = markRanges.filter(markRange => {
    if (!type) {
      return true;
    }
    return markRange.mark.type !== type && markRange.mark.type.excludes(type);
  }).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
  const range = matchedRange > 0 ? matchedRange + excludedRange : matchedRange;
  return range >= selectionRange;
}
function isNodeActive(state, typeOrName, attributes = {}) {
  const {
    from,
    to,
    empty
  } = state.selection;
  const type = typeOrName ? getNodeType(typeOrName, state.schema) : null;
  const nodeRanges = [];
  state.doc.nodesBetween(from, to, (node, pos) => {
    if (node.isText) {
      return;
    }
    const relativeFrom = Math.max(from, pos);
    const relativeTo = Math.min(to, pos + node.nodeSize);
    nodeRanges.push({
      node,
      from: relativeFrom,
      to: relativeTo
    });
  });
  const selectionRange = to - from;
  const matchedNodeRanges = nodeRanges.filter(nodeRange => {
    if (!type) {
      return true;
    }
    return type.name === nodeRange.node.type.name;
  }).filter(nodeRange => objectIncludes(nodeRange.node.attrs, attributes, {
    strict: false
  }));
  if (empty) {
    return !!matchedNodeRanges.length;
  }
  const range = matchedNodeRanges.reduce((sum, nodeRange) => sum + nodeRange.to - nodeRange.from, 0);
  return range >= selectionRange;
}
function isActive(state, name, attributes = {}) {
  if (!name) {
    return isNodeActive(state, null, attributes) || isMarkActive(state, null, attributes);
  }
  const schemaType = getSchemaTypeNameByName(name, state.schema);
  if (schemaType === "node") {
    return isNodeActive(state, name, attributes);
  }
  if (schemaType === "mark") {
    return isMarkActive(state, name, attributes);
  }
  return false;
}
var isAtEndOfNode = (state, nodeType) => {
  const {
    $from,
    $to,
    $anchor
  } = state.selection;
  if (nodeType) {
    const parentNode = findParentNode(node => node.type.name === nodeType)(state.selection);
    if (!parentNode) {
      return false;
    }
    const $parentPos = state.doc.resolve(parentNode.pos + 1);
    if ($anchor.pos + 1 === $parentPos.end()) {
      return true;
    }
    return false;
  }
  if ($to.parentOffset < $to.parent.nodeSize - 2 || $from.pos !== $to.pos) {
    return false;
  }
  return true;
};
var isAtStartOfNode = state => {
  const {
    $from,
    $to
  } = state.selection;
  if ($from.parentOffset > 0 || $from.pos !== $to.pos) {
    return false;
  }
  return true;
};
function isExtensionRulesEnabled(extension, enabled) {
  if (Array.isArray(enabled)) {
    return enabled.some(enabledExtension => {
      const name = typeof enabledExtension === "string" ? enabledExtension : enabledExtension.name;
      return name === extension.name;
    });
  }
  return enabled;
}
function isList(name, extensions) {
  const {
    nodeExtensions
  } = splitExtensions(extensions);
  const extension = nodeExtensions.find(item => item.name === name);
  if (!extension) {
    return false;
  }
  const context = {
    name: extension.name,
    options: extension.options,
    storage: extension.storage
  };
  const group = callOrReturn(getExtensionField(extension, "group", context));
  if (typeof group !== "string") {
    return false;
  }
  return group.split(" ").includes("list");
}
function isNodeEmpty(node, {
  checkChildren = true,
  ignoreWhitespace = false
} = {}) {
  var _a;
  if (ignoreWhitespace) {
    if (node.type.name === "hardBreak") {
      return true;
    }
    if (node.isText) {
      return /^\s*$/m.test((_a = node.text) != null ? _a : "");
    }
  }
  if (node.isText) {
    return !node.text;
  }
  if (node.isAtom || node.isLeaf) {
    return false;
  }
  if (node.content.childCount === 0) {
    return true;
  }
  if (checkChildren) {
    let isContentEmpty = true;
    node.content.forEach(childNode => {
      if (isContentEmpty === false) {
        return;
      }
      if (!isNodeEmpty(childNode, {
        ignoreWhitespace,
        checkChildren
      })) {
        isContentEmpty = false;
      }
    });
    return isContentEmpty;
  }
  return false;
}
function isNodeSelection(value) {
  return value instanceof import_state2.NodeSelection;
}
function isTextSelection(value) {
  return value instanceof import_state3.TextSelection;
}
function minMax(value = 0, min = 0, max = 0) {
  return Math.min(Math.max(value, min), max);
}
function posToDOMRect(view, from, to) {
  const minPos = 0;
  const maxPos = view.state.doc.content.size;
  const resolvedFrom = minMax(from, minPos, maxPos);
  const resolvedEnd = minMax(to, minPos, maxPos);
  const start = view.coordsAtPos(resolvedFrom);
  const end = view.coordsAtPos(resolvedEnd, -1);
  const top = Math.min(start.top, end.top);
  const bottom = Math.max(start.bottom, end.bottom);
  const left = Math.min(start.left, end.left);
  const right = Math.max(start.right, end.right);
  const width = right - left;
  const height = bottom - top;
  const x = left;
  const y = top;
  const data = {
    top,
    bottom,
    left,
    right,
    width,
    height,
    x,
    y
  };
  return {
    ...data,
    toJSON: () => data
  };
}
function resolveFocusPosition(doc, position = null) {
  if (!position) {
    return null;
  }
  const selectionAtStart = import_state4.Selection.atStart(doc);
  const selectionAtEnd = import_state4.Selection.atEnd(doc);
  if (position === "start" || position === true) {
    return selectionAtStart;
  }
  if (position === "end") {
    return selectionAtEnd;
  }
  const minPos = selectionAtStart.from;
  const maxPos = selectionAtEnd.to;
  if (position === "all") {
    return import_state4.TextSelection.create(doc, minMax(0, minPos, maxPos), minMax(doc.content.size, minPos, maxPos));
  }
  return import_state4.TextSelection.create(doc, minMax(position, minPos, maxPos), minMax(position, minPos, maxPos));
}
function rewriteUnknownContentInner({
  json,
  validMarks,
  validNodes,
  options,
  rewrittenContent = []
}) {
  if (json.marks && Array.isArray(json.marks)) {
    json.marks = json.marks.filter(mark => {
      const name = typeof mark === "string" ? mark : mark.type;
      if (validMarks.has(name)) {
        return true;
      }
      rewrittenContent.push({
        original: JSON.parse(JSON.stringify(mark)),
        unsupported: name
      });
      return false;
    });
  }
  if (json.content && Array.isArray(json.content)) {
    json.content = json.content.map(value => rewriteUnknownContentInner({
      json: value,
      validMarks,
      validNodes,
      options,
      rewrittenContent
    }).json).filter(a => a !== null && a !== void 0);
  }
  if (json.type && !validNodes.has(json.type)) {
    rewrittenContent.push({
      original: JSON.parse(JSON.stringify(json)),
      unsupported: json.type
    });
    if (json.content && Array.isArray(json.content) && (options == null ? void 0 : options.fallbackToParagraph) !== false) {
      json.type = "paragraph";
      return {
        json,
        rewrittenContent
      };
    }
    return {
      json: null,
      rewrittenContent
    };
  }
  return {
    json,
    rewrittenContent
  };
}
function rewriteUnknownContent(json, schema, options) {
  return rewriteUnknownContentInner({
    json,
    validNodes: new Set(Object.keys(schema.nodes)),
    validMarks: new Set(Object.keys(schema.marks)),
    options
  });
}
function selectionToInsertionEnd(tr, startLen, bias) {
  const last = tr.steps.length - 1;
  if (last < startLen) {
    return;
  }
  const step = tr.steps[last];
  if (!(step instanceof import_transform2.ReplaceStep || step instanceof import_transform2.ReplaceAroundStep)) {
    return;
  }
  const map = tr.mapping.maps[last];
  let end = 0;
  map.forEach((_from, _to, _newFrom, newTo) => {
    if (end === 0) {
      end = newTo;
    }
  });
  tr.setSelection(import_state5.Selection.near(tr.doc.resolve(end), bias));
}
var InputRule = class {
  constructor(config) {
    this.find = config.find;
    this.handler = config.handler;
  }
};
var inputRuleMatcherHandler = (text, find) => {
  if (isRegExp(find)) {
    return find.exec(text);
  }
  const inputRuleMatch = find(text);
  if (!inputRuleMatch) {
    return null;
  }
  const result = [inputRuleMatch.text];
  result.index = inputRuleMatch.index;
  result.input = text;
  result.data = inputRuleMatch.data;
  if (inputRuleMatch.replaceWith) {
    if (!inputRuleMatch.text.includes(inputRuleMatch.replaceWith)) {
      console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');
    }
    result.push(inputRuleMatch.replaceWith);
  }
  return result;
};
function run(config) {
  var _a;
  const {
    editor,
    from,
    to,
    text,
    rules,
    plugin
  } = config;
  const {
    view
  } = editor;
  if (view.composing) {
    return false;
  }
  const $from = view.state.doc.resolve(from);
  if ($from.parent.type.spec.code || !!((_a = $from.nodeBefore || $from.nodeAfter) == null ? void 0 : _a.marks.find(mark => mark.type.spec.code))) {
    return false;
  }
  let matched = false;
  const textBefore = getTextContentFromNodes($from) + text;
  rules.forEach(rule => {
    if (matched) {
      return;
    }
    const match = inputRuleMatcherHandler(textBefore, rule.find);
    if (!match) {
      return;
    }
    const tr = view.state.tr;
    const state = createChainableState({
      state: view.state,
      transaction: tr
    });
    const range = {
      from: from - (match[0].length - text.length),
      to
    };
    const {
      commands,
      chain,
      can
    } = new CommandManager({
      editor,
      state
    });
    const handler = rule.handler({
      state,
      range,
      match,
      commands,
      chain,
      can
    });
    if (handler === null || !tr.steps.length) {
      return;
    }
    tr.setMeta(plugin, {
      transform: tr,
      from,
      to,
      text
    });
    view.dispatch(tr);
    matched = true;
  });
  return matched;
}
function inputRulesPlugin(props) {
  const {
    editor,
    rules
  } = props;
  const plugin = new import_state6.Plugin({
    state: {
      init() {
        return null;
      },
      apply(tr, prev, state) {
        const stored = tr.getMeta(plugin);
        if (stored) {
          return stored;
        }
        const simulatedInputMeta = tr.getMeta("applyInputRules");
        const isSimulatedInput = !!simulatedInputMeta;
        if (isSimulatedInput) {
          setTimeout(() => {
            let {
              text
            } = simulatedInputMeta;
            if (typeof text === "string") {
              text = text;
            } else {
              text = getHTMLFromFragment(import_model7.Fragment.from(text), state.schema);
            }
            const {
              from
            } = simulatedInputMeta;
            const to = from + text.length;
            run({
              editor,
              from,
              to,
              text,
              rules,
              plugin
            });
          });
        }
        return tr.selectionSet || tr.docChanged ? null : prev;
      }
    },
    props: {
      handleTextInput(view, from, to, text) {
        return run({
          editor,
          from,
          to,
          text,
          rules,
          plugin
        });
      },
      handleDOMEvents: {
        compositionend: view => {
          setTimeout(() => {
            const {
              $cursor
            } = view.state.selection;
            if ($cursor) {
              run({
                editor,
                from: $cursor.pos,
                to: $cursor.pos,
                text: "",
                rules,
                plugin
              });
            }
          });
          return false;
        }
      },
      handleKeyDown(view, event) {
        if (event.key !== "Enter") {
          return false;
        }
        const {
          $cursor
        } = view.state.selection;
        if ($cursor) {
          return run({
            editor,
            from: $cursor.pos,
            to: $cursor.pos,
            text: "\n",
            rules,
            plugin
          });
        }
        return false;
      }
    },
    isInputRules: true
  });
  return plugin;
}
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
function isPlainObject(value) {
  if (getType(value) !== "Object") {
    return false;
  }
  return value.constructor === Object && Object.getPrototypeOf(value) === Object.prototype;
}
function mergeDeep(target, source) {
  const output = {
    ...target
  };
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (isPlainObject(source[key]) && isPlainObject(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
var Extendable = class {
  constructor(config = {}) {
    this.type = "extendable";
    this.parent = null;
    this.child = null;
    this.name = "";
    this.config = {
      name: this.name
    };
    this.config = {
      ...this.config,
      ...config
    };
    this.name = this.config.name;
  }
  get options() {
    return {
      ...(callOrReturn(getExtensionField(this, "addOptions", {
        name: this.name
      })) || {})
    };
  }
  get storage() {
    return {
      ...(callOrReturn(getExtensionField(this, "addStorage", {
        name: this.name,
        options: this.options
      })) || {})
    };
  }
  configure(options = {}) {
    const extension = this.extend({
      ...this.config,
      addOptions: () => {
        return mergeDeep(this.options, options);
      }
    });
    extension.name = this.name;
    extension.parent = this.parent;
    return extension;
  }
  extend(extendedConfig = {}) {
    const extension = new this.constructor({
      ...this.config,
      ...extendedConfig
    });
    extension.parent = this;
    this.child = extension;
    extension.name = "name" in extendedConfig ? extendedConfig.name : extension.parent.name;
    return extension;
  }
};
var Mark = class _Mark extends Extendable {
  constructor() {
    super(...arguments);
    this.type = "mark";
  }
  static create(config = {}) {
    const resolvedConfig = typeof config === "function" ? config() : config;
    return new _Mark(resolvedConfig);
  }
  static handleExit({
    editor,
    mark
  }) {
    const {
      tr
    } = editor.state;
    const currentPos = editor.state.selection.$from;
    const isAtEnd = currentPos.pos === currentPos.end();
    if (isAtEnd) {
      const currentMarks = currentPos.marks();
      const isInMark = !!currentMarks.find(m => (m == null ? void 0 : m.type.name) === mark.name);
      if (!isInMark) {
        return false;
      }
      const removeMark = currentMarks.find(m => (m == null ? void 0 : m.type.name) === mark.name);
      if (removeMark) {
        tr.removeStoredMark(removeMark);
      }
      tr.insertText(" ", currentPos.pos);
      editor.view.dispatch(tr);
      return true;
    }
    return false;
  }
  configure(options) {
    return super.configure(options);
  }
  extend(extendedConfig) {
    const resolvedConfig = typeof extendedConfig === "function" ? extendedConfig() : extendedConfig;
    return super.extend(resolvedConfig);
  }
};
function isNumber(value) {
  return typeof value === "number";
}
var PasteRule = class {
  constructor(config) {
    this.find = config.find;
    this.handler = config.handler;
  }
};
var pasteRuleMatcherHandler = (text, find, event) => {
  if (isRegExp(find)) {
    return [...text.matchAll(find)];
  }
  const matches = find(text, event);
  if (!matches) {
    return [];
  }
  return matches.map(pasteRuleMatch => {
    const result = [pasteRuleMatch.text];
    result.index = pasteRuleMatch.index;
    result.input = text;
    result.data = pasteRuleMatch.data;
    if (pasteRuleMatch.replaceWith) {
      if (!pasteRuleMatch.text.includes(pasteRuleMatch.replaceWith)) {
        console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');
      }
      result.push(pasteRuleMatch.replaceWith);
    }
    return result;
  });
};
function run2(config) {
  const {
    editor,
    state,
    from,
    to,
    rule,
    pasteEvent,
    dropEvent
  } = config;
  const {
    commands,
    chain,
    can
  } = new CommandManager({
    editor,
    state
  });
  const handlers = [];
  state.doc.nodesBetween(from, to, (node, pos) => {
    if (!node.isTextblock || node.type.spec.code) {
      return;
    }
    const resolvedFrom = Math.max(from, pos);
    const resolvedTo = Math.min(to, pos + node.content.size);
    const textToMatch = node.textBetween(resolvedFrom - pos, resolvedTo - pos, void 0, "\uFFFC");
    const matches = pasteRuleMatcherHandler(textToMatch, rule.find, pasteEvent);
    matches.forEach(match => {
      if (match.index === void 0) {
        return;
      }
      const start = resolvedFrom + match.index + 1;
      const end = start + match[0].length;
      const range = {
        from: state.tr.mapping.map(start),
        to: state.tr.mapping.map(end)
      };
      const handler = rule.handler({
        state,
        range,
        match,
        commands,
        chain,
        can,
        pasteEvent,
        dropEvent
      });
      handlers.push(handler);
    });
  });
  const success = handlers.every(handler => handler !== null);
  return success;
}
var tiptapDragFromOtherEditor = null;
var createClipboardPasteEvent = text => {
  var _a;
  const event = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  (_a = event.clipboardData) == null ? void 0 : _a.setData("text/html", text);
  return event;
};
function pasteRulesPlugin(props) {
  const {
    editor,
    rules
  } = props;
  let dragSourceElement = null;
  let isPastedFromProseMirror = false;
  let isDroppedFromProseMirror = false;
  let pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
  let dropEvent;
  try {
    dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
  } catch {
    dropEvent = null;
  }
  const processEvent = ({
    state,
    from,
    to,
    rule,
    pasteEvt
  }) => {
    const tr = state.tr;
    const chainableState = createChainableState({
      state,
      transaction: tr
    });
    const handler = run2({
      editor,
      state: chainableState,
      from: Math.max(from - 1, 0),
      to: to.b - 1,
      rule,
      pasteEvent: pasteEvt,
      dropEvent
    });
    if (!handler || !tr.steps.length) {
      return;
    }
    try {
      dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
    } catch {
      dropEvent = null;
    }
    pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
    return tr;
  };
  const plugins = rules.map(rule => {
    return new import_state7.Plugin({
      view(view) {
        const handleDragstart = event => {
          var _a;
          dragSourceElement = ((_a = view.dom.parentElement) == null ? void 0 : _a.contains(event.target)) ? view.dom.parentElement : null;
          if (dragSourceElement) {
            tiptapDragFromOtherEditor = editor;
          }
        };
        const handleDragend = () => {
          if (tiptapDragFromOtherEditor) {
            tiptapDragFromOtherEditor = null;
          }
        };
        window.addEventListener("dragstart", handleDragstart);
        window.addEventListener("dragend", handleDragend);
        return {
          destroy() {
            window.removeEventListener("dragstart", handleDragstart);
            window.removeEventListener("dragend", handleDragend);
          }
        };
      },
      props: {
        handleDOMEvents: {
          drop: (view, event) => {
            isDroppedFromProseMirror = dragSourceElement === view.dom.parentElement;
            dropEvent = event;
            if (!isDroppedFromProseMirror) {
              const dragFromOtherEditor = tiptapDragFromOtherEditor;
              if (dragFromOtherEditor == null ? void 0 : dragFromOtherEditor.isEditable) {
                setTimeout(() => {
                  const selection = dragFromOtherEditor.state.selection;
                  if (selection) {
                    dragFromOtherEditor.commands.deleteRange({
                      from: selection.from,
                      to: selection.to
                    });
                  }
                }, 10);
              }
            }
            return false;
          },
          paste: (_view, event) => {
            var _a;
            const html = (_a = event.clipboardData) == null ? void 0 : _a.getData("text/html");
            pasteEvent = event;
            isPastedFromProseMirror = !!(html == null ? void 0 : html.includes("data-pm-slice"));
            return false;
          }
        }
      },
      appendTransaction: (transactions, oldState, state) => {
        const transaction = transactions[0];
        const isPaste = transaction.getMeta("uiEvent") === "paste" && !isPastedFromProseMirror;
        const isDrop = transaction.getMeta("uiEvent") === "drop" && !isDroppedFromProseMirror;
        const simulatedPasteMeta = transaction.getMeta("applyPasteRules");
        const isSimulatedPaste = !!simulatedPasteMeta;
        if (!isPaste && !isDrop && !isSimulatedPaste) {
          return;
        }
        if (isSimulatedPaste) {
          let {
            text
          } = simulatedPasteMeta;
          if (typeof text === "string") {
            text = text;
          } else {
            text = getHTMLFromFragment(import_model8.Fragment.from(text), state.schema);
          }
          const {
            from: from2
          } = simulatedPasteMeta;
          const to2 = from2 + text.length;
          const pasteEvt = createClipboardPasteEvent(text);
          return processEvent({
            rule,
            state,
            from: from2,
            to: {
              b: to2
            },
            pasteEvt
          });
        }
        const from = oldState.doc.content.findDiffStart(state.doc.content);
        const to = oldState.doc.content.findDiffEnd(state.doc.content);
        if (!isNumber(from) || !to || from === to.b) {
          return;
        }
        return processEvent({
          rule,
          state,
          from,
          to,
          pasteEvt: pasteEvent
        });
      }
    });
  });
  return plugins;
}
var ExtensionManager = class {
  constructor(extensions, editor) {
    this.splittableMarks = [];
    this.editor = editor;
    this.extensions = resolveExtensions(extensions);
    this.schema = getSchemaByResolvedExtensions(this.extensions, editor);
    this.setupExtensions();
  }
  get commands() {
    return this.extensions.reduce((commands, extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor: this.editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      const addCommands = getExtensionField(extension, "addCommands", context);
      if (!addCommands) {
        return commands;
      }
      return {
        ...commands,
        ...addCommands()
      };
    }, {});
  }
  get plugins() {
    const {
      editor
    } = this;
    const extensions = sortExtensions([...this.extensions].reverse());
    const inputRules = [];
    const pasteRules = [];
    const allPlugins = extensions.map(extension => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      const plugins = [];
      const addKeyboardShortcuts = getExtensionField(extension, "addKeyboardShortcuts", context);
      let defaultBindings = {};
      if (extension.type === "mark" && getExtensionField(extension, "exitable", context)) {
        defaultBindings.ArrowRight = () => Mark.handleExit({
          editor,
          mark: extension
        });
      }
      if (addKeyboardShortcuts) {
        const bindings = Object.fromEntries(Object.entries(addKeyboardShortcuts()).map(([shortcut, method]) => {
          return [shortcut, () => method({
            editor
          })];
        }));
        defaultBindings = {
          ...defaultBindings,
          ...bindings
        };
      }
      const keyMapPlugin = (0, import_keymap.keymap)(defaultBindings);
      plugins.push(keyMapPlugin);
      const addInputRules = getExtensionField(extension, "addInputRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enableInputRules) && addInputRules) {
        inputRules.push(...addInputRules());
      }
      const addPasteRules = getExtensionField(extension, "addPasteRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enablePasteRules) && addPasteRules) {
        pasteRules.push(...addPasteRules());
      }
      const addProseMirrorPlugins = getExtensionField(extension, "addProseMirrorPlugins", context);
      if (addProseMirrorPlugins) {
        const proseMirrorPlugins = addProseMirrorPlugins();
        plugins.push(...proseMirrorPlugins);
      }
      return plugins;
    }).flat();
    return [inputRulesPlugin({
      editor,
      rules: inputRules
    }), ...pasteRulesPlugin({
      editor,
      rules: pasteRules
    }), ...allPlugins];
  }
  get attributes() {
    return getAttributesFromExtensions(this.extensions);
  }
  get nodeViews() {
    const {
      editor
    } = this;
    const {
      nodeExtensions
    } = splitExtensions(this.extensions);
    return Object.fromEntries(nodeExtensions.filter(extension => !!getExtensionField(extension, "addNodeView")).map(extension => {
      const extensionAttributes = this.attributes.filter(attribute => attribute.type === extension.name);
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor,
        type: getNodeType(extension.name, this.schema)
      };
      const addNodeView = getExtensionField(extension, "addNodeView", context);
      if (!addNodeView) {
        return [];
      }
      const nodeview = (node, view, getPos, decorations, innerDecorations) => {
        const HTMLAttributes = getRenderedAttributes(node, extensionAttributes);
        return addNodeView()({
          node,
          view,
          getPos,
          decorations,
          innerDecorations,
          editor,
          extension,
          HTMLAttributes
        });
      };
      return [extension.name, nodeview];
    }));
  }
  get markViews() {
    const {
      editor
    } = this;
    const {
      markExtensions
    } = splitExtensions(this.extensions);
    return Object.fromEntries(markExtensions.filter(extension => !!getExtensionField(extension, "addMarkView")).map(extension => {
      const extensionAttributes = this.attributes.filter(attribute => attribute.type === extension.name);
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor,
        type: getMarkType(extension.name, this.schema)
      };
      const addMarkView = getExtensionField(extension, "addMarkView", context);
      if (!addMarkView) {
        return [];
      }
      const markView = (mark, view, inline) => {
        const HTMLAttributes = getRenderedAttributes(mark, extensionAttributes);
        return addMarkView()({
          mark,
          view,
          inline,
          editor,
          extension,
          HTMLAttributes,
          updateAttributes: attrs => {
            updateMarkViewAttributes(mark, editor, attrs);
          }
        });
      };
      return [extension.name, markView];
    }));
  }
  setupExtensions() {
    const extensions = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(extensions.map(extension => [extension.name, extension.storage]));
    extensions.forEach(extension => {
      var _a;
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor: this.editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      if (extension.type === "mark") {
        const keepOnSplit = (_a = callOrReturn(getExtensionField(extension, "keepOnSplit", context))) != null ? _a : true;
        if (keepOnSplit) {
          this.splittableMarks.push(extension.name);
        }
      }
      const onBeforeCreate = getExtensionField(extension, "onBeforeCreate", context);
      const onCreate = getExtensionField(extension, "onCreate", context);
      const onUpdate = getExtensionField(extension, "onUpdate", context);
      const onSelectionUpdate = getExtensionField(extension, "onSelectionUpdate", context);
      const onTransaction = getExtensionField(extension, "onTransaction", context);
      const onFocus = getExtensionField(extension, "onFocus", context);
      const onBlur = getExtensionField(extension, "onBlur", context);
      const onDestroy = getExtensionField(extension, "onDestroy", context);
      if (onBeforeCreate) {
        this.editor.on("beforeCreate", onBeforeCreate);
      }
      if (onCreate) {
        this.editor.on("create", onCreate);
      }
      if (onUpdate) {
        this.editor.on("update", onUpdate);
      }
      if (onSelectionUpdate) {
        this.editor.on("selectionUpdate", onSelectionUpdate);
      }
      if (onTransaction) {
        this.editor.on("transaction", onTransaction);
      }
      if (onFocus) {
        this.editor.on("focus", onFocus);
      }
      if (onBlur) {
        this.editor.on("blur", onBlur);
      }
      if (onDestroy) {
        this.editor.on("destroy", onDestroy);
      }
    });
  }
};
ExtensionManager.resolve = resolveExtensions;
ExtensionManager.sort = sortExtensions;
ExtensionManager.flatten = flattenExtensions;
var extensions_exports = {};
__export2(extensions_exports, {
  ClipboardTextSerializer: () => ClipboardTextSerializer,
  Commands: () => Commands,
  Delete: () => Delete,
  Drop: () => Drop,
  Editable: () => Editable,
  FocusEvents: () => FocusEvents,
  Keymap: () => Keymap,
  Paste: () => Paste,
  Tabindex: () => Tabindex,
  focusEventsPluginKey: () => focusEventsPluginKey
});
var Extension = class _Extension extends Extendable {
  constructor() {
    super(...arguments);
    this.type = "extension";
  }
  static create(config = {}) {
    const resolvedConfig = typeof config === "function" ? config() : config;
    return new _Extension(resolvedConfig);
  }
  configure(options) {
    return super.configure(options);
  }
  extend(extendedConfig) {
    const resolvedConfig = typeof extendedConfig === "function" ? extendedConfig() : extendedConfig;
    return super.extend(resolvedConfig);
  }
};
var ClipboardTextSerializer = Extension.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [new import_state8.Plugin({
      key: new import_state8.PluginKey("clipboardTextSerializer"),
      props: {
        clipboardTextSerializer: () => {
          const {
            editor
          } = this;
          const {
            state,
            schema
          } = editor;
          const {
            doc,
            selection
          } = state;
          const {
            ranges
          } = selection;
          const from = Math.min(...ranges.map(range2 => range2.$from.pos));
          const to = Math.max(...ranges.map(range2 => range2.$to.pos));
          const textSerializers = getTextSerializersFromSchema(schema);
          const range = {
            from,
            to
          };
          return getTextBetween(doc, range, {
            ...(this.options.blockSeparator !== void 0 ? {
              blockSeparator: this.options.blockSeparator
            } : {}),
            textSerializers
          });
        }
      }
    })];
  }
});
var commands_exports = {};
__export2(commands_exports, {
  blur: () => blur,
  clearContent: () => clearContent,
  clearNodes: () => clearNodes,
  command: () => command,
  createParagraphNear: () => createParagraphNear,
  cut: () => cut,
  deleteCurrentNode: () => deleteCurrentNode,
  deleteNode: () => deleteNode,
  deleteRange: () => deleteRange,
  deleteSelection: () => deleteSelection,
  enter: () => enter,
  exitCode: () => exitCode,
  extendMarkRange: () => extendMarkRange,
  first: () => first,
  focus: () => focus,
  forEach: () => forEach,
  insertContent: () => insertContent,
  insertContentAt: () => insertContentAt,
  joinBackward: () => joinBackward,
  joinDown: () => joinDown,
  joinForward: () => joinForward,
  joinItemBackward: () => joinItemBackward,
  joinItemForward: () => joinItemForward,
  joinTextblockBackward: () => joinTextblockBackward,
  joinTextblockForward: () => joinTextblockForward,
  joinUp: () => joinUp,
  keyboardShortcut: () => keyboardShortcut,
  lift: () => lift,
  liftEmptyBlock: () => liftEmptyBlock,
  liftListItem: () => liftListItem,
  newlineInCode: () => newlineInCode,
  resetAttributes: () => resetAttributes,
  scrollIntoView: () => scrollIntoView,
  selectAll: () => selectAll,
  selectNodeBackward: () => selectNodeBackward,
  selectNodeForward: () => selectNodeForward,
  selectParentNode: () => selectParentNode,
  selectTextblockEnd: () => selectTextblockEnd,
  selectTextblockStart: () => selectTextblockStart,
  setContent: () => setContent,
  setMark: () => setMark,
  setMeta: () => setMeta,
  setNode: () => setNode,
  setNodeSelection: () => setNodeSelection,
  setTextSelection: () => setTextSelection,
  sinkListItem: () => sinkListItem,
  splitBlock: () => splitBlock,
  splitListItem: () => splitListItem,
  toggleList: () => toggleList,
  toggleMark: () => toggleMark,
  toggleNode: () => toggleNode,
  toggleWrap: () => toggleWrap,
  undoInputRule: () => undoInputRule,
  unsetAllMarks: () => unsetAllMarks,
  unsetMark: () => unsetMark,
  updateAttributes: () => updateAttributes,
  wrapIn: () => wrapIn,
  wrapInList: () => wrapInList
});
var blur = () => ({
  editor,
  view
}) => {
  requestAnimationFrame(() => {
    var _a;
    if (!editor.isDestroyed) {
      ;
      view.dom.blur();
      (_a = window == null ? void 0 : window.getSelection()) == null ? void 0 : _a.removeAllRanges();
    }
  });
  return true;
};
var clearContent = (emitUpdate = true) => ({
  commands
}) => {
  return commands.setContent("", {
    emitUpdate
  });
};
var clearNodes = () => ({
  state,
  tr,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const {
    ranges
  } = selection;
  if (!dispatch) {
    return true;
  }
  ranges.forEach(({
    $from,
    $to
  }) => {
    state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (node.type.isText) {
        return;
      }
      const {
        doc,
        mapping
      } = tr;
      const $mappedFrom = doc.resolve(mapping.map(pos));
      const $mappedTo = doc.resolve(mapping.map(pos + node.nodeSize));
      const nodeRange = $mappedFrom.blockRange($mappedTo);
      if (!nodeRange) {
        return;
      }
      const targetLiftDepth = (0, import_transform3.liftTarget)(nodeRange);
      if (node.type.isTextblock) {
        const {
          defaultType
        } = $mappedFrom.parent.contentMatchAt($mappedFrom.index());
        tr.setNodeMarkup(nodeRange.start, defaultType);
      }
      if (targetLiftDepth || targetLiftDepth === 0) {
        tr.lift(nodeRange, targetLiftDepth);
      }
    });
  });
  return true;
};
var command = fn => props => {
  return fn(props);
};
var createParagraphNear = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands.createParagraphNear)(state, dispatch);
};
var cut = (originRange, targetPos) => ({
  editor,
  tr
}) => {
  const {
    state
  } = editor;
  const contentSlice = state.doc.slice(originRange.from, originRange.to);
  tr.deleteRange(originRange.from, originRange.to);
  const newPos = tr.mapping.map(targetPos);
  tr.insert(newPos, contentSlice.content);
  tr.setSelection(new import_state9.TextSelection(tr.doc.resolve(Math.max(newPos - 1, 0))));
  return true;
};
var deleteCurrentNode = () => ({
  tr,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const currentNode = selection.$anchor.node();
  if (currentNode.content.size > 0) {
    return false;
  }
  const $pos = tr.selection.$anchor;
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node = $pos.node(depth);
    if (node.type === currentNode.type) {
      if (dispatch) {
        const from = $pos.before(depth);
        const to = $pos.after(depth);
        tr.delete(from, to).scrollIntoView();
      }
      return true;
    }
  }
  return false;
};
var deleteNode = typeOrName => ({
  tr,
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  const $pos = tr.selection.$anchor;
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node = $pos.node(depth);
    if (node.type === type) {
      if (dispatch) {
        const from = $pos.before(depth);
        const to = $pos.after(depth);
        tr.delete(from, to).scrollIntoView();
      }
      return true;
    }
  }
  return false;
};
var deleteRange = range => ({
  tr,
  dispatch
}) => {
  const {
    from,
    to
  } = range;
  if (dispatch) {
    tr.delete(from, to);
  }
  return true;
};
var deleteSelection = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands2.deleteSelection)(state, dispatch);
};
var enter = () => ({
  commands
}) => {
  return commands.keyboardShortcut("Enter");
};
var exitCode = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands3.exitCode)(state, dispatch);
};
var extendMarkRange = (typeOrName, attributes = {}) => ({
  tr,
  state,
  dispatch
}) => {
  const type = getMarkType(typeOrName, state.schema);
  const {
    doc,
    selection
  } = tr;
  const {
    $from,
    from,
    to
  } = selection;
  if (dispatch) {
    const range = getMarkRange($from, type, attributes);
    if (range && range.from <= from && range.to >= to) {
      const newSelection = import_state10.TextSelection.create(doc, range.from, range.to);
      tr.setSelection(newSelection);
    }
  }
  return true;
};
var first = commands => props => {
  const items = typeof commands === "function" ? commands(props) : commands;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i](props)) {
      return true;
    }
  }
  return false;
};
function isAndroid() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function isiOS() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var focus = (position = null, options = {}) => ({
  editor,
  view,
  tr,
  dispatch
}) => {
  options = {
    scrollIntoView: true,
    ...options
  };
  const delayedFocus = () => {
    if (isiOS() || isAndroid()) {
      ;
      view.dom.focus();
    }
    requestAnimationFrame(() => {
      if (!editor.isDestroyed) {
        view.focus();
        if (options == null ? void 0 : options.scrollIntoView) {
          editor.commands.scrollIntoView();
        }
      }
    });
  };
  if (view.hasFocus() && position === null || position === false) {
    return true;
  }
  if (dispatch && position === null && !isTextSelection(editor.state.selection)) {
    delayedFocus();
    return true;
  }
  const selection = resolveFocusPosition(tr.doc, position) || editor.state.selection;
  const isSameSelection = editor.state.selection.eq(selection);
  if (dispatch) {
    if (!isSameSelection) {
      tr.setSelection(selection);
    }
    if (isSameSelection && tr.storedMarks) {
      tr.setStoredMarks(tr.storedMarks);
    }
    delayedFocus();
  }
  return true;
};
var forEach = (items, fn) => props => {
  return items.every((item, index) => fn(item, {
    ...props,
    index
  }));
};
var insertContent = (value, options) => ({
  tr,
  commands
}) => {
  return commands.insertContentAt({
    from: tr.selection.from,
    to: tr.selection.to
  }, value, options);
};
var isFragment = nodeOrFragment => {
  return !("type" in nodeOrFragment);
};
var insertContentAt = (position, value, options) => ({
  tr,
  dispatch,
  editor
}) => {
  var _a;
  if (dispatch) {
    options = {
      parseOptions: editor.options.parseOptions,
      updateSelection: true,
      applyInputRules: false,
      applyPasteRules: false,
      ...options
    };
    let content;
    const {
      selection
    } = editor.state;
    const emitContentError = error => {
      editor.emit("contentError", {
        editor,
        error,
        disableCollaboration: () => {
          if ("collaboration" in editor.storage && typeof editor.storage.collaboration === "object" && editor.storage.collaboration) {
            ;
            editor.storage.collaboration.isDisabled = true;
          }
        }
      });
    };
    const parseOptions = {
      preserveWhitespace: "full",
      ...options.parseOptions
    };
    if (!options.errorOnInvalidContent && !editor.options.enableContentCheck && editor.options.emitContentError) {
      try {
        createNodeFromContent(value, editor.schema, {
          parseOptions,
          errorOnInvalidContent: true
        });
      } catch (e) {
        emitContentError(e);
      }
    }
    try {
      content = createNodeFromContent(value, editor.schema, {
        parseOptions,
        errorOnInvalidContent: (_a = options.errorOnInvalidContent) != null ? _a : editor.options.enableContentCheck
      });
    } catch (e) {
      emitContentError(e);
      return false;
    }
    let {
      from,
      to
    } = typeof position === "number" ? {
      from: position,
      to: position
    } : {
      from: position.from,
      to: position.to
    };
    let isOnlyTextContent = true;
    let isOnlyBlockContent = true;
    const nodes = isFragment(content) ? content : [content];
    nodes.forEach(node => {
      node.check();
      isOnlyTextContent = isOnlyTextContent ? node.isText && node.marks.length === 0 : false;
      isOnlyBlockContent = isOnlyBlockContent ? node.isBlock : false;
    });
    if (from === to && isOnlyBlockContent) {
      const {
        parent
      } = tr.doc.resolve(from);
      const isEmptyTextBlock = parent.isTextblock && !parent.type.spec.code && !parent.childCount;
      if (isEmptyTextBlock) {
        from -= 1;
        to += 1;
      }
    }
    let newContent;
    if (isOnlyTextContent) {
      if (Array.isArray(value)) {
        newContent = value.map(v => v.text || "").join("");
      } else if (value instanceof import_model9.Fragment) {
        let text = "";
        value.forEach(node => {
          if (node.text) {
            text += node.text;
          }
        });
        newContent = text;
      } else if (typeof value === "object" && !!value && !!value.text) {
        newContent = value.text;
      } else {
        newContent = value;
      }
      tr.insertText(newContent, from, to);
    } else {
      newContent = content;
      const fromSelectionAtStart = selection.$from.parentOffset === 0;
      const isTextSelection2 = selection.$from.node().isText || selection.$from.node().isTextblock;
      const hasContent = selection.$from.node().content.size > 0;
      if (fromSelectionAtStart && isTextSelection2 && hasContent) {
        from = Math.max(0, from - 1);
      }
      tr.replaceWith(from, to, newContent);
    }
    if (options.updateSelection) {
      selectionToInsertionEnd(tr, tr.steps.length - 1, -1);
    }
    if (options.applyInputRules) {
      tr.setMeta("applyInputRules", {
        from,
        text: newContent
      });
    }
    if (options.applyPasteRules) {
      tr.setMeta("applyPasteRules", {
        from,
        text: newContent
      });
    }
  }
  return true;
};
var joinUp = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands4.joinUp)(state, dispatch);
};
var joinDown = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands4.joinDown)(state, dispatch);
};
var joinBackward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands4.joinBackward)(state, dispatch);
};
var joinForward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands4.joinForward)(state, dispatch);
};
var joinItemBackward = () => ({
  state,
  dispatch,
  tr
}) => {
  try {
    const point = (0, import_transform4.joinPoint)(state.doc, state.selection.$from.pos, -1);
    if (point === null || point === void 0) {
      return false;
    }
    tr.join(point, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch {
    return false;
  }
};
var joinItemForward = () => ({
  state,
  dispatch,
  tr
}) => {
  try {
    const point = (0, import_transform5.joinPoint)(state.doc, state.selection.$from.pos, 1);
    if (point === null || point === void 0) {
      return false;
    }
    tr.join(point, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch {
    return false;
  }
};
var joinTextblockBackward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands5.joinTextblockBackward)(state, dispatch);
};
var joinTextblockForward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands6.joinTextblockForward)(state, dispatch);
};
function isMacOS() {
  return typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
}
function normalizeKeyName(name) {
  const parts = name.split(/-(?!$)/);
  let result = parts[parts.length - 1];
  if (result === "Space") {
    result = " ";
  }
  let alt;
  let ctrl;
  let shift;
  let meta;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) {
      meta = true;
    } else if (/^a(lt)?$/i.test(mod)) {
      alt = true;
    } else if (/^(c|ctrl|control)$/i.test(mod)) {
      ctrl = true;
    } else if (/^s(hift)?$/i.test(mod)) {
      shift = true;
    } else if (/^mod$/i.test(mod)) {
      if (isiOS() || isMacOS()) {
        meta = true;
      } else {
        ctrl = true;
      }
    } else {
      throw new Error(`Unrecognized modifier name: ${mod}`);
    }
  }
  if (alt) {
    result = `Alt-${result}`;
  }
  if (ctrl) {
    result = `Ctrl-${result}`;
  }
  if (meta) {
    result = `Meta-${result}`;
  }
  if (shift) {
    result = `Shift-${result}`;
  }
  return result;
}
var keyboardShortcut = name => ({
  editor,
  view,
  tr,
  dispatch
}) => {
  const keys = normalizeKeyName(name).split(/-(?!$)/);
  const key = keys.find(item => !["Alt", "Ctrl", "Meta", "Shift"].includes(item));
  const event = new KeyboardEvent("keydown", {
    key: key === "Space" ? " " : key,
    altKey: keys.includes("Alt"),
    ctrlKey: keys.includes("Ctrl"),
    metaKey: keys.includes("Meta"),
    shiftKey: keys.includes("Shift"),
    bubbles: true,
    cancelable: true
  });
  const capturedTransaction = editor.captureTransaction(() => {
    view.someProp("handleKeyDown", f => f(view, event));
  });
  capturedTransaction == null ? void 0 : capturedTransaction.steps.forEach(step => {
    const newStep = step.map(tr.mapping);
    if (newStep && dispatch) {
      tr.maybeStep(newStep);
    }
  });
  return true;
};
var lift = (typeOrName, attributes = {}) => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  if (!isActive2) {
    return false;
  }
  return (0, import_commands7.lift)(state, dispatch);
};
var liftEmptyBlock = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands8.liftEmptyBlock)(state, dispatch);
};
var liftListItem = typeOrName => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  return (0, import_schema_list.liftListItem)(type)(state, dispatch);
};
var newlineInCode = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands9.newlineInCode)(state, dispatch);
};
function deleteProps(obj, propOrProps) {
  const props = typeof propOrProps === "string" ? [propOrProps] : propOrProps;
  return Object.keys(obj).reduce((newObj, prop) => {
    if (!props.includes(prop)) {
      newObj[prop] = obj[prop];
    }
    return newObj;
  }, {});
}
var resetAttributes = (typeOrName, attributes) => ({
  tr,
  state,
  dispatch
}) => {
  let nodeType = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  if (dispatch) {
    tr.selection.ranges.forEach(range => {
      state.doc.nodesBetween(range.$from.pos, range.$to.pos, (node, pos) => {
        if (nodeType && nodeType === node.type) {
          tr.setNodeMarkup(pos, void 0, deleteProps(node.attrs, attributes));
        }
        if (markType && node.marks.length) {
          node.marks.forEach(mark => {
            if (markType === mark.type) {
              tr.addMark(pos, pos + node.nodeSize, markType.create(deleteProps(mark.attrs, attributes)));
            }
          });
        }
      });
    });
  }
  return true;
};
var scrollIntoView = () => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    tr.scrollIntoView();
  }
  return true;
};
var selectAll = () => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    const selection = new import_state11.AllSelection(tr.doc);
    tr.setSelection(selection);
  }
  return true;
};
var selectNodeBackward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands10.selectNodeBackward)(state, dispatch);
};
var selectNodeForward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands11.selectNodeForward)(state, dispatch);
};
var selectParentNode = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands12.selectParentNode)(state, dispatch);
};
var selectTextblockEnd = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands13.selectTextblockEnd)(state, dispatch);
};
var selectTextblockStart = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands14.selectTextblockStart)(state, dispatch);
};
var setContent = (content, {
  errorOnInvalidContent,
  emitUpdate = true,
  parseOptions = {}
} = {}) => ({
  editor,
  tr,
  dispatch,
  commands
}) => {
  const {
    doc
  } = tr;
  if (parseOptions.preserveWhitespace !== "full") {
    const document2 = createDocument(content, editor.schema, parseOptions, {
      errorOnInvalidContent: errorOnInvalidContent != null ? errorOnInvalidContent : editor.options.enableContentCheck
    });
    if (dispatch) {
      tr.replaceWith(0, doc.content.size, document2).setMeta("preventUpdate", !emitUpdate);
    }
    return true;
  }
  if (dispatch) {
    tr.setMeta("preventUpdate", !emitUpdate);
  }
  return commands.insertContentAt({
    from: 0,
    to: doc.content.size
  }, content, {
    parseOptions,
    errorOnInvalidContent: errorOnInvalidContent != null ? errorOnInvalidContent : editor.options.enableContentCheck
  });
};
function canSetMark(state, tr, newMarkType) {
  var _a;
  const {
    selection
  } = tr;
  let cursor = null;
  if (isTextSelection(selection)) {
    cursor = selection.$cursor;
  }
  if (cursor) {
    const currentMarks = (_a = state.storedMarks) != null ? _a : cursor.marks();
    return !!newMarkType.isInSet(currentMarks) || !currentMarks.some(mark => mark.type.excludes(newMarkType));
  }
  const {
    ranges
  } = selection;
  return ranges.some(({
    $from,
    $to
  }) => {
    let someNodeSupportsMark = $from.depth === 0 ? state.doc.inlineContent && state.doc.type.allowsMarkType(newMarkType) : false;
    state.doc.nodesBetween($from.pos, $to.pos, (node, _pos, parent) => {
      if (someNodeSupportsMark) {
        return false;
      }
      if (node.isInline) {
        const parentAllowsMarkType = !parent || parent.type.allowsMarkType(newMarkType);
        const currentMarksAllowMarkType = !!newMarkType.isInSet(node.marks) || !node.marks.some(otherMark => otherMark.type.excludes(newMarkType));
        someNodeSupportsMark = parentAllowsMarkType && currentMarksAllowMarkType;
      }
      return !someNodeSupportsMark;
    });
    return someNodeSupportsMark;
  });
}
var setMark = (typeOrName, attributes = {}) => ({
  tr,
  state,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const {
    empty,
    ranges
  } = selection;
  const type = getMarkType(typeOrName, state.schema);
  if (dispatch) {
    if (empty) {
      const oldAttributes = getMarkAttributes(state, type);
      tr.addStoredMark(type.create({
        ...oldAttributes,
        ...attributes
      }));
    } else {
      ranges.forEach(range => {
        const from = range.$from.pos;
        const to = range.$to.pos;
        state.doc.nodesBetween(from, to, (node, pos) => {
          const trimmedFrom = Math.max(pos, from);
          const trimmedTo = Math.min(pos + node.nodeSize, to);
          const someHasMark = node.marks.find(mark => mark.type === type);
          if (someHasMark) {
            node.marks.forEach(mark => {
              if (type === mark.type) {
                tr.addMark(trimmedFrom, trimmedTo, type.create({
                  ...mark.attrs,
                  ...attributes
                }));
              }
            });
          } else {
            tr.addMark(trimmedFrom, trimmedTo, type.create(attributes));
          }
        });
      });
    }
  }
  return canSetMark(state, tr, type);
};
var setMeta = (key, value) => ({
  tr
}) => {
  tr.setMeta(key, value);
  return true;
};
var setNode = (typeOrName, attributes = {}) => ({
  state,
  dispatch,
  chain
}) => {
  const type = getNodeType(typeOrName, state.schema);
  let attributesToCopy;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    attributesToCopy = state.selection.$anchor.parent.attrs;
  }
  if (!type.isTextblock) {
    console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');
    return false;
  }
  return chain().command(({
    commands
  }) => {
    const canSetBlock = (0, import_commands15.setBlockType)(type, {
      ...attributesToCopy,
      ...attributes
    })(state);
    if (canSetBlock) {
      return true;
    }
    return commands.clearNodes();
  }).command(({
    state: updatedState
  }) => {
    return (0, import_commands15.setBlockType)(type, {
      ...attributesToCopy,
      ...attributes
    })(updatedState, dispatch);
  }).run();
};
var setNodeSelection = position => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    const {
      doc
    } = tr;
    const from = minMax(position, 0, doc.content.size);
    const selection = import_state12.NodeSelection.create(doc, from);
    tr.setSelection(selection);
  }
  return true;
};
var setTextSelection = position => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    const {
      doc
    } = tr;
    const {
      from,
      to
    } = typeof position === "number" ? {
      from: position,
      to: position
    } : position;
    const minPos = import_state13.TextSelection.atStart(doc).from;
    const maxPos = import_state13.TextSelection.atEnd(doc).to;
    const resolvedFrom = minMax(from, minPos, maxPos);
    const resolvedEnd = minMax(to, minPos, maxPos);
    const selection = import_state13.TextSelection.create(doc, resolvedFrom, resolvedEnd);
    tr.setSelection(selection);
  }
  return true;
};
var sinkListItem = typeOrName => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  return (0, import_schema_list2.sinkListItem)(type)(state, dispatch);
};
function ensureMarks(state, splittableMarks) {
  const marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
  if (marks) {
    const filteredMarks = marks.filter(mark => splittableMarks == null ? void 0 : splittableMarks.includes(mark.type.name));
    state.tr.ensureMarks(filteredMarks);
  }
}
var splitBlock = ({
  keepMarks = true
} = {}) => ({
  tr,
  state,
  dispatch,
  editor
}) => {
  const {
    selection,
    doc
  } = tr;
  const {
    $from,
    $to
  } = selection;
  const extensionAttributes = editor.extensionManager.attributes;
  const newAttributes = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
  if (selection instanceof import_state14.NodeSelection && selection.node.isBlock) {
    if (!$from.parentOffset || !(0, import_transform6.canSplit)(doc, $from.pos)) {
      return false;
    }
    if (dispatch) {
      if (keepMarks) {
        ensureMarks(state, editor.extensionManager.splittableMarks);
      }
      tr.split($from.pos).scrollIntoView();
    }
    return true;
  }
  if (!$from.parent.isBlock) {
    return false;
  }
  const atEnd = $to.parentOffset === $to.parent.content.size;
  const deflt = $from.depth === 0 ? void 0 : defaultBlockAt($from.node(-1).contentMatchAt($from.indexAfter(-1)));
  let types = atEnd && deflt ? [{
    type: deflt,
    attrs: newAttributes
  }] : void 0;
  let can = (0, import_transform6.canSplit)(tr.doc, tr.mapping.map($from.pos), 1, types);
  if (!types && !can && (0, import_transform6.canSplit)(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [{
    type: deflt
  }] : void 0)) {
    can = true;
    types = deflt ? [{
      type: deflt,
      attrs: newAttributes
    }] : void 0;
  }
  if (dispatch) {
    if (can) {
      if (selection instanceof import_state14.TextSelection) {
        tr.deleteSelection();
      }
      tr.split(tr.mapping.map($from.pos), 1, types);
      if (deflt && !atEnd && !$from.parentOffset && $from.parent.type !== deflt) {
        const first2 = tr.mapping.map($from.before());
        const $first = tr.doc.resolve(first2);
        if ($from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) {
          tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
        }
      }
    }
    if (keepMarks) {
      ensureMarks(state, editor.extensionManager.splittableMarks);
    }
    tr.scrollIntoView();
  }
  return can;
};
var splitListItem = (typeOrName, overrideAttrs = {}) => ({
  tr,
  state,
  dispatch,
  editor
}) => {
  var _a;
  const type = getNodeType(typeOrName, state.schema);
  const {
    $from,
    $to
  } = state.selection;
  const node = state.selection.node;
  if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
    return false;
  }
  const grandParent = $from.node(-1);
  if (grandParent.type !== type) {
    return false;
  }
  const extensionAttributes = editor.extensionManager.attributes;
  if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
    if ($from.depth === 2 || $from.node(-3).type !== type || $from.index(-2) !== $from.node(-2).childCount - 1) {
      return false;
    }
    if (dispatch) {
      let wrap = import_model10.Fragment.empty;
      const depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
      for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d -= 1) {
        wrap = import_model10.Fragment.from($from.node(d).copy(wrap));
      }
      const depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
      const newNextTypeAttributes2 = {
        ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
        ...overrideAttrs
      };
      const nextType2 = ((_a = type.contentMatch.defaultType) == null ? void 0 : _a.createAndFill(newNextTypeAttributes2)) || void 0;
      wrap = wrap.append(import_model10.Fragment.from(type.createAndFill(null, nextType2) || void 0));
      const start = $from.before($from.depth - (depthBefore - 1));
      tr.replace(start, $from.after(-depthAfter), new import_model10.Slice(wrap, 4 - depthBefore, 0));
      let sel = -1;
      tr.doc.nodesBetween(start, tr.doc.content.size, (n, pos) => {
        if (sel > -1) {
          return false;
        }
        if (n.isTextblock && n.content.size === 0) {
          sel = pos + 1;
        }
      });
      if (sel > -1) {
        tr.setSelection(import_state15.TextSelection.near(tr.doc.resolve(sel)));
      }
      tr.scrollIntoView();
    }
    return true;
  }
  const nextType = $to.pos === $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
  const newTypeAttributes = {
    ...getSplittedAttributes(extensionAttributes, grandParent.type.name, grandParent.attrs),
    ...overrideAttrs
  };
  const newNextTypeAttributes = {
    ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
    ...overrideAttrs
  };
  tr.delete($from.pos, $to.pos);
  const types = nextType ? [{
    type,
    attrs: newTypeAttributes
  }, {
    type: nextType,
    attrs: newNextTypeAttributes
  }] : [{
    type,
    attrs: newTypeAttributes
  }];
  if (!(0, import_transform7.canSplit)(tr.doc, $from.pos, 2)) {
    return false;
  }
  if (dispatch) {
    const {
      selection,
      storedMarks
    } = state;
    const {
      splittableMarks
    } = editor.extensionManager;
    const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
    tr.split($from.pos, 2, types).scrollIntoView();
    if (!marks || !dispatch) {
      return true;
    }
    const filteredMarks = marks.filter(mark => splittableMarks.includes(mark.type.name));
    tr.ensureMarks(filteredMarks);
  }
  return true;
};
var joinListBackwards = (tr, listType) => {
  const list = findParentNode(node => node.type === listType)(tr.selection);
  if (!list) {
    return true;
  }
  const before = tr.doc.resolve(Math.max(0, list.pos - 1)).before(list.depth);
  if (before === void 0) {
    return true;
  }
  const nodeBefore = tr.doc.nodeAt(before);
  const canJoinBackwards = list.node.type === (nodeBefore == null ? void 0 : nodeBefore.type) && (0, import_transform8.canJoin)(tr.doc, list.pos);
  if (!canJoinBackwards) {
    return true;
  }
  tr.join(list.pos);
  return true;
};
var joinListForwards = (tr, listType) => {
  const list = findParentNode(node => node.type === listType)(tr.selection);
  if (!list) {
    return true;
  }
  const after = tr.doc.resolve(list.start).after(list.depth);
  if (after === void 0) {
    return true;
  }
  const nodeAfter = tr.doc.nodeAt(after);
  const canJoinForwards = list.node.type === (nodeAfter == null ? void 0 : nodeAfter.type) && (0, import_transform8.canJoin)(tr.doc, after);
  if (!canJoinForwards) {
    return true;
  }
  tr.join(after);
  return true;
};
var toggleList = (listTypeOrName, itemTypeOrName, keepMarks, attributes = {}) => ({
  editor,
  tr,
  state,
  dispatch,
  chain,
  commands,
  can
}) => {
  const {
    extensions,
    splittableMarks
  } = editor.extensionManager;
  const listType = getNodeType(listTypeOrName, state.schema);
  const itemType = getNodeType(itemTypeOrName, state.schema);
  const {
    selection,
    storedMarks
  } = state;
  const {
    $from,
    $to
  } = selection;
  const range = $from.blockRange($to);
  const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
  if (!range) {
    return false;
  }
  const parentList = findParentNode(node => isList(node.type.name, extensions))(selection);
  if (range.depth >= 1 && parentList && range.depth - parentList.depth <= 1) {
    if (parentList.node.type === listType) {
      return commands.liftListItem(itemType);
    }
    if (isList(parentList.node.type.name, extensions) && listType.validContent(parentList.node.content) && dispatch) {
      return chain().command(() => {
        tr.setNodeMarkup(parentList.pos, listType);
        return true;
      }).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
    }
  }
  if (!keepMarks || !marks || !dispatch) {
    return chain().command(() => {
      const canWrapInList = can().wrapInList(listType, attributes);
      if (canWrapInList) {
        return true;
      }
      return commands.clearNodes();
    }).wrapInList(listType, attributes).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
  }
  return chain().command(() => {
    const canWrapInList = can().wrapInList(listType, attributes);
    const filteredMarks = marks.filter(mark => splittableMarks.includes(mark.type.name));
    tr.ensureMarks(filteredMarks);
    if (canWrapInList) {
      return true;
    }
    return commands.clearNodes();
  }).wrapInList(listType, attributes).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
};
var toggleMark = (typeOrName, attributes = {}, options = {}) => ({
  state,
  commands
}) => {
  const {
    extendEmptyMarkRange = false
  } = options;
  const type = getMarkType(typeOrName, state.schema);
  const isActive2 = isMarkActive(state, type, attributes);
  if (isActive2) {
    return commands.unsetMark(type, {
      extendEmptyMarkRange
    });
  }
  return commands.setMark(type, attributes);
};
var toggleNode = (typeOrName, toggleTypeOrName, attributes = {}) => ({
  state,
  commands
}) => {
  const type = getNodeType(typeOrName, state.schema);
  const toggleType = getNodeType(toggleTypeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  let attributesToCopy;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    attributesToCopy = state.selection.$anchor.parent.attrs;
  }
  if (isActive2) {
    return commands.setNode(toggleType, attributesToCopy);
  }
  return commands.setNode(type, {
    ...attributesToCopy,
    ...attributes
  });
};
var toggleWrap = (typeOrName, attributes = {}) => ({
  state,
  commands
}) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  if (isActive2) {
    return commands.lift(type);
  }
  return commands.wrapIn(type, attributes);
};
var undoInputRule = () => ({
  state,
  dispatch
}) => {
  const plugins = state.plugins;
  for (let i = 0; i < plugins.length; i += 1) {
    const plugin = plugins[i];
    let undoable;
    if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
      if (dispatch) {
        const tr = state.tr;
        const toUndo = undoable.transform;
        for (let j = toUndo.steps.length - 1; j >= 0; j -= 1) {
          tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
        }
        if (undoable.text) {
          const marks = tr.doc.resolve(undoable.from).marks();
          tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
        } else {
          tr.delete(undoable.from, undoable.to);
        }
      }
      return true;
    }
  }
  return false;
};
var unsetAllMarks = () => ({
  tr,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const {
    empty,
    ranges
  } = selection;
  if (empty) {
    return true;
  }
  if (dispatch) {
    ranges.forEach(range => {
      tr.removeMark(range.$from.pos, range.$to.pos);
    });
  }
  return true;
};
var unsetMark = (typeOrName, options = {}) => ({
  tr,
  state,
  dispatch
}) => {
  var _a;
  const {
    extendEmptyMarkRange = false
  } = options;
  const {
    selection
  } = tr;
  const type = getMarkType(typeOrName, state.schema);
  const {
    $from,
    empty,
    ranges
  } = selection;
  if (!dispatch) {
    return true;
  }
  if (empty && extendEmptyMarkRange) {
    let {
      from,
      to
    } = selection;
    const attrs = (_a = $from.marks().find(mark => mark.type === type)) == null ? void 0 : _a.attrs;
    const range = getMarkRange($from, type, attrs);
    if (range) {
      from = range.from;
      to = range.to;
    }
    tr.removeMark(from, to, type);
  } else {
    ranges.forEach(range => {
      tr.removeMark(range.$from.pos, range.$to.pos, type);
    });
  }
  tr.removeStoredMark(type);
  return true;
};
var updateAttributes = (typeOrName, attributes = {}) => ({
  tr,
  state,
  dispatch
}) => {
  let nodeType = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  if (dispatch) {
    tr.selection.ranges.forEach(range => {
      const from = range.$from.pos;
      const to = range.$to.pos;
      let lastPos;
      let lastNode;
      let trimmedFrom;
      let trimmedTo;
      if (tr.selection.empty) {
        state.doc.nodesBetween(from, to, (node, pos) => {
          if (nodeType && nodeType === node.type) {
            trimmedFrom = Math.max(pos, from);
            trimmedTo = Math.min(pos + node.nodeSize, to);
            lastPos = pos;
            lastNode = node;
          }
        });
      } else {
        state.doc.nodesBetween(from, to, (node, pos) => {
          if (pos < from && nodeType && nodeType === node.type) {
            trimmedFrom = Math.max(pos, from);
            trimmedTo = Math.min(pos + node.nodeSize, to);
            lastPos = pos;
            lastNode = node;
          }
          if (pos >= from && pos <= to) {
            if (nodeType && nodeType === node.type) {
              tr.setNodeMarkup(pos, void 0, {
                ...node.attrs,
                ...attributes
              });
            }
            if (markType && node.marks.length) {
              node.marks.forEach(mark => {
                if (markType === mark.type) {
                  const trimmedFrom2 = Math.max(pos, from);
                  const trimmedTo2 = Math.min(pos + node.nodeSize, to);
                  tr.addMark(trimmedFrom2, trimmedTo2, markType.create({
                    ...mark.attrs,
                    ...attributes
                  }));
                }
              });
            }
          }
        });
      }
      if (lastNode) {
        if (lastPos !== void 0) {
          tr.setNodeMarkup(lastPos, void 0, {
            ...lastNode.attrs,
            ...attributes
          });
        }
        if (markType && lastNode.marks.length) {
          lastNode.marks.forEach(mark => {
            if (markType === mark.type) {
              tr.addMark(trimmedFrom, trimmedTo, markType.create({
                ...mark.attrs,
                ...attributes
              }));
            }
          });
        }
      }
    });
  }
  return true;
};
var wrapIn = (typeOrName, attributes = {}) => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  return (0, import_commands16.wrapIn)(type, attributes)(state, dispatch);
};
var wrapInList = (typeOrName, attributes = {}) => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  return (0, import_schema_list3.wrapInList)(type, attributes)(state, dispatch);
};
var Commands = Extension.create({
  name: "commands",
  addCommands() {
    return {
      ...commands_exports
    };
  }
});
var Delete = Extension.create({
  name: "delete",
  onUpdate({
    transaction,
    appendedTransactions
  }) {
    var _a, _b, _c;
    const callback = () => {
      var _a2, _b2, _c2, _d;
      if ((_d = (_c2 = (_b2 = (_a2 = this.editor.options.coreExtensionOptions) == null ? void 0 : _a2.delete) == null ? void 0 : _b2.filterTransaction) == null ? void 0 : _c2.call(_b2, transaction)) != null ? _d : transaction.getMeta("y-sync$")) {
        return;
      }
      const nextTransaction = combineTransactionSteps(transaction.before, [transaction, ...appendedTransactions]);
      const changes = getChangedRanges(nextTransaction);
      changes.forEach(change => {
        if (nextTransaction.mapping.mapResult(change.oldRange.from).deletedAfter && nextTransaction.mapping.mapResult(change.oldRange.to).deletedBefore) {
          nextTransaction.before.nodesBetween(change.oldRange.from, change.oldRange.to, (node, from) => {
            const to = from + node.nodeSize - 2;
            const isFullyWithinRange = change.oldRange.from <= from && to <= change.oldRange.to;
            this.editor.emit("delete", {
              type: "node",
              node,
              from,
              to,
              newFrom: nextTransaction.mapping.map(from),
              newTo: nextTransaction.mapping.map(to),
              deletedRange: change.oldRange,
              newRange: change.newRange,
              partial: !isFullyWithinRange,
              editor: this.editor,
              transaction,
              combinedTransform: nextTransaction
            });
          });
        }
      });
      const mapping = nextTransaction.mapping;
      nextTransaction.steps.forEach((step, index) => {
        var _a3, _b3;
        if (step instanceof import_transform9.RemoveMarkStep) {
          const newStart = mapping.slice(index).map(step.from, -1);
          const newEnd = mapping.slice(index).map(step.to);
          const oldStart = mapping.invert().map(newStart, -1);
          const oldEnd = mapping.invert().map(newEnd);
          const foundBeforeMark = (_a3 = nextTransaction.doc.nodeAt(newStart - 1)) == null ? void 0 : _a3.marks.some(mark => mark.eq(step.mark));
          const foundAfterMark = (_b3 = nextTransaction.doc.nodeAt(newEnd)) == null ? void 0 : _b3.marks.some(mark => mark.eq(step.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: step.mark,
            from: step.from,
            to: step.to,
            deletedRange: {
              from: oldStart,
              to: oldEnd
            },
            newRange: {
              from: newStart,
              to: newEnd
            },
            partial: Boolean(foundAfterMark || foundBeforeMark),
            editor: this.editor,
            transaction,
            combinedTransform: nextTransaction
          });
        }
      });
    };
    if ((_c = (_b = (_a = this.editor.options.coreExtensionOptions) == null ? void 0 : _a.delete) == null ? void 0 : _b.async) != null ? _c : true) {
      setTimeout(callback, 0);
    } else {
      callback();
    }
  }
});
var Drop = Extension.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [new import_state16.Plugin({
      key: new import_state16.PluginKey("tiptapDrop"),
      props: {
        handleDrop: (_, e, slice, moved) => {
          this.editor.emit("drop", {
            editor: this.editor,
            event: e,
            slice,
            moved
          });
        }
      }
    })];
  }
});
var Editable = Extension.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [new import_state17.Plugin({
      key: new import_state17.PluginKey("editable"),
      props: {
        editable: () => this.editor.options.editable
      }
    })];
  }
});
var focusEventsPluginKey = new import_state18.PluginKey("focusEvents");
var FocusEvents = Extension.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const {
      editor
    } = this;
    return [new import_state18.Plugin({
      key: focusEventsPluginKey,
      props: {
        handleDOMEvents: {
          focus: (view, event) => {
            editor.isFocused = true;
            const transaction = editor.state.tr.setMeta("focus", {
              event
            }).setMeta("addToHistory", false);
            view.dispatch(transaction);
            return false;
          },
          blur: (view, event) => {
            editor.isFocused = false;
            const transaction = editor.state.tr.setMeta("blur", {
              event
            }).setMeta("addToHistory", false);
            view.dispatch(transaction);
            return false;
          }
        }
      }
    })];
  }
});
var Keymap = Extension.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const handleBackspace = () => this.editor.commands.first(({
      commands
    }) => [() => commands.undoInputRule(), () => commands.command(({
      tr
    }) => {
      const {
        selection,
        doc
      } = tr;
      const {
        empty,
        $anchor
      } = selection;
      const {
        pos,
        parent
      } = $anchor;
      const $parentPos = $anchor.parent.isTextblock && pos > 0 ? tr.doc.resolve(pos - 1) : $anchor;
      const parentIsIsolating = $parentPos.parent.type.spec.isolating;
      const parentPos = $anchor.pos - $anchor.parentOffset;
      const isAtStart = parentIsIsolating && $parentPos.parent.childCount === 1 ? parentPos === $anchor.pos : import_state19.Selection.atStart(doc).from === pos;
      if (!empty || !parent.type.isTextblock || parent.textContent.length || !isAtStart || isAtStart && $anchor.parent.type.name === "paragraph") {
        return false;
      }
      return commands.clearNodes();
    }), () => commands.deleteSelection(), () => commands.joinBackward(), () => commands.selectNodeBackward()]);
    const handleDelete = () => this.editor.commands.first(({
      commands
    }) => [() => commands.deleteSelection(), () => commands.deleteCurrentNode(), () => commands.joinForward(), () => commands.selectNodeForward()]);
    const handleEnter = () => this.editor.commands.first(({
      commands
    }) => [() => commands.newlineInCode(), () => commands.createParagraphNear(), () => commands.liftEmptyBlock(), () => commands.splitBlock()]);
    const baseKeymap = {
      Enter: handleEnter,
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: handleBackspace,
      "Mod-Backspace": handleBackspace,
      "Shift-Backspace": handleBackspace,
      Delete: handleDelete,
      "Mod-Delete": handleDelete,
      "Mod-a": () => this.editor.commands.selectAll()
    };
    const pcKeymap = {
      ...baseKeymap
    };
    const macKeymap = {
      ...baseKeymap,
      "Ctrl-h": handleBackspace,
      "Alt-Backspace": handleBackspace,
      "Ctrl-d": handleDelete,
      "Ctrl-Alt-Backspace": handleDelete,
      "Alt-Delete": handleDelete,
      "Alt-d": handleDelete,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    if (isiOS() || isMacOS()) {
      return macKeymap;
    }
    return pcKeymap;
  },
  addProseMirrorPlugins() {
    return [new import_state19.Plugin({
      key: new import_state19.PluginKey("clearDocument"),
      appendTransaction: (transactions, oldState, newState) => {
        if (transactions.some(tr2 => tr2.getMeta("composition"))) {
          return;
        }
        const docChanges = transactions.some(transaction => transaction.docChanged) && !oldState.doc.eq(newState.doc);
        const ignoreTr = transactions.some(transaction => transaction.getMeta("preventClearDocument"));
        if (!docChanges || ignoreTr) {
          return;
        }
        const {
          empty,
          from,
          to
        } = oldState.selection;
        const allFrom = import_state19.Selection.atStart(oldState.doc).from;
        const allEnd = import_state19.Selection.atEnd(oldState.doc).to;
        const allWasSelected = from === allFrom && to === allEnd;
        if (empty || !allWasSelected) {
          return;
        }
        const isEmpty = isNodeEmpty(newState.doc);
        if (!isEmpty) {
          return;
        }
        const tr = newState.tr;
        const state = createChainableState({
          state: newState,
          transaction: tr
        });
        const {
          commands
        } = new CommandManager({
          editor: this.editor,
          state
        });
        commands.clearNodes();
        if (!tr.steps.length) {
          return;
        }
        return tr;
      }
    })];
  }
});
var Paste = Extension.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [new import_state20.Plugin({
      key: new import_state20.PluginKey("tiptapPaste"),
      props: {
        handlePaste: (_view, e, slice) => {
          this.editor.emit("paste", {
            editor: this.editor,
            event: e,
            slice
          });
        }
      }
    })];
  }
});
var Tabindex = Extension.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [new import_state21.Plugin({
      key: new import_state21.PluginKey("tabindex"),
      props: {
        attributes: () => this.editor.isEditable ? {
          tabindex: "0"
        } : {}
      }
    })];
  }
});
var NodePos = class _NodePos {
  constructor(pos, editor, isBlock = false, node = null) {
    this.currentNode = null;
    this.actualDepth = null;
    this.isBlock = isBlock;
    this.resolvedPos = pos;
    this.editor = editor;
    this.currentNode = node;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var _a;
    return (_a = this.actualDepth) != null ? _a : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(content) {
    let from = this.from;
    let to = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      from = this.from + 1;
      to = this.to - 1;
    }
    this.editor.commands.insertContentAt({
      from,
      to
    }, content);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    if (this.isBlock) {
      return this.pos;
    }
    return this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    if (this.isBlock) {
      return this.pos + this.size;
    }
    return this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0) {
      return null;
    }
    const parentPos = this.resolvedPos.start(this.resolvedPos.depth - 1);
    const $pos = this.resolvedPos.doc.resolve(parentPos);
    return new _NodePos($pos, this.editor);
  }
  get before() {
    let $pos = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    if ($pos.depth !== this.depth) {
      $pos = this.resolvedPos.doc.resolve(this.from - 3);
    }
    return new _NodePos($pos, this.editor);
  }
  get after() {
    let $pos = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    if ($pos.depth !== this.depth) {
      $pos = this.resolvedPos.doc.resolve(this.to + 3);
    }
    return new _NodePos($pos, this.editor);
  }
  get children() {
    const children = [];
    this.node.content.forEach((node, offset) => {
      const isBlock = node.isBlock && !node.isTextblock;
      const isNonTextAtom = node.isAtom && !node.isText;
      const targetPos = this.pos + offset + (isNonTextAtom ? 0 : 1);
      if (targetPos < 0 || targetPos > this.resolvedPos.doc.nodeSize - 2) {
        return;
      }
      const $pos = this.resolvedPos.doc.resolve(targetPos);
      if (!isBlock && $pos.depth <= this.depth) {
        return;
      }
      const childNodePos = new _NodePos($pos, this.editor, isBlock, isBlock ? node : null);
      if (isBlock) {
        childNodePos.actualDepth = this.depth + 1;
      }
      children.push(new _NodePos($pos, this.editor, isBlock, isBlock ? node : null));
    });
    return children;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const children = this.children;
    return children[children.length - 1] || null;
  }
  closest(selector, attributes = {}) {
    let node = null;
    let currentNode = this.parent;
    while (currentNode && !node) {
      if (currentNode.node.type.name === selector) {
        if (Object.keys(attributes).length > 0) {
          const nodeAttributes = currentNode.node.attrs;
          const attrKeys = Object.keys(attributes);
          for (let index = 0; index < attrKeys.length; index += 1) {
            const key = attrKeys[index];
            if (nodeAttributes[key] !== attributes[key]) {
              break;
            }
          }
        } else {
          node = currentNode;
        }
      }
      currentNode = currentNode.parent;
    }
    return node;
  }
  querySelector(selector, attributes = {}) {
    return this.querySelectorAll(selector, attributes, true)[0] || null;
  }
  querySelectorAll(selector, attributes = {}, firstItemOnly = false) {
    let nodes = [];
    if (!this.children || this.children.length === 0) {
      return nodes;
    }
    const attrKeys = Object.keys(attributes);
    this.children.forEach(childPos => {
      if (firstItemOnly && nodes.length > 0) {
        return;
      }
      if (childPos.node.type.name === selector) {
        const doesAllAttributesMatch = attrKeys.every(key => attributes[key] === childPos.node.attrs[key]);
        if (doesAllAttributesMatch) {
          nodes.push(childPos);
        }
      }
      if (firstItemOnly && nodes.length > 0) {
        return;
      }
      nodes = nodes.concat(childPos.querySelectorAll(selector, attributes, firstItemOnly));
    });
    return nodes;
  }
  setAttribute(attributes) {
    const {
      tr
    } = this.editor.state;
    tr.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...attributes
    });
    this.editor.view.dispatch(tr);
  }
};
var style = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
function createStyleTag(style2, nonce, suffix) {
  const tiptapStyleTag = document.querySelector(`style[data-tiptap-style${suffix ? `-${suffix}` : ""}]`);
  if (tiptapStyleTag !== null) {
    return tiptapStyleTag;
  }
  const styleNode = document.createElement("style");
  if (nonce) {
    styleNode.setAttribute("nonce", nonce);
  }
  styleNode.setAttribute(`data-tiptap-style${suffix ? `-${suffix}` : ""}`, "");
  styleNode.innerHTML = style2;
  document.getElementsByTagName("head")[0].appendChild(styleNode);
  return styleNode;
}
var Editor = class extends EventEmitter {
  constructor(options = {}) {
    super();
    this.css = null;
    this.editorView = null;
    this.isFocused = false;
    this.isInitialized = false;
    this.extensionStorage = {};
    this.instanceId = Math.random().toString(36).slice(2, 9);
    this.options = {
      element: typeof document !== "undefined" ? document.createElement("div") : null,
      content: "",
      injectCSS: true,
      injectNonce: void 0,
      extensions: [],
      autofocus: false,
      editable: true,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: true,
      enablePasteRules: true,
      enableCoreExtensions: true,
      enableContentCheck: false,
      emitContentError: false,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({
        error
      }) => {
        throw error;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null
    };
    this.isCapturingTransaction = false;
    this.capturedTransaction = null;
    this.setOptions(options);
    this.createExtensionManager();
    this.createCommandManager();
    this.createSchema();
    this.on("beforeCreate", this.options.onBeforeCreate);
    this.emit("beforeCreate", {
      editor: this
    });
    this.on("contentError", this.options.onContentError);
    this.on("create", this.options.onCreate);
    this.on("update", this.options.onUpdate);
    this.on("selectionUpdate", this.options.onSelectionUpdate);
    this.on("transaction", this.options.onTransaction);
    this.on("focus", this.options.onFocus);
    this.on("blur", this.options.onBlur);
    this.on("destroy", this.options.onDestroy);
    this.on("drop", ({
      event,
      slice,
      moved
    }) => this.options.onDrop(event, slice, moved));
    this.on("paste", ({
      event,
      slice
    }) => this.options.onPaste(event, slice));
    this.on("delete", this.options.onDelete);
    const initialDoc = this.createDoc();
    const selection = resolveFocusPosition(initialDoc, this.options.autofocus);
    this.editorState = import_state.EditorState.create({
      doc: initialDoc,
      schema: this.schema,
      selection: selection || void 0
    });
    if (this.options.element) {
      this.mount(this.options.element);
    }
  }
  mount(el) {
    if (typeof document === "undefined") {
      throw new Error(`[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.`);
    }
    this.createView(el);
    window.setTimeout(() => {
      if (this.isDestroyed) {
        return;
      }
      this.commands.focus(this.options.autofocus);
      this.emit("create", {
        editor: this
      });
      this.isInitialized = true;
    }, 0);
  }
  unmount() {
    if (this.editorView) {
      const dom = this.editorView.dom;
      if (dom == null ? void 0 : dom.editor) {
        delete dom.editor;
      }
      this.editorView.destroy();
    }
    this.editorView = null;
    this.isInitialized = false;
    if (this.css) {
      try {
        if (typeof this.css.remove === "function") {
          this.css.remove();
        } else if (this.css.parentNode) {
          this.css.parentNode.removeChild(this.css);
        }
      } catch (error) {
        console.warn("Failed to remove CSS element:", error);
      }
    }
    this.css = null;
  }
  get storage() {
    return this.extensionStorage;
  }
  get commands() {
    return this.commandManager.commands;
  }
  chain() {
    return this.commandManager.chain();
  }
  can() {
    return this.commandManager.can();
  }
  injectCSS() {
    if (this.options.injectCSS && typeof document !== "undefined") {
      this.css = createStyleTag(style, this.options.injectNonce);
    }
  }
  setOptions(options = {}) {
    this.options = {
      ...this.options,
      ...options
    };
    if (!this.editorView || !this.state || this.isDestroyed) {
      return;
    }
    if (this.options.editorProps) {
      this.view.setProps(this.options.editorProps);
    }
    this.view.updateState(this.state);
  }
  setEditable(editable, emitUpdate = true) {
    this.setOptions({
      editable
    });
    if (emitUpdate) {
      this.emit("update", {
        editor: this,
        transaction: this.state.tr,
        appendedTransactions: []
      });
    }
  }
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  get view() {
    if (this.editorView) {
      return this.editorView;
    }
    return new Proxy({
      state: this.editorState,
      updateState: state => {
        this.editorState = state;
      },
      dispatch: tr => {
        this.editorState = this.state.apply(tr);
      },
      composing: false,
      dragging: null,
      editable: true,
      isDestroyed: false
    }, {
      get: (obj, key) => {
        if (key === "state") {
          return this.editorState;
        }
        if (key in obj) {
          return Reflect.get(obj, key);
        }
        throw new Error(`[tiptap error]: The editor view is not available. Cannot access view['${key}']. The editor may not be mounted yet.`);
      }
    });
  }
  get state() {
    if (this.editorView) {
      this.editorState = this.view.state;
    }
    return this.editorState;
  }
  registerPlugin(plugin, handlePlugins) {
    const plugins = isFunction(handlePlugins) ? handlePlugins(plugin, [...this.state.plugins]) : [...this.state.plugins, plugin];
    const state = this.state.reconfigure({
      plugins
    });
    this.view.updateState(state);
    return state;
  }
  unregisterPlugin(nameOrPluginKeyToRemove) {
    if (this.isDestroyed) {
      return void 0;
    }
    const prevPlugins = this.state.plugins;
    let plugins = prevPlugins;
    [].concat(nameOrPluginKeyToRemove).forEach(nameOrPluginKey => {
      const name = typeof nameOrPluginKey === "string" ? `${nameOrPluginKey}$` : nameOrPluginKey.key;
      plugins = plugins.filter(plugin => !plugin.key.startsWith(name));
    });
    if (prevPlugins.length === plugins.length) {
      return void 0;
    }
    const state = this.state.reconfigure({
      plugins
    });
    this.view.updateState(state);
    return state;
  }
  createExtensionManager() {
    var _a, _b;
    const coreExtensions = this.options.enableCoreExtensions ? [Editable, ClipboardTextSerializer.configure({
      blockSeparator: (_b = (_a = this.options.coreExtensionOptions) == null ? void 0 : _a.clipboardTextSerializer) == null ? void 0 : _b.blockSeparator
    }), Commands, FocusEvents, Keymap, Tabindex, Drop, Paste, Delete].filter(ext => {
      if (typeof this.options.enableCoreExtensions === "object") {
        return this.options.enableCoreExtensions[ext.name] !== false;
      }
      return true;
    }) : [];
    const allExtensions = [...coreExtensions, ...this.options.extensions].filter(extension => {
      return ["extension", "node", "mark"].includes(extension == null ? void 0 : extension.type);
    });
    this.extensionManager = new ExtensionManager(allExtensions, this);
  }
  createCommandManager() {
    this.commandManager = new CommandManager({
      editor: this
    });
  }
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  createDoc() {
    let doc;
    try {
      doc = createDocument(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck
      });
    } catch (e) {
      if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) {
        throw e;
      }
      this.emit("contentError", {
        editor: this,
        error: e,
        disableCollaboration: () => {
          if ("collaboration" in this.storage && typeof this.storage.collaboration === "object" && this.storage.collaboration) {
            ;
            this.storage.collaboration.isDisabled = true;
          }
          this.options.extensions = this.options.extensions.filter(extension => extension.name !== "collaboration");
          this.createExtensionManager();
        }
      });
      doc = createDocument(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: false
      });
    }
    return doc;
  }
  createView(element) {
    var _a;
    this.editorView = new import_view.EditorView(element, {
      ...this.options.editorProps,
      attributes: {
        role: "textbox",
        ...((_a = this.options.editorProps) == null ? void 0 : _a.attributes)
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: this.editorState
    });
    const newState = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(newState);
    this.createNodeViews();
    this.prependClass();
    this.injectCSS();
    const dom = this.view.dom;
    dom.editor = this;
  }
  createNodeViews() {
    if (this.view.isDestroyed) {
      return;
    }
    this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(fn) {
    this.isCapturingTransaction = true;
    fn();
    this.isCapturingTransaction = false;
    const tr = this.capturedTransaction;
    this.capturedTransaction = null;
    return tr;
  }
  dispatchTransaction(transaction) {
    if (this.view.isDestroyed) {
      return;
    }
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = transaction;
        return;
      }
      transaction.steps.forEach(step => {
        var _a;
        return (_a = this.capturedTransaction) == null ? void 0 : _a.step(step);
      });
      return;
    }
    const {
      state,
      transactions
    } = this.state.applyTransaction(transaction);
    const selectionHasChanged = !this.state.selection.eq(state.selection);
    const rootTrWasApplied = transactions.includes(transaction);
    const prevState = this.state;
    this.emit("beforeTransaction", {
      editor: this,
      transaction,
      nextState: state
    });
    if (!rootTrWasApplied) {
      return;
    }
    this.view.updateState(state);
    this.emit("transaction", {
      editor: this,
      transaction,
      appendedTransactions: transactions.slice(1)
    });
    if (selectionHasChanged) {
      this.emit("selectionUpdate", {
        editor: this,
        transaction
      });
    }
    const mostRecentFocusTr = transactions.findLast(tr => tr.getMeta("focus") || tr.getMeta("blur"));
    const focus2 = mostRecentFocusTr == null ? void 0 : mostRecentFocusTr.getMeta("focus");
    const blur2 = mostRecentFocusTr == null ? void 0 : mostRecentFocusTr.getMeta("blur");
    if (focus2) {
      this.emit("focus", {
        editor: this,
        event: focus2.event,
        transaction: mostRecentFocusTr
      });
    }
    if (blur2) {
      this.emit("blur", {
        editor: this,
        event: blur2.event,
        transaction: mostRecentFocusTr
      });
    }
    if (transaction.getMeta("preventUpdate") || !transactions.some(tr => tr.docChanged) || prevState.doc.eq(state.doc)) {
      return;
    }
    this.emit("update", {
      editor: this,
      transaction,
      appendedTransactions: transactions.slice(1)
    });
  }
  getAttributes(nameOrType) {
    return getAttributes(this.state, nameOrType);
  }
  isActive(nameOrAttributes, attributesOrUndefined) {
    const name = typeof nameOrAttributes === "string" ? nameOrAttributes : null;
    const attributes = typeof nameOrAttributes === "string" ? attributesOrUndefined : nameOrAttributes;
    return isActive(this.state, name, attributes);
  }
  getJSON() {
    return this.state.doc.toJSON();
  }
  getHTML() {
    return getHTMLFromFragment(this.state.doc.content, this.schema);
  }
  getText(options) {
    const {
      blockSeparator = "\n\n",
      textSerializers = {}
    } = options || {};
    return getText(this.state.doc, {
      blockSeparator,
      textSerializers: {
        ...getTextSerializersFromSchema(this.schema),
        ...textSerializers
      }
    });
  }
  get isEmpty() {
    return isNodeEmpty(this.state.doc);
  }
  destroy() {
    this.emit("destroy");
    this.unmount();
    this.removeAllListeners();
  }
  get isDestroyed() {
    var _a, _b;
    return (_b = (_a = this.editorView) == null ? void 0 : _a.isDestroyed) != null ? _b : true;
  }
  $node(selector, attributes) {
    var _a;
    return ((_a = this.$doc) == null ? void 0 : _a.querySelector(selector, attributes)) || null;
  }
  $nodes(selector, attributes) {
    var _a;
    return ((_a = this.$doc) == null ? void 0 : _a.querySelectorAll(selector, attributes)) || null;
  }
  $pos(pos) {
    const $pos = this.state.doc.resolve(pos);
    return new NodePos($pos, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function markInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match);
      if (attributes === false || attributes === null) {
        return null;
      }
      const {
        tr
      } = state;
      const captureGroup = match[match.length - 1];
      const fullMatch = match[0];
      if (captureGroup) {
        const startSpaces = fullMatch.search(/\S/);
        const textStart = range.from + fullMatch.indexOf(captureGroup);
        const textEnd = textStart + captureGroup.length;
        const excludedMarks = getMarksBetween(range.from, range.to, state.doc).filter(item => {
          const excluded = item.mark.type.excluded;
          return excluded.find(type => type === config.type && type !== item.mark.type);
        }).filter(item => item.to > textStart);
        if (excludedMarks.length) {
          return null;
        }
        if (textEnd < range.to) {
          tr.delete(textEnd, range.to);
        }
        if (textStart > range.from) {
          tr.delete(range.from + startSpaces, textStart);
        }
        const markEnd = range.from + startSpaces + captureGroup.length;
        tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
        tr.removeStoredMark(config.type);
      }
    }
  });
}
function nodeInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
      const {
        tr
      } = state;
      const start = range.from;
      let end = range.to;
      const newNode = config.type.create(attributes);
      if (match[1]) {
        const offset = match[0].lastIndexOf(match[1]);
        let matchStart = start + offset;
        if (matchStart > end) {
          matchStart = end;
        } else {
          end = matchStart + match[1].length;
        }
        const lastChar = match[0][match[0].length - 1];
        tr.insertText(lastChar, start + match[0].length - 1);
        tr.replaceWith(matchStart, end, newNode);
      } else if (match[0]) {
        const insertionStart = config.type.isInline ? start : start - 1;
        tr.insert(insertionStart, config.type.create(attributes)).delete(tr.mapping.map(start), tr.mapping.map(end));
      }
      tr.scrollIntoView();
    }
  });
}
function textblockTypeInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      const $start = state.doc.resolve(range.from);
      const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
      if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), config.type)) {
        return null;
      }
      state.tr.delete(range.from, range.to).setBlockType(range.from, range.from, config.type, attributes);
    }
  });
}
function textInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      let insert = config.replace;
      let start = range.from;
      const end = range.to;
      if (match[1]) {
        const offset = match[0].lastIndexOf(match[1]);
        insert += match[0].slice(offset + match[1].length);
        start += offset;
        const cutOff = start - end;
        if (cutOff > 0) {
          insert = match[0].slice(offset - cutOff, offset) + insert;
          start = end;
        }
      }
      state.tr.insertText(insert, start, end);
    }
  });
}
function wrappingInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match,
      chain
    }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
      const tr = state.tr.delete(range.from, range.to);
      const $start = tr.doc.resolve(range.from);
      const blockRange = $start.blockRange();
      const wrapping = blockRange && (0, import_transform10.findWrapping)(blockRange, config.type, attributes);
      if (!wrapping) {
        return null;
      }
      tr.wrap(blockRange, wrapping);
      if (config.keepMarks && config.editor) {
        const {
          selection,
          storedMarks
        } = state;
        const {
          splittableMarks
        } = config.editor.extensionManager;
        const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
        if (marks) {
          const filteredMarks = marks.filter(mark => splittableMarks.includes(mark.type.name));
          tr.ensureMarks(filteredMarks);
        }
      }
      if (config.keepAttributes) {
        const nodeType = config.type.name === "bulletList" || config.type.name === "orderedList" ? "listItem" : "taskList";
        chain().updateAttributes(nodeType, attributes).run();
      }
      const before = tr.doc.resolve(range.from - 1).nodeBefore;
      if (before && before.type === config.type && (0, import_transform10.canJoin)(tr.doc, range.from - 1) && (!config.joinPredicate || config.joinPredicate(match, before))) {
        tr.join(range.from - 1);
      }
    }
  });
}
function Fragment6(props) {
  return props.children;
}
var h = (tag, attributes) => {
  if (tag === "slot") {
    return 0;
  }
  if (tag instanceof Function) {
    return tag(attributes);
  }
  const {
    children,
    ...rest
  } = attributes != null ? attributes : {};
  if (tag === "svg") {
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  }
  return [tag, rest, children];
};
function canInsertNode(state, nodeType) {
  const {
    selection
  } = state;
  const {
    $from
  } = selection;
  if (selection instanceof import_state22.NodeSelection) {
    const index = $from.index();
    const parent = $from.parent;
    return parent.canReplaceWith(index, index + 1, nodeType);
  }
  let depth = $from.depth;
  while (depth >= 0) {
    const index = $from.index(depth);
    const parent = $from.node(depth);
    const match = parent.contentMatchAt(index);
    if (match.matchType(nodeType)) {
      return true;
    }
    depth -= 1;
  }
  return false;
}
function escapeForRegEx(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function isString(value) {
  return typeof value === "string";
}
function updateMarkViewAttributes(checkMark, editor, attrs = {}) {
  const {
    state
  } = editor;
  const {
    doc,
    tr
  } = state;
  const thisMark = checkMark;
  doc.descendants((node, pos) => {
    const from = tr.mapping.map(pos);
    const to = tr.mapping.map(pos) + node.nodeSize;
    let foundMark = null;
    node.marks.forEach(mark => {
      if (mark !== thisMark) {
        return false;
      }
      foundMark = mark;
    });
    if (!foundMark) {
      return;
    }
    let needsUpdate = false;
    Object.keys(attrs).forEach(k => {
      if (attrs[k] !== foundMark.attrs[k]) {
        needsUpdate = true;
      }
    });
    if (needsUpdate) {
      const updatedMark = checkMark.type.create({
        ...checkMark.attrs,
        ...attrs
      });
      tr.removeMark(from, to, checkMark.type);
      tr.addMark(from, to, updatedMark);
    }
  });
  if (tr.docChanged) {
    editor.view.dispatch(tr);
  }
}
var MarkView = class {
  constructor(component, props, options) {
    this.component = component;
    this.editor = props.editor;
    this.options = {
      ...options
    };
    this.mark = props.mark;
    this.HTMLAttributes = props.HTMLAttributes;
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  updateAttributes(attrs, checkMark) {
    updateMarkViewAttributes(checkMark || this.mark, this.editor, attrs);
  }
  ignoreMutation(mutation) {
    if (!this.dom || !this.contentDOM) {
      return true;
    }
    if (typeof this.options.ignoreMutation === "function") {
      return this.options.ignoreMutation({
        mutation
      });
    }
    if (mutation.type === "selection") {
      return false;
    }
    if (this.dom.contains(mutation.target) && mutation.type === "childList" && (isiOS() || isAndroid()) && this.editor.isFocused) {
      const changedNodes = [...Array.from(mutation.addedNodes), ...Array.from(mutation.removedNodes)];
      if (changedNodes.every(node => node.isContentEditable)) {
        return false;
      }
    }
    if (this.contentDOM === mutation.target && mutation.type === "attributes") {
      return true;
    }
    if (this.contentDOM.contains(mutation.target)) {
      return false;
    }
    return true;
  }
};
var Node3 = class _Node extends Extendable {
  constructor() {
    super(...arguments);
    this.type = "node";
  }
  static create(config = {}) {
    const resolvedConfig = typeof config === "function" ? config() : config;
    return new _Node(resolvedConfig);
  }
  configure(options) {
    return super.configure(options);
  }
  extend(extendedConfig) {
    const resolvedConfig = typeof extendedConfig === "function" ? extendedConfig() : extendedConfig;
    return super.extend(resolvedConfig);
  }
};
var NodeView = class {
  constructor(component, props, options) {
    this.isDragging = false;
    this.component = component;
    this.editor = props.editor;
    this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...options
    };
    this.extension = props.extension;
    this.node = props.node;
    this.decorations = props.decorations;
    this.innerDecorations = props.innerDecorations;
    this.view = props.view;
    this.HTMLAttributes = props.HTMLAttributes;
    this.getPos = props.getPos;
    this.mount();
  }
  mount() {
    return;
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(event) {
    var _a, _b, _c, _d, _e, _f, _g;
    const {
      view
    } = this.editor;
    const target = event.target;
    const dragHandle = target.nodeType === 3 ? (_a = target.parentElement) == null ? void 0 : _a.closest("[data-drag-handle]") : target.closest("[data-drag-handle]");
    if (!this.dom || ((_b = this.contentDOM) == null ? void 0 : _b.contains(target)) || !dragHandle) {
      return;
    }
    let x = 0;
    let y = 0;
    if (this.dom !== dragHandle) {
      const domBox = this.dom.getBoundingClientRect();
      const handleBox = dragHandle.getBoundingClientRect();
      const offsetX = (_d = event.offsetX) != null ? _d : (_c = event.nativeEvent) == null ? void 0 : _c.offsetX;
      const offsetY = (_f = event.offsetY) != null ? _f : (_e = event.nativeEvent) == null ? void 0 : _e.offsetY;
      x = handleBox.x - domBox.x + offsetX;
      y = handleBox.y - domBox.y + offsetY;
    }
    const clonedNode = this.dom.cloneNode(true);
    (_g = event.dataTransfer) == null ? void 0 : _g.setDragImage(clonedNode, x, y);
    const pos = this.getPos();
    if (typeof pos !== "number") {
      return;
    }
    const selection = import_state23.NodeSelection.create(view.state.doc, pos);
    const transaction = view.state.tr.setSelection(selection);
    view.dispatch(transaction);
  }
  stopEvent(event) {
    var _a;
    if (!this.dom) {
      return false;
    }
    if (typeof this.options.stopEvent === "function") {
      return this.options.stopEvent({
        event
      });
    }
    const target = event.target;
    const isInElement = this.dom.contains(target) && !((_a = this.contentDOM) == null ? void 0 : _a.contains(target));
    if (!isInElement) {
      return false;
    }
    const isDragEvent = event.type.startsWith("drag");
    const isDropEvent = event.type === "drop";
    const isInput = ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(target.tagName) || target.isContentEditable;
    if (isInput && !isDropEvent && !isDragEvent) {
      return true;
    }
    const {
      isEditable
    } = this.editor;
    const {
      isDragging
    } = this;
    const isDraggable = !!this.node.type.spec.draggable;
    const isSelectable = import_state23.NodeSelection.isSelectable(this.node);
    const isCopyEvent = event.type === "copy";
    const isPasteEvent = event.type === "paste";
    const isCutEvent = event.type === "cut";
    const isClickEvent = event.type === "mousedown";
    if (!isDraggable && isSelectable && isDragEvent && event.target === this.dom) {
      event.preventDefault();
    }
    if (isDraggable && isDragEvent && !isDragging && event.target === this.dom) {
      event.preventDefault();
      return false;
    }
    if (isDraggable && isEditable && !isDragging && isClickEvent) {
      const dragHandle = target.closest("[data-drag-handle]");
      const isValidDragHandle = dragHandle && (this.dom === dragHandle || this.dom.contains(dragHandle));
      if (isValidDragHandle) {
        this.isDragging = true;
        document.addEventListener("dragend", () => {
          this.isDragging = false;
        }, {
          once: true
        });
        document.addEventListener("drop", () => {
          this.isDragging = false;
        }, {
          once: true
        });
        document.addEventListener("mouseup", () => {
          this.isDragging = false;
        }, {
          once: true
        });
      }
    }
    if (isDragging || isDropEvent || isCopyEvent || isPasteEvent || isCutEvent || isClickEvent && isSelectable) {
      return false;
    }
    return true;
  }
  ignoreMutation(mutation) {
    if (!this.dom || !this.contentDOM) {
      return true;
    }
    if (typeof this.options.ignoreMutation === "function") {
      return this.options.ignoreMutation({
        mutation
      });
    }
    if (this.node.isLeaf || this.node.isAtom) {
      return true;
    }
    if (mutation.type === "selection") {
      return false;
    }
    if (this.dom.contains(mutation.target) && mutation.type === "childList" && (isiOS() || isAndroid()) && this.editor.isFocused) {
      const changedNodes = [...Array.from(mutation.addedNodes), ...Array.from(mutation.removedNodes)];
      if (changedNodes.every(node => node.isContentEditable)) {
        return false;
      }
    }
    if (this.contentDOM === mutation.target && mutation.type === "attributes") {
      return true;
    }
    if (this.contentDOM.contains(mutation.target)) {
      return false;
    }
    return true;
  }
  updateAttributes(attributes) {
    this.editor.commands.command(({
      tr
    }) => {
      const pos = this.getPos();
      if (typeof pos !== "number") {
        return false;
      }
      tr.setNodeMarkup(pos, void 0, {
        ...this.node.attrs,
        ...attributes
      });
      return true;
    });
  }
  deleteNode() {
    const from = this.getPos();
    if (typeof from !== "number") {
      return;
    }
    const to = from + this.node.nodeSize;
    this.editor.commands.deleteRange({
      from,
      to
    });
  }
};
function markPasteRule(config) {
  return new PasteRule({
    find: config.find,
    handler: ({
      state,
      range,
      match,
      pasteEvent
    }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match, pasteEvent);
      if (attributes === false || attributes === null) {
        return null;
      }
      const {
        tr
      } = state;
      const captureGroup = match[match.length - 1];
      const fullMatch = match[0];
      let markEnd = range.to;
      if (captureGroup) {
        const startSpaces = fullMatch.search(/\S/);
        const textStart = range.from + fullMatch.indexOf(captureGroup);
        const textEnd = textStart + captureGroup.length;
        const excludedMarks = getMarksBetween(range.from, range.to, state.doc).filter(item => {
          const excluded = item.mark.type.excluded;
          return excluded.find(type => type === config.type && type !== item.mark.type);
        }).filter(item => item.to > textStart);
        if (excludedMarks.length) {
          return null;
        }
        if (textEnd < range.to) {
          tr.delete(textEnd, range.to);
        }
        if (textStart > range.from) {
          tr.delete(range.from + startSpaces, textStart);
        }
        markEnd = range.from + startSpaces + captureGroup.length;
        tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
        tr.removeStoredMark(config.type);
      }
    }
  });
}
function nodePasteRule(config) {
  return new PasteRule({
    find: config.find,
    handler({
      match,
      chain,
      range,
      pasteEvent
    }) {
      const attributes = callOrReturn(config.getAttributes, void 0, match, pasteEvent);
      const content = callOrReturn(config.getContent, void 0, attributes);
      if (attributes === false || attributes === null) {
        return null;
      }
      const node = {
        type: config.type.name,
        attrs: attributes
      };
      if (content) {
        node.content = content;
      }
      if (match.input) {
        chain().deleteRange(range).insertContentAt(range.from, node);
      }
    }
  });
}
function textPasteRule(config) {
  return new PasteRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      let insert = config.replace;
      let start = range.from;
      const end = range.to;
      if (match[1]) {
        const offset = match[0].lastIndexOf(match[1]);
        insert += match[0].slice(offset + match[1].length);
        start += offset;
        const cutOff = start - end;
        if (cutOff > 0) {
          insert = match[0].slice(offset - cutOff, offset) + insert;
          start = end;
        }
      }
      state.tr.insertText(insert, start, end);
    }
  });
}
var Tracker = class {
  constructor(transaction) {
    this.transaction = transaction;
    this.currentStep = this.transaction.steps.length;
  }
  map(position) {
    let deleted = false;
    const mappedPosition = this.transaction.steps.slice(this.currentStep).reduce((newPosition, step) => {
      const mapResult = step.getMap().mapResult(newPosition);
      if (mapResult.deleted) {
        deleted = true;
      }
      return mapResult.pos;
    }, position);
    return {
      position: mappedPosition,
      deleted
    };
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2NvcmUuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FZGl0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbnNpb25NYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jb21iaW5lVHJhbnNhY3Rpb25TdGVwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvY3JlYXRlTm9kZUZyb21Db250ZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZW5lcmF0ZUhUTUwudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEhUTUxGcm9tRnJhZ21lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYUJ5UmVzb2x2ZWRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZW5lcmF0ZUpTT04udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlVGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNOb2RlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc1RleHRTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3Jlc29sdmVGb2N1c1Bvc2l0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zZWxlY3Rpb25Ub0luc2VydGlvbkVuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL1Bhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvY2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jbGVhck5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY3JlYXRlUGFyYWdyYXBoTmVhci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2N1dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2RlbGV0ZVNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2V4aXRDb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZXh0ZW5kTWFya1JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvaW5zZXJ0Q29udGVudEF0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5JdGVtQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luSXRlbUZvcndhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luVGV4dGJsb2NrQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luVGV4dGJsb2NrRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9saWZ0RW1wdHlCbG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnRMaXN0SXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL25ld2xpbmVJbkNvZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RBbGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3ROb2RlQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3ROb2RlRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFBhcmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RUZXh0YmxvY2tFbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RUZXh0YmxvY2tTdGFydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXROb2RlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0VGV4dFNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NpbmtMaXN0SXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NwbGl0QmxvY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zcGxpdExpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3dyYXBJbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3dyYXBJbkxpc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2RlbGV0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZHJvcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZWRpdGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2ZvY3VzRXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9rZXltYXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL3Bhc3RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy90YWJpbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvd3JhcHBpbmdJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvY2FuSW5zZXJ0Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL05vZGVWaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVDaGFpbmFibGVTdGF0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0NvbW1hbmRNYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvRXZlbnRFbWl0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2VsZW1lbnRGcm9tU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVEb2N1bWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZGVmYXVsdEJsb2NrQXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRDaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZENoaWxkcmVuSW5SYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZFBhcmVudE5vZGVDbG9zZXN0VG9Qb3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRQYXJlbnROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRFeHRlbnNpb25GaWVsZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmxhdHRlbkV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNGdW5jdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jYWxsT3JSZXR1cm4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNFbXB0eU9iamVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvc3BsaXRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRBdHRyaWJ1dGVzRnJvbUV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWVyZ2VBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRSZW5kZXJlZEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZnJvbVN0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaW5qZWN0RXh0ZW5zaW9uQXR0cmlidXRlc1RvUGFyc2VSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2ZpbmREdXBsaWNhdGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zb3J0RXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcmVzb2x2ZUV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dEJldHdlZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHRTZXJpYWxpemVyc0Zyb21TY2hlbWEudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtUeXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRNYXJrQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0Tm9kZVR5cGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE5vZGVBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTY2hlbWFUeXBlTmFtZUJ5TmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0QXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9yZW1vdmVEdXBsaWNhdGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRDaGFuZ2VkUmFuZ2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXREZWJ1Z0pTT04udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNSZWdFeHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvb2JqZWN0SW5jbHVkZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtSYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya3NCZXR3ZWVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXROb2RlQXRQb3NpdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hVHlwZUJ5TmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U3BsaXR0ZWRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRUZXh0Q29udGVudEZyb21Ob2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNNYXJrQWN0aXZlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc05vZGVBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQWN0aXZlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0F0RW5kT2ZOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0F0U3RhcnRPZk5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzRXh0ZW5zaW9uUnVsZXNFbmFibGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0xpc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTm9kZUVtcHR5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21pbk1heC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcG9zVG9ET01SZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9yZXdyaXRlVW5rbm93bkNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNQbGFpbk9iamVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tZXJnZURlZXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbmRhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc051bWJlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2JsdXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jbGVhckNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jb21tYW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlQ3VycmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlUmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9lbnRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2ZpcnN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzQW5kcm9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc2lPUy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2ZvY3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZm9yRWFjaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2luc2VydENvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNNYWNPUy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2tleWJvYXJkU2hvcnRjdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZGVsZXRlUHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9yZXNldEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zY3JvbGxJbnRvVmlldy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldENvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRNYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0TWV0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3RvZ2dsZU1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlV3JhcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3VuZG9JbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91bnNldEFsbE1hcmtzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdW5zZXRNYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdXBkYXRlQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvY29tbWFuZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9Ob2RlUG9zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvc3R5bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvY3JlYXRlU3R5bGVUYWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL21hcmtJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL25vZGVJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL3RleHRibG9ja1R5cGVJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL3RleHRJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9qc3gtcnVudGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9lc2NhcGVGb3JSZWdFeC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1N0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL01hcmtWaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvbWFya1Bhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvbm9kZVBhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvdGV4dFBhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL1RyYWNrZXIudHMiXSwibmFtZXMiOlsiY29yZV8zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJDb21tYW5kTWFuYWdlciIsIkVkaXRvciIsIkV4dGVuc2lvbiIsIkZyYWdtZW50IiwiRnJhZ21lbnQ2IiwiSW5wdXRSdWxlIiwiTWFyayIsIk1hcmtWaWV3IiwiTm9kZSIsIk5vZGUzIiwiTm9kZVBvcyIsIk5vZGVWaWV3IiwiUGFzdGVSdWxlIiwiVHJhY2tlciIsImNhbGxPclJldHVybiIsImNhbkluc2VydE5vZGUiLCJjb21iaW5lVHJhbnNhY3Rpb25TdGVwcyIsImNyZWF0ZUNoYWluYWJsZVN0YXRlIiwiY3JlYXRlRG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaCIsImNyZWF0ZU5vZGVGcm9tQ29udGVudCIsImNyZWF0ZVN0eWxlVGFnIiwiZGVmYXVsdEJsb2NrQXQiLCJkZWxldGVQcm9wcyIsImVsZW1lbnRGcm9tU3RyaW5nIiwiZXNjYXBlRm9yUmVnRXgiLCJleHRlbnNpb25zIiwiZXh0ZW5zaW9uc19leHBvcnRzIiwiZmluZENoaWxkcmVuIiwiZmluZENoaWxkcmVuSW5SYW5nZSIsImZpbmREdXBsaWNhdGVzIiwiZmluZFBhcmVudE5vZGUiLCJmaW5kUGFyZW50Tm9kZUNsb3Nlc3RUb1BvcyIsImZsYXR0ZW5FeHRlbnNpb25zIiwiZnJvbVN0cmluZyIsImdlbmVyYXRlSFRNTCIsImdlbmVyYXRlSlNPTiIsImdlbmVyYXRlVGV4dCIsImdldEF0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGVzRnJvbUV4dGVuc2lvbnMiLCJnZXRDaGFuZ2VkUmFuZ2VzIiwiZ2V0RGVidWdKU09OIiwiZ2V0RXh0ZW5zaW9uRmllbGQiLCJnZXRIVE1MRnJvbUZyYWdtZW50IiwiZ2V0TWFya0F0dHJpYnV0ZXMiLCJnZXRNYXJrUmFuZ2UiLCJnZXRNYXJrVHlwZSIsImdldE1hcmtzQmV0d2VlbiIsImdldE5vZGVBdFBvc2l0aW9uIiwiZ2V0Tm9kZUF0dHJpYnV0ZXMiLCJnZXROb2RlVHlwZSIsImdldFJlbmRlcmVkQXR0cmlidXRlcyIsImdldFNjaGVtYSIsImdldFNjaGVtYUJ5UmVzb2x2ZWRFeHRlbnNpb25zIiwiZ2V0U2NoZW1hVHlwZUJ5TmFtZSIsImdldFNjaGVtYVR5cGVOYW1lQnlOYW1lIiwiZ2V0U3BsaXR0ZWRBdHRyaWJ1dGVzIiwiZ2V0VGV4dCIsImdldFRleHRCZXR3ZWVuIiwiZ2V0VGV4dENvbnRlbnRGcm9tTm9kZXMiLCJnZXRUZXh0U2VyaWFsaXplcnNGcm9tU2NoZW1hIiwiaW5qZWN0RXh0ZW5zaW9uQXR0cmlidXRlc1RvUGFyc2VSdWxlIiwiaW5wdXRSdWxlc1BsdWdpbiIsImlzQWN0aXZlIiwiaXNBbmRyb2lkIiwiaXNBdEVuZE9mTm9kZSIsImlzQXRTdGFydE9mTm9kZSIsImlzRW1wdHlPYmplY3QiLCJpc0V4dGVuc2lvblJ1bGVzRW5hYmxlZCIsImlzRnVuY3Rpb24iLCJpc0xpc3QiLCJpc01hY09TIiwiaXNNYXJrQWN0aXZlIiwiaXNOb2RlQWN0aXZlIiwiaXNOb2RlRW1wdHkiLCJpc05vZGVTZWxlY3Rpb24iLCJpc051bWJlciIsImlzUGxhaW5PYmplY3QiLCJpc1JlZ0V4cCIsImlzU3RyaW5nIiwiaXNUZXh0U2VsZWN0aW9uIiwiaXNpT1MiLCJtYXJrSW5wdXRSdWxlIiwibWFya1Bhc3RlUnVsZSIsIm1lcmdlQXR0cmlidXRlcyIsIm1lcmdlRGVlcCIsIm1pbk1heCIsIm5vZGVJbnB1dFJ1bGUiLCJub2RlUGFzdGVSdWxlIiwib2JqZWN0SW5jbHVkZXMiLCJwYXN0ZVJ1bGVzUGx1Z2luIiwicG9zVG9ET01SZWN0IiwicmVtb3ZlRHVwbGljYXRlcyIsInJlc29sdmVFeHRlbnNpb25zIiwicmVzb2x2ZUZvY3VzUG9zaXRpb24iLCJyZXdyaXRlVW5rbm93bkNvbnRlbnQiLCJzZWxlY3Rpb25Ub0luc2VydGlvbkVuZCIsInNvcnRFeHRlbnNpb25zIiwic3BsaXRFeHRlbnNpb25zIiwidGV4dElucHV0UnVsZSIsInRleHRQYXN0ZVJ1bGUiLCJ0ZXh0YmxvY2tUeXBlSW5wdXRSdWxlIiwidXBkYXRlTWFya1ZpZXdBdHRyaWJ1dGVzIiwid3JhcHBpbmdJbnB1dFJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3N0YXRlIiwicmVxdWlyZSIsImltcG9ydF92aWV3IiwiaW1wb3J0X2tleW1hcCIsImltcG9ydF90cmFuc2Zvcm0iLCJpbXBvcnRfbW9kZWwiLCJpbXBvcnRfbW9kZWwyIiwiaW1wb3J0X21vZGVsMyIsImltcG9ydF9tb2RlbDQiLCJpbXBvcnRfbW9kZWw1IiwiaW1wb3J0X21vZGVsNiIsImltcG9ydF9zdGF0ZTIiLCJpbXBvcnRfc3RhdGUzIiwiaW1wb3J0X3N0YXRlNCIsImltcG9ydF9zdGF0ZTUiLCJpbXBvcnRfdHJhbnNmb3JtMiIsImltcG9ydF9tb2RlbDciLCJpbXBvcnRfc3RhdGU2IiwiaW1wb3J0X21vZGVsOCIsImltcG9ydF9zdGF0ZTciLCJpbXBvcnRfc3RhdGU4IiwiaW1wb3J0X3RyYW5zZm9ybTMiLCJpbXBvcnRfY29tbWFuZHMiLCJpbXBvcnRfc3RhdGU5IiwiaW1wb3J0X2NvbW1hbmRzMiIsImltcG9ydF9jb21tYW5kczMiLCJpbXBvcnRfc3RhdGUxMCIsImltcG9ydF9tb2RlbDkiLCJpbXBvcnRfY29tbWFuZHM0IiwiaW1wb3J0X3RyYW5zZm9ybTQiLCJpbXBvcnRfdHJhbnNmb3JtNSIsImltcG9ydF9jb21tYW5kczUiLCJpbXBvcnRfY29tbWFuZHM2IiwiaW1wb3J0X2NvbW1hbmRzNyIsImltcG9ydF9jb21tYW5kczgiLCJpbXBvcnRfc2NoZW1hX2xpc3QiLCJpbXBvcnRfY29tbWFuZHM5IiwiaW1wb3J0X3N0YXRlMTEiLCJpbXBvcnRfY29tbWFuZHMxMCIsImltcG9ydF9jb21tYW5kczExIiwiaW1wb3J0X2NvbW1hbmRzMTIiLCJpbXBvcnRfY29tbWFuZHMxMyIsImltcG9ydF9jb21tYW5kczE0IiwiaW1wb3J0X2NvbW1hbmRzMTUiLCJpbXBvcnRfc3RhdGUxMiIsImltcG9ydF9zdGF0ZTEzIiwiaW1wb3J0X3NjaGVtYV9saXN0MiIsImltcG9ydF9zdGF0ZTE0IiwiaW1wb3J0X3RyYW5zZm9ybTYiLCJpbXBvcnRfbW9kZWwxMCIsImltcG9ydF9zdGF0ZTE1IiwiaW1wb3J0X3RyYW5zZm9ybTciLCJpbXBvcnRfdHJhbnNmb3JtOCIsImltcG9ydF9jb21tYW5kczE2IiwiaW1wb3J0X3NjaGVtYV9saXN0MyIsImltcG9ydF90cmFuc2Zvcm05IiwiaW1wb3J0X3N0YXRlMTYiLCJpbXBvcnRfc3RhdGUxNyIsImltcG9ydF9zdGF0ZTE4IiwiaW1wb3J0X3N0YXRlMTkiLCJpbXBvcnRfc3RhdGUyMCIsImltcG9ydF9zdGF0ZTIxIiwiaW1wb3J0X3RyYW5zZm9ybTEwIiwiaW1wb3J0X3N0YXRlMjIiLCJpbXBvcnRfc3RhdGUyMyIsImNvbmZpZyIsInN0YXRlIiwidHJhbnNhY3Rpb24iLCJzZWxlY3Rpb24iLCJkb2MiLCJzdG9yZWRNYXJrcyIsImFwcGx5IiwiYmluZCIsImFwcGx5VHJhbnNhY3Rpb24iLCJwbHVnaW5zIiwic2NoZW1hIiwicmVjb25maWd1cmUiLCJ0b0pTT04iLCJ0ciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlZGl0b3IiLCJyYXdDb21tYW5kcyIsImV4dGVuc2lvbk1hbmFnZXIiLCJjb21tYW5kcyIsImN1c3RvbVN0YXRlIiwiaGFzQ3VzdG9tU3RhdGUiLCJ2aWV3IiwiYnVpbGRQcm9wcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsIm5hbWUiLCJjb21tYW5kMiIsIm1ldGhvZCIsImFyZ3MiLCJjYWxsYmFjayIsImdldE1ldGEiLCJkaXNwYXRjaCIsImNoYWluIiwiY3JlYXRlQ2hhaW4iLCJjYW4iLCJjcmVhdGVDYW4iLCJzdGFydFRyIiwic2hvdWxkRGlzcGF0Y2giLCJjYWxsYmFja3MiLCJoYXNTdGFydFRyYW5zYWN0aW9uIiwicnVuMyIsInJ1biIsImV2ZXJ5IiwiY2hhaW5lZENvbW1hbmQiLCJwdXNoIiwiZm9ybWF0dGVkQ29tbWFuZHMiLCJFdmVudEVtaXR0ZXIiLCJvbiIsImV2ZW50IiwiZm4iLCJlbWl0IiwiZm9yRWFjaCIsIm9mZiIsImZpbHRlciIsIm9uY2UiLCJvbmNlRm4iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvbGREb2MiLCJ0cmFuc2FjdGlvbnMiLCJ0cmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJzdGVwcyIsInN0ZXAiLCJyZW1vdmVXaGl0ZXNwYWNlcyIsIm5vZGUiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJpIiwibGVuZ3RoIiwiY2hpbGQiLCJub2RlVHlwZSIsIm5vZGVWYWx1ZSIsInRlc3QiLCJyZW1vdmVDaGlsZCIsInZhbHVlIiwid2luZG93IiwiRXJyb3IiLCJ3cmFwcGVkVmFsdWUiLCJodG1sIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImNvbnRlbnQiLCJvcHRpb25zIiwic2xpY2UiLCJwYXJzZU9wdGlvbnMiLCJpc0pTT05Db250ZW50IiwiaXNUZXh0Q29udGVudCIsImlzQXJyYXlDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbUFycmF5IiwiaXRlbSIsIm5vZGVGcm9tSlNPTiIsImVycm9yT25JbnZhbGlkQ29udGVudCIsImNoZWNrIiwiZXJyb3IiLCJjYXVzZSIsImNvbnNvbGUiLCJ3YXJuIiwiaGFzSW52YWxpZENvbnRlbnQiLCJpbnZhbGlkQ29udGVudCIsImNvbnRlbnRDaGVja1NjaGVtYSIsIlNjaGVtYSIsInRvcE5vZGUiLCJzcGVjIiwibWFya3MiLCJub2RlcyIsImFwcGVuZCIsIl9fdGlwdGFwX19wcml2YXRlX191bmtub3duX19jYXRjaF9fYWxsX19ub2RlIiwiZ3JvdXAiLCJwYXJzZURPTSIsInRhZyIsImdldEF0dHJzIiwiZSIsIm91dGVySFRNTCIsImZyb21TY2hlbWEiLCJwYXJzZVNsaWNlIiwicGFyc2UiLCJwYXJzZXIiLCJtYXRjaCIsImVkZ2VDb3VudCIsInR5cGUiLCJlZGdlIiwiaXNUZXh0YmxvY2siLCJoYXNSZXF1aXJlZEF0dHJzIiwicHJlZGljYXRlIiwibm9kZXNXaXRoUG9zIiwiZGVzY2VuZGFudHMiLCJwb3MiLCJyYW5nZSIsIm5vZGVzQmV0d2VlbiIsImZyb20iLCJ0byIsIiRwb3MiLCJkZXB0aCIsImJlZm9yZSIsInN0YXJ0IiwiJGZyb20iLCJleHRlbnNpb24iLCJmaWVsZCIsImNvbnRleHQiLCJwYXJlbnQiLCJzdG9yYWdlIiwiYWRkRXh0ZW5zaW9ucyIsImZsYXQiLCJmcmFnbWVudCIsImRvY3VtZW50RnJhZ21lbnQiLCJET01TZXJpYWxpemVyIiwic2VyaWFsaXplRnJhZ21lbnQiLCJ0ZW1wb3JhcnlEb2N1bWVudCIsImRvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImtleXMiLCJiYXNlRXh0ZW5zaW9ucyIsIm5vZGVFeHRlbnNpb25zIiwibWFya0V4dGVuc2lvbnMiLCJleHRlbnNpb25BdHRyaWJ1dGVzIiwibm9kZUFuZE1hcmtFeHRlbnNpb25zIiwiZGVmYXVsdEF0dHJpYnV0ZSIsImRlZmF1bHQiLCJ2YWxpZGF0ZSIsInJlbmRlcmVkIiwicmVuZGVySFRNTCIsInBhcnNlSFRNTCIsImtlZXBPblNwbGl0IiwiaXNSZXF1aXJlZCIsImFkZEdsb2JhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlIiwidHlwZXMiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlIiwiYWRkQXR0cmlidXRlcyIsIm1lcmdlZEF0dHIiLCJvYmplY3RzIiwicmVkdWNlIiwiaXRlbXMiLCJtZXJnZWRBdHRyaWJ1dGVzIiwia2V5IiwiZXhpc3RzIiwidmFsdWVDbGFzc2VzIiwiU3RyaW5nIiwic3BsaXQiLCJleGlzdGluZ0NsYXNzZXMiLCJpbnNlcnRDbGFzc2VzIiwidmFsdWVDbGFzcyIsImluY2x1ZGVzIiwiam9pbiIsIm5ld1N0eWxlcyIsInN0eWxlMiIsInRyaW0iLCJCb29sZWFuIiwiZXhpc3RpbmdTdHlsZXMiLCJzdHlsZU1hcCIsIk1hcCIsInByb3BlcnR5IiwidmFsIiwicGFydCIsInNldCIsIm5vZGVPck1hcmsiLCJhdHRycyIsIk51bWJlciIsInBhcnNlUnVsZSIsIm9sZEF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiZ2V0QXR0cmlidXRlIiwiY2xlYW5VcFNjaGVtYUl0ZW0iLCJkYXRhIiwiX2EiLCJhbGxBdHRyaWJ1dGVzIiwiZmluZCIsImV4dHJhTm9kZUZpZWxkcyIsImZpZWxkcyIsImV4dGVuZE5vZGVTY2hlbWEiLCJpbmxpbmUiLCJhdG9tIiwic2VsZWN0YWJsZSIsImRyYWdnYWJsZSIsImNvZGUiLCJ3aGl0ZXNwYWNlIiwibGluZWJyZWFrUmVwbGFjZW1lbnQiLCJkZWZpbmluZyIsImlzb2xhdGluZyIsImV4dGVuc2lvbkF0dHJpYnV0ZSIsIl9hMiIsIl9iIiwidG9ET00iLCJIVE1MQXR0cmlidXRlcyIsInJlbmRlclRleHQiLCJ0b1RleHQiLCJleHRyYU1hcmtGaWVsZHMiLCJleHRlbmRNYXJrU2NoZW1hIiwiaW5jbHVzaXZlIiwiZXhjbHVkZXMiLCJzcGFubmluZyIsIm1hcmsiLCJmaWx0ZXJlZCIsImVsIiwiaW5kZXgiLCJpbmRleE9mIiwiU2V0IiwiZGVmYXVsdFByaW9yaXR5Iiwic29ydCIsImEiLCJiIiwicHJpb3JpdHlBIiwicHJpb3JpdHlCIiwicmVzb2x2ZWRFeHRlbnNpb25zIiwiZHVwbGljYXRlZE5hbWVzIiwiY29udGVudE5vZGUiLCJmcm9tSlNPTiIsImRvbSIsInN0YXJ0Tm9kZSIsImJsb2NrU2VwYXJhdG9yIiwidGV4dFNlcmlhbGl6ZXJzIiwidGV4dCIsImlzQmxvY2siLCJ0ZXh0U2VyaWFsaXplciIsImlzVGV4dCIsIk1hdGgiLCJtYXgiLCJzaXplIiwibmFtZU9yVHlwZSIsInR5cGVPck5hbWUiLCJlbXB0eSIsIiRoZWFkIiwibWFya0l0ZW0iLCJub2RlMiIsInJldmVyc2UiLCJub2RlSXRlbSIsInNjaGVtYVR5cGUiLCJhcnJheSIsImJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlZW4iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzaW1wbGlmeUNoYW5nZWRSYW5nZXMiLCJjaGFuZ2VzIiwidW5pcXVlQ2hhbmdlcyIsImNoYW5nZSIsInJlc3QiLCJfIiwic29tZSIsIm90aGVyQ2hhbmdlIiwib2xkUmFuZ2UiLCJuZXdSYW5nZSIsIm1hcHBpbmciLCJtYXBzIiwic3RlcE1hcCIsInJhbmdlcyIsIm5ld1N0YXJ0IiwibmV3RW5kIiwib2xkU3RhcnQiLCJpbnZlcnQiLCJvbGRFbmQiLCJzdGFydE9mZnNldCIsImlzVG9wTm9kZSIsInRvcE5vZGVUeXBlIiwiaW5jcmVtZW50Iiwibm9kZVNpemUiLCJvdXRwdXQyIiwib3V0cHV0IiwiY2hpbGRDb3VudCIsIm9mZnNldCIsInRvU3RyaW5nIiwib2JqZWN0MSIsIm9iamVjdDIiLCJzdHJpY3QiLCJmaW5kTWFya0luU2V0IiwiayIsImlzTWFya0luU2V0IiwiY2hpbGRBZnRlciIsInBhcmVudE9mZnNldCIsIm1hcmsyIiwiY2hpbGRCZWZvcmUiLCJzdGFydEluZGV4Iiwic3RhcnRQb3MiLCJlbmRJbmRleCIsImVuZFBvcyIsInJlc29sdmUiLCJtYXhEZXB0aCIsImN1cnJlbnREZXB0aCIsImN1cnJlbnROb2RlIiwidHlwZU5hbWUiLCJtYXhNYXRjaCIsInRleHRCZWZvcmUiLCJzbGljZUVuZFBvcyIsImNodW5rIiwidGV4dENvbnRlbnQiLCJpc0F0b20iLCJzZWxlY3Rpb25SYW5nZSIsIm1hcmtSYW5nZXMiLCIkdG8iLCJyZWxhdGl2ZUZyb20iLCJyZWxhdGl2ZVRvIiwibWluIiwicmFuZ2UyIiwibWF0Y2hlZFJhbmdlIiwibWFya1JhbmdlIiwic3VtIiwiZXhjbHVkZWRSYW5nZSIsIm5vZGVSYW5nZXMiLCJtYXRjaGVkTm9kZVJhbmdlcyIsIm5vZGVSYW5nZSIsIiRhbmNob3IiLCJwYXJlbnROb2RlIiwiJHBhcmVudFBvcyIsImVuZCIsImVuYWJsZWQiLCJlbmFibGVkRXh0ZW5zaW9uIiwiY2hlY2tDaGlsZHJlbiIsImlnbm9yZVdoaXRlc3BhY2UiLCJpc0xlYWYiLCJpc0NvbnRlbnRFbXB0eSIsImNoaWxkTm9kZSIsIk5vZGVTZWxlY3Rpb24iLCJUZXh0U2VsZWN0aW9uIiwibWluUG9zIiwibWF4UG9zIiwicmVzb2x2ZWRGcm9tIiwicmVzb2x2ZWRFbmQiLCJjb29yZHNBdFBvcyIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwb3NpdGlvbiIsInNlbGVjdGlvbkF0U3RhcnQiLCJTZWxlY3Rpb24iLCJhdFN0YXJ0Iiwic2VsZWN0aW9uQXRFbmQiLCJhdEVuZCIsImNyZWF0ZSIsInJld3JpdGVVbmtub3duQ29udGVudElubmVyIiwianNvbiIsInZhbGlkTWFya3MiLCJ2YWxpZE5vZGVzIiwicmV3cml0dGVuQ29udGVudCIsImhhcyIsIm9yaWdpbmFsIiwidW5zdXBwb3J0ZWQiLCJmYWxsYmFja1RvUGFyYWdyYXBoIiwic3RhcnRMZW4iLCJiaWFzIiwibGFzdCIsIlJlcGxhY2VTdGVwIiwiUmVwbGFjZUFyb3VuZFN0ZXAiLCJfZnJvbSIsIl90byIsIl9uZXdGcm9tIiwibmV3VG8iLCJzZXRTZWxlY3Rpb24iLCJuZWFyIiwiaGFuZGxlciIsImlucHV0UnVsZU1hdGNoZXJIYW5kbGVyIiwiZXhlYyIsImlucHV0UnVsZU1hdGNoIiwicmVzdWx0IiwiaW5wdXQiLCJyZXBsYWNlV2l0aCIsInJ1bGVzIiwicGx1Z2luIiwiY29tcG9zaW5nIiwibm9kZUJlZm9yZSIsIm5vZGVBZnRlciIsIm1hdGNoZWQiLCJydWxlIiwic2V0TWV0YSIsIlBsdWdpbiIsImluaXQiLCJwcmV2Iiwic3RvcmVkIiwic2ltdWxhdGVkSW5wdXRNZXRhIiwiaXNTaW11bGF0ZWRJbnB1dCIsInNldFRpbWVvdXQiLCJzZWxlY3Rpb25TZXQiLCJkb2NDaGFuZ2VkIiwiaGFuZGxlVGV4dElucHV0IiwiaGFuZGxlRE9NRXZlbnRzIiwiY29tcG9zaXRpb25lbmQiLCIkY3Vyc29yIiwiaGFuZGxlS2V5RG93biIsImlzSW5wdXRSdWxlcyIsImdldFR5cGUiLCJnZXRQcm90b3R5cGVPZiIsInRhcmdldCIsInNvdXJjZSIsIkV4dGVuZGFibGUiLCJjb25maWd1cmUiLCJleHRlbmQiLCJhZGRPcHRpb25zIiwiZXh0ZW5kZWRDb25maWciLCJfTWFyayIsImFyZ3VtZW50cyIsInJlc29sdmVkQ29uZmlnIiwiaGFuZGxlRXhpdCIsImN1cnJlbnRQb3MiLCJpc0F0RW5kIiwiY3VycmVudE1hcmtzIiwiaXNJbk1hcmsiLCJtIiwicmVtb3ZlTWFyayIsInJlbW92ZVN0b3JlZE1hcmsiLCJpbnNlcnRUZXh0IiwicGFzdGVSdWxlTWF0Y2hlckhhbmRsZXIiLCJtYXRjaEFsbCIsIm1hdGNoZXMiLCJwYXN0ZVJ1bGVNYXRjaCIsInJ1bjIiLCJwYXN0ZUV2ZW50IiwiZHJvcEV2ZW50IiwiaGFuZGxlcnMiLCJyZXNvbHZlZFRvIiwidGV4dFRvTWF0Y2giLCJ0ZXh0QmV0d2VlbiIsInN1Y2Nlc3MiLCJ0aXB0YXBEcmFnRnJvbU90aGVyRWRpdG9yIiwiY3JlYXRlQ2xpcGJvYXJkUGFzdGVFdmVudCIsIkNsaXBib2FyZEV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsIkRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJkcmFnU291cmNlRWxlbWVudCIsImlzUGFzdGVkRnJvbVByb3NlTWlycm9yIiwiaXNEcm9wcGVkRnJvbVByb3NlTWlycm9yIiwiRHJhZ0V2ZW50IiwicHJvY2Vzc0V2ZW50IiwicGFzdGVFdnQiLCJjaGFpbmFibGVTdGF0ZSIsImhhbmRsZURyYWdzdGFydCIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsImhhbmRsZURyYWdlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkcm9wIiwiZHJhZ0Zyb21PdGhlckVkaXRvciIsImlzRWRpdGFibGUiLCJkZWxldGVSYW5nZSIsInBhc3RlIiwiX3ZpZXciLCJnZXREYXRhIiwiYXBwZW5kVHJhbnNhY3Rpb24iLCJvbGRTdGF0ZSIsImlzUGFzdGUiLCJpc0Ryb3AiLCJzaW11bGF0ZWRQYXN0ZU1ldGEiLCJpc1NpbXVsYXRlZFBhc3RlIiwiZnJvbTIiLCJ0bzIiLCJmaW5kRGlmZlN0YXJ0IiwiZmluZERpZmZFbmQiLCJFeHRlbnNpb25NYW5hZ2VyIiwic3BsaXR0YWJsZU1hcmtzIiwic2V0dXBFeHRlbnNpb25zIiwiZXh0ZW5zaW9uU3RvcmFnZSIsImFkZENvbW1hbmRzIiwiaW5wdXRSdWxlcyIsInBhc3RlUnVsZXMiLCJhbGxQbHVnaW5zIiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJkZWZhdWx0QmluZGluZ3MiLCJBcnJvd1JpZ2h0IiwiYmluZGluZ3MiLCJzaG9ydGN1dCIsImtleU1hcFBsdWdpbiIsImtleW1hcCIsImFkZElucHV0UnVsZXMiLCJlbmFibGVJbnB1dFJ1bGVzIiwiYWRkUGFzdGVSdWxlcyIsImVuYWJsZVBhc3RlUnVsZXMiLCJhZGRQcm9zZU1pcnJvclBsdWdpbnMiLCJwcm9zZU1pcnJvclBsdWdpbnMiLCJub2RlVmlld3MiLCJhZGROb2RlVmlldyIsIm5vZGV2aWV3IiwiZ2V0UG9zIiwiZGVjb3JhdGlvbnMiLCJpbm5lckRlY29yYXRpb25zIiwibWFya1ZpZXdzIiwiYWRkTWFya1ZpZXciLCJtYXJrVmlldyIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJvbkJlZm9yZUNyZWF0ZSIsIm9uQ3JlYXRlIiwib25VcGRhdGUiLCJvblNlbGVjdGlvblVwZGF0ZSIsIm9uVHJhbnNhY3Rpb24iLCJvbkZvY3VzIiwib25CbHVyIiwib25EZXN0cm95IiwiZmxhdHRlbiIsIl9fZXhwb3J0MiIsIkNsaXBib2FyZFRleHRTZXJpYWxpemVyIiwiQ29tbWFuZHMiLCJEZWxldGUiLCJEcm9wIiwiRWRpdGFibGUiLCJGb2N1c0V2ZW50cyIsIktleW1hcCIsIlBhc3RlIiwiVGFiaW5kZXgiLCJmb2N1c0V2ZW50c1BsdWdpbktleSIsIl9FeHRlbnNpb24iLCJQbHVnaW5LZXkiLCJjbGlwYm9hcmRUZXh0U2VyaWFsaXplciIsImNvbW1hbmRzX2V4cG9ydHMiLCJibHVyIiwiY2xlYXJDb250ZW50IiwiY2xlYXJOb2RlcyIsImNvbW1hbmQiLCJjcmVhdGVQYXJhZ3JhcGhOZWFyIiwiY3V0IiwiZGVsZXRlQ3VycmVudE5vZGUiLCJkZWxldGVOb2RlIiwiZGVsZXRlU2VsZWN0aW9uIiwiZW50ZXIiLCJleGl0Q29kZSIsImV4dGVuZE1hcmtSYW5nZSIsImZpcnN0IiwiZm9jdXMiLCJpbnNlcnRDb250ZW50IiwiaW5zZXJ0Q29udGVudEF0Iiwiam9pbkJhY2t3YXJkIiwiam9pbkRvd24iLCJqb2luRm9yd2FyZCIsImpvaW5JdGVtQmFja3dhcmQiLCJqb2luSXRlbUZvcndhcmQiLCJqb2luVGV4dGJsb2NrQmFja3dhcmQiLCJqb2luVGV4dGJsb2NrRm9yd2FyZCIsImpvaW5VcCIsImtleWJvYXJkU2hvcnRjdXQiLCJsaWZ0IiwibGlmdEVtcHR5QmxvY2siLCJsaWZ0TGlzdEl0ZW0iLCJuZXdsaW5lSW5Db2RlIiwicmVzZXRBdHRyaWJ1dGVzIiwic2Nyb2xsSW50b1ZpZXciLCJzZWxlY3RBbGwiLCJzZWxlY3ROb2RlQmFja3dhcmQiLCJzZWxlY3ROb2RlRm9yd2FyZCIsInNlbGVjdFBhcmVudE5vZGUiLCJzZWxlY3RUZXh0YmxvY2tFbmQiLCJzZWxlY3RUZXh0YmxvY2tTdGFydCIsInNldENvbnRlbnQiLCJzZXRNYXJrIiwic2V0Tm9kZSIsInNldE5vZGVTZWxlY3Rpb24iLCJzZXRUZXh0U2VsZWN0aW9uIiwic2lua0xpc3RJdGVtIiwic3BsaXRCbG9jayIsInNwbGl0TGlzdEl0ZW0iLCJ0b2dnbGVMaXN0IiwidG9nZ2xlTWFyayIsInRvZ2dsZU5vZGUiLCJ0b2dnbGVXcmFwIiwidW5kb0lucHV0UnVsZSIsInVuc2V0QWxsTWFya3MiLCJ1bnNldE1hcmsiLCJ3cmFwSW4iLCJ3cmFwSW5MaXN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXNEZXN0cm95ZWQiLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJlbWl0VXBkYXRlIiwiJG1hcHBlZEZyb20iLCIkbWFwcGVkVG8iLCJibG9ja1JhbmdlIiwidGFyZ2V0TGlmdERlcHRoIiwibGlmdFRhcmdldCIsImRlZmF1bHRUeXBlIiwiY29udGVudE1hdGNoQXQiLCJzZXROb2RlTWFya3VwIiwib3JpZ2luUmFuZ2UiLCJ0YXJnZXRQb3MiLCJjb250ZW50U2xpY2UiLCJuZXdQb3MiLCJpbnNlcnQiLCJhZnRlciIsImRlbGV0ZSIsIm5ld1NlbGVjdGlvbiIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwidXNlckFnZW50IiwiZGVsYXllZEZvY3VzIiwiaGFzRm9jdXMiLCJpc1NhbWVTZWxlY3Rpb24iLCJlcSIsInNldFN0b3JlZE1hcmtzIiwiaXNGcmFnbWVudCIsIm5vZGVPckZyYWdtZW50IiwidXBkYXRlU2VsZWN0aW9uIiwiYXBwbHlJbnB1dFJ1bGVzIiwiYXBwbHlQYXN0ZVJ1bGVzIiwiZW1pdENvbnRlbnRFcnJvciIsImRpc2FibGVDb2xsYWJvcmF0aW9uIiwiY29sbGFib3JhdGlvbiIsImlzRGlzYWJsZWQiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJlbmFibGVDb250ZW50Q2hlY2siLCJpc09ubHlUZXh0Q29udGVudCIsImlzT25seUJsb2NrQ29udGVudCIsImlzRW1wdHlUZXh0QmxvY2siLCJuZXdDb250ZW50IiwidiIsImZyb21TZWxlY3Rpb25BdFN0YXJ0IiwiaXNUZXh0U2VsZWN0aW9uMiIsImhhc0NvbnRlbnQiLCJwb2ludCIsImpvaW5Qb2ludCIsIm5vcm1hbGl6ZUtleU5hbWUiLCJwYXJ0cyIsImFsdCIsImN0cmwiLCJzaGlmdCIsIm1ldGEiLCJtb2QiLCJLZXlib2FyZEV2ZW50IiwiYWx0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2FwdHVyZWRUcmFuc2FjdGlvbiIsImNhcHR1cmVUcmFuc2FjdGlvbiIsInNvbWVQcm9wIiwiZiIsIm5ld1N0ZXAiLCJtYXliZVN0ZXAiLCJpc0FjdGl2ZTIiLCJvYmoiLCJwcm9wT3JQcm9wcyIsIm5ld09iaiIsInByb3AiLCJtYXJrVHlwZSIsImFkZE1hcmsiLCJBbGxTZWxlY3Rpb24iLCJkb2N1bWVudDIiLCJjYW5TZXRNYXJrIiwibmV3TWFya1R5cGUiLCJjdXJzb3IiLCJpc0luU2V0Iiwic29tZU5vZGVTdXBwb3J0c01hcmsiLCJpbmxpbmVDb250ZW50IiwiYWxsb3dzTWFya1R5cGUiLCJfcG9zIiwiaXNJbmxpbmUiLCJwYXJlbnRBbGxvd3NNYXJrVHlwZSIsImN1cnJlbnRNYXJrc0FsbG93TWFya1R5cGUiLCJvdGhlck1hcmsiLCJhZGRTdG9yZWRNYXJrIiwidHJpbW1lZEZyb20iLCJ0cmltbWVkVG8iLCJzb21lSGFzTWFyayIsImF0dHJpYnV0ZXNUb0NvcHkiLCJzYW1lUGFyZW50IiwiY2FuU2V0QmxvY2siLCJzZXRCbG9ja1R5cGUiLCJ1cGRhdGVkU3RhdGUiLCJlbnN1cmVNYXJrcyIsImZpbHRlcmVkTWFya3MiLCJrZWVwTWFya3MiLCJjYW5TcGxpdCIsImRlZmx0IiwiaW5kZXhBZnRlciIsImZpcnN0MiIsIiRmaXJzdCIsImNhblJlcGxhY2VXaXRoIiwib3ZlcnJpZGVBdHRycyIsImdyYW5kUGFyZW50Iiwid3JhcCIsImRlcHRoQmVmb3JlIiwiZCIsImNvcHkiLCJkZXB0aEFmdGVyIiwibmV3TmV4dFR5cGVBdHRyaWJ1dGVzMiIsIm5leHRUeXBlMiIsImNvbnRlbnRNYXRjaCIsImNyZWF0ZUFuZEZpbGwiLCJyZXBsYWNlIiwiU2xpY2UiLCJzZWwiLCJuIiwibmV4dFR5cGUiLCJuZXdUeXBlQXR0cmlidXRlcyIsIm5ld05leHRUeXBlQXR0cmlidXRlcyIsImpvaW5MaXN0QmFja3dhcmRzIiwibGlzdFR5cGUiLCJsaXN0Iiwibm9kZUF0IiwiY2FuSm9pbkJhY2t3YXJkcyIsImNhbkpvaW4iLCJqb2luTGlzdEZvcndhcmRzIiwiY2FuSm9pbkZvcndhcmRzIiwibGlzdFR5cGVPck5hbWUiLCJpdGVtVHlwZU9yTmFtZSIsIml0ZW1UeXBlIiwicGFyZW50TGlzdCIsInZhbGlkQ29udGVudCIsImNhbldyYXBJbkxpc3QiLCJleHRlbmRFbXB0eU1hcmtSYW5nZSIsInRvZ2dsZVR5cGVPck5hbWUiLCJ0b2dnbGVUeXBlIiwidW5kb2FibGUiLCJnZXRTdGF0ZSIsInRvVW5kbyIsImoiLCJkb2NzIiwibGFzdFBvcyIsImxhc3ROb2RlIiwidHJpbW1lZEZyb20yIiwidHJpbW1lZFRvMiIsImFwcGVuZGVkVHJhbnNhY3Rpb25zIiwiX2MiLCJfYjIiLCJfYzIiLCJfZCIsImNvcmVFeHRlbnNpb25PcHRpb25zIiwiZmlsdGVyVHJhbnNhY3Rpb24iLCJuZXh0VHJhbnNhY3Rpb24iLCJtYXBSZXN1bHQiLCJkZWxldGVkQWZ0ZXIiLCJkZWxldGVkQmVmb3JlIiwiaXNGdWxseVdpdGhpblJhbmdlIiwibmV3RnJvbSIsImRlbGV0ZWRSYW5nZSIsInBhcnRpYWwiLCJjb21iaW5lZFRyYW5zZm9ybSIsIl9hMyIsIl9iMyIsIlJlbW92ZU1hcmtTdGVwIiwiZm91bmRCZWZvcmVNYXJrIiwiZm91bmRBZnRlck1hcmsiLCJhc3luYyIsImhhbmRsZURyb3AiLCJtb3ZlZCIsImVkaXRhYmxlIiwiaXNGb2N1c2VkIiwiaGFuZGxlQmFja3NwYWNlIiwicGFyZW50SXNJc29sYXRpbmciLCJwYXJlbnRQb3MiLCJpc0F0U3RhcnQiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVFbnRlciIsImJhc2VLZXltYXAiLCJFbnRlciIsIk1vZC1FbnRlciIsIkJhY2tzcGFjZSIsIk1vZC1hIiwicGNLZXltYXAiLCJtYWNLZXltYXAiLCJDdHJsLWEiLCJDdHJsLWUiLCJuZXdTdGF0ZSIsInRyMiIsImRvY0NoYW5nZXMiLCJpZ25vcmVUciIsImFsbEZyb20iLCJhbGxFbmQiLCJhbGxXYXNTZWxlY3RlZCIsImlzRW1wdHkiLCJoYW5kbGVQYXN0ZSIsInRhYmluZGV4IiwiX05vZGVQb3MiLCJhY3R1YWxEZXB0aCIsInJlc29sdmVkUG9zIiwiZWxlbWVudCIsImRvbUF0UG9zIiwiaXNOb25UZXh0QXRvbSIsImNoaWxkTm9kZVBvcyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJub2RlQXR0cmlidXRlcyIsImF0dHJLZXlzIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEl0ZW1Pbmx5IiwiY2hpbGRQb3MiLCJkb2VzQWxsQXR0cmlidXRlc01hdGNoIiwiY29uY2F0Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJub25jZSIsInN1ZmZpeCIsInRpcHRhcFN0eWxlVGFnIiwic3R5bGVOb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjc3MiLCJlZGl0b3JWaWV3IiwiaXNJbml0aWFsaXplZCIsImluc3RhbmNlSWQiLCJyYW5kb20iLCJpbmplY3RDU1MiLCJpbmplY3ROb25jZSIsImF1dG9mb2N1cyIsImVkaXRvclByb3BzIiwiZW5hYmxlQ29yZUV4dGVuc2lvbnMiLCJvbkNvbnRlbnRFcnJvciIsIm9uUGFzdGUiLCJvbkRyb3AiLCJvbkRlbGV0ZSIsImlzQ2FwdHVyaW5nVHJhbnNhY3Rpb24iLCJzZXRPcHRpb25zIiwiY3JlYXRlRXh0ZW5zaW9uTWFuYWdlciIsImNyZWF0ZUNvbW1hbmRNYW5hZ2VyIiwiY3JlYXRlU2NoZW1hIiwiaW5pdGlhbERvYyIsImNyZWF0ZURvYyIsImVkaXRvclN0YXRlIiwiRWRpdG9yU3RhdGUiLCJtb3VudCIsImNyZWF0ZVZpZXciLCJ1bm1vdW50IiwicmVtb3ZlIiwiY29tbWFuZE1hbmFnZXIiLCJzZXRQcm9wcyIsInVwZGF0ZVN0YXRlIiwic2V0RWRpdGFibGUiLCJQcm94eSIsImRyYWdnaW5nIiwiZ2V0IiwiUmVmbGVjdCIsInJlZ2lzdGVyUGx1Z2luIiwiaGFuZGxlUGx1Z2lucyIsInVucmVnaXN0ZXJQbHVnaW4iLCJuYW1lT3JQbHVnaW5LZXlUb1JlbW92ZSIsInByZXZQbHVnaW5zIiwibmFtZU9yUGx1Z2luS2V5Iiwic3RhcnRzV2l0aCIsImNvcmVFeHRlbnNpb25zIiwiZXh0IiwiYWxsRXh0ZW5zaW9ucyIsIm1lc3NhZ2UiLCJFZGl0b3JWaWV3Iiwicm9sZSIsImRpc3BhdGNoVHJhbnNhY3Rpb24iLCJjcmVhdGVOb2RlVmlld3MiLCJwcmVwZW5kQ2xhc3MiLCJjbGFzc05hbWUiLCJzZWxlY3Rpb25IYXNDaGFuZ2VkIiwicm9vdFRyV2FzQXBwbGllZCIsInByZXZTdGF0ZSIsIm5leHRTdGF0ZSIsIm1vc3RSZWNlbnRGb2N1c1RyIiwiZmluZExhc3QiLCJmb2N1czIiLCJibHVyMiIsIm5hbWVPckF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzT3JVbmRlZmluZWQiLCJnZXRKU09OIiwiZ2V0SFRNTCIsIiRub2RlIiwiJGRvYyIsIiRub2RlcyIsImNhcHR1cmVHcm91cCIsImZ1bGxNYXRjaCIsInN0YXJ0U3BhY2VzIiwic2VhcmNoIiwidGV4dFN0YXJ0IiwidGV4dEVuZCIsImV4Y2x1ZGVkTWFya3MiLCJleGNsdWRlZCIsIm1hcmtFbmQiLCJuZXdOb2RlIiwibGFzdEluZGV4T2YiLCJtYXRjaFN0YXJ0IiwibGFzdENoYXIiLCJpbnNlcnRpb25TdGFydCIsIiRzdGFydCIsImN1dE9mZiIsIndyYXBwaW5nIiwiZmluZFdyYXBwaW5nIiwia2VlcEF0dHJpYnV0ZXMiLCJqb2luUHJlZGljYXRlIiwiRnVuY3Rpb24iLCJtYXRjaFR5cGUiLCJzdHJpbmciLCJjaGVja01hcmsiLCJ0aGlzTWFyayIsImZvdW5kTWFyayIsIm5lZWRzVXBkYXRlIiwidXBkYXRlZE1hcmsiLCJjb21wb25lbnQiLCJjb250ZW50RE9NIiwiaWdub3JlTXV0YXRpb24iLCJtdXRhdGlvbiIsImNoYW5nZWROb2RlcyIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJpc0NvbnRlbnRFZGl0YWJsZSIsIl9Ob2RlIiwiaXNEcmFnZ2luZyIsInN0b3BFdmVudCIsIm9uRHJhZ1N0YXJ0IiwiX2UiLCJfZiIsIl9nIiwiZHJhZ0hhbmRsZSIsImRvbUJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZUJveCIsIm9mZnNldFgiLCJuYXRpdmVFdmVudCIsIm9mZnNldFkiLCJjbG9uZWROb2RlIiwiY2xvbmVOb2RlIiwiZGF0YVRyYW5zZmVyIiwic2V0RHJhZ0ltYWdlIiwiaXNJbkVsZW1lbnQiLCJpc0RyYWdFdmVudCIsImlzRHJvcEV2ZW50IiwiaXNJbnB1dCIsInRhZ05hbWUiLCJpc0RyYWdnYWJsZSIsImlzU2VsZWN0YWJsZSIsImlzQ29weUV2ZW50IiwiaXNQYXN0ZUV2ZW50IiwiaXNDdXRFdmVudCIsImlzQ2xpY2tFdmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZERyYWdIYW5kbGUiLCJnZXRDb250ZW50IiwiY3VycmVudFN0ZXAiLCJkZWxldGVkIiwibWFwcGVkUG9zaXRpb24iLCJuZXdQb3NpdGlvbiIsImdldE1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsS0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEs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QUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLHdCQUFBLEVBQUFBLENBQUEsS0FBQUEsd0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUE3RyxrQkFBQTs7O0FDR0EsSUFBQThHLFlBQUEsR0FBNEJDLE9BQUE7QUFDNUIsSUFBQUMsV0FBQSxHQUEyQkQsT0FBQTtBQ0ozQixJQUFBRSxhQUFBLEdBQXVCRixPQUFBO0FDRXZCLElBQUFHLGdCQUFBLEdBQTBCSCxPQUFBO0FDRDFCLElBQUFJLFlBQUEsR0FBcUVKLE9BQUE7QUNEckUsSUFBQUssYUFBQSxHQUFxQkwsT0FBQTtBQ0NyQixJQUFBTSxhQUFBLEdBQThCTixPQUFBO0FDQTlCLElBQUFPLGFBQUEsR0FBdUJQLE9BQUE7QUNEdkIsSUFBQVEsYUFBQSxHQUEwQlIsT0FBQTtBQ0ExQixJQUFBUyxhQUFBLEdBQXFCVCxPQUFBO0FDQXJCLElBQUFVLGFBQUEsR0FBOEJWLE9BQUE7QUNBOUIsSUFBQVcsYUFBQSxHQUE4QlgsT0FBQTtBQ0M5QixJQUFBWSxhQUFBLEdBQXlDWixPQUFBO0FDQXpDLElBQUFhLGFBQUEsR0FBMEJiLE9BQUE7QUFDMUIsSUFBQWMsaUJBQUEsR0FBK0NkLE9BQUE7QUNEL0MsSUFBQWUsYUFBQSxHQUF5QmYsT0FBQTtBQUV6QixJQUFBZ0IsYUFBQSxHQUF1QmhCLE9BQUE7QUNGdkIsSUFBQWlCLGFBQUEsR0FBeUJqQixPQUFBO0FBRXpCLElBQUFrQixhQUFBLEdBQXVCbEIsT0FBQTtBQ0h2QixJQUFBbUIsYUFBQSxHQUFrQ25CLE9BQUE7QUNBbEMsSUFBQW9CLGlCQUFBLEdBQTJCcEIsT0FBQTtBQ0EzQixJQUFBcUIsZUFBQSxHQUFtRXJCLE9BQUE7QUNBbkUsSUFBQXNCLGFBQUEsR0FBOEJ0QixPQUFBO0FDQTlCLElBQUF1QixnQkFBQSxHQUEyRHZCLE9BQUE7QUNBM0QsSUFBQXdCLGdCQUFBLEdBQTZDeEIsT0FBQTtBQ0M3QyxJQUFBeUIsY0FBQSxHQUE4QnpCLE9BQUE7QUNBOUIsSUFBQTBCLGFBQUEsR0FBeUIxQixPQUFBO0FDRHpCLElBQUEyQixnQkFBQSxHQUtPM0IsT0FBQTtBQ0xQLElBQUE0QixpQkFBQSxHQUEwQjVCLE9BQUE7QUNBMUIsSUFBQTZCLGlCQUFBLEdBQTBCN0IsT0FBQTtBQ0ExQixJQUFBOEIsZ0JBQUEsR0FBeUQ5QixPQUFBO0FDQXpELElBQUErQixnQkFBQSxHQUF3RC9CLE9BQUE7QUNBeEQsSUFBQWdDLGdCQUFBLEdBQXFDaEMsT0FBQTtBQ0FyQyxJQUFBaUMsZ0JBQUEsR0FBeURqQyxPQUFBO0FDQ3pELElBQUFrQyxrQkFBQSxHQUFxRGxDLE9BQUE7QUNEckQsSUFBQW1DLGdCQUFBLEdBQXVEbkMsT0FBQTtBQ0F2RCxJQUFBb0MsY0FBQSxHQUE2QnBDLE9BQUE7QUNBN0IsSUFBQXFDLGlCQUFBLEdBQWlFckMsT0FBQTtBQ0FqRSxJQUFBc0MsaUJBQUEsR0FBK0R0QyxPQUFBO0FDQS9ELElBQUF1QyxpQkFBQSxHQUE2RHZDLE9BQUE7QUNFN0QsSUFBQXdDLGlCQUFBLEdBQWlFeEMsT0FBQTtBQ0FqRSxJQUFBeUMsaUJBQUEsR0FBcUV6QyxPQUFBO0FDRnJFLElBQUEwQyxpQkFBQSxHQUE2QjFDLE9BQUE7QUNBN0IsSUFBQTJDLGNBQUEsR0FBOEIzQyxPQUFBO0FDQTlCLElBQUE0QyxjQUFBLEdBQThCNUMsT0FBQTtBQ0M5QixJQUFBNkMsbUJBQUEsR0FBcUQ3QyxPQUFBO0FDQXJELElBQUE4QyxjQUFBLEdBQTZDOUMsT0FBQTtBQUM3QyxJQUFBK0MsaUJBQUEsR0FBeUIvQyxPQUFBO0FDRHpCLElBQUFnRCxjQUFBLEdBQWdDaEQsT0FBQTtBQUNoQyxJQUFBaUQsY0FBQSxHQUE4QmpELE9BQUE7QUFDOUIsSUFBQWtELGlCQUFBLEdBQXlCbEQsT0FBQTtBQ0R6QixJQUFBbUQsaUJBQUEsR0FBd0JuRCxPQUFBO0FDRnhCLElBQUFvRCxpQkFBQSxHQUF5Q3BELE9BQUE7QUNDekMsSUFBQXFELG1CQUFBLEdBQWlEckQsT0FBQTtBQ0RqRCxJQUFBc0QsaUJBQUEsR0FBK0J0RCxPQUFBO0FDQS9CLElBQUF1RCxjQUFBLEdBQWtDdkQsT0FBQTtBQ0FsQyxJQUFBd0QsY0FBQSxHQUFrQ3hELE9BQUE7QUNBbEMsSUFBQXlELGNBQUEsR0FBa0N6RCxPQUFBO0FDQWxDLElBQUEwRCxjQUFBLEdBQTZDMUQsT0FBQTtBQ0E3QyxJQUFBMkQsY0FBQSxHQUFrQzNELE9BQUE7QUNBbEMsSUFBQTRELGNBQUEsR0FBa0M1RCxPQUFBO0FDQ2xDLElBQUE2RCxrQkFBQSxHQUFzQzdELE9BQUE7QUNBdEMsSUFBQThELGNBQUEsR0FBZ0Q5RCxPQUFBO0FDRGhELElBQUErRCxjQUFBLEdBQThCL0QsT0FBQTs7Ozs7Ozs7QUNPdkIsU0FBUzVGLHFCQUFxQjRKLE1BQUEsRUFBdUU7RUFDMUcsTUFBTTtJQUFFQyxLQUFBO0lBQU9DO0VBQVksSUFBSUYsTUFBQTtFQUMvQixJQUFJO0lBQUVHO0VBQVUsSUFBSUQsV0FBQTtFQUNwQixJQUFJO0lBQUVFO0VBQUksSUFBSUYsV0FBQTtFQUNkLElBQUk7SUFBRUc7RUFBWSxJQUFJSCxXQUFBO0VBRXRCLE9BQU87SUFDTCxHQUFHRCxLQUFBO0lBQ0hLLEtBQUEsRUFBT0wsS0FBQSxDQUFNSyxLQUFBLENBQU1DLElBQUEsQ0FBS04sS0FBSztJQUM3Qk8sZ0JBQUEsRUFBa0JQLEtBQUEsQ0FBTU8sZ0JBQUEsQ0FBaUJELElBQUEsQ0FBS04sS0FBSztJQUNuRFEsT0FBQSxFQUFTUixLQUFBLENBQU1RLE9BQUE7SUFDZkMsTUFBQSxFQUFRVCxLQUFBLENBQU1TLE1BQUE7SUFDZEMsV0FBQSxFQUFhVixLQUFBLENBQU1VLFdBQUEsQ0FBWUosSUFBQSxDQUFLTixLQUFLO0lBQ3pDVyxNQUFBLEVBQVFYLEtBQUEsQ0FBTVcsTUFBQSxDQUFPTCxJQUFBLENBQUtOLEtBQUs7SUFDL0IsSUFBSUksWUFBQSxFQUFjO01BQ2hCLE9BQU9BLFdBQUE7SUFDVDtJQUNBLElBQUlGLFVBQUEsRUFBWTtNQUNkLE9BQU9BLFNBQUE7SUFDVDtJQUNBLElBQUlDLElBQUEsRUFBTTtNQUNSLE9BQU9BLEdBQUE7SUFDVDtJQUNBLElBQUlTLEdBQUEsRUFBSztNQUNQVixTQUFBLEdBQVlELFdBQUEsQ0FBWUMsU0FBQTtNQUN4QkMsR0FBQSxHQUFNRixXQUFBLENBQVlFLEdBQUE7TUFDbEJDLFdBQUEsR0FBY0gsV0FBQSxDQUFZRyxXQUFBO01BRTFCLE9BQU9ILFdBQUE7SUFDVDtFQUNGO0FBQ0Y7QUNoQ08sSUFBTS9LLGNBQUEsR0FBTixNQUFxQjtFQU8xQjJMLFlBQVlDLEtBQUEsRUFBZ0Q7SUFDMUQsS0FBS0MsTUFBQSxHQUFTRCxLQUFBLENBQU1DLE1BQUE7SUFDcEIsS0FBS0MsV0FBQSxHQUFjLEtBQUtELE1BQUEsQ0FBT0UsZ0JBQUEsQ0FBaUJDLFFBQUE7SUFDaEQsS0FBS0MsV0FBQSxHQUFjTCxLQUFBLENBQU1kLEtBQUE7RUFDM0I7RUFFQSxJQUFJb0IsZUFBQSxFQUEwQjtJQUM1QixPQUFPLENBQUMsQ0FBQyxLQUFLRCxXQUFBO0VBQ2hCO0VBRUEsSUFBSW5CLE1BQUEsRUFBcUI7SUFDdkIsT0FBTyxLQUFLbUIsV0FBQSxJQUFlLEtBQUtKLE1BQUEsQ0FBT2YsS0FBQTtFQUN6QztFQUVBLElBQUlrQixTQUFBLEVBQTJCO0lBQzdCLE1BQU07TUFBRUYsV0FBQTtNQUFhRCxNQUFBO01BQVFmO0lBQU0sSUFBSTtJQUN2QyxNQUFNO01BQUVxQjtJQUFLLElBQUlOLE1BQUE7SUFDakIsTUFBTTtNQUFFSDtJQUFHLElBQUlaLEtBQUE7SUFDZixNQUFNYyxLQUFBLEdBQVEsS0FBS1EsVUFBQSxDQUFXVixFQUFFO0lBRWhDLE9BQU9XLE1BQUEsQ0FBT0MsV0FBQSxDQUNaRCxNQUFBLENBQU9FLE9BQUEsQ0FBUVQsV0FBVyxFQUFFVSxHQUFBLENBQUksQ0FBQyxDQUFDQyxJQUFBLEVBQU1DLFFBQU8sTUFBTTtNQUNuRCxNQUFNQyxNQUFBLEdBQVNBLENBQUEsR0FBSUMsSUFBQSxLQUFnQjtRQUNqQyxNQUFNQyxRQUFBLEdBQVdILFFBQUEsQ0FBUSxHQUFHRSxJQUFJLEVBQUVoQixLQUFLO1FBRXZDLElBQUksQ0FBQ0YsRUFBQSxDQUFHb0IsT0FBQSxDQUFRLGlCQUFpQixLQUFLLENBQUMsS0FBS1osY0FBQSxFQUFnQjtVQUMxREMsSUFBQSxDQUFLWSxRQUFBLENBQVNyQixFQUFFO1FBQ2xCO1FBRUEsT0FBT21CLFFBQUE7TUFDVDtNQUVBLE9BQU8sQ0FBQ0osSUFBQSxFQUFNRSxNQUFNO0lBQ3RCLENBQUMsQ0FDSDtFQUNGO0VBRUEsSUFBSUssTUFBQSxFQUErQjtJQUNqQyxPQUFPLE1BQU0sS0FBS0MsV0FBQSxDQUFZO0VBQ2hDO0VBRUEsSUFBSUMsSUFBQSxFQUF5QjtJQUMzQixPQUFPLE1BQU0sS0FBS0MsU0FBQSxDQUFVO0VBQzlCO0VBRU9GLFlBQVlHLE9BQUEsRUFBdUJDLGNBQUEsR0FBaUIsTUFBdUI7SUFDaEYsTUFBTTtNQUFFdkIsV0FBQTtNQUFhRCxNQUFBO01BQVFmO0lBQU0sSUFBSTtJQUN2QyxNQUFNO01BQUVxQjtJQUFLLElBQUlOLE1BQUE7SUFDakIsTUFBTXlCLFNBQUEsR0FBdUIsRUFBQztJQUM5QixNQUFNQyxtQkFBQSxHQUFzQixDQUFDLENBQUNILE9BQUE7SUFDOUIsTUFBTTFCLEVBQUEsR0FBSzBCLE9BQUEsSUFBV3RDLEtBQUEsQ0FBTVksRUFBQTtJQUU1QixNQUFNOEIsSUFBQSxHQUFNQyxDQUFBLEtBQU07TUFDaEIsSUFBSSxDQUFDRixtQkFBQSxJQUF1QkYsY0FBQSxJQUFrQixDQUFDM0IsRUFBQSxDQUFHb0IsT0FBQSxDQUFRLGlCQUFpQixLQUFLLENBQUMsS0FBS1osY0FBQSxFQUFnQjtRQUNwR0MsSUFBQSxDQUFLWSxRQUFBLENBQVNyQixFQUFFO01BQ2xCO01BRUEsT0FBTzRCLFNBQUEsQ0FBVUksS0FBQSxDQUFNYixRQUFBLElBQVlBLFFBQUEsS0FBYSxJQUFJO0lBQ3REO0lBRUEsTUFBTUcsS0FBQSxHQUFRO01BQ1osR0FBR1gsTUFBQSxDQUFPQyxXQUFBLENBQ1JELE1BQUEsQ0FBT0UsT0FBQSxDQUFRVCxXQUFXLEVBQUVVLEdBQUEsQ0FBSSxDQUFDLENBQUNDLElBQUEsRUFBTUMsUUFBTyxNQUFNO1FBQ25ELE1BQU1pQixjQUFBLEdBQWlCQSxDQUFBLEdBQUlmLElBQUEsS0FBa0I7VUFDM0MsTUFBTWhCLEtBQUEsR0FBUSxLQUFLUSxVQUFBLENBQVdWLEVBQUEsRUFBSTJCLGNBQWM7VUFDaEQsTUFBTVIsUUFBQSxHQUFXSCxRQUFBLENBQVEsR0FBR0UsSUFBSSxFQUFFaEIsS0FBSztVQUV2QzBCLFNBQUEsQ0FBVU0sSUFBQSxDQUFLZixRQUFRO1VBRXZCLE9BQU9HLEtBQUE7UUFDVDtRQUVBLE9BQU8sQ0FBQ1AsSUFBQSxFQUFNa0IsY0FBYztNQUM5QixDQUFDLENBQ0g7TUFDQUYsR0FBQSxFQUFBRDtJQUNGO0lBRUEsT0FBT1IsS0FBQTtFQUNUO0VBRU9HLFVBQVVDLE9BQUEsRUFBb0M7SUFDbkQsTUFBTTtNQUFFdEIsV0FBQTtNQUFhaEI7SUFBTSxJQUFJO0lBQy9CLE1BQU1pQyxRQUFBLEdBQVc7SUFDakIsTUFBTXJCLEVBQUEsR0FBSzBCLE9BQUEsSUFBV3RDLEtBQUEsQ0FBTVksRUFBQTtJQUM1QixNQUFNRSxLQUFBLEdBQVEsS0FBS1EsVUFBQSxDQUFXVixFQUFBLEVBQUlxQixRQUFRO0lBQzFDLE1BQU1jLGlCQUFBLEdBQW9CeEIsTUFBQSxDQUFPQyxXQUFBLENBQy9CRCxNQUFBLENBQU9FLE9BQUEsQ0FBUVQsV0FBVyxFQUFFVSxHQUFBLENBQUksQ0FBQyxDQUFDQyxJQUFBLEVBQU1DLFFBQU8sTUFBTTtNQUNuRCxPQUFPLENBQUNELElBQUEsRUFBTSxJQUFJRyxJQUFBLEtBQWtCRixRQUFBLENBQVEsR0FBR0UsSUFBSSxFQUFFO1FBQUUsR0FBR2hCLEtBQUE7UUFBT21CLFFBQUEsRUFBVTtNQUFVLENBQUMsQ0FBQztJQUN6RixDQUFDLENBQ0g7SUFFQSxPQUFPO01BQ0wsR0FBR2MsaUJBQUE7TUFDSGIsS0FBQSxFQUFPQSxDQUFBLEtBQU0sS0FBS0MsV0FBQSxDQUFZdkIsRUFBQSxFQUFJcUIsUUFBUTtJQUM1QztFQUNGO0VBRU9YLFdBQVdWLEVBQUEsRUFBaUIyQixjQUFBLEdBQWlCLE1BQW9CO0lBQ3RFLE1BQU07TUFBRXZCLFdBQUE7TUFBYUQsTUFBQTtNQUFRZjtJQUFNLElBQUk7SUFDdkMsTUFBTTtNQUFFcUI7SUFBSyxJQUFJTixNQUFBO0lBRWpCLE1BQU1ELEtBQUEsR0FBc0I7TUFDMUJGLEVBQUE7TUFDQUcsTUFBQTtNQUNBTSxJQUFBO01BQ0FyQixLQUFBLEVBQU83SixvQkFBQSxDQUFxQjtRQUMxQjZKLEtBQUE7UUFDQUMsV0FBQSxFQUFhVztNQUNmLENBQUM7TUFDRHFCLFFBQUEsRUFBVU0sY0FBQSxHQUFpQixNQUFNLFNBQVk7TUFDN0NMLEtBQUEsRUFBT0EsQ0FBQSxLQUFNLEtBQUtDLFdBQUEsQ0FBWXZCLEVBQUEsRUFBSTJCLGNBQWM7TUFDaERILEdBQUEsRUFBS0EsQ0FBQSxLQUFNLEtBQUtDLFNBQUEsQ0FBVXpCLEVBQUU7TUFDNUIsSUFBSU0sU0FBQSxFQUFXO1FBQ2IsT0FBT0ssTUFBQSxDQUFPQyxXQUFBLENBQ1pELE1BQUEsQ0FBT0UsT0FBQSxDQUFRVCxXQUFXLEVBQUVVLEdBQUEsQ0FBSSxDQUFDLENBQUNDLElBQUEsRUFBTUMsUUFBTyxNQUFNO1VBQ25ELE9BQU8sQ0FBQ0QsSUFBQSxFQUFNLElBQUlHLElBQUEsS0FBa0JGLFFBQUEsQ0FBUSxHQUFHRSxJQUFJLEVBQUVoQixLQUFLLENBQUM7UUFDN0QsQ0FBQyxDQUNIO01BQ0Y7SUFDRjtJQUVBLE9BQU9BLEtBQUE7RUFDVDtBQUNGO0FDaklPLElBQU1rQyxZQUFBLEdBQU4sTUFBa0Q7RUFBbERuQyxZQUFBO0lBQ0wsS0FBUTJCLFNBQUEsR0FBZ0UsQ0FBQztFQUFBO0VBRWxFUyxHQUFxQ0MsS0FBQSxFQUFrQkMsRUFBQSxFQUEwQztJQUN0RyxJQUFJLENBQUMsS0FBS1gsU0FBQSxDQUFVVSxLQUFBLEdBQVE7TUFDMUIsS0FBS1YsU0FBQSxDQUFVVSxLQUFBLElBQVMsRUFBQztJQUMzQjtJQUVBLEtBQUtWLFNBQUEsQ0FBVVUsS0FBQSxFQUFPSixJQUFBLENBQUtLLEVBQUU7SUFFN0IsT0FBTztFQUNUO0VBRU9DLEtBQXVDRixLQUFBLEtBQXFCcEIsSUFBQSxFQUF3QztJQUN6RyxNQUFNVSxTQUFBLEdBQVksS0FBS0EsU0FBQSxDQUFVVSxLQUFBO0lBRWpDLElBQUlWLFNBQUEsRUFBVztNQUNiQSxTQUFBLENBQVVhLE9BQUEsQ0FBUXRCLFFBQUEsSUFBWUEsUUFBQSxDQUFTMUIsS0FBQSxDQUFNLE1BQU15QixJQUFJLENBQUM7SUFDMUQ7SUFFQSxPQUFPO0VBQ1Q7RUFFT3dCLElBQXNDSixLQUFBLEVBQWtCQyxFQUFBLEVBQTJDO0lBQ3hHLE1BQU1YLFNBQUEsR0FBWSxLQUFLQSxTQUFBLENBQVVVLEtBQUE7SUFFakMsSUFBSVYsU0FBQSxFQUFXO01BQ2IsSUFBSVcsRUFBQSxFQUFJO1FBQ04sS0FBS1gsU0FBQSxDQUFVVSxLQUFBLElBQVNWLFNBQUEsQ0FBVWUsTUFBQSxDQUFPeEIsUUFBQSxJQUFZQSxRQUFBLEtBQWFvQixFQUFFO01BQ3RFLE9BQU87UUFDTCxPQUFPLEtBQUtYLFNBQUEsQ0FBVVUsS0FBQTtNQUN4QjtJQUNGO0lBRUEsT0FBTztFQUNUO0VBRU9NLEtBQXVDTixLQUFBLEVBQWtCQyxFQUFBLEVBQTBDO0lBQ3hHLE1BQU1NLE1BQUEsR0FBU0EsQ0FBQSxHQUFJM0IsSUFBQSxLQUFxQztNQUN0RCxLQUFLd0IsR0FBQSxDQUFJSixLQUFBLEVBQU9PLE1BQU07TUFDdEJOLEVBQUEsQ0FBRzlDLEtBQUEsQ0FBTSxNQUFNeUIsSUFBSTtJQUNyQjtJQUVBLE9BQU8sS0FBS21CLEVBQUEsQ0FBR0MsS0FBQSxFQUFPTyxNQUFNO0VBQzlCO0VBRU9DLG1CQUFBLEVBQTJCO0lBQ2hDLEtBQUtsQixTQUFBLEdBQVksQ0FBQztFQUNwQjtBQUNGO0F6RC9DTyxTQUFTdE0sd0JBQXdCeU4sTUFBQSxFQUF5QkMsWUFBQSxFQUF3QztFQUN2RyxNQUFNQyxTQUFBLEdBQVksSUFBSTNILGdCQUFBLENBQUE0SCxTQUFBLENBQVVILE1BQU07RUFFdENDLFlBQUEsQ0FBYVAsT0FBQSxDQUFRcEQsV0FBQSxJQUFlO0lBQ2xDQSxXQUFBLENBQVk4RCxLQUFBLENBQU1WLE9BQUEsQ0FBUVcsSUFBQSxJQUFRO01BQ2hDSCxTQUFBLENBQVVHLElBQUEsQ0FBS0EsSUFBSTtJQUNyQixDQUFDO0VBQ0gsQ0FBQztFQUVELE9BQU9ILFNBQUE7QUFDVDtBMERwQkEsSUFBTUksaUJBQUEsR0FBcUJDLElBQUEsSUFBc0I7RUFDL0MsTUFBTUMsUUFBQSxHQUFXRCxJQUFBLENBQUtFLFVBQUE7RUFFdEIsU0FBU0MsQ0FBQSxHQUFJRixRQUFBLENBQVNHLE1BQUEsR0FBUyxHQUFHRCxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLLEdBQUc7SUFDaEQsTUFBTUUsS0FBQSxHQUFRSixRQUFBLENBQVNFLENBQUE7SUFFdkIsSUFBSUUsS0FBQSxDQUFNQyxRQUFBLEtBQWEsS0FBS0QsS0FBQSxDQUFNRSxTQUFBLElBQWEsZ0JBQWdCQyxJQUFBLENBQUtILEtBQUEsQ0FBTUUsU0FBUyxHQUFHO01BQ3BGUCxJQUFBLENBQUtTLFdBQUEsQ0FBWUosS0FBSztJQUN4QixXQUFXQSxLQUFBLENBQU1DLFFBQUEsS0FBYSxHQUFHO01BQy9CUCxpQkFBQSxDQUFrQk0sS0FBb0I7SUFDeEM7RUFDRjtFQUVBLE9BQU9MLElBQUE7QUFDVDtBQUVPLFNBQVN2TixrQkFBa0JpTyxLQUFBLEVBQTRCO0VBQzVELElBQUksT0FBT0MsTUFBQSxLQUFXLGFBQWE7SUFDakMsTUFBTSxJQUFJQyxLQUFBLENBQU0sc0ZBQXNGO0VBQ3hHO0VBRUEsTUFBTUMsWUFBQSxHQUFlLFNBQVNILEtBQUE7RUFFOUIsTUFBTUksSUFBQSxHQUFPLElBQUlILE1BQUEsQ0FBT0ksU0FBQSxDQUFVLEVBQUVDLGVBQUEsQ0FBZ0JILFlBQUEsRUFBYyxXQUFXLEVBQUVJLElBQUE7RUFFL0UsT0FBT2xCLGlCQUFBLENBQWtCZSxJQUFJO0FBQy9CO0F6RFBPLFNBQVN6TyxzQkFDZDZPLE9BQUEsRUFDQTNFLE1BQUEsRUFDQTRFLE9BQUEsRUFDNEI7RUFDNUIsSUFBSUQsT0FBQSxZQUFtQmpKLFlBQUEsQ0FBQXpHLElBQUEsSUFBbUIwUCxPQUFBLFlBQW1CakosWUFBQSxDQUFBOUcsUUFBQSxFQUFVO0lBQ3JFLE9BQU8rUCxPQUFBO0VBQ1Q7RUFDQUMsT0FBQSxHQUFVO0lBQ1JDLEtBQUEsRUFBTztJQUNQQyxZQUFBLEVBQWMsQ0FBQztJQUNmLEdBQUdGO0VBQ0w7RUFFQSxNQUFNRyxhQUFBLEdBQWdCLE9BQU9KLE9BQUEsS0FBWSxZQUFZQSxPQUFBLEtBQVk7RUFDakUsTUFBTUssYUFBQSxHQUFnQixPQUFPTCxPQUFBLEtBQVk7RUFFekMsSUFBSUksYUFBQSxFQUFlO0lBQ2pCLElBQUk7TUFDRixNQUFNRSxjQUFBLEdBQWlCQyxLQUFBLENBQU1DLE9BQUEsQ0FBUVIsT0FBTyxLQUFLQSxPQUFBLENBQVFkLE1BQUEsR0FBUztNQUdsRSxJQUFJb0IsY0FBQSxFQUFnQjtRQUNsQixPQUFPdkosWUFBQSxDQUFBOUcsUUFBQSxDQUFTd1EsU0FBQSxDQUFVVCxPQUFBLENBQVExRCxHQUFBLENBQUlvRSxJQUFBLElBQVFyRixNQUFBLENBQU9zRixZQUFBLENBQWFELElBQUksQ0FBQyxDQUFDO01BQzFFO01BRUEsTUFBTTVCLElBQUEsR0FBT3pELE1BQUEsQ0FBT3NGLFlBQUEsQ0FBYVgsT0FBTztNQUV4QyxJQUFJQyxPQUFBLENBQVFXLHFCQUFBLEVBQXVCO1FBQ2pDOUIsSUFBQSxDQUFLK0IsS0FBQSxDQUFNO01BQ2I7TUFFQSxPQUFPL0IsSUFBQTtJQUNULFNBQVNnQyxLQUFBLEVBQVQ7TUFDRSxJQUFJYixPQUFBLENBQVFXLHFCQUFBLEVBQXVCO1FBQ2pDLE1BQU0sSUFBSWxCLEtBQUEsQ0FBTSx3Q0FBd0M7VUFBRXFCLEtBQUEsRUFBT0Q7UUFBZSxDQUFDO01BQ25GO01BRUFFLE9BQUEsQ0FBUUMsSUFBQSxDQUFLLG1DQUFtQyxpQkFBaUJqQixPQUFBLEVBQVMsVUFBVWMsS0FBSztNQUV6RixPQUFPM1AscUJBQUEsQ0FBc0IsSUFBSWtLLE1BQUEsRUFBUTRFLE9BQU87SUFDbEQ7RUFDRjtFQUVBLElBQUlJLGFBQUEsRUFBZTtJQUVqQixJQUFJSixPQUFBLENBQVFXLHFCQUFBLEVBQXVCO01BQ2pDLElBQUlNLGlCQUFBLEdBQW9CO01BQ3hCLElBQUlDLGNBQUEsR0FBaUI7TUFHckIsTUFBTUMsa0JBQUEsR0FBcUIsSUFBSXJLLFlBQUEsQ0FBQXNLLE1BQUEsQ0FBTztRQUNwQ0MsT0FBQSxFQUFTakcsTUFBQSxDQUFPa0csSUFBQSxDQUFLRCxPQUFBO1FBQ3JCRSxLQUFBLEVBQU9uRyxNQUFBLENBQU9rRyxJQUFBLENBQUtDLEtBQUE7UUFHbkJDLEtBQUEsRUFBT3BHLE1BQUEsQ0FBT2tHLElBQUEsQ0FBS0UsS0FBQSxDQUFNQyxNQUFBLENBQU87VUFDOUJDLDRDQUFBLEVBQThDO1lBQzVDM0IsT0FBQSxFQUFTO1lBQ1Q0QixLQUFBLEVBQU87WUFDUEMsUUFBQSxFQUFVLENBQ1I7Y0FDRUMsR0FBQSxFQUFLO2NBQ0xDLFFBQUEsRUFBVUMsQ0FBQSxJQUFLO2dCQUViZCxpQkFBQSxHQUFvQjtnQkFFcEJDLGNBQUEsR0FBaUIsT0FBT2EsQ0FBQSxLQUFNLFdBQVdBLENBQUEsR0FBSUEsQ0FBQSxDQUFFQyxTQUFBO2dCQUMvQyxPQUFPO2NBQ1Q7WUFDRjtVQUVKO1FBQ0YsQ0FBQztNQUNILENBQUM7TUFFRCxJQUFJaEMsT0FBQSxDQUFRQyxLQUFBLEVBQU87UUFDakJuSixZQUFBLENBQUE4SSxTQUFBLENBQVVxQyxVQUFBLENBQVdkLGtCQUFrQixFQUFFZSxVQUFBLENBQVc1USxpQkFBQSxDQUFrQnlPLE9BQU8sR0FBR0MsT0FBQSxDQUFRRSxZQUFZO01BQ3RHLE9BQU87UUFDTHBKLFlBQUEsQ0FBQThJLFNBQUEsQ0FBVXFDLFVBQUEsQ0FBV2Qsa0JBQWtCLEVBQUVnQixLQUFBLENBQU03USxpQkFBQSxDQUFrQnlPLE9BQU8sR0FBR0MsT0FBQSxDQUFRRSxZQUFZO01BQ2pHO01BRUEsSUFBSUYsT0FBQSxDQUFRVyxxQkFBQSxJQUF5Qk0saUJBQUEsRUFBbUI7UUFDdEQsTUFBTSxJQUFJeEIsS0FBQSxDQUFNLHdDQUF3QztVQUN0RHFCLEtBQUEsRUFBTyxJQUFJckIsS0FBQSxDQUFNLDBCQUEwQnlCLGNBQUEsRUFBZ0I7UUFDN0QsQ0FBQztNQUNIO0lBQ0Y7SUFFQSxNQUFNa0IsTUFBQSxHQUFTdEwsWUFBQSxDQUFBOEksU0FBQSxDQUFVcUMsVUFBQSxDQUFXN0csTUFBTTtJQUUxQyxJQUFJNEUsT0FBQSxDQUFRQyxLQUFBLEVBQU87TUFDakIsT0FBT21DLE1BQUEsQ0FBT0YsVUFBQSxDQUFXNVEsaUJBQUEsQ0FBa0J5TyxPQUFPLEdBQUdDLE9BQUEsQ0FBUUUsWUFBWSxFQUFFSCxPQUFBO0lBQzdFO0lBRUEsT0FBT3FDLE1BQUEsQ0FBT0QsS0FBQSxDQUFNN1EsaUJBQUEsQ0FBa0J5TyxPQUFPLEdBQUdDLE9BQUEsQ0FBUUUsWUFBWTtFQUN0RTtFQUVBLE9BQU9oUCxxQkFBQSxDQUFzQixJQUFJa0ssTUFBQSxFQUFRNEUsT0FBTztBQUNsRDtBMEQxR08sU0FBU2pQLGVBQ2RnUCxPQUFBLEVBQ0EzRSxNQUFBLEVBQ0E4RSxZQUFBLEdBQTZCLENBQUMsR0FDOUJGLE9BQUEsR0FBK0MsQ0FBQyxHQUMvQjtFQUNqQixPQUFPOU8scUJBQUEsQ0FBc0I2TyxPQUFBLEVBQVMzRSxNQUFBLEVBQVE7SUFDNUM2RSxLQUFBLEVBQU87SUFDUEMsWUFBQTtJQUNBUyxxQkFBQSxFQUF1QlgsT0FBQSxDQUFRVztFQUNqQyxDQUFDO0FBQ0g7QUNoQk8sU0FBU3ZQLGVBQWVpUixLQUFBLEVBQXNDO0VBQ25FLFNBQVNyRCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJcUQsS0FBQSxDQUFNQyxTQUFBLEVBQVd0RCxDQUFBLElBQUssR0FBRztJQUMzQyxNQUFNO01BQUV1RDtJQUFLLElBQUlGLEtBQUEsQ0FBTUcsSUFBQSxDQUFLeEQsQ0FBQztJQUU3QixJQUFJdUQsSUFBQSxDQUFLRSxXQUFBLElBQWUsQ0FBQ0YsSUFBQSxDQUFLRyxnQkFBQSxDQUFpQixHQUFHO01BQ2hELE9BQU9ILElBQUE7SUFDVDtFQUNGO0VBRUEsT0FBTztBQUNUO0FDUE8sU0FBUzdRLGFBQWFtTixJQUFBLEVBQXVCOEQsU0FBQSxFQUFxQztFQUN2RixNQUFNQyxZQUFBLEdBQThCLEVBQUM7RUFFckMvRCxJQUFBLENBQUtnRSxXQUFBLENBQVksQ0FBQzNELEtBQUEsRUFBTzRELEdBQUEsS0FBUTtJQUMvQixJQUFJSCxTQUFBLENBQVV6RCxLQUFLLEdBQUc7TUFDcEIwRCxZQUFBLENBQWFuRixJQUFBLENBQUs7UUFDaEJvQixJQUFBLEVBQU1LLEtBQUE7UUFDTjREO01BQ0YsQ0FBQztJQUNIO0VBQ0YsQ0FBQztFQUVELE9BQU9GLFlBQUE7QUFDVDtBQ1pPLFNBQVNqUixvQkFBb0JrTixJQUFBLEVBQXVCa0UsS0FBQSxFQUFjSixTQUFBLEVBQXFDO0VBQzVHLE1BQU1DLFlBQUEsR0FBOEIsRUFBQztFQWFyQy9ELElBQUEsQ0FBS21FLFlBQUEsQ0FBYUQsS0FBQSxDQUFNRSxJQUFBLEVBQU1GLEtBQUEsQ0FBTUcsRUFBQSxFQUFJLENBQUNoRSxLQUFBLEVBQU80RCxHQUFBLEtBQVE7SUFDdEQsSUFBSUgsU0FBQSxDQUFVekQsS0FBSyxHQUFHO01BQ3BCMEQsWUFBQSxDQUFhbkYsSUFBQSxDQUFLO1FBQ2hCb0IsSUFBQSxFQUFNSyxLQUFBO1FBQ040RDtNQUNGLENBQUM7SUFDSDtFQUNGLENBQUM7RUFFRCxPQUFPRixZQUFBO0FBQ1Q7QUN0Qk8sU0FBUzlRLDJCQUNkcVIsSUFBQSxFQUNBUixTQUFBLEVBUVk7RUFDWixTQUFTM0QsQ0FBQSxHQUFJbUUsSUFBQSxDQUFLQyxLQUFBLEVBQU9wRSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxJQUFLLEdBQUc7SUFDdEMsTUFBTUgsSUFBQSxHQUFPc0UsSUFBQSxDQUFLdEUsSUFBQSxDQUFLRyxDQUFDO0lBRXhCLElBQUkyRCxTQUFBLENBQVU5RCxJQUFJLEdBQUc7TUFDbkIsT0FBTztRQUNMaUUsR0FBQSxFQUFLOUQsQ0FBQSxHQUFJLElBQUltRSxJQUFBLENBQUtFLE1BQUEsQ0FBT3JFLENBQUMsSUFBSTtRQUM5QnNFLEtBQUEsRUFBT0gsSUFBQSxDQUFLRyxLQUFBLENBQU10RSxDQUFDO1FBQ25Cb0UsS0FBQSxFQUFPcEUsQ0FBQTtRQUNQSDtNQUNGO0lBQ0Y7RUFDRjtBQUNGO0FDdkJPLFNBQVNoTixlQUNkOFEsU0FBQSxFQUN5RTtFQUN6RSxPQUFROUgsU0FBQSxJQUF5Qi9JLDBCQUFBLENBQTJCK0ksU0FBQSxDQUFVMEksS0FBQSxFQUFPWixTQUFTO0FBQ3hGO0FDTE8sU0FBU25RLGtCQUNkZ1IsU0FBQSxFQUNBQyxLQUFBLEVBQ0FDLE9BQUEsRUFDZTtFQUNmLElBQUlGLFNBQUEsQ0FBVTlJLE1BQUEsQ0FBTytJLEtBQUEsTUFBNEMsVUFBYUQsU0FBQSxDQUFVRyxNQUFBLEVBQVE7SUFDOUYsT0FBT25SLGlCQUFBLENBQWtCZ1IsU0FBQSxDQUFVRyxNQUFBLEVBQVFGLEtBQUEsRUFBT0MsT0FBTztFQUMzRDtFQUVBLElBQUksT0FBT0YsU0FBQSxDQUFVOUksTUFBQSxDQUFPK0ksS0FBQSxNQUE0QyxZQUFZO0lBQ2xGLE1BQU1sRSxLQUFBLEdBQVNpRSxTQUFBLENBQVU5SSxNQUFBLENBQU8rSSxLQUFBLEVBQWdEeEksSUFBQSxDQUFLO01BQ25GLEdBQUd5SSxPQUFBO01BQ0hDLE1BQUEsRUFBUUgsU0FBQSxDQUFVRyxNQUFBLEdBQVNuUixpQkFBQSxDQUFrQmdSLFNBQUEsQ0FBVUcsTUFBQSxFQUFRRixLQUFBLEVBQU9DLE9BQU8sSUFBSTtJQUNuRixDQUFDO0lBRUQsT0FBT25FLEtBQUE7RUFDVDtFQUVBLE9BQU9pRSxTQUFBLENBQVU5SSxNQUFBLENBQU8rSSxLQUFBO0FBQzFCO0FDdkJPLFNBQVMxUixrQkFBa0JQLFVBQUEsRUFBb0M7RUFDcEUsT0FDRUEsVUFBQSxDQUNHNkssR0FBQSxDQUFJbUgsU0FBQSxJQUFhO0lBQ2hCLE1BQU1FLE9BQUEsR0FBVTtNQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtNQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7TUFDbkI0RCxPQUFBLEVBQVNKLFNBQUEsQ0FBVUk7SUFDckI7SUFFQSxNQUFNQyxhQUFBLEdBQWdCclIsaUJBQUEsQ0FBOENnUixTQUFBLEVBQVcsaUJBQWlCRSxPQUFPO0lBRXZHLElBQUlHLGFBQUEsRUFBZTtNQUNqQixPQUFPLENBQUNMLFNBQUEsRUFBVyxHQUFHelIsaUJBQUEsQ0FBa0I4UixhQUFBLENBQWMsQ0FBQyxDQUFDO0lBQzFEO0lBRUEsT0FBT0wsU0FBQTtFQUNULENBQUMsRUFFQU0sSUFBQSxDQUFLLEVBQUU7QUFFZDtBL0QxQk8sU0FBU3JSLG9CQUFvQnNSLFFBQUEsRUFBb0IzSSxNQUFBLEVBQXdCO0VBQzlFLE1BQU00SSxnQkFBQSxHQUFtQmhOLGFBQUEsQ0FBQWlOLGFBQUEsQ0FBY2hDLFVBQUEsQ0FBVzdHLE1BQU0sRUFBRThJLGlCQUFBLENBQWtCSCxRQUFRO0VBRXBGLE1BQU1JLGlCQUFBLEdBQW9CQyxRQUFBLENBQVNDLGNBQUEsQ0FBZUMsa0JBQUEsQ0FBbUI7RUFDckUsTUFBTUMsU0FBQSxHQUFZSixpQkFBQSxDQUFrQm5ULGFBQUEsQ0FBYyxLQUFLO0VBRXZEdVQsU0FBQSxDQUFVQyxXQUFBLENBQVlSLGdCQUFnQjtFQUV0QyxPQUFPTyxTQUFBLENBQVVFLFNBQUE7QUFDbkI7QWdFWE8sU0FBU3RRLFdBQVdvTCxLQUFBLEVBQStCO0VBQ3hELE9BQU8sT0FBT0EsS0FBQSxLQUFVO0FBQzFCO0FDT08sU0FBUzVPLGFBQWdCNE8sS0FBQSxFQUFVbUUsT0FBQSxHQUFlLFdBQWNqSSxLQUFBLEVBQWtDO0VBQ3ZHLElBQUl0SCxVQUFBLENBQVdvTCxLQUFLLEdBQUc7SUFDckIsSUFBSW1FLE9BQUEsRUFBUztNQUNYLE9BQU9uRSxLQUFBLENBQU10RSxJQUFBLENBQUt5SSxPQUFPLEVBQUUsR0FBR2pJLEtBQUs7SUFDckM7SUFFQSxPQUFPOEQsS0FBQSxDQUFNLEdBQUc5RCxLQUFLO0VBQ3ZCO0VBRUEsT0FBTzhELEtBQUE7QUFDVDtBQ3BCTyxTQUFTdEwsY0FBY3NMLEtBQUEsR0FBUSxDQUFDLEdBQVk7RUFDakQsT0FBT3JELE1BQUEsQ0FBT3dJLElBQUEsQ0FBS25GLEtBQUssRUFBRU4sTUFBQSxLQUFXLEtBQUtNLEtBQUEsQ0FBTS9ELFdBQUEsS0FBZ0JVLE1BQUE7QUFDbEU7QUNHTyxTQUFTbEcsZ0JBQWdCeEUsVUFBQSxFQUF3QjtFQUN0RCxNQUFNbVQsY0FBQSxHQUFpQm5ULFVBQUEsQ0FBVzBNLE1BQUEsQ0FBT3NGLFNBQUEsSUFBYUEsU0FBQSxDQUFVakIsSUFBQSxLQUFTLFdBQVc7RUFDcEYsTUFBTXFDLGNBQUEsR0FBaUJwVCxVQUFBLENBQVcwTSxNQUFBLENBQU9zRixTQUFBLElBQWFBLFNBQUEsQ0FBVWpCLElBQUEsS0FBUyxNQUFNO0VBQy9FLE1BQU1zQyxjQUFBLEdBQWlCclQsVUFBQSxDQUFXME0sTUFBQSxDQUFPc0YsU0FBQSxJQUFhQSxTQUFBLENBQVVqQixJQUFBLEtBQVMsTUFBTTtFQUUvRSxPQUFPO0lBQ0xvQyxjQUFBO0lBQ0FDLGNBQUE7SUFDQUM7RUFDRjtBQUNGO0FDTk8sU0FBU3hTLDRCQUE0QmIsVUFBQSxFQUE4QztFQUN4RixNQUFNc1QsbUJBQUEsR0FBNEMsRUFBQztFQUNuRCxNQUFNO0lBQUVGLGNBQUE7SUFBZ0JDO0VBQWUsSUFBSTdPLGVBQUEsQ0FBZ0J4RSxVQUFVO0VBQ3JFLE1BQU11VCxxQkFBQSxHQUF3QixDQUFDLEdBQUdILGNBQUEsRUFBZ0IsR0FBR0MsY0FBYztFQUNuRSxNQUFNRyxnQkFBQSxHQUF3RjtJQUM1RkMsT0FBQSxFQUFTO0lBQ1RDLFFBQUEsRUFBVTtJQUNWQyxRQUFBLEVBQVU7SUFDVkMsVUFBQSxFQUFZO0lBQ1pDLFNBQUEsRUFBVztJQUNYQyxXQUFBLEVBQWE7SUFDYkMsVUFBQSxFQUFZO0VBQ2Q7RUFFQS9ULFVBQUEsQ0FBV3dNLE9BQUEsQ0FBUXdGLFNBQUEsSUFBYTtJQUM5QixNQUFNRSxPQUFBLEdBQVU7TUFDZHBILElBQUEsRUFBTWtILFNBQUEsQ0FBVWxILElBQUE7TUFDaEIwRCxPQUFBLEVBQVN3RCxTQUFBLENBQVV4RCxPQUFBO01BQ25CNEQsT0FBQSxFQUFTSixTQUFBLENBQVVJLE9BQUE7TUFDbkJwUyxVQUFBLEVBQVl1VDtJQUNkO0lBRUEsTUFBTVMsbUJBQUEsR0FBc0JoVCxpQkFBQSxDQUMxQmdSLFNBQUEsRUFDQSx1QkFDQUUsT0FDRjtJQUVBLElBQUksQ0FBQzhCLG1CQUFBLEVBQXFCO01BQ3hCO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBQSxHQUFtQkQsbUJBQUEsQ0FBb0I7SUFFN0NDLGdCQUFBLENBQWlCekgsT0FBQSxDQUFRMEgsZUFBQSxJQUFtQjtNQUMxQ0EsZUFBQSxDQUFnQkMsS0FBQSxDQUFNM0gsT0FBQSxDQUFRdUUsSUFBQSxJQUFRO1FBQ3BDckcsTUFBQSxDQUFPRSxPQUFBLENBQVFzSixlQUFBLENBQWdCRSxVQUFVLEVBQUU1SCxPQUFBLENBQVEsQ0FBQyxDQUFDMUIsSUFBQSxFQUFNdUosU0FBUyxNQUFNO1VBQ3hFZixtQkFBQSxDQUFvQnJILElBQUEsQ0FBSztZQUN2QjhFLElBQUE7WUFDQWpHLElBQUE7WUFDQXVKLFNBQUEsRUFBVztjQUNULEdBQUdiLGdCQUFBO2NBQ0gsR0FBR2E7WUFDTDtVQUNGLENBQUM7UUFDSCxDQUFDO01BQ0gsQ0FBQztJQUNILENBQUM7RUFDSCxDQUFDO0VBRURkLHFCQUFBLENBQXNCL0csT0FBQSxDQUFRd0YsU0FBQSxJQUFhO0lBQ3pDLE1BQU1FLE9BQUEsR0FBVTtNQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtNQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7TUFDbkI0RCxPQUFBLEVBQVNKLFNBQUEsQ0FBVUk7SUFDckI7SUFFQSxNQUFNa0MsYUFBQSxHQUFnQnRULGlCQUFBLENBQ3BCZ1IsU0FBQSxFQUNBLGlCQUNBRSxPQUNGO0lBRUEsSUFBSSxDQUFDb0MsYUFBQSxFQUFlO01BQ2xCO0lBQ0Y7SUFHQSxNQUFNRixVQUFBLEdBQWFFLGFBQUEsQ0FBYztJQUVqQzVKLE1BQUEsQ0FBT0UsT0FBQSxDQUFRd0osVUFBVSxFQUFFNUgsT0FBQSxDQUFRLENBQUMsQ0FBQzFCLElBQUEsRUFBTXVKLFNBQVMsTUFBTTtNQUN4RCxNQUFNRSxVQUFBLEdBQWE7UUFDakIsR0FBR2YsZ0JBQUE7UUFDSCxHQUFHYTtNQUNMO01BRUEsSUFBSSxRQUFPRSxVQUFBLG9CQUFBQSxVQUFBLENBQVlkLE9BQUEsTUFBWSxZQUFZO1FBQzdDYyxVQUFBLENBQVdkLE9BQUEsR0FBVWMsVUFBQSxDQUFXZCxPQUFBLENBQVE7TUFDMUM7TUFFQSxLQUFJYyxVQUFBLG9CQUFBQSxVQUFBLENBQVlSLFVBQUEsTUFBY1EsVUFBQSxvQkFBQUEsVUFBQSxDQUFZZCxPQUFBLE1BQVksUUFBVztRQUMvRCxPQUFPYyxVQUFBLENBQVdkLE9BQUE7TUFDcEI7TUFFQUgsbUJBQUEsQ0FBb0JySCxJQUFBLENBQUs7UUFDdkI4RSxJQUFBLEVBQU1pQixTQUFBLENBQVVsSCxJQUFBO1FBQ2hCQSxJQUFBO1FBQ0F1SixTQUFBLEVBQVdFO01BQ2IsQ0FBQztJQUNILENBQUM7RUFDSCxDQUFDO0VBRUQsT0FBT2pCLG1CQUFBO0FBQ1Q7QUN0R08sU0FBUzVQLGdCQUFBLEdBQW1COFEsT0FBQSxFQUFxRDtFQUN0RixPQUFPQSxPQUFBLENBQ0o5SCxNQUFBLENBQU91QyxJQUFBLElBQVEsQ0FBQyxDQUFDQSxJQUFJLEVBQ3JCd0YsTUFBQSxDQUFPLENBQUNDLEtBQUEsRUFBT3pGLElBQUEsS0FBUztJQUN2QixNQUFNMEYsZ0JBQUEsR0FBbUI7TUFBRSxHQUFHRDtJQUFNO0lBRXBDaEssTUFBQSxDQUFPRSxPQUFBLENBQVFxRSxJQUFJLEVBQUV6QyxPQUFBLENBQVEsQ0FBQyxDQUFDb0ksR0FBQSxFQUFLN0csS0FBSyxNQUFNO01BQzdDLE1BQU04RyxNQUFBLEdBQVNGLGdCQUFBLENBQWlCQyxHQUFBO01BRWhDLElBQUksQ0FBQ0MsTUFBQSxFQUFRO1FBQ1hGLGdCQUFBLENBQWlCQyxHQUFBLElBQU83RyxLQUFBO1FBRXhCO01BQ0Y7TUFFQSxJQUFJNkcsR0FBQSxLQUFRLFNBQVM7UUFDbkIsTUFBTUUsWUFBQSxHQUF5Qi9HLEtBQUEsR0FBUWdILE1BQUEsQ0FBT2hILEtBQUssRUFBRWlILEtBQUEsQ0FBTSxHQUFHLElBQUksRUFBQztRQUNuRSxNQUFNQyxlQUFBLEdBQTRCTixnQkFBQSxDQUFpQkMsR0FBQSxJQUFPRCxnQkFBQSxDQUFpQkMsR0FBQSxFQUFLSSxLQUFBLENBQU0sR0FBRyxJQUFJLEVBQUM7UUFFOUYsTUFBTUUsYUFBQSxHQUFnQkosWUFBQSxDQUFhcEksTUFBQSxDQUFPeUksVUFBQSxJQUFjLENBQUNGLGVBQUEsQ0FBZ0JHLFFBQUEsQ0FBU0QsVUFBVSxDQUFDO1FBRTdGUixnQkFBQSxDQUFpQkMsR0FBQSxJQUFPLENBQUMsR0FBR0ssZUFBQSxFQUFpQixHQUFHQyxhQUFhLEVBQUVHLElBQUEsQ0FBSyxHQUFHO01BQ3pFLFdBQVdULEdBQUEsS0FBUSxTQUFTO1FBQzFCLE1BQU1VLFNBQUEsR0FBc0J2SCxLQUFBLEdBQ3hCQSxLQUFBLENBQ0dpSCxLQUFBLENBQU0sR0FBRyxFQUNUbkssR0FBQSxDQUFLMEssTUFBQSxJQUFrQkEsTUFBQSxDQUFNQyxJQUFBLENBQUssQ0FBQyxFQUNuQzlJLE1BQUEsQ0FBTytJLE9BQU8sSUFDakIsRUFBQztRQUNMLE1BQU1DLGNBQUEsR0FBMkJmLGdCQUFBLENBQWlCQyxHQUFBLElBQzlDRCxnQkFBQSxDQUFpQkMsR0FBQSxFQUNkSSxLQUFBLENBQU0sR0FBRyxFQUNUbkssR0FBQSxDQUFLMEssTUFBQSxJQUFrQkEsTUFBQSxDQUFNQyxJQUFBLENBQUssQ0FBQyxFQUNuQzlJLE1BQUEsQ0FBTytJLE9BQU8sSUFDakIsRUFBQztRQUVMLE1BQU1FLFFBQUEsR0FBVyxtQkFBSUMsR0FBQSxDQUFvQjtRQUV6Q0YsY0FBQSxDQUFlbEosT0FBQSxDQUFRK0ksTUFBQSxJQUFTO1VBQzlCLE1BQU0sQ0FBQ00sUUFBQSxFQUFVQyxHQUFHLElBQUlQLE1BQUEsQ0FBTVAsS0FBQSxDQUFNLEdBQUcsRUFBRW5LLEdBQUEsQ0FBSWtMLElBQUEsSUFBUUEsSUFBQSxDQUFLUCxJQUFBLENBQUssQ0FBQztVQUVoRUcsUUFBQSxDQUFTSyxHQUFBLENBQUlILFFBQUEsRUFBVUMsR0FBRztRQUM1QixDQUFDO1FBRURSLFNBQUEsQ0FBVTlJLE9BQUEsQ0FBUStJLE1BQUEsSUFBUztVQUN6QixNQUFNLENBQUNNLFFBQUEsRUFBVUMsR0FBRyxJQUFJUCxNQUFBLENBQU1QLEtBQUEsQ0FBTSxHQUFHLEVBQUVuSyxHQUFBLENBQUlrTCxJQUFBLElBQVFBLElBQUEsQ0FBS1AsSUFBQSxDQUFLLENBQUM7VUFFaEVHLFFBQUEsQ0FBU0ssR0FBQSxDQUFJSCxRQUFBLEVBQVVDLEdBQUc7UUFDNUIsQ0FBQztRQUVEbkIsZ0JBQUEsQ0FBaUJDLEdBQUEsSUFBTzlGLEtBQUEsQ0FBTTJDLElBQUEsQ0FBS2tFLFFBQUEsQ0FBUy9LLE9BQUEsQ0FBUSxDQUFDLEVBQ2xEQyxHQUFBLENBQUksQ0FBQyxDQUFDZ0wsUUFBQSxFQUFVQyxHQUFHLE1BQU0sR0FBR0QsUUFBQSxLQUFhQyxHQUFBLEVBQUssRUFDOUNULElBQUEsQ0FBSyxJQUFJO01BQ2QsT0FBTztRQUNMVixnQkFBQSxDQUFpQkMsR0FBQSxJQUFPN0csS0FBQTtNQUMxQjtJQUNGLENBQUM7SUFFRCxPQUFPNEcsZ0JBQUE7RUFDVCxHQUFHLENBQUMsQ0FBQztBQUNUO0FDdkRPLFNBQVNsVCxzQkFDZHdVLFVBQUEsRUFDQTNDLG1CQUFBLEVBQ3FCO0VBQ3JCLE9BQU9BLG1CQUFBLENBQ0o1RyxNQUFBLENBQU8ySCxTQUFBLElBQWFBLFNBQUEsQ0FBVXRELElBQUEsS0FBU2tGLFVBQUEsQ0FBV2xGLElBQUEsQ0FBS2pHLElBQUksRUFDM0Q0QixNQUFBLENBQU91QyxJQUFBLElBQVFBLElBQUEsQ0FBS29GLFNBQUEsQ0FBVVYsUUFBUSxFQUN0QzlJLEdBQUEsQ0FBSW9FLElBQUEsSUFBUTtJQUNYLElBQUksQ0FBQ0EsSUFBQSxDQUFLb0YsU0FBQSxDQUFVVCxVQUFBLEVBQVk7TUFDOUIsT0FBTztRQUNMLENBQUMzRSxJQUFBLENBQUtuRSxJQUFBLEdBQU9tTCxVQUFBLENBQVdDLEtBQUEsQ0FBTWpILElBQUEsQ0FBS25FLElBQUE7TUFDckM7SUFDRjtJQUVBLE9BQU9tRSxJQUFBLENBQUtvRixTQUFBLENBQVVULFVBQUEsQ0FBV3FDLFVBQUEsQ0FBV0MsS0FBSyxLQUFLLENBQUM7RUFDekQsQ0FBQyxFQUNBekIsTUFBQSxDQUFPLENBQUNMLFVBQUEsRUFBWUMsU0FBQSxLQUFjM1EsZUFBQSxDQUFnQjBRLFVBQUEsRUFBWUMsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNqRjtBQ3RCTyxTQUFTN1QsV0FBV3VOLEtBQUEsRUFBaUI7RUFDMUMsSUFBSSxPQUFPQSxLQUFBLEtBQVUsVUFBVTtJQUM3QixPQUFPQSxLQUFBO0VBQ1Q7RUFFQSxJQUFJQSxLQUFBLENBQU04QyxLQUFBLENBQU0sc0JBQXNCLEdBQUc7SUFDdkMsT0FBT3NGLE1BQUEsQ0FBT3BJLEtBQUs7RUFDckI7RUFFQSxJQUFJQSxLQUFBLEtBQVUsUUFBUTtJQUNwQixPQUFPO0VBQ1Q7RUFFQSxJQUFJQSxLQUFBLEtBQVUsU0FBUztJQUNyQixPQUFPO0VBQ1Q7RUFFQSxPQUFPQSxLQUFBO0FBQ1Q7QUNQTyxTQUFTNUwscUNBQ2RpVSxTQUFBLEVBQ0E5QyxtQkFBQSxFQUNXO0VBQ1gsSUFBSSxXQUFXOEMsU0FBQSxFQUFXO0lBQ3hCLE9BQU9BLFNBQUE7RUFDVDtFQUVBLE9BQU87SUFDTCxHQUFHQSxTQUFBO0lBQ0g5RixRQUFBLEVBQVdqRCxJQUFBLElBQXNCO01BQy9CLE1BQU1nSixhQUFBLEdBQWdCRCxTQUFBLENBQVU5RixRQUFBLEdBQVc4RixTQUFBLENBQVU5RixRQUFBLENBQVNqRCxJQUFJLElBQUkrSSxTQUFBLENBQVVGLEtBQUE7TUFFaEYsSUFBSUcsYUFBQSxLQUFrQixPQUFPO1FBQzNCLE9BQU87TUFDVDtNQUVBLE1BQU1DLGFBQUEsR0FBZ0JoRCxtQkFBQSxDQUFvQm1CLE1BQUEsQ0FBTyxDQUFDQyxLQUFBLEVBQU96RixJQUFBLEtBQVM7UUFDaEUsTUFBTWxCLEtBQUEsR0FBUWtCLElBQUEsQ0FBS29GLFNBQUEsQ0FBVVIsU0FBQSxHQUN6QjVFLElBQUEsQ0FBS29GLFNBQUEsQ0FBVVIsU0FBQSxDQUFVeEcsSUFBSSxJQUM3QjdNLFVBQUEsQ0FBVzZNLElBQUEsQ0FBS2tKLFlBQUEsQ0FBYXRILElBQUEsQ0FBS25FLElBQUksQ0FBQztRQUUzQyxJQUFJaUQsS0FBQSxLQUFVLFFBQVFBLEtBQUEsS0FBVSxRQUFXO1VBQ3pDLE9BQU8yRyxLQUFBO1FBQ1Q7UUFFQSxPQUFPO1VBQ0wsR0FBR0EsS0FBQTtVQUNILENBQUN6RixJQUFBLENBQUtuRSxJQUFBLEdBQU9pRDtRQUNmO01BQ0YsR0FBRyxDQUFDLENBQUM7TUFFTCxPQUFPO1FBQUUsR0FBR3NJLGFBQUE7UUFBZSxHQUFHQztNQUFjO0lBQzlDO0VBQ0Y7QUFDRjtBdkVqQ0EsU0FBU0Usa0JBQXFCQyxJQUFBLEVBQVM7RUFDckMsT0FBTy9MLE1BQUEsQ0FBT0MsV0FBQSxDQUVaRCxNQUFBLENBQU9FLE9BQUEsQ0FBUTZMLElBQUksRUFBRS9KLE1BQUEsQ0FBTyxDQUFDLENBQUNrSSxHQUFBLEVBQUs3RyxLQUFLLE1BQU07SUFDNUMsSUFBSTZHLEdBQUEsS0FBUSxXQUFXblMsYUFBQSxDQUFjc0wsS0FBMkIsR0FBRztNQUNqRSxPQUFPO0lBQ1Q7SUFFQSxPQUFPQSxLQUFBLEtBQVUsUUFBUUEsS0FBQSxLQUFVO0VBQ3JDLENBQUMsQ0FDSDtBQUNGO0FBUU8sU0FBU3BNLDhCQUE4QjNCLFVBQUEsRUFBd0JrSyxNQUFBLEVBQXlCO0VBaEMvRixJQUFBd00sRUFBQTtFQWlDRSxNQUFNQyxhQUFBLEdBQWdCOVYsMkJBQUEsQ0FBNEJiLFVBQVU7RUFDNUQsTUFBTTtJQUFFb1QsY0FBQTtJQUFnQkM7RUFBZSxJQUFJN08sZUFBQSxDQUFnQnhFLFVBQVU7RUFDckUsTUFBTTZQLE9BQUEsSUFBVTZHLEVBQUEsR0FBQXRELGNBQUEsQ0FBZXdELElBQUEsQ0FBSzVFLFNBQUEsSUFBYWhSLGlCQUFBLENBQWtCZ1IsU0FBQSxFQUFXLFNBQVMsQ0FBQyxNQUF4RSxnQkFBQTBFLEVBQUEsQ0FBMkU1TCxJQUFBO0VBRTNGLE1BQU1rRixLQUFBLEdBQVF0RixNQUFBLENBQU9DLFdBQUEsQ0FDbkJ5SSxjQUFBLENBQWV2SSxHQUFBLENBQUltSCxTQUFBLElBQWE7SUFDOUIsTUFBTXNCLG1CQUFBLEdBQXNCcUQsYUFBQSxDQUFjakssTUFBQSxDQUFPMkgsU0FBQSxJQUFhQSxTQUFBLENBQVV0RCxJQUFBLEtBQVNpQixTQUFBLENBQVVsSCxJQUFJO0lBQy9GLE1BQU1vSCxPQUFBLEdBQVU7TUFDZHBILElBQUEsRUFBTWtILFNBQUEsQ0FBVWxILElBQUE7TUFDaEIwRCxPQUFBLEVBQVN3RCxTQUFBLENBQVV4RCxPQUFBO01BQ25CNEQsT0FBQSxFQUFTSixTQUFBLENBQVVJLE9BQUE7TUFDbkJsSTtJQUNGO0lBRUEsTUFBTTJNLGVBQUEsR0FBa0I3VyxVQUFBLENBQVd5VSxNQUFBLENBQU8sQ0FBQ3FDLE1BQUEsRUFBUXZHLENBQUEsS0FBTTtNQUN2RCxNQUFNd0csZ0JBQUEsR0FBbUIvVixpQkFBQSxDQUFpRHVQLENBQUEsRUFBRyxvQkFBb0IyQixPQUFPO01BRXhHLE9BQU87UUFDTCxHQUFHNEUsTUFBQTtRQUNILElBQUlDLGdCQUFBLEdBQW1CQSxnQkFBQSxDQUFpQi9FLFNBQVMsSUFBSSxDQUFDO01BQ3hEO0lBQ0YsR0FBRyxDQUFDLENBQUM7SUFFTCxNQUFNcEksTUFBQSxHQUFtQjRNLGlCQUFBLENBQWtCO01BQ3pDLEdBQUdLLGVBQUE7TUFDSHRJLE9BQUEsRUFBU3BQLFlBQUEsQ0FBYTZCLGlCQUFBLENBQXlDZ1IsU0FBQSxFQUFXLFdBQVdFLE9BQU8sQ0FBQztNQUM3Rm5DLEtBQUEsRUFBTzVRLFlBQUEsQ0FBYTZCLGlCQUFBLENBQXVDZ1IsU0FBQSxFQUFXLFNBQVNFLE9BQU8sQ0FBQztNQUN2Ri9CLEtBQUEsRUFBT2hSLFlBQUEsQ0FBYTZCLGlCQUFBLENBQXVDZ1IsU0FBQSxFQUFXLFNBQVNFLE9BQU8sQ0FBQztNQUN2RjhFLE1BQUEsRUFBUTdYLFlBQUEsQ0FBYTZCLGlCQUFBLENBQXdDZ1IsU0FBQSxFQUFXLFVBQVVFLE9BQU8sQ0FBQztNQUMxRitFLElBQUEsRUFBTTlYLFlBQUEsQ0FBYTZCLGlCQUFBLENBQXNDZ1IsU0FBQSxFQUFXLFFBQVFFLE9BQU8sQ0FBQztNQUNwRmdGLFVBQUEsRUFBWS9YLFlBQUEsQ0FBYTZCLGlCQUFBLENBQTRDZ1IsU0FBQSxFQUFXLGNBQWNFLE9BQU8sQ0FBQztNQUN0R2lGLFNBQUEsRUFBV2hZLFlBQUEsQ0FBYTZCLGlCQUFBLENBQTJDZ1IsU0FBQSxFQUFXLGFBQWFFLE9BQU8sQ0FBQztNQUNuR2tGLElBQUEsRUFBTWpZLFlBQUEsQ0FBYTZCLGlCQUFBLENBQXNDZ1IsU0FBQSxFQUFXLFFBQVFFLE9BQU8sQ0FBQztNQUNwRm1GLFVBQUEsRUFBWWxZLFlBQUEsQ0FBYTZCLGlCQUFBLENBQTRDZ1IsU0FBQSxFQUFXLGNBQWNFLE9BQU8sQ0FBQztNQUN0R29GLG9CQUFBLEVBQXNCblksWUFBQSxDQUNwQjZCLGlCQUFBLENBQXNEZ1IsU0FBQSxFQUFXLHdCQUF3QkUsT0FBTyxDQUNsRztNQUNBcUYsUUFBQSxFQUFVcFksWUFBQSxDQUFhNkIsaUJBQUEsQ0FBMENnUixTQUFBLEVBQVcsWUFBWUUsT0FBTyxDQUFDO01BQ2hHc0YsU0FBQSxFQUFXclksWUFBQSxDQUFhNkIsaUJBQUEsQ0FBMkNnUixTQUFBLEVBQVcsYUFBYUUsT0FBTyxDQUFDO01BQ25HZ0UsS0FBQSxFQUFPeEwsTUFBQSxDQUFPQyxXQUFBLENBQ1oySSxtQkFBQSxDQUFvQnpJLEdBQUEsQ0FBSTRNLGtCQUFBLElBQXNCO1FBekV4RCxJQUFBQyxHQUFBLEVBQUFDLEVBQUE7UUEwRVksT0FBTyxDQUNMRixrQkFBQSxDQUFtQjNNLElBQUEsRUFDbkI7VUFBRTJJLE9BQUEsR0FBU2lFLEdBQUEsR0FBQUQsa0JBQUEsb0JBQUFBLGtCQUFBLENBQW9CcEQsU0FBQSxLQUFwQixnQkFBQXFELEdBQUEsQ0FBK0JqRSxPQUFBO1VBQVNDLFFBQUEsR0FBVWlFLEVBQUEsR0FBQUYsa0JBQUEsb0JBQUFBLGtCQUFBLENBQW9CcEQsU0FBQSxLQUFwQixnQkFBQXNELEVBQUEsQ0FBK0JqRTtRQUFTLEVBQ3ZHO01BQ0YsQ0FBQyxDQUNIO0lBQ0YsQ0FBQztJQUVELE1BQU1HLFNBQUEsR0FBWTFVLFlBQUEsQ0FBYTZCLGlCQUFBLENBQTJDZ1IsU0FBQSxFQUFXLGFBQWFFLE9BQU8sQ0FBQztJQUUxRyxJQUFJMkIsU0FBQSxFQUFXO01BQ2JqSyxNQUFBLENBQU93RyxRQUFBLEdBQVd5RCxTQUFBLENBQVVoSixHQUFBLENBQUl1TCxTQUFBLElBQzlCalUsb0NBQUEsQ0FBcUNpVSxTQUFBLEVBQVc5QyxtQkFBbUIsQ0FDckU7SUFDRjtJQUVBLE1BQU1NLFVBQUEsR0FBYTVTLGlCQUFBLENBQTRDZ1IsU0FBQSxFQUFXLGNBQWNFLE9BQU87SUFFL0YsSUFBSTBCLFVBQUEsRUFBWTtNQUNkaEssTUFBQSxDQUFPZ08sS0FBQSxHQUFRdkssSUFBQSxJQUNidUcsVUFBQSxDQUFXO1FBQ1R2RyxJQUFBO1FBQ0F3SyxjQUFBLEVBQWdCcFcscUJBQUEsQ0FBc0I0TCxJQUFBLEVBQU1pRyxtQkFBbUI7TUFDakUsQ0FBQztJQUNMO0lBRUEsTUFBTXdFLFVBQUEsR0FBYTlXLGlCQUFBLENBQTRDZ1IsU0FBQSxFQUFXLGNBQWNFLE9BQU87SUFFL0YsSUFBSTRGLFVBQUEsRUFBWTtNQUNkbE8sTUFBQSxDQUFPbU8sTUFBQSxHQUFTRCxVQUFBO0lBQ2xCO0lBRUEsT0FBTyxDQUFDOUYsU0FBQSxDQUFVbEgsSUFBQSxFQUFNbEIsTUFBTTtFQUNoQyxDQUFDLENBQ0g7RUFFQSxNQUFNbUcsS0FBQSxHQUFRckYsTUFBQSxDQUFPQyxXQUFBLENBQ25CMEksY0FBQSxDQUFleEksR0FBQSxDQUFJbUgsU0FBQSxJQUFhO0lBQzlCLE1BQU1zQixtQkFBQSxHQUFzQnFELGFBQUEsQ0FBY2pLLE1BQUEsQ0FBTzJILFNBQUEsSUFBYUEsU0FBQSxDQUFVdEQsSUFBQSxLQUFTaUIsU0FBQSxDQUFVbEgsSUFBSTtJQUMvRixNQUFNb0gsT0FBQSxHQUFVO01BQ2RwSCxJQUFBLEVBQU1rSCxTQUFBLENBQVVsSCxJQUFBO01BQ2hCMEQsT0FBQSxFQUFTd0QsU0FBQSxDQUFVeEQsT0FBQTtNQUNuQjRELE9BQUEsRUFBU0osU0FBQSxDQUFVSSxPQUFBO01BQ25CbEk7SUFDRjtJQUVBLE1BQU04TixlQUFBLEdBQWtCaFksVUFBQSxDQUFXeVUsTUFBQSxDQUFPLENBQUNxQyxNQUFBLEVBQVF2RyxDQUFBLEtBQU07TUFDdkQsTUFBTTBILGdCQUFBLEdBQW1CalgsaUJBQUEsQ0FBaUR1UCxDQUFBLEVBQUcsb0JBQW9CMkIsT0FBTztNQUV4RyxPQUFPO1FBQ0wsR0FBRzRFLE1BQUE7UUFDSCxJQUFJbUIsZ0JBQUEsR0FBbUJBLGdCQUFBLENBQWlCakcsU0FBZ0IsSUFBSSxDQUFDO01BQy9EO0lBQ0YsR0FBRyxDQUFDLENBQUM7SUFFTCxNQUFNcEksTUFBQSxHQUFtQjRNLGlCQUFBLENBQWtCO01BQ3pDLEdBQUd3QixlQUFBO01BQ0hFLFNBQUEsRUFBVy9ZLFlBQUEsQ0FBYTZCLGlCQUFBLENBQTJDZ1IsU0FBQSxFQUFXLGFBQWFFLE9BQU8sQ0FBQztNQUNuR2lHLFFBQUEsRUFBVWhaLFlBQUEsQ0FBYTZCLGlCQUFBLENBQTBDZ1IsU0FBQSxFQUFXLFlBQVlFLE9BQU8sQ0FBQztNQUNoRy9CLEtBQUEsRUFBT2hSLFlBQUEsQ0FBYTZCLGlCQUFBLENBQXVDZ1IsU0FBQSxFQUFXLFNBQVNFLE9BQU8sQ0FBQztNQUN2RmtHLFFBQUEsRUFBVWpaLFlBQUEsQ0FBYTZCLGlCQUFBLENBQTBDZ1IsU0FBQSxFQUFXLFlBQVlFLE9BQU8sQ0FBQztNQUNoR2tGLElBQUEsRUFBTWpZLFlBQUEsQ0FBYTZCLGlCQUFBLENBQXNDZ1IsU0FBQSxFQUFXLFFBQVFFLE9BQU8sQ0FBQztNQUNwRmdFLEtBQUEsRUFBT3hMLE1BQUEsQ0FBT0MsV0FBQSxDQUNaMkksbUJBQUEsQ0FBb0J6SSxHQUFBLENBQUk0TSxrQkFBQSxJQUFzQjtRQXpJeEQsSUFBQUMsR0FBQSxFQUFBQyxFQUFBO1FBMElZLE9BQU8sQ0FDTEYsa0JBQUEsQ0FBbUIzTSxJQUFBLEVBQ25CO1VBQUUySSxPQUFBLEdBQVNpRSxHQUFBLEdBQUFELGtCQUFBLG9CQUFBQSxrQkFBQSxDQUFvQnBELFNBQUEsS0FBcEIsZ0JBQUFxRCxHQUFBLENBQStCakUsT0FBQTtVQUFTQyxRQUFBLEdBQVVpRSxFQUFBLEdBQUFGLGtCQUFBLG9CQUFBQSxrQkFBQSxDQUFvQnBELFNBQUEsS0FBcEIsZ0JBQUFzRCxFQUFBLENBQStCakU7UUFBUyxFQUN2RztNQUNGLENBQUMsQ0FDSDtJQUNGLENBQUM7SUFFRCxNQUFNRyxTQUFBLEdBQVkxVSxZQUFBLENBQWE2QixpQkFBQSxDQUEyQ2dSLFNBQUEsRUFBVyxhQUFhRSxPQUFPLENBQUM7SUFFMUcsSUFBSTJCLFNBQUEsRUFBVztNQUNiakssTUFBQSxDQUFPd0csUUFBQSxHQUFXeUQsU0FBQSxDQUFVaEosR0FBQSxDQUFJdUwsU0FBQSxJQUM5QmpVLG9DQUFBLENBQXFDaVUsU0FBQSxFQUFXOUMsbUJBQW1CLENBQ3JFO0lBQ0Y7SUFFQSxNQUFNTSxVQUFBLEdBQWE1UyxpQkFBQSxDQUE0Q2dSLFNBQUEsRUFBVyxjQUFjRSxPQUFPO0lBRS9GLElBQUkwQixVQUFBLEVBQVk7TUFDZGhLLE1BQUEsQ0FBT2dPLEtBQUEsR0FBUVMsSUFBQSxJQUNiekUsVUFBQSxDQUFXO1FBQ1R5RSxJQUFBO1FBQ0FSLGNBQUEsRUFBZ0JwVyxxQkFBQSxDQUFzQjRXLElBQUEsRUFBTS9FLG1CQUFtQjtNQUNqRSxDQUFDO0lBQ0w7SUFFQSxPQUFPLENBQUN0QixTQUFBLENBQVVsSCxJQUFBLEVBQU1sQixNQUFNO0VBQ2hDLENBQUMsQ0FDSDtFQUVBLE9BQU8sSUFBSW5FLGFBQUEsQ0FBQW1LLE1BQUEsQ0FBTztJQUNoQkMsT0FBQTtJQUNBRyxLQUFBO0lBQ0FEO0VBQ0YsQ0FBQztBQUNIO0F3RTFLTyxTQUFTM1AsZUFBa0JzVSxLQUFBLEVBQWlCO0VBQ2pELE1BQU00RCxRQUFBLEdBQVc1RCxLQUFBLENBQU1oSSxNQUFBLENBQU8sQ0FBQzZMLEVBQUEsRUFBSUMsS0FBQSxLQUFVOUQsS0FBQSxDQUFNK0QsT0FBQSxDQUFRRixFQUFFLE1BQU1DLEtBQUs7RUFFeEUsT0FBTzFKLEtBQUEsQ0FBTTJDLElBQUEsQ0FBSyxJQUFJaUgsR0FBQSxDQUFJSixRQUFRLENBQUM7QUFDckM7QUNDTyxTQUFTL1QsZUFBZXZFLFVBQUEsRUFBb0M7RUFDakUsTUFBTTJZLGVBQUEsR0FBa0I7RUFFeEIsT0FBTzNZLFVBQUEsQ0FBVzRZLElBQUEsQ0FBSyxDQUFDQyxDQUFBLEVBQUdDLENBQUEsS0FBTTtJQUMvQixNQUFNQyxTQUFBLEdBQVkvWCxpQkFBQSxDQUF5QzZYLENBQUEsRUFBRyxVQUFVLEtBQUtGLGVBQUE7SUFDN0UsTUFBTUssU0FBQSxHQUFZaFksaUJBQUEsQ0FBeUM4WCxDQUFBLEVBQUcsVUFBVSxLQUFLSCxlQUFBO0lBRTdFLElBQUlJLFNBQUEsR0FBWUMsU0FBQSxFQUFXO01BQ3pCLE9BQU87SUFDVDtJQUVBLElBQUlELFNBQUEsR0FBWUMsU0FBQSxFQUFXO01BQ3pCLE9BQU87SUFDVDtJQUVBLE9BQU87RUFDVCxDQUFDO0FBQ0g7QUNkTyxTQUFTN1Usa0JBQWtCbkUsVUFBQSxFQUFvQztFQUNwRSxNQUFNaVosa0JBQUEsR0FBcUIxVSxjQUFBLENBQWVoRSxpQkFBQSxDQUFrQlAsVUFBVSxDQUFDO0VBQ3ZFLE1BQU1rWixlQUFBLEdBQWtCOVksY0FBQSxDQUFlNlksa0JBQUEsQ0FBbUJwTyxHQUFBLENBQUltSCxTQUFBLElBQWFBLFNBQUEsQ0FBVWxILElBQUksQ0FBQztFQUUxRixJQUFJb08sZUFBQSxDQUFnQnpMLE1BQUEsRUFBUTtJQUMxQjhCLE9BQUEsQ0FBUUMsSUFBQSxDQUNOLG9EQUFvRDBKLGVBQUEsQ0FDakRyTyxHQUFBLENBQUlvRSxJQUFBLElBQVEsSUFBSUEsSUFBQSxHQUFPLEVBQ3ZCb0csSUFBQSxDQUFLLElBQUksOEJBQ2Q7RUFDRjtFQUVBLE9BQU80RCxrQkFBQTtBQUNUO0FDakJPLFNBQVN2WCxVQUFVMUIsVUFBQSxFQUF3QmtLLE1BQUEsRUFBeUI7RUFDekUsTUFBTStPLGtCQUFBLEdBQXFCOVUsaUJBQUEsQ0FBa0JuRSxVQUFVO0VBRXZELE9BQU8yQiw2QkFBQSxDQUE4QnNYLGtCQUFBLEVBQW9CL08sTUFBTTtBQUNqRTtBN0VDTyxTQUFTekosYUFBYTZJLEdBQUEsRUFBa0J0SixVQUFBLEVBQWdDO0VBQzdFLE1BQU00SixNQUFBLEdBQVNsSSxTQUFBLENBQVUxQixVQUFVO0VBQ25DLE1BQU1tWixXQUFBLEdBQWM1VCxhQUFBLENBQUExRyxJQUFBLENBQUt1YSxRQUFBLENBQVN4UCxNQUFBLEVBQVFOLEdBQUc7RUFFN0MsT0FBT3JJLG1CQUFBLENBQW9Ca1ksV0FBQSxDQUFZNUssT0FBQSxFQUFTM0UsTUFBTTtBQUN4RDtBR0xPLFNBQVNsSixhQUFheU4sSUFBQSxFQUFjbk8sVUFBQSxFQUE2QztFQUN0RixNQUFNNEosTUFBQSxHQUFTbEksU0FBQSxDQUFVMUIsVUFBVTtFQUNuQyxNQUFNcVosR0FBQSxHQUFNdlosaUJBQUEsQ0FBa0JxTyxJQUFJO0VBRWxDLE9BQU96SSxhQUFBLENBQUEwSSxTQUFBLENBQVVxQyxVQUFBLENBQVc3RyxNQUFNLEVBQUUrRyxLQUFBLENBQU0wSSxHQUFHLEVBQUV2UCxNQUFBLENBQU87QUFDeEQ7QTJFTE8sU0FBUzlILGVBQ2RzWCxTQUFBLEVBQ0EvSCxLQUFBLEVBQ0EvQyxPQUFBLEVBSVE7RUFDUixNQUFNO0lBQUVpRCxJQUFBO0lBQU1DO0VBQUcsSUFBSUgsS0FBQTtFQUNyQixNQUFNO0lBQUVnSSxjQUFBLEdBQWlCO0lBQVFDLGVBQUEsR0FBa0IsQ0FBQztFQUFFLElBQUloTCxPQUFBLElBQVcsQ0FBQztFQUN0RSxJQUFJaUwsSUFBQSxHQUFPO0VBRVhILFNBQUEsQ0FBVTlILFlBQUEsQ0FBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUksQ0FBQ3JFLElBQUEsRUFBTWlFLEdBQUEsRUFBS2EsTUFBQSxFQUFRcUcsS0FBQSxLQUFVO0lBeEJqRSxJQUFBOUIsRUFBQTtJQXlCSSxJQUFJckosSUFBQSxDQUFLcU0sT0FBQSxJQUFXcEksR0FBQSxHQUFNRyxJQUFBLEVBQU07TUFDOUJnSSxJQUFBLElBQVFGLGNBQUE7SUFDVjtJQUVBLE1BQU1JLGNBQUEsR0FBaUJILGVBQUEsb0JBQUFBLGVBQUEsQ0FBa0JuTSxJQUFBLENBQUswRCxJQUFBLENBQUtqRyxJQUFBO0lBRW5ELElBQUk2TyxjQUFBLEVBQWdCO01BQ2xCLElBQUl4SCxNQUFBLEVBQVE7UUFDVnNILElBQUEsSUFBUUUsY0FBQSxDQUFlO1VBQ3JCdE0sSUFBQTtVQUNBaUUsR0FBQTtVQUNBYSxNQUFBO1VBQ0FxRyxLQUFBO1VBQ0FqSDtRQUNGLENBQUM7TUFDSDtNQUVBLE9BQU87SUFDVDtJQUVBLElBQUlsRSxJQUFBLENBQUt1TSxNQUFBLEVBQVE7TUFDZkgsSUFBQSxLQUFRL0MsRUFBQSxHQUFBckosSUFBQSxvQkFBQUEsSUFBQSxDQUFNb00sSUFBQSxLQUFOLGdCQUFBL0MsRUFBQSxDQUFZakksS0FBQSxDQUFNb0wsSUFBQSxDQUFLQyxHQUFBLENBQUlySSxJQUFBLEVBQU1ILEdBQUcsSUFBSUEsR0FBQSxFQUFLSSxFQUFBLEdBQUtKLEdBQUE7SUFDNUQ7RUFDRixDQUFDO0VBRUQsT0FBT21JLElBQUE7QUFDVDtBQ3JDTyxTQUFTMVgsUUFDZHNMLElBQUEsRUFDQW1CLE9BQUEsRUFJQTtFQUNBLE1BQU0rQyxLQUFBLEdBQVE7SUFDWkUsSUFBQSxFQUFNO0lBQ05DLEVBQUEsRUFBSXJFLElBQUEsQ0FBS2tCLE9BQUEsQ0FBUXdMO0VBQ25CO0VBRUEsT0FBTy9YLGNBQUEsQ0FBZXFMLElBQUEsRUFBTWtFLEtBQUEsRUFBTy9DLE9BQU87QUFDNUM7QUNsQk8sU0FBU3RNLDZCQUE2QjBILE1BQUEsRUFBZ0Q7RUFDM0YsT0FBT2MsTUFBQSxDQUFPQyxXQUFBLENBQ1pELE1BQUEsQ0FBT0UsT0FBQSxDQUFRaEIsTUFBQSxDQUFPb0csS0FBSyxFQUN4QnRELE1BQUEsQ0FBTyxDQUFDLEdBQUdXLElBQUksTUFBTUEsSUFBQSxDQUFLeUMsSUFBQSxDQUFLaUksTUFBTSxFQUNyQ2xOLEdBQUEsQ0FBSSxDQUFDLENBQUNDLElBQUEsRUFBTXVDLElBQUksTUFBTSxDQUFDdkMsSUFBQSxFQUFNdUMsSUFBQSxDQUFLeUMsSUFBQSxDQUFLaUksTUFBTSxDQUFDLENBQ25EO0FBQ0Y7QTVFRE8sU0FBU3BYLGFBQ2QySSxHQUFBLEVBQ0F0SixVQUFBLEVBQ0F3TyxPQUFBLEVBSVE7RUFDUixNQUFNO0lBQUUrSyxjQUFBLEdBQWlCO0lBQVFDLGVBQUEsR0FBa0IsQ0FBQztFQUFFLElBQUloTCxPQUFBLElBQVcsQ0FBQztFQUN0RSxNQUFNNUUsTUFBQSxHQUFTbEksU0FBQSxDQUFVMUIsVUFBVTtFQUNuQyxNQUFNbVosV0FBQSxHQUFjeFQsYUFBQSxDQUFBOUcsSUFBQSxDQUFLdWEsUUFBQSxDQUFTeFAsTUFBQSxFQUFRTixHQUFHO0VBRTdDLE9BQU92SCxPQUFBLENBQVFvWCxXQUFBLEVBQWE7SUFDMUJJLGNBQUE7SUFDQUMsZUFBQSxFQUFpQjtNQUNmLEdBQUd0WCw0QkFBQSxDQUE2QjBILE1BQU07TUFDdEMsR0FBRzRQO0lBQ0w7RUFDRixDQUFDO0FBQ0g7QTZFL0JPLFNBQVNwWSxZQUFZNFksVUFBQSxFQUErQnBRLE1BQUEsRUFBMEI7RUFDbkYsSUFBSSxPQUFPb1EsVUFBQSxLQUFlLFVBQVU7SUFDbEMsSUFBSSxDQUFDcFEsTUFBQSxDQUFPbUcsS0FBQSxDQUFNaUssVUFBQSxHQUFhO01BQzdCLE1BQU0vTCxLQUFBLENBQU0sZ0NBQWdDK0wsVUFBQSwyQ0FBcUQ7SUFDbkc7SUFFQSxPQUFPcFEsTUFBQSxDQUFPbUcsS0FBQSxDQUFNaUssVUFBQTtFQUN0QjtFQUVBLE9BQU9BLFVBQUE7QUFDVDtBQ1BPLFNBQVM5WSxrQkFBa0JpSSxLQUFBLEVBQW9COFEsVUFBQSxFQUFvRDtFQUN4RyxNQUFNbEosSUFBQSxHQUFPM1AsV0FBQSxDQUFZNlksVUFBQSxFQUFZOVEsS0FBQSxDQUFNUyxNQUFNO0VBQ2pELE1BQU07SUFBRTZILElBQUE7SUFBTUMsRUFBQTtJQUFJd0k7RUFBTSxJQUFJL1EsS0FBQSxDQUFNRSxTQUFBO0VBQ2xDLE1BQU0wRyxLQUFBLEdBQWdCLEVBQUM7RUFFdkIsSUFBSW1LLEtBQUEsRUFBTztJQUNULElBQUkvUSxLQUFBLENBQU1JLFdBQUEsRUFBYTtNQUNyQndHLEtBQUEsQ0FBTTlELElBQUEsQ0FBSyxHQUFHOUMsS0FBQSxDQUFNSSxXQUFXO0lBQ2pDO0lBRUF3RyxLQUFBLENBQU05RCxJQUFBLENBQUssR0FBRzlDLEtBQUEsQ0FBTUUsU0FBQSxDQUFVOFEsS0FBQSxDQUFNcEssS0FBQSxDQUFNLENBQUM7RUFDN0MsT0FBTztJQUNMNUcsS0FBQSxDQUFNRyxHQUFBLENBQUlrSSxZQUFBLENBQWFDLElBQUEsRUFBTUMsRUFBQSxFQUFJckUsSUFBQSxJQUFRO01BQ3ZDMEMsS0FBQSxDQUFNOUQsSUFBQSxDQUFLLEdBQUdvQixJQUFBLENBQUswQyxLQUFLO0lBQzFCLENBQUM7RUFDSDtFQUVBLE1BQU1zSSxJQUFBLEdBQU90SSxLQUFBLENBQU02RyxJQUFBLENBQUt3RCxRQUFBLElBQVlBLFFBQUEsQ0FBU3JKLElBQUEsQ0FBS2pHLElBQUEsS0FBU2lHLElBQUEsQ0FBS2pHLElBQUk7RUFFcEUsSUFBSSxDQUFDdU4sSUFBQSxFQUFNO0lBQ1QsT0FBTyxDQUFDO0VBQ1Y7RUFFQSxPQUFPO0lBQUUsR0FBR0EsSUFBQSxDQUFLbkM7RUFBTTtBQUN6QjtBQzNCTyxTQUFTMVUsWUFBWXdZLFVBQUEsRUFBK0JwUSxNQUFBLEVBQTBCO0VBQ25GLElBQUksT0FBT29RLFVBQUEsS0FBZSxVQUFVO0lBQ2xDLElBQUksQ0FBQ3BRLE1BQUEsQ0FBT29HLEtBQUEsQ0FBTWdLLFVBQUEsR0FBYTtNQUM3QixNQUFNL0wsS0FBQSxDQUFNLGdDQUFnQytMLFVBQUEsMkNBQXFEO0lBQ25HO0lBRUEsT0FBT3BRLE1BQUEsQ0FBT29HLEtBQUEsQ0FBTWdLLFVBQUE7RUFDdEI7RUFFQSxPQUFPQSxVQUFBO0FBQ1Q7QUNQTyxTQUFTelksa0JBQWtCNEgsS0FBQSxFQUFvQjhRLFVBQUEsRUFBb0Q7RUFDeEcsTUFBTWxKLElBQUEsR0FBT3ZQLFdBQUEsQ0FBWXlZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTTtFQUNqRCxNQUFNO0lBQUU2SCxJQUFBO0lBQU1DO0VBQUcsSUFBSXZJLEtBQUEsQ0FBTUUsU0FBQTtFQUMzQixNQUFNMkcsS0FBQSxHQUFnQixFQUFDO0VBRXZCN0csS0FBQSxDQUFNRyxHQUFBLENBQUlrSSxZQUFBLENBQWFDLElBQUEsRUFBTUMsRUFBQSxFQUFJMkksS0FBQSxJQUFRO0lBQ3ZDckssS0FBQSxDQUFNL0QsSUFBQSxDQUFLb08sS0FBSTtFQUNqQixDQUFDO0VBRUQsTUFBTWhOLElBQUEsR0FBTzJDLEtBQUEsQ0FBTXNLLE9BQUEsQ0FBUSxFQUFFMUQsSUFBQSxDQUFLMkQsUUFBQSxJQUFZQSxRQUFBLENBQVN4SixJQUFBLENBQUtqRyxJQUFBLEtBQVNpRyxJQUFBLENBQUtqRyxJQUFJO0VBRTlFLElBQUksQ0FBQ3VDLElBQUEsRUFBTTtJQUNULE9BQU8sQ0FBQztFQUNWO0VBRUEsT0FBTztJQUFFLEdBQUdBLElBQUEsQ0FBSzZJO0VBQU07QUFDekI7QUNiTyxTQUFTclUsd0JBQXdCaUosSUFBQSxFQUFjbEIsTUFBQSxFQUF3QztFQUM1RixJQUFJQSxNQUFBLENBQU9vRyxLQUFBLENBQU1sRixJQUFBLEdBQU87SUFDdEIsT0FBTztFQUNUO0VBRUEsSUFBSWxCLE1BQUEsQ0FBT21HLEtBQUEsQ0FBTWpGLElBQUEsR0FBTztJQUN0QixPQUFPO0VBQ1Q7RUFFQSxPQUFPO0FBQ1Q7QUNMTyxTQUFTbEssY0FBY3VJLEtBQUEsRUFBb0I4USxVQUFBLEVBQStEO0VBQy9HLE1BQU1PLFVBQUEsR0FBYTNZLHVCQUFBLENBQ2pCLE9BQU9vWSxVQUFBLEtBQWUsV0FBV0EsVUFBQSxHQUFhQSxVQUFBLENBQVduUCxJQUFBLEVBQ3pEM0IsS0FBQSxDQUFNUyxNQUNSO0VBRUEsSUFBSTRRLFVBQUEsS0FBZSxRQUFRO0lBQ3pCLE9BQU9qWixpQkFBQSxDQUFrQjRILEtBQUEsRUFBTzhRLFVBQXNCO0VBQ3hEO0VBRUEsSUFBSU8sVUFBQSxLQUFlLFFBQVE7SUFDekIsT0FBT3RaLGlCQUFBLENBQWtCaUksS0FBQSxFQUFPOFEsVUFBc0I7RUFDeEQ7RUFFQSxPQUFPLENBQUM7QUFDVjtBQ3hCTyxTQUFTL1YsaUJBQW9CdVcsS0FBQSxFQUFZQyxFQUFBLEdBQUtDLElBQUEsQ0FBS0MsU0FBQSxFQUFnQjtFQUN4RSxNQUFNQyxJQUFBLEdBQXlCLENBQUM7RUFFaEMsT0FBT0osS0FBQSxDQUFNL04sTUFBQSxDQUFPdUMsSUFBQSxJQUFRO0lBQzFCLE1BQU0yRixHQUFBLEdBQU04RixFQUFBLENBQUd6TCxJQUFJO0lBRW5CLE9BQU92RSxNQUFBLENBQU9vUSxTQUFBLENBQVVDLGNBQUEsQ0FBZUMsSUFBQSxDQUFLSCxJQUFBLEVBQU1qRyxHQUFHLElBQUksUUFBU2lHLElBQUEsQ0FBS2pHLEdBQUEsSUFBTztFQUNoRixDQUFDO0FBQ0g7QUNFQSxTQUFTcUcsc0JBQXNCQyxPQUFBLEVBQXlDO0VBQ3RFLE1BQU1DLGFBQUEsR0FBZ0JqWCxnQkFBQSxDQUFpQmdYLE9BQU87RUFFOUMsT0FBT0MsYUFBQSxDQUFjMU4sTUFBQSxLQUFXLElBQzVCME4sYUFBQSxHQUNBQSxhQUFBLENBQWN6TyxNQUFBLENBQU8sQ0FBQzBPLE1BQUEsRUFBUTVDLEtBQUEsS0FBVTtJQUN0QyxNQUFNNkMsSUFBQSxHQUFPRixhQUFBLENBQWN6TyxNQUFBLENBQU8sQ0FBQzRPLENBQUEsRUFBRzlOLENBQUEsS0FBTUEsQ0FBQSxLQUFNZ0wsS0FBSztJQUV2RCxPQUFPLENBQUM2QyxJQUFBLENBQUtFLElBQUEsQ0FBS0MsV0FBQSxJQUFlO01BQy9CLE9BQ0VKLE1BQUEsQ0FBT0ssUUFBQSxDQUFTaEssSUFBQSxJQUFRK0osV0FBQSxDQUFZQyxRQUFBLENBQVNoSyxJQUFBLElBQzdDMkosTUFBQSxDQUFPSyxRQUFBLENBQVMvSixFQUFBLElBQU04SixXQUFBLENBQVlDLFFBQUEsQ0FBUy9KLEVBQUEsSUFDM0MwSixNQUFBLENBQU9NLFFBQUEsQ0FBU2pLLElBQUEsSUFBUStKLFdBQUEsQ0FBWUUsUUFBQSxDQUFTakssSUFBQSxJQUM3QzJKLE1BQUEsQ0FBT00sUUFBQSxDQUFTaEssRUFBQSxJQUFNOEosV0FBQSxDQUFZRSxRQUFBLENBQVNoSyxFQUFBO0lBRS9DLENBQUM7RUFDSCxDQUFDO0FBQ1A7QUFNTyxTQUFTNVEsaUJBQWlCa00sU0FBQSxFQUFzQztFQUNyRSxNQUFNO0lBQUUyTyxPQUFBO0lBQVN6TztFQUFNLElBQUlGLFNBQUE7RUFDM0IsTUFBTWtPLE9BQUEsR0FBMEIsRUFBQztFQUVqQ1MsT0FBQSxDQUFRQyxJQUFBLENBQUtwUCxPQUFBLENBQVEsQ0FBQ3FQLE9BQUEsRUFBU3JELEtBQUEsS0FBVTtJQUN2QyxNQUFNc0QsTUFBQSxHQUFrQixFQUFDO0lBS3pCLElBQUksQ0FBQ0QsT0FBQSxDQUFRQyxNQUFBLENBQU9yTyxNQUFBLEVBQVE7TUFDMUIsTUFBTTtRQUFFZ0UsSUFBQTtRQUFNQztNQUFHLElBQUl4RSxLQUFBLENBQU1zTCxLQUFBO01BSzNCLElBQUkvRyxJQUFBLEtBQVMsVUFBYUMsRUFBQSxLQUFPLFFBQVc7UUFDMUM7TUFDRjtNQUVBb0ssTUFBQSxDQUFPN1AsSUFBQSxDQUFLO1FBQUV3RixJQUFBO1FBQU1DO01BQUcsQ0FBQztJQUMxQixPQUFPO01BQ0xtSyxPQUFBLENBQVFyUCxPQUFBLENBQVEsQ0FBQ2lGLElBQUEsRUFBTUMsRUFBQSxLQUFPO1FBQzVCb0ssTUFBQSxDQUFPN1AsSUFBQSxDQUFLO1VBQUV3RixJQUFBO1VBQU1DO1FBQUcsQ0FBQztNQUMxQixDQUFDO0lBQ0g7SUFFQW9LLE1BQUEsQ0FBT3RQLE9BQUEsQ0FBUSxDQUFDO01BQUVpRixJQUFBO01BQU1DO0lBQUcsTUFBTTtNQUMvQixNQUFNcUssUUFBQSxHQUFXSixPQUFBLENBQVFsTixLQUFBLENBQU0rSixLQUFLLEVBQUUzTixHQUFBLENBQUk0RyxJQUFBLEVBQU0sRUFBRTtNQUNsRCxNQUFNdUssTUFBQSxHQUFTTCxPQUFBLENBQVFsTixLQUFBLENBQU0rSixLQUFLLEVBQUUzTixHQUFBLENBQUk2RyxFQUFFO01BQzFDLE1BQU11SyxRQUFBLEdBQVdOLE9BQUEsQ0FBUU8sTUFBQSxDQUFPLEVBQUVyUixHQUFBLENBQUlrUixRQUFBLEVBQVUsRUFBRTtNQUNsRCxNQUFNSSxNQUFBLEdBQVNSLE9BQUEsQ0FBUU8sTUFBQSxDQUFPLEVBQUVyUixHQUFBLENBQUltUixNQUFNO01BRTFDZCxPQUFBLENBQVFqUCxJQUFBLENBQUs7UUFDWHdQLFFBQUEsRUFBVTtVQUNSaEssSUFBQSxFQUFNd0ssUUFBQTtVQUNOdkssRUFBQSxFQUFJeUs7UUFDTjtRQUNBVCxRQUFBLEVBQVU7VUFDUmpLLElBQUEsRUFBTXNLLFFBQUE7VUFDTnJLLEVBQUEsRUFBSXNLO1FBQ047TUFDRixDQUFDO0lBQ0gsQ0FBQztFQUNILENBQUM7RUFFRCxPQUFPZixxQkFBQSxDQUFzQkMsT0FBTztBQUN0QztBQzNFTyxTQUFTbmEsYUFBYXNNLElBQUEsRUFBdUIrTyxXQUFBLEdBQWMsR0FBcUI7RUFDckYsTUFBTUMsU0FBQSxHQUFZaFAsSUFBQSxDQUFLMEQsSUFBQSxLQUFTMUQsSUFBQSxDQUFLMEQsSUFBQSxDQUFLbkgsTUFBQSxDQUFPMFMsV0FBQTtFQUNqRCxNQUFNQyxTQUFBLEdBQVlGLFNBQUEsR0FBWSxJQUFJO0VBQ2xDLE1BQU01SyxJQUFBLEdBQU8ySyxXQUFBO0VBQ2IsTUFBTTFLLEVBQUEsR0FBS0QsSUFBQSxHQUFPcEUsSUFBQSxDQUFLbVAsUUFBQTtFQUN2QixNQUFNek0sS0FBQSxHQUFRMUMsSUFBQSxDQUFLMEMsS0FBQSxDQUFNbEYsR0FBQSxDQUFJd04sSUFBQSxJQUFRO0lBQ25DLE1BQU1vRSxPQUFBLEdBQXdEO01BQzVEMUwsSUFBQSxFQUFNc0gsSUFBQSxDQUFLdEgsSUFBQSxDQUFLakc7SUFDbEI7SUFFQSxJQUFJSixNQUFBLENBQU93SSxJQUFBLENBQUttRixJQUFBLENBQUtuQyxLQUFLLEVBQUV6SSxNQUFBLEVBQVE7TUFDbENnUCxPQUFBLENBQU92RyxLQUFBLEdBQVE7UUFBRSxHQUFHbUMsSUFBQSxDQUFLbkM7TUFBTTtJQUNqQztJQUVBLE9BQU91RyxPQUFBO0VBQ1QsQ0FBQztFQUNELE1BQU12RyxLQUFBLEdBQVE7SUFBRSxHQUFHN0ksSUFBQSxDQUFLNkk7RUFBTTtFQUM5QixNQUFNd0csTUFBQSxHQUEyQjtJQUMvQjNMLElBQUEsRUFBTTFELElBQUEsQ0FBSzBELElBQUEsQ0FBS2pHLElBQUE7SUFDaEIyRyxJQUFBO0lBQ0FDO0VBQ0Y7RUFFQSxJQUFJaEgsTUFBQSxDQUFPd0ksSUFBQSxDQUFLZ0QsS0FBSyxFQUFFekksTUFBQSxFQUFRO0lBQzdCaVAsTUFBQSxDQUFPeEcsS0FBQSxHQUFRQSxLQUFBO0VBQ2pCO0VBRUEsSUFBSW5HLEtBQUEsQ0FBTXRDLE1BQUEsRUFBUTtJQUNoQmlQLE1BQUEsQ0FBTzNNLEtBQUEsR0FBUUEsS0FBQTtFQUNqQjtFQUVBLElBQUkxQyxJQUFBLENBQUtrQixPQUFBLENBQVFvTyxVQUFBLEVBQVk7SUFDM0JELE1BQUEsQ0FBT25PLE9BQUEsR0FBVSxFQUFDO0lBRWxCbEIsSUFBQSxDQUFLYixPQUFBLENBQVEsQ0FBQ2tCLEtBQUEsRUFBT2tQLE1BQUEsS0FBVztNQTNDcEMsSUFBQWxHLEVBQUE7TUE0Q00sQ0FBQUEsRUFBQSxHQUFBZ0csTUFBQSxDQUFPbk8sT0FBQSxLQUFQLGdCQUFBbUksRUFBQSxDQUFnQnpLLElBQUEsQ0FBS2xMLFlBQUEsQ0FBYTJNLEtBQUEsRUFBTzBPLFdBQUEsR0FBY1EsTUFBQSxHQUFTTCxTQUFTO0lBQzNFLENBQUM7RUFDSDtFQUVBLElBQUlsUCxJQUFBLENBQUtvTSxJQUFBLEVBQU07SUFDYmlELE1BQUEsQ0FBT2pELElBQUEsR0FBT3BNLElBQUEsQ0FBS29NLElBQUE7RUFDckI7RUFFQSxPQUFPaUQsTUFBQTtBQUNUO0FDckRPLFNBQVN0WixTQUFTMkssS0FBQSxFQUE2QjtFQUNwRCxPQUFPckQsTUFBQSxDQUFPb1EsU0FBQSxDQUFVK0IsUUFBQSxDQUFTN0IsSUFBQSxDQUFLak4sS0FBSyxNQUFNO0FBQ25EO0FDS08sU0FBU2hLLGVBQ2QrWSxPQUFBLEVBQ0FDLE9BQUEsRUFDQXZPLE9BQUEsR0FBK0I7RUFBRXdPLE1BQUEsRUFBUTtBQUFLLEdBQ3JDO0VBQ1QsTUFBTTlKLElBQUEsR0FBT3hJLE1BQUEsQ0FBT3dJLElBQUEsQ0FBSzZKLE9BQU87RUFFaEMsSUFBSSxDQUFDN0osSUFBQSxDQUFLekYsTUFBQSxFQUFRO0lBQ2hCLE9BQU87RUFDVDtFQUVBLE9BQU95RixJQUFBLENBQUtuSCxLQUFBLENBQU02SSxHQUFBLElBQU87SUFDdkIsSUFBSXBHLE9BQUEsQ0FBUXdPLE1BQUEsRUFBUTtNQUNsQixPQUFPRCxPQUFBLENBQVFuSSxHQUFBLE1BQVNrSSxPQUFBLENBQVFsSSxHQUFBO0lBQ2xDO0lBRUEsSUFBSXhSLFFBQUEsQ0FBUzJaLE9BQUEsQ0FBUW5JLEdBQUEsQ0FBSSxHQUFHO01BQzFCLE9BQU9tSSxPQUFBLENBQVFuSSxHQUFBLEVBQUsvRyxJQUFBLENBQUtpUCxPQUFBLENBQVFsSSxHQUFBLENBQUk7SUFDdkM7SUFFQSxPQUFPbUksT0FBQSxDQUFRbkksR0FBQSxNQUFTa0ksT0FBQSxDQUFRbEksR0FBQTtFQUNsQyxDQUFDO0FBQ0g7QUN4QkEsU0FBU3FJLGNBQ1BsTixLQUFBLEVBQ0FnQixJQUFBLEVBQ0FxRCxVQUFBLEdBQWtDLENBQUMsR0FDTjtFQUM3QixPQUFPckUsS0FBQSxDQUFNNkcsSUFBQSxDQUFLM0gsSUFBQSxJQUFRO0lBQ3hCLE9BQ0VBLElBQUEsQ0FBSzhCLElBQUEsS0FBU0EsSUFBQSxJQUNkaE4sY0FBQSxDQUVFMkcsTUFBQSxDQUFPQyxXQUFBLENBQVlELE1BQUEsQ0FBT3dJLElBQUEsQ0FBS2tCLFVBQVUsRUFBRXZKLEdBQUEsQ0FBSXFTLENBQUEsSUFBSyxDQUFDQSxDQUFBLEVBQUdqTyxJQUFBLENBQUtpSCxLQUFBLENBQU1nSCxDQUFBLENBQUUsQ0FBQyxDQUFDLEdBQ3ZFOUksVUFDRjtFQUVKLENBQUM7QUFDSDtBQUVBLFNBQVMrSSxZQUFZcE4sS0FBQSxFQUEwQmdCLElBQUEsRUFBZ0JxRCxVQUFBLEdBQWtDLENBQUMsR0FBWTtFQUM1RyxPQUFPLENBQUMsQ0FBQzZJLGFBQUEsQ0FBY2xOLEtBQUEsRUFBT2dCLElBQUEsRUFBTXFELFVBQVU7QUFDaEQ7QUFLTyxTQUFTalQsYUFJZHdRLElBQUEsRUFJQVosSUFBQSxFQUtBcUQsVUFBQSxFQUNjO0VBM0NoQixJQUFBc0MsRUFBQTtFQTRDRSxJQUFJLENBQUMvRSxJQUFBLElBQVEsQ0FBQ1osSUFBQSxFQUFNO0lBQ2xCO0VBQ0Y7RUFDQSxJQUFJZSxLQUFBLEdBQVFILElBQUEsQ0FBS1EsTUFBQSxDQUFPaUwsVUFBQSxDQUFXekwsSUFBQSxDQUFLMEwsWUFBWTtFQUdwRCxJQUFJLENBQUN2TCxLQUFBLENBQU16RSxJQUFBLElBQVEsQ0FBQ3lFLEtBQUEsQ0FBTXpFLElBQUEsQ0FBSzBDLEtBQUEsQ0FBTXdMLElBQUEsQ0FBSytCLEtBQUEsSUFBUUEsS0FBQSxDQUFLdk0sSUFBQSxLQUFTQSxJQUFJLEdBQUc7SUFDckVlLEtBQUEsR0FBUUgsSUFBQSxDQUFLUSxNQUFBLENBQU9vTCxXQUFBLENBQVk1TCxJQUFBLENBQUswTCxZQUFZO0VBQ25EO0VBR0EsSUFBSSxDQUFDdkwsS0FBQSxDQUFNekUsSUFBQSxJQUFRLENBQUN5RSxLQUFBLENBQU16RSxJQUFBLENBQUswQyxLQUFBLENBQU13TCxJQUFBLENBQUsrQixLQUFBLElBQVFBLEtBQUEsQ0FBS3ZNLElBQUEsS0FBU0EsSUFBSSxHQUFHO0lBQ3JFO0VBQ0Y7RUFHQXFELFVBQUEsR0FBYUEsVUFBQSxNQUFjc0MsRUFBQSxHQUFBNUUsS0FBQSxDQUFNekUsSUFBQSxDQUFLMEMsS0FBQSxDQUFNLE9BQWpCLGdCQUFBMkcsRUFBQSxDQUFxQlIsS0FBQTtFQUloRCxNQUFNbUMsSUFBQSxHQUFPNEUsYUFBQSxDQUFjLENBQUMsR0FBR25MLEtBQUEsQ0FBTXpFLElBQUEsQ0FBSzBDLEtBQUssR0FBR2dCLElBQUEsRUFBTXFELFVBQVU7RUFFbEUsSUFBSSxDQUFDaUUsSUFBQSxFQUFNO0lBQ1Q7RUFDRjtFQUVBLElBQUltRixVQUFBLEdBQWExTCxLQUFBLENBQU0wRyxLQUFBO0VBQ3ZCLElBQUlpRixRQUFBLEdBQVc5TCxJQUFBLENBQUtHLEtBQUEsQ0FBTSxJQUFJQSxLQUFBLENBQU04SyxNQUFBO0VBQ3BDLElBQUljLFFBQUEsR0FBV0YsVUFBQSxHQUFhO0VBQzVCLElBQUlHLE1BQUEsR0FBU0YsUUFBQSxHQUFXM0wsS0FBQSxDQUFNekUsSUFBQSxDQUFLbVAsUUFBQTtFQUVuQyxPQUFPZ0IsVUFBQSxHQUFhLEtBQUtMLFdBQUEsQ0FBWSxDQUFDLEdBQUd4TCxJQUFBLENBQUtRLE1BQUEsQ0FBT3pFLEtBQUEsQ0FBTThQLFVBQUEsR0FBYSxDQUFDLEVBQUV6TixLQUFLLEdBQUdnQixJQUFBLEVBQU1xRCxVQUFVLEdBQUc7SUFDcEdvSixVQUFBLElBQWM7SUFDZEMsUUFBQSxJQUFZOUwsSUFBQSxDQUFLUSxNQUFBLENBQU96RSxLQUFBLENBQU04UCxVQUFVLEVBQUVoQixRQUFBO0VBQzVDO0VBRUEsT0FBT2tCLFFBQUEsR0FBVy9MLElBQUEsQ0FBS1EsTUFBQSxDQUFPd0ssVUFBQSxJQUFjUSxXQUFBLENBQVksQ0FBQyxHQUFHeEwsSUFBQSxDQUFLUSxNQUFBLENBQU96RSxLQUFBLENBQU1nUSxRQUFRLEVBQUUzTixLQUFLLEdBQUdnQixJQUFBLEVBQU1xRCxVQUFVLEdBQUc7SUFDakh1SixNQUFBLElBQVVoTSxJQUFBLENBQUtRLE1BQUEsQ0FBT3pFLEtBQUEsQ0FBTWdRLFFBQVEsRUFBRWxCLFFBQUE7SUFDdENrQixRQUFBLElBQVk7RUFDZDtFQUVBLE9BQU87SUFDTGpNLElBQUEsRUFBTWdNLFFBQUE7SUFDTi9MLEVBQUEsRUFBSWlNO0VBQ047QUFDRjtBQ3BGTyxTQUFTdGMsZ0JBQWdCb1EsSUFBQSxFQUFjQyxFQUFBLEVBQVlwSSxHQUFBLEVBQW1DO0VBQzNGLE1BQU15RyxLQUFBLEdBQXFCLEVBQUM7RUFHNUIsSUFBSTBCLElBQUEsS0FBU0MsRUFBQSxFQUFJO0lBQ2ZwSSxHQUFBLENBQ0dzVSxPQUFBLENBQVFuTSxJQUFJLEVBQ1oxQixLQUFBLENBQU0sRUFDTnZELE9BQUEsQ0FBUTZMLElBQUEsSUFBUTtNQUNmLE1BQU0xRyxJQUFBLEdBQU9ySSxHQUFBLENBQUlzVSxPQUFBLENBQVFuTSxJQUFJO01BQzdCLE1BQU1GLEtBQUEsR0FBUXBRLFlBQUEsQ0FBYXdRLElBQUEsRUFBTTBHLElBQUEsQ0FBS3RILElBQUk7TUFFMUMsSUFBSSxDQUFDUSxLQUFBLEVBQU87UUFDVjtNQUNGO01BRUF4QixLQUFBLENBQU05RCxJQUFBLENBQUs7UUFDVG9NLElBQUE7UUFDQSxHQUFHOUc7TUFDTCxDQUFDO0lBQ0gsQ0FBQztFQUNMLE9BQU87SUFDTGpJLEdBQUEsQ0FBSWtJLFlBQUEsQ0FBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUksQ0FBQ3JFLElBQUEsRUFBTWlFLEdBQUEsS0FBUTtNQUN4QyxJQUFJLENBQUNqRSxJQUFBLEtBQVFBLElBQUEsb0JBQUFBLElBQUEsQ0FBTW1QLFFBQUEsTUFBYSxRQUFXO1FBQ3pDO01BQ0Y7TUFFQXpNLEtBQUEsQ0FBTTlELElBQUEsQ0FDSixHQUFHb0IsSUFBQSxDQUFLMEMsS0FBQSxDQUFNbEYsR0FBQSxDQUFJd04sSUFBQSxLQUFTO1FBQ3pCNUcsSUFBQSxFQUFNSCxHQUFBO1FBQ05JLEVBQUEsRUFBSUosR0FBQSxHQUFNakUsSUFBQSxDQUFLbVAsUUFBQTtRQUNmbkU7TUFDRixFQUFFLENBQ0o7SUFDRixDQUFDO0VBQ0g7RUFFQSxPQUFPdEksS0FBQTtBQUNUO0FDaENPLElBQU16TyxpQkFBQSxHQUFvQkEsQ0FBQzZILEtBQUEsRUFBb0I4USxVQUFBLEVBQStCM0ksR0FBQSxFQUFhdU0sUUFBQSxHQUFXLE9BQU87RUFDbEgsTUFBTWxNLElBQUEsR0FBT3hJLEtBQUEsQ0FBTUcsR0FBQSxDQUFJc1UsT0FBQSxDQUFRdE0sR0FBRztFQUVsQyxJQUFJd00sWUFBQSxHQUFlRCxRQUFBO0VBQ25CLElBQUl4USxJQUFBLEdBQW9CO0VBRXhCLE9BQU95USxZQUFBLEdBQWUsS0FBS3pRLElBQUEsS0FBUyxNQUFNO0lBQ3hDLE1BQU0wUSxXQUFBLEdBQWNwTSxJQUFBLENBQUt0RSxJQUFBLENBQUt5USxZQUFZO0lBRTFDLEtBQUlDLFdBQUEsb0JBQUFBLFdBQUEsQ0FBYWhOLElBQUEsQ0FBS2pHLElBQUEsTUFBU21QLFVBQUEsRUFBWTtNQUN6QzVNLElBQUEsR0FBTzBRLFdBQUE7SUFDVCxPQUFPO01BQ0xELFlBQUEsSUFBZ0I7SUFDbEI7RUFDRjtFQUVBLE9BQU8sQ0FBQ3pRLElBQUEsRUFBTXlRLFlBQVk7QUFDNUI7QUNwQk8sU0FBU2xjLG9CQUFvQmtKLElBQUEsRUFBY2xCLE1BQUEsRUFBNEM7RUFDNUYsT0FBT0EsTUFBQSxDQUFPb0csS0FBQSxDQUFNbEYsSUFBQSxLQUFTbEIsTUFBQSxDQUFPbUcsS0FBQSxDQUFNakYsSUFBQSxLQUFTO0FBQ3JEO0FDRE8sU0FBU2hKLHNCQUNkd1IsbUJBQUEsRUFDQTBLLFFBQUEsRUFDQTVKLFVBQUEsRUFDcUI7RUFDckIsT0FBTzFKLE1BQUEsQ0FBT0MsV0FBQSxDQUNaRCxNQUFBLENBQU9FLE9BQUEsQ0FBUXdKLFVBQVUsRUFBRTFILE1BQUEsQ0FBTyxDQUFDLENBQUM1QixJQUFJLE1BQU07SUFDNUMsTUFBTTJNLGtCQUFBLEdBQXFCbkUsbUJBQUEsQ0FBb0JzRCxJQUFBLENBQUszSCxJQUFBLElBQVE7TUFDMUQsT0FBT0EsSUFBQSxDQUFLOEIsSUFBQSxLQUFTaU4sUUFBQSxJQUFZL08sSUFBQSxDQUFLbkUsSUFBQSxLQUFTQSxJQUFBO0lBQ2pELENBQUM7SUFFRCxJQUFJLENBQUMyTSxrQkFBQSxFQUFvQjtNQUN2QixPQUFPO0lBQ1Q7SUFFQSxPQUFPQSxrQkFBQSxDQUFtQnBELFNBQUEsQ0FBVVAsV0FBQTtFQUN0QyxDQUFDLENBQ0g7QUFDRjtBQ25CTyxJQUFNN1IsdUJBQUEsR0FBMEJBLENBQUM4UCxLQUFBLEVBQW9Ca00sUUFBQSxHQUFXLFFBQVE7RUFDN0UsSUFBSUMsVUFBQSxHQUFhO0VBRWpCLE1BQU1DLFdBQUEsR0FBY3BNLEtBQUEsQ0FBTXNMLFlBQUE7RUFFMUJ0TCxLQUFBLENBQU1JLE1BQUEsQ0FBT1gsWUFBQSxDQUFhcUksSUFBQSxDQUFLQyxHQUFBLENBQUksR0FBR3FFLFdBQUEsR0FBY0YsUUFBUSxHQUFHRSxXQUFBLEVBQWEsQ0FBQzlRLElBQUEsRUFBTWlFLEdBQUEsRUFBS2EsTUFBQSxFQUFRcUcsS0FBQSxLQUFVO0lBYjVHLElBQUE5QixFQUFBLEVBQUFpQixFQUFBO0lBY0ksTUFBTXlHLEtBQUEsS0FDSnpHLEVBQUEsSUFBQWpCLEVBQUEsR0FBQXJKLElBQUEsQ0FBSzBELElBQUEsQ0FBS2pCLElBQUEsRUFBS2lJLE1BQUEsS0FBZixnQkFBQUosRUFBQSxDQUFBcUQsSUFBQSxDQUFBdEUsRUFBQSxFQUF3QjtNQUN0QnJKLElBQUE7TUFDQWlFLEdBQUE7TUFDQWEsTUFBQTtNQUNBcUc7SUFDRixPQUNBbkwsSUFBQSxDQUFLZ1IsV0FBQSxJQUNMO0lBRUZILFVBQUEsSUFBYzdRLElBQUEsQ0FBS2lSLE1BQUEsSUFBVSxDQUFDalIsSUFBQSxDQUFLdU0sTUFBQSxHQUFTd0UsS0FBQSxHQUFRQSxLQUFBLENBQU0zUCxLQUFBLENBQU0sR0FBR29MLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUdxRSxXQUFBLEdBQWM3TSxHQUFHLENBQUM7RUFDbkcsQ0FBQztFQUVELE9BQU80TSxVQUFBO0FBQ1Q7QUNyQk8sU0FBU3BiLGFBQ2RxRyxLQUFBLEVBQ0E4USxVQUFBLEVBQ0E3RixVQUFBLEdBQWtDLENBQUMsR0FDMUI7RUFDVCxNQUFNO0lBQUU4RixLQUFBO0lBQU80QjtFQUFPLElBQUkzUyxLQUFBLENBQU1FLFNBQUE7RUFDaEMsTUFBTTBILElBQUEsR0FBT2tKLFVBQUEsR0FBYTdZLFdBQUEsQ0FBWTZZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTSxJQUFJO0VBRWxFLElBQUlzUSxLQUFBLEVBQU87SUFDVCxPQUFPLENBQUMsRUFBRS9RLEtBQUEsQ0FBTUksV0FBQSxJQUFlSixLQUFBLENBQU1FLFNBQUEsQ0FBVTBJLEtBQUEsQ0FBTWhDLEtBQUEsQ0FBTSxHQUN4RHJELE1BQUEsQ0FBTzJMLElBQUEsSUFBUTtNQUNkLElBQUksQ0FBQ3RILElBQUEsRUFBTTtRQUNULE9BQU87TUFDVDtNQUVBLE9BQU9BLElBQUEsQ0FBS2pHLElBQUEsS0FBU3VOLElBQUEsQ0FBS3RILElBQUEsQ0FBS2pHLElBQUE7SUFDakMsQ0FBQyxFQUNBOEwsSUFBQSxDQUFLeUIsSUFBQSxJQUFRdFUsY0FBQSxDQUFlc1UsSUFBQSxDQUFLbkMsS0FBQSxFQUFPOUIsVUFBQSxFQUFZO01BQUU0SSxNQUFBLEVBQVE7SUFBTSxDQUFDLENBQUM7RUFDM0U7RUFFQSxJQUFJdUIsY0FBQSxHQUFpQjtFQUNyQixNQUFNQyxVQUFBLEdBQTBCLEVBQUM7RUFFakMxQyxNQUFBLENBQU90UCxPQUFBLENBQVEsQ0FBQztJQUFFdUYsS0FBQTtJQUFPME07RUFBSSxNQUFNO0lBQ2pDLE1BQU1oTixJQUFBLEdBQU9NLEtBQUEsQ0FBTVQsR0FBQTtJQUNuQixNQUFNSSxFQUFBLEdBQUsrTSxHQUFBLENBQUluTixHQUFBO0lBRWZuSSxLQUFBLENBQU1HLEdBQUEsQ0FBSWtJLFlBQUEsQ0FBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUksQ0FBQ3JFLElBQUEsRUFBTWlFLEdBQUEsS0FBUTtNQUM5QyxJQUFJLENBQUNqRSxJQUFBLENBQUt1TSxNQUFBLElBQVUsQ0FBQ3ZNLElBQUEsQ0FBSzBDLEtBQUEsQ0FBTXRDLE1BQUEsRUFBUTtRQUN0QztNQUNGO01BRUEsTUFBTWlSLFlBQUEsR0FBZTdFLElBQUEsQ0FBS0MsR0FBQSxDQUFJckksSUFBQSxFQUFNSCxHQUFHO01BQ3ZDLE1BQU1xTixVQUFBLEdBQWE5RSxJQUFBLENBQUsrRSxHQUFBLENBQUlsTixFQUFBLEVBQUlKLEdBQUEsR0FBTWpFLElBQUEsQ0FBS21QLFFBQVE7TUFDbkQsTUFBTXFDLE1BQUEsR0FBUUYsVUFBQSxHQUFhRCxZQUFBO01BRTNCSCxjQUFBLElBQWtCTSxNQUFBO01BRWxCTCxVQUFBLENBQVd2UyxJQUFBLENBQ1QsR0FBR29CLElBQUEsQ0FBSzBDLEtBQUEsQ0FBTWxGLEdBQUEsQ0FBSXdOLElBQUEsS0FBUztRQUN6QkEsSUFBQTtRQUNBNUcsSUFBQSxFQUFNaU4sWUFBQTtRQUNOaE4sRUFBQSxFQUFJaU47TUFDTixFQUFFLENBQ0o7SUFDRixDQUFDO0VBQ0gsQ0FBQztFQUVELElBQUlKLGNBQUEsS0FBbUIsR0FBRztJQUN4QixPQUFPO0VBQ1Q7RUFHQSxNQUFNTyxZQUFBLEdBQWVOLFVBQUEsQ0FDbEI5UixNQUFBLENBQU9xUyxTQUFBLElBQWE7SUFDbkIsSUFBSSxDQUFDaE8sSUFBQSxFQUFNO01BQ1QsT0FBTztJQUNUO0lBRUEsT0FBT0EsSUFBQSxDQUFLakcsSUFBQSxLQUFTaVUsU0FBQSxDQUFVMUcsSUFBQSxDQUFLdEgsSUFBQSxDQUFLakcsSUFBQTtFQUMzQyxDQUFDLEVBQ0E0QixNQUFBLENBQU9xUyxTQUFBLElBQWFoYixjQUFBLENBQWVnYixTQUFBLENBQVUxRyxJQUFBLENBQUtuQyxLQUFBLEVBQU85QixVQUFBLEVBQVk7SUFBRTRJLE1BQUEsRUFBUTtFQUFNLENBQUMsQ0FBQyxFQUN2RnZJLE1BQUEsQ0FBTyxDQUFDdUssR0FBQSxFQUFLRCxTQUFBLEtBQWNDLEdBQUEsR0FBTUQsU0FBQSxDQUFVck4sRUFBQSxHQUFLcU4sU0FBQSxDQUFVdE4sSUFBQSxFQUFNLENBQUM7RUFJcEUsTUFBTXdOLGFBQUEsR0FBZ0JULFVBQUEsQ0FDbkI5UixNQUFBLENBQU9xUyxTQUFBLElBQWE7SUFDbkIsSUFBSSxDQUFDaE8sSUFBQSxFQUFNO01BQ1QsT0FBTztJQUNUO0lBRUEsT0FBT2dPLFNBQUEsQ0FBVTFHLElBQUEsQ0FBS3RILElBQUEsS0FBU0EsSUFBQSxJQUFRZ08sU0FBQSxDQUFVMUcsSUFBQSxDQUFLdEgsSUFBQSxDQUFLb0gsUUFBQSxDQUFTcEgsSUFBSTtFQUMxRSxDQUFDLEVBQ0EwRCxNQUFBLENBQU8sQ0FBQ3VLLEdBQUEsRUFBS0QsU0FBQSxLQUFjQyxHQUFBLEdBQU1ELFNBQUEsQ0FBVXJOLEVBQUEsR0FBS3FOLFNBQUEsQ0FBVXROLElBQUEsRUFBTSxDQUFDO0VBSXBFLE1BQU1GLEtBQUEsR0FBUXVOLFlBQUEsR0FBZSxJQUFJQSxZQUFBLEdBQWVHLGFBQUEsR0FBZ0JILFlBQUE7RUFFaEUsT0FBT3ZOLEtBQUEsSUFBU2dOLGNBQUE7QUFDbEI7QUNqRk8sU0FBU3hiLGFBQ2RvRyxLQUFBLEVBQ0E4USxVQUFBLEVBQ0E3RixVQUFBLEdBQWtDLENBQUMsR0FDMUI7RUFDVCxNQUFNO0lBQUUzQyxJQUFBO0lBQU1DLEVBQUE7SUFBSXdJO0VBQU0sSUFBSS9RLEtBQUEsQ0FBTUUsU0FBQTtFQUNsQyxNQUFNMEgsSUFBQSxHQUFPa0osVUFBQSxHQUFhelksV0FBQSxDQUFZeVksVUFBQSxFQUFZOVEsS0FBQSxDQUFNUyxNQUFNLElBQUk7RUFFbEUsTUFBTXNWLFVBQUEsR0FBMEIsRUFBQztFQUVqQy9WLEtBQUEsQ0FBTUcsR0FBQSxDQUFJa0ksWUFBQSxDQUFhQyxJQUFBLEVBQU1DLEVBQUEsRUFBSSxDQUFDckUsSUFBQSxFQUFNaUUsR0FBQSxLQUFRO0lBQzlDLElBQUlqRSxJQUFBLENBQUt1TSxNQUFBLEVBQVE7TUFDZjtJQUNGO0lBRUEsTUFBTThFLFlBQUEsR0FBZTdFLElBQUEsQ0FBS0MsR0FBQSxDQUFJckksSUFBQSxFQUFNSCxHQUFHO0lBQ3ZDLE1BQU1xTixVQUFBLEdBQWE5RSxJQUFBLENBQUsrRSxHQUFBLENBQUlsTixFQUFBLEVBQUlKLEdBQUEsR0FBTWpFLElBQUEsQ0FBS21QLFFBQVE7SUFFbkQwQyxVQUFBLENBQVdqVCxJQUFBLENBQUs7TUFDZG9CLElBQUE7TUFDQW9FLElBQUEsRUFBTWlOLFlBQUE7TUFDTmhOLEVBQUEsRUFBSWlOO0lBQ04sQ0FBQztFQUNILENBQUM7RUFFRCxNQUFNSixjQUFBLEdBQWlCN00sRUFBQSxHQUFLRCxJQUFBO0VBQzVCLE1BQU0wTixpQkFBQSxHQUFvQkQsVUFBQSxDQUN2QnhTLE1BQUEsQ0FBTzBTLFNBQUEsSUFBYTtJQUNuQixJQUFJLENBQUNyTyxJQUFBLEVBQU07TUFDVCxPQUFPO0lBQ1Q7SUFFQSxPQUFPQSxJQUFBLENBQUtqRyxJQUFBLEtBQVNzVSxTQUFBLENBQVUvUixJQUFBLENBQUswRCxJQUFBLENBQUtqRyxJQUFBO0VBQzNDLENBQUMsRUFDQTRCLE1BQUEsQ0FBTzBTLFNBQUEsSUFBYXJiLGNBQUEsQ0FBZXFiLFNBQUEsQ0FBVS9SLElBQUEsQ0FBSzZJLEtBQUEsRUFBTzlCLFVBQUEsRUFBWTtJQUFFNEksTUFBQSxFQUFRO0VBQU0sQ0FBQyxDQUFDO0VBRTFGLElBQUk5QyxLQUFBLEVBQU87SUFDVCxPQUFPLENBQUMsQ0FBQ2lGLGlCQUFBLENBQWtCMVIsTUFBQTtFQUM3QjtFQUVBLE1BQU04RCxLQUFBLEdBQVE0TixpQkFBQSxDQUFrQjFLLE1BQUEsQ0FBTyxDQUFDdUssR0FBQSxFQUFLSSxTQUFBLEtBQWNKLEdBQUEsR0FBTUksU0FBQSxDQUFVMU4sRUFBQSxHQUFLME4sU0FBQSxDQUFVM04sSUFBQSxFQUFNLENBQUM7RUFFakcsT0FBT0YsS0FBQSxJQUFTZ04sY0FBQTtBQUNsQjtBQzVDTyxTQUFTbGMsU0FBUzhHLEtBQUEsRUFBb0IyQixJQUFBLEVBQXFCc0osVUFBQSxHQUFrQyxDQUFDLEdBQVk7RUFDL0csSUFBSSxDQUFDdEosSUFBQSxFQUFNO0lBQ1QsT0FBTy9ILFlBQUEsQ0FBYW9HLEtBQUEsRUFBTyxNQUFNaUwsVUFBVSxLQUFLdFIsWUFBQSxDQUFhcUcsS0FBQSxFQUFPLE1BQU1pTCxVQUFVO0VBQ3RGO0VBRUEsTUFBTW9HLFVBQUEsR0FBYTNZLHVCQUFBLENBQXdCaUosSUFBQSxFQUFNM0IsS0FBQSxDQUFNUyxNQUFNO0VBRTdELElBQUk0USxVQUFBLEtBQWUsUUFBUTtJQUN6QixPQUFPelgsWUFBQSxDQUFhb0csS0FBQSxFQUFPMkIsSUFBQSxFQUFNc0osVUFBVTtFQUM3QztFQUVBLElBQUlvRyxVQUFBLEtBQWUsUUFBUTtJQUN6QixPQUFPMVgsWUFBQSxDQUFhcUcsS0FBQSxFQUFPMkIsSUFBQSxFQUFNc0osVUFBVTtFQUM3QztFQUVBLE9BQU87QUFDVDtBQ2xCTyxJQUFNN1IsYUFBQSxHQUFnQkEsQ0FBQzRHLEtBQUEsRUFBb0J3RSxRQUFBLEtBQXNCO0VBQ3RFLE1BQU07SUFBRW9FLEtBQUE7SUFBTzBNLEdBQUE7SUFBS1k7RUFBUSxJQUFJbFcsS0FBQSxDQUFNRSxTQUFBO0VBRXRDLElBQUlzRSxRQUFBLEVBQVU7SUFDWixNQUFNMlIsVUFBQSxHQUFhamYsY0FBQSxDQUFlZ04sSUFBQSxJQUFRQSxJQUFBLENBQUswRCxJQUFBLENBQUtqRyxJQUFBLEtBQVM2QyxRQUFRLEVBQUV4RSxLQUFBLENBQU1FLFNBQVM7SUFFdEYsSUFBSSxDQUFDaVcsVUFBQSxFQUFZO01BQ2YsT0FBTztJQUNUO0lBRUEsTUFBTUMsVUFBQSxHQUFhcFcsS0FBQSxDQUFNRyxHQUFBLENBQUlzVSxPQUFBLENBQVEwQixVQUFBLENBQVdoTyxHQUFBLEdBQU0sQ0FBQztJQUV2RCxJQUFJK04sT0FBQSxDQUFRL04sR0FBQSxHQUFNLE1BQU1pTyxVQUFBLENBQVdDLEdBQUEsQ0FBSSxHQUFHO01BQ3hDLE9BQU87SUFDVDtJQUVBLE9BQU87RUFDVDtFQUVBLElBQUlmLEdBQUEsQ0FBSXBCLFlBQUEsR0FBZW9CLEdBQUEsQ0FBSXRNLE1BQUEsQ0FBT3FLLFFBQUEsR0FBVyxLQUFLekssS0FBQSxDQUFNVCxHQUFBLEtBQVFtTixHQUFBLENBQUluTixHQUFBLEVBQUs7SUFDdkUsT0FBTztFQUNUO0VBRUEsT0FBTztBQUNUO0FDMUJPLElBQU05TyxlQUFBLEdBQW1CMkcsS0FBQSxJQUF1QjtFQUNyRCxNQUFNO0lBQUU0SSxLQUFBO0lBQU8wTTtFQUFJLElBQUl0VixLQUFBLENBQU1FLFNBQUE7RUFFN0IsSUFBSTBJLEtBQUEsQ0FBTXNMLFlBQUEsR0FBZSxLQUFLdEwsS0FBQSxDQUFNVCxHQUFBLEtBQVFtTixHQUFBLENBQUluTixHQUFBLEVBQUs7SUFDbkQsT0FBTztFQUNUO0VBRUEsT0FBTztBQUNUO0FDUk8sU0FBUzVPLHdCQUF3QnNQLFNBQUEsRUFBeUJ5TixPQUFBLEVBQStCO0VBQzlGLElBQUkzUSxLQUFBLENBQU1DLE9BQUEsQ0FBUTBRLE9BQU8sR0FBRztJQUMxQixPQUFPQSxPQUFBLENBQVFsRSxJQUFBLENBQUttRSxnQkFBQSxJQUFvQjtNQUN0QyxNQUFNNVUsSUFBQSxHQUFPLE9BQU80VSxnQkFBQSxLQUFxQixXQUFXQSxnQkFBQSxHQUFtQkEsZ0JBQUEsQ0FBaUI1VSxJQUFBO01BRXhGLE9BQU9BLElBQUEsS0FBU2tILFNBQUEsQ0FBVWxILElBQUE7SUFDNUIsQ0FBQztFQUNIO0VBRUEsT0FBTzJVLE9BQUE7QUFDVDtBQ05PLFNBQVM3YyxPQUFPa0ksSUFBQSxFQUFjOUssVUFBQSxFQUFpQztFQUNwRSxNQUFNO0lBQUVvVDtFQUFlLElBQUk1TyxlQUFBLENBQWdCeEUsVUFBVTtFQUNyRCxNQUFNZ1MsU0FBQSxHQUFZb0IsY0FBQSxDQUFld0QsSUFBQSxDQUFLM0gsSUFBQSxJQUFRQSxJQUFBLENBQUtuRSxJQUFBLEtBQVNBLElBQUk7RUFFaEUsSUFBSSxDQUFDa0gsU0FBQSxFQUFXO0lBQ2QsT0FBTztFQUNUO0VBRUEsTUFBTUUsT0FBQSxHQUFVO0lBQ2RwSCxJQUFBLEVBQU1rSCxTQUFBLENBQVVsSCxJQUFBO0lBQ2hCMEQsT0FBQSxFQUFTd0QsU0FBQSxDQUFVeEQsT0FBQTtJQUNuQjRELE9BQUEsRUFBU0osU0FBQSxDQUFVSTtFQUNyQjtFQUNBLE1BQU1qQyxLQUFBLEdBQVFoUixZQUFBLENBQWE2QixpQkFBQSxDQUF1Q2dSLFNBQUEsRUFBVyxTQUFTRSxPQUFPLENBQUM7RUFFOUYsSUFBSSxPQUFPL0IsS0FBQSxLQUFVLFVBQVU7SUFDN0IsT0FBTztFQUNUO0VBRUEsT0FBT0EsS0FBQSxDQUFNNkUsS0FBQSxDQUFNLEdBQUcsRUFBRUksUUFBQSxDQUFTLE1BQU07QUFDekM7QUNyQk8sU0FBU3BTLFlBQ2RxSyxJQUFBLEVBQ0E7RUFDRXNTLGFBQUEsR0FBZ0I7RUFDaEJDLGdCQUFBLEdBQW1CO0FBQ3JCLElBU0ksQ0FBQyxHQUNJO0VBcEJYLElBQUFsSixFQUFBO0VBcUJFLElBQUlrSixnQkFBQSxFQUFrQjtJQUNwQixJQUFJdlMsSUFBQSxDQUFLMEQsSUFBQSxDQUFLakcsSUFBQSxLQUFTLGFBQWE7TUFFbEMsT0FBTztJQUNUO0lBQ0EsSUFBSXVDLElBQUEsQ0FBS3VNLE1BQUEsRUFBUTtNQUNmLE9BQU8sU0FBUy9MLElBQUEsRUFBSzZJLEVBQUEsR0FBQXJKLElBQUEsQ0FBS29NLElBQUEsS0FBTCxPQUFBL0MsRUFBQSxHQUFhLEVBQUU7SUFDdEM7RUFDRjtFQUVBLElBQUlySixJQUFBLENBQUt1TSxNQUFBLEVBQVE7SUFDZixPQUFPLENBQUN2TSxJQUFBLENBQUtvTSxJQUFBO0VBQ2Y7RUFFQSxJQUFJcE0sSUFBQSxDQUFLaVIsTUFBQSxJQUFValIsSUFBQSxDQUFLd1MsTUFBQSxFQUFRO0lBQzlCLE9BQU87RUFDVDtFQUVBLElBQUl4UyxJQUFBLENBQUtrQixPQUFBLENBQVFvTyxVQUFBLEtBQWUsR0FBRztJQUNqQyxPQUFPO0VBQ1Q7RUFFQSxJQUFJZ0QsYUFBQSxFQUFlO0lBQ2pCLElBQUlHLGNBQUEsR0FBaUI7SUFFckJ6UyxJQUFBLENBQUtrQixPQUFBLENBQVEvQixPQUFBLENBQVF1VCxTQUFBLElBQWE7TUFDaEMsSUFBSUQsY0FBQSxLQUFtQixPQUFPO1FBRTVCO01BQ0Y7TUFFQSxJQUFJLENBQUM5YyxXQUFBLENBQVkrYyxTQUFBLEVBQVc7UUFBRUgsZ0JBQUE7UUFBa0JEO01BQWMsQ0FBQyxHQUFHO1FBQ2hFRyxjQUFBLEdBQWlCO01BQ25CO0lBQ0YsQ0FBQztJQUVELE9BQU9BLGNBQUE7RUFDVDtFQUVBLE9BQU87QUFDVDtBcEczRE8sU0FBUzdjLGdCQUFnQjhLLEtBQUEsRUFBd0M7RUFDdEUsT0FBT0EsS0FBQSxZQUFpQm5JLGFBQUEsQ0FBQW9hLGFBQUE7QUFDMUI7QUNGTyxTQUFTMWMsZ0JBQWdCeUssS0FBQSxFQUF3QztFQUN0RSxPQUFPQSxLQUFBLFlBQWlCbEksYUFBQSxDQUFBb2EsYUFBQTtBQUMxQjtBb0dKTyxTQUFTcmMsT0FBT21LLEtBQUEsR0FBUSxHQUFHNlEsR0FBQSxHQUFNLEdBQUc5RSxHQUFBLEdBQU0sR0FBVztFQUMxRCxPQUFPRCxJQUFBLENBQUsrRSxHQUFBLENBQUkvRSxJQUFBLENBQUtDLEdBQUEsQ0FBSS9MLEtBQUEsRUFBTzZRLEdBQUcsR0FBRzlFLEdBQUc7QUFDM0M7QUNFTyxTQUFTN1YsYUFBYXVHLElBQUEsRUFBa0JpSCxJQUFBLEVBQWNDLEVBQUEsRUFBcUI7RUFDaEYsTUFBTXdPLE1BQUEsR0FBUztFQUNmLE1BQU1DLE1BQUEsR0FBUzNWLElBQUEsQ0FBS3JCLEtBQUEsQ0FBTUcsR0FBQSxDQUFJaUYsT0FBQSxDQUFRd0wsSUFBQTtFQUN0QyxNQUFNcUcsWUFBQSxHQUFleGMsTUFBQSxDQUFPNk4sSUFBQSxFQUFNeU8sTUFBQSxFQUFRQyxNQUFNO0VBQ2hELE1BQU1FLFdBQUEsR0FBY3pjLE1BQUEsQ0FBTzhOLEVBQUEsRUFBSXdPLE1BQUEsRUFBUUMsTUFBTTtFQUM3QyxNQUFNck8sS0FBQSxHQUFRdEgsSUFBQSxDQUFLOFYsV0FBQSxDQUFZRixZQUFZO0VBQzNDLE1BQU1aLEdBQUEsR0FBTWhWLElBQUEsQ0FBSzhWLFdBQUEsQ0FBWUQsV0FBQSxFQUFhLEVBQUU7RUFDNUMsTUFBTUUsR0FBQSxHQUFNMUcsSUFBQSxDQUFLK0UsR0FBQSxDQUFJOU0sS0FBQSxDQUFNeU8sR0FBQSxFQUFLZixHQUFBLENBQUllLEdBQUc7RUFDdkMsTUFBTUMsTUFBQSxHQUFTM0csSUFBQSxDQUFLQyxHQUFBLENBQUloSSxLQUFBLENBQU0wTyxNQUFBLEVBQVFoQixHQUFBLENBQUlnQixNQUFNO0VBQ2hELE1BQU1DLElBQUEsR0FBTzVHLElBQUEsQ0FBSytFLEdBQUEsQ0FBSTlNLEtBQUEsQ0FBTTJPLElBQUEsRUFBTWpCLEdBQUEsQ0FBSWlCLElBQUk7RUFDMUMsTUFBTUMsS0FBQSxHQUFRN0csSUFBQSxDQUFLQyxHQUFBLENBQUloSSxLQUFBLENBQU00TyxLQUFBLEVBQU9sQixHQUFBLENBQUlrQixLQUFLO0VBQzdDLE1BQU1DLEtBQUEsR0FBUUQsS0FBQSxHQUFRRCxJQUFBO0VBQ3RCLE1BQU1HLE1BQUEsR0FBU0osTUFBQSxHQUFTRCxHQUFBO0VBQ3hCLE1BQU1NLENBQUEsR0FBSUosSUFBQTtFQUNWLE1BQU1LLENBQUEsR0FBSVAsR0FBQTtFQUNWLE1BQU05SixJQUFBLEdBQU87SUFDWDhKLEdBQUE7SUFDQUMsTUFBQTtJQUNBQyxJQUFBO0lBQ0FDLEtBQUE7SUFDQUMsS0FBQTtJQUNBQyxNQUFBO0lBQ0FDLENBQUE7SUFDQUM7RUFDRjtFQUVBLE9BQU87SUFDTCxHQUFHckssSUFBQTtJQUNIM00sTUFBQSxFQUFRQSxDQUFBLEtBQU0yTTtFQUNoQjtBQUNGO0FwRzVCTyxTQUFTclMscUJBQXFCa0YsR0FBQSxFQUFzQnlYLFFBQUEsR0FBMEIsTUFBd0I7RUFDM0csSUFBSSxDQUFDQSxRQUFBLEVBQVU7SUFDYixPQUFPO0VBQ1Q7RUFFQSxNQUFNQyxnQkFBQSxHQUFtQmxiLGFBQUEsQ0FBQW1iLFNBQUEsQ0FBVUMsT0FBQSxDQUFRNVgsR0FBRztFQUM5QyxNQUFNNlgsY0FBQSxHQUFpQnJiLGFBQUEsQ0FBQW1iLFNBQUEsQ0FBVUcsS0FBQSxDQUFNOVgsR0FBRztFQUUxQyxJQUFJeVgsUUFBQSxLQUFhLFdBQVdBLFFBQUEsS0FBYSxNQUFNO0lBQzdDLE9BQU9DLGdCQUFBO0VBQ1Q7RUFFQSxJQUFJRCxRQUFBLEtBQWEsT0FBTztJQUN0QixPQUFPSSxjQUFBO0VBQ1Q7RUFFQSxNQUFNakIsTUFBQSxHQUFTYyxnQkFBQSxDQUFpQnZQLElBQUE7RUFDaEMsTUFBTTBPLE1BQUEsR0FBU2dCLGNBQUEsQ0FBZXpQLEVBQUE7RUFFOUIsSUFBSXFQLFFBQUEsS0FBYSxPQUFPO0lBQ3RCLE9BQU9qYixhQUFBLENBQUFtYSxhQUFBLENBQWNvQixNQUFBLENBQU8vWCxHQUFBLEVBQUsxRixNQUFBLENBQU8sR0FBR3NjLE1BQUEsRUFBUUMsTUFBTSxHQUFHdmMsTUFBQSxDQUFPMEYsR0FBQSxDQUFJaUYsT0FBQSxDQUFRd0wsSUFBQSxFQUFNbUcsTUFBQSxFQUFRQyxNQUFNLENBQUM7RUFDdEc7RUFFQSxPQUFPcmEsYUFBQSxDQUFBbWEsYUFBQSxDQUFjb0IsTUFBQSxDQUFPL1gsR0FBQSxFQUFLMUYsTUFBQSxDQUFPbWQsUUFBQSxFQUFVYixNQUFBLEVBQVFDLE1BQU0sR0FBR3ZjLE1BQUEsQ0FBT21kLFFBQUEsRUFBVWIsTUFBQSxFQUFRQyxNQUFNLENBQUM7QUFDckc7QXFHSkEsU0FBU21CLDJCQUEyQjtFQUNsQ0MsSUFBQTtFQUNBQyxVQUFBO0VBQ0FDLFVBQUE7RUFDQWpULE9BQUE7RUFDQWtULGdCQUFBLEdBQW1CO0FBQ3JCLEdBZUU7RUFDQSxJQUFJSCxJQUFBLENBQUt4UixLQUFBLElBQVNqQixLQUFBLENBQU1DLE9BQUEsQ0FBUXdTLElBQUEsQ0FBS3hSLEtBQUssR0FBRztJQUMzQ3dSLElBQUEsQ0FBS3hSLEtBQUEsR0FBUXdSLElBQUEsQ0FBS3hSLEtBQUEsQ0FBTXJELE1BQUEsQ0FBTzJMLElBQUEsSUFBUTtNQUNyQyxNQUFNdk4sSUFBQSxHQUFPLE9BQU91TixJQUFBLEtBQVMsV0FBV0EsSUFBQSxHQUFPQSxJQUFBLENBQUt0SCxJQUFBO01BRXBELElBQUl5USxVQUFBLENBQVdHLEdBQUEsQ0FBSTdXLElBQUksR0FBRztRQUN4QixPQUFPO01BQ1Q7TUFFQTRXLGdCQUFBLENBQWlCelYsSUFBQSxDQUFLO1FBQ3BCMlYsUUFBQSxFQUFVakgsSUFBQSxDQUFLaEssS0FBQSxDQUFNZ0ssSUFBQSxDQUFLQyxTQUFBLENBQVV2QyxJQUFJLENBQUM7UUFDekN3SixXQUFBLEVBQWEvVztNQUNmLENBQUM7TUFFRCxPQUFPO0lBQ1QsQ0FBQztFQUNIO0VBRUEsSUFBSXlXLElBQUEsQ0FBS2hULE9BQUEsSUFBV08sS0FBQSxDQUFNQyxPQUFBLENBQVF3UyxJQUFBLENBQUtoVCxPQUFPLEdBQUc7SUFDL0NnVCxJQUFBLENBQUtoVCxPQUFBLEdBQVVnVCxJQUFBLENBQUtoVCxPQUFBLENBQ2pCMUQsR0FBQSxDQUNDa0QsS0FBQSxJQUNFdVQsMEJBQUEsQ0FBMkI7TUFDekJDLElBQUEsRUFBTXhULEtBQUE7TUFDTnlULFVBQUE7TUFDQUMsVUFBQTtNQUNBalQsT0FBQTtNQUNBa1Q7SUFDRixDQUFDLEVBQUVILElBQ1AsRUFDQzdVLE1BQUEsQ0FBT21NLENBQUEsSUFBS0EsQ0FBQSxLQUFNLFFBQVFBLENBQUEsS0FBTSxNQUFTO0VBQzlDO0VBRUEsSUFBSTBJLElBQUEsQ0FBS3hRLElBQUEsSUFBUSxDQUFDMFEsVUFBQSxDQUFXRSxHQUFBLENBQUlKLElBQUEsQ0FBS3hRLElBQUksR0FBRztJQUMzQzJRLGdCQUFBLENBQWlCelYsSUFBQSxDQUFLO01BQ3BCMlYsUUFBQSxFQUFVakgsSUFBQSxDQUFLaEssS0FBQSxDQUFNZ0ssSUFBQSxDQUFLQyxTQUFBLENBQVUyRyxJQUFJLENBQUM7TUFDekNNLFdBQUEsRUFBYU4sSUFBQSxDQUFLeFE7SUFDcEIsQ0FBQztJQUVELElBQUl3USxJQUFBLENBQUtoVCxPQUFBLElBQVdPLEtBQUEsQ0FBTUMsT0FBQSxDQUFRd1MsSUFBQSxDQUFLaFQsT0FBTyxNQUFLQyxPQUFBLG9CQUFBQSxPQUFBLENBQVNzVCxtQkFBQSxNQUF3QixPQUFPO01BRXpGUCxJQUFBLENBQUt4USxJQUFBLEdBQU87TUFFWixPQUFPO1FBQ0x3USxJQUFBO1FBQ0FHO01BQ0Y7SUFDRjtJQUdBLE9BQU87TUFDTEgsSUFBQSxFQUFNO01BQ05HO0lBQ0Y7RUFDRjtFQUVBLE9BQU87SUFBRUgsSUFBQTtJQUFNRztFQUFpQjtBQUNsQztBQU1PLFNBQVNyZCxzQkFJZGtkLElBQUEsRUFJQTNYLE1BQUEsRUFJQTRFLE9BQUEsRUFtQkE7RUFDQSxPQUFPOFMsMEJBQUEsQ0FBMkI7SUFDaENDLElBQUE7SUFDQUUsVUFBQSxFQUFZLElBQUkvSSxHQUFBLENBQUloTyxNQUFBLENBQU93SSxJQUFBLENBQUt0SixNQUFBLENBQU9vRyxLQUFLLENBQUM7SUFDN0N3UixVQUFBLEVBQVksSUFBSTlJLEdBQUEsQ0FBSWhPLE1BQUEsQ0FBT3dJLElBQUEsQ0FBS3RKLE1BQUEsQ0FBT21HLEtBQUssQ0FBQztJQUM3Q3ZCO0VBQ0YsQ0FBQztBQUNIO0FwRy9JTyxTQUFTbEssd0JBQXdCeUYsRUFBQSxFQUFpQmdZLFFBQUEsRUFBa0JDLElBQUEsRUFBYztFQUN2RixNQUFNQyxJQUFBLEdBQU9sWSxFQUFBLENBQUdtRCxLQUFBLENBQU1PLE1BQUEsR0FBUztFQUUvQixJQUFJd1UsSUFBQSxHQUFPRixRQUFBLEVBQVU7SUFDbkI7RUFDRjtFQUVBLE1BQU01VSxJQUFBLEdBQU9wRCxFQUFBLENBQUdtRCxLQUFBLENBQU0rVSxJQUFBO0VBRXRCLElBQUksRUFBRTlVLElBQUEsWUFBZ0JuSCxpQkFBQSxDQUFBa2MsV0FBQSxJQUFlL1UsSUFBQSxZQUFnQm5ILGlCQUFBLENBQUFtYyxpQkFBQSxHQUFvQjtJQUN2RTtFQUNGO0VBRUEsTUFBTXRYLEdBQUEsR0FBTWQsRUFBQSxDQUFHNFIsT0FBQSxDQUFRQyxJQUFBLENBQUtxRyxJQUFBO0VBQzVCLElBQUl6QyxHQUFBLEdBQU07RUFFVjNVLEdBQUEsQ0FBSTJCLE9BQUEsQ0FBUSxDQUFDNFYsS0FBQSxFQUFPQyxHQUFBLEVBQUtDLFFBQUEsRUFBVUMsS0FBQSxLQUFVO0lBQzNDLElBQUkvQyxHQUFBLEtBQVEsR0FBRztNQUNiQSxHQUFBLEdBQU0rQyxLQUFBO0lBQ1I7RUFDRixDQUFDO0VBRUR4WSxFQUFBLENBQUd5WSxZQUFBLENBQWF6YyxhQUFBLENBQUFrYixTQUFBLENBQVV3QixJQUFBLENBQUsxWSxFQUFBLENBQUdULEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUTRCLEdBQUcsR0FBR3dDLElBQUksQ0FBQztBQUMzRDtBQ0xPLElBQU10akIsU0FBQSxHQUFOLE1BQWdCO0VBWXJCc0wsWUFBWWQsTUFBQSxFQVVUO0lBQ0QsS0FBSzBOLElBQUEsR0FBTzFOLE1BQUEsQ0FBTzBOLElBQUE7SUFDbkIsS0FBSzhMLE9BQUEsR0FBVXhaLE1BQUEsQ0FBT3daLE9BQUE7RUFDeEI7QUFDRjtBQUVBLElBQU1DLHVCQUFBLEdBQTBCQSxDQUFDbEosSUFBQSxFQUFjN0MsSUFBQSxLQUEyRDtFQUN4RyxJQUFJeFQsUUFBQSxDQUFTd1QsSUFBSSxHQUFHO0lBQ2xCLE9BQU9BLElBQUEsQ0FBS2dNLElBQUEsQ0FBS25KLElBQUk7RUFDdkI7RUFFQSxNQUFNb0osY0FBQSxHQUFpQmpNLElBQUEsQ0FBSzZDLElBQUk7RUFFaEMsSUFBSSxDQUFDb0osY0FBQSxFQUFnQjtJQUNuQixPQUFPO0VBQ1Q7RUFFQSxNQUFNQyxNQUFBLEdBQW1DLENBQUNELGNBQUEsQ0FBZXBKLElBQUk7RUFFN0RxSixNQUFBLENBQU90SyxLQUFBLEdBQVFxSyxjQUFBLENBQWVySyxLQUFBO0VBQzlCc0ssTUFBQSxDQUFPQyxLQUFBLEdBQVF0SixJQUFBO0VBQ2ZxSixNQUFBLENBQU9yTSxJQUFBLEdBQU9vTSxjQUFBLENBQWVwTSxJQUFBO0VBRTdCLElBQUlvTSxjQUFBLENBQWVHLFdBQUEsRUFBYTtJQUM5QixJQUFJLENBQUNILGNBQUEsQ0FBZXBKLElBQUEsQ0FBS3JFLFFBQUEsQ0FBU3lOLGNBQUEsQ0FBZUcsV0FBVyxHQUFHO01BQzdEelQsT0FBQSxDQUFRQyxJQUFBLENBQUssb0ZBQW9GO0lBQ25HO0lBRUFzVCxNQUFBLENBQU83VyxJQUFBLENBQUs0VyxjQUFBLENBQWVHLFdBQVc7RUFDeEM7RUFFQSxPQUFPRixNQUFBO0FBQ1Q7QUFFQSxTQUFTaFgsSUFBSTVDLE1BQUEsRUFPRDtFQXRGWixJQUFBd04sRUFBQTtFQXVGRSxNQUFNO0lBQUV4TSxNQUFBO0lBQVF1SCxJQUFBO0lBQU1DLEVBQUE7SUFBSStILElBQUE7SUFBTXdKLEtBQUE7SUFBT0M7RUFBTyxJQUFJaGEsTUFBQTtFQUNsRCxNQUFNO0lBQUVzQjtFQUFLLElBQUlOLE1BQUE7RUFFakIsSUFBSU0sSUFBQSxDQUFLMlksU0FBQSxFQUFXO0lBQ2xCLE9BQU87RUFDVDtFQUVBLE1BQU1wUixLQUFBLEdBQVF2SCxJQUFBLENBQUtyQixLQUFBLENBQU1HLEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUW5NLElBQUk7RUFFekMsSUFFRU0sS0FBQSxDQUFNSSxNQUFBLENBQU9wQixJQUFBLENBQUtqQixJQUFBLENBQUtzSCxJQUFBLElBRXZCLENBQUMsR0FBRVYsRUFBQSxHQUFBM0UsS0FBQSxDQUFNcVIsVUFBQSxJQUFjclIsS0FBQSxDQUFNc1IsU0FBQSxLQUExQixnQkFBQTNNLEVBQUEsQ0FBc0MzRyxLQUFBLENBQU02RyxJQUFBLENBQUt5QixJQUFBLElBQVFBLElBQUEsQ0FBS3RILElBQUEsQ0FBS2pCLElBQUEsQ0FBS3NILElBQUEsSUFDM0U7SUFDQSxPQUFPO0VBQ1Q7RUFFQSxJQUFJa00sT0FBQSxHQUFVO0VBRWQsTUFBTXBGLFVBQUEsR0FBYWpjLHVCQUFBLENBQXdCOFAsS0FBSyxJQUFJMEgsSUFBQTtFQUVwRHdKLEtBQUEsQ0FBTXpXLE9BQUEsQ0FBUStXLElBQUEsSUFBUTtJQUNwQixJQUFJRCxPQUFBLEVBQVM7TUFDWDtJQUNGO0lBRUEsTUFBTXpTLEtBQUEsR0FBUThSLHVCQUFBLENBQXdCekUsVUFBQSxFQUFZcUYsSUFBQSxDQUFLM00sSUFBSTtJQUUzRCxJQUFJLENBQUMvRixLQUFBLEVBQU87TUFDVjtJQUNGO0lBRUEsTUFBTTlHLEVBQUEsR0FBS1MsSUFBQSxDQUFLckIsS0FBQSxDQUFNWSxFQUFBO0lBQ3RCLE1BQU1aLEtBQUEsR0FBUTdKLG9CQUFBLENBQXFCO01BQ2pDNkosS0FBQSxFQUFPcUIsSUFBQSxDQUFLckIsS0FBQTtNQUNaQyxXQUFBLEVBQWFXO0lBQ2YsQ0FBQztJQUNELE1BQU13SCxLQUFBLEdBQVE7TUFDWkUsSUFBQSxFQUFNQSxJQUFBLElBQVFaLEtBQUEsQ0FBTSxHQUFHcEQsTUFBQSxHQUFTZ00sSUFBQSxDQUFLaE0sTUFBQTtNQUNyQ2lFO0lBQ0Y7SUFFQSxNQUFNO01BQUVySCxRQUFBO01BQVVnQixLQUFBO01BQU9FO0lBQUksSUFBSSxJQUFJbE4sY0FBQSxDQUFlO01BQ2xENkwsTUFBQTtNQUNBZjtJQUNGLENBQUM7SUFFRCxNQUFNdVosT0FBQSxHQUFVYSxJQUFBLENBQUtiLE9BQUEsQ0FBUTtNQUMzQnZaLEtBQUE7TUFDQW9JLEtBQUE7TUFDQVYsS0FBQTtNQUNBeEcsUUFBQTtNQUNBZ0IsS0FBQTtNQUNBRTtJQUNGLENBQUM7SUFHRCxJQUFJbVgsT0FBQSxLQUFZLFFBQVEsQ0FBQzNZLEVBQUEsQ0FBR21ELEtBQUEsQ0FBTU8sTUFBQSxFQUFRO01BQ3hDO0lBQ0Y7SUFJQTFELEVBQUEsQ0FBR3laLE9BQUEsQ0FBUU4sTUFBQSxFQUFRO01BQ2pCbFcsU0FBQSxFQUFXakQsRUFBQTtNQUNYMEgsSUFBQTtNQUNBQyxFQUFBO01BQ0ErSDtJQUNGLENBQUM7SUFFRGpQLElBQUEsQ0FBS1ksUUFBQSxDQUFTckIsRUFBRTtJQUNoQnVaLE9BQUEsR0FBVTtFQUNaLENBQUM7RUFFRCxPQUFPQSxPQUFBO0FBQ1Q7QUFPTyxTQUFTbGhCLGlCQUFpQjZILEtBQUEsRUFBdUQ7RUFDdEYsTUFBTTtJQUFFQyxNQUFBO0lBQVErWTtFQUFNLElBQUloWixLQUFBO0VBQzFCLE1BQU1pWixNQUFBLEdBQVMsSUFBSWhkLGFBQUEsQ0FBQXVkLE1BQUEsQ0FBTztJQUN4QnRhLEtBQUEsRUFBTztNQUNMdWEsS0FBQSxFQUFPO1FBQ0wsT0FBTztNQUNUO01BQ0FsYSxNQUFNTyxFQUFBLEVBQUk0WixJQUFBLEVBQU14YSxLQUFBLEVBQU87UUFDckIsTUFBTXlhLE1BQUEsR0FBUzdaLEVBQUEsQ0FBR29CLE9BQUEsQ0FBUStYLE1BQU07UUFFaEMsSUFBSVUsTUFBQSxFQUFRO1VBQ1YsT0FBT0EsTUFBQTtRQUNUO1FBR0EsTUFBTUMsa0JBQUEsR0FBcUI5WixFQUFBLENBQUdvQixPQUFBLENBQVEsaUJBQWlCO1FBTXZELE1BQU0yWSxnQkFBQSxHQUFtQixDQUFDLENBQUNELGtCQUFBO1FBRTNCLElBQUlDLGdCQUFBLEVBQWtCO1VBQ3BCQyxVQUFBLENBQVcsTUFBTTtZQUNmLElBQUk7Y0FBRXRLO1lBQUssSUFBSW9LLGtCQUFBO1lBRWYsSUFBSSxPQUFPcEssSUFBQSxLQUFTLFVBQVU7Y0FDNUJBLElBQUEsR0FBT0EsSUFBQTtZQUNULE9BQU87Y0FDTEEsSUFBQSxHQUFPeFksbUJBQUEsQ0FBb0JnRixhQUFBLENBQUF6SCxRQUFBLENBQVNpVCxJQUFBLENBQUtnSSxJQUFJLEdBQUd0USxLQUFBLENBQU1TLE1BQU07WUFDOUQ7WUFFQSxNQUFNO2NBQUU2SDtZQUFLLElBQUlvUyxrQkFBQTtZQUNqQixNQUFNblMsRUFBQSxHQUFLRCxJQUFBLEdBQU9nSSxJQUFBLENBQUtoTSxNQUFBO1lBRXZCM0IsR0FBQSxDQUFJO2NBQ0Y1QixNQUFBO2NBQ0F1SCxJQUFBO2NBQ0FDLEVBQUE7Y0FDQStILElBQUE7Y0FDQXdKLEtBQUE7Y0FDQUM7WUFDRixDQUFDO1VBQ0gsQ0FBQztRQUNIO1FBRUEsT0FBT25aLEVBQUEsQ0FBR2lhLFlBQUEsSUFBZ0JqYSxFQUFBLENBQUdrYSxVQUFBLEdBQWEsT0FBT04sSUFBQTtNQUNuRDtJQUNGO0lBRUExWixLQUFBLEVBQU87TUFDTGlhLGdCQUFnQjFaLElBQUEsRUFBTWlILElBQUEsRUFBTUMsRUFBQSxFQUFJK0gsSUFBQSxFQUFNO1FBQ3BDLE9BQU8zTixHQUFBLENBQUk7VUFDVDVCLE1BQUE7VUFDQXVILElBQUE7VUFDQUMsRUFBQTtVQUNBK0gsSUFBQTtVQUNBd0osS0FBQTtVQUNBQztRQUNGLENBQUM7TUFDSDtNQUVBaUIsZUFBQSxFQUFpQjtRQUNmQyxjQUFBLEVBQWdCNVosSUFBQSxJQUFRO1VBQ3RCdVosVUFBQSxDQUFXLE1BQU07WUFDZixNQUFNO2NBQUVNO1lBQVEsSUFBSTdaLElBQUEsQ0FBS3JCLEtBQUEsQ0FBTUUsU0FBQTtZQUUvQixJQUFJZ2IsT0FBQSxFQUFTO2NBQ1h2WSxHQUFBLENBQUk7Z0JBQ0Y1QixNQUFBO2dCQUNBdUgsSUFBQSxFQUFNNFMsT0FBQSxDQUFRL1MsR0FBQTtnQkFDZEksRUFBQSxFQUFJMlMsT0FBQSxDQUFRL1MsR0FBQTtnQkFDWm1JLElBQUEsRUFBTTtnQkFDTndKLEtBQUE7Z0JBQ0FDO2NBQ0YsQ0FBQztZQUNIO1VBQ0YsQ0FBQztVQUVELE9BQU87UUFDVDtNQUNGO01BSUFvQixjQUFjOVosSUFBQSxFQUFNNkIsS0FBQSxFQUFPO1FBQ3pCLElBQUlBLEtBQUEsQ0FBTXVJLEdBQUEsS0FBUSxTQUFTO1VBQ3pCLE9BQU87UUFDVDtRQUVBLE1BQU07VUFBRXlQO1FBQVEsSUFBSTdaLElBQUEsQ0FBS3JCLEtBQUEsQ0FBTUUsU0FBQTtRQUUvQixJQUFJZ2IsT0FBQSxFQUFTO1VBQ1gsT0FBT3ZZLEdBQUEsQ0FBSTtZQUNUNUIsTUFBQTtZQUNBdUgsSUFBQSxFQUFNNFMsT0FBQSxDQUFRL1MsR0FBQTtZQUNkSSxFQUFBLEVBQUkyUyxPQUFBLENBQVEvUyxHQUFBO1lBQ1ptSSxJQUFBLEVBQU07WUFDTndKLEtBQUE7WUFDQUM7VUFDRixDQUFDO1FBQ0g7UUFFQSxPQUFPO01BQ1Q7SUFDRjtJQUdBcUIsWUFBQSxFQUFjO0VBQ2hCLENBQUM7RUFFRCxPQUFPckIsTUFBQTtBQUNUO0FvR3pSQSxTQUFTc0IsUUFBUXpXLEtBQUEsRUFBb0I7RUFDbkMsT0FBT3JELE1BQUEsQ0FBT29RLFNBQUEsQ0FBVStCLFFBQUEsQ0FBUzdCLElBQUEsQ0FBS2pOLEtBQUssRUFBRVUsS0FBQSxDQUFNLEdBQUcsRUFBRTtBQUMxRDtBQUVPLFNBQVN0TCxjQUFjNEssS0FBQSxFQUEwQztFQUN0RSxJQUFJeVcsT0FBQSxDQUFRelcsS0FBSyxNQUFNLFVBQVU7SUFDL0IsT0FBTztFQUNUO0VBRUEsT0FBT0EsS0FBQSxDQUFNL0QsV0FBQSxLQUFnQlUsTUFBQSxJQUFVQSxNQUFBLENBQU8rWixjQUFBLENBQWUxVyxLQUFLLE1BQU1yRCxNQUFBLENBQU9vUSxTQUFBO0FBQ2pGO0FDVk8sU0FBU25YLFVBQVUrZ0IsTUFBQSxFQUE2QkMsTUFBQSxFQUFrRDtFQUN2RyxNQUFNakksTUFBQSxHQUFTO0lBQUUsR0FBR2dJO0VBQU87RUFFM0IsSUFBSXZoQixhQUFBLENBQWN1aEIsTUFBTSxLQUFLdmhCLGFBQUEsQ0FBY3doQixNQUFNLEdBQUc7SUFDbERqYSxNQUFBLENBQU93SSxJQUFBLENBQUt5UixNQUFNLEVBQUVuWSxPQUFBLENBQVFvSSxHQUFBLElBQU87TUFDakMsSUFBSXpSLGFBQUEsQ0FBY3doQixNQUFBLENBQU8vUCxHQUFBLENBQUksS0FBS3pSLGFBQUEsQ0FBY3VoQixNQUFBLENBQU85UCxHQUFBLENBQUksR0FBRztRQUM1RDhILE1BQUEsQ0FBTzlILEdBQUEsSUFBT2pSLFNBQUEsQ0FBVStnQixNQUFBLENBQU85UCxHQUFBLEdBQU0rUCxNQUFBLENBQU8vUCxHQUFBLENBQUk7TUFDbEQsT0FBTztRQUNMOEgsTUFBQSxDQUFPOUgsR0FBQSxJQUFPK1AsTUFBQSxDQUFPL1AsR0FBQTtNQUN2QjtJQUNGLENBQUM7RUFDSDtFQUVBLE9BQU84SCxNQUFBO0FBQ1Q7QUN1WU8sSUFBTWtJLFVBQUEsR0FBTixNQUlMO0VBWUE1YSxZQUFZZCxNQUFBLEdBQTBCLENBQUMsR0FBRztJQVgxQyxLQUFBNkgsSUFBQSxHQUFPO0lBQ1AsS0FBQW9CLE1BQUEsR0FBNEI7SUFFNUIsS0FBQXpFLEtBQUEsR0FBMkI7SUFFM0IsS0FBQTVDLElBQUEsR0FBTztJQUVQLEtBQUE1QixNQUFBLEdBQWlCO01BQ2Y0QixJQUFBLEVBQU0sS0FBS0E7SUFDYjtJQUdFLEtBQUs1QixNQUFBLEdBQVM7TUFDWixHQUFHLEtBQUtBLE1BQUE7TUFDUixHQUFHQTtJQUNMO0lBRUEsS0FBSzRCLElBQUEsR0FBUSxLQUFLNUIsTUFBQSxDQUFlNEIsSUFBQTtFQUNuQztFQUVBLElBQUkwRCxRQUFBLEVBQW1CO0lBQ3JCLE9BQU87TUFDTCxJQUFJclAsWUFBQSxDQUNGNkIsaUJBQUEsQ0FBMkMsTUFBYSxjQUFjO1FBQ3BFOEosSUFBQSxFQUFNLEtBQUtBO01BQ2IsQ0FBQyxDQUNILEtBQUssQ0FBQztJQUNSO0VBQ0Y7RUFFQSxJQUFJc0gsUUFBQSxFQUE2QjtJQUMvQixPQUFPO01BQ0wsSUFBSWpULFlBQUEsQ0FDRjZCLGlCQUFBLENBQTJDLE1BQWEsY0FBYztRQUNwRThKLElBQUEsRUFBTSxLQUFLQSxJQUFBO1FBQ1gwRCxPQUFBLEVBQVMsS0FBS0E7TUFDaEIsQ0FBQyxDQUNILEtBQUssQ0FBQztJQUNSO0VBQ0Y7RUFFQXFXLFVBQVVyVyxPQUFBLEdBQTRCLENBQUMsR0FBRztJQUN4QyxNQUFNd0QsU0FBQSxHQUFZLEtBQUs4UyxNQUFBLENBQWlDO01BQ3RELEdBQUcsS0FBSzViLE1BQUE7TUFDUjZiLFVBQUEsRUFBWUEsQ0FBQSxLQUFNO1FBQ2hCLE9BQU9waEIsU0FBQSxDQUFVLEtBQUs2SyxPQUFBLEVBQWdDQSxPQUFPO01BQy9EO0lBQ0YsQ0FBQztJQUVEd0QsU0FBQSxDQUFVbEgsSUFBQSxHQUFPLEtBQUtBLElBQUE7SUFDdEJrSCxTQUFBLENBQVVHLE1BQUEsR0FBUyxLQUFLQSxNQUFBO0lBRXhCLE9BQU9ILFNBQUE7RUFDVDtFQUVBOFMsT0FPRUUsY0FBQSxHQUEwQyxDQUFDLEdBQWlEO0lBQzVGLE1BQU1oVCxTQUFBLEdBQVksSUFBSyxLQUFLaEksV0FBQSxDQUFvQjtNQUFFLEdBQUcsS0FBS2QsTUFBQTtNQUFRLEdBQUc4YjtJQUFlLENBQUM7SUFFckZoVCxTQUFBLENBQVVHLE1BQUEsR0FBUztJQUNuQixLQUFLekUsS0FBQSxHQUFRc0UsU0FBQTtJQUNiQSxTQUFBLENBQVVsSCxJQUFBLEdBQU8sVUFBVWthLGNBQUEsR0FBaUJBLGNBQUEsQ0FBZWxhLElBQUEsR0FBT2tILFNBQUEsQ0FBVUcsTUFBQSxDQUFPckgsSUFBQTtJQUVuRixPQUFPa0gsU0FBQTtFQUNUO0FBQ0Y7QUNsVk8sSUFBTXJULElBQUEsR0FBTixNQUFNc21CLEtBQUEsU0FBMkNMLFVBQUEsQ0FBMkQ7RUFBNUc1YSxZQUFBO0lBQUEsU0FBQWtiLFNBQUE7SUFDTCxLQUFBblUsSUFBQSxHQUFPO0VBQUE7RUFNUCxPQUFPc1EsT0FBeUJuWSxNQUFBLEdBQXdFLENBQUMsR0FBRztJQUUxRyxNQUFNaWMsY0FBQSxHQUFpQixPQUFPamMsTUFBQSxLQUFXLGFBQWFBLE1BQUEsQ0FBTyxJQUFJQSxNQUFBO0lBQ2pFLE9BQU8sSUFBSStiLEtBQUEsQ0FBV0UsY0FBYztFQUN0QztFQUVBLE9BQU9DLFdBQVc7SUFBRWxiLE1BQUE7SUFBUW1PO0VBQUssR0FBbUM7SUFDbEUsTUFBTTtNQUFFdE87SUFBRyxJQUFJRyxNQUFBLENBQU9mLEtBQUE7SUFDdEIsTUFBTWtjLFVBQUEsR0FBYW5iLE1BQUEsQ0FBT2YsS0FBQSxDQUFNRSxTQUFBLENBQVUwSSxLQUFBO0lBQzFDLE1BQU11VCxPQUFBLEdBQVVELFVBQUEsQ0FBVy9ULEdBQUEsS0FBUStULFVBQUEsQ0FBVzdGLEdBQUEsQ0FBSTtJQUVsRCxJQUFJOEYsT0FBQSxFQUFTO01BQ1gsTUFBTUMsWUFBQSxHQUFlRixVQUFBLENBQVd0VixLQUFBLENBQU07TUFDdEMsTUFBTXlWLFFBQUEsR0FBVyxDQUFDLENBQUNELFlBQUEsQ0FBYTNPLElBQUEsQ0FBSzZPLENBQUEsS0FBS0EsQ0FBQSxvQkFBQUEsQ0FBQSxDQUFHMVUsSUFBQSxDQUFLakcsSUFBQSxNQUFTdU4sSUFBQSxDQUFLdk4sSUFBSTtNQUVwRSxJQUFJLENBQUMwYSxRQUFBLEVBQVU7UUFDYixPQUFPO01BQ1Q7TUFFQSxNQUFNRSxVQUFBLEdBQWFILFlBQUEsQ0FBYTNPLElBQUEsQ0FBSzZPLENBQUEsS0FBS0EsQ0FBQSxvQkFBQUEsQ0FBQSxDQUFHMVUsSUFBQSxDQUFLakcsSUFBQSxNQUFTdU4sSUFBQSxDQUFLdk4sSUFBSTtNQUVwRSxJQUFJNGEsVUFBQSxFQUFZO1FBQ2QzYixFQUFBLENBQUc0YixnQkFBQSxDQUFpQkQsVUFBVTtNQUNoQztNQUNBM2IsRUFBQSxDQUFHNmIsVUFBQSxDQUFXLEtBQUtQLFVBQUEsQ0FBVy9ULEdBQUc7TUFFakNwSCxNQUFBLENBQU9NLElBQUEsQ0FBS1ksUUFBQSxDQUFTckIsRUFBRTtNQUV2QixPQUFPO0lBQ1Q7SUFFQSxPQUFPO0VBQ1Q7RUFFQThhLFVBQVVyVyxPQUFBLEVBQTRCO0lBQ3BDLE9BQU8sTUFBTXFXLFNBQUEsQ0FBVXJXLE9BQU87RUFDaEM7RUFFQXNXLE9BS0VFLGNBQUEsRUFVd0M7SUFFeEMsTUFBTUcsY0FBQSxHQUFpQixPQUFPSCxjQUFBLEtBQW1CLGFBQWFBLGNBQUEsQ0FBZSxJQUFJQSxjQUFBO0lBQ2pGLE9BQU8sTUFBTUYsTUFBQSxDQUFPSyxjQUFjO0VBQ3BDO0FBQ0Y7QUNsTk8sU0FBU2ppQixTQUFTNkssS0FBQSxFQUE2QjtFQUNwRCxPQUFPLE9BQU9BLEtBQUEsS0FBVTtBQUMxQjtBdkcyQk8sSUFBTTlPLFNBQUEsR0FBTixNQUFnQjtFQWNyQitLLFlBQVlkLE1BQUEsRUFZVDtJQUNELEtBQUswTixJQUFBLEdBQU8xTixNQUFBLENBQU8wTixJQUFBO0lBQ25CLEtBQUs4TCxPQUFBLEdBQVV4WixNQUFBLENBQU93WixPQUFBO0VBQ3hCO0FBQ0Y7QUFFQSxJQUFNbUQsdUJBQUEsR0FBMEJBLENBQzlCcE0sSUFBQSxFQUNBN0MsSUFBQSxFQUNBdkssS0FBQSxLQUMrQjtFQUMvQixJQUFJakosUUFBQSxDQUFTd1QsSUFBSSxHQUFHO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHNkMsSUFBQSxDQUFLcU0sUUFBQSxDQUFTbFAsSUFBSSxDQUFDO0VBQ2hDO0VBRUEsTUFBTW1QLE9BQUEsR0FBVW5QLElBQUEsQ0FBSzZDLElBQUEsRUFBTXBOLEtBQUs7RUFFaEMsSUFBSSxDQUFDMFosT0FBQSxFQUFTO0lBQ1osT0FBTyxFQUFDO0VBQ1Y7RUFFQSxPQUFPQSxPQUFBLENBQVFsYixHQUFBLENBQUltYixjQUFBLElBQWtCO0lBQ25DLE1BQU1sRCxNQUFBLEdBQW1DLENBQUNrRCxjQUFBLENBQWV2TSxJQUFJO0lBRTdEcUosTUFBQSxDQUFPdEssS0FBQSxHQUFRd04sY0FBQSxDQUFleE4sS0FBQTtJQUM5QnNLLE1BQUEsQ0FBT0MsS0FBQSxHQUFRdEosSUFBQTtJQUNmcUosTUFBQSxDQUFPck0sSUFBQSxHQUFPdVAsY0FBQSxDQUFldlAsSUFBQTtJQUU3QixJQUFJdVAsY0FBQSxDQUFlaEQsV0FBQSxFQUFhO01BQzlCLElBQUksQ0FBQ2dELGNBQUEsQ0FBZXZNLElBQUEsQ0FBS3JFLFFBQUEsQ0FBUzRRLGNBQUEsQ0FBZWhELFdBQVcsR0FBRztRQUM3RHpULE9BQUEsQ0FBUUMsSUFBQSxDQUFLLG9GQUFvRjtNQUNuRztNQUVBc1QsTUFBQSxDQUFPN1csSUFBQSxDQUFLK1osY0FBQSxDQUFlaEQsV0FBVztJQUN4QztJQUVBLE9BQU9GLE1BQUE7RUFDVCxDQUFDO0FBQ0g7QUFFQSxTQUFTbUQsS0FBSS9jLE1BQUEsRUFRRDtFQUNWLE1BQU07SUFBRWdCLE1BQUE7SUFBUWYsS0FBQTtJQUFPc0ksSUFBQTtJQUFNQyxFQUFBO0lBQUk2UixJQUFBO0lBQU0yQyxVQUFBO0lBQVlDO0VBQVUsSUFBSWpkLE1BQUE7RUFFakUsTUFBTTtJQUFFbUIsUUFBQTtJQUFVZ0IsS0FBQTtJQUFPRTtFQUFJLElBQUksSUFBSWxOLGNBQUEsQ0FBZTtJQUNsRDZMLE1BQUE7SUFDQWY7RUFDRixDQUFDO0VBRUQsTUFBTWlkLFFBQUEsR0FBNEIsRUFBQztFQUVuQ2pkLEtBQUEsQ0FBTUcsR0FBQSxDQUFJa0ksWUFBQSxDQUFhQyxJQUFBLEVBQU1DLEVBQUEsRUFBSSxDQUFDckUsSUFBQSxFQUFNaUUsR0FBQSxLQUFRO0lBQzlDLElBQUksQ0FBQ2pFLElBQUEsQ0FBSzRELFdBQUEsSUFBZTVELElBQUEsQ0FBSzBELElBQUEsQ0FBS2pCLElBQUEsQ0FBS3NILElBQUEsRUFBTTtNQUM1QztJQUNGO0lBRUEsTUFBTWdKLFlBQUEsR0FBZXZHLElBQUEsQ0FBS0MsR0FBQSxDQUFJckksSUFBQSxFQUFNSCxHQUFHO0lBQ3ZDLE1BQU0rVSxVQUFBLEdBQWF4TSxJQUFBLENBQUsrRSxHQUFBLENBQUlsTixFQUFBLEVBQUlKLEdBQUEsR0FBTWpFLElBQUEsQ0FBS2tCLE9BQUEsQ0FBUXdMLElBQUk7SUFDdkQsTUFBTXVNLFdBQUEsR0FBY2paLElBQUEsQ0FBS2taLFdBQUEsQ0FBWW5HLFlBQUEsR0FBZTlPLEdBQUEsRUFBSytVLFVBQUEsR0FBYS9VLEdBQUEsRUFBSyxRQUFXLFFBQVE7SUFFOUYsTUFBTXlVLE9BQUEsR0FBVUYsdUJBQUEsQ0FBd0JTLFdBQUEsRUFBYS9DLElBQUEsQ0FBSzNNLElBQUEsRUFBTXNQLFVBQVU7SUFFMUVILE9BQUEsQ0FBUXZaLE9BQUEsQ0FBUXFFLEtBQUEsSUFBUztNQUN2QixJQUFJQSxLQUFBLENBQU0ySCxLQUFBLEtBQVUsUUFBVztRQUM3QjtNQUNGO01BRUEsTUFBTTFHLEtBQUEsR0FBUXNPLFlBQUEsR0FBZXZQLEtBQUEsQ0FBTTJILEtBQUEsR0FBUTtNQUMzQyxNQUFNZ0gsR0FBQSxHQUFNMU4sS0FBQSxHQUFRakIsS0FBQSxDQUFNLEdBQUdwRCxNQUFBO01BQzdCLE1BQU04RCxLQUFBLEdBQVE7UUFDWkUsSUFBQSxFQUFNdEksS0FBQSxDQUFNWSxFQUFBLENBQUc0UixPQUFBLENBQVE5USxHQUFBLENBQUlpSCxLQUFLO1FBQ2hDSixFQUFBLEVBQUl2SSxLQUFBLENBQU1ZLEVBQUEsQ0FBRzRSLE9BQUEsQ0FBUTlRLEdBQUEsQ0FBSTJVLEdBQUc7TUFDOUI7TUFFQSxNQUFNa0QsT0FBQSxHQUFVYSxJQUFBLENBQUtiLE9BQUEsQ0FBUTtRQUMzQnZaLEtBQUE7UUFDQW9JLEtBQUE7UUFDQVYsS0FBQTtRQUNBeEcsUUFBQTtRQUNBZ0IsS0FBQTtRQUNBRSxHQUFBO1FBQ0EyYSxVQUFBO1FBQ0FDO01BQ0YsQ0FBQztNQUVEQyxRQUFBLENBQVNuYSxJQUFBLENBQUt5VyxPQUFPO0lBQ3ZCLENBQUM7RUFDSCxDQUFDO0VBRUQsTUFBTThELE9BQUEsR0FBVUosUUFBQSxDQUFTcmEsS0FBQSxDQUFNMlcsT0FBQSxJQUFXQSxPQUFBLEtBQVksSUFBSTtFQUUxRCxPQUFPOEQsT0FBQTtBQUNUO0FBR0EsSUFBSUMseUJBQUEsR0FBMkM7QUFFL0MsSUFBTUMseUJBQUEsR0FBNkJqTixJQUFBLElBQWlCO0VBL0pwRCxJQUFBL0MsRUFBQTtFQWdLRSxNQUFNckssS0FBQSxHQUFRLElBQUlzYSxjQUFBLENBQWUsU0FBUztJQUN4Q0MsYUFBQSxFQUFlLElBQUlDLFlBQUEsQ0FBYTtFQUNsQyxDQUFDO0VBRUQsQ0FBQW5RLEVBQUEsR0FBQXJLLEtBQUEsQ0FBTXVhLGFBQUEsS0FBTixnQkFBQWxRLEVBQUEsQ0FBcUJvUSxPQUFBLENBQVEsYUFBYXJOLElBQUE7RUFFMUMsT0FBT3BOLEtBQUE7QUFDVDtBQU9PLFNBQVNySSxpQkFBaUJpRyxLQUFBLEVBQXlEO0VBQ3hGLE1BQU07SUFBRUMsTUFBQTtJQUFRK1k7RUFBTSxJQUFJaFosS0FBQTtFQUMxQixJQUFJOGMsaUJBQUEsR0FBb0M7RUFDeEMsSUFBSUMsdUJBQUEsR0FBMEI7RUFDOUIsSUFBSUMsd0JBQUEsR0FBMkI7RUFDL0IsSUFBSWYsVUFBQSxHQUFhLE9BQU9TLGNBQUEsS0FBbUIsY0FBYyxJQUFJQSxjQUFBLENBQWUsT0FBTyxJQUFJO0VBQ3ZGLElBQUlSLFNBQUE7RUFFSixJQUFJO0lBQ0ZBLFNBQUEsR0FBWSxPQUFPZSxTQUFBLEtBQWMsY0FBYyxJQUFJQSxTQUFBLENBQVUsTUFBTSxJQUFJO0VBQ3pFO0lBQ0VmLFNBQUEsR0FBWTtFQUNkO0VBRUEsTUFBTWdCLFlBQUEsR0FBZUEsQ0FBQztJQUNwQmhlLEtBQUE7SUFDQXNJLElBQUE7SUFDQUMsRUFBQTtJQUNBNlIsSUFBQTtJQUNBNkQ7RUFDRixNQU1NO0lBQ0osTUFBTXJkLEVBQUEsR0FBS1osS0FBQSxDQUFNWSxFQUFBO0lBQ2pCLE1BQU1zZCxjQUFBLEdBQWlCL25CLG9CQUFBLENBQXFCO01BQzFDNkosS0FBQTtNQUNBQyxXQUFBLEVBQWFXO0lBQ2YsQ0FBQztJQUVELE1BQU0yWSxPQUFBLEdBQVV1RCxJQUFBLENBQUk7TUFDbEIvYixNQUFBO01BQ0FmLEtBQUEsRUFBT2tlLGNBQUE7TUFDUDVWLElBQUEsRUFBTW9JLElBQUEsQ0FBS0MsR0FBQSxDQUFJckksSUFBQSxHQUFPLEdBQUcsQ0FBQztNQUMxQkMsRUFBQSxFQUFJQSxFQUFBLENBQUdvSCxDQUFBLEdBQUk7TUFDWHlLLElBQUE7TUFDQTJDLFVBQUEsRUFBWWtCLFFBQUE7TUFDWmpCO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQ3pELE9BQUEsSUFBVyxDQUFDM1ksRUFBQSxDQUFHbUQsS0FBQSxDQUFNTyxNQUFBLEVBQVE7TUFDaEM7SUFDRjtJQUVBLElBQUk7TUFDRjBZLFNBQUEsR0FBWSxPQUFPZSxTQUFBLEtBQWMsY0FBYyxJQUFJQSxTQUFBLENBQVUsTUFBTSxJQUFJO0lBQ3pFO01BQ0VmLFNBQUEsR0FBWTtJQUNkO0lBQ0FELFVBQUEsR0FBYSxPQUFPUyxjQUFBLEtBQW1CLGNBQWMsSUFBSUEsY0FBQSxDQUFlLE9BQU8sSUFBSTtJQUVuRixPQUFPNWMsRUFBQTtFQUNUO0VBRUEsTUFBTUosT0FBQSxHQUFVc1osS0FBQSxDQUFNcFksR0FBQSxDQUFJMFksSUFBQSxJQUFRO0lBQ2hDLE9BQU8sSUFBSW5kLGFBQUEsQ0FBQXFkLE1BQUEsQ0FBTztNQUVoQmpaLEtBQUtBLElBQUEsRUFBTTtRQUNULE1BQU04YyxlQUFBLEdBQW1CamIsS0FBQSxJQUFxQjtVQTNPdEQsSUFBQXFLLEVBQUE7VUE0T1VxUSxpQkFBQSxLQUFvQnJRLEVBQUEsR0FBQWxNLElBQUEsQ0FBSzZPLEdBQUEsQ0FBSWtPLGFBQUEsS0FBVCxnQkFBQTdRLEVBQUEsQ0FBd0I4USxRQUFBLENBQVNuYixLQUFBLENBQU1xWSxNQUFBLEtBQXFCbGEsSUFBQSxDQUFLNk8sR0FBQSxDQUFJa08sYUFBQSxHQUFnQjtVQUV6RyxJQUFJUixpQkFBQSxFQUFtQjtZQUNyQk4seUJBQUEsR0FBNEJ2YyxNQUFBO1VBQzlCO1FBQ0Y7UUFFQSxNQUFNdWQsYUFBQSxHQUFnQkEsQ0FBQSxLQUFNO1VBQzFCLElBQUloQix5QkFBQSxFQUEyQjtZQUM3QkEseUJBQUEsR0FBNEI7VUFDOUI7UUFDRjtRQUVBelksTUFBQSxDQUFPMFosZ0JBQUEsQ0FBaUIsYUFBYUosZUFBZTtRQUNwRHRaLE1BQUEsQ0FBTzBaLGdCQUFBLENBQWlCLFdBQVdELGFBQWE7UUFFaEQsT0FBTztVQUNMRSxRQUFBLEVBQVU7WUFDUjNaLE1BQUEsQ0FBTzRaLG1CQUFBLENBQW9CLGFBQWFOLGVBQWU7WUFDdkR0WixNQUFBLENBQU80WixtQkFBQSxDQUFvQixXQUFXSCxhQUFhO1VBQ3JEO1FBQ0Y7TUFDRjtNQUVBeGQsS0FBQSxFQUFPO1FBQ0xrYSxlQUFBLEVBQWlCO1VBQ2YwRCxJQUFBLEVBQU1BLENBQUNyZCxJQUFBLEVBQU02QixLQUFBLEtBQWlCO1lBQzVCNGEsd0JBQUEsR0FBMkJGLGlCQUFBLEtBQXNCdmMsSUFBQSxDQUFLNk8sR0FBQSxDQUFJa08sYUFBQTtZQUMxRHBCLFNBQUEsR0FBWTlaLEtBQUE7WUFFWixJQUFJLENBQUM0YSx3QkFBQSxFQUEwQjtjQUM3QixNQUFNYSxtQkFBQSxHQUFzQnJCLHlCQUFBO2NBRTVCLElBQUlxQixtQkFBQSxvQkFBQUEsbUJBQUEsQ0FBcUJDLFVBQUEsRUFBWTtnQkFFbkNoRSxVQUFBLENBQVcsTUFBTTtrQkFDZixNQUFNMWEsU0FBQSxHQUFZeWUsbUJBQUEsQ0FBb0IzZSxLQUFBLENBQU1FLFNBQUE7a0JBRTVDLElBQUlBLFNBQUEsRUFBVztvQkFDYnllLG1CQUFBLENBQW9CemQsUUFBQSxDQUFTMmQsV0FBQSxDQUFZO3NCQUFFdlcsSUFBQSxFQUFNcEksU0FBQSxDQUFVb0ksSUFBQTtzQkFBTUMsRUFBQSxFQUFJckksU0FBQSxDQUFVcUk7b0JBQUcsQ0FBQztrQkFDckY7Z0JBQ0YsR0FBRyxFQUFFO2NBQ1A7WUFDRjtZQUNBLE9BQU87VUFDVDtVQUVBdVcsS0FBQSxFQUFPQSxDQUFDQyxLQUFBLEVBQU83YixLQUFBLEtBQWlCO1lBM1IxQyxJQUFBcUssRUFBQTtZQTRSWSxNQUFNdkksSUFBQSxJQUFRdUksRUFBQSxHQUFBckssS0FBQSxDQUF5QnVhLGFBQUEsS0FBekIsZ0JBQUFsUSxFQUFBLENBQXdDeVIsT0FBQSxDQUFRO1lBRTlEakMsVUFBQSxHQUFhN1osS0FBQTtZQUViMmEsdUJBQUEsR0FBMEIsQ0FBQyxFQUFDN1ksSUFBQSxvQkFBQUEsSUFBQSxDQUFNaUgsUUFBQSxDQUFTO1lBRTNDLE9BQU87VUFDVDtRQUNGO01BQ0Y7TUFFQWdULGlCQUFBLEVBQW1CQSxDQUFDcmIsWUFBQSxFQUFjc2IsUUFBQSxFQUFVbGYsS0FBQSxLQUFVO1FBQ3BELE1BQU1DLFdBQUEsR0FBYzJELFlBQUEsQ0FBYTtRQUNqQyxNQUFNdWIsT0FBQSxHQUFVbGYsV0FBQSxDQUFZK0IsT0FBQSxDQUFRLFNBQVMsTUFBTSxXQUFXLENBQUM2Yix1QkFBQTtRQUMvRCxNQUFNdUIsTUFBQSxHQUFTbmYsV0FBQSxDQUFZK0IsT0FBQSxDQUFRLFNBQVMsTUFBTSxVQUFVLENBQUM4Yix3QkFBQTtRQUc3RCxNQUFNdUIsa0JBQUEsR0FBcUJwZixXQUFBLENBQVkrQixPQUFBLENBQVEsaUJBQWlCO1FBR2hFLE1BQU1zZCxnQkFBQSxHQUFtQixDQUFDLENBQUNELGtCQUFBO1FBRTNCLElBQUksQ0FBQ0YsT0FBQSxJQUFXLENBQUNDLE1BQUEsSUFBVSxDQUFDRSxnQkFBQSxFQUFrQjtVQUM1QztRQUNGO1FBR0EsSUFBSUEsZ0JBQUEsRUFBa0I7VUFDcEIsSUFBSTtZQUFFaFA7VUFBSyxJQUFJK08sa0JBQUE7VUFFZixJQUFJLE9BQU8vTyxJQUFBLEtBQVMsVUFBVTtZQUM1QkEsSUFBQSxHQUFPQSxJQUFBO1VBQ1QsT0FBTztZQUNMQSxJQUFBLEdBQU94WSxtQkFBQSxDQUFvQmtGLGFBQUEsQ0FBQTNILFFBQUEsQ0FBU2lULElBQUEsQ0FBS2dJLElBQUksR0FBR3RRLEtBQUEsQ0FBTVMsTUFBTTtVQUM5RDtVQUVBLE1BQU07WUFBRTZILElBQUEsRUFBQWlYO1VBQUssSUFBSUYsa0JBQUE7VUFDakIsTUFBTUcsR0FBQSxHQUFLRCxLQUFBLEdBQU9qUCxJQUFBLENBQUtoTSxNQUFBO1VBRXZCLE1BQU0yWixRQUFBLEdBQVdWLHlCQUFBLENBQTBCak4sSUFBSTtVQUUvQyxPQUFPME4sWUFBQSxDQUFhO1lBQ2xCNUQsSUFBQTtZQUNBcGEsS0FBQTtZQUNBc0ksSUFBQSxFQUFBaVgsS0FBQTtZQUNBaFgsRUFBQSxFQUFJO2NBQUVvSCxDQUFBLEVBQUc2UDtZQUFHO1lBQ1p2QjtVQUNGLENBQUM7UUFDSDtRQUdBLE1BQU0zVixJQUFBLEdBQU80VyxRQUFBLENBQVMvZSxHQUFBLENBQUlpRixPQUFBLENBQVFxYSxhQUFBLENBQWN6ZixLQUFBLENBQU1HLEdBQUEsQ0FBSWlGLE9BQU87UUFDakUsTUFBTW1ELEVBQUEsR0FBSzJXLFFBQUEsQ0FBUy9lLEdBQUEsQ0FBSWlGLE9BQUEsQ0FBUXNhLFdBQUEsQ0FBWTFmLEtBQUEsQ0FBTUcsR0FBQSxDQUFJaUYsT0FBTztRQUc3RCxJQUFJLENBQUNyTCxRQUFBLENBQVN1TyxJQUFJLEtBQUssQ0FBQ0MsRUFBQSxJQUFNRCxJQUFBLEtBQVNDLEVBQUEsQ0FBR29ILENBQUEsRUFBRztVQUMzQztRQUNGO1FBRUEsT0FBT3FPLFlBQUEsQ0FBYTtVQUNsQjVELElBQUE7VUFDQXBhLEtBQUE7VUFDQXNJLElBQUE7VUFDQUMsRUFBQTtVQUNBMFYsUUFBQSxFQUFVbEI7UUFDWixDQUFDO01BQ0g7SUFDRixDQUFDO0VBQ0gsQ0FBQztFQUVELE9BQU92YyxPQUFBO0FBQ1Q7QWJ2VU8sSUFBTW1mLGdCQUFBLEdBQU4sTUFBdUI7RUFTNUI5ZSxZQUFZaEssVUFBQSxFQUF3QmtLLE1BQUEsRUFBZ0I7SUFGcEQsS0FBQTZlLGVBQUEsR0FBNEIsRUFBQztJQUczQixLQUFLN2UsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS2xLLFVBQUEsR0FBYW1FLGlCQUFBLENBQWtCbkUsVUFBVTtJQUM5QyxLQUFLNEosTUFBQSxHQUFTakksNkJBQUEsQ0FBOEIsS0FBSzNCLFVBQUEsRUFBWWtLLE1BQU07SUFDbkUsS0FBSzhlLGVBQUEsQ0FBZ0I7RUFDdkI7RUFZQSxJQUFJM2UsU0FBQSxFQUF3QjtJQUMxQixPQUFPLEtBQUtySyxVQUFBLENBQVd5VSxNQUFBLENBQU8sQ0FBQ3BLLFFBQUEsRUFBVTJILFNBQUEsS0FBYztNQUNyRCxNQUFNRSxPQUFBLEdBQVU7UUFDZHBILElBQUEsRUFBTWtILFNBQUEsQ0FBVWxILElBQUE7UUFDaEIwRCxPQUFBLEVBQVN3RCxTQUFBLENBQVV4RCxPQUFBO1FBQ25CNEQsT0FBQSxFQUFTLEtBQUtsSSxNQUFBLENBQU8rZSxnQkFBQSxDQUFpQmpYLFNBQUEsQ0FBVWxILElBQUE7UUFDaERaLE1BQUEsRUFBUSxLQUFLQSxNQUFBO1FBQ2I2RyxJQUFBLEVBQU1uUCxtQkFBQSxDQUFvQm9RLFNBQUEsQ0FBVWxILElBQUEsRUFBTSxLQUFLbEIsTUFBTTtNQUN2RDtNQUVBLE1BQU1zZixXQUFBLEdBQWNsb0IsaUJBQUEsQ0FBNENnUixTQUFBLEVBQVcsZUFBZUUsT0FBTztNQUVqRyxJQUFJLENBQUNnWCxXQUFBLEVBQWE7UUFDaEIsT0FBTzdlLFFBQUE7TUFDVDtNQUVBLE9BQU87UUFDTCxHQUFHQSxRQUFBO1FBQ0gsR0FBRzZlLFdBQUEsQ0FBWTtNQUNqQjtJQUNGLEdBQUcsQ0FBQyxDQUFnQjtFQUN0QjtFQU1BLElBQUl2ZixRQUFBLEVBQW9CO0lBQ3RCLE1BQU07TUFBRU87SUFBTyxJQUFJO0lBT25CLE1BQU1sSyxVQUFBLEdBQWF1RSxjQUFBLENBQWUsQ0FBQyxHQUFHLEtBQUt2RSxVQUFVLEVBQUVzYSxPQUFBLENBQVEsQ0FBQztJQUVoRSxNQUFNNk8sVUFBQSxHQUEwQixFQUFDO0lBQ2pDLE1BQU1DLFVBQUEsR0FBMEIsRUFBQztJQUVqQyxNQUFNQyxVQUFBLEdBQWFycEIsVUFBQSxDQUNoQjZLLEdBQUEsQ0FBSW1ILFNBQUEsSUFBYTtNQUNoQixNQUFNRSxPQUFBLEdBQVU7UUFDZHBILElBQUEsRUFBTWtILFNBQUEsQ0FBVWxILElBQUE7UUFDaEIwRCxPQUFBLEVBQVN3RCxTQUFBLENBQVV4RCxPQUFBO1FBQ25CNEQsT0FBQSxFQUFTLEtBQUtsSSxNQUFBLENBQU8rZSxnQkFBQSxDQUFpQmpYLFNBQUEsQ0FBVWxILElBQUE7UUFDaERaLE1BQUE7UUFDQTZHLElBQUEsRUFBTW5QLG1CQUFBLENBQW9Cb1EsU0FBQSxDQUFVbEgsSUFBQSxFQUFNLEtBQUtsQixNQUFNO01BQ3ZEO01BRUEsTUFBTUQsT0FBQSxHQUFvQixFQUFDO01BRTNCLE1BQU0yZixvQkFBQSxHQUF1QnRvQixpQkFBQSxDQUMzQmdSLFNBQUEsRUFDQSx3QkFDQUUsT0FDRjtNQUVBLElBQUlxWCxlQUFBLEdBQWlELENBQUM7TUFHdEQsSUFBSXZYLFNBQUEsQ0FBVWpCLElBQUEsS0FBUyxVQUFVL1AsaUJBQUEsQ0FBMENnUixTQUFBLEVBQVcsWUFBWUUsT0FBTyxHQUFHO1FBQzFHcVgsZUFBQSxDQUFnQkMsVUFBQSxHQUFhLE1BQU03cUIsSUFBQSxDQUFLeW1CLFVBQUEsQ0FBVztVQUFFbGIsTUFBQTtVQUFRbU8sSUFBQSxFQUFNckc7UUFBa0IsQ0FBQztNQUN4RjtNQUVBLElBQUlzWCxvQkFBQSxFQUFzQjtRQUN4QixNQUFNRyxRQUFBLEdBQVcvZSxNQUFBLENBQU9DLFdBQUEsQ0FDdEJELE1BQUEsQ0FBT0UsT0FBQSxDQUFRMGUsb0JBQUEsQ0FBcUIsQ0FBQyxFQUFFemUsR0FBQSxDQUFJLENBQUMsQ0FBQzZlLFFBQUEsRUFBVTFlLE1BQU0sTUFBTTtVQUNqRSxPQUFPLENBQUMwZSxRQUFBLEVBQVUsTUFBTTFlLE1BQUEsQ0FBTztZQUFFZDtVQUFPLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQ0g7UUFFQXFmLGVBQUEsR0FBa0I7VUFBRSxHQUFHQSxlQUFBO1VBQWlCLEdBQUdFO1FBQVM7TUFDdEQ7TUFFQSxNQUFNRSxZQUFBLE9BQWV2a0IsYUFBQSxDQUFBd2tCLE1BQUEsRUFBT0wsZUFBZTtNQUUzQzVmLE9BQUEsQ0FBUXNDLElBQUEsQ0FBSzBkLFlBQVk7TUFFekIsTUFBTUUsYUFBQSxHQUFnQjdvQixpQkFBQSxDQUE4Q2dSLFNBQUEsRUFBVyxpQkFBaUJFLE9BQU87TUFFdkcsSUFBSXhQLHVCQUFBLENBQXdCc1AsU0FBQSxFQUFXOUgsTUFBQSxDQUFPc0UsT0FBQSxDQUFRc2IsZ0JBQWdCLEtBQUtELGFBQUEsRUFBZTtRQUN4RlYsVUFBQSxDQUFXbGQsSUFBQSxDQUFLLEdBQUc0ZCxhQUFBLENBQWMsQ0FBQztNQUNwQztNQUVBLE1BQU1FLGFBQUEsR0FBZ0Ivb0IsaUJBQUEsQ0FBOENnUixTQUFBLEVBQVcsaUJBQWlCRSxPQUFPO01BRXZHLElBQUl4UCx1QkFBQSxDQUF3QnNQLFNBQUEsRUFBVzlILE1BQUEsQ0FBT3NFLE9BQUEsQ0FBUXdiLGdCQUFnQixLQUFLRCxhQUFBLEVBQWU7UUFDeEZYLFVBQUEsQ0FBV25kLElBQUEsQ0FBSyxHQUFHOGQsYUFBQSxDQUFjLENBQUM7TUFDcEM7TUFFQSxNQUFNRSxxQkFBQSxHQUF3QmpwQixpQkFBQSxDQUM1QmdSLFNBQUEsRUFDQSx5QkFDQUUsT0FDRjtNQUVBLElBQUkrWCxxQkFBQSxFQUF1QjtRQUN6QixNQUFNQyxrQkFBQSxHQUFxQkQscUJBQUEsQ0FBc0I7UUFFakR0Z0IsT0FBQSxDQUFRc0MsSUFBQSxDQUFLLEdBQUdpZSxrQkFBa0I7TUFDcEM7TUFFQSxPQUFPdmdCLE9BQUE7SUFDVCxDQUFDLEVBQ0EySSxJQUFBLENBQUs7SUFFUixPQUFPLENBQ0xsUSxnQkFBQSxDQUFpQjtNQUNmOEgsTUFBQTtNQUNBK1ksS0FBQSxFQUFPa0c7SUFDVCxDQUFDLEdBQ0QsR0FBR25sQixnQkFBQSxDQUFpQjtNQUNsQmtHLE1BQUE7TUFDQStZLEtBQUEsRUFBT21HO0lBQ1QsQ0FBQyxHQUNELEdBQUdDLFVBQUEsQ0FDTDtFQUNGO0VBTUEsSUFBSWpWLFdBQUEsRUFBYTtJQUNmLE9BQU92VCwyQkFBQSxDQUE0QixLQUFLYixVQUFVO0VBQ3BEO0VBTUEsSUFBSW1xQixVQUFBLEVBQWlEO0lBQ25ELE1BQU07TUFBRWpnQjtJQUFPLElBQUk7SUFDbkIsTUFBTTtNQUFFa0o7SUFBZSxJQUFJNU8sZUFBQSxDQUFnQixLQUFLeEUsVUFBVTtJQUUxRCxPQUFPMEssTUFBQSxDQUFPQyxXQUFBLENBQ1p5SSxjQUFBLENBQ0cxRyxNQUFBLENBQU9zRixTQUFBLElBQWEsQ0FBQyxDQUFDaFIsaUJBQUEsQ0FBa0JnUixTQUFBLEVBQVcsYUFBYSxDQUFDLEVBQ2pFbkgsR0FBQSxDQUFJbUgsU0FBQSxJQUFhO01BQ2hCLE1BQU1zQixtQkFBQSxHQUFzQixLQUFLYyxVQUFBLENBQVcxSCxNQUFBLENBQU8ySCxTQUFBLElBQWFBLFNBQUEsQ0FBVXRELElBQUEsS0FBU2lCLFNBQUEsQ0FBVWxILElBQUk7TUFDakcsTUFBTW9ILE9BQUEsR0FBVTtRQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtRQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7UUFDbkI0RCxPQUFBLEVBQVMsS0FBS2xJLE1BQUEsQ0FBTytlLGdCQUFBLENBQWlCalgsU0FBQSxDQUFVbEgsSUFBQTtRQUNoRFosTUFBQTtRQUNBNkcsSUFBQSxFQUFNdlAsV0FBQSxDQUFZd1EsU0FBQSxDQUFVbEgsSUFBQSxFQUFNLEtBQUtsQixNQUFNO01BQy9DO01BQ0EsTUFBTXdnQixXQUFBLEdBQWNwcEIsaUJBQUEsQ0FBNkNnUixTQUFBLEVBQVcsZUFBZUUsT0FBTztNQUVsRyxJQUFJLENBQUNrWSxXQUFBLEVBQWE7UUFDaEIsT0FBTyxFQUFDO01BQ1Y7TUFFQSxNQUFNQyxRQUFBLEdBQWdDQSxDQUFDaGQsSUFBQSxFQUFNN0MsSUFBQSxFQUFNOGYsTUFBQSxFQUFRQyxXQUFBLEVBQWFDLGdCQUFBLEtBQXFCO1FBQzNGLE1BQU0zUyxjQUFBLEdBQWlCcFcscUJBQUEsQ0FBc0I0TCxJQUFBLEVBQU1pRyxtQkFBbUI7UUFFdEUsT0FBTzhXLFdBQUEsQ0FBWSxFQUFFO1VBRW5CL2MsSUFBQTtVQUNBN0MsSUFBQTtVQUNBOGYsTUFBQTtVQUNBQyxXQUFBO1VBQ0FDLGdCQUFBO1VBRUF0Z0IsTUFBQTtVQUNBOEgsU0FBQTtVQUNBNkY7UUFDRixDQUFDO01BQ0g7TUFFQSxPQUFPLENBQUM3RixTQUFBLENBQVVsSCxJQUFBLEVBQU11ZixRQUFRO0lBQ2xDLENBQUMsQ0FDTDtFQUNGO0VBRUEsSUFBSUksVUFBQSxFQUFpRDtJQUNuRCxNQUFNO01BQUV2Z0I7SUFBTyxJQUFJO0lBQ25CLE1BQU07TUFBRW1KO0lBQWUsSUFBSTdPLGVBQUEsQ0FBZ0IsS0FBS3hFLFVBQVU7SUFFMUQsT0FBTzBLLE1BQUEsQ0FBT0MsV0FBQSxDQUNaMEksY0FBQSxDQUNHM0csTUFBQSxDQUFPc0YsU0FBQSxJQUFhLENBQUMsQ0FBQ2hSLGlCQUFBLENBQWtCZ1IsU0FBQSxFQUFXLGFBQWEsQ0FBQyxFQUNqRW5ILEdBQUEsQ0FBSW1ILFNBQUEsSUFBYTtNQUNoQixNQUFNc0IsbUJBQUEsR0FBc0IsS0FBS2MsVUFBQSxDQUFXMUgsTUFBQSxDQUFPMkgsU0FBQSxJQUFhQSxTQUFBLENBQVV0RCxJQUFBLEtBQVNpQixTQUFBLENBQVVsSCxJQUFJO01BQ2pHLE1BQU1vSCxPQUFBLEdBQVU7UUFDZHBILElBQUEsRUFBTWtILFNBQUEsQ0FBVWxILElBQUE7UUFDaEIwRCxPQUFBLEVBQVN3RCxTQUFBLENBQVV4RCxPQUFBO1FBQ25CNEQsT0FBQSxFQUFTLEtBQUtsSSxNQUFBLENBQU8rZSxnQkFBQSxDQUFpQmpYLFNBQUEsQ0FBVWxILElBQUE7UUFDaERaLE1BQUE7UUFDQTZHLElBQUEsRUFBTTNQLFdBQUEsQ0FBWTRRLFNBQUEsQ0FBVWxILElBQUEsRUFBTSxLQUFLbEIsTUFBTTtNQUMvQztNQUNBLE1BQU04Z0IsV0FBQSxHQUFjMXBCLGlCQUFBLENBQTZDZ1IsU0FBQSxFQUFXLGVBQWVFLE9BQU87TUFFbEcsSUFBSSxDQUFDd1ksV0FBQSxFQUFhO1FBQ2hCLE9BQU8sRUFBQztNQUNWO01BRUEsTUFBTUMsUUFBQSxHQUFnQ0EsQ0FBQ3RTLElBQUEsRUFBTTdOLElBQUEsRUFBTXdNLE1BQUEsS0FBVztRQUM1RCxNQUFNYSxjQUFBLEdBQWlCcFcscUJBQUEsQ0FBc0I0VyxJQUFBLEVBQU0vRSxtQkFBbUI7UUFFdEUsT0FBT29YLFdBQUEsQ0FBWSxFQUFFO1VBRW5CclMsSUFBQTtVQUNBN04sSUFBQTtVQUNBd00sTUFBQTtVQUVBOU0sTUFBQTtVQUNBOEgsU0FBQTtVQUNBNkYsY0FBQTtVQUNBK1MsZ0JBQUEsRUFBbUIxVSxLQUFBLElBQStCO1lBQ2hEdFIsd0JBQUEsQ0FBeUJ5VCxJQUFBLEVBQU1uTyxNQUFBLEVBQVFnTSxLQUFLO1VBQzlDO1FBQ0YsQ0FBQztNQUNIO01BRUEsT0FBTyxDQUFDbEUsU0FBQSxDQUFVbEgsSUFBQSxFQUFNNmYsUUFBUTtJQUNsQyxDQUFDLENBQ0w7RUFDRjtFQU1RM0IsZ0JBQUEsRUFBa0I7SUFDeEIsTUFBTWhwQixVQUFBLEdBQWEsS0FBS0EsVUFBQTtJQUV4QixLQUFLa0ssTUFBQSxDQUFPK2UsZ0JBQUEsR0FBbUJ2ZSxNQUFBLENBQU9DLFdBQUEsQ0FDcEMzSyxVQUFBLENBQVc2SyxHQUFBLENBQUltSCxTQUFBLElBQWEsQ0FBQ0EsU0FBQSxDQUFVbEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVSSxPQUFPLENBQUMsQ0FDakU7SUFFQXBTLFVBQUEsQ0FBV3dNLE9BQUEsQ0FBUXdGLFNBQUEsSUFBYTtNQTlScEMsSUFBQTBFLEVBQUE7TUErUk0sTUFBTXhFLE9BQUEsR0FBVTtRQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtRQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7UUFDbkI0RCxPQUFBLEVBQVMsS0FBS2xJLE1BQUEsQ0FBTytlLGdCQUFBLENBQWlCalgsU0FBQSxDQUFVbEgsSUFBQTtRQUNoRFosTUFBQSxFQUFRLEtBQUtBLE1BQUE7UUFDYjZHLElBQUEsRUFBTW5QLG1CQUFBLENBQW9Cb1EsU0FBQSxDQUFVbEgsSUFBQSxFQUFNLEtBQUtsQixNQUFNO01BQ3ZEO01BRUEsSUFBSW9JLFNBQUEsQ0FBVWpCLElBQUEsS0FBUyxRQUFRO1FBQzdCLE1BQU0rQyxXQUFBLElBQWM0QyxFQUFBLEdBQUF2WCxZQUFBLENBQWE2QixpQkFBQSxDQUFrQmdSLFNBQUEsRUFBVyxlQUFlRSxPQUFPLENBQUMsTUFBakUsT0FBQXdFLEVBQUEsR0FBc0U7UUFFMUYsSUFBSTVDLFdBQUEsRUFBYTtVQUNmLEtBQUtpVixlQUFBLENBQWdCOWMsSUFBQSxDQUFLK0YsU0FBQSxDQUFVbEgsSUFBSTtRQUMxQztNQUNGO01BRUEsTUFBTStmLGNBQUEsR0FBaUI3cEIsaUJBQUEsQ0FBK0NnUixTQUFBLEVBQVcsa0JBQWtCRSxPQUFPO01BQzFHLE1BQU00WSxRQUFBLEdBQVc5cEIsaUJBQUEsQ0FBeUNnUixTQUFBLEVBQVcsWUFBWUUsT0FBTztNQUN4RixNQUFNNlksUUFBQSxHQUFXL3BCLGlCQUFBLENBQXlDZ1IsU0FBQSxFQUFXLFlBQVlFLE9BQU87TUFDeEYsTUFBTThZLGlCQUFBLEdBQW9CaHFCLGlCQUFBLENBQ3hCZ1IsU0FBQSxFQUNBLHFCQUNBRSxPQUNGO01BQ0EsTUFBTStZLGFBQUEsR0FBZ0JqcUIsaUJBQUEsQ0FBOENnUixTQUFBLEVBQVcsaUJBQWlCRSxPQUFPO01BQ3ZHLE1BQU1nWixPQUFBLEdBQVVscUIsaUJBQUEsQ0FBd0NnUixTQUFBLEVBQVcsV0FBV0UsT0FBTztNQUNyRixNQUFNaVosTUFBQSxHQUFTbnFCLGlCQUFBLENBQXVDZ1IsU0FBQSxFQUFXLFVBQVVFLE9BQU87TUFDbEYsTUFBTWtaLFNBQUEsR0FBWXBxQixpQkFBQSxDQUEwQ2dSLFNBQUEsRUFBVyxhQUFhRSxPQUFPO01BRTNGLElBQUkyWSxjQUFBLEVBQWdCO1FBQ2xCLEtBQUszZ0IsTUFBQSxDQUFPa0MsRUFBQSxDQUFHLGdCQUFnQnllLGNBQWM7TUFDL0M7TUFFQSxJQUFJQyxRQUFBLEVBQVU7UUFDWixLQUFLNWdCLE1BQUEsQ0FBT2tDLEVBQUEsQ0FBRyxVQUFVMGUsUUFBUTtNQUNuQztNQUVBLElBQUlDLFFBQUEsRUFBVTtRQUNaLEtBQUs3Z0IsTUFBQSxDQUFPa0MsRUFBQSxDQUFHLFVBQVUyZSxRQUFRO01BQ25DO01BRUEsSUFBSUMsaUJBQUEsRUFBbUI7UUFDckIsS0FBSzlnQixNQUFBLENBQU9rQyxFQUFBLENBQUcsbUJBQW1CNGUsaUJBQWlCO01BQ3JEO01BRUEsSUFBSUMsYUFBQSxFQUFlO1FBQ2pCLEtBQUsvZ0IsTUFBQSxDQUFPa0MsRUFBQSxDQUFHLGVBQWU2ZSxhQUFhO01BQzdDO01BRUEsSUFBSUMsT0FBQSxFQUFTO1FBQ1gsS0FBS2hoQixNQUFBLENBQU9rQyxFQUFBLENBQUcsU0FBUzhlLE9BQU87TUFDakM7TUFFQSxJQUFJQyxNQUFBLEVBQVE7UUFDVixLQUFLamhCLE1BQUEsQ0FBT2tDLEVBQUEsQ0FBRyxRQUFRK2UsTUFBTTtNQUMvQjtNQUVBLElBQUlDLFNBQUEsRUFBVztRQUNiLEtBQUtsaEIsTUFBQSxDQUFPa0MsRUFBQSxDQUFHLFdBQVdnZixTQUFTO01BQ3JDO0lBQ0YsQ0FBQztFQUNIO0FBQ0Y7QUFqVWF0QyxnQkFBQSxDQWdCSmxMLE9BQUEsR0FBVXpaLGlCQUFBO0FBaEJOMmtCLGdCQUFBLENBa0JKbFEsSUFBQSxHQUFPclUsY0FBQTtBQWxCSHVrQixnQkFBQSxDQW9CSnVDLE9BQUEsR0FBVTlxQixpQkFBQTtBcUhoRG5CLElBQUFOLGtCQUFBO0FBQUFxckIsU0FBQSxDQUFBcnJCLGtCQUFBO0VBQUFzckIsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUNXTyxJQUFNenRCLFNBQUEsR0FBTixNQUFNMHRCLFVBQUEsU0FBZ0RySCxVQUFBLENBSTNEO0VBSks1YSxZQUFBO0lBQUEsU0FBQWtiLFNBQUE7SUFLTCxLQUFBblUsSUFBQSxHQUFPO0VBQUE7RUFNUCxPQUFPc1EsT0FDTG5ZLE1BQUEsR0FBa0YsQ0FBQyxHQUNuRjtJQUVBLE1BQU1pYyxjQUFBLEdBQWlCLE9BQU9qYyxNQUFBLEtBQVcsYUFBYUEsTUFBQSxDQUFPLElBQUlBLE1BQUE7SUFDakUsT0FBTyxJQUFJK2lCLFVBQUEsQ0FBZ0I5RyxjQUFjO0VBQzNDO0VBRUFOLFVBQVVyVyxPQUFBLEVBQTRCO0lBQ3BDLE9BQU8sTUFBTXFXLFNBQUEsQ0FBVXJXLE9BQU87RUFDaEM7RUFFQXNXLE9BS0VFLGNBQUEsRUFVNkM7SUFFN0MsTUFBTUcsY0FBQSxHQUFpQixPQUFPSCxjQUFBLEtBQW1CLGFBQWFBLGNBQUEsQ0FBZSxJQUFJQSxjQUFBO0lBQ2pGLE9BQU8sTUFBTUYsTUFBQSxDQUFPSyxjQUFjO0VBQ3BDO0FBQ0Y7QXhHNUNPLElBQU1vRyx1QkFBQSxHQUEwQmh0QixTQUFBLENBQVU4aUIsTUFBQSxDQUF1QztFQUN0RnZXLElBQUEsRUFBTTtFQUVOaWEsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMeEwsY0FBQSxFQUFnQjtJQUNsQjtFQUNGO0VBRUEwUSxzQkFBQSxFQUF3QjtJQUN0QixPQUFPLENBQ0wsSUFBSTVqQixhQUFBLENBQUFvZCxNQUFBLENBQU87TUFDVDdPLEdBQUEsRUFBSyxJQUFJdk8sYUFBQSxDQUFBNmxCLFNBQUEsQ0FBVSx5QkFBeUI7TUFDNUNqaUIsS0FBQSxFQUFPO1FBQ0xraUIsdUJBQUEsRUFBeUJBLENBQUEsS0FBTTtVQUM3QixNQUFNO1lBQUVqaUI7VUFBTyxJQUFJO1VBQ25CLE1BQU07WUFBRWYsS0FBQTtZQUFPUztVQUFPLElBQUlNLE1BQUE7VUFDMUIsTUFBTTtZQUFFWixHQUFBO1lBQUtEO1VBQVUsSUFBSUYsS0FBQTtVQUMzQixNQUFNO1lBQUUyUztVQUFPLElBQUl6UyxTQUFBO1VBQ25CLE1BQU1vSSxJQUFBLEdBQU9vSSxJQUFBLENBQUsrRSxHQUFBLENBQUksR0FBRzlDLE1BQUEsQ0FBT2pSLEdBQUEsQ0FBSWdVLE1BQUEsSUFBU0EsTUFBQSxDQUFNOU0sS0FBQSxDQUFNVCxHQUFHLENBQUM7VUFDN0QsTUFBTUksRUFBQSxHQUFLbUksSUFBQSxDQUFLQyxHQUFBLENBQUksR0FBR2dDLE1BQUEsQ0FBT2pSLEdBQUEsQ0FBSWdVLE1BQUEsSUFBU0EsTUFBQSxDQUFNSixHQUFBLENBQUluTixHQUFHLENBQUM7VUFDekQsTUFBTWtJLGVBQUEsR0FBa0J0WCw0QkFBQSxDQUE2QjBILE1BQU07VUFDM0QsTUFBTTJILEtBQUEsR0FBUTtZQUFFRSxJQUFBO1lBQU1DO1VBQUc7VUFFekIsT0FBTzFQLGNBQUEsQ0FBZXNILEdBQUEsRUFBS2lJLEtBQUEsRUFBTztZQUNoQyxJQUFJLEtBQUsvQyxPQUFBLENBQVErSyxjQUFBLEtBQW1CLFNBQVk7Y0FBRUEsY0FBQSxFQUFnQixLQUFLL0ssT0FBQSxDQUFRK0s7WUFBZSxJQUFJLENBQUM7WUFDbkdDO1VBQ0YsQ0FBQztRQUNIO01BQ0Y7SUFDRixDQUFDLEVBQ0g7RUFDRjtBQUNGLENBQUM7QXlHM0NELElBQUE0UyxnQkFBQTtBQUFBZCxTQUFBLENBQUFjLGdCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBNUUsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQTZFLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUExZ0IsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQTJnQixhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBbkwsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQW9MLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBNUUsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBNkUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUNjTyxJQUFNckQsSUFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFbmlCLE1BQUE7RUFBUU07QUFBSyxNQUFNO0VBQ3BCbWxCLHFCQUFBLENBQXNCLE1BQU07SUFqQmhDLElBQUFqWixFQUFBO0lBa0JNLElBQUksQ0FBQ3hNLE1BQUEsQ0FBTzBsQixXQUFBLEVBQWE7TUFDdkI7TUFBRXBsQixJQUFBLENBQUs2TyxHQUFBLENBQW9CZ1QsSUFBQSxDQUFLO01BSWhDLENBQUEzVixFQUFBLEdBQUExSSxNQUFBLG9CQUFBQSxNQUFBLENBQVE2aEIsWUFBQSxPQUFSLGdCQUFBblosRUFBQSxDQUF3Qm9aLGVBQUE7SUFDMUI7RUFDRixDQUFDO0VBRUQsT0FBTztBQUNUO0FDUkssSUFBTXhELFlBQUEsR0FDWEEsQ0FBQ3lELFVBQUEsR0FBYSxTQUNkLENBQUM7RUFBRTFsQjtBQUFTLE1BQU07RUFDaEIsT0FBT0EsUUFBQSxDQUFTcWtCLFVBQUEsQ0FBVyxJQUFJO0lBQUVxQjtFQUFXLENBQUM7QUFDL0M7QTFHUkssSUFBTXhELFVBQUEsR0FDWEEsQ0FBQSxLQUNBLENBQUM7RUFBRXBqQixLQUFBO0VBQU9ZLEVBQUE7RUFBSXFCO0FBQVMsTUFBTTtFQUMzQixNQUFNO0lBQUUvQjtFQUFVLElBQUlVLEVBQUE7RUFDdEIsTUFBTTtJQUFFK1I7RUFBTyxJQUFJelMsU0FBQTtFQUVuQixJQUFJLENBQUMrQixRQUFBLEVBQVU7SUFDYixPQUFPO0VBQ1Q7RUFFQTBRLE1BQUEsQ0FBT3RQLE9BQUEsQ0FBUSxDQUFDO0lBQUV1RixLQUFBO0lBQU8wTTtFQUFJLE1BQU07SUFDakN0VixLQUFBLENBQU1HLEdBQUEsQ0FBSWtJLFlBQUEsQ0FBYU8sS0FBQSxDQUFNVCxHQUFBLEVBQUttTixHQUFBLENBQUluTixHQUFBLEVBQUssQ0FBQ2pFLElBQUEsRUFBTWlFLEdBQUEsS0FBUTtNQUN4RCxJQUFJakUsSUFBQSxDQUFLMEQsSUFBQSxDQUFLNkksTUFBQSxFQUFRO1FBQ3BCO01BQ0Y7TUFFQSxNQUFNO1FBQUV0USxHQUFBO1FBQUtxUztNQUFRLElBQUk1UixFQUFBO01BQ3pCLE1BQU1pbUIsV0FBQSxHQUFjMW1CLEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUWpDLE9BQUEsQ0FBUTlRLEdBQUEsQ0FBSXlHLEdBQUcsQ0FBQztNQUNoRCxNQUFNMmUsU0FBQSxHQUFZM21CLEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUWpDLE9BQUEsQ0FBUTlRLEdBQUEsQ0FBSXlHLEdBQUEsR0FBTWpFLElBQUEsQ0FBS21QLFFBQVEsQ0FBQztNQUM5RCxNQUFNNEMsU0FBQSxHQUFZNFEsV0FBQSxDQUFZRSxVQUFBLENBQVdELFNBQVM7TUFFbEQsSUFBSSxDQUFDN1EsU0FBQSxFQUFXO1FBQ2Q7TUFDRjtNQUVBLE1BQU0rUSxlQUFBLE9BQWtCN3BCLGlCQUFBLENBQUE4cEIsVUFBQSxFQUFXaFIsU0FBUztNQUU1QyxJQUFJL1IsSUFBQSxDQUFLMEQsSUFBQSxDQUFLRSxXQUFBLEVBQWE7UUFDekIsTUFBTTtVQUFFb2Y7UUFBWSxJQUFJTCxXQUFBLENBQVk3ZCxNQUFBLENBQU9tZSxjQUFBLENBQWVOLFdBQUEsQ0FBWXhYLEtBQUEsQ0FBTSxDQUFDO1FBRTdFek8sRUFBQSxDQUFHd21CLGFBQUEsQ0FBY25SLFNBQUEsQ0FBVXROLEtBQUEsRUFBT3VlLFdBQVc7TUFDL0M7TUFFQSxJQUFJRixlQUFBLElBQW1CQSxlQUFBLEtBQW9CLEdBQUc7UUFDNUNwbUIsRUFBQSxDQUFHK2pCLElBQUEsQ0FBSzFPLFNBQUEsRUFBVytRLGVBQWU7TUFDcEM7SUFDRixDQUFDO0VBQ0gsQ0FBQztFQUVELE9BQU87QUFDVDtBMkdyQ0ssSUFBTTNELE9BQUEsR0FBa0NsZ0IsRUFBQSxJQUFNckMsS0FBQSxJQUFTO0VBQzVELE9BQU9xQyxFQUFBLENBQUdyQyxLQUFLO0FBQ2pCO0ExR0xPLElBQU13aUIsbUJBQUEsR0FDWEEsQ0FBQSxLQUNBLENBQUM7RUFBRXRqQixLQUFBO0VBQU9pQztBQUFTLE1BQU07RUFDdkIsV0FBTzdFLGVBQUEsQ0FBQWttQixtQkFBQSxFQUE0QnRqQixLQUFBLEVBQU9pQyxRQUFRO0FBQ3BEO0FDQUssSUFBTXNoQixHQUFBLEdBQ1hBLENBQUM4RCxXQUFBLEVBQWFDLFNBQUEsS0FDZCxDQUFDO0VBQUV2bUIsTUFBQTtFQUFRSDtBQUFHLE1BQU07RUFDbEIsTUFBTTtJQUFFWjtFQUFNLElBQUllLE1BQUE7RUFFbEIsTUFBTXdtQixZQUFBLEdBQWV2bkIsS0FBQSxDQUFNRyxHQUFBLENBQUltRixLQUFBLENBQU0raEIsV0FBQSxDQUFZL2UsSUFBQSxFQUFNK2UsV0FBQSxDQUFZOWUsRUFBRTtFQUVyRTNILEVBQUEsQ0FBR2llLFdBQUEsQ0FBWXdJLFdBQUEsQ0FBWS9lLElBQUEsRUFBTStlLFdBQUEsQ0FBWTllLEVBQUU7RUFDL0MsTUFBTWlmLE1BQUEsR0FBUzVtQixFQUFBLENBQUc0UixPQUFBLENBQVE5USxHQUFBLENBQUk0bEIsU0FBUztFQUV2QzFtQixFQUFBLENBQUc2bUIsTUFBQSxDQUFPRCxNQUFBLEVBQVFELFlBQUEsQ0FBYW5pQixPQUFPO0VBRXRDeEUsRUFBQSxDQUFHeVksWUFBQSxDQUFhLElBQUloYyxhQUFBLENBQUF5WixhQUFBLENBQWNsVyxFQUFBLENBQUdULEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUS9ELElBQUEsQ0FBS0MsR0FBQSxDQUFJNlcsTUFBQSxHQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUUxRSxPQUFPO0FBQ1Q7QTBHckJLLElBQU1oRSxpQkFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFNWlCLEVBQUE7RUFBSXFCO0FBQVMsTUFBTTtFQUNwQixNQUFNO0lBQUUvQjtFQUFVLElBQUlVLEVBQUE7RUFDdEIsTUFBTWdVLFdBQUEsR0FBYzFVLFNBQUEsQ0FBVWdXLE9BQUEsQ0FBUWhTLElBQUEsQ0FBSztFQUczQyxJQUFJMFEsV0FBQSxDQUFZeFAsT0FBQSxDQUFRd0wsSUFBQSxHQUFPLEdBQUc7SUFDaEMsT0FBTztFQUNUO0VBRUEsTUFBTXBJLElBQUEsR0FBTzVILEVBQUEsQ0FBR1YsU0FBQSxDQUFVZ1csT0FBQTtFQUUxQixTQUFTek4sS0FBQSxHQUFRRCxJQUFBLENBQUtDLEtBQUEsRUFBT0EsS0FBQSxHQUFRLEdBQUdBLEtBQUEsSUFBUyxHQUFHO0lBQ2xELE1BQU12RSxJQUFBLEdBQU9zRSxJQUFBLENBQUt0RSxJQUFBLENBQUt1RSxLQUFLO0lBRTVCLElBQUl2RSxJQUFBLENBQUswRCxJQUFBLEtBQVNnTixXQUFBLENBQVloTixJQUFBLEVBQU07TUFDbEMsSUFBSTNGLFFBQUEsRUFBVTtRQUNaLE1BQU1xRyxJQUFBLEdBQU9FLElBQUEsQ0FBS0UsTUFBQSxDQUFPRCxLQUFLO1FBQzlCLE1BQU1GLEVBQUEsR0FBS0MsSUFBQSxDQUFLa2YsS0FBQSxDQUFNamYsS0FBSztRQUUzQjdILEVBQUEsQ0FBRyttQixNQUFBLENBQU9yZixJQUFBLEVBQU1DLEVBQUUsRUFBRXljLGNBQUEsQ0FBZTtNQUNyQztNQUVBLE9BQU87SUFDVDtFQUNGO0VBRUEsT0FBTztBQUNUO0FDekJLLElBQU12QixVQUFBLEdBQ1gzUyxVQUFBLElBQ0EsQ0FBQztFQUFFbFEsRUFBQTtFQUFJWixLQUFBO0VBQU9pQztBQUFTLE1BQU07RUFDM0IsTUFBTTJGLElBQUEsR0FBT3ZQLFdBQUEsQ0FBWXlZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTTtFQUNqRCxNQUFNK0gsSUFBQSxHQUFPNUgsRUFBQSxDQUFHVixTQUFBLENBQVVnVyxPQUFBO0VBRTFCLFNBQVN6TixLQUFBLEdBQVFELElBQUEsQ0FBS0MsS0FBQSxFQUFPQSxLQUFBLEdBQVEsR0FBR0EsS0FBQSxJQUFTLEdBQUc7SUFDbEQsTUFBTXZFLElBQUEsR0FBT3NFLElBQUEsQ0FBS3RFLElBQUEsQ0FBS3VFLEtBQUs7SUFFNUIsSUFBSXZFLElBQUEsQ0FBSzBELElBQUEsS0FBU0EsSUFBQSxFQUFNO01BQ3RCLElBQUkzRixRQUFBLEVBQVU7UUFDWixNQUFNcUcsSUFBQSxHQUFPRSxJQUFBLENBQUtFLE1BQUEsQ0FBT0QsS0FBSztRQUM5QixNQUFNRixFQUFBLEdBQUtDLElBQUEsQ0FBS2tmLEtBQUEsQ0FBTWpmLEtBQUs7UUFFM0I3SCxFQUFBLENBQUcrbUIsTUFBQSxDQUFPcmYsSUFBQSxFQUFNQyxFQUFFLEVBQUV5YyxjQUFBLENBQWU7TUFDckM7TUFFQSxPQUFPO0lBQ1Q7RUFDRjtFQUVBLE9BQU87QUFDVDtBQ3pCSyxJQUFNbkcsV0FBQSxHQUNYelcsS0FBQSxJQUNBLENBQUM7RUFBRXhILEVBQUE7RUFBSXFCO0FBQVMsTUFBTTtFQUNwQixNQUFNO0lBQUVxRyxJQUFBO0lBQU1DO0VBQUcsSUFBSUgsS0FBQTtFQUVyQixJQUFJbkcsUUFBQSxFQUFVO0lBQ1pyQixFQUFBLENBQUcrbUIsTUFBQSxDQUFPcmYsSUFBQSxFQUFNQyxFQUFFO0VBQ3BCO0VBRUEsT0FBTztBQUNUO0EzR1RLLElBQU1tYixlQUFBLEdBQ1hBLENBQUEsS0FDQSxDQUFDO0VBQUUxakIsS0FBQTtFQUFPaUM7QUFBUyxNQUFNO0VBQ3ZCLFdBQU8zRSxnQkFBQSxDQUFBb21CLGVBQUEsRUFBd0IxakIsS0FBQSxFQUFPaUMsUUFBUTtBQUNoRDtBNEdOSyxJQUFNMGhCLEtBQUEsR0FDWEEsQ0FBQSxLQUNBLENBQUM7RUFBRXppQjtBQUFTLE1BQU07RUFDaEIsT0FBT0EsUUFBQSxDQUFTd2pCLGdCQUFBLENBQWlCLE9BQU87QUFDMUM7QTNHRkssSUFBTWQsUUFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFNWpCLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixXQUFPMUUsZ0JBQUEsQ0FBQXFtQixRQUFBLEVBQWlCNWpCLEtBQUEsRUFBT2lDLFFBQVE7QUFDekM7QUNZSyxJQUFNNGhCLGVBQUEsR0FDWEEsQ0FBQy9TLFVBQUEsRUFBWTdGLFVBQUEsR0FBYSxDQUFDLE1BQzNCLENBQUM7RUFBRXJLLEVBQUE7RUFBSVosS0FBQTtFQUFPaUM7QUFBUyxNQUFNO0VBQzNCLE1BQU0yRixJQUFBLEdBQU8zUCxXQUFBLENBQVk2WSxVQUFBLEVBQVk5USxLQUFBLENBQU1TLE1BQU07RUFDakQsTUFBTTtJQUFFTixHQUFBO0lBQUtEO0VBQVUsSUFBSVUsRUFBQTtFQUMzQixNQUFNO0lBQUVnSSxLQUFBO0lBQU9OLElBQUE7SUFBTUM7RUFBRyxJQUFJckksU0FBQTtFQUU1QixJQUFJK0IsUUFBQSxFQUFVO0lBQ1osTUFBTW1HLEtBQUEsR0FBUXBRLFlBQUEsQ0FBYTRRLEtBQUEsRUFBT2hCLElBQUEsRUFBTXFELFVBQVU7SUFFbEQsSUFBSTdDLEtBQUEsSUFBU0EsS0FBQSxDQUFNRSxJQUFBLElBQVFBLElBQUEsSUFBUUYsS0FBQSxDQUFNRyxFQUFBLElBQU1BLEVBQUEsRUFBSTtNQUNqRCxNQUFNcWYsWUFBQSxHQUFlcHFCLGNBQUEsQ0FBQXNaLGFBQUEsQ0FBY29CLE1BQUEsQ0FBTy9YLEdBQUEsRUFBS2lJLEtBQUEsQ0FBTUUsSUFBQSxFQUFNRixLQUFBLENBQU1HLEVBQUU7TUFFbkUzSCxFQUFBLENBQUd5WSxZQUFBLENBQWF1TyxZQUFZO0lBQzlCO0VBQ0Y7RUFFQSxPQUFPO0FBQ1Q7QTJHbkNLLElBQU05RCxLQUFBLEdBQThCNWlCLFFBQUEsSUFBWUosS0FBQSxJQUFTO0VBQzlELE1BQU15SyxLQUFBLEdBQVEsT0FBT3JLLFFBQUEsS0FBYSxhQUFhQSxRQUFBLENBQVNKLEtBQUssSUFBSUksUUFBQTtFQUVqRSxTQUFTbUQsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWtILEtBQUEsQ0FBTWpILE1BQUEsRUFBUUQsQ0FBQSxJQUFLLEdBQUc7SUFDeEMsSUFBSWtILEtBQUEsQ0FBTWxILENBQUEsRUFBR3ZELEtBQUssR0FBRztNQUNuQixPQUFPO0lBQ1Q7RUFDRjtFQUVBLE9BQU87QUFDVDtBQ3pCTyxTQUFTM0gsVUFBQSxFQUFxQjtFQUNuQyxPQUFPMHVCLFNBQUEsQ0FBVUMsUUFBQSxLQUFhLGFBQWEsV0FBV3BqQixJQUFBLENBQUttakIsU0FBQSxDQUFVRSxTQUFTO0FBQ2hGO0FDRk8sU0FBUzN0QixNQUFBLEVBQWlCO0VBQy9CLE9BQ0UsQ0FBQyxrQkFBa0Isb0JBQW9CLGtCQUFrQixRQUFRLFVBQVUsTUFBTSxFQUFFNlIsUUFBQSxDQUFTNGIsU0FBQSxDQUFVQyxRQUFRLEtBRTdHRCxTQUFBLENBQVVFLFNBQUEsQ0FBVTliLFFBQUEsQ0FBUyxLQUFLLEtBQUssZ0JBQWdCeEMsUUFBQTtBQUU1RDtBQzRCTyxJQUFNc2EsS0FBQSxHQUNYQSxDQUFDbk0sUUFBQSxHQUFXLE1BQU12UyxPQUFBLEdBQVUsQ0FBQyxNQUM3QixDQUFDO0VBQUV0RSxNQUFBO0VBQVFNLElBQUE7RUFBTVQsRUFBQTtFQUFJcUI7QUFBUyxNQUFNO0VBQ2xDb0QsT0FBQSxHQUFVO0lBQ1IyZixjQUFBLEVBQWdCO0lBQ2hCLEdBQUczZjtFQUNMO0VBRUEsTUFBTTJpQixZQUFBLEdBQWVBLENBQUEsS0FBTTtJQUd6QixJQUFJNXRCLEtBQUEsQ0FBTSxLQUFLakIsU0FBQSxDQUFVLEdBQUc7TUFDMUI7TUFBRWtJLElBQUEsQ0FBSzZPLEdBQUEsQ0FBb0I2VCxLQUFBLENBQU07SUFDbkM7SUFJQXlDLHFCQUFBLENBQXNCLE1BQU07TUFDMUIsSUFBSSxDQUFDemxCLE1BQUEsQ0FBTzBsQixXQUFBLEVBQWE7UUFDdkJwbEIsSUFBQSxDQUFLMGlCLEtBQUEsQ0FBTTtRQUVYLElBQUkxZSxPQUFBLG9CQUFBQSxPQUFBLENBQVMyZixjQUFBLEVBQWdCO1VBQzNCamtCLE1BQUEsQ0FBT0csUUFBQSxDQUFTOGpCLGNBQUEsQ0FBZTtRQUNqQztNQUNGO0lBQ0YsQ0FBQztFQUNIO0VBRUEsSUFBSzNqQixJQUFBLENBQUs0bUIsUUFBQSxDQUFTLEtBQUtyUSxRQUFBLEtBQWEsUUFBU0EsUUFBQSxLQUFhLE9BQU87SUFDaEUsT0FBTztFQUNUO0VBR0EsSUFBSTNWLFFBQUEsSUFBWTJWLFFBQUEsS0FBYSxRQUFRLENBQUN6ZCxlQUFBLENBQWdCNEcsTUFBQSxDQUFPZixLQUFBLENBQU1FLFNBQVMsR0FBRztJQUM3RThuQixZQUFBLENBQWE7SUFDYixPQUFPO0VBQ1Q7RUFJQSxNQUFNOW5CLFNBQUEsR0FBWWpGLG9CQUFBLENBQXFCMkYsRUFBQSxDQUFHVCxHQUFBLEVBQUt5WCxRQUFRLEtBQUs3VyxNQUFBLENBQU9mLEtBQUEsQ0FBTUUsU0FBQTtFQUN6RSxNQUFNZ29CLGVBQUEsR0FBa0JubkIsTUFBQSxDQUFPZixLQUFBLENBQU1FLFNBQUEsQ0FBVWlvQixFQUFBLENBQUdqb0IsU0FBUztFQUUzRCxJQUFJK0IsUUFBQSxFQUFVO0lBQ1osSUFBSSxDQUFDaW1CLGVBQUEsRUFBaUI7TUFDcEJ0bkIsRUFBQSxDQUFHeVksWUFBQSxDQUFhblosU0FBUztJQUMzQjtJQUlBLElBQUlnb0IsZUFBQSxJQUFtQnRuQixFQUFBLENBQUdSLFdBQUEsRUFBYTtNQUNyQ1EsRUFBQSxDQUFHd25CLGNBQUEsQ0FBZXhuQixFQUFBLENBQUdSLFdBQVc7SUFDbEM7SUFFQTRuQixZQUFBLENBQWE7RUFDZjtFQUVBLE9BQU87QUFDVDtBQ3ZFSyxJQUFNM2tCLE9BQUEsR0FBa0NBLENBQUNrSSxLQUFBLEVBQU9wSSxFQUFBLEtBQU9yQyxLQUFBLElBQVM7RUFDckUsT0FBT3lLLEtBQUEsQ0FBTTNJLEtBQUEsQ0FBTSxDQUFDa0QsSUFBQSxFQUFNdUosS0FBQSxLQUFVbE0sRUFBQSxDQUFHMkMsSUFBQSxFQUFNO0lBQUUsR0FBR2hGLEtBQUE7SUFBT3VPO0VBQU0sQ0FBQyxDQUFDO0FBQ25FO0FDZ0JPLElBQU0yVSxhQUFBLEdBQ1hBLENBQUNwZixLQUFBLEVBQU9TLE9BQUEsS0FDUixDQUFDO0VBQUV6RSxFQUFBO0VBQUlNO0FBQVMsTUFBTTtFQUNwQixPQUFPQSxRQUFBLENBQVMraUIsZUFBQSxDQUFnQjtJQUFFM2IsSUFBQSxFQUFNMUgsRUFBQSxDQUFHVixTQUFBLENBQVVvSSxJQUFBO0lBQU1DLEVBQUEsRUFBSTNILEVBQUEsQ0FBR1YsU0FBQSxDQUFVcUk7RUFBRyxHQUFHM0QsS0FBQSxFQUFPUyxPQUFPO0FBQ2xHO0EvR2dCRixJQUFNZ2pCLFVBQUEsR0FBY0MsY0FBQSxJQUEyRTtFQUM3RixPQUFPLEVBQUUsVUFBVUEsY0FBQTtBQUNyQjtBQUVPLElBQU1yRSxlQUFBLEdBQ1hBLENBQUNyTSxRQUFBLEVBQVVoVCxLQUFBLEVBQU9TLE9BQUEsS0FDbEIsQ0FBQztFQUFFekUsRUFBQTtFQUFJcUIsUUFBQTtFQUFVbEI7QUFBTyxNQUFNO0VBakVoQyxJQUFBd00sRUFBQTtFQWtFSSxJQUFJdEwsUUFBQSxFQUFVO0lBQ1pvRCxPQUFBLEdBQVU7TUFDUkUsWUFBQSxFQUFjeEUsTUFBQSxDQUFPc0UsT0FBQSxDQUFRRSxZQUFBO01BQzdCZ2pCLGVBQUEsRUFBaUI7TUFDakJDLGVBQUEsRUFBaUI7TUFDakJDLGVBQUEsRUFBaUI7TUFDakIsR0FBR3BqQjtJQUNMO0lBRUEsSUFBSUQsT0FBQTtJQUNKLE1BQU07TUFBRWxGO0lBQVUsSUFBSWEsTUFBQSxDQUFPZixLQUFBO0lBRTdCLE1BQU0wb0IsZ0JBQUEsR0FBb0J4aUIsS0FBQSxJQUFpQjtNQUN6Q25GLE1BQUEsQ0FBT3FDLElBQUEsQ0FBSyxnQkFBZ0I7UUFDMUJyQyxNQUFBO1FBQ0FtRixLQUFBO1FBQ0F5aUIsb0JBQUEsRUFBc0JBLENBQUEsS0FBTTtVQUMxQixJQUNFLG1CQUFtQjVuQixNQUFBLENBQU9rSSxPQUFBLElBQzFCLE9BQU9sSSxNQUFBLENBQU9rSSxPQUFBLENBQVEyZixhQUFBLEtBQWtCLFlBQ3hDN25CLE1BQUEsQ0FBT2tJLE9BQUEsQ0FBUTJmLGFBQUEsRUFDZjtZQUNBO1lBQUU3bkIsTUFBQSxDQUFPa0ksT0FBQSxDQUFRMmYsYUFBQSxDQUFzQkMsVUFBQSxHQUFhO1VBQ3REO1FBQ0Y7TUFDRixDQUFDO0lBQ0g7SUFFQSxNQUFNdGpCLFlBQUEsR0FBNkI7TUFDakN1akIsa0JBQUEsRUFBb0I7TUFDcEIsR0FBR3pqQixPQUFBLENBQVFFO0lBQ2I7SUFJQSxJQUFJLENBQUNGLE9BQUEsQ0FBUVcscUJBQUEsSUFBeUIsQ0FBQ2pGLE1BQUEsQ0FBT3NFLE9BQUEsQ0FBUTBqQixrQkFBQSxJQUFzQmhvQixNQUFBLENBQU9zRSxPQUFBLENBQVFxakIsZ0JBQUEsRUFBa0I7TUFDM0csSUFBSTtRQUNGbnlCLHFCQUFBLENBQXNCcU8sS0FBQSxFQUFPN0QsTUFBQSxDQUFPTixNQUFBLEVBQVE7VUFDMUM4RSxZQUFBO1VBQ0FTLHFCQUFBLEVBQXVCO1FBQ3pCLENBQUM7TUFDSCxTQUFTb0IsQ0FBQSxFQUFUO1FBQ0VzaEIsZ0JBQUEsQ0FBaUJ0aEIsQ0FBVTtNQUM3QjtJQUNGO0lBRUEsSUFBSTtNQUNGaEMsT0FBQSxHQUFVN08scUJBQUEsQ0FBc0JxTyxLQUFBLEVBQU83RCxNQUFBLENBQU9OLE1BQUEsRUFBUTtRQUNwRDhFLFlBQUE7UUFDQVMscUJBQUEsR0FBdUJ1SCxFQUFBLEdBQUFsSSxPQUFBLENBQVFXLHFCQUFBLEtBQVIsT0FBQXVILEVBQUEsR0FBaUN4TSxNQUFBLENBQU9zRSxPQUFBLENBQVEwakI7TUFDekUsQ0FBQztJQUNILFNBQVMzaEIsQ0FBQSxFQUFUO01BQ0VzaEIsZ0JBQUEsQ0FBaUJ0aEIsQ0FBVTtNQUMzQixPQUFPO0lBQ1Q7SUFFQSxJQUFJO01BQUVrQixJQUFBO01BQU1DO0lBQUcsSUFDYixPQUFPcVAsUUFBQSxLQUFhLFdBQVc7TUFBRXRQLElBQUEsRUFBTXNQLFFBQUE7TUFBVXJQLEVBQUEsRUFBSXFQO0lBQVMsSUFBSTtNQUFFdFAsSUFBQSxFQUFNc1AsUUFBQSxDQUFTdFAsSUFBQTtNQUFNQyxFQUFBLEVBQUlxUCxRQUFBLENBQVNyUDtJQUFHO0lBRTNHLElBQUl5Z0IsaUJBQUEsR0FBb0I7SUFDeEIsSUFBSUMsa0JBQUEsR0FBcUI7SUFDekIsTUFBTXBpQixLQUFBLEdBQVF3aEIsVUFBQSxDQUFXampCLE9BQU8sSUFBSUEsT0FBQSxHQUFVLENBQUNBLE9BQU87SUFFdER5QixLQUFBLENBQU14RCxPQUFBLENBQVFhLElBQUEsSUFBUTtNQUVwQkEsSUFBQSxDQUFLK0IsS0FBQSxDQUFNO01BRVgraUIsaUJBQUEsR0FBb0JBLGlCQUFBLEdBQW9COWtCLElBQUEsQ0FBS3VNLE1BQUEsSUFBVXZNLElBQUEsQ0FBSzBDLEtBQUEsQ0FBTXRDLE1BQUEsS0FBVyxJQUFJO01BRWpGMmtCLGtCQUFBLEdBQXFCQSxrQkFBQSxHQUFxQi9rQixJQUFBLENBQUtxTSxPQUFBLEdBQVU7SUFDM0QsQ0FBQztJQU9ELElBQUlqSSxJQUFBLEtBQVNDLEVBQUEsSUFBTTBnQixrQkFBQSxFQUFvQjtNQUNyQyxNQUFNO1FBQUVqZ0I7TUFBTyxJQUFJcEksRUFBQSxDQUFHVCxHQUFBLENBQUlzVSxPQUFBLENBQVFuTSxJQUFJO01BQ3RDLE1BQU00Z0IsZ0JBQUEsR0FBbUJsZ0IsTUFBQSxDQUFPbEIsV0FBQSxJQUFlLENBQUNrQixNQUFBLENBQU9wQixJQUFBLENBQUtqQixJQUFBLENBQUtzSCxJQUFBLElBQVEsQ0FBQ2pGLE1BQUEsQ0FBT3dLLFVBQUE7TUFFakYsSUFBSTBWLGdCQUFBLEVBQWtCO1FBQ3BCNWdCLElBQUEsSUFBUTtRQUNSQyxFQUFBLElBQU07TUFDUjtJQUNGO0lBRUEsSUFBSTRnQixVQUFBO0lBSUosSUFBSUgsaUJBQUEsRUFBbUI7TUFHckIsSUFBSXJqQixLQUFBLENBQU1DLE9BQUEsQ0FBUWhCLEtBQUssR0FBRztRQUN4QnVrQixVQUFBLEdBQWF2a0IsS0FBQSxDQUFNbEQsR0FBQSxDQUFJMG5CLENBQUEsSUFBS0EsQ0FBQSxDQUFFOVksSUFBQSxJQUFRLEVBQUUsRUFBRXBFLElBQUEsQ0FBSyxFQUFFO01BQ25ELFdBQVd0SCxLQUFBLFlBQWlCbkgsYUFBQSxDQUFBcEksUUFBQSxFQUFVO1FBQ3BDLElBQUlpYixJQUFBLEdBQU87UUFFWDFMLEtBQUEsQ0FBTXZCLE9BQUEsQ0FBUWEsSUFBQSxJQUFRO1VBQ3BCLElBQUlBLElBQUEsQ0FBS29NLElBQUEsRUFBTTtZQUNiQSxJQUFBLElBQVFwTSxJQUFBLENBQUtvTSxJQUFBO1VBQ2Y7UUFDRixDQUFDO1FBRUQ2WSxVQUFBLEdBQWE3WSxJQUFBO01BQ2YsV0FBVyxPQUFPMUwsS0FBQSxLQUFVLFlBQVksQ0FBQyxDQUFDQSxLQUFBLElBQVMsQ0FBQyxDQUFDQSxLQUFBLENBQU0wTCxJQUFBLEVBQU07UUFDL0Q2WSxVQUFBLEdBQWF2a0IsS0FBQSxDQUFNMEwsSUFBQTtNQUNyQixPQUFPO1FBQ0w2WSxVQUFBLEdBQWF2a0IsS0FBQTtNQUNmO01BRUFoRSxFQUFBLENBQUc2YixVQUFBLENBQVcwTSxVQUFBLEVBQVk3Z0IsSUFBQSxFQUFNQyxFQUFFO0lBQ3BDLE9BQU87TUFDTDRnQixVQUFBLEdBQWEvakIsT0FBQTtNQUViLE1BQU1pa0Isb0JBQUEsR0FBdUJucEIsU0FBQSxDQUFVMEksS0FBQSxDQUFNc0wsWUFBQSxLQUFpQjtNQUM5RCxNQUFNb1YsZ0JBQUEsR0FBa0JwcEIsU0FBQSxDQUFVMEksS0FBQSxDQUFNMUUsSUFBQSxDQUFLLEVBQUV1TSxNQUFBLElBQVV2USxTQUFBLENBQVUwSSxLQUFBLENBQU0xRSxJQUFBLENBQUssRUFBRTRELFdBQUE7TUFDaEYsTUFBTXloQixVQUFBLEdBQWFycEIsU0FBQSxDQUFVMEksS0FBQSxDQUFNMUUsSUFBQSxDQUFLLEVBQUVrQixPQUFBLENBQVF3TCxJQUFBLEdBQU87TUFFekQsSUFBSXlZLG9CQUFBLElBQXdCQyxnQkFBQSxJQUFtQkMsVUFBQSxFQUFZO1FBQ3pEamhCLElBQUEsR0FBT29JLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUdySSxJQUFBLEdBQU8sQ0FBQztNQUM3QjtNQUVBMUgsRUFBQSxDQUFHaVosV0FBQSxDQUFZdlIsSUFBQSxFQUFNQyxFQUFBLEVBQUk0Z0IsVUFBVTtJQUNyQztJQUdBLElBQUk5akIsT0FBQSxDQUFRa2pCLGVBQUEsRUFBaUI7TUFDM0JwdEIsdUJBQUEsQ0FBd0J5RixFQUFBLEVBQUlBLEVBQUEsQ0FBR21ELEtBQUEsQ0FBTU8sTUFBQSxHQUFTLEdBQUcsRUFBRTtJQUNyRDtJQUVBLElBQUllLE9BQUEsQ0FBUW1qQixlQUFBLEVBQWlCO01BQzNCNW5CLEVBQUEsQ0FBR3laLE9BQUEsQ0FBUSxtQkFBbUI7UUFBRS9SLElBQUE7UUFBTWdJLElBQUEsRUFBTTZZO01BQVcsQ0FBQztJQUMxRDtJQUVBLElBQUk5akIsT0FBQSxDQUFRb2pCLGVBQUEsRUFBaUI7TUFDM0I3bkIsRUFBQSxDQUFHeVosT0FBQSxDQUFRLG1CQUFtQjtRQUFFL1IsSUFBQTtRQUFNZ0ksSUFBQSxFQUFNNlk7TUFBVyxDQUFDO0lBQzFEO0VBQ0Y7RUFFQSxPQUFPO0FBQ1Q7QUNsS0ssSUFBTTFFLE1BQUEsR0FDWEEsQ0FBQSxLQUNBLENBQUM7RUFBRXprQixLQUFBO0VBQU9pQztBQUFTLE1BQU07RUFDdkIsV0FBT3ZFLGdCQUFBLENBQUErbUIsTUFBQSxFQUFlemtCLEtBQUEsRUFBT2lDLFFBQVE7QUFDdkM7QUFFSyxJQUFNa2lCLFFBQUEsR0FDWEEsQ0FBQSxLQUNBLENBQUM7RUFBRW5rQixLQUFBO0VBQU9pQztBQUFTLE1BQU07RUFDdkIsV0FBT3ZFLGdCQUFBLENBQUF5bUIsUUFBQSxFQUFpQm5rQixLQUFBLEVBQU9pQyxRQUFRO0FBQ3pDO0FBRUssSUFBTWlpQixZQUFBLEdBQ1hBLENBQUEsS0FDQSxDQUFDO0VBQUVsa0IsS0FBQTtFQUFPaUM7QUFBUyxNQUFNO0VBQ3ZCLFdBQU92RSxnQkFBQSxDQUFBd21CLFlBQUEsRUFBcUJsa0IsS0FBQSxFQUFPaUMsUUFBUTtBQUM3QztBQUVLLElBQU1taUIsV0FBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFcGtCLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixXQUFPdkUsZ0JBQUEsQ0FBQTBtQixXQUFBLEVBQW9CcGtCLEtBQUEsRUFBT2lDLFFBQVE7QUFDNUM7QUNwREssSUFBTW9pQixnQkFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFcmtCLEtBQUE7RUFBT2lDLFFBQUE7RUFBVXJCO0FBQUcsTUFBTTtFQUMzQixJQUFJO0lBQ0YsTUFBTTRvQixLQUFBLE9BQVE3ckIsaUJBQUEsQ0FBQThyQixTQUFBLEVBQVV6cEIsS0FBQSxDQUFNRyxHQUFBLEVBQUtILEtBQUEsQ0FBTUUsU0FBQSxDQUFVMEksS0FBQSxDQUFNVCxHQUFBLEVBQUssRUFBRTtJQUVoRSxJQUFJcWhCLEtBQUEsS0FBVSxRQUFRQSxLQUFBLEtBQVUsUUFBVztNQUN6QyxPQUFPO0lBQ1Q7SUFFQTVvQixFQUFBLENBQUdzTCxJQUFBLENBQUtzZCxLQUFBLEVBQU8sQ0FBQztJQUVoQixJQUFJdm5CLFFBQUEsRUFBVTtNQUNaQSxRQUFBLENBQVNyQixFQUFFO0lBQ2I7SUFFQSxPQUFPO0VBQ1Q7SUFDRSxPQUFPO0VBQ1Q7QUFDRjtBQ3BCSyxJQUFNMGpCLGVBQUEsR0FDWEEsQ0FBQSxLQUNBLENBQUM7RUFBRXRrQixLQUFBO0VBQU9pQyxRQUFBO0VBQVVyQjtBQUFHLE1BQU07RUFDM0IsSUFBSTtJQUNGLE1BQU00b0IsS0FBQSxPQUFRNXJCLGlCQUFBLENBQUE2ckIsU0FBQSxFQUFVenBCLEtBQUEsQ0FBTUcsR0FBQSxFQUFLSCxLQUFBLENBQU1FLFNBQUEsQ0FBVTBJLEtBQUEsQ0FBTVQsR0FBQSxFQUFLLENBQUU7SUFFaEUsSUFBSXFoQixLQUFBLEtBQVUsUUFBUUEsS0FBQSxLQUFVLFFBQVc7TUFDekMsT0FBTztJQUNUO0lBRUE1b0IsRUFBQSxDQUFHc0wsSUFBQSxDQUFLc2QsS0FBQSxFQUFPLENBQUM7SUFFaEIsSUFBSXZuQixRQUFBLEVBQVU7TUFDWkEsUUFBQSxDQUFTckIsRUFBRTtJQUNiO0lBRUEsT0FBTztFQUNUO0lBQ0UsT0FBTztFQUNUO0FBQ0Y7QUNyQkssSUFBTTJqQixxQkFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFdmtCLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixXQUFPcEUsZ0JBQUEsQ0FBQTBtQixxQkFBQSxFQUFnQnZrQixLQUFBLEVBQU9pQyxRQUFRO0FBQ3hDO0FDSkssSUFBTXVpQixvQkFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFeGtCLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixXQUFPbkUsZ0JBQUEsQ0FBQTBtQixvQkFBQSxFQUFnQnhrQixLQUFBLEVBQU9pQyxRQUFRO0FBQ3hDO0EyR25CSyxTQUFTdkksUUFBQSxFQUFtQjtFQUNqQyxPQUFPLE9BQU9tdUIsU0FBQSxLQUFjLGNBQWMsTUFBTW5qQixJQUFBLENBQUttakIsU0FBQSxDQUFVQyxRQUFRLElBQUk7QUFDN0U7QUNFQSxTQUFTNEIsaUJBQWlCL25CLElBQUEsRUFBYztFQUN0QyxNQUFNZ29CLEtBQUEsR0FBUWhvQixJQUFBLENBQUtrSyxLQUFBLENBQU0sUUFBUTtFQUNqQyxJQUFJOE4sTUFBQSxHQUFTZ1EsS0FBQSxDQUFNQSxLQUFBLENBQU1ybEIsTUFBQSxHQUFTO0VBRWxDLElBQUlxVixNQUFBLEtBQVcsU0FBUztJQUN0QkEsTUFBQSxHQUFTO0VBQ1g7RUFFQSxJQUFJaVEsR0FBQTtFQUNKLElBQUlDLElBQUE7RUFDSixJQUFJQyxLQUFBO0VBQ0osSUFBSUMsSUFBQTtFQUVKLFNBQVMxbEIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXNsQixLQUFBLENBQU1ybEIsTUFBQSxHQUFTLEdBQUdELENBQUEsSUFBSyxHQUFHO0lBQzVDLE1BQU0ybEIsR0FBQSxHQUFNTCxLQUFBLENBQU10bEIsQ0FBQTtJQUVsQixJQUFJLGtCQUFrQkssSUFBQSxDQUFLc2xCLEdBQUcsR0FBRztNQUMvQkQsSUFBQSxHQUFPO0lBQ1QsV0FBVyxZQUFZcmxCLElBQUEsQ0FBS3NsQixHQUFHLEdBQUc7TUFDaENKLEdBQUEsR0FBTTtJQUNSLFdBQVcsc0JBQXNCbGxCLElBQUEsQ0FBS3NsQixHQUFHLEdBQUc7TUFDMUNILElBQUEsR0FBTztJQUNULFdBQVcsY0FBY25sQixJQUFBLENBQUtzbEIsR0FBRyxHQUFHO01BQ2xDRixLQUFBLEdBQVE7SUFDVixXQUFXLFNBQVNwbEIsSUFBQSxDQUFLc2xCLEdBQUcsR0FBRztNQUM3QixJQUFJNXZCLEtBQUEsQ0FBTSxLQUFLVixPQUFBLENBQVEsR0FBRztRQUN4QnF3QixJQUFBLEdBQU87TUFDVCxPQUFPO1FBQ0xGLElBQUEsR0FBTztNQUNUO0lBQ0YsT0FBTztNQUNMLE1BQU0sSUFBSS9rQixLQUFBLENBQU0sK0JBQStCa2xCLEdBQUEsRUFBSztJQUN0RDtFQUNGO0VBRUEsSUFBSUosR0FBQSxFQUFLO0lBQ1BqUSxNQUFBLEdBQVMsT0FBT0EsTUFBQTtFQUNsQjtFQUVBLElBQUlrUSxJQUFBLEVBQU07SUFDUmxRLE1BQUEsR0FBUyxRQUFRQSxNQUFBO0VBQ25CO0VBRUEsSUFBSW9RLElBQUEsRUFBTTtJQUNScFEsTUFBQSxHQUFTLFFBQVFBLE1BQUE7RUFDbkI7RUFFQSxJQUFJbVEsS0FBQSxFQUFPO0lBQ1RuUSxNQUFBLEdBQVMsU0FBU0EsTUFBQTtFQUNwQjtFQUVBLE9BQU9BLE1BQUE7QUFDVDtBQWVPLElBQU0rSyxnQkFBQSxHQUNYL2lCLElBQUEsSUFDQSxDQUFDO0VBQUVaLE1BQUE7RUFBUU0sSUFBQTtFQUFNVCxFQUFBO0VBQUlxQjtBQUFTLE1BQU07RUFDbEMsTUFBTThILElBQUEsR0FBTzJmLGdCQUFBLENBQWlCL25CLElBQUksRUFBRWtLLEtBQUEsQ0FBTSxRQUFRO0VBQ2xELE1BQU1KLEdBQUEsR0FBTTFCLElBQUEsQ0FBSzBELElBQUEsQ0FBSzNILElBQUEsSUFBUSxDQUFDLENBQUMsT0FBTyxRQUFRLFFBQVEsT0FBTyxFQUFFbUcsUUFBQSxDQUFTbkcsSUFBSSxDQUFDO0VBQzlFLE1BQU01QyxLQUFBLEdBQVEsSUFBSSttQixhQUFBLENBQWMsV0FBVztJQUN6Q3hlLEdBQUEsRUFBS0EsR0FBQSxLQUFRLFVBQVUsTUFBTUEsR0FBQTtJQUM3QnllLE1BQUEsRUFBUW5nQixJQUFBLENBQUtrQyxRQUFBLENBQVMsS0FBSztJQUMzQmtlLE9BQUEsRUFBU3BnQixJQUFBLENBQUtrQyxRQUFBLENBQVMsTUFBTTtJQUM3Qm1lLE9BQUEsRUFBU3JnQixJQUFBLENBQUtrQyxRQUFBLENBQVMsTUFBTTtJQUM3Qm9lLFFBQUEsRUFBVXRnQixJQUFBLENBQUtrQyxRQUFBLENBQVMsT0FBTztJQUMvQnFlLE9BQUEsRUFBUztJQUNUQyxVQUFBLEVBQVk7RUFDZCxDQUFDO0VBRUQsTUFBTUMsbUJBQUEsR0FBc0J6cEIsTUFBQSxDQUFPMHBCLGtCQUFBLENBQW1CLE1BQU07SUFDMURwcEIsSUFBQSxDQUFLcXBCLFFBQUEsQ0FBUyxpQkFBaUJDLENBQUEsSUFBS0EsQ0FBQSxDQUFFdHBCLElBQUEsRUFBTTZCLEtBQUssQ0FBQztFQUNwRCxDQUFDO0VBRURzbkIsbUJBQUEsb0JBQUFBLG1CQUFBLENBQXFCem1CLEtBQUEsQ0FBTVYsT0FBQSxDQUFRVyxJQUFBLElBQVE7SUFDekMsTUFBTTRtQixPQUFBLEdBQVU1bUIsSUFBQSxDQUFLdEMsR0FBQSxDQUFJZCxFQUFBLENBQUc0UixPQUFPO0lBRW5DLElBQUlvWSxPQUFBLElBQVczb0IsUUFBQSxFQUFVO01BQ3ZCckIsRUFBQSxDQUFHaXFCLFNBQUEsQ0FBVUQsT0FBTztJQUN0QjtFQUNGO0VBRUEsT0FBTztBQUNUO0EzRzdFSyxJQUFNakcsSUFBQSxHQUNYQSxDQUFDN1QsVUFBQSxFQUFZN0YsVUFBQSxHQUFhLENBQUMsTUFDM0IsQ0FBQztFQUFFakwsS0FBQTtFQUFPaUM7QUFBUyxNQUFNO0VBQ3ZCLE1BQU0yRixJQUFBLEdBQU92UCxXQUFBLENBQVl5WSxVQUFBLEVBQVk5USxLQUFBLENBQU1TLE1BQU07RUFDakQsTUFBTXFxQixTQUFBLEdBQVdseEIsWUFBQSxDQUFhb0csS0FBQSxFQUFPNEgsSUFBQSxFQUFNcUQsVUFBVTtFQUVyRCxJQUFJLENBQUM2ZixTQUFBLEVBQVU7SUFDYixPQUFPO0VBQ1Q7RUFFQSxXQUFPL3NCLGdCQUFBLENBQUE0bUIsSUFBQSxFQUFhM2tCLEtBQUEsRUFBT2lDLFFBQVE7QUFDckM7QUNqQkssSUFBTTJpQixjQUFBLEdBQ1hBLENBQUEsS0FDQSxDQUFDO0VBQUU1a0IsS0FBQTtFQUFPaUM7QUFBUyxNQUFNO0VBQ3ZCLFdBQU9qRSxnQkFBQSxDQUFBNG1CLGNBQUEsRUFBdUI1a0IsS0FBQSxFQUFPaUMsUUFBUTtBQUMvQztBQ0RLLElBQU00aUIsWUFBQSxHQUNYL1QsVUFBQSxJQUNBLENBQUM7RUFBRTlRLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixNQUFNMkYsSUFBQSxHQUFPdlAsV0FBQSxDQUFZeVksVUFBQSxFQUFZOVEsS0FBQSxDQUFNUyxNQUFNO0VBRWpELFdBQU94QyxrQkFBQSxDQUFBNG1CLFlBQUEsRUFBcUJqZCxJQUFJLEVBQUU1SCxLQUFBLEVBQU9pQyxRQUFRO0FBQ25EO0FDVEssSUFBTTZpQixhQUFBLEdBQ1hBLENBQUEsS0FDQSxDQUFDO0VBQUU5a0IsS0FBQTtFQUFPaUM7QUFBUyxNQUFNO0VBQ3ZCLFdBQU8vRCxnQkFBQSxDQUFBNG1CLGFBQUEsRUFBc0I5a0IsS0FBQSxFQUFPaUMsUUFBUTtBQUM5QztBeUdmSyxTQUFTdkwsWUFBWXEwQixHQUFBLEVBQTBCQyxXQUFBLEVBQXFEO0VBQ3pHLE1BQU1scUIsS0FBQSxHQUFRLE9BQU9rcUIsV0FBQSxLQUFnQixXQUFXLENBQUNBLFdBQVcsSUFBSUEsV0FBQTtFQUVoRSxPQUFPenBCLE1BQUEsQ0FBT3dJLElBQUEsQ0FBS2doQixHQUFHLEVBQUV6ZixNQUFBLENBQU8sQ0FBQzJmLE1BQUEsRUFBNkJDLElBQUEsS0FBUztJQUNwRSxJQUFJLENBQUNwcUIsS0FBQSxDQUFNbUwsUUFBQSxDQUFTaWYsSUFBSSxHQUFHO01BQ3pCRCxNQUFBLENBQU9DLElBQUEsSUFBUUgsR0FBQSxDQUFJRyxJQUFBO0lBQ3JCO0lBRUEsT0FBT0QsTUFBQTtFQUNULEdBQUcsQ0FBQyxDQUFDO0FBQ1A7QUNPTyxJQUFNbEcsZUFBQSxHQUNYQSxDQUFDalUsVUFBQSxFQUFZN0YsVUFBQSxLQUNiLENBQUM7RUFBRXJLLEVBQUE7RUFBSVosS0FBQTtFQUFPaUM7QUFBUyxNQUFNO0VBQzNCLElBQUl1QyxRQUFBLEdBQTRCO0VBQ2hDLElBQUkybUIsUUFBQSxHQUE0QjtFQUVoQyxNQUFNOVosVUFBQSxHQUFhM1ksdUJBQUEsQ0FDakIsT0FBT29ZLFVBQUEsS0FBZSxXQUFXQSxVQUFBLEdBQWFBLFVBQUEsQ0FBV25QLElBQUEsRUFDekQzQixLQUFBLENBQU1TLE1BQ1I7RUFFQSxJQUFJLENBQUM0USxVQUFBLEVBQVk7SUFDZixPQUFPO0VBQ1Q7RUFFQSxJQUFJQSxVQUFBLEtBQWUsUUFBUTtJQUN6QjdNLFFBQUEsR0FBV25NLFdBQUEsQ0FBWXlZLFVBQUEsRUFBd0I5USxLQUFBLENBQU1TLE1BQU07RUFDN0Q7RUFFQSxJQUFJNFEsVUFBQSxLQUFlLFFBQVE7SUFDekI4WixRQUFBLEdBQVdsekIsV0FBQSxDQUFZNlksVUFBQSxFQUF3QjlRLEtBQUEsQ0FBTVMsTUFBTTtFQUM3RDtFQUVBLElBQUl3QixRQUFBLEVBQVU7SUFDWnJCLEVBQUEsQ0FBR1YsU0FBQSxDQUFVeVMsTUFBQSxDQUFPdFAsT0FBQSxDQUFRK0UsS0FBQSxJQUFTO01BQ25DcEksS0FBQSxDQUFNRyxHQUFBLENBQUlrSSxZQUFBLENBQWFELEtBQUEsQ0FBTVEsS0FBQSxDQUFNVCxHQUFBLEVBQUtDLEtBQUEsQ0FBTWtOLEdBQUEsQ0FBSW5OLEdBQUEsRUFBSyxDQUFDakUsSUFBQSxFQUFNaUUsR0FBQSxLQUFRO1FBQ3BFLElBQUkzRCxRQUFBLElBQVlBLFFBQUEsS0FBYU4sSUFBQSxDQUFLMEQsSUFBQSxFQUFNO1VBQ3RDaEgsRUFBQSxDQUFHd21CLGFBQUEsQ0FBY2pmLEdBQUEsRUFBSyxRQUFXelIsV0FBQSxDQUFZd04sSUFBQSxDQUFLNkksS0FBQSxFQUFPOUIsVUFBVSxDQUFDO1FBQ3RFO1FBRUEsSUFBSWtnQixRQUFBLElBQVlqbkIsSUFBQSxDQUFLMEMsS0FBQSxDQUFNdEMsTUFBQSxFQUFRO1VBQ2pDSixJQUFBLENBQUswQyxLQUFBLENBQU12RCxPQUFBLENBQVE2TCxJQUFBLElBQVE7WUFDekIsSUFBSWljLFFBQUEsS0FBYWpjLElBQUEsQ0FBS3RILElBQUEsRUFBTTtjQUMxQmhILEVBQUEsQ0FBR3dxQixPQUFBLENBQVFqakIsR0FBQSxFQUFLQSxHQUFBLEdBQU1qRSxJQUFBLENBQUttUCxRQUFBLEVBQVU4WCxRQUFBLENBQVNqVCxNQUFBLENBQU94aEIsV0FBQSxDQUFZd1ksSUFBQSxDQUFLbkMsS0FBQSxFQUFPOUIsVUFBVSxDQUFDLENBQUM7WUFDM0Y7VUFDRixDQUFDO1FBQ0g7TUFDRixDQUFDO0lBQ0gsQ0FBQztFQUNIO0VBRUEsT0FBTztBQUNUO0FDbERLLElBQU0rWixjQUFBLEdBQ1hBLENBQUEsS0FDQSxDQUFDO0VBQUVwa0IsRUFBQTtFQUFJcUI7QUFBUyxNQUFNO0VBQ3BCLElBQUlBLFFBQUEsRUFBVTtJQUNackIsRUFBQSxDQUFHb2tCLGNBQUEsQ0FBZTtFQUNwQjtFQUVBLE9BQU87QUFDVDtBMUdOSyxJQUFNQyxTQUFBLEdBQ1hBLENBQUEsS0FDQSxDQUFDO0VBQUVya0IsRUFBQTtFQUFJcUI7QUFBUyxNQUFNO0VBQ3BCLElBQUlBLFFBQUEsRUFBVTtJQUNaLE1BQU0vQixTQUFBLEdBQVksSUFBSS9CLGNBQUEsQ0FBQWt0QixZQUFBLENBQWF6cUIsRUFBQSxDQUFHVCxHQUFHO0lBRXpDUyxFQUFBLENBQUd5WSxZQUFBLENBQWFuWixTQUFTO0VBQzNCO0VBRUEsT0FBTztBQUNUO0FDVkssSUFBTWdsQixrQkFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFbGxCLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixXQUFPN0QsaUJBQUEsQ0FBQThtQixrQkFBQSxFQUEyQmxsQixLQUFBLEVBQU9pQyxRQUFRO0FBQ25EO0FDSkssSUFBTWtqQixpQkFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFbmxCLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixXQUFPNUQsaUJBQUEsQ0FBQThtQixpQkFBQSxFQUEwQm5sQixLQUFBLEVBQU9pQyxRQUFRO0FBQ2xEO0FDSkssSUFBTW1qQixnQkFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFcGxCLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixXQUFPM0QsaUJBQUEsQ0FBQThtQixnQkFBQSxFQUF5QnBsQixLQUFBLEVBQU9pQyxRQUFRO0FBQ2pEO0FDRkssSUFBTW9qQixrQkFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFcmxCLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixXQUFPMUQsaUJBQUEsQ0FBQThtQixrQkFBQSxFQUEyQnJsQixLQUFBLEVBQU9pQyxRQUFRO0FBQ25EO0FDSkssSUFBTXFqQixvQkFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFdGxCLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUN2QixXQUFPekQsaUJBQUEsQ0FBQThtQixvQkFBQSxFQUE2QnRsQixLQUFBLEVBQU9pQyxRQUFRO0FBQ3JEO0FzR3lCSyxJQUFNc2pCLFVBQUEsR0FDWEEsQ0FBQ25nQixPQUFBLEVBQVM7RUFBRVkscUJBQUE7RUFBdUI0Z0IsVUFBQSxHQUFhO0VBQU1yaEIsWUFBQSxHQUFlLENBQUM7QUFBRSxJQUFJLENBQUMsTUFDN0UsQ0FBQztFQUFFeEUsTUFBQTtFQUFRSCxFQUFBO0VBQUlxQixRQUFBO0VBQVVmO0FBQVMsTUFBTTtFQUN0QyxNQUFNO0lBQUVmO0VBQUksSUFBSVMsRUFBQTtFQUloQixJQUFJMkUsWUFBQSxDQUFhdWpCLGtCQUFBLEtBQXVCLFFBQVE7SUFDOUMsTUFBTXdDLFNBQUEsR0FBV2wxQixjQUFBLENBQWVnUCxPQUFBLEVBQVNyRSxNQUFBLENBQU9OLE1BQUEsRUFBUThFLFlBQUEsRUFBYztNQUNwRVMscUJBQUEsRUFBdUJBLHFCQUFBLFdBQUFBLHFCQUFBLEdBQXlCakYsTUFBQSxDQUFPc0UsT0FBQSxDQUFRMGpCO0lBQ2pFLENBQUM7SUFFRCxJQUFJOW1CLFFBQUEsRUFBVTtNQUNackIsRUFBQSxDQUFHaVosV0FBQSxDQUFZLEdBQUcxWixHQUFBLENBQUlpRixPQUFBLENBQVF3TCxJQUFBLEVBQU0wYSxTQUFRLEVBQUVqUixPQUFBLENBQVEsaUJBQWlCLENBQUN1TSxVQUFVO0lBQ3BGO0lBQ0EsT0FBTztFQUNUO0VBRUEsSUFBSTNrQixRQUFBLEVBQVU7SUFDWnJCLEVBQUEsQ0FBR3laLE9BQUEsQ0FBUSxpQkFBaUIsQ0FBQ3VNLFVBQVU7RUFDekM7RUFFQSxPQUFPMWxCLFFBQUEsQ0FBUytpQixlQUFBLENBQWdCO0lBQUUzYixJQUFBLEVBQU07SUFBR0MsRUFBQSxFQUFJcEksR0FBQSxDQUFJaUYsT0FBQSxDQUFRd0w7RUFBSyxHQUFHeEwsT0FBQSxFQUFTO0lBQzFFRyxZQUFBO0lBQ0FTLHFCQUFBLEVBQXVCQSxxQkFBQSxXQUFBQSxxQkFBQSxHQUF5QmpGLE1BQUEsQ0FBT3NFLE9BQUEsQ0FBUTBqQjtFQUNqRSxDQUFDO0FBQ0g7QUNwREYsU0FBU3dDLFdBQVd2ckIsS0FBQSxFQUFvQlksRUFBQSxFQUFpQjRxQixXQUFBLEVBQXVCO0VBckJoRixJQUFBamUsRUFBQTtFQXNCRSxNQUFNO0lBQUVyTjtFQUFVLElBQUlVLEVBQUE7RUFDdEIsSUFBSTZxQixNQUFBLEdBQTZCO0VBRWpDLElBQUl0eEIsZUFBQSxDQUFnQitGLFNBQVMsR0FBRztJQUM5QnVyQixNQUFBLEdBQVN2ckIsU0FBQSxDQUFVZ2IsT0FBQTtFQUNyQjtFQUVBLElBQUl1USxNQUFBLEVBQVE7SUFDVixNQUFNclAsWUFBQSxJQUFlN08sRUFBQSxHQUFBdk4sS0FBQSxDQUFNSSxXQUFBLEtBQU4sT0FBQW1OLEVBQUEsR0FBcUJrZSxNQUFBLENBQU83a0IsS0FBQSxDQUFNO0lBR3ZELE9BQU8sQ0FBQyxDQUFDNGtCLFdBQUEsQ0FBWUUsT0FBQSxDQUFRdFAsWUFBWSxLQUFLLENBQUNBLFlBQUEsQ0FBYWhLLElBQUEsQ0FBS2xELElBQUEsSUFBUUEsSUFBQSxDQUFLdEgsSUFBQSxDQUFLb0gsUUFBQSxDQUFTd2MsV0FBVyxDQUFDO0VBQzFHO0VBRUEsTUFBTTtJQUFFN1k7RUFBTyxJQUFJelMsU0FBQTtFQUVuQixPQUFPeVMsTUFBQSxDQUFPUCxJQUFBLENBQUssQ0FBQztJQUFFeEosS0FBQTtJQUFPME07RUFBSSxNQUFNO0lBQ3JDLElBQUlxVyxvQkFBQSxHQUNGL2lCLEtBQUEsQ0FBTUgsS0FBQSxLQUFVLElBQUl6SSxLQUFBLENBQU1HLEdBQUEsQ0FBSXlyQixhQUFBLElBQWlCNXJCLEtBQUEsQ0FBTUcsR0FBQSxDQUFJeUgsSUFBQSxDQUFLaWtCLGNBQUEsQ0FBZUwsV0FBVyxJQUFJO0lBRTlGeHJCLEtBQUEsQ0FBTUcsR0FBQSxDQUFJa0ksWUFBQSxDQUFhTyxLQUFBLENBQU1ULEdBQUEsRUFBS21OLEdBQUEsQ0FBSW5OLEdBQUEsRUFBSyxDQUFDakUsSUFBQSxFQUFNNG5CLElBQUEsRUFBTTlpQixNQUFBLEtBQVc7TUFFakUsSUFBSTJpQixvQkFBQSxFQUFzQjtRQUN4QixPQUFPO01BQ1Q7TUFFQSxJQUFJem5CLElBQUEsQ0FBSzZuQixRQUFBLEVBQVU7UUFDakIsTUFBTUMsb0JBQUEsR0FBdUIsQ0FBQ2hqQixNQUFBLElBQVVBLE1BQUEsQ0FBT3BCLElBQUEsQ0FBS2lrQixjQUFBLENBQWVMLFdBQVc7UUFDOUUsTUFBTVMseUJBQUEsR0FDSixDQUFDLENBQUNULFdBQUEsQ0FBWUUsT0FBQSxDQUFReG5CLElBQUEsQ0FBSzBDLEtBQUssS0FBSyxDQUFDMUMsSUFBQSxDQUFLMEMsS0FBQSxDQUFNd0wsSUFBQSxDQUFLOFosU0FBQSxJQUFhQSxTQUFBLENBQVV0a0IsSUFBQSxDQUFLb0gsUUFBQSxDQUFTd2MsV0FBVyxDQUFDO1FBRXpHRyxvQkFBQSxHQUF1Qkssb0JBQUEsSUFBd0JDLHlCQUFBO01BQ2pEO01BQ0EsT0FBTyxDQUFDTixvQkFBQTtJQUNWLENBQUM7SUFFRCxPQUFPQSxvQkFBQTtFQUNULENBQUM7QUFDSDtBQUNPLElBQU1uRyxPQUFBLEdBQ1hBLENBQUMxVSxVQUFBLEVBQVk3RixVQUFBLEdBQWEsQ0FBQyxNQUMzQixDQUFDO0VBQUVySyxFQUFBO0VBQUlaLEtBQUE7RUFBT2lDO0FBQVMsTUFBTTtFQUMzQixNQUFNO0lBQUUvQjtFQUFVLElBQUlVLEVBQUE7RUFDdEIsTUFBTTtJQUFFbVEsS0FBQTtJQUFPNEI7RUFBTyxJQUFJelMsU0FBQTtFQUMxQixNQUFNMEgsSUFBQSxHQUFPM1AsV0FBQSxDQUFZNlksVUFBQSxFQUFZOVEsS0FBQSxDQUFNUyxNQUFNO0VBRWpELElBQUl3QixRQUFBLEVBQVU7SUFDWixJQUFJOE8sS0FBQSxFQUFPO01BQ1QsTUFBTTdELGFBQUEsR0FBZ0JuVixpQkFBQSxDQUFrQmlJLEtBQUEsRUFBTzRILElBQUk7TUFFbkRoSCxFQUFBLENBQUd1ckIsYUFBQSxDQUNEdmtCLElBQUEsQ0FBS3NRLE1BQUEsQ0FBTztRQUNWLEdBQUdoTCxhQUFBO1FBQ0gsR0FBR2pDO01BQ0wsQ0FBQyxDQUNIO0lBQ0YsT0FBTztNQUNMMEgsTUFBQSxDQUFPdFAsT0FBQSxDQUFRK0UsS0FBQSxJQUFTO1FBQ3RCLE1BQU1FLElBQUEsR0FBT0YsS0FBQSxDQUFNUSxLQUFBLENBQU1ULEdBQUE7UUFDekIsTUFBTUksRUFBQSxHQUFLSCxLQUFBLENBQU1rTixHQUFBLENBQUluTixHQUFBO1FBRXJCbkksS0FBQSxDQUFNRyxHQUFBLENBQUlrSSxZQUFBLENBQWFDLElBQUEsRUFBTUMsRUFBQSxFQUFJLENBQUNyRSxJQUFBLEVBQU1pRSxHQUFBLEtBQVE7VUFDOUMsTUFBTWlrQixXQUFBLEdBQWMxYixJQUFBLENBQUtDLEdBQUEsQ0FBSXhJLEdBQUEsRUFBS0csSUFBSTtVQUN0QyxNQUFNK2pCLFNBQUEsR0FBWTNiLElBQUEsQ0FBSytFLEdBQUEsQ0FBSXROLEdBQUEsR0FBTWpFLElBQUEsQ0FBS21QLFFBQUEsRUFBVTlLLEVBQUU7VUFDbEQsTUFBTStqQixXQUFBLEdBQWNwb0IsSUFBQSxDQUFLMEMsS0FBQSxDQUFNNkcsSUFBQSxDQUFLeUIsSUFBQSxJQUFRQSxJQUFBLENBQUt0SCxJQUFBLEtBQVNBLElBQUk7VUFLOUQsSUFBSTBrQixXQUFBLEVBQWE7WUFDZnBvQixJQUFBLENBQUswQyxLQUFBLENBQU12RCxPQUFBLENBQVE2TCxJQUFBLElBQVE7Y0FDekIsSUFBSXRILElBQUEsS0FBU3NILElBQUEsQ0FBS3RILElBQUEsRUFBTTtnQkFDdEJoSCxFQUFBLENBQUd3cUIsT0FBQSxDQUNEZ0IsV0FBQSxFQUNBQyxTQUFBLEVBQ0F6a0IsSUFBQSxDQUFLc1EsTUFBQSxDQUFPO2tCQUNWLEdBQUdoSixJQUFBLENBQUtuQyxLQUFBO2tCQUNSLEdBQUc5QjtnQkFDTCxDQUFDLENBQ0g7Y0FDRjtZQUNGLENBQUM7VUFDSCxPQUFPO1lBQ0xySyxFQUFBLENBQUd3cUIsT0FBQSxDQUFRZ0IsV0FBQSxFQUFhQyxTQUFBLEVBQVd6a0IsSUFBQSxDQUFLc1EsTUFBQSxDQUFPak4sVUFBVSxDQUFDO1VBQzVEO1FBQ0YsQ0FBQztNQUNILENBQUM7SUFDSDtFQUNGO0VBRUEsT0FBT3NnQixVQUFBLENBQVd2ckIsS0FBQSxFQUFPWSxFQUFBLEVBQUlnSCxJQUFJO0FBQ25DO0FDL0ZLLElBQU15UyxPQUFBLEdBQ1hBLENBQUM1TyxHQUFBLEVBQUs3RyxLQUFBLEtBQ04sQ0FBQztFQUFFaEU7QUFBRyxNQUFNO0VBQ1ZBLEVBQUEsQ0FBR3laLE9BQUEsQ0FBUTVPLEdBQUEsRUFBSzdHLEtBQUs7RUFFckIsT0FBTztBQUNUO0F2R0pLLElBQU02Z0IsT0FBQSxHQUNYQSxDQUFDM1UsVUFBQSxFQUFZN0YsVUFBQSxHQUFhLENBQUMsTUFDM0IsQ0FBQztFQUFFakwsS0FBQTtFQUFPaUMsUUFBQTtFQUFVQztBQUFNLE1BQU07RUFDOUIsTUFBTTBGLElBQUEsR0FBT3ZQLFdBQUEsQ0FBWXlZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTTtFQUVqRCxJQUFJOHJCLGdCQUFBO0VBRUosSUFBSXZzQixLQUFBLENBQU1FLFNBQUEsQ0FBVWdXLE9BQUEsQ0FBUXNXLFVBQUEsQ0FBV3hzQixLQUFBLENBQU1FLFNBQUEsQ0FBVThRLEtBQUssR0FBRztJQUU3RHViLGdCQUFBLEdBQW1CdnNCLEtBQUEsQ0FBTUUsU0FBQSxDQUFVZ1csT0FBQSxDQUFRbE4sTUFBQSxDQUFPK0QsS0FBQTtFQUNwRDtFQUdBLElBQUksQ0FBQ25GLElBQUEsQ0FBS0UsV0FBQSxFQUFhO0lBQ3JCMUIsT0FBQSxDQUFRQyxJQUFBLENBQUssc0VBQXNFO0lBRW5GLE9BQU87RUFDVDtFQUVBLE9BQ0VuRSxLQUFBLENBQU0sRUFFSG1oQixPQUFBLENBQVEsQ0FBQztJQUFFbmlCO0VBQVMsTUFBTTtJQUN6QixNQUFNdXJCLFdBQUEsT0FBY2h1QixpQkFBQSxDQUFBaXVCLFlBQUEsRUFBYTlrQixJQUFBLEVBQU07TUFBRSxHQUFHMmtCLGdCQUFBO01BQWtCLEdBQUd0aEI7SUFBVyxDQUFDLEVBQUVqTCxLQUFLO0lBRXBGLElBQUl5c0IsV0FBQSxFQUFhO01BQ2YsT0FBTztJQUNUO0lBRUEsT0FBT3ZyQixRQUFBLENBQVNraUIsVUFBQSxDQUFXO0VBQzdCLENBQUMsRUFDQUMsT0FBQSxDQUFRLENBQUM7SUFBRXJqQixLQUFBLEVBQU8yc0I7RUFBYSxNQUFNO0lBQ3BDLFdBQU9sdUIsaUJBQUEsQ0FBQWl1QixZQUFBLEVBQWE5a0IsSUFBQSxFQUFNO01BQUUsR0FBRzJrQixnQkFBQTtNQUFrQixHQUFHdGhCO0lBQVcsQ0FBQyxFQUFFMGhCLFlBQUEsRUFBYzFxQixRQUFRO0VBQzFGLENBQUMsRUFDQVUsR0FBQSxDQUFJO0FBRVg7QUN0Q0ssSUFBTStpQixnQkFBQSxHQUNYOU4sUUFBQSxJQUNBLENBQUM7RUFBRWhYLEVBQUE7RUFBSXFCO0FBQVMsTUFBTTtFQUNwQixJQUFJQSxRQUFBLEVBQVU7SUFDWixNQUFNO01BQUU5QjtJQUFJLElBQUlTLEVBQUE7SUFDaEIsTUFBTTBILElBQUEsR0FBTzdOLE1BQUEsQ0FBT21kLFFBQUEsRUFBVSxHQUFHelgsR0FBQSxDQUFJaUYsT0FBQSxDQUFRd0wsSUFBSTtJQUNqRCxNQUFNMVEsU0FBQSxHQUFZeEIsY0FBQSxDQUFBbVksYUFBQSxDQUFjcUIsTUFBQSxDQUFPL1gsR0FBQSxFQUFLbUksSUFBSTtJQUVoRDFILEVBQUEsQ0FBR3lZLFlBQUEsQ0FBYW5aLFNBQVM7RUFDM0I7RUFFQSxPQUFPO0FBQ1Q7QUNaSyxJQUFNeWxCLGdCQUFBLEdBQ1gvTixRQUFBLElBQ0EsQ0FBQztFQUFFaFgsRUFBQTtFQUFJcUI7QUFBUyxNQUFNO0VBQ3BCLElBQUlBLFFBQUEsRUFBVTtJQUNaLE1BQU07TUFBRTlCO0lBQUksSUFBSVMsRUFBQTtJQUNoQixNQUFNO01BQUUwSCxJQUFBO01BQU1DO0lBQUcsSUFBSSxPQUFPcVAsUUFBQSxLQUFhLFdBQVc7TUFBRXRQLElBQUEsRUFBTXNQLFFBQUE7TUFBVXJQLEVBQUEsRUFBSXFQO0lBQVMsSUFBSUEsUUFBQTtJQUN2RixNQUFNYixNQUFBLEdBQVNwWSxjQUFBLENBQUFtWSxhQUFBLENBQWNpQixPQUFBLENBQVE1WCxHQUFHLEVBQUVtSSxJQUFBO0lBQzFDLE1BQU0wTyxNQUFBLEdBQVNyWSxjQUFBLENBQUFtWSxhQUFBLENBQWNtQixLQUFBLENBQU05WCxHQUFHLEVBQUVvSSxFQUFBO0lBQ3hDLE1BQU0wTyxZQUFBLEdBQWV4YyxNQUFBLENBQU82TixJQUFBLEVBQU15TyxNQUFBLEVBQVFDLE1BQU07SUFDaEQsTUFBTUUsV0FBQSxHQUFjemMsTUFBQSxDQUFPOE4sRUFBQSxFQUFJd08sTUFBQSxFQUFRQyxNQUFNO0lBQzdDLE1BQU05VyxTQUFBLEdBQVl2QixjQUFBLENBQUFtWSxhQUFBLENBQWNvQixNQUFBLENBQU8vWCxHQUFBLEVBQUs4VyxZQUFBLEVBQWNDLFdBQVc7SUFFckV0VyxFQUFBLENBQUd5WSxZQUFBLENBQWFuWixTQUFTO0VBQzNCO0VBRUEsT0FBTztBQUNUO0FDZkssSUFBTTBsQixZQUFBLEdBQ1g5VSxVQUFBLElBQ0EsQ0FBQztFQUFFOVEsS0FBQTtFQUFPaUM7QUFBUyxNQUFNO0VBQ3ZCLE1BQU0yRixJQUFBLEdBQU92UCxXQUFBLENBQVl5WSxVQUFBLEVBQVk5USxLQUFBLENBQU1TLE1BQU07RUFFakQsV0FBTzdCLG1CQUFBLENBQUFnbkIsWUFBQSxFQUFxQmhlLElBQUksRUFBRTVILEtBQUEsRUFBT2lDLFFBQVE7QUFDbkQ7QUNqQkYsU0FBUzJxQixZQUFZNXNCLEtBQUEsRUFBb0I0ZixlQUFBLEVBQTRCO0VBQ25FLE1BQU1oWixLQUFBLEdBQVE1RyxLQUFBLENBQU1JLFdBQUEsSUFBZ0JKLEtBQUEsQ0FBTUUsU0FBQSxDQUFVb1YsR0FBQSxDQUFJcEIsWUFBQSxJQUFnQmxVLEtBQUEsQ0FBTUUsU0FBQSxDQUFVMEksS0FBQSxDQUFNaEMsS0FBQSxDQUFNO0VBRXBHLElBQUlBLEtBQUEsRUFBTztJQUNULE1BQU1pbUIsYUFBQSxHQUFnQmptQixLQUFBLENBQU1yRCxNQUFBLENBQU8yTCxJQUFBLElBQVEwUSxlQUFBLG9CQUFBQSxlQUFBLENBQWlCM1QsUUFBQSxDQUFTaUQsSUFBQSxDQUFLdEgsSUFBQSxDQUFLakcsSUFBQSxDQUFLO0lBRXBGM0IsS0FBQSxDQUFNWSxFQUFBLENBQUdnc0IsV0FBQSxDQUFZQyxhQUFhO0VBQ3BDO0FBQ0Y7QUFnQk8sSUFBTWhILFVBQUEsR0FDWEEsQ0FBQztFQUFFaUgsU0FBQSxHQUFZO0FBQUssSUFBSSxDQUFDLE1BQ3pCLENBQUM7RUFBRWxzQixFQUFBO0VBQUlaLEtBQUE7RUFBT2lDLFFBQUE7RUFBVWxCO0FBQU8sTUFBTTtFQUNuQyxNQUFNO0lBQUViLFNBQUE7SUFBV0M7RUFBSSxJQUFJUyxFQUFBO0VBQzNCLE1BQU07SUFBRWdJLEtBQUE7SUFBTzBNO0VBQUksSUFBSXBWLFNBQUE7RUFDdkIsTUFBTWlLLG1CQUFBLEdBQXNCcEosTUFBQSxDQUFPRSxnQkFBQSxDQUFpQmdLLFVBQUE7RUFDcEQsTUFBTWtDLGFBQUEsR0FBZ0J4VSxxQkFBQSxDQUFzQndSLG1CQUFBLEVBQXFCdkIsS0FBQSxDQUFNMUUsSUFBQSxDQUFLLEVBQUUwRCxJQUFBLENBQUtqRyxJQUFBLEVBQU1pSCxLQUFBLENBQU0xRSxJQUFBLENBQUssRUFBRTZJLEtBQUs7RUFFM0csSUFBSTdNLFNBQUEsWUFBcUJyQixjQUFBLENBQUFnWSxhQUFBLElBQWlCM1csU0FBQSxDQUFVZ0UsSUFBQSxDQUFLcU0sT0FBQSxFQUFTO0lBQ2hFLElBQUksQ0FBQzNILEtBQUEsQ0FBTXNMLFlBQUEsSUFBZ0IsS0FBQ3BWLGlCQUFBLENBQUFpdUIsUUFBQSxFQUFTNXNCLEdBQUEsRUFBS3lJLEtBQUEsQ0FBTVQsR0FBRyxHQUFHO01BQ3BELE9BQU87SUFDVDtJQUVBLElBQUlsRyxRQUFBLEVBQVU7TUFDWixJQUFJNnFCLFNBQUEsRUFBVztRQUNiRixXQUFBLENBQVk1c0IsS0FBQSxFQUFPZSxNQUFBLENBQU9FLGdCQUFBLENBQWlCMmUsZUFBZTtNQUM1RDtNQUVBaGYsRUFBQSxDQUFHaUwsS0FBQSxDQUFNakQsS0FBQSxDQUFNVCxHQUFHLEVBQUU2YyxjQUFBLENBQWU7SUFDckM7SUFFQSxPQUFPO0VBQ1Q7RUFFQSxJQUFJLENBQUNwYyxLQUFBLENBQU1JLE1BQUEsQ0FBT3VILE9BQUEsRUFBUztJQUN6QixPQUFPO0VBQ1Q7RUFFQSxNQUFNMEgsS0FBQSxHQUFRM0MsR0FBQSxDQUFJcEIsWUFBQSxLQUFpQm9CLEdBQUEsQ0FBSXRNLE1BQUEsQ0FBTzVELE9BQUEsQ0FBUXdMLElBQUE7RUFFdEQsTUFBTW9jLEtBQUEsR0FBUXBrQixLQUFBLENBQU1ILEtBQUEsS0FBVSxJQUFJLFNBQVloUyxjQUFBLENBQWVtUyxLQUFBLENBQU0xRSxJQUFBLENBQUssRUFBRSxFQUFFaWpCLGNBQUEsQ0FBZXZlLEtBQUEsQ0FBTXFrQixVQUFBLENBQVcsRUFBRSxDQUFDLENBQUM7RUFFaEgsSUFBSWppQixLQUFBLEdBQ0ZpTixLQUFBLElBQVMrVSxLQUFBLEdBQ0wsQ0FDRTtJQUNFcGxCLElBQUEsRUFBTW9sQixLQUFBO0lBQ05qZ0IsS0FBQSxFQUFPSTtFQUNULEVBQ0YsR0FDQTtFQUVOLElBQUkvSyxHQUFBLE9BQU10RCxpQkFBQSxDQUFBaXVCLFFBQUEsRUFBU25zQixFQUFBLENBQUdULEdBQUEsRUFBS1MsRUFBQSxDQUFHNFIsT0FBQSxDQUFROVEsR0FBQSxDQUFJa0gsS0FBQSxDQUFNVCxHQUFHLEdBQUcsR0FBRzZDLEtBQUs7RUFFOUQsSUFBSSxDQUFDQSxLQUFBLElBQVMsQ0FBQzVJLEdBQUEsUUFBT3RELGlCQUFBLENBQUFpdUIsUUFBQSxFQUFTbnNCLEVBQUEsQ0FBR1QsR0FBQSxFQUFLUyxFQUFBLENBQUc0UixPQUFBLENBQVE5USxHQUFBLENBQUlrSCxLQUFBLENBQU1ULEdBQUcsR0FBRyxHQUFHNmtCLEtBQUEsR0FBUSxDQUFDO0lBQUVwbEIsSUFBQSxFQUFNb2xCO0VBQU0sQ0FBQyxJQUFJLE1BQVMsR0FBRztJQUMzRzVxQixHQUFBLEdBQU07SUFDTjRJLEtBQUEsR0FBUWdpQixLQUFBLEdBQ0osQ0FDRTtNQUNFcGxCLElBQUEsRUFBTW9sQixLQUFBO01BQ05qZ0IsS0FBQSxFQUFPSTtJQUNULEVBQ0YsR0FDQTtFQUNOO0VBRUEsSUFBSWxMLFFBQUEsRUFBVTtJQUNaLElBQUlHLEdBQUEsRUFBSztNQUNQLElBQUlsQyxTQUFBLFlBQXFCckIsY0FBQSxDQUFBaVksYUFBQSxFQUFlO1FBQ3RDbFcsRUFBQSxDQUFHOGlCLGVBQUEsQ0FBZ0I7TUFDckI7TUFFQTlpQixFQUFBLENBQUdpTCxLQUFBLENBQU1qTCxFQUFBLENBQUc0UixPQUFBLENBQVE5USxHQUFBLENBQUlrSCxLQUFBLENBQU1ULEdBQUcsR0FBRyxHQUFHNkMsS0FBSztNQUU1QyxJQUFJZ2lCLEtBQUEsSUFBUyxDQUFDL1UsS0FBQSxJQUFTLENBQUNyUCxLQUFBLENBQU1zTCxZQUFBLElBQWdCdEwsS0FBQSxDQUFNSSxNQUFBLENBQU9wQixJQUFBLEtBQVNvbEIsS0FBQSxFQUFPO1FBQ3pFLE1BQU1FLE1BQUEsR0FBUXRzQixFQUFBLENBQUc0UixPQUFBLENBQVE5USxHQUFBLENBQUlrSCxLQUFBLENBQU1GLE1BQUEsQ0FBTyxDQUFDO1FBQzNDLE1BQU15a0IsTUFBQSxHQUFTdnNCLEVBQUEsQ0FBR1QsR0FBQSxDQUFJc1UsT0FBQSxDQUFReVksTUFBSztRQUVuQyxJQUFJdGtCLEtBQUEsQ0FBTTFFLElBQUEsQ0FBSyxFQUFFLEVBQUVrcEIsY0FBQSxDQUFlRCxNQUFBLENBQU85ZCxLQUFBLENBQU0sR0FBRzhkLE1BQUEsQ0FBTzlkLEtBQUEsQ0FBTSxJQUFJLEdBQUcyZCxLQUFLLEdBQUc7VUFDNUVwc0IsRUFBQSxDQUFHd21CLGFBQUEsQ0FBY3htQixFQUFBLENBQUc0UixPQUFBLENBQVE5USxHQUFBLENBQUlrSCxLQUFBLENBQU1GLE1BQUEsQ0FBTyxDQUFDLEdBQUdza0IsS0FBSztRQUN4RDtNQUNGO0lBQ0Y7SUFFQSxJQUFJRixTQUFBLEVBQVc7TUFDYkYsV0FBQSxDQUFZNXNCLEtBQUEsRUFBT2UsTUFBQSxDQUFPRSxnQkFBQSxDQUFpQjJlLGVBQWU7SUFDNUQ7SUFFQWhmLEVBQUEsQ0FBR29rQixjQUFBLENBQWU7RUFDcEI7RUFFQSxPQUFPNWlCLEdBQUE7QUFDVDtBQzNGSyxJQUFNMGpCLGFBQUEsR0FDWEEsQ0FBQ2hWLFVBQUEsRUFBWXVjLGFBQUEsR0FBZ0IsQ0FBQyxNQUM5QixDQUFDO0VBQUV6c0IsRUFBQTtFQUFJWixLQUFBO0VBQU9pQyxRQUFBO0VBQVVsQjtBQUFPLE1BQU07RUF6QnZDLElBQUF3TSxFQUFBO0VBMEJJLE1BQU0zRixJQUFBLEdBQU92UCxXQUFBLENBQVl5WSxVQUFBLEVBQVk5USxLQUFBLENBQU1TLE1BQU07RUFDakQsTUFBTTtJQUFFbUksS0FBQTtJQUFPME07RUFBSSxJQUFJdFYsS0FBQSxDQUFNRSxTQUFBO0VBSTdCLE1BQU1nRSxJQUFBLEdBQXdCbEUsS0FBQSxDQUFNRSxTQUFBLENBQVVnRSxJQUFBO0VBRTlDLElBQUtBLElBQUEsSUFBUUEsSUFBQSxDQUFLcU0sT0FBQSxJQUFZM0gsS0FBQSxDQUFNSCxLQUFBLEdBQVEsS0FBSyxDQUFDRyxLQUFBLENBQU00akIsVUFBQSxDQUFXbFgsR0FBRyxHQUFHO0lBQ3ZFLE9BQU87RUFDVDtFQUVBLE1BQU1nWSxXQUFBLEdBQWMxa0IsS0FBQSxDQUFNMUUsSUFBQSxDQUFLLEVBQUU7RUFFakMsSUFBSW9wQixXQUFBLENBQVkxbEIsSUFBQSxLQUFTQSxJQUFBLEVBQU07SUFDN0IsT0FBTztFQUNUO0VBRUEsTUFBTXVDLG1CQUFBLEdBQXNCcEosTUFBQSxDQUFPRSxnQkFBQSxDQUFpQmdLLFVBQUE7RUFFcEQsSUFBSXJDLEtBQUEsQ0FBTUksTUFBQSxDQUFPNUQsT0FBQSxDQUFRd0wsSUFBQSxLQUFTLEtBQUtoSSxLQUFBLENBQU0xRSxJQUFBLENBQUssRUFBRSxFQUFFc1AsVUFBQSxLQUFlNUssS0FBQSxDQUFNcWtCLFVBQUEsQ0FBVyxFQUFFLEdBQUc7SUFJekYsSUFBSXJrQixLQUFBLENBQU1ILEtBQUEsS0FBVSxLQUFLRyxLQUFBLENBQU0xRSxJQUFBLENBQUssRUFBRSxFQUFFMEQsSUFBQSxLQUFTQSxJQUFBLElBQVFnQixLQUFBLENBQU15RyxLQUFBLENBQU0sRUFBRSxNQUFNekcsS0FBQSxDQUFNMUUsSUFBQSxDQUFLLEVBQUUsRUFBRXNQLFVBQUEsR0FBYSxHQUFHO01BQzFHLE9BQU87SUFDVDtJQUVBLElBQUl2UixRQUFBLEVBQVU7TUFDWixJQUFJc3JCLElBQUEsR0FBT3h1QixjQUFBLENBQUExSixRQUFBLENBQVMwYixLQUFBO01BRXBCLE1BQU15YyxXQUFBLEdBQWM1a0IsS0FBQSxDQUFNeUcsS0FBQSxDQUFNLEVBQUUsSUFBSSxJQUFJekcsS0FBQSxDQUFNeUcsS0FBQSxDQUFNLEVBQUUsSUFBSSxJQUFJO01BSWhFLFNBQVNvZSxDQUFBLEdBQUk3a0IsS0FBQSxDQUFNSCxLQUFBLEdBQVEra0IsV0FBQSxFQUFhQyxDQUFBLElBQUs3a0IsS0FBQSxDQUFNSCxLQUFBLEdBQVEsR0FBR2dsQixDQUFBLElBQUssR0FBRztRQUNwRUYsSUFBQSxHQUFPeHVCLGNBQUEsQ0FBQTFKLFFBQUEsQ0FBU2lULElBQUEsQ0FBS00sS0FBQSxDQUFNMUUsSUFBQSxDQUFLdXBCLENBQUMsRUFBRUMsSUFBQSxDQUFLSCxJQUFJLENBQUM7TUFDL0M7TUFFQSxNQUFNSSxVQUFBLEdBRUova0IsS0FBQSxDQUFNcWtCLFVBQUEsQ0FBVyxFQUFFLElBQUlya0IsS0FBQSxDQUFNMUUsSUFBQSxDQUFLLEVBQUUsRUFBRXNQLFVBQUEsR0FDbEMsSUFDQTVLLEtBQUEsQ0FBTXFrQixVQUFBLENBQVcsRUFBRSxJQUFJcmtCLEtBQUEsQ0FBTTFFLElBQUEsQ0FBSyxFQUFFLEVBQUVzUCxVQUFBLEdBQ3BDLElBQ0E7TUFHUixNQUFNb2Esc0JBQUEsR0FBd0I7UUFDNUIsR0FBR2oxQixxQkFBQSxDQUFzQndSLG1CQUFBLEVBQXFCdkIsS0FBQSxDQUFNMUUsSUFBQSxDQUFLLEVBQUUwRCxJQUFBLENBQUtqRyxJQUFBLEVBQU1pSCxLQUFBLENBQU0xRSxJQUFBLENBQUssRUFBRTZJLEtBQUs7UUFDeEYsR0FBR3NnQjtNQUNMO01BQ0EsTUFBTVEsU0FBQSxLQUFXdGdCLEVBQUEsR0FBQTNGLElBQUEsQ0FBS2ttQixZQUFBLENBQWE1RyxXQUFBLEtBQWxCLGdCQUFBM1osRUFBQSxDQUErQndnQixhQUFBLENBQWNILHNCQUFBLE1BQTBCO01BRXhGTCxJQUFBLEdBQU9BLElBQUEsQ0FBS3ptQixNQUFBLENBQU8vSCxjQUFBLENBQUExSixRQUFBLENBQVNpVCxJQUFBLENBQUtWLElBQUEsQ0FBS21tQixhQUFBLENBQWMsTUFBTUYsU0FBUSxLQUFLLE1BQVMsQ0FBQztNQUVqRixNQUFNbGxCLEtBQUEsR0FBUUMsS0FBQSxDQUFNRixNQUFBLENBQU9FLEtBQUEsQ0FBTUgsS0FBQSxJQUFTK2tCLFdBQUEsR0FBYyxFQUFFO01BRTFENXNCLEVBQUEsQ0FBR290QixPQUFBLENBQVFybEIsS0FBQSxFQUFPQyxLQUFBLENBQU04ZSxLQUFBLENBQU0sQ0FBQ2lHLFVBQVUsR0FBRyxJQUFJNXVCLGNBQUEsQ0FBQWt2QixLQUFBLENBQU1WLElBQUEsRUFBTSxJQUFJQyxXQUFBLEVBQWEsQ0FBQyxDQUFDO01BRS9FLElBQUlVLEdBQUEsR0FBTTtNQUVWdHRCLEVBQUEsQ0FBR1QsR0FBQSxDQUFJa0ksWUFBQSxDQUFhTSxLQUFBLEVBQU8vSCxFQUFBLENBQUdULEdBQUEsQ0FBSWlGLE9BQUEsQ0FBUXdMLElBQUEsRUFBTSxDQUFDdWQsQ0FBQSxFQUFHaG1CLEdBQUEsS0FBUTtRQUMxRCxJQUFJK2xCLEdBQUEsR0FBTSxJQUFJO1VBQ1osT0FBTztRQUNUO1FBRUEsSUFBSUMsQ0FBQSxDQUFFcm1CLFdBQUEsSUFBZXFtQixDQUFBLENBQUUvb0IsT0FBQSxDQUFRd0wsSUFBQSxLQUFTLEdBQUc7VUFDekNzZCxHQUFBLEdBQU0vbEIsR0FBQSxHQUFNO1FBQ2Q7TUFDRixDQUFDO01BRUQsSUFBSStsQixHQUFBLEdBQU0sSUFBSTtRQUNadHRCLEVBQUEsQ0FBR3lZLFlBQUEsQ0FBYXJhLGNBQUEsQ0FBQThYLGFBQUEsQ0FBY3dDLElBQUEsQ0FBSzFZLEVBQUEsQ0FBR1QsR0FBQSxDQUFJc1UsT0FBQSxDQUFReVosR0FBRyxDQUFDLENBQUM7TUFDekQ7TUFFQXR0QixFQUFBLENBQUdva0IsY0FBQSxDQUFlO0lBQ3BCO0lBRUEsT0FBTztFQUNUO0VBRUEsTUFBTW9KLFFBQUEsR0FBVzlZLEdBQUEsQ0FBSW5OLEdBQUEsS0FBUVMsS0FBQSxDQUFNeU4sR0FBQSxDQUFJLElBQUlpWCxXQUFBLENBQVluRyxjQUFBLENBQWUsQ0FBQyxFQUFFRCxXQUFBLEdBQWM7RUFFdkYsTUFBTW1ILGlCQUFBLEdBQW9CO0lBQ3hCLEdBQUcxMUIscUJBQUEsQ0FBc0J3UixtQkFBQSxFQUFxQm1qQixXQUFBLENBQVkxbEIsSUFBQSxDQUFLakcsSUFBQSxFQUFNMnJCLFdBQUEsQ0FBWXZnQixLQUFLO0lBQ3RGLEdBQUdzZ0I7RUFDTDtFQUNBLE1BQU1pQixxQkFBQSxHQUF3QjtJQUM1QixHQUFHMzFCLHFCQUFBLENBQXNCd1IsbUJBQUEsRUFBcUJ2QixLQUFBLENBQU0xRSxJQUFBLENBQUssRUFBRTBELElBQUEsQ0FBS2pHLElBQUEsRUFBTWlILEtBQUEsQ0FBTTFFLElBQUEsQ0FBSyxFQUFFNkksS0FBSztJQUN4RixHQUFHc2dCO0VBQ0w7RUFFQXpzQixFQUFBLENBQUcrbUIsTUFBQSxDQUFPL2UsS0FBQSxDQUFNVCxHQUFBLEVBQUttTixHQUFBLENBQUluTixHQUFHO0VBRTVCLE1BQU02QyxLQUFBLEdBQVFvakIsUUFBQSxHQUNWLENBQ0U7SUFBRXhtQixJQUFBO0lBQU1tRixLQUFBLEVBQU9zaEI7RUFBa0IsR0FDakM7SUFBRXptQixJQUFBLEVBQU13bUIsUUFBQTtJQUFVcmhCLEtBQUEsRUFBT3VoQjtFQUFzQixFQUNqRCxHQUNBLENBQUM7SUFBRTFtQixJQUFBO0lBQU1tRixLQUFBLEVBQU9zaEI7RUFBa0IsQ0FBQztFQUV2QyxJQUFJLEtBQUNwdkIsaUJBQUEsQ0FBQTh0QixRQUFBLEVBQVNuc0IsRUFBQSxDQUFHVCxHQUFBLEVBQUt5SSxLQUFBLENBQU1ULEdBQUEsRUFBSyxDQUFDLEdBQUc7SUFDbkMsT0FBTztFQUNUO0VBRUEsSUFBSWxHLFFBQUEsRUFBVTtJQUNaLE1BQU07TUFBRS9CLFNBQUE7TUFBV0U7SUFBWSxJQUFJSixLQUFBO0lBQ25DLE1BQU07TUFBRTRmO0lBQWdCLElBQUk3ZSxNQUFBLENBQU9FLGdCQUFBO0lBQ25DLE1BQU0yRixLQUFBLEdBQVF4RyxXQUFBLElBQWdCRixTQUFBLENBQVVvVixHQUFBLENBQUlwQixZQUFBLElBQWdCaFUsU0FBQSxDQUFVMEksS0FBQSxDQUFNaEMsS0FBQSxDQUFNO0lBRWxGaEcsRUFBQSxDQUFHaUwsS0FBQSxDQUFNakQsS0FBQSxDQUFNVCxHQUFBLEVBQUssR0FBRzZDLEtBQUssRUFBRWdhLGNBQUEsQ0FBZTtJQUU3QyxJQUFJLENBQUNwZSxLQUFBLElBQVMsQ0FBQzNFLFFBQUEsRUFBVTtNQUN2QixPQUFPO0lBQ1Q7SUFFQSxNQUFNNHFCLGFBQUEsR0FBZ0JqbUIsS0FBQSxDQUFNckQsTUFBQSxDQUFPMkwsSUFBQSxJQUFRMFEsZUFBQSxDQUFnQjNULFFBQUEsQ0FBU2lELElBQUEsQ0FBS3RILElBQUEsQ0FBS2pHLElBQUksQ0FBQztJQUVuRmYsRUFBQSxDQUFHZ3NCLFdBQUEsQ0FBWUMsYUFBYTtFQUM5QjtFQUVBLE9BQU87QUFDVDtBQzNJRixJQUFNMEIsaUJBQUEsR0FBb0JBLENBQUMzdEIsRUFBQSxFQUFpQjR0QixRQUFBLEtBQWdDO0VBQzFFLE1BQU1DLElBQUEsR0FBT3YzQixjQUFBLENBQWVnTixJQUFBLElBQVFBLElBQUEsQ0FBSzBELElBQUEsS0FBUzRtQixRQUFRLEVBQUU1dEIsRUFBQSxDQUFHVixTQUFTO0VBRXhFLElBQUksQ0FBQ3V1QixJQUFBLEVBQU07SUFDVCxPQUFPO0VBQ1Q7RUFFQSxNQUFNL2xCLE1BQUEsR0FBUzlILEVBQUEsQ0FBR1QsR0FBQSxDQUFJc1UsT0FBQSxDQUFRL0QsSUFBQSxDQUFLQyxHQUFBLENBQUksR0FBRzhkLElBQUEsQ0FBS3RtQixHQUFBLEdBQU0sQ0FBQyxDQUFDLEVBQUVPLE1BQUEsQ0FBTytsQixJQUFBLENBQUtobUIsS0FBSztFQUUxRSxJQUFJQyxNQUFBLEtBQVcsUUFBVztJQUN4QixPQUFPO0VBQ1Q7RUFFQSxNQUFNdVIsVUFBQSxHQUFhclosRUFBQSxDQUFHVCxHQUFBLENBQUl1dUIsTUFBQSxDQUFPaG1CLE1BQU07RUFDdkMsTUFBTWltQixnQkFBQSxHQUFtQkYsSUFBQSxDQUFLdnFCLElBQUEsQ0FBSzBELElBQUEsTUFBU3FTLFVBQUEsb0JBQUFBLFVBQUEsQ0FBWXJTLElBQUEsU0FBUTFJLGlCQUFBLENBQUEwdkIsT0FBQSxFQUFRaHVCLEVBQUEsQ0FBR1QsR0FBQSxFQUFLc3VCLElBQUEsQ0FBS3RtQixHQUFHO0VBRXhGLElBQUksQ0FBQ3dtQixnQkFBQSxFQUFrQjtJQUNyQixPQUFPO0VBQ1Q7RUFFQS90QixFQUFBLENBQUdzTCxJQUFBLENBQUt1aUIsSUFBQSxDQUFLdG1CLEdBQUc7RUFFaEIsT0FBTztBQUNUO0FBRUEsSUFBTTBtQixnQkFBQSxHQUFtQkEsQ0FBQ2p1QixFQUFBLEVBQWlCNHRCLFFBQUEsS0FBZ0M7RUFDekUsTUFBTUMsSUFBQSxHQUFPdjNCLGNBQUEsQ0FBZWdOLElBQUEsSUFBUUEsSUFBQSxDQUFLMEQsSUFBQSxLQUFTNG1CLFFBQVEsRUFBRTV0QixFQUFBLENBQUdWLFNBQVM7RUFFeEUsSUFBSSxDQUFDdXVCLElBQUEsRUFBTTtJQUNULE9BQU87RUFDVDtFQUVBLE1BQU0vRyxLQUFBLEdBQVE5bUIsRUFBQSxDQUFHVCxHQUFBLENBQUlzVSxPQUFBLENBQVFnYSxJQUFBLENBQUs5bEIsS0FBSyxFQUFFK2UsS0FBQSxDQUFNK0csSUFBQSxDQUFLaG1CLEtBQUs7RUFFekQsSUFBSWlmLEtBQUEsS0FBVSxRQUFXO0lBQ3ZCLE9BQU87RUFDVDtFQUVBLE1BQU14TixTQUFBLEdBQVl0WixFQUFBLENBQUdULEdBQUEsQ0FBSXV1QixNQUFBLENBQU9oSCxLQUFLO0VBQ3JDLE1BQU1vSCxlQUFBLEdBQWtCTCxJQUFBLENBQUt2cUIsSUFBQSxDQUFLMEQsSUFBQSxNQUFTc1MsU0FBQSxvQkFBQUEsU0FBQSxDQUFXdFMsSUFBQSxTQUFRMUksaUJBQUEsQ0FBQTB2QixPQUFBLEVBQVFodUIsRUFBQSxDQUFHVCxHQUFBLEVBQUt1bkIsS0FBSztFQUVuRixJQUFJLENBQUNvSCxlQUFBLEVBQWlCO0lBQ3BCLE9BQU87RUFDVDtFQUVBbHVCLEVBQUEsQ0FBR3NMLElBQUEsQ0FBS3diLEtBQUs7RUFFYixPQUFPO0FBQ1Q7QUF1Qk8sSUFBTTNCLFVBQUEsR0FDWEEsQ0FBQ2dKLGNBQUEsRUFBZ0JDLGNBQUEsRUFBZ0JsQyxTQUFBLEVBQVc3aEIsVUFBQSxHQUFhLENBQUMsTUFDMUQsQ0FBQztFQUFFbEssTUFBQTtFQUFRSCxFQUFBO0VBQUlaLEtBQUE7RUFBT2lDLFFBQUE7RUFBVUMsS0FBQTtFQUFPaEIsUUFBQTtFQUFVa0I7QUFBSSxNQUFNO0VBQ3pELE1BQU07SUFBRXZMLFVBQUE7SUFBWStvQjtFQUFnQixJQUFJN2UsTUFBQSxDQUFPRSxnQkFBQTtFQUMvQyxNQUFNdXRCLFFBQUEsR0FBV24yQixXQUFBLENBQVkwMkIsY0FBQSxFQUFnQi91QixLQUFBLENBQU1TLE1BQU07RUFDekQsTUFBTXd1QixRQUFBLEdBQVc1MkIsV0FBQSxDQUFZMjJCLGNBQUEsRUFBZ0JodkIsS0FBQSxDQUFNUyxNQUFNO0VBQ3pELE1BQU07SUFBRVAsU0FBQTtJQUFXRTtFQUFZLElBQUlKLEtBQUE7RUFDbkMsTUFBTTtJQUFFNEksS0FBQTtJQUFPME07RUFBSSxJQUFJcFYsU0FBQTtFQUN2QixNQUFNa0ksS0FBQSxHQUFRUSxLQUFBLENBQU1tZSxVQUFBLENBQVd6UixHQUFHO0VBRWxDLE1BQU0xTyxLQUFBLEdBQVF4RyxXQUFBLElBQWdCRixTQUFBLENBQVVvVixHQUFBLENBQUlwQixZQUFBLElBQWdCaFUsU0FBQSxDQUFVMEksS0FBQSxDQUFNaEMsS0FBQSxDQUFNO0VBRWxGLElBQUksQ0FBQ3dCLEtBQUEsRUFBTztJQUNWLE9BQU87RUFDVDtFQUVBLE1BQU04bUIsVUFBQSxHQUFhaDRCLGNBQUEsQ0FBZWdOLElBQUEsSUFBUXpLLE1BQUEsQ0FBT3lLLElBQUEsQ0FBSzBELElBQUEsQ0FBS2pHLElBQUEsRUFBTTlLLFVBQVUsQ0FBQyxFQUFFcUosU0FBUztFQUV2RixJQUFJa0ksS0FBQSxDQUFNSyxLQUFBLElBQVMsS0FBS3ltQixVQUFBLElBQWM5bUIsS0FBQSxDQUFNSyxLQUFBLEdBQVF5bUIsVUFBQSxDQUFXem1CLEtBQUEsSUFBUyxHQUFHO0lBRXpFLElBQUl5bUIsVUFBQSxDQUFXaHJCLElBQUEsQ0FBSzBELElBQUEsS0FBUzRtQixRQUFBLEVBQVU7TUFDckMsT0FBT3R0QixRQUFBLENBQVMyakIsWUFBQSxDQUFhb0ssUUFBUTtJQUN2QztJQUdBLElBQUl4MUIsTUFBQSxDQUFPeTFCLFVBQUEsQ0FBV2hyQixJQUFBLENBQUswRCxJQUFBLENBQUtqRyxJQUFBLEVBQU05SyxVQUFVLEtBQUsyM0IsUUFBQSxDQUFTVyxZQUFBLENBQWFELFVBQUEsQ0FBV2hyQixJQUFBLENBQUtrQixPQUFPLEtBQUtuRCxRQUFBLEVBQVU7TUFDL0csT0FBT0MsS0FBQSxDQUFNLEVBQ1ZtaEIsT0FBQSxDQUFRLE1BQU07UUFDYnppQixFQUFBLENBQUd3bUIsYUFBQSxDQUFjOEgsVUFBQSxDQUFXL21CLEdBQUEsRUFBS3FtQixRQUFRO1FBRXpDLE9BQU87TUFDVCxDQUFDLEVBQ0FuTCxPQUFBLENBQVEsTUFBTWtMLGlCQUFBLENBQWtCM3RCLEVBQUEsRUFBSTR0QixRQUFRLENBQUMsRUFDN0NuTCxPQUFBLENBQVEsTUFBTXdMLGdCQUFBLENBQWlCanVCLEVBQUEsRUFBSTR0QixRQUFRLENBQUMsRUFDNUM3ckIsR0FBQSxDQUFJO0lBQ1Q7RUFDRjtFQUNBLElBQUksQ0FBQ21xQixTQUFBLElBQWEsQ0FBQ2xtQixLQUFBLElBQVMsQ0FBQzNFLFFBQUEsRUFBVTtJQUNyQyxPQUNFQyxLQUFBLENBQU0sRUFFSG1oQixPQUFBLENBQVEsTUFBTTtNQUNiLE1BQU0rTCxhQUFBLEdBQWdCaHRCLEdBQUEsQ0FBSSxFQUFFbWtCLFVBQUEsQ0FBV2lJLFFBQUEsRUFBVXZqQixVQUFVO01BRTNELElBQUlta0IsYUFBQSxFQUFlO1FBQ2pCLE9BQU87TUFDVDtNQUVBLE9BQU9sdUIsUUFBQSxDQUFTa2lCLFVBQUEsQ0FBVztJQUM3QixDQUFDLEVBQ0FtRCxVQUFBLENBQVdpSSxRQUFBLEVBQVV2akIsVUFBVSxFQUMvQm9ZLE9BQUEsQ0FBUSxNQUFNa0wsaUJBQUEsQ0FBa0IzdEIsRUFBQSxFQUFJNHRCLFFBQVEsQ0FBQyxFQUM3Q25MLE9BQUEsQ0FBUSxNQUFNd0wsZ0JBQUEsQ0FBaUJqdUIsRUFBQSxFQUFJNHRCLFFBQVEsQ0FBQyxFQUM1QzdyQixHQUFBLENBQUk7RUFFWDtFQUVBLE9BQ0VULEtBQUEsQ0FBTSxFQUVIbWhCLE9BQUEsQ0FBUSxNQUFNO0lBQ2IsTUFBTStMLGFBQUEsR0FBZ0JodEIsR0FBQSxDQUFJLEVBQUVta0IsVUFBQSxDQUFXaUksUUFBQSxFQUFVdmpCLFVBQVU7SUFFM0QsTUFBTTRoQixhQUFBLEdBQWdCam1CLEtBQUEsQ0FBTXJELE1BQUEsQ0FBTzJMLElBQUEsSUFBUTBRLGVBQUEsQ0FBZ0IzVCxRQUFBLENBQVNpRCxJQUFBLENBQUt0SCxJQUFBLENBQUtqRyxJQUFJLENBQUM7SUFFbkZmLEVBQUEsQ0FBR2dzQixXQUFBLENBQVlDLGFBQWE7SUFFNUIsSUFBSXVDLGFBQUEsRUFBZTtNQUNqQixPQUFPO0lBQ1Q7SUFFQSxPQUFPbHVCLFFBQUEsQ0FBU2tpQixVQUFBLENBQVc7RUFDN0IsQ0FBQyxFQUNBbUQsVUFBQSxDQUFXaUksUUFBQSxFQUFVdmpCLFVBQVUsRUFDL0JvWSxPQUFBLENBQVEsTUFBTWtMLGlCQUFBLENBQWtCM3RCLEVBQUEsRUFBSTR0QixRQUFRLENBQUMsRUFDN0NuTCxPQUFBLENBQVEsTUFBTXdMLGdCQUFBLENBQWlCanVCLEVBQUEsRUFBSTR0QixRQUFRLENBQUMsRUFDNUM3ckIsR0FBQSxDQUFJO0FBRVg7QWtHeEhLLElBQU1xakIsVUFBQSxHQUNYQSxDQUFDbFYsVUFBQSxFQUFZN0YsVUFBQSxHQUFhLENBQUMsR0FBRzVGLE9BQUEsR0FBVSxDQUFDLE1BQ3pDLENBQUM7RUFBRXJGLEtBQUE7RUFBT2tCO0FBQVMsTUFBTTtFQUN2QixNQUFNO0lBQUVtdUIsb0JBQUEsR0FBdUI7RUFBTSxJQUFJaHFCLE9BQUE7RUFDekMsTUFBTXVDLElBQUEsR0FBTzNQLFdBQUEsQ0FBWTZZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTTtFQUNqRCxNQUFNcXFCLFNBQUEsR0FBV254QixZQUFBLENBQWFxRyxLQUFBLEVBQU80SCxJQUFBLEVBQU1xRCxVQUFVO0VBRXJELElBQUk2ZixTQUFBLEVBQVU7SUFDWixPQUFPNXBCLFFBQUEsQ0FBU21sQixTQUFBLENBQVV6ZSxJQUFBLEVBQU07TUFBRXluQjtJQUFxQixDQUFDO0VBQzFEO0VBRUEsT0FBT251QixRQUFBLENBQVNza0IsT0FBQSxDQUFRNWQsSUFBQSxFQUFNcUQsVUFBVTtBQUMxQztBQ3pCSyxJQUFNZ2IsVUFBQSxHQUNYQSxDQUFDblYsVUFBQSxFQUFZd2UsZ0JBQUEsRUFBa0Jya0IsVUFBQSxHQUFhLENBQUMsTUFDN0MsQ0FBQztFQUFFakwsS0FBQTtFQUFPa0I7QUFBUyxNQUFNO0VBQ3ZCLE1BQU0wRyxJQUFBLEdBQU92UCxXQUFBLENBQVl5WSxVQUFBLEVBQVk5USxLQUFBLENBQU1TLE1BQU07RUFDakQsTUFBTTh1QixVQUFBLEdBQWFsM0IsV0FBQSxDQUFZaTNCLGdCQUFBLEVBQWtCdHZCLEtBQUEsQ0FBTVMsTUFBTTtFQUM3RCxNQUFNcXFCLFNBQUEsR0FBV2x4QixZQUFBLENBQWFvRyxLQUFBLEVBQU80SCxJQUFBLEVBQU1xRCxVQUFVO0VBRXJELElBQUlzaEIsZ0JBQUE7RUFFSixJQUFJdnNCLEtBQUEsQ0FBTUUsU0FBQSxDQUFVZ1csT0FBQSxDQUFRc1csVUFBQSxDQUFXeHNCLEtBQUEsQ0FBTUUsU0FBQSxDQUFVOFEsS0FBSyxHQUFHO0lBRTdEdWIsZ0JBQUEsR0FBbUJ2c0IsS0FBQSxDQUFNRSxTQUFBLENBQVVnVyxPQUFBLENBQVFsTixNQUFBLENBQU8rRCxLQUFBO0VBQ3BEO0VBRUEsSUFBSStkLFNBQUEsRUFBVTtJQUNaLE9BQU81cEIsUUFBQSxDQUFTdWtCLE9BQUEsQ0FBUThKLFVBQUEsRUFBWWhELGdCQUFnQjtFQUN0RDtFQUlBLE9BQU9yckIsUUFBQSxDQUFTdWtCLE9BQUEsQ0FBUTdkLElBQUEsRUFBTTtJQUFFLEdBQUcya0IsZ0JBQUE7SUFBa0IsR0FBR3RoQjtFQUFXLENBQUM7QUFDdEU7QUMxQkssSUFBTWliLFVBQUEsR0FDWEEsQ0FBQ3BWLFVBQUEsRUFBWTdGLFVBQUEsR0FBYSxDQUFDLE1BQzNCLENBQUM7RUFBRWpMLEtBQUE7RUFBT2tCO0FBQVMsTUFBTTtFQUN2QixNQUFNMEcsSUFBQSxHQUFPdlAsV0FBQSxDQUFZeVksVUFBQSxFQUFZOVEsS0FBQSxDQUFNUyxNQUFNO0VBQ2pELE1BQU1xcUIsU0FBQSxHQUFXbHhCLFlBQUEsQ0FBYW9HLEtBQUEsRUFBTzRILElBQUEsRUFBTXFELFVBQVU7RUFFckQsSUFBSTZmLFNBQUEsRUFBVTtJQUNaLE9BQU81cEIsUUFBQSxDQUFTeWpCLElBQUEsQ0FBSy9jLElBQUk7RUFDM0I7RUFFQSxPQUFPMUcsUUFBQSxDQUFTb2xCLE1BQUEsQ0FBTzFlLElBQUEsRUFBTXFELFVBQVU7QUFDekM7QUNqQkssSUFBTWtiLGFBQUEsR0FDWEEsQ0FBQSxLQUNBLENBQUM7RUFBRW5tQixLQUFBO0VBQU9pQztBQUFTLE1BQU07RUFDdkIsTUFBTXpCLE9BQUEsR0FBVVIsS0FBQSxDQUFNUSxPQUFBO0VBRXRCLFNBQVM2RCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJN0QsT0FBQSxDQUFROEQsTUFBQSxFQUFRRCxDQUFBLElBQUssR0FBRztJQUMxQyxNQUFNMFYsTUFBQSxHQUFTdlosT0FBQSxDQUFRNkQsQ0FBQTtJQUN2QixJQUFJbXJCLFFBQUE7SUFJSixJQUFJelYsTUFBQSxDQUFPcFQsSUFBQSxDQUFLeVUsWUFBQSxLQUFpQm9VLFFBQUEsR0FBV3pWLE1BQUEsQ0FBTzBWLFFBQUEsQ0FBU3p2QixLQUFLLElBQUk7TUFDbkUsSUFBSWlDLFFBQUEsRUFBVTtRQUNaLE1BQU1yQixFQUFBLEdBQUtaLEtBQUEsQ0FBTVksRUFBQTtRQUNqQixNQUFNOHVCLE1BQUEsR0FBU0YsUUFBQSxDQUFTM3JCLFNBQUE7UUFFeEIsU0FBUzhyQixDQUFBLEdBQUlELE1BQUEsQ0FBTzNyQixLQUFBLENBQU1PLE1BQUEsR0FBUyxHQUFHcXJCLENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQUssR0FBRztVQUNwRC91QixFQUFBLENBQUdvRCxJQUFBLENBQUswckIsTUFBQSxDQUFPM3JCLEtBQUEsQ0FBTTRyQixDQUFBLEVBQUc1YyxNQUFBLENBQU8yYyxNQUFBLENBQU9FLElBQUEsQ0FBS0QsQ0FBQSxDQUFFLENBQUM7UUFDaEQ7UUFFQSxJQUFJSCxRQUFBLENBQVNsZixJQUFBLEVBQU07VUFDakIsTUFBTTFKLEtBQUEsR0FBUWhHLEVBQUEsQ0FBR1QsR0FBQSxDQUFJc1UsT0FBQSxDQUFRK2EsUUFBQSxDQUFTbG5CLElBQUksRUFBRTFCLEtBQUEsQ0FBTTtVQUVsRGhHLEVBQUEsQ0FBR2laLFdBQUEsQ0FBWTJWLFFBQUEsQ0FBU2xuQixJQUFBLEVBQU1rbkIsUUFBQSxDQUFTam5CLEVBQUEsRUFBSXZJLEtBQUEsQ0FBTVMsTUFBQSxDQUFPNlAsSUFBQSxDQUFLa2YsUUFBQSxDQUFTbGYsSUFBQSxFQUFNMUosS0FBSyxDQUFDO1FBQ3BGLE9BQU87VUFDTGhHLEVBQUEsQ0FBRyttQixNQUFBLENBQU82SCxRQUFBLENBQVNsbkIsSUFBQSxFQUFNa25CLFFBQUEsQ0FBU2puQixFQUFFO1FBQ3RDO01BQ0Y7TUFFQSxPQUFPO0lBQ1Q7RUFDRjtFQUVBLE9BQU87QUFDVDtBQ2xDSyxJQUFNNmQsYUFBQSxHQUNYQSxDQUFBLEtBQ0EsQ0FBQztFQUFFeGxCLEVBQUE7RUFBSXFCO0FBQVMsTUFBTTtFQUNwQixNQUFNO0lBQUUvQjtFQUFVLElBQUlVLEVBQUE7RUFDdEIsTUFBTTtJQUFFbVEsS0FBQTtJQUFPNEI7RUFBTyxJQUFJelMsU0FBQTtFQUUxQixJQUFJNlEsS0FBQSxFQUFPO0lBQ1QsT0FBTztFQUNUO0VBRUEsSUFBSTlPLFFBQUEsRUFBVTtJQUNaMFEsTUFBQSxDQUFPdFAsT0FBQSxDQUFRK0UsS0FBQSxJQUFTO01BQ3RCeEgsRUFBQSxDQUFHMmIsVUFBQSxDQUFXblUsS0FBQSxDQUFNUSxLQUFBLENBQU1ULEdBQUEsRUFBS0MsS0FBQSxDQUFNa04sR0FBQSxDQUFJbk4sR0FBRztJQUM5QyxDQUFDO0VBQ0g7RUFFQSxPQUFPO0FBQ1Q7QUNDSyxJQUFNa2UsU0FBQSxHQUNYQSxDQUFDdlYsVUFBQSxFQUFZekwsT0FBQSxHQUFVLENBQUMsTUFDeEIsQ0FBQztFQUFFekUsRUFBQTtFQUFJWixLQUFBO0VBQU9pQztBQUFTLE1BQU07RUFsQy9CLElBQUFzTCxFQUFBO0VBbUNJLE1BQU07SUFBRThoQixvQkFBQSxHQUF1QjtFQUFNLElBQUlocUIsT0FBQTtFQUN6QyxNQUFNO0lBQUVuRjtFQUFVLElBQUlVLEVBQUE7RUFDdEIsTUFBTWdILElBQUEsR0FBTzNQLFdBQUEsQ0FBWTZZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTTtFQUNqRCxNQUFNO0lBQUVtSSxLQUFBO0lBQU9tSSxLQUFBO0lBQU80QjtFQUFPLElBQUl6UyxTQUFBO0VBRWpDLElBQUksQ0FBQytCLFFBQUEsRUFBVTtJQUNiLE9BQU87RUFDVDtFQUVBLElBQUk4TyxLQUFBLElBQVNzZSxvQkFBQSxFQUFzQjtJQUNqQyxJQUFJO01BQUUvbUIsSUFBQTtNQUFNQztJQUFHLElBQUlySSxTQUFBO0lBQ25CLE1BQU02TSxLQUFBLElBQVFRLEVBQUEsR0FBQTNFLEtBQUEsQ0FBTWhDLEtBQUEsQ0FBTSxFQUFFNkcsSUFBQSxDQUFLeUIsSUFBQSxJQUFRQSxJQUFBLENBQUt0SCxJQUFBLEtBQVNBLElBQUksTUFBN0MsZ0JBQUEyRixFQUFBLENBQWdEUixLQUFBO0lBQzlELE1BQU0zRSxLQUFBLEdBQVFwUSxZQUFBLENBQWE0USxLQUFBLEVBQU9oQixJQUFBLEVBQU1tRixLQUFLO0lBRTdDLElBQUkzRSxLQUFBLEVBQU87TUFDVEUsSUFBQSxHQUFPRixLQUFBLENBQU1FLElBQUE7TUFDYkMsRUFBQSxHQUFLSCxLQUFBLENBQU1HLEVBQUE7SUFDYjtJQUVBM0gsRUFBQSxDQUFHMmIsVUFBQSxDQUFXalUsSUFBQSxFQUFNQyxFQUFBLEVBQUlYLElBQUk7RUFDOUIsT0FBTztJQUNMK0ssTUFBQSxDQUFPdFAsT0FBQSxDQUFRK0UsS0FBQSxJQUFTO01BQ3RCeEgsRUFBQSxDQUFHMmIsVUFBQSxDQUFXblUsS0FBQSxDQUFNUSxLQUFBLENBQU1ULEdBQUEsRUFBS0MsS0FBQSxDQUFNa04sR0FBQSxDQUFJbk4sR0FBQSxFQUFLUCxJQUFJO0lBQ3BELENBQUM7RUFDSDtFQUVBaEgsRUFBQSxDQUFHNGIsZ0JBQUEsQ0FBaUI1VSxJQUFJO0VBRXhCLE9BQU87QUFDVDtBQ2hDSyxJQUFNNlosZ0JBQUEsR0FDWEEsQ0FBQzNRLFVBQUEsRUFBWTdGLFVBQUEsR0FBYSxDQUFDLE1BQzNCLENBQUM7RUFBRXJLLEVBQUE7RUFBSVosS0FBQTtFQUFPaUM7QUFBUyxNQUFNO0VBQzNCLElBQUl1QyxRQUFBLEdBQTRCO0VBQ2hDLElBQUkybUIsUUFBQSxHQUE0QjtFQUVoQyxNQUFNOVosVUFBQSxHQUFhM1ksdUJBQUEsQ0FDakIsT0FBT29ZLFVBQUEsS0FBZSxXQUFXQSxVQUFBLEdBQWFBLFVBQUEsQ0FBV25QLElBQUEsRUFDekQzQixLQUFBLENBQU1TLE1BQ1I7RUFFQSxJQUFJLENBQUM0USxVQUFBLEVBQVk7SUFDZixPQUFPO0VBQ1Q7RUFFQSxJQUFJQSxVQUFBLEtBQWUsUUFBUTtJQUN6QjdNLFFBQUEsR0FBV25NLFdBQUEsQ0FBWXlZLFVBQUEsRUFBd0I5USxLQUFBLENBQU1TLE1BQU07RUFDN0Q7RUFFQSxJQUFJNFEsVUFBQSxLQUFlLFFBQVE7SUFDekI4WixRQUFBLEdBQVdsekIsV0FBQSxDQUFZNlksVUFBQSxFQUF3QjlRLEtBQUEsQ0FBTVMsTUFBTTtFQUM3RDtFQUVBLElBQUl3QixRQUFBLEVBQVU7SUFDWnJCLEVBQUEsQ0FBR1YsU0FBQSxDQUFVeVMsTUFBQSxDQUFPdFAsT0FBQSxDQUFTK0UsS0FBQSxJQUEwQjtNQUNyRCxNQUFNRSxJQUFBLEdBQU9GLEtBQUEsQ0FBTVEsS0FBQSxDQUFNVCxHQUFBO01BQ3pCLE1BQU1JLEVBQUEsR0FBS0gsS0FBQSxDQUFNa04sR0FBQSxDQUFJbk4sR0FBQTtNQUVyQixJQUFJMG5CLE9BQUE7TUFDSixJQUFJQyxRQUFBO01BQ0osSUFBSTFELFdBQUE7TUFDSixJQUFJQyxTQUFBO01BRUosSUFBSXpyQixFQUFBLENBQUdWLFNBQUEsQ0FBVTZRLEtBQUEsRUFBTztRQUN0Qi9RLEtBQUEsQ0FBTUcsR0FBQSxDQUFJa0ksWUFBQSxDQUFhQyxJQUFBLEVBQU1DLEVBQUEsRUFBSSxDQUFDckUsSUFBQSxFQUFZaUUsR0FBQSxLQUFnQjtVQUM1RCxJQUFJM0QsUUFBQSxJQUFZQSxRQUFBLEtBQWFOLElBQUEsQ0FBSzBELElBQUEsRUFBTTtZQUN0Q3drQixXQUFBLEdBQWMxYixJQUFBLENBQUtDLEdBQUEsQ0FBSXhJLEdBQUEsRUFBS0csSUFBSTtZQUNoQytqQixTQUFBLEdBQVkzYixJQUFBLENBQUsrRSxHQUFBLENBQUl0TixHQUFBLEdBQU1qRSxJQUFBLENBQUttUCxRQUFBLEVBQVU5SyxFQUFFO1lBQzVDc25CLE9BQUEsR0FBVTFuQixHQUFBO1lBQ1YybkIsUUFBQSxHQUFXNXJCLElBQUE7VUFDYjtRQUNGLENBQUM7TUFDSCxPQUFPO1FBQ0xsRSxLQUFBLENBQU1HLEdBQUEsQ0FBSWtJLFlBQUEsQ0FBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUksQ0FBQ3JFLElBQUEsRUFBWWlFLEdBQUEsS0FBZ0I7VUFDNUQsSUFBSUEsR0FBQSxHQUFNRyxJQUFBLElBQVE5RCxRQUFBLElBQVlBLFFBQUEsS0FBYU4sSUFBQSxDQUFLMEQsSUFBQSxFQUFNO1lBQ3BEd2tCLFdBQUEsR0FBYzFiLElBQUEsQ0FBS0MsR0FBQSxDQUFJeEksR0FBQSxFQUFLRyxJQUFJO1lBQ2hDK2pCLFNBQUEsR0FBWTNiLElBQUEsQ0FBSytFLEdBQUEsQ0FBSXROLEdBQUEsR0FBTWpFLElBQUEsQ0FBS21QLFFBQUEsRUFBVTlLLEVBQUU7WUFDNUNzbkIsT0FBQSxHQUFVMW5CLEdBQUE7WUFDVjJuQixRQUFBLEdBQVc1ckIsSUFBQTtVQUNiO1VBRUEsSUFBSWlFLEdBQUEsSUFBT0csSUFBQSxJQUFRSCxHQUFBLElBQU9JLEVBQUEsRUFBSTtZQUM1QixJQUFJL0QsUUFBQSxJQUFZQSxRQUFBLEtBQWFOLElBQUEsQ0FBSzBELElBQUEsRUFBTTtjQUN0Q2hILEVBQUEsQ0FBR3dtQixhQUFBLENBQWNqZixHQUFBLEVBQUssUUFBVztnQkFDL0IsR0FBR2pFLElBQUEsQ0FBSzZJLEtBQUE7Z0JBQ1IsR0FBRzlCO2NBQ0wsQ0FBQztZQUNIO1lBRUEsSUFBSWtnQixRQUFBLElBQVlqbkIsSUFBQSxDQUFLMEMsS0FBQSxDQUFNdEMsTUFBQSxFQUFRO2NBQ2pDSixJQUFBLENBQUswQyxLQUFBLENBQU12RCxPQUFBLENBQVM2TCxJQUFBLElBQWU7Z0JBQ2pDLElBQUlpYyxRQUFBLEtBQWFqYyxJQUFBLENBQUt0SCxJQUFBLEVBQU07a0JBQzFCLE1BQU1tb0IsWUFBQSxHQUFlcmYsSUFBQSxDQUFLQyxHQUFBLENBQUl4SSxHQUFBLEVBQUtHLElBQUk7a0JBQ3ZDLE1BQU0wbkIsVUFBQSxHQUFhdGYsSUFBQSxDQUFLK0UsR0FBQSxDQUFJdE4sR0FBQSxHQUFNakUsSUFBQSxDQUFLbVAsUUFBQSxFQUFVOUssRUFBRTtrQkFFbkQzSCxFQUFBLENBQUd3cUIsT0FBQSxDQUNEMkUsWUFBQSxFQUNBQyxVQUFBLEVBQ0E3RSxRQUFBLENBQVNqVCxNQUFBLENBQU87b0JBQ2QsR0FBR2hKLElBQUEsQ0FBS25DLEtBQUE7b0JBQ1IsR0FBRzlCO2tCQUNMLENBQUMsQ0FDSDtnQkFDRjtjQUNGLENBQUM7WUFDSDtVQUNGO1FBQ0YsQ0FBQztNQUNIO01BRUEsSUFBSTZrQixRQUFBLEVBQVU7UUFDWixJQUFJRCxPQUFBLEtBQVksUUFBVztVQUN6Qmp2QixFQUFBLENBQUd3bUIsYUFBQSxDQUFjeUksT0FBQSxFQUFTLFFBQVc7WUFDbkMsR0FBR0MsUUFBQSxDQUFTL2lCLEtBQUE7WUFDWixHQUFHOUI7VUFDTCxDQUFDO1FBQ0g7UUFFQSxJQUFJa2dCLFFBQUEsSUFBWTJFLFFBQUEsQ0FBU2xwQixLQUFBLENBQU10QyxNQUFBLEVBQVE7VUFDckN3ckIsUUFBQSxDQUFTbHBCLEtBQUEsQ0FBTXZELE9BQUEsQ0FBUzZMLElBQUEsSUFBZTtZQUNyQyxJQUFJaWMsUUFBQSxLQUFhamMsSUFBQSxDQUFLdEgsSUFBQSxFQUFNO2NBQzFCaEgsRUFBQSxDQUFHd3FCLE9BQUEsQ0FDRGdCLFdBQUEsRUFDQUMsU0FBQSxFQUNBbEIsUUFBQSxDQUFTalQsTUFBQSxDQUFPO2dCQUNkLEdBQUdoSixJQUFBLENBQUtuQyxLQUFBO2dCQUNSLEdBQUc5QjtjQUNMLENBQUMsQ0FDSDtZQUNGO1VBQ0YsQ0FBQztRQUNIO01BQ0Y7SUFDRixDQUFDO0VBQ0g7RUFFQSxPQUFPO0FBQ1Q7QXZHdkhLLElBQU1xYixNQUFBLEdBQ1hBLENBQUN4VixVQUFBLEVBQVk3RixVQUFBLEdBQWEsQ0FBQyxNQUMzQixDQUFDO0VBQUVqTCxLQUFBO0VBQU9pQztBQUFTLE1BQU07RUFDdkIsTUFBTTJGLElBQUEsR0FBT3ZQLFdBQUEsQ0FBWXlZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTTtFQUVqRCxXQUFPdEIsaUJBQUEsQ0FBQW1uQixNQUFBLEVBQWUxZSxJQUFBLEVBQU1xRCxVQUFVLEVBQUVqTCxLQUFBLEVBQU9pQyxRQUFRO0FBQ3pEO0FDTkssSUFBTXNrQixVQUFBLEdBQ1hBLENBQUN6VixVQUFBLEVBQVk3RixVQUFBLEdBQWEsQ0FBQyxNQUMzQixDQUFDO0VBQUVqTCxLQUFBO0VBQU9pQztBQUFTLE1BQU07RUFDdkIsTUFBTTJGLElBQUEsR0FBT3ZQLFdBQUEsQ0FBWXlZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTTtFQUVqRCxXQUFPckIsbUJBQUEsQ0FBQW1uQixVQUFBLEVBQW1CM2UsSUFBQSxFQUFNcUQsVUFBVSxFQUFFakwsS0FBQSxFQUFPaUMsUUFBUTtBQUM3RDtBdUdyQkssSUFBTW9nQixRQUFBLEdBQVdqdEIsU0FBQSxDQUFVOGlCLE1BQUEsQ0FBTztFQUN2Q3ZXLElBQUEsRUFBTTtFQUVOb2UsWUFBQSxFQUFjO0lBQ1osT0FBTztNQUNMLEdBQUdrRDtJQUNMO0VBQ0Y7QUFDRixDQUFDO0F0R0xNLElBQU1YLE1BQUEsR0FBU2x0QixTQUFBLENBQVU4aUIsTUFBQSxDQUFPO0VBQ3JDdlcsSUFBQSxFQUFNO0VBRU5pZ0IsU0FBUztJQUFFM2hCLFdBQUE7SUFBYWd3QjtFQUFxQixHQUFHO0lBWGxELElBQUExaUIsRUFBQSxFQUFBaUIsRUFBQSxFQUFBMGhCLEVBQUE7SUFZSSxNQUFNbnVCLFFBQUEsR0FBV0EsQ0FBQSxLQUFNO01BWjNCLElBQUF3TSxHQUFBLEVBQUE0aEIsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLEVBQUE7TUFhTSxLQUNFQSxFQUFBLElBQUFELEdBQUEsSUFBQUQsR0FBQSxJQUFBNWhCLEdBQUEsUUFBS3hOLE1BQUEsQ0FBT3NFLE9BQUEsQ0FBUWlyQixvQkFBQSxLQUFwQixnQkFBQS9oQixHQUFBLENBQTBDb1osTUFBQSxLQUExQyxnQkFBQXdJLEdBQUEsQ0FBa0RJLGlCQUFBLEtBQWxELGdCQUFBSCxHQUFBLENBQUF2ZSxJQUFBLENBQUFzZSxHQUFBLEVBQXNFbHdCLFdBQUEsTUFBdEUsT0FBQW93QixFQUFBLEdBQ0Fwd0IsV0FBQSxDQUFZK0IsT0FBQSxDQUFRLFNBQVMsR0FDN0I7UUFDQTtNQUNGO01BQ0EsTUFBTXd1QixlQUFBLEdBQWtCdDZCLHVCQUFBLENBQXdCK0osV0FBQSxDQUFZeUksTUFBQSxFQUFRLENBQUN6SSxXQUFBLEVBQWEsR0FBR2d3QixvQkFBb0IsQ0FBQztNQUMxRyxNQUFNbGUsT0FBQSxHQUFVcGEsZ0JBQUEsQ0FBaUI2NEIsZUFBZTtNQUVoRHplLE9BQUEsQ0FBUTFPLE9BQUEsQ0FBUTRPLE1BQUEsSUFBVTtRQUN4QixJQUNFdWUsZUFBQSxDQUFnQmhlLE9BQUEsQ0FBUWllLFNBQUEsQ0FBVXhlLE1BQUEsQ0FBT0ssUUFBQSxDQUFTaEssSUFBSSxFQUFFb29CLFlBQUEsSUFDeERGLGVBQUEsQ0FBZ0JoZSxPQUFBLENBQVFpZSxTQUFBLENBQVV4ZSxNQUFBLENBQU9LLFFBQUEsQ0FBUy9KLEVBQUUsRUFBRW9vQixhQUFBLEVBQ3REO1VBQ0FILGVBQUEsQ0FBZ0I5bkIsTUFBQSxDQUFPTCxZQUFBLENBQWE0SixNQUFBLENBQU9LLFFBQUEsQ0FBU2hLLElBQUEsRUFBTTJKLE1BQUEsQ0FBT0ssUUFBQSxDQUFTL0osRUFBQSxFQUFJLENBQUNyRSxJQUFBLEVBQU1vRSxJQUFBLEtBQVM7WUFDNUYsTUFBTUMsRUFBQSxHQUFLRCxJQUFBLEdBQU9wRSxJQUFBLENBQUttUCxRQUFBLEdBQVc7WUFDbEMsTUFBTXVkLGtCQUFBLEdBQXFCM2UsTUFBQSxDQUFPSyxRQUFBLENBQVNoSyxJQUFBLElBQVFBLElBQUEsSUFBUUMsRUFBQSxJQUFNMEosTUFBQSxDQUFPSyxRQUFBLENBQVMvSixFQUFBO1lBRWpGLEtBQUt4SCxNQUFBLENBQU9xQyxJQUFBLENBQUssVUFBVTtjQUN6QndFLElBQUEsRUFBTTtjQUNOMUQsSUFBQTtjQUNBb0UsSUFBQTtjQUNBQyxFQUFBO2NBQ0Fzb0IsT0FBQSxFQUFTTCxlQUFBLENBQWdCaGUsT0FBQSxDQUFROVEsR0FBQSxDQUFJNEcsSUFBSTtjQUN6QzhRLEtBQUEsRUFBT29YLGVBQUEsQ0FBZ0JoZSxPQUFBLENBQVE5USxHQUFBLENBQUk2RyxFQUFFO2NBQ3JDdW9CLFlBQUEsRUFBYzdlLE1BQUEsQ0FBT0ssUUFBQTtjQUNyQkMsUUFBQSxFQUFVTixNQUFBLENBQU9NLFFBQUE7Y0FDakJ3ZSxPQUFBLEVBQVMsQ0FBQ0gsa0JBQUE7Y0FDVjd2QixNQUFBLEVBQVEsS0FBS0EsTUFBQTtjQUNiZCxXQUFBO2NBQ0Erd0IsaUJBQUEsRUFBbUJSO1lBQ3JCLENBQUM7VUFDSCxDQUFDO1FBQ0g7TUFDRixDQUFDO01BRUQsTUFBTWhlLE9BQUEsR0FBVWdlLGVBQUEsQ0FBZ0JoZSxPQUFBO01BQ2hDZ2UsZUFBQSxDQUFnQnpzQixLQUFBLENBQU1WLE9BQUEsQ0FBUSxDQUFDVyxJQUFBLEVBQU1xTCxLQUFBLEtBQVU7UUFsRHJELElBQUE0aEIsR0FBQSxFQUFBQyxHQUFBO1FBbURRLElBQUlsdEIsSUFBQSxZQUFnQjNFLGlCQUFBLENBQUE4eEIsY0FBQSxFQUFnQjtVQUNsQyxNQUFNdmUsUUFBQSxHQUFXSixPQUFBLENBQVFsTixLQUFBLENBQU0rSixLQUFLLEVBQUUzTixHQUFBLENBQUlzQyxJQUFBLENBQUtzRSxJQUFBLEVBQU0sRUFBRTtVQUN2RCxNQUFNdUssTUFBQSxHQUFTTCxPQUFBLENBQVFsTixLQUFBLENBQU0rSixLQUFLLEVBQUUzTixHQUFBLENBQUlzQyxJQUFBLENBQUt1RSxFQUFFO1VBQy9DLE1BQU11SyxRQUFBLEdBQVdOLE9BQUEsQ0FBUU8sTUFBQSxDQUFPLEVBQUVyUixHQUFBLENBQUlrUixRQUFBLEVBQVUsRUFBRTtVQUNsRCxNQUFNSSxNQUFBLEdBQVNSLE9BQUEsQ0FBUU8sTUFBQSxDQUFPLEVBQUVyUixHQUFBLENBQUltUixNQUFNO1VBRTFDLE1BQU11ZSxlQUFBLElBQWtCSCxHQUFBLEdBQUFULGVBQUEsQ0FBZ0Jyd0IsR0FBQSxDQUFJdXVCLE1BQUEsQ0FBTzliLFFBQUEsR0FBVyxDQUFDLE1BQXZDLGdCQUFBcWUsR0FBQSxDQUEwQ3JxQixLQUFBLENBQU13TCxJQUFBLENBQUtsRCxJQUFBLElBQVFBLElBQUEsQ0FBS2laLEVBQUEsQ0FBR25rQixJQUFBLENBQUtrTCxJQUFJO1VBQ3RHLE1BQU1taUIsY0FBQSxJQUFpQkgsR0FBQSxHQUFBVixlQUFBLENBQWdCcndCLEdBQUEsQ0FBSXV1QixNQUFBLENBQU83YixNQUFNLE1BQWpDLGdCQUFBcWUsR0FBQSxDQUFvQ3RxQixLQUFBLENBQU13TCxJQUFBLENBQUtsRCxJQUFBLElBQVFBLElBQUEsQ0FBS2laLEVBQUEsQ0FBR25rQixJQUFBLENBQUtrTCxJQUFJO1VBRS9GLEtBQUtuTyxNQUFBLENBQU9xQyxJQUFBLENBQUssVUFBVTtZQUN6QndFLElBQUEsRUFBTTtZQUNOc0gsSUFBQSxFQUFNbEwsSUFBQSxDQUFLa0wsSUFBQTtZQUNYNUcsSUFBQSxFQUFNdEUsSUFBQSxDQUFLc0UsSUFBQTtZQUNYQyxFQUFBLEVBQUl2RSxJQUFBLENBQUt1RSxFQUFBO1lBQ1R1b0IsWUFBQSxFQUFjO2NBQ1p4b0IsSUFBQSxFQUFNd0ssUUFBQTtjQUNOdkssRUFBQSxFQUFJeUs7WUFDTjtZQUNBVCxRQUFBLEVBQVU7Y0FDUmpLLElBQUEsRUFBTXNLLFFBQUE7Y0FDTnJLLEVBQUEsRUFBSXNLO1lBQ047WUFDQWtlLE9BQUEsRUFBU3prQixPQUFBLENBQVEra0IsY0FBQSxJQUFrQkQsZUFBZTtZQUNsRHJ3QixNQUFBLEVBQVEsS0FBS0EsTUFBQTtZQUNiZCxXQUFBO1lBQ0Erd0IsaUJBQUEsRUFBbUJSO1VBQ3JCLENBQUM7UUFDSDtNQUNGLENBQUM7SUFDSDtJQUVBLEtBQUlOLEVBQUEsSUFBQTFoQixFQUFBLElBQUFqQixFQUFBLFFBQUt4TSxNQUFBLENBQU9zRSxPQUFBLENBQVFpckIsb0JBQUEsS0FBcEIsZ0JBQUEvaUIsRUFBQSxDQUEwQ29hLE1BQUEsS0FBMUMsZ0JBQUFuWixFQUFBLENBQWtEOGlCLEtBQUEsS0FBbEQsT0FBQXBCLEVBQUEsR0FBMkQsTUFBTTtNQUNuRXRWLFVBQUEsQ0FBVzdZLFFBQUEsRUFBVSxDQUFDO0lBQ3hCLE9BQU87TUFDTEEsUUFBQSxDQUFTO0lBQ1g7RUFDRjtBQUNGLENBQUM7QUNwRk0sSUFBTXdnQixJQUFBLEdBQU9udEIsU0FBQSxDQUFVOGlCLE1BQUEsQ0FBTztFQUNuQ3ZXLElBQUEsRUFBTTtFQUVObWYsc0JBQUEsRUFBd0I7SUFDdEIsT0FBTyxDQUNMLElBQUl4aEIsY0FBQSxDQUFBZ2IsTUFBQSxDQUFPO01BQ1Q3TyxHQUFBLEVBQUssSUFBSW5NLGNBQUEsQ0FBQXlqQixTQUFBLENBQVUsWUFBWTtNQUUvQmppQixLQUFBLEVBQU87UUFDTHl3QixVQUFBLEVBQVlBLENBQUNwZixDQUFBLEVBQUcvSyxDQUFBLEVBQUc5QixLQUFBLEVBQU9rc0IsS0FBQSxLQUFVO1VBQ2xDLEtBQUt6d0IsTUFBQSxDQUFPcUMsSUFBQSxDQUFLLFFBQVE7WUFDdkJyQyxNQUFBLEVBQVEsS0FBS0EsTUFBQTtZQUNibUMsS0FBQSxFQUFPa0UsQ0FBQTtZQUNQOUIsS0FBQTtZQUNBa3NCO1VBQ0YsQ0FBQztRQUNIO01BQ0Y7SUFDRixDQUFDLEVBQ0g7RUFDRjtBQUNGLENBQUM7QUNyQk0sSUFBTWhQLFFBQUEsR0FBV3B0QixTQUFBLENBQVU4aUIsTUFBQSxDQUFPO0VBQ3ZDdlcsSUFBQSxFQUFNO0VBRU5tZixzQkFBQSxFQUF3QjtJQUN0QixPQUFPLENBQ0wsSUFBSXZoQixjQUFBLENBQUErYSxNQUFBLENBQU87TUFDVDdPLEdBQUEsRUFBSyxJQUFJbE0sY0FBQSxDQUFBd2pCLFNBQUEsQ0FBVSxVQUFVO01BQzdCamlCLEtBQUEsRUFBTztRQUNMMndCLFFBQUEsRUFBVUEsQ0FBQSxLQUFNLEtBQUsxd0IsTUFBQSxDQUFPc0UsT0FBQSxDQUFRb3NCO01BQ3RDO0lBQ0YsQ0FBQyxFQUNIO0VBQ0Y7QUFDRixDQUFDO0FDYk0sSUFBTTVPLG9CQUFBLEdBQXVCLElBQUlyakIsY0FBQSxDQUFBdWpCLFNBQUEsQ0FBVSxhQUFhO0FBRXhELElBQU1OLFdBQUEsR0FBY3J0QixTQUFBLENBQVU4aUIsTUFBQSxDQUFPO0VBQzFDdlcsSUFBQSxFQUFNO0VBRU5tZixzQkFBQSxFQUF3QjtJQUN0QixNQUFNO01BQUUvZjtJQUFPLElBQUk7SUFFbkIsT0FBTyxDQUNMLElBQUl2QixjQUFBLENBQUE4YSxNQUFBLENBQU87TUFDVDdPLEdBQUEsRUFBS29YLG9CQUFBO01BQ0wvaEIsS0FBQSxFQUFPO1FBQ0xrYSxlQUFBLEVBQWlCO1VBQ2YrSSxLQUFBLEVBQU9BLENBQUMxaUIsSUFBQSxFQUFNNkIsS0FBQSxLQUFpQjtZQUM3Qm5DLE1BQUEsQ0FBTzJ3QixTQUFBLEdBQVk7WUFFbkIsTUFBTXp4QixXQUFBLEdBQWNjLE1BQUEsQ0FBT2YsS0FBQSxDQUFNWSxFQUFBLENBQUd5WixPQUFBLENBQVEsU0FBUztjQUFFblg7WUFBTSxDQUFDLEVBQUVtWCxPQUFBLENBQVEsZ0JBQWdCLEtBQUs7WUFFN0ZoWixJQUFBLENBQUtZLFFBQUEsQ0FBU2hDLFdBQVc7WUFFekIsT0FBTztVQUNUO1VBQ0FpakIsSUFBQSxFQUFNQSxDQUFDN2hCLElBQUEsRUFBTTZCLEtBQUEsS0FBaUI7WUFDNUJuQyxNQUFBLENBQU8yd0IsU0FBQSxHQUFZO1lBRW5CLE1BQU16eEIsV0FBQSxHQUFjYyxNQUFBLENBQU9mLEtBQUEsQ0FBTVksRUFBQSxDQUFHeVosT0FBQSxDQUFRLFFBQVE7Y0FBRW5YO1lBQU0sQ0FBQyxFQUFFbVgsT0FBQSxDQUFRLGdCQUFnQixLQUFLO1lBRTVGaFosSUFBQSxDQUFLWSxRQUFBLENBQVNoQyxXQUFXO1lBRXpCLE9BQU87VUFDVDtRQUNGO01BQ0Y7SUFDRixDQUFDLEVBQ0g7RUFDRjtBQUNGLENBQUM7QUMvQk0sSUFBTXlpQixNQUFBLEdBQVN0dEIsU0FBQSxDQUFVOGlCLE1BQUEsQ0FBTztFQUNyQ3ZXLElBQUEsRUFBTTtFQUVOd2UscUJBQUEsRUFBdUI7SUFDckIsTUFBTXdSLGVBQUEsR0FBa0JBLENBQUEsS0FDdEIsS0FBSzV3QixNQUFBLENBQU9HLFFBQUEsQ0FBUzRpQixLQUFBLENBQU0sQ0FBQztNQUFFNWlCO0lBQVMsTUFBTSxDQUMzQyxNQUFNQSxRQUFBLENBQVNpbEIsYUFBQSxDQUFjLEdBRzdCLE1BQ0VqbEIsUUFBQSxDQUFTbWlCLE9BQUEsQ0FBUSxDQUFDO01BQUV6aUI7SUFBRyxNQUFNO01BQzNCLE1BQU07UUFBRVYsU0FBQTtRQUFXQztNQUFJLElBQUlTLEVBQUE7TUFDM0IsTUFBTTtRQUFFbVEsS0FBQTtRQUFPbUY7TUFBUSxJQUFJaFcsU0FBQTtNQUMzQixNQUFNO1FBQUVpSSxHQUFBO1FBQUthO01BQU8sSUFBSWtOLE9BQUE7TUFDeEIsTUFBTUUsVUFBQSxHQUFhRixPQUFBLENBQVFsTixNQUFBLENBQU9sQixXQUFBLElBQWVLLEdBQUEsR0FBTSxJQUFJdkgsRUFBQSxDQUFHVCxHQUFBLENBQUlzVSxPQUFBLENBQVF0TSxHQUFBLEdBQU0sQ0FBQyxJQUFJK04sT0FBQTtNQUNyRixNQUFNMGIsaUJBQUEsR0FBb0J4YixVQUFBLENBQVdwTixNQUFBLENBQU9wQixJQUFBLENBQUtqQixJQUFBLENBQUswSCxTQUFBO01BRXRELE1BQU13akIsU0FBQSxHQUFZM2IsT0FBQSxDQUFRL04sR0FBQSxHQUFNK04sT0FBQSxDQUFRaEMsWUFBQTtNQUV4QyxNQUFNNGQsU0FBQSxHQUNKRixpQkFBQSxJQUFxQnhiLFVBQUEsQ0FBV3BOLE1BQUEsQ0FBT3dLLFVBQUEsS0FBZSxJQUNsRHFlLFNBQUEsS0FBYzNiLE9BQUEsQ0FBUS9OLEdBQUEsR0FDdEIxSSxjQUFBLENBQUFxWSxTQUFBLENBQVVDLE9BQUEsQ0FBUTVYLEdBQUcsRUFBRW1JLElBQUEsS0FBU0gsR0FBQTtNQUV0QyxJQUNFLENBQUM0SSxLQUFBLElBQ0QsQ0FBQy9ILE1BQUEsQ0FBT3BCLElBQUEsQ0FBS0UsV0FBQSxJQUNia0IsTUFBQSxDQUFPa00sV0FBQSxDQUFZNVEsTUFBQSxJQUNuQixDQUFDd3RCLFNBQUEsSUFDQUEsU0FBQSxJQUFhNWIsT0FBQSxDQUFRbE4sTUFBQSxDQUFPcEIsSUFBQSxDQUFLakcsSUFBQSxLQUFTLGFBQzNDO1FBQ0EsT0FBTztNQUNUO01BRUEsT0FBT1QsUUFBQSxDQUFTa2lCLFVBQUEsQ0FBVztJQUM3QixDQUFDLEdBRUgsTUFBTWxpQixRQUFBLENBQVN3aUIsZUFBQSxDQUFnQixHQUMvQixNQUFNeGlCLFFBQUEsQ0FBU2dqQixZQUFBLENBQWEsR0FDNUIsTUFBTWhqQixRQUFBLENBQVNna0Isa0JBQUEsQ0FBbUIsRUFDbkM7SUFFSCxNQUFNNk0sWUFBQSxHQUFlQSxDQUFBLEtBQ25CLEtBQUtoeEIsTUFBQSxDQUFPRyxRQUFBLENBQVM0aUIsS0FBQSxDQUFNLENBQUM7TUFBRTVpQjtJQUFTLE1BQU0sQ0FDM0MsTUFBTUEsUUFBQSxDQUFTd2lCLGVBQUEsQ0FBZ0IsR0FDL0IsTUFBTXhpQixRQUFBLENBQVNzaUIsaUJBQUEsQ0FBa0IsR0FDakMsTUFBTXRpQixRQUFBLENBQVNrakIsV0FBQSxDQUFZLEdBQzNCLE1BQU1sakIsUUFBQSxDQUFTaWtCLGlCQUFBLENBQWtCLEVBQ2xDO0lBRUgsTUFBTTZNLFdBQUEsR0FBY0EsQ0FBQSxLQUNsQixLQUFLanhCLE1BQUEsQ0FBT0csUUFBQSxDQUFTNGlCLEtBQUEsQ0FBTSxDQUFDO01BQUU1aUI7SUFBUyxNQUFNLENBQzNDLE1BQU1BLFFBQUEsQ0FBUzRqQixhQUFBLENBQWMsR0FDN0IsTUFBTTVqQixRQUFBLENBQVNvaUIsbUJBQUEsQ0FBb0IsR0FDbkMsTUFBTXBpQixRQUFBLENBQVMwakIsY0FBQSxDQUFlLEdBQzlCLE1BQU0xakIsUUFBQSxDQUFTMmtCLFVBQUEsQ0FBVyxFQUMzQjtJQUVILE1BQU1vTSxVQUFBLEdBQWE7TUFDakJDLEtBQUEsRUFBT0YsV0FBQTtNQUNQLGFBQWFHLENBQUEsS0FBTSxLQUFLcHhCLE1BQUEsQ0FBT0csUUFBQSxDQUFTMGlCLFFBQUEsQ0FBUztNQUNqRHdPLFNBQUEsRUFBV1QsZUFBQTtNQUNYLGlCQUFpQkEsZUFBQTtNQUNqQixtQkFBbUJBLGVBQUE7TUFDbkJyUCxNQUFBLEVBQVF5UCxZQUFBO01BQ1IsY0FBY0EsWUFBQTtNQUNkLFNBQVNNLENBQUEsS0FBTSxLQUFLdHhCLE1BQUEsQ0FBT0csUUFBQSxDQUFTK2pCLFNBQUEsQ0FBVTtJQUNoRDtJQUVBLE1BQU1xTixRQUFBLEdBQVc7TUFDZixHQUFHTDtJQUNMO0lBRUEsTUFBTU0sU0FBQSxHQUFZO01BQ2hCLEdBQUdOLFVBQUE7TUFDSCxVQUFVTixlQUFBO01BQ1YsaUJBQWlCQSxlQUFBO01BQ2pCLFVBQVVJLFlBQUE7TUFDVixzQkFBc0JBLFlBQUE7TUFDdEIsY0FBY0EsWUFBQTtNQUNkLFNBQVNBLFlBQUE7TUFDVCxVQUFVUyxDQUFBLEtBQU0sS0FBS3p4QixNQUFBLENBQU9HLFFBQUEsQ0FBU29rQixvQkFBQSxDQUFxQjtNQUMxRCxVQUFVbU4sQ0FBQSxLQUFNLEtBQUsxeEIsTUFBQSxDQUFPRyxRQUFBLENBQVNta0Isa0JBQUEsQ0FBbUI7SUFDMUQ7SUFFQSxJQUFJanJCLEtBQUEsQ0FBTSxLQUFLVixPQUFBLENBQVEsR0FBRztNQUN4QixPQUFPNjRCLFNBQUE7SUFDVDtJQUVBLE9BQU9ELFFBQUE7RUFDVDtFQUVBeFIsc0JBQUEsRUFBd0I7SUFDdEIsT0FBTyxDQU1MLElBQUlyaEIsY0FBQSxDQUFBNmEsTUFBQSxDQUFPO01BQ1Q3TyxHQUFBLEVBQUssSUFBSWhNLGNBQUEsQ0FBQXNqQixTQUFBLENBQVUsZUFBZTtNQUNsQzlELGlCQUFBLEVBQW1CQSxDQUFDcmIsWUFBQSxFQUFjc2IsUUFBQSxFQUFVd1QsUUFBQSxLQUFhO1FBQ3ZELElBQUk5dUIsWUFBQSxDQUFhd08sSUFBQSxDQUFLdWdCLEdBQUEsSUFBTUEsR0FBQSxDQUFHM3dCLE9BQUEsQ0FBUSxhQUFhLENBQUMsR0FBRztVQUN0RDtRQUNGO1FBRUEsTUFBTTR3QixVQUFBLEdBQWFodkIsWUFBQSxDQUFhd08sSUFBQSxDQUFLblMsV0FBQSxJQUFlQSxXQUFBLENBQVk2YSxVQUFVLEtBQUssQ0FBQ29FLFFBQUEsQ0FBUy9lLEdBQUEsQ0FBSWdvQixFQUFBLENBQUd1SyxRQUFBLENBQVN2eUIsR0FBRztRQUU1RyxNQUFNMHlCLFFBQUEsR0FBV2p2QixZQUFBLENBQWF3TyxJQUFBLENBQUtuUyxXQUFBLElBQWVBLFdBQUEsQ0FBWStCLE9BQUEsQ0FBUSxzQkFBc0IsQ0FBQztRQUU3RixJQUFJLENBQUM0d0IsVUFBQSxJQUFjQyxRQUFBLEVBQVU7VUFDM0I7UUFDRjtRQUVBLE1BQU07VUFBRTloQixLQUFBO1VBQU96SSxJQUFBO1VBQU1DO1FBQUcsSUFBSTJXLFFBQUEsQ0FBU2hmLFNBQUE7UUFDckMsTUFBTTR5QixPQUFBLEdBQVVyekIsY0FBQSxDQUFBcVksU0FBQSxDQUFVQyxPQUFBLENBQVFtSCxRQUFBLENBQVMvZSxHQUFHLEVBQUVtSSxJQUFBO1FBQ2hELE1BQU15cUIsTUFBQSxHQUFTdHpCLGNBQUEsQ0FBQXFZLFNBQUEsQ0FBVUcsS0FBQSxDQUFNaUgsUUFBQSxDQUFTL2UsR0FBRyxFQUFFb0ksRUFBQTtRQUM3QyxNQUFNeXFCLGNBQUEsR0FBaUIxcUIsSUFBQSxLQUFTd3FCLE9BQUEsSUFBV3ZxQixFQUFBLEtBQU93cUIsTUFBQTtRQUVsRCxJQUFJaGlCLEtBQUEsSUFBUyxDQUFDaWlCLGNBQUEsRUFBZ0I7VUFDNUI7UUFDRjtRQUVBLE1BQU1DLE9BQUEsR0FBVXA1QixXQUFBLENBQVk2NEIsUUFBQSxDQUFTdnlCLEdBQUc7UUFFeEMsSUFBSSxDQUFDOHlCLE9BQUEsRUFBUztVQUNaO1FBQ0Y7UUFFQSxNQUFNcnlCLEVBQUEsR0FBSzh4QixRQUFBLENBQVM5eEIsRUFBQTtRQUNwQixNQUFNWixLQUFBLEdBQVE3SixvQkFBQSxDQUFxQjtVQUNqQzZKLEtBQUEsRUFBTzB5QixRQUFBO1VBQ1B6eUIsV0FBQSxFQUFhVztRQUNmLENBQUM7UUFDRCxNQUFNO1VBQUVNO1FBQVMsSUFBSSxJQUFJaE0sY0FBQSxDQUFlO1VBQ3RDNkwsTUFBQSxFQUFRLEtBQUtBLE1BQUE7VUFDYmY7UUFDRixDQUFDO1FBRURrQixRQUFBLENBQVNraUIsVUFBQSxDQUFXO1FBRXBCLElBQUksQ0FBQ3hpQixFQUFBLENBQUdtRCxLQUFBLENBQU1PLE1BQUEsRUFBUTtVQUNwQjtRQUNGO1FBRUEsT0FBTzFELEVBQUE7TUFDVDtJQUNGLENBQUMsRUFDSDtFQUNGO0FBQ0YsQ0FBQztBQzNKTSxJQUFNK2hCLEtBQUEsR0FBUXZ0QixTQUFBLENBQVU4aUIsTUFBQSxDQUFPO0VBQ3BDdlcsSUFBQSxFQUFNO0VBRU5tZixzQkFBQSxFQUF3QjtJQUN0QixPQUFPLENBQ0wsSUFBSXBoQixjQUFBLENBQUE0YSxNQUFBLENBQU87TUFDVDdPLEdBQUEsRUFBSyxJQUFJL0wsY0FBQSxDQUFBcWpCLFNBQUEsQ0FBVSxhQUFhO01BRWhDamlCLEtBQUEsRUFBTztRQUNMb3lCLFdBQUEsRUFBYUEsQ0FBQ25VLEtBQUEsRUFBTzNYLENBQUEsRUFBRzlCLEtBQUEsS0FBVTtVQUNoQyxLQUFLdkUsTUFBQSxDQUFPcUMsSUFBQSxDQUFLLFNBQVM7WUFDeEJyQyxNQUFBLEVBQVEsS0FBS0EsTUFBQTtZQUNibUMsS0FBQSxFQUFPa0UsQ0FBQTtZQUNQOUI7VUFDRixDQUFDO1FBQ0g7TUFDRjtJQUNGLENBQUMsRUFDSDtFQUNGO0FBQ0YsQ0FBQztBQ3BCTSxJQUFNc2QsUUFBQSxHQUFXeHRCLFNBQUEsQ0FBVThpQixNQUFBLENBQU87RUFDdkN2VyxJQUFBLEVBQU07RUFFTm1mLHNCQUFBLEVBQXdCO0lBQ3RCLE9BQU8sQ0FDTCxJQUFJbmhCLGNBQUEsQ0FBQTJhLE1BQUEsQ0FBTztNQUNUN08sR0FBQSxFQUFLLElBQUk5TCxjQUFBLENBQUFvakIsU0FBQSxDQUFVLFVBQVU7TUFDN0JqaUIsS0FBQSxFQUFPO1FBQ0xtSyxVQUFBLEVBQVlBLENBQUEsS0FBbUMsS0FBS2xLLE1BQUEsQ0FBTzZkLFVBQUEsR0FBYTtVQUFFdVUsUUFBQSxFQUFVO1FBQUksSUFBSSxDQUFDO01BQy9GO0lBQ0YsQ0FBQyxFQUNIO0VBQ0Y7QUFDRixDQUFDO0FpR1pNLElBQU12OUIsT0FBQSxHQUFOLE1BQU13OUIsUUFBQSxDQUFRO0VBV25CdnlCLFlBQVlzSCxHQUFBLEVBQWtCcEgsTUFBQSxFQUFnQndQLE9BQUEsR0FBVSxPQUFPck0sSUFBQSxHQUFvQixNQUFNO0lBT3pGLEtBQVEwUSxXQUFBLEdBQTJCO0lBVW5DLEtBQU95ZSxXQUFBLEdBQTZCO0lBaEJsQyxLQUFLOWlCLE9BQUEsR0FBVUEsT0FBQTtJQUNmLEtBQUsraUIsV0FBQSxHQUFjbnJCLEdBQUE7SUFDbkIsS0FBS3BILE1BQUEsR0FBU0EsTUFBQTtJQUNkLEtBQUs2VCxXQUFBLEdBQWMxUSxJQUFBO0VBQ3JCO0VBVEEsSUFBWXZDLEtBQUEsRUFBZTtJQUN6QixPQUFPLEtBQUt1QyxJQUFBLENBQUswRCxJQUFBLENBQUtqRyxJQUFBO0VBQ3hCO0VBV0EsSUFBSXVDLEtBQUEsRUFBYTtJQUNmLE9BQU8sS0FBSzBRLFdBQUEsSUFBZSxLQUFLMGUsV0FBQSxDQUFZcHZCLElBQUEsQ0FBSztFQUNuRDtFQUVBLElBQUlxdkIsUUFBQSxFQUF1QjtJQUN6QixPQUFPLEtBQUt4eUIsTUFBQSxDQUFPTSxJQUFBLENBQUtteUIsUUFBQSxDQUFTLEtBQUtyckIsR0FBRyxFQUFFakUsSUFBQTtFQUM3QztFQUlBLElBQUl1RSxNQUFBLEVBQWdCO0lBbkN0QixJQUFBOEUsRUFBQTtJQW9DSSxRQUFPQSxFQUFBLFFBQUs4bEIsV0FBQSxLQUFMLE9BQUE5bEIsRUFBQSxHQUFvQixLQUFLK2xCLFdBQUEsQ0FBWTdxQixLQUFBO0VBQzlDO0VBRUEsSUFBSU4sSUFBQSxFQUFjO0lBQ2hCLE9BQU8sS0FBS21yQixXQUFBLENBQVluckIsR0FBQTtFQUMxQjtFQUVBLElBQUkvQyxRQUFBLEVBQW9CO0lBQ3RCLE9BQU8sS0FBS2xCLElBQUEsQ0FBS2tCLE9BQUE7RUFDbkI7RUFFQSxJQUFJQSxRQUFRQSxPQUFBLEVBQWtCO0lBQzVCLElBQUlrRCxJQUFBLEdBQU8sS0FBS0EsSUFBQTtJQUNoQixJQUFJQyxFQUFBLEdBQUssS0FBS0EsRUFBQTtJQUVkLElBQUksS0FBS2dJLE9BQUEsRUFBUztNQUNoQixJQUFJLEtBQUtuTCxPQUFBLENBQVF3TCxJQUFBLEtBQVMsR0FBRztRQUMzQnhLLE9BQUEsQ0FBUUYsS0FBQSxDQUFNLHVFQUFrRSxLQUFLdkUsSUFBQSxPQUFXLEtBQUt3RyxHQUFBLEVBQUs7UUFDMUc7TUFDRjtNQUVBRyxJQUFBLEdBQU8sS0FBS0EsSUFBQSxHQUFPO01BQ25CQyxFQUFBLEdBQUssS0FBS0EsRUFBQSxHQUFLO0lBQ2pCO0lBRUEsS0FBS3hILE1BQUEsQ0FBT0csUUFBQSxDQUFTK2lCLGVBQUEsQ0FBZ0I7TUFBRTNiLElBQUE7TUFBTUM7SUFBRyxHQUFHbkQsT0FBTztFQUM1RDtFQUVBLElBQUk2RixXQUFBLEVBQXFDO0lBQ3ZDLE9BQU8sS0FBSy9HLElBQUEsQ0FBSzZJLEtBQUE7RUFDbkI7RUFFQSxJQUFJbUksWUFBQSxFQUFzQjtJQUN4QixPQUFPLEtBQUtoUixJQUFBLENBQUtnUixXQUFBO0VBQ25CO0VBRUEsSUFBSXRFLEtBQUEsRUFBZTtJQUNqQixPQUFPLEtBQUsxTSxJQUFBLENBQUttUCxRQUFBO0VBQ25CO0VBRUEsSUFBSS9LLEtBQUEsRUFBZTtJQUNqQixJQUFJLEtBQUtpSSxPQUFBLEVBQVM7TUFDaEIsT0FBTyxLQUFLcEksR0FBQTtJQUNkO0lBRUEsT0FBTyxLQUFLbXJCLFdBQUEsQ0FBWTNxQixLQUFBLENBQU0sS0FBSzJxQixXQUFBLENBQVk3cUIsS0FBSztFQUN0RDtFQUVBLElBQUlMLE1BQUEsRUFBZTtJQUNqQixPQUFPO01BQ0xFLElBQUEsRUFBTSxLQUFLQSxJQUFBO01BQ1hDLEVBQUEsRUFBSSxLQUFLQTtJQUNYO0VBQ0Y7RUFFQSxJQUFJQSxHQUFBLEVBQWE7SUFDZixJQUFJLEtBQUtnSSxPQUFBLEVBQVM7TUFDaEIsT0FBTyxLQUFLcEksR0FBQSxHQUFNLEtBQUt5SSxJQUFBO0lBQ3pCO0lBRUEsT0FBTyxLQUFLMGlCLFdBQUEsQ0FBWWpkLEdBQUEsQ0FBSSxLQUFLaWQsV0FBQSxDQUFZN3FCLEtBQUssS0FBSyxLQUFLdkUsSUFBQSxDQUFLdU0sTUFBQSxHQUFTLElBQUk7RUFDaEY7RUFFQSxJQUFJekgsT0FBQSxFQUF5QjtJQUMzQixJQUFJLEtBQUtQLEtBQUEsS0FBVSxHQUFHO01BQ3BCLE9BQU87SUFDVDtJQUVBLE1BQU1vcEIsU0FBQSxHQUFZLEtBQUt5QixXQUFBLENBQVkzcUIsS0FBQSxDQUFNLEtBQUsycUIsV0FBQSxDQUFZN3FCLEtBQUEsR0FBUSxDQUFDO0lBQ25FLE1BQU1ELElBQUEsR0FBTyxLQUFLOHFCLFdBQUEsQ0FBWW56QixHQUFBLENBQUlzVSxPQUFBLENBQVFvZCxTQUFTO0lBRW5ELE9BQU8sSUFBSXVCLFFBQUEsQ0FBUTVxQixJQUFBLEVBQU0sS0FBS3pILE1BQU07RUFDdEM7RUFFQSxJQUFJMkgsT0FBQSxFQUF5QjtJQUMzQixJQUFJRixJQUFBLEdBQU8sS0FBSzhxQixXQUFBLENBQVluekIsR0FBQSxDQUFJc1UsT0FBQSxDQUFRLEtBQUtuTSxJQUFBLElBQVEsS0FBS2lJLE9BQUEsR0FBVSxJQUFJLEVBQUU7SUFFMUUsSUFBSS9ILElBQUEsQ0FBS0MsS0FBQSxLQUFVLEtBQUtBLEtBQUEsRUFBTztNQUM3QkQsSUFBQSxHQUFPLEtBQUs4cUIsV0FBQSxDQUFZbnpCLEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUSxLQUFLbk0sSUFBQSxHQUFPLENBQUM7SUFDbkQ7SUFFQSxPQUFPLElBQUk4cUIsUUFBQSxDQUFRNXFCLElBQUEsRUFBTSxLQUFLekgsTUFBTTtFQUN0QztFQUVBLElBQUkybUIsTUFBQSxFQUF3QjtJQUMxQixJQUFJbGYsSUFBQSxHQUFPLEtBQUs4cUIsV0FBQSxDQUFZbnpCLEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUSxLQUFLbE0sRUFBQSxJQUFNLEtBQUtnSSxPQUFBLEdBQVUsSUFBSSxFQUFFO0lBRXhFLElBQUkvSCxJQUFBLENBQUtDLEtBQUEsS0FBVSxLQUFLQSxLQUFBLEVBQU87TUFDN0JELElBQUEsR0FBTyxLQUFLOHFCLFdBQUEsQ0FBWW56QixHQUFBLENBQUlzVSxPQUFBLENBQVEsS0FBS2xNLEVBQUEsR0FBSyxDQUFDO0lBQ2pEO0lBRUEsT0FBTyxJQUFJNnFCLFFBQUEsQ0FBUTVxQixJQUFBLEVBQU0sS0FBS3pILE1BQU07RUFDdEM7RUFFQSxJQUFJb0QsU0FBQSxFQUFzQjtJQUN4QixNQUFNQSxRQUFBLEdBQXNCLEVBQUM7SUFFN0IsS0FBS0QsSUFBQSxDQUFLa0IsT0FBQSxDQUFRL0IsT0FBQSxDQUFRLENBQUNhLElBQUEsRUFBTXVQLE1BQUEsS0FBVztNQUMxQyxNQUFNbEQsT0FBQSxHQUFVck0sSUFBQSxDQUFLcU0sT0FBQSxJQUFXLENBQUNyTSxJQUFBLENBQUs0RCxXQUFBO01BQ3RDLE1BQU0yckIsYUFBQSxHQUFnQnZ2QixJQUFBLENBQUtpUixNQUFBLElBQVUsQ0FBQ2pSLElBQUEsQ0FBS3VNLE1BQUE7TUFFM0MsTUFBTTZXLFNBQUEsR0FBWSxLQUFLbmYsR0FBQSxHQUFNc0wsTUFBQSxJQUFVZ2dCLGFBQUEsR0FBZ0IsSUFBSTtNQUczRCxJQUFJbk0sU0FBQSxHQUFZLEtBQUtBLFNBQUEsR0FBWSxLQUFLZ00sV0FBQSxDQUFZbnpCLEdBQUEsQ0FBSWtULFFBQUEsR0FBVyxHQUFHO1FBQ2xFO01BQ0Y7TUFFQSxNQUFNN0ssSUFBQSxHQUFPLEtBQUs4cUIsV0FBQSxDQUFZbnpCLEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUTZTLFNBQVM7TUFFbkQsSUFBSSxDQUFDL1csT0FBQSxJQUFXL0gsSUFBQSxDQUFLQyxLQUFBLElBQVMsS0FBS0EsS0FBQSxFQUFPO1FBQ3hDO01BQ0Y7TUFFQSxNQUFNaXJCLFlBQUEsR0FBZSxJQUFJTixRQUFBLENBQVE1cUIsSUFBQSxFQUFNLEtBQUt6SCxNQUFBLEVBQVF3UCxPQUFBLEVBQVNBLE9BQUEsR0FBVXJNLElBQUEsR0FBTyxJQUFJO01BRWxGLElBQUlxTSxPQUFBLEVBQVM7UUFDWG1qQixZQUFBLENBQWFMLFdBQUEsR0FBYyxLQUFLNXFCLEtBQUEsR0FBUTtNQUMxQztNQUVBdEUsUUFBQSxDQUFTckIsSUFBQSxDQUFLLElBQUlzd0IsUUFBQSxDQUFRNXFCLElBQUEsRUFBTSxLQUFLekgsTUFBQSxFQUFRd1AsT0FBQSxFQUFTQSxPQUFBLEdBQVVyTSxJQUFBLEdBQU8sSUFBSSxDQUFDO0lBQzlFLENBQUM7SUFFRCxPQUFPQyxRQUFBO0VBQ1Q7RUFFQSxJQUFJd3ZCLFdBQUEsRUFBNkI7SUFDL0IsT0FBTyxLQUFLeHZCLFFBQUEsQ0FBUyxNQUFNO0VBQzdCO0VBRUEsSUFBSXl2QixVQUFBLEVBQTRCO0lBQzlCLE1BQU16dkIsUUFBQSxHQUFXLEtBQUtBLFFBQUE7SUFFdEIsT0FBT0EsUUFBQSxDQUFTQSxRQUFBLENBQVNHLE1BQUEsR0FBUyxNQUFNO0VBQzFDO0VBRUF1dkIsUUFBUUMsUUFBQSxFQUFrQjdvQixVQUFBLEdBQXFDLENBQUMsR0FBbUI7SUFDakYsSUFBSS9HLElBQUEsR0FBdUI7SUFDM0IsSUFBSTBRLFdBQUEsR0FBYyxLQUFLNUwsTUFBQTtJQUV2QixPQUFPNEwsV0FBQSxJQUFlLENBQUMxUSxJQUFBLEVBQU07TUFDM0IsSUFBSTBRLFdBQUEsQ0FBWTFRLElBQUEsQ0FBSzBELElBQUEsQ0FBS2pHLElBQUEsS0FBU215QixRQUFBLEVBQVU7UUFDM0MsSUFBSXZ5QixNQUFBLENBQU93SSxJQUFBLENBQUtrQixVQUFVLEVBQUUzRyxNQUFBLEdBQVMsR0FBRztVQUN0QyxNQUFNeXZCLGNBQUEsR0FBaUJuZixXQUFBLENBQVkxUSxJQUFBLENBQUs2SSxLQUFBO1VBQ3hDLE1BQU1pbkIsUUFBQSxHQUFXenlCLE1BQUEsQ0FBT3dJLElBQUEsQ0FBS2tCLFVBQVU7VUFFdkMsU0FBU29FLEtBQUEsR0FBUSxHQUFHQSxLQUFBLEdBQVEya0IsUUFBQSxDQUFTMXZCLE1BQUEsRUFBUStLLEtBQUEsSUFBUyxHQUFHO1lBQ3ZELE1BQU01RCxHQUFBLEdBQU11b0IsUUFBQSxDQUFTM2tCLEtBQUE7WUFFckIsSUFBSTBrQixjQUFBLENBQWV0b0IsR0FBQSxNQUFTUixVQUFBLENBQVdRLEdBQUEsR0FBTTtjQUMzQztZQUNGO1VBQ0Y7UUFDRixPQUFPO1VBQ0x2SCxJQUFBLEdBQU8wUSxXQUFBO1FBQ1Q7TUFDRjtNQUVBQSxXQUFBLEdBQWNBLFdBQUEsQ0FBWTVMLE1BQUE7SUFDNUI7SUFFQSxPQUFPOUUsSUFBQTtFQUNUO0VBRUErdkIsY0FBY0gsUUFBQSxFQUFrQjdvQixVQUFBLEdBQXFDLENBQUMsR0FBbUI7SUFDdkYsT0FBTyxLQUFLaXBCLGdCQUFBLENBQWlCSixRQUFBLEVBQVU3b0IsVUFBQSxFQUFZLElBQUksRUFBRSxNQUFNO0VBQ2pFO0VBRUFpcEIsaUJBQWlCSixRQUFBLEVBQWtCN29CLFVBQUEsR0FBcUMsQ0FBQyxHQUFHa3BCLGFBQUEsR0FBZ0IsT0FBa0I7SUFDNUcsSUFBSXR0QixLQUFBLEdBQW1CLEVBQUM7SUFFeEIsSUFBSSxDQUFDLEtBQUsxQyxRQUFBLElBQVksS0FBS0EsUUFBQSxDQUFTRyxNQUFBLEtBQVcsR0FBRztNQUNoRCxPQUFPdUMsS0FBQTtJQUNUO0lBQ0EsTUFBTW10QixRQUFBLEdBQVd6eUIsTUFBQSxDQUFPd0ksSUFBQSxDQUFLa0IsVUFBVTtJQU12QyxLQUFLOUcsUUFBQSxDQUFTZCxPQUFBLENBQVErd0IsUUFBQSxJQUFZO01BRWhDLElBQUlELGFBQUEsSUFBaUJ0dEIsS0FBQSxDQUFNdkMsTUFBQSxHQUFTLEdBQUc7UUFDckM7TUFDRjtNQUVBLElBQUk4dkIsUUFBQSxDQUFTbHdCLElBQUEsQ0FBSzBELElBQUEsQ0FBS2pHLElBQUEsS0FBU215QixRQUFBLEVBQVU7UUFDeEMsTUFBTU8sc0JBQUEsR0FBeUJMLFFBQUEsQ0FBU3B4QixLQUFBLENBQU02SSxHQUFBLElBQU9SLFVBQUEsQ0FBV1EsR0FBQSxNQUFTMm9CLFFBQUEsQ0FBU2x3QixJQUFBLENBQUs2SSxLQUFBLENBQU10QixHQUFBLENBQUk7UUFFakcsSUFBSTRvQixzQkFBQSxFQUF3QjtVQUMxQnh0QixLQUFBLENBQU0vRCxJQUFBLENBQUtzeEIsUUFBUTtRQUNyQjtNQUNGO01BR0EsSUFBSUQsYUFBQSxJQUFpQnR0QixLQUFBLENBQU12QyxNQUFBLEdBQVMsR0FBRztRQUNyQztNQUNGO01BRUF1QyxLQUFBLEdBQVFBLEtBQUEsQ0FBTXl0QixNQUFBLENBQU9GLFFBQUEsQ0FBU0YsZ0JBQUEsQ0FBaUJKLFFBQUEsRUFBVTdvQixVQUFBLEVBQVlrcEIsYUFBYSxDQUFDO0lBQ3JGLENBQUM7SUFFRCxPQUFPdHRCLEtBQUE7RUFDVDtFQUVBMHRCLGFBQWF0cEIsVUFBQSxFQUFvQztJQUMvQyxNQUFNO01BQUVySztJQUFHLElBQUksS0FBS0csTUFBQSxDQUFPZixLQUFBO0lBRTNCWSxFQUFBLENBQUd3bUIsYUFBQSxDQUFjLEtBQUs5ZSxJQUFBLEVBQU0sUUFBVztNQUNyQyxHQUFHLEtBQUtwRSxJQUFBLENBQUs2SSxLQUFBO01BQ2IsR0FBRzlCO0lBQ0wsQ0FBQztJQUVELEtBQUtsSyxNQUFBLENBQU9NLElBQUEsQ0FBS1ksUUFBQSxDQUFTckIsRUFBRTtFQUM5QjtBQUNGO0FDM1BPLElBQU00ekIsS0FBQSxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FkLFNBQVNoK0IsZUFBZTRWLE1BQUEsRUFBZXFvQixLQUFBLEVBQWdCQyxNQUFBLEVBQW1DO0VBQy9GLE1BQU1DLGNBQUEsR0FDSmxyQixRQUFBLENBQVN3cUIsYUFBQSxDQUFjLDBCQUEwQlMsTUFBQSxHQUFTLElBQUlBLE1BQUEsS0FBVyxLQUFLO0VBR2hGLElBQUlDLGNBQUEsS0FBbUIsTUFBTTtJQUMzQixPQUFPQSxjQUFBO0VBQ1Q7RUFFQSxNQUFNQyxTQUFBLEdBQVluckIsUUFBQSxDQUFTcFQsYUFBQSxDQUFjLE9BQU87RUFFaEQsSUFBSW8rQixLQUFBLEVBQU87SUFDVEcsU0FBQSxDQUFVTCxZQUFBLENBQWEsU0FBU0UsS0FBSztFQUN2QztFQUVBRyxTQUFBLENBQVVMLFlBQUEsQ0FBYSxvQkFBb0JHLE1BQUEsR0FBUyxJQUFJQSxNQUFBLEtBQVcsTUFBTSxFQUFFO0VBQzNFRSxTQUFBLENBQVU5cUIsU0FBQSxHQUFZc0MsTUFBQTtFQUN0QjNDLFFBQUEsQ0FBU29yQixvQkFBQSxDQUFxQixNQUFNLEVBQUUsR0FBR2hyQixXQUFBLENBQVkrcUIsU0FBUztFQUU5RCxPQUFPQSxTQUFBO0FBQ1Q7QXhKZ0NPLElBQU16L0IsTUFBQSxHQUFOLGNBQXFCNk4sWUFBQSxDQUEyQjtFQTJEckRuQyxZQUFZd0UsT0FBQSxHQUFrQyxDQUFDLEdBQUc7SUFDaEQsTUFBTTtJQXZEUixLQUFReXZCLEdBQUEsR0FBK0I7SUFJdkMsS0FBUUMsVUFBQSxHQUFnQztJQUV4QyxLQUFPckQsU0FBQSxHQUFZO0lBT25CLEtBQU9zRCxhQUFBLEdBQWdCO0lBRXZCLEtBQU9sVixnQkFBQSxHQUE0QixDQUFDO0lBS3BDLEtBQU9tVixVQUFBLEdBQWF2a0IsSUFBQSxDQUFLd2tCLE1BQUEsQ0FBTyxFQUFFeGhCLFFBQUEsQ0FBUyxFQUFFLEVBQUVwTyxLQUFBLENBQU0sR0FBRyxDQUFDO0lBRXpELEtBQU9ELE9BQUEsR0FBeUI7TUFDOUJrdUIsT0FBQSxFQUFTLE9BQU85cEIsUUFBQSxLQUFhLGNBQWNBLFFBQUEsQ0FBU3BULGFBQUEsQ0FBYyxLQUFLLElBQUk7TUFDM0UrTyxPQUFBLEVBQVM7TUFDVCt2QixTQUFBLEVBQVc7TUFDWEMsV0FBQSxFQUFhO01BQ2J2K0IsVUFBQSxFQUFZLEVBQUM7TUFDYncrQixTQUFBLEVBQVc7TUFDWDVELFFBQUEsRUFBVTtNQUNWNkQsV0FBQSxFQUFhLENBQUM7TUFDZC92QixZQUFBLEVBQWMsQ0FBQztNQUNmK3FCLG9CQUFBLEVBQXNCLENBQUM7TUFDdkIzUCxnQkFBQSxFQUFrQjtNQUNsQkUsZ0JBQUEsRUFBa0I7TUFDbEIwVSxvQkFBQSxFQUFzQjtNQUN0QnhNLGtCQUFBLEVBQW9CO01BQ3BCTCxnQkFBQSxFQUFrQjtNQUNsQmhILGNBQUEsRUFBZ0JBLENBQUEsS0FBTTtNQUN0QkMsUUFBQSxFQUFVQSxDQUFBLEtBQU07TUFDaEJDLFFBQUEsRUFBVUEsQ0FBQSxLQUFNO01BQ2hCQyxpQkFBQSxFQUFtQkEsQ0FBQSxLQUFNO01BQ3pCQyxhQUFBLEVBQWVBLENBQUEsS0FBTTtNQUNyQkMsT0FBQSxFQUFTQSxDQUFBLEtBQU07TUFDZkMsTUFBQSxFQUFRQSxDQUFBLEtBQU07TUFDZEMsU0FBQSxFQUFXQSxDQUFBLEtBQU07TUFDakJ1VCxjQUFBLEVBQWdCQSxDQUFDO1FBQUV0dkI7TUFBTSxNQUFNO1FBQzdCLE1BQU1BLEtBQUE7TUFDUjtNQUNBdXZCLE9BQUEsRUFBU0EsQ0FBQSxLQUFNO01BQ2ZDLE1BQUEsRUFBUUEsQ0FBQSxLQUFNO01BQ2RDLFFBQUEsRUFBVUEsQ0FBQSxLQUFNO0lBQ2xCO0lBb2JBLEtBQU9DLHNCQUFBLEdBQXlCO0lBRWhDLEtBQVFwTCxtQkFBQSxHQUEwQztJQWxiaEQsS0FBS3FMLFVBQUEsQ0FBV3h3QixPQUFPO0lBQ3ZCLEtBQUt5d0Isc0JBQUEsQ0FBdUI7SUFDNUIsS0FBS0Msb0JBQUEsQ0FBcUI7SUFDMUIsS0FBS0MsWUFBQSxDQUFhO0lBQ2xCLEtBQUsveUIsRUFBQSxDQUFHLGdCQUFnQixLQUFLb0MsT0FBQSxDQUFRcWMsY0FBYztJQUNuRCxLQUFLdGUsSUFBQSxDQUFLLGdCQUFnQjtNQUFFckMsTUFBQSxFQUFRO0lBQUssQ0FBQztJQUMxQyxLQUFLa0MsRUFBQSxDQUFHLGdCQUFnQixLQUFLb0MsT0FBQSxDQUFRbXdCLGNBQWM7SUFDbkQsS0FBS3Z5QixFQUFBLENBQUcsVUFBVSxLQUFLb0MsT0FBQSxDQUFRc2MsUUFBUTtJQUN2QyxLQUFLMWUsRUFBQSxDQUFHLFVBQVUsS0FBS29DLE9BQUEsQ0FBUXVjLFFBQVE7SUFDdkMsS0FBSzNlLEVBQUEsQ0FBRyxtQkFBbUIsS0FBS29DLE9BQUEsQ0FBUXdjLGlCQUFpQjtJQUN6RCxLQUFLNWUsRUFBQSxDQUFHLGVBQWUsS0FBS29DLE9BQUEsQ0FBUXljLGFBQWE7SUFDakQsS0FBSzdlLEVBQUEsQ0FBRyxTQUFTLEtBQUtvQyxPQUFBLENBQVEwYyxPQUFPO0lBQ3JDLEtBQUs5ZSxFQUFBLENBQUcsUUFBUSxLQUFLb0MsT0FBQSxDQUFRMmMsTUFBTTtJQUNuQyxLQUFLL2UsRUFBQSxDQUFHLFdBQVcsS0FBS29DLE9BQUEsQ0FBUTRjLFNBQVM7SUFDekMsS0FBS2hmLEVBQUEsQ0FBRyxRQUFRLENBQUM7TUFBRUMsS0FBQTtNQUFPb0MsS0FBQTtNQUFPa3NCO0lBQU0sTUFBTSxLQUFLbnNCLE9BQUEsQ0FBUXF3QixNQUFBLENBQU94eUIsS0FBQSxFQUFPb0MsS0FBQSxFQUFPa3NCLEtBQUssQ0FBQztJQUNyRixLQUFLdnVCLEVBQUEsQ0FBRyxTQUFTLENBQUM7TUFBRUMsS0FBQTtNQUFPb0M7SUFBTSxNQUFNLEtBQUtELE9BQUEsQ0FBUW93QixPQUFBLENBQVF2eUIsS0FBQSxFQUFPb0MsS0FBSyxDQUFDO0lBQ3pFLEtBQUtyQyxFQUFBLENBQUcsVUFBVSxLQUFLb0MsT0FBQSxDQUFRc3dCLFFBQVE7SUFFdkMsTUFBTU0sVUFBQSxHQUFhLEtBQUtDLFNBQUEsQ0FBVTtJQUNsQyxNQUFNaDJCLFNBQUEsR0FBWWpGLG9CQUFBLENBQXFCZzdCLFVBQUEsRUFBWSxLQUFLNXdCLE9BQUEsQ0FBUWd3QixTQUFTO0lBR3pFLEtBQUtjLFdBQUEsR0FBY3I2QixZQUFBLENBQUFzNkIsV0FBQSxDQUFZbGUsTUFBQSxDQUFPO01BQ3BDL1gsR0FBQSxFQUFLODFCLFVBQUE7TUFDTHgxQixNQUFBLEVBQVEsS0FBS0EsTUFBQTtNQUNiUCxTQUFBLEVBQVdBLFNBQUEsSUFBYTtJQUMxQixDQUFDO0lBRUQsSUFBSSxLQUFLbUYsT0FBQSxDQUFRa3VCLE9BQUEsRUFBUztNQUN4QixLQUFLOEMsS0FBQSxDQUFNLEtBQUtoeEIsT0FBQSxDQUFRa3VCLE9BQU87SUFDakM7RUFDRjtFQUtPOEMsTUFBTWpuQixFQUFBLEVBQWdEO0lBQzNELElBQUksT0FBTzNGLFFBQUEsS0FBYSxhQUFhO01BQ25DLE1BQU0sSUFBSTNFLEtBQUEsQ0FDUiwwR0FDRjtJQUNGO0lBQ0EsS0FBS3d4QixVQUFBLENBQVdsbkIsRUFBRTtJQUVsQnZLLE1BQUEsQ0FBTytWLFVBQUEsQ0FBVyxNQUFNO01BQ3RCLElBQUksS0FBSzZMLFdBQUEsRUFBYTtRQUNwQjtNQUNGO01BRUEsS0FBS3ZsQixRQUFBLENBQVM2aUIsS0FBQSxDQUFNLEtBQUsxZSxPQUFBLENBQVFnd0IsU0FBUztNQUMxQyxLQUFLanlCLElBQUEsQ0FBSyxVQUFVO1FBQUVyQyxNQUFBLEVBQVE7TUFBSyxDQUFDO01BQ3BDLEtBQUtpMEIsYUFBQSxHQUFnQjtJQUN2QixHQUFHLENBQUM7RUFDTjtFQUtPdUIsUUFBQSxFQUFVO0lBQ2YsSUFBSSxLQUFLeEIsVUFBQSxFQUFZO01BR25CLE1BQU03a0IsR0FBQSxHQUFNLEtBQUs2a0IsVUFBQSxDQUFXN2tCLEdBQUE7TUFFNUIsSUFBSUEsR0FBQSxvQkFBQUEsR0FBQSxDQUFLblAsTUFBQSxFQUFRO1FBQ2YsT0FBT21QLEdBQUEsQ0FBSW5QLE1BQUE7TUFDYjtNQUNBLEtBQUtnMEIsVUFBQSxDQUFXdlcsT0FBQSxDQUFRO0lBQzFCO0lBQ0EsS0FBS3VXLFVBQUEsR0FBYTtJQUNsQixLQUFLQyxhQUFBLEdBQWdCO0lBR3JCLElBQUksS0FBS0YsR0FBQSxFQUFLO01BQ1osSUFBSTtRQUNGLElBQUksT0FBTyxLQUFLQSxHQUFBLENBQUkwQixNQUFBLEtBQVcsWUFBWTtVQUN6QyxLQUFLMUIsR0FBQSxDQUFJMEIsTUFBQSxDQUFPO1FBQ2xCLFdBQVcsS0FBSzFCLEdBQUEsQ0FBSTNlLFVBQUEsRUFBWTtVQUM5QixLQUFLMmUsR0FBQSxDQUFJM2UsVUFBQSxDQUFXeFIsV0FBQSxDQUFZLEtBQUttd0IsR0FBRztRQUMxQztNQUNGLFNBQVM1dUIsS0FBQSxFQUFUO1FBRUVFLE9BQUEsQ0FBUUMsSUFBQSxDQUFLLGlDQUFpQ0gsS0FBSztNQUNyRDtJQUNGO0lBQ0EsS0FBSzR1QixHQUFBLEdBQU07RUFDYjtFQUtBLElBQVc3ckIsUUFBQSxFQUFtQjtJQUM1QixPQUFPLEtBQUs2VyxnQkFBQTtFQUNkO0VBS0EsSUFBVzVlLFNBQUEsRUFBMkI7SUFDcEMsT0FBTyxLQUFLdTFCLGNBQUEsQ0FBZXYxQixRQUFBO0VBQzdCO0VBS09nQixNQUFBLEVBQXlCO0lBQzlCLE9BQU8sS0FBS3UwQixjQUFBLENBQWV2MEIsS0FBQSxDQUFNO0VBQ25DO0VBS09FLElBQUEsRUFBbUI7SUFDeEIsT0FBTyxLQUFLcTBCLGNBQUEsQ0FBZXIwQixHQUFBLENBQUk7RUFDakM7RUFLUSt5QixVQUFBLEVBQWtCO0lBQ3hCLElBQUksS0FBSzl2QixPQUFBLENBQVE4dkIsU0FBQSxJQUFhLE9BQU8xckIsUUFBQSxLQUFhLGFBQWE7TUFDN0QsS0FBS3FyQixHQUFBLEdBQU10K0IsY0FBQSxDQUFlZytCLEtBQUEsRUFBTyxLQUFLbnZCLE9BQUEsQ0FBUSt2QixXQUFXO0lBQzNEO0VBQ0Y7RUFPT1MsV0FBV3h3QixPQUFBLEdBQWtDLENBQUMsR0FBUztJQUM1RCxLQUFLQSxPQUFBLEdBQVU7TUFDYixHQUFHLEtBQUtBLE9BQUE7TUFDUixHQUFHQTtJQUNMO0lBRUEsSUFBSSxDQUFDLEtBQUswdkIsVUFBQSxJQUFjLENBQUMsS0FBSy8wQixLQUFBLElBQVMsS0FBS3ltQixXQUFBLEVBQWE7TUFDdkQ7SUFDRjtJQUVBLElBQUksS0FBS3BoQixPQUFBLENBQVFpd0IsV0FBQSxFQUFhO01BQzVCLEtBQUtqMEIsSUFBQSxDQUFLcTFCLFFBQUEsQ0FBUyxLQUFLcnhCLE9BQUEsQ0FBUWl3QixXQUFXO0lBQzdDO0lBRUEsS0FBS2owQixJQUFBLENBQUtzMUIsV0FBQSxDQUFZLEtBQUszMkIsS0FBSztFQUNsQztFQUtPNDJCLFlBQVluRixRQUFBLEVBQW1CN0ssVUFBQSxHQUFhLE1BQVk7SUFDN0QsS0FBS2lQLFVBQUEsQ0FBVztNQUFFcEU7SUFBUyxDQUFDO0lBRTVCLElBQUk3SyxVQUFBLEVBQVk7TUFDZCxLQUFLeGpCLElBQUEsQ0FBSyxVQUFVO1FBQUVyQyxNQUFBLEVBQVE7UUFBTWQsV0FBQSxFQUFhLEtBQUtELEtBQUEsQ0FBTVksRUFBQTtRQUFJcXZCLG9CQUFBLEVBQXNCO01BQUcsQ0FBQztJQUM1RjtFQUNGO0VBS0EsSUFBV3JSLFdBQUEsRUFBc0I7SUFJL0IsT0FBTyxLQUFLdlosT0FBQSxDQUFRb3NCLFFBQUEsSUFBWSxLQUFLcHdCLElBQUEsSUFBUSxLQUFLQSxJQUFBLENBQUtvd0IsUUFBQTtFQUN6RDtFQUtBLElBQVdwd0IsS0FBQSxFQUFtQjtJQUM1QixJQUFJLEtBQUswekIsVUFBQSxFQUFZO01BQ25CLE9BQU8sS0FBS0EsVUFBQTtJQUNkO0lBRUEsT0FBTyxJQUFJOEIsS0FBQSxDQUNUO01BQ0U3MkIsS0FBQSxFQUFPLEtBQUttMkIsV0FBQTtNQUNaUSxXQUFBLEVBQWMzMkIsS0FBQSxJQUE4RDtRQUMxRSxLQUFLbTJCLFdBQUEsR0FBY24yQixLQUFBO01BQ3JCO01BQ0FpQyxRQUFBLEVBQVdyQixFQUFBLElBQXdEO1FBQ2pFLEtBQUt1MUIsV0FBQSxHQUFjLEtBQUtuMkIsS0FBQSxDQUFNSyxLQUFBLENBQU1PLEVBQUU7TUFDeEM7TUFHQW9aLFNBQUEsRUFBVztNQUNYOGMsUUFBQSxFQUFVO01BQ1ZyRixRQUFBLEVBQVU7TUFDVmhMLFdBQUEsRUFBYTtJQUNmLEdBQ0E7TUFDRXNRLEdBQUEsRUFBS0EsQ0FBQ2hNLEdBQUEsRUFBS3RmLEdBQUEsS0FBUTtRQUVqQixJQUFJQSxHQUFBLEtBQVEsU0FBUztVQUNuQixPQUFPLEtBQUswcUIsV0FBQTtRQUNkO1FBQ0EsSUFBSTFxQixHQUFBLElBQU9zZixHQUFBLEVBQUs7VUFDZCxPQUFPaU0sT0FBQSxDQUFRRCxHQUFBLENBQUloTSxHQUFBLEVBQUt0ZixHQUFHO1FBQzdCO1FBR0EsTUFBTSxJQUFJM0csS0FBQSxDQUNSLHlFQUF5RTJHLEdBQUEsd0NBQzNFO01BQ0Y7SUFDRixDQUNGO0VBQ0Y7RUFLQSxJQUFXekwsTUFBQSxFQUFxQjtJQUM5QixJQUFJLEtBQUsrMEIsVUFBQSxFQUFZO01BQ25CLEtBQUtvQixXQUFBLEdBQWMsS0FBSzkwQixJQUFBLENBQUtyQixLQUFBO0lBQy9CO0lBRUEsT0FBTyxLQUFLbTJCLFdBQUE7RUFDZDtFQVNPYyxlQUNMbGQsTUFBQSxFQUNBbWQsYUFBQSxFQUNhO0lBQ2IsTUFBTTEyQixPQUFBLEdBQVVoSCxVQUFBLENBQVcwOUIsYUFBYSxJQUNwQ0EsYUFBQSxDQUFjbmQsTUFBQSxFQUFRLENBQUMsR0FBRyxLQUFLL1osS0FBQSxDQUFNUSxPQUFPLENBQUMsSUFDN0MsQ0FBQyxHQUFHLEtBQUtSLEtBQUEsQ0FBTVEsT0FBQSxFQUFTdVosTUFBTTtJQUVsQyxNQUFNL1osS0FBQSxHQUFRLEtBQUtBLEtBQUEsQ0FBTVUsV0FBQSxDQUFZO01BQUVGO0lBQVEsQ0FBQztJQUVoRCxLQUFLYSxJQUFBLENBQUtzMUIsV0FBQSxDQUFZMzJCLEtBQUs7SUFFM0IsT0FBT0EsS0FBQTtFQUNUO0VBUU9tM0IsaUJBQ0xDLHVCQUFBLEVBQ3lCO0lBQ3pCLElBQUksS0FBSzNRLFdBQUEsRUFBYTtNQUNwQixPQUFPO0lBQ1Q7SUFFQSxNQUFNNFEsV0FBQSxHQUFjLEtBQUtyM0IsS0FBQSxDQUFNUSxPQUFBO0lBQy9CLElBQUlBLE9BQUEsR0FBVTYyQixXQUFBO0lBRVosRUFBQyxDQUE2Qi9DLE1BQUEsQ0FBTzhDLHVCQUF1QixFQUFFL3pCLE9BQUEsQ0FBUWkwQixlQUFBLElBQW1CO01BRXpGLE1BQU0zMUIsSUFBQSxHQUFPLE9BQU8yMUIsZUFBQSxLQUFvQixXQUFXLEdBQUdBLGVBQUEsTUFBcUJBLGVBQUEsQ0FBZ0I3ckIsR0FBQTtNQUczRmpMLE9BQUEsR0FBVUEsT0FBQSxDQUFRK0MsTUFBQSxDQUFPd1csTUFBQSxJQUFVLENBQUNBLE1BQUEsQ0FBT3RPLEdBQUEsQ0FBSThyQixVQUFBLENBQVc1MUIsSUFBSSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxJQUFJMDFCLFdBQUEsQ0FBWS95QixNQUFBLEtBQVc5RCxPQUFBLENBQVE4RCxNQUFBLEVBQVE7TUFFekMsT0FBTztJQUNUO0lBRUEsTUFBTXRFLEtBQUEsR0FBUSxLQUFLQSxLQUFBLENBQU1VLFdBQUEsQ0FBWTtNQUNuQ0Y7SUFDRixDQUFDO0lBRUQsS0FBS2EsSUFBQSxDQUFLczFCLFdBQUEsQ0FBWTMyQixLQUFLO0lBRTNCLE9BQU9BLEtBQUE7RUFDVDtFQUtRODFCLHVCQUFBLEVBQStCO0lBOVl6QyxJQUFBdm9CLEVBQUEsRUFBQWlCLEVBQUE7SUErWUksTUFBTWdwQixjQUFBLEdBQWlCLEtBQUtueUIsT0FBQSxDQUFRa3dCLG9CQUFBLEdBQ2hDLENBQ0UvUyxRQUFBLEVBQ0FKLHVCQUFBLENBQXdCMUcsU0FBQSxDQUFVO01BQ2hDdEwsY0FBQSxHQUFnQjVCLEVBQUEsSUFBQWpCLEVBQUEsUUFBS2xJLE9BQUEsQ0FBUWlyQixvQkFBQSxLQUFiLGdCQUFBL2lCLEVBQUEsQ0FBbUN5Vix1QkFBQSxLQUFuQyxnQkFBQXhVLEVBQUEsQ0FBNEQ0QjtJQUM5RSxDQUFDLEdBQ0RpUyxRQUFBLEVBQ0FJLFdBQUEsRUFDQUMsTUFBQSxFQUNBRSxRQUFBLEVBQ0FMLElBQUEsRUFDQUksS0FBQSxFQUNBTCxNQUFBLENBQ0YsQ0FBRS9lLE1BQUEsQ0FBT2swQixHQUFBLElBQU87TUFDZCxJQUFJLE9BQU8sS0FBS3B5QixPQUFBLENBQVFrd0Isb0JBQUEsS0FBeUIsVUFBVTtRQUN6RCxPQUNFLEtBQUtsd0IsT0FBQSxDQUFRa3dCLG9CQUFBLENBQXFCa0MsR0FBQSxDQUFJOTFCLElBQUEsTUFBNEQ7TUFFdEc7TUFDQSxPQUFPO0lBQ1QsQ0FBQyxJQUNELEVBQUM7SUFDTCxNQUFNKzFCLGFBQUEsR0FBZ0IsQ0FBQyxHQUFHRixjQUFBLEVBQWdCLEdBQUcsS0FBS255QixPQUFBLENBQVF4TyxVQUFVLEVBQUUwTSxNQUFBLENBQU9zRixTQUFBLElBQWE7TUFDeEYsT0FBTyxDQUFDLGFBQWEsUUFBUSxNQUFNLEVBQUVvRCxRQUFBLENBQVNwRCxTQUFBLG9CQUFBQSxTQUFBLENBQVdqQixJQUFJO0lBQy9ELENBQUM7SUFFRCxLQUFLM0csZ0JBQUEsR0FBbUIsSUFBSTBlLGdCQUFBLENBQWlCK1gsYUFBQSxFQUFlLElBQUk7RUFDbEU7RUFLUTNCLHFCQUFBLEVBQTZCO0lBQ25DLEtBQUtVLGNBQUEsR0FBaUIsSUFBSXZoQyxjQUFBLENBQWU7TUFDdkM2TCxNQUFBLEVBQVE7SUFDVixDQUFDO0VBQ0g7RUFLUWkxQixhQUFBLEVBQXFCO0lBQzNCLEtBQUt2MUIsTUFBQSxHQUFTLEtBQUtRLGdCQUFBLENBQWlCUixNQUFBO0VBQ3RDO0VBS1F5MUIsVUFBQSxFQUE2QjtJQUNuQyxJQUFJLzFCLEdBQUE7SUFFSixJQUFJO01BQ0ZBLEdBQUEsR0FBTS9KLGNBQUEsQ0FBZSxLQUFLaVAsT0FBQSxDQUFRRCxPQUFBLEVBQVMsS0FBSzNFLE1BQUEsRUFBUSxLQUFLNEUsT0FBQSxDQUFRRSxZQUFBLEVBQWM7UUFDakZTLHFCQUFBLEVBQXVCLEtBQUtYLE9BQUEsQ0FBUTBqQjtNQUN0QyxDQUFDO0lBQ0gsU0FBUzNoQixDQUFBLEVBQVQ7TUFDRSxJQUNFLEVBQUVBLENBQUEsWUFBYXRDLEtBQUEsS0FDZixDQUFDLENBQUMsd0NBQXdDLHNDQUFzQyxFQUFFbUgsUUFBQSxDQUFTN0UsQ0FBQSxDQUFFdXdCLE9BQU8sR0FDcEc7UUFFQSxNQUFNdndCLENBQUE7TUFDUjtNQUNBLEtBQUtoRSxJQUFBLENBQUssZ0JBQWdCO1FBQ3hCckMsTUFBQSxFQUFRO1FBQ1JtRixLQUFBLEVBQU9rQixDQUFBO1FBQ1B1aEIsb0JBQUEsRUFBc0JBLENBQUEsS0FBTTtVQUMxQixJQUNFLG1CQUFtQixLQUFLMWYsT0FBQSxJQUN4QixPQUFPLEtBQUtBLE9BQUEsQ0FBUTJmLGFBQUEsS0FBa0IsWUFDdEMsS0FBSzNmLE9BQUEsQ0FBUTJmLGFBQUEsRUFDYjtZQUNBO1lBQUUsS0FBSzNmLE9BQUEsQ0FBUTJmLGFBQUEsQ0FBc0JDLFVBQUEsR0FBYTtVQUNwRDtVQUVBLEtBQUt4akIsT0FBQSxDQUFReE8sVUFBQSxHQUFhLEtBQUt3TyxPQUFBLENBQVF4TyxVQUFBLENBQVcwTSxNQUFBLENBQU9zRixTQUFBLElBQWFBLFNBQUEsQ0FBVWxILElBQUEsS0FBUyxlQUFlO1VBR3hHLEtBQUttMEIsc0JBQUEsQ0FBdUI7UUFDOUI7TUFDRixDQUFDO01BR0QzMUIsR0FBQSxHQUFNL0osY0FBQSxDQUFlLEtBQUtpUCxPQUFBLENBQVFELE9BQUEsRUFBUyxLQUFLM0UsTUFBQSxFQUFRLEtBQUs0RSxPQUFBLENBQVFFLFlBQUEsRUFBYztRQUNqRlMscUJBQUEsRUFBdUI7TUFDekIsQ0FBQztJQUNIO0lBQ0EsT0FBTzdGLEdBQUE7RUFDVDtFQUtRbTJCLFdBQVcvQyxPQUFBLEVBQTJEO0lBNWVoRixJQUFBaG1CLEVBQUE7SUE2ZUksS0FBS3duQixVQUFBLEdBQWEsSUFBSS80QixXQUFBLENBQUE0N0IsVUFBQSxDQUFXckUsT0FBQSxFQUFTO01BQ3hDLEdBQUcsS0FBS2x1QixPQUFBLENBQVFpd0IsV0FBQTtNQUNoQnJxQixVQUFBLEVBQVk7UUFFVjRzQixJQUFBLEVBQU07UUFDTixLQUFHdHFCLEVBQUEsUUFBS2xJLE9BQUEsQ0FBUWl3QixXQUFBLEtBQWIsZ0JBQUEvbkIsRUFBQSxDQUEwQnRDLFVBQUE7TUFDL0I7TUFDQTZzQixtQkFBQSxFQUFxQixLQUFLQSxtQkFBQSxDQUFvQngzQixJQUFBLENBQUssSUFBSTtNQUN2RE4sS0FBQSxFQUFPLEtBQUttMkI7SUFDZCxDQUFDO0lBSUQsTUFBTXpELFFBQUEsR0FBVyxLQUFLMXlCLEtBQUEsQ0FBTVUsV0FBQSxDQUFZO01BQ3RDRixPQUFBLEVBQVMsS0FBS1MsZ0JBQUEsQ0FBaUJUO0lBQ2pDLENBQUM7SUFFRCxLQUFLYSxJQUFBLENBQUtzMUIsV0FBQSxDQUFZakUsUUFBUTtJQUU5QixLQUFLcUYsZUFBQSxDQUFnQjtJQUNyQixLQUFLQyxZQUFBLENBQWE7SUFDbEIsS0FBSzdDLFNBQUEsQ0FBVTtJQUtmLE1BQU1qbEIsR0FBQSxHQUFNLEtBQUs3TyxJQUFBLENBQUs2TyxHQUFBO0lBRXRCQSxHQUFBLENBQUluUCxNQUFBLEdBQVM7RUFDZjtFQUtPZzNCLGdCQUFBLEVBQXdCO0lBQzdCLElBQUksS0FBSzEyQixJQUFBLENBQUtvbEIsV0FBQSxFQUFhO01BQ3pCO0lBQ0Y7SUFFQSxLQUFLcGxCLElBQUEsQ0FBS3ExQixRQUFBLENBQVM7TUFDakJwVixTQUFBLEVBQVcsS0FBS3JnQixnQkFBQSxDQUFpQnFnQixTQUFBO01BQ2pDTixTQUFBLEVBQVcsS0FBSy9mLGdCQUFBLENBQWlCK2Y7SUFDbkMsQ0FBQztFQUNIO0VBS09nWCxhQUFBLEVBQXFCO0lBQzFCLEtBQUszMkIsSUFBQSxDQUFLNk8sR0FBQSxDQUFJK25CLFNBQUEsR0FBWSxVQUFVLEtBQUs1MkIsSUFBQSxDQUFLNk8sR0FBQSxDQUFJK25CLFNBQUE7RUFDcEQ7RUFNT3hOLG1CQUFtQnRuQixFQUFBLEVBQWdCO0lBQ3hDLEtBQUt5eUIsc0JBQUEsR0FBeUI7SUFDOUJ6eUIsRUFBQSxDQUFHO0lBQ0gsS0FBS3l5QixzQkFBQSxHQUF5QjtJQUU5QixNQUFNaDFCLEVBQUEsR0FBSyxLQUFLNHBCLG1CQUFBO0lBRWhCLEtBQUtBLG1CQUFBLEdBQXNCO0lBRTNCLE9BQU81cEIsRUFBQTtFQUNUO0VBT1FrM0Isb0JBQW9CNzNCLFdBQUEsRUFBZ0M7SUFHMUQsSUFBSSxLQUFLb0IsSUFBQSxDQUFLb2xCLFdBQUEsRUFBYTtNQUN6QjtJQUNGO0lBRUEsSUFBSSxLQUFLbVAsc0JBQUEsRUFBd0I7TUFDL0IsSUFBSSxDQUFDLEtBQUtwTCxtQkFBQSxFQUFxQjtRQUM3QixLQUFLQSxtQkFBQSxHQUFzQnZxQixXQUFBO1FBRTNCO01BQ0Y7TUFFQUEsV0FBQSxDQUFZOEQsS0FBQSxDQUFNVixPQUFBLENBQVFXLElBQUEsSUFBSztRQXBrQnJDLElBQUF1SixFQUFBO1FBb2tCd0MsUUFBQUEsRUFBQSxRQUFLaWQsbUJBQUEsS0FBTCxnQkFBQWpkLEVBQUEsQ0FBMEJ2SixJQUFBLENBQUtBLElBQUE7TUFBQSxDQUFLO01BRXRFO0lBQ0Y7SUFHQSxNQUFNO01BQUVoRSxLQUFBO01BQU80RDtJQUFhLElBQUksS0FBSzVELEtBQUEsQ0FBTU8sZ0JBQUEsQ0FBaUJOLFdBQVc7SUFDdkUsTUFBTWk0QixtQkFBQSxHQUFzQixDQUFDLEtBQUtsNEIsS0FBQSxDQUFNRSxTQUFBLENBQVVpb0IsRUFBQSxDQUFHbm9CLEtBQUEsQ0FBTUUsU0FBUztJQUNwRSxNQUFNaTRCLGdCQUFBLEdBQW1CdjBCLFlBQUEsQ0FBYXFJLFFBQUEsQ0FBU2hNLFdBQVc7SUFDMUQsTUFBTW00QixTQUFBLEdBQVksS0FBS3A0QixLQUFBO0lBRXZCLEtBQUtvRCxJQUFBLENBQUsscUJBQXFCO01BQzdCckMsTUFBQSxFQUFRO01BQ1JkLFdBQUE7TUFDQW80QixTQUFBLEVBQVdyNEI7SUFDYixDQUFDO0lBR0QsSUFBSSxDQUFDbTRCLGdCQUFBLEVBQWtCO01BQ3JCO0lBQ0Y7SUFFQSxLQUFLOTJCLElBQUEsQ0FBS3MxQixXQUFBLENBQVkzMkIsS0FBSztJQUczQixLQUFLb0QsSUFBQSxDQUFLLGVBQWU7TUFDdkJyQyxNQUFBLEVBQVE7TUFDUmQsV0FBQTtNQUNBZ3dCLG9CQUFBLEVBQXNCcnNCLFlBQUEsQ0FBYTBCLEtBQUEsQ0FBTSxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJNHlCLG1CQUFBLEVBQXFCO01BQ3ZCLEtBQUs5MEIsSUFBQSxDQUFLLG1CQUFtQjtRQUMzQnJDLE1BQUEsRUFBUTtRQUNSZDtNQUNGLENBQUM7SUFDSDtJQUdBLE1BQU1xNEIsaUJBQUEsR0FBb0IxMEIsWUFBQSxDQUFhMjBCLFFBQUEsQ0FBUzMzQixFQUFBLElBQU1BLEVBQUEsQ0FBR29CLE9BQUEsQ0FBUSxPQUFPLEtBQUtwQixFQUFBLENBQUdvQixPQUFBLENBQVEsTUFBTSxDQUFDO0lBQy9GLE1BQU13MkIsTUFBQSxHQUFRRixpQkFBQSxvQkFBQUEsaUJBQUEsQ0FBbUJ0MkIsT0FBQSxDQUFRO0lBQ3pDLE1BQU15MkIsS0FBQSxHQUFPSCxpQkFBQSxvQkFBQUEsaUJBQUEsQ0FBbUJ0MkIsT0FBQSxDQUFRO0lBRXhDLElBQUl3MkIsTUFBQSxFQUFPO01BQ1QsS0FBS3AxQixJQUFBLENBQUssU0FBUztRQUNqQnJDLE1BQUEsRUFBUTtRQUNSbUMsS0FBQSxFQUFPczFCLE1BQUEsQ0FBTXQxQixLQUFBO1FBRWJqRCxXQUFBLEVBQWFxNEI7TUFDZixDQUFDO0lBQ0g7SUFFQSxJQUFJRyxLQUFBLEVBQU07TUFDUixLQUFLcjFCLElBQUEsQ0FBSyxRQUFRO1FBQ2hCckMsTUFBQSxFQUFRO1FBQ1JtQyxLQUFBLEVBQU91MUIsS0FBQSxDQUFLdjFCLEtBQUE7UUFFWmpELFdBQUEsRUFBYXE0QjtNQUNmLENBQUM7SUFDSDtJQUdBLElBQ0VyNEIsV0FBQSxDQUFZK0IsT0FBQSxDQUFRLGVBQWUsS0FDbkMsQ0FBQzRCLFlBQUEsQ0FBYXdPLElBQUEsQ0FBS3hSLEVBQUEsSUFBTUEsRUFBQSxDQUFHa2EsVUFBVSxLQUN0Q3NkLFNBQUEsQ0FBVWo0QixHQUFBLENBQUlnb0IsRUFBQSxDQUFHbm9CLEtBQUEsQ0FBTUcsR0FBRyxHQUMxQjtNQUNBO0lBQ0Y7SUFFQSxLQUFLaUQsSUFBQSxDQUFLLFVBQVU7TUFDbEJyQyxNQUFBLEVBQVE7TUFDUmQsV0FBQTtNQUNBZ3dCLG9CQUFBLEVBQXNCcnNCLFlBQUEsQ0FBYTBCLEtBQUEsQ0FBTSxDQUFDO0lBQzVDLENBQUM7RUFDSDtFQUtPN04sY0FBY29aLFVBQUEsRUFBK0Q7SUFDbEYsT0FBT3BaLGFBQUEsQ0FBYyxLQUFLdUksS0FBQSxFQUFPNlEsVUFBVTtFQUM3QztFQVVPM1gsU0FBU3cvQixnQkFBQSxFQUEwQkMscUJBQUEsRUFBcUM7SUFDN0UsTUFBTWgzQixJQUFBLEdBQU8sT0FBTysyQixnQkFBQSxLQUFxQixXQUFXQSxnQkFBQSxHQUFtQjtJQUV2RSxNQUFNenRCLFVBQUEsR0FBYSxPQUFPeXRCLGdCQUFBLEtBQXFCLFdBQVdDLHFCQUFBLEdBQXdCRCxnQkFBQTtJQUVsRixPQUFPeC9CLFFBQUEsQ0FBUyxLQUFLOEcsS0FBQSxFQUFPMkIsSUFBQSxFQUFNc0osVUFBVTtFQUM5QztFQUtPMnRCLFFBQUEsRUFHTDtJQUNBLE9BQU8sS0FBSzU0QixLQUFBLENBQU1HLEdBQUEsQ0FBSVEsTUFBQSxDQUFPO0VBQy9CO0VBS09rNEIsUUFBQSxFQUFrQjtJQUN2QixPQUFPL2dDLG1CQUFBLENBQW9CLEtBQUtrSSxLQUFBLENBQU1HLEdBQUEsQ0FBSWlGLE9BQUEsRUFBUyxLQUFLM0UsTUFBTTtFQUNoRTtFQUtPN0gsUUFBUXlNLE9BQUEsRUFBaUc7SUFDOUcsTUFBTTtNQUFFK0ssY0FBQSxHQUFpQjtNQUFRQyxlQUFBLEdBQWtCLENBQUM7SUFBRSxJQUFJaEwsT0FBQSxJQUFXLENBQUM7SUFFdEUsT0FBT3pNLE9BQUEsQ0FBUSxLQUFLb0gsS0FBQSxDQUFNRyxHQUFBLEVBQUs7TUFDN0JpUSxjQUFBO01BQ0FDLGVBQUEsRUFBaUI7UUFDZixHQUFHdFgsNEJBQUEsQ0FBNkIsS0FBSzBILE1BQU07UUFDM0MsR0FBRzRQO01BQ0w7SUFDRixDQUFDO0VBQ0g7RUFLQSxJQUFXNGlCLFFBQUEsRUFBbUI7SUFDNUIsT0FBT3A1QixXQUFBLENBQVksS0FBS21HLEtBQUEsQ0FBTUcsR0FBRztFQUNuQztFQUtPcWUsUUFBQSxFQUFnQjtJQUNyQixLQUFLcGIsSUFBQSxDQUFLLFNBQVM7SUFFbkIsS0FBS216QixPQUFBLENBQVE7SUFFYixLQUFLN3lCLGtCQUFBLENBQW1CO0VBQzFCO0VBS0EsSUFBVytpQixZQUFBLEVBQXVCO0lBN3RCcEMsSUFBQWxaLEVBQUEsRUFBQWlCLEVBQUE7SUE4dEJJLFFBQU9BLEVBQUEsSUFBQWpCLEVBQUEsUUFBS3duQixVQUFBLEtBQUwsZ0JBQUF4bkIsRUFBQSxDQUFpQmtaLFdBQUEsS0FBakIsT0FBQWpZLEVBQUEsR0FBZ0M7RUFDekM7RUFFT3NxQixNQUFNaEYsUUFBQSxFQUFrQjdvQixVQUFBLEVBQXFEO0lBanVCdEYsSUFBQXNDLEVBQUE7SUFrdUJJLFNBQU9BLEVBQUEsUUFBS3dyQixJQUFBLEtBQUwsZ0JBQUF4ckIsRUFBQSxDQUFXMG1CLGFBQUEsQ0FBY0gsUUFBQSxFQUFVN29CLFVBQUEsTUFBZTtFQUMzRDtFQUVPK3RCLE9BQU9sRixRQUFBLEVBQWtCN29CLFVBQUEsRUFBdUQ7SUFydUJ6RixJQUFBc0MsRUFBQTtJQXN1QkksU0FBT0EsRUFBQSxRQUFLd3JCLElBQUEsS0FBTCxnQkFBQXhyQixFQUFBLENBQVcybUIsZ0JBQUEsQ0FBaUJKLFFBQUEsRUFBVTdvQixVQUFBLE1BQWU7RUFDOUQ7RUFFT3pDLEtBQUtMLEdBQUEsRUFBYTtJQUN2QixNQUFNSyxJQUFBLEdBQU8sS0FBS3hJLEtBQUEsQ0FBTUcsR0FBQSxDQUFJc1UsT0FBQSxDQUFRdE0sR0FBRztJQUV2QyxPQUFPLElBQUl2UyxPQUFBLENBQVE0UyxJQUFBLEVBQU0sSUFBSTtFQUMvQjtFQUVBLElBQUl1d0IsS0FBQSxFQUFPO0lBQ1QsT0FBTyxLQUFLdndCLElBQUEsQ0FBSyxDQUFDO0VBQ3BCO0FBQ0Y7QXlKcnVCTyxTQUFTbk8sY0FBYzBGLE1BQUEsRUFJM0I7RUFDRCxPQUFPLElBQUl4SyxTQUFBLENBQVU7SUFDbkJrWSxJQUFBLEVBQU0xTixNQUFBLENBQU8wTixJQUFBO0lBQ2I4TCxPQUFBLEVBQVNBLENBQUM7TUFBRXZaLEtBQUE7TUFBT29JLEtBQUE7TUFBT1Y7SUFBTSxNQUFNO01BQ3BDLE1BQU11RCxVQUFBLEdBQWFqVixZQUFBLENBQWErSixNQUFBLENBQU90SSxhQUFBLEVBQWUsUUFBV2lRLEtBQUs7TUFFdEUsSUFBSXVELFVBQUEsS0FBZSxTQUFTQSxVQUFBLEtBQWUsTUFBTTtRQUMvQyxPQUFPO01BQ1Q7TUFFQSxNQUFNO1FBQUVySztNQUFHLElBQUlaLEtBQUE7TUFDZixNQUFNaTVCLFlBQUEsR0FBZXZ4QixLQUFBLENBQU1BLEtBQUEsQ0FBTXBELE1BQUEsR0FBUztNQUMxQyxNQUFNNDBCLFNBQUEsR0FBWXh4QixLQUFBLENBQU07TUFFeEIsSUFBSXV4QixZQUFBLEVBQWM7UUFDaEIsTUFBTUUsV0FBQSxHQUFjRCxTQUFBLENBQVVFLE1BQUEsQ0FBTyxJQUFJO1FBQ3pDLE1BQU1DLFNBQUEsR0FBWWp4QixLQUFBLENBQU1FLElBQUEsR0FBTzR3QixTQUFBLENBQVU1cEIsT0FBQSxDQUFRMnBCLFlBQVk7UUFDN0QsTUFBTUssT0FBQSxHQUFVRCxTQUFBLEdBQVlKLFlBQUEsQ0FBYTMwQixNQUFBO1FBRXpDLE1BQU1pMUIsYUFBQSxHQUFnQnJoQyxlQUFBLENBQWdCa1EsS0FBQSxDQUFNRSxJQUFBLEVBQU1GLEtBQUEsQ0FBTUcsRUFBQSxFQUFJdkksS0FBQSxDQUFNRyxHQUFHLEVBQ2xFb0QsTUFBQSxDQUFPdUMsSUFBQSxJQUFRO1VBRWQsTUFBTTB6QixRQUFBLEdBQVcxekIsSUFBQSxDQUFLb0osSUFBQSxDQUFLdEgsSUFBQSxDQUFLNHhCLFFBQUE7VUFFaEMsT0FBT0EsUUFBQSxDQUFTL3JCLElBQUEsQ0FBSzdGLElBQUEsSUFBUUEsSUFBQSxLQUFTN0gsTUFBQSxDQUFPNkgsSUFBQSxJQUFRQSxJQUFBLEtBQVM5QixJQUFBLENBQUtvSixJQUFBLENBQUt0SCxJQUFJO1FBQzlFLENBQUMsRUFDQXJFLE1BQUEsQ0FBT3VDLElBQUEsSUFBUUEsSUFBQSxDQUFLeUMsRUFBQSxHQUFLOHdCLFNBQVM7UUFFckMsSUFBSUUsYUFBQSxDQUFjajFCLE1BQUEsRUFBUTtVQUN4QixPQUFPO1FBQ1Q7UUFFQSxJQUFJZzFCLE9BQUEsR0FBVWx4QixLQUFBLENBQU1HLEVBQUEsRUFBSTtVQUN0QjNILEVBQUEsQ0FBRyttQixNQUFBLENBQU8yUixPQUFBLEVBQVNseEIsS0FBQSxDQUFNRyxFQUFFO1FBQzdCO1FBRUEsSUFBSTh3QixTQUFBLEdBQVlqeEIsS0FBQSxDQUFNRSxJQUFBLEVBQU07VUFDMUIxSCxFQUFBLENBQUcrbUIsTUFBQSxDQUFPdmYsS0FBQSxDQUFNRSxJQUFBLEdBQU82d0IsV0FBQSxFQUFhRSxTQUFTO1FBQy9DO1FBRUEsTUFBTUksT0FBQSxHQUFVcnhCLEtBQUEsQ0FBTUUsSUFBQSxHQUFPNndCLFdBQUEsR0FBY0YsWUFBQSxDQUFhMzBCLE1BQUE7UUFFeEQxRCxFQUFBLENBQUd3cUIsT0FBQSxDQUFRaGpCLEtBQUEsQ0FBTUUsSUFBQSxHQUFPNndCLFdBQUEsRUFBYU0sT0FBQSxFQUFTMTVCLE1BQUEsQ0FBTzZILElBQUEsQ0FBS3NRLE1BQUEsQ0FBT2pOLFVBQUEsSUFBYyxDQUFDLENBQUMsQ0FBQztRQUVsRnJLLEVBQUEsQ0FBRzRiLGdCQUFBLENBQWlCemMsTUFBQSxDQUFPNkgsSUFBSTtNQUNqQztJQUNGO0VBQ0YsQ0FBQztBQUNIO0FDckRPLFNBQVNsTixjQUFjcUYsTUFBQSxFQWdCM0I7RUFDRCxPQUFPLElBQUl4SyxTQUFBLENBQVU7SUFDbkJrWSxJQUFBLEVBQU0xTixNQUFBLENBQU8wTixJQUFBO0lBQ2I4TCxPQUFBLEVBQVNBLENBQUM7TUFBRXZaLEtBQUE7TUFBT29JLEtBQUE7TUFBT1Y7SUFBTSxNQUFNO01BQ3BDLE1BQU11RCxVQUFBLEdBQWFqVixZQUFBLENBQWErSixNQUFBLENBQU90SSxhQUFBLEVBQWUsUUFBV2lRLEtBQUssS0FBSyxDQUFDO01BQzVFLE1BQU07UUFBRTlHO01BQUcsSUFBSVosS0FBQTtNQUNmLE1BQU0ySSxLQUFBLEdBQVFQLEtBQUEsQ0FBTUUsSUFBQTtNQUNwQixJQUFJK04sR0FBQSxHQUFNak8sS0FBQSxDQUFNRyxFQUFBO01BRWhCLE1BQU1teEIsT0FBQSxHQUFVMzVCLE1BQUEsQ0FBTzZILElBQUEsQ0FBS3NRLE1BQUEsQ0FBT2pOLFVBQVU7TUFFN0MsSUFBSXZELEtBQUEsQ0FBTSxJQUFJO1FBQ1osTUFBTStMLE1BQUEsR0FBUy9MLEtBQUEsQ0FBTSxHQUFHaXlCLFdBQUEsQ0FBWWp5QixLQUFBLENBQU0sRUFBRTtRQUM1QyxJQUFJa3lCLFVBQUEsR0FBYWp4QixLQUFBLEdBQVE4SyxNQUFBO1FBRXpCLElBQUltbUIsVUFBQSxHQUFhdmpCLEdBQUEsRUFBSztVQUNwQnVqQixVQUFBLEdBQWF2akIsR0FBQTtRQUNmLE9BQU87VUFDTEEsR0FBQSxHQUFNdWpCLFVBQUEsR0FBYWx5QixLQUFBLENBQU0sR0FBR3BELE1BQUE7UUFDOUI7UUFHQSxNQUFNdTFCLFFBQUEsR0FBV255QixLQUFBLENBQU0sR0FBR0EsS0FBQSxDQUFNLEdBQUdwRCxNQUFBLEdBQVM7UUFFNUMxRCxFQUFBLENBQUc2YixVQUFBLENBQVdvZCxRQUFBLEVBQVVseEIsS0FBQSxHQUFRakIsS0FBQSxDQUFNLEdBQUdwRCxNQUFBLEdBQVMsQ0FBQztRQUduRDFELEVBQUEsQ0FBR2laLFdBQUEsQ0FBWStmLFVBQUEsRUFBWXZqQixHQUFBLEVBQUtxakIsT0FBTztNQUN6QyxXQUFXaHlCLEtBQUEsQ0FBTSxJQUFJO1FBQ25CLE1BQU1veUIsY0FBQSxHQUFpQi81QixNQUFBLENBQU82SCxJQUFBLENBQUtta0IsUUFBQSxHQUFXcGpCLEtBQUEsR0FBUUEsS0FBQSxHQUFRO1FBRTlEL0gsRUFBQSxDQUFHNm1CLE1BQUEsQ0FBT3FTLGNBQUEsRUFBZ0IvNUIsTUFBQSxDQUFPNkgsSUFBQSxDQUFLc1EsTUFBQSxDQUFPak4sVUFBVSxDQUFDLEVBQUUwYyxNQUFBLENBQU8vbUIsRUFBQSxDQUFHNFIsT0FBQSxDQUFROVEsR0FBQSxDQUFJaUgsS0FBSyxHQUFHL0gsRUFBQSxDQUFHNFIsT0FBQSxDQUFROVEsR0FBQSxDQUFJMlUsR0FBRyxDQUFDO01BQzdHO01BRUF6VixFQUFBLENBQUdva0IsY0FBQSxDQUFlO0lBQ3BCO0VBQ0YsQ0FBQztBQUNIO0FDbkRPLFNBQVN4cEIsdUJBQXVCdUUsTUFBQSxFQUlwQztFQUNELE9BQU8sSUFBSXhLLFNBQUEsQ0FBVTtJQUNuQmtZLElBQUEsRUFBTTFOLE1BQUEsQ0FBTzBOLElBQUE7SUFDYjhMLE9BQUEsRUFBU0EsQ0FBQztNQUFFdlosS0FBQTtNQUFPb0ksS0FBQTtNQUFPVjtJQUFNLE1BQU07TUFDcEMsTUFBTXF5QixNQUFBLEdBQVMvNUIsS0FBQSxDQUFNRyxHQUFBLENBQUlzVSxPQUFBLENBQVFyTSxLQUFBLENBQU1FLElBQUk7TUFDM0MsTUFBTTJDLFVBQUEsR0FBYWpWLFlBQUEsQ0FBYStKLE1BQUEsQ0FBT3RJLGFBQUEsRUFBZSxRQUFXaVEsS0FBSyxLQUFLLENBQUM7TUFFNUUsSUFBSSxDQUFDcXlCLE1BQUEsQ0FBTzcxQixJQUFBLENBQUssRUFBRSxFQUFFa3BCLGNBQUEsQ0FBZTJNLE1BQUEsQ0FBTzFxQixLQUFBLENBQU0sRUFBRSxHQUFHMHFCLE1BQUEsQ0FBTzlNLFVBQUEsQ0FBVyxFQUFFLEdBQUdsdEIsTUFBQSxDQUFPNkgsSUFBSSxHQUFHO1FBQ3pGLE9BQU87TUFDVDtNQUVBNUgsS0FBQSxDQUFNWSxFQUFBLENBQUcrbUIsTUFBQSxDQUFPdmYsS0FBQSxDQUFNRSxJQUFBLEVBQU1GLEtBQUEsQ0FBTUcsRUFBRSxFQUFFbWtCLFlBQUEsQ0FBYXRrQixLQUFBLENBQU1FLElBQUEsRUFBTUYsS0FBQSxDQUFNRSxJQUFBLEVBQU12SSxNQUFBLENBQU82SCxJQUFBLEVBQU1xRCxVQUFVO0lBQ3BHO0VBQ0YsQ0FBQztBQUNIO0FDeEJPLFNBQVMzUCxjQUFjeUUsTUFBQSxFQUFvRDtFQUNoRixPQUFPLElBQUl4SyxTQUFBLENBQVU7SUFDbkJrWSxJQUFBLEVBQU0xTixNQUFBLENBQU8wTixJQUFBO0lBQ2I4TCxPQUFBLEVBQVNBLENBQUM7TUFBRXZaLEtBQUE7TUFBT29JLEtBQUE7TUFBT1Y7SUFBTSxNQUFNO01BQ3BDLElBQUkrZixNQUFBLEdBQVMxbkIsTUFBQSxDQUFPaXVCLE9BQUE7TUFDcEIsSUFBSXJsQixLQUFBLEdBQVFQLEtBQUEsQ0FBTUUsSUFBQTtNQUNsQixNQUFNK04sR0FBQSxHQUFNak8sS0FBQSxDQUFNRyxFQUFBO01BRWxCLElBQUliLEtBQUEsQ0FBTSxJQUFJO1FBQ1osTUFBTStMLE1BQUEsR0FBUy9MLEtBQUEsQ0FBTSxHQUFHaXlCLFdBQUEsQ0FBWWp5QixLQUFBLENBQU0sRUFBRTtRQUU1QytmLE1BQUEsSUFBVS9mLEtBQUEsQ0FBTSxHQUFHcEMsS0FBQSxDQUFNbU8sTUFBQSxHQUFTL0wsS0FBQSxDQUFNLEdBQUdwRCxNQUFNO1FBQ2pEcUUsS0FBQSxJQUFTOEssTUFBQTtRQUVULE1BQU11bUIsTUFBQSxHQUFTcnhCLEtBQUEsR0FBUTBOLEdBQUE7UUFFdkIsSUFBSTJqQixNQUFBLEdBQVMsR0FBRztVQUNkdlMsTUFBQSxHQUFTL2YsS0FBQSxDQUFNLEdBQUdwQyxLQUFBLENBQU1tTyxNQUFBLEdBQVN1bUIsTUFBQSxFQUFRdm1CLE1BQU0sSUFBSWdVLE1BQUE7VUFDbkQ5ZSxLQUFBLEdBQVEwTixHQUFBO1FBQ1Y7TUFDRjtNQUVBclcsS0FBQSxDQUFNWSxFQUFBLENBQUc2YixVQUFBLENBQVdnTCxNQUFBLEVBQVE5ZSxLQUFBLEVBQU8wTixHQUFHO0lBQ3hDO0VBQ0YsQ0FBQztBQUNIO0F0R1RPLFNBQVMzYSxrQkFBa0JxRSxNQUFBLEVBUS9CO0VBQ0QsT0FBTyxJQUFJeEssU0FBQSxDQUFVO0lBQ25Ca1ksSUFBQSxFQUFNMU4sTUFBQSxDQUFPME4sSUFBQTtJQUNiOEwsT0FBQSxFQUFTQSxDQUFDO01BQUV2WixLQUFBO01BQU9vSSxLQUFBO01BQU9WLEtBQUE7TUFBT3hGO0lBQU0sTUFBTTtNQUMzQyxNQUFNK0ksVUFBQSxHQUFhalYsWUFBQSxDQUFhK0osTUFBQSxDQUFPdEksYUFBQSxFQUFlLFFBQVdpUSxLQUFLLEtBQUssQ0FBQztNQUM1RSxNQUFNOUcsRUFBQSxHQUFLWixLQUFBLENBQU1ZLEVBQUEsQ0FBRyttQixNQUFBLENBQU92ZixLQUFBLENBQU1FLElBQUEsRUFBTUYsS0FBQSxDQUFNRyxFQUFFO01BQy9DLE1BQU13eEIsTUFBQSxHQUFTbjVCLEVBQUEsQ0FBR1QsR0FBQSxDQUFJc1UsT0FBQSxDQUFRck0sS0FBQSxDQUFNRSxJQUFJO01BQ3hDLE1BQU15ZSxVQUFBLEdBQWFnVCxNQUFBLENBQU9oVCxVQUFBLENBQVc7TUFDckMsTUFBTWtULFFBQUEsR0FBV2xULFVBQUEsUUFBY25uQixrQkFBQSxDQUFBczZCLFlBQUEsRUFBYW5ULFVBQUEsRUFBWWhuQixNQUFBLENBQU82SCxJQUFBLEVBQU1xRCxVQUFVO01BRS9FLElBQUksQ0FBQ2d2QixRQUFBLEVBQVU7UUFDYixPQUFPO01BQ1Q7TUFFQXI1QixFQUFBLENBQUcyc0IsSUFBQSxDQUFLeEcsVUFBQSxFQUFZa1QsUUFBUTtNQUU1QixJQUFJbDZCLE1BQUEsQ0FBTytzQixTQUFBLElBQWEvc0IsTUFBQSxDQUFPZ0IsTUFBQSxFQUFRO1FBQ3JDLE1BQU07VUFBRWIsU0FBQTtVQUFXRTtRQUFZLElBQUlKLEtBQUE7UUFDbkMsTUFBTTtVQUFFNGY7UUFBZ0IsSUFBSTdmLE1BQUEsQ0FBT2dCLE1BQUEsQ0FBT0UsZ0JBQUE7UUFDMUMsTUFBTTJGLEtBQUEsR0FBUXhHLFdBQUEsSUFBZ0JGLFNBQUEsQ0FBVW9WLEdBQUEsQ0FBSXBCLFlBQUEsSUFBZ0JoVSxTQUFBLENBQVUwSSxLQUFBLENBQU1oQyxLQUFBLENBQU07UUFFbEYsSUFBSUEsS0FBQSxFQUFPO1VBQ1QsTUFBTWltQixhQUFBLEdBQWdCam1CLEtBQUEsQ0FBTXJELE1BQUEsQ0FBTzJMLElBQUEsSUFBUTBRLGVBQUEsQ0FBZ0IzVCxRQUFBLENBQVNpRCxJQUFBLENBQUt0SCxJQUFBLENBQUtqRyxJQUFJLENBQUM7VUFFbkZmLEVBQUEsQ0FBR2dzQixXQUFBLENBQVlDLGFBQWE7UUFDOUI7TUFDRjtNQUNBLElBQUk5c0IsTUFBQSxDQUFPbzZCLGNBQUEsRUFBZ0I7UUFFekIsTUFBTTMxQixRQUFBLEdBQ0p6RSxNQUFBLENBQU82SCxJQUFBLENBQUtqRyxJQUFBLEtBQVMsZ0JBQWdCNUIsTUFBQSxDQUFPNkgsSUFBQSxDQUFLakcsSUFBQSxLQUFTLGdCQUFnQixhQUFhO1FBRXpGTyxLQUFBLENBQU0sRUFBRXVmLGdCQUFBLENBQWlCamQsUUFBQSxFQUFVeUcsVUFBVSxFQUFFdEksR0FBQSxDQUFJO01BQ3JEO01BRUEsTUFBTStGLE1BQUEsR0FBUzlILEVBQUEsQ0FBR1QsR0FBQSxDQUFJc1UsT0FBQSxDQUFRck0sS0FBQSxDQUFNRSxJQUFBLEdBQU8sQ0FBQyxFQUFFMlIsVUFBQTtNQUU5QyxJQUNFdlIsTUFBQSxJQUNBQSxNQUFBLENBQU9kLElBQUEsS0FBUzdILE1BQUEsQ0FBTzZILElBQUEsUUFDdkJoSSxrQkFBQSxDQUFBZ3ZCLE9BQUEsRUFBUWh1QixFQUFBLENBQUdULEdBQUEsRUFBS2lJLEtBQUEsQ0FBTUUsSUFBQSxHQUFPLENBQUMsTUFDN0IsQ0FBQ3ZJLE1BQUEsQ0FBT3E2QixhQUFBLElBQWlCcjZCLE1BQUEsQ0FBT3E2QixhQUFBLENBQWMxeUIsS0FBQSxFQUFPZ0IsTUFBTSxJQUM1RDtRQUNBOUgsRUFBQSxDQUFHc0wsSUFBQSxDQUFLOUQsS0FBQSxDQUFNRSxJQUFBLEdBQU8sQ0FBQztNQUN4QjtJQUNGO0VBQ0YsQ0FBQztBQUNIO0F1RzVDTyxTQUFTaFQsVUFBU3dMLEtBQUEsRUFBb0M7RUFDM0QsT0FBT0EsS0FBQSxDQUFNcUQsUUFBQTtBQUNmO0FBRU8sSUFBTTdOLENBQUEsR0FBaUJBLENBQUM0USxHQUFBLEVBQUsrRCxVQUFBLEtBQWU7RUFFakQsSUFBSS9ELEdBQUEsS0FBUSxRQUFRO0lBQ2xCLE9BQU87RUFDVDtFQUdBLElBQUlBLEdBQUEsWUFBZW16QixRQUFBLEVBQVU7SUFDM0IsT0FBT256QixHQUFBLENBQUkrRCxVQUFVO0VBQ3ZCO0VBRUEsTUFBTTtJQUFFOUcsUUFBQTtJQUFBLEdBQWErTjtFQUFLLElBQUlqSCxVQUFBLFdBQUFBLFVBQUEsR0FBYyxDQUFDO0VBRTdDLElBQUkvRCxHQUFBLEtBQVEsT0FBTztJQUNqQixNQUFNLElBQUlwQyxLQUFBLENBQU0sZ0ZBQWdGO0VBQ2xHO0VBR0EsT0FBTyxDQUFDb0MsR0FBQSxFQUFLZ0wsSUFBQSxFQUFNL04sUUFBUTtBQUM3QjtBdEd2RE8sU0FBU2xPLGNBQWMrSixLQUFBLEVBQW9Cd0UsUUFBQSxFQUE2QjtFQUM3RSxNQUFNO0lBQUV0RTtFQUFVLElBQUlGLEtBQUE7RUFDdEIsTUFBTTtJQUFFNEk7RUFBTSxJQUFJMUksU0FBQTtFQUdsQixJQUFJQSxTQUFBLFlBQXFCTCxjQUFBLENBQUFnWCxhQUFBLEVBQWU7SUFDdEMsTUFBTXhILEtBQUEsR0FBUXpHLEtBQUEsQ0FBTXlHLEtBQUEsQ0FBTTtJQUMxQixNQUFNckcsTUFBQSxHQUFTSixLQUFBLENBQU1JLE1BQUE7SUFHckIsT0FBT0EsTUFBQSxDQUFPb2tCLGNBQUEsQ0FBZS9kLEtBQUEsRUFBT0EsS0FBQSxHQUFRLEdBQUc3SyxRQUFRO0VBQ3pEO0VBR0EsSUFBSWlFLEtBQUEsR0FBUUcsS0FBQSxDQUFNSCxLQUFBO0VBRWxCLE9BQU9BLEtBQUEsSUFBUyxHQUFHO0lBQ2pCLE1BQU00RyxLQUFBLEdBQVF6RyxLQUFBLENBQU15RyxLQUFBLENBQU01RyxLQUFLO0lBQy9CLE1BQU1PLE1BQUEsR0FBU0osS0FBQSxDQUFNMUUsSUFBQSxDQUFLdUUsS0FBSztJQUMvQixNQUFNZixLQUFBLEdBQVFzQixNQUFBLENBQU9tZSxjQUFBLENBQWU5WCxLQUFLO0lBQ3pDLElBQUkzSCxLQUFBLENBQU00eUIsU0FBQSxDQUFVOTFCLFFBQVEsR0FBRztNQUM3QixPQUFPO0lBQ1Q7SUFDQWlFLEtBQUEsSUFBUztFQUNYO0VBQ0EsT0FBTztBQUNUO0F1RzVCTyxTQUFTN1IsZUFBZTJqQyxNQUFBLEVBQXdCO0VBQ3JELE9BQU9BLE1BQUEsQ0FBT3ZNLE9BQUEsQ0FBUSx5QkFBeUIsTUFBTTtBQUN2RDtBQ0hPLFNBQVM5ekIsU0FBUzBLLEtBQUEsRUFBNkI7RUFDcEQsT0FBTyxPQUFPQSxLQUFBLEtBQVU7QUFDMUI7QUNLTyxTQUFTbkoseUJBQXlCKytCLFNBQUEsRUFBaUJ6NUIsTUFBQSxFQUFnQmdNLEtBQUEsR0FBNkIsQ0FBQyxHQUFTO0VBQy9HLE1BQU07SUFBRS9NO0VBQU0sSUFBSWUsTUFBQTtFQUNsQixNQUFNO0lBQUVaLEdBQUE7SUFBS1M7RUFBRyxJQUFJWixLQUFBO0VBQ3BCLE1BQU15NkIsUUFBQSxHQUFXRCxTQUFBO0VBRWpCcjZCLEdBQUEsQ0FBSStILFdBQUEsQ0FBWSxDQUFDaEUsSUFBQSxFQUFNaUUsR0FBQSxLQUFRO0lBQzdCLE1BQU1HLElBQUEsR0FBTzFILEVBQUEsQ0FBRzRSLE9BQUEsQ0FBUTlRLEdBQUEsQ0FBSXlHLEdBQUc7SUFDL0IsTUFBTUksRUFBQSxHQUFLM0gsRUFBQSxDQUFHNFIsT0FBQSxDQUFROVEsR0FBQSxDQUFJeUcsR0FBRyxJQUFJakUsSUFBQSxDQUFLbVAsUUFBQTtJQUN0QyxJQUFJcW5CLFNBQUEsR0FBeUI7SUFHN0J4MkIsSUFBQSxDQUFLMEMsS0FBQSxDQUFNdkQsT0FBQSxDQUFRNkwsSUFBQSxJQUFRO01BQ3pCLElBQUlBLElBQUEsS0FBU3VyQixRQUFBLEVBQVU7UUFDckIsT0FBTztNQUNUO01BRUFDLFNBQUEsR0FBWXhyQixJQUFBO0lBQ2QsQ0FBQztJQUVELElBQUksQ0FBQ3dyQixTQUFBLEVBQVc7TUFDZDtJQUNGO0lBR0EsSUFBSUMsV0FBQSxHQUFjO0lBQ2xCcDVCLE1BQUEsQ0FBT3dJLElBQUEsQ0FBS2dELEtBQUssRUFBRTFKLE9BQUEsQ0FBUTBRLENBQUEsSUFBSztNQUM5QixJQUFJaEgsS0FBQSxDQUFNZ0gsQ0FBQSxNQUFPMm1CLFNBQUEsQ0FBVzN0QixLQUFBLENBQU1nSCxDQUFBLEdBQUk7UUFDcEM0bUIsV0FBQSxHQUFjO01BQ2hCO0lBQ0YsQ0FBQztJQUVELElBQUlBLFdBQUEsRUFBYTtNQUNmLE1BQU1DLFdBQUEsR0FBY0osU0FBQSxDQUFVNXlCLElBQUEsQ0FBS3NRLE1BQUEsQ0FBTztRQUN4QyxHQUFHc2lCLFNBQUEsQ0FBVXp0QixLQUFBO1FBQ2IsR0FBR0E7TUFDTCxDQUFDO01BRURuTSxFQUFBLENBQUcyYixVQUFBLENBQVdqVSxJQUFBLEVBQU1DLEVBQUEsRUFBSWl5QixTQUFBLENBQVU1eUIsSUFBSTtNQUN0Q2hILEVBQUEsQ0FBR3dxQixPQUFBLENBQVE5aUIsSUFBQSxFQUFNQyxFQUFBLEVBQUlxeUIsV0FBVztJQUNsQztFQUNGLENBQUM7RUFFRCxJQUFJaDZCLEVBQUEsQ0FBR2thLFVBQUEsRUFBWTtJQUNqQi9aLE1BQUEsQ0FBT00sSUFBQSxDQUFLWSxRQUFBLENBQVNyQixFQUFFO0VBQ3pCO0FBQ0Y7QUFFTyxJQUFNbkwsUUFBQSxHQUFOLE1BQTZGO0VBT2xHb0wsWUFBWWc2QixTQUFBLEVBQXNCLzVCLEtBQUEsRUFBc0J1RSxPQUFBLEVBQTRCO0lBQ2xGLEtBQUt3MUIsU0FBQSxHQUFZQSxTQUFBO0lBQ2pCLEtBQUs5NUIsTUFBQSxHQUFTRCxLQUFBLENBQU1DLE1BQUE7SUFDcEIsS0FBS3NFLE9BQUEsR0FBVTtNQUFFLEdBQUdBO0lBQVE7SUFDNUIsS0FBSzZKLElBQUEsR0FBT3BPLEtBQUEsQ0FBTW9PLElBQUE7SUFDbEIsS0FBS1IsY0FBQSxHQUFpQjVOLEtBQUEsQ0FBTTROLGNBQUE7RUFDOUI7RUFFQSxJQUFJd0IsSUFBQSxFQUFtQjtJQUNyQixPQUFPLEtBQUtuUCxNQUFBLENBQU9NLElBQUEsQ0FBSzZPLEdBQUE7RUFDMUI7RUFFQSxJQUFJNHFCLFdBQUEsRUFBaUM7SUFDbkMsT0FBTztFQUNUO0VBTUFyWixpQkFBaUIxVSxLQUFBLEVBQTRCeXRCLFNBQUEsRUFBd0I7SUFDbkUvK0Isd0JBQUEsQ0FBeUIrK0IsU0FBQSxJQUFhLEtBQUt0ckIsSUFBQSxFQUFNLEtBQUtuTyxNQUFBLEVBQVFnTSxLQUFLO0VBQ3JFO0VBRUFndUIsZUFBZUMsUUFBQSxFQUF1QztJQUNwRCxJQUFJLENBQUMsS0FBSzlxQixHQUFBLElBQU8sQ0FBQyxLQUFLNHFCLFVBQUEsRUFBWTtNQUNqQyxPQUFPO0lBQ1Q7SUFFQSxJQUFJLE9BQU8sS0FBS3oxQixPQUFBLENBQVEwMUIsY0FBQSxLQUFtQixZQUFZO01BQ3JELE9BQU8sS0FBSzExQixPQUFBLENBQVEwMUIsY0FBQSxDQUFlO1FBQUVDO01BQVMsQ0FBQztJQUNqRDtJQUVBLElBQUlBLFFBQUEsQ0FBU3B6QixJQUFBLEtBQVMsYUFBYTtNQUNqQyxPQUFPO0lBQ1Q7SUFFQSxJQUNFLEtBQUtzSSxHQUFBLENBQUltTyxRQUFBLENBQVMyYyxRQUFBLENBQVN6ZixNQUFNLEtBQ2pDeWYsUUFBQSxDQUFTcHpCLElBQUEsS0FBUyxnQkFDakJ4TixLQUFBLENBQU0sS0FBS2pCLFNBQUEsQ0FBVSxNQUN0QixLQUFLNEgsTUFBQSxDQUFPMndCLFNBQUEsRUFDWjtNQUNBLE1BQU11SixZQUFBLEdBQWUsQ0FBQyxHQUFHdDFCLEtBQUEsQ0FBTTJDLElBQUEsQ0FBSzB5QixRQUFBLENBQVNFLFVBQVUsR0FBRyxHQUFHdjFCLEtBQUEsQ0FBTTJDLElBQUEsQ0FBSzB5QixRQUFBLENBQVNHLFlBQVksQ0FBQztNQUU5RixJQUFJRixZQUFBLENBQWFyNEIsS0FBQSxDQUFNc0IsSUFBQSxJQUFRQSxJQUFBLENBQUtrM0IsaUJBQWlCLEdBQUc7UUFDdEQsT0FBTztNQUNUO0lBQ0Y7SUFFQSxJQUFJLEtBQUtOLFVBQUEsS0FBZUUsUUFBQSxDQUFTemYsTUFBQSxJQUFVeWYsUUFBQSxDQUFTcHpCLElBQUEsS0FBUyxjQUFjO01BQ3pFLE9BQU87SUFDVDtJQUVBLElBQUksS0FBS2t6QixVQUFBLENBQVd6YyxRQUFBLENBQVMyYyxRQUFBLENBQVN6ZixNQUFNLEdBQUc7TUFDN0MsT0FBTztJQUNUO0lBRUEsT0FBTztFQUNUO0FBQ0Y7QUMwTk8sSUFBTTVsQixLQUFBLEdBQU4sTUFBTTBsQyxLQUFBLFNBQTJDNWYsVUFBQSxDQUEyRDtFQUE1RzVhLFlBQUE7SUFBQSxTQUFBa2IsU0FBQTtJQUNMLEtBQUFuVSxJQUFBLEdBQU87RUFBQTtFQU1QLE9BQU9zUSxPQUF5Qm5ZLE1BQUEsR0FBd0UsQ0FBQyxHQUFHO0lBRTFHLE1BQU1pYyxjQUFBLEdBQWlCLE9BQU9qYyxNQUFBLEtBQVcsYUFBYUEsTUFBQSxDQUFPLElBQUlBLE1BQUE7SUFDakUsT0FBTyxJQUFJczdCLEtBQUEsQ0FBV3JmLGNBQWM7RUFDdEM7RUFFQU4sVUFBVXJXLE9BQUEsRUFBNEI7SUFDcEMsT0FBTyxNQUFNcVcsU0FBQSxDQUFVclcsT0FBTztFQUNoQztFQUVBc1csT0FLRUUsY0FBQSxFQVV3QztJQUV4QyxNQUFNRyxjQUFBLEdBQWlCLE9BQU9ILGNBQUEsS0FBbUIsYUFBYUEsY0FBQSxDQUFlLElBQUlBLGNBQUE7SUFDakYsT0FBTyxNQUFNRixNQUFBLENBQU9LLGNBQWM7RUFDcEM7QUFDRjtBekc1V08sSUFBTW5tQixRQUFBLEdBQU4sTUFLUDtFQXVCRWdMLFlBQVlnNkIsU0FBQSxFQUFzQi81QixLQUFBLEVBQThCdUUsT0FBQSxFQUE0QjtJQUY1RixLQUFBaTJCLFVBQUEsR0FBYTtJQUdYLEtBQUtULFNBQUEsR0FBWUEsU0FBQTtJQUNqQixLQUFLOTVCLE1BQUEsR0FBU0QsS0FBQSxDQUFNQyxNQUFBO0lBQ3BCLEtBQUtzRSxPQUFBLEdBQVU7TUFDYmsyQixTQUFBLEVBQVc7TUFDWFIsY0FBQSxFQUFnQjtNQUNoQixHQUFHMTFCO0lBQ0w7SUFDQSxLQUFLd0QsU0FBQSxHQUFZL0gsS0FBQSxDQUFNK0gsU0FBQTtJQUN2QixLQUFLM0UsSUFBQSxHQUFPcEQsS0FBQSxDQUFNb0QsSUFBQTtJQUNsQixLQUFLa2QsV0FBQSxHQUFjdGdCLEtBQUEsQ0FBTXNnQixXQUFBO0lBQ3pCLEtBQUtDLGdCQUFBLEdBQW1CdmdCLEtBQUEsQ0FBTXVnQixnQkFBQTtJQUM5QixLQUFLaGdCLElBQUEsR0FBT1AsS0FBQSxDQUFNTyxJQUFBO0lBQ2xCLEtBQUtxTixjQUFBLEdBQWlCNU4sS0FBQSxDQUFNNE4sY0FBQTtJQUM1QixLQUFLeVMsTUFBQSxHQUFTcmdCLEtBQUEsQ0FBTXFnQixNQUFBO0lBQ3BCLEtBQUtrVixLQUFBLENBQU07RUFDYjtFQUVBQSxNQUFBLEVBQVE7SUFFTjtFQUNGO0VBRUEsSUFBSW5tQixJQUFBLEVBQW1CO0lBQ3JCLE9BQU8sS0FBS25QLE1BQUEsQ0FBT00sSUFBQSxDQUFLNk8sR0FBQTtFQUMxQjtFQUVBLElBQUk0cUIsV0FBQSxFQUFpQztJQUNuQyxPQUFPO0VBQ1Q7RUFFQVUsWUFBWXQ0QixLQUFBLEVBQWtCO0lBdkVoQyxJQUFBcUssRUFBQSxFQUFBaUIsRUFBQSxFQUFBMGhCLEVBQUEsRUFBQUcsRUFBQSxFQUFBb0wsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUE7SUF3RUksTUFBTTtNQUFFdDZCO0lBQUssSUFBSSxLQUFLTixNQUFBO0lBQ3RCLE1BQU13YSxNQUFBLEdBQVNyWSxLQUFBLENBQU1xWSxNQUFBO0lBSXJCLE1BQU1xZ0IsVUFBQSxHQUNKcmdCLE1BQUEsQ0FBTy9XLFFBQUEsS0FBYSxLQUFJK0ksRUFBQSxHQUFBZ08sTUFBQSxDQUFPNkMsYUFBQSxLQUFQLGdCQUFBN1EsRUFBQSxDQUFzQnNtQixPQUFBLENBQVEsd0JBQXdCdFksTUFBQSxDQUFPc1ksT0FBQSxDQUFRLG9CQUFvQjtJQUVuSCxJQUFJLENBQUMsS0FBSzNqQixHQUFBLE1BQU8xQixFQUFBLFFBQUtzc0IsVUFBQSxLQUFMLGdCQUFBdHNCLEVBQUEsQ0FBaUI2UCxRQUFBLENBQVM5QyxNQUFBLE1BQVcsQ0FBQ3FnQixVQUFBLEVBQVk7TUFDakU7SUFDRjtJQUVBLElBQUlsa0IsQ0FBQSxHQUFJO0lBQ1IsSUFBSUMsQ0FBQSxHQUFJO0lBR1IsSUFBSSxLQUFLekgsR0FBQSxLQUFRMHJCLFVBQUEsRUFBWTtNQUMzQixNQUFNQyxNQUFBLEdBQVMsS0FBSzNyQixHQUFBLENBQUk0ckIscUJBQUEsQ0FBc0I7TUFDOUMsTUFBTUMsU0FBQSxHQUFZSCxVQUFBLENBQVdFLHFCQUFBLENBQXNCO01BR25ELE1BQU1FLE9BQUEsSUFBVTNMLEVBQUEsR0FBQW50QixLQUFBLENBQU04NEIsT0FBQSxLQUFOLE9BQUEzTCxFQUFBLElBQWtCSCxFQUFBLEdBQUFodEIsS0FBQSxDQUFjKzRCLFdBQUEsS0FBZCxnQkFBQS9MLEVBQUEsQ0FBMkI4TCxPQUFBO01BQzdELE1BQU1FLE9BQUEsSUFBVVIsRUFBQSxHQUFBeDRCLEtBQUEsQ0FBTWc1QixPQUFBLEtBQU4sT0FBQVIsRUFBQSxJQUFrQkQsRUFBQSxHQUFBdjRCLEtBQUEsQ0FBYys0QixXQUFBLEtBQWQsZ0JBQUFSLEVBQUEsQ0FBMkJTLE9BQUE7TUFFN0R4a0IsQ0FBQSxHQUFJcWtCLFNBQUEsQ0FBVXJrQixDQUFBLEdBQUlta0IsTUFBQSxDQUFPbmtCLENBQUEsR0FBSXNrQixPQUFBO01BQzdCcmtCLENBQUEsR0FBSW9rQixTQUFBLENBQVVwa0IsQ0FBQSxHQUFJa2tCLE1BQUEsQ0FBT2xrQixDQUFBLEdBQUl1a0IsT0FBQTtJQUMvQjtJQUVBLE1BQU1DLFVBQUEsR0FBYSxLQUFLanNCLEdBQUEsQ0FBSWtzQixTQUFBLENBQVUsSUFBSTtJQUUxQyxDQUFBVCxFQUFBLEdBQUF6NEIsS0FBQSxDQUFNbTVCLFlBQUEsS0FBTixnQkFBQVYsRUFBQSxDQUFvQlcsWUFBQSxDQUFhSCxVQUFBLEVBQVl6a0IsQ0FBQSxFQUFHQyxDQUFBO0lBRWhELE1BQU14UCxHQUFBLEdBQU0sS0FBS2daLE1BQUEsQ0FBTztJQUV4QixJQUFJLE9BQU9oWixHQUFBLEtBQVEsVUFBVTtNQUMzQjtJQUNGO0lBR0EsTUFBTWpJLFNBQUEsR0FBWUosY0FBQSxDQUFBK1csYUFBQSxDQUFjcUIsTUFBQSxDQUFPN1csSUFBQSxDQUFLckIsS0FBQSxDQUFNRyxHQUFBLEVBQUtnSSxHQUFHO0lBQzFELE1BQU1sSSxXQUFBLEdBQWNvQixJQUFBLENBQUtyQixLQUFBLENBQU1ZLEVBQUEsQ0FBR3lZLFlBQUEsQ0FBYW5aLFNBQVM7SUFFeERtQixJQUFBLENBQUtZLFFBQUEsQ0FBU2hDLFdBQVc7RUFDM0I7RUFFQXM3QixVQUFVcjRCLEtBQUEsRUFBYztJQXJIMUIsSUFBQXFLLEVBQUE7SUFzSEksSUFBSSxDQUFDLEtBQUsyQyxHQUFBLEVBQUs7TUFDYixPQUFPO0lBQ1Q7SUFFQSxJQUFJLE9BQU8sS0FBSzdLLE9BQUEsQ0FBUWsyQixTQUFBLEtBQWMsWUFBWTtNQUNoRCxPQUFPLEtBQUtsMkIsT0FBQSxDQUFRazJCLFNBQUEsQ0FBVTtRQUFFcjRCO01BQU0sQ0FBQztJQUN6QztJQUVBLE1BQU1xWSxNQUFBLEdBQVNyWSxLQUFBLENBQU1xWSxNQUFBO0lBQ3JCLE1BQU1naEIsV0FBQSxHQUFjLEtBQUtyc0IsR0FBQSxDQUFJbU8sUUFBQSxDQUFTOUMsTUFBTSxLQUFLLEdBQUNoTyxFQUFBLFFBQUt1dEIsVUFBQSxLQUFMLGdCQUFBdnRCLEVBQUEsQ0FBaUI4USxRQUFBLENBQVM5QyxNQUFBO0lBRzVFLElBQUksQ0FBQ2doQixXQUFBLEVBQWE7TUFDaEIsT0FBTztJQUNUO0lBRUEsTUFBTUMsV0FBQSxHQUFjdDVCLEtBQUEsQ0FBTTBFLElBQUEsQ0FBSzJ2QixVQUFBLENBQVcsTUFBTTtJQUNoRCxNQUFNa0YsV0FBQSxHQUFjdjVCLEtBQUEsQ0FBTTBFLElBQUEsS0FBUztJQUNuQyxNQUFNODBCLE9BQUEsR0FBVSxDQUFDLFNBQVMsVUFBVSxVQUFVLFVBQVUsRUFBRXp3QixRQUFBLENBQVNzUCxNQUFBLENBQU9vaEIsT0FBTyxLQUFLcGhCLE1BQUEsQ0FBTzZmLGlCQUFBO0lBRzdGLElBQUlzQixPQUFBLElBQVcsQ0FBQ0QsV0FBQSxJQUFlLENBQUNELFdBQUEsRUFBYTtNQUMzQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNO01BQUU1ZDtJQUFXLElBQUksS0FBSzdkLE1BQUE7SUFDNUIsTUFBTTtNQUFFdTZCO0lBQVcsSUFBSTtJQUN2QixNQUFNc0IsV0FBQSxHQUFjLENBQUMsQ0FBQyxLQUFLMTRCLElBQUEsQ0FBSzBELElBQUEsQ0FBS2pCLElBQUEsQ0FBS3FILFNBQUE7SUFDMUMsTUFBTTZ1QixZQUFBLEdBQWUvOEIsY0FBQSxDQUFBK1csYUFBQSxDQUFjZ21CLFlBQUEsQ0FBYSxLQUFLMzRCLElBQUk7SUFDekQsTUFBTTQ0QixXQUFBLEdBQWM1NUIsS0FBQSxDQUFNMEUsSUFBQSxLQUFTO0lBQ25DLE1BQU1tMUIsWUFBQSxHQUFlNzVCLEtBQUEsQ0FBTTBFLElBQUEsS0FBUztJQUNwQyxNQUFNbzFCLFVBQUEsR0FBYTk1QixLQUFBLENBQU0wRSxJQUFBLEtBQVM7SUFDbEMsTUFBTXExQixZQUFBLEdBQWUvNUIsS0FBQSxDQUFNMEUsSUFBQSxLQUFTO0lBS3BDLElBQUksQ0FBQ2cxQixXQUFBLElBQWVDLFlBQUEsSUFBZ0JMLFdBQUEsSUFBZXQ1QixLQUFBLENBQU1xWSxNQUFBLEtBQVcsS0FBS3JMLEdBQUEsRUFBSztNQUM1RWhOLEtBQUEsQ0FBTWc2QixjQUFBLENBQWU7SUFDdkI7SUFFQSxJQUFJTixXQUFBLElBQWVKLFdBQUEsSUFBZSxDQUFDbEIsVUFBQSxJQUFjcDRCLEtBQUEsQ0FBTXFZLE1BQUEsS0FBVyxLQUFLckwsR0FBQSxFQUFLO01BQzFFaE4sS0FBQSxDQUFNZzZCLGNBQUEsQ0FBZTtNQUNyQixPQUFPO0lBQ1Q7SUFHQSxJQUFJTixXQUFBLElBQWVoZSxVQUFBLElBQWMsQ0FBQzBjLFVBQUEsSUFBYzJCLFlBQUEsRUFBYztNQUM1RCxNQUFNckIsVUFBQSxHQUFhcmdCLE1BQUEsQ0FBT3NZLE9BQUEsQ0FBUSxvQkFBb0I7TUFDdEQsTUFBTXNKLGlCQUFBLEdBQW9CdkIsVUFBQSxLQUFlLEtBQUsxckIsR0FBQSxLQUFRMHJCLFVBQUEsSUFBYyxLQUFLMXJCLEdBQUEsQ0FBSW1PLFFBQUEsQ0FBU3VkLFVBQVU7TUFFaEcsSUFBSXVCLGlCQUFBLEVBQW1CO1FBQ3JCLEtBQUs3QixVQUFBLEdBQWE7UUFFbEI3eEIsUUFBQSxDQUFTOFUsZ0JBQUEsQ0FDUCxXQUNBLE1BQU07VUFDSixLQUFLK2MsVUFBQSxHQUFhO1FBQ3BCLEdBQ0E7VUFBRTkzQixJQUFBLEVBQU07UUFBSyxDQUNmO1FBRUFpRyxRQUFBLENBQVM4VSxnQkFBQSxDQUNQLFFBQ0EsTUFBTTtVQUNKLEtBQUsrYyxVQUFBLEdBQWE7UUFDcEIsR0FDQTtVQUFFOTNCLElBQUEsRUFBTTtRQUFLLENBQ2Y7UUFFQWlHLFFBQUEsQ0FBUzhVLGdCQUFBLENBQ1AsV0FDQSxNQUFNO1VBQ0osS0FBSytjLFVBQUEsR0FBYTtRQUNwQixHQUNBO1VBQUU5M0IsSUFBQSxFQUFNO1FBQUssQ0FDZjtNQUNGO0lBQ0Y7SUFHQSxJQUFJODNCLFVBQUEsSUFBY21CLFdBQUEsSUFBZUssV0FBQSxJQUFlQyxZQUFBLElBQWdCQyxVQUFBLElBQWVDLFlBQUEsSUFBZ0JKLFlBQUEsRUFBZTtNQUM1RyxPQUFPO0lBQ1Q7SUFFQSxPQUFPO0VBQ1Q7RUFPQTlCLGVBQWVDLFFBQUEsRUFBOEI7SUFDM0MsSUFBSSxDQUFDLEtBQUs5cUIsR0FBQSxJQUFPLENBQUMsS0FBSzRxQixVQUFBLEVBQVk7TUFDakMsT0FBTztJQUNUO0lBRUEsSUFBSSxPQUFPLEtBQUt6MUIsT0FBQSxDQUFRMDFCLGNBQUEsS0FBbUIsWUFBWTtNQUNyRCxPQUFPLEtBQUsxMUIsT0FBQSxDQUFRMDFCLGNBQUEsQ0FBZTtRQUFFQztNQUFTLENBQUM7SUFDakQ7SUFJQSxJQUFJLEtBQUs5MkIsSUFBQSxDQUFLd1MsTUFBQSxJQUFVLEtBQUt4UyxJQUFBLENBQUtpUixNQUFBLEVBQVE7TUFDeEMsT0FBTztJQUNUO0lBR0EsSUFBSTZsQixRQUFBLENBQVNwekIsSUFBQSxLQUFTLGFBQWE7TUFDakMsT0FBTztJQUNUO0lBT0EsSUFDRSxLQUFLc0ksR0FBQSxDQUFJbU8sUUFBQSxDQUFTMmMsUUFBQSxDQUFTemYsTUFBTSxLQUNqQ3lmLFFBQUEsQ0FBU3B6QixJQUFBLEtBQVMsZ0JBQ2pCeE4sS0FBQSxDQUFNLEtBQUtqQixTQUFBLENBQVUsTUFDdEIsS0FBSzRILE1BQUEsQ0FBTzJ3QixTQUFBLEVBQ1o7TUFDQSxNQUFNdUosWUFBQSxHQUFlLENBQUMsR0FBR3QxQixLQUFBLENBQU0yQyxJQUFBLENBQUsweUIsUUFBQSxDQUFTRSxVQUFVLEdBQUcsR0FBR3YxQixLQUFBLENBQU0yQyxJQUFBLENBQUsweUIsUUFBQSxDQUFTRyxZQUFZLENBQUM7TUFJOUYsSUFBSUYsWUFBQSxDQUFhcjRCLEtBQUEsQ0FBTXNCLElBQUEsSUFBUUEsSUFBQSxDQUFLazNCLGlCQUFpQixHQUFHO1FBQ3RELE9BQU87TUFDVDtJQUNGO0lBSUEsSUFBSSxLQUFLTixVQUFBLEtBQWVFLFFBQUEsQ0FBU3pmLE1BQUEsSUFBVXlmLFFBQUEsQ0FBU3B6QixJQUFBLEtBQVMsY0FBYztNQUN6RSxPQUFPO0lBQ1Q7SUFHQSxJQUFJLEtBQUtrekIsVUFBQSxDQUFXemMsUUFBQSxDQUFTMmMsUUFBQSxDQUFTemYsTUFBTSxHQUFHO01BQzdDLE9BQU87SUFDVDtJQUVBLE9BQU87RUFDVDtFQUtBa0csaUJBQWlCeFcsVUFBQSxFQUF1QztJQUN0RCxLQUFLbEssTUFBQSxDQUFPRyxRQUFBLENBQVNtaUIsT0FBQSxDQUFRLENBQUM7TUFBRXppQjtJQUFHLE1BQU07TUFDdkMsTUFBTXVILEdBQUEsR0FBTSxLQUFLZ1osTUFBQSxDQUFPO01BRXhCLElBQUksT0FBT2haLEdBQUEsS0FBUSxVQUFVO1FBQzNCLE9BQU87TUFDVDtNQUVBdkgsRUFBQSxDQUFHd21CLGFBQUEsQ0FBY2pmLEdBQUEsRUFBSyxRQUFXO1FBQy9CLEdBQUcsS0FBS2pFLElBQUEsQ0FBSzZJLEtBQUE7UUFDYixHQUFHOUI7TUFDTCxDQUFDO01BRUQsT0FBTztJQUNULENBQUM7RUFDSDtFQUtBd1ksV0FBQSxFQUFtQjtJQUNqQixNQUFNbmIsSUFBQSxHQUFPLEtBQUs2WSxNQUFBLENBQU87SUFFekIsSUFBSSxPQUFPN1ksSUFBQSxLQUFTLFVBQVU7TUFDNUI7SUFDRjtJQUNBLE1BQU1DLEVBQUEsR0FBS0QsSUFBQSxHQUFPLEtBQUtwRSxJQUFBLENBQUttUCxRQUFBO0lBRTVCLEtBQUt0UyxNQUFBLENBQU9HLFFBQUEsQ0FBUzJkLFdBQUEsQ0FBWTtNQUFFdlcsSUFBQTtNQUFNQztJQUFHLENBQUM7RUFDL0M7QUFDRjtBMEc3Uk8sU0FBU2pPLGNBQWN5RixNQUFBLEVBUTNCO0VBQ0QsT0FBTyxJQUFJakssU0FBQSxDQUFVO0lBQ25CMlgsSUFBQSxFQUFNMU4sTUFBQSxDQUFPME4sSUFBQTtJQUNiOEwsT0FBQSxFQUFTQSxDQUFDO01BQUV2WixLQUFBO01BQU9vSSxLQUFBO01BQU9WLEtBQUE7TUFBT3FWO0lBQVcsTUFBTTtNQUNoRCxNQUFNOVIsVUFBQSxHQUFhalYsWUFBQSxDQUFhK0osTUFBQSxDQUFPdEksYUFBQSxFQUFlLFFBQVdpUSxLQUFBLEVBQU9xVixVQUFVO01BRWxGLElBQUk5UixVQUFBLEtBQWUsU0FBU0EsVUFBQSxLQUFlLE1BQU07UUFDL0MsT0FBTztNQUNUO01BRUEsTUFBTTtRQUFFcks7TUFBRyxJQUFJWixLQUFBO01BQ2YsTUFBTWk1QixZQUFBLEdBQWV2eEIsS0FBQSxDQUFNQSxLQUFBLENBQU1wRCxNQUFBLEdBQVM7TUFDMUMsTUFBTTQwQixTQUFBLEdBQVl4eEIsS0FBQSxDQUFNO01BQ3hCLElBQUkreEIsT0FBQSxHQUFVcnhCLEtBQUEsQ0FBTUcsRUFBQTtNQUVwQixJQUFJMHdCLFlBQUEsRUFBYztRQUNoQixNQUFNRSxXQUFBLEdBQWNELFNBQUEsQ0FBVUUsTUFBQSxDQUFPLElBQUk7UUFDekMsTUFBTUMsU0FBQSxHQUFZanhCLEtBQUEsQ0FBTUUsSUFBQSxHQUFPNHdCLFNBQUEsQ0FBVTVwQixPQUFBLENBQVEycEIsWUFBWTtRQUM3RCxNQUFNSyxPQUFBLEdBQVVELFNBQUEsR0FBWUosWUFBQSxDQUFhMzBCLE1BQUE7UUFFekMsTUFBTWkxQixhQUFBLEdBQWdCcmhDLGVBQUEsQ0FBZ0JrUSxLQUFBLENBQU1FLElBQUEsRUFBTUYsS0FBQSxDQUFNRyxFQUFBLEVBQUl2SSxLQUFBLENBQU1HLEdBQUcsRUFDbEVvRCxNQUFBLENBQU91QyxJQUFBLElBQVE7VUFFZCxNQUFNMHpCLFFBQUEsR0FBVzF6QixJQUFBLENBQUtvSixJQUFBLENBQUt0SCxJQUFBLENBQUs0eEIsUUFBQTtVQUVoQyxPQUFPQSxRQUFBLENBQVMvckIsSUFBQSxDQUFLN0YsSUFBQSxJQUFRQSxJQUFBLEtBQVM3SCxNQUFBLENBQU82SCxJQUFBLElBQVFBLElBQUEsS0FBUzlCLElBQUEsQ0FBS29KLElBQUEsQ0FBS3RILElBQUk7UUFDOUUsQ0FBQyxFQUNBckUsTUFBQSxDQUFPdUMsSUFBQSxJQUFRQSxJQUFBLENBQUt5QyxFQUFBLEdBQUs4d0IsU0FBUztRQUVyQyxJQUFJRSxhQUFBLENBQWNqMUIsTUFBQSxFQUFRO1VBQ3hCLE9BQU87UUFDVDtRQUVBLElBQUlnMUIsT0FBQSxHQUFVbHhCLEtBQUEsQ0FBTUcsRUFBQSxFQUFJO1VBQ3RCM0gsRUFBQSxDQUFHK21CLE1BQUEsQ0FBTzJSLE9BQUEsRUFBU2x4QixLQUFBLENBQU1HLEVBQUU7UUFDN0I7UUFFQSxJQUFJOHdCLFNBQUEsR0FBWWp4QixLQUFBLENBQU1FLElBQUEsRUFBTTtVQUMxQjFILEVBQUEsQ0FBRyttQixNQUFBLENBQU92ZixLQUFBLENBQU1FLElBQUEsR0FBTzZ3QixXQUFBLEVBQWFFLFNBQVM7UUFDL0M7UUFFQUksT0FBQSxHQUFVcnhCLEtBQUEsQ0FBTUUsSUFBQSxHQUFPNndCLFdBQUEsR0FBY0YsWUFBQSxDQUFhMzBCLE1BQUE7UUFFbEQxRCxFQUFBLENBQUd3cUIsT0FBQSxDQUFRaGpCLEtBQUEsQ0FBTUUsSUFBQSxHQUFPNndCLFdBQUEsRUFBYU0sT0FBQSxFQUFTMTVCLE1BQUEsQ0FBTzZILElBQUEsQ0FBS3NRLE1BQUEsQ0FBT2pOLFVBQUEsSUFBYyxDQUFDLENBQUMsQ0FBQztRQUVsRnJLLEVBQUEsQ0FBRzRiLGdCQUFBLENBQWlCemMsTUFBQSxDQUFPNkgsSUFBSTtNQUNqQztJQUNGO0VBQ0YsQ0FBQztBQUNIO0FDMURPLFNBQVNqTixjQUFjb0YsTUFBQSxFQVMzQjtFQUNELE9BQU8sSUFBSWpLLFNBQUEsQ0FBVTtJQUNuQjJYLElBQUEsRUFBTTFOLE1BQUEsQ0FBTzBOLElBQUE7SUFDYjhMLFFBQVE7TUFBRTdSLEtBQUE7TUFBT3hGLEtBQUE7TUFBT2tHLEtBQUE7TUFBTzJVO0lBQVcsR0FBRztNQUMzQyxNQUFNOVIsVUFBQSxHQUFhalYsWUFBQSxDQUFhK0osTUFBQSxDQUFPdEksYUFBQSxFQUFlLFFBQVdpUSxLQUFBLEVBQU9xVixVQUFVO01BQ2xGLE1BQU0zWCxPQUFBLEdBQVVwUCxZQUFBLENBQWErSixNQUFBLENBQU9xOUIsVUFBQSxFQUFZLFFBQVdueUIsVUFBVTtNQUVyRSxJQUFJQSxVQUFBLEtBQWUsU0FBU0EsVUFBQSxLQUFlLE1BQU07UUFDL0MsT0FBTztNQUNUO01BRUEsTUFBTS9HLElBQUEsR0FBTztRQUFFMEQsSUFBQSxFQUFNN0gsTUFBQSxDQUFPNkgsSUFBQSxDQUFLakcsSUFBQTtRQUFNb0wsS0FBQSxFQUFPOUI7TUFBVztNQUV6RCxJQUFJN0YsT0FBQSxFQUFTO1FBQ1hsQixJQUFBLENBQUtrQixPQUFBLEdBQVVBLE9BQUE7TUFDakI7TUFFQSxJQUFJc0MsS0FBQSxDQUFNa1MsS0FBQSxFQUFPO1FBQ2YxWCxLQUFBLENBQU0sRUFBRTJjLFdBQUEsQ0FBWXpXLEtBQUssRUFBRTZiLGVBQUEsQ0FBZ0I3YixLQUFBLENBQU1FLElBQUEsRUFBTXBFLElBQUk7TUFDN0Q7SUFDRjtFQUNGLENBQUM7QUFDSDtBQ25DTyxTQUFTM0ksY0FBY3dFLE1BQUEsRUFBb0Q7RUFDaEYsT0FBTyxJQUFJakssU0FBQSxDQUFVO0lBQ25CMlgsSUFBQSxFQUFNMU4sTUFBQSxDQUFPME4sSUFBQTtJQUNiOEwsT0FBQSxFQUFTQSxDQUFDO01BQUV2WixLQUFBO01BQU9vSSxLQUFBO01BQU9WO0lBQU0sTUFBTTtNQUNwQyxJQUFJK2YsTUFBQSxHQUFTMW5CLE1BQUEsQ0FBT2l1QixPQUFBO01BQ3BCLElBQUlybEIsS0FBQSxHQUFRUCxLQUFBLENBQU1FLElBQUE7TUFDbEIsTUFBTStOLEdBQUEsR0FBTWpPLEtBQUEsQ0FBTUcsRUFBQTtNQUVsQixJQUFJYixLQUFBLENBQU0sSUFBSTtRQUNaLE1BQU0rTCxNQUFBLEdBQVMvTCxLQUFBLENBQU0sR0FBR2l5QixXQUFBLENBQVlqeUIsS0FBQSxDQUFNLEVBQUU7UUFFNUMrZixNQUFBLElBQVUvZixLQUFBLENBQU0sR0FBR3BDLEtBQUEsQ0FBTW1PLE1BQUEsR0FBUy9MLEtBQUEsQ0FBTSxHQUFHcEQsTUFBTTtRQUNqRHFFLEtBQUEsSUFBUzhLLE1BQUE7UUFFVCxNQUFNdW1CLE1BQUEsR0FBU3J4QixLQUFBLEdBQVEwTixHQUFBO1FBRXZCLElBQUkyakIsTUFBQSxHQUFTLEdBQUc7VUFDZHZTLE1BQUEsR0FBUy9mLEtBQUEsQ0FBTSxHQUFHcEMsS0FBQSxDQUFNbU8sTUFBQSxHQUFTdW1CLE1BQUEsRUFBUXZtQixNQUFNLElBQUlnVSxNQUFBO1VBQ25EOWUsS0FBQSxHQUFRME4sR0FBQTtRQUNWO01BQ0Y7TUFFQXJXLEtBQUEsQ0FBTVksRUFBQSxDQUFHNmIsVUFBQSxDQUFXZ0wsTUFBQSxFQUFROWUsS0FBQSxFQUFPME4sR0FBRztJQUN4QztFQUNGLENBQUM7QUFDSDtBQzFCTyxJQUFNdGdCLE9BQUEsR0FBTixNQUFjO0VBS25COEssWUFBWVosV0FBQSxFQUEwQjtJQUNwQyxLQUFLQSxXQUFBLEdBQWNBLFdBQUE7SUFDbkIsS0FBS285QixXQUFBLEdBQWMsS0FBS3A5QixXQUFBLENBQVk4RCxLQUFBLENBQU1PLE1BQUE7RUFDNUM7RUFFQTVDLElBQUlrVyxRQUFBLEVBQWlDO0lBQ25DLElBQUkwbEIsT0FBQSxHQUFVO0lBRWQsTUFBTUMsY0FBQSxHQUFpQixLQUFLdDlCLFdBQUEsQ0FBWThELEtBQUEsQ0FBTXVCLEtBQUEsQ0FBTSxLQUFLKzNCLFdBQVcsRUFBRS94QixNQUFBLENBQU8sQ0FBQ2t5QixXQUFBLEVBQWF4NUIsSUFBQSxLQUFTO01BQ2xHLE1BQU15c0IsU0FBQSxHQUFZenNCLElBQUEsQ0FBS3k1QixNQUFBLENBQU8sRUFBRWhOLFNBQUEsQ0FBVStNLFdBQVc7TUFFckQsSUFBSS9NLFNBQUEsQ0FBVTZNLE9BQUEsRUFBUztRQUNyQkEsT0FBQSxHQUFVO01BQ1o7TUFFQSxPQUFPN00sU0FBQSxDQUFVdG9CLEdBQUE7SUFDbkIsR0FBR3lQLFFBQVE7SUFFWCxPQUFPO01BQ0xBLFFBQUEsRUFBVTJsQixjQUFBO01BQ1ZEO0lBQ0Y7RUFDRjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=