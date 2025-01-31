System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/icons", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-app@0.3.1/modules/management/refinament.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, CoverImage, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_12 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/icons', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@beyond-js/kernel/styles', dependency_12]]);
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
        hash: 2884828696,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _actions = require("./actions");
          var _context = require("./context");
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
            const onClick = picture ? toggleDisplayPicture : toggleModal;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: cls,
              onClick: onClick
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJDb3ZlckltYWdlQWN0aW9ucyIsIm9wZW5SZWZpbmVtZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInRvZ2dsZU1vZGFsIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImljb24iLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ltYWdlIiwiX21vZGFsIiwiX2FjdGlvbnMiLCJEaXNwbGF5UGljdHVyZSIsInNob3ciLCJvbkNsb3NlIiwicGljdHVyZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkltYWdlIiwic3JjIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiZXJyb3IiLCJtZXNzYWdlIiwiQWxlcnQiLCJ0eXBlIiwiX3VpIiwiX3JlZmluYW1lbnQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZGlzcGxheSIsIkNvdmVySW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZW50aXR5Iiwic3VnZ2VzdGlvbnMiLCJvbkdlbmVyYXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNob3dEaXNwbGF5UGljdHVyZSIsInNldFNob3dEaXNwbGF5UGljdHVyZSIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm93bmVyIiwiY3JlZGl0cyIsImNvbnN1bWVDb2lucyIsIm1vZGVsIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJzdWJ0aXRsZSIsInVzZUVmZmVjdCIsInZhbHVlIiwiY2xzIiwiUHJvdmlkZXIiLCJFbnRpdHlJbWFnZSIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwiZ2xvYmFsVGV4dHMiLCJjb25maXJtIiwibm90ZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2Rpc3BsYXkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBRU0sU0FBVUcsaUJBQWlCQSxDQUFDLEVBQUU7WUFDbkMsTUFBTTtjQUFFQztZQUFjLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRTdDLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ3hCRixjQUFjLEVBQUU7WUFDakIsQ0FBQztZQUVELE9BQ0NILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUFQLE1BQUEsQ0FBQU0sT0FBQSxDQUFBRSxRQUFBLFFBQ0NSLE1B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