System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-sdk@1.2.0/tracking", "@aimpact/ailearn-app@0.4.1/i18n.ts", "@aimpact/ailearn-app@0.4.1/components/icons"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_beyondJsReactive205Model) {
      dependency_4 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_5 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_aimpactAilearnApp041I18nTs) {
      dependency_7 = _aimpactAilearnApp041I18nTs;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp041ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/rvd", "0.4.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/entities/assignments/activities/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-app/i18n.ts', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/entities/assignments/activities/base');
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
        hash: 2398451033,
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
                  if (tracking.classroom?.name) {
                    const community = [this.globalTexts.entities.community, `/community`];
                    const first = tracking.community ? community : [tracking.classroom.name, `/classrooms/view/${tracking.classroom.id}`];
                    breadcrumb = [first, [activity.module.title, `/assignments/${modelId}`], [this.#model.title]];
                  } else {
                    breadcrumb = [[activity.module.title, `/assignments/${modelId}`], [this.#model.title]];
                  }
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
            async loadTest(modelId, activityId) {
              this.fetching = true;
              this.#testing = true;
              this.#modelId = modelId;
              this.#activityId = activityId;
              const tracking = _tracking.Tracking.get({
                id: modelId,
                testing: this.#testing
              });
              const activity = await tracking.activities.loadActivity({
                id: activityId
              });
              this.#model = activity;
              this.#tracking = tracking;
              super.ready = true;
              this.#found = true;
              this.fetching = false;
              this.triggerEvent();
            }
            updateTracking = async () => {
              this.fetching = true;
              const tracking = _tracking.Tracking.get({
                assignmentId: this.assignmentId
              });
              this.#tracking = tracking;
              const activity = await tracking.activities.load({
                id: this.#activityId
              });
              this.#model = activity;
              this.fetching = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIm1vZGVsSWQiLCJhc3NpZ25tZW50SWQiLCJtb2RlbCIsImFjdGl2aXR5SWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidmFsdWUiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJ0cmFja2luZyIsImNyZWRpdHMiLCJ0b3RhbCIsIkFJQXZhaWxhYmxlIiwiY2hhdElkIiwiYmFja0xpbmsiLCJhY3Rpdml0eSIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwiQ3VycmVudFRleHRzIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJsb2FkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsIlRyYWNraW5nIiwiZ2V0IiwiaWQiLCJhZGRNb2RlbCIsImFjdGl2aXRpZXMiLCJsb2FkQWN0aXZpdHkiLCJsb2FkQ2hhdCIsImNoYXRNb2RlbCIsImRhdGEiLCJzZXRDcmVkaXRzIiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbSIsIm5hbWUiLCJjb21tdW5pdHkiLCJlbnRpdGllcyIsImZpcnN0IiwibW9kdWxlIiwidGl0bGUiLCJzZXQiLCJlIiwibG9hZFRlc3QiLCJmZXRjaGluZyIsInVwZGF0ZVRyYWNraW5nIiwib25MaXN0ZW5DaGF0IiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwiaWNvbiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2hlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBYU87VUFBVyxNQUFNQyxhQUFhLEdBQUFDLE9BQUEsQ0FBQUQsYUFBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQW9CLENBQUM7VUFDMUU7VUFBVyxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxhQUFhLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkakYsSUFBQUUsV0FBQSxHQUFBUCxPQUFBO1VBRUEsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsU0FBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsS0FBQSxHQUFBWCxPQUFBO1VBSU87VUFBVSxNQUFPWSxnQkFBaUIsU0FBUUosTUFBQSxDQUFBSyxhQUFxQjtZQUNyRUMsT0FBTztZQUVQOzs7WUFHQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUMsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVE7WUFDckI7WUFFQSxDQUFBRSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7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