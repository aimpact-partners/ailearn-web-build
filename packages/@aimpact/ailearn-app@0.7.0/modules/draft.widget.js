System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/modules/draft/store.code", "@beyond-js/kernel@0.1.14/routing", "react@18.3.1", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/alert", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form/react-select", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/base", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/modules/management/activity.code", "@aimpact/ailearn-app@0.7.0/modules/management/overview.code"], function (_export, _context2) {
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070ModulesDraftStoreCode) {
      dependency_4 = _aimpactAilearnApp070ModulesDraftStoreCode;
    }, function (_beyondJsKernel0114Routing) {
      dependency_5 = _beyondJsKernel0114Routing;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi108Modal) {
      dependency_7 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_8 = _aimpactAilearnApp070ComponentsUi;
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
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Toast) {
      dependency_19 = _pragmateUi108Toast;
    }, function (_pragmateUi108Icons) {
      dependency_20 = _pragmateUi108Icons;
    }, function (_pragmateUi108List) {
      dependency_21 = _pragmateUi108List;
    }, function (_aimpactAilearnApp070ModulesManagementActivityCode) {
      dependency_22 = _aimpactAilearnApp070ModulesManagementActivityCode;
    }, function (_aimpactAilearnApp070ModulesManagementOverviewCode) {
      dependency_23 = _aimpactAilearnApp070ModulesManagementOverviewCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/modules/draft/store.code', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['react', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/base', dependency_16], ['pragmate-ui/image', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/toast', dependency_19], ['pragmate-ui/icons', dependency_20], ['pragmate-ui/list', dependency_21], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_22], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/modules/draft.widget');
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
        hash: 2372809366,
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

      /***********************************************
      INTERNAL MODULE: ./views/form/confirmation-modal
      ***********************************************/

      ims.set('./views/form/confirmation-modal', {
        hash: 2474976481,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = ConfirmationModal;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _image = require("./image");
          /*bundle*/
          function ConfirmationModal({
            store,
            show,
            onClose
          }) {
            const {
              owner
            } = store.model.getProperties();
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            if (!show) return null;
            // const texts = store.texts;
            const onConfirm = async () => {
              try {
                setLoading(true);
                await store.save({
                  state: 'created'
                }, false);
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
        hash: 122634013,
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
            const mapOptions = audiences => {
              return audiences.map(audience => ({
                value: audience.id,
                label: audience.name
              }));
            };
            // const [options, setOptions] = React.useState(mapOptions(store.audiences));
            let value = undefined;
            if (store.currentAudience) {
              value = store.currentAudience.id;
            }
            const options = mapOptions(store.audiences);
            (0, _hooks.useStore)(store, ['fetching.data', 'audiences.loaded']);
            const onChange = async event => {
              store.setCurrentAudience(event.target.value);
              store.model.set({
                audience: {
                  category: event.target.value
                }
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
        hash: 3205751211,
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
              store
            } = (0, _context.useModuleContext)();
            const {
              globalTexts
            } = store;
            const supportedLanguages = [..._core.languages.supported.keys()];
            const onChange = async event => {
              await store.loadAudiences(event.target.value);
              store.model.set({
                language: event.target.value
              });
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
        hash: 1659759100,
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
              store
            } = (0, _context.useModuleContext)();
            const mapLevels = level => ({
              value: level.id,
              label: level.label
            });
            const value = store.model.audience?.level;
            const options = store.audienceLevels.map(mapLevels);
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length || !store.model?.audience?.category
            };
            const onChange = event => {
              const values = store.model.getProperties();
              const audience = {
                category: values.audience.category,
                level: event.target.value
              };
              store.model.set({
                audience
              });
            };
            (0, _hooks.useStore)(store, ['audience.changed', 'audiences.loaded']);
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
        hash: 1445147012,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ObjectiveField({
            disabled = false
          }) {
            const {
              values,
              texts,
              onChange,
              store
            } = (0, _context.useModuleContext)();
            const formTexts = texts.setup.form;
            (0, _hooks.useStore)(store.model, ['objective.changed']);
            const onObjectiveChange = event => {
              store.clearImprovements();
              onChange(event);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "objective-field "
            }, _react.default.createElement(_form.Textarea, {
              onChange: onObjectiveChange,
              value: store.model?.objective || '',
              name: "objective",
              placeholder: formTexts.objective.textArea,
              counter: true,
              disabled: disabled,
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
        hash: 1695697498,
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
              store.model.set({
                owner: owner.getProperties()
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
        hash: 588803357,
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
          var _language = require("./fields/language");
          var _objective = require("./fields/objective");
          var _ownership = require("./fields/ownership");
          var _suggestions = require("./suggestions");
          var _action = require("./suggestions/action");
          function DraftForm() {
            const {
              store,
              texts,
              saved,
              fetching,
              togglePathway,
              toggleConfirmation
            } = (0, _context.useModuleContext)();
            const values = store.model.getProperties();
            const label = store.model?.state && saved ? store.globalTexts.actions.continue : store.globalTexts.actions.save;
            const [processing, setProcessing] = React.useState(false);
            const invalidForm = !values || !values.owner || !values.audience || !values.objective || !values.language;
            const isDisabled = processing || store.processing || store.fetchingSuggestions;
            (0, _hooks.useStore)(store, ['fetchingSuggestions.changed', 'fetching.data', 'fetching.changed']);
            const onCofirmed = async () => {
              setProcessing(true);
              if (store.model.state && store.model.state === values.state && store.model.objective === values.objective) return;
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
              onSubmit: onSubmit
            }, React.createElement(_ui.AnimatedContainer, null, React.createElement("section", {
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
              disabled: isDisabled
            }), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "parameters",
              as: "div",
              className: "parameters-container"
            }, React.createElement(_language.LanguageFields, {
              disabled: isDisabled
            }))), React.createElement(_ui.TourStep, {
              as: "section",
              texts: texts.objectiveTour,
              name: "objective",
              className: "objective__container relative-container"
            }, React.createElement(_objective.ObjectiveField, {
              disabled: isDisabled
            }))), React.createElement(_suggestions.ObjectiveSuggestions, {
              setProcessing: setProcessing,
              processing: processing
            }), React.createElement("footer", {
              className: "footer-container"
            }, React.createElement(_action.SuggestionsAction, null), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "save",
              className: "save-button__container"
            }, React.createElement(_components.Button, {
              type: "submit",
              disabled: isDisabled || invalidForm,
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
        hash: 3235337046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _toast = require("pragmate-ui/toast");
          function SuggestionsAction({}) {
            const {
              store: {
                globalTexts: {
                  actions: textActions
                }
              },
              store,
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
                  objective: store.model.objective
                });
              } catch (e) {
                console.log(100);
                if (store.globalTexts.errors[e.message]) _toast.toast.error(store.globalTexts.errors[e.message]);else _toast.toast.error(store.globalTexts.errors.DEFAULT_ERROR);
              }
            };
            const onConsume = async () => {
              const response = await store.model.consumeCoins();
              if (response.error) return response;
              const response2 = await store.getObjectiveImprovements({
                objective: store.model.objective
              });
              setShowCoinsModal(false);
              return response2;
            };
            if (store.improvements && !store.improvements.irrelevant) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.AIButton, {
              disabled: !saved,
              fetching: store.fetchingSuggestions,
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
        hash: 1415488349,
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
              disabled: !improvedObjective || store.fetchingSuggestions
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/form/suggestions/list/index
      ***************************************************/

      ims.set('./views/form/suggestions/list/index', {
        hash: 1519781223,
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
            disabled
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
              }
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
                objective: store.model.objective,
                improvements: Array.from(selected).map(i => store.improvements.suggestions[i].suggestion)
              };
              await store.generateObjective(specs);
              setImprovedObjective(false);
              store.model.set({
                objective: store.model.objective
              });
            };
            const onCancel = () => {
              setSelected(new Set());
              setImprovedObjective(false);
              store.clearImprovements();
            };
            const disabledProps = {
              disabled: !selected.size || disabled
            };
            const cls = `objective-suggestions__container${disabled ? ' is-disabled' : ''}`;
            return _react.default.createElement("section", {
              className: cls
            }, _react.default.createElement(_list.List, {
              className: "objective-suggestions__list",
              specs: {
                selected,
                setSelected,
                disabled
              },
              control: _item.ObjectiveSuggestionsItem,
              items: suggestions
            }), _react.default.createElement("div", {
              className: "section__actions"
            }, _react.default.createElement("span", null, texts.total, ": ", selected.size), _react.default.createElement("div", {
              className: "section__actions"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              onClick: onCancel,
              variant: "primary",
              bordered: true
            }, textActions.removeSuggestions), _react.default.createElement(_components.Button, {
              ...disabledProps,
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
        hash: 3274472790,
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
        hash: 340028717,
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
            // const [values, setValues] = React.useState<Record<string, any>>({ ...store.model?.getProperties() });
            const [error, setError] = React.useState();
            const [showPathway, setShowPathway] = React.useState(false);
            const [showConfirmation, setShowConfirmation] = React.useState(false);
            const togglePathway = () => setShowPathway(!showPathway);
            const toggleConfirmation = () => setShowConfirmation(!showConfirmation);
            /**
             * The Main view only needs to listen when the module is loaded
             * and has validated its initial state
             */
            (0, _hooks.useStore)(store, ['load.ready', 'change']);
            if (!store.ready || !store.model) return null;
            //
            const onChange = event => {
              store.model.set({
                [event.currentTarget.name]: event.currentTarget.value
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
              show: showConfirmation,
              onClose: toggleConfirmation
            }), React.createElement(_pathway.PathwayGeneration, {
              show: showPathway,
              store: store,
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
        hash: 3089858340,
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
        hash: 511811530,
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
            const [error, setError] = _react.default.useState('');
            const onGenerate = async () => {
              try {
                setFetching(true);
                const response = await store.generateModuleSuggestion({
                  ...store.model.getProperties(),
                  notes,
                  totalActivities
                });
                if (response.error) {
                  setError(response.error);
                  return;
                }
                onClose();
              } catch (e) {
                if (store.globalTexts.errors[e.message]) setError(store.globalTexts.errors[e.message]);else setError(store.globalTexts.errors.DEFAULT_ERROR);
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
            }, title && _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.activities.title)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              texts: texts.refine.errors
            }), _react.default.createElement(_form.Form, {
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
        hash: 3593696410,
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
            }), Control && _react.default.createElement(Control, {
              title: false
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/pathway/forms/manual
      ********************************************/

      ims.set('./views/pathway/forms/manual', {
        hash: 3502448303,
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
              store
            } = (0, _context.usePathwayContext)();
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
                  ...store.model.getProperties(),
                  title: formValues.title,
                  description: formValues.description,
                  state: 'confirmed'
                });
                onClose();
                store.model.set({
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
        hash: 3868856147,
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
              values
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
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
        hash: 2948144282,
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
          var _requestCredits = require("./request-credits");
          function PathwayGeneration({
            store,
            show,
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
                values: store.model.getProperties(),
                store,
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
        hash: 3721105090,
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
            return _react.default.createElement(_ui.RequestCreditsForm, {
              onConsume: store.model.consumeCoins,
              globalTexts: texts,
              owner: store.model.owner,
              onClose: onClose,
              onCancel: onCancel,
              onSuccess: onSuccess
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiX3JvdXRpbmciLCJfaW1hZ2UiLCJDb25maXJtYXRpb25Nb2RhbCIsIm93bmVyIiwiZ2V0UHJvcGVydGllcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZGlzcGxheU5hbWUiLCJNb2RhbCIsIk93bmVySW1hZ2UiLCJvd25lckRlc2NyaXB0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIl9ob29rcyIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJtYXBPcHRpb25zIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwib3B0aW9ucyIsInVzZVN0b3JlIiwiZXZlbnQiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJ0YXJnZXQiLCJzZXQiLCJjYXRlZ29yeSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfY29yZSIsIl9hdWRpZW5jZSIsIl9sZXZlbCIsIkxhbmd1YWdlRmllbGRzIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwibGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwia2V5cyIsImxvYWRBdWRpZW5jZXMiLCJlbnRyaWVzIiwiZmlsdGVyIiwibGFuZ0NvZGUiLCJpbmNsdWRlcyIsImxhbmdEYXRhIiwiRnJhZ21lbnQiLCJBdWRpZW5jZUxldmVsRmllbGQiLCJsZXZlbCIsIm1hcExldmVscyIsImF1ZGllbmNlTGV2ZWxzIiwidmFsdWVzIiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsImZvcm1UZXh0cyIsImZvcm0iLCJvbk9iamVjdGl2ZUNoYW5nZSIsImNsZWFySW1wcm92ZW1lbnRzIiwiVGV4dGFyZWEiLCJvYmplY3RpdmUiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0U2VsZWN0ZWQiLCJzdXBwb3J0aW5nVGV4dCIsInNldFN1cHBvcnRpbmdUZXh0IiwiY29udGVudCIsImRlZmF1bHRPcHRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYXR0cnMiLCJvd25lcnNoaXBzIiwiZ2V0QWRtaW5pc3RyYXRvciIsImVudGl0eSIsImdldENyZWRpdHMiLCJtb2R1bGVzIiwiYWxlcnRzIiwidW5hdmFpbGFibGUiLCJjb3VudCIsImF2YWlsYWJsZSIsIlRvdXJTdGVwIiwiYXMiLCJTdXBwb3J0aW5nVGV4dCIsInZhcmlhbnRDbGFzc01hcCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInJlc3QiLCJ2YXJpYW50Q2xhc3MiLCJjb21iaW5lZENsYXNzTmFtZSIsInRyaW0iLCJfaWNvbnMiLCJwaG90b1VybCIsIkFwcEljb24iLCJpY29uIiwiSW1hZ2UiLCJzcmMiLCJSZWFjdCIsIl9sYW5ndWFnZSIsIl9vYmplY3RpdmUiLCJfb3duZXJzaGlwIiwiX3N1Z2dlc3Rpb25zIiwiX2FjdGlvbiIsIkRyYWZ0Rm9ybSIsInRvZ2dsZVBhdGh3YXkiLCJ0b2dnbGVDb25maXJtYXRpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsIm9uQ29maXJtZWQiLCJvblN1Ym1pdCIsImNscyIsIlBhZ2VDb250YWluZXIiLCJhY3Rpdml0aWVzIiwiaXRlbXMiLCJpc0Zvcm0iLCJEcml2ZXJUb3VyQ29udGFpbmVyIiwiRm9ybSIsIkFuaW1hdGVkQ29udGFpbmVyIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsIlByb2Nlc3NDb250YWluZXIiLCJfdG9hc3QiLCJ0ZXh0QWN0aW9ucyIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJjbG9zZU1vZGFsIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwibG9nIiwidG9hc3QiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsImltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImFuYWx5c2UiLCJDb2luc01vZGFsIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJTZXQiLCJhcHBseSIsInNwZWNzIiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsIm9uQ2FuY2VsIiwiZGlzYWJsZWRQcm9wcyIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInRvdGFsIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwicHJvcHMiLCJpdGVtIiwiYmxvY2siLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImhhcyIsImRlbGV0ZSIsImFkZCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJ1cGRhdGluZyIsInNldFVwZGF0aW5nIiwiY29uZmlybSIsIl9hY3Rpdml0eSIsIl9vdmVydmlldyIsIl9jb25maXJtYXRpb25Nb2RhbCIsIl9wYXRod2F5Iiwic2V0RmV0Y2hpbmciLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsImFjdGl2ZVBhbmVsIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJzaG93UGF0aHdheSIsInNldFNob3dQYXRod2F5Iiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJyZWFkeSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidmlldyIsIm92ZXJ2aWV3IiwiTW9kdWxlT3ZlcnZpZXciLCJhY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJQYXRod2F5R2VuZXJhdGlvbiIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9hbmltYXRpb25zIiwiQ29uZmlybWF0aW9uRm9ybSIsInNldFZpZXciLCJ1c2VQYXRod2F5Q29udGV4dCIsInJlZmluZSIsIlBhdGh3YXlDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJiYWNrIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsInRvdGFsQWN0aXZpdGllcyIsInNldFRvdGFsQWN0aXZpdGllcyIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImdlbmVyYXRlIiwiX2FpRm9ybSIsIl9tYW51YWwiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY29udHJvbFR5cGUiLCJzZXRDb250cm9sVHlwZSIsImNvbnRyb2xzIiwiYWkiLCJtYW51YWwiLCJNYW51YWxGb3JtIiwiQ29udHJvbCIsInN1YnRpdGxlIiwiY2hlY2tlZCIsIm1hbnVhbGx5IiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX3JlcXVlc3RDcmVkaXRzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJoYW5kbGVDTG9zZSIsImNsb3NlQmFja2Ryb3AiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdHJpbS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvRml4ZWRBbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xldmVsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2ltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29udGV4dC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2RlY2lzaW9uLXR5cGUudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBSSxLQUFLO2NBQ25CLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRSxNQUFNQSxDQUFBO2NBQ1QsT0FBT0wsTUFBQSxDQUFBTSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDUyxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7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