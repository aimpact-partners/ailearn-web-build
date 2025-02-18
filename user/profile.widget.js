System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/config", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.3.1/model/gclassroom", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_14 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031Config) {
      dependency_15 = _aimpactAilearnApp031Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_16 = _aimpactChatSdk141Session;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@aimpact/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/form', dependency_18], ['@aimpact/ailearn-app/model/gclassroom', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/icons', dependency_22]]);
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
        hash: 3295618063,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImNsZWFyTW9kZWwiLCJiYWNrTGluayIsInVuZGVmaW5lZCIsIl93cmFwcGVyIiwiX21vZGVsIiwiX2NvcmUiLCJfdGV4dHMiLCJfcmVuZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImdsb2JhbFRleHRzIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJhdWRpb1NwZWVkIiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJyZWFjdGl2ZVByb3BzIiwic2V0IiwiYWNjZXNzaWJpbGl0eSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImdsb2JhbFRoaXMiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHBXcmFwcGVyIiwic2V0U2V0dGluZ3MiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiU3RyaW5nIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2F2ZUNoYW5nZXMiLCJpc1JlYWR5IiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIm9uQ2hhbmdlIiwib2ZmIiwiYnJlYWRjcnVtYiIsImVudGl0aWVzIiwicHJvZmlsZSIsIl9jb250ZXh0IiwiX2hvb2tzIiwiQXVkaW9TZXR0aW5ncyIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbklucHV0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYXVkaW8iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGVlZCIsIm5hbWUiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl9hbGVydCIsIlVzZXJDb2lucyIsInVzZXIiLCJjb2lucyIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiQWxlcnQiLCJsYWJlbCIsIl91aSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9jb21wb25lbnRzIiwiX2F1ZGlvIiwiX2NvaW5zIiwiX2xhbmd1YWdlU2VsZWN0b3IiLCJfbW9kZVNlbGVjdGlvbiIsIl9JbWFnZVBpY2tlciIsInNldFJlYWR5Iiwic2V0U3RvcmUiLCJpc1VucHVibGlzaGVkIiwic2V0QWNjZXNzaWJpbHR5IiwiZHlzbGV4aWEiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIk1vZGVTZWxlY3Rpb24iLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInZlcnNpb24iLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInByZXZlbnREZWZhdWx0IiwidGV4dE1vZGUiLCJDaGVja2JveCIsIl9pdGVtIiwiX2djbGFzc3Jvb20iLCJQZXJtaXNzaW9ucyIsImNvbm5lY3Rpb25WYWx1ZXMiLCJzcmMiLCJhbHQiLCJwZXJtaXNzaW9ucyIsImdjbGFzc3Jvb20iLCJjaGVjayIsImF1dGhvcml6ZWQiLCJtb2RhbCIsIm1hcCIsImNvbm5lY3Rpb25WYWx1ZSIsImluZGV4IiwiUGVybWlzc2lvbkl0ZW0iLCJrZXkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbWFnZSIsIl9tb2RhbCIsImNoZWNrZWRJdGVtIiwic2V0Q2hlY2tlZEl0ZW0iLCJzZXRTaG93IiwiaGFuZGxlVmluY3VsYXJDbGljayIsImhhbmRsZU1vZGFsIiwiYWRkQnV0dG9uIiwiaWNvbiIsImFkZExhYmVsIiwiSW1hZ2UiLCJDb250cm9sIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwib25DbG9zZSIsIl8iLCJJbWFnZVBpY2tlciIsImltZyIsInNldEltZyIsInBob3RvVVJMIiwiVXNlckltYWdlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hdWRpby50c3giLCIvdHMvdmlld3MvY29pbnMudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kZS1zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvSW1hZ2VQaWNrZXIudHN4IiwiL3RzL3ZpZXdzL3Byb2ZpbGUtaW1hZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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