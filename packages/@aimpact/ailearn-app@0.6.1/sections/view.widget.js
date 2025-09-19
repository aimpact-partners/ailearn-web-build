System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/sections", "react@18.3.1", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.6.1/components/module-card", "@aimpact/ailearn-app@0.6.1/i18n.ts", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/form/react-select", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.6.1/components/icons", "@aimpact/ailearn-app@0.6.1/config", "@aimpact/ailearn-app@0.6.1/model/wrapper", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/tabs", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.8/image", "framer-motion@10.18.0", "pragmate-ui@1.0.8/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, RequestAccess, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    View: void 0,
    RequestAccess: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_aimpactAilearnApp061StoresBase) {
      dependency_5 = _aimpactAilearnApp061StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesSections) {
      dependency_6 = _aimpactAilearnSdk120EntitiesSections;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_8 = _aimpactAilearnApp061ComponentsUi;
    }, function (_pragmateUi108List) {
      dependency_9 = _pragmateUi108List;
    }, function (_aimpactAilearnApp061ComponentsModuleCard) {
      dependency_10 = _aimpactAilearnApp061ComponentsModuleCard;
    }, function (_aimpactAilearnApp061I18nTs) {
      dependency_11 = _aimpactAilearnApp061I18nTs;
    }, function (_pragmateUi108Modal) {
      dependency_12 = _pragmateUi108Modal;
    }, function (_pragmateUi108Form) {
      dependency_13 = _pragmateUi108Form;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_14 = _pragmateUi108FormReactSelect;
    }, function (_pragmateUi108Components) {
      dependency_15 = _pragmateUi108Components;
    }, function (_pragmateUi108Toast) {
      dependency_16 = _pragmateUi108Toast;
    }, function (_pragmateUi108Icons) {
      dependency_17 = _pragmateUi108Icons;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_aimpactAilearnApp061Config) {
      dependency_19 = _aimpactAilearnApp061Config;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_20 = _aimpactAilearnApp061ModelWrapper;
    }, function (_beyondJsKernel0112Routing) {
      dependency_21 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_22 = _aimpactAilearnApp061SharedHooks;
    }, function (_pragmateUi108Tabs) {
      dependency_23 = _pragmateUi108Tabs;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_24 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactChatSdk155Session) {
      dependency_25 = _aimpactChatSdk155Session;
    }, function (_pragmateUi108Image) {
      dependency_26 = _pragmateUi108Image;
    }, function (_framerMotion2) {
      dependency_27 = _framerMotion2;
    }, function (_pragmateUi108Alert) {
      dependency_28 = _pragmateUi108Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/sections/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/sections', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/module-card', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@aimpact/ailearn-app/model/wrapper', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@aimpact/ailearn-app/shared/hooks', dependency_22], ['pragmate-ui/tabs', dependency_23], ['@beyond-js/react-18-widgets/hooks', dependency_24], ['@aimpact/chat-sdk/session', dependency_25], ['pragmate-ui/image', dependency_26], ['framer-motion', dependency_27], ['pragmate-ui/alert', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-sections-view",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/sections/view.widget",
        "is": "page",
        "route": "/kb/sections/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/sections/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2137039665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
              _mainLayout.LayoutBroker.refresh = () => this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              _mainLayout.LayoutBroker.refresh = null;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 94542565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _beyond_context = require("beyond_context");
          var _sections = require("@aimpact/ailearn-sdk/entities/sections");
          /*bundle*/
          class StoreManager extends _base.ViewStoreManager {
            get isAdmin() {
              return !!this.model?.isAdmin;
            }
            constructor() {
              super(_beyond_context.module.specifier, _sections.Section);
              this.defineReactiveProps(['fetching']);
              _mainLayout.LayoutBroker.overlay = false;
            }
            async load(id) {
              await super.load(id);
              _mainLayout.LayoutBroker.set({
                overlay: true,
                breadcrumb: [[this.globalTexts.entities.kbSections, `/kb/sections/list`], [this.model.name]]
              });
            }
            async approve({
              uid,
              role
            }) {
              try {
                this.fetching = true;
                const res = await this.model.approve({
                  id: this.model.id,
                  uid,
                  role
                });
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
            async reject(uid) {
              try {
                this.fetching = true;
                const res = await this.model.reject({
                  id: this.model.id,
                  uid
                });
                return res;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async cancelInvitation(email) {
              try {
                this.fetching = true;
                const res = await this.model.cancelInvitation({
                  id: this.model.id,
                  email
                });
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
            async removeMember(uid) {
              try {
                this.fetching = true;
                const res = await this.model.removeMember({
                  id: this.model.id,
                  uid
                });
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            requestAccess() {
              return this.model.requestAccess();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/assignments/empty
      *****************************************/

      ims.set('./views/assignments/empty', {
        hash: 1224010999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList() {
            let {
              texts
            } = (0, _context.useModuleContext)();
            texts = texts.empty.assignments;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.title,
              icon: "info"
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/assignments/index
      *****************************************/

      ims.set('./views/assignments/index', {
        hash: 2249723609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Asssignments = Asssignments;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
          var _item = require("./item");
          var _empty = require("./empty");
          function Asssignments() {
            const {
              store
            } = (0, _context.useModuleContext)();
            if (!store.model?.assignments?.length) {
              return React.createElement(_empty.EmptyList, null);
            }
            return React.createElement("div", null, React.createElement(_list.List, {
              className: "entity__list",
              items: store.model.assignments,
              control: _item.AssignmentItem
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/assignments/item
      ****************************************/

      ims.set('./views/assignments/item', {
        hash: 472745606,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var React = require("react");
          var _context = require("../context");
          function AssignmentItem({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const href = store.isAdmin ? `/dashboard/${item.id}` : `/assignments/${item.id}`;
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.AssignmentCard, {
              href: href,
              type: item.type,
              id: item.id,
              item: item.module,
              audience: item.module.audience,
              texts: texts,
              entity: "assignment",
              mode: store.isAdmin ? 'teacher' : 'student'
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2074456393,
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

      /*************************************
      INTERNAL MODULE: ./views/forms/approve
      *************************************/

      ims.set('./views/forms/approve', {
        hash: 3854165243,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApproveModal = ApproveModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _toast = require("pragmate-ui/toast");
          function ApproveModal({
            item,
            show,
            onClose,
            action = 'update'
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [roleSelected, setRoleSelected] = _react.default.useState(null);
            const [error, setError] = _react.default.useState(null);
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.model.approve({
                  role: roleSelected,
                  uid: item.uid
                });
                _toast.toast.success(texts.messages.approval.success);
                onClose();
              } catch (e) {
                setError(texts.errors[e.code.toString()]);
                console.error(e.code);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'member',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const disabled = !roleSelected;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.forms.approve.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.forms.approve.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              placeholder: texts.form.role.placeholder,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/confirm
      *************************************/

      ims.set('./views/forms/confirm', {
        hash: 3805124601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = ConfirmModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function ConfirmModal({
            item,
            show,
            onClose
          }) {
            const {
              texts,
              globalTexts,
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
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setSelectRole(event.target.value);
            };
            const disabled = selectRole === item.role || loading || !selectRole;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.editForm.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.editForm.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.save))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/edition
      *************************************/

      ims.set('./views/forms/edition', {
        hash: 800445425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RoleModal = RoleModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function RoleModal({
            item,
            show,
            onClose,
            role,
            action = 'update'
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [roleSelected, setRoleSelected] = _react.default.useState(item.role || 'teacher');
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.updateRole({
                  role: roleSelected,
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
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const disabled = roleSelected === item.role || loading || !roleSelected;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.editForm.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.editForm.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              value: role,
              options: options,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.save))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/forms/invite
      ************************************/

      ims.set('./views/forms/invite', {
        hash: 2612404720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitationForm = InvitationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function InvitationForm({
            show,
            onClose,
            role
          }) {
            const {
              store,
              texts,
              globalTexts
            } = (0, _context.useModuleContext)();
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const defaultValues = {
              name: '',
              email: '',
              role: role === 'manager' ? role : 'member'
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const handleClose = () => {
              setValues(defaultValues);
              setError('');
              setLoading(false);
              onClose();
            };
            const onSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await store.model.invite({
                ...values
              });
              if (!response.status) {
                // setError(response.error);
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
            const options = ['manager', 'member'].map(item => ({
              value: item,
              label: texts.roles[item].title
            }));
            const {
              name,
              email
            } = values;
            const isDisabled = !name || !email || !role || loading;
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "modal-form",
              onClose: handleClose
            }, _react.default.createElement("header", {
              className: "modal-form__header"
            }, _react.default.createElement("h3", null, texts.form.title)), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "role",
              value: values?.role,
              placeholder: texts.form.role.placeholder,
              options: options,
              onChange: handleChange
            }), _react.default.createElement(_form.Form, {
              className: "mt-15",
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              label: texts.form.name.label,
              type: "text",
              name: "name",
              value: name,
              variant: "floating",
              onChange: handleChange,
              placeholder: texts.form.name.placeholder,
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.form.email.placeholder,
              label: texts.form.email.label,
              type: "email",
              variant: "floating",
              name: "email",
              onChange: handleChange,
              required: true
            }), _react.default.createElement("div", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              disabled: isDisabled,
              variant: "primary",
              loading: loading,
              label: globalTexts.actions.invite
            }))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 2142904461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/header/code-section
      *******************************************/

      ims.set('./views/header/code-section', {
        hash: 1066755743,
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
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function CodeSection() {
            const {
              store,
              globalTexts,
              texts
            } = (0, _context.useModuleContext)();
            const {
              code
            } = store.model.joinSpecs;
            const [open, setOpen] = _react.default.useState(false);
            const copyToClipboard = async event => {
              try {
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_wrapper.settings.baseUrl}/kb/sections/join?code=${code}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            const onWatch = event => setOpen(!open);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "group-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__label"
            }, texts.orgCode), _react.default.createElement("span", {
              className: "code__text"
            }, code)), _react.default.createElement("div", {
              className: "group-code__actions"
            }, _react.default.createElement(_icons.IconButton, {
              "data-text": store.model.joinSpecs?.code,
              title: globalTexts.actions.copy,
              className: "copy__button circle",
              icon: "link",
              disabled: !store.model.joinSpecs?.code,
              onClick: copyToClipboard
            }), _react.default.createElement(_icons2.AppIconButton, {
              className: "circle",
              title: globalTexts.actions.watch,
              icon: "watch",
              onClick: onWatch
            }))), open && _react.default.createElement(_modal.Modal, {
              show: true,
              className: "code-modal",
              onClose: onWatch
            }, _react.default.createElement("h2", null, code, " ")));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 2245725806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _codeSection = require("./code-section");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _routing = require("@beyond-js/kernel/routing");
          //@ts-ignore

          //@ts-ignore

          function HeaderContainer() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const onClick = () => _routing.routing.pushState(`/kb/sections/management?id=${store.model.id}`);
            const owner = store.model.owner?.organization ?? store.model.owner.teacher;
            return _react.default.createElement("header", {
              className: "page-container__header mb-1"
            }, _react.default.createElement("div", {
              className: "cover-content__container bg-primary"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, store.model.name), _react.default.createElement(_ui.UserData, {
              data: owner,
              type: store.model.owner.organization ? 'organization' : 'teacher'
            }))), _react.default.createElement(_codeSection.CodeSection, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1902638881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _assignments = require("./assignments");
          var _context = require("./context");
          var _header = require("./header/header");
          var _list = require("./list");
          var _requestAccess = require("./request-access");
          /*bundle*/
          function View({
            store
          }) {
            const {
              texts,
              globalTexts
            } = store;
            (0, _hooks.useStore)(store);
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (store.model.found && !store.model.hasAccess) {
              return _react.default.createElement(_requestAccess.RequestAccess, {
                store: store
              });
            }
            if (!store.model.found && !store.fetching) return _react.default.createElement("app-missing-control", null);
            const value = {
              store,
              fetching: store.fetching,
              texts,
              globalTexts
            };
            const cls = `app-classroom-creation-page ${store.fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: cls,
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_tabs.TabsContainer, {
              tabs: ['assignments', 'people'],
              className: "pui-page-tabs-container",
              trackUrl: true
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, store.globalTexts.entities.kb), _react.default.createElement(_tabs.Tab, null, store.texts.people)), _react.default.createElement(_tabs.Panes, {
              items: [_assignments.Asssignments, _list.Members]
            }))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 1165083918,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList(role) {
            let {
              texts
            } = (0, _context.useModuleContext)();
            texts = role === 'pending' ? texts.empty.pending : texts.empty.rol;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.title,
              icon: "info"
            });
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/list/filters
      ************************************/

      ims.set('./views/list/filters', {
        hash: 3247522206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Filters = Filters;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function Filters({
            selected,
            setSelected
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setSelected(value === 'all' ? 'people' : value);
            };
            const size = (0, _components.useMediaQuery)();
            if (size === 'xs') {
              const options = [];
              Object.keys(texts.roles).forEach(item => {
                options.push({
                  value: texts.roles[item].identifier,
                  label: texts.roles[item].entity
                });
              });
              return _react.default.createElement(_reactSelect.ReactSelect, {
                value: selected,
                name: "owner",
                options: options,
                onChange: onChange
              });
            }
            const options = [];
            Object.keys(texts.roles).forEach(item => {
              const total = store.model.pendings.length;
              if (item === 'pending' && !store.isAdmin) return;
              options.push(_react.default.createElement(_components.Button, {
                variant: "default",
                key: item,
                value: texts.roles[item].identifier
              }, _react.default.createElement("div", null, texts.roles[item].entity, item === 'pending' && total > 0 && _react.default.createElement("i", {
                className: "button-group__badge"
              }, store.model.pendings.length))));
            });
            return _react.default.createElement(_components.ButtonGroup, {
              onChange: onChange,
              selected: 0,
              orientation: "column",
              size: "tall",
              variant: "default"
            }, options);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 1613331218,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Members = Members;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _empty = require("./empty");
          var _invite = require("../forms/invite");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _filters = require("./filters");
          function Members() {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState('people');
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const [updated, setUpdated] = _react.default.useState(performance.now());
            const list = store.model[selected];
            (0, _hooks.useBinder)([store.model], () => setUpdated(performance.now()));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "members__container"
            }, _react.default.createElement("div", {
              className: "filters__container"
            }, _react.default.createElement(_filters.Filters, {
              selected: selected,
              setSelected: setSelected
            }), " "), store.isAdmin && _react.default.createElement(_icons.AppButton, {
              icon: "add",
              variant: "primary",
              title: globalTexts.actions.invite,
              className: "mobile-icon-button",
              onClick: toggleModal
            }, globalTexts.actions.invite)), list.length === 0 ? _react.default.createElement(_empty.EmptyList, {
              role: selected
            }) : _react.default.createElement(_list.List, {
              className: "people-list__container",
              items: list,
              control: _item.Item
            }), _react.default.createElement(_invite.InvitationForm, {
              show: show,
              onClose: toggleModal,
              role: selected
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/actions
      *****************************************/

      ims.set('./views/list/item/actions', {
        hash: 3779792852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../../context");
          var _edition = require("../../forms/edition");
          var _modal = require("pragmate-ui/modal");
          var _session = require("@aimpact/chat-sdk/session");
          function ItemActions({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
            const onDelete = () => store.removeMember(item.uid);
            if (!store.model.isAdmin || (item.id || item.uid) === _session.sessionWrapper.user.id) {
              return _react.default.createElement("div", {
                style: {
                  width: '30px'
                }
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "item-actions"
            }, _react.default.createElement(_icons.AppIconButton, {
              title: globalTexts.actions.delete,
              onClick: toggleDeleteModal,
              icon: "delete",
              variant: "default",
              sizing: "sm",
              className: "circle"
            })), show && _react.default.createElement(_edition.RoleModal, {
              item: item,
              show: show,
              onClose: toggleModal,
              role: item.role
            }), showDeleteModal && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.delete.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: () => setShowDeleteModal(false),
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.delete.description)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/list/item/confirm-action
      ************************************************/

      ims.set('./views/list/item/confirm-action', {
        hash: 1946251026,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          function ConfirmAction({
            item
          }) {
            const [open, setOpen] = _react.default.useState(false);
            return _react.default.createElement(_react.default.Fragment, null);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/item/index
      ***************************************/

      ims.set('./views/list/item/index', {
        hash: 2290841202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _invited = require("./invited");
          var _pending = require("./pending");
          var _actions = require("./actions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          // import { ItemActions } from './actions';
          function Item({
            item
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            if (item.invited) return _react.default.createElement(_invited.InvitedItem, {
              item: item
            });
            if (item.authorized === false) return _react.default.createElement(_pending.PendingItem, {
              item: item
            });
            const role = item.role ?? 'member';
            return _react.default.createElement("li", {
              className: "person-item__container group-member-item"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "item-name"
            }, item.name), _react.default.createElement("span", {
              className: "item-email"
            }, item.email))), _react.default.createElement("div", {
              className: "role__container actions-container"
            }, _react.default.createElement(_ui.Chip, {
              variant: "success"
            }, texts.roles[role]?.title), _react.default.createElement(_actions.ItemActions, {
              item: item
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/invited
      *****************************************/

      ims.set('./views/list/item/invited', {
        hash: 2256157460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitedItem = InvitedItem;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          // import { ItemActions } from './actions';

          function InvitedItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            return _react.default.createElement(_framerMotion.motion.li, {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "item-name"
            }, item.name), _react.default.createElement("span", {
              className: "item-email"
            }, item.email))), _react.default.createElement("div", {
              className: "item-actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.cancel)), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/list/item/pending/confirm
      *************************************************/

      ims.set('./views/list/item/pending/confirm', {
        hash: 1856001357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmPending = ConfirmPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function ConfirmPending({
            item,
            loading,
            onConfirm
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIconButton, {
              icon: "check",
              disabled: loading,
              title: globalTexts.actions.approve,
              onClick: onConfirm
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/list/item/pending/index
      ***********************************************/

      ims.set('./views/list/item/pending/index', {
        hash: 229906948,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingItem = PendingItem;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _toast = require("pragmate-ui/toast");
          var _confirm = require("./confirm");
          var _reject = require("./reject");
          // import { ItemActions } from './actions';

          function PendingItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const [error, setError] = _react.default.useState(null);
            const [loading, setLoading] = _react.default.useState(false);
            const [roleSelected, setRoleSelected] = _react.default.useState('member');
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.model.approve({
                  role: roleSelected,
                  uid: item.uid
                });
                _toast.toast.success(texts.messages.approval.success);
              } catch (e) {
                setError(texts.errors[e.code.toString()]);
                console.error(e.code);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'member',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            return _react.default.createElement("li", {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "item-name"
            }, item.name), _react.default.createElement("span", {
              className: "item-email"
            }, item.email))), _react.default.createElement("div", {
              className: "item-actions"
            }, _react.default.createElement(_reactSelect.ReactSelect, {
              value: roleSelected,
              options: options,
              placeholder: texts.form.role.placeholder,
              onChange: handleRoleChange
            }), _react.default.createElement(_reject.RejectPending, {
              item: item
            }), _react.default.createElement(_confirm.ConfirmPending, {
              loading: loading,
              item: item,
              onConfirm: onSubmit
            })), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/list/item/pending/reject
      ************************************************/

      ims.set('./views/list/item/pending/reject', {
        hash: 569725161,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RejectPending = RejectPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          // import { ItemActions } from './actions';

          function RejectPending({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              if (item.invited) {
                await store.model.cancelInvitation({
                  email: item.email
                });
              } else {
                await store.model.reject({
                  uid: item.id
                });
              }
              toggleModal();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIconButton, {
              title: globalTexts.actions.reject,
              icon: "trash",
              onClick: toggleModal
            }), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/request-access
      **************************************/

      ims.set('./views/request-access', {
        hash: 4056493601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestAccess = RequestAccess;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          /*bundle*/
          function RequestAccess({
            store
          }) {
            const {
              texts
            } = store;
            const status = store.model?.access?.toLowerCase();
            const {
              title,
              action,
              description,
              subtitle
            } = texts[status] ?? 'not_allowed';
            const [error, setError] = _react.default.useState();
            const [message, setMessage] = _react.default.useState();
            const [processing, setProcessing] = _react.default.useState(false);
            const onRequest = async () => {
              try {
                setProcessing(true);
                if (status === 'pending') {
                  await store.load(store.model.id);
                  return;
                }
                const response = await store.requestAccess();
                setMessage(response.message);
              } catch (e) {
                console.error(e);
              } finally {
                setProcessing(false);
              }
            };
            const disabled = {
              disabled: processing
            };
            return _react.default.createElement(_ui.PageContainer, {
              className: "request-access__container place-center"
            }, error && _react.default.createElement(_alert.Alert, {
              type: "danger"
            }, error), message && _react.default.createElement(_alert.Alert, {
              type: "success"
            }, message), _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("header", null, _react.default.createElement("h1", null, title), _react.default.createElement("h5", null, subtitle)), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("article", {
              className: "access-classroom__container"
            }, _react.default.createElement("section", null, _react.default.createElement(_image.Image, {
              src: store.model.picture,
              alt: store.model.name
            })), _react.default.createElement("section", null, _react.default.createElement("h3", null, store.model?.name)))), _react.default.createElement("p", null, description), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onRequest,
              fetching: processing,
              ...disabled
            }, action))), _react.default.createElement("div", null, _react.default.createElement(_image.Image, {
              src: "/assets/images/students/not-allowed.webp",
              alt: "Student does not have access",
              className: "img-100 img-move-animation"
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/request-access",
        "from": "RequestAccess",
        "name": "RequestAccess"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'RequestAccess') && _export("RequestAccess", RequestAccess = require ? require('./views/request-access').RequestAccess : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9zZWN0aW9ucyIsIlZpZXdTdG9yZU1hbmFnZXIiLCJpc0FkbWluIiwibW9kZWwiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNlY3Rpb24iLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwib3ZlcmxheSIsImlkIiwic2V0IiwiYnJlYWRjcnVtYiIsImdsb2JhbFRleHRzIiwiZW50aXRpZXMiLCJrYlNlY3Rpb25zIiwibmFtZSIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWplY3QiLCJjYW5jZWxJbnZpdGF0aW9uIiwiZW1haWwiLCJ1cGRhdGVSb2xlIiwidmFsdWVzIiwicmVtb3ZlTWVtYmVyIiwicmVxdWVzdEFjY2VzcyIsIl9yZWFjdCIsIl91aSIsIl9jb250ZXh0IiwiRW1wdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZW1wdHkiLCJhc3NpZ25tZW50cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsInRpdGxlIiwiaWNvbiIsIlJlYWN0IiwiX2xpc3QiLCJfaXRlbSIsIl9lbXB0eSIsIkFzc3NpZ25tZW50cyIsImxlbmd0aCIsIkxpc3QiLCJjbGFzc05hbWUiLCJpdGVtcyIsImNvbnRyb2wiLCJBc3NpZ25tZW50SXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImhyZWYiLCJGcmFnbWVudCIsIkFzc2lnbm1lbnRDYXJkIiwidHlwZSIsImF1ZGllbmNlIiwiZW50aXR5IiwibW9kZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9mb3JtIiwiX3JlYWN0U2VsZWN0IiwiX2NvbXBvbmVudHMiLCJfdG9hc3QiLCJBcHByb3ZlTW9kYWwiLCJvbkNsb3NlIiwiYWN0aW9uIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJhcHByb3ZhbCIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwicm9sZXMiLCJtZW1iZXIiLCJtYW5hZ2VyIiwiaGFuZGxlUm9sZUNoYW5nZSIsInRhcmdldCIsImRpc2FibGVkIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImZvcm1zIiwiZGVzY3JpcHRpb24iLCJFcnJvclJlbmRlcmVyIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkNvbmZpcm1Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic3lzdGVtIiwiaW52aXRlIiwiZWRpdEZvcm0iLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwic2F2ZSIsIlJvbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibWFwIiwiaXNEaXNhYmxlZCIsIklucHV0IiwicmVxdWlyZWQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9pY29uczIiLCJfd3JhcHBlciIsIkNvZGVTZWN0aW9uIiwiam9pblNwZWNzIiwib3BlbiIsInNldE9wZW4iLCJjb3B5VG9DbGlwYm9hcmQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXR0aW5ncyIsImJhc2VVcmwiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib25XYXRjaCIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiQXBwSWNvbkJ1dHRvbiIsIndhdGNoIiwiX2NvZGVTZWN0aW9uIiwiX3JvdXRpbmciLCJIZWFkZXJDb250YWluZXIiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwib3duZXIiLCJvcmdhbml6YXRpb24iLCJ0ZWFjaGVyIiwiQXBwSWNvbiIsIlVzZXJEYXRhIiwiZGF0YSIsIl9ob29rcyIsIl90YWJzIiwiX2Fzc2lnbm1lbnRzIiwiX2hlYWRlciIsIl9yZXF1ZXN0QWNjZXNzIiwidXNlU3RvcmUiLCJyZWFkeSIsIlBhZ2VMb2FkZXIiLCJmb3VuZCIsImhhc0FjY2VzcyIsIlJlcXVlc3RBY2Nlc3MiLCJjbHMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwidGFicyIsInRyYWNrVXJsIiwiVGFicyIsIlRhYiIsImtiIiwicGVvcGxlIiwiUGFuZXMiLCJNZW1iZXJzIiwicGVuZGluZyIsInJvbCIsIkZpbHRlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJrZXlzIiwiZm9yRWFjaCIsInB1c2giLCJpZGVudGlmaWVyIiwidG90YWwiLCJwZW5kaW5ncyIsImtleSIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJfaW52aXRlIiwiX2ZpbHRlcnMiLCJzZXRTaG93IiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwibGlzdCIsInVzZUJpbmRlciIsIkFwcEJ1dHRvbiIsIkl0ZW0iLCJfZWRpdGlvbiIsIl9zZXNzaW9uIiwiSXRlbUFjdGlvbnMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJ0b2dnbGVEZWxldGVNb2RhbCIsIm9uRGVsZXRlIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwic3R5bGUiLCJ3aWR0aCIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJDb25maXJtQWN0aW9uIiwiX2ltYWdlIiwiX2ludml0ZWQiLCJfcGVuZGluZyIsIl9hY3Rpb25zIiwiaW52aXRlZCIsIkludml0ZWRJdGVtIiwiYXV0aG9yaXplZCIsIlBlbmRpbmdJdGVtIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VybCIsIkNoaXAiLCJfZnJhbWVyTW90aW9uIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibW90aW9uIiwibGkiLCJDb25maXJtUGVuZGluZyIsIl9jb25maXJtIiwiX3JlamVjdCIsIlJlamVjdFBlbmRpbmciLCJfYWxlcnQiLCJhY2Nlc3MiLCJ0b0xvd2VyQ2FzZSIsInN1YnRpdGxlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsIkFsZXJ0IiwicGljdHVyZSIsImFsdCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2VtcHR5LnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudHMvaW5kZXgudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50cy9pdGVtLnRzeCIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvZm9ybXMvYXBwcm92ZS50c3giLCIvL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiLy90cy92aWV3cy9mb3Jtcy9lZGl0aW9uLnRzeCIsIi8vdHMvdmlld3MvZm9ybXMvaW52aXRlLnRzeCIsIi8vZ2xvYmFsLnRzeC8iLCIvL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiLy90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi8vdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaXRlbS9hY3Rpb25zLnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pdGVtL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pdGVtL2ludml0ZWQudHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9jb25maXJtLnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvaW5kZXgudHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9yZWplY3QudHN4IiwiLy90cy92aWV3cy9yZXF1ZXN0LWFjY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxT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