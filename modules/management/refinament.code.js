System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.13/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_5 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_6 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_pragmateUi100Beta6Form) {
      dependency_9 = _pragmateUi100Beta6Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/modules/management/refinament",
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
        hash: 3392161000,
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
              activity,
              activities,
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
                if (response?.error) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2xpc3QiLCJfY29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInRleHRzIiwic2V0VmlldyIsInNldE5vdGVzIiwiZXhhbXBsZXMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU3RhdGUiLCJvbkJhY2siLCJJdGVtIiwiaXRlbSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJ2YXJpYW50IiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwidGl0bGUiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiYmFjayIsIl9tb2RhbCIsIl91aSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfc3VnZ2VzdGlvbnMiLCJfZXhhbXBsZXMiLCJfcmVxdWVzdENyZWRpdHMiLCJfbWFpbkxheW91dCIsIlJlZmluZW1lbnRNb2RhbCIsInByb3BzIiwib3duZXIiLCJ2YWx1ZSIsIm9uQ29uc3VtZSIsImRlc2NyaXB0aW9uIiwicmVxdWlyZWQiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwib25HZW5lcmF0ZSIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm5vdGVzIiwidmlldyIsIkxheW91dEJyb2tlciIsIm1vZGVsIiwiY3JlZGl0cyIsImF2YWlsYWJsZSIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VCaW5kZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJFcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZSIsImNvbnNvbGUiLCJjb250cm9scyIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCIsIl9mb3JtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJGb3JtIiwiRXJyb3JSZW5kZXJlciIsIlRleHRhcmVhIiwibGFiZWwiLCJ0ZXh0YXJlYSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImdlbmVyYXRlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHN4IiwiL3RzL2V4YW1wbGVzLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcmVxdWVzdC1jcmVkaXRzLnRzeCIsIi90cy9zdWdnZXN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBaUJPLE1BQU1DLFlBQVksR0FBQUMsT0FBQSxDQUFBRCxZQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUNsRSxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsWUFBWSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCcEUsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQU8sV0FBQSxHQUFBUCxPQUFBO1VBRUEsSUFBQVEsS0FBQSxH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