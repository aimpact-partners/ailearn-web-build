System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/base", "@aimpact/ailearn-app@0.7.0/stores/base", "react@18.3.1", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/image", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Base) {
      dependency_3 = _beyondJsReact18Widgets118Base;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_4 = _aimpactAilearnApp070StoresBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi108Modal) {
      dependency_6 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_7 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_8 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_9 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Components) {
      dependency_10 = _pragmateUi108Components;
    }, function (_pragmateUi108Image) {
      dependency_11 = _pragmateUi108Image;
    }, function (_aimpactChatSdk155Session) {
      dependency_12 = _aimpactChatSdk155Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/system-error-widget",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['react', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@aimpact/ailearn-app/model/wrapper', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/image', dependency_11], ['@aimpact/chat-sdk/session', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-system-error-control",
        "attrs": ["error"],
        "vspecifier": "@aimpact/ailearn-app@0.7.0/system-error-widget.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/system-error-widget.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 253853004,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
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
        hash: 1003106748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          class StoreManager extends _base.BaseStoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1370427593,
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

      /******************************
      INTERNAL MODULE: ./views/detail
      ******************************/

      ims.set('./views/detail', {
        hash: 2729970825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorDetailsModal = ErrorDetailsModal;
          var _react = require("react");
          var _context = require("./context");
          function ErrorDetailsModal() {
            const {
              texts,
              error,
              user
            } = (0, _context.useModuleContext)();
            const [copied, setCopied] = _react.default.useState(false);
            const copyErrorToClipboard = async () => {
              try {
                const dataToCopy = {
                  user,
                  error
                };
                await navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              } catch (err) {
                console.error('Failed to copy error:', err);
              }
            };
            return _react.default.createElement("div", {
              className: "error-details-modal"
            }, _react.default.createElement("header", null, _react.default.createElement("h2", null, texts.errorDetails.title), _react.default.createElement("button", {
              className: `copy-button ${copied ? 'copied' : ''}`,
              onClick: copyErrorToClipboard
            }, copied ? texts.copied : `📋 ${texts.copy}`)), user && (user.name || user.id || user.email) && _react.default.createElement("div", {
              className: "user-info-section"
            }, _react.default.createElement("h4", null, texts.userInfo.title), _react.default.createElement("div", {
              className: "user-details"
            }, user.name && _react.default.createElement("div", {
              className: "property-item"
            }, _react.default.createElement("span", {
              className: "property-key"
            }, texts.userInfo.name, ":"), _react.default.createElement("span", {
              className: "property-value"
            }, user.name)), user.id && _react.default.createElement("div", {
              className: "property-item"
            }, _react.default.createElement("span", {
              className: "property-key"
            }, texts.userInfo.id, ":"), _react.default.createElement("span", {
              className: "property-value"
            }, user.id)), user.email && _react.default.createElement("div", {
              className: "property-item"
            }, _react.default.createElement("span", {
              className: "property-key"
            }, texts.userInfo.email, ":"), _react.default.createElement("span", {
              className: "property-value"
            }, user.email)))), _react.default.createElement("div", {
              className: "error-section"
            }, _react.default.createElement("h4", null, "Error Details"), _react.default.createElement("div", {
              className: "error-properties"
            }, error.message && _react.default.createElement("div", {
              className: "property-item"
            }, _react.default.createElement("span", {
              className: "property-key"
            }, "Message:"), _react.default.createElement("span", {
              className: "property-value"
            }, error.message)), error.code && _react.default.createElement("div", {
              className: "property-item"
            }, _react.default.createElement("span", {
              className: "property-key"
            }, "Code:"), _react.default.createElement("span", {
              className: "property-value"
            }, error.code)), error.endpoint && _react.default.createElement("div", {
              className: "property-item"
            }, _react.default.createElement("span", {
              className: "property-key"
            }, "Endpoint:"), _react.default.createElement("span", {
              className: "property-value"
            }, error.endpoint)))), error.specs && typeof error.specs === 'object' && _react.default.createElement("div", {
              className: "specs-section"
            }, _react.default.createElement("h4", null, "Specs"), _react.default.createElement("div", {
              className: "specs-properties"
            }, Object.entries(error.specs).map(([key, value]) => _react.default.createElement("div", {
              key: key,
              className: "property-item"
            }, _react.default.createElement("span", {
              className: "property-key"
            }, key, ":"), _react.default.createElement("span", {
              className: "property-value"
            }, String(value)))))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4154157026,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _context = require("./context");
          var _detail = require("./detail");
          /*bundle*/
          function View({
            store,
            ...props
          }) {
            let error = props.attributes.get('error');
            try {
              if (error) error = JSON.parse(error);
            } catch (e) {
              error = 'is not possible to parse the error';
            }
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showErrorModal, setShowErrorModal] = _react.default.useState(false);
            if (!textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const {
              title,
              conclusion,
              description,
              errorDetails,
              userInfo
            } = texts;
            const toggleErrorModal = () => {
              setShowErrorModal(!showErrorModal);
            };
            const user = {
              ...(_session.sessionWrapper.user?.displayName && {
                name: _session.sessionWrapper.user.displayName
              }),
              ...(_session.sessionWrapper.user?.id && {
                id: _session.sessionWrapper.user.id
              }),
              ...(_session.sessionWrapper.user?.email && {
                email: _session.sessionWrapper.user.email
              })
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                texts,
                store,
                error,
                showErrorModal,
                toggleErrorModal,
                user
              }
            }, _react.default.createElement(_ui.PageContainer, {
              className: "container__error place-center"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("header", null, _react.default.createElement("h1", null, "500"), _react.default.createElement(_image.Image, {
              src: "/assets/images/errors/500.webp",
              alt: `500 in ${_wrapper.settings.APP_NAME}`
            })), _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description)), _react.default.createElement("div", null, error && _react.default.createElement(_detail.ErrorDetailsModal, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJTdG9yZU1hbmFnZXIiLCJCYXNlU3RvcmVNYW5hZ2VyIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkVycm9yRGV0YWlsc01vZGFsIiwidGV4dHMiLCJlcnJvciIsInVzZXIiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJ1c2VTdGF0ZSIsImNvcHlFcnJvclRvQ2xpcGJvYXJkIiwiZGF0YVRvQ29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0IiwiZXJyIiwiY29uc29sZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJlcnJvckRldGFpbHMiLCJ0aXRsZSIsIm9uQ2xpY2siLCJjb3B5IiwibmFtZSIsImlkIiwiZW1haWwiLCJ1c2VySW5mbyIsIm1lc3NhZ2UiLCJjb2RlIiwiZW5kcG9pbnQiLCJzcGVjcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsIlN0cmluZyIsIl91aSIsIl93cmFwcGVyIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2ltYWdlIiwiX3Nlc3Npb24iLCJfZGV0YWlsIiwic3RvcmUiLCJwcm9wcyIsImF0dHJpYnV0ZXMiLCJnZXQiLCJwYXJzZSIsImUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzaG93RXJyb3JNb2RhbCIsInNldFNob3dFcnJvck1vZGFsIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29uY2x1c2lvbiIsImRlc2NyaXB0aW9uIiwidG9nZ2xlRXJyb3JNb2RhbCIsInNlc3Npb25XcmFwcGVyIiwiZGlzcGxheU5hbWUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJJbWFnZSIsInNyYyIsImFsdCIsInNldHRpbmdzIiwiQVBQX05BTUUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RldGFpbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHFCQUFxQjtZQUM3QyxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFILEtBQUEsR0FBQUMsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVIsS0FBQSxDQUFBUyxnQkFBZ0I7VUFBR0YsT0FBQSxDQUFBQyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRnJELElBQUFFLE1BQUEsR0FBQVQsT0FBQTtVQWNPLE1BQU1VLGFBQWEsR0FBQUosT0FBQSxDQUFBSSxhQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQWlCLEVBQW9CLENBQUM7VUFDL0UsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osYUFBYSxDQUFDO1VBQUNKLE9BQUEsQ0FBQU8sZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7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