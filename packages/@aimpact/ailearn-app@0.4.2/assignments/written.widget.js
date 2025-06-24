System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/ailearn-app@0.4.2/config", "@aimpact/ailearn-app@0.4.2/components/ui", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/form", "react-simple-wysiwyg@3.2.2", "@aimpact/ailearn-app@0.4.2/model/wrapper"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_13 = _pragmateUi100Beta7Collapsible;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_16 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Form) {
      dependency_17 = _pragmateUi100Beta7Form;
    }, function (_reactSimpleWysiwyg2) {
      dependency_18 = _reactSimpleWysiwyg2;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_19 = _aimpactAilearnApp042ModelWrapper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
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
        hash: 3395714493,
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
                console.log(error);
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
        hash: 588673080,
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
              className: "analysis__container one-column"
            }, _react.default.createElement("div", {
              className: "centered-column"
            }, _react.default.createElement("div", null, _react.default.createElement(_transcription.Transcription, null)), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.analysis.report), _react.default.createElement("div", {
              className: "feedback__container assessment-analysis__container "
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
            })))));
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
        hash: 408595440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _aside = require("./components/aside");
          var _analysis = require("./analysis");
          var _form = require("./form");
          var _tabs = require("./tabs");
          /*bundle*/
          function DesktopView({
            store
          }) {
            return _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container   main-chat-layout spoken-activity pt-0"
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
              className: "scrolleable-child no-p"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: store.view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_form.FormView, null)
              }
            }))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 4015784047,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormView = FormView;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _form = require("pragmate-ui/form");
          var _reactSimpleWysiwyg = require("react-simple-wysiwyg");
          var _components = require("pragmate-ui/components");
          const BtnAlignCenter = (0, _reactSimpleWysiwyg.createButton)('Align center', '≡', 'justifyCenter');
          function FormView() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [value, setValue] = _react.default.useState('');
            (0, _hooks.useStore)(store, ['fetching.changed']);
            const onChange = e => {
              setValue(e.target.value);
            };
            const onSubmit = event => {
              event.preventDefault();
              store.publish(value);
            };
            const disabled = store.fetching;
            return _react.default.createElement(_form.Form, {
              className: "activity__form",
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "editor__container"
            }, _react.default.createElement(_reactSimpleWysiwyg.default, {
              autoFocus: true,
              onChange: onChange,
              value: value,
              placeholder: 'hola',
              disabled: disabled
            }, _react.default.createElement(_reactSimpleWysiwyg.Toolbar, null, _react.default.createElement(_reactSimpleWysiwyg.BtnBold, null), _react.default.createElement(_reactSimpleWysiwyg.BtnItalic, null), _react.default.createElement(_reactSimpleWysiwyg.BtnLink, null), _react.default.createElement(_reactSimpleWysiwyg.BtnBulletList, null), _react.default.createElement(_reactSimpleWysiwyg.BtnNumberedList, null), _react.default.createElement(BtnAlignCenter, null))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: store.fetching
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-1"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: value.length === 0 || disabled,
              type: "submit"
            }, store.texts.form.submit)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsInBhcmFtc1VyaSIsInZpZXciLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImFzc2lnbWVudElkIiwibW9kZWwiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwicHVibGlzaCIsImZldGNoaW5nIiwic3BlY3MiLCJwYXJhbXMiLCJ0ZXh0IiwidHlwZSIsImFzc2lnbm1lbnRJZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl90cmFuc2NyaXB0aW9uIiwiX2ljb25zIiwiQW5hbHlzaXMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJmZWVkYmFjayIsImF0dGVtcHRzIiwia2V5cyIsIk9iamVjdCIsImFzc2Vzc21lbnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlRyYW5zY3JpcHRpb24iLCJhbmFseXNpcyIsInJlcG9ydCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwiaWNvbiIsInBvaW50cyIsImtleSIsIm5hbWUiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9jb21wb25lbnRzIiwiX2NvbGxhcHNpYmxlIiwic2NyZWVuU2l6ZSIsIkZyYWdtZW50IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJpbmNsdWRlcyIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0cmFuc2NyaXB0IiwiQ29sbGFwc2libGVDb250ZW50IiwiSHRtbFdyYXBwZXIiLCJ0cmFuc2NyaXB0aW9uIiwiZmFsc2UiLCJvcGVuIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwiSXRlbSIsInN1YmplY3QiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsImFjdGl2aXR5IiwiY3JpdGVyaWEiLCJQYW5lcyIsIk1hcmtkb3duIiwiY29udGVudCIsIkxpc3QiLCJhcyIsIml0ZW1zIiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9hc2lkZSIsIl9hbmFseXNpcyIsIl9mb3JtIiwiRGVza3RvcFZpZXciLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIkZvcm1WaWV3IiwiX2hvb2tzIiwiX3JlYWN0U2ltcGxlV3lzaXd5ZyIsIkJ0bkFsaWduQ2VudGVyIiwiY3JlYXRlQnV0dG9uIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZVN0b3JlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGlzYWJsZWQiLCJGb3JtIiwiYXV0b0ZvY3VzIiwicGxhY2Vob2xkZXIiLCJUb29sYmFyIiwiQnRuQm9sZCIsIkJ0bkl0YWxpYyIsIkJ0bkxpbmsiLCJCdG5CdWxsZXRMaXN0IiwiQnRuTnVtYmVyZWRMaXN0IiwiUHJvY2Vzc0NvbnRhaW5lciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsZW5ndGgiLCJmb3JtIiwic3VibWl0IiwiZGVmaW5lUHJvcGVydHkiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJzZXRFcnJvciIsInVuZGVmaW5lZCIsInJlYWR5IiwidXNlTWVkaWFRdWVyeSIsIlBhZ2VMb2FkZXIiLCJjb250ZXh0VmFsdWUiLCJwcm9wcyIsIlByb3ZpZGVyIiwiTW9iaWxlVmlldyIsIl93cmFwcGVyIiwiX3RhYnMyIiwiaWQiLCJ1c2VySWQiLCJhdWRpb1VybCIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJ0YWJzIiwiUmVhY3QiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwicmVkbyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy90cmFuc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2luZm9ybWF0aW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvdHMvdmlld3MvdGFicy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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