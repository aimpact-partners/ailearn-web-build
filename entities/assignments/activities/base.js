System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn-app@0.3.29/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/ailearn-app@0.3.29/i18n.ts", "@aimpact/ailearn-app@0.3.29/components/icons"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0329MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp0329MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_3 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_4 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_5 = _aimpactAilearnSdk110Tracking;
    }, function (_aimpactAilearnApp0329I18nTs) {
      dependency_6 = _aimpactAilearnApp0329I18nTs;
    }, function (_aimpactAilearnApp0329ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0329ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/kernel", "0.1.9"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.29"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.29/entities/assignments/activities/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@aimpact/reactive/model', dependency_3], ['@beyond-js/kernel/texts', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/ailearn-app/i18n.ts', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.29/entities/assignments/activities/base');
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
        hash: 4101755208,
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
            get backLink() {
              if (this.#testing) {
                return `module/management?id=${this.#modelId}&activityId=${this.#activityId}`;
              }
              return `/assignments/${this.#modelId}`;
            }
            get activity() {
              return this.#model;
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
                if (!testing) {
                  _mainLayout.LayoutBroker.overlay = true;
                  _mainLayout.LayoutBroker.canConsumeCredits = true;
                }
                this.#chatId = chatId;
                this.#testing = testing;
                this.#modelId = modelId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  id: modelId,
                  testing: this.testing
                });
                this.#tracking = tracking;
                if (!testing) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                }
                tracking.on('credits.change', this.triggerEvent);
                tracking.on('credits.change', () => this.triggerEvent('credits.change'));
                const activity = await tracking.activities.loadActivity({
                  id: activityId
                });
                if (chatId) {
                  await activity.loadChat({
                    id: chatId
                  });
                  activity.chatModel.on('action.received', data => tracking.setCredits(data.credits));
                }
                this.#model = activity;
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
            onListenChat = data => {
              if (data?.credits) {
                this.#tracking.set('credits', data.credits);
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIm1vZGVsSWQiLCJhc3NpZ25tZW50SWQiLCJtb2RlbCIsImFjdGl2aXR5SWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidmFsdWUiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJ0cmFja2luZyIsImNyZWRpdHMiLCJ0b3RhbCIsIkFJQXZhaWxhYmxlIiwiY2hhdElkIiwiYmFja0xpbmsiLCJhY3Rpdml0eSIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwiQ3VycmVudFRleHRzIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJsb2FkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsIlRyYWNraW5nIiwiZ2V0IiwiaWQiLCJhZGRNb2RlbCIsImFjdGl2aXRpZXMiLCJsb2FkQWN0aXZpdHkiLCJsb2FkQ2hhdCIsImNoYXRNb2RlbCIsImRhdGEiLCJzZXRDcmVkaXRzIiwiYnJlYWRjcnVtYiIsIm1vZHVsZSIsInRpdGxlIiwic2V0IiwiZSIsInVwZGF0ZVRyYWNraW5nIiwib25MaXN0ZW5DaGF0IiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwiaWNvbiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2hlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWFPO1VBQVcsTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQzFFO1VBQVcsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsYUFBYSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZGpGLElBQUFFLFdBQUEsR0FBQVAsT0FBQTtVQUVBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLFNBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLEtBQUEsR0FBQVgsT0FBQTtVQUlPO1VBQVUsTUFBT1ksZ0JBQWlCLFNBQVFKLE1BQUEsQ0FBQUssYUFBcUI7WUFDckVDLE9BQU87WUFFUDs7O1lBR0EsQ0FBQUMsT0FBUTtZQUNSLElBQUlDLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUUsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUMsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0EsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU9SLEtBQUEsQ0FBQVEsV0FBVyxDQUFDQyxLQUFLO1lBQ3pCO1lBRUEsQ0FB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