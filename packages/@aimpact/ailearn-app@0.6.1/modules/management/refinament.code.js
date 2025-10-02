System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/modal", "react@18.3.1", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/form/react-select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, RefinementActivityModal, RefinementModal, __beyond_pkg, hmr;
  _export({
    RefinementActivityModal: void 0,
    RefinementModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_1 = _aimpactAilearnApp061MainLayoutWidget;
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
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_8 = _aimpactAilearnApp061ComponentsUi;
    }, function (_pragmateUi108Form) {
      dependency_9 = _pragmateUi108Form;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_10 = _pragmateUi108FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/modules/management/refinament",
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
        hash: 1790043310,
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
        hash: 91905791,
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
              setValue(event.target.value);
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
        hash: 4152872104,
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
            _react.default.useEffect(() => {
              setNotes(value ?? '');
            }, [value]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9leGFtcGxlcyIsIl9hY3Rpdml0eSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicHJvcHMiLCJvd25lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsIm9uQ29uc3VtZSIsImFjdGl2aXRpZXMiLCJhY3Rpdml0eSIsInNob3dSZWxhdGVkIiwicmVxdWlyZWQiLCJvYmplY3RpdmUiLCJzaG93Iiwib25DbG9zZSIsIm9uR2VuZXJhdGUiLCJjYWxsYmFjayIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJub3RlcyIsInNldE5vdGVzIiwib2JqZWN0aXZlVmFsdWUiLCJzZXRPYmplY3RpdmVWYWx1ZSIsInZpZXciLCJzZXRWaWV3IiwiTGF5b3V0QnJva2VyIiwibW9kZWwiLCJjcmVkaXRzIiwiYXZhaWxhYmxlIiwiZXJyb3IiLCJzZXRFcnJvciIsImdsb2JhbFRleHRzIiwidXNlU3RvcmUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNwZWNzIiwiRXJyb3IiLCJyZXNwb25zZSIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImUiLCJ0ZXh0IiwiaGFuZGxlQ0xvc2UiLCJjb250ZXh0VmFsdWUiLCJmaW5hbFZpZXciLCJjcmVhdGVFbGVtZW50IiwiTW9kYWxDb250ZXh0IiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJBbmltYXRlUHJlc2VuY2UiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNBY3Rpdml0eUZvcm0iLCJleGFtcGxlcyIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInBsYWNlaG9sZGVyIiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2xpc3QiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25CYWNrIiwiSXRlbSIsIml0ZW0iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJ2YXJpYW50IiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImJhY2siLCJfdWkiLCJfZm9ybSIsIl9yZWxhdGVkQWN0aXZpdHkiLCJyZWxhdGVkVmFsdWUiLCJzZXRSZWxhdGVkVmFsdWUiLCJldmVudHMiLCJvbkNoYW5nZSIsImV2ZW50IiwibmFtZSIsImN1cnJlbnRUYXJnZXQiLCJyZWxhdGVkIiwiYWN0aXZpdHlTZWxlY3RlZCIsImdldCIsImlzRGlzYWJsZWQiLCJtYXRlcmlhbHMiLCJhcnRpY2xlIiwiRm9ybSIsIkVycm9yUmVuZGVyZXIiLCJSZWxhdGVkQWN0aXZpdHlGaWVsZCIsInNldFZhbHVlIiwiVGV4dGFyZWEiLCJsYWJlbCIsImRpc2FibGVkIiwidGV4dGFyZWEiLCJnZW5lcmF0ZSIsIlByb2Nlc3NDb250YWluZXIiLCJTdWdnZXN0aW9uc0Zvcm0iLCJfcmVhY3RTZWxlY3QiLCJmaWx0ZXIiLCJ0eXBlIiwibWFwIiwiaWQiLCJkZWZhdWx0VmFsdWUiLCJpbmRlcGVuZGVudCIsInNldCIsInRhcmdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIlJlZmluZW1lbnRNb2RhbCIsInVzZUJpbmRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCJdLCJzb3VyY2VzIjpbIi8vdHMvYWN0aXZpdHkudHN4IiwiLy90cy9jb250ZXh0LnRzeCIsIi8vdHMvZXhhbXBsZXMudHN4IiwiLy90cy9mb3JtL2FjdGl2aXR5LnRzeCIsIi8vdHMvZm9ybS9pbmRleC50c3giLCIvL3RzL2Zvcm0vcmVsYXRlZC1hY3Rpdml0eS50c3giLCIvL3RzL2luZGV4LnRzeCIsIi8vdHMvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLGVBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE1BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFNBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLFNBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLGVBQUEsR0FBQVYsT0FBQTtVQUdPO1VBQVcsU0FBVVcsdUJBQXVCQSxDQUFDQyxLQUFLO1lBQ3hELE1BQU07Y0FDTEMsS0FBSztjQUNMQyxLQUFLO2NBQ0xDLFdBQVc7Y0FDWEMsS0FBSztjQUNMQyxTQUFTO2NBQ1RDLFVBQVU7Y0FDVkMsUUFBUTtjQUNSQyxXQUFXO2NBQ1hDLFFBQVE7Y0FDUkMsU0FBUztjQUNUQyxJQUFJO2NBQ0pDLE9BQU87Y0FDUEMsVUFBVSxFQUFFQztZQUFRLENBQ3BCLEdBQUdkLEtBQUs7WUFDVCxNQUFNLENBQUNlLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd0QixNQUFBLENBQUF1QixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDQyxLQUFLLEVB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RDNELE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQzFELGFBQUEsQ0FBQStELGVBQWUsUUFDZjVELE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3pELFdBQUEsQ0FBQStELG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFUixTQUFTO2NBQ3BCUyxPQUFPLEVBQUU7Z0JBQ1I5QixPQUFPLEVBQUVqQyxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNuRCxlQUFBLENBQUE0RCx1QkFBdUIsT0FBRztnQkFDcENDLFdBQVcsRUFBRWpFLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3NDLEtBQUEsQ0FBQXlCLGVBQWUsT0FBRztnQkFDaENuRCxRQUFRLEVBQUVuRSxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNyRCxTQUFBLENBQUFrRSxrQkFBa0I7ZUFDN0I7Y0FDREMsV0FBVyxFQUFFckUsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkQsZUFBQSxDQUFBNEQsdUJBQXVCO1lBQUcsRUFDdkMsQ0FDZSxDQUNYLENBQ2U7VUFFMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakhBLElBQUFoRSxNQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBa0csR0FBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTtVQUVNLFNBQVVzRSx1QkFBdUJBLENBQUE7WUFDdEMsTUFBTTtjQUFFOUMsT0FBTztjQUFFWCxLQUFLO2NBQUVJLFNBQVM7Y0FBRTBCO1lBQVcsQ0FBRSxHQUFHLElBQUFwQyxRQUFBLENBQUF1RSxlQUFlLEdBQUU7WUFFcEUsTUFBTThELFNBQVMsR0FBR0EsQ0FBQSxLQUFNLEVBQUU7WUFFMUIsT0FDQ3RJLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQXZELE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdFLFFBQUEsUUFDQ3ZGLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FDLEdBQUEsQ0FBQTJDLGtCQUFrQjtjQUNsQjVILFNBQVMsRUFBRUEsU0FBUztjQUNwQkosS0FBSyxFQUFFQSxLQUFLO2NBQ1pXLE9BQU8sRUFBRUEsT0FBTztjQUNoQnNILFFBQVEsRUFBRXRILE9BQU87Y0FDakJtQixXQUFXLEVBQUVBLFdBQVc7Y0FDeEJpRyxTQUFTLEVBQUVBO1lBQVMsRUFDbkIsQ0FDQTtVQUVMIiwiaWdub3JlTGlzdCI6W119