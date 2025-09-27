System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@aimpact/ailearn-sdk@1.2.0/core", "@beyond-js/react-18-widgets@1.1.8/base", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@beyond-js/kernel@0.1.14/routing", "@aimpact/chat-sdk@1.5.5/wrapper", "@beyond-js/kernel@0.1.14/core", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/voice", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/alert", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/model/wrapper", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.6.1/model/gclassroom", "pragmate-ui@1.0.8/image", "pragmate-ui@1.0.8/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_4 = _aimpactAilearnSdk120Core;
    }, function (_beyondJsReact18Widgets118Base) {
      dependency_5 = _beyondJsReact18Widgets118Base;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_beyondJsKernel0114Routing) {
      dependency_7 = _beyondJsKernel0114Routing;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_8 = _aimpactChatSdk155Wrapper;
    }, function (_beyondJsKernel0114Core) {
      dependency_9 = _beyondJsKernel0114Core;
    }, function (_beyondJsKernel0114Texts) {
      dependency_10 = _beyondJsKernel0114Texts;
    }, function (_beyondJsReactive211Model) {
      dependency_11 = _beyondJsReactive211Model;
    }, function (_aimpactChatSdk155Voice) {
      dependency_12 = _aimpactChatSdk155Voice;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Alert) {
      dependency_14 = _pragmateUi108Alert;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_15 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_16 = _aimpactAilearnApp061ModelWrapper;
    }, function (_aimpactChatSdk155Session) {
      dependency_17 = _aimpactChatSdk155Session;
    }, function (_pragmateUi108Components) {
      dependency_18 = _pragmateUi108Components;
    }, function (_pragmateUi108Form) {
      dependency_19 = _pragmateUi108Form;
    }, function (_pragmateUi108Icons) {
      dependency_20 = _pragmateUi108Icons;
    }, function (_aimpactAilearnApp061ModelGclassroom) {
      dependency_21 = _aimpactAilearnApp061ModelGclassroom;
    }, function (_pragmateUi108Image) {
      dependency_22 = _pragmateUi108Image;
    }, function (_pragmateUi108Modal) {
      dependency_23 = _pragmateUi108Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/reactive/model', dependency_11], ['@aimpact/chat-sdk/voice', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/model/wrapper', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/icons', dependency_20], ['@aimpact/ailearn-app/model/gclassroom', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/user/profile.widget');
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
        hash: 1484465099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@beyond-js/reactive/model");
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
              return [..._core.languages.supported.keys()];
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
        hash: 3449519209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          var _audio = require("./audio");
          var _coins = require("./coins");
          var _languageSelector = require("./language-selector");
          var _languages = require("./languages");
          var _modeSelection = require("./mode-selection");
          var _ImagePicker = require("./profile-image/ImagePicker");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [accessibility, setAccessibilty] = _react.default.useState(store.accessibility);
            const {
              isUnpublished,
              fetching,
              ready,
              texts
            } = store;
            (0, _hooks.useStore)(store);
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
            }, texts.version, ": ", _wrapper.settings.version))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/language-selector/index
      ***********************************************/

      ims.set('./views/language-selector/index', {
        hash: 377048616,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageSelector = LanguageSelector;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../../context");
          function LanguageSelector() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const {
              language,
              globalTexts,
              supportedLanguages
            } = store;
            const handleChange = event => store.language = event.target.value;
            (0, _hooks.useStore)(store, ['language.changed']);
            // Get languages from globalTexts and filter by supportedLanguages
            const availableLanguages = globalTexts?.languages ? Object.entries(globalTexts.languages).filter(([langCode]) => supportedLanguages.includes(langCode)).map(([langCode, langData]) => ({
              code: langCode,
              name: langData.name
            })) : [];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.language), _react.default.createElement("section", {
              className: "language-selector field__container"
            }, availableLanguages.map(({
              code,
              name
            }) => _react.default.createElement(_form.Radio, {
              key: code,
              onChange: handleChange,
              checked: store.language === code,
              name: "language",
              value: code,
              label: name
            }))));
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
        hash: 3206083049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioLanguageItem = AudioLanguageItem;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || /iPad|iPhone|iPod/.test(navigator.userAgent);
            const handleVoiceChange = event => {
              store.setSelectedVoice(language, event.target.value);
            };
            const sampleTexts = {
              en: `Hello! This is ${_wrapper.settings.APP_NAME}, your educational assistant.`,
              es: `¡Hola! Soy ${_wrapper.settings.APP_NAME}, tu asistente educativo.`,
              de: `Hallo! Ich bin ${_wrapper.settings.APP_NAME}, dein Bildungsassistent.`,
              pt: `Olá! Eu sou ${_wrapper.settings.APP_NAME}, seu assistente educacional.`,
              fr: `Bonjour! Je suis ${_wrapper.settings.APP_NAME}, votre assistant éducatif.`
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
            }, isSafari ? `${voice.name} (${voice.lang})` : voice.name))), _react.default.createElement(_icons.IconButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImNsZWFyTW9kZWwiLCJiYWNrTGluayIsInVuZGVmaW5lZCIsIl93cmFwcGVyIiwiX2NvcmUiLCJfdGV4dHMiLCJfbW9kZWwiLCJfcmVuZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJsYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJrZXlzIiwicmVhZHkiLCJnbG9iYWxUZXh0cyIsInZvaWNlcyIsInZvaWNlTWFuYWdlciIsInNlbGVjdGVkVm9pY2VzIiwiTWFwIiwidW5wdWJsaXNoZWQiLCJsYW5ndWFnZSIsInNlbGVjdGVkVm9pY2UiLCJnZXQiLCJkZWZhdWx0Vm9pY2UiLCJnZXREZWZhdWx0IiwibmFtZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlRmxvYXQiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJzZXQiLCJhY2Nlc3NpYmlsaXR5IiwiY3VycmVudCIsInNhdmVDaGFuZ2VzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRWb2ljZXMiLCJoYXNWb2ljZUNoYW5nZXMiLCJmb3JFYWNoIiwibGFuZyIsInNldERlZmF1bHRzIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIlN0cmluZyIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsImlzUmVhZHkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25DaGFuZ2UiLCJvZmYiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJwcm9maWxlIiwiZ2V0U2VsZWN0ZWRWb2ljZSIsInNldFNlbGVjdGVkVm9pY2UiLCJ2b2ljZU5hbWUiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25JbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl9hbGVydCIsIlVzZXJDb2lucyIsInVzZXIiLCJjb2lucyIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiQWxlcnQiLCJsYWJlbCIsIl91aSIsIl9zZXNzaW9uIiwiX2NvbXBvbmVudHMiLCJfYXVkaW8iLCJfY29pbnMiLCJfbGFuZ3VhZ2VTZWxlY3RvciIsIl9sYW5ndWFnZXMiLCJfbW9kZVNlbGVjdGlvbiIsIl9JbWFnZVBpY2tlciIsInNldEFjY2Vzc2liaWx0eSIsImlzVW5wdWJsaXNoZWQiLCJ1c2VTdG9yZSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwiZ2V0UHJvcGVydGllcyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIkF1ZGlvTGFuZ3VhZ2VzIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ2ZXJzaW9uIiwic2V0dGluZ3MiLCJfZm9ybSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImF2YWlsYWJsZUxhbmd1YWdlcyIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJsYW5nQ29kZSIsIm1hcCIsImxhbmdEYXRhIiwiY29kZSIsIlJhZGlvIiwia2V5IiwiY2hlY2tlZCIsIl9pdGVtIiwicGxheWluZyIsInNldFBsYXlpbmciLCJpc0FjdGl2ZSIsIml0ZW0iLCJkaXNhYmxlZCIsIkF1ZGlvTGFuZ3VhZ2VJdGVtIiwiX2ljb25zIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFuZGxlVm9pY2VDaGFuZ2UiLCJzYW1wbGVUZXh0cyIsImVuIiwiQVBQX05BTUUiLCJlcyIsImRlIiwicHQiLCJmciIsInNwZWVjaFN5bnRoZXNpcyIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsInZvaWNlIiwiYnlMYW5nIiwiZmluZCIsInYiLCJvbmVuZCIsIm9uc3RhcnQiLCJzcGVhayIsInZvaWNlVVJJIiwiSWNvbkJ1dHRvbiIsImljb24iLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiZHlzbGV4aWEiLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJhZGRMYWJlbCIsIkltYWdlIiwiQ29udHJvbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi8vdHMvY29udGV4dC50cyIsIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2F1ZGlvLnRzeCIsIi8vdHMvdmlld3MvY29pbnMudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2l0ZW0udHN4IiwiLy90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2luZGV4LnRzeCIsIi8vaW50ZXJmYWNlcy50cy8iLCIvL3RzL3ZpZXdzL3Blcm1pc3Npb25zL2l0ZW0udHN4IiwiLy90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi8vdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFVTyxNQUFNQyxjQUFjLEdBQUFDLE9BQUEsQ0FBQUQs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VyxHQUFHSyxTQUFTLEdBQUdDLFFBQVE7WUFFbkQsT0FDQzlPLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsR0FDL0J0SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQzhILE9BQU8sT0FBRyxFQUVWN04sSUFBSSxJQUFJK00sZUFBZSxFQUFFRCxLQUFLLElBQzlCak8sTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUNxSCxNQUFBLENBQUFVLEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRS9OLElBQUk7Y0FBQ21HLFNBQVMsRUFBQyxjQUFjO2NBQUM2SCxPQUFPLEVBQUVQO1lBQVcsR0FDOUU1TyxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsd0NBQWtDLENBRW5DLENBQ0k7VUFFUixDQUFDO1VBQUMvRyxPQUFBLENBQUFpTyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERGLElBQUFwTyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBbVAsQ0FBQSxHQUFBblAsT0FBQTtVQUVjLFNBQVVvUCxXQUFXQSxDQUFDO1lBQUVuRztVQUFTLENBQUU7WUFDaEQsTUFBTSxDQUFDb0csR0FBRyxFQUFFQyxNQUFNLENBQUMsR0FBR3ZQLE1BQUEsQ0FBQUksT0FBSyxDQUFDeUcsUUFBUSxDQUFTcUMsU0FBUyxDQUFDc0csUUFBUSxDQUFDO1lBRWhFLE9BQ0N4UCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBU0ksU0FBUyxFQUFDO1lBQW9CLEdBQ3JDZ0ksR0FBRyxJQUFJdFAsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUNrSSxDQUFBLENBQUFLLFNBQVM7Y0FBQzlCLEdBQUcsRUFBRTJCLEdBQUcsSUFBSSxFQUFFO2NBQUUxQixHQUFHLEVBQUUxRSxTQUFTLENBQUNHO1lBQVcsRUFBSSxDQUN4RDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUFySixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcU8sTUFBQSxHQUFBck8sT0FBQTtVQUNNLFNBQVV3UCxTQUFTQSxDQUFDO1lBQUU5QixHQUFHO1lBQUVDO1VBQUcsQ0FBRTtZQUNyQyxPQUFPNU4sTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUNvSCxNQUFBLENBQUFTLEtBQUs7Y0FBQ3pILFNBQVMsRUFBQyxZQUFZO2NBQUNxRyxHQUFHLEVBQUVBLEdBQUc7Y0FBRUMsR0FBRyxFQUFFQTtZQUFHLEVBQUk7VUFDNUQiLCJpZ25vcmVMaXN0IjpbXX0=