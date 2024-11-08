System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.1/main-layout.widget", "@aimpact/ailearn-app@0.2.1/widgets/base", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "react@18.2.0", "@aimpact/ailearn-app@0.2.1/components/ui", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.2.1/components/module-card", "@aimpact/ailearn-app@0.2.1/components/icons", "@aimpact/ailearn-app@0.2.1/i18n.ts", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.1/config", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/tabs", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp021MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp021MainLayoutWidget;
    }, function (_aimpactAilearnApp021WidgetsBase) {
      dependency_5 = _aimpactAilearnApp021WidgetsBase;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp021ComponentsUi) {
      dependency_8 = _aimpactAilearnApp021ComponentsUi;
    }, function (_pragmateUi100Beta6List) {
      dependency_9 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp021ComponentsModuleCard) {
      dependency_10 = _aimpactAilearnApp021ComponentsModuleCard;
    }, function (_aimpactAilearnApp021ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp021ComponentsIcons;
    }, function (_aimpactAilearnApp021I18nTs) {
      dependency_12 = _aimpactAilearnApp021I18nTs;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_13 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_14 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_15 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Components) {
      dependency_16 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_17 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_18 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp021Config) {
      dependency_19 = _aimpactAilearnApp021Config;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_22 = _pragmateUi100Beta6Tabs;
    }, function (_aimpactChatSdk130Session) {
      dependency_23 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Image) {
      dependency_24 = _pragmateUi100Beta6Image;
    }, function (_framerMotion2) {
      dependency_25 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.1"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.1/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/widgets/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/module-card', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/form/react-select', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/tabs', dependency_22], ['@aimpact/chat-sdk/session', dependency_23], ['pragmate-ui/image', dependency_24], ['framer-motion', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.2.1/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.1/classrooms/view.widget');
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
        hash: 3794794601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _context = require("../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function AssignmentItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const href = `/assignments/${item.id}`;
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item.module,
              showDate: true,
              texts: texts,
              href: href
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item.module,
              showUser: false
            }, React.createElement("div", {
              className: "flex-container gap-05 flex-end"
            }, React.createElement(_icons.AppIconButton, {
              icon: "watch"
            }), item?.playground?.assignment && React.createElement("a", {
              target: "_blank",
              href: item.playground.assignment,
              className: "right-action btn btn-primary outline"
            }, globalTexts.actions.test)))));
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
        hash: 4130715785,
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
            }, globalTexts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/confirm
      *************************************/

      ims.set('./views/forms/confirm', {
        hash: 3943649565,
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
            }, globalTexts.actions.save))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/edition
      *************************************/

      ims.set('./views/forms/edition', {
        hash: 2317287034,
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
        hash: 3719791773,
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
              globalTexts,
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
              title: globalTexts.actions.copy,
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
        hash: 1667473923,
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
            }, _react.default.createElement(_ui.EntityImage, {
              src: store.model.picture,
              entity: "institution"
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
        hash: 4122723159,
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
        hash: 2078592342,
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
            if (!store.model.isAdmin || item.id === _session.sessionWrapper.user.id) return null;
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
        hash: 1713245640,
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
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsImNhbmNlbEludml0YXRpb24iLCJlbWFpbCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImVtcHR5IiwiYXNzaWdubWVudHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJ0aXRsZSIsImljb24iLCJSZWFjdCIsIl9saXN0IiwiX2l0ZW0iLCJfZW1wdHkiLCJBc3NzaWdubWVudHMiLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfbW9kdWxlQ2FyZCIsIl9pY29ucyIsIml0ZW0iLCJnbG9iYWxUZXh0cyIsImhyZWYiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJzaG93RGF0ZSIsIk1vZHVsZUNhcmRGb290ZXIiLCJzaG93VXNlciIsIkFwcEljb25CdXR0b24iLCJwbGF5Z3JvdW5kIiwiYXNzaWdubWVudCIsInRhcmdldCIsImFjdGlvbnMiLCJ0ZXN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZGFsIiwiX2Zvcm0iLCJfcmVhY3RTZWxlY3QiLCJfY29tcG9uZW50cyIsIl90b2FzdCIsIkFwcHJvdmVNb2RhbCIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzeXN0ZW0iLCJpbnZpdGUiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImxpc3QiLCJtZW1iZXJzIiwibWFuYWdlcnMiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiZGlzYWJsZWQiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJGb3JtIiwiZm9ybXMiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiZm9ybSIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJlZGl0Rm9ybSIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJzYXZlIiwiUm9sZU1vZGFsIiwiSW52aXRhdGlvbkZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsInNldFZhbHVlcyIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibWFwIiwicm9sZXMiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwYXJhbXMiLCJiYXNlVXJsIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJfY29kZVNlY3Rpb24iLCJfcm91dGluZyIsIkhlYWRlckNvbnRhaW5lciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJvd25lciIsIm9yZ2FuaXphdGlvbiIsInRlYWNoZXIiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJVc2VyRGF0YSIsImRhdGEiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3RhYnMiLCJfYXNzaWdubWVudHMiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImZvdW5kIiwiaGFzQWNjZXNzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJlbnRpdGllcyIsInBlb3BsZSIsIlBhbmVzIiwiTWVtYmVycyIsInBlbmRpbmciLCJyb2wiLCJGaWx0ZXJzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwia2V5cyIsImlkZW50aWZpZXIiLCJ0b3RhbCIsInBlbmRpbmdzIiwibGVuZ3RoIiwia2V5IiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJJdGVtIiwiX2VkaXRpb24iLCJfc2Vzc2lvbiIsIkl0ZW1BY3Rpb25zIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidG9nZ2xlRGVsZXRlTW9kYWwiLCJvbkRlbGV0ZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJDb25maXJtQWN0aW9uIiwib3BlbiIsInNldE9wZW4iLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInBob3RvVXJsIiwiX2ZyYW1lck1vdGlvbiIsImlzT3BlbiIsInNldElzT3BlbiIsIm1vdGlvbiIsImxpIiwiUmVqZWN0UGVuZGluZyIsIl9hcHByb3ZlIiwiQ29uZmlybVBlbmRpbmciLCJfUmVqZWN0UGVuZGluZyIsIl9jb25maXJtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNzaWdubWVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbnZpdGVkLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9SZWplY3RQZW5kaW5nLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQ3pD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