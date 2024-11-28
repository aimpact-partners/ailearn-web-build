System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/wrapper", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/empty", "@aimpact/ailearn-app@0.2.10/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_8 = _aimpactChatSdk130Wrapper;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_9 = _pragmateUi100Beta7Collapsible;
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
          "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['@aimpact/chat-sdk/chat-component.code', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['pragmate-ui/collapsible', dependency_9], ['pragmate-ui/list', dependency_10], ['pragmate-ui/tabs', dependency_11], ['pragmate-ui/empty', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/assignments/debate.widget');
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
        hash: 350293571,
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
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            return _react.default.createElement("div", null, _react.default.createElement(_ui.ActivityHeader, {
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
        hash: 3729414560,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./objectives/item");
          var _list = require("pragmate-ui/list");
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
            }), _react.default.createElement("p", null, store.model.description), !!store.model?.resources.specs?.objectives && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.objectives), _react.default.createElement(_list.List, {
              className: "list-unstyled",
              items: store.model?.resources.specs?.objectives,
              control: _item.ActivityObjective
            }))));
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
        hash: 1194776996,
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
            }, _react.default.createElement(_desktop.DesktopChat, null), _react.default.createElement(_aside.Aside, null)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/content/mobile
      **************************************/

      ims.set('./views/content/mobile', {
        hash: 3892361621,
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
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_mobile.MobileChat, null), _react.default.createElement("div", null, _react.default.createElement(_content.ActivityContent, null))), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.chat), _react.default.createElement(_tabs.Tab, null, texts.tabs.content))));
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
        hash: 1985781884,
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
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store?.model) return null;
            const {
              title,
              description
            } = store.hasCredits ? texts.credits : texts.noCredits;
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
        hash: 721457114,
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
              type: "interactive",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJfaXRlbSIsIl9saXN0IiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsImRlc2NyaXB0aW9uIiwicmVzb3VyY2VzIiwic3BlY3MiLCJvYmplY3RpdmVzIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkFjdGl2aXR5T2JqZWN0aXZlIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiY2hhdCIsIml0ZW0iLCJuYW1lIiwib2JqZWN0aXZlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImFzc2lnbm1lbnRJZCIsImNsb3NlTW9kYWwiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiaW5jbHVkZXMiLCJDb2luc01vZGFsIiwib25DbG9zZSIsImdsb2JhbFRleHRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhdC9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9jaGF0L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGVudC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0EsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQzNCO1lBQ0Y7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxH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