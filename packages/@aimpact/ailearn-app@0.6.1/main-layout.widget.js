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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
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
        hash: 743020008,
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
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
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
        hash: 263142475,
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
          console.log(_wrapper.settings);
          function GeneralChat() {
            const {
              isExpanded,
              chatWindowRef,
              handleToggle
            } = (0, _useChatToggle.useChatToggle)();
            const buttonRef = React.useRef(null);
            const chatContentRef = React.useRef(null);
            if (!_wrapper.settings.kb) return null;
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
        hash: 508667444,
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
        hash: 1203422131,
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
            const toggleCoinsModal = () => {
              setShowCoinsModal(!showCoinsModal);
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIl9yb3V0aW5nIiwiQnJva2VyIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsIm1lc3NhZ2UiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwic2hvd0NyZWRpdHMiLCJzaG93RHJhd2VyIiwidmFsdWUiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsImNhbkNvbnN1bWVDcmVkaXRzIiwicHJldmlvdXNQYXRobmFtZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImVuc3VyZUNyZWRpdHMiLCJiaW5kIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJleGlzdHMiLCJpdGVtcyIsImZpbmRJbmRleCIsIml0ZW0iLCJmaW5kTGFzdEluZGV4IiwiYXJyYXkiLCJwcmVkaWNhdGUiLCJpIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiQXJyYXkiLCJpc0FycmF5IiwiaW5jbHVkZXMiLCJuZXdJdGVtcyIsInNsaWNlIiwic2V0IiwiZ2xvYmFsVGhpcyIsImxheW91dCIsImFkZE1vZGVsIiwiaWQiLCJ1bmRlZmluZWQiLCJvbkxpc3RlbiIsImNsZWFyTW9kZWwiLCJzYXZlZCIsImNhbGxiYWNrIiwic3BlY3MiLCJjb25zb2xlIiwiZXJyb3IiLCJzaG93TWVzc2FnZSIsInR5cGUiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJvdmVybGF5Iiwic2V0VGl0bGUiLCJ0aXRsZSIsIm9uUmVmcmVzaCIsInJlZnJlc2giLCJmb3JjZSIsInByb3BzIiwidXBkYXRlZCIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJfY29yZSIsIl93cmFwcGVyIiwiX2FwaSIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJDaGF0U3RvcmUiLCJjaGF0IiwiYXBpIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJpbml0IiwicmVhZHkiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImdldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsImNsb3NlIiwiY3JlYXRlIiwibGFuZ3VhZ2UiLCJvcmdJZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwicmVzcG9uc2UiLCJwb3N0Iiwib3JnYW5pemF0aW9uSWQiLCJzdGF0dXMiLCJFcnJvciIsIkNoYXQiLCJkYXRhIiwiZGVmYXVsdCIsImxvYWRBbGwiLCJlIiwiX2Jyb2tlciIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGF0IiwiX2FydGljbGVzIiwiaXNTdG9yZSIsImJyb2tlciIsImNoYXRTdG9yZSIsImtiQ29sbGVjdGlvbiIsImhpc3RvcnlDbGVhbnVwIiwic2Vzc2lvbiIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIktCQ29sbGVjdGlvbiIsInNldHVwSGlzdG9yeUxpc3RlbmVyIiwidmFsaWRhdGVQYXJhbXMiLCJsb2FkU2VhcmNoIiwidGV4dCIsImxvYWQiLCJoaXN0b3J5U3RhdGUiLCJoaXN0b3J5Iiwic3RhdGUiLCJxdWVyeSIsInRyaW0iLCJjbGVhclNlYXJjaCIsInJlcGxhY2VTdGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFuZGxlVXJsQ2hhbmdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9yaWdpbmFsUHVzaFN0YXRlIiwicHVzaFN0YXRlIiwib3JpZ2luYWxSZXBsYWNlU3RhdGUiLCJhcmdzIiwiYXBwbHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGlzdGVuIiwib2ZmIiwiUmVhY3QiLCJDaGF0RW1wdHlTdGF0ZSIsIm9uQ3JlYXRlQ2hhdCIsImlzQ3JlYXRpbmciLCJzZWxlY3RlZE9yZ0lkIiwic2V0U2VsZWN0ZWRPcmdJZCIsInVzZVN0YXRlIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJoYW5kbGVDcmVhdGVDaGF0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImVtcHR5Iiwibm9BY3RpdmUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9yZ2FuaXphdGlvbiIsInBsYWNlaG9sZGVyIiwibWFwIiwib3JnIiwia2V5IiwibmFtZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUJ1dHRvbiIsIl91c2VDaGF0U3RvcmUiLCJfY2hhdENvbXBvbmVudCIsIl9jaGF0RW1wdHlTdGF0ZSIsIl9lbXB0eUNoYXQiLCJfY29udGV4dCIsIl91c2VDaGF0QW5pbWF0aW9uIiwiQ2hhdFdpbmRvdyIsImNoYXRXaW5kb3dSZWYiLCJjaGF0Q29udGVudFJlZiIsIm9uVG9nZ2xlIiwidXNlQ2hhdFN0b3JlIiwiY2hhdFNwZWNzIiwic2V0SXNDcmVhdGluZyIsImlzRXhwYW5kZWQiLCJ0b2dnbGVDaGF0IiwidXNlQ2hhdEFuaW1hdGlvbiIsInVzZUxheW91dENvbnRleHQiLCJyZWYiLCJhY3Rpb25zIiwibWluaW1pemUiLCJleHBhbmQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWNvbiIsInVzZXJzIiwiYXV0b3BsYXkiLCJFbXB0eUNoYXQiLCJwbGF5ZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJjcmVhdGluZyIsInN0YXJ0Q2hhdCIsIl91c2VDaGF0VG9nZ2xlIiwiX2NoYXRXaW5kb3ciLCJsb2ciLCJzZXR0aW5ncyIsIkdlbmVyYWxDaGF0IiwiaGFuZGxlVG9nZ2xlIiwidXNlQ2hhdFRvZ2dsZSIsImJ1dHRvblJlZiIsInVzZVJlZiIsImtiIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZCIsInNldElzRXhwYW5kZWQiLCJleHBhbmRDaGF0IiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiZWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJtaW5pbWl6ZUNoYXQiLCJpc0FuaW1hdGluZyIsIl9nc2FwIiwiZ3NhcCIsInRvIiwic2NhbGUiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNlIiwib25Db21wbGV0ZSIsImZyb21UbyIsInVzZUVmZmVjdCIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJkZXNjcmlwdGlvbiIsIl9jaGlwcyIsIl9jb21wb25lbnRzIiwiX2FuaW1hdGVkTGFiZWwiLCJfdWkiLCJfaG9va3MiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInNldE1lc3NhZ2UiLCJzZXRIYXNDcmVkaXRzIiwiY2xzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJjb25zdW1lZCIsIm9uQ3JlZGl0c0NoYW5nZSIsImNsYXNzTGlzdCIsImFkZCIsInVzZVN0b3JlIiwiaGVhZGVyIiwiQ29udHJvbCIsImF0dHJzIiwidmFyaWFudCIsIkJ1dHRvbiIsIkNoaXAiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwibGFiZWwiLCJhdmFpbGFibGUiLCJBbmltYXRlZExhYmVsIiwiRnJhZ21lbnQiLCJCYXR0ZXJ5IiwicGVyY2VudCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJjaGlsZHJlbiIsIm1vdGlvbiIsInNwYW4iLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwiaGFzTW9kZWwiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiYmFja0xpbmsiLCJ0b2dnbGVEcmF3ZXIiLCJOYXZiYXJIZWFkZXIiLCJDb25maWciLCJJY29uQnV0dG9uIiwiT3ZlcmxheUhlYWRlciIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRlbnQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlRmV0Y2hpbmdDaGFuZ2UiLCJTZWFyY2hSZXN1bHRJdGVtIiwibWV0YWRhdGEiLCJNYXRoIiwicm91bmQiLCJzY29yZSIsInRhZ3MiLCJ0YWciLCJpbmRleCIsIl9kcmF3ZXIiLCJfb3JnU2VhcmNoQm94IiwiX2RyYXdlckNvbnRlbnQiLCJMYXlvdXREcmF3ZXIiLCJoYXNNdWx0aXBsZU9yZ3MiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9yZ0NoYW5nZSIsImhhbmRsZVNlYXJjaCIsIkRyYXdlciIsIm9wZW4iLCJPcmdTZWFyY2hCb3giLCJvbk9yZ0NoYW5nZSIsImRyYXdlciIsInNlYXJjaCIsIm9uU2VhcmNoIiwiU2VsZWN0IiwiX3JlYWN0SWNvbnMiLCJfdXNlUG9ydGFsQ29udGFpbmVyIiwiaW5pdGlhbFF1ZXJ5Iiwic2V0UXVlcnkiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiY29udGFpbmVyIiwicG9ydGFsQ29udGFpbmVyIiwid3JhcHBlclJlZiIsInVzZVBvcnRhbENvbnRhaW5lciIsImhhbmRsZUNsZWFyIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwic2VhcmNoUXVlcnkiLCJnZXQiLCJzZWFyY2hTdGF0ZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJvblN1Ym1pdCIsInJvbGUiLCJjeCIsImN5IiwiciIsIlJvb3QiLCJvblZhbHVlQ2hhbmdlIiwiVHJpZ2dlciIsIlZhbHVlIiwiQ2hldnJvbkRvd25JY29uIiwiUG9ydGFsIiwiQ29udGVudCIsInNpZGUiLCJhbGlnbiIsInNpZGVPZmZzZXQiLCJhdm9pZENvbGxpc2lvbnMiLCJWaWV3cG9ydCIsIm8iLCJJdGVtIiwiSXRlbVRleHQiLCJzZXRDb250YWluZXIiLCJub2RlIiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJpc1NoYWRvdyIsImhvc3QiLCJwb3J0YWwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9hc3QiLCJfYWxlcnQiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9oZWFkZXIiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInRvZ2dsZUNvaW5zQWxlcnQiLCJtb2RlbFR5cGUiLCJQcm92aWRlciIsIlRvYXN0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIlByZWxvYWQiXSwic291cmNlcyI6WyIvL3RzL2Jyb2tlci50cyIsIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUvY2hhdC50cyIsIi8vdHMvc3RvcmUvaW5kZXgudHMiLCIvL3RzL3ZpZXcvY2hhdC9jaGF0LWVtcHR5LXN0YXRlLnRzeCIsIi8vdHMvdmlldy9jaGF0L2NoYXQtd2luZG93LnRzeCIsIi8vdHMvdmlldy9jaGF0L2VtcHR5LWNoYXQudHN4IiwiLy90cy92aWV3L2NoYXQvaW5kZXgudHN4IiwiLy90cy92aWV3L2NoYXQvdXNlLWNoYXQtYW5pbWF0aW9uLnRzIiwiLy90cy92aWV3L2NoYXQvdXNlLWNoYXQtc3RvcmUudHMiLCIvL3RzL3ZpZXcvY2hhdC91c2UtY2hhdC10b2dnbGUudHMiLCIvL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiLy90cy92aWV3L2NvaW5zL2NyZWRpdHMudHN4IiwiLy90cy92aWV3L2NvaW5zL25vdGlmaWNhdGlvbnMtYmFyLnRzeCIsIi8vdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi8vdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLnRzeCIsIi8vdHMvdmlldy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvL3RzL3ZpZXcvY29udGV4dC50cyIsIi8vdHMvdmlldy9kcmF3ZXIvZHJhd2VyLWNvbnRlbnQudHN4IiwiLy90cy92aWV3L2RyYXdlci9pbmRleC50c3giLCIvL3RzL3ZpZXcvZHJhd2VyL29yZy1zZWFyY2gtYm94LnRzeCIsIi8vdHMvdmlldy9kcmF3ZXIvdXNlLXBvcnRhbC1jb250YWluZXIudHMiLCIvL2dsb2JhbC50c3gvIiwiLy90cy92aWV3L2luZGV4LnRzeCIsIi8vdHMvdmlldy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQVlNLE1BQU9JLE1BQU8sU0FBUUwsTUFBQSxDQUFBTSxhQUFzQjtZQUVqRCxDQUFBQyxLQUFNO1lBTU4sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxFQUFFRSxPQUFPLEVBQUVDLEtBQUssR0FBRyxDQUFDO1lBQ3ZDO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU9WLFdBQUEsQ0FBQVcsZUFBc0I7WUFDOUI7WUFFQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQSxDQUFBQyxVQUFXLEdBQVksS0FBSztZQUM1QixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUlBLFVBQVVBLENBQUNDLEtBQWM7Y0FDNUIsSUFBSSxJQUFJLENBQUMsQ0FBQUQsVUFBVyxLQUFLQyxLQUFLLEVBQUU7Y0FDaEMsSUFBSSxDQUFDLENBQUFELFVBQVcsR0FBR0MsS0FBSztjQUN4QixJQUFJLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBT2YsS0FBQSxDQUFBZSxXQUFXLENBQUNDLEtBQUs7WUFDekI7WUFDQTs7Ozs7WUFLQSxDQUFBQyxpQkFBa0I7WUFDbEIsSUFBSUEsaUJBQWlCQSxDQUFBO2NBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUFiLEtBQU0sRUFBRWEsaUJBQWlCLElBQUksSUFBSSxDQUFDLENBQUFBLGlCQUFrQjtZQUNqRTtZQUVBLElBQUlBLGlCQUFpQkEsQ0FBQ0osS0FBSztjQUMxQixJQUFJLElBQUksQ0FBQyxDQUFBSSxpQkFBa0IsS0FBS0osS0FBSyxFQUFFO2NBQ3ZDLElBQUksQ0FBQyxDQUFBSSxpQkFBa0IsR0FBR0osS0FBSztjQUUvQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQSxDQUFBSSxnQkFBaUIsR0FBV2pCLFFBQUEsQ0FBQWtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRO1lBQ2hEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUNMQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVk7ZUFDN0UsQ0FBQztjQUVGLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQ2xEekIsS0FBQSxDQUFBZSxXQUFXLENBQUNXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUN0RHhCLFFBQUEsQ0FBQWtCLE9BQU8sQ0FBQ08sRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFLO2dCQUN6QixJQUFJLElBQUksQ0FBQyxDQUFBUixnQkFBaUIsS0FBS2pCLFFBQUEsQ0FBQWtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxDQUFBSCxnQkFBaUIsR0FBR2pCLFFBQUEsQ0FBQWtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRO2dCQUM3QyxJQUFJTyxNQUFNLEdBQUcsSUFBSSxDQUFDbkIsVUFBVSxDQUFDb0IsS0FBSyxFQUFFQyxTQUFTLENBQUNDLElBQUksSUFBSUEsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLOUIsUUFBQSxDQUFBa0IsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQztnQkFFekYsSUFBSU8sTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO2tCQUNsQixTQUFTSSxhQUFhQSxDQUFDQyxLQUFLLEVBQUVDLFNBQVM7b0JBQ3RDLEtBQUssSUFBSUMsQ0FBQyxHQUFHRixLQUFLLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUVELENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO3NCQUMzQyxJQUFJRCxTQUFTLENBQUNELEtBQUssQ0FBQ0UsQ0FBQyxDQUFDLEVBQUVBLENBQUMsRUFBRUYsS0FBSyxDQUFDLEVBQUU7d0JBQ2xDLE9BQU9FLENBQUM7OztvQkFHVixPQUFPLENBQUMsQ0FBQztrQkFDVjtrQkFFQSxNQUFNRSxTQUFTLEdBQUdMLGFBQWEsQ0FBQyxJQUFJLENBQUN2QixVQUFVLENBQUNvQixLQUFLLEVBQUVFLElBQUksSUFBRztvQkFDN0QsSUFBSSxDQUFDQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ08sS0FBSyxDQUFDQyxPQUFPLENBQUNSLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUU3QyxPQUFPLENBQUMsQ0FBQ0EsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFUyxRQUFRLENBQUN2QyxRQUFBLENBQUFrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDO2tCQUNuRCxDQUFDLENBQUM7a0JBQ0YsSUFBSWdCLFNBQVMsRUFBRTtvQkFDZCxNQUFNSSxRQUFRLEdBQUcsSUFBSSxDQUFDaEMsVUFBVSxDQUFDb0IsS0FBSyxDQUFDYSxLQUFLLENBQUMsQ0FBQyxFQUFFTCxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUU5RCxJQUFJLENBQUM1QixVQUFVLENBQUNrQyxHQUFHLENBQUM7c0JBQUVkLEtBQUssRUFBRVk7b0JBQVEsQ0FBRSxDQUFDO29CQUN4Qzs7a0JBRUQsSUFBSSxDQUFDaEMsVUFBVSxDQUFDa0MsR0FBRyxDQUFDO29CQUFFZCxLQUFLLEVBQUU7a0JBQUUsQ0FBRSxDQUFDO2tCQUNsQzs7Z0JBR0QsTUFBTVksUUFBUSxHQUFHLElBQUksQ0FBQ2hDLFVBQVUsQ0FBQ29CLEtBQUssRUFBRWEsS0FBSyxDQUFDLENBQUMsRUFBRWQsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFFNUQsSUFBSSxDQUFDbkIsVUFBVSxDQUFDa0MsR0FBRyxDQUFDO2tCQUFFZCxLQUFLLEVBQUVZO2dCQUFRLENBQUUsQ0FBQztjQUN6QyxDQUFDLENBQUM7Y0FDRkcsVUFBVSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtZQUN6QjtZQUNBQyxRQUFRQSxDQUFDMUMsS0FBSyxFQUFFTyxXQUFXLEdBQUcsSUFBSTtjQUNqQyxJQUFJUCxLQUFLLENBQUMyQyxFQUFFLEtBQUtDLFNBQVMsSUFBSTVDLEtBQUssQ0FBQzJDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQTNDLEtBQU0sRUFBRTJDLEVBQUUsRUFBRTtjQUU1RCxJQUFJLENBQUMsQ0FBQTNDLEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQU8sV0FBWSxHQUFHQSxXQUFXO2NBQy9CLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNzQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3VCLFFBQVEsQ0FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUNsRCxJQUFJLENBQUNYLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdEIsSUFBSSxDQUFDQSxPQUFPLENBQUMsZUFBZSxDQUFDO2NBRTdCO1lBQ0Q7WUFFQW9DLFVBQVVBLENBQUE7Y0FDVCxJQUFJLENBQUMsQ0FBQTlDLEtBQU0sR0FBRzRDLFNBQVM7Y0FDdkIsSUFBSSxDQUFDLENBQUFyQyxXQUFZLEdBQUcsS0FBSztZQUMxQjtZQUVBLE1BQU1zQyxRQUFRQSxDQUFBO2NBQ2IsSUFBSSxJQUFJLENBQUMsQ0FBQXRDLFdBQVksS0FBSyxJQUFJLENBQUMsQ0FBQVAsS0FBTSxFQUFFK0MsS0FBSyxFQUFFO2dCQUM3Qzs7Y0FHRCxJQUFJLENBQUMsQ0FBQXhDLFdBQVksR0FBRyxJQUFJLENBQUMsQ0FBQVAsS0FBTSxFQUFFK0MsS0FBSztjQUN0QyxJQUFJLENBQUN4QixZQUFZLEVBQUU7WUFDcEI7WUFFQSxNQUFNSCxhQUFhQSxDQUFDNEIsUUFBUSxFQUFFLEdBQUdDLEtBQUs7Y0FDckM7Y0FFQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFqRCxLQUFNLEVBQUVrRCxPQUFPLENBQUNDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztjQUVqRCxJQUFJLENBQUMsSUFBSSxDQUFDbEQsVUFBVSxFQUFFO2dCQUNyQixJQUFJLENBQUNTLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQzFCOztjQUdELE9BQU9zQyxRQUFRLENBQUMsR0FBR0MsS0FBSyxDQUFDO1lBQzFCO1lBRUFHLFdBQVdBLENBQUNDLElBQUksRUFBRWpELE9BQU87Y0FDeEIsSUFBSSxDQUFDLENBQUFBLE9BQVEsR0FBRztnQkFBRWlELElBQUk7Z0JBQUVqRDtjQUFPLENBQUU7Y0FDakMsSUFBSSxDQUFDTSxPQUFPLENBQUMsY0FBYyxDQUFDO2NBRTVCOEIsVUFBVSxDQUFDYyxVQUFVLENBQUMsTUFBSztnQkFDMUIsSUFBSSxDQUFDLENBQUFsRCxPQUFRLEdBQUd3QyxTQUFTO2NBQzFCLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVDtZQUVBVyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUF2RCxLQUFNLEdBQUc0QyxTQUFTO2NBRXZCLElBQUksQ0FBQ1ksT0FBTyxHQUFHLEtBQUs7Y0FDcEIsSUFBSSxDQUFDakMsWUFBWSxFQUFFO1lBQ3BCO1lBRUFrQyxRQUFRQSxDQUFDQyxLQUFLO2NBQ2IsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7WUFDbkI7WUFFQUMsU0FBU0EsQ0FBQTtjQUNSLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1lBQ2Y7WUFDQXJCLEdBQUdBLENBQUM7Y0FBRWxDLFVBQVU7Y0FBRXdELEtBQUssR0FBRyxLQUFLO2NBQUUsR0FBR0M7WUFBSyxDQUFFO2NBQzFDLEtBQUssQ0FBQ3ZCLEdBQUcsQ0FBQztnQkFBRXNCLEtBQUs7Z0JBQUUsR0FBR0M7Y0FBSyxDQUFFLENBQUM7Y0FDOUIsSUFBSXpELFVBQVUsRUFBRTtnQkFDZixJQUFJLENBQUNBLFVBQVUsQ0FBQ2tDLEdBQUcsQ0FBQztrQkFBRWQsS0FBSyxFQUFFcEI7Z0JBQVUsQ0FBRSxDQUFDOztjQUczQyxPQUFPO2dCQUFFMEQsT0FBTyxFQUFFO2NBQUksQ0FBRTtZQUN6Qjs7VUFDQUMsT0FBQSxDQUFBbEUsTUFBQSxHQUFBQSxNQUFBO1VBRU07VUFBWSxNQUFNbUUsWUFBWSxHQUFBRCxPQUFBLENBQUFDLFlBQUEsR0FBRyxJQUFJbkUsTUFBTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9McEQsSUFBQW9FLEtBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBeUUsTUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEwRSxLQUFBLEdBQUExRSxPQUFBO1VBRU87VUFBVSxNQUNYMkUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ047WUFDQUMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixLQUFBLENBQUFPLE1BQU07WUFDZDs7VUFDQVgsT0FBQSxDQUFBSyxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkQsSUFBQTVFLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFrRixLQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQW1GLFFBQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBb0YsSUFBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUFxRixRQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUF5Q00sTUFBT3VGLFNBQVUsU0FBUXhGLE1BQUEsQ0FBQU0sYUFBeUI7WUFDdkQsQ0FBQW1GLElBQUs7WUFDTCxDQUFBQyxHQUFJO1lBRUpqRSxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFpRSxHQUFJLEdBQUcsSUFBSUwsSUFBQSxDQUFBTSxHQUFHLENBQUNMLFFBQUEsQ0FBQU0sU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMzQyxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaO1lBRUEsSUFBSU4sSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxJQUFJTyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQVAsSUFBSyxLQUFLdEMsU0FBUztZQUMvQztZQUVRLE1BQU00QyxJQUFJQSxDQUFBO2NBQ2pCO2NBQ0EsTUFBTVgsUUFBQSxDQUFBYSxVQUFVLENBQUNDLE9BQU87Y0FFeEI7Y0FDQSxLQUFLLENBQUNGLEtBQUssR0FBRyxJQUFJO1lBQ25CO1lBRUE7WUFDQSxNQUFNRyxXQUFXQSxDQUFBO2NBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVYsSUFBSyxFQUFFLE9BQU8sRUFBRTtjQUMxQixPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLLENBQUNXLFFBQVEsSUFBSSxFQUFFO1lBQ2pDO1lBRUE7WUFDQSxNQUFNQyxXQUFXQSxDQUFDMUYsT0FBZTtjQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE4RSxJQUFLLEVBQUU7Y0FDakI7Y0FDQTtZQUNEO1lBRUE7WUFDQWEsS0FBS0EsQ0FBQTtjQUNKLElBQUksSUFBSSxDQUFDLENBQUFiLElBQUssRUFBRTtnQkFDZjtnQkFDQSxJQUFJLENBQUMsQ0FBQUEsSUFBSyxHQUFHdEMsU0FBUzs7WUFFeEI7WUFFQTtZQUNBLE1BQU1vRCxNQUFNQSxDQUFDQyxRQUFnQixFQUFFQyxLQUFhO2NBQzNDLElBQUk7Z0JBQ0gsTUFBTUMsS0FBSyxHQUFHLE1BQU1uQixRQUFBLENBQUFvQixjQUFjLENBQUNDLElBQUksQ0FBQ0YsS0FBSztnQkFDN0MsSUFBSSxDQUFDLENBQUFoQixHQUFJLENBQUNtQixNQUFNLENBQUNILEtBQUssQ0FBQztnQkFFdkIsTUFBTUksUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFwQixHQUFJLENBQUNxQixJQUFJLENBQUMsVUFBVSxFQUFFO2tCQUNqRFAsUUFBUTtrQkFDUlEsY0FBYyxFQUFFUDtpQkFDaEIsQ0FBQztnQkFFRixJQUFJLENBQUNLLFFBQVEsQ0FBQ0csTUFBTSxFQUFFO2tCQUNyQixNQUFNLElBQUlDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQzs7Z0JBRzVDO2dCQUNBLElBQUksQ0FBQyxDQUFBekIsSUFBSyxHQUFHLElBQUlOLEtBQUEsQ0FBQWdDLElBQUksQ0FBQztrQkFDckJqRSxFQUFFLEVBQUU0RCxRQUFRLENBQUNNLElBQUksQ0FBQ2xFLEVBQUU7a0JBQ3BCc0QsUUFBUSxFQUFFTSxRQUFRLENBQUNNLElBQUksQ0FBQ1osUUFBUSxDQUFDYTtpQkFDakMsQ0FBQztnQkFFRjtnQkFDQSxNQUFNLElBQUksQ0FBQyxDQUFBNUIsSUFBSyxDQUFDNkIsT0FBTyxDQUFDO2tCQUFFcEUsRUFBRSxFQUFFNEQsUUFBUSxDQUFDTSxJQUFJLENBQUNsRTtnQkFBRSxDQUFFLENBQUM7Z0JBRWxEO2dCQUNBLElBQUksQ0FBQ2pDLE9BQU8sQ0FBQyxhQUFhLENBQUM7Z0JBRTNCLE9BQU82RixRQUFRLENBQUNNLElBQUk7ZUFDcEIsQ0FBQyxPQUFPRyxDQUFDLEVBQUU7Z0JBQ1g5RCxPQUFPLENBQUNDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRTZELENBQUMsQ0FBQztnQkFDM0MsTUFBTUEsQ0FBQzs7WUFFVDs7VUFDQWhELE9BQUEsQ0FBQWlCLFNBQUEsR0FBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3SEQsSUFBQXhGLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFtRixRQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQXVILE9BQUEsR0FBQXZILE9BQUE7VUFDQSxJQUFBd0gsTUFBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUF5SCxlQUFBLEdBQUF6SCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTBILEtBQUEsR0FBQTFILE9BQUE7VUFDQSxJQUFBc0YsUUFBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUEySCxTQUFBLEdBQUEzSCxPQUFBO1VBV00sTUFBTytFLFlBQWEsU0FBUWhGLE1BQUEsQ0FBQU0sYUFBcUI7WUFDdER1SCxPQUFPO1lBRVAsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFNBQVU7WUFDVixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsY0FBZTtZQUNmLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPM0MsUUFBQSxDQUFBb0IsY0FBYztZQUN0QjtZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQ3NCLE9BQU8sRUFBRXRCLElBQUk7WUFDMUI7WUFDQSxJQUFJa0IsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxJQUFJaEgsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFnSCxNQUFPLENBQUNoSCxXQUFXO1lBQ2hDO1lBRUEsSUFBSWlILFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsSUFBSUMsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxDQUFBN0csS0FBTSxHQUErQixJQUFJc0csTUFBQSxDQUFBVSxZQUFZLENBQUNULGVBQUEsQ0FBQVUsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSWxILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVILEtBQUssSUFBSSxFQUFFO1lBQ2hDO1lBRUEsSUFBSUUsV0FBV0EsQ0FBQTtjQUNkLE9BQU9mLEtBQUEsQ0FBQWUsV0FBVyxDQUFDQyxLQUFLO1lBQ3pCO1lBRUEsSUFBSVosS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUF1SCxNQUFPLENBQUN2SCxLQUFLO1lBQzFCO1lBQ0EsSUFBSStDLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBd0UsTUFBTyxFQUFFdkgsS0FBSyxFQUFFK0MsS0FBSztZQUNsQztZQUNBLElBQUkwQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQTdFLEtBQU0sQ0FBQzZFLEtBQUssSUFBSTdGLEtBQUEsQ0FBQWUsV0FBVyxDQUFDOEUsS0FBSztZQUM3RDtZQUVBdkUsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFDTEMsVUFBVSxFQUFFLENBQUMsWUFBWTtlQUN6QixDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUFzRyxZQUFhLEdBQUcsSUFBSUosU0FBQSxDQUFBVSxZQUFZLEVBQUU7Y0FDdkMsSUFBSSxDQUFDdkMsSUFBSSxFQUFFO1lBQ1o7WUFDQUEsSUFBSSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNqQixNQUFNWCxRQUFBLENBQUFhLFVBQVUsQ0FBQ0MsT0FBTztjQUN4QixLQUFLLENBQUNGLEtBQUssR0FBRyxJQUFJO2NBQ2xCLElBQUksQ0FBQyxDQUFBOEIsTUFBTyxHQUFHTixPQUFBLENBQUFoRCxZQUFZO2NBQzNCLElBQUksQ0FBQyxDQUFBc0QsTUFBTyxDQUFDakcsRUFBRSxDQUFDLGVBQWUsRUFBRSxNQUFNLElBQUksQ0FBQ0MsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2NBQzFFc0QsUUFBQSxDQUFBYSxVQUFVLENBQUNwRSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzFDLElBQUksQ0FBQyxDQUFBZ0csTUFBTyxDQUFDakcsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUM1QyxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDVSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDM0IsS0FBQSxDQUFBZSxXQUFXLENBQUNXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FFM0M7Y0FDQSxJQUFJLENBQUMsQ0FBQWlHLFNBQVUsR0FBRyxJQUFJSixLQUFBLENBQUFuQyxTQUFTLEVBQUU7Y0FDakMsSUFBSSxDQUFDLENBQUF1QyxTQUFVLENBQUNsRyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBRS9DO2NBQ0EsSUFBSSxDQUFDeUcsb0JBQW9CLEVBQUU7Y0FFM0I7Y0FDQSxJQUFJLENBQUNDLGNBQWMsRUFBRTtZQUN0QixDQUFDO1lBRUQsTUFBTUMsVUFBVUEsQ0FBQ0MsSUFBYSxFQUFFakMsS0FBYztjQUM3QyxJQUFJO2dCQUNILElBQUksQ0FBQ2lDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBVixZQUFhLEVBQUU7Z0JBRWxDLE1BQU0sSUFBSSxDQUFDLENBQUFBLFlBQWEsQ0FBQ1csSUFBSSxDQUFDO2tCQUFFRCxJQUFJO2tCQUFFMUIsY0FBYyxFQUFFUDtnQkFBSyxDQUFTLENBQUM7Z0JBQ3JFLElBQUksQ0FBQzNFLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU95RixDQUFDLEVBQUU7Z0JBQ1g5RCxPQUFPLENBQUNDLEtBQUssQ0FBQywrQkFBK0IsRUFBRTZELENBQUMsQ0FBQzs7WUFFbkQ7WUFFQWlCLGNBQWNBLENBQUE7Y0FDYjtjQUNBLE1BQU1JLFlBQVksR0FBR0MsT0FBTyxDQUFDQyxLQUFLO2NBRWxDO2NBQ0EsSUFBSUYsWUFBWSxJQUFJQSxZQUFZLENBQUNHLEtBQUssSUFBSUgsWUFBWSxDQUFDRyxLQUFLLENBQUNDLElBQUksRUFBRSxFQUFFO2dCQUNwRSxJQUFJLENBQUNQLFVBQVUsQ0FBQ0csWUFBWSxDQUFDRyxLQUFLLENBQUNDLElBQUksRUFBRSxFQUFFSixZQUFZLENBQUNuQyxLQUFLLENBQUM7O1lBRWhFO1lBRUF3QyxXQUFXQSxDQUFBO2NBQ1Y7Y0FDQSxJQUFJLElBQUksQ0FBQyxDQUFBakIsWUFBYSxFQUFFO2dCQUN2QixJQUFJLENBQUMsQ0FBQUEsWUFBYSxHQUFHLElBQUlKLFNBQUEsQ0FBQVUsWUFBWSxFQUFFOztjQUd4QztjQUNBTyxPQUFPLENBQUNLLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFQyxNQUFNLENBQUNDLFFBQVEsQ0FBQzVILFFBQVEsQ0FBQztjQUV4RCxJQUFJLENBQUNNLFlBQVksRUFBRTtZQUNwQjtZQUVBeUcsb0JBQW9CQSxDQUFBO2NBQ25CO2NBQ0EsTUFBTWMsZUFBZSxHQUFHQSxDQUFBLEtBQUs7Z0JBQzVCLElBQUksQ0FBQ2IsY0FBYyxFQUFFO2NBQ3RCLENBQUM7Y0FFRDtjQUNBVyxNQUFNLENBQUNHLGdCQUFnQixDQUFDLFVBQVUsRUFBRUQsZUFBZSxDQUFDO2NBRXBEO2NBQ0EsTUFBTUUsaUJBQWlCLEdBQUdWLE9BQU8sQ0FBQ1csU0FBUztjQUMzQyxNQUFNQyxvQkFBb0IsR0FBR1osT0FBTyxDQUFDSyxZQUFZO2NBRWpETCxPQUFPLENBQUNXLFNBQVMsR0FBRyxVQUFVLEdBQUdFLElBQUk7Z0JBQ3BDSCxpQkFBaUIsQ0FBQ0ksS0FBSyxDQUFDZCxPQUFPLEVBQUVhLElBQUksQ0FBQztnQkFDdENMLGVBQWUsRUFBRTtjQUNsQixDQUFDO2NBRURSLE9BQU8sQ0FBQ0ssWUFBWSxHQUFHLFVBQVUsR0FBR1EsSUFBSTtnQkFDdkNELG9CQUFvQixDQUFDRSxLQUFLLENBQUNkLE9BQU8sRUFBRWEsSUFBSSxDQUFDO2dCQUN6Q0wsZUFBZSxFQUFFO2NBQ2xCLENBQUM7Y0FFRDtjQUNBLElBQUksQ0FBQyxDQUFBcEIsY0FBZSxHQUFHLE1BQUs7Z0JBQzNCa0IsTUFBTSxDQUFDUyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUVQLGVBQWUsQ0FBQztnQkFDdkRSLE9BQU8sQ0FBQ1csU0FBUyxHQUFHRCxpQkFBaUI7Z0JBQ3JDVixPQUFPLENBQUNLLFlBQVksR0FBR08sb0JBQW9CO2NBQzVDLENBQUM7WUFDRjtZQUNBSSxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNiLElBQUksQ0FBQyxDQUFBL0IsTUFBTyxDQUFDakcsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUM1QyxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDVSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBaUcsU0FBVSxDQUFDbEcsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUNoRCxDQUFDO1lBRUR3RSxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUF3QixNQUFPLENBQUNnQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ2hJLFlBQVksQ0FBQztjQUM3QyxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDMkksR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNoSSxZQUFZLENBQUM7Y0FDNUMsSUFBSSxDQUFDLENBQUFpRyxTQUFVLENBQUMrQixHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ2hJLFlBQVksQ0FBQztjQUNoRCxJQUFJLENBQUMsQ0FBQWlHLFNBQVUsQ0FBQ3pCLEtBQUssRUFBRTtjQUV2QjtjQUNBLElBQUksSUFBSSxDQUFDLENBQUEyQixjQUFlLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxDQUFBQSxjQUFlLEVBQUU7O1lBRXhCOztVQUNBMUQsT0FBQSxDQUFBUyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakxELElBQUErRSxLQUFBLEdBQUE5SixPQUFBO1VBVU0sU0FBVStKLGNBQWNBLENBQUM7WUFBRTdJLEtBQUs7WUFBRTJELEtBQUs7WUFBRW1GLFlBQVk7WUFBRUM7VUFBVSxDQUF3QjtZQUM5RixNQUFNLENBQUNDLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR0wsS0FBSyxDQUFDTSxRQUFRLENBQVMsRUFBRSxDQUFDO1lBRXBFO1lBQ0EsTUFBTUMsSUFBSSxHQUFHeEYsS0FBSyxFQUFFOEIsSUFBSSxFQUFFMkQsYUFBYSxFQUFFdkksS0FBSyxJQUFJLEVBQUU7WUFFcEQsTUFBTXdJLGdCQUFnQixHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNuQyxJQUFJLENBQUNMLGFBQWEsRUFBRTtjQUNwQixNQUFNRixZQUFZLENBQUNFLGFBQWEsQ0FBQztZQUNsQyxDQUFDO1lBRUQsT0FDQ0osS0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFZLEdBQzFCWCxLQUFBLENBQUFVLGFBQUEsWUFBSXRKLEtBQUssRUFBRXNFLElBQUksRUFBRWtGLEtBQUssRUFBRUMsUUFBUSxJQUFJLG9CQUFvQixDQUFLLEVBRzVETixJQUFJLENBQUMvSCxNQUFNLEdBQUcsQ0FBQyxJQUNmd0gsS0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCWCxLQUFBLENBQUFVLGFBQUE7Y0FDQ3pKLEtBQUssRUFBRW1KLGFBQWE7Y0FDcEJVLFFBQVEsRUFBRXRELENBQUMsSUFBSTZDLGdCQUFnQixDQUFDN0MsQ0FBQyxDQUFDdUQsTUFBTSxDQUFDOUosS0FBSyxDQUFDO2NBQy9DMEosU0FBUyxFQUFDLFlBQVk7Y0FBQSxjQUNYO1lBQWMsR0FFekJYLEtBQUEsQ0FBQVUsYUFBQTtjQUFRekosS0FBSyxFQUFDO1lBQUUsR0FBRUcsS0FBSyxFQUFFc0UsSUFBSSxFQUFFc0YsWUFBWSxFQUFFQyxXQUFXLElBQUksMEJBQTBCLENBQVUsRUFDL0ZWLElBQUksQ0FBQ1csR0FBRyxDQUFDQyxHQUFHLElBQ1puQixLQUFBLENBQUFVLGFBQUE7Y0FBUVUsR0FBRyxFQUFFRCxHQUFHLENBQUNoSSxFQUFFO2NBQUVsQyxLQUFLLEVBQUVrSyxHQUFHLENBQUNoSTtZQUFFLEdBQ2hDZ0ksR0FBRyxDQUFDRSxJQUFJLElBQUlGLEdBQUcsQ0FBQ2hJLEVBQUUsQ0FFcEIsQ0FBQyxDQUNNLENBRVYsRUFFRDZHLEtBQUEsQ0FBQVUsYUFBQTtjQUFRQyxTQUFTLEVBQUMsb0JBQW9CO2NBQUNXLE9BQU8sRUFBRWIsZ0JBQWdCO2NBQUVjLFFBQVEsRUFBRXBCLFVBQVUsSUFBSSxDQUFDQztZQUFhLEdBQ3RHaEosS0FBSyxFQUFFc0UsSUFBSSxFQUFFa0YsS0FBSyxFQUFFWSxZQUFZLElBQUksWUFBWSxDQUN6QyxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRBLElBQUF4QixLQUFBLEdBQUE5SixPQUFBO1VBQ0EsSUFBQXVMLGFBQUEsR0FBQXZMLE9BQUE7VUFDQSxJQUFBd0wsY0FBQSxHQUFBeEwsT0FBQTtVQUNBLElBQUF5TCxlQUFBLEdBQUF6TCxPQUFBO1VBQ0EsSUFBQTBMLFVBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBMkwsUUFBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUE0TCxpQkFBQSxHQUFBNUwsT0FBQTtVQVFNLFNBQVU2TCxVQUFVQSxDQUFDO1lBQUVDLGFBQWE7WUFBRUMsY0FBYztZQUFFQztVQUFRLENBQW1CO1lBQ3RGLE1BQU1sRSxTQUFTLEdBQUcsSUFBQXlELGFBQUEsQ0FBQVUsWUFBWSxHQUFFO1lBQ2hDLE1BQU16RyxJQUFJLEdBQUdzQyxTQUFTLEVBQUV0QyxJQUFJO1lBQzVCLE1BQU0wRyxTQUFTLEdBQWlELEVBQUU7WUFDbEUsTUFBTSxDQUFDakMsVUFBVSxFQUFFa0MsYUFBYSxDQUFDLEdBQUdyQyxLQUFLLENBQUNNLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFekQ7WUFDQSxNQUFNO2NBQUVnQyxVQUFVO2NBQUVDO1lBQVUsQ0FBRSxHQUFHLElBQUFULGlCQUFBLENBQUFVLGdCQUFnQixFQUFDO2NBQUVSO1lBQWEsQ0FBRSxDQUFDO1lBRXRFO1lBQ0EsTUFBTTtjQUFFNUssS0FBSztjQUFFMkQ7WUFBSyxDQUFFLEdBQUcsSUFBQThHLFFBQUEsQ0FBQVksZ0JBQWdCLEdBQUU7WUFFM0MsTUFBTWhDLGdCQUFnQixHQUFHLE1BQU8vRCxLQUFhLElBQUk7Y0FDaEQsSUFBSSxDQUFDc0IsU0FBUyxFQUFFO2NBRWhCcUUsYUFBYSxDQUFDLElBQUksQ0FBQztjQUNuQixJQUFJO2dCQUNIO2dCQUNBLE1BQU1yRSxTQUFTLENBQUN4QixNQUFNLENBQUMsSUFBSSxFQUFFRSxLQUFLLENBQUM7ZUFDbkMsQ0FBQyxPQUFPL0MsS0FBSyxFQUFFO2dCQUNmRCxPQUFPLENBQUNDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO2VBQzVDLFNBQVM7Z0JBQ1QwSSxhQUFhLENBQUMsS0FBSyxDQUFDOztZQUV0QixDQUFDO1lBRUQsT0FDQ3JDLEtBQUEsQ0FBQVUsYUFBQTtjQUFLZ0MsR0FBRyxFQUFFVixhQUFhO2NBQUVyQixTQUFTLEVBQUM7WUFBYSxHQUMvQ1gsS0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFhLEdBQzNCWCxLQUFBLENBQUFVLGFBQUEsYUFBS3RKLEtBQUssRUFBRXNFLElBQUksRUFBRXhCLEtBQUssSUFBSSxNQUFNLENBQU0sRUFDdkM4RixLQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXFCLEdBQ25DWCxLQUFBLENBQUFVLGFBQUE7Y0FDQ0MsU0FBUyxFQUFDLGVBQWU7Y0FDekJXLE9BQU8sRUFBRWlCLFVBQVU7Y0FDbkJySSxLQUFLLEVBQ0pvSSxVQUFVLEdBQ1BsTCxLQUFLLEVBQUVzRSxJQUFJLEVBQUVpSCxPQUFPLEVBQUVDLFFBQVEsSUFBSSxXQUFXLEdBQzdDeEwsS0FBSyxFQUFFc0UsSUFBSSxFQUFFaUgsT0FBTyxFQUFFRSxNQUFNLElBQUk7WUFBVSxHQUc3Q1AsVUFBVSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQ2YsRUFDVHRDLEtBQUEsQ0FBQVUsYUFBQTtjQUFRQyxTQUFTLEVBQUMsY0FBYztjQUFDVyxPQUFPLEVBQUVZO1lBQVEsWUFFekMsQ0FDSixDQUNELEVBQ05sQyxLQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDM0JqRixJQUFJLEdBQ0pzRSxLQUFBLENBQUFVLGFBQUEsQ0FBQ2dCLGNBQUEsQ0FBQW9CLG1CQUFtQjtjQUNuQkMsSUFBSSxFQUFDLE1BQU07Y0FDWEMsS0FBSyxFQUFFLEVBQUU7Y0FDVEMsUUFBUSxFQUFFLEtBQUs7Y0FDZnpNLEtBQUssRUFBRWtGLElBQUk7Y0FDWGtGLEtBQUssRUFBRVosS0FBQSxDQUFBVSxhQUFBLENBQUNrQixVQUFBLENBQUFzQixTQUFTO2dCQUFDOUwsS0FBSyxFQUFFQTtjQUFLLEVBQUk7Y0FDbEMrTCxNQUFNLEVBQUU7WUFBSSxHQUVabkQsS0FBQSxDQUFBVSxhQUFBLENBQUNnQixjQUFBLENBQUEwQixlQUFlLE9BQUcsRUFDbkJwRCxLQUFBLENBQUFVLGFBQUEsQ0FBQ2dCLGNBQUEsQ0FBQTJCLGVBQWU7Y0FBQSxHQUFLakI7WUFBUyxFQUFJLENBQ2IsR0FFdEJwQyxLQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQy9CUixVQUFVLEdBQ1ZILEtBQUEsQ0FBQVUsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlgsS0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFTLEVBQU8sRUFDL0JYLEtBQUEsQ0FBQVUsYUFBQSxZQUFJdEosS0FBSyxFQUFFc0UsSUFBSSxFQUFFNEgsUUFBUSxFQUFFMU0sT0FBTyxJQUFJLGlCQUFpQixDQUFLLENBQ3ZELEdBRU5vSixLQUFBLENBQUFVLGFBQUEsQ0FBQ2lCLGVBQUEsQ0FBQTFCLGNBQWM7Y0FDZDdJLEtBQUssRUFBRUEsS0FBSztjQUNaMkQsS0FBSyxFQUFFQSxLQUFLO2NBQ1ptRixZQUFZLEVBQUVPLGdCQUFnQjtjQUM5Qk4sVUFBVSxFQUFFQTtZQUFVLEVBRXZCLENBRUYsQ0FDSSxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUZBLElBQUFILEtBQUEsR0FBQTlKLE9BQUE7VUFNTSxTQUFVZ04sU0FBU0EsQ0FBQztZQUFFOUw7VUFBSyxDQUFtQjtZQUNuRCxPQUNDNEksS0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFZLEdBQzFCWCxLQUFBLENBQUFVLGFBQUEsWUFBSXRKLEtBQUssRUFBRXNFLElBQUksRUFBRWtGLEtBQUssRUFBRTJDLFNBQVMsSUFBSSxrREFBa0QsQ0FBSyxDQUN2RjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUF2RCxLQUFBLEdBQUE5SixPQUFBO1VBQ0EsSUFBQXNOLGNBQUEsR0FBQXROLE9BQUE7VUFDQSxJQUFBdU4sV0FBQSxHQUFBdk4sT0FBQTtVQUNBLElBQUFtRixRQUFBLEdBQUFuRixPQUFBO1VBQ0F3RCxPQUFPLENBQUNnSyxHQUFHLENBQUNySSxRQUFBLENBQUFzSSxRQUFRLENBQUM7VUFDZixTQUFVQyxXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRXRCLFVBQVU7Y0FBRU4sYUFBYTtjQUFFNkI7WUFBWSxDQUFFLEdBQUcsSUFBQUwsY0FBQSxDQUFBTSxhQUFhLEdBQUU7WUFDbkUsTUFBTUMsU0FBUyxHQUFHL0QsS0FBSyxDQUFDZ0UsTUFBTSxDQUFvQixJQUFJLENBQUM7WUFDdkQsTUFBTS9CLGNBQWMsR0FBR2pDLEtBQUssQ0FBQ2dFLE1BQU0sQ0FBaUIsSUFBSSxDQUFDO1lBRXpELElBQUksQ0FBQzNJLFFBQUEsQ0FBQXNJLFFBQVEsQ0FBQ00sRUFBRSxFQUFFLE9BQU8sSUFBSTtZQUM3QixPQUNDakUsS0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBRTNCMkIsVUFBVSxJQUNWdEMsS0FBQSxDQUFBVSxhQUFBLENBQUMrQyxXQUFBLENBQUExQixVQUFVO2NBQUNDLGFBQWEsRUFBRUEsYUFBYTtjQUFFQyxjQUFjLEVBQUVBLGNBQWM7Y0FBRUMsUUFBUSxFQUFFMkI7WUFBWSxFQUNoRyxFQUdEN0QsS0FBQSxDQUFBVSxhQUFBO2NBQ0NnQyxHQUFHLEVBQUVxQixTQUFTO2NBQ2RwRCxTQUFTLEVBQUUsZUFBZTJCLFVBQVUsR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFO2NBQ3hEaEIsT0FBTyxFQUFFdUMsWUFBWTtjQUFBLGNBQ1Y7WUFBYSxHQUV4QjdELEtBQUEsQ0FBQVUsYUFBQTtjQUFLd0QsS0FBSyxFQUFDLElBQUk7Y0FBQ0MsTUFBTSxFQUFDLElBQUk7Y0FBQ0MsT0FBTyxFQUFDLFdBQVc7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsTUFBTSxFQUFDLGNBQWM7Y0FBQ0MsV0FBVyxFQUFDO1lBQUcsR0FDaEd2RSxLQUFBLENBQUFVLGFBQUE7Y0FBTThELENBQUMsRUFBQztZQUErSixFQUFHLENBQ3JLLENBQ0UsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQSxJQUFBeEUsS0FBQSxHQUFBOUosT0FBQTtVQU1NLFNBQVVzTSxnQkFBZ0JBLENBQUM7WUFBRVI7VUFBYSxDQUF5QjtZQUN4RSxNQUFNLENBQUNNLFVBQVUsRUFBRW1DLGFBQWEsQ0FBQyxHQUFHekUsS0FBSyxDQUFDTSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXpELE1BQU1vRSxVQUFVLEdBQUcxRSxLQUFLLENBQUMyRSxXQUFXLENBQUMsTUFBSztjQUN6QyxJQUFJLENBQUMzQyxhQUFhLENBQUM0QyxPQUFPLEVBQUU7Y0FFNUIsTUFBTUMsT0FBTyxHQUFHN0MsYUFBYSxDQUFDNEMsT0FBTztjQUVyQztjQUNBQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE9BQU87Y0FDaENGLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRSxHQUFHLEdBQUcsR0FBRztjQUN2QkgsT0FBTyxDQUFDQyxLQUFLLENBQUNHLElBQUksR0FBRyxHQUFHO2NBQ3hCSixPQUFPLENBQUNDLEtBQUssQ0FBQ0ksS0FBSyxHQUFHLEdBQUc7Y0FDekJMLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDSyxNQUFNLEdBQUcsR0FBRztjQUMxQk4sT0FBTyxDQUFDQyxLQUFLLENBQUNaLEtBQUssR0FBRyxPQUFPO2NBQzdCVyxPQUFPLENBQUNDLEtBQUssQ0FBQ1gsTUFBTSxHQUFHLE9BQU87Y0FDOUJVLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDTSxZQUFZLEdBQUcsR0FBRztjQUNoQ1AsT0FBTyxDQUFDQyxLQUFLLENBQUNPLE1BQU0sR0FBRyxNQUFNO2NBRTdCWixhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxDQUFDekMsYUFBYSxDQUFDLENBQUM7WUFFbkIsTUFBTXNELFlBQVksR0FBR3RGLEtBQUssQ0FBQzJFLFdBQVcsQ0FBQyxNQUFLO2NBQzNDLElBQUksQ0FBQzNDLGFBQWEsQ0FBQzRDLE9BQU8sRUFBRTtjQUU1QixNQUFNQyxPQUFPLEdBQUc3QyxhQUFhLENBQUM0QyxPQUFPO2NBRXJDO2NBQ0FDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUcsVUFBVTtjQUNuQ0YsT0FBTyxDQUFDQyxLQUFLLENBQUNFLEdBQUcsR0FBRyxNQUFNO2NBQzFCSCxPQUFPLENBQUNDLEtBQUssQ0FBQ0csSUFBSSxHQUFHLE1BQU07Y0FDM0JKLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDSSxLQUFLLEdBQUcsS0FBSztjQUMzQkwsT0FBTyxDQUFDQyxLQUFLLENBQUNLLE1BQU0sR0FBRyxNQUFNO2NBQzdCTixPQUFPLENBQUNDLEtBQUssQ0FBQ1osS0FBSyxHQUFHLE9BQU87Y0FDN0JXLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDWCxNQUFNLEdBQUcsT0FBTztjQUM5QlUsT0FBTyxDQUFDQyxLQUFLLENBQUNNLFlBQVksR0FBRyxNQUFNO2NBQ25DUCxPQUFPLENBQUNDLEtBQUssQ0FBQ08sTUFBTSxHQUFHLE1BQU07Y0FFN0JaLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQyxFQUFFLENBQUN6QyxhQUFhLENBQUMsQ0FBQztZQUVuQixNQUFNTyxVQUFVLEdBQUd2QyxLQUFLLENBQUMyRSxXQUFXLENBQUMsTUFBSztjQUN6QyxJQUFJckMsVUFBVSxFQUFFO2dCQUNmZ0QsWUFBWSxFQUFFO2VBQ2QsTUFBTTtnQkFDTlosVUFBVSxFQUFFOztZQUVkLENBQUMsRUFBRSxDQUFDcEMsVUFBVSxFQUFFb0MsVUFBVSxFQUFFWSxZQUFZLENBQUMsQ0FBQztZQUUxQyxPQUFPO2NBQ05oRCxVQUFVO2NBQ1ZpRCxXQUFXLEVBQUUsS0FBSztjQUNsQmIsVUFBVTtjQUNWWSxZQUFZO2NBQ1ovQzthQUNBO1VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUFWLFFBQUEsR0FBQTNMLE9BQUE7VUFFTSxTQUFVaU0sWUFBWUEsQ0FBQTtZQUMzQixNQUFNO2NBQUVwSDtZQUFLLENBQUUsR0FBRyxJQUFBOEcsUUFBQSxDQUFBWSxnQkFBZ0IsR0FBRTtZQUNwQyxPQUFPMUgsS0FBSyxFQUFFaUQsU0FBUztVQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNOQSxJQUFBZ0MsS0FBQSxHQUFBOUosT0FBQTtVQUNBLElBQUFzUCxLQUFBLEdBQUF0UCxPQUFBO1VBRU0sU0FBVTROLGFBQWFBLENBQUE7WUFDNUIsTUFBTSxDQUFDeEIsVUFBVSxFQUFFbUMsYUFBYSxDQUFDLEdBQUd6RSxLQUFLLENBQUNNLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTBCLGFBQWEsR0FBR2hDLEtBQUssQ0FBQ2dFLE1BQU0sQ0FBaUIsSUFBSSxDQUFDO1lBRXhELE1BQU1ILFlBQVksR0FBR0EsQ0FBQSxLQUFLO2NBQ3pCLElBQUl2QixVQUFVLEVBQUU7Z0JBQ2Y7Z0JBQ0FrRCxLQUFBLENBQUFDLElBQUksQ0FBQ0MsRUFBRSxDQUFDMUQsYUFBYSxDQUFDNEMsT0FBTyxFQUFFO2tCQUM5QmUsS0FBSyxFQUFFLENBQUM7a0JBQ1JDLE9BQU8sRUFBRSxDQUFDO2tCQUNWQyxRQUFRLEVBQUUsR0FBRztrQkFDYkMsSUFBSSxFQUFFLGNBQWM7a0JBQ3BCQyxVQUFVLEVBQUVBLENBQUEsS0FBSztvQkFDaEJ0QixhQUFhLENBQUMsS0FBSyxDQUFDO2tCQUNyQjtpQkFDQSxDQUFDO2VBQ0YsTUFBTTtnQkFDTjtnQkFDQUEsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDbkJlLEtBQUEsQ0FBQUMsSUFBSSxDQUFDTyxNQUFNLENBQ1ZoRSxhQUFhLENBQUM0QyxPQUFPLEVBQ3JCO2tCQUNDZSxLQUFLLEVBQUUsQ0FBQztrQkFDUkMsT0FBTyxFQUFFO2lCQUNULEVBQ0Q7a0JBQ0NELEtBQUssRUFBRSxDQUFDO2tCQUNSQyxPQUFPLEVBQUUsQ0FBQztrQkFDVkMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JDLElBQUksRUFBRTtpQkFDTixDQUNEOztZQUVILENBQUM7WUFFRDlGLEtBQUssQ0FBQ2lHLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCO2NBQ0EsSUFBSWpFLGFBQWEsQ0FBQzRDLE9BQU8sRUFBRTtnQkFDMUJZLEtBQUEsQ0FBQUMsSUFBSSxDQUFDMU0sR0FBRyxDQUFDaUosYUFBYSxDQUFDNEMsT0FBTyxFQUFFO2tCQUMvQmUsS0FBSyxFQUFFLENBQUM7a0JBQ1JDLE9BQU8sRUFBRTtpQkFDVCxDQUFDOztZQUVKLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUFPO2NBQ050RCxVQUFVO2NBQ1ZOLGFBQWE7Y0FDYjZCO2FBQ0E7VUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQXFDLE1BQUEsR0FBQWhRLE9BQUE7VUFDQSxJQUFBaVEsTUFBQSxHQUFBalEsT0FBQTtVQUNNLFNBQVVrUSxVQUFVQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsT0FBTztZQUFFbFAsS0FBSztZQUFFRDtVQUFXLENBQUU7WUFDL0QsSUFBSSxDQUFDa1AsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QmpQLEtBQUssR0FBR0EsS0FBSyxDQUFDbVAsS0FBSyxDQUFDQyxLQUFLO1lBRXpCLE9BQ0NOLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3lGLE1BQUEsQ0FBQU0sVUFBVTtjQUFDSixJQUFJO2NBQUNLLFdBQVcsRUFBRXRQLEtBQUssQ0FBQ3VQLE1BQU07Y0FBRUMsU0FBUyxFQUFFTixPQUFPO2NBQUVBLE9BQU8sRUFBRUE7WUFBTyxHQUMvRUosTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxpQkFDQ3dGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsYUFBS3RKLEtBQUssQ0FBQzhDLEtBQUssQ0FBTSxFQUN0QmdNLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsWUFBSXRKLEtBQUssQ0FBQ3lQLFdBQVcsQ0FBSyxDQUNsQixDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEEsSUFBQUMsTUFBQSxHQUFBNVEsT0FBQTtVQUNBLElBQUE2USxXQUFBLEdBQUE3USxPQUFBO1VBQ0EsSUFBQWdRLE1BQUEsR0FBQWhRLE9BQUE7VUFDQSxJQUFBOFEsY0FBQSxHQUFBOVEsT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQStRLEdBQUEsR0FBQS9RLE9BQUE7VUFDQSxJQUFBZ1IsTUFBQSxHQUFBaFIsT0FBQTtVQUVNLFNBQVVpUixnQkFBZ0JBLENBQUE7WUFDL0IsSUFBSTtjQUFFcE0sS0FBSztjQUFFcU0sZ0JBQWdCO2NBQUVoUTtZQUFLLENBQUUsR0FBRyxJQUFBeUssUUFBQSxDQUFBWSxnQkFBZ0IsR0FBRTtZQUUzRCxNQUFNLENBQUM3TCxPQUFPLEVBQUV5USxVQUFVLENBQUMsR0FBR25CLE1BQUEsQ0FBQTVJLE9BQUssQ0FBQ2dELFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTSxHQUFHZ0gsYUFBYSxDQUFDLEdBQUdwQixNQUFBLENBQUE1SSxPQUFLLENBQUNnRCxRQUFRLENBQUN2RixLQUFLLENBQUN0RSxVQUFVLENBQUM7WUFDMUQsTUFBTWlNLEdBQUcsR0FBRyxJQUFBd0QsTUFBQSxDQUFBbEMsTUFBTSxFQUFDLElBQUksQ0FBQztZQUN4QixNQUFNdUQsR0FBRyxHQUFHLHNCQUFzQixDQUFDeE0sS0FBSyxDQUFDZ0QsTUFBTSxDQUFDMUcsaUJBQWlCLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUN6RixNQUFNLENBQUNYLE9BQU8sRUFBRThRLFVBQVUsQ0FBQyxHQUFHdEIsTUFBQSxDQUFBNUksT0FBSyxDQUFDZ0QsUUFBUSxDQUFDdkYsS0FBSyxDQUFDdkUsS0FBSyxFQUFFRSxPQUFPLENBQUMrUSxhQUFhLEVBQUUsSUFBSTtjQUFFOVEsS0FBSyxFQUFFLENBQUM7Y0FBRStRLFFBQVEsRUFBRTtZQUFDLENBQUUsQ0FBQztZQUUvRyxNQUFNQyxlQUFlLEdBQUc5TixJQUFJLElBQUc7Y0FDOUI2SSxHQUFHLENBQUNrQyxPQUFPLENBQUNnRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztjQUUvQ1IsVUFBVSxDQUFDalEsS0FBSyxFQUFFaUYsUUFBUSxDQUFDeEMsSUFBSSxDQUFDLENBQUM7Y0FDakMyTixVQUFVLENBQUM7Z0JBQUUsR0FBR3pNLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQ3ZILEtBQUssRUFBRUUsT0FBTyxDQUFDK1EsYUFBYTtjQUFFLENBQUUsQ0FBQztjQUM5REgsYUFBYSxDQUFDdk0sS0FBSyxDQUFDZ0QsTUFBTSxDQUFDdEgsVUFBVSxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxJQUFBeVEsTUFBQSxDQUFBWSxRQUFRLEVBQUMvTSxLQUFLLENBQUNnRCxNQUFNLENBQUN2SCxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFbVIsZUFBZSxDQUFDO1lBRWpFLElBQUksQ0FBQ3ZRLEtBQUssRUFBRW1QLEtBQUssSUFBSSxDQUFDeEwsS0FBSyxDQUFDZ0QsTUFBTSxDQUFDdkgsS0FBSyxFQUFFMkMsRUFBRSxFQUFFLE9BQU8sSUFBSTtZQUN6RC9CLEtBQUssR0FBR0EsS0FBSyxDQUFDbVAsS0FBSyxDQUFDd0IsTUFBTTtZQUMxQjtZQUNBO1lBQ0EsSUFBSUMsT0FBTztZQUNYLE1BQU1DLEtBQUssR0FBRztjQUNidEgsU0FBUyxFQUFFLGdCQUFnQjtjQUMzQlcsT0FBTyxFQUFFbEksU0FBUztjQUNsQjhPLE9BQU8sRUFBRW5OLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQ3RILFVBQVUsR0FBRyxTQUFTLEdBQUcsU0FBUztjQUN4RDhLLFFBQVEsRUFBRXhHLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQ3RILFVBQVUsSUFBSSxDQUFDc0UsS0FBSyxDQUFDZ0QsTUFBTSxDQUFDMUc7YUFDbkQ7WUFFRCxJQUFJLENBQUMwRCxLQUFLLENBQUNnRCxNQUFNLENBQUN0SCxVQUFVLEVBQUU7Y0FDN0J1UixPQUFPLEdBQUdqQixXQUFBLENBQUFvQixNQUFNO2NBQ2hCRixLQUFLLENBQUMzRyxPQUFPLEdBQUc4RixnQkFBZ0I7YUFDaEMsTUFBTTtjQUNOWSxPQUFPLEdBQUdsQixNQUFBLENBQUFzQixJQUFJO2NBQ2RILEtBQUssQ0FBQ3RILFNBQVMsR0FBRyxlQUFlOztZQUdsQyxNQUFNaEssS0FBSyxHQUFHRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHRCxPQUFPLENBQUNnUixRQUFRLEdBQUcsQ0FBQztZQUM1RCxNQUFNVyxtQkFBbUIsR0FBSTFSLEtBQUssR0FBR0QsT0FBTyxDQUFDQyxLQUFLLEdBQUksR0FBRztZQUV6RCxNQUFNMlIsS0FBSyxHQUFHdk4sS0FBSyxDQUFDZ0QsTUFBTSxDQUFDdEgsVUFBVSxHQUFHLEdBQUdFLEtBQUssSUFBSVMsS0FBSyxDQUFDdUwsT0FBTyxDQUFDNEYsU0FBUyxFQUFFLEdBQUduUixLQUFLLENBQUN1TCxPQUFPLENBQUN6TSxPQUFPO1lBRXJHLE9BQ0NnUSxNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBO2NBQUtDLFNBQVMsRUFBRTRHLEdBQUc7Y0FBRTdFLEdBQUcsRUFBRUE7WUFBRyxHQUM1QndELE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3NHLGNBQUEsQ0FBQXdCLGFBQWEsUUFBRTVSLE9BQU8sQ0FBaUIsRUFFeENzUCxNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUNzSCxPQUFPO2NBQUEsR0FBS0M7WUFBSyxHQUNoQmxOLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQ3RILFVBQVUsR0FDdkJ5UCxNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUF3RixNQUFBLENBQUE1SSxPQUFBLENBQUFtTCxRQUFBLFFBQ0N2QyxNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUN1RyxHQUFBLENBQUF5QixPQUFPO2NBQUNDLE9BQU8sRUFBRU47WUFBbUIsRUFBSSxFQUN6Q25DLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQW1CLEdBQUUySCxLQUFLLENBQVEsQ0FDaEQsR0FFSHBDLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQXdGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW1MLFFBQUEsUUFBR0gsS0FBSyxDQUNSLENBQ1EsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BFQSxJQUFBcEMsTUFBQSxHQUFBaFEsT0FBQTtVQUNBLElBQUE2USxXQUFBLEdBQUE3USxPQUFBO1VBQ0EsSUFBQTBTLE1BQUEsR0FBQTFTLE9BQUE7VUFDQSxJQUFBMlMsYUFBQSxHQUFBM1MsT0FBQTtVQUNBLElBQUE0UyxTQUFBLEdBQUE1UyxPQUFBO1VBQ0EsSUFBQTJMLFFBQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBZ1IsTUFBQSxHQUFBaFIsT0FBQTtVQUVNLFNBQVU2UyxnQkFBZ0JBLENBQUMsRUFBRTtZQUNsQyxNQUFNO2NBQ0xoTyxLQUFLLEVBQUU7Z0JBQUVnRDtjQUFNO1lBQUUsQ0FDakIsR0FBRyxJQUFBOEQsUUFBQSxDQUFBWSxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNLENBQUM0RCxJQUFJLEVBQUUyQyxPQUFPLENBQUMsR0FBRzlDLE1BQUEsQ0FBQTVJLE9BQUssQ0FBQ2dELFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFNUM7WUFDQSxJQUFBNEcsTUFBQSxDQUFBWSxRQUFRLEVBQUMvSixNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVsQyxNQUFNdUksT0FBTyxHQUFHQSxDQUFBLEtBQUs7Y0FDcEIwQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUVEO1lBQ0EsSUFBSSxDQUFDakwsTUFBTSxDQUFDbkgsT0FBTyxFQUFFLE9BQU8sSUFBSTtZQUVoQyxNQUFNMlEsR0FBRyxHQUFHLGlEQUFpRHhKLE1BQU0sQ0FBQ25ILE9BQU8sRUFBRWlELElBQUksRUFBRTtZQUNuRixPQUNDcU0sTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFDbUksYUFBQSxDQUFBSSxlQUFlLFFBQ2Q1QyxJQUFJLElBQ0pILE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ29JLFNBQUEsQ0FBQUksUUFBUTtjQUFDQyxFQUFFLEVBQUMsS0FBSztjQUFDeEksU0FBUyxFQUFFNEc7WUFBRyxHQUNoQ3JCLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3FHLFdBQUEsQ0FBQXFDLFdBQVcsUUFBRXJMLE1BQU0sQ0FBQ25ILE9BQU8sQ0FBQ0EsT0FBTyxDQUFlLEVBQ25Ec1AsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFDa0ksTUFBQSxDQUFBUyxJQUFJO2NBQUMxSSxTQUFTLEVBQUMsWUFBWTtjQUFDb0MsSUFBSSxFQUFDLE9BQU87Y0FBQ3pCLE9BQU8sRUFBRWdGO1lBQU8sRUFBSSxDQUUvRCxDQUNnQjtVQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQUosTUFBQSxHQUFBaFEsT0FBQTtVQUNBLElBQUEyUyxhQUFBLEdBQUEzUyxPQUFBO1VBQ00sU0FBVXNTLGFBQWFBLENBQUM7WUFBRWM7VUFBUSxDQUFFO1lBQ3pDLE1BQU0sQ0FBQ2pELElBQUksRUFBRTJDLE9BQU8sQ0FBQyxHQUFHOUMsTUFBQSxDQUFBNUksT0FBSyxDQUFDZ0QsUUFBUSxDQUFDLElBQUksQ0FBQztZQUU1QzRGLE1BQUEsQ0FBQTVJLE9BQUssQ0FBQzJJLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCK0MsT0FBTyxDQUFDTSxRQUFRLENBQUM7Y0FDakJ0USxVQUFVLENBQUNjLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQmtQLE9BQU8sQ0FBQyxLQUFLLENBQUM7Y0FDZixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQyxFQUFFLENBQUNNLFFBQVEsQ0FBQyxDQUFDO1lBRWQsT0FDQ3BELE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ21JLGFBQUEsQ0FBQUksZUFBZSxRQUNkNUMsSUFBSSxJQUNKSCxNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUNtSSxhQUFBLENBQUFVLE1BQU0sQ0FBQ0MsSUFBSTtjQUNYdlEsTUFBTTtjQUNOMEgsU0FBUyxFQUFDLGVBQWU7Y0FDekI4SSxPQUFPLEVBQUU7Z0JBQ1I3RCxPQUFPLEVBQUUsQ0FBQztnQkFDVjFCLEtBQUssRUFBRTtlQUNQO2NBQ0R3RixPQUFPLEVBQUU7Z0JBQ1I5RCxPQUFPLEVBQUUsQ0FBQztnQkFDVitELFVBQVUsRUFBRTtrQkFDWDlELFFBQVEsRUFBRTtpQkFDVjtnQkFDRDNCLEtBQUssRUFBRTtlQUNQO2NBQ0QwRixJQUFJLEVBQUU7Z0JBQ0xELFVBQVUsRUFBRTtrQkFDWDlELFFBQVEsRUFBRSxHQUFHO2tCQUNiM0IsS0FBSyxFQUFFO2lCQUNQO2dCQUNEMEIsT0FBTyxFQUFFOztZQUNULEdBRUEwRCxRQUFRLENBRVYsQ0FDZ0I7VUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUFwRCxNQUFBLEdBQUFoUSxPQUFBO1VBQ0EsSUFBQTJTLGFBQUEsR0FBQTNTLE9BQUE7VUFDTSxTQUFVZ1QsUUFBUUEsQ0FBQztZQUFFdkksU0FBUztZQUFFMkksUUFBUTtZQUFFSCxFQUFFLEdBQUc7VUFBTSxDQUFFO1lBQzVELE1BQU1VLFNBQVMsR0FBRyxJQUFBaEIsYUFBQSxDQUFBVSxNQUFNLEVBQUNKLEVBQUUsQ0FBQztZQUM1QixPQUNDakQsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFDbUosU0FBUztjQUNUNVEsTUFBTTtjQUNOMEgsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCOEksT0FBTyxFQUFFO2dCQUNSN0QsT0FBTyxFQUFFO2VBQ1Q7Y0FDRDhELE9BQU8sRUFBRTtnQkFDUjlELE9BQU8sRUFBRSxDQUFDO2dCQUNWK0QsVUFBVSxFQUFFO2tCQUNYOUQsUUFBUSxFQUFFOztlQUVYO2NBQ0QrRCxJQUFJLEVBQUU7Z0JBQ0xELFVBQVUsRUFBRTtrQkFDWDlELFFBQVEsRUFBRSxHQUFHO2tCQUNiM0IsS0FBSyxFQUFFO2lCQUNQO2dCQUNEMEIsT0FBTyxFQUFFOztZQUNULEdBRUEwRCxRQUFRLENBQ0U7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQXBELE1BQUEsR0FBQWhRLE9BQUE7VUFDQSxJQUFBNFQsYUFBQSxHQUFBNVQsT0FBQTtVQUNBLElBQUEwUyxNQUFBLEdBQUExUyxPQUFBO1VBQ0EsSUFBQWdSLE1BQUEsR0FBQWhSLE9BQUE7VUFDQSxJQUFBNlQsUUFBQSxHQUFBN1QsT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQW1GLFFBQUEsR0FBQW5GLE9BQUE7VUFFTztVQUFVLFNBQVU4VCxNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRWpQO1lBQUssQ0FBRSxHQUFHLElBQUE4RyxRQUFBLENBQUFZLGdCQUFnQixHQUFFO1lBRXBDLElBQUF5RSxNQUFBLENBQUFZLFFBQVEsRUFBQy9NLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN0RSxNQUFNa1AsUUFBUSxHQUFHLENBQUMsQ0FBQ2xQLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQ3ZILEtBQUs7WUFDckMsTUFBTXlSLEtBQUssR0FBRztjQUNiNU4sS0FBSyxFQUFFVSxLQUFLLENBQUNnRCxNQUFNLENBQUMxRCxLQUFLO2NBQ3pCVSxLQUFLO2NBRUxtUCxRQUFRLEVBQUVuUCxLQUFLLENBQUNnRCxNQUFNLENBQUMvRCxPQUFPO2NBQzlCbVEsUUFBUSxFQUFFcFAsS0FBSyxDQUFDZ0QsTUFBTSxDQUFDcU07YUFDdkI7WUFFRCxNQUFNQyxZQUFZLEdBQUdBLENBQUEsS0FBVztjQUMvQnRQLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQy9HLFVBQVUsR0FBRyxDQUFDK0QsS0FBSyxDQUFDZ0QsTUFBTSxDQUFDL0csVUFBVTtZQUNuRCxDQUFDO1lBRUQsT0FDQ2tQLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ29KLGFBQUEsQ0FBQVEsWUFBWTtjQUFBLEdBQUtyQztZQUFLLEdBQ3JCNU0sUUFBQSxDQUFBa1AsTUFBTSxDQUFDdEcsRUFBRSxJQUFJaUMsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFDa0ksTUFBQSxDQUFBNEIsVUFBVTtjQUFDekgsSUFBSSxFQUFDLFFBQVE7Y0FBQ3BDLFNBQVMsRUFBQyxRQUFRO2NBQUNXLE9BQU8sRUFBRStJLFlBQVk7Y0FBRW5RLEtBQUssRUFBQztZQUFlLEVBQUcsRUFFekcrUCxRQUFRLElBQUkvRCxNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUNxSixRQUFBLENBQUE1QyxnQkFBZ0IsT0FBRyxFQUNoQ3BNLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQzNELE9BQU8sSUFDcEI4TCxNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUNrSSxNQUFBLENBQUE0QixVQUFVO2NBQUN6SCxJQUFJLEVBQUMsU0FBUztjQUFDcEMsU0FBUyxFQUFDLFFBQVE7Y0FBQ1csT0FBTyxFQUFFQSxDQUFBLEtBQU12RyxLQUFLLENBQUNnRCxNQUFNLENBQUMzRCxPQUFPO1lBQUUsRUFDbkYsQ0FDYTtVQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQTRGLEtBQUEsR0FBQTlKLE9BQUE7VUFDQSxJQUFBNFQsYUFBQSxHQUFBNVQsT0FBQTtVQUNBLElBQUEyTCxRQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQTZULFFBQUEsR0FBQTdULE9BQUE7VUFDQSxJQUFBMFMsTUFBQSxHQUFBMVMsT0FBQTtVQUVPO1VBQVUsU0FBVXVVLGFBQWFBLENBQUE7WUFDdkMsTUFBTTtjQUFFMVA7WUFBSyxDQUFFLEdBQUcsSUFBQThHLFFBQUEsQ0FBQVksZ0JBQWdCLEdBQUU7WUFFcEMsT0FDQ3pDLEtBQUEsQ0FBQVUsYUFBQSxDQUFDb0osYUFBQSxDQUFBUSxZQUFZO2NBQUNqUSxLQUFLLEVBQUVVLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQzFELEtBQUs7Y0FBRVUsS0FBSyxFQUFFQSxLQUFLO2NBQUVtUCxRQUFRO2NBQUNDLFFBQVEsRUFBRXBQLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQ3FNO1lBQVEsR0FDN0YsQ0FBQyxDQUFDclAsS0FBSyxDQUFDZ0QsTUFBTSxDQUFDdkgsS0FBSyxJQUFJd0osS0FBQSxDQUFBVSxhQUFBLENBQUNxSixRQUFBLENBQUE1QyxnQkFBZ0IsT0FBRyxFQUM1Q3BNLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQzNELE9BQU8sSUFDcEI0RixLQUFBLENBQUFVLGFBQUEsQ0FBQ2tJLE1BQUEsQ0FBQTRCLFVBQVU7Y0FBQ3pILElBQUksRUFBQyxTQUFTO2NBQUNwQyxTQUFTLEVBQUMsUUFBUTtjQUFDVyxPQUFPLEVBQUVBLENBQUEsS0FBTXZHLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQzNELE9BQU87WUFBRSxFQUNuRixDQUNhO1VBRWpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBOEwsTUFBQSxHQUFBaFEsT0FBQTtVQVFPLE1BQU13VSxhQUFhLEdBQUFsUSxPQUFBLENBQUFrUSxhQUFBLEdBQUd4RSxNQUFBLENBQUE1SSxPQUFLLENBQUNxTixhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUMvRCxNQUFNbEksZ0JBQWdCLEdBQUdBLENBQUEsS0FBTXlELE1BQUEsQ0FBQTVJLE9BQUssQ0FBQ3NOLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUNsUSxPQUFBLENBQUFpSSxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWdEUsSUFBQXlELE1BQUEsR0FBQWhRLE9BQUE7VUFDQSxJQUFBMFMsTUFBQSxHQUFBMVMsT0FBQTtVQU9NLFNBQVUyVSxhQUFhQSxDQUFDO1lBQUU5UDtVQUFLLENBQXVCO1lBQzNELE1BQU07Y0FBRWtEO1lBQVksQ0FBRSxHQUFHbEQsS0FBSztZQUM5QixNQUFNLENBQUMrUCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0UsTUFBQSxDQUFBNUksT0FBSyxDQUFDZ0QsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRDRGLE1BQUEsQ0FBQTVJLE9BQUssQ0FBQzJJLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU0rRSxvQkFBb0IsR0FBR0EsQ0FBQSxLQUFLO2dCQUNqQ0QsV0FBVyxDQUFDOU0sWUFBWSxFQUFFNk0sUUFBUSxJQUFJLEtBQUssQ0FBQztjQUM3QyxDQUFDO2NBRUQsSUFBSTdNLFlBQVksRUFBRTtnQkFDakJBLFlBQVksQ0FBQ25HLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRWtULG9CQUFvQixDQUFDO2dCQUN6REQsV0FBVyxDQUFDOU0sWUFBWSxDQUFDNk0sUUFBUSxJQUFJLEtBQUssQ0FBQzs7Y0FHNUMsT0FBTyxNQUFLO2dCQUNYLElBQUk3TSxZQUFZLEVBQUU7a0JBQ2pCQSxZQUFZLENBQUM4QixHQUFHLENBQUMsa0JBQWtCLEVBQUVpTCxvQkFBb0IsQ0FBQzs7Y0FFNUQsQ0FBQztZQUNGLENBQUMsRUFBRSxDQUFDL00sWUFBWSxDQUFDLENBQUM7WUFFbEIsSUFBSTZNLFFBQVEsRUFBRTtjQUNiLE9BQ0M1RSxNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBO2dCQUFLQyxTQUFTLEVBQUM7Y0FBeUIsR0FDdkN1RixNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUNrSSxNQUFBLENBQUE0QixVQUFVO2dCQUFDekgsSUFBSSxFQUFDLFNBQVM7Z0JBQUNwQyxTQUFTLEVBQUM7Y0FBdUIsRUFBRyxFQUMvRHVGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsMkJBQW9CLEVBQ3BCd0YsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSwwQ0FBNkIsQ0FDeEI7O1lBSVIsSUFBSSxDQUFDekMsWUFBWSxJQUFJLENBQUNBLFlBQVksQ0FBQ2hHLEtBQUssSUFBSWdHLFlBQVksQ0FBQ2hHLEtBQUssQ0FBQ08sTUFBTSxLQUFLLENBQUMsRUFBRTtjQUM1RSxPQUNDME4sTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQTtnQkFBS0MsU0FBUyxFQUFDO2NBQXVCLEdBQ3JDdUYsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFDa0ksTUFBQSxDQUFBNEIsVUFBVTtnQkFBQ3pILElBQUksRUFBQyxRQUFRO2dCQUFDcEMsU0FBUyxFQUFDO2NBQVksRUFBRyxFQUNuRHVGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsaUNBQTBCLEVBQzFCd0YsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSw0REFBK0MsQ0FDMUM7O1lBSVIsT0FDQ3dGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDdUYsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSwyQ0FBK0IsRUFDL0J3RixNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzNCMUMsWUFBWSxDQUFDaEcsS0FBSyxDQUFDaUosR0FBRyxDQUFDL0ksSUFBSSxJQUMzQitOLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3VLLGdCQUFnQjtjQUFDN0osR0FBRyxFQUFFakosSUFBSSxDQUFDZ0IsRUFBRTtjQUFFaEIsSUFBSSxFQUFFQTtZQUFJLEVBQzFDLENBQUMsQ0FDRyxDQUNEO1VBRVI7VUFFQSxTQUFTOFMsZ0JBQWdCQSxDQUFDO1lBQUU5UztVQUFJLENBQWlCO1lBQ2hELE9BQ0MrTixNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFvQixHQUNsQ3VGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsR0FDM0J1RixNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFZLEdBQUV4SSxJQUFJLENBQUMrUyxRQUFRLEVBQUVoUixLQUFLLElBQUksWUFBWSxDQUFNLEVBQ3RFZ00sTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBWSxHLHFCQUFjd0ssSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQ2pULElBQUksQ0FBQ2tULEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEUsSUFBUyxDQUNqRixFQUNObkYsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1QnVGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQVcsR0FBRXhJLElBQUksQ0FBQytTLFFBQVEsRUFBRXZNLElBQUksSUFBSSxlQUFlLENBQUssQ0FDaEUsRUFDTHhHLElBQUksQ0FBQytTLFFBQVEsRUFBRUksSUFBSSxJQUFJblQsSUFBSSxDQUFDK1MsUUFBUSxDQUFDSSxJQUFJLENBQUM5UyxNQUFNLEdBQUcsQ0FBQyxJQUNwRDBOLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVcsR0FDekJ1RixNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFZLGdCQUFrQixFQUM5Q3VGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVcsR0FDeEJ4SSxJQUFJLENBQUMrUyxRQUFRLENBQUNJLElBQUksQ0FBQ3BLLEdBQUcsQ0FBQyxDQUFDcUssR0FBVyxFQUFFQyxLQUFhLEtBQ2xEdEYsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQTtjQUFNVSxHQUFHLEVBQUVvSyxLQUFLO2NBQUU3SyxTQUFTLEVBQUM7WUFBSyxHQUMvQjRLLEdBQUcsQ0FFTCxDQUFDLENBQ0csQ0FFUCxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckZBLElBQUFyRixNQUFBLEdBQUFoUSxPQUFBO1VBQ0EsSUFBQXVWLE9BQUEsR0FBQXZWLE9BQUE7VUFDQSxJQUFBMFMsTUFBQSxHQUFBMVMsT0FBQTtVQUVBLElBQUF3VixhQUFBLEdBQUF4VixPQUFBO1VBQ0EsSUFBQXlWLGNBQUEsR0FBQXpWLE9BQUE7VUFNTSxTQUFVMFYsWUFBWUEsQ0FBQztZQUFFN1E7VUFBSyxDQUFnQjtZQUNuRCxNQUFNLENBQUNxRixhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUc2RixNQUFBLENBQUE1SSxPQUFLLENBQUNnRCxRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ3BFLE1BQU1DLElBQUksR0FBR3hGLEtBQUssRUFBRThCLElBQUksRUFBRTJELGFBQWEsRUFBRXZJLEtBQUssSUFBSSxFQUFFO1lBQ3BELE1BQU00VCxlQUFlLEdBQUd0TCxJQUFJLENBQUMvSCxNQUFNLEdBQUcsQ0FBQztZQUN2QyxNQUFNO2NBQUVwQjtZQUFLLENBQUUsR0FBRzJELEtBQUs7WUFFdkI7WUFDQW1MLE1BQUEsQ0FBQTVJLE9BQUssQ0FBQzJJLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1wSCxZQUFZLEdBQUdDLE9BQU8sQ0FBQ0MsS0FBSztjQUNsQyxJQUFJRixZQUFZLElBQUlBLFlBQVksQ0FBQ0csS0FBSyxJQUFJSCxZQUFZLENBQUNHLEtBQUssQ0FBQ0MsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BFbEUsS0FBSyxDQUFDZ0QsTUFBTSxDQUFDL0csVUFBVSxHQUFHLElBQUk7O1lBRWhDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNOFUsV0FBVyxHQUFHQSxDQUFBLEtBQVc7Y0FDOUIvUSxLQUFLLENBQUNnRCxNQUFNLENBQUMvRyxVQUFVLEdBQUcsS0FBSztZQUNoQyxDQUFDO1lBRUQsTUFBTStVLGVBQWUsR0FBSXJQLEtBQWEsSUFBSTtjQUN6QzJELGdCQUFnQixDQUFDM0QsS0FBSyxDQUFDO1lBQ3hCLENBQUM7WUFFRCxNQUFNc1AsWUFBWSxHQUFJaE4sS0FBYSxJQUFJO2NBQ3RDakUsS0FBSyxDQUFDMkQsVUFBVSxDQUFDTSxLQUFLLEVBQUVvQixhQUFhLENBQUM7WUFDdkMsQ0FBQztZQUVELE9BQ0M4RixNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUMrSyxPQUFBLENBQUFRLE1BQU07Y0FBQ3RMLFNBQVMsRUFBQyxlQUFlO2NBQUNvRSxRQUFRLEVBQUMsT0FBTztjQUFDbUgsSUFBSSxFQUFFblIsS0FBSyxDQUFDZ0QsTUFBTSxDQUFDL0csVUFBVTtjQUFFc1AsT0FBTyxFQUFFd0Y7WUFBVyxHQUNyRzVGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDdUYsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBdUIsR0FDeEN1RixNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUNnTCxhQUFBLENBQUFTLFlBQVk7Y0FDWjVMLElBQUksRUFBRUEsSUFBSTtjQUNWN0QsS0FBSyxFQUFFMEQsYUFBYTtjQUNwQmdNLFdBQVcsRUFBRUwsZUFBZTtjQUM1QjlLLFdBQVcsRUFBRTdKLEtBQUssQ0FBQ2lWLE1BQU0sRUFBRUMsTUFBTSxFQUFFckwsV0FBVyxJQUFJLFdBQVc7Y0FDN0RzTCxRQUFRLEVBQUVQO1lBQVksRUFDckIsRUFDRjlGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ2tJLE1BQUEsQ0FBQTRCLFVBQVU7Y0FBQ3pILElBQUksRUFBQyxPQUFPO2NBQUN6QixPQUFPLEVBQUV3SyxXQUFXO2NBQUEsY0FBYTtZQUFjLEVBQUcsQ0FDbkUsRUFDVDVGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXdCLEdBQzFDdUYsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbkN1RixNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUNpTCxjQUFBLENBQUFkLGFBQWE7Y0FBQzlQLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQzFCLENBQ0csQ0FDTCxDQUNFO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBLElBQUFpRixLQUFBLEdBQUE5SixPQUFBO1VBQ0EsSUFBQXNXLE1BQUEsR0FBQXRXLE9BQUE7VUFDQSxJQUFBdVcsV0FBQSxHQUFBdlcsT0FBQTtVQUdBLElBQUF3VyxtQkFBQSxHQUFBeFcsT0FBQTtVQU5BOztVQXVCTSxTQUFVaVcsWUFBWUEsQ0FBQztZQUM1QjVMLElBQUk7WUFDSjdELEtBQUs7WUFDTDBQLFdBQVc7WUFDWG5MLFdBQVc7WUFDWDBMLFlBQVksR0FBRyxFQUFFO1lBQ2pCSixRQUFRO1lBQ1I1TCxTQUFTLEdBQUc7VUFBRSxDQUNQO1lBQ1AsTUFBTSxDQUFDM0IsS0FBSyxFQUFFNE4sUUFBUSxDQUFDLEdBQUc1TSxLQUFLLENBQUNNLFFBQVEsQ0FBQ3FNLFlBQVksQ0FBQztZQUN0RCxNQUFNLENBQUNFLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc5TSxLQUFLLENBQUNNLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFckQsTUFBTTtjQUFFeU0sU0FBUyxFQUFFQyxlQUFlO2NBQUV0SyxHQUFHLEVBQUV1SztZQUFVLENBQUUsR0FBRyxJQUFBUCxtQkFBQSxDQUFBUSxrQkFBa0IsR0FBRTtZQUU1RSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUN4QlAsUUFBUSxDQUFDLEVBQUUsQ0FBQztjQUVaO2NBQ0E5TixPQUFPLENBQUNLLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFQyxNQUFNLENBQUNDLFFBQVEsQ0FBQzVILFFBQVEsQ0FBQztjQUV4RCxJQUFJOFUsUUFBUSxFQUFFO2dCQUNiQSxRQUFRLENBQUMsRUFBRSxDQUFDOztZQUVkLENBQUM7WUFFRCxNQUFNYSxZQUFZLEdBQUk1UCxDQUFrQixJQUFJO2NBQzNDQSxDQUFDLENBQUM2UCxjQUFjLEVBQUU7Y0FDbEIsTUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQVEsQ0FBQy9QLENBQUMsQ0FBQ3VELE1BQXlCLENBQUM7Y0FDMUQsTUFBTXlNLFdBQVcsR0FBR0YsUUFBUSxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFXO2NBQ3BELE1BQU16TSxZQUFZLEdBQUdzTSxRQUFRLENBQUNHLEdBQUcsQ0FBQyxjQUFjLENBQVc7Y0FFM0QsSUFBSUQsV0FBVyxDQUFDdk8sSUFBSSxFQUFFLEVBQUU7Z0JBQ3ZCO2dCQUNBLE1BQU15TyxXQUFXLEdBQUc7a0JBQ25CMU8sS0FBSyxFQUFFd08sV0FBVyxDQUFDdk8sSUFBSSxFQUFFO2tCQUN6QnZDLEtBQUssRUFBRXNFLFlBQVksSUFBSSxFQUFFO2tCQUN6QjJNLFNBQVMsRUFBRUMsSUFBSSxDQUFDQyxHQUFHO2lCQUNuQjtnQkFFRC9PLE9BQU8sQ0FBQ0ssWUFBWSxDQUFDdU8sV0FBVyxFQUFFLEVBQUUsRUFBRXRPLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDNUgsUUFBUSxDQUFDO2dCQUUvRDtnQkFDQSxJQUFJOFUsUUFBUSxFQUFFO2tCQUNiQSxRQUFRLENBQUNpQixXQUFXLENBQUN2TyxJQUFJLEVBQUUsQ0FBQzs7Z0JBRzdCO2dCQUNBLElBQUk0TixRQUFRLEVBQUU7a0JBQ2JDLFdBQVcsQ0FBQyxLQUFLLENBQUM7OztZQUdyQixDQUFDO1lBRUQ7WUFDQTtZQUNBLElBQUl2TSxJQUFJLENBQUMvSCxNQUFNLElBQUksQ0FBQyxFQUFFO2NBQ3JCLE9BQ0N3SCxLQUFBLENBQUFVLGFBQUEsQ0FBQVYsS0FBQSxDQUFBeUksUUFBQSxRQUVDekksS0FBQSxDQUFBVSxhQUFBO2dCQUFLQyxTQUFTLEVBQUM7Y0FBK0IsR0FDN0NYLEtBQUEsQ0FBQVUsYUFBQTtnQkFBTWdDLEdBQUcsRUFBRXVLLFVBQVU7Z0JBQUV0TSxTQUFTLEVBQUUsZUFBZUEsU0FBUyxFQUFFO2dCQUFFbU4sUUFBUSxFQUFFVixZQUFZO2dCQUFFVyxJQUFJLEVBQUM7Y0FBUSxHQUNsRy9OLEtBQUEsQ0FBQVUsYUFBQTtnQkFBS0MsU0FBUyxFQUFDO2NBQStCLEdBQzdDWCxLQUFBLENBQUFVLGFBQUE7Z0JBQ0M3RyxJQUFJLEVBQUMsTUFBTTtnQkFDWHdILElBQUksRUFBQyxRQUFRO2dCQUNiSixXQUFXLEVBQUVBLFdBQVc7Z0JBQ3hCTixTQUFTLEVBQUMsY0FBYztnQkFDeEIxSixLQUFLLEVBQUUrSCxLQUFLO2dCQUNaOEIsUUFBUSxFQUFFdEQsQ0FBQyxJQUFJb1AsUUFBUSxDQUFDcFAsQ0FBQyxDQUFDdUQsTUFBTSxDQUFDOUosS0FBSyxDQUFDO2dCQUFBLGNBQzVCO2NBQVEsRUFDbEIsRUFDRCtILEtBQUssSUFDTGdCLEtBQUEsQ0FBQVUsYUFBQTtnQkFDQzdHLElBQUksRUFBQyxRQUFRO2dCQUNiOEcsU0FBUyxFQUFDLGNBQWM7Z0JBQ3hCVyxPQUFPLEVBQUU2TCxXQUFXO2dCQUFBLGNBQ1Q7Y0FBa0IsR0FFN0JuTixLQUFBLENBQUFVLGFBQUE7Z0JBQ0N3RCxLQUFLLEVBQUMsSUFBSTtnQkFDVkMsTUFBTSxFQUFDLElBQUk7Z0JBQ1hDLE9BQU8sRUFBQyxXQUFXO2dCQUNuQkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLE1BQU0sRUFBQyxjQUFjO2dCQUNyQkMsV0FBVyxFQUFDO2NBQUcsR0FFZnZFLEtBQUEsQ0FBQVUsYUFBQTtnQkFBUXNOLEVBQUUsRUFBQyxJQUFJO2dCQUFDQyxFQUFFLEVBQUMsSUFBSTtnQkFBQ0MsQ0FBQyxFQUFDO2NBQUksRUFBRyxFQUNqQ2xPLEtBQUEsQ0FBQVUsYUFBQTtnQkFBTThELENBQUMsRUFBQztjQUFXLEVBQUcsRUFDdEJ4RSxLQUFBLENBQUFVLGFBQUE7Z0JBQU04RCxDQUFDLEVBQUM7Y0FBVSxFQUFHLENBQ2hCLENBRVAsRUFDRHhFLEtBQUEsQ0FBQVUsYUFBQTtnQkFBUTdHLElBQUksRUFBQyxRQUFRO2dCQUFDOEcsU0FBUyxFQUFDLGVBQWU7Z0JBQUEsY0FBWTtjQUFRLEdBQ2xFWCxLQUFBLENBQUFVLGFBQUE7Z0JBQ0N3RCxLQUFLLEVBQUMsSUFBSTtnQkFDVkMsTUFBTSxFQUFDLElBQUk7Z0JBQ1hDLE9BQU8sRUFBQyxXQUFXO2dCQUNuQkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLE1BQU0sRUFBQyxjQUFjO2dCQUNyQkMsV0FBVyxFQUFDO2NBQUcsR0FFZnZFLEtBQUEsQ0FBQVUsYUFBQTtnQkFBUXNOLEVBQUUsRUFBQyxJQUFJO2dCQUFDQyxFQUFFLEVBQUMsSUFBSTtnQkFBQ0MsQ0FBQyxFQUFDO2NBQUcsRUFBRyxFQUNoQ2xPLEtBQUEsQ0FBQVUsYUFBQTtnQkFBTThELENBQUMsRUFBQztjQUFrQixFQUFHLENBQ3hCLENBQ0UsQ0FDSixDQUNBLENBQ0YsQ0FDSjs7WUFJTDtZQUNBLE9BQ0N4RSxLQUFBLENBQUFVLGFBQUEsQ0FBQVYsS0FBQSxDQUFBeUksUUFBQSxRQUVDekksS0FBQSxDQUFBVSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUErQixHQUM3Q1gsS0FBQSxDQUFBVSxhQUFBO2NBQU1nQyxHQUFHLEVBQUV1SyxVQUFVO2NBQUV0TSxTQUFTLEVBQUUsZUFBZUEsU0FBUyxFQUFFO2NBQUVtTixRQUFRLEVBQUVWLFlBQVk7Y0FBRVcsSUFBSSxFQUFDO1lBQVEsR0FDbEcvTixLQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQStCLEdBRTdDWCxLQUFBLENBQUFVLGFBQUEsQ0FBQzhMLE1BQU0sQ0FBQzJCLElBQUk7Y0FBQ2xYLEtBQUssRUFBRXlGLEtBQUs7Y0FBRTBSLGFBQWEsRUFBRWhDO1lBQVcsR0FDcERwTSxLQUFBLENBQUFVLGFBQUEsQ0FBQzhMLE1BQU0sQ0FBQzZCLE9BQU87Y0FBQzFOLFNBQVMsRUFBQyxvQkFBb0I7Y0FBQSxjQUFZO1lBQWMsR0FDdkVYLEtBQUEsQ0FBQVUsYUFBQSxDQUFDOEwsTUFBTSxDQUFDOEIsS0FBSztjQUFDck4sV0FBVyxFQUFDO1lBQUssRUFBRyxFQUNsQ2pCLEtBQUEsQ0FBQVUsYUFBQSxDQUFDOEwsTUFBTSxDQUFDbkQsSUFBSTtjQUFDMUksU0FBUyxFQUFDO1lBQWlCLEdBQ3ZDWCxLQUFBLENBQUFVLGFBQUEsQ0FBQytMLFdBQUEsQ0FBQThCLGVBQWUsT0FBRyxDQUNOLENBQ0UsRUFFakJ2TyxLQUFBLENBQUFVLGFBQUEsQ0FBQzhMLE1BQU0sQ0FBQ2dDLE1BQU07Y0FBQ3pCLFNBQVMsRUFBRUM7WUFBZSxHQUN4Q2hOLEtBQUEsQ0FBQVUsYUFBQSxDQUFDOEwsTUFBTSxDQUFDaUMsT0FBTztjQUNkOU4sU0FBUyxFQUFDLG9CQUFvQjtjQUM5Qm9FLFFBQVEsRUFBQyxRQUFRO2NBQ2pCMkosSUFBSSxFQUFDLFFBQVE7Y0FDYkMsS0FBSyxFQUFDLE9BQU87Y0FDYkMsVUFBVSxFQUFFLENBQUM7Y0FDYkMsZUFBZTtZQUFBLEdBRWY3TyxLQUFBLENBQUFVLGFBQUEsQ0FBQzhMLE1BQU0sQ0FBQ3NDLFFBQVE7Y0FBQ25PLFNBQVMsRUFBQztZQUFxQixHQUM5Q0osSUFBSSxDQUFDVyxHQUFHLENBQUM2TixDQUFDLElBQ1YvTyxLQUFBLENBQUFVLGFBQUEsQ0FBQzhMLE1BQU0sQ0FBQ3dDLElBQUk7Y0FBQzVOLEdBQUcsRUFBRTJOLENBQUMsQ0FBQzVWLEVBQUU7Y0FBRWxDLEtBQUssRUFBRThYLENBQUMsQ0FBQzVWLEVBQUU7Y0FBRXdILFNBQVMsRUFBQztZQUFpQixHQUMvRFgsS0FBQSxDQUFBVSxhQUFBLENBQUM4TCxNQUFNLENBQUN5QyxRQUFRLFFBQUVGLENBQUMsQ0FBQzFOLElBQUksSUFBSTBOLENBQUMsQ0FBQzVWLEVBQUUsQ0FBbUIsQ0FFcEQsQ0FBQyxDQUNlLENBQ0YsQ0FDRixDQUNILEVBR2Q2RyxLQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEVBQUcsRUFHcENYLEtBQUEsQ0FBQVUsYUFBQTtjQUNDN0csSUFBSSxFQUFDLE1BQU07Y0FDWHdILElBQUksRUFBQyxRQUFRO2NBQ2JKLFdBQVcsRUFBRUEsV0FBVztjQUN4Qk4sU0FBUyxFQUFDLGNBQWM7Y0FDeEIxSixLQUFLLEVBQUUrSCxLQUFLO2NBQ1o4QixRQUFRLEVBQUV0RCxDQUFDLElBQUlvUCxRQUFRLENBQUNwUCxDQUFDLENBQUN1RCxNQUFNLENBQUM5SixLQUFLLENBQUM7Y0FBQSxjQUM1QjtZQUFRLEVBQ2xCLEVBR0YrSSxLQUFBLENBQUFVLGFBQUE7Y0FBTzdHLElBQUksRUFBQyxRQUFRO2NBQUN3SCxJQUFJLEVBQUMsY0FBYztjQUFDcEssS0FBSyxFQUFFeUY7WUFBSyxFQUFJLEVBR3hEc0MsS0FBSyxJQUNMZ0IsS0FBQSxDQUFBVSxhQUFBO2NBQ0M3RyxJQUFJLEVBQUMsUUFBUTtjQUNiOEcsU0FBUyxFQUFDLGNBQWM7Y0FDeEJXLE9BQU8sRUFBRTZMLFdBQVc7Y0FBQSxjQUNUO1lBQWtCLEdBRTdCbk4sS0FBQSxDQUFBVSxhQUFBO2NBQ0N3RCxLQUFLLEVBQUMsSUFBSTtjQUNWQyxNQUFNLEVBQUMsSUFBSTtjQUNYQyxPQUFPLEVBQUMsV0FBVztjQUNuQkMsSUFBSSxFQUFDLE1BQU07Y0FDWEMsTUFBTSxFQUFDLGNBQWM7Y0FDckJDLFdBQVcsRUFBQztZQUFHLEdBRWZ2RSxLQUFBLENBQUFVLGFBQUE7Y0FBUXNOLEVBQUUsRUFBQyxJQUFJO2NBQUNDLEVBQUUsRUFBQyxJQUFJO2NBQUNDLENBQUMsRUFBQztZQUFJLEVBQUcsRUFDakNsTyxLQUFBLENBQUFVLGFBQUE7Y0FBTThELENBQUMsRUFBQztZQUFXLEVBQUcsRUFDdEJ4RSxLQUFBLENBQUFVLGFBQUE7Y0FBTThELENBQUMsRUFBQztZQUFVLEVBQUcsQ0FDaEIsQ0FFUCxFQUdEeEUsS0FBQSxDQUFBVSxhQUFBO2NBQVE3RyxJQUFJLEVBQUMsUUFBUTtjQUFDOEcsU0FBUyxFQUFDLGVBQWU7Y0FBQSxjQUFZO1lBQVEsR0FDbEVYLEtBQUEsQ0FBQVUsYUFBQTtjQUNDd0QsS0FBSyxFQUFDLElBQUk7Y0FDVkMsTUFBTSxFQUFDLElBQUk7Y0FDWEMsT0FBTyxFQUFDLFdBQVc7Y0FDbkJDLElBQUksRUFBQyxNQUFNO2NBQ1hDLE1BQU0sRUFBQyxjQUFjO2NBQ3JCQyxXQUFXLEVBQUM7WUFBRyxHQUVmdkUsS0FBQSxDQUFBVSxhQUFBO2NBQVFzTixFQUFFLEVBQUMsSUFBSTtjQUFDQyxFQUFFLEVBQUMsSUFBSTtjQUFDQyxDQUFDLEVBQUM7WUFBRyxFQUFHLEVBQ2hDbE8sS0FBQSxDQUFBVSxhQUFBO2NBQU04RCxDQUFDLEVBQUM7WUFBa0IsRUFBRyxDQUN4QixDQUNFLENBQ0osQ0FDQSxDQUNGLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0T0EsSUFBQXhFLEtBQUEsR0FBQTlKLE9BQUE7VUFFTSxTQUFVZ1gsa0JBQWtCQSxDQUFBO1lBQ2pDLE1BQU0sQ0FBQ0gsU0FBUyxFQUFFbUMsWUFBWSxDQUFDLEdBQUdsUCxLQUFLLENBQUNNLFFBQVEsQ0FBcUIsSUFBSSxDQUFDO1lBRTFFLE1BQU1vQyxHQUFHLEdBQUcxQyxLQUFLLENBQUMyRSxXQUFXLENBQUV3SyxJQUF3QixJQUFJO2NBQzFELElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQ1gsTUFBTUMsSUFBSSxHQUFJRCxJQUFJLENBQUNFLFdBQVcsR0FBRSxDQUE0QixJQUFJQyxRQUFRO2NBQ3hFLE1BQU1DLFFBQVEsR0FBSUgsSUFBbUIsQ0FBQ0ksSUFBSSxJQUFJLElBQUk7Y0FFbEQsSUFBSUQsUUFBUSxFQUFFO2dCQUNiLElBQUlFLE1BQU0sR0FBSUwsSUFBbUIsQ0FBQ00sYUFBYSxDQUFDLG9CQUFvQixDQUF1QjtnQkFDM0YsSUFBSSxDQUFDRCxNQUFNLEVBQUU7a0JBQ1pBLE1BQU0sR0FBR0gsUUFBUSxDQUFDNU8sYUFBYSxDQUFDLEtBQUssQ0FBQztrQkFDdEMrTyxNQUFNLENBQUN0VyxFQUFFLEdBQUcsbUJBQW1CO2tCQUMvQnNXLE1BQU0sQ0FBQzNLLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLFVBQVU7a0JBQ2pDcUssSUFBbUIsQ0FBQ08sV0FBVyxDQUFDRixNQUFNLENBQUM7O2dCQUV6Q1AsWUFBWSxDQUFDTyxNQUFNLENBQUM7ZUFDcEIsTUFBTTtnQkFDTlAsWUFBWSxDQUFDSSxRQUFRLENBQUNNLElBQUksQ0FBQzs7WUFFN0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQU87Y0FBRTdDLFNBQVM7Y0FBRXJLO1lBQUcsQ0FBRTtVQUMxQjs7Ozs7Ozs7Ozs7VUN6QkE7O1VBRUFtTixNQUFBLENBQUFDLGNBQUEsQ0FBQXRWLE9BQUE7WUFDQXZELEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBaVEsTUFBQSxHQUFBaFIsT0FBQTtVQUNBLElBQUErUSxHQUFBLEdBQUEvUSxPQUFBO1VBQ0EsSUFBQTZaLE1BQUEsR0FBQTdaLE9BQUE7VUFDQSxJQUFBZ1EsTUFBQSxHQUFBaFEsT0FBQTtVQUVBLElBQUE4WixNQUFBLEdBQUE5WixPQUFBO1VBQ0EsSUFBQStaLGlCQUFBLEdBQUEvWixPQUFBO1VBQ0EsSUFBQWdhLE9BQUEsR0FBQWhhLE9BQUE7VUFDQSxJQUFBMkwsUUFBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUEwSCxLQUFBLEdBQUExSCxPQUFBO1VBQ0EsSUFBQXVWLE9BQUEsR0FBQXZWLE9BQUE7VUFZTyxNQUFNaUYsTUFBTSxHQUFhQSxDQUFDO1lBQUVKO1VBQUssQ0FBVSxLQUFJO1lBQ3JELE1BQU0sQ0FBQ29WLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2xLLE1BQUEsQ0FBQTVJLE9BQUssQ0FBQ2dELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakUsTUFBTSxDQUFDK1AsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHcEssTUFBQSxDQUFBNUksT0FBSyxDQUFDZ0QsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVqRSxNQUFNaVEsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUQsaUJBQWlCLENBQUMsQ0FBQ0QsY0FBYyxDQUFDO1lBQ2pFLE1BQU1qSixnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2NBQzdCZ0osaUJBQWlCLENBQUMsQ0FBQ0QsY0FBYyxDQUFDO1lBQ25DLENBQUM7WUFDRCxNQUFNek4sR0FBRyxHQUFHd0QsTUFBQSxDQUFBNUksT0FBSyxDQUFDMEcsTUFBTSxFQUFFO1lBRTFCLElBQUFrRCxNQUFBLENBQUFZLFFBQVEsRUFBQy9NLEtBQUssQ0FBQ2dELE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFd1MsZ0JBQWdCLENBQUM7WUFDeEQsSUFBQXJKLE1BQUEsQ0FBQVksUUFBUSxFQUFDL00sS0FBSyxDQUFDO1lBRWYsTUFBTTtjQUFFM0QsS0FBSztjQUFFNkU7WUFBSyxDQUFFLEdBQUdsQixLQUFLO1lBQzlCLE1BQU05RCxLQUFLLEdBQUc7Y0FBRThELEtBQUs7Y0FBRTNELEtBQUs7Y0FBRWdRLGdCQUFnQjtjQUFFcE4sT0FBTyxFQUFFZSxLQUFLLENBQUNnRCxNQUFNLEVBQUUvRDtZQUFPLENBQUU7WUFDaEYsTUFBTUgsSUFBSSxHQUFHa0IsS0FBSyxDQUFDZ0QsTUFBTSxFQUFFdkgsS0FBSyxFQUFFZ2EsU0FBUyxLQUFLLFVBQVUsR0FBRyxhQUFhLEdBQUcsWUFBWTtZQUV6RixPQUNDdEssTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFBd0YsTUFBQSxDQUFBNUksT0FBQSxDQUFBbUwsUUFBQSxRQUNDdkMsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFDbUIsUUFBQSxDQUFBNkksYUFBYSxDQUFDK0YsUUFBUTtjQUFDeFosS0FBSyxFQUFFQTtZQUFLLEdBQ25DaVAsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDdEN1RixNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUN3UCxPQUFBLENBQUFsRyxNQUFNLE9BQUcsRUFDVjlELE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3VQLGlCQUFBLENBQUFsSCxnQkFBZ0IsT0FBRyxFQUNwQjdDLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsZUFDQ3dGLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUE7Y0FBd0JnQyxHQUFHLEVBQUVBO1lBQUcsRUFBSSxFQUNwQ3dELE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3FQLE1BQUEsQ0FBQVcsTUFBTSxPQUFHLEVBQ1Z4SyxNQUFBLENBQUE1SSxPQUFBLENBQUFvRCxhQUFBLENBQUM5QyxLQUFBLENBQUFnRyxXQUFXLE9BQUcsQ0FDVCxDQUNGLENBQ2tCLEVBQ3hCM0gsS0FBSyxJQUNMaUssTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFBd0YsTUFBQSxDQUFBNUksT0FBQSxDQUFBbUwsUUFBQSxRQUNDdkMsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFDc1AsTUFBQSxDQUFBNUosVUFBVTtjQUNWaFAsS0FBSyxFQUFFQSxLQUFLO2NBQ1pELFdBQVcsRUFBRTRELEtBQUssQ0FBQzVELFdBQVc7Y0FDOUJrUCxJQUFJLEVBQUVnSyxjQUFjO2NBQ3BCL0osT0FBTyxFQUFFaUs7WUFBZ0IsRUFDeEIsRUFDRnJLLE1BQUEsQ0FBQTVJLE9BQUEsQ0FBQW9ELGFBQUEsQ0FBQ3VHLEdBQUEsQ0FBQTBKLFVBQVU7Y0FDVkMsS0FBSyxFQUFFN1YsS0FBSyxDQUFDdkUsS0FBSyxFQUFFb2EsS0FBSztjQUN6QnpaLFdBQVcsRUFBRTRELEtBQUssQ0FBQzVELFdBQVc7Y0FDOUIwWixTQUFTLEVBQUU5VixLQUFLLENBQUN2RSxLQUFLLEVBQUVzYSxZQUFZO2NBQ3BDalgsSUFBSSxFQUFFQSxJQUFJO2NBQ1Z3TSxJQUFJLEVBQUU4SixjQUFjO2NBQ3BCN0osT0FBTyxFQUFFYztZQUFnQixFQUN4QixFQUNGbEIsTUFBQSxDQUFBNUksT0FBQSxDQUFBb0QsYUFBQSxDQUFDK0ssT0FBQSxDQUFBRyxZQUFZO2NBQUM3USxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUUvQixDQUNDO1VBRUwsQ0FBQztVQUFDUCxPQUFBLENBQUFXLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RUksU0FBVTRWLE9BQU9BLENBQUE7WUFDdEIsT0FBTy9RLEtBQUEsQ0FBQVUsYUFBQSxDQUFBVixLQUFBLENBQUF5SSxRQUFBLE9BQUs7VUFDYiIsImlnbm9yZUxpc3QiOltdfQ==