System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/modules/draft/store.code", "@beyond-js/kernel@0.1.14/routing", "react@18.3.1", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/alert", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form/react-select", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/base", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/modules/management/activity.code", "@aimpact/ailearn-app@0.7.0/modules/management/overview.code"], function (_export, _context2) {
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
    }, function (_pragmateUi108Icons) {
      dependency_19 = _pragmateUi108Icons;
    }, function (_pragmateUi108List) {
      dependency_20 = _pragmateUi108List;
    }, function (_aimpactAilearnApp070ModulesManagementActivityCode) {
      dependency_21 = _aimpactAilearnApp070ModulesManagementActivityCode;
    }, function (_aimpactAilearnApp070ModulesManagementOverviewCode) {
      dependency_22 = _aimpactAilearnApp070ModulesManagementOverviewCode;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/modules/draft/store.code', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['react', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/base', dependency_16], ['pragmate-ui/image', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/list', dependency_20], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_21], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_22]]);
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
        hash: 3637643340,
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
        hash: 2156284122,
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
                console.error(e);
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
        hash: 742202183,
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
        hash: 1676132849,
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
        hash: 1978012242,
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
        hash: 3770690253,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiX2ltYWdlIiwiX3JvdXRpbmciLCJDb25maXJtYXRpb25Nb2RhbCIsIm93bmVyIiwiZ2V0UHJvcGVydGllcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZGlzcGxheU5hbWUiLCJNb2RhbCIsIk93bmVySW1hZ2UiLCJvd25lckRlc2NyaXB0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIl9ob29rcyIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJtYXBPcHRpb25zIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwib3B0aW9ucyIsInVzZVN0b3JlIiwiZXZlbnQiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJ0YXJnZXQiLCJzZXQiLCJjYXRlZ29yeSIsImlzRGlzYWJsZWQiLCJzYXZlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJfY29yZSIsIl9hdWRpZW5jZSIsIl9sZXZlbCIsIkxhbmd1YWdlRmllbGRzIiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwibGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwia2V5cyIsImxvYWRBdWRpZW5jZXMiLCJlbnRyaWVzIiwiZmlsdGVyIiwibGFuZ0NvZGUiLCJpbmNsdWRlcyIsImxhbmdEYXRhIiwiRnJhZ21lbnQiLCJBdWRpZW5jZUxldmVsRmllbGQiLCJsZXZlbCIsIm1hcExldmVscyIsImF1ZGllbmNlTGV2ZWxzIiwidmFsdWVzIiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsImZvcm1UZXh0cyIsImZvcm0iLCJvbk9iamVjdGl2ZUNoYW5nZSIsImNsZWFySW1wcm92ZW1lbnRzIiwiVGV4dGFyZWEiLCJvYmplY3RpdmUiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfc3VwcG9ydGluZ1RleHQiLCJPd25lcnNoaXBGaWVsZCIsIndUZXh0cyIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2V0U2VsZWN0ZWQiLCJzdXBwb3J0aW5nVGV4dCIsInNldFN1cHBvcnRpbmdUZXh0IiwiY29udGVudCIsImRlZmF1bHRPcHRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYXR0cnMiLCJvd25lcnNoaXBzIiwiZ2V0QWRtaW5pc3RyYXRvciIsImVudGl0eSIsImdldENyZWRpdHMiLCJtb2R1bGVzIiwiYWxlcnRzIiwidW5hdmFpbGFibGUiLCJjb3VudCIsImF2YWlsYWJsZSIsIlRvdXJTdGVwIiwiYXMiLCJTdXBwb3J0aW5nVGV4dCIsInZhcmlhbnRDbGFzc01hcCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInJlc3QiLCJ2YXJpYW50Q2xhc3MiLCJjb21iaW5lZENsYXNzTmFtZSIsInRyaW0iLCJfaWNvbnMiLCJwaG90b1VybCIsIkFwcEljb24iLCJpY29uIiwiSW1hZ2UiLCJzcmMiLCJSZWFjdCIsIl9sYW5ndWFnZSIsIl9vYmplY3RpdmUiLCJfb3duZXJzaGlwIiwiX3N1Z2dlc3Rpb25zIiwiX2FjdGlvbiIsIkRyYWZ0Rm9ybSIsInRvZ2dsZVBhdGh3YXkiLCJ0b2dnbGVDb25maXJtYXRpb24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImludmFsaWRGb3JtIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsIm9uQ29maXJtZWQiLCJvblN1Ym1pdCIsImNscyIsIlBhZ2VDb250YWluZXIiLCJhY3Rpdml0aWVzIiwiaXRlbXMiLCJpc0Zvcm0iLCJEcml2ZXJUb3VyQ29udGFpbmVyIiwiRm9ybSIsIkFuaW1hdGVkQ29udGFpbmVyIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsIlByb2Nlc3NDb250YWluZXIiLCJ0ZXh0QWN0aW9ucyIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJjbG9zZU1vZGFsIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwib25Db25zdW1lIiwicmVzcG9uc2UiLCJjb25zdW1lQ29pbnMiLCJyZXNwb25zZTIiLCJpbXByb3ZlbWVudHMiLCJpcnJlbGV2YW50IiwiQUlCdXR0b24iLCJlbnN1cmUiLCJhbmFseXNlIiwiQ29pbnNNb2RhbCIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwiU2V0IiwiYXBwbHkiLCJzcGVjcyIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJvbkNhbmNlbCIsImRpc2FibGVkUHJvcHMiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJ0b3RhbCIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwiaXRlbSIsImJsb2NrIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJoYXMiLCJkZWxldGUiLCJhZGQiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwidXBkYXRpbmciLCJzZXRVcGRhdGluZyIsImNvbmZpcm0iLCJfYWN0aXZpdHkiLCJfb3ZlcnZpZXciLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsInNldEZldGNoaW5nIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJhY3RpdmVQYW5lbCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2hvd1BhdGh3YXkiLCJzZXRTaG93UGF0aHdheSIsInNob3dDb25maXJtYXRpb24iLCJzZXRTaG93Q29uZmlybWF0aW9uIiwicmVhZHkiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInZpZXciLCJvdmVydmlldyIsIk1vZHVsZU92ZXJ2aWV3IiwiYWN0aXZpdHkiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJhY3Rpdml0eVNlbGVjdGVkIiwiUGF0aHdheUdlbmVyYXRpb24iLCJhbmltYXRpb25zIiwic2xpZGVEb3duIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfYW5pbWF0aW9ucyIsIkNvbmZpcm1hdGlvbkZvcm0iLCJzZXRWaWV3IiwidXNlUGF0aHdheUNvbnRleHQiLCJyZWZpbmUiLCJQYXRod2F5Q29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInNldE5vdGVzIiwib25CYWNrIiwiSXRlbSIsImV4YW1wbGVzIiwiYmFjayIsIl90b3RhbEFjdGl2aXRpZXMiLCJBSUdlbmVyYXRpb25Gb3JtIiwibm90ZXMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJzZXRUb3RhbEFjdGl2aXRpZXMiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZXZlbnRzIiwiVG90YWxBY3Rpdml0aWVzIiwidGV4dGFyZWEiLCJnZW5lcmF0ZSIsIl9haUZvcm0iLCJfbWFudWFsIiwiRGVjaXN0aW9uVHlwZSIsImdlbmVyYXRpb24iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImNvbnRyb2xUeXBlIiwic2V0Q29udHJvbFR5cGUiLCJjb250cm9scyIsImFpIiwibWFudWFsIiwiTWFudWFsRm9ybSIsIkNvbnRyb2wiLCJzdWJ0aXRsZSIsImNoZWNrZWQiLCJtYW51YWxseSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwicGF0aHdheSIsIklucHV0IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJfZXhhbXBsZXMiLCJfY29uZmlybWF0aW9uIiwiX2RlY2lzaW9uVHlwZSIsIl9yZXF1ZXN0Q3JlZGl0cyIsInNlbGVjdGlvbiIsInJlcXVlc3QiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInZpZXdEZWZpbmVkIiwiaGFuZGxlQ0xvc2UiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3RyaW0udHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL0ZpeGVkQWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sZXZlbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29uZmlybWF0aW9uLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvYWktZm9ybS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9kZWNpc2lvbi10eXBlLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL21hbnVhbC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy90b3RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHSixNQUFBLENBQUFJLEtBQUs7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlFLE1BQU1BLENBQUE7Y0FDVCxPQUFPTCxNQUFBLENBQUFNLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkU7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNTLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJLLFNBQVVhLFFBQVFBLENBQUND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