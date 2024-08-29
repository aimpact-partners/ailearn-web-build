System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-app@0.1.6-dev.07/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/alert", "@aimpact/ailearn-app@0.1.6-dev.07/components/navbar-header.code", "@aimpact/ailearn-app@0.1.6-dev.07/components/ui", "@aimpact/ailearn-app@0.1.6-dev.07/config", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/toast", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/form/react-select", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/image", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev07MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp016Dev07MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_10 = _pragmateUi100Beta2Alert;
    }, function (_aimpactAilearnApp016Dev07ComponentsNavbarHeaderCode) {
      dependency_11 = _aimpactAilearnApp016Dev07ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp016Dev07ComponentsUi) {
      dependency_12 = _aimpactAilearnApp016Dev07ComponentsUi;
    }, function (_aimpactAilearnApp016Dev07Config) {
      dependency_13 = _aimpactAilearnApp016Dev07Config;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_14 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_15 = _pragmateUi100Beta2Toast;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2FormReactSelect) {
      dependency_17 = _pragmateUi100Beta2FormReactSelect;
    }, function (_pragmateUi100Beta2Components) {
      dependency_18 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2List) {
      dependency_19 = _pragmateUi100Beta2List;
    }, function (_pragmateUi100Beta2Image) {
      dependency_20 = _pragmateUi100Beta2Image;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi100Beta2Form) {
      dependency_22 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_23 = _pragmateUi100Beta2Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.07"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/toast', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.07/organizations/view.widget');
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
        hash: 77906207,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJwYXJhbXMiLCJvYmplY3RpdmVzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsIm1lbWJlcnMiLCJpc0FkbWluIiwiZXJyb3JMb2FkaW5nIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsIk9yZ2FuaXphdGlvbiIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwib3JnYW5pemF0aW9ucyIsIm1hbmFnZW1lbnQiLCJ1bmRlZmluZWQiLCJpZCIsInNwZWNzIiwiZGF0YSIsImUiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidXNlTW9kdWxlQ29udGV4dCIsImNvaW5zIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydCIsInR5cGUiLCJjbGFzc05hbWUiLCJsYWJlbCIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl91aSIsIkVtcHR5T3JnYW5pemF0aW9uIiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImljb24iLCJfaWNvbnMiLCJfdG9hc3QiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJjb2RlIiwiam9pblNwZWNzIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJiYXNlVXJsIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJhY3Rpb25zIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2NvZGVTZWN0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwib25TYXZlIiwidGFyZ2V0IiwibmFtZSIsImpvaW4iLCJDb250ZW50RWRpdGFibGUiLCJhcyIsInBsYWNlaG9sZGVyIiwiY29udGVudCIsImVkaXRhYmxlIiwiZGVzY3JpcHRpb24iLCJfaG9va3MiLCJfaGVhZGVyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsIl9jb2lucyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmb3VuZCIsImhhc0FjY2VzcyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFwcHJvdmFsTGlzdCIsIlBlb3BsZUxpc3QiLCJyb2xlIiwiX3JlYWN0U2VsZWN0IiwiX2NvbXBvbmVudHMiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNldFJlbW92ZWQiLCJyb2xlU2VsZWN0ZWQiLCJjaGFuZ2VSb2xlU2VsZWN0ZWQiLCJvcHRpb25zIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ1aWQiLCJhcHByb3ZhbCIsImludml0ZWQiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSb2xlIiwiX2ZyYW1lck1vdGlvbiIsInJlbW92ZWQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJsaSIsImtleSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsIklucHV0IiwicmVxdWlyZWQiLCJfZWRpdGlvbiIsIkl0ZW1BY3Rpb25zIiwiZWRpdCIsIkVkaXRpb25Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsIl9hY3Rpb25zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29pbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1yb2xlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdB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