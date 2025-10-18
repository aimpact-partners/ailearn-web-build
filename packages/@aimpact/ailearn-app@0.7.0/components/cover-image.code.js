System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.7.0/components/icons", "react@18.3.1", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "pragmate-ui@1.0.8/image", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/alert", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/modules/management/refinament.code", "@beyond-js/react-18-widgets@1.1.8/hooks", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, CoverImage, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    CoverImage: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_1 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_3 = _pragmateUi108Components;
    }, function (_pragmateUi108Icons) {
      dependency_4 = _pragmateUi108Icons;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_pragmateUi108Image) {
      dependency_6 = _pragmateUi108Image;
    }, function (_pragmateUi108Modal) {
      dependency_7 = _pragmateUi108Modal;
    }, function (_pragmateUi108Alert) {
      dependency_8 = _pragmateUi108Alert;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_9 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp070ModulesManagementRefinamentCode;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_11 = _beyondJsReact18Widgets118Hooks;
    }, function (_beyondJsKernel0114Styles) {
      dependency_12 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/icons', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@beyond-js/kernel/styles', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/components/cover-image.code');
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
        hash: 211440641,
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
              textarea: texts.textarea,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJDb3ZlckltYWdlQWN0aW9ucyIsIm9wZW5SZWZpbmVtZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInRvZ2dsZU1vZGFsIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImljb24iLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ltYWdlIiwiX21vZGFsIiwiX2FjdGlvbnMiLCJEaXNwbGF5UGljdHVyZSIsInNob3ciLCJvbkNsb3NlIiwicGljdHVyZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkltYWdlIiwic3JjIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiZXJyb3IiLCJtZXNzYWdlIiwiQWxlcnQiLCJ0eXBlIiwiX3VpIiwiX3JlZmluYW1lbnQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZGlzcGxheSIsIkNvdmVySW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZW50aXR5Iiwic3VnZ2VzdGlvbnMiLCJvbkdlbmVyYXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNob3dEaXNwbGF5UGljdHVyZSIsInNldFNob3dEaXNwbGF5UGljdHVyZSIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm93bmVyIiwiY3JlZGl0cyIsImNvbnN1bWVDb2lucyIsIm1vZGVsIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJzdWJ0aXRsZSIsInVzZUVmZmVjdCIsInZhbHVlIiwiY2xzIiwiUHJvdmlkZXIiLCJFbnRpdHlJbWFnZSIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwiZ2xvYmFsVGV4dHMiLCJjb25maXJtIiwidGV4dGFyZWEiLCJub3RlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy90cy9hY3Rpb25zLnRzeCIsIi8vdHMvYWktYnV0dG9uLnRzeCIsIi8vdHMvY29udGV4dC50c3giLCIvL3RzL2Rpc3BsYXkudHN4IiwiLy90cy9lcnJvci1yZW5kZXJlci50c3giLCIvL3RzL2luZGV4LnRzeCIsIi8vdHlwZXMudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVVHLGlCQUFpQkEsQ0FBQyxFQUFFO1lBQ25DLE1BQU07Y0FBRUM7WUFBYyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUU3QyxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUN4QkYsY0FBYyxFQUFFO1lBQ2pCLENBQUM7WUFFRCxPQUNDSCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFBUCxNQUFBLENBQUFNLE9BQUEs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