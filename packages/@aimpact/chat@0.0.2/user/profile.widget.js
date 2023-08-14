System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_4 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive112Model) {
      dependency_5 = _beyondJsReactive112Model;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_6 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_pragmateUi0036Form) {
      dependency_8 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Toast) {
      dependency_9 = _pragmateUi0036Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/react-18-widgets/hooks', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/toast', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-user-profile",
        "vspecifier": "@aimpact/chat@0.0.2/user/profile.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/user/profile.widget');
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
        hash: 3788948358,
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
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2667681059,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            constructor() {
              super();
              this.reactiveProps(['language']);
              this.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1016010073,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _ImagePicker = require("./profile-image/ImagePicker");
          var _context = require("../context");
          var _LanguageSelector = require("./language-selector/LanguageSelector");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!textsReady || !ready) return null;
            const userProps = _session.sessionWrapper.user.getProperties();
            const {
              displayName,
              email
            } = userProps;
            return React.createElement(_context.ProfileContext.Provider, {
              value: {
                store,
                texts
              }
            }, React.createElement("h1", null, texts.title), React.createElement("main", {
              className: 'profile-container'
            }, React.createElement("h2", null, texts.details), React.createElement(_ImagePicker.default, {
              userProps: userProps
            }), React.createElement("h4", null, displayName), React.createElement("h5", null, email), React.createElement(_LanguageSelector.LanguageSelector, null)));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/language-selector/LanguageSelector
      **********************************************************/

      ims.set('./views/language-selector/LanguageSelector', {
        hash: 1547239379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageSelector = LanguageSelector;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          function LanguageSelector() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJQcm9maWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlUHJvZmlsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInJlYWR5IiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX0ltYWdlUGlja2VyIiwiX2NvbnRleHQiLCJfTGFuZ3VhZ2VTZWxlY3RvciIsIl9zZXNzaW9uIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInRpdGxlIiwiY2xhc3NOYW1lIiwiZGV0YWlscyIsImRlZmF1bHQiLCJMYW5ndWFnZVNlbGVjdG9yIiwiX2Zvcm0iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImxhbmd1YWdlIiwidGFyZ2V0IiwiRnJhZ21lbnQiLCJSYWRpbyIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsIm5hbWUiLCJsYWJlbCIsIl9Vc2VySW1hZ2UiLCJJbWFnZVBpY2tlciIsImltZyIsInNldEltZyIsInBob3RvVVJMIiwiVXNlckltYWdlIiwic3JjIiwiYWx0Il0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250ZXh0LnRzIiwiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9zdG9yZS9pbmRleC50cyIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9MYW5ndWFnZVNlbGVjdG9yLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvVXNlckltYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFPTyxNQUFNQyxjQUFjLEdBQUdGLEtBQUssQ0FBQ0csYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFBQ0MsT0FBQSxDQUFBRixjQUFBLEdBQUFBLGNBQUE7VUFDbEUsTUFBTUcsaUJBQWlCLEdBQUdBLENBQUEsS0FBTUwsS0FBSyxDQUFDTSxVQUFVLENBQUNKLGNBQWMsQ0FBQztVQUFDRSxPQUFBLENBQUFDLGlCQUFBLEdBQUFBLGlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1J4RSxJQUFBRSxLQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFFTztVQUFVLE1BQ1hTLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaOztVQUNBWixPQUFBLENBQUFNLFVBQUEsR0FBQUEs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