System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-sdk@1.2.0/tracking", "@aimpact/ailearn-app@0.4.2/i18n.ts", "@aimpact/ailearn-app@0.4.2/components/icons"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsReactive205Model) {
      dependency_4 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_5 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_aimpactAilearnApp042I18nTs) {
      dependency_7 = _aimpactAilearnApp042I18nTs;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp042ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-app/i18n.ts', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base');
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
        hash: 2891199388,
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
              return this.#tracking?.credits?.total > 0 && this.#tracking?.credits?.total > this.#tracking?.credits?.consumed;
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
                console.log(9, this.#activityId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIm1vZGVsSWQiLCJhc3NpZ25tZW50SWQiLCJtb2RlbCIsImFjdGl2aXR5SWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidmFsdWUiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJ0cmFja2luZyIsImNyZWRpdHMiLCJ0b3RhbCIsImNvbnN1bWVkIiwiQUlBdmFpbGFibGUiLCJjaGF0SWQiLCJiYWNrTGluayIsImFjdGl2aXR5IiwiY29uc3RydWN0b3IiLCJzcGVjaWZpZXIiLCJDdXJyZW50VGV4dHMiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsImdsb2JhbFRoaXMiLCJzdG9yZSIsImxvYWQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiY29uc29sZSIsImxvZyIsIlRyYWNraW5nIiwiZ2V0IiwiaWQiLCJhZGRNb2RlbCIsImFjdGl2aXRpZXMiLCJsb2FkQWN0aXZpdHkiLCJsb2FkQ2hhdCIsImNoYXRNb2RlbCIsImRhdGEiLCJzZXRDcmVkaXRzIiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbSIsIm5hbWUiLCJjb21tdW5pdHkiLCJlbnRpdGllcyIsImZpcnN0IiwibW9kdWxlIiwidGl0bGUiLCJzZXQiLCJlIiwibG9hZFRlc3QiLCJmZXRjaGluZyIsInVwZGF0ZVRyYWNraW5nIiwib25MaXN0ZW5DaGF0IiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwiaWNvbiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2hlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBYU87VUFBVyxNQUFNQyxhQUFhLEdBQUFDLE9BQUEsQ0FBQUQsYUFBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQW9CLENBQUM7VUFDMUU7VUFBVyxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxhQUFhLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkakYsSUFBQUUsV0FBQSxHQUFBUCxPQUFBO1VBRUEsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsU0FBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsS0FBQSxHQUFBWCxPQUFBO1VBSU87VUFBVSxNQUFPWSxnQkFBaUIsU0FBUUosTUFBQSxDQUFBSyxhQUFxQjtZQUNyRUMsT0FBTztZQUVQOzs7WUFHQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUMsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVE7WUFDckI7WUFFQSxDQUFBRSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8s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