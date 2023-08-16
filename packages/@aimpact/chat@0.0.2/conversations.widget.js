System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@0.0.1/core", "@aimpact/chat@0.0.2/wrapper", "@aimpact/chat-sdk@0.0.1/session", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@0.0.2/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@0.0.2/ui/manager"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, Conversations, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Conversations: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_3 = _beyondJsReact18Widgets101Base;
    }, function (_beyondJsReactive114Model) {
      dependency_4 = _beyondJsReactive114Model;
    }, function (_aimpactChatSdk001Core) {
      dependency_5 = _aimpactChatSdk001Core;
    }, function (_aimpactChat002Wrapper) {
      dependency_6 = _aimpactChat002Wrapper;
    }, function (_aimpactChatSdk001Session) {
      dependency_7 = _aimpactChatSdk001Session;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi0036Form) {
      dependency_9 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_10 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_11 = _pragmateUi0036Link;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_aimpactChat002SharedComponents) {
      dependency_13 = _aimpactChat002SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat002UiManager) {
      dependency_15 = _aimpactChat002UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/conversations",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['react', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/link', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/ui/manager', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-explorer-view",
        "vspecifier": "@aimpact/chat@0.0.2/conversations.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/conversations.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1220815322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.Conversations;
            }
            show() {}
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1347082187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _session = require("@aimpact/chat-sdk/session");
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

      /********************************************
      INTERNAL MODULE: ./views/components/chat-form
      ********************************************/

      ims.set('./views/components/chat-form', {
        hash: 3404926678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddChat = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          const AddChat = ({
            dialogRef
          }) => {
            const {
              store,
              closeDialog,
              knowledgeBoxes,
              sharedKnowledgeBoxes
            } = (0, _context.useConversationsContext)();
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
              variant: 'link outline',
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

      /****************************************
      INTERNAL MODULE: ./views/components/child
      ****************************************/

      ims.set('./views/components/child', {
        hash: 1739325411,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChildItem = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _itemActions = require("./item-actions");
          const ChildItem = ({
            item
          }) => {
            const {
              pathname
            } = _routing.routing.uri;
            const chatId = pathname.split('/')[2];
            const isCurrent = chatId === item.id;
            const cls = `sidebar-item ${isCurrent ? 'current' : ''} ${item.children ? ` is-parent` : ''}`;
            return _react.default.createElement("li", {
              key: item.id,
              className: cls
            }, _react.default.createElement(_itemActions.ItemActions, {
              item: item,
              chatId: chatId,
              isCurrent: isCurrent
            }));
          };
          exports.ChildItem = ChildItem;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/item-actions
      ***********************************************/

      ims.set('./views/components/item-actions', {
        hash: 3133259898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("../context");
          function ItemActions({
            item,
            chatId,
            isCurrent,
            setExpanded,
            hasChildren,
            isExpanded
          }) {
            const [isEditing, setIsEditing] = _react.default.useState(false);
            const [loading, setLoading] = _react.default.useState(false);
            const [newName, setNewName] = _react.default.useState('');
            const {
              store
            } = (0, _context.useConversationsContext)();
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
            }))), hasChildren && _react.default.createElement(_icons.IconButton, {
              icon: 'expandMore',
              className: `${isExpanded ? 'expanded' : ''}`,
              onClick: () => setExpanded(!isExpanded)
            }), isCurrent && _react.default.createElement("span", {
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

      /***************************************
      INTERNAL MODULE: ./views/components/item
      ***************************************/

      ims.set('./views/components/item', {
        hash: 3869790516,
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
            const isParent = !!item.children.length;
            const [isExpanded, setExpanded] = _react.default.useState(false);
            let children = [];
            if (isParent) {
              item.children.forEach(child => {
                children.push(_react.default.createElement(ChatListItem, {
                  key: child.id,
                  item: child
                }));
              });
            }
            const cls = `sidebar-item ${isCurrent ? 'current' : ''} ${isParent ? ` is-parent` : ''}`;
            const subItemsCls = `subitems__list ${isExpanded ? 'visible' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", {
              key: item.id,
              className: cls
            }, _react.default.createElement(_itemActions.ItemActions, {
              item: item,
              chatId: chatId,
              isCurrent: isCurrent,
              isExpanded: isExpanded,
              setExpanded: setExpanded,
              hasChildren: isParent
            })), _react.default.createElement("div", {
              className: subItemsCls
            }, _react.default.createElement("li", null, isParent && _react.default.createElement("ul", null, children))));
          };
          exports.ChatListItem = ChatListItem;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/components/list
      ***************************************/

      ims.set('./views/components/list', {
        hash: 1358755674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatList = ChatList;
          var React = require("react");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          var _organizer = require("../organizer");
          function ChatList({
            search
          }) {
            const {
              chats
            } = (0, _context.useConversationsContext)();
            const [items, setItems] = React.useState((0, _organizer.organizeByParent)(chats?.items));
            (0, _hooks.useBinder)([chats], () => setItems((0, _organizer.organizeByParent)(chats.items)));
            /* 	React.useEffect(() => {
                const searchTerm = search.trim();
                const filteredItems = chats.items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
                setItems(filteredItems);
            }, [search] );*/
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

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 277455234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useConversationsContext = exports.ConversationsContext = void 0;
          var React = require("react");
          const ConversationsContext = React.createContext({});
          exports.ConversationsContext = ConversationsContext;
          const useConversationsContext = () => React.useContext(ConversationsContext);
          exports.useConversationsContext = useConversationsContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1671309216,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversations = Conversations;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("@aimpact/chat/shared/components");
          var _chatForm = require("./components/chat-form");
          var _manager = require("@aimpact/chat/ui/manager");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _list = require("./components/list");
          /*bundle*/
          function Conversations({
            store
          }) {
            const [search, setSearch] = React.useState('');
            const dialogRef = React.useRef(null);
            const openDialog = () => dialogRef.current.showModal();
            const closeDialog = () => {
              dialogRef.current.close();
              _manager.UIManager.modalOpened = false;
            };
            (0, _hooks.useBinder)([_manager.UIManager], () => {
              _manager.UIManager.modalOpened ? openDialog() : closeDialog();
            }, 'modalOpened');
            function handleSearch(e) {
              setSearch(e.target.value);
            }
            return React.createElement(_context.ConversationsContext.Provider, {
              value: {
                store,
                closeDialog,
                openDialog,
                totalChats: store.chats?.items?.length,
                chats: store.chats,
                knowledgeBoxes: store.knowledgeBoxes,
                sharedKnowledgeBoxes: store.sharedKnowledgeBoxes
              }
            }, React.createElement("article", null, React.createElement("header", {
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
            }), React.createElement(_chatForm.AddChat, {
              dialogRef: dialogRef
            })));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/organizer
      *********************************/

      ims.set('./views/organizer', {
        hash: 3273672725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.organizeByParent = organizeByParent;
          function organizeByParent(items) {
            const map = {};
            // Create a map with the "id" as key and item as value
            const data = items.map(item => item.getProperties());
            for (const item of data) {
              map[item.id] = item;
              map[item.id].children = []; // Initialize the children property for each item
            }

            const result = [];
            // Organize items into their parent's "children" property
            for (const item of data) {
              const parentId = item.parent;
              if ([0, '0'].includes(parentId)) {
                result.push(item); // If the parent is '0', it's a top-level item
              } else {
                const parent = map[parentId];
                if (parent) {
                  parent.children.push(item); // Add the item to its parent's "children" property
                } else {
                  // Handle the case where parent doesn't exist in the array
                  console.warn(`Parent with ID "${parentId}" not found for item with ID "${item.id}"`);
                }
              }
            }
            return result;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Conversations",
        "name": "Conversations"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Conversations') && _export("Conversations", Conversations = require ? require('./views/index').Conversations : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkNvbnZlcnNhdGlvbnMiLCJzaG93IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX3dyYXBwZXIiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJrbm93bGVkZ2VCb3hlcyIsInNoYXJlZEtub3dsZWRnZUJveGVzIiwiY3VycmVudENoYXQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaXNSZWFkeSIsInJlYWR5Iiwic2F2ZSIsIm5hbWUiLCJrbm93bGVkZ2VCb3hJZCIsImNoYXQiLCJDaGF0IiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJzcGVjcyIsInB1Ymxpc2giLCJzdGF0dXMiLCJlZGl0IiwiaWQiLCJsb2FkIiwic2F2ZWRDaGF0IiwiX3JlYWN0IiwiX2Zvcm0iLCJfaWNvbnMiLCJfbGluayIsIl9yb3V0aW5nIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfY29udGV4dCIsIkFkZENoYXQiLCJkaWFsb2dSZWYiLCJjbG9zZURpYWxvZyIsInVzZUNvbnZlcnNhdGlvbnNDb250ZXh0Iiwic2V0TmFtZSIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJrYklkIiwic2V0S2JJZCIsInNlbGVjdFJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VCaW5kZXIiLCJzZWxlY3RlZEtub3dsZWRnZUJveElkIiwib25DbG9zZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInNhdmVDaGF0IiwicmVzcG9uc2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwia2JPcHRpb25zIiwiaXRlbXMiLCJtYXAiLCJrYiIsImkiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwicGF0aCIsInNoYXJlZEtiT3B0aW9ucyIsImRpc2FibGVkIiwiaGFuZGxlS2JDaGFuZ2UiLCJ0YXJnZXQiLCJyZWYiLCJJY29uQnV0dG9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJGb3JtIiwib25TdWJtaXQiLCJJbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJsZW5ndGgiLCJMaW5rIiwiaHJlZiIsIkJ1dHRvbiIsImxhYmVsIiwidmFyaWFudCIsIl9pdGVtQWN0aW9ucyIsIkNoaWxkSXRlbSIsIml0ZW0iLCJwYXRobmFtZSIsInVyaSIsImNoYXRJZCIsInNwbGl0IiwiaXNDdXJyZW50IiwiY2xzIiwiY2hpbGRyZW4iLCJJdGVtQWN0aW9ucyIsInNldEV4cGFuZGVkIiwiaGFzQ2hpbGRyZW4iLCJpc0V4cGFuZGVkIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuZXdOYW1lIiwic2V0TmV3TmFtZSIsInRvZ2dsZUVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkRlbGV0ZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJzdWJtaXROYW1lQ2hhbmdlIiwidXNlRWZmZWN0IiwiSWNvbiIsIkZyYWdtZW50IiwiQ2hhdExpc3RJdGVtIiwiaXNQYXJlbnQiLCJmb3JFYWNoIiwiY2hpbGQiLCJwdXNoIiwic3ViSXRlbXNDbHMiLCJSZWFjdCIsIl9pdGVtIiwiX29yZ2FuaXplciIsIkNoYXRMaXN0Iiwic2VhcmNoIiwic2V0SXRlbXMiLCJvcmdhbml6ZUJ5UGFyZW50IiwiY2hhdExpc3QiLCJDb252ZXJzYXRpb25zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NoYXRGb3JtIiwiX21hbmFnZXIiLCJfbGlzdCIsInNldFNlYXJjaCIsIm9wZW5EaWFsb2ciLCJzaG93TW9kYWwiLCJjbG9zZSIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiaGFuZGxlU2VhcmNoIiwiUHJvdmlkZXIiLCJ0b3RhbENoYXRzIiwiZGF0YSIsImdldFByb3BlcnRpZXMiLCJyZXN1bHQiLCJwYXJlbnRJZCIsInBhcmVudCIsImluY2x1ZGVzIiwid2FybiJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvY2hhdC1mb3JtLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY29tcG9uZW50cy9jaGlsZC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvaXRlbS1hY3Rpb25zLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY29tcG9uZW50cy9pdGVtLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY29tcG9uZW50cy9saXN0LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY29udGV4dC50cyIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9vcmdhbml6ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElB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