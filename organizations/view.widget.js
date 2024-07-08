System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.0.52/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.52/components/navbar-header.code", "@aimpact/ailearn-app@0.0.52/components/ui", "@aimpact/ailearn-app@0.0.52/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_aimpactChatSdk101Session) {
      dependency_6 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnApp0052MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0052MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi011Alert) {
      dependency_10 = _pragmateUi011Alert;
    }, function (_aimpactAilearnApp0052ComponentsNavbarHeaderCode) {
      dependency_11 = _aimpactAilearnApp0052ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0052ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0052ComponentsUi;
    }, function (_aimpactAilearnApp0052Config) {
      dependency_13 = _aimpactAilearnApp0052Config;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_15 = _pragmateUi011Toast;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedComponents) {
      dependency_17 = _aimpactChat102SharedComponents;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.52"], ["@aimpact/ailearn-app", "0.0.52"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.52/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/toast', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/image', dependency_21], ['framer-motion', dependency_22], ['pragmate-ui/form', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.52/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.52/organizations/view.widget');
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
        hash: 714676006,
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

      /*****************************
      INTERNAL MODULE: ./views/coins
      *****************************/

      ims.set('./views/coins', {
        hash: 3810624130,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntityCoins = EntityCoins;
          var _react = require("react");
          var _context = require("./context");
          var _alert = require("pragmate-ui/alert");
          function EntityCoins() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              model
            } = store;
            if (!model.coins) return null;
            return _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "profile-coins__section mt-15"
            }, _react.default.createElement("h3", null, texts.coins.label), _react.default.createElement("div", {
              className: "coins-detail__container"
            }, _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.assignments), _react.default.createElement("span", null, model.coins.assignments.count)), _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.modules), _react.default.createElement("span", null, model.coins.modules.count))));
          }
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
        hash: 4028184836,
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
          var _coins = require("./coins");
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
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_coins.EntityCoins, null), _react.default.createElement("div", {
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
        hash: 316032393,
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
        hash: 1226103164,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _actions = require("./actions");
          function Item({
            item
          }) {
            return _react.default.createElement("li", {
              key: item.id,
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsImlzQWRtaW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwiZmluZCIsIm9yZyIsImlkIiwicm9sZSIsImVycm9yTG9hZGluZyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJPcmdhbml6YXRpb24iLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsIm1hbmFnZW1lbnQiLCJ1bmRlZmluZWQiLCJzcGVjcyIsImRhdGEiLCJlIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJFcnJvciIsImludml0ZSIsImFwcHJvdmUiLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfYWxlcnQiLCJFbnRpdHlDb2lucyIsInVzZU1vZHVsZUNvbnRleHQiLCJjb2lucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJhc3NpZ25tZW50cyIsImNvdW50IiwibW9kdWxlcyIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9uYXZiYXJIZWFkZXIiLCJfdWkiLCJFbXB0eU9yZ2FuaXphdGlvbiIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJpY29uIiwiX2ljb25zIiwiX3RvYXN0IiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYmFzZVVybCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiYWN0aW9ucyIsImRpc2FibGVkIiwib25DbGljayIsIl9jb2RlU2VjdGlvbiIsIkhlYWRlckNvbnRhaW5lciIsIm9uU2F2ZSIsInRhcmdldCIsIm5hbWUiLCJqb2luIiwiQ29udGVudEVkaXRhYmxlIiwiYXMiLCJwbGFjZWhvbGRlciIsImNvbnRlbnQiLCJlZGl0YWJsZSIsImRlc2NyaXB0aW9uIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfaGVhZGVyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsIl9jb2lucyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJmb3VuZCIsImhhc0FjY2VzcyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFwcHJvdmFsTGlzdCIsIlBlb3BsZUxpc3QiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNldFJlbW92ZWQiLCJyb2xlU2VsZWN0ZWQiLCJjaGFuZ2VSb2xlU2VsZWN0ZWQiLCJvcHRpb25zIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ1aWQiLCJhcHByb3ZhbCIsImludml0ZWQiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSb2xlIiwiX2ZyYW1lck1vdGlvbiIsInJlbW92ZWQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJsaSIsImtleSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsIklucHV0IiwicmVxdWlyZWQiLCJfZWRpdGlvbiIsIkl0ZW1BY3Rpb25zIiwiZWRpdCIsIkVkaXRpb25Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic2luZ2xlIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsIl9hY3Rpb25zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29pbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1yb2xlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRCxJQUFBZSxLQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsUUFBQSxHQUFBcEIsT0FBQTtVQUNBLElBQUFxQixXQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsZUFBQSxHQUFBdkIsT0FBQTtVQUNNLE1BQU9PLFlBQWEsU0FBUVksTUFBQSxDQUFBSyxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxVQUFXLEdBQWEsRUFBRTtZQUMxQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxRQUFRO1lBQzNCO1lBRUEsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDSixLQUFLLENBQUNJLFFBQVE7WUFDM0I7WUFFQSxJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ0ssT0FBTztZQUMxQjtZQUVBLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPWCxRQUFBLENBQUFZLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQVgsTUFBTyxDQUFDLEVBQUVZLElBQUksS0FBSyxTQUFTO1lBQ2xHO1lBQ0EsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsQ0FBQUMsS0FBTSxHQUErQixJQUFJbEIsTUFBQSxDQUFBbUIsWUFBWSxDQUFDbEIsZUFBQSxDQUFBbUIsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUVBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNLLEtBQUs7WUFDeEM7WUFFQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUF2QixLQUFNLEdBQUcsSUFBSVAsS0FBQSxDQUFBK0IsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNuQztZQUVBQyxhQUFhQSxDQUFBO2NBQ1osTUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0QsYUFBYSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO2NBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDSyxLQUFLLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNPLEVBQUUsQ0FBQyxRQUFRLEVBQUVJLFFBQVEsQ0FBQztnQkFDbEM7O2NBRUQsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ2EsR0FBRyxDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDO2NBQ25DOUIsV0FBQSxDQUFBaUMsWUFBWSxDQUFDQyxPQUFPLEdBQUcsS0FBSztjQUM1QkMsVUFBVSxDQUFDQyxVQUFVLENBQUMsTUFBSztnQkFDMUJwQyxXQUFBLENBQUFpQyxZQUFZLENBQUNJLFVBQVUsR0FBRyxDQUN6QixDQUFDLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQ3hCLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxFQUM1RCxDQUFDLElBQUksQ0FBQ00sS0FBSyxDQUFDa0IsVUFBVSxDQUFDQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQ3RDO2NBQ0YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNSO1lBRUEzQyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUFTLEtBQU0sR0FBR21DLFNBQVM7Y0FDdkIsS0FBSyxDQUFDZixLQUFLLEdBQUcsS0FBSztZQUNwQjtZQUVBLE1BQU1sQyxJQUFJQSxDQUFDMEIsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsS0FBSyxDQUFDUSxLQUFLLEdBQUcsS0FBSztnQkFDbkIsSUFBSSxDQUFDSyxhQUFhLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBeEIsTUFBTyxHQUFHVyxFQUFFO2dCQUNqQixNQUFNd0IsS0FBSyxHQUFHO2tCQUFFeEI7Z0JBQUUsQ0FBRTtnQkFDcEIsSUFBSSxDQUFDLENBQUFaLEtBQU0sR0FBRyxJQUFJUCxLQUFBLENBQUErQixZQUFZLENBQUNZLEtBQUssQ0FBQztnQkFFckMsSUFBSXhCLEVBQUUsRUFBRTtrQkFDUCxNQUFNeUIsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFyQyxLQUFNLENBQUNkLElBQUksQ0FBQztvQkFBRTBCO2tCQUFFLENBQUUsQ0FBQzs7ZUFFNUMsQ0FBQyxPQUFPMEIsQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQyxDQUFBeEIsWUFBYSxHQUFHd0IsQ0FBQztlQUN0QixTQUFTO2dCQUNULEtBQUssQ0FBQ2xCLEtBQUssR0FBRyxJQUFJOztZQUVwQjtZQUVBLE1BQU1tQixNQUFNQSxDQUFDM0IsRUFBRTtjQUNkLElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUN3QyxVQUFVLENBQUNDLE1BQU0sQ0FBQzdCLEVBQUUsQ0FBQztjQUNqQyxJQUFJLENBQUM4QixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQ0MsTUFBTTtjQUNoQixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1ULEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQW5DLE1BQU8sS0FBSyxLQUFLLEdBQUc7a0JBQUUsR0FBRzJDLE1BQU07a0JBQUVoQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFYO2dCQUFPLENBQUUsR0FBRzJDLE1BQU07Z0JBQy9FLE1BQU07a0JBQUVFLE1BQU07a0JBQUVUO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQ3JDLEtBQUssQ0FBQzJDLElBQUksQ0FBQ1AsS0FBSyxDQUFDO2dCQUVyRCxJQUFJLENBQUNVLE1BQU0sRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQztnQkFFN0QsT0FBT1YsSUFBSTtlQUNYLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSVMsS0FBSyxDQUFDVCxDQUFDLENBQUM7ZUFDbEIsU0FBUztnQkFDVCxJQUFJLENBQUNPLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1HLE1BQU1BLENBQUNKLE1BQU07Y0FDbEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNO2tCQUFFQyxNQUFNO2tCQUFFVDtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUNyQyxLQUFLLENBQUNnRCxNQUFNLENBQUNKLE1BQU0sQ0FBQztnQkFDeEQsSUFBSSxDQUFDRSxNQUFNLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMscUJBQXFCLENBQUM7Z0JBQ25ELE9BQU9WLElBQUk7ZUFDWCxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlTLEtBQUssQ0FBQ1QsQ0FBQyxDQUFDO2VBQ2xCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNSSxPQUFPQSxDQUFDTCxNQUFNO2NBQ25CLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTUssR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDbEQsS0FBSyxDQUFDaUQsT0FBTyxDQUFDTCxNQUFNLENBQUM7Z0JBRTVDLElBQUksQ0FBQ00sR0FBRyxDQUFDSixNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztnQkFHdkMsT0FBT0csR0FBRztlQUNWLENBQUMsT0FBT1osQ0FBQyxFQUFFO2dCQUNYYSxPQUFPLENBQUNDLEtBQUssQ0FBQ2QsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNUSxNQUFNQSxDQUFDVCxNQUFNO2NBQ2xCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTUssR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDbEQsS0FBSyxDQUFDcUQsTUFBTSxDQUFDVCxNQUFNLENBQUM7Z0JBQzNDLE9BQU9NLEdBQUc7ZUFDVixDQUFDLE9BQU9aLENBQUMsRUFBRTtnQkFDWGEsT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFZCxDQUFDLENBQUM7ZUFDbkIsU0FBUztnQkFDVCxJQUFJLENBQUNPLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1TLFVBQVVBLENBQUNWLE1BQU07Y0FDdEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNSyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUNsRCxLQUFLLENBQUNzRCxVQUFVLENBQUNWLE1BQU0sQ0FBQztnQkFFL0MsT0FBT00sR0FBRztlQUNWLENBQUMsT0FBT1osQ0FBQyxFQUFFO2dCQUNYYSxPQUFPLENBQUNDLEtBQUssQ0FBQ2QsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0FyRCxPQUFBLENBQUFWLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzS0QsSUFBQXlFLE1BQUEsR0FBQWhGLE9BQUE7VUFFQSxJQUFBaUYsUUFBQSxHQUFBakYsT0FBQTtVQUNBLElBQUFrRixNQUFBLEdBQUFsRixPQUFBO1VBRU0sU0FBVW1GLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFOUUsS0FBSztjQUFFbUM7WUFBSyxDQUFFLEdBQUcsSUFBQXlDLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFM0Q7WUFBSyxDQUFFLEdBQUdwQixLQUFLO1lBQ3ZCLElBQUksQ0FBQ29CLEtBQUssQ0FBQzRELEtBQUssRUFBRSxPQUFPLElBQUk7WUFDN0IsT0FDQ0wsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBTSxLQUFLO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLFNBQVMsRUFBQztZQUE4QixHQUMxRFYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsYUFBSy9DLEtBQUssQ0FBQzZDLEtBQUssQ0FBQ00sS0FBSyxDQUFNLEVBRTVCWCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNWLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFxQixHQUNuQ1YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsZUFBTy9DLEtBQUssQ0FBQzZDLEtBQUssQ0FBQ08sV0FBVyxDQUFRLEVBQ3RDWixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxlQUFPOUQsS0FBSyxDQUFDNEQsS0FBSyxDQUFDTyxXQUFXLENBQUNDLEtBQUssQ0FBUSxDQUN2QyxFQUNOYixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBcUIsR0FDbkNWLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGVBQU8vQyxLQUFLLENBQUM2QyxLQUFLLENBQUNTLE9BQU8sQ0FBUSxFQUNsQ2QsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsZUFBTzlELEtBQUssQ0FBQzRELEtBQUssQ0FBQ1MsT0FBTyxDQUFDRCxLQUFLLENBQVEsQ0FDbkMsQ0FDRCxDQUNDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFiLE1BQUEsR0FBQWhGLE9BQUE7VUFTTyxNQUFNK0YsYUFBYSxHQUFBOUUsT0FBQSxDQUFBOEUsYUFBQSxHQUFHZixNQUFBLENBQUFNLE9BQUssQ0FBQ1UsYUFBYSxDQUFDLEVBQXlCLENBQUM7VUFDcEUsTUFBTVosZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBTSxPQUFLLENBQUNXLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUM5RSxPQUFBLENBQUFtRSxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWdEUsSUFBQUosTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFrRyxhQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLEdBQUEsR0FBQW5HLE9BQUE7VUFHTSxTQUFVb0csaUJBQWlCQSxDQUFDO1lBQUU1RDtVQUFLLENBQUU7WUFDMUMsT0FDQ3dDLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUFQLE1BQUEsQ0FBQU0sT0FBQSxDQUFBZSxRQUFBLFFBQ0NyQixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxhQUFBLENBQUFJLFlBQVk7Y0FBQzVDLFVBQVUsRUFBRSxDQUFDLENBQUNsQixLQUFLLENBQUNrQixVQUFVLENBQUN4QixhQUFhLEVBQUUscUJBQXFCLENBQUM7WUFBQyxFQUFJLEVBQ3ZGOEMsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksR0FBQSxDQUFBSSxTQUFTO2NBQUNDLElBQUksRUFBRWhFLEtBQUssQ0FBQ2lFLEtBQUssQ0FBQ0MsS0FBSztjQUFFQyxJQUFJLEVBQUM7WUFBUSxFQUFHLENBQ2xEO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkEsSUFBQTNCLE1BQUEsR0FBQWhGLE9BQUE7VUFFQSxJQUFBaUYsUUFBQSxHQUFBakYsT0FBQTtVQUNBLElBQUE0RyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTZHLE1BQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBOEcsT0FBQSxHQUFBOUcsT0FBQTtVQUNNLFNBQVUrRyxXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRTFHLEtBQUs7Y0FBRW1DO1lBQUssQ0FBRSxHQUFHLElBQUF5QyxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQzNDLE1BQU07Y0FBRTRCO1lBQUksQ0FBRSxHQUFHM0csS0FBSyxDQUFDb0IsS0FBSyxDQUFDd0YsU0FBUztZQUV0QyxNQUFNQyxlQUFlLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ3JDLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN2QixNQUFNQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLEdBQUdULE9BQUEsQ0FBQXhCLE9BQU0sQ0FBQzVELE1BQU0sQ0FBQzhGLE9BQU8sNEJBQTRCUixJQUFJLEVBQUUsQ0FBQztnQkFDL0ZILE1BQUEsQ0FBQVksS0FBSyxDQUFDQyxPQUFPLENBQUNsRixLQUFLLENBQUNtRixRQUFRLENBQUNDLElBQUksQ0FBQztlQUNsQyxDQUFDLE9BQU9DLEdBQUcsRUFBRTtnQkFDYmpELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDckMsS0FBSyxDQUFDc0YsU0FBUyxFQUFFRCxHQUFHLENBQUM7O1lBRXJDLENBQUM7WUFFRCxPQUNDN0MsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXFCLEdBQ25DVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBYyxHQUNoQ1YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQWEsR0FBRWxELEtBQUssQ0FBQ3VGLE9BQU8sQ0FBUSxFQUNwRC9DLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1HLFNBQVMsRUFBQztZQUFZLEdBQUVzQixJQUFJLENBQVEsQ0FDakMsRUFDVmhDLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNxQixNQUFBLENBQUFvQixVQUFVO2NBQUEsYUFDQzNILEtBQUssQ0FBQ29CLEtBQUssQ0FBQ3dGLFNBQVMsRUFBRUQsSUFBSTtjQUN0Q04sS0FBSyxFQUFFbEUsS0FBSyxDQUFDeUYsT0FBTyxDQUFDTCxJQUFJO2NBQ3pCbEMsU0FBUyxFQUFDLGNBQWM7Y0FDeEJpQixJQUFJLEVBQUMsTUFBTTtjQUNYdUIsUUFBUSxFQUFFLENBQUM3SCxLQUFLLENBQUNvQixLQUFLLENBQUN3RixTQUFTLEVBQUVELElBQUk7Y0FDdENtQixPQUFPLEVBQUVqQjtZQUFlLEVBQ3ZCLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0EsSUFBQWxDLE1BQUEsR0FBQWhGLE9BQUE7VUFFQSxJQUFBbUcsR0FBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFpRixRQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQW9JLFlBQUEsR0FBQXBJLE9BQUE7VUFIQTs7VUFLTSxTQUFVcUksZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVoSSxLQUFLO2NBQUVtQztZQUFLLENBQUUsR0FBRyxJQUFBeUMsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNa0QsTUFBTSxHQUFHQSxDQUFDO2NBQUVDO1lBQU0sQ0FBRSxLQUFLbEksS0FBSyxDQUFDb0IsS0FBSyxDQUFDMkMsSUFBSSxDQUFDO2NBQUUsQ0FBQ21FLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHRCxNQUFNLENBQUMzRjtZQUFLLENBQUUsQ0FBQztZQUNoRixNQUFNO2NBQUVvRTtZQUFJLENBQUUsR0FBRzNHLEtBQUssQ0FBQ29CLEtBQUssQ0FBQ2dILElBQUk7WUFFakMsT0FDQ3pELE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUF3QixHQUN6Q1YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQTBCLEdBQ3hDVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxHQUFBLENBQUF1QyxlQUFlO2NBQ2ZDLEVBQUUsRUFBQyxJQUFJO2NBQ1BILElBQUksRUFBQyxPQUFPO2NBQ1pGLE1BQU0sRUFBRUEsTUFBTTtjQUNkTSxXQUFXLEVBQUVwRyxLQUFLLENBQUNnRyxJQUFJO2NBQ3ZCSyxPQUFPLEVBQUV4SSxLQUFLLENBQUNvQixLQUFLLENBQUMrRyxJQUFJO2NBQ3pCTSxRQUFRLEVBQUV6SSxLQUFLLENBQUMwQjtZQUFPLEVBQ3RCLEVBQ0ZpRCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxHQUFBLENBQUF1QyxlQUFlO2NBQ2ZDLEVBQUUsRUFBQyxHQUFHO2NBQ05ILElBQUksRUFBQyxPQUFPO2NBQ1pGLE1BQU0sRUFBRUEsTUFBTTtjQUNkTSxXQUFXLEVBQUVwRyxLQUFLLENBQUN1RyxXQUFXO2NBQzlCRixPQUFPLEVBQUV4SSxLQUFLLENBQUNvQixLQUFLLENBQUNzSCxXQUFXO2NBQ2hDRCxRQUFRLEVBQUV6SSxLQUFLLENBQUMwQjtZQUFPLEVBQ3RCLENBQ0csRUFFTmlELE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFxQyxHQUNuRFYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZDLFlBQUEsQ0FBQXJCLFdBQVcsT0FBRyxDQUNWLENBQ0U7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQS9CLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBbUcsR0FBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFpRixRQUFBLEdBQUFqRixPQUFBO1VBR0EsSUFBQWdKLE1BQUEsR0FBQWhKLE9BQUE7VUFDQSxJQUFBaUosV0FBQSxHQUFBakosT0FBQTtVQUNBLElBQUFrSixPQUFBLEdBQUFsSixPQUFBO1VBQ0EsSUFBQW1KLE9BQUEsR0FBQW5KLE9BQUE7VUFDQSxJQUFBb0osU0FBQSxHQUFBcEosT0FBQTtVQUNBLElBQUFxSixNQUFBLEdBQUFySixPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDaUUsUUFBUSxFQUFFZ0YsV0FBVyxDQUFDLEdBQUd0RSxNQUFBLENBQUFNLE9BQUssQ0FBQ2lFLFFBQVEsQ0FBQ2xKLEtBQUssQ0FBQ2lFLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUN6QixLQUFLLEVBQUUyRyxRQUFRLENBQUMsR0FBR3hFLE1BQUEsQ0FBQU0sT0FBSyxDQUFDaUUsUUFBUSxDQUFDbEosS0FBSyxDQUFDd0MsS0FBSyxDQUFDO1lBQ3JELE1BQU07Y0FBRUw7WUFBSyxDQUFFLEdBQUduQyxLQUFLO1lBQ3ZCLElBQUEySSxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDcEosS0FBSyxDQUFDb0IsS0FBSyxDQUFDLEVBQUUsTUFBTTZILFdBQVcsQ0FBQ2pKLEtBQUssQ0FBQ29CLEtBQUssRUFBRTZDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLElBQUEwRSxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDcEosS0FBSyxDQUFDLEVBQUUsTUFBTW1KLFFBQVEsQ0FBQ25KLEtBQUssQ0FBQ3dDLEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQ0EsS0FBSyxFQUFFLE9BQU9tQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEQsV0FBQSxDQUFBUyxhQUFhLE9BQUc7WUFFcEMsSUFBSXJKLEtBQUssQ0FBQ29CLEtBQUssQ0FBQ2tJLEtBQUssSUFBSSxDQUFDdEosS0FBSyxDQUFDb0IsS0FBSyxDQUFDbUksU0FBUyxFQUFFO2NBQ2hELE9BQU81RSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSx5QkFBbUI7O1lBRTNCLElBQUksQ0FBQ2xGLEtBQUssQ0FBQ29CLEtBQUssQ0FBQ2tJLEtBQUssRUFBRSxPQUFPM0UsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsNkJBQXVCO1lBRXRELE1BQU0zQyxLQUFLLEdBQUc7Y0FBRXZDLEtBQUs7Y0FBRWlFLFFBQVE7Y0FBRTlCO1lBQUssQ0FBRTtZQUV4QyxPQUNDd0MsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sUUFBQSxDQUFBYyxhQUFhLENBQUM4RCxRQUFRO2NBQUNqSCxLQUFLLEVBQUVBO1lBQUssR0FDbkNvQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxHQUFBLENBQUEyRCxhQUFhO2NBQUNwRSxTQUFTLEVBQUMsZ0NBQWdDO2NBQUNwQixRQUFRLEVBQUVBO1lBQVEsR0FDM0VVLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMyRCxPQUFBLENBQUFiLGVBQWUsT0FBRyxFQUNuQnJELE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUM4RCxNQUFBLENBQUFsRSxXQUFXLE9BQUcsRUFDZkgsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXNCLEdBQ3BDVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkQsU0FBQSxDQUFBVyxZQUFZO2NBQUN0RSxJQUFJLEVBQUM7WUFBVSxFQUFHLEVBQ2hDVCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEQsT0FBQSxDQUFBYSxVQUFVO2NBQUMxSCxJQUFJLEVBQUM7WUFBUyxFQUFHLEVBQzdCMEMsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELE9BQUEsQ0FBQWEsVUFBVTtjQUFDMUgsSUFBSSxFQUFDO1lBQVUsRUFBRyxDQUN6QixDQUNTLENBQ1E7VUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUEwQyxNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlGLFFBQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBNkcsTUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUFpSyxZQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQWlKLFdBQUEsR0FBQWpKLE9BQUE7VUFDTSxTQUFVa0ssVUFBVUEsQ0FBQztZQUFFQyxJQUFJO1lBQUVDO1VBQVUsQ0FBRTtZQUM5QyxNQUFNLENBQUNDLFlBQVksRUFBRUMsa0JBQWtCLENBQUMsR0FBR3RGLE1BQUEsQ0FBQU0sT0FBSyxDQUFDaUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUVuRSxNQUFNO2NBQUUvRyxLQUFLO2NBQUVuQztZQUFLLENBQUUsR0FBRyxJQUFBNEUsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNbUYsT0FBTyxHQUFHLENBQ2Y7Y0FBRTNILEtBQUssRUFBRSxRQUFRO2NBQUUrQyxLQUFLLEVBQUVuRCxLQUFLLENBQUNnSSxJQUFJLENBQUMxSSxPQUFPLENBQUNRO1lBQUksQ0FBRSxFQUNuRDtjQUFFTSxLQUFLLEVBQUUsU0FBUztjQUFFK0MsS0FBSyxFQUFFbkQsS0FBSyxDQUFDZ0ksSUFBSSxDQUFDNUksUUFBUSxDQUFDVTtZQUFJLENBQUUsQ0FDckQ7WUFFRCxNQUFNbUksU0FBUyxHQUFHLE1BQU90RCxLQUFLLElBQW1CO2NBQ2hEQSxLQUFLLENBQUN1RCxjQUFjLEVBQUU7Y0FDdEIsTUFBTTtnQkFBRUM7Y0FBTSxDQUFFLEdBQUd4RCxLQUFLLENBQUN5RCxhQUFhLENBQUNDLE9BQU87Y0FDOUMsSUFBSSxDQUFDeEssS0FBSyxDQUFDc0ssTUFBTSxDQUFDLEVBQUU7Z0JBQ25CL0YsT0FBTyxDQUFDQyxLQUFLLENBQUMsa0JBQWtCLEVBQUU4RixNQUFNLENBQUM7Z0JBQ3pDOztjQUVELElBQUk7Z0JBQ0gsTUFBTXRLLEtBQUssQ0FBQ3NLLE1BQU0sQ0FBQyxDQUFDO2tCQUFFRyxHQUFHLEVBQUVYLElBQUksQ0FBQ1csR0FBRztrQkFBRXhJLElBQUksRUFBRStIO2dCQUFZLENBQUUsQ0FBQztnQkFDMURELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCdkQsTUFBQSxDQUFBWSxLQUFLLENBQUNDLE9BQU8sQ0FBQ2xGLEtBQUssQ0FBQ21GLFFBQVEsQ0FBQ29ELFFBQVEsQ0FBQ3JELE9BQU8sQ0FBQztlQUM5QyxDQUFDLE9BQU8zRCxDQUFDLEVBQUU7Z0JBQ1g4QyxNQUFBLENBQUFZLEtBQUssQ0FBQzVDLEtBQUssQ0FBQ3JDLEtBQUssQ0FBQ21GLFFBQVEsQ0FBQ29ELFFBQVEsQ0FBQ2xHLEtBQUssQ0FBQzs7WUFFNUMsQ0FBQztZQUVELElBQUlzRixJQUFJLENBQUNhLE9BQU8sRUFBRSxPQUFPLElBQUk7WUFDN0IsTUFBTUMsZ0JBQWdCLEdBQUc5RCxLQUFLLElBQUltRCxrQkFBa0IsQ0FBQ25ELEtBQUssQ0FBQ29CLE1BQU0sQ0FBQzNGLEtBQUssQ0FBQztZQUV4RSxPQUNDb0MsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQVAsTUFBQSxDQUFBTSxPQUFBLENBQUFlLFFBQUEsUUFDQ3JCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQixHQUNsQ1YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBFLFlBQUEsQ0FBQWlCLFdBQU07Y0FBQ3hGLFNBQVMsRUFBQyxlQUFlO2NBQUM2RSxPQUFPLEVBQUVBLE9BQU87Y0FBRTNILEtBQUssRUFBRXlILFlBQVk7Y0FBRWxILFFBQVEsRUFBRThIO1lBQWdCLEVBQUksQ0FDbEcsRUFDTmpHLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMwRCxXQUFBLENBQUFrQyxNQUFNO2NBQUNqRCxRQUFRLEVBQUUsQ0FBQ21DLFlBQVk7Y0FBRWUsT0FBTyxFQUFDLFNBQVM7Y0FBQSxlQUFhLFNBQVM7Y0FBQ2pELE9BQU8sRUFBRXNDLFNBQVM7Y0FBRVksUUFBUTtZQUFBLEdBQ25HN0ksS0FBSyxDQUFDeUYsT0FBTyxDQUFDdkQsT0FBTyxDQUNkLEVBQ1RNLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMwRCxXQUFBLENBQUFrQyxNQUFNO2NBQUNDLE9BQU8sRUFBQyxPQUFPO2NBQUEsZUFBYSxRQUFRO2NBQUNsRCxRQUFRLEVBQUUsSUFBSTtjQUFFQyxPQUFPLEVBQUVzQztZQUFTLEdBQzdFakksS0FBSyxDQUFDeUYsT0FBTyxDQUFDbkQsTUFBTSxDQUNiLENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0EsSUFBQUUsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFzTCxLQUFBLEdBQUF0TCxPQUFBO1VBQ0EsSUFBQXVMLE1BQUEsR0FBQXZMLE9BQUE7VUFDQSxJQUFBd0wsS0FBQSxHQUFBeEwsT0FBQTtVQUNBLElBQUFpRixRQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQWdKLE1BQUEsR0FBQWhKLE9BQUE7VUFFTSxTQUFVK0osWUFBWUEsQ0FBQztZQUFFdEU7VUFBSSxDQUFFO1lBQ3BDLE1BQU07Y0FBRXBGLEtBQUs7Y0FBRW1DO1lBQUssQ0FBRSxHQUFHLElBQUF5QyxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQzNDLE1BQU10QixJQUFJLEdBQUd6RCxLQUFLLENBQUNvQixLQUFLLENBQUNnRSxJQUFJLENBQUM7WUFDOUIsTUFBTWdHLE1BQU0sR0FBR2pKLEtBQUssQ0FBQ2dJLElBQUksQ0FBQy9FLElBQUksQ0FBQztZQUMvQixNQUFNLENBQUNpRyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHM0csTUFBQSxDQUFBTSxPQUFLLENBQUNpRSxRQUFRLENBQUN6RixJQUFJLENBQUM7WUFDOUMsSUFBQWtGLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUNwSixLQUFLLENBQUNvQixLQUFLLENBQUMsRUFBRSxNQUFNa0ssUUFBUSxDQUFDLENBQUMsR0FBR3RMLEtBQUssQ0FBQ29CLEtBQUssQ0FBQ2dFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLDZCQUE2QixDQUFDLENBQUM7WUFDbkgsSUFBSSxDQUFDaUcsS0FBSyxDQUFDRSxNQUFNLEVBQUUsT0FBTzVHLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNnRyxNQUFBLENBQUFNLFNBQVMsT0FBRztZQUV2QyxPQUNDN0csTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXdCLEdBQ3RDVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNWLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGFBQUtrRyxNQUFNLENBQUMvRSxLQUFLLENBQU0sQ0FDbEIsRUFDTjFCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMrRixLQUFBLENBQUFRLElBQUk7Y0FBQ0osS0FBSyxFQUFFQSxLQUFLO2NBQUVLLE9BQU8sRUFBRVAsS0FBQSxDQUFBUTtZQUFJLEVBQUksQ0FDaEM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQWhILE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBaU0sTUFBQSxHQUFBak0sT0FBQTtVQUNBLElBQUE0RyxNQUFBLEdBQUE1RyxPQUFBO1VBRUEsSUFBQWtNLFdBQUEsR0FBQWxNLE9BQUE7VUFDQSxJQUFBbU0sYUFBQSxHQUFBbk0sT0FBQTtVQUNNLFNBQVVnTSxJQUFJQSxDQUFDO1lBQUU3QjtVQUFJLENBQUU7WUFDNUIsTUFBTSxDQUFDaUMsT0FBTyxFQUFFaEMsVUFBVSxDQUFDLEdBQUdwRixNQUFBLENBQUFNLE9BQUssQ0FBQ2lFLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFbkQsT0FDQ3ZFLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUM0RyxhQUFBLENBQUFFLGVBQWUsUUFDZCxDQUFDRCxPQUFPLElBQ1JwSCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEcsYUFBQSxDQUFBRyxNQUFNLENBQUNDLEVBQUU7Y0FDVEMsR0FBRyxFQUFFckMsSUFBSSxDQUFDOUgsRUFBRTtjQUNab0ssSUFBSSxFQUFFO2dCQUNMQyxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTtpQkFDVjtnQkFDREMsT0FBTyxFQUFFO2VBQ1Q7Y0FDRGxILFNBQVMsRUFBRSwwQkFBMEJ5RSxJQUFJLENBQUNhLE9BQU8sSUFBSSxDQUFDYixJQUFJLENBQUMwQyxVQUFVLElBQUksVUFBVTtZQUFFLEdBRXJGN0gsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9CLEdBQ2pDeUUsSUFBSSxFQUFFMkMsUUFBUSxHQUFHOUgsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBHLE1BQUEsQ0FBQWMsS0FBSztjQUFDQyxHQUFHLEVBQUU3QyxJQUFJLEVBQUUyQztZQUFRLEVBQUksR0FBRzlILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNxQixNQUFBLENBQUFxRyxJQUFJO2NBQUN2SCxTQUFTLEVBQUMsSUFBSTtjQUFDaUIsSUFBSSxFQUFFO1lBQU0sRUFBSSxFQUN4RjNCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGNBQ0NQLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGFBQUs0RSxJQUFJLENBQUMzQixJQUFJLENBQU0sRUFDcEJ4RCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxlQUFPNEUsSUFBSSxDQUFDK0MsS0FBSyxDQUFRLENBQ3BCLENBQ0QsRUFDTmxJLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFpQixHQUNuQ1YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJHLFdBQUEsQ0FBQWhDLFVBQVU7Y0FBQ0MsSUFBSSxFQUFFQSxJQUFJO2NBQUVDLFVBQVUsRUFBRUE7WUFBVSxFQUFJLENBQ3pDLENBRVgsQ0FDZ0I7VUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUFwRixNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlGLFFBQUEsR0FBQWpGLE9BQUE7VUFDTSxTQUFVbU4sV0FBV0EsQ0FBQztZQUFFaEQ7VUFBSSxDQUFFO1lBQ25DLElBQUksQ0FBQ0EsSUFBSSxDQUFDYSxPQUFPLEVBQUUsT0FBTyxJQUFJO1lBQzlCLE1BQU07Y0FBRXhJO1lBQUssQ0FBRSxHQUFHLElBQUF5QyxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU05QyxJQUFJLEdBQUc2SCxJQUFJLENBQUM3SCxJQUFJLEtBQUssUUFBUSxHQUFHRSxLQUFLLENBQUNnSSxJQUFJLENBQUMxSSxPQUFPLENBQUNRLElBQUksR0FBR0UsS0FBSyxDQUFDZ0ksSUFBSSxDQUFDNUksUUFBUSxDQUFDVSxJQUFJO1lBQ3hGLE9BQU8wQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFBUCxNQUFBLENBQUFNLE9BQUEsQ0FBQWUsUUFBQSxPQUFLO1VBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQXJCLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBaUYsUUFBQSxHQUFBakYsT0FBQTtVQUNBLElBQUFvTixlQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQWlKLFdBQUEsR0FBQWpKLE9BQUE7VUFDTSxTQUFVNkwsU0FBU0EsQ0FBQztZQUFFdkosSUFBSSxHQUFHc0I7VUFBUyxDQUFFO1lBQzdDLE1BQU07Y0FBRXBCO1lBQUssQ0FBRSxHQUFHLElBQUF5QyxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0sQ0FBQzFFLElBQUksRUFBRTJNLE9BQU8sQ0FBQyxHQUFHckksTUFBQSxDQUFBTSxPQUFLLENBQUNpRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU1rQyxNQUFNLEdBQUdqSixLQUFLLENBQUNnSSxJQUFJLENBQUNsSSxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDbUosTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUN4QixNQUFNNkIsT0FBTyxHQUFHLENBQUMsQ0FBQ2hMLElBQUk7WUFDdEIsTUFBTWlMLFdBQVcsR0FBR0EsQ0FBQSxLQUFNRixPQUFPLENBQUMsQ0FBQzNNLElBQUksQ0FBQztZQUN4QyxNQUFNOE0sU0FBUyxHQUFHRixPQUFPLEdBQ3RCOUssS0FBSyxDQUFDaUUsS0FBSyxDQUFDZ0gsU0FBUyxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUlsTCxLQUFLLENBQUN5RixPQUFPLENBQUN4RCxNQUFNLEdBQUcsQ0FBQyxHQUNyRWpDLEtBQUssQ0FBQ2lFLEtBQUssQ0FBQzZHLE9BQU87WUFFdEIsT0FDQ3RJLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUF3QixHQUMxQ1YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxhQUFLa0csTUFBTSxDQUFDL0UsS0FBSyxDQUFNLEVBQ3RCcEUsSUFBSSxJQUFJMEMsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBELFdBQUEsQ0FBQWtDLE1BQU07Y0FBQ3hFLElBQUksRUFBQyxLQUFLO2NBQUNoQixLQUFLLEVBQUVuRCxLQUFLLENBQUN5RixPQUFPLENBQUN4RCxNQUFNO2NBQUVpQixTQUFTLEVBQUMsS0FBSztjQUFDeUMsT0FBTyxFQUFFb0Y7WUFBVyxFQUFJLENBQzVGLEVBQ052SSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBbUQsR0FDakVWLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1HLFNBQVMsRUFBQztZQUFJLEcsS0FBRzhILFNBQVMsQ0FBUSxDQUNuQyxFQUNOeEksTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZILGVBQUEsQ0FBQU8sY0FBYztjQUFDak4sSUFBSSxFQUFFQSxJQUFJO2NBQUU0QixJQUFJLEVBQUVBLElBQUk7Y0FBRXNMLE9BQU8sRUFBRUw7WUFBVyxFQUFJLENBQ3ZEO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUF2SSxNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlGLFFBQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBaUosV0FBQSxHQUFBakosT0FBQTtVQUNBLElBQUFzTCxLQUFBLEdBQUF0TCxPQUFBO1VBQ0EsSUFBQXdMLEtBQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBdUwsTUFBQSxHQUFBdkwsT0FBQTtVQUNBLElBQUFvTixlQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQWdKLE1BQUEsR0FBQWhKLE9BQUE7VUFFTSxTQUFVZ0ssVUFBVUEsQ0FBQztZQUFFMUg7VUFBSSxDQUFxQjtZQUNyRCxNQUFNO2NBQUVFLEtBQUs7Y0FBRW5DO1lBQUssQ0FBRSxHQUFHLElBQUE0RSxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQzFFLElBQUksRUFBRTJNLE9BQU8sQ0FBQyxHQUFHckksTUFBQSxDQUFBTSxPQUFLLENBQUNpRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU0sQ0FBQ21DLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUczRyxNQUFBLENBQUFNLE9BQUssQ0FBQ2lFLFFBQVEsQ0FBQyxDQUFDLEdBQUdsSixLQUFLLENBQUNpQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFELE1BQU1tSixNQUFNLEdBQUdqSixLQUFLLENBQUNnSSxJQUFJLENBQUNsSSxJQUFJLENBQUM7WUFDL0IsTUFBTWlMLFdBQVcsR0FBR0EsQ0FBQSxLQUFNRixPQUFPLENBQUMsQ0FBQzNNLElBQUksQ0FBQztZQUV4QyxJQUFBc0ksTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQ3BKLEtBQUssQ0FBQ29CLEtBQUssQ0FBQyxFQUFFLE1BQU1rSyxRQUFRLENBQUMsQ0FBQyxHQUFHdEwsS0FBSyxDQUFDaUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVNBLElBQUksVUFBVSxDQUFDO1lBRW5GLElBQUksQ0FBQ29KLEtBQUssQ0FBQ0UsTUFBTSxFQUFFLE9BQU81RyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0csTUFBQSxDQUFBTSxTQUFTO2NBQUN2SixJQUFJLEVBQUVBO1lBQUksRUFBSTtZQUVuRCxPQUNDMEMsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQXdCLEdBQzFDVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNWLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGFBQUtrRyxNQUFNLENBQUMvRSxLQUFLLENBQU0sRUFDdEJwRSxJQUFJLElBQUlqQyxLQUFLLENBQUMwQixPQUFPLElBQ3JCaUQsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBELFdBQUEsQ0FBQWtDLE1BQU07Y0FBQ3hFLElBQUksRUFBQyxLQUFLO2NBQUNoQixLQUFLLEVBQUVuRCxLQUFLLENBQUN5RixPQUFPLENBQUN4RCxNQUFNO2NBQUVpQixTQUFTLEVBQUMsS0FBSztjQUFDeUMsT0FBTyxFQUFFb0Y7WUFBVyxFQUNwRixDQUNJLEVBQ052SSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0YsS0FBQSxDQUFBUSxJQUFJO2NBQUNKLEtBQUssRUFBRUEsS0FBSztjQUFFSyxPQUFPLEVBQUVQLEtBQUEsQ0FBQVE7WUFBSSxFQUFJLEVBQ3JDaEgsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZILGVBQUEsQ0FBQU8sY0FBYztjQUFDak4sSUFBSSxFQUFFQSxJQUFJO2NBQUU0QixJQUFJLEVBQUVBLElBQUk7Y0FBRXNMLE9BQU8sRUFBRUw7WUFBVyxFQUFJLENBQ3ZEO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUF2SSxNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQTZOLEtBQUEsR0FBQTdOLE9BQUE7VUFDQSxJQUFBNkcsTUFBQSxHQUFBN0csT0FBQTtVQUVBLElBQUFpRixRQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQWlKLFdBQUEsR0FBQWpKLE9BQUE7VUFDQSxJQUFBOE4sTUFBQSxHQUFBOU4sT0FBQTtVQUVNLFNBQVUyTixjQUFjQSxDQUFDO1lBQUVqTixJQUFJO1lBQUVrTixPQUFPO1lBQUV0TDtVQUFJLENBQUU7WUFDckQsTUFBTTtjQUFFakMsS0FBSztjQUFFbUM7WUFBSyxDQUFFLEdBQUcsSUFBQXlDLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTSxDQUFDMkksT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR2hKLE1BQUEsQ0FBQU0sT0FBSyxDQUFDaUUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNLENBQUMxRSxLQUFLLEVBQUVvSixRQUFRLENBQUMsR0FBR2pKLE1BQUEsQ0FBQU0sT0FBSyxDQUFDaUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNMkUsYUFBYSxHQUFHO2NBQ3JCMUYsSUFBSSxFQUFFLEVBQUU7Y0FDUjBFLEtBQUssRUFBRTthQUNQO1lBQ0QsTUFBTSxDQUFDN0ksTUFBTSxFQUFFOEosU0FBUyxDQUFDLEdBQUduSixNQUFBLENBQUFNLE9BQUssQ0FBQ2lFLFFBQVEsQ0FBQzJFLGFBQWEsQ0FBQztZQUN6RCxNQUFNRSxRQUFRLEdBQUc7Y0FBRXhNLFFBQVEsRUFBRSxTQUFTO2NBQUVFLE9BQU8sRUFBRTtZQUFRLENBQUU7WUFDM0QsTUFBTXVNLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ3hCRixTQUFTLENBQUNELGFBQWEsQ0FBQztjQUN4QkQsUUFBUSxDQUFDLEVBQUUsQ0FBQztjQUNaRCxVQUFVLENBQUMsS0FBSyxDQUFDO2NBQ2pCSixPQUFPLEVBQUU7WUFDVixDQUFDO1lBQ0QsTUFBTVUsUUFBUSxHQUFHLE1BQU1uSCxLQUFLLElBQUc7Y0FDOUJBLEtBQUssQ0FBQ3VELGNBQWMsRUFBRTtjQUN0QnNELFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FFaEIsTUFBTU8sUUFBUSxHQUFHLE1BQU1sTyxLQUFLLENBQUNvRSxNQUFNLENBQUM7Z0JBQUUsR0FBR0osTUFBTTtnQkFBRS9CLElBQUksRUFBRThMLFFBQVEsQ0FBQzlMLElBQUk7Y0FBQyxDQUFFLENBQUM7Y0FDeEUsSUFBSSxDQUFDaU0sUUFBUSxDQUFDaEssTUFBTSxFQUFFO2dCQUNyQjBKLFFBQVEsQ0FBQ00sUUFBUSxDQUFDMUosS0FBSyxDQUFDO2dCQUN4QmdDLE1BQUEsQ0FBQVksS0FBSyxDQUFDQyxPQUFPLENBQUM3QyxLQUFLLENBQUM7O2NBR3JCZ0MsTUFBQSxDQUFBWSxLQUFLLENBQUNDLE9BQU8sQ0FBQ2xGLEtBQUssQ0FBQ2dNLE1BQU0sQ0FBQy9KLE1BQU0sQ0FBQ2lELE9BQU8sQ0FBQztjQUMxQzJHLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFFRCxNQUFNSSxZQUFZLEdBQUdBLENBQUM7Y0FBRTdELGFBQWEsRUFBRXJDO1lBQU0sQ0FBRSxLQUFJO2NBQ2xELE1BQU1tRyxZQUFZLEdBQUc7Z0JBQUUsR0FBR3JLO2NBQU0sQ0FBRTtjQUNsQ3FLLFlBQVksQ0FBQ25HLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUdELE1BQU0sQ0FBQzNGLEtBQUs7Y0FDeEN1TCxTQUFTLENBQUNPLFlBQVksQ0FBQztjQUN2QlQsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxJQUFJLENBQUN2TixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU1pTyxVQUFVLEdBQUduTSxLQUFLLENBQUNvTSxLQUFLLENBQUNuSyxNQUFNLENBQUNpQyxLQUFLLENBQUNnSCxPQUFPLENBQUMsT0FBTyxFQUFFbEwsS0FBSyxDQUFDZ0ksSUFBSSxDQUFDbEksSUFBSSxDQUFDLENBQUNBLElBQUksQ0FBQztZQUVuRixNQUFNO2NBQUVrRyxJQUFJO2NBQUUwRTtZQUFLLENBQUUsR0FBRzdJLE1BQU07WUFDOUIsT0FDQ1csTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VJLE1BQUEsQ0FBQWUsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFcE8sSUFBSTtjQUFDZ0YsU0FBUyxFQUFDLFlBQVk7Y0FBQ2tJLE9BQU8sRUFBRVM7WUFBVyxHQUM1RXJKLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUFvQixHQUNyQ1YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsYUFBS29KLFVBQVUsQ0FBTSxDQUNiLEVBRVQzSixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksS0FBQSxDQUFBa0IsSUFBSTtjQUFDckosU0FBUyxFQUFDLE9BQU87Y0FBQzRJLFFBQVEsRUFBRUE7WUFBUSxHQUN6Q3RKLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxLQUFBLENBQUFtQixLQUFLO2NBQ0xySixLQUFLLEVBQUMsTUFBTTtjQUNaRixJQUFJLEVBQUMsTUFBTTtjQUNYK0MsSUFBSSxFQUFDLE1BQU07Y0FDWDVGLEtBQUssRUFBRTRGLElBQUk7Y0FDWHJGLFFBQVEsRUFBRXNMLFlBQVk7Y0FDdEI3RixXQUFXLEVBQUMsaUJBQWlCO2NBQzdCcUcsUUFBUTtZQUFBLEVBQ1AsRUFDRmpLLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxLQUFBLENBQUFtQixLQUFLO2NBQ0xwRyxXQUFXLEVBQUMsa0JBQWtCO2NBQzlCakQsS0FBSyxFQUFDLE9BQU87Y0FDYnlGLE9BQU8sRUFBQyxVQUFVO2NBQ2xCM0YsSUFBSSxFQUFDLE9BQU87Y0FDWitDLElBQUksRUFBQyxPQUFPO2NBQ1pyRixRQUFRLEVBQUVzTCxZQUFZO2NBQ3RCUSxRQUFRO1lBQUEsRUFDUCxFQUNGakssTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXNDLEdBQ3BEVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEQsV0FBQSxDQUFBa0MsTUFBTTtjQUFDMUYsSUFBSSxFQUFDLFFBQVE7Y0FBQzJGLE9BQU8sRUFBQyxTQUFTO2NBQUN6RSxJQUFJLEVBQUMsWUFBWTtjQUFDb0gsT0FBTyxFQUFFQSxPQUFPO2NBQUVwSSxLQUFLLEVBQUM7WUFBUSxFQUFHLENBQ3hGLENBQ0EsQ0FDQTtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hGQSxJQUFBWCxNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlKLFdBQUEsR0FBQWpKLE9BQUE7VUFFQSxJQUFBa1AsUUFBQSxHQUFBbFAsT0FBQTtVQUNBLElBQUFpRixRQUFBLEdBQUFqRixPQUFBO1VBRU0sU0FBVW1QLFdBQVdBLENBQUM7WUFBRWhGO1VBQUksQ0FBRTtZQUNuQyxNQUFNO2NBQUUzSCxLQUFLO2NBQUVuQztZQUFLLENBQUUsR0FBRyxJQUFBNEUsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUUzQyxNQUFNLENBQUMxRSxJQUFJLEVBQUUyTSxPQUFPLENBQUMsR0FBR3JJLE1BQUEsQ0FBQU0sT0FBSyxDQUFDaUUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNZ0UsV0FBVyxHQUFHQSxDQUFBLEtBQU1GLE9BQU8sQ0FBQyxDQUFDM00sSUFBSSxDQUFDO1lBQ3hDLElBQUksQ0FBQ0wsS0FBSyxDQUFDMEIsT0FBTyxFQUFFLE9BQU8sSUFBSTtZQUMvQixPQUNDaUQsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWlCLEdBQy9CVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEQsV0FBQSxDQUFBa0MsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDQyxRQUFRO2NBQUNsRCxPQUFPLEVBQUVvRjtZQUFXLEdBQ3JEL0ssS0FBSyxDQUFDeUYsT0FBTyxDQUFDbUgsSUFBSSxDQUNYLEVBRVRwSyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkosUUFBQSxDQUFBRyxZQUFZO2NBQUNsRixJQUFJLEVBQUVBLElBQUk7Y0FBRXpKLElBQUksRUFBRUEsSUFBSTtjQUFFa04sT0FBTyxFQUFFTDtZQUFXLEVBQUksQ0FDekQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQXZJLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBOE4sTUFBQSxHQUFBOU4sT0FBQTtVQUNBLElBQUE2TixLQUFBLEdBQUE3TixPQUFBO1VBQ0EsSUFBQWlLLFlBQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBaUYsUUFBQSxHQUFBakYsT0FBQTtVQUNBLElBQUFpSixXQUFBLEdBQUFqSixPQUFBO1VBRUEsSUFBQTZHLE1BQUEsR0FBQTdHLE9BQUE7VUFFTSxTQUFVcVAsWUFBWUEsQ0FBQztZQUFFbEYsSUFBSTtZQUFFekosSUFBSTtZQUFFa047VUFBTyxDQUFFO1lBQ25ELE1BQU07Y0FBRXBMLEtBQUs7Y0FBRW5DO1lBQUssQ0FBRSxHQUFHLElBQUE0RSxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQ2tLLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd2SyxNQUFBLENBQUFNLE9BQUssQ0FBQ2lFLFFBQVEsQ0FBQ1ksSUFBSSxDQUFDN0gsSUFBSSxJQUFJLFNBQVMsQ0FBQztZQUMxRSxNQUFNLENBQUN5TCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHaEosTUFBQSxDQUFBTSxPQUFLLENBQUNpRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELElBQUksQ0FBQzdJLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTTROLFFBQVEsR0FBRyxNQUFNbkgsS0FBSyxJQUFHO2NBQzlCQSxLQUFLLENBQUN1RCxjQUFjLEVBQUU7Y0FDdEIsSUFBSTtnQkFDSHNELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLE1BQU0zTixLQUFLLENBQUMwRSxVQUFVLENBQUM7a0JBQUV6QyxJQUFJLEVBQUVnTixVQUFVO2tCQUFFeEUsR0FBRyxFQUFFWCxJQUFJLENBQUNXO2dCQUFHLENBQUUsQ0FBQztnQkFDM0RqRSxNQUFBLENBQUFZLEtBQUssQ0FBQ0MsT0FBTyxDQUFDbEYsS0FBSyxDQUFDZ00sTUFBTSxDQUFDL0osTUFBTSxDQUFDaUQsT0FBTyxDQUFDO2VBQzFDLENBQUMsT0FBTzNELENBQUMsRUFBRTtnQkFDWDhDLE1BQUEsQ0FBQVksS0FBSyxDQUFDNUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO2dCQUNuQ0QsT0FBTyxDQUFDQyxLQUFLLENBQUNkLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUaUssVUFBVSxDQUFDLEtBQUssQ0FBQzs7WUFFbkIsQ0FBQztZQUVELE1BQU16RCxPQUFPLEdBQUcsQ0FDZjtjQUFFM0gsS0FBSyxFQUFFLFNBQVM7Y0FBRStDLEtBQUssRUFBRW5ELEtBQUssQ0FBQ2dJLElBQUksQ0FBQzFJLE9BQU8sQ0FBQzBOO1lBQU0sQ0FBRSxFQUN0RDtjQUFFNU0sS0FBSyxFQUFFLFNBQVM7Y0FBRStDLEtBQUssRUFBRW5ELEtBQUssQ0FBQ2dJLElBQUksQ0FBQzVJLFFBQVEsQ0FBQzROO1lBQU0sQ0FBRSxDQUN2RDtZQUVELE1BQU12RSxnQkFBZ0IsR0FBRzlELEtBQUssSUFBRztjQUNoQ29JLGFBQWEsQ0FBQ3BJLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQzNGLEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBQ0QsT0FDQ29DLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUN1SSxNQUFBLENBQUFlLEtBQUs7Y0FBQ25PLElBQUk7Y0FBQ2dGLFNBQVMsRUFBQyxZQUFZO2NBQUNrSSxPQUFPLEVBQUVBLE9BQU87Y0FBRWtCLGFBQWEsRUFBRTtZQUFLLEdBQ3hFOUosTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NJLEtBQUEsQ0FBQWtCLElBQUk7Y0FBQ1QsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZCdEosTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWEsR0FDM0JWLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1HLFNBQVMsRUFBQztZQUFJLEdBQUVsRCxLQUFLLENBQUNvTSxLQUFLLENBQUNRLElBQUksQ0FBQzFJLEtBQUssQ0FBUSxFQUNwRDFCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUdHLFNBQVMsRUFBQztZQUFJLEdBQUVsRCxLQUFLLENBQUNvTSxLQUFLLENBQUNRLElBQUksQ0FBQ0ssSUFBSSxDQUFLLENBQ3hDLEVBQ056SyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEUsWUFBQSxDQUFBaUIsV0FBVztjQUFDWCxPQUFPLEVBQUVBLE9BQU87Y0FBRW1GLFlBQVksRUFBRUosVUFBVTtjQUFFbk0sUUFBUSxFQUFFOEg7WUFBZ0IsRUFBSSxFQUN2RmpHLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUFzQyxHQUN2RFYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBELFdBQUEsQ0FBQWtDLE1BQU07Y0FBQzFGLElBQUksRUFBQyxRQUFRO2NBQUMyRixPQUFPLEVBQUMsU0FBUztjQUFDekUsSUFBSSxFQUFDLFlBQVk7Y0FBQ29ILE9BQU8sRUFBRUEsT0FBTztjQUFFNUYsT0FBTyxFQUFFbUc7WUFBUSxHQUMzRjlMLEtBQUssQ0FBQ3lGLE9BQU8sQ0FBQzdELElBQUksQ0FDWCxDQUNELENBQ0gsQ0FDQTtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBWSxNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlNLE1BQUEsR0FBQWpNLE9BQUE7VUFFQSxJQUFBMlAsUUFBQSxHQUFBM1AsT0FBQTtVQUVNLFNBQVVnTSxJQUFJQSxDQUFDO1lBQUU3QjtVQUFJLENBQUU7WUFDNUIsT0FDQ25GLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUlpSCxHQUFHLEVBQUVyQyxJQUFJLENBQUM5SCxFQUFFO2NBQUVxRCxTQUFTLEVBQUM7WUFBd0IsR0FDbkRWLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQixHQUNsQ1YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBHLE1BQUEsQ0FBQWMsS0FBSztjQUFDckgsU0FBUyxFQUFDLFdBQVc7Y0FBQ3NILEdBQUcsRUFBRTdDLElBQUksRUFBRTJDO1lBQVEsRUFBSSxFQUNwRDlILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1HLFNBQVMsRUFBQztZQUFJLEdBQUV5RSxJQUFJLENBQUMzQixJQUFJLENBQVEsQ0FDbEMsRUFDTnhELE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNvSyxRQUFBLENBQUFSLFdBQVc7Y0FBQ2hGLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ3ZCO1VBRVAiLCJpZ25vcmVMaXN0IjpbXX0=