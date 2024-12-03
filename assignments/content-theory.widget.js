System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.15/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.2.15/components/ui", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/chat-sdk@1.3.0/wrapper", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/empty", "@aimpact/ailearn-app@0.2.15/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0215EntitiesAssignmentsActivitiesBase) {
      dependency_4 = _aimpactAilearnApp0215EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0215ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0215ComponentsUi;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_7 = _aimpactChatSdk130ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_10 = _aimpactChatSdk130Wrapper;
    }, function (_pragmateUi100Beta7List) {
      dependency_11 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_12 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_13 = _pragmateUi100Beta7Empty;
    }, function (_aimpactAilearnApp0215ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp0215ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.15"], ["@aimpact/ailearn-app", "0.2.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.15/assignments/content-theory",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['@aimpact/chat-sdk/wrapper', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.2.15/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.15/assignments/content-theory.widget');
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
        hash: 3083610460,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX21hcmtkb3duIiwiX3dyYXBwZXIiLCJfbGlzdCIsIl90YWJzIiwiX2l0ZW0iLCJBY3Rpdml0eUNvbnRlbnQiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRlbnQiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJyZXNvdXJjZXMiLCJzcGVjcyIsIm9iamVjdGl2ZXMiLCJwdXNoIiwiVGFiIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJkZXNjcmlwdGlvbiIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX21vYmlsZSIsIk1vYmlsZUNvbnRlbnQiLCJvbkNoYW5nZSIsImNoYXQiLCJpdGVtIiwibmFtZSIsIm9iamVjdGl2ZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVwZGF0ZSIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MyIiwicmVhZHkiLCJzZXRSZWFkeSIsInNob3dDb2luc01vZGFsIiwiYXNzaWdubWVudElkIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBRUEsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFD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TUMsVUFBVSxHQUFHQSxDQUFBLEtBQU1uRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFFakQsSUFBQTRGLE9BQUEsQ0FBQXJGLFNBQVMsRUFBQyxDQUFDakMsS0FBSyxDQUFDLEVBQUUsTUFBTXdILFFBQVEsQ0FBQ3hILEtBQUssQ0FBQ3VILEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUlBLEtBQUssSUFBSSxDQUFDdkgsS0FBSyxDQUFDOEgsS0FBSyxFQUFFLE9BQU8zRyxNQUFBLENBQUFZLE9BQUEsQ0FBQU8sYUFBQSxxQkFBZTtZQUNqRCxJQUFJLENBQUNpRixLQUFLLEVBQUUsT0FBT3BHLE1BQUEsQ0FBQVksT0FBQSxDQUFBTyxhQUFBLENBQUNsQixHQUFBLENBQUEyRyxVQUFVO2NBQUNDLFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFFakQsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCdkUsS0FBSztjQUNMc0UsUUFBUSxFQUFFaEksS0FBSyxDQUFDZ0ksUUFBUTtjQUN4QmhJLEtBQUs7Y0FDTDRCLE1BQU07Y0FDTjhGLFlBQVk7Y0FDWjlCLEtBQUs7Y0FDTGxFLGlCQUFpQixDQUFDO2FBQ2xCO1lBRUQsT0FDQ1AsTUFBQSxDQUFBWSxPQUFBLENBQUFPLGFBQUEsQ0FBQW5CLE1BQUEsQ0FBQVksT0FBQSxDQUFBb0IsUUFBQSxRQUNDaEMsTUFBQSxDQUFBWSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2YsUUFBQSxDQUFBc0YsYUFBYSxDQUFDcUIsUUFBUTtjQUFDYixLQUFLLEVBQUVZO1lBQVksR0FDekMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNFLFFBQVEsQ0FBQ1IsVUFBVSxDQUFDLEdBQUd4RyxNQUFBLENBQUFZLE9BQUEsQ0FBQU8sYUFBQSxDQUFDNkQsUUFBQSxDQUFBQyxjQUFjLE9BQUcsR0FBR2pGLE1BQUEsQ0FBQVksT0FBQSxDQUFBTyxhQUFBLENBQUNnRSxPQUFBLENBQUFDLGFBQWEsT0FBRyxDQUNuRCxFQUN4QmtCLGNBQWMsSUFDZHRHLE1BQUEsQ0FBQVksT0FBQSxDQUFBTyxhQUFBLENBQUNsQixHQUFBLENBQUFnSCxVQUFVO2NBQ1YvSCxJQUFJLEVBQUVvSCxjQUFjO2NBQ3BCWSxPQUFPLEVBQUVSLFVBQVU7Y0FDbkJTLFdBQVcsRUFBRXRJLEtBQUssQ0FBQ3NJLFdBQVc7Y0FDOUJ2RixJQUFJLEVBQUMsYUFBYTtjQUNsQndGLFNBQVMsRUFBRXZJLEtBQUssQ0FBQ2tDLEtBQUssQ0FBQ3NHO1lBQVksRUFFcEMsQ0FDQztVQUVMIiwiaWdub3JlTGlzdCI6W119