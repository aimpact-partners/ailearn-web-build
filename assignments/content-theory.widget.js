System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.34/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.34/components/ui", "@aimpact/chat-sdk@1.2.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.2.0/wrapper", "@aimpact/chat-sdk@1.2.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.1.6-dev.34/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev34EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp016Dev34EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp016Dev34ComponentsUi) {
      dependency_6 = _aimpactAilearnApp016Dev34ComponentsUi;
    }, function (_aimpactChatSdk120ChatComponentCode) {
      dependency_7 = _aimpactChatSdk120ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk120Wrapper) {
      dependency_9 = _aimpactChatSdk120Wrapper;
    }, function (_aimpactChatSdk120WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk120WidgetsMarkdown;
    }, function (_simplebarReact) {
      dependency_11 = _simplebarReact;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_12 = _pragmateUi100Beta6Collapsible;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_13 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_14 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp016Dev34ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp016Dev34ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.2.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.34"], ["@aimpact/ailearn-app", "0.1.6-dev.34"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.34/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['simplebar-react', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.34/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.34/assignments/content-theory.widget');
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
        hash: 2883906694,
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
              // console.log(1, 'change');
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
        hash: 604598194,
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
              type: "interactive",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUNvbnRlbnQiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1hdGVyaWFscyIsIm1vZGUiLCJzZXRNb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250ZW50Iiwia2V5cyIsIk9iamVjdCIsInJlZiIsInVzZVJlZiIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJBY3Rpdml0eUF1ZGlvIiwiQWNjb3JkaW9uIiwiQ29udGFpbmVyIiwiSXRlbSIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIm9uQ2hhbmdlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiVGFicyIsIlRhYiIsInRhYnMiLCJjaGF0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXBkYXRlIiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hvb2tzMiIsInJlYWR5Iiwic2V0UmVhZHkiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwiYXNzaWdubWVudElkIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FFQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2YsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUNqQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQy9CLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDM0I7Y0FDRCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxRQUFRLEdBQUcsSUFBSTtZQUM1QjtZQUVBQyxJQUFJQSxDQUFB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