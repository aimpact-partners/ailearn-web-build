System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.6.1/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.6.1/components/icons", "@aimpact/ailearn-app@0.6.1/config", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/collapsible", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/form", "react-simple-wysiwyg@3.2.2", "@aimpact/ailearn-app@0.6.1/model/wrapper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, ContentInformation, DesktopView, ActivityView, MobileView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    Aside: void 0,
    ContentInformation: void 0,
    DesktopView: void 0,
    ActivityView: void 0,
    MobileView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_4 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp061EntitiesAssignmentsActivitiesBase) {
      dependency_6 = _aimpactAilearnApp061EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_aimpactAilearnApp061Config) {
      dependency_9 = _aimpactAilearnApp061Config;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_10 = _aimpactAilearnApp061ComponentsUi;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_12 = _aimpactAilearnApp061SharedHooks;
    }, function (_pragmateUi108Collapsible) {
      dependency_13 = _pragmateUi108Collapsible;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108List) {
      dependency_15 = _pragmateUi108List;
    }, function (_pragmateUi108Tabs) {
      dependency_16 = _pragmateUi108Tabs;
    }, function (_pragmateUi108Form) {
      dependency_17 = _pragmateUi108Form;
    }, function (_reactSimpleWysiwyg2) {
      dependency_18 = _reactSimpleWysiwyg2;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_19 = _aimpactAilearnApp061ModelWrapper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/assignments/written",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/shared/hooks', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/form', dependency_17], ['react-simple-wysiwyg', dependency_18], ['@aimpact/ailearn-app/model/wrapper', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-written",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/assignments/written.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/written/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/assignments/written.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2560799468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.ActivityView;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.testing = this.uri.qs.get('type') === 'draft';
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              _mainLayout.LayoutBroker.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1659242465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _beyond_context = require("beyond_context");
          /*bundle*/ //@ts-ignore

          class StoreManager extends _base.BaseStoreManager {
            isStore = true;
            #introduction;
            get introduction() {
              return this.#introduction;
            }
            #activityId;
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #view = 'form';
            get view() {
              return this.#view;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #modelId;
            get modelId() {
              return this.#modelId;
            }
            #testing;
            constructor({
              testing
            } = {
              testing: false
            }) {
              super(_beyond_context.module.specifier);
              this.#testing = testing;
            }
            async load(assigmentId, activityId) {
              await super.load(assigmentId, activityId);
              this.#view = this.model.data ? 'analysis' : 'form';
              this.triggerEvent();
            }
            async loadTest(draftId, activityId) {
              super.loadTest(draftId, activityId);
              this.#modelId = draftId;
              this.triggerEvent();
            }
            setView(value) {
              this.#view = value;
              this.triggerEvent();
            }
            cleanError() {
              this.error = null;
            }
            publish = async value => {
              try {
                this.fetching = true;
                const specs = {
                  params: {
                    text: value,
                    activityId: this.activityId
                  },
                  type: 'written'
                };
                if (this.#testing) specs.params.draftId = this.#modelId;else specs.params.assignmentId = this.assignmentId;
                await this.model.publish(specs);
                this.#view = 'analysis';
                await this.model.load();
              } catch (error) {
                this.error = this.texts.errors.default;
                throw error;
              } finally {
                setTimeout(() => {
                  this.fetching = false;
                }, 1000);
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 3324439846,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _react = require("react");
          var _context = require("../context");
          var _transcription = require("./transcription");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function Analysis() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const feedback = store.model.data.attempts[0];
            const keys = Object.keys(feedback.assessment);
            return _react.default.createElement("section", {
              className: "analysis__container"
            }, _react.default.createElement("div", {
              className: "activity__content-container"
            }, _react.default.createElement(_transcription.Transcription, null)), _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement("h6", null, texts.analysis.report), _react.default.createElement("div", {
              className: "feedback__container"
            }, keys.map((property, index) => {
              const item = feedback.assessment[property];
              const icon = `points${item.points}`;
              return _react.default.createElement("article", {
                key: item.name.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container hidden-xs"
              }, _react.default.createElement(_icons.AppIcon, {
                className: "assessment__analysis-icon",
                icon: icon
              })), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement(_icons.AppIcon, {
                className: "visible-xs assessment__analysis-icon",
                icon: icon
              }), _react.default.createElement("h6", null, item.name)), _react.default.createElement("p", null, item.feedback)));
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/analysis/transcription
      **********************************************/

      ims.set('./views/analysis/transcription', {
        hash: 123305495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Transcription = Transcription;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _collapsible = require("pragmate-ui/collapsible");
          function Transcription() {
            const {
              store,
              screenSize,
              texts
            } = (0, _context.useModuleContext)();
            const feedback = store.model.data.attempts[0];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, texts.analysis.transcript)), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_components.HtmlWrapper, null, feedback.transcription))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/aside
      ****************************************/

      ims.set('./views/components/aside', {
        hash: 413812992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _information = require("./information");
          /*bundle*/
          function Aside() {
            return _react.default.createElement("aside", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/information
      **********************************************/

      ims.set('./views/components/information', {
        hash: 923342008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentInformation = ContentInformation;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _list = require("pragmate-ui/list");
          var _tabs = require("pragmate-ui/tabs");
          /*bundle*/
          function ContentInformation() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.getSpecs().task?.replace('%1', userName);
            const Item = ({
              item
            }) => {
              return _react.default.createElement("div", {
                className: "aside__item-list"
              }, _react.default.createElement("h6", null, item.name), _react.default.createElement("span", null, item.subject));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover activity",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, texts.activity), _react.default.createElement(_tabs.Tab, null, texts.criteria)), _react.default.createElement(_tabs.Panes, {
              className: "panes__container"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            }), _react.default.createElement("div", null, _react.default.createElement(_list.List, {
              as: "div",
              className: "list-unstyled",
              items: store.model.getSpecs().criteria,
              control: Item
            }))))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1391318479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/desktop
      *******************************/

      ims.set('./views/desktop', {
        hash: 2721581271,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _analysis = require("./analysis");
          var _aside = require("./components/aside");
          var _form = require("./form");
          var _tabs = require("./tabs");
          /*bundle*/
          function DesktopView({
            store
          }) {
            const view = !!store.model?.data ? 'analysis' : 'form';
            const cls = `scrolleable-child main-container${view === 'analysis' ? 'analysis-view' : ''}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container assessment-activity"
            }, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: "written",
              type: store.model.type
            }), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-pl"
            }, _react.default.createElement(_tabs.ButtonTabs, {
              selected: store.view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_aside.Aside, null)), _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: store.view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_form.FormView, null)
              }
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 1425385457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormView = FormView;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _reactSimpleWysiwyg = require("react-simple-wysiwyg");
          var _context = require("../context");
          var _toolbarActions = require("./toolbar-actions");
          function FormView() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [value, setValue] = _react.default.useState('');
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            (0, _hooks.useStore)(store, ['fetching.changed', 'error.changed']);
            const onChange = e => {
              setValue(e.target.value);
            };
            const closeModal = () => {
              setShowCoinsModal(false);
            };
            const onSuccess = () => {
              try {
                store.publish(value);
                closeModal();
              } catch (e) {
                console.log(11, e);
                setError(store.texts.errors.default);
              }
            };
            const onSubmit = event => {
              event.preventDefault();
              // Check if user has credits before publishing
              if (!store.hasCredits) {
                setShowCoinsModal(true);
                return;
              }
              onSuccess();
            };
            const disabled = store.fetching;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity__form",
              onSubmit: onSubmit
            }, store.error && _react.default.createElement(_ui.ErrorRenderer, {
              error: store.error,
              variant: "error"
            }), _react.default.createElement("div", {
              className: "editor__container"
            }, _react.default.createElement(_reactSimpleWysiwyg.default, {
              autoFocus: true,
              onChange: onChange,
              value: value,
              placeholder: 'hola',
              disabled: disabled
            }, _react.default.createElement(_reactSimpleWysiwyg.Toolbar, null, _react.default.createElement(_toolbarActions.ToolbarAction, {
              command: "bold"
            }), _react.default.createElement(_toolbarActions.ToolbarAction, {
              command: "italic"
            }), _react.default.createElement(_toolbarActions.ToolbarAction, {
              command: "insertUnorderedList"
            }), _react.default.createElement(_toolbarActions.ToolbarAction, {
              command: "insertOrderedList"
            }), _react.default.createElement(_toolbarActions.ToolbarAction, {
              command: "justifyCenter"
            }))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: store.fetching
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: value.length === 0 || disabled,
              type: "submit"
            }, store.texts.form.submit))), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              type: "interactive",
              onConsume: store.model.consumeCoins,
              onSuccess: onSuccess
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/form/toolbar-actions
      ********************************************/

      ims.set('./views/form/toolbar-actions', {
        hash: 1619378127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ToolbarAction = ToolbarAction;
          var _react = require("react");
          var _reactSimpleWysiwyg = require("react-simple-wysiwyg");
          const BtnAlignCenter = (0, _reactSimpleWysiwyg.createButton)('Align center', '≡', 'justifyCenter');
          // Mapping object that associates commands with their corresponding button components
          const TOOLBAR_BUTTONS = {
            bold: _reactSimpleWysiwyg.BtnBold,
            italic: _reactSimpleWysiwyg.BtnItalic,
            createLink: _reactSimpleWysiwyg.BtnLink,
            insertUnorderedList: _reactSimpleWysiwyg.BtnBulletList,
            insertOrderedList: _reactSimpleWysiwyg.BtnNumberedList,
            justifyCenter: BtnAlignCenter
          };
          function ToolbarAction({
            command,
            className = ''
          }) {
            const [isActive, setIsActive] = _react.default.useState(false);
            const buttonRef = _react.default.useRef(null);
            // Get the corresponding button component
            const ButtonComponent = TOOLBAR_BUTTONS[command];
            // Function to check if the command is active
            const checkCommandState = () => {
              if (typeof document.queryCommandState === 'function') {
                return document.queryCommandState(command);
              }
              return false;
            };
            // Function to check if the command is active using queryCommandValue
            const checkCommandValue = () => {
              if (typeof document.queryCommandValue === 'function') {
                const value = document.queryCommandValue(command);
                return value === 'true' || value === command;
              }
              return false;
            };
            // Function to check active state using different methods
            const checkActiveState = () => {
              let commandActive = false;
              // For basic formatting commands
              if (['bold', 'italic', 'underline'].includes(command)) {
                commandActive = checkCommandState();
              }
              // For alignment commands
              else if (['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'].includes(command)) {
                const currentValue = document.queryCommandValue('justifyLeft') || document.queryCommandValue('justifyCenter') || document.queryCommandValue('justifyRight') || document.queryCommandValue('justifyFull');
                commandActive = currentValue === command;
              }
              // For list commands
              else if (['insertUnorderedList', 'insertOrderedList'].includes(command)) {
                commandActive = checkCommandState();
              }
              // For link commands
              else if (command === 'createLink') {
                // Check if there's a link in the current selection
                const selection = window.getSelection();
                if (selection && selection.rangeCount > 0) {
                  const range = selection.getRangeAt(0);
                  const container = range.commonAncestorContainer;
                  const linkElement = container.nodeType === Node.ELEMENT_NODE ? container.closest('a') : container.parentElement?.closest('a');
                  commandActive = !!linkElement;
                }
              }
              setIsActive(commandActive);
            };
            // Effect to check initial state and set up listeners
            _react.default.useEffect(() => {
              // Check initial state
              checkActiveState();
              // Set up listeners to detect selection changes
              const handleSelectionChange = () => {
                // Use setTimeout to ensure the command has been executed
                setTimeout(checkActiveState, 0);
              };
              const handleMouseUp = () => {
                // Check state after clicking
                setTimeout(checkActiveState, 10);
              };
              const handleKeyUp = () => {
                // Check state after using keyboard shortcuts
                setTimeout(checkActiveState, 0);
              };
              // Add listeners to document
              document.addEventListener('selectionchange', handleSelectionChange);
              document.addEventListener('mouseup', handleMouseUp);
              document.addEventListener('keyup', handleKeyUp);
              // Cleanup
              return () => {
                document.removeEventListener('selectionchange', handleSelectionChange);
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('keyup', handleKeyUp);
              };
            }, [command]);
            // Dynamic CSS class
            const containerClassName = `toolbar-action${isActive ? ' toolbar-action--active' : ''}${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              ref: buttonRef,
              className: containerClassName
            }, _react.default.createElement(ButtonComponent, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 1802278743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2988296356,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
          function ActivityView({
            store
          }) {
            const [error, setError] = _react.default.useState(undefined);
            const {
              items,
              ready
            } = store;
            const {
              texts
            } = store;
            const screenSize = (0, _hooks.useMediaQuery)();
            (0, _hooks.useStore)(store, ['change']);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              store,
              texts,
              items,
              error,
              setError,
              screenSize
            };
            const props = {
              store
            };
            return _react.default.createElement("div", null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopView, {
              ...props
            }) : _react.default.createElement(_mobile.MobileView, {
              ...props
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/mobile
      ******************************/

      ims.set('./views/mobile', {
        hash: 868159705,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _information = require("./components/information");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _analysis = require("./analysis");
          var _form = require("./form");
          var _tabs2 = require("./tabs");
          /*bundle*/
          function MobileView({
            store
          }) {
            const [items] = (0, _react.useState)(store.items);
            const {
              view,
              texts
            } = store;
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const {
              assignmentId,
              id
            } = store.model;
            const audioUrl = `${_wrapper.settings.apis.ailearn}/assignments/${assignmentId}/activities/${id}/progress/${userId}/audio`;
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs.TabsContainer, {
              className: "activity-tabs",
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement("div", null, _react.default.createElement(_tabs2.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_form.FormView, null)
              }
            })), _react.default.createElement("div", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null))), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs.Tab, null, texts.tabs.activity))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/tabs
      ****************************/

      ims.set('./views/tabs', {
        hash: 4113523623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonTabs = ButtonTabs;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function ButtonTabs({
            selected,
            available
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            if (!available) return null;
            const onChange = event => {
              const view = event.currentTarget.dataset.view;
              store.setView(view);
            };
            return React.createElement("div", {
              className: "flex-container space-between mt-15"
            }, React.createElement(_components.ButtonGroup, {
              selected: selected,
              variant: "primary",
              onChange: onChange
            }, React.createElement(_components.Button, {
              "data-view": "analysis"
            }, texts.tabs.analysis, " "), React.createElement(_components.Button, {
              "data-view": "record"
            }, texts.tabs.redo, " ")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./views/components/aside",
        "from": "Aside",
        "name": "Aside"
      }, {
        "im": "./views/components/information",
        "from": "ContentInformation",
        "name": "ContentInformation"
      }, {
        "im": "./views/desktop",
        "from": "DesktopView",
        "name": "DesktopView"
      }, {
        "im": "./views/index",
        "from": "ActivityView",
        "name": "ActivityView"
      }, {
        "im": "./views/mobile",
        "from": "MobileView",
        "name": "MobileView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'Aside') && _export("Aside", Aside = require ? require('./views/components/aside').Aside : value);
        (require || prop === 'ContentInformation') && _export("ContentInformation", ContentInformation = require ? require('./views/components/information').ContentInformation : value);
        (require || prop === 'DesktopView') && _export("DesktopView", DesktopView = require ? require('./views/desktop').DesktopView : value);
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/index').ActivityView : value);
        (require || prop === 'MobileView') && _export("MobileView", MobileView = require ? require('./views/mobile').MobileView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsInBhcmFtc1VyaSIsInZpZXciLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImFzc2lnbWVudElkIiwibW9kZWwiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwiY2xlYW5FcnJvciIsImVycm9yIiwicHVibGlzaCIsImZldGNoaW5nIiwic3BlY3MiLCJwYXJhbXMiLCJ0ZXh0IiwidHlwZSIsImFzc2lnbm1lbnRJZCIsInRleHRzIiwiZXJyb3JzIiwiZGVmYXVsdCIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl90cmFuc2NyaXB0aW9uIiwiX2ljb25zIiwiQW5hbHlzaXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZmVlZGJhY2siLCJhdHRlbXB0cyIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlRyYW5zY3JpcHRpb24iLCJhbmFseXNpcyIsInJlcG9ydCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwiaWNvbiIsInBvaW50cyIsImtleSIsIm5hbWUiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9jb21wb25lbnRzIiwiX2NvbGxhcHNpYmxlIiwic2NyZWVuU2l6ZSIsIkZyYWdtZW50IiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0cmFuc2NyaXB0IiwiQ29sbGFwc2libGVDb250ZW50IiwiSHRtbFdyYXBwZXIiLCJ0cmFuc2NyaXB0aW9uIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwiSXRlbSIsInN1YmplY3QiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsImFjdGl2aXR5IiwiY3JpdGVyaWEiLCJQYW5lcyIsIk1hcmtkb3duIiwiY29udGVudCIsIkxpc3QiLCJhcyIsIml0ZW1zIiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmFseXNpcyIsIl9hc2lkZSIsIl9mb3JtIiwiRGVza3RvcFZpZXciLCJjbHMiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiZmFsc2UiLCJGb3JtVmlldyIsIl9ob29rcyIsIl9yZWFjdFNpbXBsZVd5c2l3eWciLCJfdG9vbGJhckFjdGlvbnMiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNldEVycm9yIiwidXNlU3RvcmUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjbG9zZU1vZGFsIiwib25TdWNjZXNzIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NyZWRpdHMiLCJkaXNhYmxlZCIsIkZvcm0iLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsImF1dG9Gb2N1cyIsInBsYWNlaG9sZGVyIiwiVG9vbGJhciIsIlRvb2xiYXJBY3Rpb24iLCJjb21tYW5kIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkJ1dHRvbiIsImxlbmd0aCIsImZvcm0iLCJzdWJtaXQiLCJDb2luc01vZGFsIiwib25DbG9zZSIsImdsb2JhbFRleHRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiQnRuQWxpZ25DZW50ZXIiLCJjcmVhdGVCdXR0b24iLCJUT09MQkFSX0JVVFRPTlMiLCJib2xkIiwiQnRuQm9sZCIsIml0YWxpYyIsIkJ0bkl0YWxpYyIsImNyZWF0ZUxpbmsiLCJCdG5MaW5rIiwiaW5zZXJ0VW5vcmRlcmVkTGlzdCIsIkJ0bkJ1bGxldExpc3QiLCJpbnNlcnRPcmRlcmVkTGlzdCIsIkJ0bk51bWJlcmVkTGlzdCIsImp1c3RpZnlDZW50ZXIiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwiQnV0dG9uQ29tcG9uZW50IiwiY2hlY2tDb21tYW5kU3RhdGUiLCJkb2N1bWVudCIsInF1ZXJ5Q29tbWFuZFN0YXRlIiwiY2hlY2tDb21tYW5kVmFsdWUiLCJxdWVyeUNvbW1hbmRWYWx1ZSIsImNoZWNrQWN0aXZlU3RhdGUiLCJjb21tYW5kQWN0aXZlIiwiaW5jbHVkZXMiLCJjdXJyZW50VmFsdWUiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwicmFuZ2UiLCJnZXRSYW5nZUF0IiwiY29udGFpbmVyIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJsaW5rRWxlbWVudCIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwidXNlRWZmZWN0IiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZUtleVVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWluZXJDbGFzc05hbWUiLCJyZWYiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInVuZGVmaW5lZCIsInJlYWR5IiwidXNlTWVkaWFRdWVyeSIsIlBhZ2VMb2FkZXIiLCJjb250ZXh0VmFsdWUiLCJwcm9wcyIsIlByb3ZpZGVyIiwiTW9iaWxlVmlldyIsIl93cmFwcGVyIiwiX3RhYnMyIiwiaWQiLCJ1c2VySWQiLCJhdWRpb1VybCIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJ0YWJzIiwiUmVhY3QiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwicmVkbyJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYW5hbHlzaXMvdHJhbnNjcmlwdGlvbi50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXNpZGUudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2luZm9ybWF0aW9uLnRzeCIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvZGVza3RvcC50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiLy90cy92aWV3cy9mb3JtL3Rvb2xiYXItYWN0aW9ucy50c3giLCIvL2dsb2JhbC50c3gvIiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvL3RzL3ZpZXdzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxZQUFZO1lBQ3BCO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sT0FBTyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPO2NBQ3pELElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdFO1lBRUE7OztZQUdBRyxJQUFJQSxDQUFBO2NBQ0huQixXQUFBLENBQUFvQixZQUFZLENBQUNDLEtBQUssRUFBRTtZQUNyQjs7VUFDQUMsT0FBQSxDQUFBakIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCRCxJQUFBa0IsS0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixlQUFBLEdBQUF2QixPQUFBO1VBR08sV0FMUDs7VUFLaUIsTUFBT1EsWUFBYSxTQUFRYyxLQUFBLENBQUFFLGdCQUFnQjtZQUc1REMsT0FBTyxHQUFHLElBQUk7WUFnQmQsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQUMsVUFBVztZQUVYLENBQUFDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUFDLElBQUssR0FBd0IsTUFBTTtZQUNuQyxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFuQixPQUFRO1lBRVJvQixZQUFZO2NBQUVwQjtZQUFPLElBQTJCO2NBQUVBLE9BQU8sRUFBRTtZQUFLLENBQUU7Y0FDakUsS0FBSyxDQUFDVyxlQUFBLENBQUFVLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO2NBQ3ZCLElBQUksQ0FBQyxDQUFBdEIsT0FBUSxHQUFHQSxPQUFPO1lBQ3hCO1lBRUEsTUFBTUksSUFBSUEsQ0FBQ21CLFdBQVcsRUFBRVIsVUFBVTtjQUNqQyxNQUFNLEtBQUssQ0FBQ1gsSUFBSSxDQUFDbUIsV0FBVyxFQUFFUixVQUFVLENBQUM7Y0FDekMsSUFBSSxDQUFDLENBQUFFLElBQUssR0FBRyxJQUFJLENBQUNPLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLFVBQVUsR0FBRyxNQUFNO2NBQ2xELElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTUMsUUFBUUEsQ0FBQ0MsT0FBTyxFQUFFYixVQUFVO2NBQ2pDLEtBQUssQ0FBQ1ksUUFBUSxDQUFDQyxPQUFPLEVBQUViLFVBQVUsQ0FBQztjQUNuQyxJQUFJLENBQUMsQ0FBQUksT0FBUSxHQUFHUyxPQUFPO2NBQ3ZCLElBQUksQ0FBQ0YsWUFBWSxFQUFFO1lBQ3BCO1lBRUFHLE9BQU9BLENBQUNDLEtBQTBCO2NBQ2pDLElBQUksQ0FBQyxDQUFBYixJQUFLLEdBQUdhLEtBQUs7Y0FDbEIsSUFBSSxDQUFDSixZQUFZLEVBQUU7WUFDcEI7WUFDQUssVUFBVUEsQ0FBQTtjQUNULElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7WUFDbEI7WUFDQUMsT0FBTyxHQUFHLE1BQU1ILEtBQUssSUFBRztjQUN2QixJQUFJO2dCQUNILElBQUksQ0FBQ0ksUUFBUSxHQUFHLElBQUk7Z0JBRXBCLE1BQU1DLEtBQUssR0FHUDtrQkFDSEMsTUFBTSxFQUFFO29CQUNQQyxJQUFJLEVBQUVQLEtBQUs7b0JBQ1hmLFVBQVUsRUFBRSxJQUFJLENBQUNBO21CQUNqQjtrQkFDRHVCLElBQUksRUFBRTtpQkFDTjtnQkFDRCxJQUFJLElBQUksQ0FBQyxDQUFBdEMsT0FBUSxFQUFFbUMsS0FBSyxDQUFDQyxNQUFNLENBQUNSLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQVQsT0FBUSxDQUFDLEtBQ25EZ0IsS0FBSyxDQUFDQyxNQUFNLENBQUNHLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVk7Z0JBRWxELE1BQU0sSUFBSSxDQUFDZixLQUFLLENBQUNTLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDO2dCQUMvQixJQUFJLENBQUMsQ0FBQWxCLElBQUssR0FBRyxVQUFVO2dCQUN2QixNQUFNLElBQUksQ0FBQ08sS0FBSyxDQUFDcEIsSUFBSSxFQUFFO2VBQ3ZCLENBQUMsT0FBTzRCLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUNBLEtBQUssR0FBRyxJQUFJLENBQUNRLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPO2dCQUN0QyxNQUFNVixLQUFLO2VBQ1gsU0FBUztnQkFDVFcsVUFBVSxDQUFDLE1BQUs7a0JBQ2YsSUFBSSxDQUFDVCxRQUFRLEdBQUcsS0FBSztnQkFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQzs7WUFFVixDQUFDOztVQUNEekIsT0FBQSxDQUFBYixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekdELElBQUFnRCxNQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQXlELFFBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBMEQsY0FBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUEyRCxNQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVTRELFFBQVFBLENBQUE7WUFDdkIsTUFBTTtjQUFFdEQsS0FBSztjQUFFOEM7WUFBSyxDQUFFLEdBQUcsSUFBQUssUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNQyxRQUFRLEdBQUd4RCxLQUFLLENBQUM4QixLQUFLLENBQUNDLElBQUksQ0FBQzBCLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQUksQ0FBQ0YsUUFBUSxDQUFDSSxVQUFVLENBQUM7WUFFN0MsT0FDQ1YsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXFCLEdBQ3ZDWixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0NaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNULGNBQUEsQ0FBQVcsYUFBYSxPQUFHLENBQ1osRUFDTmIsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQU8sR0FDckJaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLGFBQUtmLEtBQUssQ0FBQ2tCLFFBQVEsQ0FBQ0MsTUFBTSxDQUFNLEVBQ2hDZixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbENKLElBQUksQ0FBQ1EsR0FBRyxDQUFDLENBQUNDLFFBQVEsRUFBRUMsS0FBSyxLQUFJO2NBQzdCLE1BQU1DLElBQUksR0FBR2IsUUFBUSxDQUFDSSxVQUFVLENBQUNPLFFBQVEsQ0FBQztjQUUxQyxNQUFNRyxJQUFJLEdBQUcsU0FBU0QsSUFBSSxDQUFDRSxNQUFNLEVBQUU7Y0FDbkMsT0FDQ3JCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBO2dCQUFTVyxHQUFHLEVBQUVILElBQUksQ0FBQ0ksSUFBSSxDQUFDQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFBRVosU0FBUyxFQUFDO2NBQTJCLEdBQzlFWixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQTtnQkFBU0MsU0FBUyxFQUFDO2NBQWlDLEdBQ25EWixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDUixNQUFBLENBQUFzQixPQUFPO2dCQUFDYixTQUFTLEVBQUMsMkJBQTJCO2dCQUFDUSxJQUFJLEVBQUVBO2NBQUksRUFBSSxDQUNwRCxFQUNWcEIsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsa0JBQ0NYLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLGlCQUNDWCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDUixNQUFBLENBQUFzQixPQUFPO2dCQUFDYixTQUFTLEVBQUMsc0NBQXNDO2dCQUFDUSxJQUFJLEVBQUVBO2NBQUksRUFBSSxFQUN4RXBCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLGFBQUtRLElBQUksQ0FBQ0ksSUFBSSxDQUFNLENBQ1osRUFDVHZCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLFlBQUlRLElBQUksQ0FBQ2IsUUFBUSxDQUFLLENBQ2IsQ0FDRDtZQUVaLENBQUMsQ0FBQyxDQUNHLENBQ0QsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBTixNQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQXlELFFBQUEsR0FBQXpELE9BQUE7VUFPQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFtRixZQUFBLEdBQUFuRixPQUFBO1VBQ00sU0FBVXFFLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFL0QsS0FBSztjQUFFOEUsVUFBVTtjQUFFaEM7WUFBSyxDQUFFLEdBQUcsSUFBQUssUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV2RCxNQUFNQyxRQUFRLEdBQUd4RCxLQUFLLENBQUM4QixLQUFLLENBQUNDLElBQUksQ0FBQzBCLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFN0MsT0FDQ1AsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQVgsTUFBQSxDQUFBRixPQUFBLENBQUErQixRQUFBLFFBQ0M3QixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDZ0IsWUFBQSxDQUFBRyxvQkFBb0I7Y0FBQ0MsSUFBSTtZQUFBLEdBQ3pCL0IsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQ2dCLFlBQUEsQ0FBQUssaUJBQWlCLFFBQ2pCaEMsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsYUFBS2YsS0FBSyxDQUFDa0IsUUFBUSxDQUFDbUIsVUFBVSxDQUFNLENBQ2pCLEVBQ3BCakMsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQ2dCLFlBQUEsQ0FBQU8sa0JBQWtCLFFBQ2xCbEMsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQ2UsV0FBQSxDQUFBUyxXQUFXLFFBQUU3QixRQUFRLENBQUM4QixhQUFhLENBQWUsQ0FDL0IsQ0FDQyxDQUNyQjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBcEMsTUFBQSxHQUFBeEQsT0FBQTtVQUVBLElBQUE2RixZQUFBLEdBQUE3RixPQUFBO1VBQ087VUFBVSxTQUNSOEYsS0FBS0EsQ0FBQTtZQUNiLE9BQ0N0QyxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQTtjQUFPQyxTQUFTLEVBQUM7WUFBa0IsR0FDbENaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUMwQixZQUFBLENBQUFFLGtCQUFrQixPQUFHLENBQ2Y7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBdkMsTUFBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUFnRyxHQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQXlELFFBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBaUcsUUFBQSxHQUFBakcsT0FBQTtVQUNBLElBQUFrRyxTQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLEtBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBb0csS0FBQSxHQUFBcEcsT0FBQTtVQUVPO1VBQVUsU0FDUitGLGtCQUFrQkEsQ0FBQTtZQUMxQixNQUFNO2NBQUV6RixLQUFLO2NBQUU4QztZQUFLLENBQUUsR0FBRyxJQUFBSyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNDLE1BQU13QyxRQUFRLEdBQUdKLFFBQUEsQ0FBQUssY0FBYyxDQUFDQyxJQUFJLENBQUNDLFdBQVc7WUFDaEQsTUFBTUMsWUFBWSxHQUFHbkcsS0FBSyxDQUFDOEIsS0FBSyxDQUFDc0UsUUFBUSxFQUFFLENBQUNDLElBQUksRUFBRTNCLE9BQU8sQ0FBQyxJQUFJLEVBQUVxQixRQUFRLENBQUM7WUFFekUsTUFBTU8sSUFBSSxHQUFHQSxDQUFDO2NBQUVqQztZQUFJLENBQUUsS0FBSTtjQUN6QixPQUNDbkIsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUE7Z0JBQUtDLFNBQVMsRUFBQztjQUFrQixHQUNoQ1osTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsYUFBS1EsSUFBSSxDQUFDSSxJQUFJLENBQU0sRUFDcEJ2QixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxlQUFPUSxJQUFJLENBQUNrQyxPQUFPLENBQVEsQ0FDdEI7WUFFUixDQUFDO1lBQ0QsT0FDQ3JELE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUFYLE1BQUEsQ0FBQUYsT0FBQSxDQUFBK0IsUUFBQSxRQUNDN0IsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQzZCLEdBQUEsQ0FBQWMsV0FBVztjQUNYMUMsU0FBUyxFQUFDLDZCQUE2QjtjQUN2QzJDLEdBQUcsRUFBRXpHLEtBQUssQ0FBQzhCLEtBQUssQ0FBQzRFLE9BQU87Y0FDeEI5RCxJQUFJLEVBQUU1QyxLQUFLLENBQUM4QixLQUFLLENBQUNjLElBQUk7Y0FDdEIrRCxNQUFNLEVBQUM7WUFBVSxFQUNoQixFQUVGekQsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNpQyxLQUFBLENBQUFjLGFBQWE7Y0FBQ0MsTUFBTSxFQUFFO1lBQUMsR0FDdkIzRCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDaUMsS0FBQSxDQUFBZ0IsSUFBSTtjQUFDaEQsU0FBUyxFQUFDO1lBQVksR0FDM0JaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNpQyxLQUFBLENBQUFpQixHQUFHLFFBQUVqRSxLQUFLLENBQUNrRSxRQUFRLENBQU8sRUFDM0I5RCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDaUMsS0FBQSxDQUFBaUIsR0FBRyxRQUFFakUsS0FBSyxDQUFDbUUsUUFBUSxDQUFPLENBQ3JCLEVBQ1AvRCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDaUMsS0FBQSxDQUFBb0IsS0FBSztjQUFDcEQsU0FBUyxFQUFDO1lBQWtCLEdBQ2xDWixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDK0IsU0FBQSxDQUFBdUIsUUFBUTtjQUFDQyxPQUFPLEVBQUVqQjtZQUFZLEVBQUksRUFFbkNqRCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxjQUNDWCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDZ0MsS0FBQSxDQUFBd0IsSUFBSTtjQUNKQyxFQUFFLEVBQUMsS0FBSztjQUNSeEQsU0FBUyxFQUFDLGVBQWU7Y0FDekJ5RCxLQUFLLEVBQUV2SCxLQUFLLENBQUM4QixLQUFLLENBQUNzRSxRQUFRLEVBQUUsQ0FBQ2EsUUFBUTtjQUN0Q08sT0FBTyxFQUFFbEI7WUFBSSxFQUNaLENBQ0csQ0FDQyxDQUNPLENBQ1gsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBcEQsTUFBQSxHQUFBeEQsT0FBQTtVQVVPLE1BQU0rSCxhQUFhLEdBQUExRyxPQUFBLENBQUEwRyxhQUFBLEdBQUd2RSxNQUFBLENBQUFGLE9BQUssQ0FBQzBFLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU1uRSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTCxNQUFBLENBQUFGLE9BQUssQ0FBQzJFLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUMxRyxPQUFBLENBQUF3QyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYdEUsSUFBQW1DLEdBQUEsR0FBQWhHLE9BQUE7VUFDQSxJQUFBc0IsS0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQXdELE1BQUEsR0FBQXhELE9BQUE7VUFFQSxJQUFBa0ksU0FBQSxHQUFBbEksT0FBQTtVQUNBLElBQUFtSSxNQUFBLEdBQUFuSSxPQUFBO1VBQ0EsSUFBQW9JLEtBQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBb0csS0FBQSxHQUFBcEcsT0FBQTtVQUVPO1VBQVUsU0FDUnFJLFdBQVdBLENBQUM7WUFBRS9IO1VBQUssQ0FBMkI7WUFDdEQsTUFBTXVCLElBQUksR0FBRyxDQUFDLENBQUN2QixLQUFLLENBQUM4QixLQUFLLEVBQUVDLElBQUksR0FBRyxVQUFVLEdBQUcsTUFBTTtZQUN0RCxNQUFNaUcsR0FBRyxHQUFHLG1DQUFtQ3pHLElBQUksS0FBSyxVQUFVLEdBQUcsZUFBZSxHQUFHLEVBQUUsRUFBRTtZQUUzRixPQUNDMkIsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQzZCLEdBQUEsQ0FBQXVDLGFBQWE7Y0FBQ25FLFNBQVMsRUFBQztZQUF5RCxHQUNqRlosTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQzdDLEtBQUEsQ0FBQWtILGNBQWM7Y0FBQ0MsS0FBSyxFQUFFbkksS0FBSyxDQUFDOEIsS0FBSyxDQUFDcUcsS0FBSztjQUFFN0QsSUFBSSxFQUFDLFNBQVM7Y0FBQzFCLElBQUksRUFBRTVDLEtBQUssQ0FBQzhCLEtBQUssQ0FBQ2M7WUFBSSxFQUFJLEVBQ25GTSxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNEMsR0FDMURaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNpQyxLQUFBLENBQUFzQyxVQUFVO2NBQUNDLFFBQVEsRUFBRXJJLEtBQUssQ0FBQ3VCLElBQUksS0FBSyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUM7Y0FBRStHLFNBQVMsRUFBRSxDQUFDLENBQUN0SSxLQUFLLENBQUM4QixLQUFLLENBQUNDO1lBQUksRUFBSSxFQUMxRm1CLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNnRSxNQUFBLENBQUFyQyxLQUFLLE9BQUcsQ0FDSixFQUNOdEMsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUE7Y0FBS0MsU0FBUyxFQUFFa0U7WUFBRyxHQUNsQjlFLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNlLFdBQUEsQ0FBQTJELG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFeEksS0FBSyxDQUFDdUIsSUFBSSxLQUFLLFVBQVU7Y0FDcENrSCxPQUFPO2NBQ1BDLE9BQU8sRUFBRTtnQkFDUkMsSUFBSSxFQUFFekYsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQytELFNBQUEsQ0FBQXRFLFFBQVEsT0FBRztnQkFDbEJzRixLQUFLLEVBQUUxRixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDaUUsS0FBQSxDQUFBZSxRQUFROztZQUNoQixFQUNBLENBQ0csQ0FDUztVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQUMsTUFBQSxHQUFBcEosT0FBQTtVQUNBLElBQUFnRyxHQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBb0ksS0FBQSxHQUFBcEksT0FBQTtVQUNBLElBQUF3RCxNQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQXFKLG1CQUFBLEdBQUFySixPQUFBO1VBQ0EsSUFBQXlELFFBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBc0osZUFBQSxHQUFBdEosT0FBQTtVQUVNLFNBQVVtSixRQUFRQSxDQUFBO1lBQ3ZCLE1BQU07Y0FBRTdJO1lBQUssQ0FBRSxHQUFHLElBQUFtRCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0sQ0FBQ25CLEtBQUssRUFBRTZHLFFBQVEsQ0FBQyxHQUFHL0YsTUFBQSxDQUFBRixPQUFLLENBQUNrRyxRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ3BELE1BQU0sQ0FBQ0MsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHbEcsTUFBQSxDQUFBRixPQUFLLENBQUNrRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQzVHLEtBQUssRUFBRStHLFFBQVEsQ0FBQyxHQUFHbkcsTUFBQSxDQUFBRixPQUFLLENBQUNrRyxRQUFRLENBQWdCLElBQUksQ0FBQztZQUM3RCxJQUFBSixNQUFBLENBQUFRLFFBQVEsRUFBQ3RKLEtBQUssRUFBRSxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ3RELE1BQU11SixRQUFRLEdBQUlDLENBQU0sSUFBSTtjQUMzQlAsUUFBUSxDQUFDTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ3JILEtBQUssQ0FBQztZQUN6QixDQUFDO1lBRUQsTUFBTXNILFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCTixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFDekIsQ0FBQztZQUVELE1BQU1PLFNBQVMsR0FBR0EsQ0FBQSxLQUFLO2NBQ3RCLElBQUk7Z0JBQ0gzSixLQUFLLENBQUN1QyxPQUFPLENBQUNILEtBQUssQ0FBQztnQkFDcEJzSCxVQUFVLEVBQUU7ZUFDWixDQUFDLE9BQU9GLENBQUMsRUFBRTtnQkFDWEksT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFTCxDQUFDLENBQUM7Z0JBQ2xCSCxRQUFRLENBQUNySixLQUFLLENBQUM4QyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDOztZQUV0QyxDQUFDO1lBRUQsTUFBTThHLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUV0QjtjQUNBLElBQUksQ0FBQ2hLLEtBQUssQ0FBQ2lLLFVBQVUsRUFBRTtnQkFDdEJiLGlCQUFpQixDQUFDLElBQUksQ0FBQztnQkFDdkI7O2NBR0RPLFNBQVMsRUFBRTtZQUNaLENBQUM7WUFFRCxNQUFNTyxRQUFRLEdBQUdsSyxLQUFLLENBQUN3QyxRQUFRO1lBQy9CLE9BQ0NVLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUFYLE1BQUEsQ0FBQUYsT0FBQSxDQUFBK0IsUUFBQSxRQUNDN0IsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQ2lFLEtBQUEsQ0FBQXFDLElBQUk7Y0FBQ3JHLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ2dHLFFBQVEsRUFBRUE7WUFBUSxHQUNqRDlKLEtBQUssQ0FBQ3NDLEtBQUssSUFBSVksTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQzZCLEdBQUEsQ0FBQTBFLGFBQWE7Y0FBQzlILEtBQUssRUFBRXRDLEtBQUssQ0FBQ3NDLEtBQUs7Y0FBRStILE9BQU8sRUFBQztZQUFPLEVBQUcsRUFDckVuSCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNrRixtQkFBQSxDQUFBL0YsT0FBTTtjQUFDc0gsU0FBUztjQUFDZixRQUFRLEVBQUVBLFFBQVE7Y0FBRW5ILEtBQUssRUFBRUEsS0FBSztjQUFFbUksV0FBVyxFQUFFLE1BQU07Y0FBRUwsUUFBUSxFQUFFQTtZQUFRLEdBQzFGaEgsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQ2tGLG1CQUFBLENBQUF5QixPQUFPLFFBQ1B0SCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDbUYsZUFBQSxDQUFBeUIsYUFBYTtjQUFDQyxPQUFPLEVBQUM7WUFBTSxFQUFHLEVBQ2hDeEgsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQ21GLGVBQUEsQ0FBQXlCLGFBQWE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVEsRUFBRyxFQUVsQ3hILE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNtRixlQUFBLENBQUF5QixhQUFhO2NBQUNDLE9BQU8sRUFBQztZQUFxQixFQUFHLEVBQy9DeEgsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQ21GLGVBQUEsQ0FBQXlCLGFBQWE7Y0FBQ0MsT0FBTyxFQUFDO1lBQW1CLEVBQUcsRUFDN0N4SCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDbUYsZUFBQSxDQUFBeUIsYUFBYTtjQUFDQyxPQUFPLEVBQUM7WUFBZSxFQUFHLENBQ2hDLENBQ0YsRUFDVHhILE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUM2QixHQUFBLENBQUFpRixnQkFBZ0I7Y0FBQ25JLFFBQVEsRUFBRXhDLEtBQUssQ0FBQ3dDO1lBQVEsRUFBSSxDQUN6QyxFQUNOVSxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBeUIsR0FDMUNaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNlLFdBQUEsQ0FBQWdHLE1BQU07Y0FBQ1AsT0FBTyxFQUFDLFNBQVM7Y0FBQ0gsUUFBUSxFQUFFOUgsS0FBSyxDQUFDeUksTUFBTSxLQUFLLENBQUMsSUFBSVgsUUFBUTtjQUFFdEgsSUFBSSxFQUFDO1lBQVEsR0FDL0U1QyxLQUFLLENBQUM4QyxLQUFLLENBQUNnSSxJQUFJLENBQUNDLE1BQU0sQ0FDaEIsQ0FDRCxDQUNILEVBQ041QixjQUFjLElBQ2RqRyxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDNkIsR0FBQSxDQUFBc0YsVUFBVTtjQUNWM0ssSUFBSSxFQUFFOEksY0FBYztjQUNwQjhCLE9BQU8sRUFBRXZCLFVBQVU7Y0FDbkJ3QixXQUFXLEVBQUVsTCxLQUFLLENBQUNrTCxXQUFXO2NBQzlCdEksSUFBSSxFQUFDLGFBQWE7Y0FDbEJ1SSxTQUFTLEVBQUVuTCxLQUFLLENBQUM4QixLQUFLLENBQUNzSixZQUFZO2NBQ25DekIsU0FBUyxFQUFFQTtZQUFTLEVBRXJCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRkEsSUFBQXpHLE1BQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBcUosbUJBQUEsR0FBQXJKLE9BQUE7VUFTQSxNQUFNMkwsY0FBYyxHQUFHLElBQUF0QyxtQkFBQSxDQUFBdUMsWUFBWSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsZUFBZSxDQUFDO1VBRXpFO1VBQ0EsTUFBTUMsZUFBZSxHQUFHO1lBQ3ZCQyxJQUFJLEVBQUV6QyxtQkFBQSxDQUFBMEMsT0FBTztZQUNiQyxNQUFNLEVBQUUzQyxtQkFBQSxDQUFBNEMsU0FBUztZQUNqQkMsVUFBVSxFQUFFN0MsbUJBQUEsQ0FBQThDLE9BQU87WUFDbkJDLG1CQUFtQixFQUFFL0MsbUJBQUEsQ0FBQWdELGFBQWE7WUFDbENDLGlCQUFpQixFQUFFakQsbUJBQUEsQ0FBQWtELGVBQWU7WUFDbENDLGFBQWEsRUFBRWI7V0FDTjtVQVdKLFNBQVVaLGFBQWFBLENBQUM7WUFBRUMsT0FBTztZQUFFNUcsU0FBUyxHQUFHO1VBQUUsQ0FBc0I7WUFDNUUsTUFBTSxDQUFDcUksUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2xKLE1BQUEsQ0FBQUYsT0FBSyxDQUFDa0csUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNbUQsU0FBUyxHQUFHbkosTUFBQSxDQUFBRixPQUFLLENBQUNzSixNQUFNLENBQWlCLElBQUksQ0FBQztZQUVwRDtZQUNBLE1BQU1DLGVBQWUsR0FBR2hCLGVBQWUsQ0FBQ2IsT0FBTyxDQUFDO1lBRWhEO1lBQ0EsTUFBTThCLGlCQUFpQixHQUFHQSxDQUFBLEtBQUs7Y0FDOUIsSUFBSSxPQUFPQyxRQUFRLENBQUNDLGlCQUFpQixLQUFLLFVBQVUsRUFBRTtnQkFDckQsT0FBT0QsUUFBUSxDQUFDQyxpQkFBaUIsQ0FBQ2hDLE9BQU8sQ0FBQzs7Y0FFM0MsT0FBTyxLQUFLO1lBQ2IsQ0FBQztZQUVEO1lBQ0EsTUFBTWlDLGlCQUFpQixHQUFHQSxDQUFBLEtBQUs7Y0FDOUIsSUFBSSxPQUFPRixRQUFRLENBQUNHLGlCQUFpQixLQUFLLFVBQVUsRUFBRTtnQkFDckQsTUFBTXhLLEtBQUssR0FBR3FLLFFBQVEsQ0FBQ0csaUJBQWlCLENBQUNsQyxPQUFPLENBQUM7Z0JBQ2pELE9BQU90SSxLQUFLLEtBQUssTUFBTSxJQUFJQSxLQUFLLEtBQUtzSSxPQUFPOztjQUU3QyxPQUFPLEtBQUs7WUFDYixDQUFDO1lBRUQ7WUFDQSxNQUFNbUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBSztjQUM3QixJQUFJQyxhQUFhLEdBQUcsS0FBSztjQUV6QjtjQUNBLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDQyxRQUFRLENBQUNyQyxPQUFPLENBQUMsRUFBRTtnQkFDdERvQyxhQUFhLEdBQUdOLGlCQUFpQixFQUFFOztjQUVwQztjQUFBLEtBQ0ssSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDTyxRQUFRLENBQUNyQyxPQUFPLENBQUMsRUFBRTtnQkFDM0YsTUFBTXNDLFlBQVksR0FBR1AsUUFBUSxDQUFDRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFDekRILFFBQVEsQ0FBQ0csaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQzNDSCxRQUFRLENBQUNHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUMxQ0gsUUFBUSxDQUFDRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7Z0JBQzlDRSxhQUFhLEdBQUdFLFlBQVksS0FBS3RDLE9BQU87O2NBRXpDO2NBQUEsS0FDSyxJQUFJLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQ3FDLFFBQVEsQ0FBQ3JDLE9BQU8sQ0FBQyxFQUFFO2dCQUN4RW9DLGFBQWEsR0FBR04saUJBQWlCLEVBQUU7O2NBRXBDO2NBQUEsS0FDSyxJQUFJOUIsT0FBTyxLQUFLLFlBQVksRUFBRTtnQkFDbEM7Z0JBQ0EsTUFBTXVDLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxZQUFZLEVBQUU7Z0JBQ3ZDLElBQUlGLFNBQVMsSUFBSUEsU0FBUyxDQUFDRyxVQUFVLEdBQUcsQ0FBQyxFQUFFO2tCQUMxQyxNQUFNQyxLQUFLLEdBQUdKLFNBQVMsQ0FBQ0ssVUFBVSxDQUFDLENBQUMsQ0FBQztrQkFDckMsTUFBTUMsU0FBUyxHQUFHRixLQUFLLENBQUNHLHVCQUF1QjtrQkFDL0MsTUFBTUMsV0FBVyxHQUFHRixTQUFTLENBQUNHLFFBQVEsS0FBS0MsSUFBSSxDQUFDQyxZQUFZLEdBQ3hETCxTQUFxQixDQUFDTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQ25DTixTQUFTLENBQUNPLGFBQWEsRUFBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQztrQkFDeENmLGFBQWEsR0FBRyxDQUFDLENBQUNXLFdBQVc7OztjQUkvQnJCLFdBQVcsQ0FBQ1UsYUFBYSxDQUFDO1lBQzNCLENBQUM7WUFFRDtZQUNBNUosTUFBQSxDQUFBRixPQUFLLENBQUMrSyxTQUFTLENBQUMsTUFBSztjQUNwQjtjQUNBbEIsZ0JBQWdCLEVBQUU7Y0FFbEI7Y0FDQSxNQUFNbUIscUJBQXFCLEdBQUdBLENBQUEsS0FBSztnQkFDbEM7Z0JBQ0EvSyxVQUFVLENBQUM0SixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Y0FDaEMsQ0FBQztjQUVELE1BQU1vQixhQUFhLEdBQUdBLENBQUEsS0FBSztnQkFDMUI7Z0JBQ0FoTCxVQUFVLENBQUM0SixnQkFBZ0IsRUFBRSxFQUFFLENBQUM7Y0FDakMsQ0FBQztjQUVELE1BQU1xQixXQUFXLEdBQUdBLENBQUEsS0FBSztnQkFDeEI7Z0JBQ0FqTCxVQUFVLENBQUM0SixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Y0FDaEMsQ0FBQztjQUVEO2NBQ0FKLFFBQVEsQ0FBQzBCLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFSCxxQkFBcUIsQ0FBQztjQUNuRXZCLFFBQVEsQ0FBQzBCLGdCQUFnQixDQUFDLFNBQVMsRUFBRUYsYUFBYSxDQUFDO2NBQ25EeEIsUUFBUSxDQUFDMEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFRCxXQUFXLENBQUM7Y0FFL0M7Y0FDQSxPQUFPLE1BQUs7Z0JBQ1h6QixRQUFRLENBQUMyQixtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRUoscUJBQXFCLENBQUM7Z0JBQ3RFdkIsUUFBUSxDQUFDMkIsbUJBQW1CLENBQUMsU0FBUyxFQUFFSCxhQUFhLENBQUM7Z0JBQ3REeEIsUUFBUSxDQUFDMkIsbUJBQW1CLENBQUMsT0FBTyxFQUFFRixXQUFXLENBQUM7Y0FDbkQsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDeEQsT0FBTyxDQUFDLENBQUM7WUFFYjtZQUNBLE1BQU0yRCxrQkFBa0IsR0FBRyxpQkFBaUJsQyxRQUFRLEdBQUcseUJBQXlCLEdBQUcsRUFBRSxHQUFHckksU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUUxSCxPQUNDWixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQTtjQUFLeUssR0FBRyxFQUFFakMsU0FBUztjQUFFdkksU0FBUyxFQUFFdUs7WUFBa0IsR0FDakRuTCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDMEksZUFBZSxPQUFHLENBQ2Q7VUFFUjs7Ozs7Ozs7Ozs7VUN0SUE7O1VBRUE1SSxNQUFBLENBQUE0SyxjQUFBLENBQUF4TixPQUFBO1lBQ0FxQixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTBHLE1BQUEsR0FBQXBKLE9BQUE7VUFDQSxJQUFBZ0csR0FBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUF3RCxNQUFBLEdBQUF4RCxPQUFBO1VBRUEsSUFBQXlELFFBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBOE8sUUFBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUErTyxPQUFBLEdBQUEvTyxPQUFBO1VBQ087VUFBVSxTQUNSVSxZQUFZQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDdkQsTUFBTSxDQUFDc0MsS0FBSyxFQUFFK0csUUFBUSxDQUFDLEdBQUduRyxNQUFBLENBQUFGLE9BQUssQ0FBQ2tHLFFBQVEsQ0FBcUJ3RixTQUFTLENBQUM7WUFDdkUsTUFBTTtjQUFFbkgsS0FBSztjQUFFb0g7WUFBSyxDQUFFLEdBQUczTyxLQUFLO1lBQzlCLE1BQU07Y0FBRThDO1lBQUssQ0FBRSxHQUFHOUMsS0FBSztZQUN2QixNQUFNOEUsVUFBVSxHQUFHLElBQUFnRSxNQUFBLENBQUE4RixhQUFhLEdBQUU7WUFDbEMsSUFBQTlGLE1BQUEsQ0FBQVEsUUFBUSxFQUFDdEosS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFM0IsSUFBSSxDQUFDMk8sS0FBSyxFQUFFLE9BQU96TCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDNkIsR0FBQSxDQUFBbUosVUFBVTtjQUFDck0sUUFBUSxFQUFFO1lBQUksRUFBSTtZQUVqRCxNQUFNc00sWUFBWSxHQUFHO2NBQ3BCOU8sS0FBSztjQUNMOEMsS0FBSztjQUNMeUUsS0FBSztjQUNMakYsS0FBSztjQUNMK0csUUFBUTtjQUNSdkU7YUFDQTtZQUVELE1BQU1pSyxLQUFLLEdBQUc7Y0FBRS9PO1lBQUssQ0FBRTtZQUV2QixPQUNDa0QsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsY0FDQ1gsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQ1YsUUFBQSxDQUFBc0UsYUFBYSxDQUFDdUgsUUFBUTtjQUFDNU0sS0FBSyxFQUFFME07WUFBWSxHQUN6QyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQy9CLFFBQVEsQ0FBQ2pJLFVBQVUsQ0FBQyxHQUFHNUIsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQzJLLFFBQUEsQ0FBQXpHLFdBQVc7Y0FBQSxHQUFLZ0g7WUFBSyxFQUFJLEdBQUc3TCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDNEssT0FBQSxDQUFBUSxVQUFVO2NBQUEsR0FBS0Y7WUFBSyxFQUFJLENBQ25FLENBQ3BCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUFwSixRQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBb0csS0FBQSxHQUFBcEcsT0FBQTtVQUNBLElBQUF3RCxNQUFBLEdBQUF4RCxPQUFBO1VBRUEsSUFBQTZGLFlBQUEsR0FBQTdGLE9BQUE7VUFHQSxJQUFBd1AsUUFBQSxHQUFBeFAsT0FBQTtVQUNBLElBQUFrSSxTQUFBLEdBQUFsSSxPQUFBO1VBQ0EsSUFBQW9JLEtBQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBeVAsTUFBQSxHQUFBelAsT0FBQTtVQUNPO1VBQVUsU0FDUnVQLFVBQVVBLENBQUM7WUFBRWpQO1VBQUssQ0FBMkI7WUFDckQsTUFBTSxDQUFDdUgsS0FBSyxDQUFDLEdBQUcsSUFBQXJFLE1BQUEsQ0FBQWdHLFFBQVEsRUFBQ2xKLEtBQUssQ0FBQ3VILEtBQUssQ0FBQztZQUNyQyxNQUFNO2NBQUVoRyxJQUFJO2NBQUV1QjtZQUFLLENBQUUsR0FBRzlDLEtBQUs7WUFDN0IsTUFBTTtjQUFFa0csV0FBVyxFQUFFSCxRQUFRO2NBQUVxSixFQUFFLEVBQUVDO1lBQU0sQ0FBRSxHQUFHMUosUUFBQSxDQUFBSyxjQUFjLENBQUNDLElBQUk7WUFDakUsTUFBTTtjQUFFcEQsWUFBWTtjQUFFdU07WUFBRSxDQUFFLEdBQUdwUCxLQUFLLENBQUM4QixLQUFLO1lBRXhDLE1BQU13TixRQUFRLEdBQUcsR0FBR0osUUFBQSxDQUFBSyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxnQkFBZ0I1TSxZQUFZLGVBQWV1TSxFQUFFLGFBQWFDLE1BQU0sUUFBUTtZQUNqSCxPQUNDbk0sTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWEsR0FDNUJaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNpQyxLQUFBLENBQUFjLGFBQWE7Y0FBQzlDLFNBQVMsRUFBQyxlQUFlO2NBQUMrQyxNQUFNLEVBQUU7WUFBQyxHQUNqRDNELE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNpQyxLQUFBLENBQUFvQixLQUFLLFFBQ0xoRSxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxjQUNDWCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDc0wsTUFBQSxDQUFBL0csVUFBVTtjQUFDQyxRQUFRLEVBQUU5RyxJQUFJLEtBQUssVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDO2NBQUUrRyxTQUFTLEVBQUUsQ0FBQyxDQUFDdEksS0FBSyxDQUFDOEIsS0FBSyxDQUFDQztZQUFJLEVBQUksRUFDcEZtQixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDZSxXQUFBLENBQUEyRCxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRWpILElBQUksS0FBSyxVQUFVO2NBQzlCa0gsT0FBTztjQUNQQyxPQUFPLEVBQUU7Z0JBQ1JDLElBQUksRUFBRXpGLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUMrRCxTQUFBLENBQUF0RSxRQUFRLE9BQUc7Z0JBQ2xCc0YsS0FBSyxFQUFFMUYsTUFBQSxDQUFBRixPQUFBLENBQUFhLGFBQUEsQ0FBQ2lFLEtBQUEsQ0FBQWUsUUFBUTs7WUFDaEIsRUFDQSxDQUNHLEVBRU4zRixNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENaLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUMwQixZQUFBLENBQUFFLGtCQUFrQixPQUFHLENBQ2pCLENBQ0MsRUFDUnZDLE1BQUEsQ0FBQUYsT0FBQSxDQUFBYSxhQUFBLENBQUNpQyxLQUFBLENBQUFnQixJQUFJLFFBQ0o1RCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDaUMsS0FBQSxDQUFBaUIsR0FBRyxRQUFFakUsS0FBSyxDQUFDNE0sSUFBSSxDQUFDMUwsUUFBUSxDQUFPLEVBQ2hDZCxNQUFBLENBQUFGLE9BQUEsQ0FBQWEsYUFBQSxDQUFDaUMsS0FBQSxDQUFBaUIsR0FBRyxRQUFFakUsS0FBSyxDQUFDNE0sSUFBSSxDQUFDMUksUUFBUSxDQUFPLENBQzFCLENBQ1EsQ0FDVjtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBMkksS0FBQSxHQUFBalEsT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQXlELFFBQUEsR0FBQXpELE9BQUE7VUFFTSxTQUFVMEksVUFBVUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDO1VBQVMsQ0FBRTtZQUNqRCxNQUFNO2NBQUV4RixLQUFLO2NBQUU5QztZQUFLLENBQUUsR0FBRyxJQUFBbUQsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUUzQyxJQUFJLENBQUMrRSxTQUFTLEVBQUUsT0FBTyxJQUFJO1lBQzNCLE1BQU1pQixRQUFRLEdBQUdRLEtBQUssSUFBRztjQUN4QixNQUFNeEksSUFBSSxHQUFHd0ksS0FBSyxDQUFDNkYsYUFBYSxDQUFDQyxPQUFPLENBQUN0TyxJQUFJO2NBQzdDdkIsS0FBSyxDQUFDbUMsT0FBTyxDQUFDWixJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELE9BQ0NvTyxLQUFBLENBQUE5TCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFvQyxHQUNsRDZMLEtBQUEsQ0FBQTlMLGFBQUEsQ0FBQ2UsV0FBQSxDQUFBa0wsV0FBVztjQUFDekgsUUFBUSxFQUFFQSxRQUFRO2NBQUVnQyxPQUFPLEVBQUMsU0FBUztjQUFDZCxRQUFRLEVBQUVBO1lBQVEsR0FDcEVvRyxLQUFBLENBQUE5TCxhQUFBLENBQUNlLFdBQUEsQ0FBQWdHLE1BQU07Y0FBQSxhQUFXO1lBQVUsR0FBRTlILEtBQUssQ0FBQzRNLElBQUksQ0FBQzFMLFFBQVEsRSxJQUFXLEVBQzVEMkwsS0FBQSxDQUFBOUwsYUFBQSxDQUFDZSxXQUFBLENBQUFnRyxNQUFNO2NBQUEsYUFBVztZQUFRLEdBQUU5SCxLQUFLLENBQUM0TSxJQUFJLENBQUNLLElBQUksRSxJQUFXLENBQ3pDLENBQ1Q7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==