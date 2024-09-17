System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.6-dev.34/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.34/main-layout.widget", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, RefinementModal, __beyond_pkg, hmr;
  _export("RefinementModal", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta6Components) {
      dependency_2 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6List) {
      dependency_3 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_4 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp016Dev34ComponentsUi) {
      dependency_5 = _aimpactAilearnApp016Dev34ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_6 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev34MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp016Dev34MainLayoutWidget;
    }, function (_pragmateUi100Beta6Form) {
      dependency_9 = _pragmateUi100Beta6Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.2.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.34"], ["@aimpact/ailearn-app", "0.1.6-dev.34"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.34/modules/management/refinament",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['pragmate-ui/modal', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['@beyond-js/react-18-widgets/hooks', dependency_6], ['framer-motion', dependency_7], ['@aimpact/ailearn-app/main-layout.widget', dependency_8], ['pragmate-ui/form', dependency_9]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1819021868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = void 0;
          var _react = require("react");
          const ModalContext = exports.ModalContext = _react.default.createContext({});
          const useModalContext = () => _react.default.useContext(ModalContext);
          exports.useModalContext = useModalContext;
        }
      });

      /**************************
      INTERNAL MODULE: ./examples
      **************************/

      ims.set('./examples', {
        hash: 986637339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionExamples = SuggestionExamples;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _context = require("./context");
          function SuggestionExamples() {
            const {
              texts,
              setView,
              setNotes,
              examples
            } = (0, _context.useModalContext)();
            const [selected, setSelected] = _react.default.useState(null);
            const onBack = () => setView('selection');
            const Item = ({
              item
            }) => {
              const onClick = () => {
                setNotes(item);
                setView('suggestions');
              };
              return _react.default.createElement("li", {
                className: "list__item"
              }, _react.default.createElement("span", null, item), _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
                bordered: true,
                variant: "primary",
                onClick: onClick
              }, texts.actions.select)));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "modal__content--justified"
            }, _react.default.createElement("h3", null, texts.examples.title), _react.default.createElement(_list.List, {
              className: "modal__list--options-selection",
              items: examples.items,
              control: Item
            }), _react.default.createElement("div", {
              className: "flex-container flex-end mt-30"
            }, _react.default.createElement("div", {
              className: "modal__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "default",
              onClick: onBack
            }, texts.actions.back)))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2510269501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _suggestions = require("./suggestions");
          var _context = require("./context");
          var _examples = require("./examples");
          var _requestCredits = require("./request-credits");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle */
          function RefinementModal(props) {
            const {
              owner,
              title,
              value,
              onConsume,
              description,
              required,
              globalTexts,
              show,
              onClose,
              onGenerate: callback
            } = props;
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState(value ?? '');
            const [view, setView] = _react.default.useState(_mainLayout.LayoutBroker.model.credits?.available > 0 ? 'suggestions' : 'credits');
            const [error, setError] = _react.default.useState();
            (0, _hooks.useBinder)([_mainLayout.LayoutBroker.model], () => {
              // setCreditsData({ ...LayoutBroker.model.credits });
              setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'suggestions' : 'credits');
            }, 'credits.change');
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!show || !textsReady) return null;
            const onGenerate = async () => {
              try {
                if (required && (notes === '' || !notes)) {
                  setError('Please provide a description');
                  return;
                }
                setFetching(true);
                if (!callback) {
                  throw Error('No callback provided');
                }
                const response = await callback({
                  notes
                });
                if (response.error) {
                  setError(texts.errors[response.error] ?? texts.errors.default);
                  return;
                }
                onClose();
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const controls = {
              credits: _requestCredits.RequestCreditsContainer,
              suggestions: _suggestions.SuggestionsForm,
              examples: _examples.SuggestionExamples
            };
            const Control = _mainLayout.LayoutBroker.model?.credits?.available > 0 ? controls[view] : controls.credits;
            const handleCLose = () => {
              setNotes('');
              setView('suggestions');
              onClose();
            };
            const contextValue = {
              view,
              owner,
              onConsume,
              error,
              onClose,
              texts: {
                ...texts,
                title,
                description
              },
              onGenerate,
              setView,
              globalTexts,
              notes,
              setNotes
            };
            return _react.default.createElement(_context.ModalContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(Control, {
              key: `control-view${view}`
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching,
              key: `control-container-${view}`
            }))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./request-credits
      *********************************/

      ims.set('./request-credits', {
        hash: 3994175140,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsContainer = RequestCreditsContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          function RequestCreditsContainer() {
            const {
              onClose,
              owner,
              onConsume,
              globalTexts
            } = (0, _context.useModalContext)();
            const onSuccess = () => '';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.RequestCreditsForm, {
              onConsume: onConsume,
              owner: owner,
              onClose: onClose,
              onCancel: onClose,
              globalTexts: globalTexts,
              onSuccess: onSuccess
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./suggestions
      *****************************/

      ims.set('./suggestions', {
        hash: 4230355763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsForm = SuggestionsForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function SuggestionsForm() {
            const {
              setView,
              notes,
              setNotes,
              onGenerate,
              texts,
              error
            } = (0, _context.useModalContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: onGenerate,
              setView: () => setView('examples'),
              onBack: () => setView('suggestions')
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "modal__content--justified"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("p", null, texts.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_form.Textarea, {
              label: texts.textarea.label,
              name: "observations",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "RefinementModal",
        "name": "RefinementModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RefinementModal') && _export("RefinementModal", RefinementModal = require ? require('./index').RefinementModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2xpc3QiLCJfY29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInRleHRzIiwic2V0VmlldyIsInNldE5vdGVzIiwiZXhhbXBsZXMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU3RhdGUiLCJvbkJhY2siLCJJdGVtIiwiaXRlbSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJ2YXJpYW50IiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwidGl0bGUiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiYmFjayIsIl9tb2RhbCIsIl91aSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfc3VnZ2VzdGlvbnMiLCJfZXhhbXBsZXMiLCJfcmVxdWVzdENyZWRpdHMiLCJfbWFpbkxheW91dCIsIlJlZmluZW1lbnRNb2RhbCIsInByb3BzIiwib3duZXIiLCJ2YWx1ZSIsIm9uQ29uc3VtZSIsImRlc2NyaXB0aW9uIiwicmVxdWlyZWQiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25HZW5lcmF0ZSIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm5vdGVzIiwidmlldyIsIkxheW91dEJyb2tlciIsIm1vZGVsIiwiY3JlZGl0cyIsImF2YWlsYWJsZSIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VCaW5kZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJFcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZSIsImNvbnNvbGUiLCJjb250cm9scyIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCIsIl9mb3JtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJGb3JtIiwiRXJyb3JSZW5kZXJlciIsIlRleHRhcmVhIiwibGFiZWwiLCJ0ZXh0YXJlYSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImdlbmVyYXRlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHN4IiwiL3RzL2V4YW1wbGVzLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcmVxdWVzdC1jcmVkaXRzLnRzeCIsIi90cy9zdWdnZXN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBaUJPLE1BQU1DLFlBQVksR0FBQUMsT0FBQSxDQUFBRCxZQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUNsRSxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsWUFBWSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCcEUsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQU8sV0FBQSxHQUFBUCxPQUFBO1VBRUEsSUFBQVEsS0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsUUFB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