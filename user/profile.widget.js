System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-sdk@1.1.0/core", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/ailearn-app@0.3.26/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.3.26/components/ui", "@aimpact/ailearn-app@0.3.26/config", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.3.26/model/gclassroom", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
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
    }, function (_aimpactAilearnSdk110Core) {
      dependency_4 = _aimpactAilearnSdk110Core;
    }, function (_beyondJsReact18Widgets113Base) {
      dependency_5 = _beyondJsReact18Widgets113Base;
    }, function (_aimpactAilearnApp0326MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0326MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_8 = _aimpactChatSdk141Wrapper;
    }, function (_aimpactReactive001Model) {
      dependency_9 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Core) {
      dependency_10 = _beyondJsKernel019Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_11 = _beyondJsKernel019Texts;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_12 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_aimpactAilearnApp0326ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0326ComponentsUi;
    }, function (_aimpactAilearnApp0326Config) {
      dependency_15 = _aimpactAilearnApp0326Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_16 = _aimpactChatSdk141Session;
    }, function (_pragmateUi100Beta7Components) {
      dependency_17 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_18 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp0326ModelGclassroom) {
      dependency_19 = _aimpactAilearnApp0326ModelGclassroom;
    }, function (_pragmateUi100Beta7Image) {
      dependency_20 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_21 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_22 = _pragmateUi100Beta7Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.26"], ["@aimpact/ailearn-app", "0.3.26"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.26/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@aimpact/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/form', dependency_18], ['@aimpact/ailearn-app/model/gclassroom', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/icons', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.3.26/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.26/user/profile.widget');
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
        hash: 2173183130,
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
        hash: 608674350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _model = require("@aimpact/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _render = require("@beyond-js/widgets/render");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            constructor() {
              super({
                properties: ['language', 'accessibility', 'audioSpeed']
              });
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.on('change', this.triggerEvent);
              const audioSpeed = [null, undefined, 'undefined'].includes(localStorage.getItem('aimpact.audio.speed')) ? 1 : parseFloat(localStorage.getItem('aimpact.audio.speed'));
              const accessibilityMode = ['dyslexia', 'normal'].includes(localStorage.getItem('aimpact.chat.accessibility')) ? localStorage.getItem('aimpact.chat.accessibility') : 'normal';
              this.reactiveProps(['language', 'accessibility', 'audioSpeed']);
              super.ready = true;
              this.set({
                accessibility: accessibilityMode,
                language: _core.languages.current,
                audioSpeed: audioSpeed
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
                this.saveChanges();
                this.fetching = false;
              }, 1000);
              return true;
            };
            async isReady() {
              const promise = new _core.PendingPromise();
              if (this.ready) {
                promise.resolve(true);
              } else {
                const onChange = () => {
                  if (this.ready) {
                    this.#texts.off('change', onChange);
                    this.#globalTexts.off('change', onChange);
                    promise.resolve(true);
                  }
                };
                this.#texts.on('change', onChange);
                this.#globalTexts.on('change', onChange);
              }
              return promise;
            }
            async load() {
              await this.isReady();
              _mainLayout.LayoutBroker.set({
                overlay: true,
                language: _core.languages.current,
                breadcrumb: [[this.globalTexts.entities.profile]]
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImNsZWFyTW9kZWwiLCJiYWNrTGluayIsInVuZGVmaW5lZCIsIl93cmFwcGVyIiwiX21vZGVsIiwiX2NvcmUiLCJfdGV4dHMiLCJfcmVuZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImdsb2JhbFRleHRzIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJhdWRpb1NwZWVkIiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VGbG9hdCIsImFjY2Vzc2liaWxpdHlNb2RlIiwicmVhY3RpdmVQcm9wcyIsInNldCIsImFjY2Vzc2liaWxpdHkiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJnbG9iYWxUaGlzIiwic2F2ZSIsImZldGNoaW5nIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIlN0cmluZyIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInNhdmVDaGFuZ2VzIiwiaXNSZWFkeSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJvbkNoYW5nZSIsIm9mZiIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsInByb2ZpbGUiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25JbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJuYW1lIiwidHlwZSIsIm1heCIsIm1pbiIsInN0ZXAiLCJfYWxlcnQiLCJVc2VyQ29pbnMiLCJ1c2VyIiwiY29pbnMiLCJhc3NpZ25tZW50cyIsImNvdW50IiwibW9kdWxlcyIsIkFsZXJ0IiwibGFiZWwiLCJfdWkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfY29tcG9uZW50cyIsIl9hdWRpbyIsIl9jb2lucyIsIl9sYW5ndWFnZVNlbGVjdG9yIiwiX21vZGVTZWxlY3Rpb24iLCJfSW1hZ2VQaWNrZXIiLCJzZXRSZWFkeSIsInNldFN0b3JlIiwiaXNVbnB1Ymxpc2hlZCIsInNldEFjY2Vzc2liaWx0eSIsImR5c2xleGlhIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkxhbmd1YWdlU2VsZWN0b3IiLCJNb2RlU2VsZWN0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ2ZXJzaW9uIiwiX2Zvcm0iLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIlJhZGlvIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRNb2RlIiwiQ2hlY2tib3giLCJfaXRlbSIsIl9nY2xhc3Nyb29tIiwiUGVybWlzc2lvbnMiLCJjb25uZWN0aW9uVmFsdWVzIiwic3JjIiwiYWx0IiwicGVybWlzc2lvbnMiLCJnY2xhc3Nyb29tIiwiY2hlY2siLCJhdXRob3JpemVkIiwibW9kYWwiLCJtYXAiLCJjb25uZWN0aW9uVmFsdWUiLCJpbmRleCIsIlBlcm1pc3Npb25JdGVtIiwia2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW1hZ2UiLCJfbW9kYWwiLCJjaGVja2VkSXRlbSIsInNldENoZWNrZWRJdGVtIiwic2V0U2hvdyIsImhhbmRsZVZpbmN1bGFyQ2xpY2siLCJoYW5kbGVNb2RhbCIsImFkZEJ1dHRvbiIsImljb24iLCJhZGRMYWJlbCIsIkltYWdlIiwiQ29udHJvbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2Utc2VsZWN0b3IvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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