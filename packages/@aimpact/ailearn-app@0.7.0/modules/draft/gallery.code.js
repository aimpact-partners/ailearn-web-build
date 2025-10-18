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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaW1hZ2VzIiwicmVxdWlyZSIsIl9iYXNlIiwiR2FsbGVyeVN0b3JlIiwiQmFzZVN0b3JlTWFuYWdlciIsInNlYXJjaFRlcm0iLCJyZXN1bHRzIiwiY29sbGVjdGlvbiIsIml0ZW1zIiwiZXJyb3IiLCJHb29nbGVJbWFnZXMiLCJjb25zdHJ1Y3RvciIsImFjdGl2aXR5IiwicHJvcGVydGllcyIsInN0YXRlIiwic2VhcmNoIiwicXVlcnkiLCJ0cmltIiwiZmV0Y2hpbmciLCJjb25zb2xlIiwibG9nIiwiaWQiLCJsb2FkIiwicGFyZW50Iiwic2VsZWN0SW1hZ2UiLCJpbWFnZSIsImNsZWFyIiwicmV2ZXJ0IiwidW5kZWZpbmVkIiwidHJpZ2dlciIsImdlbmVyYXRlSW1hZ2UiLCJ0ZXh0IiwiZmlsZXMiLCJ1cmxzIiwiRXJyb3IiLCJ1cGxvYWQiLCJzcGVjcyIsIm5hbWUiLCJ1cmwiLCJsaW5rIiwiZmlsZSIsInVwbG9hZEltYWdlIiwiZXhwb3J0cyIsIl9jbHN4IiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9jb250ZXh0IiwiX3VzZVVwbG9hZGVyIiwiX2ZhIiwiX2ZpIiwiX2ljb25zIiwiQWN0aW9ucyIsImdhbGxlcnkiLCJ0ZXh0cyIsInVzZUdhbGxlcnlDb250ZXh0Iiwic2hvd09wdGlvbnMiLCJzZXRTaG93T3B0aW9ucyIsInVzZVN0YXRlIiwib25Ecm9wZG93biIsIkRyb3BEb3duSXRlbXMiLCJ0cmlnZ2VyUmVmIiwidXNlVXBsb2FkZXIiLCJhY2NlcHQiLCJ2YWxpZGF0b3JzIiwib3B0aW9ucyIsIm1heFNpemUiLCJwcm9jZXNzb3JzIiwib25Mb2FkIiwibGVuZ3RoIiwidXBsb2FkZWRJbWFnZSIsIm9uTmF2aWdhdGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib3BlbkdlbmVyYXRvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiRmFHb29nbGUiLCJhY3Rpb25zIiwicmVmIiwiRmlVcGxvYWQiLCJBcHBJY29uIiwiaWNvbiIsImdlbmVyYXRlIiwiZGVmYXVsdCIsIkJ1dHRvbiIsIl9ob29rcyIsIl9mcmFtZXJNb3Rpb24iLCJfaW1hZ2UiLCJfZW1wdHlTdGF0ZSIsIkl0ZW0iLCJpdGVtIiwib25EZWxldGUiLCJvbkRlbGV0ZUZuIiwicHJldmVudERlZmF1bHQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsIm1hdGVyaWFscyIsInJlbW92ZUFzc2V0IiwibW90aW9uIiwibGkiLCJrZXkiLCJsYXlvdXQiLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJkZXNjcmlwdGlvbiIsIkljb25CdXR0b24iLCJ2YXJpYW50IiwiQXNzZXRzIiwiYXNzZXRzIiwic2V0QXNzZXRzIiwiZmlsdGVyIiwiYXNzZXQiLCJ1c2VTdG9yZSIsIkVtcHR5U3RhdGUiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwibWFwIiwiR2FsbGVyeUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkltYWdlSWNvbiIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsImQiLCJfaW1hZ2VJY29uIiwiRnJhZ21lbnQiLCJlbXB0eSIsInRpdGxlIiwiYm9yZGVyZWQiLCJBcHBCdXR0b24iLCJFcnJvckJvdW5kYXJ5IiwiQ29tcG9uZW50IiwicHJvcHMiLCJoYXNFcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3JJbmZvIiwicmVuZGVyIiwiZmFsbGJhY2siLCJtZXNzYWdlIiwiY2hpbGRyZW4iLCJGb290ZXJHYWxsZXJ5IiwicHJvbWlzZSIsIm9uQ2xvc2UiLCJoYW5kbGVDb25maXJtU2VsZWN0aW9uIiwic2VsZWN0ZWRJbWFnZSIsInJlc29sdmUiLCJkaXNhYmxlZCIsInNlbGVjdCIsIl9yZWFjdCIsIl9zdG9yZSIsInVzZVN0b3JlTWFuYWdlciIsInJlYWR5Iiwic2V0UmVhZHkiLCJzdG9yZSIsInNldFN0b3JlIiwic2V0VmVyc2lvbiIsImV2ZW50cyIsInVzZUVmZmVjdCIsImhhbmRsZXIiLCJ2IiwiZm9yRWFjaCIsIm9uIiwib2ZmIiwiX3VwbG9hZGVyIiwidXNlUmVmIiwiZHJvcFpvbmVSZWYiLCJ1cGxvYWRlciIsIlVwbG9hZGVyIiwiY3VycmVudCIsImNyZWF0ZSIsImRlc3Ryb3kiLCJjb3VudCIsInRvdGFsIiwicHJvZ3Jlc3MiLCJNYXRoIiwicm91bmQiLCJlcnJvcnMiLCJ1cGxvYWRpbmciLCJBY3Rpb25CdXR0b25zIiwib25FZGl0TW9kZSIsIm9uVXNlSW1hZ2UiLCJlZGl0V2l0aEFpIiwidXNlIiwiX3RvYXN0IiwiRWRpdE1vZGUiLCJzZXRQcm9jZXNzaW5nIiwicHJvY2Vzc2luZyIsInByb2Nlc3MiLCJhY3Rpb25zVGV4dHMiLCJwcm9tcHQiLCJzZXRQcm9tcHQiLCJpc0dlbmVyYXRpbmciLCJzZXRJc0dlbmVyYXRpbmciLCJvblByb21wdENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib25HZW5lcmF0ZUltYWdlIiwiZSIsInRvYXN0IiwiZ2xvYmFsVGV4dHMiLCJOT19DUkVESVRTIiwiREVGQVVMVF9FUlJPUiIsInBsYWNlaG9sZGVyIiwicHJvbXB0UGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl91c2VTbGlkZUFuaW1hdGlvbiIsIl9pbWFnZUhlYWRlciIsIl9lZGl0TW9kZSIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsInBhbmVsUmVmIiwidXNlU2xpZGVBbmltYXRpb24iLCJvbkJhY2siLCJJbWFnZUhlYWRlciIsImFkdmljZSIsIl9nc2FwIiwiZWxlbWVudFJlZiIsImdzYXAiLCJzZXQiLCJ4IiwidG8iLCJraWxsVHdlZW5zT2YiLCJXcmFwcGVyIiwiaHJlZiIsImNvbnRleHRMaW5rIiwicmVsIiwic2VhcmNoZWRJbWFnZSIsIkFwcEljb25CdXR0b24iLCJfYWxlcnQiLCJJbWFnZVByZXZpZXciLCJTcGlubmVyIiwiYWN0aXZlIiwic2l6ZSIsIkFsZXJ0IiwidHlwZSIsIkh0bWxXcmFwcGVyIiwiZGlzY2xhaW1lciIsImNvcHlyaWdodE5vdGljZSIsIl9pbWFnZVByZXZpZXciLCJfYWN0aW9uQnV0dG9ucyIsIlNlbGVjdGVkSW1hZ2UiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwicHJldmlld1VybCIsIlNlYXJjaGVkSW1hZ2UiLCJvbkF0dGFjaEltYWdlIiwic3VjY2VzcyIsImF0dGFjaCIsIlVwbG9hZGVkSW1hZ2UiLCJfdWkiLCJfbW9kYWwiLCJfYWN0aW9ucyIsIl9hc3NldHMiLCJfdXNlU3RvcmVNYW5hZ2VyIiwiX3NlYXJjaCIsIl9pbWFnZU1hbmFnZXIiLCJfc2VhcmNoZWQiLCJfdXBsb2FkZWQiLCJfZ2VuZXJhdG9yIiwiR2FsbGVyeU1vZGFsIiwiTW9kYWwiLCJzaG93IiwiUGFnZUxvYWRlciIsImhhbmRsZUNsb3NlIiwidG90YWxBc3NldHMiLCJhdHRycyIsIlByb3ZpZGVyIiwiY2xvc2VCYWNrZHJvcCIsImhlYWRlciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwiU2VhcmNoZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJTZWFyY2hCYXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwib25TdWJtaXQiLCJJbnB1dCIsIl9saXN0IiwiX2l0ZW0iLCJfYmFyIiwib25Mb2FkSW1hZ2UiLCJvbkdlbmVyYXRlQUkiLCJsb2FkaW5nIiwiTGlzdCIsImNvbnRyb2wiLCJhcyIsIkVtcHR5Q2FyZCIsInNlbGVjdGVkIiwiY2xzeCIsInJvbGUiLCJ0YWJJbmRleCIsInRodW1ibmFpbExpbmsiLCJzdHlsZSIsInRodW1ibmFpbEhlaWdodCIsInRodW1ibmFpbFdpZHRoIl0sInNvdXJjZXMiOlsiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvYWN0aW9ucy50c3giLCIvL3RzL3ZpZXdzL2Fzc2V0cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiLy90cy92aWV3cy9lbXB0eS1zdGF0ZS9pbWFnZS1pY29uLnRzeCIsIi8vdHMvdmlld3MvZW1wdHktc3RhdGUvaW5kZXgudHN4IiwiLy90cy92aWV3cy9lcnJvci1ib3VuZGFyeS50c3giLCIvL3RzL3ZpZXdzL2Zvb3Rlci50c3giLCIvL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS1tYW5hZ2VyLnRzIiwiLy90cy92aWV3cy9ob29rcy91c2UtdXBsb2FkZXIudHN4IiwiLy90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2FjdGlvbi1idXR0b25zLnRzeCIsIi8vdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9lZGl0LW1vZGUudHN4IiwiLy90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2dlbmVyYXRvci50c3giLCIvL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvaG9va3MvdXNlLXNsaWRlLWFuaW1hdGlvbi50cyIsIi8vdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9pbWFnZS1oZWFkZXIudHN4IiwiLy90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2ltYWdlLXByZXZpZXcudHN4IiwiLy90cy92aWV3cy9pbWFnZS1tYW5hZ2VyL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaW1hZ2UtbWFuYWdlci9zZWFyY2hlZC50c3giLCIvL3RzL3ZpZXdzL2ltYWdlLW1hbmFnZXIvdXBsb2FkZWQudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL3NlYXJjaC9iYXIudHN4IiwiLy90cy92aWV3cy9zZWFyY2gvaW5kZXgudHN4IiwiLy90cy92aWV3cy9zZWFyY2gvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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eEUsRUFBRTtZQUU5QyxNQUFNeUQsT0FBTyxHQUFHQSxDQUFBLEtBQVc7Y0FDMUIsSUFBSTVELFFBQVEsRUFBRTtjQUNkLElBQUlpUyxRQUFRLEVBQUU7Z0JBQ2IvUCxPQUFPLENBQUM4TCxhQUFhLEdBQUcsSUFBSTtlQUM1QixNQUFNO2dCQUNOOUwsT0FBTyxDQUFDOEwsYUFBYSxHQUFHckosSUFBSTs7WUFFOUIsQ0FBQztZQUVELE1BQU1oQixTQUFTLEdBQUcsSUFBQWxDLEtBQUEsQ0FBQXlRLElBQUksRUFBQyxvQkFBb0IsRUFBRTtjQUM1QyxhQUFhLEVBQUVELFFBQVE7Y0FDdkIsYUFBYSxFQUFFalM7YUFDZixDQUFDO1lBRUYsT0FDQzJCLEtBQUEsQ0FBQStCLGFBQUE7Y0FDQ0MsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCQyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJ1TyxJQUFJLEVBQUMsUUFBUTtjQUNiQyxRQUFRLEVBQUVwUyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztjQUFBLGNBQ2YsZUFBZTJFLElBQUksQ0FBQ2lELEtBQUs7WUFBRSxHQUV2Q2pHLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTZCLEdBQzNDaEMsS0FBQSxDQUFBK0IsYUFBQTtjQUNDc0MsR0FBRyxFQUFFckIsSUFBSSxDQUFDcEUsS0FBSyxDQUFDOFIsYUFBYTtjQUM3QnBNLEdBQUcsRUFBRXRCLElBQUksQ0FBQ2lELEtBQUs7Y0FDZjBLLEtBQUssRUFBRTtnQkFBRWpMLE1BQU0sRUFBRTFDLElBQUksQ0FBQ3BFLEtBQUssQ0FBQ2dTLGVBQWUsR0FBRyxHQUFHO2dCQUFFbkwsS0FBSyxFQUFFekMsSUFBSSxDQUFDcEUsS0FBSyxDQUFDaVMsY0FBYyxHQUFHO2NBQUc7WUFBRSxFQUMxRixDQUNHLEVBRU43USxLQUFBLENBQUErQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNyQ2hDLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXFCLEdBQUVnQixJQUFJLENBQUNpRCxLQUFLLENBQU8sQ0FDbEQsRUFFTHFLLFFBQVEsSUFDUnRRLEtBQUEsQ0FBQStCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtDLEdBQ2hEaEMsS0FBQSxDQUFBK0IsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBTSxZQUFTLENBRWhDLENBQ0k7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==