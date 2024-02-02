System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.3/base", "@beyond-js/reactive@1.1.9/model", "@beyond-js/kernel@0.1.9/core", "@aimpact/chat@1.0.1/wrapper", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.6/components", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/model/gclassroom", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_4 = _beyondJsReact18Widgets103Base;
    }, function (_beyondJsReactive119Model) {
      dependency_5 = _beyondJsReactive119Model;
    }, function (_beyondJsKernel019Core) {
      dependency_6 = _beyondJsKernel019Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_8 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_aimpactChatSdk100Session) {
      dependency_10 = _aimpactChatSdk100Session;
    }, function (_pragmateUi006Form) {
      dependency_11 = _pragmateUi006Form;
    }, function (_aimpactAilearnApp0024ModelGclassroom) {
      dependency_12 = _aimpactAilearnApp0024ModelGclassroom;
    }, function (_pragmateUi006Image) {
      dependency_13 = _pragmateUi006Image;
    }, function (_pragmateUi006Modal) {
      dependency_14 = _pragmateUi006Modal;
    }, function (_pragmateUi006Icons) {
      dependency_15 = _pragmateUi006Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/core', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/model/gclassroom', dependency_12], ['pragmate-ui/image', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/icons', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/user/profile.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/user/profile.widget');
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
        hash: 1213406491,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionItem = void 0;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _icons = require("pragmate-ui/icons");
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
            const renderContent = () => {
              if (checkedItem && connectionValue.src) {
                return _react.default.createElement(_image.Image, {
                  src: connectionValue.src,
                  alt: connectionValue.alt
                });
              } else if (connectionValue.icon) {
                return _react.default.createElement("img", {
                  src: connectionValue.icon,
                  alt: connectionValue.title
                });
              } else {
                return null;
              }
            };
            return _react.default.createElement("div", {
              className: "permission-item"
            }, _react.default.createElement("div", {
              className: `permission-menu__item ${!checkedItem && ' btn btn-primary'}`,
              onClick: !checkedItem ? handleVincularClick : undefined
            }, _react.default.createElement("div", {
              className: "permission-content"
            }, checkedItem ? renderContent() : _react.default.createElement(_icons.Icon, {
              className: "sm",
              icon: "add"
            })), _react.default.createElement("span", null, connectionValue.title)), show && connectionValue?.modal && _react.default.createElement(_modal.Modal, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIl9tb2RlbCIsIl9jb3JlIiwiX3JlbmRlciIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJjb25zdHJ1Y3RvciIsImF1ZGlvU3BlZWQiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJyZWFkeSIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImFjY2Vzc2liaWxpdHkiLCJpbml0aWFsVmFsdWVzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcFdyYXBwZXIiLCJzZXRTZXR0aW5ncyIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJ0ZXh0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm9uSW5wdXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJhdWRpbyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwZWVkIiwibmFtZSIsInR5cGUiLCJtYXgiLCJtaW4iLCJzdGVwIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfc2Vzc2lvbiIsIl9JbWFnZVBpY2tlciIsIl9MYW5ndWFnZVNlbGVjdG9yIiwiX21vZGVTZWxlY3Rpb24iLCJfYXVkaW8iLCJfcGVybWlzc2lvbnMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInNldEZldGNoaW5nIiwiaXNVbnB1Ymxpc2hlZCIsInNldElzVW5wdWJsaXNoZWQiLCJzZXRBY2Nlc3NpYmlsdHkiLCJkeXNsZXhpYSIsInVzZXJQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJMYW5ndWFnZVNlbGVjdG9yIiwiTW9kZVNlbGVjdGlvbiIsIlBlcm1pc3Npb25zIiwiQnV0dG9uIiwibG9hZGluZyIsIm9uQ2xpY2siLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJsYWJlbCIsInNldENoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRNb2RlIiwiQ2hlY2tib3giLCJfaXRlbSIsIl9nY2xhc3Nyb29tIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwibWFwIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiX2ljb25zIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlVmluY3VsYXJDbGljayIsImhhbmRsZU1vZGFsIiwicmVuZGVyQ29udGVudCIsIkltYWdlIiwiaWNvbiIsIkljb24iLCJNb2RhbCIsIm9uQ2xvc2UiLCJfVXNlckltYWdlIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS1zZWxlY3Rvci9MYW5ndWFnZVNlbGVjdG9yLnRzeCIsIi90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaXRlbS50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9Vc2VySW1hZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFRTyxNQUFNQyxjQUFjLEdBQUFDLE9BQUEsQ0FBQUQsY0FBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFDakUsTUFBTUMsaUJBQWlCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsY0FBYyxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsaUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVHhFLElBQUFFLEtBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFT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