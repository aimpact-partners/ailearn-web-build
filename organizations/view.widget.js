System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-16/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-16/components/navbar-header.code", "@aimpact/ailearn-app@0.0.46.dev-16/components/ui", "@aimpact/ailearn-app@0.0.46.dev-16/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0046Dev16MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev16MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0046Dev16ComponentsNavbarHeaderCode) {
      dependency_10 = _aimpactAilearnApp0046Dev16ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0046Dev16ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0046Dev16ComponentsUi;
    }, function (_aimpactAilearnApp0046Dev16Config) {
      dependency_12 = _aimpactAilearnApp0046Dev16Config;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_14 = _pragmateUi011Toast;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_17 = _pragmateUi011FormReactSelect;
    }, function (_pragmateUi011Components) {
      dependency_18 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_19 = _pragmateUi011List;
    }, function (_pragmateUi011Image) {
      dependency_20 = _pragmateUi011Image;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi011Form) {
      dependency_22 = _pragmateUi011Form;
    }, function (_pragmateUi011Modal) {
      dependency_23 = _pragmateUi011Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-16"], ["@aimpact/ailearn-app", "0.0.46.dev-16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-16/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/toast', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-16/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-16/organizations/view.widget');
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
        hash: 1007516753,
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
        hash: 3092822369,
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
          var _config = require("@aimpact/ailearn-app/config");
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
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/organizations/join?code=${code}`);
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
        hash: 988023841,
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
            return _react.default.createElement("header", {
              className: "page-container__header"
            }, _react.default.createElement("div", {
              className: "cover-content__container"
            }, _react.default.createElement(_ui.ContentEditable, {
              as: "h1",
              name: "title",
              onSave: onSave,
              placeholder: texts.name,
              content: store.model.name,
              editable: store.isAdmin
            }), _react.default.createElement(_ui.ContentEditable, {
              as: "p",
              name: "title",
              onSave: onSave,
              placeholder: texts.description,
              content: store.model.description,
              editable: store.isAdmin
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
        hash: 976751100,
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
            if (store.model.found && !store.model.hasAccess) {
              return _react.default.createElement("app-not-allowed", null);
            }
            if (!store.model.found) return _react.default.createElement("app-missing-element", null);
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
        hash: 675757176,
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
            (0, _hooks.useBinder)([store.model], () => setItems([...store.model[type]]), [`member.invited`, 'model.pendings.list.changed']);
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
        hash: 1150873522,
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
              console.log(1);
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
              closeBackdrop: false,
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
        hash: 1015060535,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
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
            }, texts.actions.edit), _react.default.createElement(_edition.EditionModal, {
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
        hash: 3766980633,
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
              onClose: onClose,
              closeBackdrop: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsImlzQWRtaW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwiZmluZCIsIm9yZyIsImlkIiwicm9sZSIsImVycm9yTG9hZGluZyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJPcmdhbml6YXRpb24iLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsIm1hbmFnZW1lbnQiLCJ1bmRlZmluZWQiLCJjb24iLCJzcGVjcyIsImRhdGEiLCJlIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJFcnJvciIsImludml0ZSIsImFwcHJvdmUiLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbmF2YmFySGVhZGVyIiwiX3VpIiwiRW1wdHlPcmdhbml6YXRpb24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImljb24iLCJfY29udGV4dCIsIl9pY29ucyIsIl90b2FzdCIsIl9jb25maWciLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImJhc2VVcmwiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJjbGFzc05hbWUiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsImFjdGlvbnMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJ0YXJnZXQiLCJuYW1lIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsImFzIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiZWRpdGFibGUiLCJkZXNjcmlwdGlvbiIsIl9ob29rcyIsIl9jb21wb25lbnRzIiwiX2hlYWRlciIsIl9wZW9wbGUiLCJfYXBwcm92YWwiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiUGVvcGxlTGlzdCIsIl9yZWFjdFNlbGVjdCIsIkNob2ljZVJvbGUiLCJpdGVtIiwic2V0UmVtb3ZlZCIsInJvbGVTZWxlY3RlZCIsImNoYW5nZVJvbGVTZWxlY3RlZCIsIm9wdGlvbnMiLCJsYWJlbCIsImxpc3QiLCJvblByb2Nlc3MiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIlJlYWN0U2VsZWN0IiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsImxhYmVscyIsIml0ZW1zIiwic2V0SXRlbXMiLCJsZW5ndGgiLCJFbXB0eUxpc3QiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfaW1hZ2UiLCJfY2hvaWNlUm9sZSIsIl9mcmFtZXJNb3Rpb24iLCJyZW1vdmVkIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwibGkiLCJrZXkiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib3BhY2l0eSIsImF1dGhvcml6ZWQiLCJwaG90b1VybCIsIkltYWdlIiwic3JjIiwiSWNvbiIsImVtYWlsIiwiUGVuZGluZ0RhdGEiLCJfaW52aXRhdGlvbkZvcm0iLCJzZXRTaG93IiwicGVuZGluZyIsInRvZ2dsZU1vZGFsIiwiZW1wdHlUZXh0IiwibGFiZWxMaXN0IiwicmVwbGFjZSIsIkludml0YXRpb25Gb3JtIiwib25DbG9zZSIsIl9mb3JtIiwiX21vZGFsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJyb2xlVHlwZSIsImhhbmRsZUNsb3NlIiwib25TdWJtaXQiLCJsb2ciLCJyZXNwb25zZSIsInN5c3RlbSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsIm1vZGFsVGl0bGUiLCJtb2RhbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiX2VkaXRpb24iLCJJdGVtQWN0aW9ucyIsImVkaXQiLCJFZGl0aW9uTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInNpbmdsZSIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJfYWN0aW9ucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1yb2xlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFK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