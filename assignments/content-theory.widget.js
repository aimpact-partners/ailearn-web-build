System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/wrapper", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.2.10/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0210EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp0210EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_7 = _aimpactChatSdk130ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_9 = _aimpactChatSdk130Wrapper;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta6List) {
      dependency_11 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_12 = _pragmateUi100Beta6Collapsible;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_13 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_14 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp0210ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp0210ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/empty', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/assignments/content-theory.widget');
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
        hash: 4064047411,
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
          var _list = require("pragmate-ui/list");
          var _item = require("./objectives/item");
          var _tabs = require("pragmate-ui/tabs");
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
            const [mode] = _react.default.useState(_wrapper.AppWrapper.accessibility ?? 'normal');
            let content = mode === 'normal' ? article : dyslexia ?? dyslexia;
            const keys = (audios && Object.keys(audios)) ?? [];
            let totalAudios = keys.length;
            const audioSrc = mode != 'normal' && audios?.dyslexia?.url ? audios.dyslexia?.url : audios?.article?.url;
            const tabs = [];
            if (store.model?.resources.specs?.objectives) tabs.push(_react.default.createElement(_tabs.Tab, {
              key: "objectives"
            }, texts.objectives));
            if (content) tabs.push(_react.default.createElement(_tabs.Tab, {
              key: "article"
            }, texts.article));
            if (synthesis) tabs.push(_react.default.createElement(_tabs.Tab, {
              key: "synthesis"
            }, texts.synthesis));
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
            }), _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, tabs), _react.default.createElement(_tabs.Panes, {
              className: "panes__container"
            }, !!store.model?.resources.specs?.objectives && _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.description), _react.default.createElement("p", null, store.model.description), _react.default.createElement("h5", {
              className: "mb-15"
            }, texts.objectives), _react.default.createElement(_list.List, {
              className: "list-unstyled",
              items: store.model?.resources.specs?.objectives,
              control: _item.ActivityObjective
            })), _react.default.createElement(_markdown.Markdown, {
              content: content
            }), _react.default.createElement(_markdown.Markdown, {
              content: synthesis,
              className: "content__synthesis"
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
        hash: 2451630329,
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
        hash: 882522185,
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
              className: "mobile-tabs__menu",
              onChange: onChange,
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_mobile.MobileChat, null), _react.default.createElement("div", null, _react.default.createElement(_content.ActivityContent, null))), _react.default.createElement(_tabs.Tabs, {
              className: "mobile-tabs__menu-items"
            }, _react.default.createElement(_tabs.Tab, null, texts.tabs.chat), _react.default.createElement(_tabs.Tab, null, texts.tabs.content))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/content/objectives/item
      ***********************************************/

      ims.set('./views/content/objectives/item', {
        hash: 4011165954,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjective = ActivityObjective;
          var _react = require("react");
          function ActivityObjective({
            item
          }) {
            return _react.default.createElement("div", {
              className: "objective-item"
            }, _react.default.createElement("h6", null, item.name), _react.default.createElement("span", null, item.objective));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJfbWFya2Rvd24iLCJfbGlzdCIsIl9pdGVtIiwiX3RhYnMiLCJBY3Rpdml0eUNvbnRlbnQiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRlbnQiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJyZXNvdXJjZXMiLCJzcGVjcyIsIm9iamVjdGl2ZXMiLCJwdXNoIiwiVGFiIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJkZXNjcmlwdGlvbiIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX21vYmlsZSIsIk1vYmlsZUNvbnRlbnQiLCJvbkNoYW5nZSIsImNoYXQiLCJpdGVtIiwibmFtZSIsIm9iamVjdGl2ZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVwZGF0ZSIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MyIiwicmVhZHkiLCJzZXRSZWFkeSIsInNob3dDb2luc01vZGFsIiwiYXNzaWdubWVudElkIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FFQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2YsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUNqQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQy9CLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENB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QUFNQyxVQUFVLEdBQUdBLENBQUEsS0FBTW5HLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUVqRCxJQUFBNEYsT0FBQSxDQUFBckYsU0FBUyxFQUFDLENBQUNqQyxLQUFLLENBQUMsRUFBRSxNQUFNd0gsUUFBUSxDQUFDeEgsS0FBSyxDQUFDdUgsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSUEsS0FBSyxJQUFJLENBQUN2SCxLQUFLLENBQUM4SCxLQUFLLEVBQUUsT0FBTzNHLE1BQUEsQ0FBQVksT0FBQSxDQUFBTyxhQUFBLHFCQUFlO1lBQ2pELElBQUksQ0FBQ2lGLEtBQUssRUFBRSxPQUFPcEcsTUFBQSxDQUFBWSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQTJHLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUVqRCxNQUFNQyxZQUFZLEdBQUc7Y0FDcEJ2RSxLQUFLO2NBQ0xzRSxRQUFRLEVBQUVoSSxLQUFLLENBQUNnSSxRQUFRO2NBQ3hCaEksS0FBSztjQUNMNEIsTUFBTTtjQUNOOEYsWUFBWTtjQUNaOUIsS0FBSztjQUNMbEUsaUJBQWlCLENBQUM7YUFDbEI7WUFFRCxPQUNDUCxNQUFBLENBQUFZLE9BQUEsQ0FBQU8sYUFBQSxDQUFBbkIsTUFBQSxDQUFBWSxPQUFBLENBQUFvQixRQUFBLFFBQ0NoQyxNQUFBLENBQUFZLE9BQUEsQ0FBQU8sYUFBQSxDQUFDZixRQUFBLENBQUFzRixhQUFhLENBQUNxQixRQUFRO2NBQUNiLEtBQUssRUFBRVk7WUFBWSxHQUN6QyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ0UsUUFBUSxDQUFDUixVQUFVLENBQUMsR0FBR3hHLE1BQUEsQ0FBQVksT0FBQSxDQUFBTyxhQUFBLENBQUM2RCxRQUFBLENBQUFDLGNBQWMsT0FBRyxHQUFHakYsTUFBQSxDQUFBWSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2dFLE9BQUEsQ0FBQUMsYUFBYSxPQUFHLENBQ25ELEVBQ3hCa0IsY0FBYyxJQUNkdEcsTUFBQSxDQUFBWSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQWdILFVBQVU7Y0FDVi9ILElBQUksRUFBRW9ILGNBQWM7Y0FDcEJZLE9BQU8sRUFBRVIsVUFBVTtjQUNuQlMsV0FBVyxFQUFFdEksS0FBSyxDQUFDc0ksV0FBVztjQUM5QnZGLElBQUksRUFBQyxhQUFhO2NBQ2xCd0YsU0FBUyxFQUFFdkksS0FBSyxDQUFDa0MsS0FBSyxDQUFDc0c7WUFBWSxFQUVwQyxDQUNDO1VBRUwiLCJpZ25vcmVMaXN0IjpbXX0=