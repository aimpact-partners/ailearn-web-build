System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.7.0/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/components", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "@aimpact/ailearn-app@0.7.0/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, IUseUploader, useUploader, ActivityView, MobileView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    Aside: void 0,
    AudioPlayer: void 0,
    ContentInformation: void 0,
    DesktopView: void 0,
    IUseUploader: void 0,
    useUploader: void 0,
    ActivityView: void 0,
    MobileView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_4 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp070EntitiesAssignmentsActivitiesBase) {
      dependency_6 = _aimpactAilearnApp070EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Image) {
      dependency_9 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_10 = _aimpactAilearnApp070ModelWrapper;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_11 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108List) {
      dependency_13 = _pragmateUi108List;
    }, function (_pragmateUi108Tabs) {
      dependency_14 = _pragmateUi108Tabs;
    }, function (_pragmateUi108Collapsible) {
      dependency_15 = _pragmateUi108Collapsible;
    }, function (_pragmateUi108Components) {
      dependency_16 = _pragmateUi108Components;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_17 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_18 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Form) {
      dependency_19 = _pragmateUi108Form;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_20 = _aimpactAilearnApp070SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/assignments/hand-written",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/media-manager/uploader', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/form', dependency_19], ['@aimpact/ailearn-app/shared/hooks', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-hand-written",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/assignments/hand-written.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/hand-written/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/assignments/hand-written.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2560799468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.ActivityView;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.testing = this.uri.qs.get('type') === 'draft';
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              _mainLayout.LayoutBroker.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2227790947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _beyond_context = require("beyond_context");
          /*bundle*/ //@ts-ignore

          class StoreManager extends _base.BaseStoreManager {
            isStore = true;
            #view = 'form';
            get view() {
              return this.#view;
            }
            #introduction;
            get introduction() {
              return this.#introduction;
            }
            #activityId;
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #modelId;
            get modelId() {
              return this.#modelId;
            }
            #testing;
            constructor({
              testing
            } = {
              testing: false
            }) {
              super(_beyond_context.module.specifier);
              super.reactiveProps(['currentFile']);
              this.#testing = testing;
            }
            async load(assigmentId, activityId) {
              await super.load(assigmentId, activityId);
              if (this.model.data?.attempts?.[0]) {
                this.#view = 'analysis';
              }
              this.triggerEvent();
            }
            async loadTest(draftId, activityId) {
              super.loadTest(draftId, activityId);
              this.#modelId = draftId;
              this.triggerEvent();
            }
            setView(value) {
              this.#view = value;
              this.triggerEvent();
            }
            cleanError() {
              this.error = null;
            }
            publish = async file => {
              try {
                this.fetching = true;
                this.currentFile = file;
                const specs = {
                  params: {
                    file: file.file,
                    activityId: this.activityId,
                    multipart: true
                  },
                  type: 'hand-written'
                };
                if (this.#testing) specs.params.draftId = this.#modelId;else specs.params.assignmentId = this.assignmentId;
                await this.model.publish(specs);
                await this.model.load();
                this.#view = 'analysis';
                this.trigger('change');
              } catch (error) {
                this.error = this.texts.errors.default;
                throw error;
              } finally {
                setTimeout(() => {
                  this.fetching = false;
                }, 1000);
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 2272296554,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _image = require("pragmate-ui/image");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function Analysis() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const feedback = store.model.data.attempts[0];
            const keys = Object.keys(feedback.assessment);
            const {
              currentFile
            } = store;
            const url = currentFile ? currentFile.previewUrl : `${_wrapper.settings.apis.ailearn}${store.model.data.attempts[0].picture}`;
            return _react.default.createElement("section", {
              className: "analysis__container"
            }, _react.default.createElement("div", {
              className: "activity__content-container"
            }, _react.default.createElement("h6", null, texts.analysis.content), _react.default.createElement(_image.Image, {
              src: url
            })), _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement("h6", null, texts.analysis.report), _react.default.createElement("div", {
              className: "feedback__container"
            }, keys.map((property, index) => {
              const item = feedback.assessment[property];
              const icon = `points${item.points}`;
              return _react.default.createElement("article", {
                key: item.name.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container hidden-xs"
              }, _react.default.createElement(_icons.AppIcon, {
                className: "assessment__analysis-icon",
                icon: icon
              })), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement(_icons.AppIcon, {
                className: "visible-xs assessment__analysis-icon",
                icon: icon
              }), _react.default.createElement("h6", null, item.name)), _react.default.createElement("p", null, item.feedback)));
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/aside
      ****************************************/

      ims.set('./views/components/aside', {
        hash: 413812992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _information = require("./information");
          /*bundle*/
          function Aside() {
            return _react.default.createElement("aside", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/audio-player
      ***********************************************/

      ims.set('./views/components/audio-player', {
        hash: 1190578037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              const onLoadedMetadata = () => {
                if (target.duration !== Infinity) return;
                target.currentTime = 1e101;
                target.ontimeupdate = () => {
                  target.ontimeupdate = null;
                  target.currentTime = 0;
                };
              };
              target.addEventListener('loadedmetadata', onloadeddata);
              return () => target.removeEventListener('loadedmetadata', onLoadedMetadata);
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/information
      **********************************************/

      ims.set('./views/components/information', {
        hash: 923342008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentInformation = ContentInformation;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _list = require("pragmate-ui/list");
          var _tabs = require("pragmate-ui/tabs");
          /*bundle*/
          function ContentInformation() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.getSpecs().task?.replace('%1', userName);
            const Item = ({
              item
            }) => {
              return _react.default.createElement("div", {
                className: "aside__item-list"
              }, _react.default.createElement("h6", null, item.name), _react.default.createElement("span", null, item.subject));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover activity",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, texts.activity), _react.default.createElement(_tabs.Tab, null, texts.criteria)), _react.default.createElement(_tabs.Panes, {
              className: "panes__container"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            }), _react.default.createElement("div", null, _react.default.createElement(_list.List, {
              as: "div",
              className: "list-unstyled",
              items: store.model.getSpecs().criteria,
              control: Item
            }))))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1391318479,
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

      /*******************************
      INTERNAL MODULE: ./views/desktop
      *******************************/

      ims.set('./views/desktop', {
        hash: 1137317072,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _aside = require("./components/aside");
          var _analysis = require("./analysis");
          var _form = require("./form");
          var _tabs = require("./tabs");
          /*bundle*/
          function DesktopView({
            store
          }) {
            const view = !!store.model?.data ? 'analysis' : 'form';
            const cls = `scrolleable-child main-container${view === 'analysis' ? ' analysis-view' : ''}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container assessment-activity"
            }, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-pl"
            }, _react.default.createElement(_aside.Aside, null)), _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_tabs.ButtonTabs, {
              selected: store.view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: store.view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_form.FormView, null)
              }
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/form/drag-and-drop-image
      ************************************************/

      ims.set('./views/form/drag-and-drop-image', {
        hash: 4077886357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DragAndDropImage = void 0;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _useUploader = require("./use-uploader");
          const DragAndDropImage = ({
            setFile,
            placeholder
          }) => {
            const {
              triggerRef,
              dropZoneRef
            } = (0, _useUploader.useUploader)({
              accept: 'image/*',
              validators: [{
                name: 'file',
                options: {
                  maxSize: 5
                }
              }],
              processors: ['image'],
              onLoad: files => {
                if (files.length > 0) {
                  setFile(files[0]);
                }
              }
            });
            return _react.default.createElement("div", {
              ref: triggerRef,
              className: "uploader-inner-container"
            }, _react.default.createElement("div", {
              className: "draganddrop__container",
              ref: dropZoneRef
            }, _react.default.createElement("div", null, _react.default.createElement(_icons.AppIcon, {
              icon: "upload"
            }), placeholder)));
          };
          exports.DragAndDropImage = DragAndDropImage;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 2568508775,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormView = FormView;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          var _dragAndDropImage = require("./drag-and-drop-image");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function FormView() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [file, setFile] = _react.default.useState(null);
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            (0, _hooks.useStore)(store, ['fetching.changed', 'error.changed']);
            const closeModal = () => {
              setShowCoinsModal(false);
            };
            const onSuccess = () => {
              try {
                store.publish(file);
                closeModal();
              } catch (e) {
                setError(store.texts.errors.default);
              }
            };
            const onSubmit = event => {
              event.preventDefault();
              // Check if user has credits before publishing
              if (!store.hasCredits) {
                setShowCoinsModal(true);
                return;
              }
              onSuccess();
            };
            const disabled = store.fetching;
            const onDelete = event => {
              event.preventDefault();
              event.stopPropagation();
              setFile(null);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity__form",
              onSubmit: onSubmit
            }, store.error && _react.default.createElement(_ui.ErrorRenderer, {
              error: store.error,
              variant: "error"
            }), _react.default.createElement("div", {
              className: "activity-form-container"
            }, file ? _react.default.createElement("div", {
              className: "activity-image--container"
            }, _react.default.createElement(_image.Image, {
              src: file.previewUrl || file.src,
              alt: "uploaded image",
              className: "activity-image"
            }, _react.default.createElement("figcaption", null, _react.default.createElement(_icons.AppIconButton, {
              icon: "delete",
              onClick: onDelete,
              title: store.globalTexts.actions.delete
            })))) : _react.default.createElement(_dragAndDropImage.DragAndDropImage, {
              setFile: setFile,
              placeholder: store.texts.form.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              variant: "primary",
              disabled: disabled || !file || store.fetching,
              type: "submit"
            }, store.texts.form.submit))), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              type: "interactive",
              onConsume: store.model.consumeCoins,
              onSuccess: onSuccess
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/form/use-uploader
      *****************************************/

      ims.set('./views/form/use-uploader', {
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

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 1802278743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 915858488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
          function ActivityView({
            store
          }) {
            const [error, setError] = _react.default.useState(undefined);
            const {
              items,
              ready
            } = store;
            const {
              texts
            } = store;
            const screenSize = (0, _hooks.useMediaQuery)();
            (0, _hooks.useStore)(store, ['change']);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              store,
              texts,
              fetching: store.fetching,
              items,
              error,
              setError,
              screenSize
            };
            const props = {
              store
            };
            return _react.default.createElement("div", null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopView, {
              ...props
            }) : _react.default.createElement(_mobile.MobileView, {
              ...props
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/mobile
      ******************************/

      ims.set('./views/mobile', {
        hash: 1408251225,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _components = require("pragmate-ui/components");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _information = require("./components/information");
          var _analysis = require("./analysis");
          var _form = require("./form");
          var _tabs2 = require("./tabs");
          /*bundle*/
          function MobileView({
            store
          }) {
            const {
              view
            } = store;
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs.TabsContainer, {
              className: "activity-tabs",
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement("div", null, _react.default.createElement(_tabs2.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_form.FormView, null)
              }
            })), _react.default.createElement("div", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null))), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, store.texts.tabs.analysis), _react.default.createElement(_tabs.Tab, null, store.texts.tabs.activity))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/tabs
      ****************************/

      ims.set('./views/tabs', {
        hash: 3734709945,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonTabs = ButtonTabs;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function ButtonTabs({
            selected,
            available
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const onChange = event => {
              const view = event.currentTarget.dataset.view;
              store.setView(view);
            };
            if (!available) return null;
            return React.createElement("div", {
              className: "flex-container space-between"
            }, React.createElement(_components.ButtonGroup, {
              selected: selected,
              variant: "primary",
              onChange: onChange
            }, React.createElement(_components.Button, {
              "data-view": "analysis"
            }, texts.tabs.analysis, " "), React.createElement(_components.Button, {
              "data-view": "record"
            }, texts.tabs.redo, " ")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./views/components/aside",
        "from": "Aside",
        "name": "Aside"
      }, {
        "im": "./views/components/audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./views/components/information",
        "from": "ContentInformation",
        "name": "ContentInformation"
      }, {
        "im": "./views/desktop",
        "from": "DesktopView",
        "name": "DesktopView"
      }, {
        "im": "./views/form/use-uploader",
        "from": "IUseUploader",
        "name": "IUseUploader"
      }, {
        "im": "./views/form/use-uploader",
        "from": "useUploader",
        "name": "useUploader"
      }, {
        "im": "./views/index",
        "from": "ActivityView",
        "name": "ActivityView"
      }, {
        "im": "./views/mobile",
        "from": "MobileView",
        "name": "MobileView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'Aside') && _export("Aside", Aside = require ? require('./views/components/aside').Aside : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/components/audio-player').AudioPlayer : value);
        (require || prop === 'ContentInformation') && _export("ContentInformation", ContentInformation = require ? require('./views/components/information').ContentInformation : value);
        (require || prop === 'DesktopView') && _export("DesktopView", DesktopView = require ? require('./views/desktop').DesktopView : value);
        (require || prop === 'IUseUploader') && _export("IUseUploader", IUseUploader = require ? require('./views/form/use-uploader').IUseUploader : value);
        (require || prop === 'useUploader') && _export("useUploader", useUploader = require ? require('./views/form/use-uploader').useUploader : value);
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/index').ActivityView : value);
        (require || prop === 'MobileView') && _export("MobileView", MobileView = require ? require('./views/mobile').MobileView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidmlldyIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJwYXJhbXNVcmkiLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWN0aXZlUHJvcHMiLCJhc3NpZ21lbnRJZCIsIm1vZGVsIiwiZGF0YSIsImF0dGVtcHRzIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwiY2xlYW5FcnJvciIsImVycm9yIiwicHVibGlzaCIsImZpbGUiLCJmZXRjaGluZyIsImN1cnJlbnRGaWxlIiwic3BlY3MiLCJwYXJhbXMiLCJtdWx0aXBhcnQiLCJ0eXBlIiwiYXNzaWdubWVudElkIiwidHJpZ2dlciIsInRleHRzIiwiZXJyb3JzIiwiZGVmYXVsdCIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9pbWFnZSIsIl93cmFwcGVyIiwiQW5hbHlzaXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZmVlZGJhY2siLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsInVybCIsInByZXZpZXdVcmwiLCJzZXR0aW5ncyIsImFwaXMiLCJhaWxlYXJuIiwicGljdHVyZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhbmFseXNpcyIsImNvbnRlbnQiLCJJbWFnZSIsInNyYyIsInJlcG9ydCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwiaWNvbiIsInBvaW50cyIsImtleSIsIm5hbWUiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9pbmZvcm1hdGlvbiIsIkFzaWRlIiwiQ29udGVudEluZm9ybWF0aW9uIiwiQXVkaW9QbGF5ZXIiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwiSXRlbSIsInN1YmplY3QiLCJGcmFnbWVudCIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsIkxpc3QiLCJhcyIsIml0ZW1zIiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2FzaWRlIiwiX2FuYWx5c2lzIiwiX2Zvcm0iLCJEZXNrdG9wVmlldyIsImNscyIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiQnV0dG9uVGFicyIsInNlbGVjdGVkIiwiYXZhaWxhYmxlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJmYWxzZSIsIkZvcm1WaWV3IiwiX3VzZVVwbG9hZGVyIiwiRHJhZ0FuZERyb3BJbWFnZSIsInNldEZpbGUiLCJwbGFjZWhvbGRlciIsInRyaWdnZXJSZWYiLCJkcm9wWm9uZVJlZiIsInVzZVVwbG9hZGVyIiwiYWNjZXB0IiwidmFsaWRhdG9ycyIsIm1heFNpemUiLCJwcm9jZXNzb3JzIiwib25Mb2FkIiwiZmlsZXMiLCJsZW5ndGgiLCJfaG9va3MiLCJfZHJhZ0FuZERyb3BJbWFnZSIsInVzZVN0YXRlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNldEVycm9yIiwidXNlU3RvcmUiLCJjbG9zZU1vZGFsIiwib25TdWNjZXNzIiwiZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NyZWRpdHMiLCJkaXNhYmxlZCIsIm9uRGVsZXRlIiwic3RvcFByb3BhZ2F0aW9uIiwiRm9ybSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiYWx0IiwiQXBwSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJnbG9iYWxUZXh0cyIsImFjdGlvbnMiLCJkZWxldGUiLCJmb3JtIiwiQnV0dG9uIiwic3VibWl0IiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJSZWFjdCIsIl91cGxvYWRlciIsInVwbG9hZGVyIiwiVXBsb2FkZXIiLCJjcmVhdGUiLCJ1bmRlZmluZWQiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsInByb2dyZXNzIiwiTWF0aCIsInJvdW5kIiwidXBsb2FkaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJyZWFkeSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiUGFnZUxvYWRlciIsImNvbnRleHRWYWx1ZSIsInByb3BzIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwicmVkbyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9mb3JtL2RyYWctYW5kLWRyb3AtaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vdXNlLXVwbG9hZGVyLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENB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