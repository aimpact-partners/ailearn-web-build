System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/icons", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, ActivityView, MobileView, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactChatSdk154Session) {
      dependency_4 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp042EntitiesAssignmentsActivitiesBase) {
      dependency_5 = _aimpactAilearnApp042EntitiesAssignmentsActivitiesBase;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_9 = _aimpactAilearnApp042ModelWrapper;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_10 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi100Beta7List) {
      dependency_12 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_13 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_14 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Components) {
      dependency_15 = _pragmateUi100Beta7Components;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_16 = _aimpactMediaManager100Uploader;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_17 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_18 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/model/wrapper', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['pragmate-ui/list', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/collapsible', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/media-manager/uploader', dependency_16], ['@aimpact/ailearn-app/components/hooks', dependency_17], ['pragmate-ui/form', dependency_18]]);
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
        hash: 2981999962,
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
                this.#view = 'analysis';
                this.trigger('change');
              } catch (error) {
                console.log(error);
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
        hash: 901648287,
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
              className: "analysis__container one-column"
            }, _react.default.createElement("div", {
              className: "centered-column"
            }, _react.default.createElement("h6", null, texts.analysis.report), _react.default.createElement(_image.Image, {
              src: url
            }), _react.default.createElement("div", {
              className: "feedback__container assessment-analysis__container "
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
        hash: 2035414600,
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
            return _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container   main-chat-layout spoken-activity pt-0"
            }, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-pl"
            }, _react.default.createElement(_tabs.ButtonTabs, {
              selected: store.view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_aside.Aside, null)), _react.default.createElement("div", {
              className: "scrolleable-child no-p"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: store.view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_form.FormView, null)
              }
            }))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/form/drag-and-drop-image
      ************************************************/

      ims.set('./views/form/drag-and-drop-image', {
        hash: 3022734102,
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
              ref: triggerRef
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
        hash: 71493115,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormView = FormView;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
            (0, _hooks.useStore)(store, ['fetching.changed']);
            const [file, setFile] = _react.default.useState(null);
            const onSubmit = event => {
              event.preventDefault();
              if (file) store.publish(file);
            };
            const disabled = store.fetching;
            const onDelete = event => {
              event.preventDefault();
              event.stopPropagation();
              setFile(null);
            };
            return _react.default.createElement(_form.Form, {
              className: "activity__form",
              onSubmit: onSubmit
            }, file ? _react.default.createElement(_image.Image, {
              src: file.src,
              alt: "uploaded image",
              className: "activity-image"
            }, _react.default.createElement("figcaption", null, _react.default.createElement(_icons.AppIconButton, {
              icon: "delete",
              onClick: onDelete,
              title: store.globalTexts.actions.delete
            }))) : _react.default.createElement(_dragAndDropImage.DragAndDropImage, {
              setFile: setFile,
              placeholder: store.texts.form.placeholder
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              variant: "primary",
              disabled: disabled || !file || store.fetching,
              type: "submit"
            }, store.texts.form.submit)));
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
        hash: 3109952455,
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
              className: "flex-container space-between mt-15"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidmlldyIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJwYXJhbXNVcmkiLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWN0aXZlUHJvcHMiLCJhc3NpZ21lbnRJZCIsIm1vZGVsIiwiZGF0YSIsImF0dGVtcHRzIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwicHVibGlzaCIsImZpbGUiLCJmZXRjaGluZyIsImN1cnJlbnRGaWxlIiwic3BlY3MiLCJwYXJhbXMiLCJtdWx0aXBhcnQiLCJ0eXBlIiwiYXNzaWdubWVudElkIiwidHJpZ2dlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9pbWFnZSIsIl93cmFwcGVyIiwiQW5hbHlzaXMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJmZWVkYmFjayIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwidXJsIiwic3JjIiwic2V0dGluZ3MiLCJhcGlzIiwiYWlsZWFybiIsInBpY3R1cmUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFuYWx5c2lzIiwicmVwb3J0IiwiSW1hZ2UiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJuYW1lIiwicmVwbGFjZSIsIkFwcEljb24iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwiSXRlbSIsInN1YmplY3QiLCJGcmFnbWVudCIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsImNvbnRlbnQiLCJMaXN0IiwiYXMiLCJpdGVtcyIsImNvbnRyb2wiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9hc2lkZSIsIl9hbmFseXNpcyIsIl9mb3JtIiwiRGVza3RvcFZpZXciLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiZmFsc2UiLCJGb3JtVmlldyIsIl91cGxvYWRlciIsIkRyYWdBbmREcm9wSW1hZ2UiLCJzZXRGaWxlIiwicGxhY2Vob2xkZXIiLCJ0cmlnZ2VyUmVmIiwiZHJvcFpvbmVSZWYiLCJ1cGxvYWRlciIsImZpbGVzIiwidXNlVXBsb2FkZXIiLCJsZW5ndGgiLCJvbkRlbGV0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGVhbiIsIl9ob29rcyIsIl9kcmFnQW5kRHJvcEltYWdlIiwidXNlU3RvcmUiLCJ1c2VTdGF0ZSIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJGb3JtIiwiYWx0IiwiQXBwSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJnbG9iYWxUZXh0cyIsImFjdGlvbnMiLCJkZWxldGUiLCJmb3JtIiwiQnV0dG9uIiwidmFyaWFudCIsInN1Ym1pdCIsImRlZmluZVByb3BlcnR5IiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiUGFnZUxvYWRlciIsImNvbnRleHRWYWx1ZSIsInByb3BzIiwiUHJvdmlkZXIiLCJpbmNsdWRlcyIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwiUmVhY3QiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiQnV0dG9uR3JvdXAiLCJyZWRvIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2luZm9ybWF0aW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZHJhZy1hbmQtZHJvcC1pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9iaWxlLnRzeCIsIi90cy92aWV3cy90YWJzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxZQUFZO1lBQ3BCO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sT0FBTyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFPO2NBQ3pELElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxD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