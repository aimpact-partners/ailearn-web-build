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

// .beyond/uimport/temp/@tiptap/react.3.2.0.js
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

// .beyond/uimport/temp/@tiptap/react.3.2.0.js
__reExport(react_3_2_0_exports, dist_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mYXN0LWRlZXAtZXF1YWwvZXM2L3JlYWN0LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3RlbXAvQHRpcHRhcC9yZWFjdC4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9Db250ZXh0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9FZGl0b3JDb250ZW50LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy91c2VFZGl0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvdXNlRWRpdG9yU3RhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvdXNlUmVhY3ROb2RlVmlldy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9Ob2RlVmlld0NvbnRlbnQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL05vZGVWaWV3V3JhcHBlci50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvUmVhY3RNYXJrVmlld1JlbmRlcmVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9SZWFjdFJlbmRlcmVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9SZWFjdE5vZGVWaWV3UmVuZGVyZXIudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbInJlcXVpcmVfcmVhY3QiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9lczYvcmVhY3QuanMiLCJleHBvcnRzIiwibW9kdWxlMiIsImVudkhhc0JpZ0ludDY0QXJyYXkiLCJCaWdJbnQ2NEFycmF5IiwiZXF1YWwiLCJhIiwiYiIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwiaSIsImtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJNYXAiLCJzaXplIiwiZW50cmllcyIsImhhcyIsImdldCIsIlNldCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJ2YWx1ZU9mIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJrZXkiLCIkJHR5cGVvZiIsInJlYWN0XzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkVkaXRvckNvbnN1bWVyIiwiRWRpdG9yQ29udGVudCIsIkVkaXRvckNvbnRleHQiLCJFZGl0b3JQcm92aWRlciIsIk1hcmtWaWV3Q29udGVudCIsIk5vZGVWaWV3Q29udGVudCIsIk5vZGVWaWV3V3JhcHBlciIsIlB1cmVFZGl0b3JDb250ZW50IiwiUmVhY3RNYXJrVmlldyIsIlJlYWN0TWFya1ZpZXdDb250ZXh0IiwiUmVhY3RNYXJrVmlld1JlbmRlcmVyIiwiUmVhY3ROb2RlVmlldyIsIlJlYWN0Tm9kZVZpZXdDb250ZW50UHJvdmlkZXIiLCJSZWFjdE5vZGVWaWV3Q29udGV4dCIsIlJlYWN0Tm9kZVZpZXdSZW5kZXJlciIsIlJlYWN0UmVuZGVyZXIiLCJ1c2VDdXJyZW50RWRpdG9yIiwidXNlRWRpdG9yIiwidXNlRWRpdG9yU3RhdGUiLCJ1c2VSZWFjdE5vZGVWaWV3IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3JlYWN0IiwicmVxdWlyZSIsImltcG9ydF9yZWFjdDIiLCJfX3RvRVNNIiwiaW1wb3J0X3JlYWN0X2RvbSIsImltcG9ydF9zaGltIiwiaW1wb3J0X2pzeF9ydW50aW1lIiwiaW1wb3J0X2NvcmUiLCJpbXBvcnRfcmVhY3QzIiwiaW1wb3J0X3NoaW0yIiwiaW1wb3J0X3JlYWN0NCIsImltcG9ydF9yZWFjdDUiLCJpbXBvcnRfd2l0aF9zZWxlY3RvciIsImltcG9ydF9qc3hfcnVudGltZTIiLCJpbXBvcnRfcmVhY3Q2IiwiaW1wb3J0X2pzeF9ydW50aW1lMyIsImltcG9ydF9yZWFjdDciLCJpbXBvcnRfanN4X3J1bnRpbWU0IiwiaW1wb3J0X2NvcmUyIiwiaW1wb3J0X3JlYWN0OCIsImltcG9ydF9yZWFjdDkiLCJpbXBvcnRfcmVhY3RfZG9tMiIsImltcG9ydF9qc3hfcnVudGltZTUiLCJpbXBvcnRfanN4X3J1bnRpbWU2IiwiaW1wb3J0X2NvcmUzIiwiaW1wb3J0X3JlYWN0MTAiLCJpbXBvcnRfanN4X3J1bnRpbWU3IiwiX19yZUV4cG9ydCIsImRpc3RfZXhwb3J0cyIsIm1lcmdlUmVmcyIsInJlZnMiLCJub2RlIiwiZm9yRWFjaCIsInJlZiIsImN1cnJlbnQiLCJQb3J0YWxzIiwiY29udGVudENvbXBvbmVudCIsInJlbmRlcmVycyIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U25hcHNob3QiLCJnZXRTZXJ2ZXJTbmFwc2hvdCIsImpzeCIsIkZyYWdtZW50IiwiY2hpbGRyZW4iLCJ2YWx1ZXMiLCJnZXRJbnN0YW5jZSIsInN1YnNjcmliZXJzIiwiY2FsbGJhY2siLCJhZGQiLCJkZWxldGUiLCJzZXRSZW5kZXJlciIsImlkIiwicmVuZGVyZXIiLCJkZWZhdWx0IiwiY3JlYXRlUG9ydGFsIiwicmVhY3RFbGVtZW50IiwiZWxlbWVudCIsInN1YnNjcmliZXIiLCJyZW1vdmVSZW5kZXJlciIsIm5leHRSZW5kZXJlcnMiLCJDb21wb25lbnQiLCJwcm9wcyIsIl9hIiwiZWRpdG9yQ29udGVudFJlZiIsImNyZWF0ZVJlZiIsImluaXRpYWxpemVkIiwic3RhdGUiLCJoYXNDb250ZW50Q29tcG9uZW50SW5pdGlhbGl6ZWQiLCJCb29sZWFuIiwiZWRpdG9yIiwiY29tcG9uZW50RGlkTW91bnQiLCJpbml0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiaXNEZXN0cm95ZWQiLCJvcHRpb25zIiwiYXBwZW5kIiwiY2hpbGROb2RlcyIsInNldE9wdGlvbnMiLCJ1bnN1YnNjcmliZVRvQ29udGVudENvbXBvbmVudCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiY3JlYXRlTm9kZVZpZXdzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJ2aWV3Iiwic2V0UHJvcHMiLCJub2RlVmlld3MiLCJmaXJzdENoaWxkIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciIsImlubmVyUmVmIiwicmVzdCIsImpzeHMiLCJFZGl0b3JDb250ZW50V2l0aEtleSIsImZvcndhcmRSZWYiLCJ1c2VNZW1vIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWVtbyIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ3aW5kb3ciLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VFZmZlY3QiLCJFZGl0b3JTdGF0ZU1hbmFnZXIiLCJpbml0aWFsRWRpdG9yIiwidHJhbnNhY3Rpb25OdW1iZXIiLCJsYXN0VHJhbnNhY3Rpb25OdW1iZXIiLCJsYXN0U25hcHNob3QiLCJiaW5kIiwid2F0Y2giLCJuZXh0RWRpdG9yIiwiZm4iLCJjdXJyZW50RWRpdG9yIiwib24iLCJvZmYiLCJlZGl0b3JTdGF0ZU1hbmFnZXIiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciIsInNlbGVjdG9yIiwiZXF1YWxpdHlGbiIsInVzZURlYnVnVmFsdWUiLCJpc0RldiIsImlzU1NSIiwiaXNOZXh0IiwibmV4dCIsIkVkaXRvckluc3RhbmNlTWFuYWdlciIsIl9FZGl0b3JJbnN0YW5jZU1hbmFnZXIiLCJzdWJzY3JpcHRpb25zIiwiaXNDb21wb25lbnRNb3VudGVkIiwicHJldmlvdXNEZXBzIiwiaW5zdGFuY2VJZCIsInNldEVkaXRvciIsImdldEluaXRpYWxFZGl0b3IiLCJzY2hlZHVsZURlc3Ryb3kiLCJnZXRFZGl0b3IiLCJyZWZyZXNoRWRpdG9ySW5zdGFuY2UiLCJvblJlbmRlciIsImNyZWF0ZUVkaXRvciIsInNsaWNlIiwiY2IiLCJpbW1lZGlhdGVseVJlbmRlciIsIkVycm9yIiwib3B0aW9uc1RvQXBwbHkiLCJvbkJlZm9yZUNyZWF0ZSIsImFyZ3MiLCJfYiIsIm9uQmx1ciIsIm9uQ3JlYXRlIiwib25EZXN0cm95Iiwib25Gb2N1cyIsIm9uU2VsZWN0aW9uVXBkYXRlIiwib25UcmFuc2FjdGlvbiIsIm9uVXBkYXRlIiwib25Db250ZW50RXJyb3IiLCJvbkRyb3AiLCJvblBhc3RlIiwib25EZWxldGUiLCJFZGl0b3IiLCJvblN0b3JlQ2hhbmdlIiwiY29tcGFyZU9wdGlvbnMiLCJldmVyeSIsImluY2x1ZGVzIiwiZXh0ZW5zaW9ucyIsImV4dGVuc2lvbiIsImluZGV4IiwiZGVwcyIsImNsZWFyVGltZW91dCIsInNjaGVkdWxlZERlc3RydWN0aW9uVGltZW91dCIsImVkaXRhYmxlIiwiaXNFZGl0YWJsZSIsImRlcHNBcmVFcXVhbCIsImRlcCIsImRlc3Ryb3kiLCJjdXJyZW50SW5zdGFuY2VJZCIsInNldFRpbWVvdXQiLCJtb3N0UmVjZW50T3B0aW9ucyIsInVzZVJlZiIsImluc3RhbmNlTWFuYWdlciIsInNob3VsZFJlcmVuZGVyT25UcmFuc2FjdGlvbiIsImNyZWF0ZUNvbnRleHQiLCJDb25zdW1lciIsInVzZUNvbnRleHQiLCJzbG90QWZ0ZXIiLCJzbG90QmVmb3JlIiwiZWRpdG9yQ29udGFpbmVyUHJvcHMiLCJlZGl0b3JPcHRpb25zIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm9uRHJhZ1N0YXJ0Iiwibm9kZVZpZXdDb250ZW50Q2hpbGRyZW4iLCJub2RlVmlld0NvbnRlbnRSZWYiLCJjb250ZW50IiwiYXMiLCJUYWciLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJpc0NsYXNzQ29tcG9uZW50IiwiaXNSZWFjdENvbXBvbmVudCIsImlzRm9yd2FyZFJlZkNvbXBvbmVudCIsImRlc2NyaXB0aW9uIiwiaXNNZW1vQ29tcG9uZW50IiwiY2FuUmVjZWl2ZVJlZiIsIndyYXBwZWRDb21wb25lbnQiLCJ0eXBlIiwiaXNSZWFjdDE5UGx1cyIsInZlcnNpb24iLCJtYWpvclZlcnNpb24iLCJwYXJzZUludCIsInNwbGl0IiwiY29tcG9uZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiaXNJbml0aWFsaXplZCIsImZsdXNoU3luYyIsInF1ZXVlTWljcm90YXNrIiwiaXNSZWFjdDE5IiwiY29tcG9uZW50Q2FuUmVjZWl2ZVJlZiIsImVsZW1lbnRQcm9wcyIsInVwZGF0ZVByb3BzIiwidXBkYXRlQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJtYXJrVmlld0NvbnRlbnRSZWYiLCJNYXJrVmlldyIsImRpZE1vdW50Q29udGVudERvbUVsZW1lbnQiLCJhdHRycyIsImNvbXBvbmVudFByb3BzIiwiY29udGVudERPTUVsZW1lbnQiLCJlbCIsImFwcGVuZENoaWxkIiwiY29udGV4dCIsIlJlYWN0TWFya1ZpZXdQcm92aWRlciIsImNvbXBvbmVudFByb3BzMiIsImRpc3BsYXlOYW1lIiwibWFyayIsIm5hbWUiLCJ0cmltIiwiZG9tIiwiY29udGVudERPTSIsIk5vZGVWaWV3IiwiaXNMZWFmIiwiY29udGVudERPTUVsZW1lbnRUYWciLCJpc0lubGluZSIsImRhdGFzZXQiLCJub2RlVmlld0NvbnRlbnRSZWFjdCIsIm5vZGVWaWV3V3JhcHBlciIsImNvbnRlbnRUYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwibW91bnQiLCJkZWNvcmF0aW9ucyIsImlubmVyRGVjb3JhdGlvbnMiLCJzZWxlY3RlZCIsIkhUTUxBdHRyaWJ1dGVzIiwiZ2V0UG9zIiwiZGVsZXRlTm9kZSIsImNhcGl0YWxpemVGaXJzdENoYXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlJlYWN0Tm9kZVZpZXdQcm92aWRlciIsImhhbmRsZVNlbGVjdGlvblVwZGF0ZSIsInVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGVzIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJmcm9tIiwidG8iLCJzZWxlY3Rpb24iLCJwb3MiLCJub2RlU2l6ZSIsInNlbGVjdE5vZGUiLCJkZXNlbGVjdE5vZGUiLCJ1cGRhdGUiLCJyZXJlbmRlckNvbXBvbmVudCIsIm9sZE5vZGUiLCJvbGREZWNvcmF0aW9ucyIsIm9sZElubmVyRGVjb3JhdGlvbnMiLCJuZXdOb2RlIiwibmV3RGVjb3JhdGlvbnMiLCJyZW1vdmUiLCJhdHRyc09iaiIsImV4dGVuc2lvbkF0dHJpYnV0ZXMiLCJleHRlbnNpb25NYW5hZ2VyIiwiZ2V0UmVuZGVyZWRBdHRyaWJ1dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxhQUFBLEdBQUFDLFVBQUE7RUFBQSwyQ0FBQUMsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBO0lBQUE7O0lBS0UsSUFBSUMsbUJBQUEsR0FBc0IsT0FBT0MsYUFBQSxLQUFrQjtJQUdyREYsT0FBQSxDQUFPRCxPQUFBLEdBQVUsU0FBU0ksTUFBTUMsQ0FBQSxFQUFHQyxDQUFBLEVBQUc7TUFDcEMsSUFBSUQsQ0FBQSxLQUFNQyxDQUFBLEVBQUcsT0FBTztNQUVwQixJQUFJRCxDQUFBLElBQUtDLENBQUEsSUFBSyxPQUFPRCxDQUFBLElBQUssWUFBWSxPQUFPQyxDQUFBLElBQUssVUFBVTtRQUMxRCxJQUFJRCxDQUFBLENBQUVFLFdBQUEsS0FBZ0JELENBQUEsQ0FBRUMsV0FBQSxFQUFhLE9BQU87UUFFNUMsSUFBSUMsTUFBQSxFQUFRQyxDQUFBLEVBQUdDLElBQUE7UUFDZixJQUFJQyxLQUFBLENBQU1DLE9BQUEsQ0FBUVAsQ0FBQyxHQUFHO1VBQ3BCRyxNQUFBLEdBQVNILENBQUEsQ0FBRUcsTUFBQTtVQUNYLElBQUlBLE1BQUEsSUFBVUYsQ0FBQSxDQUFFRSxNQUFBLEVBQVEsT0FBTztVQUMvQixLQUFLQyxDQUFBLEdBQUlELE1BQUEsRUFBUUMsQ0FBQSxPQUFRLElBQ3ZCLElBQUksQ0FBQ0wsS0FBQSxDQUFNQyxDQUFBLENBQUVJLENBQUEsR0FBSUgsQ0FBQSxDQUFFRyxDQUFBLENB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VyxLQUFLbk4sT0FBQSxDQUFRMkosS0FBQSxDQUFNO1VBQUV2TSxJQUFBLEVBQU0sS0FBS0EsSUFBQTtVQUFNa087UUFBZSxDQUFDO01BQ25FLE9BQU87UUFDTDZCLFFBQUEsR0FBVyxLQUFLbk4sT0FBQSxDQUFRMkosS0FBQTtNQUMxQjtNQUVBLEtBQUtqTCxRQUFBLENBQVMySyxnQkFBQSxDQUFpQjhELFFBQVE7SUFDekM7RUFDRjtBQUNGO0FBS08sU0FBU3RTLHNCQUNkOE4sU0FBQSxFQUNBM0ksT0FBQSxFQUNrQjtFQUNsQixPQUFPYixLQUFBLElBQVM7SUFJZCxJQUFJLENBQUVBLEtBQUEsQ0FBTVEsTUFBQSxDQUFzQ2xDLGdCQUFBLEVBQWtCO01BQ2xFLE9BQU8sQ0FBQztJQUNWO0lBRUEsT0FBTyxJQUFJL0MsYUFBQSxDQUFpQmlPLFNBQUEsRUFBV3hKLEtBQUEsRUFBT2EsT0FBTztFQUN2RDtBQUNGOzs7QVZ2VkFoRCxVQUFBLENBQUFuRCxtQkFBQSxFQUFjb0QsWUFBQSxFQUFkOUIsTUFBQSxDQUFBdEQsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9