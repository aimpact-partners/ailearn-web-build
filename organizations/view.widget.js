System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-13/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-13/components/navbar-header.code", "@aimpact/ailearn-app@0.0.46.dev-13/components/ui", "@aimpact/ailearn-app@0.0.46.dev-13/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev13MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev13MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0046Dev13ComponentsNavbarHeaderCode) {
      dependency_10 = _aimpactAilearnApp0046Dev13ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0046Dev13ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0046Dev13ComponentsUi;
    }, function (_aimpactAilearnApp0046Dev13Config) {
      dependency_12 = _aimpactAilearnApp0046Dev13Config;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-13"], ["@aimpact/ailearn-app", "0.0.46.dev-13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/toast', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-13/organizations/view.widget');
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
        hash: 1724448963,
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
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/classrooms/join?code=${code}`);
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
        hash: 4054880496,
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
        hash: 2278785254,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsImlzQWRtaW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwiZmluZCIsIm9yZyIsImlkIiwicm9sZSIsImVycm9yTG9hZGluZyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJPcmdhbml6YXRpb24iLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsIm1hbmFnZW1lbnQiLCJ1bmRlZmluZWQiLCJjb24iLCJzcGVjcyIsImRhdGEiLCJlIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJFcnJvciIsImludml0ZSIsImFwcHJvdmUiLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbmF2YmFySGVhZGVyIiwiX3VpIiwiRW1wdHlPcmdhbml6YXRpb24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImljb24iLCJfY29udGV4dCIsIl9pY29ucyIsIl90b2FzdCIsIl9jb25maWciLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImJhc2VVcmwiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJjbGFzc05hbWUiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsImFjdGlvbnMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJ0YXJnZXQiLCJuYW1lIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsImFzIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIl9oZWFkZXIiLCJfcGVvcGxlIiwiX2FwcHJvdmFsIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiaGFzQWNjZXNzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQXBwcm92YWxMaXN0IiwidHlwZSIsIlBlb3BsZUxpc3QiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNldFJlbW92ZWQiLCJyb2xlU2VsZWN0ZWQiLCJjaGFuZ2VSb2xlU2VsZWN0ZWQiLCJvcHRpb25zIiwibGFiZWwiLCJsaXN0Iiwib25Qcm9jZXNzIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVpZCIsImFwcHJvdmFsIiwiaW52aXRlZCIsImhhbmRsZVJvbGVDaGFuZ2UiLCJSZWFjdFNlbGVjdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2VtcHR5IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJvbGUiLCJfZnJhbWVyTW90aW9uIiwicmVtb3ZlZCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImxpIiwia2V5IiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsIl9lZGl0aW9uIiwiSXRlbUFjdGlvbnMiLCJlZGl0IiwiRWRpdGlvbk1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJzaW5nbGUiLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwiX2FjdGlvbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9jaG9pY2Utcm9sZS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL3BlbmRpbmctZGF0YS50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2ludml0YXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5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