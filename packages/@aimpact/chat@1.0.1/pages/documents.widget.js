System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "dayjs@1.11.9", "pragmate-ui@0.0.36/empty", "pragmate-ui@0.0.36/form", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/ui/manager", "@aimpact/chat@1.0.1/wrapper", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/media-manager@1.0.0/uploader-code", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.0/core", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_pragmateUi0036Empty) {
      dependency_6 = _pragmateUi0036Empty;
    }, function (_pragmateUi0036Form) {
      dependency_7 = _pragmateUi0036Form;
    }, function (_aimpactChat101SharedComponents) {
      dependency_8 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101UiManager) {
      dependency_9 = _aimpactChat101UiManager;
    }, function (_aimpactChat101Wrapper) {
      dependency_10 = _aimpactChat101Wrapper;
    }, function (_pragmateUi0036Toast) {
      dependency_11 = _pragmateUi0036Toast;
    }, function (_aimpactAilearnApp100Config) {
      dependency_12 = _aimpactAilearnApp100Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_aimpactMediaManager100UploaderCode) {
      dependency_14 = _aimpactMediaManager100UploaderCode;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_15 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive112Model) {
      dependency_16 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_17 = _aimpactChatSdk100Core;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_18 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_19 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/form', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['@aimpact/chat/ui/manager', dependency_9], ['@aimpact/chat/wrapper', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/chat/config', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/media-manager/uploader-code', dependency_14], ['@beyond-js/react-18-widgets/page', dependency_15], ['@beyond-js/reactive/model', dependency_16], ['@aimpact/chat-sdk/core', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-documents-page",
        "vspecifier": "@aimpact/chat@1.0.1/pages/documents.widget",
        "is": "page",
        "route": "/documents",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/pages/documents.widget');
      ims = new Map();
      /****************************************************
      INTERNAL MODULE: ./components/files/details/grid-view
      ****************************************************/
      ims.set('./components/files/details/grid-view', {
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

      /*****************************************************
      INTERNAL MODULE: ./components/files/details/table-view
      *****************************************************/

      ims.set('./components/files/details/table-view', {
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

      /****************************************
      INTERNAL MODULE: ./components/files/index
      ****************************************/

      ims.set('./components/files/index', {
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

      /********************************************
      INTERNAL MODULE: ./components/folders/actions
      ********************************************/

      ims.set('./components/folders/actions', {
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

      /************************************************
      INTERNAL MODULE: ./components/folders/empty-files
      ************************************************/

      ims.set('./components/folders/empty-files', {
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

      /**************************************************
      INTERNAL MODULE: ./components/folders/empty-folders
      **************************************************/

      ims.set('./components/folders/empty-folders', {
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

      /******************************************
      INTERNAL MODULE: ./components/folders/index
      ******************************************/

      ims.set('./components/folders/index', {
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

      /*****************************************
      INTERNAL MODULE: ./components/folders/item
      *****************************************/

      ims.set('./components/folders/item', {
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

      /*****************************************
      INTERNAL MODULE: ./components/folders/list
      *****************************************/

      ims.set('./components/folders/list', {
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

      /******************************************
      INTERNAL MODULE: ./components/folders/share
      ******************************************/

      ims.set('./components/folders/share', {
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

      /***************************************************
      INTERNAL MODULE: ./components/folders/shared-folders
      ***************************************************/

      ims.set('./components/folders/shared-folders', {
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

      /*******************************************
      INTERNAL MODULE: ./components/upload/context
      *******************************************/

      ims.set('./components/upload/context', {
        hash: 3069086577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploaderModalContext = exports.UploaderModalContext = void 0;
          var React = require("react");
          const UploaderModalContext = React.createContext({});
          exports.UploaderModalContext = UploaderModalContext;
          const useUploaderModalContext = () => React.useContext(UploaderModalContext);
          exports.useUploaderModalContext = useUploaderModalContext;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/upload/files
      *****************************************/

      ims.set('./components/upload/files', {
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

      /*****************************************
      INTERNAL MODULE: ./components/upload/index
      *****************************************/

      ims.set('./components/upload/index', {
        hash: 210555211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Upload = Upload;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _config = require("@aimpact/chat/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploaderCode = require("@aimpact/media-manager/uploader-code");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("../../context");
          var _context2 = require("./context");
          var _files = require("./files");
          var _toast = require("pragmate-ui/toast");
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
              setKnowledgeBox,
              texts
            } = React.useContext(_context.UploadContext);
            const [name, setName] = React.useState(knowledgeBox?.path ?? '');
            const [error, setError] = React.useState('');
            const [fetching, setFetching] = React.useState(false);
            const selectRef = React.useRef(null);
            React.useEffect(() => setName(knowledgeBox.path ?? ''), [knowledgeBox.path]);
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
            const clearOnClose = () => {
              clearFiles();
              setError('');
              selectRef.current.value = '';
              setName('');
              closeDialog && closeDialog();
            };
            const handleKbChange = e => {
              const {
                value
              } = e.target;
              const kb = !value ? {} : store.knowledgeBoxes.items.find(kb => kb.id === value);
              setKnowledgeBox(kb);
            };
            const value = {
              deleteFile,
              clearFiles,
              files,
              totalFiles
            };
            const cls = `upload-modal ${fetching ? ' is-fetching' : ''}`;
            const kbOptions = store.knowledgeBoxes?.items.map(kb => React.createElement("option", {
              key: kb.id,
              value: kb.id
            }, kb.path));
            return React.createElement(_context2.UploaderModalContext.Provider, {
              value: value
            }, React.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              disabled: fetching,
              onClick: clearOnClose
            }), React.createElement("div", {
              className: cls
            }, React.createElement("header", null, React.createElement("h1", null, texts.upload.title)), React.createElement("form", {
              onSubmit: handleSubmit
            }, !!kbOptions.length && React.createElement("select", {
              ref: selectRef,
              value: knowledgeBox.id,
              onChange: handleKbChange
            }, React.createElement("option", {
              value: ''
            }, texts.upload.title), kbOptions), !knowledgeBox.id && React.createElement(_components.Input, {
              type: 'text',
              name: 'name',
              value: name,
              onChange: e => setName(e.target.value),
              required: true,
              label: texts.upload.input
            }), React.createElement("div", {
              ref: drag,
              className: 'documents-drag'
            }, React.createElement("p", {
              ref: button
            }, React.createElement("strong", null, texts.upload.drag), " ", React.createElement("br", null), " ", texts.upload.help), React.createElement(_form.Button, {
              ref: button,
              disabled: fetching,
              icon: 'upload-file',
              variant: 'link outline'
            }, texts.upload.action)), !!error?.length && React.createElement("div", {
              className: 'error'
            }, error), React.createElement(_files.UploadedFiles, null), React.createElement("footer", {
              className: 'modal__actions'
            }, React.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'link outline',
              label: texts.upload.cancel,
              onClick: clearOnClose,
              disabled: fetching
            }), React.createElement(_form.Button, {
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

      /****************************************
      INTERNAL MODULE: ./components/upload/item
      ****************************************/

      ims.set('./components/upload/item', {
        hash: 3583024444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
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
            return React.createElement("li", {
              key: `${name}.${index}`
            }, React.createElement("span", null, React.createElement(_icons.Icon, {
              icon: "file"
            }), " ", name), React.createElement("section", {
              className: "item__actions"
            }, React.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: onDelete
            })));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1500343708,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploadContext = exports.UploadContext = void 0;
          var React = require("react");
          const UploadContext = React.createContext({});
          exports.UploadContext = UploadContext;
          const useUploadContext = () => React.useContext(UploadContext);
          exports.useUploadContext = useUploadContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3149080382,
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

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 194283905,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("../context");
          var _upload = require("../components/upload");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _emptyFolders = require("../components/folders/empty-folders");
          var _folders = require("../components/folders");
          var _beyond_context = require("beyond_context");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [knowledgeBox, setKnowledgeBox] = React.useState({});
            const [isReady, setIsReady] = React.useState(store.ready);
            const [totalKbs, setTotalKbs] = React.useState(store.ready);
            const dialogRef = React.useRef(null);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const openDialog = (KB = {}) => {
              setKnowledgeBox(KB);
              dialogRef.current.showModal();
            };
            const closeDialog = () => {
              setKnowledgeBox({});
              dialogRef.current.close();
            };
            (0, _hooks.useBinder)([store], () => {
              setIsReady(store.ready);
              setTotalKbs(store.items.length);
            });
            if (!isReady || !textsReady) return React.createElement(_components.PreloadScreen, null);
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
            return React.createElement(_context.UploadContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: 'view-container'
            }, React.createElement(Control, null)), React.createElement("dialog", {
              ref: dialogRef
            }, React.createElement(_upload.Upload, {
              closeDialog: closeDialog
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2RheWpzIiwiR3JpZFZpZXciLCJmb2xkZXIiLCJkZWxldGVGaWxlIiwiZm9ybWF0dGVkRGF0ZSIsImRheSIsImRlZmF1bHQiLCJmb3JtYXQiLCJmaWxlcyIsImRvY3VtZW50cyIsIm1hcCIsImZpbGUiLCJpIiwiY3JlYXRlRWxlbWVudCIsImtleSIsIm5hbWUiLCJjbGFzc05hbWUiLCJJY29uIiwiaWNvbiIsImNyZWF0ZWRBdCIsInNpemUiLCJ0eXBlIiwib25DbGljayIsIl9mb3JtYXRCeXRlcyIsIl9jb250ZXh0IiwiVGFibGVWaWV3IiwidGV4dHMiLCJ1c2VVcGxvYWRDb250ZXh0IiwiY29sU3BhbiIsInRhYmxlIiwiaGVhZGVyIiwiZGF0ZSIsImFjdGlvbnMiLCJvcmlnaW5hbG5hbWUiLCJmb3JtYXRCeXRlcyIsIkljb25CdXR0b24iLCJfZ3JpZFZpZXciLCJfdGFibGVWaWV3IiwiX2VtcHR5IiwiRmlsZURldGFpbHMiLCJvcGVuIiwidmlldyIsInN0b3JlIiwicmVtb3ZlIiwiVmlldyIsIkNvbnRyb2wiLCJsZW5ndGgiLCJFbXB0eSIsIm1lc3NhZ2UiLCJlbXB0eSIsIkZvbGRlckFjdGlvbnMiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNldE5ld1ZpZXciLCJhZGRGaWxlIiwib3BlbkRlbGV0ZU1vZGFsIiwic2hhcmVGb2xkZXIiLCJpc0VtcHR5Iiwib3BlbkNoYXRGb3JtIiwibWVudVJlZiIsInVzZVJlZiIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1c2VTdGF0ZSIsInRvcCIsInVzZUxheW91dEVmZmVjdCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwiaXNTYW1lTm9kZSIsImNvbXBvc2VkUGF0aCIsImlzQUNoaWxkcmVuIiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlRWZmZWN0IiwibWVudUVsZW1lbnQiLCJtZW51UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdwb3J0SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJnZW5lcmF0ZVZpZXdDbGFzcyIsImJ1dHRvblZpZXciLCJjbHMiLCJzdHlsZSIsInJlZiIsInZpZXdzIiwibGlzdCIsImdyaWQiLCJhZGQiLCJ1cGxvYWQiLCJkZWxldGUiLCJzaGFyZSIsIl9mb3JtIiwiRW1wdHlGaWxlcyIsIm9wZW5EaWFsb2ciLCJ0ZXh0IiwiaXRlbXMiLCJub1Jlc3VsdCIsInN0YXJ0Iiwic3ViIiwiZGVzYyIsIkJ1dHRvbiIsImxhYmVsIiwiRW1wdHlGb2xkZXJzIiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIkRvY3VtZW50cyIsInNlYXJjaCIsInNldFNlYXJjaCIsInJlbmRlcmVkSXRlbXMiLCJzZXRSZW5kZXJlZEl0ZW1zIiwiaGFuZGxlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoVGVybSIsInRyaW0iLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsInBhdGgiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiRnJhZ21lbnQiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiaG9tZSIsIklucHV0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInZhcmlhbnQiLCJGb2xkZXJMaXN0IiwiZm9sZGVycyIsIl9maWxlcyIsIl9zaGFyZSIsIl9hY3Rpb25zIiwiX21hbmFnZXIiLCJfd3JhcHBlciIsIkZvbGRlciIsIm9wZW5lZEZvbGRlciIsImhhbmRsZUZvbGRlckNsaWNrIiwic2V0VmlldyIsInRvZ2dsZVZpc2liaWxpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzaGFyZURpYWxvZyIsInNob3dNb2RhbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNGb2xkZXJPcGVuIiwiQXBwV3JhcHBlciIsInNlbGVjdGVkS25vd2xlZGdlQm94SWQiLCJpZCIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiU2hhcmVGb2xkZXIiLCJvbkNsb3NlIiwiY2xvc2UiLCJfZW1wdHlGaWxlcyIsIl9pdGVtIiwiX3NoYXJlZEZvbGRlcnMiLCJzZXRPcGVuZWRGb2xkZXIiLCJrbm93bGVkZ2VCb3giLCJzZXRLbm93bGVkZ2VCb3giLCJjb25maXJtYXRpb25SZWYiLCJvcGVuQ29uZmlybWF0aW9uTW9kYWwiLCJjbG9zZUNvbmZpcm1hdGlvbk1vZGFsIiwiaXNPcGVuZWQiLCJkZWxldGVGb2xkZXIiLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImZvbGRlcnNMaXN0Iiwic2hhcmVkRm9sZGVyc0xpc3QiLCJzaGFyZWRGb2xkZXJzIiwiU2hhcmVkRm9sZGVyIiwic2hhcmVkRm9sZGVyIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJjb250ZW50IiwiY29uZmlybWF0aW9uIiwiY2FuY2VsIiwic3VibWl0IiwiZXhwb3J0cyIsIl90b2FzdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsImJhc2VVcmwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImZvbGRlckxpbmsiLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJkaXNhYmxlZCIsIlJlYWN0IiwiVXBsb2FkZXJNb2RhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlVXBsb2FkZXJNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiVXBsb2FkZWRGaWxlcyIsInRvdGFsRmlsZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJwdXNoIiwiSXRlbSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlckNvZGUiLCJfY29udGV4dDIiLCJVcGxvYWQiLCJjbG9zZURpYWxvZyIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwidXJsIiwicHJvamVjdCIsInBhcmFtcyIsInVwbG9hZEZpbGVzIiwiY2xlYXJGaWxlcyIsImJ1dHRvbiIsImRyYWciLCJ1c2VVcGxvYWRlciIsIm11bHRpcGxlIiwiVXBsb2FkQ29udGV4dCIsInNldE5hbWUiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZWxlY3RSZWYiLCJoYW5kbGVTdWJtaXQiLCJoYXNJbnZhbGlkRmlsZSIsImFjY2VwdGVkRG9jdW1lbnRzIiwiY29udGFpbmVyIiwicmVwbGFjZSIsInNwZWNzIiwia25vd2xlZGdlQm94SWQiLCJzdGF0dXMiLCJsb2FkIiwiY2xlYXJPbkNsb3NlIiwiaGFuZGxlS2JDaGFuZ2UiLCJrYiIsImtub3dsZWRnZUJveGVzIiwiZmluZCIsImtiT3B0aW9ucyIsIlByb3ZpZGVyIiwib25TdWJtaXQiLCJpbnB1dCIsImhlbHAiLCJhY3Rpb24iLCJzYXZlIiwibG9hZGluZyIsIm9uRGVsZXRlIiwiX3BhZ2UiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiYnl0ZXMiLCJkZWNpbWFscyIsImsiLCJkbSIsInNpemVzIiwiTWF0aCIsImZsb29yIiwibG9nIiwicGFyc2VGbG9hdCIsInBvdyIsInRvRml4ZWQiLCJfbW9kZWwiLCJfY29yZSIsIlJlYWN0aXZlTW9kZWwiLCJjb2xsZWN0aW9uIiwiY29uc3RydWN0b3IiLCJLbm93bGVkZ2VCb3hlcyIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVhZHkiLCJfdXBsb2FkIiwiX2hvb2tzIiwiX2VtcHR5Rm9sZGVycyIsIl9mb2xkZXJzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwidG90YWxLYnMiLCJzZXRUb3RhbEticyIsImRpYWxvZ1JlZiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIktCIiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsInRvdGFsSXRlbXMiXSwic291cmNlcyI6WyIvd2lkZ2V0L3RzL2NvbXBvbmVudHMvZmlsZXMvZGV0YWlscy9ncmlkLXZpZXcudHN4IiwiL3dpZGdldC90cy9jb21wb25lbnRzL2ZpbGVzL2RldGFpbHMvdGFibGUtdmlldy50c3giLCIvd2lkZ2V0L3RzL2NvbXBvbmVudHMvZmlsZXMvaW5kZXgudHN4IiwiL3dpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvYWN0aW9ucy50c3giLCIvd2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9lbXB0eS1maWxlcy50c3giLCIvd2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9lbXB0eS1mb2xkZXJzLnRzeCIsIi93aWRnZXQvdHMvY29tcG9uZW50cy9mb2xkZXJzL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvY29tcG9uZW50cy9mb2xkZXJzL2l0ZW0udHN4IiwiL3dpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvbGlzdC50c3giLCIvd2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9zaGFyZS50c3giLCIvd2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9zaGFyZWQtZm9sZGVycy50c3giLCIvd2lkZ2V0L3RzL2NvbXBvbmVudHMvdXBsb2FkL2NvbnRleHQudHN4IiwiL3dpZGdldC90cy9jb21wb25lbnRzL3VwbG9hZC9maWxlcy50c3giLCIvd2lkZ2V0L3RzL2NvbXBvbmVudHMvdXBsb2FkL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvY29tcG9uZW50cy91cGxvYWQvaXRlbS50c3giLCIvd2lkZ2V0L3RzL2NvbnRleHQudHMiLCIvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCIvd2lkZ2V0L3RzL2Zvcm1hdC1ieXRlcy50cyIsIi93aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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