System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, routing, URI, __beyond_pkg, hmr;
  _export({
    routing: void 0,
    URI: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["socket.io-client", "4.7.5"], ["@beyond-js/routing", "0.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.19"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/routing@0.0.1/routing"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./history/history
      *********************************/
      ims.set('./history/history', {
        hash: 975757917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondHistory = void 0;
          var _position = require("./position");
          var _records = require("./records");
          /**
           * Beyond keeps its own history list
           * @constructor
           */
          class BeyondHistory {
            #position;
            get position() {
              return this.#position;
            }
            #records;
            get records() {
              return this.#records;
            }
            get valid() {
              return this.#records.valid;
            }
            get current() {
              return this.valid ? this.#records.current.uri : void 0;
            }
            #initial = history.length;
            get initial() {
              return this.#initial;
            }
            /**
             * Process the browser URI that takes into consideration the routing mode
             *
             * @param {string} uri The internal URI (always starts with '/')
             * @return {string} The URI to be pushed or replaced in the browser considering the routing mode
             * @private
             */
            #processBrowserURI(uri) {
              void this;
              if (uri === void 0) return;
              const {
                routing
              } = require('../routing');
              const RoutingModeEnum = require('../routing').RoutingMode;
              return routing.mode === RoutingModeEnum.Hash ? `#${uri.substr(1)}` : uri;
            }
            #push(uri) {
              this.#records.reset();
              this.#records.push(uri);
              this.#position.save(this.#records.length);
            }
            replaceState(state, title, uri) {
              state = state ? state : {};
              if (typeof state !== 'object') throw new Error('Invalid state parameter');
              this.#records.updateCurrentURI(uri);
              // The uri in the browser considering the routing mode
              const position = this.#position.value;
              history.replaceState(state, title, this.#processBrowserURI(uri));
              this.#position.save(position);
            }
            pushState(uri, state) {
              if (uri === `${location.pathname}${location.search}${location.hash}`) return;
              state = state ? state : {};
              if (typeof state !== 'object') throw new Error('Invalid state parameter');
              history.pushState(state, null, this.#processBrowserURI(uri));
              this.#push(uri);
            }
            back() {
              const previous = this.#records.previous?.position;
              const current = this.#records.current?.position;
              if (!previous) return;
              history.go(previous - current);
            }
            forward() {
              const following = this.#records.following?.position;
              const current = this.#records.current?.position;
              if (!following) return;
              history.go(following - current);
            }
            constructor(routing, Mode) {
              this.#position = new _position.HistoryPosition();
              this.#records = new _records.HistoryRecords(this.#position);
              if (this.#position.value === void 0) {
                // It is not a refresh of a previously navigated page
                let uri = routing.mode === Mode.Hash ? location.hash.slice(1) : `${location.pathname}${location.search}${location.hash}`;
                this.#push(uri);
              }
            }
          }
          exports.BeyondHistory = BeyondHistory;
        }
      });

      /**********************************
      INTERNAL MODULE: ./history/position
      **********************************/

      ims.set('./history/position', {
        hash: 3613484025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HistoryPosition = void 0;
          /**
           * The position of the navigation is stored this way:
           *      1. In the state of each page (the history.state object), it is stored the position
           *         in which the page is located. To achieve this, the __beyond_navigation_position property
           *         is added to the state object.
           *      2. In the sessionStorage is stored the current position (__beyond_navigation_position)
           */
          class HistoryPosition {
            check() {
              if (this.value) return true;
              console.error('History state is not defined. ' + 'This happen when state is changed outside the beyond defined navigation flows.');
              return false;
            }
            /**
             * Returns the position from the history.state
             * @returns {number | undefined}
             */
            get value() {
              return history.state?.__beyond_navigation_position;
            }
            save(position) {
              const state = history.state ? history.state : {};
              state.__beyond_navigation_position = position;
              history.replaceState(state, null);
            }
          }
          exports.HistoryPosition = HistoryPosition;
        }
      });

      /*********************************
      INTERNAL MODULE: ./history/records
      *********************************/

      ims.set('./history/records', {
        hash: 3466552890,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HistoryRecords = void 0;
          class HistoryRecords {
            #position;
            #valid = true;
            get valid() {
              return this.#valid;
            }
            #entries = [];
            get entries() {
              return this.#entries.slice();
            }
            get length() {
              return this.#entries.length;
            }
            get current() {
              return this.#entries[this.#position.value - 1];
            }
            get previous() {
              const previous = this.#position.value - 2;
              if (previous < 0) return;
              return this.#entries[previous];
            }
            get following() {
              const following = this.#position.value;
              if (following >= this.#entries.length) return;
              return this.#entries[following];
            }
            constructor(position) {
              this.#position = position;
              let parsed;
              try {
                const stored = sessionStorage.getItem('__beyond_navigation_records');
                /**
                 * If user cleans site data, the session storage is deleted, but the history position state
                 * remains, so set the records as invalid
                 */
                if (!stored && position.value !== void 0) {
                  this.#valid = false;
                  return;
                }
                parsed = stored ? JSON.parse(stored) : [];
              } catch (exc) {
                this.#valid = false;
                console.error('Error loading beyond navigation state', exc instanceof Error ? exc.stack : exc);
                this.#entries = [];
              }
              if (!(parsed instanceof Array)) {
                const warning = 'The beyond navigation data, stored in session store is invalid.';
                console.warn(warning, parsed);
              }
              this.#entries = parsed;
            }
            /**
             * Set the URI always starting with '/' no matter the routing mode (hash or pathname)
             *
             * @param {string} uri
             * @return {string}
             */
            #sanitizeURI(uri) {
              void this;
              if (uri === void 0) return;
              return uri.startsWith('/') ? uri : `/${uri}`;
            }
            get(index) {
              return this.#entries[index];
            }
            /**
             * Push a uri to the records stored in the sessionStorage
             * @param {string} uri
             */
            push(uri) {
              uri = this.#sanitizeURI(uri);
              this.#entries.push({
                uri,
                position: history.length
              });
              this.save();
            }
            /**
             * Reset the list of records from the current position
             * This is required when:
             *      1. The list of browsed pages is greater than one (ex: page1 and page2)
             *      2. The user goes back in the history (ex: to position 1: page1)
             *      3. The user navigates another page (ex: page3)
             *
             * This method is required in step 3, to clean the records from position 1, and after this
             * execution, the navigation flow can push page3
             */
            reset() {
              const position = this.#position.value;
              if (position) return;
              this.#entries = this.#entries.filter(entry => entry.position < history.length);
            }
            updateCurrentURI(uri) {
              if (!this.#valid) return;
              const position = this.#position.value;
              uri = this.#sanitizeURI(uri);
              this.#entries[position - 1] = {
                uri,
                position: history.length
              };
              this.save();
            }
            save() {
              if (!this.#valid) return;
              sessionStorage.setItem('__beyond_navigation_records', JSON.stringify(this.#entries));
            }
          }
          exports.HistoryRecords = HistoryRecords;
        }
      });

      /*************************
      INTERNAL MODULE: ./routing
      *************************/

      ims.set('./routing', {
        hash: 156439042,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.routing = exports.RoutingMode = exports.Routing = void 0;
          var _uri2 = require("./uri/uri");
          var _core = require("@beyond-js/kernel/core");
          var _history = require("./history/history");
          var RoutingMode;
          (function (RoutingMode) {
            RoutingMode[RoutingMode["Hash"] = 0] = "Hash";
            RoutingMode[RoutingMode["Pathname"] = 1] = "Pathname";
          })(RoutingMode || (exports.RoutingMode = RoutingMode = {}));
          const serverside = typeof process === 'object';
          class Routing extends _core.Events {
            #mode;
            get mode() {
              return this.#mode;
            }
            #history;
            get history() {
              return this.#history;
            }
            #initialised = false;
            get initialised() {
              return this.#initialised;
            }
            #resolve;
            #ready = new Promise(resolve => this.#resolve = resolve);
            get ready() {
              return this.#ready;
            }
            #uri;
            get uri() {
              return this.#uri;
            }
            missing;
            redirect;
            #resolveConfigured;
            #configured = new Promise(resolve => this.#resolveConfigured = resolve);
            constructor() {
              super();
              // @TODO: move to some kind of initialization / setup
              const {
                specifier
              } = globalThis.__app_package;
              !serverside && bimport(`${specifier}/config`).then(({
                default: config
              }) => {
                let configured = config.routing?.mode;
                let routingMode = configured === 'hash' ? RoutingMode.Hash : RoutingMode.Pathname;
                location.protocol === 'file:' && (routingMode = RoutingMode.Hash);
                ![0, 1].includes(routingMode) && (routingMode = location.protocol === 'file:' ? RoutingMode.Hash : RoutingMode.Pathname);
                this.#mode = routingMode;
                this.#history = new _history.BeyondHistory(this, RoutingMode);
                this.#resolveConfigured();
              });
            }
            #redirect = async uri => {
              if (typeof this.redirect !== 'function') return;
              const redirected = await this.redirect(uri);
              if (!redirected) return;
              if (typeof redirected !== 'string') {
                console.error(`Invalid route value set by custom routing function`, redirected);
                return;
              }
              if (uri.pathname === redirected) return; // Routing function returned the actual route
              this.pushState(redirected);
              return true;
            };
            pushState(uri, state) {
              this.#configured.then(() => {
                this.#history.pushState(uri, state);
                this.update().catch(exc => console.error(exc.stack));
              });
            }
            replaceState(state, title, uri) {
              this.#configured.then(() => {
                this.#history.replaceState(state, title, uri);
                this.update().catch(exc => console.error(exc.stack));
              });
            }
            // Avoid to continue the execution on asynchronous calls, when a newest call's been made
            #cancellationToken = new _core.CancellationToken();
            update = async () => {
              const cancellationTokenId = this.#cancellationToken.reset();
              const {
                hash,
                pathname,
                search
              } = location;
              const _uri = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : pathname + search + hash;
              if (this.#uri?.uri === _uri) return;
              const uri = this.#uri = new _uri2.URI(_uri);
              // Check for uri redirect
              const redirected = await this.#redirect(uri);
              if (!this.#cancellationToken.check(cancellationTokenId)) return;
              if (redirected) return; // The page was redirected to another uri
              // Verify the state of the history registry to check for possible errors
              this.#history && uri.uri !== this.#history.current && console.error(`History current "${this.#history.current}" is not equal to actual uri "${uri.uri}"`);
              this.#initialised ? this.trigger('change') : this.#resolve();
              this.#initialised = true;
            };
            // Wait for start.js be completed, as routing.redirect must be set before initialising routing
            #started = false;
            setup() {
              this.#started = true;
              !serverside && this.update().catch(exc => console.error(exc.stack));
            }
            back() {
              this.#history.back();
            }
            forward() {
              this.#history.forward();
            }
          }
          exports.Routing = Routing;
          /*bundle*/
          const routing = exports.routing = new Routing();
          globalThis.routing = routing;
          !serverside && (beyond.navigate = (uri, state) => routing.pushState(uri, state));
          !serverside && (beyond.pushState = (uri, state) => routing.pushState(uri, state));
          !serverside && (beyond.back = () => routing.back());
          !serverside && (beyond.forward = () => routing.forward());
          // Only on client side
          !serverside && window.addEventListener('popstate', () => routing.update().catch(exc => console.error(exc.stack)));
        }
      });

      /*********************************
      INTERNAL MODULE: ./uri/querystring
      *********************************/

      ims.set('./uri/querystring', {
        hash: 187911159,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QueryString = void 0;
          class QueryString extends Map {
            constructor(search) {
              super();
              if (search.trim() === '') return;
              search = search.slice(0, 1) === '?' ? search.slice(1) : search;
              const split = search.split('&');
              for (let i = 0; i < split.length; ++i) {
                const param = split[i].split('=', 2);
                const value = param[1] ? decodeURIComponent(param[1].replace(/\+/g, ' ')) : undefined;
                this.set(param[0], value);
              }
            }
          }
          exports.QueryString = QueryString;
        }
      });

      /*************************
      INTERNAL MODULE: ./uri/uri
      *************************/

      ims.set('./uri/uri', {
        hash: 748332499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.URI = void 0;
          var _querystring = require("./querystring");
          /*bundle*/ /**
                      * Uri parser
                      *
                      * @param href {string} The href to be parsed
                      * @constructor
                      */

          class URI {
            #uri;
            get uri() {
              return this.#uri;
            }
            #pathname;
            get pathname() {
              return this.#pathname;
            }
            #search;
            get search() {
              return this.#search;
            }
            #qs;
            get qs() {
              return this.#qs;
            }
            #hash;
            get hash() {
              return this.#hash;
            }
            constructor(uri) {
              this.#uri = uri;
              const [u, hash] = uri.split('#');
              const [pathname, search] = u.split('?');
              this.#pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
              this.#search = search ? search : '';
              this.#qs = new _querystring.QueryString(this.#search);
              this.#hash = hash;
            }
          }
          exports.URI = URI;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./routing",
        "from": "routing",
        "name": "routing"
      }, {
        "im": "./uri/uri",
        "from": "URI",
        "name": "URI"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'routing') && _export("routing", routing = require ? require('./routing').routing : value);
        (require || prop === 'URI') && _export("URI", URI = require ? require('./uri/uri').URI : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcG9zaXRpb24iLCJyZXF1aXJlIiwiX3JlY29yZHMiLCJCZXlvbmRIaXN0b3J5IiwicG9zaXRpb24iLCJyZWNvcmRzIiwidmFsaWQiLCJjdXJyZW50IiwidXJpIiwiaW5pdGlhbCIsImhpc3RvcnkiLCJsZW5ndGgiLCJwcm9jZXNzQnJvd3NlclVSSSIsIiNwcm9jZXNzQnJvd3NlclVSSSIsInJvdXRpbmciLCJSb3V0aW5nTW9kZUVudW0iLCJSb3V0aW5nTW9kZSIsIm1vZGUiLCJIYXNoIiwic3Vic3RyIiwicHVzaCIsIiNwdXNoIiwicmVzZXQiLCJzYXZlIiwicmVwbGFjZVN0YXRlIiwic3RhdGUiLCJ0aXRsZSIsIkVycm9yIiwidXBkYXRlQ3VycmVudFVSSSIsInZhbHVlIiwicHVzaFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJiYWNrIiwicHJldmlvdXMiLCJnbyIsImZvcndhcmQiLCJmb2xsb3dpbmciLCJjb25zdHJ1Y3RvciIsIk1vZGUiLCJIaXN0b3J5UG9zaXRpb24iLCJIaXN0b3J5UmVjb3JkcyIsInNsaWNlIiwiZXhwb3J0cyIsImNoZWNrIiwiY29uc29sZSIsImVycm9yIiwiX19iZXlvbmRfbmF2aWdhdGlvbl9wb3NpdGlvbiIsImVudHJpZXMiLCJwYXJzZWQiLCJzdG9yZWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJleGMiLCJzdGFjayIsIkFycmF5Iiwid2FybmluZyIsIndhcm4iLCJzYW5pdGl6ZVVSSSIsIiNzYW5pdGl6ZVVSSSIsInN0YXJ0c1dpdGgiLCJnZXQiLCJpbmRleCIsImZpbHRlciIsImVudHJ5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIl91cmkyIiwiX2NvcmUiLCJfaGlzdG9yeSIsInNlcnZlcnNpZGUiLCJwcm9jZXNzIiwiUm91dGluZyIsIkV2ZW50cyIsImluaXRpYWxpc2VkIiwicmVzb2x2ZSIsInJlYWR5IiwiUHJvbWlzZSIsIm1pc3NpbmciLCJyZWRpcmVjdCIsInJlc29sdmVDb25maWd1cmVkIiwiY29uZmlndXJlZCIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYmltcG9ydCIsInRoZW4iLCJkZWZhdWx0IiwiY29uZmlnIiwicm91dGluZ01vZGUiLCJQYXRobmFtZSIsInByb3RvY29sIiwiaW5jbHVkZXMiLCJyZWRpcmVjdGVkIiwidXBkYXRlIiwiY2F0Y2giLCJjYW5jZWxsYXRpb25Ub2tlbiIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2FuY2VsbGF0aW9uVG9rZW5JZCIsIl91cmkiLCJVUkkiLCJ0cmlnZ2VyIiwic3RhcnRlZCIsInNldHVwIiwiYmV5b25kIiwibmF2aWdhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiUXVlcnlTdHJpbmciLCJNYXAiLCJ0cmltIiwic3BsaXQiLCJpIiwicGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwidW5kZWZpbmVkIiwic2V0IiwiX3F1ZXJ5c3RyaW5nIiwicXMiLCJ1Il0sInNvdXJjZXMiOlsiL2hpc3RvcnkvaGlzdG9yeS50cyIsIi9oaXN0b3J5L3Bvc2l0aW9uLnRzIiwiL2hpc3RvcnkvcmVjb3Jkcy50cyIsIi9yb3V0aW5nLnRzIiwiL3VyaS9xdWVyeXN0cmluZy50cyIsIi91cmkvdXJpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUdBOzs7O1VBSU0sTUFBT0UsYUFBYTtZQUNoQixDQUFBQyxRQUFTO1lBQ2xCLElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRVMsQ0FBQUMsT0FBUTtZQUNqQixJQUFJQSxPQUFPQSxDQUFBO2NBQ1Ys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