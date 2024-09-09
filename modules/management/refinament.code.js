System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.6-dev.19/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.19/main-layout.widget", "pragmate-ui@1.0.0-beta.6/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev19ComponentsUi) {
      dependency_5 = _aimpactAilearnApp016Dev19ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_6 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev19MainLayoutWidget) {
      dependency_8 = _aimpactAilearnApp016Dev19MainLayoutWidget;
    }, function (_pragmateUi100Beta6Form) {
      dependency_9 = _pragmateUi100Beta6Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.19"], ["@aimpact/ailearn-app", "0.1.6-dev.19"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.19/modules/management/refinament",
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
        hash: 3767172514,
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
              required,
              globalTexts,
              show,
              onClose,
              onGenerate: callback
            } = props;
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2xpc3QiLCJfY29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInRleHRzIiwic2V0VmlldyIsInNldE5vdGVzIiwiZXhhbXBsZXMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU3RhdGUiLCJvbkJhY2siLCJJdGVtIiwiaXRlbSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJ2YXJpYW50IiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwidGl0bGUiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiYmFjayIsIl9tb2RhbCIsIl91aSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfc3VnZ2VzdGlvbnMiLCJfZXhhbXBsZXMiLCJfcmVxdWVzdENyZWRpdHMiLCJfbWFpbkxheW91dCIsIlJlZmluZW1lbnRNb2RhbCIsInByb3BzIiwib3duZXIiLCJvbkNvbnN1bWUiLCJkZXNjcmlwdGlvbiIsInJlcXVpcmVkIiwiZ2xvYmFsVGV4dHMiLCJzaG93Iiwib25DbG9zZSIsIm9uR2VuZXJhdGUiLCJjYWxsYmFjayIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJub3RlcyIsInZpZXciLCJMYXlvdXRCcm9rZXIiLCJtb2RlbCIsImNyZWRpdHMiLCJhdmFpbGFibGUiLCJlcnJvciIsInNldEVycm9yIiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImNvbnRyb2xzIiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJzdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zRm9ybSIsIkNvbnRyb2wiLCJoYW5kbGVDTG9zZSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJBbmltYXRlUHJlc2VuY2UiLCJrZXkiLCJQcm9jZXNzQ29udGFpbmVyIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwib25DYW5jZWwiLCJfZm9ybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRm9ybSIsIkVycm9yUmVuZGVyZXIiLCJUZXh0YXJlYSIsImxhYmVsIiwidGV4dGFyZWEiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZW5lcmF0ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9leGFtcGxlcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvc3VnZ2VzdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWlCTyxNQUFNQyxZQUFZLEdBQUFDLE9BQUEsQ0FBQUQsWUFBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXdCLENBQUM7VUFDbEUsTUFBTUMsZUFBZSxHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLFlBQVksQ0FBQztVQUFDQyxPQUFBLENBQUFHLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQnBFLElBQUFOLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFPLFdBQUEsR0FBQVAsT0FBQTtVQUVBLElBQUFRLEtBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLFFBQUEsR0FBQVQsT0FBQTtVQUVNLFNB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