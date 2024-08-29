System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.08/main-layout.widget", "@aimpact/chat-sdk@1.1.0/chat-control.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/media-manager@0.0.1-beta.1/recorder", "@aimpact/chat-sdk@1.1.0/voice", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/alert", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-app@0.1.6-dev.08/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev08MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp016Dev08MainLayoutWidget;
    }, function (_aimpactChatSdk110ChatControlWidget) {
      dependency_7 = _aimpactChatSdk110ChatControlWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_8 = _beyondJsReactive120Model;
    }, function (_aimpactMediaManager001Beta1Recorder) {
      dependency_9 = _aimpactMediaManager001Beta1Recorder;
    }, function (_aimpactChatSdk110Voice) {
      dependency_10 = _aimpactChatSdk110Voice;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_11 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta2Components) {
      dependency_13 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_14 = _pragmateUi100Beta2Alert;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_aimpactChatSdk110Session) {
      dependency_16 = _aimpactChatSdk110Session;
    }, function (_aimpactAilearnApp016Dev08ComponentsUi) {
      dependency_17 = _aimpactAilearnApp016Dev08ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_19 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_20 = _pragmateUi100Beta2Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.08"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/chat-sdk/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/ailearn-sdk/tracking', dependency_11], ['react', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.08/assignments/spoken.widget');
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
        hash: 3097285591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _chatControl = require("@aimpact/chat-sdk/chat-control.widget");
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
            #audioManager = new _chatControl.AudioManager(this);
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
        hash: 2639330932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _feedback = require("./feedback");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          function Analysis() {
            const {
              texts: {
                assessments: texts
              },
              store,
              setView
            } = (0, _context.useSpokenContext)();
            const [content, setContent] = _react.default.useState('feedback');
            const onRedo = event => {
              event.preventDefault();
              setView('recording');
            };
            const views = {
              feedback: _feedback.Feedback
            };
            const View = views[content];
            const changeView = event => {
              setContent(event.currentTarget.dataset.view);
            };
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.resources.specs.task?.replace('%1', userName);
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement("header", null, _react.default.createElement("div", {
              className: "flex-container space-between"
            }, _react.default.createElement("section", null, _react.default.createElement(_components.ButtonGroup, {
              selected: 0,
              variant: "primary"
            }, _react.default.createElement(_components.Button, {
              "data-view": "feedback",
              onClick: changeView
            }, texts.analysis), _react.default.createElement(_components.Button, {
              onClick: onRedo
            }, texts.redo))))), _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "activity__info"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            })), _react.default.createElement(View, null));
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2395922384,
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
              setSending,
              onSubmit: event => {
                event.preventDefault();
                return;
              }
            };
            const Control = view === 'analysis' ? _analysis.Analysis : _recording.RecordingControl;
            return _react.default.createElement("div", null, _react.default.createElement(_context.SpokenContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: "spoken",
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(Control, null))));
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
        hash: 153949891,
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
          var _tabs = require("./tabs");
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

      /**************************************
      INTERNAL MODULE: ./views/recording/tabs
      **************************************/

      ims.set('./views/recording/tabs', {
        hash: 2166838320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonTabs = ButtonTabs;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function ButtonTabs({
            available
          }) {
            const {
              texts,
              setView
            } = (0, _context.useSpokenContext)();
            const changeView = event => setView('analysis');
            if (!available) return null;
            return _react.default.createElement("div", {
              className: "flex-container space-between"
            }, _react.default.createElement("section", null, _react.default.createElement(_components.ButtonGroup, {
              selected: 1,
              variant: "primary"
            }, _react.default.createElement(_components.Button, {
              "data-view": "feedback",
              onClick: changeView
            }, texts.assessments.analysis), _react.default.createElement(_components.Button, null, texts.assessments.redo))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbWFpbkxheW91dCIsIl9jaGF0Q29udHJvbCIsIl9tb2RlbCIsIl9yZWNvcmRlciIsIl92b2ljZSIsIl90cmFja2luZyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJhc3NpZ25tZW50SWQiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJhc3Nlc3NtZW50IiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiY29uc3RydWN0b3IiLCJWb2ljZSIsInNlc3Npb25JZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiUmVjb3JkZXIiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsImNvbnNvbGUiLCJ0cmFjZSIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInJlc3BvbnNlIiwicHVibGlzaFNwb2tlbiIsInR5cGUiLCJfcmVhY3QiLCJfY29udGV4dCIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImtleXMiLCJPYmplY3QiLCJkYXRhIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwia2V5IiwibmFtZSIsInJlcGxhY2UiLCJjbGFzc05hbWUiLCJpY29uIiwiZmVlZGJhY2siLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIl9tYXJrZG93biIsIl9mZWVkYmFjayIsIl9zZXNzaW9uIiwiQW5hbHlzaXMiLCJhc3Nlc3NtZW50cyIsInNldFZpZXciLCJjb250ZW50Iiwic2V0Q29udGVudCIsInVzZVN0YXRlIiwib25SZWRvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidmlldyIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhbGVydENvbnRlbnQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsInRhc2siLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwidmFyaWFudCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJhbmFseXNpcyIsInJlZG8iLCJBbGVydCIsIk1hcmtkb3duIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfaG9va3MiLCJzZXRSZWFkeSIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwib25TdWJtaXQiLCJDb250cm9sIiwiUmVjb3JkaW5nQ29udHJvbCIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIlBhZ2VDb250YWluZXIiLCJfbW9kYWwiLCJfZXJyb3JNb2RhbCIsIlJlY29yZGluZ0J1dHRvbiIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJlcnJvciIsInNldEVycm9yIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwicmVjb3JkIiwicGxheUFjdGlvbiIsIm9uU3RvcCIsInN0b3AiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJlbnN1cmVQbGF5IiwiZW5zdXJlQ3JlZGl0cyIsIm9uQWN0aW9uIiwib25DbG9zZSIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJfaWNvbnMiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsIm9wZW4iLCJjZW50ZXJlZCIsIkljb24iLCJfdGltZXIiLCJfdGFicyIsIl9yZXN1bHQiLCJfYnV0dG9uIiwiY2xzIiwiYnV0dG9uU3BlY3MiLCJCdXR0b25UYWJzIiwiYXZhaWxhYmxlIiwiVGltZXIiLCJSZWNvcmRpbmdSZXN1bHQiLCJwcm9jZXNzTWVzc2FnZXMiLCJzdWJ0aXRsZSIsImludHJvIiwiX2F1ZGlvUGxheWVyIiwib25TZW5kIiwic2V0VGltZW91dCIsInNlbmQiLCJ1c2VSZWNvcmRpbmciLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy90YWJzLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvdXNlLXJlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMs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