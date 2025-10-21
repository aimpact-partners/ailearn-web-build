System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.8/base", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-app@0.7.0/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.7.0/i18n.ts", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/kernel@0.1.14/texts", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/chat-sdk@1.5.5/wrapper", "@beyond-js/http-suite@0.1.1/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/ailearn-app@0.7.0/model/wrapper", "gsap@3.13.0", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/chips", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.7.0/components/navbar-header.code", "pragmate-ui@1.0.8/drawer", "@radix-ui/react-select@2.2.6", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
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
    }, function (_beyondJsReactive211Model) {
      dependency_3 = _beyondJsReactive211Model;
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
    }, function (_pragmateUi108Chips) {
      dependency_19 = _pragmateUi108Chips;
    }, function (_pragmateUi108Components) {
      dependency_20 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_21 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_22 = _beyondJsReact18Widgets118Hooks;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_4], ['@aimpact/ailearn-app/i18n.ts', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['@beyond-js/http-suite/api', dependency_10], ['@aimpact/ailearn-sdk/startup', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@aimpact/ailearn-sdk/entities/articles', dependency_13], ['react', dependency_14], ['@aimpact/chat-sdk/chat-component.code', dependency_15], ['@aimpact/ailearn-app/model/wrapper', dependency_16], ['gsap', dependency_17], ['pragmate-ui/modal', dependency_18], ['pragmate-ui/chips', dependency_19], ['pragmate-ui/components', dependency_20], ['@aimpact/ailearn-app/components/ui', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/icons', dependency_23], ['framer-motion', dependency_24], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_25], ['pragmate-ui/drawer', dependency_26], ['@radix-ui/react-select', dependency_27], ['@radix-ui/react-icons', dependency_28], ['pragmate-ui/toast', dependency_29], ['@beyond-js/kernel/styles', dependency_30]]);
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
        hash: 1969994003,
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
        hash: 21775515,
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
            const [, setHasCredits] = _react.default.useState(store.broker.hasCredits);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9icmVhZGNydW1iIiwiX2kxOG4iLCJfcm91dGluZyIsIl90ZXh0cyIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwic2hvd0RyYXdlciIsInZhbHVlIiwidHJpZ2dlciIsImdsb2JhbFRleHRzIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJwcmV2aW91c1BhdGhuYW1lIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJDdXJyZW50VGV4dHMiLCJmZXRjaCIsIm9uIiwiZXhpc3RzIiwiaXRlbXMiLCJmaW5kSW5kZXgiLCJpdGVtIiwiZmluZExhc3RJbmRleCIsImFycmF5IiwicHJlZGljYXRlIiwiaSIsImxlbmd0aCIsImxhc3RJbmRleCIsIkFycmF5IiwiaXNBcnJheSIsImluY2x1ZGVzIiwibmV3SXRlbXMiLCJzbGljZSIsInNldCIsImdsb2JhbFRoaXMiLCJsYXlvdXQiLCJhZGRNb2RlbCIsImlkIiwidW5kZWZpbmVkIiwib25MaXN0ZW4iLCJjbGVhck1vZGVsIiwic2F2ZWQiLCJ0cmlnZ2VyRXZlbnQiLCJjYWxsYmFjayIsInNwZWNzIiwiY29uc29sZSIsImVycm9yIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwic2V0VGltZW91dCIsImNsZWFyIiwib3ZlcmxheSIsInNldFRpdGxlIiwidGl0bGUiLCJvblJlZnJlc2giLCJyZWZyZXNoIiwiZm9yY2UiLCJwcm9wcyIsInVwZGF0ZWQiLCJMYXlvdXRCcm9rZXIiLCJfY29yZSIsIl93cmFwcGVyIiwiX2FwaSIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJDaGF0U3RvcmUiLCJjaGF0IiwiYXBpIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJpbml0IiwicmVhZHkiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImdldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsImNsb3NlIiwiY3JlYXRlIiwibGFuZ3VhZ2UiLCJvcmdJZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwicmVzcG9uc2UiLCJwb3N0Iiwib3JnYW5pemF0aW9uSWQiLCJzdGF0dXMiLCJFcnJvciIsIkNoYXQiLCJkYXRhIiwibG9hZEFsbCIsImUiLCJfYnJva2VyIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXQiLCJfYXJ0aWNsZXMiLCJpc1N0b3JlIiwiYnJva2VyIiwiY2hhdFN0b3JlIiwia2JDb2xsZWN0aW9uIiwiaGlzdG9yeUNsZWFudXAiLCJzZXNzaW9uIiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJLQkNvbGxlY3Rpb24iLCJzZXR1cEhpc3RvcnlMaXN0ZW5lciIsInZhbGlkYXRlUGFyYW1zIiwibG9hZFNlYXJjaCIsInRleHQiLCJsb2FkIiwiaGlzdG9yeVN0YXRlIiwiaGlzdG9yeSIsInN0YXRlIiwicXVlcnkiLCJ0cmltIiwiY2xlYXJTZWFyY2giLCJyZXBsYWNlU3RhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhbmRsZVVybENoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcmlnaW5hbFB1c2hTdGF0ZSIsInB1c2hTdGF0ZSIsIm9yaWdpbmFsUmVwbGFjZVN0YXRlIiwiYXJncyIsImFwcGx5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbiIsIm9mZiIsIlJlYWN0IiwiQ2hhdEVtcHR5U3RhdGUiLCJvbkNyZWF0ZUNoYXQiLCJpc0NyZWF0aW5nIiwic2VsZWN0ZWRPcmdJZCIsInNldFNlbGVjdGVkT3JnSWQiLCJ1c2VTdGF0ZSIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaGFuZGxlQ3JlYXRlQ2hhdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJlbXB0eSIsIm5vQWN0aXZlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvcmdhbml6YXRpb24iLCJwbGFjZWhvbGRlciIsIm1hcCIsIm9yZyIsImtleSIsIm5hbWUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjcmVhdGVCdXR0b24iLCJfdXNlQ2hhdFN0b3JlIiwiX2NoYXRDb21wb25lbnQiLCJfY2hhdEVtcHR5U3RhdGUiLCJfZW1wdHlDaGF0IiwiX2NvbnRleHQiLCJfdXNlQ2hhdEFuaW1hdGlvbiIsIkNoYXRXaW5kb3ciLCJjaGF0V2luZG93UmVmIiwib25Ub2dnbGUiLCJ1c2VDaGF0U3RvcmUiLCJjaGF0U3BlY3MiLCJzZXRJc0NyZWF0aW5nIiwiaXNFeHBhbmRlZCIsInRvZ2dsZUNoYXQiLCJ1c2VDaGF0QW5pbWF0aW9uIiwidXNlTGF5b3V0Q29udGV4dCIsInJlZiIsImFjdGlvbnMiLCJtaW5pbWl6ZSIsImV4cGFuZCIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpY29uIiwiYXV0b3BsYXkiLCJFbXB0eUNoYXQiLCJwbGF5ZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJjcmVhdGluZyIsInN0YXJ0Q2hhdCIsIl91c2VDaGF0VG9nZ2xlIiwiX2NoYXRXaW5kb3ciLCJHZW5lcmFsQ2hhdCIsImhhbmRsZVRvZ2dsZSIsInVzZUNoYXRUb2dnbGUiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJjaGF0Q29udGVudFJlZiIsInNldHRpbmdzIiwia2IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkIiwic2V0SXNFeHBhbmRlZCIsImV4cGFuZENoYXQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJlbGVtZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsIm1pbmltaXplQ2hhdCIsImlzQW5pbWF0aW5nIiwiX2dzYXAiLCJnc2FwIiwidG8iLCJzY2FsZSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImVhc2UiLCJvbkNvbXBsZXRlIiwiZnJvbVRvIiwidXNlRWZmZWN0IiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJkZXNjcmlwdGlvbiIsIl9jaGlwcyIsIl9jb21wb25lbnRzIiwiX2FuaW1hdGVkTGFiZWwiLCJfdWkiLCJfaG9va3MiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInNldE1lc3NhZ2UiLCJzZXRIYXNDcmVkaXRzIiwiY2xzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJjb25zdW1lZCIsIm9uQ3JlZGl0c0NoYW5nZSIsImNsYXNzTGlzdCIsImFkZCIsInVzZVN0b3JlIiwiaGVhZGVyIiwiQ29udHJvbCIsImF0dHJzIiwidmFyaWFudCIsIkJ1dHRvbiIsIkNoaXAiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwibGFiZWwiLCJhdmFpbGFibGUiLCJBbmltYXRlZExhYmVsIiwiRnJhZ21lbnQiLCJCYXR0ZXJ5IiwicGVyY2VudCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJjaGlsZHJlbiIsIm1vdGlvbiIsInNwYW4iLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwiaGFzTW9kZWwiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiYmFja0xpbmsiLCJ0b2dnbGVEcmF3ZXIiLCJOYXZiYXJIZWFkZXIiLCJJY29uQnV0dG9uIiwiT3ZlcmxheUhlYWRlciIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRlbnQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlRmV0Y2hpbmdDaGFuZ2UiLCJTZWFyY2hSZXN1bHRJdGVtIiwibWV0YWRhdGEiLCJNYXRoIiwicm91bmQiLCJzY29yZSIsInRhZ3MiLCJ0YWciLCJpbmRleCIsIl9kcmF3ZXIiLCJfb3JnU2VhcmNoQm94IiwiX2RyYXdlckNvbnRlbnQiLCJMYXlvdXREcmF3ZXIiLCJoYXNNdWx0aXBsZU9yZ3MiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9yZ0NoYW5nZSIsImhhbmRsZVNlYXJjaCIsIkRyYXdlciIsIm9wZW4iLCJPcmdTZWFyY2hCb3giLCJvbk9yZ0NoYW5nZSIsImRyYXdlciIsInNlYXJjaCIsIm9uU2VhcmNoIiwiU2VsZWN0IiwiX3JlYWN0SWNvbnMiLCJfdXNlUG9ydGFsQ29udGFpbmVyIiwiaW5pdGlhbFF1ZXJ5Iiwic2V0UXVlcnkiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiY29udGFpbmVyIiwicG9ydGFsQ29udGFpbmVyIiwid3JhcHBlclJlZiIsInVzZVBvcnRhbENvbnRhaW5lciIsImhhbmRsZUNsZWFyIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwic2VhcmNoUXVlcnkiLCJnZXQiLCJzZWFyY2hTdGF0ZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJvblN1Ym1pdCIsInJvbGUiLCJjeCIsImN5IiwiciIsIlJvb3QiLCJvblZhbHVlQ2hhbmdlIiwiVHJpZ2dlciIsIlZhbHVlIiwiQ2hldnJvbkRvd25JY29uIiwiUG9ydGFsIiwiQ29udGVudCIsInNpZGUiLCJhbGlnbiIsInNpZGVPZmZzZXQiLCJhdm9pZENvbGxpc2lvbnMiLCJWaWV3cG9ydCIsIm8iLCJJdGVtIiwiSXRlbVRleHQiLCJzZXRDb250YWluZXIiLCJub2RlIiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJpc1NoYWRvdyIsImhvc3QiLCJwb3J0YWwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9hc3QiLCJfYWxlcnQiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9oZWFkZXIiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInRvZ2dsZUNvaW5zQWxlcnQiLCJtb2RlbFR5cGUiLCJQcm92aWRlciIsIlRvYXN0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2Jyb2tlci50cyIsIi90cy9zdG9yZS9jaGF0LnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXcvY2hhdC9jaGF0LWVtcHR5LXN0YXRlLnRzeCIsIi90cy92aWV3L2NoYXQvY2hhdC13aW5kb3cudHN4IiwiL3RzL3ZpZXcvY2hhdC9lbXB0eS1jaGF0LnRzeCIsIi90cy92aWV3L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXcvY2hhdC91c2UtY2hhdC1hbmltYXRpb24udHMiLCIvdHMvdmlldy9jaGF0L3VzZS1jaGF0LXN0b3JlLnRzIiwiL3RzL3ZpZXcvY2hhdC91c2UtY2hhdC10b2dnbGUudHMiLCIvdHMvdmlldy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlldy9jb2lucy9jcmVkaXRzLnRzeCIsIi90cy92aWV3L2NvaW5zL25vdGlmaWNhdGlvbnMtYmFyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL292ZXJsYXktaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbnRleHQudHMiLCIvdHMvdmlldy9kcmF3ZXIvZHJhd2VyLWNvbnRlbnQudHN4IiwiL3RzL3ZpZXcvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3L2RyYXdlci9vcmctc2VhcmNoLWJveC50c3giLCIvdHMvdmlldy9kcmF3ZXIvdXNlLXBvcnRhbC1jb250YWluZXIudHMiLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOO1lBQ0FDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sS0FBQSxDQUFBTyxNQUFNO1lB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