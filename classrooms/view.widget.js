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
          "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['@aimpact/ailearn-app/components/cover-image.code', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/form/react-select', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/form', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/classrooms/view.widget');
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
        hash: 2348580587,
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
        hash: 4045570173,
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
        hash: 3175781973,
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
            }, _react.default.createElement(_choiceRule.ChoiceRole, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiQ2xhc3Nyb29tIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfbmF2YmFySGVhZGVyIiwiX3JlYWN0IiwiX2NvbmZpZyIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiQVBQX05BTUUiLCJtYW5hZ2VtZW50IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfdWkiLCJFbXB0eUVudGl0eSIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2ljb25zIiwiX3RvYXN0IiwiQ29kZVNlY3Rpb24iLCJjb2RlIiwiam9pblNwZWNzIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2NvdmVySW1hZ2UiLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJqb2luIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJDb3ZlckltYWdlIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9ob29rczIiLCJfZW1wdHkiLCJfaGVhZGVyMiIsIl9wZW9wbGUiLCJfYXBwcm92YWwiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiZm91bmQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQZW9wbGVMaXN0Iiwicm9sZSIsIkFwcHJvdmFsTGlzdCIsInR5cGUiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInJvbGVTZWxlY3RlZCIsInNldFJvbGVTZWxlY3RlZCIsIm9wdGlvbnMiLCJsYWJlbCIsImxpc3QiLCJvblByb2Nlc3MiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsInVpZCIsImFwcHJvdmFsIiwiaW52aXRlZCIsImhhbmRsZVJvbGVDaGFuZ2UiLCJGcmFnbWVudCIsIlJlYWN0U2VsZWN0Iiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSdWxlIiwia2V5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJGb3JtIiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiRWRpdGlvbk1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJzaW5nbGUiLCJlZGl0IiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsIl9lZGl0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1ydWxlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FB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