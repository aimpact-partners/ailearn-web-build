System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.1.6-dev.33/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.2.0/session", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.2.0/wrapper", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/ailearn-app@0.1.6-dev.33/components/ui", "@aimpact/ailearn-app@0.1.6-dev.33/config", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.6-dev.33/model/gclassroom", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/icons"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev33MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp016Dev33MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk120Session) {
      dependency_8 = _aimpactChatSdk120Session;
    }, function (_beyondJsReactive120Model) {
      dependency_9 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Core) {
      dependency_10 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk120Wrapper) {
      dependency_11 = _aimpactChatSdk120Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_12 = _beyondJsKernel019Texts;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_14 = _pragmateUi100Beta6Alert;
    }, function (_aimpactAilearnApp016Dev33ComponentsUi) {
      dependency_15 = _aimpactAilearnApp016Dev33ComponentsUi;
    }, function (_aimpactAilearnApp016Dev33Config) {
      dependency_16 = _aimpactAilearnApp016Dev33Config;
    }, function (_pragmateUi100Beta6Components) {
      dependency_17 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Form) {
      dependency_18 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp016Dev33ModelGclassroom) {
      dependency_19 = _aimpactAilearnApp016Dev33ModelGclassroom;
    }, function (_pragmateUi100Beta6Image) {
      dependency_20 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_21 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_22 = _pragmateUi100Beta6Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.2.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.33"], ["@aimpact/ailearn-app", "0.1.6-dev.33"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.33/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/form', dependency_18], ['@aimpact/ailearn-app/model/gclassroom', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/icons', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.33/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.33/user/profile.widget');
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
        hash: 3172360902,
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
        hash: 3592966938,
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
              isUnpublished,
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
        hash: 3652541598,
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
            const onChange = event => {
              const value = store.accessibility === 'dyslexia' ? 'normal' : 'dyslexia';
              store.accessibility = value;
              setChecked(value === 'dyslexia');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiY2xlYXJNb2RlbCIsImJhY2tMaW5rIiwicm91dGluZyIsImJhY2siLCJsb2FkIiwiX21vZGVsIiwiX2NvcmUiLCJfcmVuZGVyIiwiX3dyYXBwZXIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwicHJvcGVydGllcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiYWNjZXNzaWJpbGl0eSIsImluaXRpYWxWYWx1ZXMiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25JbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJuYW1lIiwidHlwZSIsIm1heCIsIm1pbiIsInN0ZXAiLCJfYWxlcnQiLCJVc2VyQ29pbnMiLCJ1c2VyIiwiY29pbnMiLCJBbGVydCIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJfdWkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfY29tcG9uZW50cyIsIl9hdWRpbyIsIl9jb2lucyIsIl9sYW5ndWFnZVNlbGVjdG9yIiwiX21vZGVTZWxlY3Rpb24iLCJfSW1hZ2VQaWNrZXIiLCJzZXRSZWFkeSIsImlzVW5wdWJsaXNoZWQiLCJzZXRTdG9yZSIsInNldEFjY2Vzc2liaWx0eSIsImR5c2xleGlhIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkxhbmd1YWdlU2VsZWN0b3IiLCJNb2RlU2VsZWN0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ2ZXJzaW9uIiwiX2Zvcm0iLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIlJhZGlvIiwib25DaGFuZ2UiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInByZXZlbnREZWZhdWx0IiwidGV4dE1vZGUiLCJDaGVja2JveCIsIl9pdGVtIiwiX2djbGFzc3Jvb20iLCJQZXJtaXNzaW9ucyIsImNvbm5lY3Rpb25WYWx1ZXMiLCJzcmMiLCJhbHQiLCJwZXJtaXNzaW9ucyIsImdjbGFzc3Jvb20iLCJjaGVjayIsImF1dGhvcml6ZWQiLCJtb2RhbCIsIm1hcCIsImNvbm5lY3Rpb25WYWx1ZSIsImluZGV4IiwiUGVybWlzc2lvbkl0ZW0iLCJrZXkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbWFnZSIsIl9tb2RhbCIsImNoZWNrZWRJdGVtIiwic2V0Q2hlY2tlZEl0ZW0iLCJzZXRTaG93IiwiaGFuZGxlVmluY3VsYXJDbGljayIsImhhbmRsZU1vZGFsIiwiYWRkQnV0dG9uIiwiaWNvbiIsImFkZExhYmVsIiwiSW1hZ2UiLCJDb250cm9sIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwib25DbG9zZSIsIl8iLCJJbWFnZVBpY2tlciIsImltZyIsInNldEltZyIsInBob3RvVVJMIiwiVXNlckltYWdlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hdWRpby50c3giLCIvdHMvdmlld3MvY29pbnMudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kZS1zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBVU8sTUFBTUMsY0FBYyxHQUFBQyxPQUFBLENBQUFELGNBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFxQixDQUFDO1VBQ2pFLE1BQU1DLGlCQUFpQixHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLGNBQWMsQ0FBQztVQUFDQyxPQUFBLENBQUFHLGlCQUFBLEdBQUFBLGlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1h4RSxJQUFBRSxLQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxXQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBVyxRQUFBLEdBQUFYLE9BQUE7VUFDTztVQUFVLE1BQ1hZLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTixNQUFBLENBQUFRLFlBQVksRUFBRTtjQUVoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9SLE1BQUEsQ0FBQVMsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSEMsVUFBVSxDQUFDQyxVQUFVLENBQUMsTUFBSztnQkFDMUJYLFdBQUEsQ0FBQVksWUFBWSxDQUFDQyxPQUFPLEdBQUcsSUFBSTtnQkFDM0JiLFdBQUEsQ0FBQVksWUFBWSxDQUFDRSxVQUFVLEVBQUU7Z0JBQ3pCZCxXQUFBLENBQUFZLFlBQVksQ0FBQ0csUUFBUSxHQUFHLE1BQU1kLFFBQUEsQ0FBQWUsT0FBTyxDQUFDQyxJQUFJLEVBQUU7Y0FDN0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQztjQUVQLElBQUksQ0FBQyxDQUFBYixLQUFNLENBQUNjLElBQUksRUFBRTtZQUNuQjs7VUFDQTFCLE9BQUEsQ0FBQVUsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRCxJQUFBaUIsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixLQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQStCLE9BQUEsR0FBQS9CLE9BQUE7VUFDQSxJQUFBZ0MsUUFBQSxHQUFBaEMsT0FBQTtVQUNBLElBQUFVLFdBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFpQyxNQUFBLEdBQUFqQyxPQUFBO1VBQ0EsSUFBQWtDLGVBQUEsR0FBQWxDLE9BQUE7VUFFTSxNQUFPZ0IsWUFBYSxTQUFRYSxNQUFBLENBQUFNLGFBQStCO1lBR2hFQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQztZQUN4RCxDQUFBQyxLQUFNLEdBQStCLElBQUlKLE1BQUEsQ0FBQUssWUFBWSxDQUFDSixlQUFBLENBQUFLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7WUFDQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDSyxLQUFLO1lBQ3hDO1lBQ0FDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLE1BQU1DLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDQyxRQUFRLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FDcEcsQ0FBQyxHQUNERCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztjQUU5QyxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQ0gsUUFBUSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEdBQzFHRCxZQUFZLENBQUNDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxHQUNsRCxRQUFRO2NBRVgsSUFBSSxDQUFDRSxhQUFhLENBQUMsQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO2NBQy9ELEtBQUssQ0FBQ1YsS0FBSyxHQUFHLElBQUk7Y0FDbEIsSUFBSSxDQUFDVyxRQUFRLEdBQUd2QixLQUFBLENBQUF3QixTQUFTLENBQUNDLE9BQU87Y0FDakMsSUFBSSxDQUFDVCxVQUFVLEdBQUdBLFVBQVU7Y0FDNUIsSUFBSSxDQUFDVSxhQUFhLEdBQUdMLGlCQUFpQjtjQUN0QyxJQUFJLENBQUNNLGFBQWEsQ0FBQztnQkFDbEJELGFBQWEsRUFBRUwsaUJBQWlCO2dCQUNoQ0UsUUFBUSxFQUFFdkIsS0FBQSxDQUFBd0IsU0FBUyxDQUFDQyxPQUFPO2dCQUMzQlQsVUFBVSxFQUFFLElBQUksQ0FBQ0E7ZUFDakIsQ0FBQztjQUVGMUIsVUFBVSxDQUFDTixLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBNEMsSUFBSSxHQUFHQSxDQUFBLEtBQUs7Y0FDWCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2NBQ3BCN0IsS0FBQSxDQUFBd0IsU0FBUyxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDRixRQUFRO2NBRWpDLE1BQU1PLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBRWhEOUIsUUFBQSxDQUFBK0IsVUFBVSxDQUFDQyxXQUFXLENBQUM7Z0JBQ3RCUixhQUFhLEVBQUUsSUFBSSxDQUFDQSxhQUFhO2dCQUNqQ1YsVUFBVSxFQUFFLElBQUksQ0FBQ0EsVUFBVTtnQkFDM0JPLFFBQVEsRUFBRSxJQUFJLENBQUNBO2VBQ2YsQ0FBQztjQUNGckIsUUFBQSxDQUFBK0IsVUFBVSxDQUFDUCxhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhO2NBQzdDeEIsUUFBQSxDQUFBK0IsVUFBVSxDQUFDakIsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVTtjQUN2Q2QsUUFBQSxDQUFBK0IsVUFBVSxDQUFDVixRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRO2NBQ25DTyxTQUFTLENBQUNLLFlBQVksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUNULGFBQWEsQ0FBQztjQUNyRVAsWUFBWSxDQUFDaUIsT0FBTyxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQ1YsYUFBYSxDQUFDO2NBQ3RFUCxZQUFZLENBQUNpQixPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDcEIsVUFBVSxDQUFDO2NBQzVEZixPQUFBLENBQUFvQyxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQ2IsYUFBYSxDQUFDO2NBRXJFYyxNQUFNLENBQUNqRCxVQUFVLENBQUMsTUFBSztnQkFDdEI7Z0JBQ0FTLEtBQUEsQ0FBQXdCLFNBQVMsQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0YsUUFBUTtnQkFDakMzQyxXQUFBLENBQUFZLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7Z0JBRTNCLElBQUksQ0FBQ2tDLGFBQWEsQ0FBQztrQkFBRUosUUFBUSxFQUFFdkIsS0FBQSxDQUFBd0IsU0FBUyxDQUFDQztnQkFBTyxDQUFFLENBQUM7Z0JBQ25ELElBQUksQ0FBQ0ksUUFBUSxHQUFHLEtBQUs7Y0FDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNSLE9BQU8sSUFBSTtZQUNaLENBQUM7WUFFRC9CLElBQUlBLENBQUE7Y0FDSDtZQUFBOztVQUVEMUIsT0FBQSxDQUFBYyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUVELElBQUFqQixNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBdUUsUUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxNQUFBLEdBQUF4RSxPQUFBO1VBRU0sU0FBVXlFLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFcEMsS0FBSztjQUFFdkI7WUFBSyxDQUFFLEdBQUcsSUFBQXlELFFBQUEsQ0FBQWxFLGlCQUFpQixHQUFFO1lBQzVDLE1BQU0sQ0FBQ29DLEtBQUssRUFBRWlDLFFBQVEsQ0FBQyxHQUFHM0UsTUFBQSxDQUFBSSxPQUFLLENBQUN3RSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUFILE1BQUEsQ0FBQUksU0FBUyxFQUFDLENBQUM5RCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCNEQsUUFBUSxDQUFDNUQsS0FBSyxDQUFDZ0MsVUFBVSxDQUFDO1lBQzNCLENBQUMsQ0FBQztZQUVGLE1BQU0rQixPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QmhFLEtBQUssQ0FBQ2dDLFVBQVUsR0FBR2dDLEtBQUssQ0FBQ0MsYUFBYSxDQUFDdEMsS0FBSztZQUM3QyxDQUFDO1lBRUQsT0FDQzFDLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxDQUFBakYsTUFBQSxDQUFBSSxPQUFBLENBQUE4RSxRQUFBLFFBQ0NsRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsZ0JBQVEzQyxLQUFLLENBQUM2QyxLQUFLLENBQUNDLEtBQUssQ0FBUyxFQUNsQ3BGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBbUMsR0FDckRyRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUE7Y0FBSUssT0FBTyxFQUFDO1lBQVksR0FDdEJoRCxLQUFLLENBQUM2QyxLQUFLLENBQUNJLEtBQUssRUFFbEJ2RixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUE7Y0FDQ3ZDLEtBQUssRUFBRTNCLEtBQUssQ0FBQ2dDLFVBQVU7Y0FDdkJ5QyxJQUFJLEVBQUMsWUFBWTtjQUNqQlYsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCVyxJQUFJLEVBQUMsT0FBTztjQUNaQyxHQUFHLEVBQUMsR0FBRztjQUNQQyxHQUFHLEVBQUMsTUFBTTtjQUNWQyxJQUFJLEVBQUM7WUFBTSxFQUNWLENBQ0UsRUFDTDVGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsR0FDL0JyRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsc0JBQWlCLEVBQ2pCakYsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLHNCQUFpQixFQUNqQmpGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxzQkFBaUIsRUFDakJqRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsbUJBQWMsRUFDZGpGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxzQkFBaUIsRUFDakJqRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsc0JBQWlCLEVBQ2pCakYsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLHNCQUFpQixFQUNqQmpGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxtQkFBYyxDQUNULENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBakYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVFLFFBQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBNEYsTUFBQSxHQUFBNUYsT0FBQTtVQUVNLFNBQVU2RixTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FBRS9FLEtBQUs7Y0FBRWdGO1lBQUksQ0FBRSxHQUFHLElBQUF2QixRQUFBLENBQUFsRSxpQkFBaUIsR0FBRTtZQUMzQyxNQUFNO2NBQUVnQztZQUFLLENBQUUsR0FBR3ZCLEtBQUs7WUFDdkIsSUFBSSxDQUFDZ0YsSUFBSSxDQUFDQyxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQzVCLE9BQ0NoRyxNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQ1ksTUFBQSxDQUFBSSxLQUFLO2NBQUNSLElBQUksRUFBQyxNQUFNO2NBQUNKLFNBQVMsRUFBQztZQUF3QixHQUNwRHJGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxhQUFLM0MsS0FBSyxDQUFDMEQsS0FBSyxDQUFDRSxLQUFLLENBQU0sRUFFNUJsRyxNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDckYsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFxQixHQUNuQ3JGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxlQUFPM0MsS0FBSyxDQUFDMEQsS0FBSyxDQUFDRyxXQUFXLENBQVEsRUFDdENuRyxNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsZUFBT2MsSUFBSSxDQUFDQyxLQUFLLENBQUNHLFdBQVcsQ0FBQ0MsS0FBSyxDQUFRLENBQ3RDLEVBQ05wRyxNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQXFCLEdBQ25DckYsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLGVBQU8zQyxLQUFLLENBQUMwRCxLQUFLLENBQUNLLE9BQU8sQ0FBUSxFQUNsQ3JHLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxlQUFPYyxJQUFJLENBQUNDLEtBQUssQ0FBQ0ssT0FBTyxDQUFDRCxLQUFLLENBQVEsQ0FDbEMsQ0FDRCxDQUNDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFFLEdBQUEsR0FBQXJHLE9BQUE7VUFDQSxJQUFBc0csT0FBQSxHQUFBdEcsT0FBQTtVQUNBLElBQUF1RyxRQUFBLEdBQUF2RyxPQUFBO1VBQ0EsSUFBQXdFLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBd0csV0FBQSxHQUFBeEcsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1RSxRQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXlHLE1BQUEsR0FBQXpHLE9BQUE7VUFDQSxJQUFBMEcsTUFBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUEyRyxpQkFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUE0RyxjQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTZHLFlBQUEsR0FBQTdHLE9BQUE7VUFDTztVQUFVLFNBQ1JrQixJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUN0QixNQUFNLENBQUM0QixLQUFLLEVBQUVvRSxRQUFRLENBQUMsR0FBRy9HLE1BQUEsQ0FBQUksT0FBSyxDQUFDd0UsUUFBUSxDQUFDN0QsS0FBSyxDQUFDNEIsS0FBSyxDQUFDO1lBRXJELE1BQU0sQ0FBQztjQUFFcUUsYUFBYTtjQUFFcEQ7WUFBUSxDQUFFLEVBQUVxRCxRQUFRLENBQUMsR0FBR2pILE1BQUEsQ0FBQUksT0FBSyxDQUFDd0UsUUFBUSxDQUFDO2NBQzlEb0MsYUFBYSxFQUFFakcsS0FBSyxDQUFDaUcsYUFBYTtjQUNsQ3BELFFBQVEsRUFBRTdDLEtBQUssQ0FBQzZDO2FBQ2hCLENBQUM7WUFDRixNQUFNLENBQUNILGFBQWEsRUFBRXlELGVBQWUsQ0FBQyxHQUFHbEgsTUFBQSxDQUFBSSxPQUFLLENBQUN3RSxRQUFRLENBQUM3RCxLQUFLLENBQUMwQyxhQUFhLENBQUM7WUFDNUUsTUFBTTtjQUFFbkI7WUFBSyxDQUFFLEdBQUd2QixLQUFLO1lBQ3ZCLElBQUEwRCxNQUFBLENBQUFJLFNBQVMsRUFBQyxDQUFDOUQsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QmdHLFFBQVEsQ0FBQ2hHLEtBQUssQ0FBQzRCLEtBQUssQ0FBQztjQUVyQnNFLFFBQVEsQ0FBQztnQkFBRUQsYUFBYSxFQUFFakcsS0FBSyxDQUFDaUcsYUFBYTtnQkFBRXBELFFBQVEsRUFBRTdDLEtBQUssQ0FBQzZDO2NBQVEsQ0FBRSxDQUFDO2NBQzFFc0QsZUFBZSxDQUFDbkcsS0FBSyxDQUFDb0csUUFBUSxDQUFDO1lBQ2hDLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ3hFLEtBQUssRUFBRSxPQUFPLElBQUk7WUFDdkIsTUFBTXlFLFNBQVMsR0FBR1osUUFBQSxDQUFBYSxjQUFjLENBQUN0QixJQUFJLENBQUN1QixhQUFhLEVBQUU7WUFFckQsTUFBTTtjQUFFQyxXQUFXO2NBQUVDO1lBQUssQ0FBRSxHQUFHSixTQUFTO1lBRXhDLE9BQ0NwSCxNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQWpGLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEUsUUFBQSxRQUNDbEYsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLENBQUNULFFBQUEsQ0FBQXRFLGNBQWMsQ0FBQ3VILFFBQVE7Y0FBQy9FLEtBQUssRUFBRTtnQkFBRXFELElBQUksRUFBRXFCLFNBQVM7Z0JBQUVyRyxLQUFLO2dCQUFFdUIsS0FBSztnQkFBRXNCO2NBQVE7WUFBRSxHQUMxRTVELE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxDQUFDcUIsR0FBQSxDQUFBb0IsYUFBYTtjQUFDckMsU0FBUyxFQUFDO1lBQW1CLEdBQzNDckYsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLGVBQ0NqRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUE7Y0FBUUksU0FBUyxFQUFDO1lBQWdCLEdBQ2pDckYsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLENBQUM2QixZQUFBLENBQUExRyxPQUFXO2NBQUNnSCxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNyQ3BILE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQTtjQUFJSSxTQUFTLEVBQUM7WUFBSSxHQUFFa0MsV0FBVyxDQUFNLENBQzdCLEVBQ1R2SCxNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWlCLEVBQUcsRUFFbkNyRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQzBCLE1BQUEsQ0FBQWIsU0FBUyxPQUFHLEVBRWI5RixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWUsR0FDN0JyRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsYUFBSzNDLEtBQUssQ0FBQ2tGLEtBQUssQ0FBTSxFQUN0QnhILE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxlQUFPdUMsS0FBSyxDQUFRLENBQ2YsRUFDTnhILE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxDQUFDMkIsaUJBQUEsQ0FBQWUsZ0JBQWdCLE9BQUcsRUFDcEIzSCxNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQzRCLGNBQUEsQ0FBQWUsYUFBYSxPQUFHLEVBQ2pCNUgsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLENBQUN5QixNQUFBLENBQUFoQyxhQUFhLE9BQUcsRUFHaEIzRCxLQUFLLENBQUNpRyxhQUFhLElBQ25CaEgsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLENBQUN3QixXQUFBLENBQUFvQixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNsRSxRQUFRLEVBQUVBLFFBQVE7Y0FBRW1FLE9BQU8sRUFBRWhILEtBQUssQ0FBQzRDO1lBQUksR0FDL0RyQixLQUFLLENBQUNxQixJQUFJLENBRVosQ0FDSyxFQUNQM0QsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBO2NBQVFJLFNBQVMsRUFBQztZQUFhLEdBQzdCL0MsS0FBSyxDQUFDMEYsT0FBTyxFLE1BQUl6QixPQUFBLENBQUFuRyxPQUFNLENBQUM0SCxPQUFPLENBQ3hCLENBQ00sQ0FDUyxDQUN4QjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFQSxJQUFBaEksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdJLEtBQUEsR0FBQWhJLE9BQUE7VUFDQSxJQUFBdUUsUUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxNQUFBLEdBQUF4RSxPQUFBO1VBRU0sU0FBVTBILGdCQUFnQkEsQ0FBQTtZQUMvQixNQUFNO2NBQUVyRixLQUFLO2NBQUV2QjtZQUFLLENBQUUsR0FBRyxJQUFBeUQsUUFBQSxDQUFBbEUsaUJBQWlCLEdBQUU7WUFFNUMsTUFBTSxDQUFDZ0QsUUFBUSxFQUFFNEUsV0FBVyxDQUFDLEdBQUdsSSxNQUFBLENBQUFJLE9BQUssQ0FBQ3dFLFFBQVEsQ0FBQzdELEtBQUssQ0FBQ3VDLFFBQVEsQ0FBQztZQUU5RCxJQUFBbUIsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQzlELEtBQUssQ0FBQyxFQUFFLE1BQU1tSCxXQUFXLENBQUNuSCxLQUFLLENBQUN1QyxRQUFRLENBQUMsQ0FBQztZQUNyRCxNQUFNNkUsWUFBWSxHQUFHcEQsS0FBSyxJQUFHO2NBQzVCaEUsS0FBSyxDQUFDdUMsUUFBUSxHQUFHeUIsS0FBSyxDQUFDcUQsTUFBTSxDQUFDMUYsS0FBSztZQUNwQyxDQUFDO1lBQ0QsT0FDQzFDLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxDQUFBakYsTUFBQSxDQUFBSSxPQUFBLENBQUE4RSxRQUFBLFFBQ0NsRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsYUFBSzNDLEtBQUssQ0FBQ2dCLFFBQVEsQ0FBTSxFQUN6QnRELE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBcUMsR0FDdkRyRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQ2dELEtBQUEsQ0FBQUksS0FBSztjQUNMQyxRQUFRLEVBQUVILFlBQVk7Y0FDdEJJLE9BQU8sRUFBRXhILEtBQUssQ0FBQ3VDLFFBQVEsS0FBSyxJQUFJO2NBQ2hDa0MsSUFBSSxFQUFDLFVBQVU7Y0FDZjlDLEtBQUssRUFBQyxJQUFJO2NBQ1Z3RCxLQUFLLEVBQUM7WUFBUyxFQUNkLEVBQ0ZsRyxNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQ2dELEtBQUEsQ0FBQUksS0FBSztjQUNMQyxRQUFRLEVBQUVILFlBQVk7Y0FDdEJJLE9BQU8sRUFBRXhILEtBQUssQ0FBQ3VDLFFBQVEsS0FBSyxJQUFJO2NBQ2hDa0MsSUFBSSxFQUFDLFVBQVU7Y0FDZjlDLEtBQUssRUFBQyxJQUFJO2NBQ1Z3RCxLQUFLLEVBQUM7WUFBUyxFQUNkLENBUU8sQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBbEcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVFLFFBQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsTUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFnSSxLQUFBLEdBQUFoSSxPQUFBO1VBRU0sU0FBVTJILGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFdEYsS0FBSztjQUFFdkI7WUFBSyxDQUFFLEdBQUcsSUFBQXlELFFBQUEsQ0FBQWxFLGlCQUFpQixHQUFFO1lBRTVDLE1BQU0sQ0FBQ2lJLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUd4SSxNQUFBLENBQUFJLE9BQUssQ0FBQ3dFLFFBQVEsQ0FBQzdELEtBQUssQ0FBQzBDLGFBQWEsS0FBSyxVQUFVLENBQUM7WUFFaEYsSUFBQWdCLE1BQUEsQ0FBQUksU0FBUyxFQUFDLENBQUM5RCxLQUFLLENBQUMsRUFBRSxNQUFNeUgsVUFBVSxDQUFDekgsS0FBSyxDQUFDMEMsYUFBYSxLQUFLLFVBQVUsQ0FBQyxDQUFDO1lBRXhFLE1BQU02RSxRQUFRLEdBQUd2RCxLQUFLLElBQUc7Y0FDeEIsTUFBTXJDLEtBQUssR0FBRzNCLEtBQUssQ0FBQzBDLGFBQWEsS0FBSyxVQUFVLEdBQUcsUUFBUSxHQUFHLFVBQVU7Y0FDeEUxQyxLQUFLLENBQUMwQyxhQUFhLEdBQUdmLEtBQUs7Y0FDM0I4RixVQUFVLENBQUM5RixLQUFLLEtBQUssVUFBVSxDQUFDO2NBRWhDcUMsS0FBSyxDQUFDMEQsY0FBYyxFQUFFO1lBQ3ZCLENBQUM7WUFFRCxPQUNDekksTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLENBQUFqRixNQUFBLENBQUFJLE9BQUEsQ0FBQThFLFFBQUEsUUFDQ2xGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBbUIsR0FDakNyRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsYUFBSzNDLEtBQUssQ0FBQ29HLFFBQVEsQ0FBTSxFQUN6QjFJLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBbUIsR0FDckNyRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQ2dELEtBQUEsQ0FBQVUsUUFBUTtjQUFDTCxRQUFRLEVBQUVBLFFBQVE7Y0FBRUMsT0FBTyxFQUFFQSxPQUFPO2NBQUUvQyxJQUFJLEVBQUMsT0FBTztjQUFDVSxLQUFLLEVBQUU1RCxLQUFLLENBQUM2RTtZQUFRLEVBQUksQ0FDN0UsQ0FDTCxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUFuSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUUsUUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUEySSxLQUFBLEdBQUEzSSxPQUFBO1VBQ0EsSUFBQTRJLFdBQUEsR0FBQTVJLE9BQUE7VUFFTSxTQUFVNkksV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUV4RztZQUFLLENBQUUsR0FBRyxJQUFBa0MsUUFBQSxDQUFBbEUsaUJBQWlCLEdBQUU7WUFFckMsTUFBTXlJLGdCQUFnQixHQUFHLENBQ3hCO2NBQ0NDLEdBQUcsRUFBRSx3QkFBd0I7Y0FDN0JDLEdBQUcsRUFBRSxrQkFBa0I7Y0FDdkI3RCxLQUFLLEVBQUU5QyxLQUFLLENBQUM0RyxXQUFXLENBQUNDLFVBQVUsQ0FBQy9ELEtBQUs7Y0FDekNnRSxLQUFLLEVBQUVQLFdBQUEsQ0FBQU0sVUFBVSxDQUFDRSxVQUFVO2NBQzVCQyxLQUFLLEVBQUU7YUFDUCxDQUNEO1lBRUQsT0FDQ3RKLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBd0IsR0FDdENyRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsZ0JBQVEzQyxLQUFLLENBQUM0RyxXQUFXLENBQUM5RCxLQUFLLENBQVMsRUFDeENwRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQThCLEdBQzNDMEQsZ0JBQWdCLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxlQUFlLEVBQUVDLEtBQUssS0FDNUN6SixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQzJELEtBQUEsQ0FBQWMsY0FBYztjQUFDQyxHQUFHLEVBQUVGLEtBQUs7Y0FBRUQsZUFBZSxFQUFFQSxlQUFlO2NBQUVsSCxLQUFLLEVBQUVBO1lBQUssRUFDMUUsQ0FBQyxDQUNHLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7VUM1QkE7O1VBRUFzSCxNQUFBLENBQUFDLGNBQUEsQ0FBQTFKLE9BQUE7WUFDQXVDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBMUMsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTZKLE1BQUEsR0FBQTdKLE9BQUE7VUFDQSxJQUFBOEosTUFBQSxHQUFBOUosT0FBQTtVQUVBLElBQUF3RyxXQUFBLEdBQUF4RyxPQUFBO1VBRU8sTUFBTXlKLGNBQWMsR0FBbUNBLENBQUM7WUFBRUYsZUFBZTtZQUFFbEg7VUFBSyxDQUFFLEtBQUk7WUFDNUYsTUFBTSxDQUFDMEgsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR2pLLE1BQUEsQ0FBQUksT0FBSyxDQUFDd0UsUUFBUSxDQUFDNEUsZUFBZSxDQUFDSixLQUFLLENBQUM7WUFDM0UsTUFBTSxDQUFDaEksSUFBSSxFQUFFOEksT0FBTyxDQUFDLEdBQUdsSyxNQUFBLENBQUFJLE9BQUssQ0FBQ3dFLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFN0MsTUFBTXVGLG1CQUFtQixHQUFHQSxDQUFBLEtBQVc7Y0FDdENELE9BQU8sQ0FBQyxDQUFDOUksSUFBSSxDQUFDO1lBQ2YsQ0FBQztZQUVELE1BQU1nSixXQUFXLEdBQUdBLENBQUEsS0FBVztjQUM5QkYsT0FBTyxDQUFDLENBQUM5SSxJQUFJLENBQUM7WUFDZixDQUFDO1lBRUQsTUFBTWlKLFNBQVMsR0FBR0EsQ0FBQSxLQUF3QjtjQUN6QyxPQUNDckssTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBO2dCQUFLSSxTQUFTLEVBQUM7Y0FBdUIsR0FDckNyRixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQ3dCLFdBQUEsQ0FBQW9CLE1BQU07Z0JBQUN5QyxJQUFJLEVBQUMsS0FBSztnQkFBQ3hDLE9BQU8sRUFBQyxTQUFTO2dCQUFDQyxPQUFPLEVBQUVvQyxtQkFBbUI7Z0JBQUVqRSxLQUFLLEVBQUVzRCxlQUFlLENBQUNwRTtjQUFLLEVBQUksQ0FDOUY7WUFFUixDQUFDO1lBRUQsTUFBTW1GLFFBQVEsR0FBR0EsQ0FBQSxLQUF3QjtjQUN4QyxNQUFNdkIsR0FBRyxHQUFHUSxlQUFlLENBQUNSLEdBQUcsR0FBR1EsZUFBZSxDQUFDUixHQUFHLEdBQUdRLGVBQWUsQ0FBQ2MsSUFBSTtjQUM1RSxNQUFNckIsR0FBRyxHQUFHTyxlQUFlLENBQUNSLEdBQUcsR0FBR1EsZUFBZSxDQUFDUCxHQUFHLEdBQUdPLGVBQWUsQ0FBQ3BFLEtBQUs7Y0FFN0UsT0FDQ3BGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQTtnQkFBS0ksU0FBUyxFQUFDO2NBQTZCLEdBQzNDckYsTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLENBQUM2RSxNQUFBLENBQUFVLEtBQUs7Z0JBQUN4QixHQUFHLEVBQUVBLEdBQUc7Z0JBQUVDLEdBQUcsRUFBRUE7Y0FBRyxFQUFJLEVBQzdCakosTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBLGVBQU91RSxlQUFlLENBQUNwRSxLQUFLLENBQVEsQ0FDL0I7WUFFUixDQUFDO1lBRUQsTUFBTXFGLE9BQU8sR0FBRyxDQUFDVCxXQUFXLEdBQUdLLFNBQVMsR0FBR0UsUUFBUTtZQUVuRCxPQUNDdkssTUFBQSxDQUFBSSxPQUFBLENBQUE2RSxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFpQixHQUMvQnJGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSxDQUFDd0YsT0FBTyxPQUFHLEVBRVZySixJQUFJLElBQUlvSSxlQUFlLEVBQUVGLEtBQUssSUFDOUJ0SixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQzhFLE1BQUEsQ0FBQVcsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFdkosSUFBSTtjQUFDaUUsU0FBUyxFQUFDLGNBQWM7Y0FBQ3VGLE9BQU8sRUFBRVI7WUFBVyxHQUM5RXBLLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQSx3Q0FBa0MsQ0FFbkMsQ0FDSTtVQUVSLENBQUM7VUFBQzlFLE9BQUEsQ0FBQXVKLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREYsSUFBQTFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE0SyxDQUFBLEdBQUE1SyxPQUFBO1VBRWMsU0FBVTZLLFdBQVdBLENBQUM7WUFBRTFEO1VBQVMsQ0FBRTtZQUNoRCxNQUFNLENBQUMyRCxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxHQUFHaEwsTUFBQSxDQUFBSSxPQUFLLENBQUN3RSxRQUFRLENBQVN3QyxTQUFTLENBQUM2RCxRQUFRLENBQUM7WUFFaEUsT0FDQ2pMLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkUsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBb0IsR0FDckMwRixHQUFHLElBQUkvSyxNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQzRGLENBQUEsQ0FBQUssU0FBUztjQUFDbEMsR0FBRyxFQUFFK0IsR0FBRyxJQUFJLEVBQUU7Y0FBRTlCLEdBQUcsRUFBRTdCLFNBQVMsQ0FBQ0c7WUFBVyxFQUFJLENBQ3hEO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQXZILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2SixNQUFBLEdBQUE3SixPQUFBO1VBQ00sU0FBVWlMLFNBQVNBLENBQUM7WUFBRWxDLEdBQUc7WUFBRUM7VUFBRyxDQUFFO1lBQ3JDLE9BQU9qSixNQUFBLENBQUFJLE9BQUEsQ0FBQTZFLGFBQUEsQ0FBQzZFLE1BQUEsQ0FBQVUsS0FBSztjQUFDbkYsU0FBUyxFQUFDLFlBQVk7Y0FBQzJELEdBQUcsRUFBRUEsR0FBRztjQUFFQyxHQUFHLEVBQUVBO1lBQUcsRUFBSTtVQUM1RCJ9