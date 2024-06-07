System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.46.dev-13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.46.dev-13/components/ui", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-13/model/gclassroom", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0046Dev13MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0046Dev13MainLayoutWidget;
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
    }, function (_aimpactAilearnApp0046Dev13ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev13ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_14 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Form) {
      dependency_15 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0046Dev13ModelGclassroom) {
      dependency_16 = _aimpactAilearnApp0046Dev13ModelGclassroom;
    }, function (_pragmateUi011Image) {
      dependency_17 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_18 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_19 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-13"], ["@aimpact/ailearn-app", "0.0.46.dev-13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat-sdk/session', dependency_14], ['pragmate-ui/form', dependency_15], ['@aimpact/ailearn-app/model/gclassroom', dependency_16], ['pragmate-ui/image', dependency_17], ['pragmate-ui/modal', dependency_18], ['pragmate-ui/icons', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-13/user/profile.widget');
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
        hash: 2816558236,
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
            }, texts.save)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwicm91dGluZyIsImJhY2siLCJfbW9kZWwiLCJfY29yZSIsIl9yZW5kZXIiLCJfd3JhcHBlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJhY2Nlc3NpYmlsaXR5IiwiaW5pdGlhbFZhbHVlcyIsImdsb2JhbFRoaXMiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiX2NvbnRleHQiLCJfaG9va3MiLCJBdWRpb1NldHRpbmdzIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfc2Vzc2lvbiIsIl9JbWFnZVBpY2tlciIsIl9sYW5ndWFnZVNlbGVjdG9yIiwiX21vZGVTZWxlY3Rpb24iLCJfYXVkaW8iLCJzZXRSZWFkeSIsImlzVW5wdWJsaXNoZWQiLCJzZXRTdG9yZSIsInNldEFjY2Vzc2liaWx0eSIsImR5c2xleGlhIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX2Zvcm0iLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIlJhZGlvIiwib25DaGFuZ2UiLCJjaGVja2VkIiwibGFiZWwiLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2l0ZW0iLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwibWFwIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJpY29uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJvbkNsb3NlIiwiXyIsIkltYWdlUGlja2VyIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2F1ZGlvLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2Utc2VsZWN0b3IvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFTTyxNQUFNQyxjQUFjLEdBQUFDLE9BQUEsQ0FBQUQsY0FBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFDakUsTUFBTUMsaUJBQWlCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsY0FBYyxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsaUJBQUEsR0FBQUEs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