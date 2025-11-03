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
        hash: 444719277,
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
            console.log(12, url);
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
        hash: 3843111448,
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
                console.log(10, files);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidmlldyIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJwYXJhbXNVcmkiLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWN0aXZlUHJvcHMiLCJhc3NpZ21lbnRJZCIsIm1vZGVsIiwiZGF0YSIsImF0dGVtcHRzIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwiY2xlYW5FcnJvciIsImVycm9yIiwicHVibGlzaCIsImZpbGUiLCJmZXRjaGluZyIsImN1cnJlbnRGaWxlIiwic3BlY3MiLCJwYXJhbXMiLCJtdWx0aXBhcnQiLCJ0eXBlIiwiYXNzaWdubWVudElkIiwidHJpZ2dlciIsInRleHRzIiwiZXJyb3JzIiwiZGVmYXVsdCIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9pbWFnZSIsIl93cmFwcGVyIiwiQW5hbHlzaXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZmVlZGJhY2siLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsInVybCIsInByZXZpZXdVcmwiLCJzZXR0aW5ncyIsImFwaXMiLCJhaWxlYXJuIiwicGljdHVyZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYW5hbHlzaXMiLCJjb250ZW50IiwiSW1hZ2UiLCJzcmMiLCJyZXBvcnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJuYW1lIiwicmVwbGFjZSIsIkFwcEljb24iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwiSXRlbSIsInN1YmplY3QiLCJGcmFnbWVudCIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsIkxpc3QiLCJhcyIsIml0ZW1zIiwiY29udHJvbCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2FzaWRlIiwiX2FuYWx5c2lzIiwiX2Zvcm0iLCJEZXNrdG9wVmlldyIsImNscyIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiQnV0dG9uVGFicyIsInNlbGVjdGVkIiwiYXZhaWxhYmxlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJmYWxzZSIsIkZvcm1WaWV3IiwiX3VzZVVwbG9hZGVyIiwiRHJhZ0FuZERyb3BJbWFnZSIsInNldEZpbGUiLCJwbGFjZWhvbGRlciIsInRyaWdnZXJSZWYiLCJkcm9wWm9uZVJlZiIsInVzZVVwbG9hZGVyIiwiYWNjZXB0IiwidmFsaWRhdG9ycyIsIm1heFNpemUiLCJwcm9jZXNzb3JzIiwib25Mb2FkIiwiZmlsZXMiLCJsZW5ndGgiLCJfaG9va3MiLCJfZHJhZ0FuZERyb3BJbWFnZSIsInVzZVN0YXRlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNldEVycm9yIiwidXNlU3RvcmUiLCJjbG9zZU1vZGFsIiwib25TdWNjZXNzIiwiZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NyZWRpdHMiLCJkaXNhYmxlZCIsIm9uRGVsZXRlIiwic3RvcFByb3BhZ2F0aW9uIiwiRm9ybSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiYWx0IiwiQXBwSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJnbG9iYWxUZXh0cyIsImFjdGlvbnMiLCJkZWxldGUiLCJmb3JtIiwiQnV0dG9uIiwic3VibWl0IiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJSZWFjdCIsIl91cGxvYWRlciIsInVwbG9hZGVyIiwiVXBsb2FkZXIiLCJjcmVhdGUiLCJ1bmRlZmluZWQiLCJkZXN0cm95IiwiY291bnQiLCJ0b3RhbCIsInByb2dyZXNzIiwiTWF0aCIsInJvdW5kIiwidXBsb2FkaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJyZWFkeSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiUGFnZUxvYWRlciIsImNvbnRleHRWYWx1ZSIsInByb3BzIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwicmVkbyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9mb3JtL2RyYWctYW5kLWRyb3AtaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vdXNlLXVwbG9hZGVyLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sWUFBWTtZQUNwQjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLE9BQU8sR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBTztjQUN6RCxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDSSxJQUFJLENBQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUcsSUFBSUEsQ0FBQTtjQUNIbkIsV0FBQSxDQUFBb0IsWUFBWSxDQUFDQyxLQUFLLEVBQUU7WUFDckI7O1VBQ0FDLE9BQUEsQ0FBQWpCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkQsSUFBQWtCLEtBQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUdPLFdBTFA7O1VBS2lCLE1BQU9RLFlBQWEsU0FBUWMsS0FBQSxDQUFBRSxnQkFBZ0I7WUFJNURDLE9BQU8sR0FBRyxJQUFJO1lBZ0JkLENBQUFDLElBQUssR0FBd0IsTUFBTTtZQUNuQyxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLENBQUFDLFVBQVc7WUFFWCxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQSxDQUFBbkIsT0FBUTtZQUVSb0IsWUFBWTtjQUFFcEI7WUFBTyxJQUEyQjtjQUFFQSxPQUFPLEVBQUU7WUFBSyxDQUFFO2NBQ2pFLEtBQUssQ0FBQ1csZUFBQSxDQUFBVSxNQUFNLENBQUNDLFNBQVMsQ0FBQztjQUN2QixLQUFLLENBQUNDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2NBQ3BDLElBQUksQ0FBQyxDQUFBdkIsT0FBUSxHQUFHQSxPQUFPO1lBQ3hCO1lBRUEsTUFBTUksSUFBSUEsQ0FBQ29CLFdBQVcsRUFBRVIsVUFBVTtjQUNqQyxNQUFNLEtBQUssQ0FBQ1osSUFBSSxDQUFDb0IsV0FBVyxFQUFFUixVQUFVLENBQUM7Y0FFekMsSUFBSSxJQUFJLENBQUNTLEtBQUssQ0FBQ0MsSUFBSSxFQUFFQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxDQUFBYixJQUFLLEdBQUcsVUFBVTs7Y0FFeEIsSUFBSSxDQUFDYyxZQUFZLEVBQUU7WUFDcEI7WUFFQSxNQUFNQyxRQUFRQSxDQUFDQyxPQUFPLEVBQUVkLFVBQVU7Y0FDakMsS0FBSyxDQUFDYSxRQUFRLENBQUNDLE9BQU8sRUFBRWQsVUFBVSxDQUFDO2NBQ25DLElBQUksQ0FBQyxDQUFBRyxPQUFRLEdBQUdXLE9BQU87Y0FDdkIsSUFBSSxDQUFDRixZQUFZLEVBQUU7WUFDcEI7WUFFQUcsT0FBT0EsQ0FBQ0MsS0FBMEI7Y0FDakMsSUFBSSxDQUFDLENBQUFsQixJQUFLLEdBQUdrQixLQUFLO2NBQ2xCLElBQUksQ0FBQ0osWUFBWSxFQUFFO1lBQ3BCO1lBRUFLLFVBQVVBLENBQUE7Y0FDVCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ2xCO1lBRUFDLE9BQU8sR0FBRyxNQUFPQyxJQUFpQyxJQUFJO2NBQ3JELElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdGLElBQUk7Z0JBQ3ZCLE1BQU1HLEtBQUssR0FHUDtrQkFDSEMsTUFBTSxFQUFFO29CQUNQSixJQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFBSTtvQkFDZnBCLFVBQVUsRUFBRSxJQUFJLENBQUNBLFVBQVU7b0JBQzNCeUIsU0FBUyxFQUFFO21CQUNYO2tCQUNEQyxJQUFJLEVBQUU7aUJBQ047Z0JBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQTFDLE9BQVEsRUFBRXVDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDVixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUFYLE9BQVEsQ0FBQyxLQUNuRG9CLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRyxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZO2dCQUNsRCxNQUFNLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ1UsT0FBTyxDQUFDSSxLQUFLLENBQUM7Z0JBRS9CLE1BQU0sSUFBSSxDQUFDZCxLQUFLLENBQUNyQixJQUFJLEVBQUU7Z0JBRXZCLElBQUksQ0FBQyxDQUFBVSxJQUFLLEdBQUcsVUFBVTtnQkFDdkIsSUFBSSxDQUFDOEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztlQUN0QixDQUFDLE9BQU9WLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUNBLEtBQUssR0FBRyxJQUFJLENBQUNXLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPO2dCQUN0QyxNQUFNYixLQUFLO2VBQ1gsU0FBUztnQkFDVGMsVUFBVSxDQUFDLE1BQUs7a0JBQ2YsSUFBSSxDQUFDWCxRQUFRLEdBQUcsS0FBSztnQkFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQzs7WUFFVixDQUFDOztVQUNENUIsT0FBQSxDQUFBYixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEhELElBQUFxRCxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQThELFFBQUEsR0FBQTlELE9BQUE7VUFDQSxJQUFBK0QsTUFBQSxHQUFBL0QsT0FBQTtVQUNBLElBQUFnRSxNQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFFTSxTQUFVa0UsUUFBUUEsQ0FBQTtZQUN2QixNQUFNO2NBQUU1RCxLQUFLO2NBQUVtRDtZQUFLLENBQUUsR0FBRyxJQUFBSyxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzNDLE1BQU1DLFFBQVEsR0FBRzlELEtBQUssQ0FBQytCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU04QixJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRCxRQUFRLENBQUNHLFVBQVUsQ0FBQztZQUM3QyxNQUFNO2NBQUVyQjtZQUFXLENBQUUsR0FBRzVDLEtBQUs7WUFDN0IsTUFBTWtFLEdBQUcsR0FBR3RCLFdBQVcsR0FDcEJBLFdBQVcsQ0FBQ3VCLFVBQVUsR0FDdEIsR0FBR1IsUUFBQSxDQUFBUyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxHQUFHdEUsS0FBSyxDQUFDK0IsS0FBSyxDQUFDQyxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NDLE9BQU8sRUFBRTtZQUNwRUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFUCxHQUFHLENBQUM7WUFDcEIsT0FDQ1gsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFxQixHQUN2Q3BCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkIsR0FDM0NwQixNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsYUFBS3ZCLEtBQUssQ0FBQ3lCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFNLEVBQ2pDdEIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUNoQixNQUFBLENBQUFvQixLQUFLO2NBQUNDLEdBQUcsRUFBRWI7WUFBRyxFQUFJLENBQ2QsRUFDTlgsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFPLEdBQ3JCcEIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLGFBQUt2QixLQUFLLENBQUN5QixRQUFRLENBQUNJLE1BQU0sQ0FBTSxFQUNoQ3pCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbENaLElBQUksQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLEVBQUVDLEtBQUssS0FBSTtjQUM3QixNQUFNQyxJQUFJLEdBQUd0QixRQUFRLENBQUNHLFVBQVUsQ0FBQ2lCLFFBQVEsQ0FBQztjQUUxQyxNQUFNRyxJQUFJLEdBQUcsU0FBU0QsSUFBSSxDQUFDRSxNQUFNLEVBQUU7Y0FDbkMsT0FDQy9CLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtnQkFBU2EsR0FBRyxFQUFFSCxJQUFJLENBQUNJLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQUVkLFNBQVMsRUFBQztjQUEyQixHQUM5RXBCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtnQkFBU0MsU0FBUyxFQUFDO2NBQWlDLEdBQ25EcEIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUNqQixNQUFBLENBQUFpQyxPQUFPO2dCQUFDZixTQUFTLEVBQUMsMkJBQTJCO2dCQUFDVSxJQUFJLEVBQUVBO2NBQUksRUFBSSxDQUNwRCxFQUNWOUIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLGtCQUNDbkIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLGlCQUNDbkIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUNqQixNQUFBLENBQUFpQyxPQUFPO2dCQUFDZixTQUFTLEVBQUMsc0NBQXNDO2dCQUFDVSxJQUFJLEVBQUVBO2NBQUksRUFBSSxFQUN4RTlCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxhQUFLVSxJQUFJLENBQUNJLElBQUksQ0FBTSxDQUNaLEVBQ1RqQyxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsWUFBSVUsSUFBSSxDQUFDdEIsUUFBUSxDQUFLLENBQ2IsQ0FDRDtZQUVaLENBQUMsQ0FBQyxDQUNHLENBQ0QsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBUCxNQUFBLEdBQUE3RCxPQUFBO1VBRUEsSUFBQWlHLFlBQUEsR0FBQWpHLE9BQUE7VUFDTztVQUFVLFNBQ1JrRyxLQUFLQSxDQUFBO1lBQ2IsT0FDQ3JDLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtjQUFPQyxTQUFTLEVBQUM7WUFBa0IsR0FDbENwQixNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ2lCLFlBQUEsQ0FBQUUsa0JBQWtCLE9BQUcsQ0FDZjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBLElBQUF0QyxNQUFBLEdBQUE3RCxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVW9HLFdBQVdBLENBQUM7WUFBRWY7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFO2NBQ1RQLE9BQU8sQ0FBQ3VCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztjQUNwQyxPQUFPLElBQUk7O1lBR1poQixHQUFHLEdBQUdpQixHQUFHLENBQUNDLGVBQWUsQ0FBQ2xCLEdBQUcsQ0FBQztZQUM5QixNQUFNbUIsR0FBRyxHQUFHM0MsTUFBQSxDQUFBRixPQUFLLENBQUM4QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCNUMsTUFBQSxDQUFBRixPQUFLLENBQUMrQyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxNQUFNLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztjQUMxQixNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2dCQUM3QixJQUFJRixNQUFNLENBQUNHLFFBQVEsS0FBS0MsUUFBUSxFQUFFO2dCQUVsQ0osTUFBTSxDQUFDSyxXQUFXLEdBQUcsS0FBSztnQkFDMUJMLE1BQU0sQ0FBQ00sWUFBWSxHQUFHLE1BQUs7a0JBQzFCTixNQUFNLENBQUNNLFlBQVksR0FBRyxJQUFJO2tCQUMxQk4sTUFBTSxDQUFDSyxXQUFXLEdBQUcsQ0FBQztnQkFDdkIsQ0FBQztjQUNGLENBQUM7Y0FDREwsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRUMsWUFBWSxDQUFDO2NBRXZELE9BQU8sTUFBTVIsTUFBTSxDQUFDUyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRVAsZ0JBQWdCLENBQUM7WUFDNUUsQ0FBQyxFQUFFLENBQUN4QixHQUFHLENBQUMsQ0FBQztZQUVULElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUVyQixPQUNDeEIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCcEIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBO2NBQU9xQyxRQUFRO2NBQUNDLE9BQU8sRUFBQztZQUFVLEdBQ2pDekQsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBO2NBQVFLLEdBQUcsRUFBRUEsR0FBRztjQUFFL0IsSUFBSSxFQUFDLFdBQVc7Y0FBQ2tELEdBQUcsRUFBRUE7WUFBRyxFQUFJLEUsbURBRXhDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQTNDLE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBdUgsR0FBQSxHQUFBdkgsT0FBQTtVQUNBLElBQUE4RCxRQUFBLEdBQUE5RCxPQUFBO1VBQ0EsSUFBQXdILFFBQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBeUgsU0FBQSxHQUFBekgsT0FBQTtVQUNBLElBQUEwSCxLQUFBLEdBQUExSCxPQUFBO1VBQ0EsSUFBQTJILEtBQUEsR0FBQTNILE9BQUE7VUFFTztVQUFVLFNBQ1JtRyxrQkFBa0JBLENBQUE7WUFDMUIsTUFBTTtjQUFFN0YsS0FBSztjQUFFbUQ7WUFBSyxDQUFFLEdBQUcsSUFBQUssUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNeUQsUUFBUSxHQUFHSixRQUFBLENBQUFLLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXO1lBQ2hELE1BQU1DLFlBQVksR0FBRzFILEtBQUssQ0FBQytCLEtBQUssQ0FBQzRGLFFBQVEsRUFBRSxDQUFDQyxJQUFJLEVBQUVuQyxPQUFPLENBQUMsSUFBSSxFQUFFNkIsUUFBUSxDQUFDO1lBRXpFLE1BQU1PLElBQUksR0FBR0EsQ0FBQztjQUFFekM7WUFBSSxDQUFFLEtBQUk7Y0FDekIsT0FDQzdCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtnQkFBS0MsU0FBUyxFQUFDO2NBQWtCLEdBQ2hDcEIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLGFBQUtVLElBQUksQ0FBQ0ksSUFBSSxDQUFNLEVBQ3BCakMsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLGVBQU9VLElBQUksQ0FBQzBDLE9BQU8sQ0FBUSxDQUN0QjtZQUVSLENBQUM7WUFDRCxPQUNDdkUsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUFuQixNQUFBLENBQUFGLE9BQUEsQ0FBQTBFLFFBQUEsUUFDQ3hFLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDdUMsR0FBQSxDQUFBZSxXQUFXO2NBQ1hyRCxTQUFTLEVBQUMsNkJBQTZCO2NBQ3ZDSSxHQUFHLEVBQUUvRSxLQUFLLENBQUMrQixLQUFLLENBQUN3QyxPQUFPO2NBQ3hCdkIsSUFBSSxFQUFFaEQsS0FBSyxDQUFDK0IsS0FBSyxDQUFDaUIsSUFBSTtjQUN0QmlGLE1BQU0sRUFBQztZQUFVLEVBQ2hCLEVBRUYxRSxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JwQixNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQzJDLEtBQUEsQ0FBQWEsYUFBYTtjQUFDQyxNQUFNLEVBQUU7WUFBQyxHQUN2QjVFLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDMkMsS0FBQSxDQUFBZSxJQUFJO2NBQUN6RCxTQUFTLEVBQUM7WUFBWSxHQUMzQnBCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDMkMsS0FBQSxDQUFBZ0IsR0FBRyxRQUFFbEYsS0FBSyxDQUFDbUYsUUFBUSxDQUFPLEVBQzNCL0UsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUMyQyxLQUFBLENBQUFnQixHQUFHLFFBQUVsRixLQUFLLENBQUNvRixRQUFRLENBQU8sQ0FDckIsRUFDUGhGLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDMkMsS0FBQSxDQUFBbUIsS0FBSztjQUFDN0QsU0FBUyxFQUFDO1lBQWtCLEdBQ2xDcEIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUN5QyxTQUFBLENBQUFzQixRQUFRO2NBQUM1RCxPQUFPLEVBQUU2QztZQUFZLEVBQUksRUFFbkNuRSxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsY0FDQ25CLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDMEMsS0FBQSxDQUFBc0IsSUFBSTtjQUNKQyxFQUFFLEVBQUMsS0FBSztjQUNSaEUsU0FBUyxFQUFDLGVBQWU7Y0FDekJpRSxLQUFLLEVBQUU1SSxLQUFLLENBQUMrQixLQUFLLENBQUM0RixRQUFRLEVBQUUsQ0FBQ1ksUUFBUTtjQUN0Q00sT0FBTyxFQUFFaEI7WUFBSSxFQUNaLENBQ0csQ0FDQyxDQUNPLENBQ1gsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBdEUsTUFBQSxHQUFBN0QsT0FBQTtVQVVPLE1BQU1vSixhQUFhLEdBQUEvSCxPQUFBLENBQUErSCxhQUFBLEdBQUd2RixNQUFBLENBQUFGLE9BQUssQ0FBQzBGLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU1sRixnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFGLE9BQUssQ0FBQzJGLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUMvSCxPQUFBLENBQUE4QyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYdEUsSUFBQW9ELEdBQUEsR0FBQXZILE9BQUE7VUFDQSxJQUFBc0IsS0FBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUE2RCxNQUFBLEdBQUE3RCxPQUFBO1VBRUEsSUFBQXVKLFdBQUEsR0FBQXZKLE9BQUE7VUFFQSxJQUFBd0osTUFBQSxHQUFBeEosT0FBQTtVQUVBLElBQUF5SixTQUFBLEdBQUF6SixPQUFBO1VBQ0EsSUFBQTBKLEtBQUEsR0FBQTFKLE9BQUE7VUFDQSxJQUFBMkgsS0FBQSxHQUFBM0gsT0FBQTtVQUVPO1VBQVUsU0FDUjJKLFdBQVdBLENBQUM7WUFBRXJKO1VBQUssQ0FBMkI7WUFDdEQsTUFBTW9CLElBQUksR0FBRyxDQUFDLENBQUNwQixLQUFLLENBQUMrQixLQUFLLEVBQUVDLElBQUksR0FBRyxVQUFVLEdBQUcsTUFBTTtZQUN0RCxNQUFNc0gsR0FBRyxHQUFHLG1DQUFtQ2xJLElBQUksS0FBSyxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsRUFBRSxFQUFFO1lBQzVGLE9BQ0NtQyxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3VDLEdBQUEsQ0FBQXNDLGFBQWE7Y0FBQzVFLFNBQVMsRUFBQztZQUF5RCxHQUNqRnBCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDMUQsS0FBQSxDQUFBd0ksY0FBYztjQUFDQyxLQUFLLEVBQUV6SixLQUFLLENBQUMrQixLQUFLLENBQUMwSCxLQUFLO2NBQUVwRSxJQUFJLEVBQUVyRixLQUFLLENBQUMrQixLQUFLLENBQUNpQixJQUFJO2NBQUVBLElBQUksRUFBRWhELEtBQUssQ0FBQytCLEtBQUssQ0FBQ2lCO1lBQUksRUFBSSxFQUU1Rk8sTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE0QyxHQUMxRHBCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDd0UsTUFBQSxDQUFBdEQsS0FBSyxPQUFHLENBQ0osRUFDTnJDLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUUyRTtZQUFHLEdBQ2xCL0YsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUMyQyxLQUFBLENBQUFxQyxVQUFVO2NBQUNDLFFBQVEsRUFBRTNKLEtBQUssQ0FBQ29CLElBQUksS0FBSyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUM7Y0FBRXdJLFNBQVMsRUFBRSxDQUFDLENBQUM1SixLQUFLLENBQUMrQixLQUFLLENBQUNDO1lBQUksRUFBSSxFQUUxRnVCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDdUUsV0FBQSxDQUFBWSxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRTlKLEtBQUssQ0FBQ29CLElBQUksS0FBSyxVQUFVO2NBQ3BDMkksT0FBTztjQUNQQyxPQUFPLEVBQUU7Z0JBQ1JDLElBQUksRUFBRTFHLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDeUUsU0FBQSxDQUFBdkYsUUFBUSxPQUFHO2dCQUNsQnNHLEtBQUssRUFBRTNHLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDMEUsS0FBQSxDQUFBZSxRQUFROztZQUNoQixFQUNBLENBQ0csQ0FDUztVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQTVHLE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBK0QsTUFBQSxHQUFBL0QsT0FBQTtVQUdBLElBQUEwSyxZQUFBLEdBQUExSyxPQUFBO1VBTU8sTUFBTTJLLGdCQUFnQixHQUFvQ0EsQ0FBQztZQUFFQyxPQUFPO1lBQUVDO1VBQVcsQ0FBRSxLQUFJO1lBQzdGLE1BQU07Y0FBRUMsVUFBVTtjQUFFQztZQUFXLENBQUUsR0FBRyxJQUFBTCxZQUFBLENBQUFNLFdBQVcsRUFBYTtjQUMzREMsTUFBTSxFQUFFLFNBQVM7Y0FDakJDLFVBQVUsRUFBRSxDQUFDO2dCQUFFcEYsSUFBSSxFQUFFLE1BQU07Z0JBQUV3RSxPQUFPLEVBQUU7a0JBQUVhLE9BQU8sRUFBRTtnQkFBQztjQUFFLENBQUUsQ0FBQztjQUN2REMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDO2NBQ3JCQyxNQUFNLEVBQUdDLEtBQW1CLElBQUk7Z0JBQy9CeEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFdUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7a0JBQ3JCWCxPQUFPLENBQUNVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FFbkI7YUFDQSxDQUFDO1lBRUYsT0FDQ3pILE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtjQUFLd0IsR0FBRyxFQUFFc0UsVUFBd0Q7Y0FBRTdGLFNBQVMsRUFBQztZQUEwQixHQUN2R3BCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUMsd0JBQXdCO2NBQUN1QixHQUFHLEVBQUV1RTtZQUF5RCxHQUNyR2xILE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxjQUNDbkIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUNqQixNQUFBLENBQUFpQyxPQUFPO2NBQUNMLElBQUksRUFBQztZQUFRLEVBQUcsRUFDeEJrRixXQUFXLENBQ1AsQ0FDRCxDQUNEO1VBRVIsQ0FBQztVQUFDeEosT0FBQSxDQUFBc0osZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNGLElBQUFhLE1BQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBdUgsR0FBQSxHQUFBdkgsT0FBQTtVQUNBLElBQUEwSixLQUFBLEdBQUExSixPQUFBO1VBQ0EsSUFBQTZELE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBOEQsUUFBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUF5TCxpQkFBQSxHQUFBekwsT0FBQTtVQUNBLElBQUF1SixXQUFBLEdBQUF2SixPQUFBO1VBQ0EsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBK0QsTUFBQSxHQUFBL0QsT0FBQTtVQUVNLFNBQVV5SyxRQUFRQSxDQUFBO1lBQ3ZCLE1BQU07Y0FBRW5LO1lBQUssQ0FBRSxHQUFHLElBQUF3RCxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0sQ0FBQ25CLElBQUksRUFBRTRILE9BQU8sQ0FBQyxHQUFHL0csTUFBQSxDQUFBRixPQUFLLENBQUMrSCxRQUFRLENBQWEsSUFBSSxDQUFDO1lBQ3hELE1BQU0sQ0FBQ0MsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHL0gsTUFBQSxDQUFBRixPQUFLLENBQUMrSCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQzVJLEtBQUssRUFBRStJLFFBQVEsQ0FBQyxHQUFHaEksTUFBQSxDQUFBRixPQUFLLENBQUMrSCxRQUFRLENBQWdCLElBQUksQ0FBQztZQUM3RCxJQUFBRixNQUFBLENBQUFNLFFBQVEsRUFBQ3hMLEtBQUssRUFBRSxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBRXRELE1BQU15TCxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN2QkgsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBQ3pCLENBQUM7WUFFRCxNQUFNSSxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QixJQUFJO2dCQUNIMUwsS0FBSyxDQUFDeUMsT0FBTyxDQUFDQyxJQUFJLENBQUM7Z0JBQ25CK0ksVUFBVSxFQUFFO2VBQ1osQ0FBQyxPQUFPRSxDQUFDLEVBQUU7Z0JBQ1hKLFFBQVEsQ0FBQ3ZMLEtBQUssQ0FBQ21ELEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUM7O1lBRXRDLENBQUM7WUFFRCxNQUFNdUksUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBRXRCO2NBQ0EsSUFBSSxDQUFDOUwsS0FBSyxDQUFDK0wsVUFBVSxFQUFFO2dCQUN0QlQsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2dCQUN2Qjs7Y0FHREksU0FBUyxFQUFFO1lBQ1osQ0FBQztZQUVELE1BQU1NLFFBQVEsR0FBR2hNLEtBQUssQ0FBQzJDLFFBQVE7WUFDL0IsTUFBTXNKLFFBQVEsR0FBR0osS0FBSyxJQUFHO2NBQ3hCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QkQsS0FBSyxDQUFDSyxlQUFlLEVBQUU7Y0FDdkI1QixPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUVELE9BQ0MvRyxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQW5CLE1BQUEsQ0FBQUYsT0FBQSxDQUFBMEUsUUFBQSxRQUNDeEUsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUMwRSxLQUFBLENBQUErQyxJQUFJO2NBQUN4SCxTQUFTLEVBQUMsZ0JBQWdCO2NBQUNpSCxRQUFRLEVBQUVBO1lBQVEsR0FDakQ1TCxLQUFLLENBQUN3QyxLQUFLLElBQUllLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDdUMsR0FBQSxDQUFBbUYsYUFBYTtjQUFDNUosS0FBSyxFQUFFeEMsS0FBSyxDQUFDd0MsS0FBSztjQUFFNkosT0FBTyxFQUFDO1lBQU8sRUFBRyxFQUNyRTlJLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdENqQyxJQUFJLEdBQ0phLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMkIsR0FDekNwQixNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ2hCLE1BQUEsQ0FBQW9CLEtBQUs7Y0FBQ0MsR0FBRyxFQUFFckMsSUFBSSxDQUFDeUIsVUFBVSxJQUFJekIsSUFBSSxDQUFDcUMsR0FBRztjQUFFdUgsR0FBRyxFQUFDLGdCQUFnQjtjQUFDM0gsU0FBUyxFQUFDO1lBQWdCLEdBQ3ZGcEIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLHFCQUNDbkIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUNqQixNQUFBLENBQUE4SSxhQUFhO2NBQ2JsSCxJQUFJLEVBQUMsUUFBUTtjQUNibUgsT0FBTyxFQUFFUCxRQUFRO2NBQ2pCeEMsS0FBSyxFQUFFekosS0FBSyxDQUFDeU0sV0FBVyxDQUFDQyxPQUFPLENBQUNDO1lBQU0sRUFDdEMsQ0FDVSxDQUNOLENBQ0gsR0FFTnBKLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDeUcsaUJBQUEsQ0FBQWQsZ0JBQWdCO2NBQUNDLE9BQU8sRUFBRUEsT0FBTztjQUFFQyxXQUFXLEVBQUV2SyxLQUFLLENBQUNtRCxLQUFLLENBQUN5SixJQUFJLENBQUNyQztZQUFXLEVBQzdFLENBQ0ksRUFDTmhILE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBeUIsR0FDMUNwQixNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3VFLFdBQUEsQ0FBQTRELE1BQU07Y0FDTmxLLFFBQVEsRUFBRTNDLEtBQUssQ0FBQzJDLFFBQVE7Y0FDeEIwSixPQUFPLEVBQUMsU0FBUztjQUNqQkwsUUFBUSxFQUFFQSxRQUFRLElBQUksQ0FBQ3RKLElBQUksSUFBSTFDLEtBQUssQ0FBQzJDLFFBQVE7Y0FDN0NLLElBQUksRUFBQztZQUFRLEdBRVpoRCxLQUFLLENBQUNtRCxLQUFLLENBQUN5SixJQUFJLENBQUNFLE1BQU0sQ0FDaEIsQ0FDRCxDQUNILEVBQ056QixjQUFjLElBQ2Q5SCxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3VDLEdBQUEsQ0FBQThGLFVBQVU7Y0FDVjFNLElBQUksRUFBRWdMLGNBQWM7Y0FDcEIyQixPQUFPLEVBQUV2QixVQUFVO2NBQ25CZ0IsV0FBVyxFQUFFek0sS0FBSyxDQUFDeU0sV0FBVztjQUM5QnpKLElBQUksRUFBQyxhQUFhO2NBQ2xCaUssU0FBUyxFQUFFak4sS0FBSyxDQUFDK0IsS0FBSyxDQUFDbUwsWUFBWTtjQUNuQ3hCLFNBQVMsRUFBRUE7WUFBUyxFQUVyQixDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUZBLElBQUF5QixLQUFBLEdBQUF6TixPQUFBO1VBQ0EsSUFBQXdMLE1BQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBME4sU0FBQSxHQUFBMU4sT0FBQTtVQW9CTyxXQXZCUDs7VUFtQkE7Ozs7VUFJaUIsU0FBVWdMLFdBQVdBLENBQWtDN0gsS0FBYTtZQUNwRixNQUFNMkgsVUFBVSxHQUFHMkMsS0FBSyxDQUFDaEgsTUFBTSxDQUEyQixJQUFJLENBQUM7WUFDL0QsTUFBTXNFLFdBQVcsR0FBRzBDLEtBQUssQ0FBQ2hILE1BQU0sQ0FBcUIsSUFBSSxDQUFDO1lBQzFELE1BQU07Y0FBRTRFO1lBQU0sQ0FBRSxHQUFHbEksS0FBSztZQUV4QjtZQUNBLE1BQU0sQ0FBQ3dLLFFBQVEsQ0FBQyxHQUFHRixLQUFLLENBQUMvQixRQUFRLENBQUMsTUFBTSxJQUFJZ0MsU0FBQSxDQUFBRSxRQUFRLENBQUN6SyxLQUF1QixDQUFDLENBQUM7WUFDOUUsTUFBTTdDLEtBQUssR0FBRyxJQUFBa0wsTUFBQSxDQUFBTSxRQUFRLEVBQUM2QixRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFLO2NBQ2pELElBQUl0QyxNQUFNLEVBQUVBLE1BQU0sQ0FBQy9LLEtBQUssQ0FBQ2dMLEtBQUssQ0FBQ3BDLEtBQVksQ0FBQztZQUM3QyxDQUFDLENBQUM7WUFFRjtZQUNBdUUsS0FBSyxDQUFDL0csU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDb0UsVUFBVSxDQUFDbEUsT0FBTyxFQUFFO2NBRXpCK0csUUFBUSxDQUFDRSxNQUFNLENBQUMvQyxVQUFVLENBQUNsRSxPQUFPLEVBQUVtRSxXQUFXLENBQUNuRSxPQUFPLElBQUlrSCxTQUFTLENBQUM7Y0FDckUsT0FBTyxNQUFNSCxRQUFRLENBQUNJLE9BQU8sRUFBRTtZQUNoQyxDQUFDLEVBQUUsQ0FBQ0osUUFBUSxDQUFDLENBQUM7WUFFZCxNQUFNSyxLQUFLLEdBQUcxTixLQUFLLENBQUNnTCxLQUFLLENBQUMyQyxLQUFLO1lBQy9CLE1BQU1DLFFBQVEsR0FBRzVOLEtBQUssQ0FBQ2dMLEtBQUssQ0FBQzJDLEtBQUssR0FBRyxDQUFDLEdBQUdFLElBQUksQ0FBQ0MsS0FBSyxDQUFFOU4sS0FBSyxDQUFDZ0wsS0FBSyxDQUFDcEMsS0FBSyxDQUFDcUMsTUFBTSxHQUFHakwsS0FBSyxDQUFDZ0wsS0FBSyxDQUFDMkMsS0FBSyxHQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFFN0csT0FBTztjQUNObkQsVUFBVTtjQUNWQyxXQUFXO2NBQ1g0QyxRQUFRO2NBQ1JyQyxLQUFLLEVBQUVoTCxLQUFLLENBQUNnTCxLQUFLLENBQUNwQyxLQUFZO2NBQy9CeEYsTUFBTSxFQUFFcEQsS0FBSyxDQUFDb0QsTUFBTTtjQUNwQjJLLFNBQVMsRUFBRS9OLEtBQUssQ0FBQzJDLFFBQVE7Y0FDekJpTCxRQUFRO2NBQ1JGO2FBQ0E7VUFDRjs7Ozs7Ozs7Ozs7VUN2REE7O1VBRUExSixNQUFBLENBQUFnSyxjQUFBLENBQUFqTixPQUFBO1lBQ0F1QixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTRJLE1BQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBdUgsR0FBQSxHQUFBdkgsT0FBQTtVQUNBLElBQUE2RCxNQUFBLEdBQUE3RCxPQUFBO1VBRUEsSUFBQThELFFBQUEsR0FBQTlELE9BQUE7VUFDQSxJQUFBdU8sUUFBQSxHQUFBdk8sT0FBQTtVQUNBLElBQUF3TyxPQUFBLEdBQUF4TyxPQUFBO1VBRU87VUFBVSxTQUNSVSxZQUFZQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDdkQsTUFBTSxDQUFDd0MsS0FBSyxFQUFFK0ksUUFBUSxDQUFDLEdBQUdoSSxNQUFBLENBQUFGLE9BQUssQ0FBQytILFFBQVEsQ0FBcUJvQyxTQUFTLENBQUM7WUFDdkUsTUFBTTtjQUFFNUUsS0FBSztjQUFFdUY7WUFBSyxDQUFFLEdBQUduTyxLQUFLO1lBQzlCLE1BQU07Y0FBRW1EO1lBQUssQ0FBRSxHQUFHbkQsS0FBSztZQUN2QixNQUFNb08sVUFBVSxHQUFHLElBQUFsRCxNQUFBLENBQUFtRCxhQUFhLEdBQUU7WUFDbEMsSUFBQW5ELE1BQUEsQ0FBQU0sUUFBUSxFQUFDeEwsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFM0IsSUFBSSxDQUFDbU8sS0FBSyxFQUFFLE9BQU81SyxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3VDLEdBQUEsQ0FBQXFILFVBQVU7Y0FBQzNMLFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFFakQsTUFBTTRMLFlBQVksR0FBRztjQUNwQnZPLEtBQUs7Y0FDTG1ELEtBQUs7Y0FDTFIsUUFBUSxFQUFFM0MsS0FBSyxDQUFDMkMsUUFBUTtjQUN4QmlHLEtBQUs7Y0FDTHBHLEtBQUs7Y0FDTCtJLFFBQVE7Y0FDUjZDO2FBQ0E7WUFFRCxNQUFNSSxLQUFLLEdBQUc7Y0FBRXhPO1lBQUssQ0FBRTtZQUV2QixPQUNDdUQsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLGNBQ0NuQixNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ2xCLFFBQUEsQ0FBQXNGLGFBQWEsQ0FBQzJGLFFBQVE7Y0FBQ25NLEtBQUssRUFBRWlNO1lBQVksR0FDekMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNHLFFBQVEsQ0FBQ04sVUFBVSxDQUFDLEdBQUc3SyxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3VKLFFBQUEsQ0FBQTVFLFdBQVc7Y0FBQSxHQUFLbUY7WUFBSyxFQUFJLEdBQUdqTCxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3dKLE9BQUEsQ0FBQVMsVUFBVTtjQUFBLEdBQUtIO1lBQUssRUFBSSxDQUNuRSxDQUNwQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBdkYsV0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUEySCxLQUFBLEdBQUEzSCxPQUFBO1VBQ0EsSUFBQTZELE1BQUEsR0FBQTdELE9BQUE7VUFFQSxJQUFBaUcsWUFBQSxHQUFBakcsT0FBQTtVQUVBLElBQUF5SixTQUFBLEdBQUF6SixPQUFBO1VBQ0EsSUFBQTBKLEtBQUEsR0FBQTFKLE9BQUE7VUFDQSxJQUFBa1AsTUFBQSxHQUFBbFAsT0FBQTtVQUNPO1VBQVUsU0FDUmlQLFVBQVVBLENBQUM7WUFBRTNPO1VBQUssQ0FBMkI7WUFDckQsTUFBTTtjQUFFb0I7WUFBSSxDQUFFLEdBQUdwQixLQUFLO1lBRXRCLE9BQ0N1RCxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWEsR0FDNUJwQixNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQzJDLEtBQUEsQ0FBQWEsYUFBYTtjQUFDdkQsU0FBUyxFQUFDLGVBQWU7Y0FBQ3dELE1BQU0sRUFBRTtZQUFDLEdBQ2pENUUsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUMyQyxLQUFBLENBQUFtQixLQUFLLFFBQ0xqRixNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsY0FDQ25CLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDa0ssTUFBQSxDQUFBbEYsVUFBVTtjQUFDQyxRQUFRLEVBQUV2SSxJQUFJLEtBQUssVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDO2NBQUV3SSxTQUFTLEVBQUUsQ0FBQyxDQUFDNUosS0FBSyxDQUFDK0IsS0FBSyxDQUFDQztZQUFJLEVBQUksRUFDcEZ1QixNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3VFLFdBQUEsQ0FBQVksb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUUxSSxJQUFJLEtBQUssVUFBVTtjQUM5QjJJLE9BQU87Y0FDUEMsT0FBTyxFQUFFO2dCQUNSQyxJQUFJLEVBQUUxRyxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQ3lFLFNBQUEsQ0FBQXZGLFFBQVEsT0FBRztnQkFDbEJzRyxLQUFLLEVBQUUzRyxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQzBFLEtBQUEsQ0FBQWUsUUFBUTs7WUFDaEIsRUFDQSxDQUNHLEVBRU41RyxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDcEIsTUFBQSxDQUFBRixPQUFBLENBQUFxQixhQUFBLENBQUNpQixZQUFBLENBQUFFLGtCQUFrQixPQUFHLENBQ2pCLENBQ0MsRUFDUnRDLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDMkMsS0FBQSxDQUFBZSxJQUFJLFFBQ0o3RSxNQUFBLENBQUFGLE9BQUEsQ0FBQXFCLGFBQUEsQ0FBQzJDLEtBQUEsQ0FBQWdCLEdBQUcsUUFBRXJJLEtBQUssQ0FBQ21ELEtBQUssQ0FBQzBMLElBQUksQ0FBQ2pLLFFBQVEsQ0FBTyxFQUN0Q3JCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBcUIsYUFBQSxDQUFDMkMsS0FBQSxDQUFBZ0IsR0FBRyxRQUFFckksS0FBSyxDQUFDbUQsS0FBSyxDQUFDMEwsSUFBSSxDQUFDdkcsUUFBUSxDQUFPLENBQ2hDLENBQ1EsQ0FDVjtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBNkUsS0FBQSxHQUFBek4sT0FBQTtVQUNBLElBQUF1SixXQUFBLEdBQUF2SixPQUFBO1VBQ0EsSUFBQThELFFBQUEsR0FBQTlELE9BQUE7VUFFTSxTQUFVZ0ssVUFBVUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDO1VBQVMsQ0FBRTtZQUNqRCxNQUFNO2NBQUV6RyxLQUFLO2NBQUVuRDtZQUFLLENBQUUsR0FBRyxJQUFBd0QsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNaUwsUUFBUSxHQUFHakQsS0FBSyxJQUFHO2NBQ3hCLE1BQU16SyxJQUFJLEdBQUd5SyxLQUFLLENBQUNrRCxhQUFhLENBQUNDLE9BQU8sQ0FBQzVOLElBQUk7Y0FDN0NwQixLQUFLLENBQUNxQyxPQUFPLENBQUNqQixJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUVELElBQUksQ0FBQ3dJLFNBQVMsRUFBRSxPQUFPLElBQUk7WUFFM0IsT0FDQ3VELEtBQUEsQ0FBQXpJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQThCLEdBQzVDd0ksS0FBQSxDQUFBekksYUFBQSxDQUFDdUUsV0FBQSxDQUFBZ0csV0FBVztjQUFDdEYsUUFBUSxFQUFFQSxRQUFRO2NBQUUwQyxPQUFPLEVBQUMsU0FBUztjQUFDeUMsUUFBUSxFQUFFQTtZQUFRLEdBQ3BFM0IsS0FBQSxDQUFBekksYUFBQSxDQUFDdUUsV0FBQSxDQUFBNEQsTUFBTTtjQUFBLGFBQVc7WUFBVSxHQUFFMUosS0FBSyxDQUFDMEwsSUFBSSxDQUFDakssUUFBUSxFLElBQVcsRUFDNUR1SSxLQUFBLENBQUF6SSxhQUFBLENBQUN1RSxXQUFBLENBQUE0RCxNQUFNO2NBQUEsYUFBVztZQUFRLEdBQUUxSixLQUFLLENBQUMwTCxJQUFJLENBQUNLLElBQUksRSxJQUFXLENBQ3pDLENBQ1Q7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==