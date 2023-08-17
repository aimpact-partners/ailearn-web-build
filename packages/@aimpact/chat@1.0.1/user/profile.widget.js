System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.3/model", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/toast"], function (_export, _context2) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_5 = _beyondJsReactive113Model;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/react-18-widgets/hooks', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/toast', dependency_9]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtjQUNoQ0ssSUFBSSxFQUFDLFVBQVU7Y0FDZmIsS0FBSyxFQUFDLElBQUk7Y0FDVmMsS0FBSyxFQUFDO1lBQVMsRUFDZCxFQUNGM0Msb0JBQUN1QyxXQUFLO2NBQ0xDLFFBQVEsRUFBRUwsWUFBWTtjQUN0Qk0sT0FBTyxFQUFFMUIsS0FBSyxDQUFDc0IsUUFBUSxLQUFLLElBQUk7Y0FDaENLLElBQUksRUFBQyxVQUFVO2NBQ2ZiLEtBQUssRUFBQyxJQUFJO2NBQ1ZjLEtBQUssRUFBQztZQUFTLEVBQ2QsQ0FDTyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBO1VBQ0E7VUFHYyxTQUFVVixXQUFXLENBQUM7WUFBRVg7VUFBUyxDQUFFO1lBQ2hELE1BQU0sQ0FBQ3NCLEdBQUcsRUFBRUMsTUFBTSxDQUFDLEdBQUc3QyxLQUFLLENBQUNxQixRQUFRLENBQVNDLFNBQVMsQ0FBQ3dCLFFBQVEsQ0FBQztZQUVoRSxPQUNDOUM7Y0FBUytCLFNBQVMsRUFBQztZQUFvQixHQUNyQ2EsR0FBRyxJQUFJNUMsb0JBQUMrQyxvQkFBUztjQUFDQyxHQUFHLEVBQUVKLEdBQUcsSUFBSSxFQUFFO2NBQUVLLEdBQUcsRUFBRTNCLFNBQVMsQ0FBQ0k7WUFBVyxFQUFJLENBQ3hEO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkE7VUFFTSxTQUFVcUIsU0FBUyxDQUFDO1lBQUVDLEdBQUc7WUFBRUM7VUFBRyxDQUFFO1lBQ3JDLE9BQU9qRDtjQUFLK0IsU0FBUyxFQUFDLFlBQVk7Y0FBQ2lCLEdBQUcsRUFBRUEsR0FBRztjQUFFQyxHQUFHLEVBQUVBO1lBQUcsRUFBSTtVQUMxRCIsIm5hbWVzIjpbIlByb2ZpbGVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZVByb2ZpbGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInJlYWR5Iiwic3RvcmUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJQcm92aWRlciIsInZhbHVlIiwidGl0bGUiLCJjbGFzc05hbWUiLCJkZXRhaWxzIiwiSW1hZ2VQaWNrZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJsYW5ndWFnZSIsInRhcmdldCIsIlJhZGlvIiwib25DaGFuZ2UiLCJjaGVja2VkIiwibmFtZSIsImxhYmVsIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250ZXh0LnRzIiwid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL0xhbmd1YWdlU2VsZWN0b3IudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvVXNlckltYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==