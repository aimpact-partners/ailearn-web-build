System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.2/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
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
    }, function (_aimpactChatSdk100Core) {
      dependency_5 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        "name": "chat-explorer-view",
        "vspecifier": "@aimpact/chat@1.0.1/conversations.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/conversations.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2460949071,
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
        hash: 493826005,
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
        hash: 3774199557,
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
            console.log(0.21);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkNvbnZlcnNhdGlvbnMiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfd3JhcHBlciIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsImNoYXRzIiwiQXBwV3JhcHBlciIsImtub3dsZWRnZUJveGVzIiwic2hhcmVkS25vd2xlZGdlQm94ZXMiLCJjdXJyZW50Q2hhdCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzYXZlIiwibmFtZSIsImtub3dsZWRnZUJveElkIiwiY2hhdCIsIkNoYXQiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInNwZWNzIiwicHVibGlzaCIsInN0YXR1cyIsImVkaXQiLCJpZCIsImxvYWQiLCJzYXZlZENoYXQiLCJfcmVhY3QiLCJfZm9ybSIsIl9pY29ucyIsIl9saW5rIiwiX3JvdXRpbmciLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQWRkQ2hhdCIsImRpYWxvZ1JlZiIsImNsb3NlRGlhbG9nIiwidXNlQ29udmVyc2F0aW9uc0NvbnRleHQiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImtiSWQiLCJzZXRLYklkIiwic2VsZWN0UmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInVzZUJpbmRlciIsInNlbGVjdGVkS25vd2xlZGdlQm94SWQiLCJvbkNsb3NlIiwiY3VycmVudCIsInZhbHVlIiwic2F2ZUNoYXQiLCJyZXNwb25zZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJrYk9wdGlvbnMiLCJpdGVtcyIsIm1hcCIsImtiIiwiaSIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJwYXRoIiwic2hhcmVkS2JPcHRpb25zIiwiZGlzYWJsZWQiLCJoYW5kbGVLYkNoYW5nZSIsInRhcmdldCIsInJlZiIsIkljb25CdXR0b24iLCJpY29uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIkZvcm0iLCJvblN1Ym1pdCIsIklucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImxlbmd0aCIsIkxpbmsiLCJocmVmIiwiQnV0dG9uIiwibGFiZWwiLCJ2YXJpYW50IiwiX2l0ZW1BY3Rpb25zIiwiQ2hpbGRJdGVtIiwiaXRlbSIsInBhdGhuYW1lIiwidXJpIiwiY2hhdElkIiwic3BsaXQiLCJpc0N1cnJlbnQiLCJjbHMiLCJjaGlsZHJlbiIsIkl0ZW1BY3Rpb25zIiwic2V0RXhwYW5kZWQiLCJoYXNDaGlsZHJlbiIsImlzRXhwYW5kZWQiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm5ld05hbWUiLCJzZXROZXdOYW1lIiwidG9nZ2xlRWRpdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uRGVsZXRlIiwiaGFuZGxlTmFtZUNoYW5nZSIsInN1Ym1pdE5hbWVDaGFuZ2UiLCJ1c2VFZmZlY3QiLCJJY29uIiwiRnJhZ21lbnQiLCJDaGF0TGlzdEl0ZW0iLCJpc1BhcmVudCIsImZvckVhY2giLCJjaGlsZCIsInB1c2giLCJzdWJJdGVtc0NscyIsIlJlYWN0IiwiX2l0ZW0iLCJfb3JnYW5pemVyIiwiQ2hhdExpc3QiLCJzZWFyY2giLCJzZXRJdGVtcyIsIm9yZ2FuaXplQnlQYXJlbnQiLCJjaGF0TGlzdCIsIkNvbnZlcnNhdGlvbnNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY2hhdEZvcm0iLCJfbWFuYWdlciIsIl9saXN0IiwibG9nIiwic2V0U2VhcmNoIiwib3BlbkRpYWxvZyIsInNob3dNb2RhbCIsImNsb3NlIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJoYW5kbGVTZWFyY2giLCJQcm92aWRlciIsInRvdGFsQ2hhdHMiLCJkYXRhIiwiZ2V0UHJvcGVydGllcyIsInJlc3VsdCIsInBhcmVudElkIiwicGFyZW50IiwiaW5jbHVkZXMiLCJ3YXJuIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9zdG9yZS9pbmRleC50cyIsIi93aWRnZXQvdHMvdmlld3MvY29tcG9uZW50cy9jaGF0LWZvcm0udHN4IiwiL3dpZGdldC90cy92aWV3cy9jb21wb25lbnRzL2NoaWxkLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY29tcG9uZW50cy9pdGVtLWFjdGlvbnMudHN4IiwiL3dpZGdldC90cy92aWV3cy9jb21wb25lbnRzL2l0ZW0udHN4IiwiL3dpZGdldC90cy92aWV3cy9jb21wb25lbnRzL2xpc3QudHN4IiwiL3dpZGdldC90cy92aWV3cy9jb250ZXh0LnRzIiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL29yZ2FuaXplci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFB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