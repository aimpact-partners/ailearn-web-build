System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/wrapper", "pragmate-ui@0.0.36/icons", "dayjs@1.11.9", "pragmate-ui@0.0.36/empty", "pragmate-ui@0.0.36/form", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.36/toast", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/modal", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/media-manager@1.0.0/uploader-code"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive114Model) {
      dependency_5 = _beyondJsReactive114Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_6 = _aimpactChatSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101Wrapper) {
      dependency_8 = _aimpactChat101Wrapper;
    }, function (_pragmateUi0036Icons) {
      dependency_9 = _pragmateUi0036Icons;
    }, function (_dayjs2) {
      dependency_10 = _dayjs2;
    }, function (_pragmateUi0036Empty) {
      dependency_11 = _pragmateUi0036Empty;
    }, function (_pragmateUi0036Form) {
      dependency_12 = _pragmateUi0036Form;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101UiManager) {
      dependency_14 = _aimpactChat101UiManager;
    }, function (_pragmateUi0036Toast) {
      dependency_15 = _pragmateUi0036Toast;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_16 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Modal) {
      dependency_18 = _pragmateUi0036Modal;
    }, function (_aimpactAilearnApp100Config) {
      dependency_19 = _aimpactAilearnApp100Config;
    }, function (_aimpactMediaManager100UploaderCode) {
      dependency_20 = _aimpactMediaManager100UploaderCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/pages/documents",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/chat/wrapper', dependency_8], ['pragmate-ui/icons', dependency_9], ['dayjs', dependency_10], ['pragmate-ui/empty', dependency_11], ['pragmate-ui/form', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@aimpact/chat/ui/manager', dependency_14], ['pragmate-ui/toast', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/modal', dependency_18], ['@aimpact/chat/config', dependency_19], ['@aimpact/media-manager/uploader-code', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-documents-page",
        "vspecifier": "@aimpact/chat@1.0.1/pages/documents.widget",
        "is": "page",
        "route": "/documents",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/pages/documents.widget');
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
        hash: 2039457110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyFiles = EmptyFiles;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          function EmptyFiles() {
            const {
              openDialog,
              store,
              texts
            } = (0, _context.useUploadContext)();
            const text = store.items.length ? texts.empty.noResult : texts.empty.start;
            return _react.default.createElement("div", {
              className: 'empty'
            }, _react.default.createElement("h1", null, text), _react.default.createElement("p", null, _react.default.createElement("strong", null, texts.empty.sub), _react.default.createElement("br", null), " ", texts.empty.desc), _react.default.createElement(_form.Button, {
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
        hash: 2580689151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyFolders = EmptyFolders;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          function EmptyFolders() {
            const {
              openDialog,
              texts
            } = (0, _context.useUploadContext)();
            return _react.default.createElement("div", {
              className: 'empty'
            }, _react.default.createElement("h1", null, texts.empty.start), _react.default.createElement("p", null, _react.default.createElement("strong", null, texts.empty.sub), _react.default.createElement("br", null), texts.empty.desc), _react.default.createElement(_form.Button, {
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
        hash: 3195542649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Documents = Documents;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _form = require("pragmate-ui/form");
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
            }), _react.default.createElement(_form.Button, {
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
        hash: 2791374627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShareFolder = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("@aimpact/chat/shared/components");
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
            }, _react.default.createElement("h3", null, "Share your documents with others."), _react.default.createElement("p", null, " Copy the link and share it so they can access your knowledge folder.")), _react.default.createElement(_components.Input, {
              value: folderLink,
              disabled: true,
              className: 'share__input'
            }), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'link outline',
              onClick: onClose
            }, "Close"), _react.default.createElement(_form.Button, {
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
        hash: 1659066888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Upload = Upload;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _config = require("@aimpact/chat/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploaderCode = require("@aimpact/media-manager/uploader-code");
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
            }, _react.default.createElement("strong", null, texts.upload.drag), " ", _react.default.createElement("br", null), " ", texts.upload.help), _react.default.createElement(_form.Button, {
              ref: button,
              disabled: fetching,
              icon: 'upload-file',
              className: 'outline',
              variant: 'primary'
            }, texts.upload.action)), !!error?.length && _react.default.createElement("div", {
              className: 'error'
            }, error), _react.default.createElement(_files.UploadedFiles, null), _react.default.createElement("footer", {
              className: 'modal__actions flex-container flex-center'
            }, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'primary',
              label: texts.upload.cancel,
              onClick: closeDialog,
              disabled: fetching
            }), _react.default.createElement(_form.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsR0FBRTtZQUNoRCxNQUFNO2NBQUVRO1lBQUksQ0FBRSxHQUFHOEYsSUFBSTtZQUNyQixNQUFNc0gsUUFBUSxHQUFHcE8sQ0FBQyxJQUFHO2NBQ3BCQSxDQUFDLENBQUMrSCxlQUFlLEVBQUU7Y0FDbkJ2SCxVQUFVLENBQUM4TCxLQUFLLENBQUM7WUFDbEIsQ0FBQztZQUVELE9BQ0NsUDtjQUFJMkQsR0FBRyxFQUFFLEdBQUdDLElBQUksSUFBSXNMLEtBQUs7WUFBRSxHQUMxQmxQLDJDQUNDQSw2QkFBQzhELFdBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sRUFBRyxPQUFFSCxJQUFJLENBQ3BCLEVBQ1A1RDtjQUFTNkQsU0FBUyxFQUFDO1lBQWUsR0FDakM3RCw2QkFBQzRFLGlCQUFVO2NBQUNiLElBQUksRUFBQyxRQUFRO2NBQUNJLE9BQU8sRUFBRTZNO1lBQVEsRUFBSSxDQUN0QyxDQUNOO1VBRVAiLCJuYW1lcyI6WyJVcGxvYWRDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZVVwbG9hZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJmb3JtYXRCeXRlcyIsImJ5dGVzIiwiZGVjaW1hbHMiLCJrIiwiZG0iLCJzaXplcyIsImkiLCJNYXRoIiwiZmxvb3IiLCJsb2ciLCJwYXJzZUZsb2F0IiwicG93IiwidG9GaXhlZCIsImFjY2VwdGVkRG9jdW1lbnRzIiwiUmVhY3RpdmVNb2RlbCIsImRvY3VtZW50cyIsIkFwcFdyYXBwZXIiLCJrbm93bGVkZ2VCb3hlcyIsIml0ZW1zIiwiY29sbGVjdGlvbiIsInNoYXJlZEZvbGRlcnMiLCJjb25zdHJ1Y3RvciIsIktub3dsZWRnZUJveGVzIiwibG9hZCIsImZldGNoaW5nIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiaWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlYWR5IiwicmVtb3ZlIiwicGF0aCIsIkdyaWRWaWV3IiwiZm9sZGVyIiwiZGVsZXRlRmlsZSIsImZvcm1hdHRlZERhdGUiLCJkYXkiLCJmb3JtYXQiLCJmaWxlcyIsIm1hcCIsImZpbGUiLCJrZXkiLCJuYW1lIiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJjcmVhdGVkQXQiLCJzaXplIiwidHlwZSIsIm9uQ2xpY2siLCJUYWJsZVZpZXciLCJ0ZXh0cyIsImNvbFNwYW4iLCJ0YWJsZSIsImhlYWRlciIsImRhdGUiLCJhY3Rpb25zIiwib3JpZ2luYWxuYW1lIiwiSWNvbkJ1dHRvbiIsIkZpbGVEZXRhaWxzIiwib3BlbiIsInZpZXciLCJzdG9yZSIsIkNvbnRyb2wiLCJsZW5ndGgiLCJFbXB0eSIsIm1lc3NhZ2UiLCJlbXB0eSIsIkZvbGRlckFjdGlvbnMiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNldE5ld1ZpZXciLCJhZGRGaWxlIiwib3BlbkRlbGV0ZU1vZGFsIiwic2hhcmVGb2xkZXIiLCJpc0VtcHR5Iiwib3BlbkNoYXRGb3JtIiwibWVudVJlZiIsInVzZVJlZiIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1c2VTdGF0ZSIsInRvcCIsInVzZUxheW91dEVmZmVjdCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwiaXNTYW1lTm9kZSIsImNvbXBvc2VkUGF0aCIsImlzQUNoaWxkcmVuIiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlRWZmZWN0IiwibWVudUVsZW1lbnQiLCJtZW51UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdwb3J0SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJnZW5lcmF0ZVZpZXdDbGFzcyIsImJ1dHRvblZpZXciLCJjbHMiLCJzdHlsZSIsInJlZiIsInZpZXdzIiwibGlzdCIsImdyaWQiLCJhZGQiLCJ1cGxvYWQiLCJkZWxldGUiLCJzaGFyZSIsIkVtcHR5RmlsZXMiLCJvcGVuRGlhbG9nIiwidGV4dCIsIm5vUmVzdWx0Iiwic3RhcnQiLCJzdWIiLCJkZXNjIiwiQnV0dG9uIiwibGFiZWwiLCJFbXB0eUZvbGRlcnMiLCJEb2N1bWVudHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJyZW5kZXJlZEl0ZW1zIiwic2V0UmVuZGVyZWRJdGVtcyIsImhhbmRsZVNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoVGVybSIsInRyaW0iLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiaG9tZSIsIklucHV0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInZhcmlhbnQiLCJGb2xkZXJMaXN0IiwiZm9sZGVycyIsIkZvbGRlciIsIm9wZW5lZEZvbGRlciIsImhhbmRsZUZvbGRlckNsaWNrIiwic2V0VmlldyIsInRvZ2dsZVZpc2liaWxpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzaGFyZURpYWxvZyIsInNob3dNb2RhbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNGb2xkZXJPcGVuIiwic2VsZWN0ZWRLbm93bGVkZ2VCb3hJZCIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiU2hhcmVGb2xkZXIiLCJvbkNsb3NlIiwiY2xvc2UiLCJzZXRPcGVuZWRGb2xkZXIiLCJrbm93bGVkZ2VCb3giLCJzZXRLbm93bGVkZ2VCb3giLCJjb25maXJtYXRpb25SZWYiLCJvcGVuQ29uZmlybWF0aW9uTW9kYWwiLCJjbG9zZUNvbmZpcm1hdGlvbk1vZGFsIiwiaXNPcGVuZWQiLCJkZWxldGVGb2xkZXIiLCJyZXNwb25zZSIsImZvbGRlcnNMaXN0Iiwic2hhcmVkRm9sZGVyc0xpc3QiLCJTaGFyZWRGb2xkZXIiLCJzaGFyZWRGb2xkZXIiLCJDb25maXJtYXRpb25Nb2RhbCIsImNvbnRlbnQiLCJjb25maXJtYXRpb24iLCJjYW5jZWwiLCJzdWJtaXQiLCJwcm9wcyIsImJhc2VVcmwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImZvbGRlckxpbmsiLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwidG90YWxLYnMiLCJzZXRUb3RhbEticyIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b2dnbGVEaWFnbG9nIiwic2V0VG9nZ2xlRGlhbG9nIiwiS0IiLCJjbG9zZURpYWxvZyIsIlByZWxvYWRTY3JlZW4iLCJ0b3RhbEl0ZW1zIiwiUHJvdmlkZXIiLCJNb2RhbCIsInNob3ciLCJVcGxvYWQiLCJTZWxlY3QiLCJrYk9wdGlvbnMiLCJrYiIsImhhbmRsZUtiQ2hhbmdlIiwiZmluZCIsIktCU2VsZWN0IiwiZm9yd2FyZFJlZiIsIlVwbG9hZGVyTW9kYWxDb250ZXh0IiwidXNlVXBsb2FkZXJNb2RhbENvbnRleHQiLCJVcGxvYWRlZEZpbGVzIiwidG90YWxGaWxlcyIsImZvckVhY2giLCJpbmRleCIsInB1c2giLCJJdGVtIiwidXJsIiwicHJvamVjdCIsImNvbmZpZyIsInBhcmFtcyIsInNlbGVjdFJlZiIsInVwbG9hZEZpbGVzIiwiY2xlYXJGaWxlcyIsImJ1dHRvbiIsImRyYWciLCJtdWx0aXBsZSIsInNldE5hbWUiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiaGFuZGxlU3VibWl0IiwiaGFzSW52YWxpZEZpbGUiLCJjb250YWluZXIiLCJyZXBsYWNlIiwic3BlY3MiLCJrbm93bGVkZ2VCb3hJZCIsInN0YXR1cyIsIm9uU3VibWl0IiwiYXV0b0NvbXBsZXRlIiwiaW5wdXQiLCJoZWxwIiwiYWN0aW9uIiwic2F2ZSIsImxvYWRpbmciLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50cyIsInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9mb3JtYXQtYnl0ZXMudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2ZpbGVzL2RldGFpbHMvZ3JpZC12aWV3LnRzeCIsInRzL3ZpZXdzL2ZpbGVzL2RldGFpbHMvdGFibGUtdmlldy50c3giLCJ0cy92aWV3cy9maWxlcy9pbmRleC50c3giLCJ0cy92aWV3cy9mb2xkZXJzL2FjdGlvbnMudHN4IiwidHMvdmlld3MvZm9sZGVycy9lbXB0eS1maWxlcy50c3giLCJ0cy92aWV3cy9mb2xkZXJzL2VtcHR5LWZvbGRlcnMudHN4IiwidHMvdmlld3MvZm9sZGVycy9pbmRleC50c3giLCJ0cy92aWV3cy9mb2xkZXJzL2l0ZW0udHN4IiwidHMvdmlld3MvZm9sZGVycy9saXN0LnRzeCIsInRzL3ZpZXdzL2ZvbGRlcnMvc2hhcmUudHN4IiwidHMvdmlld3MvZm9sZGVycy9zaGFyZWQtZm9sZGVycy50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy91cGxvYWQvS0JTZWxlY3Rvci50c3giLCJ0cy92aWV3cy91cGxvYWQvY29udGV4dC50c3giLCJ0cy92aWV3cy91cGxvYWQvZmlsZXMudHN4IiwidHMvdmlld3MvdXBsb2FkL2luZGV4LnRzeCIsInRzL3ZpZXdzL3VwbG9hZC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=