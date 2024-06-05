System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-app@0.0.46.dev-07/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.0.46.dev-07/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-07/config", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.46.dev-07/components/ui", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/toast", "@aimpact/ailearn-app@0.0.46.dev-07/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/image", "framer-motion@10.18.0", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev07MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0046Dev07MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp0046Dev07ComponentsNavbarHeaderCode) {
      dependency_8 = _aimpactAilearnApp0046Dev07ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0046Dev07Config) {
      dependency_10 = _aimpactAilearnApp0046Dev07Config;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0046Dev07ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev07ComponentsUi;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Toast) {
      dependency_14 = _pragmateUi011Toast;
    }, function (_aimpactAilearnApp0046Dev07ComponentsCoverImageCode) {
      dependency_15 = _aimpactAilearnApp0046Dev07ComponentsCoverImageCode;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-07"], ["@aimpact/ailearn-app", "0.0.46.dev-07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-07/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/config', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/toast', dependency_14], ['@aimpact/ailearn-app/components/cover-image.code', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['pragmate-ui/form/react-select', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/image', dependency_21], ['framer-motion', dependency_22], ['pragmate-ui/form', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-07/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-07/classrooms/view.widget');
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
        hash: 3378874066,
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
        hash: 4198292223,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJwYXJhbXMiLCJvYmplY3RpdmVzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsIm1lbWJlcnMiLCJpc0FkbWluIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsInNldEJyZWFkY3J1bWIiLCJvbkNoYW5nZSIsImJpbmQiLCJvZmYiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsIm1hbmFnZW1lbnQiLCJpZCIsImlzUmVhZHkiLCJzcGVjcyIsIkNsYXNzcm9vbSIsImRhdGEiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfbmF2YmFySGVhZGVyIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl91aSIsIkVtcHR5RW50aXR5IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaWNvbnMiLCJfdG9hc3QiLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJfY292ZXJJbWFnZSIsIl9jb2RlU2VjdGlvbiIsIkhlYWRlckNvbnRhaW5lciIsIm9uU2F2ZSIsInRhcmdldCIsIm5hbWUiLCJqb2luIiwiQ29udGVudEVkaXRhYmxlIiwiYXMiLCJwbGFjZWhvbGRlciIsImNvbnRlbnQiLCJDb3ZlckltYWdlIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfcGVvcGxlIiwiX2FwcHJvdmFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQXBwcm92YWxMaXN0IiwidHlwZSIsIlBlb3BsZUxpc3QiLCJyb2xlIiwiX3JlYWN0U2VsZWN0IiwiQ2hvaWNlUm9sZSIsIml0ZW0iLCJzZXRSZW1vdmVkIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwidWlkIiwiYXBwcm92YWwiLCJpbnZpdGVkIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9pdGVtIiwibGFiZWxzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSdWxlIiwiX2ZyYW1lck1vdGlvbiIsInJlbW92ZWQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJsaSIsImtleSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJyZXBsYWNlIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX2Zvcm0iLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsIkVkaXRpb25Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic2luZ2xlIiwiZWRpdCIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJfZWRpdGlvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9jaG9pY2UtcnVsZS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL3BlbmRpbmctZGF0YS50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2ludml0YXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQsSUFBQWUsS0FBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLFdBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsTUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixlQUFBLEdBQUF0QixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRWSxNQUFBLENBQUFJLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLFVBQVcsR0FBYSxFQUFFO1lBQzFCLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDSCxLQUFLLENBQUNHLFFBQVE7WUFDM0I7WUFFQSxJQUFJQyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksUUFBUTtZQUMzQjtZQUVBLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxPQUFPO1lBQzFCO1lBQ0E7OztZQUdBLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPLEtBQUs7WUFDYjtZQUVBLENBQUFDLEtBQU0sR0FBK0IsSUFBSVYsTUFBQSxDQUFBVyxZQUFZLENBQUNWLGVBQUEsQ0FBQVcsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUVBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNLLEtBQUs7WUFDeEM7WUFDQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7WUFDNUM7WUFDQXZCLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQVEsS0FBTSxHQUFHZ0IsU0FBUztjQUN2QixLQUFLLENBQUNKLEtBQUssR0FBRyxLQUFLO1lBQ3BCO1lBRUFLLGFBQWFBLENBQUE7Y0FDWixNQUFNQyxRQUFRLEdBQUcsSUFBSSxDQUFDRCxhQUFhLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUM7Y0FDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNLLEtBQUssRUFBRTtnQkFDdkIsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ08sRUFBRSxDQUFDLFFBQVEsRUFBRUksUUFBUSxDQUFDO2dCQUNsQzs7Y0FFRCxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDYSxHQUFHLENBQUMsUUFBUSxFQUFFRixRQUFRLENBQUM7Y0FDbkN0QixXQUFBLENBQUF5QixZQUFZLENBQUNDLE9BQU8sR0FBRyxLQUFLO2NBQzVCQyxVQUFVLENBQUNDLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQjVCLFdBQUEsQ0FBQXlCLFlBQVksQ0FBQ0ksVUFBVSxHQUFHLENBQ3pCLENBQUMsSUFBSSxDQUFDbEIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsRUFDdEQsQ0FBQyxJQUFJLENBQUNuQixLQUFLLENBQUNrQixVQUFVLENBQUNFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FDdEM7Y0FDRixDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1I7WUFDQSxNQUFNeEMsSUFBSUEsQ0FBQ3lDLEVBQUU7Y0FDWixJQUFJO2dCQUNILEtBQUssQ0FBQ2hCLEtBQUssR0FBRyxLQUFLO2dCQUNuQixNQUFNLElBQUksQ0FBQ2lCLE9BQU87Z0JBRWxCLElBQUksQ0FBQ1osYUFBYSxFQUFFO2dCQUVwQixJQUFJLENBQUMsQ0FBQWhCLE1BQU8sR0FBRzJCLEVBQUU7Z0JBRWpCLE1BQU1FLEtBQUssR0FBRztrQkFBRUY7Z0JBQUUsQ0FBRTtnQkFFcEIsSUFBSSxDQUFDLENBQUE1QixLQUFNLEdBQUcsSUFBSU4sS0FBQSxDQUFBcUMsU0FBUyxDQUFDRCxLQUFLLENBQUM7Z0JBRWxDLElBQUlGLEVBQUUsRUFBRTtrQkFDUCxNQUFNSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWhDLEtBQU0sQ0FBQ2IsSUFBSSxDQUFDO29CQUFFeUM7a0JBQUUsQ0FBRSxDQUFDOztlQUU1QyxDQUFDLE9BQU9LLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULEtBQUssQ0FBQ3JCLEtBQUssR0FBRyxJQUFJOztZQUVwQjtZQUVBLE1BQU13QixNQUFNQSxDQUFDUixFQUFFO2NBQ2QsSUFBSSxDQUFDLENBQUE1QixLQUFNLENBQUMwQixVQUFVLENBQUNXLE1BQU0sQ0FBQ1QsRUFBRSxDQUFDO2NBQ2pDLElBQUksQ0FBQ1UsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBLE1BQU1DLElBQUlBLENBQUNDLE1BQU07Y0FDaEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNWCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUE3QixNQUFPLEtBQUssS0FBSyxHQUFHO2tCQUFFLEdBQUd1QyxNQUFNO2tCQUFFWixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUEzQjtnQkFBTyxDQUFFLEdBQUd1QyxNQUFNO2dCQUMvRSxNQUFNO2tCQUFFRSxNQUFNO2tCQUFFVjtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUNoQyxLQUFLLENBQUN1QyxJQUFJLENBQUNULEtBQUssQ0FBQztnQkFFckQsSUFBSSxDQUFDWSxNQUFNLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7Z0JBRTFELE9BQU9YLElBQUk7ZUFDWCxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlVLEtBQUssQ0FBQ1YsQ0FBQyxDQUFDO2VBQ2xCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNRyxNQUFNQSxDQUFDSixNQUFNO2NBQ2xCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTtrQkFBRUMsTUFBTTtrQkFBRVY7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDaEMsS0FBSyxDQUFDNEMsTUFBTSxDQUFDSixNQUFNLENBQUM7Z0JBQ3hELElBQUksQ0FBQ0UsTUFBTSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO2dCQUNuRCxPQUFPWCxJQUFJO2VBQ1gsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJVSxLQUFLLENBQUNWLENBQUMsQ0FBQztlQUNsQixTQUFTO2dCQUNULElBQUksQ0FBQ1EsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTUksT0FBT0EsQ0FBQ0wsTUFBTTtjQUNuQixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1LLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQzlDLEtBQUssQ0FBQzZDLE9BQU8sQ0FBQ0wsTUFBTSxDQUFDO2dCQUU1QyxJQUFJLENBQUNNLEdBQUcsQ0FBQ0osTUFBTSxFQUFFO2tCQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Z0JBR3ZDLE9BQU9HLEdBQUc7ZUFDVixDQUFDLE9BQU9iLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ1EsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTU0sTUFBTUEsQ0FBQ1AsTUFBTTtjQUNsQixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1LLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQzlDLEtBQUssQ0FBQytDLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDO2dCQUMzQyxPQUFPTSxHQUFHO2VBQ1YsQ0FBQyxPQUFPYixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUYsQ0FBQyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNTyxVQUFVQSxDQUFDUixNQUFNO2NBQ3RCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTUssR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDOUMsS0FBSyxDQUFDZ0QsVUFBVSxDQUFDUixNQUFNLENBQUM7Z0JBRS9DLE9BQU9NLEdBQUc7ZUFDVixDQUFDLE9BQU9iLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ1EsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBaEQsT0FBQSxDQUFBVixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUtELElBQUFrRSxhQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTBFLE1BQUEsR0FBQTFFLE9BQUE7VUFFQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNPO1VBQVUsU0FBVTRFLE1BQU1BLENBQUE7WUFDaEMsTUFBTTtjQUFFN0M7WUFBSyxDQUFFLEdBQUcsSUFBQTRDLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDcEMsT0FDQ0gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sYUFBQSxDQUFBTyxZQUFZO2NBQ1ovQixVQUFVO1lBQUEsRUFDVDtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUF5QixNQUFBLEdBQUExRSxPQUFBO1VBU08sTUFBTWlGLGFBQWEsR0FBQWhFLE9BQUEsQ0FBQWdFLGFBQUEsR0FBR1AsTUFBQSxDQUFBSSxPQUFLLENBQUNJLGFBQWEsQ0FBQyxFQUFtQixDQUFDO1VBQzlELE1BQU1MLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1ILE1BQUEsQ0FBQUksT0FBSyxDQUFDSyxVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDaEUsT0FBQSxDQUFBNEQsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVnRFLElBQUFILE1BQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBb0YsV0FBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQXFGLEdBQUEsR0FBQXJGLE9BQUE7VUFFTSxTQUFVc0YsV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUV2RDtZQUFLLENBQUUsR0FBRyxJQUFBNEMsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUNwQyxPQUNDSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTSxHQUFBLENBQUFFLFNBQVM7Y0FBQ0MsSUFBSSxFQUFFekQsS0FBSyxDQUFDMEQsS0FBSyxDQUFDQyxLQUFLO2NBQUVDLFdBQVcsRUFBRTVELEtBQUssQ0FBQzBELEtBQUssQ0FBQ0UsV0FBVztjQUFFQyxJQUFJLEVBQUM7WUFBTSxHQUNwRmxCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFvQyxHQUNsRG5CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNLLFdBQUEsQ0FBQVUsSUFBSTtjQUFDQyxJQUFJLEVBQUMsb0JBQW9CO2NBQUNGLFNBQVMsRUFBQztZQUFzQixHQUM5RDlELEtBQUssQ0FBQ2lFLE9BQU8sQ0FBQ0MsTUFBTSxDQUNmLENBQ0YsQ0FDSztVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBdkIsTUFBQSxHQUFBMUUsT0FBQTtVQUdBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQWtHLE1BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsTUFBQSxHQUFBbkcsT0FBQTtVQUpBOztVQUtNLFNBQVVvRyxXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRS9GLEtBQUs7Y0FBRTBCO1lBQUssQ0FBRSxHQUFHLElBQUE0QyxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQzNDLE1BQU07Y0FBRXdCO1lBQUksQ0FBRSxHQUFHaEcsS0FBSyxDQUFDbUIsS0FBSyxDQUFDOEUsU0FBUztZQUV0QyxNQUFNQyxlQUFlLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ3JDLElBQUk7Z0JBQ0gsTUFBTUMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0gsS0FBSyxDQUFDSSxhQUFhLENBQUNDLE9BQU8sQ0FBQ3JCLElBQUksQ0FBQztnQkFDckVXLE1BQUEsQ0FBQVcsS0FBSyxDQUFDQyxPQUFPLENBQUNoRixLQUFLLENBQUNpRixRQUFRLENBQUNDLElBQUksQ0FBQztlQUNsQyxDQUFDLE9BQU9DLEdBQUcsRUFBRTtnQkFDYnhELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDNUIsS0FBSyxDQUFDb0YsU0FBUyxFQUFFRCxHQUFHLENBQUM7O1lBRXJDLENBQUM7WUFFRCxPQUNDeEMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXFCLEdBQ25DbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBU2MsU0FBUyxFQUFDO1lBQWMsR0FDaENuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFNYyxTQUFTLEVBQUM7WUFBYSxHQUFFOUQsS0FBSyxDQUFDcUYsT0FBTyxDQUFRLEVBQ3BEMUMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQVksR0FBRVEsSUFBSSxDQUFRLENBQ2pDLEVBQ1YzQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUIsTUFBQSxDQUFBbUIsVUFBVTtjQUFBLGFBQ0NoSCxLQUFLLENBQUNtQixLQUFLLENBQUM4RSxTQUFTLEVBQUVELElBQUk7Y0FDdENYLEtBQUssRUFBRTNELEtBQUssQ0FBQ2lFLE9BQU8sQ0FBQ2lCLElBQUk7Y0FDekJwQixTQUFTLEVBQUMsY0FBYztjQUN4QkQsSUFBSSxFQUFDLE1BQU07Y0FDWDBCLFFBQVEsRUFBRSxDQUFDakgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDOEUsU0FBUyxFQUFFRCxJQUFJO2NBQ3RDa0IsT0FBTyxFQUFFaEI7WUFBZSxFQUN2QixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUE3QixNQUFBLEdBQUExRSxPQUFBO1VBRUEsSUFBQXFGLEdBQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUVBLElBQUF3SCxXQUFBLEdBQUF4SCxPQUFBO1VBRUEsSUFBQXlILFlBQUEsR0FBQXpILE9BQUE7VUFOQTs7VUFHQTs7VUFLTSxTQUFVMEgsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVySCxLQUFLO2NBQUUwQjtZQUFLLENBQUUsR0FBRyxJQUFBNEMsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNOEMsTUFBTSxHQUFHQSxDQUFDO2NBQUVDO1lBQU0sQ0FBRSxLQUFLdkgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDdUMsSUFBSSxDQUFDO2NBQUUsQ0FBQzZELE1BQU0sQ0FBQ0MsSUFBSSxHQUFHRCxNQUFNLENBQUN6RjtZQUFLLENBQUUsQ0FBQztZQUNoRixNQUFNO2NBQUVrRTtZQUFJLENBQUUsR0FBR2hHLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ3NHLElBQUk7WUFFakMsT0FDQ3BELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUF3QixHQUN0Q25CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUEwQixHQUN4Q25CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNNLEdBQUEsQ0FBQTBDLGVBQWU7Y0FDZkMsRUFBRSxFQUFDLElBQUk7Y0FDUEgsSUFBSSxFQUFDLE9BQU87Y0FDWkYsTUFBTSxFQUFFQSxNQUFNO2NBQ2RNLFdBQVcsRUFBRWxHLEtBQUssQ0FBQzJELEtBQUssQ0FBQ3VDLFdBQVc7Y0FDcENDLE9BQU8sRUFBRTdILEtBQUssQ0FBQ21CLEtBQUssQ0FBQ3FHO1lBQUksRUFDeEIsRUFFRm5ELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNNLEdBQUEsQ0FBQTBDLGVBQWU7Y0FDZkMsRUFBRSxFQUFDLEdBQUc7Y0FDTkgsSUFBSSxFQUFDLE9BQU87Y0FDWkYsTUFBTSxFQUFFQSxNQUFNO2NBQ2RNLFdBQVcsRUFBRWxHLEtBQUssQ0FBQzRELFdBQVcsQ0FBQ3NDLFdBQVc7Y0FDMUNDLE9BQU8sRUFBRTdILEtBQUssQ0FBQ21CLEtBQUssQ0FBQ21FO1lBQVcsRUFDL0IsQ0FDRyxFQUNOakIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXFDLEdBQ25EbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lDLFdBQUEsQ0FBQVcsVUFBVSxPQUFHLENBQ1QsRUFDTnpELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFxQyxHQUNuRG5CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMwQyxZQUFBLENBQUFyQixXQUFXLE9BQUcsQ0FDVixDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUExQixNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQXFGLEdBQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFvSSxNQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQXNCLGVBQUEsR0FBQXRCLE9BQUE7VUFFQSxJQUFBcUksT0FBQSxHQUFBckksT0FBQTtVQUNBLElBQUFvRixXQUFBLEdBQUFwRixPQUFBO1VBQ0EsSUFBQXNJLE1BQUEsR0FBQXRJLE9BQUE7VUFDQSxJQUFBdUksT0FBQSxHQUFBdkksT0FBQTtVQUNBLElBQUF3SSxPQUFBLEdBQUF4SSxPQUFBO1VBQ0EsSUFBQXlJLFNBQUEsR0FBQXpJLE9BQUE7VUFFTztVQUFVLFNBQ1JTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUNxSSxVQUFVLEVBQUUzRyxLQUFLLENBQUMsR0FBRyxJQUFBcUcsTUFBQSxDQUFBTyxRQUFRLEVBQUNySCxlQUFBLENBQUFXLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQytCLFFBQVEsRUFBRTJFLFdBQVcsQ0FBQyxHQUFHbEUsTUFBQSxDQUFBSSxPQUFLLENBQUMrRCxRQUFRLENBQUN4SSxLQUFLLENBQUM0RCxRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDN0IsS0FBSyxFQUFFMEcsUUFBUSxDQUFDLEdBQUdwRSxNQUFBLENBQUFJLE9BQUssQ0FBQytELFFBQVEsQ0FBQ3hJLEtBQUssQ0FBQytCLEtBQUssQ0FBQztZQUVyRCxJQUFBaUcsT0FBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQzFJLEtBQUssQ0FBQ21CLEtBQUssQ0FBQyxFQUFFLE1BQU1vSCxXQUFXLENBQUN2SSxLQUFLLENBQUNtQixLQUFLLEVBQUV5QyxRQUFRLENBQUMsQ0FBQztZQUNsRSxJQUFBb0UsT0FBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQzFJLEtBQUssQ0FBQyxFQUFFLE1BQU15SSxRQUFRLENBQUN6SSxLQUFLLENBQUMrQixLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUNBLEtBQUssSUFBSSxDQUFDc0csVUFBVSxFQUFFLE9BQU9oRSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUE0RCxhQUFhLE9BQUc7WUFDbkQsSUFBSSxDQUFDM0ksS0FBSyxDQUFDbUIsS0FBSyxDQUFDeUgsS0FBSyxFQUFFLE9BQU92RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUQsTUFBQSxDQUFBaEQsV0FBVyxPQUFHO1lBQzlDLE1BQU1uRCxLQUFLLEdBQUc7Y0FBRTlCLEtBQUs7Y0FBRTRELFFBQVE7Y0FBRWxDO1lBQUssQ0FBRTtZQUV4QyxPQUNDMkMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osUUFBQSxDQUFBTSxhQUFhLENBQUNpRSxRQUFRO2NBQUMvRyxLQUFLLEVBQUVBO1lBQUssR0FDbkN1QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTSxHQUFBLENBQUE4RCxhQUFhO2NBQUN0RCxTQUFTLEVBQUMsNkJBQTZCO2NBQUM1QixRQUFRLEVBQUVBO1lBQVEsR0FDeEVTLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN3RCxPQUFBLENBQUFiLGVBQWUsT0FBRyxFQUNuQmhELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFzQixHQUNwQ25CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMwRCxTQUFBLENBQUFXLFlBQVk7Y0FBQ0MsSUFBSSxFQUFDO1lBQVUsRUFBRyxFQUNoQzNFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN5RCxPQUFBLENBQUFjLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDO1lBQVMsRUFBRyxFQUM3QjdFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN5RCxPQUFBLENBQUFjLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDO1lBQVUsRUFBRyxDQUN6QixDQUNTLENBQ1E7VUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUE3RSxNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJFLFFBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBbUcsTUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUF3SixZQUFBLEdBQUF4SixPQUFBO1VBQ0EsSUFBQW9GLFdBQUEsR0FBQXBGLE9BQUE7VUFDTSxTQUFVeUosVUFBVUEsQ0FBQztZQUFFQyxJQUFJO1lBQUVDO1VBQVUsQ0FBRTtZQUM5QyxNQUFNLENBQUNDLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUduRixNQUFBLENBQUFJLE9BQUssQ0FBQytELFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDaEUsTUFBTTtjQUFFOUcsS0FBSztjQUFFMUI7WUFBSyxDQUFFLEdBQUcsSUFBQXNFLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTWlGLE9BQU8sR0FBRyxDQUNmO2NBQUUzSCxLQUFLLEVBQUUsUUFBUTtjQUFFNEgsS0FBSyxFQUFFaEksS0FBSyxDQUFDaUksSUFBSSxDQUFDbkksT0FBTyxDQUFDMEg7WUFBSSxDQUFFLEVBQ25EO2NBQUVwSCxLQUFLLEVBQUUsU0FBUztjQUFFNEgsS0FBSyxFQUFFaEksS0FBSyxDQUFDaUksSUFBSSxDQUFDckksUUFBUSxDQUFDNEg7WUFBSSxDQUFFLENBQ3JEO1lBRUQsTUFBTVUsU0FBUyxHQUFHLE1BQU96RCxLQUFLLElBQW1CO2NBQ2hEQSxLQUFLLENBQUMwRCxjQUFjLEVBQUU7Y0FDdEIsTUFBTTtnQkFBRUM7Y0FBTSxDQUFFLEdBQUczRCxLQUFLLENBQUNJLGFBQWEsQ0FBQ0MsT0FBTztjQUM5QyxJQUFJLENBQUN4RyxLQUFLLENBQUM4SixNQUFNLENBQUMsRUFBRTtnQkFDbkJ6RyxPQUFPLENBQUNDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRXdHLE1BQU0sQ0FBQztnQkFDekM7O2NBRUQsSUFBSTtnQkFDSCxNQUFNOUosS0FBSyxDQUFDOEosTUFBTSxDQUFDLENBQUM7a0JBQUVDLEdBQUcsRUFBRVYsSUFBSSxDQUFDVSxHQUFHO2tCQUFFYixJQUFJLEVBQUVLO2dCQUFZLENBQUUsQ0FBQztnQkFDMURELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCeEQsTUFBQSxDQUFBVyxLQUFLLENBQUNDLE9BQU8sQ0FBQ2hGLEtBQUssQ0FBQ2lGLFFBQVEsQ0FBQ3FELFFBQVEsQ0FBQ3RELE9BQU8sQ0FBQztlQUM5QyxDQUFDLE9BQU90RCxDQUFDLEVBQUU7Z0JBQ1gwQyxNQUFBLENBQUFXLEtBQUssQ0FBQ25ELEtBQUssQ0FBQzVCLEtBQUssQ0FBQ2lGLFFBQVEsQ0FBQ3FELFFBQVEsQ0FBQzFHLEtBQUssQ0FBQzs7WUFFNUMsQ0FBQztZQUVELElBQUkrRixJQUFJLENBQUNZLE9BQU8sRUFBRSxPQUFPLElBQUk7WUFDN0IsTUFBTUMsZ0JBQWdCLEdBQUcvRCxLQUFLLElBQUlxRCxlQUFlLENBQUNyRCxLQUFLLENBQUNvQixNQUFNLENBQUN6RixLQUFLLENBQUM7WUFFckUsT0FDQ3VDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBMEYsUUFBQSxRQUNDOUYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLFlBQUEsQ0FBQWlCLFdBQVc7Y0FDWDVFLFNBQVMsRUFBQyxlQUFlO2NBQ3pCaUUsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCM0gsS0FBSyxFQUFFeUgsWUFBWTtjQUNuQmxILFFBQVEsRUFBRTZIO1lBQWdCLEVBQ3pCLENBQ0csRUFDTjdGLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNLLFdBQUEsQ0FBQXNGLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQSxlQUFhLFNBQVM7Y0FBQ3BELE9BQU8sRUFBRTBDLFNBQVM7Y0FBRVcsUUFBUTtjQUFDdEQsUUFBUSxFQUFFLENBQUNzQztZQUFZLEdBQ2xHN0gsS0FBSyxDQUFDaUUsT0FBTyxDQUFDM0IsT0FBTyxDQUNkLENBSVA7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREEsSUFBQUssTUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUE2SyxLQUFBLEdBQUE3SyxPQUFBO1VBQ0EsSUFBQXNJLE1BQUEsR0FBQXRJLE9BQUE7VUFDQSxJQUFBOEssS0FBQSxHQUFBOUssT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQW9JLE1BQUEsR0FBQXBJLE9BQUE7VUFFTSxTQUFVb0osWUFBWUEsQ0FBQztZQUFFQztVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFaEosS0FBSztjQUFFMEI7WUFBSyxDQUFFLEdBQUcsSUFBQTRDLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTXJCLElBQUksR0FBR25ELEtBQUssQ0FBQ21CLEtBQUssQ0FBQzZILElBQUksQ0FBQztZQUM5QixNQUFNMEIsTUFBTSxHQUFHaEosS0FBSyxDQUFDaUksSUFBSSxDQUFDWCxJQUFJLENBQUM7WUFDL0IsTUFBTSxDQUFDMkIsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3ZHLE1BQUEsQ0FBQUksT0FBSyxDQUFDK0QsUUFBUSxDQUFDckYsSUFBSSxDQUFDO1lBQzlDLElBQUE0RSxNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDMUksS0FBSyxDQUFDbUIsS0FBSyxDQUFDLEVBQUUsTUFBTXlKLFFBQVEsQ0FBQyxDQUFDLEdBQUc1SyxLQUFLLENBQUNtQixLQUFLLENBQUM2SCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUM7WUFDbEYsSUFBSSxDQUFDMkIsS0FBSyxDQUFDRSxNQUFNLEVBQUUsT0FBT3hHLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN1RCxNQUFBLENBQUE2QyxTQUFTLE9BQUc7WUFFdkMsT0FDQ3pHLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUF3QixHQUN0Q25CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUF5QixHQUN2Q25CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUtnRyxNQUFNLENBQUNyRixLQUFLLENBQU0sQ0FDbEIsRUFDTmhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM4RixLQUFBLENBQUFPLElBQUk7Y0FBQ0osS0FBSyxFQUFFQSxLQUFLO2NBQUVLLE9BQU8sRUFBRVAsS0FBQSxDQUFBUTtZQUFJLEVBQUksQ0FDaEM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQTVHLE1BQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBdUwsTUFBQSxHQUFBdkwsT0FBQTtVQUNBLElBQUFrRyxNQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQXdMLFdBQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBeUwsYUFBQSxHQUFBekwsT0FBQTtVQUVNLFNBQVVzTCxJQUFJQSxDQUFDO1lBQUU1QjtVQUFJLENBQUU7WUFDNUIsTUFBTSxDQUFDZ0MsT0FBTyxFQUFFL0IsVUFBVSxDQUFDLEdBQUdqRixNQUFBLENBQUFJLE9BQUssQ0FBQytELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkQsT0FDQ25FLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMwRyxhQUFBLENBQUFFLGVBQWUsUUFDZCxDQUFDRCxPQUFPLElBQ1JoSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEcsYUFBQSxDQUFBRyxNQUFNLENBQUNDLEVBQUU7Y0FDVEMsR0FBRyxFQUFFcEMsSUFBSSxDQUFDdEcsRUFBRTtjQUNaMkksSUFBSSxFQUFFO2dCQUNMQyxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTtpQkFDVjtnQkFDREMsT0FBTyxFQUFFO2VBQ1Q7Y0FDRHJHLFNBQVMsRUFBRSwwQkFBMEI2RCxJQUFJLENBQUNZLE9BQU8sSUFBSSxDQUFDWixJQUFJLENBQUN5QyxVQUFVLElBQUksVUFBVTtZQUFFLEdBRXJGekgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQW9CLEdBQ2pDNkQsSUFBSSxFQUFFMEMsUUFBUSxHQUFHMUgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dHLE1BQUEsQ0FBQWMsS0FBSztjQUFDQyxHQUFHLEVBQUU1QyxJQUFJLEVBQUUwQztZQUFRLEVBQUksR0FBRzFILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNtQixNQUFBLENBQUFxRyxJQUFJO2NBQUMxRyxTQUFTLEVBQUMsSUFBSTtjQUFDRCxJQUFJLEVBQUU7WUFBTSxFQUFJLEVBQ3hGbEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsY0FDQ0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBSzJFLElBQUksQ0FBQzdCLElBQUksQ0FBTSxFQUNwQm5ELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGVBQU8yRSxJQUFJLENBQUM4QyxLQUFLLENBQVEsQ0FDcEIsQ0FDRCxFQUNOOUgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBU2MsU0FBUyxFQUFDO1lBQWlCLEdBQ25DbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lHLFdBQUEsQ0FBQS9CLFVBQVU7Y0FBQ0MsSUFBSSxFQUFFQSxJQUFJO2NBQUVDLFVBQVUsRUFBRUE7WUFBVSxFQUFJLENBQ3pDLENBRVgsQ0FDZ0I7VUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUFqRixNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJFLFFBQUEsR0FBQTNFLE9BQUE7VUFDTSxTQUFVeU0sV0FBV0EsQ0FBQztZQUFFL0M7VUFBSSxDQUFFO1lBQ25DLElBQUksQ0FBQ0EsSUFBSSxDQUFDWSxPQUFPLEVBQUUsT0FBTyxJQUFJO1lBQzlCLE1BQU07Y0FBRXZJO1lBQUssQ0FBRSxHQUFHLElBQUE0QyxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0wRSxJQUFJLEdBQUdHLElBQUksQ0FBQ0gsSUFBSSxLQUFLLFFBQVEsR0FBR3hILEtBQUssQ0FBQ2lJLElBQUksQ0FBQ25JLE9BQU8sQ0FBQzBILElBQUksR0FBR3hILEtBQUssQ0FBQ2lJLElBQUksQ0FBQ3JJLFFBQVEsQ0FBQzRILElBQUk7WUFDeEYsT0FBTzdFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBMEYsUUFBQSxPQUFLO1VBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQTlGLE1BQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUEwTSxlQUFBLEdBQUExTSxPQUFBO1VBQ0EsSUFBQW9GLFdBQUEsR0FBQXBGLE9BQUE7VUFDTSxTQUFVbUwsU0FBU0EsQ0FBQztZQUFFNUIsSUFBSSxHQUFHL0c7VUFBUyxDQUFFO1lBQzdDLE1BQU07Y0FBRVQ7WUFBSyxDQUFFLEdBQUcsSUFBQTRDLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTSxDQUFDbkUsSUFBSSxFQUFFaU0sT0FBTyxDQUFDLEdBQUdqSSxNQUFBLENBQUFJLE9BQUssQ0FBQytELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTWtDLE1BQU0sR0FBR2hKLEtBQUssQ0FBQ2lJLElBQUksQ0FBQ1QsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQ3dCLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFDeEIsTUFBTTZCLE9BQU8sR0FBRyxDQUFDLENBQUNyRCxJQUFJO1lBQ3RCLE1BQU1zRCxXQUFXLEdBQUdBLENBQUEsS0FBTUYsT0FBTyxDQUFDLENBQUNqTSxJQUFJLENBQUM7WUFDeEMsTUFBTW9NLFNBQVMsR0FBR0YsT0FBTyxHQUN0QjdLLEtBQUssQ0FBQzBELEtBQUssQ0FBQ3NILFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJakwsS0FBSyxDQUFDaUUsT0FBTyxDQUFDNUIsTUFBTSxHQUFHLENBQUMsR0FDckVyQyxLQUFLLENBQUMwRCxLQUFLLENBQUNtSCxPQUFPO1lBRXRCLE9BQ0NsSSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFTYyxTQUFTLEVBQUM7WUFBd0IsR0FDMUNuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZ0csTUFBTSxDQUFDckYsS0FBSyxDQUFNLEVBQ3RCNkQsSUFBSSxJQUFJN0UsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssV0FBQSxDQUFBc0YsTUFBTTtjQUFDOUUsSUFBSSxFQUFDLEtBQUs7Y0FBQ21FLEtBQUssRUFBRWhJLEtBQUssQ0FBQ2lFLE9BQU8sQ0FBQzVCLE1BQU07Y0FBRXlCLFNBQVMsRUFBQyxLQUFLO2NBQUMwQixPQUFPLEVBQUVzRjtZQUFXLEVBQUksQ0FDNUYsRUFDTm5JLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFtRCxHQUNqRW5CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU1jLFNBQVMsRUFBQztZQUFJLEcsS0FBR2lILFNBQVMsQ0FBUSxDQUNuQyxFQUNOcEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJILGVBQUEsQ0FBQU8sY0FBYztjQUFDdk0sSUFBSSxFQUFFQSxJQUFJO2NBQUU2SSxJQUFJLEVBQUVBLElBQUk7Y0FBRTJELE9BQU8sRUFBRUw7WUFBVyxFQUFJLENBQ3ZEO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUFuSSxNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQW9JLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFvRixXQUFBLEdBQUFwRixPQUFBO1VBQ0EsSUFBQTZLLEtBQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBOEssS0FBQSxHQUFBOUssT0FBQTtVQUNBLElBQUFzSSxNQUFBLEdBQUF0SSxPQUFBO1VBQ0EsSUFBQTBNLGVBQUEsR0FBQTFNLE9BQUE7VUFFTSxTQUFVc0osVUFBVUEsQ0FBQztZQUFFQztVQUFJLENBQXFCO1lBQ3JELE1BQU07Y0FBRXhILEtBQUs7Y0FBRTFCO1lBQUssQ0FBRSxHQUFHLElBQUFzRSxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQ25FLElBQUksRUFBRWlNLE9BQU8sQ0FBQyxHQUFHakksTUFBQSxDQUFBSSxPQUFLLENBQUMrRCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU0sQ0FBQ21DLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUd2RyxNQUFBLENBQUFJLE9BQUssQ0FBQytELFFBQVEsQ0FBQyxDQUFDLEdBQUd4SSxLQUFLLENBQUNrSixJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFELE1BQU13QixNQUFNLEdBQUdoSixLQUFLLENBQUNpSSxJQUFJLENBQUNULElBQUksQ0FBQztZQUMvQixNQUFNc0QsV0FBVyxHQUFHQSxDQUFBLEtBQU1GLE9BQU8sQ0FBQyxDQUFDak0sSUFBSSxDQUFDO1lBRXhDLElBQUEwSCxNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDMUksS0FBSyxDQUFDbUIsS0FBSyxDQUFDLEVBQUUsTUFBTXlKLFFBQVEsQ0FBQyxDQUFDLEdBQUc1SyxLQUFLLENBQUNrSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBU0EsSUFBSSxVQUFVLENBQUM7WUFFbkYsSUFBSSxDQUFDeUIsS0FBSyxDQUFDRSxNQUFNLEVBQUUsT0FBT3hHLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN1RCxNQUFBLENBQUE2QyxTQUFTO2NBQUM1QixJQUFJLEVBQUVBO1lBQUksRUFBSTtZQUVuRCxPQUNDN0UsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBU2MsU0FBUyxFQUFDO1lBQXdCLEdBQzFDbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS2dHLE1BQU0sQ0FBQ3JGLEtBQUssQ0FBTSxFQUN0QjZELElBQUksSUFBSWxKLEtBQUssQ0FBQ3lCLE9BQU8sSUFDckI0QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUFzRixNQUFNO2NBQUM5RSxJQUFJLEVBQUMsS0FBSztjQUFDbUUsS0FBSyxFQUFFaEksS0FBSyxDQUFDaUUsT0FBTyxDQUFDNUIsTUFBTTtjQUFFeUIsU0FBUyxFQUFDLEtBQUs7Y0FBQzBCLE9BQU8sRUFBRXNGO1lBQVcsRUFDcEYsQ0FDSSxFQUNObkksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQU8sSUFBSTtjQUFDSixLQUFLLEVBQUVBLEtBQUs7Y0FBRUssT0FBTyxFQUFFUCxLQUFBLENBQUFRO1lBQUksRUFBSSxFQUNyQzVHLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMySCxlQUFBLENBQUFPLGNBQWM7Y0FBQ3ZNLElBQUksRUFBRUEsSUFBSTtjQUFFNkksSUFBSSxFQUFFQSxJQUFJO2NBQUUyRCxPQUFPLEVBQUVMO1lBQVcsRUFBSSxDQUN2RDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDQSxJQUFBbkksTUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUFtTixLQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQW1HLE1BQUEsR0FBQW5HLE9BQUE7VUFFQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFvRixXQUFBLEdBQUFwRixPQUFBO1VBQ0EsSUFBQW9OLE1BQUEsR0FBQXBOLE9BQUE7VUFHTSxTQUFVaU4sY0FBY0EsQ0FBQztZQUFFdk0sSUFBSTtZQUFFd00sT0FBTztZQUFFM0Q7VUFBSSxDQUFFO1lBQ3JELE1BQU07Y0FBRWxKLEtBQUs7Y0FBRTBCO1lBQUssQ0FBRSxHQUFHLElBQUE0QyxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQ3dJLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUc1SSxNQUFBLENBQUFJLE9BQUssQ0FBQytELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkQsTUFBTSxDQUFDbEYsS0FBSyxFQUFFNEosUUFBUSxDQUFDLEdBQUc3SSxNQUFBLENBQUFJLE9BQUssQ0FBQytELFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTTJFLGFBQWEsR0FBRztjQUNyQjNGLElBQUksRUFBRSxFQUFFO2NBQ1IyRSxLQUFLLEVBQUUsRUFBRTtjQUNUakQsSUFBSSxFQUFFO2FBQ047WUFDRCxNQUFNLENBQUN2RixNQUFNLEVBQUV5SixTQUFTLENBQUMsR0FBRy9JLE1BQUEsQ0FBQUksT0FBSyxDQUFDK0QsUUFBUSxDQUFDMkUsYUFBYSxDQUFDO1lBQ3pELE1BQU1FLFFBQVEsR0FBRztjQUFFL0wsUUFBUSxFQUFFLFNBQVM7Y0FBRUUsT0FBTyxFQUFFO1lBQVEsQ0FBRTtZQUMzRCxNQUFNOEwsV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDeEJGLFNBQVMsQ0FBQ0QsYUFBYSxDQUFDO2NBQ3hCRCxRQUFRLENBQUMsRUFBRSxDQUFDO2NBQ1pELFVBQVUsQ0FBQyxLQUFLLENBQUM7Y0FDakJKLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxNQUFNVSxRQUFRLEdBQUcsTUFBTXBILEtBQUssSUFBRztjQUM5QkEsS0FBSyxDQUFDMEQsY0FBYyxFQUFFO2NBQ3RCb0QsVUFBVSxDQUFDLElBQUksQ0FBQztjQUNoQixNQUFNTyxRQUFRLEdBQUcsTUFBTXhOLEtBQUssQ0FBQytELE1BQU0sQ0FBQztnQkFBRSxHQUFHSixNQUFNO2dCQUFFdUYsSUFBSSxFQUFFbUUsUUFBUSxDQUFDbkUsSUFBSTtjQUFDLENBQUUsQ0FBQztjQUN4RSxJQUFJLENBQUNzRSxRQUFRLENBQUMzSixNQUFNLEVBQUU7Z0JBQ3JCcUosUUFBUSxDQUFDTSxRQUFRLENBQUNsSyxLQUFLLENBQUM7Z0JBQ3hCd0MsTUFBQSxDQUFBVyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3BELEtBQUssQ0FBQzs7Y0FHckJ3QyxNQUFBLENBQUFXLEtBQUssQ0FBQ0MsT0FBTyxDQUFDaEYsS0FBSyxDQUFDK0wsTUFBTSxDQUFDMUosTUFBTSxDQUFDMkMsT0FBTyxDQUFDO2NBQzFDNEcsV0FBVyxFQUFFO1lBQ2QsQ0FBQztZQUVELE1BQU1JLFlBQVksR0FBR0EsQ0FBQztjQUFFbkgsYUFBYSxFQUFFZ0I7WUFBTSxDQUFFLEtBQUk7Y0FDbEQsTUFBTW9HLFlBQVksR0FBRztnQkFBRSxHQUFHaEs7Y0FBTSxDQUFFO2NBQ2xDZ0ssWUFBWSxDQUFDcEcsTUFBTSxDQUFDQyxJQUFJLENBQUMsR0FBR0QsTUFBTSxDQUFDekYsS0FBSztjQUN4Q3NMLFNBQVMsQ0FBQ08sWUFBWSxDQUFDO2NBQ3ZCVCxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2IsQ0FBQztZQUVELElBQUksQ0FBQzdNLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTXVOLFVBQVUsR0FBR2xNLEtBQUssQ0FBQ21NLEtBQUssQ0FBQzlKLE1BQU0sQ0FBQ3NCLEtBQUssQ0FBQ3NILE9BQU8sQ0FBQyxPQUFPLEVBQUVqTCxLQUFLLENBQUNpSSxJQUFJLENBQUNULElBQUksQ0FBQyxDQUFDQSxJQUFJLENBQUM7WUFFbkYsTUFBTTtjQUFFMUIsSUFBSTtjQUFFMkU7WUFBSyxDQUFFLEdBQUd4SSxNQUFNO1lBQzlCLE1BQU04RixPQUFPLEdBQUcsQ0FDZjtjQUFFM0gsS0FBSyxFQUFFLFFBQVE7Y0FBRTRILEtBQUssRUFBRWhJLEtBQUssQ0FBQ2lJLElBQUksQ0FBQ25JLE9BQU8sQ0FBQzBIO1lBQUksQ0FBRSxFQUNuRDtjQUFFcEgsS0FBSyxFQUFFLFNBQVM7Y0FBRTRILEtBQUssRUFBRWhJLEtBQUssQ0FBQ2lJLElBQUksQ0FBQ3JJLFFBQVEsQ0FBQzRIO1lBQUksQ0FBRSxDQUNyRDtZQUVELE9BQ0M3RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUksTUFBQSxDQUFBZSxLQUFLO2NBQUN6TixJQUFJO2NBQUNtRixTQUFTLEVBQUMsWUFBWTtjQUFDcUgsT0FBTyxFQUFFUztZQUFXLEdBQ3REakosTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUWMsU0FBUyxFQUFDO1lBQW9CLEdBQ3JDbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS2tKLFVBQVUsQ0FBTSxDQUNiLEVBRVR2SixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0ksS0FBQSxDQUFBaUIsSUFBSTtjQUFDdkksU0FBUyxFQUFDLE9BQU87Y0FBQytILFFBQVEsRUFBRUE7WUFBUSxHQUN6Q2xKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNvSSxLQUFBLENBQUFrQixLQUFLO2NBQ0x0RSxLQUFLLEVBQUMsTUFBTTtjQUNaVixJQUFJLEVBQUMsTUFBTTtjQUNYeEIsSUFBSSxFQUFDLE1BQU07Y0FDWDFGLEtBQUssRUFBRTBGLElBQUk7Y0FDWG5GLFFBQVEsRUFBRXFMLFlBQVk7Y0FDdEI5RixXQUFXLEVBQUMsaUJBQWlCO2NBQzdCcUcsUUFBUTtZQUFBLEVBQ1AsRUFDRjVKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNvSSxLQUFBLENBQUFrQixLQUFLO2NBQ0xwRyxXQUFXLEVBQUMsa0JBQWtCO2NBQzlCOEIsS0FBSyxFQUFDLE9BQU87Y0FDYlYsSUFBSSxFQUFDLE9BQU87Y0FDWnhCLElBQUksRUFBQyxPQUFPO2NBQ1oxRixLQUFLLEVBQUVxSyxLQUFLO2NBQ1o5SixRQUFRLEVBQUVxTCxZQUFZO2NBQ3RCTyxRQUFRO1lBQUEsRUFDUCxFQUVGNUosTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXNDLEdBQ3BEbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssV0FBQSxDQUFBc0YsTUFBTTtjQUFDckIsSUFBSSxFQUFDLFFBQVE7Y0FBQ3NCLE9BQU8sRUFBQyxTQUFTO2NBQUMvRSxJQUFJLEVBQUMsWUFBWTtjQUFDeUgsT0FBTyxFQUFFQSxPQUFPO2NBQUV0RCxLQUFLLEVBQUM7WUFBUSxFQUFHLENBQ3hGLENBQ0EsQ0FDQTtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZGQSxJQUFBckYsTUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUFvTixNQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQW1OLEtBQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBd0osWUFBQSxHQUFBeEosT0FBQTtVQUNBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQW9GLFdBQUEsR0FBQXBGLE9BQUE7VUFFQSxJQUFBbUcsTUFBQSxHQUFBbkcsT0FBQTtVQUVNLFNBQVV1TyxZQUFZQSxDQUFDO1lBQUU3RSxJQUFJO1lBQUVoSixJQUFJO1lBQUV3TTtVQUFPLENBQUU7WUFDbkQsTUFBTTtjQUFFbkwsS0FBSztjQUFFMUI7WUFBSyxDQUFFLEdBQUcsSUFBQXNFLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTSxDQUFDMkosVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRy9KLE1BQUEsQ0FBQUksT0FBSyxDQUFDK0QsUUFBUSxDQUFDYSxJQUFJLENBQUNILElBQUksSUFBSSxTQUFTLENBQUM7WUFDMUUsTUFBTSxDQUFDOEQsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzVJLE1BQUEsQ0FBQUksT0FBSyxDQUFDK0QsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxJQUFJLENBQUNuSSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1rTixRQUFRLEdBQUcsTUFBTXBILEtBQUssSUFBRztjQUM5QkEsS0FBSyxDQUFDMEQsY0FBYyxFQUFFO2NBQ3RCLElBQUk7Z0JBQ0hvRCxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNoQixNQUFNak4sS0FBSyxDQUFDbUUsVUFBVSxDQUFDO2tCQUFFK0UsSUFBSSxFQUFFaUYsVUFBVTtrQkFBRXBFLEdBQUcsRUFBRVYsSUFBSSxDQUFDVTtnQkFBRyxDQUFFLENBQUM7Z0JBQzNEakUsTUFBQSxDQUFBVyxLQUFLLENBQUNDLE9BQU8sQ0FBQ2hGLEtBQUssQ0FBQytMLE1BQU0sQ0FBQzFKLE1BQU0sQ0FBQzJDLE9BQU8sQ0FBQztlQUMxQyxDQUFDLE9BQU90RCxDQUFDLEVBQUU7Z0JBQ1gwQyxNQUFBLENBQUFXLEtBQUssQ0FBQ25ELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztnQkFDbkNELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVDZKLFVBQVUsQ0FBQyxLQUFLLENBQUM7O1lBRW5CLENBQUM7WUFFRCxNQUFNeEQsT0FBTyxHQUFHLENBQ2Y7Y0FBRTNILEtBQUssRUFBRSxTQUFTO2NBQUU0SCxLQUFLLEVBQUVoSSxLQUFLLENBQUNpSSxJQUFJLENBQUNuSSxPQUFPLENBQUM2TTtZQUFNLENBQUUsRUFDdEQ7Y0FBRXZNLEtBQUssRUFBRSxTQUFTO2NBQUU0SCxLQUFLLEVBQUVoSSxLQUFLLENBQUNpSSxJQUFJLENBQUNySSxRQUFRLENBQUMrTTtZQUFNLENBQUUsQ0FDdkQ7WUFFRCxNQUFNbkUsZ0JBQWdCLEdBQUcvRCxLQUFLLElBQUc7Y0FDaENpSSxhQUFhLENBQUNqSSxLQUFLLENBQUNvQixNQUFNLENBQUN6RixLQUFLLENBQUM7WUFDbEMsQ0FBQztZQUNELE9BQ0N1QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUksTUFBQSxDQUFBZSxLQUFLO2NBQUN6TixJQUFJO2NBQUNtRixTQUFTLEVBQUMsWUFBWTtjQUFDcUgsT0FBTyxFQUFFQTtZQUFPLEdBQ2xEeEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29JLEtBQUEsQ0FBQWlCLElBQUk7Y0FBQ1IsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZCbEosTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWEsR0FDM0JuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFNYyxTQUFTLEVBQUM7WUFBSSxHQUFFOUQsS0FBSyxDQUFDbU0sS0FBSyxDQUFDUyxJQUFJLENBQUNqSixLQUFLLENBQVEsRUFDcERoQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFHYyxTQUFTLEVBQUM7WUFBSSxHQUFFOUQsS0FBSyxDQUFDbU0sS0FBSyxDQUFDUyxJQUFJLENBQUNDLElBQUksQ0FBSyxDQUN4QyxFQUNObEssTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lFLFlBQUEsQ0FBQWlCLFdBQVc7Y0FBQ1gsT0FBTyxFQUFFQSxPQUFPO2NBQUUrRSxZQUFZLEVBQUVMLFVBQVU7Y0FBRTlMLFFBQVEsRUFBRTZIO1lBQWdCLEVBQUksRUFDdkY3RixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRYyxTQUFTLEVBQUM7WUFBc0MsR0FDdkRuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUFzRixNQUFNO2NBQUNyQixJQUFJLEVBQUMsUUFBUTtjQUFDc0IsT0FBTyxFQUFDLFNBQVM7Y0FBQy9FLElBQUksRUFBQyxZQUFZO2NBQUN5SCxPQUFPLEVBQUVBLE9BQU87Y0FBRTlGLE9BQU8sRUFBRXFHO1lBQVEsR0FDM0Y3TCxLQUFLLENBQUNpRSxPQUFPLENBQUNqQyxJQUFJLENBQ1gsQ0FDRCxDQUNILENBQ0E7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQVcsTUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUF1TCxNQUFBLEdBQUF2TCxPQUFBO1VBQ0EsSUFBQW9GLFdBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFrRyxNQUFBLEdBQUFsRyxPQUFBO1VBRUEsSUFBQThPLFFBQUEsR0FBQTlPLE9BQUE7VUFFTSxTQUFVc0wsSUFBSUEsQ0FBQztZQUFFNUI7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRTNILEtBQUs7Y0FBRTFCO1lBQUssQ0FBRSxHQUFHLElBQUFzRSxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQ25FLElBQUksRUFBRWlNLE9BQU8sQ0FBQyxHQUFHakksTUFBQSxDQUFBSSxPQUFLLENBQUMrRCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTdDLE1BQU1nRSxXQUFXLEdBQUdBLENBQUEsS0FBTUYsT0FBTyxDQUFDLENBQUNqTSxJQUFJLENBQUM7WUFFeEMsT0FDQ2dFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUkrRyxHQUFHLEVBQUVwQyxJQUFJLENBQUN0RyxFQUFFO2NBQUV5QyxTQUFTLEVBQUM7WUFBd0IsR0FDbkRuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBb0IsR0FDakM2RCxJQUFJLEVBQUUwQyxRQUFRLEdBQUcxSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0csTUFBQSxDQUFBYyxLQUFLO2NBQUNDLEdBQUcsRUFBRTVDLElBQUksRUFBRTBDO1lBQVEsRUFBSSxHQUFHMUgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21CLE1BQUEsQ0FBQXFHLElBQUk7Y0FBQzFHLFNBQVMsRUFBQyxJQUFJO2NBQUNELElBQUksRUFBRTtZQUFNLEVBQUksRUFDeEZsQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFNYyxTQUFTLEVBQUM7WUFBSSxHQUFFNkQsSUFBSSxDQUFDN0IsSUFBSSxDQUFRLENBQ2xDLEVBQ05uRCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUFzRixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLFFBQVE7Y0FBQ3JELE9BQU8sRUFBRXNGO1lBQVcsR0FDckQ5SyxLQUFLLENBQUNpRSxPQUFPLENBQUMySSxJQUFJLENBQ1gsRUFDVGpLLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNtQixNQUFBLENBQUFtQixVQUFVO2NBQUN6QixJQUFJLEVBQUMsVUFBVTtjQUFDMEIsUUFBUTtjQUFDekIsU0FBUyxFQUFDO1lBQVEsRUFBRyxFQUMxRG5CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMrSixRQUFBLENBQUFQLFlBQVk7Y0FBQzdFLElBQUksRUFBRUEsSUFBSTtjQUFFaEosSUFBSSxFQUFFQSxJQUFJO2NBQUV3TSxPQUFPLEVBQUVMO1lBQVcsRUFBSSxDQUN6RCxDQUNGO1VBRVAifQ==