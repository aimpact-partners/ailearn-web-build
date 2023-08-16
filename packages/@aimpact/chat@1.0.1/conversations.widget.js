System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.3/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/modal", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, Conversations, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive113Model) {
      dependency_4 = _beyondJsReactive113Model;
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
    }, function (_pragmateUi0036Modal) {
      dependency_15 = _pragmateUi0036Modal;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101UiManager) {
      dependency_17 = _aimpactChat101UiManager;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['react', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/link', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['@aimpact/chat/ui/manager', dependency_17]]);
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
        hash: 3371296491,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddChat = void 0;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _link = require("pragmate-ui/link");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          var _modal = require("pragmate-ui/modal");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          const {
            useState
          } = React;
          const AddChat = ({
            dialogRef
          }) => {
            const {
              store,
              closeDialog,
              knowledgeBoxes,
              sharedKnowledgeBoxes
            } = (0, _context.useConversationsContext)();
            const [name, setName] = useState('');
            const [error, setError] = useState('');
            const [fetching, setFetching] = useState(false);
            const [kbId, setKbId] = useState('');
            const selectRef = React.useRef(null);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([_wrapper.AppWrapper], () => {
              const kbId = _wrapper.AppWrapper.selectedKnowledgeBoxId;
              setKbId(kbId ?? '');
            });
            if (!textsReady) return;
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
            const kbOptions = knowledgeBoxes?.items.map((kb, i) => React.createElement("option", {
              key: `${kb.id} - ${i}`,
              value: kb.id
            }, kb.path));
            const sharedKbOptions = sharedKnowledgeBoxes?.map((kb, i) => React.createElement("option", {
              key: `${kb.id} - ${i}`,
              value: kb.id
            }, kb.path));
            const disabled = {
              disabled: !name || fetching
            };
            const handleKbChange = e => setKbId(e.target.value);
            return React.createElement(_modal.Modal, {
              show: true,
              ref: dialogRef,
              onClose: onClose,
              className: 'chat__form'
            }, error && React.createElement("div", {
              className: 'error error-container'
            }, texts.error), React.createElement("header", null, React.createElement("h1", null, texts.header)), React.createElement(_form.Form, {
              onSubmit: saveChat,
              className: 'chat__form'
            }, React.createElement(_components.Input, {
              type: 'text',
              name: 'name',
              value: name,
              onChange: e => setName(e.target.value),
              required: true,
              disabled: fetching,
              placeholder: texts.addNamePlaceholder
            }), !kbOptions.length ? React.createElement("h4", {
              className: 'dialog__info'
            }, React.createElement("strong", null, texts.noKbInfo), React.createElement("br", null), texts.createNewKb, ' ', React.createElement(_link.Link, {
              onClick: onClose,
              href: '/documents'
            }, texts.documentsLink), React.createElement("br", null), texts.continueCreatingChat) : React.createElement("select", {
              ref: selectRef,
              value: kbId,
              onChange: handleKbChange
            }, React.createElement("option", {
              value: ''
            }, texts.chatWithModel), [...kbOptions, ...sharedKbOptions]), React.createElement("footer", null, React.createElement(_form.Button, {
              icon: 'close-circle',
              label: texts.cancelButton,
              variant: 'secondary outline',
              onClick: closeDialog
            }), React.createElement(_form.Button, {
              icon: 'save',
              type: 'submit',
              label: texts.saveButton,
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
        hash: 3475889426,
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
            //	const openDialog = () => dialogRef.current.showModal();
            const [showModal, setShowModal] = React.useState(false);
            const closeDialog = () => {
              //	dialogRef.current.close();
              _manager.UIManager.modalOpened = false;
            };
            (0, _hooks.useBinder)([_manager.UIManager], () => {
              // UIManager.modalOpened ? openDialog() : closeDialog();
              setShowModal(_manager.UIManager.modalOpened);
            }, 'modalOpened');
            function handleSearch(e) {
              setSearch(e.target.value);
            }
            const openDialog = () => setShowModal(true);
            return React.createElement(_context.ConversationsContext.Provider, {
              value: {
                store,
                closeDialog: () => setShowModal(false),
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
            }), showModal && React.createElement(_chatForm.AddChat, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixDQUFDeEYsS0FBWTtZQUM1QyxNQUFNQyxHQUFHLEdBQTRCLEVBQUU7WUFFdkM7WUFDQSxNQUFNd0YsSUFBSSxHQUFHekYsS0FBSyxDQUFDQyxHQUFHLENBQUNzQyxJQUFJLElBQUlBLElBQUksQ0FBQ21ELGFBQWEsRUFBRSxDQUFDO1lBQ3BELEtBQUssTUFBTW5ELElBQUksSUFBSWtELElBQUksRUFBRTtjQUN4QnhGLEdBQUcsQ0FBQ3NDLElBQUksQ0FBQ3pFLEVBQUUsQ0FBQyxHQUFHeUUsSUFBSTtjQUNuQnRDLEdBQUcsQ0FBQ3NDLElBQUksQ0FBQ3pFLEVBQUUsQ0FBQyxDQUFDZ0YsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDOzs7WUFHN0IsTUFBTTZDLE1BQU0sR0FBVyxFQUFFO1lBRXpCO1lBQ0EsS0FBSyxNQUFNcEQsSUFBSSxJQUFJa0QsSUFBSSxFQUFFO2NBQ3hCLE1BQU1HLFFBQVEsR0FBR3JELElBQUksQ0FBQ3NELE1BQU07Y0FFNUIsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxDQUFDRixRQUFRLENBQUMsRUFBRTtnQkFDaENELE1BQU0sQ0FBQ3ZCLElBQUksQ0FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUM7ZUFDbkIsTUFBTTtnQkFDTixNQUFNc0QsTUFBTSxHQUFHNUYsR0FBRyxDQUFDMkYsUUFBUSxDQUFDO2dCQUM1QixJQUFJQyxNQUFNLEVBQUU7a0JBQ1hBLE1BQU0sQ0FBQy9DLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzVCLE1BQU07a0JBQ047a0JBQ0ExQyxPQUFPLENBQUNrRyxJQUFJLENBQUMsbUJBQW1CSCxRQUFRLGlDQUFpQ3JELElBQUksQ0FBQ3pFLEVBQUUsR0FBRyxDQUFDOzs7O1lBS3ZGLE9BQU82SCxNQUFNO1VBQ2QiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJDb252ZXJzYXRpb25zIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJrbm93bGVkZ2VCb3hlcyIsInNoYXJlZEtub3dsZWRnZUJveGVzIiwiY3VycmVudENoYXQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaXNSZWFkeSIsInJlYWR5Iiwic2F2ZSIsIm5hbWUiLCJrbm93bGVkZ2VCb3hJZCIsImNoYXQiLCJDaGF0IiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJzcGVjcyIsInB1Ymxpc2giLCJzdGF0dXMiLCJlZGl0IiwiaWQiLCJsb2FkIiwic2F2ZWRDaGF0IiwidXNlU3RhdGUiLCJSZWFjdCIsIkFkZENoYXQiLCJkaWFsb2dSZWYiLCJzdG9yZSIsImNsb3NlRGlhbG9nIiwic2V0TmFtZSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwia2JJZCIsInNldEtiSWQiLCJzZWxlY3RSZWYiLCJ1c2VSZWYiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZWxlY3RlZEtub3dsZWRnZUJveElkIiwib25DbG9zZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInNhdmVDaGF0IiwicmVzcG9uc2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwia2JPcHRpb25zIiwiaXRlbXMiLCJtYXAiLCJrYiIsImkiLCJrZXkiLCJwYXRoIiwic2hhcmVkS2JPcHRpb25zIiwiZGlzYWJsZWQiLCJoYW5kbGVLYkNoYW5nZSIsInRhcmdldCIsIk1vZGFsIiwic2hvdyIsInJlZiIsImNsYXNzTmFtZSIsImhlYWRlciIsIkZvcm0iLCJvblN1Ym1pdCIsIklucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImFkZE5hbWVQbGFjZWhvbGRlciIsImxlbmd0aCIsIm5vS2JJbmZvIiwiY3JlYXRlTmV3S2IiLCJMaW5rIiwib25DbGljayIsImhyZWYiLCJkb2N1bWVudHNMaW5rIiwiY29udGludWVDcmVhdGluZ0NoYXQiLCJjaGF0V2l0aE1vZGVsIiwiQnV0dG9uIiwiaWNvbiIsImxhYmVsIiwiY2FuY2VsQnV0dG9uIiwidmFyaWFudCIsInNhdmVCdXR0b24iLCJDaGlsZEl0ZW0iLCJpdGVtIiwicGF0aG5hbWUiLCJ1cmkiLCJjaGF0SWQiLCJzcGxpdCIsImlzQ3VycmVudCIsImNscyIsImNoaWxkcmVuIiwiSXRlbUFjdGlvbnMiLCJzZXRFeHBhbmRlZCIsImhhc0NoaWxkcmVuIiwiaXNFeHBhbmRlZCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibmV3TmFtZSIsInNldE5ld05hbWUiLCJ0b2dnbGVFZGl0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25EZWxldGUiLCJoYW5kbGVOYW1lQ2hhbmdlIiwic3VibWl0TmFtZUNoYW5nZSIsIkljb24iLCJJY29uQnV0dG9uIiwiQ2hhdExpc3RJdGVtIiwiaXNQYXJlbnQiLCJmb3JFYWNoIiwiY2hpbGQiLCJwdXNoIiwic3ViSXRlbXNDbHMiLCJDaGF0TGlzdCIsInNlYXJjaCIsInNldEl0ZW1zIiwiY2hhdExpc3QiLCJDb252ZXJzYXRpb25zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb252ZXJzYXRpb25zQ29udGV4dCIsInVzZUNvbnRleHQiLCJsb2ciLCJzZXRTZWFyY2giLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsImhhbmRsZVNlYXJjaCIsIm9wZW5EaWFsb2ciLCJQcm92aWRlciIsInRvdGFsQ2hhdHMiLCJvcmdhbml6ZUJ5UGFyZW50IiwiZGF0YSIsImdldFByb3BlcnRpZXMiLCJyZXN1bHQiLCJwYXJlbnRJZCIsInBhcmVudCIsImluY2x1ZGVzIiwid2FybiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvc3RvcmUvaW5kZXgudHMiLCJ3aWRnZXQvdHMvdmlld3MvY29tcG9uZW50cy9jaGF0LWZvcm0udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvY2hpbGQudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvaXRlbS1hY3Rpb25zLnRzeCIsIndpZGdldC90cy92aWV3cy9jb21wb25lbnRzL2l0ZW0udHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvbGlzdC50c3giLCJ3aWRnZXQvdHMvdmlld3MvY29udGV4dC50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3Mvb3JnYW5pemVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19