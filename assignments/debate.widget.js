System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.17/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.17/components/ui", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/empty", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.17/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev17EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp016Dev17EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp016Dev17ComponentsUi) {
      dependency_6 = _aimpactAilearnApp016Dev17ComponentsUi;
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
    }, function (_aimpactAilearnApp016Dev17ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp016Dev17ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.17"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['simplebar-react', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.17/assignments/debate.widget');
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
        hash: 1888465399,
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
        hash: 707041512,
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
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
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
            }), _react.default.createElement(_collapsible.Accordion.Container, null, !!synthesis && _react.default.createElement(_collapsible.Accordion.Item, {
              title: texts.synthesis
            }, _react.default.createElement(_markdown.Markdown, null, synthesis)), content && _react.default.createElement(_collapsible.Accordion.Item, {
              title: texts.article
            }, _react.default.createElement(_markdown.Markdown, null, content)))));
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
        hash: 1349375679,
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
        hash: 3007049601,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIm1vZGVsIiwiaWNvbiIsInR5cGUiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIl93cmFwcGVyIiwiX21hcmtkb3duIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsInVzZVN0YXRlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250ZW50Iiwia2V5cyIsIk9iamVjdCIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJBY3Rpdml0eUF1ZGlvIiwiQWNjb3JkaW9uIiwiQ29udGFpbmVyIiwiSXRlbSIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiY2hhdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImRlc2NyaXB0aW9uIiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rcyIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5IiwiaXRlbXMiLCJzaG93Q29pbnNNb2RhbCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYXNzaWdubWVudElkIiwiY2xvc2VNb2RhbCIsInVzZUJpbmRlciIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIkNvaW5zTW9kYWwiLCJvbkNsb3NlIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9hc2lkZS50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0EsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQzNCO1lBQ0Y7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCRCxJQUFBYSxlQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLEtBQUEsR0FBQWpCLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFV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