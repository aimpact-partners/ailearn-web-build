System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/form", "@aimpact/chat@0.0.2/session", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@0.0.6/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@0.0.1/core", "@beyond-js/react-18-widgets@0.0.6/hooks", "@aimpact/chat@0.0.2/shared/components", "@aimpact/chat@0.0.2/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_pragmateUi0036Form) {
      dependency_4 = _pragmateUi0036Form;
    }, function (_aimpactChat002Session) {
      dependency_5 = _aimpactChat002Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets006Page) {
      dependency_7 = _beyondJsReact18Widgets006Page;
    }, function (_beyondJsReactive112Model) {
      dependency_8 = _beyondJsReactive112Model;
    }, function (_aimpactAilearnSdk001Core) {
      dependency_9 = _aimpactAilearnSdk001Core;
    }, function (_beyondJsReact18Widgets006Hooks) {
      dependency_10 = _beyondJsReact18Widgets006Hooks;
    }, function (_aimpactChat002SharedComponents) {
      dependency_11 = _aimpactChat002SharedComponents;
    }, function (_aimpactChat002SharedHooks) {
      dependency_12 = _aimpactChat002SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "0.0.1"], ["@aimpact/ailearn-api", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["firebase", "10.0.0"], ["highlight.js", "11.8.0"], ["firebase-admin", "11.10.1"], ["marked", "5.1.1"], ["marked-mangle", "1.1.0"], ["dompurify", "3.0.5"], ["marked-highlight", "2.0.1"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['pragmate-ui/form', dependency_4], ['@aimpact/chat/session', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/react-18-widgets/page', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classes-access",
        "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/access.widget",
        "is": "page",
        "route": "/classes/access",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.1/classes/access.widget');
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./components/empty-view
      ***************************************/
      ims.set('./components/empty-view', {
        hash: 2847858841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyView = void 0;
          var React = require("react");
          var _context = require("../views/_context");
          const EmptyView = () => {
            const {
              texts
            } = (0, _context.useShareContext)();
            return React.createElement("div", {
              className: 'access__class'
            }, React.createElement("img", {
              alt: 'Shared class',
              src: '/assets/shared-class.png'
            }), React.createElement("span", {
              className: 'access-details'
            }, React.createElement("h1", null, texts.empty.welcome), React.createElement("p", null, React.createElement("strong", null, texts.empty.info), React.createElement("br", null), texts.empty.action)));
          };
          exports.EmptyView = EmptyView;
        }
      });

      /************************************
      INTERNAL MODULE: ./components/landing
      ************************************/

      ims.set('./components/landing', {
        hash: 2282148627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ShareLanding;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _session = require("@aimpact/chat/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../views/_context");
          function ShareLanding() {
            const {
              texts,
              store
            } = (0, _context.useShareContext)();
            const {
              model
            } = store;
            const [isFetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const googleLogin = async () => {
              try {
                setFetching(true);
                const response = await _session.sessionWrapper.signInWithGoogle();
                if (!response.status) {
                  const {
                    error
                  } = response;
                  if (error === 'POPUP_CLOSED_BY_USER') {
                    setFetching(false);
                  } else {
                    setError('Error trying to login with Google');
                  }
                  return;
                }
                handleClick();
              } catch (e) {
                console.error(e.message);
              }
            };
            const handleClick = async () => {
              try {
                //change for the new api
                const response = await store.createChat(model.id, model.path);
                if (!response.status) {
                  console.error(response.message);
                  return;
                }
                const {
                  id: chatId
                } = response.chat;
                _routing.routing.pushState(`/chat/${chatId}`);
              } catch (e) {
                console.error(e.message);
              }
            };
            return _react.default.createElement("div", {
              className: 'access__class'
            }, _react.default.createElement("img", {
              alt: 'Shared class',
              src: '/assets/shared-class.png'
            }), _react.default.createElement("span", {
              className: 'access-details'
            }, _react.default.createElement("h1", null, texts.welcome), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Class ", model.curriculumObjective.toUpperCase(), " has been shared with you."), _react.default.createElement("br", null), texts.save), !_session.sessionWrapper.logged ? _react.default.createElement(_form.Button, {
              icon: 'google',
              onClick: googleLogin,
              loading: isFetching,
              label: 'Google Sign In'
            }) : _react.default.createElement(_form.Button, {
              variant: 'primary',
              onClick: handleClick,
              icon: 'save',
              label: texts.action
            })));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 518706050,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
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
            show() {
              this.#store.load(this.uri.qs.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 3387764945,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _session = require("@aimpact/chat/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #found;
            get found() {
              return this.#found;
            }
            load = async id => {
              if (this.#model && this.#model.id !== id) {
                this.#model = undefined;
              }
              this.#model = new _core.Class();
              this.#model.on('change', this.triggerEvent);
              const response = await this.#model.load({
                id
              });
              this.#found = !!response.curriculumObjective;
              this.ready = true;
            };
            createChat = async (kbId, name) => {
              const chat = new Chat();
              const userId = _session.sessionWrapper.userId;
              let specs = {
                userId,
                knowledgeBoxId: kbId,
                name: `[SAVED] ${name}`
              };
              await chat.publish(specs);
              return {
                status: true,
                chat
              };
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/_context
      ********************************/

      ims.set('./views/_context', {
        hash: 1760606212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useShareContext = exports.ShareContext = void 0;
          var React = require("react");
          const ShareContext = React.createContext({});
          exports.ShareContext = ShareContext;
          const useShareContext = () => React.useContext(ShareContext);
          exports.useShareContext = useShareContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 550448320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _emptyView = require("../components/empty-view");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./_context");
          var _landing = require("../components/landing");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return React.createElement(_components.PreloadScreen, null);
            const Control = !store.found ? _emptyView.EmptyView : _landing.default;
            return React.createElement(_context.ShareContext.Provider, {
              value: {
                texts,
                store
              }
            }, React.createElement(Control, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUHBFO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFTztVQUFVLFNBQ1J3QyxJQUFJLENBQUM7WUFBRXRDO1VBQUssQ0FBRTtZQUN0QixNQUFNLENBQUNrRCxLQUFLLEVBQUVZLFFBQVEsQ0FBQyxHQUFHeEUsS0FBSyxDQUFDYyxRQUFRLENBQUNKLEtBQUssQ0FBQ2tELEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNhLFVBQVUsRUFBRTFFLEtBQUssQ0FBQyxHQUFHLG9CQUFRLEVBQUMyRSxzQkFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEQsb0JBQVMsRUFBQyxDQUFDakUsS0FBSyxDQUFDLEVBQUUsTUFBTThELFFBQVEsQ0FBQzlELEtBQUssQ0FBQ2tELEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQ0EsS0FBSyxJQUFJLENBQUNhLFVBQVUsRUFBRSxPQUFPekUsb0JBQUM0RSx5QkFBYSxPQUFHO1lBRW5ELE1BQU1DLE9BQU8sR0FBRyxDQUFDbkUsS0FBSyxDQUFDNkMsS0FBSyxHQUFHekQsb0JBQVMsR0FBR1csZ0JBQVk7WUFDdkQsT0FDQ1Qsb0JBQUNvRSxxQkFBWSxDQUFDVSxRQUFRO2NBQUNDLEtBQUssRUFBRTtnQkFBRWhGLEtBQUs7Z0JBQUVXO2NBQUs7WUFBRSxHQUM3Q1Ysb0JBQUM2RSxPQUFPLE9BQUcsQ0FDWTtVQUUxQiIsIm5hbWVzIjpbIkVtcHR5VmlldyIsInRleHRzIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJlbXB0eSIsIndlbGNvbWUiLCJpbmZvIiwiYWN0aW9uIiwiZXhwb3J0cyIsIlNoYXJlTGFuZGluZyIsInN0b3JlIiwibW9kZWwiLCJpc0ZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJnb29nbGVMb2dpbiIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJjcmVhdGVDaGF0IiwiaWQiLCJwYXRoIiwiY2hhdElkIiwiY2hhdCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9VcHBlckNhc2UiLCJzYXZlIiwibG9nZ2VkIiwiQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJ2YXJpYW50IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInFzIiwiZ2V0IiwiUmVhY3RpdmVNb2RlbCIsImZvdW5kIiwidW5kZWZpbmVkIiwiQ2xhc3MiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlYWR5Iiwia2JJZCIsIm5hbWUiLCJDaGF0IiwidXNlcklkIiwic3BlY3MiLCJrbm93bGVkZ2VCb3hJZCIsInB1Ymxpc2giLCJTaGFyZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlU2hhcmVDb250ZXh0IiwidXNlQ29udGV4dCIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsIlByZWxvYWRTY3JlZW4iLCJDb250cm9sIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbXBvbmVudHMvZW1wdHktdmlldy50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy9sYW5kaW5nLnRzeCIsIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3N0b3JlL2luZGV4LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL19jb250ZXh0LnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=