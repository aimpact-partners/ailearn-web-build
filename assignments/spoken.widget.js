System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.2.1/main-layout.widget", "@aimpact/chat-sdk@1.3.0/chat-component.code", "@beyond-js/reactive@1.1.12/model", "@aimpact/media-manager@1.0.0/recorder", "@aimpact/chat-sdk@1.3.0/voice", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-app@0.2.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, View, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AudioPlayer: void 0,
    View: void 0,
    RecordingButton: void 0,
    PermissionsErrorModal: void 0,
    RecordingControl: void 0,
    PermissionsModal: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp021MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp021MainLayoutWidget;
    }, function (_aimpactChatSdk130ChatComponentCode) {
      dependency_7 = _aimpactChatSdk130ChatComponentCode;
    }, function (_beyondJsReactive1112Model) {
      dependency_8 = _beyondJsReactive1112Model;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_9 = _aimpactMediaManager100Recorder;
    }, function (_aimpactChatSdk130Voice) {
      dependency_10 = _aimpactChatSdk130Voice;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_11 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta6Components) {
      dependency_13 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_14 = _pragmateUi100Beta6Alert;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_aimpactChatSdk130Session) {
      dependency_16 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnApp021ComponentsUi) {
      dependency_17 = _aimpactAilearnApp021ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_19 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_20 = _pragmateUi100Beta6Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.1"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.1/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/ailearn-sdk/tracking', dependency_11], ['react', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.2.1/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.1/assignments/spoken.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3286864425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
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
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1476292979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _model = require("@beyond-js/reactive/model");
          var _recorder = require("@aimpact/media-manager/recorder");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #introduction;
            get introduction() {
              return this.#introduction;
            }
            #activityId;
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #items;
            get items() {
              return this.#items;
            }
            #audioManager = new _chatComponent.AudioManager(this);
            get audioManager() {
              return this.#audioManager;
            }
            #voice;
            get voice() {
              return this.#voice;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            constructor() {
              super();
              this.#voice = new _voice.Voice();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
              this.#recorder = new _recorder.Recorder();
            }
            async load(assignmentId, activityId) {
              try {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.load({
                  id: activityId
                });
                this.#model = activity;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                console.trace(e);
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
              }
            }
            sendSpoken = async audio => {
              try {
                const params = {
                  audio,
                  assignmentId: this.#assignmentId,
                  activityId: this.#activityId
                };
                // return;
                const response = await this.model.publishSpoken({
                  params,
                  type: 'spoken'
                });
                await this.#tracking.activities.load({
                  id: this.#activityId
                });
                return response;
              } catch (e) {
                super.ready = true;
                this.#found = false;
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/analysis/feedback
      *****************************************/

      ims.set('./views/analysis/feedback', {
        hash: 1890784375,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Feedback = Feedback;
          var _react = require("react");
          var _context = require("../context");
          function Feedback() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const keys = Object.keys(store.model.data);
            return _react.default.createElement(_react.default.Fragment, null, keys.map((property, index) => {
              const item = store.model.data[property];
              return _react.default.createElement("article", {
                key: item.name.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container"
              }, item.icon), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.name)), _react.default.createElement("p", null, item.feedback)));
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 414190317,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _feedback = require("./feedback");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          var _tabs = require("../tabs");
          function Analysis() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement(_tabs.ButtonTabs, {
              available: true
            }), _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "activity__info"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })), _react.default.createElement(_feedback.Feedback, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/audio-player
      ************************************/

      ims.set('./views/audio-player', {
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

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3296568220,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSpokenContext = exports.SpokenContext = void 0;
          var _react = require("react");
          const SpokenContext = exports.SpokenContext = _react.default.createContext({});
          const useSpokenContext = () => _react.default.useContext(SpokenContext);
          exports.useSpokenContext = useSpokenContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 3193748728,
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
        hash: 1940233581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _analysis = require("./analysis");
          var _recording = require("./recording");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [view, setView] = _react.default.useState(!!store.model?.data ? 'analysis' : 'recording');
            const [recording, setRecording] = _react.default.useState(false);
            const [sending, setSending] = _react.default.useState(false);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setView(!!store.model?.data ? 'analysis' : 'recording');
            });
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              store,
              recorder: store.recorder,
              recording,
              setRecording,
              texts,
              fetching: store.fetching,
              items,
              audio: store.recorder.audio,
              setView,
              sending,
              view,
              setSending,
              onSubmit: event => {
                event.preventDefault();
                return;
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement(_context.SpokenContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: "spoken",
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_analysis.Analysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/button
      ****************************************/

      ims.set('./views/recording/button', {
        hash: 2375701035,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          var _context = require("../context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _errorModal = require("./error-modal");
          /*bundle*/ //@ts-ignore

          const RecordingButton = ({
            disabled,
            action,
            setAction
          }) => {
            const {
              texts,
              recorder,
              recording,
              setRecording,
              audio
            } = (0, _context.useSpokenContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)(false);
            const icon = recording ? 'stop' : 'mic';
            const showSend = !recording && audio;
            const message = !recording ? showSend ? 'redo' : 'record' : 'stop';
            const [hasPermission, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const onRecord = async () => {
              try {
                await recorder.record();
                setRecording(!recording);
                setAction('start');
              } catch (e) {
                setError(true);
              }
            };
            const playAction = async event => {
              try {
                setFetching(true);
                if (!hasPermission || hasPermission !== 'true') {
                  setShowModal(true);
                  return;
                }
                onRecord();
              } catch (e) {
                console.error(e);
                setError(true);
              } finally {
                setFetching(false);
              }
            };
            const onStop = async event => {
              await recorder.stop();
              setRecording(false);
              setAction('reset');
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                setHasPermission('true');
              }).catch(error => {
                console.log('permisos no concedidos');
                setError(true);
              });
            };
            const ensurePlay = event => {
              event.preventDefault();
              _mainLayout.LayoutBroker.ensureCredits(playAction);
            };
            const onAction = action === 'start' ? onStop : ensurePlay;
            const onClose = event => {
              setFetching(false);
              setShowModal(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: icon,
              fetching: fetching,
              onClick: onAction,
              disabled: disabled || fetching
            }, texts[message]), _react.default.createElement(_modal.PermissionsModal, {
              show: showModal,
              onClose: onClose,
              onConfirm: getUserMedia
            }), _react.default.createElement(_errorModal.PermissionsErrorModal, {
              show: error,
              onClose: () => setError(false)
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/recording/error-modal
      *********************************************/

      ims.set('./views/recording/error-modal', {
        hash: 1218241359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/index
      ***************************************/

      ims.set('./views/recording/index', {
        hash: 2059236688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingControl = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _timer = require("../timer");
          var _context = require("../context");
          var _tabs = require("../tabs");
          var _result = require("./result");
          var _button = require("./button");
          /*bundle*/
          const RecordingControl = ({
            disabled = false
          }) => {
            const {
              texts,
              recording,
              sending,
              audio,
              store
            } = (0, _context.useSpokenContext)();
            const ref = _react.default.useRef(null);
            const showSend = !recording && audio;
            const cls = `recording-player__container${sending ? ' is-sending' : ''}`;
            const [action, setAction] = _react.default.useState('');
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            const buttonSpecs = {
              disabled,
              action,
              setAction
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tabs.ButtonTabs, {
              available: !!store.model.data
            }), _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "activity__info"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })), _react.default.createElement("div", {
              className: "recording__container flex-container flex-center"
            }, _react.default.createElement("section", {
              ref: ref,
              className: cls
            }, _react.default.createElement("div", {
              className: "recording-player__content"
            }, _react.default.createElement(_timer.Timer, {
              action: action
            }), _react.default.createElement(_button.RecordingButton, {
              ...buttonSpecs
            }), _react.default.createElement(_result.RecordingResult, {
              show: showSend
            })), sending && _react.default.createElement("div", {
              className: "sending__data"
            }, _react.default.createElement("h3", {
              className: "sending-message"
            }, texts.assessments.processMessages[0])))));
          };
          exports.RecordingControl = RecordingControl;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/modal
      ***************************************/

      ims.set('./views/recording/modal', {
        hash: 957625054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsModal = ({
            show,
            onClose,
            onConfirm
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const subtitle = texts.permissions.title;
            const description = texts.permissions.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true,
              onConfirm: onConfirm
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("span", {
              className: "intro__modal-text p2"
            }, texts.permissions.intro), _react.default.createElement("h3", null, subtitle)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsModal = PermissionsModal;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/result
      ****************************************/

      ims.set('./views/recording/result', {
        hash: 3648048102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingResult = RecordingResult;
          var _react = require("react");
          var _audioPlayer = require("../audio-player");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function RecordingResult({
            show
          }) {
            const {
              texts,
              audio,
              setView,
              store,
              setSending,
              sending
            } = (0, _context.useSpokenContext)();
            if (!show) return;
            const onSend = event => {
              event.preventDefault();
              setSending(true);
              store.sendSpoken(audio).then(response => {
                setView('analysis');
                setSending(false);
              });
              setTimeout(() => {
                globalThis.setTimeout(() => {
                  if (sending) setSending(false);
                }, 45000);
              }, 100);
            };
            return _react.default.createElement("div", {
              className: "recording__result-container"
            }, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: store.recorder.audio
            }), _react.default.createElement(_components.Button, {
              icon: "send",
              onClick: onSend,
              variant: "primary"
            }, texts.send));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/recording/use-recording
      ***********************************************/

      ims.set('./views/recording/use-recording', {
        hash: 2475814657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRecording = useRecording;
          var _react = require("react");
          var _context = require("../context");
          function useRecording() {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useSpokenContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            // const onPlay = async () => {
            // 	try {
            // 		const recordingState = !recording;
            // 		const permission = await recorder.hasPermissions();
            // 		if (permission.state !== 'granted') setShowModal(true);
            // 		await recorder.record();
            // 		setRecording(recordingState);
            // 		setAction('start');
            // 	} catch (e) {
            // 		console.error('error in on play', e);
            // 	}
            // };
            return {
              showModal,
              setShowModal
            };
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/tabs
      ****************************/

      ims.set('./views/tabs', {
        hash: 1246216958,
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
            available
          }) {
            const {
              texts,
              setView
            } = (0, _context.useSpokenContext)();
            const changeView = event => {
              setView(event.currentTarget.dataset.view);
            };
            if (!available) return null;
            return React.createElement("div", {
              className: "flex-container space-between"
            }, React.createElement("section", null, React.createElement(_components.ButtonGroup, {
              selected: 1,
              variant: "primary",
              onChange: changeView
            }, React.createElement(_components.Button, {
              "data-view": "analysis"
            }, texts.assessments.analysis, " "), React.createElement(_components.Button, {
              "data-view": "record"
            }, texts.assessments.redo, " "))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/timer/index
      ***********************************/

      ims.set('./views/timer/index', {
        hash: 3970133054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var _react = require("react");
          var _useTimer = require("./use-timer");
          // Timer.tsx

          function Timer({
            action
          }) {
            const isRunning = ['restart', 'start'].includes(action);
            const restart = ['restart', 'reset'].includes(action);
            const [hours, minutes, seconds, milliseconds] = (0, _useTimer.useTimer)(isRunning, restart, action === 'reset');
            const secRendered = seconds.toString().padStart(2, '0');
            const minutesRendered = minutes.toString().padStart(2, '0');
            return _react.default.createElement("div", {
              className: "timer__container"
            }, _react.default.createElement("span", null, `${minutesRendered}`), _react.default.createElement("span", {
              className: "timer__separator"
            }, ":"), _react.default.createElement("span", null, `${secRendered}`));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/timer/use-timer
      ***************************************/

      ims.set('./views/timer/use-timer', {
        hash: 1583638382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTimer = useTimer;
          var _react = require("react");
          // useTimer.ts

          const {
            useState,
            useEffect
          } = _react.default;
          function useTimer(isRunning, restart, reset = true) {
            const [time, setTime] = useState(0);
            useEffect(() => {
              let intervalId;
              if (reset) setTime(0);
              if (isRunning) {
                intervalId = setInterval(() => {
                  setTime(prevTime => {
                    return prevTime + 1;
                  });
                }, 10); // 10 ms interval for tracking milliseconds
              }
              return () => {
                clearInterval(intervalId);
              };
            }, [isRunning]);
            useEffect(() => {
              if (restart) {
                setTime(0);
              }
            }, [restart]);
            const milliseconds = time % 100; // 1000 ms in a second, but we're updating every 10 ms
            const seconds = Math.floor(time / 100 % 60); // Converted to seconds
            const minutes = Math.floor(time / 6000 % 60); // Converted to minutes
            const hours = Math.floor(time / 360000); // Converted to hours
            return [hours, minutes, seconds, milliseconds];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/recording/button",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/recording/error-modal",
        "from": "PermissionsErrorModal",
        "name": "PermissionsErrorModal"
      }, {
        "im": "./views/recording/index",
        "from": "RecordingControl",
        "name": "RecordingControl"
      }, {
        "im": "./views/recording/modal",
        "from": "PermissionsModal",
        "name": "PermissionsModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/audio-player').AudioPlayer : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/recording/button').RecordingButton : value);
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/recording/error-modal').PermissionsErrorModal : value);
        (require || prop === 'RecordingControl') && _export("RecordingControl", RecordingControl = require ? require('./views/recording/index').RecordingControl : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/recording/modal').PermissionsModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbWFpbkxheW91dCIsIl9jaGF0Q29tcG9uZW50IiwiX21vZGVsIiwiX3JlY29yZGVyIiwiX3ZvaWNlIiwiX3RyYWNraW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaW50cm9kdWN0aW9uIiwiYWN0aXZpdHlJZCIsImFzc2lnbm1lbnRJZCIsIml0ZW1zIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsImFzc2Vzc21lbnQiLCJwYXJhbXNVcmkiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJmb3VuZCIsImNhbkNvbnN1bWVDcmVkaXRzIiwidHJhY2tpbmciLCJjb25zdHJ1Y3RvciIsIlZvaWNlIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJSZWNvcmRlciIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsIlRyYWNraW5nIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwiaWQiLCJlIiwiY29uc29sZSIsInRyYWNlIiwic2VuZFNwb2tlbiIsImF1ZGlvIiwicGFyYW1zIiwicmVzcG9uc2UiLCJwdWJsaXNoU3Bva2VuIiwidHlwZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiRmVlZGJhY2siLCJ1c2VTcG9rZW5Db250ZXh0Iiwia2V5cyIsIk9iamVjdCIsImRhdGEiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibWFwIiwicHJvcGVydHkiLCJpbmRleCIsIml0ZW0iLCJrZXkiLCJuYW1lIiwicmVwbGFjZSIsImNsYXNzTmFtZSIsImljb24iLCJmZWVkYmFjayIsIl9hbGVydCIsIl9tYXJrZG93biIsIl9mZWVkYmFjayIsIl9zZXNzaW9uIiwiX3RhYnMiLCJBbmFseXNpcyIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhbGVydENvbnRlbnQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsInRhc2siLCJCdXR0b25UYWJzIiwiYXZhaWxhYmxlIiwiQWxlcnQiLCJNYXJrZG93biIsImNvbnRlbnQiLCJBdWRpb1BsYXllciIsInNyYyIsIndhcm4iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50Iiwib25Mb2FkZWRNZXRhZGF0YSIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmxvYWRlZGRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZGVmaW5lUHJvcGVydHkiLCJfdWkiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidmlldyIsInNldFZpZXciLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIlBhZ2VDb250YWluZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsImZhbHNlIiwiUmVjb3JkaW5nQ29udHJvbCIsIl9tb2RhbCIsIl9lcnJvck1vZGFsIiwiUmVjb3JkaW5nQnV0dG9uIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzZXRGZXRjaGluZyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImVycm9yIiwic2V0RXJyb3IiLCJzaG93U2VuZCIsIm1lc3NhZ2UiLCJoYXNQZXJtaXNzaW9uIiwic2V0SGFzUGVybWlzc2lvbiIsImdsb2JhbFRoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25SZWNvcmQiLCJyZWNvcmQiLCJwbGF5QWN0aW9uIiwib25TdG9wIiwic3RvcCIsImdldFVzZXJNZWRpYSIsImhhc1Blcm1pc3Npb25zIiwidGhlbiIsInNldEl0ZW0iLCJjYXRjaCIsImxvZyIsImVuc3VyZVBsYXkiLCJlbnN1cmVDcmVkaXRzIiwib25BY3Rpb24iLCJvbkNsb3NlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwiX2ljb25zIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwiY2VudGVyZWQiLCJJY29uIiwiX3RpbWVyIiwiX3Jlc3VsdCIsIl9idXR0b24iLCJjbHMiLCJidXR0b25TcGVjcyIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwiYXNzZXNzbWVudHMiLCJwcm9jZXNzTWVzc2FnZXMiLCJzdWJ0aXRsZSIsImludHJvIiwiX2F1ZGlvUGxheWVyIiwib25TZW5kIiwic2V0VGltZW91dCIsInNlbmQiLCJ1c2VSZWNvcmRpbmciLCJSZWFjdCIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkJ1dHRvbkdyb3VwIiwic2VsZWN0ZWQiLCJvbkNoYW5nZSIsImFuYWx5c2lzIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsImluY2x1ZGVzIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInJlc2V0IiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJNYXRoIiwiZmxvb3IiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmFseXNpcy9mZWVkYmFjay50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvYnV0dG9uLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvcmVzdWx0LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvdXNlLXJlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGFicy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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