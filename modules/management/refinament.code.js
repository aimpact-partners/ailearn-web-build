System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/modal", "@aimpact/ailearn-app@0.1.4-test.02/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.1/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, RefinementModal, __beyond_pkg, hmr;
  _export("RefinementModal", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_2 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1List) {
      dependency_3 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_4 = _pragmateUi100Beta1Modal;
    }, function (_aimpactAilearnApp014Test02ComponentsUi) {
      dependency_5 = _aimpactAilearnApp014Test02ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_6 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi100Beta1Form) {
      dependency_8 = _pragmateUi100Beta1Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.4-test.02"], ["@aimpact/ailearn-app", "0.1.4-test.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.4-test.02/modules/management/refinament",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['pragmate-ui/modal', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['@beyond-js/react-18-widgets/hooks', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/form', dependency_8]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 3667319482,
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
        hash: 4092307453,
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
          /*bundle */
          function RefinementModal({
            title,
            description,
            show,
            onClose,
            onGenerate: callback
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [view, setView] = _react.default.useState('suggestions');
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
              suggestions: _suggestions.SuggestionsForm,
              examples: _examples.SuggestionExamples
            };
            const Control = controls[view];
            const handleCLose = () => {
              setNotes('');
              setView('suggestions');
              onClose();
            };
            const contextValue = {
              view,
              texts: {
                ...texts,
                title,
                description
              },
              onGenerate,
              setView,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kYWxDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2xpc3QiLCJfY29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInRleHRzIiwic2V0VmlldyIsInNldE5vdGVzIiwiZXhhbXBsZXMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU3RhdGUiLCJvbkJhY2siLCJJdGVtIiwiaXRlbSIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJ2YXJpYW50IiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwidGl0bGUiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiYmFjayIsIl9tb2RhbCIsIl91aSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfc3VnZ2VzdGlvbnMiLCJfZXhhbXBsZXMiLCJSZWZpbmVtZW50TW9kYWwiLCJkZXNjcmlwdGlvbiIsInNob3ciLCJvbkNsb3NlIiwib25HZW5lcmF0ZSIsImNhbGxiYWNrIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm5vdGVzIiwidmlldyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNvbnRyb2xzIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwia2V5IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9mb3JtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJGb3JtIiwiVGV4dGFyZWEiLCJsYWJlbCIsInRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZ2VuZXJhdGUiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvZXhhbXBsZXMudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9zdWdnZXN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFhTyxNQUFNQyxZQUFZLEdBQUFDLE9BQUEsQ0FBQUQsWUFBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXdCLENBQUM7VUFDbEUsTUFBTUMsZUFBZSxHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLFlBQVksQ0FBQztVQUFDQyxPQUFBLENBQUFHLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkcEUsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQU8sV0FBQSxHQUFBUCxPQUFBO1VBRUEsSUFBQVEsS0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsUUFBQSxHQUFBVCxPQUFBO1VBRU0sU0FBVVUsa0JBQWtCQSxDQUFBO1lBQ2pDLE1BQU07Y0FBRUMsS0FBSztjQUFFQyxPQUFPO2NBQUVDLFFBQVE7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBSixlQUFlLEdBQUU7WUFDaEUsTUFBTSxDQUFDVSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHakIsTUFBQSxDQUFBSSxPQUFLLENBQUNjLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFcEQsTUFBTUMsTUFBTSxHQUFHQSxDQUFBLEtBQU1OLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDekMsTUFBTU8sSUFBSSxHQUFHQSxD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