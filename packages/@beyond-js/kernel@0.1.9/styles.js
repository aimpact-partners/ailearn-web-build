System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, DependenciesStyles, styles, V1Styles, __beyond_pkg, hmr;
  _export({
    DependenciesStyles: void 0,
    styles: void 0,
    V1Styles: void 0
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
          "vspecifier": "@beyond-js/kernel@0.1.9/styles"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./dependencies-styles
      *************************************/
      ims.set('./dependencies-styles', {
        hash: 282408023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DependenciesStyles = void 0;
          var _bundle = require("@beyond-js/kernel/bundle");
          var _core = require("@beyond-js/kernel/core");
          var _registry = require("./registry");
          /*bundle*/
          class DependenciesStyles extends _core.Events {
            #vspecifier;
            #elements;
            get elements() {
              return this.#elements;
            }
            constructor(vspecifier) {
              super();
              this.#vspecifier = vspecifier;
              const change = () => this.trigger('change');
              this.#elements = new Set();
              const recursive = vspecifier => {
                if (!vspecifier) {
                  console.trace('Bundle vspecifier not defined');
                  return;
                }
                if (!_bundle.instances.has(vspecifier)) {
                  console.error(`Bundle id "${vspecifier}" not found. Try refreshing the page.\n` + `If the problem still persist, delete the BeyondJS cache and try again.`);
                  return;
                }
                const bundle = _bundle.instances.get(vspecifier);
                if (vspecifier !== this.#vspecifier && bundle.type === 'widget') return;
                // Check if the bundle has styles
                const styles = _registry.styles.get(vspecifier);
                if (styles && styles.engine !== 'legacy') {
                  this.#elements.add(styles);
                  styles.on('change', change);
                }
                const {
                  dependencies
                } = bundle.package();
                dependencies.forEach(dependency => {
                  const pkg = dependency.__beyond_pkg;
                  if (!pkg) return;
                  recursive(pkg.vspecifier);
                });
              };
              recursive(this.#vspecifier);
            }
          }
          exports.DependenciesStyles = DependenciesStyles;
        }
      });

      /************************
      INTERNAL MODULE: ./legacy
      ************************/

      ims.set('./legacy', {
        hash: 859564821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          class _default {
            get engine() {
              return 'legacy';
            }
            #bundle;
            #value;
            get value() {
              return this.#value;
            }
            // Is the stylesheet appended to the DOM of the page (not a shadow dom of a widget)
            #appended = false;
            get appended() {
              return this.#appended;
            }
            constructor(bundle, value) {
              this.#bundle = bundle;
              const module = (() => {
                const module = bundle.split('/');
                module.pop();
                return module.join('/');
              })();
              // Find and replace #host...
              const regexp = /#host\.([\w\d]*)#([^.]*\.[\w\d]*)/g;
              this.#value = value.replace(regexp, (match, host, resource) => {
                if (host === 'module' || host === 'library') {
                  return `${module}/${resource}`;
                } else if (host === 'application') {
                  return resource;
                }
                console.warn(`Invalid css host specification on bundle "${bundle}"`, match);
              });
            }
            /**
             * @deprecated Only required by legacy applications
             */
            appendToDOM(is) {
              if (this.#appended) {
                const previous = document.querySelectorAll(`:scope > [bundle="${this.#bundle}"]`)[0];
                previous && document.removeChild(previous);
              }
              const css = document.createElement('style');
              css.appendChild(document.createTextNode(this.#value));
              is && css.setAttribute('is', is);
              document.getElementsByTagName('head')[0].appendChild(css);
              this.#appended = true;
            }
          }
          exports.default = _default;
        }
      });

      /**************************
      INTERNAL MODULE: ./registry
      **************************/

      ims.set('./registry', {
        hash: 2402124624,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.styles = void 0;
          var _legacy = require("./legacy");
          var _v = require("./v1");
          class Registry {
            #registry = new Map();
            register(vspecifier, value) {
              if (this.#registry.has(vspecifier)) return;
              const styles = value ? new _legacy.default(vspecifier, value) : new _v.V1Styles(vspecifier);
              this.#registry.set(vspecifier, styles);
              return styles;
            }
            has(vspecifier) {
              return this.#registry.has(vspecifier);
            }
            get(vspecifier) {
              return this.#registry.get(vspecifier);
            }
          }
          /*bundle*/
          const styles = exports.styles = new Registry();
          // Just for legacy projects
          globalThis.beyondLegacyStyles = styles;
        }
      });

      /********************
      INTERNAL MODULE: ./v1
      ********************/

      ims.set('./v1', {
        hash: 1891964101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.V1Styles = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _bundle = require("@beyond-js/kernel/bundle");
          /*bundle*/
          class V1Styles extends _core.Events {
            get engine() {
              return 'v1';
            }
            /**
             * The bundle object
             *
             * @type {Bundle}
             * @private
             */
            #bundle;
            get bundle() {
              return this.#bundle;
            }
            /**
             * The autoincremental HMR version
             *
             * @type {number}
             * @private
             */
            #version = 0;
            get version() {
              return this.#version;
            }
            /**
             * The href without the version qs parameter
             *
             * @type {string}
             * @private
             */
            #resource;
            get resource() {
              return this.#resource;
            }
            /**
             * The url of the stylesheet including the HMR version qs parameter
             *
             * @return {string}
             */
            get href() {
              const version = this.#version ? `?version=${this.#version}` : '';
              return `${this.#resource}${version}`;
            }
            constructor(resource) {
              super();
              this.#bundle = _bundle.instances.get(resource);
              this.#resource = (() => {
                if (typeof process === 'object') {
                  const split = resource.split('/');
                  const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
                  const subpath = split.join('/');
                  return `##_!${pkg}!_##${subpath}.css`;
                }
                let {
                  uri
                } = this.#bundle;
                /**
                 * validate if the uri belongs to the CDN
                 */
                const regexp = new RegExp('^https?://cdn.beyondjs.com', 'i');
                if (regexp.test(uri)) {
                  const {
                    origin,
                    pathname,
                    searchParams
                  } = new URL(uri);
                  const version = searchParams.has('version') ? `&version=${searchParams.get('version')}` : '';
                  return origin + pathname + '?css' + version;
                }
                uri = uri.slice(0, uri.length - 3); // Remove the .js extension
                return `${uri}.css`;
              })();
            }
            /**
             * Called by HMR in development environment
             */
            change() {
              this.#version++;
              this.trigger('change');
            }
          }
          exports.V1Styles = V1Styles;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./dependencies-styles",
        "from": "DependenciesStyles",
        "name": "DependenciesStyles"
      }, {
        "im": "./registry",
        "from": "styles",
        "name": "styles"
      }, {
        "im": "./v1",
        "from": "V1Styles",
        "name": "V1Styles"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DependenciesStyles') && _export("DependenciesStyles", DependenciesStyles = require ? require('./dependencies-styles').DependenciesStyles : value);
        (require || prop === 'styles') && _export("styles", styles = require ? require('./registry').styles : value);
        (require || prop === 'V1Styles') && _export("V1Styles", V1Styles = require ? require('./v1').V1Styles : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnVuZGxlIiwicmVxdWlyZSIsIl9jb3JlIiwiX3JlZ2lzdHJ5IiwiRGVwZW5kZW5jaWVzU3R5bGVzIiwiRXZlbnRzIiwidnNwZWNpZmllciIsImVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJjaGFuZ2UiLCJ0cmlnZ2VyIiwiU2V0IiwicmVjdXJzaXZlIiwiY29uc29sZSIsInRyYWNlIiwiaW5zdGFuY2VzIiwiaGFzIiwiZXJyb3IiLCJidW5kbGUiLCJnZXQiLCJ0eXBlIiwic3R5bGVzIiwiZW5naW5lIiwiYWRkIiwib24iLCJkZXBlbmRlbmNpZXMiLCJwYWNrYWdlIiwiZm9yRWFjaCIsImRlcGVuZGVuY3kiLCJwa2ciLCJfX2JleW9uZF9wa2ciLCJleHBvcnRzIiwiX2RlZmF1bHQiLCJ2YWx1ZSIsImFwcGVuZGVkIiwibW9kdWxlIiwic3BsaXQiLCJwb3AiLCJqb2luIiwicmVnZXhwIiwicmVwbGFjZSIsIm1hdGNoIiwiaG9zdCIsInJlc291cmNlIiwid2FybiIsImFwcGVuZFRvRE9NIiwiaXMiLCJwcmV2aW91cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUNoaWxkIiwiY3NzIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHQiLCJfbGVnYWN5IiwiX3YiLCJSZWdpc3RyeSIsInJlZ2lzdHJ5IiwiTWFwIiwicmVnaXN0ZXIiLCJWMVN0eWxlcyIsInNldCIsImdsb2JhbFRoaXMiLCJiZXlvbmRMZWdhY3lTdHlsZXMiLCJ2ZXJzaW9uIiwiaHJlZiIsInByb2Nlc3MiLCJzdGFydHNXaXRoIiwic2hpZnQiLCJzdWJwYXRoIiwidXJpIiwiUmVnRXhwIiwidGVzdCIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwic2xpY2UiLCJsZW5ndGgiXSwic291cmNlcyI6WyIvZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsIi9sZWdhY3kudHMiLCIvcmVnaXN0cnkudHMiLCIvdjEudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsU0FBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxrQkFBbUIsU0FBUUYsS0FBQSxDQUFBRyxNQUFNO1lBQzFCLENBQUFDLFVBQVc7WUFDWCxDQUFBQyxRQUFTO1lBQ2xCLElBQUlBLFFBQVFBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3pCO1lBRUFDLFlBQVlGLFVBQWtCO2NBQzFCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxVQUFXLEdBQUdBLFVBQVU7Y0FFN0IsTUFBTUcsTUFBTSxHQUFHQSxDQUFBLEtBQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO2NBRTNDLElBQUksQ0FBQyxDQUFBSCxRQUFTLEdBQUcsSUFBSUksR0FBRyxFQUFFO2NBQzFCLE1BQU1DLFNBQVMsR0FBSU4sVUFBa0IsSUFBSTtnQkFDckMsSUFBSSxDQUFDQSxVQUFVLEVBQUU7a0JBQ2JPLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLCtCQUErQixDQUFDO2tCQUM5Qzs7Z0JBR0osSUFBSSxDQUFDZCxPQUFBLENBQUFlLFNBQU8sQ0FBQ0MsR0FBRyxDQUFDVixVQUFVLENBQUMsRUFBRTtrQkFDMUJPLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLGNBQWNYLFVBQVUseUNBQXlDLEdBQzNFLHdFQUF3RSxDQUFDO2tCQUM3RTs7Z0JBRUosTUFBTVksTUFBTSxHQUFHbEIsT0FBQSxDQUFBZSxTQUFPLENBQUNJLEdBQUcsQ0FBQ2IsVUFBVSxDQUFDO2dCQUN0QyxJQUFJQSxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUFBLFVBQVcsSUFBSVksTUFBTSxDQUFDRSxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUVqRTtnQkFDQSxNQUFNQyxNQUFNLEdBQWFsQixTQUFBLENBQUFrQixNQUFRLENBQUNGLEdBQUcsQ0FBQ2IsVUFBVSxDQUFDO2dCQUNqRCxJQUFJZSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsTUFBTSxLQUFLLFFBQVEsRUFBRTtrQkFDdEMsSUFBSSxDQUFDLENBQUFmLFFBQVMsQ0FBQ2dCLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDO2tCQUMxQkEsTUFBTSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFZixNQUFNLENBQUM7O2dCQUcvQixNQUFNO2tCQUFDZ0I7Z0JBQVksQ0FBQyxHQUFHUCxNQUFNLENBQUNRLE9BQU8sRUFBRTtnQkFDdkNELFlBQVksQ0FBQ0UsT0FBTyxDQUFFQyxVQUFlLElBQUk7a0JBQ3JDLE1BQU1DLEdBQUcsR0FBWUQsVUFBVSxDQUFDRSxZQUFZO2tCQUM1QyxJQUFJLENBQUNELEdBQUcsRUFBRTtrQkFFVmpCLFNBQVMsQ0FBQ2lCLEdBQUcsQ0FBQ3ZCLFVBQVUsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDO2NBQ04sQ0FBQztjQUNETSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUFOLFVBQVcsQ0FBQztZQUMvQjs7VUFDSHlCLE9BQUEsQ0FBQTNCLGtCQUFBLEdBQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EYSxNQUFBNEIsUUFBQTtZQUNWLElBQUlWLE1BQU1BLENBQUE7Y0FDTixPQUFPLFFBQVE7WUFDbkI7WUFFUyxDQUFBSixNQUFPO1lBRVAsQ0FBQWUsS0FBTTtZQUNmLElBQUlBLEtBQUtBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ3RCO1lBRUE7WUFDQSxDQUFBQyxRQUFTLEdBQUcsS0FBSztZQUNqQixJQUFJQSxRQUFRQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN6QjtZQUVBMUIsWUFBWVUsTUFBYyxFQUFFZSxLQUFhO2NBQ3JDLElBQUksQ0FBQyxDQUFBZixNQUFPLEdBQUdBLE1BQU07Y0FFckIsTUFBTWlCLE1BQU0sR0FBRyxDQUFDLE1BQUs7Z0JBQ2pCLE1BQU1BLE1BQU0sR0FBR2pCLE1BQU0sQ0FBQ2tCLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDRCxNQUFNLENBQUNFLEdBQUcsRUFBRTtnQkFDWixPQUFPRixNQUFNLENBQUNHLElBQUksQ0FBQyxHQUFHLENBQUM7Y0FDM0IsQ0FBQyxFQUFDLENBQUU7Y0FFSjtjQUNBLE1BQU1DLE1BQU0sR0FBRyxvQ0FBb0M7Y0FDbkQsSUFBSSxDQUFDLENBQUFOLEtBQU0sR0FBR0EsS0FBSyxDQUFDTyxPQUFPLENBQUNELE1BQU0sRUFBRSxDQUFDRSxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxLQUFJO2dCQUMxRCxJQUFJRCxJQUFJLEtBQUssUUFBUSxJQUFJQSxJQUFJLEtBQUssU0FBUyxFQUFFO2tCQUN6QyxPQUFPLEdBQUdQLE1BQU0sSUFBSVEsUUFBUSxFQUFFO2lCQUNqQyxNQUFNLElBQUlELElBQUksS0FBSyxhQUFhLEVBQUU7a0JBQy9CLE9BQU9DLFFBQVE7O2dCQUVuQjlCLE9BQU8sQ0FBQytCLElBQUksQ0FBQyw2Q0FBNkMxQixNQUFNLEdBQUcsRUFBRXVCLEtBQUssQ0FBQztjQUMvRSxDQUFDLENBQUM7WUFDTjtZQUVBOzs7WUFHQUksV0FBV0EsQ0FBQ0MsRUFBVTtjQUNsQixJQUFJLElBQUksQ0FBQyxDQUFBWixRQUFTLEVBQUU7Z0JBQ2hCLE1BQU1hLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLENBQUEvQixNQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEY2QixRQUFRLElBQUlDLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDSCxRQUFRLENBQUM7O2NBRzlDLE1BQU1JLEdBQUcsR0FBR0gsUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDO2NBQzNDRCxHQUFHLENBQUNFLFdBQVcsQ0FBQ0wsUUFBUSxDQUFDTSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUFyQixLQUFNLENBQUMsQ0FBQztjQUVyRGEsRUFBRSxJQUFJSyxHQUFHLENBQUNJLFlBQVksQ0FBQyxJQUFJLEVBQUVULEVBQUUsQ0FBQztjQUNoQ0UsUUFBUSxDQUFDUSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0gsV0FBVyxDQUFDRixHQUFHLENBQUM7Y0FFekQsSUFBSSxDQUFDLENBQUFqQixRQUFTLEdBQUcsSUFBSTtZQUN6Qjs7VUFDSEgsT0FBQSxDQUFBMEIsT0FBQSxHQUFBekIsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REQsSUFBQTBCLE9BQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBMEQsRUFBQSxHQUFBMUQsT0FBQTtVQUVBLE1BQU0yRCxRQUFRO1lBQ1YsQ0FBQUMsUUFBUyxHQUF5QyxJQUFJQyxHQUFHLEVBQUU7WUFFM0RDLFFBQVFBLENBQUN6RCxVQUFrQixFQUFFMkIsS0FBYTtjQUN0QyxJQUFJLElBQUksQ0FBQyxDQUFBNEIsUUFBUyxDQUFDN0MsR0FBRyxDQUFDVixVQUFVLENBQUMsRUFBRTtjQUNwQyxNQUFNZSxNQUFNLEdBQUdZLEtBQUssR0FBRyxJQUFJeUIsT0FBQSxDQUFBRCxPQUFZLENBQUNuRCxVQUFVLEVBQUUyQixLQUFLLENBQUMsR0FBRyxJQUFJMEIsRUFBQSxDQUFBSyxRQUFRLENBQUMxRCxVQUFVLENBQUM7Y0FDckYsSUFBSSxDQUFDLENBQUF1RCxRQUFTLENBQUNJLEdBQUcsQ0FBQzNELFVBQVUsRUFBRWUsTUFBTSxDQUFDO2NBQ3RDLE9BQU9BLE1BQU07WUFDakI7WUFFQUwsR0FBR0EsQ0FBQ1YsVUFBa0I7Y0FDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQXVELFFBQVMsQ0FBQzdDLEdBQUcsQ0FBQ1YsVUFBVSxDQUFDO1lBQ3pDO1lBRUFhLEdBQUdBLENBQUNiLFVBQWtCO2NBQ2xCLE9BQU8sSUFBSSxDQUFDLENBQUF1RCxRQUFTLENBQUMxQyxHQUFHLENBQUNiLFVBQVUsQ0FBQztZQUN6Qzs7VUFHRztVQUFXLE1BQU1lLE1BQU0sR0FBQVUsT0FBQSxDQUFBVixNQUFBLEdBQUcsSUFBSXVDLFFBQVEsRUFBRTtVQUUvQztVQUNDTSxVQUFrQixDQUFDQyxrQkFBa0IsR0FBRzlDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekIvQyxJQUFBbkIsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUQsT0FBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxNQUNYK0QsUUFBUyxTQUFROUQsS0FBQSxDQUFBRyxNQUFNO1lBQ3pCLElBQUlpQixNQUFNQSxDQUFBO2NBQ04sT0FBTyxJQUFJO1lBQ2Y7WUFFQTs7Ozs7O1lBTVMsQ0FBQUosTUFBTztZQUNoQixJQUFJQSxNQUFNQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUN2QjtZQUVBOzs7Ozs7WUFNQSxDQUFBa0QsT0FBUSxHQUFHLENBQUM7WUFDWixJQUFJQSxPQUFPQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUN4QjtZQUVBOzs7Ozs7WUFNUyxDQUFBekIsUUFBUztZQUNsQixJQUFJQSxRQUFRQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN6QjtZQUVBOzs7OztZQUtBLElBQUkwQixJQUFJQSxDQUFBO2NBQ0osTUFBTUQsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUcsWUFBWSxJQUFJLENBQUMsQ0FBQUEsT0FBUSxFQUFFLEdBQUcsRUFBRTtjQUNoRSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUF6QixRQUFTLEdBQUd5QixPQUFPLEVBQUU7WUFDeEM7WUFFQTVELFlBQVltQyxRQUFnQjtjQUN4QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQXpCLE1BQU8sR0FBR2xCLE9BQUEsQ0FBQWUsU0FBTyxDQUFDSSxHQUFHLENBQUN3QixRQUFRLENBQUM7Y0FFcEMsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBRyxDQUFDLE1BQUs7Z0JBQ25CLElBQUksT0FBTzJCLE9BQU8sS0FBSyxRQUFRLEVBQUU7a0JBQzdCLE1BQU1sQyxLQUFLLEdBQUdPLFFBQVEsQ0FBQ1AsS0FBSyxDQUFDLEdBQUcsQ0FBQztrQkFDakMsTUFBTVAsR0FBRyxHQUFHTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNtQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBR25DLEtBQUssQ0FBQ29DLEtBQUssRUFBRSxJQUFJcEMsS0FBSyxDQUFDb0MsS0FBSyxFQUFFLEVBQUUsR0FBR3BDLEtBQUssQ0FBQ29DLEtBQUssRUFBRTtrQkFDMUYsTUFBTUMsT0FBTyxHQUFHckMsS0FBSyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO2tCQUMvQixPQUFPLE9BQU9ULEdBQUcsT0FBTzRDLE9BQU8sTUFBTTs7Z0JBR3pDLElBQUk7a0JBQUNDO2dCQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQXhELE1BQU87Z0JBRXhCOzs7Z0JBR0EsTUFBTXFCLE1BQU0sR0FBRyxJQUFJb0MsTUFBTSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQztnQkFDNUQsSUFBSXBDLE1BQU0sQ0FBQ3FDLElBQUksQ0FBQ0YsR0FBRyxDQUFDLEVBQUU7a0JBQ2xCLE1BQU07b0JBQUNHLE1BQU07b0JBQUVDLFFBQVE7b0JBQUVDO2tCQUFZLENBQUMsR0FBRyxJQUFJQyxHQUFHLENBQUNOLEdBQUcsQ0FBQztrQkFDckQsTUFBTU4sT0FBTyxHQUFHVyxZQUFZLENBQUMvRCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsWUFBWStELFlBQVksQ0FBQzVELEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUU7a0JBRTVGLE9BQU8wRCxNQUFNLEdBQUdDLFFBQVEsR0FBRyxNQUFNLEdBQUdWLE9BQU87O2dCQUcvQ00sR0FBRyxHQUFHQSxHQUFHLENBQUNPLEtBQUssQ0FBQyxDQUFDLEVBQUVQLEdBQUcsQ0FBQ1EsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sR0FBR1IsR0FBRyxNQUFNO2NBQ3ZCLENBQUMsRUFBQyxDQUFFO1lBQ1I7WUFFQTs7O1lBR0FqRSxNQUFNQSxDQUFBO2NBQ0YsSUFBSSxDQUFDLENBQUEyRCxPQUFRLEVBQUU7Y0FDZixJQUFJLENBQUMxRCxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzFCOztVQUNIcUIsT0FBQSxDQUFBaUMsUUFBQSxHQUFBQSxRQUFBIiwiaWdub3JlTGlzdCI6W119