System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-app@0.0.27/components/ui", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "@aimpact/ailearn-app@0.0.27/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_8 = _aimpactAilearnApp0027Config;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_pragmateUi006Icons) {
      dependency_10 = _pragmateUi006Icons;
    }, function (_pragmateUi006Toast) {
      dependency_11 = _pragmateUi006Toast;
    }, function (_aimpactAilearnApp0027ComponentsCoverImageCode) {
      dependency_12 = _aimpactAilearnApp0027ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_14 = _beyondJsReact18Widgets104Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/ailearn-app/components/cover-image.code', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/form/react-select', dependency_16], ['pragmate-ui/list', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/classrooms/view.widget');
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
        hash: 2690229917,
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
                this.#model = new _core.Classroom(specs);
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
        hash: 3865526598,
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.classrooms, '/classrooms/list'], [texts.breadcrumb.management, '']]
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
        hash: 4220760104,
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
              href: "/classroom/management/new",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/header/code-section
      *******************************************/

      ims.set('./views/header/code-section', {
        hash: 1893585178,
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
          //@ts-ignore

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
        hash: 2070664987,
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
            if (!store.model.found) return _react.default.createElement(_empty.EmptyEntity, null);
            const value = {
              store,
              fetching,
              texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, {
              className: "app-classroom-creation-page",
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
      INTERNAL MODULE: ./views/list/approval/choice-rule
      *************************************************/

      ims.set('./views/list/approval/choice-rule', {
        hash: 1340364912,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChoiceRule = ChoiceRule;
          var _react = require("react");
          var _context = require("../../context");
          var _toast = require("pragmate-ui/toast");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _components = require("pragmate-ui/components");
          function ChoiceRule({
            item
          }) {
            const [selectRole, setSelectRole] = _react.default.useState('member');
            if (!item.invited) return null;
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
        hash: 2200027350,
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
            }, _react.default.createElement(_choiceRule.ChoiceRule, {
              item: item
            }), _react.default.createElement(_icons.IconButton, {
              icon: "moreVert",
              className: "circle"
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
        hash: 1360342567,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiQ2xhc3Nyb29tIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfdWkiLCJfcmVhY3QiLCJfY29uZmlnIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsIm1hbmFnZW1lbnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIkVtcHR5RW50aXR5IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaWNvbnMiLCJfdG9hc3QiLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJfY292ZXJJbWFnZSIsIl9jb2RlU2VjdGlvbiIsIkhlYWRlckNvbnRhaW5lciIsIm9uU2F2ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImpvaW4iLCJDb250ZW50RWRpdGFibGUiLCJzZWxlY3RvciIsIkNvdmVySW1hZ2UiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9lbXB0eSIsIl9oZWFkZXIyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJmb3VuZCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBlb3BsZUxpc3QiLCJyb2xlIiwiQXBwcm92YWxMaXN0IiwidHlwZSIsIl9yZWFjdFNlbGVjdCIsIkNob2ljZVJ1bGUiLCJpdGVtIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJpbnZpdGVkIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwidWlkIiwiYXBwcm92YWwiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiX2xpc3QiLCJfaXRlbSIsImxhYmVscyIsIml0ZW1zIiwic2V0SXRlbXMiLCJsZW5ndGgiLCJFbXB0eUxpc3QiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfaW1hZ2UiLCJfY2hvaWNlUnVsZSIsImtleSIsImF1dGhvcml6ZWQiLCJwaG90b1VybCIsIkltYWdlIiwic3JjIiwiSWNvbiIsImVtYWlsIiwiUGVuZGluZ0RhdGEiLCJfaW52aXRhdGlvbkZvcm0iLCJzZXRTaG93IiwicGVuZGluZyIsInRvZ2dsZU1vZGFsIiwiZW1wdHlUZXh0IiwibGFiZWxMaXN0IiwicmVwbGFjZSIsIkludml0YXRpb25Gb3JtIiwib25DbG9zZSIsIl9mb3JtIiwiX21vZGFsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJyb2xlVHlwZSIsImhhbmRsZUNsb3NlIiwib25TdWJtaXQiLCJyZXNwb25zZSIsInN5c3RlbSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsIm1vZGFsVGl0bGUiLCJtb2RhbCIsIk1vZGFsIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIkVkaXRpb25Nb2RhbCIsInNpbmdsZSIsImVkaXQiLCJpbmZvIiwiX2VkaXRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvY2hvaWNlLXJ1bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9wZW5kaW5nLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbnZpdGF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWQsVUFBQSxHQUFB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