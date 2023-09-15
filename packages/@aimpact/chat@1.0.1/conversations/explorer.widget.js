System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.4/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/modal", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, Conversations, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0036Components) {
      dependency_9 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Form) {
      dependency_10 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Modal) {
      dependency_11 = _pragmateUi0036Modal;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedComponents) {
      dependency_14 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_15 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101UiManager) {
      dependency_16 = _aimpactChat101UiManager;
    }, function (_pragmateUi0036Icons) {
      dependency_17 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Tooltip) {
      dependency_18 = _pragmateUi0036Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['@aimpact/chat/shared/components', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/chat/ui/manager', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/tooltip', dependency_18]]);
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
        hash: 1211229992,
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

      /************************************************
      INTERNAL MODULE: ./views/chat-form/KnowledgeBoxes
      ************************************************/

      ims.set('./views/chat-form/KnowledgeBoxes', {
        hash: 370843520,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeBoxes = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
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
            }, texts.noKbInfo), _react.default.createElement("p", null, texts.createNewKb, ' ', _react.default.createElement(_components.Link, {
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

      /***************************************
      INTERNAL MODULE: ./views/chat-form/index
      ***************************************/

      ims.set('./views/chat-form/index', {
        hash: 3112044576,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddChat = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
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
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks2.useBinder)([_wrapper.AppWrapper], () => {
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

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3255672335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useItemConversationsContext = exports.useConversationsContext = exports.ItemConversationsContext = exports.ConversationsContext = void 0;
          var _react = require("react");
          const ConversationsContext = _react.default.createContext({});
          exports.ConversationsContext = ConversationsContext;
          const useConversationsContext = () => _react.default.useContext(ConversationsContext);
          exports.useConversationsContext = useConversationsContext;
          const ItemConversationsContext = _react.default.createContext({});
          exports.ItemConversationsContext = ItemConversationsContext;
          const useItemConversationsContext = () => _react.default.useContext(ItemConversationsContext);
          exports.useItemConversationsContext = useItemConversationsContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1341788162,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversations = Conversations;
          var _react = require("react");
          var _manager = require("@aimpact/chat/ui/manager");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _form = require("pragmate-ui/form");
          var _components = require("@aimpact/chat/shared/components");
          var _chatForm = require("./chat-form");
          var _context = require("./context");
          var _list = require("./list");
          /*bundle*/
          function Conversations({
            store
          }) {
            const [search, setSearch] = _react.default.useState('');
            const dialogRef = _react.default.useRef(null);
            //	const openDialog = () => dialogRef.current.showModal();
            const [showModal, setShowModal] = _react.default.useState(false);
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
            return _react.default.createElement(_context.ConversationsContext.Provider, {
              value: {
                store,
                closeDialog: () => setShowModal(false),
                openDialog,
                totalChats: store.chats?.items?.length,
                chats: store.chats,
                showChildren: false,
                knowledgeBoxes: store.knowledgeBoxes,
                sharedKnowledgeBoxes: store.sharedKnowledgeBoxes
              }
            }, _react.default.createElement("article", null, _react.default.createElement("header", {
              className: 'aside__top'
            }, _react.default.createElement("h3", null, texts.title)), _react.default.createElement("div", {
              className: 'sidebar__search'
            }, _react.default.createElement(_components.Input, {
              label: 'Search Chats',
              onChange: handleSearch,
              type: 'search',
              required: true,
              value: search
            }), _react.default.createElement(_form.Button, {
              onClick: openDialog,
              icon: 'plus'
            })), _react.default.createElement(_list.ChatList, {
              search: search
            }), showModal && _react.default.createElement(_chatForm.AddChat, {
              dialogRef: dialogRef
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/child
      **********************************/

      ims.set('./views/item/child', {
        hash: 2336134897,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChildItem = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
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
            });
          };
          exports.ChildItem = ChildItem;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/editing
      ************************************/

      ims.set('./views/item/editing', {
        hash: 2416652880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EditingItem = EditingItem;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          var _context = require("../context");
          function EditingItem() {
            const {
              chatId,
              editing,
              setEditing,
              item
            } = (0, _context.useItemConversationsContext)();
            const {
              store
            } = (0, _context.useConversationsContext)();
            const [newName, setNewName] = _react.default.useState('');
            const handleNameChange = e => setNewName(e.target.value);
            const onSubmit = async e => {
              e.stopPropagation();
              await store.edit(chatId, newName);
            };
            const toggleEdit = e => {
              e.stopPropagation();
              setEditing(!editing);
            };
            return _react.default.createElement("div", {
              className: 'item-label__container'
            }, _react.default.createElement(_tooltip.Tooltip, {
              placement: 'top',
              content: item?.name
            }, _react.default.createElement(_components.Link, {
              className: 'item-label',
              href: `/chat/${item.id}`
            }, _react.default.createElement(_icons.Icon, {
              icon: 'chat',
              className: 'xs'
            }), _react.default.createElement("form", {
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              type: 'text',
              value: newName,
              placeholder: item?.name,
              onChange: handleNameChange
            })))), _react.default.createElement("div", {
              className: 'item__actions'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'check',
              type: 'submit',
              onClick: onSubmit
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              onClick: toggleEdit
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 3140734552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatListItem = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../context");
          var _label = require("./label");
          var _editing = require("./editing");
          const ChatListItem = ({
            item
          }) => {
            const {
              pathname
            } = _routing.routing.uri;
            const chatId = pathname.split('/')[2];
            const isCurrent = chatId === item.id;
            const isParent = !!item.children.length;
            const {
              showChildren
            } = (0, _context.useConversationsContext)();
            const [expanded, setExpanded] = _react.default.useState(false);
            const [editing, setEditing] = _react.default.useState(false);
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
            const subItemsCls = `subitems__list ${expanded ? 'visible' : ''}`;
            const value = {
              item,
              chatId,
              setExpanded,
              editing,
              setEditing,
              expanded,
              isParent,
              isCurrent
            };
            const Control = editing ? _editing.EditingItem : _label.ItemLabel;
            return _react.default.createElement(_context.ItemConversationsContext.Provider, {
              value: value
            }, _react.default.createElement("li", {
              className: cls
            }, _react.default.createElement(Control, null), isParent && showChildren && _react.default.createElement("ul", {
              className: subItemsCls
            }, children)));
          };
          exports.ChatListItem = ChatListItem;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/label
      **********************************/

      ims.set('./views/item/label', {
        hash: 3542675124,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemLabel = ItemLabel;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          var _context = require("../context");
          function ItemLabel() {
            const {
              chatId,
              expanded,
              editing,
              setEditing,
              item,
              isParent,
              setExpanded
            } = (0, _context.useItemConversationsContext)();
            const {
              showChildren
            } = (0, _context.useConversationsContext)();
            const toggleEdit = e => {
              e.stopPropagation();
              setEditing(!editing);
            };
            const onDelete = event => event.stopPropagation();
            const onExpand = event => {
              event.stopPropagation();
              setExpanded(!expanded);
            };
            return _react.default.createElement("div", {
              className: 'item__container'
            }, _react.default.createElement(_tooltip.Tooltip, {
              placement: 'top',
              content: item?.name
            }, _react.default.createElement(_components.Link, {
              className: 'item__label-container',
              href: `/chat/${item.id}`
            }, _react.default.createElement(_icons.Icon, {
              icon: 'chat',
              className: 'xs'
            }), _react.default.createElement("span", {
              className: 'item__label-text'
            }, item?.name)), _react.default.createElement("div", {
              className: 'item__actions-container'
            }, isParent && showChildren && _react.default.createElement(_icons.IconButton, {
              icon: 'expandMore',
              className: `${expanded ? 'expanded' : ''}`,
              onClick: onExpand
            }))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 1650641055,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatList = ChatList;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _item = require("./item");
          var _context = require("./context");
          var _organizer = require("./organizer");
          function ChatList({
            search
          }) {
            const {
              chats
            } = (0, _context.useConversationsContext)();
            const [items, setItems] = _react.default.useState((0, _organizer.organizeByParent)(chats?.items));
            (0, _hooks.useBinder)([chats], () => setItems((0, _organizer.organizeByParent)(chats.items)));
            const chatList = items.map((item, i) => _react.default.createElement(_item.ChatListItem, {
              key: i,
              item: item
            }));
            return _react.default.createElement("div", {
              className: 'sidebar__list'
            }, chatList.length ? _react.default.createElement("ul", null, chatList) : _react.default.createElement("h4", {
              className: 'empty__list'
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUc0RixJQUFJO2NBQ25CbEYsR0FBRyxDQUFDa0YsSUFBSSxDQUFDNUYsRUFBRSxDQUFDLENBQUNtRyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7OztZQUc3QixNQUFNZ0MsTUFBTSxHQUFXLEVBQUU7WUFFekI7WUFDQSxLQUFLLE1BQU12QyxJQUFJLElBQUlxQyxJQUFJLEVBQUU7Y0FDeEIsTUFBTUcsUUFBUSxHQUFHeEMsSUFBSSxDQUFDeUMsTUFBTTtjQUU1QixJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLENBQUNGLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQ0QsTUFBTSxDQUFDWixJQUFJLENBQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDO2VBQ25CLE1BQU07Z0JBQ04sTUFBTXlDLE1BQU0sR0FBRzNILEdBQUcsQ0FBQzBILFFBQVEsQ0FBQztnQkFDNUIsSUFBSUMsTUFBTSxFQUFFO2tCQUNYQSxNQUFNLENBQUNsQyxRQUFRLENBQUNvQixJQUFJLENBQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUM1QixNQUFNO2tCQUNOO2tCQUNBdkMsT0FBTyxDQUFDa0YsSUFBSSxDQUFDLG1CQUFtQkgsUUFBUSxpQ0FBaUN4QyxJQUFJLENBQUM1RixFQUFFLEdBQUcsQ0FBQzs7OztZQUt2RixPQUFPbUksTUFBTTtVQUNkIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiQ29udmVyc2F0aW9ucyIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJBcHBXcmFwcGVyIiwia25vd2xlZGdlQm94ZXMiLCJzaGFyZWRLbm93bGVkZ2VCb3hlcyIsImN1cnJlbnRDaGF0IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJyZWFkeSIsInNhdmUiLCJuYW1lIiwia25vd2xlZGdlQm94SWQiLCJjaGF0IiwiQ2hhdCIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwic3BlY3MiLCJwdWJsaXNoIiwic3RhdHVzIiwiZWRpdCIsImlkIiwibG9hZCIsInNhdmVkQ2hhdCIsIktub3dsZWRnZUJveGVzIiwidGV4dHMiLCJvbkNsb3NlIiwia2JJZCIsInNldEtiSWQiLCJrYk9wdGlvbnMiLCJpdGVtcyIsIm1hcCIsImtiIiwiaSIsIlJlYWN0Iiwia2V5IiwidmFsdWUiLCJwYXRoIiwic2hhcmVkS2JPcHRpb25zIiwic2VsZWN0UmVmIiwidXNlUmVmIiwiaGFuZGxlS2JDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwibm9LYkluZm8iLCJjcmVhdGVOZXdLYiIsIkxpbmsiLCJvbkNsaWNrIiwiaHJlZiIsImRvY3VtZW50c0xpbmsiLCJjb250aW51ZUNyZWF0aW5nQ2hhdCIsInRpdGxlIiwicmVmIiwib25DaGFuZ2UiLCJjaGF0V2l0aE1vZGVsIiwidXNlU3RhdGUiLCJBZGRDaGF0Iiwic3RvcmUiLCJjbG9zZURpYWxvZyIsInNldE5hbWUiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZWxlY3RlZEtub3dsZWRnZUJveElkIiwic2F2ZUNoYXQiLCJyZXNwb25zZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjb25zb2xlIiwibWVzc2FnZSIsImRpc2FibGVkIiwiTW9kYWwiLCJzaG93IiwiaGVhZGVyIiwiRm9ybSIsIm9uU3VibWl0IiwiSW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImFkZE5hbWVQbGFjZWhvbGRlciIsIkJ1dHRvbiIsImljb24iLCJsYWJlbCIsImNhbmNlbEJ1dHRvbiIsInZhcmlhbnQiLCJzYXZlQnV0dG9uIiwiQ29udmVyc2F0aW9uc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udmVyc2F0aW9uc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiSXRlbUNvbnZlcnNhdGlvbnNDb250ZXh0IiwidXNlSXRlbUNvbnZlcnNhdGlvbnNDb250ZXh0Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwiZGlhbG9nUmVmIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiVUlNYW5hZ2VyIiwibW9kYWxPcGVuZWQiLCJoYW5kbGVTZWFyY2giLCJvcGVuRGlhbG9nIiwiUHJvdmlkZXIiLCJ0b3RhbENoYXRzIiwic2hvd0NoaWxkcmVuIiwiQ2hhdExpc3QiLCJDaGlsZEl0ZW0iLCJpdGVtIiwicGF0aG5hbWUiLCJ1cmkiLCJjaGF0SWQiLCJzcGxpdCIsImlzQ3VycmVudCIsImNscyIsImNoaWxkcmVuIiwiRWRpdGluZ0l0ZW0iLCJlZGl0aW5nIiwic2V0RWRpdGluZyIsIm5ld05hbWUiLCJzZXROZXdOYW1lIiwiaGFuZGxlTmFtZUNoYW5nZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZUVkaXQiLCJUb29sdGlwIiwicGxhY2VtZW50IiwiY29udGVudCIsIkljb24iLCJJY29uQnV0dG9uIiwiQ2hhdExpc3RJdGVtIiwiaXNQYXJlbnQiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiZm9yRWFjaCIsImNoaWxkIiwicHVzaCIsInN1Ykl0ZW1zQ2xzIiwiQ29udHJvbCIsIkl0ZW1MYWJlbCIsIm9uRGVsZXRlIiwiZXZlbnQiLCJvbkV4cGFuZCIsInNldEl0ZW1zIiwiY2hhdExpc3QiLCJvcmdhbml6ZUJ5UGFyZW50IiwiZGF0YSIsImdldFByb3BlcnRpZXMiLCJyZXN1bHQiLCJwYXJlbnRJZCIsInBhcmVudCIsImluY2x1ZGVzIiwid2FybiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvY2hhdC1mb3JtL0tub3dsZWRnZUJveGVzLnRzeCIsInRzL3ZpZXdzL2NoYXQtZm9ybS9pbmRleC50c3giLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaXRlbS9jaGlsZC50c3giLCJ0cy92aWV3cy9pdGVtL2VkaXRpbmcudHN4IiwidHMvdmlld3MvaXRlbS9pbmRleC50c3giLCJ0cy92aWV3cy9pdGVtL2xhYmVsLnRzeCIsInRzL3ZpZXdzL2xpc3QudHN4IiwidHMvdmlld3Mvb3JnYW5pemVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==