System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/icons", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_10 = _aimpactAilearnApp042ModelWrapper;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_11 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_14 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_15 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Components) {
      dependency_16 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_17 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_18 = _pragmateUi100Beta7Form;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_19 = _aimpactMediaManager100Uploader;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/tabs', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/ailearn-app/components/hooks', dependency_17], ['pragmate-ui/form', dependency_18], ['@aimpact/media-manager/uploader', dependency_19]]);
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

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 4243087140,
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
          var _uploader = require("@aimpact/media-manager/uploader");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function FormView() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              triggerRef,
              dropZoneRef,
              publish,
              uploading,
              progress,
              errors,
              uploader,
              files
            } = (0, _uploader.useUploader)({
              name: 'file'
            });
            (0, _hooks.useStore)(store, ['fetching.changed']);
            const onSubmit = event => {
              event.preventDefault();
              store.publish(files[0]);
            };
            const disabled = store.fetching;
            const onDelete = () => uploader.clean();
            return _react.default.createElement(_form.Form, {
              className: "activity__form",
              onSubmit: onSubmit
            }, files.length > 0 ? _react.default.createElement(_image.Image, {
              src: files[0].src,
              alt: "uploaded image",
              className: "activity-image"
            }, _react.default.createElement("figcaption", null, _react.default.createElement(_icons.AppIconButton, {
              icon: "delete",
              onClick: onDelete,
              title: store.globalTexts.actions.delete
            }))) : _react.default.createElement("div", {
              ref: triggerRef
            }, _react.default.createElement("div", {
              className: "draganddrop__container",
              ref: dropZoneRef
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "upload"
            }), store.texts.form.placeholder)), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              variant: "primary",
              disabled: disabled || files.length === 0 || store.fetching,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidmlldyIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJwYXJhbXNVcmkiLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWN0aXZlUHJvcHMiLCJhc3NpZ21lbnRJZCIsIm1vZGVsIiwiZGF0YSIsImF0dGVtcHRzIiwidHJpZ2dlckV2ZW50IiwibG9hZFRlc3QiLCJkcmFmdElkIiwic2V0VmlldyIsInZhbHVlIiwicHVibGlzaCIsImZpbGUiLCJmZXRjaGluZyIsImN1cnJlbnRGaWxlIiwic3BlY3MiLCJwYXJhbXMiLCJtdWx0aXBhcnQiLCJ0eXBlIiwiYXNzaWdubWVudElkIiwidHJpZ2dlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9pbWFnZSIsIl93cmFwcGVyIiwiQW5hbHlzaXMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJmZWVkYmFjayIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwidXJsIiwic3JjIiwic2V0dGluZ3MiLCJhcGlzIiwiYWlsZWFybiIsInBpY3R1cmUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFuYWx5c2lzIiwicmVwb3J0IiwiSW1hZ2UiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJuYW1lIiwicmVwbGFjZSIsIkFwcEljb24iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwiSXRlbSIsInN1YmplY3QiLCJGcmFnbWVudCIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsImNvbnRlbnQiLCJMaXN0IiwiYXMiLCJpdGVtcyIsImNvbnRyb2wiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9hc2lkZSIsIl9hbmFseXNpcyIsIl9mb3JtIiwiRGVza3RvcFZpZXciLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiZmFsc2UiLCJGb3JtVmlldyIsIl9ob29rcyIsIl91cGxvYWRlciIsInRyaWdnZXJSZWYiLCJkcm9wWm9uZVJlZiIsInVwbG9hZGluZyIsInByb2dyZXNzIiwiZXJyb3JzIiwidXBsb2FkZXIiLCJmaWxlcyIsInVzZVVwbG9hZGVyIiwidXNlU3RvcmUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXNhYmxlZCIsIm9uRGVsZXRlIiwiY2xlYW4iLCJGb3JtIiwibGVuZ3RoIiwiYWx0IiwiQXBwSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJnbG9iYWxUZXh0cyIsImFjdGlvbnMiLCJkZWxldGUiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJCdXR0b24iLCJ2YXJpYW50Iiwic3VibWl0IiwiZGVmaW5lUHJvcGVydHkiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVhZHkiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsIlBhZ2VMb2FkZXIiLCJjb250ZXh0VmFsdWUiLCJwcm9wcyIsIlByb3ZpZGVyIiwiaW5jbHVkZXMiLCJNb2JpbGVWaWV3IiwiX3RhYnMyIiwidGFicyIsIlJlYWN0Iiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwicmVkbyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLFlBQVk7WUFDcEI7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxPQUFPLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU87Y0FDekQsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNGLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0U7WUFFQTs7O1lBR0FHLElBQUlBLENB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