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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJ2YWx1ZXMiLCJvd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZGlzcGxheU5hbWUiLCJNb2RhbCIsIk93bmVySW1hZ2UiLCJvd25lckRlc2NyaXB0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIl9ob29rcyIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJzZXRWYWx1ZXMiLCJtYXBPcHRpb25zIiwiYXVkaWVuY2VzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJjdXJyZW50QXVkaWVuY2UiLCJ1c2VCaW5kZXIiLCJpdGVtcyIsImV2ZW50Iiwic2V0Q3VycmVudEF1ZGllbmNlIiwidGFyZ2V0IiwiY2F0ZWdvcnkiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiX2NvcmUiLCJfYXVkaWVuY2UiLCJfbGV2ZWwiLCJMYW5ndWFnZUZpZWxkcyIsInN1cHBvcnRlZExhbmd1YWdlcyIsImxhbmd1YWdlcyIsInN1cHBvcnRlZCIsImtleXMiLCJsb2FkQXVkaWVuY2VzIiwiZW50cmllcyIsImZpbHRlciIsImxhbmdDb2RlIiwiaW5jbHVkZXMiLCJsYW5nRGF0YSIsIkZyYWdtZW50IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwibGV2ZWwiLCJtYXBMZXZlbHMiLCJhdWRpZW5jZUxldmVscyIsIl9mb3JtIiwiT2JqZWN0aXZlRmllbGQiLCJmb3JtVGV4dHMiLCJmb3JtIiwib25PYmplY3RpdmVDaGFuZ2UiLCJjbGVhckltcHJvdmVtZW50cyIsIlRleHRhcmVhIiwib2JqZWN0aXZlIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiX3N1cHBvcnRpbmdUZXh0IiwiT3duZXJzaGlwRmllbGQiLCJ3VGV4dHMiLCJvYmplY3RpdmVUb3VyIiwidG91ciIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwib3duZXJzaGlwcyIsImdldEFkbWluaXN0cmF0b3IiLCJlbnRpdHkiLCJnZXRDcmVkaXRzIiwibW9kdWxlcyIsImFsZXJ0cyIsInVuYXZhaWxhYmxlIiwiY291bnQiLCJhdmFpbGFibGUiLCJnZXRQcm9wZXJ0aWVzIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsIl9vd25lcnNoaXAiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiaW52YWxpZEZvcm0iLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsIlBhZ2VDb250YWluZXIiLCJhY3Rpdml0aWVzIiwiaXNGb3JtIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsIkZvcm0iLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsImltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImFuYWx5c2UiLCJDb2luc01vZGFsIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsImJsb2NrIiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsIlNldCIsImFwcGx5Iiwic3BlY3MiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwib25DYW5jZWwiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJ0b3RhbCIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwiaXRlbSIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiaGFzIiwiZGVsZXRlIiwiYWRkIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJjb25maXJtIiwiX2FjdGl2aXR5IiwiX292ZXJ2aWV3IiwiX2NvbmZpcm1hdGlvbk1vZGFsIiwiX3BhdGh3YXkiLCJzZXRGZXRjaGluZyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiYWN0aXZlUGFuZWwiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInNob3dQYXRod2F5Iiwic2V0U2hvd1BhdGh3YXkiLCJzaG93Q29uZmlybWF0aW9uIiwic2V0U2hvd0NvbmZpcm1hdGlvbiIsInByb3BlcnRpZXMiLCJyZWFkeSIsInNldCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidmlldyIsIm92ZXJ2aWV3IiwiTW9kdWxlT3ZlcnZpZXciLCJhY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImFjdGl2aXR5U2VsZWN0ZWQiLCJQYXRod2F5R2VuZXJhdGlvbiIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9hbmltYXRpb25zIiwiQ29uZmlybWF0aW9uRm9ybSIsInNldFZpZXciLCJ1c2VQYXRod2F5Q29udGV4dCIsInJlZmluZSIsIlBhdGh3YXlDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJiYWNrIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsInRvdGFsQWN0aXZpdGllcyIsInNldFRvdGFsQWN0aXZpdGllcyIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImdlbmVyYXRlIiwiX2FpRm9ybSIsIl9tYW51YWwiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY29udHJvbFR5cGUiLCJzZXRDb250cm9sVHlwZSIsImNvbnRyb2xzIiwiYWkiLCJtYW51YWwiLCJNYW51YWxGb3JtIiwiQ29udHJvbCIsInN1YnRpdGxlIiwiY2hlY2tlZCIsIm1hbnVhbGx5IiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJwYXRod2F5IiwiSW5wdXQiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX3JlcXVlc3RDcmVkaXRzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJoYW5kbGVDTG9zZSIsImNsb3NlQmFja2Ryb3AiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdHJpbS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvRml4ZWRBbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hbGVydC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sZXZlbC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29uZmlybWF0aW9uLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvYWktZm9ybS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9kZWNpc2lvbi10eXBlLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL21hbnVhbC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy90b3RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQUksS0FBSztjQUNuQixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUUsTUFBTUEsQ0FBQTtjQUNULE9BQU9MLE1BQUEsQ0FBQU0sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUosS0FBTSxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RTtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FB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