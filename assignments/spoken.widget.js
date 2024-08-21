System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "@aimpact/chat@1.0.2/chat-control.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/media-manager@0.0.1-beta.1/recorder", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/alert", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "@aimpact/chat@1.0.2/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev04MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp016Dev04MainLayoutWidget;
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
    }, function (_pragmateUi100Beta2Components) {
      dependency_13 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_14 = _pragmateUi100Beta2Alert;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_aimpactChatSdk101Session) {
      dependency_16 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_17 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_aimpactChat102SharedComponents) {
      dependency_18 = _aimpactChat102SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_20 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_21 = _pragmateUi100Beta2Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@aimpact/chat/chat-control.widget', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/media-manager/recorder', dependency_9], ['@aimpact/chat-sdk/voice', dependency_10], ['@aimpact/ailearn-sdk/tracking', dependency_11], ['react', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/chat-sdk/session', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/icons', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/assignments/spoken.widget');
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
        hash: 1626848999,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfbWFpbkxheW91dCIsIl9jaGF0Q29udHJvbCIsIl9tb2RlbCIsIl9yZWNvcmRlciIsIl92b2ljZSIsIl90cmFja2luZyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImludHJvZHVjdGlvbiIsImFjdGl2aXR5SWQiLCJhc3NpZ25tZW50SWQiLCJpdGVtcyIsImF1ZGlvTWFuYWdlciIsIkF1ZGlvTWFuYWdlciIsInZvaWNlIiwicmVjb3JkZXIiLCJhc3Nlc3NtZW50IiwicGFyYW1zVXJpIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiY29uc3RydWN0b3IiLCJWb2ljZSIsInNlc3Npb25JZCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiUmVjb3JkZXIiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsImNvbnNvbGUiLCJ0cmFjZSIsInNlbmRTcG9rZW4iLCJhdWRpbyIsInBhcmFtcyIsInJlc3BvbnNlIiwicHVibGlzaFNwb2tlbiIsInR5cGUiLCJfcmVhY3QiLCJfY29udGV4dCIsIkZlZWRiYWNrIiwidXNlU3Bva2VuQ29udGV4dCIsImtleXMiLCJPYmplY3QiLCJkYXRhIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsInByb3BlcnR5IiwiaW5kZXgiLCJpdGVtIiwia2V5IiwibmFtZSIsInJlcGxhY2UiLCJjbGFzc05hbWUiLCJpY29uIiwiZmVlZGJhY2siLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIl9tYXJrZG93biIsIl9mZWVkYmFjayIsIl9zZXNzaW9uIiwiQW5hbHlzaXMiLCJhc3Nlc3NtZW50cyIsInNldFZpZXciLCJjb250ZW50Iiwic2V0Q29udGVudCIsInVzZVN0YXRlIiwib25SZWRvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZpZXdzIiwiY2hhbmdlVmlldyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidmlldyIsInVzZXJOYW1lIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJhbGVydENvbnRlbnQiLCJyZXNvdXJjZXMiLCJzcGVjcyIsInRhc2siLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwidmFyaWFudCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJhbmFseXNpcyIsInJlZG8iLCJBbGVydCIsIk1hcmtkb3duIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIlNwb2tlbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9hbmFseXNpcyIsIl9yZWNvcmRpbmciLCJfaG9va3MiLCJzZXRSZWFkeSIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwib25TdWJtaXQiLCJDb250cm9sIiwiUmVjb3JkaW5nQ29udHJvbCIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIlBhZ2VDb250YWluZXIiLCJfbW9kYWwiLCJfZXJyb3JNb2RhbCIsIlJlY29yZGluZ0J1dHRvbiIsImRpc2FibGVkIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2V0RmV0Y2hpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJlcnJvciIsInNldEVycm9yIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwiaGFzUGVybWlzc2lvbiIsInNldEhhc1Blcm1pc3Npb24iLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9uUmVjb3JkIiwicmVjb3JkIiwicGxheUFjdGlvbiIsIm9uU3RvcCIsInN0b3AiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJlbnN1cmVQbGF5IiwiZW5zdXJlQ3JlZGl0cyIsIm9uQWN0aW9uIiwib25DbG9zZSIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJfaWNvbnMiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsIm9wZW4iLCJjZW50ZXJlZCIsIkljb24iLCJfdGltZXIiLCJfdGFicyIsIl9yZXN1bHQiLCJfYnV0dG9uIiwiY2xzIiwiYnV0dG9uU3BlY3MiLCJCdXR0b25UYWJzIiwiYXZhaWxhYmxlIiwiVGltZXIiLCJSZWNvcmRpbmdSZXN1bHQiLCJwcm9jZXNzTWVzc2FnZXMiLCJzdWJ0aXRsZSIsImludHJvIiwiX2F1ZGlvUGxheWVyIiwib25TZW5kIiwic2V0VGltZW91dCIsInNlbmQiLCJ1c2VSZWNvcmRpbmciLCJfdXNlVGltZXIiLCJpc1J1bm5pbmciLCJpbmNsdWRlcyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9idXR0b24udHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9yZXN1bHQudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy90YWJzLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvdXNlLXJlY29yZGluZy50c3giLCIvdHMvdmlld3MvdGltZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL3VzZS10aW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJ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