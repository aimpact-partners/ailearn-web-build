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
        hash: 1929997163,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRlc3RpbmciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJ2YXJzIiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX21hcmtkb3duIiwiX3dyYXBwZXIiLCJfbGlzdCIsIl90YWJzIiwiX2l0ZW0iLCJBY3Rpdml0eUNvbnRlbnQiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRlbnQiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJyZXNvdXJjZXMiLCJzcGVjcyIsIm9iamVjdGl2ZXMiLCJwdXNoIiwiVGFiIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJkZXNjcmlwdGlvbiIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX21vYmlsZSIsIk1vYmlsZUNvbnRlbnQiLCJjaGF0IiwiaXRlbSIsIm5hbWUiLCJvYmplY3RpdmUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1cGRhdGUiLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hvb2tzMiIsInJlYWR5Iiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsImFzc2lnbm1lbnRJZCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIkNvaW5zTW9kYWwiLCJvbkNsb3NlIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9hc2lkZS50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGVudC9vYmplY3RpdmVzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSDtjQUNBLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLE9BQU8sR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBTztjQUN6RCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLENBQ2YsSUFBSSxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxD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