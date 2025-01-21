System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/reactive@0.0.1/model", "@beyond-js/widgets@1.1.1/controller", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/core", "@aimpact/reactive@0.0.1/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, FormBaseStoreManager, ListStoreManager, ViewStoreManager, __beyond_pkg, hmr;
  _export({
    FormBaseStoreManager: void 0,
    ListStoreManager: void 0,
    ViewStoreManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactReactive001Model) {
      dependency_1 = _aimpactReactive001Model;
    }, function (_beyondJsWidgets111Controller) {
      dependency_2 = _beyondJsWidgets111Controller;
    }, function (_beyondJsKernel019Texts) {
      dependency_3 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_aimpactReactive001EntitiesItem) {
      dependency_5 = _aimpactReactive001EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/stores/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/reactive/model', dependency_1], ['@beyond-js/widgets/controller', dependency_2], ['@beyond-js/kernel/texts', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/reactive/entities/item', dependency_5]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./ts/form
      *************************/
      ims.set('./ts/form', {
        hash: 2887311245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormBaseStoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/ //your code here

          class FormBaseStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts;
            get texts() {
              return this.#texts.value;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            set ready(value) {
              super.ready = value;
            }
            #promise;
            get textReady() {
              if (this.#promise) return this.#promise;
              const promise = new _core.PendingPromise();
              this.#promise = promise;
              if (this.#texts.ready && this.#globalTexts.ready) return promise.resolve(true);
              const listener = () => {
                if (this.#texts.ready && this.#globalTexts.ready) promise.resolve(true);
              };
              this.#texts.on('change', listener);
              this.#globalTexts.on('change', listener);
              return promise;
            }
            constructor({
              specifier,
              model
            }) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#texts.fetch();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.on('change', this.triggerEvent);
            }
          }
          exports.FormBaseStoreManager = FormBaseStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/list
      *************************/

      ims.set('./ts/list', {
        hash: 173214808,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListStoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/ //your code here

          class ListStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts;
            get texts() {
              return this.#texts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor({
              specifier,
              model
            }) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#texts.on('change', this.triggerEvent);
            }
          }
          exports.ListStoreManager = ListStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/view
      *************************/

      ims.set('./ts/view', {
        hash: 762250648,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ViewStoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          class ViewStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts;
            #Model;
            get texts() {
              return this.#texts.value;
            }
            #model;
            get model() {
              return this.#model;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            constructor(specifier, model) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              globalThis.store = this;
              this.#Model = model;
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.on('change', this.triggerEvent);
            }
            async load(id) {
              try {
                super.ready = false;
                if (!!this.#model && this.#model?.id !== id) {
                  this.#model.off('chang`e', this.triggerEvent);
                  this.#model = undefined;
                }
                const specs = {
                  id
                };
                this.#model = new this.#Model(specs);
                if (id) {
                  await this.#model.load(id);
                }
              } catch (e) {
                console.error(e);
              } finally {
                super.ready = true;
              }
            }
          }
          exports.ViewStoreManager = ViewStoreManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./ts/form",
        "from": "FormBaseStoreManager",
        "name": "FormBaseStoreManager"
      }, {
        "im": "./ts/list",
        "from": "ListStoreManager",
        "name": "ListStoreManager"
      }, {
        "im": "./ts/view",
        "from": "ViewStoreManager",
        "name": "ViewStoreManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'FormBaseStoreManager') && _export("FormBaseStoreManager", FormBaseStoreManager = require ? require('./ts/form').FormBaseStoreManager : value);
        (require || prop === 'ListStoreManager') && _export("ListStoreManager", ListStoreManager = require ? require('./ts/list').ListStoreManager : value);
        (require || prop === 'ViewStoreManager') && _export("ViewStoreManager", ViewStoreManager = require ? require('./ts/view').ViewStoreManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3RleHRzIiwiX2NvcmUiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsInRleHRzIiwidmFsdWUiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwicHJvbWlzZSIsInRleHRSZWFkeSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsImxpc3RlbmVyIiwib24iLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsIm1vZGVsIiwiQ3VycmVudFRleHRzIiwiZmV0Y2giLCJ0cmlnZ2VyRXZlbnQiLCJleHBvcnRzIiwiTGlzdFN0b3JlTWFuYWdlciIsIlZpZXdTdG9yZU1hbmFnZXIiLCJNb2RlbCIsImdsb2JhbFRoaXMiLCJzdG9yZSIsImxvYWQiLCJpZCIsIm9mZiIsInVuZGVmaW5lZCIsInNwZWNzIiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VzIjpbIi90cy9mb3JtLnRzIiwiL3RzL2xpc3QudHMiLCIvdHMvdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTyxXQVBQOztVQU9pQixNQUFPRyxvQkFBcUIsU0FBUUosTUFBQSxDQUFBSyxhQUFtQztZQUN2RkMsT0FBTztZQUVQLENBQUFDLGFBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDMUIsSUFBSUQsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBRUEsQ0FBQUUsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFB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QUFLLElBQUksSUFBSSxDQUFDLENBQUFELFdBQVksQ0FBQ0MsS0FBSztZQUNuRTtZQUNBTyxZQUFZQyxTQUFTLEVBQUVDLEtBQWdDO2NBQ3RELEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBWixLQUFNLEdBQUcsSUFBSVAsTUFBQSxDQUFBb0IsWUFBWSxDQUFDRixTQUFTLENBQUM7Y0FDekMsSUFBSSxDQUFDLENBQUFULFdBQVksR0FBRyxJQUFJVCxNQUFBLENBQUFvQixZQUFZLENBQUMsMkJBQTJCLENBQUM7Y0FDakUsSUFBSSxDQUFDLENBQUFYLFdBQVksQ0FBQ1ksS0FBSyxFQUFFO2NBQ3pCTSxVQUFVLENBQUNDLEtBQUssR0FBRyxJQUFJO2NBQ3ZCLElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUdQLEtBQUs7Y0FDbkIsSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ1MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNNLFlBQVksQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQWIsV0FBWSxDQUFDTyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ00sWUFBWSxDQUFDO1lBQ2xEO1lBRUEsTUFBTU8sSUFBSUEsQ0FBQ0MsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsS0FBSyxDQUFDcEIsS0FBSyxHQUFHLEtBQUs7Z0JBRW5CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBUyxLQUFNLElBQUksSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRVcsRUFBRSxLQUFLQSxFQUFFLEVBQUU7a0JBQzVDLElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNZLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDVCxZQUFZLENBQUM7a0JBQzdDLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUdhLFNBQVM7O2dCQUd4QixNQUFNQyxLQUFLLEdBQUc7a0JBQUVIO2dCQUFFLENBQUU7Z0JBRXBCLElBQUksQ0FBQyxDQUFBWCxLQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQU8sS0FBTSxDQUFDTyxLQUFLLENBQUM7Z0JBRXBDLElBQUlILEVBQUUsRUFBRTtrQkFDUCxNQUFNLElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNVLElBQUksQ0FBQ0MsRUFBRSxDQUFDOztlQUUzQixDQUFDLE9BQU9JLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULEtBQUssQ0FBQ3hCLEtBQUssR0FBRyxJQUFJOztZQUVwQjs7VUFDQWEsT0FBQSxDQUFBRSxnQkFBQSxHQUFBQSxnQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==