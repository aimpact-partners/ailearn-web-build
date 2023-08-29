System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/form", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/modal", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/ui/manager"], function (_export, _context2) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_4 = _beyondJsReactive114Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_5 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi0036Link) {
      dependency_9 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Form) {
      dependency_10 = _pragmateUi0036Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Modal) {
      dependency_14 = _pragmateUi0036Modal;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Icons) {
      dependency_16 = _pragmateUi0036Icons;
    }, function (_aimpactChat101UiManager) {
      dependency_17 = _aimpactChat101UiManager;
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
          "vspecifier": "@aimpact/chat@1.0.1/conversations/explorer",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['react', dependency_8], ['pragmate-ui/link', dependency_9], ['pragmate-ui/form', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/modal', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/icons', dependency_16], ['@aimpact/chat/ui/manager', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-explorer-view",
        "vspecifier": "@aimpact/chat@1.0.1/conversations/explorer.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/conversations/explorer.widget');
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

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
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

      /***********************************************************
      INTERNAL MODULE: ./views/components/chat-form/KnowledgeBoxes
      ***********************************************************/

      ims.set('./views/components/chat-form/KnowledgeBoxes', {
        hash: 1458358830,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxes = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _context = require("../../context");
          const KnowledgeBoxes = ({
            texts,
            onClose,
            kbId,
            setKbId
          }) => {
            const {
              knowledgeBoxes,
              sharedKnowledgeBoxes
            } = (0, _context.useConversationsContext)();
            const kbOptions = knowledgeBoxes?.items.map((kb, i) => _react.default.createElement("option", {
              key: `${kb.id} - ${i}`,
              value: kb.id
            }, kb.path));
            const sharedKbOptions = sharedKnowledgeBoxes?.map((kb, i) => _react.default.createElement("option", {
              key: `${kb.id} - ${i}`,
              value: kb.id
            }, kb.path));
            const selectRef = _react.default.useRef(null);
            const handleKbChange = e => setKbId(e.target.value);
            return _react.default.createElement(_react.default.Fragment, null, !kbOptions?.length ? _react.default.createElement("section", null, _react.default.createElement("h4", {
              className: 'dialog__info'
            }, texts.noKbInfo), _react.default.createElement("p", null, texts.createNewKb, ' ', _react.default.createElement(_link.Link, {
              onClick: onClose,
              href: '/documents'
            }, texts.documentsLink), texts.continueCreatingChat)) : _react.default.createElement("select", {
              title: 'Knowledge boxes',
              ref: selectRef,
              value: kbId,
              onChange: handleKbChange
            }, _react.default.createElement("option", {
              value: ''
            }, texts.chatWithModel), [...kbOptions, ...sharedKbOptions]));
          };
          exports.KnowledgeBoxes = KnowledgeBoxes;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/components/chat-form/index
      **************************************************/

      ims.set('./views/components/chat-form/index', {
        hash: 3084196405,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddChat = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _modal = require("pragmate-ui/modal");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _KnowledgeBoxes = require("./KnowledgeBoxes");
          const {
            useState
          } = _react.default;
          const AddChat = ({}) => {
            const {
              store,
              closeDialog
            } = (0, _context.useConversationsContext)();
            const [name, setName] = useState('');
            const [error, setError] = useState('');
            const [fetching, setFetching] = useState(false);
            const [kbId, setKbId] = useState('');
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
            const disabled = {
              disabled: !name || fetching
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose,
              className: 'chat__form'
            }, error && _react.default.createElement("div", {
              className: 'error error-container'
            }, texts.error), _react.default.createElement("header", null, _react.default.createElement("h1", null, texts.header)), _react.default.createElement(_form.Form, {
              onSubmit: saveChat,
              className: 'chat__form'
            }, _react.default.createElement(_components.Input, {
              type: 'text',
              name: 'name',
              value: name,
              onChange: e => setName(e.target.value),
              required: true,
              disabled: fetching,
              placeholder: texts.addNamePlaceholder
            }), _react.default.createElement(_KnowledgeBoxes.KnowledgeBoxes, {
              kbId: kbId,
              setKbId: setKbId,
              texts: texts,
              onClose: onClose
            }), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              label: texts.cancelButton,
              variant: 'secondary outline',
              onClick: closeDialog
            }), _react.default.createElement(_form.Button, {
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
        hash: 459255390,
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
        hash: 2718472055,
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
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function Conversations({
            store
          }) {
            const [search, setSearch] = React.useState('');
            const dialogRef = React.useRef(null);
            //	const openDialog = () => dialogRef.current.showModal();
            const [showModal, setShowModal] = React.useState(false);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
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
            if (!textsReady) return null;
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
            }, React.createElement("h3", null, texts.title)), React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7a0JBQ1hBLE1BQU0sQ0FBQy9DLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzVCLE1BQU07a0JBQ047a0JBQ0FwQixPQUFPLENBQUM0RSxJQUFJLENBQUMsbUJBQW1CSCxRQUFRLGlDQUFpQ3JELElBQUksQ0FBQ3pFLEVBQUUsR0FBRyxDQUFDOzs7O1lBS3ZGLE9BQU82SCxNQUFNO1VBQ2QiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJDb252ZXJzYXRpb25zIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJjaGF0cyIsIkFwcFdyYXBwZXIiLCJrbm93bGVkZ2VCb3hlcyIsInNoYXJlZEtub3dsZWRnZUJveGVzIiwiY3VycmVudENoYXQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaXNSZWFkeSIsInJlYWR5Iiwic2F2ZSIsIm5hbWUiLCJrbm93bGVkZ2VCb3hJZCIsImNoYXQiLCJDaGF0IiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJzcGVjcyIsInB1Ymxpc2giLCJzdGF0dXMiLCJlZGl0IiwiaWQiLCJsb2FkIiwic2F2ZWRDaGF0IiwiS25vd2xlZGdlQm94ZXMiLCJ0ZXh0cyIsIm9uQ2xvc2UiLCJrYklkIiwic2V0S2JJZCIsImtiT3B0aW9ucyIsIml0ZW1zIiwibWFwIiwia2IiLCJpIiwiUmVhY3QiLCJrZXkiLCJ2YWx1ZSIsInBhdGgiLCJzaGFyZWRLYk9wdGlvbnMiLCJzZWxlY3RSZWYiLCJ1c2VSZWYiLCJoYW5kbGVLYkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJub0tiSW5mbyIsImNyZWF0ZU5ld0tiIiwiTGluayIsIm9uQ2xpY2siLCJocmVmIiwiZG9jdW1lbnRzTGluayIsImNvbnRpbnVlQ3JlYXRpbmdDaGF0IiwidGl0bGUiLCJyZWYiLCJvbkNoYW5nZSIsImNoYXRXaXRoTW9kZWwiLCJ1c2VTdGF0ZSIsIkFkZENoYXQiLCJzdG9yZSIsImNsb3NlRGlhbG9nIiwic2V0TmFtZSIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNlbGVjdGVkS25vd2xlZGdlQm94SWQiLCJzYXZlQ2hhdCIsInJlc3BvbnNlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwiZGlzYWJsZWQiLCJNb2RhbCIsInNob3ciLCJoZWFkZXIiLCJGb3JtIiwib25TdWJtaXQiLCJJbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiYWRkTmFtZVBsYWNlaG9sZGVyIiwiQnV0dG9uIiwiaWNvbiIsImxhYmVsIiwiY2FuY2VsQnV0dG9uIiwidmFyaWFudCIsInNhdmVCdXR0b24iLCJDaGlsZEl0ZW0iLCJpdGVtIiwicGF0aG5hbWUiLCJ1cmkiLCJjaGF0SWQiLCJzcGxpdCIsImlzQ3VycmVudCIsImNscyIsImNoaWxkcmVuIiwiSXRlbUFjdGlvbnMiLCJzZXRFeHBhbmRlZCIsImhhc0NoaWxkcmVuIiwiaXNFeHBhbmRlZCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibmV3TmFtZSIsInNldE5ld05hbWUiLCJ0b2dnbGVFZGl0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25EZWxldGUiLCJoYW5kbGVOYW1lQ2hhbmdlIiwic3VibWl0TmFtZUNoYW5nZSIsIkljb24iLCJJY29uQnV0dG9uIiwiQ2hhdExpc3RJdGVtIiwiaXNQYXJlbnQiLCJmb3JFYWNoIiwiY2hpbGQiLCJwdXNoIiwic3ViSXRlbXNDbHMiLCJDaGF0TGlzdCIsInNlYXJjaCIsInNldEl0ZW1zIiwiY2hhdExpc3QiLCJDb252ZXJzYXRpb25zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb252ZXJzYXRpb25zQ29udGV4dCIsInVzZUNvbnRleHQiLCJzZXRTZWFyY2giLCJkaWFsb2dSZWYiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJVSU1hbmFnZXIiLCJtb2RhbE9wZW5lZCIsImhhbmRsZVNlYXJjaCIsIm9wZW5EaWFsb2ciLCJQcm92aWRlciIsInRvdGFsQ2hhdHMiLCJvcmdhbml6ZUJ5UGFyZW50IiwiZGF0YSIsImdldFByb3BlcnRpZXMiLCJyZXN1bHQiLCJwYXJlbnRJZCIsInBhcmVudCIsImluY2x1ZGVzIiwid2FybiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvY29tcG9uZW50cy9jaGF0LWZvcm0vS25vd2xlZGdlQm94ZXMudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9jaGF0LWZvcm0vaW5kZXgudHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9jaGlsZC50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL2l0ZW0tYWN0aW9ucy50c3giLCJ0cy92aWV3cy9jb21wb25lbnRzL2l0ZW0udHN4IiwidHMvdmlld3MvY29tcG9uZW50cy9saXN0LnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9vcmdhbml6ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==