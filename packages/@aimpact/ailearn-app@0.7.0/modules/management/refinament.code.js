System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/modal", "react@18.3.1", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/form/react-select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, RefinementActivityModal, RefinementModal, __beyond_pkg, hmr;
  _export({
    RefinementActivityModal: void 0,
    RefinementModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_1 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_2 = _beyondJsReact18Widgets118Hooks;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_pragmateUi108Components) {
      dependency_4 = _pragmateUi108Components;
    }, function (_pragmateUi108Modal) {
      dependency_5 = _pragmateUi108Modal;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi108List) {
      dependency_7 = _pragmateUi108List;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_8 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108Form) {
      dependency_9 = _pragmateUi108Form;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_10 = _pragmateUi108FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/management/refinament",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/main-layout.widget', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/modal', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/form/react-select', dependency_10]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 1889155604,
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
              description,
              value,
              onConsume,
              activities,
              activity,
              showRelated,
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
            //@ts-ignore
            (0, _hooks.useStore)(_mainLayout.LayoutBroker.model, ['credits.change'], () => setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'suggestions' : 'credits'));
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
              closeBackdrop: false,
              className: "refinement-modal"
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
        hash: 3802407510,
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
        hash: 4185683808,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsActivityForm = SuggestionsActivityForm;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
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
              activities,
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
            let activitySelected;
            if (relatedValue) {
              activitySelected = activities.get(relatedValue);
            }
            const isDisabled = fetching || required && !objectiveValue && !relatedValue || activitySelected && !activitySelected.materials.article;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "modal__content--justified"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("p", null, texts.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "error"
            }), _react.default.createElement(_relatedActivity.RelatedActivityField, {
              value: relatedValue,
              setValue: setRelatedValue
            }), !relatedValue && _react.default.createElement(_form.Textarea, {
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
        hash: 2421216361,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RelatedActivityField = RelatedActivityField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function RelatedActivityField() {
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
              // activity.specs.set({ related: event.target.value });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, texts.related.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: "",
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
        hash: 2913874486,
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
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const globalTexts = _mainLayout.LayoutBroker.globalTexts;
            const onCreditsChange = () => setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'suggestions' : 'credits');
            (0, _hooks.useStore)(_mainLayout.LayoutBroker.model, ['credits.change'], onCreditsChange);
            _react.default.useEffect(() => setNotes(value ?? ''), [value]);
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
              closeBackdrop: false,
              className: "refinement-modal"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9leGFtcGxlcyIsIl9hY3Rpdml0eSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicHJvcHMiLCJvd25lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsIm9uQ29uc3VtZSIsImFjdGl2aXRpZXMiLCJhY3Rpdml0eSIsInNob3dSZWxhdGVkIiwicmVxdWlyZWQiLCJvYmplY3RpdmUiLCJzaG93Iiwib25DbG9zZSIsIm9uR2VuZXJhdGUiLCJjYWxsYmFjayIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJub3RlcyIsInNldE5vdGVzIiwib2JqZWN0aXZlVmFsdWUiLCJzZXRPYmplY3RpdmVWYWx1ZSIsInZpZXciLCJzZXRWaWV3IiwiTGF5b3V0QnJva2VyIiwibW9kZWwiLCJjcmVkaXRzIiwiYXZhaWxhYmxlIiwiZXJyb3IiLCJzZXRFcnJvciIsImdsb2JhbFRleHRzIiwidXNlU3RvcmUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNwZWNzIiwiRXJyb3IiLCJyZXNwb25zZSIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImUiLCJ0ZXh0IiwiaGFuZGxlQ0xvc2UiLCJjb250ZXh0VmFsdWUiLCJmaW5hbFZpZXciLCJjcmVhdGVFbGVtZW50IiwiTW9kYWxDb250ZXh0IiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJjbGFzc05hbWUiLCJBbmltYXRlUHJlc2VuY2UiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNBY3Rpdml0eUZvcm0iLCJleGFtcGxlcyIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInBsYWNlaG9sZGVyIiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2xpc3QiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25CYWNrIiwiSXRlbSIsIml0ZW0iLCJvbkNsaWNrIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJ2YXJpYW50IiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImJhY2siLCJfdWkiLCJfZm9ybSIsIl9yZWxhdGVkQWN0aXZpdHkiLCJyZWxhdGVkVmFsdWUiLCJzZXRSZWxhdGVkVmFsdWUiLCJldmVudHMiLCJvbkNoYW5nZSIsImV2ZW50IiwibmFtZSIsImN1cnJlbnRUYXJnZXQiLCJyZWxhdGVkIiwiYWN0aXZpdHlTZWxlY3RlZCIsImdldCIsImlzRGlzYWJsZWQiLCJtYXRlcmlhbHMiLCJhcnRpY2xlIiwiRm9ybSIsIkVycm9yUmVuZGVyZXIiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInNldFZhbHVlIiwiVGV4dGFyZWEiLCJsYWJlbCIsImRpc2FibGVkIiwidGV4dGFyZWEiLCJnZW5lcmF0ZSIsIlByb2Nlc3NDb250YWluZXIiLCJTdWdnZXN0aW9uc0Zvcm0iLCJfcmVhY3RTZWxlY3QiLCJmaWx0ZXIiLCJ0eXBlIiwibWFwIiwiaWQiLCJkZWZhdWx0VmFsdWUiLCJpbmRlcGVuZGVudCIsInNldCIsInRhcmdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIlJlZmluZW1lbnRNb2RhbCIsIm9uQ3JlZGl0c0NoYW5nZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZXhhbXBsZXMudHN4IiwiL3RzL2Zvcm0vYWN0aXZpdHkudHN4IiwiL3RzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxlQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxhQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxNQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxRQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxTQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxTQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxlQUFBLEdBQUFWLE9BQUE7VUFHTztVQUFXLFNBQVVXLHVCQUF1QkEsQ0FBQ0MsS0FBSztZQUN4RCxNQUFNO2NBQ0xDLEtBQUs7Y0FDTEMsS0FBSztjQUNMQyxXQUFXO2NBQ1hDLEtBQUs7Y0FDTEMsU0FBUztjQUNUQyxVQUFVO2NBQ1ZDLFFBQVE7Y0FDUkMsV0FBVztjQUNYQyxRQUFRO2NBQ1JDLFNBQVM7Y0FDVEMsSUFBSTtjQUNKQyxPQUFPO2NBQ1BDLFVBQVUsRUFBRUM7WUFBUSxDQUNwQixHQUFHZCxLQUFLO1lBQ1QsTUFBTSxDQUFDZSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEIsTUFBQSxDQUFBdUIsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0MsS0FBSyxFQUFF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