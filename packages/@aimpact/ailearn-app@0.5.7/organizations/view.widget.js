System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.5.7/main-layout.widget", "@aimpact/ailearn-app@0.5.7/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/organizations", "react@18.3.1", "pragmate-ui@1.0.6/alert", "pragmate-ui@1.0.6/modal", "pragmate-ui@1.0.6/form", "pragmate-ui@1.0.6/form/react-select", "pragmate-ui@1.0.6/components", "@aimpact/ailearn-app@0.5.7/components/ui", "pragmate-ui@1.0.6/toast", "pragmate-ui@1.0.6/icons", "@aimpact/ailearn-app@0.5.7/model/wrapper", "@aimpact/ailearn-app@0.5.7/components/icons", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.6/list", "pragmate-ui@1.0.6/badge", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.6/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    View: void 0
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
    }, function (_aimpactAilearnApp057MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp057MainLayoutWidget;
    }, function (_aimpactAilearnApp057StoresBase) {
      dependency_5 = _aimpactAilearnApp057StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesOrganizations) {
      dependency_6 = _aimpactAilearnSdk120EntitiesOrganizations;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi106Alert) {
      dependency_8 = _pragmateUi106Alert;
    }, function (_pragmateUi106Modal) {
      dependency_9 = _pragmateUi106Modal;
    }, function (_pragmateUi106Form) {
      dependency_10 = _pragmateUi106Form;
    }, function (_pragmateUi106FormReactSelect) {
      dependency_11 = _pragmateUi106FormReactSelect;
    }, function (_pragmateUi106Components) {
      dependency_12 = _pragmateUi106Components;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_13 = _aimpactAilearnApp057ComponentsUi;
    }, function (_pragmateUi106Toast) {
      dependency_14 = _pragmateUi106Toast;
    }, function (_pragmateUi106Icons) {
      dependency_15 = _pragmateUi106Icons;
    }, function (_aimpactAilearnApp057ModelWrapper) {
      dependency_16 = _aimpactAilearnApp057ModelWrapper;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_beyondJsKernel0112Routing) {
      dependency_18 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_19 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi106List) {
      dependency_20 = _pragmateUi106List;
    }, function (_pragmateUi106Badge) {
      dependency_21 = _pragmateUi106Badge;
    }, function (_aimpactChatSdk155Session) {
      dependency_22 = _aimpactChatSdk155Session;
    }, function (_pragmateUi106Image) {
      dependency_23 = _pragmateUi106Image;
    }, function (_framerMotion2) {
      dependency_24 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/organizations', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/model/wrapper', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/badge', dependency_21], ['@aimpact/chat-sdk/session', dependency_22], ['pragmate-ui/image', dependency_23], ['framer-motion', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/organizations/view.widget');
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
        hash: 2128826852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _beyond_context = require("beyond_context");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          /*bundle*/
          class StoreManager extends _base.ViewStoreManager {
            get isAdmin() {
              return !!this.model?.isAdmin;
            }
            constructor() {
              super(_beyond_context.module.specifier, _organizations.Organization);
              this.defineReactiveProps(['fetching']);
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
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/coins
      *****************************/

      ims.set('./views/coins', {
        hash: 4243089792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntityCoins = EntityCoins;
          var _react = require("react");
          var _context = require("./context");
          var _alert = require("pragmate-ui/alert");
          function EntityCoins() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              model
            } = store;
            if (!model.coins || !store.isAdmin) return null;
            return _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "profile-coins__section"
            }, _react.default.createElement("h3", null, texts.coins.label), _react.default.createElement("div", {
              className: "coins-detail__container"
            }, _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.assignments), _react.default.createElement("span", null, model.coins.assignments.count)), _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.modules), _react.default.createElement("span", null, model.coins.modules.count))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 631431152,
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

      /*******************************************
      INTERNAL MODULE: ./views/forms/approve-field
      *******************************************/

      ims.set('./views/forms/approve-field', {
        hash: 2384418648,
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/approve
      *************************************/

      ims.set('./views/forms/approve', {
        hash: 289435250,
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
                _toast.toast.success(texts.system.invite.success);
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/confirm
      *************************************/

      ims.set('./views/forms/confirm', {
        hash: 2229487128,
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
            }, texts.actions.save))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/edition
      *************************************/

      ims.set('./views/forms/edition', {
        hash: 633720687,
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.save))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/forms/invite
      ************************************/

      ims.set('./views/forms/invite', {
        hash: 3826441221,
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
              texts
            } = (0, _context.useModuleContext)();
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const defaultValues = {
              name: '',
              email: ''
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
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "modal-form",
              onClose: handleClose
            }, _react.default.createElement("header", {
              className: "modal-form__header"
            }, _react.default.createElement("h3", null, texts.form.title)), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "role",
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
              variant: "primary",
              loading: loading,
              label: texts.actions.invite
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
        hash: 3432451805,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
                await navigator.clipboard.writeText(`${_wrapper.settings.baseUrl}/organizations/join?code=${code}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            return _react.default.createElement("div", {
              className: "group-code__container"
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
        hash: 1119146497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
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
            const onClick = () => _routing.routing.pushState(`/organizations/management?id=${store.model.id}`);
            return _react.default.createElement("header", {
              className: "page-container__header"
            }, _react.default.createElement("div", {
              className: "cover-content__container bg-primary"
            }, _react.default.createElement("div", {
              className: "group-entity__icon"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            })), _react.default.createElement("span", null, _react.default.createElement("h1", null, store.model.name))), _react.default.createElement(_icons.AppIconButton, {
              className: "btn-header__edit-action",
              icon: "edit",
              onClick: onClick
            }), _react.default.createElement(_codeSection.CodeSection, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 543715112,
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
          var _header = require("./header/header");
          var _coins = require("./coins");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [update, setUpdate] = _react.default.useState({});
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setUpdate({}));
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (store.model.found && !store.model.hasAccess) {
              return _react.default.createElement("app-not-allowed", null);
            }
            if (!store.model.found) return _react.default.createElement("app-missing-control", null);
            const value = {
              store,
              fetching: store.fetching,
              texts
            };
            const cls = `app-organization-creation-page ${store.fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: cls,
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_coins.EntityCoins, null), _react.default.createElement(_list.Members, null)));
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
        hash: 223006703,
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
        hash: 3730289000,
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
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _invite = require("../forms/invite");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _filters = require("./filters");
          function Members() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState('people');
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const [updated, setUpdated] = _react.default.useState(performance.now());
            const list = store.model[selected];
            (0, _hooks.useBinder)([store.model], () => setUpdated(performance.now()));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "filters__container"
            }, _react.default.createElement(_filters.Filters, {
              selected: selected,
              setSelected: setSelected
            }), " "), store.isAdmin && _react.default.createElement(_components.Button, {
              variant: "primary",
              label: texts.actions.invite,
              className: "add",
              onClick: toggleModal
            })), list.length === 0 ? _react.default.createElement(_empty.EmptyList, {
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
        hash: 1778947666,
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
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
            const onDelete = () => store.removeMember(item.uid);
            if (!store.model.isAdmin || (item.id || item.uid) === _session.sessionWrapper.user.id) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "item-actions"
            }, _react.default.createElement(_icons.AppIconButton, {
              title: texts.actions.delete,
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
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
                  onClick: () => setShowDeleteModal(false),
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.delete.description)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/item/index
      ***************************************/

      ims.set('./views/list/item/index', {
        hash: 4221515755,
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
            }, item.email))), _react.default.createElement("span", {
              className: "role"
            }, texts.roles[role]?.title), _react.default.createElement(_actions.ItemActions, {
              item: item
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/invited
      *****************************************/

      ims.set('./views/list/item/invited', {
        hash: 1840860296,
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
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.model.cancelInvitation({
                id: store.model.id,
                email: item.email
              });
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
            }, texts.actions.cancel)), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/list/item/pending/RejectPending
      *******************************************************/

      ims.set('./views/list/item/pending/RejectPending', {
        hash: 2392877374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RejectPending = RejectPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          // import { ItemActions } from './actions';

          function RejectPending({
            item
          }) {
            const {
              texts,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, texts.actions.reject), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
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
        hash: 1858777722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmPending = ConfirmPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _approve = require("../../../forms/approve");
          // import { ItemActions } from './actions';

          function ConfirmPending({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, texts.actions.approve), isOpen && _react.default.createElement(_approve.ApproveModal, {
              item: item,
              show: isOpen,
              onClose: toggleModal
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/list/item/pending/index
      ***********************************************/

      ims.set('./views/list/item/pending/index', {
        hash: 210108212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingItem = PendingItem;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _RejectPending = require("./RejectPending");
          var _confirm = require("./confirm");
          // import { ItemActions } from './actions';

          function PendingItem({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
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
            }, _react.default.createElement(_RejectPending.RejectPending, {
              item: item
            }), _react.default.createElement(_confirm.ConfirmPending, {
              item: item
            })), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9vcmdhbml6YXRpb25zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiT3JnYW5pemF0aW9uIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwiaXRlbSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFwcHJvdmFsIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwib3B0aW9ucyIsInZhbHVlIiwibGlzdCIsIm1lbWJlcnMiLCJtYW5hZ2VycyIsImhhbmRsZVJvbGVDaGFuZ2UiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJmb3JtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJFcnJvclJlbmRlcmVyIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJzeXN0ZW0iLCJpbnZpdGUiLCJDb25maXJtTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsImVkaXRGb3JtIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsInNhdmUiLCJSb2xlTW9kYWwiLCJJbnZpdGF0aW9uRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwiZW1haWwiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsInJvbGVzIiwiSW5wdXQiLCJyZXF1aXJlZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3dyYXBwZXIiLCJDb2RlU2VjdGlvbiIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldHRpbmdzIiwiYmFzZVVybCIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsIl9jb2RlU2VjdGlvbiIsIl9yb3V0aW5nIiwiSGVhZGVyQ29udGFpbmVyIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkFwcEljb24iLCJBcHBJY29uQnV0dG9uIiwiX2hvb2tzIiwiX2hlYWRlciIsIl9jb2lucyIsIl9saXN0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlQmluZGVyIiwicmVhZHkiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJjbHMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJNZW1iZXJzIiwiRW1wdHlMaXN0IiwiZW1wdHkiLCJwZW5kaW5nIiwicm9sIiwiRW1wdHlDYXJkIiwidGV4dCIsIkZpbHRlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJrZXlzIiwiZm9yRWFjaCIsInB1c2giLCJpZGVudGlmaWVyIiwiZW50aXR5IiwidG90YWwiLCJwZW5kaW5ncyIsImxlbmd0aCIsImtleSIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJfaXRlbSIsIl9lbXB0eSIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJGcmFnbWVudCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiX2VkaXRpb24iLCJfc2Vzc2lvbiIsIkl0ZW1BY3Rpb25zIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidG9nZ2xlRGVsZXRlTW9kYWwiLCJvbkRlbGV0ZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiX2ZyYW1lck1vdGlvbiIsImlzT3BlbiIsInNldElzT3BlbiIsImNhbmNlbEludml0YXRpb24iLCJtb3Rpb24iLCJsaSIsIlJlamVjdFBlbmRpbmciLCJfYXBwcm92ZSIsIkNvbmZpcm1QZW5kaW5nIiwiX1JlamVjdFBlbmRpbmciLCJfY29uZmlybSJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvZm9ybXMvYXBwcm92ZS1maWVsZC50c3giLCIvL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiLy90cy92aWV3cy9mb3Jtcy9jb25maXJtLnRzeCIsIi8vdHMvdmlld3MvZm9ybXMvZWRpdGlvbi50c3giLCIvL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvL2dsb2JhbC50c3gvIiwiLy90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi8vdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2xpc3QvZmlsdGVycy50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbnZpdGVkLnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvUmVqZWN0UGVuZGluZy50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL2NvbmZpcm0udHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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