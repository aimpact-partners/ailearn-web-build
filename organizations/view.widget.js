System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-app@0.1.6-dev.27/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/ailearn-app@0.1.6-dev.27/components/navbar-header.code", "@aimpact/ailearn-app@0.1.6-dev.27/components/ui", "@aimpact/ailearn-app@0.1.6-dev.27/config", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/toast", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/image", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/modal"], function (_export, _context2) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk110Session) {
      dependency_6 = _aimpactChatSdk110Session;
    }, function (_aimpactAilearnApp016Dev27MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp016Dev27MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_10 = _pragmateUi100Beta6Alert;
    }, function (_aimpactAilearnApp016Dev27ComponentsNavbarHeaderCode) {
      dependency_11 = _aimpactAilearnApp016Dev27ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp016Dev27ComponentsUi) {
      dependency_12 = _aimpactAilearnApp016Dev27ComponentsUi;
    }, function (_aimpactAilearnApp016Dev27Config) {
      dependency_13 = _aimpactAilearnApp016Dev27Config;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_14 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_15 = _pragmateUi100Beta6Toast;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_17 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Components) {
      dependency_18 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6List) {
      dependency_19 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Image) {
      dependency_20 = _pragmateUi100Beta6Image;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi100Beta6Form) {
      dependency_22 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_23 = _pragmateUi100Beta6Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.27"], ["@aimpact/ailearn-app", "0.1.6-dev.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.27/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/toast', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.27/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.27/organizations/view.widget');
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
        hash: 4056698347,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
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
              return !!this.#model?.isAdmin;
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
            clear() {
              this.#model = undefined;
              super.ready = false;
            }
            async load(id) {
              try {
                super.ready = false;
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
                _mainLayout.LayoutBroker.breadcrumb.lastItem.label = this.#model.name;
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
        hash: 3348126422,
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
            if (!model.coins || !store.isAdmin) return null;
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
        hash: 3377458426,
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
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (store.model.found && !store.model.hasAccess) {
              return _react.default.createElement("app-not-allowed", null);
            }
            if (!store.model.found) return _react.default.createElement("app-missing-control", null);
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
              className: "list-info__container "
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
        hash: 4282450041,
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJwYXJhbXMiLCJvYmplY3RpdmVzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsIm1lbWJlcnMiLCJpc0FkbWluIiwiZXJyb3JMb2FkaW5nIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsIk9yZ2FuaXphdGlvbiIsInVuZGVmaW5lZCIsImlkIiwic3BlY3MiLCJkYXRhIiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsImxhc3RJdGVtIiwibGFiZWwiLCJuYW1lIiwiZSIsImRlbGV0ZSIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJpbnZpdGUiLCJhcHByb3ZlIiwicmVzIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwidXBkYXRlUm9sZSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2FsZXJ0IiwiRW50aXR5Q29pbnMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl91aSIsIkVtcHR5T3JnYW5pemF0aW9uIiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJvcmdhbml6YXRpb25zIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJpY29uIiwiX2ljb25zIiwiX3RvYXN0IiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYmFzZVVybCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiYWN0aW9ucyIsImRpc2FibGVkIiwib25DbGljayIsIl9jb2RlU2VjdGlvbiIsIkhlYWRlckNvbnRhaW5lciIsIm9uU2F2ZSIsInRhcmdldCIsImpvaW4iLCJDb250ZW50RWRpdGFibGUiLCJhcyIsInBsYWNlaG9sZGVyIiwiY29udGVudCIsImVkaXRhYmxlIiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfaGVhZGVyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsIl9jb2lucyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmb3VuZCIsImhhc0FjY2VzcyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFwcHJvdmFsTGlzdCIsIlBlb3BsZUxpc3QiLCJyb2xlIiwiX3JlYWN0U2VsZWN0IiwiX2NvbXBvbmVudHMiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNldFJlbW92ZWQiLCJyb2xlU2VsZWN0ZWQiLCJjaGFuZ2VSb2xlU2VsZWN0ZWQiLCJvcHRpb25zIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ1aWQiLCJhcHByb3ZhbCIsImludml0ZWQiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiUmVhY3RTZWxlY3QiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2VtcHR5IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJvbGUiLCJfZnJhbWVyTW90aW9uIiwicmVtb3ZlZCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImxpIiwia2V5IiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsIl9lZGl0aW9uIiwiSXRlbUFjdGlvbnMiLCJlZGl0IiwiRWRpdGlvbk1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwiX2FjdGlvbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb2lucy50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvY2hvaWNlLXJvbGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9wZW5kaW5nLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbnZpdGF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxL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