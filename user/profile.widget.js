System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.3.0/wrapper", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/ailearn-app@0.1.13/components/ui", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.13/model/gclassroom", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_5 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk130Session) {
      dependency_8 = _aimpactChatSdk130Session;
    }, function (_beyondJsReactive120Model) {
      dependency_9 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Core) {
      dependency_10 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_11 = _aimpactChatSdk130Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_12 = _beyondJsKernel019Texts;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_14 = _pragmateUi100Beta6Alert;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_aimpactAilearnApp0113Config) {
      dependency_16 = _aimpactAilearnApp0113Config;
    }, function (_pragmateUi100Beta6Components) {
      dependency_17 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Form) {
      dependency_18 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp0113ModelGclassroom) {
      dependency_19 = _aimpactAilearnApp0113ModelGclassroom;
    }, function (_pragmateUi100Beta6Image) {
      dependency_20 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_21 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_22 = _pragmateUi100Beta6Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/form', dependency_18], ['@aimpact/ailearn-app/model/gclassroom', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/icons', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/user/profile.widget');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 2877862235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useProfileContext = exports.ProfileContext = void 0;
          var _react = require("react");
          const ProfileContext = exports.ProfileContext = _react.default.createContext({});
          const useProfileContext = () => _react.default.useContext(ProfileContext);
          exports.useProfileContext = useProfileContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3829803460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              globalThis.setTimeout(() => {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.clearModel();
                _mainLayout.LayoutBroker.backLink = () => _routing.routing.back();
              }, 100);
              this.#store.load();
            }
            hide() {
              globalThis.setTimeout(() => {
                _mainLayout.LayoutBroker.overlay = false;
                _mainLayout.LayoutBroker.clearModel();
                _mainLayout.LayoutBroker.backLink = undefined;
              }, 100);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2391793024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _render = require("@beyond-js/widgets/render");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            properties = ['language', 'accessibility', 'audioSpeed'];
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              const audioSpeed = [null, undefined, 'undefined'].includes(localStorage.getItem('aimpact.audio.speed')) ? 1 : localStorage.getItem('aimpact.audio.speed');
              const accessibilityMode = ['dyslexia', 'normal'].includes(localStorage.getItem('aimpact.chat.accessibility')) ? localStorage.getItem('aimpact.chat.accessibility') : 'normal';
              this.reactiveProps(['language', 'accessibility', 'audioSpeed']);
              super.ready = true;
              this.language = _core.languages.current;
              this.audioSpeed = audioSpeed;
              this.accessibility = accessibilityMode;
              this.initialValues({
                accessibility: accessibilityMode,
                language: _core.languages.current,
                audioSpeed: this.audioSpeed
              });
              globalThis.store = this;
            }
            save = () => {
              this.fetching = true;
              _core.languages.current = this.language;
              const container = document.querySelector('html');
              _wrapper.AppWrapper.setSettings({
                accessibility: this.accessibility,
                audioSpeed: this.audioSpeed,
                language: this.language
              });
              _wrapper.AppWrapper.accessibility = this.accessibility;
              _wrapper.AppWrapper.audioSpeed = this.audioSpeed;
              _wrapper.AppWrapper.language = this.language;
              container.setAttribute('data-accessibility-mode', this.accessibility);
              localStorage.setItem('aimpact.accessibility.mode', this.accessibility);
              localStorage.setItem('aimpact.audio.speed', this.audioSpeed);
              _render.widgets.attributes.add('data-accessibility-mode', this.accessibility);
              window.setTimeout(() => {
                //the layoutBroker logic is only for a while until we have a better solution
                _core.languages.current = this.language;
                _mainLayout.LayoutBroker.overlay = true;
                this.initialValues({
                  language: _core.languages.current
                });
                this.fetching = false;
              }, 1000);
              return true;
            };
            load() {
              // sessionWrapper.user.load();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/audio
      *****************************/

      ims.set('./views/audio', {
        hash: 329133774,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioSettings = AudioSettings;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function AudioSettings() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [value, setValue] = _react.default.useState(1);
            (0, _hooks.useBinder)([store], () => {
              setValue(store.audioSpeed);
            });
            const onInput = event => {
              store.audioSpeed = event.currentTarget.value;
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, texts.audio.title), _react.default.createElement("section", {
              className: "audio__container field__container"
            }, _react.default.createElement("h5", {
              htmlFor: "audioRange"
            }, texts.audio.speed, _react.default.createElement("input", {
              value: store.audioSpeed,
              name: "audioRange",
              onInput: onInput,
              type: "range",
              max: "2",
              min: "0.25",
              step: "0.25"
            })), _react.default.createElement("div", {
              className: "speed__quantity"
            }, _react.default.createElement("span", null, "0.25"), _react.default.createElement("span", null, "0.50"), _react.default.createElement("span", null, "0.75"), _react.default.createElement("span", null, "1"), _react.default.createElement("span", null, "1.25"), _react.default.createElement("span", null, "1.50"), _react.default.createElement("span", null, "1.75"), _react.default.createElement("span", null, "2"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/coins
      *****************************/

      ims.set('./views/coins', {
        hash: 1886924880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCoins = UserCoins;
          var _react = require("react");
          var _context = require("../context");
          var _alert = require("pragmate-ui/alert");
          function UserCoins() {
            const {
              store,
              user
            } = (0, _context.useProfileContext)();
            const {
              texts
            } = store;
            if (!user.coins) return null;
            return _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "profile-coins__section"
            }, _react.default.createElement("h3", null, texts.coins.label), _react.default.createElement("div", {
              className: "coins-detail__container"
            }, _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.assignments), _react.default.createElement("span", null, user.coins.assignments.count)), _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.modules), _react.default.createElement("span", null, user.coins.modules.count))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3758248348,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _config = require("@aimpact/ailearn-app/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          var _audio = require("./audio");
          var _coins = require("./coins");
          var _languageSelector = require("./language-selector");
          var _modeSelection = require("./mode-selection");
          var _ImagePicker = require("./profile-image/ImagePicker");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [{
              fetching
            }, setStore] = _react.default.useState({
              isUnpublished: store.isUnpublished,
              fetching: store.fetching
            });
            const [accessibility, setAccessibilty] = _react.default.useState(store.accessibility);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setStore({
                isUnpublished: store.isUnpublished,
                fetching: store.fetching
              });
              setAccessibilty(store.dyslexia);
            });
            if (!ready) return null;
            const userProps = _session.sessionWrapper.user.getProperties();
            const {
              displayName,
              email
            } = userProps;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ProfileContext.Provider, {
              value: {
                user: userProps,
                store,
                texts,
                fetching
              }
            }, _react.default.createElement(_ui.PageContainer, {
              className: "profile-container"
            }, _react.default.createElement("main", null, _react.default.createElement("header", {
              className: "profile-header"
            }, _react.default.createElement(_ImagePicker.default, {
              userProps: userProps
            }), _react.default.createElement("h4", {
              className: "h3"
            }, displayName)), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement(_coins.UserCoins, null), _react.default.createElement("div", {
              className: "profile__item"
            }, _react.default.createElement("h5", null, texts.email), _react.default.createElement("span", null, email)), _react.default.createElement(_languageSelector.LanguageSelector, null), _react.default.createElement(_modeSelection.ModeSelection, null), _react.default.createElement(_audio.AudioSettings, null), store.isUnpublished && _react.default.createElement(_components.Button, {
              variant: "primary",
              fetching: fetching,
              onClick: store.save
            }, texts.save)), _react.default.createElement("footer", {
              className: "app-version"
            }, texts.version, ": ", _config.default.version))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/language-selector/index
      ***********************************************/

      ims.set('./views/language-selector/index', {
        hash: 3901126527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageSelector = LanguageSelector;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function LanguageSelector() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [language, setLanguage] = _react.default.useState(store.language);
            (0, _hooks.useBinder)([store], () => setLanguage(store.language));
            const handleChange = event => {
              store.language = event.target.value;
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.language), _react.default.createElement("section", {
              className: "language-selector  field__container"
            }, _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'en',
              name: "language",
              value: "en",
              label: "English"
            }), _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'es',
              name: "language",
              value: "es",
              label: "Espa\u00F1ol"
            })));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/mode-selection
      **************************************/

      ims.set('./views/mode-selection', {
        hash: 253434066,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModeSelection = ModeSelection;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          function ModeSelection() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [checked, setChecked] = _react.default.useState(store.accessibility === 'dyslexia');
            (0, _hooks.useBinder)([store], () => setChecked(store.accessibility === 'dyslexia'));
            const onChange = async event => {
              const value = store.accessibility === 'dyslexia' ? 'normal' : 'dyslexia';
              await store.set({
                accessibility: value
              });
              // setChecked(value === 'd	yslexia');
              event.preventDefault();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: " field__container"
            }, _react.default.createElement("h5", null, texts.textMode), _react.default.createElement("section", {
              className: "language-selector"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: onChange,
              checked: checked,
              name: "check",
              label: texts.dyslexia
            }))));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/permissions/index
      *****************************************/

      ims.set('./views/permissions/index', {
        hash: 805220452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Permissions = Permissions;
          var _react = require("react");
          var _context = require("../../context");
          var _item = require("./item");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          function Permissions() {
            const {
              texts
            } = (0, _context.useProfileContext)();
            const connectionValues = [{
              src: '/assets/gclassroom.png',
              alt: 'Google classroom',
              title: texts.permissions.gclassroom.title,
              check: _gclassroom.gclassroom.authorized,
              modal: true
            }];
            return _react.default.createElement("div", {
              className: "permissions__container"
            }, _react.default.createElement("label", null, texts.permissions.title), _react.default.createElement("div", {
              className: "permissions-items__container"
            }, connectionValues.map((connectionValue, index) => _react.default.createElement(_item.PermissionItem, {
              key: index,
              connectionValue: connectionValue,
              texts: texts
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/permissions/interfaces
      **********************************************/

      ims.set('./views/permissions/interfaces', {
        hash: 1464281530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/permissions/item
      ****************************************/

      ims.set('./views/permissions/item', {
        hash: 4207650292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionItem = void 0;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          const PermissionItem = ({
            connectionValue,
            texts
          }) => {
            const [checkedItem, setCheckedItem] = _react.default.useState(connectionValue.check);
            const [show, setShow] = _react.default.useState(false);
            const handleVincularClick = () => {
              setShow(!show);
            };
            const handleModal = () => {
              setShow(!show);
            };
            const addButton = () => {
              return _react.default.createElement("div", {
                className: "permission-menu__item"
              }, _react.default.createElement(_components.Button, {
                icon: "add",
                variant: "primary",
                onClick: handleVincularClick,
                label: connectionValue.title
              }));
            };
            const addLabel = () => {
              const src = connectionValue.src ? connectionValue.src : connectionValue.icon;
              const alt = connectionValue.src ? connectionValue.alt : connectionValue.title;
              return _react.default.createElement("div", {
                className: "permission-menu__item admit"
              }, _react.default.createElement(_image.Image, {
                src: src,
                alt: alt
              }), _react.default.createElement("span", null, connectionValue.title));
            };
            const Control = !checkedItem ? addButton : addLabel;
            return _react.default.createElement("div", {
              className: "permission-item"
            }, _react.default.createElement(Control, null), show && connectionValue?.modal && _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "beauty-modal",
              onClose: handleModal
            }, _react.default.createElement("ailearn-gclassroom-permissions", null)));
          };
          exports.PermissionItem = PermissionItem;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/profile-image/ImagePicker
      *************************************************/

      ims.set('./views/profile-image/ImagePicker', {
        hash: 1499835956,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ImagePicker;
          var _react = require("react");
          var _ = require("./");
          function ImagePicker({
            userProps
          }) {
            const [img, setImg] = _react.default.useState(userProps.photoURL);
            return _react.default.createElement("section", {
              className: "user-image-wrapper"
            }, img && _react.default.createElement(_.UserImage, {
              src: img ?? '',
              alt: userProps.displayName
            }));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/profile-image/index
      *******************************************/

      ims.set('./views/profile-image/index', {
        hash: 2599470037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserImage = UserImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          function UserImage({
            src,
            alt
          }) {
            return _react.default.createElement(_image.Image, {
              className: "user-image",
              src: src,
              alt: alt
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiY2xlYXJNb2RlbCIsImJhY2tMaW5rIiwicm91dGluZyIsImJhY2siLCJsb2FkIiwiaGlkZSIsInVuZGVmaW5lZCIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2Vzc2liaWxpdHlNb2RlIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImFjY2Vzc2liaWxpdHkiLCJpbml0aWFsVmFsdWVzIiwic2F2ZSIsImZldGNoaW5nIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93IiwiX2NvbnRleHQiLCJfaG9va3MiLCJBdWRpb1NldHRpbmdzIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiX2FsZXJ0IiwiVXNlckNvaW5zIiwidXNlciIsImNvaW5zIiwiQWxlcnQiLCJsYWJlbCIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiX3VpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2NvbXBvbmVudHMiLCJfYXVkaW8iLCJfY29pbnMiLCJfbGFuZ3VhZ2VTZWxlY3RvciIsIl9tb2RlU2VsZWN0aW9uIiwiX0ltYWdlUGlja2VyIiwic2V0UmVhZHkiLCJzZXRTdG9yZSIsImlzVW5wdWJsaXNoZWQiLCJzZXRBY2Nlc3NpYmlsdHkiLCJkeXNsZXhpYSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwiZ2V0UHJvcGVydGllcyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwidmVyc2lvbiIsIl9mb3JtIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJSYWRpbyIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJzZXQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRNb2RlIiwiQ2hlY2tib3giLCJfaXRlbSIsIl9nY2xhc3Nyb29tIiwiUGVybWlzc2lvbnMiLCJjb25uZWN0aW9uVmFsdWVzIiwic3JjIiwiYWx0IiwicGVybWlzc2lvbnMiLCJnY2xhc3Nyb29tIiwiY2hlY2siLCJhdXRob3JpemVkIiwibW9kYWwiLCJtYXAiLCJjb25uZWN0aW9uVmFsdWUiLCJpbmRleCIsIlBlcm1pc3Npb25JdGVtIiwia2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW1hZ2UiLCJfbW9kYWwiLCJjaGVja2VkSXRlbSIsInNldENoZWNrZWRJdGVtIiwic2V0U2hvdyIsImhhbmRsZVZpbmN1bGFyQ2xpY2siLCJoYW5kbGVNb2RhbCIsImFkZEJ1dHRvbiIsImljb24iLCJhZGRMYWJlbCIsIkltYWdlIiwiQ29udHJvbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2Utc2VsZWN0b3IvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVVPLE1BQU1DLGNBQWMsR0FBQUMsT0FBQSxDQUFB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