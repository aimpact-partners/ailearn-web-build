System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.26/main-layout.widget", "@aimpact/ailearn-app@0.3.26/stores/base", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms", "react@18.2.0", "@aimpact/ailearn-app@0.3.26/components/ui", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.26/components/module-card", "@aimpact/ailearn-app@0.3.26/i18n.ts", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.26/components/icons", "@aimpact/ailearn-app@0.3.26/config", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnApp0326MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0326MainLayoutWidget;
    }, function (_aimpactAilearnApp0326StoresBase) {
      dependency_5 = _aimpactAilearnApp0326StoresBase;
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk110EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0326ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0326ComponentsUi;
    }, function (_pragmateUi100Beta7List) {
      dependency_9 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0326ComponentsModuleCard) {
      dependency_10 = _aimpactAilearnApp0326ComponentsModuleCard;
    }, function (_aimpactAilearnApp0326I18nTs) {
      dependency_11 = _aimpactAilearnApp0326I18nTs;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_12 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Form) {
      dependency_13 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_14 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Components) {
      dependency_15 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_16 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_17 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0326ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0326ComponentsIcons;
    }, function (_aimpactAilearnApp0326Config) {
      dependency_19 = _aimpactAilearnApp0326Config;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_21 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_22 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactChatSdk141Session) {
      dependency_23 = _aimpactChatSdk141Session;
    }, function (_pragmateUi100Beta7Image) {
      dependency_24 = _pragmateUi100Beta7Image;
    }, function (_framerMotion2) {
      dependency_25 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.26"], ["@aimpact/ailearn-app", "0.3.26"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.26/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/module-card', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/tabs', dependency_22], ['@aimpact/chat-sdk/session', dependency_23], ['pragmate-ui/image', dependency_24], ['framer-motion', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.26/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.26/classrooms/view.widget');
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
        hash: 1241322597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _base = require("@aimpact/ailearn-app/stores/base");
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
              _mainLayout.LayoutBroker.overlay = false;
            }
            async load(id) {
              await super.load(id);
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.classrooms, `/classrooms/list`], [this.model.name]]
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
        hash: 1946218281,
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
            role = 'member'
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
              role
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
        hash: 862961761,
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
          var _config = require("@aimpact/ailearn-app/config");
          var _modal = require("pragmate-ui/modal");
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
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/classrooms/join?code=${code}`);
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
        hash: 3054091816,
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
            }))), _react.default.createElement(_icons.AppIconButton, {
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
        hash: 1626341910,
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
          var _tabs = require("pragmate-ui/tabs");
          var _list = require("./list");
          var _assignments = require("./assignments");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const {
              texts,
              globalTexts
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
              texts,
              globalTexts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: "app-classroom-creation-page",
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_tabs.TabsContainer, {
              tabs: ['assignments', 'people'],
              className: "pui-page-tabs-container",
              trackUrl: true
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, store.globalTexts.entities.assignments), _react.default.createElement(_tabs.Tab, null, store.texts.people)), _react.default.createElement(_tabs.Panes, {
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
        hash: 3779591523,
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
        hash: 3638275650,
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
            if (!store.model.isAdmin || item.id === _session.sessionWrapper.user.id) {
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
        hash: 3088704752,
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
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("div", {
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
        hash: 1284965457,
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
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsIm92ZXJsYXkiLCJpZCIsInNldCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwiY2xhc3Nyb29tcyIsIm5hbWUiLCJhcHByb3ZlIiwidWlkIiwicm9sZSIsImZldGNoaW5nIiwicmVzIiwic3RhdHVzIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwiY2FuY2VsSW52aXRhdGlvbiIsImVtYWlsIiwidXBkYXRlUm9sZSIsInZhbHVlcyIsInJlbW92ZU1lbWJlciIsIl9yZWFjdCIsIl91aSIsIl9jb250ZXh0IiwiRW1wdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZW1wdHkiLCJhc3NpZ25tZW50cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsInRpdGxlIiwiaWNvbiIsIlJlYWN0IiwiX2xpc3QiLCJfaXRlbSIsIl9lbXB0eSIsIkFzc3NpZ25tZW50cyIsImxlbmd0aCIsIkxpc3QiLCJjbGFzc05hbWUiLCJpdGVtcyIsImNvbnRyb2wiLCJBc3NpZ25tZW50SXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImhyZWYiLCJGcmFnbWVudCIsIkFzc2lnbm1lbnRDYXJkIiwidHlwZSIsImF1ZGllbmNlIiwiZW50aXR5IiwibW9kZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9mb3JtIiwiX3JlYWN0U2VsZWN0IiwiX2NvbXBvbmVudHMiLCJfdG9hc3QiLCJBcHByb3ZlTW9kYWwiLCJvbkNsb3NlIiwiYWN0aW9uIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJhcHByb3ZhbCIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwicm9sZXMiLCJtZW1iZXIiLCJtYW5hZ2VyIiwiaGFuZGxlUm9sZUNoYW5nZSIsInRhcmdldCIsImRpc2FibGVkIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImZvcm1zIiwiZGVzY3JpcHRpb24iLCJFcnJvclJlbmRlcmVyIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkNvbmZpcm1Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic3lzdGVtIiwiaW52aXRlIiwiZWRpdEZvcm0iLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwic2F2ZSIsIlJvbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibWFwIiwiaXNEaXNhYmxlZCIsIklucHV0IiwicmVxdWlyZWQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJqb2luU3BlY3MiLCJvcGVuIiwic2V0T3BlbiIsImNvcHlUb0NsaXBib2FyZCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInBhcmFtcyIsImJhc2VVcmwiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib25XYXRjaCIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiQXBwSWNvbkJ1dHRvbiIsIndhdGNoIiwiX2NvZGVTZWN0aW9uIiwiX3JvdXRpbmciLCJIZWFkZXJDb250YWluZXIiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwib3duZXIiLCJvcmdhbml6YXRpb24iLCJ0ZWFjaGVyIiwiQXBwSWNvbiIsIlVzZXJEYXRhIiwiZGF0YSIsIl9ob29rcyIsIl9oZWFkZXIiLCJfdGFicyIsIl9hc3NpZ25tZW50cyIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwidGFicyIsInRyYWNrVXJsIiwiVGFicyIsIlRhYiIsInBlb3BsZSIsIlBhbmVzIiwiTWVtYmVycyIsInBlbmRpbmciLCJyb2wiLCJGaWx0ZXJzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwia2V5cyIsImlkZW50aWZpZXIiLCJ0b3RhbCIsInBlbmRpbmdzIiwia2V5IiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiQXBwQnV0dG9uIiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJzdHlsZSIsIndpZHRoIiwiZGVsZXRlIiwic2l6aW5nIiwib25Db25maXJtIiwiY29uZmlybSIsImNhbmNlbCIsIkNvbmZpcm1BY3Rpb24iLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiQ2hpcCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIkNvbmZpcm1QZW5kaW5nIiwiX2NvbmZpcm0iLCJfcmVqZWN0IiwiUmVqZWN0UGVuZGluZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3Jtcy9hcHByb3ZlLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9pbnZpdGUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZmlsdGVycy50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW52aXRlZC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvY29uZmlybS50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL3JlamVjdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFD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