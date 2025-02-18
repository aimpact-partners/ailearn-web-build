System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/react-18-widgets@1.1.3/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/modal", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/form/react-select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, RefinementActivityModal, RefinementModal, __beyond_pkg, hmr;
  _export({
    RefinementActivityModal: void 0,
    RefinementModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_1 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_2 = _beyondJsReact18Widgets113Hooks;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_4 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_5 = _pragmateUi100Beta7Modal;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta7List) {
      dependency_7 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Form) {
      dependency_8 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_9 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_10 = _pragmateUi100Beta7FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/management/refinament",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/main-layout.widget', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/modal', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/form/react-select', dependency_10]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 1787652392,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementActivityModal = RefinementActivityModal;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("./context");
          var _examples = require("./examples");
          var _activity = require("./form/activity");
          var _requestCredits = require("./request-credits");
          /*bundle */
          function RefinementActivityModal(props) {
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
              objective,
              show,
              onClose,
              onGenerate: callback
            } = props;
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState(value ?? '');
            const [objectiveValue, setObjectiveValue] = _react.default.useState(objective ?? '');
            const [view, setView] = _react.default.useState(_mainLayout.LayoutBroker.model.credits?.available > 0 ? 'suggestions' : 'credits');
            const [error, setError] = _react.default.useState();
            const globalTexts = _mainLayout.LayoutBroker.globalTexts;
            (0, _hooks.useBinder)([_mainLayout.LayoutBroker.model], () => setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'suggestions' : 'credits'), 'credits.change');
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!show || !textsReady) return null;
            const onGenerate = async specs => {
              try {
                setFetching(true);
                if (!callback) {
                  throw Error('No callback provided');
                }
                specs = specs ? specs : {
                  notes,
                  objective: objectiveValue
                };
                const response = await callback(specs);
                if (response?.error) {
                  let error = texts.errors[response.error] ?? texts.errors.default;
                  if (response.error?.code && texts.error[response.error.code.toString()]) {
                    error = texts.error[response.error.code.toString()];
                  }
                  setError(error);
                  return;
                }
                onClose();
              } catch (e) {
                setError(texts.errors[e.text] ?? texts.errors.default);
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
              objectiveValue,
              setObjectiveValue,
              activities,
              required,
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
                suggestions: _react.default.createElement(_activity.SuggestionsActivityForm, null),
                examples: _react.default.createElement(_examples.SuggestionExamples, null)
              },
              placeholder: _react.default.createElement(_requestCredits.RequestCreditsContainer, null)
            }))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3800463767,
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

      /*******************************
      INTERNAL MODULE: ./form/activity
      *******************************/

      ims.set('./form/activity', {
        hash: 531338731,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsActivityForm = SuggestionsActivityForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _relatedActivity = require("./related-activity");
          function SuggestionsActivityForm() {
            const {
              fetching,
              setView,
              notes,
              required,
              setNotes,
              objectiveValue,
              setObjectiveValue,
              onGenerate,
              texts,
              activity,
              error
            } = (0, _context.useModalContext)();
            const [relatedValue, setRelatedValue] = _react.default.useState('');
            const events = {
              onChange: event => {
                const {
                  name,
                  value
                } = event.currentTarget;
                const callback = name === 'objective' ? setObjectiveValue : setNotes;
                callback(value);
              },
              onClick: () => {
                onGenerate({
                  notes,
                  objective: objectiveValue,
                  related: relatedValue
                });
              },
              setView: () => setView('examples'),
              onBack: () => setView('suggestions')
            };
            const isDisabled = fetching || required && !objectiveValue && !relatedValue;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "modal__content--justified"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.activity.title), _react.default.createElement("p", null, texts.activity.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "error"
            }), _react.default.createElement(_relatedActivity.RelatedActivityField, {
              value: relatedValue,
              setValue: setRelatedValue
            }), _react.default.createElement(_form.Textarea, {
              label: texts.objective.label,
              name: "objective",
              variant: "floating",
              value: objectiveValue,
              disabled: !!relatedValue,
              onChange: events.onChange,
              placeholder: texts.objective.placeholder
            }), _react.default.createElement(_form.Textarea, {
              label: texts.textarea.label,
              name: "observations",
              value: notes,
              variant: "floating",
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick,
              disabled: isDisabled
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./form/index
      ****************************/

      ims.set('./form/index', {
        hash: 2136171755,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsForm = SuggestionsForm;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _relatedActivity = require("./related-activity");
          var _context = require("../context");
          function SuggestionsForm() {
            const {
              fetching,
              setView,
              notes,
              setNotes,
              onGenerate,
              texts,
              error,
              required
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
              variant: "floating",
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
              disabled: fetching || required && !notes
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./form/related-activity
      ***************************************/

      ims.set('./form/related-activity', {
        hash: 642492394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RelatedActivityField = RelatedActivityField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function RelatedActivityField({
            value,
            setValue
          }) {
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
              setValue(event.target.value);
              // activity.specs.set({ related: event.target.value });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, texts.related.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: value,
              options: [defaultValue, ...options],
              onChange: onChange
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1849047747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("./context");
          var _examples = require("./examples");
          var _form = require("./form");
          var _requestCredits = require("./request-credits");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _components = require("pragmate-ui/components");
          /*bundle */ //@ts-ignore

          function RefinementModal(props) {
            const {
              owner,
              title,
              value = '',
              onConsume,
              activities,
              activity,
              showRelated,
              description,
              required,
              textarea,
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
                setError(texts.errors[e.text] ?? texts.errors.default);
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const handleCLose = () => {
              setNotes(value ?? '');
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
                description,
                textarea: textarea ? textarea : texts.textarea
              },
              onGenerate,
              setView,
              globalTexts,
              notes,
              fetching,
              required,
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
                suggestions: _react.default.createElement(_form.SuggestionsForm, null),
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
      __pkg.exports.descriptor = [{
        "im": "./activity",
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
        (require || prop === 'RefinementActivityModal') && _export("RefinementActivityModal", RefinementActivityModal = require ? require('./activity').RefinementActivityModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9leGFtcGxlcyIsIl9hY3Rpdml0eSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicHJvcHMiLCJvd25lciIsInRpdGxlIiwidmFsdWUiLCJvbkNvbnN1bWUiLCJhY3Rpdml0aWVzIiwiYWN0aXZpdHkiLCJzaG93UmVsYXRlZCIsImRlc2NyaXB0aW9uIiwicmVxdWlyZWQiLCJvYmplY3RpdmUiLCJzaG93Iiwib25DbG9zZSIsIm9uR2VuZXJhdGUiLCJjYWxsYmFjayIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJub3RlcyIsInNldE5vdGVzIiwib2JqZWN0aXZlVmFsdWUiLCJzZXRPYmplY3RpdmVWYWx1ZSIsInZpZXciLCJzZXRWaWV3IiwiTGF5b3V0QnJva2VyIiwibW9kZWwiLCJjcmVkaXRzIiwiYXZhaWxhYmxlIiwiZXJyb3IiLCJzZXRFcnJvciIsImdsb2JhbFRleHRzIiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzcGVjcyIsIkVycm9yIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJlIiwidGV4dCIsImhhbmRsZUNMb3NlIiwiY29udGV4dFZhbHVlIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsQ29udGV4dCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJzdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aXZpdHlGb3JtIiwiZXhhbXBsZXMiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJwbGFjZWhvbGRlciIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIl9saXN0Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm9uQmFjayIsIkl0ZW0iLCJpdGVtIiwib25DbGljayIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsImJvcmRlcmVkIiwidmFyaWFudCIsImFjdGlvbnMiLCJzZWxlY3QiLCJGcmFnbWVudCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJiYWNrIiwiX2Zvcm0iLCJfdWkiLCJfcmVsYXRlZEFjdGl2aXR5IiwicmVsYXRlZFZhbHVlIiwic2V0UmVsYXRlZFZhbHVlIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJjdXJyZW50VGFyZ2V0IiwicmVsYXRlZCIsImlzRGlzYWJsZWQiLCJGb3JtIiwiRXJyb3JSZW5kZXJlciIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwic2V0VmFsdWUiLCJUZXh0YXJlYSIsImxhYmVsIiwiZGlzYWJsZWQiLCJ0ZXh0YXJlYSIsImdlbmVyYXRlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlN1Z2dlc3Rpb25zRm9ybSIsIl9yZWFjdFNlbGVjdCIsImZpbHRlciIsInR5cGUiLCJtYXAiLCJpZCIsImRlZmF1bHRWYWx1ZSIsImluZGVwZW5kZW50Iiwic2V0IiwidGFyZ2V0IiwiZ2V0IiwibWF0ZXJpYWxzIiwiYXJ0aWNsZSIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIlJlZmluZW1lbnRNb2RhbCIsImNvbnNvbGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZXhhbXBsZXMudHN4IiwiL3RzL2Zvcm0vYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxlQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxhQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxNQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxRQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxTQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxTQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxlQUFBLEdBQUFWLE9BQUE7VUFFTztVQUFXLFNBQVVXLHVCQUF1QkEsQ0FBQ0MsS0FBSztZQUN4RCxNQUFNO2NBQ0xDLEtBQUs7Y0FDTEMsS0FBSztjQUNMQyxLQUFLO2NBQ0xDLFNBQVM7Y0FDVEMsVUFBVTtjQUNWQyxRQUFRO2NBQ1JDLFdBQVc7Y0FDWEMsV0FBVztjQUNYQyxRQUFRO2NBQ1JDLFNBQVM7Y0FDVEMsSUFBSTtjQUNKQyxPQUFPO2NBQ1BDLFVBQVUsRUFBRUM7WUFBUSxDQUNwQixHQUFHZCxLQUFLO1lBQ1QsTUFBTSxDQUFDZSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEIsTUFBQSxDQUFBdUIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRzFCLE1BQUEsQ0FBQXVCLE9BQUssQ0FBQ0MsUUFBUSxD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