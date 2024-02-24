System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Header, OrganizationForm, UpdateOrganizationForm, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    OrganizationForm: void 0,
    UpdateOrganizationForm: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi006List) {
      dependency_7 = _pragmateUi006List;
    }, function (_pragmateUi006Image) {
      dependency_8 = _pragmateUi006Image;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_pragmateUi006Icons) {
      dependency_10 = _pragmateUi006Icons;
    }, function (_pragmateUi006Toast) {
      dependency_11 = _pragmateUi006Toast;
    }, function (_pragmateUi006Form) {
      dependency_12 = _pragmateUi006Form;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_15 = _beyondJsReact18Widgets104Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_16 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_18 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Modal) {
      dependency_19 = _pragmateUi006Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/organization/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/toast', dependency_11], ['pragmate-ui/form', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['pragmate-ui/modal', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organization-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/organization/management.widget",
        "is": "page",
        "route": "/organization/management/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/organization/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3399872820,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
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
            }
            hide() {
              this.#store.hide();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1369027615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #params;
            get params() {
              return this.#params;
            }
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            hide() {
              this.#model = undefined;
              this.ready = false;
            }
            async load(id) {
              try {
                this.ready = false;
                this.#params = id;
                const specs = id === 'new' ? {} : {
                  id
                };
                if (id === 'new' && this.#model) this.hide();
                this.#model = new _core.Organization(specs);
                if (id !== 'new') {
                  const data = await this.#model.load({
                    id
                  });
                }
              } catch (e) {
                console.error(e);
              } finally {
                this.ready = true;
              }
            }
            async delete(id) {
              this.#model.classrooms.remove(id);
              this.trigger('change');
            }
            async save(values) {
              try {
                this.fetching = true;
                let specs;
                if (this.#params !== 'new') {
                  specs = {
                    ...values,
                    id: this.#params
                  };
                } else {
                  specs = values;
                }
                const {
                  status,
                  data
                } = await this.model.save(specs);
                if (!status) {
                  throw new Error('error publishing classroom');
                }
                return data;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async invite(values) {
              try {
                this.fetching = true;
                console.log(values, 'values');
                const {
                  status,
                  data
                } = await this.model.invite(values);
                console.log(data, 'values');
                if (!status) {
                  throw new Error('error inviting user');
                }
                return data;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async approve(values) {
              try {
                this.fetching = true;
                const res = await this.model.approve(values);
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
            async reject(values) {
              try {
                this.fetching = true;
                const res = await this.model.reject(values);
                console.log(res, 'reject');
                // if (!status) {
                // 	throw new Error('error inviting user');
                // }
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
                // if (!res?.status) {
                // 	throw new Error("Error changing user's role");
                // }
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

      /*******************************************
      INTERNAL MODULE: ./views/approval-list/index
      *******************************************/

      ims.set('./views/approval-list/index', {
        hash: 2507369665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApprovalList = ApprovalList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _empty = require("../list/empty");
          var _item = require("./item");
          function ApprovalList({
            data,
            labels
          }) {
            const Control = data.length > 0 ? _list.List : _empty.EmptyList;
            return _react.default.createElement("div", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("span", {
              className: "h4"
            }, labels.title)), _react.default.createElement(Control, {
              specs: {},
              items: data,
              control: _item.Item,
              pending: data.length > 0
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/approval-list/item
      ******************************************/

      ims.set('./views/approval-list/item', {
        hash: 1149165860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _form = require("pragmate-ui/form");
          function Item({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useManageOrganizationContext)();
            const [selectRole, setSelectRole] = _react.default.useState('teacher');
            const handleRoleChange = event => {
              setSelectRole(event.target.value);
            };
            const handleApprove = async event => {
              event.preventDefault();
              try {
                await store.approve({
                  uid: item.uid,
                  role: selectRole
                });
                _toast.toast.success('Successfully approve user');
              } catch (e) {
                _toast.toast.error('Error approving user');
              }
            };
            const handleReject = async event => {
              event.preventDefault();
              try {
                await store.reject({
                  uid: item.uid,
                  role: selectRole
                });
                _toast.toast.success('Successfully approve user');
              } catch (e) {
                _toast.toast.error('Error approving user');
              }
            };
            const options = [{
              value: 'teacher',
              label: texts.list.teachers.single
            }, {
              value: 'manager',
              label: texts.list.admin.single
            }];
            return _react.default.createElement("li", {
              key: item.id,
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, item?.photoUrl ? _react.default.createElement(_image.Image, {
              src: item?.photoUrl
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: 'user'
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("div", {
              className: "actions_buttons"
            }, _react.default.createElement("div", {
              className: "div-select__button"
            }, _react.default.createElement(_form.Select, {
              id: "selectRole",
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            })), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: handleApprove,
              bordered: true,
              disabled: false
            }, texts.actions.approve), _react.default.createElement(_components.Button, {
              variant: "error",
              disabled: true,
              onClick: handleReject
            }, texts.actions.reject), _react.default.createElement(_icons.IconButton, {
              icon: "moreVert",
              className: "circle"
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 2021834047,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          /*bundle*/
          function Header() {
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Organization', '/organizations/list'], ['Management', '']]
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3320632111,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useManageOrganizationContext = exports.ManageOrganizationContext = void 0;
          var _react = require("react");
          const ManageOrganizationContext = exports.ManageOrganizationContext = _react.default.createContext({});
          const useManageOrganizationContext = () => _react.default.useContext(ManageOrganizationContext);
          exports.useManageOrganizationContext = useManageOrganizationContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/cover-image/actions
      *******************************************/

      ims.set('./views/cover-image/actions', {
        hash: 3909967748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          function CoverImageActions({
            setFetching
          }) {
            const {
              texts,
              store
            } = (0, _context.useManageOrganizationContext)();
            const generateImage = async event => {
              event.preventDefault();
              setFetching(true);
              await store.model.generatePicture();
              setFetching(false);
            };
            return _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: true,
              onClick: generateImage,
              bordered: true,
              icon: _icons.ICONS.aiStars
            }, texts.actions.generate), _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: true,
              className: "upload",
              icon: 'arrowDownloads'
            }, texts.actions.upload));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/cover-image/index
      *****************************************/

      ims.set('./views/cover-image/index', {
        hash: 4230097867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _react = require("react");
          var _actions = require("./actions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _image = require("pragmate-ui/image");
          var _context = require("../context");
          function CoverImage() {
            const {
              store
            } = (0, _context.useManageOrganizationContext)();
            const [image, setImage] = _react.default.useState(store.model?.picture);
            const [fetching, setFetching] = _react.default.useState(false);
            (0, _hooks.useBinder)([store], () => setImage(store.model?.picture), 'image.generated');
            return _react.default.createElement("div", {
              className: "cover-image__container"
            }, store.model?.picture && _react.default.createElement(_image.Image, {
              src: image
            }), _react.default.createElement(_actions.CoverImageActions, {
              setFetching: setFetching
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 2943456583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyOrganization = EmptyOrganization;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyOrganization() {
            const {
              texts
            } = (0, _context.useManageOrganizationContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/organization/management/new",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 3160816020,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationForm = OrganizationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function OrganizationForm() {
            const [error, setError] = _react.default.useState('');
            const {
              texts,
              fetching,
              store
            } = (0, _context.useManageOrganizationContext)();
            const defaultValues = {
              name: store.model.name || '',
              description: store.model.description || ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const disabled = {
              disabled: fetching
            };
            (0, _hooks.useBinder)([store.model], () => {
              setValues({
                name: store.model.name || '',
                description: store.model.description || ''
              });
            });
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
            const handleSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                const formatString = inputString => inputString.trim().replace(/^\s*(.)/, (_, c) => c.toUpperCase());
                const data = await store.save({
                  name: formatString(values.name),
                  description: formatString(values.description)
                });
                _toast.toast.success('Organization published successfully');
                _routing.routing.pushState(`/organization/management/${data.id}`);
              } catch (e) {
                setError(e.message);
                _toast.toast.error('Error while publishing organization');
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement("p", null, texts.postTitle)), _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: "organization-form__container"
            }, _react.default.createElement("div", {
              className: "form-info__container"
            }, _react.default.createElement("div", {
              className: "cover-content__container full"
            }, _react.default.createElement("div", {
              className: "form-input__container"
            }, _react.default.createElement("p", {
              className: "h3"
            }, texts.labels.name), _react.default.createElement(_form.Input, {
              placeholder: texts.placeholder.name,
              value: values.name,
              name: "name",
              type: "text",
              onChange: handleChange,
              required: true
            })), _react.default.createElement("div", {
              className: "form-input__container"
            }, _react.default.createElement("p", {
              className: "h3"
            }, texts.labels.description), _react.default.createElement(_form.Textarea, {
              rows: 5,
              name: "description",
              value: values.description,
              placeholder: texts.placeholder.description,
              onChange: handleChange,
              required: true
            })))), _react.default.createElement("div", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts.actions.save))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/form/update
      ***********************************/

      ims.set('./views/form/update', {
        hash: 2778695545,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UpdateOrganizationForm = UpdateOrganizationForm;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _list = require("../list");
          var _icons = require("pragmate-ui/icons");
          var _coverImage = require("../cover-image");
          var _approvalList = require("../approval-list");
          /*bundle*/
          function UpdateOrganizationForm() {
            const {
              texts,
              fetching,
              store
            } = (0, _context.useManageOrganizationContext)();
            const defaultValues = {
              name: store.model.name || '',
              description: store.model.description || ''
            };
            const disabled = {
              disabled: fetching
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const [error, setError] = _react.default.useState('');
            const [isCopying, setIsCopying] = _react.default.useState(false);
            const copyToClipboard = async () => {
              try {
                if (isCopying) return;
                setIsCopying(true);
                try {
                  await navigator.clipboard.writeText(store.model?.join?.code);
                  _toast.toast.success('Text copied successfully');
                } catch (err) {
                  console.error('Error when copying to clipboard: ', err);
                }
                setTimeout(() => {
                  setIsCopying(false);
                }, 2000);
              } catch (err) {
                console.error('Error when copying to clipboard: ', err);
              }
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
            const handleSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                const formatString = inputString => inputString.trim().replace(/^\s*(.)/, (_, c) => c.toUpperCase());
                const data = await store.save({
                  name: formatString(values.name),
                  description: formatString(values.description)
                });
                _toast.toast.success('Organization published successfully');
                _routing.routing.pushState(`/organization/management/${data.id}`);
              } catch (e) {
                setError(e.message);
                _toast.toast.error('Error while publishing organization');
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: "organization-form__container"
            }, _react.default.createElement("div", {
              className: "form-info__container"
            }, _react.default.createElement("div", {
              className: "cover-content__container"
            }, _react.default.createElement("div", {
              className: "form-input__container"
            }, _react.default.createElement("p", {
              className: "h3"
            }, texts.labels.name), _react.default.createElement(_form.Input, {
              placeholder: texts.placeholder.name,
              value: values.name,
              name: "name",
              type: "text",
              onChange: handleChange,
              required: true
            })), _react.default.createElement("div", {
              className: "form-input__container"
            }, _react.default.createElement("p", {
              className: "h3"
            }, texts.labels.description), _react.default.createElement(_form.Textarea, {
              rows: 5,
              name: "description",
              value: values.description,
              placeholder: texts.placeholder.description,
              onChange: handleChange
            }))), _react.default.createElement("div", {
              className: "cover-add__container"
            }, _react.default.createElement(_coverImage.CoverImage, null), _react.default.createElement("div", {
              className: "copy-code__container"
            }, _react.default.createElement("div", {
              className: "top-code__container flex-container flex-space-between"
            }, _react.default.createElement("span", null, texts.orgCode), _react.default.createElement(_icons.IconButton, {
              title: texts.actions.copy,
              className: "copy__button",
              icon: 'copy-link',
              disabled: !store.model?.join?.code,
              onClick: copyToClipboard
            })), _react.default.createElement("div", {
              className: "bottom-code__container"
            }, _react.default.createElement("span", {
              className: "code__text"
            }, store.model?.join?.code || "Doesn't exist"))))), _react.default.createElement("div", {
              className: "actions-submit__container"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts.actions.save))), _react.default.createElement("div", {
              className: "list-info__container"
            }, _react.default.createElement(_list.PeopleList, {
              store: store,
              data: store.model?.people,
              labels: texts.list.admin,
              role: 'manager'
            }), _react.default.createElement(_list.PeopleList, {
              store: store,
              data: [],
              labels: texts.list.teachers,
              role: 'teacher'
            }), _react.default.createElement(_approvalList.ApprovalList, {
              data: [],
              labels: texts.list.pending
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 372034561,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./components/header");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("@aimpact/chat/shared/components");
          var _empty = require("./empty");
          var _form = require("./form");
          var _update = require("./form/update");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks2.useBinder)([store.model], () => {
              setFetching(store.model?.fetching);
            });
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const value = {
              store,
              fetching,
              texts
            };
            const cls = ` ${fetching ? 'is-fetching' : ''}`;
            const Control = store.params === 'new' ? _form.OrganizationForm : store.model?.name ? _update.UpdateOrganizationForm : _empty.EmptyOrganization;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ManageOrganizationContext.Provider, {
              value: value
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching
            }, _react.default.createElement("div", {
              className: "app-organization-creation-page"
            }, _react.default.createElement(Control, null)))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 1365317787,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _context = require("../context");
          function EmptyList({
            pending
          }) {
            const {
              texts
            } = (0, _context.useManageOrganizationContext)();
            const emptyText = pending ? texts.empty.labelList.replace('%action', `"${texts.actions.invite}"`) : texts.empty.pending;
            return _react.default.createElement("div", {
              className: "person-item__container flex-container flex-center"
            }, _react.default.createElement("span", {
              className: "p2"
            }, " ", emptyText));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 2241184754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PeopleList = PeopleList;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          var _empty = require("./empty");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          function PeopleList({
            data,
            labels,
            role,
            store
          }) {
            const {
              texts
            } = (0, _context.useManageOrganizationContext)();
            const defaultValues = {
              name: '',
              email: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const [show, setShow] = _react.default.useState(false);
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
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
            function handleClose() {
              setError('');
              setLoading(false);
              setValues(defaultValues);
              setShow(!show);
            }
            const handleSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await store.invite({
                ...values,
                role
              });
              if (!response.status) {
                setError(response.error);
                _toast.toast.success(error);
              }
              _toast.toast.success(texts.system.invite.success);
              handleClose();
            };
            function handleModal() {
              setShow(!show);
            }
            const {
              name,
              email
            } = values;
            const Control = data.length > 0 ? _list.List : _empty.EmptyList;
            const modalTitle = texts.modal.invite.title.replace('%role', labels.single);
            return _react.default.createElement("div", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("span", {
              className: "h4"
            }, labels.title), role && _react.default.createElement(_components.Button, {
              icon: "add",
              label: texts.actions.invite,
              className: "add",
              onClick: handleModal
            })), show && _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: handleModal
            }, _react.default.createElement("span", {
              className: "h4"
            }, modalTitle), _react.default.createElement(_form.Form, {
              className: "mt-15",
              onSubmit: handleSubmit
            }, _react.default.createElement(_form.Input, {
              label: "Name",
              type: "text",
              name: "name",
              value: name,
              onChange: handleChange,
              placeholder: "Input user name",
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: "Input user email",
              label: "Email",
              type: "email",
              name: "email",
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              label: "Submit"
            })))), _react.default.createElement(Control, {
              specs: {},
              items: data,
              control: _item.Item,
              pending: !!role
            }));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 4246614792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          function Item({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useManageOrganizationContext)();
            const [show, setShow] = _react.default.useState(false);
            const [selectRole, setSelectRole] = _react.default.useState(item.role || 'teacher');
            const [loading, setLoading] = _react.default.useState(false);
            const handleSubmit = async event => {
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
            const handleRoleChange = event => {
              setSelectRole(event.target.value);
            };
            function handleModal() {
              setShow(!show);
            }
            const options = [{
              value: 'teacher',
              label: texts.list.teachers.single
            }, {
              value: 'manager',
              label: texts.list.admin.single
            }];
            return _react.default.createElement("li", {
              key: item.id,
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, item?.photoUrl ? _react.default.createElement(_image.Image, {
              src: item?.photoUrl
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: 'user'
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("div", {
              className: "actions_buttons"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: handleModal
            }, texts.actions.edit), _react.default.createElement(_icons.IconButton, {
              icon: "moreVert",
              disabled: true,
              className: "circle"
            })), show && _react.default.createElement(_modal.Modal, {
              show: true,
              className: "personal-modal",
              onClose: handleModal
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("span", {
              className: "h4"
            }, texts.modal.edit.title), _react.default.createElement("p", {
              className: "p2"
            }, texts.modal.edit.info)), _react.default.createElement(_form.Select, {
              id: "selectRole",
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            }), _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: handleSubmit
            }, texts.actions.save))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/components/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/form/index",
        "from": "OrganizationForm",
        "name": "OrganizationForm"
      }, {
        "im": "./views/form/update",
        "from": "UpdateOrganizationForm",
        "name": "UpdateOrganizationForm"
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
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/components/header').Header : value);
        (require || prop === 'OrganizationForm') && _export("OrganizationForm", OrganizationForm = require ? require('./views/form/index').OrganizationForm : value);
        (require || prop === 'UpdateOrganizationForm') && _export("UpdateOrganizationForm", UpdateOrganizationForm = require ? require('./views/form/update').UpdateOrganizationForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImlkIiwic3BlY3MiLCJPcmdhbml6YXRpb24iLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJpbnZpdGUiLCJsb2ciLCJhcHByb3ZlIiwicmVzIiwicmVqZWN0IiwidXBkYXRlUm9sZSIsIl9yZWFjdCIsIl9saXN0IiwiX2VtcHR5IiwiX2l0ZW0iLCJBcHByb3ZhbExpc3QiLCJsYWJlbHMiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwicGVuZGluZyIsIl9pbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaWNvbnMiLCJfdG9hc3QiLCJfZm9ybSIsIml0ZW0iLCJ0ZXh0cyIsInVzZU1hbmFnZU9yZ2FuaXphdGlvbkNvbnRleHQiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInVzZVN0YXRlIiwiaGFuZGxlUm9sZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBcHByb3ZlIiwicHJldmVudERlZmF1bHQiLCJ1aWQiLCJyb2xlIiwidG9hc3QiLCJzdWNjZXNzIiwiaGFuZGxlUmVqZWN0Iiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsInRlYWNoZXJzIiwic2luZ2xlIiwiYWRtaW4iLCJrZXkiLCJwaG90b1VybCIsIkltYWdlIiwic3JjIiwiSWNvbiIsImljb24iLCJuYW1lIiwiU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwiSWNvbkJ1dHRvbiIsIl91aSIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiTWFuYWdlT3JnYW5pemF0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJzZXRGZXRjaGluZyIsImdlbmVyYXRlSW1hZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJJQ09OUyIsImFpU3RhcnMiLCJnZW5lcmF0ZSIsInVwbG9hZCIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiQ292ZXJJbWFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwidXNlQmluZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkVtcHR5T3JnYW5pemF0aW9uIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImNyZWF0ZSIsIl9yb3V0aW5nIiwiT3JnYW5pemF0aW9uRm9ybSIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtYXRTdHJpbmciLCJpbnB1dFN0cmluZyIsInRyaW0iLCJyZXBsYWNlIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtZXNzYWdlIiwiUGFnZVRpdGxlIiwicG9zdFRpdGxlIiwiRm9ybSIsIm9uU3VibWl0IiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwicm93cyIsIl9jb3ZlckltYWdlIiwiX2FwcHJvdmFsTGlzdCIsIlVwZGF0ZU9yZ2FuaXphdGlvbkZvcm0iLCJpc0NvcHlpbmciLCJzZXRJc0NvcHlpbmciLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJqb2luIiwiY29kZSIsImVyciIsInNldFRpbWVvdXQiLCJvcmdDb2RlIiwiY29weSIsIlBlb3BsZUxpc3QiLCJwZW9wbGUiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl91cGRhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJjbHMiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsIl9tb2RhbCIsImVtYWlsIiwic2V0U2hvdyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2xvc2UiLCJyZXNwb25zZSIsInN5c3RlbSIsImhhbmRsZU1vZGFsIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJvbkNsb3NlIiwiZWRpdCIsImluZm8iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hcHByb3ZhbC1saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hcHByb3ZhbC1saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS91cGRhdGUudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNVLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJELElBQUFjLEtB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