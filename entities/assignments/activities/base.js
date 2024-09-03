System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.17/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-app@0.1.6-dev.17/i18n.ts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, IModuleContext, ModuleContext, useModuleContext, BaseStoreManager, __beyond_pkg, hmr;
  _export({
    IModuleContext: void 0,
    ModuleContext: void 0,
    useModuleContext: void 0,
    BaseStoreManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactAilearnApp016Dev17MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp016Dev17MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_3 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_4 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_5 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnApp016Dev17I18nTs) {
      dependency_6 = _aimpactAilearnApp016Dev17I18nTs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.17"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/entities/assignments/activities/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@beyond-js/kernel/texts', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/ailearn-app/i18n.ts', dependency_6]]);
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
        hash: 121885797,
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
              globalThis.sm = this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsImFzc2lnbm1lbnRJZCIsIm1vZGVsIiwiYWN0aXZpdHlJZCIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ2YWx1ZSIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJ0cmFja2luZyIsImNyZWRpdHMiLCJ0b3RhbCIsIkFJQXZhaWxhYmxlIiwiY2hhdElkIiwiY29uc3RydWN0b3IiLCJzcGVjaWZpZXIiLCJDdXJyZW50VGV4dHMiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsImdsb2JhbFRoaXMiLCJzbSIsImxvYWQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImdldCIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsInVwZGF0ZVRyYWNraW5nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWFPO1VBQVcsTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQzFFO1VBQVcsTUFB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