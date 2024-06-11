System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.46.dev-15/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.46.dev-15/components/ui", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-15/config", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-15/model/gclassroom", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_4 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactAilearnApp0046Dev15MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0046Dev15MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_beyondJsReactive1112Model) {
      dependency_7 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_9 = _aimpactChat101Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0046Dev15ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev15ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_14 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0046Dev15Config) {
      dependency_15 = _aimpactAilearnApp0046Dev15Config;
    }, function (_pragmateUi011Form) {
      dependency_16 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0046Dev15ModelGclassroom) {
      dependency_17 = _aimpactAilearnApp0046Dev15ModelGclassroom;
    }, function (_pragmateUi011Image) {
      dependency_18 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_19 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_20 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-15"], ["@aimpact/ailearn-app", "0.0.46.dev-15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat-sdk/session', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/form', dependency_16], ['@aimpact/ailearn-app/model/gclassroom', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/modal', dependency_19], ['pragmate-ui/icons', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-15/user/profile.widget');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 2620943352,
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
        hash: 3631568600,
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
              _mainLayout.LayoutBroker.overlay = true;
              _mainLayout.LayoutBroker.backLink = () => _routing.routing.back();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 94039213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _render = require("@beyond-js/widgets/render");
          var _wrapper = require("@aimpact/chat/wrapper");
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
                _core.languages.current = this.language;
                this.initialValues({
                  language: _core.languages.current
                });
                this.fetching = false;
              }, 1000);
              return true;
            };
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
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3010304569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _session = require("@aimpact/chat-sdk/session");
          var _ImagePicker = require("./profile-image/ImagePicker");
          var _context = require("../context");
          var _languageSelector = require("./language-selector");
          var _modeSelection = require("./mode-selection");
          var _audio = require("./audio");
          var _config = require("@aimpact/ailearn-app/config");
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
            }), _react.default.createElement("div", {
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
        hash: 2809078089,
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
              label: "Spanish"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwicm91dGluZyIsImJhY2siLCJfbW9kZWwiLCJfY29yZSIsIl9yZW5kZXIiLCJfd3JhcHBlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJhY2Nlc3NpYmlsaXR5IiwiaW5pdGlhbFZhbHVlcyIsImdsb2JhbFRoaXMiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiX2NvbnRleHQiLCJfaG9va3MiLCJBdWRpb1NldHRpbmdzIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfc2Vzc2lvbiIsIl9JbWFnZVBpY2tlciIsIl9sYW5ndWFnZVNlbGVjdG9yIiwiX21vZGVTZWxlY3Rpb24iLCJfYXVkaW8iLCJfY29uZmlnIiwic2V0UmVhZHkiLCJpc1VucHVibGlzaGVkIiwic2V0U3RvcmUiLCJzZXRBY2Nlc3NpYmlsdHkiLCJkeXNsZXhpYSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIk1vZGVTZWxlY3Rpb24iLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInZlcnNpb24iLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJsYWJlbCIsInNldENoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRNb2RlIiwiQ2hlY2tib3giLCJfaXRlbSIsIl9nY2xhc3Nyb29tIiwiUGVybWlzc2lvbnMiLCJjb25uZWN0aW9uVmFsdWVzIiwic3JjIiwiYWx0IiwicGVybWlzc2lvbnMiLCJnY2xhc3Nyb29tIiwiY2hlY2siLCJhdXRob3JpemVkIiwibW9kYWwiLCJtYXAiLCJjb25uZWN0aW9uVmFsdWUiLCJpbmRleCIsIlBlcm1pc3Npb25JdGVtIiwia2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW1hZ2UiLCJfbW9kYWwiLCJjaGVja2VkSXRlbSIsInNldENoZWNrZWRJdGVtIiwic2V0U2hvdyIsImhhbmRsZVZpbmN1bGFyQ2xpY2siLCJoYW5kbGVNb2RhbCIsImFkZEJ1dHRvbiIsImljb24iLCJhZGRMYWJlbCIsIkltYWdlIiwiQ29udHJvbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kZS1zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBU08sTUFBTUMsY0FBYyxHQUFBQyxPQUFBLENBQUFELGNBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFxQixDQUFDO1VBQ2pFLE1BQU1DLGlCQUFpQixHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLGNBQWMsQ0FBQztVQUFDQyxP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