System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/modal", "@aimpact/ailearn-app@0.1.6-dev.11/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.11/main-layout.widget", "pragmate-ui@1.0.0-beta.2/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, RefinementModal, __beyond_pkg, hmr;
  _export("RefinementModal", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_2 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2List) {
      dependency_3 = _pragmateUi100Beta2List;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_4 = _pragmateUi100Beta2Modal;
    }, function (_aimpactAilearnApp016Dev11ComponentsUi) {
      dependency_5 = _aimpactAilearnApp016Dev11ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_6 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev11MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp016Dev11MainLayoutWidget;
    }, function (_pragmateUi100Beta2Form) {
      dependency_9 = _pragmateUi100Beta2Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.11"], ["@aimpact/ailearn-app", "0.1.6-dev.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.11/modules/management/refinament",
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
        hash: 457213632,
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
              onConsume,
              description,
              credits,
              globalTexts,
              show,
              onClose,
              onGenerate: callback
            } = props;
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [view, setView] = _react.default.useState(_mainLayout.LayoutBroker.model.credits?.available > 0 ? 'suggestions' : 'credits');
            (0, _hooks.useBinder)([_mainLayout.LayoutBroker.model], () => {
              // setCreditsData({ ...LayoutBroker.model.credits });
              setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'suggestions' : 'credits');
              console.log(400, _mainLayout.LayoutBroker.model?.credits?.available, _mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'suggestions' : 'credits', _mainLayout.LayoutBroker.model.credits);
            }, 'credits.change');
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!show || !textsReady) return null;
            const onGenerate = async () => {
              try {
                setFetching(true);
                if (!callback) {
                  throw Error('No callback provided');
                }
                await callback({
                  notes
                });
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
        hash: 458589364,
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
              texts
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
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("p", null, texts.description)), _react.default.createElement(_form.Textarea, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2xpc3QiLCJfY29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInRleHRzIiwic2V0VmlldyIsInNldE5vdGVzIiwiZXhhbXBsZXMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU3RhdGUiLCJvbkJhY2siLCJJdGVtIiwiaXRlbSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJ2YXJpYW50IiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwidGl0bGUiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiYmFjayIsIl9tb2RhbCIsIl91aSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfc3VnZ2VzdGlvbnMiLCJfZXhhbXBsZXMiLCJfcmVxdWVzdENyZWRpdHMiLCJfbWFpbkxheW91dCIsIlJlZmluZW1lbnRNb2RhbCIsInByb3BzIiwib3duZXIiLCJvbkNvbnN1bWUiLCJkZXNjcmlwdGlvbiIsImNyZWRpdHMiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25HZW5lcmF0ZSIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm5vdGVzIiwidmlldyIsIkxheW91dEJyb2tlciIsIm1vZGVsIiwiYXZhaWxhYmxlIiwidXNlQmluZGVyIiwiY29uc29sZSIsImxvZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIkVycm9yIiwiZSIsImVycm9yIiwiY29udHJvbHMiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNGb3JtIiwiQ29udHJvbCIsImhhbmRsZUNMb3NlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCIsIl9mb3JtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJGb3JtIiwiVGV4dGFyZWEiLCJsYWJlbCIsInRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZ2VuZXJhdGUiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvZXhhbXBsZXMudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL3N1Z2dlc3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFpQk8sTUFBTUMsWUFBWSxHQUFBQyxPQUFBLENBQUFELFlBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUF3QixDQUFDO1VBQ2xFLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxZQUFZLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJwRSxJQUFBTixNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBTyxXQUFBLEdBQUFQLE9BQUE7VUFFQSxJQUFBUSxLQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxRQUFBLEdBQUFULE9BQUE7VUFFTSxTQUFVVSxrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFF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