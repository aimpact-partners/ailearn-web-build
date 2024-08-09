System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat@1.0.2/wrapper", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/chat-sdk@1.0.1/session", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_4 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_aimpactChat102Wrapper) {
      dependency_7 = _aimpactChat102Wrapper;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_8 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Components) {
      dependency_9 = _pragmateUi100Beta1Components;
    }, function (_aimpactChatSdk101Session) {
      dependency_10 = _aimpactChatSdk101Session;
    }, function (_pragmateUi100Beta1Form) {
      dependency_11 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_12 = _pragmateUi100Beta1Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.3-dev.12"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/toast', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-user-profile",
        "vspecifier": "@aimpact/chat@1.0.2/user/profile.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.2/user/profile.widget');
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
        hash: 522579532,
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
        hash: 2165528608,
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
        hash: 1159425182,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.audio.title), _react.default.createElement("section", {
              className: 'audio__container'
            }, _react.default.createElement("label", {
              htmlFor: 'audioRange'
            }, texts.audio.speed, _react.default.createElement("input", {
              value: store.audioSpeed,
              name: 'audioRange',
              onInput: onInput,
              type: 'range',
              max: '2',
              min: '0.25',
              step: '0.25'
            })), _react.default.createElement("div", {
              className: 'speed__quantity'
            }, _react.default.createElement("span", null, "0.25"), _react.default.createElement("span", null, "0.50"), _react.default.createElement("span", null, "0.75"), _react.default.createElement("span", null, "1"), _react.default.createElement("span", null, "1.25"), _react.default.createElement("span", null, "1.50"), _react.default.createElement("span", null, "1.75"), _react.default.createElement("span", null, "2"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2212844011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _session = require("@aimpact/chat-sdk/session");
          var _ImagePicker = require("./profile-image/ImagePicker");
          var _context = require("../context");
          var _LanguageSelector = require("./language-selector/LanguageSelector");
          var _modeSelection = require("./mode-selection");
          var _audio = require("./audio");
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
            }, _react.default.createElement("aside", {
              className: 'profile-container'
            }, _react.default.createElement("header", null, _react.default.createElement("figure", null, _react.default.createElement(_ImagePicker.default, {
              userProps: userProps
            })), _react.default.createElement("h4", {
              className: 'h3'
            }, displayName)), _react.default.createElement("section", null), _react.default.createElement("div", {
              className: 'profile__item'
            }, _react.default.createElement("strong", null, "Email"), _react.default.createElement("span", null, email)), _react.default.createElement(_LanguageSelector.LanguageSelector, null), _react.default.createElement(_modeSelection.ModeSelection, null), _react.default.createElement(_audio.AudioSettings, null), store.isUnpublished && _react.default.createElement(_components.Button, {
              loading: fetching,
              onClick: store.save
            }, texts.save))));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/language-selector/LanguageSelector
      **********************************************************/

      ims.set('./views/language-selector/LanguageSelector', {
        hash: 1203746098,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.language), _react.default.createElement("section", {
              className: 'language-selector'
            }, _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'en',
              name: 'language',
              value: 'en',
              label: 'English'
            }), _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'es',
              name: 'language',
              value: 'es',
              label: 'Spanish'
            }), _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'pr',
              name: 'portuguese',
              value: 'pr',
              label: 'Portuguese'
            })));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/mode-selection
      **************************************/

      ims.set('./views/mode-selection', {
        hash: 998216936,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.language), _react.default.createElement("section", {
              className: 'language-selector'
            }, _react.default.createElement(_form.Checkbox, {
              onChange: onChange,
              checked: checked,
              name: 'check',
              label: texts.dyslexia
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/profile-image/ImagePicker
      *************************************************/

      ims.set('./views/profile-image/ImagePicker', {
        hash: 2231778911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ImagePicker;
          var _react = require("react");
          var _UserImage = require("./UserImage");
          function ImagePicker({
            userProps
          }) {
            const [img, setImg] = _react.default.useState(userProps.photoURL);
            return _react.default.createElement("section", {
              className: 'user-image-wrapper'
            }, img && _react.default.createElement(_UserImage.UserImage, {
              src: img ?? '',
              alt: userProps.displayName
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/profile-image/UserImage
      ***********************************************/

      ims.set('./views/profile-image/UserImage', {
        hash: 538976033,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserImage = UserImage;
          var _react = require("react");
          function UserImage({
            src,
            alt
          }) {
            return _react.default.createElement("img", {
              className: 'user-image',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJyZWFkeSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImFjY2Vzc2liaWxpdHkiLCJpbml0aWFsVmFsdWVzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcFdyYXBwZXIiLCJzZXRTZXR0aW5ncyIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJ0ZXh0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfc2Vzc2lvbiIsIl9JbWFnZVBpY2tlciIsIl9MYW5ndWFnZVNlbGVjdG9yIiwiX21vZGVTZWxlY3Rpb24iLCJfYXVkaW8iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInNldEZldGNoaW5nIiwiaXNVbnB1Ymxpc2hlZCIsInNldElzVW5wdWJsaXNoZWQiLCJzZXRBY2Nlc3NpYmlsdHkiLCJkeXNsZXhpYSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIkJ1dHRvbiIsImxvYWRpbmciLCJvbkNsaWNrIiwiX2Zvcm0iLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIlJhZGlvIiwib25DaGFuZ2UiLCJjaGVja2VkIiwibGFiZWwiLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJDaGVja2JveCIsIl9Vc2VySW1hZ2UiLCJJbWFnZVBpY2tlciIsImltZyIsInNldEltZyIsInBob3RvVVJMIiwiVXNlckltYWdlIiwic3JjIiwiYWx0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hdWRpby50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL0xhbmd1YWdlU2VsZWN0b3IudHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL1VzZXJJbWFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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