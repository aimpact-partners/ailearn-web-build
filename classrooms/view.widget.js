System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-app@0.0.31/components/ui", "react@18.2.0", "@aimpact/ailearn-app@0.0.31/config", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "@aimpact/ailearn-app@0.0.31/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0031ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0031ComponentsUi;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0031Config) {
      dependency_8 = _aimpactAilearnApp0031Config;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_pragmateUi006Icons) {
      dependency_10 = _pragmateUi006Icons;
    }, function (_pragmateUi006Toast) {
      dependency_11 = _pragmateUi006Toast;
    }, function (_aimpactAilearnApp0031ComponentsCoverImageCode) {
      dependency_12 = _aimpactAilearnApp0031ComponentsCoverImageCode;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.31"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.31/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/ailearn-app/components/cover-image.code', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/components', dependency_15], ['pragmate-ui/form/react-select', dependency_16], ['pragmate-ui/list', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.31/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.31/classrooms/view.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiQ2xhc3Nyb29tIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfdWkiLCJfcmVhY3QiLCJfY29uZmlnIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsIm1hbmFnZW1lbnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIkVtcHR5RW50aXR5IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaWNvbnMiLCJfdG9hc3QiLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJfY292ZXJJbWFnZSIsIl9jb2RlU2VjdGlvbiIsIkhlYWRlckNvbnRhaW5lciIsIm9uU2F2ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImpvaW4iLCJDb250ZW50RWRpdGFibGUiLCJzZWxlY3RvciIsIkNvdmVySW1hZ2UiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9lbXB0eSIsIl9oZWFkZXIyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlByZWxvYWRTY3JlZW4iLCJmb3VuZCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBlb3BsZUxpc3QiLCJyb2xlIiwiQXBwcm92YWxMaXN0IiwidHlwZSIsIl9yZWFjdFNlbGVjdCIsIkNob2ljZVJvbGUiLCJpdGVtIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJ1bGUiLCJrZXkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJFZGl0aW9uTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInNpbmdsZSIsImVkaXQiLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwiX2VkaXRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvY2hvaWNlLXJ1bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9wZW5kaW5nLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbnZpdGF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxLQUFLLEVBQUU7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