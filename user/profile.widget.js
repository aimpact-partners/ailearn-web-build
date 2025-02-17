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
        hash: 949146587,
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
                this.set({
                  language: _core.languages.current
                });
                this.saveChanges();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiX3JvdXRpbmciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiY2xlYXJNb2RlbCIsImJhY2tMaW5rIiwicm91dGluZyIsImJhY2siLCJsb2FkIiwiaGlkZSIsInVuZGVmaW5lZCIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2Vzc2liaWxpdHlNb2RlIiwicmVhY3RpdmVQcm9wcyIsInNldCIsImFjY2Vzc2liaWxpdHkiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiU3RyaW5nIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJzYXZlQ2hhbmdlcyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiQXVkaW9TZXR0aW5ncyIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbklucHV0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYXVkaW8iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGVlZCIsIm5hbWUiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl9hbGVydCIsIlVzZXJDb2lucyIsInVzZXIiLCJjb2lucyIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiQWxlcnQiLCJsYWJlbCIsIl91aSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9jb21wb25lbnRzIiwiX2F1ZGlvIiwiX2NvaW5zIiwiX2xhbmd1YWdlU2VsZWN0b3IiLCJfbW9kZVNlbGVjdGlvbiIsIl9JbWFnZVBpY2tlciIsInNldFJlYWR5Iiwic2V0U3RvcmUiLCJpc1VucHVibGlzaGVkIiwic2V0QWNjZXNzaWJpbHR5IiwiZHlzbGV4aWEiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIk1vZGVTZWxlY3Rpb24iLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInZlcnNpb24iLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2l0ZW0iLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwibWFwIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJpY29uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJvbkNsb3NlIiwiXyIsIkltYWdlUGlja2VyIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2F1ZGlvLnRzeCIsIi90cy92aWV3cy9jb2lucy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaXRlbS50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFVTyxNQUFNQyxjQUFjLEdBQUFDLE9B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