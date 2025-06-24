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
        hash: 2577845012,
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
                const specs = {
                  params: {
                    file,
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
        hash: 1820322139,
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
            return _react.default.createElement("section", {
              className: "analysis__container one-column"
            }, _react.default.createElement("div", {
              className: "centered-column"
            }, _react.default.createElement("h6", null, texts.analysis.report), _react.default.createElement(_image.Image, {
              src: `${_wrapper.settings.apis.ailearn}${store.model.data.attempts[0].picture}`
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
        hash: 3579808420,
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
              store.publish(files[0].file);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidmlldyIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJwYXJhbXNVcmkiLCJhdWRpbyIsIm1vZGVsSWQiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImFzc2lnbWVudElkIiwibW9kZWwiLCJkYXRhIiwiYXR0ZW1wdHMiLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkVGVzdCIsImRyYWZ0SWQiLCJzZXRWaWV3IiwidmFsdWUiLCJwdWJsaXNoIiwiZmlsZSIsImZldGNoaW5nIiwic3BlY3MiLCJwYXJhbXMiLCJtdWx0aXBhcnQiLCJ0eXBlIiwiYXNzaWdubWVudElkIiwidHJpZ2dlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9pbWFnZSIsIl93cmFwcGVyIiwiQW5hbHlzaXMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJmZWVkYmFjayIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhbmFseXNpcyIsInJlcG9ydCIsIkltYWdlIiwic3JjIiwic2V0dGluZ3MiLCJhcGlzIiwiYWlsZWFybiIsInBpY3R1cmUiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJuYW1lIiwicmVwbGFjZSIsIkFwcEljb24iLCJfaW5mb3JtYXRpb24iLCJBc2lkZSIsIkNvbnRlbnRJbmZvcm1hdGlvbiIsIkF1ZGlvUGxheWVyIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJfdWkiLCJfc2Vzc2lvbiIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwiSXRlbSIsInN1YmplY3QiLCJGcmFnbWVudCIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJUYWIiLCJhY3Rpdml0eSIsImNyaXRlcmlhIiwiUGFuZXMiLCJNYXJrZG93biIsImNvbnRlbnQiLCJMaXN0IiwiYXMiLCJpdGVtcyIsImNvbnRyb2wiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9hc2lkZSIsIl9hbmFseXNpcyIsIl9mb3JtIiwiRGVza3RvcFZpZXciLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJ0cnVlIiwiZmFsc2UiLCJGb3JtVmlldyIsIl9ob29rcyIsIl91cGxvYWRlciIsInRyaWdnZXJSZWYiLCJkcm9wWm9uZVJlZiIsInVwbG9hZGluZyIsInByb2dyZXNzIiwiZXJyb3JzIiwidXBsb2FkZXIiLCJmaWxlcyIsInVzZVVwbG9hZGVyIiwidXNlU3RvcmUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXNhYmxlZCIsIm9uRGVsZXRlIiwiY2xlYW4iLCJGb3JtIiwibGVuZ3RoIiwiYWx0IiwiQXBwSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJnbG9iYWxUZXh0cyIsImFjdGlvbnMiLCJkZWxldGUiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJCdXR0b24iLCJ2YXJpYW50Iiwic3VibWl0IiwiZGVmaW5lUHJvcGVydHkiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVhZHkiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsIlBhZ2VMb2FkZXIiLCJjb250ZXh0VmFsdWUiLCJwcm9wcyIsIlByb3ZpZGVyIiwiaW5jbHVkZXMiLCJNb2JpbGVWaWV3IiwiX3RhYnMyIiwidGFicyIsIlJlYWN0Iiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwicmVkbyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FzaWRlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbmZvcm1hdGlvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLFlBQVk7WUFDcEI7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxPQUFPLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU87Y0FDekQsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNGLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0U7WUFFQTs7O1lBR0FHLElBQUlBLENBQUE7Y0FDSG5CLFdBQUEsQ0FBQW9CLFlBQVksQ0FBQ0MsS0FB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