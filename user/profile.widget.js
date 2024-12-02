System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.2.14/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.3.0/wrapper", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.2.14/components/ui", "@aimpact/ailearn-app@0.2.14/config", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.2.14/model/gclassroom", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0214MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0214MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk130Session) {
      dependency_8 = _aimpactChatSdk130Session;
    }, function (_beyondJsReactive1112Model) {
      dependency_9 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Core) {
      dependency_10 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk130Wrapper) {
      dependency_11 = _aimpactChatSdk130Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_12 = _beyondJsKernel019Texts;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_13 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_14 = _pragmateUi100Beta7Alert;
    }, function (_aimpactAilearnApp0214ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0214ComponentsUi;
    }, function (_aimpactAilearnApp0214Config) {
      dependency_16 = _aimpactAilearnApp0214Config;
    }, function (_pragmateUi100Beta7Components) {
      dependency_17 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_18 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp0214ModelGclassroom) {
      dependency_19 = _aimpactAilearnApp0214ModelGclassroom;
    }, function (_pragmateUi100Beta7Image) {
      dependency_20 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_21 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_22 = _pragmateUi100Beta7Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.14"], ["@aimpact/ailearn-app", "0.2.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.14/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/form', dependency_18], ['@aimpact/ailearn-app/model/gclassroom', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/icons', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.2.14/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.14/user/profile.widget');
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
        hash: 4057551973,
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
            hide() {
              _mainLayout.LayoutBroker.overlay = false;
              _mainLayout.LayoutBroker.clearModel();
              _mainLayout.LayoutBroker.backLink = undefined;
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
        hash: 2551620444,
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
            console.log(user.coins);
            if (!user.coins?.assignments?.count && !user.coins?.modules?.count) return null;
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
        hash: 2457513267,
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
                user: _session.sessionWrapper.user,
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
        hash: 253434066,
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
            const onChange = async event => {
              const value = store.accessibility === 'dyslexia' ? 'normal' : 'dyslexia';
              await store.set({
                accessibility: value
              });
              // setChecked(value === 'd	yslexia');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiY2xlYXJNb2RlbCIsImJhY2tMaW5rIiwicm91dGluZyIsImJhY2siLCJsb2FkIiwiaGlkZSIsInVuZGVmaW5lZCIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2Vzc2liaWxpdHlNb2RlIiwicmVhY3RpdmVQcm9wcyIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImFjY2Vzc2liaWxpdHkiLCJpbml0aWFsVmFsdWVzIiwic2F2ZSIsImZldGNoaW5nIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93IiwiX2NvbnRleHQiLCJfaG9va3MiLCJBdWRpb1NldHRpbmdzIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiX2FsZXJ0IiwiVXNlckNvaW5zIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJjb2lucyIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiQWxlcnQiLCJsYWJlbCIsIl91aSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9jb21wb25lbnRzIiwiX2F1ZGlvIiwiX2NvaW5zIiwiX2xhbmd1YWdlU2VsZWN0b3IiLCJfbW9kZVNlbGVjdGlvbiIsIl9JbWFnZVBpY2tlciIsInNldFJlYWR5Iiwic2V0U3RvcmUiLCJpc1VucHVibGlzaGVkIiwic2V0QWNjZXNzaWJpbHR5IiwiZHlzbGV4aWEiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIk1vZGVTZWxlY3Rpb24iLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInZlcnNpb24iLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwic2V0IiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2l0ZW0iLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwibWFwIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJpY29uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJvbkNsb3NlIiwiXyIsIkltYWdlUGlja2VyIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2F1ZGlvLnRzeCIsIi90cy92aWV3cy9jb2lucy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaXRlbS50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFVTyxNQUFNQyxjQUFj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