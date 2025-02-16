System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/modules/draft/store.code", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.3/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/modules/management/activity.code", "@aimpact/ailearn-app@0.3.1/modules/management/overview.code"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
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
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_10 = _beyondJsReact18Widgets113Hooks;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 4242557512,
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
              className: "draft-setup__container",
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
        hash: 1299108361,
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
            const name = owner.entity.toLowerCase() === 'user' ? owner.displayName : owner.name;
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
              className: "actions__container mt-1"
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
        hash: 1675165789,
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
            }, ['fetching.data', 'audiences.loaded']);
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
        hash: 1198719362,
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
              setValues,
              values
            } = (0, _context.useModuleContext)();
            const onChange = async event => {
              await store.loadAudiences(event.target.value);
              setValues(values => ({
                ...values,
                language: event.target.value
              }));
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
        hash: 3078003994,
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
            (0, _hooks.useBinder)([store], () => setOptions([...store.audienceLevels.map(mapLevels)]), ['audience.changed', 'audiences.loaded']);
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
        hash: 1094377105,
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
            const onObjectiveChange = event => {
              store.clearImprovements();
              onChange(event);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "objective-field "
            }, _react.default.createElement(_form.Textarea, {
              onChange: onObjectiveChange,
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
        hash: 1004066313,
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
              console.log(0.2, owner);
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
                owner
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
        hash: 3288939049,
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
            (0, _hooks.useBinder)([store], () => {
              setProcessing(store.fetchingSuggestions || store.fetching);
            }, ['fetchingSuggestions.changed', 'fetching.data']);
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
            const cls = `draft-setup__container `;
            return React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.items.length,
              isForm: true
            }, React.createElement(_ui.DriverTourContainer, {
              name: "moduleObjective"
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
              className: "objective__container relative-container"
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
              fetching: fetching || processing
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
        hash: 2530878204,
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
            }, _react.default.createElement(_totalActivities.TotalActivities, {
              totalActivities: totalActivities,
              setTotalActivities: setTotalActivities
            }), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: notes,
              variant: "floating",
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
        hash: 3123135795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DecistionType = DecistionType;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _animations = require("../animations");
          var _aiForm = require("./ai-form");
          var _manual = require("./manual");
          function DecistionType({
            onSave
          }) {
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
            const [controlType, setControlType] = _react.default.useState();
            const controls = {
              ai: _aiForm.AIGenerationForm,
              manual: _manual.ManualForm
            };
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setValueSelected(value);
              setControlType(value === 'yes' ? 'ai' : 'manual');
            };
            const onClick = () => {
              if (valueSelected === 'yes' && !store.model.credits.total) {
                setView('request');
                return;
              }
              setView(valueSelected === 'yes' ? 'ai' : 'manual');
            };
            const Control = controlType ? controls[controlType] : null;
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
            }), Control && _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(Control, {
              onSave: onSave
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/pathway/forms/manual
      ********************************************/

      ims.set('./views/pathway/forms/manual', {
        hash: 3834442349,
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
            }, _react.default.createElement(_form.Form, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJ2YWx1ZXMiLCJvd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZW50aXR5IiwidG9Mb3dlckNhc2UiLCJkaXNwbGF5TmFtZSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJfaG9va3MiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwic2V0VmFsdWVzIiwibWFwT3B0aW9ucyIsImF1ZGllbmNlcyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiY3VycmVudEF1ZGllbmNlIiwidXNlQmluZGVyIiwiaXRlbXMiLCJldmVudCIsInNldEN1cnJlbnRBdWRpZW5jZSIsInRhcmdldCIsImNhdGVnb3J5IiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIl9hdWRpZW5jZSIsIl9sZXZlbCIsIkxhbmd1YWdlRmllbGRzIiwibG9hZEF1ZGllbmNlcyIsIml0ZW0iLCJsYW5ndWFnZXMiLCJGcmFnbWVudCIsIkF1ZGllbmNlTGV2ZWxGaWVsZCIsImxldmVsIiwibWFwTGV2ZWxzIiwiYXVkaWVuY2VMZXZlbHMiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIm9uT2JqZWN0aXZlQ2hhbmdlIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJUZXh0YXJlYSIsIm9iamVjdGl2ZSIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIl9zdXBwb3J0aW5nVGV4dCIsIk93bmVyc2hpcEZpZWxkIiwid1RleHRzIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJzZXRTZWxlY3RlZCIsInN1cHBvcnRpbmdUZXh0Iiwic2V0U3VwcG9ydGluZ1RleHQiLCJjb250ZW50IiwiZGVmYXVsdE9wdGlvbiIsImFkbWluaXN0cmF0b3IiLCJhdHRycyIsIm93bmVyc2hpcHMiLCJnZXRBZG1pbmlzdHJhdG9yIiwibG9nIiwiZ2V0Q3JlZGl0cyIsIm1vZHVsZXMiLCJhbGVydHMiLCJ1bmF2YWlsYWJsZSIsImNvdW50IiwiYXZhaWxhYmxlIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsIl9vd25lcnNoaXAiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiaW52YWxpZEZvcm0iLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsIlBhZ2VDb250YWluZXIiLCJhY3Rpdml0aWVzIiwiaXNGb3JtIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsIkZvcm0iLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwidGV4dEFjdGlvbnMiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiY2xvc2VNb2RhbCIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsIm9uQ29uc3VtZSIsInJlc3BvbnNlIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiaW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiYW5hbHlzZSIsIkNvaW5zTW9kYWwiLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsIlNldCIsImFwcGx5Iiwic3BlY3MiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwib25DYW5jZWwiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJ0b3RhbCIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJoYXMiLCJkZWxldGUiLCJhZGQiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwidXBkYXRpbmciLCJzZXRVcGRhdGluZyIsImNvbmZpcm0iLCJfYWN0aXZpdHkiLCJfb3ZlcnZpZXciLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsInNldEZldGNoaW5nIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJhY3RpdmVQYW5lbCIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiZ2V0UHJvcGVydGllcyIsInNob3dQYXRod2F5Iiwic2V0U2hvd1BhdGh3YXkiLCJzaG93Q29uZmlybWF0aW9uIiwic2V0U2hvd0NvbmZpcm1hdGlvbiIsInJlYWR5Iiwic2V0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ2aWV3Iiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsImFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYWN0aXZpdHlTZWxlY3RlZCIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VG90YWxBY3Rpdml0aWVzIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZ2VuZXJhdGUiLCJfYWlGb3JtIiwiX21hbnVhbCIsIkRlY2lzdGlvblR5cGUiLCJvblNhdmUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjb250cm9sVHlwZSIsInNldENvbnRyb2xUeXBlIiwiY29udHJvbHMiLCJhaSIsIm1hbnVhbCIsIk1hbnVhbEZvcm0iLCJjcmVkaXRzIiwiQ29udHJvbCIsImNoZWNrZWQiLCJtYW51YWxseSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwicGF0aHdheSIsIklucHV0IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJfZXhhbXBsZXMiLCJfY29uZmlybWF0aW9uIiwiX2RlY2lzaW9uVHlwZSIsIl9yZXF1ZXN0Q3JlZGl0cyIsInN0YXR1cyIsInVwZGF0ZSIsInNlbGVjdGlvbiIsInJlcXVlc3QiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInZpZXdEZWZpbmVkIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3RyaW0udHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL0ZpeGVkQWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb25maXJtYXRpb24tbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGV2ZWwudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9zdXBwb3J0aW5nLXRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBSSxLQUFLO2NBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRSxNQUFNQSxDQUFBO2NBQ1QsT0FBT0wsTUFBQSxDQUFBTSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDUyxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7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