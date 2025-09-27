System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-app@0.6.1/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.6.1/i18n.ts", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/react-18-widgets@1.1.8/base", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/chat-sdk@1.5.5/wrapper", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/texts", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/ailearn-app@0.6.1/model/wrapper", "gsap@3.13.0", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/chips", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.6.1/components/navbar-header.code", "pragmate-ui@1.0.8/drawer", "@radix-ui/react-select@2.2.6", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnApp061WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp061WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp061I18nTs) {
      dependency_4 = _aimpactAilearnApp061I18nTs;
    }, function (_beyondJsKernel0114Routing) {
      dependency_5 = _beyondJsKernel0114Routing;
    }, function (_beyondJsReact18Widgets118Base) {
      dependency_6 = _beyondJsReact18Widgets118Base;
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
    }, function (_beyondJsKernel0114Texts) {
      dependency_12 = _beyondJsKernel0114Texts;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_13 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_15 = _aimpactChatSdk155ChatComponentCode;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_16 = _aimpactAilearnApp061ModelWrapper;
    }, function (_gsap2) {
      dependency_17 = _gsap2;
    }, function (_pragmateUi108Modal) {
      dependency_18 = _pragmateUi108Modal;
    }, function (_pragmateUi108Chips) {
      dependency_19 = _pragmateUi108Chips;
    }, function (_pragmateUi108Components) {
      dependency_20 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_21 = _aimpactAilearnApp061ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_22 = _beyondJsReact18Widgets118Hooks;
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
    }, function (_beyondJsKernel0114Styles) {
      dependency_30 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/react-18-widgets/base', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/http-suite/api', dependency_9], ['@aimpact/ailearn-sdk/startup', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@beyond-js/kernel/texts', dependency_12], ['@aimpact/ailearn-sdk/entities/articles', dependency_13], ['react', dependency_14], ['@aimpact/chat-sdk/chat-component.code', dependency_15], ['@aimpact/ailearn-app/model/wrapper', dependency_16], ['gsap', dependency_17], ['pragmate-ui/modal', dependency_18], ['pragmate-ui/chips', dependency_19], ['pragmate-ui/components', dependency_20], ['@aimpact/ailearn-app/components/ui', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/icons', dependency_23], ['framer-motion', dependency_24], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_25], ['pragmate-ui/drawer', dependency_26], ['@radix-ui/react-select', dependency_27], ['@radix-ui/react-icons', dependency_28], ['pragmate-ui/toast', dependency_29], ['@beyond-js/kernel/styles', dependency_30]]);
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
        hash: 3753751306,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GeneralChat = GeneralChat;
          var React = require("react");
          var _useChatToggle = require("./use-chat-toggle");
          var _chatWindow = require("./chat-window");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function GeneralChat() {
            const {
              isExpanded,
              chatWindowRef,
              handleToggle
            } = (0, _useChatToggle.useChatToggle)();
            const buttonRef = React.useRef(null);
            const chatContentRef = React.useRef(null);
            if (!_wrapper.Config.kb) return null;
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
        hash: 611890346,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 1403085101,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 2066626741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _credits = require("../coins/credits");
          var _context = require("../context");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            }, _wrapper.Config.kb && _react.default.createElement(_icons.IconButton, {
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
        hash: 2477182362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIl9yb3V0aW5nIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwic2hvd0NyZWRpdHMiLCJzaG93RHJhd2VyIiwidmFsdWUiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsImNhbkNvbnN1bWVDcmVkaXRzIiwicHJldmlvdXNQYXRobmFtZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImVuc3VyZUNyZWRpdHMiLCJiaW5kIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJleGlzdHMiLCJpdGVtcyIsImZpbmRJbmRleCIsIml0ZW0iLCJmaW5kTGFzdEluZGV4IiwiYXJyYXkiLCJwcmVkaWNhdGUiLCJpIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiQXJyYXkiLCJpc0FycmF5IiwiaW5jbHVkZXMiLCJuZXdJdGVtcyIsInNsaWNlIiwic2V0IiwiZ2xvYmFsVGhpcyIsImxheW91dCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbkxpc3RlbiIsImNsZWFyTW9kZWwiLCJzYXZlZCIsImNhbGxiYWNrIiwic3BlY3MiLCJjb25zb2xlIiwiZXJyb3IiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJvdmVybGF5Iiwic2V0VGl0bGUiLCJ0aXRsZSIsIm9uUmVmcmVzaCIsInJlZnJlc2giLCJmb3JjZSIsInByb3BzIiwidXBkYXRlZCIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJfY29yZSIsIl93cmFwcGVyIiwiX2FwaSIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJDaGF0U3RvcmUiLCJjaGF0IiwiYXBpIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJpbml0IiwicmVhZHkiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImdldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsImNsb3NlIiwiY3JlYXRlIiwibGFuZ3VhZ2UiLCJvcmdJZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwicmVzcG9uc2UiLCJwb3N0Iiwib3JnYW5pemF0aW9uSWQiLCJzdGF0dXMiLCJFcnJvciIsIkNoYXQiLCJkYXRhIiwiZGVmYXVsdCIsImxvYWRBbGwiLCJlIiwiX2Jyb2tlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGF0IiwiX2FydGljbGVzIiwiaXNTdG9yZSIsImJyb2tlciIsImNoYXRTdG9yZSIsImtiQ29sbGVjdGlvbiIsImhpc3RvcnlDbGVhbnVwIiwic2Vzc2lvbiIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIktCQ29sbGVjdGlvbiIsInNldHVwSGlzdG9yeUxpc3RlbmVyIiwidmFsaWRhdGVQYXJhbXMiLCJsb2FkU2VhcmNoIiwidGV4dCIsImxvYWQiLCJoaXN0b3J5U3RhdGUiLCJoaXN0b3J5Iiwic3RhdGUiLCJxdWVyeSIsInRyaW0iLCJjbGVhclNlYXJjaCIsInJlcGxhY2VTdGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFuZGxlVXJsQ2hhbmdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9yaWdpbmFsUHVzaFN0YXRlIiwicHVzaFN0YXRlIiwib3JpZ2luYWxSZXBsYWNlU3RhdGUiLCJhcmdzIiwiYXBwbHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGlzdGVuIiwib2ZmIiwiUmVhY3QiLCJDaGF0RW1wdHlTdGF0ZSIsIm9uQ3JlYXRlQ2hhdCIsImlzQ3JlYXRpbmciLCJzZWxlY3RlZE9yZ0lkIiwic2V0U2VsZWN0ZWRPcmdJZCIsInVzZVN0YXRlIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJoYW5kbGVDcmVhdGVDaGF0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImVtcHR5Iiwibm9BY3RpdmUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9yZ2FuaXphdGlvbiIsInBsYWNlaG9sZGVyIiwibWFwIiwib3JnIiwia2V5IiwibmFtZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUJ1dHRvbiIsIl91c2VDaGF0U3RvcmUiLCJfY2hhdENvbXBvbmVudCIsIl9jaGF0RW1wdHlTdGF0ZSIsIl9lbXB0eUNoYXQiLCJfY29udGV4dCIsIl91c2VDaGF0QW5pbWF0aW9uIiwiQ2hhdFdpbmRvdyIsImNoYXRXaW5kb3dSZWYiLCJjaGF0Q29udGVudFJlZiIsIm9uVG9nZ2xlIiwidXNlQ2hhdFN0b3JlIiwiY2hhdFNwZWNzIiwic2V0SXNDcmVhdGluZyIsImlzRXhwYW5kZWQiLCJ0b2dnbGVDaGF0IiwidXNlQ2hhdEFuaW1hdGlvbiIsInVzZUxheW91dENvbnRleHQiLCJyZWYiLCJhY3Rpb25zIiwibWluaW1pemUiLCJleHBhbmQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWNvbiIsInVzZXJzIiwiYXV0b3BsYXkiLCJFbXB0eUNoYXQiLCJwbGF5ZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJjcmVhdGluZyIsInN0YXJ0Q2hhdCIsIl91c2VDaGF0VG9nZ2xlIiwiX2NoYXRXaW5kb3ciLCJHZW5lcmFsQ2hhdCIsImhhbmRsZVRvZ2dsZSIsInVzZUNoYXRUb2dnbGUiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJDb25maWciLCJrYiIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJzZXRJc0V4cGFuZGVkIiwiZXhwYW5kQ2hhdCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImVsZW1lbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiekluZGV4IiwibWluaW1pemVDaGF0IiwiaXNBbmltYXRpbmciLCJfZ3NhcCIsImdzYXAiLCJ0byIsInNjYWxlIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJmcm9tVG8iLCJ1c2VFZmZlY3QiLCJfcmVhY3QiLCJfbW9kYWwiLCJDb2luc0FsZXJ0Iiwic2hvdyIsIm9uQ2xvc2UiLCJjb2lucyIsImFsZXJ0IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwiZGVzY3JpcHRpb24iLCJfY2hpcHMiLCJfY29tcG9uZW50cyIsIl9hbmltYXRlZExhYmVsIiwiX3VpIiwiX2hvb2tzIiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJzZXRNZXNzYWdlIiwic2V0SGFzQ3JlZGl0cyIsImNscyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwiY29uc3VtZWQiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1c2VTdG9yZSIsImhlYWRlciIsIkNvbnRyb2wiLCJhdHRycyIsInZhcmlhbnQiLCJCdXR0b24iLCJDaGlwIiwicGVyY2VudGFnZUF2YWlsYWJsZSIsImxhYmVsIiwiYXZhaWxhYmxlIiwiQW5pbWF0ZWRMYWJlbCIsIkZyYWdtZW50IiwiQmF0dGVyeSIsInBlcmNlbnQiLCJfaWNvbnMiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGVkIiwiTm90aWZpY2F0aW9uc0JhciIsInNldFNob3ciLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlZCIsImFzIiwiSHRtbFdyYXBwZXIiLCJJY29uIiwiY2hpbGRyZW4iLCJtb3Rpb24iLCJzcGFuIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZXhpdCIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY3JlZGl0cyIsIkhlYWRlciIsImhhc01vZGVsIiwiY2xvc2FibGUiLCJiYWNrbGluayIsImJhY2tMaW5rIiwidG9nZ2xlRHJhd2VyIiwiTmF2YmFySGVhZGVyIiwiSWNvbkJ1dHRvbiIsIk92ZXJsYXlIZWFkZXIiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZW50IiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImhhbmRsZUZldGNoaW5nQ2hhbmdlIiwiU2VhcmNoUmVzdWx0SXRlbSIsIm1ldGFkYXRhIiwiTWF0aCIsInJvdW5kIiwic2NvcmUiLCJ0YWdzIiwidGFnIiwiaW5kZXgiLCJfZHJhd2VyIiwiX29yZ1NlYXJjaEJveCIsIl9kcmF3ZXJDb250ZW50IiwiTGF5b3V0RHJhd2VyIiwiaGFzTXVsdGlwbGVPcmdzIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcmdDaGFuZ2UiLCJoYW5kbGVTZWFyY2giLCJEcmF3ZXIiLCJvcGVuIiwiT3JnU2VhcmNoQm94Iiwib25PcmdDaGFuZ2UiLCJkcmF3ZXIiLCJzZWFyY2giLCJvblNlYXJjaCIsIlNlbGVjdCIsIl9yZWFjdEljb25zIiwiX3VzZVBvcnRhbENvbnRhaW5lciIsImluaXRpYWxRdWVyeSIsInNldFF1ZXJ5IiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImNvbnRhaW5lciIsInBvcnRhbENvbnRhaW5lciIsIndyYXBwZXJSZWYiLCJ1c2VQb3J0YWxDb250YWluZXIiLCJoYW5kbGVDbGVhciIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInNlYXJjaFF1ZXJ5IiwiZ2V0Iiwic2VhcmNoU3RhdGUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93Iiwib25TdWJtaXQiLCJyb2xlIiwiY3giLCJjeSIsInIiLCJSb290Iiwib25WYWx1ZUNoYW5nZSIsIlRyaWdnZXIiLCJWYWx1ZSIsIkNoZXZyb25Eb3duSWNvbiIsIlBvcnRhbCIsIkNvbnRlbnQiLCJzaWRlIiwiYWxpZ24iLCJzaWRlT2Zmc2V0IiwiYXZvaWRDb2xsaXNpb25zIiwiVmlld3BvcnQiLCJvIiwiSXRlbSIsIkl0ZW1UZXh0Iiwic2V0Q29udGFpbmVyIiwibm9kZSIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaXNTaGFkb3ciLCJob3N0IiwicG9ydGFsIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiYm9keSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvYXN0IiwiX2FsZXJ0IiwiX25vdGlmaWNhdGlvbnNCYXIiLCJfaGVhZGVyIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsInNob3dDb2luc0FsZXJ0Iiwic2V0U2hvd0NvaW5zQWxlcnQiLCJ0b2dnbGVDb2luc0FsZXJ0IiwibW9kZWxUeXBlIiwiUHJvdmlkZXIiLCJUb2FzdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJQcmVsb2FkIl0sInNvdXJjZXMiOlsiLy90cy9icm9rZXIudHMiLCIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlL2NoYXQudHMiLCIvL3RzL3N0b3JlL2luZGV4LnRzIiwiLy90cy92aWV3L2NoYXQvY2hhdC1lbXB0eS1zdGF0ZS50c3giLCIvL3RzL3ZpZXcvY2hhdC9jaGF0LXdpbmRvdy50c3giLCIvL3RzL3ZpZXcvY2hhdC9lbXB0eS1jaGF0LnRzeCIsIi8vdHMvdmlldy9jaGF0L2luZGV4LnRzeCIsIi8vdHMvdmlldy9jaGF0L3VzZS1jaGF0LWFuaW1hdGlvbi50cyIsIi8vdHMvdmlldy9jaGF0L3VzZS1jaGF0LXN0b3JlLnRzIiwiLy90cy92aWV3L2NoYXQvdXNlLWNoYXQtdG9nZ2xlLnRzIiwiLy90cy92aWV3L2NvaW5zL2FsZXJ0LnRzeCIsIi8vdHMvdmlldy9jb2lucy9jcmVkaXRzLnRzeCIsIi8vdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC1sYWJlbC50c3giLCIvL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC50c3giLCIvL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiLy90cy92aWV3L2NvbXBvbmVudHMvb3ZlcmxheS1oZWFkZXIudHN4IiwiLy90cy92aWV3L2NvbnRleHQudHMiLCIvL3RzL3ZpZXcvZHJhd2VyL2RyYXdlci1jb250ZW50LnRzeCIsIi8vdHMvdmlldy9kcmF3ZXIvaW5kZXgudHN4IiwiLy90cy92aWV3L2RyYXdlci9vcmctc2VhcmNoLWJveC50c3giLCIvL3RzL3ZpZXcvZHJhd2VyL3VzZS1wb3J0YWwtY29udGFpbmVyLnRzIiwiLy9nbG9iYWwudHN4LyIsIi8vdHMvdmlldy9pbmRleC50c3giLCIvL3RzL3ZpZXcvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFZTSxNQUFPSSxNQUFPLFNBQVFMLE1BQUEsQ0FBQU0sYUFBc0I7WUFFakQsQ0FBQUMsS0FBTTtZQU1OLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU8s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