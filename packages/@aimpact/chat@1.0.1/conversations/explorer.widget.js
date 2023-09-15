System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.1.5/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/modal", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/tooltip"], function (_export, _context2) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_4 = _beyondJsReactive115Model;
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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkNvbnZlcnNhdGlvbnMiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfd3JhcHBlciIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsImNoYXRzIiwiQXBwV3JhcHBlciIsImtub3dsZWRnZUJveGVzIiwic2hhcmVkS25vd2xlZGdlQm94ZXMiLCJjdXJyZW50Q2hhdCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzYXZlIiwibmFtZSIsImtub3dsZWRnZUJveElkIiwiY2hhdCIsIkNoYXQiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInNwZWNzIiwicHVibGlzaCIsInN0YXR1cyIsImVkaXQiLCJpZCIsImxvYWQiLCJzYXZlZENoYXQiLCJfcmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiS25vd2xlZGdlQm94ZXMiLCJ0ZXh0cyIsIm9uQ2xvc2UiLCJrYklkIiwic2V0S2JJZCIsInVzZUNvbnZlcnNhdGlvbnNDb250ZXh0Iiwia2JPcHRpb25zIiwiaXRlbXMiLCJtYXAiLCJrYiIsImkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsInZhbHVlIiwicGF0aCIsInNoYXJlZEtiT3B0aW9ucyIsInNlbGVjdFJlZiIsInVzZVJlZiIsImhhbmRsZUtiQ2hhbmdlIiwiZSIsInRhcmdldCIsIkZyYWdtZW50IiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwibm9LYkluZm8iLCJjcmVhdGVOZXdLYiIsIkxpbmsiLCJvbkNsaWNrIiwiaHJlZiIsImRvY3VtZW50c0xpbmsiLCJjb250aW51ZUNyZWF0aW5nQ2hhdCIsInRpdGxlIiwicmVmIiwib25DaGFuZ2UiLCJjaGF0V2l0aE1vZGVsIiwiX2Zvcm0iLCJfbW9kYWwiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfcm91dGluZyIsIl9ob29rczIiLCJfS25vd2xlZGdlQm94ZXMiLCJ1c2VTdGF0ZSIsIkFkZENoYXQiLCJjbG9zZURpYWxvZyIsInNldE5hbWUiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsInNlbGVjdGVkS25vd2xlZGdlQm94SWQiLCJzYXZlQ2hhdCIsInJlc3BvbnNlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwiZGlzYWJsZWQiLCJNb2RhbCIsInNob3ciLCJoZWFkZXIiLCJGb3JtIiwib25TdWJtaXQiLCJJbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiYWRkTmFtZVBsYWNlaG9sZGVyIiwiQnV0dG9uIiwiaWNvbiIsImxhYmVsIiwiY2FuY2VsQnV0dG9uIiwidmFyaWFudCIsInNhdmVCdXR0b24iLCJDb252ZXJzYXRpb25zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSXRlbUNvbnZlcnNhdGlvbnNDb250ZXh0IiwidXNlSXRlbUNvbnZlcnNhdGlvbnNDb250ZXh0IiwiX21hbmFnZXIiLCJfY2hhdEZvcm0iLCJfbGlzdCIsInNlYXJjaCIsInNldFNlYXJjaCIsImRpYWxvZ1JlZiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiaGFuZGxlU2VhcmNoIiwib3BlbkRpYWxvZyIsIlByb3ZpZGVyIiwidG90YWxDaGF0cyIsInNob3dDaGlsZHJlbiIsIkNoYXRMaXN0IiwiQ2hpbGRJdGVtIiwiaXRlbSIsInBhdGhuYW1lIiwidXJpIiwiY2hhdElkIiwic3BsaXQiLCJpc0N1cnJlbnQiLCJjbHMiLCJjaGlsZHJlbiIsIl9pY29ucyIsIl90b29sdGlwIiwiRWRpdGluZ0l0ZW0iLCJlZGl0aW5nIiwic2V0RWRpdGluZyIsIm5ld05hbWUiLCJzZXROZXdOYW1lIiwiaGFuZGxlTmFtZUNoYW5nZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZUVkaXQiLCJUb29sdGlwIiwicGxhY2VtZW50IiwiY29udGVudCIsIkljb24iLCJJY29uQnV0dG9uIiwiX2xhYmVsIiwiX2VkaXRpbmciLCJDaGF0TGlzdEl0ZW0iLCJpc1BhcmVudCIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJmb3JFYWNoIiwiY2hpbGQiLCJwdXNoIiwic3ViSXRlbXNDbHMiLCJDb250cm9sIiwiSXRlbUxhYmVsIiwib25EZWxldGUiLCJldmVudCIsIm9uRXhwYW5kIiwiX2l0ZW0iLCJfb3JnYW5pemVyIiwic2V0SXRlbXMiLCJvcmdhbml6ZUJ5UGFyZW50IiwiY2hhdExpc3QiLCJkYXRhIiwiZ2V0UHJvcGVydGllcyIsInJlc3VsdCIsInBhcmVudElkIiwicGFyZW50IiwiaW5jbHVkZXMiLCJ3YXJuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhdC1mb3JtL0tub3dsZWRnZUJveGVzLnRzeCIsIi90cy92aWV3cy9jaGF0LWZvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vY2hpbGQudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vZWRpdGluZy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9sYWJlbC50c3giLCIvdHMvdmlld3MvbGlzdC50c3giLCIvdHMvdmlld3Mvb3JnYW5pemVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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