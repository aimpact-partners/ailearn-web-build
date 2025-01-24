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
        hash: 3988263227,
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
        hash: 2045723524,
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
            const mapOptions = audiences => {
              return audiences.map(audience => ({
                value: audience.id,
                label: audience.name
              }));
            };
            const [options, setOptions] = _react.default.useState(mapOptions(store.audiences));
            let value = undefined;
            if (store.currentAudience) {
              value = store.currentAudience.id;
            }
            (0, _hooks.useBinder)([store], () => {
              const items = mapOptions(store.audiences);
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
              value: value,
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
        hash: 3924579279,
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
              name: "language",
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
        hash: 3334552324,
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
            const mapLevels = level => ({
              value: level.id,
              label: level.label
            });
            const [options, setOptions] = _react.default.useState(store.audienceLevels.map(mapLevels));
            const value = values.audience?.level;
            (0, _hooks.useBinder)([store], () => setOptions(store.audienceLevels.map(mapLevels)), 'audience.changed');
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
              value: value,
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
        hash: 2013422785,
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
                setSupportingText({
                  content: texts.alerts.coins.unavailable,
                  variant: 'error'
                });
                console.error('the user does not have credits data loaded, refresh the page and try again.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl90cmltIiwiX3JvdXRpbmciLCJDb25maXJtYXRpb25Nb2RhbCIsInZhbHVlcyIsIm93bmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsInNhdmUiLCJzdGF0ZSIsImJyZWFkY3J1bWIiLCJsYXN0SXRlbSIsIm9iamVjdGl2ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpZCIsInNldEFsZXJ0Iiwic2V0dXAiLCJtZXNzYWdlcyIsInBvc2l0aW9uIiwiZSIsImdsb2JhbFRleHRzIiwiZXJyb3JzIiwiREVGQVVMVF9FUlJPUiIsImNvbmZpcm1hdGlvbiIsImFjdGlvblRleHRzIiwiYWN0aW9ucyIsImVudGl0eSIsImRpc3BsYXlOYW1lIiwiTW9kYWwiLCJzdWJ0aXRsZSIsIk93bmVySW1hZ2UiLCJvd25lckRlc2NyaXB0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIl9ob29rcyIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJzZXRWYWx1ZXMiLCJtYXBPcHRpb25zIiwiYXVkaWVuY2VzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJjdXJyZW50QXVkaWVuY2UiLCJ1c2VCaW5kZXIiLCJpdGVtcyIsImV2ZW50Iiwic2V0Q3VycmVudEF1ZGllbmNlIiwidGFyZ2V0IiwiY2F0ZWdvcnkiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiX2F1ZGllbmNlIiwiX2xldmVsIiwiTGFuZ3VhZ2VGaWVsZHMiLCJsb2FkQXVkaWVuY2VzIiwiaXRlbSIsImxhbmd1YWdlcyIsIkZyYWdtZW50IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwibGV2ZWwiLCJtYXBMZXZlbHMiLCJhdWRpZW5jZUxldmVscyIsIl9mb3JtIiwiT2JqZWN0aXZlRmllbGQiLCJmb3JtVGV4dHMiLCJmb3JtIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0U2VsZWN0ZWQiLCJzdXBwb3J0aW5nVGV4dCIsInNldFN1cHBvcnRpbmdUZXh0IiwiY29udGVudCIsImRlZmF1bHRPcHRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYXR0cnMiLCJvd25lcnNoaXBzIiwiZ2V0QWRtaW5pc3RyYXRvciIsImdldENyZWRpdHMiLCJtb2R1bGVzIiwiYWxlcnRzIiwidW5hdmFpbGFibGUiLCJjb25zb2xlIiwiY291bnQiLCJhdmFpbGFibGUiLCJUb3VyU3RlcCIsImFzIiwiU3VwcG9ydGluZ1RleHQiLCJ2YXJpYW50Q2xhc3NNYXAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJyZXN0IiwidmFyaWFudENsYXNzIiwiY29tYmluZWRDbGFzc05hbWUiLCJ0cmltIiwiX2ljb25zIiwicGhvdG9VcmwiLCJBcHBJY29uIiwiaWNvbiIsIkltYWdlIiwic3JjIiwiUmVhY3QiLCJfYW5pbWF0ZWREaXYiLCJfbGFuZ3VhZ2UiLCJfb2JqZWN0aXZlIiwiX293bmVyc2hpcCIsIl9zdWdnZXN0aW9ucyIsIl9hY3Rpb24iLCJEcmFmdEZvcm0iLCJ0b2dnbGVQYXRod2F5IiwidG9nZ2xlQ29uZmlybWF0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJpbnZhbGlkRm9ybSIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJvbkNvZmlybWVkIiwidXBkYXRlZCIsIm9uU3VibWl0IiwibG9nIiwiY2xzQ29udGFpbmVyIiwiUGFnZUNvbnRhaW5lciIsImFjdGl2aXRpZXMiLCJEcml2ZXJUb3VyQ29udGFpbmVyIiwiRm9ybSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJ0ZXh0QWN0aW9ucyIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJjbG9zZU1vZGFsIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwib25Db25zdW1lIiwicmVzcG9uc2UiLCJjb25zdW1lQ29pbnMiLCJyZXNwb25zZTIiLCJpbXByb3ZlbWVudHMiLCJpcnJlbGV2YW50IiwiQUlCdXR0b24iLCJlbnN1cmUiLCJhbmFseXNlIiwiQ29pbnNNb2RhbCIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwiU2V0IiwiYXBwbHkiLCJzcGVjcyIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJvbkNhbmNlbCIsImNsZWFySW1wcm92ZW1lbnRzIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwidG90YWwiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiaGFzIiwiZGVsZXRlIiwiYWRkIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJjb25maXJtIiwiX2FjdGl2aXR5IiwiX292ZXJ2aWV3IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJzZXRGZXRjaGluZyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImdldFByb3BlcnRpZXMiLCJzaG93UGF0aHdheSIsInNldFNob3dQYXRod2F5Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJyZWFkeSIsInNldCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidmlldyIsIm92ZXJ2aWV3IiwiTW9kdWxlT3ZlcnZpZXciLCJhY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJQYXRod2F5R2VuZXJhdGlvbiIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9hbmltYXRpb25zIiwiQ29uZmlybWF0aW9uRm9ybSIsInNldFZpZXciLCJ1c2VQYXRod2F5Q29udGV4dCIsInJlZmluZSIsIlBhdGh3YXlDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJiYWNrIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImZsb2F0aW5nIiwiZ2VuZXJhdGUiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY3JlZGl0cyIsImNoZWNrZWQiLCJhaSIsIm1hbnVhbGx5IiwiTWFudWFsRm9ybSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwicGF0aHdheSIsIklucHV0IiwibWFudWFsIiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwidG90YWxBY3Rpdml0aWVzIiwiZmluZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfbWFudWFsIiwiX2FpRm9ybSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIm9uU2F2ZSIsInN0YXR1cyIsInVwZGF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3RyaW0udHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL0ZpeGVkQWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb25maXJtYXRpb24tbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGV2ZWwudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9zdXBwb3J0aW5nLXRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBSSxLQUFLO2NBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRSxNQUFNQSxDQUFBO2NBQ1QsT0FBT0wsTUFBQSxDQUFBTSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDUyxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCSyxTQUFVYSxRQUFRQSxD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