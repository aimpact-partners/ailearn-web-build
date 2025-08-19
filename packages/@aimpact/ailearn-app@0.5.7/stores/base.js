System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.12/texts", "@beyond-js/widgets@1.1.2/controller", "@aimpact/ailearn-app@0.5.7/main-layout.widget", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, BaseStoreManager, FormBaseStoreManager, ListStoreManager, ViewStoreManager, __beyond_pkg, hmr;
  _export({
    BaseStoreManager: void 0,
    FormBaseStoreManager: void 0,
    ListStoreManager: void 0,
    ViewStoreManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_1 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_3 = _beyondJsKernel0112Texts;
    }, function (_beyondJsWidgets112Controller) {
      dependency_4 = _beyondJsWidgets112Controller;
    }, function (_aimpactAilearnApp057MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp057MainLayoutWidget;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_6 = _beyondJsReactive211EntitiesCollection;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/stores/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/kernel/texts', dependency_3], ['@beyond-js/widgets/controller', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@beyond-js/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/session', dependency_7]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./ts/base
      *************************/
      ims.set('./ts/base', {
        hash: 2646097027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseStoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          class BaseStoreManager extends _model.ReactiveModel {
            isStore;
            #texts;
            get texts() {
              return this.#texts.value;
            }
            get broker() {
              return _mainLayout.LayoutBroker;
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
              return this.#texts.ready && this.#globalTexts.ready;
            }
            set ready(value) {
              if (super.ready === value) return;
              super.ready = value;
              this.trigger('change');
            }
            constructor(specifier) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#texts.on('change', () => {
                this.triggerEvent();
              });
              this.#texts.fetch();
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              globalThis.store = this;
              this.#globalTexts.on('change', this.triggerEvent);
            }
            gTexts() {
              return this.#globalTexts;
            }
          }
          exports.BaseStoreManager = BaseStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/form
      *************************/

      ims.set('./ts/form', {
        hash: 2802403096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormBaseStoreManager = void 0;
          var _base = require("./base");
          /*bundle*/ //your code here

          class FormBaseStoreManager extends _base.BaseStoreManager {
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
          }
          exports.FormBaseStoreManager = FormBaseStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/list
      *************************/

      ims.set('./ts/list', {
        hash: 370438530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListStoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class ListStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            get user() {
              return _session.sessionWrapper.user;
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
              if (value === super.ready) return;
              super.ready = value;
            }
            get items() {
              return this.model?.items?.length ? this.model.items : [];
            }
            get isTeacher() {
              return this.user?.roles.includes('teacher');
            }
            #model;
            get model() {
              return this.#model;
            }
            get state() {
              return {
                ready: this.ready,
                fetching: this.fetching,
                items: this.items,
                totalItems: this.items?.length ?? 0
              };
            }
            constructor(specifier, model) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.on('change', this.triggerEvent);
              this.#globalTexts.fetch();
              if (model) {
                this.#model = new model();
              }
            }
            async load() {
              try {
                this.fetching = true;
                await this.model?.load();
                globalThis.store = this;
                super.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ListStoreManager = ListStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/view
      *************************/

      ims.set('./ts/view', {
        hash: 2961404767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ViewStoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
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
                super.ready = super.ready;
                this.fetching = true;
                if (!!this.#model && this.#model?.id !== id && this.#model.joinSpecs?.code !== id) {
                  this.#model.off('change', this.triggerEvent);
                  this.#model = undefined;
                }
                if (!this.#model) {
                  const specs = {
                    id
                  };
                  this.#model = new this.#Model(specs);
                }
                if (id) {
                  await this.#model.load(id);
                }
              } catch (e) {
                console.error(e);
              } finally {
                super.ready = true;
                this.fetching = false;
              }
            }
          }
          exports.ViewStoreManager = ViewStoreManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./ts/base",
        "from": "BaseStoreManager",
        "name": "BaseStoreManager"
      }, {
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
        (require || prop === 'BaseStoreManager') && _export("BaseStoreManager", BaseStoreManager = require ? require('./ts/base').BaseStoreManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3RleHRzIiwiX21haW5MYXlvdXQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJ0ZXh0cyIsInZhbHVlIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwibW9kZWwiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwidHJpZ2dlciIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwiQ3VycmVudFRleHRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJzdG9yZSIsImdUZXh0cyIsImV4cG9ydHMiLCJfYmFzZSIsIkZvcm1CYXNlU3RvcmVNYW5hZ2VyIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsIl9zZXNzaW9uIiwiTGlzdFN0b3JlTWFuYWdlciIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsIml0ZW1zIiwibGVuZ3RoIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInN0YXRlIiwiZmV0Y2hpbmciLCJ0b3RhbEl0ZW1zIiwibG9hZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJWaWV3U3RvcmVNYW5hZ2VyIiwiTW9kZWwiLCJpZCIsImpvaW5TcGVjcyIsImNvZGUiLCJvZmYiLCJ1bmRlZmluZWQiLCJzcGVjcyJdLCJzb3VyY2VzIjpbIi8vdHMvYmFzZS50cyIsIi8vdHMvZm9ybS50cyIsIi8vdHMvbGlzdC50cyIsIi8vdHMvdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUFPRyxnQkFDdkIsU0FBUUosTUFBQSxDQUFBSyxhQUFrQztZ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