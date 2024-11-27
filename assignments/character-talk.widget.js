System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/wrapper", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.2.10/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, ActivityContent, Aside, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_10 = _pragmateUi100Beta6Collapsible;
    }, function (_pragmateUi100Beta6List) {
      dependency_11 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_12 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_13 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp0210ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp0210ComponentsHooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/character-talk",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['pragmate-ui/collapsible', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/assignments/character-talk.widget');
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
        hash: 4262233773,
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
        hash: 3673219687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _list = require("pragmate-ui/list");
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
            }), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", null, store.model.description)), !!store.model?.resources.specs?.objectives && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.objectives), _react.default.createElement(_list.List, {
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
        hash: 1656254542,
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
        hash: 399617847,
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
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_mobile.MobileChat, null), _react.default.createElement(_content.ActivityContent, null)), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.chat), _react.default.createElement(_tabs.Tab, null, texts.tabs.content))));
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
        hash: 598048447,
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
        hash: 4063798611,
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
            const {
              texts
            } = store;
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const screenSize = (0, _hooks2.useMediaQuery)();
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              texts: store.texts,
              fetching: store.fetching,
              store,
              chatId,
              assignmentId,
              items,
              setShowCoinsModal
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, screenSize === 'md' || screenSize === 'lg' ? _react.default.createElement(_desktop.DesktopContent, null) : _react.default.createElement(_mobile.MobileContent, null)), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              type: "interactive",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJfbGlzdCIsIl9pdGVtIiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsImRlc2NyaXB0aW9uIiwicmVzb3VyY2VzIiwic3BlY3MiLCJvYmplY3RpdmVzIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkFjdGl2aXR5T2JqZWN0aXZlIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiY2hhdCIsIml0ZW0iLCJuYW1lIiwib2JqZWN0aXZlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJhc3NpZ25tZW50SWQiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0EsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQzNCO1lBQ0Y7O1VBQ0FDLE9BQUEsQ0FBQVos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System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.3.0/wrapper", "pragmate-ui@1.0.0-beta.6/collapsible", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/ailearn-app@0.2.10/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, ActivityContent, Aside, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_10 = _pragmateUi100Beta6Collapsible;
    }, function (_pragmateUi100Beta6List) {
      dependency_11 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_12 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_13 = _pragmateUi100Beta6Empty;
    }, function (_aimpactAilearnApp0210ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp0210ComponentsHooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/character-talk",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['pragmate-ui/collapsible', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/empty', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/assignments/character-talk.widget');
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
        hash: 4262233773,
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
        hash: 3673219687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _list = require("pragmate-ui/list");
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
            }), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", null, store.model.description)), !!store.model?.resources.specs?.objectives && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.objectives), _react.default.createElement(_list.List, {
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
        hash: 1656254542,
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
        hash: 399617847,
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
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_mobile.MobileChat, null), _react.default.createElement(_content.ActivityContent, null)), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.chat), _react.default.createElement(_tabs.Tab, null, texts.tabs.content))));
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
        hash: 598048447,
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
        hash: 4063798611,
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
            const {
              texts
            } = store;
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const screenSize = (0, _hooks2.useMediaQuery)();
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              texts: store.texts,
              fetching: store.fetching,
              store,
              chatId,
              assignmentId,
              items,
              setShowCoinsModal
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, screenSize === 'md' || screenSize === 'lg' ? _react.default.createElement(_desktop.DesktopContent, null) : _react.default.createElement(_mobile.MobileContent, null)), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              type: "interactive",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJfbGlzdCIsIl9pdGVtIiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtYXRlcmlhbHMiLCJtb2RlIiwic2V0TW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsImRlc2NyaXB0aW9uIiwicmVzb3VyY2VzIiwic3BlY3MiLCJvYmplY3RpdmVzIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkFjdGl2aXR5T2JqZWN0aXZlIiwiX2NvbnRlbnQiLCJBc2lkZSIsIl9hc2lkZSIsIl9kZXNrdG9wIiwiRGVza3RvcENvbnRlbnQiLCJQYWdlQ29udGFpbmVyIiwiX3RhYnMiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIlRhYnMiLCJUYWIiLCJ0YWJzIiwiY2hhdCIsIml0ZW0iLCJuYW1lIiwib2JqZWN0aXZlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJyZWFkeSIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJhc3NpZ25tZW50SWQiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXQvZGVza3RvcC50c3giLCIvdHMvdmlld3MvY2hhdC9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvY29udGVudC50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2Rlc2t0b3AvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0EsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQzNCO1lBQ0Y7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCRCxJQUFBYSxlQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLEtBQUEsR0FBQWpCLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFVLEtBQUEsQ0FBQUMsZ0JBQWdCO1lBY2pEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDSCxlQUFBLENBQUFJLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3hCOztVQUNBTixPQUFBLENBQUFSLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkQsSUFBQWUsTUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixHQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLGNBQUEsR0FBQXhCLE9BQUE7VUFDQSxJQUFBeUIsTUFBQSxHQUFBekIsT0FBQTtVQUNBLElBQUEwQixRQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQTJCLE1BQUEsR0FBQTNCLE9BQUE7VUFDTSxTQUFVNEIsV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUV2QixLQUFLO2NBQUV3QjtZQUFpQixDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUN2RCxNQUFNQyxNQUFNLEdBQUcxQixLQUFLLENBQUMwQixNQUFNO1lBQzNCLE1BQU1DLFNBQVMsR0FBaUQsRUFBRTtZQUNsRSxNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdaLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzlDLElBQUFULE1BQUEsQ0FBQVUsU0FBUyxFQUFDLENBQUNoQyxLQUFLLENBQUNpQyxLQUFLLENBQUMsRUFBRSxNQUFNSixTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUM7WUFFL0QsSUFBSSxDQUFDN0IsS0FBSyxDQUFDa0MsVUFBVSxFQUFFO2NBQ3RCUCxTQUFTLENBQUNRLE9BQU8sR0FBRyxNQUFLO2dCQUN4QlgsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2NBQ3hCLENBQUM7Y0FDREcsU0FBUyxDQUFDUyxRQUFRLEdBQUcsSUFBSTs7WUFFMUIsT0FDQ25CLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q3JCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNsQixjQUFBLENBQUFvQixtQkFBbUI7Y0FBQ0MsRUFBRSxFQUFFZCxNQUFNO2NBQUVlLEtBQUssRUFBRXJCLE1BQUEsQ0FBQXNCLFNBQVM7Y0FBRUMsSUFBSSxFQUFDO1lBQThCLEdBQ3JGMUIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JyQixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbkIsR0FBQSxDQUFBMEIsY0FBYztjQUFDQyxLQUFLLEVBQUU3QyxLQUFLLENBQUNpQyxLQUFLLENBQUNZLEtBQUs7Y0FBRUYsSUFBSSxFQUFFM0MsS0FBSyxDQUFDaUMsS0FBSyxDQUFDYSxJQUFJO2NBQUVBLElBQUksRUFBRTlDLEtBQUssQ0FBQ2lDLEtBQUssQ0FBQ2E7WUFBSSxFQUFJLEVBQzVGN0IsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CckIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2xCLGNBQUEsQ0FBQTRCLGVBQWUsT0FBRyxDQUNkLEVBQ045QixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0MsR0FDN0RyQixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbEIsY0FBQSxDQUFBNkIsZUFBZTtjQUFBLEdBQUtyQjtZQUFTLEVBQUksQ0FDN0IsQ0FDRCxDQUNlLENBQ2pCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBLElBQUFWLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsR0FBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixjQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlCLE1BQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBMEIsUUFBQSxHQUFBMUIsT0FBQTtVQUVNLFNBQVVzRCxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRWpELEtBQUs7Y0FBRXdCO1lBQWlCLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBRzFCLEtBQUssQ0FBQzBCLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLElBQUksQ0FBQzNCLEtBQUssQ0FBQ2tDLFVBQVUsRUFBRTtjQUN0QlAsU0FBUyxDQUFDUSxPQUFPLEdBQUcsTUFBSztnQkFDeEJYLGlCQUFpQixDQUFDLElBQUksQ0FBQztjQUN4QixDQUFDO2NBQ0RHLFNBQVMsQ0FBQ1MsUUFBUSxHQUFHLElBQUk7O1lBRTFCLE9BQ0NuQixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFBcEIsTUFBQSxDQUFBYSxPQUFBLENBQUFvQixRQUFBLFFBQ0NqQyxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbEIsY0FBQSxDQUFBb0IsbUJBQW1CO2NBQUNDLEVBQUUsRUFBRWQsTUFBTTtjQUFFZSxLQUFLLEVBQUVyQixNQUFBLENBQUFzQixTQUFTO2NBQUVDLElBQUksRUFBQztZQUE4QixHQUNyRjFCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQnJCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNuQixHQUFBLENBQUEwQixjQUFjO2NBQUNDLEtBQUssRUFBRTdDLEtBQUssQ0FBQ2lDLEtBQUssQ0FBQ1ksS0FBSztjQUFFRixJQUFJLEVBQUUzQyxLQUFLLENBQUNpQyxLQUFLLENBQUNhLElBQUk7Y0FBRUEsSUFBSSxFQUFFOUMsS0FBSyxDQUFDaUMsS0FBSyxDQUFDYTtZQUFJLEVBQUksRUFDNUY3QixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbEIsY0FBQSxDQUFBNEIsZUFBZSxPQUFHLENBQ2QsRUFDTjlCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUErQyxHQUM3RHJCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNsQixjQUFBLENBQUE2QixlQUFlO2NBQUEsR0FBS3JCO1lBQVMsRUFBSSxDQUM3QixDQUNlLENBQ3BCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUFULEdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0QsUUFBQSxHQUFBeEQsT0FBQTtVQUVBLElBQUF5RCxLQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQXNCLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBMEIsUUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEwRCxLQUFBLEdBQUExRCxPQUFBO1VBV087VUFBVSxTQUNSMkQsZUFBZUEsQ0FBQTtZQUN2QixNQUFNO2NBQUVDLEtBQUs7Y0FBRXZEO1lBQUssQ0FBRSxHQUFHLElBQUFxQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNDLE1BQU07Y0FBRStCLE9BQU87Y0FBRUMsUUFBUTtjQUFFQyxNQUFNO2NBQUVDO1lBQVMsQ0FBRSxHQUFHM0QsS0FBSyxDQUFDaUMsS0FBSyxDQUFDMkIsU0FBUztZQUN0RSxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUc3QyxNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDb0IsUUFBQSxDQUFBWSxVQUFVLENBQUNDLGFBQWEsSUFBSSxRQUFRLENBQUM7WUFDNUUsTUFBTUMsT0FBTyxHQUFHSixJQUFJLEtBQUssUUFBUSxHQUFHTCxPQUFPLEdBQUdDLFFBQVEsSUFBSUEsUUFBUTtZQUNsRSxNQUFNUyxJQUFJLEdBQUcsQ0FBQ1IsTUFBTSxJQUFJUyxNQUFNLENBQUNELElBQUksQ0FBQ1IsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNsRCxNQUFNVSxHQUFHLEdBQUduRCxNQUFBLENBQUFhLE9BQUssQ0FBQ3VDLE1BQU0sQ0FBYyxJQUFJLENBQUM7WUFFM0MsSUFBSUMsV0FBVyxHQUFHSixJQUFJLENBQUNLLE1BQU07WUFDN0IsTUFBTUMsUUFBUSxHQUFHWCxJQUFJLElBQUksUUFBUSxJQUFJSCxNQUFNLEVBQUVELFFBQVEsRUFBRWdCLEdBQUcsR0FBR2YsTUFBTSxDQUFDRCxRQUFRLEVBQUVnQixHQUFHLEdBQUdmLE1BQU0sRUFBRUYsT0FBTyxFQUFFaUIsR0FBRztZQUV4RyxPQUNDeEQsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDckIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ25CLEdBQUEsQ0FBQXdELFdBQVc7Y0FDWHBDLFNBQVMsRUFBQyxvQkFBb0I7Y0FDOUJxQyxHQUFHLEVBQUUzRSxLQUFLLENBQUNpQyxLQUFLLENBQUMyQyxPQUFPO2NBQ3hCOUIsSUFBSSxFQUFFOUMsS0FBSyxDQUFDaUMsS0FBSyxDQUFDYSxJQUFJO2NBQ3RCK0IsTUFBTSxFQUFDO1lBQVUsRUFDaEIsRUFFRjVELE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFlLEdBQ2hDLENBQUMsQ0FBQ2dDLFdBQVcsSUFBSXJELE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNuQixHQUFBLENBQUE0RCxhQUFhO2NBQUNILEdBQUcsRUFBRUg7WUFBUSxFQUFJLEVBQ2xEdkQsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBb0IsUUFBQSxRQUNDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsWUFBSXJDLEtBQUssQ0FBQ2lDLEtBQUssQ0FBQzhDLFdBQVcsQ0FBSyxDQUM5QixFQUNGLENBQUMsQ0FBQy9FLEtBQUssQ0FBQ2lDLEtBQUssRUFBRStDLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFQyxVQUFVLElBQzFDakUsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBb0IsUUFBQSxRQUNDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsYUFBS2tCLEtBQUssQ0FBQzJCLFVBQVUsQ0FBTSxFQUMzQmpFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNlLEtBQUEsQ0FBQStCLElBQUk7Y0FDSjdDLFNBQVMsRUFBQyxlQUFlO2NBQ3pCOEMsS0FBSyxFQUFFcEYsS0FBSyxDQUFDaUMsS0FBSyxFQUFFK0MsU0FBUyxDQUFDQyxLQUFLLEVBQUVDLFVBQVU7Y0FDL0NHLE9BQU8sRUFBRWhDLEtBQUEsQ0FBQWlDO1lBQWlCLEVBQ3pCLENBRUgsQ0FDUSxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERBLElBQUFyRSxNQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQTRGLFFBQUEsR0FBQTVGLE9BQUE7VUFFTztVQUFVLFNBQ1I2RixLQUFLQSxDQUFBO1lBQ2IsT0FDQ3ZFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBO2NBQU9DLFNBQVMsRUFBQztZQUFzQixHQUN0Q3JCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNrRCxRQUFBLENBQUFqQyxlQUFlLE9BQUcsQ0FDWjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBLElBQUFyQyxNQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLEdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBOEYsTUFBQSxHQUFBOUYsT0FBQTtVQUVBLElBQUErRixRQUFBLEdBQUEvRixPQUFBO1VBQ00sU0FBVWdHLGNBQWNBLENBQUE7WUFDN0IsT0FDQzFFLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUFwQixNQUFBLENBQUFhLE9BQUEsQ0FBQW9CLFFBQUEsUUFDQ2pDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNuQixHQUFBLENBQUEwRSxhQUFhO2NBQUN0RCxTQUFTLEVBQUM7WUFBcUMsR0FDN0RyQixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDcUQsUUFBQSxDQUFBbkUsV0FBVyxPQUFHLEVBQ2ZOLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNvRCxNQUFBLENBQUFELEtBQUssT0FBRyxDQUNNLENBQ2Q7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBdkUsTUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUFrRyxLQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLE9BQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBMEIsUUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUE0RixRQUFBLEdBQUE1RixPQUFBO1VBQ00sU0FBVW9HLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFeEM7WUFBSyxDQUFFLEdBQUcsSUFBQWxDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDcEMsT0FDQ1IsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWEsR0FDNUJyQixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDd0QsS0FBQSxDQUFBRyxhQUFhO2NBQUNDLE1BQU0sRUFBRTtZQUFDLEdBQ3ZCaEYsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ3dELEtBQUEsQ0FBQUssS0FBSyxRQUNMakYsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ3lELE9BQUEsQ0FBQTdDLFVBQVUsT0FBRyxFQUNkaEMsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2tELFFBQUEsQ0FBQWpDLGVBQWUsT0FBRyxDQUNaLEVBQ1JyQyxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDd0QsS0FBQSxDQUFBTSxJQUFJLFFBQ0psRixNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDd0QsS0FBQSxDQUFBTyxHQUFHLFFBQUU3QyxLQUFLLENBQUM4QyxJQUFJLENBQUNDLElBQUksQ0FBTyxFQUM1QnJGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUN3RCxLQUFBLENBQUFPLEdBQUcsUUFBRTdDLEtBQUssQ0FBQzhDLElBQUksQ0FBQ3BDLE9BQU8sQ0FBTyxDQUN6QixDQUNRLENBQ1Y7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQWhELE1BQUEsR0FBQXRCLE9BQUE7VUFFTSxTQUFVMkYsaUJBQWlCQSxDQUFDO1lBQUVpQjtVQUFJLENBQUU7WUFDekMsT0FDQ3RGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFnQixHQUM5QnJCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLGFBQUtrRSxJQUFJLENBQUNDLElBQUksQ0FBTSxFQUNwQnZGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLGVBQU9rRSxJQUFJLENBQUNFLFNBQVMsQ0FBUSxDQUN4QjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUF4RixNQUFBLEdBQUF0QixPQUFBO1VBYU8sTUFBTStHLGFBQWEsR0FBQWhHLE9BQUEsQ0FBQWdHLGFBQUEsR0FBR3pGLE1BQUEsQ0FBQWEsT0FBSyxDQUFDNkUsYUFBYSxDQUFDLEVBQW9CLENBQUM7VUFDL0QsTUFBTWxGLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1SLE1BQUEsQ0FBQWEsT0FBSyxDQUFDOEUsVUFBVSxDQUFDRixhQUFhLENBQUM7VUFBQ2hHLE9BQUEsQ0FBQWUsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZHRFLElBQUFMLE1BQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBc0IsTUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUEwQixRQUFBLEdBQUExQixPQUFBO1VBQ0EsSUFBQTJCLE1BQUEsR0FBQTNCLE9BQUE7VUFDTSxTQUFVK0MsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQ0xhLEtBQUssRUFBRTtnQkFDTitDLElBQUksRUFBRTtrQkFBRTdELEtBQUssRUFBRWM7Z0JBQUs7Y0FBRSxDQUN0QjtjQUNEdkQ7WUFBSyxDQUNMLEdBQUcsSUFBQXFCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTSxDQUFDRyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHWixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxJQUFBVCxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDaEMsS0FBSyxDQUFDaUMsS0FBSyxDQUFDLEVBQUUsTUFBTUosU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDO1lBQy9ELElBQUksQ0FBQzdCLEtBQUssRUFBRWlDLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFOUIsTUFBTTtjQUFFWSxLQUFLO2NBQUVrQztZQUFXLENBQUUsR0FBRy9FLEtBQUssQ0FBQ2tDLFVBQVUsR0FBR3FCLEtBQUssQ0FBQ3NELE9BQU8sR0FBR3RELEtBQUssQ0FBQ3VELFNBQVM7WUFFakYsT0FDQzdGLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFhLEdBQzNCckIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2pCLE1BQUEsQ0FBQTJGLEtBQUs7Y0FBQ3BFLElBQUksRUFBQyxNQUFNO2NBQUNMLFNBQVMsRUFBQztZQUFFLEdBQzlCckIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsYUFBS1EsS0FBSyxDQUFNLEVBQ2hCNUIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsZUFBTzBDLFdBQVcsQ0FBUSxDQUNuQixDQUNIO1VBRVI7Ozs7Ozs7Ozs7O1VDekJBOztVQUVBWixNQUFBLENBQUE2QyxjQUFBLENBQUF0RyxPQUFBO1lBQ0F1RyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQWhHLE1BQUEsR0FBQXRCLE9BQUE7VUFFQSxJQUFBdUIsR0FBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUEyQixNQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTBCLFFBQUEsR0FBQTFCLE9BQUE7VUFFQSxJQUFBdUgsT0FBQSxHQUFBdkgsT0FBQTtVQUNBLElBQUErRixRQUFBLEdBQUEvRixPQUFBO1VBQ0EsSUFBQW1HLE9BQUEsR0FBQW5HLE9BQUE7VUFFTyxXQVRQOztVQVNpQixTQUNSUyxJQUFJQSxDQUFDO1lBQUVKLEtBQUs7WUFBRU87VUFBRyxDQUFxQztZQUM5RCxNQUFNLENBQUM0RyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHLElBQUFuRyxNQUFBLENBQUFjLFFBQVEsRUFBQy9CLEtBQUssQ0FBQ21ILEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUMvQixLQUFLLENBQUMsR0FBRyxJQUFBbkUsTUFBQSxDQUFBYyxRQUFRLEVBQUMvQixLQUFLLENBQUNvRixLQUFLLENBQUM7WUFDckMsTUFBTTtjQUFFN0I7WUFBSyxDQUFFLEdBQUd2RCxLQUFLO1lBQ3ZCLE1BQU0sQ0FBQ3FILGNBQWMsRUFBRTdGLGlCQUFpQixDQUFDLEdBQUdQLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU11RixZQUFZLEdBQUcvRyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNqRCxNQUFNaUIsTUFBTSxHQUFHbkIsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDckMsTUFBTThHLFVBQVUsR0FBRyxJQUFBTCxPQUFBLENBQUFNLGFBQWEsR0FBRTtZQUNsQyxNQUFNQyxVQUFVLEdBQUdBLENBQUEsS0FBTWpHLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUVqRCxJQUFBRixNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDaEMsS0FBSyxDQUFDLEVBQUUsTUFBTW9ILFFBQVEsQ0FBQ3BILEtBQUssQ0FBQ21ILEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUlBLEtBQUssSUFBSSxDQUFDbkgsS0FBSyxDQUFDMEgsS0FBSyxFQUFFLE9BQU96RyxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxxQkFBZTtZQUNqRCxJQUFJLENBQUM4RSxLQUFLLEVBQUUsT0FBT2xHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNuQixHQUFBLENBQUF5RyxVQUFVO2NBQUNDLFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFFakQsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCdEUsS0FBSyxFQUFFdkQsS0FBSyxDQUFDdUQsS0FBSztjQUNsQnFFLFFBQVEsRUFBRTVILEtBQUssQ0FBQzRILFFBQVE7Y0FDeEI1SCxLQUFLO2NBQ0wwQixNQUFNO2NBQ040RixZQUFZO2NBQ1psQyxLQUFLO2NBQ0w1RDthQUNBO1lBRUQsT0FDQ1AsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBb0IsUUFBQSxRQUNDakMsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2hCLFFBQUEsQ0FBQXFGLGFBQWEsQ0FBQ29CLFFBQVE7Y0FBQ2IsS0FBSyxFQUFFWTtZQUFZLEdBQ3pDTixVQUFVLEtBQUssSUFBSSxJQUFJQSxVQUFVLEtBQUssSUFBSSxHQUFHdEcsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ3FELFFBQUEsQ0FBQUMsY0FBYyxPQUFHLEdBQUcxRSxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDeUQsT0FBQSxDQUFBQyxhQUFhLE9BQUcsQ0FDNUQsRUFDeEJzQixjQUFjLElBQ2RwRyxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQSxDQUFDbkIsR0FBQSxDQUFBNkcsVUFBVTtjQUNWMUgsSUFBSSxFQUFFZ0gsY0FBYztjQUNwQnZFLElBQUksRUFBQyxhQUFhO2NBQ2xCa0YsT0FBTyxFQUFFUCxVQUFVO2NBQ25CUSxXQUFXLEVBQUVqSSxLQUFLLENBQUNpSSxXQUFXO2NBQzlCQyxTQUFTLEVBQUVsSSxLQUFLLENBQUNpQyxLQUFLLENBQUNrRztZQUFZLEVBRXBDLENBQ0M7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==