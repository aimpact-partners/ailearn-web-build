System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/stores/base", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/i18n.ts", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/config", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/image", "framer-motion@10.18.0"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnApp031StoresBase) {
      dependency_5 = _aimpactAilearnApp031StoresBase;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_8 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7List) {
      dependency_9 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp031ComponentsModuleCard) {
      dependency_10 = _aimpactAilearnApp031ComponentsModuleCard;
    }, function (_aimpactAilearnApp031I18nTs) {
      dependency_11 = _aimpactAilearnApp031I18nTs;
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
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactAilearnApp031Config) {
      dependency_19 = _aimpactAilearnApp031Config;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/module-card', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/tabs', dependency_22], ['@aimpact/chat-sdk/session', dependency_23], ['pragmate-ui/image', dependency_24], ['framer-motion', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/classrooms/view.widget');
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
        hash: 1013734879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
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
        hash: 3524772600,
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
            if (!store.model.assignments) {
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
        hash: 3128201369,
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
              item: item.module,
              texts: texts,
              audience: false,
              entity: "assignment"
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
        hash: 3863855759,
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
        hash: 4074797701,
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
              className: "code-modal"
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
        hash: 3451936216,
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
              className: "pui-page-tabs-container"
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, store.globalTexts.entities.assignments), _react.default.createElement(_tabs.Tab, null, store.texts.people)), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_assignments.Asssignments, null), _react.default.createElement(_list.Members, null)))));
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
        hash: 1324387920,
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
        hash: 2286974689,
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
              className: "flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "filters__container"
            }, _react.default.createElement(_filters.Filters, {
              selected: selected,
              setSelected: setSelected
            }), " "), store.isAdmin && _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              label: globalTexts.actions.invite,
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
        hash: 4275951537,
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
            if (!store.model.isAdmin || item.id === _session.sessionWrapper.user.id) return _react.default.createElement("div", {
              style: {
                width: '30px'
              }
            });
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
        hash: 2183190774,
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
            }, item.name)), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center flex-end gap-1"
            }, _react.default.createElement("span", {
              className: "role"
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

      /*******************************************************
      INTERNAL MODULE: ./views/list/item/pending/RejectPending
      *******************************************************/

      ims.set('./views/list/item/pending/RejectPending', {
        hash: 2278963035,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.reject), isOpen && _react.default.createElement(_modal.ConfirmModal, {
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
        hash: 2739061646,
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
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.approve), isOpen && _react.default.createElement(_approve.ApproveModal, {
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
        hash: 729149669,
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
              globalTexts,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsImNhbmNlbEludml0YXRpb24iLCJlbWFpbCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImVtcHR5IiwiYXNzaWdubWVudHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJ0aXRsZSIsImljb24iLCJSZWFjdCIsIl9saXN0IiwiX2l0ZW0iLCJfZW1wdHkiLCJBc3NzaWdubWVudHMiLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJocmVmIiwiRnJhZ21lbnQiLCJBc3NpZ25tZW50Q2FyZCIsInR5cGUiLCJhdWRpZW5jZSIsImVudGl0eSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9mb3JtIiwiX3JlYWN0U2VsZWN0IiwiX2NvbXBvbmVudHMiLCJfdG9hc3QiLCJBcHByb3ZlTW9kYWwiLCJvbkNsb3NlIiwiYWN0aW9uIiwiZ2xvYmFsVGV4dHMiLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFwcHJvdmFsIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwib3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJyb2xlcyIsIm1lbWJlciIsIm1hbmFnZXIiLCJoYW5kbGVSb2xlQ2hhbmdlIiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJGb3JtIiwiZm9ybXMiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiZm9ybSIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiQ29uZmlybU1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJzeXN0ZW0iLCJpbnZpdGUiLCJlZGl0Rm9ybSIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJzYXZlIiwiUm9sZU1vZGFsIiwiSW52aXRhdGlvbkZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsInNldFZhbHVlcyIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibWFwIiwiSW5wdXQiLCJyZXF1aXJlZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb25maWciLCJDb2RlU2VjdGlvbiIsImpvaW5TcGVjcyIsIm9wZW4iLCJzZXRPcGVuIiwiY29weVRvQ2xpcGJvYXJkIiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwicGFyYW1zIiwiYmFzZVVybCIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJvbldhdGNoIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwid2F0Y2giLCJfY29kZVNlY3Rpb24iLCJfcm91dGluZyIsIkhlYWRlckNvbnRhaW5lciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJvd25lciIsIm9yZ2FuaXphdGlvbiIsInRlYWNoZXIiLCJBcHBJY29uIiwiVXNlckRhdGEiLCJkYXRhIiwiX2hvb2tzIiwiX2hlYWRlciIsIl90YWJzIiwiX2Fzc2lnbm1lbnRzIiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmb3VuZCIsImhhc0FjY2VzcyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiVGFiIiwiZW50aXRpZXMiLCJwZW9wbGUiLCJQYW5lcyIsIk1lbWJlcnMiLCJwZW5kaW5nIiwicm9sIiwiRmlsdGVycyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImtleXMiLCJpZGVudGlmaWVyIiwidG90YWwiLCJwZW5kaW5ncyIsImxlbmd0aCIsImtleSIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJfaW52aXRlIiwiX2ZpbHRlcnMiLCJzZXRTaG93IiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwibGlzdCIsIkl0ZW0iLCJfZWRpdGlvbiIsIl9zZXNzaW9uIiwiSXRlbUFjdGlvbnMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJ0b2dnbGVEZWxldGVNb2RhbCIsIm9uRGVsZXRlIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwic3R5bGUiLCJ3aWR0aCIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJDb25maXJtQWN0aW9uIiwiX2ltYWdlIiwiX2ludml0ZWQiLCJfcGVuZGluZyIsIl9hY3Rpb25zIiwiaW52aXRlZCIsIkludml0ZWRJdGVtIiwiYXV0aG9yaXplZCIsIlBlbmRpbmdJdGVtIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VybCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIlJlamVjdFBlbmRpbmciLCJfYXBwcm92ZSIsIkNvbmZpcm1QZW5kaW5nIiwiX1JlamVjdFBlbmRpbmciLCJfY29uZmlybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3Jtcy9hcHByb3ZlLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9pbnZpdGUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZmlsdGVycy50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW52aXRlZC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvUmVqZWN0UGVuZGluZy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvY29uZmlybS50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUN6Q1osV0FBQSxDQUFBYSxZQUFZLENB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