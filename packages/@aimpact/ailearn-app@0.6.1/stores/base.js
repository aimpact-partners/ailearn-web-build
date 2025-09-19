System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.12/texts", "@beyond-js/widgets@1.1.2/controller", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.1.1/entities/collection"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, BaseStoreManager, FormBaseStoreManager, ListStoreManager, ViewStoreManager, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_aimpactChatSdk155Session) {
      dependency_6 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_8 = _beyondJsReactive211EntitiesCollection;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/stores/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/kernel/texts', dependency_3], ['@beyond-js/widgets/controller', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/reactive/entities/collection', dependency_8]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./ts/base
      *************************/
      ims.set('./ts/base', {
        hash: 2997533613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseStoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@beyond-js/kernel/core");
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
            get isReady() {
              const pendingPromise = new _core.PendingPromise();
              if (this.#isReady) return pendingPromise;
              const checker = () => {
                this.#isReady = this.ready;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3RleHRzIiwiX21haW5MYXlvdXQiLCJfc2Vzc2lvbiIsIl9jb3JlIiwiQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidGV4dHMiLCJ2YWx1ZSIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsImJyb2tlciIsIkxheW91dEJyb2tlciIsInVzZXIiLCJtb2RlbCIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJpc1JlYWR5IiwicGVuZGluZ1Byb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoZWNrZXIiLCJyZXNvbHZlIiwib24iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJzcGVjaWZpZXIiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJzdG9yZSIsImdUZXh0cyIsImV4cG9ydHMiLCJfYmFzZSIsIkZvcm1CYXNlU3RvcmVNYW5hZ2VyIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsIkxpc3RTdG9yZU1hbmFnZXIiLCJpdGVtcyIsImxlbmd0aCIsImlzVGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJzdGF0ZSIsImZldGNoaW5nIiwidG90YWxJdGVtcyIsImxvYWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiVmlld1N0b3JlTWFuYWdlciIsIk1vZGVsIiwiaWQiLCJqb2luU3BlY3MiLCJjb2RlIiwib2ZmIiwidW5kZWZpbmVkIiwic3BlY3MiXSwic291cmNlcyI6WyIvL3RzL2Jhc2UudHMiLCIvL3RzL2Zvcm0udHMiLCIvL3RzL2xpc3QudHMiLCIvL3RzL3ZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxH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