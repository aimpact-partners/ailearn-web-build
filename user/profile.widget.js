System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat-sdk@1.4.1/wrapper", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.3.1/model/gclassroom", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReact18Widgets113Base) {
      dependency_5 = _beyondJsReact18Widgets113Base;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk141Session) {
      dependency_8 = _aimpactChatSdk141Session;
    }, function (_aimpactReactive001Model) {
      dependency_9 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Core) {
      dependency_10 = _beyondJsKernel019Core;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_11 = _aimpactChatSdk141Wrapper;
    }, function (_beyondJsKernel019Texts) {
      dependency_12 = _beyondJsKernel019Texts;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_14 = _pragmateUi100Beta7Alert;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_15 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031Config) {
      dependency_16 = _aimpactAilearnApp031Config;
    }, function (_pragmateUi100Beta7Components) {
      dependency_17 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_18 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp031ModelGclassroom) {
      dependency_19 = _aimpactAilearnApp031ModelGclassroom;
    }, function (_pragmateUi100Beta7Image) {
      dependency_20 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_21 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_22 = _pragmateUi100Beta7Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/form', dependency_18], ['@aimpact/ailearn-app/model/gclassroom', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/icons', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/user/profile.widget');
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
        hash: 4197993580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _render = require("@beyond-js/widgets/render");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super({
                properties: ['language', 'accessibility', 'audioSpeed']
              });
              this.#texts.on('change', this.triggerEvent);
              const audioSpeed = [null, undefined, 'undefined'].includes(localStorage.getItem('aimpact.audio.speed')) ? 1 : localStorage.getItem('aimpact.audio.speed');
              const accessibilityMode = ['dyslexia', 'normal'].includes(localStorage.getItem('aimpact.chat.accessibility')) ? localStorage.getItem('aimpact.chat.accessibility') : 'normal';
              this.reactiveProps(['language', 'accessibility', 'audioSpeed']);
              super.ready = true;
              this.set({
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
              localStorage.setItem('aimpact.audio.speed', String(this.audioSpeed));
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
        hash: 139036657,
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
        hash: 2483427521,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiY2xlYXJNb2RlbCIsImJhY2tMaW5rIiwicm91dGluZyIsImJhY2siLCJsb2FkIiwiaGlkZSIsInVuZGVmaW5lZCIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2Vzc2liaWxpdHlNb2RlIiwicmVhY3RpdmVQcm9wcyIsInNldCIsImFjY2Vzc2liaWxpdHkiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiU3RyaW5nIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJpbml0aWFsVmFsdWVzIiwiX2NvbnRleHQiLCJfaG9va3MiLCJBdWRpb1NldHRpbmdzIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiX2FsZXJ0IiwiVXNlckNvaW5zIiwidXNlciIsImNvaW5zIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJBbGVydCIsImxhYmVsIiwiX3VpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiX2NvbXBvbmVudHMiLCJfYXVkaW8iLCJfY29pbnMiLCJfbGFuZ3VhZ2VTZWxlY3RvciIsIl9tb2RlU2VsZWN0aW9uIiwiX0ltYWdlUGlja2VyIiwic2V0UmVhZHkiLCJzZXRTdG9yZSIsImlzVW5wdWJsaXNoZWQiLCJzZXRBY2Nlc3NpYmlsdHkiLCJkeXNsZXhpYSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwiZ2V0UHJvcGVydGllcyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwidmVyc2lvbiIsIl9mb3JtIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJSYWRpbyIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRNb2RlIiwiQ2hlY2tib3giLCJfaXRlbSIsIl9nY2xhc3Nyb29tIiwiUGVybWlzc2lvbnMiLCJjb25uZWN0aW9uVmFsdWVzIiwic3JjIiwiYWx0IiwicGVybWlzc2lvbnMiLCJnY2xhc3Nyb29tIiwiY2hlY2siLCJhdXRob3JpemVkIiwibW9kYWwiLCJtYXAiLCJjb25uZWN0aW9uVmFsdWUiLCJpbmRleCIsIlBlcm1pc3Npb25JdGVtIiwia2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW1hZ2UiLCJfbW9kYWwiLCJjaGVja2VkSXRlbSIsInNldENoZWNrZWRJdGVtIiwic2V0U2hvdyIsImhhbmRsZVZpbmN1bGFyQ2xpY2siLCJoYW5kbGVNb2RhbCIsImFkZEJ1dHRvbiIsImljb24iLCJhZGRMYWJlbCIsIkltYWdlIiwiQ29udHJvbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2Utc2VsZWN0b3IvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVVPLE1BQU1DLGNBQWMsR0FBQUMsT0FBQSxDQUFBRCxjQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBcUIsQ0FBQztVQUNqRSxNQUFNQyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxjQUFjLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYeEUsSUFBQUUsS0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsV0FBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBQ087VUFBVSxNQUNYWSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0scUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSU4sTUFBQSxDQUFBUSxZQUFZLEVBQUU7Y0FFaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUixNQUFBLENBQUFTLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hDLFVBQVUsQ0FBQ0MsVUFBVSxDQUFDLE1BQUs7Z0JBQzFCWCxXQUFBLENBQUFZLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7Z0JBQzNCYixXQUFBLENBQUFZLFlBQVksQ0FBQ0UsVUFBVSxFQUFFO2dCQUN6QmQsV0FBQSxDQUFBWSxZQUFZLENBQUNHLFFBQVEsR0FBRyxNQUFNZCxRQUFBLENBQUFlLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO2NBQzdDLENBQUMsRUFBRSxHQUFHLENBQUM7Y0FFUCxJQUFJLENBQUMsQ0FBQWIsS0FBTSxDQUFDYyxJQUFJLEVBQUU7WUFDbkI7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIbkIsV0FBQSxDQUFBWSxZQUFZLENBQUNDLE9BQU8sR0FBRyxLQUFLO2NBQzVCYixXQUFBLENBQUFZLFlBQVksQ0FBQ0UsVUFBVSxFQUFFO2NBQ3pCZCxXQUFBLENBQUFZLFlBQVksQ0FBQ0csUUFBUSxHQUFHSyxTQUFTO1lBQ2xDOztVQUNBNUIsT0FBQSxDQUFBVSxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JELElBQUFtQixNQUFBLEdBQUEvQixPQUFBO1VBQ0EsSUFBQWdDLEtBQUEsR0FBQWhDLE9BQUE7VUFDQSxJQUFBaUMsT0FBQSxHQUFBakMsT0FBQTtVQUNBLElBQUFrQyxRQUFBLEdBQUFsQyxPQUFBO1VBQ0EsSUFBQVUsV0FBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQW1DLE1BQUEsR0FBQW5DLE9BQUE7VUFDQSxJQUFBb0MsZUFBQSxHQUFBcEMsT0FBQTtVQVFNLE1BQU9nQixZQUFhLFNBQVFlLE1BQUEsQ0FBQU0sYUFBcUI7WUFJdEQsQ0FBQUMsS0FBTSxHQUErQixJQUFJSCxNQUFBLENBQUFJLFlBQVksQ0FBQ0gsZUFBQSxDQUFBSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN2RSxJQUFJSCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFSSxLQUFLO1lBQzFCO1lBQ0EsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ0ssS0FBSztZQUN4QztZQUNBQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUNMQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLFlBQVk7ZUFDdEQsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsTUFBTUMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFbEIsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDbUIsUUFBUSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQ3BHLENBQUMsR0FDREQsWUFBWSxDQUFDQyxPQUFPLENBQUMscUJBQXFCLENBQUM7Y0FFOUMsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUNILFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxHQUMxR0QsWUFBWSxDQUFDQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsR0FDbEQsUUFBUTtjQUVYLElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztjQUMvRCxLQUFLLENBQUNWLEtBQUssR0FBRyxJQUFJO2NBRWxCLElBQUksQ0FBQ1csR0FBRyxDQUFDO2dCQUNSQyxhQUFhLEVBQUVILGlCQUFpQjtnQkFDaENJLFFBQVEsRUFBRXhCLEtBQUEsQ0FBQXlCLFNBQVMsQ0FBQ0MsT0FBTztnQkFDM0JWLFVBQVUsRUFBRSxJQUFJLENBQUNBO2VBQ2pCLENBQUM7Y0FFRjVCLFVBQVUsQ0FBQ04sS0FBSyxHQUFHLElBQUk7WUFDeEI7WUFFQTZDLElBQUksR0FBR0EsQ0FBQSxLQUFLO2NBQ1gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtjQUNwQjVCLEtBQUEsQ0FBQXlCLFNBQVMsQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0YsUUFBUTtjQUVqQyxNQUFNSyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUVoRDdCLFFBQUEsQ0FBQThCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDO2dCQUN0QlYsYUFBYSxFQUFFLElBQUksQ0FBQ0EsYUFBYTtnQkFDakNQLFVBQVUsRUFBRSxJQUFJLENBQUNBLFVBQVU7Z0JBQzNCUSxRQUFRLEVBQUUsSUFBSSxDQUFDQTtlQUNmLENBQUM7Y0FDRnRCLFFBQUEsQ0FBQThCLFVBQVUsQ0FBQ1QsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYTtjQUM3Q3JCLFFBQUEsQ0FBQThCLFVBQVUsQ0FBQ2hCLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVU7Y0FDdkNkLFFBQUEsQ0FBQThCLFVBQVUsQ0FBQ1IsUUFBUSxHQUFHLElBQUksQ0FBQ0EsUUFBUTtjQUNuQ0ssU0FBUyxDQUFDSyxZQUFZLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDWCxhQUFhLENBQUM7Y0FDckVMLFlBQVksQ0FBQ2lCLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUNaLGFBQWEsQ0FBQztjQUN0RUwsWUFBWSxDQUFDaUIsT0FBTyxDQUFDLHFCQUFxQixFQUFFQyxNQUFNLENBQUMsSUFBSSxDQUFDcEIsVUFBVSxDQUFDLENBQUM7Y0FDcEVmLE9BQUEsQ0FBQW9DLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDaEIsYUFBYSxDQUFDO2NBRXJFaUIsTUFBTSxDQUFDbkQsVUFBVSxDQUFDLE1BQUs7Z0JBQ3RCO2dCQUNBVyxLQUFBLENBQUF5QixTQUFTLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNGLFFBQVE7Z0JBQ2pDOUMsV0FBQSxDQUFBWSxZQUFZLENBQUNDLE9BQU8sR0FBRyxJQUFJO2dCQUUzQixJQUFJLENBQUNrRCxhQUFhLENBQUM7a0JBQUVqQixRQUFRLEVBQUV4QixLQUFBLENBQUF5QixTQUFTLENBQUNDO2dCQUFPLENBQUUsQ0FBQztnQkFDbkQsSUFBSSxDQUFDRSxRQUFRLEdBQUcsS0FBSztjQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1IsT0FBTyxJQUFJO1lBQ1osQ0FBQztZQUVEaEMsSUFBSUEsQ0FBQTtjQUNIO1lBQUE7O1VBRUQxQixPQUFBLENBQUFjLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRkQsSUFBQWpCLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUEwRSxRQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJFLE1BQUEsR0FBQTNFLE9BQUE7VUFFTSxTQUFVNEUsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUV0QyxLQUFLO2NBQUV4QjtZQUFLLENBQUUsR0FBRyxJQUFBNEQsUUFBQSxDQUFBckUsaUJBQWlCLEdBQUU7WUFDNUMsTUFBTSxDQUFDcUMsS0FBSyxFQUFFbUMsUUFBUSxDQUFDLEdBQUc5RSxNQUFBLENBQUFJLE9BQUssQ0FBQzJFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBQUgsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ2pFLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkIrRCxRQUFRLENBQUMvRCxLQUFLLENBQUNrQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxDQUFDO1lBRUYsTUFBTWdDLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCbkUsS0FBSyxDQUFDa0MsVUFBVSxHQUFHaUMsS0FBSyxDQUFDQyxhQUFhLENBQUN4QyxLQUFLO1lBQzdDLENBQUM7WUFFRCxPQUNDM0MsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUFwRixNQUFBLENBQUFJLE9BQUEsQ0FBQWlGLFFBQUEsUUFDQ3JGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxnQkFBUTdDLEtBQUssQ0FBQytDLEtBQUssQ0FBQ0MsS0FBSyxDQUFTLEVBQ2xDdkYsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBO2NBQVNJLFNBQVMsRUFBQztZQUFtQyxHQUNyRHhGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQTtjQUFJSyxPQUFPLEVBQUM7WUFBWSxHQUN0QmxELEtBQUssQ0FBQytDLEtBQUssQ0FBQ0ksS0FBSyxFQUVsQjFGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQTtjQUNDekMsS0FBSyxFQUFFNUIsS0FBSyxDQUFDa0MsVUFBVTtjQUN2QjBDLElBQUksRUFBQyxZQUFZO2NBQ2pCVixPQUFPLEVBQUVBLE9BQU87Y0FDaEJXLElBQUksRUFBQyxPQUFPO2NBQ1pDLEdBQUcsRUFBQyxHQUFHO2NBQ1BDLEdBQUcsRUFBQyxNQUFNO2NBQ1ZDLElBQUksRUFBQztZQUFNLEVBQ1YsQ0FDRSxFQUNML0YsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFpQixHQUMvQnhGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxzQkFBaUIsRUFDakJwRixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsc0JBQWlCLEVBQ2pCcEYsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLHNCQUFpQixFQUNqQnBGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxtQkFBYyxFQUNkcEYsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLHNCQUFpQixFQUNqQnBGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxzQkFBaUIsRUFDakJwRixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsc0JBQWlCLEVBQ2pCcEYsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLG1CQUFjLENBQ1QsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUFwRixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUErRixNQUFBLEdBQUEvRixPQUFBO1VBRU0sU0FBVWdHLFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUFFbEYsS0FBSztjQUFFbUY7WUFBSSxDQUFFLEdBQUcsSUFBQXZCLFFBQUEsQ0FBQXJFLGlCQUFpQixHQUFFO1lBQzNDLE1BQU07Y0FBRWlDO1lBQUssQ0FBRSxHQUFHeEIsS0FBSztZQUV2QixJQUFJLENBQUNtRixJQUFJLENBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxLQUFLLElBQUksQ0FBQ0gsSUFBSSxDQUFDQyxLQUFLLEVBQUVHLE9BQU8sRUFBRUQsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUMvRSxPQUNDckcsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUNZLE1BQUEsQ0FBQU8sS0FBSztjQUFDWCxJQUFJLEVBQUMsTUFBTTtjQUFDSixTQUFTLEVBQUM7WUFBd0IsR0FDcER4RixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsYUFBSzdDLEtBQUssQ0FBQzRELEtBQUssQ0FBQ0ssS0FBSyxDQUFNLEVBRTVCeEcsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUF5QixHQUN2Q3hGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBcUIsR0FDbkN4RixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsZUFBTzdDLEtBQUssQ0FBQzRELEtBQUssQ0FBQ0MsV0FBVyxDQUFRLEVBQ3RDcEcsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLGVBQU9jLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUNDLEtBQUssQ0FBUSxDQUN0QyxFQUNOckcsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFxQixHQUNuQ3hGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxlQUFPN0MsS0FBSyxDQUFDNEQsS0FBSyxDQUFDRyxPQUFPLENBQVEsRUFDbEN0RyxNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsZUFBT2MsSUFBSSxDQUFDQyxLQUFLLENBQUNHLE9BQU8sQ0FBQ0QsS0FBSyxDQUFRLENBQ2xDLENBQ0QsQ0FDQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBSSxHQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQXlHLE9BQUEsR0FBQXpHLE9BQUE7VUFDQSxJQUFBMEcsUUFBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUEyRSxNQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTJHLFdBQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUE0RyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTZHLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBOEcsaUJBQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBK0csY0FBQSxHQUFBL0csT0FBQTtVQUNBLElBQUFnSCxZQUFBLEdBQUFoSCxPQUFBO1VBRU87VUFBVSxTQUNSa0IsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQUU7WUFDdEIsTUFBTSxDQUFDNkIsS0FBSyxFQUFFc0UsUUFBUSxDQUFDLEdBQUdsSCxNQUFBLENBQUFJLE9BQUssQ0FBQzJFLFFBQVEsQ0FBQ2hFLEtBQUssQ0FBQzZCLEtBQUssQ0FBQztZQUVyRCxNQUFNLENBQUM7Y0FBRWlCO1lBQVEsQ0FBRSxFQUFFc0QsUUFBUSxDQUFDLEdBQUduSCxNQUFBLENBQUFJLE9BQUssQ0FBQzJFLFFBQVEsQ0FBQztjQUMvQ3FDLGFBQWEsRUFBRXJHLEtBQUssQ0FBQ3FHLGFBQWE7Y0FDbEN2RCxRQUFRLEVBQUU5QyxLQUFLLENBQUM4QzthQUNoQixDQUFDO1lBQ0YsTUFBTSxDQUFDTCxhQUFhLEVBQUU2RCxlQUFlLENBQUMsR0FBR3JILE1BQUEsQ0FBQUksT0FBSyxDQUFDMkUsUUFBUSxDQUFDaEUsS0FBSyxDQUFDeUMsYUFBYSxDQUFDO1lBQzVFLE1BQU07Y0FBRWpCO1lBQUssQ0FBRSxHQUFHeEIsS0FBSztZQUN2QixJQUFBNkQsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ2pFLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJtRyxRQUFRLENBQUNuRyxLQUFLLENBQUM2QixLQUFLLENBQUM7Y0FFckJ1RSxRQUFRLENBQUM7Z0JBQUVDLGFBQWEsRUFBRXJHLEtBQUssQ0FBQ3FHLGFBQWE7Z0JBQUV2RCxRQUFRLEVBQUU5QyxLQUFLLENBQUM4QztjQUFRLENBQUUsQ0FBQztjQUMxRXdELGVBQWUsQ0FBQ3RHLEtBQUssQ0FBQ3VHLFFBQVEsQ0FBQztZQUNoQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUMxRSxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQ3ZCLE1BQU0yRSxTQUFTLEdBQUdaLFFBQUEsQ0FBQWEsY0FBYyxDQUFDdEIsSUFBSSxDQUFDdUIsYUFBYSxFQUFFO1lBRXJELE1BQU07Y0FBRUMsV0FBVztjQUFFQztZQUFLLENBQUUsR0FBR0osU0FBUztZQUV4QyxPQUNDdkgsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUFwRixNQUFBLENBQUFJLE9BQUEsQ0FBQWlGLFFBQUEsUUFDQ3JGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxDQUFDVCxRQUFBLENBQUF6RSxjQUFjLENBQUMwSCxRQUFRO2NBQUNqRixLQUFLLEVBQUU7Z0JBQUV1RCxJQUFJLEVBQUVTLFFBQUEsQ0FBQWEsY0FBYyxDQUFDdEIsSUFBSTtnQkFBRW5GLEtBQUs7Z0JBQUV3QixLQUFLO2dCQUFFc0I7Y0FBUTtZQUFFLEdBQ3BGN0QsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUNxQixHQUFBLENBQUFvQixhQUFhO2NBQUNyQyxTQUFTLEVBQUM7WUFBbUIsR0FDM0N4RixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsZUFDQ3BGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQTtjQUFRSSxTQUFTLEVBQUM7WUFBZ0IsR0FDakN4RixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQzZCLFlBQUEsQ0FBQTdHLE9BQVc7Y0FBQ21ILFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ3JDdkgsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBO2NBQUlJLFNBQVMsRUFBQztZQUFJLEdBQUVrQyxXQUFXLENBQU0sQ0FDN0IsRUFDVDFILE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsRUFBRyxFQUNuQ3hGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxDQUFDMEIsTUFBQSxDQUFBYixTQUFTLE9BQUcsRUFDYmpHLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBZSxHQUM3QnhGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxhQUFLN0MsS0FBSyxDQUFDb0YsS0FBSyxDQUFNLEVBQ3RCM0gsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLGVBQU91QyxLQUFLLENBQVEsQ0FDZixFQUNOM0gsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUMyQixpQkFBQSxDQUFBZSxnQkFBZ0IsT0FBRyxFQUNwQjlILE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxDQUFDNEIsY0FBQSxDQUFBZSxhQUFhLE9BQUcsRUFDakIvSCxNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3lCLE1BQUEsQ0FBQWhDLGFBQWEsT0FBRyxFQUdoQjlELEtBQUssQ0FBQ3FHLGFBQWEsSUFDbkJwSCxNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3dCLFdBQUEsQ0FBQW9CLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ3BFLFFBQVEsRUFBRUEsUUFBUTtjQUFFcUUsT0FBTyxFQUFFbkgsS0FBSyxDQUFDNkM7WUFBSSxHQUMvRHJCLEtBQUssQ0FBQ3FCLElBQUksQ0FFWixDQUNLLEVBQ1A1RCxNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBUUksU0FBUyxFQUFDO1lBQWEsR0FDN0JqRCxLQUFLLENBQUM0RixPQUFPLEUsTUFBSXpCLE9BQUEsQ0FBQXRHLE9BQU0sQ0FBQytILE9BQU8sQ0FDeEIsQ0FDTSxDQUNTLENBQ3hCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEVBLElBQUFuSSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBbUksS0FBQSxHQUFBbkksT0FBQTtVQUNBLElBQUEwRSxRQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJFLE1BQUEsR0FBQTNFLE9BQUE7VUFFTSxTQUFVNkgsZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FBRXZGLEtBQUs7Y0FBRXhCO1lBQUssQ0FBRSxHQUFHLElBQUE0RCxRQUFBLENBQUFyRSxpQkFBaUIsR0FBRTtZQUU1QyxNQUFNLENBQUNtRCxRQUFRLEVBQUU0RSxXQUFXLENBQUMsR0FBR3JJLE1BQUEsQ0FBQUksT0FBSyxDQUFDMkUsUUFBUSxDQUFDaEUsS0FBSyxDQUFDMEMsUUFBUSxDQUFDO1lBRTlELElBQUFtQixNQUFBLENBQUFJLFNBQVMsRUFBQyxDQUFDakUsS0FBSyxDQUFDLEVBQUUsTUFBTXNILFdBQVcsQ0FBQ3RILEtBQUssQ0FBQzBDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELE1BQU02RSxZQUFZLEdBQUdwRCxLQUFLLElBQUc7Y0FDNUJuRSxLQUFLLENBQUMwQyxRQUFRLEdBQUd5QixLQUFLLENBQUNxRCxNQUFNLENBQUM1RixLQUFLO1lBQ3BDLENBQUM7WUFDRCxPQUNDM0MsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUFwRixNQUFBLENBQUFJLE9BQUEsQ0FBQWlGLFFBQUEsUUFDQ3JGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxhQUFLN0MsS0FBSyxDQUFDa0IsUUFBUSxDQUFNLEVBQ3pCekQsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBO2NBQVNJLFNBQVMsRUFBQztZQUFxQyxHQUN2RHhGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxDQUFDZ0QsS0FBQSxDQUFBSSxLQUFLO2NBQ0xDLFFBQVEsRUFBRUgsWUFBWTtjQUN0QkksT0FBTyxFQUFFM0gsS0FBSyxDQUFDMEMsUUFBUSxLQUFLLElBQUk7Y0FDaENrQyxJQUFJLEVBQUMsVUFBVTtjQUNmaEQsS0FBSyxFQUFDLElBQUk7Y0FDVjZELEtBQUssRUFBQztZQUFTLEVBQ2QsRUFDRnhHLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxDQUFDZ0QsS0FBQSxDQUFBSSxLQUFLO2NBQ0xDLFFBQVEsRUFBRUgsWUFBWTtjQUN0QkksT0FBTyxFQUFFM0gsS0FBSyxDQUFDMEMsUUFBUSxLQUFLLElBQUk7Y0FDaENrQyxJQUFJLEVBQUMsVUFBVTtjQUNmaEQsS0FBSyxFQUFDLElBQUk7Y0FDVjZELEtBQUssRUFBQztZQUFTLEVBQ2QsQ0FRTyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUF4RyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMEUsUUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUEyRSxNQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQW1JLEtBQUEsR0FBQW5JLE9BQUE7VUFFTSxTQUFVOEgsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUV4RixLQUFLO2NBQUV4QjtZQUFLLENBQUUsR0FBRyxJQUFBNEQsUUFBQSxDQUFBckUsaUJBQWlCLEdBQUU7WUFFNUMsTUFBTSxDQUFDb0ksT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzNJLE1BQUEsQ0FBQUksT0FBSyxDQUFDMkUsUUFBUSxDQUFDaEUsS0FBSyxDQUFDeUMsYUFBYSxLQUFLLFVBQVUsQ0FBQztZQUVoRixJQUFBb0IsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ2pFLEtBQUssQ0FBQyxFQUFFLE1BQU00SCxVQUFVLENBQUM1SCxLQUFLLENBQUN5QyxhQUFhLEtBQUssVUFBVSxDQUFDLENBQUM7WUFFeEUsTUFBTWlGLFFBQVEsR0FBRyxNQUFNdkQsS0FBSyxJQUFHO2NBQzlCLE1BQU12QyxLQUFLLEdBQUc1QixLQUFLLENBQUN5QyxhQUFhLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxVQUFVO2NBQ3hFLE1BQU16QyxLQUFLLENBQUN3QyxHQUFHLENBQUM7Z0JBQUVDLGFBQWEsRUFBRWI7Y0FBSyxDQUFFLENBQUM7Y0FDekM7Y0FFQXVDLEtBQUssQ0FBQzBELGNBQWMsRUFBRTtZQUN2QixDQUFDO1lBRUQsT0FDQzVJLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxDQUFBcEYsTUFBQSxDQUFBSSxPQUFBLENBQUFpRixRQUFBLFFBQ0NyRixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQW1CLEdBQ2pDeEYsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLGFBQUs3QyxLQUFLLENBQUNzRyxRQUFRLENBQU0sRUFDekI3SSxNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBU0ksU0FBUyxFQUFDO1lBQW1CLEdBQ3JDeEYsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUNnRCxLQUFBLENBQUFVLFFBQVE7Y0FBQ0wsUUFBUSxFQUFFQSxRQUFRO2NBQUVDLE9BQU8sRUFBRUEsT0FBTztjQUFFL0MsSUFBSSxFQUFDLE9BQU87Y0FBQ2EsS0FBSyxFQUFFakUsS0FBSyxDQUFDK0U7WUFBUSxFQUFJLENBQzdFLENBQ0wsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBdEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTBFLFFBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBOEksS0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUErSSxXQUFBLEdBQUEvSSxPQUFBO1VBRU0sU0FBVWdKLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFMUc7WUFBSyxDQUFFLEdBQUcsSUFBQW9DLFFBQUEsQ0FBQXJFLGlCQUFpQixHQUFFO1lBRXJDLE1BQU00SSxnQkFBZ0IsR0FBRyxDQUN4QjtjQUNDQyxHQUFHLEVBQUUsd0JBQXdCO2NBQzdCQyxHQUFHLEVBQUUsa0JBQWtCO2NBQ3ZCN0QsS0FBSyxFQUFFaEQsS0FBSyxDQUFDOEcsV0FBVyxDQUFDQyxVQUFVLENBQUMvRCxLQUFLO2NBQ3pDZ0UsS0FBSyxFQUFFUCxXQUFBLENBQUFNLFVBQVUsQ0FBQ0UsVUFBVTtjQUM1QkMsS0FBSyxFQUFFO2FBQ1AsQ0FDRDtZQUVELE9BQ0N6SixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQXdCLEdBQ3RDeEYsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLGdCQUFRN0MsS0FBSyxDQUFDOEcsV0FBVyxDQUFDOUQsS0FBSyxDQUFTLEVBQ3hDdkYsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUE4QixHQUMzQzBELGdCQUFnQixDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsZUFBZSxFQUFFQyxLQUFLLEtBQzVDNUosTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUMyRCxLQUFBLENBQUFjLGNBQWM7Y0FBQ0MsR0FBRyxFQUFFRixLQUFLO2NBQUVELGVBQWUsRUFBRUEsZUFBZTtjQUFFcEgsS0FBSyxFQUFFQTtZQUFLLEVBQzFFLENBQUMsQ0FDRyxDQUNEO1VBRVI7Ozs7Ozs7Ozs7O1VDNUJBOztVQUVBd0gsTUFBQSxDQUFBQyxjQUFBLENBQUE3SixPQUFBO1lBQ0F3QyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTNDLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFnSyxNQUFBLEdBQUFoSyxPQUFBO1VBQ0EsSUFBQWlLLE1BQUEsR0FBQWpLLE9BQUE7VUFFQSxJQUFBMkcsV0FBQSxHQUFBM0csT0FBQTtVQUVPLE1BQU00SixjQUFjLEdBQW1DQSxDQUFDO1lBQUVGLGVBQWU7WUFBRXBIO1VBQUssQ0FBRSxLQUFJO1lBQzVGLE1BQU0sQ0FBQzRILFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdwSyxNQUFBLENBQUFJLE9BQUssQ0FBQzJFLFFBQVEsQ0FBQzRFLGVBQWUsQ0FBQ0osS0FBSyxDQUFDO1lBQzNFLE1BQU0sQ0FBQ25JLElBQUksRUFBRWlKLE9BQU8sQ0FBQyxHQUFHckssTUFBQSxDQUFBSSxPQUFLLENBQUMyRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTdDLE1BQU11RixtQkFBbUIsR0FBR0EsQ0FBQSxLQUFXO2NBQ3RDRCxPQUFPLENBQUMsQ0FBQ2pKLElBQUksQ0FBQztZQUNmLENBQUM7WUFFRCxNQUFNbUosV0FBVyxHQUFHQSxDQUFBLEtBQVc7Y0FDOUJGLE9BQU8sQ0FBQyxDQUFDakosSUFBSSxDQUFDO1lBQ2YsQ0FBQztZQUVELE1BQU1vSixTQUFTLEdBQUdBLENBQUEsS0FBd0I7Y0FDekMsT0FDQ3hLLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQTtnQkFBS0ksU0FBUyxFQUFDO2NBQXVCLEdBQ3JDeEYsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUN3QixXQUFBLENBQUFvQixNQUFNO2dCQUFDeUMsSUFBSSxFQUFDLEtBQUs7Z0JBQUN4QyxPQUFPLEVBQUMsU0FBUztnQkFBQ0MsT0FBTyxFQUFFb0MsbUJBQW1CO2dCQUFFOUQsS0FBSyxFQUFFbUQsZUFBZSxDQUFDcEU7Y0FBSyxFQUFJLENBQzlGO1lBRVIsQ0FBQztZQUVELE1BQU1tRixRQUFRLEdBQUdBLENBQUEsS0FBd0I7Y0FDeEMsTUFBTXZCLEdBQUcsR0FBR1EsZUFBZSxDQUFDUixHQUFHLEdBQUdRLGVBQWUsQ0FBQ1IsR0FBRyxHQUFHUSxlQUFlLENBQUNjLElBQUk7Y0FDNUUsTUFBTXJCLEdBQUcsR0FBR08sZUFBZSxDQUFDUixHQUFHLEdBQUdRLGVBQWUsQ0FBQ1AsR0FBRyxHQUFHTyxlQUFlLENBQUNwRSxLQUFLO2NBRTdFLE9BQ0N2RixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUE7Z0JBQUtJLFNBQVMsRUFBQztjQUE2QixHQUMzQ3hGLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxDQUFDNkUsTUFBQSxDQUFBVSxLQUFLO2dCQUFDeEIsR0FBRyxFQUFFQSxHQUFHO2dCQUFFQyxHQUFHLEVBQUVBO2NBQUcsRUFBSSxFQUM3QnBKLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQSxlQUFPdUUsZUFBZSxDQUFDcEUsS0FBSyxDQUFRLENBQy9CO1lBRVIsQ0FBQztZQUVELE1BQU1xRixPQUFPLEdBQUcsQ0FBQ1QsV0FBVyxHQUFHSyxTQUFTLEdBQUdFLFFBQVE7WUFFbkQsT0FDQzFLLE1BQUEsQ0FBQUksT0FBQSxDQUFBZ0YsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsR0FDL0J4RixNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsQ0FBQ3dGLE9BQU8sT0FBRyxFQUVWeEosSUFBSSxJQUFJdUksZUFBZSxFQUFFRixLQUFLLElBQzlCekosTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUM4RSxNQUFBLENBQUFXLEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRTFKLElBQUk7Y0FBQ29FLFNBQVMsRUFBQyxjQUFjO2NBQUN1RixPQUFPLEVBQUVSO1lBQVcsR0FDOUV2SyxNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUEsd0NBQWtDLENBRW5DLENBQ0k7VUFFUixDQUFDO1VBQUNqRixPQUFBLENBQUEwSixjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERGLElBQUE3SixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBK0ssQ0FBQSxHQUFBL0ssT0FBQTtVQUVjLFNBQVVnTCxXQUFXQSxDQUFDO1lBQUUxRDtVQUFTLENBQUU7WUFDaEQsTUFBTSxDQUFDMkQsR0FBRyxFQUFFQyxNQUFNLENBQUMsR0FBR25MLE1BQUEsQ0FBQUksT0FBSyxDQUFDMkUsUUFBUSxDQUFTd0MsU0FBUyxDQUFDNkQsUUFBUSxDQUFDO1lBRWhFLE9BQ0NwTCxNQUFBLENBQUFJLE9BQUEsQ0FBQWdGLGFBQUE7Y0FBU0ksU0FBUyxFQUFDO1lBQW9CLEdBQ3JDMEYsR0FBRyxJQUFJbEwsTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUM0RixDQUFBLENBQUFLLFNBQVM7Y0FBQ2xDLEdBQUcsRUFBRStCLEdBQUcsSUFBSSxFQUFFO2NBQUU5QixHQUFHLEVBQUU3QixTQUFTLENBQUNHO1lBQVcsRUFBSSxDQUN4RDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUExSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0ssTUFBQSxHQUFBaEssT0FBQTtVQUNNLFNBQVVvTCxTQUFTQSxDQUFDO1lBQUVsQyxHQUFHO1lBQUVDO1VBQUcsQ0FBRTtZQUNyQyxPQUFPcEosTUFBQSxDQUFBSSxPQUFBLENBQUFnRixhQUFBLENBQUM2RSxNQUFBLENBQUFVLEtBQUs7Y0FBQ25GLFNBQVMsRUFBQyxZQUFZO2NBQUMyRCxHQUFHLEVBQUVBLEdBQUc7Y0FBRUMsR0FBRyxFQUFFQTtZQUFHLEVBQUk7VUFDNUQiLCJpZ25vcmVMaXN0IjpbXX0=