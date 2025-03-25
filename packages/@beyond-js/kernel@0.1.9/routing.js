System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, routing, URI;
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
        const dependencies = new Map([["@beyond-js/backend", null], ["@types/node", "18.11.18"], ["@beyond-js/kernel", "0.1.9"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/kernel@0.1.9/routing"
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
        hash: 1835933971,
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
        hash: 1121896291,
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
              if (uri.uri === redirected) return; // Routing function returned the actual route
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
              const {
                hash,
                pathname,
                search
              } = location;
              const _uri = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : pathname + search + hash;
              if (this.#uri?.uri === _uri) return;
              const cancellationTokenId = this.#cancellationToken.reset();
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
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcG9zaXRpb24iLCJyZXF1aXJlIiwiX3JlY29yZHMiLCJCZXlvbmRIaXN0b3J5IiwicG9zaXRpb24iLCJyZWNvcmRzIiwidmFsaWQiLCJjdXJyZW50IiwidXJpIiwiaW5pdGlhbCIsImhpc3RvcnkiLCJsZW5ndGgiLCJwcm9jZXNzQnJvd3NlclVSSSIsIiNwcm9jZXNzQnJvd3NlclVSSSIsInJvdXRpbmciLCJSb3V0aW5nTW9kZUVudW0iLCJSb3V0aW5nTW9kZSIsIm1vZGUiLCJIYXNoIiwic3Vic3RyIiwicHVzaCIsIiNwdXNoIiwicmVzZXQiLCJzYXZlIiwicmVwbGFjZVN0YXRlIiwic3RhdGUiLCJ0aXRsZSIsIkVycm9yIiwidXBkYXRlQ3VycmVudFVSSSIsInZhbHVlIiwicHVzaFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJiYWNrIiwicHJldmlvdXMiLCJnbyIsImZvcndhcmQiLCJmb2xsb3dpbmciLCJjb25zdHJ1Y3RvciIsIk1vZGUiLCJIaXN0b3J5UG9zaXRpb24iLCJIaXN0b3J5UmVjb3JkcyIsInNsaWNlIiwiZXhwb3J0cyIsImNoZWNrIiwiY29uc29sZSIsImVycm9yIiwiX19iZXlvbmRfbmF2aWdhdGlvbl9wb3NpdGlvbiIsImVudHJpZXMiLCJwYXJzZWQiLCJzdG9yZWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJleGMiLCJzdGFjayIsIkFycmF5Iiwid2FybmluZyIsIndhcm4iLCJzYW5pdGl6ZVVSSSIsIiNzYW5pdGl6ZVVSSSIsInN0YXJ0c1dpdGgiLCJnZXQiLCJpbmRleCIsImZpbHRlciIsImVudHJ5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIl91cmkyIiwiX2NvcmUiLCJfaGlzdG9yeSIsInNlcnZlcnNpZGUiLCJwcm9jZXNzIiwiUm91dGluZyIsIkV2ZW50cyIsImluaXRpYWxpc2VkIiwicmVzb2x2ZSIsInJlYWR5IiwiUHJvbWlzZSIsIm1pc3NpbmciLCJyZWRpcmVjdCIsInJlc29sdmVDb25maWd1cmVkIiwiY29uZmlndXJlZCIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYmltcG9ydCIsInRoZW4iLCJkZWZhdWx0IiwiY29uZmlnIiwicm91dGluZ01vZGUiLCJQYXRobmFtZSIsInByb3RvY29sIiwiaW5jbHVkZXMiLCJyZWRpcmVjdGVkIiwidXBkYXRlIiwiY2F0Y2giLCJjYW5jZWxsYXRpb25Ub2tlbiIsIkNhbmNlbGxhdGlvblRva2VuIiwiX3VyaSIsImNhbmNlbGxhdGlvblRva2VuSWQiLCJVUkkiLCJ0cmlnZ2VyIiwic3RhcnRlZCIsInNldHVwIiwiYmV5b25kIiwibmF2aWdhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiUXVlcnlTdHJpbmciLCJNYXAiLCJ0cmltIiwic3BsaXQiLCJpIiwicGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwidW5kZWZpbmVkIiwic2V0IiwiX3F1ZXJ5c3RyaW5nIiwicXMiLCJ1Il0sInNvdXJjZXMiOlsiL2hpc3RvcnkvaGlzdG9yeS50cyIsIi9oaXN0b3J5L3Bvc2l0aW9uLnRzIiwiL2hpc3RvcnkvcmVjb3Jkcy50cyIsIi9yb3V0aW5nLnRzIiwiL3VyaS9xdWVyeXN0cmluZy50cyIsIi91cmkvdXJpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUdBOzs7O1VBSU0sTUFBT0UsYUFBYTtZQUNiLENBQUFDLFFBQVM7WUFDbEIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDekI7WUFFUyxDQUFBQyxPQUFRO1lBQ2pCLElBQUlBLE9BQU9BLENBQUE7Y0FDUCxP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