System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.08/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.08/components/ui", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/empty", "@aimpact/ailearn-app@0.1.6-dev.08/components/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_9 = _aimpactChatSdk110Wrapper;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_simplebarReact2) {
      dependency_11 = _simplebarReact2;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_12 = _pragmateUi100Beta2Collapsible;
    }, function (_pragmateUi100Beta2Tabs) {
      dependency_13 = _pragmateUi100Beta2Tabs;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_14 = _pragmateUi100Beta2Empty;
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
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['simplebar-react', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.08/assignments/content-theory.widget');
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
        hash: 3584525355,
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
            console.log(20, store.model);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1vZGVsIiwidXNlQmluZGVyIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIl93cmFwcGVyIiwiX21hcmtkb3duIiwiX3NpbXBsZWJhclJlYWN0IiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIkFjY29yZGlvbiIsIkNvbnRhaW5lciIsIkl0ZW0iLCJzdHlsZSIsIm1heEhlaWdodCIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIm9uQ2hhbmdlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiVGFicyIsIlRhYiIsInRhYnMiLCJjaGF0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hvb2tzMiIsInJlYWR5Iiwic2V0UmVhZHkiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwiYXNzaWdubWVudElkIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FFQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2YsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUNqQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQy9CLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDM0I7Y0FDRCxJQUFJLENBQUMs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R0FBRTtZQUNsQyxNQUFNQyxVQUFVLEdBQUdBLENBQUEsS0FBTWxHLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUVqRCxJQUFBMEYsT0FBQSxDQUFBL0UsU0FBUyxFQUFDLENBQUNyQyxLQUFLLENBQUMsRUFBRSxNQUFNc0gsUUFBUSxDQUFDdEgsS0FBSyxDQUFDcUgsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSUEsS0FBSyxJQUFJLENBQUNySCxLQUFLLENBQUM2SCxLQUFLLEVBQUUsT0FBTzFHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBUyxhQUFBLHFCQUFlO1lBQ2pELElBQUksQ0FBQzRFLEtBQUssRUFBRSxPQUFPbEcsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3JCLEdBQUEsQ0FBQTBHLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUVqRCxNQUFNQyxZQUFZLEdBQUc7Y0FDcEJwRSxLQUFLO2NBQ0xtRSxRQUFRLEVBQUUvSCxLQUFLLENBQUMrSCxRQUFRO2NBQ3hCL0gsS0FBSztjQUNMNEIsTUFBTTtjQUNONkYsWUFBWTtjQUNaRixLQUFLO2NBQ0w3RixpQkFBaUIsQ0FBQzthQUNsQjtZQUVELE9BQ0NQLE1BQUEsQ0FBQWEsT0FBQSxDQUFBUyxhQUFBLENBQUF0QixNQUFBLENBQUFhLE9BQUEsQ0FBQVUsUUFBQSxRQUNDdkIsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2xCLFFBQUEsQ0FBQW9GLGFBQWEsQ0FBQ3NCLFFBQVE7Y0FBQ2QsS0FBSyxFQUFFYTtZQUFZLEdBQ3pDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDRSxRQUFRLENBQUNSLFVBQVUsQ0FBQyxHQUFHdkcsTUFBQSxDQUFBYSxPQUFBLENBQUFTLGFBQUEsQ0FBQ29ELFFBQUEsQ0FBQUMsY0FBYyxPQUFHLEdBQUczRSxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDd0QsT0FBQSxDQUFBQyxhQUFhLE9BQUcsQ0FDbkQsRUFDeEJzQixjQUFjLElBQ2RyRyxNQUFBLENBQUFhLE9BQUEsQ0FBQVMsYUFBQSxDQUFDckIsR0FBQSxDQUFBK0csVUFBVTtjQUNWOUgsSUFBSSxFQUFFbUgsY0FBYztjQUNwQlksT0FBTyxFQUFFUixVQUFVO2NBQ25CUyxXQUFXLEVBQUVySSxLQUFLLENBQUNxSSxXQUFXO2NBQzlCQyxTQUFTLEVBQUV0SSxLQUFLLENBQUNvQyxLQUFLLENBQUNtRztZQUFZLEVBRXBDLENBQ0M7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==