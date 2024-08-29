System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.07/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.07/components/ui", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/empty", "@aimpact/ailearn-app@0.1.6-dev.07/components/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev07EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp016Dev07EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp016Dev07ComponentsUi) {
      dependency_6 = _aimpactAilearnApp016Dev07ComponentsUi;
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
    }, function (_aimpactAilearnApp016Dev07ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp016Dev07ComponentsHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.07"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['simplebar-react', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.07/assignments/content-theory.widget');
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
        hash: 3112816878,
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
            console.log(20, chatId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIm1vZGVsIiwiaWNvbiIsInR5cGUiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIk1vYmlsZUNoYXQiLCJfd3JhcHBlciIsIl9tYXJrZG93biIsIl9zaW1wbGViYXJSZWFjdCIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5Q29udGVudCIsInRleHRzIiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwibWF0ZXJpYWxzIiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIkFjY29yZGlvbiIsIkNvbnRhaW5lciIsIkl0ZW0iLCJzdHlsZSIsIm1heEhlaWdodCIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIm9uQ2hhbmdlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiVGFicyIsIlRhYiIsInRhYnMiLCJjaGF0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hvb2tzIiwiX2hvb2tzMiIsInJlYWR5Iiwic2V0UmVhZHkiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwiYXNzaWdubWVudElkIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwidXNlQmluZGVyIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FFQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2YsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUNqQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQy9CLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDM0I7Y0FDRCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxRQUFR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