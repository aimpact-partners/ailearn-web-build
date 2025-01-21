System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/modules/draft/store.code", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/modules/management/activity.code", "@aimpact/ailearn-app@0.3.1/modules/management/overview.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, ConfirmationModal, SupportingText, OwnerImage, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ConfirmationModal: void 0,
    SupportingText: void 0,
    OwnerImage: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp031ModulesDraftStoreCode) {
      dependency_4 = _aimpactAilearnApp031ModulesDraftStoreCode;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_7 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_8 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_9 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_13 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Base) {
      dependency_15 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_18 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp031ModulesManagementActivityCode) {
      dependency_20 = _aimpactAilearnApp031ModulesManagementActivityCode;
    }, function (_aimpactAilearnApp031ModulesManagementOverviewCode) {
      dependency_21 = _aimpactAilearnApp031ModulesManagementOverviewCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/modules/draft/store.code', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['react', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/base', dependency_15], ['pragmate-ui/image', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/list', dependency_19], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_20], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/draft.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3169454325,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("@aimpact/ailearn-app/modules/draft/store.code");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = _store.store;
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.qs.get('id'), this.uri.qs.get('activityId'));
            }
            hide() {
              this.#store.hide();
            }
          }
          exports.Controller = Controller;
        }
      });

      /**********************
      INTERNAL MODULE: ./trim
      **********************/

      ims.set('./trim', {
        hash: 750512083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.trimText = trimText;
          function trimText(input, charLimit) {
            if (input.length <= charLimit) return input;
            let trimmed = input.slice(0, charLimit);
            // Check if the slice ends in the middle of a word
            if (input[charLimit] && !/\s|[.,!?]/.test(input[charLimit])) {
              const remainder = input.slice(charLimit);
              const endOfWordIndex = remainder.search(/\s|[.,!?]/);
              trimmed += endOfWordIndex !== -1 ? remainder.slice(0, endOfWordIndex) : remainder;
            }
            return `${trimmed}...`;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 209451526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/coins/alert
      ***********************************/

      ims.set('./views/coins/alert', {
        hash: 93663821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsAlert = CoinsAlert;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function CoinsAlert({
            show,
            onClose,
            texts
          }) {
            if (!show) return null;
            const {
              title,
              description,
              action
            } = texts.coins.alert;
            return _react.default.createElement(_modal.AlertModal, {
              buttonLabel: action,
              onConfirm: onClose,
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, title), _react.default.createElement(_ui.Battery, {
              percent: "100",
              className: "lg"
            }), _react.default.createElement("p", null, description)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/coins/coins-modal
      *****************************************/

      ims.set('./views/coins/coins-modal', {
        hash: 767318504,
        creator: function (require, exports) {
          // import React from 'react';
          // import { ConfirmModal, Modal } from 'pragmate-ui/modal';
          // import { Battery, ErrorRenderer } from '@aimpact/ailearn-app/components/ui';
          // export function CoinsModal({ store, show, onClose, texts }) {
          // 	if (!show) return null;
          // 	const [fetching, setFetching] = React.useState(false);
          // 	const [error, setError] = React.useState();
          // 	texts = texts.coins.modal;
          // 	const onConfirm = async () => {
          // 		try {
          // 			setFetching(true);
          // 			await store.model.getCredits();
          // 			onClose();
          // 		} catch (e) {
          // 			setError(texts.errors.noCredits);
          // 		} finally {
          // 			setFetching(false);
          // 		}
          // 	};
          // 	return (
          // 		<ConfirmModal
          // 			show
          // 			className="modal-sm"
          // 			actions={{
          // 				confirm: { label: texts.actions.confirm, variant: 'primary' },
          // 				cancel: { label: texts.actions.cancel, variant: 'primary', bordered: true }
          // 			}}
          // 			onConfirm={onConfirm}
          // 			onCancel={onClose}
          // 			onClose={onClose}
          // 		>
          // 			<header>
          // 				<h3>{texts.title}</h3>
          // 				<ErrorRenderer error={error} />
          // 				<Battery percent="100" className="lg" />
          // 				<p>{texts.description}</p>
          // 			</header>
          // 		</ConfirmModal>
          // 	);
          // }
          "use strict";
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/FixedAlert
      *********************************************/

      ims.set('./views/components/FixedAlert', {
        hash: 1518437182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          exports.FixedAlert = FixedAlert;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
          function FixedAlert({
            type = 'success',
            message,
            className,
            time = 3000,
            show = true
          }) {
            className = `alert-message alert-message--${type}${className ? ` ${className}` : ``}`;
            const {
              store
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              },
              className: className
            }, message);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/alert
      ****************************************/

      ims.set('./views/components/alert', {
        hash: 2743908413,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertRenderer = AlertRenderer;
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
          function AlertRenderer({
            type = 'success',
            message,
            className,
            time = 3000,
            show = true
          }) {
            className = `alert-message alert-message--${type}${className ? ` ${className}` : ``}`;
            const [remove, setRemove] = _react.default.useState(false);
            const [timer, setTimer] = _react.default.useState(null);
            const {
              store
            } = (0, _context.useModuleContext)();
            _react.default.useEffect(() => {
              if (!show) {
                setTimer(undefined);
                setRemove(undefined);
                return;
              }
              const timer = setTimeout(() => {
                if (show) {
                  setRemove(true);
                }
                store.clearAlert();
              }, time);
              setTimer(timer);
              return () => clearTimeout(timer);
            }, [message, show]);
            if (remove || !show) return null;
            return _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              },
              className: className
            }, message);
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/radio-button
      ***********************************************/

      ims.set('./views/components/radio-button', {
        hash: 2984847910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function RadioButton({
            name,
            onChange,
            label,
            selected = 0
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: store.fetching || store.model.fetching
            };
            const data = {
              audience: [],
              duration: [],
              language: []
            };
            const output = data[name]?.map(([value, label], index) => _react.default.createElement(_components.Button, {
              name: name,
              ...disabled,
              "data-index": index,
              onClick: () => onChange(value),
              key: index,
              value: value
            }, label)) || [];
            return _react.default.createElement("div", {
              className: "radio-button__container"
            }, _react.default.createElement("label", {
              htmlFor: name
            }, label), _react.default.createElement(_components.ButtonGroup, {
              selected: selected,
              ...disabled
            }, output));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1919115792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSuggestionsContext = exports.useModuleContext = exports.useDraftManagementContext = exports.SuggestionsContext = exports.ModuleContext = exports.DraftManagementContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
          const DraftManagementContext = exports.DraftManagementContext = _react.default.createContext({});
          const useDraftManagementContext = () => _react.default.useContext(DraftManagementContext);
          exports.useDraftManagementContext = useDraftManagementContext;
          const SuggestionsContext = exports.SuggestionsContext = _react.default.createContext({});
          const useSuggestionsContext = () => _react.default.useContext(SuggestionsContext);
          exports.useSuggestionsContext = useSuggestionsContext;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/form/animated-div
      *****************************************/

      ims.set('./views/form/animated-div', {
        hash: 2040524209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedDiv = AnimatedDiv;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedDiv({
            children,
            cls
          } = {
            children: null,
            cls: ''
          }) {
            return _react.default.createElement(_framerMotion.motion.div, {
              className: "objective__container",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/form/confirmation-modal
      ***********************************************/

      ims.set('./views/form/confirmation-modal', {
        hash: 2696235432,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = ConfirmationModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _image = require("./image");
          var _components = require("pragmate-ui/components");
          var _trim = require("../../trim");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function ConfirmationModal({
            store,
            values,
            show,
            onClose
          }) {
            const {
              owner
            } = values;
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            if (!show) return null;
            // const texts = store.texts;
            const onConfirm = async () => {
              try {
                setLoading(true);
                await store.save({
                  ...values,
                  state: 'created'
                });
                store.breadcrumb.lastItem.label = (0, _trim.trimText)(store.model.objective, 15);
                _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
                onClose();
                store.setAlert({
                  message: store.texts.setup.messages.save,
                  position: 'objective'
                });
              } catch (e) {
                setError(store.globalTexts.errors.DEFAULT_ERROR);
              } finally {
                setLoading(false);
              }
            };
            const {
              globalTexts
            } = store;
            const texts = store.texts.setup.confirmation;
            const actionTexts = globalTexts.actions;
            const name = owner.entity === 'user' ? owner.displayName : owner.name;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-sm modal-centered",
              onClose: onClose
            }, _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement("div", {
              className: "owner-container"
            }, _react.default.createElement(_image.OwnerImage, {
              owner: owner
            }), _react.default.createElement("div", {
              className: "owner-info"
            }, _react.default.createElement("h6", null, name), _react.default.createElement("span", null, texts.ownerDescription, " "))), _react.default.createElement("div", {
              className: "primary-container text-center"
            }, _react.default.createElement("span", null, texts.description)), _react.default.createElement("section", {
              className: "actions__container"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose,
              disabled: loading
            }, actionTexts.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onConfirm,
              disabled: loading
            }, actionTexts.continue))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/form/fields/audience
      ********************************************/

      ims.set('./views/form/fields/audience', {
        hash: 3545406610,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceField = AudienceField;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _react = require("react");
          var _context = require("../../context");
          function AudienceField({
            disabled
          }) {
            const {
              texts: {
                audience: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              values
            } = (0, _context.useModuleContext)();
            const [options, setOptions] = _react.default.useState([]);
            (0, _hooks.useBinder)([store], () => {
              const items = store.audiences.map(audience => ({
                value: audience.id,
                label: audience.name
              }));
              setOptions([...items]);
            }, 'fetching.data');
            const onChange = async event => {
              store.setCurrentAudience(event.target.value);
              setValues(values => {
                return {
                  ...values,
                  audience: {
                    category: event.target.value
                  }
                };
              });
            };
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.label), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.select,
              options: options,
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/form/fields/language
      ********************************************/

      ims.set('./views/form/fields/language', {
        hash: 928304762,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageFields = LanguageFields;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          var _audience = require("./audience");
          var _level = require("./level");
          function LanguageFields({
            disabled
          }) {
            const {
              texts,
              store,
              setValues
            } = (0, _context.useModuleContext)();
            const onChange = async event => {
              setValues(values => ({
                ...values,
                audience: {},
                language: event.target.value
              }));
              store.loadAudiences(event.target.value);
            };
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const isDisabled = {
              isDisabled: store.saved || disabled
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.languages.select.placeholder,
              value: store.model.language,
              name: "audience",
              options: options,
              onChange: onChange,
              ...isDisabled
            })), _react.default.createElement(_audience.AudienceField, {
              disabled: disabled
            }), _react.default.createElement(_level.AudienceLevelField, {
              disabled: disabled
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/form/fields/level
      *****************************************/

      ims.set('./views/form/fields/level', {
        hash: 4096297732,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceLevelField = AudienceLevelField;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _react = require("react");
          var _context = require("../../context");
          function AudienceLevelField({
            disabled
          }) {
            const {
              texts: {
                level: texts
              },
              values,
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues
            } = (0, _context.useModuleContext)();
            const [options, setOptions] = _react.default.useState([]);
            (0, _hooks.useBinder)([store], () => {
              const items = store.audienceLevels.map(item => ({
                value: item.id,
                label: item.label
              }));
              setOptions(items);
            }, 'audience.changed');
            const onChange = event => {
              const audience = {
                category: values.audience.category,
                level: event.target.value
              };
              setValues(values => {
                return {
                  ...values,
                  audience
                };
              });
            };
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length || !values.audience?.category
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.label), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "level",
              placeholder: texts.select,
              options: options,
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/objective
      *********************************************/

      ims.set('./views/form/fields/objective', {
        hash: 388578212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _alert = require("../../components/alert");
          var _context = require("../../context");
          function ObjectiveField() {
            const {
              values,
              texts,
              onChange,
              store
            } = (0, _context.useModuleContext)();
            const formTexts = texts.setup.form;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "objective-field "
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.objective,
              name: "objective",
              placeholder: formTexts.objective.textArea,
              counter: true,
              maxLength: 500
            }), _react.default.createElement(_alert.AlertRenderer, {
              show: !!store.alert && store.alert.position === 'objective',
              type: store?.alert?.type,
              className: "alert-message alert-message--success alert-fixed",
              message: store?.alert?.message
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/ownership
      *********************************************/

      ims.set('./views/form/fields/ownership', {
        hash: 1519041459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _react = require("react");
          var _context = require("../../context");
          var _supportingText = require("./supporting-text");
          function OwnershipField({
            disabled
          } = {}) {
            const {
              texts: {
                setup: {
                  form: wTexts
                }
              },
              texts: {
                objectiveTour: tour
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              texts
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState(null);
            const [supportingText, setSupportingText] = _react.default.useState({
              content: '',
              variant: ''
            });
            let defaultOption = {
              value: '',
              label: wTexts.administrator.select
            };
            if (store.model.owner) {
              defaultOption = {
                value: store.model.owner.id,
                label: store.model.owner.name
              };
            }
            const value = store.model.owner?.id;
            const attrs = {
              isDisabled: store.ownerships?.length === 0 || store.saved || disabled
            };
            const onChange = async event => {
              setSupportingText({
                content: '',
                variant: ''
              });
              const owner = await store.getAdministrator(event.target.value);
              if (owner.entity === 'organization') {
                await owner.getCredits();
              }
              setSelected(owner);
              if (owner.coins?.modules === undefined) {
                console.error('the user does not have coins data loaded, refresh the page and try again.');
                return;
              }
              const {
                count
              } = owner.coins.modules;
              const messages = texts.alerts.coins;
              const message = count ? messages.available : messages.unavailable;
              const type = count ? 'success' : 'error';
              setSupportingText({
                content: message,
                variant: type
              });
              setValues(values => ({
                ...values,
                owner: {
                  id: owner.id
                }
              }));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.TourStep, {
              texts: tour,
              name: "administrator",
              as: "div",
              className: "administrator"
            }, _react.default.createElement("div", {
              className: "field-container"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, wTexts.administrator.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: value,
              placeholder: wTexts.administrator.select,
              name: "owner",
              options: store.ownerships,
              onChange: onChange,
              ...attrs
            }), _react.default.createElement(_supportingText.SupportingText, {
              ...supportingText
            }))));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/form/fields/supporting-text
      ***************************************************/

      ims.set('./views/form/fields/supporting-text', {
        hash: 3724854723,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SupportingText = SupportingText;
          var _react = require("react");
          const variantClassMap = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary',
            success: 'text-success',
            info: 'text-info',
            error: 'text-error',
            warning: 'text-warning',
            default: 'text-default'
          };
          /*bundle*/
          function SupportingText({
            content,
            variant = 'default',
            className = '',
            ...rest
          }) {
            if (!content) return null;
            const variantClass = variantClassMap[variant] || variantClassMap.default;
            const combinedClassName = `pui-supporting-text ${variantClass} ${className}`.trim();
            return _react.default.createElement("div", {
              className: combinedClassName,
              ...rest
            }, _react.default.createElement("span", null, content));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/image
      **********************************/

      ims.set('./views/form/image', {
        hash: 315420214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerImage = OwnerImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function OwnerImage({
            owner
          }) {
            if (!owner?.photoUrl) {
              return _react.default.createElement(_icons.AppIcon, {
                icon: "school",
                className: "pui-image"
              });
            }
            return _react.default.createElement(_image.Image, {
              src: owner.photoUrl,
              className: "circle"
            });
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 660982381,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftForm = DraftForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _alert = require("../components/alert");
          var _context = require("../context");
          var _animatedDiv = require("./animated-div");
          var _language = require("./fields/language");
          var _objective = require("./fields/objective");
          var _ownership = require("./fields/ownership");
          var _suggestions = require("./suggestions");
          var _action = require("./suggestions/action");
          function DraftForm() {
            const {
              values,
              setValues,
              store,
              texts,
              saved,
              fetching,
              togglePathway,
              toggleConfirmation
            } = (0, _context.useModuleContext)();
            const label = store.model.state && saved ? store.globalTexts.actions.continue : store.globalTexts.actions.save;
            // const { ref: mainRef } = useDriverTour('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
            const [processing, setProcessing] = React.useState(false);
            const invalidForm = !values.owner || !values.audience || !values.objective || !values.language;
            const isDisabled = invalidForm || processing || store.processing;
            (0, _hooks.useBinder)([store], () => setProcessing(store.fetchingSuggestions || store.fetching), ['fetchingSuggestions.changed', 'fetching.data']);
            const onCofirmed = async () => {
              setProcessing(true);
              if (store.model.state && store.model.state === values.state && store.model.objective === values.objective) return;
              await setValues({
                ...values,
                updated: false
              });
              if (store.model.state === 'created') return;
              toggleConfirmation();
              setProcessing(false);
            };
            const onSubmit = async () => {
              try {
                if (processing) return;
                await onCofirmed();
                if (saved && store.model.state === 'created') {
                  togglePathway();
                  return;
                }
              } catch (e) {
                console.log('ajk');
                console.error(e);
              } finally {
                setProcessing(false);
              }
            };
            const cls = `form-create-draft__container ${fetching ? 'fetching' : ''} ${processing ? 'is-processing' : ''}`;
            const clsContainer = processing ? 'is-processing' : '';
            return React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.items.length
            }, React.createElement(_ui.DriverTourContainer, {
              name: "moduleObjective",
              className: clsContainer
            }, React.createElement(_form.Form, {
              className: cls,
              onSubmit: onSubmit
            }, React.createElement(_animatedDiv.AnimatedDiv, null, React.createElement("section", {
              className: "form-body"
            }, React.createElement("header", {
              className: "setup-form-header"
            }, React.createElement("h1", null, texts.setup.title)), React.createElement(_alert.AlertRenderer, {
              type: store.alert?.type,
              message: store.alert?.message,
              show: !!store.alert && store.alert.position === 'top',
              className: "alert--small"
            }), React.createElement("section", {
              className: "wizard-first-step-container"
            }, React.createElement(_ownership.OwnershipField, {
              disabled: processing
            }), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "parameters",
              as: "div",
              className: "parameters-container"
            }, React.createElement(_language.LanguageFields, {
              disabled: processing
            }))), React.createElement(_ui.TourStep, {
              as: "section",
              texts: texts.objectiveTour,
              name: "objective",
              className: "form-wizard__objective-section relative-container"
            }, React.createElement(_objective.ObjectiveField, null))), React.createElement(_suggestions.ObjectiveSuggestions, {
              setProcessing: setProcessing,
              processing: processing
            }), React.createElement("footer", null, React.createElement(_action.SuggestionsAction, null), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "save",
              className: "save-button__container"
            }, React.createElement(_components.Button, {
              type: "submit",
              block: true,
              disabled: isDisabled,
              variant: "primary"
            }, label)))), React.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/form/suggestions/action
      ***********************************************/

      ims.set('./views/form/suggestions/action', {
        hash: 3949382729,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function SuggestionsAction({}) {
            const {
              store: {
                globalTexts: {
                  actions: textActions
                }
              },
              store,
              values,
              saved
            } = (0, _context.useModuleContext)();
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const closeModal = () => setShowCoinsModal(false);
            const generateImprovements = async () => {
              try {
                if (!store.hasCredits) {
                  setShowCoinsModal(true);
                  return;
                }
                await store.getObjectiveImprovements({
                  objective: values.objective
                });
              } catch (e) {
                console.error(e);
              }
            };
            const onConsume = async () => {
              const response = await store.model.consumeCoins();
              if (response.error) return response;
              const response2 = await store.getObjectiveImprovements({
                objective: values.objective
              });
              setShowCoinsModal(false);
              return response2;
            };
            if (store.improvements && !store.improvements.irrelevant) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.AIButton, {
              disabled: !saved,
              ensure: false,
              onClick: generateImprovements,
              variant: "primary",
              bordered: true
            }, textActions.analyse), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              owner: store.model?.owner,
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              onConsume: onConsume
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/form/suggestions/index
      **********************************************/

      ims.set('./views/form/suggestions/index', {
        hash: 399583266,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestions = ObjectiveSuggestions;
          var _react = require("react");
          var _context = require("../../context");
          var _objective = require("./objective");
          var _list = require("./list");
          function ObjectiveSuggestions({
            processing,
            setProcessing
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [improvedObjective, setImprovedObjective] = _react.default.useState(false);
            // if there are no improvements, show the action to generate suggestions
            if (!store.improvements || store.improvements.irrelevant) return null;
            const contextValue = {
              improvedObjective,
              setImprovedObjective,
              processing,
              setProcessing
            };
            return _react.default.createElement(_context.SuggestionsContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_objective.ObjectiveImproved, null), _react.default.createElement(_list.SuggestionsList, {
              block: !improvedObjective
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/form/suggestions/list/index
      ***************************************************/

      ims.set('./views/form/suggestions/list/index', {
        hash: 3395067186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsList = SuggestionsList;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../context");
          var _item = require("./item");
          function SuggestionsList({
            block
          }) {
            const {
              texts: {
                suggestions: texts
              },
              store,
              store: {
                globalTexts: {
                  actions: textActions
                }
              },
              values,
              saved,
              setValues
            } = (0, _context.useModuleContext)();
            const {
              setImprovedObjective
            } = (0, _context.useSuggestionsContext)();
            const [selected, setSelected] = _react.default.useState(new Set());
            if (!store.improvements) return null;
            const {
              suggestions
            } = store.improvements;
            const apply = async event => {
              const specs = {
                objective: values.objective,
                improvements: Array.from(selected).map(i => store.improvements.suggestions[i].suggestion)
              };
              await store.generateObjective(specs);
              setImprovedObjective(false);
              setValues(values => ({
                ...values,
                objective: store.model.objective
              }));
            };
            const onCancel = () => {
              setSelected(new Set());
              setImprovedObjective(false);
              store.clearImprovements();
            };
            const disabled = {
              disabled: !selected.size || block
            };
            const cls = `objective-suggestions__container${block ? ' is-disabled' : ''}`;
            return _react.default.createElement("section", {
              className: cls
            }, _react.default.createElement(_list.List, {
              className: "objective-suggestions__list",
              specs: {
                selected,
                setSelected,
                block
              },
              control: _item.ObjectiveSuggestionsItem,
              items: suggestions
            }), _react.default.createElement("div", {
              className: "section__actions"
            }, _react.default.createElement("span", null, texts.total, ": ", selected.size), _react.default.createElement("div", {
              className: "section__actions"
            }, _react.default.createElement(_components.Button, {
              disabled: block,
              onClick: onCancel,
              variant: "primary",
              bordered: true
            }, textActions.removeSuggestions), _react.default.createElement(_components.Button, {
              ...disabled,
              variant: "primary",
              onClick: apply
            }, textActions.applySuggestions))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/form/suggestions/list/item
      **************************************************/

      ims.set('./views/form/suggestions/list/item', {
        hash: 2063911443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestionsItem = ObjectiveSuggestionsItem;
          var _react = require("react");
          var _context = require("../../../context");
          function ObjectiveSuggestionsItem(props = {}) {
            const {
              index,
              item,
              block,
              selected,
              setSelected
            } = props;
            const {
              store,
              texts: {
                suggestions: texts
              }
            } = (0, _context.useModuleContext)();
            const onSelect = event => {
              event.stopPropagation();
              const index = parseInt(event.currentTarget.dataset.index);
              const elements = selected;
              elements.has(index) ? elements.delete(index) : elements.add(index);
              store.improvementsSelected.add(index);
              setSelected(new Set(elements));
            };
            const cls = `suggestion__item${selected.has(index) ? ' selected' : ''}`;
            const attrs = {
              className: cls,
              'data-index': index
            };
            if (!block) attrs.onClick = onSelect;
            return _react.default.createElement("div", {
              className: cls,
              "data-index": index,
              ...attrs
            }, _react.default.createElement("header", null, _react.default.createElement("span", {
              className: "suggestion-label"
            }, texts.origin), _react.default.createElement("span", {
              className: "suggestion-reference"
            }, item.reference)), _react.default.createElement("div", {
              className: "item__content"
            }, _react.default.createElement("header", null, _react.default.createElement("span", {
              className: "suggestion-label"
            }, texts.label)), item.suggestion));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/form/suggestions/objective
      **************************************************/

      ims.set('./views/form/suggestions/objective', {
        hash: 4225891460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveImproved = ObjectiveImproved;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function ObjectiveImproved() {
            const {
              texts: {
                objectiveTour: tour,
                suggestions: {
                  objective: {
                    actions: texts
                  }
                }
              },
              store,
              setValues,
              values,
              store: {
                improvements
              }
            } = (0, _context.useModuleContext)();
            const {
              improvedObjective,
              setImprovedObjective
            } = (0, _context.useSuggestionsContext)();
            const {
              improved
            } = improvements;
            const [updating, setUpdating] = _react.default.useState(false);
            if (!improvements || improvedObjective) return null;
            const onClick = async event => {
              setUpdating(true);
              if (event.currentTarget.value === 'true') {
                await store.save({
                  objective: improved
                });
                setValues({
                  ...values,
                  objective: improved
                });
              }
              setImprovedObjective(true);
              setUpdating(false);
            };
            const cls = `objective-suggestion ${updating ? 'is-processing' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("h3", null, improved), _react.default.createElement("div", {
              className: "objective-suggestion__actions"
            }, _react.default.createElement("span", {
              className: "primary-text"
            }, texts.label), _react.default.createElement("div", {
              className: "section__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              value: "false",
              onClick: onClick
            }, texts.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              value: "true",
              onClick: onClick
            }, texts.confirm))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 4200118861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3737514060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          var _overview = require("@aimpact/ailearn-app/modules/management/overview.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("./context");
          var _form = require("./form");
          var _confirmationModal = require("./form/confirmation-modal");
          var _pathway = require("./pathway");
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [fetching, setFetching] = React.useState(store.fetching);
            const [isFetching, setIsFetching] = React.useState(false);
            const [activePanel] = React.useState(0);
            const [current, setCurrent] = React.useState(0);
            const [values, setValues] = React.useState({
              ...store.model?.getProperties()
            });
            const [error, setError] = React.useState();
            const [showPathway, setShowPathway] = React.useState(false);
            const [showConfirmation, setShowConfirmation] = React.useState(false);
            const togglePathway = () => setShowPathway(!showPathway);
            const toggleConfirmation = () => setShowConfirmation(!showConfirmation);
            (0, _hooks.useBinder)([store], () => {
              setValues({
                ...store.model?.getProperties()
              });
              setFetching(store?.fetching);
            });
            if (!store.ready) return null;
            // TODO: add preload screen (or not
            const onChange = event => {
              store.model.set({
                [event.currentTarget.name]: event.currentTarget.value
              });
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value,
                updated: true
              });
            };
            const value = {
              store,
              onChange,
              texts: store.texts,
              activePanel,
              current,
              setCurrent,
              improvements: store.improvements,
              error,
              setError,
              fetching: fetching || isFetching,
              setIsFetching,
              togglePathway,
              saved: store.saved,
              values,
              setValues,
              toggleConfirmation
            };
            return React.createElement(React.Fragment, null, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_components.ConditionalContainer, {
              condition: store.view,
              options: {
                setup: React.createElement(_form.DraftForm, null),
                overview: React.createElement(_overview.ModuleOverview, {
                  store: store,
                  uri: uri,
                  fetching: fetching
                }),
                activity: React.createElement(_activity.ModuleActivityForm, {
                  store: store,
                  activity: store.activitySelected
                })
              }
            })), React.createElement(_confirmationModal.ConfirmationModal, {
              store: store,
              values: values,
              show: showConfirmation,
              onClose: toggleConfirmation
            }), React.createElement(_pathway.PathwayGeneration, {
              show: showPathway,
              setValues: setValues,
              store: store,
              values: values,
              onClose: togglePathway
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/pathway/animations
      ******************************************/

      ims.set('./views/pathway/animations', {
        hash: 3779295974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            slideDown: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            default: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/pathway/confirmation
      ********************************************/

      ims.set('./views/pathway/confirmation', {
        hash: 3901616995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationForm = ConfirmationForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _context = require("./context");
          var _animations = require("./animations");
          function ConfirmationForm() {
            const {
              texts,
              setView,
              onClose,
              store
            } = (0, _context.usePathwayContext)();
            const {
              globalTexts
            } = store;
            const onConfirm = async () => setView('selection');
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "centered-container"
            }, _react.default.createElement("header", {
              className: "modal__header"
            }, _react.default.createElement("h3", null, texts.refine.confirm.title)), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, texts.refine.confirm.description)), _react.default.createElement("footer", {
              className: "actions mt-30 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onConfirm
            }, globalTexts.actions.confirm)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/pathway/context
      ***************************************/

      ims.set('./views/pathway/context', {
        hash: 4158332328,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.usePathwayContext = exports.PathwayContext = void 0;
          var _react = require("react");
          const PathwayContext = exports.PathwayContext = _react.default.createContext({});
          const usePathwayContext = () => _react.default.useContext(PathwayContext);
          exports.usePathwayContext = usePathwayContext;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/pathway/examples
      ****************************************/

      ims.set('./views/pathway/examples', {
        hash: 739492676,
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
          var _framerMotion = require("framer-motion");
          var _animations = require("./animations");
          function SuggestionExamples() {
            const {
              texts,
              setView,
              setNotes
            } = (0, _context.usePathwayContext)();
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
              }, texts.refine.examples.actions.select)));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__content--justified"
            }, _react.default.createElement("h3", null, texts.refine.examples.title), _react.default.createElement(_list.List, {
              className: "modal__list--options-selection",
              items: texts.refine.examples.items,
              control: Item
            }), _react.default.createElement("div", {
              className: "flex-container flex-end mt-30"
            }, _react.default.createElement("div", {
              className: "modal__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "default",
              onClick: onBack
            }, texts.refine.examples.actions.back)))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/pathway/forms/ai-form
      *********************************************/

      ims.set('./views/pathway/forms/ai-form', {
        hash: 1870286655,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIGenerationForm = AIGenerationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          var _totalActivities = require("./total-activities");
          var _animations = require("../animations");
          function AIGenerationForm({}) {
            const {
              store,
              texts,
              values,
              setView,
              notes,
              setNotes,
              onClose
            } = (0, _context.usePathwayContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onGenerate = async () => {
              try {
                setFetching(true);
                await store.generateModuleSuggestion({
                  ...store.model.getProperties(),
                  notes
                });
                onClose();
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: onGenerate,
              setView: () => setView('examples'),
              onBack: () => setView('selection')
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form"
            }, _react.default.createElement(_form.Form, {
              onSubmit: events.onClick
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.activities.title)), _react.default.createElement(_totalActivities.TotalActivities, null), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: notes,
              floating: true,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: events.onBack
            }, store.globalTexts.actions.back), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick,
              disabled: fetching || !values.duration
            }, store.globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/pathway/forms/decision-type
      ***************************************************/

      ims.set('./views/pathway/forms/decision-type', {
        hash: 3138892140,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DecistionType = DecistionType;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _animations = require("../animations");
          function DecistionType({}) {
            const {
              texts,
              store,
              onClose
            } = (0, _context.usePathwayContext)();
            const formTexts = texts.setup.generation;
            const actions = texts.setup.actions;
            const [valueSelected, setValueSelected] = _react.default.useState();
            const {
              setView
            } = (0, _context.usePathwayContext)();
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setValueSelected(value);
            };
            const onClick = () => {
              if (valueSelected === 'yes' && !store.model.credits.total) {
                setView('request');
                return;
              }
              setView(valueSelected === 'yes' ? 'ai' : 'manual');
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, formTexts.title), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, formTexts.subtitle))), _react.default.createElement(_ui.RadioButton, {
              checked: valueSelected === 'yes',
              onChange: onChange,
              label: formTexts.options.ai,
              value: "yes",
              name: "generationWay"
            }), _react.default.createElement(_ui.RadioButton, {
              checked: valueSelected === 'manually',
              onChange: onChange,
              label: formTexts.options.manually,
              value: "manually",
              name: "generationWay"
            }), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose
            }, actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: !valueSelected,
              onClick: onClick
            }, actions.continue)));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/pathway/forms/manual
      ********************************************/

      ims.set('./views/pathway/forms/manual', {
        hash: 139855539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualForm = ManualForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _framerMotion = require("framer-motion");
          var _animations = require("../animations");
          function ManualForm({}) {
            let {
              texts,
              store,
              values,
              setValues
            } = (0, _context.usePathwayContext)();
            const formTexts = texts.setup.generation;
            const actions = store.globalTexts.actions;
            const {
              setView,
              onClose
            } = (0, _context.usePathwayContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [formValues, setFormValues] = _react.default.useState({
              title: '',
              description: ''
            });
            const onCancel = () => setView('selection');
            texts = texts.pathway;
            const onSubmit = async () => {
              try {
                setFetching(true);
                await store.save({
                  ...values,
                  title: formValues.title,
                  description: formValues.description,
                  state: 'confirmed'
                });
                onClose();
                setValues({
                  ...values,
                  title: formValues.title,
                  description: formValues.description
                });
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const onChange = event => {
              const {
                value,
                name
              } = event.currentTarget;
              setFormValues({
                ...formValues,
                [name]: value
              });
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, formTexts.title), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, formTexts.subtitle))), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              label: texts.manual.title.label,
              onChange: onChange,
              value: formValues.title ?? '',
              name: "title"
            }), _react.default.createElement(_form.Textarea, {
              label: texts.manual.description.label,
              name: "description",
              onChange: onChange,
              value: formValues.description ?? ''
            }), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, actions.back), _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: !formValues.description || !formValues.title,
              onClick: onSubmit
            }, actions.continue))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/pathway/forms/total-activities
      ******************************************************/

      ims.set('./views/pathway/forms/total-activities', {
        hash: 3281900299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TotalActivities = TotalActivities;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function TotalActivities() {
            let {
              texts,
              values,
              store,
              setValues
            } = (0, _context.usePathwayContext)();
            // access to the texts object from the context
            texts = texts.pathway.ai;
            const disabled = {};
            const {
              brief,
              standard,
              extended
            } = texts.form.size.items;
            const options = [{
              value: 15,
              label: brief,
              totalActivities: 3
            }, {
              value: 45,
              label: standard,
              totalActivities: 5
            }, {
              value: 60,
              label: extended,
              totalActivities: 7
            }];
            const onChange = event => {
              const data = options.find(item => item.value === parseInt(event.target.value));
              const specs = {
                ...values,
                duration: event.target.value,
                totalActivities: data?.totalActivities || null
              };
              setValues(specs);
              store.model.set(specs);
            };
            let firstSelected = 0;
            let selected = 1;
            if (values?.audienceIndex) firstSelected = parseInt(values.duration);
            if (values?.duration?.index) selected = parseInt(values.duration.index);
            let current = {};
            if (values.duration) {
              current = options.find(item => item.value === values.duration);
            }
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.form.size.placeholder), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.form.size.placeholder,
              onChange: onChange,
              name: "duration",
              value: values.duration,
              ...disabled,
              options: options
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/pathway/index
      *************************************/

      ims.set('./views/pathway/index', {
        hash: 4243896678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PathwayGeneration = PathwayGeneration;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _examples = require("./examples");
          var _alert = require("../components/alert");
          var _confirmation = require("./confirmation");
          var _decisionType = require("./forms/decision-type");
          var _framerMotion = require("framer-motion");
          var _manual = require("./forms/manual");
          var _aiForm = require("./forms/ai-form");
          var _requestCredits = require("./request-credits");
          function PathwayGeneration({
            store,
            values,
            show,
            setValues,
            onClose
          }) {
            // const { texts, store, values, improvements } = useModuleContext();
            const {
              texts,
              improvements
            } = store;
            const [fetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [view, setView] = _react.default.useState();
            const [error, setError] = _react.default.useState('');
            if (!show) return null;
            const onSave = async () => {
              try {
                const {
                  status
                } = await store.update({
                  state: 'confirmed'
                });
                if (!status) {
                  setError('default');
                  return;
                }
                onClose();
              } catch (e) {
                setError('default');
              }
            };
            const controls = {
              confirm: _confirmation.ConfirmationForm,
              selection: _decisionType.DecistionType,
              ai: _aiForm.AIGenerationForm,
              manual: _manual.ManualForm,
              examples: _examples.SuggestionExamples,
              request: _requestCredits.RequestCreditsContainer
            };
            const viewDefined = !!improvements && !view ? 'confirm' : !view ? 'selection' : view;
            const Control = controls[viewDefined];
            const handleCLose = () => {
              setNotes('');
              setView(undefined);
              onClose();
            };
            return _react.default.createElement(_modal.Modal, {
              className: "module-setup__modal",
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_alert.ErrorRenderer, {
              error: error,
              texts: texts.refine.errors
            }), _react.default.createElement(_context.PathwayContext.Provider, {
              value: {
                view,
                texts: store.texts,
                values,
                store,
                setValues,
                onClose: () => {
                  setNotes('');
                  setView(undefined);
                  onClose();
                },
                setView,
                notes,
                setNotes
              }
            }, _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(Control, {
              onSave: onSave,
              key: "control"
            })), _react.default.createElement(_ui.ProcessContainer, {
              key: "container",
              fetching: fetching
            })));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/pathway/request-credits
      ***********************************************/

      ims.set('./views/pathway/request-credits', {
        hash: 1946450603,
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
              store,
              onClose,
              setView
            } = (0, _context.usePathwayContext)();
            const texts = {
              ...store.globalTexts
            };
            const onCancel = () => setView('selection');
            const onSuccess = () => setView('ai');
            texts.actions.cancel = store.globalTexts.actions.back;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.RequestCreditsForm, {
              onConsume: store.model.consumeCoins,
              globalTexts: texts,
              owner: store.model.owner,
              onClose: onClose,
              onCancel: onCancel,
              onSuccess: onSuccess
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/form/confirmation-modal",
        "from": "ConfirmationModal",
        "name": "ConfirmationModal"
      }, {
        "im": "./views/form/fields/supporting-text",
        "from": "SupportingText",
        "name": "SupportingText"
      }, {
        "im": "./views/form/image",
        "from": "OwnerImage",
        "name": "OwnerImage"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'ConfirmationModal') && _export("ConfirmationModal", ConfirmationModal = require ? require('./views/form/confirmation-modal').ConfirmationModal : value);
        (require || prop === 'SupportingText') && _export("SupportingText", SupportingText = require ? require('./views/form/fields/supporting-text').SupportingText : value);
        (require || prop === 'OwnerImage') && _export("OwnerImage", OwnerImage = require ? require('./views/form/image').OwnerImage : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl90cmltIiwiX3JvdXRpbmciLCJDb25maXJtYXRpb25Nb2RhbCIsInZhbHVlcyIsIm93bmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsInNhdmUiLCJzdGF0ZSIsImJyZWFkY3J1bWIiLCJsYXN0SXRlbSIsIm9iamVjdGl2ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpZCIsInNldEFsZXJ0Iiwic2V0dXAiLCJtZXNzYWdlcyIsInBvc2l0aW9uIiwiZSIsImdsb2JhbFRleHRzIiwiZXJyb3JzIiwiREVGQVVMVF9FUlJPUiIsImNvbmZpcm1hdGlvbiIsImFjdGlvblRleHRzIiwiYWN0aW9ucyIsImVudGl0eSIsImRpc3BsYXlOYW1lIiwiTW9kYWwiLCJzdWJ0aXRsZSIsIk93bmVySW1hZ2UiLCJvd25lckRlc2NyaXB0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIl9ob29rcyIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJzZXRWYWx1ZXMiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsInVzZUJpbmRlciIsIml0ZW1zIiwiYXVkaWVuY2VzIiwiZXZlbnQiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJ0YXJnZXQiLCJjYXRlZ29yeSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfYXVkaWVuY2UiLCJfbGV2ZWwiLCJMYW5ndWFnZUZpZWxkcyIsImxvYWRBdWRpZW5jZXMiLCJpdGVtIiwibGFuZ3VhZ2VzIiwiRnJhZ21lbnQiLCJBdWRpZW5jZUxldmVsRmllbGQiLCJsZXZlbCIsImF1ZGllbmNlTGV2ZWxzIiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsImZvcm1UZXh0cyIsImZvcm0iLCJUZXh0YXJlYSIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIl9zdXBwb3J0aW5nVGV4dCIsIk93bmVyc2hpcEZpZWxkIiwid1RleHRzIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJzZXRTZWxlY3RlZCIsInN1cHBvcnRpbmdUZXh0Iiwic2V0U3VwcG9ydGluZ1RleHQiLCJjb250ZW50IiwiZGVmYXVsdE9wdGlvbiIsImFkbWluaXN0cmF0b3IiLCJhdHRycyIsIm93bmVyc2hpcHMiLCJnZXRBZG1pbmlzdHJhdG9yIiwiZ2V0Q3JlZGl0cyIsIm1vZHVsZXMiLCJjb25zb2xlIiwiY291bnQiLCJhbGVydHMiLCJhdmFpbGFibGUiLCJ1bmF2YWlsYWJsZSIsIlRvdXJTdGVwIiwiYXMiLCJTdXBwb3J0aW5nVGV4dCIsInZhcmlhbnRDbGFzc01hcCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInJlc3QiLCJ2YXJpYW50Q2xhc3MiLCJjb21iaW5lZENsYXNzTmFtZSIsInRyaW0iLCJfaWNvbnMiLCJwaG90b1VybCIsIkFwcEljb24iLCJpY29uIiwiSW1hZ2UiLCJzcmMiLCJSZWFjdCIsIl9hbmltYXRlZERpdiIsIl9sYW5ndWFnZSIsIl9vYmplY3RpdmUiLCJfb3duZXJzaGlwIiwiX3N1Z2dlc3Rpb25zIiwiX2FjdGlvbiIsIkRyYWZ0Rm9ybSIsInRvZ2dsZVBhdGh3YXkiLCJ0b2dnbGVDb25maXJtYXRpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsIm9uQ29maXJtZWQiLCJ1cGRhdGVkIiwib25TdWJtaXQiLCJsb2ciLCJjbHNDb250YWluZXIiLCJQYWdlQ29udGFpbmVyIiwiYWN0aXZpdGllcyIsIkRyaXZlclRvdXJDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsImltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImFuYWx5c2UiLCJDb2luc01vZGFsIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJTZXQiLCJhcHBseSIsInNwZWNzIiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsIm9uQ2FuY2VsIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJ0b3RhbCIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJoYXMiLCJkZWxldGUiLCJhZGQiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwidXBkYXRpbmciLCJzZXRVcGRhdGluZyIsImNvbmZpcm0iLCJfYWN0aXZpdHkiLCJfb3ZlcnZpZXciLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsInNldEZldGNoaW5nIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJhY3RpdmVQYW5lbCIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiZ2V0UHJvcGVydGllcyIsInNob3dQYXRod2F5Iiwic2V0U2hvd1BhdGh3YXkiLCJzaG93Q29uZmlybWF0aW9uIiwic2V0U2hvd0NvbmZpcm1hdGlvbiIsInJlYWR5Iiwic2V0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ2aWV3Iiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsImFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYWN0aXZpdHlTZWxlY3RlZCIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZmxvYXRpbmciLCJnZW5lcmF0ZSIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjcmVkaXRzIiwiY2hlY2tlZCIsImFpIiwibWFudWFsbHkiLCJNYW51YWxGb3JtIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJtYW51YWwiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJmaW5kIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJfZXhhbXBsZXMiLCJfY29uZmlybWF0aW9uIiwiX2RlY2lzaW9uVHlwZSIsIl9tYW51YWwiLCJfYWlGb3JtIiwiX3JlcXVlc3RDcmVkaXRzIiwib25TYXZlIiwic3RhdHVzIiwidXBkYXRlIiwiY29udHJvbHMiLCJzZWxlY3Rpb24iLCJyZXF1ZXN0IiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJ2aWV3RGVmaW5lZCIsIkNvbnRyb2wiLCJoYW5kbGVDTG9zZSIsImNsb3NlQmFja2Ryb3AiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdHJpbS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvRml4ZWRBbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sZXZlbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29uZmlybWF0aW9uLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvYWktZm9ybS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9kZWNpc2lvbi10eXBlLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL21hbnVhbC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy90b3RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHSixNQUFBLENBQUFJLEtBQUs7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlFLE1BQU1BLENBQUE7Y0FDVCxPQUFPTCxNQUFBLENBQUFNLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkU7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNTLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJLLFNBQVVhLFFBQVFBLENBQUNDLEtBQWEsRUFBRUMsU0FBaUI7WUFDeEQsSUFBSUQsS0FBSyxDQUFD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