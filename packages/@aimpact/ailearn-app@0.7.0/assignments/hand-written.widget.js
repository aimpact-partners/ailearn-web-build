System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.7.0/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/tabs", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/components", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/form", "@aimpact/ailearn-app@0.7.0/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, ActivityView, MobileView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    Aside: void 0,
    AudioPlayer: void 0,
    ContentInformation: void 0,
    DesktopView: void 0,
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
        hash: 3243401014,
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
        hash: 3816660460,
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
            const url = currentFile ? currentFile.src : `${_wrapper.settings.apis.ailearn}${store.model.data.attempts[0].picture}`;
            return _react.default.createElement("section", {
              className: "analysis__container mt-15"
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
        hash: 521184155,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DragAndDropImage = void 0;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _uploader = require("@aimpact/media-manager/uploader");
          const DragAndDropImage = ({
            setFile,
            placeholder
          }) => {
            const {
              triggerRef,
              dropZoneRef,
              uploader,
              files
            } = (0, _uploader.useUploader)({
              name: 'file'
            });
            _react.default.useEffect(() => {
              if (files && files.length > 0) {
                setFile(files[0]);
              }
            }, [files, setFile]);
            const onDelete = event => {
              event.preventDefault();
              event.stopPropagation();
              uploader.clean();
            };
            return _react.default.createElement("div", {
              ref: triggerRef,
              className: 'uploader-inner-container'
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
        hash: 1406897166,
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
              src: file.src,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidmlldyIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJwYXJhbXNVcmkiLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWN0aXZlUHJvcHMiLCJhc3NpZ21lbnRJZCIsIm1vZGVsIiwiZGF0YSIsImF0dGVtcHRzIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwiY2xlYW5FcnJvciIsImVycm9yIiwicHVibGlzaCIsImZpbGUiLCJmZXRjaGluZyIsImN1cnJlbnRGaWxlIiwic3BlY3MiLCJwYXJhbXMiLCJtdWx0aXBhcnQiLCJ0eXBlIiwiYXNzaWdubWVudElkIiwidHJpZ2dlciIsInRleHRzIiwiZXJyb3JzIiwiZGVmYXVsdCIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9pbWFnZSIsIl93cmFwcGVyIiwiQW5hbHlzaXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZmVlZGJhY2siLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsInVybCIsInNyYyIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJwaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFuYWx5c2lzIiwiY29udGVudCIsIkltYWdlIiwicmVwb3J0IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJpY29uIiwicG9pbnRzIiwia2V5IiwibmFtZSIsInJlcGxhY2UiLCJBcHBJY29uIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJBdWRpb1BsYXllciIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl91aSIsIl9zZXNzaW9uIiwiX21hcmtkb3duIiwiX2xpc3QiLCJfdGFicyIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhbGVydENvbnRlbnQiLCJnZXRTcGVjcyIsInRhc2siLCJJdGVtIiwic3ViamVjdCIsIkZyYWdtZW50IiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsImFjdGl2aXR5IiwiY3JpdGVyaWEiLCJQYW5lcyIsIk1hcmtkb3duIiwiTGlzdCIsImFzIiwiaXRlbXMiLCJjb250cm9sIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfYXNpZGUiLCJfYW5hbHlzaXMiLCJfZm9ybSIsIkRlc2t0b3BWaWV3IiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJCdXR0b25UYWJzIiwic2VsZWN0ZWQiLCJhdmFpbGFibGUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsImZhbHNlIiwiRm9ybVZpZXciLCJfdXBsb2FkZXIiLCJEcmFnQW5kRHJvcEltYWdlIiwic2V0RmlsZSIsInBsYWNlaG9sZGVyIiwidHJpZ2dlclJlZiIsImRyb3Bab25lUmVmIiwidXBsb2FkZXIiLCJmaWxlcyIsInVzZVVwbG9hZGVyIiwibGVuZ3RoIiwib25EZWxldGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xlYW4iLCJfaG9va3MiLCJfZHJhZ0FuZERyb3BJbWFnZSIsInVzZVN0YXRlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNldEVycm9yIiwidXNlU3RvcmUiLCJjbG9zZU1vZGFsIiwib25TdWNjZXNzIiwiZSIsIm9uU3VibWl0IiwiaGFzQ3JlZGl0cyIsImRpc2FibGVkIiwiRm9ybSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiYWx0IiwiQXBwSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJnbG9iYWxUZXh0cyIsImFjdGlvbnMiLCJkZWxldGUiLCJmb3JtIiwiQnV0dG9uIiwic3VibWl0IiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInVuZGVmaW5lZCIsInJlYWR5Iiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJQYWdlTG9hZGVyIiwiY29udGV4dFZhbHVlIiwicHJvcHMiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiTW9iaWxlVmlldyIsIl90YWJzMiIsInRhYnMiLCJSZWFjdCIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsInJlZG8iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hc2lkZS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaW5mb3JtYXRpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3MvZm9ybS9kcmFnLWFuZC1kcm9wLWltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxZQUFZO1lBQ3BCO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sT0FBTyxHQUFH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