System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.6.2/state","prosemirror-view@1.40.1","@tiptap/pm@3.6.2/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.6.2/keymap","@tiptap/pm@3.6.2/transform","@tiptap/pm@3.6.2/model","prosemirror-commands@1.7.1","@tiptap/pm@3.6.2/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.6.2/schema-list"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.6.2"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.6.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.6.2/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.6.2/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.6.2/keymap', dep), dep => dependencies.set('@tiptap/pm@3.6.2/transform', dep), dep => dependencies.set('@tiptap/pm@3.6.2/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.6.2/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.6.2/schema-list', dep)],
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

// .beyond/uimport/temp/@tiptap/core.3.6.2.js
var core_3_6_2_exports = {};
__export(core_3_6_2_exports, {
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
module.exports = __toCommonJS(core_3_6_2_exports);

// node_modules/@tiptap/core/dist/index.js
var import_state = require("@tiptap/pm@3.6.2/state");
var import_view = require("@tiptap/pm@3.6.2/view");
var import_keymap = require("@tiptap/pm@3.6.2/keymap");
var import_transform = require("@tiptap/pm@3.6.2/transform");
var import_model = require("@tiptap/pm@3.6.2/model");
var import_model2 = require("@tiptap/pm@3.6.2/model");
var import_model3 = require("@tiptap/pm@3.6.2/model");
var import_model4 = require("@tiptap/pm@3.6.2/model");
var import_model5 = require("@tiptap/pm@3.6.2/model");
var import_model6 = require("@tiptap/pm@3.6.2/model");
var import_state2 = require("@tiptap/pm@3.6.2/state");
var import_state3 = require("@tiptap/pm@3.6.2/state");
var import_state4 = require("@tiptap/pm@3.6.2/state");
var import_state5 = require("@tiptap/pm@3.6.2/state");
var import_transform2 = require("@tiptap/pm@3.6.2/transform");
var import_model7 = require("@tiptap/pm@3.6.2/model");
var import_state6 = require("@tiptap/pm@3.6.2/state");
var import_model8 = require("@tiptap/pm@3.6.2/model");
var import_state7 = require("@tiptap/pm@3.6.2/state");
var import_state8 = require("@tiptap/pm@3.6.2/state");
var import_transform3 = require("@tiptap/pm@3.6.2/transform");
var import_commands = require("@tiptap/pm@3.6.2/commands");
var import_state9 = require("@tiptap/pm@3.6.2/state");
var import_commands2 = require("@tiptap/pm@3.6.2/commands");
var import_commands3 = require("@tiptap/pm@3.6.2/commands");
var import_state10 = require("@tiptap/pm@3.6.2/state");
var import_model9 = require("@tiptap/pm@3.6.2/model");
var import_commands4 = require("@tiptap/pm@3.6.2/commands");
var import_transform4 = require("@tiptap/pm@3.6.2/transform");
var import_transform5 = require("@tiptap/pm@3.6.2/transform");
var import_commands5 = require("@tiptap/pm@3.6.2/commands");
var import_commands6 = require("@tiptap/pm@3.6.2/commands");
var import_commands7 = require("@tiptap/pm@3.6.2/commands");
var import_commands8 = require("@tiptap/pm@3.6.2/commands");
var import_schema_list = require("@tiptap/pm@3.6.2/schema-list");
var import_commands9 = require("@tiptap/pm@3.6.2/commands");
var import_state11 = require("@tiptap/pm@3.6.2/state");
var import_commands10 = require("@tiptap/pm@3.6.2/commands");
var import_commands11 = require("@tiptap/pm@3.6.2/commands");
var import_commands12 = require("@tiptap/pm@3.6.2/commands");
var import_commands13 = require("@tiptap/pm@3.6.2/commands");
var import_commands14 = require("@tiptap/pm@3.6.2/commands");
var import_commands15 = require("@tiptap/pm@3.6.2/commands");
var import_state12 = require("@tiptap/pm@3.6.2/state");
var import_state13 = require("@tiptap/pm@3.6.2/state");
var import_schema_list2 = require("@tiptap/pm@3.6.2/schema-list");
var import_state14 = require("@tiptap/pm@3.6.2/state");
var import_transform6 = require("@tiptap/pm@3.6.2/transform");
var import_model10 = require("@tiptap/pm@3.6.2/model");
var import_state15 = require("@tiptap/pm@3.6.2/state");
var import_transform7 = require("@tiptap/pm@3.6.2/transform");
var import_transform8 = require("@tiptap/pm@3.6.2/transform");
var import_commands16 = require("@tiptap/pm@3.6.2/commands");
var import_schema_list3 = require("@tiptap/pm@3.6.2/schema-list");
var import_transform9 = require("@tiptap/pm@3.6.2/transform");
var import_state16 = require("@tiptap/pm@3.6.2/state");
var import_state17 = require("@tiptap/pm@3.6.2/state");
var import_state18 = require("@tiptap/pm@3.6.2/state");
var import_state19 = require("@tiptap/pm@3.6.2/state");
var import_state20 = require("@tiptap/pm@3.6.2/state");
var import_state21 = require("@tiptap/pm@3.6.2/state");
var import_transform10 = require("@tiptap/pm@3.6.2/transform");
var import_state22 = require("@tiptap/pm@3.6.2/state");
var import_state23 = require("@tiptap/pm@3.6.2/state");
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
    var _a;
    this.find = config.find;
    this.handler = config.handler;
    this.undoable = (_a = config.undoable) != null ? _a : true;
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
    if (rule.undoable) {
      tr.setMeta(plugin, {
        transform: tr,
        from,
        to,
        text
      });
    }
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
    var _a, _b, _c, _d, _e;
    if (((_b = (_a = node.type) == null ? void 0 : _a.spec) == null ? void 0 : _b.code) || !(node.isText || node.isTextblock || node.isInline)) {
      return;
    }
    const contentSize = (_e = (_d = (_c = node.content) == null ? void 0 : _c.size) != null ? _d : node.nodeSize) != null ? _e : 0;
    const resolvedFrom = Math.max(from, pos);
    const resolvedTo = Math.min(to, pos + contentSize);
    if (resolvedFrom >= resolvedTo) {
      return;
    }
    const textToMatch = node.isText ? node.text || "" : node.textBetween(resolvedFrom - pos, resolvedTo - pos, void 0, "\uFFFC");
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
    const allPlugins = extensions.flatMap(extension => {
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
        const rules = addInputRules();
        if (rules && rules.length) {
          const inputResult = inputRulesPlugin({
            editor,
            rules
          });
          const inputPlugins = Array.isArray(inputResult) ? inputResult : [inputResult];
          plugins.push(...inputPlugins);
        }
      }
      const addPasteRules = getExtensionField(extension, "addPasteRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enablePasteRules) && addPasteRules) {
        const rules = addPasteRules();
        if (rules && rules.length) {
          const pasteRules = pasteRulesPlugin({
            editor,
            rules
          });
          plugins.push(...pasteRules);
        }
      }
      const addProseMirrorPlugins = getExtensionField(extension, "addProseMirrorPlugins", context);
      if (addProseMirrorPlugins) {
        const proseMirrorPlugins = addProseMirrorPlugins();
        plugins.push(...proseMirrorPlugins);
      }
      return plugins;
    });
    return allPlugins;
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
      const $from = tr.doc.resolve(from);
      const $fromNode = $from.node();
      const fromSelectionAtStart = $from.parentOffset === 0;
      const isTextSelection2 = $fromNode.isText || $fromNode.isTextblock;
      const hasContent = $fromNode.content.size > 0;
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
    const parentAllowsMarkType = cursor.parent.type.allowsMarkType(newMarkType);
    return parentAllowsMarkType && (!!newMarkType.isInSet(currentMarks) || !currentMarks.some(mark => mark.type.excludes(newMarkType)));
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
      onMount: () => null,
      onUnmount: () => null,
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
    this.on("mount", this.options.onMount);
    this.on("unmount", this.options.onUnmount);
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
    this.emit("mount", {
      editor: this
    });
    if (this.css && !document.head.contains(this.css)) {
      document.head.appendChild(this.css);
    }
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
    this.emit("unmount", {
      editor: this
    });
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
        this.dispatchTransaction(tr);
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
      state: this.editorState,
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
    const newState = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(newState);
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
    },
    undoable: config.undoable
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
    },
    undoable: config.undoable
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
    },
    undoable: config.undoable
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
    },
    undoable: config.undoable
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
    },
    undoable: config.undoable
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
    try {
      const domBox = this.dom.getBoundingClientRect();
      clonedNode.style.width = `${Math.round(domBox.width)}px`;
      clonedNode.style.height = `${Math.round(domBox.height)}px`;
      clonedNode.style.boxSizing = "border-box";
      clonedNode.style.pointerEvents = "none";
    } catch {}
    let dragImageWrapper = null;
    try {
      dragImageWrapper = document.createElement("div");
      dragImageWrapper.style.position = "absolute";
      dragImageWrapper.style.top = "-9999px";
      dragImageWrapper.style.left = "-9999px";
      dragImageWrapper.style.pointerEvents = "none";
      dragImageWrapper.appendChild(clonedNode);
      document.body.appendChild(dragImageWrapper);
      (_g = event.dataTransfer) == null ? void 0 : _g.setDragImage(clonedNode, x, y);
    } finally {
      if (dragImageWrapper) {
        setTimeout(() => {
          try {
            dragImageWrapper == null ? void 0 : dragImageWrapper.remove();
          } catch {}
        }, 0);
      }
    }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvY29yZS4zLjYuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0VkaXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuc2lvbk1hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NvbWJpbmVUcmFuc2FjdGlvblN0ZXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVOb2RlRnJvbUNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlSFRNTC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0SFRNTEZyb21GcmFnbWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hQnlSZXNvbHZlZEV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlSlNPTi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2VuZXJhdGVUZXh0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc05vZGVTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzVGV4dFNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcmVzb2x2ZUZvY3VzUG9zaXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3NlbGVjdGlvblRvSW5zZXJ0aW9uRW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvSW5wdXRSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvUGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9jbGlwYm9hcmRUZXh0U2VyaWFsaXplci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NsZWFyTm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jcmVhdGVQYXJhZ3JhcGhOZWFyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZXhpdENvZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9leHRlbmRNYXJrUmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9pbnNlcnRDb250ZW50QXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pbkl0ZW1CYWNrd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5JdGVtRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5UZXh0YmxvY2tCYWNrd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5UZXh0YmxvY2tGb3J3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbGlmdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnRFbXB0eUJsb2NrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbGlmdExpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbmV3bGluZUluQ29kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdEFsbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdE5vZGVCYWNrd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdE5vZGVGb3J3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2VsZWN0UGFyZW50Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFRleHRibG9ja0VuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFRleHRibG9ja1N0YXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE5vZGVTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRUZXh0U2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2lua0xpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc3BsaXRCbG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NwbGl0TGlzdEl0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVMaXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvd3JhcEluLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvd3JhcEluTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZGVsZXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9kcm9wLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9lZGl0YWJsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZm9jdXNFdmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2tleW1hcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvcGFzdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL3RhYmluZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaW5wdXRSdWxlcy93cmFwcGluZ0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jYW5JbnNlcnROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTm9kZVZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NyZWF0ZUNoYWluYWJsZVN0YXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvQ29tbWFuZE1hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FdmVudEVtaXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZWxlbWVudEZyb21TdHJpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NyZWF0ZURvY3VtZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9kZWZhdWx0QmxvY2tBdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZENoaWxkcmVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9maW5kQ2hpbGRyZW5JblJhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9maW5kUGFyZW50Tm9kZUNsb3Nlc3RUb1Bvcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZFBhcmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEV4dGVuc2lvbkZpZWxkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9mbGF0dGVuRXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc0Z1bmN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2NhbGxPclJldHVybi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc0VtcHR5T2JqZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zcGxpdEV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEF0dHJpYnV0ZXNGcm9tRXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tZXJnZUF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFJlbmRlcmVkQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9mcm9tU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pbmplY3RFeHRlbnNpb25BdHRyaWJ1dGVzVG9QYXJzZVJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZmluZER1cGxpY2F0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3NvcnRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9yZXNvbHZlRXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRUZXh0QmV0d2Vlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dFNlcmlhbGl6ZXJzRnJvbVNjaGVtYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya1R5cGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXROb2RlVHlwZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0Tm9kZUF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYVR5cGVOYW1lQnlOYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL3JlbW92ZUR1cGxpY2F0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldENoYW5nZWRSYW5nZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldERlYnVnSlNPTi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1JlZ0V4cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9vYmplY3RJbmNsdWRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya1JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRNYXJrc0JldHdlZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE5vZGVBdFBvc2l0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTY2hlbWFUeXBlQnlOYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTcGxpdHRlZEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHRDb250ZW50RnJvbU5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc01hcmtBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTm9kZUFjdGl2ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQXRFbmRPZk5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQXRTdGFydE9mTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNFeHRlbnNpb25SdWxlc0VuYWJsZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNOb2RlRW1wdHkudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWluTWF4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9wb3NUb0RPTVJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3Jld3JpdGVVbmtub3duQ29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1BsYWluT2JqZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21lcmdlRGVlcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuZGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9NYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzTnVtYmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvYmx1ci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NsZWFyQ29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NvbW1hbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVDdXJyZW50Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2RlbGV0ZU5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVSYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2VudGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZmlyc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNBbmRyb2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzaU9TLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZm9jdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9mb3JFYWNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvaW5zZXJ0Q29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc01hY09TLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMva2V5Ym9hcmRTaG9ydGN1dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9kZWxldGVQcm9wcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Jlc2V0QXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Njcm9sbEludG9WaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0Q29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRNZXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlTWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3RvZ2dsZU5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVXcmFwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdW5kb0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Vuc2V0QWxsTWFya3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91bnNldE1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91cGRhdGVBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9jb21tYW5kcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL05vZGVQb3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9zdHlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jcmVhdGVTdHlsZVRhZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvbWFya0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvbm9kZUlucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvdGV4dGJsb2NrVHlwZUlucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvdGV4dElucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2pzeC1ydW50aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2VzY2FwZUZvclJlZ0V4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTWFya1ZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9Ob2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvcGFzdGVSdWxlcy9tYXJrUGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvcGFzdGVSdWxlcy9ub2RlUGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvcGFzdGVSdWxlcy90ZXh0UGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvVHJhY2tlci50cyJdLCJuYW1lcyI6WyJjb3JlXzNfNl8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNvbW1hbmRNYW5hZ2VyIiwiRWRpdG9yIiwiRXh0ZW5zaW9uIiwiRnJhZ21lbnQiLCJGcmFnbWVudDYiLCJJbnB1dFJ1bGUiLCJNYXJrIiwiTWFya1ZpZXciLCJOb2RlIiwiTm9kZTMiLCJOb2RlUG9zIiwiTm9kZVZpZXciLCJQYXN0ZVJ1bGUiLCJUcmFja2VyIiwiY2FsbE9yUmV0dXJuIiwiY2FuSW5zZXJ0Tm9kZSIsImNvbWJpbmVUcmFuc2FjdGlvblN0ZXBzIiwiY3JlYXRlQ2hhaW5hYmxlU3RhdGUiLCJjcmVhdGVEb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoIiwiY3JlYXRlTm9kZUZyb21Db250ZW50IiwiY3JlYXRlU3R5bGVUYWciLCJkZWZhdWx0QmxvY2tBdCIsImRlbGV0ZVByb3BzIiwiZWxlbWVudEZyb21TdHJpbmciLCJlc2NhcGVGb3JSZWdFeCIsImV4dGVuc2lvbnMiLCJleHRlbnNpb25zX2V4cG9ydHMiLCJmaW5kQ2hpbGRyZW4iLCJmaW5kQ2hpbGRyZW5JblJhbmdlIiwiZmluZER1cGxpY2F0ZXMiLCJmaW5kUGFyZW50Tm9kZSIsImZpbmRQYXJlbnROb2RlQ2xvc2VzdFRvUG9zIiwiZmxhdHRlbkV4dGVuc2lvbnMiLCJmcm9tU3RyaW5nIiwiZ2VuZXJhdGVIVE1MIiwiZ2VuZXJhdGVKU09OIiwiZ2VuZXJhdGVUZXh0IiwiZ2V0QXR0cmlidXRlcyIsImdldEF0dHJpYnV0ZXNGcm9tRXh0ZW5zaW9ucyIsImdldENoYW5nZWRSYW5nZXMiLCJnZXREZWJ1Z0pTT04iLCJnZXRFeHRlbnNpb25GaWVsZCIsImdldEhUTUxGcm9tRnJhZ21lbnQiLCJnZXRNYXJrQXR0cmlidXRlcyIsImdldE1hcmtSYW5nZSIsImdldE1hcmtUeXBlIiwiZ2V0TWFya3NCZXR3ZWVuIiwiZ2V0Tm9kZUF0UG9zaXRpb24iLCJnZXROb2RlQXR0cmlidXRlcyIsImdldE5vZGVUeXBlIiwiZ2V0UmVuZGVyZWRBdHRyaWJ1dGVzIiwiZ2V0U2NoZW1hIiwiZ2V0U2NoZW1hQnlSZXNvbHZlZEV4dGVuc2lvbnMiLCJnZXRTY2hlbWFUeXBlQnlOYW1lIiwiZ2V0U2NoZW1hVHlwZU5hbWVCeU5hbWUiLCJnZXRTcGxpdHRlZEF0dHJpYnV0ZXMiLCJnZXRUZXh0IiwiZ2V0VGV4dEJldHdlZW4iLCJnZXRUZXh0Q29udGVudEZyb21Ob2RlcyIsImdldFRleHRTZXJpYWxpemVyc0Zyb21TY2hlbWEiLCJpbmplY3RFeHRlbnNpb25BdHRyaWJ1dGVzVG9QYXJzZVJ1bGUiLCJpbnB1dFJ1bGVzUGx1Z2luIiwiaXNBY3RpdmUiLCJpc0FuZHJvaWQiLCJpc0F0RW5kT2ZOb2RlIiwiaXNBdFN0YXJ0T2ZOb2RlIiwiaXNFbXB0eU9iamVjdCIsImlzRXh0ZW5zaW9uUnVsZXNFbmFibGVkIiwiaXNGdW5jdGlvbiIsImlzTGlzdCIsImlzTWFjT1MiLCJpc01hcmtBY3RpdmUiLCJpc05vZGVBY3RpdmUiLCJpc05vZGVFbXB0eSIsImlzTm9kZVNlbGVjdGlvbiIsImlzTnVtYmVyIiwiaXNQbGFpbk9iamVjdCIsImlzUmVnRXhwIiwiaXNTdHJpbmciLCJpc1RleHRTZWxlY3Rpb24iLCJpc2lPUyIsIm1hcmtJbnB1dFJ1bGUiLCJtYXJrUGFzdGVSdWxlIiwibWVyZ2VBdHRyaWJ1dGVzIiwibWVyZ2VEZWVwIiwibWluTWF4Iiwibm9kZUlucHV0UnVsZSIsIm5vZGVQYXN0ZVJ1bGUiLCJvYmplY3RJbmNsdWRlcyIsInBhc3RlUnVsZXNQbHVnaW4iLCJwb3NUb0RPTVJlY3QiLCJyZW1vdmVEdXBsaWNhdGVzIiwicmVzb2x2ZUV4dGVuc2lvbnMiLCJyZXNvbHZlRm9jdXNQb3NpdGlvbiIsInJld3JpdGVVbmtub3duQ29udGVudCIsInNlbGVjdGlvblRvSW5zZXJ0aW9uRW5kIiwic29ydEV4dGVuc2lvbnMiLCJzcGxpdEV4dGVuc2lvbnMiLCJ0ZXh0SW5wdXRSdWxlIiwidGV4dFBhc3RlUnVsZSIsInRleHRibG9ja1R5cGVJbnB1dFJ1bGUiLCJ1cGRhdGVNYXJrVmlld0F0dHJpYnV0ZXMiLCJ3cmFwcGluZ0lucHV0UnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfc3RhdGUiLCJyZXF1aXJlIiwiaW1wb3J0X3ZpZXciLCJpbXBvcnRfa2V5bWFwIiwiaW1wb3J0X3RyYW5zZm9ybSIsImltcG9ydF9tb2RlbCIsImltcG9ydF9tb2RlbDIiLCJpbXBvcnRfbW9kZWwzIiwiaW1wb3J0X21vZGVsNCIsImltcG9ydF9tb2RlbDUiLCJpbXBvcnRfbW9kZWw2IiwiaW1wb3J0X3N0YXRlMiIsImltcG9ydF9zdGF0ZTMiLCJpbXBvcnRfc3RhdGU0IiwiaW1wb3J0X3N0YXRlNSIsImltcG9ydF90cmFuc2Zvcm0yIiwiaW1wb3J0X21vZGVsNyIsImltcG9ydF9zdGF0ZTYiLCJpbXBvcnRfbW9kZWw4IiwiaW1wb3J0X3N0YXRlNyIsImltcG9ydF9zdGF0ZTgiLCJpbXBvcnRfdHJhbnNmb3JtMyIsImltcG9ydF9jb21tYW5kcyIsImltcG9ydF9zdGF0ZTkiLCJpbXBvcnRfY29tbWFuZHMyIiwiaW1wb3J0X2NvbW1hbmRzMyIsImltcG9ydF9zdGF0ZTEwIiwiaW1wb3J0X21vZGVsOSIsImltcG9ydF9jb21tYW5kczQiLCJpbXBvcnRfdHJhbnNmb3JtNCIsImltcG9ydF90cmFuc2Zvcm01IiwiaW1wb3J0X2NvbW1hbmRzNSIsImltcG9ydF9jb21tYW5kczYiLCJpbXBvcnRfY29tbWFuZHM3IiwiaW1wb3J0X2NvbW1hbmRzOCIsImltcG9ydF9zY2hlbWFfbGlzdCIsImltcG9ydF9jb21tYW5kczkiLCJpbXBvcnRfc3RhdGUxMSIsImltcG9ydF9jb21tYW5kczEwIiwiaW1wb3J0X2NvbW1hbmRzMTEiLCJpbXBvcnRfY29tbWFuZHMxMiIsImltcG9ydF9jb21tYW5kczEzIiwiaW1wb3J0X2NvbW1hbmRzMTQiLCJpbXBvcnRfY29tbWFuZHMxNSIsImltcG9ydF9zdGF0ZTEyIiwiaW1wb3J0X3N0YXRlMTMiLCJpbXBvcnRfc2NoZW1hX2xpc3QyIiwiaW1wb3J0X3N0YXRlMTQiLCJpbXBvcnRfdHJhbnNmb3JtNiIsImltcG9ydF9tb2RlbDEwIiwiaW1wb3J0X3N0YXRlMTUiLCJpbXBvcnRfdHJhbnNmb3JtNyIsImltcG9ydF90cmFuc2Zvcm04IiwiaW1wb3J0X2NvbW1hbmRzMTYiLCJpbXBvcnRfc2NoZW1hX2xpc3QzIiwiaW1wb3J0X3RyYW5zZm9ybTkiLCJpbXBvcnRfc3RhdGUxNiIsImltcG9ydF9zdGF0ZTE3IiwiaW1wb3J0X3N0YXRlMTgiLCJpbXBvcnRfc3RhdGUxOSIsImltcG9ydF9zdGF0ZTIwIiwiaW1wb3J0X3N0YXRlMjEiLCJpbXBvcnRfdHJhbnNmb3JtMTAiLCJpbXBvcnRfc3RhdGUyMiIsImltcG9ydF9zdGF0ZTIzIiwiY29uZmlnIiwic3RhdGUiLCJ0cmFuc2FjdGlvbiIsInNlbGVjdGlvbiIsImRvYyIsInN0b3JlZE1hcmtzIiwiYXBwbHkiLCJiaW5kIiwiYXBwbHlUcmFuc2FjdGlvbiIsInBsdWdpbnMiLCJzY2hlbWEiLCJyZWNvbmZpZ3VyZSIsInRvSlNPTiIsInRyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImVkaXRvciIsInJhd0NvbW1hbmRzIiwiZXh0ZW5zaW9uTWFuYWdlciIsImNvbW1hbmRzIiwiY3VzdG9tU3RhdGUiLCJoYXNDdXN0b21TdGF0ZSIsInZpZXciLCJidWlsZFByb3BzIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwibmFtZSIsImNvbW1hbmQyIiwibWV0aG9kIiwiYXJncyIsImNhbGxiYWNrIiwiZ2V0TWV0YSIsImRpc3BhdGNoIiwiY2hhaW4iLCJjcmVhdGVDaGFpbiIsImNhbiIsImNyZWF0ZUNhbiIsInN0YXJ0VHIiLCJzaG91bGREaXNwYXRjaCIsImNhbGxiYWNrcyIsImhhc1N0YXJ0VHJhbnNhY3Rpb24iLCJydW4zIiwicnVuIiwiZXZlcnkiLCJjaGFpbmVkQ29tbWFuZCIsInB1c2giLCJmb3JtYXR0ZWRDb21tYW5kcyIsIkV2ZW50RW1pdHRlciIsIm9uIiwiZXZlbnQiLCJmbiIsImVtaXQiLCJmb3JFYWNoIiwib2ZmIiwiZmlsdGVyIiwib25jZSIsIm9uY2VGbiIsInJlbW92ZUFsbExpc3RlbmVycyIsIm9sZERvYyIsInRyYW5zYWN0aW9ucyIsInRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsInN0ZXBzIiwic3RlcCIsInJlbW92ZVdoaXRlc3BhY2VzIiwibm9kZSIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsImkiLCJsZW5ndGgiLCJjaGlsZCIsIm5vZGVUeXBlIiwibm9kZVZhbHVlIiwidGVzdCIsInJlbW92ZUNoaWxkIiwidmFsdWUiLCJ3aW5kb3ciLCJFcnJvciIsIndyYXBwZWRWYWx1ZSIsImh0bWwiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJib2R5IiwiY29udGVudCIsIm9wdGlvbnMiLCJzbGljZSIsInBhcnNlT3B0aW9ucyIsImlzSlNPTkNvbnRlbnQiLCJpc1RleHRDb250ZW50IiwiaXNBcnJheUNvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJmcm9tQXJyYXkiLCJpdGVtIiwibm9kZUZyb21KU09OIiwiZXJyb3JPbkludmFsaWRDb250ZW50IiwiY2hlY2siLCJlcnJvciIsImNhdXNlIiwiY29uc29sZSIsIndhcm4iLCJoYXNJbnZhbGlkQ29udGVudCIsImludmFsaWRDb250ZW50IiwiY29udGVudENoZWNrU2NoZW1hIiwiU2NoZW1hIiwidG9wTm9kZSIsInNwZWMiLCJtYXJrcyIsIm5vZGVzIiwiYXBwZW5kIiwiX190aXB0YXBfX3ByaXZhdGVfX3Vua25vd25fX2NhdGNoX19hbGxfX25vZGUiLCJncm91cCIsInBhcnNlRE9NIiwidGFnIiwiZ2V0QXR0cnMiLCJlIiwib3V0ZXJIVE1MIiwiZnJvbVNjaGVtYSIsInBhcnNlU2xpY2UiLCJwYXJzZSIsInBhcnNlciIsIm1hdGNoIiwiZWRnZUNvdW50IiwidHlwZSIsImVkZ2UiLCJpc1RleHRibG9jayIsImhhc1JlcXVpcmVkQXR0cnMiLCJwcmVkaWNhdGUiLCJub2Rlc1dpdGhQb3MiLCJkZXNjZW5kYW50cyIsInBvcyIsInJhbmdlIiwibm9kZXNCZXR3ZWVuIiwiZnJvbSIsInRvIiwiJHBvcyIsImRlcHRoIiwiYmVmb3JlIiwic3RhcnQiLCIkZnJvbSIsImV4dGVuc2lvbiIsImZpZWxkIiwiY29udGV4dCIsInBhcmVudCIsInN0b3JhZ2UiLCJhZGRFeHRlbnNpb25zIiwiZmxhdCIsImZyYWdtZW50IiwiZG9jdW1lbnRGcmFnbWVudCIsIkRPTVNlcmlhbGl6ZXIiLCJzZXJpYWxpemVGcmFnbWVudCIsInRlbXBvcmFyeURvY3VtZW50IiwiZG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwia2V5cyIsImJhc2VFeHRlbnNpb25zIiwibm9kZUV4dGVuc2lvbnMiLCJtYXJrRXh0ZW5zaW9ucyIsImV4dGVuc2lvbkF0dHJpYnV0ZXMiLCJub2RlQW5kTWFya0V4dGVuc2lvbnMiLCJkZWZhdWx0QXR0cmlidXRlIiwiZGVmYXVsdCIsInZhbGlkYXRlIiwicmVuZGVyZWQiLCJyZW5kZXJIVE1MIiwicGFyc2VIVE1MIiwia2VlcE9uU3BsaXQiLCJpc1JlcXVpcmVkIiwiYWRkR2xvYmFsQXR0cmlidXRlcyIsImdsb2JhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGUiLCJ0eXBlcyIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGVzIiwibWVyZ2VkQXR0ciIsIm9iamVjdHMiLCJyZWR1Y2UiLCJpdGVtcyIsIm1lcmdlZEF0dHJpYnV0ZXMiLCJrZXkiLCJleGlzdHMiLCJ2YWx1ZUNsYXNzZXMiLCJTdHJpbmciLCJzcGxpdCIsImV4aXN0aW5nQ2xhc3NlcyIsImluc2VydENsYXNzZXMiLCJ2YWx1ZUNsYXNzIiwiaW5jbHVkZXMiLCJqb2luIiwibmV3U3R5bGVzIiwic3R5bGUyIiwidHJpbSIsIkJvb2xlYW4iLCJleGlzdGluZ1N0eWxlcyIsInN0eWxlTWFwIiwiTWFwIiwicHJvcGVydHkiLCJ2YWwiLCJwYXJ0Iiwic2V0Iiwibm9kZU9yTWFyayIsImF0dHJzIiwiTnVtYmVyIiwicGFyc2VSdWxlIiwib2xkQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGUiLCJjbGVhblVwU2NoZW1hSXRlbSIsImRhdGEiLCJfYSIsImFsbEF0dHJpYnV0ZXMiLCJmaW5kIiwiZXh0cmFOb2RlRmllbGRzIiwiZmllbGRzIiwiZXh0ZW5kTm9kZVNjaGVtYSIsImlubGluZSIsImF0b20iLCJzZWxlY3RhYmxlIiwiZHJhZ2dhYmxlIiwiY29kZSIsIndoaXRlc3BhY2UiLCJsaW5lYnJlYWtSZXBsYWNlbWVudCIsImRlZmluaW5nIiwiaXNvbGF0aW5nIiwiZXh0ZW5zaW9uQXR0cmlidXRlIiwiX2EyIiwiX2IiLCJ0b0RPTSIsIkhUTUxBdHRyaWJ1dGVzIiwicmVuZGVyVGV4dCIsInRvVGV4dCIsImV4dHJhTWFya0ZpZWxkcyIsImV4dGVuZE1hcmtTY2hlbWEiLCJpbmNsdXNpdmUiLCJleGNsdWRlcyIsInNwYW5uaW5nIiwibWFyayIsImZpbHRlcmVkIiwiZWwiLCJpbmRleCIsImluZGV4T2YiLCJTZXQiLCJkZWZhdWx0UHJpb3JpdHkiLCJzb3J0IiwiYSIsImIiLCJwcmlvcml0eUEiLCJwcmlvcml0eUIiLCJyZXNvbHZlZEV4dGVuc2lvbnMiLCJkdXBsaWNhdGVkTmFtZXMiLCJjb250ZW50Tm9kZSIsImZyb21KU09OIiwiZG9tIiwic3RhcnROb2RlIiwiYmxvY2tTZXBhcmF0b3IiLCJ0ZXh0U2VyaWFsaXplcnMiLCJ0ZXh0IiwiaXNCbG9jayIsInRleHRTZXJpYWxpemVyIiwiaXNUZXh0IiwiTWF0aCIsIm1heCIsInNpemUiLCJuYW1lT3JUeXBlIiwidHlwZU9yTmFtZSIsImVtcHR5IiwiJGhlYWQiLCJtYXJrSXRlbSIsIm5vZGUyIiwicmV2ZXJzZSIsIm5vZGVJdGVtIiwic2NoZW1hVHlwZSIsImFycmF5IiwiYnkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VlbiIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNpbXBsaWZ5Q2hhbmdlZFJhbmdlcyIsImNoYW5nZXMiLCJ1bmlxdWVDaGFuZ2VzIiwiY2hhbmdlIiwicmVzdCIsIl8iLCJzb21lIiwib3RoZXJDaGFuZ2UiLCJvbGRSYW5nZSIsIm5ld1JhbmdlIiwibWFwcGluZyIsIm1hcHMiLCJzdGVwTWFwIiwicmFuZ2VzIiwibmV3U3RhcnQiLCJuZXdFbmQiLCJvbGRTdGFydCIsImludmVydCIsIm9sZEVuZCIsInN0YXJ0T2Zmc2V0IiwiaXNUb3BOb2RlIiwidG9wTm9kZVR5cGUiLCJpbmNyZW1lbnQiLCJub2RlU2l6ZSIsIm91dHB1dDIiLCJvdXRwdXQiLCJjaGlsZENvdW50Iiwib2Zmc2V0IiwidG9TdHJpbmciLCJvYmplY3QxIiwib2JqZWN0MiIsInN0cmljdCIsImZpbmRNYXJrSW5TZXQiLCJrIiwiaXNNYXJrSW5TZXQiLCJjaGlsZEFmdGVyIiwicGFyZW50T2Zmc2V0IiwibWFyazIiLCJjaGlsZEJlZm9yZSIsInN0YXJ0SW5kZXgiLCJzdGFydFBvcyIsImVuZEluZGV4IiwiZW5kUG9zIiwicmVzb2x2ZSIsIm1heERlcHRoIiwiY3VycmVudERlcHRoIiwiY3VycmVudE5vZGUiLCJ0eXBlTmFtZSIsIm1heE1hdGNoIiwidGV4dEJlZm9yZSIsInNsaWNlRW5kUG9zIiwiY2h1bmsiLCJ0ZXh0Q29udGVudCIsImlzQXRvbSIsInNlbGVjdGlvblJhbmdlIiwibWFya1JhbmdlcyIsIiR0byIsInJlbGF0aXZlRnJvbSIsInJlbGF0aXZlVG8iLCJtaW4iLCJyYW5nZTIiLCJtYXRjaGVkUmFuZ2UiLCJtYXJrUmFuZ2UiLCJzdW0iLCJleGNsdWRlZFJhbmdlIiwibm9kZVJhbmdlcyIsIm1hdGNoZWROb2RlUmFuZ2VzIiwibm9kZVJhbmdlIiwiJGFuY2hvciIsInBhcmVudE5vZGUiLCIkcGFyZW50UG9zIiwiZW5kIiwiZW5hYmxlZCIsImVuYWJsZWRFeHRlbnNpb24iLCJjaGVja0NoaWxkcmVuIiwiaWdub3JlV2hpdGVzcGFjZSIsImlzTGVhZiIsImlzQ29udGVudEVtcHR5IiwiY2hpbGROb2RlIiwiTm9kZVNlbGVjdGlvbiIsIlRleHRTZWxlY3Rpb24iLCJtaW5Qb3MiLCJtYXhQb3MiLCJyZXNvbHZlZEZyb20iLCJyZXNvbHZlZEVuZCIsImNvb3Jkc0F0UG9zIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBvc2l0aW9uIiwic2VsZWN0aW9uQXRTdGFydCIsIlNlbGVjdGlvbiIsImF0U3RhcnQiLCJzZWxlY3Rpb25BdEVuZCIsImF0RW5kIiwiY3JlYXRlIiwicmV3cml0ZVVua25vd25Db250ZW50SW5uZXIiLCJqc29uIiwidmFsaWRNYXJrcyIsInZhbGlkTm9kZXMiLCJyZXdyaXR0ZW5Db250ZW50IiwiaGFzIiwib3JpZ2luYWwiLCJ1bnN1cHBvcnRlZCIsImZhbGxiYWNrVG9QYXJhZ3JhcGgiLCJzdGFydExlbiIsImJpYXMiLCJsYXN0IiwiUmVwbGFjZVN0ZXAiLCJSZXBsYWNlQXJvdW5kU3RlcCIsIl9mcm9tIiwiX3RvIiwiX25ld0Zyb20iLCJuZXdUbyIsInNldFNlbGVjdGlvbiIsIm5lYXIiLCJoYW5kbGVyIiwidW5kb2FibGUiLCJpbnB1dFJ1bGVNYXRjaGVySGFuZGxlciIsImV4ZWMiLCJpbnB1dFJ1bGVNYXRjaCIsInJlc3VsdCIsImlucHV0IiwicmVwbGFjZVdpdGgiLCJydWxlcyIsInBsdWdpbiIsImNvbXBvc2luZyIsIm5vZGVCZWZvcmUiLCJub2RlQWZ0ZXIiLCJtYXRjaGVkIiwicnVsZSIsInNldE1ldGEiLCJQbHVnaW4iLCJpbml0IiwicHJldiIsInN0b3JlZCIsInNpbXVsYXRlZElucHV0TWV0YSIsImlzU2ltdWxhdGVkSW5wdXQiLCJzZXRUaW1lb3V0Iiwic2VsZWN0aW9uU2V0IiwiZG9jQ2hhbmdlZCIsImhhbmRsZVRleHRJbnB1dCIsImhhbmRsZURPTUV2ZW50cyIsImNvbXBvc2l0aW9uZW5kIiwiJGN1cnNvciIsImhhbmRsZUtleURvd24iLCJpc0lucHV0UnVsZXMiLCJnZXRUeXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJ0YXJnZXQiLCJzb3VyY2UiLCJFeHRlbmRhYmxlIiwiY29uZmlndXJlIiwiZXh0ZW5kIiwiYWRkT3B0aW9ucyIsImV4dGVuZGVkQ29uZmlnIiwiX01hcmsiLCJhcmd1bWVudHMiLCJyZXNvbHZlZENvbmZpZyIsImhhbmRsZUV4aXQiLCJjdXJyZW50UG9zIiwiaXNBdEVuZCIsImN1cnJlbnRNYXJrcyIsImlzSW5NYXJrIiwibSIsInJlbW92ZU1hcmsiLCJyZW1vdmVTdG9yZWRNYXJrIiwiaW5zZXJ0VGV4dCIsInBhc3RlUnVsZU1hdGNoZXJIYW5kbGVyIiwibWF0Y2hBbGwiLCJtYXRjaGVzIiwicGFzdGVSdWxlTWF0Y2giLCJydW4yIiwicGFzdGVFdmVudCIsImRyb3BFdmVudCIsImhhbmRsZXJzIiwiX2MiLCJfZCIsIl9lIiwiaXNJbmxpbmUiLCJjb250ZW50U2l6ZSIsInJlc29sdmVkVG8iLCJ0ZXh0VG9NYXRjaCIsInRleHRCZXR3ZWVuIiwic3VjY2VzcyIsInRpcHRhcERyYWdGcm9tT3RoZXJFZGl0b3IiLCJjcmVhdGVDbGlwYm9hcmRQYXN0ZUV2ZW50IiwiQ2xpcGJvYXJkRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwiRGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImRyYWdTb3VyY2VFbGVtZW50IiwiaXNQYXN0ZWRGcm9tUHJvc2VNaXJyb3IiLCJpc0Ryb3BwZWRGcm9tUHJvc2VNaXJyb3IiLCJEcmFnRXZlbnQiLCJwcm9jZXNzRXZlbnQiLCJwYXN0ZUV2dCIsImNoYWluYWJsZVN0YXRlIiwiaGFuZGxlRHJhZ3N0YXJ0IiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiaGFuZGxlRHJhZ2VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3AiLCJkcmFnRnJvbU90aGVyRWRpdG9yIiwiaXNFZGl0YWJsZSIsImRlbGV0ZVJhbmdlIiwicGFzdGUiLCJfdmlldyIsImdldERhdGEiLCJhcHBlbmRUcmFuc2FjdGlvbiIsIm9sZFN0YXRlIiwiaXNQYXN0ZSIsImlzRHJvcCIsInNpbXVsYXRlZFBhc3RlTWV0YSIsImlzU2ltdWxhdGVkUGFzdGUiLCJmcm9tMiIsInRvMiIsImZpbmREaWZmU3RhcnQiLCJmaW5kRGlmZkVuZCIsIkV4dGVuc2lvbk1hbmFnZXIiLCJzcGxpdHRhYmxlTWFya3MiLCJzZXR1cEV4dGVuc2lvbnMiLCJleHRlbnNpb25TdG9yYWdlIiwiYWRkQ29tbWFuZHMiLCJhbGxQbHVnaW5zIiwiZmxhdE1hcCIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiZGVmYXVsdEJpbmRpbmdzIiwiQXJyb3dSaWdodCIsImJpbmRpbmdzIiwic2hvcnRjdXQiLCJrZXlNYXBQbHVnaW4iLCJrZXltYXAiLCJhZGRJbnB1dFJ1bGVzIiwiZW5hYmxlSW5wdXRSdWxlcyIsImlucHV0UmVzdWx0IiwiaW5wdXRQbHVnaW5zIiwiYWRkUGFzdGVSdWxlcyIsImVuYWJsZVBhc3RlUnVsZXMiLCJwYXN0ZVJ1bGVzIiwiYWRkUHJvc2VNaXJyb3JQbHVnaW5zIiwicHJvc2VNaXJyb3JQbHVnaW5zIiwibm9kZVZpZXdzIiwiYWRkTm9kZVZpZXciLCJub2RldmlldyIsImdldFBvcyIsImRlY29yYXRpb25zIiwiaW5uZXJEZWNvcmF0aW9ucyIsIm1hcmtWaWV3cyIsImFkZE1hcmtWaWV3IiwibWFya1ZpZXciLCJ1cGRhdGVBdHRyaWJ1dGVzIiwib25CZWZvcmVDcmVhdGUiLCJvbkNyZWF0ZSIsIm9uVXBkYXRlIiwib25TZWxlY3Rpb25VcGRhdGUiLCJvblRyYW5zYWN0aW9uIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uRGVzdHJveSIsImZsYXR0ZW4iLCJfX2V4cG9ydDIiLCJDbGlwYm9hcmRUZXh0U2VyaWFsaXplciIsIkNvbW1hbmRzIiwiRGVsZXRlIiwiRHJvcCIsIkVkaXRhYmxlIiwiRm9jdXNFdmVudHMiLCJLZXltYXAiLCJQYXN0ZSIsIlRhYmluZGV4IiwiZm9jdXNFdmVudHNQbHVnaW5LZXkiLCJfRXh0ZW5zaW9uIiwiUGx1Z2luS2V5IiwiY2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIiLCJjb21tYW5kc19leHBvcnRzIiwiYmx1ciIsImNsZWFyQ29udGVudCIsImNsZWFyTm9kZXMiLCJjb21tYW5kIiwiY3JlYXRlUGFyYWdyYXBoTmVhciIsImN1dCIsImRlbGV0ZUN1cnJlbnROb2RlIiwiZGVsZXRlTm9kZSIsImRlbGV0ZVNlbGVjdGlvbiIsImVudGVyIiwiZXhpdENvZGUiLCJleHRlbmRNYXJrUmFuZ2UiLCJmaXJzdCIsImZvY3VzIiwiaW5zZXJ0Q29udGVudCIsImluc2VydENvbnRlbnRBdCIsImpvaW5CYWNrd2FyZCIsImpvaW5Eb3duIiwiam9pbkZvcndhcmQiLCJqb2luSXRlbUJhY2t3YXJkIiwiam9pbkl0ZW1Gb3J3YXJkIiwiam9pblRleHRibG9ja0JhY2t3YXJkIiwiam9pblRleHRibG9ja0ZvcndhcmQiLCJqb2luVXAiLCJrZXlib2FyZFNob3J0Y3V0IiwibGlmdCIsImxpZnRFbXB0eUJsb2NrIiwibGlmdExpc3RJdGVtIiwibmV3bGluZUluQ29kZSIsInJlc2V0QXR0cmlidXRlcyIsInNjcm9sbEludG9WaWV3Iiwic2VsZWN0QWxsIiwic2VsZWN0Tm9kZUJhY2t3YXJkIiwic2VsZWN0Tm9kZUZvcndhcmQiLCJzZWxlY3RQYXJlbnROb2RlIiwic2VsZWN0VGV4dGJsb2NrRW5kIiwic2VsZWN0VGV4dGJsb2NrU3RhcnQiLCJzZXRDb250ZW50Iiwic2V0TWFyayIsInNldE5vZGUiLCJzZXROb2RlU2VsZWN0aW9uIiwic2V0VGV4dFNlbGVjdGlvbiIsInNpbmtMaXN0SXRlbSIsInNwbGl0QmxvY2siLCJzcGxpdExpc3RJdGVtIiwidG9nZ2xlTGlzdCIsInRvZ2dsZU1hcmsiLCJ0b2dnbGVOb2RlIiwidG9nZ2xlV3JhcCIsInVuZG9JbnB1dFJ1bGUiLCJ1bnNldEFsbE1hcmtzIiwidW5zZXRNYXJrIiwid3JhcEluIiwid3JhcEluTGlzdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlzRGVzdHJveWVkIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiZW1pdFVwZGF0ZSIsIiRtYXBwZWRGcm9tIiwiJG1hcHBlZFRvIiwiYmxvY2tSYW5nZSIsInRhcmdldExpZnREZXB0aCIsImxpZnRUYXJnZXQiLCJkZWZhdWx0VHlwZSIsImNvbnRlbnRNYXRjaEF0Iiwic2V0Tm9kZU1hcmt1cCIsIm9yaWdpblJhbmdlIiwidGFyZ2V0UG9zIiwiY29udGVudFNsaWNlIiwibmV3UG9zIiwiaW5zZXJ0IiwiYWZ0ZXIiLCJkZWxldGUiLCJuZXdTZWxlY3Rpb24iLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInVzZXJBZ2VudCIsImRlbGF5ZWRGb2N1cyIsImhhc0ZvY3VzIiwiaXNTYW1lU2VsZWN0aW9uIiwiZXEiLCJzZXRTdG9yZWRNYXJrcyIsImlzRnJhZ21lbnQiLCJub2RlT3JGcmFnbWVudCIsInVwZGF0ZVNlbGVjdGlvbiIsImFwcGx5SW5wdXRSdWxlcyIsImFwcGx5UGFzdGVSdWxlcyIsImVtaXRDb250ZW50RXJyb3IiLCJkaXNhYmxlQ29sbGFib3JhdGlvbiIsImNvbGxhYm9yYXRpb24iLCJpc0Rpc2FibGVkIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwiZW5hYmxlQ29udGVudENoZWNrIiwiaXNPbmx5VGV4dENvbnRlbnQiLCJpc09ubHlCbG9ja0NvbnRlbnQiLCJpc0VtcHR5VGV4dEJsb2NrIiwibmV3Q29udGVudCIsInYiLCIkZnJvbU5vZGUiLCJmcm9tU2VsZWN0aW9uQXRTdGFydCIsImlzVGV4dFNlbGVjdGlvbjIiLCJoYXNDb250ZW50IiwicG9pbnQiLCJqb2luUG9pbnQiLCJub3JtYWxpemVLZXlOYW1lIiwicGFydHMiLCJhbHQiLCJjdHJsIiwic2hpZnQiLCJtZXRhIiwibW9kIiwiS2V5Ym9hcmRFdmVudCIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNhcHR1cmVkVHJhbnNhY3Rpb24iLCJjYXB0dXJlVHJhbnNhY3Rpb24iLCJzb21lUHJvcCIsImYiLCJuZXdTdGVwIiwibWF5YmVTdGVwIiwiaXNBY3RpdmUyIiwib2JqIiwicHJvcE9yUHJvcHMiLCJuZXdPYmoiLCJwcm9wIiwibWFya1R5cGUiLCJhZGRNYXJrIiwiQWxsU2VsZWN0aW9uIiwiZG9jdW1lbnQyIiwiY2FuU2V0TWFyayIsIm5ld01hcmtUeXBlIiwiY3Vyc29yIiwicGFyZW50QWxsb3dzTWFya1R5cGUiLCJhbGxvd3NNYXJrVHlwZSIsImlzSW5TZXQiLCJzb21lTm9kZVN1cHBvcnRzTWFyayIsImlubGluZUNvbnRlbnQiLCJfcG9zIiwiY3VycmVudE1hcmtzQWxsb3dNYXJrVHlwZSIsIm90aGVyTWFyayIsImFkZFN0b3JlZE1hcmsiLCJ0cmltbWVkRnJvbSIsInRyaW1tZWRUbyIsInNvbWVIYXNNYXJrIiwiYXR0cmlidXRlc1RvQ29weSIsInNhbWVQYXJlbnQiLCJjYW5TZXRCbG9jayIsInNldEJsb2NrVHlwZSIsInVwZGF0ZWRTdGF0ZSIsImVuc3VyZU1hcmtzIiwiZmlsdGVyZWRNYXJrcyIsImtlZXBNYXJrcyIsImNhblNwbGl0IiwiZGVmbHQiLCJpbmRleEFmdGVyIiwiZmlyc3QyIiwiJGZpcnN0IiwiY2FuUmVwbGFjZVdpdGgiLCJvdmVycmlkZUF0dHJzIiwiZ3JhbmRQYXJlbnQiLCJ3cmFwIiwiZGVwdGhCZWZvcmUiLCJkIiwiY29weSIsImRlcHRoQWZ0ZXIiLCJuZXdOZXh0VHlwZUF0dHJpYnV0ZXMyIiwibmV4dFR5cGUyIiwiY29udGVudE1hdGNoIiwiY3JlYXRlQW5kRmlsbCIsInJlcGxhY2UiLCJTbGljZSIsInNlbCIsIm4iLCJuZXh0VHlwZSIsIm5ld1R5cGVBdHRyaWJ1dGVzIiwibmV3TmV4dFR5cGVBdHRyaWJ1dGVzIiwiam9pbkxpc3RCYWNrd2FyZHMiLCJsaXN0VHlwZSIsImxpc3QiLCJub2RlQXQiLCJjYW5Kb2luQmFja3dhcmRzIiwiY2FuSm9pbiIsImpvaW5MaXN0Rm9yd2FyZHMiLCJjYW5Kb2luRm9yd2FyZHMiLCJsaXN0VHlwZU9yTmFtZSIsIml0ZW1UeXBlT3JOYW1lIiwiaXRlbVR5cGUiLCJwYXJlbnRMaXN0IiwidmFsaWRDb250ZW50IiwiY2FuV3JhcEluTGlzdCIsImV4dGVuZEVtcHR5TWFya1JhbmdlIiwidG9nZ2xlVHlwZU9yTmFtZSIsInRvZ2dsZVR5cGUiLCJnZXRTdGF0ZSIsInRvVW5kbyIsImoiLCJkb2NzIiwibGFzdFBvcyIsImxhc3ROb2RlIiwidHJpbW1lZEZyb20yIiwidHJpbW1lZFRvMiIsImFwcGVuZGVkVHJhbnNhY3Rpb25zIiwiX2IyIiwiX2MyIiwiY29yZUV4dGVuc2lvbk9wdGlvbnMiLCJmaWx0ZXJUcmFuc2FjdGlvbiIsIm5leHRUcmFuc2FjdGlvbiIsIm1hcFJlc3VsdCIsImRlbGV0ZWRBZnRlciIsImRlbGV0ZWRCZWZvcmUiLCJpc0Z1bGx5V2l0aGluUmFuZ2UiLCJuZXdGcm9tIiwiZGVsZXRlZFJhbmdlIiwicGFydGlhbCIsImNvbWJpbmVkVHJhbnNmb3JtIiwiX2EzIiwiX2IzIiwiUmVtb3ZlTWFya1N0ZXAiLCJmb3VuZEJlZm9yZU1hcmsiLCJmb3VuZEFmdGVyTWFyayIsImFzeW5jIiwiaGFuZGxlRHJvcCIsIm1vdmVkIiwiZWRpdGFibGUiLCJpc0ZvY3VzZWQiLCJoYW5kbGVCYWNrc3BhY2UiLCJwYXJlbnRJc0lzb2xhdGluZyIsInBhcmVudFBvcyIsImlzQXRTdGFydCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUVudGVyIiwiYmFzZUtleW1hcCIsIkVudGVyIiwiTW9kLUVudGVyIiwiQmFja3NwYWNlIiwiTW9kLWEiLCJwY0tleW1hcCIsIm1hY0tleW1hcCIsIkN0cmwtYSIsIkN0cmwtZSIsIm5ld1N0YXRlIiwidHIyIiwiZG9jQ2hhbmdlcyIsImlnbm9yZVRyIiwiYWxsRnJvbSIsImFsbEVuZCIsImFsbFdhc1NlbGVjdGVkIiwiaXNFbXB0eSIsImhhbmRsZVBhc3RlIiwidGFiaW5kZXgiLCJfTm9kZVBvcyIsImFjdHVhbERlcHRoIiwicmVzb2x2ZWRQb3MiLCJlbGVtZW50IiwiZG9tQXRQb3MiLCJpc05vblRleHRBdG9tIiwiY2hpbGROb2RlUG9zIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImNsb3Nlc3QiLCJzZWxlY3RvciIsIm5vZGVBdHRyaWJ1dGVzIiwiYXR0cktleXMiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZpcnN0SXRlbU9ubHkiLCJjaGlsZFBvcyIsImRvZXNBbGxBdHRyaWJ1dGVzTWF0Y2giLCJjb25jYXQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsIm5vbmNlIiwic3VmZml4IiwidGlwdGFwU3R5bGVUYWciLCJzdHlsZU5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNzcyIsImVkaXRvclZpZXciLCJpc0luaXRpYWxpemVkIiwiaW5zdGFuY2VJZCIsInJhbmRvbSIsImluamVjdENTUyIsImluamVjdE5vbmNlIiwiYXV0b2ZvY3VzIiwiZWRpdG9yUHJvcHMiLCJlbmFibGVDb3JlRXh0ZW5zaW9ucyIsIm9uTW91bnQiLCJvblVubW91bnQiLCJvbkNvbnRlbnRFcnJvciIsIm9uUGFzdGUiLCJvbkRyb3AiLCJvbkRlbGV0ZSIsImlzQ2FwdHVyaW5nVHJhbnNhY3Rpb24iLCJzZXRPcHRpb25zIiwiY3JlYXRlRXh0ZW5zaW9uTWFuYWdlciIsImNyZWF0ZUNvbW1hbmRNYW5hZ2VyIiwiY3JlYXRlU2NoZW1hIiwiaW5pdGlhbERvYyIsImNyZWF0ZURvYyIsImVkaXRvclN0YXRlIiwiRWRpdG9yU3RhdGUiLCJtb3VudCIsImNyZWF0ZVZpZXciLCJoZWFkIiwidW5tb3VudCIsInJlbW92ZSIsImNvbW1hbmRNYW5hZ2VyIiwic2V0UHJvcHMiLCJ1cGRhdGVTdGF0ZSIsInNldEVkaXRhYmxlIiwiUHJveHkiLCJkaXNwYXRjaFRyYW5zYWN0aW9uIiwiZHJhZ2dpbmciLCJnZXQiLCJSZWZsZWN0IiwicmVnaXN0ZXJQbHVnaW4iLCJoYW5kbGVQbHVnaW5zIiwidW5yZWdpc3RlclBsdWdpbiIsIm5hbWVPclBsdWdpbktleVRvUmVtb3ZlIiwicHJldlBsdWdpbnMiLCJuYW1lT3JQbHVnaW5LZXkiLCJzdGFydHNXaXRoIiwiY29yZUV4dGVuc2lvbnMiLCJleHQiLCJhbGxFeHRlbnNpb25zIiwibWVzc2FnZSIsIkVkaXRvclZpZXciLCJyb2xlIiwicHJlcGVuZENsYXNzIiwiY3JlYXRlTm9kZVZpZXdzIiwiY2xhc3NOYW1lIiwic2VsZWN0aW9uSGFzQ2hhbmdlZCIsInJvb3RUcldhc0FwcGxpZWQiLCJwcmV2U3RhdGUiLCJuZXh0U3RhdGUiLCJtb3N0UmVjZW50Rm9jdXNUciIsImZpbmRMYXN0IiwiZm9jdXMyIiwiYmx1cjIiLCJuYW1lT3JBdHRyaWJ1dGVzIiwiYXR0cmlidXRlc09yVW5kZWZpbmVkIiwiZ2V0SlNPTiIsImdldEhUTUwiLCIkbm9kZSIsIiRkb2MiLCIkbm9kZXMiLCJjYXB0dXJlR3JvdXAiLCJmdWxsTWF0Y2giLCJzdGFydFNwYWNlcyIsInNlYXJjaCIsInRleHRTdGFydCIsInRleHRFbmQiLCJleGNsdWRlZE1hcmtzIiwiZXhjbHVkZWQiLCJtYXJrRW5kIiwibmV3Tm9kZSIsImxhc3RJbmRleE9mIiwibWF0Y2hTdGFydCIsImxhc3RDaGFyIiwiaW5zZXJ0aW9uU3RhcnQiLCIkc3RhcnQiLCJjdXRPZmYiLCJ3cmFwcGluZyIsImZpbmRXcmFwcGluZyIsImtlZXBBdHRyaWJ1dGVzIiwiam9pblByZWRpY2F0ZSIsIkZ1bmN0aW9uIiwibWF0Y2hUeXBlIiwic3RyaW5nIiwiY2hlY2tNYXJrIiwidGhpc01hcmsiLCJmb3VuZE1hcmsiLCJuZWVkc1VwZGF0ZSIsInVwZGF0ZWRNYXJrIiwiY29tcG9uZW50IiwiY29udGVudERPTSIsImlnbm9yZU11dGF0aW9uIiwibXV0YXRpb24iLCJjaGFuZ2VkTm9kZXMiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiaXNDb250ZW50RWRpdGFibGUiLCJfTm9kZSIsImlzRHJhZ2dpbmciLCJzdG9wRXZlbnQiLCJvbkRyYWdTdGFydCIsIl9mIiwiX2ciLCJkcmFnSGFuZGxlIiwiZG9tQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFuZGxlQm94Iiwib2Zmc2V0WCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WSIsImNsb25lZE5vZGUiLCJjbG9uZU5vZGUiLCJyb3VuZCIsImJveFNpemluZyIsInBvaW50ZXJFdmVudHMiLCJkcmFnSW1hZ2VXcmFwcGVyIiwiZGF0YVRyYW5zZmVyIiwic2V0RHJhZ0ltYWdlIiwiaXNJbkVsZW1lbnQiLCJpc0RyYWdFdmVudCIsImlzRHJvcEV2ZW50IiwiaXNJbnB1dCIsInRhZ05hbWUiLCJpc0RyYWdnYWJsZSIsImlzU2VsZWN0YWJsZSIsImlzQ29weUV2ZW50IiwiaXNQYXN0ZUV2ZW50IiwiaXNDdXRFdmVudCIsImlzQ2xpY2tFdmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZERyYWdIYW5kbGUiLCJnZXRDb250ZW50IiwiY3VycmVudFN0ZXAiLCJkZWxldGVkIiwibWFwcGVkUG9zaXRpb24iLCJuZXdQb3NpdGlvbiIsImdldE1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxJQUFBLEVBQUFBLENB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S0FBQUEsZ0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEs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LGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUExTCxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBMkwsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUE1RSxnQkFBQSxFQUFBQSxD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QTtFQUM1QztFQUVBNUMsSUFBSWtXLFFBQUEsRUFBaUM7SUFDbkMsSUFBSXFtQixPQUFBLEdBQVU7SUFFZCxNQUFNQyxjQUFBLEdBQWlCLEtBQUtqK0IsV0FBQSxDQUFZOEQsS0FBQSxDQUFNdUIsS0FBQSxDQUFNLEtBQUswNEIsV0FBVyxFQUFFMXlCLE1BQUEsQ0FBTyxDQUFDNnlCLFdBQUEsRUFBYW42QixJQUFBLEtBQVM7TUFDbEcsTUFBTThzQixTQUFBLEdBQVk5c0IsSUFBQSxDQUFLbzZCLE1BQUEsQ0FBTyxFQUFFdE4sU0FBQSxDQUFVcU4sV0FBVztNQUVyRCxJQUFJck4sU0FBQSxDQUFVbU4sT0FBQSxFQUFTO1FBQ3JCQSxPQUFBLEdBQVU7TUFDWjtNQUVBLE9BQU9uTixTQUFBLENBQVUzb0IsR0FBQTtJQUNuQixHQUFHeVAsUUFBUTtJQUVYLE9BQU87TUFDTEEsUUFBQSxFQUFVc21CLGNBQUE7TUFDVkQ7SUFDRjtFQUNGO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==