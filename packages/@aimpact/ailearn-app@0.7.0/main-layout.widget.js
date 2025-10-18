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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9icmVhZGNydW1iIiwiX2kxOG4iLCJfcm91dGluZyIsIl90ZXh0cyIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwic2hvd0RyYXdlciIsInZhbHVlIiwidHJpZ2dlciIsImdsb2JhbFRleHRzIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJwcmV2aW91c1BhdGhuYW1lIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJDdXJyZW50VGV4dHMiLCJmZXRjaCIsIm9uIiwiZXhpc3RzIiwiaXRlbXMiLCJmaW5kSW5kZXgiLCJpdGVtIiwiZmluZExhc3RJbmRleCIsImFycmF5IiwicHJlZGljYXRlIiwiaSIsImxlbmd0aCIsImxhc3RJbmRleCIsIkFycmF5IiwiaXNBcnJheSIsImluY2x1ZGVzIiwibmV3SXRlbXMiLCJzbGljZSIsInNldCIsImdsb2JhbFRoaXMiLCJsYXlvdXQiLCJhZGRNb2RlbCIsImlkIiwidW5kZWZpbmVkIiwib25MaXN0ZW4iLCJjbGVhck1vZGVsIiwic2F2ZWQiLCJ0cmlnZ2VyRXZlbnQiLCJjYWxsYmFjayIsInNwZWNzIiwiY29uc29sZSIsImVycm9yIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwic2V0VGltZW91dCIsImNsZWFyIiwib3ZlcmxheSIsInNldFRpdGxlIiwidGl0bGUiLCJvblJlZnJlc2giLCJyZWZyZXNoIiwiZm9yY2UiLCJwcm9wcyIsInVwZGF0ZWQiLCJMYXlvdXRCcm9rZXIiLCJfY29yZSIsIl93cmFwcGVyIiwiX2FwaSIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJDaGF0U3RvcmUiLCJjaGF0IiwiYXBpIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJpbml0IiwicmVhZHkiLCJBcHBXcmFwcGVyIiwiaXNSZWFkeSIsImdldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsImNsb3NlIiwiY3JlYXRlIiwibGFuZ3VhZ2UiLCJvcmdJZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwicmVzcG9uc2UiLCJwb3N0Iiwib3JnYW5pemF0aW9uSWQiLCJzdGF0dXMiLCJFcnJvciIsIkNoYXQiLCJkYXRhIiwibG9hZEFsbCIsImUiLCJfYnJva2VyIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoYXQiLCJfYXJ0aWNsZXMiLCJpc1N0b3JlIiwiYnJva2VyIiwiY2hhdFN0b3JlIiwia2JDb2xsZWN0aW9uIiwiaGlzdG9yeUNsZWFudXAiLCJzZXNzaW9uIiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJLQkNvbGxlY3Rpb24iLCJzZXR1cEhpc3RvcnlMaXN0ZW5lciIsInZhbGlkYXRlUGFyYW1zIiwibG9hZFNlYXJjaCIsInRleHQiLCJsb2FkIiwiaGlzdG9yeVN0YXRlIiwiaGlzdG9yeSIsInN0YXRlIiwicXVlcnkiLCJ0cmltIiwiY2xlYXJTZWFyY2giLCJyZXBsYWNlU3RhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhbmRsZVVybENoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcmlnaW5hbFB1c2hTdGF0ZSIsInB1c2hTdGF0ZSIsIm9yaWdpbmFsUmVwbGFjZVN0YXRlIiwiYXJncyIsImFwcGx5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbiIsIm9mZiIsIlJlYWN0IiwiQ2hhdEVtcHR5U3RhdGUiLCJvbkNyZWF0ZUNoYXQiLCJpc0NyZWF0aW5nIiwic2VsZWN0ZWRPcmdJZCIsInNldFNlbGVjdGVkT3JnSWQiLCJ1c2VTdGF0ZSIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaGFuZGxlQ3JlYXRlQ2hhdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJlbXB0eSIsIm5vQWN0aXZlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvcmdhbml6YXRpb24iLCJwbGFjZWhvbGRlciIsIm1hcCIsIm9yZyIsImtleSIsIm5hbWUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjcmVhdGVCdXR0b24iLCJfdXNlQ2hhdFN0b3JlIiwiX2NoYXRDb21wb25lbnQiLCJfY2hhdEVtcHR5U3RhdGUiLCJfZW1wdHlDaGF0IiwiX2NvbnRleHQiLCJfdXNlQ2hhdEFuaW1hdGlvbiIsIkNoYXRXaW5kb3ciLCJjaGF0V2luZG93UmVmIiwib25Ub2dnbGUiLCJ1c2VDaGF0U3RvcmUiLCJjaGF0U3BlY3MiLCJzZXRJc0NyZWF0aW5nIiwiaXNFeHBhbmRlZCIsInRvZ2dsZUNoYXQiLCJ1c2VDaGF0QW5pbWF0aW9uIiwidXNlTGF5b3V0Q29udGV4dCIsInJlZiIsImFjdGlvbnMiLCJtaW5pbWl6ZSIsImV4cGFuZCIsIkFnZW50c0NoYXRDb250YWluZXIiLCJpY29uIiwiYXV0b3BsYXkiLCJFbXB0eUNoYXQiLCJwbGF5ZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJjcmVhdGluZyIsInN0YXJ0Q2hhdCIsIl91c2VDaGF0VG9nZ2xlIiwiX2NoYXRXaW5kb3ciLCJHZW5lcmFsQ2hhdCIsImhhbmRsZVRvZ2dsZSIsInVzZUNoYXRUb2dnbGUiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJjaGF0Q29udGVudFJlZiIsInNldHRpbmdzIiwia2IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkIiwic2V0SXNFeHBhbmRlZCIsImV4cGFuZENoYXQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJlbGVtZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsIm1pbmltaXplQ2hhdCIsImlzQW5pbWF0aW5nIiwiX2dzYXAiLCJnc2FwIiwidG8iLCJzY2FsZSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImVhc2UiLCJvbkNvbXBsZXRlIiwiZnJvbVRvIiwidXNlRWZmZWN0IiwiX3JlYWN0IiwiX21vZGFsIiwiQ29pbnNBbGVydCIsInNob3ciLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsImRlZmF1bHQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJkZXNjcmlwdGlvbiIsIl9jaGlwcyIsIl9jb21wb25lbnRzIiwiX2FuaW1hdGVkTGFiZWwiLCJfdWkiLCJfaG9va3MiLCJDcmVkaXRzQ29udGFpbmVyIiwidG9nZ2xlQ29pbnNNb2RhbCIsInNldE1lc3NhZ2UiLCJzZXRIYXNDcmVkaXRzIiwiY2xzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJjb25zdW1lZCIsIm9uQ3JlZGl0c0NoYW5nZSIsImNsYXNzTGlzdCIsImFkZCIsInVzZVN0b3JlIiwiaGVhZGVyIiwiQ29udHJvbCIsImF0dHJzIiwidmFyaWFudCIsIkJ1dHRvbiIsIkNoaXAiLCJwZXJjZW50YWdlQXZhaWxhYmxlIiwibGFiZWwiLCJhdmFpbGFibGUiLCJBbmltYXRlZExhYmVsIiwiRnJhZ21lbnQiLCJCYXR0ZXJ5IiwicGVyY2VudCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJjaGlsZHJlbiIsIm1vdGlvbiIsInNwYW4iLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwiaGFzTW9kZWwiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiYmFja0xpbmsiLCJ0b2dnbGVEcmF3ZXIiLCJOYXZiYXJIZWFkZXIiLCJJY29uQnV0dG9uIiwiT3ZlcmxheUhlYWRlciIsIkxheW91dENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRlbnQiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlRmV0Y2hpbmdDaGFuZ2UiLCJTZWFyY2hSZXN1bHRJdGVtIiwibWV0YWRhdGEiLCJNYXRoIiwicm91bmQiLCJzY29yZSIsInRhZ3MiLCJ0YWciLCJpbmRleCIsIl9kcmF3ZXIiLCJfb3JnU2VhcmNoQm94IiwiX2RyYXdlckNvbnRlbnQiLCJMYXlvdXREcmF3ZXIiLCJoYXNNdWx0aXBsZU9yZ3MiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9yZ0NoYW5nZSIsImhhbmRsZVNlYXJjaCIsIkRyYXdlciIsIm9wZW4iLCJPcmdTZWFyY2hCb3giLCJvbk9yZ0NoYW5nZSIsImRyYXdlciIsInNlYXJjaCIsIm9uU2VhcmNoIiwiU2VsZWN0IiwiX3JlYWN0SWNvbnMiLCJfdXNlUG9ydGFsQ29udGFpbmVyIiwiaW5pdGlhbFF1ZXJ5Iiwic2V0UXVlcnkiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiY29udGFpbmVyIiwicG9ydGFsQ29udGFpbmVyIiwid3JhcHBlclJlZiIsInVzZVBvcnRhbENvbnRhaW5lciIsImhhbmRsZUNsZWFyIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwic2VhcmNoUXVlcnkiLCJnZXQiLCJzZWFyY2hTdGF0ZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJvblN1Ym1pdCIsInJvbGUiLCJjeCIsImN5IiwiciIsIlJvb3QiLCJvblZhbHVlQ2hhbmdlIiwiVHJpZ2dlciIsIlZhbHVlIiwiQ2hldnJvbkRvd25JY29uIiwiUG9ydGFsIiwiQ29udGVudCIsInNpZGUiLCJhbGlnbiIsInNpZGVPZmZzZXQiLCJhdm9pZENvbGxpc2lvbnMiLCJWaWV3cG9ydCIsIm8iLCJJdGVtIiwiSXRlbVRleHQiLCJzZXRDb250YWluZXIiLCJub2RlIiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJpc1NoYWRvdyIsImhvc3QiLCJwb3J0YWwiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9hc3QiLCJfYWxlcnQiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9oZWFkZXIiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInRvZ2dsZUNvaW5zQWxlcnQiLCJtb2RlbFR5cGUiLCJQcm92aWRlciIsIlRvYXN0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUvYnJva2VyLnRzIiwiLy90cy9zdG9yZS9jaGF0LnRzIiwiLy90cy9zdG9yZS9pbmRleC50cyIsIi8vdHMvdmlldy9jaGF0L2NoYXQtZW1wdHktc3RhdGUudHN4IiwiLy90cy92aWV3L2NoYXQvY2hhdC13aW5kb3cudHN4IiwiLy90cy92aWV3L2NoYXQvZW1wdHktY2hhdC50c3giLCIvL3RzL3ZpZXcvY2hhdC9pbmRleC50c3giLCIvL3RzL3ZpZXcvY2hhdC91c2UtY2hhdC1hbmltYXRpb24udHMiLCIvL3RzL3ZpZXcvY2hhdC91c2UtY2hhdC1zdG9yZS50cyIsIi8vdHMvdmlldy9jaGF0L3VzZS1jaGF0LXRvZ2dsZS50cyIsIi8vdHMvdmlldy9jb2lucy9hbGVydC50c3giLCIvL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvL3RzL3ZpZXcvY29pbnMvbm90aWZpY2F0aW9ucy1iYXIudHN4IiwiLy90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQtbGFiZWwudHN4IiwiLy90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiLy90cy92aWV3L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi8vdHMvdmlldy9jb21wb25lbnRzL292ZXJsYXktaGVhZGVyLnRzeCIsIi8vdHMvdmlldy9jb250ZXh0LnRzIiwiLy90cy92aWV3L2RyYXdlci9kcmF3ZXItY29udGVudC50c3giLCIvL3RzL3ZpZXcvZHJhd2VyL2luZGV4LnRzeCIsIi8vdHMvdmlldy9kcmF3ZXIvb3JnLXNlYXJjaC1ib3gudHN4IiwiLy90cy92aWV3L2RyYXdlci91c2UtcG9ydGFsLWNvbnRhaW5lci50cyIsIi8vZ2xvYmFsLnRzeC8iLCIvL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ047WUFDQUMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FD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