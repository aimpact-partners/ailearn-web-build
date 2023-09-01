System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.4/model", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast"], function (_export, _context2) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_6 = _beyondJsReactive114Model;
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
        hash: 4096340392,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useProfileContext = exports.ProfileContext = void 0;
          var _react = require("react");
          const ProfileContext = _react.default.createContext({});
          exports.ProfileContext = ProfileContext;
          const useProfileContext = () => _react.default.useContext(ProfileContext);
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
        hash: 2231028976,
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
        hash: 1545517639,
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
        hash: 3155427165,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageSelector = LanguageSelector;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function LanguageSelector() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [language, setLanguage] = _react.default.useState(store.language);
            (0, _hooks.useBinder)([store], () => setLanguage(store.language));
            const handleChange = event => {
              store.language = event.target.value;
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.language), _react.default.createElement("section", {
              className: 'language-selector'
            }, _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'en',
              name: 'language',
              value: 'en',
              label: 'English'
            }), _react.default.createElement(_form.Radio, {
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
        hash: 2231778911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ImagePicker;
          var _react = require("react");
          var _UserImage = require("./UserImage");
          function ImagePicker({
            userProps
          }) {
            const [img, setImg] = _react.default.useState(userProps.photoURL);
            return _react.default.createElement("section", {
              className: 'user-image-wrapper'
            }, img && _react.default.createElement(_UserImage.UserImage, {
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
        hash: 538976033,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserImage = UserImage;
          var _react = require("react");
          function UserImage({
            src,
            alt
          }) {
            return _react.default.createElement("img", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEU7Y0FBSzRDLFNBQVMsRUFBQyxZQUFZO2NBQUNtQixHQUFHLEVBQUVBLEdBQUc7Y0FBRUMsR0FBRyxFQUFFQTtZQUFHLEVBQUk7VUFDMUQiLCJuYW1lcyI6WyJQcm9maWxlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJyZWFkeSIsImluaXRpYWxWYWx1ZXMiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJzYXZlIiwiZmV0Y2hpbmciLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwiaXNVbnB1Ymxpc2hlZCIsInNldElzVW5wdWJsaXNoZWQiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkltYWdlUGlja2VyIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIkJ1dHRvbiIsImxvYWRpbmciLCJvbkNsaWNrIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIlJhZGlvIiwib25DaGFuZ2UiLCJjaGVja2VkIiwibmFtZSIsImxhYmVsIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRleHQudHMiLCJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9MYW5ndWFnZVNlbGVjdG9yLnRzeCIsInRzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4IiwidHMvdmlld3MvcHJvZmlsZS1pbWFnZS9Vc2VySW1hZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19