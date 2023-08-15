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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtjQUN4QixNQUFNRyxRQUFRLEdBQUdyRCxJQUFJLENBQUNzRCxNQUFNO2NBRTVCLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUNDLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hDRCxNQUFNLENBQUN2QixJQUFJLENBQUM3QixJQUFJLENBQUMsQ0FBQyxDQUFDO2VBQ25CLE1BQU07Z0JBQ04sTUFBTXNELE1BQU0sR0FBR2xGLEdBQUcsQ0FBQ2lGLFFBQVEsQ0FBQztnQkFDNUIsSUFBSUMsTUFBTSxFQUFFO2tCQUNYQSxNQUFNLENBQUMvQyxRQUFRLENBQUNzQixJQUFJLENBQUM3QixJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUM1QixNQUFNO2tCQUNOO2tCQUNBaEMsT0FBTyxDQUFDd0YsSUFBSSxDQUFDLG1CQUFtQkgsUUFBUSxpQ0FBaUNyRCxJQUFJLENBQUMxRCxFQUFFLEdBQUcsQ0FBQzs7OztZQUt2RixPQUFPOEcsTUFBTTtVQUNkIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiQ29udmVyc2F0aW9ucyIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJBcHBXcmFwcGVyIiwia25vd2xlZGdlQm94ZXMiLCJzaGFyZWRLbm93bGVkZ2VCb3hlcyIsImN1cnJlbnRDaGF0IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJyZWFkeSIsInNhdmUiLCJuYW1lIiwia25vd2xlZGdlQm94SWQiLCJjaGF0IiwiQ2hhdCIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwic3BlY3MiLCJwdWJsaXNoIiwic3RhdHVzIiwiZWRpdCIsImlkIiwibG9hZCIsInNhdmVkQ2hhdCIsIkFkZENoYXQiLCJkaWFsb2dSZWYiLCJzdG9yZSIsImNsb3NlRGlhbG9nIiwic2V0TmFtZSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwia2JJZCIsInNldEtiSWQiLCJzZWxlY3RSZWYiLCJSZWFjdCIsInVzZVJlZiIsInNlbGVjdGVkS25vd2xlZGdlQm94SWQiLCJvbkNsb3NlIiwiY3VycmVudCIsInZhbHVlIiwic2F2ZUNoYXQiLCJyZXNwb25zZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJrYk9wdGlvbnMiLCJpdGVtcyIsIm1hcCIsImtiIiwiaSIsImtleSIsInBhdGgiLCJzaGFyZWRLYk9wdGlvbnMiLCJkaXNhYmxlZCIsImhhbmRsZUtiQ2hhbmdlIiwidGFyZ2V0IiwicmVmIiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiRm9ybSIsIm9uU3VibWl0IiwiSW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwiTGluayIsImhyZWYiLCJCdXR0b24iLCJsYWJlbCIsInZhcmlhbnQiLCJDaGlsZEl0ZW0iLCJpdGVtIiwicGF0aG5hbWUiLCJ1cmkiLCJjaGF0SWQiLCJzcGxpdCIsImlzQ3VycmVudCIsImNscyIsImNoaWxkcmVuIiwiSXRlbUFjdGlvbnMiLCJzZXRFeHBhbmRlZCIsImhhc0NoaWxkcmVuIiwiaXNFeHBhbmRlZCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuZXdOYW1lIiwic2V0TmV3TmFtZSIsInRvZ2dsZUVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkRlbGV0ZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJzdWJtaXROYW1lQ2hhbmdlIiwiSWNvbiIsIkNoYXRMaXN0SXRlbSIsImlzUGFyZW50IiwiZm9yRWFjaCIsImNoaWxkIiwicHVzaCIsInN1Ykl0ZW1zQ2xzIiwiQ2hhdExpc3QiLCJzZWFyY2giLCJzZXRJdGVtcyIsImNoYXRMaXN0IiwiQ29udmVyc2F0aW9uc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udmVyc2F0aW9uc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwibG9nIiwic2V0U2VhcmNoIiwib3BlbkRpYWxvZyIsInNob3dNb2RhbCIsImNsb3NlIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJoYW5kbGVTZWFyY2giLCJQcm92aWRlciIsInRvdGFsQ2hhdHMiLCJvcmdhbml6ZUJ5UGFyZW50IiwiZGF0YSIsImdldFByb3BlcnRpZXMiLCJyZXN1bHQiLCJwYXJlbnRJZCIsInBhcmVudCIsImluY2x1ZGVzIiwid2FybiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCJ3aWRnZXQvdHMvdmlld3MvY29tcG9uZW50cy9jaGF0LWZvcm0udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvY2hpbGQudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvaXRlbS1hY3Rpb25zLnRzeCIsIndpZGdldC90cy92aWV3cy9jb21wb25lbnRzL2l0ZW0udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvbGlzdC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY29udGV4dC50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3Mvb3JnYW5pemVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19