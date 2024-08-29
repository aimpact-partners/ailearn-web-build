System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.08/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.08/components/ui", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/empty", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.08/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev08EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp016Dev08EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp016Dev08ComponentsUi) {
      dependency_6 = _aimpactAilearnApp016Dev08ComponentsUi;
    }, function (_aimpactChatSdk110ChatComponentCode) {
      dependency_7 = _aimpactChatSdk110ChatComponentCode;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_8 = _aimpactChatSdk110Wrapper;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_simplebarReact2) {
      dependency_10 = _simplebarReact2;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_11 = _pragmateUi100Beta2Collapsible;
    }, function (_pragmateUi100Beta2Tabs) {
      dependency_12 = _pragmateUi100Beta2Tabs;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_13 = _pragmateUi100Beta2Empty;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev08ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp016Dev08ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.08"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['simplebar-react', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.08/assignments/debate.widget');
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
        hash: 348134808,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.ActivityHeader, {
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
        hash: 4194320514,
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
          var _simplebarReact = require("simplebar-react");
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
            }), _react.default.createElement(_collapsible.Accordion.Container, null, !!synthesis && _react.default.createElement(_collapsible.Accordion.Item, {
              title: texts.synthesis
            }, _react.default.createElement(_simplebarReact.default, {
              className: "scroll-container",
              style: {
                maxHeight: 400
              }
            }, _react.default.createElement(_markdown.Markdown, null, synthesis))), content && _react.default.createElement(_collapsible.Accordion.Item, {
              title: texts.article
            }, _react.default.createElement(_simplebarReact.default, {
              className: "scroll-container",
              style: {
                maxHeight: 400
              }
            }, _react.default.createElement(_markdown.Markdown, null, content))))));
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
        hash: 625630559,
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
            }, _react.default.createElement("main", null, _react.default.createElement(_desktop.DesktopChat, null)), _react.default.createElement(_aside.Aside, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwibW9kZWwiLCJpY29uIiwidHlwZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIl93cmFwcGVyIiwiX21hcmtkb3duIiwiX3NpbXBsZWJhclJlYWN0IiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsInVzZVN0YXRlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250ZW50Iiwia2V5cyIsIk9iamVjdCIsInJlZiIsInVzZVJlZiIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJBY3Rpdml0eUF1ZGlvIiwiQWNjb3JkaW9uIiwiQ29udGFpbmVyIiwiSXRlbSIsInN0eWxlIiwibWF4SGVpZ2h0IiwiTWFya2Rvd24iLCJfY29udGVudCIsIkFzaWRlIiwiX2FzaWRlIiwiX2Rlc2t0b3AiLCJEZXNrdG9wQ29udGVudCIsIlBhZ2VDb250YWluZXIiLCJfdGFicyIsIl9tb2JpbGUiLCJNb2JpbGVDb250ZW50IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiVGFicyIsIlRhYiIsInRhYnMiLCJjaGF0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hvb2tzIiwiX2hvb2tzMiIsInJlYWR5Iiwic2V0UmVhZHkiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJhc3NpZ25tZW50SWQiLCJjbG9zZU1vZGFsIiwidXNlQmluZGVyIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2YsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUNqQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQy9CLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDM0I7WUFDRjs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFhLGVBQUEsR0FBQWhCLE9B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