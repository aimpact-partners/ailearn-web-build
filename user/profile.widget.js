System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.36/coins-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.36/components/ui", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.36/model/gclassroom", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0036CoinsLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0036CoinsLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_beyondJsReactive1112Model) {
      dependency_7 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_9 = _aimpactChat101Wrapper;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0036ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0036ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Form) {
      dependency_14 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0036ModelGclassroom) {
      dependency_15 = _aimpactAilearnApp0036ModelGclassroom;
    }, function (_pragmateUi011Image) {
      dependency_16 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_17 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_18 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.36"], ["@aimpact/ailearn-app", "0.0.36"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.36/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/ailearn-app/coins-layout.widget', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['pragmate-ui/form', dependency_14], ['@aimpact/ailearn-app/model/gclassroom', dependency_15], ['pragmate-ui/image', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/icons', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.36/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.36/user/profile.widget');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 3391843252,
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
        hash: 2042716307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
              _coinsLayout.LayoutBroker.overlay = true;
              _coinsLayout.LayoutBroker.backLink = () => _routing.routing.back();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2441745658,
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
          class StoreManager extends _model.ReactiveModel {
            properties = ['language', 'accessibility', 'audioSpeed'];
            constructor() {
              super();
              const audioSpeed = [null, undefined, 'undefined'].includes(localStorage.getItem('aimpact.audio.speed')) ? 1 : localStorage.getItem('aimpact.audio.speed');
              const accessibilityMode = ['dyslexia', 'normal'].includes(localStorage.getItem('aimpact.chat.accessibility')) ? localStorage.getItem('aimpact.chat.accessibility') : 'normal';
              this.reactiveProps(['language', 'accessibility', 'audioSpeed']);
              this.ready = true;
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
              }, 300);
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/audio
      *****************************/

      ims.set('./views/audio', {
        hash: 441220104,
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
              className: "audio__container"
            }, _react.default.createElement("label", {
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
        hash: 4262432273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _beyond_context = require("beyond_context");
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
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = _react.default.useState(store.ready);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [isUnpublished, setIsUnpublished] = _react.default.useState(store.isUnpublished);
            const [accessibility, setAccessibilty] = _react.default.useState(store.accessibility);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
              setIsUnpublished(store.isUnpublished);
              setAccessibilty(store.dyslexia);
            });
            if (!textsReady || !ready) return null;
            const userProps = _session.sessionWrapper.user.getProperties();
            const {
              displayName,
              email
            } = userProps;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ProfileContext.Provider, {
              value: {
                store,
                texts
              }
            }, _react.default.createElement(_ui.PageContainer, {
              className: "token-page__container"
            }, _react.default.createElement("header", {
              className: "profile-header"
            }, _react.default.createElement(_ImagePicker.default, {
              userProps: userProps
            }), _react.default.createElement("h4", {
              className: "h3"
            }, displayName)), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement("div", {
              className: "profile__item"
            }, _react.default.createElement("h5", null, "Email"), _react.default.createElement("span", null, email)), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement(_languageSelector.LanguageSelector, null), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement(_modeSelection.ModeSelection, null), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement(_audio.AudioSettings, null), _react.default.createElement("div", {
              className: "divider-section"
            }), store.isUnpublished && _react.default.createElement(_components.Button, {
              variant: "primary",
              loading: fetching,
              onClick: store.save
            }, texts.save))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/language-selector/index
      ***********************************************/

      ims.set('./views/language-selector/index', {
        hash: 166971253,
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
              className: "language-selector"
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
            }), _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'pr',
              name: "portuguese",
              value: "pr",
              label: "Portuguese"
            })));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/mode-selection
      **************************************/

      ims.set('./views/mode-selection', {
        hash: 482458493,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.textMode), _react.default.createElement("section", {
              className: "language-selector"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: onChange,
              checked: checked,
              name: "check",
              label: texts.dyslexia
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9jb2luc0xheW91dCIsIl9yb3V0aW5nIiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJiYWNrTGluayIsInJvdXRpbmciLCJiYWNrIiwiX21vZGVsIiwiX2NvcmUiLCJfcmVuZGVyIiwiX3dyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwicHJvcGVydGllcyIsImNvbnN0cnVjdG9yIiwiYXVkaW9TcGVlZCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2Vzc2liaWxpdHlNb2RlIiwicmVhY3RpdmVQcm9wcyIsInJlYWR5IiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiYWNjZXNzaWJpbGl0eSIsImluaXRpYWxWYWx1ZXMiLCJnbG9iYWxUaGlzIiwic2F2ZSIsImZldGNoaW5nIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsIl9jb250ZXh0IiwiX2hvb2tzIiwiQXVkaW9TZXR0aW5ncyIsInRleHRzIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25JbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJuYW1lIiwidHlwZSIsIm1heCIsIm1pbiIsInN0ZXAiLCJfdWkiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9zZXNzaW9uIiwiX0ltYWdlUGlja2VyIiwiX2xhbmd1YWdlU2VsZWN0b3IiLCJfbW9kZVNlbGVjdGlvbiIsIl9hdWRpbyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5Iiwic2V0RmV0Y2hpbmciLCJpc1VucHVibGlzaGVkIiwic2V0SXNVbnB1Ymxpc2hlZCIsInNldEFjY2Vzc2liaWx0eSIsImR5c2xleGlhIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsb2FkaW5nIiwib25DbGljayIsIl9mb3JtIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJSYWRpbyIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImxhYmVsIiwic2V0Q2hlY2tlZCIsInByZXZlbnREZWZhdWx0IiwidGV4dE1vZGUiLCJDaGVja2JveCIsIl9pdGVtIiwiX2djbGFzc3Jvb20iLCJQZXJtaXNzaW9ucyIsImNvbm5lY3Rpb25WYWx1ZXMiLCJzcmMiLCJhbHQiLCJwZXJtaXNzaW9ucyIsImdjbGFzc3Jvb20iLCJjaGVjayIsImF1dGhvcml6ZWQiLCJtb2RhbCIsIm1hcCIsImNvbm5lY3Rpb25WYWx1ZSIsImluZGV4IiwiUGVybWlzc2lvbkl0ZW0iLCJrZXkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbWFnZSIsIl9tb2RhbCIsImNoZWNrZWRJdGVtIiwic2V0Q2hlY2tlZEl0ZW0iLCJzZXRTaG93IiwiaGFuZGxlVmluY3VsYXJDbGljayIsImhhbmRsZU1vZGFsIiwiYWRkQnV0dG9uIiwiaWNvbiIsImFkZExhYmVsIiwiSW1hZ2UiLCJDb250cm9sIiwiTW9kYWwiLCJvbkNsb3NlIiwiXyIsIkltYWdlUGlja2VyIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2F1ZGlvLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2Utc2VsZWN0b3IvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBUU8sTUFBTUMsY0FBYyxHQUFBQyxPQUFBLENBQUFELGNBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFxQixDQUFDO1VBQ2pFLE1BQU1DLGlCQUFpQixHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLGNBQWMsQ0FBQztVQUFDQyxPQUFBLENBQUFHLGlCQUFBLEdBQUFBLGlCQUFB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