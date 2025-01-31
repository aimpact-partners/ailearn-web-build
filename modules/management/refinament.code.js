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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 808249960,
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
            const onGenerate = async () => {
              try {
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
        hash: 4276485912,
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
              required,
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
            const isDisabled = fetching || required && !objectiveValue;
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
        hash: 1940701252,
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 606211965,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9leGFtcGxlcyIsIl9hY3Rpdml0eSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicHJvcHMiLCJvd25lciIsInRpdGxlIiwidmFsdWUiLCJvbkNvbnN1bWUiLCJhY3Rpdml0aWVzIiwiYWN0aXZpdHkiLCJzaG93UmVsYXRlZCIsImRlc2NyaXB0aW9uIiwicmVxdWlyZWQiLCJvYmplY3RpdmUiLCJzaG93Iiwib25DbG9zZSIsIm9uR2VuZXJhdGUiLCJjYWxsYmFjayIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJub3RlcyIsInNldE5vdGVzIiwib2JqZWN0aXZlVmFsdWUiLCJzZXRPYmplY3RpdmVWYWx1ZSIsInZpZXciLCJzZXRWaWV3IiwiTGF5b3V0QnJva2VyIiwibW9kZWwiLCJjcmVkaXRzIiwiYXZhaWxhYmxlIiwiZXJyb3IiLCJzZXRFcnJvciIsImdsb2JhbFRleHRzIiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJFcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwiZSIsImNvbnNvbGUiLCJoYW5kbGVDTG9zZSIsImNvbnRleHRWYWx1ZSIsImZpbmFsVmlldyIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbENvbnRleHQiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGl2aXR5Rm9ybSIsImV4YW1wbGVzIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwicGxhY2Vob2xkZXIiLCJfcmVhY3RTZWxlY3QiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInVzZU1vZGFsQ29udGV4dCIsImZpbHRlciIsIml0ZW0iLCJ0eXBlIiwibWFwIiwiaWQiLCJsYWJlbCIsIml0ZW1zIiwiZGVmYXVsdFZhbHVlIiwicmVsYXRlZCIsImluZGVwZW5kZW50Iiwib25DaGFuZ2UiLCJldmVudCIsInNwZWNzIiwic2V0IiwidGFyZ2V0IiwiZ2V0IiwibWF0ZXJpYWxzIiwiYXJ0aWNsZSIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJGcmFnbWVudCIsIlJlYWN0U2VsZWN0IiwiX2Zvcm0iLCJfdWkiLCJBY3Rpdml0eVN1Z2dlc3Rpb25zRm9ybSIsImV2ZW50cyIsImN1cnJlbnRUYXJnZXQiLCJvbkNsaWNrIiwib25CYWNrIiwiRm9ybSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwibmFtZSIsInZhcmlhbnQiLCJCdXR0b24iLCJhY3Rpb25zIiwiZ2VuZXJhdGUiLCJQcm9jZXNzQ29udGFpbmVyIiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2xpc3QiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiSXRlbSIsImJvcmRlcmVkIiwic2VsZWN0IiwiTGlzdCIsImNvbnRyb2wiLCJiYWNrIiwiX3JlbGF0ZWRBY3Rpdml0eSIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsIlN1Z2dlc3Rpb25zRm9ybSIsIlJlZmluZW1lbnRNb2RhbCIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uQ2FuY2VsIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0eS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0eS9zdWdnZXN0aW9ucy50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZXhhbXBsZXMudHN4IiwiL3RzL2Zvcm0vYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxlQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxhQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxNQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxRQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxTQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxTQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxlQUFBLEdBQUFWLE9BQUE7VUFFTztVQUFXLFNBQVVXLHVCQUF1QkEsQ0FBQ0MsS0FBSztZQUN4RCxNQUFNO2NBQ0xDLEtBQUs7Y0FDTEMsS0FBSztjQUNMQyxLQUFLO2NBQ0xDLFNBQVM7Y0FDVEMsVUFBVTtjQUNWQyxRQUFRO2NBQ1JDLFdBQVc7Y0FDWEMsV0FBVztjQUNYQyxRQUFRO2NBQ1JDLFNBQVM7Y0FDVEMsSUFBSTtjQUNKQyxPQUFPO2NBQ1BDLFVBQVUsRUFBRUM7WUFBUSxDQUNwQixHQUFHZCxLQUFLO1lBQ1QsTUFBTSxDQUFDZSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEIsTUFBQSxDQUFBdUIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRzFCLE1BQUEsQ0FBQXVCLE9B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