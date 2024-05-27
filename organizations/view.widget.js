System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.42/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.42/config", "@aimpact/ailearn-app@0.0.42/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
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
    }, function (_aimpactAilearnApp0042ComponentsNavbarHeaderCode) {
      dependency_7 = _aimpactAilearnApp0042ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0042Config) {
      dependency_9 = _aimpactAilearnApp0042Config;
    }, function (_aimpactAilearnApp0042ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0042ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_11 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_12 = _pragmateUi011Toast;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_16 = _pragmateUi011FormReactSelect;
    }, function (_pragmateUi011Components) {
      dependency_17 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_18 = _pragmateUi011List;
    }, function (_pragmateUi011Image) {
      dependency_19 = _pragmateUi011Image;
    }, function (_framerMotion2) {
      dependency_20 = _framerMotion2;
    }, function (_pragmateUi011Form) {
      dependency_21 = _pragmateUi011Form;
    }, function (_pragmateUi011Modal) {
      dependency_22 = _pragmateUi011Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.42"], ["@aimpact/ailearn-app", "0.0.42"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.42/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/form/react-select', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/image', dependency_19], ['framer-motion', dependency_20], ['pragmate-ui/form', dependency_21], ['pragmate-ui/modal', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.42/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.42/organizations/view.widget');
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
        hash: 2496736084,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
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
            clear() {
              this.#model = undefined;
              this.ready = false;
            }
            async load(id) {
              try {
                this.ready = false;
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
                this.ready = true;
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

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 2332179604,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.management, '']]
            });
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
        hash: 3485535151,
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
              breadcrumb: [[texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.management, '']]
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
        hash: 417904980,
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
              disabled: true
            }, store.model.name), _react.default.createElement(_ui.ContentEditable, {
              as: "p",
              name: "title",
              onSave: onSave
            }, store.model.description)), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center"
            }, _react.default.createElement(_codeSection.CodeSection, null)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3434653497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./components/header");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _empty = require("./empty");
          var _header2 = require("./header/header");
          var _people = require("./list/people");
          var _approval = require("./list/approval");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks2.useBinder)([store.model], () => setFetching(store.model?.fetching));
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, {
              className: "app-organization-creation-page",
              fetching: fetching
            }, _react.default.createElement(_header2.HeaderContainer, null), _react.default.createElement("div", {
              className: "list-info__container"
            }, _react.default.createElement(_people.PeopleList, {
              role: "managers"
            }), _react.default.createElement(_people.PeopleList, {
              role: "members"
            }), _react.default.createElement(_approval.ApprovalList, {
              type: "pendings"
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
        "im": "./views/components/header",
        "from": "Header",
        "name": "Header"
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
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/components/header').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJwYXJhbXMiLCJvYmplY3RpdmVzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsIm1lbWJlcnMiLCJpc0FkbWluIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImZpbmQiLCJvcmciLCJpZCIsInJvbGUiLCJlcnJvckxvYWRpbmciLCJ1bmRlZmluZWQiLCJyZWFkeSIsImdsb2JhbFRoaXMiLCJjb24iLCJzcGVjcyIsIk9yZ2FuaXphdGlvbiIsImRhdGEiLCJlIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJFcnJvciIsImludml0ZSIsImFwcHJvdmUiLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX25hdmJhckhlYWRlciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwibWFuYWdlbWVudCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIkVtcHR5T3JnYW5pemF0aW9uIiwiRnJhZ21lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImljb24iLCJfaWNvbnMiLCJfdG9hc3QiLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwiY2xhc3NOYW1lIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJhY3Rpb25zIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2NvZGVTZWN0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwib25TYXZlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsImFzIiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9jb21wb25lbnRzIiwiX2VtcHR5IiwiX2hlYWRlcjIiLCJfcGVvcGxlIiwiX2FwcHJvdmFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGVvcGxlTGlzdCIsIkFwcHJvdmFsTGlzdCIsInR5cGUiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNldFJlbW92ZWQiLCJyb2xlU2VsZWN0ZWQiLCJjaGFuZ2VSb2xlU2VsZWN0ZWQiLCJvcHRpb25zIiwibGFiZWwiLCJsaXN0Iiwib25Qcm9jZXNzIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJ1aWQiLCJhcHByb3ZhbCIsImludml0ZWQiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiUmVhY3RTZWxlY3QiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJvbGUiLCJfZnJhbWVyTW90aW9uIiwicmVtb3ZlZCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImxpIiwia2V5IiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJfZWRpdGlvbiIsIkl0ZW1BY3Rpb25zIiwiZWRpdCIsIkVkaXRpb25Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic2luZ2xlIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsIl9hY3Rpb25zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1yb2xlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixL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