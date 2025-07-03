System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/ailearn-app@0.4.2/config", "@aimpact/ailearn-app@0.4.2/components/ui", "pragmate-ui@1.0.2/components", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.2/collapsible", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.2/list", "pragmate-ui@1.0.2/tabs", "pragmate-ui@1.0.2/form", "react-simple-wysiwyg@3.2.2", "@aimpact/ailearn-app@0.4.2/model/wrapper"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_4 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactChatSdk154Session) {
      dependency_5 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp042EntitiesAssignmentsActivitiesBase) {
      dependency_6 = _aimpactAilearnApp042EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_aimpactAilearnApp042Config) {
      dependency_9 = _aimpactAilearnApp042Config;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_10 = _aimpactAilearnApp042ComponentsUi;
    }, function (_pragmateUi102Components) {
      dependency_11 = _pragmateUi102Components;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi102Collapsible) {
      dependency_13 = _pragmateUi102Collapsible;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi102List) {
      dependency_15 = _pragmateUi102List;
    }, function (_pragmateUi102Tabs) {
      dependency_16 = _pragmateUi102Tabs;
    }, function (_pragmateUi102Form) {
      dependency_17 = _pragmateUi102Form;
    }, function (_reactSimpleWysiwyg2) {
      dependency_18 = _reactSimpleWysiwyg2;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_19 = _aimpactAilearnApp042ModelWrapper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/assignments/written",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/hooks', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/form', dependency_17], ['react-simple-wysiwyg', dependency_18], ['@aimpact/ailearn-app/model/wrapper', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-written",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/assignments/written.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/written/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/assignments/written.widget');
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
        hash: 1500759648,
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
        hash: 2982527453,
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
            }, _react.default.createElement("h6", null, texts.analysis.content), _react.default.createElement(_transcription.Transcription, null)), _react.default.createElement("div", {
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
        hash: 171112648,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: ['xs', 'sm', 'md'].includes(screenSize),
              ternary: true,
              options: {
                true: _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, texts.analysis.transcript)), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_components.HtmlWrapper, null, feedback.transcription))),
                false: _react.default.createElement(_collapsible.CollapsibleContainer, {
                  open: true
                }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, texts.analysis.transcript)), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_components.HtmlWrapper, null, feedback.transcription)))
              }
            }));
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
        hash: 276099187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormView = FormView;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 1229208594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsInBhcmFtc1VyaSIsInZpZXciLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImFzc2lnbWVudElkIiwibW9kZWwiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwiY2xlYW5FcnJvciIsImVycm9yIiwicHVibGlzaCIsImZldGNoaW5nIiwic3BlY3MiLCJwYXJhbXMiLCJ0ZXh0IiwidHlwZSIsImFzc2lnbm1lbnRJZCIsInRleHRzIiwiZXJyb3JzIiwiZGVmYXVsdCIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl90cmFuc2NyaXB0aW9uIiwiX2ljb25zIiwiQW5hbHlzaXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZmVlZGJhY2siLCJhdHRlbXB0cyIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFuYWx5c2lzIiwiY29udGVudCIsIlRyYW5zY3JpcHRpb24iLCJyZXBvcnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJuYW1lIiwicmVwbGFjZSIsIkFwcEljb24iLCJfY29tcG9uZW50cyIsIl9jb2xsYXBzaWJsZSIsInNjcmVlblNpemUiLCJGcmFnbWVudCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiaW5jbHVkZXMiLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidHJhbnNjcmlwdCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIkh0bWxXcmFwcGVyIiwidHJhbnNjcmlwdGlvbiIsImZhbHNlIiwib3BlbiIsIl9pbmZvcm1hdGlvbiIsIkFzaWRlIiwiQ29udGVudEluZm9ybWF0aW9uIiwiX3VpIiwiX3Nlc3Npb24iLCJfbWFya2Rvd24iLCJfbGlzdCIsIl90YWJzIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImFsZXJ0Q29udGVudCIsImdldFNwZWNzIiwidGFzayIsIkl0ZW0iLCJzdWJqZWN0IiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsIkxpc3QiLCJhcyIsIml0ZW1zIiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hbmFseXNpcyIsIl9hc2lkZSIsIl9mb3JtIiwiRGVza3RvcFZpZXciLCJjbHMiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIkZvcm1WaWV3IiwiX2hvb2tzIiwiX3JlYWN0U2ltcGxlV3lzaXd5ZyIsIl90b29sYmFyQWN0aW9ucyIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2V0RXJyb3IiLCJ1c2VTdG9yZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNsb3NlTW9kYWwiLCJvblN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFzQ3JlZGl0cyIsImRpc2FibGVkIiwiRm9ybSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiYXV0b0ZvY3VzIiwicGxhY2Vob2xkZXIiLCJUb29sYmFyIiwiVG9vbGJhckFjdGlvbiIsImNvbW1hbmQiLCJQcm9jZXNzQ29udGFpbmVyIiwiQnV0dG9uIiwibGVuZ3RoIiwiZm9ybSIsInN1Ym1pdCIsIkNvaW5zTW9kYWwiLCJvbkNsb3NlIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJCdG5BbGlnbkNlbnRlciIsImNyZWF0ZUJ1dHRvbiIsIlRPT0xCQVJfQlVUVE9OUyIsImJvbGQiLCJCdG5Cb2xkIiwiaXRhbGljIiwiQnRuSXRhbGljIiwiY3JlYXRlTGluayIsIkJ0bkxpbmsiLCJpbnNlcnRVbm9yZGVyZWRMaXN0IiwiQnRuQnVsbGV0TGlzdCIsImluc2VydE9yZGVyZWRMaXN0IiwiQnRuTnVtYmVyZWRMaXN0IiwianVzdGlmeUNlbnRlciIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJCdXR0b25Db21wb25lbnQiLCJjaGVja0NvbW1hbmRTdGF0ZSIsImRvY3VtZW50IiwicXVlcnlDb21tYW5kU3RhdGUiLCJjaGVja0NvbW1hbmRWYWx1ZSIsInF1ZXJ5Q29tbWFuZFZhbHVlIiwiY2hlY2tBY3RpdmVTdGF0ZSIsImNvbW1hbmRBY3RpdmUiLCJjdXJyZW50VmFsdWUiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwicmFuZ2UiLCJnZXRSYW5nZUF0IiwiY29udGFpbmVyIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJsaW5rRWxlbWVudCIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwidXNlRWZmZWN0IiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZUtleVVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWluZXJDbGFzc05hbWUiLCJyZWYiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInVuZGVmaW5lZCIsInJlYWR5IiwidXNlTWVkaWFRdWVyeSIsIlBhZ2VMb2FkZXIiLCJjb250ZXh0VmFsdWUiLCJwcm9wcyIsIlByb3ZpZGVyIiwiTW9iaWxlVmlldyIsIl93cmFwcGVyIiwiX3RhYnMyIiwiaWQiLCJ1c2VySWQiLCJhdWRpb1VybCIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJ0YWJzIiwiUmVhY3QiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwicmVkbyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy90cmFuc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2luZm9ybWF0aW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vdG9vbGJhci1hY3Rpb25zLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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