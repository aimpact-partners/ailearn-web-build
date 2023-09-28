System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@beyond-js/widgets/render.0.1.5.js
var render_0_1_5_exports = {};
__export(render_0_1_5_exports, {
  BeyondWidget: () => BeyondWidget,
  GlobalCSS: () => GlobalCSS,
  IBeyondWidgetController: () => IBeyondWidgetController,
  IWidgetSpecs: () => IWidgetSpecs,
  NodeWidget: () => NodeWidget,
  StylesManager: () => StylesManager,
  WidgetCSR: () => WidgetCSR,
  __beyond_pkg: () => __beyond_pkg,
  attributes: () => attributes,
  hmr: () => hmr,
  prerender: () => prerender,
  widgets: () => widgets
});
module.exports = __toCommonJS(render_0_1_5_exports);

// node_modules/@beyond-js/widgets/render/render.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/render"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./anchor", {
  hash: 1014568902,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    typeof process !== "object" && customElements.define("beyond-link", class extends HTMLElement {
      #routing;
      constructor() {
        super();
        bimport("@beyond-js/kernel/routing").then(({
          routing
        }) => this.#routing = routing);
      }
      connectedCallback() {
        this.addEventListener("click", () => {
          if (!this.hasAttribute("data-url")) return;
          const url = this.getAttribute("data-url");
          this.#routing?.pushState(url);
        });
      }
    });
  }
});
ims.set("./attributes", {
  hash: 1262494723,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.attributes = exports.Attributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Attributes extends _core.Events {
      #values = /* @__PURE__ */new Map();
      get values() {
        return this.#values;
      }
      add(name, value) {
        this.#values.set(name, value);
        this.trigger("add", name, value);
        this.trigger("change");
      }
      remove(name) {
        this.#values.delete(name);
        this.trigger("remove", name);
        this.trigger("change");
      }
    }
    exports.Attributes = Attributes;
    const attributes2 = new Attributes();
    exports.attributes = attributes2;
  }
});
ims.set("./instances/index", {
  hash: 2022060609,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    var _node = require2("./node");
    const instances = new class extends Set {
      register(widget) {
        this.add(widget);
        const parent = (() => {
          let parent2 = widget;
          while (true) {
            const root = parent2.getRootNode();
            if (root === document) return;
            parent2 = root.host;
            if (this.has(parent2)) return parent2;
          }
        })();
        const node = new _node.NodeWidget(widget, parent);
        parent?.wnode.children.add(widget);
        this.add(widget);
        return node;
      }
    }();
    exports.instances = instances;
  }
});
ims.set("./instances/node", {
  hash: 3167083658,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NodeWidget = void 0;
    class NodeWidget2 {
      #widget;
      get widget() {
        return this.#widget;
      }
      #parent;
      get parent() {
        return this.#parent;
      }
      #children = /* @__PURE__ */new Set();
      get children() {
        return this.#children;
      }
      constructor(widget, parent) {
        this.#widget = widget;
        this.#parent = parent;
      }
    }
    exports.NodeWidget = NodeWidget2;
  }
});
ims.set("./prerendered/index", {
  hash: 483738484,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.prerender = void 0;
    const prerender2 = new class {
      #ssr = [];
      get ssr() {
        return this.#ssr;
      }
      find(element, attrs) {
        return this.#ssr.find(item => {
          if (item.element !== element) return false;
          const iattrs = new Map(item.attributes);
          return [...attrs].reduce((prev, [name, value]) => prev || iattrs.get(name) === value, true);
        });
      }
    }();
    exports.prerender = prerender2;
  }
});
ims.set("./widget/attributes", {
  hash: 1029410984,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetGlobalAttributes = void 0;
    var _attributes = require2("../attributes");
    class WidgetGlobalAttributes {
      #holder;
      get holder() {
        return this.#holder;
      }
      #set = (name, value) => {
        this.#holder.setAttribute(name, value);
      };
      #remove = name => {
        this.#holder.removeAttribute(name);
      };
      initialise(holder) {
        this.#holder = holder;
        _attributes.attributes.values.forEach((value, name) => this.#set(name, value));
        _attributes.attributes.on("add", this.#set);
        _attributes.attributes.on("remove", this.#remove);
      }
      destroy() {
        _attributes.attributes.off("add", this.#set);
        _attributes.attributes.off("remove", this.#remove);
      }
    }
    exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
  }
});
ims.set("./widget/checksum", {
  hash: 1702419318,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    function _default(s) {
      let hash = 0,
        i,
        c;
      const length = s.length;
      if (length === 0) {
        return hash;
      }
      for (i = 0; i < length; i++) {
        c = s.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }
      return hash.toString().replace("-", "n");
    }
    ;
  }
});
ims.set("./widget/csr", {
  hash: 1023760945,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetCSR = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetCSR2 extends _core.Events {
      #widget;
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #controller;
      get controller() {
        return this.#controller;
      }
      #error;
      get error() {
        return this.#error;
      }
      #loading = false;
      get loading() {
        return this.#loading;
      }
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #holders = /* @__PURE__ */new Set(["initialised", "loaded"]);
      initialise() {
        if (!this.#widget.specs.render.csr) return;
        if (!this.#holders.has("initialised")) throw new Error("Widget CSR already initialised");
        this.#holders.delete("initialised");
        this.#render();
      }
      constructor(widget) {
        super();
        const {
          specifier,
          specs
        } = this.#widget = widget;
        if (!specs.render.csr) return;
        bimport(specifier).then(bundle => {
          this.#bundle = bundle;
          this.#loading = false;
          this.#loaded = true;
          this.#holders.delete("loaded");
          this.#render();
        }).catch(exc => {
          console.error(`Error loading widget "${specifier}"`, exc.stack);
          this.#error = exc.message;
          this.#loading = false;
        });
      }
      #render = () => {
        if (this.#holders.size) return;
        const {
          Controller
        } = this.#bundle;
        if (!Controller || typeof Controller !== "function") {
          const message = `Widget "${this.#widget.localName}" does not export its Controller`;
          console.error(message);
          this.#error = message;
          return;
        }
        this.#controller = new Controller(this.#widget);
        this.#controller.initialise().then(() => this.trigger("controller.initialised")).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
      };
      disconnect() {
        this.#controller?.disconnect?.();
      }
      attributeChanged(name, old, value) {
        this.#controller?.attributeChanged(name, old, value);
      }
    }
    exports.WidgetCSR = WidgetCSR2;
  }
});
ims.set("./widget/index", {
  hash: 2251972216,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondWidget = void 0;
    var _instances = require2("../instances");
    var _sr = require2("./sr");
    var _csr = require2("./csr");
    var _ssr = require2("./ssr");
    var _attributes = require2("./attributes");
    var _styles = require2("./styles");
    const Element = typeof HTMLElement === "undefined" ? null : HTMLElement;
    class BeyondWidget2 extends Element {
      #specs;
      get specs() {
        return this.#specs;
      }
      get name() {
        return this.#specs.name;
      }
      get vspecifier() {
        return this.#specs.vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      get host() {
        return `${location.origin}/`;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #holder;
      get holder() {
        return this.#holder;
      }
      #sr;
      get sr() {
        return this.#sr;
      }
      #csr;
      get csr() {
        return this.#csr;
      }
      get controller() {
        return this.#csr.controller;
      }
      #ssr;
      get ssr() {
        return this.#ssr;
      }
      #attributes;
      #styles;
      get styles() {
        return this.#styles;
      }
      #wnode;
      get wnode() {
        return this.#wnode;
      }
      get wparent() {
        return this.#wnode.parent;
      }
      get wchildren() {
        return [...this.#wnode.children];
      }
      #oncontroller = () => {
        const event = new CustomEvent("controller.initialised", {
          bubbles: false,
          composed: false
        });
        this.dispatchEvent(event);
      };
      constructor(specs) {
        super();
        this.#specs = specs;
        this.attachShadow({
          mode: "open"
        });
        this.#specifier = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          const subpath = split.join("/");
          return (scope ? `${scope}/${name}` : name) + (subpath ? `/${subpath}` : "");
        })();
        this.#attributes = new _attributes.WidgetGlobalAttributes();
        this.#sr = new _sr.WidgetSR(this);
        this.#ssr = new _ssr.WidgetSSR(this);
        this.#csr = new _csr.WidgetCSR(this);
        this.#csr?.on("controller.initialised", this.#oncontroller);
        this.#styles = new _styles.StylesManager(this);
      }
      connectedCallback() {
        this.#wnode = _instances.instances.register(this);
        this.#holder = document.createElement("span");
        this.#holder.style.display = "none";
        this.shadowRoot.append(this.#holder);
        this.#attributes.initialise(this.#holder);
        this.#ssr.initialise().catch(exc => console.error(exc.stack));
        this.#sr.initialise().catch(exc => console.error(exc.stack));
        this.#csr.initialise();
      }
      disconnectedCallback() {
        this.#csr.disconnect();
      }
      attributeChangedCallback(name, old, value) {
        this.#csr.attributeChanged(name, old, value);
      }
    }
    exports.BeyondWidget = BeyondWidget2;
  }
});
ims.set("./widget/renderer", {
  hash: 571206461,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Renderer = void 0;
    class Renderer {
      #widget;
      constructor(widget) {
        this.#widget = widget;
      }
      #ct = 0;
      async render(sr) {
        const ct = ++this.#ct;
        const {
          name,
          holder,
          styles
        } = this.#widget;
        if (sr.errors?.length) {
          console.error(`Error fetching static rendered widget "${name}":`, sr.errors);
          return;
        }
        if (holder.children.length) return;
        if (!sr.html) return "";
        const host = await this.#widget.host;
        holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))();
        const links = [];
        const resources = holder.querySelectorAll("link");
        resources.forEach(node => links.push(node.href));
        links.length && (await styles.initialise(links));
        resources.forEach(node => node.localName === "link" && node.addEventListener("load", styles.onloaded));
        await styles?.ready;
        if (this.#ct !== ct) return;
        holder.style.display = "";
      }
    }
    exports.Renderer = Renderer;
  }
});
ims.set("./widget/sr", {
  hash: 2731121275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSR = void 0;
    var _checksum = require2("./checksum");
    var _renderer = require2("./renderer");
    class WidgetSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const {
          specs
        } = this.#widget;
        if (!specs.render.sr) return;
        const language = (() => {
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `${language2}:`;
        })();
        let resource;
        if (specs.is === "page") {
          let key = `${language}${specs.name}//${location.pathname}${location.search}`;
          resource = (0, _checksum.default)(key);
        } else if (specs.is === "layout") {
          resource = (0, _checksum.default)(`${language}${specs.name}`);
        } else {
          const compute = /* @__PURE__ */new Map();
          specs.attrs?.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            value && compute.set(attr, value);
          });
          let key = language;
          [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
          resource = (0, _checksum.default)(key);
        }
        const host = await this.#widget.host;
        const url = `${host}__sr_widgets__/${specs.name}.${resource}.js`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error("Widget static content fetch error:", exc.message);
        }
      }
    }
    exports.WidgetSR = WidgetSR;
  }
});
ims.set("./widget/ssr", {
  hash: 2834037449,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSSR = void 0;
    var _prerendered = require2("../prerendered");
    var _renderer = require2("./renderer");
    class WidgetSSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (!this.#widget.specs.render.ssr) return;
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const widget = this.#widget;
        const {
          specs
        } = widget;
        const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);
        const found = _prerendered.prerender.find(specs.name, attrs);
        if (!found) {
          return await this.#load();
        }
        this.#prerender = found;
        await this.#renderer.render(found);
      }
      async #load() {
        const {
          specifier,
          name
        } = this.#widget;
        const host = await (async () => {
          const split = specifier.split("/");
          const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
          const {
            ssr: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config || !config.host) {
            console.error(`Project "${pkg}" does not support SSR (host not configured). Required by "${name}" widget.`);
            return;
          }
          return config.host;
        })();
        if (!host) return;
        const language = (() => {
          const {
            specs
          } = this.#widget;
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `&language=${language2}`;
        })();
        let attrs = (() => {
          const {
            specs
          } = this.#widget;
          if (!specs.attrs?.length) return "";
          let attrs2 = "&attrs=" + specs.attrs.join(",");
          specs.attrs.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            if (!value) return;
            attrs2 += `&attr.${attr}=${value}`;
          });
        })();
        const url = `${host}/widget?name=${name}${language}${attrs}`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching SSR of widget "${name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error(exc.stack);
        }
      }
    }
    exports.WidgetSSR = WidgetSSR;
  }
});
ims.set("./widget/styles/global", {
  hash: 1566285625,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GlobalCSS = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class GlobalCSS2 extends _core.Events {
      #widget;
      #version = 0;
      constructor(widget) {
        super();
        this.#widget = widget;
        const {
          host
        } = this.#widget;
        const version = this.#version !== 0 ? `?version=${this.#version}` : "";
        this.#link = `${host}global.css${version}`;
      }
      #link;
      get link() {
        return this.#link;
      }
      update() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.GlobalCSS = GlobalCSS2;
  }
});
ims.set("./widget/styles/index", {
  hash: 1538919774,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StylesManager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _link = require2("./link");
    var _global = require2("./global");
    class StylesManager2 {
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      #loaded = /* @__PURE__ */new Map();
      #globalcss;
      #version = 0;
      get version() {
        return this.#version;
      }
      #changed() {
        this.#version++;
        this.#resolved && this.#events.trigger("change");
      }
      get resources() {
        return /* @__PURE__ */new Set([...this.#loaded.keys()]);
      }
      get loaded() {
        this.#check();
        return this.#resolved;
      }
      #promise;
      #resolved = false;
      #resolve;
      get ready() {
        this.#check();
        return this.#promise;
      }
      onloaded = event => {
        const href = typeof event === "string" ? event : event.currentTarget.getAttribute("href");
        if (!this.#loaded.has(href)) {
          console.warn(`Stylesheet href="${href}" not registered`);
          return;
        }
        this.#loaded.set(href, true);
        this.#check();
        const changed = this.#purge();
        changed && this.#changed();
        return true;
      };
      #check() {
        if (this.#resolved) return true;
        const loaded = [...this.#loaded.values()].reduce((prev, loaded2) => prev && loaded2, true);
        loaded && this.#resolve();
        return this.#resolved = loaded;
      }
      #purge() {
        const versions = {
          last: /* @__PURE__ */new Map(),
          values: /* @__PURE__ */new Map(),
          lastLoaded: /* @__PURE__ */new Map()
        };
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const prevLast = versions.last.get(link.resource);
          const last = prevLast && prevLast > link.version ? prevLast : link.version;
          versions.last.set(link.resource, last);
          if (this.#loaded.get(link.href)) {
            const prevLastLoaded = versions.lastLoaded.get(link.resource);
            const lastLoaded = prevLastLoaded && prevLastLoaded > link.version ? prevLastLoaded : link.version;
            versions.lastLoaded.set(link.resource, lastLoaded);
          }
          const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : /* @__PURE__ */new Set();
          values.add(link.version);
          versions.values.set(link.resource, values);
        });
        const purge = [];
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const lastLoaded = versions.lastLoaded.get(link.resource);
          link.version < lastLoaded && purge.push(link);
        });
        purge.forEach(link => this.#loaded.delete(link.href));
        return !!purge.length;
      }
      #last;
      #refresh = () => {
        if (!this.#last) return;
        const changed = this.#update(this.#last);
        changed && this.#changed();
      };
      #update(_links) {
        this.#last = _links;
        _links.unshift(this.#globalcss.link);
        const links = _links.map(link => new _link.default(link));
        let changed = false;
        links.forEach(link => {
          if (this.#loaded.has(link.href)) return;
          this.#loaded.set(link.href, false);
          changed = true;
        });
        return changed;
      }
      update(links) {
        const changed = this.#update(links);
        changed && this.#changed();
      }
      constructor(widget) {
        this.#globalcss = new _global.GlobalCSS(widget);
        this.#promise = new Promise(resolve => this.#resolve = resolve);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      async initialise(links) {
        if (this.#initialised) throw new Error(`Widget styles already initialised`);
        this.#initialised = true;
        this.#update(links);
        this.#globalcss.on("change", this.#refresh);
      }
      destroy() {
        this.#globalcss.off("change", this.#refresh);
      }
    }
    exports.StylesManager = StylesManager2;
  }
});
ims.set("./widget/styles/link", {
  hash: 3219871066,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      #href;
      get href() {
        return this.#href;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
      #version;
      get version() {
        return this.#version;
      }
      constructor(href) {
        this.#href = href;
        const iv = href.split("?version=");
        this.#resource = iv[0];
        this.#version = iv[1] ? parseInt(iv[1]) : 0;
      }
    }
    exports.default = _default;
  }
});
ims.set("./widgets", {
  hash: 3986250608,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.widgets = void 0;
    var _widget = require2("./widget");
    var _instances = require2("./instances");
    var _attributes = require2("./attributes");
    require2("./anchor");
    class BeyondWidgets extends Map {
      #ssr = true;
      get ssr() {
        return this.#ssr;
      }
      constructor() {
        super();
      }
      setup(config) {
        this.#ssr = typeof config?.ssr === "boolean" ? config.ssr : true;
      }
      get instances() {
        return _instances.instances;
      }
      get attributes() {
        return _attributes.attributes;
      }
      register(specs) {
        specs.forEach(specs2 => {
          if (this.has(specs2.name)) return;
          specs2.render = specs2.render ? specs2.render : {
            csr: true,
            ssr: false,
            sr: false
          };
          const {
            name,
            render
          } = specs2;
          render.csr = typeof render.csr === "boolean" ? render.csr : true;
          this.set(name, specs2);
          if (typeof process === "object") return;
          customElements.define(name, class extends _widget.BeyondWidget {
            static get observedAttributes() {
              return specs2.attrs ? specs2.attrs : [];
            }
            constructor() {
              super(specs2);
            }
          });
        });
      }
    }
    const widgets2 = new BeyondWidgets();
    exports.widgets = widgets2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "attributes",
  "name": "attributes"
}, {
  "im": "./instances/node",
  "from": "NodeWidget",
  "name": "NodeWidget"
}, {
  "im": "./prerendered/index",
  "from": "prerender",
  "name": "prerender"
}, {
  "im": "./widget/csr",
  "from": "IBeyondWidgetController",
  "name": "IBeyondWidgetController"
}, {
  "im": "./widget/csr",
  "from": "WidgetCSR",
  "name": "WidgetCSR"
}, {
  "im": "./widget/index",
  "from": "IWidgetSpecs",
  "name": "IWidgetSpecs"
}, {
  "im": "./widget/index",
  "from": "BeyondWidget",
  "name": "BeyondWidget"
}, {
  "im": "./widget/styles/global",
  "from": "GlobalCSS",
  "name": "GlobalCSS"
}, {
  "im": "./widget/styles/index",
  "from": "StylesManager",
  "name": "StylesManager"
}, {
  "im": "./widgets",
  "from": "widgets",
  "name": "widgets"
}];
var attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "attributes") && (attributes = require2 ? require2("./attributes").attributes : value);
  (require2 || prop === "NodeWidget") && (NodeWidget = require2 ? require2("./instances/node").NodeWidget : value);
  (require2 || prop === "prerender") && (prerender = require2 ? require2("./prerendered/index").prerender : value);
  (require2 || prop === "IBeyondWidgetController") && (IBeyondWidgetController = require2 ? require2("./widget/csr").IBeyondWidgetController : value);
  (require2 || prop === "WidgetCSR") && (WidgetCSR = require2 ? require2("./widget/csr").WidgetCSR : value);
  (require2 || prop === "IWidgetSpecs") && (IWidgetSpecs = require2 ? require2("./widget/index").IWidgetSpecs : value);
  (require2 || prop === "BeyondWidget") && (BeyondWidget = require2 ? require2("./widget/index").BeyondWidget : value);
  (require2 || prop === "GlobalCSS") && (GlobalCSS = require2 ? require2("./widget/styles/global").GlobalCSS : value);
  (require2 || prop === "StylesManager") && (StylesManager = require2 ? require2("./widget/styles/index").StylesManager : value);
  (require2 || prop === "widgets") && (widgets = require2 ? require2("./widgets").widgets : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIuMC4xLjUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2FuY2hvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvYXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvaW5zdGFuY2VzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci9pbnN0YW5jZXMvbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvcHJlcmVuZGVyZWQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY2hlY2tzdW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9jc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3JlbmRlcmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zdHlsZXMvZ2xvYmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldHMudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJCZXlvbmRXaWRnZXQiLCJHbG9iYWxDU1MiLCJJQmV5b25kV2lkZ2V0Q29udHJvbGxlciIsIklXaWRnZXRTcGVjcyIsIk5vZGVXaWRnZXQiLCJTdHlsZXNNYW5hZ2VyIiwiV2lkZ2V0Q1NSIiwiX19iZXlvbmRfcGtnIiwiYXR0cmlidXRlcyIsImhtciIsInByZXJlbmRlciIsIndpZGdldHMiLCJtb2R1bGUiLCJwcm9jZXNzIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsImNvbnN0cnVjdG9yIiwiYmltcG9ydCIsInRoZW4iLCJyb3V0aW5nIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzQXR0cmlidXRlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicHVzaFN0YXRlIiwiQXR0cmlidXRlcyIsIkV2ZW50cyIsIk1hcCIsInZhbHVlcyIsImFkZCIsIm5hbWUiLCJ2YWx1ZSIsInNldCIsInRyaWdnZXIiLCJyZW1vdmUiLCJkZWxldGUiLCJleHBvcnRzIiwiaW5zdGFuY2VzIiwiU2V0IiwicmVnaXN0ZXIiLCJ3aWRnZXQiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJoYXMiLCJub2RlIiwid25vZGUiLCJjaGlsZHJlbiIsInNzciIsImZpbmQiLCJlbGVtZW50IiwiYXR0cnMiLCJpdGVtIiwiaWF0dHJzIiwicmVkdWNlIiwicHJldiIsImdldCIsIldpZGdldEdsb2JhbEF0dHJpYnV0ZXMiLCJob2xkZXIiLCIjc2V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdGlhbGlzZSIsImZvckVhY2giLCJvbiIsImRlc3Ryb3kiLCJvZmYiLCJzIiwiaGFzaCIsImkiLCJjIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsImJ1bmRsZSIsImNvbnRyb2xsZXIiLCJlcnJvciIsImxvYWRpbmciLCJsb2FkZWQiLCJzcGVjcyIsInJlbmRlciIsImNzciIsIkVycm9yIiwic3BlY2lmaWVyIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwic3RhY2siLCJtZXNzYWdlIiwiI3JlbmRlciIsInNpemUiLCJDb250cm9sbGVyIiwibG9jYWxOYW1lIiwibG9nIiwiZGlzY29ubmVjdCIsImF0dHJpYnV0ZUNoYW5nZWQiLCJvbGQiLCJFbGVtZW50IiwidnNwZWNpZmllciIsImxvY2F0aW9uIiwib3JpZ2luIiwiaXMiLCJyb3V0ZSIsImxheW91dCIsInNyIiwic3R5bGVzIiwid3BhcmVudCIsIndjaGlsZHJlbiIsIiNvbmNvbnRyb2xsZXIiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNvbXBvc2VkIiwiZGlzcGF0Y2hFdmVudCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsImpvaW4iLCJXaWRnZXRTUiIsIldpZGdldFNTUiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzaGFkb3dSb290IiwiYXBwZW5kIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJSZW5kZXJlciIsImN0IiwiZXJyb3JzIiwiaHRtbCIsImlubmVySFRNTCIsImxpbmtzIiwicmVzb3VyY2VzIiwicXVlcnlTZWxlY3RvckFsbCIsInB1c2giLCJocmVmIiwib25sb2FkZWQiLCJyZWFkeSIsImxhbmd1YWdlIiwibXVsdGlsYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsIl9fYmV5b25kX2xhbmd1YWdlIiwibmF2aWdhdG9yIiwic2xpY2UiLCJyZXNvdXJjZSIsImtleSIsInBhdGhuYW1lIiwic2VhcmNoIiwiY29tcHV0ZSIsImF0dHIiLCJzb3J0IiwiYSIsImIiLCJrIiwidiIsInJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwibWFwIiwiZm91bmQiLCJwa2ciLCJjb25maWciLCJkZWZhdWx0IiwidmVyc2lvbiIsImxpbmsiLCJ1cGRhdGUiLCJsaXN0ZW5lciIsImtleXMiLCJjdXJyZW50VGFyZ2V0Iiwid2FybiIsImNoYW5nZWQiLCJ2ZXJzaW9ucyIsImxhc3QiLCJsYXN0TG9hZGVkIiwiTGluayIsInByZXZMYXN0IiwicHJldkxhc3RMb2FkZWQiLCJwdXJnZSIsIiNyZWZyZXNoIiwiX2xpbmtzIiwidW5zaGlmdCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW5pdGlhbGlzZWQiLCJpdiIsInBhcnNlSW50IiwicmVxdWlyZSIsIkJleW9uZFdpZGdldHMiLCJzZXR1cCIsIm9ic2VydmVkQXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNL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