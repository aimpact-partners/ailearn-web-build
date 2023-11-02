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

// .beyond/uimport/@beyond-js/widgets/render.0.1.5.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyLjAuMS41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci9hbmNob3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2luc3RhbmNlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvaW5zdGFuY2VzL25vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3ByZXJlbmRlcmVkL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvYXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L2NoZWNrc3VtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9yZW5kZXJlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2dsb2JhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXRzLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiQmV5b25kV2lkZ2V0IiwiR2xvYmFsQ1NTIiwiSUJleW9uZFdpZGdldENvbnRyb2xsZXIiLCJJV2lkZ2V0U3BlY3MiLCJOb2RlV2lkZ2V0IiwiU3R5bGVzTWFuYWdlciIsIldpZGdldENTUiIsIl9fYmV5b25kX3BrZyIsImF0dHJpYnV0ZXMiLCJobXIiLCJwcmVyZW5kZXIiLCJ3aWRnZXRzIiwibW9kdWxlIiwicHJvY2VzcyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwicm91dGluZyIsImNvbm5lY3RlZENhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc0F0dHJpYnV0ZSIsInVybCIsImdldEF0dHJpYnV0ZSIsInB1c2hTdGF0ZSIsIkF0dHJpYnV0ZXMiLCJFdmVudHMiLCJNYXAiLCJ2YWx1ZXMiLCJhZGQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwiZGVsZXRlIiwiZXhwb3J0cyIsImluc3RhbmNlcyIsIlNldCIsInJlZ2lzdGVyIiwid2lkZ2V0IiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0IiwiaGFzIiwibm9kZSIsIndub2RlIiwiY2hpbGRyZW4iLCJzc3IiLCJmaW5kIiwiZWxlbWVudCIsImF0dHJzIiwiaXRlbSIsImlhdHRycyIsInJlZHVjZSIsInByZXYiLCJnZXQiLCJXaWRnZXRHbG9iYWxBdHRyaWJ1dGVzIiwiaG9sZGVyIiwiI3NldCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImluaXRpYWxpc2UiLCJmb3JFYWNoIiwib24iLCJkZXN0cm95Iiwib2ZmIiwicyIsImhhc2giLCJpIiwiYyIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJidW5kbGUiLCJjb250cm9sbGVyIiwiZXJyb3IiLCJsb2FkaW5nIiwibG9hZGVkIiwic3BlY3MiLCJyZW5kZXIiLCJjc3IiLCJFcnJvciIsInNwZWNpZmllciIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsInN0YWNrIiwibWVzc2FnZSIsIiNyZW5kZXIiLCJzaXplIiwiQ29udHJvbGxlciIsImxvY2FsTmFtZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwib2xkIiwiRWxlbWVudCIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCIjb25jb250cm9sbGVyIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjb21wb3NlZCIsImRpc3BhdGNoRXZlbnQiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJqb2luIiwiV2lkZ2V0U1IiLCJXaWRnZXRTU1IiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2hhZG93Um9vdCIsImFwcGVuZCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwiUmVuZGVyZXIiLCJjdCIsImVycm9ycyIsImh0bWwiLCJpbm5lckhUTUwiLCJsaW5rcyIsInJlc291cmNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwdXNoIiwiaHJlZiIsIm9ubG9hZGVkIiwicmVhZHkiLCJsYW5ndWFnZSIsIm11bHRpbGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJfX2JleW9uZF9sYW5ndWFnZSIsIm5hdmlnYXRvciIsInNsaWNlIiwicmVzb3VyY2UiLCJrZXkiLCJwYXRobmFtZSIsInNlYXJjaCIsImNvbXB1dGUiLCJhdHRyIiwic29ydCIsImEiLCJiIiwiayIsInYiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsIm1hcCIsImZvdW5kIiwicGtnIiwiY29uZmlnIiwiZGVmYXVsdCIsInZlcnNpb24iLCJsaW5rIiwidXBkYXRlIiwibGlzdGVuZXIiLCJrZXlzIiwiY3VycmVudFRhcmdldCIsIndhcm4iLCJjaGFuZ2VkIiwidmVyc2lvbnMiLCJsYXN0IiwibGFzdExvYWRlZCIsIkxpbmsiLCJwcmV2TGFzdCIsInByZXZMYXN0TG9hZGVkIiwicHVyZ2UiLCIjcmVmcmVzaCIsIl9saW5rcyIsInVuc2hpZnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImluaXRpYWxpc2VkIiwiaXYiLCJwYXJzZUludCIsInJlcXVpcmUiLCJCZXlvbmRXaWRnZXRzIiwic2V0dXAiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS0EsT0FB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