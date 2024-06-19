System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.50/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.2/wrapper", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.50/components/ui", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.0.50/config", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.50/model/gclassroom", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0050MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0050MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_beyondJsReactive1112Model) {
      dependency_7 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactChat102Wrapper) {
      dependency_9 = _aimpactChat102Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0050ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0050ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_aimpactChatSdk101Session) {
      dependency_14 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnApp0050Config) {
      dependency_15 = _aimpactAilearnApp0050Config;
    }, function (_pragmateUi011Form) {
      dependency_16 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0050ModelGclassroom) {
      dependency_17 = _aimpactAilearnApp0050ModelGclassroom;
    }, function (_pragmateUi011Image) {
      dependency_18 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_19 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_20 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.50"], ["@aimpact/ailearn-app", "0.0.50"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.50/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat-sdk/session', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/form', dependency_16], ['@aimpact/ailearn-app/model/gclassroom', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/modal', dependency_19], ['pragmate-ui/icons', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.50/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.50/user/profile.widget');
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
        hash: 1263483942,
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
              _mainLayout.LayoutBroker.clearModel();
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
        hash: 1852175479,
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
        hash: 3639814685,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImNsZWFyTW9kZWwiLCJiYWNrTGluayIsInJvdXRpbmciLCJiYWNrIiwiX21vZGVsIiwiX2NvcmUiLCJfcmVuZGVyIiwiX3dyYXBwZXIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwicHJvcGVydGllcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJyZWFjdGl2ZVByb3BzIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiYWNjZXNzaWJpbGl0eSIsImluaXRpYWxWYWx1ZXMiLCJnbG9iYWxUaGlzIiwic2F2ZSIsImZldGNoaW5nIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsIl9jb250ZXh0IiwiX2hvb2tzIiwiQXVkaW9TZXR0aW5ncyIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbklucHV0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYXVkaW8iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGVlZCIsIm5hbWUiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl91aSIsIl9jb21wb25lbnRzIiwiX3Nlc3Npb24iLCJfSW1hZ2VQaWNrZXIiLCJfbGFuZ3VhZ2VTZWxlY3RvciIsIl9tb2RlU2VsZWN0aW9uIiwiX2F1ZGlvIiwiX2NvbmZpZyIsInNldFJlYWR5IiwiaXNVbnB1Ymxpc2hlZCIsInNldFN0b3JlIiwic2V0QWNjZXNzaWJpbHR5IiwiZHlzbGV4aWEiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkxhbmd1YWdlU2VsZWN0b3IiLCJNb2RlU2VsZWN0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ2ZXJzaW9uIiwiX2Zvcm0iLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIlJhZGlvIiwib25DaGFuZ2UiLCJjaGVja2VkIiwibGFiZWwiLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2l0ZW0iLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwibWFwIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJpY29uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJvbkNsb3NlIiwiXyIsIkltYWdlUGlja2VyIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2F1ZGlvLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2Utc2VsZWN0b3IvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVNPLE1BQU1DLGNBQWMsR0FBQUMsT0FBQSxDQUFBRCxjQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBcUIsQ0FBQztVQUNqRSxNQUFNQyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxjQUFj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