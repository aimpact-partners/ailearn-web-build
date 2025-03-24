System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/ailearn-sdk@1.1.0/core", "@beyond-js/react-18-widgets@1.1.3/base", "@aimpact/ailearn-app@0.3.29/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.4.1/wrapper", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.4.1/voice", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.3.29/components/ui", "@aimpact/ailearn-app@0.3.29/config", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.29/model/gclassroom", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0329MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0329MainLayoutWidget;
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
    }, function (_aimpactChatSdk141Voice) {
      dependency_12 = _aimpactChatSdk141Voice;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_14 = _pragmateUi100Beta7Alert;
    }, function (_aimpactAilearnApp0329ComponentsUi) {
      dependency_15 = _aimpactAilearnApp0329ComponentsUi;
    }, function (_aimpactAilearnApp0329Config) {
      dependency_16 = _aimpactAilearnApp0329Config;
    }, function (_aimpactChatSdk141Session) {
      dependency_17 = _aimpactChatSdk141Session;
    }, function (_pragmateUi100Beta7Components) {
      dependency_18 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_19 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_20 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0329ModelGclassroom) {
      dependency_21 = _aimpactAilearnApp0329ModelGclassroom;
    }, function (_pragmateUi100Beta7Image) {
      dependency_22 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_23 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/kernel", "0.1.9"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.29"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.29/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@aimpact/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/chat-sdk/voice', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/icons', dependency_20], ['@aimpact/ailearn-app/model/gclassroom', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.3.29/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.29/user/profile.widget');
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
        hash: 1673194949,
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
          var _voice = require("@aimpact/chat-sdk/voice");
          //@ts-ignore

          class StoreManager extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get supportedLanguages() {
              return [..._wrapper.AppWrapper.languages.supported.keys()];
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            #voices = _voice.voiceManager;
            get voices() {
              return this.#voices;
            }
            selectedVoices = new Map();
            get unpublished() {
              if (super.unpublished) return true;
              // Verificar si alguna voz seleccionada es diferente a la voz por defecto
              for (const language of this.supportedLanguages) {
                const selectedVoice = this.selectedVoices.get(language);
                const defaultVoice = this.voices.getDefault(language)?.name;
                if (selectedVoice && selectedVoice !== defaultVoice) return true;
              }
              return false;
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
              this.saveChanges();
              globalThis.store = this;
            }
            save = () => {
              this.fetching = true;
              _core.languages.current = this.language;
              const container = document.querySelector('html');
              // Guardar las voces seleccionadas si han cambiado
              const defaultVoices = {};
              let hasVoiceChanges = false;
              this.supportedLanguages.forEach(lang => {
                const selectedVoice = this.selectedVoices.get(lang);
                const defaultVoice = this.voices.getDefault(lang)?.name;
                if (selectedVoice && selectedVoice !== defaultVoice) {
                  defaultVoices[lang] = selectedVoice;
                  hasVoiceChanges = true;
                }
              });
              if (hasVoiceChanges) {
                this.voices.setDefaults(defaultVoices);
              }
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
              await this.#voices.ready();
              // Inicializar las voces por defecto para cada idioma soportado
              this.supportedLanguages.forEach(lang => {
                this.selectedVoices.set(lang, this.voices.getDefault(lang).name);
              });
              _mainLayout.LayoutBroker.set({
                overlay: true,
                language: _core.languages.current,
                breadcrumb: [[this.globalTexts.entities.profile]]
              });
            }
            getSelectedVoice(language) {
              return this.selectedVoices.get(language) || this.voices.getDefault(language).name;
            }
            setSelectedVoice(language, voiceName) {
              this.selectedVoices.set(language, voiceName);
              this.triggerEvent();
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
        hash: 3810338301,
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
          var _languages = require("./languages");
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
            }, _react.default.createElement("h5", null, texts.email), _react.default.createElement("span", null, email)), _react.default.createElement(_languageSelector.LanguageSelector, null), _react.default.createElement(_modeSelection.ModeSelection, null), _react.default.createElement(_audio.AudioSettings, null), _react.default.createElement(_languages.AudioLanguages, null), store.isUnpublished && _react.default.createElement(_components.Button, {
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

      /***************************************
      INTERNAL MODULE: ./views/languages/index
      ***************************************/

      ims.set('./views/languages/index', {
        hash: 979961709,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioLanguages = AudioLanguages;
          var _react = require("react");
          var _context = require("../../context");
          var _item = require("./item");
          function AudioLanguages() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [playing, setPlaying] = _react.default.useState(null);
            const onChange = (language, isActive) => {
              setPlaying(isActive ? language : null);
            };
            const languages = store.supportedLanguages.map(item => {
              const disabled = playing !== null && playing !== item;
              return _react.default.createElement(_item.AudioLanguageItem, {
                key: `language-${item}`,
                language: item,
                disabled: disabled,
                onChange: isActive => onChange(item, isActive)
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.audio.voices.label), languages);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/languages/item
      **************************************/

      ims.set('./views/languages/item', {
        hash: 221787218,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioLanguageItem = AudioLanguageItem;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          function AudioLanguageItem({
            language,
            disabled,
            onChange
          }) {
            const {
              store,
              texts
            } = (0, _context.useProfileContext)();
            const globalTexts = store.globalTexts;
            const [isPlaying, setIsPlaying] = _react.default.useState(false);
            const handleVoiceChange = event => {
              store.setSelectedVoice(language, event.target.value);
            };
            const sampleTexts = {
              en: 'Hello! This is RVD.AI, your educational assistant.',
              es: '¡Hola! Soy RVD.AI, tu asistente educativo.'
            };
            const onClick = () => {
              if (isPlaying) {
                globalThis.speechSynthesis.cancel();
                setIsPlaying(false);
                onChange(false);
                return;
              }
              const utterance = new SpeechSynthesisUtterance(sampleTexts[language]);
              const selectedVoice = store.getSelectedVoice(language);
              const voice = store.voices.byLang(language).find(v => v.name === selectedVoice);
              if (voice) {
                utterance.voice = voice;
                utterance.lang = voice.lang;
                utterance.onend = () => {
                  setIsPlaying(false);
                  onChange(false);
                };
                utterance.onstart = () => {
                  setIsPlaying(true);
                  onChange(true);
                };
                window.speechSynthesis.speak(utterance);
              }
            };
            return _react.default.createElement("div", {
              className: "language__container"
            }, _react.default.createElement("div", {
              className: "language-name__container"
            }, _react.default.createElement("h5", null, globalTexts.languages[language].name), _react.default.createElement("div", {
              className: "language-name__field"
            }, _react.default.createElement("select", {
              value: store.getSelectedVoice(language),
              onChange: handleVoiceChange
            }, store.voices.byLang(language).map(voice => _react.default.createElement("option", {
              key: `voice-${voice.voiceURI}`,
              value: voice.name
            }, voice.name))), _react.default.createElement(_icons.IconButton, {
              icon: isPlaying ? 'stop' : 'play',
              onClick: onClick,
              disabled: disabled
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImNsZWFyTW9kZWwiLCJiYWNrTGluayIsInVuZGVmaW5lZCIsIl93cmFwcGVyIiwiX21vZGVsIiwiX2NvcmUiLCJfdGV4dHMiLCJfcmVuZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJBcHBXcmFwcGVyIiwibGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwia2V5cyIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJ2b2ljZXMiLCJ2b2ljZU1hbmFnZXIiLCJzZWxlY3RlZFZvaWNlcyIsIk1hcCIsInVucHVibGlzaGVkIiwibGFuZ3VhZ2UiLCJzZWxlY3RlZFZvaWNlIiwiZ2V0IiwiZGVmYXVsdFZvaWNlIiwiZ2V0RGVmYXVsdCIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJvbiIsInRyaWdnZXJFdmVudCIsImF1ZGlvU3BlZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUZsb2F0IiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJyZWFjdGl2ZVByb3BzIiwic2V0IiwiYWNjZXNzaWJpbGl0eSIsImN1cnJlbnQiLCJzYXZlQ2hhbmdlcyIsImdsb2JhbFRoaXMiLCJzYXZlIiwiZmV0Y2hpbmciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZWZhdWx0Vm9pY2VzIiwiaGFzVm9pY2VDaGFuZ2VzIiwiZm9yRWFjaCIsImxhbmciLCJzZXREZWZhdWx0cyIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIlN0cmluZyIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsImlzUmVhZHkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25DaGFuZ2UiLCJvZmYiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJwcm9maWxlIiwiZ2V0U2VsZWN0ZWRWb2ljZSIsInNldFNlbGVjdGVkVm9pY2UiLCJ2b2ljZU5hbWUiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25JbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl9hbGVydCIsIlVzZXJDb2lucyIsInVzZXIiLCJjb2lucyIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiQWxlcnQiLCJsYWJlbCIsIl91aSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9jb21wb25lbnRzIiwiX2F1ZGlvIiwiX2NvaW5zIiwiX2xhbmd1YWdlU2VsZWN0b3IiLCJfbW9kZVNlbGVjdGlvbiIsIl9JbWFnZVBpY2tlciIsIl9sYW5ndWFnZXMiLCJzZXRSZWFkeSIsInNldFN0b3JlIiwiaXNVbnB1Ymxpc2hlZCIsInNldEFjY2Vzc2liaWx0eSIsImR5c2xleGlhIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkxhbmd1YWdlU2VsZWN0b3IiLCJNb2RlU2VsZWN0aW9uIiwiQXVkaW9MYW5ndWFnZXMiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInZlcnNpb24iLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJjaGVja2VkIiwiX2l0ZW0iLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImlzQWN0aXZlIiwibWFwIiwiaXRlbSIsImRpc2FibGVkIiwiQXVkaW9MYW5ndWFnZUl0ZW0iLCJrZXkiLCJfaWNvbnMiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJoYW5kbGVWb2ljZUNoYW5nZSIsInNhbXBsZVRleHRzIiwiZW4iLCJlcyIsInNwZWVjaFN5bnRoZXNpcyIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsInZvaWNlIiwiYnlMYW5nIiwiZmluZCIsInYiLCJvbmVuZCIsIm9uc3RhcnQiLCJzcGVhayIsInZvaWNlVVJJIiwiSWNvbkJ1dHRvbiIsImljb24iLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2djbGFzc3Jvb20iLCJQZXJtaXNzaW9ucyIsImNvbm5lY3Rpb25WYWx1ZXMiLCJzcmMiLCJhbHQiLCJwZXJtaXNzaW9ucyIsImdjbGFzc3Jvb20iLCJjaGVjayIsImF1dGhvcml6ZWQiLCJtb2RhbCIsImNvbm5lY3Rpb25WYWx1ZSIsImluZGV4IiwiUGVybWlzc2lvbkl0ZW0iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbWFnZSIsIl9tb2RhbCIsImNoZWNrZWRJdGVtIiwic2V0Q2hlY2tlZEl0ZW0iLCJzZXRTaG93IiwiaGFuZGxlVmluY3VsYXJDbGljayIsImhhbmRsZU1vZGFsIiwiYWRkQnV0dG9uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJvbkNsb3NlIiwiXyIsIkltYWdlUGlja2VyIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2F1ZGlvLnRzeCIsIi90cy92aWV3cy9jb2lucy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaXRlbS50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFVTyxNQUFNQyxjQUFjLEdBQUFDLE9BQUEsQ0FBQUQsY0FBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFDakUsTUFBTUMsaUJBQWlCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsY0FBYyxD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