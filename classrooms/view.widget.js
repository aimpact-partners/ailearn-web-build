System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.3/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.1.3/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.1.3/config", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.3/components/ui", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/toast", "@aimpact/ailearn-app@0.1.3/components/cover-image.code", "@aimpact/chat@1.0.2/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/components", "pragmate-ui@1.0.0-beta.1/form/react-select", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/image", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/modal"], function (_export, _context2) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnApp013MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp013MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk101Session) {
      dependency_8 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnApp013ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp013ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp013Config) {
      dependency_11 = _aimpactAilearnApp013Config;
    }, function (_pragmateUi100Beta1Components) {
      dependency_12 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp013ComponentsUi) {
      dependency_13 = _aimpactAilearnApp013ComponentsUi;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_14 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_15 = _pragmateUi100Beta1Toast;
    }, function (_aimpactAilearnApp013ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp013ComponentsCoverImageCode;
    }, function (_aimpactChat102SharedHooks) {
      dependency_17 = _aimpactChat102SharedHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedComponents) {
      dependency_19 = _aimpactChat102SharedComponents;
    }, function (_pragmateUi100Beta1FormReactSelect) {
      dependency_20 = _pragmateUi100Beta1FormReactSelect;
    }, function (_pragmateUi100Beta1List) {
      dependency_21 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Image) {
      dependency_22 = _pragmateUi100Beta1Image;
    }, function (_framerMotion2) {
      dependency_23 = _framerMotion2;
    }, function (_pragmateUi100Beta1Form) {
      dependency_24 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_25 = _pragmateUi100Beta1Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3"], ["@aimpact/ailearn-app", "0.1.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/image', dependency_22], ['framer-motion', dependency_23], ['pragmate-ui/form', dependency_24], ['pragmate-ui/modal', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.3/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3/classrooms/view.widget');
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
        hash: 3774788326,
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
              return !!this.#model?.isAdmin;
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
        hash: 1318348832,
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
            if (!store.model.found) return _react.default.createElement("app-missing-control", null);
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
        hash: 2308008876,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJwYXJhbXMiLCJvYmplY3RpdmVzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsIm1lbWJlcnMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJmb3VuZCIsImlzQWRtaW4iLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsIm0iLCJ1bmRlZmluZWQiLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsIm1hbmFnZW1lbnQiLCJpZCIsImlzUmVhZHkiLCJzcGVjcyIsIkNsYXNzcm9vbSIsImRhdGEiLCJlIiwiZGVsZXRlIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfbmF2YmFySGVhZGVyIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl91aSIsIkVtcHR5RW50aXR5IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaWNvbnMiLCJfdG9hc3QiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJjb2RlIiwiam9pblNwZWNzIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJiYXNlVXJsIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJfY292ZXJJbWFnZSIsIl9jb2RlU2VjdGlvbiIsIkhlYWRlckNvbnRhaW5lciIsIm9uU2F2ZSIsInRhcmdldCIsIm5hbWUiLCJqb2luIiwiQ29udGVudEVkaXRhYmxlIiwiYXMiLCJwbGFjZWhvbGRlciIsImNvbnRlbnQiLCJlZGl0YWJsZSIsIkNvdmVySW1hZ2UiLCJfaG9va3MiLCJfaG9va3MyIiwiX2hlYWRlciIsIl9wZW9wbGUiLCJfYXBwcm92YWwiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiaGFzQWNjZXNzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQXBwcm92YWxMaXN0IiwidHlwZSIsIlBlb3BsZUxpc3QiLCJyb2xlIiwiX3JlYWN0U2VsZWN0IiwiQ2hvaWNlUm9sZSIsIml0ZW0iLCJzZXRSZW1vdmVkIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ1aWQiLCJhcHByb3ZhbCIsImludml0ZWQiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2VtcHR5IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJ1bGUiLCJfZnJhbWVyTW90aW9uIiwicmVtb3ZlZCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImxpIiwia2V5IiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsIkVkaXRpb25Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwiZWRpdCIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJfZWRpdGlvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9jaG9pY2UtcnVsZS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL3BlbmRpbmctZGF0YS50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2ludml0YXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxL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