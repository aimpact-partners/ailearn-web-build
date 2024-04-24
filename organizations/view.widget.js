System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_7 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_9 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/form/react-select', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/image', dependency_19], ['framer-motion', dependency_20], ['pragmate-ui/form', dependency_21], ['pragmate-ui/modal', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/organizations/view.widget');
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
        hash: 877290266,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.management, '']]
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
        hash: 2055198281,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyOrganization = EmptyOrganization;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _config = require("@aimpact/ailearn-app/config");
          function EmptyOrganization({
            texts
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.management, '']]
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
        hash: 2385971611,
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
              selector: "h1",
              name: "title",
              onSave: onSave,
              disabled: true
            }, store.model.name), _react.default.createElement(_ui.ContentEditable, {
              selector: "p",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJwYXJhbXMiLCJvYmplY3RpdmVzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsIm1lbWJlcnMiLCJpc0FkbWluIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImZpbmQiLCJvcmciLCJpZCIsInJvbGUiLCJlcnJvckxvYWRpbmciLCJ1bmRlZmluZWQiLCJyZWFkeSIsImdsb2JhbFRoaXMiLCJjb24iLCJzcGVjcyIsIk9yZ2FuaXphdGlvbiIsImRhdGEiLCJlIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJFcnJvciIsImludml0ZSIsImFwcHJvdmUiLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX25hdmJhckhlYWRlciIsIl9yZWFjdCIsIl9jb25maWciLCJfY29udGV4dCIsIkhlYWRlciIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwibWFuYWdlbWVudCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIkVtcHR5T3JnYW5pemF0aW9uIiwiRnJhZ21lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImljb24iLCJfaWNvbnMiLCJfdG9hc3QiLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwiY2xhc3NOYW1lIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJhY3Rpb25zIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2NvZGVTZWN0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwib25TYXZlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9jb21wb25lbnRzIiwiX2VtcHR5IiwiX2hlYWRlcjIiLCJfcGVvcGxlIiwiX2FwcHJvdmFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGVvcGxlTGlzdCIsIkFwcHJvdmFsTGlzdCIsInR5cGUiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNldFJlbW92ZWQiLCJyb2xlU2VsZWN0ZWQiLCJjaGFuZ2VSb2xlU2VsZWN0ZWQiLCJvcHRpb25zIiwibGFiZWwiLCJsaXN0Iiwib25Qcm9jZXNzIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJ1aWQiLCJhcHByb3ZhbCIsImludml0ZWQiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiUmVhY3RTZWxlY3QiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJvbGUiLCJfZnJhbWVyTW90aW9uIiwicmVtb3ZlZCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImxpIiwia2V5IiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJfZWRpdGlvbiIsIkl0ZW1BY3Rpb25zIiwiZWRpdCIsIkVkaXRpb25Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic2luZ2xlIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsIl9hY3Rpb25zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1yb2xlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NB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