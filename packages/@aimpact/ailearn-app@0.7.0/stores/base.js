System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/core", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/reactive@2.1.2/model", "@beyond-js/widgets@1.1.2/controller", "@beyond-js/reactive@2.1.2/entities/collection", "@beyond-js/reactive@2.1.2/entities/item"], function (_export, _context) {
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
    }, function (_beyondJsReactive212Model) {
      dependency_5 = _beyondJsReactive212Model;
    }, function (_beyondJsWidgets112Controller) {
      dependency_6 = _beyondJsWidgets112Controller;
    }, function (_beyondJsReactive212EntitiesCollection) {
      dependency_7 = _beyondJsReactive212EntitiesCollection;
    }, function (_beyondJsReactive212EntitiesItem) {
      dependency_8 = _beyondJsReactive212EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
        hash: 3788115493,
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
            get modelProperties() {
              return this.model.getProperties();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9jb3JlIiwiX3RleHRzIiwiX21vZGVsIiwiQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidGV4dHMiLCJ2YWx1ZSIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsImJyb2tlciIsIkxheW91dEJyb2tlciIsInVzZXIiLCJtb2RlbCIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJpc1JlYWR5IiwicGVuZGluZ1Byb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoZWNrZXIiLCJyZXNvbHZlIiwib24iLCJtb2RlbFByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwidHJpZ2dlciIsInNwZWNpZmllciIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJsb2FkTGFuZ3VhZ2VzIiwiZ2xvYmFsVGhpcyIsInN0b3JlIiwibGFuZ3VhZ2VzIiwibW9kdWxlIiwiZ2xvYmFsIiwib25DaGFuZ2UiLCJvZmYiLCJ1bmRlZmluZWQiLCJDdXJyZW50VGV4dHMiLCJmZXRjaCIsImdUZXh0cyIsImV4cG9ydHMiLCJfYmFzZSIsIkZvcm1CYXNlU3RvcmVNYW5hZ2VyIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsIkxpc3RTdG9yZU1hbmFnZXIiLCJpdGVtcyIsImxlbmd0aCIsImlzVGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJzdGF0ZSIsImZldGNoaW5nIiwidG90YWxJdGVtcyIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiVmlld1N0b3JlTWFuYWdlciIsIk1vZGVsIiwiaWQiLCJqb2luU3BlY3MiLCJjb2RlIl0sInNvdXJjZXMiOlsiL3RzL2Jhc2UudHMiLCIvdHMvZm9ybS50cyIsIi90cy9saXN0LnRzIiwiL3RzL3ZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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