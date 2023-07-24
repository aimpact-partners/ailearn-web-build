System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "dayjs@1.11.9", "pragmate-ui@0.0.36/empty", "pragmate-ui@0.0.36/form", "@aimpact/chat@0.0.2/shared/components", "@aimpact/chat@0.0.2/ui/manager", "@aimpact/chat@0.0.2/wrapper", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@0.0.1/config", "@aimpact/chat@0.0.2/session", "@aimpact/media-manager@1.0.0/uploader-code", "@beyond-js/react-18-widgets@0.0.6/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@0.0.1/core", "@beyond-js/react-18-widgets@0.0.6/hooks", "@aimpact/chat@0.0.2/shared/hooks"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
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
    }, function (_aimpactChat002SharedComponents) {
      dependency_8 = _aimpactChat002SharedComponents;
    }, function (_aimpactChat002UiManager) {
      dependency_9 = _aimpactChat002UiManager;
    }, function (_aimpactChat002Wrapper) {
      dependency_10 = _aimpactChat002Wrapper;
    }, function (_pragmateUi0036Toast) {
      dependency_11 = _pragmateUi0036Toast;
    }, function (_aimpactAilearnApp001Config) {
      dependency_12 = _aimpactAilearnApp001Config;
    }, function (_aimpactChat002Session) {
      dependency_13 = _aimpactChat002Session;
    }, function (_aimpactMediaManager100UploaderCode) {
      dependency_14 = _aimpactMediaManager100UploaderCode;
    }, function (_beyondJsReact18Widgets006Page) {
      dependency_15 = _beyondJsReact18Widgets006Page;
    }, function (_beyondJsReactive112Model) {
      dependency_16 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk001Core) {
      dependency_17 = _aimpactChatSdk001Core;
    }, function (_beyondJsReact18Widgets006Hooks) {
      dependency_18 = _beyondJsReact18Widgets006Hooks;
    }, function (_aimpactChat002SharedHooks) {
      dependency_19 = _aimpactChat002SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/pages/documents",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/form', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['@aimpact/chat/ui/manager', dependency_9], ['@aimpact/chat/wrapper', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/chat/config', dependency_12], ['@aimpact/chat/session', dependency_13], ['@aimpact/media-manager/uploader-code', dependency_14], ['@beyond-js/react-18-widgets/page', dependency_15], ['@beyond-js/reactive/model', dependency_16], ['@aimpact/chat-sdk/core', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-documents-page",
        "vspecifier": "@aimpact/chat@0.0.2/pages/documents.widget",
        "is": "page",
        "route": "/documents",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/pages/documents.widget');
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
        hash: 2563573986,
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
              variant: 'link',
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
        hash: 136195239,
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
          var _session = require("@aimpact/chat/session");
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
            }, React.createElement("select", {
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
              variant: 'link'
            }, texts.upload.action)), !!error?.length && React.createElement("div", {
              className: 'error'
            }, error), React.createElement(_files.UploadedFiles, null), React.createElement("footer", {
              className: 'modal__actions'
            }, React.createElement(_form.Button, {
              icon: 'close-circle',
              variant: 'link',
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
        hash: 3692273494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _session = require("@aimpact/chat/session");
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
                console.log(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtjQUFLRyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJILG9CQUFDeUIsT0FBTyxPQUFHLENBQ04sRUFDTnpCO2NBQVFvRSxHQUFHLEVBQUVzTDtZQUFTLEdBQ3JCMVAsb0JBQUNnTCxjQUFNO2NBQUNDLFdBQVcsRUFBRUE7WUFBVyxFQUFJLENBQzVCLENBQ2U7VUFFM0IiLCJuYW1lcyI6WyJHcmlkVmlldyIsImZvbGRlciIsImRlbGV0ZUZpbGUiLCJmb3JtYXR0ZWREYXRlIiwiZGF5IiwiZm9ybWF0IiwiZmlsZXMiLCJkb2N1bWVudHMiLCJtYXAiLCJmaWxlIiwiaSIsIlJlYWN0Iiwia2V5IiwibmFtZSIsImNsYXNzTmFtZSIsIkljb24iLCJpY29uIiwiY3JlYXRlZEF0Iiwic2l6ZSIsInR5cGUiLCJvbkNsaWNrIiwiVGFibGVWaWV3IiwidGV4dHMiLCJjb2xTcGFuIiwidGFibGUiLCJoZWFkZXIiLCJkYXRlIiwiYWN0aW9ucyIsIm9yaWdpbmFsbmFtZSIsIkljb25CdXR0b24iLCJGaWxlRGV0YWlscyIsIm9wZW4iLCJ2aWV3Iiwic3RvcmUiLCJyZW1vdmUiLCJWaWV3IiwiQ29udHJvbCIsImxlbmd0aCIsIkVtcHR5IiwibWVzc2FnZSIsImVtcHR5IiwiRm9sZGVyQWN0aW9ucyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2V0TmV3VmlldyIsImFkZEZpbGUiLCJvcGVuRGVsZXRlTW9kYWwiLCJzaGFyZUZvbGRlciIsImlzRW1wdHkiLCJvcGVuQ2hhdEZvcm0iLCJtZW51UmVmIiwidXNlUmVmIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsInVzZVN0YXRlIiwidG9wIiwidXNlTGF5b3V0RWZmZWN0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwiY29tcG9zZWRQYXRoIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VFZmZlY3QiLCJtZW51RWxlbWVudCIsIm1lbnVSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld3BvcnRIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImJvdHRvbSIsImdlbmVyYXRlVmlld0NsYXNzIiwiYnV0dG9uVmlldyIsImNscyIsInN0eWxlIiwicmVmIiwidmlld3MiLCJsaXN0IiwiZ3JpZCIsImFkZCIsInVwbG9hZCIsImRlbGV0ZSIsInNoYXJlIiwiRW1wdHlGaWxlcyIsIm9wZW5EaWFsb2ciLCJ0ZXh0IiwiaXRlbXMiLCJub1Jlc3VsdCIsInN0YXJ0Iiwic3ViIiwiZGVzYyIsIkJ1dHRvbiIsImxhYmVsIiwiRW1wdHlGb2xkZXJzIiwiRG9jdW1lbnRzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwicmVuZGVyZWRJdGVtcyIsInNldFJlbmRlcmVkSXRlbXMiLCJoYW5kbGVTZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hUZXJtIiwidHJpbSIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwicGF0aCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiaG9tZSIsIklucHV0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInZhcmlhbnQiLCJGb2xkZXJMaXN0IiwiZm9sZGVycyIsIkZvbGRlciIsIm9wZW5lZEZvbGRlciIsImhhbmRsZUZvbGRlckNsaWNrIiwic2V0VmlldyIsInRvZ2dsZVZpc2liaWxpdHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzaGFyZURpYWxvZyIsInNob3dNb2RhbCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNGb2xkZXJPcGVuIiwiQXBwV3JhcHBlciIsInNlbGVjdGVkS25vd2xlZGdlQm94SWQiLCJpZCIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiU2hhcmVGb2xkZXIiLCJvbkNsb3NlIiwiY2xvc2UiLCJzZXRPcGVuZWRGb2xkZXIiLCJrbm93bGVkZ2VCb3giLCJzZXRLbm93bGVkZ2VCb3giLCJjb25maXJtYXRpb25SZWYiLCJvcGVuQ29uZmlybWF0aW9uTW9kYWwiLCJjbG9zZUNvbmZpcm1hdGlvbk1vZGFsIiwiaXNPcGVuZWQiLCJkZWxldGVGb2xkZXIiLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImZvbGRlcnNMaXN0Iiwic2hhcmVkRm9sZGVyc0xpc3QiLCJzaGFyZWRGb2xkZXJzIiwiU2hhcmVkRm9sZGVyIiwic2hhcmVkRm9sZGVyIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJjb250ZW50IiwiY29uZmlybWF0aW9uIiwiY2FuY2VsIiwic3VibWl0IiwiZXhwb3J0cyIsInByb3BzIiwiYmFzZVVybCIsImxvY2F0aW9uIiwib3JpZ2luIiwiZm9sZGVyTGluayIsImNvcHlUb0NsaXBib2FyZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImRpc2FibGVkIiwiVXBsb2FkZXJNb2RhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlVXBsb2FkZXJNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiVXBsb2FkZWRGaWxlcyIsInRvdGFsRmlsZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJwdXNoIiwiSXRlbSIsIlVwbG9hZCIsImNsb3NlRGlhbG9nIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJ1cmwiLCJwcm9qZWN0IiwiY29uZmlnIiwicGFyYW1zIiwidXBsb2FkRmlsZXMiLCJjbGVhckZpbGVzIiwiYnV0dG9uIiwiZHJhZyIsIm11bHRpcGxlIiwiVXBsb2FkQ29udGV4dCIsInNldE5hbWUiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZWxlY3RSZWYiLCJoYW5kbGVTdWJtaXQiLCJoYXNJbnZhbGlkRmlsZSIsImFjY2VwdGVkRG9jdW1lbnRzIiwiY29udGFpbmVyIiwicmVwbGFjZSIsInNwZWNzIiwia25vd2xlZGdlQm94SWQiLCJzdGF0dXMiLCJsb2FkIiwiY2xlYXJPbkNsb3NlIiwiaGFuZGxlS2JDaGFuZ2UiLCJrYiIsImtub3dsZWRnZUJveGVzIiwiZmluZCIsImtiT3B0aW9ucyIsIlByb3ZpZGVyIiwib25TdWJtaXQiLCJpbnB1dCIsImhlbHAiLCJhY3Rpb24iLCJzYXZlIiwibG9hZGluZyIsIm9uRGVsZXRlIiwidXNlVXBsb2FkQ29udGV4dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJmb3JtYXRCeXRlcyIsImJ5dGVzIiwiZGVjaW1hbHMiLCJrIiwiZG0iLCJzaXplcyIsIk1hdGgiLCJmbG9vciIsImxvZyIsInBhcnNlRmxvYXQiLCJwb3ciLCJ0b0ZpeGVkIiwiUmVhY3RpdmVNb2RlbCIsImNvbGxlY3Rpb24iLCJjb25zdHJ1Y3RvciIsIktub3dsZWRnZUJveGVzIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZWFkeSIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwidG90YWxLYnMiLCJzZXRUb3RhbEticyIsImRpYWxvZ1JlZiIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJLQiIsIlByZWxvYWRTY3JlZW4iLCJ0b3RhbEl0ZW1zIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29tcG9uZW50cy9maWxlcy9kZXRhaWxzL2dyaWQtdmlldy50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy9maWxlcy9kZXRhaWxzL3RhYmxlLXZpZXcudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZmlsZXMvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9hY3Rpb25zLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvZW1wdHktZmlsZXMudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9lbXB0eS1mb2xkZXJzLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvZm9sZGVycy9pdGVtLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvbGlzdC50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy9mb2xkZXJzL3NoYXJlLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL2ZvbGRlcnMvc2hhcmVkLWZvbGRlcnMudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvdXBsb2FkL2NvbnRleHQudHN4Iiwid2lkZ2V0L3RzL2NvbXBvbmVudHMvdXBsb2FkL2ZpbGVzLnRzeCIsIndpZGdldC90cy9jb21wb25lbnRzL3VwbG9hZC9pbmRleC50c3giLCJ3aWRnZXQvdHMvY29tcG9uZW50cy91cGxvYWQvaXRlbS50c3giLCJ3aWRnZXQvdHMvY29udGV4dC50cyIsIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL2Zvcm1hdC1ieXRlcy50cyIsIndpZGdldC90cy9zdG9yZS9pbmRleC50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==