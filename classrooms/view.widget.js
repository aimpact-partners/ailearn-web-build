System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/stores/base", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/module-card", "@aimpact/ailearn-app@0.3.1/i18n.ts", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/config", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/image", "framer-motion@10.18.0"], function (_export, _context2) {
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsIm92ZXJsYXkiLCJpZCIsInNldCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwiY2xhc3Nyb29tcyIsIm5hbWUiLCJhcHByb3ZlIiwidWlkIiwicm9sZSIsImZldGNoaW5nIiwicmVzIiwic3RhdHVzIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwiY2FuY2VsSW52aXRhdGlvbiIsImVtYWlsIiwidXBkYXRlUm9sZSIsInZhbHVlcyIsInJlbW92ZU1lbWJlciIsIl9yZWFjdCIsIl91aSIsIl9jb250ZXh0IiwiRW1wdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZW1wdHkiLCJhc3NpZ25tZW50cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsInRpdGxlIiwiaWNvbiIsIlJlYWN0IiwiX2xpc3QiLCJfaXRlbSIsIl9lbXB0eSIsIkFzc3NpZ25tZW50cyIsImxlbmd0aCIsIkxpc3QiLCJjbGFzc05hbWUiLCJpdGVtcyIsImNvbnRyb2wiLCJBc3NpZ25tZW50SXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImhyZWYiLCJGcmFnbWVudCIsIkFzc2lnbm1lbnRDYXJkIiwidHlwZSIsImF1ZGllbmNlIiwiZW50aXR5IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZGFsIiwiX2Zvcm0iLCJfcmVhY3RTZWxlY3QiLCJfY29tcG9uZW50cyIsIl90b2FzdCIsIkFwcHJvdmVNb2RhbCIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFwcHJvdmFsIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwib3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJyb2xlcyIsIm1lbWJlciIsIm1hbmFnZXIiLCJoYW5kbGVSb2xlQ2hhbmdlIiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJGb3JtIiwiZm9ybXMiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiZm9ybSIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiQ29uZmlybU1vZGFsIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJzeXN0ZW0iLCJpbnZpdGUiLCJlZGl0Rm9ybSIsImluZm8iLCJkZWZhdWx0VmFsdWUiLCJzYXZlIiwiUm9sZU1vZGFsIiwiSW52aXRhdGlvbkZvcm0iLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2xvc2UiLCJyZXNwb25zZSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJtYXAiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiam9pblNwZWNzIiwib3BlbiIsInNldE9wZW4iLCJjb3B5VG9DbGlwYm9hcmQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwYXJhbXMiLCJiYXNlVXJsIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9uV2F0Y2giLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJ3YXRjaCIsIl9jb2RlU2VjdGlvbiIsIl9yb3V0aW5nIiwiSGVhZGVyQ29udGFpbmVyIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm93bmVyIiwib3JnYW5pemF0aW9uIiwidGVhY2hlciIsIkFwcEljb24iLCJVc2VyRGF0YSIsImRhdGEiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3RhYnMiLCJfYXNzaWdubWVudHMiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImZvdW5kIiwiaGFzQWNjZXNzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVGFic0NvbnRhaW5lciIsInRhYnMiLCJ0cmFja1VybCIsIlRhYnMiLCJUYWIiLCJwZW9wbGUiLCJQYW5lcyIsIk1lbWJlcnMiLCJwZW5kaW5nIiwicm9sIiwiRmlsdGVycyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImtleXMiLCJpZGVudGlmaWVyIiwidG90YWwiLCJwZW5kaW5ncyIsImtleSIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJfaW52aXRlIiwiX2ZpbHRlcnMiLCJzZXRTaG93IiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwibGlzdCIsIkl0ZW0iLCJfZWRpdGlvbiIsIl9zZXNzaW9uIiwiSXRlbUFjdGlvbnMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJ0b2dnbGVEZWxldGVNb2RhbCIsIm9uRGVsZXRlIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwic3R5bGUiLCJ3aWR0aCIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJDb25maXJtQWN0aW9uIiwiX2ltYWdlIiwiX2ludml0ZWQiLCJfcGVuZGluZyIsIl9hY3Rpb25zIiwiaW52aXRlZCIsIkludml0ZWRJdGVtIiwiYXV0aG9yaXplZCIsIlBlbmRpbmdJdGVtIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VybCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIlJlamVjdFBlbmRpbmciLCJfYXBwcm92ZSIsIkNvbmZpcm1QZW5kaW5nIiwiX1JlamVjdFBlbmRpbmciLCJfY29uZmlybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3Jtcy9hcHByb3ZlLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9pbnZpdGUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZmlsdGVycy50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW52aXRlZC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvUmVqZWN0UGVuZGluZy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvY29uZmlybS50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJ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