System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.1/session", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
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
    }, function (_beyondJsReactive112Model) {
      dependency_4 = _beyondJsReactive112Model;
    }, function (_aimpactChatSdk101Core) {
      dependency_5 = _aimpactChatSdk101Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk101Session) {
      dependency_7 = _aimpactChatSdk101Session;
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
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101UiManager) {
      dependency_15 = _aimpactChat101UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/conversations",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['react', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/link', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/ui/manager', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "conversations-explorer",
        "vspecifier": "@aimpact/chat@1.0.1/conversations.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/conversations.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1HLFFBQVEsR0FBR3BELElBQUksQ0FBQ3FELE1BQU07Y0FFNUIsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxDQUFDRixRQUFRLENBQUMsRUFBRTtnQkFDaENELE1BQU0sQ0FBQ3RCLElBQUksQ0FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUM7ZUFDbkIsTUFBTTtnQkFDTixNQUFNcUQsTUFBTSxHQUFHakYsR0FBRyxDQUFDZ0YsUUFBUSxDQUFDO2dCQUM1QixJQUFJQyxNQUFNLEVBQUU7a0JBQ1hBLE1BQU0sQ0FBQzlDLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzVCLE1BQU07a0JBQ047a0JBQ0FoQyxPQUFPLENBQUN1RixJQUFJLENBQUMsbUJBQW1CSCxRQUFRLGlDQUFpQ3BELElBQUksQ0FBQzFELEVBQUUsR0FBRyxDQUFDOzs7O1lBS3ZGLE9BQU82RyxNQUFNO1VBQ2QiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJDb252ZXJzYXRpb25zIiwic2hvdyIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJBcHBXcmFwcGVyIiwia25vd2xlZGdlQm94ZXMiLCJzaGFyZWRLbm93bGVkZ2VCb3hlcyIsImN1cnJlbnRDaGF0IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJyZWFkeSIsInNhdmUiLCJuYW1lIiwia25vd2xlZGdlQm94SWQiLCJjaGF0IiwiQ2hhdCIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwic3BlY3MiLCJwdWJsaXNoIiwic3RhdHVzIiwiZWRpdCIsImlkIiwibG9hZCIsInNhdmVkQ2hhdCIsIkFkZENoYXQiLCJkaWFsb2dSZWYiLCJzdG9yZSIsImNsb3NlRGlhbG9nIiwic2V0TmFtZSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwia2JJZCIsInNldEtiSWQiLCJzZWxlY3RSZWYiLCJSZWFjdCIsInVzZVJlZiIsInNlbGVjdGVkS25vd2xlZGdlQm94SWQiLCJvbkNsb3NlIiwiY3VycmVudCIsInZhbHVlIiwic2F2ZUNoYXQiLCJyZXNwb25zZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJrYk9wdGlvbnMiLCJpdGVtcyIsIm1hcCIsImtiIiwiaSIsImtleSIsInBhdGgiLCJzaGFyZWRLYk9wdGlvbnMiLCJkaXNhYmxlZCIsImhhbmRsZUtiQ2hhbmdlIiwidGFyZ2V0IiwicmVmIiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiRm9ybSIsIm9uU3VibWl0IiwiSW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwiTGluayIsImhyZWYiLCJCdXR0b24iLCJsYWJlbCIsInZhcmlhbnQiLCJDaGlsZEl0ZW0iLCJpdGVtIiwicGF0aG5hbWUiLCJ1cmkiLCJjaGF0SWQiLCJzcGxpdCIsImlzQ3VycmVudCIsImNscyIsImNoaWxkcmVuIiwiSXRlbUFjdGlvbnMiLCJzZXRFeHBhbmRlZCIsImhhc0NoaWxkcmVuIiwiaXNFeHBhbmRlZCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuZXdOYW1lIiwic2V0TmV3TmFtZSIsInRvZ2dsZUVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkRlbGV0ZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJzdWJtaXROYW1lQ2hhbmdlIiwiSWNvbiIsIkNoYXRMaXN0SXRlbSIsImlzUGFyZW50IiwiZm9yRWFjaCIsImNoaWxkIiwicHVzaCIsInN1Ykl0ZW1zQ2xzIiwiQ2hhdExpc3QiLCJzZWFyY2giLCJzZXRJdGVtcyIsImNoYXRMaXN0IiwiQ29udmVyc2F0aW9uc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udmVyc2F0aW9uc0NvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2V0U2VhcmNoIiwib3BlbkRpYWxvZyIsInNob3dNb2RhbCIsImNsb3NlIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJoYW5kbGVTZWFyY2giLCJQcm92aWRlciIsInRvdGFsQ2hhdHMiLCJvcmdhbml6ZUJ5UGFyZW50IiwiZGF0YSIsImdldFByb3BlcnRpZXMiLCJyZXN1bHQiLCJwYXJlbnRJZCIsInBhcmVudCIsImluY2x1ZGVzIiwid2FybiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCJ3aWRnZXQvdHMvdmlld3MvY29tcG9uZW50cy9jaGF0LWZvcm0udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvY2hpbGQudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvaXRlbS1hY3Rpb25zLnRzeCIsIndpZGdldC90cy92aWV3cy9jb21wb25lbnRzL2l0ZW0udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvbGlzdC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY29udGV4dC50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3Mvb3JnYW5pemVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19