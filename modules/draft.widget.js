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
        hash: 4235741992,
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
                _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
                onClose();
                store.setAlert({
                  message: store.texts.setup.messages.save,
                  position: 'objective'
                });
              } catch (e) {
                console.error(e);
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
        hash: 3981322848,
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
            const [totalActivities, setTotalActivities] = _react.default.useState();
            const onGenerate = async () => {
              try {
                setFetching(true);
                await store.generateModuleSuggestion({
                  ...store.model.getProperties(),
                  notes,
                  totalActivities
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
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.activities.title)), _react.default.createElement(_totalActivities.TotalActivities, {
              totalActivities: totalActivities,
              setTotalActivities: setTotalActivities
            }), _react.default.createElement(_form.Textarea, {
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
              disabled: fetching || !totalActivities
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
        hash: 3358198227,
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
              name: "title",
              variant: "floating"
            }), _react.default.createElement(_form.Textarea, {
              label: texts.manual.description.label,
              name: "description",
              onChange: onChange,
              variant: "floating",
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
        hash: 2393570246,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TotalActivities = TotalActivities;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          /**
           * This field is not required in the draft object, it's only used for suggestions.
           * @returns
           */
          function TotalActivities({
            totalActivities,
            setTotalActivities
          }) {
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
              value: 3,
              label: brief,
              totalActivities: 3
            }, {
              value: 5,
              label: standard,
              totalActivities: 5
            }, {
              value: 7,
              label: extended,
              totalActivities: 7
            }];
            const onChange = event => setTotalActivities(event.target.value);
            let firstSelected = 0;
            let selected = 1;
            if (values?.audienceIndex) firstSelected = parseInt(values.totalActivities);
            if (values?.totalActivities?.index) selected = parseInt(values.totalActivities.index);
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.form.size.placeholder), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.form.size.placeholder,
              onChange: onChange,
              name: "totalActivities",
              value: totalActivities,
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
        hash: 735685353,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJ2YWx1ZXMiLCJvd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZW50aXR5IiwiZGlzcGxheU5hbWUiLCJNb2RhbCIsInN1YnRpdGxlIiwiT3duZXJJbWFnZSIsIm93bmVyRGVzY3JpcHRpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiX2hvb2tzIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsInNldFZhbHVlcyIsIm1hcE9wdGlvbnMiLCJhdWRpZW5jZXMiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImN1cnJlbnRBdWRpZW5jZSIsInVzZUJpbmRlciIsIml0ZW1zIiwiZXZlbnQiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJ0YXJnZXQiLCJjYXRlZ29yeSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfYXVkaWVuY2UiLCJfbGV2ZWwiLCJMYW5ndWFnZUZpZWxkcyIsImxvYWRBdWRpZW5jZXMiLCJpdGVtIiwibGFuZ3VhZ2VzIiwiRnJhZ21lbnQiLCJBdWRpZW5jZUxldmVsRmllbGQiLCJsZXZlbCIsIm1hcExldmVscyIsImF1ZGllbmNlTGV2ZWxzIiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsImZvcm1UZXh0cyIsImZvcm0iLCJUZXh0YXJlYSIsIm9iamVjdGl2ZSIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIl9zdXBwb3J0aW5nVGV4dCIsIk93bmVyc2hpcEZpZWxkIiwid1RleHRzIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJzZXRTZWxlY3RlZCIsInN1cHBvcnRpbmdUZXh0Iiwic2V0U3VwcG9ydGluZ1RleHQiLCJjb250ZW50IiwiZGVmYXVsdE9wdGlvbiIsImFkbWluaXN0cmF0b3IiLCJhdHRycyIsIm93bmVyc2hpcHMiLCJnZXRBZG1pbmlzdHJhdG9yIiwiZ2V0Q3JlZGl0cyIsIm1vZHVsZXMiLCJhbGVydHMiLCJ1bmF2YWlsYWJsZSIsImNvdW50IiwiYXZhaWxhYmxlIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsIl9vd25lcnNoaXAiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiaW52YWxpZEZvcm0iLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsImxvZyIsImNsc0NvbnRhaW5lciIsIlBhZ2VDb250YWluZXIiLCJhY3Rpdml0aWVzIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsIkZvcm0iLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwidGV4dEFjdGlvbnMiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiY2xvc2VNb2RhbCIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsIm9uQ29uc3VtZSIsInJlc3BvbnNlIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiaW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiYW5hbHlzZSIsIkNvaW5zTW9kYWwiLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsIlNldCIsImFwcGx5Iiwic3BlY3MiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwib25DYW5jZWwiLCJjbGVhckltcHJvdmVtZW50cyIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInRvdGFsIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwicHJvcHMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImhhcyIsImRlbGV0ZSIsImFkZCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJ1cGRhdGluZyIsInNldFVwZGF0aW5nIiwiY29uZmlybSIsIl9hY3Rpdml0eSIsIl9vdmVydmlldyIsIl9jb25maXJtYXRpb25Nb2RhbCIsIl9wYXRod2F5Iiwic2V0RmV0Y2hpbmciLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsImFjdGl2ZVBhbmVsIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJnZXRQcm9wZXJ0aWVzIiwic2hvd1BhdGh3YXkiLCJzZXRTaG93UGF0aHdheSIsInNob3dDb25maXJtYXRpb24iLCJzZXRTaG93Q29uZmlybWF0aW9uIiwicmVhZHkiLCJzZXQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInZpZXciLCJvdmVydmlldyIsIk1vZHVsZU92ZXJ2aWV3IiwiYWN0aXZpdHkiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJhY3Rpdml0eVNlbGVjdGVkIiwiUGF0aHdheUdlbmVyYXRpb24iLCJhbmltYXRpb25zIiwic2xpZGVEb3duIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfYW5pbWF0aW9ucyIsIkNvbmZpcm1hdGlvbkZvcm0iLCJzZXRWaWV3IiwidXNlUGF0aHdheUNvbnRleHQiLCJyZWZpbmUiLCJQYXRod2F5Q29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInNldE5vdGVzIiwib25CYWNrIiwiSXRlbSIsImV4YW1wbGVzIiwiYmFjayIsIl90b3RhbEFjdGl2aXRpZXMiLCJBSUdlbmVyYXRpb25Gb3JtIiwibm90ZXMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJzZXRUb3RhbEFjdGl2aXRpZXMiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZXZlbnRzIiwiVG90YWxBY3Rpdml0aWVzIiwidGV4dGFyZWEiLCJmbG9hdGluZyIsImdlbmVyYXRlIiwiRGVjaXN0aW9uVHlwZSIsImdlbmVyYXRpb24iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImNyZWRpdHMiLCJjaGVja2VkIiwiYWkiLCJtYW51YWxseSIsIk1hbnVhbEZvcm0iLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInBhdGh3YXkiLCJJbnB1dCIsIm1hbnVhbCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfbWFudWFsIiwiX2FpRm9ybSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIm9uU2F2ZSIsInN0YXR1cyIsInVwZGF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3RyaW0udHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL0ZpeGVkQWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb25maXJtYXRpb24tbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGV2ZWwudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9zdXBwb3J0aW5nLXRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBSSxLQUFLO2NBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRSxNQUFNQSxDQUFBO2NBQ1QsT0FBT0wsTUFBQSxDQUFBTSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDUyxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCSyxTQUFVYSxRQUFRQSxDQUFDQyxLQUFhLEVBQUVDLFNB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