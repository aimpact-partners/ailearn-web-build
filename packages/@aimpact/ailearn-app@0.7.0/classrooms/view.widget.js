System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/main-layout.widget", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.7.0/components/module-card", "@aimpact/ailearn-app@0.7.0/i18n.ts", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/form/react-select", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/ailearn-app@0.7.0/config", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/tabs", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.8/image", "framer-motion@10.18.0", "pragmate-ui@1.0.8/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, RequestAccess, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    View: void 0,
    RequestAccess: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp070MainLayoutWidget;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_5 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_8 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108List) {
      dependency_9 = _pragmateUi108List;
    }, function (_aimpactAilearnApp070ComponentsModuleCard) {
      dependency_10 = _aimpactAilearnApp070ComponentsModuleCard;
    }, function (_aimpactAilearnApp070I18nTs) {
      dependency_11 = _aimpactAilearnApp070I18nTs;
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
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactAilearnApp070Config) {
      dependency_19 = _aimpactAilearnApp070Config;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_20 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsKernel0114Routing) {
      dependency_21 = _beyondJsKernel0114Routing;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_22 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Tabs) {
      dependency_23 = _pragmateUi108Tabs;
    }, function (_aimpactChatSdk155Session) {
      dependency_24 = _aimpactChatSdk155Session;
    }, function (_pragmateUi108Image) {
      dependency_25 = _pragmateUi108Image;
    }, function (_framerMotion2) {
      dependency_26 = _framerMotion2;
    }, function (_pragmateUi108Alert) {
      dependency_27 = _pragmateUi108Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/module-card', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@aimpact/ailearn-app/model/wrapper', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/tabs', dependency_23], ['@aimpact/chat-sdk/session', dependency_24], ['pragmate-ui/image', dependency_25], ['framer-motion', dependency_26], ['pragmate-ui/alert', dependency_27]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/classrooms/view.widget');
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
        hash: 1116009836,
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
                overlay: true,
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
        hash: 2893920516,
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
                await navigator.clipboard.writeText(`${_wrapper.settings.baseUrl}/classrooms/join?code=${code}`);
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
        hash: 1595974781,
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
          var _requestAccess = require("./request-access");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [update, setUpdate] = _react.default.useState({});
            const {
              texts,
              globalTexts
            } = store;
            (0, _hooks.useBinder)([store], () => setUpdate({}));
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
        hash: 1982774606,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Members = Members;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../context");
          var _invite = require("../forms/invite");
          var _empty = require("./empty");
          var _filters = require("./filters");
          var _item = require("./item");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsIm92ZXJsYXkiLCJpZCIsInNldCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwiY2xhc3Nyb29tcyIsIm5hbWUiLCJhcHByb3ZlIiwidWlkIiwicm9sZSIsImZldGNoaW5nIiwicmVzIiwic3RhdHVzIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwiY2FuY2VsSW52aXRhdGlvbiIsImVtYWlsIiwidXBkYXRlUm9sZSIsInZhbHVlcyIsInJlbW92ZU1lbWJlciIsInJlcXVlc3RBY2Nlc3MiLCJfcmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImVtcHR5IiwiYXNzaWdubWVudHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJ0aXRsZSIsImljb24iLCJSZWFjdCIsIl9saXN0IiwiX2l0ZW0iLCJfZW1wdHkiLCJBc3NzaWdubWVudHMiLCJsZW5ndGgiLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJocmVmIiwiRnJhZ21lbnQiLCJBc3NpZ25tZW50Q2FyZCIsInR5cGUiLCJhdWRpZW5jZSIsImVudGl0eSIsIm1vZGUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwib25DbG9zZSIsImFjdGlvbiIsInJvbGVTZWxlY3RlZCIsInNldFJvbGVTZWxlY3RlZCIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiYXBwcm92YWwiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInJvbGVzIiwibWVtYmVyIiwibWFuYWdlciIsImhhbmRsZVJvbGVDaGFuZ2UiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJmb3JtcyIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImFjdGlvbnMiLCJDb25maXJtTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInN5c3RlbSIsImludml0ZSIsImVkaXRGb3JtIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsInNhdmUiLCJSb2xlTW9kYWwiLCJJbnZpdGF0aW9uRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsImlzRGlzYWJsZWQiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3dyYXBwZXIiLCJDb2RlU2VjdGlvbiIsImpvaW5TcGVjcyIsIm9wZW4iLCJzZXRPcGVuIiwiY29weVRvQ2xpcGJvYXJkIiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0dGluZ3MiLCJiYXNlVXJsIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9uV2F0Y2giLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJ3YXRjaCIsIl9jb2RlU2VjdGlvbiIsIl9yb3V0aW5nIiwiSGVhZGVyQ29udGFpbmVyIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm93bmVyIiwib3JnYW5pemF0aW9uIiwidGVhY2hlciIsIkFwcEljb24iLCJVc2VyRGF0YSIsImRhdGEiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3RhYnMiLCJfYXNzaWdubWVudHMiLCJfcmVxdWVzdEFjY2VzcyIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJSZXF1ZXN0QWNjZXNzIiwiY2xzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVGFic0NvbnRhaW5lciIsInRhYnMiLCJ0cmFja1VybCIsIlRhYnMiLCJUYWIiLCJwZW9wbGUiLCJQYW5lcyIsIk1lbWJlcnMiLCJwZW5kaW5nIiwicm9sIiwiRmlsdGVycyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicHVzaCIsImlkZW50aWZpZXIiLCJ0b3RhbCIsInBlbmRpbmdzIiwia2V5IiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiQXBwQnV0dG9uIiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJzdHlsZSIsIndpZHRoIiwiZGVsZXRlIiwic2l6aW5nIiwib25Db25maXJtIiwiY29uZmlybSIsImNhbmNlbCIsIkNvbmZpcm1BY3Rpb24iLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiQ2hpcCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIkNvbmZpcm1QZW5kaW5nIiwiX2NvbmZpcm0iLCJfcmVqZWN0IiwiUmVqZWN0UGVuZGluZyIsIl9hbGVydCIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwic3VidGl0bGUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25SZXF1ZXN0IiwiQWxlcnQiLCJwaWN0dXJlIiwiYWx0Il0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvYXNzaWdubWVudHMvZW1wdHkudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2l0ZW0udHN4IiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9mb3Jtcy9hcHByb3ZlLnRzeCIsIi8vdHMvdmlld3MvZm9ybXMvY29uZmlybS50c3giLCIvL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiLy90cy92aWV3cy9mb3Jtcy9pbnZpdGUudHN4IiwiLy9nbG9iYWwudHN4LyIsIi8vdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiLy90cy92aWV3cy9saXN0L2ZpbHRlcnMudHN4IiwiLy90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pdGVtL2FjdGlvbnMudHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vY29uZmlybS1hY3Rpb24udHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vaW52aXRlZC50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL2NvbmZpcm0udHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL3JlamVjdC50c3giLCIvL3RzL3ZpZXdzL3JlcXVlc3QtYWNjZXNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNP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