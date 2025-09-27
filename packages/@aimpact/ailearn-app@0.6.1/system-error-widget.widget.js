System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/base", "@aimpact/ailearn-app@0.6.1/stores/base", "react@18.3.1", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/model/wrapper", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/image", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp061StoresBase) {
      dependency_4 = _aimpactAilearnApp061StoresBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi108Modal) {
      dependency_6 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_7 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_8 = _aimpactAilearnApp061ModelWrapper;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/system-error-widget",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['react', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@aimpact/ailearn-app/model/wrapper', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/image', dependency_11], ['@aimpact/chat-sdk/session', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-system-error-control",
        "attrs": ["error"],
        "vspecifier": "@aimpact/ailearn-app@0.6.1/system-error-widget.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/system-error-widget.widget');
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
        hash: 3998676967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorDetailsModal = ErrorDetailsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("./context");
          function ErrorDetailsModal() {
            const {
              texts,
              error,
              showErrorModal,
              toggleErrorModal,
              user
            } = (0, _context.useModuleContext)();
            const [copied, setCopied] = _react.default.useState(false);
            if (!showErrorModal) return null;
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
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: toggleErrorModal
            }, _react.default.createElement("div", {
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
            }, String(value))))))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 43549987,
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
          var _components = require("pragmate-ui/components");
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
            }, _react.default.createElement("header", null, _react.default.createElement("h1", null, "500"), _react.default.createElement("h3", null, title)), _react.default.createElement("p", null, description), _react.default.createElement("p", null, conclusion), error && _react.default.createElement("div", {
              className: "error-actions"
            }, _react.default.createElement(_components.Button, {
              onClick: toggleErrorModal,
              variant: "primary",
              bordered: true
            }, errorDetails.showDetails))), _react.default.createElement(_image.Image, {
              src: "/assets/images/errors/500.webp",
              alt: `500 in ${_wrapper.settings.APP_NAME}`
            })), _react.default.createElement(_detail.ErrorDetailsModal, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJTdG9yZU1hbmFnZXIiLCJCYXNlU3RvcmVNYW5hZ2VyIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVycm9yRGV0YWlsc01vZGFsIiwidGV4dHMiLCJlcnJvciIsInNob3dFcnJvck1vZGFsIiwidG9nZ2xlRXJyb3JNb2RhbCIsInVzZXIiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJ1c2VTdGF0ZSIsImNvcHlFcnJvclRvQ2xpcGJvYXJkIiwiZGF0YVRvQ29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0IiwiZXJyIiwiY29uc29sZSIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiY2xhc3NOYW1lIiwiZXJyb3JEZXRhaWxzIiwidGl0bGUiLCJvbkNsaWNrIiwiY29weSIsIm5hbWUiLCJpZCIsImVtYWlsIiwidXNlckluZm8iLCJtZXNzYWdlIiwiY29kZSIsImVuZHBvaW50Iiwic3BlY3MiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidmFsdWUiLCJTdHJpbmciLCJfdWkiLCJfd3JhcHBlciIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiX3Nlc3Npb24iLCJfZGV0YWlsIiwic3RvcmUiLCJwcm9wcyIsImF0dHJpYnV0ZXMiLCJnZXQiLCJwYXJzZSIsImUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRTaG93RXJyb3JNb2RhbCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbmNsdXNpb24iLCJkZXNjcmlwdGlvbiIsInNlc3Npb25XcmFwcGVyIiwiZGlzcGxheU5hbWUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJzaG93RGV0YWlscyIsIkltYWdlIiwic3JjIiwiYWx0Iiwic2V0dGluZ3MiLCJBUFBfTkFNRSJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2RldGFpbC50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDN0MsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSCxLQUFBLEdBQUFDLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFSLEtBQUEsQ0FBQVMsZ0JBQWdCO1VBQUdGLE9BQUEsQ0FBQUMsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0ZyRCxJQUFBRSxNQUFBLEdBQUFULE9BQUE7VUFjTyxNQUFNVSxhQUFhLEdBQUFKLE9BQUEsQ0FBQUksYUFBQSxHQUFHRCxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFpQixFQUFvQixDQUFDO1VBQy9FLE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1KLE1BQUEsQ0FBQUUsT0FBSyxDQUFDRyxVQUFVLENBQUNKLGFBQWEsQ0FBQztVQUFDSixPQUFBLENBQUFPLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2Z0RSxJQUFBSixNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBZSxNQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsUUFBQSxHQUFBaEIsT0FBQTtVQUVNLFNBQVVpQixpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLEtBQUs7Y0FBRUMsY0FBYztjQUFFQyxnQkFBZ0I7Y0FBRUM7WUFBSSxDQUFFLEdBQUcsSUFBQU4sUUFBQSxDQUFBSCxnQkFBZ0IsR0FBRTtZQUNuRixNQUFNLENBQUNVLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdmLE1BQUEsQ0FBQUUsT0FBSyxDQUFDYyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRWpELElBQUksQ0FBQ0wsY0FBYyxFQUFFLE9BQU8sSUFBSTtZQUVoQyxNQUFNTSxvQkFBb0IsR0FBRyxNQUFBQSxDQUFBLEtBQTBCO2NBQ3RELElBQUk7Z0JBQ0gsTUFBTUMsVUFBVSxHQUFHO2tCQUNsQkwsSUFBSTtrQkFDSkg7aUJBQ0E7Z0JBQ0QsTUFBTVMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNMLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFSCxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNmUyxVQUFVLENBQUMsTUFBTVQsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQztlQUN4QyxDQUFDLE9BQU9VLEdBQUcsRUFBRTtnQkFDYkMsT0FBTyxDQUFDaEIsS0FBSyxDQUFDLHVCQUF1QixFQUFFZSxHQUFHLENBQUM7O1lBRTdDLENBQUM7WUFDRCxPQUNDekIsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBLENBQUNyQixNQUFBLENBQUFzQixLQUFLO2NBQUNDLElBQUk7Y0FBQ0MsT0FBTyxFQUFFbEI7WUFBZ0IsR0FDcENaLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBcUIsR0FDbkMvQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsaUJBQ0MzQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQ3VCLFlBQVksQ0FBQ0MsS0FBSyxDQUFNLEVBQ25DakMsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQVFJLFNBQVMsRUFBRSxlQUFlakIsTUFBTSxHQUFHLFFBQVEsR0FBRyxFQUFFLEVBQUU7Y0FBRW9CLE9BQU8sRUFBRWpCO1lBQW9CLEdBQ3ZGSCxNQUFNLEdBQUdMLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLE1BQU1MLEtBQUssQ0FBQzBCLElBQUksRUFBRSxDQUNuQyxDQUNELEVBQ1J0QixJQUFJLEtBQUtBLElBQUksQ0FBQ3VCLElBQUksSUFBSXZCLElBQUksQ0FBQ3dCLEVBQUUsSUFBSXhCLElBQUksQ0FBQ3lCLEtBQUssQ0FBQyxJQUM1Q3RDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBbUIsR0FDakMvQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsYUFBS2xCLEtBQUssQ0FBQzhCLFFBQVEsQ0FBQ04sS0FBSyxDQUFNLEVBQy9CakMsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFjLEdBQzNCbEIsSUFBSSxDQUFDdUIsSUFBSSxJQUNUcEMsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFlLEdBQzdCL0IsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQU1JLFNBQVMsRUFBQztZQUFjLEdBQUV0QixLQUFLLENBQUM4QixRQUFRLENBQUNILElBQUksRSxJQUFTLEVBQzVEcEMsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQU1JLFNBQVMsRUFBQztZQUFnQixHQUFFbEIsSUFBSSxDQUFDdUIsSUFBSSxDQUFRLENBRXBELEVBQ0F2QixJQUFJLENBQUN3QixFQUFFLElBQ1ByQyxNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWUsR0FDN0IvQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBTUksU0FBUyxFQUFDO1lBQWMsR0FBRXRCLEtBQUssQ0FBQzhCLFFBQVEsQ0FBQ0YsRUFBRSxFLElBQVMsRUFDMURyQyxNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBTUksU0FBUyxFQUFDO1lBQWdCLEdBQUVsQixJQUFJLENBQUN3QixFQUFFLENBQVEsQ0FFbEQsRUFDQXhCLElBQUksQ0FBQ3lCLEtBQUssSUFDVnRDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBZSxHQUM3Qi9CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQTtjQUFNSSxTQUFTLEVBQUM7WUFBYyxHQUFFdEIsS0FBSyxDQUFDOEIsUUFBUSxDQUFDRCxLQUFLLEUsSUFBUyxFQUM3RHRDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQTtjQUFNSSxTQUFTLEVBQUM7WUFBZ0IsR0FBRWxCLElBQUksQ0FBQ3lCLEtBQUssQ0FBUSxDQUVyRCxDQUNJLENBRVAsRUFFRHRDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBZSxHQUM3Qi9CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQSw2QkFBc0IsRUFDdEIzQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWtCLEdBQy9CckIsS0FBSyxDQUFDOEIsT0FBTyxJQUNieEMsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFlLEdBQzdCL0IsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQU1JLFNBQVMsRUFBQztZQUFjLGNBQWdCLEVBQzlDL0IsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQU1JLFNBQVMsRUFBQztZQUFnQixHQUFFckIsS0FBSyxDQUFDOEIsT0FBTyxDQUFRLENBRXhELEVBQ0E5QixLQUFLLENBQUMrQixJQUFJLElBQ1Z6QyxNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWUsR0FDN0IvQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBTUksU0FBUyxFQUFDO1lBQWMsV0FBYSxFQUMzQy9CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQTtjQUFNSSxTQUFTLEVBQUM7WUFBZ0IsR0FBRXJCLEtBQUssQ0FBQytCLElBQUksQ0FBUSxDQUVyRCxFQUNBL0IsS0FBSyxDQUFDZ0MsUUFBUSxJQUNkMUMsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFlLEdBQzdCL0IsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQU1JLFNBQVMsRUFBQztZQUFjLGVBQWlCLEVBQy9DL0IsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQU1JLFNBQVMsRUFBQztZQUFnQixHQUFFckIsS0FBSyxDQUFDZ0MsUUFBUSxDQUFRLENBRXpELENBQ0ksQ0FDRCxFQUVMaEMsS0FBSyxDQUFDaUMsS0FBSyxJQUFJLE9BQU9qQyxLQUFLLENBQUNpQyxLQUFLLEtBQUssUUFBUSxJQUM5QzNDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBZSxHQUM3Qi9CLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQSxxQkFBYyxFQUNkM0IsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFrQixHQUMvQmEsTUFBTSxDQUFDQyxPQUFPLENBQUNuQyxLQUFLLENBQUNpQyxLQUFLLENBQUMsQ0FBQ0csR0FBRyxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxLQUFLLENBQUMsS0FDN0NoRCxNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBS29CLEdBQUcsRUFBRUEsR0FBRztjQUFFaEIsU0FBUyxFQUFDO1lBQWUsR0FDdkMvQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBTUksU0FBUyxFQUFDO1lBQWMsR0FBRWdCLEdBQUcsRSxJQUFTLEVBQzVDL0MsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQU1JLFNBQVMsRUFBQztZQUFnQixHQUFFa0IsTUFBTSxDQUFDRCxLQUFLLENBQUMsQ0FBUSxDQUV4RCxDQUFDLENBQ0csQ0FFUCxDQUNJLENBQ0M7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsR0EsSUFBQUUsR0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE0RCxRQUFBLEdBQUE1RCxPQUFBO1VBQ0EsSUFBQTZELE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBOEQsZUFBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUErRCxXQUFBLEdBQUEvRCxPQUFBO1VBQ0EsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUFnQixRQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWtFLE9BQUEsR0FBQWxFLE9BQUE7VUFFTztVQUFVLFNBQ1JLLElBQUlBLENBQUM7WUFBRThELEtBQUs7WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDaEMsSUFBSWpELEtBQUssR0FBR2lELEtBQUssQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3pDLElBQUk7Y0FDSCxJQUFJbkQsS0FBSyxFQUFFQSxLQUFLLEdBQUdZLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ3BELEtBQUssQ0FBQzthQUNwQyxDQUFDLE9BQU9xRCxDQUFDLEVBQUU7Y0FDWHJELEtBQUssR0FBRyxvQ0FBb0M7O1lBRzdDLE1BQU0sQ0FBQ3NELFVBQVUsRUFBRXZELEtBQUssQ0FBQyxHQUFtQyxJQUFBMkMsTUFBQSxDQUFBYSxRQUFRLEVBQUNaLGVBQUEsQ0FBQWEsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEYsTUFBTSxDQUFDeEQsY0FBYyxFQUFFeUQsaUJBQWlCLENBQUMsR0FBR3BFLE1BQUEsQ0FBQUUsT0FBSyxDQUFDYyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRWpFLElBQUksQ0FBQ2dELFVBQVUsRUFBRSxPQUFPaEUsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBLENBQUN1QixHQUFBLENBQUFtQixVQUFVO2NBQUNDLFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFFdEQsTUFBTTtjQUFFckMsS0FBSztjQUFFc0MsVUFBVTtjQUFFQyxXQUFXO2NBQUV4QyxZQUFZO2NBQUVPO1lBQVEsQ0FBRSxHQUFHOUIsS0FBSztZQUV4RSxNQUFNRyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFXO2NBQ25Dd0QsaUJBQWlCLENBQUMsQ0FBQ3pELGNBQWMsQ0FBQztZQUNuQyxDQUFDO1lBRUQsTUFBTUUsSUFBSSxHQUFHO2NBQ1osSUFBSTJDLFFBQUEsQ0FBQWlCLGNBQWMsQ0FBQzVELElBQUksRUFBRTZELFdBQVcsSUFBSTtnQkFBRXRDLElBQUksRUFBRW9CLFFBQUEsQ0FBQWlCLGNBQWMsQ0FBQzVELElBQUksQ0FBQzZEO2NBQVcsQ0FBRSxDQUFDO2NBQ2xGLElBQUlsQixRQUFBLENBQUFpQixjQUFjLENBQUM1RCxJQUFJLEVBQUV3QixFQUFFLElBQUk7Z0JBQUVBLEVBQUUsRUFBRW1CLFFBQUEsQ0FBQWlCLGNBQWMsQ0FBQzVELElBQUksQ0FBQ3dCO2NBQUUsQ0FBRSxDQUFDO2NBQzlELElBQUltQixRQUFBLENBQUFpQixjQUFjLENBQUM1RCxJQUFJLEVBQUV5QixLQUFLLElBQUk7Z0JBQUVBLEtBQUssRUFBRWtCLFFBQUEsQ0FBQWlCLGNBQWMsQ0FBQzVELElBQUksQ0FBQ3lCO2NBQUssQ0FBRTthQUN0RTtZQUVELE9BQ0N0QyxNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsQ0FBQ3BCLFFBQUEsQ0FBQU4sYUFBYSxDQUFDMEUsUUFBUTtjQUN0QjNCLEtBQUssRUFBRTtnQkFDTnZDLEtBQUs7Z0JBQ0xpRCxLQUFLO2dCQUNMaEQsS0FBSztnQkFDTEMsY0FBYztnQkFDZEMsZ0JBQWdCO2dCQUNoQkM7O1lBQ0EsR0FFRGIsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBLENBQUN1QixHQUFBLENBQUEwQixhQUFhO2NBQUM3QyxTQUFTLEVBQUM7WUFBK0IsR0FDdkQvQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQVMsR0FDdkIvQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsaUJBQ0MzQixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsbUJBQVksRUFDWjNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUIsYUFBQSxhQUFLTSxLQUFLLENBQU0sQ0FDUixFQUVUakMsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBLFlBQUk2QyxXQUFXLENBQUssRUFDcEJ4RSxNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsWUFBSTRDLFVBQVUsQ0FBSyxFQUVsQjdELEtBQUssSUFDTFYsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFlLEdBQzdCL0IsTUFBQSxDQUFBRSxPQUFBLENBQUF5QixhQUFBLENBQUMyQixXQUFBLENBQUF1QixNQUFNO2NBQUMzQyxPQUFPLEVBQUV0QixnQkFBZ0I7Y0FBRWtFLE9BQU8sRUFBQyxTQUFTO2NBQUNDLFFBQVE7WUFBQSxHQUMzRC9DLFlBQVksQ0FBQ2dELFdBQVcsQ0FDakIsQ0FFVixDQUNJLEVBQ05oRixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQTBCLEtBQUs7Y0FBQ0MsR0FBRyxFQUFDLGdDQUFnQztjQUFDQyxHQUFHLEVBQUUsVUFBVWhDLFFBQUEsQ0FBQWlDLFFBQVEsQ0FBQ0MsUUFBUTtZQUFFLEVBQUksQ0FDbkUsRUFDaEJyRixNQUFBLENBQUFFLE9BQUEsQ0FBQXlCLGFBQUEsQ0FBQzhCLE9BQUEsQ0FBQWpELGlCQUFpQixPQUFHLENBQ0c7VUFFM0IiLCJpZ25vcmVMaXN0IjpbXX0=