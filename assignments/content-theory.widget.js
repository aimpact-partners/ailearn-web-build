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
        hash: 3468864722,
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
        hash: 2449408587,
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
            console.log(1, store.hasCredits, store.model.credits.getProperties());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRlc3RpbmciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJ2YXJzIiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJjb25zb2xlIiwibG9nIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX21hcmtkb3duIiwiX3dyYXBwZXIiLCJfbGlzdCIsIl90YWJzIiwiX2l0ZW0iLCJBY3Rpdml0eUNvbnRlbnQiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRlbnQiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJyZXNvdXJjZXMiLCJzcGVjcyIsIm9iamVjdGl2ZXMiLCJwdXNoIiwiVGFiIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJkZXNjcmlwdGlvbiIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX21vYmlsZSIsIk1vYmlsZUNvbnRlbnQiLCJjaGF0IiwiaXRlbSIsIm5hbWUiLCJvYmplY3RpdmUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1cGRhdGUiLCJub0NyZWRpdHMiLCJFbXB0eSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MyIiwicmVhZHkiLCJzZXRSZWFkeSIsInNob3dDb2luc01vZGFsIiwiYXNzaWdubWVudElkIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0EsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sT0FBTyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPO2NBQ3pELElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FDZixJQUFJLENB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