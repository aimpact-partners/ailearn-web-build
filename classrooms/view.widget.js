System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@aimpact/ailearn-app@0.1.13/widgets/base", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/alert", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
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
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_aimpactAilearnApp0113WidgetsBase) {
      dependency_5 = _aimpactAilearnApp0113WidgetsBase;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_8 = _pragmateUi100Beta6Alert;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_9 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_10 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_11 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Components) {
      dependency_12 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_14 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_15 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113Config) {
      dependency_16 = _aimpactAilearnApp0113Config;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_20 = _pragmateUi100Beta6List;
    }, function (_aimpactChatSdk130Session) {
      dependency_21 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Image) {
      dependency_22 = _pragmateUi100Beta6Image;
    }, function (_framerMotion2) {
      dependency_23 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/widgets/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/list', dependency_20], ['@aimpact/chat-sdk/session', dependency_21], ['pragmate-ui/image', dependency_22], ['framer-motion', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/classrooms/view.widget');
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
        hash: 3153977744,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/widgets/base");
          var _beyond_context = require("beyond_context");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          /*bundle*/
          class StoreManager extends _base.ViewStoreManager {
            get isAdmin() {
              return !!this.model?.isAdmin;
            }
            constructor() {
              super(_beyond_context.module.specifier, _classrooms.Classroom);
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
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/coins
      *****************************/

      ims.set('./views/coins', {
        hash: 3348126422,
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
              className: "profile-coins__section mt-15"
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

      /*************************************
      INTERNAL MODULE: ./views/forms/approve
      *************************************/

      ims.set('./views/forms/approve', {
        hash: 2319959616,
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
            }, texts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/confirm
      *************************************/

      ims.set('./views/forms/confirm', {
        hash: 208852941,
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
            }, texts.actions.save))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/edition
      *************************************/

      ims.set('./views/forms/edition', {
        hash: 2480319406,
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
        hash: 956506259,
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
        hash: 3911763608,
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
            const onClick = () => _routing.routing.pushState(`/classrooms/management?id=${store.model.id}`);
            return _react.default.createElement("header", {
              className: "page-container__header mb-1"
            }, _react.default.createElement("div", {
              className: "cover-content__container bg-primary"
            }, _react.default.createElement(_ui.EntityImage, {
              src: store.model.picture,
              entity: "institution"
            }), _react.default.createElement("span", null, _react.default.createElement("h1", null, store.model.name))), _react.default.createElement(_icons.AppIconButton, {
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
        hash: 1138499143,
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
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
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
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: "app-classroom-creation-page",
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_list.Members, null)));
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
        hash: 1612210512,
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
              setSelected(value === 'all' ? 'authorizedPeople' : value);
            };
            const size = (0, _components.useMediaQuery)();
            if (size === 'xs') {
              const options = Object.keys(texts.roles).map(item => {
                return {
                  value: texts.roles[item].identifier,
                  label: texts.roles[item].entity
                };
              });
              return _react.default.createElement(_reactSelect.ReactSelect, {
                value: selected,
                name: "owner",
                options: options,
                onChange: onChange
              });
            }
            const options = Object.keys(texts.roles).map(item => {
              const total = store.model.pendings.length;
              return _react.default.createElement(_components.Button, {
                variant: "default",
                key: item,
                value: texts.roles[item].identifier
              }, _react.default.createElement("div", null, texts.roles[item].entity, item === 'pending' && total > 0 && _react.default.createElement("i", {
                className: "button-group__badge"
              }, store.model.pendings.length)));
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
        hash: 4264040610,
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
            const [selected, setSelected] = _react.default.useState('authorizedPeople');
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const [updated, setUpdated] = _react.default.useState(performance.now());
            globalThis.model = store.model;
            const list = store.model[selected];
            (0, _hooks.useBinder)([store.model], () => setUpdated(performance.now()));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement(_filters.Filters, {
              selected: selected,
              setSelected: setSelected
            }), " ", store.isAdmin && _react.default.createElement(_components.Button, {
              icon: "add",
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
        hash: 1222758772,
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
            if (!store.model.isAdmin || item.id === _session.sessionWrapper.user.id) return null;
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
        hash: 233032695,
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
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("span", {
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
        hash: 2456437675,
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
        hash: 2509603142,
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
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsImNhbmNlbEludml0YXRpb24iLCJlbWFpbCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwiaXRlbSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzeXN0ZW0iLCJpbnZpdGUiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJyb2xlcyIsIm1lbWJlciIsInRpdGxlIiwibWFuYWdlciIsImhhbmRsZVJvbGVDaGFuZ2UiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJmb3JtcyIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiQ29uZmlybU1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJlZGl0Rm9ybSIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJzYXZlIiwiUm9sZU1vZGFsIiwiSW52aXRhdGlvbkZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsInNldFZhbHVlcyIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibWFwIiwiSW5wdXQiLCJyZXF1aXJlZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiam9pblNwZWNzIiwiY29weVRvQ2xpcGJvYXJkIiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwicGFyYW1zIiwiYmFzZVVybCIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiX2NvZGVTZWN0aW9uIiwiX3JvdXRpbmciLCJIZWFkZXJDb250YWluZXIiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQXBwSWNvbkJ1dHRvbiIsIl9ob29rcyIsIl9oZWFkZXIiLCJfbGlzdCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJNZW1iZXJzIiwiRW1wdHlMaXN0IiwiZW1wdHkiLCJwZW5kaW5nIiwicm9sIiwiRW1wdHlDYXJkIiwidGV4dCIsIkZpbHRlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJrZXlzIiwiaWRlbnRpZmllciIsInRvdGFsIiwicGVuZGluZ3MiLCJsZW5ndGgiLCJrZXkiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiX2l0ZW0iLCJfZW1wdHkiLCJfaW52aXRlIiwiX2ZpbHRlcnMiLCJzZXRTaG93IiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2xvYmFsVGhpcyIsImxpc3QiLCJGcmFnbWVudCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiX2VkaXRpb24iLCJfc2Vzc2lvbiIsIkl0ZW1BY3Rpb25zIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidG9nZ2xlRGVsZXRlTW9kYWwiLCJvbkRlbGV0ZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJDb25maXJtQWN0aW9uIiwib3BlbiIsInNldE9wZW4iLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInBob3RvVXJsIiwiX2ZyYW1lck1vdGlvbiIsImlzT3BlbiIsInNldElzT3BlbiIsIm1vdGlvbiIsImxpIiwiUmVqZWN0UGVuZGluZyIsIl9hcHByb3ZlIiwiQ29uZmlybVBlbmRpbmciLCJfUmVqZWN0UGVuZGluZyIsIl9jb25maXJtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29pbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZm9ybXMvYXBwcm92ZS50c3giLCIvdHMvdmlld3MvZm9ybXMvY29uZmlybS50c3giLCIvdHMvdmlld3MvZm9ybXMvZWRpdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybXMvaW52aXRlLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2ZpbHRlcnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2ludml0ZWQudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL1JlamVjdFBlbmRpbmcudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQ3pDWixXQUFBLENBQUFhLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RTtZQUVBRyxJQUFJQSxDQUFBO2NBQ0hmLFdBQUEsQ0FBQWEsWUFBWSxDQUFDQyxPQUFPLEdBQUcsSUFBSTtZQUM1Qjs7VUFDQUUsT0FBQSxDQUFBZixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJELElBQUFnQixLQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLGVBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsV0FBQSxHQUFBdEIsT0FBQTtVQUVPO1VBQVUsTUFBT1EsWUFBYSxTQUFRWSxLQUFBLENBQUFHLGdCQUEyQjtZQUV2RSxJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDQyxLQUFLLEVBQUVELE9BQU87WUFDN0I7WUFDQUUsWUFBQTtjQUNDLEtBQUssQ0FBQ0wsZUFBQSxDQUFBTSxNQUFNLENBQUNDLFNBQVMsRUFBRU4sV0FBQSxDQUFBTyxTQUFTLENBQUM7Y0FDbEMsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDO1lBRUEsTUFBTUMsT0FBT0EsQ0FBQztjQUFFQyxHQUFHO2NBQUVDO1lBQUksQ0FBRTtjQUMxQixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1DLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQ1YsS0FBSyxDQUFDTSxPQUFPLENBQUM7a0JBQUVLLEVBQUUsRUFBRSxJQUFJLENBQUNYLEtBQUssQ0FBQ1csRUFBRTtrQkFBRUosR0FBRztrQkFBRUM7Z0JBQUksQ0FBRSxDQUFDO2dCQUV0RSxJQUFJLENBQUNFLEdBQUcsQ0FBQ0UsTUFBTSxFQUFFO2tCQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Z0JBR3ZDLE9BQU9ILEdBQUc7ZUFDVixDQUFDLE9BQU9JLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0wsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTVEsTUFBTUEsQ0FBQ1YsR0FBRztjQUNmLElBQUk7Z0JBQ0gsSUFBSSxDQUFDRSxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTUMsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDVixLQUFLLENBQUNpQixNQUFNLENBQUM7a0JBQUVOLEVBQUUsRUFBRSxJQUFJLENBQUNYLEtBQUssQ0FBQ1csRUFBRTtrQkFBRUo7Z0JBQUcsQ0FBRSxDQUFDO2dCQUUvRCxPQUFPRyxHQUFHO2VBQ1YsQ0FBQyxPQUFPSSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUYsQ0FBQyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTCxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNUyxnQkFBZ0JBLENBQUNDLEtBQUs7Y0FDM0IsSUFBSTtnQkFDSCxJQUFJLENBQUNWLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNQyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUNWLEtBQUssQ0FBQ2tCLGdCQUFnQixDQUFDO2tCQUFFUCxFQUFFLEVBQUUsSUFBSSxDQUFDWCxLQUFLLENBQUNXLEVBQUU7a0JBQUVRO2dCQUFLLENBQUUsQ0FBQztnQkFFM0UsT0FBT1QsR0FBRztlQUNWLENBQUMsT0FBT0ksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUVGLENBQUMsQ0FBQztlQUNuQixTQUFTO2dCQUNULElBQUksQ0FBQ0wsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTVcsVUFBVUEsQ0FBQ0MsTUFBTTtjQUN0QixJQUFJO2dCQUNILElBQUksQ0FBQ1osUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1DLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQ1YsS0FBSyxDQUFDb0IsVUFBVSxDQUFDQyxNQUFNLENBQUM7Z0JBRS9DLE9BQU9YLEdBQUc7ZUFDVixDQUFDLE9BQU9JLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0wsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTWEsWUFBWUEsQ0FBQ2YsR0FBRztjQUNyQixJQUFJO2dCQUNILElBQUksQ0FBQ0UsUUFBUSxHQUFHLElBQUk7Z0JBRXBCLE1BQU1DLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQ1YsS0FBSyxDQUFDc0IsWUFBWSxDQUFDO2tCQUFFWCxFQUFFLEVBQUUsSUFBSSxDQUFDWCxLQUFLLENBQUNXLEVBQUU7a0JBQUVKO2dCQUFHLENBQUUsQ0FBQztnQkFDckUsT0FBT0csR0FBRztlQUNWLENBQUMsT0FBT0ksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTCxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0FmLE9BQUEsQ0FBQVgsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xGRCxJQUFBd0MsTUFBQSxHQUFBaEQsT0FBQTtVQUVBLElBQUFpRCxRQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQWtELE1BQUEsR0FBQWxELE9BQUE7VUFFTSxTQUFVbUQsV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUU3QyxLQUFLO2NBQUU4QztZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNDLE1BQU07Y0FBRTVCO1lBQUssQ0FBRSxHQUFHbkIsS0FBSztZQUN2QixJQUFJLENBQUNtQixLQUFLLENBQUM2QixLQUFLLElBQUksQ0FBQ2hELEtBQUssQ0FBQ2tCLE9BQU8sRUFBRSxPQUFPLElBQUk7WUFDL0MsT0FDQ3dCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNOLE1BQUEsQ0FBQU8sS0FBSztjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxTQUFTLEVBQUM7WUFBOEIsR0FDMURYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ0UsS0FBSyxDQUFDTSxLQUFLLENBQU0sRUFFNUJaLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUF5QixHQUN2Q1gsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXFCLEdBQ25DWCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNFLEtBQUssQ0FBQ08sV0FBVyxDQUFRLEVBQ3RDYixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxlQUFPL0IsS0FBSyxDQUFDNkIsS0FBSyxDQUFDTyxXQUFXLENBQUNDLEtBQUssQ0FBUSxDQUN2QyxFQUNOZCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBcUIsR0FDbkNYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ0UsS0FBSyxDQUFDUyxPQUFPLENBQVEsRUFDbENmLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGVBQU8vQixLQUFLLENBQUM2QixLQUFLLENBQUNTLE9BQU8sQ0FBQ0QsS0FBSyxDQUFRLENBQ25DLENBQ0QsQ0FDQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBZCxNQUFBLEdBQUFoRCxPQUFBO1VBU08sTUFBTWdFLGFBQWEsR0FBQTdDLE9BQUEsQ0FBQTZDLGFBQUEsR0FBR2hCLE1BQUEsQ0FBQU8sT0FBSyxDQUFDVSxhQUFhLENBQUMsRUFBeUIsQ0FBQztVQUNwRSxNQUFNWixnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTCxNQUFBLENBQUFPLE9BQUssQ0FBQ1csVUFBVSxDQUFDRixhQUFhLENBQUM7VUFBQzdDLE9BQUEsQ0FBQWtDLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1Z0RSxJQUFBTCxNQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQW1FLE1BQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBb0UsS0FBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUFxRSxZQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBc0UsV0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUF1RSxHQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLE1BQUEsR0FBQXhFLE9BQUE7VUFFTSxTQUFVeUUsWUFBWUEsQ0FBQztZQUFFQyxJQUFJO1lBQUUvRCxJQUFJO1lBQUVnRSxPQUFPO1lBQUVDLE1BQU0sR0FBRztVQUFRLENBQUU7WUFDdEUsTUFBTTtjQUFFeEIsS0FBSztjQUFFOUM7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTSxDQUFDd0IsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBRzlCLE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM1RCxNQUFNLENBQUN0QyxLQUFLLEVBQUV1QyxRQUFRLENBQUMsR0FBR2hDLE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QyxNQUFNLENBQUNFLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdsQyxNQUFBLENBQUFPLE9BQUssQ0FBQ3dCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkQsSUFBSSxDQUFDcEUsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixNQUFNd0UsUUFBUSxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUM5QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEIsSUFBSTtnQkFDSEgsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDaEIsTUFBTTVFLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ00sT0FBTyxDQUFDO2tCQUFFRSxJQUFJLEVBQUU0QyxZQUFZO2tCQUFFN0MsR0FBRyxFQUFFMEMsSUFBSSxDQUFDMUM7Z0JBQUcsQ0FBRSxDQUFDO2dCQUNoRXdDLE1BQUEsQ0FBQWMsS0FBSyxDQUFDQyxPQUFPLENBQUNuQyxLQUFLLENBQUNvQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDO2dCQUMxQ1osT0FBTyxFQUFFO2VBQ1QsQ0FBQyxPQUFPcEMsQ0FBQyxFQUFFO2dCQUNYeUMsUUFBUSxDQUFDNUIsS0FBSyxDQUFDc0MsTUFBTSxDQUFDbkQsQ0FBQyxDQUFDb0QsSUFBSSxDQUFDQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUN6Q3BELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUNvRCxJQUFJLENBQUM7ZUFDckIsU0FBUztnQkFDVFQsVUFBVSxDQUFDLEtBQUssQ0FBQzs7WUFFbkIsQ0FBQztZQUVELE1BQU1XLE9BQU8sR0FBRyxDQUNmO2NBQUVDLEtBQUssRUFBRSxRQUFRO2NBQUVsQyxLQUFLLEVBQUVSLEtBQUssQ0FBQzJDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQztZQUFLLENBQUUsRUFDcEQ7Y0FBRUgsS0FBSyxFQUFFLFNBQVM7Y0FBRWxDLEtBQUssRUFBRVIsS0FBSyxDQUFDMkMsS0FBSyxDQUFDRyxPQUFPLENBQUNEO1lBQUssQ0FBRSxDQUN0RDtZQUVELE1BQU1FLGdCQUFnQixHQUFHZixLQUFLLElBQUc7Y0FDaENOLGVBQWUsQ0FBQ00sS0FBSyxDQUFDZ0IsTUFBTSxDQUFDTixLQUFLLENBQUM7WUFDcEMsQ0FBQztZQUNELE1BQU1PLFFBQVEsR0FBRyxDQUFDeEIsWUFBWTtZQUM5QixPQUNDN0IsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBbUMsS0FBSztjQUFDM0YsSUFBSTtjQUFDZ0QsU0FBUyxFQUFDLFlBQVk7Y0FBQ2dCLE9BQU8sRUFBRUEsT0FBTztjQUFFNEIsYUFBYSxFQUFFO1lBQUssR0FDeEV2RCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUFvQyxJQUFJO2NBQUNyQixRQUFRLEVBQUVBO1lBQVEsR0FDdkJuQyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYSxHQUMzQlgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDcUQsS0FBSyxDQUFDMUUsT0FBTyxDQUFDa0UsS0FBSyxDQUFNLEVBQ3BDakQsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQUksR0FBRVAsS0FBSyxDQUFDcUQsS0FBSyxDQUFDMUUsT0FBTyxDQUFDMkUsV0FBVyxDQUFRLENBQ3hELEVBQ04xRCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZSxHQUFBLENBQUFvQyxhQUFhO2NBQUNsRSxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUMvQk8sTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsWUFBQSxDQUFBdUMsV0FBVztjQUFDZixPQUFPLEVBQUVBLE9BQU87Y0FBRWdCLFdBQVcsRUFBRXpELEtBQUssQ0FBQzBELElBQUksQ0FBQzdFLElBQUksQ0FBQzRFLFdBQVc7Y0FBRUUsUUFBUSxFQUFFWjtZQUFnQixFQUFJLEVBQ3ZHbkQsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBUUcsU0FBUyxFQUFDO1lBQXNDLEdBQ3ZEWCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxXQUFBLENBQUEwQyxNQUFNO2NBQ05YLFFBQVEsRUFBRUEsUUFBUTtjQUNsQjNDLElBQUksRUFBQyxRQUFRO2NBQ2J1RCxPQUFPLEVBQUMsU0FBUztjQUNqQkMsSUFBSSxFQUFDLFlBQVk7Y0FDakJqQyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJrQyxPQUFPLEVBQUVoQztZQUFRLEdBRWhCL0IsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDckYsT0FBTyxDQUNkLENBQ0QsQ0FDSCxDQUNBO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBLElBQUFpQixNQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQW1FLE1BQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBb0UsS0FBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUFxRSxZQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBc0UsV0FBQSxHQUFBdEUsT0FBQTtVQUVBLElBQUF3RSxNQUFBLEdBQUF4RSxPQUFBO1VBRU0sU0FBVXFILFlBQVlBLENBQUM7WUFBRTNDLElBQUk7WUFBRS9ELElBQUk7WUFBRWdFO1VBQU8sQ0FBRTtZQUNuRCxNQUFNO2NBQUV2QixLQUFLO2NBQUU5QztZQUFLLENBQUUsR0FBRyxJQUFBMkMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUNpRSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHdkUsTUFBQSxDQUFBTyxPQUFLLENBQUN3QixRQUFRLENBQUNMLElBQUksQ0FBQ3pDLElBQUksSUFBSSxTQUFTLENBQUM7WUFDMUUsTUFBTSxDQUFDZ0QsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR2xDLE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxJQUFJLENBQUNwRSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU13RSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzlCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QixJQUFJO2dCQUNISCxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNoQixNQUFNNUUsS0FBSyxDQUFDdUMsVUFBVSxDQUFDO2tCQUFFWixJQUFJLEVBQUVxRixVQUFVO2tCQUFFdEYsR0FBRyxFQUFFMEMsSUFBSSxDQUFDMUM7Z0JBQUcsQ0FBRSxDQUFDO2dCQUMzRHdDLE1BQUEsQ0FBQWMsS0FBSyxDQUFDQyxPQUFPLENBQUNuQyxLQUFLLENBQUNvQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDO2VBQzFDLENBQUMsT0FBT2hELENBQUMsRUFBRTtnQkFDWGlDLE1BQUEsQ0FBQWMsS0FBSyxDQUFDN0MsS0FBSyxDQUFDLHNCQUFzQixDQUFDO2dCQUNuQ0QsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUMkMsVUFBVSxDQUFDLEtBQUssQ0FBQzs7WUFFbkIsQ0FBQztZQUVELE1BQU1XLE9BQU8sR0FBRyxDQUNmO2NBQUVDLEtBQUssRUFBRSxTQUFTO2NBQUVsQyxLQUFLLEVBQUVSLEtBQUssQ0FBQzJDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQztZQUFLLENBQUUsRUFDckQ7Y0FBRUgsS0FBSyxFQUFFLFNBQVM7Y0FBRWxDLEtBQUssRUFBRVIsS0FBSyxDQUFDMkMsS0FBSyxDQUFDRyxPQUFPLENBQUNEO1lBQUssQ0FBRSxDQUN0RDtZQUVELE1BQU1FLGdCQUFnQixHQUFHZixLQUFLLElBQUc7Y0FDaENtQyxhQUFhLENBQUNuQyxLQUFLLENBQUNnQixNQUFNLENBQUNOLEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBQ0QsTUFBTU8sUUFBUSxHQUFHaUIsVUFBVSxLQUFLNUMsSUFBSSxDQUFDekMsSUFBSSxJQUFJZ0QsT0FBTyxJQUFJLENBQUNxQyxVQUFVO1lBQ25FLE9BQ0N0RSxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVyxNQUFBLENBQUFtQyxLQUFLO2NBQUMzRixJQUFJO2NBQUNnRCxTQUFTLEVBQUMsWUFBWTtjQUFDZ0IsT0FBTyxFQUFFQSxPQUFPO2NBQUU0QixhQUFhLEVBQUU7WUFBSyxHQUN4RXZELE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQW9DLElBQUk7Y0FBQ3JCLFFBQVEsRUFBRUE7WUFBUSxHQUN2Qm5DLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFhLEdBQzNCWCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNvRSxRQUFRLENBQUN2QixLQUFLLENBQU0sRUFDL0JqRCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBSSxHQUFFUCxLQUFLLENBQUNvRSxRQUFRLENBQUNDLElBQUksQ0FBUSxDQUM1QyxFQUNOekUsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsWUFBQSxDQUFBdUMsV0FBVztjQUFDZixPQUFPLEVBQUVBLE9BQU87Y0FBRTZCLFlBQVksRUFBRUosVUFBVTtjQUFFUCxRQUFRLEVBQUVaO1lBQWdCLEVBQUksRUFDdkZuRCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRyxTQUFTLEVBQUM7WUFBc0MsR0FDdkRYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNjLFdBQUEsQ0FBQTBDLE1BQU07Y0FDTlgsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCM0MsSUFBSSxFQUFDLFFBQVE7Y0FDYnVELE9BQU8sRUFBQyxTQUFTO2NBQ2pCQyxJQUFJLEVBQUMsWUFBWTtjQUNqQmpDLE9BQU8sRUFBRUEsT0FBTztjQUNoQmtDLE9BQU8sRUFBRWhDO1lBQVEsR0FFaEIvQixLQUFLLENBQUNnRSxPQUFPLENBQUNPLElBQUksQ0FDWCxDQUNELENBQ0gsQ0FDQTtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdEQSxJQUFBM0UsTUFBQSxHQUFBaEQsT0FBQTtVQUNBLElBQUFtRSxNQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQW9FLEtBQUEsR0FBQXBFLE9BQUE7VUFDQSxJQUFBcUUsWUFBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFpRCxRQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQXNFLFdBQUEsR0FBQXRFLE9BQUE7VUFFQSxJQUFBd0UsTUFBQSxHQUFBeEUsT0FBQTtVQUVNLFNBQVU0SCxTQUFTQSxDQUFDO1lBQUVsRCxJQUFJO1lBQUUvRCxJQUFJO1lBQUVnRSxPQUFPO1lBQUUxQyxJQUFJO1lBQUUyQyxNQUFNLEdBQUc7VUFBUSxDQUFFO1lBQ3pFLE1BQU07Y0FBRXhCLEtBQUs7Y0FBRTlDO1lBQUssQ0FBRSxHQUFHLElBQUEyQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQ3dCLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUc5QixNQUFBLENBQUFPLE9BQUssQ0FBQ3dCLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDekMsSUFBSSxJQUFJLFNBQVMsQ0FBQztZQUM5RSxNQUFNLENBQUNnRCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHbEMsTUFBQSxDQUFBTyxPQUFLLENBQUN3QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELElBQUksQ0FBQ3BFLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTXdFLFFBQVEsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDOUJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCLElBQUk7Z0JBQ0hILFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBRWhCLE1BQU01RSxLQUFLLENBQUN1QyxVQUFVLENBQUM7a0JBQUVaLElBQUksRUFBRTRDLFlBQVk7a0JBQUU3QyxHQUFHLEVBQUUwQyxJQUFJLENBQUMxQztnQkFBRyxDQUFFLENBQUM7Z0JBQzdEd0MsTUFBQSxDQUFBYyxLQUFLLENBQUNDLE9BQU8sQ0FBQ25DLEtBQUssQ0FBQ29DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRixPQUFPLENBQUM7ZUFDMUMsQ0FBQyxPQUFPaEQsQ0FBQyxFQUFFO2dCQUNYaUMsTUFBQSxDQUFBYyxLQUFLLENBQUM3QyxLQUFLLENBQUMsc0JBQXNCLENBQUM7Z0JBQ25DRCxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QyQyxVQUFVLENBQUMsS0FBSyxDQUFDOztZQUVuQixDQUFDO1lBRUQsTUFBTVcsT0FBTyxHQUFHLENBQ2Y7Y0FBRUMsS0FBSyxFQUFFLFNBQVM7Y0FBRWxDLEtBQUssRUFBRVIsS0FBSyxDQUFDMkMsS0FBSyxDQUFDQyxNQUFNLENBQUNDO1lBQUssQ0FBRSxFQUNyRDtjQUFFSCxLQUFLLEVBQUUsU0FBUztjQUFFbEMsS0FBSyxFQUFFUixLQUFLLENBQUMyQyxLQUFLLENBQUNHLE9BQU8sQ0FBQ0Q7WUFBSyxDQUFFLENBQ3REO1lBRUQsTUFBTUUsZ0JBQWdCLEdBQUdmLEtBQUssSUFBRztjQUNoQ04sZUFBZSxDQUFDTSxLQUFLLENBQUNnQixNQUFNLENBQUNOLEtBQUssQ0FBQztZQUNwQyxDQUFDO1lBQ0QsTUFBTU8sUUFBUSxHQUFHeEIsWUFBWSxLQUFLSCxJQUFJLENBQUN6QyxJQUFJLElBQUlnRCxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUN2RSxPQUNDN0IsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBbUMsS0FBSztjQUFDM0YsSUFBSTtjQUFDZ0QsU0FBUyxFQUFDLFlBQVk7Y0FBQ2dCLE9BQU8sRUFBRUEsT0FBTztjQUFFNEIsYUFBYSxFQUFFO1lBQUssR0FDeEV2RCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUFvQyxJQUFJO2NBQUNyQixRQUFRLEVBQUVBO1lBQVEsR0FDdkJuQyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYSxHQUMzQlgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDb0UsUUFBUSxDQUFDdkIsS0FBSyxDQUFNLEVBQy9CakQsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQUksR0FBRVAsS0FBSyxDQUFDb0UsUUFBUSxDQUFDQyxJQUFJLENBQVEsQ0FDNUMsRUFDTnpFLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNhLFlBQUEsQ0FBQXVDLFdBQVc7Y0FBQ2QsS0FBSyxFQUFFN0QsSUFBSTtjQUFFNEQsT0FBTyxFQUFFQSxPQUFPO2NBQUVrQixRQUFRLEVBQUVaO1lBQWdCLEVBQUksRUFDMUVuRCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRyxTQUFTLEVBQUM7WUFBc0MsR0FDdkRYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNjLFdBQUEsQ0FBQTBDLE1BQU07Y0FDTlgsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCM0MsSUFBSSxFQUFDLFFBQVE7Y0FDYnVELE9BQU8sRUFBQyxTQUFTO2NBQ2pCQyxJQUFJLEVBQUMsWUFBWTtjQUNqQmpDLE9BQU8sRUFBRUEsT0FBTztjQUNoQmtDLE9BQU8sRUFBRWhDO1lBQVEsR0FFaEIvQixLQUFLLENBQUNnRSxPQUFPLENBQUNPLElBQUksQ0FDWCxDQUNELENBQ0gsQ0FDQTtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlEQSxJQUFBM0UsTUFBQSxHQUFBaEQsT0FBQTtVQUNBLElBQUFvRSxLQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQXdFLE1BQUEsR0FBQXhFLE9BQUE7VUFFQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFzRSxXQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQW1FLE1BQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBcUUsWUFBQSxHQUFBckUsT0FBQTtVQUNNLFNBQVU2SCxjQUFjQSxDQUFDO1lBQUVsSCxJQUFJO1lBQUVnRSxPQUFPO1lBQUUxQztVQUFJLENBQUU7WUFDckQsTUFBTTtjQUFFM0IsS0FBSztjQUFFOEM7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUM0QixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHbEMsTUFBQSxDQUFBTyxPQUFLLENBQUN3QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU0sQ0FBQ3RDLEtBQUssRUFBRXVDLFFBQVEsQ0FBQyxHQUFHaEMsTUFBQSxDQUFBTyxPQUFLLENBQUN3QixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU0rQyxhQUFhLEdBQUc7Y0FDckJDLElBQUksRUFBRSxFQUFFO2NBQ1JuRixLQUFLLEVBQUU7YUFDUDtZQUNELE1BQU0sQ0FBQ0UsTUFBTSxFQUFFa0YsU0FBUyxDQUFDLEdBQUdoRixNQUFBLENBQUFPLE9BQUssQ0FBQ3dCLFFBQVEsQ0FBQytDLGFBQWEsQ0FBQztZQUV6RCxNQUFNRyxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUN4QkQsU0FBUyxDQUFDRixhQUFhLENBQUM7Y0FDeEI5QyxRQUFRLENBQUMsRUFBRSxDQUFDO2NBQ1pFLFVBQVUsQ0FBQyxLQUFLLENBQUM7Y0FDakJQLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxNQUFNUSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzlCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QkgsVUFBVSxDQUFDLElBQUksQ0FBQztjQUVoQixNQUFNZ0QsUUFBUSxHQUFHLE1BQU01SCxLQUFLLENBQUNtQixLQUFLLENBQUNnRSxNQUFNLENBQUM7Z0JBQUUsR0FBRzNDO2NBQU0sQ0FBRSxDQUFDO2NBQ3hELElBQUksQ0FBQ29GLFFBQVEsQ0FBQzdGLE1BQU0sRUFBRTtnQkFDckI7Z0JBQ0FtQyxNQUFBLENBQUFjLEtBQUssQ0FBQ0MsT0FBTyxDQUFDOUMsS0FBSyxDQUFDOztjQUdyQitCLE1BQUEsQ0FBQWMsS0FBSyxDQUFDQyxPQUFPLENBQUNuQyxLQUFLLENBQUNvQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDO2NBQzFDMEMsV0FBVyxFQUFFO1lBQ2QsQ0FBQztZQUVELE1BQU1FLFlBQVksR0FBR0EsQ0FBQztjQUFFQyxhQUFhLEVBQUVoQztZQUFNLENBQUUsS0FBSTtjQUNsRCxNQUFNaUMsWUFBWSxHQUFHO2dCQUFFLEdBQUd2RjtjQUFNLENBQUU7Y0FFbEN1RixZQUFZLENBQUNqQyxNQUFNLENBQUMyQixJQUFJLENBQUMsR0FBRzNCLE1BQU0sQ0FBQ04sS0FBSztjQUN4Q2tDLFNBQVMsQ0FBQ0ssWUFBWSxDQUFDO2NBQ3ZCckQsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxJQUFJLENBQUNyRSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1rRixPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUN5QyxHQUFHLENBQUM1RCxJQUFJLEtBQUs7Y0FBRW9CLEtBQUssRUFBRXBCLElBQUk7Y0FBRWQsS0FBSyxFQUFFUixLQUFLLENBQUMyQyxLQUFLLENBQUNyQixJQUFJLENBQUMsQ0FBQ3VCO1lBQUssQ0FBRSxDQUFDLENBQUM7WUFDcEcsTUFBTTtjQUFFOEIsSUFBSTtjQUFFbkY7WUFBSyxDQUFFLEdBQUdFLE1BQU07WUFFOUIsT0FDQ0UsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBbUMsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFNUYsSUFBSTtjQUFDZ0QsU0FBUyxFQUFDLFlBQVk7Y0FBQ2dCLE9BQU8sRUFBRXNEO1lBQVcsR0FDNUVqRixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRyxTQUFTLEVBQUM7WUFBb0IsR0FDckNYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQzBELElBQUksQ0FBQ2IsS0FBSyxDQUFNLENBQ25CLEVBQ1RqRCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxZQUFBLENBQUF1QyxXQUFXO2NBQ1htQixJQUFJLEVBQUMsTUFBTTtjQUNYbEIsV0FBVyxFQUFFekQsS0FBSyxDQUFDMEQsSUFBSSxDQUFDN0UsSUFBSSxDQUFDNEUsV0FBVztjQUN4Q2hCLE9BQU8sRUFBRUEsT0FBTztjQUNoQmtCLFFBQVEsRUFBRW9CO1lBQVksRUFDckIsRUFDRm5GLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQW9DLElBQUk7Y0FBQzdDLFNBQVMsRUFBQyxPQUFPO2NBQUN3QixRQUFRLEVBQUVBO1lBQVEsR0FDekNuQyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUFtRSxLQUFLO2NBQ0wzRSxLQUFLLEVBQUVSLEtBQUssQ0FBQzBELElBQUksQ0FBQ2lCLElBQUksQ0FBQ25FLEtBQUs7Y0FDNUJGLElBQUksRUFBQyxNQUFNO2NBQ1hxRSxJQUFJLEVBQUMsTUFBTTtjQUNYakMsS0FBSyxFQUFFaUMsSUFBSTtjQUNYZCxPQUFPLEVBQUMsVUFBVTtjQUNsQkYsUUFBUSxFQUFFb0IsWUFBWTtjQUN0QnRCLFdBQVcsRUFBRXpELEtBQUssQ0FBQzBELElBQUksQ0FBQ2lCLElBQUksQ0FBQ2xCLFdBQVc7Y0FDeEMyQixRQUFRO1lBQUEsRUFDUCxFQUNGeEYsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBbUUsS0FBSztjQUNMMUIsV0FBVyxFQUFFekQsS0FBSyxDQUFDMEQsSUFBSSxDQUFDbEUsS0FBSyxDQUFDaUUsV0FBVztjQUN6Q2pELEtBQUssRUFBRVIsS0FBSyxDQUFDMEQsSUFBSSxDQUFDbEUsS0FBSyxDQUFDZ0IsS0FBSztjQUM3QkYsSUFBSSxFQUFDLE9BQU87Y0FDWnVELE9BQU8sRUFBQyxVQUFVO2NBQ2xCYyxJQUFJLEVBQUMsT0FBTztjQUNaaEIsUUFBUSxFQUFFb0IsWUFBWTtjQUN0QkssUUFBUTtZQUFBLEVBQ1AsRUFDRnhGLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFzQyxHQUNwRFgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsV0FBQSxDQUFBMEMsTUFBTTtjQUFDdEQsSUFBSSxFQUFDLFFBQVE7Y0FBQ3VELE9BQU8sRUFBQyxTQUFTO2NBQUNoQyxPQUFPLEVBQUVBLE9BQU87Y0FBRXJCLEtBQUssRUFBRVIsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDM0I7WUFBTSxFQUFJLENBQ3BGLENBQ0EsQ0FDQTtVQUVWOzs7Ozs7Ozs7OztVQ3hGQTs7VUFFQWdELE1BQUEsQ0FBQUMsY0FBQSxDQUFBdkgsT0FBQTtZQUNBMkUsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUE5QyxNQUFBLEdBQUFoRCxPQUFBO1VBRUEsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBMkksTUFBQSxHQUFBM0ksT0FBQTtVQUNBLElBQUF3RSxNQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQTRJLE9BQUEsR0FBQTVJLE9BQUE7VUFDTSxTQUFVNkksV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUV2SSxLQUFLO2NBQUU4QztZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNDLE1BQU07Y0FBRXNDO1lBQUksQ0FBRSxHQUFHckYsS0FBSyxDQUFDbUIsS0FBSyxDQUFDcUgsU0FBUztZQUV0QyxNQUFNQyxlQUFlLEdBQUcsTUFBTTNELEtBQUssSUFBRztjQUNyQyxJQUFJO2dCQUNIQSxLQUFLLENBQUM0RCxlQUFlLEVBQUU7Z0JBQ3ZCLE1BQU1DLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUMsR0FBR1AsT0FBQSxDQUFBckYsT0FBTSxDQUFDNkYsTUFBTSxDQUFDQyxPQUFPLHlCQUF5QjFELElBQUksRUFBRSxDQUFDO2dCQUM1Rm5CLE1BQUEsQ0FBQWMsS0FBSyxDQUFDQyxPQUFPLENBQUNuQyxLQUFLLENBQUNrRyxRQUFRLENBQUNDLElBQUksQ0FBQztlQUNsQyxDQUFDLE9BQU9DLEdBQUcsRUFBRTtnQkFDYmhILE9BQU8sQ0FBQ0MsS0FBSyxDQUFDVyxLQUFLLENBQUNxRyxTQUFTLEVBQUVELEdBQUcsQ0FBQzs7WUFFckMsQ0FBQztZQUVELE9BQ0N4RyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBdUIsR0FDckNYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFjLEdBQ2hDWCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBYSxHQUFFUCxLQUFLLENBQUNzRyxPQUFPLENBQVEsRUFDcEQxRyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBWSxHQUFFZ0MsSUFBSSxDQUFRLENBQ2pDLEVBQ1YzQyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUYsTUFBQSxDQUFBZ0IsVUFBVTtjQUFBLGFBQ0NySixLQUFLLENBQUNtQixLQUFLLENBQUNxSCxTQUFTLEVBQUVuRCxJQUFJO2NBQ3RDTSxLQUFLLEVBQUU3QyxLQUFLLENBQUNnRSxPQUFPLENBQUNtQyxJQUFJO2NBQ3pCNUYsU0FBUyxFQUFDLGNBQWM7Y0FDeEJ1RCxJQUFJLEVBQUMsTUFBTTtjQUNYYixRQUFRLEVBQUUsQ0FBQy9GLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ3FILFNBQVMsRUFBRW5ELElBQUk7Y0FDdEN3QixPQUFPLEVBQUU0QjtZQUFlLEVBQ3ZCLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0EsSUFBQS9GLE1BQUEsR0FBQWhELE9BQUE7VUFFQSxJQUFBdUUsR0FBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFpRCxRQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQTRKLFlBQUEsR0FBQTVKLE9BQUE7VUFFQSxJQUFBMkksTUFBQSxHQUFBM0ksT0FBQTtVQUNBLElBQUE2SixRQUFBLEdBQUE3SixPQUFBO1VBTkE7O1VBSUE7O1VBS00sU0FBVThKLGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUFFeEo7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTThELE9BQU8sR0FBR0EsQ0FBQSxLQUFNMEMsUUFBQSxDQUFBRSxPQUFPLENBQUNDLFNBQVMsQ0FBQyw2QkFBNkIxSixLQUFLLENBQUNtQixLQUFLLENBQUNXLEVBQUUsRUFBRSxDQUFDO1lBRXRGLE9BQ0NZLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUE2QixHQUM5Q1gsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXFDLEdBQ25EWCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZSxHQUFBLENBQUEwRixXQUFXO2NBQUNDLEdBQUcsRUFBRTVKLEtBQUssQ0FBQ21CLEtBQUssQ0FBQzBJLE9BQU87Y0FBRUMsTUFBTSxFQUFDO1lBQWEsRUFBRyxFQUM5RHBILE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGVBQ0NSLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGFBQUtsRCxLQUFLLENBQUNtQixLQUFLLENBQUNzRyxJQUFJLENBQU0sQ0FDckIsQ0FDRixFQUNOL0UsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ21GLE1BQUEsQ0FBQTBCLGFBQWE7Y0FBQzFHLFNBQVMsRUFBQyx5QkFBeUI7Y0FBQ3VELElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRUE7WUFBTyxFQUFJLEVBQ25GbkUsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ29HLFlBQUEsQ0FBQWYsV0FBVyxPQUFHLENBQ1A7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkEsSUFBQTdGLE1BQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBdUUsR0FBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFpRCxRQUFBLEdBQUFqRCxPQUFBO1VBRUEsSUFBQXNLLE1BQUEsR0FBQXRLLE9BQUE7VUFFQSxJQUFBdUssT0FBQSxHQUFBdkssT0FBQTtVQUNBLElBQUF3SyxLQUFBLEdBQUF4SyxPQUFBO1VBRU87VUFBVSxTQUNSVSxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDbUssS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRzFILE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDekUsS0FBSyxDQUFDbUssS0FBSyxDQUFDO1lBQ3JELE1BQU07Y0FBRXJIO1lBQUssQ0FBRSxHQUFHOUMsS0FBSztZQUV2QixJQUFBZ0ssTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQ3JLLEtBQUssQ0FBQyxFQUFFLE1BQU1vSyxRQUFRLENBQUNwSyxLQUFLLENBQUNtSyxLQUFLLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPekgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2UsR0FBQSxDQUFBcUcsVUFBVTtjQUFDMUksUUFBUSxFQUFFO1lBQUksRUFBSTtZQUVqRCxJQUFJNUIsS0FBSyxDQUFDbUIsS0FBSyxDQUFDb0osS0FBSyxJQUFJLENBQUN2SyxLQUFLLENBQUNtQixLQUFLLENBQUNxSixTQUFTLEVBQUU7Y0FDaEQsT0FBTzlILE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLHlCQUFtQjs7WUFHM0IsSUFBSSxDQUFDbEQsS0FBSyxDQUFDbUIsS0FBSyxDQUFDb0osS0FBSyxFQUFFLE9BQU83SCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSw2QkFBdUI7WUFFdEQsTUFBTXNDLEtBQUssR0FBRztjQUFFeEYsS0FBSztjQUFFNEIsUUFBUSxFQUFFNUIsS0FBSyxDQUFDNEIsUUFBUTtjQUFFa0I7WUFBSyxDQUFFO1lBRXhELE9BQ0NKLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNQLFFBQUEsQ0FBQWUsYUFBYSxDQUFDK0csUUFBUTtjQUFDakYsS0FBSyxFQUFFQTtZQUFLLEdBQ25DOUMsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2UsR0FBQSxDQUFBeUcsYUFBYTtjQUFDckgsU0FBUyxFQUFDLDZCQUE2QjtjQUFDekIsUUFBUSxFQUFFNUIsS0FBSyxDQUFDNEI7WUFBUSxHQUM5RWMsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQytHLE9BQUEsQ0FBQVQsZUFBZSxPQUFHLEVBQ25COUcsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dILEtBQUEsQ0FBQVMsT0FBTyxPQUFHLENBQ0ksQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQWpJLE1BQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBdUUsR0FBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFpRCxRQUFBLEdBQUFqRCxPQUFBO1VBRU0sU0FBVWtMLFNBQVNBLENBQUNqSixJQUFJO1lBQzdCLElBQUk7Y0FBRW1CO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFbENELEtBQUssR0FBR25CLElBQUksS0FBSyxTQUFTLEdBQUdtQixLQUFLLENBQUMrSCxLQUFLLENBQUNDLE9BQU8sR0FBR2hJLEtBQUssQ0FBQytILEtBQUssQ0FBQ0UsR0FBRztZQUNsRSxPQUFPckksTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2UsR0FBQSxDQUFBK0csU0FBUztjQUFDQyxJQUFJLEVBQUVuSSxLQUFLLENBQUM2QyxLQUFLO2NBQUVpQixJQUFJLEVBQUM7WUFBTSxFQUFHO1VBQ3BEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUFsRSxNQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQXNFLFdBQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUVBLElBQUFxRSxZQUFBLEdBQUFyRSxPQUFBO1VBRU0sU0FBVXdMLE9BQU9BLENBQUM7WUFBRUMsUUFBUTtZQUFFQztVQUFXLENBQUU7WUFDaEQsTUFBTTtjQUFFdEksS0FBSztjQUFFOUM7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTBELFFBQVEsR0FBRzNCLEtBQUssSUFBRztjQUN4QixNQUFNO2dCQUFFVTtjQUFLLENBQUUsR0FBR1YsS0FBSyxDQUFDZ0QsYUFBYTtjQUVyQ3NELFdBQVcsQ0FBQzVGLEtBQUssS0FBSyxLQUFLLEdBQUcsa0JBQWtCLEdBQUdBLEtBQUssQ0FBQztZQUMxRCxDQUFDO1lBRUQsTUFBTTZGLElBQUksR0FBRyxJQUFBckgsV0FBQSxDQUFBc0gsYUFBYSxHQUFFO1lBQzVCLElBQUlELElBQUksS0FBSyxJQUFJLEVBQUU7Y0FDbEIsTUFBTTlGLE9BQU8sR0FBRzRDLE1BQU0sQ0FBQ29ELElBQUksQ0FBQ3pJLEtBQUssQ0FBQzJDLEtBQUssQ0FBQyxDQUFDdUMsR0FBRyxDQUFDNUQsSUFBSSxJQUFHO2dCQUNuRCxPQUFPO2tCQUFFb0IsS0FBSyxFQUFFMUMsS0FBSyxDQUFDMkMsS0FBSyxDQUFDckIsSUFBSSxDQUFDLENBQUNvSCxVQUFVO2tCQUFFbEksS0FBSyxFQUFFUixLQUFLLENBQUMyQyxLQUFLLENBQUNyQixJQUFJLENBQUMsQ0FBQzBGO2dCQUFNLENBQUU7Y0FDaEYsQ0FBQyxDQUFDO2NBQ0YsT0FBT3BILE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNhLFlBQUEsQ0FBQXVDLFdBQVc7Z0JBQUNkLEtBQUssRUFBRTJGLFFBQVE7Z0JBQUUxRCxJQUFJLEVBQUMsT0FBTztnQkFBQ2xDLE9BQU8sRUFBRUEsT0FBTztnQkFBRWtCLFFBQVEsRUFBRUE7Y0FBUSxFQUFJOztZQUUzRixNQUFNbEIsT0FBTyxHQUFHNEMsTUFBTSxDQUFDb0QsSUFBSSxDQUFDekksS0FBSyxDQUFDMkMsS0FBSyxDQUFDLENBQUN1QyxHQUFHLENBQUM1RCxJQUFJLElBQUc7Y0FDbkQsTUFBTXFILEtBQUssR0FBR3pMLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ3VLLFFBQVEsQ0FBQ0MsTUFBTTtjQUV6QyxPQUNDakosTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsV0FBQSxDQUFBMEMsTUFBTTtnQkFBQ0MsT0FBTyxFQUFDLFNBQVM7Z0JBQUNpRixHQUFHLEVBQUV4SCxJQUFJO2dCQUFFb0IsS0FBSyxFQUFFMUMsS0FBSyxDQUFDMkMsS0FBSyxDQUFDckIsSUFBSSxDQUFDLENBQUNvSDtjQUFVLEdBQ3ZFOUksTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsY0FDRUosS0FBSyxDQUFDMkMsS0FBSyxDQUFDckIsSUFBSSxDQUFDLENBQUMwRixNQUFNLEVBRXhCMUYsSUFBSSxLQUFLLFNBQVMsSUFBSXFILEtBQUssR0FBRyxDQUFDLElBQy9CL0ksTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Z0JBQUdHLFNBQVMsRUFBQztjQUFxQixHQUFFckQsS0FBSyxDQUFDbUIsS0FBSyxDQUFDdUssUUFBUSxDQUFDQyxNQUFNLENBQy9ELENBQ0ksQ0FDRTtZQUVYLENBQUMsQ0FBQztZQUVGLE9BQ0NqSixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxXQUFBLENBQUE2SCxXQUFXO2NBQUNwRixRQUFRLEVBQUVBLFFBQVE7Y0FBRTBFLFFBQVEsRUFBRSxDQUFDO2NBQUVXLFdBQVcsRUFBQyxRQUFRO2NBQUNULElBQUksRUFBQyxNQUFNO2NBQUMxRSxPQUFPLEVBQUM7WUFBUyxHQUM5RnBCLE9BQU8sQ0FDSztVQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0EsSUFBQTdDLE1BQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFxTSxLQUFBLEdBQUFyTSxPQUFBO1VBQ0EsSUFBQXdLLEtBQUEsR0FBQXhLLE9BQUE7VUFDQSxJQUFBc0UsV0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUFzTSxNQUFBLEdBQUF0TSxPQUFBO1VBQ0EsSUFBQXVNLE9BQUEsR0FBQXZNLE9BQUE7VUFDQSxJQUFBc0ssTUFBQSxHQUFBdEssT0FBQTtVQUNBLElBQUF3TSxRQUFBLEdBQUF4TSxPQUFBO1VBRU0sU0FBVWlMLE9BQU9BLENBQUE7WUFDdEIsTUFBTTtjQUFFN0gsS0FBSztjQUFFOUM7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTSxDQUFDb0ksUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzFJLE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQ2xFLE1BQU0sQ0FBQ3BFLElBQUksRUFBRThMLE9BQU8sQ0FBQyxHQUFHekosTUFBQSxDQUFBTyxPQUFLLENBQUN3QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU0ySCxXQUFXLEdBQUdBLENBQUEsS0FBTUQsT0FBTyxDQUFDLENBQUM5TCxJQUFJLENBQUM7WUFDeEMsTUFBTSxDQUFDZ00sT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzVKLE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDOEgsV0FBVyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztZQUUvREMsVUFBVSxDQUFDdEwsS0FBSyxHQUFHbkIsS0FBSyxDQUFDbUIsS0FBSztZQUM5QixNQUFNdUwsSUFBSSxHQUFHMU0sS0FBSyxDQUFDbUIsS0FBSyxDQUFDZ0ssUUFBUSxDQUFDO1lBRWxDLElBQUFuQixNQUFBLENBQUFLLFNBQVMsRUFBQyxDQUFDckssS0FBSyxDQUFDbUIsS0FBSyxDQUFDLEVBQUUsTUFBTW1MLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRTdELE9BQ0M5SixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFBUixNQUFBLENBQUFPLE9BQUEsQ0FBQTBKLFFBQUEsUUFDQ2pLLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFtQyxHQUNqRFgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dKLFFBQUEsQ0FBQWhCLE9BQU87Y0FBQ0MsUUFBUSxFQUFFQSxRQUFRO2NBQUVDLFdBQVcsRUFBRUE7WUFBVyxFQUFJLEUsS0FDeERwTCxLQUFLLENBQUNrQixPQUFPLElBQ2J3QixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxXQUFBLENBQUEwQyxNQUFNO2NBQUNFLElBQUksRUFBQyxLQUFLO2NBQUN0RCxLQUFLLEVBQUVSLEtBQUssQ0FBQ2dFLE9BQU8sQ0FBQzNCLE1BQU07Y0FBRTlCLFNBQVMsRUFBQyxLQUFLO2NBQUN3RCxPQUFPLEVBQUV1RjtZQUFXLEVBQ3BGLENBQ0ksRUFFTE0sSUFBSSxDQUFDZixNQUFNLEtBQUssQ0FBQyxHQUNqQmpKLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUM4SSxNQUFBLENBQUFwQixTQUFTO2NBQUNqSixJQUFJLEVBQUV3SjtZQUFRLEVBQUksR0FFN0J6SSxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0gsS0FBQSxDQUFBMEMsSUFBSTtjQUFDdkosU0FBUyxFQUFDLHdCQUF3QjtjQUFDd0osS0FBSyxFQUFFSCxJQUFJO2NBQUVJLE9BQU8sRUFBRWYsS0FBQSxDQUFBZ0I7WUFBSSxFQUNuRSxFQUNEckssTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQytJLE9BQUEsQ0FBQTFFLGNBQWM7Y0FBQ2xILElBQUksRUFBRUEsSUFBSTtjQUFFZ0UsT0FBTyxFQUFFK0gsV0FBVztjQUFFekssSUFBSSxFQUFFd0o7WUFBUSxFQUFJLENBQ2xFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUF6SSxNQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQTJJLE1BQUEsR0FBQTNJLE9BQUE7VUFDQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUNBLElBQUFzTixRQUFBLEdBQUF0TixPQUFBO1VBQ0EsSUFBQW1FLE1BQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBdU4sUUFBQSxHQUFBdk4sT0FBQTtVQUVNLFNBQVV3TixXQUFXQSxDQUFDO1lBQUU5STtVQUFJLENBQWlCO1lBQ2xELE1BQU07Y0FBRXRCLEtBQUs7Y0FBRTlDO1lBQUssQ0FBRSxHQUFHLElBQUEyQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQzFDLElBQUksRUFBRThMLE9BQU8sQ0FBQyxHQUFHekosTUFBQSxDQUFBTyxPQUFLLENBQUN3QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU0sQ0FBQzBJLGVBQWUsRUFBRUMsa0JBQWtCLENBQUMsR0FBRzFLLE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRSxNQUFNMkgsV0FBVyxHQUFHQSxDQUFBLEtBQU1ELE9BQU8sQ0FBQyxDQUFDOUwsSUFBSSxDQUFDO1lBQ3hDLE1BQU1nTixpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNRCxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFlLENBQUM7WUFDcEUsTUFBTUcsUUFBUSxHQUFHQSxDQUFBLEtBQU10TixLQUFLLENBQUN5QyxZQUFZLENBQUMyQixJQUFJLENBQUMxQyxHQUFHLENBQUM7WUFFbkQsSUFBSSxDQUFDMUIsS0FBSyxDQUFDbUIsS0FBSyxDQUFDRCxPQUFPLElBQUlrRCxJQUFJLENBQUN0QyxFQUFFLEtBQUttTCxRQUFBLENBQUFNLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDMUwsRUFBRSxFQUFFLE9BQU8sSUFBSTtZQUUzRSxPQUNDWSxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFBUixNQUFBLENBQUFPLE9BQUEsQ0FBQTBKLFFBQUEsUUFDQ2pLLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFjLEdBU2hDWCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUYsTUFBQSxDQUFBMEIsYUFBYTtjQUNicEUsS0FBSyxFQUFFN0MsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDMkcsTUFBTTtjQUMzQjVHLE9BQU8sRUFBRXdHLGlCQUFpQjtjQUMxQnpHLElBQUksRUFBQyxRQUFRO2NBQ2JELE9BQU8sRUFBQyxTQUFTO2NBQ2pCK0csTUFBTSxFQUFDLElBQUk7Y0FDWHJLLFNBQVMsRUFBQztZQUFRLEVBQ2pCLENBQ08sRUFDVGhELElBQUksSUFBSXFDLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUM4SixRQUFBLENBQUExRixTQUFTO2NBQUNsRCxJQUFJLEVBQUVBLElBQUk7Y0FBRS9ELElBQUksRUFBRUEsSUFBSTtjQUFFZ0UsT0FBTyxFQUFFK0gsV0FBVztjQUFFekssSUFBSSxFQUFFeUMsSUFBSSxDQUFDekM7WUFBSSxFQUFJLEVBQ3BGd0wsZUFBZSxJQUNmekssTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0QsWUFBWTtjQUNacEIsS0FBSyxFQUFFN0MsS0FBSyxDQUFDcUQsS0FBSyxDQUFDc0gsTUFBTSxDQUFDOUgsS0FBSztjQUMvQnRGLElBQUk7Y0FDSnNOLFNBQVMsRUFBRUwsUUFBUTtjQUNuQnhHLE9BQU8sRUFBRTtnQkFDUjhHLE9BQU8sRUFBRTtrQkFDUnRLLEtBQUssRUFBRVIsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDOEcsT0FBTztrQkFDNUIvRyxPQUFPLEVBQUV5RyxRQUFRO2tCQUNqQmpLLFNBQVMsRUFBRTtpQkFDWDtnQkFDRHdLLE1BQU0sRUFBRTtrQkFDUHZLLEtBQUssRUFBRVIsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDK0csTUFBTTtrQkFDM0JoSCxPQUFPLEVBQUVBLENBQUEsS0FBTXVHLGtCQUFrQixDQUFDLEtBQUssQ0FBQztrQkFDeEMvSixTQUFTLEVBQUU7OztZQUVaLEdBRURYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ3FELEtBQUssQ0FBQ3NILE1BQU0sQ0FBQ3JILFdBQVcsQ0FBUSxDQUU5QyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUExRCxNQUFBLEdBQUFoRCxPQUFBO1VBRU0sU0FBVW9PLGFBQWFBLENBQUM7WUFBRTFKO1VBQUksQ0FBaUI7WUFDcEQsTUFBTSxDQUFDMkosSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR3RMLE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxPQUFPL0IsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQVIsTUFBQSxDQUFBTyxPQUFBLENBQUEwSixRQUFBLE9BQUs7VUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMQSxJQUFBakssTUFBQSxHQUFBaEQsT0FBQTtVQUNBLElBQUF1TyxNQUFBLEdBQUF2TyxPQUFBO1VBRUEsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBd08sUUFBQSxHQUFBeE8sT0FBQTtVQUNBLElBQUF5TyxRQUFBLEdBQUF6TyxPQUFBO1VBQ0EsSUFBQTBPLFFBQUEsR0FBQTFPLE9BQUE7VUFDQTtVQUVNLFNBQVVxTixJQUFJQSxDQUFDO1lBQUUzSTtVQUFJLENBQWlCO1lBQzNDLE1BQU07Y0FBRXRCO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFcEMsSUFBSXFCLElBQUksQ0FBQ2lLLE9BQU8sRUFBRSxPQUFPM0wsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dMLFFBQUEsQ0FBQUksV0FBVztjQUFDbEssSUFBSSxFQUFFQTtZQUFJLEVBQUk7WUFDcEQsSUFBSUEsSUFBSSxDQUFDbUssVUFBVSxLQUFLLEtBQUssRUFBRSxPQUFPN0wsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lMLFFBQUEsQ0FBQUssV0FBVztjQUFDcEssSUFBSSxFQUFFQTtZQUFJLEVBQUk7WUFFakUsTUFBTXpDLElBQUksR0FBR3lDLElBQUksQ0FBQ3pDLElBQUksSUFBSSxRQUFRO1lBRWxDLE9BQ0NlLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUlHLFNBQVMsRUFBQztZQUF3QixHQUNyQ1gsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9CLEdBQ2xDWCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0ssTUFBQSxDQUFBUSxLQUFLO2NBQUNwTCxTQUFTLEVBQUMsV0FBVztjQUFDdUcsR0FBRyxFQUFFeEYsSUFBSSxFQUFFc0s7WUFBUSxFQUFJLEVBQ3BEaE0sTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQUksR0FBRWUsSUFBSSxDQUFDcUQsSUFBSSxDQUFRLENBQ2xDLEVBQ04vRSxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBTSxHQUFFUCxLQUFLLENBQUMyQyxLQUFLLENBQUM5RCxJQUFJLENBQUMsRUFBRWdFLEtBQUssQ0FBUSxFQUN4RGpELE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNrTCxRQUFBLENBQUFsQixXQUFXO2NBQUM5SSxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUN2QjtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBMUIsTUFBQSxHQUFBaEQsT0FBQTtVQUNBLElBQUF1TyxNQUFBLEdBQUF2TyxPQUFBO1VBRUEsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBbUUsTUFBQSxHQUFBbkUsT0FBQTtVQUVBLElBQUFzRSxXQUFBLEdBQUF0RSxPQUFBO1VBQ0EsSUFBQWlQLGFBQUEsR0FBQWpQLE9BQUE7VUFGQTs7VUFJTSxTQUFVNE8sV0FBV0EsQ0FBQztZQUFFbEs7VUFBSSxDQUFpQjtZQUNsRCxNQUFNO2NBQUV0QixLQUFLO2NBQUU5QztZQUFLLENBQUUsR0FBRyxJQUFBMkMsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUM2TCxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHbk0sTUFBQSxDQUFBTyxPQUFLLENBQUN3QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0ySCxXQUFXLEdBQUdBLENBQUEsS0FBTXlDLFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7WUFDNUMsTUFBTXRCLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsTUFBTXROLEtBQUssQ0FBQ3FDLGdCQUFnQixDQUFDK0IsSUFBSSxDQUFDOUIsS0FBSyxDQUFDO2NBQ3hDOEosV0FBVyxFQUFFO1lBQ2QsQ0FBQztZQUNELE9BQ0MxSixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUwsYUFBQSxDQUFBRyxNQUFNLENBQUNDLEVBQUU7Y0FBQzFMLFNBQVMsRUFBQztZQUF3QixHQUM1Q1gsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9CLEdBQ2xDWCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0ssTUFBQSxDQUFBUSxLQUFLO2NBQUNwTCxTQUFTLEVBQUMsV0FBVztjQUFDdUcsR0FBRyxFQUFFeEYsSUFBSSxFQUFFc0s7WUFBUSxFQUFJLEVBQ3BEaE0sTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsY0FDQ1IsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQVcsR0FBRWUsSUFBSSxDQUFDcUQsSUFBSSxDQUFRLEVBQzlDL0UsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQVksR0FBRWUsSUFBSSxDQUFDOUIsS0FBSyxDQUFRLENBQzNDLENBQ0QsRUFDTkksTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWMsR0FDNUJYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNjLFdBQUEsQ0FBQTBDLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFdUY7WUFBVyxHQUM1Q3RKLEtBQUssQ0FBQ2dFLE9BQU8sQ0FBQytHLE1BQU0sQ0FDYixDQUNKLEVBQ0xlLE1BQU0sSUFDTmxNLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQWtELFlBQVk7Y0FDWnBCLEtBQUssRUFBRTdDLEtBQUssQ0FBQ3FELEtBQUssQ0FBQzBILE1BQU0sQ0FBQ2xJLEtBQUs7Y0FDL0J0RixJQUFJO2NBQ0pzTixTQUFTLEVBQUVMLFFBQVE7Y0FDbkJ4RyxPQUFPLEVBQUU7Z0JBQ1I4RyxPQUFPLEVBQUU7a0JBQ1J0SyxLQUFLLEVBQUVSLEtBQUssQ0FBQ2dFLE9BQU8sQ0FBQzhHLE9BQU87a0JBQzVCL0csT0FBTyxFQUFFeUcsUUFBUTtrQkFDakJqSyxTQUFTLEVBQUU7aUJBQ1g7Z0JBQ0R3SyxNQUFNLEVBQUU7a0JBQ1B2SyxLQUFLLEVBQUVSLEtBQUssQ0FBQ2dFLE9BQU8sQ0FBQytHLE1BQU07a0JBQzNCaEgsT0FBTyxFQUFFdUYsV0FBVztrQkFDcEIvSSxTQUFTLEVBQUU7OztZQUVaLEdBRURYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ3FELEtBQUssQ0FBQzBILE1BQU0sQ0FBQ3pILFdBQVcsQ0FBUSxDQUU5QyxDQUNVO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBLElBQUExRCxNQUFBLEdBQUFoRCxPQUFBO1VBR0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFFQSxJQUFBbUUsTUFBQSxHQUFBbkUsT0FBQTtVQUNBLElBQUFzRSxXQUFBLEdBQUF0RSxPQUFBO1VBRkE7O1VBSU0sU0FBVXNQLGFBQWFBLENBQUM7WUFBRTVLO1VBQUksQ0FBaUI7WUFDcEQsTUFBTTtjQUFFdEIsS0FBSztjQUFFOUM7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTSxDQUFDNkwsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR25NLE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNMkgsV0FBVyxHQUFHQSxDQUFBLEtBQU15QyxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO1lBQzVDLE1BQU10QixRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLElBQUlsSixJQUFJLENBQUNpSyxPQUFPLEVBQUU7Z0JBQ2pCLE1BQU1yTyxLQUFLLENBQUNtQixLQUFLLENBQUNrQixnQkFBZ0IsQ0FBQztrQkFBRUMsS0FBSyxFQUFFOEIsSUFBSSxDQUFDOUI7Z0JBQUssQ0FBRSxDQUFDO2VBQ3pELE1BQU07Z0JBQ04sTUFBTXRDLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ2lCLE1BQU0sQ0FBQztrQkFBRVYsR0FBRyxFQUFFMEMsSUFBSSxDQUFDdEM7Z0JBQUUsQ0FBRSxDQUFDOztjQUczQ3NLLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFFRCxPQUNDMUosTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQVIsTUFBQSxDQUFBTyxPQUFBLENBQUEwSixRQUFBLFFBQ0NqSyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxXQUFBLENBQUEwQyxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNFLE9BQU8sRUFBRXVGO1lBQVcsR0FDNUN0SixLQUFLLENBQUNnRSxPQUFPLENBQUMxRSxNQUFNLENBQ2IsRUFDUndNLE1BQU0sSUFDTmxNLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNXLE1BQUEsQ0FBQWtELFlBQVk7Y0FDWnBCLEtBQUssRUFBRTdDLEtBQUssQ0FBQ3FELEtBQUssQ0FBQzBILE1BQU0sQ0FBQ2xJLEtBQUs7Y0FDL0J0RixJQUFJO2NBQ0pzTixTQUFTLEVBQUVMLFFBQVE7Y0FDbkJ4RyxPQUFPLEVBQUU7Z0JBQ1I4RyxPQUFPLEVBQUU7a0JBQ1J0SyxLQUFLLEVBQUVSLEtBQUssQ0FBQ2dFLE9BQU8sQ0FBQzhHLE9BQU87a0JBQzVCL0csT0FBTyxFQUFFeUcsUUFBUTtrQkFDakJqSyxTQUFTLEVBQUU7aUJBQ1g7Z0JBQ0R3SyxNQUFNLEVBQUU7a0JBQ1B2SyxLQUFLLEVBQUVSLEtBQUssQ0FBQ2dFLE9BQU8sQ0FBQytHLE1BQU07a0JBQzNCaEgsT0FBTyxFQUFFdUYsV0FBVztrQkFDcEIvSSxTQUFTLEVBQUU7OztZQUVaLEdBRURYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGVBQU9KLEtBQUssQ0FBQ3FELEtBQUssQ0FBQzBILE1BQU0sQ0FBQ3pILFdBQVcsQ0FBUSxDQUU5QyxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUExRCxNQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQWlELFFBQUEsR0FBQWpELE9BQUE7VUFFQSxJQUFBc0UsV0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUF1UCxRQUFBLEdBQUF2UCxPQUFBO1VBRkE7O1VBSU0sU0FBVXdQLGNBQWNBLENBQUM7WUFBRTlLO1VBQUksQ0FBaUI7WUFDckQsTUFBTTtjQUFFdEIsS0FBSztjQUFFOUM7WUFBSyxDQUFFLEdBQUcsSUFBQTJDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTSxDQUFDNkwsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR25NLE1BQUEsQ0FBQU8sT0FBSyxDQUFDd0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNMkgsV0FBVyxHQUFHQSxDQUFBLEtBQU15QyxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO1lBQzVDLE1BQU10QixRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLE1BQU10TixLQUFLLENBQUNxQyxnQkFBZ0IsQ0FBQytCLElBQUksQ0FBQzlCLEtBQUssQ0FBQztjQUN4QzhKLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFFRCxPQUNDMUosTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQVIsTUFBQSxDQUFBTyxPQUFBLENBQUEwSixRQUFBLFFBQ0NqSyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxXQUFBLENBQUEwQyxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNFLE9BQU8sRUFBRXVGO1lBQVcsR0FDNUN0SixLQUFLLENBQUNnRSxPQUFPLENBQUNyRixPQUFPLENBQ2QsRUFFUm1OLE1BQU0sSUFBSWxNLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUMrTCxRQUFBLENBQUE5SyxZQUFZO2NBQUNDLElBQUksRUFBRUEsSUFBSTtjQUFFL0QsSUFBSSxFQUFFdU8sTUFBTTtjQUFFdkssT0FBTyxFQUFFK0g7WUFBVyxFQUFJLENBQ3pFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUExSixNQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQXVPLE1BQUEsR0FBQXZPLE9BQUE7VUFFQSxJQUFBaUQsUUFBQSxHQUFBakQsT0FBQTtVQUVBLElBQUFtRSxNQUFBLEdBQUFuRSxPQUFBO1VBRUEsSUFBQXlQLGNBQUEsR0FBQXpQLE9BQUE7VUFDQSxJQUFBMFAsUUFBQSxHQUFBMVAsT0FBQTtVQUpBOztVQUtNLFNBQVU4TyxXQUFXQSxDQUFDO1lBQUVwSztVQUFJLENBQWlCO1lBQ2xELE1BQU07Y0FBRXRCLEtBQUs7Y0FBRTlDO1lBQUssQ0FBRSxHQUFHLElBQUEyQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQzZMLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUduTSxNQUFBLENBQUFPLE9BQUssQ0FBQ3dCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTTJILFdBQVcsR0FBR0EsQ0FBQSxLQUFNeUMsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztZQUM1QyxNQUFNdEIsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixNQUFNdE4sS0FBSyxDQUFDcUMsZ0JBQWdCLENBQUMrQixJQUFJLENBQUM5QixLQUFLLENBQUM7Y0FDeEM4SixXQUFXLEVBQUU7WUFDZCxDQUFDO1lBRUQsT0FDQzFKLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUlHLFNBQVMsRUFBQztZQUF3QixHQUNyQ1gsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9CLEdBQ2xDWCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0ssTUFBQSxDQUFBUSxLQUFLO2NBQUNwTCxTQUFTLEVBQUMsV0FBVztjQUFDdUcsR0FBRyxFQUFFeEYsSUFBSSxFQUFFc0s7WUFBUSxFQUFJLEVBQ3BEaE0sTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQUksR0FBRWUsSUFBSSxDQUFDcUQsSUFBSSxDQUFRLENBQ2xDLEVBQ04vRSxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYyxHQUM1QlgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lNLGNBQUEsQ0FBQUgsYUFBYTtjQUFDNUssSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDN0IxQixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa00sUUFBQSxDQUFBRixjQUFjO2NBQUM5SyxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUN6QixFQUNMd0ssTUFBTSxJQUNObE0sTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1csTUFBQSxDQUFBa0QsWUFBWTtjQUNacEIsS0FBSyxFQUFFN0MsS0FBSyxDQUFDcUQsS0FBSyxDQUFDMEgsTUFBTSxDQUFDbEksS0FBSztjQUMvQnRGLElBQUk7Y0FDSnNOLFNBQVMsRUFBRUwsUUFBUTtjQUNuQnhHLE9BQU8sRUFBRTtnQkFDUjhHLE9BQU8sRUFBRTtrQkFDUnRLLEtBQUssRUFBRVIsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDOEcsT0FBTztrQkFDNUIvRyxPQUFPLEVBQUV5RyxRQUFRO2tCQUNqQmpLLFNBQVMsRUFBRTtpQkFDWDtnQkFDRHdLLE1BQU0sRUFBRTtrQkFDUHZLLEtBQUssRUFBRVIsS0FBSyxDQUFDZ0UsT0FBTyxDQUFDK0csTUFBTTtrQkFDM0JoSCxPQUFPLEVBQUV1RixXQUFXO2tCQUNwQi9JLFNBQVMsRUFBRTs7O1lBRVosR0FFRFgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsZUFBT0osS0FBSyxDQUFDcUQsS0FBSyxDQUFDMEgsTUFBTSxDQUFDekgsV0FBVyxDQUFRLENBRTlDLENBQ0c7VUFFUCIsImlnbm9yZUxpc3QiOltdfQ==