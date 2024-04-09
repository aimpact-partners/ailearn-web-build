System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.0/components", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.0/icons", "pragmate-ui@0.1.0/toast", "@aimpact/ailearn-app@0.0.32/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.0/form/react-select", "pragmate-ui@0.1.0/list", "pragmate-ui@0.1.0/image", "pragmate-ui@0.1.0/form", "pragmate-ui@0.1.0/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_6 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_8 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi010Components) {
      dependency_9 = _pragmateUi010Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi010Icons) {
      dependency_11 = _pragmateUi010Icons;
    }, function (_pragmateUi010Toast) {
      dependency_12 = _pragmateUi010Toast;
    }, function (_aimpactAilearnApp0032ComponentsCoverImageCode) {
      dependency_13 = _aimpactAilearnApp0032ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_15 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi010FormReactSelect) {
      dependency_17 = _pragmateUi010FormReactSelect;
    }, function (_pragmateUi010List) {
      dependency_18 = _pragmateUi010List;
    }, function (_pragmateUi010Image) {
      dependency_19 = _pragmateUi010Image;
    }, function (_pragmateUi010Form) {
      dependency_20 = _pragmateUi010Form;
    }, function (_pragmateUi010Modal) {
      dependency_21 = _pragmateUi010Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['@aimpact/ailearn-app/components/cover-image.code', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/form', dependency_20], ['pragmate-ui/modal', dependency_21]]);
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
        hash: 4134713027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
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
            clear() {
              this.#model = undefined;
              this.ready = false;
            }
            async load(id) {
              try {
                this.ready = false;
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
                console.error(e);
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
        hash: 2310553441,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyOrganization = EmptyOrganization;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyOrganization() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/organization/management/new",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
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
        hash: 1146089885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _codeSection = require("./code-section");
          //@ts-ignore

          // import { CoverImage } from './cover-image';

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
              onSave: onSave
            }, store.model.name), _react.default.createElement(_ui.ContentEditable, {
              selector: "p",
              name: "title",
              onSave: onSave
            }, store.model.description)), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center"
            }, _react.default.createElement(_coverImage.CoverImage, null)), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center"
            }, _react.default.createElement(_codeSection.CodeSection, null)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2825641345,
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
            if (!store.model.found) return _react.default.createElement(_empty.EmptyOrganization, null);
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
        hash: 3697287517,
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
            item
          }) {
            const [selectRole, setSelectRole] = _react.default.useState('member');
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
                  role: selectRole
                });
                _toast.toast.success(texts.messages.approval.success);
              } catch (e) {
                _toast.toast.error(texts.messages.approval.error);
              }
            };
            if (item.invited) return null;
            const handleRoleChange = event => setSelectRole(event.target.value);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "div-select__button"
            }, _react.default.createElement(_reactSelect.ReactSelect, {
              className: "select-option",
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            })), _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-action": "approve",
              onClick: onProcess,
              bordered: true,
              disabled: false
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
        hash: 1858221263,
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
          function Item({
            item
          }) {
            return _react.default.createElement("li", {
              key: item.id,
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
              item: item
            })));
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
        hash: 3076001337,
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
          function PeopleList({
            role
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const data = store[role];
            const labels = texts.list[role];
            const toggleModal = () => setShow(!show);
            if (!data.length) return _react.default.createElement(_empty.EmptyList, {
              role: role
            });
            return _react.default.createElement("section", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("h4", null, labels.title), role && _react.default.createElement(_components.Button, {
              icon: "add",
              label: texts.actions.invite,
              className: "add",
              onClick: toggleModal
            })), _react.default.createElement(_list.List, {
              items: data,
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
        hash: 2961835600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          var _edition = require("./edition");
          function Item({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
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
            }, item.name)), _react.default.createElement("div", {
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
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiT3JnYW5pemF0aW9uIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfbmF2YmFySGVhZGVyIiwiX3JlYWN0IiwiX2NvbmZpZyIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiQVBQX05BTUUiLCJvcmdhbml6YXRpb25zIiwibWFuYWdlbWVudCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX3VpIiwiRW1wdHlPcmdhbml6YXRpb24iLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9pY29ucyIsIl90b2FzdCIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsImV2ZW50IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsIl9jb3ZlckltYWdlIiwiX2NvZGVTZWN0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwib25TYXZlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwiQ292ZXJJbWFnZSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfaG9va3MyIiwiX2VtcHR5IiwiX2hlYWRlcjIiLCJfcGVvcGxlIiwiX2FwcHJvdmFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGVvcGxlTGlzdCIsInJvbGUiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiX3JlYWN0U2VsZWN0IiwiQ2hvaWNlUm9sZSIsIml0ZW0iLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsIm9wdGlvbnMiLCJsYWJlbCIsImxpc3QiLCJvblByb2Nlc3MiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsInVpZCIsImFwcHJvdmFsIiwiaW52aXRlZCIsImhhbmRsZVJvbGVDaGFuZ2UiLCJGcmFnbWVudCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSb2xlIiwia2V5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJGb3JtIiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiRWRpdGlvbk1vZGFsIiwic2luZ2xlIiwiZWRpdCIsImluZm8iLCJfZWRpdGlvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9jaG9pY2Utcm9sZS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL3BlbmRpbmctZGF0YS50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2ludml0YXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1cs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