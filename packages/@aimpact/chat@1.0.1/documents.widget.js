System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/wrapper", "pragmate-ui@0.0.37/icons", "dayjs@1.11.9", "pragmate-ui@0.0.37/empty", "pragmate-ui@0.0.37/components", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.37/toast", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/modal", "@aimpact/ailearn-app@0.0.2/config", "@bgroup/media-manager@1.0.0/uploader-code", "pragmate-ui@0.0.37/form"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_4 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101Wrapper) {
      dependency_8 = _aimpactChat101Wrapper;
    }, function (_pragmateUi0037Icons) {
      dependency_9 = _pragmateUi0037Icons;
    }, function (_dayjs2) {
      dependency_10 = _dayjs2;
    }, function (_pragmateUi0037Empty) {
      dependency_11 = _pragmateUi0037Empty;
    }, function (_pragmateUi0037Components) {
      dependency_12 = _pragmateUi0037Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101UiManager) {
      dependency_14 = _aimpactChat101UiManager;
    }, function (_pragmateUi0037Toast) {
      dependency_15 = _pragmateUi0037Toast;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_16 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Modal) {
      dependency_18 = _pragmateUi0037Modal;
    }, function (_aimpactAilearnApp002Config) {
      dependency_19 = _aimpactAilearnApp002Config;
    }, function (_bgroupMediaManager100UploaderCode) {
      dependency_20 = _bgroupMediaManager100UploaderCode;
    }, function (_pragmateUi0037Form) {
      dependency_21 = _pragmateUi0037Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
          const UploadContext = _react.default.createContext({});
          exports.UploadContext = UploadContext;
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
          const ShareFolder = (0, _react.forwardRef)((props, ref) => {
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
          exports.ShareFolder = ShareFolder;
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
          const KBSelect = _react.default.forwardRef(Select);
          exports.KBSelect = KBSelect;
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
          const UploaderModalContext = _react.default.createContext({});
          exports.UploaderModalContext = UploaderModalContext;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVXBsb2FkQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZVVwbG9hZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3BhZ2UiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZm9ybWF0Qnl0ZXMiLCJieXRlcyIsImRlY2ltYWxzIiwiayIsImRtIiwic2l6ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwibG9nIiwicGFyc2VGbG9hdCIsInBvdyIsInRvRml4ZWQiLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiX3dyYXBwZXIiLCJhY2NlcHRlZERvY3VtZW50cyIsIlJlYWN0aXZlTW9kZWwiLCJrYiIsImRvY3VtZW50cyIsInNoYXJlZEZvbGRlcnMiLCJrbm93bGVkZ2VCb3hlcyIsIkFwcFdyYXBwZXIiLCJpdGVtcyIsImNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsIktub3dsZWRnZUJveGVzIiwibG9hZCIsImZldGNoaW5nIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlYWR5IiwicmVtb3ZlIiwicGF0aCIsIl9pY29ucyIsIl9kYXlqcyIsIkdyaWRWaWV3IiwiZm9sZGVyIiwiZGVsZXRlRmlsZSIsImZvcm1hdHRlZERhdGUiLCJkYXkiLCJmb3JtYXQiLCJmaWxlcyIsIm1hcCIsImZpbGUiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwibmFtZSIsImNsYXNzTmFtZSIsIkljb24iLCJpY29uIiwiY3JlYXRlZEF0Iiwic2l6ZSIsInR5cGUiLCJvbkNsaWNrIiwiX2Zvcm1hdEJ5dGVzIiwiX2NvbnRleHQiLCJUYWJsZVZpZXciLCJ0ZXh0cyIsImNvbFNwYW4iLCJ0YWJsZSIsImhlYWRlciIsImRhdGUiLCJhY3Rpb25zIiwib3JpZ2luYWxuYW1lIiwiSWNvbkJ1dHRvbiIsIl9ncmlkVmlldyIsIl90YWJsZVZpZXciLCJfZW1wdHkiLCJGaWxlRGV0YWlscyIsIm9wZW4iLCJ2aWV3IiwiQ29udHJvbCIsImxlbmd0aCIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiRm9sZGVyQWN0aW9ucyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2V0TmV3VmlldyIsImFkZEZpbGUiLCJvcGVuRGVsZXRlTW9kYWwiLCJzaGFyZUZvbGRlciIsImlzRW1wdHkiLCJvcGVuQ2hhdEZvcm0iLCJtZW51UmVmIiwidXNlUmVmIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsInVzZVN0YXRlIiwidG9wIiwidXNlTGF5b3V0RWZmZWN0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwiY29tcG9zZWRQYXRoIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VFZmZlY3QiLCJtZW51RWxlbWVudCIsIm1lbnVSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld3BvcnRIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImJvdHRvbSIsImdlbmVyYXRlVmlld0NsYXNzIiwiYnV0dG9uVmlldyIsImNscyIsInN0eWxlIiwicmVmIiwidmlld3MiLCJsaXN0IiwiZ3JpZCIsImFkZCIsInVwbG9hZCIsImRlbGV0ZSIsInNoYXJlIiwiX2NvbXBvbmVudHMiLCJFbXB0eUZpbGVzIiwib3BlbkRpYWxvZyIsInRleHQiLCJub1Jlc3VsdCIsInN0YXJ0Iiwic3ViIiwiZGVzYyIsIkJ1dHRvbiIsImxhYmVsIiwiRW1wdHlGb2xkZXJzIiwiX2NvbXBvbmVudHMyIiwiX2xpc3QiLCJEb2N1bWVudHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJyZW5kZXJlZEl0ZW1zIiwic2V0UmVuZGVyZWRJdGVtcyIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoVGVybSIsInRyaW0iLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJGcmFnbWVudCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidGl0bGUiLCJob21lIiwiSW5wdXQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwidmFyaWFudCIsIkZvbGRlckxpc3QiLCJmb2xkZXJzIiwiX2ZpbGVzIiwiX3NoYXJlIiwiX2FjdGlvbnMiLCJfbWFuYWdlciIsIkZvbGRlciIsIm9wZW5lZEZvbGRlciIsImhhbmRsZUZvbGRlckNsaWNrIiwic2V0VmlldyIsInRvZ2dsZVZpc2liaWxpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzaGFyZURpYWxvZyIsInNob3dNb2RhbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNGb2xkZXJPcGVuIiwic2VsZWN0ZWRLbm93bGVkZ2VCb3hJZCIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiU2hhcmVGb2xkZXIiLCJvbkNsb3NlIiwiY2xvc2UiLCJfZW1wdHlGaWxlcyIsIl9pdGVtIiwiX3NoYXJlZEZvbGRlcnMiLCJzZXRPcGVuZWRGb2xkZXIiLCJrbm93bGVkZ2VCb3giLCJzZXRLbm93bGVkZ2VCb3giLCJjb25maXJtYXRpb25SZWYiLCJvcGVuQ29uZmlybWF0aW9uTW9kYWwiLCJjbG9zZUNvbmZpcm1hdGlvbk1vZGFsIiwiaXNPcGVuZWQiLCJkZWxldGVGb2xkZXIiLCJyZXNwb25zZSIsImZvbGRlcnNMaXN0Iiwic2hhcmVkRm9sZGVyc0xpc3QiLCJTaGFyZWRGb2xkZXIiLCJzaGFyZWRGb2xkZXIiLCJDb25maXJtYXRpb25Nb2RhbCIsImNvbnRlbnQiLCJjb25maXJtYXRpb24iLCJjYW5jZWwiLCJzdWJtaXQiLCJfdG9hc3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJiYXNlVXJsIiwibG9jYXRpb24iLCJvcmlnaW4iLCJmb2xkZXJMaW5rIiwiY29weVRvQ2xpcGJvYXJkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiZGlzYWJsZWQiLCJfdXBsb2FkIiwiX2hvb2tzIiwiX2VtcHR5Rm9sZGVycyIsIl9mb2xkZXJzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsIl9tb2RhbCIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwidG90YWxLYnMiLCJzZXRUb3RhbEticyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvZ2dsZURpYWdsb2ciLCJzZXRUb2dnbGVEaWFsb2ciLCJLQiIsImNsb3NlRGlhbG9nIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInRvdGFsSXRlbXMiLCJQcm92aWRlciIsIk1vZGFsIiwic2hvdyIsIlVwbG9hZCIsIlNlbGVjdCIsImtiT3B0aW9ucyIsImhhbmRsZUtiQ2hhbmdlIiwiZmluZCIsIktCU2VsZWN0IiwiVXBsb2FkZXJNb2RhbENvbnRleHQiLCJ1c2VVcGxvYWRlck1vZGFsQ29udGV4dCIsIlVwbG9hZGVkRmlsZXMiLCJ0b3RhbEZpbGVzIiwiZm9yRWFjaCIsImluZGV4IiwicHVzaCIsIkl0ZW0iLCJfY29uZmlnIiwiX3VwbG9hZGVyQ29kZSIsIl9mb3JtIiwiX2NvbnRleHQyIiwiX0tCU2VsZWN0b3IiLCJ1cmwiLCJwcm9qZWN0IiwicGFyYW1zIiwic2VsZWN0UmVmIiwidXBsb2FkRmlsZXMiLCJjbGVhckZpbGVzIiwiYnV0dG9uIiwiZHJhZyIsInVzZVVwbG9hZGVyIiwibXVsdGlwbGUiLCJzZXROYW1lIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImhhbmRsZVN1Ym1pdCIsImhhc0ludmFsaWRGaWxlIiwiY29udGFpbmVyIiwicmVwbGFjZSIsInNwZWNzIiwia25vd2xlZGdlQm94SWQiLCJzdGF0dXMiLCJvblN1Ym1pdCIsImF1dG9Db21wbGV0ZSIsImlucHV0IiwiaGVscCIsImFjdGlvbiIsInNhdmUiLCJsb2FkaW5nIiwib25EZWxldGUiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2Zvcm1hdC1ieXRlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9maWxlcy9kZXRhaWxzL2dyaWQtdmlldy50c3giLCIvdHMvdmlld3MvZmlsZXMvZGV0YWlscy90YWJsZS12aWV3LnRzeCIsIi90cy92aWV3cy9maWxlcy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9sZGVycy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9mb2xkZXJzL2VtcHR5LWZpbGVzLnRzeCIsIi90cy92aWV3cy9mb2xkZXJzL2VtcHR5LWZvbGRlcnMudHN4IiwiL3RzL3ZpZXdzL2ZvbGRlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ZvbGRlcnMvaXRlbS50c3giLCIvdHMvdmlld3MvZm9sZGVycy9saXN0LnRzeCIsIi90cy92aWV3cy9mb2xkZXJzL3NoYXJlLnRzeCIsIi90cy92aWV3cy9mb2xkZXJzL3NoYXJlZC1mb2xkZXJzLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXBsb2FkL0tCU2VsZWN0b3IudHN4IiwiL3RzL3ZpZXdzL3VwbG9hZC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy91cGxvYWQvZmlsZXMudHN4IiwiL3RzL3ZpZXdzL3VwbG9hZC9pbmRleC50c3giLCIvdHMvdmlld3MvdXBsb2FkL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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