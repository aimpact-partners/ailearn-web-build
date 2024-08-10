System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets, __beyond_pkg, hmr;
  _export({
    attributes: void 0,
    NodeWidget: void 0,
    prerender: void 0,
    IBeyondWidgetController: void 0,
    WidgetCSR: void 0,
    IWidgetSpecs: void 0,
    BeyondWidget: void 0,
    GlobalCSS: void 0,
    StylesManager: void 0,
    widgets: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/widgets", "1.1.0"], ["@aimpact/ailearn-app", "0.1.4-test.05"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/widgets@1.1.0/render"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./anchor
      ************************/
      ims.set('./anchor', {
        hash: 157107968,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          typeof process !== 'object' && customElements.define('beyond-link', class extends HTMLElement {
            #routing;
            constructor() {
              super();
              bimport('@beyond-js/kernel/routing').then(({
                routing
              }) => this.#routing = routing);
            }
            connectedCallback() {
              this.addEventListener('click', () => {
                if (!this.hasAttribute('data-url')) return;
                const url = this.getAttribute('data-url');
                this.#routing?.pushState(url);
              });
            }
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./attributes
      ****************************/

      ims.set('./attributes', {
        hash: 1948053846,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.attributes = exports.Attributes = void 0;
          var _core = require("@beyond-js/kernel/core");
          class Attributes extends _core.Events {
            #values = new Map();
            get values() {
              return this.#values;
            }
            add(name, value) {
              this.#values.set(name, value);
              this.trigger('add', name, value);
              this.trigger('change');
            }
            remove(name) {
              this.#values.delete(name);
              this.trigger('remove', name);
              this.trigger('change');
            }
          }
          exports.Attributes = Attributes;
          /*bundle*/
          const attributes = exports.attributes = new Attributes();
        }
      });

      /*********************************
      INTERNAL MODULE: ./instances/index
      *********************************/

      ims.set('./instances/index', {
        hash: 2203205286,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.instances = void 0;
          var _node = require("./node");
          // Maintains a tree of widget instances
          // NodeWidget is an object with a tree structure (parent, children)
          const instances = exports.instances = new class extends Set {
            register(widget) {
              this.add(widget);
              // Find parent widget
              const parent = (() => {
                let parent = widget;
                while (true) {
                  const root = parent.getRootNode();
                  if (root === document) return;
                  parent = root.host;
                  if (this.has(parent)) return parent;
                }
              })();
              const node = new _node.NodeWidget(widget, parent);
              parent?.wnode.children.add(widget);
              this.add(widget);
              return node;
            }
          }();
        }
      });

      /********************************
      INTERNAL MODULE: ./instances/node
      ********************************/

      ims.set('./instances/node', {
        hash: 2635585213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NodeWidget = void 0;
          /*bundle*/
          class NodeWidget {
            #widget;
            get widget() {
              return this.#widget;
            }
            #parent;
            get parent() {
              return this.#parent;
            }
            #children = new Set();
            get children() {
              return this.#children;
            }
            constructor(widget, parent) {
              this.#widget = widget;
              this.#parent = parent;
            }
          }
          exports.NodeWidget = NodeWidget;
        }
      });

      /***********************************
      INTERNAL MODULE: ./prerendered/index
      ***********************************/

      ims.set('./prerendered/index', {
        hash: 1802094002,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.prerender = void 0;
          /*bundle*/
          const prerender = exports.prerender = new class {
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
        }
      });

      /***********************************
      INTERNAL MODULE: ./widget/attributes
      ***********************************/

      ims.set('./widget/attributes', {
        hash: 1844817953,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetGlobalAttributes = void 0;
          var _attributes = require("../attributes");
          /**
           * The global attributes specified in widgets.attributes that apply to all the widgets in the application
           */
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
              _attributes.attributes.on('add', this.#set);
              _attributes.attributes.on('remove', this.#remove);
            }
            destroy() {
              _attributes.attributes.off('add', this.#set);
              _attributes.attributes.off('remove', this.#remove);
            }
          }
          exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
        }
      });

      /*********************************
      INTERNAL MODULE: ./widget/checksum
      *********************************/

      ims.set('./widget/checksum', {
        hash: 1000731235,
        creator: function (require, exports) {
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
              hash = hash & hash; // Convert to 32bit integer
            }
            return hash.toString().replace('-', 'n');
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./widget/csr
      ****************************/

      ims.set('./widget/csr', {
        hash: 3612276883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetCSR = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class WidgetCSR extends _core.Events {
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
            #holders = new Set(['initialised', 'loaded']);
            initialise() {
              // Check if CSR is enabled (default) for this widget
              if (!this.#widget.specs.render.csr) return;
              if (!this.#holders.has('initialised')) throw new Error('Widget CSR already initialised');
              this.#holders.delete('initialised');
              this.#render();
            }
            constructor(widget) {
              super();
              const {
                specifier,
                specs
              } = this.#widget = widget;
              // Check if CSR is enabled (default) for this widget
              if (!specs.render.csr) return;
              bimport(specifier).then(bundle => {
                this.#bundle = bundle;
                this.#loading = false;
                this.#loaded = true;
                this.#holders.delete('loaded');
                this.#render();
              }).catch(exc => {
                console.error(`Error loading widget "${specifier}"`, exc.stack);
                this.#error = exc.message;
                this.#loading = false;
              });
            }
            #render = () => {
              // Render the widget once the connectedCallback is called and the bundle was imported
              if (this.#holders.size) return;
              const {
                Controller
              } = this.#bundle;
              if (!Controller || typeof Controller !== 'function') {
                const message = `Widget "${this.#widget.localName}" does not export its Controller`;
                console.error(message);
                this.#error = message;
                return;
              }
              this.#controller = new Controller(this.#widget);
              this.#controller.initialise().then(() => this.trigger('controller.initialised')).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
            };
            disconnect() {
              this.#controller?.disconnect?.();
            }
            attributeChanged(name, old, value) {
              this.#controller?.attributeChanged(name, old, value);
            }
          }
          exports.WidgetCSR = WidgetCSR;
        }
      });

      /******************************
      INTERNAL MODULE: ./widget/index
      ******************************/

      ims.set('./widget/index', {
        hash: 2614430817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondWidget = void 0;
          var _instances = require("../instances");
          var _sr = require("./sr");
          var _csr = require("./csr");
          var _ssr = require("./ssr");
          var _attributes = require("./attributes");
          var _styles = require("./styles");
          // In SSR environment HTMLElement is not defined
          const Element = typeof HTMLElement === 'undefined' ? null : HTMLElement;
          /*bundle*/
          class BeyondWidget extends Element {
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
            // To identify where the widget is in the widgets tree
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
            /**
             * Actually required by routing to call the .show & .hide methods once the controller is initialised
             */
            #oncontroller = () => {
              const event = new CustomEvent('controller.initialised', {
                bubbles: false,
                composed: false
              });
              this.dispatchEvent(event);
            };
            constructor(specs) {
              super();
              this.#specs = specs;
              this.attachShadow({
                mode: 'open'
              });
              /**
               * Extract the version to the vspecifier
               * @type {string}
               */
              this.#specifier = (() => {
                const split = specs.vspecifier.split('/');
                const scope = split[0].startsWith('@') ? split.shift() : void 0;
                const [name] = split.shift().split('@');
                const subpath = split.join('/');
                return (scope ? `${scope}/${name}` : name) + (subpath ? `/${subpath}` : '');
              })();
              this.#attributes = new _attributes.WidgetGlobalAttributes();
              this.#sr = new _sr.WidgetSR(this);
              this.#ssr = new _ssr.WidgetSSR(this);
              this.#csr = new _csr.WidgetCSR(this);
              this.#csr?.on('controller.initialised', this.#oncontroller);
              this.#styles = new _styles.StylesManager(this);
            }
            connectedCallback() {
              // Register the widget in the instances registry after connectedCallback is done
              this.#wnode = _instances.instances.register(this);
              this.#holder = document.createElement('span');
              this.#holder.style.display = 'none';
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
          exports.BeyondWidget = BeyondWidget;
        }
      });

      /*********************************
      INTERNAL MODULE: ./widget/renderer
      *********************************/

      ims.set('./widget/renderer', {
        hash: 442693055,
        creator: function (require, exports) {
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
            // Cancellation token
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
              // Check if already rendered by CSR
              if (holder.children.length) return;
              if (!sr.html) return '';
              const host = await this.#widget.host;
              holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))();
              // Set the widget styles to be able to know when they are loaded to avoid FOUC (flash of unstyled content)
              const links = [];
              const resources = holder.querySelectorAll('link');
              resources.forEach(node => links.push(node.href));
              links.length && (await styles.initialise(links));
              resources.forEach(node => node.localName === 'link' && node.addEventListener('load', styles.onloaded));
              // Wait for style sheets be ready
              await styles?.ready;
              if (this.#ct !== ct) return;
              // Once the styles are loaded, show the content of the widget
              holder.style.display = '';
            }
          }
          exports.Renderer = Renderer;
        }
      });

      /***************************
      INTERNAL MODULE: ./widget/sr
      ***************************/

      ims.set('./widget/sr', {
        hash: 828831605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetSR = void 0;
          var _checksum = require("./checksum");
          var _renderer = require("./renderer");
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
              if (this.#initialised) throw new Error('Widget SSR already initialised');
              this.#initialised = true;
              const {
                specs
              } = this.#widget;
              // Check if SR is enabled for this widget
              if (!specs.render.sr) return;
              const language = (() => {
                const {
                  multilanguage
                } = specs.render;
                if (!multilanguage) return '';
                let language = localStorage.__beyond_language;
                language = language ? language : navigator.language;
                language = language.slice(0, 2);
                return `${language}:`;
              })();
              let resource;
              if (specs.is === 'page') {
                let key = `${language}${specs.name}//${location.pathname}${location.search}`;
                resource = (0, _checksum.default)(key);
              } else if (specs.is === 'layout') {
                resource = (0, _checksum.default)(`${language}${specs.name}`);
              } else {
                const compute = new Map();
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
                // Register as a pre-rendered widget (required to hydrate the store)
                this.#prerender = sr;
                // Finally render the widget
                await this.#renderer.render(sr);
              } catch (exc) {
                console.error('Widget static content fetch error:', exc.message);
              }
            }
          }
          exports.WidgetSR = WidgetSR;
        }
      });

      /****************************
      INTERNAL MODULE: ./widget/ssr
      ****************************/

      ims.set('./widget/ssr', {
        hash: 3024365739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetSSR = void 0;
          var _prerendered = require("../prerendered");
          var _renderer = require("./renderer");
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
            /**
             * Check if widget is already pre-rendered (index.html makes a page ssr fetch)
             */
            async initialise() {
              // Check if SSR is enabled for this widget
              if (!this.#widget.specs.render.ssr) return;
              if (this.#initialised) throw new Error('Widget SSR already initialised');
              this.#initialised = true;
              const widget = this.#widget;
              const {
                specs
              } = widget;
              const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);
              const found = _prerendered.prerender.find(specs.name, attrs);
              // If the widget has not been loaded by routing SSR, then load the widget alone
              if (!found) {
                return await this.#load();
              }
              this.#prerender = found;
              // Finally render the widget
              await this.#renderer.render(found);
            }
            async #load() {
              const {
                specifier,
                name
              } = this.#widget;
              const host = await (async () => {
                const split = specifier.split('/');
                const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
                const {
                  ssr: config
                } = (await bimport(`${pkg}/config`)).default;
                if (!config || !config.host) {
                  console.error(`Project "${pkg}" does not support SSR (host not configured). ` + `Required by "${name}" widget.`);
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
                if (!multilanguage) return '';
                let language = localStorage.__beyond_language;
                language = language ? language : navigator.language;
                language = language.slice(0, 2);
                return `&language=${language}`;
              })();
              let attrs = (() => {
                const {
                  specs
                } = this.#widget;
                if (!specs.attrs?.length) return '';
                let attrs = '&attrs=' + specs.attrs.join(',');
                specs.attrs.forEach(attr => {
                  const value = this.#widget.getAttribute(attr);
                  if (!value) return;
                  attrs += `&attr.${attr}=${value}`;
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
                // Register as a pre-rendered widget (required to hydrate the store)
                this.#prerender = sr;
                // Finally render the widget
                await this.#renderer.render(sr);
              } catch (exc) {
                console.error(exc.stack);
              }
            }
          }
          exports.WidgetSSR = WidgetSSR;
        }
      });

      /**************************************
      INTERNAL MODULE: ./widget/styles/global
      **************************************/

      ims.set('./widget/styles/global', {
        hash: 1112922337,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GlobalCSS = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class GlobalCSS extends _core.Events {
            #widget;
            #version = 0;
            constructor(widget) {
              super();
              this.#widget = widget;
              const {
                host
              } = this.#widget;
              const version = this.#version !== 0 ? `?version=${this.#version}` : '';
              this.#link = `${host}global.css${version}`;
            }
            #link;
            get link() {
              return this.#link;
            }
            update() {
              this.#version++;
              this.trigger('change');
            }
          }
          exports.GlobalCSS = GlobalCSS;
        }
      });

      /*************************************
      INTERNAL MODULE: ./widget/styles/index
      *************************************/

      ims.set('./widget/styles/index', {
        hash: 3021483485,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StylesManager = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _link = require("./link");
          var _global = require("./global");
          /*bundle*/
          class StylesManager {
            #events = new _core.Events();
            on = (event, listener) => this.#events.on(event, listener);
            off = (event, listener) => this.#events.off(event, listener);
            #loaded = new Map();
            #globalcss;
            #version = 0;
            get version() {
              return this.#version;
            }
            #changed() {
              this.#version++;
              this.#resolved && this.#events.trigger('change');
            }
            get resources() {
              return new Set([...this.#loaded.keys()]);
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
              const href = typeof event === 'string' ? event : event.currentTarget.getAttribute('href');
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
              // Check if all links are loaded
              const loaded = [...this.#loaded.values()].reduce((prev, loaded) => prev && loaded, true);
              loaded && this.#resolve();
              return this.#resolved = loaded;
            }
            /**
             * Remove style sheets that have been supplanted by newer hmr versions
             * @private
             */
            #purge() {
              const versions = {
                last: new Map(),
                values: new Map(),
                lastLoaded: new Map()
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
                const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : new Set();
                values.add(link.version);
                versions.values.set(link.resource, values);
              });
              // Just keep the last loaded version and the loading versions
              const purge = [];
              [...this.#loaded.keys()].forEach(href => {
                const link = new _link.default(href);
                const lastLoaded = versions.lastLoaded.get(link.resource);
                link.version < lastLoaded && purge.push(link);
              });
              purge.forEach(link => this.#loaded.delete(link.href));
              return !!purge.length;
            }
            /**
             * Required to support global.css HMR
             *
             * @type {string[]}
             * @private
             */
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
              // Add the new style sheets
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
              this.#globalcss.on('change', this.#refresh);
            }
            destroy() {
              this.#globalcss.off('change', this.#refresh);
            }
          }
          exports.StylesManager = StylesManager;
        }
      });

      /************************************
      INTERNAL MODULE: ./widget/styles/link
      ************************************/

      ims.set('./widget/styles/link', {
        hash: 2453054171,
        creator: function (require, exports) {
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
              const iv = href.split('?version=');
              this.#resource = iv[0];
              this.#version = iv[1] ? parseInt(iv[1]) : 0;
            }
          }
          exports.default = _default;
        }
      });

      /*************************
      INTERNAL MODULE: ./widgets
      *************************/

      ims.set('./widgets', {
        hash: 334125737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.widgets = void 0;
          var _widget = require("./widget");
          var _instances = require("./instances");
          var _attributes = require("./attributes");
          require("./anchor");
          class BeyondWidgets extends Map {
            #ssr = true;
            get ssr() {
              return this.#ssr;
            }
            constructor() {
              super();
            }
            setup(config) {
              this.#ssr = typeof config?.ssr === 'boolean' ? config.ssr : true;
            }
            get instances() {
              return _instances.instances;
            }
            get attributes() {
              return _attributes.attributes;
            }
            register(specs) {
              specs.forEach(specs => {
                // Widgets can be registered at application start, and later by the widget bundle
                if (this.has(specs.name)) return;
                specs.render = specs.render ? specs.render : {
                  csr: true,
                  ssr: false,
                  sr: false
                };
                const {
                  name,
                  render
                } = specs;
                render.csr = typeof render.csr === 'boolean' ? render.csr : true;
                this.set(name, specs);
                // Do not register the custom elements when rendering in the server
                if (typeof process === 'object') return;
                customElements.define(name, class extends _widget.BeyondWidget {
                  static get observedAttributes() {
                    return specs.attrs ? specs.attrs : [];
                  }
                  constructor() {
                    super(specs);
                  }
                });
              });
            }
          }
          /*bundle*/
          const widgets = exports.widgets = new BeyondWidgets();
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'attributes') && _export("attributes", attributes = require ? require('./attributes').attributes : value);
        (require || prop === 'NodeWidget') && _export("NodeWidget", NodeWidget = require ? require('./instances/node').NodeWidget : value);
        (require || prop === 'prerender') && _export("prerender", prerender = require ? require('./prerendered/index').prerender : value);
        (require || prop === 'IBeyondWidgetController') && _export("IBeyondWidgetController", IBeyondWidgetController = require ? require('./widget/csr').IBeyondWidgetController : value);
        (require || prop === 'WidgetCSR') && _export("WidgetCSR", WidgetCSR = require ? require('./widget/csr').WidgetCSR : value);
        (require || prop === 'IWidgetSpecs') && _export("IWidgetSpecs", IWidgetSpecs = require ? require('./widget/index').IWidgetSpecs : value);
        (require || prop === 'BeyondWidget') && _export("BeyondWidget", BeyondWidget = require ? require('./widget/index').BeyondWidget : value);
        (require || prop === 'GlobalCSS') && _export("GlobalCSS", GlobalCSS = require ? require('./widget/styles/global').GlobalCSS : value);
        (require || prop === 'StylesManager') && _export("StylesManager", StylesManager = require ? require('./widget/styles/index').StylesManager : value);
        (require || prop === 'widgets') && _export("widgets", widgets = require ? require('./widgets').widgets : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcm9jZXNzIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsInJvdXRpbmciLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzQXR0cmlidXRlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicHVzaFN0YXRlIiwiX2NvcmUiLCJyZXF1aXJlIiwiQXR0cmlidXRlcyIsIkV2ZW50cyIsInZhbHVlcyIsIk1hcCIsImFkZCIsIm5hbWUiLCJ2YWx1ZSIsInNldCIsInRyaWdnZXIiLCJyZW1vdmUiLCJkZWxldGUiLCJleHBvcnRzIiwiYXR0cmlidXRlcyIsIl9ub2RlIiwiaW5zdGFuY2VzIiwiU2V0IiwicmVnaXN0ZXIiLCJ3aWRnZXQiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJoYXMiLCJub2RlIiwiTm9kZVdpZGdldCIsIndub2RlIiwiY2hpbGRyZW4iLCJwcmVyZW5kZXIiLCJzc3IiLCJmaW5kIiwiZWxlbWVudCIsImF0dHJzIiwiaXRlbSIsImlhdHRycyIsInJlZHVjZSIsInByZXYiLCJnZXQiLCJfYXR0cmlidXRlcyIsIldpZGdldEdsb2JhbEF0dHJpYnV0ZXMiLCJob2xkZXIiLCIjc2V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdGlhbGlzZSIsImZvckVhY2giLCJvbiIsImRlc3Ryb3kiLCJvZmYiLCJfZGVmYXVsdCIsInMiLCJoYXNoIiwiaSIsImMiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiV2lkZ2V0Q1NSIiwiYnVuZGxlIiwiY29udHJvbGxlciIsImVycm9yIiwibG9hZGluZyIsImxvYWRlZCIsImhvbGRlcnMiLCJzcGVjcyIsInJlbmRlciIsImNzciIsIkVycm9yIiwic3BlY2lmaWVyIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwic3RhY2siLCJtZXNzYWdlIiwiI3JlbmRlciIsInNpemUiLCJDb250cm9sbGVyIiwibG9jYWxOYW1lIiwibG9nIiwiZGlzY29ubmVjdCIsImF0dHJpYnV0ZUNoYW5nZWQiLCJvbGQiLCJfaW5zdGFuY2VzIiwiX3NyIiwiX2NzciIsIl9zc3IiLCJfc3R5bGVzIiwiRWxlbWVudCIsIkJleW9uZFdpZGdldCIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJvbmNvbnRyb2xsZXIiLCIjb25jb250cm9sbGVyIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjb21wb3NlZCIsImRpc3BhdGNoRXZlbnQiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJqb2luIiwiV2lkZ2V0U1IiLCJXaWRnZXRTU1IiLCJTdHlsZXNNYW5hZ2VyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInNoYWRvd1Jvb3QiLCJhcHBlbmQiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIlJlbmRlcmVyIiwiY3QiLCJlcnJvcnMiLCJodG1sIiwiaW5uZXJIVE1MIiwibGlua3MiLCJyZXNvdXJjZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHVzaCIsImhyZWYiLCJvbmxvYWRlZCIsInJlYWR5IiwiX2NoZWNrc3VtIiwiX3JlbmRlcmVyIiwicmVuZGVyZXIiLCJpbml0aWFsaXNlZCIsImxhbmd1YWdlIiwibXVsdGlsYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsIl9fYmV5b25kX2xhbmd1YWdlIiwibmF2aWdhdG9yIiwic2xpY2UiLCJyZXNvdXJjZSIsImtleSIsInBhdGhuYW1lIiwic2VhcmNoIiwiZGVmYXVsdCIsImNvbXB1dGUiLCJhdHRyIiwic29ydCIsImEiLCJiIiwiayIsInYiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsIl9wcmVyZW5kZXJlZCIsIm1hcCIsImZvdW5kIiwibG9hZCIsIiNsb2FkIiwicGtnIiwiY29uZmlnIiwiR2xvYmFsQ1NTIiwidmVyc2lvbiIsImxpbmsiLCJ1cGRhdGUiLCJfbGluayIsIl9nbG9iYWwiLCJldmVudHMiLCJsaXN0ZW5lciIsImdsb2JhbGNzcyIsImNoYW5nZWQiLCIjY2hhbmdlZCIsInJlc29sdmVkIiwia2V5cyIsImNoZWNrIiwicHJvbWlzZSIsInJlc29sdmUiLCJjdXJyZW50VGFyZ2V0Iiwid2FybiIsInB1cmdlIiwiI2NoZWNrIiwiI3B1cmdlIiwidmVyc2lvbnMiLCJsYXN0IiwibGFzdExvYWRlZCIsInByZXZMYXN0IiwicHJldkxhc3RMb2FkZWQiLCJyZWZyZXNoIiwiI3JlZnJlc2giLCIjdXBkYXRlIiwiX2xpbmtzIiwidW5zaGlmdCIsIlByb21pc2UiLCJpdiIsInBhcnNlSW50IiwiX3dpZGdldCIsIkJleW9uZFdpZGdldHMiLCJzZXR1cCIsIm9ic2VydmVkQXR0cmlidXRlcyIsIndpZGdldHMiXSwic291cmNlcyI6WyIvYW5jaG9yLnRzIiwiL2F0dHJpYnV0ZXMudHMiLCIvaW5zdGFuY2VzL2luZGV4LnRzIiwiL2luc3RhbmNlcy9ub2RlLnRzIiwiL3ByZXJlbmRlcmVkL2luZGV4LnRzIiwiL3dpZGdldC9hdHRyaWJ1dGVzLnRzIiwiL3dpZGdldC9jaGVja3N1bS50cyIsIi93aWRnZXQvY3NyLnRzIiwiL3dpZGdldC9pbmRleC50cyIsIi93aWRnZXQvcmVuZGVyZXIudHMiLCIvd2lkZ2V0L3NyLnRzIiwiL3dpZGdldC9zc3IudHMiLCIvd2lkZ2V0L3N0eWxlcy9nbG9iYWwudHMiLCIvd2lkZ2V0L3N0eWxlcy9pbmRleC50cyIsIi93aWRnZXQvc3R5bGVzL2xpbmsudHMiLCIvd2lkZ2V0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFLQSxPQUFPQSxPQUFPLEtBQUssUUFBUSxJQUMxQkMsY0FBYyxDQUFDQyxNQUFNLENBQ3BCLGFBQWEsRUFDYixjQUFjQyxXQUFXO1lBQ3hCLENBQUFDLE9BQVE7WUFFUkMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7Z0JBQUVIO2NBQU8sQ0FBRSxLQUFNLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUdBLE9BQVEsQ0FBQztZQUN0RjtZQUVBSSxpQkFBaUJBLENBQUE7Y0FDaEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBSztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUVwQyxNQUFNQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsVUFBVSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsQ0FBQVIsT0FBUSxFQUFFUyxTQUFTLENBQUNGLEdBQUcsQ0FBQztjQUM5QixDQUFDLENBQUM7WUFDSDtXQUNBLENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJGLElBQUFHLEtBQUEsR0FBQUMsT0FBQTtVQUVNLE1BQU9DLFVBQVcsU0FBUUYsS0FBQSxDQUFBRyxNQUFNO1lBQ3JDLENBQUFDLE1BQU8sR0FBd0IsSUFBSUMsR0FBRyxFQUFFO1lBQ3hDLElBQUlELE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUFFLEdBQUdBLENBQUNDLElBQVksRUFBRUMsS0FBYTtjQUM5QixJQUFJLENBQUMsQ0FBQUosTUFBTyxDQUFDSyxHQUFHLENBQUNGLElBQUksRUFBRUMsS0FBSyxDQUFDO2NBQzdCLElBQUksQ0FBQ0UsT0FBTyxDQUFDLEtBQUssRUFBRUgsSUFBSSxFQUFFQyxLQUFLLENBQUM7Y0FDaEMsSUFBSSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUFDLE1BQU1BLENBQUNKLElBQVk7Y0FDbEIsSUFBSSxDQUFDLENBQUFILE1BQU8sQ0FBQ1EsTUFBTSxDQUFDTCxJQUFJLENBQUM7Y0FDekIsSUFBSSxDQUFDRyxPQUFPLENBQUMsUUFBUSxFQUFFSCxJQUFJLENBQUM7Y0FDNUIsSUFBSSxDQUFDRyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCOztVQUNBRyxPQUFBLENBQUFYLFVBQUEsR0FBQUEsVUFBQTtVQUVNO1VBQVcsTUFBTVksVUFBVSxHQUFBRCxPQUFBLENBQUFDLFVBQUEsR0FBZSxJQUFJWixVQUFVLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJqRSxJQUFBYSxLQUFBLEdBQUFkLE9BQUE7VUFFQTtVQUNBO1VBQ08sTUFBTWUsU0FBUyxHQUFBSCxPQUFBLENBQUFHLFNBQUEsR0FBRyxJQUFLLGNBQWNDLEdBQWlCO1lBQzVEQyxRQUFRQSxDQUFDQyxNQUFvQjtjQUM1QixJQUFJLENBQUNiLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDO2NBRWhCO2NBQ0EsTUFBTUMsTUFBTSxHQUFpQixDQUFDLE1BQW1CO2dCQUNoRCxJQUFJQSxNQUFNLEdBQVNELE1BQU07Z0JBQ3pCLE9BQU8sSUFBSSxFQUFFO2tCQUNaLE1BQU1FLElBQUksR0FBU0QsTUFBTSxDQUFDRSxXQUFXLEVBQUU7a0JBQ3ZDLElBQUlELElBQUksS0FBS0UsUUFBUSxFQUFFO2tCQUV2QkgsTUFBTSxHQUFnQkMsSUFBSyxDQUFDRyxJQUFJO2tCQUNoQyxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFlTCxNQUFNLENBQUMsRUFBRSxPQUFxQkEsTUFBTTs7Y0FFakUsQ0FBQyxFQUFDLENBQUU7Y0FFSixNQUFNTSxJQUFJLEdBQUcsSUFBSVgsS0FBQSxDQUFBWSxVQUFVLENBQUNSLE1BQU0sRUFBRUMsTUFBTSxDQUFDO2NBQzNDQSxNQUFNLEVBQUVRLEtBQUssQ0FBQ0MsUUFBUSxDQUFDdkIsR0FBRyxDQUFDYSxNQUFNLENBQUM7Y0FFbEMsSUFBSSxDQUFDYixHQUFHLENBQUNhLE1BQU0sQ0FBQztjQUNoQixPQUFPTyxJQUFJO1lBQ1o7V0FDQSxDQUFDLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJHO1VBQVUsTUFDWEMsVUFBVTtZQUNOLENBQUFSLE1BQU87WUFDaEIsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFUyxDQUFBQyxNQUFPO1lBQ2hCLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRVMsQ0FBQVMsUUFBUyxHQUFzQixJQUFJWixHQUFHLEVBQUU7WUFDakQsSUFBSVksUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQXRDLFlBQVk0QixNQUFvQixFQUFFQyxNQUFxQjtjQUN0RCxJQUFJLENBQUMsQ0FBQUQsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBQyxNQUFPLEdBQUdBLE1BQU07WUFDdEI7O1VBQ0FQLE9BQUEsQ0FBQWMsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCTTtVQUNQLE1BQU1HLFNBQVMsR0FBQWpCLE9BQUEsQ0FBQWlCLFNBQUEsR0FBRyxJQUFLO1lBQ2IsQ0FBQUMsR0FBSSxHQUFzQixFQUFFO1lBQ3JDLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBRUFDLElBQUlBLENBQUNDLE9BQWUsRUFBRUMsS0FBMEI7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUgsR0FBSSxDQUFDQyxJQUFJLENBQUNHLElBQUksSUFBRztnQkFDNUIsSUFBSUEsSUFBSSxDQUFDRixPQUFPLEtBQUtBLE9BQU8sRUFBRSxPQUFPLEtBQUs7Z0JBQzFDLE1BQU1HLE1BQU0sR0FBRyxJQUFJL0IsR0FBRyxDQUFDOEIsSUFBSSxDQUFDckIsVUFBVSxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBR29CLEtBQUssQ0FBQyxDQUFDRyxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxFQUFFLENBQUMvQixJQUFJLEVBQUVDLEtBQUssQ0FBQyxLQUFLOEIsSUFBSSxJQUFJRixNQUFNLENBQUNHLEdBQUcsQ0FBQ2hDLElBQUksQ0FBQyxLQUFLQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2NBQzVGLENBQUMsQ0FBQztZQUNIO1dBQ0EsQ0FBQyxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCSixJQUFBZ0MsV0FBQSxHQUFBdkMsT0FBQTtVQUVBOzs7VUFHTSxNQUFPd0Msc0JBQXNCO1lBQ2xDLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFqQyxHQUFJLEdBQUdrQyxDQUFDcEMsSUFBWSxFQUFFQyxLQUFhLEtBQUk7Y0FDdEMsSUFBSSxDQUFDLENBQUFrQyxNQUFPLENBQUNFLFlBQVksQ0FBQ3JDLElBQUksRUFBRUMsS0FBSyxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxDQUFBRyxNQUFPLEdBQUlKLElBQVksSUFBSTtjQUMxQixJQUFJLENBQUMsQ0FBQW1DLE1BQU8sQ0FBQ0csZUFBZSxDQUFDdEMsSUFBSSxDQUFDO1lBQ25DLENBQUM7WUFFRHVDLFVBQVVBLENBQUNKLE1BQXVCO2NBQ2pDLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FFckJGLFdBQUEsQ0FBQTFCLFVBQVUsQ0FBQ1YsTUFBTSxDQUFDMkMsT0FBTyxDQUFDLENBQUN2QyxLQUFLLEVBQUVELElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQUUsR0FBSSxDQUFDRixJQUFJLEVBQUVDLEtBQUssQ0FBQyxDQUFDO2NBQ2xFZ0MsV0FBQSxDQUFBMUIsVUFBVSxDQUFDa0MsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQXZDLEdBQUksQ0FBQztjQUMvQitCLFdBQUEsQ0FBQTFCLFVBQVUsQ0FBQ2tDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFyQyxNQUFPLENBQUM7WUFDdEM7WUFFQXNDLE9BQU9BLENBQUE7Y0FDTlQsV0FBQSxDQUFBMUIsVUFBVSxDQUFDb0MsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQXpDLEdBQUksQ0FBQztjQUNoQytCLFdBQUEsQ0FBQTFCLFVBQVUsQ0FBQ29DLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUF2QyxNQUFPLENBQUM7WUFDdkM7O1VBQ0FFLE9BQUEsQ0FBQTRCLHNCQUFBLEdBQUFBLHNCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CYSxTQUFBVSxTQUFXQyxDQUFTO1lBQ2pDLElBQUlDLElBQUksR0FBRyxDQUFDO2NBQ1hDLENBQUM7Y0FDREMsQ0FBQztZQUNGLE1BQU1DLE1BQU0sR0FBR0osQ0FBQyxDQUFDSSxNQUFNO1lBRXZCLElBQUlBLE1BQU0sS0FBSyxDQUFDLEVBQUU7Y0FDakIsT0FBT0gsSUFBSTs7WUFFWixLQUFLQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdFLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7Y0FDNUJDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSyxVQUFVLENBQUNILENBQUMsQ0FBQztjQUNuQkQsSUFBSSxHQUFHLENBQUNBLElBQUksSUFBSSxDQUFDLElBQUlBLElBQUksR0FBR0UsQ0FBQztjQUM3QkYsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUksQ0FBQyxDQUFDOztZQUdyQixPQUFPQSxJQUFJLENBQUNLLFFBQVEsRUFBRSxDQUFDQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztVQUN6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQTNELEtBQUEsR0FBQUMsT0FBQTtVQVlPO1VBQVUsTUFDWDJELFNBQVUsU0FBUTVELEtBQUEsQ0FBQUcsTUFBTTtZQUNwQixDQUFBZ0IsTUFBTztZQUVoQixDQUFBMEMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQUMsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsT0FBUSxHQUFZLEtBQUs7WUFDekIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBQyxNQUFPLEdBQVksS0FBSztZQUN4QixJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLE9BQVEsR0FBRyxJQUFJakQsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTdDNkIsVUFBVUEsQ0FBQTtjQUNUO2NBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBM0IsTUFBTyxDQUFDZ0QsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEdBQUcsRUFBRTtjQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFILE9BQVEsQ0FBQ3pDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLElBQUk2QyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7Y0FDeEYsSUFBSSxDQUFDLENBQUFKLE9BQVEsQ0FBQ3RELE1BQU0sQ0FBQyxhQUFhLENBQUM7Y0FDbkMsSUFBSSxDQUFDLENBQUF3RCxNQUFPLEVBQUU7WUFDZjtZQUVBN0UsWUFBWTRCLE1BQW9CO2NBQy9CLEtBQUssRUFBRTtjQUNQLE1BQU07Z0JBQUVvRCxTQUFTO2dCQUFFSjtjQUFLLENBQUUsR0FBSSxJQUFJLENBQUMsQ0FBQWhELE1BQU8sR0FBR0EsTUFBTztjQUVwRDtjQUNBLElBQUksQ0FBQ2dELEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHLEVBQUU7Y0FFdkI3RSxPQUFPLENBQUMrRSxTQUFTLENBQUMsQ0FDaEI5RSxJQUFJLENBQUVvRSxNQUFXLElBQUk7Z0JBQ3JCLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Z0JBQ3JCLElBQUksQ0FBQyxDQUFBRyxPQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDLENBQUFDLE1BQU8sR0FBRyxJQUFJO2dCQUNuQixJQUFJLENBQUMsQ0FBQUMsT0FBUSxDQUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLENBQUF3RCxNQUFPLEVBQUU7Y0FDZixDQUFDLENBQUMsQ0FDREksS0FBSyxDQUFFQyxHQUFVLElBQUk7Z0JBQ3JCQyxPQUFPLENBQUNYLEtBQUssQ0FBQyx5QkFBeUJRLFNBQVMsR0FBRyxFQUFFRSxHQUFHLENBQUNFLEtBQUssQ0FBQztnQkFDL0QsSUFBSSxDQUFDLENBQUFaLEtBQU0sR0FBR1UsR0FBRyxDQUFDRyxPQUFPO2dCQUN6QixJQUFJLENBQUMsQ0FBQVosT0FBUSxHQUFHLEtBQUs7Y0FDdEIsQ0FBQyxDQUFDO1lBQ0o7WUFFQSxDQUFBSSxNQUFPLEdBQUdTLENBQUEsS0FBSztjQUNkO2NBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQVgsT0FBUSxDQUFDWSxJQUFJLEVBQUU7Y0FFeEIsTUFBTTtnQkFBRUM7Y0FBVSxDQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFsQixNQUFPO2NBQ25DLElBQUksQ0FBQ2tCLFVBQVUsSUFBSSxPQUFPQSxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUNwRCxNQUFNSCxPQUFPLEdBQUcsV0FBVyxJQUFJLENBQUMsQ0FBQXpELE1BQU8sQ0FBQzZELFNBQVMsa0NBQWtDO2dCQUNuRk4sT0FBTyxDQUFDWCxLQUFLLENBQUNhLE9BQU8sQ0FBQztnQkFDdEIsSUFBSSxDQUFDLENBQUFiLEtBQU0sR0FBR2EsT0FBTztnQkFDckI7O2NBR0QsSUFBSSxDQUFDLENBQUFkLFVBQVcsR0FBRyxJQUFJaUIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBNUQsTUFBTyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBMkMsVUFBVyxDQUNkaEIsVUFBVSxFQUFFLENBQ1pyRCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUNpQixPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUNsRDhELEtBQUssQ0FBRUMsR0FBVSxJQUFLQyxPQUFPLENBQUNPLEdBQUcsQ0FBQ1IsR0FBRyxZQUFZSCxLQUFLLEdBQUdHLEdBQUcsQ0FBQ0UsS0FBSyxHQUFHRixHQUFHLENBQUMsQ0FBQztZQUM3RSxDQUFDO1lBRURTLFVBQVVBLENBQUE7Y0FDVCxJQUFJLENBQUMsQ0FBQXBCLFVBQVcsRUFBRW9CLFVBQVUsR0FBRSxDQUFFO1lBQ2pDO1lBRUFDLGdCQUFnQkEsQ0FBQzVFLElBQVksRUFBRTZFLEdBQVcsRUFBRTVFLEtBQWE7Y0FDeEQsSUFBSSxDQUFDLENBQUFzRCxVQUFXLEVBQUVxQixnQkFBZ0IsQ0FBQzVFLElBQUksRUFBRTZFLEdBQUcsRUFBRTVFLEtBQUssQ0FBQztZQUNyRDs7VUFDQUssT0FBQSxDQUFBK0MsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BHRCxJQUFBeUIsVUFBQSxHQUFBcEYsT0FBQTtVQUVBLElBQUFxRixHQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQXNGLElBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBdUYsSUFBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUF1QyxXQUFBLEdBQUF2QyxPQUFBO1VBQ0EsSUFBQXdGLE9BQUEsR0FBQXhGLE9BQUE7VUFrQkE7VUFDQSxNQUFNeUYsT0FBTyxHQUFHLE9BQU9yRyxXQUFXLEtBQUssV0FBVyxHQUFHLElBQUksR0FBR0EsV0FBVztVQUVoRTtVQUFVLE1BQ1hzRyxZQUFhLFNBQVFELE9BQU87WUFDeEIsQ0FBQXZCLEtBQU07WUFDZixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUk1RCxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQTRELEtBQU0sQ0FBQzVELElBQUk7WUFDeEI7WUFFQSxJQUFJcUYsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUF6QixLQUFNLENBQUN5QixVQUFVO1lBQzlCO1lBRVMsQ0FBQXJCLFNBQVU7WUFDbkIsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxJQUFJL0MsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sR0FBR3FFLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHO1lBQzdCO1lBRUEsSUFBSUMsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUE1QixLQUFNLENBQUM0QixFQUFFO1lBQ3RCO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUE3QixLQUFNLENBQUM2QixLQUFLO1lBQ3pCO1lBRUEsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUE5QixLQUFNLENBQUM4QixNQUFNO1lBQzFCO1lBRUEsQ0FBQXZELE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVTLENBQUF3RCxFQUFHO1lBQ1osSUFBSUEsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDaEI7WUFFUyxDQUFBN0IsR0FBSTtZQUNiLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBRUEsSUFBSVAsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFPLEdBQUksQ0FBQ1AsVUFBVTtZQUM1QjtZQUVTLENBQUEvQixHQUFJO1lBQ2IsSUFBSUEsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFFUyxDQUFBakIsVUFBVztZQUVYLENBQUFxRixNQUFPO1lBQ2hCLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUE7WUFDQSxDQUFBdkUsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSXdFLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBeEUsS0FBTSxDQUFDUixNQUFNO1lBQzFCO1lBRUEsSUFBSWlGLFNBQVNBLENBQUE7Y0FDWixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXpFLEtBQU0sQ0FBQ0MsUUFBUSxDQUFDO1lBQ2pDO1lBRUE7OztZQUdBLENBQUF5RSxZQUFhLEdBQUdDLENBQUEsS0FBSztjQUNwQixNQUFNQyxLQUFLLEdBQUcsSUFBSUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFO2dCQUFFQyxPQUFPLEVBQUUsS0FBSztnQkFBRUMsUUFBUSxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBQzVGLElBQUksQ0FBQ0MsYUFBYSxDQUFDSixLQUFLLENBQUM7WUFDMUIsQ0FBQztZQUVEakgsWUFBWTRFLEtBQW1CO2NBQzlCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUs7Y0FFbkIsSUFBSSxDQUFDMEMsWUFBWSxDQUFDO2dCQUFFQyxJQUFJLEVBQUU7Y0FBTSxDQUFFLENBQUM7Y0FFbkM7Ozs7Y0FJQSxJQUFJLENBQUMsQ0FBQXZDLFNBQVUsR0FBRyxDQUFDLE1BQUs7Z0JBQ3ZCLE1BQU13QyxLQUFLLEdBQUc1QyxLQUFLLENBQUN5QixVQUFVLENBQUNtQixLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUN6QyxNQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHRixLQUFLLENBQUNHLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDL0QsTUFBTSxDQUFDM0csSUFBSSxDQUFDLEdBQUd3RyxLQUFLLENBQUNHLEtBQUssRUFBRSxDQUFDSCxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUV2QyxNQUFNSSxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDL0IsT0FBTyxDQUFDSixLQUFLLEdBQUcsR0FBR0EsS0FBSyxJQUFJekcsSUFBSSxFQUFFLEdBQUdBLElBQUksS0FBSzRHLE9BQU8sR0FBRyxJQUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Y0FDNUUsQ0FBQyxFQUFDLENBQUU7Y0FFSixJQUFJLENBQUMsQ0FBQXJHLFVBQVcsR0FBRyxJQUFJMEIsV0FBQSxDQUFBQyxzQkFBc0IsRUFBRTtjQUMvQyxJQUFJLENBQUMsQ0FBQXlELEVBQUcsR0FBRyxJQUFJWixHQUFBLENBQUErQixRQUFRLENBQUMsSUFBSSxDQUFDO2NBQzdCLElBQUksQ0FBQyxDQUFBdEYsR0FBSSxHQUFHLElBQUl5RCxJQUFBLENBQUE4QixTQUFTLENBQUMsSUFBSSxDQUFDO2NBQy9CLElBQUksQ0FBQyxDQUFBakQsR0FBSSxHQUFHLElBQUlrQixJQUFBLENBQUEzQixTQUFTLENBQUMsSUFBSSxDQUFDO2NBQy9CLElBQUksQ0FBQyxDQUFBUyxHQUFJLEVBQUVyQixFQUFFLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUFzRCxZQUFhLENBQUM7Y0FDM0QsSUFBSSxDQUFDLENBQUFILE1BQU8sR0FBRyxJQUFJVixPQUFBLENBQUE4QixhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3ZDO1lBRUE3SCxpQkFBaUJBLENBQUE7Y0FDaEI7Y0FDQSxJQUFJLENBQUMsQ0FBQWtDLEtBQU0sR0FBR3lELFVBQUEsQ0FBQXJFLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQztjQUV0QyxJQUFJLENBQUMsQ0FBQXdCLE1BQU8sR0FBR25CLFFBQVEsQ0FBQ2lHLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDN0MsSUFBSSxDQUFDLENBQUE5RSxNQUFPLENBQUMrRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO2NBQ25DLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUFsRixNQUFPLENBQUM7Y0FFcEMsSUFBSSxDQUFDLENBQUE1QixVQUFXLENBQUNnQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUFKLE1BQU8sQ0FBQztjQUV6QyxJQUFJLENBQUMsQ0FBQVgsR0FBSSxDQUFDZSxVQUFVLEVBQUUsQ0FBQzBCLEtBQUssQ0FBRUMsR0FBVSxJQUFLQyxPQUFPLENBQUNYLEtBQUssQ0FBQ1UsR0FBRyxDQUFDRSxLQUFLLENBQUMsQ0FBQztjQUN0RSxJQUFJLENBQUMsQ0FBQXVCLEVBQUcsQ0FBQ3BELFVBQVUsRUFBRSxDQUFDMEIsS0FBSyxDQUFFQyxHQUFVLElBQUtDLE9BQU8sQ0FBQ1gsS0FBSyxDQUFDVSxHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFDO2NBQ3JFLElBQUksQ0FBQyxDQUFBTixHQUFJLENBQUN2QixVQUFVLEVBQUU7WUFDdkI7WUFFQStFLG9CQUFvQkEsQ0FBQTtjQUNuQixJQUFJLENBQUMsQ0FBQXhELEdBQUksQ0FBQ2EsVUFBVSxFQUFFO1lBQ3ZCO1lBRUE0Qyx3QkFBd0JBLENBQUN2SCxJQUFZLEVBQUU2RSxHQUFXLEVBQUU1RSxLQUFhO2NBQ2hFLElBQUksQ0FBQyxDQUFBNkQsR0FBSSxDQUFDYyxnQkFBZ0IsQ0FBQzVFLElBQUksRUFBRTZFLEdBQUcsRUFBRTVFLEtBQUssQ0FBQztZQUM3Qzs7VUFDQUssT0FBQSxDQUFBOEUsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pKSyxNQUFPb0MsUUFBUTtZQUNYLENBQUE1RyxNQUFPO1lBRWhCNUIsWUFBWTRCLE1BQW9CO2NBQy9CLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQTtZQUNBLENBQUE2RyxFQUFHLEdBQUcsQ0FBQztZQUVQLE1BQU01RCxNQUFNQSxDQUFDOEIsRUFBbUI7Y0FDL0IsTUFBTThCLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBQSxFQUFHO2NBRXJCLE1BQU07Z0JBQUV6SCxJQUFJO2dCQUFFbUMsTUFBTTtnQkFBRXlEO2NBQU0sQ0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBaEYsTUFBTztjQUM3QyxJQUFJK0UsRUFBRSxDQUFDK0IsTUFBTSxFQUFFekUsTUFBTSxFQUFFO2dCQUN0QmtCLE9BQU8sQ0FBQ1gsS0FBSyxDQUFDLDBDQUEwQ3hELElBQUksSUFBSSxFQUFFMkYsRUFBRSxDQUFDK0IsTUFBTSxDQUFDO2dCQUM1RTs7Y0FHRDtjQUNBLElBQUl2RixNQUFNLENBQUNiLFFBQVEsQ0FBQzJCLE1BQU0sRUFBRTtjQUU1QixJQUFJLENBQUMwQyxFQUFFLENBQUNnQyxJQUFJLEVBQUUsT0FBTyxFQUFFO2NBRXZCLE1BQU0xRyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQUwsTUFBTyxDQUFDSyxJQUFJO2NBQ3BDa0IsTUFBTSxDQUFDeUYsU0FBUyxHQUFHLENBQUMsTUFBTWpDLEVBQUUsQ0FBQ2dDLElBQUksQ0FBQ3ZFLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNbkMsSUFBSSxDQUFDLEVBQUMsQ0FBRTtjQUUxRTtjQUNBLE1BQU00RyxLQUFLLEdBQWEsRUFBRTtjQUMxQixNQUFNQyxTQUFTLEdBQUczRixNQUFNLENBQUM0RixnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Y0FDakRELFNBQVMsQ0FBQ3RGLE9BQU8sQ0FBQ3JCLElBQUksSUFBSTBHLEtBQUssQ0FBQ0csSUFBSSxDQUFDN0csSUFBSSxDQUFDOEcsSUFBSSxDQUFDLENBQUM7Y0FFaERKLEtBQUssQ0FBQzVFLE1BQU0sS0FBSyxNQUFNMkMsTUFBTSxDQUFDckQsVUFBVSxDQUFDc0YsS0FBSyxDQUFDLENBQUM7Y0FFaERDLFNBQVMsQ0FBQ3RGLE9BQU8sQ0FDZnJCLElBQXFCLElBQUtBLElBQUksQ0FBQ3NELFNBQVMsS0FBSyxNQUFNLElBQUl0RCxJQUFJLENBQUMvQixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUV3RyxNQUFNLENBQUNzQyxRQUFRLENBQUMsQ0FDdEc7Y0FFRDtjQUNBLE1BQU10QyxNQUFNLEVBQUV1QyxLQUFLO2NBRW5CLElBQUksSUFBSSxDQUFDLENBQUFWLEVBQUcsS0FBS0EsRUFBRSxFQUFFO2NBRXJCO2NBQ0F0RixNQUFNLENBQUMrRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxFQUFFO1lBQzFCOztVQUNBN0csT0FBQSxDQUFBa0gsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pERCxJQUFBWSxTQUFBLEdBQUExSSxPQUFBO1VBQ0EsSUFBQTJJLFNBQUEsR0FBQTNJLE9BQUE7VUFFTSxNQUFPb0gsUUFBUTtZQUNYLENBQUFsRyxNQUFPO1lBQ1AsQ0FBQTBILFFBQVM7WUFFbEIsQ0FBQS9HLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBdkMsWUFBWTRCLE1BQW9CO2NBQy9CLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUEwSCxRQUFTLEdBQUcsSUFBSUQsU0FBQSxDQUFBYixRQUFRLENBQUM1RyxNQUFNLENBQUM7WUFDdEM7WUFFQSxDQUFBMkgsV0FBWSxHQUFHLEtBQUs7WUFFcEIsTUFBTWhHLFVBQVVBLENBQUE7Y0FDZixJQUFJLElBQUksQ0FBQyxDQUFBZ0csV0FBWSxFQUFFLE1BQU0sSUFBSXhFLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQztjQUN4RSxJQUFJLENBQUMsQ0FBQXdFLFdBQVksR0FBRyxJQUFJO2NBRXhCLE1BQU07Z0JBQUUzRTtjQUFLLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQWhELE1BQU87Y0FFOUI7Y0FDQSxJQUFJLENBQUNnRCxLQUFLLENBQUNDLE1BQU0sQ0FBQzhCLEVBQUUsRUFBRTtjQUV0QixNQUFNNkMsUUFBUSxHQUFHLENBQUMsTUFBSztnQkFDdEIsTUFBTTtrQkFBRUM7Z0JBQWEsQ0FBRSxHQUFHN0UsS0FBSyxDQUFDQyxNQUFNO2dCQUN0QyxJQUFJLENBQUM0RSxhQUFhLEVBQUUsT0FBTyxFQUFFO2dCQUU3QixJQUFJRCxRQUFRLEdBQUdFLFlBQVksQ0FBQ0MsaUJBQWlCO2dCQUM3Q0gsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0ksU0FBUyxDQUFDSixRQUFRO2dCQUNuREEsUUFBUSxHQUFHQSxRQUFRLENBQUNLLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEdBQUdMLFFBQVEsR0FBRztjQUN0QixDQUFDLEVBQUMsQ0FBRTtjQUVKLElBQUlNLFFBQVE7Y0FDWixJQUFJbEYsS0FBSyxDQUFDNEIsRUFBRSxLQUFLLE1BQU0sRUFBRTtnQkFDeEIsSUFBSXVELEdBQUcsR0FBRyxHQUFHUCxRQUFRLEdBQUc1RSxLQUFLLENBQUM1RCxJQUFJLEtBQUtzRixRQUFRLENBQUMwRCxRQUFRLEdBQUcxRCxRQUFRLENBQUMyRCxNQUFNLEVBQUU7Z0JBQzVFSCxRQUFRLEdBQUcsSUFBQVYsU0FBQSxDQUFBYyxPQUFRLEVBQUNILEdBQUcsQ0FBQztlQUN4QixNQUFNLElBQUluRixLQUFLLENBQUM0QixFQUFFLEtBQUssUUFBUSxFQUFFO2dCQUNqQ3NELFFBQVEsR0FBRyxJQUFBVixTQUFBLENBQUFjLE9BQVEsRUFBQyxHQUFHVixRQUFRLEdBQUc1RSxLQUFLLENBQUM1RCxJQUFJLEVBQUUsQ0FBQztlQUMvQyxNQUFNO2dCQUNOLE1BQU1tSixPQUFPLEdBQUcsSUFBSXJKLEdBQUcsRUFBRTtnQkFDekI4RCxLQUFLLENBQUNqQyxLQUFLLEVBQUVhLE9BQU8sQ0FBQzRHLElBQUksSUFBRztrQkFDM0IsTUFBTW5KLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQVcsTUFBTyxDQUFDckIsWUFBWSxDQUFDNkosSUFBSSxDQUFDO2tCQUM3Q25KLEtBQUssSUFBSWtKLE9BQU8sQ0FBQ2pKLEdBQUcsQ0FBQ2tKLElBQUksRUFBRW5KLEtBQUssQ0FBQztnQkFDbEMsQ0FBQyxDQUFDO2dCQUVGLElBQUk4SSxHQUFHLEdBQUdQLFFBQVE7Z0JBQ2xCLENBQUMsR0FBR1csT0FBTyxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBTUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDL0csT0FBTyxDQUFDLENBQUMsQ0FBQ2dILENBQUMsRUFBRUMsQ0FBQyxDQUFDLEtBQU1WLEdBQUcsSUFBSSxHQUFHUyxDQUFDLEtBQUtDLENBQUMsS0FBTSxDQUFDO2dCQUNoR1gsUUFBUSxHQUFHLElBQUFWLFNBQUEsQ0FBQWMsT0FBUSxFQUFDSCxHQUFHLENBQUM7O2NBR3pCLE1BQU05SCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQUwsTUFBTyxDQUFDSyxJQUFJO2NBQ3BDLE1BQU0zQixHQUFHLEdBQUcsR0FBRzJCLElBQUksa0JBQWtCMkMsS0FBSyxDQUFDNUQsSUFBSSxJQUFJOEksUUFBUSxLQUFLO2NBRWhFLElBQUk7Z0JBQ0gsTUFBTVksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ3JLLEdBQUcsQ0FBQztnQkFDakMsSUFBSW9LLFFBQVEsQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtrQkFDNUJ6RixPQUFPLENBQUNYLEtBQUssQ0FBQywwQ0FBMENJLEtBQUssQ0FBQzVELElBQUksbUJBQW1CMEosUUFBUSxDQUFDRSxNQUFNLEVBQUUsQ0FBQztrQkFDdkc7O2dCQUVELE1BQU1qRSxFQUFFLEdBQW9CLE1BQU0rRCxRQUFRLENBQUNHLElBQUksRUFBRTtnQkFFakQ7Z0JBQ0EsSUFBSSxDQUFDLENBQUF0SSxTQUFVLEdBQUdvRSxFQUFFO2dCQUVwQjtnQkFDQSxNQUFNLElBQUksQ0FBQyxDQUFBMkMsUUFBUyxDQUFDekUsTUFBTSxDQUFDOEIsRUFBRSxDQUFDO2VBQy9CLENBQUMsT0FBT3pCLEdBQUcsRUFBRTtnQkFDYkMsT0FBTyxDQUFDWCxLQUFLLENBQUMsb0NBQW9DLEVBQUVVLEdBQUcsQ0FBQ0csT0FBTyxDQUFDOztZQUVsRTs7VUFDQS9ELE9BQUEsQ0FBQXdHLFFBQUEsR0FBQUEsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RUQsSUFBQWdELFlBQUEsR0FBQXBLLE9BQUE7VUFDQSxJQUFBMkksU0FBQSxHQUFBM0ksT0FBQTtVQUlNLE1BQU9xSCxTQUFTO1lBQ1osQ0FBQW5HLE1BQU87WUFDUCxDQUFBMEgsUUFBUztZQUVsQixDQUFBL0csU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUF2QyxZQUFZNEIsTUFBb0I7Y0FDL0IsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQTBILFFBQVMsR0FBRyxJQUFJRCxTQUFBLENBQUFiLFFBQVEsQ0FBQzVHLE1BQU0sQ0FBQztZQUN0QztZQUVBLENBQUEySCxXQUFZLEdBQUcsS0FBSztZQUVwQjs7O1lBR0EsTUFBTWhHLFVBQVVBLENBQUE7Y0FDZjtjQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTNCLE1BQU8sQ0FBQ2dELEtBQUssQ0FBQ0MsTUFBTSxDQUFDckMsR0FBRyxFQUFFO2NBRXBDLElBQUksSUFBSSxDQUFDLENBQUErRyxXQUFZLEVBQUUsTUFBTSxJQUFJeEUsS0FBSyxDQUFDLGdDQUFnQyxDQUFDO2NBQ3hFLElBQUksQ0FBQyxDQUFBd0UsV0FBWSxHQUFHLElBQUk7Y0FFeEIsTUFBTTNILE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQUEsTUFBTztjQUMzQixNQUFNO2dCQUFFZ0Q7Y0FBSyxDQUFFLEdBQUdoRCxNQUFNO2NBQ3hCLE1BQU1lLEtBQUssR0FBRyxJQUFJN0IsR0FBRyxDQUFDOEQsS0FBSyxDQUFDakMsS0FBSyxHQUFHaUMsS0FBSyxDQUFDakMsS0FBSyxDQUFDb0ksR0FBRyxDQUFDWCxJQUFJLElBQUksQ0FBQ0EsSUFBSSxFQUFFeEksTUFBTSxDQUFDckIsWUFBWSxDQUFDNkosSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO2NBQ3hHLE1BQU1ZLEtBQUssR0FBR0YsWUFBQSxDQUFBdkksU0FBUyxDQUFDRSxJQUFJLENBQUNtQyxLQUFLLENBQUM1RCxJQUFJLEVBQUUyQixLQUFLLENBQUM7Y0FFL0M7Y0FDQSxJQUFJLENBQUNxSSxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxNQUFNLElBQUksQ0FBQyxDQUFBQyxJQUFLLEVBQUU7O2NBRTFCLElBQUksQ0FBQyxDQUFBMUksU0FBVSxHQUFHeUksS0FBSztjQUV2QjtjQUNBLE1BQU0sSUFBSSxDQUFDLENBQUExQixRQUFTLENBQUN6RSxNQUFNLENBQUNtRyxLQUFLLENBQUM7WUFDbkM7WUFFQSxNQUFNLENBQUFDLElBQUtDLENBQUE7Y0FDVixNQUFNO2dCQUFFbEcsU0FBUztnQkFBRWhFO2NBQUksQ0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBWSxNQUFPO2NBRXhDLE1BQU1LLElBQUksR0FBRyxNQUFNLENBQUMsWUFBVztnQkFDOUIsTUFBTXVGLEtBQUssR0FBR3hDLFNBQVMsQ0FBQ3dDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2xDLE1BQU0yRCxHQUFHLEdBQUczRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNFLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHRixLQUFLLENBQUNHLEtBQUssRUFBRSxJQUFJSCxLQUFLLENBQUNHLEtBQUssRUFBRSxFQUFFLEdBQUdILEtBQUssQ0FBQ0csS0FBSyxFQUFFO2dCQUMxRixNQUFNO2tCQUFFbkYsR0FBRyxFQUFFNEk7Z0JBQU0sQ0FBRSxHQUFHLENBQUMsTUFBTW5MLE9BQU8sQ0FBQyxHQUFHa0wsR0FBRyxTQUFTLENBQUMsRUFBRWpCLE9BQU87Z0JBQ2hFLElBQUksQ0FBQ2tCLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUNuSixJQUFJLEVBQUU7a0JBQzVCa0QsT0FBTyxDQUFDWCxLQUFLLENBQ1osWUFBWTJHLEdBQUcsZ0RBQWdELEdBQUcsZ0JBQWdCbkssSUFBSSxXQUFXLENBQ2pHO2tCQUNEOztnQkFHRCxPQUFPb0ssTUFBTSxDQUFDbkosSUFBSTtjQUNuQixDQUFDLEVBQUMsQ0FBRTtjQUNKLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBRVgsTUFBTXVILFFBQVEsR0FBRyxDQUFDLE1BQUs7Z0JBQ3RCLE1BQU07a0JBQUU1RTtnQkFBSyxDQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFoRCxNQUFPO2dCQUM5QixNQUFNO2tCQUFFNkg7Z0JBQWEsQ0FBRSxHQUFHN0UsS0FBSyxDQUFDQyxNQUFNO2dCQUN0QyxJQUFJLENBQUM0RSxhQUFhLEVBQUUsT0FBTyxFQUFFO2dCQUU3QixJQUFJRCxRQUFRLEdBQUdFLFlBQVksQ0FBQ0MsaUJBQWlCO2dCQUM3Q0gsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBR0ksU0FBUyxDQUFDSixRQUFRO2dCQUNuREEsUUFBUSxHQUFHQSxRQUFRLENBQUNLLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLGFBQWFMLFFBQVEsRUFBRTtjQUMvQixDQUFDLEVBQUMsQ0FBRTtjQUVKLElBQUk3RyxLQUFLLEdBQUcsQ0FBQyxNQUFLO2dCQUNqQixNQUFNO2tCQUFFaUM7Z0JBQUssQ0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBaEQsTUFBTztnQkFDOUIsSUFBSSxDQUFDZ0QsS0FBSyxDQUFDakMsS0FBSyxFQUFFc0IsTUFBTSxFQUFFLE9BQU8sRUFBRTtnQkFFbkMsSUFBSXRCLEtBQUssR0FBRyxTQUFTLEdBQUdpQyxLQUFLLENBQUNqQyxLQUFLLENBQUNrRixJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUM3Q2pELEtBQUssQ0FBQ2pDLEtBQUssQ0FBQ2EsT0FBTyxDQUFDNEcsSUFBSSxJQUFHO2tCQUMxQixNQUFNbkosS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBVyxNQUFPLENBQUNyQixZQUFZLENBQUM2SixJQUFJLENBQUM7a0JBQzdDLElBQUksQ0FBQ25KLEtBQUssRUFBRTtrQkFDWjBCLEtBQUssSUFBSSxTQUFTeUgsSUFBSSxJQUFJbkosS0FBSyxFQUFFO2dCQUNsQyxDQUFDLENBQUM7Y0FDSCxDQUFDLEVBQUMsQ0FBRTtjQUVKLE1BQU1YLEdBQUcsR0FBRyxHQUFHMkIsSUFBSSxnQkFBZ0JqQixJQUFJLEdBQUd3SSxRQUFRLEdBQUc3RyxLQUFLLEVBQUU7Y0FFNUQsSUFBSTtnQkFDSCxNQUFNK0gsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ3JLLEdBQUcsQ0FBQztnQkFDakMsSUFBSW9LLFFBQVEsQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtrQkFDNUJ6RixPQUFPLENBQUNYLEtBQUssQ0FBQyxpQ0FBaUN4RCxJQUFJLG1CQUFtQjBKLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFLENBQUM7a0JBQ3hGOztnQkFFRCxNQUFNakUsRUFBRSxHQUFvQixNQUFNK0QsUUFBUSxDQUFDRyxJQUFJLEVBQUU7Z0JBRWpEO2dCQUNBLElBQUksQ0FBQyxDQUFBdEksU0FBVSxHQUFHb0UsRUFBRTtnQkFFcEI7Z0JBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQTJDLFFBQVMsQ0FBQ3pFLE1BQU0sQ0FBQzhCLEVBQUUsQ0FBQztlQUMvQixDQUFDLE9BQU96QixHQUFHLEVBQUU7Z0JBQ2JDLE9BQU8sQ0FBQ1gsS0FBSyxDQUFDVSxHQUFHLENBQUNFLEtBQUssQ0FBQzs7WUFFMUI7O1VBQ0E5RCxPQUFBLENBQUF5RyxTQUFBLEdBQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUdELElBQUF0SCxLQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLE1BQ1gySyxTQUFVLFNBQVE1SyxLQUFBLENBQUFHLE1BQU07WUFDcEIsQ0FBQWdCLE1BQU87WUFDaEIsQ0FBQTBKLE9BQVEsR0FBRyxDQUFDO1lBRVp0TCxZQUFZNEIsTUFBb0I7Y0FDL0IsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUVyQixNQUFNO2dCQUFFSztjQUFJLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQUwsTUFBTztjQUM3QixNQUFNMEosT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBQSxPQUFRLEtBQUssQ0FBQyxHQUFHLFlBQVksSUFBSSxDQUFDLENBQUFBLE9BQVEsRUFBRSxHQUFHLEVBQUU7Y0FDdEUsSUFBSSxDQUFDLENBQUFDLElBQUssR0FBRyxHQUFHdEosSUFBSSxhQUFhcUosT0FBTyxFQUFFO1lBQzNDO1lBRVMsQ0FBQUMsSUFBSztZQUNkLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUFDLE1BQU1BLENBQUE7Y0FDTCxJQUFJLENBQUMsQ0FBQUYsT0FBUSxFQUFFO2NBQ2YsSUFBSSxDQUFDbkssT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2Qjs7VUFDQUcsT0FBQSxDQUFBK0osU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCRCxJQUFBNUssS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQStLLEtBQUEsR0FBQS9LLE9BQUE7VUFDQSxJQUFBZ0wsT0FBQSxHQUFBaEwsT0FBQTtVQUVPO1VBQVUsTUFDWHNILGFBQWE7WUFDVCxDQUFBMkQsTUFBTyxHQUFXLElBQUlsTCxLQUFBLENBQUFHLE1BQU0sRUFBRTtZQUN2QzZDLEVBQUUsR0FBR0EsQ0FBQ3dELEtBQWEsRUFBRTJFLFFBQW9CLEtBQUssSUFBSSxDQUFDLENBQUFELE1BQU8sQ0FBQ2xJLEVBQUUsQ0FBQ3dELEtBQUssRUFBRTJFLFFBQVEsQ0FBQztZQUM5RWpJLEdBQUcsR0FBR0EsQ0FBQ3NELEtBQWEsRUFBRTJFLFFBQW9CLEtBQUssSUFBSSxDQUFDLENBQUFELE1BQU8sQ0FBQ2hJLEdBQUcsQ0FBQ3NELEtBQUssRUFBRTJFLFFBQVEsQ0FBQztZQUV2RSxDQUFBbEgsTUFBTyxHQUF5QixJQUFJNUQsR0FBRyxFQUFFO1lBQ3pDLENBQUErSyxTQUFVO1lBRW5CLENBQUFQLE9BQVEsR0FBRyxDQUFDO1lBQ1osSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBUSxPQUFRQyxDQUFBO2NBQ1AsSUFBSSxDQUFDLENBQUFULE9BQVEsRUFBRTtjQUNmLElBQUksQ0FBQyxDQUFBVSxRQUFTLElBQUksSUFBSSxDQUFDLENBQUFMLE1BQU8sQ0FBQ3hLLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDakQ7WUFFQSxJQUFJMkgsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSXBILEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFnRCxNQUFPLENBQUN1SCxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDO1lBRUEsSUFBSXZILE1BQU1BLENBQUE7Y0FDVCxJQUFJLENBQUMsQ0FBQXdILEtBQU0sRUFBRTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFGLFFBQVM7WUFDdEI7WUFFUyxDQUFBRyxPQUFRO1lBQ2pCLENBQUFILFFBQVMsR0FBRyxLQUFLO1lBQ2pCLENBQUFJLE9BQVE7WUFFUixJQUFJakQsS0FBS0EsQ0FBQTtjQUNSLElBQUksQ0FBQyxDQUFBK0MsS0FBTSxFQUFFO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUMsT0FBUTtZQUNyQjtZQUVBakQsUUFBUSxHQUFJakMsS0FBcUIsSUFBYTtjQUM3QyxNQUFNZ0MsSUFBSSxHQUFHLE9BQU9oQyxLQUFLLEtBQUssUUFBUSxHQUFHQSxLQUFLLEdBQXFCQSxLQUFLLENBQUNvRixhQUFjLENBQUM5TCxZQUFZLENBQUMsTUFBTSxDQUFDO2NBQzVHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQW1FLE1BQU8sQ0FBQ3hDLEdBQUcsQ0FBQytHLElBQUksQ0FBQyxFQUFFO2dCQUM1QjlELE9BQU8sQ0FBQ21ILElBQUksQ0FBQyxvQkFBb0JyRCxJQUFJLGtCQUFrQixDQUFDO2dCQUN4RDs7Y0FHRCxJQUFJLENBQUMsQ0FBQXZFLE1BQU8sQ0FBQ3hELEdBQUcsQ0FBQytILElBQUksRUFBRSxJQUFJLENBQUM7Y0FDNUIsSUFBSSxDQUFDLENBQUFpRCxLQUFNLEVBQUU7Y0FDYixNQUFNSixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUFTLEtBQU0sRUFBRTtjQUM3QlQsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFBQSxPQUFRLEVBQUU7Y0FFMUIsT0FBTyxJQUFJO1lBQ1osQ0FBQztZQUVELENBQUFJLEtBQU1NLENBQUE7Y0FDTCxJQUFJLElBQUksQ0FBQyxDQUFBUixRQUFTLEVBQUUsT0FBTyxJQUFJO2NBRS9CO2NBQ0EsTUFBTXRILE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFBLE1BQU8sQ0FBQzdELE1BQU0sRUFBRSxDQUFDLENBQUNpQyxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxFQUFFMkIsTUFBTSxLQUFLM0IsSUFBSSxJQUFJMkIsTUFBTSxFQUFFLElBQUksQ0FBQztjQUN4RkEsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFBMEgsT0FBUSxFQUFFO2NBRXpCLE9BQVEsSUFBSSxDQUFDLENBQUFKLFFBQVMsR0FBR3RILE1BQU07WUFDaEM7WUFFQTs7OztZQUlBLENBQUE2SCxLQUFNRSxDQUFBO2NBQ0wsTUFBTUMsUUFBUSxHQUlWO2dCQUFFQyxJQUFJLEVBQUUsSUFBSTdMLEdBQUcsRUFBRTtnQkFBRUQsTUFBTSxFQUFFLElBQUlDLEdBQUcsRUFBRTtnQkFBRThMLFVBQVUsRUFBRSxJQUFJOUwsR0FBRztjQUFFLENBQUU7Y0FFakUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBNEQsTUFBTyxDQUFDdUgsSUFBSSxFQUFFLENBQUMsQ0FBQ3pJLE9BQU8sQ0FBQ3lGLElBQUksSUFBRztnQkFDdkMsTUFBTXNDLElBQUksR0FBRyxJQUFJRSxLQUFBLENBQUF2QixPQUFJLENBQUNqQixJQUFJLENBQUM7Z0JBQzNCLE1BQU00RCxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDM0osR0FBRyxDQUFDdUksSUFBSSxDQUFDekIsUUFBUSxDQUFDO2dCQUNqRCxNQUFNNkMsSUFBSSxHQUFHRSxRQUFRLElBQUlBLFFBQVEsR0FBR3RCLElBQUksQ0FBQ0QsT0FBTyxHQUFHdUIsUUFBUSxHQUFHdEIsSUFBSSxDQUFDRCxPQUFPO2dCQUMxRW9CLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDekwsR0FBRyxDQUFDcUssSUFBSSxDQUFDekIsUUFBUSxFQUFFNkMsSUFBSSxDQUFDO2dCQUV0QyxJQUFJLElBQUksQ0FBQyxDQUFBakksTUFBTyxDQUFDMUIsR0FBRyxDQUFDdUksSUFBSSxDQUFDdEMsSUFBSSxDQUFDLEVBQUU7a0JBQ2hDLE1BQU02RCxjQUFjLEdBQUdKLFFBQVEsQ0FBQ0UsVUFBVSxDQUFDNUosR0FBRyxDQUFDdUksSUFBSSxDQUFDekIsUUFBUSxDQUFDO2tCQUM3RCxNQUFNOEMsVUFBVSxHQUFHRSxjQUFjLElBQUlBLGNBQWMsR0FBR3ZCLElBQUksQ0FBQ0QsT0FBTyxHQUFHd0IsY0FBYyxHQUFHdkIsSUFBSSxDQUFDRCxPQUFPO2tCQUNsR29CLFFBQVEsQ0FBQ0UsVUFBVSxDQUFDMUwsR0FBRyxDQUFDcUssSUFBSSxDQUFDekIsUUFBUSxFQUFFOEMsVUFBVSxDQUFDOztnQkFHbkQsTUFBTS9MLE1BQU0sR0FBZ0I2TCxRQUFRLENBQUM3TCxNQUFNLENBQUNxQixHQUFHLENBQUNxSixJQUFJLENBQUN6QixRQUFRLENBQUMsR0FDM0Q0QyxRQUFRLENBQUM3TCxNQUFNLENBQUNtQyxHQUFHLENBQUN1SSxJQUFJLENBQUN6QixRQUFRLENBQUMsR0FDbEMsSUFBSXBJLEdBQUcsRUFBRTtnQkFDWmIsTUFBTSxDQUFDRSxHQUFHLENBQUN3SyxJQUFJLENBQUNELE9BQU8sQ0FBQztnQkFDeEJvQixRQUFRLENBQUM3TCxNQUFNLENBQUNLLEdBQUcsQ0FBQ3FLLElBQUksQ0FBQ3pCLFFBQVEsRUFBRWpKLE1BQU0sQ0FBQztjQUMzQyxDQUFDLENBQUM7Y0FFRjtjQUNBLE1BQU0wTCxLQUFLLEdBQVcsRUFBRTtjQUN4QixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE3SCxNQUFPLENBQUN1SCxJQUFJLEVBQUUsQ0FBQyxDQUFDekksT0FBTyxDQUFDeUYsSUFBSSxJQUFHO2dCQUN2QyxNQUFNc0MsSUFBSSxHQUFHLElBQUlFLEtBQUEsQ0FBQXZCLE9BQUksQ0FBQ2pCLElBQUksQ0FBQztnQkFDM0IsTUFBTTJELFVBQVUsR0FBR0YsUUFBUSxDQUFDRSxVQUFVLENBQUM1SixHQUFHLENBQUN1SSxJQUFJLENBQUN6QixRQUFRLENBQUM7Z0JBQ3pEeUIsSUFBSSxDQUFDRCxPQUFPLEdBQUdzQixVQUFVLElBQUlMLEtBQUssQ0FBQ3ZELElBQUksQ0FBQ3VDLElBQUksQ0FBQztjQUM5QyxDQUFDLENBQUM7Y0FFRmdCLEtBQUssQ0FBQy9JLE9BQU8sQ0FBQytILElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQTdHLE1BQU8sQ0FBQ3JELE1BQU0sQ0FBQ2tLLElBQUksQ0FBQ3RDLElBQUksQ0FBQyxDQUFDO2NBQ3JELE9BQU8sQ0FBQyxDQUFDc0QsS0FBSyxDQUFDdEksTUFBTTtZQUN0QjtZQUVBOzs7Ozs7WUFNQSxDQUFBMEksSUFBSztZQUNMLENBQUFJLE9BQVEsR0FBR0MsQ0FBQSxLQUFLO2NBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBTCxJQUFLLEVBQUU7Y0FDakIsTUFBTWIsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBTixNQUFPLENBQUMsSUFBSSxDQUFDLENBQUFtQixJQUFLLENBQUM7Y0FDeENiLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQUEsT0FBUSxFQUFFO1lBQzNCLENBQUM7WUFFRCxDQUFBTixNQUFPeUIsQ0FBQ0MsTUFBaUI7Y0FDeEIsSUFBSSxDQUFDLENBQUFQLElBQUssR0FBR08sTUFBTTtjQUVuQkEsTUFBTSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUF0QixTQUFVLENBQUNOLElBQUksQ0FBQztjQUNwQyxNQUFNMUMsS0FBSyxHQUFXcUUsTUFBTSxDQUFDbkMsR0FBRyxDQUFDUSxJQUFJLElBQUksSUFBSUUsS0FBQSxDQUFBdkIsT0FBSSxDQUFDcUIsSUFBSSxDQUFDLENBQUM7Y0FFeEQ7Y0FDQSxJQUFJTyxPQUFPLEdBQUcsS0FBSztjQUNuQmpELEtBQUssQ0FBQ3JGLE9BQU8sQ0FBQytILElBQUksSUFBRztnQkFDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQTdHLE1BQU8sQ0FBQ3hDLEdBQUcsQ0FBQ3FKLElBQUksQ0FBQ3RDLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsQ0FBQXZFLE1BQU8sQ0FBQ3hELEdBQUcsQ0FBQ3FLLElBQUksQ0FBQ3RDLElBQUksRUFBRSxLQUFLLENBQUM7Z0JBQ2xDNkMsT0FBTyxHQUFHLElBQUk7Y0FDZixDQUFDLENBQUM7Y0FDRixPQUFPQSxPQUFPO1lBQ2Y7WUFFQU4sTUFBTUEsQ0FBQzNDLEtBQWU7Y0FDckIsTUFBTWlELE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQU4sTUFBTyxDQUFDM0MsS0FBSyxDQUFDO2NBQ25DaUQsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFBQSxPQUFRLEVBQUU7WUFDM0I7WUFFQTlMLFlBQVk0QixNQUFvQjtjQUMvQixJQUFJLENBQUMsQ0FBQWlLLFNBQVUsR0FBRyxJQUFJSCxPQUFBLENBQUFMLFNBQVMsQ0FBQ3pKLE1BQU0sQ0FBQztjQUN2QyxJQUFJLENBQUMsQ0FBQXVLLE9BQVEsR0FBRyxJQUFJaUIsT0FBTyxDQUFDaEIsT0FBTyxJQUFLLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUdBLE9BQVEsQ0FBQztZQUNsRTtZQUVBLENBQUE3QyxXQUFZLEdBQUcsS0FBSztZQUNwQixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLE1BQU1oRyxVQUFVQSxDQUFDc0YsS0FBZTtjQUMvQixJQUFJLElBQUksQ0FBQyxDQUFBVSxXQUFZLEVBQUUsTUFBTSxJQUFJeEUsS0FBSyxDQUFDLG1DQUFtQyxDQUFDO2NBQzNFLElBQUksQ0FBQyxDQUFBd0UsV0FBWSxHQUFHLElBQUk7Y0FFeEIsSUFBSSxDQUFDLENBQUFpQyxNQUFPLENBQUMzQyxLQUFLLENBQUM7Y0FDbkIsSUFBSSxDQUFDLENBQUFnRCxTQUFVLENBQUNwSSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBc0osT0FBUSxDQUFDO1lBQzVDO1lBRUFySixPQUFPQSxDQUFBO2NBQ04sSUFBSSxDQUFDLENBQUFtSSxTQUFVLENBQUNsSSxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBb0osT0FBUSxDQUFDO1lBQzdDOztVQUNBekwsT0FBQSxDQUFBMEcsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BLYSxNQUFBcEUsUUFBQTtZQUNKLENBQUFxRixJQUFLO1lBQ2QsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFUyxDQUFBYSxRQUFTO1lBQ2xCLElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRVMsQ0FBQXdCLE9BQVE7WUFDakIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQXRMLFlBQVlpSixJQUFZO2NBQ3ZCLElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdBLElBQUk7Y0FFakIsTUFBTW9FLEVBQUUsR0FBR3BFLElBQUksQ0FBQ3pCLEtBQUssQ0FBQyxXQUFXLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFzQyxRQUFTLEdBQUd1RCxFQUFFLENBQUMsQ0FBQyxDQUFDO2NBQ3RCLElBQUksQ0FBQyxDQUFBL0IsT0FBUSxHQUFHK0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDNUM7O1VBQ0EvTCxPQUFBLENBQUE0SSxPQUFBLEdBQUF0RyxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRCxJQUFBMkosT0FBQSxHQUFBN00sT0FBQTtVQUNBLElBQUFvRixVQUFBLEdBQUFwRixPQUFBO1VBQ0EsSUFBQXVDLFdBQUEsR0FBQXZDLE9BQUE7VUFDQUEsT0FBQTtVQUlBLE1BQU04TSxhQUFjLFNBQVExTSxHQUF5QjtZQUNwRCxDQUFBMEIsR0FBSSxHQUFHLElBQUk7WUFDWCxJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUVBeEMsWUFBQTtjQUNDLEtBQUssRUFBRTtZQUNSO1lBRUF5TixLQUFLQSxDQUFDckMsTUFBeUI7Y0FDOUIsSUFBSSxDQUFDLENBQUE1SSxHQUFJLEdBQUcsT0FBTzRJLE1BQU0sRUFBRTVJLEdBQUcsS0FBSyxTQUFTLEdBQUc0SSxNQUFNLENBQUM1SSxHQUFHLEdBQUcsSUFBSTtZQUNqRTtZQUVBLElBQUlmLFNBQVNBLENBQUE7Y0FDWixPQUFPcUUsVUFBQSxDQUFBckUsU0FBUztZQUNqQjtZQUVBLElBQUlGLFVBQVVBLENBQUE7Y0FDYixPQUFPMEIsV0FBQSxDQUFBMUIsVUFBVTtZQUNsQjtZQUVBSSxRQUFRQSxDQUFDaUQsS0FBcUI7Y0FDN0JBLEtBQUssQ0FBQ3BCLE9BQU8sQ0FBQ29CLEtBQUssSUFBRztnQkFDckI7Z0JBQ0EsSUFBSSxJQUFJLENBQUMxQyxHQUFHLENBQUMwQyxLQUFLLENBQUM1RCxJQUFJLENBQUMsRUFBRTtnQkFFMUI0RCxLQUFLLENBQUNDLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTSxHQUFHO2tCQUFFQyxHQUFHLEVBQUUsSUFBSTtrQkFBRXRDLEdBQUcsRUFBRSxLQUFLO2tCQUFFbUUsRUFBRSxFQUFFO2dCQUFLLENBQUU7Z0JBQ2pGLE1BQU07a0JBQUUzRixJQUFJO2tCQUFFNkQ7Z0JBQU0sQ0FBRSxHQUFHRCxLQUFLO2dCQUM5QkMsTUFBTSxDQUFDQyxHQUFHLEdBQUcsT0FBT0QsTUFBTSxDQUFDQyxHQUFHLEtBQUssU0FBUyxHQUFHRCxNQUFNLENBQUNDLEdBQUcsR0FBRyxJQUFJO2dCQUVoRSxJQUFJLENBQUM1RCxHQUFHLENBQUNGLElBQUksRUFBRTRELEtBQUssQ0FBQztnQkFFckI7Z0JBQ0EsSUFBSSxPQUFPakYsT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFFakNDLGNBQWMsQ0FBQ0MsTUFBTSxDQUNwQm1CLElBQUksRUFDSixjQUFjdU0sT0FBQSxDQUFBbkgsWUFBWTtrQkFDekIsV0FBV3NILGtCQUFrQkEsQ0FBQTtvQkFDNUIsT0FBTzlJLEtBQUssQ0FBQ2pDLEtBQUssR0FBR2lDLEtBQUssQ0FBQ2pDLEtBQUssR0FBRyxFQUFFO2tCQUN0QztrQkFFQTNDLFlBQUE7b0JBQ0MsS0FBSyxDQUFDNEUsS0FBSyxDQUFDO2tCQUNiO2lCQUNBLENBQ0Q7Y0FDRixDQUFDLENBQUM7WUFDSDs7VUFHTTtVQUFXLE1BQU0rSSxPQUFPLEdBQUFyTSxPQUFBLENBQUFxTSxPQUFBLEdBQWtCLElBQUlILGFBQWEsRUFBRSIsImlnbm9yZUxpc3QiOltdfQ==