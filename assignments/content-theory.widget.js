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
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['simplebar-react', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.21/assignments/content-theory.widget');
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
        hash: 2928058308,
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
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
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
        hash: 1178937404,
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
            }, _react.default.createElement(_markdown.Markdown, {
              content: synthesis
            })), content && _react.default.createElement(_collapsible.Accordion.Item, {
              title: texts.article
            }, _react.default.createElement(_markdown.Markdown, {
              content: content
            })))));
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
        hash: 712900220,
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
        hash: 4084527759,
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
            if (!store?.model) return null;
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUNvbnRlbnQiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1hdGVyaWFscyIsIm1vZGUiLCJzZXRNb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250ZW50Iiwia2V5cyIsIk9iamVjdCIsInJlZiIsInVzZVJlZiIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJBY3Rpdml0eUF1ZGlvIiwiQWNjb3JkaW9uIiwiQ29udGFpbmVyIiwiSXRlbSIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIm9uQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiY2hhdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVwZGF0ZSIsImRlc2NyaXB0aW9uIiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5IiwiaXRlbXMiLCJzaG93Q29pbnNNb2RhbCIsImFzc2lnbm1lbnRJZCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIkNvaW5zTW9kYWwiLCJvbkNsb3NlIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9hc2lkZS50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBRUEsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQzNCO2NBQ0QsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsUUFBUSxHQUFHLElBQUk7WUFDNUI7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