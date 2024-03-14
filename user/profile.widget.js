System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.11/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.27/model/gclassroom", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_4 = _beyondJsReact18Widgets104Base;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_8 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_10 = _aimpactChatSdk100Session;
    }, function (_pragmateUi006Form) {
      dependency_11 = _pragmateUi006Form;
    }, function (_aimpactAilearnApp0027ModelGclassroom) {
      dependency_12 = _aimpactAilearnApp0027ModelGclassroom;
    }, function (_pragmateUi006Image) {
      dependency_13 = _pragmateUi006Image;
    }, function (_pragmateUi006Modal) {
      dependency_14 = _pragmateUi006Modal;
    }, function (_pragmateUi006Icons) {
      dependency_15 = _pragmateUi006Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/model/gclassroom', dependency_12], ['pragmate-ui/image', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/icons', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/user/profile.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/user/profile.widget');
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
        hash: 1256159306,
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
        hash: 3123693261,
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
        hash: 217108400,
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
          var _permissions = require("./permissions");
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
              className: "profile-container"
            }, _react.default.createElement("header", null, _react.default.createElement("figure", null, _react.default.createElement(_ImagePicker.default, {
              userProps: userProps
            })), _react.default.createElement("h4", {
              className: "h3"
            }, displayName)), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement("div", {
              className: "profile__item"
            }, _react.default.createElement("h4", null, "Email"), _react.default.createElement("span", null, email)), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement(_LanguageSelector.LanguageSelector, null), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement(_modeSelection.ModeSelection, null), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement(_audio.AudioSettings, null), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement(_permissions.Permissions, null), store.isUnpublished && _react.default.createElement(_components.Button, {
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
        hash: 3151183817,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.textMode), _react.default.createElement("section", {
              className: "language-selector"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: onChange,
              checked: checked,
              name: "check",
              label: texts.dyslexia
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/permissions/index
      *****************************************/

      ims.set('./views/permissions/index', {
        hash: 3470557387,
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
            }, _react.default.createElement("h4", null, texts.permissions.title), _react.default.createElement("div", {
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
        hash: 4224662471,
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
        hash: 3530143524,
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
              className: "user-image-wrapper"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJyZWFkeSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImFjY2Vzc2liaWxpdHkiLCJpbml0aWFsVmFsdWVzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcFdyYXBwZXIiLCJzZXRTZXR0aW5ncyIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJ0ZXh0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfc2Vzc2lvbiIsIl9JbWFnZVBpY2tlciIsIl9MYW5ndWFnZVNlbGVjdG9yIiwiX21vZGVTZWxlY3Rpb24iLCJfYXVkaW8iLCJfcGVybWlzc2lvbnMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInNldEZldGNoaW5nIiwiaXNVbnB1Ymxpc2hlZCIsInNldElzVW5wdWJsaXNoZWQiLCJzZXRBY2Nlc3NpYmlsdHkiLCJkeXNsZXhpYSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIlBlcm1pc3Npb25zIiwiQnV0dG9uIiwibG9hZGluZyIsIm9uQ2xpY2siLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJsYWJlbCIsInNldENoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRNb2RlIiwiQ2hlY2tib3giLCJfaXRlbSIsIl9nY2xhc3Nyb29tIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwibWFwIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlVmluY3VsYXJDbGljayIsImhhbmRsZU1vZGFsIiwiYWRkQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJhZGRMYWJlbCIsIkltYWdlIiwiQ29udHJvbCIsIk1vZGFsIiwib25DbG9zZSIsIl9Vc2VySW1hZ2UiLCJJbWFnZVBpY2tlciIsImltZyIsInNldEltZyIsInBob3RvVVJMIiwiVXNlckltYWdlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hdWRpby50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL0xhbmd1YWdlU2VsZWN0b3IudHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL1VzZXJJbWFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVFPLE1BQU1DLGNBQWMsR0FBQUMsT0FBQSxDQUFBRCxjQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBcUIsQ0FBQztVQUNqRSxNQUFNQyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxjQUFjLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUeEUsSUFBQUUsS0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VBRU87VUFBVSxNQUNYVSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FFaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjs7VUFDQWQsT0FBQSxDQUFBUSxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkQsSUFBQU8sTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixLQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE9BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsUUFBQSxHQUFBcEIsT0FBQTtVQUVNLE1BQU9jLFlBQWEsU0FBUUcsTUFBQSxDQUFBSSxhQUErQjtZQUdoRUMsVUFBVSxHQUFHLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUM7WUFDeERDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FFUCxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUVDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQ0MsUUFBUSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQ3BHLENBQUMsR0FDREQsWUFBWSxDQUFDQyxPQUFPLENBQUMscUJBQXFCLENBQUM7Y0FFOUMsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUNILFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxHQUMxR0QsWUFBWSxDQUFDQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsR0FDbEQsUUFBUTtjQUVYLElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztjQUMvRCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHZCxLQUFBLENBQUFlLFNBQVMsQ0FBQ0MsT0FBTztjQUNqQyxJQUFJLENBQUNWLFVBQVUsR0FBR0EsVUFBVTtjQUM1QixJQUFJLENBQUNXLGFBQWEsR0FBR04saUJBQWlCO2NBQ3RDLElBQUksQ0FBQ08sYUFBYSxDQUFDO2dCQUNsQkQsYUFBYSxFQUFFTixpQkFBaUI7Z0JBQ2hDRyxRQUFRLEVBQUVkLEtBQUEsQ0FBQWUsU0FBUyxDQUFDQyxPQUFPO2dCQUMzQlYsVUFBVSxFQUFFLElBQUksQ0FBQ0E7ZUFDakIsQ0FBQztjQUVGYSxVQUFVLENBQUN6QixLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBMEIsSUFBSSxHQUFHQSxDQUFBLEtBQUs7Y0FDWCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2NBQ3BCckIsS0FBQSxDQUFBZSxTQUFTLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNGLFFBQVE7Y0FFakMsTUFBTVEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FFaER0QixRQUFBLENBQUF1QixVQUFVLENBQUNDLFdBQVcsQ0FBQztnQkFDdEJULGFBQWEsRUFBRSxJQUFJLENBQUNBLGFBQWE7Z0JBQ2pDWCxVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVO2dCQUMzQlEsUUFBUSxFQUFFLElBQUksQ0FBQ0E7ZUFDZixDQUFDO2NBQ0ZaLFFBQUEsQ0FBQXVCLFVBQVUsQ0FBQ1IsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYTtjQUM3Q2YsUUFBQSxDQUFBdUIsVUFBVSxDQUFDbkIsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVTtjQUN2Q0osUUFBQSxDQUFBdUIsVUFBVSxDQUFDWCxRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRO2NBQ25DUSxTQUFTLENBQUNLLFlBQVksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUNWLGFBQWEsQ0FBQztjQUNyRVIsWUFBWSxDQUFDbUIsT0FBTyxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQ1gsYUFBYSxDQUFDO2NBQ3RFUixZQUFZLENBQUNtQixPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDdEIsVUFBVSxDQUFDO2NBQzVETCxPQUFBLENBQUE0QixPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQ2QsYUFBYSxDQUFDO2NBRXJFZSxNQUFNLENBQUNDLFVBQVUsQ0FBQyxNQUFLO2dCQUN0QmpDLEtBQUEsQ0FBQWUsU0FBUyxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDRixRQUFRO2dCQUNqQyxJQUFJLENBQUNJLGFBQWEsQ0FBQztrQkFBRUosUUFBUSxFQUFFZCxLQUFBLENBQUFlLFNBQVMsQ0FBQ0M7Z0JBQU8sQ0FBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUNLLFFBQVEsR0FBRyxLQUFLO2NBQ3RCLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUixDQUFDOztVQUNEckMsT0FBQSxDQUFBWSxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RELElBQUFmLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFvRCxRQUFBLEdBQUFwRCxPQUFBO1VBQ0EsSUFBQXFELE1BQUEsR0FBQXJELE9BQUE7VUFFTSxTQUFVc0QsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUVDLEtBQUs7Y0FBRTNDO1lBQUssQ0FBRSxHQUFHLElBQUF3QyxRQUFBLENBQUEvQyxpQkFBaUIsR0FBRTtZQUM1QyxNQUFNLENBQUNtRCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHMUQsTUFBQSxDQUFBSSxPQUFLLENBQUN1RCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUFMLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUMvQyxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCNkMsUUFBUSxDQUFDN0MsS0FBSyxDQUFDWSxVQUFVLENBQUM7WUFDM0IsQ0FBQyxDQUFDO1lBRUYsTUFBTW9DLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCakQsS0FBSyxDQUFDWSxVQUFVLEdBQUdxQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ04sS0FBSztZQUM3QyxDQUFDO1lBRUQsT0FDQ3pELE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxDQUFBaEUsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxRQUFBLFFBQ0NqRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsYUFBS1IsS0FBSyxDQUFDVSxLQUFLLENBQUNDLEtBQUssQ0FBTSxFQUM1Qm5FLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBa0IsR0FDcENwRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUE7Y0FBT0ssT0FBTyxFQUFDO1lBQVksR0FDekJiLEtBQUssQ0FBQ1UsS0FBSyxDQUFDSSxLQUFLLEVBRWxCdEUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2NBQ0NQLEtBQUssRUFBRTVDLEtBQUssQ0FBQ1ksVUFBVTtjQUN2QjhDLElBQUksRUFBQyxZQUFZO2NBQ2pCVixPQUFPLEVBQUVBLE9BQU87Y0FDaEJXLElBQUksRUFBQyxPQUFPO2NBQ1pDLEdBQUcsRUFBQyxHQUFHO2NBQ1BDLEdBQUcsRUFBQyxNQUFNO2NBQ1ZDLElBQUksRUFBQztZQUFNLEVBQ1YsQ0FDSyxFQUNSM0UsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFpQixHQUMvQnBFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxzQkFBaUIsRUFDakJoRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsc0JBQWlCLEVBQ2pCaEUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLHNCQUFpQixFQUNqQmhFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxtQkFBYyxFQUNkaEUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLHNCQUFpQixFQUNqQmhFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxzQkFBaUIsRUFDakJoRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsc0JBQWlCLEVBQ2pCaEUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLG1CQUFjLENBQ1QsQ0FDRyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUFoRSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUQsTUFBQSxHQUFBckQsT0FBQTtVQUNBLElBQUEyRSxlQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLFdBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBNkUsUUFBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUE4RSxZQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQW9ELFFBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBK0UsaUJBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBZ0YsY0FBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFpRixNQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQWtGLFlBQUEsR0FBQWxGLE9BQUE7VUFDTztVQUFVLFNBQ1JnQixJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUN0QixNQUFNLENBQUN1RSxVQUFVLEVBQUU1QixLQUFLLENBQUMsR0FBRyxJQUFBRixNQUFBLENBQUErQixRQUFRLEVBQUNULGVBQUEsQ0FBQVUsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDdkQsS0FBSyxFQUFFd0QsUUFBUSxDQUFDLEdBQUd4RixNQUFBLENBQUFJLE9BQUssQ0FBQ3VELFFBQVEsQ0FBQzlDLEtBQUssQ0FBQ21CLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNRLFFBQVEsRUFBRWlELFdBQVcsQ0FBQyxHQUFHekYsTUFBQSxDQUFBSSxPQUFLLENBQUN1RCxRQUFRLENBQUM5QyxLQUFLLENBQUMyQixRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDa0QsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHM0YsTUFBQSxDQUFBSSxPQUFLLENBQUN1RCxRQUFRLENBQUM5QyxLQUFLLENBQUM2RSxhQUFhLENBQUM7WUFDN0UsTUFBTSxDQUFDdEQsYUFBYSxFQUFFd0QsZUFBZSxDQUFDLEdBQUc1RixNQUFBLENBQUFJLE9BQUssQ0FBQ3VELFFBQVEsQ0FBQzlDLEtBQUssQ0FBQ3VCLGFBQWEsQ0FBQztZQUU1RSxJQUFBa0IsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQy9DLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkIyRSxRQUFRLENBQUMzRSxLQUFLLENBQUNtQixLQUFLLENBQUM7Y0FDckJ5RCxXQUFXLENBQUM1RSxLQUFLLENBQUMyQixRQUFRLENBQUM7Y0FDM0JtRCxnQkFBZ0IsQ0FBQzlFLEtBQUssQ0FBQzZFLGFBQWEsQ0FBQztjQUNyQ0UsZUFBZSxDQUFDL0UsS0FBSyxDQUFDZ0YsUUFBUSxDQUFDO1lBQ2hDLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ1QsVUFBVSxJQUFJLENBQUNwRCxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQ3RDLE1BQU04RCxTQUFTLEdBQUdoQixRQUFBLENBQUFpQixjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYSxFQUFFO1lBQ3JELE1BQU07Y0FBRUMsV0FBVztjQUFFQztZQUFLLENBQUUsR0FBR0wsU0FBUztZQUV4QyxPQUNDOUYsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLENBQUFoRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTZELFFBQUEsUUFDQ2pFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxDQUFDWCxRQUFBLENBQUFuRCxjQUFjLENBQUNrRyxRQUFRO2NBQUMzQyxLQUFLLEVBQUU7Z0JBQUU1QyxLQUFLO2dCQUFFMkM7Y0FBSztZQUFFLEdBQy9DeEQsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2NBQU9JLFNBQVMsRUFBQztZQUFtQixHQUNuQ3BFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxpQkFDQ2hFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxpQkFDQ2hFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxDQUFDZSxZQUFBLENBQUEzRSxPQUFXO2NBQUMwRixTQUFTLEVBQUVBO1lBQVMsRUFBSSxDQUM3QixFQUNUOUYsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2NBQUlJLFNBQVMsRUFBQztZQUFJLEdBQUU4QixXQUFXLENBQU0sQ0FDN0IsRUFDVGxHLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsRUFBRyxFQUVuQ3BFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBZSxHQUM3QnBFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxxQkFBYyxFQUNkaEUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLGVBQU9tQyxLQUFLLENBQVEsQ0FDZixFQUNObkcsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFpQixFQUFHLEVBRW5DcEUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLENBQUNnQixpQkFBQSxDQUFBcUIsZ0JBQWdCLE9BQUcsRUFDcEJyRyxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWlCLEVBQUcsRUFFbkNwRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ2lCLGNBQUEsQ0FBQXFCLGFBQWEsT0FBRyxFQUNqQnRHLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsRUFBRyxFQUVuQ3BFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxDQUFDa0IsTUFBQSxDQUFBM0IsYUFBYSxPQUFHLEVBQ2pCdkQsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFpQixFQUFHLEVBRW5DcEUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLENBQUNtQixZQUFBLENBQUFvQixXQUFXLE9BQUcsRUFDZDFGLEtBQUssQ0FBQzZFLGFBQWEsSUFDbkIxRixNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ2EsV0FBQSxDQUFBMkIsTUFBTTtjQUFDQyxPQUFPLEVBQUVqRSxRQUFRO2NBQUVrRSxPQUFPLEVBQUU3RixLQUFLLENBQUMwQjtZQUFJLEdBQzVDaUIsS0FBSyxDQUFDakIsSUFBSSxDQUVaLENBQ00sQ0FDaUIsQ0FDeEI7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRUEsSUFBQXZDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwRyxLQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQW9ELFFBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBcUQsTUFBQSxHQUFBckQsT0FBQTtVQUVNLFNBQVVvRyxnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUFFN0MsS0FBSztjQUFFM0M7WUFBSyxDQUFFLEdBQUcsSUFBQXdDLFFBQUEsQ0FBQS9DLGlCQUFpQixHQUFFO1lBRTVDLE1BQU0sQ0FBQzJCLFFBQVEsRUFBRTJFLFdBQVcsQ0FBQyxHQUFHNUcsTUFBQSxDQUFBSSxPQUFLLENBQUN1RCxRQUFRLENBQUM5QyxLQUFLLENBQUNvQixRQUFRLENBQUM7WUFFOUQsSUFBQXFCLE1BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUMvQyxLQUFLLENBQUMsRUFBRSxNQUFNK0YsV0FBVyxDQUFDL0YsS0FBSyxDQUFDb0IsUUFBUSxDQUFDLENBQUM7WUFDckQsTUFBTTRFLFlBQVksR0FBRy9DLEtBQUssSUFBRztjQUM1QmpELEtBQUssQ0FBQ29CLFFBQVEsR0FBRzZCLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQ3JELEtBQUs7WUFDcEMsQ0FBQztZQUNELE9BQ0N6RCxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsQ0FBQWhFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNkQsUUFBQSxRQUNDakUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLGFBQUtSLEtBQUssQ0FBQ3ZCLFFBQVEsQ0FBTSxFQUN6QmpDLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBbUIsR0FDckNwRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsQ0FBQzJDLEtBQUEsQ0FBQUksS0FBSztjQUNMQyxRQUFRLEVBQUVILFlBQVk7Y0FDdEJJLE9BQU8sRUFBRXBHLEtBQUssQ0FBQ29CLFFBQVEsS0FBSyxJQUFJO2NBQ2hDc0MsSUFBSSxFQUFDLFVBQVU7Y0FDZmQsS0FBSyxFQUFDLElBQUk7Y0FDVnlELEtBQUssRUFBQztZQUFTLEVBQ2QsRUFDRmxILE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxDQUFDMkMsS0FBQSxDQUFBSSxLQUFLO2NBQ0xDLFFBQVEsRUFBRUgsWUFBWTtjQUN0QkksT0FBTyxFQUFFcEcsS0FBSyxDQUFDb0IsUUFBUSxLQUFLLElBQUk7Y0FDaENzQyxJQUFJLEVBQUMsVUFBVTtjQUNmZCxLQUFLLEVBQUMsSUFBSTtjQUNWeUQsS0FBSyxFQUFDO1lBQVMsRUFDZCxFQUNGbEgsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLENBQUMyQyxLQUFBLENBQUFJLEtBQUs7Y0FDTEMsUUFBUSxFQUFFSCxZQUFZO2NBQ3RCSSxPQUFPLEVBQUVwRyxLQUFLLENBQUNvQixRQUFRLEtBQUssSUFBSTtjQUNoQ3NDLElBQUksRUFBQyxZQUFZO2NBQ2pCZCxLQUFLLEVBQUMsSUFBSTtjQUNWeUQsS0FBSyxFQUFDO1lBQVksRUFDakIsQ0FDTyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUFsSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBb0QsUUFBQSxHQUFBcEQsT0FBQTtVQUNBLElBQUFxRCxNQUFBLEdBQUFyRCxPQUFBO1VBQ0EsSUFBQTBHLEtBQUEsR0FBQTFHLE9BQUE7VUFFTSxTQUFVcUcsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUU5QyxLQUFLO2NBQUUzQztZQUFLLENBQUUsR0FBRyxJQUFBd0MsUUFBQSxDQUFBL0MsaUJBQWlCLEdBQUU7WUFFNUMsTUFBTSxDQUFDMkcsT0FBTyxFQUFFRSxVQUFVLENBQUMsR0FBR25ILE1BQUEsQ0FBQUksT0FBSyxDQUFDdUQsUUFBUSxDQUFDOUMsS0FBSyxDQUFDdUIsYUFBYSxLQUFLLFVBQVUsQ0FBQztZQUVoRixJQUFBa0IsTUFBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQy9DLEtBQUssQ0FBQyxFQUFFLE1BQU1zRyxVQUFVLENBQUN0RyxLQUFLLENBQUN1QixhQUFhLEtBQUssVUFBVSxDQUFDLENBQUM7WUFFeEUsTUFBTTRFLFFBQVEsR0FBR2xELEtBQUssSUFBRztjQUN4QixNQUFNTCxLQUFLLEdBQUc1QyxLQUFLLENBQUN1QixhQUFhLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxVQUFVO2NBQ3hFdkIsS0FBSyxDQUFDdUIsYUFBYSxHQUFHcUIsS0FBSztjQUMzQjBELFVBQVUsQ0FBQzFELEtBQUssS0FBSyxVQUFVLENBQUM7Y0FFaENLLEtBQUssQ0FBQ3NELGNBQWMsRUFBRTtZQUN2QixDQUFDO1lBRUQsT0FDQ3BILE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxDQUFBaEUsTUFBQSxDQUFBSSxPQUFBLENBQUE2RCxRQUFBLFFBQ0NqRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsYUFBS1IsS0FBSyxDQUFDNkQsUUFBUSxDQUFNLEVBQ3pCckgsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2NBQVNJLFNBQVMsRUFBQztZQUFtQixHQUNyQ3BFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxDQUFDMkMsS0FBQSxDQUFBVyxRQUFRO2NBQUNOLFFBQVEsRUFBRUEsUUFBUTtjQUFFQyxPQUFPLEVBQUVBLE9BQU87Y0FBRTFDLElBQUksRUFBQyxPQUFPO2NBQUMyQyxLQUFLLEVBQUUxRCxLQUFLLENBQUNxQztZQUFRLEVBQUksQ0FDN0UsQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBN0YsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9ELFFBQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBc0gsS0FBQSxHQUFBdEgsT0FBQTtVQUNBLElBQUF1SCxXQUFBLEdBQUF2SCxPQUFBO1VBRU0sU0FBVXNHLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFL0M7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBL0MsaUJBQWlCLEdBQUU7WUFFckMsTUFBTW1ILGdCQUFnQixHQUFHLENBQ3hCO2NBQ0NDLEdBQUcsRUFBRSx3QkFBd0I7Y0FDN0JDLEdBQUcsRUFBRSxrQkFBa0I7Y0FDdkJ4RCxLQUFLLEVBQUVYLEtBQUssQ0FBQ29FLFdBQVcsQ0FBQ0MsVUFBVSxDQUFDMUQsS0FBSztjQUN6QzJELEtBQUssRUFBRU4sV0FBQSxDQUFBSyxVQUFVLENBQUNFLFVBQVU7Y0FDNUJDLEtBQUssRUFBRTthQUNQLENBQ0Q7WUFFRCxPQUNDaEksTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUF3QixHQUN0Q3BFLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxhQUFLUixLQUFLLENBQUNvRSxXQUFXLENBQUN6RCxLQUFLLENBQU0sRUFDbENuRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQThCLEdBQzNDcUQsZ0JBQWdCLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxlQUFlLEVBQUVDLEtBQUssS0FDNUNuSSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ3VELEtBQUEsQ0FBQWEsY0FBYztjQUFDQyxHQUFHLEVBQUVGLEtBQUs7Y0FBRUQsZUFBZSxFQUFFQSxlQUFlO2NBQUUxRSxLQUFLLEVBQUVBO1lBQUssRUFDMUUsQ0FBQyxDQUNHLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7VUM1QkE7O1VBRUE4RSxNQUFBLENBQUFDLGNBQUEsQ0FBQXBJLE9BQUE7WUFDQXNELEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBekQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXVJLE1BQUEsR0FBQXZJLE9BQUE7VUFDQSxJQUFBd0ksTUFBQSxHQUFBeEksT0FBQTtVQUVBLElBQUE0RSxXQUFBLEdBQUE1RSxPQUFBO1VBRU8sTUFBTW1JLGNBQWMsR0FBbUNBLENBQUM7WUFBRUYsZUFBZTtZQUFFMUU7VUFBSyxDQUFFLEtBQUk7WUFDNUYsTUFBTSxDQUFDa0YsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBRzNJLE1BQUEsQ0FBQUksT0FBSyxDQUFDdUQsUUFBUSxDQUFDdUUsZUFBZSxDQUFDSixLQUFLLENBQUM7WUFDM0UsTUFBTSxDQUFDYyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHN0ksTUFBQSxDQUFBSSxPQUFLLENBQUN1RCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTdDLE1BQU1tRixtQkFBbUIsR0FBR0EsQ0FBQSxLQUFXO2NBQ3RDRCxPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQ2YsQ0FBQztZQUVELE1BQU1HLFdBQVcsR0FBR0EsQ0FBQSxLQUFXO2NBQzlCRixPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO1lBQ2YsQ0FBQztZQUVELE1BQU1JLFNBQVMsR0FBR0EsQ0FBQSxLQUF3QjtjQUN6QyxPQUNDaEosTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2dCQUFLSSxTQUFTLEVBQUM7Y0FBdUIsR0FDckNwRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ2EsV0FBQSxDQUFBMkIsTUFBTTtnQkFBQ3lDLElBQUksRUFBQyxLQUFLO2dCQUFDQyxPQUFPLEVBQUMsU0FBUztnQkFBQ3hDLE9BQU8sRUFBRW9DLG1CQUFtQjtnQkFBRTVCLEtBQUssRUFBRWdCLGVBQWUsQ0FBQy9EO2NBQUssRUFBSSxDQUM5RjtZQUVSLENBQUM7WUFFRCxNQUFNZ0YsUUFBUSxHQUFHQSxDQUFBLEtBQXdCO2NBQ3hDLE1BQU16QixHQUFHLEdBQUdRLGVBQWUsQ0FBQ1IsR0FBRyxHQUFHUSxlQUFlLENBQUNSLEdBQUcsR0FBR1EsZUFBZSxDQUFDZSxJQUFJO2NBQzVFLE1BQU10QixHQUFHLEdBQUdPLGVBQWUsQ0FBQ1IsR0FBRyxHQUFHUSxlQUFlLENBQUNQLEdBQUcsR0FBR08sZUFBZSxDQUFDL0QsS0FBSztjQUU3RSxPQUNDbkUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2dCQUFLSSxTQUFTLEVBQUM7Y0FBNkIsR0FDM0NwRSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ3dFLE1BQUEsQ0FBQVksS0FBSztnQkFBQzFCLEdBQUcsRUFBRUEsR0FBRztnQkFBRUMsR0FBRyxFQUFFQTtjQUFHLEVBQUksRUFDN0IzSCxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsZUFBT2tFLGVBQWUsQ0FBQy9ELEtBQUssQ0FBUSxDQUMvQjtZQUVSLENBQUM7WUFFRCxNQUFNa0YsT0FBTyxHQUFHLENBQUNYLFdBQVcsR0FBR00sU0FBUyxHQUFHRyxRQUFRO1lBRW5ELE9BQ0NuSixNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWlCLEdBQy9CcEUsTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLENBQUNxRixPQUFPLE9BQUcsRUFFVlQsSUFBSSxJQUFJVixlQUFlLEVBQUVGLEtBQUssSUFDOUJoSSxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ3lFLE1BQUEsQ0FBQWEsS0FBSztjQUFDVixJQUFJO2NBQUN4RSxTQUFTLEVBQUMsY0FBYztjQUFDbUYsT0FBTyxFQUFFUjtZQUFXLEdBQ3hEL0ksTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBLHdDQUFrQyxDQUVuQyxDQUNJO1VBRVIsQ0FBQztVQUFDN0QsT0FBQSxDQUFBaUksY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BERixJQUFBcEksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVKLFVBQUEsR0FBQXZKLE9BQUE7VUFFYyxTQUFVd0osV0FBV0EsQ0FBQztZQUFFM0Q7VUFBUyxDQUFFO1lBQ2hELE1BQU0sQ0FBQzRELEdBQUcsRUFBRUMsTUFBTSxDQUFDLEdBQUczSixNQUFBLENBQUFJLE9BQUssQ0FBQ3VELFFBQVEsQ0FBU21DLFNBQVMsQ0FBQzhELFFBQVEsQ0FBQztZQUVoRSxPQUNDNUosTUFBQSxDQUFBSSxPQUFBLENBQUE0RCxhQUFBO2NBQVNJLFNBQVMsRUFBQztZQUFvQixHQUNyQ3NGLEdBQUcsSUFBSTFKLE1BQUEsQ0FBQUksT0FBQSxDQUFBNEQsYUFBQSxDQUFDd0YsVUFBQSxDQUFBSyxTQUFTO2NBQUNuQyxHQUFHLEVBQUVnQyxHQUFHLElBQUksRUFBRTtjQUFFL0IsR0FBRyxFQUFFN0IsU0FBUyxDQUFDSTtZQUFXLEVBQUksQ0FDeEQ7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBbEcsTUFBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVTRKLFNBQVNBLENBQUM7WUFBRW5DLEdBQUc7WUFBRUM7VUFBRyxDQUFFO1lBQ3JDLE9BQU8zSCxNQUFBLENBQUFJLE9BQUEsQ0FBQTRELGFBQUE7Y0FBS0ksU0FBUyxFQUFDLFlBQVk7Y0FBQ3NELEdBQUcsRUFBRUEsR0FBRztjQUFFQyxHQUFHLEVBQUVBO1lBQUcsRUFBSTtVQUMxRCJ9