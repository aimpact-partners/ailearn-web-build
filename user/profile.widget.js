System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/model/gclassroom", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_8 = _aimpactChat101Wrapper;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_12 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Form) {
      dependency_13 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032ModelGclassroom) {
      dependency_14 = _aimpactAilearnApp0032ModelGclassroom;
    }, function (_pragmateUi011Image) {
      dependency_15 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_16 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_17 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/ailearn-app/coins-layout.widget', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@aimpact/chat/wrapper', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/form', dependency_13], ['@aimpact/ailearn-app/model/gclassroom', dependency_14], ['pragmate-ui/image', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/user/profile.widget');
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
        hash: 4065949506,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
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
              // LayoutBroker.overlay = true;
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
        hash: 387306254,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJfbW9kZWwiLCJfY29yZSIsIl9yZW5kZXIiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJyZWFjdGl2ZVByb3BzIiwicmVhZHkiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJhY2Nlc3NpYmlsaXR5IiwiaW5pdGlhbFZhbHVlcyIsImdsb2JhbFRoaXMiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiX2NvbnRleHQiLCJfaG9va3MiLCJBdWRpb1NldHRpbmdzIiwidGV4dHMiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbklucHV0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYXVkaW8iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGVlZCIsIm5hbWUiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl91aSIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX3Nlc3Npb24iLCJfSW1hZ2VQaWNrZXIiLCJfbGFuZ3VhZ2VTZWxlY3RvciIsIl9tb2RlU2VsZWN0aW9uIiwiX2F1ZGlvIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJzZXRGZXRjaGluZyIsImlzVW5wdWJsaXNoZWQiLCJzZXRJc1VucHVibGlzaGVkIiwic2V0QWNjZXNzaWJpbHR5IiwiZHlzbGV4aWEiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkxhbmd1YWdlU2VsZWN0b3IiLCJNb2RlU2VsZWN0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJvbkNsaWNrIiwiX2Zvcm0iLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIlJhZGlvIiwib25DaGFuZ2UiLCJjaGVja2VkIiwibGFiZWwiLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2l0ZW0iLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwibWFwIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJpY29uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kZS1zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBUU8sTUFBTUMsY0FBYyxHQUFBQyxPQUFBLENBQUFELGNBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFxQixDQUFDO1VBQ2pFLE1BQU1DLGlCQUFpQixHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLGNBQWMsQ0FBQztVQUFDQyxPQUFBLENBQUFHLGlCQUFBLEdBQUFBLGlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1R4RSxJQUFBRSxLQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFFTztVQUFVLE1BQ1hVLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUVoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSDtZQUFBOztVQUVEZixPQUFBLENBQUFRLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkQsSUFBQVEsTUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixLQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE9BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUVNLE1BQU9jLFlBQWEsU0FBUUksTUFBQSxDQUFBSSxhQUErQjtZQUdoRUMsVUFBVSxHQUFHLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUM7WUFDeERDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FFUCxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUVDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQ0MsUUFBUSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQ3BHLENBQUMsR0FDREQsWUFBWSxDQUFDQyxPQUFPLENBQUMscUJBQXFCLENBQUM7Y0FFOUMsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUNILFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxHQUMxR0QsWUFBWSxDQUFDQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsR0FDbEQsUUFBUTtjQUVYLElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztjQUMvRCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHZCxLQUFBLENBQUFlLFNBQVMsQ0FBQ0MsT0FBTztjQUNqQyxJQUFJLENBQUNWLFVBQVUsR0FBR0EsVUFBVTtjQUM1QixJQUFJLENBQUNXLGFBQWEsR0FBR04saUJBQWlCO2NBQ3RDLElBQUksQ0FBQ08sYUFBYSxDQUFDO2dCQUNsQkQsYUFBYSxFQUFFTixpQkFBaUI7Z0JBQ2hDRyxRQUFRLEVBQUVkLEtBQUEsQ0FBQWUsU0FBUyxDQUFDQyxPQUFPO2dCQUMzQlYsVUFBVSxFQUFFLElBQUksQ0FBQ0E7ZUFDakIsQ0FBQztjQUVGYSxVQUFVLENBQUMxQixLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBMkIsSUFBSSxHQUFHQSxDQUFBLEtBQUs7Y0FDWCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2NBQ3BCckIsS0FBQSxDQUFBZSxTQUFTLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNGLFFBQVE7Y0FFakMsTUFBTVEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FFaER0QixRQUFBLENBQUF1QixVQUFVLENBQUNDLFdBQVcsQ0FBQztnQkFDdEJULGFBQWEsRUFBRSxJQUFJLENBQUNBLGFBQWE7Z0JBQ2pDWCxVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVO2dCQUMzQlEsUUFBUSxFQUFFLElBQUksQ0FBQ0E7ZUFDZixDQUFDO2NBQ0ZaLFFBQUEsQ0FBQXVCLFVBQVUsQ0FBQ1IsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYTtjQUM3Q2YsUUFBQSxDQUFBdUIsVUFBVSxDQUFDbkIsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVTtjQUN2Q0osUUFBQSxDQUFBdUIsVUFBVSxDQUFDWCxRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRO2NBQ25DUSxTQUFTLENBQUNLLFlBQVksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUNWLGFBQWEsQ0FBQztjQUNyRVIsWUFBWSxDQUFDbUIsT0FBTyxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQ1gsYUFBYSxDQUFDO2NBQ3RFUixZQUFZLENBQUNtQixPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDdEIsVUFBVSxDQUFDO2NBQzVETCxPQUFBLENBQUE0QixPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQ2QsYUFBYSxDQUFDO2NBRXJFZSxNQUFNLENBQUNDLFVBQVUsQ0FBQyxNQUFLO2dCQUN0QmpDLEtBQUEsQ0FBQWUsU0FBUyxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDRixRQUFRO2dCQUNqQyxJQUFJLENBQUNJLGFBQWEsQ0FBQztrQkFBRUosUUFBUSxFQUFFZCxLQUFBLENBQUFlLFNBQVMsQ0FBQ0M7Z0JBQU8sQ0FBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUNLLFFBQVEsR0FBRyxLQUFLO2NBQ3RCLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUixDQUFDOztVQUNEdEMsT0FBQSxDQUFBWSxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RELElBQUFmLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFxRCxRQUFBLEdBQUFyRCxPQUFBO1VBQ0EsSUFBQXNELE1BQUEsR0FBQXRELE9BQUE7VUFFTSxTQUFVdUQsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUVDLEtBQUs7Y0FBRTVDO1lBQUssQ0FBRSxHQUFHLElBQUF5QyxRQUFBLENBQUFoRCxpQkFBaUIsR0FBRTtZQUM1QyxNQUFNLENBQUNvRCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHM0QsTUFBQSxDQUFBSSxPQUFLLENBQUN3RCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUFMLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUNoRCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCOEMsUUFBUSxDQUFDOUMsS0FBSyxDQUFDYSxVQUFVLENBQUM7WUFDM0IsQ0FBQyxDQUFDO1lBRUYsTUFBTW9DLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCbEQsS0FBSyxDQUFDYSxVQUFVLEdBQUdxQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ04sS0FBSztZQUM3QyxDQUFDO1lBRUQsT0FDQzFELE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxDQUFBakUsTUFBQSxDQUFBSSxPQUFBLENBQUE4RCxRQUFBLFFBQ0NsRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsZ0JBQVFSLEtBQUssQ0FBQ1UsS0FBSyxDQUFDQyxLQUFLLENBQVMsRUFDbENwRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUE7Y0FBU0ksU0FBUyxFQUFDO1lBQWtCLEdBQ3BDckUsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBO2NBQU9LLE9BQU8sRUFBQztZQUFZLEdBQ3pCYixLQUFLLENBQUNVLEtBQUssQ0FBQ0ksS0FBSyxFQUVsQnZFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUNDUCxLQUFLLEVBQUU3QyxLQUFLLENBQUNhLFVBQVU7Y0FDdkI4QyxJQUFJLEVBQUMsWUFBWTtjQUNqQlYsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCVyxJQUFJLEVBQUMsT0FBTztjQUNaQyxHQUFHLEVBQUMsR0FBRztjQUNQQyxHQUFHLEVBQUMsTUFBTTtjQUNWQyxJQUFJLEVBQUM7WUFBTSxFQUNWLENBQ0ssRUFDUjVFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsR0FDL0JyRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsc0JBQWlCLEVBQ2pCakUsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLHNCQUFpQixFQUNqQmpFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxzQkFBaUIsRUFDakJqRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsbUJBQWMsRUFDZGpFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxzQkFBaUIsRUFDakJqRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsc0JBQWlCLEVBQ2pCakUsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLHNCQUFpQixFQUNqQmpFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxtQkFBYyxDQUNULENBQ0csQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBakUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNELE1BQUEsR0FBQXRELE9BQUE7VUFDQSxJQUFBNEUsR0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxlQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQThFLFdBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBK0UsUUFBQSxHQUFBL0UsT0FBQTtVQUNBLElBQUFnRixZQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQXFELFFBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBaUYsaUJBQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBa0YsY0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFtRixNQUFBLEdBQUFuRixPQUFBO1VBR087VUFBVSxTQUNSZ0IsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQUU7WUFDdEIsTUFBTSxDQUFDd0UsVUFBVSxFQUFFNUIsS0FBSyxDQUFDLEdBQUcsSUFBQUYsTUFBQSxDQUFBK0IsUUFBUSxFQUFDUixlQUFBLENBQUFTLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3ZELEtBQUssRUFBRXdELFFBQVEsQ0FBQyxHQUFHekYsTUFBQSxDQUFBSSxPQUFLLENBQUN3RCxRQUFRLENBQUMvQyxLQUFLLENBQUNvQixLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDUSxRQUFRLEVBQUVpRCxXQUFXLENBQUMsR0FBRzFGLE1BQUEsQ0FBQUksT0FBSyxDQUFDd0QsUUFBUSxDQUFDL0MsS0FBSyxDQUFDNEIsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ2tELGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBRzVGLE1BQUEsQ0FBQUksT0FBSyxDQUFDd0QsUUFBUSxDQUFDL0MsS0FBSyxDQUFDOEUsYUFBYSxDQUFDO1lBQzdFLE1BQU0sQ0FBQ3RELGFBQWEsRUFBRXdELGVBQWUsQ0FBQyxHQUFHN0YsTUFBQSxDQUFBSSxPQUFLLENBQUN3RCxRQUFRLENBQUMvQyxLQUFLLENBQUN3QixhQUFhLENBQUM7WUFFNUUsSUFBQWtCLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUNoRCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCNEUsUUFBUSxDQUFDNUUsS0FBSyxDQUFDb0IsS0FBSyxDQUFDO2NBQ3JCeUQsV0FBVyxDQUFDN0UsS0FBSyxDQUFDNEIsUUFBUSxDQUFDO2NBQzNCbUQsZ0JBQWdCLENBQUMvRSxLQUFLLENBQUM4RSxhQUFhLENBQUM7Y0FDckNFLGVBQWUsQ0FBQ2hGLEtBQUssQ0FBQ2lGLFFBQVEsQ0FBQztZQUNoQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNULFVBQVUsSUFBSSxDQUFDcEQsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUN0QyxNQUFNOEQsU0FBUyxHQUFHZixRQUFBLENBQUFnQixjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYSxFQUFFO1lBQ3JELE1BQU07Y0FBRUMsV0FBVztjQUFFQztZQUFLLENBQUUsR0FBR0wsU0FBUztZQUV4QyxPQUNDL0YsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLENBQUFqRSxNQUFBLENBQUFJLE9BQUEsQ0FBQThELFFBQUEsUUFDQ2xFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxDQUFDWCxRQUFBLENBQUFwRCxjQUFjLENBQUNtRyxRQUFRO2NBQUMzQyxLQUFLLEVBQUU7Z0JBQUU3QyxLQUFLO2dCQUFFNEM7Y0FBSztZQUFFLEdBQy9DekQsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLENBQUNZLEdBQUEsQ0FBQXlCLGFBQWE7Y0FBQ2pDLFNBQVMsRUFBQztZQUF1QixHQUMvQ3JFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUFRSSxTQUFTLEVBQUM7WUFBZ0IsR0FDakNyRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ2dCLFlBQUEsQ0FBQTdFLE9BQVc7Y0FBQzJGLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ3JDL0YsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBO2NBQUlJLFNBQVMsRUFBQztZQUFJLEdBQUU4QixXQUFXLENBQU0sQ0FDN0IsRUFDVG5HLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsRUFBRyxFQUNuQ3JFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBZSxHQUM3QnJFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxxQkFBYyxFQUNkakUsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLGVBQU9tQyxLQUFLLENBQVEsQ0FDZixFQUNOcEcsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFpQixFQUFHLEVBQ25DckUsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLENBQUNpQixpQkFBQSxDQUFBcUIsZ0JBQWdCLE9BQUcsRUFDcEJ2RyxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWlCLEVBQUcsRUFDbkNyRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ2tCLGNBQUEsQ0FBQXFCLGFBQWEsT0FBRyxFQUNqQnhHLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsRUFBRyxFQUNuQ3JFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxDQUFDbUIsTUFBQSxDQUFBNUIsYUFBYSxPQUFHLEVBQ2pCeEQsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFpQixFQUFHLEVBRWxDeEQsS0FBSyxDQUFDOEUsYUFBYSxJQUNuQjNGLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxDQUFDYyxXQUFBLENBQUEwQixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLE9BQU8sRUFBRWxFLFFBQVE7Y0FBRW1FLE9BQU8sRUFBRS9GLEtBQUssQ0FBQzJCO1lBQUksR0FDOURpQixLQUFLLENBQUNqQixJQUFJLENBRVosQ0FDYyxDQUNTLENBQ3hCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBLElBQUF4QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEcsS0FBQSxHQUFBNUcsT0FBQTtVQUNBLElBQUFxRCxRQUFBLEdBQUFyRCxPQUFBO1VBQ0EsSUFBQXNELE1BQUEsR0FBQXRELE9BQUE7VUFFTSxTQUFVc0csZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FBRTlDLEtBQUs7Y0FBRTVDO1lBQUssQ0FBRSxHQUFHLElBQUF5QyxRQUFBLENBQUFoRCxpQkFBaUIsR0FBRTtZQUU1QyxNQUFNLENBQUM0QixRQUFRLEVBQUU0RSxXQUFXLENBQUMsR0FBRzlHLE1BQUEsQ0FBQUksT0FBSyxDQUFDd0QsUUFBUSxDQUFDL0MsS0FBSyxDQUFDcUIsUUFBUSxDQUFDO1lBRTlELElBQUFxQixNQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDaEQsS0FBSyxDQUFDLEVBQUUsTUFBTWlHLFdBQVcsQ0FBQ2pHLEtBQUssQ0FBQ3FCLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELE1BQU02RSxZQUFZLEdBQUdoRCxLQUFLLElBQUc7Y0FDNUJsRCxLQUFLLENBQUNxQixRQUFRLEdBQUc2QixLQUFLLENBQUNpRCxNQUFNLENBQUN0RCxLQUFLO1lBQ3BDLENBQUM7WUFDRCxPQUNDMUQsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLENBQUFqRSxNQUFBLENBQUFJLE9BQUEsQ0FBQThELFFBQUEsUUFDQ2xFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxhQUFLUixLQUFLLENBQUN2QixRQUFRLENBQU0sRUFDekJsQyxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUE7Y0FBU0ksU0FBUyxFQUFDO1lBQW1CLEdBQ3JDckUsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLENBQUM0QyxLQUFBLENBQUFJLEtBQUs7Y0FDTEMsUUFBUSxFQUFFSCxZQUFZO2NBQ3RCSSxPQUFPLEVBQUV0RyxLQUFLLENBQUNxQixRQUFRLEtBQUssSUFBSTtjQUNoQ3NDLElBQUksRUFBQyxVQUFVO2NBQ2ZkLEtBQUssRUFBQyxJQUFJO2NBQ1YwRCxLQUFLLEVBQUM7WUFBUyxFQUNkLEVBQ0ZwSCxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsQ0FBQzRDLEtBQUEsQ0FBQUksS0FBSztjQUNMQyxRQUFRLEVBQUVILFlBQVk7Y0FDdEJJLE9BQU8sRUFBRXRHLEtBQUssQ0FBQ3FCLFFBQVEsS0FBSyxJQUFJO2NBQ2hDc0MsSUFBSSxFQUFDLFVBQVU7Y0FDZmQsS0FBSyxFQUFDLElBQUk7Y0FDVjBELEtBQUssRUFBQztZQUFTLEVBQ2QsRUFDRnBILE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxDQUFDNEMsS0FBQSxDQUFBSSxLQUFLO2NBQ0xDLFFBQVEsRUFBRUgsWUFBWTtjQUN0QkksT0FBTyxFQUFFdEcsS0FBSyxDQUFDcUIsUUFBUSxLQUFLLElBQUk7Y0FDaENzQyxJQUFJLEVBQUMsWUFBWTtjQUNqQmQsS0FBSyxFQUFDLElBQUk7Y0FDVjBELEtBQUssRUFBQztZQUFZLEVBQ2pCLENBQ08sQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBcEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFELFFBQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUE0RyxLQUFBLEdBQUE1RyxPQUFBO1VBRU0sU0FBVXVHLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFL0MsS0FBSztjQUFFNUM7WUFBSyxDQUFFLEdBQUcsSUFBQXlDLFFBQUEsQ0FBQWhELGlCQUFpQixHQUFFO1lBRTVDLE1BQU0sQ0FBQzZHLE9BQU8sRUFBRUUsVUFBVSxDQUFDLEdBQUdySCxNQUFBLENBQUFJLE9BQUssQ0FBQ3dELFFBQVEsQ0FBQy9DLEtBQUssQ0FBQ3dCLGFBQWEsS0FBSyxVQUFVLENBQUM7WUFFaEYsSUFBQWtCLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUNoRCxLQUFLLENBQUMsRUFBRSxNQUFNd0csVUFBVSxDQUFDeEcsS0FBSyxDQUFDd0IsYUFBYSxLQUFLLFVBQVUsQ0FBQyxDQUFDO1lBRXhFLE1BQU02RSxRQUFRLEdBQUduRCxLQUFLLElBQUc7Y0FDeEIsTUFBTUwsS0FBSyxHQUFHN0MsS0FBSyxDQUFDd0IsYUFBYSxLQUFLLFVBQVUsR0FBRyxRQUFRLEdBQUcsVUFBVTtjQUN4RXhCLEtBQUssQ0FBQ3dCLGFBQWEsR0FBR3FCLEtBQUs7Y0FDM0IyRCxVQUFVLENBQUMzRCxLQUFLLEtBQUssVUFBVSxDQUFDO2NBRWhDSyxLQUFLLENBQUN1RCxjQUFjLEVBQUU7WUFDdkIsQ0FBQztZQUVELE9BQ0N0SCxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsQ0FBQWpFLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEQsUUFBQSxRQUNDbEUsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLGFBQUtSLEtBQUssQ0FBQzhELFFBQVEsQ0FBTSxFQUN6QnZILE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBbUIsR0FDckNyRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsQ0FBQzRDLEtBQUEsQ0FBQVcsUUFBUTtjQUFDTixRQUFRLEVBQUVBLFFBQVE7Y0FBRUMsT0FBTyxFQUFFQSxPQUFPO2NBQUUzQyxJQUFJLEVBQUMsT0FBTztjQUFDNEMsS0FBSyxFQUFFM0QsS0FBSyxDQUFDcUM7WUFBUSxFQUFJLENBQzdFLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQTlGLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxRCxRQUFBLEdBQUFyRCxPQUFBO1VBQ0EsSUFBQXdILEtBQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBeUgsV0FBQSxHQUFBekgsT0FBQTtVQUVNLFNBQVUwSCxXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRWxFO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQWhELGlCQUFpQixHQUFFO1lBRXJDLE1BQU1zSCxnQkFBZ0IsR0FBRyxDQUN4QjtjQUNDQyxHQUFHLEVBQUUsd0JBQXdCO2NBQzdCQyxHQUFHLEVBQUUsa0JBQWtCO2NBQ3ZCMUQsS0FBSyxFQUFFWCxLQUFLLENBQUNzRSxXQUFXLENBQUNDLFVBQVUsQ0FBQzVELEtBQUs7Y0FDekM2RCxLQUFLLEVBQUVQLFdBQUEsQ0FBQU0sVUFBVSxDQUFDRSxVQUFVO2NBQzVCQyxLQUFLLEVBQUU7YUFDUCxDQUNEO1lBRUQsT0FDQ25JLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBd0IsR0FDdENyRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsZ0JBQVFSLEtBQUssQ0FBQ3NFLFdBQVcsQ0FBQzNELEtBQUssQ0FBUyxFQUN4Q3BFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBOEIsR0FDM0N1RCxnQkFBZ0IsQ0FBQ1EsR0FBRyxDQUFDLENBQUNDLGVBQWUsRUFBRUMsS0FBSyxLQUM1Q3RJLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxDQUFDd0QsS0FBQSxDQUFBYyxjQUFjO2NBQUNDLEdBQUcsRUFBRUYsS0FBSztjQUFFRCxlQUFlLEVBQUVBLGVBQWU7Y0FBRTVFLEtBQUssRUFBRUE7WUFBSyxFQUMxRSxDQUFDLENBQ0csQ0FDRDtVQUVSOzs7Ozs7Ozs7OztVQzVCQTs7VUFFQWdGLE1BQUEsQ0FBQUMsY0FBQSxDQUFBdkksT0FBQTtZQUNBdUQsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUExRCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBMEksTUFBQSxHQUFBMUksT0FBQTtVQUNBLElBQUEySSxNQUFBLEdBQUEzSSxPQUFBO1VBRUEsSUFBQThFLFdBQUEsR0FBQTlFLE9BQUE7VUFFTyxNQUFNc0ksY0FBYyxHQUFtQ0EsQ0FBQztZQUFFRixlQUFlO1lBQUU1RTtVQUFLLENBQUUsS0FBSTtZQUM1RixNQUFNLENBQUNvRixXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHOUksTUFBQSxDQUFBSSxPQUFLLENBQUN3RCxRQUFRLENBQUN5RSxlQUFlLENBQUNKLEtBQUssQ0FBQztZQUMzRSxNQUFNLENBQUMvRyxJQUFJLEVBQUU2SCxPQUFPLENBQUMsR0FBRy9JLE1BQUEsQ0FBQUksT0FBSyxDQUFDd0QsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU3QyxNQUFNb0YsbUJBQW1CLEdBQUdBLENBQUEsS0FBVztjQUN0Q0QsT0FBTyxDQUFDLENBQUM3SCxJQUFJLENBQUM7WUFDZixDQUFDO1lBRUQsTUFBTStILFdBQVcsR0FBR0EsQ0FBQSxLQUFXO2NBQzlCRixPQUFPLENBQUMsQ0FBQzdILElBQUksQ0FBQztZQUNmLENBQUM7WUFFRCxNQUFNZ0ksU0FBUyxHQUFHQSxDQUFBLEtBQXdCO2NBQ3pDLE9BQ0NsSixNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUE7Z0JBQUtJLFNBQVMsRUFBQztjQUF1QixHQUNyQ3JFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxDQUFDYyxXQUFBLENBQUEwQixNQUFNO2dCQUFDMEMsSUFBSSxFQUFDLEtBQUs7Z0JBQUN6QyxPQUFPLEVBQUMsU0FBUztnQkFBQ0UsT0FBTyxFQUFFb0MsbUJBQW1CO2dCQUFFNUIsS0FBSyxFQUFFaUIsZUFBZSxDQUFDakU7Y0FBSyxFQUFJLENBQzlGO1lBRVIsQ0FBQztZQUVELE1BQU1nRixRQUFRLEdBQUdBLENBQUEsS0FBd0I7Y0FDeEMsTUFBTXZCLEdBQUcsR0FBR1EsZUFBZSxDQUFDUixHQUFHLEdBQUdRLGVBQWUsQ0FBQ1IsR0FBRyxHQUFHUSxlQUFlLENBQUNjLElBQUk7Y0FDNUUsTUFBTXJCLEdBQUcsR0FBR08sZUFBZSxDQUFDUixHQUFHLEdBQUdRLGVBQWUsQ0FBQ1AsR0FBRyxHQUFHTyxlQUFlLENBQUNqRSxLQUFLO2NBRTdFLE9BQ0NwRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUE7Z0JBQUtJLFNBQVMsRUFBQztjQUE2QixHQUMzQ3JFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxDQUFDMEUsTUFBQSxDQUFBVSxLQUFLO2dCQUFDeEIsR0FBRyxFQUFFQSxHQUFHO2dCQUFFQyxHQUFHLEVBQUVBO2NBQUcsRUFBSSxFQUM3QjlILE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQSxlQUFPb0UsZUFBZSxDQUFDakUsS0FBSyxDQUFRLENBQy9CO1lBRVIsQ0FBQztZQUVELE1BQU1rRixPQUFPLEdBQUcsQ0FBQ1QsV0FBVyxHQUFHSyxTQUFTLEdBQUdFLFFBQVE7WUFFbkQsT0FDQ3BKLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsR0FDL0JyRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsQ0FBQ3FGLE9BQU8sT0FBRyxFQUVWcEksSUFBSSxJQUFJbUgsZUFBZSxFQUFFRixLQUFLLElBQzlCbkksTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLENBQUMyRSxNQUFBLENBQUFXLEtBQUs7Y0FBQ3JJLElBQUk7Y0FBQ21ELFNBQVMsRUFBQyxjQUFjO2NBQUNtRixPQUFPLEVBQUVQO1lBQVcsR0FDeERqSixNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUEsd0NBQWtDLENBRW5DLENBQ0k7VUFFUixDQUFDO1VBQUM5RCxPQUFBLENBQUFvSSxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERGLElBQUF2SSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd0osQ0FBQSxHQUFBeEosT0FBQTtVQUVjLFNBQVV5SixXQUFXQSxDQUFDO1lBQUUzRDtVQUFTLENBQUU7WUFDaEQsTUFBTSxDQUFDNEQsR0FBRyxFQUFFQyxNQUFNLENBQUMsR0FBRzVKLE1BQUEsQ0FBQUksT0FBSyxDQUFDd0QsUUFBUSxDQUFTbUMsU0FBUyxDQUFDOEQsUUFBUSxDQUFDO1lBRWhFLE9BQ0M3SixNQUFBLENBQUFJLE9BQUEsQ0FBQTZELGFBQUE7Y0FBU0ksU0FBUyxFQUFDO1lBQW9CLEdBQ3JDc0YsR0FBRyxJQUFJM0osTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLENBQUN3RixDQUFBLENBQUFLLFNBQVM7Y0FBQ2pDLEdBQUcsRUFBRThCLEdBQUcsSUFBSSxFQUFFO2NBQUU3QixHQUFHLEVBQUUvQixTQUFTLENBQUNJO1lBQVcsRUFBSSxDQUN4RDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUFuRyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEksTUFBQSxHQUFBMUksT0FBQTtVQUNNLFNBQVU2SixTQUFTQSxDQUFDO1lBQUVqQyxHQUFHO1lBQUVDO1VBQUcsQ0FBRTtZQUNyQyxPQUFPOUgsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxhQUFBLENBQUMwRSxNQUFBLENBQUFVLEtBQUs7Y0FBQ2hGLFNBQVMsRUFBQyxZQUFZO2NBQUN3RCxHQUFHLEVBQUVBLEdBQUc7Y0FBRUMsR0FBRyxFQUFFQTtZQUFHLEVBQUk7VUFDNUQifQ==