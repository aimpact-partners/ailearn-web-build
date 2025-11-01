System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/reactive@2.1.2/model", "@beyond-js/kernel@0.1.14/texts", "@aimpact/ailearn-sdk@1.2.0/tracking", "@aimpact/ailearn-app@0.7.0/i18n.ts", "@aimpact/ailearn-app@0.7.0/components/icons"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsReactive212Model) {
      dependency_4 = _beyondJsReactive212Model;
    }, function (_beyondJsKernel0114Texts) {
      dependency_5 = _beyondJsKernel0114Texts;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_aimpactAilearnApp070I18nTs) {
      dependency_7 = _aimpactAilearnApp070I18nTs;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp070ComponentsIcons;
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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/entities/assignments/activities/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-app/i18n.ts', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/entities/assignments/activities/base');
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
        hash: 791044219,
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
            #error;
            get error() {
              return this.#error;
            }
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            get hasCredits() {
              const credits = this.#tracking.credits.get();
              return credits.total > 0 && credits.total > credits.consumed;
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
                this.#found = true;
              } catch (e) {
                //	console.trace(e);
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
                this.#error = e;
              } finally {
                this.fetching = false;
                super.ready = true;
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
              this.#error = undefined;
              super.ready = true;
              this.#found = true;
              this.fetching = false;
              this.trigger('change');
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
        hash: 4099954090,
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
            }), _react.default.createElement("h1", {
              className: "h4"
            }, title)), children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIm1vZGVsSWQiLCJhc3NpZ25tZW50SWQiLCJtb2RlbCIsImFjdGl2aXR5SWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidmFsdWUiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsInJlYWR5IiwiZXJyb3IiLCJmb3VuZCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0cmFja2luZyIsImdldCIsInRvdGFsIiwiY29uc3VtZWQiLCJBSUF2YWlsYWJsZSIsImNoYXRJZCIsImJhY2tMaW5rIiwiYWN0aXZpdHkiLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsIkN1cnJlbnRUZXh0cyIsInNlc3Npb25JZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsInN0b3JlIiwibG9hZCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJUcmFja2luZyIsImlkIiwiYWRkTW9kZWwiLCJhY3Rpdml0aWVzIiwibG9hZEFjdGl2aXR5IiwibG9hZENoYXQiLCJjaGF0TW9kZWwiLCJkYXRhIiwic2V0Q3JlZGl0cyIsImJyZWFkY3J1bWIiLCJjbGFzc3Jvb20iLCJuYW1lIiwiY29tbXVuaXR5IiwiZW50aXRpZXMiLCJmaXJzdCIsIm1vZHVsZSIsInRpdGxlIiwic2V0IiwiZSIsImZldGNoaW5nIiwibG9hZFRlc3QiLCJ1bmRlZmluZWQiLCJ1cGRhdGVUcmFja2luZyIsIm9uTGlzdGVuQ2hhdCIsIl9pY29ucyIsIkFjdGl2aXR5SGVhZGVyIiwidHlwZSIsImljb24iLCJjaGlsZHJlbiIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy9oZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWFPO1VBQVcsTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQzFFO1VBQVcsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsYUFBYSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZGpGLElBQUFFLFdBQUEsR0FBQVAsT0FBQTtVQUVBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLFNBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLEtBQUEsR0FBQVgsT0FBQTtVQUlPO1VBQVUsTUFBT1ksZ0JBQWlCLFNBQVFKLE1BQUEsQ0FBQUssYUFBcUI7WUFDckVDLE9BQU87WUFFUDs7O1lBR0EsQ0FBQUMsT0FBUTtZQUNSLElBQUlDLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUUsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUMsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixP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