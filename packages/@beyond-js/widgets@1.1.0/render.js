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
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/widgets", "1.1.0"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcm9jZXNzIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsInJvdXRpbmciLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzQXR0cmlidXRlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicHVzaFN0YXRlIiwiX2NvcmUiLCJyZXF1aXJlIiwiQXR0cmlidXRlcyIsIkV2ZW50cyIsInZhbHVlcyIsIk1hcCIsImFkZCIsIm5hbWUiLCJ2YWx1ZSIsInNldCIsInRyaWdnZXIiLCJyZW1vdmUiLCJkZWxldGUiLCJleHBvcnRzIiwiYXR0cmlidXRlcyIsIl9ub2RlIiwiaW5zdGFuY2VzIiwiU2V0IiwicmVnaXN0ZXIiLCJ3aWRnZXQiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJoYXMiLCJub2RlIiwiTm9kZVdpZGdldCIsIndub2RlIiwiY2hpbGRyZW4iLCJwcmVyZW5kZXIiLCJzc3IiLCJmaW5kIiwiZWxlbWVudCIsImF0dHJzIiwiaXRlbSIsImlhdHRycyIsInJlZHVjZSIsInByZXYiLCJnZXQiLCJfYXR0cmlidXRlcyIsIldpZGdldEdsb2JhbEF0dHJpYnV0ZXMiLCJob2xkZXIiLCIjc2V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdGlhbGlzZSIsImZvckVhY2giLCJvbiIsImRlc3Ryb3kiLCJvZmYiLCJfZGVmYXVsdCIsInMiLCJoYXNoIiwiaSIsImMiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiV2lkZ2V0Q1NSIiwiYnVuZGxlIiwiY29udHJvbGxlciIsImVycm9yIiwibG9hZGluZyIsImxvYWRlZCIsImhvbGRlcnMiLCJzcGVjcyIsInJlbmRlciIsImNzciIsIkVycm9yIiwic3BlY2lmaWVyIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwic3RhY2siLCJtZXNzYWdlIiwiI3JlbmRlciIsInNpemUiLCJDb250cm9sbGVyIiwibG9jYWxOYW1lIiwibG9nIiwiZGlzY29ubmVjdCIsImF0dHJpYnV0ZUNoYW5nZWQiLCJvbGQiLCJfaW5zdGFuY2VzIiwiX3NyIiwiX2NzciIsIl9zc3IiLCJfc3R5bGVzIiwiRWxlbWVudCIsIkJleW9uZFdpZGdldCIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJvbmNvbnRyb2xsZXIiLCIjb25jb250cm9sbGVyIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjb21wb3NlZCIsImRpc3BhdGNoRXZlbnQiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJqb2luIiwiV2lkZ2V0U1IiLCJXaWRnZXRTU1IiLCJTdHlsZXNNYW5hZ2VyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInNoYWRvd1Jvb3QiLCJhcHBlbmQiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIlJlbmRlcmVyIiwiY3QiLCJlcnJvcnMiLCJodG1sIiwiaW5uZXJIVE1MIiwibGlua3MiLCJyZXNvdXJjZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHVzaCIsImhyZWYiLCJvbmxvYWRlZCIsInJlYWR5IiwiX2NoZWNrc3VtIiwiX3JlbmRlcmVyIiwicmVuZGVyZXIiLCJpbml0aWFsaXNlZCIsImxhbmd1YWdlIiwibXVsdGlsYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsIl9fYmV5b25kX2xhbmd1YWdlIiwibmF2aWdhdG9yIiwic2xpY2UiLCJyZXNvdXJjZSIsImtleSIsInBhdGhuYW1lIiwic2VhcmNoIiwiZGVmYXVsdCIsImNvbXB1dGUiLCJhdHRyIiwic29ydCIsImEiLCJiIiwiayIsInYiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsIl9wcmVyZW5kZXJlZCIsIm1hcCIsImZvdW5kIiwibG9hZCIsIiNsb2FkIiwicGtnIiwiY29uZmlnIiwiR2xvYmFsQ1NTIiwidmVyc2lvbiIsImxpbmsiLCJ1cGRhdGUiLCJfbGluayIsIl9nbG9iYWwiLCJldmVudHMiLCJsaXN0ZW5lciIsImdsb2JhbGNzcyIsImNoYW5nZWQiLCIjY2hhbmdlZCIsInJlc29sdmVkIiwia2V5cyIsImNoZWNrIiwicHJvbWlzZSIsInJlc29sdmUiLCJjdXJyZW50VGFyZ2V0Iiwid2FybiIsInB1cmdlIiwiI2NoZWNrIiwiI3B1cmdlIiwidmVyc2lvbnMiLCJsYXN0IiwibGFzdExvYWRlZCIsInByZXZMYXN0IiwicHJldkxhc3RMb2FkZWQiLCJyZWZyZXNoIiwiI3JlZnJlc2giLCIjdXBkYXRlIiwiX2xpbmtzIiwidW5zaGlmdCIsIlByb21pc2UiLCJpdiIsInBhcnNlSW50IiwiX3dpZGdldCIsIkJleW9uZFdpZGdldHMiLCJzZXR1cCIsIm9ic2VydmVkQXR0cmlidXRlcyIsIndpZGdldHMiXSwic291cmNlcyI6WyIvYW5jaG9yLnRzIiwiL2F0dHJpYnV0ZXMudHMiLCIvaW5zdGFuY2VzL2luZGV4LnRzIiwiL2luc3RhbmNlcy9ub2RlLnRzIiwiL3ByZXJlbmRlcmVkL2luZGV4LnRzIiwiL3dpZGdldC9hdHRyaWJ1dGVzLnRzIiwiL3dpZGdldC9jaGVja3N1bS50cyIsIi93aWRnZXQvY3NyLnRzIiwiL3dpZGdldC9pbmRleC50cyIsIi93aWRnZXQvcmVuZGVyZXIudHMiLCIvd2lkZ2V0L3NyLnRzIiwiL3dpZGdldC9zc3IudHMiLCIvd2lkZ2V0L3N0eWxlcy9nbG9iYWwudHMiLCIvd2lkZ2V0L3N0eWxlcy9pbmRleC50cyIsIi93aWRnZXQvc3R5bGVzL2xpbmsudHMiLCIvd2lkZ2V0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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