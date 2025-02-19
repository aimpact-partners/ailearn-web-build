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
        hash: 1400000929,
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
            }, _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title)), _react.default.createElement(_ui.ErrorRenderer, {
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
        hash: 351466373,
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
        hash: 991896874,
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
        hash: 4014663314,
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
          function AIGenerationForm({
            title = true
          }) {
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
            }, title && _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.activities.title)), _react.default.createElement(_form.Form, {
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
        hash: 1625183821,
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
              texts,
              store
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
              if (value === 'yes' && !store.hasCredits) {
                setView('request');
                return;
              }
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
              title: false
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
        hash: 3577524844,
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
            }, _react.default.createElement(Control, null)), _react.default.createElement(_ui.ProcessContainer, {
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
        hash: 2118929350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsContainer = RequestCreditsContainer;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJ2YWx1ZXMiLCJvd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZW50aXR5IiwidG9Mb3dlckNhc2UiLCJkaXNwbGF5TmFtZSIsIk1vZGFsIiwiT3duZXJJbWFnZSIsIm93bmVyRGVzY3JpcHRpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiX2hvb2tzIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsInNldFZhbHVlcyIsIm1hcE9wdGlvbnMiLCJhdWRpZW5jZXMiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImN1cnJlbnRBdWRpZW5jZSIsInVzZUJpbmRlciIsIml0ZW1zIiwiZXZlbnQiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJ0YXJnZXQiLCJjYXRlZ29yeSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfYXVkaWVuY2UiLCJfbGV2ZWwiLCJMYW5ndWFnZUZpZWxkcyIsImxvYWRBdWRpZW5jZXMiLCJpdGVtIiwibGFuZ3VhZ2VzIiwiRnJhZ21lbnQiLCJBdWRpZW5jZUxldmVsRmllbGQiLCJsZXZlbCIsIm1hcExldmVscyIsImF1ZGllbmNlTGV2ZWxzIiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsImZvcm1UZXh0cyIsImZvcm0iLCJvbk9iamVjdGl2ZUNoYW5nZSIsImNsZWFySW1wcm92ZW1lbnRzIiwiVGV4dGFyZWEiLCJvYmplY3RpdmUiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0U2VsZWN0ZWQiLCJzdXBwb3J0aW5nVGV4dCIsInNldFN1cHBvcnRpbmdUZXh0IiwiY29udGVudCIsImRlZmF1bHRPcHRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYXR0cnMiLCJvd25lcnNoaXBzIiwiZ2V0QWRtaW5pc3RyYXRvciIsImdldENyZWRpdHMiLCJtb2R1bGVzIiwiYWxlcnRzIiwidW5hdmFpbGFibGUiLCJjb3VudCIsImF2YWlsYWJsZSIsIlRvdXJTdGVwIiwiYXMiLCJTdXBwb3J0aW5nVGV4dCIsInZhcmlhbnRDbGFzc01hcCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInJlc3QiLCJ2YXJpYW50Q2xhc3MiLCJjb21iaW5lZENsYXNzTmFtZSIsInRyaW0iLCJfaWNvbnMiLCJwaG90b1VybCIsIkFwcEljb24iLCJpY29uIiwiSW1hZ2UiLCJzcmMiLCJSZWFjdCIsIl9hbmltYXRlZERpdiIsIl9sYW5ndWFnZSIsIl9vYmplY3RpdmUiLCJfb3duZXJzaGlwIiwiX3N1Z2dlc3Rpb25zIiwiX2FjdGlvbiIsIkRyYWZ0Rm9ybSIsInRvZ2dsZVBhdGh3YXkiLCJ0b2dnbGVDb25maXJtYXRpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsIm9uQ29maXJtZWQiLCJ1cGRhdGVkIiwib25TdWJtaXQiLCJsb2ciLCJQYWdlQ29udGFpbmVyIiwiYWN0aXZpdGllcyIsImlzRm9ybSIsIkRyaXZlclRvdXJDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsImltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImFuYWx5c2UiLCJDb2luc01vZGFsIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJTZXQiLCJhcHBseSIsInNwZWNzIiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsIm9uQ2FuY2VsIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwidG90YWwiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiaGFzIiwiZGVsZXRlIiwiYWRkIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJjb25maXJtIiwiX2FjdGl2aXR5IiwiX292ZXJ2aWV3IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJzZXRGZXRjaGluZyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImdldFByb3BlcnRpZXMiLCJzaG93UGF0aHdheSIsInNldFNob3dQYXRod2F5Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJyZWFkeSIsInNldCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidmlldyIsIm92ZXJ2aWV3IiwiTW9kdWxlT3ZlcnZpZXciLCJhY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJQYXRod2F5R2VuZXJhdGlvbiIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9hbmltYXRpb25zIiwiQ29uZmlybWF0aW9uRm9ybSIsInNldFZpZXciLCJ1c2VQYXRod2F5Q29udGV4dCIsInJlZmluZSIsIlBhdGh3YXlDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJiYWNrIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsInRvdGFsQWN0aXZpdGllcyIsInNldFRvdGFsQWN0aXZpdGllcyIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImdlbmVyYXRlIiwiX2FpRm9ybSIsIl9tYW51YWwiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY29udHJvbFR5cGUiLCJzZXRDb250cm9sVHlwZSIsImNvbnRyb2xzIiwiYWkiLCJtYW51YWwiLCJNYW51YWxGb3JtIiwiQ29udHJvbCIsInN1YnRpdGxlIiwiY2hlY2tlZCIsIm1hbnVhbGx5IiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX3JlcXVlc3RDcmVkaXRzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJoYW5kbGVDTG9zZSIsImNsb3NlQmFja2Ryb3AiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdHJpbS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvRml4ZWRBbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sZXZlbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29uZmlybWF0aW9uLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvYWktZm9ybS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9kZWNpc2lvbi10eXBlLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL21hbnVhbC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy90b3RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHSixNQUFBLENBQUFJLEtBQUs7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlFLE1BQU1BLENBQUE7Y0FDVCxPQUFPTCxNQUFBLENBQUFNLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkU7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNTLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJLLFNBQVVhLFFBQVFBLENBQUNDLEtB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