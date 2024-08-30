System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.09/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.09/components/ui", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/empty", "@aimpact/ailearn-app@0.1.6-dev.09/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, ActivityContent, Aside, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp016Dev09EntitiesAssignmentsActivitiesBase) {
      dependency_3 = _aimpactAilearnApp016Dev09EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactAilearnApp016Dev09ComponentsUi) {
      dependency_5 = _aimpactAilearnApp016Dev09ComponentsUi;
    }, function (_aimpactChatSdk110ChatComponentCode) {
      dependency_6 = _aimpactChatSdk110ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_7 = _beyondJsReact18Widgets112Hooks;
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
    }, function (_aimpactAilearnApp016Dev09ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp016Dev09ComponentsHooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['@aimpact/chat-sdk/chat-component.code', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['simplebar-react', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.09/assignments/content-theory.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2178194410,
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
              this.#store.playable = true;
            }
            hide() {
              this.#store.playable = false;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 737706090,
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
        hash: 2342528029,
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
            (0, _hooks.useBinder)([store.model], () => {
              console.log('escucheeee');
              setUpdate({});
            }, 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            return _react.default.createElement("div", {
              className: "main-activity-container"
            }, _react.default.createElement(_chatComponent.AgentsChatContainer, {
              id: chatId,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement("div", {
              className: "chat__wrapper"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement("div", {
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
        hash: 2468801346,
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
        hash: 2343382010,
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
            const onChange = () => {
              console.log(1, 'change');
            };
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs.TabsContainer, {
              onChange: onChange,
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
        hash: 1575965083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
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
            const screenSize = (0, _hooks.useMediaQuery)();
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJjb25zb2xlIiwibG9nIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIl93cmFwcGVyIiwiX21hcmtkb3duIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIkFjY29yZGlvbiIsIkNvbnRhaW5lciIsIkl0ZW0iLCJNYXJrZG93biIsIl9jb250ZW50IiwiQXNpZGUiLCJfYXNpZGUiLCJfZGVza3RvcCIsIkRlc2t0b3BDb250ZW50IiwiUGFnZUNvbnRhaW5lciIsIl90YWJzIiwiX21vYmlsZSIsIk1vYmlsZUNvbnRlbnQiLCJvbkNoYW5nZSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiY2hhdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImRlc2NyaXB0aW9uIiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5IiwiaXRlbXMiLCJzaG93Q29pbnNNb2RhbCIsImFzc2lnbm1lbnRJZCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIkNvaW5zTW9kYWwiLCJvbkNsb3NlIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9hc2lkZS50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSDtjQUVBLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FDZixJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQ2pDLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFDL0IsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUMzQjtjQUNELElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLFFBQVEsR0FBRyxJQUFJO1lBQzVCO1lB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