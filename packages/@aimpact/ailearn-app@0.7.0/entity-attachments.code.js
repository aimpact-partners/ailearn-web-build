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
        hash: 3608323324,
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
              return this.#collection.load({
                id: this.activity.parent.id,
                query
                // num: 12
                // start: 1
              });
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
        hash: 2442678133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Searcher = Searcher;
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _bar = require("./bar");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          function Searcher({
            onUseImage,
            onLoadImage,
            onGenerateAI
          }) {
            const {
              texts,
              gallery,
              fetching
            } = (0, _context.useGalleryContext)();
            const onBack = () => gallery.state = 'empty';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfaW1hZ2VzIiwiQXR0YWNobWVudHNTdG9yZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJzZWFyY2hUZXJtIiwicmVzdWx0cyIsImNvbGxlY3Rpb24iLCJpdGVtcyIsImVycm9yIiwiR29vZ2xlSW1hZ2VzIiwiY29uc3RydWN0b3IiLCJhY3Rpdml0eSIsImNyZWRpdHMiLCJwcm9wZXJ0aWVzIiwic3RhdGUiLCJzZWFyY2giLCJxdWVyeSIsInRyaW0iLCJsb2FkIiwiaWQiLCJwYXJlbnQiLCJzZWxlY3RJbWFnZSIsImltYWdlIiwiY2xlYXIiLCJyZXZlcnQiLCJ1bmRlZmluZWQiLCJ0cmlnZ2VyIiwiZ2VuZXJhdGVJbWFnZSIsInRleHQiLCJmaWxlcyIsInVybHMiLCJFcnJvciIsInVwbG9hZCIsInNwZWNzIiwibmFtZSIsInVybCIsImxpbmsiLCJmaWxlIiwidXBsb2FkSW1hZ2UiLCJleHBvcnRzIiwiX2Nsc3giLCJfY29tcG9uZW50cyIsIlJlYWN0IiwiX2NvbnRleHQiLCJfdXNlVXBsb2FkZXIiLCJfZmEiLCJfZmkiLCJfaWNvbnMiLCJBY3Rpb25zIiwiZ2FsbGVyeSIsInRleHRzIiwidXNlR2FsbGVyeUNvbnRleHQiLCJzaG93T3B0aW9ucyIsInNldFNob3dPcHRpb25zIiwidXNlU3RhdGUiLCJvbkRyb3Bkb3duIiwiRHJvcERvd25JdGVtcyIsInRyaWdnZXJSZWYiLCJ1c2VVcGxvYWRlciIsImFjY2VwdCIsInZhbGlkYXRvcnMiLCJvcHRpb25zIiwibWF4U2l6ZSIsInByb2Nlc3NvcnMiLCJvbkxvYWQiLCJsZW5ndGgiLCJ1cGxvYWRlZEltYWdlIiwib25OYXZpZ2F0ZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJvcGVuR2VuZXJhdG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJGYUdvb2dsZSIsImFjdGlvbnMiLCJyZWYiLCJGaVVwbG9hZCIsIkFwcEljb24iLCJpY29uIiwiZ2VuZXJhdGUiLCJkZWZhdWx0IiwiQnV0dG9uIiwiX2hvb2tzIiwiX3VpIiwiX2ZyYW1lck1vdGlvbiIsIl9lbXB0eVN0YXRlIiwiX2FjdGlvbnMiLCJfaXRlbSIsIkFzc2V0cyIsInN0b3JlIiwiYXNzZXRzIiwic2V0QXNzZXRzIiwibWF0ZXJpYWxzIiwib25EZWxldGUiLCJpdGVtIiwiZmlsdGVyIiwiYXNzZXQiLCJ1c2VTdG9yZSIsIkVtcHR5U3RhdGUiLCJhdHRycyIsImRpc2FibGVkIiwiRnJhZ21lbnQiLCJBcHBJY29uQnV0dG9uIiwiaGVhZGVyIiwidGl0bGUiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwibWFwIiwiSXRlbSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJmZXRjaGluZyIsIl9pbWFnZSIsIm9uRGVsZXRlRm4iLCJwcmV2ZW50RGVmYXVsdCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXNzZXQiLCJtb3Rpb24iLCJsaSIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsImFsdCIsImRlc2NyaXB0aW9uIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJHYWxsZXJ5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSW1hZ2VJY29uIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwiZCIsIl9pbWFnZUljb24iLCJlbXB0eSIsImJvcmRlcmVkIiwiQXBwQnV0dG9uIiwiRXJyb3JCb3VuZGFyeSIsIkNvbXBvbmVudCIsInByb3BzIiwiaGFzRXJyb3IiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJyZW5kZXIiLCJmYWxsYmFjayIsIm1lc3NhZ2UiLCJjaGlsZHJlbiIsIkZvb3RlckdhbGxlcnkiLCJwcm9taXNlIiwib25DbG9zZSIsImhhbmRsZUNvbmZpcm1TZWxlY3Rpb24iLCJzZWxlY3RlZEltYWdlIiwicmVzb2x2ZSIsInNlbGVjdCIsIl9yZWFjdCIsIl9zdG9yZSIsInVzZVN0b3JlTWFuYWdlciIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRTdG9yZSIsInNldFZlcnNpb24iLCJldmVudHMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVyIiwidiIsImZvckVhY2giLCJvbiIsIm9mZiIsIl91cGxvYWRlciIsInVzZVJlZiIsImRyb3Bab25lUmVmIiwidXBsb2FkZXIiLCJVcGxvYWRlciIsImN1cnJlbnQiLCJjcmVhdGUiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsInByb2dyZXNzIiwiTWF0aCIsInJvdW5kIiwiZXJyb3JzIiwidXBsb2FkaW5nIiwiQWN0aW9uQnV0dG9ucyIsIm9uRWRpdE1vZGUiLCJvblVzZUltYWdlIiwiYXZhaWxhYmxlSW1hZ2VzIiwiZWRpdFdpdGhBaSIsInRvdGFsSW1hZ2VzIiwidXNlIiwiX3RvYXN0IiwiX2FsZXJ0IiwiRWRpdE1vZGUiLCJzZXRQcm9jZXNzaW5nIiwicHJvY2Vzc2luZyIsInNldEltYWdlR2VuZXJhdGVkIiwicHJvY2VzcyIsImFjdGlvbnNUZXh0cyIsImludGVyYWN0aW9ucyIsInByb21wdCIsInNldFByb21wdCIsImlzR2VuZXJhdGluZyIsInNldElzR2VuZXJhdGluZyIsInNldEVycm9yIiwib25Qcm9tcHRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uR2VuZXJhdGVJbWFnZSIsImUiLCJnbG9iYWxUZXh0cyIsInRvYXN0IiwiREVGQVVMVF9FUlJPUiIsIkFsZXJ0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicHJvbXB0UGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl9pbWFnZUhlYWRlciIsIl9lZGl0TW9kZSIsIkRyYXdlciIsIl9hY3Rpb25CdXR0b25zIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiaW1hZ2VHZW5lcmF0ZWQiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwib25CYWNrIiwibG9nIiwiQ29udGFpbmVyIiwib3BlbiIsInBvc2l0aW9uIiwiSW1hZ2VIZWFkZXIiLCJhZHZpY2UiLCJfZ3NhcCIsInVzZVNsaWRlQW5pbWF0aW9uIiwiZWxlbWVudFJlZiIsImdzYXAiLCJzZXQiLCJ4IiwidG8iLCJraWxsVHdlZW5zT2YiLCJXcmFwcGVyIiwiaHJlZiIsImNvbnRleHRMaW5rIiwicmVsIiwic2VhcmNoZWRJbWFnZSIsIkltYWdlUHJldmlldyIsImdlbmVyYXRlZCIsImdlbmVyYXRvclRleHRzIiwiU3Bpbm5lciIsImFjdGl2ZSIsInNpemUiLCJzdWNjZXNzIiwiSHRtbFdyYXBwZXIiLCJjb3B5cmlnaHROb3RpY2UiLCJfaW1hZ2VQcmV2aWV3IiwiU2VsZWN0ZWRJbWFnZSIsInByZXZpZXdVcmwiLCJjbG9zZUJhY2tkcm9wIiwiU2VhcmNoZWRJbWFnZSIsIm9uQXR0YWNoSW1hZ2UiLCJkaXNjbGFpbWVyIiwiYXR0YWNoIiwiVXBsb2FkZWRJbWFnZSIsIl9jb3JlIiwiX2Fzc2V0cyIsIl91c2VTdG9yZU1hbmFnZXIiLCJfaW1hZ2VNYW5hZ2VyIiwiX2dlbmVyYXRvciIsIl9zZWFyY2hlZCIsIl91cGxvYWRlZCIsIl9zZWFyY2giLCJBdHRhY2htZW50cyIsIlBhZ2VMb2FkZXIiLCJQZW5kaW5nUHJvbWlzZSIsInRvdGFsQXNzZXRzIiwiUHJvdmlkZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIlNlYXJjaGVyIiwiX21vZGFsIiwiXyIsIkF0dGFjaG1lbnRzTW9kYWwiLCJNb2RhbCIsInNob3ciLCJfZm9ybSIsIlNlYXJjaEJhciIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJOT19DUkVESVRTIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwib25TdWJtaXQiLCJJbnB1dCIsIl9saXN0IiwiX2JhciIsIm9uTG9hZEltYWdlIiwib25HZW5lcmF0ZUFJIiwibG9hZGluZyIsIkxpc3QiLCJjb250cm9sIiwiYXMiLCJFbXB0eUNhcmQiLCJzZWxlY3RlZCIsImNsc3giLCJyb2xlIiwidGFiSW5kZXgiLCJ0aHVtYm5haWxMaW5rIiwic3R5bGUiLCJ0aHVtYm5haWxIZWlnaHQiLCJ0aHVtYm5haWxXaWR0aCJdLCJzb3VyY2VzIjpbIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NldHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2V0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9lbXB0eS1zdGF0ZS9pbWFnZS1pY29uLnRzeCIsIi90cy92aWV3cy9lbXB0eS1zdGF0ZS9pbmRleC50c3giLCIvdHMvdmlld3MvZXJyb3ItYm91bmRhcnkudHN4IiwiL3RzL3ZpZXdzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvaG9va3MvdXNlLXN0b3JlLW1hbmFnZXIudHMiLCIvdHMvdmlld3MvaG9va3MvdXNlLXVwbG9hZGVyLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2FjdGlvbi1idXR0b25zLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2VkaXQtbW9kZS50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9nZW5lcmF0b3IudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvaG9va3MvdXNlLXNsaWRlLWFuaW1hdGlvbi50cyIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2ltYWdlLWhlYWRlci50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbWFnZS1wcmV2aWV3LnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL3NlYXJjaGVkLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL3VwbG9hZGVkLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9iYXIudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VhcmNoL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUlPO1VBQVUsTUFBT0UsZ0JBQWlCLFNBQVFILEtBQUEsQ0FBQUksZ0JBQWdCO1lBQ2hFLENBQUFDLFVBQVcsR0FBVyxFQUFFO1lBWXhCLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsQ0FBQUMsT0FBUSxHQUFrQixFQUFFO1lBQzVCLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQyxVQUFXLENBQUNDLEtBQUs7WUFDOUI7WUFFQSxDQUFBQyxLQUFNLEdBQWtCLElBQUk7WUFDNUIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBRixVQUFXLEdBQUcsSUFBSUwsT0FBQSxDQUFBUSxZQUFZLEVBQUU7WUFFaENDLFlBQVlDLFFBQWtCLEVBQUVDLE9BQWdCO2NBQy9DLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRTtnQkFDaERDLFVBQVUsRUFBRSxDQUNYLE9BQU8sRUFDUCxPQUFPLEVBRVAsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNULGFBQWEsRUFD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