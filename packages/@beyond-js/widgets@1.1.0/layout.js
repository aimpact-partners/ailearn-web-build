System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/widgets@1.1.0/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ssr, __beyond_pkg, hmr;
  _export("ssr", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsWidgets110Render) {
      dependency_1 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/widgets", "1.1.0"], ["@aimpact/ailearn-app", "0.1.0-dev.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/widgets@1.1.0/layout"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_1]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./children
      **************************/
      ims.set('./children', {
        hash: 3435386799,
        creator: function (require, exports) {
          "use strict";

          var _render = require("@beyond-js/widgets/render");
          var _ssr = require("./ssr");
          let manager;
          customElements.define('beyond-layout-children', class extends HTMLElement {
            #layout;
            #active;
            connectedCallback() {
              this.attachShadow({
                mode: 'open'
              });
              const managed = () => {
                const start = () => this.#start().catch(exc => console.error(exc.stack));
                manager.initialised ? start() : manager.ready.then(start);
              };
              // If the manager is already loaded, render without ssr
              if (manager) return managed();
              // While the manager is not loaded, try to render from ssr
              _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener('received', this.#onssr);
              const promises = [];
              promises.push(bimport('@beyond-js/widgets/routing'));
              promises.push(bimport('@beyond-js/kernel/core'));
              const {
                specifier
              } = globalThis.__app_package;
              promises.push(bimport(`${specifier}/start`));
              Promise.all(promises).then(([routing]) => {
                ({
                  manager
                } = routing);
                managed();
              }).catch(exc => console.log(exc.stack));
            }
            /**
             * The widget container of the current beyond-layout-children container is null if an error is detected,
             * and the DOM document when there is no project layout configured in the project.json
             *
             * @return {{container?: string, error?: string}}
             * @private
             */
            #container;
            get container() {
              if (this.#container !== void 0) return this.#container;
              const container = (() => {
                let parent = this;
                while (true) {
                  const root = parent.getRootNode();
                  if (root === document) return root;
                  parent = root.host;
                  if (_render.widgets.instances.has(parent)) return parent;
                }
              })();
              if (!container) {
                console.error(`Widget container of beyond-layout-children not found`);
                return this.#container = null;
              }
              return this.#container = container;
            }
            #onssr = () => {
              _ssr.ssr.removeEventListener('received', this.#onssr);
              const {
                container
              } = this;
              if (container === null) return;
              // The index in the hierarchy that must be appended to the shadowRoot of the beyond-layout-children
              const {
                element,
                error
              } = (() => {
                const {
                  hierarchy
                } = _ssr.ssr;
                // container is undefined when there is no project layout, and the beyond-layout-children rootNode
                // is the DOM document
                if (container === document) return {
                  element: hierarchy[0]
                };
                const {
                  localName
                } = container;
                const index = hierarchy.indexOf(localName);
                if (index === -1) return {
                  error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
                };
                if (index === hierarchy.length - 1) return {
                  error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
                };
                return {
                  element: hierarchy[index + 1]
                };
              })();
              if (error) {
                console.error(error, this);
                return;
              }
              this.shadowRoot.appendChild(document.createElement(element));
            };
            #render = () => {
              let activeElement;
              // Iterate over the layout children form the routing manager
              this.#layout.children.forEach(child => {
                const {
                  children
                } = this.shadowRoot;
                let element = [...children].find(element => element.getAttribute('data-child-id') === child.id);
                // Create the HTMLElement of the child if it was not already created
                if (!element) {
                  element = document.createElement(child.element);
                  element.setAttribute('data-child-id', child.id);
                  this.shadowRoot.append(element);
                }
                // The show and hide methods are defined in the page controller
                const active = this.#layout.active === child;
                const controller = element.controller;
                active && (activeElement = element);
                if (active && element !== this.#active) {
                  const show = () => {
                    element.removeEventListener('controller.initialised', show);
                    if (element !== this.#active) return;
                    const controller = element.controller;
                    if (!controller) {
                      throw new Error(`Controller of element widget "${child.element}" is undefined`);
                    }
                    this.#active === element && controller.show?.();
                  };
                  controller ? controller.show?.() : element.addEventListener('controller.initialised', show);
                } else if (!element.hidden && !active) {
                  controller?.hide?.();
                }
                element.hidden = !active;
              });
              this.#active = activeElement;
            };
            // Check if there are ssr elements that must be hydrated (set the child id)
            #hydrate() {
              const {
                children
              } = this.shadowRoot;
              const layout = this.#layout;
              if (!children.length) return;
              if (children.length > 1) {
                console.error('Only one child was expected on beyond-layout-children start', this);
                return;
              }
              children[0].setAttribute('data-child-id', [...layout.children.keys()][0]);
            }
            async #start() {
              _ssr.ssr.removeEventListener('received', this.#onssr);
              if (this.container === null) return;
              const done = layout => {
                this.#layout = layout;
                this.#hydrate();
                this.#layout.on('change', this.#render);
                this.#render();
              };
              // When there is no layout specified in the project.json, then the container is the DOM document
              if (this.container === document) return done(manager.main);
              // Check if the current beyond-layout-children is the main layout specified in the project.json
              const {
                localName
              } = this.container;
              if (localName === manager.main.element) return done(manager.main);
              // Look for the layout
              if (!manager.layouts.has(localName)) {
                console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
                return;
              }
              done(manager.layouts.get(localName));
            }
          });
        }
      });

      /*********************
      INTERNAL MODULE: ./ssr
      *********************/

      ims.set('./ssr', {
        hash: 3616680628,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ssr = void 0;
          /*bundle*/
          const ssr = exports.ssr = new class extends EventTarget {
            // The main layout
            #main;
            get main() {
              return this.#main;
            }
            // The widget name of the page
            #page;
            get page() {
              return this.#page;
            }
            // The parent widgets of the page
            #layouts;
            get layouts() {
              return this.#layouts;
            }
            // The hierarchy of layouts and page considering the main layout, the parent widgets of the page
            // and the page itself
            #hierarchy = [];
            get hierarchy() {
              return this.#hierarchy;
            }
            data(main, page) {
              this.#main = main;
              this.#page = page.element;
              this.#layouts = page.parents;
              main && this.#hierarchy.push(main);
              page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
              this.#hierarchy.push(page.element);
              const event = new Event('received');
              this.dispatchEvent(event);
            }
          }();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./ssr",
        "from": "ssr",
        "name": "ssr"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ssr') && _export("ssr", ssr = require ? require('./ssr').ssr : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVuZGVyIiwicmVxdWlyZSIsIl9zc3IiLCJtYW5hZ2VyIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsImxheW91dCIsImFjdGl2ZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsIm1hbmFnZWQiLCJzdGFydCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJpbml0aWFsaXNlZCIsInJlYWR5IiwidGhlbiIsInNzciIsInBhZ2UiLCJvbnNzciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9taXNlcyIsInB1c2giLCJiaW1wb3J0Iiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJQcm9taXNlIiwiYWxsIiwicm91dGluZyIsImxvZyIsImNvbnRhaW5lciIsInBhcmVudCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsIndpZGdldHMiLCJpbnN0YW5jZXMiLCJoYXMiLCIjb25zc3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWxlbWVudCIsImhpZXJhcmNoeSIsImxvY2FsTmFtZSIsImluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCIjcmVuZGVyIiwiYWN0aXZlRWxlbWVudCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiZmluZCIsImdldEF0dHJpYnV0ZSIsImlkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiY29udHJvbGxlciIsInNob3ciLCJFcnJvciIsImhpZGRlbiIsImhpZGUiLCJoeWRyYXRlIiwiI2h5ZHJhdGUiLCJrZXlzIiwiI3N0YXJ0IiwiZG9uZSIsIm9uIiwibWFpbiIsImxheW91dHMiLCJnZXQiLCJleHBvcnRzIiwiRXZlbnRUYXJnZXQiLCJkYXRhIiwicGFyZW50cyIsImNvbmNhdCIsImV2ZW50IiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50Il0sInNvdXJjZXMiOlsiL2NoaWxkcmVuLnRzIiwiL3Nzci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFJQSxJQUFJRSxPQUFpQjtVQUVyQkMsY0FBYyxDQUFDQyxNQUFNLENBQ3BCLHdCQUF3QixFQUN4QixjQUFjQyxXQUFXO1lBQ3hCLENBQUFDLE1BQU87WUFDUCxDQUFBQyxNQUFPO1lBRVBDLGlCQUFpQkEsQ0FBQTtjQUNoQixJQUFJLENBQUNDLFlBQVksQ0FBQztnQkFBRUMsSUFBSSxFQUFFO2NBQU0sQ0FBRSxDQUFDO2NBRW5DLE1BQU1DLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2dCQUNwQixNQUFNQyxLQUFLLEdBQUdBLENBQUEsS0FBTSxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQztnQkFDeEVmLE9BQU8sQ0FBQ2dCLFdBQVcsR0FBR04sS0FBSyxFQUFFLEdBQUdWLE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDUixLQUFLLENBQUM7Y0FDMUQsQ0FBQztjQUVEO2NBQ0EsSUFBSVYsT0FBTyxFQUFFLE9BQU9TLE9BQU8sRUFBRTtjQUU3QjtjQUNBVixJQUFBLENBQUFvQixHQUFHLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQUMsS0FBTSxFQUFFLEdBQUd0QixJQUFBLENBQUFvQixHQUFHLENBQUNHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQUQsS0FBTSxDQUFDO2NBRXhFLE1BQU1FLFFBQVEsR0FBbUIsRUFBRTtjQUNuQ0EsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FB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U0FBUyxhQUFhLEVBQUUsQ0FBQyxHQUFHOUMsT0FBTyxDQUFDNEUsT0FBTyxDQUFDLEVBQUU1RSxPQUFPLENBQUM7Z0JBQy9FOztjQUVEeUUsSUFBSSxDQUFDekUsT0FBTyxDQUFDNEUsT0FBTyxDQUFDQyxHQUFHLENBQUMvQixTQUFTLENBQUMsQ0FBQztZQUNyQztXQUNBLENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0xNO1VBQVcsTUFBTTNCLEdBQUcsR0FBQTJELE9BQUEsQ0FBQTNELEdBQUEsR0FBRyxJQUFLLGNBQWM0RCxXQUFXO1lBQzNEO1lBQ0EsQ0FBQUosSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUE7WUFDQSxDQUFBdkQsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUE7WUFDQSxDQUFBd0QsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUE7WUFDQTtZQUNBLENBQUEvQixTQUFVLEdBQWEsRUFBRTtZQUN6QixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBbUMsSUFBSUEsQ0FBQ0wsSUFBWSxFQUFFdkQsSUFBYTtjQUMvQixJQUFJLENBQUMsQ0FBQXVELElBQUssR0FBR0EsSUFBSTtjQUNqQixJQUFJLENBQUMsQ0FBQXZELElBQUssR0FBR0EsSUFBSSxDQUFDd0IsT0FBTztjQUN6QixJQUFJLENBQUMsQ0FBQWdDLE9BQVEsR0FBR3hELElBQUksQ0FBQzZELE9BQU87Y0FFNUJOLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQTlCLFNBQVUsQ0FBQ3JCLElBQUksQ0FBQ21ELElBQUksQ0FBQztjQUNsQ3ZELElBQUksQ0FBQzZELE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQXBDLFNBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQUEsU0FBVSxDQUFDcUMsTUFBTSxDQUFDOUQsSUFBSSxDQUFDNkQsT0FBTyxDQUFDLENBQUM7Y0FDeEUsSUFBSSxDQUFDLENBQUFwQyxTQUFVLENBQUNyQixJQUFJLENBQUNKLElBQUksQ0FBQ3dCLE9BQU8sQ0FBQztjQUVsQyxNQUFNdUMsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQyxVQUFVLENBQUM7Y0FDbkMsSUFBSSxDQUFDQyxhQUFhLENBQUNGLEtBQUssQ0FBQztZQUMxQjtXQUNBLENBQUMsQ0FBRSIsImlnbm9yZUxpc3QiOltdfQ==