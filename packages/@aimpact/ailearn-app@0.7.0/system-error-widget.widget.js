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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJTdG9yZU1hbmFnZXIiLCJCYXNlU3RvcmVNYW5hZ2VyIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkVycm9yRGV0YWlsc01vZGFsIiwidGV4dHMiLCJlcnJvciIsInVzZXIiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJ1c2VTdGF0ZSIsImNvcHlFcnJvclRvQ2xpcGJvYXJkIiwiZGF0YVRvQ29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0IiwiZXJyIiwiY29uc29sZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJlcnJvckRldGFpbHMiLCJ0aXRsZSIsIm9uQ2xpY2siLCJjb3B5IiwibmFtZSIsImlkIiwiZW1haWwiLCJ1c2VySW5mbyIsIm1lc3NhZ2UiLCJjb2RlIiwiZW5kcG9pbnQiLCJzcGVjcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsIlN0cmluZyIsIl91aSIsIl93cmFwcGVyIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2ltYWdlIiwiX3Nlc3Npb24iLCJfZGV0YWlsIiwic3RvcmUiLCJwcm9wcyIsImF0dHJpYnV0ZXMiLCJnZXQiLCJwYXJzZSIsImUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzaG93RXJyb3JNb2RhbCIsInNldFNob3dFcnJvck1vZGFsIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29uY2x1c2lvbiIsImRlc2NyaXB0aW9uIiwidG9nZ2xlRXJyb3JNb2RhbCIsInNlc3Npb25XcmFwcGVyIiwiZGlzcGxheU5hbWUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJJbWFnZSIsInNyYyIsImFsdCIsInNldHRpbmdzIiwiQVBQX05BTUUiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9kZXRhaWwudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkscUJBQXFCO1lBQzdDLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUgsS0FBQSxHQUFBQyxPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRUixLQUFBLENBQUFTLGdCQUFnQjtVQUFHRixPQUFBLENBQUFDLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNGckQsSUFBQUUsTUFBQSxHQUFBVCxPQUFBO1VBY08sTUFBTVUsYUFBYSxHQUFBSixPQUFBLENBQUFJLGFBQUEsR0FBR0QsTUFBQSxDQUFBRSxPQUFLLENBQUNDLGFBQWEsQ0FBaUIsRUFBb0IsQ0FBQztVQUMvRSxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNSixNQUFBLENBQUFFLE9BQUssQ0FBQ0csVUFBVSxDQUFDSixhQUFhLENBQUM7VUFBQ0osT0FBQSxDQUFBTyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7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