System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.50/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.0.50/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.50/config", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.50/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/ailearn-app@0.0.50/components/cover-image.code", "@aimpact/chat@1.0.2/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0050MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0050MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk101Session) {
      dependency_8 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnApp0050ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0050ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp0050Config) {
      dependency_11 = _aimpactAilearnApp0050Config;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0050ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0050ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_15 = _pragmateUi011Toast;
    }, function (_aimpactAilearnApp0050ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp0050ComponentsCoverImageCode;
    }, function (_aimpactChat102SharedHooks) {
      dependency_17 = _aimpactChat102SharedHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedComponents) {
      dependency_19 = _aimpactChat102SharedComponents;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.50"], ["@aimpact/ailearn-app", "0.0.50"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.50/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/image', dependency_22], ['framer-motion', dependency_23], ['pragmate-ui/form', dependency_24], ['pragmate-ui/modal', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.50/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.50/classrooms/view.widget');
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
        hash: 3124238541,
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
        hash: 2711683958,
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
              content: store.model.name,
              editable: store.isAdmin
            }), _react.default.createElement(_ui.ContentEditable, {
              as: "p",
              name: "title",
              onSave: onSave,
              placeholder: texts.description.placeholder,
              content: store.model.description,
              editable: store.isAdmin
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImZvdW5kIiwiaXNBZG1pbiIsInBlb3BsZSIsImZpbmQiLCJpIiwicm9sZSIsImlkIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImdsb2JhbFRoaXMiLCJtIiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJzZXRUaW1lb3V0IiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbXMiLCJtYW5hZ2VtZW50IiwiaXNSZWFkeSIsInNwZWNzIiwiQ2xhc3Nyb29tIiwiZGF0YSIsImUiLCJkZWxldGUiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJpbnZpdGUiLCJhcHByb3ZlIiwicmVzIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwidXBkYXRlUm9sZSIsIl9uYXZiYXJIZWFkZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIkhlYWRlciIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX3VpIiwiRW1wdHlFbnRpdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9pY29ucyIsIl90b2FzdCIsIl9jb25maWciLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImJhc2VVcmwiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsIl9jb3ZlckltYWdlIiwiX2NvZGVTZWN0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwib25TYXZlIiwidGFyZ2V0IiwibmFtZSIsImpvaW4iLCJDb250ZW50RWRpdGFibGUiLCJhcyIsInBsYWNlaG9sZGVyIiwiY29udGVudCIsImVkaXRhYmxlIiwiQ292ZXJJbWFnZSIsIl9ob29rcyIsIl9ob29rczIiLCJfaGVhZGVyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiUGVvcGxlTGlzdCIsIl9yZWFjdFNlbGVjdCIsIkNob2ljZVJvbGUiLCJpdGVtIiwic2V0UmVtb3ZlZCIsInJvbGVTZWxlY3RlZCIsInNldFJvbGVTZWxlY3RlZCIsIm9wdGlvbnMiLCJsYWJlbCIsImxpc3QiLCJvblByb2Nlc3MiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSdWxlIiwiX2ZyYW1lck1vdGlvbiIsInJlbW92ZWQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJsaSIsImtleSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsIklucHV0IiwicmVxdWlyZWQiLCJFZGl0aW9uTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInNpbmdsZSIsImVkaXQiLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwiX2VkaXRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvY2hvaWNlLXJ1bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9wZW5kaW5nLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbnZpdGF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFG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