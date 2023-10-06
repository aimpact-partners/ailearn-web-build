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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUUsR0FBRyxvQ0FBdUIsR0FBRTtZQUNoRCxNQUFNO2NBQUVRO1lBQUksQ0FBRSxHQUFHOEYsSUFBSTtZQUNyQixNQUFNc0gsUUFBUSxHQUFHcE8sQ0FBQyxJQUFHO2NBQ3BCQSxDQUFDLENBQUMrSCxlQUFlLEVBQUU7Y0FDbkJ2SCxVQUFVLENBQUM4TCxLQUFLLENBQUM7WUFDbEIsQ0FBQztZQUVELE9BQ0NsUDtjQUFJMkQsR0FBRyxFQUFFLEdBQUdDLElBQUksSUFBSXNMLEtBQUs7WUFBRSxHQUMxQmxQLDJDQUNDQSw2QkFBQzhELFdBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sRUFBRyxPQUFFSCxJQUFJLENBQ3BCLEVBQ1A1RDtjQUFTNkQsU0FBUyxFQUFDO1lBQWUsR0FDakM3RCw2QkFBQzRFLGlCQUFVO2NBQUNiLElBQUksRUFBQyxRQUFRO2NBQUNJLE9BQU8sRUFBRTZNO1lBQVEsRUFBSSxDQUN0QyxDQUNOO1VBRVAiLCJuYW1lcyI6WyJVcGxvYWRDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZVVwbG9hZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJmb3JtYXRCeXRlcyIsImJ5dGVzIiwiZGVjaW1hbHMiLCJrIiwiZG0iLCJzaXplcyIsImkiLCJNYXRoIiwiZmxvb3IiLCJsb2ciLCJwYXJzZUZsb2F0IiwicG93IiwidG9GaXhlZCIsImFjY2VwdGVkRG9jdW1lbnRzIiwiUmVhY3RpdmVNb2RlbCIsImRvY3VtZW50cyIsIkFwcFdyYXBwZXIiLCJrbm93bGVkZ2VCb3hlcyIsIml0ZW1zIiwiY29sbGVjdGlvbiIsInNoYXJlZEZvbGRlcnMiLCJjb25zdHJ1Y3RvciIsIktub3dsZWRnZUJveGVzIiwibG9hZCIsImZldGNoaW5nIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlYWR5IiwicmVtb3ZlIiwicGF0aCIsIkdyaWRWaWV3IiwiZm9sZGVyIiwiZGVsZXRlRmlsZSIsImZvcm1hdHRlZERhdGUiLCJkYXkiLCJmb3JtYXQiLCJmaWxlcyIsIm1hcCIsImZpbGUiLCJrZXkiLCJuYW1lIiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJjcmVhdGVkQXQiLCJzaXplIiwidHlwZSIsIm9uQ2xpY2siLCJUYWJsZVZpZXciLCJ0ZXh0cyIsImNvbFNwYW4iLCJ0YWJsZSIsImhlYWRlciIsImRhdGUiLCJhY3Rpb25zIiwib3JpZ2luYWxuYW1lIiwiSWNvbkJ1dHRvbiIsIkZpbGVEZXRhaWxzIiwib3BlbiIsInZpZXciLCJzdG9yZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJFbXB0eSIsIm1lc3NhZ2UiLCJlbXB0eSIsIkZvbGRlckFjdGlvbnMiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNldE5ld1ZpZXciLCJhZGRGaWxlIiwib3BlbkRlbGV0ZU1vZGFsIiwic2hhcmVGb2xkZXIiLCJpc0VtcHR5Iiwib3BlbkNoYXRGb3JtIiwibWVudVJlZiIsInVzZVJlZiIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1c2VTdGF0ZSIsInRvcCIsInVzZUxheW91dEVmZmVjdCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwiaXNTYW1lTm9kZSIsImNvbXBvc2VkUGF0aCIsImlzQUNoaWxkcmVuIiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlRWZmZWN0IiwibWVudUVsZW1lbnQiLCJtZW51UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdwb3J0SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJnZW5lcmF0ZVZpZXdDbGFzcyIsImJ1dHRvblZpZXciLCJjbHMiLCJzdHlsZSIsInJlZiIsInZpZXdzIiwibGlzdCIsImdyaWQiLCJhZGQiLCJ1cGxvYWQiLCJkZWxldGUiLCJzaGFyZSIsIkVtcHR5RmlsZXMiLCJvcGVuRGlhbG9nIiwidGV4dCIsIm5vUmVzdWx0Iiwic3RhcnQiLCJzdWIiLCJkZXNjIiwiQnV0dG9uIiwibGFiZWwiLCJFbXB0eUZvbGRlcnMiLCJEb2N1bWVudHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJyZW5kZXJlZEl0ZW1zIiwic2V0UmVuZGVyZWRJdGVtcyIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoVGVybSIsInRyaW0iLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiaG9tZSIsIklucHV0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInZhcmlhbnQiLCJGb2xkZXJMaXN0IiwiZm9sZGVycyIsIkZvbGRlciIsIm9wZW5lZEZvbGRlciIsImhhbmRsZUZvbGRlckNsaWNrIiwic2V0VmlldyIsInRvZ2dsZVZpc2liaWxpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzaGFyZURpYWxvZyIsInNob3dNb2RhbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNGb2xkZXJPcGVuIiwic2VsZWN0ZWRLbm93bGVkZ2VCb3hJZCIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiU2hhcmVGb2xkZXIiLCJvbkNsb3NlIiwiY2xvc2UiLCJzZXRPcGVuZWRGb2xkZXIiLCJrbm93bGVkZ2VCb3giLCJzZXRLbm93bGVkZ2VCb3giLCJjb25maXJtYXRpb25SZWYiLCJvcGVuQ29uZmlybWF0aW9uTW9kYWwiLCJjbG9zZUNvbmZpcm1hdGlvbk1vZGFsIiwiaXNPcGVuZWQiLCJkZWxldGVGb2xkZXIiLCJyZXNwb25zZSIsImZvbGRlcnNMaXN0Iiwic2hhcmVkRm9sZGVyc0xpc3QiLCJTaGFyZWRGb2xkZXIiLCJzaGFyZWRGb2xkZXIiLCJDb25maXJtYXRpb25Nb2RhbCIsImNvbnRlbnQiLCJjb25maXJtYXRpb24iLCJjYW5jZWwiLCJzdWJtaXQiLCJwcm9wcyIsImJhc2VVcmwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImZvbGRlckxpbmsiLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwidG90YWxLYnMiLCJzZXRUb3RhbEticyIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b2dnbGVEaWFnbG9nIiwic2V0VG9nZ2xlRGlhbG9nIiwiS0IiLCJjbG9zZURpYWxvZyIsIlByZWxvYWRTY3JlZW4iLCJ0b3RhbEl0ZW1zIiwiUHJvdmlkZXIiLCJNb2RhbCIsInNob3ciLCJVcGxvYWQiLCJTZWxlY3QiLCJrYk9wdGlvbnMiLCJrYiIsImhhbmRsZUtiQ2hhbmdlIiwiZmluZCIsIktCU2VsZWN0IiwiZm9yd2FyZFJlZiIsIlVwbG9hZGVyTW9kYWxDb250ZXh0IiwidXNlVXBsb2FkZXJNb2RhbENvbnRleHQiLCJVcGxvYWRlZEZpbGVzIiwidG90YWxGaWxlcyIsImZvckVhY2giLCJpbmRleCIsInB1c2giLCJJdGVtIiwidXJsIiwicHJvamVjdCIsImNvbmZpZyIsInBhcmFtcyIsInNlbGVjdFJlZiIsInVwbG9hZEZpbGVzIiwiY2xlYXJGaWxlcyIsImJ1dHRvbiIsImRyYWciLCJtdWx0aXBsZSIsInNldE5hbWUiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiaGFuZGxlU3VibWl0IiwiaGFzSW52YWxpZEZpbGUiLCJjb250YWluZXIiLCJyZXBsYWNlIiwic3BlY3MiLCJrbm93bGVkZ2VCb3hJZCIsInN0YXR1cyIsIm9uU3VibWl0IiwiYXV0b0NvbXBsZXRlIiwiaW5wdXQiLCJoZWxwIiwiYWN0aW9uIiwic2F2ZSIsImxvYWRpbmciLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50cyIsInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9mb3JtYXQtYnl0ZXMudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2ZpbGVzL2RldGFpbHMvZ3JpZC12aWV3LnRzeCIsInRzL3ZpZXdzL2ZpbGVzL2RldGFpbHMvdGFibGUtdmlldy50c3giLCJ0cy92aWV3cy9maWxlcy9pbmRleC50c3giLCJ0cy92aWV3cy9mb2xkZXJzL2FjdGlvbnMudHN4IiwidHMvdmlld3MvZm9sZGVycy9lbXB0eS1maWxlcy50c3giLCJ0cy92aWV3cy9mb2xkZXJzL2VtcHR5LWZvbGRlcnMudHN4IiwidHMvdmlld3MvZm9sZGVycy9pbmRleC50c3giLCJ0cy92aWV3cy9mb2xkZXJzL2l0ZW0udHN4IiwidHMvdmlld3MvZm9sZGVycy9saXN0LnRzeCIsInRzL3ZpZXdzL2ZvbGRlcnMvc2hhcmUudHN4IiwidHMvdmlld3MvZm9sZGVycy9zaGFyZWQtZm9sZGVycy50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy91cGxvYWQvS0JTZWxlY3Rvci50c3giLCJ0cy92aWV3cy91cGxvYWQvY29udGV4dC50c3giLCJ0cy92aWV3cy91cGxvYWQvZmlsZXMudHN4IiwidHMvdmlld3MvdXBsb2FkL2luZGV4LnRzeCIsInRzL3ZpZXdzL3VwbG9hZC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=