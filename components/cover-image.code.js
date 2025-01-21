System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/icons", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, CoverImage, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    CoverImage: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_1 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_3 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_4 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_pragmateUi100Beta7Image) {
      dependency_6 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_7 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_8 = _pragmateUi100Beta7Alert;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_9 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnApp031ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp031ModulesManagementRefinamentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_12 = _pragmateUi100Beta7Form;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/icons', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/form', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 2679961408,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("./context");
          function CoverImageActions({}) {
            const {
              openRefinement
            } = (0, _context.useModuleContext)();
            const toggleModal = () => {
              openRefinement();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figcaption", {
              className: "actions"
            }, _react.default.createElement(_icons.AppIconButton, {
              variant: "primary",
              className: "circle",
              onClick: toggleModal,
              icon: "edit"
            })));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./ai-button
      ***************************/

      ims.set('./ai-button', {
        hash: 86064447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIButton = AIButton;
          exports.AIIconButton = AIIconButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4281481501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*************************
      INTERNAL MODULE: ./display
      *************************/

      ims.set('./display', {
        hash: 3702223538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DisplayPicture = DisplayPicture;
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("./context");
          var _actions = require("./actions");
          function DisplayPicture({
            show,
            onClose
          }) {
            const {
              picture
            } = (0, _context.useModuleContext)();
            if (!show) return false;
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "refine-modal refine-modal--visualization",
              onClose: onClose
            }, _react.default.createElement(_image.Image, {
              className: "portrait-view",
              src: picture
            }), _react.default.createElement(_actions.CoverImageActions, null));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./error-renderer
      ********************************/

      ims.set('./error-renderer', {
        hash: 4166111875,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function ErrorRenderer({
            texts,
            error
          }) {
            if (!error) return null;
            let message = texts[error] ? texts[error] : texts.default;
            return _react.default.createElement(_alert.Alert, {
              type: "error"
            }, message);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1492677326,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _actions = require("./actions");
          var _context = require("./context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _display = require("./display");
          /*bundle*/ /**
                      * useBinder([store.model], () => setImage(picture), 'image.generated');
                      * @param param0
                      * @returns
                      */
          function CoverImage({
            title,
            description,
            picture,
            entity,
            type,
            suggestions,
            onGenerate
          }) {
            const [image, setImage] = _react.default.useState(picture);
            const [fetching, setFetching] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showDisplayPicture, setShowDisplayPicture] = _react.default.useState(false);
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const toggleDisplayPicture = event => {
              event?.stopPropagation();
              setShowDisplayPicture(!showDisplayPicture);
            };
            const toggleModal = () => {
              if (showDisplayPicture) setShowDisplayPicture(false);
              setShowRefiningModal(!showModal);
            };
            let owner = null;
            let credits = null;
            let consumeCoins = null;
            if (_mainLayout.LayoutBroker.model) {
              owner = _mainLayout.LayoutBroker.model.owner;
              credits = _mainLayout.LayoutBroker.model.credits;
              consumeCoins = _mainLayout.LayoutBroker.model.consumeCoins;
            }
            const titleLabel = title || texts.title;
            const descriptionLabel = description || texts.subtitle;
            _react.default.useEffect(() => setImage(picture), [picture]);
            const value = {
              picture: image,
              setImage,
              openRefinement: toggleModal,
              title,
              description,
              fetching,
              suggestions,
              type,
              entity,
              setFetching,
              onGenerate,
              texts: texts
            };
            if (!textsReady) return _react.default.createElement("div", {
              className: "cover-image-skeleton"
            });
            const cls = `cover-image__container${picture ? ' has-image' : ''}`;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: cls,
              onClick: toggleDisplayPicture
            }, _react.default.createElement(_ui.EntityImage, {
              type: type,
              src: picture,
              entity: entity,
              className: "rounded circle"
            }), !picture && _react.default.createElement(_actions.CoverImageActions, null), _react.default.createElement(_display.DisplayPicture, {
              show: showDisplayPicture,
              onClose: toggleDisplayPicture
            })), _mainLayout.LayoutBroker.model && _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              required: true,
              owner: owner,
              value: suggestions,
              credits: credits,
              onConsume: consumeCoins,
              globalTexts: _mainLayout.LayoutBroker.globalTexts,
              onClose: toggleModal,
              confirm: !!picture,
              title: titleLabel,
              onGenerate: ({
                notes
              }) => onGenerate(notes),
              description: descriptionLabel
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./modals/confirm
      ********************************/

      ims.set('./modals/confirm', {
        hash: 3279452274,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmRefinementModal = ConfirmRefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          function ConfirmRefinementModal({
            show,
            onConfirm,
            onClose
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [, setOpenConfirm] = _react.default.useState(false);
            if (!show) return null;
            const onCancel = () => setOpenConfirm(false);
            const actions = {
              confirm: {
                variant: 'primary',
                label: texts.actions.confirm
              },
              cancel: {
                label: texts.actions.cancel,
                variant: 'primary',
                bordered: true
              }
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onCancel,
              actions: actions,
              show: true,
              title: texts.confirm.title,
              text: texts.confirm.subtitle
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./modals/refinement-modal
      *****************************************/

      ims.set('./modals/refinement-modal', {
        hash: 4022374994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _aiButton = require("../ai-button");
          var _errorRenderer = require("../error-renderer");
          var _context = require("../context");
          var _confirm = require("./confirm");
          function RefinementModal({
            show,
            confirm,
            onClose
          }) {
            const {
              suggestions,
              title,
              description,
              setImage,
              onGenerate,
              texts
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [notes, setNotes] = _react.default.useState(suggestions ?? '');
            const [openConfirm, setOpenConfirm] = _react.default.useState(false);
            const handleClose = () => {
              setOpenConfirm(false);
              setNotes(suggestions);
              onClose();
            };
            const events = {
              onChange: event => setNotes(event.currentTarget.value),
              onClick: async () => {
                try {
                  setOpenConfirm(false);
                  setFetching(true);
                  const picture = await onGenerate(notes);
                  onClose();
                  setImage(picture);
                } catch (e) {
                  setError(e.message);
                } finally {
                  window.setTimeout(() => {
                    setFetching(false);
                  }, 100);
                }
              }
            };
            const toggleConfirm = () => setOpenConfirm(!openConfirm);
            const onClickAction = confirm ? toggleConfirm : events.onClick;
            const titleLabel = title || texts.title;
            const descriptionLabel = description || texts.subtitle;
            if (!show) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: handleClose,
              closeBackdrop: false
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, titleLabel)), _react.default.createElement("p", null, descriptionLabel), _react.default.createElement(_form.Form, null, _react.default.createElement(_errorRenderer.ErrorRenderer, {
              texts: texts.errors,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              name: "notes",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.notes.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-center mt-15"
            }, _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onClickAction,
              disabled: !notes
            }, texts.actions.generate)), _react.default.createElement(_confirm.ConfirmRefinementModal, {
              show: openConfirm,
              onClose: toggleConfirm,
              onConfirm: events.onClick
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1701412056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./index",
        "from": "CoverImage",
        "name": "CoverImage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./ai-button').AIIconButton : value);
        (require || prop === 'CoverImage') && _export("CoverImage", CoverImage = require ? require('./index').CoverImage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJDb3ZlckltYWdlQWN0aW9ucyIsIm9wZW5SZWZpbmVtZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInRvZ2dsZU1vZGFsIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImljb24iLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ltYWdlIiwiX21vZGFsIiwiX2FjdGlvbnMiLCJEaXNwbGF5UGljdHVyZSIsInNob3ciLCJvbkNsb3NlIiwicGljdHVyZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkltYWdlIiwic3JjIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiZXJyb3IiLCJtZXNzYWdlIiwiQWxlcnQiLCJ0eXBlIiwiX3VpIiwiX3JlZmluYW1lbnQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZGlzcGxheSIsIkNvdmVySW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZW50aXR5Iiwic3VnZ2VzdGlvbnMiLCJvbkdlbmVyYXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNob3dEaXNwbGF5UGljdHVyZSIsInNldFNob3dEaXNwbGF5UGljdHVyZSIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm93bmVyIiwiY3JlZGl0cyIsImNvbnN1bWVDb2lucyIsIm1vZGVsIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJzdWJ0aXRsZSIsInVzZUVmZmVjdCIsInZhbHVlIiwiY2xzIiwiUHJvdmlkZXIiLCJFbnRpdHlJbWFnZSIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwiZ2xvYmFsVGV4dHMiLCJjb25maXJtIiwibm90ZXMiLCJDb25maXJtUmVmaW5lbWVudE1vZGFsIiwib25Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJvbkNhbmNlbCIsImFjdGlvbnMiLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIl9mb3JtIiwiX2FpQnV0dG9uIiwiX2Vycm9yUmVuZGVyZXIiLCJfY29uZmlybSIsInNldEVycm9yIiwic2V0Tm90ZXMiLCJvcGVuQ29uZmlybSIsImhhbmRsZUNsb3NlIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ0b2dnbGVDb25maXJtIiwib25DbGlja0FjdGlvbiIsIkZvcm0iLCJlcnJvcnMiLCJUZXh0YXJlYSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiZ2VuZXJhdGUiLCJQcm9jZXNzQ29udGFpbmVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9kaXNwbGF5LnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21vZGFscy9jb25maXJtLnRzeCIsIi90cy9tb2RhbHMvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBRU0sU0FBVUcsaUJBQWlCQSxDQUFDLEVBQUU7WUFDbkMsTUFBTTtjQUFFQztZQUFjLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRTdDLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ3hCRixjQUFjLEVBQUU7WUFDakIsQ0FBQztZQUVELE9BQ0NILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUFQLE1BQUEsQ0FBQU0sT0FBQSxDQUFBRSxRQUFBLFFBQ0NSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVlFLFNBQVMsRUFBQztZQUFTLEdBRzlCVCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVCxNQUFBLENBQUFZLGFBQWE7Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0YsU0FBUyxFQUFDLFFBQVE7Y0FBQ0csT0FBTyxFQUFFUCxXQUFXO2NBQUVRLElBQUksRUFBQztZQUFNLEVBQUcsQ0FDNUUsQ0FDWDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQWIsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWUsV0FBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLE9BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsV0FBQSxHQUFBakIsT0FBQTtVQUVPO1VBQVUsU0FBVWtCLFFBQVFBLENBQUM7WUFBRUMsUUFBUTtZQUFFTixPQUFPO1lBQUUsR0FB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