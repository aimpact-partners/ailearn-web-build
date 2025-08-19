System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","use-sync-external-store@1.5.0/shim","react@18.3.1/jsx-runtime","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0","use-sync-external-store@1.5.0/shim/with-selector"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["use-sync-external-store","1.5.0"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["fast-deep-equal","3.1.3"],["@tiptap/react","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('use-sync-external-store@1.5.0/shim', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/keymap', dep), dep => dependencies.set('@tiptap/pm@3.2.0/transform', dep), dep => dependencies.set('@tiptap/pm@3.2.0/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/schema-list', dep), dep => dependencies.set('@tiptap/core@3.2.0', dep), dep => dependencies.set('use-sync-external-store@1.5.0/shim/with-selector', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/fast-deep-equal/es6/react.js
var require_react = __commonJS({
  "node_modules/fast-deep-equal/es6/react.js"(exports, module2) {
    "use strict";

    var envHasBigInt64Array = typeof BigInt64Array !== "undefined";
    module2.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a instanceof Map && b instanceof Map) {
          if (a.size !== b.size) return false;
          for (i of a.entries()) if (!b.has(i[0])) return false;
          for (i of a.entries()) if (!equal(i[1], b.get(i[0]))) return false;
          return true;
        }
        if (a instanceof Set && b instanceof Set) {
          if (a.size !== b.size) return false;
          for (i of a.entries()) if (!b.has(i[0])) return false;
          return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0;) {
          var key = keys[i];
          if (key === "_owner" && a.$$typeof) {
            continue;
          }
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// .beyond/uimport/@tiptap/react.3.2.0.js
var react_3_2_0_exports = {};
__export(react_3_2_0_exports, {
  EditorConsumer: () => EditorConsumer,
  EditorContent: () => EditorContent,
  EditorContext: () => EditorContext,
  EditorProvider: () => EditorProvider,
  MarkViewContent: () => MarkViewContent,
  NodeViewContent: () => NodeViewContent,
  NodeViewWrapper: () => NodeViewWrapper,
  PureEditorContent: () => PureEditorContent,
  ReactMarkView: () => ReactMarkView,
  ReactMarkViewContext: () => ReactMarkViewContext,
  ReactMarkViewRenderer: () => ReactMarkViewRenderer,
  ReactNodeView: () => ReactNodeView,
  ReactNodeViewContentProvider: () => ReactNodeViewContentProvider,
  ReactNodeViewContext: () => ReactNodeViewContext,
  ReactNodeViewRenderer: () => ReactNodeViewRenderer,
  ReactRenderer: () => ReactRenderer,
  useCurrentEditor: () => useCurrentEditor,
  useEditor: () => useEditor,
  useEditorState: () => useEditorState,
  useReactNodeView: () => useReactNodeView
});
module.exports = __toCommonJS(react_3_2_0_exports);

// node_modules/@tiptap/react/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  EditorConsumer: () => EditorConsumer,
  EditorContent: () => EditorContent,
  EditorContext: () => EditorContext,
  EditorProvider: () => EditorProvider,
  MarkViewContent: () => MarkViewContent,
  NodeViewContent: () => NodeViewContent,
  NodeViewWrapper: () => NodeViewWrapper,
  PureEditorContent: () => PureEditorContent,
  ReactMarkView: () => ReactMarkView,
  ReactMarkViewContext: () => ReactMarkViewContext,
  ReactMarkViewRenderer: () => ReactMarkViewRenderer,
  ReactNodeView: () => ReactNodeView,
  ReactNodeViewContentProvider: () => ReactNodeViewContentProvider,
  ReactNodeViewContext: () => ReactNodeViewContext,
  ReactNodeViewRenderer: () => ReactNodeViewRenderer,
  ReactRenderer: () => ReactRenderer,
  useCurrentEditor: () => useCurrentEditor,
  useEditor: () => useEditor,
  useEditorState: () => useEditorState,
  useReactNodeView: () => useReactNodeView
});
var import_react = require("react@18.3.1");
var import_react2 = __toESM(require("react@18.3.1"), 0);
var import_react_dom = __toESM(require("react-dom@18.3.1"), 0);
var import_shim = require("use-sync-external-store@1.5.0/shim");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var import_core = require("@tiptap/core@3.2.0");
var import_react3 = require("react@18.3.1");
var import_shim2 = require("use-sync-external-store@1.5.0/shim");
var import_react4 = __toESM(require_react(), 1);
var import_react5 = require("react@18.3.1");
var import_with_selector = require("use-sync-external-store@1.5.0/shim/with-selector");
var import_jsx_runtime2 = require("react@18.3.1/jsx-runtime");
var import_react6 = require("react@18.3.1");
var import_jsx_runtime3 = require("react@18.3.1/jsx-runtime");
var import_react7 = __toESM(require("react@18.3.1"), 0);
var import_jsx_runtime4 = require("react@18.3.1/jsx-runtime");
var import_core2 = require("@tiptap/core@3.2.0");
var import_react8 = __toESM(require("react@18.3.1"), 0);
var import_react9 = require("react@18.3.1");
var import_react_dom2 = require("react-dom@18.3.1");
var import_jsx_runtime5 = require("react@18.3.1/jsx-runtime");
var import_jsx_runtime6 = require("react@18.3.1/jsx-runtime");
var import_core3 = require("@tiptap/core@3.2.0");
var import_react10 = require("react@18.3.1");
var import_jsx_runtime7 = require("react@18.3.1/jsx-runtime");
__reExport(dist_exports, require("@tiptap/core@3.2.0"));
var mergeRefs = (...refs) => {
  return node => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ;
        ref.current = node;
      }
    });
  };
};
var Portals = ({
  contentComponent
}) => {
  const renderers = (0, import_shim.useSyncExternalStore)(contentComponent.subscribe, contentComponent.getSnapshot, contentComponent.getServerSnapshot);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: Object.values(renderers)
  });
};
function getInstance() {
  const subscribers = /* @__PURE__ */new Set();
  let renderers = {};
  return {
    subscribe(callback) {
      subscribers.add(callback);
      return () => {
        subscribers.delete(callback);
      };
    },
    getSnapshot() {
      return renderers;
    },
    getServerSnapshot() {
      return renderers;
    },
    setRenderer(id, renderer) {
      renderers = {
        ...renderers,
        [id]: import_react_dom.default.createPortal(renderer.reactElement, renderer.element, id)
      };
      subscribers.forEach(subscriber => subscriber());
    },
    removeRenderer(id) {
      const nextRenderers = {
        ...renderers
      };
      delete nextRenderers[id];
      renderers = nextRenderers;
      subscribers.forEach(subscriber => subscriber());
    }
  };
}
var PureEditorContent = class extends import_react2.default.Component {
  constructor(props) {
    var _a;
    super(props);
    this.editorContentRef = import_react2.default.createRef();
    this.initialized = false;
    this.state = {
      hasContentComponentInitialized: Boolean((_a = props.editor) == null ? void 0 : _a.contentComponent)
    };
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  init() {
    const editor = this.props.editor;
    if (editor && !editor.isDestroyed && editor.options.element) {
      if (editor.contentComponent) {
        return;
      }
      const element = this.editorContentRef.current;
      element.append(...editor.options.element.childNodes);
      editor.setOptions({
        element
      });
      editor.contentComponent = getInstance();
      if (!this.state.hasContentComponentInitialized) {
        this.unsubscribeToContentComponent = editor.contentComponent.subscribe(() => {
          this.setState(prevState => {
            if (!prevState.hasContentComponentInitialized) {
              return {
                hasContentComponentInitialized: true
              };
            }
            return prevState;
          });
          if (this.unsubscribeToContentComponent) {
            this.unsubscribeToContentComponent();
          }
        });
      }
      editor.createNodeViews();
      this.initialized = true;
    }
  }
  componentWillUnmount() {
    var _a;
    const editor = this.props.editor;
    if (!editor) {
      return;
    }
    this.initialized = false;
    if (!editor.isDestroyed) {
      editor.view.setProps({
        nodeViews: {}
      });
    }
    if (this.unsubscribeToContentComponent) {
      this.unsubscribeToContentComponent();
    }
    editor.contentComponent = null;
    if (!((_a = editor.options.element) == null ? void 0 : _a.firstChild)) {
      return;
    }
    const newElement = document.createElement("div");
    newElement.append(...editor.options.element.childNodes);
    editor.setOptions({
      element: newElement
    });
  }
  render() {
    const {
      editor,
      innerRef,
      ...rest
    } = this.props;
    return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
        ref: mergeRefs(innerRef, this.editorContentRef),
        ...rest
      }), (editor == null ? void 0 : editor.contentComponent) && /* @__PURE__ */(0, import_jsx_runtime.jsx)(Portals, {
        contentComponent: editor.contentComponent
      })]
    });
  }
};
var EditorContentWithKey = (0, import_react2.forwardRef)((props, ref) => {
  const key = import_react2.default.useMemo(() => {
    return Math.floor(Math.random() * 4294967295).toString();
  }, [props.editor]);
  return import_react2.default.createElement(PureEditorContent, {
    key,
    innerRef: ref,
    ...props
  });
});
var EditorContent = import_react2.default.memo(EditorContentWithKey);
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react5.useLayoutEffect : import_react5.useEffect;
var EditorStateManager = class {
  constructor(initialEditor) {
    this.transactionNumber = 0;
    this.lastTransactionNumber = 0;
    this.subscribers = /* @__PURE__ */new Set();
    this.editor = initialEditor;
    this.lastSnapshot = {
      editor: initialEditor,
      transactionNumber: 0
    };
    this.getSnapshot = this.getSnapshot.bind(this);
    this.getServerSnapshot = this.getServerSnapshot.bind(this);
    this.watch = this.watch.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }
  getSnapshot() {
    if (this.transactionNumber === this.lastTransactionNumber) {
      return this.lastSnapshot;
    }
    this.lastTransactionNumber = this.transactionNumber;
    this.lastSnapshot = {
      editor: this.editor,
      transactionNumber: this.transactionNumber
    };
    return this.lastSnapshot;
  }
  getServerSnapshot() {
    return {
      editor: null,
      transactionNumber: 0
    };
  }
  subscribe(callback) {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }
  watch(nextEditor) {
    this.editor = nextEditor;
    if (this.editor) {
      const fn = () => {
        this.transactionNumber += 1;
        this.subscribers.forEach(callback => callback());
      };
      const currentEditor = this.editor;
      currentEditor.on("transaction", fn);
      return () => {
        currentEditor.off("transaction", fn);
      };
    }
    return void 0;
  }
};
function useEditorState(options) {
  var _a;
  const [editorStateManager] = (0, import_react5.useState)(() => new EditorStateManager(options.editor));
  const selectedState = (0, import_with_selector.useSyncExternalStoreWithSelector)(editorStateManager.subscribe, editorStateManager.getSnapshot, editorStateManager.getServerSnapshot, options.selector, (_a = options.equalityFn) != null ? _a : import_react4.default);
  useIsomorphicLayoutEffect(() => {
    return editorStateManager.watch(options.editor);
  }, [options.editor, editorStateManager]);
  (0, import_react5.useDebugValue)(selectedState);
  return selectedState;
}
var isDev = true;
var isSSR = typeof window === "undefined";
var isNext = isSSR || Boolean(typeof window !== "undefined" && window.next);
var EditorInstanceManager = class _EditorInstanceManager {
  constructor(options) {
    this.editor = null;
    this.subscriptions = /* @__PURE__ */new Set();
    this.isComponentMounted = false;
    this.previousDeps = null;
    this.instanceId = "";
    this.options = options;
    this.subscriptions = /* @__PURE__ */new Set();
    this.setEditor(this.getInitialEditor());
    this.scheduleDestroy();
    this.getEditor = this.getEditor.bind(this);
    this.getServerSnapshot = this.getServerSnapshot.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.refreshEditorInstance = this.refreshEditorInstance.bind(this);
    this.scheduleDestroy = this.scheduleDestroy.bind(this);
    this.onRender = this.onRender.bind(this);
    this.createEditor = this.createEditor.bind(this);
  }
  setEditor(editor) {
    this.editor = editor;
    this.instanceId = Math.random().toString(36).slice(2, 9);
    this.subscriptions.forEach(cb => cb());
  }
  getInitialEditor() {
    if (this.options.current.immediatelyRender === void 0) {
      if (isSSR || isNext) {
        if (isDev) {
          throw new Error("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches.");
        }
        return null;
      }
      return this.createEditor();
    }
    if (this.options.current.immediatelyRender && isSSR && isDev) {
      throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
    }
    if (this.options.current.immediatelyRender) {
      return this.createEditor();
    }
    return null;
  }
  createEditor() {
    const optionsToApply = {
      ...this.options.current,
      onBeforeCreate: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onBeforeCreate) == null ? void 0 : _b.call(_a, ...args);
      },
      onBlur: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onBlur) == null ? void 0 : _b.call(_a, ...args);
      },
      onCreate: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onCreate) == null ? void 0 : _b.call(_a, ...args);
      },
      onDestroy: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onDestroy) == null ? void 0 : _b.call(_a, ...args);
      },
      onFocus: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onFocus) == null ? void 0 : _b.call(_a, ...args);
      },
      onSelectionUpdate: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onSelectionUpdate) == null ? void 0 : _b.call(_a, ...args);
      },
      onTransaction: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onTransaction) == null ? void 0 : _b.call(_a, ...args);
      },
      onUpdate: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onUpdate) == null ? void 0 : _b.call(_a, ...args);
      },
      onContentError: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onContentError) == null ? void 0 : _b.call(_a, ...args);
      },
      onDrop: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onDrop) == null ? void 0 : _b.call(_a, ...args);
      },
      onPaste: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onPaste) == null ? void 0 : _b.call(_a, ...args);
      },
      onDelete: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onDelete) == null ? void 0 : _b.call(_a, ...args);
      }
    };
    const editor = new import_core.Editor(optionsToApply);
    return editor;
  }
  getEditor() {
    return this.editor;
  }
  getServerSnapshot() {
    return null;
  }
  subscribe(onStoreChange) {
    this.subscriptions.add(onStoreChange);
    return () => {
      this.subscriptions.delete(onStoreChange);
    };
  }
  static compareOptions(a, b) {
    return Object.keys(a).every(key => {
      if (["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"].includes(key)) {
        return true;
      }
      if (key === "extensions" && a.extensions && b.extensions) {
        if (a.extensions.length !== b.extensions.length) {
          return false;
        }
        return a.extensions.every((extension, index) => {
          var _a;
          if (extension !== ((_a = b.extensions) == null ? void 0 : _a[index])) {
            return false;
          }
          return true;
        });
      }
      if (a[key] !== b[key]) {
        return false;
      }
      return true;
    });
  }
  onRender(deps) {
    return () => {
      this.isComponentMounted = true;
      clearTimeout(this.scheduledDestructionTimeout);
      if (this.editor && !this.editor.isDestroyed && deps.length === 0) {
        if (!_EditorInstanceManager.compareOptions(this.options.current, this.editor.options)) {
          this.editor.setOptions({
            ...this.options.current,
            editable: this.editor.isEditable
          });
        }
      } else {
        this.refreshEditorInstance(deps);
      }
      return () => {
        this.isComponentMounted = false;
        this.scheduleDestroy();
      };
    };
  }
  refreshEditorInstance(deps) {
    if (this.editor && !this.editor.isDestroyed) {
      if (this.previousDeps === null) {
        this.previousDeps = deps;
        return;
      }
      const depsAreEqual = this.previousDeps.length === deps.length && this.previousDeps.every((dep, index) => dep === deps[index]);
      if (depsAreEqual) {
        return;
      }
    }
    if (this.editor && !this.editor.isDestroyed) {
      this.editor.destroy();
    }
    this.setEditor(this.createEditor());
    this.previousDeps = deps;
  }
  scheduleDestroy() {
    const currentInstanceId = this.instanceId;
    const currentEditor = this.editor;
    this.scheduledDestructionTimeout = setTimeout(() => {
      if (this.isComponentMounted && this.instanceId === currentInstanceId) {
        if (currentEditor) {
          currentEditor.setOptions(this.options.current);
        }
        return;
      }
      if (currentEditor && !currentEditor.isDestroyed) {
        currentEditor.destroy();
        if (this.instanceId === currentInstanceId) {
          this.setEditor(null);
        }
      }
    }, 1);
  }
};
function useEditor(options = {}, deps = []) {
  const mostRecentOptions = (0, import_react3.useRef)(options);
  mostRecentOptions.current = options;
  const [instanceManager] = (0, import_react3.useState)(() => new EditorInstanceManager(mostRecentOptions));
  const editor = (0, import_shim2.useSyncExternalStore)(instanceManager.subscribe, instanceManager.getEditor, instanceManager.getServerSnapshot);
  (0, import_react3.useDebugValue)(editor);
  (0, import_react3.useEffect)(instanceManager.onRender(deps));
  useEditorState({
    editor,
    selector: ({
      transactionNumber
    }) => {
      if (options.shouldRerenderOnTransaction === false || options.shouldRerenderOnTransaction === void 0) {
        return null;
      }
      if (options.immediatelyRender && transactionNumber === 0) {
        return 0;
      }
      return transactionNumber + 1;
    }
  });
  return editor;
}
var EditorContext = (0, import_react.createContext)({
  editor: null
});
var EditorConsumer = EditorContext.Consumer;
var useCurrentEditor = () => (0, import_react.useContext)(EditorContext);
function EditorProvider({
  children,
  slotAfter,
  slotBefore,
  editorContainerProps = {},
  ...editorOptions
}) {
  const editor = useEditor(editorOptions);
  const contextValue = (0, import_react.useMemo)(() => ({
    editor
  }), [editor]);
  if (!editor) {
    return null;
  }
  return /* @__PURE__ */(0, import_jsx_runtime2.jsxs)(EditorContext.Provider, {
    value: contextValue,
    children: [slotBefore, /* @__PURE__ */(0, import_jsx_runtime2.jsx)(EditorConsumer, {
      children: ({
        editor: currentEditor
      }) => /* @__PURE__ */(0, import_jsx_runtime2.jsx)(EditorContent, {
        editor: currentEditor,
        ...editorContainerProps
      })
    }), children, slotAfter]
  });
}
var ReactNodeViewContext = (0, import_react6.createContext)({
  onDragStart: () => {},
  nodeViewContentChildren: void 0,
  nodeViewContentRef: () => {}
});
var ReactNodeViewContentProvider = ({
  children,
  content
}) => {
  return (0, import_react6.createElement)(ReactNodeViewContext.Provider, {
    value: {
      nodeViewContentChildren: content
    }
  }, children);
};
var useReactNodeView = () => (0, import_react6.useContext)(ReactNodeViewContext);
function NodeViewContent({
  as: Tag = "div",
  ...props
}) {
  const {
    nodeViewContentRef,
    nodeViewContentChildren
  } = useReactNodeView();
  return /* @__PURE__ */(0, import_jsx_runtime3.jsx)(Tag, {
    ...props,
    ref: nodeViewContentRef,
    "data-node-view-content": "",
    style: {
      whiteSpace: "pre-wrap",
      ...props.style
    },
    children: nodeViewContentChildren
  });
}
var NodeViewWrapper = import_react7.default.forwardRef((props, ref) => {
  const {
    onDragStart
  } = useReactNodeView();
  const Tag = props.as || "div";
  return /* @__PURE__ */(0, import_jsx_runtime4.jsx)(Tag, {
    ...props,
    ref,
    "data-node-view-wrapper": "",
    onDragStart,
    style: {
      whiteSpace: "normal",
      ...props.style
    }
  });
});
function isClassComponent(Component) {
  return !!(typeof Component === "function" && Component.prototype && Component.prototype.isReactComponent);
}
function isForwardRefComponent(Component) {
  return !!(typeof Component === "object" && Component.$$typeof && (Component.$$typeof.toString() === "Symbol(react.forward_ref)" || Component.$$typeof.description === "react.forward_ref"));
}
function isMemoComponent(Component) {
  return !!(typeof Component === "object" && Component.$$typeof && (Component.$$typeof.toString() === "Symbol(react.memo)" || Component.$$typeof.description === "react.memo"));
}
function canReceiveRef(Component) {
  if (isClassComponent(Component)) {
    return true;
  }
  if (isForwardRefComponent(Component)) {
    return true;
  }
  if (isMemoComponent(Component)) {
    const wrappedComponent = Component.type;
    if (wrappedComponent) {
      return isClassComponent(wrappedComponent) || isForwardRefComponent(wrappedComponent);
    }
  }
  return false;
}
function isReact19Plus() {
  try {
    if (import_react9.version) {
      const majorVersion = parseInt(import_react9.version.split(".")[0], 10);
      return majorVersion >= 19;
    }
  } catch {}
  return false;
}
var ReactRenderer = class {
  constructor(component, {
    editor,
    props = {},
    as = "div",
    className = ""
  }) {
    this.ref = null;
    this.id = Math.floor(Math.random() * 4294967295).toString();
    this.component = component;
    this.editor = editor;
    this.props = props;
    this.element = document.createElement(as);
    this.element.classList.add("react-renderer");
    if (className) {
      this.element.classList.add(...className.split(" "));
    }
    if (this.editor.isInitialized) {
      (0, import_react_dom2.flushSync)(() => {
        this.render();
      });
    } else {
      queueMicrotask(() => {
        this.render();
      });
    }
  }
  render() {
    var _a;
    const Component = this.component;
    const props = this.props;
    const editor = this.editor;
    const isReact19 = isReact19Plus();
    const componentCanReceiveRef = canReceiveRef(Component);
    const elementProps = {
      ...props
    };
    if (elementProps.ref && !(isReact19 || componentCanReceiveRef)) {
      delete elementProps.ref;
    }
    if (!elementProps.ref && (isReact19 || componentCanReceiveRef)) {
      elementProps.ref = ref => {
        this.ref = ref;
      };
    }
    this.reactElement = /* @__PURE__ */(0, import_jsx_runtime5.jsx)(Component, {
      ...elementProps
    });
    (_a = editor == null ? void 0 : editor.contentComponent) == null ? void 0 : _a.setRenderer(this.id, this);
  }
  updateProps(props = {}) {
    this.props = {
      ...this.props,
      ...props
    };
    this.render();
  }
  destroy() {
    var _a;
    const editor = this.editor;
    (_a = editor == null ? void 0 : editor.contentComponent) == null ? void 0 : _a.removeRenderer(this.id);
  }
  updateAttributes(attributes) {
    Object.keys(attributes).forEach(key => {
      this.element.setAttribute(key, attributes[key]);
    });
  }
};
var ReactMarkViewContext = import_react8.default.createContext({
  markViewContentRef: () => {}
});
var MarkViewContent = props => {
  const {
    as: Tag = "span",
    ...rest
  } = props;
  const {
    markViewContentRef
  } = import_react8.default.useContext(ReactMarkViewContext);
  return /* @__PURE__ */(0, import_jsx_runtime6.jsx)(Tag, {
    ...rest,
    ref: markViewContentRef,
    "data-mark-view-content": ""
  });
};
var ReactMarkView = class extends import_core2.MarkView {
  constructor(component, props, options) {
    super(component, props, options);
    this.didMountContentDomElement = false;
    const {
      as = "span",
      attrs,
      className = ""
    } = options || {};
    const componentProps = {
      ...props,
      updateAttributes: this.updateAttributes.bind(this)
    };
    this.contentDOMElement = document.createElement("span");
    const markViewContentRef = el => {
      if (el && this.contentDOMElement && el.firstChild !== this.contentDOMElement) {
        el.appendChild(this.contentDOMElement);
        this.didMountContentDomElement = true;
      }
    };
    const context = {
      markViewContentRef
    };
    const ReactMarkViewProvider = import_react8.default.memo(componentProps2 => {
      return /* @__PURE__ */(0, import_jsx_runtime6.jsx)(ReactMarkViewContext.Provider, {
        value: context,
        children: import_react8.default.createElement(component, componentProps2)
      });
    });
    ReactMarkViewProvider.displayName = "ReactNodeView";
    this.renderer = new ReactRenderer(ReactMarkViewProvider, {
      editor: props.editor,
      props: componentProps,
      as,
      className: `mark-${props.mark.type.name} ${className}`.trim()
    });
    if (attrs) {
      this.renderer.updateAttributes(attrs);
    }
  }
  get dom() {
    return this.renderer.element;
  }
  get contentDOM() {
    if (!this.didMountContentDomElement) {
      return null;
    }
    return this.contentDOMElement;
  }
};
function ReactMarkViewRenderer(component, options = {}) {
  return props => new ReactMarkView(component, props, options);
}
var ReactNodeView = class extends import_core3.NodeView {
  constructor(component, props, options) {
    super(component, props, options);
    if (!this.node.isLeaf) {
      if (this.options.contentDOMElementTag) {
        this.contentDOMElement = document.createElement(this.options.contentDOMElementTag);
      } else {
        this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div");
      }
      this.contentDOMElement.dataset.nodeViewContentReact = "";
      this.contentDOMElement.dataset.nodeViewWrapper = "";
      this.contentDOMElement.style.whiteSpace = "inherit";
      const contentTarget = this.dom.querySelector("[data-node-view-content]");
      if (!contentTarget) {
        return;
      }
      contentTarget.appendChild(this.contentDOMElement);
    }
  }
  mount() {
    const props = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: false,
      extension: this.extension,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (attributes = {}) => this.updateAttributes(attributes),
      deleteNode: () => this.deleteNode(),
      ref: (0, import_react10.createRef)()
    };
    if (!this.component.displayName) {
      const capitalizeFirstChar = string => {
        return string.charAt(0).toUpperCase() + string.substring(1);
      };
      this.component.displayName = capitalizeFirstChar(this.extension.name);
    }
    const onDragStart = this.onDragStart.bind(this);
    const nodeViewContentRef = element => {
      if (element && this.contentDOMElement && element.firstChild !== this.contentDOMElement) {
        if (element.hasAttribute("data-node-view-wrapper")) {
          element.removeAttribute("data-node-view-wrapper");
        }
        element.appendChild(this.contentDOMElement);
      }
    };
    const context = {
      onDragStart,
      nodeViewContentRef
    };
    const Component = this.component;
    const ReactNodeViewProvider = (0, import_react10.memo)(componentProps => {
      return /* @__PURE__ */(0, import_jsx_runtime7.jsx)(ReactNodeViewContext.Provider, {
        value: context,
        children: (0, import_react10.createElement)(Component, componentProps)
      });
    });
    ReactNodeViewProvider.displayName = "ReactNodeView";
    let as = this.node.isInline ? "span" : "div";
    if (this.options.as) {
      as = this.options.as;
    }
    const {
      className = ""
    } = this.options;
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this);
    this.renderer = new ReactRenderer(ReactNodeViewProvider, {
      editor: this.editor,
      props,
      as,
      className: `node-${this.node.type.name} ${className}`.trim()
    });
    this.editor.on("selectionUpdate", this.handleSelectionUpdate);
    this.updateElementAttributes();
  }
  get dom() {
    var _a;
    if (this.renderer.element.firstElementChild && !((_a = this.renderer.element.firstElementChild) == null ? void 0 : _a.hasAttribute("data-node-view-wrapper"))) {
      throw Error("Please use the NodeViewWrapper component for your node view.");
    }
    return this.renderer.element;
  }
  get contentDOM() {
    if (this.node.isLeaf) {
      return null;
    }
    return this.contentDOMElement;
  }
  handleSelectionUpdate() {
    const {
      from,
      to
    } = this.editor.state.selection;
    const pos = this.getPos();
    if (typeof pos !== "number") {
      return;
    }
    if (from <= pos && to >= pos + this.node.nodeSize) {
      if (this.renderer.props.selected) {
        return;
      }
      this.selectNode();
    } else {
      if (!this.renderer.props.selected) {
        return;
      }
      this.deselectNode();
    }
  }
  update(node, decorations, innerDecorations) {
    const rerenderComponent = props => {
      this.renderer.updateProps(props);
      if (typeof this.options.attrs === "function") {
        this.updateElementAttributes();
      }
    };
    if (node.type !== this.node.type) {
      return false;
    }
    if (typeof this.options.update === "function") {
      const oldNode = this.node;
      const oldDecorations = this.decorations;
      const oldInnerDecorations = this.innerDecorations;
      this.node = node;
      this.decorations = decorations;
      this.innerDecorations = innerDecorations;
      return this.options.update({
        oldNode,
        oldDecorations,
        newNode: node,
        newDecorations: decorations,
        oldInnerDecorations,
        innerDecorations,
        updateProps: () => rerenderComponent({
          node,
          decorations,
          innerDecorations
        })
      });
    }
    if (node === this.node && this.decorations === decorations && this.innerDecorations === innerDecorations) {
      return true;
    }
    this.node = node;
    this.decorations = decorations;
    this.innerDecorations = innerDecorations;
    rerenderComponent({
      node,
      decorations,
      innerDecorations
    });
    return true;
  }
  selectNode() {
    this.renderer.updateProps({
      selected: true
    });
    this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  deselectNode() {
    this.renderer.updateProps({
      selected: false
    });
    this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  destroy() {
    this.renderer.destroy();
    this.editor.off("selectionUpdate", this.handleSelectionUpdate);
    this.contentDOMElement = null;
  }
  updateElementAttributes() {
    if (this.options.attrs) {
      let attrsObj = {};
      if (typeof this.options.attrs === "function") {
        const extensionAttributes = this.editor.extensionManager.attributes;
        const HTMLAttributes = (0, import_core3.getRenderedAttributes)(this.node, extensionAttributes);
        attrsObj = this.options.attrs({
          node: this.node,
          HTMLAttributes
        });
      } else {
        attrsObj = this.options.attrs;
      }
      this.renderer.updateAttributes(attrsObj);
    }
  }
};
function ReactNodeViewRenderer(component, options) {
  return props => {
    if (!props.editor.contentComponent) {
      return {};
    }
    return new ReactNodeView(component, props, options);
  };
}

// .beyond/uimport/@tiptap/react.3.2.0.js
__reExport(react_3_2_0_exports, dist_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mYXN0LWRlZXAtZXF1YWwvZXM2L3JlYWN0LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L0B0aXB0YXAvcmVhY3QuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvQ29udGV4dC50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvRWRpdG9yQ29udGVudC50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvdXNlRWRpdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL3VzZUVkaXRvclN0YXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL3VzZVJlYWN0Tm9kZVZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvTm9kZVZpZXdDb250ZW50LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9Ob2RlVmlld1dyYXBwZXIudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL1JlYWN0TWFya1ZpZXdSZW5kZXJlci50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvUmVhY3RSZW5kZXJlci50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvUmVhY3ROb2RlVmlld1JlbmRlcmVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJyZXF1aXJlX3JlYWN0IiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9mYXN0LWRlZXAtZXF1YWwvZXM2L3JlYWN0LmpzIiwiZXhwb3J0cyIsIm1vZHVsZTIiLCJlbnZIYXNCaWdJbnQ2NEFycmF5IiwiQmlnSW50NjRBcnJheSIsImVxdWFsIiwiYSIsImIiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsImkiLCJrZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwiTWFwIiwic2l6ZSIsImVudHJpZXMiLCJoYXMiLCJnZXQiLCJTZXQiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIlJlZ0V4cCIsInNvdXJjZSIsImZsYWdzIiwidmFsdWVPZiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwia2V5IiwiJCR0eXBlb2YiLCJyZWFjdF8zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJFZGl0b3JDb25zdW1lciIsIkVkaXRvckNvbnRlbnQiLCJFZGl0b3JDb250ZXh0IiwiRWRpdG9yUHJvdmlkZXIiLCJNYXJrVmlld0NvbnRlbnQiLCJOb2RlVmlld0NvbnRlbnQiLCJOb2RlVmlld1dyYXBwZXIiLCJQdXJlRWRpdG9yQ29udGVudCIsIlJlYWN0TWFya1ZpZXciLCJSZWFjdE1hcmtWaWV3Q29udGV4dCIsIlJlYWN0TWFya1ZpZXdSZW5kZXJlciIsIlJlYWN0Tm9kZVZpZXciLCJSZWFjdE5vZGVWaWV3Q29udGVudFByb3ZpZGVyIiwiUmVhY3ROb2RlVmlld0NvbnRleHQiLCJSZWFjdE5vZGVWaWV3UmVuZGVyZXIiLCJSZWFjdFJlbmRlcmVyIiwidXNlQ3VycmVudEVkaXRvciIsInVzZUVkaXRvciIsInVzZUVkaXRvclN0YXRlIiwidXNlUmVhY3ROb2RlVmlldyIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsImltcG9ydF9yZWFjdCIsInJlcXVpcmUiLCJpbXBvcnRfcmVhY3QyIiwiX190b0VTTSIsImltcG9ydF9yZWFjdF9kb20iLCJpbXBvcnRfc2hpbSIsImltcG9ydF9qc3hfcnVudGltZSIsImltcG9ydF9jb3JlIiwiaW1wb3J0X3JlYWN0MyIsImltcG9ydF9zaGltMiIsImltcG9ydF9yZWFjdDQiLCJpbXBvcnRfcmVhY3Q1IiwiaW1wb3J0X3dpdGhfc2VsZWN0b3IiLCJpbXBvcnRfanN4X3J1bnRpbWUyIiwiaW1wb3J0X3JlYWN0NiIsImltcG9ydF9qc3hfcnVudGltZTMiLCJpbXBvcnRfcmVhY3Q3IiwiaW1wb3J0X2pzeF9ydW50aW1lNCIsImltcG9ydF9jb3JlMiIsImltcG9ydF9yZWFjdDgiLCJpbXBvcnRfcmVhY3Q5IiwiaW1wb3J0X3JlYWN0X2RvbTIiLCJpbXBvcnRfanN4X3J1bnRpbWU1IiwiaW1wb3J0X2pzeF9ydW50aW1lNiIsImltcG9ydF9jb3JlMyIsImltcG9ydF9yZWFjdDEwIiwiaW1wb3J0X2pzeF9ydW50aW1lNyIsIl9fcmVFeHBvcnQiLCJkaXN0X2V4cG9ydHMiLCJtZXJnZVJlZnMiLCJyZWZzIiwibm9kZSIsImZvckVhY2giLCJyZWYiLCJjdXJyZW50IiwiUG9ydGFscyIsImNvbnRlbnRDb21wb25lbnQiLCJyZW5kZXJlcnMiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSIsInN1YnNjcmliZSIsImdldFNuYXBzaG90IiwiZ2V0U2VydmVyU25hcHNob3QiLCJqc3giLCJGcmFnbWVudCIsImNoaWxkcmVuIiwidmFsdWVzIiwiZ2V0SW5zdGFuY2UiLCJzdWJzY3JpYmVycyIsImNhbGxiYWNrIiwiYWRkIiwiZGVsZXRlIiwic2V0UmVuZGVyZXIiLCJpZCIsInJlbmRlcmVyIiwiZGVmYXVsdCIsImNyZWF0ZVBvcnRhbCIsInJlYWN0RWxlbWVudCIsImVsZW1lbnQiLCJzdWJzY3JpYmVyIiwicmVtb3ZlUmVuZGVyZXIiLCJuZXh0UmVuZGVyZXJzIiwiQ29tcG9uZW50IiwicHJvcHMiLCJfYSIsImVkaXRvckNvbnRlbnRSZWYiLCJjcmVhdGVSZWYiLCJpbml0aWFsaXplZCIsInN0YXRlIiwiaGFzQ29udGVudENvbXBvbmVudEluaXRpYWxpemVkIiwiQm9vbGVhbiIsImVkaXRvciIsImNvbXBvbmVudERpZE1vdW50IiwiaW5pdCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImlzRGVzdHJveWVkIiwib3B0aW9ucyIsImFwcGVuZCIsImNoaWxkTm9kZXMiLCJzZXRPcHRpb25zIiwidW5zdWJzY3JpYmVUb0NvbnRlbnRDb21wb25lbnQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImNyZWF0ZU5vZGVWaWV3cyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwidmlldyIsInNldFByb3BzIiwibm9kZVZpZXdzIiwiZmlyc3RDaGlsZCIsIm5ld0VsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCJpbm5lclJlZiIsInJlc3QiLCJqc3hzIiwiRWRpdG9yQ29udGVudFdpdGhLZXkiLCJmb3J3YXJkUmVmIiwidXNlTWVtbyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1lbW8iLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0Iiwid2luZG93IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwiRWRpdG9yU3RhdGVNYW5hZ2VyIiwiaW5pdGlhbEVkaXRvciIsInRyYW5zYWN0aW9uTnVtYmVyIiwibGFzdFRyYW5zYWN0aW9uTnVtYmVyIiwibGFzdFNuYXBzaG90IiwiYmluZCIsIndhdGNoIiwibmV4dEVkaXRvciIsImZuIiwiY3VycmVudEVkaXRvciIsIm9uIiwib2ZmIiwiZWRpdG9yU3RhdGVNYW5hZ2VyIiwidXNlU3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwidXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IiLCJzZWxlY3RvciIsImVxdWFsaXR5Rm4iLCJ1c2VEZWJ1Z1ZhbHVlIiwiaXNEZXYiLCJpc1NTUiIsImlzTmV4dCIsIm5leHQiLCJFZGl0b3JJbnN0YW5jZU1hbmFnZXIiLCJfRWRpdG9ySW5zdGFuY2VNYW5hZ2VyIiwic3Vic2NyaXB0aW9ucyIsImlzQ29tcG9uZW50TW91bnRlZCIsInByZXZpb3VzRGVwcyIsImluc3RhbmNlSWQiLCJzZXRFZGl0b3IiLCJnZXRJbml0aWFsRWRpdG9yIiwic2NoZWR1bGVEZXN0cm95IiwiZ2V0RWRpdG9yIiwicmVmcmVzaEVkaXRvckluc3RhbmNlIiwib25SZW5kZXIiLCJjcmVhdGVFZGl0b3IiLCJzbGljZSIsImNiIiwiaW1tZWRpYXRlbHlSZW5kZXIiLCJFcnJvciIsIm9wdGlvbnNUb0FwcGx5Iiwib25CZWZvcmVDcmVhdGUiLCJhcmdzIiwiX2IiLCJvbkJsdXIiLCJvbkNyZWF0ZSIsIm9uRGVzdHJveSIsIm9uRm9jdXMiLCJvblNlbGVjdGlvblVwZGF0ZSIsIm9uVHJhbnNhY3Rpb24iLCJvblVwZGF0ZSIsIm9uQ29udGVudEVycm9yIiwib25Ecm9wIiwib25QYXN0ZSIsIm9uRGVsZXRlIiwiRWRpdG9yIiwib25TdG9yZUNoYW5nZSIsImNvbXBhcmVPcHRpb25zIiwiZXZlcnkiLCJpbmNsdWRlcyIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJpbmRleCIsImRlcHMiLCJjbGVhclRpbWVvdXQiLCJzY2hlZHVsZWREZXN0cnVjdGlvblRpbWVvdXQiLCJlZGl0YWJsZSIsImlzRWRpdGFibGUiLCJkZXBzQXJlRXF1YWwiLCJkZXAiLCJkZXN0cm95IiwiY3VycmVudEluc3RhbmNlSWQiLCJzZXRUaW1lb3V0IiwibW9zdFJlY2VudE9wdGlvbnMiLCJ1c2VSZWYiLCJpbnN0YW5jZU1hbmFnZXIiLCJzaG91bGRSZXJlbmRlck9uVHJhbnNhY3Rpb24iLCJjcmVhdGVDb250ZXh0IiwiQ29uc3VtZXIiLCJ1c2VDb250ZXh0Iiwic2xvdEFmdGVyIiwic2xvdEJlZm9yZSIsImVkaXRvckNvbnRhaW5lclByb3BzIiwiZWRpdG9yT3B0aW9ucyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJvbkRyYWdTdGFydCIsIm5vZGVWaWV3Q29udGVudENoaWxkcmVuIiwibm9kZVZpZXdDb250ZW50UmVmIiwiY29udGVudCIsImFzIiwiVGFnIiwic3R5bGUiLCJ3aGl0ZVNwYWNlIiwiaXNDbGFzc0NvbXBvbmVudCIsImlzUmVhY3RDb21wb25lbnQiLCJpc0ZvcndhcmRSZWZDb21wb25lbnQiLCJkZXNjcmlwdGlvbiIsImlzTWVtb0NvbXBvbmVudCIsImNhblJlY2VpdmVSZWYiLCJ3cmFwcGVkQ29tcG9uZW50IiwidHlwZSIsImlzUmVhY3QxOVBsdXMiLCJ2ZXJzaW9uIiwibWFqb3JWZXJzaW9uIiwicGFyc2VJbnQiLCJzcGxpdCIsImNvbXBvbmVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImlzSW5pdGlhbGl6ZWQiLCJmbHVzaFN5bmMiLCJxdWV1ZU1pY3JvdGFzayIsImlzUmVhY3QxOSIsImNvbXBvbmVudENhblJlY2VpdmVSZWYiLCJlbGVtZW50UHJvcHMiLCJ1cGRhdGVQcm9wcyIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwibWFya1ZpZXdDb250ZW50UmVmIiwiTWFya1ZpZXciLCJkaWRNb3VudENvbnRlbnREb21FbGVtZW50IiwiYXR0cnMiLCJjb21wb25lbnRQcm9wcyIsImNvbnRlbnRET01FbGVtZW50IiwiZWwiLCJhcHBlbmRDaGlsZCIsImNvbnRleHQiLCJSZWFjdE1hcmtWaWV3UHJvdmlkZXIiLCJjb21wb25lbnRQcm9wczIiLCJkaXNwbGF5TmFtZSIsIm1hcmsiLCJuYW1lIiwidHJpbSIsImRvbSIsImNvbnRlbnRET00iLCJOb2RlVmlldyIsImlzTGVhZiIsImNvbnRlbnRET01FbGVtZW50VGFnIiwiaXNJbmxpbmUiLCJkYXRhc2V0Iiwibm9kZVZpZXdDb250ZW50UmVhY3QiLCJub2RlVmlld1dyYXBwZXIiLCJjb250ZW50VGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsIm1vdW50IiwiZGVjb3JhdGlvbnMiLCJpbm5lckRlY29yYXRpb25zIiwic2VsZWN0ZWQiLCJIVE1MQXR0cmlidXRlcyIsImdldFBvcyIsImRlbGV0ZU5vZGUiLCJjYXBpdGFsaXplRmlyc3RDaGFyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJSZWFjdE5vZGVWaWV3UHJvdmlkZXIiLCJoYW5kbGVTZWxlY3Rpb25VcGRhdGUiLCJ1cGRhdGVFbGVtZW50QXR0cmlidXRlcyIsImZpcnN0RWxlbWVudENoaWxkIiwiZnJvbSIsInRvIiwic2VsZWN0aW9uIiwicG9zIiwibm9kZVNpemUiLCJzZWxlY3ROb2RlIiwiZGVzZWxlY3ROb2RlIiwidXBkYXRlIiwicmVyZW5kZXJDb21wb25lbnQiLCJvbGROb2RlIiwib2xkRGVjb3JhdGlvbnMiLCJvbGRJbm5lckRlY29yYXRpb25zIiwibmV3Tm9kZSIsIm5ld0RlY29yYXRpb25zIiwicmVtb3ZlIiwiYXR0cnNPYmoiLCJleHRlbnNpb25BdHRyaWJ1dGVzIiwiZXh0ZW5zaW9uTWFuYWdlciIsImdldFJlbmRlcmVkQXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsYUFBQSxHQUFBQyxVQUFBO0VBQUEsMkNBQUFDLENBQUFDLE9BQUEsRUFBQUMsT0FBQTtJQUFBOztJQUtFLElBQUlDLG1CQUFBLEdBQXNCLE9BQU9DLGFBQUEsS0FBa0I7SUFHckRGLE9BQUEsQ0FBT0QsT0FBQSxHQUFVLFNBQVNJLE1BQU1DLENBQUEsRUFBR0MsQ0FBQSxFQUFHO01BQ3BDLElBQUlELENBQUEsS0FBTUMsQ0FBQSxFQUFHLE9BQU87TUFFcEIsSUFBSUQsQ0FBQSxJQUFLQyxDQUFBLElBQUssT0FBT0QsQ0FBQSxJQUFLLFlBQVksT0FBT0MsQ0FBQSxJQUFLLFVBQVU7UUFDMUQsSUFBSUQsQ0FBQSxDQUFFRSxXQUFBLEtBQWdCRCxDQUFBLENBQUVDLFdBQUEsRUFBYSxPQUFPO1FBRTVDLElBQUlDLE1BQUEsRUFBUUMsQ0FBQSxFQUFHQyxJQUFBO1FBQ2YsSUFBSUMsS0FBQSxDQUFNQyxPQUFBLENBQVFQLENBQUMsR0FBRztVQUNwQkcsTUFBQSxHQUFTSCxDQUFBLENBQUVHLE1BQUE7VUFDWCxJQUFJQSxNQUFBLElBQVVGLENBQUEsQ0FBRUUsTUFBQSxFQUFRLE9BQU87VUFDL0IsS0FBS0MsQ0FBQSxHQUFJRCxNQUFBLEVBQVFDLENBQUEsT0FBUSxJQUN2QixJQUFJLENBQUNMLEtBQUEsQ0FBTUMsQ0FBQSxDQUFFSSxDQUFBLEdBQUlILENBQUEsQ0FBRUcsQ0FBQSxDQUFFLEdB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S25OLE9BQUEsQ0FBUTJKLEtBQUEsQ0FBTTtVQUFFdk0sSUFBQSxFQUFNLEtBQUtBLElBQUE7VUFBTWtPO1FBQWUsQ0FBQztNQUNuRSxPQUFPO1FBQ0w2QixRQUFBLEdBQVcsS0FBS25OLE9BQUEsQ0FBUTJKLEtBQUE7TUFDMUI7TUFFQSxLQUFLakwsUUFBQSxDQUFTMkssZ0JBQUEsQ0FBaUI4RCxRQUFRO0lBQ3pDO0VBQ0Y7QUFDRjtBQUtPLFNBQVN0UyxzQkFDZDhOLFNBQUEsRUFDQTNJLE9BQUEsRUFDa0I7RUFDbEIsT0FBT2IsS0FBQSxJQUFTO0lBSWQsSUFBSSxDQUFFQSxLQUFBLENBQU1RLE1BQUEsQ0FBc0NsQyxnQkFBQSxFQUFrQjtNQUNsRSxPQUFPLENBQUM7SUFDVjtJQUVBLE9BQU8sSUFBSS9DLGFBQUEsQ0FBaUJpTyxTQUFBLEVBQVd4SixLQUFBLEVBQU9hLE9BQU87RUFDdkQ7QUFDRjs7O0FWdlZBaEQsVUFBQSxDQUFBbkQsbUJBQUEsRUFBY29ELFlBQUEsRUFBZDlCLE1BQUEsQ0FBQXRELE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL3J2ZC9vdXQifQ==