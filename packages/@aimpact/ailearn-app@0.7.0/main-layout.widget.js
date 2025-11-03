System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.8/base", "@beyond-js/reactive@2.1.2/model", "@aimpact/ailearn-app@0.7.0/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.7.0/i18n.ts", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/kernel@0.1.14/texts", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/chat-sdk@1.5.5/wrapper", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/ailearn-app@0.7.0/model/wrapper", "gsap@3.13.0", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/chips", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.7.0/components/navbar-header.code", "pragmate-ui@1.0.8/drawer", "@radix-ui/react-select@2.2.6", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, bimport, __Bundle, __pkg, ims, Controller, LayoutBroker, Header, OverlayHeader, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    LayoutBroker: void 0,
    Header: void 0,
    OverlayHeader: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReact18Widgets118Base) {
      dependency_2 = _beyondJsReact18Widgets118Base;
    }, function (_beyondJsReactive212Model) {
      dependency_3 = _beyondJsReactive212Model;
    }, function (_aimpactAilearnApp070WidgetsBreadcrumbWidget) {
      dependency_4 = _aimpactAilearnApp070WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp070I18nTs) {
      dependency_5 = _aimpactAilearnApp070I18nTs;
    }, function (_beyondJsKernel0114Routing) {
      dependency_6 = _beyondJsKernel0114Routing;
    }, function (_beyondJsKernel0114Texts) {
      dependency_7 = _beyondJsKernel0114Texts;
    }, function (_aimpactChatSdk155Core) {
      dependency_8 = _aimpactChatSdk155Core;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_9 = _aimpactChatSdk155Wrapper;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_10 = _beyondJsHttpSuite011Api;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_11 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk155Session) {
      dependency_12 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_13 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_react2) {
      dependency_14 = _react2;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_15 = _aimpactChatSdk155ChatComponentCode;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_16 = _aimpactAilearnApp070ModelWrapper;
    }, function (_gsap2) {
      dependency_17 = _gsap2;
    }, function (_pragmateUi108Modal) {
      dependency_18 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_19 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_20 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Chips) {
      dependency_21 = _pragmateUi108Chips;
    }, function (_pragmateUi108Components) {
      dependency_22 = _pragmateUi108Components;
    }, function (_pragmateUi108Icons) {
      dependency_23 = _pragmateUi108Icons;
    }, function (_framerMotion2) {
      dependency_24 = _framerMotion2;
    }, function (_aimpactAilearnApp070ComponentsNavbarHeaderCode) {
      dependency_25 = _aimpactAilearnApp070ComponentsNavbarHeaderCode;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_4], ['@aimpact/ailearn-app/i18n.ts', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['@beyond-js/http-suite/api', dependency_10], ['@aimpact/ailearn-sdk/startup', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@aimpact/ailearn-sdk/entities/articles', dependency_13], ['react', dependency_14], ['@aimpact/chat-sdk/chat-component.code', dependency_15], ['@aimpact/ailearn-app/model/wrapper', dependency_16], ['gsap', dependency_17], ['pragmate-ui/modal', dependency_18], ['@aimpact/ailearn-app/components/ui', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['pragmate-ui/chips', dependency_21], ['pragmate-ui/components', dependency_22], ['pragmate-ui/icons', dependency_23], ['framer-motion', dependency_24], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_25], ['pragmate-ui/drawer', dependency_26], ['@radix-ui/react-select', dependency_27], ['@radix-ui/react-icons', dependency_28], ['pragmate-ui/toast', dependency_29], ['@beyond-js/kernel/styles', dependency_30]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/main-layout.widget');
      ims = new Map();
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

      /******************************
      INTERNAL MODULE: ./store/broker
      ******************************/

      ims.set('./store/broker', {
        hash: 3802595173,
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
          var _texts = require("@beyond-js/kernel/texts");
          class Broker extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get hasCredits() {
              return this.#model?.credits?.get().total > 0;
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
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
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
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              _i18n.globalTexts.on('change', () => this.trigger('change'));
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
      INTERNAL MODULE: ./store/chat
      ****************************/

      ims.set('./store/chat', {
        hash: 980962970,
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
                  id: response.data.id
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
        hash: 4228587941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _broker = require("./broker");
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
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
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
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.on('change', this.triggerEvent);
              this.#globalTexts.fetch();
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
        hash: 1703706748,
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
        hash: 2289286271,
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
        hash: 3906068709,
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
        hash: 2472046354,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsContainer = CreditsContainer;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chips = require("pragmate-ui/chips");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _animatedLabel = require("../components/animated-label");
          var _context = require("../context");
          function CreditsContainer() {
            let {
              store,
              toggleCoinsModal,
              texts
            } = (0, _context.useLayoutContext)();
            const [message, setMessage] = _react.default.useState('');
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container ${!store.broker.canConsumeCredits ? ' is-disabled' : ''}`;
            const credits = store.model?.credits.get();
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts?.messages[type]);
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
        hash: 1116961819,
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
        hash: 2495950732,
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
            }, _wrapper.settings.kb && _react.default.createElement(_icons.IconButton, {
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
        hash: 2933569780,
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
        hash: 262105309,
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
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store/broker",
        "from": "LayoutBroker",
        "name": "LayoutBroker"
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
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'LayoutBroker') && _export("LayoutBroker", LayoutBroker = require ? require('./store/broker').LayoutBroker : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9icmVhZGNydW1iIiwiX2kxOG4iLCJfcm91dGluZyIsIl90ZXh0cyIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwiZ2V0IiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwic2hvd0RyYXdlciIsInZhbHVlIiwidHJpZ2dlciIsImdsb2JhbFRleHRzIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJwcmV2aW91c1BhdGhuYW1lIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJDdXJyZW50VGV4dHMiLCJmZXRjaCIsIm9uIiwiZXhpc3RzIiwiaXRlbXMiLCJmaW5kSW5kZXgiLCJpdGVtIiwiZmluZExhc3RJbmRleCIsImFycmF5IiwicHJlZGljYXRlIiwiaSIsImxlbmd0aCIsImxhc3RJbmRleCIsIkFycmF5IiwiaXNBcnJheSIsImluY2x1ZGVzIiwibmV3SXRlbXMiLCJzbGljZSIsInNldCIsImdsb2JhbFRoaXMiLCJsYXlvdXQiLCJhZGRNb2RlbCIsImlkIiwidW5kZWZpbmVkIiwib25MaXN0ZW4iLCJjbGVhck1vZGVsIiwic2F2ZWQiLCJ0cmlnZ2VyRXZlbnQiLCJjYWxsYmFjayIsInNwZWNzIiwiY29uc29sZSIsImVycm9yIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwic2V0VGltZW91dCIsImNsZWFyIiwib3ZlcmxheSIsInNldFRpdGxlIiwidGl0bGUiLCJvblJlZnJlc2giLCJyZWZyZXNoIiwiZm9yY2UiLCJwcm9wcyIsInVwZGF0ZWQiLCJMYXlvdXRCcm9rZXIiLCJfY29yZSIsIl93cmFwcGVyIiwiX2FwaSIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJDaGF0U3RvcmUiLCJjaGF0IiwiYXBpIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJpbml0IiwicmVhZHkiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImdldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsImNsb3NlIiwiY3JlYXRlIiwibGFuZ3VhZ2UiLCJvcmdJZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwicmVzcG9uc2UiLCJwb3N0Iiwib3JnYW5pemF0aW9uSWQiLCJzdGF0dXMiLCJFcnJvciIsIkNoYXQiLCJkYXRhIiwibG9hZEFsbCIsImUiLCJfYnJva2VyIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXQiLCJfYXJ0aWNsZXMiLCJpc1N0b3JlIiwiYnJva2VyIiwiY2hhdFN0b3JlIiwia2JDb2xsZWN0aW9uIiwiaGlzdG9yeUNsZWFudXAiLCJzZXNzaW9uIiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJLQkNvbGxlY3Rpb24iLCJzZXR1cEhpc3RvcnlMaXN0ZW5lciIsInZhbGlkYXRlUGFyYW1zIiwibG9hZFNlYXJjaCIsInRleHQiLCJsb2FkIiwiaGlzdG9yeVN0YXRlIiwiaGlzdG9yeSIsInN0YXRlIiwicXVlcnkiLCJ0cmltIiwiY2xlYXJTZWFyY2giLCJyZXBsYWNlU3RhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhbmRsZVVybENoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcmlnaW5hbFB1c2hTdGF0ZSIsInB1c2hTdGF0ZSIsIm9yaWdpbmFsUmVwbGFjZVN0YXRlIiwiYXJncyIsImFwcGx5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbiIsIm9mZiIsIlJlYWN0IiwiQ2hhdEVtcHR5U3RhdGUiLCJvbkNyZWF0ZUNoYXQiLCJpc0NyZWF0aW5nIiwic2VsZWN0ZWRPcmdJZCIsInNldFNlbGVjdGVkT3JnSWQiLCJ1c2VTdGF0ZSIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaGFuZGxlQ3JlYXRlQ2hhdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJlbXB0eSIsIm5vQWN0aXZlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvcmdhbml6YXRpb24iLCJwbGFjZWhvbGRlciIsIm1hcCIsIm9yZyIsImtleSIsIm5hbWUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjcmVhdGVCdXR0b24iLCJfdXNlQ2hhdFN0b3JlIiwiX2NoYXRDb21wb25lbnQiLCJfY2hhdEVtcHR5U3RhdGUiLCJfZW1wdHlDaGF0IiwiX2NvbnRleHQiLCJfdXNlQ2hhdEFuaW1hdGlvbiIsIkNoYXRXaW5kb3ciLCJjaGF0V2luZG93UmVmIiwib25Ub2dnbGUiLCJ1c2VDaGF0U3RvcmUiLCJjaGF0U3BlY3MiLCJzZXRJc0NyZWF0aW5nIiwiaXNFeHBhbmRlZCIsInRvZ2dsZUNoYXQiLCJ1c2VDaGF0QW5pbWF0aW9uIiwidXNlTGF5b3V0Q29udGV4dCIsInJlZiIsImFjdGlvbnMiLCJtaW5pbWl6ZSIsImV4cGFuZCIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpY29uIiwiYXV0b3BsYXkiLCJFbXB0eUNoYXQiLCJwbGF5ZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJjcmVhdGluZyIsInN0YXJ0Q2hhdCIsIl91c2VDaGF0VG9nZ2xlIiwiX2NoYXRXaW5kb3ciLCJHZW5lcmFsQ2hhdCIsImhhbmRsZVRvZ2dsZSIsInVzZUNoYXRUb2dnbGUiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJjaGF0Q29udGVudFJlZiIsInNldHRpbmdzIiwia2IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkIiwic2V0SXNFeHBhbmRlZCIsImV4cGFuZENoYXQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJlbGVtZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsIm1pbmltaXplQ2hhdCIsImlzQW5pbWF0aW5nIiwiX2dzYXAiLCJnc2FwIiwidG8iLCJzY2FsZSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImVhc2UiLCJvbkNvbXBsZXRlIiwiZnJvbVRvIiwidXNlRWZmZWN0IiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJkZXNjcmlwdGlvbiIsIl91aSIsIl9ob29rcyIsIl9jaGlwcyIsIl9jb21wb25lbnRzIiwiX2FuaW1hdGVkTGFiZWwiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInNldE1lc3NhZ2UiLCJjbHMiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1c2VTdG9yZSIsImhlYWRlciIsIkNvbnRyb2wiLCJhdHRycyIsInZhcmlhbnQiLCJCdXR0b24iLCJDaGlwIiwiY29uc3VtZWQiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwibGFiZWwiLCJhdmFpbGFibGUiLCJBbmltYXRlZExhYmVsIiwiRnJhZ21lbnQiLCJCYXR0ZXJ5IiwicGVyY2VudCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJjaGlsZHJlbiIsIm1vdGlvbiIsInNwYW4iLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwiaGFzTW9kZWwiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiYmFja0xpbmsiLCJ0b2dnbGVEcmF3ZXIiLCJOYXZiYXJIZWFkZXIiLCJJY29uQnV0dG9uIiwiT3ZlcmxheUhlYWRlciIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRlbnQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlRmV0Y2hpbmdDaGFuZ2UiLCJTZWFyY2hSZXN1bHRJdGVtIiwibWV0YWRhdGEiLCJNYXRoIiwicm91bmQiLCJzY29yZSIsInRhZ3MiLCJ0YWciLCJpbmRleCIsIl9kcmF3ZXIiLCJfb3JnU2VhcmNoQm94IiwiX2RyYXdlckNvbnRlbnQiLCJMYXlvdXREcmF3ZXIiLCJoYXNNdWx0aXBsZU9yZ3MiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9yZ0NoYW5nZSIsImhhbmRsZVNlYXJjaCIsIkRyYXdlciIsIm9wZW4iLCJPcmdTZWFyY2hCb3giLCJvbk9yZ0NoYW5nZSIsImRyYXdlciIsInNlYXJjaCIsIm9uU2VhcmNoIiwiU2VsZWN0IiwiX3JlYWN0SWNvbnMiLCJfdXNlUG9ydGFsQ29udGFpbmVyIiwiaW5pdGlhbFF1ZXJ5Iiwic2V0UXVlcnkiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiY29udGFpbmVyIiwicG9ydGFsQ29udGFpbmVyIiwid3JhcHBlclJlZiIsInVzZVBvcnRhbENvbnRhaW5lciIsImhhbmRsZUNsZWFyIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwic2VhcmNoUXVlcnkiLCJzZWFyY2hTdGF0ZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJvblN1Ym1pdCIsInJvbGUiLCJjeCIsImN5IiwiciIsIlJvb3QiLCJvblZhbHVlQ2hhbmdlIiwiVHJpZ2dlciIsIlZhbHVlIiwiQ2hldnJvbkRvd25JY29uIiwiUG9ydGFsIiwiQ29udGVudCIsInNpZGUiLCJhbGlnbiIsInNpZGVPZmZzZXQiLCJhdm9pZENvbGxpc2lvbnMiLCJWaWV3cG9ydCIsIm8iLCJJdGVtIiwiSXRlbVRleHQiLCJzZXRDb250YWluZXIiLCJub2RlIiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJpc1NoYWRvdyIsImhvc3QiLCJwb3J0YWwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9hc3QiLCJfYWxlcnQiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9oZWFkZXIiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInRvZ2dsZUNvaW5zQWxlcnQiLCJtb2RlbFR5cGUiLCJQcm92aWRlciIsIlRvYXN0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2Jyb2tlci50cyIsIi90cy9zdG9yZS9jaGF0LnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXcvY2hhdC9jaGF0LWVtcHR5LXN0YXRlLnRzeCIsIi90cy92aWV3L2NoYXQvY2hhdC13aW5kb3cudHN4IiwiL3RzL3ZpZXcvY2hhdC9lbXB0eS1jaGF0LnRzeCIsIi90cy92aWV3L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXcvY2hhdC91c2UtY2hhdC1hbmltYXRpb24udHMiLCIvdHMvdmlldy9jaGF0L3VzZS1jaGF0LXN0b3JlLnRzIiwiL3RzL3ZpZXcvY2hhdC91c2UtY2hhdC10b2dnbGUudHMiLCIvdHMvdmlldy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlldy9jb2lucy9jcmVkaXRzLnRzeCIsIi90cy92aWV3L2NvaW5zL25vdGlmaWNhdGlvbnMtYmFyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL292ZXJsYXktaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbnRleHQudHMiLCIvdHMvdmlldy9kcmF3ZXIvZHJhd2VyLWNvbnRlbnQudHN4IiwiL3RzL3ZpZXcvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3L2RyYXdlci9vcmctc2VhcmNoLWJveC50c3giLCIvdHMvdmlldy9kcmF3ZXIvdXNlLXBvcnRhbC1jb250YWluZXIudHMiLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOO1lBQ0FDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sS0FBQSxDQUFBTyxNQUFNO1lBQ2Q7O1VBQ0FDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7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