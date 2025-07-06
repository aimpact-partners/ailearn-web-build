System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/icons", "pragmate-ui@1.0.2/image", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.2/list", "pragmate-ui@1.0.2/tabs", "pragmate-ui@1.0.2/collapsible", "pragmate-ui@1.0.2/components", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.2/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, ActivityView, MobileView, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_4 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactChatSdk154Session) {
      dependency_5 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp042EntitiesAssignmentsActivitiesBase) {
      dependency_6 = _aimpactAilearnApp042EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_pragmateUi102Image) {
      dependency_9 = _pragmateUi102Image;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_10 = _aimpactAilearnApp042ModelWrapper;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_11 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi102List) {
      dependency_13 = _pragmateUi102List;
    }, function (_pragmateUi102Tabs) {
      dependency_14 = _pragmateUi102Tabs;
    }, function (_pragmateUi102Collapsible) {
      dependency_15 = _pragmateUi102Collapsible;
    }, function (_pragmateUi102Components) {
      dependency_16 = _pragmateUi102Components;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_17 = _aimpactMediaManager100Uploader;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_18 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi102Form) {
      dependency_19 = _pragmateUi102Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/assignments/hand-written",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/media-manager/uploader', dependency_17], ['@aimpact/ailearn-app/components/hooks', dependency_18], ['pragmate-ui/form', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-hand-written",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/assignments/hand-written.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/hand-written/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/assignments/hand-written.widget');
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
        hash: 2100494488,
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
        hash: 2254808007,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormView = FormView;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 105078781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidmlldyIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJwYXJhbXNVcmkiLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWN0aXZlUHJvcHMiLCJhc3NpZ21lbnRJZCIsIm1vZGVsIiwiZGF0YSIsImF0dGVtcHRzIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwiY2xlYW5FcnJvciIsImVycm9yIiwicHVibGlzaCIsImZpbGUiLCJmZXRjaGluZyIsImN1cnJlbnRGaWxlIiwic3BlY3MiLCJwYXJhbXMiLCJtdWx0aXBhcnQiLCJ0eXBlIiwiYXNzaWdubWVudElkIiwidHJpZ2dlciIsInRleHRzIiwiZXJyb3JzIiwiZGVmYXVsdCIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9pbWFnZSIsIl93cmFwcGVyIiwiQW5hbHlzaXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZmVlZGJhY2siLCJrZXlzIiwiT2JqZWN0IiwiYXNzZXNzbWVudCIsInVybCIsInNyYyIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJwaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFuYWx5c2lzIiwiY29udGVudCIsIkltYWdlIiwicmVwb3J0IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJpY29uIiwicG9pbnRzIiwia2V5IiwibmFtZSIsInJlcGxhY2UiLCJBcHBJY29uIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJBdWRpb1BsYXllciIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl91aSIsIl9zZXNzaW9uIiwiX21hcmtkb3duIiwiX2xpc3QiLCJfdGFicyIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhbGVydENvbnRlbnQiLCJnZXRTcGVjcyIsInRhc2siLCJJdGVtIiwic3ViamVjdCIsIkZyYWdtZW50IiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlRhYiIsImFjdGl2aXR5IiwiY3JpdGVyaWEiLCJQYW5lcyIsIk1hcmtkb3duIiwiTGlzdCIsImFzIiwiaXRlbXMiLCJjb250cm9sIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfYXNpZGUiLCJfYW5hbHlzaXMiLCJfZm9ybSIsIkRlc2t0b3BWaWV3IiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJCdXR0b25UYWJzIiwic2VsZWN0ZWQiLCJhdmFpbGFibGUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsImZhbHNlIiwiRm9ybVZpZXciLCJfdXBsb2FkZXIiLCJEcmFnQW5kRHJvcEltYWdlIiwic2V0RmlsZSIsInBsYWNlaG9sZGVyIiwidHJpZ2dlclJlZiIsImRyb3Bab25lUmVmIiwidXBsb2FkZXIiLCJmaWxlcyIsInVzZVVwbG9hZGVyIiwibGVuZ3RoIiwib25EZWxldGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xlYW4iLCJfaG9va3MiLCJfZHJhZ0FuZERyb3BJbWFnZSIsInVzZVN0YXRlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNldEVycm9yIiwidXNlU3RvcmUiLCJjbG9zZU1vZGFsIiwib25TdWNjZXNzIiwiZSIsIm9uU3VibWl0IiwiaGFzQ3JlZGl0cyIsImRpc2FibGVkIiwiRm9ybSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiYWx0IiwiQXBwSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJnbG9iYWxUZXh0cyIsImFjdGlvbnMiLCJkZWxldGUiLCJmb3JtIiwiQnV0dG9uIiwic3VibWl0IiwiQ29pbnNNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInVuZGVmaW5lZCIsInJlYWR5Iiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJQYWdlTG9hZGVyIiwiY29udGV4dFZhbHVlIiwicHJvcHMiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiTW9iaWxlVmlldyIsIl90YWJzMiIsInRhYnMiLCJSZWFjdCIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsInJlZG8iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmFseXNpcy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hc2lkZS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaW5mb3JtYXRpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3MvZm9ybS9kcmFnLWFuZC1kcm9wLWltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sWUFBWTtZQUNwQjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLE9BQU8sR0FBRyxJ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