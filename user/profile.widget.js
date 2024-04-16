System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.1/base", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/model/gclassroom", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
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
    }, function (_beyondJsReact18Widgets111Base) {
      dependency_4 = _beyondJsReact18Widgets111Base;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_8 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_10 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Form) {
      dependency_14 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032ModelGclassroom) {
      dependency_15 = _aimpactAilearnApp0032ModelGclassroom;
    }, function (_pragmateUi011Image) {
      dependency_16 = _pragmateUi011Image;
    }, function (_pragmateUi011Modal) {
      dependency_17 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_18 = _pragmateUi011Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@aimpact/ailearn-app/config', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['pragmate-ui/form', dependency_14], ['@aimpact/ailearn-app/model/gclassroom', dependency_15], ['pragmate-ui/image', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/icons', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "general-layout"
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
        hash: 1256159306,
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
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3123693261,
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2447814056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _config = require("@aimpact/ailearn-app/config");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useProfileContext)();
            return React.createElement("section", null, React.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.profile, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 356268222,
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
          var _header = require("./header");
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, {
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
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
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
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJyZWFkeSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImFjY2Vzc2liaWxpdHkiLCJpbml0aWFsVmFsdWVzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcFdyYXBwZXIiLCJzZXRTZXR0aW5ncyIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJ0ZXh0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiUmVhY3QiLCJfbmF2YmFySGVhZGVyIiwiX2NvbmZpZyIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsInByb2ZpbGUiLCJfdWkiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9zZXNzaW9uIiwiX0ltYWdlUGlja2VyIiwiX2xhbmd1YWdlU2VsZWN0b3IiLCJfbW9kZVNlbGVjdGlvbiIsIl9hdWRpbyIsIl9oZWFkZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInNldEZldGNoaW5nIiwiaXNVbnB1Ymxpc2hlZCIsInNldElzVW5wdWJsaXNoZWQiLCJzZXRBY2Nlc3NpYmlsdHkiLCJkeXNsZXhpYSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIk1vZGVTZWxlY3Rpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibG9hZGluZyIsIm9uQ2xpY2siLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJsYWJlbCIsInNldENoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRNb2RlIiwiQ2hlY2tib3giLCJfaXRlbSIsIl9nY2xhc3Nyb29tIiwiUGVybWlzc2lvbnMiLCJjb25uZWN0aW9uVmFsdWVzIiwic3JjIiwiYWx0IiwicGVybWlzc2lvbnMiLCJnY2xhc3Nyb29tIiwiY2hlY2siLCJhdXRob3JpemVkIiwibW9kYWwiLCJtYXAiLCJjb25uZWN0aW9uVmFsdWUiLCJpbmRleCIsIlBlcm1pc3Npb25JdGVtIiwia2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW1hZ2UiLCJfbW9kYWwiLCJjaGVja2VkSXRlbSIsInNldENoZWNrZWRJdGVtIiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJpY29uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaXRlbS50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVFPLE1BQU1DLGNBQWMsR0FBQUMsT0FBQSxDQUFBRCxjQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBcUIsQ0FBQztVQUNqRSxNQUFNQyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUss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QUVELE1BQU02RixPQUFPLEdBQUcsQ0FBQ1YsV0FBVyxHQUFHTSxTQUFTLEdBQUdFLFFBQVE7WUFFbkQsT0FDQzlKLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsR0FDL0JwRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ2dHLE9BQU8sT0FBRyxFQUVWUixJQUFJLElBQUlWLGVBQWUsRUFBRUYsS0FBSyxJQUM5QjVJLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxDQUFDcUYsTUFBQSxDQUFBWSxLQUFLO2NBQUNULElBQUk7Y0FBQ3BGLFNBQVMsRUFBQyxjQUFjO2NBQUM4RixPQUFPLEVBQUVQO1lBQVcsR0FDeEQzSixNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsd0NBQWtDLENBRW5DLENBQ0k7VUFFUixDQUFDO1VBQUM3RCxPQUFBLENBQUE2SSxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERGLElBQUFoSixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBa0ssQ0FBQSxHQUFBbEssT0FBQTtVQUVjLFNBQVVtSyxXQUFXQSxDQUFDO1lBQUU1RDtVQUFTLENBQUU7WUFDaEQsTUFBTSxDQUFDNkQsR0FBRyxFQUFFQyxNQUFNLENBQUMsR0FBR3RLLE1BQUEsQ0FBQUksT0FBSyxDQUFDdUQsUUFBUSxDQUFTNkMsU0FBUyxDQUFDK0QsUUFBUSxDQUFDO1lBRWhFLE9BQ0N2SyxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUE7Y0FBU0ksU0FBUyxFQUFDO1lBQW9CLEdBQ3JDaUcsR0FBRyxJQUFJckssTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLENBQUNtRyxDQUFBLENBQUFLLFNBQVM7Y0FBQ2xDLEdBQUcsRUFBRStCLEdBQUcsSUFBSSxFQUFFO2NBQUU5QixHQUFHLEVBQUUvQixTQUFTLENBQUNJO1lBQVcsRUFBSSxDQUN4RDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUE1RyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBbUosTUFBQSxHQUFBbkosT0FBQTtVQUNNLFNBQVV1SyxTQUFTQSxDQUFDO1lBQUVsQyxHQUFHO1lBQUVDO1VBQUcsQ0FBRTtZQUNyQyxPQUFPdkksTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLENBQUNvRixNQUFBLENBQUFXLEtBQUs7Y0FBQzNGLFNBQVMsRUFBQyxZQUFZO2NBQUNrRSxHQUFHLEVBQUVBLEdBQUc7Y0FBRUMsR0FBRyxFQUFFQTtZQUFHLEVBQUk7VUFDNUQiLCJpZ25vcmVMaXN0IjpbXX0=