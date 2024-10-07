System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@aimpact/ailearn-app@0.1.13/widgets/base", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/alert", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_aimpactAilearnApp0113WidgetsBase) {
      dependency_4 = _aimpactAilearnApp0113WidgetsBase;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_5 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_7 = _pragmateUi100Beta6Alert;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_8 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_9 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_10 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Components) {
      dependency_11 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_13 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_14 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113Config) {
      dependency_15 = _aimpactAilearnApp0113Config;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_19 = _pragmateUi100Beta6List;
    }, function (_aimpactChatSdk130Session) {
      dependency_20 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Image) {
      dependency_21 = _pragmateUi100Beta6Image;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@aimpact/ailearn-app/widgets/base', dependency_4], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_5], ['react', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/form/react-select', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/list', dependency_19], ['@aimpact/chat-sdk/session', dependency_20], ['pragmate-ui/image', dependency_21], ['framer-motion', dependency_22]]);
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
        hash: 395258689,
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
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/organizations/join?code=${code}`);
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
        hash: 1340007054,
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
        hash: 532770893,
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
              className: "app-organization-creation-page",
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
        hash: 2800895589,
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
        hash: 3001366701,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsImNhbmNlbEludml0YXRpb24iLCJlbWFpbCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwiaXRlbSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzeXN0ZW0iLCJpbnZpdGUiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsaXN0IiwibWVtYmVycyIsIm1hbmFnZXJzIiwiaGFuZGxlUm9sZUNoYW5nZSIsInRhcmdldCIsImRpc2FibGVkIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImZvcm1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiZm9ybSIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkNvbmZpcm1Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwiZWRpdEZvcm0iLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwic2F2ZSIsIlJvbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsInJvbGVzIiwiSW5wdXQiLCJyZXF1aXJlZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiam9pblNwZWNzIiwiY29weVRvQ2xpcGJvYXJkIiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwicGFyYW1zIiwiYmFzZVVybCIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiX2NvZGVTZWN0aW9uIiwiX3JvdXRpbmciLCJIZWFkZXJDb250YWluZXIiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQXBwSWNvbkJ1dHRvbiIsIl9ob29rcyIsIl9oZWFkZXIiLCJfbGlzdCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJNZW1iZXJzIiwiRW1wdHlMaXN0IiwiZW1wdHkiLCJwZW5kaW5nIiwicm9sIiwiRW1wdHlDYXJkIiwidGV4dCIsIkZpbHRlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJrZXlzIiwiaWRlbnRpZmllciIsInRvdGFsIiwicGVuZGluZ3MiLCJsZW5ndGgiLCJrZXkiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiX2l0ZW0iLCJfZW1wdHkiLCJfaW52aXRlIiwiX2ZpbHRlcnMiLCJzZXRTaG93IiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwiRnJhZ21lbnQiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkZWxldGUiLCJzaXppbmciLCJvbkNvbmZpcm0iLCJjb25maXJtIiwiY2FuY2VsIiwiQ29uZmlybUFjdGlvbiIsIm9wZW4iLCJzZXRPcGVuIiwiX2ltYWdlIiwiX2ludml0ZWQiLCJfcGVuZGluZyIsIl9hY3Rpb25zIiwiaW52aXRlZCIsIkludml0ZWRJdGVtIiwiYXV0aG9yaXplZCIsIlBlbmRpbmdJdGVtIiwiSW1hZ2UiLCJwaG90b1VybCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIlJlamVjdFBlbmRpbmciLCJfYXBwcm92ZSIsIkNvbmZpcm1QZW5kaW5nIiwiX1JlamVjdFBlbmRpbmciLCJfY29uZmlybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbnZpdGVkLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9SZWplY3RQZW5kaW5nLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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