System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32-dev.48/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-dev.48/config", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32-dev.48/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/ailearn-app@0.0.32-dev.48/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032Dev48ComponentsNavbarHeaderCode) {
      dependency_7 = _aimpactAilearnApp0032Dev48ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0032Dev48Config) {
      dependency_9 = _aimpactAilearnApp0032Dev48Config;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032Dev48ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032Dev48ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_12 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_13 = _pragmateUi011Toast;
    }, function (_aimpactAilearnApp0032Dev48ComponentsCoverImageCode) {
      dependency_14 = _aimpactAilearnApp0032Dev48ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.32-dev.48"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/config', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/toast', dependency_13], ['@aimpact/ailearn-app/components/cover-image.code', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.48/classrooms/view.widget');
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
        hash: 2499230282,
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
              breadcrumb: [[texts.breadcrumb.classrooms, '/classrooms/list'], [texts.breadcrumb.management, '']]
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
        hash: 2691463818,
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
              onSave: onSave
            }, store.model.name), _react.default.createElement(_ui.ContentEditable, {
              as: "p",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwiaXNBZG1pbiIsInVuZGVmaW5lZCIsInJlYWR5IiwiaWQiLCJzcGVjcyIsIkNsYXNzcm9vbSIsImRhdGEiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJFcnJvciIsImludml0ZSIsImFwcHJvdmUiLCJyZXMiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX25hdmJhckhlYWRlciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiSGVhZGVyIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwibWFuYWdlbWVudCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX3VpIiwiRW1wdHlFbnRpdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZSIsIl9pY29ucyIsIl90b2FzdCIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsImV2ZW50IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsIl9jb3ZlckltYWdlIiwiX2NvZGVTZWN0aW9uIiwiSGVhZGVyQ29udGFpbmVyIiwib25TYXZlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiam9pbiIsIkNvbnRlbnRFZGl0YWJsZSIsImFzIiwiQ292ZXJJbWFnZSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfaG9va3MyIiwiX2VtcHR5IiwiX2hlYWRlcjIiLCJfcGVvcGxlIiwiX2FwcHJvdmFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGVvcGxlTGlzdCIsInJvbGUiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiX3JlYWN0U2VsZWN0IiwiQ2hvaWNlUm9sZSIsIml0ZW0iLCJzZXRSZW1vdmVkIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIl9saXN0IiwiX2l0ZW0iLCJsYWJlbHMiLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJ1bGUiLCJfZnJhbWVyTW90aW9uIiwicmVtb3ZlZCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsImxpIiwia2V5IiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInBlbmRpbmciLCJ0b2dnbGVNb2RhbCIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsInJlcGxhY2UiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfZm9ybSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJFZGl0aW9uTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInNpbmdsZSIsImVkaXQiLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwiX2VkaXRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvY2hvaWNlLXJ1bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9wZW5kaW5nLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbnZpdGF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxD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