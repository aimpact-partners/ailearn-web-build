System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.46.dev-11/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-11/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-11/config", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-11/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/ailearn-app@0.0.46.dev-11/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev11MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev11MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0046Dev11ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0046Dev11ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp0046Dev11Config) {
      dependency_11 = _aimpactAilearnApp0046Dev11Config;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev11ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0046Dev11ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_15 = _pragmateUi011Toast;
    }, function (_aimpactAilearnApp0046Dev11ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp0046Dev11ComponentsCoverImageCode;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-11"], ["@aimpact/ailearn-app", "0.0.46.dev-11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-11/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/image', dependency_22], ['framer-motion', dependency_23], ['pragmate-ui/form', dependency_24], ['pragmate-ui/modal', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-11/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-11/classrooms/view.widget');
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
        hash: 4076513027,
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
        hash: 2522348492,
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
              closeBackdrop: false,
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
        hash: 2241312517,
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
            }, texts.actions.edit), _react.default.createElement(_edition.EditionModal, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImZvdW5kIiwiaXNBZG1pbiIsInBlb3BsZSIsImZpbmQiLCJpIiwicm9sZSIsImlkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImdsb2JhbFRoaXMiLCJtIiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbXMiLCJtYW5hZ2VtZW50IiwiaXNSZWFkeSIsInNwZWNzIiwiQ2xhc3Nyb29tIiwiZGF0YSIsImUiLCJjb25zb2xlIiwibG8iLCJkZWxldGUiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJpbnZpdGUiLCJhcHByb3ZlIiwicmVzIiwiZXJyb3IiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX25hdmJhckhlYWRlciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiSGVhZGVyIiwidXNlTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfdWkiLCJFbXB0eUVudGl0eSIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2ljb25zIiwiX3RvYXN0IiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYmFzZVVybCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2NvdmVySW1hZ2UiLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJ0YXJnZXQiLCJuYW1lIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsImFzIiwicGxhY2Vob2xkZXIiLCJjb250ZW50IiwiQ292ZXJJbWFnZSIsIl9ob29rcyIsIl9ob29rczIiLCJfaGVhZGVyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiUGVvcGxlTGlzdCIsIl9yZWFjdFNlbGVjdCIsIkNob2ljZVJvbGUiLCJpdGVtIiwic2V0UmVtb3ZlZCIsInJvbGVTZWxlY3RlZCIsInNldFJvbGVTZWxlY3RlZCIsIm9wdGlvbnMiLCJsYWJlbCIsImxpc3QiLCJvblByb2Nlc3MiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSdWxlIiwiX2ZyYW1lck1vdGlvbiIsInJlbW92ZWQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJsaSIsImtleSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsIklucHV0IiwicmVxdWlyZWQiLCJFZGl0aW9uTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInNpbmdsZSIsImVkaXQiLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwiX2VkaXRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvY2hvaWNlLXJ1bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9wZW5kaW5nLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbnZpdGF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7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