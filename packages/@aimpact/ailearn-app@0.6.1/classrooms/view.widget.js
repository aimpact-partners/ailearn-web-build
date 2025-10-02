System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.6.1/main-layout.widget", "@aimpact/ailearn-app@0.6.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "react@18.3.1", "@aimpact/ailearn-app@0.6.1/components/ui", "pragmate-ui@1.0.8/list", "@aimpact/ailearn-app@0.6.1/components/module-card", "@aimpact/ailearn-app@0.6.1/i18n.ts", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/form/react-select", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/icons", "@aimpact/ailearn-app@0.6.1/components/icons", "@aimpact/ailearn-app@0.6.1/config", "@aimpact/ailearn-app@0.6.1/model/wrapper", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/tabs", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.8/image", "framer-motion@10.18.0", "pragmate-ui@1.0.8/alert"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp061MainLayoutWidget;
    }, function (_aimpactAilearnApp061StoresBase) {
      dependency_5 = _aimpactAilearnApp061StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk120EntitiesClassrooms;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/module-card', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@aimpact/ailearn-app/model/wrapper', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/tabs', dependency_23], ['@aimpact/chat-sdk/session', dependency_24], ['pragmate-ui/image', dependency_25], ['framer-motion', dependency_26], ['pragmate-ui/alert', dependency_27]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/classrooms/view.widget');
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
        hash: 829038272,
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
              console.log('id in store.ts line 19\n', id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsIm92ZXJsYXkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzZXQiLCJicmVhZGNydW1iIiwiZ2xvYmFsVGV4dHMiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJuYW1lIiwiYXBwcm92ZSIsInVpZCIsInJvbGUiLCJmZXRjaGluZyIsInJlcyIsInN0YXR1cyIsIkVycm9yIiwiZSIsImVycm9yIiwicmVqZWN0IiwiY2FuY2VsSW52aXRhdGlvbiIsImVtYWlsIiwidXBkYXRlUm9sZSIsInZhbHVlcyIsInJlbW92ZU1lbWJlciIsInJlcXVlc3RBY2Nlc3MiLCJfcmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImVtcHR5IiwiYXNzaWdubWVudHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJ0aXRsZSIsImljb24iLCJSZWFjdCIsIl9saXN0IiwiX2l0ZW0iLCJfZW1wdHkiLCJBc3NzaWdubWVudHMiLCJsZW5ndGgiLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJocmVmIiwiRnJhZ21lbnQiLCJBc3NpZ25tZW50Q2FyZCIsInR5cGUiLCJhdWRpZW5jZSIsImVudGl0eSIsIm1vZGUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwib25DbG9zZSIsImFjdGlvbiIsInJvbGVTZWxlY3RlZCIsInNldFJvbGVTZWxlY3RlZCIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiYXBwcm92YWwiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInJvbGVzIiwibWVtYmVyIiwibWFuYWdlciIsImhhbmRsZVJvbGVDaGFuZ2UiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJmb3JtcyIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImFjdGlvbnMiLCJDb25maXJtTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInN5c3RlbSIsImludml0ZSIsImVkaXRGb3JtIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsInNhdmUiLCJSb2xlTW9kYWwiLCJJbnZpdGF0aW9uRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsImlzRGlzYWJsZWQiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3dyYXBwZXIiLCJDb2RlU2VjdGlvbiIsImpvaW5TcGVjcyIsIm9wZW4iLCJzZXRPcGVuIiwiY29weVRvQ2xpcGJvYXJkIiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0dGluZ3MiLCJiYXNlVXJsIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9uV2F0Y2giLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJ3YXRjaCIsIl9jb2RlU2VjdGlvbiIsIl9yb3V0aW5nIiwiSGVhZGVyQ29udGFpbmVyIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm93bmVyIiwib3JnYW5pemF0aW9uIiwidGVhY2hlciIsIkFwcEljb24iLCJVc2VyRGF0YSIsImRhdGEiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3RhYnMiLCJfYXNzaWdubWVudHMiLCJfcmVxdWVzdEFjY2VzcyIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJSZXF1ZXN0QWNjZXNzIiwiY2xzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVGFic0NvbnRhaW5lciIsInRhYnMiLCJ0cmFja1VybCIsIlRhYnMiLCJUYWIiLCJwZW9wbGUiLCJQYW5lcyIsIk1lbWJlcnMiLCJwZW5kaW5nIiwicm9sIiwiRmlsdGVycyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicHVzaCIsImlkZW50aWZpZXIiLCJ0b3RhbCIsInBlbmRpbmdzIiwia2V5IiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiQXBwQnV0dG9uIiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJzdHlsZSIsIndpZHRoIiwiZGVsZXRlIiwic2l6aW5nIiwib25Db25maXJtIiwiY29uZmlybSIsImNhbmNlbCIsIkNvbmZpcm1BY3Rpb24iLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiQ2hpcCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIkNvbmZpcm1QZW5kaW5nIiwiX2NvbmZpcm0iLCJfcmVqZWN0IiwiUmVqZWN0UGVuZGluZyIsIl9hbGVydCIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwic3VidGl0bGUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25SZXF1ZXN0IiwiQWxlcnQiLCJwaWN0dXJlIiwiYWx0Il0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvYXNzaWdubWVudHMvZW1wdHkudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2l0ZW0udHN4IiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9mb3Jtcy9hcHByb3ZlLnRzeCIsIi8vdHMvdmlld3MvZm9ybXMvY29uZmlybS50c3giLCIvL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiLy90cy92aWV3cy9mb3Jtcy9pbnZpdGUudHN4IiwiLy9nbG9iYWwudHN4LyIsIi8vdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiLy90cy92aWV3cy9saXN0L2ZpbHRlcnMudHN4IiwiLy90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGlzdC9pdGVtL2FjdGlvbnMudHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vY29uZmlybS1hY3Rpb24udHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vaW52aXRlZC50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL2NvbmZpcm0udHN4IiwiLy90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL3JlamVjdC50c3giLCIvL3RzL3ZpZXdzL3JlcXVlc3QtYWNjZXNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FB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