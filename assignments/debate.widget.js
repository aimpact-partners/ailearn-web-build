System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/wrapper", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.13/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, ActivityContent, Aside, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ActivityContent: void 0,
    Aside: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0113EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp0113EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_7 = _aimpactChatSdk130ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_9 = _aimpactChatSdk130Wrapper;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_simplebarReact) {
      dependency_11 = _simplebarReact;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_12 = _pragmateUi100Beta6Collapsible;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_13 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_14 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp0113ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp0113ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['simplebar-react', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/assignments/debate.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2337850378,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
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
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              // todo: @carlos ADd validation error if the vars are not present
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('activityId'), this.uri.vars.get('chatId'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2331614413,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _beyond_context = require("beyond_context");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          class StoreManager extends _base.BaseStoreManager {
            constructor() {
              super(_beyond_context.module.specifier);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/chat/desktop
      ************************************/

      ims.set('./views/chat/desktop', {
        hash: 350293571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopChat = DesktopChat;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("../empty");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function DesktopChat() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            return _react.default.createElement("div", null, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_chatComponent.AgentsChatContainer, {
              id: chatId,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement("div", {
              className: "chat__container"
            }, _react.default.createElement(_chatComponent.AgentsChatPanel, null)), _react.default.createElement("div", {
              className: "center-container chat-input__layout-container"
            }, _react.default.createElement(_chatComponent.AgentsChatInput, {
              ...chatSpecs
            }))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/chat/mobile
      ***********************************/

      ims.set('./views/chat/mobile', {
        hash: 1909768582,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileChat = MobileChat;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("../empty");
          var _context = require("../context");
          function MobileChat() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_chatComponent.AgentsChatContainer, {
              id: chatId,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement("div", {
              className: "chat__container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_chatComponent.AgentsChatPanel, null)), _react.default.createElement("div", {
              className: "center-container chat-input__layout-container"
            }, _react.default.createElement(_chatComponent.AgentsChatInput, {
              ...chatSpecs
            }))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/content/content
      ***************************************/

      ims.set('./views/content/content', {
        hash: 1082873604,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _collapsible = require("pragmate-ui/collapsible");
          /*bundle*/
          function ActivityContent() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const {
              article,
              dyslexia,
              audios,
              synthesis
            } = store.model.materials;
            const [mode, setMode] = _react.default.useState(_wrapper.AppWrapper.accessibility ?? 'normal');
            const content = mode === 'normal' ? article : dyslexia ?? dyslexia;
            const keys = (audios && Object.keys(audios)) ?? [];
            let totalAudios = keys.length;
            const audioSrc = mode != 'normal' && audios?.dyslexia?.url ? audios.dyslexia?.url : audios?.article?.url;
            return _react.default.createElement("div", {
              className: "activity-content"
            }, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("section", {
              className: "main__content"
            }, !!totalAudios && _react.default.createElement(_ui.ActivityAudio, {
              src: audioSrc
            }), _react.default.createElement(_collapsible.Accordion.Container, null, !!totalAudios && _react.default.createElement(_ui.ActivityAudio, {
              src: audioSrc
            }), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, texts.description), _react.default.createElement("p", null, store.model.description)))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/content/desktop/aside
      *********************************************/

      ims.set('./views/content/desktop/aside', {
        hash: 3103456928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _content = require("../content");
          /*bundle*/
          function Aside() {
            return _react.default.createElement("aside", {
              className: "activity-chat__aside"
            }, _react.default.createElement(_content.ActivityContent, null));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/content/desktop/index
      *********************************************/

      ims.set('./views/content/desktop/index', {
        hash: 1194776996,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopContent = DesktopContent;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _aside = require("./aside");
          var _context = require("../../context");
          var _desktop = require("../../chat/desktop");
          function DesktopContent() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatSpecs = {};
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container"
            }, _react.default.createElement(_desktop.DesktopChat, null), _react.default.createElement(_aside.Aside, null)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/content/mobile
      **************************************/

      ims.set('./views/content/mobile', {
        hash: 3892361621,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileContent = MobileContent;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _mobile = require("../chat/mobile");
          var _context = require("../context");
          var _content = require("./content");
          function MobileContent() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_mobile.MobileChat, null), _react.default.createElement("div", null, _react.default.createElement(_content.ActivityContent, null))), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.chat), _react.default.createElement(_tabs.Tab, null, texts.tabs.content))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4293477980,
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

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1985781884,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function EmptyChat() {
            const {
              texts: {
                chat: {
                  empty: texts
                }
              },
              store
            } = (0, _context.useModuleContext)();
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store?.model) return null;
            const {
              title,
              description
            } = store.hasCredits ? texts.credits : texts.noCredits;
            return _react.default.createElement("div", {
              className: "empty-chat"
            }, _react.default.createElement(_empty.Empty, {
              icon: "info",
              className: ""
            }, _react.default.createElement("h3", null, title), _react.default.createElement("span", null, description)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 1370001867,
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
        hash: 721457114,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _hooks2 = require("@aimpact/ailearn-app/components/hooks");
          var _desktop = require("./content/desktop");
          var _mobile = require("./content/mobile");
          /*bundle*/ //@ts-ignore

          function View({
            store,
            uri
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const {
              texts
            } = store;
            const screenSize = (0, _hooks2.useMediaQuery)();
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              chatId,
              assignmentId,
              items,
              setShowCoinsModal // only the setter we don't need to update the context when it is opened or closed.
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopContent, null) : _react.default.createElement(_mobile.MobileContent, null)), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              onClose: closeModal,
              type: "interactive",
              globalTexts: store.globalTexts,
              onConsume: store.model.consumeCoins
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/content/content",
        "from": "ActivityContent",
        "name": "ActivityContent"
      }, {
        "im": "./views/content/desktop/aside",
        "from": "Aside",
        "name": "Aside"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'ActivityContent') && _export("ActivityContent", ActivityContent = require ? require('./views/content/content').ActivityContent : value);
        (require || prop === 'Aside') && _export("Aside", Aside = require ? require('./views/content/desktop/aside').Aside : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUNvbnRlbnQiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1hdGVyaWFscyIsIm1vZGUiLCJzZXRNb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250ZW50Iiwia2V5cyIsIk9iamVjdCIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJBY3Rpdml0eUF1ZGlvIiwiQWNjb3JkaW9uIiwiQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJfY29udGVudCIsIkFzaWRlIiwiX2FzaWRlIiwiX2Rlc2t0b3AiLCJEZXNrdG9wQ29udGVudCIsIlBhZ2VDb250YWluZXIiLCJfdGFicyIsIl9tb2JpbGUiLCJNb2JpbGVDb250ZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiVGFicyIsIlRhYiIsInRhYnMiLCJjaGF0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5IiwiaXRlbXMiLCJzaG93Q29pbnNNb2RhbCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYXNzaWdubWVudElkIiwiY2xvc2VNb2RhbCIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIkNvaW5zTW9kYWwiLCJvbkNsb3NlIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9hc2lkZS50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0EsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQzNCO1lBQ0Y7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCRCxJQUFBYSxlQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLEtBQUEsR0FBQWpCLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFVLEtBQUEsQ0FB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