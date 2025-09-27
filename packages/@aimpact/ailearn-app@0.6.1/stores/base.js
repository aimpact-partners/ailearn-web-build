System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/core", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/reactive@2.1.1/model", "@beyond-js/widgets@1.1.2/controller", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/reactive@2.1.1/entities/item"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_1 = _aimpactAilearnApp061MainLayoutWidget;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
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
      __pkg.dependencies.update([['@aimpact/ailearn-app/main-layout.widget', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@beyond-js/kernel/texts', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/widgets/controller', dependency_6], ['@beyond-js/reactive/entities/collection', dependency_7], ['@beyond-js/reactive/entities/item', dependency_8]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./ts/base
      *************************/
      ims.set('./ts/base', {
        hash: 3207469906,
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
            constructor(specifier) {
              super();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9jb3JlIiwiX3RleHRzIiwiX21vZGVsIiwiQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidGV4dHMiLCJ2YWx1ZSIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsImJyb2tlciIsIkxheW91dEJyb2tlciIsInVzZXIiLCJtb2RlbCIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJpc1JlYWR5IiwicGVuZGluZ1Byb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoZWNrZXIiLCJyZXNvbHZlIiwib24iLCJ0cmlnZ2VyIiwic3BlY2lmaWVyIiwiY29uc3RydWN0b3IiLCJsb2FkTGFuZ3VhZ2VzIiwiZ2xvYmFsVGhpcyIsInN0b3JlIiwibGFuZ3VhZ2VzIiwibW9kdWxlIiwiZ2xvYmFsIiwib25DaGFuZ2UiLCJvZmYiLCJ1bmRlZmluZWQiLCJDdXJyZW50VGV4dHMiLCJmZXRjaCIsImdUZXh0cyIsImV4cG9ydHMiLCJfYmFzZSIsIkZvcm1CYXNlU3RvcmVNYW5hZ2VyIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsIkxpc3RTdG9yZU1hbmFnZXIiLCJpdGVtcyIsImxlbmd0aCIsImlzVGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJzdGF0ZSIsImZldGNoaW5nIiwidG90YWxJdGVtcyIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiVmlld1N0b3JlTWFuYWdlciIsIk1vZGVsIiwiaWQiLCJqb2luU3BlY3MiLCJjb2RlIiwic3BlY3MiXSwic291cmNlcyI6WyIvL3RzL2Jhc2UudHMiLCIvL3RzL2Zvcm0udHMiLCIvL3RzL2xpc3QudHMiLCIvL3RzL3ZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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