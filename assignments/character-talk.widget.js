System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.09/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.09/components/ui", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/empty", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.09/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev09EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp016Dev09EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp016Dev09ComponentsUi) {
      dependency_6 = _aimpactAilearnApp016Dev09ComponentsUi;
    }, function (_aimpactChatSdk110ChatComponentCode) {
      dependency_7 = _aimpactChatSdk110ChatComponentCode;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_8 = _aimpactChatSdk110Wrapper;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_simplebarReact) {
      dependency_10 = _simplebarReact;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_11 = _pragmateUi100Beta2Collapsible;
    }, function (_pragmateUi100Beta2Tabs) {
      dependency_12 = _pragmateUi100Beta2Tabs;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_13 = _pragmateUi100Beta2Empty;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev09ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp016Dev09ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.09"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/assignments/character-talk",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['simplebar-react', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.09/assignments/character-talk.widget');
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
        hash: 851100049,
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
          function DesktopChat() {
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
        hash: 330468672,
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
            }), _react.default.createElement("p", null, _react.default.createElement("h3", null, texts.description), _react.default.createElement("p", null, store.model.description))));
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
        hash: 569302211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("./context");
          function EmptyChat() {
            const {
              texts: {
                chat: {
                  empty: texts
                }
              },
              store
            } = (0, _context.useModuleContext)();
            if (!store?.model) return null;
            const {
              title,
              description
            } = store.model.hasCredits ? texts.credits : texts.noCredits;
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
        hash: 4130528488,
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
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items, setItems] = (0, _react.useState)(store.items);
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
              chatId,
              assignmentId,
              store,
              items
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopContent, null) : _react.default.createElement(_mobile.MobileContent, null)), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIm1vZGVsIiwiaWNvbiIsInR5cGUiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIl93cmFwcGVyIiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsInVzZVN0YXRlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250ZW50Iiwia2V5cyIsIk9iamVjdCIsInJlZiIsInVzZVJlZiIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJBY3Rpdml0eUF1ZGlvIiwiZGVzY3JpcHRpb24iLCJfY29udGVudCIsIkFzaWRlIiwiX2FzaWRlIiwiX2Rlc2t0b3AiLCJEZXNrdG9wQ29udGVudCIsIlBhZ2VDb250YWluZXIiLCJfdGFicyIsIl9tb2JpbGUiLCJNb2JpbGVDb250ZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiVGFicyIsIlRhYiIsInRhYnMiLCJjaGF0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rcyIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5IiwiaXRlbXMiLCJzZXRJdGVtcyIsInNob3dDb2luc01vZGFsIiwiYXNzaWdubWVudElkIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwidXNlQmluZGVyIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2YsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUNqQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQy9CLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDM0I7WUFDRjs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFhLGVBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsS0FBQSxHQUFBakIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVUsS0FBQSxDQUFBQyxnQkFBZ0I7WUFjakRDLFlBQUE7Y0FDQyxLQUFLLENB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