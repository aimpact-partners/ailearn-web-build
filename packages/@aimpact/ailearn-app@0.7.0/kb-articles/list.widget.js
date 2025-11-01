System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/shared/hooks", "@aimpact/ailearn-app@0.7.0/components/ui", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/icons", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/ailearn-app@0.7.0/kb-articles/assign", "react-virtuoso@4.14.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, ArticleItemPublished, ArticleItem, ArticlesList, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    ArticleItemPublished: void 0,
    ArticleItem: void 0,
    ArticlesList: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_4 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_5 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_pragmateUi108Components) {
      dependency_7 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_8 = _aimpactAilearnApp070SharedHooks;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_9 = _aimpactAilearnApp070ComponentsUi;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_10 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Icons) {
      dependency_11 = _pragmateUi108Icons;
    }, function (_beyondJsKernel0114Routing) {
      dependency_12 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Modal) {
      dependency_13 = _pragmateUi108Modal;
    }, function (_pragmateUi108Toast) {
      dependency_14 = _pragmateUi108Toast;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactAilearnApp070KbArticlesAssign) {
      dependency_16 = _aimpactAilearnApp070KbArticlesAssign;
    }, function (_reactVirtuoso2) {
      dependency_17 = _reactVirtuoso2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/kb-articles/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/articles', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/shared/hooks', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/icons', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/toast', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@aimpact/ailearn-app/kb-articles/assign', dependency_16], ['react-virtuoso', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-kb-articles-list",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/kb-articles/list.widget",
        "is": "page",
        "route": "/kb/articles/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/kb-articles/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 301523666,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
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
            show() {
              const tab = this.uri.qs.get('tab');
              this.#store.load(tab);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 460458740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _articles = require("@aimpact/ailearn-sdk/entities/articles");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            #articles;
            #draftArticles;
            #tab = 'drafts'; // Default tab
            get articles() {
              return this.#articles;
            }
            get draftArticles() {
              return this.#draftArticles;
            }
            get tab() {
              return this.#tab;
            }
            get currentCollection() {
              return this.#tab === 'drafts' ? this.#draftArticles : this.#articles;
            }
            constructor() {
              super(_beyond_context.module.specifier);
              //@ts-ignore
              this.#articles = new _articles.Articles();
              //@ts-ignore
              this.#draftArticles = new _articles.DraftArticles();
              // Subscribe to collection events
              this.#articles.on('change', this.triggerEvent);
              this.#articles.on('items.changed', () => this.trigger('items.changed'));
              this.#draftArticles.on('change', this.triggerEvent);
              this.#draftArticles.on('items.changed', () => this.trigger('items.changed'));
            }
            async load(tab = 'drafts') {
              // Validate tab
              if (!['drafts', 'published'].includes(tab)) {
                throw new Error(`Invalid tab: ${tab}`);
              }
              await this.gTexts().fetch();
              this.broker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.kbArticles]]
              });
              // Update tab
              this.#tab = tab;
              // Load appropriate collection
              const collection = tab === 'drafts' ? this.#draftArticles : this.#articles;
              if (collection.loaded) return;
              const response = await collection.load();
              this.ready = true;
              return response;
            }
            async deleteArticle(id) {
              const collection = this.currentCollection;
              const item = collection.map.get(id);
              await item.delete();
              this.trigger('items.changed');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1791647994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts,
              store
            } = (0, _hooks.useModuleContext)();
            return React.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "actions flex-container flex-center"
            }, React.createElement(_components.Link, {
              href: "/kb/articles/management",
              className: "grow btn btn-primary"
            }, store.globalTexts.actions.create)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 396880046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks2 = require("@aimpact/ailearn-app/shared/hooks");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [selectedItem, setSelectedItem] = React.useState(null);
            const [tabSelect, setTabSelect] = React.useState(0);
            const tabs = ['drafts', 'published'];
            const tabIndex = tabs.indexOf(store.tab);
            // Subscribe to store changes
            (0, _hooks.useStore)(store, ['change', 'items.changed']);
            // Initialize tab selection
            React.useEffect(() => {
              setTabSelect(tabIndex);
            }, [tabIndex]);
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              texts: store.texts,
              store: store,
              fetching: store.fetching || false,
              selectedItem,
              setSelectedItem,
              totalItems: store.currentCollection?.items?.length || 0
            };
            const handleTabChange = async event => {
              const target = event.currentTarget;
              const index = parseInt(target.dataset.index || '0');
              const tab = tabs[index];
              // Update URL params
              const urlParams = new URLSearchParams(globalThis.location.search);
              urlParams.set('tab', tab);
              _routing.routing.replaceState({}, document.title, `/kb/articles/list?${urlParams.toString()}`);
              // Update tab selection
              setTabSelect(index);
              // Load collection for the selected tab
              await store.load(tab);
            };
            const currentCollection = store.currentCollection;
            const hasItems = currentCollection?.items?.length > 0;
            const isLoading = (store.fetching || store.currentCollection?.fetching) && !hasItems;
            return React.createElement(_hooks2.ModuleContextProvider, {
              value: contextValue
            }, React.createElement(_ui.PageContainer, {
              fetching: store.fetching
            }, React.createElement(_ui.PageTitle, {
              title: store.texts.title
            }, React.createElement("section", {
              className: "title__actions"
            }, React.createElement(_components.Link, {
              href: "/kb/articles/management",
              className: "grow btn btn-primary"
            }, store.globalTexts.actions.create))), React.createElement("div", {
              className: "pui-tabs-container pui-page-tabs-container"
            }, React.createElement("header", {
              className: "pui-tabs-menu tabs page__tabs"
            }, tabs.map((tab, index) => React.createElement("div", {
              key: tab,
              "data-index": index,
              className: `pui-tab tab${tabSelect === index ? ' active' : ''}`,
              onClick: handleTabChange
            }, store.texts.tabs[tab])))), React.createElement("div", {
              className: "pui-tab-panes mt-15"
            }, isLoading ? React.createElement(_ui.AppLoader, null) : hasItems ? React.createElement(_list.ArticlesList, {
              collection: currentCollection
            }) : React.createElement(_empty.EmptyList, null))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/item-published
      **************************************/

      ims.set('./views/item-published', {
        hash: 1275209238,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleItemPublished = ArticleItemPublished;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _assign = require("@aimpact/ailearn-app/kb-articles/assign");
          /*bundle*/
          function ArticleItemPublished({
            article
          }) {
            const [showDeleteModal, setShowDeleteModal] = React.useState(false);
            const [openModal, setOpenModal] = React.useState(false);
            const [actionSelected, setActionSelected] = React.useState(undefined);
            const {
              texts
            } = (0, _hooks.useModuleContext)();
            const [openClone, setOpenClone] = React.useState(false);
            const {
              store: {
                globalTexts
              }
            } = (0, _hooks.useModuleContext)();
            const handleDelete = async () => {
              try {
                // Call the delete method on the article item
                await article.delete();
                // Show success toast
                _toast.toast.success('Article deleted successfully');
                // Close modal
                setShowDeleteModal(false);
              } catch (error) {
                console.error('Error deleting article:', error);
                _toast.toast.error('Error deleting article');
              }
            };
            const handleView = () => {
              _routing.routing.pushState(`/kb/articles/view/${article.id}`);
            };
            const onAction = event => {
              event.stopPropagation();
              setOpenModal(true);
              setActionSelected(event.currentTarget.dataset.action);
            };
            const toggleModal = event => {
              event?.stopPropagation();
              setActionSelected(undefined);
              setOpenModal(!openModal);
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "article-item"
            }, React.createElement("div", {
              className: "article-item__content"
            }, React.createElement("div", {
              className: "article-item__header"
            }, React.createElement("h3", {
              className: "article-item__title"
            }, article.title), article.isFeatured && React.createElement("span", {
              className: "article-item__featured"
            }, "\u2B50")), React.createElement("p", {
              className: "article-item__description"
            }, article.description), React.createElement("div", {
              className: "article-item__meta"
            }, React.createElement(_ui.Chip, {
              variant: "light"
            }, article.type))), React.createElement("div", {
              className: "article-item__actions"
            }, React.createElement(_icons2.AppIconButton, {
              "data-action": "share",
              onClick: onAction,
              icon: "assign",
              title: globalTexts.actions.assignToClassroom
            }), React.createElement(_icons.IconButton, {
              icon: "eye",
              onClick: handleView,
              title: texts.actions.view
            }), React.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: () => setShowDeleteModal(true),
              title: texts.actions.delete
            }))), (openModal || actionSelected) && React.createElement(_assign.ArticleKbObjects, {
              item: article,
              action: actionSelected,
              onClose: toggleModal,
              texts: texts.assign
            }), showDeleteModal && React.createElement(_modal.ConfirmModal, {
              title: texts.delete.title,
              show: showDeleteModal,
              onConfirm: handleDelete,
              onCancel: () => setShowDeleteModal(false),
              btnConfirm: {
                label: texts.delete.confirm,
                variant: 'primary'
              },
              btnCancel: {
                label: texts.delete.cancel
              }
            }, React.createElement("p", null, texts.delete.message)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 3984665922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleItem = ArticleItem;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function ArticleItem({
            article
          }) {
            const {
              texts
            } = (0, _hooks.useModuleContext)();
            return React.createElement("div", {
              className: "article-item"
            }, React.createElement("div", {
              className: "article-item__content"
            }, React.createElement("div", {
              className: "article-item__header"
            }, React.createElement("h3", {
              className: "article-item__title"
            }, article.title), article.isFeatured && React.createElement("span", {
              className: "article-item__featured"
            }, "\u2B50")), React.createElement("p", {
              className: "article-item__description"
            }, article.description), React.createElement("div", {
              className: "article-item__meta"
            }, React.createElement(_ui.Chip, {
              variant: "light"
            }, article.type))), React.createElement("div", {
              className: "article-item__actions"
            }, React.createElement(_icons.IconButton, {
              icon: "edit",
              href: `/kb/articles/management?id=${article.id}`,
              title: texts.actions.edit
            })));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 56284214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticlesList = ArticlesList;
          var React = require("react");
          var _reactVirtuoso = require("react-virtuoso");
          var _item = require("./item");
          var _itemPublished = require("./item-published");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          /*bundle*/
          function ArticlesList({
            collection
          }) {
            const {
              store
            } = (0, _hooks.useModuleContext)();
            const articles = collection?.items || [];
            const isDrafts = store.tab === 'drafts';
            const itemContent = (index, article) => {
              if (isDrafts) {
                return React.createElement(_item.ArticleItem, {
                  key: article.id || index,
                  article: article
                });
              } else {
                return React.createElement(_itemPublished.ArticleItemPublished, {
                  key: article.id || index,
                  article: article
                });
              }
            };
            return React.createElement("div", {
              className: "articles-list"
            }, React.createElement(_reactVirtuoso.Virtuoso, {
              data: articles,
              itemContent: itemContent,
              overscan: 5,
              className: "articles-list__virtuoso"
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/item-published",
        "from": "ArticleItemPublished",
        "name": "ArticleItemPublished"
      }, {
        "im": "./views/item",
        "from": "ArticleItem",
        "name": "ArticleItem"
      }, {
        "im": "./views/list",
        "from": "ArticlesList",
        "name": "ArticlesList"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'ArticleItemPublished') && _export("ArticleItemPublished", ArticleItemPublished = require ? require('./views/item-published').ArticleItemPublished : value);
        (require || prop === 'ArticleItem') && _export("ArticleItem", ArticleItem = require ? require('./views/item').ArticleItem : value);
        (require || prop === 'ArticlesList') && _export("ArticlesList", ArticlesList = require ? require('./views/list').ArticlesList : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfYmFzZSIsIl9hcnRpY2xlcyIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJhcnRpY2xlcyIsImRyYWZ0QXJ0aWNsZXMiLCJjdXJyZW50Q29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQXJ0aWNsZXMiLCJEcmFmdEFydGljbGVzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJFcnJvciIsImdUZXh0cyIsImZldGNoIiwiYnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwia2JBcnRpY2xlcyIsImNvbGxlY3Rpb24iLCJsb2FkZWQiLCJyZXNwb25zZSIsInJlYWR5IiwiZGVsZXRlQXJ0aWNsZSIsImlkIiwiaXRlbSIsIm1hcCIsImRlbGV0ZSIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfZW1wdHkiLCJfcm91dGluZyIsIl9ob29rczIiLCJfbGlzdCIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsInVzZVN0YXRlIiwidGFiU2VsZWN0Iiwic2V0VGFiU2VsZWN0IiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsInVzZVN0b3JlIiwidXNlRWZmZWN0IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwidG90YWxJdGVtcyIsIml0ZW1zIiwibGVuZ3RoIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXgiLCJwYXJzZUludCIsImRhdGFzZXQiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJnbG9iYWxUaGlzIiwibG9jYXRpb24iLCJzZWFyY2giLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZG9jdW1lbnQiLCJ0b1N0cmluZyIsImhhc0l0ZW1zIiwiaXNMb2FkaW5nIiwiTW9kdWxlQ29udGV4dFByb3ZpZGVyIiwidmFsdWUiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwia2V5Iiwib25DbGljayIsIkFwcExvYWRlciIsIkFydGljbGVzTGlzdCIsIl9pY29ucyIsIl9tb2RhbCIsIl90b2FzdCIsIl9pY29uczIiLCJfYXNzaWduIiwiQXJ0aWNsZUl0ZW1QdWJsaXNoZWQiLCJhcnRpY2xlIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiYWN0aW9uU2VsZWN0ZWQiLCJzZXRBY3Rpb25TZWxlY3RlZCIsInVuZGVmaW5lZCIsIm9wZW5DbG9uZSIsInNldE9wZW5DbG9uZSIsImhhbmRsZURlbGV0ZSIsInRvYXN0Iiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVZpZXciLCJwdXNoU3RhdGUiLCJvbkFjdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImFjdGlvbiIsInRvZ2dsZU1vZGFsIiwiRnJhZ21lbnQiLCJpc0ZlYXR1cmVkIiwiQ2hpcCIsInZhcmlhbnQiLCJ0eXBlIiwiQXBwSWNvbkJ1dHRvbiIsImFzc2lnblRvQ2xhc3Nyb29tIiwiSWNvbkJ1dHRvbiIsInZpZXciLCJBcnRpY2xlS2JPYmplY3RzIiwib25DbG9zZSIsImFzc2lnbiIsIkNvbmZpcm1Nb2RhbCIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsIm1lc3NhZ2UiLCJBcnRpY2xlSXRlbSIsImVkaXQiLCJfcmVhY3RWaXJ0dW9zbyIsIl9pdGVtIiwiX2l0ZW1QdWJsaXNoZWQiLCJpc0RyYWZ0cyIsIml0ZW1Db250ZW50IiwiVmlydHVvc28iLCJkYXRhIiwib3ZlcnNjYW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0tcHVibGlzaGVkLnRzeCIsIi90cy92aWV3cy9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBcUIsSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDakM7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILE1BQU1DLEdBQUcs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