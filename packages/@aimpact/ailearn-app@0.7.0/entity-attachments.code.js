System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/images", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/media-manager@1.0.0/uploader", "clsx@2.1.1", "pragmate-ui@1.0.8/components", "react@18.3.1", "react-icons@5.5.0/fa", "react-icons@5.5.0/fi", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/image", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/alert", "pragmate-ui@1.0.8/drawer", "gsap@3.13.0", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/list", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, AttachmentsStore, useStoreManager, IUseUploader, useUploader, Attachments, AttachmentsModal, __beyond_pkg, hmr;
  _export({
    AttachmentsStore: void 0,
    useStoreManager: void 0,
    IUseUploader: void 0,
    useUploader: void 0,
    Attachments: void 0,
    AttachmentsModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_1 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120Images) {
      dependency_2 = _aimpactAilearnSdk120Images;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_3 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_4 = _aimpactMediaManager100Uploader;
    }, function (_clsx2) {
      dependency_5 = _clsx2;
    }, function (_pragmateUi108Components) {
      dependency_6 = _pragmateUi108Components;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_reactIcons550Fa) {
      dependency_8 = _reactIcons550Fa;
    }, function (_reactIcons550Fi) {
      dependency_9 = _reactIcons550Fi;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_11 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_12 = _aimpactAilearnApp070ComponentsUi;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_pragmateUi108Icons) {
      dependency_14 = _pragmateUi108Icons;
    }, function (_pragmateUi108Image) {
      dependency_15 = _pragmateUi108Image;
    }, function (_beyondJsKernel0114Core) {
      dependency_16 = _beyondJsKernel0114Core;
    }, function (_pragmateUi108Toast) {
      dependency_17 = _pragmateUi108Toast;
    }, function (_pragmateUi108Alert) {
      dependency_18 = _pragmateUi108Alert;
    }, function (_pragmateUi108Drawer) {
      dependency_19 = _pragmateUi108Drawer;
    }, function (_gsap2) {
      dependency_20 = _gsap2;
    }, function (_pragmateUi108Modal) {
      dependency_21 = _pragmateUi108Modal;
    }, function (_pragmateUi108Form) {
      dependency_22 = _pragmateUi108Form;
    }, function (_pragmateUi108List) {
      dependency_23 = _pragmateUi108List;
    }, function (_beyondJsKernel0114Styles) {
      dependency_24 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/entity-attachments",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/stores/base', dependency_1], ['@aimpact/ailearn-sdk/images', dependency_2], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_3], ['@aimpact/media-manager/uploader', dependency_4], ['clsx', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['react-icons/fa', dependency_8], ['react-icons/fi', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/image', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/alert', dependency_18], ['pragmate-ui/drawer', dependency_19], ['gsap', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/list', dependency_23], ['@beyond-js/kernel/styles', dependency_24]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/entity-attachments.code');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./store
      ***********************/
      ims.set('./store', {
        hash: 3809729183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AttachmentsStore = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _images = require("@aimpact/ailearn-sdk/images");
          /*bundle*/
          class AttachmentsStore extends _base.BaseStoreManager {
            #searchTerm = '';
            get searchTerm() {
              return this.#searchTerm;
            }
            #results = [];
            get results() {
              return this.#collection.items;
            }
            #error = null;
            get error() {
              return this.#error;
            }
            #collection = new _images.GoogleImages();
            constructor(activity, credits) {
              super('@aimpact/ailearn-app/entity-attachments', {
                properties: ['image', 'state', 'imageGenerated', 'openGenerator', 'activity', 'credits', 'panelOpened', 'searchedImage', 'uploadedImage']
              });
              this.activity = activity;
              this.credits = credits;
              this.state = 'empty';
            }
            async search(query) {
              if (!query.trim()) return;
              this.fetching = true;
              await this.#collection.load({
                id: this.activity.parent.id,
                query
                // num: 12
                // start: 1
              });
              this.fetching = false;
              this.trigger('results.changed');
              return;
            }
            selectImage(image) {
              this.image = image;
              // this.triggerEvent();
            }
            clear() {
              this.#searchTerm = '';
              this.#results = [];
              this.revert();
              this.image = undefined;
              this.#collection = new _images.GoogleImages();
              this.#error = null;
              this.state = 'empty';
              this.trigger('change');
            }
            async generateImage({
              text,
              files,
              urls
            }) {
              if (!this.activity) {
                throw new Error('Draft is not loaded');
              }
              const image = await this.activity.generateImage({
                text,
                files,
                urls
              });
              this.image = image;
              return image;
            }
            async upload(image) {
              const specs = image.constructor.name === 'GoogleImage' ? {
                url: image.link
              } : {
                file: image.file
              };
              return await this.activity.uploadImage(specs);
            }
          }
          exports.AttachmentsStore = AttachmentsStore;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/actions
      *******************************/

      ims.set('./views/actions', {
        hash: 3553363230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Actions = Actions;
          var _clsx = require("clsx");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("./context");
          var _useUploader = require("./hooks/use-uploader");
          var _fa = require("react-icons/fa");
          var _fi = require("react-icons/fi");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function Actions() {
            const {
              gallery,
              texts
            } = (0, _context.useGalleryContext)();
            const [showOptions, setShowOptions] = React.useState(false);
            const onDropdown = () => setShowOptions(!showOptions);
            const DropDownItems = () => {
              const {
                triggerRef
              } = (0, _useUploader.useUploader)({
                accept: 'image/*',
                validators: [{
                  name: 'image',
                  options: {
                    maxSize: 5
                  }
                }],
                processors: ['image'],
                onLoad: files => {
                  onDropdown();
                  if (files.length > 0) {
                    gallery.uploadedImage = files[0];
                  }
                }
              });
              const onNavigate = event => {
                event.stopPropagation();
                if (event.currentTarget.dataset.state === 'generate') {
                  gallery.openGenerator = true;
                  return;
                }
                gallery.state = event.currentTarget.dataset.state;
                setShowOptions(false);
              };
              return React.createElement("div", {
                className: "dropdown-menu"
              }, React.createElement("div", {
                className: "gallery-dropdown-menu__list"
              }, React.createElement("div", {
                className: "dropdown-menu__item",
                "data-state": "search",
                onClick: onNavigate
              }, React.createElement(_fa.FaGoogle, null), " ", texts.actions.search), React.createElement("div", {
                className: "dropdown-menu__item",
                ref: triggerRef
              }, React.createElement(_fi.FiUpload, null), texts.actions.upload), React.createElement("div", {
                className: "dropdown-menu__item",
                "data-state": "generate",
                onClick: onNavigate
              }, React.createElement(_icons.AppIcon, {
                icon: "aiStars"
              }), " ", texts.actions.generate)));
            };
            return React.createElement("div", {
              className: "gallery-actions"
            }, React.createElement("div", {
              className: (0, _clsx.default)('dropdown-container', {
                'dropdown-menu--opened': showOptions
              })
            }, React.createElement(_components.Button, {
              icon: "gallery",
              onClick: onDropdown
            }, texts.actions.upload), showOptions && React.createElement(DropDownItems, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/assets/index
      ************************************/

      ims.set('./views/assets/index', {
        hash: 2099594244,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assets = Assets;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _framerMotion = require("framer-motion");
          var React = require("react");
          var _context = require("../context");
          var _emptyState = require("../empty-state");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _actions = require("../actions");
          var _item = require("./item");
          function Assets() {
            const {
              gallery,
              texts
            } = (0, _context.useGalleryContext)();
            const store = gallery;
            const [assets, setAssets] = React.useState(gallery.activity.materials?.assets?.items || []);
            const onDelete = item => {
              setAssets(assets.filter(asset => asset.id !== item.id));
            };
            (0, _hooks.useStore)(gallery.activity.materials, ['change'], () => {
              setAssets(gallery.activity.materials?.assets?.items || []);
            });
            if (!assets.length) return React.createElement(_emptyState.EmptyState, null);
            const attrs = {
              onClick: () => {
                if (store.state === 'empty') return;
                store.state = 'empty';
              },
              disabled: store.state === 'empty',
              icon: store.state === 'empty' ? 'gallery' : 'backArrow'
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "attachments-gallery__header"
            }, React.createElement(_icons.AppIconButton, {
              ...attrs
            }), React.createElement("h4", null, texts.header.title), React.createElement(_actions.Actions, null)), React.createElement("div", {
              className: "attachments__main-panel"
            }, React.createElement("div", {
              className: "gallery-assets-container"
            }, React.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, React.createElement("ul", {
              className: "assets-container"
            }, assets.map(item => React.createElement(_item.Item, {
              key: item.id,
              item: item,
              onDelete: onDelete
            })))), React.createElement(_ui.ProcessContainer, {
              fetching: store.fetching
            }))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/assets/item
      ***********************************/

      ims.set('./views/assets/item', {
        hash: 3049128623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _framerMotion = require("framer-motion");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var React = require("react");
          var _context = require("../context");
          function Item({
            item,
            onDelete
          }) {
            const {
              gallery
            } = (0, _context.useGalleryContext)();
            const onClick = () => {
              gallery.selectImage(item);
            };
            const onDeleteFn = event => {
              event.stopPropagation();
              event.preventDefault();
              onDelete(item);
              globalThis.setTimeout(() => {
                gallery.activity.materials.removeAsset(item.id);
              }, 300);
            };
            return React.createElement(_framerMotion.motion.li, {
              key: item.id,
              onClick: onClick,
              layout: true,
              initial: {
                opacity: 1,
                scale: 1
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              exit: {
                opacity: 0,
                scale: 0.8,
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut'
                }
              }
            }, React.createElement("div", {
              className: "gallery-image__item"
            }, React.createElement(_image.Image, {
              src: item.src,
              alt: item.description
            }), React.createElement("section", {
              className: "gallery-image__item-actions"
            }, React.createElement(_icons.IconButton, {
              variant: "primary",
              icon: "delete",
              onClick: onDeleteFn
            }))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1507557972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useGalleryContext = exports.GalleryContext = void 0;
          var React = require("react");
          const GalleryContext = exports.GalleryContext = React.createContext({});
          const useGalleryContext = () => React.useContext(GalleryContext);
          exports.useGalleryContext = useGalleryContext;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/empty-state/image-icon
      **********************************************/

      ims.set('./views/empty-state/image-icon', {
        hash: 798117152,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageIcon = ImageIcon;
          var React = require("react");
          function ImageIcon() {
            return React.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "46",
              height: "46",
              viewBox: "0 0 46 46",
              fill: "none"
            }, React.createElement("path", {
              d: "M5.35156 45.6553C3.97656 45.6553 2.79948 45.1657 1.82031 44.1865C0.841146 43.2074 0.351562 42.0303 0.351562 40.6553V5.65527C0.351562 4.28027 0.841146 3.10319 1.82031 2.12402C2.79948 1.14486 3.97656 0.655273 5.35156 0.655273H40.3516C41.7266 0.655273 42.9036 1.14486 43.8828 2.12402C44.862 3.10319 45.3516 4.28027 45.3516 5.65527V40.6553C45.3516 42.0303 44.862 43.2074 43.8828 44.1865C42.9036 45.1657 41.7266 45.6553 40.3516 45.6553H5.35156ZM5.35156 40.6553H40.3516V5.65527H5.35156V40.6553ZM7.85156 35.6553H37.8516L28.4766 23.1553L20.9766 33.1553L15.3516 25.6553L7.85156 35.6553Z",
              fill: "#777777"
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/empty-state/index
      *****************************************/

      ims.set('./views/empty-state/index', {
        hash: 828908205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyState = EmptyState;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../context");
          var _useUploader = require("../hooks/use-uploader");
          var _imageIcon = require("./image-icon");
          function EmptyState() {
            const {
              gallery,
              texts
            } = (0, _context.useGalleryContext)();
            const {
              triggerRef
            } = (0, _useUploader.useUploader)({
              accept: 'image/*',
              validators: [{
                name: 'image',
                options: {
                  maxSize: 5
                }
              }],
              processors: ['image'],
              onLoad: files => {
                if (files.length > 0) {
                  gallery.uploadedImage = files[0];
                }
              }
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "attachments__empty-state"
            }, React.createElement("div", {
              className: "empty-state__icon"
            }, React.createElement(_imageIcon.ImageIcon, null)), React.createElement("h3", {
              className: "empty-state__title"
            }, texts.empty.title), React.createElement("p", {
              className: "empty-state__description"
            }, texts.empty.description), React.createElement("div", {
              className: "empty-state__actions"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              className: "empty-state__button",
              onClick: () => gallery.state = 'search'
            }, texts.actions.search), React.createElement(_components.Button, {
              variant: "primary",
              ref: triggerRef,
              bordered: true,
              className: "empty-state__button"
            }, texts.actions.upload), React.createElement(_icons.AppButton, {
              icon: "aiStars",
              variant: "primary",
              bordered: true,
              onClick: () => gallery.openGenerator = true,
              className: "empty-state__button"
            }, texts.actions.generate))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/error-boundary
      **************************************/

      ims.set('./views/error-boundary', {
        hash: 1535408211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorBoundary = void 0;
          var React = require("react");
          class ErrorBoundary extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                hasError: false,
                error: null
              };
            }
            static getDerivedStateFromError(error) {
              return {
                hasError: true,
                error
              };
            }
            componentDidCatch(error, errorInfo) {
              console.error('Error caught by ErrorBoundary:', error, errorInfo);
            }
            render() {
              if (this.state.hasError) {
                if (this.props.fallback) {
                  return this.props.fallback;
                }
                return React.createElement("div", {
                  className: "error-boundary"
                }, React.createElement("div", {
                  className: "error-boundary__content"
                }, React.createElement("h3", null, "Something went wrong"), React.createElement("p", null, "An error occurred while loading the gallery. Please try again."), this.state.error && React.createElement("details", null, React.createElement("summary", null, "Error details"), React.createElement("pre", null, this.state.error.message))));
              }
              return this.props.children;
            }
          }
          exports.ErrorBoundary = ErrorBoundary;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/footer
      ******************************/

      ims.set('./views/footer', {
        hash: 1593912574,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FooterGallery = FooterGallery;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function FooterGallery({
            promise,
            onClose
          }) {
            const {
              texts,
              gallery,
              fetching
            } = (0, _context.useGalleryContext)();
            const handleConfirmSelection = () => {
              if (gallery.selectedImage) {
                promise?.resolve(gallery.selectedImage);
                onClose();
              }
            };
            if (!gallery.selectedImage) return null;
            return React.createElement("div", {
              className: "gallery-modal__actions"
            }, React.createElement(_components.Button, {
              onClick: handleConfirmSelection,
              className: "btn-primary",
              disabled: fetching
            }, texts.actions.select));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/hooks/use-store-manager
      ***********************************************/

      ims.set('./views/hooks/use-store-manager', {
        hash: 203364948,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStoreManager = useStoreManager;
          var _react = require("react");
          var _store = require("../../store");
          /*bundle*/
          function useStoreManager(activity, credits) {
            const [ready, setReady] = _react.default.useState(false);
            const [store, setStore] = _react.default.useState(null);
            const [, setVersion] = _react.default.useState(0);
            const events = ['change'];
            _react.default.useEffect(() => {
              const store = new _store.AttachmentsStore(activity, credits);
              setStore(store);
              const handler = () => {
                setVersion(v => v + 1);
                setReady(store.ready || !!store.texts);
              };
              // Subscribe to all specified events
              events.forEach(event => store.on(event, handler));
              handler();
              // Cleanup: unsubscribe from all events
              return () => {
                events.forEach(event => store.off(event, handler));
              };
            }, []);
            return {
              store,
              ready
            };
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/hooks/use-uploader
      ******************************************/

      ims.set('./views/hooks/use-uploader', {
        hash: 2296827813,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _uploader = require("@aimpact/media-manager/uploader");
          /*bundle*/ // react/use-uploader.ts

          /**
           * Minimal React hook for using the Uploader inside components.
           * Supports generics so you can specialize files (IImageFile, IVideoFile, etc.).
           */
          function useUploader(specs) {
            const triggerRef = React.useRef(null);
            const dropZoneRef = React.useRef(null);
            const {
              onLoad
            } = specs;
            // Create uploader instance once
            const [uploader] = React.useState(() => new _uploader.Uploader(specs));
            const store = (0, _hooks.useStore)(uploader, ['change'], () => {
              if (onLoad) onLoad(store.files.items);
            });
            // Bind uploader with trigger/dropzone once mounted
            React.useEffect(() => {
              if (!triggerRef.current) return;
              uploader.create(triggerRef.current, dropZoneRef.current ?? undefined);
              return () => uploader.destroy();
            }, [uploader]);
            const count = store.files.total;
            const progress = store.files.total > 0 ? Math.round(store.files.items.length / store.files.total * 100) : 0;
            return {
              triggerRef,
              dropZoneRef,
              uploader,
              files: store.files.items,
              errors: store.errors,
              uploading: store.fetching,
              progress,
              count
            };
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/image-manager/action-buttons
      ****************************************************/

      ims.set('./views/image-manager/action-buttons', {
        hash: 1470275719,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionButtons = ActionButtons;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ActionButtons({
            onEditMode,
            onUseImage
          }) {
            const {
              texts,
              fetching,
              gallery
            } = (0, _context.useGalleryContext)();
            const credits = gallery.credits;
            (0, _hooks.useStore)(gallery, ['fetching.changed']);
            (0, _hooks.useStore)(credits);
            return React.createElement("div", {
              className: "selected-panel__actions"
            }, gallery.image && React.createElement(_icons.AppButton, {
              icon: "aiStars",
              onClick: onEditMode,
              className: "btn-primary selected-panel__use-button ",
              disabled: fetching || credits.availableImages === 0,
              bordered: true
            }, texts.actions.editWithAi, React.createElement("div", {
              className: "available-images"
            }, credits.availableImages, " /", credits.totalImages)), React.createElement(_components.Button, {
              onClick: onUseImage,
              className: "btn-primary selected-panel__use-button",
              disabled: fetching
            }, texts.actions.use));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/image-manager/edit-mode
      ***********************************************/

      ims.set('./views/image-manager/edit-mode', {
        hash: 3399408297,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EditMode = EditMode;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _toast = require("pragmate-ui/toast");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _alert = require("pragmate-ui/alert");
          function EditMode({
            setProcessing,
            processing,
            setImageGenerated,
            onEditMode
          }) {
            const {
              texts: {
                selectedImage: texts,
                process,
                actions: actionsTexts,
                interactions
              },
              gallery
            } = (0, _context.useGalleryContext)();
            const credits = gallery.credits;
            (0, _hooks.useStore)(credits);
            const [prompt, setPrompt] = React.useState('');
            const [isGenerating, setIsGenerating] = React.useState(false);
            const [error, setError] = React.useState(null);
            const onPromptChange = event => {
              setPrompt(event.target.value);
            };
            const onGenerateImage = async () => {
              setProcessing(true);
              try {
                const specs = {
                  text: prompt
                };
                if (gallery.image) {
                  specs.urls = [gallery.image.src];
                }
                await gallery.generateImage(specs);
                onEditMode?.();
                setImageGenerated?.(true); // only used in searcher and uploader
                setPrompt('');
              } catch (e) {
                if (gallery.globalTexts.errors[e.message]) {
                  setError(gallery.globalTexts.errors[e.message]);
                  return;
                }
                _toast.toast.error(gallery.globalTexts.errors.DEFAULT_ERROR);
                console.error(e);
              } finally {
                setIsGenerating(false);
                setProcessing(false);
              }
            };
            const disabled = !prompt || processing;
            return React.createElement("div", {
              className: "selected-panel__edit-mode"
            }, React.createElement("div", {
              className: "flex-container flex-vertical-center gap-1"
            }, React.createElement("span", {
              className: "available-images"
            }, credits.availableImages, " /", credits.totalImages), React.createElement("span", {
              className: "available-images-title"
            }, interactions.title)), error && React.createElement(_alert.Alert, {
              type: "error"
            }, error), React.createElement("textarea", {
              className: "selected-panel__textarea",
              placeholder: process.promptPlaceholder,
              value: prompt,
              disabled: processing || isGenerating,
              onChange: onPromptChange
            }), React.createElement("div", {
              className: "selected-panel__edit-actions"
            }, React.createElement(_components.Button, {
              fetching: isGenerating || processing,
              variant: "primary",
              bordered: true,
              onClick: onGenerateImage,
              disabled: disabled
            }, actionsTexts.generate)));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/image-manager/generator
      ***********************************************/

      ims.set('./views/image-manager/generator', {
        hash: 3428660460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Generator = Generator;
          var React = require("react");
          var _context = require("../context");
          var _imageHeader = require("./image-header");
          var _image = require("pragmate-ui/image");
          var _editMode = require("./edit-mode");
          var Drawer = require("pragmate-ui/drawer");
          var _alert = require("pragmate-ui/alert");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _actionButtons = require("./action-buttons");
          function Generator() {
            const {
              texts: {
                generator: texts,
                actions
              },
              gallery,
              fetching,
              promise,
              onClose
            } = (0, _context.useGalleryContext)();
            const [processing, setProcessing] = React.useState(false);
            const [imageGenerated, setImageGenerated] = React.useState(false);
            const [editMode, setEditMode] = React.useState(false);
            const {
              image,
              credits
            } = gallery;
            const onEditMode = () => setEditMode(!editMode);
            (0, _hooks.useStore)(credits);
            const onBack = () => {
              gallery.openGenerator = null;
              gallery.image = null;
            };
            const onUseImage = async () => {
              let asset = gallery.image;
              setProcessing(true);
              if (!gallery.image) {
                console.log('no image');
                return;
              }
              promise?.resolve(asset.src);
              setProcessing(false);
              onClose();
            };
            return React.createElement(Drawer.Container, {
              className: "attachments-drawer",
              open: true,
              onClose: onClose,
              position: "right"
            }, React.createElement(_imageHeader.ImageHeader, {
              image: image,
              title: texts.title,
              onBack: onBack
            }), React.createElement(_alert.Alert, {
              type: "warning"
            }, "Alcanzaste el limite de interacciones disponibles para generar imagenes."), React.createElement("div", {
              className: "selected-panel__image-wrapper"
            }, !image ? React.createElement("div", {
              className: "image-placeholder"
            }, texts.placeholder) : React.createElement(_image.Image, {
              src: image.src,
              alt: texts.title
            })), imageGenerated && !editMode ? React.createElement("div", {
              className: "selected-panel__actions mt-15"
            }, React.createElement(_actionButtons.ActionButtons, {
              onUseImage: onUseImage,
              onEditMode: onEditMode
            })) : React.createElement(React.Fragment, null, React.createElement(_editMode.EditMode, {
              setImageGenerated: setImageGenerated,
              setProcessing: setProcessing,
              processing: processing
            }), React.createElement("p", {
              className: "generator-advice"
            }, texts.advice)));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./views/image-manager/hooks/use-slide-animation
      ***************************************************************/

      ims.set('./views/image-manager/hooks/use-slide-animation', {
        hash: 1916987307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSlideAnimation = useSlideAnimation;
          var React = require("react");
          var _gsap = require("gsap");
          function useSlideAnimation() {
            const elementRef = React.useRef(null);
            React.useEffect(() => {
              if (elementRef.current) {
                _gsap.gsap.set(elementRef.current, {
                  x: '100%',
                  opacity: 0
                });
                _gsap.gsap.to(elementRef.current, {
                  x: 0,
                  opacity: 1,
                  duration: 0.5,
                  ease: 'power2.out'
                });
              }
              return () => {
                if (elementRef.current) {
                  _gsap.gsap.killTweensOf(elementRef.current);
                }
              };
            }, []);
            return elementRef;
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/image-manager/image-header
      **************************************************/

      ims.set('./views/image-manager/image-header', {
        hash: 3509505987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageHeader = ImageHeader;
          exports.Wrapper = Wrapper;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _clsx = require("clsx");
          var React = require("react");
          var _context = require("../context");
          function Wrapper({
            children,
            image
          }) {
            if (image?.image) {
              return React.createElement("a", {
                href: image.image.contextLink,
                target: "_blank",
                rel: "noopener noreferrer"
              }, children);
            }
            return React.createElement(React.Fragment, null, children);
          }
          function ImageHeader({
            image,
            title,
            onBack,
            className
          }) {
            const {
              gallery
            } = (0, _context.useGalleryContext)();
            onBack = onBack || (() => gallery.searchedImage = null);
            return React.createElement("div", {
              className: (0, _clsx.default)('selected-panel__header', className)
            }, React.createElement(_icons.AppIconButton, {
              icon: "backArrow",
              onClick: onBack
            }), React.createElement(Wrapper, {
              image: image?.image
            }, React.createElement("h3", null, title)));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/image-manager/image-preview
      ***************************************************/

      ims.set('./views/image-manager/image-preview', {
        hash: 1460727753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImagePreview = ImagePreview;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../context");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          function ImagePreview({
            src,
            alt,
            image,
            fetching,
            generated = false
          }) {
            const {
              texts: {
                selectedImage: texts,
                generator: generatorTexts
              }
            } = (0, _context.useGalleryContext)();
            return React.createElement("div", {
              className: "selected-panel__content"
            }, React.createElement("div", {
              className: "selected-panel__image-wrapper"
            }, src && React.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: "selected-panel__image"
            }), fetching && React.createElement("div", {
              className: "absolute-container"
            }, React.createElement(_components.Spinner, {
              active: true,
              size: "xl"
            })), generated && React.createElement(_alert.Alert, {
              type: "success",
              className: "image-alert"
            }, generatorTexts.success)), image && React.createElement("div", null, React.createElement("h4", null, image.title), image.image && React.createElement("a", {
              href: image.image.contextLink,
              target: "_blank",
              rel: "noopener noreferrer"
            }, React.createElement(_components.HtmlWrapper, null, texts.copyrightNotice))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/image-manager/index
      *******************************************/

      ims.set('./views/image-manager/index', {
        hash: 3649650245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectedImage = SelectedImage;
          var Drawer = require("pragmate-ui/drawer");
          var React = require("react");
          var _context = require("../context");
          var _actionButtons = require("./action-buttons");
          var _editMode = require("./edit-mode");
          var _imageHeader = require("./image-header");
          var _imagePreview = require("./image-preview");
          function SelectedImage() {
            const {
              texts: {
                selectedImage: texts
              },
              gallery,
              onClose,
              onUseImage
            } = (0, _context.useGalleryContext)();
            const [processing, setProcessing] = React.useState(false);
            const [editMode, setEditMode] = React.useState(false);
            const [imageGenerated, setImageGenerated] = React.useState(false);
            const onEditMode = () => setEditMode(!editMode);
            const {
              image
            } = gallery;
            let src = gallery.image?.previewUrl ? gallery.image?.previewUrl : gallery.image?.src;
            src = image?.link || src;
            return React.createElement(Drawer.Container, {
              open: true,
              closeBackdrop: false,
              onClose: onClose,
              className: "attachments-drawer",
              position: "right"
            }, React.createElement("div", {
              className: "sticky-container"
            }, React.createElement(_imageHeader.ImageHeader, {
              image: image,
              title: texts.title,
              onBack: () => gallery.image = null
            }), React.createElement(_imagePreview.ImagePreview, {
              generated: imageGenerated,
              src: src,
              alt: image?.title || texts.title,
              image: image,
              fetching: processing
            }), !editMode ? React.createElement(_actionButtons.ActionButtons, {
              onUseImage: onUseImage,
              onEditMode: onEditMode
            }) : React.createElement(_editMode.EditMode, {
              setImageGenerated: setImageGenerated,
              setProcessing: setProcessing,
              processing: processing,
              onEditMode: onEditMode
            })));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/image-manager/searched
      **********************************************/

      ims.set('./views/image-manager/searched', {
        hash: 1474243261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SearchedImage = SearchedImage;
          var _clsx = require("clsx");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../context");
          var _imageHeader = require("./image-header");
          var _imagePreview = require("./image-preview");
          var _toast = require("pragmate-ui/toast");
          var Drawer = require("pragmate-ui/drawer");
          function SearchedImage() {
            const {
              texts: {
                selectedImage: texts,
                actions
              },
              gallery
            } = (0, _context.useGalleryContext)();
            const [processing, setProcessing] = React.useState(false);
            const [error, setError] = React.useState(null);
            const {
              searchedImage: image
            } = gallery;
            const src = image?.link;
            const onClose = () => {
              gallery.searchedImage = null;
            };
            //activity-modal__form-footer
            const onAttachImage = async () => {
              try {
                setProcessing(true);
                if (!gallery.searchedImage) {
                  console.log('no image');
                  return;
                }
                let asset = gallery.image;
                asset = await gallery.upload(gallery.searchedImage);
                // gallery.state = 'empty';
                gallery.searchedImage = null;
                gallery.state = 'empty';
                _toast.toast.success('Image attached successfully');
              } catch (error) {} finally {
                setProcessing(false);
              }
            };
            return React.createElement(Drawer.Container, {
              className: "attachments-drawer",
              open: true,
              onClose: onClose,
              position: "right"
            }, React.createElement("div", {
              className: (0, _clsx.default)({
                'is-fetching': processing
              })
            }, React.createElement("div", {
              className: "header-container"
            }, React.createElement(_imageHeader.ImageHeader, {
              className: "no-border",
              image: image,
              title: texts.title,
              onBack: onClose
            }), React.createElement(_components.HtmlWrapper, null, texts.disclaimer)), React.createElement(_imagePreview.ImagePreview, {
              src: src,
              alt: image?.title || texts.title,
              image: image,
              fetching: processing
            }), React.createElement("div", {
              className: "selected-panel__actions"
            }, React.createElement(_components.Button, {
              onClick: onAttachImage,
              className: "btn-primary selected-panel__use-button",
              disabled: processing
            }, actions.attach))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/image-manager/uploaded
      **********************************************/

      ims.set('./views/image-manager/uploaded', {
        hash: 3629571794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploadedImage = UploadedImage;
          var _clsx = require("clsx");
          var _components = require("pragmate-ui/components");
          var Drawer = require("pragmate-ui/drawer");
          var React = require("react");
          var _context = require("../context");
          var _imageHeader = require("./image-header");
          var _imagePreview = require("./image-preview");
          var _toast = require("pragmate-ui/toast");
          function UploadedImage() {
            const {
              texts: {
                selectedImage: texts,
                actions
              },
              gallery
            } = (0, _context.useGalleryContext)();
            const [processing, setProcessing] = React.useState(false);
            const {
              uploadedImage: image
            } = gallery;
            const src = image?.previewUrl;
            const onClose = () => {
              gallery.uploadedImage = null;
            };
            const onAttachImage = async () => {
              setProcessing(true);
              if (!gallery.uploadedImage) {
                console.log('no image');
                return;
              }
              let asset = gallery.uploadedImage;
              asset = await gallery.upload(gallery.uploadedImage);
              // gallery.state = 'empty';
              gallery.uploadedImage = null;
              setProcessing(false);
              _toast.toast.success('Image attached successfully');
            };
            return React.createElement(Drawer.Container, {
              className: "attachments-drawer",
              open: true,
              onClose: onClose,
              position: "right"
            }, React.createElement("div", {
              className: (0, _clsx.default)({
                'is-fetching': processing
              })
            }, React.createElement("div", {
              className: "header-container"
            }, React.createElement(_imageHeader.ImageHeader, {
              className: "no-border",
              image: image,
              title: texts.title,
              onBack: onClose
            })), React.createElement(_imagePreview.ImagePreview, {
              src: src,
              alt: image?.title || texts.title,
              image: image,
              fetching: processing
            }), React.createElement("div", {
              className: "selected-panel__actions"
            }, React.createElement(_components.Button, {
              onClick: onAttachImage,
              className: "btn-primary selected-panel__use-button",
              disabled: processing,
              fetching: processing
            }, actions.attach))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3746710733,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Attachments = Attachments;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _core = require("@beyond-js/kernel/core");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _assets = require("./assets");
          var _context = require("./context");
          var _useStoreManager = require("./hooks/use-store-manager");
          var _imageManager = require("./image-manager");
          var _generator = require("./image-manager/generator");
          var _searched = require("./image-manager/searched");
          var _uploaded = require("./image-manager/uploaded");
          var _search = require("./search");
          /*bundle*/
          function Attachments({
            activity,
            promise,
            credits,
            onClose
          }) {
            const {
              ready,
              store
            } = (0, _useStoreManager.useStoreManager)(activity, credits);
            if (!ready || !store) {
              return React.createElement("div", {
                className: "main-attachments-content"
              }, React.createElement(_ui.PageLoader, {
                fetching: true
              }));
            }
            const texts = store.texts.gallery;
            const value = {
              texts,
              gallery: store,
              fetching: store.fetching,
              onClose,
              promise: new _core.PendingPromise(),
              totalAssets: store.activity.materials?.assets?.length ?? 0,
              onUseImage: async () => {
                let asset = store.image;
                if (!store.image) {
                  console.log('no image');
                  return;
                }
                if (store.image.constructor.name !== 'Asset') {
                  asset = await store.upload(store.image);
                }
                promise?.resolve(asset.src);
                onClose?.();
              }
            };
            return React.createElement(_context.GalleryContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: "main-attachments-content"
            }, React.createElement(_components.ConditionalContainer, {
              condition: store.state,
              options: {
                empty: React.createElement(_assets.Assets, null),
                search: React.createElement(_search.Searcher, null)
              }
            })), store.image && !store.openGenerator && React.createElement(_imageManager.SelectedImage, null), store.searchedImage && React.createElement(_searched.SearchedImage, null), store.uploadedImage && React.createElement(_uploaded.UploadedImage, null), store.openGenerator && React.createElement(_generator.Generator, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/modal
      *****************************/

      ims.set('./views/modal', {
        hash: 2390192707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AttachmentsModal = AttachmentsModal;
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _ = require("./");
          /*bundle*/
          function AttachmentsModal({
            onClose,
            promise,
            activity,
            credits
          }) {
            return React.createElement(_modal.Modal, {
              show: true,
              onClose: onClose,
              closeBackdrop: false,
              className: "modal__attachments"
            }, React.createElement(_.Attachments, {
              onClose: onClose,
              activity: activity,
              credits: credits,
              promise: promise
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/search/bar
      **********************************/

      ims.set('./views/search/bar', {
        hash: 3851221861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SearchBar = SearchBar;
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          var _context = require("../context");
          function SearchBar() {
            const [searchInput, setSearchInput] = React.useState('');
            const {
              texts,
              gallery,
              fetching
            } = (0, _context.useGalleryContext)();
            const [error, setError] = React.useState(null);
            const {
              globalTexts
            } = gallery;
            const handleSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                await gallery.search(searchInput);
              } catch (error) {
                if (error.message === 'NO_CREDITS') {
                  setError(globalTexts.errors.NO_CREDITS);
                  return;
                }
                setError(globalTexts.errors.DEFAULT_ERROR);
              }
            };
            const handleSearchChange = event => {
              if (!fetching) {
                setSearchInput(event.target.value);
              }
            };
            return React.createElement("form", {
              onSubmit: handleSubmit,
              className: "gallery-modal__search-form"
            }, React.createElement("div", {
              className: "search-input-wrapper"
            }, React.createElement("div", {
              className: "flex-field flex-grow"
            }, React.createElement(_form.Input, {
              type: "text",
              value: searchInput,
              className: "search-input",
              onChange: handleSearchChange,
              placeholder: texts.search.placeholder,
              disabled: fetching,
              "aria-label": texts.search.placeholder
            }), React.createElement(_icons.IconButton, {
              icon: "search",
              variant: "primary",
              onClick: handleSubmit,
              disabled: fetching
            }))), error && React.createElement("div", {
              className: "error-message"
            }, error));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/search/index
      ************************************/

      ims.set('./views/search/index', {
        hash: 3866158453,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Searcher = Searcher;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../context");
          var _bar = require("./bar");
          var _item = require("./item");
          function Searcher() {
            const {
              texts,
              gallery,
              fetching
            } = (0, _context.useGalleryContext)();
            const onBack = () => gallery.state = 'empty';
            (0, _hooks.useStore)(gallery, ['results.changed']);
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "attachments-gallery__header"
            }, React.createElement(_icons.AppIconButton, {
              onClick: onBack,
              icon: "backArrow"
            }), React.createElement("h4", null, texts.search.title)), React.createElement("div", {
              className: "attachments__main-panel"
            }, React.createElement(_bar.SearchBar, null), fetching ? React.createElement("div", {
              className: "gallery-modal__loading"
            }, React.createElement(_components.Spinner, {
              active: true
            }), React.createElement("p", null, texts.loading.message)) : gallery.results.length > 0 ? React.createElement("div", {
              className: `gallery-modal__results ${gallery.image ? 'has-selected' : ''}`
            }, React.createElement(_list.List, {
              items: gallery.results,
              control: _item.Item,
              as: "div",
              className: "results-grid"
            })) : React.createElement(_ui.EmptyCard, {
              text: texts.search.empty.title,
              description: texts.search.empty.text,
              icon: "edit"
            })));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/search/item
      ***********************************/

      ims.set('./views/search/item', {
        hash: 345895016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _clsx = require("clsx");
          var _context = require("../context");
          function Item({
            item
          }) {
            const {
              gallery,
              fetching
            } = (0, _context.useGalleryContext)();
            const selected = gallery.image?.id === item.id;
            const onClick = () => {
              if (fetching) return;
              if (selected) {
                gallery.searchedImage = null;
              } else {
                gallery.searchedImage = item;
              }
            };
            const className = (0, _clsx.clsx)('results-grid__item', {
              'is-selected': selected,
              'is-disabled': fetching
            });
            return React.createElement("div", {
              className: className,
              onClick: onClick,
              role: "button",
              tabIndex: fetching ? -1 : 0,
              "aria-label": `Seleccionar ${item.title}`
            }, React.createElement("div", {
              className: "results-grid__image-wrapper"
            }, React.createElement("img", {
              src: item.image.thumbnailLink,
              alt: item.title,
              style: {
                height: item.image.thumbnailHeight * 1.2,
                width: item.image.thumbnailWidth * 1.2
              }
            })), React.createElement("div", {
              className: "results-grid__content"
            }, React.createElement("div", {
              className: "results-grid__title"
            }, item.title)), selected && React.createElement("div", {
              className: "results-grid__selected-indicator"
            }, React.createElement("span", {
              className: "icon"
            }, "\u2713")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./store",
        "from": "AttachmentsStore",
        "name": "AttachmentsStore"
      }, {
        "im": "./views/hooks/use-store-manager",
        "from": "useStoreManager",
        "name": "useStoreManager"
      }, {
        "im": "./views/hooks/use-uploader",
        "from": "IUseUploader",
        "name": "IUseUploader"
      }, {
        "im": "./views/hooks/use-uploader",
        "from": "useUploader",
        "name": "useUploader"
      }, {
        "im": "./views/index",
        "from": "Attachments",
        "name": "Attachments"
      }, {
        "im": "./views/modal",
        "from": "AttachmentsModal",
        "name": "AttachmentsModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AttachmentsStore') && _export("AttachmentsStore", AttachmentsStore = require ? require('./store').AttachmentsStore : value);
        (require || prop === 'useStoreManager') && _export("useStoreManager", useStoreManager = require ? require('./views/hooks/use-store-manager').useStoreManager : value);
        (require || prop === 'IUseUploader') && _export("IUseUploader", IUseUploader = require ? require('./views/hooks/use-uploader').IUseUploader : value);
        (require || prop === 'useUploader') && _export("useUploader", useUploader = require ? require('./views/hooks/use-uploader').useUploader : value);
        (require || prop === 'Attachments') && _export("Attachments", Attachments = require ? require('./views/index').Attachments : value);
        (require || prop === 'AttachmentsModal') && _export("AttachmentsModal", AttachmentsModal = require ? require('./views/modal').AttachmentsModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfaW1hZ2VzIiwiQXR0YWNobWVudHNTdG9yZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJzZWFyY2hUZXJtIiwicmVzdWx0cyIsImNvbGxlY3Rpb24iLCJpdGVtcyIsImVycm9yIiwiR29vZ2xlSW1hZ2VzIiwiY29uc3RydWN0b3IiLCJhY3Rpdml0eSIsImNyZWRpdHMiLCJwcm9wZXJ0aWVzIiwic3RhdGUiLCJzZWFyY2giLCJxdWVyeSIsInRyaW0iLCJmZXRjaGluZyIsImxvYWQiLCJpZCIsInBhcmVudCIsInRyaWdnZXIiLCJzZWxlY3RJbWFnZSIsImltYWdlIiwiY2xlYXIiLCJyZXZlcnQiLCJ1bmRlZmluZWQiLCJnZW5lcmF0ZUltYWdlIiwidGV4dCIsImZpbGVzIiwidXJscyIsIkVycm9yIiwidXBsb2FkIiwic3BlY3MiLCJuYW1lIiwidXJsIiwibGluayIsImZpbGUiLCJ1cGxvYWRJbWFnZSIsImV4cG9ydHMiLCJfY2xzeCIsIl9jb21wb25lbnRzIiwiUmVhY3QiLCJfY29udGV4dCIsIl91c2VVcGxvYWRlciIsIl9mYSIsIl9maSIsIl9pY29ucyIsIkFjdGlvbnMiLCJnYWxsZXJ5IiwidGV4dHMiLCJ1c2VHYWxsZXJ5Q29udGV4dCIsInNob3dPcHRpb25zIiwic2V0U2hvd09wdGlvbnMiLCJ1c2VTdGF0ZSIsIm9uRHJvcGRvd24iLCJEcm9wRG93bkl0ZW1zIiwidHJpZ2dlclJlZiIsInVzZVVwbG9hZGVyIiwiYWNjZXB0IiwidmFsaWRhdG9ycyIsIm9wdGlvbnMiLCJtYXhTaXplIiwicHJvY2Vzc29ycyIsIm9uTG9hZCIsImxlbmd0aCIsInVwbG9hZGVkSW1hZ2UiLCJvbk5hdmlnYXRlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm9wZW5HZW5lcmF0b3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkZhR29vZ2xlIiwiYWN0aW9ucyIsInJlZiIsIkZpVXBsb2FkIiwiQXBwSWNvbiIsImljb24iLCJnZW5lcmF0ZSIsImRlZmF1bHQiLCJCdXR0b24iLCJfaG9va3MiLCJfdWkiLCJfZnJhbWVyTW90aW9uIiwiX2VtcHR5U3RhdGUiLCJfYWN0aW9ucyIsIl9pdGVtIiwiQXNzZXRzIiwic3RvcmUiLCJhc3NldHMiLCJzZXRBc3NldHMiLCJtYXRlcmlhbHMiLCJvbkRlbGV0ZSIsIml0ZW0iLCJmaWx0ZXIiLCJhc3NldCIsInVzZVN0b3JlIiwiRW1wdHlTdGF0ZSIsImF0dHJzIiwiZGlzYWJsZWQiLCJGcmFnbWVudCIsIkFwcEljb25CdXR0b24iLCJoZWFkZXIiLCJ0aXRsZSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJtYXAiLCJJdGVtIiwia2V5IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9pbWFnZSIsIm9uRGVsZXRlRm4iLCJwcmV2ZW50RGVmYXVsdCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXNzZXQiLCJtb3Rpb24iLCJsaSIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsImFsdCIsImRlc2NyaXB0aW9uIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJHYWxsZXJ5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSW1hZ2VJY29uIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwiZCIsIl9pbWFnZUljb24iLCJlbXB0eSIsImJvcmRlcmVkIiwiQXBwQnV0dG9uIiwiRXJyb3JCb3VuZGFyeSIsIkNvbXBvbmVudCIsInByb3BzIiwiaGFzRXJyb3IiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJyZW5kZXIiLCJmYWxsYmFjayIsIm1lc3NhZ2UiLCJjaGlsZHJlbiIsIkZvb3RlckdhbGxlcnkiLCJwcm9taXNlIiwib25DbG9zZSIsImhhbmRsZUNvbmZpcm1TZWxlY3Rpb24iLCJzZWxlY3RlZEltYWdlIiwicmVzb2x2ZSIsInNlbGVjdCIsIl9yZWFjdCIsIl9zdG9yZSIsInVzZVN0b3JlTWFuYWdlciIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRTdG9yZSIsInNldFZlcnNpb24iLCJldmVudHMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVyIiwidiIsImZvckVhY2giLCJvbiIsIm9mZiIsIl91cGxvYWRlciIsInVzZVJlZiIsImRyb3Bab25lUmVmIiwidXBsb2FkZXIiLCJVcGxvYWRlciIsImN1cnJlbnQiLCJjcmVhdGUiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsInByb2dyZXNzIiwiTWF0aCIsInJvdW5kIiwiZXJyb3JzIiwidXBsb2FkaW5nIiwiQWN0aW9uQnV0dG9ucyIsIm9uRWRpdE1vZGUiLCJvblVzZUltYWdlIiwiYXZhaWxhYmxlSW1hZ2VzIiwiZWRpdFdpdGhBaSIsInRvdGFsSW1hZ2VzIiwidXNlIiwiX3RvYXN0IiwiX2FsZXJ0IiwiRWRpdE1vZGUiLCJzZXRQcm9jZXNzaW5nIiwicHJvY2Vzc2luZyIsInNldEltYWdlR2VuZXJhdGVkIiwicHJvY2VzcyIsImFjdGlvbnNUZXh0cyIsImludGVyYWN0aW9ucyIsInByb21wdCIsInNldFByb21wdCIsImlzR2VuZXJhdGluZyIsInNldElzR2VuZXJhdGluZyIsInNldEVycm9yIiwib25Qcm9tcHRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uR2VuZXJhdGVJbWFnZSIsImUiLCJnbG9iYWxUZXh0cyIsInRvYXN0IiwiREVGQVVMVF9FUlJPUiIsIkFsZXJ0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicHJvbXB0UGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl9pbWFnZUhlYWRlciIsIl9lZGl0TW9kZSIsIkRyYXdlciIsIl9hY3Rpb25CdXR0b25zIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiaW1hZ2VHZW5lcmF0ZWQiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwib25CYWNrIiwibG9nIiwiQ29udGFpbmVyIiwib3BlbiIsInBvc2l0aW9uIiwiSW1hZ2VIZWFkZXIiLCJhZHZpY2UiLCJfZ3NhcCIsInVzZVNsaWRlQW5pbWF0aW9uIiwiZWxlbWVudFJlZiIsImdzYXAiLCJzZXQiLCJ4IiwidG8iLCJraWxsVHdlZW5zT2YiLCJXcmFwcGVyIiwiaHJlZiIsImNvbnRleHRMaW5rIiwicmVsIiwic2VhcmNoZWRJbWFnZSIsIkltYWdlUHJldmlldyIsImdlbmVyYXRlZCIsImdlbmVyYXRvclRleHRzIiwiU3Bpbm5lciIsImFjdGl2ZSIsInNpemUiLCJzdWNjZXNzIiwiSHRtbFdyYXBwZXIiLCJjb3B5cmlnaHROb3RpY2UiLCJfaW1hZ2VQcmV2aWV3IiwiU2VsZWN0ZWRJbWFnZSIsInByZXZpZXdVcmwiLCJjbG9zZUJhY2tkcm9wIiwiU2VhcmNoZWRJbWFnZSIsIm9uQXR0YWNoSW1hZ2UiLCJkaXNjbGFpbWVyIiwiYXR0YWNoIiwiVXBsb2FkZWRJbWFnZSIsIl9jb3JlIiwiX2Fzc2V0cyIsIl91c2VTdG9yZU1hbmFnZXIiLCJfaW1hZ2VNYW5hZ2VyIiwiX2dlbmVyYXRvciIsIl9zZWFyY2hlZCIsIl91cGxvYWRlZCIsIl9zZWFyY2giLCJBdHRhY2htZW50cyIsIlBhZ2VMb2FkZXIiLCJQZW5kaW5nUHJvbWlzZSIsInRvdGFsQXNzZXRzIiwiUHJvdmlkZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIlNlYXJjaGVyIiwiX21vZGFsIiwiXyIsIkF0dGFjaG1lbnRzTW9kYWwiLCJNb2RhbCIsInNob3ciLCJfZm9ybSIsIlNlYXJjaEJhciIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJOT19DUkVESVRTIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwib25TdWJtaXQiLCJJbnB1dCIsIl9saXN0IiwiX2JhciIsImxvYWRpbmciLCJMaXN0IiwiY29udHJvbCIsImFzIiwiRW1wdHlDYXJkIiwic2VsZWN0ZWQiLCJjbHN4Iiwicm9sZSIsInRhYkluZGV4IiwidGh1bWJuYWlsTGluayIsInN0eWxlIiwidGh1bWJuYWlsSGVpZ2h0IiwidGh1bWJuYWlsV2lkdGgiXSwic291cmNlcyI6WyIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYXNzZXRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NldHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZW1wdHktc3RhdGUvaW1hZ2UtaWNvbi50c3giLCIvdHMvdmlld3MvZW1wdHktc3RhdGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi90cy92aWV3cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS1tYW5hZ2VyLnRzIiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS11cGxvYWRlci50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9hY3Rpb24tYnV0dG9ucy50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9lZGl0LW1vZGUudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvZ2VuZXJhdG9yLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2hvb2tzL3VzZS1zbGlkZS1hbmltYXRpb24udHMiLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbWFnZS1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvaW1hZ2UtcHJldmlldy50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9zZWFyY2hlZC50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci91cGxvYWRlZC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGFsLnRzeCIsIi90cy92aWV3cy9zZWFyY2gvYmFyLnRzeCIsIi90cy92aWV3cy9zZWFyY2gvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFJTztVQUFVLE1BQU9FLGdCQUFpQixTQUFRSCxLQUFBLENBQUFJLGdCQUFnQjtZQUNoRSxDQUFBQyxVQUFXLEdBQVcsRUFBRTtZQVl4QixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLENBQUFDLE9BQVEsR0FBa0IsRUFBRTtZQUM1QixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUMsVUFBVyxDQUFDQyxLQUFLO1lBQzlCO1lBRUEsQ0FBQUMsS0FBTSxHQUFrQixJQUFJO1lBQzVCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUYsVUFBVyxHQUFHLElBQUlMLE9BQUEsQ0FBQVEsWUFBWSxFQUFFO1lBRWhDQyxZQUFZQyxRQUFrQixFQUFFQyxPQUFnQjtjQUMvQyxLQUFLLENBQUMseUNBQXlDLEVBQUU7Z0JBQ2hEQyxVQUFVLEVBQUUsQ0FDWCxPQUFPLEVBQ1AsT0FBTyxFQUVQLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsVUFBVSxFQUNWLFNBQVMsRUFDVCxhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWU7ZUFFaEIsQ0FBQztj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