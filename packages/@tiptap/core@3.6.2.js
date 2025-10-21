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

// .beyond/uimport/@tiptap/core.3.6.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2NvcmUuMy42LjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FZGl0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbnNpb25NYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jb21iaW5lVHJhbnNhY3Rpb25TdGVwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvY3JlYXRlTm9kZUZyb21Db250ZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZW5lcmF0ZUhUTUwudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEhUTUxGcm9tRnJhZ21lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYUJ5UmVzb2x2ZWRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZW5lcmF0ZUpTT04udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlVGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNOb2RlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc1RleHRTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3Jlc29sdmVGb2N1c1Bvc2l0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zZWxlY3Rpb25Ub0luc2VydGlvbkVuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL1Bhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvY2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jbGVhck5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY3JlYXRlUGFyYWdyYXBoTmVhci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2N1dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2RlbGV0ZVNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2V4aXRDb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZXh0ZW5kTWFya1JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvaW5zZXJ0Q29udGVudEF0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5JdGVtQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luSXRlbUZvcndhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luVGV4dGJsb2NrQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luVGV4dGJsb2NrRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9saWZ0RW1wdHlCbG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnRMaXN0SXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL25ld2xpbmVJbkNvZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RBbGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3ROb2RlQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3ROb2RlRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFBhcmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RUZXh0YmxvY2tFbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RUZXh0YmxvY2tTdGFydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXROb2RlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0VGV4dFNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NpbmtMaXN0SXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NwbGl0QmxvY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zcGxpdExpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3dyYXBJbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3dyYXBJbkxpc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2RlbGV0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZHJvcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZWRpdGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2ZvY3VzRXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9rZXltYXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL3Bhc3RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy90YWJpbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvd3JhcHBpbmdJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvY2FuSW5zZXJ0Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL05vZGVWaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVDaGFpbmFibGVTdGF0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0NvbW1hbmRNYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvRXZlbnRFbWl0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2VsZW1lbnRGcm9tU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVEb2N1bWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZGVmYXVsdEJsb2NrQXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRDaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZENoaWxkcmVuSW5SYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZFBhcmVudE5vZGVDbG9zZXN0VG9Qb3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRQYXJlbnROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRFeHRlbnNpb25GaWVsZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmxhdHRlbkV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNGdW5jdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jYWxsT3JSZXR1cm4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNFbXB0eU9iamVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvc3BsaXRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRBdHRyaWJ1dGVzRnJvbUV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWVyZ2VBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRSZW5kZXJlZEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZnJvbVN0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaW5qZWN0RXh0ZW5zaW9uQXR0cmlidXRlc1RvUGFyc2VSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2ZpbmREdXBsaWNhdGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zb3J0RXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcmVzb2x2ZUV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dEJldHdlZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHRTZXJpYWxpemVyc0Zyb21TY2hlbWEudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtUeXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRNYXJrQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0Tm9kZVR5cGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE5vZGVBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTY2hlbWFUeXBlTmFtZUJ5TmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0QXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9yZW1vdmVEdXBsaWNhdGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRDaGFuZ2VkUmFuZ2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXREZWJ1Z0pTT04udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNSZWdFeHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvb2JqZWN0SW5jbHVkZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtSYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya3NCZXR3ZWVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXROb2RlQXRQb3NpdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hVHlwZUJ5TmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U3BsaXR0ZWRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRUZXh0Q29udGVudEZyb21Ob2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNNYXJrQWN0aXZlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc05vZGVBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQWN0aXZlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0F0RW5kT2ZOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0F0U3RhcnRPZk5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzRXh0ZW5zaW9uUnVsZXNFbmFibGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0xpc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTm9kZUVtcHR5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21pbk1heC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcG9zVG9ET01SZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9yZXdyaXRlVW5rbm93bkNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNQbGFpbk9iamVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tZXJnZURlZXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbmRhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc051bWJlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2JsdXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jbGVhckNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jb21tYW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlQ3VycmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlUmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9lbnRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2ZpcnN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzQW5kcm9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc2lPUy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2ZvY3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZm9yRWFjaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2luc2VydENvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNNYWNPUy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2tleWJvYXJkU2hvcnRjdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZGVsZXRlUHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9yZXNldEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zY3JvbGxJbnRvVmlldy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldENvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRNYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0TWV0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3RvZ2dsZU1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlV3JhcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3VuZG9JbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91bnNldEFsbE1hcmtzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdW5zZXRNYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdXBkYXRlQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvY29tbWFuZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9Ob2RlUG9zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvc3R5bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvY3JlYXRlU3R5bGVUYWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL21hcmtJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL25vZGVJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL3RleHRibG9ja1R5cGVJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL3RleHRJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9qc3gtcnVudGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9lc2NhcGVGb3JSZWdFeC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1N0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL01hcmtWaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvbWFya1Bhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvbm9kZVBhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvdGV4dFBhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL1RyYWNrZXIudHMiXSwibmFtZXMiOlsiY29yZV8zXzZfMl9leHBvcnRzIiwiX19leHBvcnQiLCJDb21tYW5kTWFuYWdlciIsIkVkaXRvciIsIkV4dGVuc2lvbiIsIkZyYWdtZW50IiwiRnJhZ21lbnQ2IiwiSW5wdXRSdWxlIiwiTWFyayIsIk1hcmtWaWV3IiwiTm9kZSIsIk5vZGUzIiwiTm9kZVBvcyIsIk5vZGVWaWV3IiwiUGFzdGVSdWxlIiwiVHJhY2tlciIsImNhbGxPclJldHVybiIsImNhbkluc2VydE5vZGUiLCJjb21iaW5lVHJhbnNhY3Rpb25TdGVwcyIsImNyZWF0ZUNoYWluYWJsZVN0YXRlIiwiY3JlYXRlRG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaCIsImNyZWF0ZU5vZGVGcm9tQ29udGVudCIsImNyZWF0ZVN0eWxlVGFnIiwiZGVmYXVsdEJsb2NrQXQiLCJkZWxldGVQcm9wcyIsImVsZW1lbnRGcm9tU3RyaW5nIiwiZXNjYXBlRm9yUmVnRXgiLCJleHRlbnNpb25zIiwiZXh0ZW5zaW9uc19leHBvcnRzIiwiZmluZENoaWxkcmVuIiwiZmluZENoaWxkcmVuSW5SYW5nZSIsImZpbmREdXBsaWNhdGVzIiwiZmluZFBhcmVudE5vZGUiLCJmaW5kUGFyZW50Tm9kZUNsb3Nlc3RUb1BvcyIsImZsYXR0ZW5FeHRlbnNpb25zIiwiZnJvbVN0cmluZyIsImdlbmVyYXRlSFRNTCIsImdlbmVyYXRlSlNPTiIsImdlbmVyYXRlVGV4dCIsImdldEF0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGVzRnJvbUV4dGVuc2lvbnMiLCJnZXRDaGFuZ2VkUmFuZ2VzIiwiZ2V0RGVidWdKU09OIiwiZ2V0RXh0ZW5zaW9uRmllbGQiLCJnZXRIVE1MRnJvbUZyYWdtZW50IiwiZ2V0TWFya0F0dHJpYnV0ZXMiLCJnZXRNYXJrUmFuZ2UiLCJnZXRNYXJrVHlwZSIsImdldE1hcmtzQmV0d2VlbiIsImdldE5vZGVBdFBvc2l0aW9uIiwiZ2V0Tm9kZUF0dHJpYnV0ZXMiLCJnZXROb2RlVHlwZSIsImdldFJlbmRlcmVkQXR0cmlidXRlcyIsImdldFNjaGVtYSIsImdldFNjaGVtYUJ5UmVzb2x2ZWRFeHRlbnNpb25zIiwiZ2V0U2NoZW1hVHlwZUJ5TmFtZSIsImdldFNjaGVtYVR5cGVOYW1lQnlOYW1lIiwiZ2V0U3BsaXR0ZWRBdHRyaWJ1dGVzIiwiZ2V0VGV4dCIsImdldFRleHRCZXR3ZWVuIiwiZ2V0VGV4dENvbnRlbnRGcm9tTm9kZXMiLCJnZXRUZXh0U2VyaWFsaXplcnNGcm9tU2NoZW1hIiwiaW5qZWN0RXh0ZW5zaW9uQXR0cmlidXRlc1RvUGFyc2VSdWxlIiwiaW5wdXRSdWxlc1BsdWdpbiIsImlzQWN0aXZlIiwiaXNBbmRyb2lkIiwiaXNBdEVuZE9mTm9kZSIsImlzQXRTdGFydE9mTm9kZSIsImlzRW1wdHlPYmplY3QiLCJpc0V4dGVuc2lvblJ1bGVzRW5hYmxlZCIsImlzRnVuY3Rpb24iLCJpc0xpc3QiLCJpc01hY09TIiwiaXNNYXJrQWN0aXZlIiwiaXNOb2RlQWN0aXZlIiwiaXNOb2RlRW1wdHkiLCJpc05vZGVTZWxlY3Rpb24iLCJpc051bWJlciIsImlzUGxhaW5PYmplY3QiLCJpc1JlZ0V4cCIsImlzU3RyaW5nIiwiaXNUZXh0U2VsZWN0aW9uIiwiaXNpT1MiLCJtYXJrSW5wdXRSdWxlIiwibWFya1Bhc3RlUnVsZSIsIm1lcmdlQXR0cmlidXRlcyIsIm1lcmdlRGVlcCIsIm1pbk1heCIsIm5vZGVJbnB1dFJ1bGUiLCJub2RlUGFzdGVSdWxlIiwib2JqZWN0SW5jbHVkZXMiLCJwYXN0ZVJ1bGVzUGx1Z2luIiwicG9zVG9ET01SZWN0IiwicmVtb3ZlRHVwbGljYXRlcyIsInJlc29sdmVFeHRlbnNpb25zIiwicmVzb2x2ZUZvY3VzUG9zaXRpb24iLCJyZXdyaXRlVW5rbm93bkNvbnRlbnQiLCJzZWxlY3Rpb25Ub0luc2VydGlvbkVuZCIsInNvcnRFeHRlbnNpb25zIiwic3BsaXRFeHRlbnNpb25zIiwidGV4dElucHV0UnVsZSIsInRleHRQYXN0ZVJ1bGUiLCJ0ZXh0YmxvY2tUeXBlSW5wdXRSdWxlIiwidXBkYXRlTWFya1ZpZXdBdHRyaWJ1dGVzIiwid3JhcHBpbmdJbnB1dFJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3N0YXRlIiwicmVxdWlyZSIsImltcG9ydF92aWV3IiwiaW1wb3J0X2tleW1hcCIsImltcG9ydF90cmFuc2Zvcm0iLCJpbXBvcnRfbW9kZWwiLCJpbXBvcnRfbW9kZWwyIiwiaW1wb3J0X21vZGVsMyIsImltcG9ydF9tb2RlbDQiLCJpbXBvcnRfbW9kZWw1IiwiaW1wb3J0X21vZGVsNiIsImltcG9ydF9zdGF0ZTIiLCJpbXBvcnRfc3RhdGUzIiwiaW1wb3J0X3N0YXRlNCIsImltcG9ydF9zdGF0ZTUiLCJpbXBvcnRfdHJhbnNmb3JtMiIsImltcG9ydF9tb2RlbDciLCJpbXBvcnRfc3RhdGU2IiwiaW1wb3J0X21vZGVsOCIsImltcG9ydF9zdGF0ZTciLCJpbXBvcnRfc3RhdGU4IiwiaW1wb3J0X3RyYW5zZm9ybTMiLCJpbXBvcnRfY29tbWFuZHMiLCJpbXBvcnRfc3RhdGU5IiwiaW1wb3J0X2NvbW1hbmRzMiIsImltcG9ydF9jb21tYW5kczMiLCJpbXBvcnRfc3RhdGUxMCIsImltcG9ydF9tb2RlbDkiLCJpbXBvcnRfY29tbWFuZHM0IiwiaW1wb3J0X3RyYW5zZm9ybTQiLCJpbXBvcnRfdHJhbnNmb3JtNSIsImltcG9ydF9jb21tYW5kczUiLCJpbXBvcnRfY29tbWFuZHM2IiwiaW1wb3J0X2NvbW1hbmRzNyIsImltcG9ydF9jb21tYW5kczgiLCJpbXBvcnRfc2NoZW1hX2xpc3QiLCJpbXBvcnRfY29tbWFuZHM5IiwiaW1wb3J0X3N0YXRlMTEiLCJpbXBvcnRfY29tbWFuZHMxMCIsImltcG9ydF9jb21tYW5kczExIiwiaW1wb3J0X2NvbW1hbmRzMTIiLCJpbXBvcnRfY29tbWFuZHMxMyIsImltcG9ydF9jb21tYW5kczE0IiwiaW1wb3J0X2NvbW1hbmRzMTUiLCJpbXBvcnRfc3RhdGUxMiIsImltcG9ydF9zdGF0ZTEzIiwiaW1wb3J0X3NjaGVtYV9saXN0MiIsImltcG9ydF9zdGF0ZTE0IiwiaW1wb3J0X3RyYW5zZm9ybTYiLCJpbXBvcnRfbW9kZWwxMCIsImltcG9ydF9zdGF0ZTE1IiwiaW1wb3J0X3RyYW5zZm9ybTciLCJpbXBvcnRfdHJhbnNmb3JtOCIsImltcG9ydF9jb21tYW5kczE2IiwiaW1wb3J0X3NjaGVtYV9saXN0MyIsImltcG9ydF90cmFuc2Zvcm05IiwiaW1wb3J0X3N0YXRlMTYiLCJpbXBvcnRfc3RhdGUxNyIsImltcG9ydF9zdGF0ZTE4IiwiaW1wb3J0X3N0YXRlMTkiLCJpbXBvcnRfc3RhdGUyMCIsImltcG9ydF9zdGF0ZTIxIiwiaW1wb3J0X3RyYW5zZm9ybTEwIiwiaW1wb3J0X3N0YXRlMjIiLCJpbXBvcnRfc3RhdGUyMyIsImNvbmZpZyIsInN0YXRlIiwidHJhbnNhY3Rpb24iLCJzZWxlY3Rpb24iLCJkb2MiLCJzdG9yZWRNYXJrcyIsImFwcGx5IiwiYmluZCIsImFwcGx5VHJhbnNhY3Rpb24iLCJwbHVnaW5zIiwic2NoZW1hIiwicmVjb25maWd1cmUiLCJ0b0pTT04iLCJ0ciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlZGl0b3IiLCJyYXdDb21tYW5kcyIsImV4dGVuc2lvbk1hbmFnZXIiLCJjb21tYW5kcyIsImN1c3RvbVN0YXRlIiwiaGFzQ3VzdG9tU3RhdGUiLCJ2aWV3IiwiYnVpbGRQcm9wcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsIm5hbWUiLCJjb21tYW5kMiIsIm1ldGhvZCIsImFyZ3MiLCJjYWxsYmFjayIsImdldE1ldGEiLCJkaXNwYXRjaCIsImNoYWluIiwiY3JlYXRlQ2hhaW4iLCJjYW4iLCJjcmVhdGVDYW4iLCJzdGFydFRyIiwic2hvdWxkRGlzcGF0Y2giLCJjYWxsYmFja3MiLCJoYXNTdGFydFRyYW5zYWN0aW9uIiwicnVuMyIsInJ1biIsImV2ZXJ5IiwiY2hhaW5lZENvbW1hbmQiLCJwdXNoIiwiZm9ybWF0dGVkQ29tbWFuZHMiLCJFdmVudEVtaXR0ZXIiLCJvbiIsImV2ZW50IiwiZm4iLCJlbWl0IiwiZm9yRWFjaCIsIm9mZiIsImZpbHRlciIsIm9uY2UiLCJvbmNlRm4iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvbGREb2MiLCJ0cmFuc2FjdGlvbnMiLCJ0cmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJzdGVwcyIsInN0ZXAiLCJyZW1vdmVXaGl0ZXNwYWNlcyIsIm5vZGUiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJpIiwibGVuZ3RoIiwiY2hpbGQiLCJub2RlVHlwZSIsIm5vZGVWYWx1ZSIsInRlc3QiLCJyZW1vdmVDaGlsZCIsInZhbHVlIiwid2luZG93IiwiRXJyb3IiLCJ3cmFwcGVkVmFsdWUiLCJodG1sIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImNvbnRlbnQiLCJvcHRpb25zIiwic2xpY2UiLCJwYXJzZU9wdGlvbnMiLCJpc0pTT05Db250ZW50IiwiaXNUZXh0Q29udGVudCIsImlzQXJyYXlDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbUFycmF5IiwiaXRlbSIsIm5vZGVGcm9tSlNPTiIsImVycm9yT25JbnZhbGlkQ29udGVudCIsImNoZWNrIiwiZXJyb3IiLCJjYXVzZSIsImNvbnNvbGUiLCJ3YXJuIiwiaGFzSW52YWxpZENvbnRlbnQiLCJpbnZhbGlkQ29udGVudCIsImNvbnRlbnRDaGVja1NjaGVtYSIsIlNjaGVtYSIsInRvcE5vZGUiLCJzcGVjIiwibWFya3MiLCJub2RlcyIsImFwcGVuZCIsIl9fdGlwdGFwX19wcml2YXRlX191bmtub3duX19jYXRjaF9fYWxsX19ub2RlIiwiZ3JvdXAiLCJwYXJzZURPTSIsInRhZyIsImdldEF0dHJzIiwiZSIsIm91dGVySFRNTCIsImZyb21TY2hlbWEiLCJwYXJzZVNsaWNlIiwicGFyc2UiLCJwYXJzZXIiLCJtYXRjaCIsImVkZ2VDb3VudCIsInR5cGUiLCJlZGdlIiwiaXNUZXh0YmxvY2siLCJoYXNSZXF1aXJlZEF0dHJzIiwicHJlZGljYXRlIiwibm9kZXNXaXRoUG9zIiwiZGVzY2VuZGFudHMiLCJwb3MiLCJyYW5nZSIsIm5vZGVzQmV0d2VlbiIsImZyb20iLCJ0byIsIiRwb3MiLCJkZXB0aCIsImJlZm9yZSIsInN0YXJ0IiwiJGZyb20iLCJleHRlbnNpb24iLCJmaWVsZCIsImNvbnRleHQiLCJwYXJlbnQiLCJzdG9yYWdlIiwiYWRkRXh0ZW5zaW9ucyIsImZsYXQiLCJmcmFnbWVudCIsImRvY3VtZW50RnJhZ21lbnQiLCJET01TZXJpYWxpemVyIiwic2VyaWFsaXplRnJhZ21lbnQiLCJ0ZW1wb3JhcnlEb2N1bWVudCIsImRvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsImtleXMiLCJiYXNlRXh0ZW5zaW9ucyIsIm5vZGVFeHRlbnNpb25zIiwibWFya0V4dGVuc2lvbnMiLCJleHRlbnNpb25BdHRyaWJ1dGVzIiwibm9kZUFuZE1hcmtFeHRlbnNpb25zIiwiZGVmYXVsdEF0dHJpYnV0ZSIsImRlZmF1bHQiLCJ2YWxpZGF0ZSIsInJlbmRlcmVkIiwicmVuZGVySFRNTCIsInBhcnNlSFRNTCIsImtlZXBPblNwbGl0IiwiaXNSZXF1aXJlZCIsImFkZEdsb2JhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlIiwidHlwZXMiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlIiwiYWRkQXR0cmlidXRlcyIsIm1lcmdlZEF0dHIiLCJvYmplY3RzIiwicmVkdWNlIiwiaXRlbXMiLCJtZXJnZWRBdHRyaWJ1dGVzIiwia2V5IiwiZXhpc3RzIiwidmFsdWVDbGFzc2VzIiwiU3RyaW5nIiwic3BsaXQiLCJleGlzdGluZ0NsYXNzZXMiLCJpbnNlcnRDbGFzc2VzIiwidmFsdWVDbGFzcyIsImluY2x1ZGVzIiwiam9pbiIsIm5ld1N0eWxlcyIsInN0eWxlMiIsInRyaW0iLCJCb29sZWFuIiwiZXhpc3RpbmdTdHlsZXMiLCJzdHlsZU1hcCIsIk1hcCIsInByb3BlcnR5IiwidmFsIiwicGFydCIsInNldCIsIm5vZGVPck1hcmsiLCJhdHRycyIsIk51bWJlciIsInBhcnNlUnVsZSIsIm9sZEF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiZ2V0QXR0cmlidXRlIiwiY2xlYW5VcFNjaGVtYUl0ZW0iLCJkYXRhIiwiX2EiLCJhbGxBdHRyaWJ1dGVzIiwiZmluZCIsImV4dHJhTm9kZUZpZWxkcyIsImZpZWxkcyIsImV4dGVuZE5vZGVTY2hlbWEiLCJpbmxpbmUiLCJhdG9tIiwic2VsZWN0YWJsZSIsImRyYWdnYWJsZSIsImNvZGUiLCJ3aGl0ZXNwYWNlIiwibGluZWJyZWFrUmVwbGFjZW1lbnQiLCJkZWZpbmluZyIsImlzb2xhdGluZyIsImV4dGVuc2lvbkF0dHJpYnV0ZSIsIl9hMiIsIl9iIiwidG9ET00iLCJIVE1MQXR0cmlidXRlcyIsInJlbmRlclRleHQiLCJ0b1RleHQiLCJleHRyYU1hcmtGaWVsZHMiLCJleHRlbmRNYXJrU2NoZW1hIiwiaW5jbHVzaXZlIiwiZXhjbHVkZXMiLCJzcGFubmluZyIsIm1hcmsiLCJmaWx0ZXJlZCIsImVsIiwiaW5kZXgiLCJpbmRleE9mIiwiU2V0IiwiZGVmYXVsdFByaW9yaXR5Iiwic29ydCIsImEiLCJiIiwicHJpb3JpdHlBIiwicHJpb3JpdHlCIiwicmVzb2x2ZWRFeHRlbnNpb25zIiwiZHVwbGljYXRlZE5hbWVzIiwiY29udGVudE5vZGUiLCJmcm9tSlNPTiIsImRvbSIsInN0YXJ0Tm9kZSIsImJsb2NrU2VwYXJhdG9yIiwidGV4dFNlcmlhbGl6ZXJzIiwidGV4dCIsImlzQmxvY2siLCJ0ZXh0U2VyaWFsaXplciIsImlzVGV4dCIsIk1hdGgiLCJtYXgiLCJzaXplIiwibmFtZU9yVHlwZSIsInR5cGVPck5hbWUiLCJlbXB0eSIsIiRoZWFkIiwibWFya0l0ZW0iLCJub2RlMiIsInJldmVyc2UiLCJub2RlSXRlbSIsInNjaGVtYVR5cGUiLCJhcnJheSIsImJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlZW4iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzaW1wbGlmeUNoYW5nZWRSYW5nZXMiLCJjaGFuZ2VzIiwidW5pcXVlQ2hhbmdlcyIsImNoYW5nZSIsInJlc3QiLCJfIiwic29tZSIsIm90aGVyQ2hhbmdlIiwib2xkUmFuZ2UiLCJuZXdSYW5nZSIsIm1hcHBpbmciLCJtYXBzIiwic3RlcE1hcCIsInJhbmdlcyIsIm5ld1N0YXJ0IiwibmV3RW5kIiwib2xkU3RhcnQiLCJpbnZlcnQiLCJvbGRFbmQiLCJzdGFydE9mZnNldCIsImlzVG9wTm9kZSIsInRvcE5vZGVUeXBlIiwiaW5jcmVtZW50Iiwibm9kZVNpemUiLCJvdXRwdXQyIiwib3V0cHV0IiwiY2hpbGRDb3VudCIsIm9mZnNldCIsInRvU3RyaW5nIiwib2JqZWN0MSIsIm9iamVjdDIiLCJzdHJpY3QiLCJmaW5kTWFya0luU2V0IiwiayIsImlzTWFya0luU2V0IiwiY2hpbGRBZnRlciIsInBhcmVudE9mZnNldCIsIm1hcmsyIiwiY2hpbGRCZWZvcmUiLCJzdGFydEluZGV4Iiwic3RhcnRQb3MiLCJlbmRJbmRleCIsImVuZFBvcyIsInJlc29sdmUiLCJtYXhEZXB0aCIsImN1cnJlbnREZXB0aCIsImN1cnJlbnROb2RlIiwidHlwZU5hbWUiLCJtYXhNYXRjaCIsInRleHRCZWZvcmUiLCJzbGljZUVuZFBvcyIsImNodW5rIiwidGV4dENvbnRlbnQiLCJpc0F0b20iLCJzZWxlY3Rpb25SYW5nZSIsIm1hcmtSYW5nZXMiLCIkdG8iLCJyZWxhdGl2ZUZyb20iLCJyZWxhdGl2ZVRvIiwibWluIiwicmFuZ2UyIiwibWF0Y2hlZFJhbmdlIiwibWFya1JhbmdlIiwic3VtIiwiZXhjbHVkZWRSYW5nZSIsIm5vZGVSYW5nZXMiLCJtYXRjaGVkTm9kZVJhbmdlcyIsIm5vZGVSYW5nZSIsIiRhbmNob3IiLCJwYXJlbnROb2RlIiwiJHBhcmVudFBvcyIsImVuZCIsImVuYWJsZWQiLCJlbmFibGVkRXh0ZW5zaW9uIiwiY2hlY2tDaGlsZHJlbiIsImlnbm9yZVdoaXRlc3BhY2UiLCJpc0xlYWYiLCJpc0NvbnRlbnRFbXB0eSIsImNoaWxkTm9kZSIsIk5vZGVTZWxlY3Rpb24iLCJUZXh0U2VsZWN0aW9uIiwibWluUG9zIiwibWF4UG9zIiwicmVzb2x2ZWRGcm9tIiwicmVzb2x2ZWRFbmQiLCJjb29yZHNBdFBvcyIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwb3NpdGlvbiIsInNlbGVjdGlvbkF0U3RhcnQiLCJTZWxlY3Rpb24iLCJhdFN0YXJ0Iiwic2VsZWN0aW9uQXRFbmQiLCJhdEVuZCIsImNyZWF0ZSIsInJld3JpdGVVbmtub3duQ29udGVudElubmVyIiwianNvbiIsInZhbGlkTWFya3MiLCJ2YWxpZE5vZGVzIiwicmV3cml0dGVuQ29udGVudCIsImhhcyIsIm9yaWdpbmFsIiwidW5zdXBwb3J0ZWQiLCJmYWxsYmFja1RvUGFyYWdyYXBoIiwic3RhcnRMZW4iLCJiaWFzIiwibGFzdCIsIlJlcGxhY2VTdGVwIiwiUmVwbGFjZUFyb3VuZFN0ZXAiLCJfZnJvbSIsIl90byIsIl9uZXdGcm9tIiwibmV3VG8iLCJzZXRTZWxlY3Rpb24iLCJuZWFyIiwiaGFuZGxlciIsInVuZG9hYmxlIiwiaW5wdXRSdWxlTWF0Y2hlckhhbmRsZXIiLCJleGVjIiwiaW5wdXRSdWxlTWF0Y2giLCJyZXN1bHQiLCJpbnB1dCIsInJlcGxhY2VXaXRoIiwicnVsZXMiLCJwbHVnaW4iLCJjb21wb3NpbmciLCJub2RlQmVmb3JlIiwibm9kZUFmdGVyIiwibWF0Y2hlZCIsInJ1bGUiLCJzZXRNZXRhIiwiUGx1Z2luIiwiaW5pdCIsInByZXYiLCJzdG9yZWQiLCJzaW11bGF0ZWRJbnB1dE1ldGEiLCJpc1NpbXVsYXRlZElucHV0Iiwic2V0VGltZW91dCIsInNlbGVjdGlvblNldCIsImRvY0NoYW5nZWQiLCJoYW5kbGVUZXh0SW5wdXQiLCJoYW5kbGVET01FdmVudHMiLCJjb21wb3NpdGlvbmVuZCIsIiRjdXJzb3IiLCJoYW5kbGVLZXlEb3duIiwiaXNJbnB1dFJ1bGVzIiwiZ2V0VHlwZSIsImdldFByb3RvdHlwZU9mIiwidGFyZ2V0Iiwic291cmNlIiwiRXh0ZW5kYWJsZSIsImNvbmZpZ3VyZSIsImV4dGVuZCIsImFkZE9wdGlvbnMiLCJleHRlbmRlZENvbmZpZyIsIl9NYXJrIiwiYXJndW1lbnRzIiwicmVzb2x2ZWRDb25maWciLCJoYW5kbGVFeGl0IiwiY3VycmVudFBvcyIsImlzQXRFbmQiLCJjdXJyZW50TWFya3MiLCJpc0luTWFyayIsIm0iLCJyZW1vdmVNYXJrIiwicmVtb3ZlU3RvcmVkTWFyayIsImluc2VydFRleHQiLCJwYXN0ZVJ1bGVNYXRjaGVySGFuZGxlciIsIm1hdGNoQWxsIiwibWF0Y2hlcyIsInBhc3RlUnVsZU1hdGNoIiwicnVuMiIsInBhc3RlRXZlbnQiLCJkcm9wRXZlbnQiLCJoYW5kbGVycyIsIl9jIiwiX2QiLCJfZSIsImlzSW5saW5lIiwiY29udGVudFNpemUiLCJyZXNvbHZlZFRvIiwidGV4dFRvTWF0Y2giLCJ0ZXh0QmV0d2VlbiIsInN1Y2Nlc3MiLCJ0aXB0YXBEcmFnRnJvbU90aGVyRWRpdG9yIiwiY3JlYXRlQ2xpcGJvYXJkUGFzdGVFdmVudCIsIkNsaXBib2FyZEV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsIkRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJkcmFnU291cmNlRWxlbWVudCIsImlzUGFzdGVkRnJvbVByb3NlTWlycm9yIiwiaXNEcm9wcGVkRnJvbVByb3NlTWlycm9yIiwiRHJhZ0V2ZW50IiwicHJvY2Vzc0V2ZW50IiwicGFzdGVFdnQiLCJjaGFpbmFibGVTdGF0ZSIsImhhbmRsZURyYWdzdGFydCIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsImhhbmRsZURyYWdlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkcm9wIiwiZHJhZ0Zyb21PdGhlckVkaXRvciIsImlzRWRpdGFibGUiLCJkZWxldGVSYW5nZSIsInBhc3RlIiwiX3ZpZXciLCJnZXREYXRhIiwiYXBwZW5kVHJhbnNhY3Rpb24iLCJvbGRTdGF0ZSIsImlzUGFzdGUiLCJpc0Ryb3AiLCJzaW11bGF0ZWRQYXN0ZU1ldGEiLCJpc1NpbXVsYXRlZFBhc3RlIiwiZnJvbTIiLCJ0bzIiLCJmaW5kRGlmZlN0YXJ0IiwiZmluZERpZmZFbmQiLCJFeHRlbnNpb25NYW5hZ2VyIiwic3BsaXR0YWJsZU1hcmtzIiwic2V0dXBFeHRlbnNpb25zIiwiZXh0ZW5zaW9uU3RvcmFnZSIsImFkZENvbW1hbmRzIiwiYWxsUGx1Z2lucyIsImZsYXRNYXAiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsImRlZmF1bHRCaW5kaW5ncyIsIkFycm93UmlnaHQiLCJiaW5kaW5ncyIsInNob3J0Y3V0Iiwia2V5TWFwUGx1Z2luIiwia2V5bWFwIiwiYWRkSW5wdXRSdWxlcyIsImVuYWJsZUlucHV0UnVsZXMiLCJpbnB1dFJlc3VsdCIsImlucHV0UGx1Z2lucyIsImFkZFBhc3RlUnVsZXMiLCJlbmFibGVQYXN0ZVJ1bGVzIiwicGFzdGVSdWxlcyIsImFkZFByb3NlTWlycm9yUGx1Z2lucyIsInByb3NlTWlycm9yUGx1Z2lucyIsIm5vZGVWaWV3cyIsImFkZE5vZGVWaWV3Iiwibm9kZXZpZXciLCJnZXRQb3MiLCJkZWNvcmF0aW9ucyIsImlubmVyRGVjb3JhdGlvbnMiLCJtYXJrVmlld3MiLCJhZGRNYXJrVmlldyIsIm1hcmtWaWV3IiwidXBkYXRlQXR0cmlidXRlcyIsIm9uQmVmb3JlQ3JlYXRlIiwib25DcmVhdGUiLCJvblVwZGF0ZSIsIm9uU2VsZWN0aW9uVXBkYXRlIiwib25UcmFuc2FjdGlvbiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkRlc3Ryb3kiLCJmbGF0dGVuIiwiX19leHBvcnQyIiwiQ2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIiLCJDb21tYW5kcyIsIkRlbGV0ZSIsIkRyb3AiLCJFZGl0YWJsZSIsIkZvY3VzRXZlbnRzIiwiS2V5bWFwIiwiUGFzdGUiLCJUYWJpbmRleCIsImZvY3VzRXZlbnRzUGx1Z2luS2V5IiwiX0V4dGVuc2lvbiIsIlBsdWdpbktleSIsImNsaXBib2FyZFRleHRTZXJpYWxpemVyIiwiY29tbWFuZHNfZXhwb3J0cyIsImJsdXIiLCJjbGVhckNvbnRlbnQiLCJjbGVhck5vZGVzIiwiY29tbWFuZCIsImNyZWF0ZVBhcmFncmFwaE5lYXIiLCJjdXQiLCJkZWxldGVDdXJyZW50Tm9kZSIsImRlbGV0ZU5vZGUiLCJkZWxldGVTZWxlY3Rpb24iLCJlbnRlciIsImV4aXRDb2RlIiwiZXh0ZW5kTWFya1JhbmdlIiwiZmlyc3QiLCJmb2N1cyIsImluc2VydENvbnRlbnQiLCJpbnNlcnRDb250ZW50QXQiLCJqb2luQmFja3dhcmQiLCJqb2luRG93biIsImpvaW5Gb3J3YXJkIiwiam9pbkl0ZW1CYWNrd2FyZCIsImpvaW5JdGVtRm9yd2FyZCIsImpvaW5UZXh0YmxvY2tCYWNrd2FyZCIsImpvaW5UZXh0YmxvY2tGb3J3YXJkIiwiam9pblVwIiwia2V5Ym9hcmRTaG9ydGN1dCIsImxpZnQiLCJsaWZ0RW1wdHlCbG9jayIsImxpZnRMaXN0SXRlbSIsIm5ld2xpbmVJbkNvZGUiLCJyZXNldEF0dHJpYnV0ZXMiLCJzY3JvbGxJbnRvVmlldyIsInNlbGVjdEFsbCIsInNlbGVjdE5vZGVCYWNrd2FyZCIsInNlbGVjdE5vZGVGb3J3YXJkIiwic2VsZWN0UGFyZW50Tm9kZSIsInNlbGVjdFRleHRibG9ja0VuZCIsInNlbGVjdFRleHRibG9ja1N0YXJ0Iiwic2V0Q29udGVudCIsInNldE1hcmsiLCJzZXROb2RlIiwic2V0Tm9kZVNlbGVjdGlvbiIsInNldFRleHRTZWxlY3Rpb24iLCJzaW5rTGlzdEl0ZW0iLCJzcGxpdEJsb2NrIiwic3BsaXRMaXN0SXRlbSIsInRvZ2dsZUxpc3QiLCJ0b2dnbGVNYXJrIiwidG9nZ2xlTm9kZSIsInRvZ2dsZVdyYXAiLCJ1bmRvSW5wdXRSdWxlIiwidW5zZXRBbGxNYXJrcyIsInVuc2V0TWFyayIsIndyYXBJbiIsIndyYXBJbkxpc3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc0Rlc3Ryb3llZCIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImVtaXRVcGRhdGUiLCIkbWFwcGVkRnJvbSIsIiRtYXBwZWRUbyIsImJsb2NrUmFuZ2UiLCJ0YXJnZXRMaWZ0RGVwdGgiLCJsaWZ0VGFyZ2V0IiwiZGVmYXVsdFR5cGUiLCJjb250ZW50TWF0Y2hBdCIsInNldE5vZGVNYXJrdXAiLCJvcmlnaW5SYW5nZSIsInRhcmdldFBvcyIsImNvbnRlbnRTbGljZSIsIm5ld1BvcyIsImluc2VydCIsImFmdGVyIiwiZGVsZXRlIiwibmV3U2VsZWN0aW9uIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ1c2VyQWdlbnQiLCJkZWxheWVkRm9jdXMiLCJoYXNGb2N1cyIsImlzU2FtZVNlbGVjdGlvbiIsImVxIiwic2V0U3RvcmVkTWFya3MiLCJpc0ZyYWdtZW50Iiwibm9kZU9yRnJhZ21lbnQiLCJ1cGRhdGVTZWxlY3Rpb24iLCJhcHBseUlucHV0UnVsZXMiLCJhcHBseVBhc3RlUnVsZXMiLCJlbWl0Q29udGVudEVycm9yIiwiZGlzYWJsZUNvbGxhYm9yYXRpb24iLCJjb2xsYWJvcmF0aW9uIiwiaXNEaXNhYmxlZCIsInByZXNlcnZlV2hpdGVzcGFjZSIsImVuYWJsZUNvbnRlbnRDaGVjayIsImlzT25seVRleHRDb250ZW50IiwiaXNPbmx5QmxvY2tDb250ZW50IiwiaXNFbXB0eVRleHRCbG9jayIsIm5ld0NvbnRlbnQiLCJ2IiwiJGZyb21Ob2RlIiwiZnJvbVNlbGVjdGlvbkF0U3RhcnQiLCJpc1RleHRTZWxlY3Rpb24yIiwiaGFzQ29udGVudCIsInBvaW50Iiwiam9pblBvaW50Iiwibm9ybWFsaXplS2V5TmFtZSIsInBhcnRzIiwiYWx0IiwiY3RybCIsInNoaWZ0IiwibWV0YSIsIm1vZCIsIktleWJvYXJkRXZlbnQiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjYXB0dXJlZFRyYW5zYWN0aW9uIiwiY2FwdHVyZVRyYW5zYWN0aW9uIiwic29tZVByb3AiLCJmIiwibmV3U3RlcCIsIm1heWJlU3RlcCIsImlzQWN0aXZlMiIsIm9iaiIsInByb3BPclByb3BzIiwibmV3T2JqIiwicHJvcCIsIm1hcmtUeXBlIiwiYWRkTWFyayIsIkFsbFNlbGVjdGlvbiIsImRvY3VtZW50MiIsImNhblNldE1hcmsiLCJuZXdNYXJrVHlwZSIsImN1cnNvciIsInBhcmVudEFsbG93c01hcmtUeXBlIiwiYWxsb3dzTWFya1R5cGUiLCJpc0luU2V0Iiwic29tZU5vZGVTdXBwb3J0c01hcmsiLCJpbmxpbmVDb250ZW50IiwiX3BvcyIsImN1cnJlbnRNYXJrc0FsbG93TWFya1R5cGUiLCJvdGhlck1hcmsiLCJhZGRTdG9yZWRNYXJrIiwidHJpbW1lZEZyb20iLCJ0cmltbWVkVG8iLCJzb21lSGFzTWFyayIsImF0dHJpYnV0ZXNUb0NvcHkiLCJzYW1lUGFyZW50IiwiY2FuU2V0QmxvY2siLCJzZXRCbG9ja1R5cGUiLCJ1cGRhdGVkU3RhdGUiLCJlbnN1cmVNYXJrcyIsImZpbHRlcmVkTWFya3MiLCJrZWVwTWFya3MiLCJjYW5TcGxpdCIsImRlZmx0IiwiaW5kZXhBZnRlciIsImZpcnN0MiIsIiRmaXJzdCIsImNhblJlcGxhY2VXaXRoIiwib3ZlcnJpZGVBdHRycyIsImdyYW5kUGFyZW50Iiwid3JhcCIsImRlcHRoQmVmb3JlIiwiZCIsImNvcHkiLCJkZXB0aEFmdGVyIiwibmV3TmV4dFR5cGVBdHRyaWJ1dGVzMiIsIm5leHRUeXBlMiIsImNvbnRlbnRNYXRjaCIsImNyZWF0ZUFuZEZpbGwiLCJyZXBsYWNlIiwiU2xpY2UiLCJzZWwiLCJuIiwibmV4dFR5cGUiLCJuZXdUeXBlQXR0cmlidXRlcyIsIm5ld05leHRUeXBlQXR0cmlidXRlcyIsImpvaW5MaXN0QmFja3dhcmRzIiwibGlzdFR5cGUiLCJsaXN0Iiwibm9kZUF0IiwiY2FuSm9pbkJhY2t3YXJkcyIsImNhbkpvaW4iLCJqb2luTGlzdEZvcndhcmRzIiwiY2FuSm9pbkZvcndhcmRzIiwibGlzdFR5cGVPck5hbWUiLCJpdGVtVHlwZU9yTmFtZSIsIml0ZW1UeXBlIiwicGFyZW50TGlzdCIsInZhbGlkQ29udGVudCIsImNhbldyYXBJbkxpc3QiLCJleHRlbmRFbXB0eU1hcmtSYW5nZSIsInRvZ2dsZVR5cGVPck5hbWUiLCJ0b2dnbGVUeXBlIiwiZ2V0U3RhdGUiLCJ0b1VuZG8iLCJqIiwiZG9jcyIsImxhc3RQb3MiLCJsYXN0Tm9kZSIsInRyaW1tZWRGcm9tMiIsInRyaW1tZWRUbzIiLCJhcHBlbmRlZFRyYW5zYWN0aW9ucyIsIl9iMiIsIl9jMiIsImNvcmVFeHRlbnNpb25PcHRpb25zIiwiZmlsdGVyVHJhbnNhY3Rpb24iLCJuZXh0VHJhbnNhY3Rpb24iLCJtYXBSZXN1bHQiLCJkZWxldGVkQWZ0ZXIiLCJkZWxldGVkQmVmb3JlIiwiaXNGdWxseVdpdGhpblJhbmdlIiwibmV3RnJvbSIsImRlbGV0ZWRSYW5nZSIsInBhcnRpYWwiLCJjb21iaW5lZFRyYW5zZm9ybSIsIl9hMyIsIl9iMyIsIlJlbW92ZU1hcmtTdGVwIiwiZm91bmRCZWZvcmVNYXJrIiwiZm91bmRBZnRlck1hcmsiLCJhc3luYyIsImhhbmRsZURyb3AiLCJtb3ZlZCIsImVkaXRhYmxlIiwiaXNGb2N1c2VkIiwiaGFuZGxlQmFja3NwYWNlIiwicGFyZW50SXNJc29sYXRpbmciLCJwYXJlbnRQb3MiLCJpc0F0U3RhcnQiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVFbnRlciIsImJhc2VLZXltYXAiLCJFbnRlciIsIk1vZC1FbnRlciIsIkJhY2tzcGFjZSIsIk1vZC1hIiwicGNLZXltYXAiLCJtYWNLZXltYXAiLCJDdHJsLWEiLCJDdHJsLWUiLCJuZXdTdGF0ZSIsInRyMiIsImRvY0NoYW5nZXMiLCJpZ25vcmVUciIsImFsbEZyb20iLCJhbGxFbmQiLCJhbGxXYXNTZWxlY3RlZCIsImlzRW1wdHkiLCJoYW5kbGVQYXN0ZSIsInRhYmluZGV4IiwiX05vZGVQb3MiLCJhY3R1YWxEZXB0aCIsInJlc29sdmVkUG9zIiwiZWxlbWVudCIsImRvbUF0UG9zIiwiaXNOb25UZXh0QXRvbSIsImNoaWxkTm9kZVBvcyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJub2RlQXR0cmlidXRlcyIsImF0dHJLZXlzIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEl0ZW1Pbmx5IiwiY2hpbGRQb3MiLCJkb2VzQWxsQXR0cmlidXRlc01hdGNoIiwiY29uY2F0Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJub25jZSIsInN1ZmZpeCIsInRpcHRhcFN0eWxlVGFnIiwic3R5bGVOb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjc3MiLCJlZGl0b3JWaWV3IiwiaXNJbml0aWFsaXplZCIsImluc3RhbmNlSWQiLCJyYW5kb20iLCJpbmplY3RDU1MiLCJpbmplY3ROb25jZSIsImF1dG9mb2N1cyIsImVkaXRvclByb3BzIiwiZW5hYmxlQ29yZUV4dGVuc2lvbnMiLCJvbk1vdW50Iiwib25Vbm1vdW50Iiwib25Db250ZW50RXJyb3IiLCJvblBhc3RlIiwib25Ecm9wIiwib25EZWxldGUiLCJpc0NhcHR1cmluZ1RyYW5zYWN0aW9uIiwic2V0T3B0aW9ucyIsImNyZWF0ZUV4dGVuc2lvbk1hbmFnZXIiLCJjcmVhdGVDb21tYW5kTWFuYWdlciIsImNyZWF0ZVNjaGVtYSIsImluaXRpYWxEb2MiLCJjcmVhdGVEb2MiLCJlZGl0b3JTdGF0ZSIsIkVkaXRvclN0YXRlIiwibW91bnQiLCJjcmVhdGVWaWV3IiwiaGVhZCIsInVubW91bnQiLCJyZW1vdmUiLCJjb21tYW5kTWFuYWdlciIsInNldFByb3BzIiwidXBkYXRlU3RhdGUiLCJzZXRFZGl0YWJsZSIsIlByb3h5IiwiZGlzcGF0Y2hUcmFuc2FjdGlvbiIsImRyYWdnaW5nIiwiZ2V0IiwiUmVmbGVjdCIsInJlZ2lzdGVyUGx1Z2luIiwiaGFuZGxlUGx1Z2lucyIsInVucmVnaXN0ZXJQbHVnaW4iLCJuYW1lT3JQbHVnaW5LZXlUb1JlbW92ZSIsInByZXZQbHVnaW5zIiwibmFtZU9yUGx1Z2luS2V5Iiwic3RhcnRzV2l0aCIsImNvcmVFeHRlbnNpb25zIiwiZXh0IiwiYWxsRXh0ZW5zaW9ucyIsIm1lc3NhZ2UiLCJFZGl0b3JWaWV3Iiwicm9sZSIsInByZXBlbmRDbGFzcyIsImNyZWF0ZU5vZGVWaWV3cyIsImNsYXNzTmFtZSIsInNlbGVjdGlvbkhhc0NoYW5nZWQiLCJyb290VHJXYXNBcHBsaWVkIiwicHJldlN0YXRlIiwibmV4dFN0YXRlIiwibW9zdFJlY2VudEZvY3VzVHIiLCJmaW5kTGFzdCIsImZvY3VzMiIsImJsdXIyIiwibmFtZU9yQXR0cmlidXRlcyIsImF0dHJpYnV0ZXNPclVuZGVmaW5lZCIsImdldEpTT04iLCJnZXRIVE1MIiwiJG5vZGUiLCIkZG9jIiwiJG5vZGVzIiwiY2FwdHVyZUdyb3VwIiwiZnVsbE1hdGNoIiwic3RhcnRTcGFjZXMiLCJzZWFyY2giLCJ0ZXh0U3RhcnQiLCJ0ZXh0RW5kIiwiZXhjbHVkZWRNYXJrcyIsImV4Y2x1ZGVkIiwibWFya0VuZCIsIm5ld05vZGUiLCJsYXN0SW5kZXhPZiIsIm1hdGNoU3RhcnQiLCJsYXN0Q2hhciIsImluc2VydGlvblN0YXJ0IiwiJHN0YXJ0IiwiY3V0T2ZmIiwid3JhcHBpbmciLCJmaW5kV3JhcHBpbmciLCJrZWVwQXR0cmlidXRlcyIsImpvaW5QcmVkaWNhdGUiLCJGdW5jdGlvbiIsIm1hdGNoVHlwZSIsInN0cmluZyIsImNoZWNrTWFyayIsInRoaXNNYXJrIiwiZm91bmRNYXJrIiwibmVlZHNVcGRhdGUiLCJ1cGRhdGVkTWFyayIsImNvbXBvbmVudCIsImNvbnRlbnRET00iLCJpZ25vcmVNdXRhdGlvbiIsIm11dGF0aW9uIiwiY2hhbmdlZE5vZGVzIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImlzQ29udGVudEVkaXRhYmxlIiwiX05vZGUiLCJpc0RyYWdnaW5nIiwic3RvcEV2ZW50Iiwib25EcmFnU3RhcnQiLCJfZiIsIl9nIiwiZHJhZ0hhbmRsZSIsImRvbUJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZUJveCIsIm9mZnNldFgiLCJuYXRpdmVFdmVudCIsIm9mZnNldFkiLCJjbG9uZWROb2RlIiwiY2xvbmVOb2RlIiwicm91bmQiLCJib3hTaXppbmciLCJwb2ludGVyRXZlbnRzIiwiZHJhZ0ltYWdlV3JhcHBlciIsImRhdGFUcmFuc2ZlciIsInNldERyYWdJbWFnZSIsImlzSW5FbGVtZW50IiwiaXNEcmFnRXZlbnQiLCJpc0Ryb3BFdmVudCIsImlzSW5wdXQiLCJ0YWdOYW1lIiwiaXNEcmFnZ2FibGUiLCJpc1NlbGVjdGFibGUiLCJpc0NvcHlFdmVudCIsImlzUGFzdGVFdmVudCIsImlzQ3V0RXZlbnQiLCJpc0NsaWNrRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlzVmFsaWREcmFnSGFuZGxlIiwiZ2V0Q29udGVudCIsImN1cnJlbnRTdGVwIiwiZGVsZXRlZCIsIm1hcHBlZFBvc2l0aW9uIiwibmV3UG9zaXRpb24iLCJnZXRNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLEtBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxDQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsa0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQywwQkFBQSxFQUFBQSxDQUFBLEtBQUFBLDBCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsMkJBQUEsRUFBQUEsQ0FBQSxLQUFBQSwyQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLDZCQUFBLEVBQUFBLENBQUEsS0FBQUEsNkJBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDRCQUFBO0VBQUF6QyxDQUFBLEVBQUFBLENBQUEsS0FBQUEsQ0FBQTtFQUFBMEMsb0NBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQ0FBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyx3QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHdCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBN0csa0JBQUE7OztBQ0dBLElBQUE4RyxZQUFBLEdBQTRCQyxPQUFBO0FBQzVCLElBQUFDLFdBQUEsR0FBMkJELE9BQUE7QUNKM0IsSUFBQUUsYUFBQSxHQUF1QkYsT0FBQTtBQ0V2QixJQUFBRyxnQkFBQSxHQUEwQkgsT0FBQTtBQ0QxQixJQUFBSSxZQUFBLEdBQXFFSixPQUFBO0FDRHJFLElBQUFLLGFBQUEsR0FBcUJMLE9BQUE7QUNDckIsSUFBQU0sYUFBQSxHQUE4Qk4sT0FBQTtBQ0E5QixJQUFBTyxhQUFBLEdBQXVCUCxPQUFBO0FDRHZCLElBQUFRLGFBQUEsR0FBMEJSLE9BQUE7QUNBMUIsSUFBQVMsYUFBQSxHQUFxQlQsT0FBQTtBQ0FyQixJQUFBVSxhQUFBLEdBQThCVixPQUFBO0FDQTlCLElBQUFXLGFBQUEsR0FBOEJYLE9BQUE7QUNDOUIsSUFBQVksYUFBQSxHQUF5Q1osT0FBQTtBQ0F6QyxJQUFBYSxhQUFBLEdBQTBCYixPQUFBO0FBQzFCLElBQUFjLGlCQUFBLEdBQStDZCxPQUFBO0FDRC9DLElBQUFlLGFBQUEsR0FBeUJmLE9BQUE7QUFFekIsSUFBQWdCLGFBQUEsR0FBdUJoQixPQUFBO0FDRnZCLElBQUFpQixhQUFBLEdBQXlCakIsT0FBQTtBQUV6QixJQUFBa0IsYUFBQSxHQUF1QmxCLE9BQUE7QUNIdkIsSUFBQW1CLGFBQUEsR0FBa0NuQixPQUFBO0FDQWxDLElBQUFvQixpQkFBQSxHQUEyQnBCLE9BQUE7QUNBM0IsSUFBQXFCLGVBQUEsR0FBbUVyQixPQUFBO0FDQW5FLElBQUFzQixhQUFBLEdBQThCdEIsT0FBQTtBQ0E5QixJQUFBdUIsZ0JBQUEsR0FBMkR2QixPQUFBO0FDQTNELElBQUF3QixnQkFBQSxHQUE2Q3hCLE9BQUE7QUNDN0MsSUFBQXlCLGNBQUEsR0FBOEJ6QixPQUFBO0FDQTlCLElBQUEwQixhQUFBLEdBQXlCMUIsT0FBQTtBQ0R6QixJQUFBMkIsZ0JBQUEsR0FLTzNCLE9BQUE7QUNMUCxJQUFBNEIsaUJBQUEsR0FBMEI1QixPQUFBO0FDQTFCLElBQUE2QixpQkFBQSxHQUEwQjdCLE9BQUE7QUNBMUIsSUFBQThCLGdCQUFBLEdBQXlEOUIsT0FBQTtBQ0F6RCxJQUFBK0IsZ0JBQUEsR0FBd0QvQixPQUFBO0FDQXhELElBQUFnQyxnQkFBQSxHQUFxQ2hDLE9BQUE7QUNBckMsSUFBQWlDLGdCQUFBLEdBQXlEakMsT0FBQTtBQ0N6RCxJQUFBa0Msa0JBQUEsR0FBcURsQyxPQUFBO0FDRHJELElBQUFtQyxnQkFBQSxHQUF1RG5DLE9BQUE7QUNBdkQsSUFBQW9DLGNBQUEsR0FBNkJwQyxPQUFBO0FDQTdCLElBQUFxQyxpQkFBQSxHQUFpRXJDLE9BQUE7QUNBakUsSUFBQXNDLGlCQUFBLEdBQStEdEMsT0FBQTtBQ0EvRCxJQUFBdUMsaUJBQUEsR0FBNkR2QyxPQUFBO0FDRTdELElBQUF3QyxpQkFBQSxHQUFpRXhDLE9BQUE7QUNBakUsSUFBQXlDLGlCQUFBLEdBQXFFekMsT0FBQTtBQ0ZyRSxJQUFBMEMsaUJBQUEsR0FBNkIxQyxPQUFBO0FDQTdCLElBQUEyQyxjQUFBLEdBQThCM0MsT0FBQTtBQ0E5QixJQUFBNEMsY0FBQSxHQUE4QjVDLE9BQUE7QUNDOUIsSUFBQTZDLG1CQUFBLEdBQXFEN0MsT0FBQTtBQ0FyRCxJQUFBOEMsY0FBQSxHQUE2QzlDLE9BQUE7QUFDN0MsSUFBQStDLGlCQUFBLEdBQXlCL0MsT0FBQTtBQ0R6QixJQUFBZ0QsY0FBQSxHQUFnQ2hELE9BQUE7QUFDaEMsSUFBQWlELGNBQUEsR0FBOEJqRCxPQUFBO0FBQzlCLElBQUFrRCxpQkFBQSxHQUF5QmxELE9BQUE7QUNEekIsSUFBQW1ELGlCQUFBLEdBQXdCbkQsT0FBQTtBQ0Z4QixJQUFBb0QsaUJBQUEsR0FBeUNwRCxPQUFBO0FDQ3pDLElBQUFxRCxtQkFBQSxHQUFpRHJELE9BQUE7QUNEakQsSUFBQXNELGlCQUFBLEdBQStCdEQsT0FBQTtBQ0EvQixJQUFBdUQsY0FBQSxHQUFrQ3ZELE9BQUE7QUNBbEMsSUFBQXdELGNBQUEsR0FBa0N4RCxPQUFBO0FDQWxDLElBQUF5RCxjQUFBLEdBQWtDekQsT0FBQTtBQ0FsQyxJQUFBMEQsY0FBQSxHQUE2QzFELE9BQUE7QUNBN0MsSUFBQTJELGNBQUEsR0FBa0MzRCxPQUFBO0FDQWxDLElBQUE0RCxjQUFBLEdBQWtDNUQsT0FBQTtBQ0NsQyxJQUFBNkQsa0JBQUEsR0FBc0M3RCxPQUFBO0FDQXRDLElBQUE4RCxjQUFBLEdBQWdEOUQsT0FBQTtBQ0RoRCxJQUFBK0QsY0FBQSxHQUE4Qi9ELE9BQUE7Ozs7Ozs7O0FDT3ZCLFNBQVM1RixxQkFBcUI0SixNQUFBLEVBQXVFO0VBQzFHLE1BQU07SUFBRUMsS0FBQTtJQUFPQztFQUFZLElBQUlGLE1BQUE7RUFDL0IsSUFBSTtJQUFFRztFQUFVLElBQUlELFdBQUE7RUFDcEIsSUFBSTtJQUFFRTtFQUFJLElBQUlGLFdBQUE7RUFDZCxJQUFJO0lBQUVHO0VBQVksSUFBSUgsV0FBQTtFQUV0QixPQUFPO0lBQ0wsR0FBR0QsS0FBQTtJQUNISyxLQUFBLEVBQU9MLEtBQUEsQ0FBTUssS0FBQSxDQUFNQyxJQUFBLENBQUtOLEtBQUs7SUFDN0JPLGdCQUFBLEVBQWtCUCxLQUFBLENBQU1PLGdCQUFBLENBQWlCRCxJQUFBLENBQUtOLEtBQUs7SUFDbkRRLE9BQUEsRUFBU1IsS0FBQSxDQUFNUSxPQUFBO0lBQ2ZDLE1BQUEsRUFBUVQsS0FBQSxDQUFNUyxNQUFBO0lBQ2RDLFdBQUEsRUFBYVYsS0FBQSxDQUFNVSxXQUFBLENBQVlKLElBQUEsQ0FBS04sS0FBSztJQUN6Q1csTUFBQSxFQUFRWCxLQUFBLENBQU1XLE1BQUEsQ0FBT0wsSUFBQSxDQUFLTixLQUFLO0lBQy9CLElBQUlJLFlBQUEsRUFBYztNQUNoQixPQUFPQSxXQUFBO0lBQ1Q7SUFDQSxJQUFJRixVQUFBLEVBQVk7TUFDZCxPQUFPQSxTQUFBO0lBQ1Q7SUFDQSxJQUFJQyxJQUFBLEVBQU07TUFDUixPQUFPQSxHQUFBO0lBQ1Q7SUFDQSxJQUFJUyxHQUFBLEVBQUs7TUFDUFYsU0FBQSxHQUFZRCxXQUFBLENBQVlDLFNBQUE7TUFDeEJDLEdBQUEsR0FBTUYsV0FBQSxDQUFZRSxHQUFBO01BQ2xCQyxXQUFBLEdBQWNILFdBQUEsQ0FBWUcsV0FBQTtNQUUxQixPQUFPSCxXQUFBO0lBQ1Q7RUFDRjtBQUNGO0FDaENPLElBQU0vSyxjQUFBLEdBQU4sTUFBcUI7RUFPMUIyTCxZQUFZQyxLQUFBLEVBQWdEO0lBQzFELEtBQUtDLE1BQUEsR0FBU0QsS0FBQSxDQUFNQyxNQUFBO0lBQ3BCLEtBQUtDLFdBQUEsR0FBYyxLQUFLRCxNQUFBLENBQU9FLGdCQUFBLENBQWlCQyxRQUFBO0lBQ2hELEtBQUtDLFdBQUEsR0FBY0wsS0FBQSxDQUFNZCxLQUFBO0VBQzNCO0VBRUEsSUFBSW9CLGVBQUEsRUFBMEI7SUFDNUIsT0FBTyxDQUFDLENBQUMsS0FBS0QsV0FBQTtFQUNoQjtFQUVBLElBQUluQixNQUFBLEVBQXFCO0lBQ3ZCLE9BQU8sS0FBS21CLFdBQUEsSUFBZSxLQUFLSixNQUFBLENBQU9mLEtBQUE7RUFDekM7RUFFQSxJQUFJa0IsU0FBQSxFQUEyQjtJQUM3QixNQUFNO01BQUVGLFdBQUE7TUFBYUQsTUFBQTtNQUFRZjtJQUFNLElBQUk7SUFDdkMsTUFBTTtNQUFFcUI7SUFBSyxJQUFJTixNQUFBO0lBQ2pCLE1BQU07TUFBRUg7SUFBRyxJQUFJWixLQUFBO0lBQ2YsTUFBTWMsS0FBQSxHQUFRLEtBQUtRLFVBQUEsQ0FBV1YsRUFBRTtJQUVoQyxPQUFPVyxNQUFBLENBQU9DLFdBQUEsQ0FDWkQsTUFBQSxDQUFPRSxPQUFBLENBQVFULFdBQVcsRUFBRVUsR0FBQSxDQUFJLENBQUMsQ0FBQ0MsSUFBQSxFQUFNQyxRQUFPLE1BQU07TUFDbkQsTUFBTUMsTUFBQSxHQUFTQSxDQUFBLEdBQUlDLElBQUEsS0FBZ0I7UUFDakMsTUFBTUMsUUFBQSxHQUFXSCxRQUFBLENBQVEsR0FBR0UsSUFBSSxFQUFFaEIsS0FBSztRQUV2QyxJQUFJLENBQUNGLEVBQUEsQ0FBR29CLE9BQUEsQ0FBUSxpQkFBaUIsS0FBSyxDQUFDLEtBQUtaLGNBQUEsRUFBZ0I7VUFDMURDLElBQUEsQ0FBS1ksUUFBQSxDQUFTckIsRUFBRTtRQUNsQjtRQUVBLE9BQU9tQixRQUFBO01BQ1Q7TUFFQSxPQUFPLENBQUNKLElBQUEsRUFBTUUsTUFBTTtJQUN0QixDQUFDLENBQ0g7RUFDRjtFQUVBLElBQUlLLE1BQUEsRUFBK0I7SUFDakMsT0FBTyxNQUFNLEtBQUtDLFdBQUEsQ0FBWTtFQUNoQztFQUVBLElBQUlDLElBQUEsRUFBeUI7SUFDM0IsT0FBTyxNQUFNLEtBQUtDLFNBQUEsQ0FBVTtFQUM5QjtFQUVPRixZQUFZRyxPQUFBLEVBQXVCQyxjQUFBLEdBQWlCLE1BQXVCO0lBQ2hGLE1BQU07TUFBRXZCLFdBQUE7TUFBYUQsTUFBQTtNQUFRZjtJQUFNLElBQUk7SUFDdkMsTUFBTTtNQUFFcUI7SUFBSyxJQUFJTixNQUFBO0lBQ2pCLE1BQU15QixTQUFBLEdBQXVCLEVBQUM7SUFDOUIsTUFBTUMsbUJBQUEsR0FBc0IsQ0FBQyxDQUFDSCxPQUFBO0lBQzlCLE1BQU0xQixFQUFBLEdBQUswQixPQUFBLElBQVd0QyxLQUFBLENBQU1ZLEVBQUE7SUFFNUIsTUFBTThCLElBQUEsR0FBTUMsQ0FBQSxLQUFNO01BQ2hCLElBQUksQ0FBQ0YsbUJBQUEsSUFBdUJGLGNBQUEsSUFBa0IsQ0FBQzNCLEVBQUEsQ0FBR29CLE9BQUEsQ0FBUSxpQkFBaUIsS0FBSyxDQUFDLEtBQUtaLGNBQUEsRUFBZ0I7UUFDcEdDLElBQUEsQ0FBS1ksUUFBQSxDQUFTckIsRUFBRTtNQUNsQjtNQUVBLE9BQU80QixTQUFBLENBQVVJLEtBQUEsQ0FBTWIsUUFBQSxJQUFZQSxRQUFBLEtBQWEsSUFBSTtJQUN0RDtJQUVBLE1BQU1HLEtBQUEsR0FBUTtNQUNaLEdBQUdYLE1BQUEsQ0FBT0MsV0FBQSxDQUNSRCxNQUFBLENBQU9FLE9BQUEsQ0FBUVQsV0FBVyxFQUFFVSxHQUFBLENBQUksQ0FBQyxDQUFDQyxJQUFBLEVBQU1DLFFBQU8sTUFBTTtRQUNuRCxNQUFNaUIsY0FBQSxHQUFpQkEsQ0FBQSxHQUFJZixJQUFBLEtBQWtCO1VBQzNDLE1BQU1oQixLQUFBLEdBQVEsS0FBS1EsVUFBQSxDQUFXVixFQUFBLEVBQUkyQixjQUFjO1VBQ2hELE1BQU1SLFFBQUEsR0FBV0gsUUFBQSxDQUFRLEdBQUdFLElBQUksRUFBRWhCLEtBQUs7VUFFdkMwQixTQUFBLENBQVVNLElBQUEsQ0FBS2YsUUFBUTtVQUV2QixPQUFPRyxLQUFBO1FBQ1Q7UUFFQSxPQUFPLENBQUNQLElBQUEsRUFBTWtCLGNBQWM7TUFDOUIsQ0FBQyxDQUNIO01BQ0FGLEdBQUEsRUFBQUQ7SUFDRjtJQUVBLE9BQU9SLEtBQUE7RUFDVDtFQUVPRyxVQUFVQyxPQUFBLEVBQW9DO0lBQ25ELE1BQU07TUFBRXRCLFdBQUE7TUFBYWhCO0lBQU0sSUFBSTtJQUMvQixNQUFNaUMsUUFBQSxHQUFXO0lBQ2pCLE1BQU1yQixFQUFBLEdBQUswQixPQUFBLElBQVd0QyxLQUFBLENBQU1ZLEVBQUE7SUFDNUIsTUFBTUUsS0FBQSxHQUFRLEtBQUtRLFVBQUEsQ0FBV1YsRUFBQSxFQUFJcUIsUUFBUTtJQUMxQyxNQUFNYyxpQkFBQSxHQUFvQnhCLE1BQUEsQ0FBT0MsV0FBQSxDQUMvQkQsTUFBQSxDQUFPRSxPQUFBLENBQVFULFdBQVcsRUFBRVUsR0FBQSxDQUFJLENBQUMsQ0FBQ0MsSUFBQSxFQUFNQyxRQUFPLE1BQU07TUFDbkQsT0FBTyxDQUFDRCxJQUFBLEVBQU0sSUFBSUcsSUFBQSxLQUFrQkYsUUFBQSxDQUFRLEdBQUdFLElBQUksRUFBRTtRQUFFLEdBQUdoQixLQUFBO1FBQU9tQixRQUFBLEVBQVU7TUFBVSxDQUFDLENBQUM7SUFDekYsQ0FBQyxDQUNIO0lBRUEsT0FBTztNQUNMLEdBQUdjLGlCQUFBO01BQ0hiLEtBQUEsRUFBT0EsQ0FBQSxLQUFNLEtBQUtDLFdBQUEsQ0FBWXZCLEVBQUEsRUFBSXFCLFFBQVE7SUFDNUM7RUFDRjtFQUVPWCxXQUFXVixFQUFBLEVBQWlCMkIsY0FBQSxHQUFpQixNQUFvQjtJQUN0RSxNQUFNO01BQUV2QixXQUFBO01BQWFELE1BQUE7TUFBUWY7SUFBTSxJQUFJO0lBQ3ZDLE1BQU07TUFBRXFCO0lBQUssSUFBSU4sTUFBQTtJQUVqQixNQUFNRCxLQUFBLEdBQXNCO01BQzFCRixFQUFBO01BQ0FHLE1BQUE7TUFDQU0sSUFBQTtNQUNBckIsS0FBQSxFQUFPN0osb0JBQUEsQ0FBcUI7UUFDMUI2SixLQUFBO1FBQ0FDLFdBQUEsRUFBYVc7TUFDZixDQUFDO01BQ0RxQixRQUFBLEVBQVVNLGNBQUEsR0FBaUIsTUFBTSxTQUFZO01BQzdDTCxLQUFBLEVBQU9BLENBQUEsS0FBTSxLQUFLQyxXQUFBLENBQVl2QixFQUFBLEVBQUkyQixjQUFjO01BQ2hESCxHQUFBLEVBQUtBLENBQUEsS0FBTSxLQUFLQyxTQUFBLENBQVV6QixFQUFFO01BQzVCLElBQUlNLFNBQUEsRUFBVztRQUNiLE9BQU9LLE1BQUEsQ0FBT0MsV0FBQSxDQUNaRCxNQUFBLENBQU9FLE9BQUEsQ0FBUVQsV0FBVyxFQUFFVSxHQUFBLENBQUksQ0FBQyxDQUFDQyxJQUFBLEVBQU1DLFFBQU8sTUFBTTtVQUNuRCxPQUFPLENBQUNELElBQUEsRUFBTSxJQUFJRyxJQUFBLEtBQWtCRixRQUFBLENBQVEsR0FBR0UsSUFBSSxFQUFFaEIsS0FBSyxDQUFDO1FBQzdELENBQUMsQ0FDSDtNQUNGO0lBQ0Y7SUFFQSxPQUFPQSxLQUFBO0VBQ1Q7QUFDRjtBQ2pJTyxJQUFNa0MsWUFBQSxHQUFOLE1BQWtEO0VBQWxEbkMsWUFBQTtJQUNMLEtBQVEyQixTQUFBLEdBQWdFLENBQUM7RUFBQTtFQUVsRVMsR0FBcUNDLEtBQUEsRUFBa0JDLEVBQUEsRUFBMEM7SUFDdEcsSUFBSSxDQUFDLEtBQUtYLFNBQUEsQ0FBVVUsS0FBSyxHQUFHO01BQzFCLEtBQUtWLFNBQUEsQ0FBVVUsS0FBSyxJQUFJLEVBQUM7SUFDM0I7SUFFQSxLQUFLVixTQUFBLENBQVVVLEtBQUssRUFBRUosSUFBQSxDQUFLSyxFQUFFO0lBRTdCLE9BQU87RUFDVDtFQUVPQyxLQUF1Q0YsS0FBQSxLQUFxQnBCLElBQUEsRUFBd0M7SUFDekcsTUFBTVUsU0FBQSxHQUFZLEtBQUtBLFNBQUEsQ0FBVVUsS0FBSztJQUV0QyxJQUFJVixTQUFBLEVBQVc7TUFDYkEsU0FBQSxDQUFVYSxPQUFBLENBQVF0QixRQUFBLElBQVlBLFFBQUEsQ0FBUzFCLEtBQUEsQ0FBTSxNQUFNeUIsSUFBSSxDQUFDO0lBQzFEO0lBRUEsT0FBTztFQUNUO0VBRU93QixJQUFzQ0osS0FBQSxFQUFrQkMsRUFBQSxFQUEyQztJQUN4RyxNQUFNWCxTQUFBLEdBQVksS0FBS0EsU0FBQSxDQUFVVSxLQUFLO0lBRXRDLElBQUlWLFNBQUEsRUFBVztNQUNiLElBQUlXLEVBQUEsRUFBSTtRQUNOLEtBQUtYLFNBQUEsQ0FBVVUsS0FBSyxJQUFJVixTQUFBLENBQVVlLE1BQUEsQ0FBT3hCLFFBQUEsSUFBWUEsUUFBQSxLQUFhb0IsRUFBRTtNQUN0RSxPQUFPO1FBQ0wsT0FBTyxLQUFLWCxTQUFBLENBQVVVLEtBQUs7TUFDN0I7SUFDRjtJQUVBLE9BQU87RUFDVDtFQUVPTSxLQUF1Q04sS0FBQSxFQUFrQkMsRUFBQSxFQUEwQztJQUN4RyxNQUFNTSxNQUFBLEdBQVNBLENBQUEsR0FBSTNCLElBQUEsS0FBcUM7TUFDdEQsS0FBS3dCLEdBQUEsQ0FBSUosS0FBQSxFQUFPTyxNQUFNO01BQ3RCTixFQUFBLENBQUc5QyxLQUFBLENBQU0sTUFBTXlCLElBQUk7SUFDckI7SUFFQSxPQUFPLEtBQUttQixFQUFBLENBQUdDLEtBQUEsRUFBT08sTUFBTTtFQUM5QjtFQUVPQyxtQkFBQSxFQUEyQjtJQUNoQyxLQUFLbEIsU0FBQSxHQUFZLENBQUM7RUFDcEI7QUFDRjtBekQvQ08sU0FBU3RNLHdCQUF3QnlOLE1BQUEsRUFBeUJDLFlBQUEsRUFBd0M7RUFDdkcsTUFBTUMsU0FBQSxHQUFZLElBQUkzSCxnQkFBQSxDQUFBNEgsU0FBQSxDQUFVSCxNQUFNO0VBRXRDQyxZQUFBLENBQWFQLE9BQUEsQ0FBUXBELFdBQUEsSUFBZTtJQUNsQ0EsV0FBQSxDQUFZOEQsS0FBQSxDQUFNVixPQUFBLENBQVFXLElBQUEsSUFBUTtNQUNoQ0gsU0FBQSxDQUFVRyxJQUFBLENBQUtBLElBQUk7SUFDckIsQ0FBQztFQUNILENBQUM7RUFFRCxPQUFPSCxTQUFBO0FBQ1Q7QTBEcEJBLElBQU1JLGlCQUFBLEdBQXFCQyxJQUFBLElBQXNCO0VBQy9DLE1BQU1DLFFBQUEsR0FBV0QsSUFBQSxDQUFLRSxVQUFBO0VBRXRCLFNBQVNDLENBQUEsR0FBSUYsUUFBQSxDQUFTRyxNQUFBLEdBQVMsR0FBR0QsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSyxHQUFHO0lBQ2hELE1BQU1FLEtBQUEsR0FBUUosUUFBQSxDQUFTRSxDQUFDO0lBRXhCLElBQUlFLEtBQUEsQ0FBTUMsUUFBQSxLQUFhLEtBQUtELEtBQUEsQ0FBTUUsU0FBQSxJQUFhLGdCQUFnQkMsSUFBQSxDQUFLSCxLQUFBLENBQU1FLFNBQVMsR0FBRztNQUNwRlAsSUFBQSxDQUFLUyxXQUFBLENBQVlKLEtBQUs7SUFDeEIsV0FBV0EsS0FBQSxDQUFNQyxRQUFBLEtBQWEsR0FBRztNQUMvQlAsaUJBQUEsQ0FBa0JNLEtBQW9CO0lBQ3hDO0VBQ0Y7RUFFQSxPQUFPTCxJQUFBO0FBQ1Q7QUFFTyxTQUFTdk4sa0JBQWtCaU8sS0FBQSxFQUE0QjtFQUM1RCxJQUFJLE9BQU9DLE1BQUEsS0FBVyxhQUFhO0lBQ2pDLE1BQU0sSUFBSUMsS0FBQSxDQUFNLHNGQUFzRjtFQUN4RztFQUVBLE1BQU1DLFlBQUEsR0FBZSxTQUFTSCxLQUFLO0VBRW5DLE1BQU1JLElBQUEsR0FBTyxJQUFJSCxNQUFBLENBQU9JLFNBQUEsQ0FBVSxFQUFFQyxlQUFBLENBQWdCSCxZQUFBLEVBQWMsV0FBVyxFQUFFSSxJQUFBO0VBRS9FLE9BQU9sQixpQkFBQSxDQUFrQmUsSUFBSTtBQUMvQjtBekRQTyxTQUFTek8sc0JBQ2Q2TyxPQUFBLEVBQ0EzRSxNQUFBLEVBQ0E0RSxPQUFBLEVBQzRCO0VBQzVCLElBQUlELE9BQUEsWUFBbUJqSixZQUFBLENBQUF6RyxJQUFBLElBQW1CMFAsT0FBQSxZQUFtQmpKLFlBQUEsQ0FBQTlHLFFBQUEsRUFBVTtJQUNyRSxPQUFPK1AsT0FBQTtFQUNUO0VBQ0FDLE9BQUEsR0FBVTtJQUNSQyxLQUFBLEVBQU87SUFDUEMsWUFBQSxFQUFjLENBQUM7SUFDZixHQUFHRjtFQUNMO0VBRUEsTUFBTUcsYUFBQSxHQUFnQixPQUFPSixPQUFBLEtBQVksWUFBWUEsT0FBQSxLQUFZO0VBQ2pFLE1BQU1LLGFBQUEsR0FBZ0IsT0FBT0wsT0FBQSxLQUFZO0VBRXpDLElBQUlJLGFBQUEsRUFBZTtJQUNqQixJQUFJO01BQ0YsTUFBTUUsY0FBQSxHQUFpQkMsS0FBQSxDQUFNQyxPQUFBLENBQVFSLE9BQU8sS0FBS0EsT0FBQSxDQUFRZCxNQUFBLEdBQVM7TUFHbEUsSUFBSW9CLGNBQUEsRUFBZ0I7UUFDbEIsT0FBT3ZKLFlBQUEsQ0FBQTlHLFFBQUEsQ0FBU3dRLFNBQUEsQ0FBVVQsT0FBQSxDQUFRMUQsR0FBQSxDQUFJb0UsSUFBQSxJQUFRckYsTUFBQSxDQUFPc0YsWUFBQSxDQUFhRCxJQUFJLENBQUMsQ0FBQztNQUMxRTtNQUVBLE1BQU01QixJQUFBLEdBQU96RCxNQUFBLENBQU9zRixZQUFBLENBQWFYLE9BQU87TUFFeEMsSUFBSUMsT0FBQSxDQUFRVyxxQkFBQSxFQUF1QjtRQUNqQzlCLElBQUEsQ0FBSytCLEtBQUEsQ0FBTTtNQUNiO01BRUEsT0FBTy9CLElBQUE7SUFDVCxTQUFTZ0MsS0FBQSxFQUFPO01BQ2QsSUFBSWIsT0FBQSxDQUFRVyxxQkFBQSxFQUF1QjtRQUNqQyxNQUFNLElBQUlsQixLQUFBLENBQU0sd0NBQXdDO1VBQUVxQixLQUFBLEVBQU9EO1FBQWUsQ0FBQztNQUNuRjtNQUVBRSxPQUFBLENBQVFDLElBQUEsQ0FBSyxtQ0FBbUMsaUJBQWlCakIsT0FBQSxFQUFTLFVBQVVjLEtBQUs7TUFFekYsT0FBTzNQLHFCQUFBLENBQXNCLElBQUlrSyxNQUFBLEVBQVE0RSxPQUFPO0lBQ2xEO0VBQ0Y7RUFFQSxJQUFJSSxhQUFBLEVBQWU7SUFFakIsSUFBSUosT0FBQSxDQUFRVyxxQkFBQSxFQUF1QjtNQUNqQyxJQUFJTSxpQkFBQSxHQUFvQjtNQUN4QixJQUFJQyxjQUFBLEdBQWlCO01BR3JCLE1BQU1DLGtCQUFBLEdBQXFCLElBQUlySyxZQUFBLENBQUFzSyxNQUFBLENBQU87UUFDcENDLE9BQUEsRUFBU2pHLE1BQUEsQ0FBT2tHLElBQUEsQ0FBS0QsT0FBQTtRQUNyQkUsS0FBQSxFQUFPbkcsTUFBQSxDQUFPa0csSUFBQSxDQUFLQyxLQUFBOzs7UUFHbkJDLEtBQUEsRUFBT3BHLE1BQUEsQ0FBT2tHLElBQUEsQ0FBS0UsS0FBQSxDQUFNQyxNQUFBLENBQU87VUFDOUJDLDRDQUFBLEVBQThDO1lBQzVDM0IsT0FBQSxFQUFTO1lBQ1Q0QixLQUFBLEVBQU87WUFDUEMsUUFBQSxFQUFVLENBQ1I7Y0FDRUMsR0FBQSxFQUFLO2NBQ0xDLFFBQUEsRUFBVUMsQ0FBQSxJQUFLO2dCQUViZCxpQkFBQSxHQUFvQjtnQkFFcEJDLGNBQUEsR0FBaUIsT0FBT2EsQ0FBQSxLQUFNLFdBQVdBLENBQUEsR0FBSUEsQ0FBQSxDQUFFQyxTQUFBO2dCQUMvQyxPQUFPO2NBQ1Q7WUFDRjtVQUVKO1FBQ0YsQ0FBQztNQUNILENBQUM7TUFFRCxJQUFJaEMsT0FBQSxDQUFRQyxLQUFBLEVBQU87UUFDakJuSixZQUFBLENBQUE4SSxTQUFBLENBQVVxQyxVQUFBLENBQVdkLGtCQUFrQixFQUFFZSxVQUFBLENBQVc1USxpQkFBQSxDQUFrQnlPLE9BQU8sR0FBR0MsT0FBQSxDQUFRRSxZQUFZO01BQ3RHLE9BQU87UUFDTHBKLFlBQUEsQ0FBQThJLFNBQUEsQ0FBVXFDLFVBQUEsQ0FBV2Qsa0JBQWtCLEVBQUVnQixLQUFBLENBQU03USxpQkFBQSxDQUFrQnlPLE9BQU8sR0FBR0MsT0FBQSxDQUFRRSxZQUFZO01BQ2pHO01BRUEsSUFBSUYsT0FBQSxDQUFRVyxxQkFBQSxJQUF5Qk0saUJBQUEsRUFBbUI7UUFDdEQsTUFBTSxJQUFJeEIsS0FBQSxDQUFNLHdDQUF3QztVQUN0RHFCLEtBQUEsRUFBTyxJQUFJckIsS0FBQSxDQUFNLDBCQUEwQnlCLGNBQWMsRUFBRTtRQUM3RCxDQUFDO01BQ0g7SUFDRjtJQUVBLE1BQU1rQixNQUFBLEdBQVN0TCxZQUFBLENBQUE4SSxTQUFBLENBQVVxQyxVQUFBLENBQVc3RyxNQUFNO0lBRTFDLElBQUk0RSxPQUFBLENBQVFDLEtBQUEsRUFBTztNQUNqQixPQUFPbUMsTUFBQSxDQUFPRixVQUFBLENBQVc1USxpQkFBQSxDQUFrQnlPLE9BQU8sR0FBR0MsT0FBQSxDQUFRRSxZQUFZLEVBQUVILE9BQUE7SUFDN0U7SUFFQSxPQUFPcUMsTUFBQSxDQUFPRCxLQUFBLENBQU03USxpQkFBQSxDQUFrQnlPLE9BQU8sR0FBR0MsT0FBQSxDQUFRRSxZQUFZO0VBQ3RFO0VBRUEsT0FBT2hQLHFCQUFBLENBQXNCLElBQUlrSyxNQUFBLEVBQVE0RSxPQUFPO0FBQ2xEO0EwRDFHTyxTQUFTalAsZUFDZGdQLE9BQUEsRUFDQTNFLE1BQUEsRUFDQThFLFlBQUEsR0FBNkIsQ0FBQyxHQUM5QkYsT0FBQSxHQUErQyxDQUFDLEdBQy9CO0VBQ2pCLE9BQU85TyxxQkFBQSxDQUFzQjZPLE9BQUEsRUFBUzNFLE1BQUEsRUFBUTtJQUM1QzZFLEtBQUEsRUFBTztJQUNQQyxZQUFBO0lBQ0FTLHFCQUFBLEVBQXVCWCxPQUFBLENBQVFXO0VBQ2pDLENBQUM7QUFDSDtBQ2hCTyxTQUFTdlAsZUFBZWlSLEtBQUEsRUFBc0M7RUFDbkUsU0FBU3JELENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlxRCxLQUFBLENBQU1DLFNBQUEsRUFBV3RELENBQUEsSUFBSyxHQUFHO0lBQzNDLE1BQU07TUFBRXVEO0lBQUssSUFBSUYsS0FBQSxDQUFNRyxJQUFBLENBQUt4RCxDQUFDO0lBRTdCLElBQUl1RCxJQUFBLENBQUtFLFdBQUEsSUFBZSxDQUFDRixJQUFBLENBQUtHLGdCQUFBLENBQWlCLEdBQUc7TUFDaEQsT0FBT0gsSUFBQTtJQUNUO0VBQ0Y7RUFFQSxPQUFPO0FBQ1Q7QUNQTyxTQUFTN1EsYUFBYW1OLElBQUEsRUFBdUI4RCxTQUFBLEVBQXFDO0VBQ3ZGLE1BQU1DLFlBQUEsR0FBOEIsRUFBQztFQUVyQy9ELElBQUEsQ0FBS2dFLFdBQUEsQ0FBWSxDQUFDM0QsS0FBQSxFQUFPNEQsR0FBQSxLQUFRO0lBQy9CLElBQUlILFNBQUEsQ0FBVXpELEtBQUssR0FBRztNQUNwQjBELFlBQUEsQ0FBYW5GLElBQUEsQ0FBSztRQUNoQm9CLElBQUEsRUFBTUssS0FBQTtRQUNONEQ7TUFDRixDQUFDO0lBQ0g7RUFDRixDQUFDO0VBRUQsT0FBT0YsWUFBQTtBQUNUO0FDWk8sU0FBU2pSLG9CQUFvQmtOLElBQUEsRUFBdUJrRSxLQUFBLEVBQWNKLFNBQUEsRUFBcUM7RUFDNUcsTUFBTUMsWUFBQSxHQUE4QixFQUFDO0VBYXJDL0QsSUFBQSxDQUFLbUUsWUFBQSxDQUFhRCxLQUFBLENBQU1FLElBQUEsRUFBTUYsS0FBQSxDQUFNRyxFQUFBLEVBQUksQ0FBQ2hFLEtBQUEsRUFBTzRELEdBQUEsS0FBUTtJQUN0RCxJQUFJSCxTQUFBLENBQVV6RCxLQUFLLEdBQUc7TUFDcEIwRCxZQUFBLENBQWFuRixJQUFBLENBQUs7UUFDaEJvQixJQUFBLEVBQU1LLEtBQUE7UUFDTjREO01BQ0YsQ0FBQztJQUNIO0VBQ0YsQ0FBQztFQUVELE9BQU9GLFlBQUE7QUFDVDtBQ3RCTyxTQUFTOVEsMkJBQ2RxUixJQUFBLEVBQ0FSLFNBQUEsRUFRWTtFQUNaLFNBQVMzRCxDQUFBLEdBQUltRSxJQUFBLENBQUtDLEtBQUEsRUFBT3BFLENBQUEsR0FBSSxHQUFHQSxDQUFBLElBQUssR0FBRztJQUN0QyxNQUFNSCxJQUFBLEdBQU9zRSxJQUFBLENBQUt0RSxJQUFBLENBQUtHLENBQUM7SUFFeEIsSUFBSTJELFNBQUEsQ0FBVTlELElBQUksR0FBRztNQUNuQixPQUFPO1FBQ0xpRSxHQUFBLEVBQUs5RCxDQUFBLEdBQUksSUFBSW1FLElBQUEsQ0FBS0UsTUFBQSxDQUFPckUsQ0FBQyxJQUFJO1FBQzlCc0UsS0FBQSxFQUFPSCxJQUFBLENBQUtHLEtBQUEsQ0FBTXRFLENBQUM7UUFDbkJvRSxLQUFBLEVBQU9wRSxDQUFBO1FBQ1BIO01BQ0Y7SUFDRjtFQUNGO0FBQ0Y7QUN2Qk8sU0FBU2hOLGVBQ2Q4USxTQUFBLEVBQ3lFO0VBQ3pFLE9BQVE5SCxTQUFBLElBQXlCL0ksMEJBQUEsQ0FBMkIrSSxTQUFBLENBQVUwSSxLQUFBLEVBQU9aLFNBQVM7QUFDeEY7QUNMTyxTQUFTblEsa0JBQ2RnUixTQUFBLEVBQ0FDLEtBQUEsRUFDQUMsT0FBQSxFQUNlO0VBQ2YsSUFBSUYsU0FBQSxDQUFVOUksTUFBQSxDQUFPK0ksS0FBc0MsTUFBTSxVQUFhRCxTQUFBLENBQVVHLE1BQUEsRUFBUTtJQUM5RixPQUFPblIsaUJBQUEsQ0FBa0JnUixTQUFBLENBQVVHLE1BQUEsRUFBUUYsS0FBQSxFQUFPQyxPQUFPO0VBQzNEO0VBRUEsSUFBSSxPQUFPRixTQUFBLENBQVU5SSxNQUFBLENBQU8rSSxLQUFzQyxNQUFNLFlBQVk7SUFDbEYsTUFBTWxFLEtBQUEsR0FBU2lFLFNBQUEsQ0FBVTlJLE1BQUEsQ0FBTytJLEtBQXNDLEVBQVV4SSxJQUFBLENBQUs7TUFDbkYsR0FBR3lJLE9BQUE7TUFDSEMsTUFBQSxFQUFRSCxTQUFBLENBQVVHLE1BQUEsR0FBU25SLGlCQUFBLENBQWtCZ1IsU0FBQSxDQUFVRyxNQUFBLEVBQVFGLEtBQUEsRUFBT0MsT0FBTyxJQUFJO0lBQ25GLENBQUM7SUFFRCxPQUFPbkUsS0FBQTtFQUNUO0VBRUEsT0FBT2lFLFNBQUEsQ0FBVTlJLE1BQUEsQ0FBTytJLEtBQXNDO0FBQ2hFO0FDdkJPLFNBQVMxUixrQkFBa0JQLFVBQUEsRUFBb0M7RUFDcEUsT0FDRUEsVUFBQSxDQUNHNkssR0FBQSxDQUFJbUgsU0FBQSxJQUFhO0lBQ2hCLE1BQU1FLE9BQUEsR0FBVTtNQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtNQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7TUFDbkI0RCxPQUFBLEVBQVNKLFNBQUEsQ0FBVUk7SUFDckI7SUFFQSxNQUFNQyxhQUFBLEdBQWdCclIsaUJBQUEsQ0FBOENnUixTQUFBLEVBQVcsaUJBQWlCRSxPQUFPO0lBRXZHLElBQUlHLGFBQUEsRUFBZTtNQUNqQixPQUFPLENBQUNMLFNBQUEsRUFBVyxHQUFHelIsaUJBQUEsQ0FBa0I4UixhQUFBLENBQWMsQ0FBQyxDQUFDO0lBQzFEO0lBRUEsT0FBT0wsU0FBQTtFQUNULENBQUMsRUFFQU0sSUFBQSxDQUFLLEVBQUU7QUFFZDtBL0QxQk8sU0FBU3JSLG9CQUFvQnNSLFFBQUEsRUFBb0IzSSxNQUFBLEVBQXdCO0VBQzlFLE1BQU00SSxnQkFBQSxHQUFtQmhOLGFBQUEsQ0FBQWlOLGFBQUEsQ0FBY2hDLFVBQUEsQ0FBVzdHLE1BQU0sRUFBRThJLGlCQUFBLENBQWtCSCxRQUFRO0VBRXBGLE1BQU1JLGlCQUFBLEdBQW9CQyxRQUFBLENBQVNDLGNBQUEsQ0FBZUMsa0JBQUEsQ0FBbUI7RUFDckUsTUFBTUMsU0FBQSxHQUFZSixpQkFBQSxDQUFrQm5ULGFBQUEsQ0FBYyxLQUFLO0VBRXZEdVQsU0FBQSxDQUFVQyxXQUFBLENBQVlSLGdCQUFnQjtFQUV0QyxPQUFPTyxTQUFBLENBQVVFLFNBQUE7QUFDbkI7QWdFWE8sU0FBU3RRLFdBQVdvTCxLQUFBLEVBQStCO0VBQ3hELE9BQU8sT0FBT0EsS0FBQSxLQUFVO0FBQzFCO0FDT08sU0FBUzVPLGFBQWdCNE8sS0FBQSxFQUFVbUUsT0FBQSxHQUFlLFdBQWNqSSxLQUFBLEVBQWtDO0VBQ3ZHLElBQUl0SCxVQUFBLENBQVdvTCxLQUFLLEdBQUc7SUFDckIsSUFBSW1FLE9BQUEsRUFBUztNQUNYLE9BQU9uRSxLQUFBLENBQU10RSxJQUFBLENBQUt5SSxPQUFPLEVBQUUsR0FBR2pJLEtBQUs7SUFDckM7SUFFQSxPQUFPOEQsS0FBQSxDQUFNLEdBQUc5RCxLQUFLO0VBQ3ZCO0VBRUEsT0FBTzhELEtBQUE7QUFDVDtBQ3BCTyxTQUFTdEwsY0FBY3NMLEtBQUEsR0FBUSxDQUFDLEdBQVk7RUFDakQsT0FBT3JELE1BQUEsQ0FBT3dJLElBQUEsQ0FBS25GLEtBQUssRUFBRU4sTUFBQSxLQUFXLEtBQUtNLEtBQUEsQ0FBTS9ELFdBQUEsS0FBZ0JVLE1BQUE7QUFDbEU7QUNHTyxTQUFTbEcsZ0JBQWdCeEUsVUFBQSxFQUF3QjtFQUN0RCxNQUFNbVQsY0FBQSxHQUFpQm5ULFVBQUEsQ0FBVzBNLE1BQUEsQ0FBT3NGLFNBQUEsSUFBYUEsU0FBQSxDQUFVakIsSUFBQSxLQUFTLFdBQVc7RUFDcEYsTUFBTXFDLGNBQUEsR0FBaUJwVCxVQUFBLENBQVcwTSxNQUFBLENBQU9zRixTQUFBLElBQWFBLFNBQUEsQ0FBVWpCLElBQUEsS0FBUyxNQUFNO0VBQy9FLE1BQU1zQyxjQUFBLEdBQWlCclQsVUFBQSxDQUFXME0sTUFBQSxDQUFPc0YsU0FBQSxJQUFhQSxTQUFBLENBQVVqQixJQUFBLEtBQVMsTUFBTTtFQUUvRSxPQUFPO0lBQ0xvQyxjQUFBO0lBQ0FDLGNBQUE7SUFDQUM7RUFDRjtBQUNGO0FDTk8sU0FBU3hTLDRCQUE0QmIsVUFBQSxFQUE4QztFQUN4RixNQUFNc1QsbUJBQUEsR0FBNEMsRUFBQztFQUNuRCxNQUFNO0lBQUVGLGNBQUE7SUFBZ0JDO0VBQWUsSUFBSTdPLGVBQUEsQ0FBZ0J4RSxVQUFVO0VBQ3JFLE1BQU11VCxxQkFBQSxHQUF3QixDQUFDLEdBQUdILGNBQUEsRUFBZ0IsR0FBR0MsY0FBYztFQUNuRSxNQUFNRyxnQkFBQSxHQUF3RjtJQUM1RkMsT0FBQSxFQUFTO0lBQ1RDLFFBQUEsRUFBVTtJQUNWQyxRQUFBLEVBQVU7SUFDVkMsVUFBQSxFQUFZO0lBQ1pDLFNBQUEsRUFBVztJQUNYQyxXQUFBLEVBQWE7SUFDYkMsVUFBQSxFQUFZO0VBQ2Q7RUFFQS9ULFVBQUEsQ0FBV3dNLE9BQUEsQ0FBUXdGLFNBQUEsSUFBYTtJQUM5QixNQUFNRSxPQUFBLEdBQVU7TUFDZHBILElBQUEsRUFBTWtILFNBQUEsQ0FBVWxILElBQUE7TUFDaEIwRCxPQUFBLEVBQVN3RCxTQUFBLENBQVV4RCxPQUFBO01BQ25CNEQsT0FBQSxFQUFTSixTQUFBLENBQVVJLE9BQUE7TUFDbkJwUyxVQUFBLEVBQVl1VDtJQUNkO0lBRUEsTUFBTVMsbUJBQUEsR0FBc0JoVCxpQkFBQSxDQUMxQmdSLFNBQUEsRUFDQSx1QkFDQUUsT0FDRjtJQUVBLElBQUksQ0FBQzhCLG1CQUFBLEVBQXFCO01BQ3hCO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBQSxHQUFtQkQsbUJBQUEsQ0FBb0I7SUFFN0NDLGdCQUFBLENBQWlCekgsT0FBQSxDQUFRMEgsZUFBQSxJQUFtQjtNQUMxQ0EsZUFBQSxDQUFnQkMsS0FBQSxDQUFNM0gsT0FBQSxDQUFRdUUsSUFBQSxJQUFRO1FBQ3BDckcsTUFBQSxDQUFPRSxPQUFBLENBQVFzSixlQUFBLENBQWdCRSxVQUFVLEVBQUU1SCxPQUFBLENBQVEsQ0FBQyxDQUFDMUIsSUFBQSxFQUFNdUosU0FBUyxNQUFNO1VBQ3hFZixtQkFBQSxDQUFvQnJILElBQUEsQ0FBSztZQUN2QjhFLElBQUE7WUFDQWpHLElBQUE7WUFDQXVKLFNBQUEsRUFBVztjQUNULEdBQUdiLGdCQUFBO2NBQ0gsR0FBR2E7WUFDTDtVQUNGLENBQUM7UUFDSCxDQUFDO01BQ0gsQ0FBQztJQUNILENBQUM7RUFDSCxDQUFDO0VBRURkLHFCQUFBLENBQXNCL0csT0FBQSxDQUFRd0YsU0FBQSxJQUFhO0lBQ3pDLE1BQU1FLE9BQUEsR0FBVTtNQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtNQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7TUFDbkI0RCxPQUFBLEVBQVNKLFNBQUEsQ0FBVUk7SUFDckI7SUFFQSxNQUFNa0MsYUFBQSxHQUFnQnRULGlCQUFBLENBQ3BCZ1IsU0FBQSxFQUNBLGlCQUNBRSxPQUNGO0lBRUEsSUFBSSxDQUFDb0MsYUFBQSxFQUFlO01BQ2xCO0lBQ0Y7SUFHQSxNQUFNRixVQUFBLEdBQWFFLGFBQUEsQ0FBYztJQUVqQzVKLE1BQUEsQ0FBT0UsT0FBQSxDQUFRd0osVUFBVSxFQUFFNUgsT0FBQSxDQUFRLENBQUMsQ0FBQzFCLElBQUEsRUFBTXVKLFNBQVMsTUFBTTtNQUN4RCxNQUFNRSxVQUFBLEdBQWE7UUFDakIsR0FBR2YsZ0JBQUE7UUFDSCxHQUFHYTtNQUNMO01BRUEsSUFBSSxRQUFPRSxVQUFBLG9CQUFBQSxVQUFBLENBQVlkLE9BQUEsTUFBWSxZQUFZO1FBQzdDYyxVQUFBLENBQVdkLE9BQUEsR0FBVWMsVUFBQSxDQUFXZCxPQUFBLENBQVE7TUFDMUM7TUFFQSxLQUFJYyxVQUFBLG9CQUFBQSxVQUFBLENBQVlSLFVBQUEsTUFBY1EsVUFBQSxvQkFBQUEsVUFBQSxDQUFZZCxPQUFBLE1BQVksUUFBVztRQUMvRCxPQUFPYyxVQUFBLENBQVdkLE9BQUE7TUFDcEI7TUFFQUgsbUJBQUEsQ0FBb0JySCxJQUFBLENBQUs7UUFDdkI4RSxJQUFBLEVBQU1pQixTQUFBLENBQVVsSCxJQUFBO1FBQ2hCQSxJQUFBO1FBQ0F1SixTQUFBLEVBQVdFO01BQ2IsQ0FBQztJQUNILENBQUM7RUFDSCxDQUFDO0VBRUQsT0FBT2pCLG1CQUFBO0FBQ1Q7QUN0R08sU0FBUzVQLGdCQUFBLEdBQW1COFEsT0FBQSxFQUFxRDtFQUN0RixPQUFPQSxPQUFBLENBQ0o5SCxNQUFBLENBQU91QyxJQUFBLElBQVEsQ0FBQyxDQUFDQSxJQUFJLEVBQ3JCd0YsTUFBQSxDQUFPLENBQUNDLEtBQUEsRUFBT3pGLElBQUEsS0FBUztJQUN2QixNQUFNMEYsZ0JBQUEsR0FBbUI7TUFBRSxHQUFHRDtJQUFNO0lBRXBDaEssTUFBQSxDQUFPRSxPQUFBLENBQVFxRSxJQUFJLEVBQUV6QyxPQUFBLENBQVEsQ0FBQyxDQUFDb0ksR0FBQSxFQUFLN0csS0FBSyxNQUFNO01BQzdDLE1BQU04RyxNQUFBLEdBQVNGLGdCQUFBLENBQWlCQyxHQUFHO01BRW5DLElBQUksQ0FBQ0MsTUFBQSxFQUFRO1FBQ1hGLGdCQUFBLENBQWlCQyxHQUFHLElBQUk3RyxLQUFBO1FBRXhCO01BQ0Y7TUFFQSxJQUFJNkcsR0FBQSxLQUFRLFNBQVM7UUFDbkIsTUFBTUUsWUFBQSxHQUF5Qi9HLEtBQUEsR0FBUWdILE1BQUEsQ0FBT2hILEtBQUssRUFBRWlILEtBQUEsQ0FBTSxHQUFHLElBQUksRUFBQztRQUNuRSxNQUFNQyxlQUFBLEdBQTRCTixnQkFBQSxDQUFpQkMsR0FBRyxJQUFJRCxnQkFBQSxDQUFpQkMsR0FBRyxFQUFFSSxLQUFBLENBQU0sR0FBRyxJQUFJLEVBQUM7UUFFOUYsTUFBTUUsYUFBQSxHQUFnQkosWUFBQSxDQUFhcEksTUFBQSxDQUFPeUksVUFBQSxJQUFjLENBQUNGLGVBQUEsQ0FBZ0JHLFFBQUEsQ0FBU0QsVUFBVSxDQUFDO1FBRTdGUixnQkFBQSxDQUFpQkMsR0FBRyxJQUFJLENBQUMsR0FBR0ssZUFBQSxFQUFpQixHQUFHQyxhQUFhLEVBQUVHLElBQUEsQ0FBSyxHQUFHO01BQ3pFLFdBQVdULEdBQUEsS0FBUSxTQUFTO1FBQzFCLE1BQU1VLFNBQUEsR0FBc0J2SCxLQUFBLEdBQ3hCQSxLQUFBLENBQ0dpSCxLQUFBLENBQU0sR0FBRyxFQUNUbkssR0FBQSxDQUFLMEssTUFBQSxJQUFrQkEsTUFBQSxDQUFNQyxJQUFBLENBQUssQ0FBQyxFQUNuQzlJLE1BQUEsQ0FBTytJLE9BQU8sSUFDakIsRUFBQztRQUNMLE1BQU1DLGNBQUEsR0FBMkJmLGdCQUFBLENBQWlCQyxHQUFHLElBQ2pERCxnQkFBQSxDQUFpQkMsR0FBRyxFQUNqQkksS0FBQSxDQUFNLEdBQUcsRUFDVG5LLEdBQUEsQ0FBSzBLLE1BQUEsSUFBa0JBLE1BQUEsQ0FBTUMsSUFBQSxDQUFLLENBQUMsRUFDbkM5SSxNQUFBLENBQU8rSSxPQUFPLElBQ2pCLEVBQUM7UUFFTCxNQUFNRSxRQUFBLEdBQVcsbUJBQUlDLEdBQUEsQ0FBb0I7UUFFekNGLGNBQUEsQ0FBZWxKLE9BQUEsQ0FBUStJLE1BQUEsSUFBUztVQUM5QixNQUFNLENBQUNNLFFBQUEsRUFBVUMsR0FBRyxJQUFJUCxNQUFBLENBQU1QLEtBQUEsQ0FBTSxHQUFHLEVBQUVuSyxHQUFBLENBQUlrTCxJQUFBLElBQVFBLElBQUEsQ0FBS1AsSUFBQSxDQUFLLENBQUM7VUFFaEVHLFFBQUEsQ0FBU0ssR0FBQSxDQUFJSCxRQUFBLEVBQVVDLEdBQUc7UUFDNUIsQ0FBQztRQUVEUixTQUFBLENBQVU5SSxPQUFBLENBQVErSSxNQUFBLElBQVM7VUFDekIsTUFBTSxDQUFDTSxRQUFBLEVBQVVDLEdBQUcsSUFBSVAsTUFBQSxDQUFNUCxLQUFBLENBQU0sR0FBRyxFQUFFbkssR0FBQSxDQUFJa0wsSUFBQSxJQUFRQSxJQUFBLENBQUtQLElBQUEsQ0FBSyxDQUFDO1VBRWhFRyxRQUFBLENBQVNLLEdBQUEsQ0FBSUgsUUFBQSxFQUFVQyxHQUFHO1FBQzVCLENBQUM7UUFFRG5CLGdCQUFBLENBQWlCQyxHQUFHLElBQUk5RixLQUFBLENBQU0yQyxJQUFBLENBQUtrRSxRQUFBLENBQVMvSyxPQUFBLENBQVEsQ0FBQyxFQUNsREMsR0FBQSxDQUFJLENBQUMsQ0FBQ2dMLFFBQUEsRUFBVUMsR0FBRyxNQUFNLEdBQUdELFFBQVEsS0FBS0MsR0FBRyxFQUFFLEVBQzlDVCxJQUFBLENBQUssSUFBSTtNQUNkLE9BQU87UUFDTFYsZ0JBQUEsQ0FBaUJDLEdBQUcsSUFBSTdHLEtBQUE7TUFDMUI7SUFDRixDQUFDO0lBRUQsT0FBTzRHLGdCQUFBO0VBQ1QsR0FBRyxDQUFDLENBQUM7QUFDVDtBQ3ZETyxTQUFTbFQsc0JBQ2R3VSxVQUFBLEVBQ0EzQyxtQkFBQSxFQUNxQjtFQUNyQixPQUFPQSxtQkFBQSxDQUNKNUcsTUFBQSxDQUFPMkgsU0FBQSxJQUFhQSxTQUFBLENBQVV0RCxJQUFBLEtBQVNrRixVQUFBLENBQVdsRixJQUFBLENBQUtqRyxJQUFJLEVBQzNENEIsTUFBQSxDQUFPdUMsSUFBQSxJQUFRQSxJQUFBLENBQUtvRixTQUFBLENBQVVWLFFBQVEsRUFDdEM5SSxHQUFBLENBQUlvRSxJQUFBLElBQVE7SUFDWCxJQUFJLENBQUNBLElBQUEsQ0FBS29GLFNBQUEsQ0FBVVQsVUFBQSxFQUFZO01BQzlCLE9BQU87UUFDTCxDQUFDM0UsSUFBQSxDQUFLbkUsSUFBSSxHQUFHbUwsVUFBQSxDQUFXQyxLQUFBLENBQU1qSCxJQUFBLENBQUtuRSxJQUFJO01BQ3pDO0lBQ0Y7SUFFQSxPQUFPbUUsSUFBQSxDQUFLb0YsU0FBQSxDQUFVVCxVQUFBLENBQVdxQyxVQUFBLENBQVdDLEtBQUssS0FBSyxDQUFDO0VBQ3pELENBQUMsRUFDQXpCLE1BQUEsQ0FBTyxDQUFDTCxVQUFBLEVBQVlDLFNBQUEsS0FBYzNRLGVBQUEsQ0FBZ0IwUSxVQUFBLEVBQVlDLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDakY7QUN0Qk8sU0FBUzdULFdBQVd1TixLQUFBLEVBQWlCO0VBQzFDLElBQUksT0FBT0EsS0FBQSxLQUFVLFVBQVU7SUFDN0IsT0FBT0EsS0FBQTtFQUNUO0VBRUEsSUFBSUEsS0FBQSxDQUFNOEMsS0FBQSxDQUFNLHNCQUFzQixHQUFHO0lBQ3ZDLE9BQU9zRixNQUFBLENBQU9wSSxLQUFLO0VBQ3JCO0VBRUEsSUFBSUEsS0FBQSxLQUFVLFFBQVE7SUFDcEIsT0FBTztFQUNUO0VBRUEsSUFBSUEsS0FBQSxLQUFVLFNBQVM7SUFDckIsT0FBTztFQUNUO0VBRUEsT0FBT0EsS0FBQTtBQUNUO0FDUE8sU0FBUzVMLHFDQUNkaVUsU0FBQSxFQUNBOUMsbUJBQUEsRUFDVztFQUNYLElBQUksV0FBVzhDLFNBQUEsRUFBVztJQUN4QixPQUFPQSxTQUFBO0VBQ1Q7RUFFQSxPQUFPO0lBQ0wsR0FBR0EsU0FBQTtJQUNIOUYsUUFBQSxFQUFXakQsSUFBQSxJQUFzQjtNQUMvQixNQUFNZ0osYUFBQSxHQUFnQkQsU0FBQSxDQUFVOUYsUUFBQSxHQUFXOEYsU0FBQSxDQUFVOUYsUUFBQSxDQUFTakQsSUFBSSxJQUFJK0ksU0FBQSxDQUFVRixLQUFBO01BRWhGLElBQUlHLGFBQUEsS0FBa0IsT0FBTztRQUMzQixPQUFPO01BQ1Q7TUFFQSxNQUFNQyxhQUFBLEdBQWdCaEQsbUJBQUEsQ0FBb0JtQixNQUFBLENBQU8sQ0FBQ0MsS0FBQSxFQUFPekYsSUFBQSxLQUFTO1FBQ2hFLE1BQU1sQixLQUFBLEdBQVFrQixJQUFBLENBQUtvRixTQUFBLENBQVVSLFNBQUEsR0FDekI1RSxJQUFBLENBQUtvRixTQUFBLENBQVVSLFNBQUEsQ0FBVXhHLElBQUksSUFDN0I3TSxVQUFBLENBQVc2TSxJQUFBLENBQUtrSixZQUFBLENBQWF0SCxJQUFBLENBQUtuRSxJQUFJLENBQUM7UUFFM0MsSUFBSWlELEtBQUEsS0FBVSxRQUFRQSxLQUFBLEtBQVUsUUFBVztVQUN6QyxPQUFPMkcsS0FBQTtRQUNUO1FBRUEsT0FBTztVQUNMLEdBQUdBLEtBQUE7VUFDSCxDQUFDekYsSUFBQSxDQUFLbkUsSUFBSSxHQUFHaUQ7UUFDZjtNQUNGLEdBQUcsQ0FBQyxDQUFDO01BRUwsT0FBTztRQUFFLEdBQUdzSSxhQUFBO1FBQWUsR0FBR0M7TUFBYztJQUM5QztFQUNGO0FBQ0Y7QXZFakNBLFNBQVNFLGtCQUFxQkMsSUFBQSxFQUFTO0VBQ3JDLE9BQU8vTCxNQUFBLENBQU9DLFdBQUE7O0VBRVpELE1BQUEsQ0FBT0UsT0FBQSxDQUFRNkwsSUFBSSxFQUFFL0osTUFBQSxDQUFPLENBQUMsQ0FBQ2tJLEdBQUEsRUFBSzdHLEtBQUssTUFBTTtJQUM1QyxJQUFJNkcsR0FBQSxLQUFRLFdBQVduUyxhQUFBLENBQWNzTCxLQUEyQixHQUFHO01BQ2pFLE9BQU87SUFDVDtJQUVBLE9BQU9BLEtBQUEsS0FBVSxRQUFRQSxLQUFBLEtBQVU7RUFDckMsQ0FBQyxDQUNIO0FBQ0Y7QUFRTyxTQUFTcE0sOEJBQThCM0IsVUFBQSxFQUF3QmtLLE1BQUEsRUFBeUI7RUFoQy9GLElBQUF3TSxFQUFBO0VBaUNFLE1BQU1DLGFBQUEsR0FBZ0I5ViwyQkFBQSxDQUE0QmIsVUFBVTtFQUM1RCxNQUFNO0lBQUVvVCxjQUFBO0lBQWdCQztFQUFlLElBQUk3TyxlQUFBLENBQWdCeEUsVUFBVTtFQUNyRSxNQUFNNlAsT0FBQSxJQUFVNkcsRUFBQSxHQUFBdEQsY0FBQSxDQUFld0QsSUFBQSxDQUFLNUUsU0FBQSxJQUFhaFIsaUJBQUEsQ0FBa0JnUixTQUFBLEVBQVcsU0FBUyxDQUFDLE1BQXhFLGdCQUFBMEUsRUFBQSxDQUEyRTVMLElBQUE7RUFFM0YsTUFBTWtGLEtBQUEsR0FBUXRGLE1BQUEsQ0FBT0MsV0FBQSxDQUNuQnlJLGNBQUEsQ0FBZXZJLEdBQUEsQ0FBSW1ILFNBQUEsSUFBYTtJQUM5QixNQUFNc0IsbUJBQUEsR0FBc0JxRCxhQUFBLENBQWNqSyxNQUFBLENBQU8ySCxTQUFBLElBQWFBLFNBQUEsQ0FBVXRELElBQUEsS0FBU2lCLFNBQUEsQ0FBVWxILElBQUk7SUFDL0YsTUFBTW9ILE9BQUEsR0FBVTtNQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtNQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7TUFDbkI0RCxPQUFBLEVBQVNKLFNBQUEsQ0FBVUksT0FBQTtNQUNuQmxJO0lBQ0Y7SUFFQSxNQUFNMk0sZUFBQSxHQUFrQjdXLFVBQUEsQ0FBV3lVLE1BQUEsQ0FBTyxDQUFDcUMsTUFBQSxFQUFRdkcsQ0FBQSxLQUFNO01BQ3ZELE1BQU13RyxnQkFBQSxHQUFtQi9WLGlCQUFBLENBQWlEdVAsQ0FBQSxFQUFHLG9CQUFvQjJCLE9BQU87TUFFeEcsT0FBTztRQUNMLEdBQUc0RSxNQUFBO1FBQ0gsSUFBSUMsZ0JBQUEsR0FBbUJBLGdCQUFBLENBQWlCL0UsU0FBUyxJQUFJLENBQUM7TUFDeEQ7SUFDRixHQUFHLENBQUMsQ0FBQztJQUVMLE1BQU1wSSxNQUFBLEdBQW1CNE0saUJBQUEsQ0FBa0I7TUFDekMsR0FBR0ssZUFBQTtNQUNIdEksT0FBQSxFQUFTcFAsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBeUNnUixTQUFBLEVBQVcsV0FBV0UsT0FBTyxDQUFDO01BQzdGbkMsS0FBQSxFQUFPNVEsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBdUNnUixTQUFBLEVBQVcsU0FBU0UsT0FBTyxDQUFDO01BQ3ZGL0IsS0FBQSxFQUFPaFIsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBdUNnUixTQUFBLEVBQVcsU0FBU0UsT0FBTyxDQUFDO01BQ3ZGOEUsTUFBQSxFQUFRN1gsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBd0NnUixTQUFBLEVBQVcsVUFBVUUsT0FBTyxDQUFDO01BQzFGK0UsSUFBQSxFQUFNOVgsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBc0NnUixTQUFBLEVBQVcsUUFBUUUsT0FBTyxDQUFDO01BQ3BGZ0YsVUFBQSxFQUFZL1gsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBNENnUixTQUFBLEVBQVcsY0FBY0UsT0FBTyxDQUFDO01BQ3RHaUYsU0FBQSxFQUFXaFksWUFBQSxDQUFhNkIsaUJBQUEsQ0FBMkNnUixTQUFBLEVBQVcsYUFBYUUsT0FBTyxDQUFDO01BQ25Ha0YsSUFBQSxFQUFNalksWUFBQSxDQUFhNkIsaUJBQUEsQ0FBc0NnUixTQUFBLEVBQVcsUUFBUUUsT0FBTyxDQUFDO01BQ3BGbUYsVUFBQSxFQUFZbFksWUFBQSxDQUFhNkIsaUJBQUEsQ0FBNENnUixTQUFBLEVBQVcsY0FBY0UsT0FBTyxDQUFDO01BQ3RHb0Ysb0JBQUEsRUFBc0JuWSxZQUFBLENBQ3BCNkIsaUJBQUEsQ0FBc0RnUixTQUFBLEVBQVcsd0JBQXdCRSxPQUFPLENBQ2xHO01BQ0FxRixRQUFBLEVBQVVwWSxZQUFBLENBQWE2QixpQkFBQSxDQUEwQ2dSLFNBQUEsRUFBVyxZQUFZRSxPQUFPLENBQUM7TUFDaEdzRixTQUFBLEVBQVdyWSxZQUFBLENBQWE2QixpQkFBQSxDQUEyQ2dSLFNBQUEsRUFBVyxhQUFhRSxPQUFPLENBQUM7TUFDbkdnRSxLQUFBLEVBQU94TCxNQUFBLENBQU9DLFdBQUEsQ0FDWjJJLG1CQUFBLENBQW9CekksR0FBQSxDQUFJNE0sa0JBQUEsSUFBc0I7UUF6RXhELElBQUFDLEdBQUEsRUFBQUMsRUFBQTtRQTBFWSxPQUFPLENBQ0xGLGtCQUFBLENBQW1CM00sSUFBQSxFQUNuQjtVQUFFMkksT0FBQSxHQUFTaUUsR0FBQSxHQUFBRCxrQkFBQSxvQkFBQUEsa0JBQUEsQ0FBb0JwRCxTQUFBLEtBQXBCLGdCQUFBcUQsR0FBQSxDQUErQmpFLE9BQUE7VUFBU0MsUUFBQSxHQUFVaUUsRUFBQSxHQUFBRixrQkFBQSxvQkFBQUEsa0JBQUEsQ0FBb0JwRCxTQUFBLEtBQXBCLGdCQUFBc0QsRUFBQSxDQUErQmpFO1FBQVMsRUFDdkc7TUFDRixDQUFDLENBQ0g7SUFDRixDQUFDO0lBRUQsTUFBTUcsU0FBQSxHQUFZMVUsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBMkNnUixTQUFBLEVBQVcsYUFBYUUsT0FBTyxDQUFDO0lBRTFHLElBQUkyQixTQUFBLEVBQVc7TUFDYmpLLE1BQUEsQ0FBT3dHLFFBQUEsR0FBV3lELFNBQUEsQ0FBVWhKLEdBQUEsQ0FBSXVMLFNBQUEsSUFDOUJqVSxvQ0FBQSxDQUFxQ2lVLFNBQUEsRUFBVzlDLG1CQUFtQixDQUNyRTtJQUNGO0lBRUEsTUFBTU0sVUFBQSxHQUFhNVMsaUJBQUEsQ0FBNENnUixTQUFBLEVBQVcsY0FBY0UsT0FBTztJQUUvRixJQUFJMEIsVUFBQSxFQUFZO01BQ2RoSyxNQUFBLENBQU9nTyxLQUFBLEdBQVF2SyxJQUFBLElBQ2J1RyxVQUFBLENBQVc7UUFDVHZHLElBQUE7UUFDQXdLLGNBQUEsRUFBZ0JwVyxxQkFBQSxDQUFzQjRMLElBQUEsRUFBTWlHLG1CQUFtQjtNQUNqRSxDQUFDO0lBQ0w7SUFFQSxNQUFNd0UsVUFBQSxHQUFhOVcsaUJBQUEsQ0FBNENnUixTQUFBLEVBQVcsY0FBY0UsT0FBTztJQUUvRixJQUFJNEYsVUFBQSxFQUFZO01BQ2RsTyxNQUFBLENBQU9tTyxNQUFBLEdBQVNELFVBQUE7SUFDbEI7SUFFQSxPQUFPLENBQUM5RixTQUFBLENBQVVsSCxJQUFBLEVBQU1sQixNQUFNO0VBQ2hDLENBQUMsQ0FDSDtFQUVBLE1BQU1tRyxLQUFBLEdBQVFyRixNQUFBLENBQU9DLFdBQUEsQ0FDbkIwSSxjQUFBLENBQWV4SSxHQUFBLENBQUltSCxTQUFBLElBQWE7SUFDOUIsTUFBTXNCLG1CQUFBLEdBQXNCcUQsYUFBQSxDQUFjakssTUFBQSxDQUFPMkgsU0FBQSxJQUFhQSxTQUFBLENBQVV0RCxJQUFBLEtBQVNpQixTQUFBLENBQVVsSCxJQUFJO0lBQy9GLE1BQU1vSCxPQUFBLEdBQVU7TUFDZHBILElBQUEsRUFBTWtILFNBQUEsQ0FBVWxILElBQUE7TUFDaEIwRCxPQUFBLEVBQVN3RCxTQUFBLENBQVV4RCxPQUFBO01BQ25CNEQsT0FBQSxFQUFTSixTQUFBLENBQVVJLE9BQUE7TUFDbkJsSTtJQUNGO0lBRUEsTUFBTThOLGVBQUEsR0FBa0JoWSxVQUFBLENBQVd5VSxNQUFBLENBQU8sQ0FBQ3FDLE1BQUEsRUFBUXZHLENBQUEsS0FBTTtNQUN2RCxNQUFNMEgsZ0JBQUEsR0FBbUJqWCxpQkFBQSxDQUFpRHVQLENBQUEsRUFBRyxvQkFBb0IyQixPQUFPO01BRXhHLE9BQU87UUFDTCxHQUFHNEUsTUFBQTtRQUNILElBQUltQixnQkFBQSxHQUFtQkEsZ0JBQUEsQ0FBaUJqRyxTQUFnQixJQUFJLENBQUM7TUFDL0Q7SUFDRixHQUFHLENBQUMsQ0FBQztJQUVMLE1BQU1wSSxNQUFBLEdBQW1CNE0saUJBQUEsQ0FBa0I7TUFDekMsR0FBR3dCLGVBQUE7TUFDSEUsU0FBQSxFQUFXL1ksWUFBQSxDQUFhNkIsaUJBQUEsQ0FBMkNnUixTQUFBLEVBQVcsYUFBYUUsT0FBTyxDQUFDO01BQ25HaUcsUUFBQSxFQUFVaFosWUFBQSxDQUFhNkIsaUJBQUEsQ0FBMENnUixTQUFBLEVBQVcsWUFBWUUsT0FBTyxDQUFDO01BQ2hHL0IsS0FBQSxFQUFPaFIsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBdUNnUixTQUFBLEVBQVcsU0FBU0UsT0FBTyxDQUFDO01BQ3ZGa0csUUFBQSxFQUFValosWUFBQSxDQUFhNkIsaUJBQUEsQ0FBMENnUixTQUFBLEVBQVcsWUFBWUUsT0FBTyxDQUFDO01BQ2hHa0YsSUFBQSxFQUFNalksWUFBQSxDQUFhNkIsaUJBQUEsQ0FBc0NnUixTQUFBLEVBQVcsUUFBUUUsT0FBTyxDQUFDO01BQ3BGZ0UsS0FBQSxFQUFPeEwsTUFBQSxDQUFPQyxXQUFBLENBQ1oySSxtQkFBQSxDQUFvQnpJLEdBQUEsQ0FBSTRNLGtCQUFBLElBQXNCO1FBekl4RCxJQUFBQyxHQUFBLEVBQUFDLEVBQUE7UUEwSVksT0FBTyxDQUNMRixrQkFBQSxDQUFtQjNNLElBQUEsRUFDbkI7VUFBRTJJLE9BQUEsR0FBU2lFLEdBQUEsR0FBQUQsa0JBQUEsb0JBQUFBLGtCQUFBLENBQW9CcEQsU0FBQSxLQUFwQixnQkFBQXFELEdBQUEsQ0FBK0JqRSxPQUFBO1VBQVNDLFFBQUEsR0FBVWlFLEVBQUEsR0FBQUYsa0JBQUEsb0JBQUFBLGtCQUFBLENBQW9CcEQsU0FBQSxLQUFwQixnQkFBQXNELEVBQUEsQ0FBK0JqRTtRQUFTLEVBQ3ZHO01BQ0YsQ0FBQyxDQUNIO0lBQ0YsQ0FBQztJQUVELE1BQU1HLFNBQUEsR0FBWTFVLFlBQUEsQ0FBYTZCLGlCQUFBLENBQTJDZ1IsU0FBQSxFQUFXLGFBQWFFLE9BQU8sQ0FBQztJQUUxRyxJQUFJMkIsU0FBQSxFQUFXO01BQ2JqSyxNQUFBLENBQU93RyxRQUFBLEdBQVd5RCxTQUFBLENBQVVoSixHQUFBLENBQUl1TCxTQUFBLElBQzlCalUsb0NBQUEsQ0FBcUNpVSxTQUFBLEVBQVc5QyxtQkFBbUIsQ0FDckU7SUFDRjtJQUVBLE1BQU1NLFVBQUEsR0FBYTVTLGlCQUFBLENBQTRDZ1IsU0FBQSxFQUFXLGNBQWNFLE9BQU87SUFFL0YsSUFBSTBCLFVBQUEsRUFBWTtNQUNkaEssTUFBQSxDQUFPZ08sS0FBQSxHQUFRUyxJQUFBLElBQ2J6RSxVQUFBLENBQVc7UUFDVHlFLElBQUE7UUFDQVIsY0FBQSxFQUFnQnBXLHFCQUFBLENBQXNCNFcsSUFBQSxFQUFNL0UsbUJBQW1CO01BQ2pFLENBQUM7SUFDTDtJQUVBLE9BQU8sQ0FBQ3RCLFNBQUEsQ0FBVWxILElBQUEsRUFBTWxCLE1BQU07RUFDaEMsQ0FBQyxDQUNIO0VBRUEsT0FBTyxJQUFJbkUsYUFBQSxDQUFBbUssTUFBQSxDQUFPO0lBQ2hCQyxPQUFBO0lBQ0FHLEtBQUE7SUFDQUQ7RUFDRixDQUFDO0FBQ0g7QXdFMUtPLFNBQVMzUCxlQUFrQnNVLEtBQUEsRUFBaUI7RUFDakQsTUFBTTRELFFBQUEsR0FBVzVELEtBQUEsQ0FBTWhJLE1BQUEsQ0FBTyxDQUFDNkwsRUFBQSxFQUFJQyxLQUFBLEtBQVU5RCxLQUFBLENBQU0rRCxPQUFBLENBQVFGLEVBQUUsTUFBTUMsS0FBSztFQUV4RSxPQUFPMUosS0FBQSxDQUFNMkMsSUFBQSxDQUFLLElBQUlpSCxHQUFBLENBQUlKLFFBQVEsQ0FBQztBQUNyQztBQ0NPLFNBQVMvVCxlQUFldkUsVUFBQSxFQUFvQztFQUNqRSxNQUFNMlksZUFBQSxHQUFrQjtFQUV4QixPQUFPM1ksVUFBQSxDQUFXNFksSUFBQSxDQUFLLENBQUNDLENBQUEsRUFBR0MsQ0FBQSxLQUFNO0lBQy9CLE1BQU1DLFNBQUEsR0FBWS9YLGlCQUFBLENBQXlDNlgsQ0FBQSxFQUFHLFVBQVUsS0FBS0YsZUFBQTtJQUM3RSxNQUFNSyxTQUFBLEdBQVloWSxpQkFBQSxDQUF5QzhYLENBQUEsRUFBRyxVQUFVLEtBQUtILGVBQUE7SUFFN0UsSUFBSUksU0FBQSxHQUFZQyxTQUFBLEVBQVc7TUFDekIsT0FBTztJQUNUO0lBRUEsSUFBSUQsU0FBQSxHQUFZQyxTQUFBLEVBQVc7TUFDekIsT0FBTztJQUNUO0lBRUEsT0FBTztFQUNULENBQUM7QUFDSDtBQ2RPLFNBQVM3VSxrQkFBa0JuRSxVQUFBLEVBQW9DO0VBQ3BFLE1BQU1pWixrQkFBQSxHQUFxQjFVLGNBQUEsQ0FBZWhFLGlCQUFBLENBQWtCUCxVQUFVLENBQUM7RUFDdkUsTUFBTWtaLGVBQUEsR0FBa0I5WSxjQUFBLENBQWU2WSxrQkFBQSxDQUFtQnBPLEdBQUEsQ0FBSW1ILFNBQUEsSUFBYUEsU0FBQSxDQUFVbEgsSUFBSSxDQUFDO0VBRTFGLElBQUlvTyxlQUFBLENBQWdCekwsTUFBQSxFQUFRO0lBQzFCOEIsT0FBQSxDQUFRQyxJQUFBLENBQ04sb0RBQW9EMEosZUFBQSxDQUNqRHJPLEdBQUEsQ0FBSW9FLElBQUEsSUFBUSxJQUFJQSxJQUFJLEdBQUcsRUFDdkJvRyxJQUFBLENBQUssSUFBSSxDQUFDLDZCQUNmO0VBQ0Y7RUFFQSxPQUFPNEQsa0JBQUE7QUFDVDtBQ2pCTyxTQUFTdlgsVUFBVTFCLFVBQUEsRUFBd0JrSyxNQUFBLEVBQXlCO0VBQ3pFLE1BQU0rTyxrQkFBQSxHQUFxQjlVLGlCQUFBLENBQWtCbkUsVUFBVTtFQUV2RCxPQUFPMkIsNkJBQUEsQ0FBOEJzWCxrQkFBQSxFQUFvQi9PLE1BQU07QUFDakU7QTdFQ08sU0FBU3pKLGFBQWE2SSxHQUFBLEVBQWtCdEosVUFBQSxFQUFnQztFQUM3RSxNQUFNNEosTUFBQSxHQUFTbEksU0FBQSxDQUFVMUIsVUFBVTtFQUNuQyxNQUFNbVosV0FBQSxHQUFjNVQsYUFBQSxDQUFBMUcsSUFBQSxDQUFLdWEsUUFBQSxDQUFTeFAsTUFBQSxFQUFRTixHQUFHO0VBRTdDLE9BQU9ySSxtQkFBQSxDQUFvQmtZLFdBQUEsQ0FBWTVLLE9BQUEsRUFBUzNFLE1BQU07QUFDeEQ7QUdMTyxTQUFTbEosYUFBYXlOLElBQUEsRUFBY25PLFVBQUEsRUFBNkM7RUFDdEYsTUFBTTRKLE1BQUEsR0FBU2xJLFNBQUEsQ0FBVTFCLFVBQVU7RUFDbkMsTUFBTXFaLEdBQUEsR0FBTXZaLGlCQUFBLENBQWtCcU8sSUFBSTtFQUVsQyxPQUFPekksYUFBQSxDQUFBMEksU0FBQSxDQUFVcUMsVUFBQSxDQUFXN0csTUFBTSxFQUFFK0csS0FBQSxDQUFNMEksR0FBRyxFQUFFdlAsTUFBQSxDQUFPO0FBQ3hEO0EyRUxPLFNBQVM5SCxlQUNkc1gsU0FBQSxFQUNBL0gsS0FBQSxFQUNBL0MsT0FBQSxFQUlRO0VBQ1IsTUFBTTtJQUFFaUQsSUFBQTtJQUFNQztFQUFHLElBQUlILEtBQUE7RUFDckIsTUFBTTtJQUFFZ0ksY0FBQSxHQUFpQjtJQUFRQyxlQUFBLEdBQWtCLENBQUM7RUFBRSxJQUFJaEwsT0FBQSxJQUFXLENBQUM7RUFDdEUsSUFBSWlMLElBQUEsR0FBTztFQUVYSCxTQUFBLENBQVU5SCxZQUFBLENBQWFDLElBQUEsRUFBTUMsRUFBQSxFQUFJLENBQUNyRSxJQUFBLEVBQU1pRSxHQUFBLEVBQUthLE1BQUEsRUFBUXFHLEtBQUEsS0FBVTtJQXhCakUsSUFBQTlCLEVBQUE7SUF5QkksSUFBSXJKLElBQUEsQ0FBS3FNLE9BQUEsSUFBV3BJLEdBQUEsR0FBTUcsSUFBQSxFQUFNO01BQzlCZ0ksSUFBQSxJQUFRRixjQUFBO0lBQ1Y7SUFFQSxNQUFNSSxjQUFBLEdBQWlCSCxlQUFBLG9CQUFBQSxlQUFBLENBQWtCbk0sSUFBQSxDQUFLMEQsSUFBQSxDQUFLakcsSUFBQTtJQUVuRCxJQUFJNk8sY0FBQSxFQUFnQjtNQUNsQixJQUFJeEgsTUFBQSxFQUFRO1FBQ1ZzSCxJQUFBLElBQVFFLGNBQUEsQ0FBZTtVQUNyQnRNLElBQUE7VUFDQWlFLEdBQUE7VUFDQWEsTUFBQTtVQUNBcUcsS0FBQTtVQUNBakg7UUFDRixDQUFDO01BQ0g7TUFFQSxPQUFPO0lBQ1Q7SUFFQSxJQUFJbEUsSUFBQSxDQUFLdU0sTUFBQSxFQUFRO01BQ2ZILElBQUEsS0FBUS9DLEVBQUEsR0FBQXJKLElBQUEsb0JBQUFBLElBQUEsQ0FBTW9NLElBQUEsS0FBTixnQkFBQS9DLEVBQUEsQ0FBWWpJLEtBQUEsQ0FBTW9MLElBQUEsQ0FBS0MsR0FBQSxDQUFJckksSUFBQSxFQUFNSCxHQUFHLElBQUlBLEdBQUEsRUFBS0ksRUFBQSxHQUFLSixHQUFBO0lBQzVEO0VBQ0YsQ0FBQztFQUVELE9BQU9tSSxJQUFBO0FBQ1Q7QUNyQ08sU0FBUzFYLFFBQ2RzTCxJQUFBLEVBQ0FtQixPQUFBLEVBSUE7RUFDQSxNQUFNK0MsS0FBQSxHQUFRO0lBQ1pFLElBQUEsRUFBTTtJQUNOQyxFQUFBLEVBQUlyRSxJQUFBLENBQUtrQixPQUFBLENBQVF3TDtFQUNuQjtFQUVBLE9BQU8vWCxjQUFBLENBQWVxTCxJQUFBLEVBQU1rRSxLQUFBLEVBQU8vQyxPQUFPO0FBQzVDO0FDbEJPLFNBQVN0TSw2QkFBNkIwSCxNQUFBLEVBQWdEO0VBQzNGLE9BQU9jLE1BQUEsQ0FBT0MsV0FBQSxDQUNaRCxNQUFBLENBQU9FLE9BQUEsQ0FBUWhCLE1BQUEsQ0FBT29HLEtBQUssRUFDeEJ0RCxNQUFBLENBQU8sQ0FBQyxHQUFHVyxJQUFJLE1BQU1BLElBQUEsQ0FBS3lDLElBQUEsQ0FBS2lJLE1BQU0sRUFDckNsTixHQUFBLENBQUksQ0FBQyxDQUFDQyxJQUFBLEVBQU11QyxJQUFJLE1BQU0sQ0FBQ3ZDLElBQUEsRUFBTXVDLElBQUEsQ0FBS3lDLElBQUEsQ0FBS2lJLE1BQU0sQ0FBQyxDQUNuRDtBQUNGO0E1RURPLFNBQVNwWCxhQUNkMkksR0FBQSxFQUNBdEosVUFBQSxFQUNBd08sT0FBQSxFQUlRO0VBQ1IsTUFBTTtJQUFFK0ssY0FBQSxHQUFpQjtJQUFRQyxlQUFBLEdBQWtCLENBQUM7RUFBRSxJQUFJaEwsT0FBQSxJQUFXLENBQUM7RUFDdEUsTUFBTTVFLE1BQUEsR0FBU2xJLFNBQUEsQ0FBVTFCLFVBQVU7RUFDbkMsTUFBTW1aLFdBQUEsR0FBY3hULGFBQUEsQ0FBQTlHLElBQUEsQ0FBS3VhLFFBQUEsQ0FBU3hQLE1BQUEsRUFBUU4sR0FBRztFQUU3QyxPQUFPdkgsT0FBQSxDQUFRb1gsV0FBQSxFQUFhO0lBQzFCSSxjQUFBO0lBQ0FDLGVBQUEsRUFBaUI7TUFDZixHQUFHdFgsNEJBQUEsQ0FBNkIwSCxNQUFNO01BQ3RDLEdBQUc0UDtJQUNMO0VBQ0YsQ0FBQztBQUNIO0E2RS9CTyxTQUFTcFksWUFBWTRZLFVBQUEsRUFBK0JwUSxNQUFBLEVBQTBCO0VBQ25GLElBQUksT0FBT29RLFVBQUEsS0FBZSxVQUFVO0lBQ2xDLElBQUksQ0FBQ3BRLE1BQUEsQ0FBT21HLEtBQUEsQ0FBTWlLLFVBQVUsR0FBRztNQUM3QixNQUFNL0wsS0FBQSxDQUFNLGdDQUFnQytMLFVBQVUsMkNBQTJDO0lBQ25HO0lBRUEsT0FBT3BRLE1BQUEsQ0FBT21HLEtBQUEsQ0FBTWlLLFVBQVU7RUFDaEM7RUFFQSxPQUFPQSxVQUFBO0FBQ1Q7QUNQTyxTQUFTOVksa0JBQWtCaUksS0FBQSxFQUFvQjhRLFVBQUEsRUFBb0Q7RUFDeEcsTUFBTWxKLElBQUEsR0FBTzNQLFdBQUEsQ0FBWTZZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTTtFQUNqRCxNQUFNO0lBQUU2SCxJQUFBO0lBQU1DLEVBQUE7SUFBSXdJO0VBQU0sSUFBSS9RLEtBQUEsQ0FBTUUsU0FBQTtFQUNsQyxNQUFNMEcsS0FBQSxHQUFnQixFQUFDO0VBRXZCLElBQUltSyxLQUFBLEVBQU87SUFDVCxJQUFJL1EsS0FBQSxDQUFNSSxXQUFBLEVBQWE7TUFDckJ3RyxLQUFBLENBQU05RCxJQUFBLENBQUssR0FBRzlDLEtBQUEsQ0FBTUksV0FBVztJQUNqQztJQUVBd0csS0FBQSxDQUFNOUQsSUFBQSxDQUFLLEdBQUc5QyxLQUFBLENBQU1FLFNBQUEsQ0FBVThRLEtBQUEsQ0FBTXBLLEtBQUEsQ0FBTSxDQUFDO0VBQzdDLE9BQU87SUFDTDVHLEtBQUEsQ0FBTUcsR0FBQSxDQUFJa0ksWUFBQSxDQUFhQyxJQUFBLEVBQU1DLEVBQUEsRUFBSXJFLElBQUEsSUFBUTtNQUN2QzBDLEtBQUEsQ0FBTTlELElBQUEsQ0FBSyxHQUFHb0IsSUFBQSxDQUFLMEMsS0FBSztJQUMxQixDQUFDO0VBQ0g7RUFFQSxNQUFNc0ksSUFBQSxHQUFPdEksS0FBQSxDQUFNNkcsSUFBQSxDQUFLd0QsUUFBQSxJQUFZQSxRQUFBLENBQVNySixJQUFBLENBQUtqRyxJQUFBLEtBQVNpRyxJQUFBLENBQUtqRyxJQUFJO0VBRXBFLElBQUksQ0FBQ3VOLElBQUEsRUFBTTtJQUNULE9BQU8sQ0FBQztFQUNWO0VBRUEsT0FBTztJQUFFLEdBQUdBLElBQUEsQ0FBS25DO0VBQU07QUFDekI7QUMzQk8sU0FBUzFVLFlBQVl3WSxVQUFBLEVBQStCcFEsTUFBQSxFQUEwQjtFQUNuRixJQUFJLE9BQU9vUSxVQUFBLEtBQWUsVUFBVTtJQUNsQyxJQUFJLENBQUNwUSxNQUFBLENBQU9vRyxLQUFBLENBQU1nSyxVQUFVLEdBQUc7TUFDN0IsTUFBTS9MLEtBQUEsQ0FBTSxnQ0FBZ0MrTCxVQUFVLDJDQUEyQztJQUNuRztJQUVBLE9BQU9wUSxNQUFBLENBQU9vRyxLQUFBLENBQU1nSyxVQUFVO0VBQ2hDO0VBRUEsT0FBT0EsVUFBQTtBQUNUO0FDUE8sU0FBU3pZLGtCQUFrQjRILEtBQUEsRUFBb0I4USxVQUFBLEVBQW9EO0VBQ3hHLE1BQU1sSixJQUFBLEdBQU92UCxXQUFBLENBQVl5WSxVQUFBLEVBQVk5USxLQUFBLENBQU1TLE1BQU07RUFDakQsTUFBTTtJQUFFNkgsSUFBQTtJQUFNQztFQUFHLElBQUl2SSxLQUFBLENBQU1FLFNBQUE7RUFDM0IsTUFBTTJHLEtBQUEsR0FBZ0IsRUFBQztFQUV2QjdHLEtBQUEsQ0FBTUcsR0FBQSxDQUFJa0ksWUFBQSxDQUFhQyxJQUFBLEVBQU1DLEVBQUEsRUFBSTJJLEtBQUEsSUFBUTtJQUN2Q3JLLEtBQUEsQ0FBTS9ELElBQUEsQ0FBS29PLEtBQUk7RUFDakIsQ0FBQztFQUVELE1BQU1oTixJQUFBLEdBQU8yQyxLQUFBLENBQU1zSyxPQUFBLENBQVEsRUFBRTFELElBQUEsQ0FBSzJELFFBQUEsSUFBWUEsUUFBQSxDQUFTeEosSUFBQSxDQUFLakcsSUFBQSxLQUFTaUcsSUFBQSxDQUFLakcsSUFBSTtFQUU5RSxJQUFJLENBQUN1QyxJQUFBLEVBQU07SUFDVCxPQUFPLENBQUM7RUFDVjtFQUVBLE9BQU87SUFBRSxHQUFHQSxJQUFBLENBQUs2STtFQUFNO0FBQ3pCO0FDYk8sU0FBU3JVLHdCQUF3QmlKLElBQUEsRUFBY2xCLE1BQUEsRUFBd0M7RUFDNUYsSUFBSUEsTUFBQSxDQUFPb0csS0FBQSxDQUFNbEYsSUFBSSxHQUFHO0lBQ3RCLE9BQU87RUFDVDtFQUVBLElBQUlsQixNQUFBLENBQU9tRyxLQUFBLENBQU1qRixJQUFJLEdBQUc7SUFDdEIsT0FBTztFQUNUO0VBRUEsT0FBTztBQUNUO0FDTE8sU0FBU2xLLGNBQWN1SSxLQUFBLEVBQW9COFEsVUFBQSxFQUErRDtFQUMvRyxNQUFNTyxVQUFBLEdBQWEzWSx1QkFBQSxDQUNqQixPQUFPb1ksVUFBQSxLQUFlLFdBQVdBLFVBQUEsR0FBYUEsVUFBQSxDQUFXblAsSUFBQSxFQUN6RDNCLEtBQUEsQ0FBTVMsTUFDUjtFQUVBLElBQUk0USxVQUFBLEtBQWUsUUFBUTtJQUN6QixPQUFPalosaUJBQUEsQ0FBa0I0SCxLQUFBLEVBQU84USxVQUFzQjtFQUN4RDtFQUVBLElBQUlPLFVBQUEsS0FBZSxRQUFRO0lBQ3pCLE9BQU90WixpQkFBQSxDQUFrQmlJLEtBQUEsRUFBTzhRLFVBQXNCO0VBQ3hEO0VBRUEsT0FBTyxDQUFDO0FBQ1Y7QUN4Qk8sU0FBUy9WLGlCQUFvQnVXLEtBQUEsRUFBWUMsRUFBQSxHQUFLQyxJQUFBLENBQUtDLFNBQUEsRUFBZ0I7RUFDeEUsTUFBTUMsSUFBQSxHQUF5QixDQUFDO0VBRWhDLE9BQU9KLEtBQUEsQ0FBTS9OLE1BQUEsQ0FBT3VDLElBQUEsSUFBUTtJQUMxQixNQUFNMkYsR0FBQSxHQUFNOEYsRUFBQSxDQUFHekwsSUFBSTtJQUVuQixPQUFPdkUsTUFBQSxDQUFPb1EsU0FBQSxDQUFVQyxjQUFBLENBQWVDLElBQUEsQ0FBS0gsSUFBQSxFQUFNakcsR0FBRyxJQUFJLFFBQVNpRyxJQUFBLENBQUtqRyxHQUFHLElBQUk7RUFDaEYsQ0FBQztBQUNIO0FDRUEsU0FBU3FHLHNCQUFzQkMsT0FBQSxFQUF5QztFQUN0RSxNQUFNQyxhQUFBLEdBQWdCalgsZ0JBQUEsQ0FBaUJnWCxPQUFPO0VBRTlDLE9BQU9DLGFBQUEsQ0FBYzFOLE1BQUEsS0FBVyxJQUM1QjBOLGFBQUEsR0FDQUEsYUFBQSxDQUFjek8sTUFBQSxDQUFPLENBQUMwTyxNQUFBLEVBQVE1QyxLQUFBLEtBQVU7SUFDdEMsTUFBTTZDLElBQUEsR0FBT0YsYUFBQSxDQUFjek8sTUFBQSxDQUFPLENBQUM0TyxDQUFBLEVBQUc5TixDQUFBLEtBQU1BLENBQUEsS0FBTWdMLEtBQUs7SUFFdkQsT0FBTyxDQUFDNkMsSUFBQSxDQUFLRSxJQUFBLENBQUtDLFdBQUEsSUFBZTtNQUMvQixPQUNFSixNQUFBLENBQU9LLFFBQUEsQ0FBU2hLLElBQUEsSUFBUStKLFdBQUEsQ0FBWUMsUUFBQSxDQUFTaEssSUFBQSxJQUM3QzJKLE1BQUEsQ0FBT0ssUUFBQSxDQUFTL0osRUFBQSxJQUFNOEosV0FBQSxDQUFZQyxRQUFBLENBQVMvSixFQUFBLElBQzNDMEosTUFBQSxDQUFPTSxRQUFBLENBQVNqSyxJQUFBLElBQVErSixXQUFBLENBQVlFLFFBQUEsQ0FBU2pLLElBQUEsSUFDN0MySixNQUFBLENBQU9NLFFBQUEsQ0FBU2hLLEVBQUEsSUFBTThKLFdBQUEsQ0FBWUUsUUFBQSxDQUFTaEssRUFBQTtJQUUvQyxDQUFDO0VBQ0gsQ0FBQztBQUNQO0FBTU8sU0FBUzVRLGlCQUFpQmtNLFNBQUEsRUFBc0M7RUFDckUsTUFBTTtJQUFFMk8sT0FBQTtJQUFTek87RUFBTSxJQUFJRixTQUFBO0VBQzNCLE1BQU1rTyxPQUFBLEdBQTBCLEVBQUM7RUFFakNTLE9BQUEsQ0FBUUMsSUFBQSxDQUFLcFAsT0FBQSxDQUFRLENBQUNxUCxPQUFBLEVBQVNyRCxLQUFBLEtBQVU7SUFDdkMsTUFBTXNELE1BQUEsR0FBa0IsRUFBQztJQUt6QixJQUFJLENBQUNELE9BQUEsQ0FBUUMsTUFBQSxDQUFPck8sTUFBQSxFQUFRO01BQzFCLE1BQU07UUFBRWdFLElBQUE7UUFBTUM7TUFBRyxJQUFJeEUsS0FBQSxDQUFNc0wsS0FBSztNQUtoQyxJQUFJL0csSUFBQSxLQUFTLFVBQWFDLEVBQUEsS0FBTyxRQUFXO1FBQzFDO01BQ0Y7TUFFQW9LLE1BQUEsQ0FBTzdQLElBQUEsQ0FBSztRQUFFd0YsSUFBQTtRQUFNQztNQUFHLENBQUM7SUFDMUIsT0FBTztNQUNMbUssT0FBQSxDQUFRclAsT0FBQSxDQUFRLENBQUNpRixJQUFBLEVBQU1DLEVBQUEsS0FBTztRQUM1Qm9LLE1BQUEsQ0FBTzdQLElBQUEsQ0FBSztVQUFFd0YsSUFBQTtVQUFNQztRQUFHLENBQUM7TUFDMUIsQ0FBQztJQUNIO0lBRUFvSyxNQUFBLENBQU90UCxPQUFBLENBQVEsQ0FBQztNQUFFaUYsSUFBQTtNQUFNQztJQUFHLE1BQU07TUFDL0IsTUFBTXFLLFFBQUEsR0FBV0osT0FBQSxDQUFRbE4sS0FBQSxDQUFNK0osS0FBSyxFQUFFM04sR0FBQSxDQUFJNEcsSUFBQSxFQUFNLEVBQUU7TUFDbEQsTUFBTXVLLE1BQUEsR0FBU0wsT0FBQSxDQUFRbE4sS0FBQSxDQUFNK0osS0FBSyxFQUFFM04sR0FBQSxDQUFJNkcsRUFBRTtNQUMxQyxNQUFNdUssUUFBQSxHQUFXTixPQUFBLENBQVFPLE1BQUEsQ0FBTyxFQUFFclIsR0FBQSxDQUFJa1IsUUFBQSxFQUFVLEVBQUU7TUFDbEQsTUFBTUksTUFBQSxHQUFTUixPQUFBLENBQVFPLE1BQUEsQ0FBTyxFQUFFclIsR0FBQSxDQUFJbVIsTUFBTTtNQUUxQ2QsT0FBQSxDQUFRalAsSUFBQSxDQUFLO1FBQ1h3UCxRQUFBLEVBQVU7VUFDUmhLLElBQUEsRUFBTXdLLFFBQUE7VUFDTnZLLEVBQUEsRUFBSXlLO1FBQ047UUFDQVQsUUFBQSxFQUFVO1VBQ1JqSyxJQUFBLEVBQU1zSyxRQUFBO1VBQ05ySyxFQUFBLEVBQUlzSztRQUNOO01BQ0YsQ0FBQztJQUNILENBQUM7RUFDSCxDQUFDO0VBRUQsT0FBT2YscUJBQUEsQ0FBc0JDLE9BQU87QUFDdEM7QUMzRU8sU0FBU25hLGFBQWFzTSxJQUFBLEVBQXVCK08sV0FBQSxHQUFjLEdBQXFCO0VBQ3JGLE1BQU1DLFNBQUEsR0FBWWhQLElBQUEsQ0FBSzBELElBQUEsS0FBUzFELElBQUEsQ0FBSzBELElBQUEsQ0FBS25ILE1BQUEsQ0FBTzBTLFdBQUE7RUFDakQsTUFBTUMsU0FBQSxHQUFZRixTQUFBLEdBQVksSUFBSTtFQUNsQyxNQUFNNUssSUFBQSxHQUFPMkssV0FBQTtFQUNiLE1BQU0xSyxFQUFBLEdBQUtELElBQUEsR0FBT3BFLElBQUEsQ0FBS21QLFFBQUE7RUFDdkIsTUFBTXpNLEtBQUEsR0FBUTFDLElBQUEsQ0FBSzBDLEtBQUEsQ0FBTWxGLEdBQUEsQ0FBSXdOLElBQUEsSUFBUTtJQUNuQyxNQUFNb0UsT0FBQSxHQUF3RDtNQUM1RDFMLElBQUEsRUFBTXNILElBQUEsQ0FBS3RILElBQUEsQ0FBS2pHO0lBQ2xCO0lBRUEsSUFBSUosTUFBQSxDQUFPd0ksSUFBQSxDQUFLbUYsSUFBQSxDQUFLbkMsS0FBSyxFQUFFekksTUFBQSxFQUFRO01BQ2xDZ1AsT0FBQSxDQUFPdkcsS0FBQSxHQUFRO1FBQUUsR0FBR21DLElBQUEsQ0FBS25DO01BQU07SUFDakM7SUFFQSxPQUFPdUcsT0FBQTtFQUNULENBQUM7RUFDRCxNQUFNdkcsS0FBQSxHQUFRO0lBQUUsR0FBRzdJLElBQUEsQ0FBSzZJO0VBQU07RUFDOUIsTUFBTXdHLE1BQUEsR0FBMkI7SUFDL0IzTCxJQUFBLEVBQU0xRCxJQUFBLENBQUswRCxJQUFBLENBQUtqRyxJQUFBO0lBQ2hCMkcsSUFBQTtJQUNBQztFQUNGO0VBRUEsSUFBSWhILE1BQUEsQ0FBT3dJLElBQUEsQ0FBS2dELEtBQUssRUFBRXpJLE1BQUEsRUFBUTtJQUM3QmlQLE1BQUEsQ0FBT3hHLEtBQUEsR0FBUUEsS0FBQTtFQUNqQjtFQUVBLElBQUluRyxLQUFBLENBQU10QyxNQUFBLEVBQVE7SUFDaEJpUCxNQUFBLENBQU8zTSxLQUFBLEdBQVFBLEtBQUE7RUFDakI7RUFFQSxJQUFJMUMsSUFBQSxDQUFLa0IsT0FBQSxDQUFRb08sVUFBQSxFQUFZO0lBQzNCRCxNQUFBLENBQU9uTyxPQUFBLEdBQVUsRUFBQztJQUVsQmxCLElBQUEsQ0FBS2IsT0FBQSxDQUFRLENBQUNrQixLQUFBLEVBQU9rUCxNQUFBLEtBQVc7TUEzQ3BDLElBQUFsRyxFQUFBO01BNENNLENBQUFBLEVBQUEsR0FBQWdHLE1BQUEsQ0FBT25PLE9BQUEsS0FBUCxnQkFBQW1JLEVBQUEsQ0FBZ0J6SyxJQUFBLENBQUtsTCxZQUFBLENBQWEyTSxLQUFBLEVBQU8wTyxXQUFBLEdBQWNRLE1BQUEsR0FBU0wsU0FBUztJQUMzRSxDQUFDO0VBQ0g7RUFFQSxJQUFJbFAsSUFBQSxDQUFLb00sSUFBQSxFQUFNO0lBQ2JpRCxNQUFBLENBQU9qRCxJQUFBLEdBQU9wTSxJQUFBLENBQUtvTSxJQUFBO0VBQ3JCO0VBRUEsT0FBT2lELE1BQUE7QUFDVDtBQ3JETyxTQUFTdFosU0FBUzJLLEtBQUEsRUFBNkI7RUFDcEQsT0FBT3JELE1BQUEsQ0FBT29RLFNBQUEsQ0FBVStCLFFBQUEsQ0FBUzdCLElBQUEsQ0FBS2pOLEtBQUssTUFBTTtBQUNuRDtBQ0tPLFNBQVNoSyxlQUNkK1ksT0FBQSxFQUNBQyxPQUFBLEVBQ0F2TyxPQUFBLEdBQStCO0VBQUV3TyxNQUFBLEVBQVE7QUFBSyxHQUNyQztFQUNULE1BQU05SixJQUFBLEdBQU94SSxNQUFBLENBQU93SSxJQUFBLENBQUs2SixPQUFPO0VBRWhDLElBQUksQ0FBQzdKLElBQUEsQ0FBS3pGLE1BQUEsRUFBUTtJQUNoQixPQUFPO0VBQ1Q7RUFFQSxPQUFPeUYsSUFBQSxDQUFLbkgsS0FBQSxDQUFNNkksR0FBQSxJQUFPO0lBQ3ZCLElBQUlwRyxPQUFBLENBQVF3TyxNQUFBLEVBQVE7TUFDbEIsT0FBT0QsT0FBQSxDQUFRbkksR0FBRyxNQUFNa0ksT0FBQSxDQUFRbEksR0FBRztJQUNyQztJQUVBLElBQUl4UixRQUFBLENBQVMyWixPQUFBLENBQVFuSSxHQUFHLENBQUMsR0FBRztNQUMxQixPQUFPbUksT0FBQSxDQUFRbkksR0FBRyxFQUFFL0csSUFBQSxDQUFLaVAsT0FBQSxDQUFRbEksR0FBRyxDQUFDO0lBQ3ZDO0lBRUEsT0FBT21JLE9BQUEsQ0FBUW5JLEdBQUcsTUFBTWtJLE9BQUEsQ0FBUWxJLEdBQUc7RUFDckMsQ0FBQztBQUNIO0FDeEJBLFNBQVNxSSxjQUNQbE4sS0FBQSxFQUNBZ0IsSUFBQSxFQUNBcUQsVUFBQSxHQUFrQyxDQUFDLEdBQ047RUFDN0IsT0FBT3JFLEtBQUEsQ0FBTTZHLElBQUEsQ0FBSzNILElBQUEsSUFBUTtJQUN4QixPQUNFQSxJQUFBLENBQUs4QixJQUFBLEtBQVNBLElBQUEsSUFDZGhOLGNBQUE7O0lBRUUyRyxNQUFBLENBQU9DLFdBQUEsQ0FBWUQsTUFBQSxDQUFPd0ksSUFBQSxDQUFLa0IsVUFBVSxFQUFFdkosR0FBQSxDQUFJcVMsQ0FBQSxJQUFLLENBQUNBLENBQUEsRUFBR2pPLElBQUEsQ0FBS2lILEtBQUEsQ0FBTWdILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FDdkU5SSxVQUNGO0VBRUosQ0FBQztBQUNIO0FBRUEsU0FBUytJLFlBQVlwTixLQUFBLEVBQTBCZ0IsSUFBQSxFQUFnQnFELFVBQUEsR0FBa0MsQ0FBQyxHQUFZO0VBQzVHLE9BQU8sQ0FBQyxDQUFDNkksYUFBQSxDQUFjbE4sS0FBQSxFQUFPZ0IsSUFBQSxFQUFNcUQsVUFBVTtBQUNoRDtBQUtPLFNBQVNqVCxhQUlkd1EsSUFBQSxFQUlBWixJQUFBLEVBS0FxRCxVQUFBLEVBQ2M7RUEzQ2hCLElBQUFzQyxFQUFBO0VBNENFLElBQUksQ0FBQy9FLElBQUEsSUFBUSxDQUFDWixJQUFBLEVBQU07SUFDbEI7RUFDRjtFQUNBLElBQUllLEtBQUEsR0FBUUgsSUFBQSxDQUFLUSxNQUFBLENBQU9pTCxVQUFBLENBQVd6TCxJQUFBLENBQUswTCxZQUFZO0VBR3BELElBQUksQ0FBQ3ZMLEtBQUEsQ0FBTXpFLElBQUEsSUFBUSxDQUFDeUUsS0FBQSxDQUFNekUsSUFBQSxDQUFLMEMsS0FBQSxDQUFNd0wsSUFBQSxDQUFLK0IsS0FBQSxJQUFRQSxLQUFBLENBQUt2TSxJQUFBLEtBQVNBLElBQUksR0FBRztJQUNyRWUsS0FBQSxHQUFRSCxJQUFBLENBQUtRLE1BQUEsQ0FBT29MLFdBQUEsQ0FBWTVMLElBQUEsQ0FBSzBMLFlBQVk7RUFDbkQ7RUFHQSxJQUFJLENBQUN2TCxLQUFBLENBQU16RSxJQUFBLElBQVEsQ0FBQ3lFLEtBQUEsQ0FBTXpFLElBQUEsQ0FBSzBDLEtBQUEsQ0FBTXdMLElBQUEsQ0FBSytCLEtBQUEsSUFBUUEsS0FBQSxDQUFLdk0sSUFBQSxLQUFTQSxJQUFJLEdBQUc7SUFDckU7RUFDRjtFQUdBcUQsVUFBQSxHQUFhQSxVQUFBLE1BQWNzQyxFQUFBLEdBQUE1RSxLQUFBLENBQU16RSxJQUFBLENBQUswQyxLQUFBLENBQU0sQ0FBQyxNQUFsQixnQkFBQTJHLEVBQUEsQ0FBcUJSLEtBQUE7RUFJaEQsTUFBTW1DLElBQUEsR0FBTzRFLGFBQUEsQ0FBYyxDQUFDLEdBQUduTCxLQUFBLENBQU16RSxJQUFBLENBQUswQyxLQUFLLEdBQUdnQixJQUFBLEVBQU1xRCxVQUFVO0VBRWxFLElBQUksQ0FBQ2lFLElBQUEsRUFBTTtJQUNUO0VBQ0Y7RUFFQSxJQUFJbUYsVUFBQSxHQUFhMUwsS0FBQSxDQUFNMEcsS0FBQTtFQUN2QixJQUFJaUYsUUFBQSxHQUFXOUwsSUFBQSxDQUFLRyxLQUFBLENBQU0sSUFBSUEsS0FBQSxDQUFNOEssTUFBQTtFQUNwQyxJQUFJYyxRQUFBLEdBQVdGLFVBQUEsR0FBYTtFQUM1QixJQUFJRyxNQUFBLEdBQVNGLFFBQUEsR0FBVzNMLEtBQUEsQ0FBTXpFLElBQUEsQ0FBS21QLFFBQUE7RUFFbkMsT0FBT2dCLFVBQUEsR0FBYSxLQUFLTCxXQUFBLENBQVksQ0FBQyxHQUFHeEwsSUFBQSxDQUFLUSxNQUFBLENBQU96RSxLQUFBLENBQU04UCxVQUFBLEdBQWEsQ0FBQyxFQUFFek4sS0FBSyxHQUFHZ0IsSUFBQSxFQUFNcUQsVUFBVSxHQUFHO0lBQ3BHb0osVUFBQSxJQUFjO0lBQ2RDLFFBQUEsSUFBWTlMLElBQUEsQ0FBS1EsTUFBQSxDQUFPekUsS0FBQSxDQUFNOFAsVUFBVSxFQUFFaEIsUUFBQTtFQUM1QztFQUVBLE9BQU9rQixRQUFBLEdBQVcvTCxJQUFBLENBQUtRLE1BQUEsQ0FBT3dLLFVBQUEsSUFBY1EsV0FBQSxDQUFZLENBQUMsR0FBR3hMLElBQUEsQ0FBS1EsTUFBQSxDQUFPekUsS0FBQSxDQUFNZ1EsUUFBUSxFQUFFM04sS0FBSyxHQUFHZ0IsSUFBQSxFQUFNcUQsVUFBVSxHQUFHO0lBQ2pIdUosTUFBQSxJQUFVaE0sSUFBQSxDQUFLUSxNQUFBLENBQU96RSxLQUFBLENBQU1nUSxRQUFRLEVBQUVsQixRQUFBO0lBQ3RDa0IsUUFBQSxJQUFZO0VBQ2Q7RUFFQSxPQUFPO0lBQ0xqTSxJQUFBLEVBQU1nTSxRQUFBO0lBQ04vTCxFQUFBLEVBQUlpTTtFQUNOO0FBQ0Y7QUNwRk8sU0FBU3RjLGdCQUFnQm9RLElBQUEsRUFBY0MsRUFBQSxFQUFZcEksR0FBQSxFQUFtQztFQUMzRixNQUFNeUcsS0FBQSxHQUFxQixFQUFDO0VBRzVCLElBQUkwQixJQUFBLEtBQVNDLEVBQUEsRUFBSTtJQUNmcEksR0FBQSxDQUNHc1UsT0FBQSxDQUFRbk0sSUFBSSxFQUNaMUIsS0FBQSxDQUFNLEVBQ052RCxPQUFBLENBQVE2TCxJQUFBLElBQVE7TUFDZixNQUFNMUcsSUFBQSxHQUFPckksR0FBQSxDQUFJc1UsT0FBQSxDQUFRbk0sSUFBSTtNQUM3QixNQUFNRixLQUFBLEdBQVFwUSxZQUFBLENBQWF3USxJQUFBLEVBQU0wRyxJQUFBLENBQUt0SCxJQUFJO01BRTFDLElBQUksQ0FBQ1EsS0FBQSxFQUFPO1FBQ1Y7TUFDRjtNQUVBeEIsS0FBQSxDQUFNOUQsSUFBQSxDQUFLO1FBQ1RvTSxJQUFBO1FBQ0EsR0FBRzlHO01BQ0wsQ0FBQztJQUNILENBQUM7RUFDTCxPQUFPO0lBQ0xqSSxHQUFBLENBQUlrSSxZQUFBLENBQWFDLElBQUEsRUFBTUMsRUFBQSxFQUFJLENBQUNyRSxJQUFBLEVBQU1pRSxHQUFBLEtBQVE7TUFDeEMsSUFBSSxDQUFDakUsSUFBQSxLQUFRQSxJQUFBLG9CQUFBQSxJQUFBLENBQU1tUCxRQUFBLE1BQWEsUUFBVztRQUN6QztNQUNGO01BRUF6TSxLQUFBLENBQU05RCxJQUFBLENBQ0osR0FBR29CLElBQUEsQ0FBSzBDLEtBQUEsQ0FBTWxGLEdBQUEsQ0FBSXdOLElBQUEsS0FBUztRQUN6QjVHLElBQUEsRUFBTUgsR0FBQTtRQUNOSSxFQUFBLEVBQUlKLEdBQUEsR0FBTWpFLElBQUEsQ0FBS21QLFFBQUE7UUFDZm5FO01BQ0YsRUFBRSxDQUNKO0lBQ0YsQ0FBQztFQUNIO0VBRUEsT0FBT3RJLEtBQUE7QUFDVDtBQ2hDTyxJQUFNek8saUJBQUEsR0FBb0JBLENBQUM2SCxLQUFBLEVBQW9COFEsVUFBQSxFQUErQjNJLEdBQUEsRUFBYXVNLFFBQUEsR0FBVyxPQUFPO0VBQ2xILE1BQU1sTSxJQUFBLEdBQU94SSxLQUFBLENBQU1HLEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUXRNLEdBQUc7RUFFbEMsSUFBSXdNLFlBQUEsR0FBZUQsUUFBQTtFQUNuQixJQUFJeFEsSUFBQSxHQUFvQjtFQUV4QixPQUFPeVEsWUFBQSxHQUFlLEtBQUt6USxJQUFBLEtBQVMsTUFBTTtJQUN4QyxNQUFNMFEsV0FBQSxHQUFjcE0sSUFBQSxDQUFLdEUsSUFBQSxDQUFLeVEsWUFBWTtJQUUxQyxLQUFJQyxXQUFBLG9CQUFBQSxXQUFBLENBQWFoTixJQUFBLENBQUtqRyxJQUFBLE1BQVNtUCxVQUFBLEVBQVk7TUFDekM1TSxJQUFBLEdBQU8wUSxXQUFBO0lBQ1QsT0FBTztNQUNMRCxZQUFBLElBQWdCO0lBQ2xCO0VBQ0Y7RUFFQSxPQUFPLENBQUN6USxJQUFBLEVBQU15USxZQUFZO0FBQzVCO0FDcEJPLFNBQVNsYyxvQkFBb0JrSixJQUFBLEVBQWNsQixNQUFBLEVBQTRDO0VBQzVGLE9BQU9BLE1BQUEsQ0FBT29HLEtBQUEsQ0FBTWxGLElBQUksS0FBS2xCLE1BQUEsQ0FBT21HLEtBQUEsQ0FBTWpGLElBQUksS0FBSztBQUNyRDtBQ0RPLFNBQVNoSixzQkFDZHdSLG1CQUFBLEVBQ0EwSyxRQUFBLEVBQ0E1SixVQUFBLEVBQ3FCO0VBQ3JCLE9BQU8xSixNQUFBLENBQU9DLFdBQUEsQ0FDWkQsTUFBQSxDQUFPRSxPQUFBLENBQVF3SixVQUFVLEVBQUUxSCxNQUFBLENBQU8sQ0FBQyxDQUFDNUIsSUFBSSxNQUFNO0lBQzVDLE1BQU0yTSxrQkFBQSxHQUFxQm5FLG1CQUFBLENBQW9Cc0QsSUFBQSxDQUFLM0gsSUFBQSxJQUFRO01BQzFELE9BQU9BLElBQUEsQ0FBSzhCLElBQUEsS0FBU2lOLFFBQUEsSUFBWS9PLElBQUEsQ0FBS25FLElBQUEsS0FBU0EsSUFBQTtJQUNqRCxDQUFDO0lBRUQsSUFBSSxDQUFDMk0sa0JBQUEsRUFBb0I7TUFDdkIsT0FBTztJQUNUO0lBRUEsT0FBT0Esa0JBQUEsQ0FBbUJwRCxTQUFBLENBQVVQLFdBQUE7RUFDdEMsQ0FBQyxDQUNIO0FBQ0Y7QUNuQk8sSUFBTTdSLHVCQUFBLEdBQTBCQSxDQUFDOFAsS0FBQSxFQUFvQmtNLFFBQUEsR0FBVyxRQUFRO0VBQzdFLElBQUlDLFVBQUEsR0FBYTtFQUVqQixNQUFNQyxXQUFBLEdBQWNwTSxLQUFBLENBQU1zTCxZQUFBO0VBRTFCdEwsS0FBQSxDQUFNSSxNQUFBLENBQU9YLFlBQUEsQ0FBYXFJLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUdxRSxXQUFBLEdBQWNGLFFBQVEsR0FBR0UsV0FBQSxFQUFhLENBQUM5USxJQUFBLEVBQU1pRSxHQUFBLEVBQUthLE1BQUEsRUFBUXFHLEtBQUEsS0FBVTtJQWI1RyxJQUFBOUIsRUFBQSxFQUFBaUIsRUFBQTtJQWNJLE1BQU15RyxLQUFBLEtBQ0p6RyxFQUFBLElBQUFqQixFQUFBLEdBQUFySixJQUFBLENBQUswRCxJQUFBLENBQUtqQixJQUFBLEVBQUtpSSxNQUFBLEtBQWYsZ0JBQUFKLEVBQUEsQ0FBQXFELElBQUEsQ0FBQXRFLEVBQUEsRUFBd0I7TUFDdEJySixJQUFBO01BQ0FpRSxHQUFBO01BQ0FhLE1BQUE7TUFDQXFHO0lBQ0YsT0FDQW5MLElBQUEsQ0FBS2dSLFdBQUEsSUFDTDtJQUVGSCxVQUFBLElBQWM3USxJQUFBLENBQUtpUixNQUFBLElBQVUsQ0FBQ2pSLElBQUEsQ0FBS3VNLE1BQUEsR0FBU3dFLEtBQUEsR0FBUUEsS0FBQSxDQUFNM1AsS0FBQSxDQUFNLEdBQUdvTCxJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHcUUsV0FBQSxHQUFjN00sR0FBRyxDQUFDO0VBQ25HLENBQUM7RUFFRCxPQUFPNE0sVUFBQTtBQUNUO0FDckJPLFNBQVNwYixhQUNkcUcsS0FBQSxFQUNBOFEsVUFBQSxFQUNBN0YsVUFBQSxHQUFrQyxDQUFDLEdBQzFCO0VBQ1QsTUFBTTtJQUFFOEYsS0FBQTtJQUFPNEI7RUFBTyxJQUFJM1MsS0FBQSxDQUFNRSxTQUFBO0VBQ2hDLE1BQU0wSCxJQUFBLEdBQU9rSixVQUFBLEdBQWE3WSxXQUFBLENBQVk2WSxVQUFBLEVBQVk5USxLQUFBLENBQU1TLE1BQU0sSUFBSTtFQUVsRSxJQUFJc1EsS0FBQSxFQUFPO0lBQ1QsT0FBTyxDQUFDLEVBQUUvUSxLQUFBLENBQU1JLFdBQUEsSUFBZUosS0FBQSxDQUFNRSxTQUFBLENBQVUwSSxLQUFBLENBQU1oQyxLQUFBLENBQU0sR0FDeERyRCxNQUFBLENBQU8yTCxJQUFBLElBQVE7TUFDZCxJQUFJLENBQUN0SCxJQUFBLEVBQU07UUFDVCxPQUFPO01BQ1Q7TUFFQSxPQUFPQSxJQUFBLENBQUtqRyxJQUFBLEtBQVN1TixJQUFBLENBQUt0SCxJQUFBLENBQUtqRyxJQUFBO0lBQ2pDLENBQUMsRUFDQThMLElBQUEsQ0FBS3lCLElBQUEsSUFBUXRVLGNBQUEsQ0FBZXNVLElBQUEsQ0FBS25DLEtBQUEsRUFBTzlCLFVBQUEsRUFBWTtNQUFFNEksTUFBQSxFQUFRO0lBQU0sQ0FBQyxDQUFDO0VBQzNFO0VBRUEsSUFBSXVCLGNBQUEsR0FBaUI7RUFDckIsTUFBTUMsVUFBQSxHQUEwQixFQUFDO0VBRWpDMUMsTUFBQSxDQUFPdFAsT0FBQSxDQUFRLENBQUM7SUFBRXVGLEtBQUE7SUFBTzBNO0VBQUksTUFBTTtJQUNqQyxNQUFNaE4sSUFBQSxHQUFPTSxLQUFBLENBQU1ULEdBQUE7SUFDbkIsTUFBTUksRUFBQSxHQUFLK00sR0FBQSxDQUFJbk4sR0FBQTtJQUVmbkksS0FBQSxDQUFNRyxHQUFBLENBQUlrSSxZQUFBLENBQWFDLElBQUEsRUFBTUMsRUFBQSxFQUFJLENBQUNyRSxJQUFBLEVBQU1pRSxHQUFBLEtBQVE7TUFDOUMsSUFBSSxDQUFDakUsSUFBQSxDQUFLdU0sTUFBQSxJQUFVLENBQUN2TSxJQUFBLENBQUswQyxLQUFBLENBQU10QyxNQUFBLEVBQVE7UUFDdEM7TUFDRjtNQUVBLE1BQU1pUixZQUFBLEdBQWU3RSxJQUFBLENBQUtDLEdBQUEsQ0FBSXJJLElBQUEsRUFBTUgsR0FBRztNQUN2QyxNQUFNcU4sVUFBQSxHQUFhOUUsSUFBQSxDQUFLK0UsR0FBQSxDQUFJbE4sRUFBQSxFQUFJSixHQUFBLEdBQU1qRSxJQUFBLENBQUttUCxRQUFRO01BQ25ELE1BQU1xQyxNQUFBLEdBQVFGLFVBQUEsR0FBYUQsWUFBQTtNQUUzQkgsY0FBQSxJQUFrQk0sTUFBQTtNQUVsQkwsVUFBQSxDQUFXdlMsSUFBQSxDQUNULEdBQUdvQixJQUFBLENBQUswQyxLQUFBLENBQU1sRixHQUFBLENBQUl3TixJQUFBLEtBQVM7UUFDekJBLElBQUE7UUFDQTVHLElBQUEsRUFBTWlOLFlBQUE7UUFDTmhOLEVBQUEsRUFBSWlOO01BQ04sRUFBRSxDQUNKO0lBQ0YsQ0FBQztFQUNILENBQUM7RUFFRCxJQUFJSixjQUFBLEtBQW1CLEdBQUc7SUFDeEIsT0FBTztFQUNUO0VBR0EsTUFBTU8sWUFBQSxHQUFlTixVQUFBLENBQ2xCOVIsTUFBQSxDQUFPcVMsU0FBQSxJQUFhO0lBQ25CLElBQUksQ0FBQ2hPLElBQUEsRUFBTTtNQUNULE9BQU87SUFDVDtJQUVBLE9BQU9BLElBQUEsQ0FBS2pHLElBQUEsS0FBU2lVLFNBQUEsQ0FBVTFHLElBQUEsQ0FBS3RILElBQUEsQ0FBS2pHLElBQUE7RUFDM0MsQ0FBQyxFQUNBNEIsTUFBQSxDQUFPcVMsU0FBQSxJQUFhaGIsY0FBQSxDQUFlZ2IsU0FBQSxDQUFVMUcsSUFBQSxDQUFLbkMsS0FBQSxFQUFPOUIsVUFBQSxFQUFZO0lBQUU0SSxNQUFBLEVBQVE7RUFBTSxDQUFDLENBQUMsRUFDdkZ2SSxNQUFBLENBQU8sQ0FBQ3VLLEdBQUEsRUFBS0QsU0FBQSxLQUFjQyxHQUFBLEdBQU1ELFNBQUEsQ0FBVXJOLEVBQUEsR0FBS3FOLFNBQUEsQ0FBVXROLElBQUEsRUFBTSxDQUFDO0VBSXBFLE1BQU13TixhQUFBLEdBQWdCVCxVQUFBLENBQ25COVIsTUFBQSxDQUFPcVMsU0FBQSxJQUFhO0lBQ25CLElBQUksQ0FBQ2hPLElBQUEsRUFBTTtNQUNULE9BQU87SUFDVDtJQUVBLE9BQU9nTyxTQUFBLENBQVUxRyxJQUFBLENBQUt0SCxJQUFBLEtBQVNBLElBQUEsSUFBUWdPLFNBQUEsQ0FBVTFHLElBQUEsQ0FBS3RILElBQUEsQ0FBS29ILFFBQUEsQ0FBU3BILElBQUk7RUFDMUUsQ0FBQyxFQUNBMEQsTUFBQSxDQUFPLENBQUN1SyxHQUFBLEVBQUtELFNBQUEsS0FBY0MsR0FBQSxHQUFNRCxTQUFBLENBQVVyTixFQUFBLEdBQUtxTixTQUFBLENBQVV0TixJQUFBLEVBQU0sQ0FBQztFQUlwRSxNQUFNRixLQUFBLEdBQVF1TixZQUFBLEdBQWUsSUFBSUEsWUFBQSxHQUFlRyxhQUFBLEdBQWdCSCxZQUFBO0VBRWhFLE9BQU92TixLQUFBLElBQVNnTixjQUFBO0FBQ2xCO0FDakZPLFNBQVN4YixhQUNkb0csS0FBQSxFQUNBOFEsVUFBQSxFQUNBN0YsVUFBQSxHQUFrQyxDQUFDLEdBQzFCO0VBQ1QsTUFBTTtJQUFFM0MsSUFBQTtJQUFNQyxFQUFBO0lBQUl3STtFQUFNLElBQUkvUSxLQUFBLENBQU1FLFNBQUE7RUFDbEMsTUFBTTBILElBQUEsR0FBT2tKLFVBQUEsR0FBYXpZLFdBQUEsQ0FBWXlZLFVBQUEsRUFBWTlRLEtBQUEsQ0FBTVMsTUFBTSxJQUFJO0VBRWxFLE1BQU1zVixVQUFBLEdBQTBCLEVBQUM7RUFFakMvVixLQUFBLENBQU1HLEdBQUEsQ0FBSWtJLFlBQUEsQ0FBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUksQ0FBQ3JFLElBQUEsRUFBTWlFLEdBQUEsS0FBUTtJQUM5QyxJQUFJakUsSUFBQSxDQUFLdU0sTUFBQSxFQUFRO01BQ2Y7SUFDRjtJQUVBLE1BQU04RSxZQUFBLEdBQWU3RSxJQUFBLENBQUtDLEdBQUEsQ0FBSXJJLElBQUEsRUFBTUgsR0FBRztJQUN2QyxNQUFNcU4sVUFBQSxHQUFhOUUsSUFBQSxDQUFLK0UsR0FBQSxDQUFJbE4sRUFBQSxFQUFJSixHQUFBLEdBQU1qRSxJQUFBLENBQUttUCxRQUFRO0lBRW5EMEMsVUFBQSxDQUFXalQsSUFBQSxDQUFLO01BQ2RvQixJQUFBO01BQ0FvRSxJQUFBLEVBQU1pTixZQUFBO01BQ05oTixFQUFBLEVBQUlpTjtJQUNOLENBQUM7RUFDSCxDQUFDO0VBRUQsTUFBTUosY0FBQSxHQUFpQjdNLEVBQUEsR0FBS0QsSUFBQTtFQUM1QixNQUFNME4saUJBQUEsR0FBb0JELFVBQUEsQ0FDdkJ4UyxNQUFBLENBQU8wUyxTQUFBLElBQWE7SUFDbkIsSUFBSSxDQUFDck8sSUFBQSxFQUFNO01BQ1QsT0FBTztJQUNUO0lBRUEsT0FBT0EsSUFBQSxDQUFLakcsSUFBQSxLQUFTc1UsU0FBQSxDQUFVL1IsSUFBQSxDQUFLMEQsSUFBQSxDQUFLakcsSUFBQTtFQUMzQyxDQUFDLEVBQ0E0QixNQUFBLENBQU8wUyxTQUFBLElBQWFyYixjQUFBLENBQWVxYixTQUFBLENBQVUvUixJQUFBLENBQUs2SSxLQUFBLEVBQU85QixVQUFBLEVBQVk7SUFBRTRJLE1BQUEsRUFBUTtFQUFNLENBQUMsQ0FBQztFQUUxRixJQUFJOUMsS0FBQSxFQUFPO0lBQ1QsT0FBTyxDQUFDLENBQUNpRixpQkFBQSxDQUFrQjFSLE1BQUE7RUFDN0I7RUFFQSxNQUFNOEQsS0FBQSxHQUFRNE4saUJBQUEsQ0FBa0IxSyxNQUFBLENBQU8sQ0FBQ3VLLEdBQUEsRUFBS0ksU0FBQSxLQUFjSixHQUFBLEdBQU1JLFNBQUEsQ0FBVTFOLEVBQUEsR0FBSzBOLFNBQUEsQ0FBVTNOLElBQUEsRUFBTSxDQUFDO0VBRWpHLE9BQU9GLEtBQUEsSUFBU2dOLGNBQUE7QUFDbEI7QUM1Q08sU0FBU2xjLFNBQVM4RyxLQUFBLEVBQW9CMkIsSUFBQSxFQUFxQnNKLFVBQUEsR0FBa0MsQ0FBQyxHQUFZO0VBQy9HLElBQUksQ0FBQ3RKLElBQUEsRUFBTTtJQUNULE9BQU8vSCxZQUFBLENBQWFvRyxLQUFBLEVBQU8sTUFBTWlMLFVBQVUsS0FBS3RSLFlBQUEsQ0FBYXFHLEtBQUEsRUFBTyxNQUFNaUwsVUFBVTtFQUN0RjtFQUVBLE1BQU1vRyxVQUFBLEdBQWEzWSx1QkFBQSxDQUF3QmlKLElBQUEsRUFBTTNCLEtBQUEsQ0FBTVMsTUFBTTtFQUU3RCxJQUFJNFEsVUFBQSxLQUFlLFFBQVE7SUFDekIsT0FBT3pYLFlBQUEsQ0FBYW9HLEtBQUEsRUFBTzJCLElBQUEsRUFBTXNKLFVBQVU7RUFDN0M7RUFFQSxJQUFJb0csVUFBQSxLQUFlLFFBQVE7SUFDekIsT0FBTzFYLFlBQUEsQ0FBYXFHLEtBQUEsRUFBTzJCLElBQUEsRUFBTXNKLFVBQVU7RUFDN0M7RUFFQSxPQUFPO0FBQ1Q7QUNsQk8sSUFBTTdSLGFBQUEsR0FBZ0JBLENBQUM0RyxLQUFBLEVBQW9Cd0UsUUFBQSxLQUFzQjtFQUN0RSxNQUFNO0lBQUVvRSxLQUFBO0lBQU8wTSxHQUFBO0lBQUtZO0VBQVEsSUFBSWxXLEtBQUEsQ0FBTUUsU0FBQTtFQUV0QyxJQUFJc0UsUUFBQSxFQUFVO0lBQ1osTUFBTTJSLFVBQUEsR0FBYWpmLGNBQUEsQ0FBZWdOLElBQUEsSUFBUUEsSUFBQSxDQUFLMEQsSUFBQSxDQUFLakcsSUFBQSxLQUFTNkMsUUFBUSxFQUFFeEUsS0FBQSxDQUFNRSxTQUFTO0lBRXRGLElBQUksQ0FBQ2lXLFVBQUEsRUFBWTtNQUNmLE9BQU87SUFDVDtJQUVBLE1BQU1DLFVBQUEsR0FBYXBXLEtBQUEsQ0FBTUcsR0FBQSxDQUFJc1UsT0FBQSxDQUFRMEIsVUFBQSxDQUFXaE8sR0FBQSxHQUFNLENBQUM7SUFFdkQsSUFBSStOLE9BQUEsQ0FBUS9OLEdBQUEsR0FBTSxNQUFNaU8sVUFBQSxDQUFXQyxHQUFBLENBQUksR0FBRztNQUN4QyxPQUFPO0lBQ1Q7SUFFQSxPQUFPO0VBQ1Q7RUFFQSxJQUFJZixHQUFBLENBQUlwQixZQUFBLEdBQWVvQixHQUFBLENBQUl0TSxNQUFBLENBQU9xSyxRQUFBLEdBQVcsS0FBS3pLLEtBQUEsQ0FBTVQsR0FBQSxLQUFRbU4sR0FBQSxDQUFJbk4sR0FBQSxFQUFLO0lBQ3ZFLE9BQU87RUFDVDtFQUVBLE9BQU87QUFDVDtBQzFCTyxJQUFNOU8sZUFBQSxHQUFtQjJHLEtBQUEsSUFBdUI7RUFDckQsTUFBTTtJQUFFNEksS0FBQTtJQUFPME07RUFBSSxJQUFJdFYsS0FBQSxDQUFNRSxTQUFBO0VBRTdCLElBQUkwSSxLQUFBLENBQU1zTCxZQUFBLEdBQWUsS0FBS3RMLEtBQUEsQ0FBTVQsR0FBQSxLQUFRbU4sR0FBQSxDQUFJbk4sR0FBQSxFQUFLO0lBQ25ELE9BQU87RUFDVDtFQUVBLE9BQU87QUFDVDtBQ1JPLFNBQVM1Tyx3QkFBd0JzUCxTQUFBLEVBQXlCeU4sT0FBQSxFQUErQjtFQUM5RixJQUFJM1EsS0FBQSxDQUFNQyxPQUFBLENBQVEwUSxPQUFPLEdBQUc7SUFDMUIsT0FBT0EsT0FBQSxDQUFRbEUsSUFBQSxDQUFLbUUsZ0JBQUEsSUFBb0I7TUFDdEMsTUFBTTVVLElBQUEsR0FBTyxPQUFPNFUsZ0JBQUEsS0FBcUIsV0FBV0EsZ0JBQUEsR0FBbUJBLGdCQUFBLENBQWlCNVUsSUFBQTtNQUV4RixPQUFPQSxJQUFBLEtBQVNrSCxTQUFBLENBQVVsSCxJQUFBO0lBQzVCLENBQUM7RUFDSDtFQUVBLE9BQU8yVSxPQUFBO0FBQ1Q7QUNOTyxTQUFTN2MsT0FBT2tJLElBQUEsRUFBYzlLLFVBQUEsRUFBaUM7RUFDcEUsTUFBTTtJQUFFb1Q7RUFBZSxJQUFJNU8sZUFBQSxDQUFnQnhFLFVBQVU7RUFDckQsTUFBTWdTLFNBQUEsR0FBWW9CLGNBQUEsQ0FBZXdELElBQUEsQ0FBSzNILElBQUEsSUFBUUEsSUFBQSxDQUFLbkUsSUFBQSxLQUFTQSxJQUFJO0VBRWhFLElBQUksQ0FBQ2tILFNBQUEsRUFBVztJQUNkLE9BQU87RUFDVDtFQUVBLE1BQU1FLE9BQUEsR0FBVTtJQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtJQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7SUFDbkI0RCxPQUFBLEVBQVNKLFNBQUEsQ0FBVUk7RUFDckI7RUFDQSxNQUFNakMsS0FBQSxHQUFRaFIsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBdUNnUixTQUFBLEVBQVcsU0FBU0UsT0FBTyxDQUFDO0VBRTlGLElBQUksT0FBTy9CLEtBQUEsS0FBVSxVQUFVO0lBQzdCLE9BQU87RUFDVDtFQUVBLE9BQU9BLEtBQUEsQ0FBTTZFLEtBQUEsQ0FBTSxHQUFHLEVBQUVJLFFBQUEsQ0FBUyxNQUFNO0FBQ3pDO0FDckJPLFNBQVNwUyxZQUNkcUssSUFBQSxFQUNBO0VBQ0VzUyxhQUFBLEdBQWdCO0VBQ2hCQyxnQkFBQSxHQUFtQjtBQUNyQixJQVNJLENBQUMsR0FDSTtFQXBCWCxJQUFBbEosRUFBQTtFQXFCRSxJQUFJa0osZ0JBQUEsRUFBa0I7SUFDcEIsSUFBSXZTLElBQUEsQ0FBSzBELElBQUEsQ0FBS2pHLElBQUEsS0FBUyxhQUFhO01BRWxDLE9BQU87SUFDVDtJQUNBLElBQUl1QyxJQUFBLENBQUt1TSxNQUFBLEVBQVE7TUFDZixPQUFPLFNBQVMvTCxJQUFBLEVBQUs2SSxFQUFBLEdBQUFySixJQUFBLENBQUtvTSxJQUFBLEtBQUwsT0FBQS9DLEVBQUEsR0FBYSxFQUFFO0lBQ3RDO0VBQ0Y7RUFFQSxJQUFJckosSUFBQSxDQUFLdU0sTUFBQSxFQUFRO0lBQ2YsT0FBTyxDQUFDdk0sSUFBQSxDQUFLb00sSUFBQTtFQUNmO0VBRUEsSUFBSXBNLElBQUEsQ0FBS2lSLE1BQUEsSUFBVWpSLElBQUEsQ0FBS3dTLE1BQUEsRUFBUTtJQUM5QixPQUFPO0VBQ1Q7RUFFQSxJQUFJeFMsSUFBQSxDQUFLa0IsT0FBQSxDQUFRb08sVUFBQSxLQUFlLEdBQUc7SUFDakMsT0FBTztFQUNUO0VBRUEsSUFBSWdELGFBQUEsRUFBZTtJQUNqQixJQUFJRyxjQUFBLEdBQWlCO0lBRXJCelMsSUFBQSxDQUFLa0IsT0FBQSxDQUFRL0IsT0FBQSxDQUFRdVQsU0FBQSxJQUFhO01BQ2hDLElBQUlELGNBQUEsS0FBbUIsT0FBTztRQUU1QjtNQUNGO01BRUEsSUFBSSxDQUFDOWMsV0FBQSxDQUFZK2MsU0FBQSxFQUFXO1FBQUVILGdCQUFBO1FBQWtCRDtNQUFjLENBQUMsR0FBRztRQUNoRUcsY0FBQSxHQUFpQjtNQUNuQjtJQUNGLENBQUM7SUFFRCxPQUFPQSxjQUFBO0VBQ1Q7RUFFQSxPQUFPO0FBQ1Q7QXBHM0RPLFNBQVM3YyxnQkFBZ0I4SyxLQUFBLEVBQXdDO0VBQ3RFLE9BQU9BLEtBQUEsWUFBaUJuSSxhQUFBLENBQUFvYSxhQUFBO0FBQzFCO0FDRk8sU0FBUzFjLGdCQUFnQnlLLEtBQUEsRUFBd0M7RUFDdEUsT0FBT0EsS0FBQSxZQUFpQmxJLGFBQUEsQ0FBQW9hLGFBQUE7QUFDMUI7QW9HSk8sU0FBU3JjLE9BQU9tSyxLQUFBLEdBQVEsR0FBRzZRLEdBQUEsR0FBTSxHQUFHOUUsR0FBQSxHQUFNLEdBQVc7RUFDMUQsT0FBT0QsSUFBQSxDQUFLK0UsR0FBQSxDQUFJL0UsSUFBQSxDQUFLQyxHQUFBLENBQUkvTCxLQUFBLEVBQU82USxHQUFHLEdBQUc5RSxHQUFHO0FBQzNDO0FDRU8sU0FBUzdWLGFBQWF1RyxJQUFBLEVBQWtCaUgsSUFBQSxFQUFjQyxFQUFBLEVBQXFCO0VBQ2hGLE1BQU13TyxNQUFBLEdBQVM7RUFDZixNQUFNQyxNQUFBLEdBQVMzVixJQUFBLENBQUtyQixLQUFBLENBQU1HLEdBQUEsQ0FBSWlGLE9BQUEsQ0FBUXdMLElBQUE7RUFDdEMsTUFBTXFHLFlBQUEsR0FBZXhjLE1BQUEsQ0FBTzZOLElBQUEsRUFBTXlPLE1BQUEsRUFBUUMsTUFBTTtFQUNoRCxNQUFNRSxXQUFBLEdBQWN6YyxNQUFBLENBQU84TixFQUFBLEVBQUl3TyxNQUFBLEVBQVFDLE1BQU07RUFDN0MsTUFBTXJPLEtBQUEsR0FBUXRILElBQUEsQ0FBSzhWLFdBQUEsQ0FBWUYsWUFBWTtFQUMzQyxNQUFNWixHQUFBLEdBQU1oVixJQUFBLENBQUs4VixXQUFBLENBQVlELFdBQUEsRUFBYSxFQUFFO0VBQzVDLE1BQU1FLEdBQUEsR0FBTTFHLElBQUEsQ0FBSytFLEdBQUEsQ0FBSTlNLEtBQUEsQ0FBTXlPLEdBQUEsRUFBS2YsR0FBQSxDQUFJZSxHQUFHO0VBQ3ZDLE1BQU1DLE1BQUEsR0FBUzNHLElBQUEsQ0FBS0MsR0FBQSxDQUFJaEksS0FBQSxDQUFNME8sTUFBQSxFQUFRaEIsR0FBQSxDQUFJZ0IsTUFBTTtFQUNoRCxNQUFNQyxJQUFBLEdBQU81RyxJQUFBLENBQUsrRSxHQUFBLENBQUk5TSxLQUFBLENBQU0yTyxJQUFBLEVBQU1qQixHQUFBLENBQUlpQixJQUFJO0VBQzFDLE1BQU1DLEtBQUEsR0FBUTdHLElBQUEsQ0FBS0MsR0FBQSxDQUFJaEksS0FBQSxDQUFNNE8sS0FBQSxFQUFPbEIsR0FBQSxDQUFJa0IsS0FBSztFQUM3QyxNQUFNQyxLQUFBLEdBQVFELEtBQUEsR0FBUUQsSUFBQTtFQUN0QixNQUFNRyxNQUFBLEdBQVNKLE1BQUEsR0FBU0QsR0FBQTtFQUN4QixNQUFNTSxDQUFBLEdBQUlKLElBQUE7RUFDVixNQUFNSyxDQUFBLEdBQUlQLEdBQUE7RUFDVixNQUFNOUosSUFBQSxHQUFPO0lBQ1g4SixHQUFBO0lBQ0FDLE1BQUE7SUFDQUMsSUFBQTtJQUNBQyxLQUFBO0lBQ0FDLEtBQUE7SUFDQUMsTUFBQTtJQUNBQyxDQUFBO0lBQ0FDO0VBQ0Y7RUFFQSxPQUFPO0lBQ0wsR0FBR3JLLElBQUE7SUFDSDNNLE1BQUEsRUFBUUEsQ0FBQSxLQUFNMk07RUFDaEI7QUFDRjtBcEc1Qk8sU0FBU3JTLHFCQUFxQmtGLEdBQUEsRUFBc0J5WCxRQUFBLEdBQTBCLE1BQXdCO0VBQzNHLElBQUksQ0FBQ0EsUUFBQSxFQUFVO0lBQ2IsT0FBTztFQUNUO0VBRUEsTUFBTUMsZ0JBQUEsR0FBbUJsYixhQUFBLENBQUFtYixTQUFBLENBQVVDLE9BQUEsQ0FBUTVYLEdBQUc7RUFDOUMsTUFBTTZYLGNBQUEsR0FBaUJyYixhQUFBLENBQUFtYixTQUFBLENBQVVHLEtBQUEsQ0FBTTlYLEdBQUc7RUFFMUMsSUFBSXlYLFFBQUEsS0FBYSxXQUFXQSxRQUFBLEtBQWEsTUFBTTtJQUM3QyxPQUFPQyxnQkFBQTtFQUNUO0VBRUEsSUFBSUQsUUFBQSxLQUFhLE9BQU87SUFDdEIsT0FBT0ksY0FBQTtFQUNUO0VBRUEsTUFBTWpCLE1BQUEsR0FBU2MsZ0JBQUEsQ0FBaUJ2UCxJQUFBO0VBQ2hDLE1BQU0wTyxNQUFBLEdBQVNnQixjQUFBLENBQWV6UCxFQUFBO0VBRTlCLElBQUlxUCxRQUFBLEtBQWEsT0FBTztJQUN0QixPQUFPamIsYUFBQSxDQUFBbWEsYUFBQSxDQUFjb0IsTUFBQSxDQUFPL1gsR0FBQSxFQUFLMUYsTUFBQSxDQUFPLEdBQUdzYyxNQUFBLEVBQVFDLE1BQU0sR0FBR3ZjLE1BQUEsQ0FBTzBGLEdBQUEsQ0FBSWlGLE9BQUEsQ0FBUXdMLElBQUEsRUFBTW1HLE1BQUEsRUFBUUMsTUFBTSxDQUFDO0VBQ3RHO0VBRUEsT0FBT3JhLGFBQUEsQ0FBQW1hLGFBQUEsQ0FBY29CLE1BQUEsQ0FBTy9YLEdBQUEsRUFBSzFGLE1BQUEsQ0FBT21kLFFBQUEsRUFBVWIsTUFBQSxFQUFRQyxNQUFNLEdBQUd2YyxNQUFBLENBQU9tZCxRQUFBLEVBQVViLE1BQUEsRUFBUUMsTUFBTSxDQUFDO0FBQ3JHO0FxR0pBLFNBQVNtQiwyQkFBMkI7RUFDbENDLElBQUE7RUFDQUMsVUFBQTtFQUNBQyxVQUFBO0VBQ0FqVCxPQUFBO0VBQ0FrVCxnQkFBQSxHQUFtQjtBQUNyQixHQWVFO0VBQ0EsSUFBSUgsSUFBQSxDQUFLeFIsS0FBQSxJQUFTakIsS0FBQSxDQUFNQyxPQUFBLENBQVF3UyxJQUFBLENBQUt4UixLQUFLLEdBQUc7SUFDM0N3UixJQUFBLENBQUt4UixLQUFBLEdBQVF3UixJQUFBLENBQUt4UixLQUFBLENBQU1yRCxNQUFBLENBQU8yTCxJQUFBLElBQVE7TUFDckMsTUFBTXZOLElBQUEsR0FBTyxPQUFPdU4sSUFBQSxLQUFTLFdBQVdBLElBQUEsR0FBT0EsSUFBQSxDQUFLdEgsSUFBQTtNQUVwRCxJQUFJeVEsVUFBQSxDQUFXRyxHQUFBLENBQUk3VyxJQUFJLEdBQUc7UUFDeEIsT0FBTztNQUNUO01BRUE0VyxnQkFBQSxDQUFpQnpWLElBQUEsQ0FBSztRQUNwQjJWLFFBQUEsRUFBVWpILElBQUEsQ0FBS2hLLEtBQUEsQ0FBTWdLLElBQUEsQ0FBS0MsU0FBQSxDQUFVdkMsSUFBSSxDQUFDO1FBQ3pDd0osV0FBQSxFQUFhL1c7TUFDZixDQUFDO01BRUQsT0FBTztJQUNULENBQUM7RUFDSDtFQUVBLElBQUl5VyxJQUFBLENBQUtoVCxPQUFBLElBQVdPLEtBQUEsQ0FBTUMsT0FBQSxDQUFRd1MsSUFBQSxDQUFLaFQsT0FBTyxHQUFHO0lBQy9DZ1QsSUFBQSxDQUFLaFQsT0FBQSxHQUFVZ1QsSUFBQSxDQUFLaFQsT0FBQSxDQUNqQjFELEdBQUEsQ0FDQ2tELEtBQUEsSUFDRXVULDBCQUFBLENBQTJCO01BQ3pCQyxJQUFBLEVBQU14VCxLQUFBO01BQ055VCxVQUFBO01BQ0FDLFVBQUE7TUFDQWpULE9BQUE7TUFDQWtUO0lBQ0YsQ0FBQyxFQUFFSCxJQUNQLEVBQ0M3VSxNQUFBLENBQU9tTSxDQUFBLElBQUtBLENBQUEsS0FBTSxRQUFRQSxDQUFBLEtBQU0sTUFBUztFQUM5QztFQUVBLElBQUkwSSxJQUFBLENBQUt4USxJQUFBLElBQVEsQ0FBQzBRLFVBQUEsQ0FBV0UsR0FBQSxDQUFJSixJQUFBLENBQUt4USxJQUFJLEdBQUc7SUFDM0MyUSxnQkFBQSxDQUFpQnpWLElBQUEsQ0FBSztNQUNwQjJWLFFBQUEsRUFBVWpILElBQUEsQ0FBS2hLLEtBQUEsQ0FBTWdLLElBQUEsQ0FBS0MsU0FBQSxDQUFVMkcsSUFBSSxDQUFDO01BQ3pDTSxXQUFBLEVBQWFOLElBQUEsQ0FBS3hRO0lBQ3BCLENBQUM7SUFFRCxJQUFJd1EsSUFBQSxDQUFLaFQsT0FBQSxJQUFXTyxLQUFBLENBQU1DLE9BQUEsQ0FBUXdTLElBQUEsQ0FBS2hULE9BQU8sTUFBS0MsT0FBQSxvQkFBQUEsT0FBQSxDQUFTc1QsbUJBQUEsTUFBd0IsT0FBTztNQUV6RlAsSUFBQSxDQUFLeFEsSUFBQSxHQUFPO01BRVosT0FBTztRQUNMd1EsSUFBQTtRQUNBRztNQUNGO0lBQ0Y7SUFHQSxPQUFPO01BQ0xILElBQUEsRUFBTTtNQUNORztJQUNGO0VBQ0Y7RUFFQSxPQUFPO0lBQUVILElBQUE7SUFBTUc7RUFBaUI7QUFDbEM7QUFNTyxTQUFTcmQsc0JBSWRrZCxJQUFBLEVBSUEzWCxNQUFBLEVBSUE0RSxPQUFBLEVBbUJBO0VBQ0EsT0FBTzhTLDBCQUFBLENBQTJCO0lBQ2hDQyxJQUFBO0lBQ0FFLFVBQUEsRUFBWSxJQUFJL0ksR0FBQSxDQUFJaE8sTUFBQSxDQUFPd0ksSUFBQSxDQUFLdEosTUFBQSxDQUFPb0csS0FBSyxDQUFDO0lBQzdDd1IsVUFBQSxFQUFZLElBQUk5SSxHQUFBLENBQUloTyxNQUFBLENBQU93SSxJQUFBLENBQUt0SixNQUFBLENBQU9tRyxLQUFLLENBQUM7SUFDN0N2QjtFQUNGLENBQUM7QUFDSDtBcEcvSU8sU0FBU2xLLHdCQUF3QnlGLEVBQUEsRUFBaUJnWSxRQUFBLEVBQWtCQyxJQUFBLEVBQWM7RUFDdkYsTUFBTUMsSUFBQSxHQUFPbFksRUFBQSxDQUFHbUQsS0FBQSxDQUFNTyxNQUFBLEdBQVM7RUFFL0IsSUFBSXdVLElBQUEsR0FBT0YsUUFBQSxFQUFVO0lBQ25CO0VBQ0Y7RUFFQSxNQUFNNVUsSUFBQSxHQUFPcEQsRUFBQSxDQUFHbUQsS0FBQSxDQUFNK1UsSUFBSTtFQUUxQixJQUFJLEVBQUU5VSxJQUFBLFlBQWdCbkgsaUJBQUEsQ0FBQWtjLFdBQUEsSUFBZS9VLElBQUEsWUFBZ0JuSCxpQkFBQSxDQUFBbWMsaUJBQUEsR0FBb0I7SUFDdkU7RUFDRjtFQUVBLE1BQU10WCxHQUFBLEdBQU1kLEVBQUEsQ0FBRzRSLE9BQUEsQ0FBUUMsSUFBQSxDQUFLcUcsSUFBSTtFQUNoQyxJQUFJekMsR0FBQSxHQUFNO0VBRVYzVSxHQUFBLENBQUkyQixPQUFBLENBQVEsQ0FBQzRWLEtBQUEsRUFBT0MsR0FBQSxFQUFLQyxRQUFBLEVBQVVDLEtBQUEsS0FBVTtJQUMzQyxJQUFJL0MsR0FBQSxLQUFRLEdBQUc7TUFDYkEsR0FBQSxHQUFNK0MsS0FBQTtJQUNSO0VBQ0YsQ0FBQztFQUVEeFksRUFBQSxDQUFHeVksWUFBQSxDQUFhemMsYUFBQSxDQUFBa2IsU0FBQSxDQUFVd0IsSUFBQSxDQUFLMVksRUFBQSxDQUFHVCxHQUFBLENBQUlzVSxPQUFBLENBQVE0QixHQUFHLEdBQUd3QyxJQUFJLENBQUM7QUFDM0Q7QUNMTyxJQUFNdGpCLFNBQUEsR0FBTixNQUFnQjtFQWNyQnNMLFlBQVlkLE1BQUEsRUFXVDtJQWhETCxJQUFBd04sRUFBQTtJQWlESSxLQUFLRSxJQUFBLEdBQU8xTixNQUFBLENBQU8wTixJQUFBO0lBQ25CLEtBQUs4TCxPQUFBLEdBQVV4WixNQUFBLENBQU93WixPQUFBO0lBQ3RCLEtBQUtDLFFBQUEsSUFBV2pNLEVBQUEsR0FBQXhOLE1BQUEsQ0FBT3laLFFBQUEsS0FBUCxPQUFBak0sRUFBQSxHQUFtQjtFQUNyQztBQUNGO0FBRUEsSUFBTWtNLHVCQUFBLEdBQTBCQSxDQUFDbkosSUFBQSxFQUFjN0MsSUFBQSxLQUEyRDtFQUN4RyxJQUFJeFQsUUFBQSxDQUFTd1QsSUFBSSxHQUFHO0lBQ2xCLE9BQU9BLElBQUEsQ0FBS2lNLElBQUEsQ0FBS3BKLElBQUk7RUFDdkI7RUFFQSxNQUFNcUosY0FBQSxHQUFpQmxNLElBQUEsQ0FBSzZDLElBQUk7RUFFaEMsSUFBSSxDQUFDcUosY0FBQSxFQUFnQjtJQUNuQixPQUFPO0VBQ1Q7RUFFQSxNQUFNQyxNQUFBLEdBQW1DLENBQUNELGNBQUEsQ0FBZXJKLElBQUk7RUFFN0RzSixNQUFBLENBQU92SyxLQUFBLEdBQVFzSyxjQUFBLENBQWV0SyxLQUFBO0VBQzlCdUssTUFBQSxDQUFPQyxLQUFBLEdBQVF2SixJQUFBO0VBQ2ZzSixNQUFBLENBQU90TSxJQUFBLEdBQU9xTSxjQUFBLENBQWVyTSxJQUFBO0VBRTdCLElBQUlxTSxjQUFBLENBQWVHLFdBQUEsRUFBYTtJQUM5QixJQUFJLENBQUNILGNBQUEsQ0FBZXJKLElBQUEsQ0FBS3JFLFFBQUEsQ0FBUzBOLGNBQUEsQ0FBZUcsV0FBVyxHQUFHO01BQzdEMVQsT0FBQSxDQUFRQyxJQUFBLENBQUssb0ZBQW9GO0lBQ25HO0lBRUF1VCxNQUFBLENBQU85VyxJQUFBLENBQUs2VyxjQUFBLENBQWVHLFdBQVc7RUFDeEM7RUFFQSxPQUFPRixNQUFBO0FBQ1Q7QUFFQSxTQUFTalgsSUFBSTVDLE1BQUEsRUFPRDtFQTFGWixJQUFBd04sRUFBQTtFQTJGRSxNQUFNO0lBQUV4TSxNQUFBO0lBQVF1SCxJQUFBO0lBQU1DLEVBQUE7SUFBSStILElBQUE7SUFBTXlKLEtBQUE7SUFBT0M7RUFBTyxJQUFJamEsTUFBQTtFQUNsRCxNQUFNO0lBQUVzQjtFQUFLLElBQUlOLE1BQUE7RUFFakIsSUFBSU0sSUFBQSxDQUFLNFksU0FBQSxFQUFXO0lBQ2xCLE9BQU87RUFDVDtFQUVBLE1BQU1yUixLQUFBLEdBQVF2SCxJQUFBLENBQUtyQixLQUFBLENBQU1HLEdBQUEsQ0FBSXNVLE9BQUEsQ0FBUW5NLElBQUk7RUFFekM7O0VBRUVNLEtBQUEsQ0FBTUksTUFBQSxDQUFPcEIsSUFBQSxDQUFLakIsSUFBQSxDQUFLc0gsSUFBQTtFQUFBO0VBRXZCLENBQUMsR0FBRVYsRUFBQSxHQUFBM0UsS0FBQSxDQUFNc1IsVUFBQSxJQUFjdFIsS0FBQSxDQUFNdVIsU0FBQSxLQUExQixnQkFBQTVNLEVBQUEsQ0FBc0MzRyxLQUFBLENBQU02RyxJQUFBLENBQUt5QixJQUFBLElBQVFBLElBQUEsQ0FBS3RILElBQUEsQ0FBS2pCLElBQUEsQ0FBS3NILElBQUEsSUFDM0U7SUFDQSxPQUFPO0VBQ1Q7RUFFQSxJQUFJbU0sT0FBQSxHQUFVO0VBRWQsTUFBTXJGLFVBQUEsR0FBYWpjLHVCQUFBLENBQXdCOFAsS0FBSyxJQUFJMEgsSUFBQTtFQUVwRHlKLEtBQUEsQ0FBTTFXLE9BQUEsQ0FBUWdYLElBQUEsSUFBUTtJQUNwQixJQUFJRCxPQUFBLEVBQVM7TUFDWDtJQUNGO0lBRUEsTUFBTTFTLEtBQUEsR0FBUStSLHVCQUFBLENBQXdCMUUsVUFBQSxFQUFZc0YsSUFBQSxDQUFLNU0sSUFBSTtJQUUzRCxJQUFJLENBQUMvRixLQUFBLEVBQU87TUFDVjtJQUNGO0lBRUEsTUFBTTlHLEVBQUEsR0FBS1MsSUFBQSxDQUFLckIsS0FBQSxDQUFNWSxFQUFBO0lBQ3RCLE1BQU1aLEtBQUEsR0FBUTdKLG9CQUFBLENBQXFCO01BQ2pDNkosS0FBQSxFQUFPcUIsSUFBQSxDQUFLckIsS0FBQTtNQUNaQyxXQUFBLEVBQWFXO0lBQ2YsQ0FBQztJQUNELE1BQU13SCxLQUFBLEdBQVE7TUFDWkUsSUFBQSxFQUFNQSxJQUFBLElBQVFaLEtBQUEsQ0FBTSxDQUFDLEVBQUVwRCxNQUFBLEdBQVNnTSxJQUFBLENBQUtoTSxNQUFBO01BQ3JDaUU7SUFDRjtJQUVBLE1BQU07TUFBRXJILFFBQUE7TUFBVWdCLEtBQUE7TUFBT0U7SUFBSSxJQUFJLElBQUlsTixjQUFBLENBQWU7TUFDbEQ2TCxNQUFBO01BQ0FmO0lBQ0YsQ0FBQztJQUVELE1BQU11WixPQUFBLEdBQVVjLElBQUEsQ0FBS2QsT0FBQSxDQUFRO01BQzNCdlosS0FBQTtNQUNBb0ksS0FBQTtNQUNBVixLQUFBO01BQ0F4RyxRQUFBO01BQ0FnQixLQUFBO01BQ0FFO0lBQ0YsQ0FBQztJQUdELElBQUltWCxPQUFBLEtBQVksUUFBUSxDQUFDM1ksRUFBQSxDQUFHbUQsS0FBQSxDQUFNTyxNQUFBLEVBQVE7TUFDeEM7SUFDRjtJQUlBLElBQUkrVixJQUFBLENBQUtiLFFBQUEsRUFBVTtNQUNqQjVZLEVBQUEsQ0FBRzBaLE9BQUEsQ0FBUU4sTUFBQSxFQUFRO1FBQ2pCblcsU0FBQSxFQUFXakQsRUFBQTtRQUNYMEgsSUFBQTtRQUNBQyxFQUFBO1FBQ0ErSDtNQUNGLENBQUM7SUFDSDtJQUVBalAsSUFBQSxDQUFLWSxRQUFBLENBQVNyQixFQUFFO0lBQ2hCd1osT0FBQSxHQUFVO0VBQ1osQ0FBQztFQUVELE9BQU9BLE9BQUE7QUFDVDtBQU9PLFNBQVNuaEIsaUJBQWlCNkgsS0FBQSxFQUF1RDtFQUN0RixNQUFNO0lBQUVDLE1BQUE7SUFBUWdaO0VBQU0sSUFBSWpaLEtBQUE7RUFDMUIsTUFBTWtaLE1BQUEsR0FBUyxJQUFJamQsYUFBQSxDQUFBd2QsTUFBQSxDQUFPO0lBQ3hCdmEsS0FBQSxFQUFPO01BQ0x3YSxLQUFBLEVBQU87UUFDTCxPQUFPO01BQ1Q7TUFDQW5hLE1BQU1PLEVBQUEsRUFBSTZaLElBQUEsRUFBTXphLEtBQUEsRUFBTztRQUNyQixNQUFNMGEsTUFBQSxHQUFTOVosRUFBQSxDQUFHb0IsT0FBQSxDQUFRZ1ksTUFBTTtRQUVoQyxJQUFJVSxNQUFBLEVBQVE7VUFDVixPQUFPQSxNQUFBO1FBQ1Q7UUFHQSxNQUFNQyxrQkFBQSxHQUFxQi9aLEVBQUEsQ0FBR29CLE9BQUEsQ0FBUSxpQkFBaUI7UUFNdkQsTUFBTTRZLGdCQUFBLEdBQW1CLENBQUMsQ0FBQ0Qsa0JBQUE7UUFFM0IsSUFBSUMsZ0JBQUEsRUFBa0I7VUFDcEJDLFVBQUEsQ0FBVyxNQUFNO1lBQ2YsSUFBSTtjQUFFdks7WUFBSyxJQUFJcUssa0JBQUE7WUFFZixJQUFJLE9BQU9ySyxJQUFBLEtBQVMsVUFBVTtjQUM1QkEsSUFBQSxHQUFPQSxJQUFBO1lBQ1QsT0FBTztjQUNMQSxJQUFBLEdBQU94WSxtQkFBQSxDQUFvQmdGLGFBQUEsQ0FBQXpILFFBQUEsQ0FBU2lULElBQUEsQ0FBS2dJLElBQUksR0FBR3RRLEtBQUEsQ0FBTVMsTUFBTTtZQUM5RDtZQUVBLE1BQU07Y0FBRTZIO1lBQUssSUFBSXFTLGtCQUFBO1lBQ2pCLE1BQU1wUyxFQUFBLEdBQUtELElBQUEsR0FBT2dJLElBQUEsQ0FBS2hNLE1BQUE7WUFFdkIzQixHQUFBLENBQUk7Y0FDRjVCLE1BQUE7Y0FDQXVILElBQUE7Y0FDQUMsRUFBQTtjQUNBK0gsSUFBQTtjQUNBeUosS0FBQTtjQUNBQztZQUNGLENBQUM7VUFDSCxDQUFDO1FBQ0g7UUFFQSxPQUFPcFosRUFBQSxDQUFHa2EsWUFBQSxJQUFnQmxhLEVBQUEsQ0FBR21hLFVBQUEsR0FBYSxPQUFPTixJQUFBO01BQ25EO0lBQ0Y7SUFFQTNaLEtBQUEsRUFBTztNQUNMa2EsZ0JBQWdCM1osSUFBQSxFQUFNaUgsSUFBQSxFQUFNQyxFQUFBLEVBQUkrSCxJQUFBLEVBQU07UUFDcEMsT0FBTzNOLEdBQUEsQ0FBSTtVQUNUNUIsTUFBQTtVQUNBdUgsSUFBQTtVQUNBQyxFQUFBO1VBQ0ErSCxJQUFBO1VBQ0F5SixLQUFBO1VBQ0FDO1FBQ0YsQ0FBQztNQUNIO01BRUFpQixlQUFBLEVBQWlCO1FBQ2ZDLGNBQUEsRUFBZ0I3WixJQUFBLElBQVE7VUFDdEJ3WixVQUFBLENBQVcsTUFBTTtZQUNmLE1BQU07Y0FBRU07WUFBUSxJQUFJOVosSUFBQSxDQUFLckIsS0FBQSxDQUFNRSxTQUFBO1lBRS9CLElBQUlpYixPQUFBLEVBQVM7Y0FDWHhZLEdBQUEsQ0FBSTtnQkFDRjVCLE1BQUE7Z0JBQ0F1SCxJQUFBLEVBQU02UyxPQUFBLENBQVFoVCxHQUFBO2dCQUNkSSxFQUFBLEVBQUk0UyxPQUFBLENBQVFoVCxHQUFBO2dCQUNabUksSUFBQSxFQUFNO2dCQUNOeUosS0FBQTtnQkFDQUM7Y0FDRixDQUFDO1lBQ0g7VUFDRixDQUFDO1VBRUQsT0FBTztRQUNUO01BQ0Y7OztNQUlBb0IsY0FBYy9aLElBQUEsRUFBTTZCLEtBQUEsRUFBTztRQUN6QixJQUFJQSxLQUFBLENBQU11SSxHQUFBLEtBQVEsU0FBUztVQUN6QixPQUFPO1FBQ1Q7UUFFQSxNQUFNO1VBQUUwUDtRQUFRLElBQUk5WixJQUFBLENBQUtyQixLQUFBLENBQU1FLFNBQUE7UUFFL0IsSUFBSWliLE9BQUEsRUFBUztVQUNYLE9BQU94WSxHQUFBLENBQUk7WUFDVDVCLE1BQUE7WUFDQXVILElBQUEsRUFBTTZTLE9BQUEsQ0FBUWhULEdBQUE7WUFDZEksRUFBQSxFQUFJNFMsT0FBQSxDQUFRaFQsR0FBQTtZQUNabUksSUFBQSxFQUFNO1lBQ055SixLQUFBO1lBQ0FDO1VBQ0YsQ0FBQztRQUNIO1FBRUEsT0FBTztNQUNUO0lBQ0Y7O0lBR0FxQixZQUFBLEVBQWM7RUFDaEIsQ0FBQztFQUVELE9BQU9yQixNQUFBO0FBQ1Q7QW9HL1JBLFNBQVNzQixRQUFRMVcsS0FBQSxFQUFvQjtFQUNuQyxPQUFPckQsTUFBQSxDQUFPb1EsU0FBQSxDQUFVK0IsUUFBQSxDQUFTN0IsSUFBQSxDQUFLak4sS0FBSyxFQUFFVSxLQUFBLENBQU0sR0FBRyxFQUFFO0FBQzFEO0FBRU8sU0FBU3RMLGNBQWM0SyxLQUFBLEVBQTBDO0VBQ3RFLElBQUkwVyxPQUFBLENBQVExVyxLQUFLLE1BQU0sVUFBVTtJQUMvQixPQUFPO0VBQ1Q7RUFFQSxPQUFPQSxLQUFBLENBQU0vRCxXQUFBLEtBQWdCVSxNQUFBLElBQVVBLE1BQUEsQ0FBT2dhLGNBQUEsQ0FBZTNXLEtBQUssTUFBTXJELE1BQUEsQ0FBT29RLFNBQUE7QUFDakY7QUNWTyxTQUFTblgsVUFBVWdoQixNQUFBLEVBQTZCQyxNQUFBLEVBQWtEO0VBQ3ZHLE1BQU1sSSxNQUFBLEdBQVM7SUFBRSxHQUFHaUk7RUFBTztFQUUzQixJQUFJeGhCLGFBQUEsQ0FBY3doQixNQUFNLEtBQUt4aEIsYUFBQSxDQUFjeWhCLE1BQU0sR0FBRztJQUNsRGxhLE1BQUEsQ0FBT3dJLElBQUEsQ0FBSzBSLE1BQU0sRUFBRXBZLE9BQUEsQ0FBUW9JLEdBQUEsSUFBTztNQUNqQyxJQUFJelIsYUFBQSxDQUFjeWhCLE1BQUEsQ0FBT2hRLEdBQUcsQ0FBQyxLQUFLelIsYUFBQSxDQUFjd2hCLE1BQUEsQ0FBTy9QLEdBQUcsQ0FBQyxHQUFHO1FBQzVEOEgsTUFBQSxDQUFPOUgsR0FBRyxJQUFJalIsU0FBQSxDQUFVZ2hCLE1BQUEsQ0FBTy9QLEdBQUcsR0FBR2dRLE1BQUEsQ0FBT2hRLEdBQUcsQ0FBQztNQUNsRCxPQUFPO1FBQ0w4SCxNQUFBLENBQU85SCxHQUFHLElBQUlnUSxNQUFBLENBQU9oUSxHQUFHO01BQzFCO0lBQ0YsQ0FBQztFQUNIO0VBRUEsT0FBTzhILE1BQUE7QUFDVDtBQ3VZTyxJQUFNbUksVUFBQSxHQUFOLE1BSUw7RUFZQTdhLFlBQVlkLE1BQUEsR0FBMEIsQ0FBQyxHQUFHO0lBWDFDLEtBQUE2SCxJQUFBLEdBQU87SUFDUCxLQUFBb0IsTUFBQSxHQUE0QjtJQUU1QixLQUFBekUsS0FBQSxHQUEyQjtJQUUzQixLQUFBNUMsSUFBQSxHQUFPO0lBRVAsS0FBQTVCLE1BQUEsR0FBaUI7TUFDZjRCLElBQUEsRUFBTSxLQUFLQTtJQUNiO0lBR0UsS0FBSzVCLE1BQUEsR0FBUztNQUNaLEdBQUcsS0FBS0EsTUFBQTtNQUNSLEdBQUdBO0lBQ0w7SUFFQSxLQUFLNEIsSUFBQSxHQUFRLEtBQUs1QixNQUFBLENBQWU0QixJQUFBO0VBQ25DO0VBRUEsSUFBSTBELFFBQUEsRUFBbUI7SUFDckIsT0FBTztNQUNMLElBQUlyUCxZQUFBLENBQ0Y2QixpQkFBQSxDQUEyQyxNQUFhLGNBQWM7UUFDcEU4SixJQUFBLEVBQU0sS0FBS0E7TUFDYixDQUFDLENBQ0gsS0FBSyxDQUFDO0lBQ1I7RUFDRjtFQUVBLElBQUlzSCxRQUFBLEVBQTZCO0lBQy9CLE9BQU87TUFDTCxJQUFJalQsWUFBQSxDQUNGNkIsaUJBQUEsQ0FBMkMsTUFBYSxjQUFjO1FBQ3BFOEosSUFBQSxFQUFNLEtBQUtBLElBQUE7UUFDWDBELE9BQUEsRUFBUyxLQUFLQTtNQUNoQixDQUFDLENBQ0gsS0FBSyxDQUFDO0lBQ1I7RUFDRjtFQUVBc1csVUFBVXRXLE9BQUEsR0FBNEIsQ0FBQyxHQUFHO0lBQ3hDLE1BQU13RCxTQUFBLEdBQVksS0FBSytTLE1BQUEsQ0FBaUM7TUFDdEQsR0FBRyxLQUFLN2IsTUFBQTtNQUNSOGIsVUFBQSxFQUFZQSxDQUFBLEtBQU07UUFDaEIsT0FBT3JoQixTQUFBLENBQVUsS0FBSzZLLE9BQUEsRUFBZ0NBLE9BQU87TUFDL0Q7SUFDRixDQUFDO0lBRUR3RCxTQUFBLENBQVVsSCxJQUFBLEdBQU8sS0FBS0EsSUFBQTtJQUN0QmtILFNBQUEsQ0FBVUcsTUFBQSxHQUFTLEtBQUtBLE1BQUE7SUFFeEIsT0FBT0gsU0FBQTtFQUNUO0VBRUErUyxPQU9FRSxjQUFBLEdBQTBDLENBQUMsR0FBaUQ7SUFDNUYsTUFBTWpULFNBQUEsR0FBWSxJQUFLLEtBQUtoSSxXQUFBLENBQW9CO01BQUUsR0FBRyxLQUFLZCxNQUFBO01BQVEsR0FBRytiO0lBQWUsQ0FBQztJQUVyRmpULFNBQUEsQ0FBVUcsTUFBQSxHQUFTO0lBQ25CLEtBQUt6RSxLQUFBLEdBQVFzRSxTQUFBO0lBQ2JBLFNBQUEsQ0FBVWxILElBQUEsR0FBTyxVQUFVbWEsY0FBQSxHQUFpQkEsY0FBQSxDQUFlbmEsSUFBQSxHQUFPa0gsU0FBQSxDQUFVRyxNQUFBLENBQU9ySCxJQUFBO0lBRW5GLE9BQU9rSCxTQUFBO0VBQ1Q7QUFDRjtBQ2xWTyxJQUFNclQsSUFBQSxHQUFOLE1BQU11bUIsS0FBQSxTQUEyQ0wsVUFBQSxDQUEyRDtFQUE1RzdhLFlBQUE7SUFBQSxTQUFBbWIsU0FBQTtJQUNMLEtBQUFwVSxJQUFBLEdBQU87RUFBQTs7Ozs7RUFNUCxPQUFPc1EsT0FBeUJuWSxNQUFBLEdBQXdFLENBQUMsR0FBRztJQUUxRyxNQUFNa2MsY0FBQSxHQUFpQixPQUFPbGMsTUFBQSxLQUFXLGFBQWFBLE1BQUEsQ0FBTyxJQUFJQSxNQUFBO0lBQ2pFLE9BQU8sSUFBSWdjLEtBQUEsQ0FBV0UsY0FBYztFQUN0QztFQUVBLE9BQU9DLFdBQVc7SUFBRW5iLE1BQUE7SUFBUW1PO0VBQUssR0FBbUM7SUFDbEUsTUFBTTtNQUFFdE87SUFBRyxJQUFJRyxNQUFBLENBQU9mLEtBQUE7SUFDdEIsTUFBTW1jLFVBQUEsR0FBYXBiLE1BQUEsQ0FBT2YsS0FBQSxDQUFNRSxTQUFBLENBQVUwSSxLQUFBO0lBQzFDLE1BQU13VCxPQUFBLEdBQVVELFVBQUEsQ0FBV2hVLEdBQUEsS0FBUWdVLFVBQUEsQ0FBVzlGLEdBQUEsQ0FBSTtJQUVsRCxJQUFJK0YsT0FBQSxFQUFTO01BQ1gsTUFBTUMsWUFBQSxHQUFlRixVQUFBLENBQVd2VixLQUFBLENBQU07TUFDdEMsTUFBTTBWLFFBQUEsR0FBVyxDQUFDLENBQUNELFlBQUEsQ0FBYTVPLElBQUEsQ0FBSzhPLENBQUEsS0FBS0EsQ0FBQSxvQkFBQUEsQ0FBQSxDQUFHM1UsSUFBQSxDQUFLakcsSUFBQSxNQUFTdU4sSUFBQSxDQUFLdk4sSUFBSTtNQUVwRSxJQUFJLENBQUMyYSxRQUFBLEVBQVU7UUFDYixPQUFPO01BQ1Q7TUFFQSxNQUFNRSxVQUFBLEdBQWFILFlBQUEsQ0FBYTVPLElBQUEsQ0FBSzhPLENBQUEsS0FBS0EsQ0FBQSxvQkFBQUEsQ0FBQSxDQUFHM1UsSUFBQSxDQUFLakcsSUFBQSxNQUFTdU4sSUFBQSxDQUFLdk4sSUFBSTtNQUVwRSxJQUFJNmEsVUFBQSxFQUFZO1FBQ2Q1YixFQUFBLENBQUc2YixnQkFBQSxDQUFpQkQsVUFBVTtNQUNoQztNQUNBNWIsRUFBQSxDQUFHOGIsVUFBQSxDQUFXLEtBQUtQLFVBQUEsQ0FBV2hVLEdBQUc7TUFFakNwSCxNQUFBLENBQU9NLElBQUEsQ0FBS1ksUUFBQSxDQUFTckIsRUFBRTtNQUV2QixPQUFPO0lBQ1Q7SUFFQSxPQUFPO0VBQ1Q7RUFFQSthLFVBQVV0VyxPQUFBLEVBQTRCO0lBQ3BDLE9BQU8sTUFBTXNXLFNBQUEsQ0FBVXRXLE9BQU87RUFDaEM7RUFFQXVXLE9BS0VFLGNBQUEsRUFVd0M7SUFFeEMsTUFBTUcsY0FBQSxHQUFpQixPQUFPSCxjQUFBLEtBQW1CLGFBQWFBLGNBQUEsQ0FBZSxJQUFJQSxjQUFBO0lBQ2pGLE9BQU8sTUFBTUYsTUFBQSxDQUFPSyxjQUFjO0VBQ3BDO0FBQ0Y7QUNsTk8sU0FBU2xpQixTQUFTNkssS0FBQSxFQUE2QjtFQUNwRCxPQUFPLE9BQU9BLEtBQUEsS0FBVTtBQUMxQjtBdkcyQk8sSUFBTTlPLFNBQUEsR0FBTixNQUFnQjtFQWNyQitLLFlBQVlkLE1BQUEsRUFZVDtJQUNELEtBQUswTixJQUFBLEdBQU8xTixNQUFBLENBQU8wTixJQUFBO0lBQ25CLEtBQUs4TCxPQUFBLEdBQVV4WixNQUFBLENBQU93WixPQUFBO0VBQ3hCO0FBQ0Y7QUFFQSxJQUFNb0QsdUJBQUEsR0FBMEJBLENBQzlCck0sSUFBQSxFQUNBN0MsSUFBQSxFQUNBdkssS0FBQSxLQUMrQjtFQUMvQixJQUFJakosUUFBQSxDQUFTd1QsSUFBSSxHQUFHO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHNkMsSUFBQSxDQUFLc00sUUFBQSxDQUFTblAsSUFBSSxDQUFDO0VBQ2hDO0VBRUEsTUFBTW9QLE9BQUEsR0FBVXBQLElBQUEsQ0FBSzZDLElBQUEsRUFBTXBOLEtBQUs7RUFFaEMsSUFBSSxDQUFDMlosT0FBQSxFQUFTO0lBQ1osT0FBTyxFQUFDO0VBQ1Y7RUFFQSxPQUFPQSxPQUFBLENBQVFuYixHQUFBLENBQUlvYixjQUFBLElBQWtCO0lBQ25DLE1BQU1sRCxNQUFBLEdBQW1DLENBQUNrRCxjQUFBLENBQWV4TSxJQUFJO0lBRTdEc0osTUFBQSxDQUFPdkssS0FBQSxHQUFReU4sY0FBQSxDQUFlek4sS0FBQTtJQUM5QnVLLE1BQUEsQ0FBT0MsS0FBQSxHQUFRdkosSUFBQTtJQUNmc0osTUFBQSxDQUFPdE0sSUFBQSxHQUFPd1AsY0FBQSxDQUFleFAsSUFBQTtJQUU3QixJQUFJd1AsY0FBQSxDQUFlaEQsV0FBQSxFQUFhO01BQzlCLElBQUksQ0FBQ2dELGNBQUEsQ0FBZXhNLElBQUEsQ0FBS3JFLFFBQUEsQ0FBUzZRLGNBQUEsQ0FBZWhELFdBQVcsR0FBRztRQUM3RDFULE9BQUEsQ0FBUUMsSUFBQSxDQUFLLG9GQUFvRjtNQUNuRztNQUVBdVQsTUFBQSxDQUFPOVcsSUFBQSxDQUFLZ2EsY0FBQSxDQUFlaEQsV0FBVztJQUN4QztJQUVBLE9BQU9GLE1BQUE7RUFDVCxDQUFDO0FBQ0g7QUFFQSxTQUFTbUQsS0FBSWhkLE1BQUEsRUFRRDtFQUNWLE1BQU07SUFBRWdCLE1BQUE7SUFBUWYsS0FBQTtJQUFPc0ksSUFBQTtJQUFNQyxFQUFBO0lBQUk4UixJQUFBO0lBQU0yQyxVQUFBO0lBQVlDO0VBQVUsSUFBSWxkLE1BQUE7RUFFakUsTUFBTTtJQUFFbUIsUUFBQTtJQUFVZ0IsS0FBQTtJQUFPRTtFQUFJLElBQUksSUFBSWxOLGNBQUEsQ0FBZTtJQUNsRDZMLE1BQUE7SUFDQWY7RUFDRixDQUFDO0VBRUQsTUFBTWtkLFFBQUEsR0FBNEIsRUFBQztFQUVuQ2xkLEtBQUEsQ0FBTUcsR0FBQSxDQUFJa0ksWUFBQSxDQUFhQyxJQUFBLEVBQU1DLEVBQUEsRUFBSSxDQUFDckUsSUFBQSxFQUFNaUUsR0FBQSxLQUFRO0lBakhsRCxJQUFBb0YsRUFBQSxFQUFBaUIsRUFBQSxFQUFBMk8sRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUE7SUFxSEksTUFBSTdPLEVBQUEsSUFBQWpCLEVBQUEsR0FBQXJKLElBQUEsQ0FBSzBELElBQUEsS0FBTCxnQkFBQTJGLEVBQUEsQ0FBVzVHLElBQUEsS0FBWCxnQkFBQTZILEVBQUEsQ0FBaUJQLElBQUEsS0FBUSxFQUFFL0osSUFBQSxDQUFLdU0sTUFBQSxJQUFVdk0sSUFBQSxDQUFLNEQsV0FBQSxJQUFlNUQsSUFBQSxDQUFLb1osUUFBQSxHQUFXO01BQ2hGO0lBQ0Y7SUFLQSxNQUFNQyxXQUFBLElBQWNGLEVBQUEsSUFBQUQsRUFBQSxJQUFBRCxFQUFBLEdBQUFqWixJQUFBLENBQUtrQixPQUFBLEtBQUwsZ0JBQUErWCxFQUFBLENBQWN2TSxJQUFBLEtBQWQsT0FBQXdNLEVBQUEsR0FBc0JsWixJQUFBLENBQUttUCxRQUFBLEtBQTNCLE9BQUFnSyxFQUFBLEdBQXVDO0lBQzNELE1BQU1wRyxZQUFBLEdBQWV2RyxJQUFBLENBQUtDLEdBQUEsQ0FBSXJJLElBQUEsRUFBTUgsR0FBRztJQUN2QyxNQUFNcVYsVUFBQSxHQUFhOU0sSUFBQSxDQUFLK0UsR0FBQSxDQUFJbE4sRUFBQSxFQUFJSixHQUFBLEdBQU1vVixXQUFXO0lBS2pELElBQUl0RyxZQUFBLElBQWdCdUcsVUFBQSxFQUFZO01BQzlCO0lBQ0Y7SUFFQSxNQUFNQyxXQUFBLEdBQWN2WixJQUFBLENBQUt1TSxNQUFBLEdBQ3JCdk0sSUFBQSxDQUFLb00sSUFBQSxJQUFRLEtBQ2JwTSxJQUFBLENBQUt3WixXQUFBLENBQVl6RyxZQUFBLEdBQWU5TyxHQUFBLEVBQUtxVixVQUFBLEdBQWFyVixHQUFBLEVBQUssUUFBVyxRQUFRO0lBRTlFLE1BQU0wVSxPQUFBLEdBQVVGLHVCQUFBLENBQXdCYyxXQUFBLEVBQWFwRCxJQUFBLENBQUs1TSxJQUFBLEVBQU11UCxVQUFVO0lBRTFFSCxPQUFBLENBQVF4WixPQUFBLENBQVFxRSxLQUFBLElBQVM7TUFDdkIsSUFBSUEsS0FBQSxDQUFNMkgsS0FBQSxLQUFVLFFBQVc7UUFDN0I7TUFDRjtNQUVBLE1BQU0xRyxLQUFBLEdBQVFzTyxZQUFBLEdBQWV2UCxLQUFBLENBQU0ySCxLQUFBLEdBQVE7TUFDM0MsTUFBTWdILEdBQUEsR0FBTTFOLEtBQUEsR0FBUWpCLEtBQUEsQ0FBTSxDQUFDLEVBQUVwRCxNQUFBO01BQzdCLE1BQU04RCxLQUFBLEdBQVE7UUFDWkUsSUFBQSxFQUFNdEksS0FBQSxDQUFNWSxFQUFBLENBQUc0UixPQUFBLENBQVE5USxHQUFBLENBQUlpSCxLQUFLO1FBQ2hDSixFQUFBLEVBQUl2SSxLQUFBLENBQU1ZLEVBQUEsQ0FBRzRSLE9BQUEsQ0FBUTlRLEdBQUEsQ0FBSTJVLEdBQUc7TUFDOUI7TUFFQSxNQUFNa0QsT0FBQSxHQUFVYyxJQUFBLENBQUtkLE9BQUEsQ0FBUTtRQUMzQnZaLEtBQUE7UUFDQW9JLEtBQUE7UUFDQVYsS0FBQTtRQUNBeEcsUUFBQTtRQUNBZ0IsS0FBQTtRQUNBRSxHQUFBO1FBQ0E0YSxVQUFBO1FBQ0FDO01BQ0YsQ0FBQztNQUVEQyxRQUFBLENBQVNwYSxJQUFBLENBQUt5VyxPQUFPO0lBQ3ZCLENBQUM7RUFDSCxDQUFDO0VBRUQsTUFBTW9FLE9BQUEsR0FBVVQsUUFBQSxDQUFTdGEsS0FBQSxDQUFNMlcsT0FBQSxJQUFXQSxPQUFBLEtBQVksSUFBSTtFQUUxRCxPQUFPb0UsT0FBQTtBQUNUO0FBR0EsSUFBSUMseUJBQUEsR0FBMkM7QUFFL0MsSUFBTUMseUJBQUEsR0FBNkJ2TixJQUFBLElBQWlCO0VBaExwRCxJQUFBL0MsRUFBQTtFQWlMRSxNQUFNckssS0FBQSxHQUFRLElBQUk0YSxjQUFBLENBQWUsU0FBUztJQUN4Q0MsYUFBQSxFQUFlLElBQUlDLFlBQUEsQ0FBYTtFQUNsQyxDQUFDO0VBRUQsQ0FBQXpRLEVBQUEsR0FBQXJLLEtBQUEsQ0FBTTZhLGFBQUEsS0FBTixnQkFBQXhRLEVBQUEsQ0FBcUIwUSxPQUFBLENBQVEsYUFBYTNOLElBQUE7RUFFMUMsT0FBT3BOLEtBQUE7QUFDVDtBQU9PLFNBQVNySSxpQkFBaUJpRyxLQUFBLEVBQXlEO0VBQ3hGLE1BQU07SUFBRUMsTUFBQTtJQUFRZ1o7RUFBTSxJQUFJalosS0FBQTtFQUMxQixJQUFJb2QsaUJBQUEsR0FBb0M7RUFDeEMsSUFBSUMsdUJBQUEsR0FBMEI7RUFDOUIsSUFBSUMsd0JBQUEsR0FBMkI7RUFDL0IsSUFBSXBCLFVBQUEsR0FBYSxPQUFPYyxjQUFBLEtBQW1CLGNBQWMsSUFBSUEsY0FBQSxDQUFlLE9BQU8sSUFBSTtFQUN2RixJQUFJYixTQUFBO0VBRUosSUFBSTtJQUNGQSxTQUFBLEdBQVksT0FBT29CLFNBQUEsS0FBYyxjQUFjLElBQUlBLFNBQUEsQ0FBVSxNQUFNLElBQUk7RUFDekUsUUFBUTtJQUNOcEIsU0FBQSxHQUFZO0VBQ2Q7RUFFQSxNQUFNcUIsWUFBQSxHQUFlQSxDQUFDO0lBQ3BCdGUsS0FBQTtJQUNBc0ksSUFBQTtJQUNBQyxFQUFBO0lBQ0E4UixJQUFBO0lBQ0FrRTtFQUNGLE1BTU07SUFDSixNQUFNM2QsRUFBQSxHQUFLWixLQUFBLENBQU1ZLEVBQUE7SUFDakIsTUFBTTRkLGNBQUEsR0FBaUJyb0Isb0JBQUEsQ0FBcUI7TUFDMUM2SixLQUFBO01BQ0FDLFdBQUEsRUFBYVc7SUFDZixDQUFDO0lBRUQsTUFBTTJZLE9BQUEsR0FBVXdELElBQUEsQ0FBSTtNQUNsQmhjLE1BQUE7TUFDQWYsS0FBQSxFQUFPd2UsY0FBQTtNQUNQbFcsSUFBQSxFQUFNb0ksSUFBQSxDQUFLQyxHQUFBLENBQUlySSxJQUFBLEdBQU8sR0FBRyxDQUFDO01BQzFCQyxFQUFBLEVBQUlBLEVBQUEsQ0FBR29ILENBQUEsR0FBSTtNQUNYMEssSUFBQTtNQUNBMkMsVUFBQSxFQUFZdUIsUUFBQTtNQUNadEI7SUFDRixDQUFDO0lBRUQsSUFBSSxDQUFDMUQsT0FBQSxJQUFXLENBQUMzWSxFQUFBLENBQUdtRCxLQUFBLENBQU1PLE1BQUEsRUFBUTtNQUNoQztJQUNGO0lBRUEsSUFBSTtNQUNGMlksU0FBQSxHQUFZLE9BQU9vQixTQUFBLEtBQWMsY0FBYyxJQUFJQSxTQUFBLENBQVUsTUFBTSxJQUFJO0lBQ3pFLFFBQVE7TUFDTnBCLFNBQUEsR0FBWTtJQUNkO0lBQ0FELFVBQUEsR0FBYSxPQUFPYyxjQUFBLEtBQW1CLGNBQWMsSUFBSUEsY0FBQSxDQUFlLE9BQU8sSUFBSTtJQUVuRixPQUFPbGQsRUFBQTtFQUNUO0VBRUEsTUFBTUosT0FBQSxHQUFVdVosS0FBQSxDQUFNclksR0FBQSxDQUFJMlksSUFBQSxJQUFRO0lBQ2hDLE9BQU8sSUFBSXBkLGFBQUEsQ0FBQXNkLE1BQUEsQ0FBTzs7TUFFaEJsWixLQUFLQSxJQUFBLEVBQU07UUFDVCxNQUFNb2QsZUFBQSxHQUFtQnZiLEtBQUEsSUFBcUI7VUE1UHRELElBQUFxSyxFQUFBO1VBNlBVMlEsaUJBQUEsS0FBb0IzUSxFQUFBLEdBQUFsTSxJQUFBLENBQUs2TyxHQUFBLENBQUl3TyxhQUFBLEtBQVQsZ0JBQUFuUixFQUFBLENBQXdCb1IsUUFBQSxDQUFTemIsS0FBQSxDQUFNc1ksTUFBQSxLQUFxQm5hLElBQUEsQ0FBSzZPLEdBQUEsQ0FBSXdPLGFBQUEsR0FBZ0I7VUFFekcsSUFBSVIsaUJBQUEsRUFBbUI7WUFDckJOLHlCQUFBLEdBQTRCN2MsTUFBQTtVQUM5QjtRQUNGO1FBRUEsTUFBTTZkLGFBQUEsR0FBZ0JBLENBQUEsS0FBTTtVQUMxQixJQUFJaEIseUJBQUEsRUFBMkI7WUFDN0JBLHlCQUFBLEdBQTRCO1VBQzlCO1FBQ0Y7UUFFQS9ZLE1BQUEsQ0FBT2dhLGdCQUFBLENBQWlCLGFBQWFKLGVBQWU7UUFDcEQ1WixNQUFBLENBQU9nYSxnQkFBQSxDQUFpQixXQUFXRCxhQUFhO1FBRWhELE9BQU87VUFDTEUsUUFBQSxFQUFVO1lBQ1JqYSxNQUFBLENBQU9rYSxtQkFBQSxDQUFvQixhQUFhTixlQUFlO1lBQ3ZENVosTUFBQSxDQUFPa2EsbUJBQUEsQ0FBb0IsV0FBV0gsYUFBYTtVQUNyRDtRQUNGO01BQ0Y7TUFFQTlkLEtBQUEsRUFBTztRQUNMbWEsZUFBQSxFQUFpQjtVQUNmK0QsSUFBQSxFQUFNQSxDQUFDM2QsSUFBQSxFQUFNNkIsS0FBQSxLQUFpQjtZQUM1QmtiLHdCQUFBLEdBQTJCRixpQkFBQSxLQUFzQjdjLElBQUEsQ0FBSzZPLEdBQUEsQ0FBSXdPLGFBQUE7WUFDMUR6QixTQUFBLEdBQVkvWixLQUFBO1lBRVosSUFBSSxDQUFDa2Isd0JBQUEsRUFBMEI7Y0FDN0IsTUFBTWEsbUJBQUEsR0FBc0JyQix5QkFBQTtjQUU1QixJQUFJcUIsbUJBQUEsb0JBQUFBLG1CQUFBLENBQXFCQyxVQUFBLEVBQVk7Z0JBRW5DckUsVUFBQSxDQUFXLE1BQU07a0JBQ2YsTUFBTTNhLFNBQUEsR0FBWStlLG1CQUFBLENBQW9CamYsS0FBQSxDQUFNRSxTQUFBO2tCQUU1QyxJQUFJQSxTQUFBLEVBQVc7b0JBQ2IrZSxtQkFBQSxDQUFvQi9kLFFBQUEsQ0FBU2llLFdBQUEsQ0FBWTtzQkFBRTdXLElBQUEsRUFBTXBJLFNBQUEsQ0FBVW9JLElBQUE7c0JBQU1DLEVBQUEsRUFBSXJJLFNBQUEsQ0FBVXFJO29CQUFHLENBQUM7a0JBQ3JGO2dCQUNGLEdBQUcsRUFBRTtjQUNQO1lBQ0Y7WUFDQSxPQUFPO1VBQ1Q7VUFFQTZXLEtBQUEsRUFBT0EsQ0FBQ0MsS0FBQSxFQUFPbmMsS0FBQSxLQUFpQjtZQTVTMUMsSUFBQXFLLEVBQUE7WUE2U1ksTUFBTXZJLElBQUEsSUFBUXVJLEVBQUEsR0FBQXJLLEtBQUEsQ0FBeUI2YSxhQUFBLEtBQXpCLGdCQUFBeFEsRUFBQSxDQUF3QytSLE9BQUEsQ0FBUTtZQUU5RHRDLFVBQUEsR0FBYTlaLEtBQUE7WUFFYmliLHVCQUFBLEdBQTBCLENBQUMsRUFBQ25aLElBQUEsb0JBQUFBLElBQUEsQ0FBTWlILFFBQUEsQ0FBUztZQUUzQyxPQUFPO1VBQ1Q7UUFDRjtNQUNGO01BRUFzVCxpQkFBQSxFQUFtQkEsQ0FBQzNiLFlBQUEsRUFBYzRiLFFBQUEsRUFBVXhmLEtBQUEsS0FBVTtRQUNwRCxNQUFNQyxXQUFBLEdBQWMyRCxZQUFBLENBQWEsQ0FBQztRQUNsQyxNQUFNNmIsT0FBQSxHQUFVeGYsV0FBQSxDQUFZK0IsT0FBQSxDQUFRLFNBQVMsTUFBTSxXQUFXLENBQUNtYyx1QkFBQTtRQUMvRCxNQUFNdUIsTUFBQSxHQUFTemYsV0FBQSxDQUFZK0IsT0FBQSxDQUFRLFNBQVMsTUFBTSxVQUFVLENBQUNvYyx3QkFBQTtRQUc3RCxNQUFNdUIsa0JBQUEsR0FBcUIxZixXQUFBLENBQVkrQixPQUFBLENBQVEsaUJBQWlCO1FBR2hFLE1BQU00ZCxnQkFBQSxHQUFtQixDQUFDLENBQUNELGtCQUFBO1FBRTNCLElBQUksQ0FBQ0YsT0FBQSxJQUFXLENBQUNDLE1BQUEsSUFBVSxDQUFDRSxnQkFBQSxFQUFrQjtVQUM1QztRQUNGO1FBR0EsSUFBSUEsZ0JBQUEsRUFBa0I7VUFDcEIsSUFBSTtZQUFFdFA7VUFBSyxJQUFJcVAsa0JBQUE7VUFFZixJQUFJLE9BQU9yUCxJQUFBLEtBQVMsVUFBVTtZQUM1QkEsSUFBQSxHQUFPQSxJQUFBO1VBQ1QsT0FBTztZQUNMQSxJQUFBLEdBQU94WSxtQkFBQSxDQUFvQmtGLGFBQUEsQ0FBQTNILFFBQUEsQ0FBU2lULElBQUEsQ0FBS2dJLElBQUksR0FBR3RRLEtBQUEsQ0FBTVMsTUFBTTtVQUM5RDtVQUVBLE1BQU07WUFBRTZILElBQUEsRUFBQXVYO1VBQUssSUFBSUYsa0JBQUE7VUFDakIsTUFBTUcsR0FBQSxHQUFLRCxLQUFBLEdBQU92UCxJQUFBLENBQUtoTSxNQUFBO1VBRXZCLE1BQU1pYSxRQUFBLEdBQVdWLHlCQUFBLENBQTBCdk4sSUFBSTtVQUUvQyxPQUFPZ08sWUFBQSxDQUFhO1lBQ2xCakUsSUFBQTtZQUNBcmEsS0FBQTtZQUNBc0ksSUFBQSxFQUFBdVgsS0FBQTtZQUNBdFgsRUFBQSxFQUFJO2NBQUVvSCxDQUFBLEVBQUdtUTtZQUFHO1lBQ1p2QjtVQUNGLENBQUM7UUFDSDtRQUdBLE1BQU1qVyxJQUFBLEdBQU9rWCxRQUFBLENBQVNyZixHQUFBLENBQUlpRixPQUFBLENBQVEyYSxhQUFBLENBQWMvZixLQUFBLENBQU1HLEdBQUEsQ0FBSWlGLE9BQU87UUFDakUsTUFBTW1ELEVBQUEsR0FBS2lYLFFBQUEsQ0FBU3JmLEdBQUEsQ0FBSWlGLE9BQUEsQ0FBUTRhLFdBQUEsQ0FBWWhnQixLQUFBLENBQU1HLEdBQUEsQ0FBSWlGLE9BQU87UUFHN0QsSUFBSSxDQUFDckwsUUFBQSxDQUFTdU8sSUFBSSxLQUFLLENBQUNDLEVBQUEsSUFBTUQsSUFBQSxLQUFTQyxFQUFBLENBQUdvSCxDQUFBLEVBQUc7VUFDM0M7UUFDRjtRQUVBLE9BQU8yTyxZQUFBLENBQWE7VUFDbEJqRSxJQUFBO1VBQ0FyYSxLQUFBO1VBQ0FzSSxJQUFBO1VBQ0FDLEVBQUE7VUFDQWdXLFFBQUEsRUFBVXZCO1FBQ1osQ0FBQztNQUNIO0lBQ0YsQ0FBQztFQUNILENBQUM7RUFFRCxPQUFPeGMsT0FBQTtBQUNUO0FiMVZPLElBQU15ZixnQkFBQSxHQUFOLE1BQXVCO0VBUzVCcGYsWUFBWWhLLFVBQUEsRUFBd0JrSyxNQUFBLEVBQWdCO0lBRnBELEtBQUFtZixlQUFBLEdBQTRCLEVBQUM7SUFHM0IsS0FBS25mLE1BQUEsR0FBU0EsTUFBQTtJQUNkLEtBQUtsSyxVQUFBLEdBQWFtRSxpQkFBQSxDQUFrQm5FLFVBQVU7SUFDOUMsS0FBSzRKLE1BQUEsR0FBU2pJLDZCQUFBLENBQThCLEtBQUszQixVQUFBLEVBQVlrSyxNQUFNO0lBQ25FLEtBQUtvZixlQUFBLENBQWdCO0VBQ3ZCOzs7OztFQVlBLElBQUlqZixTQUFBLEVBQXdCO0lBQzFCLE9BQU8sS0FBS3JLLFVBQUEsQ0FBV3lVLE1BQUEsQ0FBTyxDQUFDcEssUUFBQSxFQUFVMkgsU0FBQSxLQUFjO01BQ3JELE1BQU1FLE9BQUEsR0FBVTtRQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtRQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7UUFDbkI0RCxPQUFBLEVBQVMsS0FBS2xJLE1BQUEsQ0FBT3FmLGdCQUFBLENBQWlCdlgsU0FBQSxDQUFVbEgsSUFBcUI7UUFDckVaLE1BQUEsRUFBUSxLQUFLQSxNQUFBO1FBQ2I2RyxJQUFBLEVBQU1uUCxtQkFBQSxDQUFvQm9RLFNBQUEsQ0FBVWxILElBQUEsRUFBTSxLQUFLbEIsTUFBTTtNQUN2RDtNQUVBLE1BQU00ZixXQUFBLEdBQWN4b0IsaUJBQUEsQ0FBNENnUixTQUFBLEVBQVcsZUFBZUUsT0FBTztNQUVqRyxJQUFJLENBQUNzWCxXQUFBLEVBQWE7UUFDaEIsT0FBT25mLFFBQUE7TUFDVDtNQUVBLE9BQU87UUFDTCxHQUFHQSxRQUFBO1FBQ0gsR0FBR21mLFdBQUEsQ0FBWTtNQUNqQjtJQUNGLEdBQUcsQ0FBQyxDQUFnQjtFQUN0Qjs7Ozs7RUFNQSxJQUFJN2YsUUFBQSxFQUFvQjtJQUN0QixNQUFNO01BQUVPO0lBQU8sSUFBSTtJQU9uQixNQUFNbEssVUFBQSxHQUFhdUUsY0FBQSxDQUFlLENBQUMsR0FBRyxLQUFLdkUsVUFBVSxFQUFFc2EsT0FBQSxDQUFRLENBQUM7SUFFaEUsTUFBTW1QLFVBQUEsR0FBYXpwQixVQUFBLENBQVcwcEIsT0FBQSxDQUFRMVgsU0FBQSxJQUFhO01BQ2pELE1BQU1FLE9BQUEsR0FBVTtRQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtRQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7UUFDbkI0RCxPQUFBLEVBQVMsS0FBS2xJLE1BQUEsQ0FBT3FmLGdCQUFBLENBQWlCdlgsU0FBQSxDQUFVbEgsSUFBcUI7UUFDckVaLE1BQUE7UUFDQTZHLElBQUEsRUFBTW5QLG1CQUFBLENBQW9Cb1EsU0FBQSxDQUFVbEgsSUFBQSxFQUFNLEtBQUtsQixNQUFNO01BQ3ZEO01BRUEsTUFBTUQsT0FBQSxHQUFvQixFQUFDO01BRTNCLE1BQU1nZ0Isb0JBQUEsR0FBdUIzb0IsaUJBQUEsQ0FDM0JnUixTQUFBLEVBQ0Esd0JBQ0FFLE9BQ0Y7TUFFQSxJQUFJMFgsZUFBQSxHQUFpRCxDQUFDO01BR3RELElBQUk1WCxTQUFBLENBQVVqQixJQUFBLEtBQVMsVUFBVS9QLGlCQUFBLENBQTBDZ1IsU0FBQSxFQUFXLFlBQVlFLE9BQU8sR0FBRztRQUMxRzBYLGVBQUEsQ0FBZ0JDLFVBQUEsR0FBYSxNQUFNbHJCLElBQUEsQ0FBSzBtQixVQUFBLENBQVc7VUFBRW5iLE1BQUE7VUFBUW1PLElBQUEsRUFBTXJHO1FBQWtCLENBQUM7TUFDeEY7TUFFQSxJQUFJMlgsb0JBQUEsRUFBc0I7UUFDeEIsTUFBTUcsUUFBQSxHQUFXcGYsTUFBQSxDQUFPQyxXQUFBLENBQ3RCRCxNQUFBLENBQU9FLE9BQUEsQ0FBUStlLG9CQUFBLENBQXFCLENBQUMsRUFBRTllLEdBQUEsQ0FBSSxDQUFDLENBQUNrZixRQUFBLEVBQVUvZSxNQUFNLE1BQU07VUFDakUsT0FBTyxDQUFDK2UsUUFBQSxFQUFVLE1BQU0vZSxNQUFBLENBQU87WUFBRWQ7VUFBTyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNIO1FBRUEwZixlQUFBLEdBQWtCO1VBQUUsR0FBR0EsZUFBQTtVQUFpQixHQUFHRTtRQUFTO01BQ3REO01BRUEsTUFBTUUsWUFBQSxPQUFlNWtCLGFBQUEsQ0FBQTZrQixNQUFBLEVBQU9MLGVBQWU7TUFFM0NqZ0IsT0FBQSxDQUFRc0MsSUFBQSxDQUFLK2QsWUFBWTtNQUV6QixNQUFNRSxhQUFBLEdBQWdCbHBCLGlCQUFBLENBQThDZ1IsU0FBQSxFQUFXLGlCQUFpQkUsT0FBTztNQUV2RyxJQUFJeFAsdUJBQUEsQ0FBd0JzUCxTQUFBLEVBQVc5SCxNQUFBLENBQU9zRSxPQUFBLENBQVEyYixnQkFBZ0IsS0FBS0QsYUFBQSxFQUFlO1FBQ3hGLE1BQU1oSCxLQUFBLEdBQVFnSCxhQUFBLENBQWM7UUFFNUIsSUFBSWhILEtBQUEsSUFBU0EsS0FBQSxDQUFNelYsTUFBQSxFQUFRO1VBQ3pCLE1BQU0yYyxXQUFBLEdBQWNob0IsZ0JBQUEsQ0FBaUI7WUFDbkM4SCxNQUFBO1lBQ0FnWjtVQUNGLENBQUM7VUFFRCxNQUFNbUgsWUFBQSxHQUFldmIsS0FBQSxDQUFNQyxPQUFBLENBQVFxYixXQUFXLElBQUlBLFdBQUEsR0FBYyxDQUFDQSxXQUFXO1VBRTVFemdCLE9BQUEsQ0FBUXNDLElBQUEsQ0FBSyxHQUFHb2UsWUFBWTtRQUM5QjtNQUNGO01BRUEsTUFBTUMsYUFBQSxHQUFnQnRwQixpQkFBQSxDQUE4Q2dSLFNBQUEsRUFBVyxpQkFBaUJFLE9BQU87TUFFdkcsSUFBSXhQLHVCQUFBLENBQXdCc1AsU0FBQSxFQUFXOUgsTUFBQSxDQUFPc0UsT0FBQSxDQUFRK2IsZ0JBQWdCLEtBQUtELGFBQUEsRUFBZTtRQUN4RixNQUFNcEgsS0FBQSxHQUFRb0gsYUFBQSxDQUFjO1FBRTVCLElBQUlwSCxLQUFBLElBQVNBLEtBQUEsQ0FBTXpWLE1BQUEsRUFBUTtVQUN6QixNQUFNK2MsVUFBQSxHQUFheG1CLGdCQUFBLENBQWlCO1lBQUVrRyxNQUFBO1lBQVFnWjtVQUFNLENBQUM7VUFFckR2WixPQUFBLENBQVFzQyxJQUFBLENBQUssR0FBR3VlLFVBQVU7UUFDNUI7TUFDRjtNQUVBLE1BQU1DLHFCQUFBLEdBQXdCenBCLGlCQUFBLENBQzVCZ1IsU0FBQSxFQUNBLHlCQUNBRSxPQUNGO01BRUEsSUFBSXVZLHFCQUFBLEVBQXVCO1FBQ3pCLE1BQU1DLGtCQUFBLEdBQXFCRCxxQkFBQSxDQUFzQjtRQUVqRDlnQixPQUFBLENBQVFzQyxJQUFBLENBQUssR0FBR3llLGtCQUFrQjtNQUNwQztNQUVBLE9BQU8vZ0IsT0FBQTtJQUNULENBQUM7SUFFRCxPQUFPOGYsVUFBQTtFQUNUOzs7OztFQU1BLElBQUlyVixXQUFBLEVBQWE7SUFDZixPQUFPdlQsMkJBQUEsQ0FBNEIsS0FBS2IsVUFBVTtFQUNwRDs7Ozs7RUFNQSxJQUFJMnFCLFVBQUEsRUFBaUQ7SUFDbkQsTUFBTTtNQUFFemdCO0lBQU8sSUFBSTtJQUNuQixNQUFNO01BQUVrSjtJQUFlLElBQUk1TyxlQUFBLENBQWdCLEtBQUt4RSxVQUFVO0lBRTFELE9BQU8wSyxNQUFBLENBQU9DLFdBQUEsQ0FDWnlJLGNBQUEsQ0FDRzFHLE1BQUEsQ0FBT3NGLFNBQUEsSUFBYSxDQUFDLENBQUNoUixpQkFBQSxDQUFrQmdSLFNBQUEsRUFBVyxhQUFhLENBQUMsRUFDakVuSCxHQUFBLENBQUltSCxTQUFBLElBQWE7TUFDaEIsTUFBTXNCLG1CQUFBLEdBQXNCLEtBQUtjLFVBQUEsQ0FBVzFILE1BQUEsQ0FBTzJILFNBQUEsSUFBYUEsU0FBQSxDQUFVdEQsSUFBQSxLQUFTaUIsU0FBQSxDQUFVbEgsSUFBSTtNQUNqRyxNQUFNb0gsT0FBQSxHQUFVO1FBQ2RwSCxJQUFBLEVBQU1rSCxTQUFBLENBQVVsSCxJQUFBO1FBQ2hCMEQsT0FBQSxFQUFTd0QsU0FBQSxDQUFVeEQsT0FBQTtRQUNuQjRELE9BQUEsRUFBUyxLQUFLbEksTUFBQSxDQUFPcWYsZ0JBQUEsQ0FBaUJ2WCxTQUFBLENBQVVsSCxJQUFxQjtRQUNyRVosTUFBQTtRQUNBNkcsSUFBQSxFQUFNdlAsV0FBQSxDQUFZd1EsU0FBQSxDQUFVbEgsSUFBQSxFQUFNLEtBQUtsQixNQUFNO01BQy9DO01BQ0EsTUFBTWdoQixXQUFBLEdBQWM1cEIsaUJBQUEsQ0FBNkNnUixTQUFBLEVBQVcsZUFBZUUsT0FBTztNQUVsRyxJQUFJLENBQUMwWSxXQUFBLEVBQWE7UUFDaEIsT0FBTyxFQUFDO01BQ1Y7TUFFQSxNQUFNQyxRQUFBLEdBQWdDQSxDQUFDeGQsSUFBQSxFQUFNN0MsSUFBQSxFQUFNc2dCLE1BQUEsRUFBUUMsV0FBQSxFQUFhQyxnQkFBQSxLQUFxQjtRQUMzRixNQUFNblQsY0FBQSxHQUFpQnBXLHFCQUFBLENBQXNCNEwsSUFBQSxFQUFNaUcsbUJBQW1CO1FBRXRFLE9BQU9zWCxXQUFBLENBQVksRUFBRTs7VUFFbkJ2ZCxJQUFBO1VBQ0E3QyxJQUFBO1VBQ0FzZ0IsTUFBQTtVQUNBQyxXQUFBO1VBQ0FDLGdCQUFBOztVQUVBOWdCLE1BQUE7VUFDQThILFNBQUE7VUFDQTZGO1FBQ0YsQ0FBQztNQUNIO01BRUEsT0FBTyxDQUFDN0YsU0FBQSxDQUFVbEgsSUFBQSxFQUFNK2YsUUFBUTtJQUNsQyxDQUFDLENBQ0w7RUFDRjtFQUVBLElBQUlJLFVBQUEsRUFBaUQ7SUFDbkQsTUFBTTtNQUFFL2dCO0lBQU8sSUFBSTtJQUNuQixNQUFNO01BQUVtSjtJQUFlLElBQUk3TyxlQUFBLENBQWdCLEtBQUt4RSxVQUFVO0lBRTFELE9BQU8wSyxNQUFBLENBQU9DLFdBQUEsQ0FDWjBJLGNBQUEsQ0FDRzNHLE1BQUEsQ0FBT3NGLFNBQUEsSUFBYSxDQUFDLENBQUNoUixpQkFBQSxDQUFrQmdSLFNBQUEsRUFBVyxhQUFhLENBQUMsRUFDakVuSCxHQUFBLENBQUltSCxTQUFBLElBQWE7TUFDaEIsTUFBTXNCLG1CQUFBLEdBQXNCLEtBQUtjLFVBQUEsQ0FBVzFILE1BQUEsQ0FBTzJILFNBQUEsSUFBYUEsU0FBQSxDQUFVdEQsSUFBQSxLQUFTaUIsU0FBQSxDQUFVbEgsSUFBSTtNQUNqRyxNQUFNb0gsT0FBQSxHQUFVO1FBQ2RwSCxJQUFBLEVBQU1rSCxTQUFBLENBQVVsSCxJQUFBO1FBQ2hCMEQsT0FBQSxFQUFTd0QsU0FBQSxDQUFVeEQsT0FBQTtRQUNuQjRELE9BQUEsRUFBUyxLQUFLbEksTUFBQSxDQUFPcWYsZ0JBQUEsQ0FBaUJ2WCxTQUFBLENBQVVsSCxJQUFxQjtRQUNyRVosTUFBQTtRQUNBNkcsSUFBQSxFQUFNM1AsV0FBQSxDQUFZNFEsU0FBQSxDQUFVbEgsSUFBQSxFQUFNLEtBQUtsQixNQUFNO01BQy9DO01BQ0EsTUFBTXNoQixXQUFBLEdBQWNscUIsaUJBQUEsQ0FBNkNnUixTQUFBLEVBQVcsZUFBZUUsT0FBTztNQUVsRyxJQUFJLENBQUNnWixXQUFBLEVBQWE7UUFDaEIsT0FBTyxFQUFDO01BQ1Y7TUFFQSxNQUFNQyxRQUFBLEdBQWdDQSxDQUFDOVMsSUFBQSxFQUFNN04sSUFBQSxFQUFNd00sTUFBQSxLQUFXO1FBQzVELE1BQU1hLGNBQUEsR0FBaUJwVyxxQkFBQSxDQUFzQjRXLElBQUEsRUFBTS9FLG1CQUFtQjtRQUV0RSxPQUFPNFgsV0FBQSxDQUFZLEVBQUU7O1VBRW5CN1MsSUFBQTtVQUNBN04sSUFBQTtVQUNBd00sTUFBQTs7VUFFQTlNLE1BQUE7VUFDQThILFNBQUE7VUFDQTZGLGNBQUE7VUFDQXVULGdCQUFBLEVBQW1CbFYsS0FBQSxJQUErQjtZQUNoRHRSLHdCQUFBLENBQXlCeVQsSUFBQSxFQUFNbk8sTUFBQSxFQUFRZ00sS0FBSztVQUM5QztRQUNGLENBQUM7TUFDSDtNQUVBLE9BQU8sQ0FBQ2xFLFNBQUEsQ0FBVWxILElBQUEsRUFBTXFnQixRQUFRO0lBQ2xDLENBQUMsQ0FDTDtFQUNGOzs7OztFQU1RN0IsZ0JBQUEsRUFBa0I7SUFDeEIsTUFBTXRwQixVQUFBLEdBQWEsS0FBS0EsVUFBQTtJQUV4QixLQUFLa0ssTUFBQSxDQUFPcWYsZ0JBQUEsR0FBbUI3ZSxNQUFBLENBQU9DLFdBQUEsQ0FDcEMzSyxVQUFBLENBQVc2SyxHQUFBLENBQUltSCxTQUFBLElBQWEsQ0FBQ0EsU0FBQSxDQUFVbEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVSSxPQUFPLENBQUMsQ0FDakU7SUFFQXBTLFVBQUEsQ0FBV3dNLE9BQUEsQ0FBUXdGLFNBQUEsSUFBYTtNQTlScEMsSUFBQTBFLEVBQUE7TUErUk0sTUFBTXhFLE9BQUEsR0FBVTtRQUNkcEgsSUFBQSxFQUFNa0gsU0FBQSxDQUFVbEgsSUFBQTtRQUNoQjBELE9BQUEsRUFBU3dELFNBQUEsQ0FBVXhELE9BQUE7UUFDbkI0RCxPQUFBLEVBQVMsS0FBS2xJLE1BQUEsQ0FBT3FmLGdCQUFBLENBQWlCdlgsU0FBQSxDQUFVbEgsSUFBcUI7UUFDckVaLE1BQUEsRUFBUSxLQUFLQSxNQUFBO1FBQ2I2RyxJQUFBLEVBQU1uUCxtQkFBQSxDQUFvQm9RLFNBQUEsQ0FBVWxILElBQUEsRUFBTSxLQUFLbEIsTUFBTTtNQUN2RDtNQUVBLElBQUlvSSxTQUFBLENBQVVqQixJQUFBLEtBQVMsUUFBUTtRQUM3QixNQUFNK0MsV0FBQSxJQUFjNEMsRUFBQSxHQUFBdlgsWUFBQSxDQUFhNkIsaUJBQUEsQ0FBa0JnUixTQUFBLEVBQVcsZUFBZUUsT0FBTyxDQUFDLE1BQWpFLE9BQUF3RSxFQUFBLEdBQXNFO1FBRTFGLElBQUk1QyxXQUFBLEVBQWE7VUFDZixLQUFLdVYsZUFBQSxDQUFnQnBkLElBQUEsQ0FBSytGLFNBQUEsQ0FBVWxILElBQUk7UUFDMUM7TUFDRjtNQUVBLE1BQU11Z0IsY0FBQSxHQUFpQnJxQixpQkFBQSxDQUErQ2dSLFNBQUEsRUFBVyxrQkFBa0JFLE9BQU87TUFDMUcsTUFBTW9aLFFBQUEsR0FBV3RxQixpQkFBQSxDQUF5Q2dSLFNBQUEsRUFBVyxZQUFZRSxPQUFPO01BQ3hGLE1BQU1xWixRQUFBLEdBQVd2cUIsaUJBQUEsQ0FBeUNnUixTQUFBLEVBQVcsWUFBWUUsT0FBTztNQUN4RixNQUFNc1osaUJBQUEsR0FBb0J4cUIsaUJBQUEsQ0FDeEJnUixTQUFBLEVBQ0EscUJBQ0FFLE9BQ0Y7TUFDQSxNQUFNdVosYUFBQSxHQUFnQnpxQixpQkFBQSxDQUE4Q2dSLFNBQUEsRUFBVyxpQkFBaUJFLE9BQU87TUFDdkcsTUFBTXdaLE9BQUEsR0FBVTFxQixpQkFBQSxDQUF3Q2dSLFNBQUEsRUFBVyxXQUFXRSxPQUFPO01BQ3JGLE1BQU15WixNQUFBLEdBQVMzcUIsaUJBQUEsQ0FBdUNnUixTQUFBLEVBQVcsVUFBVUUsT0FBTztNQUNsRixNQUFNMFosU0FBQSxHQUFZNXFCLGlCQUFBLENBQTBDZ1IsU0FBQSxFQUFXLGFBQWFFLE9BQU87TUFFM0YsSUFBSW1aLGNBQUEsRUFBZ0I7UUFDbEIsS0FBS25oQixNQUFBLENBQU9rQyxFQUFBLENBQUcsZ0JBQWdCaWYsY0FBYztNQUMvQztNQUVBLElBQUlDLFFBQUEsRUFBVTtRQUNaLEtBQUtwaEIsTUFBQSxDQUFPa0MsRUFBQSxDQUFHLFVBQVVrZixRQUFRO01BQ25DO01BRUEsSUFBSUMsUUFBQSxFQUFVO1FBQ1osS0FBS3JoQixNQUFBLENBQU9rQyxFQUFBLENBQUcsVUFBVW1mLFFBQVE7TUFDbkM7TUFFQSxJQUFJQyxpQkFBQSxFQUFtQjtRQUNyQixLQUFLdGhCLE1BQUEsQ0FBT2tDLEVBQUEsQ0FBRyxtQkFBbUJvZixpQkFBaUI7TUFDckQ7TUFFQSxJQUFJQyxhQUFBLEVBQWU7UUFDakIsS0FBS3ZoQixNQUFBLENBQU9rQyxFQUFBLENBQUcsZUFBZXFmLGFBQWE7TUFDN0M7TUFFQSxJQUFJQyxPQUFBLEVBQVM7UUFDWCxLQUFLeGhCLE1BQUEsQ0FBT2tDLEVBQUEsQ0FBRyxTQUFTc2YsT0FBTztNQUNqQztNQUVBLElBQUlDLE1BQUEsRUFBUTtRQUNWLEtBQUt6aEIsTUFBQSxDQUFPa0MsRUFBQSxDQUFHLFFBQVF1ZixNQUFNO01BQy9CO01BRUEsSUFBSUMsU0FBQSxFQUFXO1FBQ2IsS0FBSzFoQixNQUFBLENBQU9rQyxFQUFBLENBQUcsV0FBV3dmLFNBQVM7TUFDckM7SUFDRixDQUFDO0VBQ0g7QUFDRjtBQW5VYXhDLGdCQUFBLENBZ0JKeEwsT0FBQSxHQUFVelosaUJBQUE7QUFoQk5pbEIsZ0JBQUEsQ0FrQkp4USxJQUFBLEdBQU9yVSxjQUFBO0FBbEJINmtCLGdCQUFBLENBb0JKeUMsT0FBQSxHQUFVdHJCLGlCQUFBO0FxSDlDbkIsSUFBQU4sa0JBQUE7QUFBQTZyQixTQUFBLENBQUE3ckIsa0JBQUE7RUFBQThyQix1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQ1dPLElBQU1qdUIsU0FBQSxHQUFOLE1BQU1rdUIsVUFBQSxTQUFnRDVILFVBQUEsQ0FJM0Q7RUFKSzdhLFlBQUE7SUFBQSxTQUFBbWIsU0FBQTtJQUtMLEtBQUFwVSxJQUFBLEdBQU87RUFBQTs7Ozs7RUFNUCxPQUFPc1EsT0FDTG5ZLE1BQUEsR0FBa0YsQ0FBQyxHQUNuRjtJQUVBLE1BQU1rYyxjQUFBLEdBQWlCLE9BQU9sYyxNQUFBLEtBQVcsYUFBYUEsTUFBQSxDQUFPLElBQUlBLE1BQUE7SUFDakUsT0FBTyxJQUFJdWpCLFVBQUEsQ0FBZ0JySCxjQUFjO0VBQzNDO0VBRUFOLFVBQVV0VyxPQUFBLEVBQTRCO0lBQ3BDLE9BQU8sTUFBTXNXLFNBQUEsQ0FBVXRXLE9BQU87RUFDaEM7RUFFQXVXLE9BS0VFLGNBQUEsRUFVNkM7SUFFN0MsTUFBTUcsY0FBQSxHQUFpQixPQUFPSCxjQUFBLEtBQW1CLGFBQWFBLGNBQUEsQ0FBZSxJQUFJQSxjQUFBO0lBQ2pGLE9BQU8sTUFBTUYsTUFBQSxDQUFPSyxjQUFjO0VBQ3BDO0FBQ0Y7QXhHNUNPLElBQU0yRyx1QkFBQSxHQUEwQnh0QixTQUFBLENBQVU4aUIsTUFBQSxDQUF1QztFQUN0RnZXLElBQUEsRUFBTTtFQUVOa2EsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMekwsY0FBQSxFQUFnQjtJQUNsQjtFQUNGO0VBRUFrUixzQkFBQSxFQUF3QjtJQUN0QixPQUFPLENBQ0wsSUFBSXBrQixhQUFBLENBQUFxZCxNQUFBLENBQU87TUFDVDlPLEdBQUEsRUFBSyxJQUFJdk8sYUFBQSxDQUFBcW1CLFNBQUEsQ0FBVSx5QkFBeUI7TUFDNUN6aUIsS0FBQSxFQUFPO1FBQ0wwaUIsdUJBQUEsRUFBeUJBLENBQUEsS0FBTTtVQUM3QixNQUFNO1lBQUV6aUI7VUFBTyxJQUFJO1VBQ25CLE1BQU07WUFBRWYsS0FBQTtZQUFPUztVQUFPLElBQUlNLE1BQUE7VUFDMUIsTUFBTTtZQUFFWixHQUFBO1lBQUtEO1VBQVUsSUFBSUYsS0FBQTtVQUMzQixNQUFNO1lBQUUyUztVQUFPLElBQUl6UyxTQUFBO1VBQ25CLE1BQU1vSSxJQUFBLEdBQU9vSSxJQUFBLENBQUsrRSxHQUFBLENBQUksR0FBRzlDLE1BQUEsQ0FBT2pSLEdBQUEsQ0FBSWdVLE1BQUEsSUFBU0EsTUFBQSxDQUFNOU0sS0FBQSxDQUFNVCxHQUFHLENBQUM7VUFDN0QsTUFBTUksRUFBQSxHQUFLbUksSUFBQSxDQUFLQyxHQUFBLENBQUksR0FBR2dDLE1BQUEsQ0FBT2pSLEdBQUEsQ0FBSWdVLE1BQUEsSUFBU0EsTUFBQSxDQUFNSixHQUFBLENBQUluTixHQUFHLENBQUM7VUFDekQsTUFBTWtJLGVBQUEsR0FBa0J0WCw0QkFBQSxDQUE2QjBILE1BQU07VUFDM0QsTUFBTTJILEtBQUEsR0FBUTtZQUFFRSxJQUFBO1lBQU1DO1VBQUc7VUFFekIsT0FBTzFQLGNBQUEsQ0FBZXNILEdBQUEsRUFBS2lJLEtBQUEsRUFBTztZQUNoQyxJQUFJLEtBQUsvQyxPQUFBLENBQVErSyxjQUFBLEtBQW1CLFNBQVk7Y0FBRUEsY0FBQSxFQUFnQixLQUFLL0ssT0FBQSxDQUFRK0s7WUFBZSxJQUFJLENBQUM7WUFDbkdDO1VBQ0YsQ0FBQztRQUNIO01BQ0Y7SUFDRixDQUFDLEVBQ0g7RUFDRjtBQUNGLENBQUM7QXlHM0NELElBQUFvVCxnQkFBQTtBQUFBZCxTQUFBLENBQUFjLGdCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBOUUsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQStFLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFsaEIsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQW1oQixhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBMUwsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQTJMLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBNUUsZ0JBQUEsRUFBQUEsQ0FBQSxL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NUM7RUFFQTVDLElBQUlrVyxRQUFBLEVBQWlDO0lBQ25DLElBQUlxbUIsT0FBQSxHQUFVO0lBRWQsTUFBTUMsY0FBQSxHQUFpQixLQUFLaitCLFdBQUEsQ0FBWThELEtBQUEsQ0FBTXVCLEtBQUEsQ0FBTSxLQUFLMDRCLFdBQVcsRUFBRTF5QixNQUFBLENBQU8sQ0FBQzZ5QixXQUFBLEVBQWFuNkIsSUFBQSxLQUFTO01BQ2xHLE1BQU04c0IsU0FBQSxHQUFZOXNCLElBQUEsQ0FBS282QixNQUFBLENBQU8sRUFBRXROLFNBQUEsQ0FBVXFOLFdBQVc7TUFFckQsSUFBSXJOLFNBQUEsQ0FBVW1OLE9BQUEsRUFBUztRQUNyQkEsT0FBQSxHQUFVO01BQ1o7TUFFQSxPQUFPbk4sU0FBQSxDQUFVM29CLEdBQUE7SUFDbkIsR0FBR3lQLFFBQVE7SUFFWCxPQUFPO01BQ0xBLFFBQUEsRUFBVXNtQixjQUFBO01BQ1ZEO0lBQ0Y7RUFDRjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9ydmQvb3V0In0=