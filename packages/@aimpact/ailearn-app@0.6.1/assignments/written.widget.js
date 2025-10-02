System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.6.1/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.6.1/components/icons", "@aimpact/ailearn-app@0.6.1/config", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/collapsible", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/tabs", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "react-simple-wysiwyg@3.2.2", "@aimpact/ailearn-app@0.6.1/model/wrapper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, ContentInformation, DesktopView, ActivityView, MobileView, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_4 = _beyondJsReact18Widgets118Page;
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
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_17 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Form) {
      dependency_18 = _pragmateUi108Form;
    }, function (_reactSimpleWysiwyg2) {
      dependency_19 = _reactSimpleWysiwyg2;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_20 = _aimpactAilearnApp061ModelWrapper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/shared/hooks', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tabs', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/form', dependency_18], ['react-simple-wysiwyg', dependency_19], ['@aimpact/ailearn-app/model/wrapper', dependency_20]]);
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
        hash: 3213427902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormView = FormView;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsInBhcmFtc1VyaSIsInZpZXciLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImFzc2lnbWVudElkIiwibW9kZWwiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwiY2xlYW5FcnJvciIsImVycm9yIiwicHVibGlzaCIsImZldGNoaW5nIiwic3BlY3MiLCJwYXJhbXMiLCJ0ZXh0IiwidHlwZSIsImFzc2lnbm1lbnRJZCIsInRleHRzIiwiZXJyb3JzIiwiZGVmYXVsdCIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl90cmFuc2NyaXB0aW9uIiwiX2ljb25zIiwiQW5hbHlzaXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZmVlZGJhY2siLCJhdHRlbXB0cyIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlRyYW5zY3JpcHRpb24iLCJhbmFseXNpcyIsInJlcG9ydCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwiaWNvbiIsInBvaW50cyIsImtleSIsIm5hbWUiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9jb21wb25lbnRzIiwiX2NvbGxhcHNpYmxlIiwic2NyZWVuU2l6ZSIsIkZyYWdtZW50IiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0cmFuc2NyaXB0IiwiQ29sbGFwc2libGVDb250ZW50IiwiSHRtbFdyYXBwZXIiLCJ0cmFuc2NyaXB0aW9uIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwiSXRlbSIsInN1YmplY3QiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsImFjdGl2aXR5IiwiY3JpdGVyaWEiLCJQYW5lcyIsIk1hcmtkb3duIiwiY29udGVudCIsIkxpc3QiLCJhcyIsIml0ZW1zIiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmFseXNpcyIsIl9hc2lkZSIsIl9mb3JtIiwiRGVza3RvcFZpZXciLCJjbHMiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiZmFsc2UiLCJGb3JtVmlldyIsIl9ob29rcyIsIl9yZWFjdFNpbXBsZVd5c2l3eWciLCJfdG9vbGJhckFjdGlvbnMiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNldEVycm9yIiwidXNlU3RvcmUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjbG9zZU1vZGFsIiwib25TdWNjZXNzIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NyZWRpdHMiLCJkaXNhYmxlZCIsIkZvcm0iLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsImF1dG9Gb2N1cyIsInBsYWNlaG9sZGVyIiwiVG9vbGJhciIsIlRvb2xiYXJBY3Rpb24iLCJjb21tYW5kIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkJ1dHRvbiIsImxlbmd0aCIsImZvcm0iLCJzdWJtaXQiLCJDb2luc01vZGFsIiwib25DbG9zZSIsImdsb2JhbFRleHRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiQnRuQWxpZ25DZW50ZXIiLCJjcmVhdGVCdXR0b24iLCJUT09MQkFSX0JVVFRPTlMiLCJib2xkIiwiQnRuQm9sZCIsIml0YWxpYyIsIkJ0bkl0YWxpYyIsImNyZWF0ZUxpbmsiLCJCdG5MaW5rIiwiaW5zZXJ0VW5vcmRlcmVkTGlzdCIsIkJ0bkJ1bGxldExpc3QiLCJpbnNlcnRPcmRlcmVkTGlzdCIsIkJ0bk51bWJlcmVkTGlzdCIsImp1c3RpZnlDZW50ZXIiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwiQnV0dG9uQ29tcG9uZW50IiwiY2hlY2tDb21tYW5kU3RhdGUiLCJkb2N1bWVudCIsInF1ZXJ5Q29tbWFuZFN0YXRlIiwiY2hlY2tDb21tYW5kVmFsdWUiLCJxdWVyeUNvbW1hbmRWYWx1ZSIsImNoZWNrQWN0aXZlU3RhdGUiLCJjb21tYW5kQWN0aXZlIiwiaW5jbHVkZXMiLCJjdXJyZW50VmFsdWUiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwicmFuZ2UiLCJnZXRSYW5nZUF0IiwiY29udGFpbmVyIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJsaW5rRWxlbWVudCIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwidXNlRWZmZWN0IiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZUtleVVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWluZXJDbGFzc05hbWUiLCJyZWYiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInVuZGVmaW5lZCIsInJlYWR5IiwidXNlTWVkaWFRdWVyeSIsIlBhZ2VMb2FkZXIiLCJjb250ZXh0VmFsdWUiLCJwcm9wcyIsIlByb3ZpZGVyIiwiTW9iaWxlVmlldyIsIl93cmFwcGVyIiwiX3RhYnMyIiwiaWQiLCJ1c2VySWQiLCJhdWRpb1VybCIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJ0YWJzIiwiUmVhY3QiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwicmVkbyJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYW5hbHlzaXMvdHJhbnNjcmlwdGlvbi50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXNpZGUudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2luZm9ybWF0aW9uLnRzeCIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvZGVza3RvcC50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiLy90cy92aWV3cy9mb3JtL3Rvb2xiYXItYWN0aW9ucy50c3giLCIvL2dsb2JhbC50c3gvIiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvL3RzL3ZpZXdzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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