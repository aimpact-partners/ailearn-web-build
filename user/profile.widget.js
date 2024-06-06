System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.46.dev-09/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.46.dev-09/components/ui", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-09/model/gclassroom", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev09MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0046Dev09MainLayoutWidget;
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
    }, function (_aimpactAilearnApp0046Dev09ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev09ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_14 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Form) {
      dependency_15 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0046Dev09ModelGclassroom) {
      dependency_16 = _aimpactAilearnApp0046Dev09ModelGclassroom;
    }, function (_pragmateUi011Image) {
      dependency_17 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_18 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_19 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-09"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat-sdk/session', dependency_14], ['pragmate-ui/form', dependency_15], ['@aimpact/ailearn-app/model/gclassroom', dependency_16], ['pragmate-ui/image', dependency_17], ['pragmate-ui/modal', dependency_18], ['pragmate-ui/icons', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-09/user/profile.widget');
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
        hash: 4224662471,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwicm91dGluZyIsImJhY2siLCJfbW9kZWwiLCJfY29yZSIsIl9yZW5kZXIiLCJfd3JhcHBlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJhY2Nlc3NpYmlsaXR5IiwiaW5pdGlhbFZhbHVlcyIsImdsb2JhbFRoaXMiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiX2NvbnRleHQiLCJfaG9va3MiLCJBdWRpb1NldHRpbmdzIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfc2Vzc2lvbiIsIl9JbWFnZVBpY2tlciIsIl9sYW5ndWFnZVNlbGVjdG9yIiwiX21vZGVTZWxlY3Rpb24iLCJfYXVkaW8iLCJzZXRSZWFkeSIsImlzVW5wdWJsaXNoZWQiLCJzZXRTdG9yZSIsInNldEFjY2Vzc2liaWx0eSIsImR5c2xleGlhIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX2Zvcm0iLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIlJhZGlvIiwib25DaGFuZ2UiLCJjaGVja2VkIiwibGFiZWwiLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2l0ZW0iLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwibWFwIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJpY29uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kZS1zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVNPLE1BQU1DLGNBQWMsR0FBQUMsT0FBQSxDQUFBRCxjQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBcUIsQ0FBQztVQUNqRSxNQUFNQyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxjQUFjLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7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