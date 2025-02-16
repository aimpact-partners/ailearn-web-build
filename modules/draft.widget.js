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
        hash: 3341100946,
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
          function DecistionType({}) {
            const {
              texts
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJ2YWx1ZXMiLCJvd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZW50aXR5IiwidG9Mb3dlckNhc2UiLCJkaXNwbGF5TmFtZSIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJfaG9va3MiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwic2V0VmFsdWVzIiwibWFwT3B0aW9ucyIsImF1ZGllbmNlcyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiY3VycmVudEF1ZGllbmNlIiwidXNlQmluZGVyIiwiaXRlbXMiLCJldmVudCIsInNldEN1cnJlbnRBdWRpZW5jZSIsInRhcmdldCIsImNhdGVnb3J5IiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIl9hdWRpZW5jZSIsIl9sZXZlbCIsIkxhbmd1YWdlRmllbGRzIiwibG9hZEF1ZGllbmNlcyIsIml0ZW0iLCJsYW5ndWFnZXMiLCJGcmFnbWVudCIsIkF1ZGllbmNlTGV2ZWxGaWVsZCIsImxldmVsIiwibWFwTGV2ZWxzIiwiYXVkaWVuY2VMZXZlbHMiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIm9uT2JqZWN0aXZlQ2hhbmdlIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJUZXh0YXJlYSIsIm9iamVjdGl2ZSIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIl9zdXBwb3J0aW5nVGV4dCIsIk93bmVyc2hpcEZpZWxkIiwid1RleHRzIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJzZXRTZWxlY3RlZCIsInN1cHBvcnRpbmdUZXh0Iiwic2V0U3VwcG9ydGluZ1RleHQiLCJjb250ZW50IiwiZGVmYXVsdE9wdGlvbiIsImFkbWluaXN0cmF0b3IiLCJhdHRycyIsIm93bmVyc2hpcHMiLCJnZXRBZG1pbmlzdHJhdG9yIiwibG9nIiwiZ2V0Q3JlZGl0cyIsIm1vZHVsZXMiLCJhbGVydHMiLCJ1bmF2YWlsYWJsZSIsImNvdW50IiwiYXZhaWxhYmxlIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsIl9vd25lcnNoaXAiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiaW52YWxpZEZvcm0iLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsIlBhZ2VDb250YWluZXIiLCJhY3Rpdml0aWVzIiwiaXNGb3JtIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsIkZvcm0iLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwidGV4dEFjdGlvbnMiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiY2xvc2VNb2RhbCIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsIm9uQ29uc3VtZSIsInJlc3BvbnNlIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiaW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiYW5hbHlzZSIsIkNvaW5zTW9kYWwiLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsIlNldCIsImFwcGx5Iiwic3BlY3MiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwib25DYW5jZWwiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJ0b3RhbCIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJoYXMiLCJkZWxldGUiLCJhZGQiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwidXBkYXRpbmciLCJzZXRVcGRhdGluZyIsImNvbmZpcm0iLCJfYWN0aXZpdHkiLCJfb3ZlcnZpZXciLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsInNldEZldGNoaW5nIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJhY3RpdmVQYW5lbCIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiZ2V0UHJvcGVydGllcyIsInNob3dQYXRod2F5Iiwic2V0U2hvd1BhdGh3YXkiLCJzaG93Q29uZmlybWF0aW9uIiwic2V0U2hvd0NvbmZpcm1hdGlvbiIsInJlYWR5Iiwic2V0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ2aWV3Iiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsImFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYWN0aXZpdHlTZWxlY3RlZCIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VG90YWxBY3Rpdml0aWVzIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZ2VuZXJhdGUiLCJfYWlGb3JtIiwiX21hbnVhbCIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjb250cm9sVHlwZSIsInNldENvbnRyb2xUeXBlIiwiY29udHJvbHMiLCJhaSIsIm1hbnVhbCIsIk1hbnVhbEZvcm0iLCJDb250cm9sIiwiY2hlY2tlZCIsIm1hbnVhbGx5Iiwib25TYXZlIiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX3JlcXVlc3RDcmVkaXRzIiwic3RhdHVzIiwidXBkYXRlIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJoYW5kbGVDTG9zZSIsImNsb3NlQmFja2Ryb3AiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdHJpbS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvRml4ZWRBbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sZXZlbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29uZmlybWF0aW9uLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvYWktZm9ybS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9kZWNpc2lvbi10eXBlLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL21hbnVhbC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy90b3RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHSixNQUFBLENBQUFJLEtBQUs7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlFLE1BQU1BLENBQUE7Y0FDVCxPQUFPTCxNQUFBLENBQUFNLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkU7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNTLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7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