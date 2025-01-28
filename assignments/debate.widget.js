System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/assignments/chat", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/widgets@1.1.1/controller", "@aimpact/ailearn-app@0.3.1/entities/assignments/activities/base", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/empty", "@aimpact/ailearn-app@0.3.1/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, ActivityContent, Aside, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp031AssignmentsChat) {
      dependency_3 = _aimpactAilearnApp031AssignmentsChat;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_4 = _beyondJsReact18Widgets112Page;
    }, function (_beyondJsWidgets111Controller) {
      dependency_5 = _beyondJsWidgets111Controller;
    }, function (_aimpactAilearnApp031EntitiesAssignmentsActivitiesBase) {
      dependency_6 = _aimpactAilearnApp031EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_8 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_9 = _aimpactChatSdk141ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_11 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_12 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_14 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_15 = _pragmateUi100Beta7Empty;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_16 = _aimpactAilearnApp031ComponentsHooks;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@aimpact/ailearn-app/assignments/chat', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/chat-sdk/chat-component.code', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/empty', dependency_15], ['@aimpact/ailearn-app/components/hooks', dependency_16]]);
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
        hash: 4139172534,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _chat = require("@aimpact/ailearn-app/assignments/chat");
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _chat.ChatView;
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
        hash: 2796176805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _beyond_context = require("beyond_context");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          class StoreManager extends _base.BaseStoreManager {
            isStore;
            get tabs() {
              return ['objectives'];
            }
            get data() {
              const materials = this.model.getMaterials();
              const specs = this.model.getSpecs();
              return {
                image: this.model.picture,
                type: this.model.type,
                description: this.model.description,
                ...materials,
                ...specs
              };
            }
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
        hash: 3164677193,
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
            } = store.model.getMaterials();
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
        hash: 1792859061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/ailearn-app/components/hooks");
          var _chat = require("@aimpact/ailearn-app/assignments/chat");
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
            if (ready && !store.found) return _react.default.createElement("app-missing-control", null);
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_chat.ChatView, {
              store: store,
              uri: uri
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2hhdCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkNoYXRWaWV3Iiwic2hvdyIsInRlc3RpbmciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJ2YXJzIiwiZXhwb3J0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsImlzU3RvcmUiLCJ0YWJzIiwiZGF0YSIsIm1hdGVyaWFscyIsIm1vZGVsIiwiZ2V0TWF0ZXJpYWxzIiwic3BlY3MiLCJnZXRTcGVjcyIsImltYWdlIiwicGljdHVyZSIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiX3JlYWN0IiwiX3VpIiwiX2NoYXRDb21wb25lbnQiLCJfZW1wdHkiLCJfY29udGV4dCIsIl9ob29rcyIsIkRlc2t0b3BDaGF0Iiwic2V0U2hvd0NvaW5zTW9kYWwiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY2hhdElkIiwiY2hhdFNwZWNzIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiaWNvbiIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpZCIsImVtcHR5IiwiRW1wdHlDaGF0IiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiX3dyYXBwZXIiLCJfaXRlbSIsIl9saXN0IiwiQWN0aXZpdHlDb250ZW50IiwidGV4dHMiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJtb2RlIiwic2V0TW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJlbnRpdHkiLCJBY3Rpdml0eUF1ZGlvIiwicmVzb3VyY2VzIiwib2JqZWN0aXZlcyIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIl9jb250ZW50IiwiQXNpZGUiLCJfYXNpZGUiLCJfZGVza3RvcCIsIkRlc2t0b3BDb250ZW50IiwiUGFnZUNvbnRhaW5lciIsIl90YWJzIiwiX21vYmlsZSIsIk1vYmlsZUNvbnRlbnQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiUGFuZXMiLCJUYWJzIiwiVGFiIiwiY2hhdCIsIml0ZW0iLCJuYW1lIiwib2JqZWN0aXZlIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9ob29rczIiLCJWaWV3IiwicmVhZHkiLCJzZXRSZWFkeSIsInNob3dDb2luc01vZGFsIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJhc3NpZ25tZW50SWQiLCJjbG9zZU1vZGFsIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy92aWV3cy9jb250ZW50L2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2NvbnRlbnQvZGVza3RvcC9hc2lkZS50c3giLCIvdHMvdmlld3MvY29udGVudC9kZXNrdG9wL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZW50L21vYmlsZS50c3giLCIvdHMvdmlld3MvY29udGVudC9vYmplY3RpdmVzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUYsS0FBQSxDQUFBRyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9ULEtBQUEsQ0FBQVUsUUFBUTtZQUNoQjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLE9BQU8sR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBTztjQUV6RCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLENBQ2YsSUFBSSxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUNqQyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsWUFBWSxD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