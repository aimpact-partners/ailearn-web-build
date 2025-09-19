System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-app@0.6.1/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.6.1/i18n.ts", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/chat-sdk@1.5.5/wrapper", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "@aimpact/chat-sdk@1.5.5/chat-component.code", "gsap@3.13.0", "pragmate-ui@1.0.8/modal", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.8/chips", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.6.1/components/navbar-header.code", "pragmate-ui@1.0.8/drawer", "@radix-ui/react-select@2.2.6", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
  _export({
    LayoutBroker: void 0,
    Controller: void 0,
    Header: void 0,
    OverlayHeader: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnApp061WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp061WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp061I18nTs) {
      dependency_4 = _aimpactAilearnApp061I18nTs;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_6 = _beyondJsReact18Widgets114Base;
    }, function (_aimpactChatSdk155Core) {
      dependency_7 = _aimpactChatSdk155Core;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_8 = _aimpactChatSdk155Wrapper;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_9 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_10 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_11 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0112Texts) {
      dependency_12 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_13 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_15 = _aimpactChatSdk155ChatComponentCode;
    }, function (_gsap2) {
      dependency_16 = _gsap2;
    }, function (_pragmateUi108Modal) {
      dependency_17 = _pragmateUi108Modal;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_18 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi108Chips) {
      dependency_19 = _pragmateUi108Chips;
    }, function (_pragmateUi108Components) {
      dependency_20 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_21 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_22 = _aimpactAilearnApp061SharedHooks;
    }, function (_pragmateUi108Icons) {
      dependency_23 = _pragmateUi108Icons;
    }, function (_framerMotion2) {
      dependency_24 = _framerMotion2;
    }, function (_aimpactAilearnApp061ComponentsNavbarHeaderCode) {
      dependency_25 = _aimpactAilearnApp061ComponentsNavbarHeaderCode;
    }, function (_pragmateUi108Drawer) {
      dependency_26 = _pragmateUi108Drawer;
    }, function (_radixUiReactSelect) {
      dependency_27 = _radixUiReactSelect;
    }, function (_radixUiReactIcons) {
      dependency_28 = _radixUiReactIcons;
    }, function (_pragmateUi108Toast) {
      dependency_29 = _pragmateUi108Toast;
    }, function (_beyondJsKernel0112Styles) {
      dependency_30 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/react-18-widgets/base', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/http-suite/api', dependency_9], ['@aimpact/ailearn-sdk/startup', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@aimpact/ailearn-sdk/entities/articles', dependency_13], ['react', dependency_14], ['@aimpact/chat-sdk/chat-component.code', dependency_15], ['gsap', dependency_16], ['pragmate-ui/modal', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/chips', dependency_19], ['pragmate-ui/components', dependency_20], ['@aimpact/ailearn-app/components/ui', dependency_21], ['@aimpact/ailearn-app/shared/hooks', dependency_22], ['pragmate-ui/icons', dependency_23], ['framer-motion', dependency_24], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_25], ['pragmate-ui/drawer', dependency_26], ['@radix-ui/react-select', dependency_27], ['@radix-ui/react-icons', dependency_28], ['pragmate-ui/toast', dependency_29], ['@beyond-js/kernel/styles', dependency_30]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 4010195156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          var _routing = require("@beyond-js/kernel/routing");
          class Broker extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get hasCredits() {
              return this.#model?.credits?.total > 0;
            }
            #message;
            get message() {
              return this.#message;
            }
            get breadcrumb() {
              return _breadcrumb.breadcrumbStore;
            }
            #showCredits;
            get showCredits() {
              return this.#showCredits;
            }
            #showDrawer = false;
            get showDrawer() {
              return this.#showDrawer;
            }
            set showDrawer(value) {
              if (this.#showDrawer === value) return;
              this.#showDrawer = value;
              this.trigger('change');
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            /**
             * Let's check if the user can consume coins
             *
             * The coins are available in Drafts Models and Assignment Models
             */
            #canConsumeCredits;
            get canConsumeCredits() {
              return this.#model?.canConsumeCredits || this.#canConsumeCredits;
            }
            set canConsumeCredits(value) {
              if (this.#canConsumeCredits === value) return;
              this.#canConsumeCredits = value;
              this.trigger('change');
            }
            #previousPathname = _routing.routing.uri.pathname;
            constructor() {
              super({
                properties: ['title', 'backLink', 'overlay', 'force', 'refresh', 'showDrawer']
              });
              this.ensureCredits = this.ensureCredits.bind(this);
              _i18n.globalTexts.on('change', this.triggerEvent.bind(this));
              _routing.routing.on('change', () => {
                if (this.#previousPathname === _routing.routing.uri.pathname) return;
                this.#previousPathname = _routing.routing.uri.pathname;
                let exists = this.breadcrumb.items?.findIndex(item => item?.[1] === _routing.routing.uri.pathname);
                if (exists === -1) {
                  function findLastIndex(array, predicate) {
                    for (let i = array.length - 1; i >= 0; i--) {
                      if (predicate(array[i], i, array)) {
                        return i;
                      }
                    }
                    return -1;
                  }
                  const lastIndex = findLastIndex(this.breadcrumb.items, item => {
                    if (!item?.[1] || !Array.isArray(item?.[1])) return;
                    return !!item?.[1]?.includes(_routing.routing.uri.pathname);
                  });
                  if (lastIndex) {
                    const newItems = this.breadcrumb.items.slice(0, lastIndex + 1);
                    this.breadcrumb.set({
                      items: newItems
                    });
                    return;
                  }
                  this.breadcrumb.set({
                    items: []
                  });
                  return;
                }
                const newItems = this.breadcrumb.items?.slice(0, exists + 1);
                this.breadcrumb.set({
                  items: newItems
                });
              });
              globalThis.layout = this;
            }
            addModel(model, showCredits = true) {
              if (model.id !== undefined && model.id === this.#model?.id) return;
              this.#model = model;
              this.#showCredits = showCredits;
              this.#model.on('change', this.onListen.bind(this));
              this.trigger('change');
              this.trigger('model.changed');
              // logic for activities;
            }
            clearModel() {
              this.#model = undefined;
              this.#showCredits = false;
            }
            async onListen() {
              if (this.#showCredits === this.#model?.saved) {
                return;
              }
              this.#showCredits = this.#model?.saved;
              this.triggerEvent();
            }
            async ensureCredits(callback, ...specs) {
              // validation
              if (!this.#model) console.error('No model found');
              if (!this.hasCredits) {
                this.trigger('no.credits');
                return;
              }
              return callback(...specs);
            }
            showMessage(type, message) {
              this.#message = {
                type,
                message
              };
              this.trigger('show.message');
              globalThis.setTimeout(() => {
                this.#message = undefined;
              }, 2000);
            }
            clear() {
              this.#model = undefined;
              this.overlay = false;
              this.triggerEvent();
            }
            setTitle(title) {
              this.title = title;
            }
            onRefresh() {
              this.refresh();
            }
            set({
              breadcrumb,
              force = false,
              ...props
            }) {
              super.set({
                force,
                ...props
              });
              if (breadcrumb) {
                this.breadcrumb.set({
                  items: breadcrumb
                });
              }
              return {
                updated: true
              };
            }
          }
          exports.Broker = Broker;
          /*bundle */
          const LayoutBroker = exports.LayoutBroker = new Broker();
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 514040884,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _view = require("./view");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            //@ts-ignore
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _view.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./store/chat
      ****************************/

      ims.set('./store/chat', {
        hash: 63805112,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatStore = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          class ChatStore extends _model.ReactiveModel {
            #chat;
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.init();
            }
            get chat() {
              return this.#chat;
            }
            get ready() {
              return super.ready && this.#chat !== undefined;
            }
            async init() {
              // Wait for AppWrapper to be ready
              await _wrapper.AppWrapper.isReady;
              // Mark the store as ready (no chat instance needed initially)
              super.ready = true;
            }
            // Method to get chat messages if needed
            async getMessages() {
              if (!this.#chat) return [];
              return this.#chat.messages || [];
            }
            // Method to send a message if needed
            async sendMessage(message) {
              if (!this.#chat) return;
              // Implementation depends on the Chat class API
              // This is a placeholder for future implementation
            }
            // Cleanup method
            close() {
              if (this.#chat) {
                // Cleanup chat resources if needed
                this.#chat = undefined;
              }
            }
            // KB Chat methods
            async create(language, orgId) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const response = await this.#api.post('/kb/chat', {
                  language,
                  organizationId: orgId
                });
                if (!response.status) {
                  throw new Error('Failed to create KB chat');
                }
                // Crear instancia del chat con el ID retornado
                this.#chat = new _core.Chat({
                  id: response.data.id,
                  language: response.data.language.default
                });
                // Cargar el chat
                await this.#chat.loadAll({
                  id: response.data.id
                });
                // Trigger change event
                this.trigger('chat.loaded');
                return response.data;
              } catch (e) {
                console.error('Error creating KB chat:', e);
                throw e;
              }
            }
          }
          exports.ChatStore = ChatStore;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 90090003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _broker = require("../broker");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          var _chat = require("./chat");
          var _session = require("@aimpact/chat-sdk/session");
          var _articles = require("@aimpact/ailearn-sdk/entities/articles");
          class StoreManager extends _model.ReactiveModel {
            isStore;
            #broker;
            #chatStore;
            #kbCollection;
            #historyCleanup;
            get session() {
              return _session.sessionWrapper;
            }
            get user() {
              return this.session?.user;
            }
            get broker() {
              return this.#broker;
            }
            get showCredits() {
              return this.#broker.showCredits;
            }
            get chatStore() {
              return this.#chatStore;
            }
            get kbCollection() {
              return this.#kbCollection;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value ?? {};
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get model() {
              return this.#broker.model;
            }
            get saved() {
              return this.#broker?.model?.saved;
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready && this.#chatStore.ready;
            }
            constructor() {
              super({
                properties: ['showDrawer']
              });
              this.#kbCollection = new _articles.KBCollection();
              this.init();
            }
            init = async () => {
              await _wrapper.AppWrapper.isReady;
              super.ready = true;
              this.#broker = _broker.LayoutBroker;
              this.#broker.on('model.changed', () => this.triggerEvent('model.changed'));
              _wrapper.AppWrapper.on('change', this.triggerEvent);
              this.#broker.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
              _i18n.globalTexts.on('change', this.triggerEvent);
              // Initialize chat store
              this.#chatStore = new _chat.ChatStore();
              this.#chatStore.on('change', this.triggerEvent);
              // Suscribirse a cambios de URL usando window.history
              this.setupHistoryListener();
              // Validar parámetros al cargar la página
              this.validateParams();
            };
            async loadSearch(text, orgId) {
              try {
                if (!text || !this.#kbCollection) return;
                await this.#kbCollection.load({
                  text,
                  organizationId: orgId
                });
                this.triggerEvent();
              } catch (e) {
                console.error('Error loading search results:', e);
              }
            }
            validateParams() {
              // Obtener el estado del historico de navegación
              const historyState = history.state;
              // Si existe un estado de búsqueda válido, ejecutar la búsqueda automáticamente
              if (historyState && historyState.query && historyState.query.trim()) {
                this.loadSearch(historyState.query.trim(), historyState.orgId);
              }
            }
            clearSearch() {
              // Limpiar la colección de búsqueda creando una nueva instancia
              if (this.#kbCollection) {
                this.#kbCollection = new _articles.KBCollection();
              }
              // Limpiar el estado del historico
              history.replaceState(null, '', window.location.pathname);
              this.triggerEvent();
            }
            setupHistoryListener() {
              // Función para manejar cambios de URL
              const handleUrlChange = () => {
                this.validateParams();
              };
              // Suscribirse al evento popstate (navegación del navegador)
              window.addEventListener('popstate', handleUrlChange);
              // Interceptar pushState y replaceState para detectar cambios programáticos
              const originalPushState = history.pushState;
              const originalReplaceState = history.replaceState;
              history.pushState = function (...args) {
                originalPushState.apply(history, args);
                handleUrlChange();
              };
              history.replaceState = function (...args) {
                originalReplaceState.apply(history, args);
                handleUrlChange();
              };
              // Guardar referencia para poder remover los listeners
              this.#historyCleanup = () => {
                window.removeEventListener('popstate', handleUrlChange);
                history.pushState = originalPushState;
                history.replaceState = originalReplaceState;
              };
            }
            listen = () => {
              this.#broker.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
              this.#chatStore.on('change', this.triggerEvent);
            };
            close() {
              this.#broker.off('change', this.triggerEvent);
              this.#texts.off('change', this.triggerEvent);
              this.#chatStore.off('change', this.triggerEvent);
              this.#chatStore.close();
              // Limpiar listeners de history
              if (this.#historyCleanup) {
                this.#historyCleanup();
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************************
      INTERNAL MODULE: ./view/chat/chat-empty-state
      ********************************************/

      ims.set('./view/chat/chat-empty-state', {
        hash: 1486760863,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatEmptyState = ChatEmptyState;
          var React = require("react");
          function ChatEmptyState({
            texts,
            store,
            onCreateChat,
            isCreating
          }) {
            const [selectedOrgId, setSelectedOrgId] = React.useState('');
            // Obtener organizaciones del usuario
            const orgs = store?.user?.organizations?.items || [];
            const handleCreateChat = async () => {
              if (!selectedOrgId) return;
              await onCreateChat(selectedOrgId);
            };
            return React.createElement("div", {
              className: "chat-empty"
            }, React.createElement("p", null, texts?.chat?.empty?.noActive || 'No hay chat activo'), orgs.length > 0 && React.createElement("div", {
              className: "org-selector"
            }, React.createElement("select", {
              value: selectedOrgId,
              onChange: e => setSelectedOrgId(e.target.value),
              className: "org-select",
              "aria-label": "Organizaci\u00F3n"
            }, React.createElement("option", {
              value: ""
            }, texts?.chat?.organization?.placeholder || 'Seleccionar organización'), orgs.map(org => React.createElement("option", {
              key: org.id,
              value: org.id
            }, org.name || org.id)))), React.createElement("button", {
              className: "create-chat-button",
              onClick: handleCreateChat,
              disabled: isCreating || !selectedOrgId
            }, texts?.chat?.empty?.createButton || 'Crear Chat'));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./view/chat/chat-window
      ***************************************/

      ims.set('./view/chat/chat-window', {
        hash: 127856467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatWindow = ChatWindow;
          var React = require("react");
          var _useChatStore = require("./use-chat-store");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _chatEmptyState = require("./chat-empty-state");
          var _emptyChat = require("./empty-chat");
          var _context = require("../context");
          var _useChatAnimation = require("./use-chat-animation");
          function ChatWindow({
            chatWindowRef,
            chatContentRef,
            onToggle
          }) {
            const chatStore = (0, _useChatStore.useChatStore)();
            const chat = chatStore?.chat;
            const chatSpecs = {};
            const [isCreating, setIsCreating] = React.useState(false);
            // Hook de animación del chat
            const {
              isExpanded,
              toggleChat
            } = (0, _useChatAnimation.useChatAnimation)({
              chatWindowRef
            });
            // Obtener textos y store del contexto del layout
            const {
              texts,
              store
            } = (0, _context.useLayoutContext)();
            const handleCreateChat = async orgId => {
              if (!chatStore) return;
              setIsCreating(true);
              try {
                // Usar idioma por defecto 'es' y la organización seleccionada
                await chatStore.create('es', orgId);
              } catch (error) {
                console.error('Error creating chat:', error);
              } finally {
                setIsCreating(false);
              }
            };
            return React.createElement("div", {
              ref: chatWindowRef,
              className: "chat-window"
            }, React.createElement("div", {
              className: "chat-header"
            }, React.createElement("h3", null, texts?.chat?.title || 'Chat'), React.createElement("div", {
              className: "chat-header-actions"
            }, React.createElement("button", {
              className: "expand-button",
              onClick: toggleChat,
              title: isExpanded ? texts?.chat?.actions?.minimize || 'Minimizar' : texts?.chat?.actions?.expand || 'Expandir'
            }, isExpanded ? '⤓' : '⤢'), React.createElement("button", {
              className: "close-button",
              onClick: onToggle
            }, "\u00D7"))), React.createElement("div", {
              className: "chat-content"
            }, chat ? React.createElement(_chatComponent.AgentsChatContainer, {
              icon: "chat",
              users: [],
              autoplay: false,
              model: chat,
              empty: React.createElement(_emptyChat.EmptyChat, {
                texts: texts
              }),
              player: null
            }, React.createElement(_chatComponent.AgentsChatPanel, null), React.createElement(_chatComponent.AgentsChatInput, {
              ...chatSpecs
            })) : React.createElement("div", {
              className: "chat-placeholder"
            }, isCreating ? React.createElement("div", {
              className: "chat-creating"
            }, React.createElement("div", {
              className: "spinner"
            }), React.createElement("p", null, texts?.chat?.creating?.message || 'Creando chat...')) : React.createElement(_chatEmptyState.ChatEmptyState, {
              texts: texts,
              store: store,
              onCreateChat: handleCreateChat,
              isCreating: isCreating
            }))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./view/chat/empty-chat
      **************************************/

      ims.set('./view/chat/empty-chat', {
        hash: 2928444040,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var React = require("react");
          function EmptyChat({
            texts
          }) {
            return React.createElement("div", {
              className: "empty-chat"
            }, React.createElement("p", null, texts?.chat?.empty?.startChat || 'Escribe tu mensaje para comenzar la conversación'));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./view/chat/index
      *********************************/

      ims.set('./view/chat/index', {
        hash: 4089017995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GeneralChat = GeneralChat;
          var React = require("react");
          var _useChatToggle = require("./use-chat-toggle");
          var _chatWindow = require("./chat-window");
          function GeneralChat() {
            const {
              isExpanded,
              chatWindowRef,
              handleToggle
            } = (0, _useChatToggle.useChatToggle)();
            const buttonRef = React.useRef(null);
            const chatContentRef = React.useRef(null);
            return React.createElement("div", {
              className: "general-chat"
            }, isExpanded && React.createElement(_chatWindow.ChatWindow, {
              chatWindowRef: chatWindowRef,
              chatContentRef: chatContentRef,
              onToggle: handleToggle
            }), React.createElement("button", {
              ref: buttonRef,
              className: `chat-button ${isExpanded ? 'expanded' : ''}`,
              onClick: handleToggle,
              "aria-label": "Toggle chat"
            }, React.createElement("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2"
            }, React.createElement("path", {
              d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./view/chat/use-chat-animation
      **********************************************/

      ims.set('./view/chat/use-chat-animation', {
        hash: 2693359656,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatAnimation = useChatAnimation;
          var React = require("react");
          function useChatAnimation({
            chatWindowRef
          }) {
            const [isExpanded, setIsExpanded] = React.useState(false);
            const expandChat = React.useCallback(() => {
              if (!chatWindowRef.current) return;
              const element = chatWindowRef.current;
              // Simplemente cambiar el tamaño y posición
              element.style.position = 'fixed';
              element.style.top = '0';
              element.style.left = '0';
              element.style.right = '0';
              element.style.bottom = '0';
              element.style.width = '100vw';
              element.style.height = '100vh';
              element.style.borderRadius = '0';
              element.style.zIndex = '9999';
              setIsExpanded(true);
            }, [chatWindowRef]);
            const minimizeChat = React.useCallback(() => {
              if (!chatWindowRef.current) return;
              const element = chatWindowRef.current;
              // Restaurar tamaño y posición original
              element.style.position = 'absolute';
              element.style.top = 'auto';
              element.style.left = 'auto';
              element.style.right = '0px';
              element.style.bottom = '80px';
              element.style.width = '350px';
              element.style.height = '500px';
              element.style.borderRadius = '16px';
              element.style.zIndex = 'auto';
              setIsExpanded(false);
            }, [chatWindowRef]);
            const toggleChat = React.useCallback(() => {
              if (isExpanded) {
                minimizeChat();
              } else {
                expandChat();
              }
            }, [isExpanded, expandChat, minimizeChat]);
            return {
              isExpanded,
              isAnimating: false,
              expandChat,
              minimizeChat,
              toggleChat
            };
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./view/chat/use-chat-store
      ******************************************/

      ims.set('./view/chat/use-chat-store', {
        hash: 161104137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatStore = useChatStore;
          var _context = require("../context");
          function useChatStore() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            return store?.chatStore;
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./view/chat/use-chat-toggle
      *******************************************/

      ims.set('./view/chat/use-chat-toggle', {
        hash: 511980780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatToggle = useChatToggle;
          var React = require("react");
          var _gsap = require("gsap");
          function useChatToggle() {
            const [isExpanded, setIsExpanded] = React.useState(false);
            const chatWindowRef = React.useRef(null);
            const handleToggle = () => {
              if (isExpanded) {
                // Collapse animation
                _gsap.gsap.to(chatWindowRef.current, {
                  scale: 0,
                  opacity: 0,
                  duration: 0.3,
                  ease: 'power2.inOut',
                  onComplete: () => {
                    setIsExpanded(false);
                  }
                });
              } else {
                // Expand animation
                setIsExpanded(true);
                _gsap.gsap.fromTo(chatWindowRef.current, {
                  scale: 0,
                  opacity: 0
                }, {
                  scale: 1,
                  opacity: 1,
                  duration: 0.4,
                  ease: 'back.out(1.7)'
                });
              }
            };
            React.useEffect(() => {
              // Initial setup
              if (chatWindowRef.current) {
                _gsap.gsap.set(chatWindowRef.current, {
                  scale: 0,
                  opacity: 0
                });
              }
            }, []);
            return {
              isExpanded,
              chatWindowRef,
              handleToggle
            };
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./view/coins/alert
      **********************************/

      ims.set('./view/coins/alert', {
        hash: 3536504213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsAlert = CoinsAlert;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          function CoinsAlert({
            show,
            onClose,
            texts,
            globalTexts
          }) {
            if (!show) return null;
            texts = texts.coins.alert;
            return _react.default.createElement(_modal.AlertModal, {
              show: true,
              buttonLabel: texts.action,
              onConfirm: onClose,
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("p", null, texts.description)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./view/coins/credits
      ************************************/

      ims.set('./view/coins/credits', {
        hash: 3964216279,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsContainer = CreditsContainer;
          var _chips = require("pragmate-ui/chips");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _animatedLabel = require("../components/animated-label");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          function CreditsContainer() {
            let {
              store,
              toggleCoinsModal,
              texts
            } = (0, _context.useLayoutContext)();
            const [message, setMessage] = _react.default.useState('');
            const [, setHasCredits] = _react.default.useState(store.hasCredits);
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container ${!store.broker.canConsumeCredits ? ' is-disabled' : ''}`;
            const [credits, setCredits] = _react.default.useState(store.model?.credits.getProperties() ?? {
              total: 0,
              consumed: 0
            });
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts?.messages[type]);
              setCredits({
                ...store.broker.model?.credits.getProperties()
              });
              setHasCredits(store.broker.hasCredits);
            };
            (0, _hooks.useStore)(store.broker.model, ['credits.change'], onCreditsChange);
            if (!texts?.coins || !store.broker.model?.id) return null;
            texts = texts.coins.header;
            // the control changes based on the user's credits
            // if the user has credits, the control is a chip and does not have an onClick event
            let Control;
            const attrs = {
              className: 'credits-action',
              onClick: undefined,
              variant: store.broker.hasCredits ? 'success' : 'primary',
              disabled: store.broker.hasCredits || !store.broker.canConsumeCredits
            };
            if (!store.broker.hasCredits) {
              Control = _components.Button;
              attrs.onClick = toggleCoinsModal;
            } else {
              Control = _chips.Chip;
              attrs.className = 'success--chip';
            }
            const total = credits ? credits.total - credits.consumed : 0;
            const percentageAvailable = total / credits.total * 100;
            const label = store.broker.hasCredits ? `${total} ${texts.actions.available}` : texts.actions.require;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement(_animatedLabel.AnimatedLabel, null, message), _react.default.createElement(Control, {
              ...attrs
            }, store.broker.hasCredits ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.Battery, {
              percent: percentageAvailable
            }), _react.default.createElement("span", {
              className: "interactions-data"
            }, label)) : _react.default.createElement(_react.default.Fragment, null, label)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./view/coins/notifications-bar
      **********************************************/

      ims.set('./view/coins/notifications-bar', {
        hash: 2482941178,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotificationsBar = NotificationsBar;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _framerMotion = require("framer-motion");
          var _animated = require("../components/animated");
          var _context = require("../context");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          function NotificationsBar({}) {
            const {
              store: {
                broker
              }
            } = (0, _context.useLayoutContext)();
            const [show, setShow] = _react.default.useState(true);
            // Use useStore to subscribe to broker changes - it handles reactivity automatically
            (0, _hooks.useStore)(broker, ['show.message']);
            const onClose = () => {
              setShow(false);
            };
            // Access broker.message directly since useStore handles reactivity
            if (!broker.message) return null;
            const cls = `notifications-bar center-items notifications--${broker.message?.type}`;
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_animated.Animated, {
              as: "div",
              className: cls
            }, _react.default.createElement(_components.HtmlWrapper, null, broker.message.message), _react.default.createElement(_icons.Icon, {
              className: "close-icon",
              icon: "close",
              onClick: onClose
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/animated-label
      ************************************************/

      ims.set('./view/components/animated-label', {
        hash: 2257335102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedLabel = AnimatedLabel;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedLabel({
            children
          }) {
            const [show, setShow] = _react.default.useState(true);
            _react.default.useEffect(() => {
              setShow(children);
              globalThis.setTimeout(() => {
                setShow(false);
              }, 2000);
            }, [children]);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_framerMotion.motion.span, {
              layout: true,
              className: "label-message",
              initial: {
                opacity: 0,
                width: '0'
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                },
                width: 'auto'
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./view/components/animated
      ******************************************/

      ims.set('./view/components/animated', {
        hash: 796986304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Animated = Animated;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function Animated({
            className,
            children,
            as = 'span'
          }) {
            const Component = (0, _framerMotion.motion)(as);
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./view/components/header
      ****************************************/

      ims.set('./view/components/header', {
        hash: 3936262129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _credits = require("../coins/credits");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            (0, _hooks.useStore)(store, ['overlay.changed', 'title.changed', 'model.changed']);
            const hasModel = !!store.broker.model;
            const attrs = {
              force: store.broker.force,
              store,
              closable: store.broker.overlay,
              backlink: store.broker.backLink
            };
            const toggleDrawer = () => {
              store.broker.showDrawer = !store.broker.showDrawer;
            };
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              ...attrs
            }, _react.default.createElement(_icons.IconButton, {
              icon: "search",
              className: "circle",
              onClick: toggleDrawer,
              title: "Toggle drawer"
            }), hasModel && _react.default.createElement(_credits.CreditsContainer, null), store.broker.refresh && _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: () => store.broker.refresh()
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/overlay-header
      ************************************************/

      ims.set('./view/components/overlay-header', {
        hash: 1200112220,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OverlayHeader = OverlayHeader;
          var React = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          var _credits = require("../coins/credits");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function OverlayHeader() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            return React.createElement(_navbarHeader.NavbarHeader, {
              force: store.broker.force,
              store: store,
              closable: true,
              backlink: store.broker.backLink
            }, !!store.broker.model && React.createElement(_credits.CreditsContainer, null), store.broker.refresh && React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: () => store.broker.refresh()
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./view/context
      ******************************/

      ims.set('./view/context', {
        hash: 1775163429,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLayoutContext = exports.LayoutContext = void 0;
          var _react = require("react");
          const LayoutContext = exports.LayoutContext = _react.default.createContext({});
          const useLayoutContext = () => _react.default.useContext(LayoutContext);
          exports.useLayoutContext = useLayoutContext;
        }
      });

      /********************************************
      INTERNAL MODULE: ./view/drawer/drawer-content
      ********************************************/

      ims.set('./view/drawer/drawer-content', {
        hash: 2305048211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerContent = DrawerContent;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function DrawerContent({
            store
          }) {
            const {
              kbCollection
            } = store;
            const [fetching, setFetching] = _react.default.useState(false);
            _react.default.useEffect(() => {
              const handleFetchingChange = () => {
                setFetching(kbCollection?.fetching || false);
              };
              if (kbCollection) {
                kbCollection.on('fetching.changed', handleFetchingChange);
                setFetching(kbCollection.fetching || false);
              }
              return () => {
                if (kbCollection) {
                  kbCollection.off('fetching.changed', handleFetchingChange);
                }
              };
            }, [kbCollection]);
            if (fetching) {
              return _react.default.createElement("div", {
                className: "drawer-content__loading"
              }, _react.default.createElement(_icons.IconButton, {
                icon: "refresh",
                className: "loading-icon spinning"
              }), _react.default.createElement("h3", null, "Buscando..."), _react.default.createElement("p", null, "Procesando tu b\u00FAsqueda"));
            }
            if (!kbCollection || !kbCollection.items || kbCollection.items.length === 0) {
              return _react.default.createElement("div", {
                className: "drawer-content__empty"
              }, _react.default.createElement(_icons.IconButton, {
                icon: "search",
                className: "empty-icon"
              }), _react.default.createElement("h3", null, "No hay resultados"), _react.default.createElement("p", null, "Realiza una b\u00FAsqueda para ver resultados"));
            }
            return _react.default.createElement("div", {
              className: "drawer-content__results"
            }, _react.default.createElement("h3", null, "Resultados de b\u00FAsqueda"), _react.default.createElement("div", {
              className: "results-list"
            }, kbCollection.items.map(item => _react.default.createElement(SearchResultItem, {
              key: item.id,
              item: item
            }))));
          }
          function SearchResultItem({
            item
          }) {
            return _react.default.createElement("div", {
              className: "search-result-item"
            }, _react.default.createElement("div", {
              className: "item-header"
            }, _react.default.createElement("h4", {
              className: "item-title"
            }, item.metadata?.title || 'Sin título'), _react.default.createElement("span", {
              className: "item-score"
            }, "Puntuaci\u00F3n: ", Math.round((item.score || 0) * 100), "%")), _react.default.createElement("div", {
              className: "item-content"
            }, _react.default.createElement("p", {
              className: "item-text"
            }, item.metadata?.text || 'Sin contenido')), item.metadata?.tags && item.metadata.tags.length > 0 && _react.default.createElement("div", {
              className: "item-tags"
            }, _react.default.createElement("span", {
              className: "tags-label"
            }, "Etiquetas:"), _react.default.createElement("div", {
              className: "tags-list"
            }, item.metadata.tags.map((tag, index) => _react.default.createElement("span", {
              key: index,
              className: "tag"
            }, tag)))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./view/drawer/index
      ***********************************/

      ims.set('./view/drawer/index', {
        hash: 1512851051,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutDrawer = LayoutDrawer;
          var _react = require("react");
          var _drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var _orgSearchBox = require("./org-search-box");
          var _drawerContent = require("./drawer-content");
          function LayoutDrawer({
            store
          }) {
            const [selectedOrgId, setSelectedOrgId] = _react.default.useState('');
            const orgs = store?.user?.organizations?.items || [];
            const hasMultipleOrgs = orgs.length > 1;
            const {
              texts
            } = store;
            // Abrir el drawer automáticamente si hay un estado de búsqueda activo
            _react.default.useEffect(() => {
              const historyState = history.state;
              if (historyState && historyState.query && historyState.query.trim()) {
                store.broker.showDrawer = true;
              }
            }, []);
            const handleClose = () => {
              store.broker.showDrawer = false;
            };
            const handleOrgChange = orgId => {
              setSelectedOrgId(orgId);
            };
            const handleSearch = query => {
              store.loadSearch(query, selectedOrgId);
            };
            return _react.default.createElement(_drawer.Drawer, {
              className: "layout-drawer",
              position: "right",
              open: store.broker.showDrawer,
              onClose: handleClose
            }, _react.default.createElement("div", {
              className: "layout-drawer__container"
            }, _react.default.createElement("header", {
              className: "layout-drawer__header"
            }, _react.default.createElement(_orgSearchBox.OrgSearchBox, {
              orgs: orgs,
              orgId: selectedOrgId,
              onOrgChange: handleOrgChange,
              placeholder: texts.drawer?.search?.placeholder || 'Buscar...',
              onSearch: handleSearch
            }), _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: handleClose,
              "aria-label": "Close drawer"
            })), _react.default.createElement("section", {
              className: "layout-drawer__content"
            }, _react.default.createElement("div", {
              className: "layout-drawer__body"
            }, _react.default.createElement(_drawerContent.DrawerContent, {
              store: store
            })))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./view/drawer/org-search-box
      ********************************************/

      ims.set('./view/drawer/org-search-box', {
        hash: 1233042992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrgSearchBox = OrgSearchBox;
          var React = require("react");
          var Select = require("@radix-ui/react-select");
          var _reactIcons = require("@radix-ui/react-icons");
          var _usePortalContainer = require("./use-portal-container");
          // OrgSearchBox.tsx

          function OrgSearchBox({
            orgs,
            orgId,
            onOrgChange,
            placeholder,
            initialQuery = '',
            onSearch,
            className = ''
          }) {
            const [query, setQuery] = React.useState(initialQuery);
            const [expanded, setExpanded] = React.useState(false);
            const {
              container: portalContainer,
              ref: wrapperRef
            } = (0, _usePortalContainer.usePortalContainer)();
            const handleClear = () => {
              setQuery('');
              // Limpiar el estado del historico
              history.replaceState(null, '', window.location.pathname);
              if (onSearch) {
                onSearch('');
              }
            };
            const handleSubmit = e => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const searchQuery = formData.get('search');
              const organization = formData.get('organization');
              if (searchQuery.trim()) {
                // Guardar el estado de búsqueda en el historico sin modificar la URL
                const searchState = {
                  query: searchQuery.trim(),
                  orgId: organization || '',
                  timestamp: Date.now()
                };
                history.replaceState(searchState, '', window.location.pathname);
                // Si hay un callback onSearch, también lo ejecutamos
                if (onSearch) {
                  onSearch(searchQuery.trim());
                }
                // Cerrar la búsqueda móvil si está expandida
                if (expanded) {
                  setExpanded(false);
                }
              }
            };
            // Comportamiento por defecto (compatible con versiones anteriores)
            // Si no hay múltiples organizaciones, mostrar solo el input de búsqueda
            if (orgs.length <= 1) {
              return React.createElement(React.Fragment, null, React.createElement("div", {
                className: "search-container desktop-only"
              }, React.createElement("form", {
                ref: wrapperRef,
                className: `search-form ${className}`,
                onSubmit: handleSubmit,
                role: "search"
              }, React.createElement("div", {
                className: "search-input-group full-width"
              }, React.createElement("input", {
                type: "text",
                name: "search",
                placeholder: placeholder,
                className: "search-input",
                value: query,
                onChange: e => setQuery(e.target.value),
                "aria-label": "Buscar"
              }), query && React.createElement("button", {
                type: "button",
                className: "clear-button",
                onClick: handleClear,
                "aria-label": "Limpiar b\u00FAsqueda"
              }, React.createElement("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2"
              }, React.createElement("circle", {
                cx: "12",
                cy: "12",
                r: "10"
              }), React.createElement("path", {
                d: "m15 9-6 6"
              }), React.createElement("path", {
                d: "m9 9 6 6"
              }))), React.createElement("button", {
                type: "submit",
                className: "search-button",
                "aria-label": "Buscar"
              }, React.createElement("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2"
              }, React.createElement("circle", {
                cx: "11",
                cy: "11",
                r: "8"
              }), React.createElement("path", {
                d: "m21 21-4.35-4.35"
              })))))));
            }
            // Si hay múltiples organizaciones, mostrar el select + input
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "search-container desktop-only"
            }, React.createElement("form", {
              ref: wrapperRef,
              className: `search-form ${className}`,
              onSubmit: handleSubmit,
              role: "search"
            }, React.createElement("div", {
              className: "search-input-group full-width"
            }, React.createElement(Select.Root, {
              value: orgId,
              onValueChange: onOrgChange
            }, React.createElement(Select.Trigger, {
              className: "org-select-trigger",
              "aria-label": "Organizaci\u00F3n"
            }, React.createElement(Select.Value, {
              placeholder: "ALL"
            }), React.createElement(Select.Icon, {
              className: "org-select-icon"
            }, React.createElement(_reactIcons.ChevronDownIcon, null))), React.createElement(Select.Portal, {
              container: portalContainer
            }, React.createElement(Select.Content, {
              className: "org-select-content",
              position: "popper",
              side: "bottom",
              align: "start",
              sideOffset: 4,
              avoidCollisions: true
            }, React.createElement(Select.Viewport, {
              className: "org-select-viewport"
            }, orgs.map(o => React.createElement(Select.Item, {
              key: o.id,
              value: o.id,
              className: "org-select-item"
            }, React.createElement(Select.ItemText, null, o.name ?? o.id))))))), React.createElement("div", {
              className: "search-separator"
            }), React.createElement("input", {
              type: "text",
              name: "search",
              placeholder: placeholder,
              className: "search-input",
              value: query,
              onChange: e => setQuery(e.target.value),
              "aria-label": "Buscar"
            }), React.createElement("input", {
              type: "hidden",
              name: "organization",
              value: orgId
            }), query && React.createElement("button", {
              type: "button",
              className: "clear-button",
              onClick: handleClear,
              "aria-label": "Limpiar b\u00FAsqueda"
            }, React.createElement("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2"
            }, React.createElement("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }), React.createElement("path", {
              d: "m15 9-6 6"
            }), React.createElement("path", {
              d: "m9 9 6 6"
            }))), React.createElement("button", {
              type: "submit",
              className: "search-button",
              "aria-label": "Buscar"
            }, React.createElement("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2"
            }, React.createElement("circle", {
              cx: "11",
              cy: "11",
              r: "8"
            }), React.createElement("path", {
              d: "m21 21-4.35-4.35"
            })))))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./view/drawer/use-portal-container
      **************************************************/

      ims.set('./view/drawer/use-portal-container', {
        hash: 3284838942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.usePortalContainer = usePortalContainer;
          var React = require("react");
          function usePortalContainer() {
            const [container, setContainer] = React.useState(null);
            const ref = React.useCallback(node => {
              if (!node) return;
              const root = node.getRootNode?.() ?? document;
              const isShadow = root.host != null;
              if (isShadow) {
                let portal = root.querySelector('#radix-portal-root');
                if (!portal) {
                  portal = document.createElement('div');
                  portal.id = 'radix-portal-root';
                  portal.style.position = 'relative';
                  root.appendChild(portal);
                }
                setContainer(portal);
              } else {
                setContainer(document.body);
              }
            }, []);
            return {
              container,
              ref
            };
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/global
      *****************************/

      ims.set('./view/global', {
        hash: 4223080399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 3698852737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _alert = require("./coins/alert");
          var _notificationsBar = require("./coins/notifications-bar");
          var _header = require("./components/header");
          var _context = require("./context");
          var _chat = require("./chat");
          var _drawer = require("./drawer");
          const Layout = ({
            store
          }) => {
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [showCoinsAlert, setShowCoinsAlert] = _react.default.useState(false);
            const toggleCoinsAlert = () => setShowCoinsAlert(!showCoinsAlert);
            const toggleCoinsModal = () => setShowCoinsModal(!showCoinsModal);
            const ref = _react.default.useRef();
            (0, _hooks.useStore)(store.broker, ['no.credits'], toggleCoinsAlert);
            (0, _hooks.useStore)(store);
            const {
              texts,
              ready
            } = store;
            const value = {
              store,
              texts,
              toggleCoinsModal,
              overlay: store.broker?.overlay
            };
            const type = store.broker?.model?.modelType === 'tracking' ? 'interactive' : 'generative';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.LayoutContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "main-layout__container"
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_notificationsBar.NotificationsBar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", {
              ref: ref
            }), _react.default.createElement(_toast.Toasts, null), _react.default.createElement(_chat.GeneralChat, null)))), ready && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.CoinsAlert, {
              texts: texts,
              globalTexts: store.globalTexts,
              show: showCoinsAlert,
              onClose: toggleCoinsAlert
            }), _react.default.createElement(_ui.CoinsModal, {
              owner: store.model?.owner,
              globalTexts: store.globalTexts,
              onConsume: store.model?.consumeCoins,
              type: type,
              show: showCoinsModal,
              onClose: toggleCoinsModal
            }), _react.default.createElement(_drawer.LayoutDrawer, {
              store: store
            })));
          };
          exports.Layout = Layout;
        }
      });

      /******************************
      INTERNAL MODULE: ./view/preload
      ******************************/

      ims.set('./view/preload', {
        hash: 246890105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          function Preload() {
            return React.createElement(React.Fragment, null);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./broker",
        "from": "LayoutBroker",
        "name": "LayoutBroker"
      }, {
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view/components/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./view/components/overlay-header",
        "from": "OverlayHeader",
        "name": "OverlayHeader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'LayoutBroker') && _export("LayoutBroker", LayoutBroker = require ? require('./broker').LayoutBroker : value);
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./view/components/header').Header : value);
        (require || prop === 'OverlayHeader') && _export("OverlayHeader", OverlayHeader = require ? require('./view/components/overlay-header').OverlayHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIl9yb3V0aW5nIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwic2hvd0NyZWRpdHMiLCJzaG93RHJhd2VyIiwidmFsdWUiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsImNhbkNvbnN1bWVDcmVkaXRzIiwicHJldmlvdXNQYXRobmFtZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImVuc3VyZUNyZWRpdHMiLCJiaW5kIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJleGlzdHMiLCJpdGVtcyIsImZpbmRJbmRleCIsIml0ZW0iLCJmaW5kTGFzdEluZGV4IiwiYXJyYXkiLCJwcmVkaWNhdGUiLCJpIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiQXJyYXkiLCJpc0FycmF5IiwiaW5jbHVkZXMiLCJuZXdJdGVtcyIsInNsaWNlIiwic2V0IiwiZ2xvYmFsVGhpcyIsImxheW91dCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbkxpc3RlbiIsImNsZWFyTW9kZWwiLCJzYXZlZCIsImNhbGxiYWNrIiwic3BlY3MiLCJjb25zb2xlIiwiZXJyb3IiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJvdmVybGF5Iiwic2V0VGl0bGUiLCJ0aXRsZSIsIm9uUmVmcmVzaCIsInJlZnJlc2giLCJmb3JjZSIsInByb3BzIiwidXBkYXRlZCIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJfY29yZSIsIl93cmFwcGVyIiwiX2FwaSIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJDaGF0U3RvcmUiLCJjaGF0IiwiYXBpIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJpbml0IiwicmVhZHkiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImdldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsImNsb3NlIiwiY3JlYXRlIiwibGFuZ3VhZ2UiLCJvcmdJZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwicmVzcG9uc2UiLCJwb3N0Iiwib3JnYW5pemF0aW9uSWQiLCJzdGF0dXMiLCJFcnJvciIsIkNoYXQiLCJkYXRhIiwiZGVmYXVsdCIsImxvYWRBbGwiLCJlIiwiX2Jyb2tlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGF0IiwiX2FydGljbGVzIiwiaXNTdG9yZSIsImJyb2tlciIsImNoYXRTdG9yZSIsImtiQ29sbGVjdGlvbiIsImhpc3RvcnlDbGVhbnVwIiwic2Vzc2lvbiIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIktCQ29sbGVjdGlvbiIsInNldHVwSGlzdG9yeUxpc3RlbmVyIiwidmFsaWRhdGVQYXJhbXMiLCJsb2FkU2VhcmNoIiwidGV4dCIsImxvYWQiLCJoaXN0b3J5U3RhdGUiLCJoaXN0b3J5Iiwic3RhdGUiLCJxdWVyeSIsInRyaW0iLCJjbGVhclNlYXJjaCIsInJlcGxhY2VTdGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFuZGxlVXJsQ2hhbmdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9yaWdpbmFsUHVzaFN0YXRlIiwicHVzaFN0YXRlIiwib3JpZ2luYWxSZXBsYWNlU3RhdGUiLCJhcmdzIiwiYXBwbHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGlzdGVuIiwib2ZmIiwiUmVhY3QiLCJDaGF0RW1wdHlTdGF0ZSIsIm9uQ3JlYXRlQ2hhdCIsImlzQ3JlYXRpbmciLCJzZWxlY3RlZE9yZ0lkIiwic2V0U2VsZWN0ZWRPcmdJZCIsInVzZVN0YXRlIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJoYW5kbGVDcmVhdGVDaGF0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImVtcHR5Iiwibm9BY3RpdmUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9yZ2FuaXphdGlvbiIsInBsYWNlaG9sZGVyIiwibWFwIiwib3JnIiwia2V5IiwibmFtZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUJ1dHRvbiIsIl91c2VDaGF0U3RvcmUiLCJfY2hhdENvbXBvbmVudCIsIl9jaGF0RW1wdHlTdGF0ZSIsIl9lbXB0eUNoYXQiLCJfY29udGV4dCIsIl91c2VDaGF0QW5pbWF0aW9uIiwiQ2hhdFdpbmRvdyIsImNoYXRXaW5kb3dSZWYiLCJjaGF0Q29udGVudFJlZiIsIm9uVG9nZ2xlIiwidXNlQ2hhdFN0b3JlIiwiY2hhdFNwZWNzIiwic2V0SXNDcmVhdGluZyIsImlzRXhwYW5kZWQiLCJ0b2dnbGVDaGF0IiwidXNlQ2hhdEFuaW1hdGlvbiIsInVzZUxheW91dENvbnRleHQiLCJyZWYiLCJhY3Rpb25zIiwibWluaW1pemUiLCJleHBhbmQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWNvbiIsInVzZXJzIiwiYXV0b3BsYXkiLCJFbXB0eUNoYXQiLCJwbGF5ZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJjcmVhdGluZyIsInN0YXJ0Q2hhdCIsIl91c2VDaGF0VG9nZ2xlIiwiX2NoYXRXaW5kb3ciLCJHZW5lcmFsQ2hhdCIsImhhbmRsZVRvZ2dsZSIsInVzZUNoYXRUb2dnbGUiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkIiwic2V0SXNFeHBhbmRlZCIsImV4cGFuZENoYXQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJlbGVtZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsIm1pbmltaXplQ2hhdCIsImlzQW5pbWF0aW5nIiwiX2dzYXAiLCJnc2FwIiwidG8iLCJzY2FsZSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImVhc2UiLCJvbkNvbXBsZXRlIiwiZnJvbVRvIiwidXNlRWZmZWN0IiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsImRlc2NyaXB0aW9uIiwiX2NoaXBzIiwiX2NvbXBvbmVudHMiLCJfYW5pbWF0ZWRMYWJlbCIsIl91aSIsIl9ob29rcyIsIkNyZWRpdHNDb250YWluZXIiLCJ0b2dnbGVDb2luc01vZGFsIiwic2V0TWVzc2FnZSIsInNldEhhc0NyZWRpdHMiLCJjbHMiLCJzZXRDcmVkaXRzIiwiZ2V0UHJvcGVydGllcyIsImNvbnN1bWVkIiwib25DcmVkaXRzQ2hhbmdlIiwiY2xhc3NMaXN0IiwiYWRkIiwidXNlU3RvcmUiLCJoZWFkZXIiLCJDb250cm9sIiwiYXR0cnMiLCJ2YXJpYW50IiwiQnV0dG9uIiwiQ2hpcCIsInBlcmNlbnRhZ2VBdmFpbGFibGUiLCJsYWJlbCIsImF2YWlsYWJsZSIsIkFuaW1hdGVkTGFiZWwiLCJGcmFnbWVudCIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2ljb25zIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRlZCIsIk5vdGlmaWNhdGlvbnNCYXIiLCJzZXRTaG93IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZWQiLCJhcyIsIkh0bWxXcmFwcGVyIiwiSWNvbiIsImNoaWxkcmVuIiwibW90aW9uIiwic3BhbiIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImV4aXQiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiX2NyZWRpdHMiLCJIZWFkZXIiLCJoYXNNb2RlbCIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJiYWNrTGluayIsInRvZ2dsZURyYXdlciIsIk5hdmJhckhlYWRlciIsIkljb25CdXR0b24iLCJPdmVybGF5SGVhZGVyIiwiTGF5b3V0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGVudCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJoYW5kbGVGZXRjaGluZ0NoYW5nZSIsIlNlYXJjaFJlc3VsdEl0ZW0iLCJtZXRhZGF0YSIsIk1hdGgiLCJyb3VuZCIsInNjb3JlIiwidGFncyIsInRhZyIsImluZGV4IiwiX2RyYXdlciIsIl9vcmdTZWFyY2hCb3giLCJfZHJhd2VyQ29udGVudCIsIkxheW91dERyYXdlciIsImhhc011bHRpcGxlT3JncyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3JnQ2hhbmdlIiwiaGFuZGxlU2VhcmNoIiwiRHJhd2VyIiwib3BlbiIsIk9yZ1NlYXJjaEJveCIsIm9uT3JnQ2hhbmdlIiwiZHJhd2VyIiwic2VhcmNoIiwib25TZWFyY2giLCJTZWxlY3QiLCJfcmVhY3RJY29ucyIsIl91c2VQb3J0YWxDb250YWluZXIiLCJpbml0aWFsUXVlcnkiLCJzZXRRdWVyeSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJjb250YWluZXIiLCJwb3J0YWxDb250YWluZXIiLCJ3cmFwcGVyUmVmIiwidXNlUG9ydGFsQ29udGFpbmVyIiwiaGFuZGxlQ2xlYXIiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJzZWFyY2hRdWVyeSIsImdldCIsInNlYXJjaFN0YXRlIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIm9uU3VibWl0Iiwicm9sZSIsImN4IiwiY3kiLCJyIiwiUm9vdCIsIm9uVmFsdWVDaGFuZ2UiLCJUcmlnZ2VyIiwiVmFsdWUiLCJDaGV2cm9uRG93bkljb24iLCJQb3J0YWwiLCJDb250ZW50Iiwic2lkZSIsImFsaWduIiwic2lkZU9mZnNldCIsImF2b2lkQ29sbGlzaW9ucyIsIlZpZXdwb3J0IiwibyIsIkl0ZW0iLCJJdGVtVGV4dCIsInNldENvbnRhaW5lciIsIm5vZGUiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImlzU2hhZG93IiwiaG9zdCIsInBvcnRhbCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b2FzdCIsIl9hbGVydCIsIl9ub3RpZmljYXRpb25zQmFyIiwiX2hlYWRlciIsInNob3dDb2luc01vZGFsIiwic2V0U2hvd0NvaW5zTW9kYWwiLCJzaG93Q29pbnNBbGVydCIsInNldFNob3dDb2luc0FsZXJ0IiwidG9nZ2xlQ29pbnNBbGVydCIsIm1vZGVsVHlwZSIsIlByb3ZpZGVyIiwiVG9hc3RzIiwiQ29pbnNNb2RhbCIsIm93bmVyIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiUHJlbG9hZCJdLCJzb3VyY2VzIjpbIi8vdHMvYnJva2VyLnRzIiwiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS9jaGF0LnRzIiwiLy90cy9zdG9yZS9pbmRleC50cyIsIi8vdHMvdmlldy9jaGF0L2NoYXQtZW1wdHktc3RhdGUudHN4IiwiLy90cy92aWV3L2NoYXQvY2hhdC13aW5kb3cudHN4IiwiLy90cy92aWV3L2NoYXQvZW1wdHktY2hhdC50c3giLCIvL3RzL3ZpZXcvY2hhdC9pbmRleC50c3giLCIvL3RzL3ZpZXcvY2hhdC91c2UtY2hhdC1hbmltYXRpb24udHMiLCIvL3RzL3ZpZXcvY2hhdC91c2UtY2hhdC1zdG9yZS50cyIsIi8vdHMvdmlldy9jaGF0L3VzZS1jaGF0LXRvZ2dsZS50cyIsIi8vdHMvdmlldy9jb2lucy9hbGVydC50c3giLCIvL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvL3RzL3ZpZXcvY29pbnMvbm90aWZpY2F0aW9ucy1iYXIudHN4IiwiLy90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQtbGFiZWwudHN4IiwiLy90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiLy90cy92aWV3L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi8vdHMvdmlldy9jb21wb25lbnRzL292ZXJsYXktaGVhZGVyLnRzeCIsIi8vdHMvdmlldy9jb250ZXh0LnRzIiwiLy90cy92aWV3L2RyYXdlci9kcmF3ZXItY29udGVudC50c3giLCIvL3RzL3ZpZXcvZHJhd2VyL2luZGV4LnRzeCIsIi8vdHMvdmlldy9kcmF3ZXIvb3JnLXNlYXJjaC1ib3gudHN4IiwiLy90cy92aWV3L2RyYXdlci91c2UtcG9ydGFsLWNvbnRhaW5lci50cyIsIi8vZ2xvYmFsLnRzeC8iLCIvL3RzL3ZpZXcvaW5kZXgudHN4IiwiLy90cy92aWV3L3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBWU0sTUFBT0ksTUFBTyxTQUFRTCxNQUFBLENBQUFNLGFBQXNCO1lBRWpELENBQUFDLEtBQU07WUFNTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFB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