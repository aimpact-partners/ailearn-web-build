System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-app@0.3.1/i18n.ts", "@aimpact/ailearn-app@0.3.1/components/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, IModuleContext, ModuleContext, useModuleContext, BaseStoreManager, ActivityHeader, __beyond_pkg, hmr;
  _export({
    IModuleContext: void 0,
    ModuleContext: void 0,
    useModuleContext: void 0,
    BaseStoreManager: void 0,
    ActivityHeader: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_3 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_4 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_5 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnApp031I18nTs) {
      dependency_6 = _aimpactAilearnApp031I18nTs;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp031ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/entities/assignments/activities/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@aimpact/reactive/model', dependency_3], ['@beyond-js/kernel/texts', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/ailearn-app/i18n.ts', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/entities/assignments/activities/base');
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
        hash: 795247720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseStoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@aimpact/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          /*bundle*/
          class BaseStoreManager extends _model.ReactiveModel {
            isStore;
            /**
             * Can be the assignmentId or  a draftId in testing cases.
             */
            #modelId;
            get assignmentId() {
              return this.#modelId;
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
            #testing;
            get testing() {
              return this.#testing;
            }
            set testing(value) {
              if (this.#testing === value) return;
              this.#testing = value;
              this.trigger('change');
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
            #backLink;
            get backLink() {
              if (this.#testing) {
                return `module/management?id=${this.#modelId}&activityId=${this.#activityId}`;
              }
              return `/assignments/${this.#modelId}`;
            }
            constructor(specifier) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              if (!this.assignmentId) this.#modelId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
              _i18n.globalTexts.on('change', this.triggerEvent);
              globalThis.store = this;
            }
            /**
             *
             * @param assignmentId
             * @param activityId
             * @param chatId
             * @returns
             */
            async load(modelId, activityId, chatId, testing = false) {
              try {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                this.#chatId = chatId;
                this.#testing = testing;
                // LayoutBroker.backLink = `/assignments/${modelId}`;
                if (modelId === this.#modelId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#modelId = modelId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  id: modelId,
                  testing: this.testing
                });
                tracking.on('credits.change', this.triggerEvent);
                tracking.on('credits.change', () => this.triggerEvent('credits.change'));
                this.#tracking = tracking;
                const activity = await tracking.activities.loadActivity({
                  id: activityId
                });
                this.#model = activity;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                let breadcrumb, backLink;
                if (!testing) {
                  breadcrumb = [[activity.module.title, `/assignments/${modelId}`], [this.#model.title]];
                  backLink = `/assignments/${modelId}`;
                  _mainLayout.LayoutBroker.set({
                    overlay: true,
                    breadcrumb,
                    backLink
                  });
                }
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                //	console.trace(e);
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
              await tracking.activities.load({
                id: this.#activityId
              });
            };
          }
          exports.BaseStoreManager = BaseStoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/header
      *****************************/

      ims.set('./view/header', {
        hash: 2647478853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          /*bundle*/
          function ActivityHeader({
            type,
            title,
            icon,
            children
          }) {
            const cls = `activity-header activity-header--${type}`;
            return _react.default.createElement("div", {
              className: "header-container"
            }, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("span", {
              className: "header__title"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            }), _react.default.createElement("h1", null, title)), children));
          }
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
      }, {
        "im": "./view/header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
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
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./view/header').ActivityHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIm1vZGVsSWQiLCJhc3NpZ25tZW50SWQiLCJtb2RlbCIsImFjdGl2aXR5SWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidmFsdWUiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJ0cmFja2luZyIsImNyZWRpdHMiLCJ0b3RhbCIsIkFJQXZhaWxhYmxlIiwiY2hhdElkIiwiYmFja0xpbmsiLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsIkN1cnJlbnRUZXh0cyIsInNlc3Npb25JZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsInN0b3JlIiwibG9hZCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsIlRyYWNraW5nIiwiZ2V0IiwiaWQiLCJhY3Rpdml0eSIsImFjdGl2aXRpZXMiLCJsb2FkQWN0aXZpdHkiLCJicmVhZGNydW1iIiwibW9kdWxlIiwidGl0bGUiLCJzZXQiLCJlIiwidXBkYXRlVHJhY2tpbmciLCJfaWNvbnMiLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJpY29uIiwiY2hpbGRyZW4iLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvaGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6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