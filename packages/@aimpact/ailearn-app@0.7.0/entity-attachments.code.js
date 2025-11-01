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
        hash: 4114025203,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfaW1hZ2VzIiwiQXR0YWNobWVudHNTdG9yZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJzZWFyY2hUZXJtIiwicmVzdWx0cyIsImNvbGxlY3Rpb24iLCJpdGVtcyIsImVycm9yIiwiR29vZ2xlSW1hZ2VzIiwiY29uc3RydWN0b3IiLCJhY3Rpdml0eSIsImNyZWRpdHMiLCJwcm9wZXJ0aWVzIiwic3RhdGUiLCJzZWFyY2giLCJxdWVyeSIsInRyaW0iLCJmZXRjaGluZyIsImxvYWQiLCJpZCIsInBhcmVudCIsInRyaWdnZXIiLCJzZWxlY3RJbWFnZSIsImltYWdlIiwiY2xlYXIiLCJyZXZlcnQiLCJ1bmRlZmluZWQiLCJnZW5lcmF0ZUltYWdlIiwidGV4dCIsImZpbGVzIiwidXJscyIsIkVycm9yIiwidXBsb2FkIiwic3BlY3MiLCJuYW1lIiwidXJsIiwibGluayIsImZpbGUiLCJ1cGxvYWRJbWFnZSIsImV4cG9ydHMiLCJfY2xzeCIsIl9jb21wb25lbnRzIiwiUmVhY3QiLCJfY29udGV4dCIsIl91c2VVcGxvYWRlciIsIl9mYSIsIl9maSIsIl9pY29ucyIsIkFjdGlvbnMiLCJnYWxsZXJ5IiwidGV4dHMiLCJ1c2VHYWxsZXJ5Q29udGV4dCIsInNob3dPcHRpb25zIiwic2V0U2hvd09wdGlvbnMiLCJ1c2VTdGF0ZSIsIm9uRHJvcGRvd24iLCJEcm9wRG93bkl0ZW1zIiwidHJpZ2dlclJlZiIsInVzZVVwbG9hZGVyIiwiYWNjZXB0IiwidmFsaWRhdG9ycyIsIm9wdGlvbnMiLCJtYXhTaXplIiwicHJvY2Vzc29ycyIsIm9uTG9hZCIsImxlbmd0aCIsInVwbG9hZGVkSW1hZ2UiLCJvbk5hdmlnYXRlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm9wZW5HZW5lcmF0b3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkZhR29vZ2xlIiwiYWN0aW9ucyIsInJlZiIsIkZpVXBsb2FkIiwiQXBwSWNvbiIsImljb24iLCJnZW5lcmF0ZSIsImRlZmF1bHQiLCJCdXR0b24iLCJfaG9va3MiLCJfdWkiLCJfZnJhbWVyTW90aW9uIiwiX2VtcHR5U3RhdGUiLCJfYWN0aW9ucyIsIl9pdGVtIiwiQXNzZXRzIiwic3RvcmUiLCJhc3NldHMiLCJzZXRBc3NldHMiLCJtYXRlcmlhbHMiLCJvbkRlbGV0ZSIsIml0ZW0iLCJmaWx0ZXIiLCJhc3NldCIsInVzZVN0b3JlIiwiRW1wdHlTdGF0ZSIsImF0dHJzIiwiZGlzYWJsZWQiLCJGcmFnbWVudCIsIkFwcEljb25CdXR0b24iLCJoZWFkZXIiLCJ0aXRsZSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJtYXAiLCJJdGVtIiwia2V5IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9pbWFnZSIsIm9uRGVsZXRlRm4iLCJwcmV2ZW50RGVmYXVsdCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXNzZXQiLCJtb3Rpb24iLCJsaSIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsImFsdCIsImRlc2NyaXB0aW9uIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJHYWxsZXJ5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSW1hZ2VJY29uIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwiZCIsIl9pbWFnZUljb24iLCJlbXB0eSIsImJvcmRlcmVkIiwiQXBwQnV0dG9uIiwiRXJyb3JCb3VuZGFyeSIsIkNvbXBvbmVudCIsInByb3BzIiwiaGFzRXJyb3IiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJyZW5kZXIiLCJmYWxsYmFjayIsIm1lc3NhZ2UiLCJjaGlsZHJlbiIsIkZvb3RlckdhbGxlcnkiLCJwcm9taXNlIiwib25DbG9zZSIsImhhbmRsZUNvbmZpcm1TZWxlY3Rpb24iLCJzZWxlY3RlZEltYWdlIiwicmVzb2x2ZSIsInNlbGVjdCIsIl9yZWFjdCIsIl9zdG9yZSIsInVzZVN0b3JlTWFuYWdlciIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRTdG9yZSIsInNldFZlcnNpb24iLCJldmVudHMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVyIiwidiIsImZvckVhY2giLCJvbiIsIm9mZiIsIl91cGxvYWRlciIsInVzZVJlZiIsImRyb3Bab25lUmVmIiwidXBsb2FkZXIiLCJVcGxvYWRlciIsImN1cnJlbnQiLCJjcmVhdGUiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsInByb2dyZXNzIiwiTWF0aCIsInJvdW5kIiwiZXJyb3JzIiwidXBsb2FkaW5nIiwiQWN0aW9uQnV0dG9ucyIsIm9uRWRpdE1vZGUiLCJvblVzZUltYWdlIiwiYXZhaWxhYmxlSW1hZ2VzIiwiZWRpdFdpdGhBaSIsInRvdGFsSW1hZ2VzIiwidXNlIiwiX3RvYXN0IiwiX2FsZXJ0IiwiRWRpdE1vZGUiLCJzZXRQcm9jZXNzaW5nIiwicHJvY2Vzc2luZyIsInNldEltYWdlR2VuZXJhdGVkIiwicHJvY2VzcyIsImFjdGlvbnNUZXh0cyIsImludGVyYWN0aW9ucyIsInByb21wdCIsInNldFByb21wdCIsImlzR2VuZXJhdGluZyIsInNldElzR2VuZXJhdGluZyIsInNldEVycm9yIiwib25Qcm9tcHRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uR2VuZXJhdGVJbWFnZSIsImUiLCJnbG9iYWxUZXh0cyIsInRvYXN0IiwiREVGQVVMVF9FUlJPUiIsIkFsZXJ0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicHJvbXB0UGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl9pbWFnZUhlYWRlciIsIl9lZGl0TW9kZSIsIkRyYXdlciIsIl9hY3Rpb25CdXR0b25zIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiaW1hZ2VHZW5lcmF0ZWQiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwib25CYWNrIiwibG9nIiwiQ29udGFpbmVyIiwib3BlbiIsInBvc2l0aW9uIiwiSW1hZ2VIZWFkZXIiLCJhZHZpY2UiLCJfZ3NhcCIsInVzZVNsaWRlQW5pbWF0aW9uIiwiZWxlbWVudFJlZiIsImdzYXAiLCJzZXQiLCJ4IiwidG8iLCJraWxsVHdlZW5zT2YiLCJXcmFwcGVyIiwiaHJlZiIsImNvbnRleHRMaW5rIiwicmVsIiwic2VhcmNoZWRJbWFnZSIsIkltYWdlUHJldmlldyIsImdlbmVyYXRlZCIsImdlbmVyYXRvclRleHRzIiwiU3Bpbm5lciIsImFjdGl2ZSIsInNpemUiLCJzdWNjZXNzIiwiSHRtbFdyYXBwZXIiLCJjb3B5cmlnaHROb3RpY2UiLCJfaW1hZ2VQcmV2aWV3IiwiU2VsZWN0ZWRJbWFnZSIsInByZXZpZXdVcmwiLCJjbG9zZUJhY2tkcm9wIiwiU2VhcmNoZWRJbWFnZSIsIm9uQXR0YWNoSW1hZ2UiLCJkaXNjbGFpbWVyIiwiYXR0YWNoIiwiVXBsb2FkZWRJbWFnZSIsIl9jb3JlIiwiX2Fzc2V0cyIsIl91c2VTdG9yZU1hbmFnZXIiLCJfaW1hZ2VNYW5hZ2VyIiwiX2dlbmVyYXRvciIsIl9zZWFyY2hlZCIsIl91cGxvYWRlZCIsIl9zZWFyY2giLCJBdHRhY2htZW50cyIsIlBhZ2VMb2FkZXIiLCJQZW5kaW5nUHJvbWlzZSIsInRvdGFsQXNzZXRzIiwiUHJvdmlkZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIlNlYXJjaGVyIiwiX21vZGFsIiwiXyIsIkF0dGFjaG1lbnRzTW9kYWwiLCJNb2RhbCIsInNob3ciLCJfZm9ybSIsIlNlYXJjaEJhciIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJOT19DUkVESVRTIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwib25TdWJtaXQiLCJJbnB1dCIsIl9saXN0IiwiX2JhciIsIm9uTG9hZEltYWdlIiwib25HZW5lcmF0ZUFJIiwibG9hZGluZyIsIkxpc3QiLCJjb250cm9sIiwiYXMiLCJFbXB0eUNhcmQiLCJzZWxlY3RlZCIsImNsc3giLCJyb2xlIiwidGFiSW5kZXgiLCJ0aHVtYm5haWxMaW5rIiwic3R5bGUiLCJ0aHVtYm5haWxIZWlnaHQiLCJ0aHVtYm5haWxXaWR0aCJdLCJzb3VyY2VzIjpbIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NldHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2V0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9lbXB0eS1zdGF0ZS9pbWFnZS1pY29uLnRzeCIsIi90cy92aWV3cy9lbXB0eS1zdGF0ZS9pbmRleC50c3giLCIvdHMvdmlld3MvZXJyb3ItYm91bmRhcnkudHN4IiwiL3RzL3ZpZXdzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvaG9va3MvdXNlLXN0b3JlLW1hbmFnZXIudHMiLCIvdHMvdmlld3MvaG9va3MvdXNlLXVwbG9hZGVyLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2FjdGlvbi1idXR0b25zLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2VkaXQtbW9kZS50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9nZW5lcmF0b3IudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvaG9va3MvdXNlLXNsaWRlLWFuaW1hdGlvbi50cyIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2ltYWdlLWhlYWRlci50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbWFnZS1wcmV2aWV3LnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL3NlYXJjaGVkLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL3VwbG9hZGVkLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9iYXIudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VhcmNoL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUlPO1VBQVUsTUFBT0UsZ0JBQWlCLFNBQVFILEtBQUEsQ0FBQUksZ0JBQWdCO1lBQ2hFLENBQUFDLFVBQVcsR0FBVyxFQUFFO1lBWXhCLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsQ0FBQUMsT0FBUSxHQUFrQixFQUFFO1lBQzVCLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQyxVQUFXLENBQUNDLEtBQUs7WUFDOUI7WUFFQSxDQUFBQyxLQUFNLEdBQWtCLElBQUk7WUFDNUIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBRixVQUFXLEdBQUcsSUFBSUwsT0FBQSxDQUFBUSxZQUFZLEVBQUU7WUFFaENDLFlBQVlDLFFBQWtCLEVBQUVDLE9BQWdCO2NBQy9DLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRTtnQkFDaERDLFVBQVUsRUFBRSxDQUNYLE9BQU8sRUFDUCxPQUFPLEVBRVAsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNULGFBQWEsRUFD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