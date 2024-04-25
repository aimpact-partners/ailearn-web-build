System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/model/gclassroom", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_4 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/form', dependency_13], ['@aimpact/ailearn-app/model/gclassroom', dependency_14], ['pragmate-ui/image', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17]]);
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
        hash: 1541119634,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useProfileContext)();
            return React.createElement("section", null, React.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.profile, '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJyZWFkeSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImFjY2Vzc2liaWxpdHkiLCJpbml0aWFsVmFsdWVzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcFdyYXBwZXIiLCJzZXRTZXR0aW5ncyIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJ0ZXh0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiUmVhY3QiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInByb2ZpbGUiLCJfdWkiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9zZXNzaW9uIiwiX0ltYWdlUGlja2VyIiwiX2xhbmd1YWdlU2VsZWN0b3IiLCJfbW9kZVNlbGVjdGlvbiIsIl9hdWRpbyIsIl9oZWFkZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInNldEZldGNoaW5nIiwiaXNVbnB1Ymxpc2hlZCIsInNldElzVW5wdWJsaXNoZWQiLCJzZXRBY2Nlc3NpYmlsdHkiLCJkeXNsZXhpYSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIk1vZGVTZWxlY3Rpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibG9hZGluZyIsIm9uQ2xpY2siLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJsYWJlbCIsInNldENoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRNb2RlIiwiQ2hlY2tib3giLCJfaXRlbSIsIl9nY2xhc3Nyb29tIiwiUGVybWlzc2lvbnMiLCJjb25uZWN0aW9uVmFsdWVzIiwic3JjIiwiYWx0IiwicGVybWlzc2lvbnMiLCJnY2xhc3Nyb29tIiwiY2hlY2siLCJhdXRob3JpemVkIiwibW9kYWwiLCJtYXAiLCJjb25uZWN0aW9uVmFsdWUiLCJpbmRleCIsIlBlcm1pc3Npb25JdGVtIiwia2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW1hZ2UiLCJfbW9kYWwiLCJjaGVja2VkSXRlbSIsInNldENoZWNrZWRJdGVtIiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJpY29uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaXRlbS50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFRTyxNQUFNQyxjQUFjLEdBQUFDLE9BQUEsQ0FBQUQsY0FBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFDakUsTUFBTUMsaUJBQWlCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsY0FBYyxDQUFDO1VBQUND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