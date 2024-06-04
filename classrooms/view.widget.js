System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.45/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.45/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.45/config", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.45/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/ailearn-app@0.0.45/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0045MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0045MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0045ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp0045ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_10 = _aimpactAilearnApp0045Config;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_14 = _pragmateUi011Toast;
    }, function (_aimpactAilearnApp0045ComponentsCoverImageCode) {
      dependency_15 = _aimpactAilearnApp0045ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_18 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_19 = _pragmateUi011FormReactSelect;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/config', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/toast', dependency_14], ['@aimpact/ailearn-app/components/cover-image.code', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['pragmate-ui/form/react-select', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/image', dependency_21], ['framer-motion', dependency_22], ['pragmate-ui/form', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/classrooms/view.widget');
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
        hash: 222401144,
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
            /**
             * todo: define the valid return type for this getter
             */
            get isAdmin() {
              return false;
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
              _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.classrooms, '/classrooms/list'], [this.texts.breadcrumb.management, '']];
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
                console.error(e);
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
        hash: 4013459040,
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
            if (!store.model.found) return _react.default.createElement(_empty.EmptyEntity, null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJwYXJhbXMiLCJvYmplY3RpdmVzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsIm1lbWJlcnMiLCJpc0FkbWluIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsIm1hbmFnZW1lbnQiLCJpZCIsImlzUmVhZHkiLCJzcGVjcyIsIkNsYXNzcm9vbSIsImRhdGEiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfbmF2YmFySGVhZGVyIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl91aSIsIkVtcHR5RW50aXR5IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaWNvbnMiLCJfdG9hc3QiLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJfY292ZXJJbWFnZSIsIl9jb2RlU2VjdGlvbiIsIkhlYWRlckNvbnRhaW5lciIsIm9uU2F2ZSIsInRhcmdldCIsIm5hbWUiLCJqb2luIiwiQ29udGVudEVkaXRhYmxlIiwiYXMiLCJwbGFjZWhvbGRlciIsImNvbnRlbnQiLCJDb3ZlckltYWdlIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfcGVvcGxlIiwiX2FwcHJvdmFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGVvcGxlTGlzdCIsInJvbGUiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiX3JlYWN0U2VsZWN0IiwiQ2hvaWNlUm9sZSIsIml0ZW0iLCJzZXRSZW1vdmVkIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSdWxlIiwiX2ZyYW1lck1vdGlvbiIsInJlbW92ZWQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJsaSIsImtleSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsIkVkaXRpb25Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic2luZ2xlIiwiZWRpdCIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJfZWRpdGlvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9jaG9pY2UtcnVsZS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL3BlbmRpbmctZGF0YS50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2ludml0YXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FB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