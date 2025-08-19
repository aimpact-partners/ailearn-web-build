System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.5.7/modules/draft/store.code", "@beyond-js/kernel@0.1.12/routing", "react@18.3.1", "pragmate-ui@1.0.6/modal", "@aimpact/ailearn-app@0.5.7/components/ui", "pragmate-ui@1.0.6/alert", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.6/components", "pragmate-ui@1.0.6/form/react-select", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.6/form", "pragmate-ui@1.0.6/base", "pragmate-ui@1.0.6/image", "@aimpact/ailearn-app@0.5.7/components/icons", "@aimpact/ailearn-app@0.5.7/shared/hooks", "pragmate-ui@1.0.6/icons", "pragmate-ui@1.0.6/list", "@aimpact/ailearn-app@0.5.7/modules/management/activity.code", "@aimpact/ailearn-app@0.5.7/modules/management/overview.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, ConfirmationModal, SupportingText, OwnerImage, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ConfirmationModal: void 0,
    SupportingText: void 0,
    OwnerImage: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp057ModulesDraftStoreCode) {
      dependency_4 = _aimpactAilearnApp057ModulesDraftStoreCode;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi106Modal) {
      dependency_7 = _pragmateUi106Modal;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_8 = _aimpactAilearnApp057ComponentsUi;
    }, function (_pragmateUi106Alert) {
      dependency_9 = _pragmateUi106Alert;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_10 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi106Components) {
      dependency_12 = _pragmateUi106Components;
    }, function (_pragmateUi106FormReactSelect) {
      dependency_13 = _pragmateUi106FormReactSelect;
    }, function (_beyondJsKernel0112Core) {
      dependency_14 = _beyondJsKernel0112Core;
    }, function (_pragmateUi106Form) {
      dependency_15 = _pragmateUi106Form;
    }, function (_pragmateUi106Base) {
      dependency_16 = _pragmateUi106Base;
    }, function (_pragmateUi106Image) {
      dependency_17 = _pragmateUi106Image;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_19 = _aimpactAilearnApp057SharedHooks;
    }, function (_pragmateUi106Icons) {
      dependency_20 = _pragmateUi106Icons;
    }, function (_pragmateUi106List) {
      dependency_21 = _pragmateUi106List;
    }, function (_aimpactAilearnApp057ModulesManagementActivityCode) {
      dependency_22 = _aimpactAilearnApp057ModulesManagementActivityCode;
    }, function (_aimpactAilearnApp057ModulesManagementOverviewCode) {
      dependency_23 = _aimpactAilearnApp057ModulesManagementOverviewCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/modules/draft/store.code', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['react', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/base', dependency_16], ['pragmate-ui/image', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/shared/hooks', dependency_19], ['pragmate-ui/icons', dependency_20], ['pragmate-ui/list', dependency_21], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_22], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/modules/draft.widget');
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
        hash: 4171504284,
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
            const name = owner?.displayName ? owner.displayName : owner.name;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-sm modal-centered",
              onClose: onClose
            }, _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement("div", {
              className: "primary-container text-center owner-container"
            }, _react.default.createElement(_image.OwnerImage, {
              owner: owner
            }), _react.default.createElement("div", {
              className: "owner-info"
            }, _react.default.createElement("h6", null, name), _react.default.createElement("span", null, texts.ownerDescription, " "))), _react.default.createElement("div", {
              className: "mt-15 text-center"
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
        hash: 705666320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageFields = LanguageFields;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _core = require("@beyond-js/kernel/core");
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
            const {
              globalTexts
            } = store;
            // Get supported languages from the languages object
            const supportedLanguages = [..._core.languages.supported.keys()];
            const onChange = async event => {
              await store.loadAudiences(event.target.value);
              setValues(values => ({
                ...values,
                language: event.target.value
              }));
            };
            // Get languages from globalTexts and filter by supportedLanguages
            const options = globalTexts?.languages ? Object.entries(globalTexts.languages).filter(([langCode]) => supportedLanguages.includes(langCode)).map(([langCode, langData]) => ({
              value: langCode,
              label: langData.name
            })) : [];
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
        hash: 9141652,
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
              // store.model.set({ owner });
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
              setValues(values => {
                return {
                  ...values,
                  owner: owner.getProperties()
                };
              });
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
        hash: 2701015695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftForm = DraftForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
            const invalidForm = !values.owner || !values.audience || !values.objective || !values.language;
            const processing = store.fetchingSuggestions || store.fetching;
            const isDisabled = invalidForm || processing || store.processing;
            (0, _hooks.useStore)(store, ['fetchingSuggestions.changed', 'fetching.data']);
            const onCofirmed = async () => {
              if (store.model.state && store.model.state === values.state && store.model.objective === values.objective) return;
              await setValues({
                ...values,
                updated: false
              });
              if (store.model.state === 'created') return;
              toggleConfirmation();
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
                console.error(e);
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
        hash: 3759355828,
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
              try {
                setUpdating(true);
                if (event.currentTarget.value === 'true') {
                  await store.save({
                    objective: improved
                  });
                  setValues(values => ({
                    ...values,
                    objective: improved
                  }));
                }
                setImprovedObjective(true);
                setUpdating(false);
              } catch (e) {
                console.error('capturamos error');
              }
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
        hash: 2579768500,
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
              let properties = store.model?.getProperties();
              if (!properties) properties = {};
              setValues(values => store.model?.getProperties());
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
        hash: 3919217807,
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
              setView: () => setView('examples')
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
        hash: 1959151002,
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
        hash: 2142566232,
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
              className: "modal-form",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJ2YWx1ZXMiLCJvd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZGlzcGxheU5hbWUiLCJNb2RhbCIsIk93bmVySW1hZ2UiLCJvd25lckRlc2NyaXB0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIl9ob29rcyIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJzZXRWYWx1ZXMiLCJtYXBPcHRpb25zIiwiYXVkaWVuY2VzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJjdXJyZW50QXVkaWVuY2UiLCJ1c2VCaW5kZXIiLCJpdGVtcyIsImV2ZW50Iiwic2V0Q3VycmVudEF1ZGllbmNlIiwidGFyZ2V0IiwiY2F0ZWdvcnkiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiX2NvcmUiLCJfYXVkaWVuY2UiLCJfbGV2ZWwiLCJMYW5ndWFnZUZpZWxkcyIsInN1cHBvcnRlZExhbmd1YWdlcyIsImxhbmd1YWdlcyIsInN1cHBvcnRlZCIsImtleXMiLCJsb2FkQXVkaWVuY2VzIiwiZW50cmllcyIsImZpbHRlciIsImxhbmdDb2RlIiwiaW5jbHVkZXMiLCJsYW5nRGF0YSIsIkZyYWdtZW50IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwibGV2ZWwiLCJtYXBMZXZlbHMiLCJhdWRpZW5jZUxldmVscyIsIl9mb3JtIiwiT2JqZWN0aXZlRmllbGQiLCJmb3JtVGV4dHMiLCJmb3JtIiwib25PYmplY3RpdmVDaGFuZ2UiLCJjbGVhckltcHJvdmVtZW50cyIsIlRleHRhcmVhIiwib2JqZWN0aXZlIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiX3N1cHBvcnRpbmdUZXh0IiwiT3duZXJzaGlwRmllbGQiLCJ3VGV4dHMiLCJvYmplY3RpdmVUb3VyIiwidG91ciIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwib3duZXJzaGlwcyIsImdldEFkbWluaXN0cmF0b3IiLCJlbnRpdHkiLCJnZXRDcmVkaXRzIiwibW9kdWxlcyIsImFsZXJ0cyIsInVuYXZhaWxhYmxlIiwiY291bnQiLCJhdmFpbGFibGUiLCJnZXRQcm9wZXJ0aWVzIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsIl9vd25lcnNoaXAiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsImludmFsaWRGb3JtIiwicHJvY2Vzc2luZyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJ1c2VTdG9yZSIsIm9uQ29maXJtZWQiLCJ1cGRhdGVkIiwib25TdWJtaXQiLCJQYWdlQ29udGFpbmVyIiwiYWN0aXZpdGllcyIsImlzRm9ybSIsIkRyaXZlclRvdXJDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJzZXRQcm9jZXNzaW5nIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJQcm9jZXNzQ29udGFpbmVyIiwidGV4dEFjdGlvbnMiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwiY2xvc2VNb2RhbCIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsIm9uQ29uc3VtZSIsInJlc3BvbnNlIiwiY29uc3VtZUNvaW5zIiwicmVzcG9uc2UyIiwiaW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiYW5hbHlzZSIsIkNvaW5zTW9kYWwiLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiYmxvY2siLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwiU2V0IiwiYXBwbHkiLCJzcGVjcyIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJvbkNhbmNlbCIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInRvdGFsIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwicHJvcHMiLCJpdGVtIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJoYXMiLCJkZWxldGUiLCJhZGQiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwidXBkYXRpbmciLCJzZXRVcGRhdGluZyIsImNvbmZpcm0iLCJfYWN0aXZpdHkiLCJfb3ZlcnZpZXciLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsInNldEZldGNoaW5nIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJhY3RpdmVQYW5lbCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2hvd1BhdGh3YXkiLCJzZXRTaG93UGF0aHdheSIsInNob3dDb25maXJtYXRpb24iLCJzZXRTaG93Q29uZmlybWF0aW9uIiwicHJvcGVydGllcyIsInJlYWR5Iiwic2V0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ2aWV3Iiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsImFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYWN0aXZpdHlTZWxlY3RlZCIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VG90YWxBY3Rpdml0aWVzIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZ2VuZXJhdGUiLCJfYWlGb3JtIiwiX21hbnVhbCIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjb250cm9sVHlwZSIsInNldENvbnRyb2xUeXBlIiwiY29udHJvbHMiLCJhaSIsIm1hbnVhbCIsIk1hbnVhbEZvcm0iLCJDb250cm9sIiwic3VidGl0bGUiLCJjaGVja2VkIiwibWFudWFsbHkiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInBhdGh3YXkiLCJJbnB1dCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfcmVxdWVzdENyZWRpdHMiLCJzZWxlY3Rpb24iLCJyZXF1ZXN0IiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJ2aWV3RGVmaW5lZCIsImhhbmRsZUNMb3NlIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3RyaW0udHMiLCIvL3R5cGVzLnRzLyIsIi8vdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiLy90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvRml4ZWRBbGVydC50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiLy90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi8vdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiLy90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xldmVsLnRzeCIsIi8vdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi8vdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi8vdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi8vdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiLy90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiLy90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiLy90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi8vZ2xvYmFsLnRzeC8iLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9hbmltYXRpb25zLnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiLy90cy92aWV3cy9wYXRod2F5L2NvbnRleHQudHN4IiwiLy90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9kZWNpc2lvbi10eXBlLnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiLy90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiLy90cy92aWV3cy9wYXRod2F5L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQUksS0FBSztjQUNuQixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUUsTUFBTUEsQ0FBQTtjQUNULE9BQU9MLE1BQUEsQ0FBQU0sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUosS0FBTSxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZ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