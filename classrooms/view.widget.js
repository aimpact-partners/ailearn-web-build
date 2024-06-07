System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.46.dev-10/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-10/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-10/config", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-10/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/ailearn-app@0.0.46.dev-10/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0046Dev10MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev10MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0046Dev10ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0046Dev10ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp0046Dev10Config) {
      dependency_11 = _aimpactAilearnApp0046Dev10Config;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev10ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0046Dev10ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_15 = _pragmateUi011Toast;
    }, function (_aimpactAilearnApp0046Dev10ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp0046Dev10ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_19 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_20 = _pragmateUi011FormReactSelect;
    }, function (_pragmateUi011List) {
      dependency_21 = _pragmateUi011List;
    }, function (_pragmateUi011Image) {
      dependency_22 = _pragmateUi011Image;
    }, function (_framerMotion2) {
      dependency_23 = _framerMotion2;
    }, function (_pragmateUi011Form) {
      dependency_24 = _pragmateUi011Form;
    }, function (_pragmateUi011Modal) {
      dependency_25 = _pragmateUi011Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-10"], ["@aimpact/ailearn-app", "0.0.46.dev-10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-10/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/image', dependency_22], ['framer-motion', dependency_23], ['pragmate-ui/form', dependency_24], ['pragmate-ui/modal', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-10/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-10/classrooms/view.widget');
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
        hash: 1279565521,
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
          var _session = require("@aimpact/chat-sdk/session");
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #found = true;
            get found() {
              return this.#found;
            }
            get isAdmin() {
              return !!this.#model?.people.find(i => i.role === 'manager' && i.id === _session.sessionWrapper.user.id);
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              globalThis.m = this;
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
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
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.classrooms, '/classrooms/list'], [this.texts.breadcrumb.management, '']];
              }, 100);
            }
            async load(id) {
              try {
                super.ready = false;
                await this.isReady;
                this.setBreadcrumb();
                this.#params = id;
                const specs = {
                  id
                };
                this.#model = new _core.Classroom(specs);
                if (id) {
                  const data = await this.#model.load({
                    id
                  });
                }
              } catch (e) {
                super.ready = true;
                console.lo;
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
                if (!status) throw new Error('ERROR_PUBLISHING_CLASSROOM');
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
        hash: 96155070,
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
              breadcrumb: true
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2774478415,
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
        hash: 2255378898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyEntity = EmptyEntity;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyEntity() {
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
              href: "/classrooms/create",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/header/code-section
      *******************************************/

      ims.set('./views/header/code-section', {
        hash: 1109021617,
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
        hash: 3889669588,
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
              as: "h1",
              name: "title",
              onSave: onSave,
              placeholder: texts.title.placeholder,
              content: store.model.name
            }), _react.default.createElement(_ui.ContentEditable, {
              as: "p",
              name: "title",
              onSave: onSave,
              placeholder: texts.description.placeholder,
              content: store.model.description
            })), _react.default.createElement("div", {
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
        hash: 1215292343,
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
              className: "app-classroom-creation-page",
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
      INTERNAL MODULE: ./views/list/approval/choice-rule
      *************************************************/

      ims.set('./views/list/approval/choice-rule', {
        hash: 4153822883,
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
            const [roleSelected, setRoleSelected] = _react.default.useState('member');
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
            const handleRoleChange = event => setRoleSelected(event.target.value);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "div-select__button"
            }, _react.default.createElement(_reactSelect.ReactSelect, {
              className: "select-option",
              options: options,
              value: roleSelected,
              onChange: handleRoleChange
            })), _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-action": "approve",
              onClick: onProcess,
              bordered: true,
              disabled: !roleSelected
            }, texts.actions.approve));
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
        hash: 163814243,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("pragmate-ui/icons");
          var _choiceRule = require("./choice-rule");
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
            }, _react.default.createElement(_choiceRule.ChoiceRole, {
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
        hash: 2030416860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PeopleList = PeopleList;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 3801553526,
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
              email: '',
              role: ''
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
            const options = [{
              value: 'member',
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
            }];
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
        hash: 2998754882,
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
            }, item.name)), store.isAdmin && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
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
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImZvdW5kIiwiaXNBZG1pbiIsInBlb3BsZSIsImZpbmQiLCJpIiwicm9sZSIsImlkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImdsb2JhbFRoaXMiLCJtIiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbXMiLCJtYW5hZ2VtZW50IiwiaXNSZWFkeSIsInNwZWNzIiwiQ2xhc3Nyb29tIiwiZGF0YSIsImUiLCJjb25zb2xlIiwibG8iLCJkZWxldGUiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJpbnZpdGUiLCJhcHByb3ZlIiwicmVzIiwiZXJyb3IiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX25hdmJhckhlYWRlciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiSGVhZGVyIiwidXNlTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfdWkiLCJFbXB0eUVudGl0eSIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2ljb25zIiwiX3RvYXN0IiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYmFzZVVybCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2NvdmVySW1hZ2UiLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJ0YXJnZXQiLCJuYW1lIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsImFzIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiQ292ZXJJbWFnZSIsIl9ob29rcyIsIl9ob29rczIiLCJfaGVhZGVyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiUGVvcGxlTGlzdCIsIl9yZWFjdFNlbGVjdCIsIkNob2ljZVJvbGUiLCJpdGVtIiwic2V0UmVtb3ZlZCIsInJvbGVTZWxlY3RlZCIsInNldFJvbGVTZWxlY3RlZCIsIm9wdGlvbnMiLCJsYWJlbCIsImxpc3QiLCJvblByb2Nlc3MiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSdWxlIiwiX2ZyYW1lck1vdGlvbiIsInJlbW92ZWQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJsaSIsImtleSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsIkVkaXRpb25Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic2luZ2xlIiwiZWRpdCIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJfZWRpdGlvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9jaG9pY2UtcnVsZS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL3BlbmRpbmctZGF0YS50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2ludml0YXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcs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