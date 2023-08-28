System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.3/model", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_4 = _beyondJsReact18Widgets101Base;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive113Model) {
      dependency_6 = _beyondJsReactive113Model;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_7 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_pragmateUi0036Components) {
      dependency_9 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Form) {
      dependency_10 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Toast) {
      dependency_11 = _pragmateUi0036Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/toast', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-user-profile",
        "vspecifier": "@aimpact/chat@1.0.1/user/profile.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/user/profile.widget');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 3975224814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useProfileContext = exports.ProfileContext = void 0;
          var React = require("react");
          const ProfileContext = React.createContext({});
          exports.ProfileContext = ProfileContext;
          const useProfileContext = () => React.useContext(ProfileContext);
          exports.useProfileContext = useProfileContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 522579532,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1038019307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          class StoreManager extends _model.ReactiveModel {
            properties = ['language'];
            constructor() {
              super();
              this.reactiveProps(['language']);
              this.language = _core.languages.current;
              this.ready = true;
              console.log(10, _core.languages.current);
              this.initialValues({
                language: _core.languages.current
              });
              globalThis.store = this;
            }
            save = () => {
              this.fetching = true;
              _core.languages.current = this.language;
              window.setTimeout(() => {
                _core.languages.current = this.language;
                this.initialValues({
                  language: _core.languages.current
                });
                this.fetching = false;
              }, 300);
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3017000987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _ImagePicker = require("./profile-image/ImagePicker");
          var _context = require("../context");
          var _LanguageSelector = require("./language-selector/LanguageSelector");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = _react.default.useState(store.ready);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [isUnpublished, setIsUnpublished] = _react.default.useState(store.isUnpublished);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setIsUnpublished(store.isUnpublished);
            });
            if (!textsReady || !ready) return null;
            const userProps = _session.sessionWrapper.user.getProperties();
            const {
              displayName,
              email
            } = userProps;
            return _react.default.createElement(_context.ProfileContext.Provider, {
              value: {
                store,
                texts
              }
            }, _react.default.createElement("h1", null, texts.title), _react.default.createElement("main", {
              className: 'profile-container'
            }, _react.default.createElement("header", null, _react.default.createElement("figure", null, _react.default.createElement(_ImagePicker.default, {
              userProps: userProps
            })), _react.default.createElement("h4", {
              className: 'h3'
            }, displayName)), _react.default.createElement("section", null), _react.default.createElement("div", {
              className: 'profile__item'
            }, _react.default.createElement("strong", null, "Email"), _react.default.createElement("span", null, email)), _react.default.createElement(_LanguageSelector.LanguageSelector, null), store.isUnpublished && _react.default.createElement(_components.Button, {
              loading: fetching,
              onClick: store.save
            }, texts.save)));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/language-selector/LanguageSelector
      **********************************************************/

      ims.set('./views/language-selector/LanguageSelector', {
        hash: 814853935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageSelector = LanguageSelector;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function LanguageSelector() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [language, setLanguage] = React.useState(store.language);
            (0, _hooks.useBinder)([store], () => setLanguage(store.language));
            const handleChange = event => {
              store.language = event.target.value;
            };
            return React.createElement(React.Fragment, null, React.createElement("h4", null, texts.language), React.createElement("section", {
              className: 'language-selector'
            }, React.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'en',
              name: 'language',
              value: 'en',
              label: 'English'
            }), React.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'es',
              name: 'language',
              value: 'es',
              label: 'Spanish'
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/profile-image/ImagePicker
      *************************************************/

      ims.set('./views/profile-image/ImagePicker', {
        hash: 3767334294,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ImagePicker;
          var React = require("react");
          var _UserImage = require("./UserImage");
          function ImagePicker({
            userProps
          }) {
            const [img, setImg] = React.useState(userProps.photoURL);
            return React.createElement("section", {
              className: 'user-image-wrapper'
            }, img && React.createElement(_UserImage.UserImage, {
              src: img ?? '',
              alt: userProps.displayName
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/profile-image/UserImage
      ***********************************************/

      ims.set('./views/profile-image/UserImage', {
        hash: 1821483712,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserImage = UserImage;
          var React = require("react");
          function UserImage({
            src,
            alt
          }) {
            return React.createElement("img", {
              className: 'user-image',
              src: src,
              alt: alt
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUVNLFNBQVV1QixTQUFTLENBQUM7WUFBRUMsR0FBRztZQUFFQztVQUFHLENBQUU7WUFDckMsT0FBT2xFO2NBQUs4QyxTQUFTLEVBQUMsWUFBWTtjQUFDbUIsR0FBRyxFQUFFQSxHQUFHO2NBQUVDLEdBQUcsRUFBRUE7WUFBRyxFQUFJO1VBQzFEIiwibmFtZXMiOlsiUHJvZmlsZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlUHJvZmlsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwicmVhZHkiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbFZhbHVlcyIsImdsb2JhbFRoaXMiLCJzdG9yZSIsInNhdmUiLCJmZXRjaGluZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJpc1VucHVibGlzaGVkIiwic2V0SXNVbnB1Ymxpc2hlZCIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInRpdGxlIiwiY2xhc3NOYW1lIiwiSW1hZ2VQaWNrZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiQnV0dG9uIiwibG9hZGluZyIsIm9uQ2xpY2siLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJuYW1lIiwibGFiZWwiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50cyIsInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL0xhbmd1YWdlU2VsZWN0b3IudHN4IiwidHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCJ0cy92aWV3cy9wcm9maWxlLWltYWdlL1VzZXJJbWFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=