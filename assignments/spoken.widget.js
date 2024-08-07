System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.3-test.03/main-layout.widget", "@aimpact/chat@1.0.2/chat-control.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/media-manager@0.0.1-beta.1/recorder", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/alert", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.1.3-test.03/components/ui", "@aimpact/chat@1.0.2/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, AudioPlayer, View, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp013Test03MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp013Test03MainLayoutWidget;
    }, function (_aimpactChat102ChatControlWidget) {
      dependency_7 = _aimpactChat102ChatControlWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_8 = _beyondJsReactive120Model;
    }, function (_aimpactMediaManager001Beta1Recorder) {
      dependency_9 = _aimpactMediaManager001Beta1Recorder;
    }, function (_aimpactChatSdk101Voice) {
      dependency_10 = _aimpactChatSdk101Voice;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_11 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_13 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_14 = _pragmateUi100Beta1Alert;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_aimpactChatSdk101Session) {
      dependency_16 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnApp013Test03ComponentsUi) {
      dependency_17 = _aimpactAilearnApp013Test03ComponentsUi;
    }, function (_aimpactChat102SharedComponents) {
      dependency_18 = _aimpactChat102SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_20 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_21 = _pragmateUi100Beta1Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.03"], ["@aimpact/ailearn-app", "0.1.3-test.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.03/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/ailearn-sdk/tracking', dependency_11], ['react', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/icons', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.03/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-test.03/assignments/spoken.widget');
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
        hash: 724565050,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _chatControl = require("@aimpact/chat/chat-control.widget");
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
                // console.log(1, params);
                // return;
                return this.model.publishSpoken({
                  params,
                  type: 'spoken'
                });
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
        hash: 1693468854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("@aimpact/chat/shared/components");
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
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbWFpbkxheW91dCIsIl9jaGF0Q29udHJvbCIsIl9tb2RlbCIsIl9yZWNvcmRlciIsIl92b2ljZSIsIl90cmFja2luZyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJhc3NpZ25tZW50SWQiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJhc3Nlc3NtZW50IiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiY29uc3RydWN0b3IiLCJWb2ljZSIsInNlc3Npb25JZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiUmVjb3JkZXIiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsImNvbnNvbGUiLCJ0cmFjZSIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInB1Ymxpc2hTcG9rZW4iLCJ0eXBlIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJGZWVkYmFjayIsInVzZVNwb2tlbkNvbnRleHQiLCJrZXlzIiwiT2JqZWN0IiwiZGF0YSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImtleSIsIm5hbWUiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwiaWNvbiIsImZlZWRiYWNrIiwiX2NvbXBvbmVudHMiLCJfYWxlcnQiLCJfbWFya2Rvd24iLCJfZmVlZGJhY2siLCJfc2Vzc2lvbiIsIkFuYWx5c2lzIiwiYXNzZXNzbWVudHMiLCJzZXRWaWV3IiwiY29udGVudCIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9uUmVkbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2aWV3cyIsImNoYW5nZVZpZXciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJ1c2VyTmFtZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRpc3BsYXlOYW1lIiwiYWxlcnRDb250ZW50IiwicmVzb3VyY2VzIiwic3BlY3MiLCJ0YXNrIiwiQnV0dG9uR3JvdXAiLCJzZWxlY3RlZCIsInZhcmlhbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiYW5hbHlzaXMiLCJyZWRvIiwiQWxlcnQiLCJNYXJrZG93biIsIkF1ZGlvUGxheWVyIiwic3JjIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJvbkxvYWRlZE1ldGFkYXRhIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVkZGF0YSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9scyIsInByZWxvYWQiLCJTcG9rZW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfYW5hbHlzaXMiLCJfcmVjb3JkaW5nIiwiX2hvb2tzIiwic2V0UmVhZHkiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIm9uU3VibWl0IiwiQ29udHJvbCIsIlJlY29yZGluZ0NvbnRyb2wiLCJQcm92aWRlciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJQYWdlQ29udGFpbmVyIiwiX21vZGFsIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZXJyb3IiLCJzZXRFcnJvciIsInNob3dTZW5kIiwibWVzc2FnZSIsImhhc1Blcm1pc3Npb24iLCJzZXRIYXNQZXJtaXNzaW9uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInJlY29yZCIsInBsYXlBY3Rpb24iLCJvblN0b3AiLCJzdG9wIiwiZ2V0VXNlck1lZGlhIiwiaGFzUGVybWlzc2lvbnMiLCJ0aGVuIiwic2V0SXRlbSIsImNhdGNoIiwibG9nIiwiZW5zdXJlUGxheSIsImVuc3VyZUNyZWRpdHMiLCJvbkFjdGlvbiIsIm9uQ2xvc2UiLCJQZXJtaXNzaW9uc01vZGFsIiwib25Db25maXJtIiwiUGVybWlzc2lvbnNFcnJvck1vZGFsIiwiX2ljb25zIiwiZGVzY3JpcHRpb24iLCJwZXJtaXNzaW9ucyIsIkFsZXJ0TW9kYWwiLCJvcGVuIiwiY2VudGVyZWQiLCJJY29uIiwiX3RpbWVyIiwiX3RhYnMiLCJfcmVzdWx0IiwiX2J1dHRvbiIsImNscyIsImJ1dHRvblNwZWNzIiwiQnV0dG9uVGFicyIsImF2YWlsYWJsZSIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc01lc3NhZ2VzIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsInNlbmQiLCJ1c2VSZWNvcmRpbmciLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy90YWJzLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvdXNlLXJlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJ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QUFPLEdBQUdrSyxXQUFXLEVBQUUsQ0FBUSxDQUMxQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBMUssTUFBQSxHQUFBbkUsT0FBQTtVQURBOztVQUVBLE1BQU07WUFBRWlHLFFBQVE7WUFBRWlDO1VBQVMsQ0FBRSxHQUFHL0QsTUFBQSxDQUFBTyxPQUFLO1VBRS9CLFNBQVVrSyxRQUFRQSxDQUFDUCxTQUFrQixFQUFFRSxPQUFnQixFQUFFVSxLQUFLLEdBQUcsSUFBSTtZQUMxRSxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdsSixRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRW5DaUMsU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJa0gsVUFBMEI7Y0FDOUIsSUFBSUgsS0FBSyxFQUFFRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2NBQ3JCLElBQUlkLFNBQVMsRUFBRTtnQkFDZGUsVUFBVSxHQUFHQyxXQUFXLENBQUMsTUFBSztrQkFDN0JGLE9BQU8sQ0FBQ0csUUFBUSxJQUFHO29CQUNsQixPQUFPQSxRQUFRLEdBQUcsQ0FBQztrQkFDcEIsQ0FBQyxDQUFDO2dCQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOztjQUdULE9BQU8sTUFBSztnQkFDWEMsYUFBYSxDQUFDSCxVQUFVLENBQUM7Y0FDMUIsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDZixTQUFTLENBQUMsQ0FBQztZQUVmbkcsU0FBUyxDQUFDLE1BQUs7Y0FDZCxJQUFJcUcsT0FBTyxFQUFFO2dCQUNaWSxPQUFPLENBQUMsQ0FBQyxDQUFDOztZQUVaLENBQUMsRUFBRSxDQUFDWixPQUFPLENBQUMsQ0FBQztZQUViLE1BQU1JLFlBQVksR0FBR08sSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU1SLE9BQU8sR0FBR2MsSUFBSSxDQUFDQyxLQUFLLENBQUVQLElBQUksR0FBRyxHQUFHLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNVCxPQUFPLEdBQUdlLElBQUksQ0FBQ0MsS0FBSyxDQUFFUCxJQUFJLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTVYsS0FBSyxHQUFHZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNQLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXpDLE9BQU8sQ0FBQ1YsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxDQUFDO1VBQy9DIiwiaWdub3JlTGlzdCI6W119