System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/core", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/reactive@2.1.1/model", "@beyond-js/widgets@1.1.2/controller", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/reactive@2.1.1/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, BaseStoreManager, FormBaseStoreManager, ListStoreManager, ViewStoreManager, __beyond_pkg, hmr;
  _export({
    BaseStoreManager: void 0,
    FormBaseStoreManager: void 0,
    ListStoreManager: void 0,
    ViewStoreManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_1 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_aimpactChatSdk155Session) {
      dependency_2 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0114Core) {
      dependency_3 = _beyondJsKernel0114Core;
    }, function (_beyondJsKernel0114Texts) {
      dependency_4 = _beyondJsKernel0114Texts;
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_beyondJsWidgets112Controller) {
      dependency_6 = _beyondJsWidgets112Controller;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_7 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_8 = _beyondJsReactive211EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/stores/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/main-layout.widget', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@beyond-js/kernel/texts', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/widgets/controller', dependency_6], ['@beyond-js/reactive/entities/collection', dependency_7], ['@beyond-js/reactive/entities/item', dependency_8]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./ts/base
      *************************/
      ims.set('./ts/base', {
        hash: 3284008795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseStoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class BaseStoreManager extends _model.ReactiveModel {
            isStore;
            #texts;
            get texts() {
              return this.#texts.value;
            }
            get session() {
              return _session.sessionWrapper;
            }
            get broker() {
              return _mainLayout.LayoutBroker;
            }
            get user() {
              return this.session?.user;
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
            #isReady = false;
            #pendingPromise;
            get isReady() {
              if (this.#pendingPromise) return this.#pendingPromise;
              const pendingPromise = new _core.PendingPromise();
              if (this.#isReady) return pendingPromise;
              const checker = () => {
                this.#isReady = this.#texts.ready && this.#globalTexts.ready;
                if (this.#isReady) pendingPromise.resolve(this.#isReady);
                return;
              };
              if (this.ready) return checker();
              if (!this.ready) {
                this.on('change', checker);
              }
              return pendingPromise;
            }
            set ready(value) {
              if (super.ready === value) return;
              super.ready = value;
              this.trigger('change');
            }
            #specifier;
            constructor(specifier, specs = {}) {
              super(specs);
              this.#specifier = specifier;
              this.loadLanguages();
              globalThis.store = this;
              _core.languages.on('change', () => {
                this.loadLanguages();
              });
              this.#globalTexts.on('change', () => this.trigger('change'));
            }
            languages() {
              return {
                module: this.#texts,
                global: this.#globalTexts
              };
            }
            loadLanguages() {
              const onChange = () => this.trigger('change');
              if (this.#texts) {
                this.#texts.off('change', onChange);
                this.#texts = undefined;
              }
              if (this.#globalTexts) {
                this.#globalTexts.off('change', onChange);
                this.#globalTexts = undefined;
              }
              this.#texts = new _texts.CurrentTexts(this.#specifier);
              this.#texts.on('change', onChange);
              this.#texts.fetch();
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              this.#texts.on('change', onChange);
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
        hash: 3001553419,
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
                  // new Section({id}) // new Article({id}) // new Shipment({id});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9jb3JlIiwiX3RleHRzIiwiX21vZGVsIiwiQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidGV4dHMiLCJ2YWx1ZSIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsImJyb2tlciIsIkxheW91dEJyb2tlciIsInVzZXIiLCJtb2RlbCIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJpc1JlYWR5IiwicGVuZGluZ1Byb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoZWNrZXIiLCJyZXNvbHZlIiwib24iLCJ0cmlnZ2VyIiwic3BlY2lmaWVyIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsImxvYWRMYW5ndWFnZXMiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJsYW5ndWFnZXMiLCJtb2R1bGUiLCJnbG9iYWwiLCJvbkNoYW5nZSIsIm9mZiIsInVuZGVmaW5lZCIsIkN1cnJlbnRUZXh0cyIsImZldGNoIiwiZ1RleHRzIiwiZXhwb3J0cyIsIl9iYXNlIiwiRm9ybUJhc2VTdG9yZU1hbmFnZXIiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwiTGlzdFN0b3JlTWFuYWdlciIsIml0ZW1zIiwibGVuZ3RoIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInN0YXRlIiwiZmV0Y2hpbmciLCJ0b3RhbEl0ZW1zIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJWaWV3U3RvcmVNYW5hZ2VyIiwiTW9kZWwiLCJpZCIsImpvaW5TcGVjcyIsImNvZGUiXSwic291cmNlcyI6WyIvdHMvYmFzZS50cyIsIi90cy9mb3JtLnRzIiwiL3RzL2xpc3QudHMiLCIvdHMvdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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