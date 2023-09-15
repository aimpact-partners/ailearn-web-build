System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.5/model", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast"], function (_export, _context2) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_6 = _beyondJsReactive115Model;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJyZWFkeSIsImluaXRpYWxWYWx1ZXMiLCJnbG9iYWxUaGlzIiwic2F2ZSIsImZldGNoaW5nIiwid2luZG93Iiwic2V0VGltZW91dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9JbWFnZVBpY2tlciIsIl9jb250ZXh0IiwiX0xhbmd1YWdlU2VsZWN0b3IiLCJfc2Vzc2lvbiIsIl9jb21wb25lbnRzIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJpc1VucHVibGlzaGVkIiwic2V0SXNVbnB1Ymxpc2hlZCIsInVzZUJpbmRlciIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkxhbmd1YWdlU2VsZWN0b3IiLCJCdXR0b24iLCJsb2FkaW5nIiwib25DbGljayIsIl9mb3JtIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIkZyYWdtZW50IiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJuYW1lIiwibGFiZWwiLCJfVXNlckltYWdlIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSIsInNyYyIsImFsdCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL0xhbmd1YWdlU2VsZWN0b3IudHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvVXNlckltYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBT08sTUFBTUMsY0FBYyxHQUFHRixNQUFBLENBQUFHLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFBQ0MsT0FBQSxDQUFBSCxjQUFBLEdBQUFBLGNBQUE7VUFDbEUsTUFBTUksaUJBQWlCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBRyxPQUFLLENBQUNJLFVBQVUsQ0FBQ0wsY0FBYyxDQUFDO1VBQUNHLE9BQUEsQ0FBQUMsaUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUnhFLElBQUFFLEtBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUVPO1VBQVUsTUFDWFUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FD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