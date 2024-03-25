System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-app@0.0.30/components/ui", "react@18.2.0", "@aimpact/ailearn-app@0.0.30/config", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "@aimpact/ailearn-app@0.0.30/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnApp0030ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0030ComponentsUi;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0030Config) {
      dependency_8 = _aimpactAilearnApp0030Config;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_pragmateUi006Icons) {
      dependency_10 = _pragmateUi006Icons;
    }, function (_pragmateUi006Toast) {
      dependency_11 = _pragmateUi006Toast;
    }, function (_aimpactAilearnApp0030ComponentsCoverImageCode) {
      dependency_12 = _aimpactAilearnApp0030ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_14 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_15 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_16 = _pragmateUi006FormReactSelect;
    }, function (_pragmateUi006List) {
      dependency_17 = _pragmateUi006List;
    }, function (_pragmateUi006Image) {
      dependency_18 = _pragmateUi006Image;
    }, function (_pragmateUi006Form) {
      dependency_19 = _pragmateUi006Form;
    }, function (_pragmateUi006Modal) {
      dependency_20 = _pragmateUi006Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.30"], ["@aimpact/ailearn-app", "0.0.30"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.30/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/ailearn-app/components/cover-image.code', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/form/react-select', dependency_16], ['pragmate-ui/list', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.30/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.30/organizations/view.widget');
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
        hash: 2566353067,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_ui.NavbarHeader, {
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
        hash: 302143221,
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
            console.log(10, item);
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
        hash: 2588400508,
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
              variant: "floating",
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
              value: email,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiT3JnYW5pemF0aW9uIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfdWkiLCJfcmVhY3QiLCJfY29uZmlnIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsIm9yZ2FuaXphdGlvbnMiLCJtYW5hZ2VtZW50IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJFbXB0eU9yZ2FuaXphdGlvbiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2ljb25zIiwiX3RvYXN0IiwiQ29kZVNlY3Rpb24iLCJjb2RlIiwiam9pblNwZWNzIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2NvdmVySW1hZ2UiLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJqb2luIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJDb3ZlckltYWdlIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9ob29rczIiLCJfZW1wdHkiLCJfaGVhZGVyMiIsIl9wZW9wbGUiLCJfYXBwcm92YWwiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiZm91bmQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQZW9wbGVMaXN0Iiwicm9sZSIsIkFwcHJvdmFsTGlzdCIsInR5cGUiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJvbGUiLCJsb2ciLCJrZXkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJFZGl0aW9uTW9kYWwiLCJzaW5nbGUiLCJlZGl0IiwiaW5mbyIsIl9lZGl0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1yb2xlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lB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