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
        hash: 4230553940,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJ2YWx1ZXMiLCJvd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZW50aXR5IiwiZGlzcGxheU5hbWUiLCJNb2RhbCIsInN1YnRpdGxlIiwiT3duZXJJbWFnZSIsIm93bmVyRGVzY3JpcHRpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiX2hvb2tzIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsInNldFZhbHVlcyIsIm1hcE9wdGlvbnMiLCJhdWRpZW5jZXMiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImN1cnJlbnRBdWRpZW5jZSIsInVzZUJpbmRlciIsIml0ZW1zIiwiZXZlbnQiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJ0YXJnZXQiLCJjYXRlZ29yeSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfYXVkaWVuY2UiLCJfbGV2ZWwiLCJMYW5ndWFnZUZpZWxkcyIsImxvYWRBdWRpZW5jZXMiLCJpdGVtIiwibGFuZ3VhZ2VzIiwiRnJhZ21lbnQiLCJBdWRpZW5jZUxldmVsRmllbGQiLCJsZXZlbCIsIm1hcExldmVscyIsImF1ZGllbmNlTGV2ZWxzIiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsImZvcm1UZXh0cyIsImZvcm0iLCJvbk9iamVjdGl2ZUNoYW5nZSIsImNsZWFySW1wcm92ZW1lbnRzIiwiVGV4dGFyZWEiLCJvYmplY3RpdmUiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0U2VsZWN0ZWQiLCJzdXBwb3J0aW5nVGV4dCIsInNldFN1cHBvcnRpbmdUZXh0IiwiY29udGVudCIsImRlZmF1bHRPcHRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYXR0cnMiLCJvd25lcnNoaXBzIiwiZ2V0QWRtaW5pc3RyYXRvciIsImxvZyIsImdldENyZWRpdHMiLCJtb2R1bGVzIiwiYWxlcnRzIiwidW5hdmFpbGFibGUiLCJjb3VudCIsImF2YWlsYWJsZSIsIlRvdXJTdGVwIiwiYXMiLCJTdXBwb3J0aW5nVGV4dCIsInZhcmlhbnRDbGFzc01hcCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInJlc3QiLCJ2YXJpYW50Q2xhc3MiLCJjb21iaW5lZENsYXNzTmFtZSIsInRyaW0iLCJfaWNvbnMiLCJwaG90b1VybCIsIkFwcEljb24iLCJpY29uIiwiSW1hZ2UiLCJzcmMiLCJSZWFjdCIsIl9hbmltYXRlZERpdiIsIl9sYW5ndWFnZSIsIl9vYmplY3RpdmUiLCJfb3duZXJzaGlwIiwiX3N1Z2dlc3Rpb25zIiwiX2FjdGlvbiIsIkRyYWZ0Rm9ybSIsInRvZ2dsZVBhdGh3YXkiLCJ0b2dnbGVDb25maXJtYXRpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsIm9uQ29maXJtZWQiLCJ1cGRhdGVkIiwib25TdWJtaXQiLCJQYWdlQ29udGFpbmVyIiwiYWN0aXZpdGllcyIsImlzRm9ybSIsIkRyaXZlclRvdXJDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsImltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImFuYWx5c2UiLCJDb2luc01vZGFsIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJTZXQiLCJhcHBseSIsInNwZWNzIiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsIm9uQ2FuY2VsIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwidG90YWwiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiaGFzIiwiZGVsZXRlIiwiYWRkIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJjb25maXJtIiwiX2FjdGl2aXR5IiwiX292ZXJ2aWV3IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJzZXRGZXRjaGluZyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImdldFByb3BlcnRpZXMiLCJzaG93UGF0aHdheSIsInNldFNob3dQYXRod2F5Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJyZWFkeSIsInNldCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidmlldyIsIm92ZXJ2aWV3IiwiTW9kdWxlT3ZlcnZpZXciLCJhY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJQYXRod2F5R2VuZXJhdGlvbiIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9hbmltYXRpb25zIiwiQ29uZmlybWF0aW9uRm9ybSIsInNldFZpZXciLCJ1c2VQYXRod2F5Q29udGV4dCIsInJlZmluZSIsIlBhdGh3YXlDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJiYWNrIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsInRvdGFsQWN0aXZpdGllcyIsInNldFRvdGFsQWN0aXZpdGllcyIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImdlbmVyYXRlIiwiX2FpRm9ybSIsIl9tYW51YWwiLCJEZWNpc3Rpb25UeXBlIiwib25TYXZlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY29udHJvbFR5cGUiLCJzZXRDb250cm9sVHlwZSIsImNvbnRyb2xzIiwiYWkiLCJtYW51YWwiLCJNYW51YWxGb3JtIiwiY3JlZGl0cyIsIkNvbnRyb2wiLCJjaGVja2VkIiwibWFudWFsbHkiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInBhdGh3YXkiLCJJbnB1dCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfcmVxdWVzdENyZWRpdHMiLCJzdGF0dXMiLCJ1cGRhdGUiLCJzZWxlY3Rpb24iLCJyZXF1ZXN0IiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJ2aWV3RGVmaW5lZCIsImhhbmRsZUNMb3NlIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy90cmltLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9GaXhlZEFsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xldmVsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2ltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29udGV4dC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2RlY2lzaW9uLXR5cGUudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQUksS0FBSztjQUNuQixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUUsTUFBTUEsQ0FBQTtjQUNULE9BQU9MLE1BQUEsQ0FBQU0sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUosS0FBTSxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RTtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1MsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkssU0FBVWEsUUFBUUEsQ0FBQ0MsS0FBYSxFQUFFQyxTQUFpQjtZQUN4RCxJQUFJRCxLQUFLLENBQUNFLE1BQU0sSUFBSUQsU0FBUyxFQUFFLE9BQU9ELEtBQUs7WUFFM0MsSUFBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUNJLEtBQUssQ0FBQyxDQUFDLEVBQUVILFNBQVMsQ0FBQztZQUV2QztZQUNBLElBQUlELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUNJLElBQUksQ0FBQ0wsS0FBSyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxFQUFFO2NBQzVELE1BQU1LLFNBQVMsR0FBR04sS0FBSyxDQUFDSSxLQUFLLENBQUNILFNBQVMsQ0FBQztjQUN4QyxNQUFNTSxjQUFjLEdBQUdELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFdBQVcsQ0FBQztjQUNwREwsT0FBTyxJQUFJSSxjQUFjLEtBQUssQ0FBQyxDQUFDLEdBQUdELFNBQVMsQ0FBQ0YsS0FBSyxDQUFDLENBQUMsRUFBRUcsY0FBYyxDQUFDLEdBQUdELFNBQVM7O1lBR2xGLE9BQU8sR0FBR0gsT0FBTyxLQUFLO1VBQ3ZCOzs7Ozs7Ozs7OztVQ2JBOztVQUVBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVosT0FBQTtZQUNBYSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixNQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQStCLEdBQUEsR0FBQS9CLE9BQUE7VUFRTSxTQUFVZ0MsVUFBVUEsQ0FBQztZQUFFdkIsSUFBSTtZQUFFd0IsT0FBTztZQUFFQztVQUFLLENBQW1CO1lBQ25FLElBQUksQ0FBQ3pCLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTTtjQUFFMEIsS0FBSztjQUFFQyxXQUFXO2NBQUVDO1lBQU0sQ0FBRSxHQUFHSCxLQUFLLENBQUNJLEtBQUssQ0FBQ0MsS0FBSztZQUV4RCxPQUNDVixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxNQUFBLENBQUFZLFVBQVU7Y0FBQ0MsV0FBVyxFQUFFTixNQUFNO2NBQUVPLFNBQVMsRUFBRVgsT0FBTztjQUFFQSxPQUFPLEVBQUVBO1lBQU8sR0FDcEVKLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGlCQUNDWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxhQUFLTixLQUFLLENBQU0sRUFDaEJOLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNWLEdBQUEsQ0FBQWMsT0FBTztjQUFDQyxPQUFPLEVBQUMsS0FBSztjQUFDQyxTQUFTLEVBQUM7WUFBSSxFQUFHLEVBQ3hDbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsWUFBSUwsV0FBVyxDQUFLLENBQ1osQ0FDRztVQUVmOzs7Ozs7Ozs7OztVQ3hCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQVAsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUFnRCxNQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFFQSxJQUFBa0QsYUFBQSxHQUFBbEQsT0FBQTtVQUNNLFNBQVVtRCxhQUFhQSxDQUFDO1lBQUVqQixLQUFLO1lBQUVrQjtVQUFLLENBQWlEO1lBQzVGO1lBRUEsT0FBT3ZCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQUssS0FBSztjQUFDQyxPQUFPLEVBQUM7WUFBTyxHQUFFcEIsS0FBSyxDQUFDa0IsS0FBSyxDQUFDLENBQVM7VUFDckQ7VUFFTSxTQUFVRyxVQUFVQSxDQUFDO1lBQzFCQyxJQUFJLEdBQUcsU0FBUztZQUNoQkMsT0FBTztZQUNQVixTQUFTO1lBQ1RXLElBQUksR0FBRyxJQUFJO1lBQ1hqRCxJQUFJLEdBQUc7VUFBSSxDQU9YO1lBQ0FzQyxTQUFTLEdBQUcsZ0NBQWdDUyxJQUFJLEdBQUdULFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFckYsTUFBTTtjQUFFMUM7WUFBSyxDQUFFLEdBQUcsSUFBQTRDLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFFcEMsT0FDQzlCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNTLGFBQUEsQ0FBQVUsTUFBTSxDQUFDQyxHQUFHO2NBQ1ZDLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkMsS0FBSyxFQUFFO2lCQUNQO2dCQUNEQyxDQUFDLEVBQUU7ZUFDSDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xKLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFO2lCQUNWO2dCQUNESCxPQUFPLEVBQUU7ZUFDVDtjQUNEaEIsU0FBUyxFQUFFQTtZQUFTLEdBRW5CVSxPQUFPLENBQ0k7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBLElBQUE1QixNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWdELE1BQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUVBLElBQUFrRCxhQUFBLEdBQUFsRCxPQUFBO1VBQ00sU0FBVW1ELGFBQWFBLENBQUM7WUFBRWpCLEtBQUs7WUFBRWtCO1VBQUssQ0FBaUQ7WUFDNUY7WUFFQSxPQUFPdkIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBSyxLQUFLO2NBQUNDLE9BQU8sRUFBQztZQUFPLEdBQUVwQixLQUFLLENBQUNrQixLQUFLLENBQUMsQ0FBUztVQUNyRDtVQUVNLFNBQVVrQixhQUFhQSxDQUFDO1lBQzdCZCxJQUFJLEdBQUcsU0FBUztZQUNoQkMsT0FBTztZQUNQVixTQUFTO1lBQ1RXLElBQUksR0FBRyxJQUFJO1lBQ1hqRCxJQUFJLEdBQUc7VUFBSSxDQU9YO1lBQ0FzQyxTQUFTLEdBQUcsZ0NBQWdDUyxJQUFJLEdBQUdULFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckYsTUFBTSxDQUFDd0IsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBRzNDLE1BQUEsQ0FBQVcsT0FBSyxDQUFDaUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUc5QyxNQUFBLENBQUFXLE9BQUssQ0FBQ2lDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUMsTUFBTTtjQUFFcEU7WUFBSyxDQUFFLEdBQUcsSUFBQTRDLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDcEM5QixNQUFBLENBQUFXLE9BQUssQ0FBQ29DLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ25FLElBQUksRUFBRTtnQkFDVmtFLFFBQVEsQ0FBQ0UsU0FBUyxDQUFDO2dCQUNuQkwsU0FBUyxDQUFDSyxTQUFTLENBQUM7Z0JBQ3BCOztjQUVELE1BQU1ILEtBQUssR0FBR0ksVUFBVSxDQUFDLE1BQUs7Z0JBQzdCLElBQUlyRSxJQUFJLEVBQUU7a0JBQ1QrRCxTQUFTLENBQUMsSUFBSSxDQUFDOztnQkFHaEJuRSxLQUFLLENBQUMwRSxVQUFVLEVBQUU7Y0FDbkIsQ0FBQyxFQUFFckIsSUFBSSxDQUFDO2NBQ1JpQixRQUFRLENBQUNELEtBQUssQ0FBQztjQUVmLE9BQU8sTUFBTU0sWUFBWSxDQUFDTixLQUFLLENBQUM7WUFDakMsQ0FBQyxFQUFFLENBQUNqQixPQUFPLEVBQUVoRCxJQUFJLENBQUMsQ0FBQztZQUVuQixJQUFJOEQsTUFBTSxJQUFJLENBQUM5RCxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRWhDLE9BQ0NvQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxhQUFBLENBQUFVLE1BQU0sQ0FBQ0MsR0FBRztjQUNWQyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JDLEtBQUssRUFBRTtpQkFDUDtnQkFDREMsQ0FBQyxFQUFFO2VBQ0g7Y0FDREMsSUFBSSxFQUFFO2dCQUNMSixVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTtpQkFDVjtnQkFDREgsT0FBTyxFQUFFO2VBQ1Q7Y0FDRGhCLFNBQVMsRUFBRUE7WUFBUyxHQUVuQlUsT0FBTyxDQUNJO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVBLElBQUE1QixNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWlGLFdBQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQVVNLFNBQVVrRixXQUFXQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsUUFBUTtZQUFFQyxLQUFLO1lBQUVDLFFBQVEsR0FBRztVQUFDLENBQW9CO1lBQ3BGLE1BQU07Y0FBRXBELEtBQUs7Y0FBRTdCO1lBQUssQ0FBRSxHQUFHLElBQUE0QyxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBQzNDLE1BQU00QixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFbEYsS0FBSyxDQUFDbUYsUUFBUSxJQUFJbkYsS0FBSyxDQUFDb0YsS0FBSyxDQUFDRDtZQUFRLENBQUU7WUFDckUsTUFBTUUsSUFBSSxHQUErQjtjQUN4Q0MsUUFBUSxFQUFFLEVBQUU7Y0FDWnpCLFFBQVEsRUFBRSxFQUFFO2NBQ1owQixRQUFRLEVBQUU7YUFDVjtZQUVELE1BQU1DLE1BQU0sR0FDWEgsSUFBSSxDQUFDUCxJQUFJLENBQUMsRUFBRVcsR0FBRyxDQUFDLENBQUMsQ0FBQ2xFLEtBQUssRUFBRXlELEtBQUssQ0FBQyxFQUFFVSxLQUFLLEtBQ3JDbEUsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dDLFdBQUEsQ0FBQWUsTUFBTTtjQUNOYixJQUFJLEVBQUVBLElBQUk7Y0FBQSxHQUNOSSxRQUFRO2NBQUEsY0FDQVEsS0FBSztjQUNqQkUsT0FBTyxFQUFFQSxDQUFBLEtBQU1iLFFBQVEsQ0FBQ3hELEtBQUssQ0FBQztjQUM5QnNFLEdBQUcsRUFBRUgsS0FBSztjQUNWbkUsS0FBSyxFQUFFQTtZQUFLLEdBRVh5RCxLQUFLLENBRVAsQ0FBQyxJQUFJLEVBQUU7WUFFVCxPQUNDeEQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBTzBELE9BQU8sRUFBRWhCO1lBQUksR0FBR0UsS0FBSyxDQUFTLEVBQ3JDeEQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dDLFdBQUEsQ0FBQW1CLFdBQVc7Y0FBQ2QsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FBTUM7WUFBUSxHQUMzQ00sTUFBTSxDQUNNLENBQ1Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQWhFLE1BQUEsR0FBQTdCLE9BQUE7VUErQk8sTUFBTXFHLGFBQWEsR0FBQXRGLE9BQUEsQ0FBQXNGLGFBQUEsR0FBR3hFLE1BQUEsQ0FBQVcsT0FBSyxDQUFDOEQsYUFBYSxDQUFDLEVBQTRCLENBQUM7VUFDdkUsTUFBTTNDLGdCQUFnQixHQUFHQSxDQUFBLEtBQU05QixNQUFBLENBQUFXLE9BQUssQ0FBQytELFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUN0RixPQUFBLENBQUE0QyxnQkFBQSxHQUFBQSxnQkFBQTtVQVMvRCxNQUFNNkMsc0JBQXNCLEdBQUF6RixPQUFBLENBQUF5RixzQkFBQSxHQUFHM0UsTUFBQSxDQUFBVyxPQUFLLENBQUM4RCxhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUM1RSxNQUFNRyx5QkFBeUIsR0FBR0EsQ0FBQSxLQUFNNUUsTUFBQSxDQUFBVyxPQUFLLENBQUMrRCxVQUFVLENBQUNDLHNCQUFzQixDQUFDO1VBQUN6RixPQUFBLENBQUEwRix5QkFBQSxHQUFBQSx5QkFBQTtVQU9qRixNQUFNQyxrQkFBa0IsR0FBQTNGLE9BQUEsQ0FBQTJGLGtCQUFBLEdBQUc3RSxNQUFBLENBQUFXLE9BQUssQ0FBQzhELGFBQWEsQ0FBQyxFQUEwQixDQUFDO1VBQzFFLE1BQU1LLHFCQUFxQixHQUFHQSxDQUFBLEtBQU05RSxNQUFBLENBQUFXLE9BQUssQ0FBQytELFVBQVUsQ0FBQ0csa0JBQWtCLENBQUM7VUFBQzNGLE9BQUEsQ0FBQTRGLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xEaEYsSUFBQTlFLE1BQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBa0QsYUFBQSxHQUFBbEQsT0FBQTtVQUVNLFNBQVU0RyxXQUFXQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBRyxJQUF5QjtZQUFFRCxRQUFRLEVBQUUsSUFBSTtZQUFFQyxHQUFHLEVBQUU7VUFBRSxDQUFFO1lBQzlGLE9BQ0NqRixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxhQUFBLENBQUFVLE1BQU0sQ0FBQ0MsR0FBRztjQUNWZCxTQUFTLEVBQUMsd0JBQXdCO2NBQ2xDZSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JDLEtBQUssRUFBRTtpQkFDUDtnQkFDREMsQ0FBQyxFQUFFO2VBQ0g7Y0FDREMsSUFBSSxFQUFFO2dCQUNMSixVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTtpQkFDVjtnQkFDREgsT0FBTyxFQUFFOztZQUNULEdBRUE4QyxRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQWhGLE1BQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBOEIsTUFBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUErRyxNQUFBLEdBQUEvRyxPQUFBO1VBQ0EsSUFBQWlGLFdBQUEsR0FBQWpGLE9BQUE7VUFFQSxJQUFBK0IsR0FBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUFnSCxRQUFBLEdBQUFoSCxPQUFBO1VBVU87VUFBVSxTQUFVaUgsaUJBQWlCQSxDQUFDO1lBQUU1RyxLQUFLO1lBQUU2RyxNQUFNO1lBQUV6RyxJQUFJO1lBQUV3QjtVQUFPLENBQVU7WUFDcEYsTUFBTTtjQUFFa0Y7WUFBSyxDQUFFLEdBQUdELE1BQU07WUFDeEIsTUFBTSxDQUFDRSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHeEYsTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU0sQ0FBQ3JCLEtBQUssRUFBRWtFLFFBQVEsQ0FBQyxHQUFHekYsTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQ2hFLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEI7WUFDQSxNQUFNbUMsU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixJQUFJO2dCQUNIeUUsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFFaEIsTUFBTWhILEtBQUssQ0FBQ2tILElBQUksQ0FBQztrQkFBRSxHQUFHTCxNQUFNO2tCQUFFTSxLQUFLLEVBQUU7Z0JBQVMsQ0FBRSxDQUFDO2dCQUVqRFIsUUFBQSxDQUFBUyxPQUFPLENBQUNDLFlBQVksQ0FBQyxFQUFFLEVBQUU3QyxTQUFTLEVBQUUsMEJBQTBCeEUsS0FBSyxDQUFDb0YsS0FBSyxDQUFDa0MsRUFBRSxFQUFFLENBQUM7Z0JBQy9FMUYsT0FBTyxFQUFFO2dCQUNUNUIsS0FBSyxDQUFDdUgsUUFBUSxDQUFDO2tCQUNkbkUsT0FBTyxFQUFFcEQsS0FBSyxDQUFDNkIsS0FBSyxDQUFDMkYsS0FBSyxDQUFDQyxRQUFRLENBQUNQLElBQUk7a0JBQ3hDUSxRQUFRLEVBQUU7aUJBQ1YsQ0FBQztlQUNGLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUM3RSxLQUFLLENBQUM0RSxDQUFDLENBQUM7Z0JBQ2hCVixRQUFRLENBQUNqSCxLQUFLLENBQUM2SCxXQUFXLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDO2VBQ2hELFNBQVM7Z0JBQ1RmLFVBQVUsQ0FBQyxLQUFLLENBQUM7O1lBRW5CLENBQUM7WUFFRCxNQUFNO2NBQUVhO1lBQVcsQ0FBRSxHQUFHN0gsS0FBSztZQUM3QixNQUFNNkIsS0FBSyxHQUFHN0IsS0FBSyxDQUFDNkIsS0FBSyxDQUFDMkYsS0FBSyxDQUFDUSxZQUFZO1lBQzVDLE1BQU1DLFdBQVcsR0FBR0osV0FBVyxDQUFDSyxPQUFPO1lBQ3ZDLE1BQU1wRCxJQUFJLEdBQUdnQyxLQUFLLENBQUNxQixNQUFNLEtBQUssTUFBTSxHQUFHckIsS0FBSyxDQUFDc0IsV0FBVyxHQUFHdEIsS0FBSyxDQUFDaEMsSUFBSTtZQUVyRSxPQUNDdEQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsTUFBQSxDQUFBNEcsS0FBSztjQUFDakksSUFBSTtjQUFDc0MsU0FBUyxFQUFDLHlCQUF5QjtjQUFDZCxPQUFPLEVBQUVBO1lBQU8sR0FDL0RKLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGNBQ0NaLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGlCQUNDWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxhQUFLUCxLQUFLLENBQUNDLEtBQUssQ0FBTSxFQUN0Qk4sTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsZUFBT1AsS0FBSyxDQUFDeUcsUUFBUSxDQUFRLENBQ3JCLEVBQ1Q5RyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUFvQixhQUFhO2NBQUNDLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQy9CdkIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFDO1lBQWlCLEdBQy9CbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLE1BQUEsQ0FBQTZCLFVBQVU7Y0FBQ3pCLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQzVCdEYsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFDO1lBQVksR0FDMUJsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxhQUFLMEMsSUFBSSxDQUFNLEVBQ2Z0RCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxlQUFPUCxLQUFLLENBQUMyRyxnQkFBZ0IsRSxJQUFTLENBQ2pDLENBQ0QsRUFDTmhILE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUErQixHQUM3Q2xCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGVBQU9QLEtBQUssQ0FBQ0UsV0FBVyxDQUFRLENBQzNCLEVBQ05QLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQVNNLFNBQVMsRUFBQztZQUF5QixHQUMzQ2xCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUN3QyxXQUFBLENBQUFlLE1BQU07Y0FBQzFDLE9BQU8sRUFBQyxTQUFTO2NBQUN3RixRQUFRO2NBQUM3QyxPQUFPLEVBQUVoRSxPQUFPO2NBQUVzRCxRQUFRLEVBQUU2QjtZQUFPLEdBQ3BFa0IsV0FBVyxDQUFDUyxNQUFNLENBQ1gsRUFDVGxILE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUN3QyxXQUFBLENBQUFlLE1BQU07Y0FBQzFDLE9BQU8sRUFBQyxTQUFTO2NBQUMyQyxPQUFPLEVBQUVyRCxTQUFTO2NBQUUyQyxRQUFRLEVBQUU2QjtZQUFPLEdBQzdEa0IsV0FBVyxDQUFDVSxRQUFRLENBQ2IsQ0FDQSxDQUNMLENBQ0M7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RUEsSUFBQUMsTUFBQSxHQUFBakosT0FBQTtVQUNBLElBQUFrSixZQUFBLEdBQUFsSixPQUFBO1VBQ0EsSUFBQTZCLE1BQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQVlNLFNBQVVtSixhQUFhQSxDQUFDO1lBQUU1RDtVQUFRLENBQXlCO1lBQ2hFLE1BQU07Y0FDTHJELEtBQUssRUFBRTtnQkFBRXlELFFBQVEsRUFBRXpEO2NBQUssQ0FBRTtjQUUxQjdCO1lBQUssQ0FDTCxHQUFHLElBQUE0QyxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRXlGLFNBQVM7Y0FBRWxDO1lBQU0sQ0FBRSxHQUFHLElBQUFqRSxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBQ2hELE1BQU0wRixVQUFVLEdBQUlDLFNBQXNCLElBQUk7Y0FDN0MsT0FBT0EsU0FBUyxDQUFDeEQsR0FBRyxDQUFFSCxRQUFtQixLQUFNO2dCQUFFL0QsS0FBSyxFQUFFK0QsUUFBUSxDQUFDZ0MsRUFBRTtnQkFBRXRDLEtBQUssRUFBRU0sUUFBUSxDQUFDUjtjQUFJLENBQUUsQ0FBQyxDQUFDO1lBQzlGLENBQUM7WUFFRCxNQUFNLENBQUNvRSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHM0gsTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLENBQUM0RSxVQUFVLENBQUNoSixLQUFLLENBQUNpSixTQUFTLENBQUMsQ0FBQztZQUN6RSxJQUFJMUgsS0FBSyxHQUFHaUQsU0FBUztZQUVyQixJQUFJeEUsS0FBSyxDQUFDb0osZUFBZSxFQUFFO2NBQzFCN0gsS0FBSyxHQUFHdkIsS0FBSyxDQUFDb0osZUFBZSxDQUFDOUIsRUFBRTs7WUFHakMsSUFBQXNCLE1BQUEsQ0FBQVMsU0FBUyxFQUNSLENBQUNySixLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0osTUFBTXNKLEtBQUssR0FBVU4sVUFBVSxDQUFDaEosS0FBSyxDQUFDaUosU0FBUyxDQUFDO2NBQ2hERSxVQUFVLENBQUMsQ0FBQyxHQUFHRyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDLEVBQ0QsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsQ0FDckM7WUFFRCxNQUFNdkUsUUFBUSxHQUFHLE1BQU93RSxLQUEyQyxJQUFJO2NBQ3RFdkosS0FBSyxDQUFDd0osa0JBQWtCLENBQUNELEtBQUssQ0FBQ0UsTUFBTSxDQUFDbEksS0FBSyxDQUFDO2NBRTVDd0gsU0FBUyxDQUFFbEMsTUFBMkIsSUFBSTtnQkFDekMsT0FBTztrQkFBRSxHQUFHQSxNQUFNO2tCQUFFdkIsUUFBUSxFQUFFO29CQUFFb0UsUUFBUSxFQUFFSCxLQUFLLENBQUNFLE1BQU0sQ0FBQ2xJO2tCQUFLO2dCQUFFLENBQUU7Y0FDakUsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU1vSSxVQUFVLEdBQUc7Y0FBRUEsVUFBVSxFQUFFM0osS0FBSyxDQUFDNEosS0FBSyxJQUFJMUUsUUFBUSxJQUFJLENBQUNnRSxPQUFPLENBQUNwSTtZQUFNLENBQUU7WUFFN0UsT0FDQ1UsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsY0FDQ1osTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBTzBELE9BQU8sRUFBQztZQUFFLEdBQUVqRSxLQUFLLENBQUNtRCxLQUFLLENBQVMsRUFDdkN4RCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsWUFBQSxDQUFBZ0IsV0FBVztjQUNYL0UsSUFBSSxFQUFDLFVBQVU7Y0FDZmdGLFdBQVcsRUFBRWpJLEtBQUssQ0FBQ2tJLE1BQU07Y0FDekJ4SSxLQUFLLEVBQUVBLEtBQUs7Y0FDWjJILE9BQU8sRUFBRUEsT0FBTztjQUNoQm5FLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2Q0RTtZQUFVLEVBQ2IsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFQSxJQUFBbkksTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUFrSixZQUFBLEdBQUFsSixPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBcUssU0FBQSxHQUFBckssT0FBQTtVQUNBLElBQUFzSyxNQUFBLEdBQUF0SyxPQUFBO1VBRU0sU0FBVXVLLGNBQWNBLENBQUM7WUFBRWhGO1VBQVEsQ0FBeUI7WUFDakUsTUFBTTtjQUFFckQsS0FBSztjQUFFN0IsS0FBSztjQUFFK0ksU0FBUztjQUFFbEM7WUFBTSxDQUFFLEdBQUcsSUFBQWpFLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFFOUQsTUFBTXlCLFFBQVEsR0FBRyxNQUFPd0UsS0FBMkMsSUFBSTtjQUN0RSxNQUFNdkosS0FBSyxDQUFDbUssYUFBYSxDQUFDWixLQUFLLENBQUNFLE1BQU0sQ0FBQ2xJLEtBQUssQ0FBQztjQUU3Q3dILFNBQVMsQ0FBRWxDLE1BQTJCLEtBQU07Z0JBQzNDLEdBQUdBLE1BQU07Z0JBRVR0QixRQUFRLEVBQUVnRSxLQUFLLENBQUNFLE1BQU0sQ0FBQ2xJO2VBQ3ZCLENBQUMsQ0FBQztZQUNKLENBQUM7WUFDRCxNQUFNMkgsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDekQsR0FBRyxDQUFDMkUsSUFBSSxLQUFLO2NBQUU3SSxLQUFLLEVBQUU2SSxJQUFJO2NBQUVwRixLQUFLLEVBQUVuRCxLQUFLLENBQUN3SSxTQUFTLENBQUNELElBQUk7WUFBQyxDQUFFLENBQUMsQ0FBQztZQUN6RixNQUFNVCxVQUFVLEdBQUc7Y0FBRUEsVUFBVSxFQUFFM0osS0FBSyxDQUFDNEosS0FBSyxJQUFJMUU7WUFBUSxDQUFFO1lBRTFELE9BQ0MxRCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFBWixNQUFBLENBQUFXLE9BQUEsQ0FBQW1JLFFBQUEsUUFDQzlJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGNBQ0NaLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU8wRCxPQUFPLEVBQUM7WUFBRSxHQUFFakUsS0FBSyxDQUFDd0ksU0FBUyxDQUFDTixNQUFNLENBQUMvRSxLQUFLLENBQVMsRUFDeER4RCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsWUFBQSxDQUFBZ0IsV0FBVztjQUNYQyxXQUFXLEVBQUVqSSxLQUFLLENBQUN3SSxTQUFTLENBQUNOLE1BQU0sQ0FBQ0QsV0FBVztjQUMvQ3ZJLEtBQUssRUFBRXZCLEtBQUssQ0FBQ29GLEtBQUssQ0FBQ0csUUFBUTtjQUMzQlQsSUFBSSxFQUFDLFVBQVU7Y0FDZm9FLE9BQU8sRUFBRUEsT0FBTztjQUNoQm5FLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2Q0RTtZQUFVLEVBQ2IsQ0FDRyxFQUNObkksTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRILFNBQUEsQ0FBQWxCLGFBQWE7Y0FBQzVELFFBQVEsRUFBRUE7WUFBUSxFQUFJLEVBQ3JDMUQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzZILE1BQUEsQ0FBQU0sa0JBQWtCO2NBQUNyRixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUN4QztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDQSxJQUFBMEQsTUFBQSxHQUFBakosT0FBQTtVQUNBLElBQUFrSixZQUFBLEdBQUFsSixPQUFBO1VBQ0EsSUFBQTZCLE1BQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUVNLFNBQVU0SyxrQkFBa0JBLENBQUM7WUFBRXJGO1VBQVEsQ0FBeUI7WUFDckUsTUFBTTtjQUNMckQsS0FBSyxFQUFFO2dCQUFFMkksS0FBSyxFQUFFM0k7Y0FBSyxDQUFFO2NBQ3ZCZ0YsTUFBTTtjQUNON0c7WUFBSyxDQUNMLEdBQUcsSUFBQTRDLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTTtjQUFFeUY7WUFBUyxDQUFFLEdBQUcsSUFBQW5HLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDeEMsTUFBTW1ILFNBQVMsR0FBSUQsS0FBVSxLQUFNO2NBQUVqSixLQUFLLEVBQUVpSixLQUFLLENBQUNsRCxFQUFFO2NBQUV0QyxLQUFLLEVBQUV3RixLQUFLLENBQUN4RjtZQUFLLENBQUUsQ0FBQztZQUMzRSxNQUFNLENBQUNrRSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHM0gsTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLENBQUNwRSxLQUFLLENBQUMwSyxjQUFjLENBQUNqRixHQUFHLENBQUNnRixTQUFTLENBQUMsQ0FBQztZQUNqRixNQUFNbEosS0FBSyxHQUFHc0YsTUFBTSxDQUFDdkIsUUFBUSxFQUFFa0YsS0FBSztZQUNwQyxJQUFBNUIsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQ3JKLEtBQUssQ0FBQyxFQUFFLE1BQU1tSixVQUFVLENBQUMsQ0FBQyxHQUFHbkosS0FBSyxDQUFDMEssY0FBYyxDQUFDakYsR0FBRyxDQUFDZ0YsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQzlFLGtCQUFrQixFQUNsQixrQkFBa0IsQ0FDbEIsQ0FBQztZQUVGLE1BQU0xRixRQUFRLEdBQUl3RSxLQUEyQyxJQUFJO2NBQ2hFLE1BQU1qRSxRQUFRLEdBQUc7Z0JBQUVvRSxRQUFRLEVBQUU3QyxNQUFNLENBQUN2QixRQUFRLENBQUNvRSxRQUFRO2dCQUFFYyxLQUFLLEVBQUVqQixLQUFLLENBQUNFLE1BQU0sQ0FBQ2xJO2NBQUssQ0FBRTtjQUNsRndILFNBQVMsQ0FBRWxDLE1BQTJCLElBQUk7Z0JBQ3pDLE9BQU87a0JBQUUsR0FBR0EsTUFBTTtrQkFBRXZCO2dCQUFRLENBQUU7Y0FDL0IsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU1xRSxVQUFVLEdBQUc7Y0FBRUEsVUFBVSxFQUFFM0osS0FBSyxDQUFDNEosS0FBSyxJQUFJMUUsUUFBUSxJQUFJLENBQUNnRSxPQUFPLENBQUNwSSxNQUFNLElBQUksQ0FBQytGLE1BQU0sQ0FBQ3ZCLFFBQVEsRUFBRW9FO1lBQVEsQ0FBRTtZQUUzRyxPQUNDbEksTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsY0FDQ1osTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBTzBELE9BQU8sRUFBQztZQUFFLEdBQUVqRSxLQUFLLENBQUNtRCxLQUFLLENBQVMsRUFDdkN4RCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsWUFBQSxDQUFBZ0IsV0FBVztjQUNYL0UsSUFBSSxFQUFDLE9BQU87Y0FDWmdGLFdBQVcsRUFBRWpJLEtBQUssQ0FBQ2tJLE1BQU07Y0FDekJ4SSxLQUFLLEVBQUVBLEtBQUs7Y0FDWjJILE9BQU8sRUFBRUEsT0FBTztjQUNoQm5FLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2Q0RTtZQUFVLEVBQ2IsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBZ0IsS0FBQSxHQUFBaEwsT0FBQTtVQUNBLElBQUE2QixNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWdELE1BQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUVNLFNBQVVpTCxjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRS9ELE1BQU07Y0FBRWhGLEtBQUs7Y0FBRWtELFFBQVE7Y0FBRS9FO1lBQUssQ0FBRSxHQUFHLElBQUE0QyxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBRTdELE1BQU11SCxTQUFTLEdBQUdoSixLQUFLLENBQUMyRixLQUFLLENBQUNzRCxJQUFJO1lBRWxDLE1BQU1DLGlCQUFpQixHQUFJeEIsS0FBNkMsSUFBSTtjQUMzRXZKLEtBQUssQ0FBQ2dMLGlCQUFpQixFQUFFO2NBQ3pCakcsUUFBUSxDQUFDd0UsS0FBSyxDQUFDO1lBQ2hCLENBQUM7WUFFRCxPQUNDL0gsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQVosTUFBQSxDQUFBVyxPQUFBLENBQUFtSSxRQUFBLFFBQ0M5SSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBa0IsR0FDaENsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUksS0FBQSxDQUFBTSxRQUFRO2NBQ1JsRyxRQUFRLEVBQUVnRyxpQkFBaUI7Y0FDM0J4SixLQUFLLEVBQUVzRixNQUFNLENBQUNxRSxTQUFTO2NBQ3ZCcEcsSUFBSSxFQUFDLFdBQVc7Y0FDaEJnRixXQUFXLEVBQUVlLFNBQVMsQ0FBQ0ssU0FBUyxDQUFDQyxRQUFRO2NBQ3pDQyxPQUFPO2NBQ1BDLFNBQVMsRUFBRTtZQUFHLEVBQ2IsRUFDRjdKLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQXNCLGFBQWE7Y0FDYjdELElBQUksRUFBRSxDQUFDLENBQUNKLEtBQUssQ0FBQ2tDLEtBQUssSUFBSWxDLEtBQUssQ0FBQ2tDLEtBQUssQ0FBQ3dGLFFBQVEsS0FBSyxXQUFXO2NBQzNEdkUsSUFBSSxFQUFFbkQsS0FBSyxFQUFFa0MsS0FBSyxFQUFFaUIsSUFBSTtjQUN4QlQsU0FBUyxFQUFDLGtEQUFrRDtjQUM1RFUsT0FBTyxFQUFFcEQsS0FBSyxFQUFFa0MsS0FBSyxFQUFFa0I7WUFBTyxFQUM3QixDQUNHLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQTFCLEdBQUEsR0FBQS9CLE9BQUE7VUFDQSxJQUFBa0osWUFBQSxHQUFBbEosT0FBQTtVQUNBLElBQUE2QixNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBMkwsZUFBQSxHQUFBM0wsT0FBQTtVQUVNLFNBQVU0TCxjQUFjQSxDQUFDO1lBQUVyRztVQUFRLElBQTZCLEVBQUU7WUFDdkUsTUFBTTtjQUNMckQsS0FBSyxFQUFFO2dCQUNOMkYsS0FBSyxFQUFFO2tCQUFFc0QsSUFBSSxFQUFFVTtnQkFBTTtjQUFFLENBQ3ZCO2NBQ0QzSixLQUFLLEVBQUU7Z0JBQUU0SixhQUFhLEVBQUVDO2NBQUksQ0FBRTtjQUM5QjFMO1lBQUssQ0FDTCxHQUFHLElBQUE0QyxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRXlGLFNBQVM7Y0FBRWxIO1lBQUssQ0FBRSxHQUFHLElBQUFlLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFFL0MsTUFBTSxDQUFDMkIsUUFBUSxFQUFFMEcsV0FBVyxDQUFDLEdBQUduSyxNQUFBLENBQUFXLE9BQUssQ0FBQ2lDLFFBQVEsQ0FBTSxJQUFJLENBQUM7WUFDekQsTUFBTSxDQUFDd0gsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHckssTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLENBQXVDO2NBQ2hHMEgsT0FBTyxFQUFFLEVBQUU7Y0FDWDdJLE9BQU8sRUFBRTthQUNULENBQUM7WUFFRixJQUFJOEksYUFBYSxHQUFHO2NBQUV4SyxLQUFLLEVBQUUsRUFBRTtjQUFFeUQsS0FBSyxFQUFFd0csTUFBTSxDQUFDUSxhQUFhLENBQUNqQztZQUFNLENBQUU7WUFDckUsSUFBSS9KLEtBQUssQ0FBQ29GLEtBQUssQ0FBQzBCLEtBQUssRUFBRTtjQUN0QmlGLGFBQWEsR0FBRztnQkFBRXhLLEtBQUssRUFBRXZCLEtBQUssQ0FBQ29GLEtBQUssQ0FBQzBCLEtBQUssQ0FBQ1EsRUFBRTtnQkFBRXRDLEtBQUssRUFBRWhGLEtBQUssQ0FBQ29GLEtBQUssQ0FBQzBCLEtBQUssQ0FBQ2hDO2NBQUksQ0FBRTs7WUFHL0UsTUFBTXZELEtBQUssR0FBR3ZCLEtBQUssQ0FBQ29GLEtBQUssQ0FBQzBCLEtBQUssRUFBRVEsRUFBRTtZQUNuQyxNQUFNMkUsS0FBSyxHQUFHO2NBQUV0QyxVQUFVLEVBQUUzSixLQUFLLENBQUNrTSxVQUFVLEVBQUVwTCxNQUFNLEtBQUssQ0FBQyxJQUFJZCxLQUFLLENBQUM0SixLQUFLLElBQUkxRTtZQUFRLENBQUU7WUFFdkYsTUFBTUgsUUFBUSxHQUFHLE1BQU93RSxLQUEwQyxJQUFJO2NBQ3JFc0MsaUJBQWlCLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxFQUFFO2dCQUFFN0ksT0FBTyxFQUFFO2NBQUUsQ0FBRSxDQUFDO2NBRS9DLE1BQU02RCxLQUFLLEdBQUcsTUFBTTlHLEtBQUssQ0FBQ21NLGdCQUFnQixDQUFDNUMsS0FBSyxDQUFDRSxNQUFNLENBQUNsSSxLQUFLLENBQUM7Y0FDOURxRyxPQUFPLENBQUN3RSxHQUFHLENBQUMsR0FBRyxFQUFFdEYsS0FBSyxDQUFDO2NBQ3ZCLElBQUlBLEtBQUssQ0FBQ3FCLE1BQU0sS0FBSyxjQUFjLEVBQUU7Z0JBQ3BDLE1BQU1yQixLQUFLLENBQUN1RixVQUFVLEVBQUU7O2NBRXpCVixXQUFXLENBQUM3RSxLQUFLLENBQUM7Y0FFbEIsSUFBSUEsS0FBSyxDQUFDN0UsS0FBSyxFQUFFcUssT0FBTyxLQUFLOUgsU0FBUyxFQUFFO2dCQUN2Q3FILGlCQUFpQixDQUFDO2tCQUFFQyxPQUFPLEVBQUVqSyxLQUFLLENBQUMwSyxNQUFNLENBQUN0SyxLQUFLLENBQUN1SyxXQUFXO2tCQUFFdkosT0FBTyxFQUFFO2dCQUFPLENBQUUsQ0FBQztnQkFDaEYyRSxPQUFPLENBQUM3RSxLQUFLLENBQUMsNkVBQTZFLENBQUM7Z0JBQzVGOztjQUVELE1BQU07Z0JBQUUwSjtjQUFLLENBQUUsR0FBRzNGLEtBQUssQ0FBQzdFLEtBQUssQ0FBQ3FLLE9BQU87Y0FDckMsTUFBTTdFLFFBQVEsR0FBRzVGLEtBQUssQ0FBQzBLLE1BQU0sQ0FBQ3RLLEtBQUs7Y0FDbkMsTUFBTW1CLE9BQU8sR0FBR3FKLEtBQUssR0FBR2hGLFFBQVEsQ0FBQ2lGLFNBQVMsR0FBR2pGLFFBQVEsQ0FBQytFLFdBQVc7Y0FDakUsTUFBTXJKLElBQUksR0FBR3NKLEtBQUssR0FBRyxTQUFTLEdBQUcsT0FBTztjQUN4Q1osaUJBQWlCLENBQUM7Z0JBQUVDLE9BQU8sRUFBRTFJLE9BQU87Z0JBQUVILE9BQU8sRUFBRUU7Y0FBSSxDQUFFLENBQUM7Y0FFdEQ0RixTQUFTLENBQUVsQyxNQUFXLEtBQU07Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRUM7Y0FBSyxDQUFFLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBRUQsT0FDQ3RGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUFaLE1BQUEsQ0FBQVcsT0FBQSxDQUFBbUksUUFBQSxRQUNDOUksTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsR0FBQSxDQUFBaUwsUUFBUTtjQUFDOUssS0FBSyxFQUFFNkosSUFBSTtjQUFFNUcsSUFBSSxFQUFDLGVBQWU7Y0FBQzhILEVBQUUsRUFBQyxLQUFLO2NBQUNsSyxTQUFTLEVBQUM7WUFBZSxHQUM3RWxCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUFpQixHQUMvQmxCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU8wRCxPQUFPLEVBQUM7WUFBRSxHQUFFMEYsTUFBTSxDQUFDUSxhQUFhLENBQUNoSCxLQUFLLENBQVMsRUFDdER4RCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsWUFBQSxDQUFBZ0IsV0FBVztjQUNYdEksS0FBSyxFQUFFQSxLQUFLO2NBQ1p1SSxXQUFXLEVBQUUwQixNQUFNLENBQUNRLGFBQWEsQ0FBQ2pDLE1BQU07Y0FDeENqRixJQUFJLEVBQUMsT0FBTztjQUNab0UsT0FBTyxFQUFFbEosS0FBSyxDQUFDa00sVUFBVTtjQUN6Qm5ILFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2RrSDtZQUFLLEVBQ1IsRUFDRnpLLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNrSixlQUFBLENBQUF1QixjQUFjO2NBQUEsR0FBS2pCO1lBQWMsRUFBSSxDQUNqQyxDQUNJLENBQ1Q7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUEsSUFBQXBLLE1BQUEsR0FBQTdCLE9BQUE7VUFRQSxNQUFNbU4sZUFBZSxHQUEyQjtZQUMvQ0MsT0FBTyxFQUFFLGNBQWM7WUFDdkJDLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0JDLFFBQVEsRUFBRSxlQUFlO1lBQ3pCQyxPQUFPLEVBQUUsY0FBYztZQUN2QkMsSUFBSSxFQUFFLFdBQVc7WUFDakJwSyxLQUFLLEVBQUUsWUFBWTtZQUNuQnFLLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCakwsT0FBTyxFQUFFO1dBQ1Q7VUFFTTtVQUFVLFNBQVUwSyxjQUFjQSxDQUFDO1lBQ3pDZixPQUFPO1lBQ1A3SSxPQUFPLEdBQUcsU0FBUztZQUNuQlAsU0FBUyxHQUFHLEVBQUU7WUFDZCxHQUFHMks7VUFBSSxDQUNjO1lBQ3JCLElBQUksQ0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLElBQUk7WUFDekIsTUFBTXdCLFlBQVksR0FBR1IsZUFBZSxDQUFDN0osT0FBTyxDQUFDLElBQUk2SixlQUFlLENBQUMzSyxPQUFPO1lBQ3hFLE1BQU1vTCxpQkFBaUIsR0FBRyx1QkFBdUJELFlBQVksSUFBSTVLLFNBQVMsRUFBRSxDQUFDOEssSUFBSSxFQUFFO1lBRW5GLE9BQ0NoTSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUU2SyxpQkFBaUI7Y0FBQSxHQUFNRjtZQUFJLEdBQzFDN0wsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsZUFBTzBKLE9BQU8sQ0FBUSxDQUNqQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBdEssTUFBQSxHQUFBN0IsT0FBQTtVQUVBLElBQUErRyxNQUFBLEdBQUEvRyxPQUFBO1VBQ0EsSUFBQThOLE1BQUEsR0FBQTlOLE9BQUE7VUFFTztVQUFVLFNBQVU0SSxVQUFVQSxDQUFDO1lBQUV6QjtVQUFLLENBQWlEO1lBQzdGLElBQUksQ0FBQ0EsS0FBSyxFQUFFNEcsUUFBUSxFQUFFO2NBQ3JCLE9BQU9sTSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUwsTUFBQSxDQUFBRSxPQUFPO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTtnQkFBQ2xMLFNBQVMsRUFBQztjQUFXLEVBQUc7O1lBRXZELE9BQU9sQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0UsTUFBQSxDQUFBbUgsS0FBSztjQUFDQyxHQUFHLEVBQUVoSCxLQUFLLENBQUM0RyxRQUFRO2NBQUVoTCxTQUFTLEVBQUM7WUFBUSxFQUFHO1VBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBLElBQUFoQixHQUFBLEdBQUEvQixPQUFBO1VBQ0EsSUFBQWlKLE1BQUEsR0FBQWpKLE9BQUE7VUFDQSxJQUFBaUYsV0FBQSxHQUFBakYsT0FBQTtVQUNBLElBQUFnTCxLQUFBLEdBQUFoTCxPQUFBO1VBQ0EsSUFBQW9PLEtBQUEsR0FBQXBPLE9BQUE7VUFDQSxJQUFBZ0QsTUFBQSxHQUFBaEQsT0FBQTtVQUNBLElBQUFpRCxRQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQXFPLFlBQUEsR0FBQXJPLE9BQUE7VUFDQSxJQUFBc08sU0FBQSxHQUFBdE8sT0FBQTtVQUNBLElBQUF1TyxVQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQXdPLFVBQUEsR0FBQXhPLE9BQUE7VUFDQSxJQUFBeU8sWUFBQSxHQUFBek8sT0FBQTtVQUNBLElBQUEwTyxPQUFBLEdBQUExTyxPQUFBO1VBRU0sU0FBVTJPLFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUFFekgsTUFBTTtjQUFFa0MsU0FBUztjQUFFL0ksS0FBSztjQUFFNkIsS0FBSztjQUFFK0gsS0FBSztjQUFFekUsUUFBUTtjQUFFb0osYUFBYTtjQUFFQztZQUFrQixDQUFFLEdBQUcsSUFBQTVMLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDbEgsTUFBTTBCLEtBQUssR0FBR2hGLEtBQUssQ0FBQ29GLEtBQUssQ0FBQytCLEtBQUssSUFBSXlDLEtBQUssR0FBRzVKLEtBQUssQ0FBQzZILFdBQVcsQ0FBQ0ssT0FBTyxDQUFDUyxRQUFRLEdBQUczSSxLQUFLLENBQUM2SCxXQUFXLENBQUNLLE9BQU8sQ0FBQ2hCLElBQUk7WUFFOUc7WUFDQSxNQUFNLENBQUN1SCxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHWCxLQUFLLENBQUMzSixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU11SyxXQUFXLEdBQUcsQ0FBQzlILE1BQU0sQ0FBQ0MsS0FBSyxJQUFJLENBQUNELE1BQU0sQ0FBQ3ZCLFFBQVEsSUFBSSxDQUFDdUIsTUFBTSxDQUFDcUUsU0FBUyxJQUFJLENBQUNyRSxNQUFNLENBQUN0QixRQUFRO1lBQzlGLE1BQU1vRSxVQUFVLEdBQUdnRixXQUFXLElBQUlGLFVBQVUsSUFBSXpPLEtBQUssQ0FBQ3lPLFVBQVU7WUFFaEUsSUFBQTdGLE1BQUEsQ0FBQVMsU0FBUyxFQUNSLENBQUNySixLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0owTyxhQUFhLENBQUMxTyxLQUFLLENBQUM0TyxtQkFBbUIsSUFBSTVPLEtBQUssQ0FBQ21GLFFBQVEsQ0FBQztZQUMzRCxDQUFDLEVBQ0QsQ0FBQyw2QkFBNkIsRUFBRSxlQUFlLENBQUMsQ0FDaEQ7WUFFRCxNQUFNMEosVUFBVSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QkgsYUFBYSxDQUFDLElBQUksQ0FBQztjQUVuQixJQUFJMU8sS0FBSyxDQUFDb0YsS0FBSyxDQUFDK0IsS0FBSyxJQUFJbkgsS0FBSyxDQUFDb0YsS0FBSyxDQUFDK0IsS0FBSyxLQUFLTixNQUFNLENBQUNNLEtBQUssSUFBSW5ILEtBQUssQ0FBQ29GLEtBQUssQ0FBQzhGLFNBQVMsS0FBS3JFLE1BQU0sQ0FBQ3FFLFNBQVMsRUFDeEc7Y0FFRCxNQUFNbkMsU0FBUyxDQUFDO2dCQUFFLEdBQUdsQyxNQUFNO2dCQUFFaUksT0FBTyxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBRTlDLElBQUk5TyxLQUFLLENBQUNvRixLQUFLLENBQUMrQixLQUFLLEtBQUssU0FBUyxFQUFFO2NBQ3JDcUgsa0JBQWtCLEVBQUU7Y0FDcEJFLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELE1BQU1LLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSCxJQUFJTixVQUFVLEVBQUU7Z0JBRWhCLE1BQU1JLFVBQVUsRUFBRTtnQkFDbEIsSUFBSWpGLEtBQUssSUFBSTVKLEtBQUssQ0FBQ29GLEtBQUssQ0FBQytCLEtBQUssS0FBSyxTQUFTLEVBQUU7a0JBQzdDb0gsYUFBYSxFQUFFO2tCQUNmOztlQUVELENBQUMsT0FBTzVHLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDd0UsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDbEJ4RSxPQUFPLENBQUM3RSxLQUFLLENBQUM0RSxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCtHLGFBQWEsQ0FBQyxLQUFLLENBQUM7O1lBRXRCLENBQUM7WUFFRCxNQUFNakksR0FBRyxHQUFHLHlCQUF5QjtZQUVyQyxPQUNDc0gsS0FBQSxDQUFBM0wsYUFBQSxDQUFDVixHQUFBLENBQUFzTixhQUFhO2NBQUN0TSxTQUFTLEVBQUUrRCxHQUFHO2NBQUV0QixRQUFRLEVBQUVBLFFBQVEsSUFBSSxDQUFDLENBQUNuRixLQUFLLENBQUNvRixLQUFLLEVBQUU2SixVQUFVLENBQUMzRixLQUFLLENBQUN4SSxNQUFNO2NBQUVvTyxNQUFNO1lBQUEsR0FDbEduQixLQUFBLENBQUEzTCxhQUFBLENBQUNWLEdBQUEsQ0FBQXlOLG1CQUFtQjtjQUFDckssSUFBSSxFQUFDO1lBQWlCLEdBQzFDaUosS0FBQSxDQUFBM0wsYUFBQSxDQUFDdUksS0FBQSxDQUFBeUUsSUFBSTtjQUFDMU0sU0FBUyxFQUFFK0QsR0FBRztjQUFFc0ksUUFBUSxFQUFFQTtZQUFRLEdBQ3ZDaEIsS0FBQSxDQUFBM0wsYUFBQSxDQUFDNEwsWUFBQSxDQUFBekgsV0FBVyxRQUNYd0gsS0FBQSxDQUFBM0wsYUFBQTtjQUFTTSxTQUFTLEVBQUM7WUFBVyxHQUM3QnFMLEtBQUEsQ0FBQTNMLGFBQUE7Y0FBUU0sU0FBUyxFQUFDO1lBQW1CLEdBQ3BDcUwsS0FBQSxDQUFBM0wsYUFBQSxhQUFLUCxLQUFLLENBQUMyRixLQUFLLENBQUMxRixLQUFLLENBQU0sQ0FDcEIsRUFDVGlNLEtBQUEsQ0FBQTNMLGFBQUEsQ0FBQ08sTUFBQSxDQUFBc0IsYUFBYTtjQUNiZCxJQUFJLEVBQUVuRCxLQUFLLENBQUNrQyxLQUFLLEVBQUVpQixJQUFJO2NBQ3ZCQyxPQUFPLEVBQUVwRCxLQUFLLENBQUNrQyxLQUFLLEVBQUVrQixPQUFPO2NBQzdCaEQsSUFBSSxFQUFFLENBQUMsQ0FBQ0osS0FBSyxDQUFDa0MsS0FBSyxJQUFJbEMsS0FBSyxDQUFDa0MsS0FBSyxDQUFDd0YsUUFBUSxLQUFLLEtBQUs7Y0FDckRoRixTQUFTLEVBQUM7WUFBYyxFQUN2QixFQUNGcUwsS0FBQSxDQUFBM0wsYUFBQTtjQUFTTSxTQUFTLEVBQUM7WUFBNkIsR0FDL0NxTCxLQUFBLENBQUEzTCxhQUFBLENBQUMrTCxVQUFBLENBQUE1QyxjQUFjO2NBQUNyRyxRQUFRLEVBQUV1SjtZQUFVLEVBQUksRUFDeENWLEtBQUEsQ0FBQTNMLGFBQUEsQ0FBQ1YsR0FBQSxDQUFBaUwsUUFBUTtjQUNSOUssS0FBSyxFQUFFQSxLQUFLLENBQUM0SixhQUFhO2NBQzFCM0csSUFBSSxFQUFDLFlBQVk7Y0FDakI4SCxFQUFFLEVBQUMsS0FBSztjQUNSbEssU0FBUyxFQUFDO1lBQXNCLEdBRWhDcUwsS0FBQSxDQUFBM0wsYUFBQSxDQUFDNkwsU0FBQSxDQUFBL0QsY0FBYztjQUFDaEYsUUFBUSxFQUFFdUo7WUFBVSxFQUFJLENBQzlCLENBQ0YsRUFFVlYsS0FBQSxDQUFBM0wsYUFBQSxDQUFDVixHQUFBLENBQUFpTCxRQUFRO2NBQ1JDLEVBQUUsRUFBQyxTQUFTO2NBQ1ovSyxLQUFLLEVBQUVBLEtBQUssQ0FBQzRKLGFBQWE7Y0FDMUIzRyxJQUFJLEVBQUMsV0FBVztjQUNoQnBDLFNBQVMsRUFBQztZQUF5QyxHQUVuRHFMLEtBQUEsQ0FBQTNMLGFBQUEsQ0FBQzhMLFVBQUEsQ0FBQXRELGNBQWMsT0FBRyxDQUNSLENBQ0YsRUFDVm1ELEtBQUEsQ0FBQTNMLGFBQUEsQ0FBQ2dNLFlBQUEsQ0FBQWlCLG9CQUFvQjtjQUFDWCxhQUFhLEVBQUVBLGFBQWE7Y0FBRUQsVUFBVSxFQUFFQTtZQUFVLEVBQUksRUFDOUVWLEtBQUEsQ0FBQTNMLGFBQUEsaUJBQ0MyTCxLQUFBLENBQUEzTCxhQUFBLENBQUNpTSxPQUFBLENBQUFpQixpQkFBaUIsT0FBRyxFQUNyQnZCLEtBQUEsQ0FBQTNMLGFBQUEsQ0FBQ1YsR0FBQSxDQUFBaUwsUUFBUTtjQUFDOUssS0FBSyxFQUFFQSxLQUFLLENBQUM0SixhQUFhO2NBQUUzRyxJQUFJLEVBQUMsTUFBTTtjQUFDcEMsU0FBUyxFQUFDO1lBQXdCLEdBQ25GcUwsS0FBQSxDQUFBM0wsYUFBQSxDQUFDd0MsV0FBQSxDQUFBZSxNQUFNO2NBQUN4QyxJQUFJLEVBQUMsUUFBUTtjQUFDb00sS0FBSztjQUFDckssUUFBUSxFQUFFeUUsVUFBVTtjQUFFMUcsT0FBTyxFQUFDO1lBQVMsR0FDakUrQixLQUFLLENBQ0UsQ0FDQyxDQUNILENBQ0ksRUFDZCtJLEtBQUEsQ0FBQTNMLGFBQUEsQ0FBQ1YsR0FBQSxDQUFBOE4sZ0JBQWdCO2NBQUNySyxRQUFRLEVBQUVBLFFBQVEsSUFBSXNKO1lBQVUsRUFBSSxDQUNoRCxDQUNjLENBQ1A7VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEhBLElBQUFqTixNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBK0IsR0FBQSxHQUFBL0IsT0FBQTtVQUdNLFNBQVUyUCxpQkFBaUJBLENBQUMsRUFBRTtZQUNuQyxNQUFNO2NBQ0x0UCxLQUFLLEVBQUU7Z0JBQ042SCxXQUFXLEVBQUU7a0JBQUVLLE9BQU8sRUFBRXVIO2dCQUFXO2NBQUUsQ0FDckM7Y0FDRHpQLEtBQUs7Y0FDTDZHLE1BQU07Y0FDTitDO1lBQUssQ0FDTCxHQUFHLElBQUFoSCxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU0sQ0FBQ29NLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR25PLE1BQUEsQ0FBQVcsT0FBSyxDQUFDaUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRSxNQUFNd0wsVUFBVSxHQUFHQSxDQUFBLEtBQU1ELGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNRSxvQkFBb0IsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDdkMsSUFBSTtnQkFDSCxJQUFJLENBQUM3UCxLQUFLLENBQUM4UCxVQUFVLEVBQUU7a0JBQ3RCSCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7a0JBQ3ZCOztnQkFFRCxNQUFNM1AsS0FBSyxDQUFDK1Asd0JBQXdCLENBQUM7a0JBQUU3RSxTQUFTLEVBQUVyRSxNQUFNLENBQUNxRTtnQkFBUyxDQUFFLENBQUM7ZUFDckUsQ0FBQyxPQUFPdkQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUM3RSxLQUFLLENBQUM0RSxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxNQUFNcUksU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixNQUFNQyxRQUFRLEdBQUcsTUFBTWpRLEtBQUssQ0FBQ29GLEtBQUssQ0FBQzhLLFlBQVksRUFBRTtjQUNqRCxJQUFJRCxRQUFRLENBQUNsTixLQUFLLEVBQUUsT0FBT2tOLFFBQVE7Y0FFbkMsTUFBTUUsU0FBUyxHQUFHLE1BQU1uUSxLQUFLLENBQUMrUCx3QkFBd0IsQ0FBQztnQkFBRTdFLFNBQVMsRUFBRXJFLE1BQU0sQ0FBQ3FFO2NBQVMsQ0FBRSxDQUFDO2NBQ3ZGeUUsaUJBQWlCLENBQUMsS0FBSyxDQUFDO2NBQ3hCLE9BQU9RLFNBQVM7WUFDakIsQ0FBQztZQUVELElBQUluUSxLQUFLLENBQUNvUSxZQUFZLElBQUksQ0FBQ3BRLEtBQUssQ0FBQ29RLFlBQVksQ0FBQ0MsVUFBVSxFQUFFLE9BQU8sSUFBSTtZQUVyRSxPQUNDN08sTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQVosTUFBQSxDQUFBVyxPQUFBLENBQUFtSSxRQUFBLFFBQ0M5SSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUE0TyxRQUFRO2NBQUNwTCxRQUFRLEVBQUUsQ0FBQzBFLEtBQUs7Y0FBRTJHLE1BQU0sRUFBRSxLQUFLO2NBQUUzSyxPQUFPLEVBQUVpSyxvQkFBb0I7Y0FBRTVNLE9BQU8sRUFBQyxTQUFTO2NBQUN3RixRQUFRO1lBQUEsR0FDbEdnSCxXQUFXLENBQUNlLE9BQU8sQ0FDVixFQUNWZCxjQUFjLElBQ2RsTyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUErTyxVQUFVO2NBQ1YzSixLQUFLLEVBQUU5RyxLQUFLLENBQUNvRixLQUFLLEVBQUUwQixLQUFLO2NBQ3pCMUcsSUFBSSxFQUFFc1AsY0FBYztjQUNwQjlOLE9BQU8sRUFBRWdPLFVBQVU7Y0FDbkIvSCxXQUFXLEVBQUU3SCxLQUFLLENBQUM2SCxXQUFXO2NBQzlCbUksU0FBUyxFQUFFQTtZQUFTLEVBRXJCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2REEsSUFBQXhPLE1BQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUF1TyxVQUFBLEdBQUF2TyxPQUFBO1VBRUEsSUFBQStRLEtBQUEsR0FBQS9RLE9BQUE7VUFFTSxTQUFVMFAsb0JBQW9CQSxDQUFDO1lBQ3BDWixVQUFVO1lBQ1ZDO1VBQWEsQ0FJYjtZQUNBLE1BQU07Y0FBRTFPO1lBQUssQ0FBRSxHQUFHLElBQUE0QyxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBRXBDLE1BQU0sQ0FBQ3FOLGlCQUFpQixFQUFFQyxvQkFBb0IsQ0FBQyxHQUFHcFAsTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZFO1lBQ0EsSUFBSSxDQUFDcEUsS0FBSyxDQUFDb1EsWUFBWSxJQUFJcFEsS0FBSyxDQUFDb1EsWUFBWSxDQUFDQyxVQUFVLEVBQUUsT0FBTyxJQUFJO1lBQ3JFLE1BQU1RLFlBQVksR0FBRztjQUFFRixpQkFBaUI7Y0FBRUMsb0JBQW9CO2NBQUVuQyxVQUFVO2NBQUVDO1lBQWEsQ0FBRTtZQUMzRixPQUNDbE4sTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsUUFBQSxDQUFBeUQsa0JBQWtCLENBQUN5SyxRQUFRO2NBQUN2UCxLQUFLLEVBQUVzUDtZQUFZLEdBQy9DclAsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzhMLFVBQUEsQ0FBQTZDLGlCQUFpQixPQUFHLEVBQ3JCdlAsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NPLEtBQUEsQ0FBQU0sZUFBZTtjQUFDekIsS0FBSyxFQUFFLENBQUNvQjtZQUFpQixFQUFJLENBQ2pCO1VBRWhDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBblAsTUFBQSxHQUFBN0IsT0FBQTtVQUVBLElBQUFpRixXQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQStRLEtBQUEsR0FBQS9RLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFzUixLQUFBLEdBQUF0UixPQUFBO1VBRU0sU0FBVXFSLGVBQWVBLENBQUM7WUFBRXpCO1VBQUssQ0FBRTtZQUN4QyxNQUFNO2NBQ0wxTixLQUFLLEVBQUU7Z0JBQUVxUCxXQUFXLEVBQUVyUDtjQUFLLENBQUU7Y0FDN0I3QixLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFDTjZILFdBQVcsRUFBRTtrQkFBRUssT0FBTyxFQUFFdUg7Z0JBQVc7Y0FBRSxDQUNyQztjQUNENUksTUFBTTtjQUNOK0MsS0FBSztjQUNMYjtZQUFTLENBQ1QsR0FBRyxJQUFBbkcsUUFBQSxDQUFBVSxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNO2NBQUVzTjtZQUFvQixDQUFFLEdBQUcsSUFBQWhPLFFBQUEsQ0FBQTBELHFCQUFxQixHQUFFO1lBQ3hELE1BQU0sQ0FBQ3JCLFFBQVEsRUFBRTBHLFdBQVcsQ0FBQyxHQUFHbkssTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLENBQUMsSUFBSStNLEdBQUcsRUFBRSxDQUFDO1lBRXpELElBQUksQ0FBQ25SLEtBQUssQ0FBQ29RLFlBQVksRUFBRSxPQUFPLElBQUk7WUFDcEMsTUFBTTtjQUFFYztZQUFXLENBQUUsR0FBR2xSLEtBQUssQ0FBQ29RLFlBQVk7WUFFMUMsTUFBTWdCLEtBQUssR0FBRyxNQUFPN0gsS0FBMEMsSUFBSTtjQUNsRSxNQUFNOEgsS0FBSyxHQUFHO2dCQUNibkcsU0FBUyxFQUFFckUsTUFBTSxDQUFDcUUsU0FBUztnQkFDM0JrRixZQUFZLEVBQUVrQixLQUFLLENBQUNDLElBQUksQ0FBQ3RNLFFBQVEsQ0FBQyxDQUFDUSxHQUFHLENBQUUrTCxDQUFTLElBQUt4UixLQUFLLENBQUNvUSxZQUFZLENBQUNjLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDLENBQUNDLFVBQVU7ZUFDbEc7Y0FFRCxNQUFNelIsS0FBSyxDQUFDMFIsaUJBQWlCLENBQUNMLEtBQUssQ0FBQztjQUNwQ1Qsb0JBQW9CLENBQUMsS0FBSyxDQUFDO2NBQzNCN0gsU0FBUyxDQUFFbEMsTUFBMkIsS0FBTTtnQkFBRSxHQUFHQSxNQUFNO2dCQUFFcUUsU0FBUyxFQUFFbEwsS0FBSyxDQUFDb0YsS0FBSyxDQUFDOEY7Y0FBUyxDQUFFLENBQUMsQ0FBQztZQUM5RixDQUFDO1lBRUQsTUFBTXlHLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCaEcsV0FBVyxDQUFDLElBQUl3RixHQUFHLEVBQUUsQ0FBQztjQUN0QlAsb0JBQW9CLENBQUMsS0FBSyxDQUFDO2NBQzNCNVEsS0FBSyxDQUFDZ0wsaUJBQWlCLEVBQUU7WUFDMUIsQ0FBQztZQUNELE1BQU05RixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUNELFFBQVEsQ0FBQzJNLElBQUksSUFBSXJDO1lBQUssQ0FBRTtZQUN0RCxNQUFNOUksR0FBRyxHQUFHLG1DQUFtQzhJLEtBQUssR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBRTVFLE9BQ0MvTixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTSxTQUFTLEVBQUUrRDtZQUFHLEdBQ3RCakYsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NPLEtBQUEsQ0FBQW1CLElBQUk7Y0FDSm5QLFNBQVMsRUFBQyw2QkFBNkI7Y0FDdkMyTyxLQUFLLEVBQUU7Z0JBQUVwTSxRQUFRO2dCQUFFMEcsV0FBVztnQkFBRTREO2NBQUssQ0FBRTtjQUN2Q3VDLE9BQU8sRUFBRWIsS0FBQSxDQUFBYyx3QkFBd0I7Y0FDakN6SSxLQUFLLEVBQUU0SDtZQUFXLEVBQ2pCLEVBRUYxUCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBa0IsR0FDaENsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxlQUNFUCxLQUFLLENBQUNtUSxLQUFLLEUsTUFBSS9NLFFBQVEsQ0FBQzJNLElBQUksQ0FDdkIsRUFDUHBRLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBQztZQUFrQixHQUNoQ2xCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUN3QyxXQUFBLENBQUFlLE1BQU07Y0FBQ1QsUUFBUSxFQUFFcUssS0FBSztjQUFFM0osT0FBTyxFQUFFK0wsUUFBUTtjQUFFMU8sT0FBTyxFQUFDLFNBQVM7Y0FBQ3dGLFFBQVE7WUFBQSxHQUNwRWdILFdBQVcsQ0FBQ3dDLGlCQUFpQixDQUN0QixFQUNUelEsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dDLFdBQUEsQ0FBQWUsTUFBTTtjQUFBLEdBQUtULFFBQVE7Y0FBRWpDLE9BQU8sRUFBQyxTQUFTO2NBQUMyQyxPQUFPLEVBQUV3TDtZQUFLLEdBQ3BEM0IsV0FBVyxDQUFDeUMsZ0JBQWdCLENBQ3JCLENBQ0osQ0FDRCxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkVBLElBQUExUSxNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFTTSxTQUFVb1Msd0JBQXdCQSxDQUFDSSxLQUFBLEdBQWdCLEVBQUU7WUFDMUQsTUFBTTtjQUFFek0sS0FBSztjQUFFMEUsSUFBSTtjQUFFbUYsS0FBSztjQUFFdEssUUFBUTtjQUFFMEc7WUFBVyxDQUFFLEdBQUd3RyxLQUFLO1lBQzNELE1BQU07Y0FDTG5TLEtBQUs7Y0FDTDZCLEtBQUssRUFBRTtnQkFBRXFQLFdBQVcsRUFBRXJQO2NBQUs7WUFBRSxDQUM3QixHQUFHLElBQUFlLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTThPLFFBQVEsR0FBSTdJLEtBQW9DLElBQUk7Y0FDekRBLEtBQUssQ0FBQzhJLGVBQWUsRUFBRTtjQUN2QixNQUFNM00sS0FBSyxHQUFHNE0sUUFBUSxDQUFDL0ksS0FBSyxDQUFDZ0osYUFBYSxDQUFDQyxPQUFPLENBQUM5TSxLQUFLLENBQUM7Y0FDekQsTUFBTStNLFFBQVEsR0FBR3hOLFFBQVE7Y0FDekJ3TixRQUFRLENBQUNDLEdBQUcsQ0FBQ2hOLEtBQUssQ0FBQyxHQUFHK00sUUFBUSxDQUFDRSxNQUFNLENBQUNqTixLQUFLLENBQUMsR0FBRytNLFFBQVEsQ0FBQ0csR0FBRyxDQUFDbE4sS0FBSyxDQUFDO2NBQ2xFMUYsS0FBSyxDQUFDNlMsb0JBQW9CLENBQUNELEdBQUcsQ0FBQ2xOLEtBQUssQ0FBQztjQUNyQ2lHLFdBQVcsQ0FBQyxJQUFJd0YsR0FBRyxDQUFDc0IsUUFBUSxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUVELE1BQU1oTSxHQUFHLEdBQUcsbUJBQW1CeEIsUUFBUSxDQUFDeU4sR0FBRyxDQUFDaE4sS0FBSyxDQUFDLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUN2RSxNQUFNdUcsS0FBSyxHQUFvQztjQUFFdkosU0FBUyxFQUFFK0QsR0FBRztjQUFFLFlBQVksRUFBRWY7WUFBSyxDQUFFO1lBRXRGLElBQUksQ0FBQzZKLEtBQUssRUFBRXRELEtBQUssQ0FBQ3JHLE9BQU8sR0FBR3dNLFFBQVE7WUFFcEMsT0FDQzVRLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtNLFNBQVMsRUFBRStELEdBQUc7Y0FBQSxjQUFjZixLQUFLO2NBQUEsR0FBTXVHO1lBQUssR0FDaER6SyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ1osTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBTU0sU0FBUyxFQUFDO1lBQWtCLEdBQUViLEtBQUssQ0FBQ2lSLE1BQU0sQ0FBUSxFQUN4RHRSLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU1NLFNBQVMsRUFBQztZQUFzQixHQUFFMEgsSUFBSSxDQUFDMkksU0FBUyxDQUFRLENBQ3RELEVBQ1R2UixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBZSxHQUM3QmxCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGlCQUNDWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTSxTQUFTLEVBQUM7WUFBa0IsR0FBRWIsS0FBSyxDQUFDbUQsS0FBSyxDQUFRLENBQy9DLEVBQ1JvRixJQUFJLENBQUNxSCxVQUFVLENBQ1gsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBalEsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUFpRCxRQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQWlGLFdBQUEsR0FBQWpGLE9BQUE7VUFDTSxTQUFVb1IsaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FDTGxQLEtBQUssRUFBRTtnQkFDTjRKLGFBQWEsRUFBRUMsSUFBSTtnQkFDbkJ3RixXQUFXLEVBQUU7a0JBQ1poRyxTQUFTLEVBQUU7b0JBQUVoRCxPQUFPLEVBQUVyRztrQkFBSztnQkFBRTtjQUM3QixDQUNEO2NBQ0Q3QixLQUFLO2NBQ0wrSSxTQUFTO2NBQ1RsQyxNQUFNO2NBQ043RyxLQUFLLEVBQUU7Z0JBQUVvUTtjQUFZO1lBQUUsQ0FDdkIsR0FBRyxJQUFBeE4sUUFBQSxDQUFBVSxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNO2NBQUVxTixpQkFBaUI7Y0FBRUM7WUFBb0IsQ0FBRSxHQUFHLElBQUFoTyxRQUFBLENBQUEwRCxxQkFBcUIsR0FBRTtZQUMzRSxNQUFNO2NBQUUwTTtZQUFRLENBQUUsR0FBRzVDLFlBQVk7WUFDakMsTUFBTSxDQUFDNkMsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzFSLE1BQUEsQ0FBQVcsT0FBSyxDQUFDaUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxJQUFJLENBQUNnTSxZQUFZLElBQUlPLGlCQUFpQixFQUFFLE9BQU8sSUFBSTtZQUVuRCxNQUFNL0ssT0FBTyxHQUFHLE1BQU8yRCxLQUEwQyxJQUFJO2NBQ3BFMkosV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixJQUFJM0osS0FBSyxDQUFDZ0osYUFBYSxDQUFDaFIsS0FBSyxLQUFLLE1BQU0sRUFBRTtnQkFDekMsTUFBTXZCLEtBQUssQ0FBQ2tILElBQUksQ0FBQztrQkFBRWdFLFNBQVMsRUFBRThIO2dCQUFRLENBQUUsQ0FBQztnQkFDekNqSyxTQUFTLENBQUM7a0JBQUUsR0FBR2xDLE1BQU07a0JBQUVxRSxTQUFTLEVBQUU4SDtnQkFBUSxDQUFFLENBQUM7O2NBRzlDcEMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO2NBRTFCc0MsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQixDQUFDO1lBRUQsTUFBTXpNLEdBQUcsR0FBRyx3QkFBd0J3TSxRQUFRLEdBQUcsZUFBZSxHQUFHLEVBQUUsRUFBRTtZQUVyRSxPQUNDelIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFFK0Q7WUFBRyxHQUNsQmpGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGFBQUs0USxRQUFRLENBQU0sRUFDbkJ4UixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBK0IsR0FDN0NsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTSxTQUFTLEVBQUM7WUFBYyxHQUFFYixLQUFLLENBQUNtRCxLQUFLLENBQVEsRUFDbkR4RCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBa0IsR0FDaENsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsV0FBQSxDQUFBZSxNQUFNO2NBQUMxQyxPQUFPLEVBQUMsU0FBUztjQUFDd0YsUUFBUTtjQUFDbEgsS0FBSyxFQUFDLE9BQU87Y0FBQ3FFLE9BQU8sRUFBRUE7WUFBTyxHQUMvRC9ELEtBQUssQ0FBQzZHLE1BQU0sQ0FDTCxFQUNUbEgsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dDLFdBQUEsQ0FBQWUsTUFBTTtjQUFDMUMsT0FBTyxFQUFDLFNBQVM7Y0FBQzFCLEtBQUssRUFBQyxNQUFNO2NBQUNxRSxPQUFPLEVBQUVBO1lBQU8sR0FDckQvRCxLQUFLLENBQUNzUixPQUFPLENBQ04sQ0FDSixDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7VUNuREE7O1VBRUE5UixNQUFBLENBQUFDLGNBQUEsQ0FBQVosT0FBQTtZQUNBYSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTZSLFNBQUEsR0FBQXpULE9BQUE7VUFDQSxJQUFBMFQsU0FBQSxHQUFBMVQsT0FBQTtVQUNBLElBQUFpSixNQUFBLEdBQUFqSixPQUFBO1VBQ0EsSUFBQWlGLFdBQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBb08sS0FBQSxHQUFBcE8sT0FBQTtVQUVBLElBQUFpRCxRQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQWdMLEtBQUEsR0FBQWhMLE9BQUE7VUFDQSxJQUFBMlQsa0JBQUEsR0FBQTNULE9BQUE7VUFDQSxJQUFBNFQsUUFBQSxHQUFBNVQsT0FBQTtVQUVPO1VBQVUsU0FDUlEsSUFBSUEsQ0FBQztZQUFFSCxLQUFLO1lBQUVNO1VBQUcsQ0FBcUM7WUFDOUQsTUFBTSxDQUFDNkUsUUFBUSxFQUFFcU8sV0FBVyxDQUFDLEdBQUd6RixLQUFLLENBQUMzSixRQUFRLENBQUNwRSxLQUFLLENBQUNtRixRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDc08sVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzNGLEtBQUssQ0FBQzNKLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTSxDQUFDdVAsV0FBVyxDQUFDLEdBQUc1RixLQUFLLENBQUMzSixRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQ3dQLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUc5RixLQUFLLENBQUMzSixRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ3lDLE1BQU0sRUFBRWtDLFNBQVMsQ0FBQyxHQUFHZ0YsS0FBSyxDQUFDM0osUUFBUSxDQUFzQjtjQUFFLEdBQUdwRSxLQUFLLENBQUNvRixLQUFLLEVBQUUwTyxhQUFhO1lBQUUsQ0FBRSxDQUFDO1lBQ3BHLE1BQU0sQ0FBQy9RLEtBQUssRUFBRWtFLFFBQVEsQ0FBQyxHQUFHOEcsS0FBSyxDQUFDM0osUUFBUSxFQUFVO1lBQ2xELE1BQU0sQ0FBQzJQLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdqRyxLQUFLLENBQUMzSixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzNELE1BQU0sQ0FBQzZQLGdCQUFnQixFQUFFQyxtQkFBbUIsQ0FBQyxHQUFHbkcsS0FBSyxDQUFDM0osUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRSxNQUFNbUssYUFBYSxHQUFHQSxDQUFBLEtBQU15RixjQUFjLENBQUMsQ0FBQ0QsV0FBVyxDQUFDO1lBQ3hELE1BQU12RixrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNMEYsbUJBQW1CLENBQUMsQ0FBQ0QsZ0JBQWdCLENBQUM7WUFDdkUsSUFBQXJMLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUNySixLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCK0ksU0FBUyxDQUFDO2dCQUFFLEdBQUcvSSxLQUFLLENBQUNvRixLQUFLLEVBQUUwTyxhQUFhO2NBQUUsQ0FBRSxDQUFDO2NBQzlDTixXQUFXLENBQUN4VCxLQUFLLEVBQUVtRixRQUFRLENBQUM7WUFDN0IsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDbkYsS0FBSyxDQUFDbVUsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUM3QjtZQUVBLE1BQU1wUCxRQUFRLEdBQUl3RSxLQUEwQyxJQUFJO2NBQy9EdkosS0FBSyxDQUFDb0YsS0FBSyxDQUFDZ1AsR0FBRyxDQUFDO2dCQUFFLENBQUM3SyxLQUFLLENBQUNnSixhQUFhLENBQUN6TixJQUFJLEdBQUd5RSxLQUFLLENBQUNnSixhQUFhLENBQUNoUjtjQUFLLENBQUUsQ0FBQztjQUMxRXdILFNBQVMsQ0FBQztnQkFBRSxHQUFHbEMsTUFBTTtnQkFBRSxDQUFDMEMsS0FBSyxDQUFDZ0osYUFBYSxDQUFDek4sSUFBSSxHQUFHeUUsS0FBSyxDQUFDZ0osYUFBYSxDQUFDaFIsS0FBSztnQkFBRXVOLE9BQU8sRUFBRTtjQUFJLENBQUUsQ0FBQztZQUMvRixDQUFDO1lBRUQsTUFBTXZOLEtBQUssR0FBRztjQUNidkIsS0FBSztjQUNMK0UsUUFBUTtjQUNSbEQsS0FBSyxFQUFFN0IsS0FBSyxDQUFDNkIsS0FBSztjQUNsQjhSLFdBQVc7Y0FDWEMsT0FBTztjQUNQQyxVQUFVO2NBQ1Z6RCxZQUFZLEVBQUVwUSxLQUFLLENBQUNvUSxZQUFZO2NBQ2hDck4sS0FBSztjQUNMa0UsUUFBUTtjQUNSOUIsUUFBUSxFQUFFQSxRQUFRLElBQUlzTyxVQUFVO2NBQ2hDQyxhQUFhO2NBQ2JuRixhQUFhO2NBQ2IzRSxLQUFLLEVBQUU1SixLQUFLLENBQUM0SixLQUFLO2NBQ2xCL0MsTUFBTTtjQUNOa0MsU0FBUztjQUNUeUY7YUFDQTtZQUVELE9BQ0NULEtBQUEsQ0FBQTNMLGFBQUEsQ0FBQTJMLEtBQUEsQ0FBQXpELFFBQUEsUUFDQ3lELEtBQUEsQ0FBQTNMLGFBQUEsQ0FBQ1EsUUFBQSxDQUFBb0QsYUFBYSxDQUFDOEssUUFBUTtjQUFDdlAsS0FBSyxFQUFFQTtZQUFLLEdBQ25Dd00sS0FBQSxDQUFBM0wsYUFBQSxDQUFDd0MsV0FBQSxDQUFBeVAsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUV0VSxLQUFLLENBQUN1VSxJQUFJO2NBQ3JCckwsT0FBTyxFQUFFO2dCQUNSMUIsS0FBSyxFQUFFdUcsS0FBQSxDQUFBM0wsYUFBQSxDQUFDdUksS0FBQSxDQUFBMkQsU0FBUyxPQUFHO2dCQUNwQmtHLFFBQVEsRUFBRXpHLEtBQUEsQ0FBQTNMLGFBQUEsQ0FBQ2lSLFNBQUEsQ0FBQW9CLGNBQWM7a0JBQUN6VSxLQUFLLEVBQUVBLEtBQUs7a0JBQUVNLEdBQUcsRUFBRUEsR0FBRztrQkFBRTZFLFFBQVEsRUFBRUE7Z0JBQVEsRUFBSTtnQkFDeEV1UCxRQUFRLEVBQUUzRyxLQUFBLENBQUEzTCxhQUFBLENBQUNnUixTQUFBLENBQUF1QixrQkFBa0I7a0JBQUMzVSxLQUFLLEVBQUVBLEtBQUs7a0JBQUUwVSxRQUFRLEVBQUUxVSxLQUFLLENBQUM0VTtnQkFBZ0I7O1lBQzVFLEVBQ0EsQ0FDc0IsRUFDekI3RyxLQUFBLENBQUEzTCxhQUFBLENBQUNrUixrQkFBQSxDQUFBMU0saUJBQWlCO2NBQUM1RyxLQUFLLEVBQUVBLEtBQUs7Y0FBRTZHLE1BQU0sRUFBRUEsTUFBTTtjQUFFekcsSUFBSSxFQUFFNlQsZ0JBQWdCO2NBQUVyUyxPQUFPLEVBQUU0TTtZQUFrQixFQUFJLEVBQ3hHVCxLQUFBLENBQUEzTCxhQUFBLENBQUNtUixRQUFBLENBQUFzQixpQkFBaUI7Y0FDakJ6VSxJQUFJLEVBQUUyVCxXQUFXO2NBQ2pCaEwsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCL0ksS0FBSyxFQUFFQSxLQUFLO2NBQ1o2RyxNQUFNLEVBQUVBLE1BQU07Y0FDZGpGLE9BQU8sRUFBRTJNO1lBQWEsRUFDckIsQ0FDQTtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFTyxNQUFNdUcsVUFBVSxHQUFBcFUsT0FBQSxDQUFBb1UsVUFBQSxHQUFHO1lBQ3pCQyxTQUFTLEVBQUU7Y0FDVnRSLE9BQU8sRUFBRTtnQkFBRU0sQ0FBQyxFQUFFLE1BQU07Z0JBQUVMLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDbENDLE9BQU8sRUFBRTtnQkFBRUksQ0FBQyxFQUFFLENBQUM7Z0JBQUVMLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFLENBQUU7Y0FDNURHLElBQUksRUFBRTtnQkFBRUQsQ0FBQyxFQUFFLEtBQUs7Z0JBQUVMLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzNEO1lBRUQxQixPQUFPLEVBQUU7Y0FDUnNCLE9BQU8sRUFBRTtnQkFBRUMsT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUN2QkMsT0FBTyxFQUFFO2dCQUFFSSxDQUFDLEVBQUUsQ0FBQztnQkFBRUwsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1REcsSUFBSSxFQUFFO2dCQUFFRCxDQUFDLEVBQUUsS0FBSztnQkFBRUwsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7YUFDM0Q7WUFDRG1SLG1CQUFtQixFQUFFO2NBQ3BCdlIsT0FBTyxFQUFFO2dCQUFFTSxDQUFDLEVBQUUsTUFBTTtnQkFBRUwsT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNsQ0MsT0FBTyxFQUFFO2dCQUFFSSxDQUFDLEVBQUUsQ0FBQztnQkFBRUwsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1REcsSUFBSSxFQUFFO2dCQUFFaVIsQ0FBQyxFQUFFLEtBQUs7Z0JBQUV2UixPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTs7V0FFNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJELElBQUFyQyxNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWlGLFdBQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBa0QsYUFBQSxHQUFBbEQsT0FBQTtVQUNBLElBQUFpRCxRQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQXVWLFdBQUEsR0FBQXZWLE9BQUE7VUFFTSxTQUFVd1YsZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FBRXRULEtBQUs7Y0FBRXVULE9BQU87Y0FBRXhULE9BQU87Y0FBRTVCO1lBQUssQ0FBRSxHQUFHLElBQUE0QyxRQUFBLENBQUF5UyxpQkFBaUIsR0FBRTtZQUM5RCxNQUFNO2NBQUV4TjtZQUFXLENBQUUsR0FBRzdILEtBQUs7WUFDN0IsTUFBTXVDLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVk2UyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBRWxELE9BQ0M1VCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxhQUFBLENBQUFVLE1BQU0sQ0FBQ0MsR0FBRztjQUFBLEdBQUswUixXQUFBLENBQUFKLFVBQVUsQ0FBQzNTLE9BQU87Y0FBRU8sU0FBUyxFQUFDO1lBQW9CLEdBQ2pFbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBUU0sU0FBUyxFQUFDO1lBQWUsR0FDaENsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxhQUFLUCxLQUFLLENBQUN5VCxNQUFNLENBQUNuQyxPQUFPLENBQUNyUixLQUFLLENBQU0sQ0FDN0IsRUFDVE4sTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFDO1lBQXNCLEdBQ3BDbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsZUFBT1AsS0FBSyxDQUFDeVQsTUFBTSxDQUFDbkMsT0FBTyxDQUFDcFIsV0FBVyxDQUFRLENBQzFDLEVBQ05QLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQVFNLFNBQVMsRUFBQztZQUEwQyxHQUMzRGxCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUN3QyxXQUFBLENBQUFlLE1BQU07Y0FBQzFDLE9BQU8sRUFBQyxTQUFTO2NBQUN3RixRQUFRO2NBQUM3QyxPQUFPLEVBQUVoRTtZQUFPLEdBQ2pEaUcsV0FBVyxDQUFDSyxPQUFPLENBQUNRLE1BQU0sQ0FDbkIsRUFDVGxILE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUN3QyxXQUFBLENBQUFlLE1BQU07Y0FBQzFDLE9BQU8sRUFBQyxTQUFTO2NBQUMyQyxPQUFPLEVBQUVyRDtZQUFTLEdBQzFDc0YsV0FBVyxDQUFDSyxPQUFPLENBQUNpTCxPQUFPLENBQ3BCLENBQ0QsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBM1IsTUFBQSxHQUFBN0IsT0FBQTtVQWFPLE1BQU00VixjQUFjLEdBQUE3VSxPQUFBLENBQUE2VSxjQUFBLEdBQUcvVCxNQUFBLENBQUFXLE9BQUssQ0FBQzhELGFBQWEsQ0FBQyxFQUFtQyxDQUFDO1VBQy9FLE1BQU1vUCxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNN1QsTUFBQSxDQUFBVyxPQUFLLENBQUMrRCxVQUFVLENBQUNxUCxjQUFjLENBQUM7VUFBQzdVLE9BQUEsQ0FBQTJVLGlCQUFBLEdBQUFBLGlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2R4RSxJQUFBN1QsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUFpRixXQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQStRLEtBQUEsR0FBQS9RLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFrRCxhQUFBLEdBQUFsRCxPQUFBO1VBQ0EsSUFBQXVWLFdBQUEsR0FBQXZWLE9BQUE7VUFFTSxTQUFVNlYsa0JBQWtCQSxDQUFBO1lBQ2pDLE1BQU07Y0FBRTNULEtBQUs7Y0FBRXVULE9BQU87Y0FBRUs7WUFBUSxDQUFFLEdBQUcsSUFBQTdTLFFBQUEsQ0FBQXlTLGlCQUFpQixHQUFFO1lBRXhELE1BQU1LLE1BQU0sR0FBR0EsQ0FBQSxLQUFNTixPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3pDLE1BQU1PLElBQUksR0FBR0EsQ0FBQztjQUFFdkw7WUFBSSxDQUFFLEtBQUk7Y0FDekIsTUFBTXhFLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2dCQUNwQjZQLFFBQVEsQ0FBQ3JMLElBQUksQ0FBQztnQkFDZGdMLE9BQU8sQ0FBQyxhQUFhLENBQUM7Y0FDdkIsQ0FBQztjQUNELE9BQ0M1VCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtnQkFBSU0sU0FBUyxFQUFDO2NBQVksR0FDekJsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxlQUFPZ0ksSUFBSSxDQUFRLEVBQ25CNUksTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsY0FDQ1osTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dDLFdBQUEsQ0FBQWUsTUFBTTtnQkFBQzhDLFFBQVE7Z0JBQUN4RixPQUFPLEVBQUMsU0FBUztnQkFBQzJDLE9BQU8sRUFBRUE7Y0FBTyxHQUNqRC9ELEtBQUssQ0FBQ3lULE1BQU0sQ0FBQ00sUUFBUSxDQUFDMU4sT0FBTyxDQUFDNkIsTUFBTSxDQUM3QixDQUNKLENBQ0Y7WUFFUCxDQUFDO1lBRUQsT0FDQ3ZJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUFaLE1BQUEsQ0FBQVcsT0FBQSxDQUFBbUksUUFBQSxRQUNDOUksTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1MsYUFBQSxDQUFBVSxNQUFNLENBQUNDLEdBQUc7Y0FBQSxHQUFLMFIsV0FBQSxDQUFBSixVQUFVLENBQUMzUyxPQUFPO2NBQUVPLFNBQVMsRUFBQztZQUEyQixHQUN4RWxCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGFBQUtQLEtBQUssQ0FBQ3lULE1BQU0sQ0FBQ00sUUFBUSxDQUFDOVQsS0FBSyxDQUFNLEVBQ3RDTixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc08sS0FBQSxDQUFBbUIsSUFBSTtjQUFDblAsU0FBUyxFQUFDLGdDQUFnQztjQUFDNEcsS0FBSyxFQUFFekgsS0FBSyxDQUFDeVQsTUFBTSxDQUFDTSxRQUFRLENBQUN0TSxLQUFLO2NBQUV3SSxPQUFPLEVBQUU2RDtZQUFJLEVBQUksRUFFdEduVSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBK0IsR0FDN0NsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsV0FBQSxDQUFBZSxNQUFNO2NBQUMxQyxPQUFPLEVBQUMsU0FBUztjQUFDMkMsT0FBTyxFQUFFOFA7WUFBTSxHQUN2QzdULEtBQUssQ0FBQ3lULE1BQU0sQ0FBQ00sUUFBUSxDQUFDMU4sT0FBTyxDQUFDMk4sSUFBSSxDQUMzQixDQUNKLENBQ0QsQ0FDTSxDQUNYO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUFyVSxNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWdMLEtBQUEsR0FBQWhMLE9BQUE7VUFDQSxJQUFBK0IsR0FBQSxHQUFBL0IsT0FBQTtVQUNBLElBQUFpRixXQUFBLEdBQUFqRixPQUFBO1VBRUEsSUFBQWtELGFBQUEsR0FBQWxELE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUVBLElBQUFtVyxnQkFBQSxHQUFBblcsT0FBQTtVQUNBLElBQUF1VixXQUFBLEdBQUF2VixPQUFBO1VBRU0sU0FBVW9XLGdCQUFnQkEsQ0FBQyxFQUFFO1lBQ2xDLE1BQU07Y0FBRS9WLEtBQUs7Y0FBRTZCLEtBQUs7Y0FBRWdGLE1BQU07Y0FBRXVPLE9BQU87Y0FBRVksS0FBSztjQUFFUCxRQUFRO2NBQUU3VDtZQUFPLENBQUUsR0FBRyxJQUFBZ0IsUUFBQSxDQUFBeVMsaUJBQWlCLEdBQUU7WUFDdkYsTUFBTSxDQUFDbFEsUUFBUSxFQUFFcU8sV0FBVyxDQUFDLEdBQUdoUyxNQUFBLENBQUFXLE9BQUssQ0FBQ2lDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDNlIsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHMVUsTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLEVBQUU7WUFFOUQsTUFBTStSLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsSUFBSTtnQkFDSDNDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU14VCxLQUFLLENBQUNvVyx3QkFBd0IsQ0FBQztrQkFBRSxHQUFHcFcsS0FBSyxDQUFDb0YsS0FBSyxDQUFDME8sYUFBYSxFQUFFO2tCQUFFa0MsS0FBSztrQkFBRUM7Z0JBQWUsQ0FBRSxDQUFDO2dCQUNoR3JVLE9BQU8sRUFBRTtlQUNULENBQUMsT0FBTytGLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDN0UsS0FBSyxDQUFDNEUsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1Q2TCxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTTZDLE1BQU0sR0FBRztjQUNkdFIsUUFBUSxFQUFHd0UsS0FBNkMsSUFBSTtnQkFDM0RrTSxRQUFRLENBQUNsTSxLQUFLLENBQUNnSixhQUFhLENBQUNoUixLQUFLLENBQUM7Y0FDcEMsQ0FBQztjQUNEcUUsT0FBTyxFQUFFdVEsVUFBVTtjQUNuQmYsT0FBTyxFQUFFQSxDQUFBLEtBQU1BLE9BQU8sQ0FBQyxVQUFVLENBQUM7Y0FDbENNLE1BQU0sRUFBRUEsQ0FBQSxLQUFNTixPQUFPLENBQUMsV0FBVzthQUNqQztZQUVELE9BQ0M1VCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxhQUFBLENBQUFVLE1BQU0sQ0FBQ0MsR0FBRztjQUFBLEdBQUswUixXQUFBLENBQUFKLFVBQVUsQ0FBQzNTLE9BQU87Y0FBRU8sU0FBUyxFQUFDO1lBQWEsR0FDMURsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUksS0FBQSxDQUFBeUUsSUFBSTtjQUFDTCxRQUFRLEVBQUVzSCxNQUFNLENBQUN6UTtZQUFPLEdBQzdCcEUsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBULGdCQUFBLENBQUFRLGVBQWU7Y0FBQ0wsZUFBZSxFQUFFQSxlQUFlO2NBQUVDLGtCQUFrQixFQUFFQTtZQUFrQixFQUFJLEVBQzdGMVUsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VJLEtBQUEsQ0FBQU0sUUFBUTtjQUNSakcsS0FBSyxFQUFFbkQsS0FBSyxDQUFDeVQsTUFBTSxDQUFDaUIsUUFBUSxDQUFDdlIsS0FBSztjQUNsQ0YsSUFBSSxFQUFDLGNBQWM7Y0FDbkJ2RCxLQUFLLEVBQUV5VSxLQUFLO2NBQ1ovUyxPQUFPLEVBQUMsVUFBVTtjQUNsQjhCLFFBQVEsRUFBRXNSLE1BQU0sQ0FBQ3RSLFFBQVE7Y0FDekIrRSxXQUFXLEVBQUVqSSxLQUFLLENBQUN5VCxNQUFNLENBQUNpQixRQUFRLENBQUN6TTtZQUFXLEVBQzdDLENBQ0ksRUFDUHRJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGlCQUNDWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsV0FBQSxDQUFBZSxNQUFNO2NBQUMxQyxPQUFPLEVBQUMsU0FBUztjQUFDd0YsUUFBUTtjQUFDN0MsT0FBTyxFQUFFeVEsTUFBTSxDQUFDWDtZQUFNLEdBQ3ZEMVYsS0FBSyxDQUFDNkgsV0FBVyxDQUFDSyxPQUFPLENBQUMyTixJQUFJLENBQ3ZCLEVBQ1RyVSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsV0FBQSxDQUFBZSxNQUFNO2NBQUMxQyxPQUFPLEVBQUMsU0FBUztjQUFDMkMsT0FBTyxFQUFFeVEsTUFBTSxDQUFDelEsT0FBTztjQUFFVixRQUFRLEVBQUVDLFFBQVEsSUFBSSxDQUFDOFE7WUFBZSxHQUN2RmpXLEtBQUssQ0FBQzZILFdBQVcsQ0FBQ0ssT0FBTyxDQUFDc08sUUFBUSxDQUMzQixDQUNELEVBRVRoVixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUE4TixnQkFBZ0I7Y0FBQ3JLLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQzVCO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBLElBQUEzRCxNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWtELGFBQUEsR0FBQWxELE9BQUE7VUFFQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUErQixHQUFBLEdBQUEvQixPQUFBO1VBQ0EsSUFBQXVWLFdBQUEsR0FBQXZWLE9BQUE7VUFDQSxJQUFBOFcsT0FBQSxHQUFBOVcsT0FBQTtVQUNBLElBQUErVyxPQUFBLEdBQUEvVyxPQUFBO1VBRU0sU0FBVWdYLGFBQWFBLENBQUM7WUFBRUM7VUFBTSxDQUFFO1lBQ3ZDLE1BQU07Y0FBRS9VLEtBQUs7Y0FBRTdCLEtBQUs7Y0FBRTRCO1lBQU8sQ0FBRSxHQUFHLElBQUFnQixRQUFBLENBQUF5UyxpQkFBaUIsR0FBRTtZQUNyRCxNQUFNeEssU0FBUyxHQUFHaEosS0FBSyxDQUFDMkYsS0FBSyxDQUFDcVAsVUFBVTtZQUN4QyxNQUFNM08sT0FBTyxHQUFHckcsS0FBSyxDQUFDMkYsS0FBSyxDQUFDVSxPQUFPO1lBQ25DLE1BQU0sQ0FBQzRPLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR3ZWLE1BQUEsQ0FBQVcsT0FBSyxDQUFDaUMsUUFBUSxFQUFzQjtZQUM5RSxNQUFNO2NBQUVnUjtZQUFPLENBQUUsR0FBRyxJQUFBeFMsUUFBQSxDQUFBeVMsaUJBQWlCLEdBQUU7WUFDdkMsTUFBTSxDQUFDMkIsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR3pWLE1BQUEsQ0FBQVcsT0FBSyxDQUFDaUMsUUFBUSxFQUFtQjtZQUV2RSxNQUFNOFMsUUFBUSxHQUFHO2NBQ2hCQyxFQUFFLEVBQUVWLE9BQUEsQ0FBQVYsZ0JBQWdCO2NBQ3BCcUIsTUFBTSxFQUFFVixPQUFBLENBQUFXO2FBQ1I7WUFDRCxNQUFNdFMsUUFBUSxHQUFJd0UsS0FBMEMsSUFBSTtjQUMvRCxNQUFNO2dCQUFFaEk7Y0FBSyxDQUFFLEdBQUdnSSxLQUFLLENBQUNnSixhQUFhO2NBQ3JDd0UsZ0JBQWdCLENBQUN4VixLQUFLLENBQUM7Y0FDdkIwVixjQUFjLENBQUMxVixLQUFLLEtBQUssS0FBSyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUM7WUFDbEQsQ0FBQztZQUNELE1BQU1xRSxPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQixJQUFJa1IsYUFBYSxLQUFLLEtBQUssSUFBSSxDQUFDOVcsS0FBSyxDQUFDb0YsS0FBSyxDQUFDa1MsT0FBTyxDQUFDdEYsS0FBSyxFQUFFO2dCQUMxRG9ELE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ2xCOztjQUdEQSxPQUFPLENBQUMwQixhQUFhLEtBQUssS0FBSyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUM7WUFDbkQsQ0FBQztZQUVELE1BQU1TLE9BQU8sR0FBK0JQLFdBQVcsR0FBR0UsUUFBUSxDQUFDRixXQUFXLENBQUMsR0FBRyxJQUFJO1lBQ3RGLE9BQ0N4VixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxhQUFBLENBQUFVLE1BQU0sQ0FBQ0MsR0FBRztjQUFBLEdBQUswUixXQUFBLENBQUFKLFVBQVUsQ0FBQzNTLE9BQU87Y0FBRU8sU0FBUyxFQUFDO1lBQWEsR0FDMURsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ1osTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsYUFBS3lJLFNBQVMsQ0FBQy9JLEtBQUssQ0FBTSxFQUMxQk4sTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFDO1lBQXNCLEdBQ3BDbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsZUFBT3lJLFNBQVMsQ0FBQ3ZDLFFBQVEsQ0FBUSxDQUM1QixDQUNFLEVBRVQ5RyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUFtRCxXQUFXO2NBQ1gyUyxPQUFPLEVBQUVWLGFBQWEsS0FBSyxLQUFLO2NBQ2hDL1IsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCQyxLQUFLLEVBQUU2RixTQUFTLENBQUMzQixPQUFPLENBQUNpTyxFQUFFO2NBQzNCNVYsS0FBSyxFQUFDLEtBQUs7Y0FDWHVELElBQUksRUFBQztZQUFlLEVBQ25CLEVBRUZ0RCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUFtRCxXQUFXO2NBQ1gyUyxPQUFPLEVBQUVWLGFBQWEsS0FBSyxVQUFVO2NBQ3JDL1IsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCQyxLQUFLLEVBQUU2RixTQUFTLENBQUMzQixPQUFPLENBQUN1TyxRQUFRO2NBQ2pDbFcsS0FBSyxFQUFDLFVBQVU7Y0FDaEJ1RCxJQUFJLEVBQUM7WUFBZSxFQUNuQixFQUNEeVMsT0FBTyxJQUNQL1YsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS00sU0FBUyxFQUFDO1lBQU8sR0FDckJsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVYsT0FBTztjQUFDWCxNQUFNLEVBQUVBO1lBQU0sRUFBSSxDQUU1QixDQUNXO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkVBLElBQUFwVixNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQWlGLFdBQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFnTCxLQUFBLEdBQUFoTCxPQUFBO1VBQ0EsSUFBQWtELGFBQUEsR0FBQWxELE9BQUE7VUFDQSxJQUFBdVYsV0FBQSxHQUFBdlYsT0FBQTtVQUVNLFNBQVUwWCxVQUFVQSxDQUFDLEVBQUU7WUFDNUIsSUFBSTtjQUFFeFYsS0FBSztjQUFFN0IsS0FBSztjQUFFNkcsTUFBTTtjQUFFa0M7WUFBUyxDQUFFLEdBQUcsSUFBQW5HLFFBQUEsQ0FBQXlTLGlCQUFpQixHQUFFO1lBQzdELE1BQU14SyxTQUFTLEdBQUdoSixLQUFLLENBQUMyRixLQUFLLENBQUNxUCxVQUFVO1lBQ3hDLE1BQU0zTyxPQUFPLEdBQUdsSSxLQUFLLENBQUM2SCxXQUFXLENBQUNLLE9BQU87WUFDekMsTUFBTTtjQUFFa04sT0FBTztjQUFFeFQ7WUFBTyxDQUFFLEdBQUcsSUFBQWdCLFFBQUEsQ0FBQXlTLGlCQUFpQixHQUFFO1lBQ2hELE1BQU0sQ0FBQ2xRLFFBQVEsRUFBRXFPLFdBQVcsQ0FBQyxHQUFHaFMsTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3NULFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUduVyxNQUFBLENBQUFXLE9BQUssQ0FBQ2lDLFFBQVEsQ0FBQztjQUFFdEMsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsV0FBVyxFQUFFO1lBQUUsQ0FBRSxDQUFDO1lBQ2xGLE1BQU00UCxRQUFRLEdBQUdBLENBQUEsS0FBTXlELE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDM0N2VCxLQUFLLEdBQUdBLEtBQUssQ0FBQytWLE9BQU87WUFFckIsTUFBTTdJLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSHlFLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLE1BQU14VCxLQUFLLENBQUNrSCxJQUFJLENBQUM7a0JBQ2hCLEdBQUdMLE1BQU07a0JBQ1QvRSxLQUFLLEVBQUU0VixVQUFVLENBQUM1VixLQUFLO2tCQUN2QkMsV0FBVyxFQUFFMlYsVUFBVSxDQUFDM1YsV0FBVztrQkFDbkNvRixLQUFLLEVBQUU7aUJBQ1AsQ0FBQztnQkFDRnZGLE9BQU8sRUFBRTtnQkFDVG1ILFNBQVMsQ0FBQztrQkFBRSxHQUFHbEMsTUFBTTtrQkFBRS9FLEtBQUssRUFBRTRWLFVBQVUsQ0FBQzVWLEtBQUs7a0JBQUVDLFdBQVcsRUFBRTJWLFVBQVUsQ0FBQzNWO2dCQUFXLENBQUUsQ0FBQztlQUN0RixDQUFDLE9BQU80RixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQzdFLEtBQUssQ0FBQzRFLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUNkwsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU16TyxRQUFRLEdBQUl3RSxLQUFnRSxJQUFJO2NBQ3JGLE1BQU07Z0JBQUVoSSxLQUFLO2dCQUFFdUQ7Y0FBSSxDQUFFLEdBQUd5RSxLQUFLLENBQUNnSixhQUFhO2NBQzNDb0YsYUFBYSxDQUFDO2dCQUFFLEdBQUdELFVBQVU7Z0JBQUUsQ0FBQzVTLElBQUksR0FBR3ZEO2NBQUssQ0FBRSxDQUFDO1lBQ2hELENBQUM7WUFFRCxPQUNDQyxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxhQUFBLENBQUFVLE1BQU0sQ0FBQ0MsR0FBRztjQUFBLEdBQUswUixXQUFBLENBQUFKLFVBQVUsQ0FBQzNTLE9BQU87Y0FBRU8sU0FBUyxFQUFDO1lBQWEsR0FDMURsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUksS0FBQSxDQUFBeUUsSUFBSTtjQUFDTCxRQUFRLEVBQUVBO1lBQVEsR0FDdkJ2TixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUksS0FBQSxDQUFBa04sS0FBSztjQUNMN1MsS0FBSyxFQUFFbkQsS0FBSyxDQUFDdVYsTUFBTSxDQUFDdFYsS0FBSyxDQUFDa0QsS0FBSztjQUMvQkQsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCeEQsS0FBSyxFQUFFbVcsVUFBVSxDQUFDNVYsS0FBSyxJQUFJLEVBQUU7Y0FDN0JnRCxJQUFJLEVBQUMsT0FBTztjQUNaN0IsT0FBTyxFQUFDO1lBQVUsRUFDakIsRUFDRnpCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUN1SSxLQUFBLENBQUFNLFFBQVE7Y0FDUmpHLEtBQUssRUFBRW5ELEtBQUssQ0FBQ3VWLE1BQU0sQ0FBQ3JWLFdBQVcsQ0FBQ2lELEtBQUs7Y0FDckNGLElBQUksRUFBQyxhQUFhO2NBQ2xCQyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEI5QixPQUFPLEVBQUMsVUFBVTtjQUNsQjFCLEtBQUssRUFBRW1XLFVBQVUsQ0FBQzNWLFdBQVcsSUFBSTtZQUFFLEVBQ2xDLEVBQ0ZQLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGlCQUNDWixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsV0FBQSxDQUFBZSxNQUFNO2NBQUMxQyxPQUFPLEVBQUMsU0FBUztjQUFDd0YsUUFBUTtjQUFDN0MsT0FBTyxFQUFFK0w7WUFBUSxHQUNsRHpKLE9BQU8sQ0FBQzJOLElBQUksQ0FDTCxFQUNUclUsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dDLFdBQUEsQ0FBQWUsTUFBTTtjQUNOMUMsT0FBTyxFQUFDLFNBQVM7Y0FDakJpQyxRQUFRLEVBQUUsQ0FBQ3dTLFVBQVUsQ0FBQzNWLFdBQVcsSUFBSSxDQUFDMlYsVUFBVSxDQUFDNVYsS0FBSztjQUN0RDhELE9BQU8sRUFBRW1KO1lBQVEsR0FFaEI3RyxPQUFPLENBQUNTLFFBQVEsQ0FDVCxDQUNELENBQ0gsQ0FDSztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pFQSxJQUFBbkgsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUFrSixZQUFBLEdBQUFsSixPQUFBO1VBR0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFFQTs7OztVQUlNLFNBQVUyVyxlQUFlQSxDQUFDO1lBQy9CTCxlQUFlO1lBQ2ZDO1VBQWtCLENBSWxCO1lBQ0EsSUFBSTtjQUFFclUsS0FBSztjQUFFZ0YsTUFBTTtjQUFFN0csS0FBSztjQUFFK0k7WUFBUyxDQUFFLEdBQUcsSUFBQW5HLFFBQUEsQ0FBQXlTLGlCQUFpQixHQUFFO1lBQzdEO1lBQ0F4VCxLQUFLLEdBQUdBLEtBQUssQ0FBQytWLE9BQU8sQ0FBQ1QsRUFBRTtZQUN4QixNQUFNalMsUUFBUSxHQUFHLEVBQUU7WUFDbkIsTUFBTTtjQUFFNFMsS0FBSztjQUFFQyxRQUFRO2NBQUVDO1lBQVEsQ0FBRSxHQUFHblcsS0FBSyxDQUFDaUosSUFBSSxDQUFDOEcsSUFBSSxDQUFDdEksS0FBSztZQUMzRCxNQUFNSixPQUFPLEdBQUcsQ0FDZjtjQUFFM0gsS0FBSyxFQUFFLENBQUM7Y0FBRXlELEtBQUssRUFBRThTLEtBQUs7Y0FBRTdCLGVBQWUsRUFBRTtZQUFDLENBQUUsRUFDOUM7Y0FBRTFVLEtBQUssRUFBRSxDQUFDO2NBQUV5RCxLQUFLLEVBQUUrUyxRQUFRO2NBQUU5QixlQUFlLEVBQUU7WUFBQyxDQUFFLEVBQ2pEO2NBQUUxVSxLQUFLLEVBQUUsQ0FBQztjQUFFeUQsS0FBSyxFQUFFZ1QsUUFBUTtjQUFFL0IsZUFBZSxFQUFFO1lBQUMsQ0FBRSxDQUNqRDtZQUVELE1BQU1sUixRQUFRLEdBQUl3RSxLQUEyQyxJQUFLMk0sa0JBQWtCLENBQUMzTSxLQUFLLENBQUNFLE1BQU0sQ0FBQ2xJLEtBQUssQ0FBQztZQUV4RyxJQUFJMFcsYUFBYSxHQUFXLENBQUM7WUFDN0IsSUFBSWhULFFBQVEsR0FBVyxDQUFDO1lBRXhCLElBQUk0QixNQUFNLEVBQUVxUixhQUFhLEVBQUVELGFBQWEsR0FBRzNGLFFBQVEsQ0FBQ3pMLE1BQU0sQ0FBQ29QLGVBQWUsQ0FBQztZQUMzRSxJQUFJcFAsTUFBTSxFQUFFb1AsZUFBZSxFQUFFdlEsS0FBSyxFQUFFVCxRQUFRLEdBQUdxTixRQUFRLENBQUN6TCxNQUFNLENBQUNvUCxlQUFlLENBQUN2USxLQUFLLENBQUM7WUFFckYsT0FDQ2xFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLGNBQ0NaLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU8wRCxPQUFPLEVBQUM7WUFBRSxHQUFFakUsS0FBSyxDQUFDaUosSUFBSSxDQUFDOEcsSUFBSSxDQUFDOUgsV0FBVyxDQUFTLEVBQ3ZEdEksTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lHLFlBQUEsQ0FBQWdCLFdBQVc7Y0FDWEMsV0FBVyxFQUFFakksS0FBSyxDQUFDaUosSUFBSSxDQUFDOEcsSUFBSSxDQUFDOUgsV0FBVztjQUN4Qy9FLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkQsSUFBSSxFQUFDLGlCQUFpQjtjQUN0QnZELEtBQUssRUFBRTBVLGVBQWU7Y0FBQSxHQUNsQi9RLFFBQVE7Y0FDWmdFLE9BQU8sRUFBRUE7WUFBTyxFQUNmLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREEsSUFBQTFILE1BQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBOEIsTUFBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUErQixHQUFBLEdBQUEvQixPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBd1ksU0FBQSxHQUFBeFksT0FBQTtVQUNBLElBQUFnRCxNQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQXlZLGFBQUEsR0FBQXpZLE9BQUE7VUFDQSxJQUFBMFksYUFBQSxHQUFBMVksT0FBQTtVQUNBLElBQUFrRCxhQUFBLEdBQUFsRCxPQUFBO1VBQ0EsSUFBQStXLE9BQUEsR0FBQS9XLE9BQUE7VUFDQSxJQUFBOFcsT0FBQSxHQUFBOVcsT0FBQTtVQUNBLElBQUEyWSxlQUFBLEdBQUEzWSxPQUFBO1VBR00sU0FBVWtWLGlCQUFpQkEsQ0FBQztZQUNqQzdVLEtBQUs7WUFDTDZHLE1BQU07WUFDTnpHLElBQUk7WUFDSjJJLFNBQVM7WUFDVG5IO1VBQU8sQ0FPUDtZQUNBO1lBQ0EsTUFBTTtjQUFFQyxLQUFLO2NBQUV1TztZQUFZLENBQUUsR0FBR3BRLEtBQUs7WUFDckMsTUFBTSxDQUFDbUYsUUFBUSxDQUFDLEdBQUczRCxNQUFBLENBQUFXLE9BQUssQ0FBQ2lDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDeEMsTUFBTSxDQUFDNFIsS0FBSyxFQUFFUCxRQUFRLENBQUMsR0FBR2pVLE1BQUEsQ0FBQVcsT0FBSyxDQUFDaUMsUUFBUSxDQUFTLEVBQUUsQ0FBQztZQUNwRCxNQUFNLENBQUNtUSxJQUFJLEVBQUVhLE9BQU8sQ0FBQyxHQUFHNVQsTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLEVBQXNCO1lBQzVELE1BQU0sQ0FBQ3JCLEtBQUssRUFBRWtFLFFBQVEsQ0FBQyxHQUFHekYsTUFBQSxDQUFBVyxPQUFLLENBQUNpQyxRQUFRLENBQVMsRUFBRSxDQUFDO1lBRXBELElBQUksQ0FBQ2hFLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTXdXLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekIsSUFBSTtnQkFDSCxNQUFNO2tCQUFFMkI7Z0JBQU0sQ0FBRSxHQUFHLE1BQU12WSxLQUFLLENBQUN3WSxNQUFNLENBQUM7a0JBQUVyUixLQUFLLEVBQUU7Z0JBQVcsQ0FBRSxDQUFDO2dCQUU3RCxJQUFJLENBQUNvUixNQUFNLEVBQUU7a0JBQ1p0UixRQUFRLENBQUMsU0FBUyxDQUFDO2tCQUNuQjs7Z0JBR0RyRixPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU8rRixDQUFDLEVBQUU7Z0JBQ1hWLFFBQVEsQ0FBQyxTQUFTLENBQUM7O1lBRXJCLENBQUM7WUFFRCxNQUFNaVEsUUFBUSxHQUFzQztjQUNuRC9ELE9BQU8sRUFBRWlGLGFBQUEsQ0FBQWpELGdCQUFnQjtjQUN6QnNELFNBQVMsRUFBRUosYUFBQSxDQUFBMUIsYUFBYTtjQUN4QlEsRUFBRSxFQUFFVixPQUFBLENBQUFWLGdCQUFnQjtjQUNwQnFCLE1BQU0sRUFBRVYsT0FBQSxDQUFBVyxVQUFVO2NBQ2xCekIsUUFBUSxFQUFFdUMsU0FBQSxDQUFBM0Msa0JBQWtCO2NBQzVCa0QsT0FBTyxFQUFFSixlQUFBLENBQUFLO2FBQ1Q7WUFFRCxNQUFNQyxXQUFXLEdBQVcsQ0FBQyxDQUFDeEksWUFBWSxJQUFJLENBQUNtRSxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUNBLElBQUksR0FBRyxXQUFXLEdBQUdBLElBQUk7WUFDNUYsTUFBTWdELE9BQU8sR0FBR0wsUUFBUSxDQUFDMEIsV0FBVyxDQUFDO1lBQ3JDLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ3hCcEQsUUFBUSxDQUFDLEVBQUUsQ0FBQztjQUNaTCxPQUFPLENBQUM1USxTQUFTLENBQUM7Y0FDbEI1QyxPQUFPLEVBQUU7WUFDVixDQUFDO1lBRUQsT0FDQ0osTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1gsTUFBQSxDQUFBNEcsS0FBSztjQUFDM0YsU0FBUyxFQUFDLHFCQUFxQjtjQUFDdEMsSUFBSTtjQUFDd0IsT0FBTyxFQUFFaVgsV0FBVztjQUFFQyxhQUFhLEVBQUU7WUFBSyxHQUNyRnRYLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQUcsYUFBYTtjQUFDQyxLQUFLLEVBQUVBLEtBQUs7Y0FBRWxCLEtBQUssRUFBRUEsS0FBSyxDQUFDeVQsTUFBTSxDQUFDeE47WUFBTSxFQUFJLEVBQzNEdEcsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsUUFBQSxDQUFBMlMsY0FBYyxDQUFDekUsUUFBUTtjQUN2QnZQLEtBQUssRUFBRTtnQkFDTmdULElBQUk7Z0JBQ0oxUyxLQUFLLEVBQUU3QixLQUFLLENBQUM2QixLQUFLO2dCQUNsQmdGLE1BQU07Z0JBQ043RyxLQUFLO2dCQUNMK0ksU0FBUztnQkFDVG5ILE9BQU8sRUFBRUEsQ0FBQSxLQUFLO2tCQUNiNlQsUUFBUSxDQUFDLEVBQUUsQ0FBQztrQkFDWkwsT0FBTyxDQUFDNVEsU0FBUyxDQUFDO2tCQUNsQjVDLE9BQU8sRUFBRTtnQkFDVixDQUFDO2dCQUVEd1QsT0FBTztnQkFDUFksS0FBSztnQkFDTFA7O1lBQ0EsR0FFRGpVLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNTLGFBQUEsQ0FBQWtXLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sR0FDM0J4WCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVYsT0FBTztjQUFDWCxNQUFNLEVBQUVBLE1BQU07Y0FBRS9RLEdBQUcsRUFBQztZQUFTLEVBQUcsQ0FDeEIsRUFDbEJyRSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUE4TixnQkFBZ0I7Y0FBQzNKLEdBQUcsRUFBQyxXQUFXO2NBQUNWLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQy9CLENBQ25CO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEdBLElBQUEzRCxNQUFBLEdBQUE3QixPQUFBO1VBQ0EsSUFBQStCLEdBQUEsR0FBQS9CLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUdNLFNBQVVnWix1QkFBdUJBLENBQUE7WUFDdEMsTUFBTTtjQUFFM1ksS0FBSztjQUFFNEIsT0FBTztjQUFFd1Q7WUFBTyxDQUFFLEdBQUcsSUFBQXhTLFFBQUEsQ0FBQXlTLGlCQUFpQixHQUFFO1lBQ3ZELE1BQU14VCxLQUFLLEdBQUc7Y0FBRSxHQUFHN0IsS0FBSyxDQUFDNkg7WUFBVyxDQUFFO1lBQ3RDLE1BQU04SixRQUFRLEdBQUdBLENBQUEsS0FBTXlELE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDM0MsTUFBTTZELFNBQVMsR0FBR0EsQ0FBQSxLQUFNN0QsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNyQ3ZULEtBQUssQ0FBQ3FHLE9BQU8sQ0FBQ1EsTUFBTSxHQUFHMUksS0FBSyxDQUFDNkgsV0FBVyxDQUFDSyxPQUFPLENBQUMyTixJQUFJO1lBRXJELE9BQ0NyVSxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFBWixNQUFBLENBQUFXLE9BQUEsQ0FBQW1JLFFBQUEsUUFDQzlJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNWLEdBQUEsQ0FBQXdYLGtCQUFrQjtjQUNsQmxKLFNBQVMsRUFBRWhRLEtBQUssQ0FBQ29GLEtBQUssQ0FBQzhLLFlBQVk7Y0FDbkNySSxXQUFXLEVBQUVoRyxLQUFLO2NBQ2xCaUYsS0FBSyxFQUFFOUcsS0FBSyxDQUFDb0YsS0FBSyxDQUFDMEIsS0FBSztjQUN4QmxGLE9BQU8sRUFBRUEsT0FBTztjQUNoQitQLFFBQVEsRUFBRUEsUUFBUTtjQUNsQnNILFNBQVMsRUFBRUE7WUFBUyxFQUNuQixDQUNBO1VBRUwiLCJpZ25vcmVMaXN0IjpbXX0=