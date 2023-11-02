System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.0/core", "@aimpact/chat@1.0.1/wrapper", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/form", "pragmate-ui@0.0.37/modal", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/ui/manager", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Conversations, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk100Core) {
      dependency_5 = _aimpactChatSdk100Core;
    }, function (_aimpactChat101Wrapper) {
      dependency_6 = _aimpactChat101Wrapper;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi0037Components) {
      dependency_10 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Form) {
      dependency_11 = _pragmateUi0037Form;
    }, function (_pragmateUi0037Modal) {
      dependency_12 = _pragmateUi0037Modal;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_16 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101UiManager) {
      dependency_17 = _aimpactChat101UiManager;
    }, function (_pragmateUi0037Icons) {
      dependency_18 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Tooltip) {
      dependency_19 = _pragmateUi0037Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/modal', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/ui/manager', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/tooltip', dependency_19]]);
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
        hash: 417115612,
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
          var _core2 = require("@beyond-js/kernel/core");
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
                userId,
                language: {
                  default: _core2.languages.current
                }
              };
              if (knowledgeBoxId) specs.knowledgeBoxId = knowledgeBoxId;
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
        hash: 2667889105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddChat = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@aimpact/chat/wrapper");
          var _components2 = require("@aimpact/chat/shared/components");
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
            }, _react.default.createElement(_components2.Input, {
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
            }), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              icon: 'close-circle',
              label: texts.cancelButton,
              variant: 'secondary outline',
              onClick: closeDialog
            }), _react.default.createElement(_components.Button, {
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
        hash: 2444812138,
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
        hash: 2589374136,
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
          var _components = require("pragmate-ui/components");
          var _components2 = require("@aimpact/chat/shared/components");
          var _chatForm = require("./chat-form");
          var _context = require("./context");
          var _list = require("./list");
          /*bundle*/
          function Conversations({
            store
          }) {
            const [search, setSearch] = _react.default.useState('');
            const dialogRef = _react.default.useRef(null);
            const [showModal, setShowModal] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const closeDialog = () => {
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
            }, _react.default.createElement(_components2.Input, {
              label: 'Search Chats',
              disabled: !!store.chats?.items?.length,
              onChange: handleSearch,
              type: 'search',
              required: true,
              value: search
            }), _react.default.createElement(_components.Button, {
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
        hash: 2522110075,
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
            if (!items.length) return null;
            const chatList = items.map((item, i) => _react.default.createElement(_item.ChatListItem, {
              key: i,
              item: item
            }));
            return _react.default.createElement("div", {
              className: 'sidebar__list'
            }, _react.default.createElement("ul", null, chatList));
          }
          //
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDc0MsYUFBYSxFQUFFLENBQUM7WUFDcEQsS0FBSyxNQUFNdEMsSUFBSSxJQUFJcUMsSUFBSSxFQUFFO2NBQ3hCdkgsR0FBRyxDQUFDa0YsSUFBSSxDQUFDNUYsRUFBRSxDQUFDLEdBQUc0RixJQUFJO2NBQ25CbEYsR0FBRyxDQUFDa0YsSUFBSSxDQUFDNUYsRUFBRSxDQUFDLENBQUNtRyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7OztZQUc3QixNQUFNZ0MsTUFBTSxHQUFXLEVBQUU7WUFFekI7WUFDQSxLQUFLLE1BQU12QyxJQUFJLElBQUlxQyxJQUFJLEVBQUU7Y0FDeEIsTUFBTUcsUUFBUSxHQUFHeEMsSUFBSSxDQUFDeUMsTUFBTTtjQUU1QixJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLENBQUNGLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQ0QsTUFBTSxDQUFDWixJQUFJLENBQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDO2VBQ25CLE1BQU07Z0JBQ04sTUFBTXlDLE1BQU0sR0FBRzNILEdBQUcsQ0FBQzBILFFBQVEsQ0FBQztnQkFDNUIsSUFBSUMsTUFBTSxFQUFFO2tCQUNYQSxNQUFNLENBQUNsQyxRQUFRLENBQUNvQixJQUFJLENBQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUM1QixNQUFNO2tCQUNOO2tCQUNBdkMsT0FBTyxDQUFDa0YsSUFBSSxDQUFDLG1CQUFtQkgsUUFBUSxpQ0FBaUN4QyxJQUFJLENBQUM1RixFQUFFLEdBQUcsQ0FBQzs7OztZQUt2RixPQUFPbUksTUFBTTtVQUNkIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiQ29udmVyc2F0aW9ucyIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJBcHBXcmFwcGVyIiwia25vd2xlZGdlQm94ZXMiLCJzaGFyZWRLbm93bGVkZ2VCb3hlcyIsImN1cnJlbnRDaGF0IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJyZWFkeSIsInNhdmUiLCJuYW1lIiwia25vd2xlZGdlQm94SWQiLCJjaGF0IiwiQ2hhdCIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwic3BlY3MiLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwicHVibGlzaCIsInN0YXR1cyIsImVkaXQiLCJpZCIsImxvYWQiLCJzYXZlZENoYXQiLCJLbm93bGVkZ2VCb3hlcyIsInRleHRzIiwib25DbG9zZSIsImtiSWQiLCJzZXRLYklkIiwia2JPcHRpb25zIiwiaXRlbXMiLCJtYXAiLCJrYiIsImkiLCJSZWFjdCIsImtleSIsInZhbHVlIiwicGF0aCIsInNoYXJlZEtiT3B0aW9ucyIsInNlbGVjdFJlZiIsInVzZVJlZiIsImhhbmRsZUtiQ2hhbmdlIiwiZSIsInRhcmdldCIsImxlbmd0aCIsImNsYXNzTmFtZSIsIm5vS2JJbmZvIiwiY3JlYXRlTmV3S2IiLCJMaW5rIiwib25DbGljayIsImhyZWYiLCJkb2N1bWVudHNMaW5rIiwiY29udGludWVDcmVhdGluZ0NoYXQiLCJ0aXRsZSIsInJlZiIsIm9uQ2hhbmdlIiwiY2hhdFdpdGhNb2RlbCIsInVzZVN0YXRlIiwiQWRkQ2hhdCIsInN0b3JlIiwiY2xvc2VEaWFsb2ciLCJzZXROYW1lIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2VsZWN0ZWRLbm93bGVkZ2VCb3hJZCIsInNhdmVDaGF0IiwicmVzcG9uc2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkaXNhYmxlZCIsIk1vZGFsIiwic2hvdyIsImhlYWRlciIsIkZvcm0iLCJvblN1Ym1pdCIsIklucHV0IiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJhZGROYW1lUGxhY2Vob2xkZXIiLCJCdXR0b24iLCJpY29uIiwibGFiZWwiLCJjYW5jZWxCdXR0b24iLCJ2YXJpYW50Iiwic2F2ZUJ1dHRvbiIsIkNvbnZlcnNhdGlvbnNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnZlcnNhdGlvbnNDb250ZXh0IiwidXNlQ29udGV4dCIsIkl0ZW1Db252ZXJzYXRpb25zQ29udGV4dCIsInVzZUl0ZW1Db252ZXJzYXRpb25zQ29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsImRpYWxvZ1JlZiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiaGFuZGxlU2VhcmNoIiwib3BlbkRpYWxvZyIsIlByb3ZpZGVyIiwidG90YWxDaGF0cyIsInNob3dDaGlsZHJlbiIsIkNoYXRMaXN0IiwiQ2hpbGRJdGVtIiwiaXRlbSIsInBhdGhuYW1lIiwidXJpIiwiY2hhdElkIiwic3BsaXQiLCJpc0N1cnJlbnQiLCJjbHMiLCJjaGlsZHJlbiIsIkVkaXRpbmdJdGVtIiwiZWRpdGluZyIsInNldEVkaXRpbmciLCJuZXdOYW1lIiwic2V0TmV3TmFtZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVFZGl0IiwiVG9vbHRpcCIsInBsYWNlbWVudCIsImNvbnRlbnQiLCJJY29uIiwiSWNvbkJ1dHRvbiIsIkNoYXRMaXN0SXRlbSIsImlzUGFyZW50IiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImZvckVhY2giLCJjaGlsZCIsInB1c2giLCJzdWJJdGVtc0NscyIsIkNvbnRyb2wiLCJJdGVtTGFiZWwiLCJvbkRlbGV0ZSIsImV2ZW50Iiwib25FeHBhbmQiLCJzZXRJdGVtcyIsImNoYXRMaXN0Iiwib3JnYW5pemVCeVBhcmVudCIsImRhdGEiLCJnZXRQcm9wZXJ0aWVzIiwicmVzdWx0IiwicGFyZW50SWQiLCJwYXJlbnQiLCJpbmNsdWRlcyIsIndhcm4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2NoYXQtZm9ybS9Lbm93bGVkZ2VCb3hlcy50c3giLCJ0cy92aWV3cy9jaGF0LWZvcm0vaW5kZXgudHN4IiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2l0ZW0vY2hpbGQudHN4IiwidHMvdmlld3MvaXRlbS9lZGl0aW5nLnRzeCIsInRzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwidHMvdmlld3MvaXRlbS9sYWJlbC50c3giLCJ0cy92aWV3cy9saXN0LnRzeCIsInRzL3ZpZXdzL29yZ2FuaXplci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=