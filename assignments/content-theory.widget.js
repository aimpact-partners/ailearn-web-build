System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/empty", "@aimpact/ailearn-app@0.3.1/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, ActivityContent, Aside, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ActivityContent: void 0,
    Aside: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp031EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp031EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_6 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_7 = _aimpactChatSdk141ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_10 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7List) {
      dependency_11 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_12 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_13 = _pragmateUi100Beta7Empty;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp031ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['@aimpact/chat-sdk/wrapper', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignments/content-theory.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1630137553,
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
              this.#store.testing = this.uri.qs.get('type') === 'draft';
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('activityId'), this.uri.vars.get('chatId'), this.#store.testing);
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
        hash: 3387019985,
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
            (0, _hooks.useBinder)([store.model], () => {
              console.log('estoy escuchando el cambio');
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
        hash: 2389508406,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _list = require("pragmate-ui/list");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./objectives/item");
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
            if (store.model?.resources?.specs?.objectives) tabs.push(_react.default.createElement(_tabs.Tab, {
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
            }, !!store.model?.resources?.specs?.objectives && _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.description), _react.default.createElement("p", null, store.model.description), _react.default.createElement("h5", {
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
        hash: 3719903614,
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
              store
            } = (0, _context.useModuleContext)();
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
        hash: 1712846192,
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
              className: "mobile-tabs__menu",
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
        hash: 2457280014,
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
              className: "aside__item-list"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRlc3RpbmciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJ2YXJzIiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJjb25zb2xlIiwibG9nIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIl9tYXJrZG93biIsIl93cmFwcGVyIiwiX2xpc3QiLCJfdGFicyIsIl9pdGVtIiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250ZW50Iiwia2V5cyIsIk9iamVjdCIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJ0YWJzIiwicmVzb3VyY2VzIiwic3BlY3MiLCJvYmplY3RpdmVzIiwicHVzaCIsIlRhYiIsImtleSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsIkFjdGl2aXR5QXVkaW8iLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiZGVzY3JpcHRpb24iLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiQWN0aXZpdHlPYmplY3RpdmUiLCJNYXJrZG93biIsIl9jb250ZW50IiwiQXNpZGUiLCJfYXNpZGUiLCJfZGVza3RvcCIsIkRlc2t0b3BDb250ZW50IiwiUGFnZUNvbnRhaW5lciIsIl9tb2JpbGUiLCJNb2JpbGVDb250ZW50IiwiY2hhdCIsIml0ZW0iLCJuYW1lIiwib2JqZWN0aXZlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXBkYXRlIiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJhc3NpZ25tZW50SWQiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiaW5jbHVkZXMiLCJDb2luc01vZGFsIiwib25DbG9zZSIsImdsb2JhbFRleHRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhdC9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9jaGF0L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGVudC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxPQUFPLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU87Y0FDekQsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxDQUNmLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNGLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQzNCLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNNLE9BQU8sQ0FDbkI7Y0FDRCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDWSxRQUFRLEdBQUcsSUFBSTtZQUM1QjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFiLEtBQU0sQ0FBQ1ksUUFBUSxHQUFHLEtBQUs7WUFDN0I7O1VBQ0FFLE9BQUEsQ0FBQWhCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0QsSUFBQWlCLGVBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUWMsS0FBQSxDQUFBQyxnQkFBZ0I7WUFjakRDLFlBQUE7Y0FDQyxLQUFLLENBQUNILGVBQUEsQ0FBQUksTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDeEI7O1VBQ0FOLE9BQUEsQ0FBQVosWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCRCxJQUFBbUIsTUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixHQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLGNBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixRQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQStCLE1BQUEsR0FBQS9CLE9BQUE7VUFFTSxTQUFVZ0MsV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUUzQixLQUFLO2NBQUU0QjtZQUFpQixDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUN2RCxNQUFNQyxNQUFNLEdBQUc5QixLQUFLLENBQUM4QixNQUFNO1lBQzNCLE1BQU1DLFNBQVMsR0FBaUQsRUFBRTtZQUVsRSxNQUFNLEdBQUdDLFNBQVMsQ0FBQyxHQUFHWCxNQUFBLENBQUFZLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUV4QyxJQUFBUixNQUFBLENBQUFTLFNBQVMsRUFDUixDQUFDbkMsS0FBSyxDQUFDb0MsS0FBSyxDQUFDLEVBQ2IsTUFBSztjQUNKQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztjQUN6Q04sU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFDRCxnQkFBZ0IsQ0FDaEI7WUFFRCxJQUFJLENBQUNoQyxLQUFLLENBQUN1QyxVQUFVLEVBQUU7Y0FDdEJSLFNBQVMsQ0FBQ1MsT0FBTyxHQUFHLE1BQUs7Z0JBQ3hCWixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Y0FDeEIsQ0FBQztjQUNERyxTQUFTLENBQUNVLFFBQVEsR0FBRyxJQUFJOztZQUcxQixPQUNDcEIsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDdEIsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ25CLGNBQUEsQ0FBQXFCLG1CQUFtQjtjQUFDQyxFQUFFLEVBQUVmLE1BQU07Y0FBRWdCLEtBQUssRUFBRXRCLE1BQUEsQ0FBQXVCLFNBQVM7Y0FBRUMsSUFBSSxFQUFDO1lBQThCLEdBQ3JGM0IsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0J0QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcEIsR0FBQSxDQUFBMkIsY0FBYztjQUFDQyxLQUFLLEVBQUVsRCxLQUFLLENBQUNvQyxLQUFLLENBQUNjLEtBQUs7Y0FBRUYsSUFBSSxFQUFFaEQsS0FBSyxDQUFDb0MsS0FBSyxDQUFDZSxJQUFJO2NBQUVBLElBQUksRUFBRW5ELEtBQUssQ0FBQ29DLEtBQUssQ0FBQ2U7WUFBSSxFQUFJLEVBQzVGOUIsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CdEIsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ25CLGNBQUEsQ0FBQTZCLGVBQWUsT0FBRyxDQUNkLEVBQ04vQixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0MsR0FDN0R0QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbkIsY0FBQSxDQUFBOEIsZUFBZTtjQUFBLEdBQUt0QjtZQUFTLEVBQUksQ0FDN0IsQ0FDRCxDQUNlLENBQ2pCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBLElBQUFWLE1BQUEsR0FBQTFCLE9BQUE7VUFDQSxJQUFBMkIsR0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUE0QixjQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTZCLE1BQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBOEIsUUFBQSxHQUFBOUIsT0FBQTtVQUVNLFNBQVUyRCxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRXRELEtBQUs7Y0FBRTRCO1lBQWlCLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBRzlCLEtBQUssQ0FBQzhCLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLElBQUksQ0FBQy9CLEtBQUssQ0FBQ3VDLFVBQVUsRUFBRTtjQUN0QlIsU0FBUyxDQUFDUyxPQUFPLEdBQUcsTUFBSztnQkFDeEJaLGlCQUFpQixDQUFDLElBQUksQ0FBQztjQUN4QixDQUFDO2NBQ0RHLFNBQVMsQ0FBQ1UsUUFBUSxHQUFHLElBQUk7O1lBRTFCLE9BQ0NwQixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFBckIsTUFBQSxDQUFBWSxPQUFBLENBQUFzQixRQUFBLFFBQ0NsQyxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbkIsY0FBQSxDQUFBcUIsbUJBQW1CO2NBQUNDLEVBQUUsRUFBRWYsTUFBTTtjQUFFZ0IsS0FBSyxFQUFFdEIsTUFBQSxDQUFBdUIsU0FBUztjQUFFQyxJQUFJLEVBQUM7WUFBOEIsR0FDckYzQixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0J0QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcEIsR0FBQSxDQUFBMkIsY0FBYztjQUFDQyxLQUFLLEVBQUVsRCxLQUFLLENBQUNvQyxLQUFLLENBQUNjLEtBQUs7Y0FBRUYsSUFBSSxFQUFFaEQsS0FBSyxDQUFDb0MsS0FBSyxDQUFDZSxJQUFJO2NBQUVBLElBQUksRUFBRW5ELEtBQUssQ0FBQ29DLEtBQUssQ0FBQ2U7WUFBSSxFQUFJLEVBQzVGOUIsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ25CLGNBQUEsQ0FBQTZCLGVBQWUsT0FBRyxDQUNkLEVBQ04vQixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0MsR0FDN0R0QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbkIsY0FBQSxDQUFBOEIsZUFBZTtjQUFBLEdBQUt0QjtZQUFTLEVBQUksQ0FDN0IsQ0FDZSxDQUNwQjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBVCxHQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTZELFNBQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBOEQsUUFBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUErRCxLQUFBLEdBQUEvRCxPQUFBO1VBQ0EsSUFBQWdFLEtBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBMEIsTUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUE4QixRQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQWlFLEtBQUEsR0FBQWpFLE9BQUE7VUFVTztVQUFVLFNBQ1JrRSxlQUFlQSxDQUFBO1lBQ3ZCLE1BQU07Y0FBRUMsS0FBSztjQUFFOUQ7WUFBSyxDQUFFLEdBQUcsSUFBQXlCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFa0MsT0FBTztjQUFFQyxRQUFRO2NBQUVDLE1BQU07Y0FBRUM7WUFBUyxDQUFFLEdBQUdsRSxLQUFLLENBQUNvQyxLQUFLLENBQUMrQixTQUFTO1lBQ3RFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcvQyxNQUFBLENBQUFZLE9BQUssQ0FBQ0MsUUFBUSxDQUFDdUIsUUFBQSxDQUFBWSxVQUFVLENBQUNDLGFBQWEsSUFBSSxRQUFRLENBQUM7WUFDbkUsSUFBSUMsT0FBTyxHQUFHSCxJQUFJLEtBQUssUUFBUSxHQUFHTCxPQUFPLEdBQUdDLFFBQVEsSUFBSUEsUUFBUTtZQUVoRSxNQUFNUSxJQUFJLEdBQUcsQ0FBQ1AsTUFBTSxJQUFJUSxNQUFNLENBQUNELElBQUksQ0FBQ1AsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNsRCxJQUFJUyxXQUFXLEdBQUdGLElBQUksQ0FBQ0csTUFBTTtZQUM3QixNQUFNQyxRQUFRLEdBQUdSLElBQUksSUFBSSxRQUFRLElBQUlILE1BQU0sRUFBRUQsUUFBUSxFQUFFYSxHQUFHLEdBQUdaLE1BQU0sQ0FBQ0QsUUFBUSxFQUFFYSxHQUFHLEdBQUdaLE1BQU0sRUFBRUYsT0FBTyxFQUFFYyxHQUFHO1lBQ3hHLE1BQU1DLElBQUksR0FBRyxFQUFFO1lBQ2YsSUFBSTlFLEtBQUssQ0FBQ29DLEtBQUssRUFBRTJDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVILElBQUksQ0FBQ0ksSUFBSSxDQUFDN0QsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lCLEtBQUEsQ0FBQXdCLEdBQUc7Y0FBQ0MsR0FBRyxFQUFDO1lBQVksR0FBRXRCLEtBQUssQ0FBQ21CLFVBQVUsQ0FBTyxDQUFDO1lBQ3hHLElBQUlWLE9BQU8sRUFBRU8sSUFBSSxDQUFDSSxJQUFJLENBQUM3RCxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDaUIsS0FBQSxDQUFBd0IsR0FBRztjQUFDQyxHQUFHLEVBQUM7WUFBUyxHQUFFdEIsS0FBSyxDQUFDQyxPQUFPLENBQU8sQ0FBQztZQUNoRSxJQUFJRyxTQUFTLEVBQUVZLElBQUksQ0FBQ0ksSUFBSSxDQUFDN0QsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lCLEtBQUEsQ0FBQXdCLEdBQUc7Y0FBQ0MsR0FBRyxFQUFDO1lBQVcsR0FBRXRCLEtBQUssQ0FBQ0ksU0FBUyxDQUFPLENBQUM7WUFFdEUsT0FDQzdDLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ3RCLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUNwQixHQUFBLENBQUErRCxXQUFXO2NBQ1gxQyxTQUFTLEVBQUMsb0JBQW9CO2NBQzlCMkMsR0FBRyxFQUFFdEYsS0FBSyxDQUFDb0MsS0FBSyxDQUFDbUQsT0FBTztjQUN4QnBDLElBQUksRUFBRW5ELEtBQUssQ0FBQ29DLEtBQUssQ0FBQ2UsSUFBSTtjQUN0QnFDLE1BQU0sRUFBQztZQUFVLEVBQ2hCLEVBRUZuRSxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBZSxHQUNoQyxDQUFDLENBQUMrQixXQUFXLElBQUlyRCxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcEIsR0FBQSxDQUFBbUUsYUFBYTtjQUFDSCxHQUFHLEVBQUVWO1lBQVEsRUFBSSxFQUNsRHZELE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUNpQixLQUFBLENBQUErQixhQUFhO2NBQUNDLE1BQU0sRUFBRTtZQUFDLEdBQ3ZCdEUsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lCLEtBQUEsQ0FBQWlDLElBQUk7Y0FBQ2pELFNBQVMsRUFBQztZQUFZLEdBQUVtQyxJQUFJLENBQVEsRUFDMUN6RCxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDaUIsS0FBQSxDQUFBa0MsS0FBSztjQUFDbEQsU0FBUyxFQUFDO1lBQWtCLEdBQ2pDLENBQUMsQ0FBQzNDLEtBQUssQ0FBQ29DLEtBQUssRUFBRTJDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLElBQzNDNUQsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsY0FDQ3JCLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLGFBQUtvQixLQUFLLENBQUNnQyxXQUFXLENBQU0sRUFDNUJ6RSxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxZQUFJMUMsS0FBSyxDQUFDb0MsS0FBSyxDQUFDMEQsV0FBVyxDQUFLLEVBQ2hDekUsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQU8sR0FBRW1CLEtBQUssQ0FBQ21CLFVBQVUsQ0FBTSxFQUM3QzVELE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUNnQixLQUFBLENBQUFxQyxJQUFJO2NBQ0pwRCxTQUFTLEVBQUMsZUFBZTtjQUN6QnFELEtBQUssRUFBRWhHLEtBQUssQ0FBQ29DLEtBQUssRUFBRTJDLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFQyxVQUFVO2NBQy9DZ0IsT0FBTyxFQUFFckMsS0FBQSxDQUFBc0M7WUFBaUIsRUFDekIsQ0FFSCxFQUVEN0UsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2MsU0FBQSxDQUFBMkMsUUFBUTtjQUFDNUIsT0FBTyxFQUFFQTtZQUFPLEVBQUksRUFFOUJsRCxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDYyxTQUFBLENBQUEyQyxRQUFRO2NBQUM1QixPQUFPLEVBQUVMLFNBQVM7Y0FBRXZCLFNBQVMsRUFBQztZQUFvQixFQUFHLENBQ3hELENBQ08sQ0FDUCxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkVBLElBQUF0QixNQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQXlHLFFBQUEsR0FBQXpHLE9BQUE7VUFFTztVQUFVLFNBQ1IwRyxLQUFLQSxDQUFBO1lBQ2IsT0FDQ2hGLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBO2NBQU9DLFNBQVMsRUFBQztZQUFzQixHQUN0Q3RCLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUMwRCxRQUFBLENBQUF2QyxlQUFlLE9BQUcsQ0FDWjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBLElBQUF4QyxNQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQTJCLEdBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBMkcsTUFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUE4QixRQUFBLEdBQUE5QixPQUFBO1VBRUEsSUFBQTRHLFFBQUEsR0FBQTVHLE9BQUE7VUFFTSxTQUFVNkcsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQUV4RztZQUFLLENBQUUsR0FBRyxJQUFBeUIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNwQyxPQUNDUixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFBckIsTUFBQSxDQUFBWSxPQUFBLENBQUFzQixRQUFBLFFBQ0NsQyxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcEIsR0FBQSxDQUFBbUYsYUFBYTtjQUFDOUQsU0FBUyxFQUFDO1lBQXFDLEdBRTdEdEIsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQzZELFFBQUEsQ0FBQTVFLFdBQVcsT0FBRyxFQUNmTixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDNEQsTUFBQSxDQUFBRCxLQUFLLE9BQUcsQ0FDTSxDQUNkO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUFoRixNQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQWdFLEtBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBK0csT0FBQSxHQUFBL0csT0FBQTtVQUNBLElBQUE4QixRQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQXlHLFFBQUEsR0FBQXpHLE9BQUE7VUFDTSxTQUFVZ0gsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUU3QztZQUFLLENBQUUsR0FBRyxJQUFBckMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNwQyxPQUNDUixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBYSxHQUM1QnRCLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUNpQixLQUFBLENBQUErQixhQUFhO2NBQUMvQyxTQUFTLEVBQUMsbUJBQW1CO2NBQUNnRCxNQUFNLEVBQUU7WUFBQyxHQUNyRHRFLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUNpQixLQUFBLENBQUFrQyxLQUFLLFFBQ0x4RSxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDZ0UsT0FBQSxDQUFBcEQsVUFBVSxPQUFHLEVBQ2RqQyxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxjQUNDckIsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQzBELFFBQUEsQ0FBQXZDLGVBQWUsT0FBRyxDQUNkLENBQ0MsRUFDUnhDLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUNpQixLQUFBLENBQUFpQyxJQUFJO2NBQUNqRCxTQUFTLEVBQUM7WUFBeUIsR0FDeEN0QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDaUIsS0FBQSxDQUFBd0IsR0FBRyxRQUFFckIsS0FBSyxDQUFDZ0IsSUFBSSxDQUFDOEIsSUFBSSxDQUFPLEVBQzVCdkYsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2lCLEtBQUEsQ0FBQXdCLEdBQUcsUUFBRXJCLEtBQUssQ0FBQ2dCLElBQUksQ0FBQ1AsT0FBTyxDQUFPLENBQ3pCLENBQ1EsQ0FDVjtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBbEQsTUFBQSxHQUFBMUIsT0FBQTtVQUVNLFNBQVV1RyxpQkFBaUJBLENBQUM7WUFBRVc7VUFBSSxDQUFFO1lBQ3pDLE9BQ0N4RixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaEN0QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxhQUFLbUUsSUFBSSxDQUFDQyxJQUFJLENBQU0sRUFDcEJ6RixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxlQUFPbUUsSUFBSSxDQUFDRSxTQUFTLENBQVEsQ0FDeEI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBMUYsTUFBQSxHQUFBMUIsT0FBQTtVQWFPLE1BQU1xSCxhQUFhLEdBQUFsRyxPQUFBLENBQUFrRyxhQUFBLEdBQUczRixNQUFBLENBQUFZLE9BQUssQ0FBQ2dGLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU1wRixnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNUixNQUFBLENBQUFZLE9BQUssQ0FBQ2lGLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUNsRyxPQUFBLENBQUFlLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2R0RSxJQUFBTCxNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQTBCLE1BQUEsR0FBQTFCLE9BQUE7VUFDQSxJQUFBOEIsUUFBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUErQixNQUFBLEdBQUEvQixPQUFBO1VBQ00sU0FBVW9ELFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUNMZSxLQUFLLEVBQUU7Z0JBQ044QyxJQUFJLEVBQUU7a0JBQUU5RCxLQUFLLEVBQUVnQjtnQkFBSztjQUFFLENBQ3RCO2NBQ0Q5RDtZQUFLLENBQ0wsR0FBRyxJQUFBeUIsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixJQUFJLENBQUM3QixLQUFLLEVBQUVvQyxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQzlCLE1BQU0sQ0FBQytFLE1BQU0sRUFBRW5GLFNBQVMsQ0FBQyxHQUFHWCxNQUFBLENBQUFZLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxJQUFBUixNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDbkMsS0FBSyxDQUFDb0MsS0FBSyxDQUFDLEVBQUUsTUFBTUosU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDO1lBQy9ELE1BQU07Y0FBRWtCLEtBQUs7Y0FBRTRDO1lBQVcsQ0FBRSxHQUFHOUYsS0FBSyxDQUFDdUMsVUFBVSxHQUFHdUIsS0FBSyxDQUFDc0QsT0FBTyxHQUFHdEQsS0FBSyxDQUFDdUQsU0FBUztZQUVqRixPQUNDaEcsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsR0FDM0J0QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDbEIsTUFBQSxDQUFBOEYsS0FBSztjQUFDdEUsSUFBSSxFQUFDLE1BQU07Y0FBQ0wsU0FBUyxFQUFDO1lBQUUsR0FDOUJ0QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxhQUFLUSxLQUFLLENBQU0sRUFDaEI3QixNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxlQUFPb0QsV0FBVyxDQUFRLENBQ25CLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7VUN6QkE7O1VBRUFyQixNQUFBLENBQUE4QyxjQUFBLENBQUF6RyxPQUFBO1lBQ0EwRyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQW5HLE1BQUEsR0FBQTFCLE9BQUE7VUFDQSxJQUFBK0IsTUFBQSxHQUFBL0IsT0FBQTtVQUVBLElBQUEyQixHQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQThILE9BQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBOEIsUUFBQSxHQUFBOUIsT0FBQTtVQUVBLElBQUE0RyxRQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQStHLE9BQUEsR0FBQS9HLE9BQUE7VUFFTyxXQVJQOztVQVFpQixTQUNSUyxJQUFJQSxDQUFDO1lBQUVKLEtBQUs7WUFBRU87VUFBRyxDQUFxQztZQUM5RCxNQUFNLENBQUNtSCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLElBQUF0RyxNQUFBLENBQUFhLFFBQVEsRUFBQ2xDLEtBQUssQ0FBQzBILEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUMxQixLQUFLLENBQUMsR0FBRyxJQUFBM0UsTUFBQSxDQUFBYSxRQUFRLEVBQUNsQyxLQUFLLENBQUNnRyxLQUFLLENBQUM7WUFDckMsTUFBTTtjQUFFbEM7WUFBSyxDQUFFLEdBQUc5RCxLQUFLO1lBQ3ZCLE1BQU0sQ0FBQzRILGNBQWMsRUFBRWhHLGlCQUFpQixDQUFDLEdBQUdQLE1BQUEsQ0FBQVksT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU0yRixZQUFZLEdBQUd0SCxHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNqRCxNQUFNcUIsTUFBTSxHQUFHdkIsR0FBRyxDQUFDSSxJQUFJLENBQUNGLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDckMsTUFBTXFILFVBQVUsR0FBRyxJQUFBcEcsTUFBQSxDQUFBcUcsYUFBYSxHQUFFO1lBQ2xDLE1BQU1DLFVBQVUsR0FBR0EsQ0FBQSxLQUFNcEcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBRWpELElBQUE2RixPQUFBLENBQUF0RixTQUFTLEVBQUMsQ0FBQ25DLEtBQUssQ0FBQyxFQUFFLE1BQU0ySCxRQUFRLENBQUMzSCxLQUFLLENBQUMwSCxLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJQSxLQUFLLElBQUksQ0FBQzFILEtBQUssQ0FBQ2lJLEtBQUssRUFBRSxPQUFPNUcsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEscUJBQWU7WUFDakQsSUFBSSxDQUFDZ0YsS0FBSyxFQUFFLE9BQU9yRyxNQUFBLENBQUFZLE9BQUEsQ0FBQVMsYUFBQSxDQUFDcEIsR0FBQSxDQUFBNEcsVUFBVTtjQUFDQyxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWpELE1BQU1DLFlBQVksR0FBRztjQUNwQnRFLEtBQUs7Y0FDTHFFLFFBQVEsRUFBRW5JLEtBQUssQ0FBQ21JLFFBQVE7Y0FDeEJuSSxLQUFLO2NBQ0w4QixNQUFNO2NBQ04rRixZQUFZO2NBQ1o3QixLQUFLO2NBQ0xwRSxpQkFBaUIsQ0FBQzthQUNsQjtZQUVELE9BQ0NQLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUFyQixNQUFBLENBQUFZLE9BQUEsQ0FBQXNCLFFBQUEsUUFDQ2xDLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUNqQixRQUFBLENBQUF1RixhQUFhLENBQUNxQixRQUFRO2NBQUNiLEtBQUssRUFBRVk7WUFBWSxHQUN6QyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ0UsUUFBUSxDQUFDUixVQUFVLENBQUMsR0FBR3pHLE1BQUEsQ0FBQVksT0FBQSxDQUFBUyxhQUFBLENBQUM2RCxRQUFBLENBQUFDLGNBQWMsT0FBRyxHQUFHbkYsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ2dFLE9BQUEsQ0FBQUMsYUFBYSxPQUFHLENBQ25ELEVBQ3hCaUIsY0FBYyxJQUNkdkcsTUFBQSxDQUFBWSxPQUFBLENBQUFTLGFBQUEsQ0FBQ3BCLEdBQUEsQ0FBQWlILFVBQVU7Y0FDVmxJLElBQUksRUFBRXVILGNBQWM7Y0FDcEJZLE9BQU8sRUFBRVIsVUFBVTtjQUNuQlMsV0FBVyxFQUFFekksS0FBSyxDQUFDeUksV0FBVztjQUM5QnRGLElBQUksRUFBQyxhQUFhO2NBQ2xCdUYsU0FBUyxFQUFFMUksS0FBSyxDQUFDb0MsS0FBSyxDQUFDdUc7WUFBWSxFQUVwQyxDQUNDO1VBRUwiLCJpZ25vcmVMaXN0IjpbXX0=