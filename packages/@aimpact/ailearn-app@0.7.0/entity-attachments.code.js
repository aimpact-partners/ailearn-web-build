System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/images", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/media-manager@1.0.0/uploader", "clsx@2.1.1", "pragmate-ui@1.0.8/components", "react@18.3.1", "react-icons@5.5.0/fa", "react-icons@5.5.0/fi", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/image", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/alert", "pragmate-ui@1.0.8/drawer", "gsap@3.13.0", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, AttachmentsStore, useStoreManager, IUseUploader, useUploader, Attachments, AttachmentsModal, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['@aimpact/ailearn-app/stores/base', dependency_1], ['@aimpact/ailearn-sdk/images', dependency_2], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_3], ['@aimpact/media-manager/uploader', dependency_4], ['clsx', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['react-icons/fa', dependency_8], ['react-icons/fi', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/image', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/alert', dependency_18], ['pragmate-ui/drawer', dependency_19], ['gsap', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/list', dependency_23]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfaW1hZ2VzIiwiQXR0YWNobWVudHNTdG9yZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJzZWFyY2hUZXJtIiwicmVzdWx0cyIsImNvbGxlY3Rpb24iLCJpdGVtcyIsImVycm9yIiwiR29vZ2xlSW1hZ2VzIiwiY29uc3RydWN0b3IiLCJhY3Rpdml0eSIsImNyZWRpdHMiLCJwcm9wZXJ0aWVzIiwic3RhdGUiLCJzZWFyY2giLCJxdWVyeSIsInRyaW0iLCJmZXRjaGluZyIsImxvYWQiLCJpZCIsInBhcmVudCIsInRyaWdnZXIiLCJzZWxlY3RJbWFnZSIsImltYWdlIiwiY2xlYXIiLCJyZXZlcnQiLCJ1bmRlZmluZWQiLCJnZW5lcmF0ZUltYWdlIiwidGV4dCIsImZpbGVzIiwidXJscyIsIkVycm9yIiwidXBsb2FkIiwic3BlY3MiLCJuYW1lIiwidXJsIiwibGluayIsImZpbGUiLCJ1cGxvYWRJbWFnZSIsImV4cG9ydHMiLCJfY2xzeCIsIl9jb21wb25lbnRzIiwiUmVhY3QiLCJfY29udGV4dCIsIl91c2VVcGxvYWRlciIsIl9mYSIsIl9maSIsIl9pY29ucyIsIkFjdGlvbnMiLCJnYWxsZXJ5IiwidGV4dHMiLCJ1c2VHYWxsZXJ5Q29udGV4dCIsInNob3dPcHRpb25zIiwic2V0U2hvd09wdGlvbnMiLCJ1c2VTdGF0ZSIsIm9uRHJvcGRvd24iLCJEcm9wRG93bkl0ZW1zIiwidHJpZ2dlclJlZiIsInVzZVVwbG9hZGVyIiwiYWNjZXB0IiwidmFsaWRhdG9ycyIsIm9wdGlvbnMiLCJtYXhTaXplIiwicHJvY2Vzc29ycyIsIm9uTG9hZCIsImxlbmd0aCIsInVwbG9hZGVkSW1hZ2UiLCJvbk5hdmlnYXRlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm9wZW5HZW5lcmF0b3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkZhR29vZ2xlIiwiYWN0aW9ucyIsInJlZiIsIkZpVXBsb2FkIiwiQXBwSWNvbiIsImljb24iLCJnZW5lcmF0ZSIsImRlZmF1bHQiLCJCdXR0b24iLCJfaG9va3MiLCJfdWkiLCJfZnJhbWVyTW90aW9uIiwiX2VtcHR5U3RhdGUiLCJfYWN0aW9ucyIsIl9pdGVtIiwiQXNzZXRzIiwic3RvcmUiLCJhc3NldHMiLCJzZXRBc3NldHMiLCJtYXRlcmlhbHMiLCJvbkRlbGV0ZSIsIml0ZW0iLCJmaWx0ZXIiLCJhc3NldCIsInVzZVN0b3JlIiwiRW1wdHlTdGF0ZSIsImF0dHJzIiwiZGlzYWJsZWQiLCJGcmFnbWVudCIsIkFwcEljb25CdXR0b24iLCJoZWFkZXIiLCJ0aXRsZSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJtYXAiLCJJdGVtIiwia2V5IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9pbWFnZSIsIm9uRGVsZXRlRm4iLCJwcmV2ZW50RGVmYXVsdCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXNzZXQiLCJtb3Rpb24iLCJsaSIsImxheW91dCIsImluaXRpYWwiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJJbWFnZSIsInNyYyIsImFsdCIsImRlc2NyaXB0aW9uIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJHYWxsZXJ5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSW1hZ2VJY29uIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwiZCIsIl9pbWFnZUljb24iLCJlbXB0eSIsImJvcmRlcmVkIiwiQXBwQnV0dG9uIiwiRXJyb3JCb3VuZGFyeSIsIkNvbXBvbmVudCIsInByb3BzIiwiaGFzRXJyb3IiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJyZW5kZXIiLCJmYWxsYmFjayIsIm1lc3NhZ2UiLCJjaGlsZHJlbiIsIkZvb3RlckdhbGxlcnkiLCJwcm9taXNlIiwib25DbG9zZSIsImhhbmRsZUNvbmZpcm1TZWxlY3Rpb24iLCJzZWxlY3RlZEltYWdlIiwicmVzb2x2ZSIsInNlbGVjdCIsIl9yZWFjdCIsIl9zdG9yZSIsInVzZVN0b3JlTWFuYWdlciIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRTdG9yZSIsInNldFZlcnNpb24iLCJldmVudHMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVyIiwidiIsImZvckVhY2giLCJvbiIsIm9mZiIsIl91cGxvYWRlciIsInVzZVJlZiIsImRyb3Bab25lUmVmIiwidXBsb2FkZXIiLCJVcGxvYWRlciIsImN1cnJlbnQiLCJjcmVhdGUiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsInByb2dyZXNzIiwiTWF0aCIsInJvdW5kIiwiZXJyb3JzIiwidXBsb2FkaW5nIiwiQWN0aW9uQnV0dG9ucyIsIm9uRWRpdE1vZGUiLCJvblVzZUltYWdlIiwiYXZhaWxhYmxlSW1hZ2VzIiwiZWRpdFdpdGhBaSIsInRvdGFsSW1hZ2VzIiwidXNlIiwiX3RvYXN0IiwiX2FsZXJ0IiwiRWRpdE1vZGUiLCJzZXRQcm9jZXNzaW5nIiwicHJvY2Vzc2luZyIsInNldEltYWdlR2VuZXJhdGVkIiwicHJvY2VzcyIsImFjdGlvbnNUZXh0cyIsImludGVyYWN0aW9ucyIsInByb21wdCIsInNldFByb21wdCIsImlzR2VuZXJhdGluZyIsInNldElzR2VuZXJhdGluZyIsInNldEVycm9yIiwib25Qcm9tcHRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uR2VuZXJhdGVJbWFnZSIsImUiLCJnbG9iYWxUZXh0cyIsInRvYXN0IiwiREVGQVVMVF9FUlJPUiIsIkFsZXJ0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicHJvbXB0UGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl9pbWFnZUhlYWRlciIsIl9lZGl0TW9kZSIsIkRyYXdlciIsIl9hY3Rpb25CdXR0b25zIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiaW1hZ2VHZW5lcmF0ZWQiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwib25CYWNrIiwibG9nIiwiQ29udGFpbmVyIiwib3BlbiIsInBvc2l0aW9uIiwiSW1hZ2VIZWFkZXIiLCJhZHZpY2UiLCJfZ3NhcCIsInVzZVNsaWRlQW5pbWF0aW9uIiwiZWxlbWVudFJlZiIsImdzYXAiLCJzZXQiLCJ4IiwidG8iLCJraWxsVHdlZW5zT2YiLCJXcmFwcGVyIiwiaHJlZiIsImNvbnRleHRMaW5rIiwicmVsIiwic2VhcmNoZWRJbWFnZSIsIkltYWdlUHJldmlldyIsImdlbmVyYXRlZCIsImdlbmVyYXRvclRleHRzIiwiU3Bpbm5lciIsImFjdGl2ZSIsInNpemUiLCJzdWNjZXNzIiwiSHRtbFdyYXBwZXIiLCJjb3B5cmlnaHROb3RpY2UiLCJfaW1hZ2VQcmV2aWV3IiwiU2VsZWN0ZWRJbWFnZSIsInByZXZpZXdVcmwiLCJjbG9zZUJhY2tkcm9wIiwiU2VhcmNoZWRJbWFnZSIsIm9uQXR0YWNoSW1hZ2UiLCJkaXNjbGFpbWVyIiwiYXR0YWNoIiwiVXBsb2FkZWRJbWFnZSIsIl9jb3JlIiwiX2Fzc2V0cyIsIl91c2VTdG9yZU1hbmFnZXIiLCJfaW1hZ2VNYW5hZ2VyIiwiX2dlbmVyYXRvciIsIl9zZWFyY2hlZCIsIl91cGxvYWRlZCIsIl9zZWFyY2giLCJBdHRhY2htZW50cyIsIlBhZ2VMb2FkZXIiLCJQZW5kaW5nUHJvbWlzZSIsInRvdGFsQXNzZXRzIiwiUHJvdmlkZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIlNlYXJjaGVyIiwiX21vZGFsIiwiXyIsIkF0dGFjaG1lbnRzTW9kYWwiLCJNb2RhbCIsInNob3ciLCJfZm9ybSIsIlNlYXJjaEJhciIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJOT19DUkVESVRTIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwib25TdWJtaXQiLCJJbnB1dCIsIl9saXN0IiwiX2JhciIsImxvYWRpbmciLCJMaXN0IiwiY29udHJvbCIsImFzIiwiRW1wdHlDYXJkIiwic2VsZWN0ZWQiLCJjbHN4Iiwicm9sZSIsInRhYkluZGV4IiwidGh1bWJuYWlsTGluayIsInN0eWxlIiwidGh1bWJuYWlsSGVpZ2h0IiwidGh1bWJuYWlsV2lkdGgiXSwic291cmNlcyI6WyIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYXNzZXRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NldHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZW1wdHktc3RhdGUvaW1hZ2UtaWNvbi50c3giLCIvdHMvdmlld3MvZW1wdHktc3RhdGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi90cy92aWV3cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS1tYW5hZ2VyLnRzIiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS11cGxvYWRlci50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9hY3Rpb24tYnV0dG9ucy50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9lZGl0LW1vZGUudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvZ2VuZXJhdG9yLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2hvb2tzL3VzZS1zbGlkZS1hbmltYXRpb24udHMiLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbWFnZS1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvaW1hZ2UtcHJldmlldy50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9zZWFyY2hlZC50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci91cGxvYWRlZC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGFsLnRzeCIsIi90cy92aWV3cy9zZWFyY2gvYmFyLnRzeCIsIi90cy92aWV3cy9zZWFyY2gvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBSU87VUFBVSxNQUFPRSxnQkFBaUIsU0FBUUgsS0FBQSxDQUFBSSxnQkFBZ0I7WUFDaEUsQ0FBQUMsVUFBVyxHQUFXLEVBQUU7WUFZeEIsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBQyxPQUFRLEdBQWtCLEVBQUU7WUFDNUIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFDLFVBQVcsQ0FBQ0MsS0FBSztZQUM5QjtZQUVBLENBQUFDLEtBQU0sR0FBa0IsSUFBSTtZQUM1QixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFGLFVBQVcsR0FBRyxJQUFJTCxPQUFBLENBQUFRLFlBQVksRUFBRTtZQUVoQ0MsWUFBWUMsUUFBa0IsRUFBRUMsT0FBZ0I7Y0FDL0MsS0FBSyxDQUFDLHlDQUF5QyxFQUFFO2dCQUNoREMsVUFBVSxFQUFFLENBQ1gsT0FBTyxFQUNQLE9BQU8sRUFFUCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1QsYUFBYSxFQUNiLGVBQWUsRUFDZixlQUFlO2VBRWhCLENBQUM7Y0FD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