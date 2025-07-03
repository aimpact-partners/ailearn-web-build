System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/reactive@2.1.0/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-sdk@1.2.0/tracking", "@aimpact/ailearn-app@0.4.2/i18n.ts", "@aimpact/ailearn-app@0.4.2/components/icons"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsReactive210Model) {
      dependency_3 = _beyondJsReactive210Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_4 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_5 = _aimpactAilearnSdk120Tracking;
    }, function (_aimpactAilearnApp042I18nTs) {
      dependency_6 = _aimpactAilearnApp042I18nTs;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp042ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@beyond-js/kernel/texts', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/ailearn-app/i18n.ts', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7]]);
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
        hash: 2062721932,
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
              super({
                properties: ['error']
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIm1vZGVsSWQiLCJhc3NpZ25tZW50SWQiLCJtb2RlbCIsImFjdGl2aXR5SWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidmFsdWUiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJ0cmFja2luZyIsImNyZWRpdHMiLCJ0b3RhbCIsImNvbnN1bWVkIiwiQUlBdmFpbGFibGUiLCJjaGF0SWQiLCJiYWNrTGluayIsImFjdGl2aXR5IiwiY29uc3RydWN0b3IiLCJzcGVjaWZpZXIiLCJwcm9wZXJ0aWVzIiwiQ3VycmVudFRleHRzIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJsb2FkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsIlRyYWNraW5nIiwiZ2V0IiwiaWQiLCJhZGRNb2RlbCIsImFjdGl2aXRpZXMiLCJsb2FkQWN0aXZpdHkiLCJsb2FkQ2hhdCIsImNoYXRNb2RlbCIsImRhdGEiLCJzZXRDcmVkaXRzIiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbSIsIm5hbWUiLCJjb21tdW5pdHkiLCJlbnRpdGllcyIsImZpcnN0IiwibW9kdWxlIiwidGl0bGUiLCJzZXQiLCJlIiwibG9hZFRlc3QiLCJmZXRjaGluZyIsInVwZGF0ZVRyYWNraW5nIiwib25MaXN0ZW5DaGF0IiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwiaWNvbiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb24iXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3L2hlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWFPO1VBQVcsTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQzFFO1VBQVcsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsYUFBYSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZGpGLElBQUFFLFdBQUEsR0FBQVAsT0FBQTtVQUVBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLFNBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLEtBQUEsR0FBQVgsT0FBQTtVQUlPO1VBQVUsTUFBT1ksZ0JBQWlCLFNBQVFKLE1BQUEsQ0FBQUssYUFBcUI7WUFDckVDLE9BQU87WUFFUDs7O1lBR0EsQ0FBQUMsT0FBUTtZQUNSLElBQUlDLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUUsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUMsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUks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