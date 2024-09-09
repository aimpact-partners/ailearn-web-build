System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.21/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.6-dev.21/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev21EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp016Dev21EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp016Dev21ComponentsUi) {
      dependency_6 = _aimpactAilearnApp016Dev21ComponentsUi;
    }, function (_aimpactChatSdk110ChatComponentCode) {
      dependency_7 = _aimpactChatSdk110ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_9 = _aimpactChatSdk110Wrapper;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_simplebarReact) {
      dependency_11 = _simplebarReact;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_12 = _pragmateUi100Beta6Collapsible;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_13 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_14 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp016Dev21ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp016Dev21ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/assignments/character-talk",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['simplebar-react', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.21/assignments/character-talk.widget');
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
        hash: 3832272993,
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
            return _react.default.createElement("div", {
              className: "main-activity-container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_chatComponent.AgentsChatContainer, {
              id: chatId,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement("div", {
              className: "chat__wrapper"
            }, _react.default.createElement("div", {
              className: "chat__container"
            }, _react.default.createElement(_chatComponent.AgentsChatPanel, null)), _react.default.createElement("div", {
              className: "center-container chat-input__layout-container"
            }, _react.default.createElement(_chatComponent.AgentsChatInput, {
              ...chatSpecs
            })))));
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
        hash: 3079487590,
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
            const ref = _react.default.useRef(null);
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
            }), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, texts.description), _react.default.createElement("p", null, store.model.description))));
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
        hash: 1656254542,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopContent = DesktopContent;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _aside = require("./aside");
          var _desktop = require("../../chat/desktop");
          function DesktopContent() {
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
        hash: 399617847,
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
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_mobile.MobileChat, null), _react.default.createElement(_content.ActivityContent, null)), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.chat), _react.default.createElement(_tabs.Tab, null, texts.tabs.content))));
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
        hash: 598048447,
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
              className: " empty-chat"
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
        hash: 2134857115,
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
            const {
              texts
            } = store;
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const screenSize = (0, _hooks2.useMediaQuery)();
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              texts: store.texts,
              fetching: store.fetching,
              store,
              chatId,
              assignmentId,
              items,
              setShowCoinsModal
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, screenSize === 'md' || screenSize === 'lg' ? _react.default.createElement(_desktop.DesktopContent, null) : _react.default.createElement(_mobile.MobileContent, null)), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              onClose: closeModal,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJBY3Rpdml0eUNvbnRlbnQiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1hdGVyaWFscyIsIm1vZGUiLCJzZXRNb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250ZW50Iiwia2V5cyIsIk9iamVjdCIsInJlZiIsInVzZVJlZiIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJBY3Rpdml0eUF1ZGlvIiwiZGVzY3JpcHRpb24iLCJfY29udGVudCIsIkFzaWRlIiwiX2FzaWRlIiwiX2Rlc2t0b3AiLCJEZXNrdG9wQ29udGVudCIsIlBhZ2VDb250YWluZXIiLCJfdGFicyIsIl9tb2JpbGUiLCJNb2JpbGVDb250ZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiVGFicyIsIlRhYiIsInRhYnMiLCJjaGF0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5IiwiaXRlbXMiLCJzaG93Q29pbnNNb2RhbCIsImFzc2lnbm1lbnRJZCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJDb2luc01vZGFsIiwib25DbG9zZSIsImdsb2JhbFRleHRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhdC9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9jaGF0L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGVudC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSDtjQUNBLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FDZixJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQ2pDLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFDL0IsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUMzQjtZQUNGOztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkQsSUFBQWEsZUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixLQUFBLEdBQUFqQixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRVSxLQUFBLENBQUFDLGdCQUFnQjtZQWNqREMsWUFBQTtjQUNDLEtBQUssQ0FB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