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
        hash: 3311290738,
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