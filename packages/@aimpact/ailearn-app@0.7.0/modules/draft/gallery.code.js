System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/images", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/drafts", "@aimpact/media-manager@1.0.0/uploader", "clsx@2.1.1", "pragmate-ui@1.0.8/components", "react@18.3.1", "react-icons@5.5.0/fa", "react-icons@5.5.0/fi", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/image", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/toast", "gsap@3.13.0", "pragmate-ui@1.0.8/alert", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/list", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
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
    }, function (_gsap2) {
      dependency_18 = _gsap2;
    }, function (_pragmateUi108Alert) {
      dependency_19 = _pragmateUi108Alert;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_20 = _aimpactAilearnApp070ComponentsUi;
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/ailearn-sdk/images', dependency_2], ['@aimpact/ailearn-app/stores/base', dependency_3], ['@aimpact/ailearn-sdk/entities/drafts', dependency_4], ['@aimpact/media-manager/uploader', dependency_5], ['clsx', dependency_6], ['pragmate-ui/components', dependency_7], ['react', dependency_8], ['react-icons/fa', dependency_9], ['react-icons/fi', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/image', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/toast', dependency_17], ['gsap', dependency_18], ['pragmate-ui/alert', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/list', dependency_23], ['@beyond-js/kernel/styles', dependency_24]]);
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
        hash: 3882173403,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assets = Assets;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _framerMotion = require("framer-motion");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var React = require("react");
          var _context = require("../context");
          var _emptyState = require("../empty-state");
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
          function Assets() {
            const {
              gallery
            } = (0, _context.useGalleryContext)();
            const [assets, setAssets] = React.useState(gallery.activity.materials?.assets?.items || []);
            const onDelete = item => {
              setAssets(assets.filter(asset => asset.id !== item.id));
            };
            (0, _hooks.useStore)(gallery.activity.materials, ['change'], () => {
              setAssets(gallery.activity.materials?.assets?.items || []);
            });
            if (!assets.length) return React.createElement(_emptyState.EmptyState, null);
            return React.createElement("div", {
              className: "gallery-assets-container"
            }, React.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, React.createElement("ul", {
              className: "assets-container"
            }, assets.map(item => React.createElement(Item, {
              key: item.id,
              item: item,
              onDelete: onDelete
            })))));
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
        hash: 489664293,
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
              gallery,
              onClose,
              promise
            } = (0, _context.useGalleryContext)();
            (0, _hooks.useStore)(gallery, ['fetching.changed']);
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
        hash: 410372611,
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
        hash: 4247488786,
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
            fetching
          }) {
            const {
              texts: {
                selectedImage: texts
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
            }))), image && React.createElement("div", null, React.createElement("h4", null, image.title), image.image && React.createElement(_alert.Alert, {
              type: "info"
            }, React.createElement(_components.HtmlWrapper, null, texts.disclaimer), React.createElement("a", {
              href: image.image.contextLink,
              target: "_blank",
              rel: "noopener noreferrer"
            }, texts.copyrightNotice))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/image-manager/index
      *******************************************/

      ims.set('./views/image-manager/index', {
        hash: 1951410235,
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
              src: src,
              alt: image?.title || texts.title,
              image: image,
              fetching: processing
            }), !editMode ? React.createElement(_actionButtons.ActionButtons, {
              onUseImage: onUseImage,
              onEditMode: onEditMode
            }) : React.createElement(_editMode.EditMode, {
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
        hash: 3309614562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GalleryModal = GalleryModal;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _actions = require("./actions");
          var _assets = require("./assets");
          var _context = require("./context");
          var _useStoreManager = require("./hooks/use-store-manager");
          var _search = require("./search");
          var _imageManager = require("./image-manager");
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
              }, React.createElement(_ui.PageLoader, {
                fetching: true
              }));
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
            const attrs = {
              onClick: () => {
                if (store.state === 'empty') return;
                store.state = 'empty';
              },
              disabled: store.state === 'empty',
              icon: store.state === 'empty' ? 'gallery' : 'backArrow'
            };
            return React.createElement(_context.GalleryContext.Provider, {
              value: value
            }, React.createElement(_modal.Modal, {
              show: true,
              className: "modal-form--gallery",
              onClose: handleClose,
              closeBackdrop: false
            }, React.createElement("div", {
              className: "modal-gallery__header"
            }, React.createElement(_icons.AppIconButton, {
              ...attrs
            }), React.createElement("h4", null, texts.header.title), React.createElement(_actions.Actions, null)), React.createElement("div", {
              className: "main-modal-content"
            }, React.createElement(_components.ConditionalContainer, {
              condition: store.state,
              options: {
                empty: React.createElement(_assets.Assets, null),
                search: React.createElement(_search.Searcher, null)
              }
            }), React.createElement(_ui.ProcessContainer, {
              fetching: store.fetching
            })), store.image && !store.openGenerator && React.createElement(_imageManager.SelectedImage, null), store.searchedImage && React.createElement(_searched.SearchedImage, null), store.uploadedImage && React.createElement(_uploaded.UploadedImage, null), store.openGenerator && React.createElement(_generator.Generator, null)));
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
        hash: 1067505212,
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
            return React.createElement("div", {
              className: "gallery-modal__search-container"
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
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaW1hZ2VzIiwicmVxdWlyZSIsIl9iYXNlIiwiR2FsbGVyeVN0b3JlIiwiQmFzZVN0b3JlTWFuYWdlciIsInNlYXJjaFRlcm0iLCJyZXN1bHRzIiwiY29sbGVjdGlvbiIsIml0ZW1zIiwiZXJyb3IiLCJHb29nbGVJbWFnZXMiLCJjb25zdHJ1Y3RvciIsImFjdGl2aXR5IiwicHJvcGVydGllcyIsInN0YXRlIiwic2VhcmNoIiwicXVlcnkiLCJ0cmltIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwibG9nIiwiaWQiLCJsb2FkIiwicGFyZW50Iiwic2VsZWN0SW1hZ2UiLCJpbWFnZSIsImNsZWFyIiwicmV2ZXJ0IiwidW5kZWZpbmVkIiwidHJpZ2dlciIsImdlbmVyYXRlSW1hZ2UiLCJ0ZXh0IiwiZmlsZXMiLCJ1cmxzIiwiRXJyb3IiLCJ1cGxvYWQiLCJzcGVjcyIsIm5hbWUiLCJ1cmwiLCJsaW5rIiwiZmlsZSIsInVwbG9hZEltYWdlIiwiZXhwb3J0cyIsIl9jbHN4IiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9jb250ZXh0IiwiX3VzZVVwbG9hZGVyIiwiX2ZhIiwiX2ZpIiwiX2ljb25zIiwiQWN0aW9ucyIsImdhbGxlcnkiLCJ0ZXh0cyIsInVzZUdhbGxlcnlDb250ZXh0Iiwic2hvd09wdGlvbnMiLCJzZXRTaG93T3B0aW9ucyIsInVzZVN0YXRlIiwib25Ecm9wZG93biIsIkRyb3BEb3duSXRlbXMiLCJ0cmlnZ2VyUmVmIiwidXNlVXBsb2FkZXIiLCJhY2NlcHQiLCJ2YWxpZGF0b3JzIiwib3B0aW9ucyIsIm1heFNpemUiLCJwcm9jZXNzb3JzIiwib25Mb2FkIiwibGVuZ3RoIiwidXBsb2FkZWRJbWFnZSIsIm9uTmF2aWdhdGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib3BlbkdlbmVyYXRvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiRmFHb29nbGUiLCJhY3Rpb25zIiwicmVmIiwiRmlVcGxvYWQiLCJBcHBJY29uIiwiaWNvbiIsImdlbmVyYXRlIiwiZGVmYXVsdCIsIkJ1dHRvbiIsIl9ob29rcyIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfZW1wdHlTdGF0ZSIsIkl0ZW0iLCJpdGVtIiwib25EZWxldGUiLCJvbkRlbGV0ZUZuIiwicHJldmVudERlZmF1bHQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsIm1hdGVyaWFscyIsInJlbW92ZUFzc2V0IiwibW90aW9uIiwibGkiLCJrZXkiLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJkZXNjcmlwdGlvbiIsIkljb25CdXR0b24iLCJ2YXJpYW50IiwiQXNzZXRzIiwiYXNzZXRzIiwic2V0QXNzZXRzIiwiZmlsdGVyIiwiYXNzZXQiLCJ1c2VTdG9yZSIsIkVtcHR5U3RhdGUiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwibWFwIiwiR2FsbGVyeUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkltYWdlSWNvbiIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsImQiLCJfaW1hZ2VJY29uIiwiRnJhZ21lbnQiLCJlbXB0eSIsInRpdGxlIiwiYm9yZGVyZWQiLCJBcHBCdXR0b24iLCJFcnJvckJvdW5kYXJ5IiwiQ29tcG9uZW50IiwicHJvcHMiLCJoYXNFcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3JJbmZvIiwicmVuZGVyIiwiZmFsbGJhY2siLCJtZXNzYWdlIiwiY2hpbGRyZW4iLCJGb290ZXJHYWxsZXJ5IiwicHJvbWlzZSIsIm9uQ2xvc2UiLCJoYW5kbGVDb25maXJtU2VsZWN0aW9uIiwic2VsZWN0ZWRJbWFnZSIsInJlc29sdmUiLCJkaXNhYmxlZCIsInNlbGVjdCIsIl9yZWFjdCIsIl9zdG9yZSIsInVzZVN0b3JlTWFuYWdlciIsInJlYWR5Iiwic2V0UmVhZHkiLCJzdG9yZSIsInNldFN0b3JlIiwic2V0VmVyc2lvbiIsImV2ZW50cyIsInVzZUVmZmVjdCIsImhhbmRsZXIiLCJ2IiwiZm9yRWFjaCIsIm9uIiwib2ZmIiwiX3VwbG9hZGVyIiwidXNlUmVmIiwiZHJvcFpvbmVSZWYiLCJ1cGxvYWRlciIsIlVwbG9hZGVyIiwiY3VycmVudCIsImNyZWF0ZSIsImRlc3Ryb3kiLCJjb3VudCIsInRvdGFsIiwicHJvZ3Jlc3MiLCJNYXRoIiwicm91bmQiLCJlcnJvcnMiLCJ1cGxvYWRpbmciLCJBY3Rpb25CdXR0b25zIiwib25FZGl0TW9kZSIsIm9uVXNlSW1hZ2UiLCJlZGl0V2l0aEFpIiwidXNlIiwiX3RvYXN0IiwiRWRpdE1vZGUiLCJzZXRQcm9jZXNzaW5nIiwicHJvY2Vzc2luZyIsInByb2Nlc3MiLCJhY3Rpb25zVGV4dHMiLCJwcm9tcHQiLCJzZXRQcm9tcHQiLCJpc0dlbmVyYXRpbmciLCJzZXRJc0dlbmVyYXRpbmciLCJvblByb21wdENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25HZW5lcmF0ZUltYWdlIiwiZSIsInRvYXN0IiwiZ2xvYmFsVGV4dHMiLCJOT19DUkVESVRTIiwiREVGQVVMVF9FUlJPUiIsInBsYWNlaG9sZGVyIiwicHJvbXB0UGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl91c2VTbGlkZUFuaW1hdGlvbiIsIl9pbWFnZUhlYWRlciIsIl9lZGl0TW9kZSIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsInBhbmVsUmVmIiwidXNlU2xpZGVBbmltYXRpb24iLCJvbkJhY2siLCJJbWFnZUhlYWRlciIsImFkdmljZSIsIl9nc2FwIiwiZWxlbWVudFJlZiIsImdzYXAiLCJzZXQiLCJ4IiwidG8iLCJraWxsVHdlZW5zT2YiLCJXcmFwcGVyIiwiaHJlZiIsImNvbnRleHRMaW5rIiwicmVsIiwic2VhcmNoZWRJbWFnZSIsIkFwcEljb25CdXR0b24iLCJfYWxlcnQiLCJJbWFnZVByZXZpZXciLCJTcGlubmVyIiwiYWN0aXZlIiwic2l6ZSIsIkFsZXJ0IiwidHlwZSIsIkh0bWxXcmFwcGVyIiwiZGlzY2xhaW1lciIsImNvcHlyaWdodE5vdGljZSIsIl9pbWFnZVByZXZpZXciLCJfYWN0aW9uQnV0dG9ucyIsIlNlbGVjdGVkSW1hZ2UiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwicHJldmlld1VybCIsIlNlYXJjaGVkSW1hZ2UiLCJvbkF0dGFjaEltYWdlIiwic3VjY2VzcyIsImF0dGFjaCIsIlVwbG9hZGVkSW1hZ2UiLCJfdWkiLCJfbW9kYWwiLCJfYWN0aW9ucyIsIl9hc3NldHMiLCJfdXNlU3RvcmVNYW5hZ2VyIiwiX3NlYXJjaCIsIl9pbWFnZU1hbmFnZXIiLCJfc2VhcmNoZWQiLCJfdXBsb2FkZWQiLCJfZ2VuZXJhdG9yIiwiR2FsbGVyeU1vZGFsIiwiTW9kYWwiLCJzaG93IiwiUGFnZUxvYWRlciIsImhhbmRsZUNsb3NlIiwidG90YWxBc3NldHMiLCJhdHRycyIsIlByb3ZpZGVyIiwiY2xvc2VCYWNrZHJvcCIsImhlYWRlciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiU2VhcmNoZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJTZWFyY2hCYXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwib25TdWJtaXQiLCJJbnB1dCIsIl9saXN0IiwiX2l0ZW0iLCJfYmFyIiwib25Mb2FkSW1hZ2UiLCJvbkdlbmVyYXRlQUkiLCJsb2FkaW5nIiwiTGlzdCIsImNvbnRyb2wiLCJhcyIsIkVtcHR5Q2FyZCIsInNlbGVjdGVkIiwiY2xzeCIsInJvbGUiLCJ0YWJJbmRleCIsInRodW1ibmFpbExpbmsiLCJzdHlsZSIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbFdpZHRoIl0sInNvdXJjZXMiOlsiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2V0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZW1wdHktc3RhdGUvaW1hZ2UtaWNvbi50c3giLCIvdHMvdmlld3MvZW1wdHktc3RhdGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi90cy92aWV3cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS1tYW5hZ2VyLnRzIiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS11cGxvYWRlci50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9hY3Rpb24tYnV0dG9ucy50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9lZGl0LW1vZGUudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvZ2VuZXJhdG9yLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2hvb2tzL3VzZS1zbGlkZS1hbmltYXRpb24udHMiLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbWFnZS1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvaW1hZ2UtcHJldmlldy50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9zZWFyY2hlZC50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci91cGxvYWRlZC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9iYXIudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VhcmNoL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFJTztVQUFVLE1BQU9FLFlBQWEsU0FBUUQsS0FBQSxDQUFBRSxnQkFBZ0I7WUFDNUQsQ0FBQUMsVUFBVyxHQUFXLEVBQUU7WUFXeEIsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBQyxPQUFRLEdBQWtCLEVBQUU7WUFDNUIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFDLFVBQVcsQ0FBQ0MsS0FBSztZQUM5QjtZQUVBLENBQUFDLEtBQU0sR0FBa0IsSUFBSTtZQUM1QixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFGLFVBQVcsR0FBRyxJQUFJUCxPQUFBLENBQUFVLFlBQVksRUFBRTtZQUVoQ0MsWUFBWUMsUUFBa0I7Y0FDN0IsS0FBSyxDQUFDLDRDQUE0QyxFQUFFO2dCQUNuREMsVUFBVSxFQUFFLENBQ1gsT0FBTyxFQUNQLE9BQU8sRUFFUCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLFVBQVUsRUFDVixhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWU7ZUFFaEIsQ0FBQztjQUNGLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRO2NBQ3hCLElBQUksQ0FBQ0UsS0FBSyxHQUFHLE9BQU87WUFDckI7WUFFQSxNQUFNQyxNQUFNQSxDQUFDQyxLQUFhO2NBQ3pCLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxJQUFJLEVBQUUsRUFBRTtjQUVuQixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVKLEtBQUssRUFBRSxJQUFJLENBQUNKLFFBQVEsQ0FBQ1MsRUFBRSxDQUFDO2dCQUM5QyxNQUFNLElBQUksQ0FBQyxDQUFBZCxVQUFXLENBQUNlLElBQUksQ0FBQztrQkFDM0JELEVBQUUsRUFBRSxJQUFJLENBQUNULFFBQVEsQ0FBQ1csTUFBTSxDQUFDRixFQUFFO2tCQUMzQkw7a0JBQ0E7a0JBQ0E7aUJBQ0EsQ0FBQztnQkFDRixJQUFJLENBQUNGLEtBQUssR0FBRyxRQUFRO2VBQ3JCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDSSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFDQU0sV0FBV0EsQ0FBQ0MsS0FBeUI7Y0FDcEMsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7Y0FFbEI7WUFDRDtZQUVBQyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUFyQixVQUFXLEdBQUcsRUFBRTtjQUNyQixJQUFJLENBQUMsQ0FBQUMsT0FBUSxHQUFHLEVBQUU7Y0FDbEIsSUFBSSxDQUFDcUIsTUFBTSxFQUFFO2NBRWIsSUFBSSxDQUFDRixLQUFLLEdBQUdHLFNBQVM7Y0FDdEIsSUFBSSxDQUFDLENBQUFyQixVQUFXLEdBQUcsSUFBSVAsT0FBQSxDQUFBVSxZQUFZLEVBQUU7Y0FDckMsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJO2NBQ2xCLElBQUksQ0FBQ0ssS0FBSyxHQUFHLE9BQU87Y0FDcEIsSUFBSSxDQUFDZSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTUMsYUFBYUEsQ0FBQztjQUFFQyxJQUFJO2NBQUVDLEtBQUs7Y0FBRUM7WUFBSSxDQUFxRDtjQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDckIsUUFBUSxFQUFFO2dCQUNuQixNQUFNLElBQUlzQixLQUFLLENBQUMscUJBQXFCLENBQUM7O2NBRXZDLE1BQU1ULEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQ2IsUUFBUSxDQUFDa0IsYUFBYSxDQUFDO2dCQUFFQyxJQUFJO2dCQUFFQyxLQUFLO2dCQUFFQztjQUFJLENBQUUsQ0FBQztjQUN0RSxJQUFJLENBQUNSLEtBQUssR0FBR0EsS0FBSztjQUNsQixPQUFPQSxLQUFLO1lBQ2I7WUFFQSxNQUFNVSxNQUFNQSxDQUFDVixLQUF5QjtjQUNyQyxNQUFNVyxLQUFLLEdBQUdYLEtBQUssQ0FBQ2QsV0FBVyxDQUFDMEIsSUFBSSxLQUFLLGFBQWEsR0FBRztnQkFBRUMsR0FBRyxFQUFFYixLQUFLLENBQUNjO2NBQUksQ0FBRSxHQUFHO2dCQUFFQyxJQUFJLEVBQUVmLEtBQUssQ0FBQ2U7Y0FBSSxDQUFFO2NBRW5HLE9BQU8sTUFBTSxJQUFJLENBQUM1QixRQUFRLENBQUM2QixXQUFXLENBQUNMLEtBQUssQ0FBQztZQUM5Qzs7VUFDQU0sT0FBQSxDQUFBdkMsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BHRCxJQUFBd0MsS0FBQSxHQUFBMUMsT0FBQTtVQUNBLElBQUEyQyxXQUFBLEdBQUEzQyxPQUFBO1VBQ0EsSUFBQTRDLEtBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBNkMsUUFBQSxHQUFBN0MsT0FBQTtVQUNBLElBQUE4QyxZQUFBLEdBQUE5QyxPQUFBO1VBQ0EsSUFBQStDLEdBQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBZ0QsR0FBQSxHQUFBaEQsT0FBQTtVQUNBLElBQUFpRCxNQUFBLEdBQUFqRCxPQUFBO1VBRU0sU0FBVWtELE9BQU9BLENBQUE7WUFDdEIsTUFBTTtjQUFFQyxPQUFPO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVEsaUJBQWlCLEdBQUU7WUFDOUMsTUFBTSxDQUFDQyxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHWCxLQUFLLENBQUNZLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFM0QsTUFBTUMsVUFBVSxHQUFHQSxDQUFBLEtBQU1GLGNBQWMsQ0FBQyxDQUFDRCxXQUFXLENBQUM7WUFFckQsTUFBTUksYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsTUFBTTtnQkFBRUM7Y0FBVSxDQUFFLEdBQUcsSUFBQWIsWUFBQSxDQUFBYyxXQUFXLEVBQWE7Z0JBQzlDQyxNQUFNLEVBQUUsU0FBUztnQkFDakJDLFVBQVUsRUFBRSxDQUFDO2tCQUFFMUIsSUFBSSxFQUFFLE9BQU87a0JBQUUyQixPQUFPLEVBQUU7b0JBQUVDLE9BQU8sRUFBRTtrQkFBQztnQkFBRSxDQUFFLENBQUM7Z0JBQ3hEQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCQyxNQUFNLEVBQUduQyxLQUFtQixJQUFJO2tCQUMvQjBCLFVBQVUsRUFBRTtrQkFDWixJQUFJMUIsS0FBSyxDQUFDb0MsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDckJoQixPQUFPLENBQUNpQixhQUFhLEdBQUdyQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztnQkFFbEM7ZUFDQSxDQUFDO2NBRUYsTUFBTXNDLFVBQVUsR0FBSUMsS0FBdUMsSUFBSTtnQkFDOURBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN2QixJQUFJRCxLQUFLLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDNUQsS0FBSyxLQUFLLFVBQVUsRUFBRTtrQkFDckRLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRW1ELEtBQUssQ0FBQ0UsYUFBYSxDQUFDQyxPQUFPLENBQUM1RCxLQUFLLENBQUM7a0JBQ2pEc0MsT0FBTyxDQUFDdUIsYUFBYSxHQUFHLElBQUk7a0JBQzVCOztnQkFFRHZCLE9BQU8sQ0FBQ3RDLEtBQUssR0FBR3lELEtBQUssQ0FBQ0UsYUFBYSxDQUFDQyxPQUFPLENBQUM1RCxLQUE4QjtnQkFDMUUwQyxjQUFjLENBQUMsS0FBSyxDQUFDO2NBQ3RCLENBQUM7Y0FFRCxPQUNDWCxLQUFBLENBQUErQixhQUFBO2dCQUFLQyxTQUFTLEVBQUM7Y0FBZSxHQUM3QmhDLEtBQUEsQ0FBQStCLGFBQUE7Z0JBQUtDLFNBQVMsRUFBQztjQUE2QixHQUMzQ2hDLEtBQUEsQ0FBQStCLGFBQUE7Z0JBQUtDLFNBQVMsRUFBQyxxQkFBcUI7Z0JBQUEsY0FBWSxRQUFRO2dCQUFDQyxPQUFPLEVBQUVSO2NBQVUsR0FDM0V6QixLQUFBLENBQUErQixhQUFBLENBQUM1QixHQUFBLENBQUErQixRQUFRLE9BQUcsRSxLQUFFMUIsS0FBSyxDQUFDMkIsT0FBTyxDQUFDakUsTUFBTSxDQUM3QixFQUNOOEIsS0FBQSxDQUFBK0IsYUFBQTtnQkFBS0MsU0FBUyxFQUFDLHFCQUFxQjtnQkFBQ0ksR0FBRyxFQUFFckI7Y0FBd0QsR0FDakdmLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQzNCLEdBQUEsQ0FBQWlDLFFBQVEsT0FBRyxFQUNYN0IsS0FBSyxDQUFDMkIsT0FBTyxDQUFDN0MsTUFBTSxDQUNoQixFQUNOVSxLQUFBLENBQUErQixhQUFBO2dCQUFLQyxTQUFTLEVBQUMscUJBQXFCO2dCQUFBLGNBQVksVUFBVTtnQkFBQ0MsT0FBTyxFQUFFUjtjQUFVLEdBQzdFekIsS0FBQSxDQUFBK0IsYUFBQSxDQUFDMUIsTUFBQSxDQUFBaUMsT0FBTztnQkFBQ0MsSUFBSSxFQUFDO2NBQVMsRUFBRyxFLEtBQUUvQixLQUFLLENBQUMyQixPQUFPLENBQUNLLFFBQVEsQ0FDN0MsQ0FDRCxDQUNEO1lBRVIsQ0FBQztZQUVELE9BQ0N4QyxLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQmhDLEtBQUEsQ0FBQStCLGFBQUE7Y0FDQ0MsU0FBUyxFQUFFLElBQUFsQyxLQUFBLENBQUEyQyxPQUFJLEVBQUMsb0JBQW9CLEVBQUU7Z0JBQ3JDLHVCQUF1QixFQUFFL0I7ZUFDekI7WUFBQyxHQUVGVixLQUFBLENBQUErQixhQUFBLENBQUNoQyxXQUFBLENBQUEyQyxNQUFNO2NBQUNILElBQUksRUFBQyxTQUFTO2NBQUNOLE9BQU8sRUFBRXBCO1lBQVUsR0FDeENMLEtBQUssQ0FBQzJCLE9BQU8sQ0FBQzdDLE1BQU0sQ0FDYixFQUNSb0IsV0FBVyxJQUFJVixLQUFBLENBQUErQixhQUFBLENBQUNqQixhQUFhLE9BQUcsQ0FDNUIsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQSxJQUFBNkIsTUFBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUF3RixhQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQWlELE1BQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUE0QyxLQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBMEYsV0FBQSxHQUFBMUYsT0FBQTtVQUVBLFNBQVMyRixJQUFJQSxDQUFDO1lBQUVDLElBQUk7WUFBRUM7VUFBUSxDQUFnRDtZQUM3RSxNQUFNO2NBQUUxQztZQUFPLENBQUUsR0FBRyxJQUFBTixRQUFBLENBQUFRLGlCQUFpQixHQUFFO1lBQ3ZDLE1BQU13QixPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQjFCLE9BQU8sQ0FBQzVCLFdBQVcsQ0FBQ3FFLElBQUksQ0FBQztZQUMxQixDQUFDO1lBRUQsTUFBTUUsVUFBVSxHQUFJeEIsS0FBMEMsSUFBSTtjQUNqRUEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJELEtBQUssQ0FBQ3lCLGNBQWMsRUFBRTtjQUN0QkYsUUFBUSxDQUFDRCxJQUFJLENBQUM7Y0FDZEksVUFBVSxDQUFDQyxVQUFVLENBQUMsTUFBSztnQkFDMUI5QyxPQUFPLENBQUN4QyxRQUFRLENBQUN1RixTQUFTLENBQUNDLFdBQVcsQ0FBQ1AsSUFBSSxDQUFDeEUsRUFBRSxDQUFDO2NBQ2hELENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUixDQUFDO1lBRUQsT0FDQ3dCLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2EsYUFBQSxDQUFBWSxNQUFNLENBQUNDLEVBQUU7Y0FDVEMsR0FBRyxFQUFFVixJQUFJLENBQUN4RSxFQUFFO2NBQ1p5RCxPQUFPLEVBQUVBLE9BQU87Y0FDaEIwQixNQUFNO2NBQ05DLE9BQU8sRUFBRTtnQkFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQUVDLEtBQUssRUFBRTtjQUFDLENBQUU7Y0FDakNDLE9BQU8sRUFBRTtnQkFBRUYsT0FBTyxFQUFFLENBQUM7Z0JBQUVDLEtBQUssRUFBRTtjQUFDLENBQUU7Y0FDakNFLElBQUksRUFBRTtnQkFDTEgsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZDLEtBQUssRUFBRSxHQUFHO2dCQUNWRyxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRSxHQUFHO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQVc7O1lBQzlDLEdBRURuRSxLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFxQixHQUNuQ2hDLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBdUIsS0FBSztjQUFDQyxHQUFHLEVBQUVyQixJQUFJLENBQUNxQixHQUFHO2NBQUVDLEdBQUcsRUFBRXRCLElBQUksQ0FBQ3VCO1lBQVcsRUFBSSxFQUMvQ3ZFLEtBQUEsQ0FBQStCLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQTZCLEdBQy9DaEMsS0FBQSxDQUFBK0IsYUFBQSxDQUFDMUIsTUFBQSxDQUFBbUUsVUFBVTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDbEMsSUFBSSxFQUFDLFFBQVE7Y0FBQ04sT0FBTyxFQUFFaUI7WUFBVSxFQUFJLENBQzFELENBQ0wsQ0FDSztVQUVkO1VBRU0sU0FBVXdCLE1BQU1BLENBQUE7WUFDckIsTUFBTTtjQUFFbkU7WUFBTyxDQUFFLEdBQUcsSUFBQU4sUUFBQSxDQUFBUSxpQkFBaUIsR0FBRTtZQUN2QyxNQUFNLENBQUNrRSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHNUUsS0FBSyxDQUFDWSxRQUFRLENBQUNMLE9BQU8sQ0FBQ3hDLFFBQVEsQ0FBQ3VGLFNBQVMsRUFBRXFCLE1BQU0sRUFBRWhILEtBQUssSUFBSSxFQUFFLENBQUM7WUFFM0YsTUFBTXNGLFFBQVEsR0FBSUQsSUFBUyxJQUFJO2NBQzlCNEIsU0FBUyxDQUFDRCxNQUFNLENBQUNFLE1BQU0sQ0FBRUMsS0FBVSxJQUFLQSxLQUFLLENBQUN0RyxFQUFFLEtBQUt3RSxJQUFJLENBQUN4RSxFQUFFLENBQUMsQ0FBQztZQUMvRCxDQUFDO1lBRUQsSUFBQW1FLE1BQUEsQ0FBQW9DLFFBQVEsRUFBQ3hFLE9BQU8sQ0FBQ3hDLFFBQVEsQ0FBQ3VGLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQUs7Y0FDckRzQixTQUFTLENBQUNyRSxPQUFPLENBQUN4QyxRQUFRLENBQUN1RixTQUFTLEVBQUVxQixNQUFNLEVBQUVoSCxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzNELENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ2dILE1BQU0sQ0FBQ3BELE1BQU0sRUFBRSxPQUFPdkIsS0FBQSxDQUFBK0IsYUFBQSxDQUFDZSxXQUFBLENBQUFrQyxVQUFVLE9BQUc7WUFFekMsT0FDQ2hGLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDaEMsS0FBQSxDQUFBK0IsYUFBQSxDQUFDYSxhQUFBLENBQUFxQyxlQUFlO2NBQUNDLElBQUksRUFBQztZQUFNLEdBQzNCbEYsS0FBQSxDQUFBK0IsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBa0IsR0FDOUIyQyxNQUFNLENBQUNRLEdBQUcsQ0FBRW5DLElBQVMsSUFDckJoRCxLQUFBLENBQUErQixhQUFBLENBQUNnQixJQUFJO2NBQUNXLEdBQUcsRUFBRVYsSUFBSSxDQUFDeEUsRUFBRTtjQUFFd0UsSUFBSSxFQUFFQSxJQUFJO2NBQUVDLFFBQVEsRUFBRUE7WUFBUSxFQUNsRCxDQUFDLENBQ0UsQ0FDWSxDQUNiO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkVBLElBQUFqRCxLQUFBLEdBQUE1QyxPQUFBO1VBYU8sTUFBTWdJLGNBQWMsR0FBQXZGLE9BQUEsQ0FBQXVGLGNBQUEsR0FBR3BGLEtBQUssQ0FBQ3FGLGFBQWEsQ0FBQyxFQUFxQixDQUFDO1VBQ2pFLE1BQU01RSxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNVCxLQUFLLENBQUNzRixVQUFVLENBQUNGLGNBQWMsQ0FBQztVQUFDdkYsT0FBQSxDQUFBWSxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkeEUsSUFBQVQsS0FBQSxHQUFBNUMsT0FBQTtVQUVNLFNBQVVtSSxTQUFTQSxDQUFBO1lBQ3hCLE9BQ0N2RixLQUFBLENBQUErQixhQUFBO2NBQUt5RCxLQUFLLEVBQUMsNEJBQTRCO2NBQUNDLEtBQUssRUFBQyxJQUFJO2NBQUNDLE1BQU0sRUFBQyxJQUFJO2NBQUNDLE9BQU8sRUFBQyxXQUFXO2NBQUNDLElBQUksRUFBQztZQUFNLEdBQzdGNUYsS0FBQSxDQUFBK0IsYUFBQTtjQUNDOEQsQ0FBQyxFQUFDLG1rQkFBbWtCO2NBQ3JrQkQsSUFBSSxFQUFDO1lBQVMsRUFDYixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQXZGLE1BQUEsR0FBQWpELE9BQUE7VUFFQSxJQUFBMkMsV0FBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUE0QyxLQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBOEMsWUFBQSxHQUFBOUMsT0FBQTtVQUNBLElBQUEwSSxVQUFBLEdBQUExSSxPQUFBO1VBRU0sU0FBVTRILFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUFFekUsT0FBTztjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBUCxRQUFBLENBQUFRLGlCQUFpQixHQUFFO1lBRTlDLE1BQU07Y0FBRU07WUFBVSxDQUFFLEdBQUcsSUFBQWIsWUFBQSxDQUFBYyxXQUFXLEVBQWE7Y0FDOUNDLE1BQU0sRUFBRSxTQUFTO2NBQ2pCQyxVQUFVLEVBQUUsQ0FBQztnQkFBRTFCLElBQUksRUFBRSxPQUFPO2dCQUFFMkIsT0FBTyxFQUFFO2tCQUFFQyxPQUFPLEVBQUU7Z0JBQUM7Y0FBRSxDQUFFLENBQUM7Y0FDeERDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQztjQUNyQkMsTUFBTSxFQUFHbkMsS0FBbUIsSUFBSTtnQkFDL0IsSUFBSUEsS0FBSyxDQUFDb0MsTUFBTSxHQUFHLENBQUMsRUFBRTtrQkFDckJoQixPQUFPLENBQUM1QixXQUFXLENBQUNRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FFL0I7YUFDQSxDQUFDO1lBRUYsT0FDQ2EsS0FBQSxDQUFBK0IsYUFBQSxDQUFBL0IsS0FBQSxDQUFBK0YsUUFBQSxRQUNDL0YsS0FBQSxDQUFBK0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNEIsR0FDMUNoQyxLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF3QixHQUN0Q2hDLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDaEMsS0FBQSxDQUFBK0IsYUFBQSxDQUFDK0QsVUFBQSxDQUFBUCxTQUFTLE9BQUcsQ0FDUixFQUNOdkYsS0FBQSxDQUFBK0IsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBb0IsR0FBRXhCLEtBQUssQ0FBQ3dGLEtBQUssQ0FBQ0MsS0FBSyxDQUFNLEVBQzNEakcsS0FBQSxDQUFBK0IsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBMEIsR0FBRXhCLEtBQUssQ0FBQ3dGLEtBQUssQ0FBQ3pCLFdBQVcsQ0FBSyxFQUNyRXZFLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDaEMsS0FBQSxDQUFBK0IsYUFBQSxDQUFDaEMsV0FBQSxDQUFBMkMsTUFBTTtjQUNOK0IsT0FBTyxFQUFDLFNBQVM7Y0FDakJ5QixRQUFRO2NBQ1JsRSxTQUFTLEVBQUMscUJBQXFCO2NBQy9CQyxPQUFPLEVBQUVBLENBQUEsS0FBTzFCLE9BQU8sQ0FBQ3RDLEtBQUssR0FBRztZQUFTLEdBRXhDdUMsS0FBSyxDQUFDMkIsT0FBTyxDQUFDakUsTUFBTSxDQUNiLEVBQ1Q4QixLQUFBLENBQUErQixhQUFBLENBQUNoQyxXQUFBLENBQUEyQyxNQUFNO2NBQUMrQixPQUFPLEVBQUMsU0FBUztjQUFDckMsR0FBRyxFQUFFckIsVUFBVTtjQUFFbUYsUUFBUTtjQUFDbEUsU0FBUyxFQUFDO1lBQXFCLEdBQ2pGeEIsS0FBSyxDQUFDMkIsT0FBTyxDQUFDN0MsTUFBTSxDQUNiLEVBQ1RVLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQzFCLE1BQUEsQ0FBQThGLFNBQVM7Y0FBQzVELElBQUksRUFBQyxTQUFTO2NBQUNrQyxPQUFPLEVBQUMsU0FBUztjQUFDeUIsUUFBUTtjQUFDbEUsU0FBUyxFQUFDO1lBQXFCLEdBQ2xGeEIsS0FBSyxDQUFDMkIsT0FBTyxDQUFDSyxRQUFRLENBQ1osQ0FDUCxDQUNELENBQ0QsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBeEMsS0FBQSxHQUFBNUMsT0FBQTtVQVlNLE1BQU9nSixhQUFjLFNBQVFwRyxLQUFLLENBQUNxRyxTQUFtRDtZQUMzRnZJLFlBQVl3SSxLQUEwQjtjQUNyQyxLQUFLLENBQUNBLEtBQUssQ0FBQztjQUNaLElBQUksQ0FBQ3JJLEtBQUssR0FBRztnQkFDWnNJLFFBQVEsRUFBRSxLQUFLO2dCQUNmM0ksS0FBSyxFQUFFO2VBQ1A7WUFDRjtZQUVBLE9BQU80SSx3QkFBd0JBLENBQUM1SSxLQUFZO2NBQzNDLE9BQU87Z0JBQ04ySSxRQUFRLEVBQUUsSUFBSTtnQkFDZDNJO2VBQ0E7WUFDRjtZQUVBNkksaUJBQWlCQSxDQUFDN0ksS0FBWSxFQUFFOEksU0FBMEI7Y0FDekRwSSxPQUFPLENBQUNWLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRUEsS0FBSyxFQUFFOEksU0FBUyxDQUFDO1lBQ2xFO1lBRUFDLE1BQU1BLENBQUE7Y0FDTCxJQUFJLElBQUksQ0FBQzFJLEtBQUssQ0FBQ3NJLFFBQVEsRUFBRTtnQkFDeEIsSUFBSSxJQUFJLENBQUNELEtBQUssQ0FBQ00sUUFBUSxFQUFFO2tCQUN4QixPQUFPLElBQUksQ0FBQ04sS0FBSyxDQUFDTSxRQUFROztnQkFHM0IsT0FDQzVHLEtBQUEsQ0FBQStCLGFBQUE7a0JBQUtDLFNBQVMsRUFBQztnQkFBZ0IsR0FDOUJoQyxLQUFBLENBQUErQixhQUFBO2tCQUFLQyxTQUFTLEVBQUM7Z0JBQXlCLEdBQ3ZDaEMsS0FBQSxDQUFBK0IsYUFBQSxvQ0FBNkIsRUFDN0IvQixLQUFBLENBQUErQixhQUFBLDZFQUFxRSxFQUNwRSxJQUFJLENBQUM5RCxLQUFLLENBQUNMLEtBQUssSUFDaEJvQyxLQUFBLENBQUErQixhQUFBLGtCQUNDL0IsS0FBQSxDQUFBK0IsYUFBQSxrQ0FBZ0MsRUFDaEMvQixLQUFBLENBQUErQixhQUFBLGNBQU0sSUFBSSxDQUFDOUQsS0FBSyxDQUFDTCxLQUFLLENBQUNpSixPQUFPLENBQU8sQ0FFdEMsQ0FDSSxDQUNEOztjQUlSLE9BQU8sSUFBSSxDQUFDUCxLQUFLLENBQUNRLFFBQVE7WUFDM0I7O1VBQ0FqSCxPQUFBLENBQUF1RyxhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERELElBQUFwRyxLQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQTJDLFdBQUEsR0FBQTNDLE9BQUE7VUFFQSxJQUFBNkMsUUFBQSxHQUFBN0MsT0FBQTtVQU9NLFNBQVUySixhQUFhQSxDQUFDO1lBQUVDLE9BQU87WUFBRUM7VUFBTyxDQUF1QjtZQUN0RSxNQUFNO2NBQUV6RyxLQUFLO2NBQUVELE9BQU87Y0FBRWxDO1lBQVEsQ0FBRSxHQUFHLElBQUE0QixRQUFBLENBQUFRLGlCQUFpQixHQUFFO1lBRXhELE1BQU15RyxzQkFBc0IsR0FBR0EsQ0FBQSxLQUFXO2NBQ3pDLElBQUkzRyxPQUFPLENBQUM0RyxhQUFhLEVBQUU7Z0JBQzFCSCxPQUFPLEVBQUVJLE9BQU8sQ0FBQzdHLE9BQU8sQ0FBQzRHLGFBQWEsQ0FBQztnQkFDdkNGLE9BQU8sRUFBRTs7WUFFWCxDQUFDO1lBRUQsSUFBSSxDQUFDMUcsT0FBTyxDQUFDNEcsYUFBYSxFQUFFLE9BQU8sSUFBSTtZQUV2QyxPQUNDbkgsS0FBQSxDQUFBK0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDdENoQyxLQUFBLENBQUErQixhQUFBLENBQUNoQyxXQUFBLENBQUEyQyxNQUFNO2NBQUNULE9BQU8sRUFBRWlGLHNCQUFzQjtjQUFFbEYsU0FBUyxFQUFDLGFBQWE7Y0FBQ3FGLFFBQVEsRUFBRWhKO1lBQVEsR0FDakZtQyxLQUFLLENBQUMyQixPQUFPLENBQUNtRixNQUFNLENBQ2IsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBQyxNQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQW9LLE1BQUEsR0FBQXBLLE9BQUE7VUFFTztVQUFVLFNBQVVxSyxlQUFlQSxDQUFDMUosUUFBYTtZQUN2RCxNQUFNLENBQUMySixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHSixNQUFBLENBQUE5RSxPQUFLLENBQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ2dILEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdOLE1BQUEsQ0FBQTlFLE9BQUssQ0FBQzdCLFFBQVEsQ0FBc0IsSUFBSSxDQUFDO1lBQ25FLE1BQU0sR0FBR2tILFVBQVUsQ0FBQyxHQUFHUCxNQUFBLENBQUE5RSxPQUFLLENBQUM3QixRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU1tSCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFFekJSLE1BQUEsQ0FBQTlFLE9BQUssQ0FBQ3VGLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1KLEtBQUssR0FBRyxJQUFJSixNQUFBLENBQUFsSyxZQUFZLENBQUNTLFFBQVEsQ0FBQztjQUV4QzhKLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO2NBQ2YsTUFBTUssT0FBTyxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3BCSCxVQUFVLENBQUNJLENBQUMsSUFBSUEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEJQLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDRixLQUFLLElBQUksQ0FBQyxDQUFDRSxLQUFLLENBQUNwSCxLQUFLLENBQUM7Y0FDdkMsQ0FBQztjQUVEO2NBQ0F1SCxNQUFNLENBQUNJLE9BQU8sQ0FBQ3pHLEtBQUssSUFBSWtHLEtBQUssQ0FBQ1EsRUFBRSxDQUFDMUcsS0FBSyxFQUFFdUcsT0FBTyxDQUFDLENBQUM7Y0FDakRBLE9BQU8sRUFBRTtjQUNUO2NBQ0EsT0FBTyxNQUFLO2dCQUNYRixNQUFNLENBQUNJLE9BQU8sQ0FBQ3pHLEtBQUssSUFBSWtHLEtBQUssQ0FBQ1MsR0FBRyxDQUFDM0csS0FBSyxFQUFFdUcsT0FBTyxDQUFDLENBQUM7Y0FDbkQsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUFPO2NBQUVMLEtBQUs7Y0FBRUY7WUFBSyxDQUFFO1VBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBMUgsS0FBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUF1RixNQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQWtMLFNBQUEsR0FBQWxMLE9BQUE7VUFvQk8sV0F2QlA7O1VBbUJBOzs7O1VBSWlCLFNBQVU0RCxXQUFXQSxDQUFrQ3pCLEtBQWE7WUFDcEYsTUFBTXdCLFVBQVUsR0FBR2YsS0FBSyxDQUFDdUksTUFBTSxDQUEyQixJQUFJLENBQUM7WUFDL0QsTUFBTUMsV0FBVyxHQUFHeEksS0FBSyxDQUFDdUksTUFBTSxDQUFxQixJQUFJLENBQUM7WUFDMUQsTUFBTTtjQUFFakg7WUFBTSxDQUFFLEdBQUcvQixLQUFLO1lBRXhCO1lBQ0EsTUFBTSxDQUFDa0osUUFBUSxDQUFDLEdBQUd6SSxLQUFLLENBQUNZLFFBQVEsQ0FBQyxNQUFNLElBQUkwSCxTQUFBLENBQUFJLFFBQVEsQ0FBQ25KLEtBQXVCLENBQUMsQ0FBQztZQUM5RSxNQUFNcUksS0FBSyxHQUFHLElBQUFqRixNQUFBLENBQUFvQyxRQUFRLEVBQUMwRCxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFLO2NBQ2pELElBQUluSCxNQUFNLEVBQUVBLE1BQU0sQ0FBQ3NHLEtBQUssQ0FBQ3pJLEtBQUssQ0FBQ3hCLEtBQVksQ0FBQztZQUM3QyxDQUFDLENBQUM7WUFFRjtZQUNBcUMsS0FBSyxDQUFDZ0ksU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDakgsVUFBVSxDQUFDNEgsT0FBTyxFQUFFO2NBRXpCRixRQUFRLENBQUNHLE1BQU0sQ0FBQzdILFVBQVUsQ0FBQzRILE9BQU8sRUFBRUgsV0FBVyxDQUFDRyxPQUFPLElBQUk1SixTQUFTLENBQUM7Y0FDckUsT0FBTyxNQUFNMEosUUFBUSxDQUFDSSxPQUFPLEVBQUU7WUFDaEMsQ0FBQyxFQUFFLENBQUNKLFFBQVEsQ0FBQyxDQUFDO1lBRWQsTUFBTUssS0FBSyxHQUFHbEIsS0FBSyxDQUFDekksS0FBSyxDQUFDNEosS0FBSztZQUMvQixNQUFNQyxRQUFRLEdBQUdwQixLQUFLLENBQUN6SSxLQUFLLENBQUM0SixLQUFLLEdBQUcsQ0FBQyxHQUFHRSxJQUFJLENBQUNDLEtBQUssQ0FBRXRCLEtBQUssQ0FBQ3pJLEtBQUssQ0FBQ3hCLEtBQUssQ0FBQzRELE1BQU0sR0FBR3FHLEtBQUssQ0FBQ3pJLEtBQUssQ0FBQzRKLEtBQUssR0FBSSxHQUFHLENBQUMsR0FBRyxDQUFDO1lBRTdHLE9BQU87Y0FDTmhJLFVBQVU7Y0FDVnlILFdBQVc7Y0FDWEMsUUFBUTtjQUNSdEosS0FBSyxFQUFFeUksS0FBSyxDQUFDekksS0FBSyxDQUFDeEIsS0FBWTtjQUMvQndMLE1BQU0sRUFBRXZCLEtBQUssQ0FBQ3VCLE1BQU07Y0FDcEJDLFNBQVMsRUFBRXhCLEtBQUssQ0FBQ3ZKLFFBQVE7Y0FDekIySyxRQUFRO2NBQ1JGO2FBQ0E7VUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2REEsSUFBQTlJLEtBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMkMsV0FBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUFpRCxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBdUYsTUFBQSxHQUFBdkYsT0FBQTtVQU9NLFNBQVVpTSxhQUFhQSxDQUFDO1lBQUVDLFVBQVU7WUFBRUM7VUFBVSxDQUF1QjtZQUM1RSxNQUFNO2NBQUUvSSxLQUFLO2NBQUVuQyxRQUFRO2NBQUVrQyxPQUFPO2NBQUUwRyxPQUFPO2NBQUVEO1lBQU8sQ0FBRSxHQUFHLElBQUEvRyxRQUFBLENBQUFRLGlCQUFpQixHQUFFO1lBRTFFLElBQUFrQyxNQUFBLENBQUFvQyxRQUFRLEVBQUN4RSxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRXZDLE9BQ0NQLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3RDekIsT0FBTyxDQUFDM0IsS0FBSyxJQUNib0IsS0FBQSxDQUFBK0IsYUFBQSxDQUFDMUIsTUFBQSxDQUFBOEYsU0FBUztjQUNUNUQsSUFBSSxFQUFDLFNBQVM7Y0FDZE4sT0FBTyxFQUFFcUgsVUFBVTtjQUNuQnRILFNBQVMsRUFBQyx5Q0FBeUM7Y0FDbkRxRixRQUFRLEVBQUVoSixRQUFRO2NBQ2xCNkgsUUFBUTtZQUFBLEdBRVAxRixLQUFLLENBQUMyQixPQUFPLENBQUNxSCxVQUFVLENBRTFCLEVBQ0R4SixLQUFBLENBQUErQixhQUFBLENBQUNoQyxXQUFBLENBQUEyQyxNQUFNO2NBQUNULE9BQU8sRUFBRXNILFVBQVU7Y0FBRXZILFNBQVMsRUFBQyx3Q0FBd0M7Y0FBQ3FGLFFBQVEsRUFBRWhKO1lBQVEsR0FDaEdtQyxLQUFLLENBQUMyQixPQUFPLENBQUNzSCxHQUFHLENBQ1YsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBekosS0FBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUEyQyxXQUFBLEdBQUEzQyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBc00sTUFBQSxHQUFBdE0sT0FBQTtVQVFNLFNBQVV1TSxRQUFRQSxDQUFDO1lBQ3hCQyxhQUFhO1lBQ2JDLFVBQVU7WUFDVlA7VUFBVSxDQUtWO1lBQ0EsTUFBTTtjQUNMOUksS0FBSyxFQUFFO2dCQUFFMkcsYUFBYSxFQUFFM0csS0FBSztnQkFBRXNKLE9BQU87Z0JBQUUzSCxPQUFPLEVBQUU0SDtjQUFZLENBQUU7Y0FDL0R4SjtZQUFPLENBQ1AsR0FBRyxJQUFBTixRQUFBLENBQUFRLGlCQUFpQixHQUFFO1lBRXZCLE1BQU0sQ0FBQ3VKLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdqSyxLQUFLLENBQUNZLFFBQVEsQ0FBUyxFQUFFLENBQUM7WUFDdEQsTUFBTSxDQUFDc0osWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR25LLEtBQUssQ0FBQ1ksUUFBUSxDQUFVLEtBQUssQ0FBQztZQUN0RSxNQUFNd0osY0FBYyxHQUFJMUksS0FBNkMsSUFBVTtjQUM5RXVJLFNBQVMsQ0FBQ3ZJLEtBQUssQ0FBQzJJLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO1lBQzlCLENBQUM7WUFFRCxNQUFNQyxlQUFlLEdBQUcsTUFBQUEsQ0FBQSxLQUEwQjtjQUNqRFgsYUFBYSxDQUFDLElBQUksQ0FBQztjQUVuQixJQUFJO2dCQUNILE1BQU1ySyxLQUFLLEdBQXdCO2tCQUFFTCxJQUFJLEVBQUU4SztnQkFBTSxDQUFFO2dCQUNuRCxJQUFJekosT0FBTyxDQUFDM0IsS0FBSyxFQUFFO2tCQUNsQlcsS0FBSyxDQUFDSCxJQUFJLEdBQUcsQ0FBQ21CLE9BQU8sQ0FBQzNCLEtBQUssQ0FBQ3lGLEdBQUcsQ0FBQzs7Z0JBRWpDLE1BQU05RCxPQUFPLENBQUN0QixhQUFhLENBQUNNLEtBQUssQ0FBQztnQkFDbEMrSixVQUFVLEdBQUUsQ0FBRTtnQkFDZFcsU0FBUyxDQUFDLEVBQUUsQ0FBQztlQUNiLENBQUMsT0FBT08sQ0FBQyxFQUFFO2dCQUNYLElBQUlBLENBQUMsQ0FBQzNELE9BQU8sS0FBSyxZQUFZLEVBQUU7a0JBQy9CNkMsTUFBQSxDQUFBZSxLQUFLLENBQUM3TSxLQUFLLENBQUMyQyxPQUFPLENBQUNtSyxXQUFXLENBQUN2QixNQUFNLENBQUN3QixVQUFVLENBQUM7a0JBQ2xEOztnQkFFRGpCLE1BQUEsQ0FBQWUsS0FBSyxDQUFDN00sS0FBSyxDQUFDMkMsT0FBTyxDQUFDbUssV0FBVyxDQUFDdkIsTUFBTSxDQUFDeUIsYUFBYSxDQUFDO2dCQUNyRHRNLE9BQU8sQ0FBQ1YsS0FBSyxDQUFDNE0sQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1RMLGVBQWUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCUCxhQUFhLENBQUMsS0FBSyxDQUFDOztZQUV0QixDQUFDO1lBRUQsTUFBTXZDLFFBQVEsR0FBRyxDQUFDMkMsTUFBTSxJQUFJSCxVQUFVO1lBRXRDLE9BQ0M3SixLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUEyQixHQUN6Q2hDLEtBQUEsQ0FBQStCLGFBQUE7Y0FDQ0MsU0FBUyxFQUFDLDBCQUEwQjtjQUNwQzZJLFdBQVcsRUFBRWYsT0FBTyxDQUFDZ0IsaUJBQWlCO2NBQ3RDUixLQUFLLEVBQUVOLE1BQU07Y0FDYjNDLFFBQVEsRUFBRXdDLFVBQVUsSUFBSUssWUFBWTtjQUNwQ2EsUUFBUSxFQUFFWDtZQUFjLEVBQ3ZCLEVBQ0ZwSyxLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QixHQUM1Q2hDLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2hDLFdBQUEsQ0FBQTJDLE1BQU07Y0FDTnJFLFFBQVEsRUFBRTZMLFlBQVksSUFBSUwsVUFBVTtjQUNwQ3BGLE9BQU8sRUFBQyxTQUFTO2NBQ2pCeEMsT0FBTyxFQUFFc0ksZUFBZTtjQUN4QmxELFFBQVEsRUFBRUE7WUFBUSxHQUVqQjBDLFlBQVksQ0FBQ3ZILFFBQVEsQ0FDZCxDQUNKLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RUEsSUFBQTFDLEtBQUEsR0FBQTFDLE9BQUE7VUFFQSxJQUFBNEMsS0FBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBQ0EsSUFBQTROLGtCQUFBLEdBQUE1TixPQUFBO1VBQ0EsSUFBQTZOLFlBQUEsR0FBQTdOLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUVBLElBQUE4TixTQUFBLEdBQUE5TixPQUFBO1VBRU0sU0FBVStOLFNBQVNBLENBQUE7WUFDeEIsTUFBTTtjQUNMM0ssS0FBSyxFQUFFO2dCQUFFNEssU0FBUyxFQUFFNUssS0FBSztnQkFBRTJCO2NBQU8sQ0FBRTtjQUNwQzVCO1lBQU8sQ0FDUCxHQUFHLElBQUFOLFFBQUEsQ0FBQVEsaUJBQWlCLEdBQUU7WUFDdkIsTUFBTSxDQUFDb0osVUFBVSxFQUFFRCxhQUFhLENBQUMsR0FBRzVKLEtBQUssQ0FBQ1ksUUFBUSxDQUFVLEtBQUssQ0FBQztZQUNsRSxNQUFNeUssUUFBUSxHQUFHLElBQUFMLGtCQUFBLENBQUFNLGlCQUFpQixHQUFrQjtZQUVwRCxNQUFNO2NBQUUxTTtZQUFLLENBQUUsR0FBRzJCLE9BQU87WUFDekIsTUFBTWdMLE1BQU0sR0FBR0EsQ0FBQSxLQUFLO2NBQ25CaEwsT0FBTyxDQUFDdUIsYUFBYSxHQUFHLElBQUk7Y0FDNUJ2QixPQUFPLENBQUMzQixLQUFLLEdBQUcsSUFBSTtZQUNyQixDQUFDO1lBRUQsT0FDQ29CLEtBQUEsQ0FBQStCLGFBQUE7Y0FDQ0ssR0FBRyxFQUFFaUosUUFBUTtjQUNickosU0FBUyxFQUFFLElBQUFsQyxLQUFBLENBQUEyQyxPQUFJLEVBQUMsK0NBQStDLEVBQUU7Z0JBQUUsYUFBYSxFQUFFb0g7Y0FBVSxDQUFFO1lBQUMsR0FFL0Y3SixLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ2hDLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2tKLFlBQUEsQ0FBQU8sV0FBVztjQUFDNU0sS0FBSyxFQUFFQSxLQUFLO2NBQUVxSCxLQUFLLEVBQUV6RixLQUFLLENBQUN5RixLQUFLO2NBQUVzRixNQUFNLEVBQUVBO1lBQU0sRUFBSSxFQUNqRXZMLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQStCLEdBQzVDLENBQUNwRCxLQUFLLEdBQ05vQixLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFtQixHQUFFeEIsS0FBSyxDQUFDcUssV0FBVyxDQUFPLEdBRTVEN0ssS0FBQSxDQUFBK0IsYUFBQSxDQUFDYyxNQUFBLENBQUF1QixLQUFLO2NBQUNDLEdBQUcsRUFBRXpGLEtBQUssQ0FBQ3lGLEdBQUc7Y0FBRUMsR0FBRyxFQUFFOUQsS0FBSyxDQUFDeUY7WUFBSyxFQUN2QyxDQUNJLEVBRU5qRyxLQUFBLENBQUErQixhQUFBLENBQUNtSixTQUFBLENBQUF2QixRQUFRO2NBQUNDLGFBQWEsRUFBRUEsYUFBYTtjQUFFQyxVQUFVLEVBQUVBO1lBQVUsRUFBSSxFQUNsRTdKLEtBQUEsQ0FBQStCLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQWtCLEdBQUV4QixLQUFLLENBQUNpTCxNQUFNLENBQUssQ0FDN0MsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBekwsS0FBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFzTyxLQUFBLEdBQUF0TyxPQUFBO1VBRU0sU0FBVWtPLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNSyxVQUFVLEdBQUczTCxLQUFLLENBQUN1SSxNQUFNLENBQUksSUFBSSxDQUFDO1lBRXhDdkksS0FBSyxDQUFDZ0ksU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSTJELFVBQVUsQ0FBQ2hELE9BQU8sRUFBRTtnQkFDdkIrQyxLQUFBLENBQUFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLENBQUNoRCxPQUFPLEVBQUU7a0JBQUVtRCxDQUFDLEVBQUUsTUFBTTtrQkFBRWpJLE9BQU8sRUFBRTtnQkFBQyxDQUFFLENBQUM7Z0JBQ3ZENkgsS0FBQSxDQUFBRSxJQUFJLENBQUNHLEVBQUUsQ0FBQ0osVUFBVSxDQUFDaEQsT0FBTyxFQUFFO2tCQUMzQm1ELENBQUMsRUFBRSxDQUFDO2tCQUNKakksT0FBTyxFQUFFLENBQUM7a0JBQ1ZLLFFBQVEsRUFBRSxHQUFHO2tCQUNiQyxJQUFJLEVBQUU7aUJBQ04sQ0FBQzs7Y0FHSCxPQUFPLE1BQUs7Z0JBQ1gsSUFBSXdILFVBQVUsQ0FBQ2hELE9BQU8sRUFBRTtrQkFDdkIrQyxLQUFBLENBQUFFLElBQUksQ0FBQ0ksWUFBWSxDQUFDTCxVQUFVLENBQUNoRCxPQUFPLENBQUM7O2NBRXZDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FBT2dELFVBQVU7VUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBM0wsS0FBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUFpRCxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFRTSxTQUFVNk8sT0FBT0EsQ0FBQztZQUFFbkYsUUFBUTtZQUFFbEk7VUFBSyxDQUE2QztZQUNyRixJQUFJQSxLQUFLLEVBQUVBLEtBQUssRUFBRTtjQUNqQixPQUNDb0IsS0FBQSxDQUFBK0IsYUFBQTtnQkFBR21LLElBQUksRUFBRXROLEtBQUssQ0FBQ0EsS0FBSyxDQUFDdU4sV0FBVztnQkFBRTlCLE1BQU0sRUFBQyxRQUFRO2dCQUFDK0IsR0FBRyxFQUFDO2NBQXFCLEdBQ3pFdEYsUUFBUSxDQUNOOztZQUdOLE9BQU85RyxLQUFBLENBQUErQixhQUFBLENBQUEvQixLQUFBLENBQUErRixRQUFBLFFBQUdlLFFBQVEsQ0FBSTtVQUN2QjtVQUVNLFNBQVUwRSxXQUFXQSxDQUFDO1lBQUU1TSxLQUFLO1lBQUVxSCxLQUFLO1lBQUVzRjtVQUFNLENBQXFCO1lBQ3RFLE1BQU07Y0FBRWhMO1lBQU8sQ0FBRSxHQUFHLElBQUFOLFFBQUEsQ0FBQVEsaUJBQWlCLEdBQUU7WUFDdkM4SyxNQUFNLEdBQUdBLE1BQU0sS0FBSyxNQUFPaEwsT0FBTyxDQUFDOEwsYUFBYSxHQUFHLElBQUssQ0FBQztZQUN6RCxPQUNDck0sS0FBQSxDQUFBK0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDdENoQyxLQUFBLENBQUErQixhQUFBLENBQUMxQixNQUFBLENBQUFpTSxhQUFhO2NBQUMvSixJQUFJLEVBQUMsV0FBVztjQUFDTixPQUFPLEVBQUVzSjtZQUFNLEVBQUksRUFDbkR2TCxLQUFBLENBQUErQixhQUFBLENBQUNrSyxPQUFPO2NBQUNyTixLQUFLLEVBQUVBLEtBQUssRUFBRUE7WUFBSyxHQUMzQm9CLEtBQUEsQ0FBQStCLGFBQUEsYUFBS2tFLEtBQUssQ0FBTSxDQUNQLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQWpHLEtBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBQ0EsSUFBQW1QLE1BQUEsR0FBQW5QLE9BQUE7VUFDQSxJQUFBMkMsV0FBQSxHQUFBM0MsT0FBQTtVQVNNLFNBQVVvUCxZQUFZQSxDQUFDO1lBQUVuSSxHQUFHO1lBQUVDLEdBQUc7WUFBRTFGLEtBQUs7WUFBRVA7VUFBUSxDQUFzQjtZQUM3RSxNQUFNO2NBQ0xtQyxLQUFLLEVBQUU7Z0JBQUUyRyxhQUFhLEVBQUUzRztjQUFLO1lBQUUsQ0FDL0IsR0FBRyxJQUFBUCxRQUFBLENBQUFRLGlCQUFpQixHQUFFO1lBRXZCLE9BQ0NULEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDaEMsS0FBQSxDQUFBK0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0IsR0FDNUNxQyxHQUFHLElBQUlyRSxLQUFBLENBQUErQixhQUFBLENBQUNjLE1BQUEsQ0FBQXVCLEtBQUs7Y0FBQ0MsR0FBRyxFQUFFQSxHQUFHO2NBQUVDLEdBQUcsRUFBRUEsR0FBRztjQUFFdEMsU0FBUyxFQUFDO1lBQXVCLEVBQUcsRUFDdEUzRCxRQUFRLElBQ1IyQixLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFvQixHQUNsQ2hDLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2hDLFdBQUEsQ0FBQTBNLE9BQU87Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRUMsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUVwQyxDQUNJLEVBQ0wvTixLQUFLLElBQ0xvQixLQUFBLENBQUErQixhQUFBLGNBQ0MvQixLQUFBLENBQUErQixhQUFBLGFBQUtuRCxLQUFLLENBQUNxSCxLQUFLLENBQU0sRUFDckJySCxLQUFLLENBQUNBLEtBQUssSUFDWG9CLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ3dLLE1BQUEsQ0FBQUssS0FBSztjQUFDQyxJQUFJLEVBQUM7WUFBTSxHQUNqQjdNLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2hDLFdBQUEsQ0FBQStNLFdBQVcsUUFBRXRNLEtBQUssQ0FBQ3VNLFVBQVUsQ0FBZSxFQUM3Qy9NLEtBQUEsQ0FBQStCLGFBQUE7Y0FBR21LLElBQUksRUFBRXROLEtBQUssQ0FBQ0EsS0FBSyxDQUFDdU4sV0FBVztjQUFFOUIsTUFBTSxFQUFDLFFBQVE7Y0FBQytCLEdBQUcsRUFBQztZQUFxQixHQUN6RTVMLEtBQUssQ0FBQ3dNLGVBQWUsQ0FDbkIsQ0FFTCxDQUVGLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQWhOLEtBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBNkMsUUFBQSxHQUFBN0MsT0FBQTtVQUNBLElBQUE2TixZQUFBLEdBQUE3TixPQUFBO1VBQ0EsSUFBQTZQLGFBQUEsR0FBQTdQLE9BQUE7VUFDQSxJQUFBOFAsY0FBQSxHQUFBOVAsT0FBQTtVQUNBLElBQUE4TixTQUFBLEdBQUE5TixPQUFBO1VBQ0EsSUFBQTROLGtCQUFBLEdBQUE1TixPQUFBO1VBQ0EsSUFBQTBDLEtBQUEsR0FBQTFDLE9BQUE7VUFFTSxTQUFVK1AsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQ0wzTSxLQUFLLEVBQUU7Z0JBQUUyRyxhQUFhLEVBQUUzRztjQUFLLENBQUU7Y0FDL0JELE9BQU87Y0FDUDBHLE9BQU87Y0FDUEQ7WUFBTyxDQUNQLEdBQUcsSUFBQS9HLFFBQUEsQ0FBQVEsaUJBQWlCLEdBQUU7WUFDdkIsTUFBTSxDQUFDb0osVUFBVSxFQUFFRCxhQUFhLENBQUMsR0FBRzVKLEtBQUssQ0FBQ1ksUUFBUSxDQUFVLEtBQUssQ0FBQztZQUNsRSxNQUFNLENBQUN3TSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHck4sS0FBSyxDQUFDWSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQzlELE1BQU15SyxRQUFRLEdBQUcsSUFBQUwsa0JBQUEsQ0FBQU0saUJBQWlCLEdBQWtCO1lBQ3BELE1BQU1oQyxVQUFVLEdBQUdBLENBQUEsS0FBWStELFdBQVcsQ0FBQyxDQUFDRCxRQUFRLENBQUM7WUFDckQsTUFBTTtjQUFFeE87WUFBSyxDQUFFLEdBQUcyQixPQUFPO1lBQ3pCLElBQUk4RCxHQUFHLEdBQUc5RCxPQUFPLENBQUMzQixLQUFLLEVBQUUwTyxVQUFVLEdBQUcvTSxPQUFPLENBQUMzQixLQUFLLEVBQUUwTyxVQUFVLEdBQUcvTSxPQUFPLENBQUMzQixLQUFLLEVBQUV5RixHQUFHO1lBQ3BGQSxHQUFHLEdBQUd6RixLQUFLLEVBQUVjLElBQUksSUFBSTJFLEdBQUc7WUFFeEIsTUFBTWtGLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsSUFBSXpFLEtBQUssR0FBR3ZFLE9BQU8sQ0FBQzNCLEtBQUs7Y0FDekJnTCxhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLElBQUksQ0FBQ3JKLE9BQU8sQ0FBQzNCLEtBQUssRUFBRTtnQkFDbkJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDdkI7O2NBR0R5SSxPQUFPLEVBQUVJLE9BQU8sQ0FBQ3RDLEtBQUssQ0FBQ1QsR0FBRyxDQUFDO2NBQzNCdUYsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNwQjNDLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxPQUNDakgsS0FBQSxDQUFBK0IsYUFBQTtjQUFLSyxHQUFHLEVBQUVpSixRQUFRO2NBQUVySixTQUFTLEVBQUUsSUFBQWxDLEtBQUEsQ0FBQTJDLE9BQUksRUFBQywrQkFBK0IsRUFBRTtnQkFBRSxhQUFhLEVBQUVvSDtjQUFVLENBQUU7WUFBQyxHQUNsRzdKLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDaEMsS0FBQSxDQUFBK0IsYUFBQSxDQUFDa0osWUFBQSxDQUFBTyxXQUFXO2NBQUM1TSxLQUFLLEVBQUVBLEtBQUs7Y0FBRXFILEtBQUssRUFBRXpGLEtBQUssQ0FBQ3lGLEtBQUs7Y0FBRXNGLE1BQU0sRUFBRUEsQ0FBQSxLQUFPaEwsT0FBTyxDQUFDM0IsS0FBSyxHQUFHO1lBQUssRUFBSSxFQUN2Rm9CLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2tMLGFBQUEsQ0FBQVQsWUFBWTtjQUFDbkksR0FBRyxFQUFFQSxHQUFHO2NBQUVDLEdBQUcsRUFBRTFGLEtBQUssRUFBRXFILEtBQUssSUFBSXpGLEtBQUssQ0FBQ3lGLEtBQUs7Y0FBRXJILEtBQUssRUFBRUEsS0FBSztjQUFFUCxRQUFRLEVBQUV3TDtZQUFVLEVBQUksRUFDL0YsQ0FBQ3VELFFBQVEsR0FDVHBOLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ21MLGNBQUEsQ0FBQTdELGFBQWE7Y0FBQ0UsVUFBVSxFQUFFQSxVQUFVO2NBQUVELFVBQVUsRUFBRUE7WUFBVSxFQUFJLEdBRWpFdEosS0FBQSxDQUFBK0IsYUFBQSxDQUFDbUosU0FBQSxDQUFBdkIsUUFBUTtjQUFDQyxhQUFhLEVBQUVBLGFBQWE7Y0FBRUMsVUFBVSxFQUFFQSxVQUFVO2NBQUVQLFVBQVUsRUFBRUE7WUFBVSxFQUN0RixDQUNJLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREEsSUFBQXhKLEtBQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBMkMsV0FBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUE0QyxLQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBNE4sa0JBQUEsR0FBQTVOLE9BQUE7VUFDQSxJQUFBNk4sWUFBQSxHQUFBN04sT0FBQTtVQUNBLElBQUE2UCxhQUFBLEdBQUE3UCxPQUFBO1VBQ0EsSUFBQXNNLE1BQUEsR0FBQXRNLE9BQUE7VUFDTSxTQUFVbVEsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQ0wvTSxLQUFLLEVBQUU7Z0JBQUUyRyxhQUFhLEVBQUUzRyxLQUFLO2dCQUFFMkI7Y0FBTyxDQUFFO2NBQ3hDNUI7WUFBTyxDQUNQLEdBQUcsSUFBQU4sUUFBQSxDQUFBUSxpQkFBaUIsR0FBRTtZQUN2QixNQUFNLENBQUNvSixVQUFVLEVBQUVELGFBQWEsQ0FBQyxHQUFHNUosS0FBSyxDQUFDWSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQ2xFLE1BQU15SyxRQUFRLEdBQUcsSUFBQUwsa0JBQUEsQ0FBQU0saUJBQWlCLEdBQWtCO1lBQ3BELE1BQU07Y0FBRWUsYUFBYSxFQUFFek47WUFBSyxDQUFFLEdBQUcyQixPQUFPO1lBQ3hDLE1BQU04RCxHQUFHLEdBQUd6RixLQUFLLEVBQUVjLElBQUk7WUFFdkIsTUFBTThOLGFBQWEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDaEM1RCxhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLElBQUksQ0FBQ3JKLE9BQU8sQ0FBQzhMLGFBQWEsRUFBRTtnQkFDM0IvTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCOztjQUdELElBQUl1RyxLQUFLLEdBQUd2RSxPQUFPLENBQUMzQixLQUFLO2NBRXpCa0csS0FBSyxHQUFHLE1BQU12RSxPQUFPLENBQUNqQixNQUFNLENBQUNpQixPQUFPLENBQUM4TCxhQUFhLENBQUM7Y0FDbkQ7Y0FDQTlMLE9BQU8sQ0FBQzhMLGFBQWEsR0FBRyxJQUFJO2NBQzVCekMsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNwQkYsTUFBQSxDQUFBZSxLQUFLLENBQUNnRCxPQUFPLENBQUMsNkJBQTZCLENBQUM7WUFDN0MsQ0FBQztZQUVELE9BQ0N6TixLQUFBLENBQUErQixhQUFBO2NBQUtLLEdBQUcsRUFBRWlKLFFBQVE7Y0FBRXJKLFNBQVMsRUFBRSxJQUFBbEMsS0FBQSxDQUFBMkMsT0FBSSxFQUFDLCtCQUErQixFQUFFO2dCQUFFLGFBQWEsRUFBRW9IO2NBQVUsQ0FBRTtZQUFDLEdBQ2xHN0osS0FBQSxDQUFBK0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENoQyxLQUFBLENBQUErQixhQUFBLENBQUNrSixZQUFBLENBQUFPLFdBQVc7Y0FBQzVNLEtBQUssRUFBRUEsS0FBSztjQUFFcUgsS0FBSyxFQUFFekYsS0FBSyxDQUFDeUYsS0FBSztjQUFFc0YsTUFBTSxFQUFFQSxDQUFBLEtBQU9oTCxPQUFPLENBQUM4TCxhQUFhLEdBQUc7WUFBSyxFQUFJLEVBQy9Gck0sS0FBQSxDQUFBK0IsYUFBQSxDQUFDa0wsYUFBQSxDQUFBVCxZQUFZO2NBQUNuSSxHQUFHLEVBQUVBLEdBQUc7Y0FBRUMsR0FBRyxFQUFFMUYsS0FBSyxFQUFFcUgsS0FBSyxJQUFJekYsS0FBSyxDQUFDeUYsS0FBSztjQUFFckgsS0FBSyxFQUFFQSxLQUFLO2NBQUVQLFFBQVEsRUFBRXdMO1lBQVUsRUFBSSxFQUNoRzdKLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDaEMsS0FBQSxDQUFBK0IsYUFBQSxDQUFDaEMsV0FBQSxDQUFBMkMsTUFBTTtjQUNOVCxPQUFPLEVBQUV1TCxhQUFhO2NBQ3RCeEwsU0FBUyxFQUFDLHdDQUF3QztjQUNsRHFGLFFBQVEsRUFBRXdDO1lBQVUsR0FFbkIxSCxPQUFPLENBQUN1TCxNQUFNLENBQ1AsQ0FDSixDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQTVOLEtBQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBMkMsV0FBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUE0QyxLQUFBLEdBQUE1QyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBNE4sa0JBQUEsR0FBQTVOLE9BQUE7VUFDQSxJQUFBNk4sWUFBQSxHQUFBN04sT0FBQTtVQUNBLElBQUE2UCxhQUFBLEdBQUE3UCxPQUFBO1VBQ0EsSUFBQXNNLE1BQUEsR0FBQXRNLE9BQUE7VUFFTSxTQUFVdVEsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQ0xuTixLQUFLLEVBQUU7Z0JBQUUyRyxhQUFhLEVBQUUzRyxLQUFLO2dCQUFFMkI7Y0FBTyxDQUFFO2NBQ3hDNUI7WUFBTyxDQUNQLEdBQUcsSUFBQU4sUUFBQSxDQUFBUSxpQkFBaUIsR0FBRTtZQUN2QixNQUFNLENBQUNvSixVQUFVLEVBQUVELGFBQWEsQ0FBQyxHQUFHNUosS0FBSyxDQUFDWSxRQUFRLENBQVUsS0FBSyxDQUFDO1lBQ2xFLE1BQU15SyxRQUFRLEdBQUcsSUFBQUwsa0JBQUEsQ0FBQU0saUJBQWlCLEdBQWtCO1lBQ3BELE1BQU07Y0FBRTlKLGFBQWEsRUFBRTVDO1lBQUssQ0FBRSxHQUFHMkIsT0FBTztZQUN4QyxNQUFNOEQsR0FBRyxHQUFHekYsS0FBSyxFQUFFME8sVUFBVTtZQUU3QixNQUFNRSxhQUFhLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ2hDNUQsYUFBYSxDQUFDLElBQUksQ0FBQztjQUNuQixJQUFJLENBQUNySixPQUFPLENBQUNpQixhQUFhLEVBQUU7Z0JBQzNCbEQsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUN2Qjs7Y0FHRCxJQUFJdUcsS0FBSyxHQUFHdkUsT0FBTyxDQUFDaUIsYUFBYTtjQUVqQ3NELEtBQUssR0FBRyxNQUFNdkUsT0FBTyxDQUFDakIsTUFBTSxDQUFDaUIsT0FBTyxDQUFDaUIsYUFBYSxDQUFDO2NBQ25EO2NBQ0FqQixPQUFPLENBQUNpQixhQUFhLEdBQUcsSUFBSTtjQUM1Qm9JLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FDcEJGLE1BQUEsQ0FBQWUsS0FBSyxDQUFDZ0QsT0FBTyxDQUFDLDZCQUE2QixDQUFDO1lBQzdDLENBQUM7WUFFRCxPQUNDek4sS0FBQSxDQUFBK0IsYUFBQTtjQUFLSyxHQUFHLEVBQUVpSixRQUFRO2NBQUVySixTQUFTLEVBQUUsSUFBQWxDLEtBQUEsQ0FBQTJDLE9BQUksRUFBQywrQkFBK0IsRUFBRTtnQkFBRSxhQUFhLEVBQUVvSDtjQUFVLENBQUU7WUFBQyxHQUNsRzdKLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDaEMsS0FBQSxDQUFBK0IsYUFBQSxDQUFDa0osWUFBQSxDQUFBTyxXQUFXO2NBQUM1TSxLQUFLLEVBQUVBLEtBQUs7Y0FBRXFILEtBQUssRUFBRXpGLEtBQUssQ0FBQ3lGLEtBQUs7Y0FBRXNGLE1BQU0sRUFBRUEsQ0FBQSxLQUFPaEwsT0FBTyxDQUFDaUIsYUFBYSxHQUFHO1lBQUssRUFBSSxFQUMvRnhCLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2tMLGFBQUEsQ0FBQVQsWUFBWTtjQUFDbkksR0FBRyxFQUFFQSxHQUFHO2NBQUVDLEdBQUcsRUFBRTFGLEtBQUssRUFBRXFILEtBQUssSUFBSXpGLEtBQUssQ0FBQ3lGLEtBQUs7Y0FBRXJILEtBQUssRUFBRUEsS0FBSztjQUFFUCxRQUFRLEVBQUV3TDtZQUFVLEVBQUksRUFDaEc3SixLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q2hDLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2hDLFdBQUEsQ0FBQTJDLE1BQU07Y0FDTlQsT0FBTyxFQUFFdUwsYUFBYTtjQUN0QnhMLFNBQVMsRUFBQyx3Q0FBd0M7Y0FDbERxRixRQUFRLEVBQUV3QztZQUFVLEdBRW5CMUgsT0FBTyxDQUFDdUwsTUFBTSxDQUNQLENBQ0osQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcERBLElBQUFyTixNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQXdRLEdBQUEsR0FBQXhRLE9BQUE7VUFFQSxJQUFBMkMsV0FBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUF5USxNQUFBLEdBQUF6USxPQUFBO1VBQ0EsSUFBQTRDLEtBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMFEsUUFBQSxHQUFBMVEsT0FBQTtVQUNBLElBQUEyUSxPQUFBLEdBQUEzUSxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFDQSxJQUFBNFEsZ0JBQUEsR0FBQTVRLE9BQUE7VUFDQSxJQUFBNlEsT0FBQSxHQUFBN1EsT0FBQTtVQUNBLElBQUE4USxhQUFBLEdBQUE5USxPQUFBO1VBRUEsSUFBQStRLFNBQUEsR0FBQS9RLE9BQUE7VUFDQSxJQUFBZ1IsU0FBQSxHQUFBaFIsT0FBQTtVQUNBLElBQUFpUixVQUFBLEdBQUFqUixPQUFBO1VBU087VUFBVSxTQUFVa1IsWUFBWUEsQ0FBQztZQUFFckgsT0FBTztZQUFFRCxPQUFPO1lBQUVqSjtVQUFRLENBQXNCO1lBQ3pGLE1BQU07Y0FBRTJKLEtBQUs7Y0FBRUU7WUFBSyxDQUFFLEdBQUcsSUFBQW9HLGdCQUFBLENBQUF2RyxlQUFlLEVBQUMxSixRQUFRLENBQUM7WUFDbEQsSUFBSSxDQUFDMkosS0FBSyxJQUFJLENBQUNFLEtBQUssRUFBRTtjQUNyQixPQUNDNUgsS0FBQSxDQUFBK0IsYUFBQSxDQUFDOEwsTUFBQSxDQUFBVSxLQUFLO2dCQUFDQyxJQUFJO2NBQUEsR0FDVnhPLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQzZMLEdBQUEsQ0FBQWEsVUFBVTtnQkFBQ3BRLFFBQVEsRUFBRTtjQUFJLEVBQUksQ0FDdkI7O1lBSVYsTUFBTW1DLEtBQUssR0FBR29ILEtBQUssQ0FBQ3BILEtBQUssQ0FBQ0QsT0FBTztZQUNqQyxNQUFNbU8sV0FBVyxHQUFHQSxDQUFBLEtBQVc7Y0FDOUIxSCxPQUFPLEVBQUVJLE9BQU8sRUFBRTtjQUNsQlEsS0FBSyxFQUFFL0ksS0FBSyxFQUFFO2NBQ2RvSSxPQUFPLEVBQUU7WUFDVixDQUFDO1lBRUQsTUFBTXFELEtBQUssR0FBRztjQUNiOUosS0FBSztjQUNMRCxPQUFPLEVBQUVxSCxLQUFLO2NBQ2R2SixRQUFRLEVBQUV1SixLQUFLLENBQUN2SixRQUFRO2NBQ3hCNEksT0FBTztjQUNQRCxPQUFPO2NBQ1AySCxXQUFXLEVBQUUvRyxLQUFLLENBQUM3SixRQUFRLENBQUN1RixTQUFTLEVBQUVxQixNQUFNLEVBQUVwRCxNQUFNLElBQUksQ0FBQztjQUMxRGdJLFVBQVUsRUFBRSxNQUFBQSxDQUFBLEtBQTBCO2dCQUNyQyxJQUFJekUsS0FBSyxHQUFHOEMsS0FBSyxDQUFDaEosS0FBSztnQkFDdkIsSUFBSSxDQUFDZ0osS0FBSyxDQUFDaEosS0FBSyxFQUFFO2tCQUNqQk4sT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO2tCQUN2Qjs7Z0JBR0QsSUFBSXFKLEtBQUssQ0FBQ2hKLEtBQUssQ0FBQ2QsV0FBVyxDQUFDMEIsSUFBSSxLQUFLLE9BQU8sRUFBRTtrQkFDN0NzRixLQUFLLEdBQUcsTUFBTThDLEtBQUssQ0FBQ3RJLE1BQU0sQ0FBQ3NJLEtBQUssQ0FBQ2hKLEtBQUssQ0FBQzs7Z0JBR3hDb0ksT0FBTyxFQUFFSSxPQUFPLENBQUN0QyxLQUFLLENBQUNULEdBQUcsQ0FBQztnQkFDM0I0QyxPQUFPLEVBQUU7Y0FDVjthQUNBO1lBRUQsTUFBTTJILEtBQUssR0FBRztjQUNiM00sT0FBTyxFQUFFQSxDQUFBLEtBQUs7Z0JBQ2IsSUFBSTJGLEtBQUssQ0FBQzNKLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQzdCMkosS0FBSyxDQUFDM0osS0FBSyxHQUFHLE9BQU87Y0FDdEIsQ0FBQztjQUNEb0osUUFBUSxFQUFFTyxLQUFLLENBQUMzSixLQUFLLEtBQUssT0FBTztjQUNqQ3NFLElBQUksRUFBRXFGLEtBQUssQ0FBQzNKLEtBQUssS0FBSyxPQUFPLEdBQUcsU0FBUyxHQUFHO2FBQzVDO1lBRUQsT0FDQytCLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQzlCLFFBQUEsQ0FBQW1GLGNBQWMsQ0FBQ3lKLFFBQVE7Y0FBQ3ZFLEtBQUssRUFBRUE7WUFBSyxHQUNwQ3RLLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQzhMLE1BQUEsQ0FBQVUsS0FBSztjQUFDQyxJQUFJO2NBQUN4TSxTQUFTLEVBQUMscUJBQXFCO2NBQUNpRixPQUFPLEVBQUV5SCxXQUFXO2NBQUVJLGFBQWEsRUFBRTtZQUFLLEdBQ3JGOU8sS0FBQSxDQUFBK0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUIsR0FDckNoQyxLQUFBLENBQUErQixhQUFBLENBQUMxQixNQUFBLENBQUFpTSxhQUFhO2NBQUEsR0FBS3NDO1lBQUssRUFBSSxFQUM1QjVPLEtBQUEsQ0FBQStCLGFBQUEsYUFBS3ZCLEtBQUssQ0FBQ3VPLE1BQU0sQ0FBQzlJLEtBQUssQ0FBTSxFQUM3QmpHLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQytMLFFBQUEsQ0FBQXhOLE9BQU8sT0FBRyxDQUNOLEVBQ05OLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW9CLEdBRWxDaEMsS0FBQSxDQUFBK0IsYUFBQSxDQUFDaEMsV0FBQSxDQUFBaVAsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVySCxLQUFLLENBQUMzSixLQUFLO2NBQ3RCa0QsT0FBTyxFQUFFO2dCQUNSNkUsS0FBSyxFQUFFaEcsS0FBQSxDQUFBK0IsYUFBQSxDQUFDZ00sT0FBQSxDQUFBckosTUFBTSxPQUFHO2dCQUNqQnhHLE1BQU0sRUFBRThCLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ2tNLE9BQUEsQ0FBQWlCLFFBQVE7O1lBQ2pCLEVBQ0EsRUFDRmxQLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQzZMLEdBQUEsQ0FBQXVCLGdCQUFnQjtjQUFDOVEsUUFBUSxFQUFFdUosS0FBSyxDQUFDdko7WUFBUSxFQUFJLENBQ3pDLEVBQ0x1SixLQUFLLENBQUNoSixLQUFLLElBQUksQ0FBQ2dKLEtBQUssQ0FBQzlGLGFBQWEsSUFBSTlCLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ21NLGFBQUEsQ0FBQWYsYUFBYSxPQUFHLEVBQ3hEdkYsS0FBSyxDQUFDeUUsYUFBYSxJQUFJck0sS0FBQSxDQUFBK0IsYUFBQSxDQUFDb00sU0FBQSxDQUFBWixhQUFhLE9BQUcsRUFDeEMzRixLQUFLLENBQUNwRyxhQUFhLElBQUl4QixLQUFBLENBQUErQixhQUFBLENBQUNxTSxTQUFBLENBQUFULGFBQWEsT0FBRyxFQUN4Qy9GLEtBQUssQ0FBQzlGLGFBQWEsSUFBSTlCLEtBQUEsQ0FBQStCLGFBQUEsQ0FBQ3NNLFVBQUEsQ0FBQWxELFNBQVMsT0FBRyxDQUM5QixDQUNpQjtVQUU1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuR0EsSUFBQW5MLEtBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBaUQsTUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFnUyxLQUFBLEdBQUFoUyxPQUFBO1VBQ0EsSUFBQTZDLFFBQUEsR0FBQTdDLE9BQUE7VUFHQSxJQUFBOEMsWUFBQSxHQUFBOUMsT0FBQTtVQUlNLFNBQVVpUyxTQUFTQSxDQUFBO1lBQ3hCLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR3ZQLEtBQUssQ0FBQ1ksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN4RCxNQUFNO2NBQUVKLEtBQUs7Y0FBRUQsT0FBTztjQUFFbEM7WUFBUSxDQUFFLEdBQUcsSUFBQTRCLFFBQUEsQ0FBQVEsaUJBQWlCLEdBQUU7WUFFeEQsTUFBTStPLFlBQVksR0FBSTlOLEtBQXNCLElBQVU7Y0FDckRBLEtBQUssQ0FBQ3lCLGNBQWMsRUFBRTtjQUN0QjVDLE9BQU8sQ0FBQ3JDLE1BQU0sQ0FBQ29SLFdBQVcsQ0FBQztZQUM1QixDQUFDO1lBQ0QsTUFBTTtjQUFFdk87WUFBVSxDQUFFLEdBQUcsSUFBQWIsWUFBQSxDQUFBYyxXQUFXLEVBQWE7Y0FDOUNDLE1BQU0sRUFBRSxTQUFTO2NBQ2pCQyxVQUFVLEVBQUUsQ0FBQztnQkFBRTFCLElBQUksRUFBRSxPQUFPO2dCQUFFMkIsT0FBTyxFQUFFO2tCQUFFQyxPQUFPLEVBQUU7Z0JBQUM7Y0FBRSxDQUFFLENBQUM7Y0FDeERDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQztjQUNyQkMsTUFBTSxFQUFHbkMsS0FBbUIsSUFBSTtnQkFDL0IsSUFBSUEsS0FBSyxDQUFDb0MsTUFBTSxHQUFHLENBQUMsRUFBRTtrQkFDckJoQixPQUFPLENBQUM1QixXQUFXLENBQUNRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FFL0I7YUFDQSxDQUFDO1lBQ0YsTUFBTXNRLGtCQUFrQixHQUFJL04sS0FBMEMsSUFBVTtjQUMvRSxJQUFJLENBQUNyRCxRQUFRLEVBQUU7Z0JBQ2RrUixjQUFjLENBQUM3TixLQUFLLENBQUMySSxNQUFNLENBQUNDLEtBQUssQ0FBQzs7WUFFcEMsQ0FBQztZQUVELE9BQ0N0SyxLQUFBLENBQUErQixhQUFBO2NBQU0yTixRQUFRLEVBQUVGLFlBQVk7Y0FBRXhOLFNBQVMsRUFBQztZQUE0QixHQUNuRWhDLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDaEMsS0FBQSxDQUFBK0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBc0IsR0FDcENoQyxLQUFBLENBQUErQixhQUFBLENBQUNxTixLQUFBLENBQUFPLEtBQUs7Y0FDTDlDLElBQUksRUFBQyxNQUFNO2NBQ1h2QyxLQUFLLEVBQUVnRixXQUFXO2NBQ2xCdE4sU0FBUyxFQUFDLGNBQWM7Y0FDeEIrSSxRQUFRLEVBQUUwRSxrQkFBa0I7Y0FDNUI1RSxXQUFXLEVBQUVySyxLQUFLLENBQUN0QyxNQUFNLENBQUMyTSxXQUFXO2NBQ3JDeEQsUUFBUSxFQUFFaEosUUFBUTtjQUFBLGNBQ05tQyxLQUFLLENBQUN0QyxNQUFNLENBQUMyTTtZQUFXLEVBQ25DLEVBQ0Y3SyxLQUFBLENBQUErQixhQUFBLENBQUMxQixNQUFBLENBQUFtRSxVQUFVO2NBQUNqQyxJQUFJLEVBQUMsUUFBUTtjQUFDa0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ3hDLE9BQU8sRUFBRXVOLFlBQVk7Y0FBRW5JLFFBQVEsRUFBRWhKO1lBQVEsRUFBSSxDQUNwRixDQUNELEVBQ0xrQyxPQUFPLENBQUMzQyxLQUFLLElBQUlvQyxLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQUV6QixPQUFPLENBQUMzQyxLQUFLLENBQU8sQ0FDaEU7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQWdTLEtBQUEsR0FBQXhTLE9BQUE7VUFDQSxJQUFBNEMsS0FBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBQ0EsSUFBQXlTLEtBQUEsR0FBQXpTLE9BQUE7VUFDQSxJQUFBd1EsR0FBQSxHQUFBeFEsT0FBQTtVQUNBLElBQUEwUyxJQUFBLEdBQUExUyxPQUFBO1VBT00sU0FBVThSLFFBQVFBLENBQUM7WUFBRTNGLFVBQVU7WUFBRXdHLFdBQVc7WUFBRUM7VUFBWSxDQUFpQjtZQUNoRixNQUFNO2NBQUV4UCxLQUFLO2NBQUVELE9BQU87Y0FBRWxDO1lBQVEsQ0FBRSxHQUFHLElBQUE0QixRQUFBLENBQUFRLGlCQUFpQixHQUFFO1lBRXhELE9BQ0NULEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlDLEdBQy9DaEMsS0FBQSxDQUFBK0IsYUFBQSxDQUFDK04sSUFBQSxDQUFBVCxTQUFTLE9BQUcsRUFFWmhSLFFBQVEsR0FDUjJCLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDaEMsS0FBQSxDQUFBK0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBUyxFQUFHLEVBQzNCaEMsS0FBQSxDQUFBK0IsYUFBQSxZQUFJdkIsS0FBSyxDQUFDeVAsT0FBTyxDQUFDcEosT0FBTyxDQUFLLENBQ3pCLEdBQ0h0RyxPQUFPLENBQUM5QyxPQUFPLENBQUM4RCxNQUFNLEdBQUcsQ0FBQyxHQUM3QnZCLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFFLDBCQUEwQnpCLE9BQU8sQ0FBQzNCLEtBQUssR0FBRyxjQUFjLEdBQUcsRUFBRTtZQUFFLEdBQzlFb0IsS0FBQSxDQUFBK0IsYUFBQSxDQUFDNk4sS0FBQSxDQUFBTSxJQUFJO2NBQUN2UyxLQUFLLEVBQUU0QyxPQUFPLENBQUM5QyxPQUFPO2NBQUUwUyxPQUFPLEVBQUVOLEtBQUEsQ0FBQTlNLElBQUk7Y0FBRXFOLEVBQUUsRUFBQyxLQUFLO2NBQUNwTyxTQUFTLEVBQUM7WUFBYyxFQUFHLENBQzVFLEdBRU5oQyxLQUFBLENBQUErQixhQUFBLENBQUM2TCxHQUFBLENBQUF5QyxTQUFTO2NBQUNuUixJQUFJLEVBQUVzQixLQUFLLENBQUN0QyxNQUFNLENBQUM4SCxLQUFLLENBQUNDLEtBQUs7Y0FBRTFCLFdBQVcsRUFBRS9ELEtBQUssQ0FBQ3RDLE1BQU0sQ0FBQzhILEtBQUssQ0FBQzlHLElBQUk7Y0FBRXFELElBQUksRUFBQztZQUFNLEVBQzVGLENBR0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQXZDLEtBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBMEMsS0FBQSxHQUFBMUMsT0FBQTtVQUVBLElBQUE2QyxRQUFBLEdBQUE3QyxPQUFBO1VBTU0sU0FBVTJGLElBQUlBLENBQUM7WUFBRUM7VUFBSSxDQUFjO1lBQ3hDLE1BQU07Y0FBRXpDLE9BQU87Y0FBRWxDO1lBQVEsQ0FBRSxHQUFHLElBQUE0QixRQUFBLENBQUFRLGlCQUFpQixHQUFFO1lBQ2pELE1BQU02UCxRQUFRLEdBQUcvUCxPQUFPLENBQUMzQixLQUFLLEVBQUVKLEVBQUUsS0FBS3dFLElBQUksQ0FBQ3hFLEVBQUU7WUFFOUMsTUFBTXlELE9BQU8sR0FBR0EsQ0FBQSxLQUFXO2NBQzFCLElBQUk1RCxRQUFRLEVBQUU7Y0FDZCxJQUFJaVMsUUFBUSxFQUFFO2dCQUNiL1AsT0FBTyxDQUFDOEwsYUFBYSxHQUFHLElBQUk7ZUFDNUIsTUFBTTtnQkFDTjlMLE9BQU8sQ0FBQzhMLGFBQWEsR0FBR3JKLElBQUk7O1lBRTlCLENBQUM7WUFFRCxNQUFNaEIsU0FBUyxHQUFHLElBQUFsQyxLQUFBLENBQUF5USxJQUFJLEVBQUMsb0JBQW9CLEVBQUU7Y0FDNUMsYUFBYSxFQUFFRCxRQUFRO2NBQ3ZCLGFBQWEsRUFBRWpTO2FBQ2YsQ0FBQztZQUVGLE9BQ0MyQixLQUFBLENBQUErQixhQUFBO2NBQ0NDLFNBQVMsRUFBRUEsU0FBUztjQUNwQkMsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCdU8sSUFBSSxFQUFDLFFBQVE7Y0FDYkMsUUFBUSxFQUFFcFMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7Y0FBQSxjQUNmLGVBQWUyRSxJQUFJLENBQUNpRCxLQUFLO1lBQUUsR0FFdkNqRyxLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUMzQ2hDLEtBQUEsQ0FBQStCLGFBQUE7Y0FDQ3NDLEdBQUcsRUFBRXJCLElBQUksQ0FBQ3BFLEtBQUssQ0FBQzhSLGFBQWE7Y0FDN0JwTSxHQUFHLEVBQUV0QixJQUFJLENBQUNpRCxLQUFLO2NBQ2YwSyxLQUFLLEVBQUU7Z0JBQUVqTCxNQUFNLEVBQUUxQyxJQUFJLENBQUNwRSxLQUFLLENBQUNnUyxlQUFlLEdBQUcsR0FBRztnQkFBRW5MLEtBQUssRUFBRXpDLElBQUksQ0FBQ3BFLEtBQUssQ0FBQ2lTLGNBQWMsR0FBRztjQUFHO1lBQUUsRUFDMUYsQ0FDRyxFQUVON1EsS0FBQSxDQUFBK0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUIsR0FDckNoQyxLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFxQixHQUFFZ0IsSUFBSSxDQUFDaUQsS0FBSyxDQUFPLENBQ2xELEVBRUxxSyxRQUFRLElBQ1J0USxLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQyxHQUNoRGhDLEtBQUEsQ0FBQStCLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQU0sWUFBUyxDQUVoQyxDQUNJO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/images", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/drafts", "@aimpact/media-manager@1.0.0/uploader", "clsx@2.1.1", "pragmate-ui@1.0.8/components", "react@18.3.1", "react-icons@5.5.0/fa", "react-icons@5.5.0/fi", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/image", "@beyond-js/kernel@0.1.14/core", "pragmate-ui@1.0.8/toast", "gsap@3.13.0", "pragmate-ui@1.0.8/alert", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/list", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
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
    }, function (_gsap2) {
      dependency_18 = _gsap2;
    }, function (_pragmateUi108Alert) {
      dependency_19 = _pragmateUi108Alert;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_20 = _aimpactAilearnApp070ComponentsUi;
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/ailearn-sdk/images', dependency_2], ['@aimpact/ailearn-app/stores/base', dependency_3], ['@aimpact/ailearn-sdk/entities/drafts', dependency_4], ['@aimpact/media-manager/uploader', dependency_5], ['clsx', dependency_6], ['pragmate-ui/components', dependency_7], ['react', dependency_8], ['react-icons/fa', dependency_9], ['react-icons/fi', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/image', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/toast', dependency_17], ['gsap', dependency_18], ['pragmate-ui/alert', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['pragmate-ui/modal', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/list', dependency_23], ['@beyond-js/kernel/styles', dependency_24]]);
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
        hash: 3882173403,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assets = Assets;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _framerMotion = require("framer-motion");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var React = require("react");
          var _context = require("../context");
          var _emptyState = require("../empty-state");
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
          function Assets() {
            const {
              gallery
            } = (0, _context.useGalleryContext)();
            const [assets, setAssets] = React.useState(gallery.activity.materials?.assets?.items || []);
            const onDelete = item => {
              setAssets(assets.filter(asset => asset.id !== item.id));
            };
            (0, _hooks.useStore)(gallery.activity.materials, ['change'], () => {
              setAssets(gallery.activity.materials?.assets?.items || []);
            });
            if (!assets.length) return React.createElement(_emptyState.EmptyState, null);
            return React.createElement("div", {
              className: "gallery-assets-container"
            }, React.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, React.createElement("ul", {
              className: "assets-container"
            }, assets.map(item => React.createElement(Item, {
              key: item.id,
              item: item,
              onDelete: onDelete
            })))));
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
        hash: 489664293,
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
              gallery,
              onClose,
              promise
            } = (0, _context.useGalleryContext)();
            (0, _hooks.useStore)(gallery, ['fetching.changed']);
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
        hash: 410372611,
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
        hash: 4247488786,
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
            fetching
          }) {
            const {
              texts: {
                selectedImage: texts
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
            }))), image && React.createElement("div", null, React.createElement("h4", null, image.title), image.image && React.createElement(_alert.Alert, {
              type: "info"
            }, React.createElement(_components.HtmlWrapper, null, texts.disclaimer), React.createElement("a", {
              href: image.image.contextLink,
              target: "_blank",
              rel: "noopener noreferrer"
            }, texts.copyrightNotice))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/image-manager/index
      *******************************************/

      ims.set('./views/image-manager/index', {
        hash: 1951410235,
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
              src: src,
              alt: image?.title || texts.title,
              image: image,
              fetching: processing
            }), !editMode ? React.createElement(_actionButtons.ActionButtons, {
              onUseImage: onUseImage,
              onEditMode: onEditMode
            }) : React.createElement(_editMode.EditMode, {
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
        hash: 3309614562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GalleryModal = GalleryModal;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _actions = require("./actions");
          var _assets = require("./assets");
          var _context = require("./context");
          var _useStoreManager = require("./hooks/use-store-manager");
          var _search = require("./search");
          var _imageManager = require("./image-manager");
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
              }, React.createElement(_ui.PageLoader, {
                fetching: true
              }));
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
            const attrs = {
              onClick: () => {
                if (store.state === 'empty') return;
                store.state = 'empty';
              },
              disabled: store.state === 'empty',
              icon: store.state === 'empty' ? 'gallery' : 'backArrow'
            };
            return React.createElement(_context.GalleryContext.Provider, {
              value: value
            }, React.createElement(_modal.Modal, {
              show: true,
              className: "modal-form--gallery",
              onClose: handleClose,
              closeBackdrop: false
            }, React.createElement("div", {
              className: "modal-gallery__header"
            }, React.createElement(_icons.AppIconButton, {
              ...attrs
            }), React.createElement("h4", null, texts.header.title), React.createElement(_actions.Actions, null)), React.createElement("div", {
              className: "main-modal-content"
            }, React.createElement(_components.ConditionalContainer, {
              condition: store.state,
              options: {
                empty: React.createElement(_assets.Assets, null),
                search: React.createElement(_search.Searcher, null)
              }
            }), React.createElement(_ui.ProcessContainer, {
              fetching: store.fetching
            })), store.image && !store.openGenerator && React.createElement(_imageManager.SelectedImage, null), store.searchedImage && React.createElement(_searched.SearchedImage, null), store.uploadedImage && React.createElement(_uploaded.UploadedImage, null), store.openGenerator && React.createElement(_generator.Generator, null)));
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
        hash: 1067505212,
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
            return React.createElement("div", {
              className: "gallery-modal__search-container"
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
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaW1hZ2VzIiwicmVxdWlyZSIsIl9iYXNlIiwiR2FsbGVyeVN0b3JlIiwiQmFzZVN0b3JlTWFuYWdlciIsInNlYXJjaFRlcm0iLCJyZXN1bHRzIiwiY29sbGVjdGlvbiIsIml0ZW1zIiwiZXJyb3IiLCJHb29nbGVJbWFnZXMiLCJjb25zdHJ1Y3RvciIsImFjdGl2aXR5IiwicHJvcGVydGllcyIsInN0YXRlIiwic2VhcmNoIiwicXVlcnkiLCJ0cmltIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwibG9nIiwiaWQiLCJsb2FkIiwicGFyZW50Iiwic2VsZWN0SW1hZ2UiLCJpbWFnZSIsImNsZWFyIiwicmV2ZXJ0IiwidW5kZWZpbmVkIiwidHJpZ2dlciIsImdlbmVyYXRlSW1hZ2UiLCJ0ZXh0IiwiZmlsZXMiLCJ1cmxzIiwiRXJyb3IiLCJ1cGxvYWQiLCJzcGVjcyIsIm5hbWUiLCJ1cmwiLCJsaW5rIiwiZmlsZSIsInVwbG9hZEltYWdlIiwiZXhwb3J0cyIsIl9jbHN4IiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9jb250ZXh0IiwiX3VzZVVwbG9hZGVyIiwiX2ZhIiwiX2ZpIiwiX2ljb25zIiwiQWN0aW9ucyIsImdhbGxlcnkiLCJ0ZXh0cyIsInVzZUdhbGxlcnlDb250ZXh0Iiwic2hvd09wdGlvbnMiLCJzZXRTaG93T3B0aW9ucyIsInVzZVN0YXRlIiwib25Ecm9wZG93biIsIkRyb3BEb3duSXRlbXMiLCJ0cmlnZ2VyUmVmIiwidXNlVXBsb2FkZXIiLCJhY2NlcHQiLCJ2YWxpZGF0b3JzIiwib3B0aW9ucyIsIm1heFNpemUiLCJwcm9jZXNzb3JzIiwib25Mb2FkIiwibGVuZ3RoIiwidXBsb2FkZWRJbWFnZSIsIm9uTmF2aWdhdGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib3BlbkdlbmVyYXRvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiRmFHb29nbGUiLCJhY3Rpb25zIiwicmVmIiwiRmlVcGxvYWQiLCJBcHBJY29uIiwiaWNvbiIsImdlbmVyYXRlIiwiZGVmYXVsdCIsIkJ1dHRvbiIsIl9ob29rcyIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfZW1wdHlTdGF0ZSIsIkl0ZW0iLCJpdGVtIiwib25EZWxldGUiLCJvbkRlbGV0ZUZuIiwicHJldmVudERlZmF1bHQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsIm1hdGVyaWFscyIsInJlbW92ZUFzc2V0IiwibW90aW9uIiwibGkiLCJrZXkiLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJkZXNjcmlwdGlvbiIsIkljb25CdXR0b24iLCJ2YXJpYW50IiwiQXNzZXRzIiwiYXNzZXRzIiwic2V0QXNzZXRzIiwiZmlsdGVyIiwiYXNzZXQiLCJ1c2VTdG9yZSIsIkVtcHR5U3RhdGUiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwibWFwIiwiR2FsbGVyeUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkltYWdlSWNvbiIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsImQiLCJfaW1hZ2VJY29uIiwiRnJhZ21lbnQiLCJlbXB0eSIsInRpdGxlIiwiYm9yZGVyZWQiLCJBcHBCdXR0b24iLCJFcnJvckJvdW5kYXJ5IiwiQ29tcG9uZW50IiwicHJvcHMiLCJoYXNFcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3JJbmZvIiwicmVuZGVyIiwiZmFsbGJhY2siLCJtZXNzYWdlIiwiY2hpbGRyZW4iLCJGb290ZXJHYWxsZXJ5IiwicHJvbWlzZSIsIm9uQ2xvc2UiLCJoYW5kbGVDb25maXJtU2VsZWN0aW9uIiwic2VsZWN0ZWRJbWFnZSIsInJlc29sdmUiLCJkaXNhYmxlZCIsInNlbGVjdCIsIl9yZWFjdCIsIl9zdG9yZSIsInVzZVN0b3JlTWFuYWdlciIsInJlYWR5Iiwic2V0UmVhZHkiLCJzdG9yZSIsInNldFN0b3JlIiwic2V0VmVyc2lvbiIsImV2ZW50cyIsInVzZUVmZmVjdCIsImhhbmRsZXIiLCJ2IiwiZm9yRWFjaCIsIm9uIiwib2ZmIiwiX3VwbG9hZGVyIiwidXNlUmVmIiwiZHJvcFpvbmVSZWYiLCJ1cGxvYWRlciIsIlVwbG9hZGVyIiwiY3VycmVudCIsImNyZWF0ZSIsImRlc3Ryb3kiLCJjb3VudCIsInRvdGFsIiwicHJvZ3Jlc3MiLCJNYXRoIiwicm91bmQiLCJlcnJvcnMiLCJ1cGxvYWRpbmciLCJBY3Rpb25CdXR0b25zIiwib25FZGl0TW9kZSIsIm9uVXNlSW1hZ2UiLCJlZGl0V2l0aEFpIiwidXNlIiwiX3RvYXN0IiwiRWRpdE1vZGUiLCJzZXRQcm9jZXNzaW5nIiwicHJvY2Vzc2luZyIsInByb2Nlc3MiLCJhY3Rpb25zVGV4dHMiLCJwcm9tcHQiLCJzZXRQcm9tcHQiLCJpc0dlbmVyYXRpbmciLCJzZXRJc0dlbmVyYXRpbmciLCJvblByb21wdENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25HZW5lcmF0ZUltYWdlIiwiZSIsInRvYXN0IiwiZ2xvYmFsVGV4dHMiLCJOT19DUkVESVRTIiwiREVGQVVMVF9FUlJPUiIsInBsYWNlaG9sZGVyIiwicHJvbXB0UGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl91c2VTbGlkZUFuaW1hdGlvbiIsIl9pbWFnZUhlYWRlciIsIl9lZGl0TW9kZSIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsInBhbmVsUmVmIiwidXNlU2xpZGVBbmltYXRpb24iLCJvbkJhY2siLCJJbWFnZUhlYWRlciIsImFkdmljZSIsIl9nc2FwIiwiZWxlbWVudFJlZiIsImdzYXAiLCJzZXQiLCJ4IiwidG8iLCJraWxsVHdlZW5zT2YiLCJXcmFwcGVyIiwiaHJlZiIsImNvbnRleHRMaW5rIiwicmVsIiwic2VhcmNoZWRJbWFnZSIsIkFwcEljb25CdXR0b24iLCJfYWxlcnQiLCJJbWFnZVByZXZpZXciLCJTcGlubmVyIiwiYWN0aXZlIiwic2l6ZSIsIkFsZXJ0IiwidHlwZSIsIkh0bWxXcmFwcGVyIiwiZGlzY2xhaW1lciIsImNvcHlyaWdodE5vdGljZSIsIl9pbWFnZVByZXZpZXciLCJfYWN0aW9uQnV0dG9ucyIsIlNlbGVjdGVkSW1hZ2UiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwicHJldmlld1VybCIsIlNlYXJjaGVkSW1hZ2UiLCJvbkF0dGFjaEltYWdlIiwic3VjY2VzcyIsImF0dGFjaCIsIlVwbG9hZGVkSW1hZ2UiLCJfdWkiLCJfbW9kYWwiLCJfYWN0aW9ucyIsIl9hc3NldHMiLCJfdXNlU3RvcmVNYW5hZ2VyIiwiX3NlYXJjaCIsIl9pbWFnZU1hbmFnZXIiLCJfc2VhcmNoZWQiLCJfdXBsb2FkZWQiLCJfZ2VuZXJhdG9yIiwiR2FsbGVyeU1vZGFsIiwiTW9kYWwiLCJzaG93IiwiUGFnZUxvYWRlciIsImhhbmRsZUNsb3NlIiwidG90YWxBc3NldHMiLCJhdHRycyIsIlByb3ZpZGVyIiwiY2xvc2VCYWNrZHJvcCIsImhlYWRlciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiU2VhcmNoZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJTZWFyY2hCYXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwib25TdWJtaXQiLCJJbnB1dCIsIl9saXN0IiwiX2l0ZW0iLCJfYmFyIiwib25Mb2FkSW1hZ2UiLCJvbkdlbmVyYXRlQUkiLCJsb2FkaW5nIiwiTGlzdCIsImNvbnRyb2wiLCJhcyIsIkVtcHR5Q2FyZCIsInNlbGVjdGVkIiwiY2xzeCIsInJvbGUiLCJ0YWJJbmRleCIsInRodW1ibmFpbExpbmsiLCJzdHlsZSIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbFdpZHRoIl0sInNvdXJjZXMiOlsiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2V0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZW1wdHktc3RhdGUvaW1hZ2UtaWNvbi50c3giLCIvdHMvdmlld3MvZW1wdHktc3RhdGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi90cy92aWV3cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS1tYW5hZ2VyLnRzIiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS11cGxvYWRlci50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9hY3Rpb24tYnV0dG9ucy50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9lZGl0LW1vZGUudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvZ2VuZXJhdG9yLnRzeCIsIi90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2hvb2tzL3VzZS1zbGlkZS1hbmltYXRpb24udHMiLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbWFnZS1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvaW1hZ2UtcHJldmlldy50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9zZWFyY2hlZC50c3giLCIvdHMvdmlld3MvaW1hZ2UtbWFuYWdlci91cGxvYWRlZC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9iYXIudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VhcmNoL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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