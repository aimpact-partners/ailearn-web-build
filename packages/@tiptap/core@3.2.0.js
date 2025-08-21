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

// .beyond/uimport/temp/@tiptap/core.3.2.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvY29yZS4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0VkaXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuc2lvbk1hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NvbWJpbmVUcmFuc2FjdGlvblN0ZXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVOb2RlRnJvbUNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlSFRNTC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0SFRNTEZyb21GcmFnbWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hQnlSZXNvbHZlZEV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlSlNPTi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2VuZXJhdGVUZXh0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc05vZGVTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzVGV4dFNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcmVzb2x2ZUZvY3VzUG9zaXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3NlbGVjdGlvblRvSW5zZXJ0aW9uRW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvSW5wdXRSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvUGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9jbGlwYm9hcmRUZXh0U2VyaWFsaXplci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NsZWFyTm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jcmVhdGVQYXJhZ3JhcGhOZWFyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZXhpdENvZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9leHRlbmRNYXJrUmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9pbnNlcnRDb250ZW50QXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pbkl0ZW1CYWNrd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5JdGVtRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5UZXh0YmxvY2tCYWNrd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5UZXh0YmxvY2tGb3J3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbGlmdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnRFbXB0eUJsb2NrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbGlmdExpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbmV3bGluZUluQ29kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdEFsbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdE5vZGVCYWNrd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdE5vZGVGb3J3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2VsZWN0UGFyZW50Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFRleHRibG9ja0VuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFRleHRibG9ja1N0YXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE5vZGVTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRUZXh0U2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2lua0xpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc3BsaXRCbG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NwbGl0TGlzdEl0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVMaXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvd3JhcEluLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvd3JhcEluTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZGVsZXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9kcm9wLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9lZGl0YWJsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZm9jdXNFdmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2tleW1hcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvcGFzdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL3RhYmluZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaW5wdXRSdWxlcy93cmFwcGluZ0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jYW5JbnNlcnROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTm9kZVZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NyZWF0ZUNoYWluYWJsZVN0YXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvQ29tbWFuZE1hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FdmVudEVtaXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZWxlbWVudEZyb21TdHJpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NyZWF0ZURvY3VtZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9kZWZhdWx0QmxvY2tBdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZENoaWxkcmVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9maW5kQ2hpbGRyZW5JblJhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9maW5kUGFyZW50Tm9kZUNsb3Nlc3RUb1Bvcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZFBhcmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEV4dGVuc2lvbkZpZWxkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9mbGF0dGVuRXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc0Z1bmN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2NhbGxPclJldHVybi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc0VtcHR5T2JqZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zcGxpdEV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEF0dHJpYnV0ZXNGcm9tRXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tZXJnZUF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFJlbmRlcmVkQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9mcm9tU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pbmplY3RFeHRlbnNpb25BdHRyaWJ1dGVzVG9QYXJzZVJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZmluZER1cGxpY2F0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3NvcnRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9yZXNvbHZlRXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRUZXh0QmV0d2Vlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dFNlcmlhbGl6ZXJzRnJvbVNjaGVtYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya1R5cGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXROb2RlVHlwZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0Tm9kZUF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYVR5cGVOYW1lQnlOYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL3JlbW92ZUR1cGxpY2F0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldENoYW5nZWRSYW5nZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldERlYnVnSlNPTi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1JlZ0V4cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9vYmplY3RJbmNsdWRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya1JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRNYXJrc0JldHdlZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE5vZGVBdFBvc2l0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTY2hlbWFUeXBlQnlOYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTcGxpdHRlZEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHRDb250ZW50RnJvbU5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc01hcmtBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTm9kZUFjdGl2ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQXRFbmRPZk5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQXRTdGFydE9mTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNFeHRlbnNpb25SdWxlc0VuYWJsZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNOb2RlRW1wdHkudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWluTWF4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9wb3NUb0RPTVJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3Jld3JpdGVVbmtub3duQ29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1BsYWluT2JqZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21lcmdlRGVlcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuZGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9NYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzTnVtYmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvYmx1ci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NsZWFyQ29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NvbW1hbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVDdXJyZW50Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2RlbGV0ZU5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVSYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2VudGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZmlyc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNBbmRyb2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzaU9TLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZm9jdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9mb3JFYWNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvaW5zZXJ0Q29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc01hY09TLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMva2V5Ym9hcmRTaG9ydGN1dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9kZWxldGVQcm9wcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Jlc2V0QXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Njcm9sbEludG9WaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0Q29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRNZXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlTWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3RvZ2dsZU5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVXcmFwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdW5kb0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Vuc2V0QWxsTWFya3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91bnNldE1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91cGRhdGVBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9jb21tYW5kcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL05vZGVQb3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9zdHlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jcmVhdGVTdHlsZVRhZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvbWFya0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvbm9kZUlucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvdGV4dGJsb2NrVHlwZUlucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvdGV4dElucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2pzeC1ydW50aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2VzY2FwZUZvclJlZ0V4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTWFya1ZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9Ob2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvcGFzdGVSdWxlcy9tYXJrUGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvcGFzdGVSdWxlcy9ub2RlUGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvcGFzdGVSdWxlcy90ZXh0UGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvVHJhY2tlci50cyJdLCJuYW1lcyI6WyJjb3JlXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNvbW1hbmRNYW5hZ2VyIiwiRWRpdG9yIiwiRXh0ZW5zaW9uIiwiRnJhZ21lbnQiLCJGcmFnbWVudDYiLCJJbnB1dFJ1bGUiLCJNYXJrIiwiTWFya1ZpZXciLCJOb2RlIiwiTm9kZTMiLCJOb2RlUG9zIiwiTm9kZVZpZXciLCJQYXN0ZVJ1bGUiLCJUcmFja2VyIiwiY2FsbE9yUmV0dXJuIiwiY2FuSW5zZXJ0Tm9kZSIsImNvbWJpbmVUcmFuc2FjdGlvblN0ZXBzIiwiY3JlYXRlQ2hhaW5hYmxlU3RhdGUiLCJjcmVhdGVEb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoIiwiY3JlYXRlTm9kZUZyb21Db250ZW50IiwiY3JlYXRlU3R5bGVUYWciLCJkZWZhdWx0QmxvY2tBdCIsImRlbGV0ZVByb3BzIiwiZWxlbWVudEZyb21TdHJpbmciLCJlc2NhcGVGb3JSZWdFeCIsImV4dGVuc2lvbnMiLCJleHRlbnNpb25zX2V4cG9ydHMiLCJmaW5kQ2hpbGRyZW4iLCJmaW5kQ2hpbGRyZW5JblJhbmdlIiwiZmluZER1cGxpY2F0ZXMiLCJmaW5kUGFyZW50Tm9kZSIsImZpbmRQYXJlbnROb2RlQ2xvc2VzdFRvUG9zIiwiZmxhdHRlbkV4dGVuc2lvbnMiLCJmcm9tU3RyaW5nIiwiZ2VuZXJhdGVIVE1MIiwiZ2VuZXJhdGVKU09OIiwiZ2VuZXJhdGVUZXh0IiwiZ2V0QXR0cmlidXRlcyIsImdldEF0dHJpYnV0ZXNGcm9tRXh0ZW5zaW9ucyIsImdldENoYW5nZWRSYW5nZXMiLCJnZXREZWJ1Z0pTT04iLCJnZXRFeHRlbnNpb25GaWVsZCIsImdldEhUTUxGcm9tRnJhZ21lbnQiLCJnZXRNYXJrQXR0cmlidXRlcyIsImdldE1hcmtSYW5nZSIsImdldE1hcmtUeXBlIiwiZ2V0TWFya3NCZXR3ZWVuIiwiZ2V0Tm9kZUF0UG9zaXRpb24iLCJnZXROb2RlQXR0cmlidXRlcyIsImdldE5vZGVUeXBlIiwiZ2V0UmVuZGVyZWRBdHRyaWJ1dGVzIiwiZ2V0U2NoZW1hIiwiZ2V0U2NoZW1hQnlSZXNvbHZlZEV4dGVuc2lvbnMiLCJnZXRTY2hlbWFUeXBlQnlOYW1lIiwiZ2V0U2NoZW1hVHlwZU5hbWVCeU5hbWUiLCJnZXRTcGxpdHRlZEF0dHJpYnV0ZXMiLCJnZXRUZXh0IiwiZ2V0VGV4dEJldHdlZW4iLCJnZXRUZXh0Q29udGVudEZyb21Ob2RlcyIsImdldFRleHRTZXJpYWxpemVyc0Zyb21TY2hlbWEiLCJpbmplY3RFeHRlbnNpb25BdHRyaWJ1dGVzVG9QYXJzZVJ1bGUiLCJpbnB1dFJ1bGVzUGx1Z2luIiwiaXNBY3RpdmUiLCJpc0FuZHJvaWQiLCJpc0F0RW5kT2ZOb2RlIiwiaXNBdFN0YXJ0T2ZOb2RlIiwiaXNFbXB0eU9iamVjdCIsImlzRXh0ZW5zaW9uUnVsZXNFbmFibGVkIiwiaXNGdW5jdGlvbiIsImlzTGlzdCIsImlzTWFjT1MiLCJpc01hcmtBY3RpdmUiLCJpc05vZGVBY3RpdmUiLCJpc05vZGVFbXB0eSIsImlzTm9kZVNlbGVjdGlvbiIsImlzTnVtYmVyIiwiaXNQbGFpbk9iamVjdCIsImlzUmVnRXhwIiwiaXNTdHJpbmciLCJpc1RleHRTZWxlY3Rpb24iLCJpc2lPUyIsIm1hcmtJbnB1dFJ1bGUiLCJtYXJrUGFzdGVSdWxlIiwibWVyZ2VBdHRyaWJ1dGVzIiwibWVyZ2VEZWVwIiwibWluTWF4Iiwibm9kZUlucHV0UnVsZSIsIm5vZGVQYXN0ZVJ1bGUiLCJvYmplY3RJbmNsdWRlcyIsInBhc3RlUnVsZXNQbHVnaW4iLCJwb3NUb0RPTVJlY3QiLCJyZW1vdmVEdXBsaWNhdGVzIiwicmVzb2x2ZUV4dGVuc2lvbnMiLCJyZXNvbHZlRm9jdXNQb3NpdGlvbiIsInJld3JpdGVVbmtub3duQ29udGVudCIsInNlbGVjdGlvblRvSW5zZXJ0aW9uRW5kIiwic29ydEV4dGVuc2lvbnMiLCJzcGxpdEV4dGVuc2lvbnMiLCJ0ZXh0SW5wdXRSdWxlIiwidGV4dFBhc3RlUnVsZSIsInRleHRibG9ja1R5cGVJbnB1dFJ1bGUiLCJ1cGRhdGVNYXJrVmlld0F0dHJpYnV0ZXMiLCJ3cmFwcGluZ0lucHV0UnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfc3RhdGUiLCJyZXF1aXJlIiwiaW1wb3J0X3ZpZXciLCJpbXBvcnRfa2V5bWFwIiwiaW1wb3J0X3RyYW5zZm9ybSIsImltcG9ydF9tb2RlbCIsImltcG9ydF9tb2RlbDIiLCJpbXBvcnRfbW9kZWwzIiwiaW1wb3J0X21vZGVsNCIsImltcG9ydF9tb2RlbDUiLCJpbXBvcnRfbW9kZWw2IiwiaW1wb3J0X3N0YXRlMiIsImltcG9ydF9zdGF0ZTMiLCJpbXBvcnRfc3RhdGU0IiwiaW1wb3J0X3N0YXRlNSIsImltcG9ydF90cmFuc2Zvcm0yIiwiaW1wb3J0X21vZGVsNyIsImltcG9ydF9zdGF0ZTYiLCJpbXBvcnRfbW9kZWw4IiwiaW1wb3J0X3N0YXRlNyIsImltcG9ydF9zdGF0ZTgiLCJpbXBvcnRfdHJhbnNmb3JtMyIsImltcG9ydF9jb21tYW5kcyIsImltcG9ydF9zdGF0ZTkiLCJpbXBvcnRfY29tbWFuZHMyIiwiaW1wb3J0X2NvbW1hbmRzMyIsImltcG9ydF9zdGF0ZTEwIiwiaW1wb3J0X21vZGVsOSIsImltcG9ydF9jb21tYW5kczQiLCJpbXBvcnRfdHJhbnNmb3JtNCIsImltcG9ydF90cmFuc2Zvcm01IiwiaW1wb3J0X2NvbW1hbmRzNSIsImltcG9ydF9jb21tYW5kczYiLCJpbXBvcnRfY29tbWFuZHM3IiwiaW1wb3J0X2NvbW1hbmRzOCIsImltcG9ydF9zY2hlbWFfbGlzdCIsImltcG9ydF9jb21tYW5kczkiLCJpbXBvcnRfc3RhdGUxMSIsImltcG9ydF9jb21tYW5kczEwIiwiaW1wb3J0X2NvbW1hbmRzMTEiLCJpbXBvcnRfY29tbWFuZHMxMiIsImltcG9ydF9jb21tYW5kczEzIiwiaW1wb3J0X2NvbW1hbmRzMTQiLCJpbXBvcnRfY29tbWFuZHMxNSIsImltcG9ydF9zdGF0ZTEyIiwiaW1wb3J0X3N0YXRlMTMiLCJpbXBvcnRfc2NoZW1hX2xpc3QyIiwiaW1wb3J0X3N0YXRlMTQiLCJpbXBvcnRfdHJhbnNmb3JtNiIsImltcG9ydF9tb2RlbDEwIiwiaW1wb3J0X3N0YXRlMTUiLCJpbXBvcnRfdHJhbnNmb3JtNyIsImltcG9ydF90cmFuc2Zvcm04IiwiaW1wb3J0X2NvbW1hbmRzMTYiLCJpbXBvcnRfc2NoZW1hX2xpc3QzIiwiaW1wb3J0X3RyYW5zZm9ybTkiLCJpbXBvcnRfc3RhdGUxNiIsImltcG9ydF9zdGF0ZTE3IiwiaW1wb3J0X3N0YXRlMTgiLCJpbXBvcnRfc3RhdGUxOSIsImltcG9ydF9zdGF0ZTIwIiwiaW1wb3J0X3N0YXRlMjEiLCJpbXBvcnRfdHJhbnNmb3JtMTAiLCJpbXBvcnRfc3RhdGUyMiIsImltcG9ydF9zdGF0ZTIzIiwiY29uZmlnIiwic3RhdGUiLCJ0cmFuc2FjdGlvbiIsInNlbGVjdGlvbiIsImRvYyIsInN0b3JlZE1hcmtzIiwiYXBwbHkiLCJiaW5kIiwiYXBwbHlUcmFuc2FjdGlvbiIsInBsdWdpbnMiLCJzY2hlbWEiLCJyZWNvbmZpZ3VyZSIsInRvSlNPTiIsInRyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImVkaXRvciIsInJhd0NvbW1hbmRzIiwiZXh0ZW5zaW9uTWFuYWdlciIsImNvbW1hbmRzIiwiY3VzdG9tU3RhdGUiLCJoYXNDdXN0b21TdGF0ZSIsInZpZXciLCJidWlsZFByb3BzIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwibmFtZSIsImNvbW1hbmQyIiwibWV0aG9kIiwiYXJncyIsImNhbGxiYWNrIiwiZ2V0TWV0YSIsImRpc3BhdGNoIiwiY2hhaW4iLCJjcmVhdGVDaGFpbiIsImNhbiIsImNyZWF0ZUNhbiIsInN0YXJ0VHIiLCJzaG91bGREaXNwYXRjaCIsImNhbGxiYWNrcyIsImhhc1N0YXJ0VHJhbnNhY3Rpb24iLCJydW4zIiwicnVuIiwiZXZlcnkiLCJjaGFpbmVkQ29tbWFuZCIsInB1c2giLCJmb3JtYXR0ZWRDb21tYW5kcyIsIkV2ZW50RW1pdHRlciIsIm9uIiwiZXZlbnQiLCJmbiIsImVtaXQiLCJmb3JFYWNoIiwib2ZmIiwiZmlsdGVyIiwib25jZSIsIm9uY2VGbiIsInJlbW92ZUFsbExpc3RlbmVycyIsIm9sZERvYyIsInRyYW5zYWN0aW9ucyIsInRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsInN0ZXBzIiwic3RlcCIsInJlbW92ZVdoaXRlc3BhY2VzIiwibm9kZSIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsImkiLCJsZW5ndGgiLCJjaGlsZCIsIm5vZGVUeXBlIiwibm9kZVZhbHVlIiwidGVzdCIsInJlbW92ZUNoaWxkIiwidmFsdWUiLCJ3aW5kb3ciLCJFcnJvciIsIndyYXBwZWRWYWx1ZSIsImh0bWwiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJib2R5IiwiY29udGVudCIsIm9wdGlvbnMiLCJzbGljZSIsInBhcnNlT3B0aW9ucyIsImlzSlNPTkNvbnRlbnQiLCJpc1RleHRDb250ZW50IiwiaXNBcnJheUNvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJmcm9tQXJyYXkiLCJpdGVtIiwibm9kZUZyb21KU09OIiwiZXJyb3JPbkludmFsaWRDb250ZW50IiwiY2hlY2siLCJlcnJvciIsImNhdXNlIiwiY29uc29sZSIsIndhcm4iLCJoYXNJbnZhbGlkQ29udGVudCIsImludmFsaWRDb250ZW50IiwiY29udGVudENoZWNrU2NoZW1hIiwiU2NoZW1hIiwidG9wTm9kZSIsInNwZWMiLCJtYXJrcyIsIm5vZGVzIiwiYXBwZW5kIiwiX190aXB0YXBfX3ByaXZhdGVfX3Vua25vd25fX2NhdGNoX19hbGxfX25vZGUiLCJncm91cCIsInBhcnNlRE9NIiwidGFnIiwiZ2V0QXR0cnMiLCJlIiwib3V0ZXJIVE1MIiwiZnJvbVNjaGVtYSIsInBhcnNlU2xpY2UiLCJwYXJzZSIsInBhcnNlciIsIm1hdGNoIiwiZWRnZUNvdW50IiwidHlwZSIsImVkZ2UiLCJpc1RleHRibG9jayIsImhhc1JlcXVpcmVkQXR0cnMiLCJwcmVkaWNhdGUiLCJub2Rlc1dpdGhQb3MiLCJkZXNjZW5kYW50cyIsInBvcyIsInJhbmdlIiwibm9kZXNCZXR3ZWVuIiwiZnJvbSIsInRvIiwiJHBvcyIsImRlcHRoIiwiYmVmb3JlIiwic3RhcnQiLCIkZnJvbSIsImV4dGVuc2lvbiIsImZpZWxkIiwiY29udGV4dCIsInBhcmVudCIsInN0b3JhZ2UiLCJhZGRFeHRlbnNpb25zIiwiZmxhdCIsImZyYWdtZW50IiwiZG9jdW1lbnRGcmFnbWVudCIsIkRPTVNlcmlhbGl6ZXIiLCJzZXJpYWxpemVGcmFnbWVudCIsInRlbXBvcmFyeURvY3VtZW50IiwiZG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwia2V5cyIsImJhc2VFeHRlbnNpb25zIiwibm9kZUV4dGVuc2lvbnMiLCJtYXJrRXh0ZW5zaW9ucyIsImV4dGVuc2lvbkF0dHJpYnV0ZXMiLCJub2RlQW5kTWFya0V4dGVuc2lvbnMiLCJkZWZhdWx0QXR0cmlidXRlIiwiZGVmYXVsdCIsInZhbGlkYXRlIiwicmVuZGVyZWQiLCJyZW5kZXJIVE1MIiwicGFyc2VIVE1MIiwia2VlcE9uU3BsaXQiLCJpc1JlcXVpcmVkIiwiYWRkR2xvYmFsQXR0cmlidXRlcyIsImdsb2JhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGUiLCJ0eXBlcyIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGVzIiwibWVyZ2VkQXR0ciIsIm9iamVjdHMiLCJyZWR1Y2UiLCJpdGVtcyIsIm1lcmdlZEF0dHJpYnV0ZXMiLCJrZXkiLCJleGlzdHMiLCJ2YWx1ZUNsYXNzZXMiLCJTdHJpbmciLCJzcGxpdCIsImV4aXN0aW5nQ2xhc3NlcyIsImluc2VydENsYXNzZXMiLCJ2YWx1ZUNsYXNzIiwiaW5jbHVkZXMiLCJqb2luIiwibmV3U3R5bGVzIiwic3R5bGUyIiwidHJpbSIsIkJvb2xlYW4iLCJleGlzdGluZ1N0eWxlcyIsInN0eWxlTWFwIiwiTWFwIiwicHJvcGVydHkiLCJ2YWwiLCJwYXJ0Iiwic2V0Iiwibm9kZU9yTWFyayIsImF0dHJzIiwiTnVtYmVyIiwicGFyc2VSdWxlIiwib2xkQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGUiLCJjbGVhblVwU2NoZW1hSXRlbSIsImRhdGEiLCJfYSIsImFsbEF0dHJpYnV0ZXMiLCJmaW5kIiwiZXh0cmFOb2RlRmllbGRzIiwiZmllbGRzIiwiZXh0ZW5kTm9kZVNjaGVtYSIsImlubGluZSIsImF0b20iLCJzZWxlY3RhYmxlIiwiZHJhZ2dhYmxlIiwiY29kZSIsIndoaXRlc3BhY2UiLCJsaW5lYnJlYWtSZXBsYWNlbWVudCIsImRlZmluaW5nIiwiaXNvbGF0aW5nIiwiZXh0ZW5zaW9uQXR0cmlidXRlIiwiX2EyIiwiX2IiLCJ0b0RPTSIsIkhUTUxBdHRyaWJ1dGVzIiwicmVuZGVyVGV4dCIsInRvVGV4dCIsImV4dHJhTWFya0ZpZWxkcyIsImV4dGVuZE1hcmtTY2hlbWEiLCJpbmNsdXNpdmUiLCJleGNsdWRlcyIsInNwYW5uaW5nIiwibWFyayIsImZpbHRlcmVkIiwiZWwiLCJpbmRleCIsImluZGV4T2YiLCJTZXQiLCJkZWZhdWx0UHJpb3JpdHkiLCJzb3J0IiwiYSIsImIiLCJwcmlvcml0eUEiLCJwcmlvcml0eUIiLCJyZXNvbHZlZEV4dGVuc2lvbnMiLCJkdXBsaWNhdGVkTmFtZXMiLCJjb250ZW50Tm9kZSIsImZyb21KU09OIiwiZG9tIiwic3RhcnROb2RlIiwiYmxvY2tTZXBhcmF0b3IiLCJ0ZXh0U2VyaWFsaXplcnMiLCJ0ZXh0IiwiaXNCbG9jayIsInRleHRTZXJpYWxpemVyIiwiaXNUZXh0IiwiTWF0aCIsIm1heCIsInNpemUiLCJuYW1lT3JUeXBlIiwidHlwZU9yTmFtZSIsImVtcHR5IiwiJGhlYWQiLCJtYXJrSXRlbSIsIm5vZGUyIiwicmV2ZXJzZSIsIm5vZGVJdGVtIiwic2NoZW1hVHlwZSIsImFycmF5IiwiYnkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VlbiIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNpbXBsaWZ5Q2hhbmdlZFJhbmdlcyIsImNoYW5nZXMiLCJ1bmlxdWVDaGFuZ2VzIiwiY2hhbmdlIiwicmVzdCIsIl8iLCJzb21lIiwib3RoZXJDaGFuZ2UiLCJvbGRSYW5nZSIsIm5ld1JhbmdlIiwibWFwcGluZyIsIm1hcHMiLCJzdGVwTWFwIiwicmFuZ2VzIiwibmV3U3RhcnQiLCJuZXdFbmQiLCJvbGRTdGFydCIsImludmVydCIsIm9sZEVuZCIsInN0YXJ0T2Zmc2V0IiwiaXNUb3BOb2RlIiwidG9wTm9kZVR5cGUiLCJpbmNyZW1lbnQiLCJub2RlU2l6ZSIsIm91dHB1dDIiLCJvdXRwdXQiLCJjaGlsZENvdW50Iiwib2Zmc2V0IiwidG9TdHJpbmciLCJvYmplY3QxIiwib2JqZWN0MiIsInN0cmljdCIsImZpbmRNYXJrSW5TZXQiLCJrIiwiaXNNYXJrSW5TZXQiLCJjaGlsZEFmdGVyIiwicGFyZW50T2Zmc2V0IiwibWFyazIiLCJjaGlsZEJlZm9yZSIsInN0YXJ0SW5kZXgiLCJzdGFydFBvcyIsImVuZEluZGV4IiwiZW5kUG9zIiwicmVzb2x2ZSIsIm1heERlcHRoIiwiY3VycmVudERlcHRoIiwiY3VycmVudE5vZGUiLCJ0eXBlTmFtZSIsIm1heE1hdGNoIiwidGV4dEJlZm9yZSIsInNsaWNlRW5kUG9zIiwiY2h1bmsiLCJ0ZXh0Q29udGVudCIsImlzQXRvbSIsInNlbGVjdGlvblJhbmdlIiwibWFya1JhbmdlcyIsIiR0byIsInJlbGF0aXZlRnJvbSIsInJlbGF0aXZlVG8iLCJtaW4iLCJyYW5nZTIiLCJtYXRjaGVkUmFuZ2UiLCJtYXJrUmFuZ2UiLCJzdW0iLCJleGNsdWRlZFJhbmdlIiwibm9kZVJhbmdlcyIsIm1hdGNoZWROb2RlUmFuZ2VzIiwibm9kZVJhbmdlIiwiJGFuY2hvciIsInBhcmVudE5vZGUiLCIkcGFyZW50UG9zIiwiZW5kIiwiZW5hYmxlZCIsImVuYWJsZWRFeHRlbnNpb24iLCJjaGVja0NoaWxkcmVuIiwiaWdub3JlV2hpdGVzcGFjZSIsImlzTGVhZiIsImlzQ29udGVudEVtcHR5IiwiY2hpbGROb2RlIiwiTm9kZVNlbGVjdGlvbiIsIlRleHRTZWxlY3Rpb24iLCJtaW5Qb3MiLCJtYXhQb3MiLCJyZXNvbHZlZEZyb20iLCJyZXNvbHZlZEVuZCIsImNvb3Jkc0F0UG9zIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBvc2l0aW9uIiwic2VsZWN0aW9uQXRTdGFydCIsIlNlbGVjdGlvbiIsImF0U3RhcnQiLCJzZWxlY3Rpb25BdEVuZCIsImF0RW5kIiwiY3JlYXRlIiwicmV3cml0ZVVua25vd25Db250ZW50SW5uZXIiLCJqc29uIiwidmFsaWRNYXJrcyIsInZhbGlkTm9kZXMiLCJyZXdyaXR0ZW5Db250ZW50IiwiaGFzIiwib3JpZ2luYWwiLCJ1bnN1cHBvcnRlZCIsImZhbGxiYWNrVG9QYXJhZ3JhcGgiLCJzdGFydExlbiIsImJpYXMiLCJsYXN0IiwiUmVwbGFjZVN0ZXAiLCJSZXBsYWNlQXJvdW5kU3RlcCIsIl9mcm9tIiwiX3RvIiwiX25ld0Zyb20iLCJuZXdUbyIsInNldFNlbGVjdGlvbiIsIm5lYXIiLCJoYW5kbGVyIiwiaW5wdXRSdWxlTWF0Y2hlckhhbmRsZXIiLCJleGVjIiwiaW5wdXRSdWxlTWF0Y2giLCJyZXN1bHQiLCJpbnB1dCIsInJlcGxhY2VXaXRoIiwicnVsZXMiLCJwbHVnaW4iLCJjb21wb3NpbmciLCJub2RlQmVmb3JlIiwibm9kZUFmdGVyIiwibWF0Y2hlZCIsInJ1bGUiLCJzZXRNZXRhIiwiUGx1Z2luIiwiaW5pdCIsInByZXYiLCJzdG9yZWQiLCJzaW11bGF0ZWRJbnB1dE1ldGEiLCJpc1NpbXVsYXRlZElucHV0Iiwic2V0VGltZW91dCIsInNlbGVjdGlvblNldCIsImRvY0NoYW5nZWQiLCJoYW5kbGVUZXh0SW5wdXQiLCJoYW5kbGVET01FdmVudHMiLCJjb21wb3NpdGlvbmVuZCIsIiRjdXJzb3IiLCJoYW5kbGVLZXlEb3duIiwiaXNJbnB1dFJ1bGVzIiwiZ2V0VHlwZSIsImdldFByb3RvdHlwZU9mIiwidGFyZ2V0Iiwic291cmNlIiwiRXh0ZW5kYWJsZSIsImNvbmZpZ3VyZSIsImV4dGVuZCIsImFkZE9wdGlvbnMiLCJleHRlbmRlZENvbmZpZyIsIl9NYXJrIiwiYXJndW1lbnRzIiwicmVzb2x2ZWRDb25maWciLCJoYW5kbGVFeGl0IiwiY3VycmVudFBvcyIsImlzQXRFbmQiLCJjdXJyZW50TWFya3MiLCJpc0luTWFyayIsIm0iLCJyZW1vdmVNYXJrIiwicmVtb3ZlU3RvcmVkTWFyayIsImluc2VydFRleHQiLCJwYXN0ZVJ1bGVNYXRjaGVySGFuZGxlciIsIm1hdGNoQWxsIiwibWF0Y2hlcyIsInBhc3RlUnVsZU1hdGNoIiwicnVuMiIsInBhc3RlRXZlbnQiLCJkcm9wRXZlbnQiLCJoYW5kbGVycyIsInJlc29sdmVkVG8iLCJ0ZXh0VG9NYXRjaCIsInRleHRCZXR3ZWVuIiwic3VjY2VzcyIsInRpcHRhcERyYWdGcm9tT3RoZXJFZGl0b3IiLCJjcmVhdGVDbGlwYm9hcmRQYXN0ZUV2ZW50IiwiQ2xpcGJvYXJkRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwiRGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImRyYWdTb3VyY2VFbGVtZW50IiwiaXNQYXN0ZWRGcm9tUHJvc2VNaXJyb3IiLCJpc0Ryb3BwZWRGcm9tUHJvc2VNaXJyb3IiLCJEcmFnRXZlbnQiLCJwcm9jZXNzRXZlbnQiLCJwYXN0ZUV2dCIsImNoYWluYWJsZVN0YXRlIiwiaGFuZGxlRHJhZ3N0YXJ0IiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiaGFuZGxlRHJhZ2VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3AiLCJkcmFnRnJvbU90aGVyRWRpdG9yIiwiaXNFZGl0YWJsZSIsImRlbGV0ZVJhbmdlIiwicGFzdGUiLCJfdmlldyIsImdldERhdGEiLCJhcHBlbmRUcmFuc2FjdGlvbiIsIm9sZFN0YXRlIiwiaXNQYXN0ZSIsImlzRHJvcCIsInNpbXVsYXRlZFBhc3RlTWV0YSIsImlzU2ltdWxhdGVkUGFzdGUiLCJmcm9tMiIsInRvMiIsImZpbmREaWZmU3RhcnQiLCJmaW5kRGlmZkVuZCIsIkV4dGVuc2lvbk1hbmFnZXIiLCJzcGxpdHRhYmxlTWFya3MiLCJzZXR1cEV4dGVuc2lvbnMiLCJleHRlbnNpb25TdG9yYWdlIiwiYWRkQ29tbWFuZHMiLCJpbnB1dFJ1bGVzIiwicGFzdGVSdWxlcyIsImFsbFBsdWdpbnMiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsImRlZmF1bHRCaW5kaW5ncyIsIkFycm93UmlnaHQiLCJiaW5kaW5ncyIsInNob3J0Y3V0Iiwia2V5TWFwUGx1Z2luIiwia2V5bWFwIiwiYWRkSW5wdXRSdWxlcyIsImVuYWJsZUlucHV0UnVsZXMiLCJhZGRQYXN0ZVJ1bGVzIiwiZW5hYmxlUGFzdGVSdWxlcyIsImFkZFByb3NlTWlycm9yUGx1Z2lucyIsInByb3NlTWlycm9yUGx1Z2lucyIsIm5vZGVWaWV3cyIsImFkZE5vZGVWaWV3Iiwibm9kZXZpZXciLCJnZXRQb3MiLCJkZWNvcmF0aW9ucyIsImlubmVyRGVjb3JhdGlvbnMiLCJtYXJrVmlld3MiLCJhZGRNYXJrVmlldyIsIm1hcmtWaWV3IiwidXBkYXRlQXR0cmlidXRlcyIsIm9uQmVmb3JlQ3JlYXRlIiwib25DcmVhdGUiLCJvblVwZGF0ZSIsIm9uU2VsZWN0aW9uVXBkYXRlIiwib25UcmFuc2FjdGlvbiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkRlc3Ryb3kiLCJmbGF0dGVuIiwiX19leHBvcnQyIiwiQ2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIiLCJDb21tYW5kcyIsIkRlbGV0ZSIsIkRyb3AiLCJFZGl0YWJsZSIsIkZvY3VzRXZlbnRzIiwiS2V5bWFwIiwiUGFzdGUiLCJUYWJpbmRleCIsImZvY3VzRXZlbnRzUGx1Z2luS2V5IiwiX0V4dGVuc2lvbiIsIlBsdWdpbktleSIsImNsaXBib2FyZFRleHRTZXJpYWxpemVyIiwiY29tbWFuZHNfZXhwb3J0cyIsImJsdXIiLCJjbGVhckNvbnRlbnQiLCJjbGVhck5vZGVzIiwiY29tbWFuZCIsImNyZWF0ZVBhcmFncmFwaE5lYXIiLCJjdXQiLCJkZWxldGVDdXJyZW50Tm9kZSIsImRlbGV0ZU5vZGUiLCJkZWxldGVTZWxlY3Rpb24iLCJlbnRlciIsImV4aXRDb2RlIiwiZXh0ZW5kTWFya1JhbmdlIiwiZmlyc3QiLCJmb2N1cyIsImluc2VydENvbnRlbnQiLCJpbnNlcnRDb250ZW50QXQiLCJqb2luQmFja3dhcmQiLCJqb2luRG93biIsImpvaW5Gb3J3YXJkIiwiam9pbkl0ZW1CYWNrd2FyZCIsImpvaW5JdGVtRm9yd2FyZCIsImpvaW5UZXh0YmxvY2tCYWNrd2FyZCIsImpvaW5UZXh0YmxvY2tGb3J3YXJkIiwiam9pblVwIiwia2V5Ym9hcmRTaG9ydGN1dCIsImxpZnQiLCJsaWZ0RW1wdHlCbG9jayIsImxpZnRMaXN0SXRlbSIsIm5ld2xpbmVJbkNvZGUiLCJyZXNldEF0dHJpYnV0ZXMiLCJzY3JvbGxJbnRvVmlldyIsInNlbGVjdEFsbCIsInNlbGVjdE5vZGVCYWNrd2FyZCIsInNlbGVjdE5vZGVGb3J3YXJkIiwic2VsZWN0UGFyZW50Tm9kZSIsInNlbGVjdFRleHRibG9ja0VuZCIsInNlbGVjdFRleHRibG9ja1N0YXJ0Iiwic2V0Q29udGVudCIsInNldE1hcmsiLCJzZXROb2RlIiwic2V0Tm9kZVNlbGVjdGlvbiIsInNldFRleHRTZWxlY3Rpb24iLCJzaW5rTGlzdEl0ZW0iLCJzcGxpdEJsb2NrIiwic3BsaXRMaXN0SXRlbSIsInRvZ2dsZUxpc3QiLCJ0b2dnbGVNYXJrIiwidG9nZ2xlTm9kZSIsInRvZ2dsZVdyYXAiLCJ1bmRvSW5wdXRSdWxlIiwidW5zZXRBbGxNYXJrcyIsInVuc2V0TWFyayIsIndyYXBJbiIsIndyYXBJbkxpc3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc0Rlc3Ryb3llZCIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImVtaXRVcGRhdGUiLCIkbWFwcGVkRnJvbSIsIiRtYXBwZWRUbyIsImJsb2NrUmFuZ2UiLCJ0YXJnZXRMaWZ0RGVwdGgiLCJsaWZ0VGFyZ2V0IiwiZGVmYXVsdFR5cGUiLCJjb250ZW50TWF0Y2hBdCIsInNldE5vZGVNYXJrdXAiLCJvcmlnaW5SYW5nZSIsInRhcmdldFBvcyIsImNvbnRlbnRTbGljZSIsIm5ld1BvcyIsImluc2VydCIsImFmdGVyIiwiZGVsZXRlIiwibmV3U2VsZWN0aW9uIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ1c2VyQWdlbnQiLCJkZWxheWVkRm9jdXMiLCJoYXNGb2N1cyIsImlzU2FtZVNlbGVjdGlvbiIsImVxIiwic2V0U3RvcmVkTWFya3MiLCJpc0ZyYWdtZW50Iiwibm9kZU9yRnJhZ21lbnQiLCJ1cGRhdGVTZWxlY3Rpb24iLCJhcHBseUlucHV0UnVsZXMiLCJhcHBseVBhc3RlUnVsZXMiLCJlbWl0Q29udGVudEVycm9yIiwiZGlzYWJsZUNvbGxhYm9yYXRpb24iLCJjb2xsYWJvcmF0aW9uIiwiaXNEaXNhYmxlZCIsInByZXNlcnZlV2hpdGVzcGFjZSIsImVuYWJsZUNvbnRlbnRDaGVjayIsImlzT25seVRleHRDb250ZW50IiwiaXNPbmx5QmxvY2tDb250ZW50IiwiaXNFbXB0eVRleHRCbG9jayIsIm5ld0NvbnRlbnQiLCJ2IiwiZnJvbVNlbGVjdGlvbkF0U3RhcnQiLCJpc1RleHRTZWxlY3Rpb24yIiwiaGFzQ29udGVudCIsInBvaW50Iiwiam9pblBvaW50Iiwibm9ybWFsaXplS2V5TmFtZSIsInBhcnRzIiwiYWx0IiwiY3RybCIsInNoaWZ0IiwibWV0YSIsIm1vZCIsIktleWJvYXJkRXZlbnQiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjYXB0dXJlZFRyYW5zYWN0aW9uIiwiY2FwdHVyZVRyYW5zYWN0aW9uIiwic29tZVByb3AiLCJmIiwibmV3U3RlcCIsIm1heWJlU3RlcCIsImlzQWN0aXZlMiIsIm9iaiIsInByb3BPclByb3BzIiwibmV3T2JqIiwicHJvcCIsIm1hcmtUeXBlIiwiYWRkTWFyayIsIkFsbFNlbGVjdGlvbiIsImRvY3VtZW50MiIsImNhblNldE1hcmsiLCJuZXdNYXJrVHlwZSIsImN1cnNvciIsImlzSW5TZXQiLCJzb21lTm9kZVN1cHBvcnRzTWFyayIsImlubGluZUNvbnRlbnQiLCJhbGxvd3NNYXJrVHlwZSIsIl9wb3MiLCJpc0lubGluZSIsInBhcmVudEFsbG93c01hcmtUeXBlIiwiY3VycmVudE1hcmtzQWxsb3dNYXJrVHlwZSIsIm90aGVyTWFyayIsImFkZFN0b3JlZE1hcmsiLCJ0cmltbWVkRnJvbSIsInRyaW1tZWRUbyIsInNvbWVIYXNNYXJrIiwiYXR0cmlidXRlc1RvQ29weSIsInNhbWVQYXJlbnQiLCJjYW5TZXRCbG9jayIsInNldEJsb2NrVHlwZSIsInVwZGF0ZWRTdGF0ZSIsImVuc3VyZU1hcmtzIiwiZmlsdGVyZWRNYXJrcyIsImtlZXBNYXJrcyIsImNhblNwbGl0IiwiZGVmbHQiLCJpbmRleEFmdGVyIiwiZmlyc3QyIiwiJGZpcnN0IiwiY2FuUmVwbGFjZVdpdGgiLCJvdmVycmlkZUF0dHJzIiwiZ3JhbmRQYXJlbnQiLCJ3cmFwIiwiZGVwdGhCZWZvcmUiLCJkIiwiY29weSIsImRlcHRoQWZ0ZXIiLCJuZXdOZXh0VHlwZUF0dHJpYnV0ZXMyIiwibmV4dFR5cGUyIiwiY29udGVudE1hdGNoIiwiY3JlYXRlQW5kRmlsbCIsInJlcGxhY2UiLCJTbGljZSIsInNlbCIsIm4iLCJuZXh0VHlwZSIsIm5ld1R5cGVBdHRyaWJ1dGVzIiwibmV3TmV4dFR5cGVBdHRyaWJ1dGVzIiwiam9pbkxpc3RCYWNrd2FyZHMiLCJsaXN0VHlwZSIsImxpc3QiLCJub2RlQXQiLCJjYW5Kb2luQmFja3dhcmRzIiwiY2FuSm9pbiIsImpvaW5MaXN0Rm9yd2FyZHMiLCJjYW5Kb2luRm9yd2FyZHMiLCJsaXN0VHlwZU9yTmFtZSIsIml0ZW1UeXBlT3JOYW1lIiwiaXRlbVR5cGUiLCJwYXJlbnRMaXN0IiwidmFsaWRDb250ZW50IiwiY2FuV3JhcEluTGlzdCIsImV4dGVuZEVtcHR5TWFya1JhbmdlIiwidG9nZ2xlVHlwZU9yTmFtZSIsInRvZ2dsZVR5cGUiLCJ1bmRvYWJsZSIsImdldFN0YXRlIiwidG9VbmRvIiwiaiIsImRvY3MiLCJsYXN0UG9zIiwibGFzdE5vZGUiLCJ0cmltbWVkRnJvbTIiLCJ0cmltbWVkVG8yIiwiYXBwZW5kZWRUcmFuc2FjdGlvbnMiLCJfYyIsIl9iMiIsIl9jMiIsIl9kIiwiY29yZUV4dGVuc2lvbk9wdGlvbnMiLCJmaWx0ZXJUcmFuc2FjdGlvbiIsIm5leHRUcmFuc2FjdGlvbiIsIm1hcFJlc3VsdCIsImRlbGV0ZWRBZnRlciIsImRlbGV0ZWRCZWZvcmUiLCJpc0Z1bGx5V2l0aGluUmFuZ2UiLCJuZXdGcm9tIiwiZGVsZXRlZFJhbmdlIiwicGFydGlhbCIsImNvbWJpbmVkVHJhbnNmb3JtIiwiX2EzIiwiX2IzIiwiUmVtb3ZlTWFya1N0ZXAiLCJmb3VuZEJlZm9yZU1hcmsiLCJmb3VuZEFmdGVyTWFyayIsImFzeW5jIiwiaGFuZGxlRHJvcCIsIm1vdmVkIiwiZWRpdGFibGUiLCJpc0ZvY3VzZWQiLCJoYW5kbGVCYWNrc3BhY2UiLCJwYXJlbnRJc0lzb2xhdGluZyIsInBhcmVudFBvcyIsImlzQXRTdGFydCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUVudGVyIiwiYmFzZUtleW1hcCIsIkVudGVyIiwiTW9kLUVudGVyIiwiQmFja3NwYWNlIiwiTW9kLWEiLCJwY0tleW1hcCIsIm1hY0tleW1hcCIsIkN0cmwtYSIsIkN0cmwtZSIsIm5ld1N0YXRlIiwidHIyIiwiZG9jQ2hhbmdlcyIsImlnbm9yZVRyIiwiYWxsRnJvbSIsImFsbEVuZCIsImFsbFdhc1NlbGVjdGVkIiwiaXNFbXB0eSIsImhhbmRsZVBhc3RlIiwidGFiaW5kZXgiLCJfTm9kZVBvcyIsImFjdHVhbERlcHRoIiwicmVzb2x2ZWRQb3MiLCJlbGVtZW50IiwiZG9tQXRQb3MiLCJpc05vblRleHRBdG9tIiwiY2hpbGROb2RlUG9zIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImNsb3Nlc3QiLCJzZWxlY3RvciIsIm5vZGVBdHRyaWJ1dGVzIiwiYXR0cktleXMiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZpcnN0SXRlbU9ubHkiLCJjaGlsZFBvcyIsImRvZXNBbGxBdHRyaWJ1dGVzTWF0Y2giLCJjb25jYXQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsIm5vbmNlIiwic3VmZml4IiwidGlwdGFwU3R5bGVUYWciLCJzdHlsZU5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNzcyIsImVkaXRvclZpZXciLCJpc0luaXRpYWxpemVkIiwiaW5zdGFuY2VJZCIsInJhbmRvbSIsImluamVjdENTUyIsImluamVjdE5vbmNlIiwiYXV0b2ZvY3VzIiwiZWRpdG9yUHJvcHMiLCJlbmFibGVDb3JlRXh0ZW5zaW9ucyIsIm9uQ29udGVudEVycm9yIiwib25QYXN0ZSIsIm9uRHJvcCIsIm9uRGVsZXRlIiwiaXNDYXB0dXJpbmdUcmFuc2FjdGlvbiIsInNldE9wdGlvbnMiLCJjcmVhdGVFeHRlbnNpb25NYW5hZ2VyIiwiY3JlYXRlQ29tbWFuZE1hbmFnZXIiLCJjcmVhdGVTY2hlbWEiLCJpbml0aWFsRG9jIiwiY3JlYXRlRG9jIiwiZWRpdG9yU3RhdGUiLCJFZGl0b3JTdGF0ZSIsIm1vdW50IiwiY3JlYXRlVmlldyIsInVubW91bnQiLCJyZW1vdmUiLCJjb21tYW5kTWFuYWdlciIsInNldFByb3BzIiwidXBkYXRlU3RhdGUiLCJzZXRFZGl0YWJsZSIsIlByb3h5IiwiZHJhZ2dpbmciLCJnZXQiLCJSZWZsZWN0IiwicmVnaXN0ZXJQbHVnaW4iLCJoYW5kbGVQbHVnaW5zIiwidW5yZWdpc3RlclBsdWdpbiIsIm5hbWVPclBsdWdpbktleVRvUmVtb3ZlIiwicHJldlBsdWdpbnMiLCJuYW1lT3JQbHVnaW5LZXkiLCJzdGFydHNXaXRoIiwiY29yZUV4dGVuc2lvbnMiLCJleHQiLCJhbGxFeHRlbnNpb25zIiwibWVzc2FnZSIsIkVkaXRvclZpZXciLCJyb2xlIiwiZGlzcGF0Y2hUcmFuc2FjdGlvbiIsImNyZWF0ZU5vZGVWaWV3cyIsInByZXBlbmRDbGFzcyIsImNsYXNzTmFtZSIsInNlbGVjdGlvbkhhc0NoYW5nZWQiLCJyb290VHJXYXNBcHBsaWVkIiwicHJldlN0YXRlIiwibmV4dFN0YXRlIiwibW9zdFJlY2VudEZvY3VzVHIiLCJmaW5kTGFzdCIsImZvY3VzMiIsImJsdXIyIiwibmFtZU9yQXR0cmlidXRlcyIsImF0dHJpYnV0ZXNPclVuZGVmaW5lZCIsImdldEpTT04iLCJnZXRIVE1MIiwiJG5vZGUiLCIkZG9jIiwiJG5vZGVzIiwiY2FwdHVyZUdyb3VwIiwiZnVsbE1hdGNoIiwic3RhcnRTcGFjZXMiLCJzZWFyY2giLCJ0ZXh0U3RhcnQiLCJ0ZXh0RW5kIiwiZXhjbHVkZWRNYXJrcyIsImV4Y2x1ZGVkIiwibWFya0VuZCIsIm5ld05vZGUiLCJsYXN0SW5kZXhPZiIsIm1hdGNoU3RhcnQiLCJsYXN0Q2hhciIsImluc2VydGlvblN0YXJ0IiwiJHN0YXJ0IiwiY3V0T2ZmIiwid3JhcHBpbmciLCJmaW5kV3JhcHBpbmciLCJrZWVwQXR0cmlidXRlcyIsImpvaW5QcmVkaWNhdGUiLCJGdW5jdGlvbiIsIm1hdGNoVHlwZSIsInN0cmluZyIsImNoZWNrTWFyayIsInRoaXNNYXJrIiwiZm91bmRNYXJrIiwibmVlZHNVcGRhdGUiLCJ1cGRhdGVkTWFyayIsImNvbXBvbmVudCIsImNvbnRlbnRET00iLCJpZ25vcmVNdXRhdGlvbiIsIm11dGF0aW9uIiwiY2hhbmdlZE5vZGVzIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImlzQ29udGVudEVkaXRhYmxlIiwiX05vZGUiLCJpc0RyYWdnaW5nIiwic3RvcEV2ZW50Iiwib25EcmFnU3RhcnQiLCJfZSIsIl9mIiwiX2ciLCJkcmFnSGFuZGxlIiwiZG9tQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFuZGxlQm94Iiwib2Zmc2V0WCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WSIsImNsb25lZE5vZGUiLCJjbG9uZU5vZGUiLCJkYXRhVHJhbnNmZXIiLCJzZXREcmFnSW1hZ2UiLCJpc0luRWxlbWVudCIsImlzRHJhZ0V2ZW50IiwiaXNEcm9wRXZlbnQiLCJpc0lucHV0IiwidGFnTmFtZSIsImlzRHJhZ2dhYmxlIiwiaXNTZWxlY3RhYmxlIiwiaXNDb3B5RXZlbnQiLCJpc1Bhc3RlRXZlbnQiLCJpc0N1dEV2ZW50IiwiaXNDbGlja0V2ZW50IiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkRHJhZ0hhbmRsZSIsImdldENvbnRlbnQiLCJjdXJyZW50U3RlcCIsImRlbGV0ZWQiLCJtYXBwZWRQb3NpdGlvbiIsIm5ld1Bvc2l0aW9uIiwiZ2V0TWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxLQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxL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QUEsZUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFB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T1Y7SUFBTSxNQUFNO01BQ3BDLElBQUkrZixNQUFBLEdBQVMxbkIsTUFBQSxDQUFPaXVCLE9BQUE7TUFDcEIsSUFBSXJsQixLQUFBLEdBQVFQLEtBQUEsQ0FBTUUsSUFBQTtNQUNsQixNQUFNK04sR0FBQSxHQUFNak8sS0FBQSxDQUFNRyxFQUFBO01BRWxCLElBQUliLEtBQUEsQ0FBTSxJQUFJO1FBQ1osTUFBTStMLE1BQUEsR0FBUy9MLEtBQUEsQ0FBTSxHQUFHaXlCLFdBQUEsQ0FBWWp5QixLQUFBLENBQU0sRUFBRTtRQUU1QytmLE1BQUEsSUFBVS9mLEtBQUEsQ0FBTSxHQUFHcEMsS0FBQSxDQUFNbU8sTUFBQSxHQUFTL0wsS0FBQSxDQUFNLEdBQUdwRCxNQUFNO1FBQ2pEcUUsS0FBQSxJQUFTOEssTUFBQTtRQUVULE1BQU11bUIsTUFBQSxHQUFTcnhCLEtBQUEsR0FBUTBOLEdBQUE7UUFFdkIsSUFBSTJqQixNQUFBLEdBQVMsR0FBRztVQUNkdlMsTUFBQSxHQUFTL2YsS0FBQSxDQUFNLEdBQUdwQyxLQUFBLENBQU1tTyxNQUFBLEdBQVN1bUIsTUFBQSxFQUFRdm1CLE1BQU0sSUFBSWdVLE1BQUE7VUFDbkQ5ZSxLQUFBLEdBQVEwTixHQUFBO1FBQ1Y7TUFDRjtNQUVBclcsS0FBQSxDQUFNWSxFQUFBLENBQUc2YixVQUFBLENBQVdnTCxNQUFBLEVBQVE5ZSxLQUFBLEVBQU8wTixHQUFHO0lBQ3hDO0VBQ0YsQ0FBQztBQUNIO0FDMUJPLElBQU10Z0IsT0FBQSxHQUFOLE1BQWM7RUFLbkI4SyxZQUFZWixXQUFBLEVBQTBCO0lBQ3BDLEtBQUtBLFdBQUEsR0FBY0EsV0FBQTtJQUNuQixLQUFLbzlCLFdBQUEsR0FBYyxLQUFLcDlCLFdBQUEsQ0FBWThELEtBQUEsQ0FBTU8sTUFBQTtFQUM1QztFQUVBNUMsSUFBSWtXLFFBQUEsRUFBaUM7SUFDbkMsSUFBSTBsQixPQUFBLEdBQVU7SUFFZCxNQUFNQyxjQUFBLEdBQWlCLEtBQUt0OUIsV0FBQSxDQUFZOEQsS0FBQSxDQUFNdUIsS0FBQSxDQUFNLEtBQUsrM0IsV0FBVyxFQUFFL3hCLE1BQUEsQ0FBTyxDQUFDa3lCLFdBQUEsRUFBYXg1QixJQUFBLEtBQVM7TUFDbEcsTUFBTXlzQixTQUFBLEdBQVl6c0IsSUFBQSxDQUFLeTVCLE1BQUEsQ0FBTyxFQUFFaE4sU0FBQSxDQUFVK00sV0FBVztNQUVyRCxJQUFJL00sU0FBQSxDQUFVNk0sT0FBQSxFQUFTO1FBQ3JCQSxPQUFBLEdBQVU7TUFDWjtNQUVBLE9BQU83TSxTQUFBLENBQVV0b0IsR0FBQTtJQUNuQixHQUFHeVAsUUFBUTtJQUVYLE9BQU87TUFDTEEsUUFBQSxFQUFVMmxCLGNBQUE7TUFDVkQ7SUFDRjtFQUNGO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==