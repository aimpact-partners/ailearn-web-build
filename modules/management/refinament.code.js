System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.13/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, RefinementActivityModal, RefinementModal, __beyond_pkg, hmr;
  _export({
    RefinementActivityModal: void 0,
    RefinementModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_2 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_3 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_4 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_5 = _framerMotion2;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_pragmateUi100Beta6Components) {
      dependency_7 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_8 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Form) {
      dependency_9 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6List) {
      dependency_10 = _pragmateUi100Beta6List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/modal', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['framer-motion', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/list', dependency_10]]);
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./activity/index
      ********************************/
      ims.set('./activity/index', {
        hash: 2506829933,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementActivityModal = RefinementActivityModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _suggestions = require("./suggestions");
          var _context = require("../context");
          var _examples = require("../examples");
          var _requestCredits = require("../request-credits");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _components = require("pragmate-ui/components");
          /*bundle */
          function RefinementActivityModal(props) {
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
              activity,
              activities,
              showRelated,
              setNotes
            };
            return _react.default.createElement(_context.ModalContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: _mainLayout.LayoutBroker.model?.credits?.available > 0 ? view : 'credits',
              ternary: true,
              options: {
                credits: _react.default.createElement(_requestCredits.RequestCreditsContainer, null),
                suggestions: _react.default.createElement(_suggestions.ActivitySuggestionsForm, null),
                examples: _react.default.createElement(_examples.SuggestionExamples, null)
              }
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching,
              key: `control-container-${view}`
            }))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./activity/related-activity
      *******************************************/

      ims.set('./activity/related-activity', {
        hash: 4177241204,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RelatedActivityField = RelatedActivityField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function RelatedActivityField({}) {
            const {
              texts,
              texts: {
                errors
              },
              activity,
              activities,
              setError,
              showRelated
            } = (0, _context.useModalContext)();
            if (!showRelated) return null;
            const filter = item => item.type === 'content-theory' && item.title;
            const map = item => ({
              value: item.id,
              label: item.title
            });
            const options = activities.items.filter(filter).map(map);
            let defaultValue = {
              value: '',
              label: texts.related.independent
            };
            const onChange = event => {
              activity.specs.set({
                related: event.target.value
              });
              if (event.target.value !== '') {
                const related = activities.get(event.target.value);
                if (!related.materials.article) {
                  setError(errors.NO_RELATED_ACTIVITY);
                  return;
                }
              }
              setError('');
              activity.specs.set({
                related: event.target.value
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, texts.related.label), _react.default.createElement(_reactSelect.ReactSelect, {
              options: [defaultValue, ...options],
              onChange: onChange
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./activity/suggestions
      **************************************/

      ims.set('./activity/suggestions', {
        hash: 1633364475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySuggestionsForm = ActivitySuggestionsForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function ActivitySuggestionsForm() {
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
              name: "objective",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
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

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3386108632,
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
        hash: 1953550980,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _suggestions = require("./suggestions");
          var _context = require("./context");
          var _examples = require("./examples");
          var _requestCredits = require("./request-credits");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _components = require("pragmate-ui/components");
          /*bundle */
          function RefinementModal(props) {
            const {
              owner,
              title,
              value,
              onConsume,
              activities,
              activity,
              showRelated,
              description,
              required,
              show,
              onClose,
              onGenerate: callback
            } = props;
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState(value ?? '');
            const [view, setView] = _react.default.useState(_mainLayout.LayoutBroker.model.credits?.available > 0 ? 'suggestions' : 'credits');
            const [error, setError] = _react.default.useState();
            const globalTexts = _mainLayout.LayoutBroker.globalTexts;
            (0, _hooks.useBinder)([_mainLayout.LayoutBroker.model], () => setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'suggestions' : 'credits'), 'credits.change');
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
              setError,
              onClose,
              activity,
              activities,
              showRelated,
              texts: {
                ...texts,
                title,
                description
              },
              onGenerate,
              setView,
              globalTexts,
              notes,
              fetching,
              setNotes
            };
            const finalView = _mainLayout.LayoutBroker.model?.credits?.available > 0 ? view : 'credits';
            return _react.default.createElement(_context.ModalContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                credits: _react.default.createElement(_requestCredits.RequestCreditsContainer, null),
                suggestions: _react.default.createElement(_suggestions.SuggestionsForm, null),
                examples: _react.default.createElement(_examples.SuggestionExamples, null)
              },
              placeholder: _react.default.createElement(_requestCredits.RequestCreditsContainer, null)
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
        hash: 1103044051,
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
          var _relatedActivity = require("./activity/related-activity");
          function SuggestionsForm() {
            const {
              fetching,
              setView,
              notes,
              setNotes,
              onGenerate,
              texts,
              error
            } = (0, _context.useModalContext)();
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
            }), _react.default.createElement(_relatedActivity.RelatedActivityField, null), _react.default.createElement(_form.Textarea, {
              label: texts.textarea.label,
              name: "observations",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick,
              disabled: fetching
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activity/index",
        "from": "RefinementActivityModal",
        "name": "RefinementActivityModal"
      }, {
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
        (require || prop === 'RefinementActivityModal') && _export("RefinementActivityModal", RefinementActivityModal = require ? require('./activity/index').RefinementActivityModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX3VpIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl9jb250ZXh0IiwiX2V4YW1wbGVzIiwiX3JlcXVlc3RDcmVkaXRzIiwiX21haW5MYXlvdXQiLCJfY29tcG9uZW50cyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicHJvcHMiLCJvd25lciIsInRpdGxlIiwidmFsdWUiLCJvbkNvbnN1bWUiLCJkZXNjcmlwdGlvbiIsInJlcXVpcmVkIiwiZ2xvYmFsVGV4dHMiLCJzaG93Iiwib25DbG9zZSIsIm9uR2VuZXJhdGUiLCJjYWxsYmFjayIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJub3RlcyIsInNldE5vdGVzIiwidmlldyIsInNldFZpZXciLCJMYXlvdXRCcm9rZXIiLCJtb2RlbCIsImNyZWRpdHMiLCJhdmFpbGFibGUiLCJlcnJvciIsInNldEVycm9yIiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJFcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZSIsImNvbnNvbGUiLCJoYW5kbGVDTG9zZSIsImNvbnRleHRWYWx1ZSIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsInNob3dSZWxhdGVkIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsQ29udGV4dCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwic3VnZ2VzdGlvbnMiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zRm9ybSIsImV4YW1wbGVzIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwiUHJvY2Vzc0NvbnRhaW5lciIsImtleSIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXNlTW9kYWxDb250ZXh0IiwiZmlsdGVyIiwiaXRlbSIsInR5cGUiLCJtYXAiLCJpZCIsImxhYmVsIiwiaXRlbXMiLCJkZWZhdWx0VmFsdWUiLCJyZWxhdGVkIiwiaW5kZXBlbmRlbnQiLCJvbkNoYW5nZSIsImV2ZW50Iiwic3BlY3MiLCJzZXQiLCJ0YXJnZXQiLCJnZXQiLCJtYXRlcmlhbHMiLCJhcnRpY2xlIiwiTk9fUkVMQVRFRF9BQ1RJVklUWSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJfZm9ybSIsImV2ZW50cyIsImN1cnJlbnRUYXJnZXQiLCJvbkNsaWNrIiwib25CYWNrIiwiRm9ybSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiQnV0dG9uIiwidmFyaWFudCIsImFjdGlvbnMiLCJnZW5lcmF0ZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9saXN0Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIkl0ZW0iLCJib3JkZXJlZCIsInNlbGVjdCIsIkxpc3QiLCJjb250cm9sIiwiYmFjayIsIlJlZmluZW1lbnRNb2RhbCIsImZpbmFsVmlldyIsIlN1Z2dlc3Rpb25zRm9ybSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uQ2FuY2VsIiwiX3JlbGF0ZWRBY3Rpdml0eSIsImRpc2FibGVkIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy9hY3Rpdml0eS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0eS9zdWdnZXN0aW9ucy50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZXhhbXBsZXMudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL3N1Z2dlc3Rpb25zLnRzeCJdLCJz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