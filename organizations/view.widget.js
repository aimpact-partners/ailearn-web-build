System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-04/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-04/components/navbar-header.code", "@aimpact/ailearn-app@0.0.46.dev-04/components/ui", "@aimpact/ailearn-app@0.0.46.dev-04/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev04MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0046Dev04MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0046Dev04ComponentsNavbarHeaderCode) {
      dependency_10 = _aimpactAilearnApp0046Dev04ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0046Dev04ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0046Dev04ComponentsUi;
    }, function (_aimpactAilearnApp0046Dev04Config) {
      dependency_12 = _aimpactAilearnApp0046Dev04Config;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-04"], ["@aimpact/ailearn-app", "0.0.46.dev-04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/toast', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/image', dependency_21], ['framer-motion', dependency_22], ['pragmate-ui/form', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-04/organizations/view.widget');
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
        hash: 760864612,
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
              _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.organizations, '/organizations/list'], [this.texts.breadcrumb.management, '']];
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
            }
            async load(id) {
              try {
                super.ready = false;
                const onChange = this.setBreadcrumb.bind(this);
                if (!this.#texts.ready) {
                  this.#texts.on('change', onChange);
                } else this.setBreadcrumb();
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
        hash: 3084920817,
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
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _empty = require("./empty");
          var _header = require("./header/header");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsImlzQWRtaW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwiZmluZCIsIm9yZyIsImlkIiwicm9sZSIsImVycm9yTG9hZGluZyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJPcmdhbml6YXRpb24iLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1hbmFnZW1lbnQiLCJ1bmRlZmluZWQiLCJnbG9iYWxUaGlzIiwiY29uIiwic3BlY3MiLCJkYXRhIiwiZSIsImRlbGV0ZSIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJpbnZpdGUiLCJhcHByb3ZlIiwicmVzIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwidXBkYXRlUm9sZSIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX25hdmJhckhlYWRlciIsIl91aSIsIkVtcHR5T3JnYW5pemF0aW9uIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJpY29uIiwiX2NvbnRleHQiLCJfaWNvbnMiLCJfdG9hc3QiLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwiY2xhc3NOYW1lIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJhY3Rpb25zIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2NvZGVTZWN0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwib25TYXZlIiwidGFyZ2V0IiwibmFtZSIsImpvaW4iLCJDb250ZW50RWRpdGFibGUiLCJhcyIsInBsYWNlaG9sZGVyIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9jb21wb25lbnRzIiwiX2VtcHR5IiwiX2hlYWRlciIsIl9wZW9wbGUiLCJfYXBwcm92YWwiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiZm91bmQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiUGVvcGxlTGlzdCIsIl9yZWFjdFNlbGVjdCIsIkNob2ljZVJvbGUiLCJpdGVtIiwic2V0UmVtb3ZlZCIsInJvbGVTZWxlY3RlZCIsImNoYW5nZVJvbGVTZWxlY3RlZCIsIm9wdGlvbnMiLCJsYWJlbCIsImxpc3QiLCJvblByb2Nlc3MiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsInVpZCIsImFwcHJvdmFsIiwiaW52aXRlZCIsImhhbmRsZVJvbGVDaGFuZ2UiLCJSZWFjdFNlbGVjdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJvbGUiLCJfZnJhbWVyTW90aW9uIiwicmVtb3ZlZCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImxpIiwia2V5IiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiX2VkaXRpb24iLCJJdGVtQWN0aW9ucyIsImVkaXQiLCJFZGl0aW9uTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInNpbmdsZSIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJfYWN0aW9ucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1yb2xlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENB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