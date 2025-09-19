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
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
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
  return Object.fromEntries(
  // @ts-ignore
  Object.entries(data).filter(([key, value]) => {
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
    return item.type === type && objectIncludes(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(attributes).map(k => [k, item.attrs[k]])), attributes);
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
  if (
  // check for code node
  $from.parent.type.spec.code ||
  // check for code mark
  !!((_a = $from.nodeBefore || $from.nodeAfter) == null ? void 0 : _a.marks.find(mark => mark.type.spec.code))) {
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
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
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
    // @ts-ignore
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
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
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
      // we register a global drag handler to track the current drag source element
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
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
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
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
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
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return getAttributesFromExtensions(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
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
          // pass-through
          node,
          view,
          getPos,
          decorations,
          innerDecorations,
          // tiptap-specific
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
          // pass-through
          mark,
          view,
          inline,
          // tiptap-specific
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
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
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
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
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
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
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
      const depthAfter =
      // eslint-disable-next-line no-nested-ternary
      $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
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
    }) => [() => commands.undoInputRule(),
    // maybe convert first text block node to default node
    () => commands.command(({
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
    return [
    // With this plugin we check if the whole document was selected and deleted.
    // In this case we will additionally call `clearNodes()` to convert e.g. a heading
    // to a paragraph if necessary.
    // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
    // with many other commands.
    new import_state19.Plugin({
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
  /**
   * Attach the editor to the DOM, creating a new editor view.
   */
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
  /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */
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
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    if (this.options.injectCSS && typeof document !== "undefined") {
      this.css = createStyleTag(style, this.options.injectNonce);
    }
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
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
  /**
   * Update editable state of the editor.
   */
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
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
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
      // Stub some commonly accessed properties to prevent errors
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
  /**
   * Returns the editor state.
   */
  get state() {
    if (this.editorView) {
      this.editorState = this.view.state;
    }
    return this.editorState;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(plugin, handlePlugins) {
    const plugins = isFunction(handlePlugins) ? handlePlugins(plugin, [...this.state.plugins]) : [...this.state.plugins, plugin];
    const state = this.state.reconfigure({
      plugins
    });
    this.view.updateState(state);
    return state;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
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
  /**
   * Creates an extension manager.
   */
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
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new CommandManager({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates the initial document.
   */
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
  /**
   * Creates a ProseMirror view.
   */
  createView(element) {
    var _a;
    this.editorView = new import_view.EditorView(element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
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
  /**
   * Creates all node and mark views.
   */
  createNodeViews() {
    if (this.view.isDestroyed) {
      return;
    }
    this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
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
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        transaction: mostRecentFocusTr
      });
    }
    if (blur2) {
      this.emit("blur", {
        editor: this,
        event: blur2.event,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(nameOrType) {
    return getAttributes(this.state, nameOrType);
  }
  isActive(nameOrAttributes, attributesOrUndefined) {
    const name = typeof nameOrAttributes === "string" ? nameOrAttributes : null;
    const attributes = typeof nameOrAttributes === "string" ? attributesOrUndefined : nameOrAttributes;
    return isActive(this.state, name, attributes);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return getHTMLFromFragment(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
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
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return isNodeEmpty(this.state.doc);
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy");
    this.unmount();
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
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
  /**
   * Update the attributes of the mark in the document.
   * @param attrs The attributes to update.
   */
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
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
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
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
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
  /**
   * Update the attributes of the prosemirror node.
   */
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
  /**
   * Delete the node.
   */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2NvcmUuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FZGl0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbnNpb25NYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jb21iaW5lVHJhbnNhY3Rpb25TdGVwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvY3JlYXRlTm9kZUZyb21Db250ZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZW5lcmF0ZUhUTUwudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEhUTUxGcm9tRnJhZ21lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYUJ5UmVzb2x2ZWRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZW5lcmF0ZUpTT04udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlVGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNOb2RlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc1RleHRTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3Jlc29sdmVGb2N1c1Bvc2l0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zZWxlY3Rpb25Ub0luc2VydGlvbkVuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL1Bhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvY2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jbGVhck5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY3JlYXRlUGFyYWdyYXBoTmVhci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2N1dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2RlbGV0ZVNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2V4aXRDb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZXh0ZW5kTWFya1JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvaW5zZXJ0Q29udGVudEF0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5JdGVtQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luSXRlbUZvcndhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luVGV4dGJsb2NrQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luVGV4dGJsb2NrRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9saWZ0RW1wdHlCbG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnRMaXN0SXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL25ld2xpbmVJbkNvZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RBbGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3ROb2RlQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3ROb2RlRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFBhcmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RUZXh0YmxvY2tFbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RUZXh0YmxvY2tTdGFydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXROb2RlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0VGV4dFNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NpbmtMaXN0SXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NwbGl0QmxvY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zcGxpdExpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3dyYXBJbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3dyYXBJbkxpc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2RlbGV0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZHJvcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZWRpdGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2ZvY3VzRXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9rZXltYXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL3Bhc3RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy90YWJpbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvd3JhcHBpbmdJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvY2FuSW5zZXJ0Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL05vZGVWaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVDaGFpbmFibGVTdGF0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0NvbW1hbmRNYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvRXZlbnRFbWl0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2VsZW1lbnRGcm9tU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVEb2N1bWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZGVmYXVsdEJsb2NrQXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRDaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZENoaWxkcmVuSW5SYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZFBhcmVudE5vZGVDbG9zZXN0VG9Qb3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRQYXJlbnROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRFeHRlbnNpb25GaWVsZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmxhdHRlbkV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNGdW5jdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jYWxsT3JSZXR1cm4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNFbXB0eU9iamVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvc3BsaXRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRBdHRyaWJ1dGVzRnJvbUV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWVyZ2VBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRSZW5kZXJlZEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZnJvbVN0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaW5qZWN0RXh0ZW5zaW9uQXR0cmlidXRlc1RvUGFyc2VSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2ZpbmREdXBsaWNhdGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zb3J0RXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcmVzb2x2ZUV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dEJldHdlZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHRTZXJpYWxpemVyc0Zyb21TY2hlbWEudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtUeXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRNYXJrQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0Tm9kZVR5cGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE5vZGVBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTY2hlbWFUeXBlTmFtZUJ5TmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0QXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9yZW1vdmVEdXBsaWNhdGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRDaGFuZ2VkUmFuZ2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXREZWJ1Z0pTT04udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNSZWdFeHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvb2JqZWN0SW5jbHVkZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtSYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya3NCZXR3ZWVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXROb2RlQXRQb3NpdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hVHlwZUJ5TmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U3BsaXR0ZWRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRUZXh0Q29udGVudEZyb21Ob2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNNYXJrQWN0aXZlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc05vZGVBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQWN0aXZlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0F0RW5kT2ZOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0F0U3RhcnRPZk5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzRXh0ZW5zaW9uUnVsZXNFbmFibGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0xpc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTm9kZUVtcHR5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21pbk1heC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcG9zVG9ET01SZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9yZXdyaXRlVW5rbm93bkNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNQbGFpbk9iamVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tZXJnZURlZXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbmRhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc051bWJlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2JsdXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jbGVhckNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jb21tYW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlQ3VycmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlUmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9lbnRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2ZpcnN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzQW5kcm9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc2lPUy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2ZvY3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZm9yRWFjaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2luc2VydENvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNNYWNPUy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2tleWJvYXJkU2hvcnRjdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZGVsZXRlUHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9yZXNldEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zY3JvbGxJbnRvVmlldy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldENvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRNYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0TWV0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3RvZ2dsZU1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlV3JhcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3VuZG9JbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91bnNldEFsbE1hcmtzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdW5zZXRNYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdXBkYXRlQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvY29tbWFuZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9Ob2RlUG9zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvc3R5bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvY3JlYXRlU3R5bGVUYWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL21hcmtJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL25vZGVJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL3RleHRibG9ja1R5cGVJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL3RleHRJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9qc3gtcnVudGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9lc2NhcGVGb3JSZWdFeC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1N0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL01hcmtWaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvbWFya1Bhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvbm9kZVBhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvdGV4dFBhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL1RyYWNrZXIudHMiXSwibmFtZXMiOlsiY29yZV8zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJDb21tYW5kTWFuYWdlciIsIkVkaXRvciIsIkV4dGVuc2lvbiIsIkZyYWdtZW50IiwiRnJhZ21lbnQ2IiwiSW5wdXRSdWxlIiwiTWFyayIsIk1hcmtWaWV3IiwiTm9kZSIsIk5vZGUzIiwiTm9kZVBvcyIsIk5vZGVWaWV3IiwiUGFzdGVSdWxlIiwiVHJhY2tlciIsImNhbGxPclJldHVybiIsImNhbkluc2VydE5vZGUiLCJjb21iaW5lVHJhbnNhY3Rpb25TdGVwcyIsImNyZWF0ZUNoYWluYWJsZVN0YXRlIiwiY3JlYXRlRG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaCIsImNyZWF0ZU5vZGVGcm9tQ29udGVudCIsImNyZWF0ZVN0eWxlVGFnIiwiZGVmYXVsdEJsb2NrQXQiLCJkZWxldGVQcm9wcyIsImVsZW1lbnRGcm9tU3RyaW5nIiwiZXNjYXBlRm9yUmVnRXgiLCJleHRlbnNpb25zIiwiZXh0ZW5zaW9uc19leHBvcnRzIiwiZmluZENoaWxkcmVuIiwiZmluZENoaWxkcmVuSW5SYW5nZSIsImZpbmREdXBsaWNhdGVzIiwiZmluZFBhcmVudE5vZGUiLCJmaW5kUGFyZW50Tm9kZUNsb3Nlc3RUb1BvcyIsImZsYXR0ZW5FeHRlbnNpb25zIiwiZnJvbVN0cmluZyIsImdlbmVyYXRlSFRNTCIsImdlbmVyYXRlSlNPTiIsImdlbmVyYXRlVGV4dCIsImdldEF0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGVzRnJvbUV4dGVuc2lvbnMiLCJnZXRDaGFuZ2VkUmFuZ2VzIiwiZ2V0RGVidWdKU09OIiwiZ2V0RXh0ZW5zaW9uRmllbGQiLCJnZXRIVE1MRnJvbUZyYWdtZW50IiwiZ2V0TWFya0F0dHJpYnV0ZXMiLCJnZXRNYXJrUmFuZ2UiLCJnZXRNYXJrVHlwZSIsImdldE1hcmtzQmV0d2VlbiIsImdldE5vZGVBdFBvc2l0aW9uIiwiZ2V0Tm9kZUF0dHJpYnV0ZXMiLCJnZXROb2RlVHlwZSIsImdldFJlbmRlcmVkQXR0cmlidXRlcyIsImdldFNjaGVtYSIsImdldFNjaGVtYUJ5UmVzb2x2ZWRFeHRlbnNpb25zIiwiZ2V0U2NoZW1hVHlwZUJ5TmFtZSIsImdldFNjaGVtYVR5cGVOYW1lQnlOYW1lIiwiZ2V0U3BsaXR0ZWRBdHRyaWJ1dGVzIiwiZ2V0VGV4dCIsImdldFRleHRCZXR3ZWVuIiwiZ2V0VGV4dENvbnRlbnRGcm9tTm9kZXMiLCJnZXRUZXh0U2VyaWFsaXplcnNGcm9tU2NoZW1hIiwiaW5qZWN0RXh0ZW5zaW9uQXR0cmlidXRlc1RvUGFyc2VSdWxlIiwiaW5wdXRSdWxlc1BsdWdpbiIsImlzQWN0aXZlIiwiaXNBbmRyb2lkIiwiaXNBdEVuZE9mTm9kZSIsImlzQXRTdGFydE9mTm9kZSIsImlzRW1wdHlPYmplY3QiLCJpc0V4dGVuc2lvblJ1bGVzRW5hYmxlZCIsImlzRnVuY3Rpb24iLCJpc0xpc3QiLCJpc01hY09TIiwiaXNNYXJrQWN0aXZlIiwiaXNOb2RlQWN0aXZlIiwiaXNOb2RlRW1wdHkiLCJpc05vZGVTZWxlY3Rpb24iLCJpc051bWJlciIsImlzUGxhaW5PYmplY3QiLCJpc1JlZ0V4cCIsImlzU3RyaW5nIiwiaXNUZXh0U2VsZWN0aW9uIiwiaXNpT1MiLCJtYXJrSW5wdXRSdWxlIiwibWFya1Bhc3RlUnVsZSIsIm1lcmdlQXR0cmlidXRlcyIsIm1lcmdlRGVlcCIsIm1pbk1heCIsIm5vZGVJbnB1dFJ1bGUiLCJub2RlUGFzdGVSdWxlIiwib2JqZWN0SW5jbHVkZXMiLCJwYXN0ZVJ1bGVzUGx1Z2luIiwicG9zVG9ET01SZWN0IiwicmVtb3ZlRHVwbGljYXRlcyIsInJlc29sdmVFeHRlbnNpb25zIiwicmVzb2x2ZUZvY3VzUG9zaXRpb24iLCJyZXdyaXRlVW5rbm93bkNvbnRlbnQiLCJzZWxlY3Rpb25Ub0luc2VydGlvbkVuZCIsInNvcnRFeHRlbnNpb25zIiwic3BsaXRFeHRlbnNpb25zIiwidGV4dElucHV0UnVsZSIsInRleHRQYXN0ZVJ1bGUiLCJ0ZXh0YmxvY2tUeXBlSW5wdXRSdWxlIiwidXBkYXRlTWFya1ZpZXdBdHRyaWJ1dGVzIiwid3JhcHBpbmdJbnB1dFJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3N0YXRlIiwicmVxdWlyZSIsImltcG9ydF92aWV3IiwiaW1wb3J0X2tleW1hcCIsImltcG9ydF90cmFuc2Zvcm0iLCJpbXBvcnRfbW9kZWwiLCJpbXBvcnRfbW9kZWwyIiwiaW1wb3J0X21vZGVsMyIsImltcG9ydF9tb2RlbDQiLCJpbXBvcnRfbW9kZWw1IiwiaW1wb3J0X21vZGVsNiIsImltcG9ydF9zdGF0ZTIiLCJpbXBvcnRfc3RhdGUzIiwiaW1wb3J0X3N0YXRlNCIsImltcG9ydF9zdGF0ZTUiLCJpbXBvcnRfdHJhbnNmb3JtMiIsImltcG9ydF9tb2RlbDciLCJpbXBvcnRfc3RhdGU2IiwiaW1wb3J0X21vZGVsOCIsImltcG9ydF9zdGF0ZTciLCJpbXBvcnRfc3RhdGU4IiwiaW1wb3J0X3RyYW5zZm9ybTMiLCJpbXBvcnRfY29tbWFuZHMiLCJpbXBvcnRfc3RhdGU5IiwiaW1wb3J0X2NvbW1hbmRzMiIsImltcG9ydF9jb21tYW5kczMiLCJpbXBvcnRfc3RhdGUxMCIsImltcG9ydF9tb2RlbDkiLCJpbXBvcnRfY29tbWFuZHM0IiwiaW1wb3J0X3RyYW5zZm9ybTQiLCJpbXBvcnRfdHJhbnNmb3JtNSIsImltcG9ydF9jb21tYW5kczUiLCJpbXBvcnRfY29tbWFuZHM2IiwiaW1wb3J0X2NvbW1hbmRzNyIsImltcG9ydF9jb21tYW5kczgiLCJpbXBvcnRfc2NoZW1hX2xpc3QiLCJpbXBvcnRfY29tbWFuZHM5IiwiaW1wb3J0X3N0YXRlMTEiLCJpbXBvcnRfY29tbWFuZHMxMCIsImltcG9ydF9jb21tYW5kczExIiwiaW1wb3J0X2NvbW1hbmRzMTIiLCJpbXBvcnRfY29tbWFuZHMxMyIsImltcG9ydF9jb21tYW5kczE0IiwiaW1wb3J0X2NvbW1hbmRzMTUiLCJpbXBvcnRfc3RhdGUxMiIsImltcG9ydF9zdGF0ZTEzIiwiaW1wb3J0X3NjaGVtYV9saXN0MiIsImltcG9ydF9zdGF0ZTE0IiwiaW1wb3J0X3RyYW5zZm9ybTYiLCJpbXBvcnRfbW9kZWwxMCIsImltcG9ydF9zdGF0ZTE1IiwiaW1wb3J0X3RyYW5zZm9ybTciLCJpbXBvcnRfdHJhbnNmb3JtOCIsImltcG9ydF9jb21tYW5kczE2IiwiaW1wb3J0X3NjaGVtYV9saXN0MyIsImltcG9ydF90cmFuc2Zvcm05IiwiaW1wb3J0X3N0YXRlMTYiLCJpbXBvcnRfc3RhdGUxNyIsImltcG9ydF9zdGF0ZTE4IiwiaW1wb3J0X3N0YXRlMTkiLCJpbXBvcnRfc3RhdGUyMCIsImltcG9ydF9zdGF0ZTIxIiwiaW1wb3J0X3RyYW5zZm9ybTEwIiwiaW1wb3J0X3N0YXRlMjIiLCJpbXBvcnRfc3RhdGUyMyIsImNvbmZpZyIsInN0YXRlIiwidHJhbnNhY3Rpb24iLCJzZWxlY3Rpb24iLCJkb2MiLCJzdG9yZWRNYXJrcyIsImFwcGx5IiwiYmluZCIsImFwcGx5VHJhbnNhY3Rpb24iLCJwbHVnaW5zIiwic2NoZW1hIiwicmVjb25maWd1cmUiLCJ0b0pTT04iLCJ0ciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlZGl0b3IiLCJyYXdDb21tYW5kcyIsImV4dGVuc2lvbk1hbmFnZXIiLCJjb21tYW5kcyIsImN1c3RvbVN0YXRlIiwiaGFzQ3VzdG9tU3RhdGUiLCJ2aWV3IiwiYnVpbGRQcm9wcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsIm5hbWUiLCJjb21tYW5kMiIsIm1ldGhvZCIsImFyZ3MiLCJjYWxsYmFjayIsImdldE1ldGEiLCJkaXNwYXRjaCIsImNoYWluIiwiY3JlYXRlQ2hhaW4iLCJjYW4iLCJjcmVhdGVDYW4iLCJzdGFydFRyIiwic2hvdWxkRGlzcGF0Y2giLCJjYWxsYmFja3MiLCJoYXNTdGFydFRyYW5zYWN0aW9uIiwicnVuMyIsInJ1biIsImV2ZXJ5IiwiY2hhaW5lZENvbW1hbmQiLCJwdXNoIiwiZm9ybWF0dGVkQ29tbWFuZHMiLCJFdmVudEVtaXR0ZXIiLCJvbiIsImV2ZW50IiwiZm4iLCJlbWl0IiwiZm9yRWFjaCIsIm9mZiIsImZpbHRlciIsIm9uY2UiLCJvbmNlRm4iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvbGREb2MiLCJ0cmFuc2FjdGlvbnMiLCJ0cmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJzdGVwcyIsInN0ZXAiLCJyZW1vdmVXaGl0ZXNwYWNlcyIsIm5vZGUiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJpIiwibGVuZ3RoIiwiY2hpbGQiLCJub2RlVHlwZSIsIm5vZGVWYWx1ZSIsInRlc3QiLCJyZW1vdmVDaGlsZCIsInZhbHVlIiwid2luZG93IiwiRXJyb3IiLCJ3cmFwcGVkVmFsdWUiLCJodG1sIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImNvbnRlbnQiLCJvcHRpb25zIiwic2xpY2UiLCJwYXJzZU9wdGlvbnMiLCJpc0pTT05Db250ZW50IiwiaXNUZXh0Q29udGVudCIsImlzQXJyYXlDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbUFycmF5IiwiaXRlbSIsIm5vZGVGcm9tSlNPTiIsImVycm9yT25JbnZhbGlkQ29udGVudCIsImNoZWNrIiwiZXJyb3IiLCJjYXVzZSIsImNvbnNvbGUiLCJ3YXJuIiwiaGFzSW52YWxpZENvbnRlbnQiLCJpbnZhbGlkQ29udGVudCIsImNvbnRlbnRDaGVja1NjaGVtYSIsIlNjaGVtYSIsInRvcE5vZGUiLCJzcGVjIiwibWFya3MiLCJub2RlcyIsImFwcGVuZCIsIl9fdGlwdGFwX19wcml2YXRlX191bmtub3duX19jYXRjaF9fYWxsX19ub2RlIiwiZ3JvdXAiLCJwYXJzZURPTSIsInRhZyIsImdldEF0dHJzIiwiZSIsIm91dGVySFRNTCIsImZyb21TY2hlbWEiLCJwYXJzZVNsaWNlIiwicGFyc2UiLCJwYXJzZXIiLCJtYXRjaCIsImVkZ2VDb3VudCIsInR5cGUiLCJlZGdlIiwiaXNUZXh0YmxvY2siLCJoYXNSZXF1aXJlZEF0dHJzIiwicHJlZGljYXRlIiwibm9kZXNXaXRoUG9zIiwiZGVzY2VuZGFudHMiLCJwb3MiLCJyYW5nZSIsIm5vZGVzQmV0d2VlbiIsImZyb20iLCJ0byIsIiRwb3MiLCJkZXB0aCIsImJlZm9yZSIsInN0YXJ0IiwiJGZyb20iLCJleHRlbnNpb24iLCJmaWVsZCIsImNvbnRleHQiLCJwYXJlbnQiLCJzdG9yYWdlIiwiYWRkRXh0ZW5zaW9ucyIsImZsYXQiLCJmcmFnbWVudCIsImRvY3VtZW50RnJhZ21lbnQiLCJET01TZXJpYWxpemVyIiwic2VyaWFsaXplRnJhZ21lbnQiLCJ0ZW1wb3JhcnlEb2N1bWVudCIsImRvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImtleXMiLCJiYXNlRXh0ZW5zaW9ucyIsIm5vZGVFeHRlbnNpb25zIiwibWFya0V4dGVuc2lvbnMiLCJleHRlbnNpb25BdHRyaWJ1dGVzIiwibm9kZUFuZE1hcmtFeHRlbnNpb25zIiwiZGVmYXVsdEF0dHJpYnV0ZSIsImRlZmF1bHQiLCJ2YWxpZGF0ZSIsInJlbmRlcmVkIiwicmVuZGVySFRNTCIsInBhcnNlSFRNTCIsImtlZXBPblNwbGl0IiwiaXNSZXF1aXJlZCIsImFkZEdsb2JhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlIiwidHlwZXMiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlIiwiYWRkQXR0cmlidXRlcyIsIm1lcmdlZEF0dHIiLCJvYmplY3RzIiwicmVkdWNlIiwiaXRlbXMiLCJtZXJnZWRBdHRyaWJ1dGVzIiwia2V5IiwiZXhpc3RzIiwidmFsdWVDbGFzc2VzIiwiU3RyaW5nIiwic3BsaXQiLCJleGlzdGluZ0NsYXNzZXMiLCJpbnNlcnRDbGFzc2VzIiwidmFsdWVDbGFzcyIsImluY2x1ZGVzIiwiam9pbiIsIm5ld1N0eWxlcyIsInN0eWxlMiIsInRyaW0iLCJCb29sZWFuIiwiZXhpc3RpbmdTdHlsZXMiLCJzdHlsZU1hcCIsIk1hcCIsInByb3BlcnR5IiwidmFsIiwicGFydCIsInNldCIsIm5vZGVPck1hcmsiLCJhdHRycyIsIk51bWJlciIsInBhcnNlUnVsZSIsIm9sZEF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiZ2V0QXR0cmlidXRlIiwiY2xlYW5VcFNjaGVtYUl0ZW0iLCJkYXRhIiwiX2EiLCJhbGxBdHRyaWJ1dGVzIiwiZmluZCIsImV4dHJhTm9kZUZpZWxkcyIsImZpZWxkcyIsImV4dGVuZE5vZGVTY2hlbWEiLCJpbmxpbmUiLCJhdG9tIiwic2VsZWN0YWJsZSIsImRyYWdnYWJsZSIsImNvZGUiLCJ3aGl0ZXNwYWNlIiwibGluZWJyZWFrUmVwbGFjZW1lbnQiLCJkZWZpbmluZyIsImlzb2xhdGluZyIsImV4dGVuc2lvbkF0dHJpYnV0ZSIsIl9hMiIsIl9iIiwidG9ET00iLCJIVE1MQXR0cmlidXRlcyIsInJlbmRlclRleHQiLCJ0b1RleHQiLCJleHRyYU1hcmtGaWVsZHMiLCJleHRlbmRNYXJrU2NoZW1hIiwiaW5jbHVzaXZlIiwiZXhjbHVkZXMiLCJzcGFubmluZyIsIm1hcmsiLCJmaWx0ZXJlZCIsImVsIiwiaW5kZXgiLCJpbmRleE9mIiwiU2V0IiwiZGVmYXVsdFByaW9yaXR5Iiwic29ydCIsImEiLCJiIiwicHJpb3JpdHlBIiwicHJpb3JpdHlCIiwicmVzb2x2ZWRFeHRlbnNpb25zIiwiZHVwbGljYXRlZE5hbWVzIiwiY29udGVudE5vZGUiLCJmcm9tSlNPTiIsImRvbSIsInN0YXJ0Tm9kZSIsImJsb2NrU2VwYXJhdG9yIiwidGV4dFNlcmlhbGl6ZXJzIiwidGV4dCIsImlzQmxvY2siLCJ0ZXh0U2VyaWFsaXplciIsImlzVGV4dCIsIk1hdGgiLCJtYXgiLCJzaXplIiwibmFtZU9yVHlwZSIsInR5cGVPck5hbWUiLCJlbXB0eSIsIiRoZWFkIiwibWFya0l0ZW0iLCJub2RlMiIsInJldmVyc2UiLCJub2RlSXRlbSIsInNjaGVtYVR5cGUiLCJhcnJheSIsImJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlZW4iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzaW1wbGlmeUNoYW5nZWRSYW5nZXMiLCJjaGFuZ2VzIiwidW5pcXVlQ2hhbmdlcyIsImNoYW5nZSIsInJlc3QiLCJfIiwic29tZSIsIm90aGVyQ2hhbmdlIiwib2xkUmFuZ2UiLCJuZXdSYW5nZSIsIm1hcHBpbmciLCJtYXBzIiwic3RlcE1hcCIsInJhbmdlcyIsIm5ld1N0YXJ0IiwibmV3RW5kIiwib2xkU3RhcnQiLCJpbnZlcnQiLCJvbGRFbmQiLCJzdGFydE9mZnNldCIsImlzVG9wTm9kZSIsInRvcE5vZGVUeXBlIiwiaW5jcmVtZW50Iiwibm9kZVNpemUiLCJvdXRwdXQyIiwib3V0cHV0IiwiY2hpbGRDb3VudCIsIm9mZnNldCIsInRvU3RyaW5nIiwib2JqZWN0MSIsIm9iamVjdDIiLCJzdHJpY3QiLCJmaW5kTWFya0luU2V0IiwiayIsImlzTWFya0luU2V0IiwiY2hpbGRBZnRlciIsInBhcmVudE9mZnNldCIsIm1hcmsyIiwiY2hpbGRCZWZvcmUiLCJzdGFydEluZGV4Iiwic3RhcnRQb3MiLCJlbmRJbmRleCIsImVuZFBvcyIsInJlc29sdmUiLCJtYXhEZXB0aCIsImN1cnJlbnREZXB0aCIsImN1cnJlbnROb2RlIiwidHlwZU5hbWUiLCJtYXhNYXRjaCIsInRleHRCZWZvcmUiLCJzbGljZUVuZFBvcyIsImNodW5rIiwidGV4dENvbnRlbnQiLCJpc0F0b20iLCJzZWxlY3Rpb25SYW5nZSIsIm1hcmtSYW5nZXMiLCIkdG8iLCJyZWxhdGl2ZUZyb20iLCJyZWxhdGl2ZVRvIiwibWluIiwicmFuZ2UyIiwibWF0Y2hlZFJhbmdlIiwibWFya1JhbmdlIiwic3VtIiwiZXhjbHVkZWRSYW5nZSIsIm5vZGVSYW5nZXMiLCJtYXRjaGVkTm9kZVJhbmdlcyIsIm5vZGVSYW5nZSIsIiRhbmNob3IiLCJwYXJlbnROb2RlIiwiJHBhcmVudFBvcyIsImVuZCIsImVuYWJsZWQiLCJlbmFibGVkRXh0ZW5zaW9uIiwiY2hlY2tDaGlsZHJlbiIsImlnbm9yZVdoaXRlc3BhY2UiLCJpc0xlYWYiLCJpc0NvbnRlbnRFbXB0eSIsImNoaWxkTm9kZSIsIk5vZGVTZWxlY3Rpb24iLCJUZXh0U2VsZWN0aW9uIiwibWluUG9zIiwibWF4UG9zIiwicmVzb2x2ZWRGcm9tIiwicmVzb2x2ZWRFbmQiLCJjb29yZHNBdFBvcyIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwb3NpdGlvbiIsInNlbGVjdGlvbkF0U3RhcnQiLCJTZWxlY3Rpb24iLCJhdFN0YXJ0Iiwic2VsZWN0aW9uQXRFbmQiLCJhdEVuZCIsImNyZWF0ZSIsInJld3JpdGVVbmtub3duQ29udGVudElubmVyIiwianNvbiIsInZhbGlkTWFya3MiLCJ2YWxpZE5vZGVzIiwicmV3cml0dGVuQ29udGVudCIsImhhcyIsIm9yaWdpbmFsIiwidW5zdXBwb3J0ZWQiLCJmYWxsYmFja1RvUGFyYWdyYXBoIiwic3RhcnRMZW4iLCJiaWFzIiwibGFzdCIsIlJlcGxhY2VTdGVwIiwiUmVwbGFjZUFyb3VuZFN0ZXAiLCJfZnJvbSIsIl90byIsIl9uZXdGcm9tIiwibmV3VG8iLCJzZXRTZWxlY3Rpb24iLCJuZWFyIiwiaGFuZGxlciIsImlucHV0UnVsZU1hdGNoZXJIYW5kbGVyIiwiZXhlYyIsImlucHV0UnVsZU1hdGNoIiwicmVzdWx0IiwiaW5wdXQiLCJyZXBsYWNlV2l0aCIsInJ1bGVzIiwicGx1Z2luIiwiY29tcG9zaW5nIiwibm9kZUJlZm9yZSIsIm5vZGVBZnRlciIsIm1hdGNoZWQiLCJydWxlIiwic2V0TWV0YSIsIlBsdWdpbiIsImluaXQiLCJwcmV2Iiwic3RvcmVkIiwic2ltdWxhdGVkSW5wdXRNZXRhIiwiaXNTaW11bGF0ZWRJbnB1dCIsInNldFRpbWVvdXQiLCJzZWxlY3Rpb25TZXQiLCJkb2NDaGFuZ2VkIiwiaGFuZGxlVGV4dElucHV0IiwiaGFuZGxlRE9NRXZlbnRzIiwiY29tcG9zaXRpb25lbmQiLCIkY3Vyc29yIiwiaGFuZGxlS2V5RG93biIsImlzSW5wdXRSdWxlcyIsImdldFR5cGUiLCJnZXRQcm90b3R5cGVPZiIsInRhcmdldCIsInNvdXJjZSIsIkV4dGVuZGFibGUiLCJjb25maWd1cmUiLCJleHRlbmQiLCJhZGRPcHRpb25zIiwiZXh0ZW5kZWRDb25maWciLCJfTWFyayIsImFyZ3VtZW50cyIsInJlc29sdmVkQ29uZmlnIiwiaGFuZGxlRXhpdCIsImN1cnJlbnRQb3MiLCJpc0F0RW5kIiwiY3VycmVudE1hcmtzIiwiaXNJbk1hcmsiLCJtIiwicmVtb3ZlTWFyayIsInJlbW92ZVN0b3JlZE1hcmsiLCJpbnNlcnRUZXh0IiwicGFzdGVSdWxlTWF0Y2hlckhhbmRsZXIiLCJtYXRjaEFsbCIsIm1hdGNoZXMiLCJwYXN0ZVJ1bGVNYXRjaCIsInJ1bjIiLCJwYXN0ZUV2ZW50IiwiZHJvcEV2ZW50IiwiaGFuZGxlcnMiLCJyZXNvbHZlZFRvIiwidGV4dFRvTWF0Y2giLCJ0ZXh0QmV0d2VlbiIsInN1Y2Nlc3MiLCJ0aXB0YXBEcmFnRnJvbU90aGVyRWRpdG9yIiwiY3JlYXRlQ2xpcGJvYXJkUGFzdGVFdmVudCIsIkNsaXBib2FyZEV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsIkRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJkcmFnU291cmNlRWxlbWVudCIsImlzUGFzdGVkRnJvbVByb3NlTWlycm9yIiwiaXNEcm9wcGVkRnJvbVByb3NlTWlycm9yIiwiRHJhZ0V2ZW50IiwicHJvY2Vzc0V2ZW50IiwicGFzdGVFdnQiLCJjaGFpbmFibGVTdGF0ZSIsImhhbmRsZURyYWdzdGFydCIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsImhhbmRsZURyYWdlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkcm9wIiwiZHJhZ0Zyb21PdGhlckVkaXRvciIsImlzRWRpdGFibGUiLCJkZWxldGVSYW5nZSIsInBhc3RlIiwiX3ZpZXciLCJnZXREYXRhIiwiYXBwZW5kVHJhbnNhY3Rpb24iLCJvbGRTdGF0ZSIsImlzUGFzdGUiLCJpc0Ryb3AiLCJzaW11bGF0ZWRQYXN0ZU1ldGEiLCJpc1NpbXVsYXRlZFBhc3RlIiwiZnJvbTIiLCJ0bzIiLCJmaW5kRGlmZlN0YXJ0IiwiZmluZERpZmZFbmQiLCJFeHRlbnNpb25NYW5hZ2VyIiwic3BsaXR0YWJsZU1hcmtzIiwic2V0dXBFeHRlbnNpb25zIiwiZXh0ZW5zaW9uU3RvcmFnZSIsImFkZENvbW1hbmRzIiwiaW5wdXRSdWxlcyIsInBhc3RlUnVsZXMiLCJhbGxQbHVnaW5zIiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJkZWZhdWx0QmluZGluZ3MiLCJBcnJvd1JpZ2h0IiwiYmluZGluZ3MiLCJzaG9ydGN1dCIsImtleU1hcFBsdWdpbiIsImtleW1hcCIsImFkZElucHV0UnVsZXMiLCJlbmFibGVJbnB1dFJ1bGVzIiwiYWRkUGFzdGVSdWxlcyIsImVuYWJsZVBhc3RlUnVsZXMiLCJhZGRQcm9zZU1pcnJvclBsdWdpbnMiLCJwcm9zZU1pcnJvclBsdWdpbnMiLCJub2RlVmlld3MiLCJhZGROb2RlVmlldyIsIm5vZGV2aWV3IiwiZ2V0UG9zIiwiZGVjb3JhdGlvbnMiLCJpbm5lckRlY29yYXRpb25zIiwibWFya1ZpZXdzIiwiYWRkTWFya1ZpZXciLCJtYXJrVmlldyIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJvbkJlZm9yZUNyZWF0ZSIsIm9uQ3JlYXRlIiwib25VcGRhdGUiLCJvblNlbGVjdGlvblVwZGF0ZSIsIm9uVHJhbnNhY3Rpb24iLCJvbkZvY3VzIiwib25CbHVyIiwib25EZXN0cm95IiwiZmxhdHRlbiIsIl9fZXhwb3J0MiIsIkNsaXBib2FyZFRleHRTZXJpYWxpemVyIiwiQ29tbWFuZHMiLCJEZWxldGUiLCJEcm9wIiwiRWRpdGFibGUiLCJGb2N1c0V2ZW50cyIsIktleW1hcCIsIlBhc3RlIiwiVGFiaW5kZXgiLCJmb2N1c0V2ZW50c1BsdWdpbktleSIsIl9FeHRlbnNpb24iLCJQbHVnaW5LZXkiLCJjbGlwYm9hcmRUZXh0U2VyaWFsaXplciIsImNvbW1hbmRzX2V4cG9ydHMiLCJibHVyIiwiY2xlYXJDb250ZW50IiwiY2xlYXJOb2RlcyIsImNvbW1hbmQiLCJjcmVhdGVQYXJhZ3JhcGhOZWFyIiwiY3V0IiwiZGVsZXRlQ3VycmVudE5vZGUiLCJkZWxldGVOb2RlIiwiZGVsZXRlU2VsZWN0aW9uIiwiZW50ZXIiLCJleGl0Q29kZSIsImV4dGVuZE1hcmtSYW5nZSIsImZpcnN0IiwiZm9jdXMiLCJpbnNlcnRDb250ZW50IiwiaW5zZXJ0Q29udGVudEF0Iiwiam9pbkJhY2t3YXJkIiwiam9pbkRvd24iLCJqb2luRm9yd2FyZCIsImpvaW5JdGVtQmFja3dhcmQiLCJqb2luSXRlbUZvcndhcmQiLCJqb2luVGV4dGJsb2NrQmFja3dhcmQiLCJqb2luVGV4dGJsb2NrRm9yd2FyZCIsImpvaW5VcCIsImtleWJvYXJkU2hvcnRjdXQiLCJsaWZ0IiwibGlmdEVtcHR5QmxvY2siLCJsaWZ0TGlzdEl0ZW0iLCJuZXdsaW5lSW5Db2RlIiwicmVzZXRBdHRyaWJ1dGVzIiwic2Nyb2xsSW50b1ZpZXciLCJzZWxlY3RBbGwiLCJzZWxlY3ROb2RlQmFja3dhcmQiLCJzZWxlY3ROb2RlRm9yd2FyZCIsInNlbGVjdFBhcmVudE5vZGUiLCJzZWxlY3RUZXh0YmxvY2tFbmQiLCJzZWxlY3RUZXh0YmxvY2tTdGFydCIsInNldENvbnRlbnQiLCJzZXRNYXJrIiwic2V0Tm9kZSIsInNldE5vZGVTZWxlY3Rpb24iLCJzZXRUZXh0U2VsZWN0aW9uIiwic2lua0xpc3RJdGVtIiwic3BsaXRCbG9jayIsInNwbGl0TGlzdEl0ZW0iLCJ0b2dnbGVMaXN0IiwidG9nZ2xlTWFyayIsInRvZ2dsZU5vZGUiLCJ0b2dnbGVXcmFwIiwidW5kb0lucHV0UnVsZSIsInVuc2V0QWxsTWFya3MiLCJ1bnNldE1hcmsiLCJ3cmFwSW4iLCJ3cmFwSW5MaXN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaXNEZXN0cm95ZWQiLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJlbWl0VXBkYXRlIiwiJG1hcHBlZEZyb20iLCIkbWFwcGVkVG8iLCJibG9ja1JhbmdlIiwidGFyZ2V0TGlmdERlcHRoIiwibGlmdFRhcmdldCIsImRlZmF1bHRUeXBlIiwiY29udGVudE1hdGNoQXQiLCJzZXROb2RlTWFya3VwIiwib3JpZ2luUmFuZ2UiLCJ0YXJnZXRQb3MiLCJjb250ZW50U2xpY2UiLCJuZXdQb3MiLCJpbnNlcnQiLCJhZnRlciIsImRlbGV0ZSIsIm5ld1NlbGVjdGlvbiIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwidXNlckFnZW50IiwiZGVsYXllZEZvY3VzIiwiaGFzRm9jdXMiLCJpc1NhbWVTZWxlY3Rpb24iLCJlcSIsInNldFN0b3JlZE1hcmtzIiwiaXNGcmFnbWVudCIsIm5vZGVPckZyYWdtZW50IiwidXBkYXRlU2VsZWN0aW9uIiwiYXBwbHlJbnB1dFJ1bGVzIiwiYXBwbHlQYXN0ZVJ1bGVzIiwiZW1pdENvbnRlbnRFcnJvciIsImRpc2FibGVDb2xsYWJvcmF0aW9uIiwiY29sbGFib3JhdGlvbiIsImlzRGlzYWJsZWQiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJlbmFibGVDb250ZW50Q2hlY2siLCJpc09ubHlUZXh0Q29udGVudCIsImlzT25seUJsb2NrQ29udGVudCIsImlzRW1wdHlUZXh0QmxvY2siLCJuZXdDb250ZW50IiwidiIsImZyb21TZWxlY3Rpb25BdFN0YXJ0IiwiaXNUZXh0U2VsZWN0aW9uMiIsImhhc0NvbnRlbnQiLCJwb2ludCIsImpvaW5Qb2ludCIsIm5vcm1hbGl6ZUtleU5hbWUiLCJwYXJ0cyIsImFsdCIsImN0cmwiLCJzaGlmdCIsIm1ldGEiLCJtb2QiLCJLZXlib2FyZEV2ZW50IiwiYWx0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2FwdHVyZWRUcmFuc2FjdGlvbiIsImNhcHR1cmVUcmFuc2FjdGlvbiIsInNvbWVQcm9wIiwiZiIsIm5ld1N0ZXAiLCJtYXliZVN0ZXAiLCJpc0FjdGl2ZTIiLCJvYmoiLCJwcm9wT3JQcm9wcyIsIm5ld09iaiIsInByb3AiLCJtYXJrVHlwZSIsImFkZE1hcmsiLCJBbGxTZWxlY3Rpb24iLCJkb2N1bWVudDIiLCJjYW5TZXRNYXJrIiwibmV3TWFya1R5cGUiLCJjdXJzb3IiLCJpc0luU2V0Iiwic29tZU5vZGVTdXBwb3J0c01hcmsiLCJpbmxpbmVDb250ZW50IiwiYWxsb3dzTWFya1R5cGUiLCJfcG9zIiwiaXNJbmxpbmUiLCJwYXJlbnRBbGxvd3NNYXJrVHlwZSIsImN1cnJlbnRNYXJrc0FsbG93TWFya1R5cGUiLCJvdGhlck1hcmsiLCJhZGRTdG9yZWRNYXJrIiwidHJpbW1lZEZyb20iLCJ0cmltbWVkVG8iLCJzb21lSGFzTWFyayIsImF0dHJpYnV0ZXNUb0NvcHkiLCJzYW1lUGFyZW50IiwiY2FuU2V0QmxvY2siLCJzZXRCbG9ja1R5cGUiLCJ1cGRhdGVkU3RhdGUiLCJlbnN1cmVNYXJrcyIsImZpbHRlcmVkTWFya3MiLCJrZWVwTWFya3MiLCJjYW5TcGxpdCIsImRlZmx0IiwiaW5kZXhBZnRlciIsImZpcnN0MiIsIiRmaXJzdCIsImNhblJlcGxhY2VXaXRoIiwib3ZlcnJpZGVBdHRycyIsImdyYW5kUGFyZW50Iiwid3JhcCIsImRlcHRoQmVmb3JlIiwiZCIsImNvcHkiLCJkZXB0aEFmdGVyIiwibmV3TmV4dFR5cGVBdHRyaWJ1dGVzMiIsIm5leHRUeXBlMiIsImNvbnRlbnRNYXRjaCIsImNyZWF0ZUFuZEZpbGwiLCJyZXBsYWNlIiwiU2xpY2UiLCJzZWwiLCJuIiwibmV4dFR5cGUiLCJuZXdUeXBlQXR0cmlidXRlcyIsIm5ld05leHRUeXBlQXR0cmlidXRlcyIsImpvaW5MaXN0QmFja3dhcmRzIiwibGlzdFR5cGUiLCJsaXN0Iiwibm9kZUF0IiwiY2FuSm9pbkJhY2t3YXJkcyIsImNhbkpvaW4iLCJqb2luTGlzdEZvcndhcmRzIiwiY2FuSm9pbkZvcndhcmRzIiwibGlzdFR5cGVPck5hbWUiLCJpdGVtVHlwZU9yTmFtZSIsIml0ZW1UeXBlIiwicGFyZW50TGlzdCIsInZhbGlkQ29udGVudCIsImNhbldyYXBJbkxpc3QiLCJleHRlbmRFbXB0eU1hcmtSYW5nZSIsInRvZ2dsZVR5cGVPck5hbWUiLCJ0b2dnbGVUeXBlIiwidW5kb2FibGUiLCJnZXRTdGF0ZSIsInRvVW5kbyIsImoiLCJkb2NzIiwibGFzdFBvcyIsImxhc3ROb2RlIiwidHJpbW1lZEZyb20yIiwidHJpbW1lZFRvMiIsImFwcGVuZGVkVHJhbnNhY3Rpb25zIiwiX2MiLCJfYjIiLCJfYzIiLCJfZCIsImNvcmVFeHRlbnNpb25PcHRpb25zIiwiZmlsdGVyVHJhbnNhY3Rpb24iLCJuZXh0VHJhbnNhY3Rpb24iLCJtYXBSZXN1bHQiLCJkZWxldGVkQWZ0ZXIiLCJkZWxldGVkQmVmb3JlIiwiaXNGdWxseVdpdGhpblJhbmdlIiwibmV3RnJvbSIsImRlbGV0ZWRSYW5nZSIsInBhcnRpYWwiLCJjb21iaW5lZFRyYW5zZm9ybSIsIl9hMyIsIl9iMyIsIlJlbW92ZU1hcmtTdGVwIiwiZm91bmRCZWZvcmVNYXJrIiwiZm91bmRBZnRlck1hcmsiLCJhc3luYyIsImhhbmRsZURyb3AiLCJtb3ZlZCIsImVkaXRhYmxlIiwiaXNGb2N1c2VkIiwiaGFuZGxlQmFja3NwYWNlIiwicGFyZW50SXNJc29sYXRpbmciLCJwYXJlbnRQb3MiLCJpc0F0U3RhcnQiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVFbnRlciIsImJhc2VLZXltYXAiLCJFbnRlciIsIk1vZC1FbnRlciIsIkJhY2tzcGFjZSIsIk1vZC1hIiwicGNLZXltYXAiLCJtYWNLZXltYXAiLCJDdHJsLWEiLCJDdHJsLWUiLCJuZXdTdGF0ZSIsInRyMiIsImRvY0NoYW5nZXMiLCJpZ25vcmVUciIsImFsbEZyb20iLCJhbGxFbmQiLCJhbGxXYXNTZWxlY3RlZCIsImlzRW1wdHkiLCJoYW5kbGVQYXN0ZSIsInRhYmluZGV4IiwiX05vZGVQb3MiLCJhY3R1YWxEZXB0aCIsInJlc29sdmVkUG9zIiwiZWxlbWVudCIsImRvbUF0UG9zIiwiaXNOb25UZXh0QXRvbSIsImNoaWxkTm9kZVBvcyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJub2RlQXR0cmlidXRlcyIsImF0dHJLZXlzIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEl0ZW1Pbmx5IiwiY2hpbGRQb3MiLCJkb2VzQWxsQXR0cmlidXRlc01hdGNoIiwiY29uY2F0Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJub25jZSIsInN1ZmZpeCIsInRpcHRhcFN0eWxlVGFnIiwic3R5bGVOb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjc3MiLCJlZGl0b3JWaWV3IiwiaXNJbml0aWFsaXplZCIsImluc3RhbmNlSWQiLCJyYW5kb20iLCJpbmplY3RDU1MiLCJpbmplY3ROb25jZSIsImF1dG9mb2N1cyIsImVkaXRvclByb3BzIiwiZW5hYmxlQ29yZUV4dGVuc2lvbnMiLCJvbkNvbnRlbnRFcnJvciIsIm9uUGFzdGUiLCJvbkRyb3AiLCJvbkRlbGV0ZSIsImlzQ2FwdHVyaW5nVHJhbnNhY3Rpb24iLCJzZXRPcHRpb25zIiwiY3JlYXRlRXh0ZW5zaW9uTWFuYWdlciIsImNyZWF0ZUNvbW1hbmRNYW5hZ2VyIiwiY3JlYXRlU2NoZW1hIiwiaW5pdGlhbERvYyIsImNyZWF0ZURvYyIsImVkaXRvclN0YXRlIiwiRWRpdG9yU3RhdGUiLCJtb3VudCIsImNyZWF0ZVZpZXciLCJ1bm1vdW50IiwicmVtb3ZlIiwiY29tbWFuZE1hbmFnZXIiLCJzZXRQcm9wcyIsInVwZGF0ZVN0YXRlIiwic2V0RWRpdGFibGUiLCJQcm94eSIsImRyYWdnaW5nIiwiZ2V0IiwiUmVmbGVjdCIsInJlZ2lzdGVyUGx1Z2luIiwiaGFuZGxlUGx1Z2lucyIsInVucmVnaXN0ZXJQbHVnaW4iLCJuYW1lT3JQbHVnaW5LZXlUb1JlbW92ZSIsInByZXZQbHVnaW5zIiwibmFtZU9yUGx1Z2luS2V5Iiwic3RhcnRzV2l0aCIsImNvcmVFeHRlbnNpb25zIiwiZXh0IiwiYWxsRXh0ZW5zaW9ucyIsIm1lc3NhZ2UiLCJFZGl0b3JWaWV3Iiwicm9sZSIsImRpc3BhdGNoVHJhbnNhY3Rpb24iLCJjcmVhdGVOb2RlVmlld3MiLCJwcmVwZW5kQ2xhc3MiLCJjbGFzc05hbWUiLCJzZWxlY3Rpb25IYXNDaGFuZ2VkIiwicm9vdFRyV2FzQXBwbGllZCIsInByZXZTdGF0ZSIsIm5leHRTdGF0ZSIsIm1vc3RSZWNlbnRGb2N1c1RyIiwiZmluZExhc3QiLCJmb2N1czIiLCJibHVyMiIsIm5hbWVPckF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzT3JVbmRlZmluZWQiLCJnZXRKU09OIiwiZ2V0SFRNTCIsIiRub2RlIiwiJGRvYyIsIiRub2RlcyIsImNhcHR1cmVHcm91cCIsImZ1bGxNYXRjaCIsInN0YXJ0U3BhY2VzIiwic2VhcmNoIiwidGV4dFN0YXJ0IiwidGV4dEVuZCIsImV4Y2x1ZGVkTWFya3MiLCJleGNsdWRlZCIsIm1hcmtFbmQiLCJuZXdOb2RlIiwibGFzdEluZGV4T2YiLCJtYXRjaFN0YXJ0IiwibGFzdENoYXIiLCJpbnNlcnRpb25TdGFydCIsIiRzdGFydCIsImN1dE9mZiIsIndyYXBwaW5nIiwiZmluZFdyYXBwaW5nIiwia2VlcEF0dHJpYnV0ZXMiLCJqb2luUHJlZGljYXRlIiwiRnVuY3Rpb24iLCJtYXRjaFR5cGUiLCJzdHJpbmciLCJjaGVja01hcmsiLCJ0aGlzTWFyayIsImZvdW5kTWFyayIsIm5lZWRzVXBkYXRlIiwidXBkYXRlZE1hcmsiLCJjb21wb25lbnQiLCJjb250ZW50RE9NIiwiaWdub3JlTXV0YXRpb24iLCJtdXRhdGlvbiIsImNoYW5nZWROb2RlcyIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJpc0NvbnRlbnRFZGl0YWJsZSIsIl9Ob2RlIiwiaXNEcmFnZ2luZyIsInN0b3BFdmVudCIsIm9uRHJhZ1N0YXJ0IiwiX2UiLCJfZiIsIl9nIiwiZHJhZ0hhbmRsZSIsImRvbUJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZUJveCIsIm9mZnNldFgiLCJuYXRpdmVFdmVudCIsIm9mZnNldFkiLCJjbG9uZWROb2RlIiwiY2xvbmVOb2RlIiwiZGF0YVRyYW5zZmVyIiwic2V0RHJhZ0ltYWdlIiwiaXNJbkVsZW1lbnQiLCJpc0RyYWdFdmVudCIsImlzRHJvcEV2ZW50IiwiaXNJbnB1dCIsInRhZ05hbWUiLCJpc0RyYWdnYWJsZSIsImlzU2VsZWN0YWJsZSIsImlzQ29weUV2ZW50IiwiaXNQYXN0ZUV2ZW50IiwiaXNDdXRFdmVudCIsImlzQ2xpY2tFdmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZERyYWdIYW5kbGUiLCJnZXRDb250ZW50IiwiY3VycmVudFN0ZXAiLCJkZWxldGVkIiwibWFwcGVkUG9zaXRpb24iLCJuZXdQb3NpdGlvbiIsImdldE1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsS0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEs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QUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFB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QSxLQUFBQSxJQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBbkwsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQW9MLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxTQUFBLEVB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