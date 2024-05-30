System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.45/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, View, UserCard, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AssignmentItem: void 0,
    View: void 0,
    UserCard: void 0
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi011List) {
      dependency_8 = _pragmateUi011List;
    }, function (_pragmateUi011Link) {
      dependency_9 = _pragmateUi011Link;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_11 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/link', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/image', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/home.widget",
        "is": "page",
        "route": "/",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/home.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2747464748,
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
              this.#store.load();
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3864631672,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get items() {
              return this.#model.assignments;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #assignments;
            get assignments() {
              return this.#assignments;
            }
            #drafts;
            get drafts() {
              return this.#drafts;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load() {
              try {
                this.#model = _session.sessionWrapper;
                const {
                  status,
                  data
                } = await this.#model.user.getHome();
                if (!status) {
                  console.log('error');
                }
                this.#drafts = data.drafts;
                this.#assignments = data.assignments;
                super.ready = true;
                this.triggerEvent();
                globalThis.store = this;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/assigments/index
      ****************************************/

      ims.set('./views/assigments/index', {
        hash: 2383910485,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = Assignments;
          var _react = require("react");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          function Assignments() {
            const {
              store: {
                assignments,
                texts
              }
            } = (0, _context.useModuleContext)();
            const output = [...assignments, ...assignments, ...assignments];
            return _react.default.createElement("article", {
              className: "assigments-list"
            }, _react.default.createElement("header", {
              className: "page-section__header"
            }, _react.default.createElement("h3", null, texts.assignments.title)), _react.default.createElement(_list.List, {
              className: "entity__list two-columns",
              items: output,
              control: _item.AssignmentItem
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/assigments/item
      ***************************************/

      ims.set('./views/assigments/item', {
        hash: 1636261416,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          /*bundle*/
          function AssignmentItem({
            item
          }) {
            const {
              store: {
                assignments,
                texts
              }
            } = (0, _context.useModuleContext)();
            const {
              module,
              classroom,
              title,
              description,
              objective
            } = item;
            return _react.default.createElement("article", {
              className: "entity__item"
            }, _react.default.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "module",
              alt: title
            }), _react.default.createElement("section", {
              className: "entity__item-content"
            }, _react.default.createElement(_components.Link, {
              href: `/modules/management?id=${item.id}`
            }, _react.default.createElement("h4", null, module.title), _react.default.createElement("span", null, module.description))), _react.default.createElement("footer", {
              className: "entity__footer"
            }, _react.default.createElement("span", {
              className: "card-number__detail"
            }, texts.assignments.activities, ": ", module.activities.count)));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2793963965,
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
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 79994270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _userCard = require("./sections/user-card");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const {
              assignments
            } = store.model;
            const contextValue = {
              store,
              fetching: store.fetching,
              texts,
              items: assignments
            };
            const {
              user
            } = store;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("div", {
              className: "grid-container columns-8-4"
            }, _react.default.createElement("main", null, _react.default.createElement(_userCard.UserCard, null), _react.default.createElement("h1", null, texts.title)))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/sections/drafts
      ***************************************/

      ims.set('./views/sections/drafts', {
        hash: 2808383044,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function UserCard() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", {
              className: "user-profile"
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            }), _react.default.createElement("div", {
              className: "user-profile__content"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement("div", {
              className: "card__actions"
            }, _react.default.createElement("link", {
              href: "/me"
            }, texts.profile.edit))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/sections/modules
      ****************************************/

      ims.set('./views/sections/modules', {
        hash: 2808383044,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function UserCard() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", {
              className: "user-profile"
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            }), _react.default.createElement("div", {
              className: "user-profile__content"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement("div", {
              className: "card__actions"
            }, _react.default.createElement("link", {
              href: "/me"
            }, texts.profile.edit))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/sections/user-card
      ******************************************/

      ims.set('./views/sections/user-card', {
        hash: 3346926153,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          var _link = require("pragmate-ui/link");
          /*bundle*/
          function UserCard() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", {
              className: "user-profile"
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            }), _react.default.createElement("div", {
              className: "user-profile__content flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement("div", {
              className: "card__actions"
            }, _react.default.createElement(_link.Link, {
              href: "/users/me"
            }, texts.profile.edit))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/assigments/item",
        "from": "AssignmentItem",
        "name": "AssignmentItem"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/sections/drafts",
        "from": "UserCard",
        "name": "UserCard"
      }, {
        "im": "./views/sections/modules",
        "from": "UserCard",
        "name": "UserCard"
      }, {
        "im": "./views/sections/user-card",
        "from": "UserCard",
        "name": "UserCard"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'AssignmentItem') && _export("AssignmentItem", AssignmentItem = require ? require('./views/assigments/item').AssignmentItem : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/drafts').UserCard : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/modules').UserCard : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/user-card').UserCard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJkcmFmdHMiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0SG9tZSIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWxUaGlzIiwiZSIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfbGlzdCIsIl9pdGVtIiwiQXNzaWdubWVudHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwib3V0cHV0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkxpc3QiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfY29tcG9uZW50cyIsIl91aSIsIml0ZW0iLCJjbGFzc3Jvb20iLCJkZXNjcmlwdGlvbiIsIm9iamVjdGl2ZSIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImVudGl0eSIsImFsdCIsIkxpbmsiLCJocmVmIiwiaWQiLCJhY3Rpdml0aWVzIiwiY291bnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfdXNlckNhcmQiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVXNlckNhcmQiLCJfaW1hZ2UiLCJJbWFnZSIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInByb2ZpbGUiLCJlZGl0IiwiX2xpbmsiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL2RyYWZ0cy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvbW9kdWxlcy50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvdXNlci1jYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FB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QUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlQsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBTWtCLElBQUksRUFBQztZQUFLLEdBQUU5QyxLQUFLLENBQUNzRSxPQUFPLENBQUNDLElBQUksQ0FBUSxDQUN2QyxDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQW5ELE1BQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBMkMsUUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUF1RixNQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQThGLEtBQUEsR0FBQTlGLE9BQUE7VUFDTztVQUFVLFNBQ1JzRixRQUFRQSxDQUFBO1lBQ2hCLE1BQU07Y0FDTGpGLEtBQUssRUFBRTtnQkFBRXVCLElBQUk7Z0JBQUVOO2NBQUs7WUFBRSxDQUN0QixHQUFHLElBQUFxQixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLE9BQ0NMLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFjLEdBQ2hDVCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUMsTUFBQSxDQUFBQyxLQUFLO2NBQUNyQyxTQUFTLEVBQUMsbUJBQW1CO2NBQUNZLEdBQUcsRUFBRW5DLElBQUksQ0FBQzZELFFBQVE7Y0FBRXZCLEdBQUcsRUFBQztZQUFpQixFQUFHLEVBQ2pGeEIsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlELEdBQ3ZFVCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBUyxHQUN2QlQsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsYUFBS3RCLElBQUksQ0FBQzhELFdBQVcsQ0FBTSxFQUMzQmhELE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFJLEdBQUV2QixJQUFJLENBQUMrRCxLQUFLLENBQVEsQ0FDbkMsRUFDTmpELE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzdCVCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEMsS0FBQSxDQUFBM0IsSUFBSTtjQUFDQyxJQUFJLEVBQUM7WUFBVyxHQUFFOUMsS0FBSyxDQUFDc0UsT0FBTyxDQUFDQyxJQUFJLENBQVEsQ0FDN0MsQ0FDRCxDQUNHO1VBRVoiLCJpZ25vcmVMaXN0IjpbXX0=