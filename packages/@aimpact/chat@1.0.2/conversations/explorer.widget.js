System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/core", "@aimpact/chat@1.0.2/wrapper", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/modal", "@aimpact/chat@1.0.2/shared/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.2/shared/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/ui/manager", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Conversations, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Conversations: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk101Core) {
      dependency_5 = _aimpactChatSdk101Core;
    }, function (_aimpactChat102Wrapper) {
      dependency_6 = _aimpactChat102Wrapper;
    }, function (_aimpactChatSdk101Session) {
      dependency_7 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Form) {
      dependency_11 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_12 = _pragmateUi100Beta1Modal;
    }, function (_aimpactChat102SharedHooks) {
      dependency_13 = _aimpactChat102SharedHooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_aimpactChat102SharedComponents) {
      dependency_15 = _aimpactChat102SharedComponents;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102UiManager) {
      dependency_17 = _aimpactChat102UiManager;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_18 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Tooltip) {
      dependency_19 = _pragmateUi100Beta1Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.0-dev.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/conversations/explorer",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat/wrapper', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/modal', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/ui/manager', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/tooltip', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-explorer-view",
        "vspecifier": "@aimpact/chat@1.0.2/conversations/explorer.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.2/conversations/explorer.widget');
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
          const ConversationsContext = exports.ConversationsContext = _react.default.createContext({});
          const useConversationsContext = () => _react.default.useContext(ConversationsContext);
          exports.useConversationsContext = useConversationsContext;
          const ItemConversationsContext = exports.ItemConversationsContext = _react.default.createContext({});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkNvbnZlcnNhdGlvbnMiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfd3JhcHBlciIsIl9zZXNzaW9uIiwiX2NvcmUyIiwiUmVhY3RpdmVNb2RlbCIsImNoYXRzIiwiQXBwV3JhcHBlciIsImtub3dsZWRnZUJveGVzIiwic2hhcmVkS25vd2xlZGdlQm94ZXMiLCJjdXJyZW50Q2hhdCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzYXZlIiwibmFtZSIsImtub3dsZWRnZUJveElkIiwiY2hhdCIsIkNoYXQiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInNwZWNzIiwibGFuZ3VhZ2UiLCJkZWZhdWx0IiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsInB1Ymxpc2giLCJzdGF0dXMiLCJlZGl0IiwiaWQiLCJsb2FkIiwic2F2ZWRDaGF0IiwiX3JlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIktub3dsZWRnZUJveGVzIiwidGV4dHMiLCJvbkNsb3NlIiwia2JJZCIsInNldEtiSWQiLCJ1c2VDb252ZXJzYXRpb25zQ29udGV4dCIsImtiT3B0aW9ucyIsIml0ZW1zIiwibWFwIiwia2IiLCJpIiwiY3JlYXRlRWxlbWVudCIsImtleSIsInZhbHVlIiwicGF0aCIsInNoYXJlZEtiT3B0aW9ucyIsInNlbGVjdFJlZiIsInVzZVJlZiIsImhhbmRsZUtiQ2hhbmdlIiwiZSIsInRhcmdldCIsIkZyYWdtZW50IiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwibm9LYkluZm8iLCJjcmVhdGVOZXdLYiIsIkxpbmsiLCJvbkNsaWNrIiwiaHJlZiIsImRvY3VtZW50c0xpbmsiLCJjb250aW51ZUNyZWF0aW5nQ2hhdCIsInRpdGxlIiwicmVmIiwib25DaGFuZ2UiLCJjaGF0V2l0aE1vZGVsIiwiX2Zvcm0iLCJfbW9kYWwiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfcm91dGluZyIsIl9jb21wb25lbnRzMiIsIl9ob29rczIiLCJfS25vd2xlZGdlQm94ZXMiLCJ1c2VTdGF0ZSIsIkFkZENoYXQiLCJjbG9zZURpYWxvZyIsInNldE5hbWUiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsInNlbGVjdGVkS25vd2xlZGdlQm94SWQiLCJzYXZlQ2hhdCIsInJlc3BvbnNlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwiZGlzYWJsZWQiLCJNb2RhbCIsInNob3ciLCJoZWFkZXIiLCJGb3JtIiwib25TdWJtaXQiLCJJbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiYWRkTmFtZVBsYWNlaG9sZGVyIiwiQnV0dG9uIiwiaWNvbiIsImxhYmVsIiwiY2FuY2VsQnV0dG9uIiwidmFyaWFudCIsInNhdmVCdXR0b24iLCJDb252ZXJzYXRpb25zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSXRlbUNvbnZlcnNhdGlvbnNDb250ZXh0IiwidXNlSXRlbUNvbnZlcnNhdGlvbnNDb250ZXh0IiwiX21hbmFnZXIiLCJfY2hhdEZvcm0iLCJfbGlzdCIsInNlYXJjaCIsInNldFNlYXJjaCIsImRpYWxvZ1JlZiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlVJTWFuYWdlciIsIm1vZGFsT3BlbmVkIiwiaGFuZGxlU2VhcmNoIiwib3BlbkRpYWxvZyIsIlByb3ZpZGVyIiwidG90YWxDaGF0cyIsInNob3dDaGlsZHJlbiIsIkNoYXRMaXN0IiwiQ2hpbGRJdGVtIiwiaXRlbSIsInBhdGhuYW1lIiwidXJpIiwiY2hhdElkIiwic3BsaXQiLCJpc0N1cnJlbnQiLCJjbHMiLCJjaGlsZHJlbiIsIl9pY29ucyIsIl90b29sdGlwIiwiRWRpdGluZ0l0ZW0iLCJlZGl0aW5nIiwic2V0RWRpdGluZyIsIm5ld05hbWUiLCJzZXROZXdOYW1lIiwiaGFuZGxlTmFtZUNoYW5nZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZUVkaXQiLCJUb29sdGlwIiwicGxhY2VtZW50IiwiY29udGVudCIsIkljb24iLCJJY29uQnV0dG9uIiwiX2xhYmVsIiwiX2VkaXRpbmciLCJDaGF0TGlzdEl0ZW0iLCJpc1BhcmVudCIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJmb3JFYWNoIiwiY2hpbGQiLCJwdXNoIiwic3ViSXRlbXNDbHMiLCJDb250cm9sIiwiSXRlbUxhYmVsIiwib25EZWxldGUiLCJldmVudCIsIm9uRXhwYW5kIiwiX2l0ZW0iLCJfb3JnYW5pemVyIiwic2V0SXRlbXMiLCJvcmdhbml6ZUJ5UGFyZW50IiwiY2hhdExpc3QiLCJkYXRhIiwiZ2V0UHJvcGVydGllcyIsInJlc3VsdCIsInBhcmVudElkIiwicGFyZW50IiwiaW5jbHVkZXMiLCJ3YXJuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhdC1mb3JtL0tub3dsZWRnZUJveGVzLnRzeCIsIi90cy92aWV3cy9jaGF0LWZvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vY2hpbGQudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vZWRpdGluZy50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9sYWJlbC50c3giLCIvdHMvdmlld3MvbGlzdC50c3giLCIvdHMvdmlld3Mvb3JnYW5pemVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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