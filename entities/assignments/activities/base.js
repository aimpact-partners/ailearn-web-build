System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "@aimpact/ailearn-app@0.3.1/i18n.ts", "@aimpact/ailearn-app@0.3.1/components/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, IModuleContext, ModuleContext, useModuleContext, BaseStoreManager, ActivityHeader, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_4 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_6 = _aimpactAilearnSdk100Tracking;
    }, function (_aimpactAilearnApp031I18nTs) {
      dependency_7 = _aimpactAilearnApp031I18nTs;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp031ComponentsIcons;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@aimpact/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-app/i18n.ts', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8]]);
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
        hash: 2196714074,
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