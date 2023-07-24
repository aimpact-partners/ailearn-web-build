System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@0.0.6/base", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@0.0.1/core", "@aimpact/chat@0.0.2/wrapper", "@aimpact/chat@0.0.2/session", "react@18.2.0", "pragmate-ui@0.0.36/form", "@aimpact/chat@0.0.2/shared/components", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@0.0.6/hooks", "@aimpact/chat@0.0.2/ui/manager", "pragmate-ui@0.0.36/toast", "@aimpact/chat@0.0.2/shared/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Conversations, Sidebar, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Conversations: void 0,
    Sidebar: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets006Base) {
      dependency_2 = _beyondJsReact18Widgets006Base;
    }, function (_beyondJsReactive112Model) {
      dependency_3 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk001Core) {
      dependency_4 = _aimpactChatSdk001Core;
    }, function (_aimpactChat002Wrapper) {
      dependency_5 = _aimpactChat002Wrapper;
    }, function (_aimpactChat002Session) {
      dependency_6 = _aimpactChat002Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi0036Form) {
      dependency_8 = _pragmateUi0036Form;
    }, function (_aimpactChat002SharedComponents) {
      dependency_9 = _aimpactChat002SharedComponents;
    }, function (_pragmateUi0036Icons) {
      dependency_10 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_11 = _pragmateUi0036Link;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets006Hooks) {
      dependency_13 = _beyondJsReact18Widgets006Hooks;
    }, function (_aimpactChat002UiManager) {
      dependency_14 = _aimpactChat002UiManager;
    }, function (_pragmateUi0036Toast) {
      dependency_15 = _pragmateUi0036Toast;
    }, function (_aimpactChat002SharedIcons) {
      dependency_16 = _aimpactChat002SharedIcons;
    }, function (_beyondJsKernel019Styles) {
      dependency_17 = _beyondJsKernel019Styles;
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
          "vspecifier": "@aimpact/chat@0.0.2/chat-layout"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/chat-sdk/core', dependency_4], ['@aimpact/chat/wrapper', dependency_5], ['@aimpact/chat/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/link', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat/ui/manager', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/chat/shared/icons', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-layout",
        "vspecifier": "@aimpact/chat@0.0.2/chat-layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/chat-layout');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2953813515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _layout = require("./view/layout");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _layout.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1632594904,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _session = require("@aimpact/chat/session");
          class StoreManager extends _model.ReactiveModel {
            get chats() {
              return _wrapper.AppWrapper.chats;
            }
            get knowledgeBoxes() {
              return _wrapper.AppWrapper.knowledgeBoxes;
            }
            get sharedKnowledgeBoxes() {
              return _wrapper.AppWrapper.sharedKnowledgeBoxes;
            }
            get currentChat() {
              return _wrapper.AppWrapper.currentChat;
            }
            constructor() {
              super();
              _wrapper.AppWrapper.on('change', this.triggerEvent);
            }
            isReady() {
              return _wrapper.AppWrapper.ready;
            }
            save = async (name, knowledgeBoxId) => {
              const chat = new _core.Chat();
              const userId = _session.sessionWrapper.userId;
              let specs = {
                name,
                userId
              };
              knowledgeBoxId && (specs = {
                ...specs,
                knowledgeBoxId
              });
              await chat.publish(specs);
              return {
                status: true,
                chat
              };
            };
            edit = async (id, name) => {
              const chat = new _core.Chat();
              await chat.load({
                id
              });
              const savedChat = await chat.save({
                name
              });
              return {
                status: true,
                savedChat
              };
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./view/action-menu/chats/conversations
      ******************************************************/

      ims.set('./view/action-menu/chats/conversations', {
        hash: 2390854795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversations = Conversations;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _list = require("./list");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("../../context");
          /*bundle*/
          function Conversations() {
            const {
              openDialog
            } = (0, _context.useLayoutContext)();
            const [search, setSearch] = React.useState('');
            function handleSearch(e) {
              setSearch(e.target.value);
            }
            return React.createElement("article", null, React.createElement("header", {
              className: 'aside__top'
            }, React.createElement("h3", null, "Chat Rooms")), React.createElement("div", {
              className: 'sidebar__search'
            }, React.createElement(_components.Input, {
              label: 'Search Chats',
              onChange: handleSearch,
              type: 'search',
              required: true,
              value: search
            }), React.createElement(_form.Button, {
              onClick: openDialog,
              icon: 'plus'
            })), React.createElement(_list.ChatList, {
              search: search
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./view/action-menu/chats/item-actions
      *****************************************************/

      ims.set('./view/action-menu/chats/item-actions', {
        hash: 1932233412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _components = require("@aimpact/chat/shared/components");
          function ItemActions({
            item,
            chatId,
            isCurrent
          }) {
            const [isEditing, setIsEditing] = _react.default.useState(false);
            const [loading, setLoading] = _react.default.useState(false);
            const [newName, setNewName] = _react.default.useState('');
            const {
              store
            } = (0, _context.useLayoutContext)();
            const toggleEdit = e => {
              e.stopPropagation();
              setIsEditing(!isEditing);
            };
            const onDelete = e => e.stopPropagation();
            const handleNameChange = e => setNewName(e.target.value);
            const submitNameChange = async e => {
              setLoading(true);
              e.stopPropagation();
              setIsEditing(false);
              await store.edit(chatId, newName);
              setLoading(false);
            };
            (0, _react.useEffect)(() => setIsEditing(false), [isCurrent]);
            return _react.default.createElement("span", {
              className: 'item-label'
            }, _react.default.createElement(_link.Link, {
              href: `/chat/${item.id}`
            }, _react.default.createElement(_icons.Icon, {
              icon: 'chat',
              className: 'xs'
            }), !isEditing ? _react.default.createElement("p", null, item?.name) : _react.default.createElement("form", {
              onSubmit: submitNameChange
            }, _react.default.createElement(_components.Input, {
              type: 'text',
              value: newName,
              placeholder: item?.name,
              onChange: handleNameChange
            }))), isCurrent && _react.default.createElement("span", {
              className: 'item-actions'
            }, isEditing ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              icon: 'check',
              type: 'submit',
              disabled: !newName?.length,
              onClick: e => submitNameChange(e)
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              onClick: e => toggleEdit(e)
            })) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              icon: 'edit',
              onClick: e => toggleEdit(e)
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'delete',
              onClick: e => onDelete(e)
            }))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./view/action-menu/chats/item
      *********************************************/

      ims.set('./view/action-menu/chats/item', {
        hash: 2029349284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatListItem = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _itemActions = require("./item-actions");
          const ChatListItem = ({
            item
          }) => {
            const {
              pathname
            } = _routing.routing.uri;
            const chatId = pathname.split('/')[2];
            const isCurrent = chatId === item.id;
            return _react.default.createElement("span", null, _react.default.createElement("li", {
              key: item.id,
              className: `sidebar-item ${isCurrent ? 'current' : ''}`
            }, _react.default.createElement(_itemActions.ItemActions, {
              item: item,
              chatId: chatId,
              isCurrent: isCurrent
            })));
          };
          exports.ChatListItem = ChatListItem;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./view/action-menu/chats/list
      *********************************************/

      ims.set('./view/action-menu/chats/list', {
        hash: 1699522861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatList = ChatList;
          var React = require("react");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          function ChatList({
            search
          }) {
            const {
              chats
            } = (0, _context.useLayoutContext)();
            const [items, setItems] = React.useState(chats.items);
            (0, _hooks.useBinder)([chats], () => setItems(chats.items));
            React.useEffect(() => {
              const searchTerm = search.trim();
              const filteredItems = chats.items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
              setItems(filteredItems);
            }, [search]);
            const chatList = items.map((item, i) => React.createElement(_item.ChatListItem, {
              key: i,
              item: item
            }));
            return React.createElement("div", {
              className: 'sidebar__list'
            }, chatList.length ? React.createElement("ul", null, chatList) : React.createElement("h4", {
              className: 'empty__list'
            }, "There are no chats in your profile yet. Please, click on the blue icon above to create a", ' ', React.createElement("strong", null, "new Chat"), "."));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./view/chat-form
      ********************************/

      ims.set('./view/chat-form', {
        hash: 871453262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddChat = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("@aimpact/chat/shared/components");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          var _link = require("pragmate-ui/link");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const AddChat = ({
            dialogRef
          }) => {
            const {
              store,
              closeDialog,
              setOpen,
              knowledgeBoxes,
              sharedKnowledgeBoxes
            } = (0, _context.useLayoutContext)();
            const [name, setName] = (0, _react.useState)('');
            const [error, setError] = (0, _react.useState)('');
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [kbId, setKbId] = (0, _react.useState)('');
            const selectRef = _react.default.useRef(null);
            (0, _hooks.useBinder)([_wrapper.AppWrapper], () => {
              const kbId = _wrapper.AppWrapper.selectedKnowledgeBoxId;
              setKbId(kbId ?? '');
            });
            const onClose = () => {
              setName('');
              setError('');
              setFetching(false);
              if (selectRef.current) selectRef.current.value = '';
              _wrapper.AppWrapper.selectedKnowledgeBoxId = '';
              closeDialog();
            };
            const saveChat = async () => {
              try {
                setFetching(true);
                const response = await store.save(name, kbId);
                if (!response.status) {
                  setError(response.error);
                  return;
                }
                _routing.routing.pushState(`/chat/${response.chat.id}`);
                closeDialog();
                setName('');
                setKbId('');
              } catch (e) {
                console.error(e);
                setError(e.message);
              } finally {
                setFetching(false);
              }
            };
            const kbOptions = knowledgeBoxes?.items.map((kb, i) => _react.default.createElement("option", {
              key: `${kb.id} - ${i}`,
              value: kb.id
            }, kb.path));
            const sharedKbOptions = sharedKnowledgeBoxes?.map((kb, i) => _react.default.createElement("option", {
              key: `${kb.id} - ${i}`,
              value: kb.id
            }, kb.path));
            const disabled = {
              disabled: !name || fetching
            };
            const handleKbChange = e => setKbId(e.target.value);
            return _react.default.createElement("dialog", {
              ref: dialogRef,
              onClose: onClose
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: onClose
            }), error && _react.default.createElement("div", {
              className: 'error error-container'
            }, error), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Create New Chat")), _react.default.createElement(_form.Form, {
              onSubmit: saveChat,
              className: 'chat__form'
            }, _react.default.createElement(_components.Input, {
              type: 'text',
              name: 'name',
              value: name,
              onChange: e => setName(e.target.value),
              required: true,
              disabled: fetching,
              placeholder: 'Add a name to your chat'
            }), !kbOptions.length ? _react.default.createElement("h4", {
              className: 'dialog__info'
            }, _react.default.createElement("strong", null, " You don't have any Knowledge Box yet."), _react.default.createElement("br", null), "You can create a new one in", ' ', _react.default.createElement(_link.Link, {
              onClick: onClose,
              href: '/documents'
            }, "Documents"), _react.default.createElement("br", null), "or continue creating a new chat ", _react.default.createElement("br", null), " where you can interfaceate with the model.") : _react.default.createElement("select", {
              ref: selectRef,
              value: kbId,
              onChange: handleKbChange
            }, _react.default.createElement("option", {
              value: ''
            }, "Chat with model"), [...kbOptions, ...sharedKbOptions]), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              label: 'Cancel',
              variant: 'link',
              onClick: closeDialog
            }), _react.default.createElement(_form.Button, {
              icon: 'save',
              type: 'submit',
              label: 'Save',
              variant: 'primary',
              onClick: saveChat,
              fetching: fetching,
              ...disabled
            }))));
          };
          exports.AddChat = AddChat;
        }
      });

      /******************************
      INTERNAL MODULE: ./view/context
      ******************************/

      ims.set('./view/context', {
        hash: 1544197183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLayoutContext = exports.LayoutContext = void 0;
          var React = require("react");
          const LayoutContext = React.createContext({});
          exports.LayoutContext = LayoutContext;
          const useLayoutContext = () => React.useContext(LayoutContext);
          exports.useLayoutContext = useLayoutContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/footer
      *****************************/

      ims.set('./view/footer', {
        hash: 668203473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Footer = void 0;
          var _react = require("react");
          const Footer = () => {
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "footer-left"
            }, "@copyright AImpact 2023"), _react.default.createElement("div", {
              className: "footer-right"
            }, "Powered by beyond-js (www.beyondjs.com)"));
          };
          exports.Footer = Footer;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/layout
      *****************************/

      ims.set('./view/layout', {
        hash: 2853633989,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _sidebar = require("./sidebar");
          var _chatForm = require("./chat-form");
          var _context = require("./context");
          var _manager = require("@aimpact/chat/ui/manager");
          var _components = require("@aimpact/chat/shared/components");
          var _toast = require("pragmate-ui/toast");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _mobileHeader = require("./mobile-header");
          const Layout = ({
            store
          }) => {
            const [open, setOpen] = (0, _react.useState)('');
            const [ready, setReady] = (0, _react.useState)(store.isReady());
            const dialogRef = _react.default.useRef(null);
            const openDialog = () => dialogRef.current.showModal();
            const closeDialog = () => {
              dialogRef.current.close();
              _manager.UIManager.modalOpened = false;
            };
            (0, _hooks.useBinder)([_manager.UIManager], () => {
              _manager.UIManager.modalOpened ? openDialog() : closeDialog();
            }, 'modalOpened');
            (0, _hooks.useBinder)([store], () => setReady(store.isReady()));
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            return _react.default.createElement(_context.LayoutContext.Provider, {
              value: {
                open,
                setOpen,
                totalChats: store.chats?.items?.length,
                chats: store.chats,
                knowledgeBoxes: store.knowledgeBoxes,
                sharedKnowledgeBoxes: store.sharedKnowledgeBoxes,
                store,
                openDialog,
                closeDialog
              }
            }, _react.default.createElement("div", {
              className: 'layout'
            }, _react.default.createElement(_sidebar.Sidebar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null), _react.default.createElement(_chatForm.AddChat, {
              dialogRef: dialogRef
            })), _react.default.createElement(_mobileHeader.MobileHeader, null)));
          };
          exports.Layout = Layout;
        }
      });

      /************************************
      INTERNAL MODULE: ./view/mobile-header
      ************************************/

      ims.set('./view/mobile-header', {
        hash: 3006771783,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileHeader = MobileHeader;
          var _react = require("react");
          var _side = require("./sidebar/side");
          function MobileHeader() {
            return _react.default.createElement("header", {
              className: 'mobile-header'
            }, _react.default.createElement(_side.AppLogo, null), _react.default.createElement(_side.ProfileIcon, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./view/sidebar/index
      ************************************/

      ims.set('./view/sidebar/index', {
        hash: 1955745653,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var React = require("react");
          var _context = require("../context");
          var _side = require("./side");
          var _conversations = require("../action-menu/chats/conversations");
          /*bundle*/
          function Sidebar() {
            const {
              open
            } = (0, _context.useLayoutContext)();
            const actionMenuClass = module => `sidebar ${open === module ? 'open' : ''}`;
            return React.createElement(React.Fragment, null, React.createElement(_side.default, null), React.createElement("aside", {
              className: actionMenuClass('chat')
            }, React.createElement("div", {
              className: 'sidebar-content'
            }, React.createElement(_conversations.Conversations, null))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./view/sidebar/nav-link
      ***************************************/

      ims.set('./view/sidebar/nav-link', {
        hash: 3699810705,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavLink = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const NavLink = ({
            isLink = false,
            module,
            icon
          }) => {
            const [isActive, setIsActive] = _react.default.useState(_routing.routing.uri.pathname.includes(module));
            const {
              open,
              setOpen
            } = (0, _context.useLayoutContext)();
            const toggleActionMenu = module => open === module ? setOpen('') : setOpen(module);
            (0, _hooks.useBinder)([_routing.routing], () => setIsActive(_routing.routing.uri.pathname.includes(module)));
            const NavButton = _react.default.createElement(_icons.IconButton, {
              icon: icon,
              variant: `${isActive ? 'active' : 'nav'}`,
              className: 'circle md',
              onClick: () => toggleActionMenu(module)
            });
            return isLink ? _react.default.createElement(_link.Link, {
              href: `/${module}`
            }, NavButton) : NavButton;
          };
          exports.NavLink = NavLink;
        }
      });

      /***********************************
      INTERNAL MODULE: ./view/sidebar/side
      ***********************************/

      ims.set('./view/sidebar/side', {
        hash: 2835485869,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = exports.AppLogo = void 0;
          exports.default = Side;
          var _react = require("react");
          var _icons = require("@aimpact/chat/shared/icons");
          var _link = require("pragmate-ui/link");
          var _icons2 = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat/session");
          var _components = require("@aimpact/chat/shared/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _navLink = require("./nav-link");
          function Side() {
            const logout = () => {
              _session.sessionWrapper.logout();
              _routing.routing.pushState('/auth/login');
            };
            return _react.default.createElement("aside", {
              className: 'aside-bar'
            }, _react.default.createElement("section", {
              className: 'aside__top'
            }, _react.default.createElement(AppLogo, null)), _react.default.createElement("section", {
              className: 'aside__nav'
            }, _react.default.createElement(_navLink.NavLink, {
              module: 'chat',
              icon: 'chat'
            }), _react.default.createElement(_navLink.NavLink, {
              module: 'documents',
              icon: 'doc',
              isLink: true
            })), _react.default.createElement("section", {
              className: 'aside__footer'
            }, _react.default.createElement(ProfileIcon, null), _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_components.ThemeSwitcher, null)), _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_icons2.Icon, {
              icon: 'exit',
              onClick: logout
            }))));
          }
          const AppLogo = () => _react.default.createElement("div", {
            className: 'aside-item'
          }, _react.default.createElement(_link.Link, {
            href: '/'
          }, _react.default.createElement(_icons2.Icon, {
            icon: _icons.ICONS['logo'],
            className: 'lg'
          })));
          exports.AppLogo = AppLogo;
          const ProfileIcon = () => {
            const [loadError, setLoadError] = _react.default.useState(false);
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: 'aside-item'
            }, !loadError ? _react.default.createElement("img", {
              alt: 'user image profile',
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons2.Icon, {
              className: 'lg',
              icon: 'user'
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view/action-menu/chats/conversations",
        "from": "Conversations",
        "name": "Conversations"
      }, {
        "im": "./view/sidebar/index",
        "from": "Sidebar",
        "name": "Sidebar"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Conversations') && _export("Conversations", Conversations = require ? require('./view/action-menu/chats/conversations').Conversations : value);
        (require || prop === 'Sidebar') && _export("Sidebar", Sidebar = require ? require('./view/sidebar/index').Sidebar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUU7WUFBTSxFQUNqQyxDQUNJO1VBRVIsQ0FBQztVQUFDNUMiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImNoYXRzIiwiQXBwV3JhcHBlciIsImtub3dsZWRnZUJveGVzIiwic2hhcmVkS25vd2xlZGdlQm94ZXMiLCJjdXJyZW50Q2hhdCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzYXZlIiwibmFtZSIsImtub3dsZWRnZUJveElkIiwiY2hhdCIsIkNoYXQiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInNwZWNzIiwicHVibGlzaCIsInN0YXR1cyIsImVkaXQiLCJpZCIsImxvYWQiLCJzYXZlZENoYXQiLCJDb252ZXJzYXRpb25zIiwib3BlbkRpYWxvZyIsInNlYXJjaCIsInNldFNlYXJjaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVTZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc05hbWUiLCJJbnB1dCIsImxhYmVsIiwib25DaGFuZ2UiLCJ0eXBlIiwicmVxdWlyZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsIkNoYXRMaXN0IiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwiY2hhdElkIiwiaXNDdXJyZW50IiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuZXdOYW1lIiwic2V0TmV3TmFtZSIsInN0b3JlIiwidG9nZ2xlRWRpdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uRGVsZXRlIiwiaGFuZGxlTmFtZUNoYW5nZSIsInN1Ym1pdE5hbWVDaGFuZ2UiLCJMaW5rIiwiaHJlZiIsIkljb24iLCJvblN1Ym1pdCIsInBsYWNlaG9sZGVyIiwiSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwibGVuZ3RoIiwiQ2hhdExpc3RJdGVtIiwicGF0aG5hbWUiLCJyb3V0aW5nIiwidXJpIiwic3BsaXQiLCJrZXkiLCJpdGVtcyIsInNldEl0ZW1zIiwidXNlRWZmZWN0Iiwic2VhcmNoVGVybSIsInRyaW0iLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNoYXRMaXN0IiwibWFwIiwiaSIsIkFkZENoYXQiLCJkaWFsb2dSZWYiLCJjbG9zZURpYWxvZyIsInNldE9wZW4iLCJzZXROYW1lIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJrYklkIiwic2V0S2JJZCIsInNlbGVjdFJlZiIsInVzZVJlZiIsInNlbGVjdGVkS25vd2xlZGdlQm94SWQiLCJvbkNsb3NlIiwiY3VycmVudCIsInNhdmVDaGF0IiwicmVzcG9uc2UiLCJwdXNoU3RhdGUiLCJjb25zb2xlIiwibWVzc2FnZSIsImtiT3B0aW9ucyIsImtiIiwicGF0aCIsInNoYXJlZEtiT3B0aW9ucyIsImhhbmRsZUtiQ2hhbmdlIiwicmVmIiwiRm9ybSIsInZhcmlhbnQiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxheW91dENvbnRleHQiLCJ1c2VDb250ZXh0IiwiRm9vdGVyIiwib3BlbiIsInNldFJlYWR5Iiwic2hvd01vZGFsIiwiY2xvc2UiLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsIlByZWxvYWRTY3JlZW4iLCJQcm92aWRlciIsInRvdGFsQ2hhdHMiLCJTaWRlYmFyIiwiVG9hc3RzIiwiTW9iaWxlSGVhZGVyIiwiQXBwTG9nbyIsIlByb2ZpbGVJY29uIiwiYWN0aW9uTWVudUNsYXNzIiwibW9kdWxlIiwiU2lkZSIsIk5hdkxpbmsiLCJpc0xpbmsiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwidG9nZ2xlQWN0aW9uTWVudSIsIk5hdkJ1dHRvbiIsImxvZ291dCIsIlRoZW1lU3dpdGNoZXIiLCJJQ09OUyIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInVzZXIiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiYWx0Iiwic3JjIiwicGhvdG9VUkwiLCJvbkVycm9yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3L2FjdGlvbi1tZW51L2NoYXRzL2NvbnZlcnNhdGlvbnMudHN4IiwidHMvdmlldy9hY3Rpb24tbWVudS9jaGF0cy9pdGVtLWFjdGlvbnMudHN4IiwidHMvdmlldy9hY3Rpb24tbWVudS9jaGF0cy9pdGVtLnRzeCIsInRzL3ZpZXcvYWN0aW9uLW1lbnUvY2hhdHMvbGlzdC50c3giLCJ0cy92aWV3L2NoYXQtZm9ybS50c3giLCJ0cy92aWV3L2NvbnRleHQudHN4IiwidHMvdmlldy9mb290ZXIudHN4IiwidHMvdmlldy9sYXlvdXQudHN4IiwidHMvdmlldy9tb2JpbGUtaGVhZGVyLnRzeCIsInRzL3ZpZXcvc2lkZWJhci9pbmRleC50c3giLCJ0cy92aWV3L3NpZGViYXIvbmF2LWxpbmsudHN4IiwidHMvdmlldy9zaWRlYmFyL3NpZGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=