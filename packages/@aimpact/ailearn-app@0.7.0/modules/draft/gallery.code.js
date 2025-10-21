System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/images", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/drafts", "@aimpact/media-manager@1.0.0/uploader", "clsx@2.1.1", "pragmate-ui@1.0.8/components", "react@18.3.1", "react-icons@5.5.0/fa", "react-icons@5.5.0/fi", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/image", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/toast", "gsap@3.13.0", "pragmate-ui@1.0.8/alert", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/list", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, GalleryStore, useStoreManager, IUseUploader, useUploader, GalleryModal, __beyond_pkg, hmr;
  _export({
    GalleryStore: void 0,
    useStoreManager: void 0,
    IUseUploader: void 0,
    useUploader: void 0,
    GalleryModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnSdk120Images) {
      dependency_2 = _aimpactAilearnSdk120Images;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_3 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesDrafts) {
      dependency_4 = _aimpactAilearnSdk120EntitiesDrafts;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_5 = _aimpactMediaManager100Uploader;
    }, function (_clsx2) {
      dependency_6 = _clsx2;
    }, function (_pragmateUi108Components) {
      dependency_7 = _pragmateUi108Components;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_reactIcons550Fa) {
      dependency_9 = _reactIcons550Fa;
    }, function (_reactIcons550Fi) {
      dependency_10 = _reactIcons550Fi;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_12 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_13 = _aimpactAilearnApp070ComponentsUi;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_pragmateUi108Icons) {
      dependency_15 = _pragmateUi108Icons;
    }, function (_pragmateUi108Image) {
      dependency_16 = _pragmateUi108Image;
    }, function (_beyondJsKernel0114Core) {
      dependency_17 = _beyondJsKernel0114Core;
    }, function (_pragmateUi108Toast) {
      dependency_18 = _pragmateUi108Toast;
    }, function (_gsap2) {
      dependency_19 = _gsap2;
    }, function (_pragmateUi108Alert) {
      dependency_20 = _pragmateUi108Alert;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/draft/gallery",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/ailearn-sdk/images', dependency_2], ['@aimpact/ailearn-app/stores/base', dependency_3], ['@aimpact/ailearn-sdk/entities/drafts', dependency_4], ['@aimpact/media-manager/uploader', dependency_5], ['clsx', dependency_6], ['pragmate-ui/components', dependency_7], ['react', dependency_8], ['react-icons/fa', dependency_9], ['react-icons/fi', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['framer-motion', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/image', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['pragmate-ui/toast', dependency_18], ['gsap', dependency_19], ['pragmate-ui/alert', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/list', dependency_23], ['@beyond-js/kernel/styles', dependency_24]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/modules/draft/gallery.code');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./store
      ***********************/
      ims.set('./store', {
        hash: 9253270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GalleryStore = void 0;
          var _images = require("@aimpact/ailearn-sdk/images");
          var _base = require("@aimpact/ailearn-app/stores/base");
          /*bundle*/
          class GalleryStore extends _base.BaseStoreManager {
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
            constructor(activity) {
              super('@aimpact/ailearn-app/modules/draft/gallery', {
                properties: ['image', 'state', 'imageGenerated', 'openGenerator', 'activity', 'panelOpened', 'searchedImage', 'uploadedImage']
              });
              this.activity = activity;
              this.state = 'empty';
            }
            async search(query) {
              if (!query.trim()) return;
              try {
                this.fetching = true;
                console.log('search', query, this.activity.id);
                await this.#collection.load({
                  id: this.activity.parent.id,
                  query
                  // num: 12
                  // start: 1
                });
                this.state = 'search';
              } finally {
                this.fetching = false;
              }
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
          exports.GalleryStore = GalleryStore;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/actions
      *******************************/

      ims.set('./views/actions', {
        hash: 3399843004,
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
                  console.log(1, event.currentTarget.dataset.state);
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
        hash: 300502838,
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
              className: "modal-gallery__header"
            }, React.createElement(_icons.AppIconButton, {
              ...attrs
            }), React.createElement("h4", null, texts.header.title), React.createElement(_actions.Actions, null)), React.createElement("div", {
              className: "main-modal-content"
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
        hash: 3928692978,
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
        hash: 3887073550,
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
                  gallery.selectImage(files[0]);
                }
              }
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "gallery-modal__empty-state"
            }, React.createElement("div", {
              className: "empty-state__container"
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
              className: "empty-state__button"
            }, texts.actions.generate)))));
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
        hash: 2057284220,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStoreManager = useStoreManager;
          var _react = require("react");
          var _store = require("../../store");
          /*bundle*/
          function useStoreManager(activity) {
            const [ready, setReady] = _react.default.useState(false);
            const [store, setStore] = _react.default.useState(null);
            const [, setVersion] = _react.default.useState(0);
            const events = ['change'];
            _react.default.useEffect(() => {
              const store = new _store.GalleryStore(activity);
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
        hash: 370109695,
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
            onUseImage,
            imageGenerated
          }) {
            const {
              texts,
              fetching,
              gallery
            } = (0, _context.useGalleryContext)();
            (0, _hooks.useStore)(gallery, ['fetching.changed']);
            if (imageGenerated) {
              return React.createElement("div", {
                className: "selected-panel__actions"
              }, React.createElement(_components.Button, {
                onClick: onUseImage,
                className: "btn-primary selected-panel__use-button",
                disabled: fetching
              }, texts.actions.use));
            }
            return React.createElement("div", {
              className: "selected-panel__actions"
            }, gallery.image && React.createElement(_icons.AppButton, {
              icon: "aiStars",
              onClick: onEditMode,
              className: "btn-primary selected-panel__use-button ",
              disabled: fetching,
              bordered: true
            }, texts.actions.editWithAi), React.createElement(_components.Button, {
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
        hash: 2760024660,
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
                actions: actionsTexts
              },
              gallery
            } = (0, _context.useGalleryContext)();
            const [prompt, setPrompt] = React.useState('');
            const [isGenerating, setIsGenerating] = React.useState(false);
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
                setImageGenerated(true);
                setPrompt('');
              } catch (e) {
                if (e.message === 'NO_CREDITS') {
                  _toast.toast.error(gallery.globalTexts.errors.NO_CREDITS);
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
            }, React.createElement("textarea", {
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
        hash: 1476514341,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Generator = Generator;
          var _clsx = require("clsx");
          var React = require("react");
          var _context = require("../context");
          var _useSlideAnimation = require("./hooks/use-slide-animation");
          var _imageHeader = require("./image-header");
          var _image = require("pragmate-ui/image");
          var _editMode = require("./edit-mode");
          function Generator() {
            const {
              texts: {
                generator: texts,
                actions
              },
              gallery
            } = (0, _context.useGalleryContext)();
            const [processing, setProcessing] = React.useState(false);
            const panelRef = (0, _useSlideAnimation.useSlideAnimation)();
            const {
              image
            } = gallery;
            const onBack = () => {
              gallery.openGenerator = null;
              gallery.image = null;
            };
            return React.createElement("div", {
              ref: panelRef,
              className: (0, _clsx.default)('gallery-modal__selected-panel generator-panel', {
                'is-fetching': processing
              })
            }, React.createElement("div", {
              className: "sticky-container"
            }, React.createElement(_imageHeader.ImageHeader, {
              image: image,
              title: texts.title,
              onBack: onBack
            }), React.createElement("div", {
              className: "selected-panel__image-wrapper"
            }, !image ? React.createElement("div", {
              className: "image-placeholder"
            }, texts.placeholder) : React.createElement(_image.Image, {
              src: image.src,
              alt: texts.title
            })), React.createElement(_editMode.EditMode, {
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
        hash: 903372719,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageHeader = ImageHeader;
          exports.Wrapper = Wrapper;
          var React = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
            onBack
          }) {
            const {
              gallery
            } = (0, _context.useGalleryContext)();
            onBack = onBack || (() => gallery.searchedImage = null);
            return React.createElement("div", {
              className: "selected-panel__header"
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
        hash: 3227187784,
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
            generated
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
            }, generatorTexts.success)), image && React.createElement("div", null, React.createElement("h4", null, image.title), image.image && React.createElement(_alert.Alert, {
              type: "info"
            }, React.createElement(_components.HtmlWrapper, null, texts.disclaimer), React.createElement("a", {
              href: image.image.contextLink,
              target: "_blank",
              rel: "noopener noreferrer"
            }, React.createElement(_components.HtmlWrapper, null, texts.copyrightNotice)))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/image-manager/index
      *******************************************/

      ims.set('./views/image-manager/index', {
        hash: 1284931795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectedImage = SelectedImage;
          var React = require("react");
          var _context = require("../context");
          var _imageHeader = require("./image-header");
          var _imagePreview = require("./image-preview");
          var _actionButtons = require("./action-buttons");
          var _editMode = require("./edit-mode");
          var _useSlideAnimation = require("./hooks/use-slide-animation");
          var _clsx = require("clsx");
          function SelectedImage() {
            const {
              texts: {
                selectedImage: texts
              },
              gallery,
              onClose,
              promise
            } = (0, _context.useGalleryContext)();
            const [processing, setProcessing] = React.useState(false);
            const [editMode, setEditMode] = React.useState(false);
            const [imageGenerated, setImageGenerated] = React.useState(false);
            const panelRef = (0, _useSlideAnimation.useSlideAnimation)();
            const onEditMode = () => setEditMode(!editMode);
            const {
              image
            } = gallery;
            let src = gallery.image?.previewUrl ? gallery.image?.previewUrl : gallery.image?.src;
            src = image?.link || src;
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
            return React.createElement("div", {
              ref: panelRef,
              className: (0, _clsx.default)('gallery-modal__selected-panel', {
                'is-fetching': processing
              })
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
              onEditMode: onEditMode,
              imageGenerated: imageGenerated
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
        hash: 1601987865,
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
          var _useSlideAnimation = require("./hooks/use-slide-animation");
          var _imageHeader = require("./image-header");
          var _imagePreview = require("./image-preview");
          var _toast = require("pragmate-ui/toast");
          function SearchedImage() {
            const {
              texts: {
                selectedImage: texts,
                actions
              },
              gallery
            } = (0, _context.useGalleryContext)();
            const [processing, setProcessing] = React.useState(false);
            const panelRef = (0, _useSlideAnimation.useSlideAnimation)();
            const {
              searchedImage: image
            } = gallery;
            const src = image?.link;
            const onAttachImage = async () => {
              setProcessing(true);
              if (!gallery.searchedImage) {
                console.log('no image');
                return;
              }
              let asset = gallery.image;
              asset = await gallery.upload(gallery.searchedImage);
              // gallery.state = 'empty';
              gallery.searchedImage = null;
              setProcessing(false);
              _toast.toast.success('Image attached successfully');
            };
            return React.createElement("div", {
              ref: panelRef,
              className: (0, _clsx.default)('gallery-modal__selected-panel', {
                'is-fetching': processing
              })
            }, React.createElement("div", {
              className: "sticky-container"
            }, React.createElement(_imageHeader.ImageHeader, {
              image: image,
              title: texts.title,
              onBack: () => gallery.searchedImage = null
            }), React.createElement(_imagePreview.ImagePreview, {
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
        hash: 1825863796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploadedImage = UploadedImage;
          var _clsx = require("clsx");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../context");
          var _useSlideAnimation = require("./hooks/use-slide-animation");
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
            const panelRef = (0, _useSlideAnimation.useSlideAnimation)();
            const {
              uploadedImage: image
            } = gallery;
            const src = image?.previewUrl;
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
            return React.createElement("div", {
              ref: panelRef,
              className: (0, _clsx.default)('gallery-modal__selected-panel', {
                'is-fetching': processing
              })
            }, React.createElement("div", {
              className: "sticky-container"
            }, React.createElement(_imageHeader.ImageHeader, {
              image: image,
              title: texts.title,
              onBack: () => gallery.uploadedImage = null
            }), React.createElement(_imagePreview.ImagePreview, {
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 997141421,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GalleryModal = GalleryModal;
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _assets = require("./assets");
          var _context = require("./context");
          var _useStoreManager = require("./hooks/use-store-manager");
          var _search = require("./search");
          var _imageManager = require("./image-manager");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _searched = require("./image-manager/searched");
          var _uploaded = require("./image-manager/uploaded");
          var _generator = require("./image-manager/generator");
          /*bundle*/
          function GalleryModal({
            onClose,
            promise,
            activity
          }) {
            const {
              ready,
              store
            } = (0, _useStoreManager.useStoreManager)(activity);
            if (!ready || !store) {
              return React.createElement(_modal.Modal, {
                show: true
              }, React.createElement("div", {
                className: "main-modal-content"
              }, React.createElement(_ui.PageLoader, {
                fetching: true
              })));
            }
            const texts = store.texts.gallery;
            const handleClose = () => {
              promise?.resolve();
              store?.clear();
              onClose();
            };
            const value = {
              texts,
              gallery: store,
              fetching: store.fetching,
              onClose,
              promise,
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
                onClose();
              }
            };
            return React.createElement(_context.GalleryContext.Provider, {
              value: value
            }, React.createElement(_modal.Modal, {
              show: true,
              className: "modal-form--gallery",
              onClose: handleClose,
              closeBackdrop: false
            }, React.createElement(_components.ConditionalContainer, {
              condition: store.state,
              options: {
                empty: React.createElement(_assets.Assets, null),
                search: React.createElement(_search.Searcher, null)
              }
            }), store.image && !store.openGenerator && React.createElement(_imageManager.SelectedImage, null), store.searchedImage && React.createElement(_searched.SearchedImage, null), store.uploadedImage && React.createElement(_uploaded.UploadedImage, null), store.openGenerator && React.createElement(_generator.Generator, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/search/bar
      **********************************/

      ims.set('./views/search/bar', {
        hash: 3428371336,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SearchBar = SearchBar;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _useUploader = require("../hooks/use-uploader");
          function SearchBar() {
            const [searchInput, setSearchInput] = React.useState('');
            const {
              texts,
              gallery,
              fetching
            } = (0, _context.useGalleryContext)();
            const handleSubmit = event => {
              event.preventDefault();
              gallery.search(searchInput);
            };
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
                  gallery.selectImage(files[0]);
                }
              }
            });
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
            }))), gallery.error && React.createElement("div", {
              className: "error-message"
            }, gallery.error));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/search/index
      ************************************/

      ims.set('./views/search/index', {
        hash: 1513398594,
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
              className: "modal-gallery__header"
            }, React.createElement(_icons.AppIconButton, {
              onClick: onBack,
              icon: "backArrow"
            }), React.createElement("h4", null, texts.search.title)), React.createElement("div", {
              className: "main-modal-content"
            }, React.createElement(_bar.SearchBar, null), fetching ? React.createElement("div", {
              className: "gallery-modal__loading"
            }, React.createElement("div", {
              className: "spinner"
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
        "from": "GalleryStore",
        "name": "GalleryStore"
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
        "from": "GalleryModal",
        "name": "GalleryModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'GalleryStore') && _export("GalleryStore", GalleryStore = require ? require('./store').GalleryStore : value);
        (require || prop === 'useStoreManager') && _export("useStoreManager", useStoreManager = require ? require('./views/hooks/use-store-manager').useStoreManager : value);
        (require || prop === 'IUseUploader') && _export("IUseUploader", IUseUploader = require ? require('./views/hooks/use-uploader').IUseUploader : value);
        (require || prop === 'useUploader') && _export("useUploader", useUploader = require ? require('./views/hooks/use-uploader').useUploader : value);
        (require || prop === 'GalleryModal') && _export("GalleryModal", GalleryModal = require ? require('./views/index').GalleryModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaW1hZ2VzIiwicmVxdWlyZSIsIl9iYXNlIiwiR2FsbGVyeVN0b3JlIiwiQmFzZVN0b3JlTWFuYWdlciIsInNlYXJjaFRlcm0iLCJyZXN1bHRzIiwiY29sbGVjdGlvbiIsIml0ZW1zIiwiZXJyb3IiLCJHb29nbGVJbWFnZXMiLCJjb25zdHJ1Y3RvciIsImFjdGl2aXR5IiwicHJvcGVydGllcyIsInN0YXRlIiwic2VhcmNoIiwicXVlcnkiLCJ0cmltIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwibG9nIiwiaWQiLCJsb2FkIiwicGFyZW50Iiwic2VsZWN0SW1hZ2UiLCJpbWFnZSIsImNsZWFyIiwicmV2ZXJ0IiwidW5kZWZpbmVkIiwidHJpZ2dlciIsImdlbmVyYXRlSW1hZ2UiLCJ0ZXh0IiwiZmlsZXMiLCJ1cmxzIiwiRXJyb3IiLCJ1cGxvYWQiLCJzcGVjcyIsIm5hbWUiLCJ1cmwiLCJsaW5rIiwiZmlsZSIsInVwbG9hZEltYWdlIiwiZXhwb3J0cyIsIl9jbHN4IiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9jb250ZXh0IiwiX3VzZVVwbG9hZGVyIiwiX2ZhIiwiX2ZpIiwiX2ljb25zIiwiQWN0aW9ucyIsImdhbGxlcnkiLCJ0ZXh0cyIsInVzZUdhbGxlcnlDb250ZXh0Iiwic2hvd09wdGlvbnMiLCJzZXRTaG93T3B0aW9ucyIsInVzZVN0YXRlIiwib25Ecm9wZG93biIsIkRyb3BEb3duSXRlbXMiLCJ0cmlnZ2VyUmVmIiwidXNlVXBsb2FkZXIiLCJhY2NlcHQiLCJ2YWxpZGF0b3JzIiwib3B0aW9ucyIsIm1heFNpemUiLCJwcm9jZXNzb3JzIiwib25Mb2FkIiwibGVuZ3RoIiwidXBsb2FkZWRJbWFnZSIsIm9uTmF2aWdhdGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib3BlbkdlbmVyYXRvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiRmFHb29nbGUiLCJhY3Rpb25zIiwicmVmIiwiRmlVcGxvYWQiLCJBcHBJY29uIiwiaWNvbiIsImdlbmVyYXRlIiwiZGVmYXVsdCIsIkJ1dHRvbiIsIl9ob29rcyIsIl91aSIsIl9mcmFtZXJNb3Rpb24iLCJfZW1wdHlTdGF0ZSIsIl9hY3Rpb25zIiwiX2l0ZW0iLCJBc3NldHMiLCJzdG9yZSIsImFzc2V0cyIsInNldEFzc2V0cyIsIm1hdGVyaWFscyIsIm9uRGVsZXRlIiwiaXRlbSIsImZpbHRlciIsImFzc2V0IiwidXNlU3RvcmUiLCJFbXB0eVN0YXRlIiwiYXR0cnMiLCJkaXNhYmxlZCIsIkZyYWdtZW50IiwiQXBwSWNvbkJ1dHRvbiIsImhlYWRlciIsInRpdGxlIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIm1hcCIsIkl0ZW0iLCJrZXkiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2ltYWdlIiwib25EZWxldGVGbiIsInByZXZlbnREZWZhdWx0IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmVBc3NldCIsIm1vdGlvbiIsImxpIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJzY2FsZSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiZGVzY3JpcHRpb24iLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIkdhbGxlcnlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJJbWFnZUljb24iLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJkIiwiX2ltYWdlSWNvbiIsImVtcHR5IiwiYm9yZGVyZWQiLCJBcHBCdXR0b24iLCJFcnJvckJvdW5kYXJ5IiwiQ29tcG9uZW50IiwicHJvcHMiLCJoYXNFcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3JJbmZvIiwicmVuZGVyIiwiZmFsbGJhY2siLCJtZXNzYWdlIiwiY2hpbGRyZW4iLCJGb290ZXJHYWxsZXJ5IiwicHJvbWlzZSIsIm9uQ2xvc2UiLCJoYW5kbGVDb25maXJtU2VsZWN0aW9uIiwic2VsZWN0ZWRJbWFnZSIsInJlc29sdmUiLCJzZWxlY3QiLCJfcmVhY3QiLCJfc3RvcmUiLCJ1c2VTdG9yZU1hbmFnZXIiLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0U3RvcmUiLCJzZXRWZXJzaW9uIiwiZXZlbnRzIiwidXNlRWZmZWN0IiwiaGFuZGxlciIsInYiLCJmb3JFYWNoIiwib24iLCJvZmYiLCJfdXBsb2FkZXIiLCJ1c2VSZWYiLCJkcm9wWm9uZVJlZiIsInVwbG9hZGVyIiwiVXBsb2FkZXIiLCJjdXJyZW50IiwiY3JlYXRlIiwiZGVzdHJveSIsImNvdW50IiwidG90YWwiLCJwcm9ncmVzcyIsIk1hdGgiLCJyb3VuZCIsImVycm9ycyIsInVwbG9hZGluZyIsIkFjdGlvbkJ1dHRvbnMiLCJvbkVkaXRNb2RlIiwib25Vc2VJbWFnZSIsImltYWdlR2VuZXJhdGVkIiwidXNlIiwiZWRpdFdpdGhBaSIsIl90b2FzdCIsIkVkaXRNb2RlIiwic2V0UHJvY2Vzc2luZyIsInByb2Nlc3NpbmciLCJzZXRJbWFnZUdlbmVyYXRlZCIsInByb2Nlc3MiLCJhY3Rpb25zVGV4dHMiLCJwcm9tcHQiLCJzZXRQcm9tcHQiLCJpc0dlbmVyYXRpbmciLCJzZXRJc0dlbmVyYXRpbmciLCJvblByb21wdENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25HZW5lcmF0ZUltYWdlIiwiZSIsInRvYXN0IiwiZ2xvYmFsVGV4dHMiLCJOT19DUkVESVRTIiwiREVGQVVMVF9FUlJPUiIsInBsYWNlaG9sZGVyIiwicHJvbXB0UGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl91c2VTbGlkZUFuaW1hdGlvbiIsIl9pbWFnZUhlYWRlciIsIl9lZGl0TW9kZSIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsInBhbmVsUmVmIiwidXNlU2xpZGVBbmltYXRpb24iLCJvbkJhY2siLCJJbWFnZUhlYWRlciIsImFkdmljZSIsIl9nc2FwIiwiZWxlbWVudFJlZiIsImdzYXAiLCJzZXQiLCJ4IiwidG8iLCJraWxsVHdlZW5zT2YiLCJXcmFwcGVyIiwiaHJlZiIsImNvbnRleHRMaW5rIiwicmVsIiwic2VhcmNoZWRJbWFnZSIsIl9hbGVydCIsIkltYWdlUHJldmlldyIsImdlbmVyYXRlZCIsImdlbmVyYXRvclRleHRzIiwiU3Bpbm5lciIsImFjdGl2ZSIsInNpemUiLCJBbGVydCIsInR5cGUiLCJzdWNjZXNzIiwiSHRtbFdyYXBwZXIiLCJkaXNjbGFpbWVyIiwiY29weXJpZ2h0Tm90aWNlIiwiX2ltYWdlUHJldmlldyIsIl9hY3Rpb25CdXR0b25zIiwiU2VsZWN0ZWRJbWFnZSIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJwcmV2aWV3VXJsIiwiU2VhcmNoZWRJbWFnZSIsIm9uQXR0YWNoSW1hZ2UiLCJhdHRhY2giLCJVcGxvYWRlZEltYWdlIiwiX21vZGFsIiwiX2Fzc2V0cyIsIl91c2VTdG9yZU1hbmFnZXIiLCJfc2VhcmNoIiwiX2ltYWdlTWFuYWdlciIsIl9zZWFyY2hlZCIsIl91cGxvYWRlZCIsIl9nZW5lcmF0b3IiLCJHYWxsZXJ5TW9kYWwiLCJNb2RhbCIsInNob3ciLCJQYWdlTG9hZGVyIiwiaGFuZGxlQ2xvc2UiLCJ0b3RhbEFzc2V0cyIsIlByb3ZpZGVyIiwiY2xvc2VCYWNrZHJvcCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiU2VhcmNoZXIiLCJfZm9ybSIsIlNlYXJjaEJhciIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJvblN1Ym1pdCIsIklucHV0IiwiX2xpc3QiLCJfYmFyIiwib25Mb2FkSW1hZ2UiLCJvbkdlbmVyYXRlQUkiLCJsb2FkaW5nIiwiTGlzdCIsImNvbnRyb2wiLCJhcyIsIkVtcHR5Q2FyZCIsInNlbGVjdGVkIiwiY2xzeCIsInJvbGUiLCJ0YWJJbmRleCIsInRodW1ibmFpbExpbmsiLCJzdHlsZSIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbFdpZHRoIl0sInNvdXJjZXMiOlsiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2V0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzZXRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2VtcHR5LXN0YXRlL2ltYWdlLWljb24udHN4IiwiL3RzL3ZpZXdzL2VtcHR5LXN0YXRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9lcnJvci1ib3VuZGFyeS50c3giLCIvdHMvdmlld3MvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9ob29rcy91c2Utc3RvcmUtbWFuYWdlci50cyIsIi90cy92aWV3cy9ob29rcy91c2UtdXBsb2FkZXIudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvYWN0aW9uLWJ1dHRvbnMudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvZWRpdC1tb2RlLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2dlbmVyYXRvci50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9ob29rcy91c2Utc2xpZGUtYW5pbWF0aW9uLnRzIiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvaW1hZ2UtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2ltYWdlLXByZXZpZXcudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvc2VhcmNoZWQudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvdXBsb2FkZWQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWFyY2gvYmFyLnRzeCIsIi90cy92aWV3cy9zZWFyY2gvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFJTztVQUFVLE1BQU9FLFlBQWEsU0FBUUQsS0FBQSxDQUFBRSxnQkFBZ0I7WUFDNUQsQ0FBQUMsVUFBVyxHQUFXLEVBQUU7WUFXeEIsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBQyxPQUFRLEdBQWtCLEVBQUU7WUFDNUIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFDLFVBQVcsQ0FBQ0MsS0FBSztZQUM5QjtZQUVBLENBQUFDLEtBQU0sR0FBa0IsSUFBSTtZQUM1QixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFGLFVBQVcsR0FBRyxJQUFJUCxPQUFBLENBQUFVLFlBQVksRUFBRTtZQUVoQ0MsWUFBWUMsUUFBa0I7Y0FDN0IsS0FBSyxDQUFDLDRDQUE0QyxFQUFFO2dCQUNuREMsVUFBVSxFQUFFLENBQ1gsT0FBTyxFQUNQLE9BQU8sRUFFUCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLFVBQVUsRUFDVixhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWU7ZUFFaEIsQ0FBQztjQUNGLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRO2NBQ3hCLElBQUksQ0FBQ0UsS0FBSyxHQUFHLE9BQU87WUFDckI7WUFFQSxNQUFNQyxNQUFNQSxDQUFDQyxLQUFhO2NBQ3pCLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxJQUFJLEVBQUUs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