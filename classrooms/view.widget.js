System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.6-dev.09/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-app@0.1.6-dev.09/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.09/config", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.09/components/ui", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/toast", "@aimpact/ailearn-app@0.1.6-dev.09/components/cover-image.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/form/react-select", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/image", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/modal"], function (_export, _context2) {
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
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnApp016Dev09MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp016Dev09MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk110Session) {
      dependency_8 = _aimpactChatSdk110Session;
    }, function (_aimpactAilearnApp016Dev09ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp016Dev09ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp016Dev09Config) {
      dependency_11 = _aimpactAilearnApp016Dev09Config;
    }, function (_pragmateUi100Beta2Components) {
      dependency_12 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev09ComponentsUi) {
      dependency_13 = _aimpactAilearnApp016Dev09ComponentsUi;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_14 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_15 = _pragmateUi100Beta2Toast;
    }, function (_aimpactAilearnApp016Dev09ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp016Dev09ComponentsCoverImageCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2FormReactSelect) {
      dependency_18 = _pragmateUi100Beta2FormReactSelect;
    }, function (_pragmateUi100Beta2List) {
      dependency_19 = _pragmateUi100Beta2List;
    }, function (_pragmateUi100Beta2Image) {
      dependency_20 = _pragmateUi100Beta2Image;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi100Beta2Form) {
      dependency_22 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_23 = _pragmateUi100Beta2Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.09"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.09/classrooms/view.widget');
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
        hash: 2243199907,
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
            async load(id) {
              try {
                super.ready = false;
                await this.isReady;
                this.#params = id;
                const specs = {
                  id
                };
                this.#model = new _core.Classroom(specs);
                if (id) {
                  await this.#model.load({
                    id
                  });
                }
                _mainLayout.LayoutBroker.breadcrumb.lastItem.label = this.#model.name;
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
        hash: 3481001907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
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
            (0, _hooks.useBinder)([store.model], () => setFetching(store.model?.fetching));
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJwYXJhbXMiLCJvYmplY3RpdmVzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsIm1lbWJlcnMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJmb3VuZCIsImlzQWRtaW4iLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsIm0iLCJ1bmRlZmluZWQiLCJpZCIsImlzUmVhZHkiLCJzcGVjcyIsIkNsYXNzcm9vbSIsIkxheW91dEJyb2tlciIsImJyZWFkY3J1bWIiLCJsYXN0SXRlbSIsImxhYmVsIiwibmFtZSIsImUiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsImRhdGEiLCJFcnJvciIsImludml0ZSIsImFwcHJvdmUiLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWplY3QiLCJ1cGRhdGVSb2xlIiwiX25hdmJhckhlYWRlciIsIl9yZWFjdCIsIl9jb250ZXh0IiwiSGVhZGVyIiwidXNlTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiTmF2YmFySGVhZGVyIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfdWkiLCJFbXB0eUVudGl0eSIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2ljb25zIiwiX3RvYXN0IiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYmFzZVVybCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiX2NvdmVySW1hZ2UiLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJ0YXJnZXQiLCJqb2luIiwiQ29udGVudEVkaXRhYmxlIiwiYXMiLCJwbGFjZWhvbGRlciIsImNvbnRlbnQiLCJlZGl0YWJsZSIsIkNvdmVySW1hZ2UiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiUGVvcGxlTGlzdCIsInJvbGUiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNldFJlbW92ZWQiLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJvcHRpb25zIiwibGlzdCIsIm9uUHJvY2VzcyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ1aWQiLCJhcHByb3ZhbCIsImludml0ZWQiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsImxhYmVscyIsIml0ZW1zIiwic2V0SXRlbXMiLCJsZW5ndGgiLCJFbXB0eUxpc3QiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfaW1hZ2UiLCJfY2hvaWNlUnVsZSIsIl9mcmFtZXJNb3Rpb24iLCJyZW1vdmVkIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwibGkiLCJrZXkiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib3BhY2l0eSIsImF1dGhvcml6ZWQiLCJwaG90b1VybCIsIkltYWdlIiwic3JjIiwiSWNvbiIsImVtYWlsIiwiUGVuZGluZ0RhdGEiLCJfaW52aXRhdGlvbkZvcm0iLCJzZXRTaG93IiwicGVuZGluZyIsInRvZ2dsZU1vZGFsIiwiZW1wdHlUZXh0IiwibGFiZWxMaXN0IiwicmVwbGFjZSIsIkludml0YXRpb25Gb3JtIiwib25DbG9zZSIsIl9mb3JtIiwiX21vZGFsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJyb2xlVHlwZSIsImhhbmRsZUNsb3NlIiwib25TdWJtaXQiLCJyZXNwb25zZSIsInN5c3RlbSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsIm1vZGFsVGl0bGUiLCJtb2RhbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiRWRpdGlvbk1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJlZGl0IiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsIl9lZGl0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1ydWxlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQsSUFBQWUsS0FBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLFdBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsTUFBQSxHQUFBckIsT0FBQTtVQUVBLElBQUFzQixlQUFBLEdBQUF0QixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRWSxNQUFBLENBQUFJLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLFVBQVcsR0FBYSxFQUFFO1lBQzFCLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDSCxLQUFLLENBQUNHLFFBQVE7WUFDM0I7WUFFQSxJQUFJQyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksUUFBUTtZQUMzQjtZQUVBLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxPQUFPO1lBQzFCO1lBRUEsQ0FBQUMsS0FBTSxHQUErQixJQUFJVCxNQUFBLENBQUFVLFlBQVksQ0FBQ1QsZUFBQSxDQUFBVSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN2RSxJQUFJSCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFSSxLQUFLO1lBQzFCO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ0ssS0FBSztZQUN4QztZQUVBLENBQUFDLEtBQU0sR0FBWSxJQUFJO1lBQ3RCLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBYixLQUFNLEVBQUVhLE9BQU87WUFDOUI7WUFDQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0NDLFVBQVUsQ0FBQ0MsQ0FBQyxHQUFHLElBQUk7WUFDcEI7WUFFQTFCLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQVEsS0FBTSxHQUFHbUIsU0FBUztjQUN2QixLQUFLLENBQUNSLEtBQUssR0FBRyxLQUFLO1lBQ3BCO1lBRUEsTUFBTXhCLElBQUlBLENBQUNpQyxFQUFFO2NBQ1osSUFBSTtnQkFDSCxLQUFLLENBQUNULEtBQUssR0FBRyxLQUFLO2dCQUNuQixNQUFNLElBQUksQ0FBQ1UsT0FBTztnQkFFbEIsSUFBSSxDQUFDLENBQUFwQixNQUFPLEdBQUdtQixFQUFFO2dCQUVqQixNQUFNRSxLQUFLLEdBQUc7a0JBQUVGO2dCQUFFLENBQUU7Z0JBRXBCLElBQUksQ0FBQyxDQUFBcEIsS0FBTSxHQUFHLElBQUlOLEtBQUEsQ0FBQTZCLFNBQVMsQ0FBQ0QsS0FBSyxDQUFDO2dCQUVsQyxJQUFJRixFQUFFLEVBQUU7a0JBQ1AsTUFBTSxJQUFJLENBQUMsQ0FBQXBCLEtBQU0sQ0FBQ2IsSUFBSSxDQUFDO29CQUFFaUM7a0JBQUUsQ0FBRSxDQUFDOztnQkFFL0J4QixXQUFBLENBQUE0QixZQUFZLENBQUNDLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUEzQixLQUFNLENBQUM0QixJQUFJO2VBQ3pELENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYLEtBQUssQ0FBQ2xCLEtBQUssR0FBRyxJQUFJO2VBQ2xCLFNBQVM7Z0JBQ1QsS0FBSyxDQUFDQSxLQUFLLEdBQUcsSUFBSTs7WUFFcEI7WUFFQSxNQUFNbUIsTUFBTUEsQ0FBQ1YsRUFBRTtjQUNkLElBQUksQ0FBQyxDQUFBcEIsS0FBTSxDQUFDK0IsVUFBVSxDQUFDQyxNQUFNLENBQUNaLEVBQUUsQ0FBQztjQUNqQyxJQUFJLENBQUNhLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQSxNQUFNQyxJQUFJQSxDQUFDQyxNQUFNO2NBQ2hCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTWQsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBckIsTUFBTyxLQUFLLEtBQUssR0FBRztrQkFBRSxHQUFHa0MsTUFBTTtrQkFBRWYsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBbkI7Z0JBQU8sQ0FBRSxHQUFHa0MsTUFBTTtnQkFDL0UsTUFBTTtrQkFBRUUsTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDdEMsS0FBSyxDQUFDa0MsSUFBSSxDQUFDWixLQUFLLENBQUM7Z0JBRXJELElBQUksQ0FBQ2UsTUFBTSxFQUFFLE1BQU0sSUFBSUUsS0FBSyxDQUFDLDRCQUE0QixDQUFDO2dCQUUxRCxPQUFPRCxJQUFJO2VBQ1gsQ0FBQyxPQUFPVCxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJVSxLQUFLLENBQUNWLENBQUMsQ0FBQztlQUNsQixTQUFTO2dCQUNULElBQUksQ0FBQ08sUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTUksTUFBTUEsQ0FBQ0wsTUFBTTtjQUNsQixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU07a0JBQUVDLE1BQU07a0JBQUVDO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQ3RDLEtBQUssQ0FBQ3dDLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDO2dCQUN4RCxJQUFJLENBQUNFLE1BQU0sRUFBRSxNQUFNLElBQUlFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztnQkFDbkQsT0FBT0QsSUFBSTtlQUNYLENBQUMsT0FBT1QsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSVUsS0FBSyxDQUFDVixDQUFDLENBQUM7ZUFDbEIsU0FBUztnQkFDVCxJQUFJLENBQUNPLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1LLE9BQU9BLENBQUNOLE1BQU07Y0FDbkIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMxQyxLQUFLLENBQUN5QyxPQUFPLENBQUNOLE1BQU0sQ0FBQztnQkFFNUMsSUFBSSxDQUFDTyxHQUFHLENBQUNMLE1BQU0sRUFBRTtrQkFDaEIsTUFBTSxJQUFJRSxLQUFLLENBQUMscUJBQXFCLENBQUM7O2dCQUd2QyxPQUFPRyxHQUFHO2VBQ1YsQ0FBQyxPQUFPYixDQUFDLEVBQUU7Z0JBQ1hjLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDZixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNPLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1TLE1BQU1BLENBQUNWLE1BQU07Y0FDbEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMxQyxLQUFLLENBQUM2QyxNQUFNLENBQUNWLE1BQU0sQ0FBQztnQkFDM0MsT0FBT08sR0FBRztlQUNWLENBQUMsT0FBT2IsQ0FBQyxFQUFFO2dCQUNYYyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUVmLENBQUMsQ0FBQztlQUNuQixTQUFTO2dCQUNULElBQUksQ0FBQ08sUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTVUsVUFBVUEsQ0FBQ1gsTUFBTTtjQUN0QixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1NLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQzFDLEtBQUssQ0FBQzhDLFVBQVUsQ0FBQ1gsTUFBTSxDQUFDO2dCQUUvQyxPQUFPTyxHQUFHO2VBQ1YsQ0FBQyxPQUFPYixDQUFDLEVBQUU7Z0JBQ1hjLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDZixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNPLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQTNDLE9BQUEsQ0FBQVYsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9KRCxJQUFBZ0UsYUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxNQUFBLEdBQUF4RSxPQUFBO1VBRUEsSUFBQXlFLFFBQUEsR0FBQXpFLE9BQUE7VUFDTztVQUFVLFNBQVUwRSxNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRTVDO1lBQUssQ0FBRSxHQUFHLElBQUEyQyxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQ3BDLE9BQ0NILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNOLGFBQUEsQ0FBQU8sWUFBWTtjQUNaN0IsVUFBVTtZQUFBLEVBQ1Q7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBdUIsTUFBQSxHQUFBeEUsT0FBQTtVQVNPLE1BQU0rRSxhQUFhLEdBQUE5RCxPQUFBLENBQUE4RCxhQUFBLEdBQUdQLE1BQUEsQ0FBQUksT0FBSyxDQUFDSSxhQUFhLENBQUMsRUFBbUIsQ0FBQztVQUM5RCxNQUFNTCxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNSCxNQUFBLENBQUFJLE9BQUssQ0FBQ0ssVUFBVSxDQUFDRixhQUFhLENBQUM7VUFBQzlELE9BQUEsQ0FBQTBELGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1Z0RSxJQUFBSCxNQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBeUUsUUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUFtRixHQUFBLEdBQUFuRixPQUFBO1VBRU0sU0FBVW9GLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFdEQ7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDcEMsT0FDQ0gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ00sR0FBQSxDQUFBRSxTQUFTO2NBQUNDLElBQUksRUFBRXhELEtBQUssQ0FBQ3lELEtBQUssQ0FBQ0MsS0FBSztjQUFFQyxXQUFXLEVBQUUzRCxLQUFLLENBQUN5RCxLQUFLLENBQUNFLFdBQVc7Y0FBRUMsSUFBSSxFQUFDO1lBQU0sR0FDcEZsQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBb0MsR0FDbERuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUFVLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLG9CQUFvQjtjQUFDRixTQUFTLEVBQUM7WUFBc0IsR0FDOUQ3RCxLQUFLLENBQUNnRSxPQUFPLENBQUNDLE1BQU0sQ0FDZixDQUNGLENBQ0s7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQXZCLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBeUUsUUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUFnRyxNQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQWlHLE1BQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBa0csT0FBQSxHQUFBbEcsT0FBQTtVQUVNLFNBQVVtRyxXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRTlGLEtBQUs7Y0FBRXlCO1lBQUssQ0FBRSxHQUFHLElBQUEyQyxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQzNDLE1BQU07Y0FBRXlCO1lBQUksQ0FBRSxHQUFHL0YsS0FBSyxDQUFDbUIsS0FBSyxDQUFDNkUsU0FBUztZQUV0QyxNQUFNQyxlQUFlLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQ3JDLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUV2QixNQUFNQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLEdBQUdULE9BQUEsQ0FBQXRCLE9BQU0sQ0FBQ25ELE1BQU0sQ0FBQ21GLE9BQU8seUJBQXlCUixJQUFJLEVBQUUsQ0FBQztnQkFDNUZILE1BQUEsQ0FBQVksS0FBSyxDQUFDQyxPQUFPLENBQUNoRixLQUFLLENBQUNpRixRQUFRLENBQUNDLElBQUksQ0FBQztlQUNsQyxDQUFDLE9BQU9DLEdBQUcsRUFBRTtnQkFDYjlDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDdEMsS0FBSyxDQUFDb0YsU0FBUyxFQUFFRCxHQUFHLENBQUM7O1lBRXJDLENBQUM7WUFFRCxPQUNDekMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXFCLEdBQ25DbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBU2MsU0FBUyxFQUFDO1lBQWMsR0FDaENuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFNYyxTQUFTLEVBQUM7WUFBYSxHQUFFN0QsS0FBSyxDQUFDcUYsT0FBTyxDQUFRLEVBQ3BEM0MsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQVksR0FBRVMsSUFBSSxDQUFRLENBQ2pDLEVBQ1Y1QixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUIsTUFBQSxDQUFBb0IsVUFBVTtjQUFBLGFBQ0MvRyxLQUFLLENBQUNtQixLQUFLLENBQUM2RSxTQUFTLEVBQUVELElBQUk7Y0FDdENaLEtBQUssRUFBRTFELEtBQUssQ0FBQ2dFLE9BQU8sQ0FBQ2tCLElBQUk7Y0FDekJyQixTQUFTLEVBQUMsY0FBYztjQUN4QkQsSUFBSSxFQUFDLE1BQU07Y0FDWDJCLFFBQVEsRUFBRSxDQUFDaEgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDNkUsU0FBUyxFQUFFRCxJQUFJO2NBQ3RDa0IsT0FBTyxFQUFFaEI7WUFBZSxFQUN2QixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUE5QixNQUFBLEdBQUF4RSxPQUFBO1VBRUEsSUFBQW1GLEdBQUEsR0FBQW5GLE9BQUE7VUFDQSxJQUFBeUUsUUFBQSxHQUFBekUsT0FBQTtVQUVBLElBQUF1SCxXQUFBLEdBQUF2SCxPQUFBO1VBRUEsSUFBQXdILFlBQUEsR0FBQXhILE9BQUE7VUFOQTs7VUFHQTs7VUFLTSxTQUFVeUgsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVwSCxLQUFLO2NBQUV5QjtZQUFLLENBQUUsR0FBRyxJQUFBMkMsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNK0MsTUFBTSxHQUFHQSxDQUFDO2NBQUVDO1lBQU0sQ0FBRSxLQUFLdEgsS0FBSyxDQUFDbUIsS0FBSyxDQUFDa0MsSUFBSSxDQUFDO2NBQUUsQ0FBQ2lFLE1BQU0sQ0FBQ3ZFLElBQUksR0FBR3VFLE1BQU0sQ0FBQ3pGO1lBQUssQ0FBRSxDQUFDO1lBQ2hGLE1BQU07Y0FBRWtFO1lBQUksQ0FBRSxHQUFHL0YsS0FBSyxDQUFDbUIsS0FBSyxDQUFDb0csSUFBSTtZQUVqQyxPQUNDcEQsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ00sR0FBQSxDQUFBMEMsZUFBZTtjQUNmQyxFQUFFLEVBQUMsSUFBSTtjQUNQMUUsSUFBSSxFQUFDLE9BQU87Y0FDWnNFLE1BQU0sRUFBRUEsTUFBTTtjQUNkSyxXQUFXLEVBQUVqRyxLQUFLLENBQUMwRCxLQUFLLENBQUN1QyxXQUFXO2NBQ3BDQyxPQUFPLEVBQUUzSCxLQUFLLENBQUNtQixLQUFLLENBQUM0QixJQUFJO2NBQ3pCNkUsUUFBUSxFQUFFNUgsS0FBSyxDQUFDZ0M7WUFBTyxFQUN0QixFQUVGbUMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ00sR0FBQSxDQUFBMEMsZUFBZTtjQUNmQyxFQUFFLEVBQUMsR0FBRztjQUNOMUUsSUFBSSxFQUFDLE9BQU87Y0FDWnNFLE1BQU0sRUFBRUEsTUFBTTtjQUNkSyxXQUFXLEVBQUVqRyxLQUFLLENBQUMyRCxXQUFXLENBQUNzQyxXQUFXO2NBQzFDQyxPQUFPLEVBQUUzSCxLQUFLLENBQUNtQixLQUFLLENBQUNpRSxXQUFXO2NBQ2hDd0MsUUFBUSxFQUFFNUgsS0FBSyxDQUFDZ0M7WUFBTyxFQUN0QixDQUNHLEVBQ05tQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBcUMsR0FDbkRuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEMsV0FBQSxDQUFBVyxVQUFVLE9BQUcsQ0FDVCxFQUNOMUQsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXFDLEdBQ25EbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJDLFlBQUEsQ0FBQXJCLFdBQVcsT0FBRyxDQUNWLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQTNCLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBbUYsR0FBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUF5RSxRQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQW1JLE1BQUEsR0FBQW5JLE9BQUE7VUFDQSxJQUFBc0IsZUFBQSxHQUFBdEIsT0FBQTtVQUtBLElBQUFvSSxPQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQXFJLE9BQUEsR0FBQXJJLE9BQUE7VUFDQSxJQUFBc0ksU0FBQSxHQUFBdEksT0FBQTtVQUVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQ2tJLFVBQVUsRUFBRXpHLEtBQUssQ0FBQyxHQUFHLElBQUFxRyxNQUFBLENBQUFLLFFBQVEsRUFBQ2xILGVBQUEsQ0FBQVUsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDMkIsUUFBUSxFQUFFNkUsV0FBVyxDQUFDLEdBQUdqRSxNQUFBLENBQUFJLE9BQUssQ0FBQzhELFFBQVEsQ0FBQ3JJLEtBQUssQ0FBQ3VELFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUN6QixLQUFLLEVBQUV3RyxRQUFRLENBQUMsR0FBR25FLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEQsUUFBUSxDQUFDckksS0FBSyxDQUFDOEIsS0FBSyxDQUFDO1lBRXJELElBQUFnRyxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDdkksS0FBSyxDQUFDbUIsS0FBSyxDQUFDLEVBQUUsTUFBTWlILFdBQVcsQ0FBQ3BJLEtBQUssQ0FBQ21CLEtBQUssRUFBRW9DLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLElBQUF1RSxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDdkksS0FBSyxDQUFDLEVBQUUsTUFBTXNJLFFBQVEsQ0FBQ3RJLEtBQUssQ0FBQzhCLEtBQUssQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQ0EsS0FBSyxJQUFJLENBQUNvRyxVQUFVLEVBQUUsT0FBTy9ELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNNLEdBQUEsQ0FBQTBELFVBQVU7Y0FBQ2pGLFFBQVEsRUFBRTtZQUFJLEVBQUk7WUFFaEUsSUFBSXZELEtBQUssQ0FBQ21CLEtBQUssQ0FBQ1ksS0FBSyxJQUFJLENBQUMvQixLQUFLLENBQUNtQixLQUFLLENBQUNzSCxTQUFTLEVBQUU7Y0FDaEQsT0FBT3RFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLHlCQUFtQjs7WUFFM0IsSUFBSSxDQUFDeEUsS0FBSyxDQUFDbUIsS0FBSyxDQUFDWSxLQUFLLEVBQUUsT0FBT29DLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLDZCQUF1QjtZQUV0RCxNQUFNM0MsS0FBSyxHQUFHO2NBQUU3QixLQUFLO2NBQUV1RCxRQUFRO2NBQUU5QjtZQUFLLENBQUU7WUFFeEMsT0FDQzBDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNKLFFBQUEsQ0FBQU0sYUFBYSxDQUFDZ0UsUUFBUTtjQUFDN0csS0FBSyxFQUFFQTtZQUFLLEdBQ25Dc0MsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ00sR0FBQSxDQUFBNkQsYUFBYTtjQUFDckQsU0FBUyxFQUFDLDZCQUE2QjtjQUFDL0IsUUFBUSxFQUFFQTtZQUFRLEdBQ3hFWSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUQsT0FBQSxDQUFBWCxlQUFlLE9BQUcsRUFDbkJqRCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBc0IsR0FDcENuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUQsU0FBQSxDQUFBVyxZQUFZO2NBQUNDLElBQUksRUFBQztZQUFVLEVBQUcsRUFDaEMxRSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsT0FBQSxDQUFBYyxVQUFVO2NBQUNDLElBQUksRUFBQztZQUFTLEVBQUcsRUFDN0I1RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsT0FBQSxDQUFBYyxVQUFVO2NBQUNDLElBQUksRUFBQztZQUFVLEVBQUcsQ0FDekIsQ0FDUyxDQUNRO1VBRTNCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBNUUsTUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUF5RSxRQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQWlHLE1BQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBcUosWUFBQSxHQUFBckosT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBQ00sU0FBVXNKLFVBQVVBLENBQUM7WUFBRUMsSUFBSTtZQUFFQztVQUFVLENBQUU7WUFDOUMsTUFBTSxDQUFDQyxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHbEYsTUFBQSxDQUFBSSxPQUFLLENBQUM4RCxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ2hFLE1BQU07Y0FBRTVHLEtBQUs7Y0FBRXpCO1lBQUssQ0FBRSxHQUFHLElBQUFvRSxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQzNDLE1BQU1nRixPQUFPLEdBQUcsQ0FDZjtjQUFFekgsS0FBSyxFQUFFLFFBQVE7Y0FBRWlCLEtBQUssRUFBRXJCLEtBQUssQ0FBQzhILElBQUksQ0FBQy9ILE9BQU8sQ0FBQ3VIO1lBQUksQ0FBRSxFQUNuRDtjQUFFbEgsS0FBSyxFQUFFLFNBQVM7Y0FBRWlCLEtBQUssRUFBRXJCLEtBQUssQ0FBQzhILElBQUksQ0FBQ2pJLFFBQVEsQ0FBQ3lIO1lBQUksQ0FBRSxDQUNyRDtZQUVELE1BQU1TLFNBQVMsR0FBRyxNQUFPdEQsS0FBSyxJQUFtQjtjQUNoREEsS0FBSyxDQUFDdUQsY0FBYyxFQUFFO2NBQ3RCLE1BQU07Z0JBQUVDO2NBQU0sQ0FBRSxHQUFHeEQsS0FBSyxDQUFDeUQsYUFBYSxDQUFDQyxPQUFPO2NBQzlDLElBQUksQ0FBQzVKLEtBQUssQ0FBQzBKLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQjVGLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLGtCQUFrQixFQUFFMkYsTUFBTSxDQUFDO2dCQUN6Qzs7Y0FFRCxJQUFJO2dCQUNILE1BQU0xSixLQUFLLENBQUMwSixNQUFNLENBQUMsQ0FBQztrQkFBRUcsR0FBRyxFQUFFWCxJQUFJLENBQUNXLEdBQUc7a0JBQUVkLElBQUksRUFBRUs7Z0JBQVksQ0FBRSxDQUFDO2dCQUMxREQsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDaEJ2RCxNQUFBLENBQUFZLEtBQUssQ0FBQ0MsT0FBTyxDQUFDaEYsS0FBSyxDQUFDaUYsUUFBUSxDQUFDb0QsUUFBUSxDQUFDckQsT0FBTyxDQUFDO2VBQzlDLENBQUMsT0FBT3pELENBQUMsRUFBRTtnQkFDWDRDLE1BQUEsQ0FBQVksS0FBSyxDQUFDekMsS0FBSyxDQUFDdEMsS0FBSyxDQUFDaUYsUUFBUSxDQUFDb0QsUUFBUSxDQUFDL0YsS0FBSyxDQUFDOztZQUU1QyxDQUFDO1lBRUQsSUFBSW1GLElBQUksQ0FBQ2EsT0FBTyxFQUFFLE9BQU8sSUFBSTtZQUM3QixNQUFNQyxnQkFBZ0IsR0FBRzlELEtBQUssSUFBSW1ELGVBQWUsQ0FBQ25ELEtBQUssQ0FBQ29CLE1BQU0sQ0FBQ3pGLEtBQUssQ0FBQztZQUVyRSxPQUNDc0MsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUEwRixRQUFBLFFBQ0M5RixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBb0IsR0FDbENuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0UsWUFBQSxDQUFBa0IsV0FBVztjQUNYNUUsU0FBUyxFQUFDLGVBQWU7Y0FDekJnRSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJ6SCxLQUFLLEVBQUV1SCxZQUFZO2NBQ25CZSxRQUFRLEVBQUVIO1lBQWdCLEVBQ3pCLENBQ0csRUFDTjdGLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNLLFdBQUEsQ0FBQXVGLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQSxlQUFhLFNBQVM7Y0FBQ3BELE9BQU8sRUFBRXVDLFNBQVM7Y0FBRWMsUUFBUTtjQUFDdEQsUUFBUSxFQUFFLENBQUNvQztZQUFZLEdBQ2xHM0gsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDN0IsT0FBTyxDQUNkLENBSVA7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREEsSUFBQU8sTUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUE0SyxLQUFBLEdBQUE1SyxPQUFBO1VBQ0EsSUFBQTZLLE1BQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBOEssS0FBQSxHQUFBOUssT0FBQTtVQUNBLElBQUF5RSxRQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQW1JLE1BQUEsR0FBQW5JLE9BQUE7VUFFTSxTQUFVaUosWUFBWUEsQ0FBQztZQUFFQztVQUFJLENBQUU7WUFDcEMsTUFBTTtjQUFFN0ksS0FBSztjQUFFeUI7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTWIsSUFBSSxHQUFHekQsS0FBSyxDQUFDbUIsS0FBSyxDQUFDMEgsSUFBSSxDQUFDO1lBQzlCLE1BQU02QixNQUFNLEdBQUdqSixLQUFLLENBQUM4SCxJQUFJLENBQUNWLElBQUksQ0FBQztZQUMvQixNQUFNLENBQUM4QixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHekcsTUFBQSxDQUFBSSxPQUFLLENBQUM4RCxRQUFRLENBQUM1RSxJQUFJLENBQUM7WUFDOUMsSUFBQXFFLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUN2SSxLQUFLLENBQUNtQixLQUFLLENBQUMsRUFBRSxNQUFNeUosUUFBUSxDQUFDLENBQUMsR0FBRzVLLEtBQUssQ0FBQ21CLEtBQUssQ0FBQzBILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLDZCQUE2QixDQUFDLENBQUM7WUFDbkgsSUFBSSxDQUFDOEIsS0FBSyxDQUFDRSxNQUFNLEVBQUUsT0FBTzFHLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNnRyxNQUFBLENBQUFNLFNBQVMsT0FBRztZQUV2QyxPQUNDM0csTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS2tHLE1BQU0sQ0FBQ3ZGLEtBQUssQ0FBTSxDQUNsQixFQUNOaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQytGLEtBQUEsQ0FBQVEsSUFBSTtjQUFDSixLQUFLLEVBQUVBLEtBQUs7Y0FBRUssT0FBTyxFQUFFUCxLQUFBLENBQUFRO1lBQUksRUFBSSxDQUNoQztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBOUcsTUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUF1TCxNQUFBLEdBQUF2TCxPQUFBO1VBQ0EsSUFBQWdHLE1BQUEsR0FBQWhHLE9BQUE7VUFDQSxJQUFBd0wsV0FBQSxHQUFBeEwsT0FBQTtVQUNBLElBQUF5TCxhQUFBLEdBQUF6TCxPQUFBO1VBRU0sU0FBVXNMLElBQUlBLENBQUM7WUFBRS9CO1VBQUksQ0FBRTtZQUM1QixNQUFNLENBQUNtQyxPQUFPLEVBQUVsQyxVQUFVLENBQUMsR0FBR2hGLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEQsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxPQUNDbEUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRHLGFBQUEsQ0FBQUUsZUFBZSxRQUNkLENBQUNELE9BQU8sSUFDUmxILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0RyxhQUFBLENBQUFHLE1BQU0sQ0FBQ0MsRUFBRTtjQUNUQyxHQUFHLEVBQUV2QyxJQUFJLENBQUMzRyxFQUFFO2NBQ1ptSixJQUFJLEVBQUU7Z0JBQ0xDLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFO2lCQUNWO2dCQUNEQyxPQUFPLEVBQUU7ZUFDVDtjQUNEdkcsU0FBUyxFQUFFLDBCQUEwQjRELElBQUksQ0FBQ2EsT0FBTyxJQUFJLENBQUNiLElBQUksQ0FBQzRDLFVBQVUsSUFBSSxVQUFVO1lBQUUsR0FFckYzSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBb0IsR0FDakM0RCxJQUFJLEVBQUU2QyxRQUFRLEdBQUc1SCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEcsTUFBQSxDQUFBYyxLQUFLO2NBQUNDLEdBQUcsRUFBRS9DLElBQUksRUFBRTZDO1lBQVEsRUFBSSxHQUFHNUgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21CLE1BQUEsQ0FBQXVHLElBQUk7Y0FBQzVHLFNBQVMsRUFBQyxJQUFJO2NBQUNELElBQUksRUFBRTtZQUFNLEVBQUksRUFDeEZsQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLMEUsSUFBSSxDQUFDbkcsSUFBSSxDQUFNLEVBQ3BCb0IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsZUFBTzBFLElBQUksQ0FBQ2lELEtBQUssQ0FBUSxDQUNwQixDQUNELEVBQ05oSSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFTYyxTQUFTLEVBQUM7WUFBaUIsR0FDbkNuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkcsV0FBQSxDQUFBbEMsVUFBVTtjQUFDQyxJQUFJLEVBQUVBLElBQUk7Y0FBRUMsVUFBVSxFQUFFQTtZQUFVLEVBQUksQ0FDekMsQ0FFWCxDQUNnQjtVQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQWhGLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBeUUsUUFBQSxHQUFBekUsT0FBQTtVQUNNLFNBQVV5TSxXQUFXQSxDQUFDO1lBQUVsRDtVQUFJLENBQUU7WUFDbkMsSUFBSSxDQUFDQSxJQUFJLENBQUNhLE9BQU8sRUFBRSxPQUFPLElBQUk7WUFDOUIsTUFBTTtjQUFFdEk7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTXlFLElBQUksR0FBR0csSUFBSSxDQUFDSCxJQUFJLEtBQUssUUFBUSxHQUFHdEgsS0FBSyxDQUFDOEgsSUFBSSxDQUFDL0gsT0FBTyxDQUFDdUgsSUFBSSxHQUFHdEgsS0FBSyxDQUFDOEgsSUFBSSxDQUFDakksUUFBUSxDQUFDeUgsSUFBSTtZQUN4RixPQUFPNUUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUEwRixRQUFBLE9BQUs7VUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBOUYsTUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUF5RSxRQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTBNLGVBQUEsR0FBQTFNLE9BQUE7VUFDQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQUNNLFNBQVVtTCxTQUFTQSxDQUFDO1lBQUUvQixJQUFJLEdBQUd6RztVQUFTLENBQUU7WUFDN0MsTUFBTTtjQUFFYjtZQUFLLENBQUUsR0FBRyxJQUFBMkMsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNLENBQUNqRSxJQUFJLEVBQUVpTSxPQUFPLENBQUMsR0FBR25JLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEQsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNcUMsTUFBTSxHQUFHakosS0FBSyxDQUFDOEgsSUFBSSxDQUFDUixJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDMkIsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUN4QixNQUFNNkIsT0FBTyxHQUFHLENBQUMsQ0FBQ3hELElBQUk7WUFDdEIsTUFBTXlELFdBQVcsR0FBR0EsQ0FBQSxLQUFNRixPQUFPLENBQUMsQ0FBQ2pNLElBQUksQ0FBQztZQUN4QyxNQUFNb00sU0FBUyxHQUFHRixPQUFPLEdBQ3RCOUssS0FBSyxDQUFDeUQsS0FBSyxDQUFDd0gsU0FBUyxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUlsTCxLQUFLLENBQUNnRSxPQUFPLENBQUM5QixNQUFNLEdBQUcsQ0FBQyxHQUNyRWxDLEtBQUssQ0FBQ3lELEtBQUssQ0FBQ3FILE9BQU87WUFFdEIsT0FDQ3BJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVNjLFNBQVMsRUFBQztZQUF3QixHQUMxQ25CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUF5QixHQUN2Q25CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUtrRyxNQUFNLENBQUN2RixLQUFLLENBQU0sRUFDdEI0RCxJQUFJLElBQUk1RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUF1RixNQUFNO2NBQUMvRSxJQUFJLEVBQUMsS0FBSztjQUFDdkMsS0FBSyxFQUFFckIsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDOUIsTUFBTTtjQUFFMkIsU0FBUyxFQUFDLEtBQUs7Y0FBQzJCLE9BQU8sRUFBRXVGO1lBQVcsRUFBSSxDQUM1RixFQUNOckksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQW1ELEdBQ2pFbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQUksRyxLQUFHbUgsU0FBUyxDQUFRLENBQ25DLEVBQ050SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkgsZUFBQSxDQUFBTyxjQUFjO2NBQUN2TSxJQUFJLEVBQUVBLElBQUk7Y0FBRTBJLElBQUksRUFBRUEsSUFBSTtjQUFFOEQsT0FBTyxFQUFFTDtZQUFXLEVBQUksQ0FDdkQ7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkEsSUFBQXJJLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBbUksTUFBQSxHQUFBbkksT0FBQTtVQUNBLElBQUF5RSxRQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBNEssS0FBQSxHQUFBNUssT0FBQTtVQUNBLElBQUE4SyxLQUFBLEdBQUE5SyxPQUFBO1VBQ0EsSUFBQTZLLE1BQUEsR0FBQTdLLE9BQUE7VUFDQSxJQUFBME0sZUFBQSxHQUFBMU0sT0FBQTtVQUVNLFNBQVVtSixVQUFVQSxDQUFDO1lBQUVDO1VBQUksQ0FBcUI7WUFDckQsTUFBTTtjQUFFdEgsS0FBSztjQUFFekI7WUFBSyxDQUFFLEdBQUcsSUFBQW9FLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTSxDQUFDakUsSUFBSSxFQUFFaU0sT0FBTyxDQUFDLEdBQUduSSxNQUFBLENBQUFJLE9BQUssQ0FBQzhELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTSxDQUFDc0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3pHLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEQsUUFBUSxDQUFDLENBQUMsR0FBR3JJLEtBQUssQ0FBQytJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUQsTUFBTTJCLE1BQU0sR0FBR2pKLEtBQUssQ0FBQzhILElBQUksQ0FBQ1IsSUFBSSxDQUFDO1lBQy9CLE1BQU15RCxXQUFXLEdBQUdBLENBQUEsS0FBTUYsT0FBTyxDQUFDLENBQUNqTSxJQUFJLENBQUM7WUFFeEMsSUFBQXlILE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUN2SSxLQUFLLENBQUNtQixLQUFLLENBQUMsRUFBRSxNQUFNeUosUUFBUSxDQUFDLENBQUMsR0FBRzVLLEtBQUssQ0FBQytJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTQSxJQUFJLFVBQVUsQ0FBQztZQUVuRixJQUFJLENBQUM0QixLQUFLLENBQUNFLE1BQU0sRUFBRSxPQUFPMUcsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dHLE1BQUEsQ0FBQU0sU0FBUztjQUFDL0IsSUFBSSxFQUFFQTtZQUFJLEVBQUk7WUFFbkQsT0FDQzVFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVNjLFNBQVMsRUFBQztZQUF3QixHQUMxQ25CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUF5QixHQUN2Q25CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUtrRyxNQUFNLENBQUN2RixLQUFLLENBQU0sRUFDdEI0RCxJQUFJLElBQUkvSSxLQUFLLENBQUNnQyxPQUFPLElBQ3JCbUMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssV0FBQSxDQUFBdUYsTUFBTTtjQUFDL0UsSUFBSSxFQUFDLEtBQUs7Y0FBQ3ZDLEtBQUssRUFBRXJCLEtBQUssQ0FBQ2dFLE9BQU8sQ0FBQzlCLE1BQU07Y0FBRTJCLFNBQVMsRUFBQyxLQUFLO2NBQUMyQixPQUFPLEVBQUV1RjtZQUFXLEVBQ3BGLENBQ0ksRUFDTnJJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMrRixLQUFBLENBQUFRLElBQUk7Y0FBQ0osS0FBSyxFQUFFQSxLQUFLO2NBQUVLLE9BQU8sRUFBRVAsS0FBQSxDQUFBUTtZQUFJLEVBQUksRUFDckM5RyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkgsZUFBQSxDQUFBTyxjQUFjO2NBQUN2TSxJQUFJLEVBQUVBLElBQUk7Y0FBRTBJLElBQUksRUFBRUEsSUFBSTtjQUFFOEQsT0FBTyxFQUFFTDtZQUFXLEVBQUksQ0FDdkQ7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQXJJLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBbU4sS0FBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUFpRyxNQUFBLEdBQUFqRyxPQUFBO1VBRUEsSUFBQXlFLFFBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFvTixNQUFBLEdBQUFwTixPQUFBO1VBR00sU0FBVWlOLGNBQWNBLENBQUM7WUFBRXZNLElBQUk7WUFBRXdNLE9BQU87WUFBRTlEO1VBQUksQ0FBRTtZQUNyRCxNQUFNO2NBQUUvSSxLQUFLO2NBQUV5QjtZQUFLLENBQUUsR0FBRyxJQUFBMkMsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUMwSSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHOUksTUFBQSxDQUFBSSxPQUFLLENBQUM4RCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU0sQ0FBQ3RFLEtBQUssRUFBRW1KLFFBQVEsQ0FBQyxHQUFHL0ksTUFBQSxDQUFBSSxPQUFLLENBQUM4RCxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU04RSxhQUFhLEdBQUc7Y0FDckJwSyxJQUFJLEVBQUUsRUFBRTtjQUNSb0osS0FBSyxFQUFFLEVBQUU7Y0FDVHBELElBQUksRUFBRTthQUNOO1lBQ0QsTUFBTSxDQUFDekYsTUFBTSxFQUFFOEosU0FBUyxDQUFDLEdBQUdqSixNQUFBLENBQUFJLE9BQUssQ0FBQzhELFFBQVEsQ0FBQzhFLGFBQWEsQ0FBQztZQUN6RCxNQUFNRSxRQUFRLEdBQUc7Y0FBRS9MLFFBQVEsRUFBRSxTQUFTO2NBQUVFLE9BQU8sRUFBRTtZQUFRLENBQUU7WUFDM0QsTUFBTThMLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ3hCRixTQUFTLENBQUNELGFBQWEsQ0FBQztjQUN4QkQsUUFBUSxDQUFDLEVBQUUsQ0FBQztjQUNaRCxVQUFVLENBQUMsS0FBSyxDQUFDO2NBQ2pCSixPQUFPLEVBQUU7WUFDVixDQUFDO1lBQ0QsTUFBTVUsUUFBUSxHQUFHLE1BQU1ySCxLQUFLLElBQUc7Y0FDOUJBLEtBQUssQ0FBQ3VELGNBQWMsRUFBRTtjQUN0QndELFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDaEIsTUFBTU8sUUFBUSxHQUFHLE1BQU14TixLQUFLLENBQUMyRCxNQUFNLENBQUM7Z0JBQUUsR0FBR0wsTUFBTTtnQkFBRXlGLElBQUksRUFBRXNFLFFBQVEsQ0FBQ3RFLElBQUk7Y0FBQyxDQUFFLENBQUM7Y0FDeEUsSUFBSSxDQUFDeUUsUUFBUSxDQUFDaEssTUFBTSxFQUFFO2dCQUNyQjBKLFFBQVEsQ0FBQ00sUUFBUSxDQUFDekosS0FBSyxDQUFDO2dCQUN4QjZCLE1BQUEsQ0FBQVksS0FBSyxDQUFDQyxPQUFPLENBQUMxQyxLQUFLLENBQUM7O2NBR3JCNkIsTUFBQSxDQUFBWSxLQUFLLENBQUNDLE9BQU8sQ0FBQ2hGLEtBQUssQ0FBQ2dNLE1BQU0sQ0FBQzlKLE1BQU0sQ0FBQzhDLE9BQU8sQ0FBQztjQUMxQzZHLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFFRCxNQUFNSSxZQUFZLEdBQUdBLENBQUM7Y0FBRS9ELGFBQWEsRUFBRXJDO1lBQU0sQ0FBRSxLQUFJO2NBQ2xELE1BQU1xRyxZQUFZLEdBQUc7Z0JBQUUsR0FBR3JLO2NBQU0sQ0FBRTtjQUNsQ3FLLFlBQVksQ0FBQ3JHLE1BQU0sQ0FBQ3ZFLElBQUksQ0FBQyxHQUFHdUUsTUFBTSxDQUFDekYsS0FBSztjQUN4Q3VMLFNBQVMsQ0FBQ08sWUFBWSxDQUFDO2NBQ3ZCVCxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2IsQ0FBQztZQUVELElBQUksQ0FBQzdNLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTXVOLFVBQVUsR0FBR25NLEtBQUssQ0FBQ29NLEtBQUssQ0FBQ2xLLE1BQU0sQ0FBQ3dCLEtBQUssQ0FBQ3dILE9BQU8sQ0FBQyxPQUFPLEVBQUVsTCxLQUFLLENBQUM4SCxJQUFJLENBQUNSLElBQUksQ0FBQyxDQUFDQSxJQUFJLENBQUM7WUFFbkYsTUFBTTtjQUFFaEcsSUFBSTtjQUFFb0o7WUFBSyxDQUFFLEdBQUc3SSxNQUFNO1lBQzlCLE1BQU1nRyxPQUFPLEdBQUcsQ0FDZjtjQUFFekgsS0FBSyxFQUFFLFFBQVE7Y0FBRWlCLEtBQUssRUFBRXJCLEtBQUssQ0FBQzhILElBQUksQ0FBQy9ILE9BQU8sQ0FBQ3VIO1lBQUksQ0FBRSxFQUNuRDtjQUFFbEgsS0FBSyxFQUFFLFNBQVM7Y0FBRWlCLEtBQUssRUFBRXJCLEtBQUssQ0FBQzhILElBQUksQ0FBQ2pJLFFBQVEsQ0FBQ3lIO1lBQUksQ0FBRSxDQUNyRDtZQUVELE9BQ0M1RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUksTUFBQSxDQUFBZSxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUUxTixJQUFJO2NBQUNpRixTQUFTLEVBQUMsWUFBWTtjQUFDdUgsT0FBTyxFQUFFUztZQUFXLEdBQzVFbkosTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUWMsU0FBUyxFQUFDO1lBQW9CLEdBQ3JDbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS29KLFVBQVUsQ0FBTSxDQUNiLEVBRVR6SixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksS0FBQSxDQUFBa0IsSUFBSTtjQUFDMUksU0FBUyxFQUFDLE9BQU87Y0FBQ2lJLFFBQVEsRUFBRUE7WUFBUSxHQUN6Q3BKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxLQUFBLENBQUFtQixLQUFLO2NBQ0xuTCxLQUFLLEVBQUMsTUFBTTtjQUNaK0YsSUFBSSxFQUFDLE1BQU07Y0FDWDlGLElBQUksRUFBQyxNQUFNO2NBQ1hsQixLQUFLLEVBQUVrQixJQUFJO2NBQ1hvSCxRQUFRLEVBQUV1RCxZQUFZO2NBQ3RCaEcsV0FBVyxFQUFDLGlCQUFpQjtjQUM3QndHLFFBQVE7WUFBQSxFQUNQLEVBQ0YvSixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksS0FBQSxDQUFBbUIsS0FBSztjQUNMdkcsV0FBVyxFQUFDLGtCQUFrQjtjQUM5QjVFLEtBQUssRUFBQyxPQUFPO2NBQ2IrRixJQUFJLEVBQUMsT0FBTztjQUNaOUYsSUFBSSxFQUFDLE9BQU87Y0FDWmxCLEtBQUssRUFBRXNLLEtBQUs7Y0FDWmhDLFFBQVEsRUFBRXVELFlBQVk7Y0FDdEJRLFFBQVE7WUFBQSxFQUNQLEVBRUYvSixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBc0MsR0FDcERuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUF1RixNQUFNO2NBQUN2QixJQUFJLEVBQUMsUUFBUTtjQUFDd0IsT0FBTyxFQUFDLFNBQVM7Y0FBQ2hGLElBQUksRUFBQyxZQUFZO2NBQUMySCxPQUFPLEVBQUVBLE9BQU87Y0FBRWxLLEtBQUssRUFBQztZQUFRLEVBQUcsQ0FDeEYsQ0FDQSxDQUNBO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkZBLElBQUFxQixNQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQW9OLE1BQUEsR0FBQXBOLE9BQUE7VUFDQSxJQUFBbU4sS0FBQSxHQUFBbk4sT0FBQTtVQUNBLElBQUFxSixZQUFBLEdBQUFySixPQUFBO1VBQ0EsSUFBQXlFLFFBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQUVBLElBQUFpRyxNQUFBLEdBQUFqRyxPQUFBO1VBRU0sU0FBVXdPLFlBQVlBLENBQUM7WUFBRWpGLElBQUk7WUFBRTdJLElBQUk7WUFBRXdNO1VBQU8sQ0FBRTtZQUNuRCxNQUFNO2NBQUVwTCxLQUFLO2NBQUV6QjtZQUFLLENBQUUsR0FBRyxJQUFBb0UsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUM4SixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHbEssTUFBQSxDQUFBSSxPQUFLLENBQUM4RCxRQUFRLENBQUNhLElBQUksQ0FBQ0gsSUFBSSxJQUFJLFNBQVMsQ0FBQztZQUMxRSxNQUFNLENBQUNpRSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHOUksTUFBQSxDQUFBSSxPQUFLLENBQUM4RCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELElBQUksQ0FBQ2hJLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTWtOLFFBQVEsR0FBRyxNQUFNckgsS0FBSyxJQUFHO2NBQzlCQSxLQUFLLENBQUN1RCxjQUFjLEVBQUU7Y0FDdEIsSUFBSTtnQkFDSHdELFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLE1BQU1qTixLQUFLLENBQUNpRSxVQUFVLENBQUM7a0JBQUU4RSxJQUFJLEVBQUVxRixVQUFVO2tCQUFFdkUsR0FBRyxFQUFFWCxJQUFJLENBQUNXO2dCQUFHLENBQUUsQ0FBQztnQkFDM0RqRSxNQUFBLENBQUFZLEtBQUssQ0FBQ0MsT0FBTyxDQUFDaEYsS0FBSyxDQUFDZ00sTUFBTSxDQUFDOUosTUFBTSxDQUFDOEMsT0FBTyxDQUFDO2VBQzFDLENBQUMsT0FBT3pELENBQUMsRUFBRTtnQkFDWDRDLE1BQUEsQ0FBQVksS0FBSyxDQUFDekMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO2dCQUNuQ0QsT0FBTyxDQUFDQyxLQUFLLENBQUNmLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUaUssVUFBVSxDQUFDLEtBQUssQ0FBQzs7WUFFbkIsQ0FBQztZQUVELE1BQU0zRCxPQUFPLEdBQUcsQ0FDZjtjQUFFekgsS0FBSyxFQUFFLFNBQVM7Y0FBRWlCLEtBQUssRUFBRXJCLEtBQUssQ0FBQzhILElBQUksQ0FBQy9ILE9BQU8sQ0FBQ3VIO1lBQUksQ0FBRSxFQUNwRDtjQUFFbEgsS0FBSyxFQUFFLFNBQVM7Y0FBRWlCLEtBQUssRUFBRXJCLEtBQUssQ0FBQzhILElBQUksQ0FBQ2pJLFFBQVEsQ0FBQ3lIO1lBQUksQ0FBRSxDQUNyRDtZQUVELE1BQU1pQixnQkFBZ0IsR0FBRzlELEtBQUssSUFBRztjQUNoQ21JLGFBQWEsQ0FBQ25JLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQ3pGLEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBQ0QsT0FDQ3NDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN1SSxNQUFBLENBQUFlLEtBQUs7Y0FBQ0MsYUFBYSxFQUFFLEtBQUs7Y0FBRTFOLElBQUk7Y0FBQ2lGLFNBQVMsRUFBQyxZQUFZO2NBQUN1SCxPQUFPLEVBQUVBO1lBQU8sR0FDeEUxSSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ksS0FBQSxDQUFBa0IsSUFBSTtjQUFDVCxRQUFRLEVBQUVBO1lBQVEsR0FDdkJwSixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBYSxHQUMzQm5CLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU1jLFNBQVMsRUFBQztZQUFJLEdBQUU3RCxLQUFLLENBQUNvTSxLQUFLLENBQUNTLElBQUksQ0FBQ25KLEtBQUssQ0FBUSxFQUNwRGhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUdjLFNBQVMsRUFBQztZQUFJLEdBQUU3RCxLQUFLLENBQUNvTSxLQUFLLENBQUNTLElBQUksQ0FBQ0MsSUFBSSxDQUFLLENBQ3hDLEVBQ05wSyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0UsWUFBQSxDQUFBa0IsV0FBVztjQUFDWixPQUFPLEVBQUVBLE9BQU87Y0FBRWtGLFlBQVksRUFBRUosVUFBVTtjQUFFakUsUUFBUSxFQUFFSDtZQUFnQixFQUFJLEVBQ3ZGN0YsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUWMsU0FBUyxFQUFDO1lBQXNDLEdBQ3ZEbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ssV0FBQSxDQUFBdUYsTUFBTTtjQUFDdkIsSUFBSSxFQUFDLFFBQVE7Y0FBQ3dCLE9BQU8sRUFBQyxTQUFTO2NBQUNoRixJQUFJLEVBQUMsWUFBWTtjQUFDMkgsT0FBTyxFQUFFQSxPQUFPO2NBQUUvRixPQUFPLEVBQUVzRztZQUFRLEdBQzNGOUwsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDcEMsSUFBSSxDQUNYLENBQ0QsQ0FDSCxDQUNBO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUFjLE1BQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBdUwsTUFBQSxHQUFBdkwsT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQXlFLFFBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBZ0csTUFBQSxHQUFBaEcsT0FBQTtVQUVBLElBQUE4TyxRQUFBLEdBQUE5TyxPQUFBO1VBRU0sU0FBVXNMLElBQUlBLENBQUM7WUFBRS9CO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUV6SCxLQUFLO2NBQUV6QjtZQUFLLENBQUUsR0FBRyxJQUFBb0UsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUNqRSxJQUFJLEVBQUVpTSxPQUFPLENBQUMsR0FBR25JLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEQsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU3QyxNQUFNbUUsV0FBVyxHQUFHQSxDQUFBLEtBQU1GLE9BQU8sQ0FBQyxDQUFDak0sSUFBSSxDQUFDO1lBRXhDLE9BQ0M4RCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFJaUgsR0FBRyxFQUFFdkMsSUFBSSxDQUFDM0csRUFBRTtjQUFFK0MsU0FBUyxFQUFDO1lBQXdCLEdBQ25EbkIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQW9CLEdBQ2pDNEQsSUFBSSxFQUFFNkMsUUFBUSxHQUFHNUgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBHLE1BQUEsQ0FBQWMsS0FBSztjQUFDQyxHQUFHLEVBQUUvQyxJQUFJLEVBQUU2QztZQUFRLEVBQUksR0FBRzVILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNtQixNQUFBLENBQUF1RyxJQUFJO2NBQUM1RyxTQUFTLEVBQUMsSUFBSTtjQUFDRCxJQUFJLEVBQUU7WUFBTSxFQUFJLEVBQ3hGbEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQUksR0FBRTRELElBQUksQ0FBQ25HLElBQUksQ0FBUSxDQUNsQyxFQUNML0MsS0FBSyxDQUFDZ0MsT0FBTyxJQUNibUMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUEwRixRQUFBLFFBQ0M5RixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JuQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSyxXQUFBLENBQUF1RixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLFFBQVE7Y0FBQ3JELE9BQU8sRUFBRXVGO1lBQVcsR0FDckQvSyxLQUFLLENBQUNnRSxPQUFPLENBQUM2SSxJQUFJLENBQ1gsRUFFVG5LLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNpSyxRQUFBLENBQUFOLFlBQVk7Y0FBQ2pGLElBQUksRUFBRUEsSUFBSTtjQUFFN0ksSUFBSSxFQUFFQSxJQUFJO2NBQUV3TSxPQUFPLEVBQUVMO1lBQVcsRUFBSSxDQUN6RCxDQUVQLENBQ0c7VUFFUCIsImlnbm9yZUxpc3QiOltdfQ==