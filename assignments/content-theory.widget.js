System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/chat-sdk@1.3.0/wrapper", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/empty", "@aimpact/ailearn-app@0.2.10/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, ActivityContent, Aside, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0210EntitiesAssignmentsActivitiesBase) {
      dependency_3 = _aimpactAilearnApp0210EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_5 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_6 = _aimpactChatSdk130ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_7 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_8 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_9 = _aimpactChatSdk130Wrapper;
    }, function (_pragmateUi100Beta7List) {
      dependency_10 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_11 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_12 = _pragmateUi100Beta7Empty;
    }, function (_aimpactAilearnApp0210ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0210ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['@aimpact/chat-sdk/chat-component.code', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/chat-sdk/widgets/markdown', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['pragmate-ui/list', dependency_10], ['pragmate-ui/tabs', dependency_11], ['pragmate-ui/empty', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicGxheWFibGUiLCJoaWRlIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX21hcmtkb3duIiwiX3dyYXBwZXIiLCJfbGlzdCIsIl90YWJzIiwiX2l0ZW0iLCJBY3Rpdml0eUNvbnRlbnQiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRlbnQiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJyZXNvdXJjZXMiLCJzcGVjcyIsIm9iamVjdGl2ZXMiLCJwdXNoIiwiVGFiIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJkZXNjcmlwdGlvbiIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIk1hcmtkb3duIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX21vYmlsZSIsIk1vYmlsZUNvbnRlbnQiLCJvbkNoYW5nZSIsImNoYXQiLCJpdGVtIiwibmFtZSIsIm9iamVjdGl2ZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVwZGF0ZSIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MyIiwicmVhZHkiLCJzZXRSZWFkeSIsInNob3dDb2luc01vZGFsIiwiYXNzaWdubWVudElkIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSDtjQUVBLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FDZixJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQ2pDLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFDL0IsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0Ms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LFVBQVUsR0FBR0EsQ0FBQSxLQUFNbkcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBRWpELElBQUE0RixPQUFBLENBQUFyRixTQUFTLEVBQUMsQ0FBQ2pDLEtBQUssQ0FBQyxFQUFFLE1BQU13SCxRQUFRLENBQUN4SCxLQUFLLENBQUN1SCxLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJQSxLQUFLLElBQUksQ0FBQ3ZILEtBQUssQ0FBQzhILEtBQUssRUFBRSxPQUFPM0csTUFBQSxDQUFBWSxPQUFBLENBQUFPLGFBQUEscUJBQWU7WUFDakQsSUFBSSxDQUFDaUYsS0FBSyxFQUFFLE9BQU9wRyxNQUFBLENBQUFZLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbEIsR0FBQSxDQUFBMkcsVUFBVTtjQUFDQyxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWpELE1BQU1DLFlBQVksR0FBRztjQUNwQnZFLEtBQUs7Y0FDTHNFLFFBQVEsRUFBRWhJLEtBQUssQ0FBQ2dJLFFBQVE7Y0FDeEJoSSxLQUFLO2NBQ0w0QixNQUFNO2NBQ044RixZQUFZO2NBQ1o5QixLQUFLO2NBQ0xsRSxpQkFBaUIsQ0FBQzthQUNsQjtZQUVELE9BQ0NQLE1BQUEsQ0FBQVksT0FBQSxDQUFBTyxhQUFBLENBQUFuQixNQUFBLENBQUFZLE9BQUEsQ0FBQW9CLFFBQUEsUUFDQ2hDLE1BQUEsQ0FBQVksT0FBQSxDQUFBTyxhQUFBLENBQUNmLFFBQUEsQ0FBQXNGLGFBQWEsQ0FBQ3FCLFFBQVE7Y0FBQ2IsS0FBSyxFQUFFWTtZQUFZLEdBQ3pDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDRSxRQUFRLENBQUNSLFVBQVUsQ0FBQyxHQUFHeEcsTUFBQSxDQUFBWSxPQUFBLENBQUFPLGFBQUEsQ0FBQzZELFFBQUEsQ0FBQUMsY0FBYyxPQUFHLEdBQUdqRixNQUFBLENBQUFZLE9BQUEsQ0FBQU8sYUFBQSxDQUFDZ0UsT0FBQSxDQUFBQyxhQUFhLE9BQUcsQ0FDbkQsRUFDeEJrQixjQUFjLElBQ2R0RyxNQUFBLENBQUFZLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbEIsR0FBQSxDQUFBZ0gsVUFBVTtjQUNWL0gsSUFBSSxFQUFFb0gsY0FBYztjQUNwQlksT0FBTyxFQUFFUixVQUFVO2NBQ25CUyxXQUFXLEVBQUV0SSxLQUFLLENBQUNzSSxXQUFXO2NBQzlCdkYsSUFBSSxFQUFDLGFBQWE7Y0FDbEJ3RixTQUFTLEVBQUV2SSxLQUFLLENBQUNrQyxLQUFLLENBQUNzRztZQUFZLEVBRXBDLENBQ0M7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==