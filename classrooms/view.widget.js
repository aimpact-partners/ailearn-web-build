System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-app@0.1.6-dev.07/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-app@0.1.6-dev.07/components/navbar-header.code", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.07/config", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.07/components/ui", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/toast", "@aimpact/ailearn-app@0.1.6-dev.07/components/cover-image.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/form/react-select", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/image", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev07MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp016Dev07MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk110Session) {
      dependency_8 = _aimpactChatSdk110Session;
    }, function (_aimpactAilearnApp016Dev07ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp016Dev07ComponentsNavbarHeaderCode;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp016Dev07Config) {
      dependency_11 = _aimpactAilearnApp016Dev07Config;
    }, function (_pragmateUi100Beta2Components) {
      dependency_12 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev07ComponentsUi) {
      dependency_13 = _aimpactAilearnApp016Dev07ComponentsUi;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_14 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_15 = _pragmateUi100Beta2Toast;
    }, function (_aimpactAilearnApp016Dev07ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp016Dev07ComponentsCoverImageCode;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.07"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/toast', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.07/classrooms/view.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJwYXJhbXMiLCJvYmplY3RpdmVzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsIm1lbWJlcnMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwicmVhZHkiLCJmb3VuZCIsImlzQWRtaW4iLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsIm0iLCJ1bmRlZmluZWQiLCJzZXRCcmVhZGNydW1iIiwib25DaGFuZ2UiLCJiaW5kIiwib2ZmIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsInNldFRpbWVvdXQiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsIm1hbmFnZW1lbnQiLCJpZCIsImlzUmVhZHkiLCJzcGVjcyIsIkNsYXNzcm9vbSIsImRhdGEiLCJlIiwiZGVsZXRlIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfbmF2YmFySGVhZGVyIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJOYXZiYXJIZWFkZXIiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl91aSIsIkVtcHR5RW50aXR5IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfaWNvbnMiLCJfdG9hc3QiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJjb2RlIiwiam9pblNwZWNzIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJiYXNlVXJsIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJfY292ZXJJbWFnZSIsIl9jb2RlU2VjdGlvbiIsIkhlYWRlckNvbnRhaW5lciIsIm9uU2F2ZSIsInRhcmdldCIsIm5hbWUiLCJqb2luIiwiQ29udGVudEVkaXRhYmxlIiwiYXMiLCJwbGFjZWhvbGRlciIsImNvbnRlbnQiLCJlZGl0YWJsZSIsIkNvdmVySW1hZ2UiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3Blb3BsZSIsIl9hcHByb3ZhbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBcHByb3ZhbExpc3QiLCJ0eXBlIiwiUGVvcGxlTGlzdCIsInJvbGUiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSb2xlIiwiaXRlbSIsInNldFJlbW92ZWQiLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJvcHRpb25zIiwibGFiZWwiLCJsaXN0Iiwib25Qcm9jZXNzIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInVpZCIsImFwcHJvdmFsIiwiaW52aXRlZCIsImhhbmRsZVJvbGVDaGFuZ2UiLCJGcmFnbWVudCIsIlJlYWN0U2VsZWN0IiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsImxhYmVscyIsIml0ZW1zIiwic2V0SXRlbXMiLCJsZW5ndGgiLCJFbXB0eUxpc3QiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfaW1hZ2UiLCJfY2hvaWNlUnVsZSIsIl9mcmFtZXJNb3Rpb24iLCJyZW1vdmVkIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwibGkiLCJrZXkiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib3BhY2l0eSIsImF1dGhvcml6ZWQiLCJwaG90b1VybCIsIkltYWdlIiwic3JjIiwiSWNvbiIsImVtYWlsIiwiUGVuZGluZ0RhdGEiLCJfaW52aXRhdGlvbkZvcm0iLCJzZXRTaG93IiwicGVuZGluZyIsInRvZ2dsZU1vZGFsIiwiZW1wdHlUZXh0IiwibGFiZWxMaXN0IiwicmVwbGFjZSIsIkludml0YXRpb25Gb3JtIiwib25DbG9zZSIsIl9mb3JtIiwiX21vZGFsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJyb2xlVHlwZSIsImhhbmRsZUNsb3NlIiwib25TdWJtaXQiLCJyZXNwb25zZSIsInN5c3RlbSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRWYWx1ZSIsIm1vZGFsVGl0bGUiLCJtb2RhbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiRWRpdGlvbk1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJlZGl0IiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsIl9lZGl0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1ydWxlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxD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