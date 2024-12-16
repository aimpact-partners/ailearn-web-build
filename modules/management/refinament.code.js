System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta7Modal) {
      dependency_2 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_3 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_4 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_5 = _framerMotion2;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_pragmateUi100Beta7Components) {
      dependency_7 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_8 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Form) {
      dependency_9 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7List) {
      dependency_10 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/modal', dependency_2], ['@aimpact/ailearn-app/components/ui', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['framer-motion', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/list', dependency_10]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 4220119379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementActivityModal = RefinementActivityModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _activity = require("./form/activity");
          var _context = require("./context");
          var _examples = require("./examples");
          var _requestCredits = require("./request-credits");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _components = require("pragmate-ui/components");
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
            const onGenerate = async () => {
              try {
                // if (required && (notes === '' || !notes)) {
                // 	setError('Please provide a description');
                // 	return;
                // }
                setFetching(true);
                if (!callback) {
                  throw Error('No callback provided');
                }
                const response = await callback({
                  notes,
                  objective: objectiveValue
                });
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
              objectiveValue,
              setObjectiveValue,
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
                suggestions: _react.default.createElement(_activity.SuggestionsActivityForm, null),
                examples: _react.default.createElement(_examples.SuggestionExamples, null)
              },
              placeholder: _react.default.createElement(_requestCredits.RequestCreditsContainer, null)
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
        hash: 910645956,
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
              variant: "floating",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
            }), _react.default.createElement(_form.Textarea, {
              label: texts.textarea.label,
              name: "observations",
              variant: "floating",
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
        hash: 1493496867,
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
        hash: 3032646908,
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
          var _relatedActivity = require("../activity/related-activity");
          function SuggestionsActivityForm() {
            const {
              fetching,
              setView,
              notes,
              setNotes,
              objectiveValue,
              setObjectiveValue,
              onGenerate,
              texts,
              error
            } = (0, _context.useModalContext)();
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
                  objective: objectiveValue
                });
              },
              setView: () => setView('examples'),
              onBack: () => setView('suggestions')
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "modal__content--justified"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.activity.title), _react.default.createElement("p", null, texts.activity.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_relatedActivity.RelatedActivityField, null), _react.default.createElement(_form.Textarea, {
              label: texts.objective.label,
              name: "objective",
              variant: "floating",
              value: objectiveValue,
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
              disabled: fetching
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
        hash: 222152093,
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
          var _context = require("../context");
          var _relatedActivity = require("../activity/related-activity");
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4290778743,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9hY3Rpdml0eSIsIl9jb250ZXh0IiwiX2V4YW1wbGVzIiwiX3JlcXVlc3RDcmVkaXRzIiwiX21haW5MYXlvdXQiLCJfY29tcG9uZW50cyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicHJvcHMiLCJvd25lciIsInRpdGxlIiwidmFsdWUiLCJvbkNvbnN1bWUiLCJhY3Rpdml0aWVzIiwiYWN0aXZpdHkiLCJzaG93UmVsYXRlZCIsImRlc2NyaXB0aW9uIiwicmVxdWlyZWQiLCJvYmplY3RpdmUiLCJzaG93Iiwib25DbG9zZSIsIm9uR2VuZXJhdGUiLCJjYWxsYmFjayIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJub3RlcyIsInNldE5vdGVzIiwib2JqZWN0aXZlVmFsdWUiLCJzZXRPYmplY3RpdmVWYWx1ZSIsInZpZXciLCJzZXRWaWV3IiwiTGF5b3V0QnJva2VyIiwibW9kZWwiLCJjcmVkaXRzIiwiYXZhaWxhYmxlIiwiZXJyb3IiLCJzZXRFcnJvciIsImdsb2JhbFRleHRzIiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJFcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwiZSIsImNvbnNvbGUiLCJoYW5kbGVDTG9zZSIsImNvbnRleHRWYWx1ZSIsImZpbmFsVmlldyIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbENvbnRleHQiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGl2aXR5Rm9ybSIsImV4YW1wbGVzIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwicGxhY2Vob2xkZXIiLCJfcmVhY3RTZWxlY3QiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInVzZU1vZGFsQ29udGV4dCIsImZpbHRlciIsIml0ZW0iLCJ0eXBlIiwibWFwIiwiaWQiLCJsYWJlbCIsIml0ZW1zIiwiZGVmYXVsdFZhbHVlIiwicmVsYXRlZCIsImluZGVwZW5kZW50Iiwib25DaGFuZ2UiLCJldmVudCIsInNwZWNzIiwic2V0IiwidGFyZ2V0IiwiZ2V0IiwibWF0ZXJpYWxzIiwiYXJ0aWNsZSIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJGcmFnbWVudCIsIlJlYWN0U2VsZWN0IiwiX2Zvcm0iLCJfdWkiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zRm9ybSIsImV2ZW50cyIsImN1cnJlbnRUYXJnZXQiLCJvbkNsaWNrIiwib25CYWNrIiwiRm9ybSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwibmFtZSIsInZhcmlhbnQiLCJCdXR0b24iLCJhY3Rpb25zIiwiZ2VuZXJhdGUiLCJQcm9jZXNzQ29udGFpbmVyIiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2xpc3QiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiSXRlbSIsImJvcmRlcmVkIiwic2VsZWN0IiwiTGlzdCIsImNvbnRyb2wiLCJiYWNrIiwiX3JlbGF0ZWRBY3Rpdml0eSIsImRpc2FibGVkIiwiU3VnZ2VzdGlvbnNGb3JtIiwiUmVmaW5lbWVudE1vZGFsIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwib25DYW5jZWwiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXR5L3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2FjdGl2aXR5L3N1Z2dlc3Rpb25zLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9leGFtcGxlcy50c3giLCIvdHMvZm9ybS9hY3Rpdml0eS50c3giLCIvdHMvZm9ybS9pbmRleC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGVBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLGFBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFNBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLFFBQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLFNBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLGVBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLFdBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLFdBQUEsR0FBQVYsT0FBQTtVQUVPO1VBQVcsU0FBVVcsdUJBQXVCQSxDQUFDQyxLQUFLO1lBQ3hELE1BQU07Y0FDTEMsS0FBSztjQUNMQyxLQUFLO2NBQ0xDLEtBQUs7Y0FDTEMsU0FBUztjQUNUQyxVQUFVO2NBQ1ZDLFFBQVE7Y0FDUkMsV0FBVztjQUNYQyxXQUFXO2NBQ1hDLFFBQVE7Y0FDUkMsU0FBUztjQUNUQyxJQUFJO2NBQ0pDLE9BQU87Y0FDUEMsVUFBVSxFQUFFQztZQUFRLENBQ3BCLEdBQUdkLEtBQUs7WUFDVCxNQUFNLENBQUNlLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc3QixNQUFBLENBQUE4QixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHakMsTUFBQSxDQUFBOEIsT0FBSyxDQUFDQyxRQUFR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QUFBLENBQUErQixhQUFBLENBQUN4RCxhQUFBLENBQUE2RCxlQUFlLFFBQ2ZsRSxNQUFBLENBQUE4QixPQUFBLENBQUErQixhQUFBLENBQUNsRCxXQUFBLENBQUF3RCxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRVIsU0FBUztjQUNwQlMsT0FBTyxFQUFFO2dCQUNSN0IsT0FBTyxFQUFFeEMsTUFBQSxDQUFBOEIsT0FBQSxDQUFBK0IsYUFBQSxDQUFDcEQsZUFBQSxDQUFBNkQsdUJBQXVCLE9BQUc7Z0JBQ3BDQyxXQUFXLEVBQUV2RSxNQUFBLENBQUE4QixPQUFBLENBQUErQixhQUFBLENBQUN1QyxLQUFBLENBQUFnQyxlQUFlLE9BQUc7Z0JBQ2hDM0QsUUFBUSxFQUFFekUsTUFBQSxDQUFBOEIsT0FBQSxDQUFBK0IsYUFBQSxDQUFDckQsU0FBQSxDQUFBa0Usa0JBQWtCO2VBQzdCO2NBQ0RDLFdBQVcsRUFBRTNFLE1BQUEsQ0FBQThCLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ3BELGVBQUEsQ0FBQTZELHVCQUF1QjtZQUFHLEVBQ3ZDLENBQ2UsQ0FDWCxDQUNlO1VBRTFCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFHQSxJQUFBdEUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9HLEdBQUEsR0FBQXBHLE9BQUE7VUFDQSxJQUFBTSxRQUFBLEdBQUFOLE9BQUE7VUFFTSxTQUFVcUUsdUJBQXVCQSxDQUFBO1lBQ3RDLE1BQU07Y0FBRTdDLE9BQU87Y0FBRVgsS0FBSztjQUFFRyxTQUFTO2NBQUUyQjtZQUFXLENBQUUsR0FBRyxJQUFBckMsUUFBQSxDQUFBdUUsZUFBZSxHQUFFO1lBRXBFLE1BQU13RCxTQUFTLEdBQUdBLENBQUEsS0FBTSxFQUFFO1lBRTFCLE9BQ0N0SSxNQUFBLENBQUE4QixPQUFBLENBQUErQixhQUFBLENBQUE3RCxNQUFBLENBQUE4QixPQUFBLENBQUFvRSxRQUFBLFFBQ0NsRyxNQUFBLENBQUE4QixPQUFBLENBQUErQixhQUFBLENBQUN3QyxHQUFBLENBQUFrQyxrQkFBa0I7Y0FDbEJ0SCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJILEtBQUssRUFBRUEsS0FBSztjQUNaVyxPQUFPLEVBQUVBLE9BQU87Y0FDaEIrRyxRQUFRLEVBQUUvRyxPQUFPO2NBQ2pCbUIsV0FBVyxFQUFFQSxXQUFXO2NBQ3hCMEYsU0FBUyxFQUFFQTtZQUFTLEVBQ25CLENBQ0E7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==