System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.2.12/main-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-app@0.2.12/i18n.ts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, IModuleContext, ModuleContext, useModuleContext, BaseStoreManager, __beyond_pkg, hmr;
  _export({
    IModuleContext: void 0,
    ModuleContext: void 0,
    useModuleContext: void 0,
    BaseStoreManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp0212MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0212MainLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_6 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnApp0212I18nTs) {
      dependency_7 = _aimpactAilearnApp0212I18nTs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.12"], ["@aimpact/ailearn-app", "0.2.12"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.12/entities/assignments/activities/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-app/i18n.ts', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.12/entities/assignments/activities/base');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1555775956,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          /*bundle*/
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          /*bundle*/
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1809127903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseStoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          /*bundle*/
          class BaseStoreManager extends _model.ReactiveModel {
            isStore;
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #model;
            get model() {
              return this.#model;
            }
            #activityId;
            get activityId() {
              return this.#activityId;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            #items;
            get items() {
              return this.#items;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #answers = new Map();
            get answers() {
              return this.#answers;
            }
            #texts;
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            get hasCredits() {
              return this.#tracking?.credits?.total > 0;
            }
            get AIAvailable() {
              return this.#tracking?.credits?.total > 0;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #chatId;
            get chatId() {
              return this.#chatId;
            }
            constructor(specifier) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
              _i18n.globalTexts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId, chatId) {
              try {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                this.#chatId = chatId;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  assignmentId
                });
                this.#tracking = tracking;
                globalThis.tracking = tracking;
                globalThis.store = this;
                const activity = await tracking.activities.load({
                  id: activityId
                });
                this.#model = activity;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
              }
            }
            updateTracking = async () => {
              const tracking = _tracking.Tracking.get({
                assignmentId: this.assignmentId
              });
              this.#tracking = tracking;
              const activity = await tracking.activities.load({
                id: this.#activityId
              });
            };
          }
          exports.BaseStoreManager = BaseStoreManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "IModuleContext",
        "name": "IModuleContext"
      }, {
        "im": "./context",
        "from": "ModuleContext",
        "name": "ModuleContext"
      }, {
        "im": "./context",
        "from": "useModuleContext",
        "name": "useModuleContext"
      }, {
        "im": "./store",
        "from": "BaseStoreManager",
        "name": "BaseStoreManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IModuleContext') && _export("IModuleContext", IModuleContext = require ? require('./context').IModuleContext : value);
        (require || prop === 'ModuleContext') && _export("ModuleContext", ModuleContext = require ? require('./context').ModuleContext : value);
        (require || prop === 'useModuleContext') && _export("useModuleContext", useModuleContext = require ? require('./context').useModuleContext : value);
        (require || prop === 'BaseStoreManager') && _export("BaseStoreManager", BaseStoreManager = require ? require('./store').BaseStoreManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsImFzc2lnbm1lbnRJZCIsIm1vZGVsIiwiYWN0aXZpdHlJZCIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ2YWx1ZSIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJ0cmFja2luZyIsImNyZWRpdHMiLCJ0b3RhbCIsIkFJQXZhaWxhYmxlIiwiY2hhdElkIiwiY29uc3RydWN0b3IiLCJzcGVjaWZpZXIiLCJDdXJyZW50VGV4dHMiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImdldCIsImdsb2JhbFRoaXMiLCJzdG9yZSIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsInVwZGF0ZVRyYWNraW5nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWFPO1VBQVcsTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQzFFO1VB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