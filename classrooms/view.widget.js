System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/ailearn-app@0.0.32/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_7 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_9 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_12 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_13 = _pragmateUi011Toast;
    }, function (_aimpactAilearnApp0032ComponentsCoverImageCode) {
      dependency_14 = _aimpactAilearnApp0032ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_16 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_18 = _pragmateUi011FormReactSelect;
    }, function (_pragmateUi011List) {
      dependency_19 = _pragmateUi011List;
    }, function (_pragmateUi011Image) {
      dependency_20 = _pragmateUi011Image;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi011Form) {
      dependency_22 = _pragmateUi011Form;
    }, function (_pragmateUi011Modal) {
      dependency_23 = _pragmateUi011Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/toast', dependency_13], ['@aimpact/ailearn-app/components/cover-image.code', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/modal', dependency_23]]);
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
        hash: 37715864,
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
            /**
             * todo: define the valid return type for this getter
             */
            get isAdmin() {
              return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwiaXNBZG1pbiIsInVuZGVmaW5lZCIsInJlYWR5IiwiaWQiLCJzcGVjcyIsIkNsYXNzcm9vbSIsImRhdGEiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJFcnJvciIsImludml0ZSIsImFwcHJvdmUiLCJyZXMiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX25hdmJhckhlYWRlciIsIl9yZWFjdCIsIl9jb25maWciLCJfY29udGV4dCIsIkhlYWRlciIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwibWFuYWdlbWVudCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX3VpIiwiRW1wdHlFbnRpdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9pY29ucyIsIl90b2FzdCIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsImV2ZW50IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsIl9jb3ZlckltYWdlIiwiX2NvZGVTZWN0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwib25TYXZlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwiQ292ZXJJbWFnZSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfaG9va3MyIiwiX2VtcHR5IiwiX2hlYWRlcjIiLCJfcGVvcGxlIiwiX2FwcHJvdmFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGVvcGxlTGlzdCIsInJvbGUiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiX3JlYWN0U2VsZWN0IiwiQ2hvaWNlUm9sZSIsIml0ZW0iLCJzZXRSZW1vdmVkIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJ1bGUiLCJfZnJhbWVyTW90aW9uIiwicmVtb3ZlZCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImxpIiwia2V5IiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJFZGl0aW9uTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInNpbmdsZSIsImVkaXQiLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwiX2VkaXRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvY2hvaWNlLXJ1bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9wZW5kaW5nLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbnZpdGF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUws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