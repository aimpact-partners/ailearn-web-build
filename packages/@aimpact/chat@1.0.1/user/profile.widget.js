System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_4 = _beyondJsReact18Widgets101Base;
    }, function (_beyondJsKernel019Core) {
      dependency_5 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive116Model) {
      dependency_6 = _beyondJsReactive116Model;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Components) {
      dependency_9 = _pragmateUi0037Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_10 = _aimpactChatSdk100Session;
    }, function (_pragmateUi0037Form) {
      dependency_11 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Toast) {
      dependency_12 = _pragmateUi0037Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/toast', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-chat-user-profile",
        "vspecifier": "@aimpact/chat@1.0.1/user/profile.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/user/profile.widget');
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
          const ProfileContext = _react.default.createContext({});
          exports.ProfileContext = ProfileContext;
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
        hash: 3575686304,
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
              console.log(event.currentTarget.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRS9DLEtBQUssQ0FBQzJCO1lBQVEsRUFBSSxDQUM3RSxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBO1VBQ0E7VUFHYyxTQUFVUSxXQUFXLENBQUM7WUFBRVA7VUFBUyxDQUFFO1lBQ2hELE1BQU0sQ0FBQ3VCLEdBQUcsRUFBRUMsTUFBTSxDQUFDLEdBQUdoRyxjQUFLLENBQUMrQyxRQUFRLENBQVN5QixTQUFTLENBQUN5QixRQUFRLENBQUM7WUFFaEUsT0FDQ2pHO2NBQVN1RCxTQUFTLEVBQUM7WUFBb0IsR0FDckN3QyxHQUFHLElBQUkvRiw2QkFBQ2tHLG9CQUFTO2NBQUNDLEdBQUcsRUFBRUosR0FBRyxJQUFJLEVBQUU7Y0FBRUssR0FBRyxFQUFFNUIsU0FBUyxDQUFDSTtZQUFXLEVBQUksQ0FDeEQ7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQTtVQUVNLFNBQVVzQixTQUFTLENBQUM7WUFBRUMsR0FBRztZQUFFQztVQUFHLENBQUU7WUFDckMsT0FBT3BHO2NBQUt1RCxTQUFTLEVBQUMsWUFBWTtjQUFDNEMsR0FBRyxFQUFFQSxHQUFHO2NBQUVDLEdBQUcsRUFBRUE7WUFBRyxFQUFJO1VBQzFEIiwibmFtZXMiOlsiUHJvZmlsZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlUHJvZmlsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiY29uc3RydWN0b3IiLCJhdWRpb1NwZWVkIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJyZWFjdGl2ZVByb3BzIiwicmVhZHkiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJhY2Nlc3NpYmlsaXR5IiwiaW5pdGlhbFZhbHVlcyIsImdsb2JhbFRoaXMiLCJzdG9yZSIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcFdyYXBwZXIiLCJzZXRTZXR0aW5ncyIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJBdWRpb1NldHRpbmdzIiwidGV4dHMiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJvbklucHV0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJuYW1lIiwidHlwZSIsIm1heCIsIm1pbiIsInN0ZXAiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJzZXRGZXRjaGluZyIsImlzVW5wdWJsaXNoZWQiLCJzZXRJc1VucHVibGlzaGVkIiwic2V0QWNjZXNzaWJpbHR5IiwiZHlzbGV4aWEiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiSW1hZ2VQaWNrZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIkJ1dHRvbiIsImxvYWRpbmciLCJvbkNsaWNrIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJSYWRpbyIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImxhYmVsIiwic2V0Q2hlY2tlZCIsInByZXZlbnREZWZhdWx0IiwiQ2hlY2tib3giLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50cyIsInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2F1ZGlvLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL0xhbmd1YWdlU2VsZWN0b3IudHN4IiwidHMvdmlld3MvbW9kZS1zZWxlY3Rpb24udHN4IiwidHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCJ0cy92aWV3cy9wcm9maWxlLWltYWdlL1VzZXJJbWFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19