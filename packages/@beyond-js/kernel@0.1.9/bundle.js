System.register([], function (_export, _context) {
  "use strict";

  var __pkg, ims, bimport, brequire, IBundleSpecs, Bundle, Events, ListenerFunction, instances, Module, IExportsDescriptor, IMSpecs, IMCreators, Package, __bp;
  _export({
    bimport: void 0,
    brequire: void 0,
    IBundleSpecs: void 0,
    Bundle: void 0,
    Events: void 0,
    ListenerFunction: void 0,
    instances: void 0,
    Module: void 0,
    IExportsDescriptor: void 0,
    IMSpecs: void 0,
    IMCreators: void 0,
    Package: void 0
  });
  return {
    setters: [],
    execute: function () {
      __pkg = {
        exports: {}
      };
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./base/index
      ****************************/
      ims.set('./base/index', {
        hash: 1936310117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondPackage = void 0;
          exports.resolve = resolve;
          function resolve(source, id) {
            if (!id.startsWith('.')) throw new Error(`Module id must be a relative resource "${id}"`);
            const split = {};
            split.source = source.split('/');
            split.source.pop();
            split.target = (id.startsWith('./') ? id.slice(2) : id).split('../');
            while (split.target[0] === '' && split.target.length > 1) {
              split.target.shift();
              split.source.pop();
            }
            return split.source.join('/') + '/' + split.target.join('/');
          }
          /**
           * This class is used only by beyond/core
           */
          class BeyondPackage {
            #ims;
            #cached = new Map();
            #exports;
            constructor(exports) {
              this.#exports = exports;
            }
            initialise(ims) {
              this.#ims = ims;
              this.#exports.process((id, source) => this.require(id, source), {});
            }
            /**
             * Solve the require function
             *
             * @param source {string} The module from where the require is being triggered
             * @param id {string} The module id being requested
             * @returns {*}
             */
            require(id, source) {
              id = source ? resolve(source, id) : id;
              const module = (() => {
                if (this.#ims.has(id)) return id;
                return id.endsWith('/') ? `${id}index` : `${id}/index`;
              })();
              if (this.#cached.has(module)) return this.#cached.get(module);
              if (!this.#ims.has(module)) throw new Error(`Internal module "${id}" not found`);
              const fn = this.#ims.get(module).creator;
              const require = required => this.require(required, module); // Here the id is the source of the require
              const exports = {};
              fn(require, exports);
              this.#cached.set(module, exports);
              return exports;
            }
          }
          exports.BeyondPackage = BeyondPackage;
        }
      });

      /*********************************
      INTERNAL MODULE: ./bimport/bimport
      *********************************/

      ims.set('./bimport/bimport', {
        hash: 1563705995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.bimport = bimport;
          require("./brequire");
          /*bundle*/ /**
                      * Import a module, solving internally the module format (amd, esm).
                      *
                      * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
                      *
                      * @param resource {string} The resource identifier of the bundle
                      * @param version {number} The version required by hmr to update a bundle's processor
                      * @returns {Promise<*>}
                      */
          function bimport(resource, version) {
            if (bimport.mode === 'amd') {
              return new Promise((resolve, reject) => {
                if (typeof resource !== "string") throw 'Invalid module parameter';
                resource = resource.endsWith('.js') ? resource.slice(0, resource.length - 3) : resource;
                const error = new Error(`Error loading or processing module "${resource}"`);
                amd_require([resource], returned => resolve(returned), exc => {
                  console.error(`Error loading resource "${resource}".`);
                  console.log(exc.stack);
                  reject(error);
                });
              });
            } else if (bimport.mode === 'sjs') {
              return globalThis.System.import(resource + (version ? `?version=${version}` : ''));
            } else {
              return (specifier => new Promise(r => r(_context.import(`${specifier}`))))(resource + (version ? `?version=${version}` : ''));
            }
          }
          bimport.mode = (() => {
            if (typeof amd_require === 'function') return 'amd';
            const {
              System
            } = globalThis;
            if (typeof System === 'object' && typeof System.import === 'function') return 'sjs';
            return 'esm';
          })();
          const appDependencies = (() => {
            const dependencies = globalThis.__app_package?.dependencies;
            return new Map(dependencies);
          })();
          bimport.resolve = (specifier, dependencies) => {
            if (/^https?:\/\//.test(specifier)) return specifier;
            const split = specifier.split('/');
            const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
            const version = (() => {
              if (dependencies.has(pkg)) return dependencies.get(pkg);
              if (appDependencies.has(pkg)) return appDependencies.get(pkg);
            })();
            if (!version) return specifier;
            const subpath = split.join('/');
            return `${pkg}@${version}` + (subpath ? `/${subpath}` : '');
          };
        }
      });

      /**********************************
      INTERNAL MODULE: ./bimport/brequire
      **********************************/

      ims.set('./bimport/brequire', {
        hash: 596501557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.brequire = brequire;
          var _instances = require("../package/instances");
          /*bundle*/ /**
                      * Require a previously loaded bundle synchronously:
                      * (can be a project bundle or library bundle, or an external bundle).
                      *
                      * brequire is implemented for internal use, as the require function available in the internal modules
                      * exposes this functionality.
                      * In fact the require of the internal modules internally makes use of brequire.
                      *
                      * When running in a BEE, brequire and bimport are implemented by it, overriding both functions.
                      *
                      * @param {string} specifier
                      * @return {*}
                      */
          function brequire(specifier) {
            const split = specifier.split('/');
            const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
            const subpath = split.join('/');
            const found = [..._instances.default].find(([vspecifier]) => {
              if (!vspecifier.startsWith(`${pkg}@`)) return;
              const split = vspecifier.slice(pkg.length).split('/');
              split.shift(); // Remove the version of the specifier of the instance
              return subpath === split.join('/');
            });
            if (!found) return;
            !found[1].initialised && found[1].initialise();
            return found[1].exports.values;
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./bimport/index
      *******************************/

      ims.set('./bimport/index', {
        hash: 478135557,
        creator: function (require, exports) {
          "use strict";

          var _bimport = require("./bimport");
          var _brequire = require("./brequire");
          /**
           * When running in a BEE, bimport and brequire are implemented by it
           */
          globalThis.bimport === void 0 && (globalThis.bimport = _bimport.bimport);
          globalThis.brequire === void 0 && (globalThis.brequire = _brequire.brequire);
        }
      });

      /***********************************
      INTERNAL MODULE: ./bimport/requirejs
      ***********************************/

      ims.set('./bimport/requirejs', {
        hash: 2243979856,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./bundle
      ************************/

      ims.set('./bundle', {
        hash: 2786310194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Bundle = void 0;
          var _package = require("./package");
          var _instances = require("./instances");
          var _module = require("./module");
          require("./bimport");
          /*bundle*/
          class Bundle extends Map {
            #type;
            get type() {
              return this.#type;
            }
            #name;
            get name() {
              return this.#name;
            }
            #vspecifier;
            get vspecifier() {
              return this.#vspecifier;
            }
            #specifier;
            get specifier() {
              return this.#specifier;
            }
            #module;
            get module() {
              return this.#module;
            }
            #uri;
            get uri() {
              return this.#uri;
            }
            constructor(specs, uri) {
              super();
              if (typeof specs !== 'object') throw new Error('Bundle creation specification is not defined');
              const name = this.#name = specs.name ? specs.name : specs.type;
              if (!name) throw new Error('Invalid bundle creation specification');
              this.#module = new _module.Module(specs.module);
              this.#uri = uri;
              this.#type = specs.type;
              const {
                multibundle,
                vspecifier,
                specifier
              } = this.#module;
              this.#vspecifier = multibundle ? `${vspecifier}.${name}` : vspecifier;
              this.#specifier = multibundle ? `${specifier}.${name}` : specifier;
              _instances.instances.register(this);
            }
            package(language) {
              if (language && language.length !== 2) throw new Error(`Language "${language}" is invalid`);
              language = !language ? '' : language;
              if (this.has(language)) return this.get(language);
              const pkg = new _package.Package(this, language);
              this.set(language, pkg);
              return pkg;
            }
          }
          exports.Bundle = Bundle;
        }
      });

      /******************************
      INTERNAL MODULE: ./events/index
      ******************************/

      ims.set('./events/index', {
        hash: 1779469688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Events = void 0;
          /*bundle*/
          class Events {
            #specs;
            #listeners = new Map();
            #destroyed = false;
            get destroyed() {
              return this.#destroyed;
            }
            constructor(specs) {
              specs = specs ? specs : {};
              if (specs.supported && !(specs.supported instanceof Array)) throw new Error('Invalid parameters');
              this.#specs = specs;
              if (specs.bind) {
                specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);
                specs.bind.unbind = (event, listener) => this.off(event, listener);
              }
            }
            /**
             * Binds an event handler to an event name
             *
             * @param {string} event
             * @param {ListenerFunction} listener
             * @param {number} priority
             * @returns {this}
             */
            on(event, listener, priority) {
              if (this.#destroyed) {
                throw new Error('Events object is destroyed');
              }
              if (this.#specs.supported && !this.#specs.supported.includes(event)) {
                throw new Error(`Event "${event}" is not defined`);
              }
              if (typeof listener !== 'function') {
                throw new Error('Listener is not a function');
              }
              this.off(event, listener); // Just in case the listener is already registered
              const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
              this.#listeners.set(event, l);
              l.push({
                listener: listener,
                priority: priority ? priority : 0
              });
              return this;
            }
            bind = (event, listener, priority) => this.on(event, listener, priority);
            /**
             * Unbind an event listener
             *
             * @param {string} event
             * @param {ListenerFunction} listener
             * @param {number} force
             * @returns {this}
             */
            off(event, listener, force) {
              if (this.#destroyed) {
                throw new Error('Events object is destroyed');
              }
              if (!event) {
                throw new Error(`Event name not specified`);
              }
              if (this.#specs.supported && !this.#specs.supported.includes(event)) {
                throw new Error(`Event "${event}" is not defined`);
              }
              if (!listener) {
                if (!force) throw new Error('Listener function not set');
                this.#listeners.delete(event);
                return this;
              }
              if (!this.#listeners.has(event)) {
                return this;
              }
              const e = this.#listeners.get(event);
              const filtered = e.filter(item => item.listener !== listener);
              this.#listeners.set(event, filtered);
              return this;
            }
            unbind = (event, listener, force) => this.off(event, listener, force);
            /**
             * Triggers an event
             *
             * @param {Trigger} event
             * @param {*} rest
             * @returns {Promise<*>}
             */
            trigger(event, ...rest) {
              if (this.#destroyed) {
                throw new Error('Events object is destroyed');
              }
              event = typeof event === 'string' ? {
                'name': event
              } : event;
              if (typeof event !== 'object') throw new Error('Invalid parameters');
              if (typeof event.name !== 'string') throw new Error('Invalid event name');
              if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
                throw new Error(`Event "${event.name}" is not defined`);
              }
              let args = [...arguments];
              args.shift(); // Remove the event name from the list of arguments
              if (!this.#listeners.has(event.name)) return;
              let l = this.#listeners.get(event.name);
              // Sort by priority
              l.sort((a, b) => b.priority - a.priority);
              if (event.async) {
                const trigger = async function () {
                  const promises = [];
                  for (let listener of l) {
                    promises.push(listener.listener(...args));
                  }
                  await Promise.all(promises);
                };
                return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
              } else {
                for (let listener of l) {
                  listener.listener(...args);
                }
              }
            }
            destroy() {
              this.#destroyed = true;
              this.#listeners.clear();
            }
          }
          exports.Events = Events;
        }
      });

      /******************************
      INTERNAL MODULE: ./events/types
      ******************************/

      ims.set('./events/types', {
        hash: 1632705009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************
      INTERNAL MODULE: ./instances
      ***************************/

      ims.set('./instances', {
        hash: 1214802090,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.instances = void 0;
          /*bundle*/
          const instances = exports.instances = new class extends Map {
            register(bundle) {
              this.set(bundle.vspecifier, bundle);
            }
          }();
        }
      });

      /******************************
      INTERNAL MODULE: ./module/index
      ******************************/

      ims.set('./module/index', {
        hash: 3514722542,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Module = void 0;
          /*bundle*/
          class Module {
            #pkg;
            get pkg() {
              return this.#pkg;
            }
            #vspecifier;
            get vspecifier() {
              return this.#vspecifier;
            }
            #specifier;
            get specifier() {
              return this.#specifier;
            }
            #version;
            get version() {
              return this.#version;
            }
            #subpath;
            get subpath() {
              return this.#subpath;
            }
            #multibundle;
            get multibundle() {
              return this.#multibundle;
            }
            constructor(specs) {
              this.#vspecifier = specs.vspecifier;
              this.#multibundle = specs.multibundle;
              const split = specs.vspecifier.split('/');
              const scope = split[0].startsWith('@') ? split.shift() : void 0;
              const [name, version] = split.shift().split('@');
              this.#subpath = split.join('/');
              this.#pkg = scope ? `${scope}/${name}` : name;
              this.#version = version;
              this.#specifier = this.#pkg + (this.#subpath ? `/${this.#subpath}` : '');
            }
            /**
             * @deprecated
             *
             * @param {string} action
             * @param {Record<string, *>} params
             * @return {Promise<*>}
             */
            async execute(action, params) {
              const {
                backends
              } = await beyond.import('@beyond-js/backend/client');
              return await backends.execute(this.#pkg, 'legacy', this.#subpath, action, params);
            }
          }
          exports.Module = Module;
        }
      });

      /**************************************
      INTERNAL MODULE: ./package/dependencies
      **************************************/

      ims.set('./package/dependencies', {
        hash: 3724344928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          class _default extends Map {
            #pkg;
            constructor(pkg) {
              super();
              this.#pkg = pkg;
            }
            update(deps) {
              this.clear();
              deps?.forEach(([specifier, dependency]) => {
                if (!dependency) {
                  throw new Error(`Dependency "${specifier}" not found on package "${this.#pkg.vspecifier}"`);
                }
                const {
                  __beyond_transversal: transversal
                } = dependency;
                dependency = transversal ? transversal.bundles.get(specifier) : dependency;
                this.set(specifier, dependency);
              });
            }
          }
          exports.default = _default;
        }
      });

      /*********************************
      INTERNAL MODULE: ./package/exports
      *********************************/

      ims.set('./package/exports', {
        hash: 3682924180,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _trace = require("./ims/require/trace");
          class _default {
            #require;
            #values = {};
            get values() {
              return this.#values;
            }
            /**
             * Property is set by the bundle file, or by the transversal
             * @type {{im: string, from: string, name: string}[]}
             */
            descriptor;
            /**
             * Property is set by the bundle file to process the module exports (es6, cjs, amd)
             * @type {(require: (id: string) => any) => {void(require)}}
             */
            process;
            constructor(require) {
              this.#require = require;
              this.#values.hmr = {
                on: (event, listener) => require.pkg.hmr.on(event, listener),
                off: (event, listener) => require.pkg.hmr.off(event, listener)
              };
              this.#values.__beyond_pkg = this.#require.pkg;
            }
            // Used by the IM exports proxy to update the value of the bundle exported property when
            // the property is changed in the IM
            set(key, value) {
              this.#values[key] = value;
            }
            update() {
              const require = id => {
                const trace = new _trace.Trace();
                trace.register('exports.update', id);
                return this.#require.solve(id, trace);
              };
              this.process?.({
                require
              });
              // Clean all previous values
              const reserved = ['__beyond_pkg', 'hmr'];
              Object.keys(this.#values).forEach(p => !reserved.includes(p) && delete this.#values[p]);
              this.descriptor?.forEach(({
                im,
                from,
                name
              }) => {
                const trace = new _trace.Trace();
                this.#values[name] = this.#require.solve(im, trace)[from];
              });
            }
          }
          exports.default = _default;
        }
      });

      /*************************************
      INTERNAL MODULE: ./package/ims/exports
      *************************************/

      ims.set('./package/ims/exports', {
        hash: 3697874831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IMExports = void 0;
          class IMExports {
            constructor(im, bexports) {
              return new Proxy(this, {
                set: (self, name, value) => {
                  // Set the exported property
                  self[name] = value;
                  // Check if it is a bundle exported property
                  const prop = bexports.descriptor?.find(({
                    im: id,
                    from
                  }) => {
                    return im.id === id && name === from;
                  });
                  prop && bexports.set(prop.name, value);
                  prop && bexports.process?.({
                    prop: prop.name,
                    value
                  });
                  return true;
                }
              });
            }
          }
          exports.IMExports = IMExports;
        }
      });

      /********************************
      INTERNAL MODULE: ./package/ims/im
      ********************************/

      ims.set('./package/ims/im', {
        hash: 2241059934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InternalModule = void 0;
          var _trace = require("./require/trace");
          var _exports = require("./exports");
          // Bundle internal module
          class InternalModule {
            #pkg;
            get package() {
              return this.#pkg;
            }
            #id;
            get id() {
              return this.#id;
            }
            #hash;
            get hash() {
              return this.#hash;
            }
            #require;
            #exports;
            #creator;
            #creating = false;
            #created = false;
            get created() {
              return this.#created;
            }
            #create = trace => {
              if (this.#created) throw new Error(`Internal module "${this.#id}" already created`);
              if (this.#creating) throw new Error(`Cyclical import found on internal module "${this.#id}"`);
              this.#creating = true;
              const require = id => this.#require.solve(id, trace, this);
              Object.keys(this.#exports).forEach(key => delete this.#exports[key]);
              this.#creator(require, this.#exports);
              this.#created = true;
              this.#creating = false;
            };
            require(trace, source) {
              if (!this.#created) {
                source && trace.register(source.id, this.#id);
                this.#create(trace);
                trace.pop();
              }
              return this.#exports;
            }
            initialise() {
              if (this.#created) return;
              const trace = new _trace.Trace();
              trace.register('initialisation', this.#id);
              this.#create(trace);
            }
            update(creator, hash) {
              this.#created = false;
              this.#creator = creator;
              this.#hash = hash;
            }
            constructor(pkg, id, hash, creator, require) {
              this.#pkg = pkg;
              this.#id = id;
              this.#hash = hash;
              this.#creator = creator;
              this.#require = require;
              this.#exports = new _exports.IMExports(this, pkg.exports);
            }
          }
          exports.InternalModule = InternalModule;
        }
      });

      /***********************************
      INTERNAL MODULE: ./package/ims/index
      ***********************************/

      ims.set('./package/ims/index', {
        hash: 993201032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InternalModules = void 0;
          var _im = require("./im");
          class InternalModules {
            #pkg;
            #ims = new Map();
            #require;
            constructor(pkg) {
              this.#pkg = pkg;
            }
            set _require(value) {
              this.#require = value;
            }
            #register = (id, hash, creator) => {
              if (this.#ims.has(id)) throw new Error(`IM "${id}" already registered`);
              const im = new _im.InternalModule(this.#pkg, id, hash, creator, this.#require);
              this.#ims.set(im.id, im);
            };
            register(ims) {
              ims.forEach(({
                creator,
                hash
              }, id) => this.#register(id, hash, creator));
            }
            require(id, trace, source) {
              const module = (() => {
                if (this.#ims.has(id)) return id;
                return id.endsWith('/') ? `${id}index` : `${id}/index`;
              })();
              if (!this.#ims.has(module)) {
                throw new Error(`Internal module "${id}" not found`);
              }
              const im = this.#ims.get(module);
              return im.require(trace, source);
            }
            initialise() {
              this.#ims.forEach(im => im.initialise());
            }
            update(ims) {
              ims.forEach(({
                creator,
                hash
              }, id) => {
                if (!this.#ims.has(id)) {
                  this.#register(id, hash, creator);
                  return;
                }
                const im = this.#ims.get(id);
                if (im.hash === hash) return;
                im.update(creator, hash);
                this.#pkg.hmr.trigger(`${id}:change`);
              });
            }
          }
          exports.InternalModules = InternalModules;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./package/ims/require/index
      *******************************************/

      ims.set('./package/ims/require/index', {
        hash: 12273943,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Require = void 0;
          var _base = require("../../../base");
          class Require {
            #pkg;
            get pkg() {
              return this.#pkg;
            }
            constructor(pkg) {
              this.#pkg = pkg;
            }
            /**
             * Solve a cjs require function
             *
             * @param {string} specifier The id of the internal module being required
             * @param {Trace} trace {object} The internal trace to find cyclical dependencies of internal modules
             * @param {InternalModule=} im The internal module that is making the call
             * @return {*}
             */
            solve(specifier, trace, im) {
              if (specifier.startsWith('.')) {
                // Relative require (internal module)
                specifier = im ? (0, _base.resolve)(im.id, specifier) : specifier;
                return this.#pkg.ims.require(specifier, trace, im);
              }
              /**
               * It is a non-relative require
               */
              if (specifier === 'beyond_context') {
                const {
                  bundle
                } = this.#pkg;
                return {
                  module: bundle.module,
                  bundle,
                  pkg: this.#pkg
                };
              }
              // @beyond-js/kernel/transversals requires the Bundle object
              if (specifier === '@beyond-js/kernel/bundle') {
                const {
                  Bundle
                } = require('../../../bundle');
                const {
                  instances
                } = require('../../../instances');
                return {
                  Bundle,
                  instances
                };
              }
              const {
                dependencies
              } = this.#pkg;
              if (dependencies.has(specifier)) {
                /**
                 * The package may not be initialized.
                 * In principle, it is a feature required by transversals, but it could be applied to other use cases.
                 */
                const {
                  __beyond_pkg: pkg
                } = dependencies.get(specifier);
                typeof pkg === 'object' && !pkg.initialised && pkg.initialise();
                return dependencies.get(specifier);
              }
              const keys = JSON.stringify([...dependencies.keys()]);
              throw new Error(`Bundle "${specifier}" is not registered as a dependency: ${keys}`);
            }
          }
          exports.Require = Require;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./package/ims/require/trace
      *******************************************/

      ims.set('./package/ims/require/trace', {
        hash: 1932027471,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Trace = void 0;
          // Used to find cyclical requires of internal modules
          // Key is the id being required and the value is the source
          class Trace extends Array {
            has = id => this.find(rt => rt.id === id);
            register(source, id) {
              // Check for cyclical module require
              if (this.has(id)) {
                let traced = '';
                this.forEach(({
                  id,
                  source
                }) => {
                  const s = ['initialisation', 'exports.update'].includes(source) ? 'Cycle initiates with source' : `then "${source}" requires`;
                  traced += `\t${s} "${id}"\n`;
                });
                traced += `\tthat finally requires "${id}" again.\n`;
                throw new Error(`Recursive module load found.\n` + `Internal module "${source}" is requiring another internal module that was previously required: "${id}"\n` + `Trace of required modules:\n${traced}`);
              }
              this.push({
                id,
                source
              });
            }
          }
          exports.Trace = Trace;
        }
      });

      /*******************************
      INTERNAL MODULE: ./package/index
      *******************************/

      ims.set('./package/index', {
        hash: 458850112,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Package = void 0;
          var _ims = require("./ims");
          var _require = require("./ims/require");
          var _exports = require("./exports");
          var _dependencies = require("./dependencies");
          var _instances = require("./instances");
          var _events = require("../events");
          /*bundle*/
          class Package {
            #bundle;
            get bundle() {
              return this.#bundle;
            }
            #language;
            get language() {
              return this.#language;
            }
            #vspecifier;
            get vspecifier() {
              return this.#vspecifier;
            }
            #specifier;
            get specifier() {
              return this.#specifier;
            }
            #require;
            #ims;
            get ims() {
              return this.#ims;
            }
            #exports;
            get exports() {
              return this.#exports;
            }
            // The beyond dependencies that are required by the bundle
            #dependencies = new _dependencies.default(this);
            get dependencies() {
              return this.#dependencies;
            }
            #hmr = new _events.Events();
            get hmr() {
              return this.#hmr;
            }
            constructor(bundle, language) {
              this.#bundle = bundle;
              this.#language = language ? language : '';
              this.#vspecifier = language ? `${bundle.vspecifier}.${language}` : bundle.vspecifier;
              this.#specifier = language ? `${bundle.specifier}.${language}` : bundle.specifier;
              this.#ims = new _ims.InternalModules(this);
              this.#require = new _require.Require(this);
              this.#ims._require = this.#require;
              this.#exports = new _exports.default(this.#require);
              _instances.default.register(this);
            }
            #initialised = false;
            get initialised() {
              return this.#initialised;
            }
            initialise(ims) {
              if (this.#initialised) throw new Error('Package already initialised');
              this.#initialised = true;
              ims && this.#ims.register(ims);
              this.exports.update();
              this.#ims.initialise();
            }
            update(ims) {
              this.#ims.update(ims);
              this.exports.update();
              this.#ims.initialise();
              this.#hmr.trigger('change');
            }
          }
          exports.Package = Package;
        }
      });

      /***********************************
      INTERNAL MODULE: ./package/instances
      ***********************************/

      ims.set('./package/instances', {
        hash: 2745122839,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _default = exports.default = new class extends Map {
            register(pkg) {
              this.set(pkg.vspecifier, pkg);
            }
          }();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./bimport/bimport",
        "from": "bimport",
        "name": "bimport"
      }, {
        "im": "./bimport/brequire",
        "from": "brequire",
        "name": "brequire"
      }, {
        "im": "./bundle",
        "from": "IBundleSpecs",
        "name": "IBundleSpecs"
      }, {
        "im": "./bundle",
        "from": "Bundle",
        "name": "Bundle"
      }, {
        "im": "./events/index",
        "from": "Events",
        "name": "Events"
      }, {
        "im": "./events/types",
        "from": "ListenerFunction",
        "name": "ListenerFunction"
      }, {
        "im": "./instances",
        "from": "instances",
        "name": "instances"
      }, {
        "im": "./module/index",
        "from": "Module",
        "name": "Module"
      }, {
        "im": "./package/exports",
        "from": "IExportsDescriptor",
        "name": "IExportsDescriptor"
      }, {
        "im": "./package/ims/im",
        "from": "IMSpecs",
        "name": "IMSpecs"
      }, {
        "im": "./package/ims/index",
        "from": "IMCreators",
        "name": "IMCreators"
      }, {
        "im": "./package/index",
        "from": "Package",
        "name": "Package"
      }];
      // Module exports
      __pkg.exports.process = function (require) {
        _export("bimport", bimport = require('./bimport/bimport').bimport);
        _export("brequire", brequire = require('./bimport/brequire').brequire);
        _export("IBundleSpecs", IBundleSpecs = require('./bundle').IBundleSpecs);
        _export("Bundle", Bundle = require('./bundle').Bundle);
        _export("Events", Events = require('./events/index').Events);
        _export("ListenerFunction", ListenerFunction = require('./events/types').ListenerFunction);
        _export("instances", instances = require('./instances').instances);
        _export("Module", Module = require('./module/index').Module);
        _export("IExportsDescriptor", IExportsDescriptor = require('./package/exports').IExportsDescriptor);
        _export("IMSpecs", IMSpecs = require('./package/ims/im').IMSpecs);
        _export("IMCreators", IMCreators = require('./package/ims/index').IMCreators);
        _export("Package", Package = require('./package/index').Package);
      };
      __bp = {};
      ims.get('./base/index').creator(() => 0, __bp);
      __pkg = new __bp.BeyondPackage(__pkg.exports);
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXNvbHZlIiwic291cmNlIiwiaWQiLCJzdGFydHNXaXRoIiwiRXJyb3IiLCJzcGxpdCIsInBvcCIsInRhcmdldCIsInNsaWNlIiwibGVuZ3RoIiwic2hpZnQiLCJqb2luIiwiQmV5b25kUGFja2FnZSIsImltcyIsImNhY2hlZCIsIk1hcCIsImV4cG9ydHMiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxpc2UiLCJwcm9jZXNzIiwicmVxdWlyZSIsIm1vZHVsZSIsImhhcyIsImVuZHNXaXRoIiwiZ2V0IiwiZm4iLCJjcmVhdG9yIiwicmVxdWlyZWQiLCJzZXQiLCJiaW1wb3J0IiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwibW9kZSIsIlByb21pc2UiLCJyZWplY3QiLCJlcnJvciIsImFtZF9yZXF1aXJlIiwicmV0dXJuZWQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJnbG9iYWxUaGlzIiwiU3lzdGVtIiwiaW1wb3J0Iiwic3BlY2lmaWVyIiwiciIsIl9jb250ZXh0IiwiYXBwRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzIiwiX19hcHBfcGFja2FnZSIsInRlc3QiLCJwa2ciLCJzdWJwYXRoIiwiX2luc3RhbmNlcyIsImJyZXF1aXJlIiwiZm91bmQiLCJkZWZhdWx0IiwiZmluZCIsInZzcGVjaWZpZXIiLCJpbml0aWFsaXNlZCIsInZhbHVlcyIsIl9iaW1wb3J0IiwiX2JyZXF1aXJlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9wYWNrYWdlIiwiX21vZHVsZSIsIkJ1bmRsZSIsInR5cGUiLCJuYW1lIiwidXJpIiwic3BlY3MiLCJNb2R1bGUiLCJtdWx0aWJ1bmRsZSIsImluc3RhbmNlcyIsInJlZ2lzdGVyIiwicGFja2FnZSIsImxhbmd1YWdlIiwiUGFja2FnZSIsIkV2ZW50cyIsImxpc3RlbmVycyIsImRlc3Ryb3llZCIsInN1cHBvcnRlZCIsIkFycmF5IiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwicHVzaCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInRyaWdnZXIiLCJyZXN0IiwiYXJncyIsImFyZ3VtZW50cyIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJkZXN0cm95IiwiY2xlYXIiLCJidW5kbGUiLCJzY29wZSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJwYXJhbXMiLCJiYWNrZW5kcyIsImJleW9uZCIsIl9kZWZhdWx0IiwidXBkYXRlIiwiZGVwcyIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwiX19iZXlvbmRfdHJhbnN2ZXJzYWwiLCJ0cmFuc3ZlcnNhbCIsImJ1bmRsZXMiLCJfdHJhY2UiLCJkZXNjcmlwdG9yIiwiaG1yIiwiX19iZXlvbmRfcGtnIiwia2V5IiwidHJhY2UiLCJUcmFjZSIsInNvbHZlIiwicmVzZXJ2ZWQiLCJrZXlzIiwicCIsImltIiwiZnJvbSIsIklNRXhwb3J0cyIsImJleHBvcnRzIiwiUHJveHkiLCJzZWxmIiwicHJvcCIsIl9leHBvcnRzIiwiSW50ZXJuYWxNb2R1bGUiLCJoYXNoIiwiY3JlYXRpbmciLCJjcmVhdGVkIiwiY3JlYXRlIiwiX2ltIiwiSW50ZXJuYWxNb2R1bGVzIiwiX3JlcXVpcmUiLCIjcmVnaXN0ZXIiLCJfYmFzZSIsIlJlcXVpcmUiLCJKU09OIiwic3RyaW5naWZ5IiwicnQiLCJ0cmFjZWQiLCJzIiwiX2ltcyIsIl9kZXBlbmRlbmNpZXMiLCJfZXZlbnRzIl0sInNvdXJjZXMiOlsiL2Jhc2UvaW5kZXgudHMiLCIvYmltcG9ydC9iaW1wb3J0LnRzIiwiL2JpbXBvcnQvYnJlcXVpcmUudHMiLCIvYmltcG9ydC9pbmRleC50cyIsIi9yZXF1aXJlanMudHMiLCIvYnVuZGxlLnRzIiwiL2V2ZW50cy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9pbnN0YW5jZXMudHMiLCIvbW9kdWxlL2luZGV4LnRzIiwiL3BhY2thZ2UvZGVwZW5kZW5jaWVzLnRzIiwiL3BhY2thZ2UvZXhwb3J0cy50cyIsIi9wYWNrYWdlL2ltcy9leHBvcnRzLnRzIiwiL3BhY2thZ2UvaW1zL2ltLnRzIiwiL3BhY2thZ2UvaW1zL2luZGV4LnRzIiwiL3BhY2thZ2UvaW1zL3JlcXVpcmUvaW5kZXgudHMiLCIvcGFja2FnZS9pbXMvcmVxdWlyZS90cmFjZS50cyIsIi9wYWNrYWdlL2luZGV4LnRzIiwiL3BhY2thZ2UvaW5zdGFuY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQVNNLFNBQVVBLE9BQU9BLENBQUNDLE1BQWMsRUFBRUMsRUFBVTtZQUM5QyxJQUFJLENBQUNBLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDBDQUEwQ0YsRUFBRSxHQUFHLENBQUM7WUFPekYsTUFBTUcsS0FBSyxHQUFVLEVBQUU7WUFDdkJBLEtBQUssQ0FBQ0osTUFBTSxHQUFHQSxNQUFNLENBQUNJLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDaENBLEtBQUssQ0FBQ0osTUFBTSxDQUFDSyxHQUFHLEVBQUU7WUFDbEJELEtBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQUNMLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHRCxFQUFFLENBQUNNLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR04sRUFBRSxFQUFFRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3BFLE9BQU9BLEtBQUssQ0FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSUYsS0FBSyxDQUFDRSxNQUFNLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDdERKLEtBQUssQ0FBQ0UsTUFBTSxDQUFDRyxLQUFLLEVBQUU7Y0FDcEJMLEtBQUssQ0FBQ0osTUFBTSxDQUFDSyxHQUFHLEVBQUU7O1lBR3RCLE9BQU9ELEtBQUssQ0FBQ0osTUFBTSxDQUFDVSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHTixLQUFLLENBQUNFLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQztVQUNoRTtVQUVBOzs7VUFHTSxNQUFPQyxhQUFhO1lBQ3RCLENBQUFDLEdBQUk7WUFDSyxDQUFBQyxNQUFPLEdBQXFDLElBQUlDLEdBQUcsRUFBRTtZQUU5RCxDQUFBQyxPQUFRO1lBRVJDLFlBQVlELE9BQVk7Y0FDcEIsSUFBSSxDQUFDLENBQUFBLE9BQVEsR0FBR0EsT0FBTztZQUMzQjtZQUVBRSxVQUFVQSxDQUFDTCxHQUEwQjtjQUNqQyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxHQUFHQSxHQUFHO2NBQ2YsSUFBSSxDQUFDLENBQUFHLE9BQVEsQ0FBQ0csT0FBTyxDQUFDLENBQUNqQixFQUFVLEVBQUVELE1BQWUsS0FBVSxJQUFJLENBQUNtQixPQUFPLENBQUNsQixFQUFFLEVBQUVELE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3RjtZQUVBOzs7Ozs7O1lBT0FtQixPQUFPQSxDQUFDbEIsRUFBVSxFQUFFRCxNQUFlO2NBQy9CQyxFQUFFLEdBQUdELE1BQU0sR0FBR0QsT0FBTyxDQUFDQyxNQUFNLEVBQUVDLEVBQUUsQ0FBQyxHQUFHQSxFQUFFO2NBRXRDLE1BQU1tQixNQUFNLEdBQUcsQ0FBQyxNQUFLO2dCQUNqQixJQUFJLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNTLEdBQUcsQ0FBQ3BCLEVBQUUsQ0FBQyxFQUFFLE9BQU9BLEVBQUU7Z0JBQ2hDLE9BQU9BLEVBQUUsQ0FBQ3FCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHckIsRUFBRSxPQUFPLEdBQUcsR0FBR0EsRUFBRSxRQUFRO2NBQzFELENBQUMsRUFBQyxDQUFFO2NBRUosSUFBSSxJQUFJLENBQUMsQ0FBQVksTUFBTyxDQUFDUSxHQUFHLENBQUNELE1BQU0sQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFQLE1BQU8sQ0FBQ1UsR0FBRyxDQUFDSCxNQUFNLENBQUM7Y0FDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNTLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDLEVBQUUsTUFBTSxJQUFJakIsS0FBSyxDQUFDLG9CQUFvQkYsRUFBRSxhQUFhLENBQUM7Y0FFaEYsTUFBTXVCLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDVyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDSyxPQUFPO2NBQ3hDLE1BQU1OLE9BQU8sR0FBSU8sUUFBZ0IsSUFBSyxJQUFJLENBQUNQLE9BQU8sQ0FBQ08sUUFBUSxFQUFFTixNQUFNLENBQUMsQ0FBQyxDQUFDO2NBQ3RFLE1BQU1MLE9BQU8sR0FBRyxFQUFFO2NBQ2xCUyxFQUFFLENBQUNMLE9BQU8sRUFBRUosT0FBTyxDQUFDO2NBRXBCLElBQUksQ0FBQyxDQUFBRixNQUFPLENBQUNjLEdBQUcsQ0FBQ1AsTUFBTSxFQUFFTCxPQUFPLENBQUM7Y0FDakMsT0FBT0EsT0FBTztZQUNsQjs7VUFDSEEsT0FBQSxDQUFBSixhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekVEUSxPQUFBO1VBY08sV0FUUDs7Ozs7Ozs7O1VBU2lCLFNBQVVTLE9BQU9BLENBQUNDLFFBQWdCLEVBQUVDLE9BQWdCO1lBQ2pFLElBQUlGLE9BQU8sQ0FBQ0csSUFBSSxLQUFLLEtBQUssRUFBRTtjQUN4QixPQUFPLElBQUlDLE9BQU8sQ0FBTSxDQUFDakMsT0FBTyxFQUFFa0MsTUFBTSxLQUFJO2dCQUN4QyxJQUFJLE9BQU9KLFFBQVEsS0FBSyxRQUFRLEVBQUUsTUFBTSwwQkFBMEI7Z0JBQ2xFQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHTyxRQUFRLENBQUN0QixLQUFLLENBQUMsQ0FBQyxFQUFFc0IsUUFBUSxDQUFDckIsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHcUIsUUFBUTtnQkFFdkYsTUFBTUssS0FBSyxHQUFHLElBQUkvQixLQUFLLENBQUMsdUNBQXVDMEIsUUFBUSxHQUFHLENBQUM7Z0JBQzNFTSxXQUFXLENBQUMsQ0FBQ04sUUFBUSxDQUFDLEVBQ2pCTyxRQUFhLElBQUtyQyxPQUFPLENBQUNxQyxRQUFRLENBQUMsRUFDbkNDLEdBQVUsSUFBSTtrQkFDWEMsT0FBTyxDQUFDSixLQUFLLENBQUMsMkJBQTJCTCxRQUFRLElBQUksQ0FBQztrQkFDdERTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLEtBQUssQ0FBQztrQkFDdEJQLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO2dCQUNqQixDQUFDLENBQ0o7Y0FDTCxDQUFDLENBQUM7YUFDTCxNQUFNLElBQUlOLE9BQU8sQ0FBQ0csSUFBSSxLQUFLLEtBQUssRUFBRTtjQUMvQixPQUFhVSxVQUFXLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDZCxRQUFRLElBQUlDLE9BQU8sR0FBRyxZQUFZQSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUM1RixNQUFNO2NBQ0gsUUFBQWMsU0FBQSxRQUFBWixPQUFBLENBQUFhLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxRQUFBLENBQUFILE1BQUEsSUFBQUMsU0FBQSxPQUFjZixRQUFRLElBQUlDLE9BQU8sR0FBRyxZQUFZQSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7O1VBRXZFO1VBRUFGLE9BQU8sQ0FBQ0csSUFBSSxHQUFHLENBQUMsTUFBSztZQUNqQixJQUFJLE9BQU9JLFdBQVcsS0FBSyxVQUFVLEVBQUUsT0FBTyxLQUFLO1lBQ25ELE1BQU07Y0FBQ087WUFBTSxDQUFDLEdBQVNELFVBQVc7WUFDbEMsSUFBSSxPQUFPQyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU9BLE1BQU0sQ0FBQ0MsTUFBTSxLQUFLLFVBQVUsRUFBRSxPQUFPLEtBQUs7WUFDbkYsT0FBTyxLQUFLO1VBQ2hCLENBQUMsRUFBQyxDQUFFO1VBRUosTUFBTUksZUFBZSxHQUFHLENBQUMsTUFBSztZQUMxQixNQUFNQyxZQUFZLEdBQVNQLFVBQVcsQ0FBQ1EsYUFBYSxFQUFFRCxZQUFZO1lBQ2xFLE9BQU8sSUFBSWxDLEdBQUcsQ0FBQ2tDLFlBQVksQ0FBQztVQUNoQyxDQUFDLEVBQUMsQ0FBRTtVQUVKcEIsT0FBTyxDQUFDN0IsT0FBTyxHQUFJLENBQUM2QyxTQUFpQixFQUFFSSxZQUFpQixLQUFZO1lBQ2hFLElBQUksY0FBYyxDQUFDRSxJQUFJLENBQUNOLFNBQVMsQ0FBQyxFQUFFLE9BQU9BLFNBQVM7WUFFcEQsTUFBTXhDLEtBQUssR0FBR3dDLFNBQVMsQ0FBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDbEMsTUFBTStDLEdBQUcsR0FBRy9DLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUdFLEtBQUssQ0FBQ0ssS0FBSyxFQUFFLElBQUlMLEtBQUssQ0FBQ0ssS0FBSyxFQUFFLEVBQUUsR0FBR0wsS0FBSyxDQUFDSyxLQUFLLEVBQUU7WUFFMUYsTUFBTXFCLE9BQU8sR0FBRyxDQUFDLE1BQUs7Y0FDbEIsSUFBSWtCLFlBQVksQ0FBQzNCLEdBQUcsQ0FBQzhCLEdBQUcsQ0FBQyxFQUFFLE9BQU9ILFlBQVksQ0FBQ3pCLEdBQUcsQ0FBQzRCLEdBQUcsQ0FBQztjQUN2RCxJQUFJSixlQUFlLENBQUMxQixHQUFHLENBQUM4QixHQUFHLENBQUMsRUFBRSxPQUFPSixlQUFlLENBQUN4QixHQUFHLENBQUM0QixHQUFHLENBQUM7WUFDakUsQ0FBQyxFQUFDLENBQUU7WUFDSixJQUFJLENBQUNyQixPQUFPLEVBQUUsT0FBT2MsU0FBUztZQUU5QixNQUFNUSxPQUFPLEdBQUdoRCxLQUFLLENBQUNNLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDL0IsT0FBTyxHQUFHeUMsR0FBRyxJQUFJckIsT0FBTyxFQUFFLElBQUlzQixPQUFPLEdBQUcsSUFBSUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO1VBQy9ELENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RGLElBQUFDLFVBQUEsR0FBQWxDLE9BQUE7VUFlTyxXQWJQOzs7Ozs7Ozs7Ozs7O1VBYWlCLFNBQVVtQyxRQUFRQSxDQUFDVixTQUFpQjtZQUNqRCxNQUFNeEMsS0FBSyxHQUFHd0MsU0FBUyxDQUFDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNsQyxNQUFNK0MsR0FBRyxHQUFHL0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBR0UsS0FBSyxDQUFDSyxLQUFLLEVBQUUsSUFBSUwsS0FBSyxDQUFDSyxLQUFLLEVBQUUsRUFBRSxHQUFHTCxLQUFLLENBQUNLLEtBQUssRUFBRTtZQUMxRixNQUFNMkMsT0FBTyxHQUFHaEQsS0FBSyxDQUFDTSxJQUFJLENBQUMsR0FBRyxDQUFDO1lBRS9CLE1BQU02QyxLQUFLLEdBQUcsQ0FBQyxHQUFHRixVQUFBLENBQUFHLE9BQVMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxVQUFVLENBQUMsS0FBSTtjQUMvQyxJQUFJLENBQUNBLFVBQVUsQ0FBQ3hELFVBQVUsQ0FBQyxHQUFHaUQsR0FBRyxHQUFHLENBQUMsRUFBRTtjQUN2QyxNQUFNL0MsS0FBSyxHQUFHc0QsVUFBVSxDQUFDbkQsS0FBSyxDQUFDNEMsR0FBRyxDQUFDM0MsTUFBTSxDQUFDLENBQUNKLEtBQUssQ0FBQyxHQUFHLENBQUM7Y0FDckRBLEtBQUssQ0FBQ0ssS0FBSyxFQUFFLENBQUMsQ0FBQztjQUNmLE9BQU8yQyxPQUFPLEtBQUtoRCxLQUFLLENBQUNNLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDNkMsS0FBSyxFQUFFO1lBRVosQ0FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDSSxXQUFXLElBQUlKLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ3RDLFVBQVUsRUFBRTtZQUM5QyxPQUFPc0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDeEMsT0FBTyxDQUFDNkMsTUFBTTtVQUNsQzs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBQyxRQUFBLEdBQUExQyxPQUFBO1VBQ0EsSUFBQTJDLFNBQUEsR0FBQTNDLE9BQUE7VUFFQTs7O1VBR01zQixVQUFXLENBQUNiLE9BQU8sS0FBSyxLQUFLLENBQUMsS0FBV2EsVUFBVyxDQUFDYixPQUFPLEdBQUdpQyxRQUFBLENBQUFqQyxPQUFPLENBQUM7VUFDdkVhLFVBQVcsQ0FBQ2EsUUFBUSxLQUFLLEtBQUssQ0FBQyxLQUFXYixVQUFXLENBQUNhLFFBQVEsR0FBR1EsU0FBQSxDQUFBUixRQUFRLENBQUM7Ozs7Ozs7Ozs7O1VDUGhGOztVQUVBUyxNQUFBLENBQUFDLGNBQUEsQ0FBQWpELE9BQUE7WUFDQWtELEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxRQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQWtDLFVBQUEsR0FBQWxDLE9BQUE7VUFDQSxJQUFBZ0QsT0FBQSxHQUFBaEQsT0FBQTtVQUNBQSxPQUFBO1VBU087VUFBVSxNQUNYaUQsTUFBTyxTQUFRdEQsR0FBb0I7WUFDNUIsQ0FBQXVELElBQUs7WUFDZCxJQUFJQSxJQUFJQSxDQUFBO2NBQ0osT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNyQjtZQUVTLENBQUFDLElBQUs7WUFDZCxJQUFJQSxJQUFJQSxDQUFBO2NBQ0osT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNyQjtZQUVTLENBQUFaLFVBQVc7WUFDcEIsSUFBSUEsVUFBVUEsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDM0I7WUFFUyxDQUFBZCxTQUFVO1lBQ25CLElBQUlBLFNBQVNBLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQzFCO1lBRVMsQ0FBQXhCLE1BQU87WUFDaEIsSUFBSUEsTUFBTUEsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDdkI7WUFFUyxDQUFBbUQsR0FBSTtZQUNiLElBQUlBLEdBQUdBLENBQUE7Y0FDSCxPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ3BCO1lBRUF2RCxZQUFZd0QsS0FBbUIsRUFBRUQsR0FBWTtjQUN6QyxLQUFLLEVBQUU7Y0FFUCxJQUFJLE9BQU9DLEtBQUssS0FBSyxRQUFRLEVBQUUsTUFBTSxJQUFJckUsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO2NBRTlGLE1BQU1tRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUFBLElBQUssR0FBR0UsS0FBSyxDQUFDRixJQUFJLEdBQUdFLEtBQUssQ0FBQ0YsSUFBSSxHQUFHRSxLQUFLLENBQUNILElBQUk7Y0FDOUQsSUFBSSxDQUFDQyxJQUFJLEVBQUUsTUFBTSxJQUFJbkUsS0FBSyxDQUFDLHVDQUF1QyxDQUFDO2NBRW5FLElBQUksQ0FBQyxDQUFBaUIsTUFBTyxHQUFHLElBQUkrQyxPQUFBLENBQUFNLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDcEQsTUFBTSxDQUFDO2NBQ3ZDLElBQUksQ0FBQyxDQUFBbUQsR0FBSSxHQUFHQSxHQUFHO2NBQ2YsSUFBSSxDQUFDLENBQUFGLElBQUssR0FBR0csS0FBSyxDQUFDSCxJQUFJO2NBRXZCLE1BQU07Z0JBQUNLLFdBQVc7Z0JBQUVoQixVQUFVO2dCQUFFZDtjQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXhCLE1BQU87Y0FDekQsSUFBSSxDQUFDLENBQUFzQyxVQUFXLEdBQUdnQixXQUFXLEdBQUcsR0FBR2hCLFVBQVUsSUFBSVksSUFBSSxFQUFFLEdBQUdaLFVBQVU7Y0FDckUsSUFBSSxDQUFDLENBQUFkLFNBQVUsR0FBRzhCLFdBQVcsR0FBRyxHQUFHOUIsU0FBUyxJQUFJMEIsSUFBSSxFQUFFLEdBQUcxQixTQUFTO2NBRWxFUyxVQUFBLENBQUFzQixTQUFTLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDNUI7WUFFQUMsT0FBT0EsQ0FBQ0MsUUFBaUI7Y0FDckIsSUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUN0RSxNQUFNLEtBQUssQ0FBQyxFQUFFLE1BQU0sSUFBSUwsS0FBSyxDQUFDLGFBQWEyRSxRQUFRLGNBQWMsQ0FBQztjQUMzRkEsUUFBUSxHQUFHLENBQUNBLFFBQVEsR0FBRyxFQUFFLEdBQUdBLFFBQVE7Y0FFcEMsSUFBSSxJQUFJLENBQUN6RCxHQUFHLENBQUN5RCxRQUFRLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQ3ZELEdBQUcsQ0FBQ3VELFFBQVEsQ0FBQztjQUVqRCxNQUFNM0IsR0FBRyxHQUFHLElBQUllLFFBQUEsQ0FBQWEsT0FBTyxDQUFDLElBQUksRUFBRUQsUUFBUSxDQUFDO2NBQ3ZDLElBQUksQ0FBQ25ELEdBQUcsQ0FBQ21ELFFBQVEsRUFBRTNCLEdBQUcsQ0FBQztjQUN2QixPQUFPQSxHQUFHO1lBQ2Q7O1VBQ0hwQyxPQUFBLENBQUFxRCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkVNO1VBQVUsTUFDWFksTUFBTTtZQUNSLENBQUFSLEtBQU07WUFDTixDQUFBUyxTQUFVLEdBQWlDLElBQUluRSxHQUFHLENBQUgsQ0FBRztZQUNsRCxDQUFBb0UsU0FBVSxHQUFHLEtBQUs7WUFDbEIsSUFBSUEsU0FBU0EsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDMUI7WUFFQWxFLFlBQVl3RCxLQUFtQjtjQUMzQkEsS0FBSyxHQUFHQSxLQUFLLEdBQUdBLEtBQUssR0FBRyxFQUFFO2NBRTFCLElBQUlBLEtBQUssQ0FBQ1csU0FBUyxJQUFJLEVBQUVYLEtBQUssQ0FBQ1csU0FBUyxZQUFZQyxLQUFLLENBQUMsRUFBRSxNQUFNLElBQUlqRixLQUFLLENBQUMsb0JBQW9CLENBQUM7Y0FDakcsSUFBSSxDQUFDLENBQUFxRSxLQUFNLEdBQUdBLEtBQUs7Y0FFbkIsSUFBSUEsS0FBSyxDQUFDYSxJQUFJLEVBQUU7Z0JBQ1piLEtBQUssQ0FBQ2EsSUFBSSxDQUFDQSxJQUFJLEdBQUcsQ0FBQ0MsS0FBYSxFQUFFQyxRQUEwQixFQUFFQyxRQUFnQixLQUNsRSxJQUFJLENBQUNDLEVBQUUsQ0FBQ0gsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsQ0FBQztnQkFDOUNoQixLQUFLLENBQUNhLElBQUksQ0FBQ0ssTUFBTSxHQUFHLENBQUNKLEtBQUssRUFBRUMsUUFBUSxLQUFLLElBQUksQ0FBQ0ksR0FBRyxDQUFDTCxLQUFLLEVBQUVDLFFBQVEsQ0FBQzs7WUFFMUU7WUFFQTs7Ozs7Ozs7WUFRQUUsRUFBRUEsQ0FBQ0gsS0FBYSxFQUFFQyxRQUEwQixFQUFFQyxRQUFpQjtjQUMzRCxJQUFJLElBQUksQ0FBQyxDQUFBTixTQUFVLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSS9FLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Y0FFakQsSUFBSSxJQUFJLENBQUMsQ0FBQXFFLEtBQU0sQ0FBQ1csU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ1csU0FBUyxDQUFDUyxRQUFRLENBQUNOLEtBQUssQ0FBQyxFQUFFO2dCQUNqRSxNQUFNLElBQUluRixLQUFLLENBQUMsVUFBVW1GLEtBQUssa0JBQWtCLENBQUM7O2NBRXRELElBQUksT0FBT0MsUUFBUSxLQUFLLFVBQVUsRUFBRTtnQkFDaEMsTUFBTSxJQUFJcEYsS0FBSyxDQUFDLDRCQUE0QixDQUFDOztjQUdqRCxJQUFJLENBQUN3RixHQUFHLENBQUNMLEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUMsQ0FBQztjQUUzQixNQUFNTSxDQUFDLEdBQW9CLElBQUksQ0FBQyxDQUFBWixTQUFVLENBQUM1RCxHQUFHLENBQUNpRSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUwsU0FBVSxDQUFDMUQsR0FBRyxDQUFDK0QsS0FBSyxDQUFDLEdBQUcsRUFBRTtjQUN2RixJQUFJLENBQUMsQ0FBQUwsU0FBVSxDQUFDdEQsR0FBRyxDQUFDMkQsS0FBSyxFQUFFTyxDQUFDLENBQUM7Y0FDN0JBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFDUCxRQUFRLEVBQUVBLFFBQVE7Z0JBQUVDLFFBQVEsRUFBRUEsUUFBUSxHQUFHQSxRQUFRLEdBQUc7Y0FBQyxDQUFDLENBQUM7Y0FFL0QsT0FBTyxJQUFJO1lBQ2Y7WUFFQUgsSUFBSSxHQUFHQSxDQUFDQyxLQUFhLEVBQUVDLFFBQTBCLEVBQUVDLFFBQWlCLEtBQ2hFLElBQUksQ0FBQ0MsRUFBRSxDQUFDSCxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxDQUFDO1lBRXRDOzs7Ozs7OztZQVFBRyxHQUFHQSxDQUFDTCxLQUFhLEVBQUVDLFFBQTBCLEVBQUVRLEtBQWM7Y0FDekQsSUFBSSxJQUFJLENBQUMsQ0FBQWIsU0FBVSxFQUFFO2dCQUNqQixNQUFNLElBQUkvRSxLQUFLLENBQUMsNEJBQTRCLENBQUM7O2NBRWpELElBQUksQ0FBQ21GLEtBQUssRUFBRTtnQkFDUixNQUFNLElBQUluRixLQUFLLENBQUMsMEJBQTBCLENBQUM7O2NBRS9DLElBQUksSUFBSSxDQUFDLENBQUFxRSxLQUFNLENBQUNXLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNXLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDTixLQUFLLENBQUMsRUFBRTtnQkFDakUsTUFBTSxJQUFJbkYsS0FBSyxDQUFDLFVBQVVtRixLQUFLLGtCQUFrQixDQUFDOztjQUd0RCxJQUFJLENBQUNDLFFBQVEsRUFBRTtnQkFDWCxJQUFJLENBQUNRLEtBQUssRUFBRSxNQUFNLElBQUk1RixLQUFLLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxDQUFBOEUsU0FBVSxDQUFDZSxNQUFNLENBQUNWLEtBQUssQ0FBQztnQkFDN0IsT0FBTyxJQUFJOztjQUdmLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUwsU0FBVSxDQUFDNUQsR0FBRyxDQUFDaUUsS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sSUFBSTs7Y0FHZixNQUFNVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFoQixTQUFVLENBQUMxRCxHQUFHLENBQUMrRCxLQUFLLENBQUM7Y0FDcEMsTUFBTVksUUFBUSxHQUFvQkQsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDYixRQUFRLEtBQUtBLFFBQVEsQ0FBQztjQUM5RSxJQUFJLENBQUMsQ0FBQU4sU0FBVSxDQUFDdEQsR0FBRyxDQUFDMkQsS0FBSyxFQUFFWSxRQUFRLENBQUM7Y0FFcEMsT0FBTyxJQUFJO1lBQ2Y7WUFFQVIsTUFBTSxHQUFHQSxDQUFDSixLQUFhLEVBQUVDLFFBQTBCLEVBQUVRLEtBQWMsS0FDL0QsSUFBSSxDQUFDSixHQUFHLENBQUNMLEtBQUssRUFBRUMsUUFBUSxFQUFFUSxLQUFLLENBQUM7WUFFcEM7Ozs7Ozs7WUFPQU0sT0FBT0EsQ0FBQ2YsS0FBYyxFQUFFLEdBQUdnQixJQUFTO2NBQ2hDLElBQUksSUFBSSxDQUFDLENBQUFwQixTQUFVLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSS9FLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Y0FHakRtRixLQUFLLEdBQUcsT0FBT0EsS0FBSyxLQUFLLFFBQVEsR0FBRztnQkFBQyxNQUFNLEVBQUVBO2NBQUssQ0FBQyxHQUFHQSxLQUFLO2NBQzNELElBQUksT0FBT0EsS0FBSyxLQUFLLFFBQVEsRUFBRSxNQUFNLElBQUluRixLQUFLLENBQUMsb0JBQW9CLENBQUM7Y0FDcEUsSUFBSSxPQUFPbUYsS0FBSyxDQUFDaEIsSUFBSSxLQUFLLFFBQVEsRUFBRSxNQUFNLElBQUluRSxLQUFLLENBQUMsb0JBQW9CLENBQUM7Y0FFekUsSUFBSSxJQUFJLENBQUMsQ0FBQXFFLEtBQU0sQ0FBQ1csU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ1csU0FBUyxDQUFDUyxRQUFRLENBQUNOLEtBQUssQ0FBQ2hCLElBQUksQ0FBQyxFQUFFO2dCQUN0RSxNQUFNLElBQUluRSxLQUFLLENBQUMsVUFBVW1GLEtBQUssQ0FBQ2hCLElBQUksa0JBQWtCLENBQUM7O2NBRzNELElBQUlpQyxJQUFJLEdBQUcsQ0FBQyxHQUFHQyxTQUFTLENBQUM7Y0FDekJELElBQUksQ0FBQzlGLEtBQUssRUFBRSxDQUFDLENBQUM7Y0FFZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF3RSxTQUFVLENBQUM1RCxHQUFHLENBQUNpRSxLQUFLLENBQUNoQixJQUFJLENBQUMsRUFBRTtjQUV0QyxJQUFJdUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBWixTQUFVLENBQUMxRCxHQUFHLENBQUMrRCxLQUFLLENBQUNoQixJQUFJLENBQUM7Y0FFdkM7Y0FDQXVCLENBQUMsQ0FBQ1ksSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFDLENBQUNuQixRQUFRLEdBQUdrQixDQUFDLENBQUNsQixRQUFRLENBQUM7Y0FFekMsSUFBSUYsS0FBSyxDQUFDc0IsS0FBSyxFQUFFO2dCQUViLE1BQU1QLE9BQU8sR0FBRyxlQUFBQSxDQUFBLEVBQUs7a0JBRWpCLE1BQU1RLFFBQVEsR0FBRyxFQUFFO2tCQUNuQixLQUFLLElBQUl0QixRQUFRLElBQUlNLENBQUMsRUFBRTtvQkFDcEJnQixRQUFRLENBQUNmLElBQUksQ0FBQ1AsUUFBUSxDQUFDQSxRQUFRLENBQUMsR0FBR2dCLElBQUksQ0FBQyxDQUFDOztrQkFHN0MsTUFBTXZFLE9BQU8sQ0FBQzhFLEdBQUcsQ0FBQ0QsUUFBUSxDQUFDO2dCQUUvQixDQUFDO2dCQUVELE9BQU9SLE9BQU8sQ0FBQ1UsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHUixJQUFJLENBQUMsQ0FBQ1MsS0FBSyxDQUFFM0UsR0FBVSxJQUFLQyxPQUFPLENBQUNKLEtBQUssQ0FBQ0csR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQztlQUVyRixNQUFNO2dCQUNILEtBQUssSUFBSStDLFFBQVEsSUFBSU0sQ0FBQyxFQUFFO2tCQUNwQk4sUUFBUSxDQUFDQSxRQUFRLENBQUMsR0FBR2dCLElBQUksQ0FBQzs7O1lBR3RDO1lBRUFVLE9BQU9BLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQS9CLFNBQVUsR0FBRyxJQUFJO2NBQ3RCLElBQUksQ0FBQyxDQUFBRCxTQUFVLENBQUNpQyxLQUFLLEVBQUU7WUFDM0I7O1VBQ0huRyxPQUFBLENBQUFpRSxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7O1VDdEpEOztVQUVBakIsTUFBQSxDQUFBQyxjQUFBLENBQUFqRCxPQUFBO1lBQ0FrRCxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRk87VUFBVyxNQUFNVSxTQUFTLEdBQUE1RCxPQUFBLENBQUE0RCxTQUFBLEdBQUcsSUFBSSxjQUFjN0QsR0FBRztZQUNyRDhELFFBQVFBLENBQUN1QyxNQUFjO2NBQ25CLElBQUksQ0FBQ3hGLEdBQUcsQ0FBQ3dGLE1BQU0sQ0FBQ3pELFVBQVUsRUFBRXlELE1BQU0sQ0FBQztZQUN2QztXQUNILEMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNFTTtVQUFVLE1BQ1gxQyxNQUFNO1lBQ0YsQ0FBQXRCLEdBQUk7WUFDYixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUVTLENBQUFPLFVBQVc7WUFDcEIsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFUyxDQUFBZCxTQUFVO1lBQ25CLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRVMsQ0FBQWQsT0FBUTtZQUNqQixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVTLENBQUFzQixPQUFRO1lBQ2pCLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRVMsQ0FBQXNCLFdBQVk7WUFDckIsSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQTFELFlBQVl3RCxLQUFtQjtjQUM5QixJQUFJLENBQUMsQ0FBQWQsVUFBVyxHQUFHYyxLQUFLLENBQUNkLFVBQVU7Y0FDbkMsSUFBSSxDQUFDLENBQUFnQixXQUFZLEdBQUdGLEtBQUssQ0FBQ0UsV0FBVztjQUVyQyxNQUFNdEUsS0FBSyxHQUFHb0UsS0FBSyxDQUFDZCxVQUFVLENBQUN0RCxLQUFLLENBQUMsR0FBRyxDQUFDO2NBQ3pDLE1BQU1nSCxLQUFLLEdBQUdoSCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNGLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBR0UsS0FBSyxDQUFDSyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUM7Y0FDL0QsTUFBTSxDQUFDNkQsSUFBSSxFQUFFeEMsT0FBTyxDQUFDLEdBQUcxQixLQUFLLENBQUNLLEtBQUssRUFBRSxDQUFDTCxLQUFLLENBQUMsR0FBRyxDQUFDO2NBRWhELElBQUksQ0FBQyxDQUFBZ0QsT0FBUSxHQUFHaEQsS0FBSyxDQUFDTSxJQUFJLENBQUMsR0FBRyxDQUFDO2NBQy9CLElBQUksQ0FBQyxDQUFBeUMsR0FBSSxHQUFHaUUsS0FBSyxHQUFHLEdBQUdBLEtBQUssSUFBSTlDLElBQUksRUFBRSxHQUFHQSxJQUFJO2NBQzdDLElBQUksQ0FBQyxDQUFBeEMsT0FBUSxHQUFHQSxPQUFPO2NBQ3ZCLElBQUksQ0FBQyxDQUFBYyxTQUFVLEdBQUcsSUFBSSxDQUFDLENBQUFPLEdBQUksSUFBSSxJQUFJLENBQUMsQ0FBQUMsT0FBUSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUFBLE9BQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUN6RTtZQUVBOzs7Ozs7O1lBT0EsTUFBTWlFLE9BQU9BLENBQUNDLE1BQWMsRUFBRUMsTUFBMkI7Y0FDeEQsTUFBTTtnQkFBRUM7Y0FBUSxDQUFFLEdBQUcsTUFBTUMsTUFBTSxDQUFDOUUsTUFBTSxDQUFDLDJCQUEyQixDQUFDO2NBQ3JFLE9BQU8sTUFBTTZFLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBbEUsR0FBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQUMsT0FBUSxFQUFFa0UsTUFBTSxFQUFFQyxNQUFNLENBQUM7WUFDbEY7O1VBQ0F4RyxPQUFBLENBQUEwRCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RhLE1BQUFpRCxRQUFBLFNBQWU1RyxHQUFnQjtZQUN6QyxDQUFBcUMsR0FBSTtZQUVKbkMsWUFBWW1DLEdBQVk7Y0FDcEIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLEdBQUksR0FBR0EsR0FBRztZQUNuQjtZQUVBd0UsTUFBTUEsQ0FBQ0MsSUFBc0I7Y0FDekIsSUFBSSxDQUFDVixLQUFLLEVBQUU7Y0FFWlUsSUFBSSxFQUFFQyxPQUFPLENBQUMsQ0FBQyxDQUFDakYsU0FBUyxFQUFFa0YsVUFBVSxDQUFDLEtBQUk7Z0JBQ3RDLElBQUksQ0FBQ0EsVUFBVSxFQUFFO2tCQUNiLE1BQU0sSUFBSTNILEtBQUssQ0FBQyxlQUFleUMsU0FBUywyQkFBMkIsSUFBSSxDQUFDLENBQUFPLEdBQUksQ0FBQ08sVUFBVSxHQUFHLENBQUM7O2dCQUcvRixNQUFNO2tCQUFDcUUsb0JBQW9CLEVBQUVDO2dCQUFXLENBQUMsR0FBR0YsVUFBVTtnQkFDdERBLFVBQVUsR0FBR0UsV0FBVyxHQUFHQSxXQUFXLENBQUNDLE9BQU8sQ0FBQzFHLEdBQUcsQ0FBQ3FCLFNBQVMsQ0FBQyxHQUFHa0YsVUFBVTtnQkFDMUUsSUFBSSxDQUFDbkcsR0FBRyxDQUFDaUIsU0FBUyxFQUFFa0YsVUFBVSxDQUFDO2NBQ25DLENBQUMsQ0FBQztZQUNOOztVQUNIL0csT0FBQSxDQUFBeUMsT0FBQSxHQUFBa0UsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkQsSUFBQVEsTUFBQSxHQUFBL0csT0FBQTtVQVljLE1BQUF1RyxRQUFBO1lBQ1YsQ0FBQXZHLE9BQVE7WUFDUixDQUFBeUMsTUFBTyxHQUF3QixFQUFFO1lBQ2pDLElBQUlBLE1BQU1BLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3ZCO1lBRUE7Ozs7WUFJQXVFLFVBQVU7WUFFVjs7OztZQUlBakgsT0FBTztZQUVQRixZQUFZRyxPQUFnQjtjQUN4QixJQUFJLENBQUMsQ0FBQUEsT0FBUSxHQUFHQSxPQUFPO2NBQ3ZCLElBQUksQ0FBQyxDQUFBeUMsTUFBTyxDQUFDd0UsR0FBRyxHQUFHO2dCQUNmM0MsRUFBRSxFQUFFQSxDQUFDSCxLQUFhLEVBQUVDLFFBQWEsS0FBS3BFLE9BQU8sQ0FBQ2dDLEdBQUcsQ0FBQ2lGLEdBQUcsQ0FBQzNDLEVBQUUsQ0FBQ0gsS0FBSyxFQUFFQyxRQUFRLENBQUM7Z0JBQ3pFSSxHQUFHLEVBQUVBLENBQUNMLEtBQWEsRUFBRUMsUUFBYSxLQUFLcEUsT0FBTyxDQUFDZ0MsR0FBRyxDQUFDaUYsR0FBRyxDQUFDekMsR0FBRyxDQUFDTCxLQUFLLEVBQUVDLFFBQVE7ZUFDN0U7Y0FFRCxJQUFJLENBQUMsQ0FBQTNCLE1BQU8sQ0FBQ3lFLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQWxILE9BQVEsQ0FBQ2dDLEdBQUc7WUFDakQ7WUFFQTtZQUNBO1lBQ0F4QixHQUFHQSxDQUFDMkcsR0FBVyxFQUFFckUsS0FBYTtjQUMxQixJQUFJLENBQUMsQ0FBQUwsTUFBTyxDQUFDMEUsR0FBRyxDQUFDLEdBQUdyRSxLQUFLO1lBQzdCO1lBRUEwRCxNQUFNQSxDQUFBO2NBQ0YsTUFBTXhHLE9BQU8sR0FBSWxCLEVBQVUsSUFBSTtnQkFDM0IsTUFBTXNJLEtBQUssR0FBRyxJQUFJTCxNQUFBLENBQUFNLEtBQUssRUFBRTtnQkFDekJELEtBQUssQ0FBQzNELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTNFLEVBQUUsQ0FBQztnQkFDcEMsT0FBTyxJQUFJLENBQUMsQ0FBQWtCLE9BQVEsQ0FBQ3NILEtBQUssQ0FBQ3hJLEVBQUUsRUFBRXNJLEtBQUssQ0FBQztjQUN6QyxDQUFDO2NBRUQsSUFBSSxDQUFDckgsT0FBTyxHQUFHO2dCQUFDQztjQUFPLENBQUMsQ0FBQztjQUV6QjtjQUNBLE1BQU11SCxRQUFRLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO2NBQ3hDM0UsTUFBTSxDQUFDNEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBL0UsTUFBTyxDQUFDLENBQUNpRSxPQUFPLENBQUNlLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUM5QyxRQUFRLENBQUNnRCxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFBaEYsTUFBTyxDQUFDZ0YsQ0FBQyxDQUFDLENBQUM7Y0FFdkYsSUFBSSxDQUFDVCxVQUFVLEVBQUVOLE9BQU8sQ0FBQyxDQUFDO2dCQUFDZ0IsRUFBRTtnQkFBRUMsSUFBSTtnQkFBRXhFO2NBQUksQ0FBQyxLQUFJO2dCQUMxQyxNQUFNaUUsS0FBSyxHQUFHLElBQUlMLE1BQUEsQ0FBQU0sS0FBSyxFQUFFO2dCQUN6QixJQUFJLENBQUMsQ0FBQTVFLE1BQU8sQ0FBQ1UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFuRCxPQUFRLENBQUNzSCxLQUFLLENBQUNJLEVBQUUsRUFBRU4sS0FBSyxDQUFDLENBQUNPLElBQUksQ0FBQztjQUM3RCxDQUFDLENBQUM7WUFDTjs7VUFDSC9ILE9BQUEsQ0FBQXlDLE9BQUEsR0FBQWtFLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RLLE1BQU9xQixTQUFTO1lBQ2xCL0gsWUFBWTZILEVBQWtCLEVBQUVHLFFBQXdCO2NBQ3BELE9BQU8sSUFBSUMsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDbkJ0SCxHQUFHLEVBQUVBLENBQUN1SCxJQUFVLEVBQUU1RSxJQUFZLEVBQUVMLEtBQVUsS0FBSTtrQkFDMUM7a0JBQ01pRixJQUFLLENBQUM1RSxJQUFJLENBQUMsR0FBR0wsS0FBSztrQkFFekI7a0JBQ0EsTUFBTWtGLElBQUksR0FBR0gsUUFBUSxDQUFDYixVQUFVLEVBQUUxRSxJQUFJLENBQUMsQ0FBQztvQkFBQ29GLEVBQUUsRUFBRTVJLEVBQUU7b0JBQUU2STtrQkFBSSxDQUFDLEtBQUk7b0JBQ3RELE9BQU9ELEVBQUUsQ0FBQzVJLEVBQUUsS0FBS0EsRUFBRSxJQUFJcUUsSUFBSSxLQUFLd0UsSUFBSTtrQkFDeEMsQ0FBQyxDQUFDO2tCQUNGSyxJQUFJLElBQUlILFFBQVEsQ0FBQ3JILEdBQUcsQ0FBQ3dILElBQUksQ0FBQzdFLElBQUksRUFBRUwsS0FBSyxDQUFDO2tCQUN0Q2tGLElBQUksSUFBSUgsUUFBUSxDQUFDOUgsT0FBTyxHQUFHO29CQUFDaUksSUFBSSxFQUFFQSxJQUFJLENBQUM3RSxJQUFJO29CQUFFTDtrQkFBSyxDQUFDLENBQUM7a0JBRXBELE9BQU8sSUFBSTtnQkFDZjtlQUNILENBQUM7WUFDTjs7VUFDSGxELE9BQUEsQ0FBQWdJLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkQsSUFBQWIsTUFBQSxHQUFBL0csT0FBQTtVQUNBLElBQUFpSSxRQUFBLEdBQUFqSSxPQUFBO1VBUUE7VUFDTSxNQUFPa0ksY0FBYztZQUNkLENBQUFsRyxHQUFJO1lBRWIsSUFBSTBCLE9BQU9BLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBMUIsR0FBSTtZQUNwQjtZQUVTLENBQUFsRCxFQUFHO1lBQ1osSUFBSUEsRUFBRUEsQ0FBQTtjQUNGLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDbkI7WUFFQSxDQUFBcUosSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDSixPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ3JCO1lBRVMsQ0FBQW5JLE9BQVE7WUFFUixDQUFBSixPQUFRO1lBRWpCLENBQUFVLE9BQVE7WUFDUixDQUFBOEgsUUFBUyxHQUFHLEtBQUs7WUFDakIsQ0FBQUMsT0FBUSxHQUFHLEtBQUs7WUFDaEIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDeEI7WUFFQSxDQUFBQyxNQUFPLEdBQUlsQixLQUFZLElBQUk7Y0FDdkIsSUFBSSxJQUFJLENBQUMsQ0FBQWlCLE9BQVEsRUFBRSxNQUFNLElBQUlySixLQUFLLENBQUMsb0JBQW9CLElBQUksQ0FBQyxDQUFBRixFQUFHLG1CQUFtQixDQUFDO2NBQ25GLElBQUksSUFBSSxDQUFDLENBQUFzSixRQUFTLEVBQUUsTUFBTSxJQUFJcEosS0FBSyxDQUFDLDZDQUE2QyxJQUFJLENBQUMsQ0FBQUYsRUFBRyxHQUFHLENBQUM7Y0FDN0YsSUFBSSxDQUFDLENBQUFzSixRQUFTLEdBQUcsSUFBSTtjQUVyQixNQUFNcEksT0FBTyxHQUFJbEIsRUFBVSxJQUFLLElBQUksQ0FBQyxDQUFBa0IsT0FBUSxDQUFDc0gsS0FBSyxDQUFDeEksRUFBRSxFQUFFc0ksS0FBSyxFQUFFLElBQUksQ0FBQztjQUVwRXhFLE1BQU0sQ0FBQzRFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTVILE9BQVEsQ0FBQyxDQUFDOEcsT0FBTyxDQUFDUyxHQUFHLElBQUksT0FBYSxJQUFJLENBQUMsQ0FBQXZILE9BQVMsQ0FBQ3VILEdBQUcsQ0FBQyxDQUFDO2NBQzNFLElBQUksQ0FBQyxDQUFBN0csT0FBUSxDQUFDTixPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUFKLE9BQVEsQ0FBQztjQUNyQyxJQUFJLENBQUMsQ0FBQXlJLE9BQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQyxDQUFBRCxRQUFTLEdBQUcsS0FBSztZQUMxQixDQUFDO1lBRURwSSxPQUFPQSxDQUFDb0gsS0FBWSxFQUFFdkksTUFBc0I7Y0FDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBd0osT0FBUSxFQUFFO2dCQUNoQnhKLE1BQU0sSUFBSXVJLEtBQUssQ0FBQzNELFFBQVEsQ0FBQzVFLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBQSxFQUFHLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxDQUFBd0osTUFBTyxDQUFDbEIsS0FBSyxDQUFDO2dCQUNuQkEsS0FBSyxDQUFDbEksR0FBRyxFQUFFOztjQUVmLE9BQU8sSUFBSSxDQUFDLENBQUFVLE9BQVE7WUFDeEI7WUFFQUUsVUFBVUEsQ0FBQTtjQUNOLElBQUksSUFBSSxDQUFDLENBQUF1SSxPQUFRLEVBQUU7Y0FFbkIsTUFBTWpCLEtBQUssR0FBRyxJQUFJTCxNQUFBLENBQUFNLEtBQUssRUFBRTtjQUN6QkQsS0FBSyxDQUFDM0QsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBM0UsRUFBRyxDQUFDO2NBQzFDLElBQUksQ0FBQyxDQUFBd0osTUFBTyxDQUFDbEIsS0FBSyxDQUFDO1lBQ3ZCO1lBRUFaLE1BQU1BLENBQUNsRyxPQUEwQixFQUFFNkgsSUFBWTtjQUMzQyxJQUFJLENBQUMsQ0FBQUUsT0FBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDLENBQUEvSCxPQUFRLEdBQUdBLE9BQU87Y0FDdkIsSUFBSSxDQUFDLENBQUE2SCxJQUFLLEdBQUdBLElBQUk7WUFDckI7WUFFQXRJLFlBQVltQyxHQUFZLEVBQUVsRCxFQUFVLEVBQUVxSixJQUFZLEVBQUU3SCxPQUEwQixFQUFFTixPQUFnQjtjQUM1RixJQUFJLENBQUMsQ0FBQWdDLEdBQUksR0FBR0EsR0FBRztjQUNmLElBQUksQ0FBQyxDQUFBbEQsRUFBRyxHQUFHQSxFQUFFO2NBQ2IsSUFBSSxDQUFDLENBQUFxSixJQUFLLEdBQUdBLElBQUk7Y0FDakIsSUFBSSxDQUFDLENBQUE3SCxPQUFRLEdBQUdBLE9BQU87Y0FDdkIsSUFBSSxDQUFDLENBQUFOLE9BQVEsR0FBR0EsT0FBTztjQUN2QixJQUFJLENBQUMsQ0FBQUosT0FBUSxHQUFHLElBQUlxSSxRQUFBLENBQUFMLFNBQVMsQ0FBQyxJQUFJLEVBQUU1RixHQUFHLENBQUNwQyxPQUFPLENBQUM7WUFDcEQ7O1VBQ0hBLE9BQUEsQ0FBQXNJLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRkQsSUFBQUssR0FBQSxHQUFBdkksT0FBQTtVQUtNLE1BQU93SSxlQUFlO1lBQ2YsQ0FBQXhHLEdBQUk7WUFDSixDQUFBdkMsR0FBSSxHQUFnQyxJQUFJRSxHQUFHLEVBQUU7WUFDdEQsQ0FBQUssT0FBUTtZQUVSSCxZQUFZbUMsR0FBWTtjQUNwQixJQUFJLENBQUMsQ0FBQUEsR0FBSSxHQUFHQSxHQUFHO1lBQ25CO1lBRUEsSUFBSXlHLFFBQVFBLENBQUMzRixLQUFjO2NBQ3ZCLElBQUksQ0FBQyxDQUFBOUMsT0FBUSxHQUFHOEMsS0FBSztZQUN6QjtZQUVBLENBQUFXLFFBQVMsR0FBR2lGLENBQUM1SixFQUFVLEVBQUVxSixJQUFZLEVBQUU3SCxPQUEwQixLQUFJO2NBQ2pFLElBQUksSUFBSSxDQUFDLENBQUFiLEdBQUksQ0FBQ1MsR0FBRyxDQUFDcEIsRUFBRSxDQUFDLEVBQUUsTUFBTSxJQUFJRSxLQUFLLENBQUMsT0FBT0YsRUFBRSxzQkFBc0IsQ0FBQztjQUV2RSxNQUFNNEksRUFBRSxHQUFHLElBQUlhLEdBQUEsQ0FBQUwsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBbEcsR0FBSSxFQUFFbEQsRUFBRSxFQUFFcUosSUFBSSxFQUFFN0gsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBTixPQUFRLENBQUM7Y0FDMUUsSUFBSSxDQUFDLENBQUFQLEdBQUksQ0FBQ2UsR0FBRyxDQUFDa0gsRUFBRSxDQUFDNUksRUFBRSxFQUFFNEksRUFBRSxDQUFDO1lBQzVCLENBQUM7WUFFRGpFLFFBQVFBLENBQUNoRSxHQUFlO2NBQ3BCQSxHQUFHLENBQUNpSCxPQUFPLENBQUMsQ0FBQztnQkFBQ3BHLE9BQU87Z0JBQUU2SDtjQUFJLENBQUMsRUFBRXJKLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQTJFLFFBQVMsQ0FBQzNFLEVBQUUsRUFBRXFKLElBQUksRUFBRTdILE9BQU8sQ0FBQyxDQUFDO1lBQzNFO1lBRUFOLE9BQU9BLENBQUNsQixFQUFVLEVBQUVzSSxLQUFZLEVBQUV2SSxNQUFzQjtjQUNwRCxNQUFNb0IsTUFBTSxHQUFHLENBQUMsTUFBSztnQkFDakIsSUFBSSxJQUFJLENBQUMsQ0FBQVIsR0FBSSxDQUFDUyxHQUFHLENBQUNwQixFQUFFLENBQUMsRUFBRSxPQUFPQSxFQUFFO2dCQUNoQyxPQUFPQSxFQUFFLENBQUNxQixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBR3JCLEVBQUUsT0FBTyxHQUFHLEdBQUdBLEVBQUUsUUFBUTtjQUMxRCxDQUFDLEVBQUMsQ0FBRTtjQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVcsR0FBSSxDQUFDUyxHQUFHLENBQUNELE1BQU0sQ0FBQyxFQUFFO2dCQUN4QixNQUFNLElBQUlqQixLQUFLLENBQUMsb0JBQW9CRixFQUFFLGFBQWEsQ0FBQzs7Y0FHeEQsTUFBTTRJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQWpJLEdBQUksQ0FBQ1csR0FBRyxDQUFDSCxNQUFNLENBQUM7Y0FDaEMsT0FBT3lILEVBQUUsQ0FBQzFILE9BQU8sQ0FBQ29ILEtBQUssRUFBRXZJLE1BQU0sQ0FBQztZQUNwQztZQUVBaUIsVUFBVUEsQ0FBQTtjQUNOLElBQUksQ0FBQyxDQUFBTCxHQUFJLENBQUNpSCxPQUFPLENBQUNnQixFQUFFLElBQUlBLEVBQUUsQ0FBQzVILFVBQVUsRUFBRSxDQUFDO1lBQzVDO1lBRUEwRyxNQUFNQSxDQUFDL0csR0FBZTtjQUNsQkEsR0FBRyxDQUFDaUgsT0FBTyxDQUFDLENBQUM7Z0JBQUNwRyxPQUFPO2dCQUFFNkg7Y0FBSSxDQUFDLEVBQUVySixFQUFFLEtBQUk7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVcsR0FBSSxDQUFDUyxHQUFHLENBQUNwQixFQUFFLENBQUMsRUFBRTtrQkFDcEIsSUFBSSxDQUFDLENBQUEyRSxRQUFTLENBQUMzRSxFQUFFLEVBQUVxSixJQUFJLEVBQUU3SCxPQUFPLENBQUM7a0JBQ2pDOztnQkFHSixNQUFNb0gsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBakksR0FBSSxDQUFDVyxHQUFHLENBQUN0QixFQUFFLENBQUM7Z0JBQzVCLElBQUk0SSxFQUFFLENBQUNTLElBQUksS0FBS0EsSUFBSSxFQUFFO2dCQUN0QlQsRUFBRSxDQUFDbEIsTUFBTSxDQUFDbEcsT0FBTyxFQUFFNkgsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsQ0FBQW5HLEdBQUksQ0FBQ2lGLEdBQUcsQ0FBQy9CLE9BQU8sQ0FBQyxHQUFHcEcsRUFBRSxTQUFTLENBQUM7Y0FDekMsQ0FBQyxDQUFDO1lBQ047O1VBQ0hjLE9BQUEsQ0FBQTRJLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REQsSUFBQUcsS0FBQSxHQUFBM0ksT0FBQTtVQUVNLE1BQU80SSxPQUFPO1lBQ1AsQ0FBQTVHLEdBQUk7WUFDYixJQUFJQSxHQUFHQSxDQUFBO2NBQ0gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNwQjtZQUVBbkMsWUFBWW1DLEdBQVk7Y0FDcEIsSUFBSSxDQUFDLENBQUFBLEdBQUksR0FBR0EsR0FBRztZQUNuQjtZQUVBOzs7Ozs7OztZQVFBc0YsS0FBS0EsQ0FBQzdGLFNBQWlCLEVBQUUyRixLQUFZLEVBQUVNLEVBQW1CO2NBQ3RELElBQUlqRyxTQUFTLENBQUMxQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzNCO2dCQUNBMEMsU0FBUyxHQUFHaUcsRUFBRSxHQUFHLElBQUFpQixLQUFBLENBQUEvSixPQUFPLEVBQUM4SSxFQUFFLENBQUM1SSxFQUFFLEVBQUUyQyxTQUFTLENBQUMsR0FBR0EsU0FBUztnQkFDdEQsT0FBTyxJQUFJLENBQUMsQ0FBQU8sR0FBSSxDQUFDdkMsR0FBRyxDQUFDTyxPQUFPLENBQUN5QixTQUFTLEVBQUUyRixLQUFLLEVBQUVNLEVBQUUsQ0FBQzs7Y0FHdEQ7OztjQUlBLElBQUlqRyxTQUFTLEtBQUssZ0JBQWdCLEVBQUU7Z0JBQ2hDLE1BQU07a0JBQUN1RTtnQkFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUFoRSxHQUFJO2dCQUMxQixPQUFPO2tCQUFDL0IsTUFBTSxFQUFFK0YsTUFBTSxDQUFDL0YsTUFBTTtrQkFBRStGLE1BQU07a0JBQUVoRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUFBO2dCQUFJLENBQUM7O2NBRzFEO2NBQ0EsSUFBSVAsU0FBUyxLQUFLLDBCQUEwQixFQUFFO2dCQUMxQyxNQUFNO2tCQUFDd0I7Z0JBQU0sQ0FBQyxHQUFHakQsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUMzQyxNQUFNO2tCQUFDd0Q7Z0JBQVMsQ0FBQyxHQUFHeEQsT0FBTyxDQUFDLG9CQUFvQixDQUFDO2dCQUNqRCxPQUFPO2tCQUFDaUQsTUFBTTtrQkFBRU87Z0JBQVMsQ0FBQzs7Y0FHOUIsTUFBTTtnQkFBQzNCO2NBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRyxHQUFJO2NBQ2hDLElBQUlILFlBQVksQ0FBQzNCLEdBQUcsQ0FBQ3VCLFNBQVMsQ0FBQyxFQUFFO2dCQUM3Qjs7OztnQkFJQSxNQUFNO2tCQUFDeUYsWUFBWSxFQUFFbEY7Z0JBQUcsQ0FBQyxHQUFHSCxZQUFZLENBQUN6QixHQUFHLENBQUNxQixTQUFTLENBQUM7Z0JBQ3ZELE9BQU9PLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQ0EsR0FBRyxDQUFDUSxXQUFXLElBQUlSLEdBQUcsQ0FBQ2xDLFVBQVUsRUFBRTtnQkFDL0QsT0FBTytCLFlBQVksQ0FBQ3pCLEdBQUcsQ0FBQ3FCLFNBQVMsQ0FBQzs7Y0FHdEMsTUFBTStGLElBQUksR0FBR3FCLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUMsR0FBR2pILFlBQVksQ0FBQzJGLElBQUksRUFBRSxDQUFDLENBQUM7Y0FDckQsTUFBTSxJQUFJeEksS0FBSyxDQUFDLFdBQVd5QyxTQUFTLHdDQUF3QytGLElBQUksRUFBRSxDQUFDO1lBQ3ZGOztVQUNINUgsT0FBQSxDQUFBZ0osT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZERDtVQUNBO1VBQ00sTUFBT3ZCLEtBQU0sU0FBUXBELEtBQW1CO1lBQzFDL0QsR0FBRyxHQUFJcEIsRUFBVSxJQUFLLElBQUksQ0FBQ3dELElBQUksQ0FBQ3lHLEVBQUUsSUFBSUEsRUFBRSxDQUFDakssRUFBRSxLQUFLQSxFQUFFLENBQUM7WUFFbkQyRSxRQUFRQSxDQUFDNUUsTUFBYyxFQUFFQyxFQUFVO2NBQy9CO2NBQ0EsSUFBSSxJQUFJLENBQUNvQixHQUFHLENBQUNwQixFQUFFLENBQUMsRUFBRTtnQkFDZCxJQUFJa0ssTUFBTSxHQUFHLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDdEMsT0FBTyxDQUFDLENBQUM7a0JBQUM1SCxFQUFFO2tCQUFFRDtnQkFBTSxDQUFDLEtBQUk7a0JBQzFCLE1BQU1vSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDeEUsUUFBUSxDQUFDNUYsTUFBTSxDQUFDLEdBQzNELDZCQUE2QixHQUMzQixTQUFTQSxNQUFNLFlBQVk7a0JBQ2pDbUssTUFBTSxJQUFJLEtBQUtDLENBQUMsS0FBS25LLEVBQUUsS0FBSztnQkFDaEMsQ0FBQyxDQUFDO2dCQUNGa0ssTUFBTSxJQUFJLDRCQUE0QmxLLEVBQUUsWUFBWTtnQkFFcEQsTUFBTSxJQUFJRSxLQUFLLENBQUMsZ0NBQWdDLEdBQzVDLG9CQUFvQkgsTUFBTSx5RUFBeUVDLEVBQUUsS0FBSyxHQUMxRywrQkFBK0JrSyxNQUFNLEVBQUUsQ0FBQzs7Y0FHaEQsSUFBSSxDQUFDckUsSUFBSSxDQUFDO2dCQUFDN0YsRUFBRTtnQkFBRUQ7Y0FBTSxDQUFDLENBQUM7WUFDM0I7O1VBQ0hlLE9BQUEsQ0FBQXlILEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkQsSUFBQTZCLElBQUEsR0FBQWxKLE9BQUE7VUFDQSxJQUFBeUksUUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUFpSSxRQUFBLEdBQUFqSSxPQUFBO1VBQ0EsSUFBQW1KLGFBQUEsR0FBQW5KLE9BQUE7VUFDQSxJQUFBa0MsVUFBQSxHQUFBbEMsT0FBQTtVQUNBLElBQUFvSixPQUFBLEdBQUFwSixPQUFBO1VBRU87VUFBVSxNQUNYNEQsT0FBTztZQUNBLENBQUFvQyxNQUFPO1lBQ2hCLElBQUlBLE1BQU1BLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3ZCO1lBRVMsQ0FBQXJDLFFBQVM7WUFDbEIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDekI7WUFFUyxDQUFBcEIsVUFBVztZQUNwQixJQUFJQSxVQUFVQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUMzQjtZQUVTLENBQUFkLFNBQVU7WUFDbkIsSUFBSUEsU0FBU0EsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDMUI7WUFFUyxDQUFBekIsT0FBUTtZQUVSLENBQUFQLEdBQUk7WUFDYixJQUFJQSxHQUFHQSxDQUFBO2NBQ0gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNwQjtZQUVTLENBQUFHLE9BQVE7WUFDakIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDeEI7WUFFQTtZQUNTLENBQUFpQyxZQUFhLEdBQUcsSUFBSXNILGFBQUEsQ0FBQTlHLE9BQVksQ0FBQyxJQUFJLENBQUM7WUFDL0MsSUFBSVIsWUFBWUEsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDN0I7WUFFUyxDQUFBb0YsR0FBSSxHQUFHLElBQUltQyxPQUFBLENBQUF2RixNQUFNLEVBQUU7WUFDNUIsSUFBSW9ELEdBQUdBLENBQUE7Y0FDSCxPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ3BCO1lBRUFwSCxZQUFZbUcsTUFBYyxFQUFFckMsUUFBZ0I7Y0FDeEMsSUFBSSxDQUFDLENBQUFxQyxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFyQyxRQUFTLEdBQUdBLFFBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQUU7Y0FFekMsSUFBSSxDQUFDLENBQUFwQixVQUFXLEdBQUdvQixRQUFRLEdBQUcsR0FBR3FDLE1BQU0sQ0FBQ3pELFVBQVUsSUFBSW9CLFFBQVEsRUFBRSxHQUFHcUMsTUFBTSxDQUFDekQsVUFBVTtjQUNwRixJQUFJLENBQUMsQ0FBQWQsU0FBVSxHQUFHa0MsUUFBUSxHQUFHLEdBQUdxQyxNQUFNLENBQUN2RSxTQUFTLElBQUlrQyxRQUFRLEVBQUUsR0FBR3FDLE1BQU0sQ0FBQ3ZFLFNBQVM7Y0FFakYsSUFBSSxDQUFDLENBQUFoQyxHQUFJLEdBQUcsSUFBSXlKLElBQUEsQ0FBQVYsZUFBZSxDQUFDLElBQUksQ0FBQztjQUNyQyxJQUFJLENBQUMsQ0FBQXhJLE9BQVEsR0FBRyxJQUFJeUksUUFBQSxDQUFBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2NBQ2pDLElBQUksQ0FBQyxDQUFBbkosR0FBSSxDQUFDZ0osUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBekksT0FBUTtjQUNsQyxJQUFJLENBQUMsQ0FBQUosT0FBUSxHQUFHLElBQUlxSSxRQUFBLENBQUE1RixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUFyQyxPQUFRLENBQUM7Y0FFMUNrQyxVQUFBLENBQUFHLE9BQVMsQ0FBQ29CLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDNUI7WUFFQSxDQUFBakIsV0FBWSxHQUFHLEtBQUs7WUFDcEIsSUFBSUEsV0FBV0EsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDNUI7WUFFQTFDLFVBQVVBLENBQUNMLEdBQWdCO2NBQ3ZCLElBQUksSUFBSSxDQUFDLENBQUErQyxXQUFZLEVBQUUsTUFBTSxJQUFJeEQsS0FBSyxDQUFDLDZCQUE2QixDQUFDO2NBQ3JFLElBQUksQ0FBQyxDQUFBd0QsV0FBWSxHQUFHLElBQUk7Y0FDeEIvQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUFBLEdBQUksQ0FBQ2dFLFFBQVEsQ0FBQ2hFLEdBQUcsQ0FBQztjQUM5QixJQUFJLENBQUNHLE9BQU8sQ0FBQzRHLE1BQU0sRUFBRTtjQUNyQixJQUFJLENBQUMsQ0FBQS9HLEdBQUksQ0FBQ0ssVUFBVSxFQUFFO1lBQzFCO1lBRUEwRyxNQUFNQSxDQUFDL0csR0FBZTtjQUNsQixJQUFJLENBQUMsQ0FBQUEsR0FBSSxDQUFDK0csTUFBTSxDQUFDL0csR0FBRyxDQUFDO2NBQ3JCLElBQUksQ0FBQ0csT0FBTyxDQUFDNEcsTUFBTSxFQUFFO2NBQ3JCLElBQUksQ0FBQyxDQUFBL0csR0FBSSxDQUFDSyxVQUFVLEVBQUU7Y0FDdEIsSUFBSSxDQUFDLENBQUFtSCxHQUFJLENBQUMvQixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQy9COztVQUNIdEYsT0FBQSxDQUFBZ0UsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OzsyQ0NyRmMsSUFBSSxjQUFjakUsR0FBRztZQUNoQzhELFFBQVFBLENBQUN6QixHQUFZO2NBQ2pCLElBQUksQ0FBQ3hCLEdBQUcsQ0FBQ3dCLEdBQUcsQ0FBQ08sVUFBVSxFQUFFUCxHQUFHLENBQUM7WUFDakM7V0FDSCxDLENBQUEiLCJpZ25vcmVMaXN0IjpbXX0=