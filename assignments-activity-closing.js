System.register(["@beyond-js/widgets@1.1.3/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.1.0/data/models", "@beyond-js/reactive@1.2.0-beta.01/model", "@beyond-js/react-18-widgets@1.1.4/hooks", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.3.32/components/ui"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets113Render) {
      dependency_0 = _beyondJsWidgets113Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnSdk110DataModels) {
      dependency_4 = _aimpactAilearnSdk110DataModels;
    }, function (_beyondJsReactive120Beta01Model) {
      dependency_5 = _beyondJsReactive120Beta01Model;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_6 = _beyondJsReact18Widgets114Hooks;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Form) {
      dependency_10 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0332ComponentsUi;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.2"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.7.9"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments-activity-closing"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/data/models', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/react-18-widgets/hooks', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/form', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignments-activity-closing-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments-activity-closing",
        "is": "page",
        "route": "/assignments/${id}/activity/${activityId}/closing",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/assignments-activity-closing');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2482385623,
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
            show() {
              console.log('show');
              const id = this.uri.vars.get('id');
              const activityId = this.uri.vars.get('activityId');
              this.#store.load(id, activityId);
            }
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3275038378,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/ailearn-sdk/data/models");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            // export class StoreManager implements IWidgetStore {
            #participants;
            get participants() {
              return this.#participants;
            }
            async load(id, activityId) {
              const model = new _models.ActivityClosing();
              this.#participants = await model.load({
                id,
                activityId
              });
              super.ready = true;
              console.log('store response', this.#participants);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2816876501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _item = require("./item");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const [expandedUser, setExpandedUser] = (0, _react.useState)(null);
            const [searchTerm, setSearchTerm] = (0, _react.useState)('');
            const toggleExpand = userId => setExpandedUser(expandedUser === userId ? null : userId);
            const handleSearch = event => setSearchTerm(event.target.value.toLowerCase());
            if (!ready) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            const users = Object.entries(store.participants).filter(([_, item]) => item.user.name.toLowerCase().includes(searchTerm));
            const userList = users.map(([uid, item]) => _react.default.createElement(_item.UserItem, {
              key: uid,
              uid: uid,
              item: item,
              expandedUser: expandedUser,
              onToggleExpand: toggleExpand
            }));
            return _react.default.createElement(_ui.PageContainer, {
              className: "user-list-page"
            }, _react.default.createElement(_ui.PageTitle, {
              title: "Lista de usuarios"
            }), _react.default.createElement("section", {
              className: "search-form__container"
            }, _react.default.createElement(_form.Input, {
              type: "text",
              placeholder: "Buscar usuario...",
              value: searchTerm,
              onChange: handleSearch,
              className: "search-input"
            })), !users.length ? _react.default.createElement("p", null, "No se encontraron usuarios.") : userList);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 693070587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserItem = void 0;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          const UserItem = ({
            uid,
            item,
            expandedUser,
            onToggleExpand
          }) => {
            return _react.default.createElement("div", {
              key: uid,
              className: "user-card"
            }, _react.default.createElement("div", {
              className: "user-header",
              onClick: () => onToggleExpand(uid)
            }, _react.default.createElement(_image.Image, {
              src: item.user.photoUrl,
              alt: item.user.name,
              className: "user-photo"
            }), _react.default.createElement("strong", null, item.user.name)), expandedUser === uid && _react.default.createElement("div", {
              className: "user-details"
            }, _react.default.createElement("p", null, _react.default.createElement("strong", null, "Rendimiento:"), " ", item.actual_performance), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Logro del objetivo:"), " ", item.objective_achievement), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Feedback:"), " ", item.feedback), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Interacciones esperadas:"), " ", item.expected_interactions)));
          };
          exports.UserItem = UserItem;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInVyaSIsInZhcnMiLCJnZXQiLCJhY3Rpdml0eUlkIiwibG9hZCIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVscyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJwYXJ0aWNpcGFudHMiLCJtb2RlbCIsIkFjdGl2aXR5Q2xvc2luZyIsInJlYWR5IiwiX2hvb2tzIiwiX3JlYWN0IiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9mb3JtIiwiX3VpIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImV4cGFuZGVkVXNlciIsInNldEV4cGFuZGVkVXNlciIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwidG9nZ2xlRXhwYW5kIiwidXNlcklkIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsInVzZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsImZpbHRlciIsIl8iLCJpdGVtIiwidXNlciIsIm5hbWUiLCJpbmNsdWRlcyIsInVzZXJMaXN0IiwibWFwIiwidWlkIiwiVXNlckl0ZW0iLCJrZXkiLCJvblRvZ2dsZUV4cGFuZCIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJQYWdlVGl0bGUiLCJ0aXRsZSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImxlbmd0aCIsIl9pbWFnZSIsIm9uQ2xpY2siLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiYWx0IiwiYWN0dWFsX3BlcmZvcm1hbmNlIiwib2JqZWN0aXZlX2FjaGlldmVtZW50IiwiZmVlZGJhY2siLCJleHBlY3RlZF9pbnRlcmFjdGlvbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztjQUNuQixNQUFNQyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztjQUNsQyxNQUFNQyxVQUFVLEdBQUcsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztjQUNsRCxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDYSxJQUFJLENBQUNMLEVBQUUsRUFBRUksVUFBVSxDQUFDO1lBQ2pDO1lBRUFFLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBakIsVUFBQSxHQUFBQSxV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