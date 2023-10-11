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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJyZWFkeSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImFjY2Vzc2liaWxpdHkiLCJpbml0aWFsVmFsdWVzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcFdyYXBwZXIiLCJzZXRTZXR0aW5ncyIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJ0ZXh0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiYXVkaW8iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGVlZCIsIm5hbWUiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX3Nlc3Npb24iLCJfSW1hZ2VQaWNrZXIiLCJfTGFuZ3VhZ2VTZWxlY3RvciIsIl9tb2RlU2VsZWN0aW9uIiwiX2F1ZGlvIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJzZXRGZXRjaGluZyIsImlzVW5wdWJsaXNoZWQiLCJzZXRJc1VucHVibGlzaGVkIiwic2V0QWNjZXNzaWJpbHR5IiwiZHlzbGV4aWEiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIk1vZGVTZWxlY3Rpb24iLCJCdXR0b24iLCJsb2FkaW5nIiwib25DbGljayIsIl9mb3JtIiwic2V0TGFuZ3VhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJSYWRpbyIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImxhYmVsIiwic2V0Q2hlY2tlZCIsInByZXZlbnREZWZhdWx0IiwiQ2hlY2tib3giLCJfVXNlckltYWdlIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSIsInNyYyIsImFsdCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9MYW5ndWFnZVNlbGVjdG9yLnRzeCIsIi90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9Vc2VySW1hZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51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