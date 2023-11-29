System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/wrapper", "pragmate-ui@0.0.3/icons", "dayjs@1.11.10", "pragmate-ui@0.0.3/empty", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.3/toast", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/modal", "@aimpact/ailearn-app@0.0.16/config", "@bgroup/media-manager@1.0.0/uploader-code", "pragmate-ui@0.0.3/form"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_4 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101Wrapper) {
      dependency_8 = _aimpactChat101Wrapper;
    }, function (_pragmateUi003Icons) {
      dependency_9 = _pragmateUi003Icons;
    }, function (_dayjs2) {
      dependency_10 = _dayjs2;
    }, function (_pragmateUi003Empty) {
      dependency_11 = _pragmateUi003Empty;
    }, function (_pragmateUi003Components) {
      dependency_12 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101UiManager) {
      dependency_14 = _aimpactChat101UiManager;
    }, function (_pragmateUi003Toast) {
      dependency_15 = _pragmateUi003Toast;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_16 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Modal) {
      dependency_18 = _pragmateUi003Modal;
    }, function (_aimpactAilearnApp0016Config) {
      dependency_19 = _aimpactAilearnApp0016Config;
    }, function (_bgroupMediaManager100UploaderCode) {
      dependency_20 = _bgroupMediaManager100UploaderCode;
    }, function (_pragmateUi003Form) {
      dependency_21 = _pragmateUi003Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/documents",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat/wrapper', dependency_8], ['pragmate-ui/icons', dependency_9], ['dayjs', dependency_10], ['pragmate-ui/empty', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@aimpact/chat/ui/manager', dependency_14], ['pragmate-ui/toast', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/modal', dependency_18], ['@aimpact/chat/config', dependency_19], ['@bgroup/media-manager/uploader-code', dependency_20], ['pragmate-ui/form', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-documents-page",
        "vspecifier": "@aimpact/chat@1.0.1/documents.widget",
        "is": "page",
        "route": "/documents",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/documents.widget');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 4293631410,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploadContext = exports.UploadContext = void 0;
          var _react = require("react");
          const UploadContext = exports.UploadContext = _react.default.createContext({});
          const useUploadContext = () => _react.default.useContext(UploadContext);
          exports.useUploadContext = useUploadContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3542939638,
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
          }
          exports.Controller = Controller;
        }
      });

      /******************************
      INTERNAL MODULE: ./format-bytes
      ******************************/

      ims.set('./format-bytes', {
        hash: 2475202177,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatBytes = formatBytes;
          function formatBytes(bytes, decimals = 2) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const dm = decimals < 0 ? 0 : decimals;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2067027784,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _wrapper = require("@aimpact/chat/wrapper");
          const acceptedDocuments = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'];
          class StoreManager extends _model.ReactiveModel {
            #kb;
            #documents;
            #acceptedDocuments = acceptedDocuments;
            #sharedFolders = [];
            get acceptedDocuments() {
              return this.#acceptedDocuments;
            }
            get documents() {
              return this.#documents;
            }
            #knowledgeBoxes = _wrapper.AppWrapper.knowledgeBoxes;
            get knowledgeBoxes() {
              return this.#knowledgeBoxes;
            }
            #items = [];
            get items() {
              return this.#items;
            }
            get collection() {
              return this.#kb;
            }
            get sharedFolders() {
              return this.#sharedFolders;
            }
            constructor() {
              super();
              this.#kb = new _core.KnowledgeBoxes();
              this.load();
            }
            async load() {
              try {
                this.fetching = true;
                await this.#kb.load({
                  userId: _session.sessionWrapper.user.id
                });
                this.#items = this.#kb.items;
                this.#sharedFolders = JSON.parse(localStorage.getItem('sharedFolders')) || [];
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
                this.ready = true;
              }
            }
            async remove(path) {
              try {
                return this.#documents.remove({
                  path,
                  userId: _session.sessionWrapper.userId
                });
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/files/details/grid-view
      ***********************************************/

      ims.set('./views/files/details/grid-view', {
        hash: 3220380546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GridView = GridView;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _dayjs = require("dayjs");
          function GridView({
            folder,
            deleteFile
          }) {
            const formattedDate = day => (0, _dayjs.default)(day).format('MMM, DD, YYYY [at] HH:mm A');
            const files = folder.documents?.map((file, i) => {
              return _react.default.createElement("div", {
                key: `${file.name}-${i}`,
                className: 'file-card'
              }, _react.default.createElement("div", {
                className: 'card-top'
              }, _react.default.createElement(_icons.Icon, {
                icon: 'doc',
                className: 'lg'
              }), _react.default.createElement("header", null, _react.default.createElement("h4", {
                className: 'file-name'
              }, file.name), _react.default.createElement("p", {
                className: 'file-date'
              }, formattedDate(file.createdAt)))), _react.default.createElement("div", {
                className: 'card-bottom'
              }, _react.default.createElement("p", null, file.size, " bytes"), file.type, _react.default.createElement(_icons.Icon, {
                icon: 'delete',
                onClick: () => deleteFile(file.name)
              })));
            });
            return _react.default.createElement("div", {
              className: 'file-details-grid'
            }, files);
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/files/details/table-view
      ************************************************/

      ims.set('./views/files/details/table-view', {
        hash: 4143725353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TableView = TableView;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _formatBytes = require("../../../format-bytes");
          var _dayjs = require("dayjs");
          var _context = require("../../../context");
          function TableView({
            folder,
            deleteFile
          }) {
            const {
              texts
            } = (0, _context.useUploadContext)();
            const formattedDate = day => (0, _dayjs.default)(day).format('MMM, DD, YYYY [at] HH:mm A');
            return _react.default.createElement("table", {
              className: 'file-details-table'
            }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
              colSpan: 2
            }, texts.folder.table.header.name), _react.default.createElement("th", null, texts.folder.table.header.date), _react.default.createElement("th", null, texts.folder.table.header.size), _react.default.createElement("th", null, texts.folder.table.header.actions))), _react.default.createElement("tbody", null, folder.documents?.map((file, i) => {
              return _react.default.createElement("tr", {
                key: `${file.name}-${i}`
              }, _react.default.createElement("td", {
                colSpan: 2
              }, file.originalname), _react.default.createElement("td", null, formattedDate(file.createdAt)), _react.default.createElement("td", null, (0, _formatBytes.formatBytes)(file.size), " "), _react.default.createElement("td", null, _react.default.createElement(_icons.IconButton, {
                icon: 'delete',
                onClick: () => deleteFile(file.name)
              })));
            })));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/files/index
      ***********************************/

      ims.set('./views/files/index', {
        hash: 1060921904,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FileDetails = FileDetails;
          var _react = require("react");
          var _gridView = require("./details/grid-view");
          var _tableView = require("./details/table-view");
          var _context = require("../../context");
          var _empty = require("pragmate-ui/empty");
          function FileDetails({
            folder,
            open,
            view
          }) {
            const {
              store
            } = (0, _context.useUploadContext)();
            const {
              texts
            } = (0, _context.useUploadContext)();
            async function deleteFile(name) {
              await store.remove(name);
            }
            const View = view === 'grid' ? _gridView.GridView : _tableView.TableView;
            const Control = !folder.documents?.length ? _react.default.createElement(_empty.Empty, {
              message: texts.folder.empty,
              icon: 'info'
            }) : _react.default.createElement(View, {
              folder: folder,
              deleteFile: deleteFile
            });
            return _react.default.createElement("div", {
              className: `folder-container ${open ? 'open' : ''}`
            }, Control);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/folders/actions
      ***************************************/

      ims.set('./views/folders/actions', {
        hash: 1820250944,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FolderActions = FolderActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../../context");
          function FolderActions({
            visible,
            setVisible,
            setNewView,
            addFile,
            openDeleteModal,
            shareFolder,
            view,
            isEmpty,
            openChatForm
          }) {
            const menuRef = _react.default.useRef(null);
            const [position, setPosition] = _react.default.useState({
              top: '50%'
            });
            const {
              texts
            } = (0, _context.useUploadContext)();
            _react.default.useLayoutEffect(() => {
              const handleClick = event => {
                const {
                  current
                } = menuRef;
                const isSameNode = event.composedPath()[0] === current;
                const isAChildren = current?.contains(event.composedPath()[0]);
                if (!isSameNode && !isAChildren) setVisible(false);
              };
              document.addEventListener('click', handleClick);
              return () => document.removeEventListener('click', handleClick);
            }, []);
            /* posiciona el elemento hacia arriba o abajo dependiendo la interseccion con el viewport */
            _react.default.useEffect(() => {
              if (menuRef.current) {
                const menuElement = menuRef.current;
                const menuRect = menuElement.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                if (menuRect.bottom > viewportHeight) setPosition({
                  bottom: '50%'
                });
              }
            }, [visible]);
            const generateViewClass = buttonView => {
              let cls = 'menu-item';
              if (isEmpty) return cls += ' disabled';
              return cls += buttonView === view ? ' active' : '';
            };
            return _react.default.createElement("div", {
              style: {
                ...position
              },
              className: `folder-buttons ${visible ? 'visible' : ''}`,
              ref: menuRef
            }, _react.default.createElement("section", {
              className: 'action-group'
            }, _react.default.createElement("span", {
              className: generateViewClass('list'),
              "data-type": 'list',
              onClick: setNewView
            }, _react.default.createElement(_icons.Icon, {
              icon: 'list'
            }), _react.default.createElement("p", {
              className: 'label'
            }, texts.folder.views.list)), _react.default.createElement("span", {
              className: generateViewClass('grid'),
              "data-type": 'grid',
              onClick: setNewView
            }, _react.default.createElement(_icons.Icon, {
              icon: 'grid'
            }), _react.default.createElement("p", {
              className: 'label'
            }, texts.folder.views.grid))), _react.default.createElement("section", {
              className: 'action-group'
            }, _react.default.createElement("span", {
              className: 'menu-item',
              onClick: openChatForm
            }, _react.default.createElement(_icons.Icon, {
              icon: 'add-chat'
            }), _react.default.createElement("p", {
              className: 'label'
            }, texts.folder.actions.add)), _react.default.createElement("span", {
              className: 'menu-item',
              onClick: addFile
            }, _react.default.createElement(_icons.Icon, {
              icon: 'upload-file'
            }), _react.default.createElement("p", {
              className: 'label'
            }, texts.folder.actions.upload)), _react.default.createElement("span", {
              className: 'menu-item',
              onClick: openDeleteModal
            }, _react.default.createElement(_icons.Icon, {
              icon: 'delete'
            }), _react.default.createElement("p", {
              className: 'label'
            }, texts.folder.actions.delete)), _react.default.createElement("span", {
              className: 'menu-item',
              onClick: shareFolder
            }, _react.default.createElement(_icons.Icon, {
              icon: 'share-link'
            }), _react.default.createElement("p", {
              className: 'label'
            }, texts.folder.actions.share))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/folders/empty-files
      *******************************************/

      ims.set('./views/folders/empty-files', {
        hash: 2087954136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyFiles = EmptyFiles;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function EmptyFiles() {
            const {
              openDialog,
              store,
              texts
            } = (0, _context.useUploadContext)();
            const text = store.items.length ? texts.empty.noResult : texts.empty.start;
            return _react.default.createElement("div", {
              className: 'empty'
            }, _react.default.createElement("h1", null, text), _react.default.createElement("p", null, _react.default.createElement("strong", null, texts.empty.sub), _react.default.createElement("br", null), " ", texts.empty.desc), _react.default.createElement(_components.Button, {
              icon: 'folder',
              onClick: () => openDialog(''),
              label: texts.empty.upload
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/folders/empty-folders
      *********************************************/

      ims.set('./views/folders/empty-folders', {
        hash: 335050344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyFolders = EmptyFolders;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function EmptyFolders() {
            const {
              openDialog,
              texts
            } = (0, _context.useUploadContext)();
            return _react.default.createElement("div", {
              className: 'empty'
            }, _react.default.createElement("h1", null, texts.empty.start), _react.default.createElement("p", null, _react.default.createElement("strong", null, texts.empty.sub), _react.default.createElement("br", null), texts.empty.desc), _react.default.createElement(_components.Button, {
              icon: 'folder',
              onClick: () => openDialog('')
            }, texts.empty.upload));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/folders/index
      *************************************/

      ims.set('./views/folders/index', {
        hash: 2540806305,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Documents = Documents;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _components2 = require("pragmate-ui/components");
          var _context = require("../../context");
          var _list = require("./list");
          function Documents() {
            const {
              openDialog,
              store,
              texts
            } = (0, _context.useUploadContext)();
            const [search, setSearch] = _react.default.useState('');
            const [renderedItems, setRenderedItems] = _react.default.useState(store.items);
            function handleSearch(e) {
              setSearch(e.target.value);
            }
            _react.default.useEffect(() => {
              const searchTerm = search.trim();
              const filteredItems = store.items.filter(item => item.path.toLowerCase().includes(searchTerm.toLowerCase()));
              setRenderedItems(filteredItems);
            }, [search]);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.CollapsibleHeader, {
              title: texts.home.title
            }, _react.default.createElement(_components.Input, {
              type: 'search',
              name: 'documentName',
              value: search,
              onChange: handleSearch,
              required: true,
              label: texts.home.search,
              className: 'grow'
            }), _react.default.createElement(_components2.Button, {
              className: 'grow',
              icon: 'upload-file',
              label: texts.home.upload,
              variant: 'primary',
              onClick: () => openDialog({})
            })), _react.default.createElement(_list.FolderList, {
              folders: renderedItems
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/folders/item
      ************************************/

      ims.set('./views/folders/item', {
        hash: 3547534335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Folder = Folder;
          var _react = require("react");
          var _files = require("../files");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../../context");
          var _share = require("./share");
          var _actions = require("./actions");
          var _manager = require("@aimpact/chat/ui/manager");
          var _wrapper = require("@aimpact/chat/wrapper");
          function Folder({
            folder,
            openedFolder,
            handleFolderClick,
            openDeleteModal
          }) {
            const [view, setView] = _react.default.useState('list');
            const [visible, setVisible] = _react.default.useState(false);
            const toggleVisibility = e => {
              e.stopPropagation();
              setVisible(!visible);
            };
            const shareDialog = _react.default.useRef(null);
            const {
              openDialog
            } = (0, _context.useUploadContext)();
            function addFile(e) {
              e.stopPropagation();
              openDialog(folder);
            }
            function shareFolder(e) {
              e.stopPropagation();
              shareDialog.current.showModal();
            }
            const setNewView = e => {
              e.stopPropagation();
              const {
                type
              } = e.currentTarget.dataset;
              setView(type);
              if (!isFolderOpen) handleFolderClick(folder);
            };
            function openChatForm(e) {
              e.stopPropagation();
              _wrapper.AppWrapper.selectedKnowledgeBoxId = folder.id;
              _manager.UIManager.modalOpened = true;
            }
            const isFolderOpen = openedFolder === folder.id;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              key: folder.path,
              className: `folder ${isFolderOpen ? 'open' : ''}`
            }, _react.default.createElement("header", {
              className: 'folder__header',
              onClick: () => handleFolderClick(folder)
            }, _react.default.createElement(_icons.Icon, {
              icon: 'folder'
            }), _react.default.createElement("h3", null, folder.path), _react.default.createElement(_actions.FolderActions, {
              visible: visible,
              setVisible: setVisible,
              setNewView: setNewView,
              view: view,
              isEmpty: !folder.documents?.length,
              addFile: addFile,
              openDeleteModal: e => openDeleteModal(e, folder),
              shareFolder: shareFolder,
              openChatForm: openChatForm
            }), _react.default.createElement(_icons.Icon, {
              icon: 'list-menu',
              className: 'mobile-menu',
              onClick: toggleVisibility
            })), _react.default.createElement(_files.FileDetails, {
              folder: folder,
              open: isFolderOpen,
              view: view
            })), _react.default.createElement(_share.ShareFolder, {
              ref: shareDialog,
              folder: folder,
              onClose: () => shareDialog.current.close()
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/folders/list
      ************************************/

      ims.set('./views/folders/list', {
        hash: 3512964110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FolderList = void 0;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("@aimpact/chat/shared/components");
          var _emptyFiles = require("./empty-files");
          var _item = require("./item");
          var _sharedFolders = require("./shared-folders");
          const FolderList = ({
            folders
          }) => {
            const [openedFolder, setOpenedFolder] = (0, _react.useState)(null);
            const {
              knowledgeBox,
              setKnowledgeBox,
              store,
              texts
            } = (0, _context.useUploadContext)();
            const confirmationRef = _react.default.useRef(null);
            const openConfirmationModal = () => confirmationRef.current.showModal();
            const closeConfirmationModal = () => confirmationRef.current.close();
            function handleFolderClick(folder) {
              const isOpened = openedFolder === folder.id;
              isOpened ? setOpenedFolder(null) : setOpenedFolder(folder.id);
            }
            function openDeleteModal(e, folder) {
              e.stopPropagation();
              setKnowledgeBox(folder);
              openConfirmationModal();
            }
            async function deleteFolder() {
              try {
                const response = await store.remove(knowledgeBox.name);
              } catch (error) {
                console.error(error);
              }
            }
            const foldersList = folders.map((folder, i) => _react.default.createElement(_item.Folder, {
              key: `${folder.path}-${i}`,
              handleFolderClick: handleFolderClick,
              folder: folder,
              openedFolder: openedFolder,
              openDeleteModal: openDeleteModal
            }));
            const sharedFoldersList = store.sharedFolders.map((folder, i) => _react.default.createElement(_sharedFolders.SharedFolder, {
              key: `${folder.path}-${i}`,
              sharedFolder: folder
            }));
            if (!folders.length && !store.sharedFolders.length) return _react.default.createElement(_emptyFiles.EmptyFiles, null);
            return _react.default.createElement("div", {
              className: 'folder-list'
            }, [...foldersList, ...sharedFoldersList], _react.default.createElement(_components.ConfirmationModal, {
              ref: confirmationRef,
              content: `${texts.confirmation.delete} ${knowledgeBox.path}?`,
              cancel: closeConfirmationModal,
              submit: deleteFolder
            }));
          };
          exports.FolderList = FolderList;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/folders/share
      *************************************/

      ims.set('./views/folders/share', {
        hash: 2088074687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShareFolder = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _components2 = require("@aimpact/chat/shared/components");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          const ShareFolder = exports.ShareFolder = (0, _react.forwardRef)((props, ref) => {
            const {
              folder,
              onClose
            } = props;
            const baseUrl = window.location.origin;
            const folderLink = `${baseUrl}/documents/access?id=${folder.id}`;
            function copyToClipboard() {
              navigator.clipboard.writeText(folderLink);
              _toast.toast.success('Link copied to clipboard');
              onClose();
            }
            return _react.default.createElement("dialog", {
              ref: ref
            }, _react.default.createElement("div", {
              className: 'share__modal'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: onClose
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Share your Documents")), _react.default.createElement("div", {
              className: 'share__details'
            }, _react.default.createElement("h3", null, "Share your documents with others."), _react.default.createElement("p", null, " Copy the link and share it so they can access your knowledge folder.")), _react.default.createElement(_components2.Input, {
              value: folderLink,
              disabled: true,
              className: 'share__input'
            }), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              icon: 'close-circle',
              variant: 'link outline',
              onClick: onClose
            }, "Close"), _react.default.createElement(_components.Button, {
              icon: 'copy-link',
              variant: 'primary',
              onClick: copyToClipboard
            }, "Copy link"))));
          });
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/folders/shared-folders
      **********************************************/

      ims.set('./views/folders/shared-folders', {
        hash: 3992482150,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SharedFolder = SharedFolder;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function SharedFolder({
            sharedFolder
          }) {
            return _react.default.createElement("div", {
              key: sharedFolder.id,
              className: `folder`
            }, _react.default.createElement("header", {
              className: 'folder__header'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'shared-folder'
            }), _react.default.createElement("h3", null, sharedFolder.path)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 711674151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("../context");
          var _upload = require("./upload");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _emptyFolders = require("./folders/empty-folders");
          var _folders = require("./folders");
          var _beyond_context = require("beyond_context");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _modal = require("pragmate-ui/modal");
          /*bundle*/
          function View({
            store
          }) {
            const [knowledgeBox, setKnowledgeBox] = _react.default.useState({});
            const [isReady, setIsReady] = _react.default.useState(store.ready);
            const [totalKbs, setTotalKbs] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [toggleDiaglog, setToggleDialog] = _react.default.useState(false);
            const openDialog = (KB = {}) => {
              setKnowledgeBox(KB);
              setToggleDialog(true);
            };
            const closeDialog = (KB = {}) => {
              setKnowledgeBox({});
              setToggleDialog(false);
            };
            (0, _hooks.useBinder)([store], () => {
              setIsReady(store.ready);
              setTotalKbs(store.items.length);
            });
            if (!isReady || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const value = {
              texts,
              knowledgeBox,
              setKnowledgeBox,
              closeDialog,
              openDialog,
              totalItems: totalKbs,
              store
            };
            const Control = !store.items.length ? _emptyFolders.EmptyFolders : _folders.Documents;
            return _react.default.createElement(_context.UploadContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: 'view-container'
            }, _react.default.createElement(Control, null)), toggleDiaglog && _react.default.createElement(_modal.Modal, {
              show: true,
              className: 'upload-modal',
              onClose: closeDialog
            }, _react.default.createElement(_upload.Upload, {
              closeDialog: closeDialog
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/upload/KBSelector
      *****************************************/

      ims.set('./views/upload/KBSelector', {
        hash: 1228368605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KBSelect = void 0;
          var _react = require("react");
          var _context = require("../../context");
          function Select(props, ref) {
            const {
              store,
              knowledgeBox,
              texts,
              setKnowledgeBox
            } = (0, _context.useUploadContext)();
            if (!store.knowledgeBoxes?.items.length) return null;
            const kbOptions = store.knowledgeBoxes?.items.map(kb => _react.default.createElement("option", {
              key: kb.id,
              value: kb.id
            }, kb.path));
            const handleKbChange = e => {
              const {
                value
              } = e.target;
              const kb = !value ? {} : store.knowledgeBoxes.items.find(kb => kb.id === value);
              setKnowledgeBox(kb);
            };
            return _react.default.createElement("select", {
              title: 'KB selector',
              ref: ref,
              value: knowledgeBox.id,
              onChange: handleKbChange
            }, _react.default.createElement("option", {
              value: ''
            }, texts.upload.title), kbOptions);
          }
          const KBSelect = exports.KBSelect = _react.default.forwardRef(Select);
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/upload/context
      **************************************/

      ims.set('./views/upload/context', {
        hash: 3521729841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploaderModalContext = exports.UploaderModalContext = void 0;
          var _react = require("react");
          const UploaderModalContext = exports.UploaderModalContext = _react.default.createContext({});
          const useUploaderModalContext = () => _react.default.useContext(UploaderModalContext);
          exports.useUploaderModalContext = useUploaderModalContext;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/upload/files
      ************************************/

      ims.set('./views/upload/files', {
        hash: 3216781521,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploadedFiles = void 0;
          var _react = require("react");
          var _context = require("./context");
          var _item = require("./item");
          const UploadedFiles = () => {
            const {
              files,
              totalFiles
            } = (0, _context.useUploaderModalContext)();
            if (!totalFiles) return null;
            const items = [];
            files.forEach((item, index) => items.push(_react.default.createElement(_item.Item, {
              key: index,
              index: index,
              item: item
            })));
            return _react.default.createElement("ul", {
              className: 'list__upload-items'
            }, items);
          };
          exports.UploadedFiles = UploadedFiles;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/upload/index
      ************************************/

      ims.set('./views/upload/index', {
        hash: 1152707678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Upload = Upload;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _config = require("@aimpact/chat/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploaderCode = require("@bgroup/media-manager/uploader-code");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _context2 = require("./context");
          var _files = require("./files");
          var _KBSelector = require("./KBSelector");
          function Upload({
            closeDialog
          }) {
            const {
              userId
            } = _session.sessionWrapper;
            const {
              url,
              project
            } = _config.default.params;
            const selectRef = _react.default.useRef(null);
            const {
              uploadFiles,
              clearFiles,
              files,
              button,
              drag,
              deleteFile,
              totalFiles
            } = (0, _uploaderCode.useUploader)({
              url,
              multiple: true
            });
            const {
              store,
              knowledgeBox,
              texts
            } = (0, _context.useUploadContext)();
            const [name, setName] = _react.default.useState(knowledgeBox?.path ?? '');
            const [error, setError] = _react.default.useState('');
            const [fetching, setFetching] = _react.default.useState(false);
            _react.default.useEffect(() => setName(knowledgeBox.path ?? ''), [knowledgeBox.path]);
            const handleSubmit = async () => {
              setError('');
              setFetching(true);
              let hasInvalidFile = false;
              files.forEach(file => {
                if (!store.acceptedDocuments.includes(file.type)) {
                  setError('Only text files are allowed!');
                  clearFiles();
                  hasInvalidFile = true;
                }
              });
              if (hasInvalidFile) return setFetching(false);
              let container = knowledgeBox.path ? knowledgeBox.path.trim() : name;
              container = container.toLowerCase().trim().replace(/\s/g, '-');
              const specs = {
                project,
                type: 'files',
                container,
                userId
              };
              knowledgeBox.id && (specs.knowledgeBoxId = knowledgeBox.id);
              const response = await uploadFiles(specs);
              if (!response.status) {
                setError(texts.upload.error);
                return setFetching(false);
              }
              await store.load();
              setFetching(false);
              clearFiles();
              _toast.toast.success(texts.upload.success);
              closeDialog && closeDialog();
            };
            const value = {
              deleteFile,
              clearFiles,
              files,
              totalFiles
            };
            const cls = `upload-modal ${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_context2.UploaderModalContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("header", null, _react.default.createElement("h1", null, texts.upload.title)), _react.default.createElement("form", {
              onSubmit: handleSubmit
            }, _react.default.createElement(_KBSelector.KBSelect, {
              ref: selectRef
            }), !knowledgeBox.id && _react.default.createElement(_form.Input, {
              type: 'text',
              name: 'name',
              value: name,
              onChange: e => setName(e.target.value),
              required: true,
              autoComplete: 'off',
              label: texts.upload.input
            }), _react.default.createElement("div", {
              ref: drag,
              className: 'documents-drag'
            }, _react.default.createElement("p", {
              ref: button
            }, _react.default.createElement("strong", null, texts.upload.drag), " ", _react.default.createElement("br", null), " ", texts.upload.help), _react.default.createElement(_components.Button, {
              ref: button,
              disabled: fetching,
              icon: 'upload-file',
              className: 'outline',
              variant: 'primary'
            }, texts.upload.action)), !!error?.length && _react.default.createElement("div", {
              className: 'error'
            }, error), _react.default.createElement(_files.UploadedFiles, null), _react.default.createElement("footer", {
              className: 'modal__actions flex-container flex-center'
            }, _react.default.createElement(_components.Button, {
              icon: 'close-circle',
              variant: 'primary',
              label: texts.upload.cancel,
              onClick: closeDialog,
              disabled: fetching
            }), _react.default.createElement(_components.Button, {
              icon: 'save',
              variant: 'primary',
              label: texts.upload.save,
              disabled: !name || !totalFiles || fetching,
              onClick: handleSubmit,
              loading: fetching,
              type: 'submit'
            })))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/upload/item
      ***********************************/

      ims.set('./views/upload/item', {
        hash: 2823577152,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          function Item({
            item,
            index
          }) {
            const {
              deleteFile
            } = (0, _context.useUploaderModalContext)();
            const {
              name
            } = item;
            const onDelete = e => {
              e.stopPropagation();
              deleteFile(index);
            };
            return _react.default.createElement("li", {
              key: `${name}.${index}`
            }, _react.default.createElement("span", null, _react.default.createElement(_icons.Icon, {
              icon: 'file'
            }), " ", name), _react.default.createElement("section", {
              className: 'item__actions'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'delete',
              onClick: onDelete
            })));
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVXBsb2FkQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVVwbG9hZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3BhZ2UiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZm9ybWF0Qnl0ZXMiLCJieXRlcyIsImRlY2ltYWxzIiwiayIsImRtIiwic2l6ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwibG9nIiwicGFyc2VGbG9hdCIsInBvdyIsInRvRml4ZWQiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiX3dyYXBwZXIiLCJhY2NlcHRlZERvY3VtZW50cyIsIlJlYWN0aXZlTW9kZWwiLCJrYiIsImRvY3VtZW50cyIsInNoYXJlZEZvbGRlcnMiLCJrbm93bGVkZ2VCb3hlcyIsIkFwcFdyYXBwZXIiLCJpdGVtcyIsImNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsIktub3dsZWRnZUJveGVzIiwibG9hZCIsImZldGNoaW5nIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlYWR5IiwicmVtb3ZlIiwicGF0aCIsIl9pY29ucyIsIl9kYXlqcyIsIkdyaWRWaWV3IiwiZm9sZGVyIiwiZGVsZXRlRmlsZSIsImZvcm1hdHRlZERhdGUiLCJkYXkiLCJmb3JtYXQiLCJmaWxlcyIsIm1hcCIsImZpbGUiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwibmFtZSIsImNsYXNzTmFtZSIsIkljb24iLCJpY29uIiwiY3JlYXRlZEF0Iiwic2l6ZSIsInR5cGUiLCJvbkNsaWNrIiwiX2Zvcm1hdEJ5dGVzIiwiX2NvbnRleHQiLCJUYWJsZVZpZXciLCJ0ZXh0cyIsImNvbFNwYW4iLCJ0YWJsZSIsImhlYWRlciIsImRhdGUiLCJhY3Rpb25zIiwib3JpZ2luYWxuYW1lIiwiSWNvbkJ1dHRvbiIsIl9ncmlkVmlldyIsIl90YWJsZVZpZXciLCJfZW1wdHkiLCJGaWxlRGV0YWlscyIsIm9wZW4iLCJ2aWV3IiwiQ29udHJvbCIsImxlbmd0aCIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiRm9sZGVyQWN0aW9ucyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2V0TmV3VmlldyIsImFkZEZpbGUiLCJvcGVuRGVsZXRlTW9kYWwiLCJzaGFyZUZvbGRlciIsImlzRW1wdHkiLCJvcGVuQ2hhdEZvcm0iLCJtZW51UmVmIiwidXNlUmVmIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsInVzZVN0YXRlIiwidG9wIiwidXNlTGF5b3V0RWZmZWN0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwiY29tcG9zZWRQYXRoIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VFZmZlY3QiLCJtZW51RWxlbWVudCIsIm1lbnVSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld3BvcnRIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImJvdHRvbSIsImdlbmVyYXRlVmlld0NsYXNzIiwiYnV0dG9uVmlldyIsImNscyIsInN0eWxlIiwicmVmIiwidmlld3MiLCJsaXN0IiwiZ3JpZCIsImFkZCIsInVwbG9hZCIsImRlbGV0ZSIsInNoYXJlIiwiX2NvbXBvbmVudHMiLCJFbXB0eUZpbGVzIiwib3BlbkRpYWxvZyIsInRleHQiLCJub1Jlc3VsdCIsInN0YXJ0Iiwic3ViIiwiZGVzYyIsIkJ1dHRvbiIsImxhYmVsIiwiRW1wdHlGb2xkZXJzIiwiX2NvbXBvbmVudHMyIiwiX2xpc3QiLCJEb2N1bWVudHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJyZW5kZXJlZEl0ZW1zIiwic2V0UmVuZGVyZWRJdGVtcyIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoVGVybSIsInRyaW0iLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJGcmFnbWVudCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJob21lIiwiSW5wdXQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwidmFyaWFudCIsIkZvbGRlckxpc3QiLCJmb2xkZXJzIiwiX2ZpbGVzIiwiX3NoYXJlIiwiX2FjdGlvbnMiLCJfbWFuYWdlciIsIkZvbGRlciIsIm9wZW5lZEZvbGRlciIsImhhbmRsZUZvbGRlckNsaWNrIiwic2V0VmlldyIsInRvZ2dsZVZpc2liaWxpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzaGFyZURpYWxvZyIsInNob3dNb2RhbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNGb2xkZXJPcGVuIiwic2VsZWN0ZWRLbm93bGVkZ2VCb3hJZCIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiU2hhcmVGb2xkZXIiLCJvbkNsb3NlIiwiY2xvc2UiLCJfZW1wdHlGaWxlcyIsIl9pdGVtIiwiX3NoYXJlZEZvbGRlcnMiLCJzZXRPcGVuZWRGb2xkZXIiLCJrbm93bGVkZ2VCb3giLCJzZXRLbm93bGVkZ2VCb3giLCJjb25maXJtYXRpb25SZWYiLCJvcGVuQ29uZmlybWF0aW9uTW9kYWwiLCJjbG9zZUNvbmZpcm1hdGlvbk1vZGFsIiwiaXNPcGVuZWQiLCJkZWxldGVGb2xkZXIiLCJyZXNwb25zZSIsImZvbGRlcnNMaXN0Iiwic2hhcmVkRm9sZGVyc0xpc3QiLCJTaGFyZWRGb2xkZXIiLCJzaGFyZWRGb2xkZXIiLCJDb25maXJtYXRpb25Nb2RhbCIsImNvbnRlbnQiLCJjb25maXJtYXRpb24iLCJjYW5jZWwiLCJzdWJtaXQiLCJfdG9hc3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJiYXNlVXJsIiwibG9jYXRpb24iLCJvcmlnaW4iLCJmb2xkZXJMaW5rIiwiY29weVRvQ2xpcGJvYXJkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJfdXBsb2FkIiwiX2hvb2tzIiwiX2VtcHR5Rm9sZGVycyIsIl9mb2xkZXJzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsIl9tb2RhbCIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwidG90YWxLYnMiLCJzZXRUb3RhbEticyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvZ2dsZURpYWdsb2ciLCJzZXRUb2dnbGVEaWFsb2ciLCJLQiIsImNsb3NlRGlhbG9nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInRvdGFsSXRlbXMiLCJQcm92aWRlciIsIk1vZGFsIiwic2hvdyIsIlVwbG9hZCIsIlNlbGVjdCIsImtiT3B0aW9ucyIsImhhbmRsZUtiQ2hhbmdlIiwiZmluZCIsIktCU2VsZWN0IiwiVXBsb2FkZXJNb2RhbENvbnRleHQiLCJ1c2VVcGxvYWRlck1vZGFsQ29udGV4dCIsIlVwbG9hZGVkRmlsZXMiLCJ0b3RhbEZpbGVzIiwiZm9yRWFjaCIsImluZGV4IiwicHVzaCIsIkl0ZW0iLCJfY29uZmlnIiwiX3VwbG9hZGVyQ29kZSIsIl9mb3JtIiwiX2NvbnRleHQyIiwiX0tCU2VsZWN0b3IiLCJ1cmwiLCJwcm9qZWN0IiwicGFyYW1zIiwic2VsZWN0UmVmIiwidXBsb2FkRmlsZXMiLCJjbGVhckZpbGVzIiwiYnV0dG9uIiwiZHJhZyIsInVzZVVwbG9hZGVyIiwibXVsdGlwbGUiLCJzZXROYW1lIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImhhbmRsZVN1Ym1pdCIsImhhc0ludmFsaWRGaWxlIiwiY29udGFpbmVyIiwicmVwbGFjZSIsInNwZWNzIiwia25vd2xlZGdlQm94SWQiLCJzdGF0dXMiLCJvblN1Ym1pdCIsImF1dG9Db21wbGV0ZSIsImlucHV0IiwiaGVscCIsImFjdGlvbiIsInNhdmUiLCJsb2FkaW5nIiwib25EZWxldGUiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2Zvcm1hdC1ieXRlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9maWxlcy9kZXRhaWxzL2dyaWQtdmlldy50c3giLCIvdHMvdmlld3MvZmlsZXMvZGV0YWlscy90YWJsZS12aWV3LnRzeCIsIi90cy92aWV3cy9maWxlcy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9sZGVycy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9mb2xkZXJzL2VtcHR5LWZpbGVzLnRzeCIsIi90cy92aWV3cy9mb2xkZXJzL2VtcHR5LWZvbGRlcnMudHN4IiwiL3RzL3ZpZXdzL2ZvbGRlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ZvbGRlcnMvaXRlbS50c3giLCIvdHMvdmlld3MvZm9sZGVycy9saXN0LnRzeCIsIi90cy92aWV3cy9mb2xkZXJzL3NoYXJlLnRzeCIsIi90cy92aWV3cy9mb2xkZXJzL3NoYXJlZC1mb2xkZXJzLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXBsb2FkL0tCU2VsZWN0b3IudHN4IiwiL3RzL3ZpZXdzL3VwbG9hZC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy91cGxvYWQvZmlsZXMudHN4IiwiL3RzL3ZpZXdzL3VwbG9hZC9pbmRleC50c3giLCIvdHMvdmlld3MvdXBsb2FkL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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