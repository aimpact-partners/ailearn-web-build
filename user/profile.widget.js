System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.46.dev-04/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.46.dev-04/components/ui", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-04/model/gclassroom", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev04MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0046Dev04MainLayoutWidget;
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
    }, function (_aimpactAilearnApp0046Dev04ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0046Dev04ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Form) {
      dependency_14 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0046Dev04ModelGclassroom) {
      dependency_15 = _aimpactAilearnApp0046Dev04ModelGclassroom;
    }, function (_pragmateUi011Image) {
      dependency_16 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_17 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_18 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-04"], ["@aimpact/ailearn-app", "0.0.46.dev-04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['pragmate-ui/form', dependency_14], ['@aimpact/ailearn-app/model/gclassroom', dependency_15], ['pragmate-ui/image', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/icons', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-04/user/profile.widget');
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
        hash: 1297080944,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwicm91dGluZyIsImJhY2siLCJfbW9kZWwiLCJfY29yZSIsIl9yZW5kZXIiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJyZWFjdGl2ZVByb3BzIiwicmVhZHkiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJhY2Nlc3NpYmlsaXR5IiwiaW5pdGlhbFZhbHVlcyIsImdsb2JhbFRoaXMiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiX2NvbnRleHQiLCJfaG9va3MiLCJBdWRpb1NldHRpbmdzIiwidGV4dHMiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbklucHV0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYXVkaW8iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGVlZCIsIm5hbWUiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl91aSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX3Nlc3Npb24iLCJfSW1hZ2VQaWNrZXIiLCJfbGFuZ3VhZ2VTZWxlY3RvciIsIl9tb2RlU2VsZWN0aW9uIiwiX2F1ZGlvIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJzZXRGZXRjaGluZyIsImlzVW5wdWJsaXNoZWQiLCJzZXRJc1VucHVibGlzaGVkIiwic2V0QWNjZXNzaWJpbHR5IiwiZHlzbGV4aWEiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkxhbmd1YWdlU2VsZWN0b3IiLCJNb2RlU2VsZWN0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJvbkNsaWNrIiwiX2Zvcm0iLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIlJhZGlvIiwib25DaGFuZ2UiLCJjaGVja2VkIiwibGFiZWwiLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2l0ZW0iLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwibWFwIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJpY29uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kZS1zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFRTyxNQUFNQyxjQUFjLEdBQUFDLE9BQUEsQ0FBQUQsY0FBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFDakUsTUFBTUMsaUJBQWlCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsY0FBYyxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsaUJBQUEsR0FBQUEsaUJBQUE7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