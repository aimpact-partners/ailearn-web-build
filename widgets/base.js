System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@beyond-js/widgets@1.1.0/controller", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ListStoreManager, ViewStoreManager, __beyond_pkg, hmr;
  _export({
    ListStoreManager: void 0,
    ViewStoreManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_1 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_beyondJsWidgets110Controller) {
      dependency_2 = _beyondJsWidgets110Controller;
    }, function (_beyondJsKernel019Texts) {
      dependency_3 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_4 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.1"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.1/widgets/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/reactive/model', dependency_1], ['@beyond-js/widgets/controller', dependency_2], ['@beyond-js/kernel/texts', dependency_3], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_4]]);
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./stores/list
      *****************************/
      ims.set('./stores/list', {
        hash: 274656714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListStoreManager = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
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

      /*****************************
      INTERNAL MODULE: ./stores/view
      *****************************/

      ims.set('./stores/view', {
        hash: 2729142780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ViewStoreManager = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/ // import { globalTexts } from '@aimpact/ailearn-app/i18n.txt.ts';
          // import { CurrentTexts } from '@beyond-js/kernel/texts';
          class ViewStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts;
            #globalTexts;
            #Model;
            get texts() {
              return this.#texts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            #model;
            get model() {
              return this.#model;
            }
            get globalTexts() {
              return this.#globalTexts.value;
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
              globalThis.store = this;
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
        "im": "./stores/list",
        "from": "ListStoreManager",
        "name": "ListStoreManager"
      }, {
        "im": "./stores/view",
        "from": "ViewStoreManager",
        "name": "ViewStoreManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ListStoreManager') && _export("ListStoreManager", ListStoreManager = require ? require('./stores/list').ListStoreManager : value);
        (require || prop === 'ViewStoreManager') && _export("ViewStoreManager", ViewStoreManager = require ? require('./stores/view').ViewStoreManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3RleHRzIiwiTGlzdFN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsInRleHRzIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwibW9kZWwiLCJDdXJyZW50VGV4dHMiLCJvbiIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJWaWV3U3RvcmVNYW5hZ2VyIiwiZ2xvYmFsVGV4dHMiLCJNb2RlbCIsImZldGNoIiwiZ2xvYmFsVGhpcyIsInN0b3JlIiwibG9hZCIsImlkIiwib2ZmIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZXMiOlsiL3N0b3Jlcy9saXN0LnRzIiwiL3N0b3Jlcy92aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTyxXQU5QOztVQU1pQixNQUFPRSxnQkFBaUIsU0FBUUgsTUFBQSxDQUFBSSxhQUErQjtZQUMvRUMsT0FBTztZQUVQLENBQUFDLGFBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDMUIsSUFBSUQsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBRUEsQ0FBQUUsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNDLEtBQUs7WUFDekI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDRSxLQUFLO1lBQ3hDO1lBRUFDLFlBQVk7Y0FBRUMsU0FBUztjQUFFQztZQUFLLENBQUU7Y0FDL0IsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFMLEtBQU0sR0FBRyxJQUFJTixNQUFBLENBQUFZLFlBQVksQ0FBQ0YsU0FBUyxDQUFDO2NBQ3pDLElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7WUFDNUM7O1VBQ0FDLE9BQUEsQ0FBQWQsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJELElBQUFILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUdPLFdBRlA7VUFDQTtVQUNpQixNQUFPaUIsZ0JBQ3ZCLFNBQVFsQixNQUFBLENBQUFJLGFBQWtDO1lBRzFDQyxPQUFPO1lBRVAsQ0FBQUMsYUFBYyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUMxQixJQUFJRCxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFFQSxDQUFBRSxLQUFNO1lBQ04sQ0FBQVcsV0FBWTtZQUNaLENBQUFDLEtBQU07WUFDTixJQUFJWixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDQyxLQUFLO1lBQ3pCO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ0UsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBUyxXQUFZLENBQUNULEtBQUs7WUFDbkU7WUFDQSxDQUFBRyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJTSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWSxDQUFDVixLQUFLO1lBQy9CO1lBRUFFLFlBQVlDLFNBQVMsRUFBRUMsS0FBZ0M7Y0FDdEQsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFMLEtBQU0sR0FBRyxJQUFJTixNQUFBLENBQUFZLFlBQVksQ0FBQ0YsU0FBUyxDQUFDO2NBQ3pDLElBQUksQ0FBQyxDQUFBTyxXQUFZLEdBQUcsSUFBSWpCLE1BQUEsQ0FBQVksWUFBWSxDQUFDLDJCQUEyQixDQUFDO2NBQ2pFLElBQUksQ0FBQyxDQUFBSyxXQUFZLENBQUNFLEtBQUssRUFBRTtjQUN6QkMsVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtjQUN2QixJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHUCxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFHLFdBQVksQ0FBQ0osRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUNqRE0sVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBLE1BQU1DLElBQUlBLENBQUNDLEVBQUU7Y0FDWixJQUFJO2dCQUNILEtBQUssQ0FBQ2YsS0FBSyxHQUFHLEtBQUs7Z0JBRW5CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBRyxLQUFNLElBQUksSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRVksRUFBRSxLQUFLQSxFQUFFLEVBQUU7a0JBQzVDLElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDVixZQUFZLENBQUM7a0JBQzdDLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUdjLFNBQVM7O2dCQUd4QixNQUFNQyxLQUFLLEdBQUc7a0JBQUVIO2dCQUFFLENBQUU7Z0JBRXBCLElBQUksQ0FBQyxDQUFBWixLQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQU8sS0FBTSxDQUFDUSxLQUFLLENBQUM7Z0JBRXBDLElBQUlILEVBQUUsRUFBRTtrQkFDUCxNQUFNLElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNXLElBQUksQ0FBQ0MsRUFBRSxDQUFDOztlQUUzQixDQUFDLE9BQU9JLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULEtBQUssQ0FBQ25CLEtBQUssR0FBRyxJQUFJOztZQUVwQjs7VUFDQU8sT0FBQSxDQUFBQyxnQkFBQSxHQUFBQSxnQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==