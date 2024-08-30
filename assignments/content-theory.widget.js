System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.09/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.09/components/ui", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/empty", "@aimpact/ailearn-app@0.1.6-dev.09/components/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_9 = _aimpactChatSdk110Wrapper;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_simplebarReact) {
      dependency_11 = _simplebarReact;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_12 = _pragmateUi100Beta2Collapsible;
    }, function (_pragmateUi100Beta2Tabs) {
      dependency_13 = _pragmateUi100Beta2Tabs;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_14 = _pragmateUi100Beta2Empty;
    }, function (_aimpactAilearnApp016Dev09ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp016Dev09ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.09"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['simplebar-react', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJjb25zb2xlIiwibG9nIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIl93cmFwcGVyIiwiX21hcmtkb3duIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIkFjY29yZGlvbiIsIkNvbnRhaW5lciIsIkl0ZW0iLCJNYXJrZG93biIsIl9jb250ZW50IiwiQXNpZGUiLCJfYXNpZGUiLCJfZGVza3RvcCIsIkRlc2t0b3BDb250ZW50IiwiUGFnZUNvbnRhaW5lciIsIl90YWJzIiwiX21vYmlsZSIsIk1vYmlsZUNvbnRlbnQiLCJvbkNoYW5nZSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiY2hhdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImRlc2NyaXB0aW9uIiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5IiwiaXRlbXMiLCJzaG93Q29pbnNNb2RhbCIsImFzc2lnbm1lbnRJZCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIkNvaW5zTW9kYWwiLCJvbkNsb3NlIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9hc2lkZS50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBRUEsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQzNCO2NBQ0QsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsUUFBUSxHQUFHLElBQUk7WUFDNUI7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNVLFFBQVEsR0FBRyxLQUFLO1lBQzdCOztVQUNBRSxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0QsSUFBQWUsZUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixLQUFBLEdBQUFuQixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRWSxLQUFBLENBQUFDLGdCQUFnQjtZQWNqREMsWUFBQTtjQUNDLEtBQUssQ0FBQ0gsZUFBQSxDQUFBSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN4Qjs7VUFDQU4sT0FBQSxDQUFBVixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJELElBQUFpQixNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlCLEdBQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBMEIsY0FBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixNQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLFFBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsTUFBQSxHQUFBN0IsT0FBQTtVQUNNLFNBQVU4QixXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRXpCLEtBQUs7Y0FBRTBCO1lBQWlCLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBRzVCLEtBQUssQ0FBQzRCLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR1osTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFOUMsSUFBQVQsTUFBQSxDQUFBVSxTQUFTLEVBQ1IsQ0FBQ2xDLEtBQUssQ0FBQ21DLEtBQUssQ0FBQyxFQUNiLE1BQUs7Y0FDSkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO2NBQ3pCTixTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUNELGdCQUFnQixDQUNoQjtZQUNELElBQUksQ0FBQy9CLEtBQUssQ0FBQ3NDLFVBQVUsRUFBRTtjQUN0QlQsU0FBUyxDQUFDVSxPQUFPLEdBQUcsTUFBSztnQkFDeEJiLGlCQUFpQixDQUFDLElBQUksQ0FBQztjQUN4QixDQUFDO2NBQ0RHLFNBQVMsQ0FBQ1csUUFBUSxHQUFHLElBQUk7O1lBRzFCLE9BQ0NyQixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkN2QixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcEIsY0FBQSxDQUFBc0IsbUJBQW1CO2NBQUNDLEVBQUUsRUFBRWhCLE1BQU07Y0FBRWlCLEtBQUssRUFBRXZCLE1BQUEsQ0FBQXdCLFNBQVM7Y0FBRUMsSUFBSSxFQUFDO1lBQThCLEdBQ3JGNUIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0J2QixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDckIsR0FBQSxDQUFBNEIsY0FBYztjQUFDQyxLQUFLLEVBQUVqRCxLQUFLLENBQUNtQyxLQUFLLENBQUNjLEtBQUs7Y0FBRUYsSUFBSSxFQUFFL0MsS0FBSyxDQUFDbUMsS0FBSyxDQUFDZSxJQUFJO2NBQUVBLElBQUksRUFBRWxELEtBQUssQ0FBQ21DLEtBQUssQ0FBQ2U7WUFBSSxFQUFJLEVBQzVGL0IsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CdkIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3BCLGNBQUEsQ0FBQThCLGVBQWUsT0FBRyxDQUNkLEVBQ05oQyxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0MsR0FDN0R2QixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcEIsY0FBQSxDQUFBK0IsZUFBZTtjQUFBLEdBQUt2QjtZQUFTLEVBQUksQ0FDN0IsQ0FDRCxDQUNlLENBQ2pCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUFWLE1BQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBeUIsR0FBQSxHQUFBekIsT0FBQTtVQUNBLElBQUEwQixjQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQTJCLE1BQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBNEIsUUFBQSxHQUFBNUIsT0FBQTtVQUVNLFNBQVUwRCxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRXJELEtBQUs7Y0FBRTBCO1lBQWlCLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBRzVCLEtBQUssQ0FBQzRCLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLElBQUksQ0FBQzdCLEtBQUssQ0FBQ3NDLFVBQVUsRUFBRTtjQUN0QlQsU0FBUyxDQUFDVSxPQUFPLEdBQUcsTUFBSztnQkFDeEJiLGlCQUFpQixDQUFDLElBQUksQ0FBQztjQUN4QixDQUFDO2NBQ0RHLFNBQVMsQ0FBQ1csUUFBUSxHQUFHLElBQUk7O1lBRTFCLE9BQ0NyQixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFBdEIsTUFBQSxDQUFBYSxPQUFBLENBQUFzQixRQUFBLFFBQ0NuQyxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcEIsY0FBQSxDQUFBc0IsbUJBQW1CO2NBQUNDLEVBQUUsRUFBRWhCLE1BQU07Y0FBRWlCLEtBQUssRUFBRXZCLE1BQUEsQ0FBQXdCLFNBQVM7Y0FBRUMsSUFBSSxFQUFDO1lBQThCLEdBQ3JGNUIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CdkIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3JCLEdBQUEsQ0FBQTRCLGNBQWM7Y0FBQ0MsS0FBSyxFQUFFakQsS0FBSyxDQUFDbUMsS0FBSyxDQUFDYyxLQUFLO2NBQUVGLElBQUksRUFBRS9DLEtBQUssQ0FBQ21DLEtBQUssQ0FBQ2UsSUFBSTtjQUFFQSxJQUFJLEVBQUVsRCxLQUFLLENBQUNtQyxLQUFLLENBQUNlO1lBQUksRUFBSSxFQUM1Ri9CLE1BQUEsQ0FBQWEsT0FBQSxDQUFBUyxhQUFBLENBQUNwQixjQUFBLENBQUE4QixlQUFlLE9BQUcsQ0FDZCxFQUNOaEMsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQStDLEdBQzdEdkIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3BCLGNBQUEsQ0FBQStCLGVBQWU7Y0FBQSxHQUFLdkI7WUFBUyxFQUFJLENBQzdCLENBQ2UsQ0FDcEI7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQVYsTUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUE0QixRQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQXlCLEdBQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBNEQsUUFBQSxHQUFBNUQsT0FBQTtVQUNBLElBQUE2RCxTQUFBLEdBQUE3RCxPQUFBO1VBRUEsSUFBQThELFlBQUEsR0FBQTlELE9BQUE7VUFVTztVQUFVLFNBQ1IrRCxlQUFlQSxDQUFBO1lBQ3ZCLE1BQU07Y0FBRUMsS0FBSztjQUFFM0Q7WUFBSyxDQUFFLEdBQUcsSUFBQXVCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFaUMsT0FBTztjQUFFQyxRQUFRO2NBQUVDLE1BQU07Y0FBRUM7WUFBUyxDQUFFLEdBQUcvRCxLQUFLLENBQUNtQyxLQUFLLENBQUM2QixTQUFTO1lBQ3RFLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBRy9DLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUNzQixRQUFBLENBQUFZLFVBQVUsQ0FBQ0MsYUFBYSxJQUFJLFFBQVEsQ0FBQztZQUM1RSxNQUFNQyxPQUFPLEdBQUdKLElBQUksS0FBSyxRQUFRLEdBQUdMLE9BQU8sR0FBR0MsUUFBUSxJQUFJQSxRQUFRO1lBQ2xFLE1BQU1TLElBQUksR0FBRyxDQUFDUixNQUFNLElBQUlTLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDUixNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2xELE1BQU1VLEdBQUcsR0FBR3JELE1BQUEsQ0FBQWEsT0FBSyxDQUFDeUMsTUFBTSxDQUFjLElBQUksQ0FBQztZQUUzQyxJQUFJQyxXQUFXLEdBQUdKLElBQUksQ0FBQ0ssTUFBTTtZQUM3QixNQUFNQyxRQUFRLEdBQUdYLElBQUksSUFBSSxRQUFRLElBQUlILE1BQU0sRUFBRUQsUUFBUSxFQUFFZ0IsR0FBRyxHQUFHZixNQUFNLENBQUNELFFBQVEsRUFBRWdCLEdBQUcsR0FBR2YsTUFBTSxFQUFFRixPQUFPLEVBQUVpQixHQUFHO1lBRXhHLE9BQ0MxRCxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaEN2QixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDckIsR0FBQSxDQUFBMEQsV0FBVztjQUNYcEMsU0FBUyxFQUFDLG9CQUFvQjtjQUM5QnFDLEdBQUcsRUFBRS9FLEtBQUssQ0FBQ21DLEtBQUssQ0FBQzZDLE9BQU87Y0FDeEI5QixJQUFJLEVBQUVsRCxLQUFLLENBQUNtQyxLQUFLLENBQUNlLElBQUk7Y0FDdEIrQixNQUFNLEVBQUM7WUFBVSxFQUNoQixFQUVGOUQsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWUsR0FDaEMsQ0FBQyxDQUFDZ0MsV0FBVyxJQUFJdkQsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3JCLEdBQUEsQ0FBQThELGFBQWE7Y0FBQ0gsR0FBRyxFQUFFSDtZQUFRLEVBQUksRUFDbER6RCxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDZ0IsWUFBQSxDQUFBMEIsU0FBUyxDQUFDQyxTQUFTLFFBQ2xCLENBQUMsQ0FBQ3JCLFNBQVMsSUFDWDVDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBUyxhQUFBLENBQUNnQixZQUFBLENBQUEwQixTQUFTLENBQUNFLElBQUk7Y0FBQ3BDLEtBQUssRUFBRVUsS0FBSyxDQUFDSTtZQUFTLEdBQ3JDNUMsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2UsU0FBQSxDQUFBOEIsUUFBUSxRQUFFdkIsU0FBUyxDQUFZLENBRWpDLEVBQ0FNLE9BQU8sSUFDUGxELE1BQUEsQ0FBQWEsT0FBQSxDQUFBUyxhQUFBLENBQUNnQixZQUFBLENBQUEwQixTQUFTLENBQUNFLElBQUk7Y0FBQ3BDLEtBQUssRUFBRVUsS0FBSyxDQUFDQztZQUFPLEdBQ25DekMsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2UsU0FBQSxDQUFBOEIsUUFBUSxRQUFFakIsT0FBTyxDQUFZLENBRS9CLENBQ29CLENBQ2IsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBbEQsTUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUE0RixRQUFBLEdBQUE1RixPQUFBO1VBRU87VUFBVSxTQUNSNkYsS0FBS0EsQ0FBQTtZQUNiLE9BQ0NyRSxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQTtjQUFPQyxTQUFTLEVBQUM7WUFBc0IsR0FDdEN2QixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDOEMsUUFBQSxDQUFBN0IsZUFBZSxPQUFHLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBdkMsTUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUF5QixHQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQThGLE1BQUEsR0FBQTlGLE9BQUE7VUFDQSxJQUFBNEIsUUFBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUErRixRQUFBLEdBQUEvRixPQUFBO1VBQ00sU0FBVWdHLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFM0YsS0FBSztjQUFFMEI7WUFBaUIsQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdkQsTUFBTUUsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLElBQUksQ0FBQzdCLEtBQUssQ0FBQ3NDLFVBQVUsRUFBRTtjQUN0QlQsU0FBUyxDQUFDVSxPQUFPLEdBQUcsTUFBSztnQkFDeEJiLGlCQUFpQixDQUFDLElBQUksQ0FBQztjQUN4QixDQUFDO2NBQ0RHLFNBQVMsQ0FBQ1csUUFBUSxHQUFHLElBQUk7O1lBRTFCLE9BQ0NyQixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFBdEIsTUFBQSxDQUFBYSxPQUFBLENBQUFzQixRQUFBLFFBQ0NuQyxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDckIsR0FBQSxDQUFBd0UsYUFBYTtjQUFDbEQsU0FBUyxFQUFDO1lBQXFDLEdBQzdEdkIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lELFFBQUEsQ0FBQWpFLFdBQVcsT0FBRyxFQUNmTixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDZ0QsTUFBQSxDQUFBRCxLQUFLLE9BQUcsQ0FDTSxDQUNkO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFyRSxNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQWtHLEtBQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsT0FBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUE0QixRQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTRGLFFBQUEsR0FBQTVGLE9BQUE7VUFDTSxTQUFVb0csYUFBYUEsQ0FBQTtZQUM1QixNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQjVELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7WUFDekIsQ0FBQztZQUNELE1BQU07Y0FBRXNCO1lBQUssQ0FBRSxHQUFHLElBQUFwQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3BDLE9BQ0NSLE1BQUEsQ0FBQWEsT0FBQSxDQUFBUyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFhLEdBQzVCdkIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ29ELEtBQUEsQ0FBQUksYUFBYTtjQUFDRCxRQUFRLEVBQUVBLFFBQVE7Y0FBRUUsTUFBTSxFQUFFO1lBQUMsR0FDM0MvRSxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDb0QsS0FBQSxDQUFBTSxLQUFLLFFBQ0xoRixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcUQsT0FBQSxDQUFBekMsVUFBVSxPQUFHLEVBQ2RsQyxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxjQUNDdEIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQzhDLFFBQUEsQ0FBQTdCLGVBQWUsT0FBRyxDQUNkLENBQ0MsRUFDUnZDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBUyxhQUFBLENBQUNvRCxLQUFBLENBQUFPLElBQUksUUFDSmpGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBUyxhQUFBLENBQUNvRCxLQUFBLENBQUFRLEdBQUcsUUFBRTFDLEtBQUssQ0FBQzJDLElBQUksQ0FBQ0MsSUFBSSxDQUFPLEVBQzVCcEYsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ29ELEtBQUEsQ0FBQVEsR0FBRyxRQUFFMUMsS0FBSyxDQUFDMkMsSUFBSSxDQUFDakMsT0FBTyxDQUFPLENBQ3pCLENBQ1EsQ0FDVjtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBbEQsTUFBQSxHQUFBeEIsT0FBQTtVQWFPLE1BQU02RyxhQUFhLEdBQUE1RixPQUFBLENBQUE0RixhQUFBLEdBQUdyRixNQUFBLENBQUFhLE9BQUssQ0FBQ3lFLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU05RSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNUixNQUFBLENBQUFhLE9BQUssQ0FBQzBFLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUM1RixPQUFBLENBQUFlLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2R0RSxJQUFBTCxNQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBNEIsUUFBQSxHQUFBNUIsT0FBQTtVQUVNLFNBQVVtRCxTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FDTGEsS0FBSyxFQUFFO2dCQUNONEMsSUFBSSxFQUFFO2tCQUFFMUQsS0FBSyxFQUFFYztnQkFBSztjQUFFLENBQ3RCO2NBQ0QzRDtZQUFLLENBQ0wsR0FBRyxJQUFBdUIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixJQUFJLENBQUMzQixLQUFLLEVBQUVtQyxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRTlCLE1BQU07Y0FBRWMsS0FBSztjQUFFMEQ7WUFBVyxDQUFFLEdBQUczRyxLQUFLLENBQUNtQyxLQUFLLENBQUNHLFVBQVUsR0FBR3FCLEtBQUssQ0FBQ2lELE9BQU8sR0FBR2pELEtBQUssQ0FBQ2tELFNBQVM7WUFFdkYsT0FDQzFGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBUyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFhLEdBQzNCdkIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ25CLE1BQUEsQ0FBQXdGLEtBQUs7Y0FBQy9ELElBQUksRUFBQyxNQUFNO2NBQUNMLFNBQVMsRUFBQztZQUFFLEdBQzlCdkIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsYUFBS1EsS0FBSyxDQUFNLEVBQ2hCOUIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsZUFBT2tFLFdBQVcsQ0FBUSxDQUNuQixDQUNIO1VBRVI7Ozs7Ozs7Ozs7O1VDeEJBOztVQUVBcEMsTUFBQSxDQUFBd0MsY0FBQSxDQUFBbkcsT0FBQTtZQUNBb0csS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUE3RixNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQTZCLE1BQUEsR0FBQTdCLE9BQUE7VUFFQSxJQUFBeUIsR0FBQSxHQUFBekIsT0FBQTtVQUNBLElBQUFzSCxPQUFBLEdBQUF0SCxPQUFBO1VBQ0EsSUFBQTRCLFFBQUEsR0FBQTVCLE9BQUE7VUFFQSxJQUFBK0YsUUFBQSxHQUFBL0YsT0FBQTtVQUNBLElBQUFtRyxPQUFBLEdBQUFuRyxPQUFBO1VBRU8sV0FSUDs7VUFRaUIsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSixLQUFLO1lBQUVPO1VBQUcsQ0FBcUM7WUFDOUQsTUFBTSxDQUFDMkcsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBaEcsTUFBQSxDQUFBYyxRQUFRLEVBQUNqQyxLQUFLLENBQUNrSCxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDRSxLQUFLLENBQUMsR0FBRyxJQUFBakcsTUFBQSxDQUFBYyxRQUFRLEVBQUNqQyxLQUFLLENBQUNvSCxLQUFLLENBQUM7WUFDckMsTUFBTTtjQUFFekQ7WUFBSyxDQUFFLEdBQUczRCxLQUFLO1lBQ3ZCLE1BQU0sQ0FBQ3FILGNBQWMsRUFBRTNGLGlCQUFpQixDQUFDLEdBQUdQLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU1xRixZQUFZLEdBQUcvRyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNqRCxNQUFNbUIsTUFBTSxHQUFHckIsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDckMsTUFBTThHLFVBQVUsR0FBRyxJQUFBL0YsTUFBQSxDQUFBZ0csYUFBYSxHQUFFO1lBQ2xDLE1BQU1DLFVBQVUsR0FBR0EsQ0FBQSxLQUFNL0YsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBRWpELElBQUF1RixPQUFBLENBQUEvRSxTQUFTLEVBQUMsQ0FBQ2xDLEtBQUssQ0FBQyxFQUFFLE1BQU1tSCxRQUFRLENBQUNuSCxLQUFLLENBQUNrSCxLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJQSxLQUFLLElBQUksQ0FBQ2xILEtBQUssQ0FBQzBILEtBQUssRUFBRSxPQUFPdkcsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEscUJBQWU7WUFDakQsSUFBSSxDQUFDeUUsS0FBSyxFQUFFLE9BQU8vRixNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDckIsR0FBQSxDQUFBdUcsVUFBVTtjQUFDQyxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWpELE1BQU1DLFlBQVksR0FBRztjQUNwQmxFLEtBQUs7Y0FDTGlFLFFBQVEsRUFBRTVILEtBQUssQ0FBQzRILFFBQVE7Y0FDeEI1SCxLQUFLO2NBQ0w0QixNQUFNO2NBQ04wRixZQUFZO2NBQ1pGLEtBQUs7Y0FDTDFGLGlCQUFpQixDQUFDO2FBQ2xCO1lBRUQsT0FDQ1AsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQXRCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBc0IsUUFBQSxRQUNDbkMsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLFFBQUEsQ0FBQWlGLGFBQWEsQ0FBQ3NCLFFBQVE7Y0FBQ2QsS0FBSyxFQUFFYTtZQUFZLEdBQ3pDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDRSxRQUFRLENBQUNSLFVBQVUsQ0FBQyxHQUFHcEcsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lELFFBQUEsQ0FBQUMsY0FBYyxPQUFHLEdBQUd4RSxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcUQsT0FBQSxDQUFBQyxhQUFhLE9BQUcsQ0FDbkQsRUFDeEJzQixjQUFjLElBQ2RsRyxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDckIsR0FBQSxDQUFBNEcsVUFBVTtjQUNWM0gsSUFBSSxFQUFFZ0gsY0FBYztjQUNwQlksT0FBTyxFQUFFUixVQUFVO2NBQ25CUyxXQUFXLEVBQUVsSSxLQUFLLENBQUNrSSxXQUFXO2NBQzlCQyxTQUFTLEVBQUVuSSxLQUFLLENBQUNtQyxLQUFLLENBQUNpRztZQUFZLEVBRXBDLENBQ0M7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==