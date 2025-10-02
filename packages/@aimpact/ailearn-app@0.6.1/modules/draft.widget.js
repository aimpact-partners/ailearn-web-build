System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.6.1/modules/draft/store.code", "@beyond-js/kernel@0.1.14/routing", "react@18.3.1", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/alert", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form/react-select", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/base", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.6.1/components/icons", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.6.1/modules/management/activity.code", "@aimpact/ailearn-app@0.6.1/modules/management/overview.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, ConfirmationModal, SupportingText, OwnerImage, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp061ModulesDraftStoreCode) {
      dependency_4 = _aimpactAilearnApp061ModulesDraftStoreCode;
    }, function (_beyondJsKernel0114Routing) {
      dependency_5 = _beyondJsKernel0114Routing;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi108Modal) {
      dependency_7 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_8 = _aimpactAilearnApp061ComponentsUi;
    }, function (_pragmateUi108Alert) {
      dependency_9 = _pragmateUi108Alert;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_10 = _beyondJsReact18Widgets118Hooks;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi108Components) {
      dependency_12 = _pragmateUi108Components;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_13 = _pragmateUi108FormReactSelect;
    }, function (_beyondJsKernel0114Core) {
      dependency_14 = _beyondJsKernel0114Core;
    }, function (_pragmateUi108Form) {
      dependency_15 = _pragmateUi108Form;
    }, function (_pragmateUi108Base) {
      dependency_16 = _pragmateUi108Base;
    }, function (_pragmateUi108Image) {
      dependency_17 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_pragmateUi108Icons) {
      dependency_19 = _pragmateUi108Icons;
    }, function (_pragmateUi108List) {
      dependency_20 = _pragmateUi108List;
    }, function (_aimpactAilearnApp061ModulesManagementActivityCode) {
      dependency_21 = _aimpactAilearnApp061ModulesManagementActivityCode;
    }, function (_aimpactAilearnApp061ModulesManagementOverviewCode) {
      dependency_22 = _aimpactAilearnApp061ModulesManagementOverviewCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/modules/draft/store.code', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['react', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/base', dependency_16], ['pragmate-ui/image', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/list', dependency_20], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_21], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/modules/draft.widget');
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
        hash: 3226754154,
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
            const label = store.model?.state && saved ? store.globalTexts.actions.continue : store.globalTexts.actions.save;
            // const { ref: mainRef } = useDriverTour('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
            const [processing, setProcessing] = React.useState(false);
            const invalidForm = !values || !values.owner || !values.audience || !values.objective || !values.language;
            const isDisabled = invalidForm || processing || store.processing;
            // useStore(store, ['fetchingSuggestions.changed', 'fetching.data']);
            if (store.fetching) return React.createElement("div", null, "Fetching...");
            (0, _hooks.useBinder)([store], () => {
              setProcessing(store.fetchingSuggestions || store.fetching);
            }, ['fetchingSuggestions.changed', 'fetching.data', 'fetching.changed']);
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
        hash: 4164663917,
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
            if (!store.ready || !store.model) return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJ2YWx1ZXMiLCJvd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZGlzcGxheU5hbWUiLCJNb2RhbCIsIk93bmVySW1hZ2UiLCJvd25lckRlc2NyaXB0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIl9ob29rcyIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJzZXRWYWx1ZXMiLCJtYXBPcHRpb25zIiwiYXVkaWVuY2VzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJjdXJyZW50QXVkaWVuY2UiLCJ1c2VCaW5kZXIiLCJpdGVtcyIsImV2ZW50Iiwic2V0Q3VycmVudEF1ZGllbmNlIiwidGFyZ2V0IiwiY2F0ZWdvcnkiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiX2NvcmUiLCJfYXVkaWVuY2UiLCJfbGV2ZWwiLCJMYW5ndWFnZUZpZWxkcyIsInN1cHBvcnRlZExhbmd1YWdlcyIsImxhbmd1YWdlcyIsInN1cHBvcnRlZCIsImtleXMiLCJsb2FkQXVkaWVuY2VzIiwiZW50cmllcyIsImZpbHRlciIsImxhbmdDb2RlIiwiaW5jbHVkZXMiLCJsYW5nRGF0YSIsIkZyYWdtZW50IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwibGV2ZWwiLCJtYXBMZXZlbHMiLCJhdWRpZW5jZUxldmVscyIsIl9mb3JtIiwiT2JqZWN0aXZlRmllbGQiLCJmb3JtVGV4dHMiLCJmb3JtIiwib25PYmplY3RpdmVDaGFuZ2UiLCJjbGVhckltcHJvdmVtZW50cyIsIlRleHRhcmVhIiwib2JqZWN0aXZlIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiX3N1cHBvcnRpbmdUZXh0IiwiT3duZXJzaGlwRmllbGQiLCJ3VGV4dHMiLCJvYmplY3RpdmVUb3VyIiwidG91ciIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwib3duZXJzaGlwcyIsImdldEFkbWluaXN0cmF0b3IiLCJlbnRpdHkiLCJnZXRDcmVkaXRzIiwibW9kdWxlcyIsImFsZXJ0cyIsInVuYXZhaWxhYmxlIiwiY291bnQiLCJhdmFpbGFibGUiLCJnZXRQcm9wZXJ0aWVzIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsIl9vd25lcnNoaXAiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiaW52YWxpZEZvcm0iLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsIlBhZ2VDb250YWluZXIiLCJhY3Rpdml0aWVzIiwiaXNGb3JtIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsIkZvcm0iLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsImltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImFuYWx5c2UiLCJDb2luc01vZGFsIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsImJsb2NrIiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsIlNldCIsImFwcGx5Iiwic3BlY3MiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwib25DYW5jZWwiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJ0b3RhbCIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwiaXRlbSIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiaGFzIiwiZGVsZXRlIiwiYWRkIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJjb25maXJtIiwiX2FjdGl2aXR5IiwiX292ZXJ2aWV3IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJzZXRGZXRjaGluZyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInNob3dQYXRod2F5Iiwic2V0U2hvd1BhdGh3YXkiLCJzaG93Q29uZmlybWF0aW9uIiwic2V0U2hvd0NvbmZpcm1hdGlvbiIsInByb3BlcnRpZXMiLCJyZWFkeSIsInNldCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidmlldyIsIm92ZXJ2aWV3IiwiTW9kdWxlT3ZlcnZpZXciLCJhY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJQYXRod2F5R2VuZXJhdGlvbiIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9hbmltYXRpb25zIiwiQ29uZmlybWF0aW9uRm9ybSIsInNldFZpZXciLCJ1c2VQYXRod2F5Q29udGV4dCIsInJlZmluZSIsIlBhdGh3YXlDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJiYWNrIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsInRvdGFsQWN0aXZpdGllcyIsInNldFRvdGFsQWN0aXZpdGllcyIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImdlbmVyYXRlIiwiX2FpRm9ybSIsIl9tYW51YWwiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY29udHJvbFR5cGUiLCJzZXRDb250cm9sVHlwZSIsImNvbnRyb2xzIiwiYWkiLCJtYW51YWwiLCJNYW51YWxGb3JtIiwiQ29udHJvbCIsInN1YnRpdGxlIiwiY2hlY2tlZCIsIm1hbnVhbGx5IiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX3JlcXVlc3RDcmVkaXRzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJoYW5kbGVDTG9zZSIsImNsb3NlQmFja2Ryb3AiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy90cmltLnRzIiwiLy90eXBlcy50cy8iLCIvL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi8vdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL0ZpeGVkQWxlcnQudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiLy90cy92aWV3cy9jb250ZXh0LnRzeCIsIi8vdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiLy90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi8vdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiLy90cy92aWV3cy9mb3JtL2ZpZWxkcy9sZXZlbC50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvL3RzL3ZpZXdzL2Zvcm0vaW1hZ2UudHN4IiwiLy90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiLy90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiLy90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvL2dsb2JhbC50c3gvIiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL3BhdGh3YXkvYW5pbWF0aW9ucy50c3giLCIvL3RzL3ZpZXdzL3BhdGh3YXkvY29uZmlybWF0aW9uLnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvYWktZm9ybS50c3giLCIvL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9mb3Jtcy90b3RhbC1hY3Rpdml0aWVzLnRzeCIsIi8vdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBSSxLQUFLO2NBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRSxNQUFNQSxDQUFBO2NBQ1QsT0FBT0wsTUFBQSxDQUFBTSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElB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