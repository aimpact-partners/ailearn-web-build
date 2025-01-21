System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/empty", "@aimpact/ailearn-app@0.3.1/components/hooks"], function (_export, _context2) {
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
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_9 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_10 = _pragmateUi100Beta7Collapsible;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['pragmate-ui/collapsible', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignments/debate.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1021650953,
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
              this.#store.testing = this.uri.qs.get('type') === 'draft';
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
        hash: 575213752,
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
            }), _react.default.createElement("p", null, store.model.description), !!store.model?.resources?.specs?.objectives && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.objectives), _react.default.createElement(_list.List, {
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
        hash: 2710012929,
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
              active: 0,
              className: "mobile-tabs__menu"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRlc3RpbmciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJ2YXJzIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwidHlwZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJfaXRlbSIsIl9saXN0IiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsImRlc2NyaXB0aW9uIiwicmVzb3VyY2VzIiwic3BlY3MiLCJvYmplY3RpdmVzIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkFjdGl2aXR5T2JqZWN0aXZlIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiY2hhdCIsIml0ZW0iLCJuYW1lIiwib2JqZWN0aXZlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImFzc2lnbm1lbnRJZCIsImNsb3NlTW9kYWwiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiaW5jbHVkZXMiLCJDb2luc01vZGFsIiwib25DbG9zZSIsImdsb2JhbFRleHRzIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhdC9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9jaGF0L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGVudC9jb250ZW50LnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sT0FBTyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPO2NBQ3pELElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FDZixJQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsY0FBYyxDQUFDLEVBQ2pDLElBQUksQ0FBQ0YsR0FBRyxDQUFDSSxJQUFJLENBQUNGLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFDL0IsSUFBSSxDQUFDRixHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUMzQjtZQUNGOztVQUNBRyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkQsSUFBQWUsZUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixLQUFBLEdBQUFuQixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRWSxLQUFBLENBQUFDLGdCQUFnQjtZQWNqREMsWUFBQTtjQUNDLEtBQUssQ0FBQ0gsZUFBQSxDQUFBSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN4Qjs7VUFDQU4sT0FBQSxDQUFBVixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJELElBQUFpQixNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlCLEdBQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBMEIsY0FBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixNQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLFFBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsTUFBQSxHQUFBN0IsT0FBQTtVQUVNLFNBQVU4QixXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRXpCLEtBQUs7Y0FBRTBCO1lBQWlCLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBRzVCLEtBQUssQ0FBQzRCLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBQ2xFLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR1osTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDOUMsSUFBQVQsTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ2xDLEtBQUssQ0FBQ21DLEtBQUssQ0FBQyxFQUFFLE1BQU1KLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztZQUMvRCxJQUFJLENBQUMvQixLQUFLLENBQUNvQyxVQUFVLEVBQUU7Y0FDdEJQLFNBQVMsQ0FBQ1EsT0FBTyxHQUFHLE1BQUs7Z0JBQ3hCWCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Y0FDeEIsQ0FBQztjQUNERyxTQUFTLENBQUNTLFFBQVEsR0FBRyxJQUFJOztZQUcxQixPQUNDbkIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsY0FDQ3BCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNuQixHQUFBLENBQUFvQixjQUFjO2NBQUNDLEtBQUssRUFBRXpDLEtBQUssQ0FBQ21DLEtBQUssQ0FBQ00sS0FBSztjQUFFQyxJQUFJLEVBQUUxQyxLQUFLLENBQUNtQyxLQUFLLENBQUNRLElBQUk7Y0FBRUEsSUFBSSxFQUFFM0MsS0FBSyxDQUFDbUMsS0FBSyxDQUFDUTtZQUFJLEVBQUksRUFDNUZ4QixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbEIsY0FBQSxDQUFBdUIsbUJBQW1CO2NBQUNDLEVBQUUsRUFBRWpCLE1BQU07Y0FBRWtCLEtBQUssRUFBRXhCLE1BQUEsQ0FBQXlCLFNBQVM7Y0FBRUwsSUFBSSxFQUFDO1lBQThCLEdBQ3JGdkIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUE7Y0FBS1MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2xCLGNBQUEsQ0FBQTRCLGVBQWUsT0FBRyxDQUNkLEVBQ045QixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBK0MsR0FDN0Q3QixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbEIsY0FBQSxDQUFBNkIsZUFBZTtjQUFBLEdBQUtyQjtZQUFTLEVBQUksQ0FDN0IsQ0FDZSxDQUNqQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBVixNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlCLEdBQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBMEIsY0FBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixNQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLFFBQUEsR0FBQTVCLE9BQUE7VUFFTSxTQUFVd0QsVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUVuRCxLQUFLO2NBQUUwQjtZQUFpQixDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUN2RCxNQUFNQyxNQUFNLEdBQUc1QixLQUFLLENBQUM0QixNQUFNO1lBQzNCLE1BQU1DLFNBQVMsR0FBaUQsRUFBRTtZQUVsRSxJQUFJLENBQUM3QixLQUFLLENBQUNvQyxVQUFVLEVBQUU7Y0FDdEJQLFNBQVMsQ0FBQ1EsT0FBTyxHQUFHLE1BQUs7Z0JBQ3hCWCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Y0FDeEIsQ0FBQztjQUNERyxTQUFTLENBQUNTLFFBQVEsR0FBRyxJQUFJOztZQUUxQixPQUNDbkIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBb0IsUUFBQSxRQUNDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2xCLGNBQUEsQ0FBQXVCLG1CQUFtQjtjQUFDQyxFQUFFLEVBQUVqQixNQUFNO2NBQUVrQixLQUFLLEVBQUV4QixNQUFBLENBQUF5QixTQUFTO2NBQUVMLElBQUksRUFBQztZQUE4QixHQUNyRnZCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUFpQixHQUMvQjdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNuQixHQUFBLENBQUFvQixjQUFjO2NBQUNDLEtBQUssRUFBRXpDLEtBQUssQ0FBQ21DLEtBQUssQ0FBQ00sS0FBSztjQUFFQyxJQUFJLEVBQUUxQyxLQUFLLENBQUNtQyxLQUFLLENBQUNRLElBQUk7Y0FBRUEsSUFBSSxFQUFFM0MsS0FBSyxDQUFDbUMsS0FBSyxDQUFDUTtZQUFJLEVBQUksRUFDNUZ4QixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbEIsY0FBQSxDQUFBNEIsZUFBZSxPQUFHLENBQ2QsRUFDTjlCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBO2NBQUtTLFNBQVMsRUFBQztZQUErQyxHQUM3RDdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNsQixjQUFBLENBQUE2QixlQUFlO2NBQUEsR0FBS3JCO1lBQVMsRUFBSSxDQUM3QixDQUNlLENBQ3BCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUFULEdBQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBMEQsUUFBQSxHQUFBMUQsT0FBQTtVQUVBLElBQUF3QixNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQTRCLFFBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBMkQsS0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE0RCxLQUFBLEdBQUE1RCxPQUFBO1VBV087VUFBVSxTQUNSNkQsZUFBZUEsQ0FBQTtZQUN2QixNQUFNO2NBQUVDLEtBQUs7Y0FBRXpEO1lBQUssQ0FBRSxHQUFHLElBQUF1QixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNDLE1BQU07Y0FBRStCLE9BQU87Y0FBRUMsUUFBUTtjQUFFQyxNQUFNO2NBQUVDO1lBQVMsQ0FBRSxHQUFHN0QsS0FBSyxDQUFDbUMsS0FBSyxDQUFDMkIsU0FBUztZQUN0RSxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUc3QyxNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDb0IsUUFBQSxDQUFBWSxVQUFVLENBQUNDLGFBQWEsSUFBSSxRQUFRLENBQUM7WUFDNUUsTUFBTUMsT0FBTyxHQUFHSixJQUFJLEtBQUssUUFBUSxHQUFHTCxPQUFPLEdBQUdDLFFBQVEsSUFBSUEsUUFBUTtZQUNsRSxNQUFNUyxJQUFJLEdBQUcsQ0FBQ1IsTUFBTSxJQUFJUyxNQUFNLENBQUNELElBQUksQ0FBQ1IsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUVsRCxJQUFJVSxXQUFXLEdBQUdGLElBQUksQ0FBQ0csTUFBTTtZQUM3QixNQUFNQyxRQUFRLEdBQUdULElBQUksSUFBSSxRQUFRLElBQUlILE1BQU0sRUFBRUQsUUFBUSxFQUFFYyxHQUFHLEdBQUdiLE1BQU0sQ0FBQ0QsUUFBUSxFQUFFYyxHQUFHLEdBQUdiLE1BQU0sRUFBRUYsT0FBTyxFQUFFZSxHQUFHO1lBRXhHLE9BQ0N0RCxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBa0IsR0FDaEM3QixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbkIsR0FBQSxDQUFBc0QsV0FBVztjQUNYMUIsU0FBUyxFQUFDLG9CQUFvQjtjQUM5QjJCLEdBQUcsRUFBRTNFLEtBQUssQ0FBQ21DLEtBQUssQ0FBQ3lDLE9BQU87Y0FDeEJqQyxJQUFJLEVBQUUzQyxLQUFLLENBQUNtQyxLQUFLLENBQUNRLElBQUk7Y0FDdEJrQyxNQUFNLEVBQUM7WUFBVSxFQUNoQixFQUVGMUQsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUE7Y0FBU1MsU0FBUyxFQUFDO1lBQWUsR0FDaEMsQ0FBQyxDQUFDc0IsV0FBVyxJQUFJbkQsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ25CLEdBQUEsQ0FBQTBELGFBQWE7Y0FBQ0gsR0FBRyxFQUFFSDtZQUFRLEVBQUksRUFDbERyRCxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxZQUFJdkMsS0FBSyxDQUFDbUMsS0FBSyxDQUFDNEMsV0FBVyxDQUFLLEVBQy9CLENBQUMsQ0FBQy9FLEtBQUssQ0FBQ21DLEtBQUssRUFBRTZDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLElBQzNDL0QsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBb0IsUUFBQSxRQUNDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsYUFBS2tCLEtBQUssQ0FBQ3lCLFVBQVUsQ0FBTSxFQUMzQi9ELE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNnQixLQUFBLENBQUE0QixJQUFJO2NBQ0puQyxTQUFTLEVBQUMsZUFBZTtjQUN6Qm9DLEtBQUssRUFBRXBGLEtBQUssQ0FBQ21DLEtBQUssRUFBRTZDLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFQyxVQUFVO2NBQy9DRyxPQUFPLEVBQUUvQixLQUFBLENBQUFnQztZQUFpQixFQUN6QixDQUVILENBQ1EsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBbkUsTUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUE0RixRQUFBLEdBQUE1RixPQUFBO1VBRU87VUFBVSxTQUNSNkYsS0FBS0EsQ0FBQTtZQUNiLE9BQ0NyRSxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQTtjQUFPUyxTQUFTLEVBQUM7WUFBc0IsR0FDdEM3QixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDZ0QsUUFBQSxDQUFBL0IsZUFBZSxPQUFHLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBckMsTUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUF5QixHQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQThGLE1BQUEsR0FBQTlGLE9BQUE7VUFDQSxJQUFBNEIsUUFBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUErRixRQUFBLEdBQUEvRixPQUFBO1VBQ00sU0FBVWdHLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUFFM0YsS0FBSztjQUFFMEI7WUFBaUIsQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdkQsTUFBTUUsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLElBQUksQ0FBQzdCLEtBQUssQ0FBQ29DLFVBQVUsRUFBRTtjQUN0QlAsU0FBUyxDQUFDUSxPQUFPLEdBQUcsTUFBSztnQkFDeEJYLGlCQUFpQixDQUFDLElBQUksQ0FBQztjQUN4QixDQUFDO2NBQ0RHLFNBQVMsQ0FBQ1MsUUFBUSxHQUFHLElBQUk7O1lBRTFCLE9BQ0NuQixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFBcEIsTUFBQSxDQUFBYSxPQUFBLENBQUFvQixRQUFBLFFBQ0NqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbkIsR0FBQSxDQUFBd0UsYUFBYTtjQUFDNUMsU0FBUyxFQUFDO1lBQXFDLEdBQzdEN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ21ELFFBQUEsQ0FBQWpFLFdBQVcsT0FBRyxFQUNmTixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDa0QsTUFBQSxDQUFBRCxLQUFLLE9BQUcsQ0FDTSxDQUNkO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFyRSxNQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQWtHLEtBQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsT0FBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUE0QixRQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTRGLFFBQUEsR0FBQTVGLE9BQUE7VUFDTSxTQUFVb0csYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUV0QztZQUFLLENBQUUsR0FBRyxJQUFBbEMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUNwQyxPQUNDUixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQTtjQUFNUyxTQUFTLEVBQUM7WUFBYSxHQUM1QjdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNzRCxLQUFBLENBQUFHLGFBQWE7Y0FBQ0MsTUFBTSxFQUFFLENBQUM7Y0FBRWpELFNBQVMsRUFBQztZQUFtQixHQUN0RDdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNzRCxLQUFBLENBQUFLLEtBQUssUUFDTC9FLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUN1RCxPQUFBLENBQUEzQyxVQUFVLE9BQUcsRUFDZGhDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLGNBQ0NwQixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDZ0QsUUFBQSxDQUFBL0IsZUFBZSxPQUFHLENBQ2QsQ0FDQyxFQUNSckMsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ3NELEtBQUEsQ0FBQU0sSUFBSSxRQUNKaEYsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ3NELEtBQUEsQ0FBQU8sR0FBRyxRQUFFM0MsS0FBSyxDQUFDNEMsSUFBSSxDQUFDQyxJQUFJLENBQU8sRUFDNUJuRixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDc0QsS0FBQSxDQUFBTyxHQUFHLFFBQUUzQyxLQUFLLENBQUM0QyxJQUFJLENBQUNsQyxPQUFPLENBQU8sQ0FDekIsQ0FDUSxDQUNWO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFoRCxNQUFBLEdBQUF4QixPQUFBO1VBRU0sU0FBVTJGLGlCQUFpQkEsQ0FBQztZQUFFaUI7VUFBSSxDQUFFO1lBQ3pDLE9BQ0NwRixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUI3QixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxhQUFLZ0UsSUFBSSxDQUFDQyxJQUFJLENBQU0sRUFDcEJyRixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxlQUFPZ0UsSUFBSSxDQUFDRSxTQUFTLENBQVEsQ0FDeEI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBdEYsTUFBQSxHQUFBeEIsT0FBQTtVQWFPLE1BQU0rRyxhQUFhLEdBQUE5RixPQUFBLENBQUE4RixhQUFBLEdBQUd2RixNQUFBLENBQUFhLE9BQUssQ0FBQzJFLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU1oRixnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNUixNQUFBLENBQUFhLE9BQUssQ0FBQzRFLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUM5RixPQUFBLENBQUFlLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2R0RSxJQUFBTCxNQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBNEIsUUFBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUE2QixNQUFBLEdBQUE3QixPQUFBO1VBQ00sU0FBVW9ELFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUNMVSxLQUFLLEVBQUU7Z0JBQ042QyxJQUFJLEVBQUU7a0JBQUV4RCxLQUFLLEVBQUVXO2dCQUFLO2NBQUUsQ0FDdEI7Y0FDRHpEO1lBQUssQ0FDTCxHQUFHLElBQUF1QixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU0sQ0FBQ0csTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR1osTUFBQSxDQUFBYSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDOUMsSUFBQVQsTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ2xDLEtBQUssQ0FBQ21DLEtBQUssQ0FBQyxFQUFFLE1BQU1KLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztZQUMvRCxJQUFJLENBQUMvQixLQUFLLEVBQUVtQyxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRTlCLE1BQU07Y0FBRU0sS0FBSztjQUFFc0M7WUFBVyxDQUFFLEdBQUcvRSxLQUFLLENBQUNvQyxVQUFVLEdBQUdxQixLQUFLLENBQUNvRCxPQUFPLEdBQUdwRCxLQUFLLENBQUNxRCxTQUFTO1lBRWpGLE9BQ0MzRixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQTtjQUFLUyxTQUFTLEVBQUM7WUFBWSxHQUMxQjdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNqQixNQUFBLENBQUF5RixLQUFLO2NBQUNyRSxJQUFJLEVBQUMsTUFBTTtjQUFDTSxTQUFTLEVBQUM7WUFBRSxHQUM5QjdCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLGFBQUtFLEtBQUssQ0FBTSxFQUNoQnRCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLGVBQU93QyxXQUFXLENBQVEsQ0FDbkIsQ0FDSDtVQUVSOzs7Ozs7Ozs7OztVQ3pCQTs7VUFFQVYsTUFBQSxDQUFBMkMsY0FBQSxDQUFBcEcsT0FBQTtZQUNBcUcsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUE5RixNQUFBLEdBQUF4QixPQUFBO1VBRUEsSUFBQXlCLEdBQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBNkIsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE0QixRQUFBLEdBQUE1QixPQUFBO1VBR0EsSUFBQXVILE9BQUEsR0FBQXZILE9BQUE7VUFDQSxJQUFBK0YsUUFBQSxHQUFBL0YsT0FBQTtVQUNBLElBQUFtRyxPQUFBLEdBQUFuRyxPQUFBO1VBRU8sV0FWUDs7VUFVaUIsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSixLQUFLO1lBQUVPO1VBQUcsQ0FBcUM7WUFDOUQsTUFBTSxDQUFDNEcsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBakcsTUFBQSxDQUFBYyxRQUFRLEVBQUNqQyxLQUFLLENBQUNtSCxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDL0IsS0FBSyxDQUFDLEdBQUcsSUFBQWpFLE1BQUEsQ0FBQWMsUUFBUSxFQUFDakMsS0FBSyxDQUFDb0YsS0FBSyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQ2lDLGNBQWMsRUFBRTNGLGlCQUFpQixDQUFDLEdBQUdQLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU07Y0FBRXdCO1lBQUssQ0FBRSxHQUFHekQsS0FBSztZQUN2QixNQUFNc0gsVUFBVSxHQUFHLElBQUFKLE9BQUEsQ0FBQUssYUFBYSxHQUFFO1lBQ2xDLE1BQU1DLFlBQVksR0FBR2pILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsY0FBYyxDQUFDO1lBQ2pELE1BQU1tQixNQUFNLEdBQUdyQixHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxNQUFNZ0gsVUFBVSxHQUFHQSxDQUFBLEtBQU0vRixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7WUFFakQsSUFBQUYsTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ2xDLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJvSCxRQUFRLENBQUNwSCxLQUFLLENBQUNtSCxLQUFLLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1lBRUYsSUFBSUEsS0FBSyxJQUFJLENBQUNuSCxLQUFLLENBQUMwSCxLQUFLLEVBQUUsT0FBT3ZHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLHFCQUFlO1lBQ2pELElBQUksQ0FBQzRFLEtBQUssRUFBRSxPQUFPaEcsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ25CLEdBQUEsQ0FBQXVHLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUVqRCxNQUFNQyxZQUFZLEdBQUc7Y0FDcEJwRSxLQUFLO2NBQ0xtRSxRQUFRLEVBQUU1SCxLQUFLLENBQUM0SCxRQUFRO2NBQ3hCNUgsS0FBSztjQUNMNEIsTUFBTTtjQUNONEYsWUFBWTtjQUNacEMsS0FBSztjQUNMMUQsaUJBQWlCLENBQUM7YUFDbEI7WUFFRCxPQUNDUCxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFBcEIsTUFBQSxDQUFBYSxPQUFBLENBQUFvQixRQUFBLFFBQ0NqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDaEIsUUFBQSxDQUFBbUYsYUFBYSxDQUFDb0IsUUFBUTtjQUFDYixLQUFLLEVBQUVZO1lBQVksR0FDekMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNFLFFBQVEsQ0FBQ1QsVUFBVSxDQUFDLEdBQUduRyxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbUQsUUFBQSxDQUFBQyxjQUFjLE9BQUcsR0FBR3hFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUN1RCxPQUFBLENBQUFDLGFBQWEsT0FBRyxDQUNuRCxFQUN4QnNCLGNBQWMsSUFDZGxHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNuQixHQUFBLENBQUE0RyxVQUFVO2NBQ1YzSCxJQUFJLEVBQUVnSCxjQUFjO2NBQ3BCWSxPQUFPLEVBQUVSLFVBQVU7Y0FDbkI5RSxJQUFJLEVBQUMsYUFBYTtjQUNsQnVGLFdBQVcsRUFBRWxJLEtBQUssQ0FBQ2tJLFdBQVc7Y0FDOUJDLFNBQVMsRUFBRW5JLEtBQUssQ0FBQ21DLEtBQUssQ0FBQ2lHO1lBQVksRUFFcEMsQ0FDQztVQUVMIiwiaWdub3JlTGlzdCI6W119