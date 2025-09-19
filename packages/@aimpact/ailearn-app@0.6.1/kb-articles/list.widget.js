System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/articles", "react@18.3.1", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/shared/hooks", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/icons", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.6.1/components/icons", "@aimpact/ailearn-app@0.6.1/kb-articles/assign", "react-virtuoso@4.14.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, ArticleItemPublished, ArticleItem, ArticlesList, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp061StoresBase) {
      dependency_4 = _aimpactAilearnApp061StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesArticles) {
      dependency_5 = _aimpactAilearnSdk120EntitiesArticles;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_pragmateUi108Components) {
      dependency_7 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_8 = _aimpactAilearnApp061SharedHooks;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_9 = _aimpactAilearnApp061ComponentsUi;
    }, function (_pragmateUi108Icons) {
      dependency_10 = _pragmateUi108Icons;
    }, function (_beyondJsKernel0112Routing) {
      dependency_11 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi108Modal) {
      dependency_12 = _pragmateUi108Modal;
    }, function (_pragmateUi108Toast) {
      dependency_13 = _pragmateUi108Toast;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_aimpactAilearnApp061KbArticlesAssign) {
      dependency_15 = _aimpactAilearnApp061KbArticlesAssign;
    }, function (_reactVirtuoso2) {
      dependency_16 = _reactVirtuoso2;
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
          "vspecifier": "@aimpact/ailearn-app@0.6.1/kb-articles/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/articles', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/shared/hooks', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/icons', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/toast', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['@aimpact/ailearn-app/kb-articles/assign', dependency_15], ['react-virtuoso', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-kb-articles-list",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/kb-articles/list.widget",
        "is": "page",
        "route": "/kb/articles/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/kb-articles/list.widget');
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
        hash: 4083576647,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _routing = require("@beyond-js/kernel/routing");
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
            return React.createElement(_hooks.ModuleContextProvider, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsImV4cG9ydHMiLCJfYmFzZSIsIl9hcnRpY2xlcyIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJhcnRpY2xlcyIsImRyYWZ0QXJ0aWNsZXMiLCJjdXJyZW50Q29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQXJ0aWNsZXMiLCJEcmFmdEFydGljbGVzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiaW5jbHVkZXMiLCJFcnJvciIsImdUZXh0cyIsImZldGNoIiwiYnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwia2JBcnRpY2xlcyIsImNvbGxlY3Rpb24iLCJsb2FkZWQiLCJyZXNwb25zZSIsInJlYWR5IiwiZGVsZXRlQXJ0aWNsZSIsImlkIiwiaXRlbSIsIm1hcCIsImRlbGV0ZSIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfdWkiLCJFbXB0eUxpc3QiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfZW1wdHkiLCJfcm91dGluZyIsIl9saXN0Iiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwidXNlU3RhdGUiLCJ0YWJTZWxlY3QiLCJzZXRUYWJTZWxlY3QiLCJ0YWJzIiwidGFiSW5kZXgiLCJpbmRleE9mIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJ0b3RhbEl0ZW1zIiwiaXRlbXMiLCJsZW5ndGgiLCJoYW5kbGVUYWJDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleCIsInBhcnNlSW50IiwiZGF0YXNldCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImdsb2JhbFRoaXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJkb2N1bWVudCIsInRvU3RyaW5nIiwiaGFzSXRlbXMiLCJpc0xvYWRpbmciLCJNb2R1bGVDb250ZXh0UHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJrZXkiLCJvbkNsaWNrIiwiQXBwTG9hZGVyIiwiQXJ0aWNsZXNMaXN0IiwiX2ljb25zIiwiX21vZGFsIiwiX3RvYXN0IiwiX2ljb25zMiIsIl9hc3NpZ24iLCJBcnRpY2xlSXRlbVB1Ymxpc2hlZCIsImFydGljbGUiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJhY3Rpb25TZWxlY3RlZCIsInNldEFjdGlvblNlbGVjdGVkIiwidW5kZWZpbmVkIiwib3BlbkNsb25lIiwic2V0T3BlbkNsb25lIiwiaGFuZGxlRGVsZXRlIiwidG9hc3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlVmlldyIsInB1c2hTdGF0ZSIsIm9uQWN0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aW9uIiwidG9nZ2xlTW9kYWwiLCJGcmFnbWVudCIsImlzRmVhdHVyZWQiLCJDaGlwIiwidmFyaWFudCIsInR5cGUiLCJBcHBJY29uQnV0dG9uIiwiYXNzaWduVG9DbGFzc3Jvb20iLCJJY29uQnV0dG9uIiwidmlldyIsIkFydGljbGVLYk9iamVjdHMiLCJvbkNsb3NlIiwiYXNzaWduIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJidG5Db25maXJtIiwibGFiZWwiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwibWVzc2FnZSIsIkFydGljbGVJdGVtIiwiZWRpdCIsIl9yZWFjdFZpcnR1b3NvIiwiX2l0ZW0iLCJfaXRlbVB1Ymxpc2hlZCIsImlzRHJhZnRzIiwiaXRlbUNvbnRlbnQiLCJWaXJ0dW9zbyIsImRhdGEiLCJvdmVyc2NhbiJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9pdGVtLXB1Ymxpc2hlZC50c3giLCIvL3RzL3ZpZXdzL2l0ZW0udHN4IiwiLy90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxHQUFHLEdBQUcs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