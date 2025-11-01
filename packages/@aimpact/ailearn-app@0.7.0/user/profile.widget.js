System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@aimpact/ailearn-sdk@1.2.0/core", "@beyond-js/react-18-widgets@1.1.8/base", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/kernel@0.1.14/routing", "@aimpact/chat-sdk@1.5.5/wrapper", "@beyond-js/kernel@0.1.14/core", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/reactive@2.1.2/model", "@aimpact/chat-sdk@1.5.5/voice", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/alert", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.7.0/model/gclassroom", "pragmate-ui@1.0.8/image", "pragmate-ui@1.0.8/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsKernel0114Routing) {
      dependency_7 = _beyondJsKernel0114Routing;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_8 = _aimpactChatSdk155Wrapper;
    }, function (_beyondJsKernel0114Core) {
      dependency_9 = _beyondJsKernel0114Core;
    }, function (_beyondJsKernel0114Texts) {
      dependency_10 = _beyondJsKernel0114Texts;
    }, function (_beyondJsReactive212Model) {
      dependency_11 = _beyondJsReactive212Model;
    }, function (_aimpactChatSdk155Voice) {
      dependency_12 = _aimpactChatSdk155Voice;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Alert) {
      dependency_14 = _pragmateUi108Alert;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_15 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_16 = _aimpactAilearnApp070ModelWrapper;
    }, function (_aimpactChatSdk155Session) {
      dependency_17 = _aimpactChatSdk155Session;
    }, function (_pragmateUi108Components) {
      dependency_18 = _pragmateUi108Components;
    }, function (_pragmateUi108Form) {
      dependency_19 = _pragmateUi108Form;
    }, function (_pragmateUi108Icons) {
      dependency_20 = _pragmateUi108Icons;
    }, function (_aimpactAilearnApp070ModelGclassroom) {
      dependency_21 = _aimpactAilearnApp070ModelGclassroom;
    }, function (_pragmateUi108Image) {
      dependency_22 = _pragmateUi108Image;
    }, function (_pragmateUi108Modal) {
      dependency_23 = _pragmateUi108Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/reactive/model', dependency_11], ['@aimpact/chat-sdk/voice', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/model/wrapper', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/icons', dependency_20], ['@aimpact/ailearn-app/model/gclassroom', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/user/profile.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImNsZWFyTW9kZWwiLCJiYWNrTGluayIsInVuZGVmaW5lZCIsIl93cmFwcGVyIiwiX2NvcmUiLCJfdGV4dHMiLCJfbW9kZWwiLCJfcmVuZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJsYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJrZXlzIiwicmVhZHkiLCJnbG9iYWxUZXh0cyIsInZvaWNlcyIsInZvaWNlTWFuYWdlciIsInNlbGVjdGVkVm9pY2VzIiwiTWFwIiwidW5wdWJsaXNoZWQiLCJsYW5ndWFnZSIsInNlbGVjdGVkVm9pY2UiLCJnZXQiLCJkZWZhdWx0Vm9pY2UiLCJnZXREZWZhdWx0IiwibmFtZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlRmxvYXQiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJzZXQiLCJhY2Nlc3NpYmlsaXR5IiwiY3VycmVudCIsInNhdmVDaGFuZ2VzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRWb2ljZXMiLCJoYXNWb2ljZUNoYW5nZXMiLCJmb3JFYWNoIiwibGFuZyIsInNldERlZmF1bHRzIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIlN0cmluZyIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsImlzUmVhZHkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25DaGFuZ2UiLCJvZmYiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJwcm9maWxlIiwiZ2V0U2VsZWN0ZWRWb2ljZSIsInNldFNlbGVjdGVkVm9pY2UiLCJ2b2ljZU5hbWUiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25JbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl9hbGVydCIsIlVzZXJDb2lucyIsInVzZXIiLCJjb2lucyIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiQWxlcnQiLCJsYWJlbCIsIl91aSIsIl9zZXNzaW9uIiwiX2NvbXBvbmVudHMiLCJfYXVkaW8iLCJfY29pbnMiLCJfbGFuZ3VhZ2VTZWxlY3RvciIsIl9sYW5ndWFnZXMiLCJfbW9kZVNlbGVjdGlvbiIsIl9JbWFnZVBpY2tlciIsInNldEFjY2Vzc2liaWx0eSIsImlzVW5wdWJsaXNoZWQiLCJ1c2VTdG9yZSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwiZ2V0UHJvcGVydGllcyIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIkF1ZGlvTGFuZ3VhZ2VzIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ2ZXJzaW9uIiwic2V0dGluZ3MiLCJfZm9ybSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImF2YWlsYWJsZUxhbmd1YWdlcyIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJsYW5nQ29kZSIsIm1hcCIsImxhbmdEYXRhIiwiY29kZSIsIlJhZGlvIiwia2V5IiwiY2hlY2tlZCIsIl9pdGVtIiwicGxheWluZyIsInNldFBsYXlpbmciLCJpc0FjdGl2ZSIsIml0ZW0iLCJkaXNhYmxlZCIsIkF1ZGlvTGFuZ3VhZ2VJdGVtIiwiX2ljb25zIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFuZGxlVm9pY2VDaGFuZ2UiLCJzYW1wbGVUZXh0cyIsImVuIiwiQVBQX05BTUUiLCJlcyIsImRlIiwicHQiLCJmciIsInNwZWVjaFN5bnRoZXNpcyIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsInZvaWNlIiwiYnlMYW5nIiwiZmluZCIsInYiLCJvbmVuZCIsIm9uc3RhcnQiLCJzcGVhayIsInZvaWNlVVJJIiwiSWNvbkJ1dHRvbiIsImljb24iLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiZHlzbGV4aWEiLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJhZGRMYWJlbCIsIkltYWdlIiwiQ29udHJvbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2Utc2VsZWN0b3IvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVVPLE1BQU1DLGNBQWMsR0FBQUMsT0FBQSxDQUFBRCxjQUFBLEdBQUdGLE1BQUEs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R0MsUUFBUTtZQUVuRCxPQUNDOU8sTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFpQixHQUMvQnRILE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFDOEgsT0FBTyxPQUFHLEVBRVY3TixJQUFJLElBQUkrTSxlQUFlLEVBQUVELEtBQUssSUFDOUJqTyxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ3FILE1BQUEsQ0FBQVUsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFL04sSUFBSTtjQUFDbUcsU0FBUyxFQUFDLGNBQWM7Y0FBQzZILE9BQU8sRUFBRVA7WUFBVyxHQUM5RTVPLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSx3Q0FBa0MsQ0FFbkMsQ0FDSTtVQUVSLENBQUM7VUFBQy9HLE9BQUEsQ0FBQWlPLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREYsSUFBQXBPLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFtUCxDQUFBLEdBQUFuUCxPQUFBO1VBRWMsU0FBVW9QLFdBQVdBLENBQUM7WUFBRW5HO1VBQVMsQ0FBRTtZQUNoRCxNQUFNLENBQUNvRyxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxHQUFHdlAsTUFBQSxDQUFBSSxPQUFLLENBQUN5RyxRQUFRLENBQVNxQyxTQUFTLENBQUNzRyxRQUFRLENBQUM7WUFFaEUsT0FDQ3hQLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBb0IsR0FDckNnSSxHQUFHLElBQUl0UCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ2tJLENBQUEsQ0FBQUssU0FBUztjQUFDOUIsR0FBRyxFQUFFMkIsR0FBRyxJQUFJLEVBQUU7Y0FBRTFCLEdBQUcsRUFBRTFFLFNBQVMsQ0FBQ0c7WUFBVyxFQUFJLENBQ3hEO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQXJKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxTyxNQUFBLEdBQUFyTyxPQUFBO1VBQ00sU0FBVXdQLFNBQVNBLENBQUM7WUFBRTlCLEdBQUc7WUFBRUM7VUFBRyxDQUFFO1lBQ3JDLE9BQU81TixNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ29ILE1BQUEsQ0FBQVMsS0FBSztjQUFDekgsU0FBUyxFQUFDLFlBQVk7Y0FBQ3FHLEdBQUcsRUFBRUEsR0FBRztjQUFFQyxHQUFHLEVBQUVBO1lBQUcsRUFBSTtVQUM1RCIsImlnbm9yZUxpc3QiOltdfQ==