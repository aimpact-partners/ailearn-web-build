System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.07/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.07/components/ui", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@aimpact/chat-sdk@1.1.0/wrapper", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "simplebar-react@3.2.6", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/empty", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.07/components/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev07ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp016Dev07ComponentsHooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['simplebar-react', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.07/assignments/debate.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIm1vZGVsIiwiaWNvbiIsInR5cGUiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIk1vYmlsZUNoYXQiLCJfd3JhcHBlciIsIl9tYXJrZG93biIsIl9zaW1wbGViYXJSZWFjdCIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5Q29udGVudCIsInRleHRzIiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwibWF0ZXJpYWxzIiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIkFjY29yZGlvbiIsIkNvbnRhaW5lciIsIkl0ZW0iLCJzdHlsZSIsIm1heEhlaWdodCIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIm9uQ2hhbmdlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiVGFicyIsIlRhYiIsInRhYnMiLCJjaGF0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hvb2tzIiwiX2hvb2tzMiIsInJlYWR5Iiwic2V0UmVhZHkiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJhc3NpZ25tZW50SWQiLCJjbG9zZU1vZGFsIiwidXNlQmluZGVyIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2YsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUNqQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQy9CLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDM0I7WUFDRjs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7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