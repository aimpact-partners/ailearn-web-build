System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-09/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-09/components/navbar-header.code", "@aimpact/ailearn-app@0.0.46.dev-09/components/ui", "@aimpact/ailearn-app@0.0.46.dev-09/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0046Dev09MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev09MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0046Dev09ComponentsNavbarHeaderCode) {
      dependency_10 = _aimpactAilearnApp0046Dev09ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0046Dev09ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0046Dev09ComponentsUi;
    }, function (_aimpactAilearnApp0046Dev09Config) {
      dependency_12 = _aimpactAilearnApp0046Dev09Config;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_14 = _pragmateUi011Toast;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_18 = _pragmateUi011FormReactSelect;
    }, function (_pragmateUi011Components) {
      dependency_19 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_20 = _pragmateUi011List;
    }, function (_pragmateUi011Image) {
      dependency_21 = _pragmateUi011Image;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_pragmateUi011Form) {
      dependency_23 = _pragmateUi011Form;
    }, function (_pragmateUi011Modal) {
      dependency_24 = _pragmateUi011Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-09"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/toast', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/image', dependency_21], ['framer-motion', dependency_22], ['pragmate-ui/form', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-09/organizations/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 398392217,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1873550547,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #params;
            get params() {
              return this.#params;
            }
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            get managers() {
              return this.model.managers;
            }
            get pendings() {
              return this.model.pendings;
            }
            get members() {
              return this.model.members;
            }
            get isAdmin() {
              return _session.sessionWrapper.user.organizations.find(org => org.id === this.#params)?.role === 'manager';
            }
            #errorLoading;
            get errorLoading() {
              return this.#errorLoading;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#model = new _core.Organization({});
            }
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.overlay = false;
              globalThis.setTimeout(() => {
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.organizations, '/organizations/list'], [this.texts.breadcrumb.management, '']];
              }, 100);
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
            }
            async load(id) {
              try {
                super.ready = false;
                this.setBreadcrumb();
                this.#params = id;
                globalThis.con = this;
                const specs = {
                  id
                };
                this.#model = new _core.Organization(specs);
                if (id) {
                  const data = await this.#model.load({
                    id
                  });
                }
              } catch (e) {
                this.#errorLoading = e;
              } finally {
                super.ready = true;
              }
            }
            async delete(id) {
              this.#model.classrooms.remove(id);
              this.trigger('change');
            }
            async save(values) {
              try {
                this.fetching = true;
                const specs = this.#params !== 'new' ? {
                  ...values,
                  id: this.#params
                } : values;
                const {
                  status,
                  data
                } = await this.model.save(specs);
                if (!status) throw new Error('ERROR_PUBLISHING_ORGANIZATION');
                return data;
              } catch (e) {
                throw new Error(e);
              } finally {
                this.fetching = false;
              }
            }
            async invite(values) {
              try {
                this.fetching = true;
                const {
                  status,
                  data
                } = await this.model.invite(values);
                if (!status) throw new Error('error inviting user');
                return data;
              } catch (e) {
                throw new Error(e);
              } finally {
                this.fetching = false;
              }
            }
            async approve(values) {
              try {
                this.fetching = true;
                const res = await this.model.approve(values);
                if (!res.status) {
                  throw new Error('Error inviting user');
                }
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async reject(values) {
              try {
                this.fetching = true;
                const res = await this.model.reject(values);
                return res;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async updateRole(values) {
              try {
                this.fetching = true;
                const res = await this.model.updateRole(values);
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 631431152,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1175359991,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyOrganization = EmptyOrganization;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyOrganization({
            texts
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.organizations, '/organizations/list']]
            }), _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              icon: "search"
            }));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/header/code-section
      *******************************************/

      ims.set('./views/header/code-section', {
        hash: 629756106,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeSection = CodeSection;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          function CodeSection() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              code
            } = store.model.joinSpecs;
            const copyToClipboard = async event => {
              try {
                await navigator.clipboard.writeText(event.currentTarget.dataset.text);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            return _react.default.createElement("div", {
              className: "top-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__label"
            }, texts.orgCode), _react.default.createElement("span", {
              className: "code__text"
            }, code)), _react.default.createElement(_icons.IconButton, {
              "data-text": store.model.joinSpecs?.code,
              title: texts.actions.copy,
              className: "copy__button",
              icon: "link",
              disabled: !store.model.joinSpecs?.code,
              onClick: copyToClipboard
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 2234178329,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _codeSection = require("./code-section");
          //@ts-ignore

          function HeaderContainer() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const onSave = ({
              target
            }) => store.model.save({
              [target.name]: target.value
            });
            const {
              code
            } = store.model.join;
            return _react.default.createElement("div", {
              className: "page-container__header"
            }, _react.default.createElement("div", {
              className: "cover-content__container"
            }, _react.default.createElement(_ui.ContentEditable, {
              as: "h1",
              name: "title",
              onSave: onSave,
              placeholder: texts.name,
              content: store.model.name
            }), _react.default.createElement(_ui.ContentEditable, {
              as: "p",
              name: "title",
              onSave: onSave,
              placeholder: texts.description,
              content: store.model.description
            })), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center"
            }, _react.default.createElement(_codeSection.CodeSection, null)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2535825756,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _empty = require("./empty");
          var _header = require("./header/header");
          var _people = require("./list/people");
          var _approval = require("./list/approval");
          /*bundle*/
          function View({
            store
          }) {
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store.model], () => setFetching(store.model?.fetching));
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            if (!store.model.found) return _react.default.createElement(_empty.EmptyOrganization, {
              texts: texts
            });
            const value = {
              store,
              fetching,
              texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: "app-organization-creation-page",
              fetching: fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement("div", {
              className: "list-info__container"
            }, _react.default.createElement(_approval.ApprovalList, {
              type: "pendings"
            }), _react.default.createElement(_people.PeopleList, {
              role: "members"
            }), _react.default.createElement(_people.PeopleList, {
              role: "managers"
            }))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/list/approval/choice-role
      *************************************************/

      ims.set('./views/list/approval/choice-role', {
        hash: 158218919,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChoiceRole = ChoiceRole;
          var _react = require("react");
          var _context = require("../../context");
          var _toast = require("pragmate-ui/toast");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _components = require("pragmate-ui/components");
          function ChoiceRole({
            item,
            setRemoved
          }) {
            const [roleSelected, changeRoleSelected] = _react.default.useState('member');
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const options = [{
              value: 'member',
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
            }];
            const onProcess = async event => {
              event.preventDefault();
              const {
                action
              } = event.currentTarget.dataset;
              if (!store[action]) {
                console.error('action not found', action);
                return;
              }
              try {
                await store[action]({
                  uid: item.uid,
                  role: roleSelected
                });
                setRemoved(true);
                _toast.toast.success(texts.messages.approval.success);
              } catch (e) {
                _toast.toast.error(texts.messages.approval.error);
              }
            };
            if (item.invited) return null;
            const handleRoleChange = event => changeRoleSelected(event.target.value);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "div-select__button"
            }, _react.default.createElement(_reactSelect.ReactSelect, {
              className: "select-option",
              options: options,
              value: roleSelected,
              onChange: handleRoleChange
            })), _react.default.createElement(_components.Button, {
              disabled: !roleSelected,
              variant: "primary",
              "data-action": "approve",
              onClick: onProcess,
              bordered: true
            }, texts.actions.approve), _react.default.createElement(_components.Button, {
              variant: "error",
              "data-action": "reject",
              disabled: true,
              onClick: onProcess
            }, texts.actions.reject));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/list/approval/index
      *******************************************/

      ims.set('./views/list/approval/index', {
        hash: 1643823951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApprovalList = ApprovalList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _empty = require("../empty");
          var _item = require("./item");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ApprovalList({
            type
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const data = store.model[type];
            const labels = texts.list[type];
            const [items, setItems] = _react.default.useState(data);
            (0, _hooks.useBinder)([store.model], () => setItems([...store.model[type]]), `member.invited`);
            if (!items.length) return _react.default.createElement(_empty.EmptyList, null);
            return _react.default.createElement("div", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("h4", null, labels.title)), _react.default.createElement(_list.List, {
              items: items,
              control: _item.Item
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/list/approval/item
      ******************************************/

      ims.set('./views/list/approval/item', {
        hash: 143904859,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("pragmate-ui/icons");
          var _choiceRole = require("./choice-role");
          var _framerMotion = require("framer-motion");
          function Item({
            item
          }) {
            const [removed, setRemoved] = _react.default.useState(false);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, !removed && _react.default.createElement(_framerMotion.motion.li, {
              key: item.id,
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              },
              className: `person-item__container ${item.invited && !item.authorized && ' invited'}`
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, item?.photoUrl ? _react.default.createElement(_image.Image, {
              src: item?.photoUrl
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: 'user'
            }), _react.default.createElement("div", null, _react.default.createElement("h5", null, item.name), _react.default.createElement("span", null, item.email))), _react.default.createElement("section", {
              className: "actions_buttons"
            }, _react.default.createElement(_choiceRole.ChoiceRole, {
              item: item,
              setRemoved: setRemoved
            }))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/list/approval/pending-data
      **************************************************/

      ims.set('./views/list/approval/pending-data', {
        hash: 3084286369,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingData = PendingData;
          var _react = require("react");
          var _context = require("../../context");
          function PendingData({
            item
          }) {
            if (!item.invited) return null;
            const {
              texts
            } = (0, _context.useModuleContext)();
            const role = item.role === 'member' ? texts.list.members.role : texts.list.managers.role;
            return _react.default.createElement(_react.default.Fragment, null);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 3228659036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _context = require("../context");
          var _invitationForm = require("./people/invitation-form");
          var _components = require("pragmate-ui/components");
          function EmptyList({
            role = undefined
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const labels = texts.list[role];
            if (!labels) return null;
            const pending = !!role;
            const toggleModal = () => setShow(!show);
            const emptyText = pending ? texts.empty.labelList.replace('%action', `"${texts.actions.invite}"`) : texts.empty.pending;
            return _react.default.createElement("section", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("h4", null, labels.title), role && _react.default.createElement(_components.Button, {
              icon: "add",
              label: texts.actions.invite,
              className: "add",
              onClick: toggleModal
            })), _react.default.createElement("div", {
              className: "person-item__container flex-container flex-center"
            }, _react.default.createElement("span", {
              className: "p2"
            }, " ", emptyText)), _react.default.createElement(_invitationForm.InvitationForm, {
              show: show,
              role: role,
              onClose: toggleModal
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/people/index
      *****************************************/

      ims.set('./views/list/people/index', {
        hash: 2583108385,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PeopleList = PeopleList;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          var _empty = require("../empty");
          var _invitationForm = require("./invitation-form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function PeopleList({
            role
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [items, setItems] = _react.default.useState([...store[role]]);
            const labels = texts.list[role];
            const toggleModal = () => setShow(!show);
            (0, _hooks.useBinder)([store.model], () => setItems([...store[role]]), `model.${role}.invited`);
            if (!items.length) return _react.default.createElement(_empty.EmptyList, {
              role: role
            });
            return _react.default.createElement("section", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("h4", null, labels.title), role && store.isAdmin && _react.default.createElement(_components.Button, {
              icon: "add",
              label: texts.actions.invite,
              className: "add",
              onClick: toggleModal
            })), _react.default.createElement(_list.List, {
              items: items,
              control: _item.Item
            }), _react.default.createElement(_invitationForm.InvitationForm, {
              show: show,
              role: role,
              onClose: toggleModal
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/list/people/invitation-form
      ***************************************************/

      ims.set('./views/list/people/invitation-form', {
        hash: 3603818944,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitationForm = InvitationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          function InvitationForm({
            show,
            onClose,
            role
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const defaultValues = {
              name: '',
              email: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const roleType = {
              managers: 'manager',
              members: 'member'
            };
            const handleClose = () => {
              setValues(defaultValues);
              setError('');
              setLoading(false);
              onClose();
            };
            const onSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await store.invite({
                ...values,
                role: roleType[role]
              });
              if (!response.status) {
                setError(response.error);
                _toast.toast.success(error);
              }
              _toast.toast.success(texts.system.invite.success);
              handleClose();
            };
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            if (!show) return null;
            const modalTitle = texts.modal.invite.title.replace('%role', texts.list[role].role);
            const {
              name,
              email
            } = values;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: handleClose
            }, _react.default.createElement("header", {
              className: "modal-form__header"
            }, _react.default.createElement("h3", null, modalTitle)), _react.default.createElement(_form.Form, {
              className: "mt-15",
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              label: "Name",
              type: "text",
              name: "name",
              value: name,
              onChange: handleChange,
              placeholder: "Input user name",
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: "Input user email",
              label: "Email",
              variant: "floating",
              type: "email",
              name: "email",
              onChange: handleChange,
              required: true
            }), _react.default.createElement("div", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              label: "Submit"
            }))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/list/people/item/actions
      ************************************************/

      ims.set('./views/list/people/item/actions', {
        hash: 1144967308,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _edition = require("./edition");
          var _context = require("../../../context");
          function ItemActions({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            if (!store.isAdmin) return null;
            return _react.default.createElement("div", {
              className: "actions_buttons"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: toggleModal
            }, texts.actions.edit), _react.default.createElement(_icons.IconButton, {
              icon: "moreVert",
              disabled: true,
              className: "circle"
            }), _react.default.createElement(_edition.EditionModal, {
              item: item,
              show: show,
              onClose: toggleModal
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/list/people/item/edition
      ************************************************/

      ims.set('./views/list/people/item/edition', {
        hash: 3086394599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EditionModal = EditionModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function EditionModal({
            item,
            show,
            onClose
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [selectRole, setSelectRole] = _react.default.useState(item.role || 'teacher');
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.updateRole({
                  role: selectRole,
                  uid: item.uid
                });
                _toast.toast.success(texts.system.invite.success);
              } catch (e) {
                _toast.toast.error('Error: Updating role');
                console.error(e);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'teacher',
              label: texts.list.members.single
            }, {
              value: 'manager',
              label: texts.list.managers.single
            }];
            const handleRoleChange = event => {
              setSelectRole(event.target.value);
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("span", {
              className: "h4"
            }, texts.modal.edit.title), _react.default.createElement("p", {
              className: "p2"
            }, texts.modal.edit.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, texts.actions.save))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/list/people/item/index
      **********************************************/

      ims.set('./views/list/people/item/index', {
        hash: 3553388604,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("pragmate-ui/icons");
          var _actions = require("./actions");
          function Item({
            item
          }) {
            return _react.default.createElement("li", {
              key: item.id,
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, item?.photoUrl ? _react.default.createElement(_image.Image, {
              src: item?.photoUrl
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: 'user'
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement(_actions.ItemActions, {
              item: item
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsImlzQWRtaW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwiZmluZCIsIm9yZyIsImlkIiwicm9sZSIsImVycm9yTG9hZGluZyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJPcmdhbml6YXRpb24iLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsIm1hbmFnZW1lbnQiLCJ1bmRlZmluZWQiLCJjb24iLCJzcGVjcyIsImRhdGEiLCJlIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJFcnJvciIsImludml0ZSIsImFwcHJvdmUiLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbmF2YmFySGVhZGVyIiwiX3VpIiwiRW1wdHlPcmdhbml6YXRpb24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImljb24iLCJfY29udGV4dCIsIl9pY29ucyIsIl90b2FzdCIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsImV2ZW50IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJjbGFzc05hbWUiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsImFjdGlvbnMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJ0YXJnZXQiLCJuYW1lIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsImFzIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfcGVvcGxlIiwiX2FwcHJvdmFsIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQXBwcm92YWxMaXN0IiwidHlwZSIsIlBlb3BsZUxpc3QiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNldFJlbW92ZWQiLCJyb2xlU2VsZWN0ZWQiLCJjaGFuZ2VSb2xlU2VsZWN0ZWQiLCJvcHRpb25zIiwibGFiZWwiLCJsaXN0Iiwib25Qcm9jZXNzIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJ1aWQiLCJhcHByb3ZhbCIsImludml0ZWQiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSb2xlIiwiX2ZyYW1lck1vdGlvbiIsInJlbW92ZWQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJsaSIsImtleSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsIl9lZGl0aW9uIiwiSXRlbUFjdGlvbnMiLCJlZGl0IiwiRWRpdGlvbk1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJzaW5nbGUiLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwiX2FjdGlvbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9jaG9pY2Utcm9sZS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL3BlbmRpbmctZGF0YS50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2ludml0YXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdB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