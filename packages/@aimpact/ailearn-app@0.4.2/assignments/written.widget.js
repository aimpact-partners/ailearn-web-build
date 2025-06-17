System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "pragmate-ui@1.0.0-beta.7/components", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@aimpact/ailearn-app@0.4.2/config", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, ActivityView, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    Aside: void 0,
    AudioPlayer: void 0,
    ContentInformation: void 0,
    DesktopView: void 0,
    ActivityView: void 0,
    MobileView: void 0,
    RecordingButton: void 0,
    PermissionsErrorModal: void 0,
    RecordingControl: void 0,
    PermissionsModal: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactChatSdk154Session) {
      dependency_4 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp042EntitiesAssignmentsActivitiesBase) {
      dependency_5 = _aimpactAilearnApp042EntitiesAssignmentsActivitiesBase;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_8 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_aimpactAilearnApp042Config) {
      dependency_10 = _aimpactAilearnApp042Config;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_12 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_13 = _aimpactAilearnApp042ModelWrapper;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_15 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_16 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_17 = _pragmateUi100Beta7Tabs;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_18 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_19 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_20 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.4.14"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['@aimpact/ailearn-app/config', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/model/wrapper', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/tabs', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/modal', dependency_20]]);
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
        hash: 1015209258,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _session = require("@aimpact/chat-sdk/session");
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
            #audio;
            get audio() {
              return this.#audio;
            }
            #modelId;
            get modelId() {
              return this.#modelId;
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
            async load(assigmentId, activityId) {
              super.load(assigmentId, activityId);
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.activityId}`;
              this.triggerEvent();
            }
            async loadTest(draftId, activityId) {
              super.loadTest(draftId, activityId);
              this.#modelId = draftId;
              this.triggerEvent();
            }
            send = async audio => {};
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/analysis/desktop
      ****************************************/

      ims.set('./views/analysis/desktop', {
        hash: 2589817406,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopAnalysis = DesktopAnalysis;
          var _react = require("react");
          var _feedback = require("./feedback");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          function DesktopAnalysis() {
            const {
              store,
              screenSize
            } = (0, _context.useModuleContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: screenSize,
              options: {
                md: _react.default.createElement(_feedback.Feedback, null),
                lg: _react.default.createElement(_feedback.Feedback, null)
              }
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/analysis/feedback
      *****************************************/

      ims.set('./views/analysis/feedback', {
        hash: 4291353380,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Feedback = Feedback;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _transcription = require("./transcription");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function Feedback() {
            const {
              store,
              texts,
              audio
            } = (0, _context.useModuleContext)();
            const {
              id
            } = store.model;
            const {
              id: userId
            } = _session.sessionWrapper.user;
            const feedback = store.model.data.attempts[0];
            const audioUrl = `${_wrapper.settings.apis.ailearn}/assignments/${store.assignmentId}/activities/${id}/progress/${userId}/audio?date=${feedback.date}`;
            const keys = Object.keys(feedback.assessment);
            return _react.default.createElement("section", {
              className: "analysis__container"
            }, _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.analysis.audio), _react.default.createElement(_ui.AudioPlayer, {
              url: audioUrl
            }), _react.default.createElement(_transcription.Transcription, null)), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.analysis.report), _react.default.createElement("div", {
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

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 1397423915,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _session = require("@aimpact/chat-sdk/session");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          function Analysis() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const alertContent = store.model.getSpecs().task?.replace('%1', userName);
            const screenSize = (0, _hooks.useMediaQuery)();
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopAnalysis, null) : _react.default.createElement(_mobile.MobileAnalysis, null));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/analysis/mobile
      ***************************************/

      ims.set('./views/analysis/mobile', {
        hash: 308185010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileAnalysis = MobileAnalysis;
          var _react = require("react");
          var _feedback = require("./feedback");
          function MobileAnalysis() {
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, _react.default.createElement(_feedback.Feedback, null));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/analysis/transcription
      **********************************************/

      ims.set('./views/analysis/transcription', {
        hash: 784722159,
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
                true: _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, texts.analysis.transcript)), _react.default.createElement(_collapsible.CollapsibleContent, null, feedback.transcription)),
                false: _react.default.createElement(_collapsible.CollapsibleContainer, {
                  open: true
                }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, texts.analysis.transcript)), _react.default.createElement(_collapsible.CollapsibleContent, null, feedback.transcription))
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

      /***********************************************
      INTERNAL MODULE: ./views/components/audio-player
      ***********************************************/

      ims.set('./views/components/audio-player', {
        hash: 1190578037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              const onLoadedMetadata = () => {
                if (target.duration !== Infinity) return;
                target.currentTime = 1e101;
                target.ontimeupdate = () => {
                  target.ontimeupdate = null;
                  target.currentTime = 0;
                };
              };
              target.addEventListener('loadedmetadata', onloadeddata);
              return () => target.removeEventListener('loadedmetadata', onLoadedMetadata);
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
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
        hash: 2071525566,
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
        hash: 4160058605,
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
          var _desktop = require("./analysis/desktop");
          var _aside = require("./components/aside");
          var _context = require("./context");
          var _recording = require("./recording");
          var _tabs = require("./tabs");
          /*bundle*/
          function DesktopView({
            store
          }) {
            const {
              view,
              setView
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container   main-chat-layout spoken-activity"
            }, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: "spoken",
              type: store.model.type
            }), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-pl"
            }, _react.default.createElement(_tabs.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_aside.Aside, null)), _react.default.createElement("div", {
              className: "scrolleable-child no-p"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_desktop.DesktopAnalysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            }))));
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
        hash: 1221334625,
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
            const [view, setView] = _react.default.useState(!!store.model?.data ? 'analysis' : 'recording');
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
            _react.default.useEffect(() => {
              setView(!!store.model?.data ? 'analysis' : 'recording');
            }, [ready]);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              store,
              texts,
              fetching: store.fetching,
              items,
              setView,
              view,
              error,
              setError,
              screenSize,
              onSubmit: event => {
                event.preventDefault();
                return;
              }
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
        hash: 2043790136,
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
          var _mobile = require("./analysis/mobile");
          var _information = require("./components/information");
          var _context = require("./context");
          var _recording = require("./recording");
          var _tabs2 = require("./tabs");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function MobileView({
            store
          }) {
            const [items] = (0, _react.useState)(store.items);
            const {
              view,
              texts
            } = (0, _context.useModuleContext)();
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
                true: _react.default.createElement(_mobile.MobileAnalysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            })), _react.default.createElement("div", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null))), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs.Tab, null, texts.tabs.activity))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/button
      ****************************************/

      ims.set('./views/recording/button', {
        hash: 715968226,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _errorModal = require("./error-modal");
          /*bundle*/ //@ts-ignore

          const RecordingButton = ({
            disabled,
            action,
            setAction
          }) => {
            const {
              texts,
              recorder,
              recording,
              setRecording,
              audio,
              store
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)(false);
            const icon = recording ? 'stop' : 'mic';
            const showSend = !recording && audio;
            const message = !recording ? showSend ? 'redo' : 'record' : 'stop';
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [hasPermission, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const onRecord = async () => {
              try {
                await store.record();
                setRecording(!recording);
                setAction('start');
              } catch (e) {
                setError(true);
              }
            };
            const checkMicrophonePermission = async () => {
              try {
                if (!navigator.permissions) {
                  console.warn('Permissions API is not supported in this browser.');
                  return false; // Default to no permission if API is unavailable
                }
                const permissionStatus = await navigator.permissions.query({
                  name: 'microphone'
                });
                return permissionStatus.state === 'granted';
              } catch (error) {
                console.error(`Error checking microphone permission: ${error}`);
                return false; // Default to no permission in case of an error
              }
            };
            const playAction = async () => {
              try {
                setFetching(true);
                const hasPermission = await checkMicrophonePermission();
                if (!hasPermission) {
                  setShowModal(true);
                  return;
                }
                onRecord();
              } catch (e) {
                console.error(e);
                setError(true);
              } finally {
                setFetching(false);
              }
            };
            const onStop = async event => {
              await store.stop();
              setRecording(false);
              setAction('reset');
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                setHasPermission('true');
              }).catch(error => {
                setError(true);
              });
            };
            const ensurePlay = event => {
              event.preventDefault();
              if (!store.hasCredits) {
                setShowCoinsModal(true);
                return;
              }
              playAction();
            };
            const closeModal = () => setShowCoinsModal(false);
            const onAction = action === 'start' ? onStop : ensurePlay;
            const onClose = event => {
              setFetching(false);
              setShowModal(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: icon,
              fetching: fetching,
              onClick: onAction,
              disabled: disabled || fetching
            }, texts[message]), _react.default.createElement(_modal.PermissionsModal, {
              show: showModal,
              onClose: onClose,
              onConfirm: getUserMedia
            }), _react.default.createElement(_errorModal.PermissionsErrorModal, {
              show: error,
              onClose: () => setError(false)
            }), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              type: "interactive",
              onConsume: store.model.consumeCoins
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/recording/error-modal
      *********************************************/

      ims.set('./views/recording/error-modal', {
        hash: 562647327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/index
      ***************************************/

      ims.set('./views/recording/index', {
        hash: 2383617461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingControl = void 0;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          var _context = require("../context");
          var _timer = require("../timer");
          var _button = require("./button");
          var _result = require("./result");
          /*bundle*/
          const RecordingControl = ({
            disabled = false
          }) => {
            const {
              texts,
              recording,
              sending,
              audio,
              store,
              error
            } = (0, _context.useModuleContext)();
            const ref = _react.default.useRef(null);
            const showSend = !recording && audio;
            const cls = `recording-player__container${sending ? ' is-sending' : ''}`;
            const [action, setAction] = _react.default.useState('');
            const buttonSpecs = {
              disabled,
              action,
              setAction
            };
            return _react.default.createElement(_react.default.Fragment, null, error && _react.default.createElement(_alert.Alert, {
              type: "error",
              variant: "error"
            }, error), audio ? _react.default.createElement(_react.default.Fragment, null, action === 'reset' ? _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.review) : _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.existingAudio)) : null, _react.default.createElement("div", {
              className: "spoken__container"
            }, _react.default.createElement("div", {
              className: "recording__container flex-container flex-center"
            }, _react.default.createElement("section", {
              ref: ref,
              className: cls
            }, _react.default.createElement("div", {
              className: "recording-player__content"
            }, !audio ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_timer.Timer, {
              action: action
            }), _react.default.createElement(_button.RecordingButton, {
              ...buttonSpecs
            })) : null, _react.default.createElement(_result.RecordingResult, {
              show: showSend
            })), sending && _react.default.createElement("div", {
              className: "sending__data"
            }, _react.default.createElement("h3", {
              className: "sending-message"
            }, texts.assessments.processingAudio))))));
          };
          exports.RecordingControl = RecordingControl;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/modal
      ***************************************/

      ims.set('./views/recording/modal', {
        hash: 1914166971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsModal = ({
            show,
            onClose,
            onConfirm
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useModuleContext)();
            const subtitle = texts.permissions.title;
            const description = texts.permissions.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true,
              onConfirm: onConfirm
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("span", {
              className: "intro__modal-text p2"
            }, texts.permissions.intro), _react.default.createElement("h3", null, subtitle)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsModal = PermissionsModal;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/result
      ****************************************/

      ims.set('./views/recording/result', {
        hash: 150786664,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingResult = RecordingResult;
          var _react = require("react");
          var _audioPlayer = require("../components/audio-player");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function RecordingResult({
            show
          }) {
            const {
              texts,
              audio,
              setView,
              store,
              setSending,
              sending,
              error,
              setError
            } = (0, _context.useModuleContext)();
            if (!show) return;
            const onSend = async event => {
              event.preventDefault();
              setSending(true);
              try {
                await store.sendSpoken(audio);
                setView('analysis');
                setSending(false);
              } catch (e) {
                console.error(e);
                setError(texts.assessments.audioError);
              } finally {
                setSending(false);
              }
            };
            const onClean = () => {
              store.cleanAudio();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "recording__result-container"
            }, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: audio
            }), _react.default.createElement("footer", {
              className: "form__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClean
            }, store.globalTexts.actions.recordAgain), _react.default.createElement(_components.Button, {
              icon: "send",
              onClick: onSend,
              variant: "primary"
            }, store.globalTexts.actions.send))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/recording/use-recording
      ***********************************************/

      ims.set('./views/recording/use-recording', {
        hash: 1297505357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRecording = useRecording;
          var _react = require("react");
          var _context = require("../context");
          function useRecording() {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useModuleContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            // const onPlay = async () => {
            // 	try {
            // 		const recordingState = !recording;
            // 		const permission = await recorder.hasPermissions();
            // 		if (permission.state !== 'granted') setShowModal(true);
            // 		await recorder.record();
            // 		setRecording(recordingState);
            // 		setAction('start');
            // 	} catch (e) {
            // 		console.error('error in on play', e);
            // 	}
            // };
            return {
              showModal,
              setShowModal
            };
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/tabs
      ****************************/

      ims.set('./views/tabs', {
        hash: 3323563008,
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
              setView
            } = (0, _context.useModuleContext)();
            const changeView = event => {
              setView(event.currentTarget.dataset.view);
            };
            if (!available) return null;
            return React.createElement("div", {
              className: "flex-container space-between mt-15"
            }, React.createElement(_components.ButtonGroup, {
              selected: selected,
              variant: "primary",
              onChange: changeView
            }, React.createElement(_components.Button, {
              "data-view": "analysis"
            }, texts.assessments.analysis, " "), React.createElement(_components.Button, {
              "data-view": "record"
            }, texts.assessments.redo, " ")));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/timer/index
      ***********************************/

      ims.set('./views/timer/index', {
        hash: 3970133054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var _react = require("react");
          var _useTimer = require("./use-timer");
          // Timer.tsx

          function Timer({
            action
          }) {
            const isRunning = ['restart', 'start'].includes(action);
            const restart = ['restart', 'reset'].includes(action);
            const [hours, minutes, seconds, milliseconds] = (0, _useTimer.useTimer)(isRunning, restart, action === 'reset');
            const secRendered = seconds.toString().padStart(2, '0');
            const minutesRendered = minutes.toString().padStart(2, '0');
            return _react.default.createElement("div", {
              className: "timer__container"
            }, _react.default.createElement("span", null, `${minutesRendered}`), _react.default.createElement("span", {
              className: "timer__separator"
            }, ":"), _react.default.createElement("span", null, `${secRendered}`));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/timer/use-timer
      ***************************************/

      ims.set('./views/timer/use-timer', {
        hash: 1583638382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTimer = useTimer;
          var _react = require("react");
          // useTimer.ts

          const {
            useState,
            useEffect
          } = _react.default;
          function useTimer(isRunning, restart, reset = true) {
            const [time, setTime] = useState(0);
            useEffect(() => {
              let intervalId;
              if (reset) setTime(0);
              if (isRunning) {
                intervalId = setInterval(() => {
                  setTime(prevTime => {
                    return prevTime + 1;
                  });
                }, 10); // 10 ms interval for tracking milliseconds
              }
              return () => {
                clearInterval(intervalId);
              };
            }, [isRunning]);
            useEffect(() => {
              if (restart) {
                setTime(0);
              }
            }, [restart]);
            const milliseconds = time % 100; // 1000 ms in a second, but we're updating every 10 ms
            const seconds = Math.floor(time / 100 % 60); // Converted to seconds
            const minutes = Math.floor(time / 6000 % 60); // Converted to minutes
            const hours = Math.floor(time / 360000); // Converted to hours
            return [hours, minutes, seconds, milliseconds];
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
        "im": "./views/components/audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
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
      }, {
        "im": "./views/recording/button",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/recording/error-modal",
        "from": "PermissionsErrorModal",
        "name": "PermissionsErrorModal"
      }, {
        "im": "./views/recording/index",
        "from": "RecordingControl",
        "name": "RecordingControl"
      }, {
        "im": "./views/recording/modal",
        "from": "PermissionsModal",
        "name": "PermissionsModal"
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
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/components/audio-player').AudioPlayer : value);
        (require || prop === 'ContentInformation') && _export("ContentInformation", ContentInformation = require ? require('./views/components/information').ContentInformation : value);
        (require || prop === 'DesktopView') && _export("DesktopView", DesktopView = require ? require('./views/desktop').DesktopView : value);
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/index').ActivityView : value);
        (require || prop === 'MobileView') && _export("MobileView", MobileView = require ? require('./views/mobile').MobileView : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/recording/button').RecordingButton : value);
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/recording/error-modal').PermissionsErrorModal : value);
        (require || prop === 'RecordingControl') && _export("RecordingControl", RecordingControl = require ? require('./views/recording/index').RecordingControl : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/recording/modal').PermissionsModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2JleW9uZF9jb250ZXh0IiwiQmFzZVN0b3JlTWFuYWdlciIsImlzU3RvcmUiLCJpbnRyb2R1Y3Rpb24iLCJhY3Rpdml0eUlkIiwicGFyYW1zVXJpIiwiYXVkaW8iLCJtb2RlbElkIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJhc3NpZ21lbnRJZCIsIm5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJpZCIsImFzc2lnbm1lbnRJZCIsInRyaWdnZXJFdmVudCIsImxvYWRUZXN0IiwiZHJhZnRJZCIsInNlbmQiLCJfcmVhY3QiLCJfZmVlZGJhY2siLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiRGVza3RvcEFuYWx5c2lzIiwic2NyZWVuU2l6ZSIsInVzZU1vZHVsZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsInVzZXJOYW1lIiwidXNlcklkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJtZCIsIkZlZWRiYWNrIiwibGciLCJfaWNvbnMiLCJfdWkiLCJfdHJhbnNjcmlwdGlvbiIsIl93cmFwcGVyIiwidGV4dHMiLCJtb2RlbCIsImZlZWRiYWNrIiwiZGF0YSIsImF0dGVtcHRzIiwiYXVkaW9VcmwiLCJzZXR0aW5ncyIsImFwaXMiLCJhaWxlYXJuIiwiZGF0ZSIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwiYW5hbHlzaXMiLCJBdWRpb1BsYXllciIsInVybCIsIlRyYW5zY3JpcHRpb24iLCJyZXBvcnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9ob29rcyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkFuYWx5c2lzIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwidXNlTWVkaWFRdWVyeSIsImluY2x1ZGVzIiwiTW9iaWxlQW5hbHlzaXMiLCJfY29sbGFwc2libGUiLCJGcmFnbWVudCIsInRlcm5hcnkiLCJ0cnVlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRyYW5zY3JpcHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiZmFsc2UiLCJvcGVuIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJzcmMiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX21hcmtkb3duIiwiX2xpc3QiLCJfdGFicyIsIkl0ZW0iLCJzdWJqZWN0IiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsImNvbnRlbnQiLCJMaXN0IiwiYXMiLCJpdGVtcyIsImNvbnRyb2wiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYXNpZGUiLCJfcmVjb3JkaW5nIiwiRGVza3RvcFZpZXciLCJ2aWV3Iiwic2V0VmlldyIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiQnV0dG9uVGFicyIsInNlbGVjdGVkIiwiYXZhaWxhYmxlIiwiUmVjb3JkaW5nQ29udHJvbCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInVzZVN0b3JlIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJQcm92aWRlciIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwiX21vZGFsIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInJlY29yZGVyIiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwicmVjb3JkIiwiZSIsImNoZWNrTWljcm9waG9uZVBlcm1pc3Npb24iLCJuYXZpZ2F0b3IiLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb25TdGF0dXMiLCJxdWVyeSIsInN0YXRlIiwicGxheUFjdGlvbiIsIm9uU3RvcCIsInN0b3AiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJlbnN1cmVQbGF5IiwiaGFzQ3JlZGl0cyIsImNsb3NlTW9kYWwiLCJvbkFjdGlvbiIsIm9uQ2xvc2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJDb2luc01vZGFsIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJkZXNjcmlwdGlvbiIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIkljb24iLCJfYWxlcnQiLCJfdGltZXIiLCJfYnV0dG9uIiwiX3Jlc3VsdCIsInNlbmRpbmciLCJjbHMiLCJidXR0b25TcGVjcyIsIkFsZXJ0IiwiYXNzZXNzbWVudHMiLCJyZXZpZXciLCJleGlzdGluZ0F1ZGlvIiwiVGltZXIiLCJSZWNvcmRpbmdSZXN1bHQiLCJwcm9jZXNzaW5nQXVkaW8iLCJzdWJ0aXRsZSIsImludHJvIiwiX2F1ZGlvUGxheWVyIiwic2V0U2VuZGluZyIsIm9uU2VuZCIsInNlbmRTcG9rZW4iLCJhdWRpb0Vycm9yIiwib25DbGVhbiIsImNsZWFuQXVkaW8iLCJib3JkZXJlZCIsImFjdGlvbnMiLCJyZWNvcmRBZ2FpbiIsInVzZVJlY29yZGluZyIsIlJlYWN0IiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiQnV0dG9uR3JvdXAiLCJvbkNoYW5nZSIsInJlZG8iLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJyZXN0YXJ0IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsInVzZVRpbWVyIiwic2VjUmVuZGVyZWQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlc1JlbmRlcmVkIiwicmVzZXQiLCJ0aW1lIiwic2V0VGltZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2ZlZWRiYWNrLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy90cmFuc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy91c2UtcmVjb3JkaW5nLnRzeCIsIi90cy92aWV3cy90YWJzLnRzeCIsIi90cy92aWV3cy90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvdGltZXIvdXNlLXRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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