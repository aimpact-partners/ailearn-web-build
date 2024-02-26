System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, Header, OrganizationForm, UpdateOrganizationForm, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0024Config) {
      dependency_14 = _aimpactAilearnApp0024Config;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_16 = _beyondJsReact18Widgets104Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_19 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006Modal) {
      dependency_20 = _pragmateUi006Modal;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/toast', dependency_11], ['pragmate-ui/form', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['pragmate-ui/modal', dependency_20]]);
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
        hash: 4001011488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Organization', '/organizations/list'], ['Management', '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImlkIiwic3BlY3MiLCJPcmdhbml6YXRpb24iLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJpbnZpdGUiLCJsb2ciLCJhcHByb3ZlIiwicmVzIiwicmVqZWN0IiwidXBkYXRlUm9sZSIsIl9yZWFjdCIsIl9saXN0IiwiX2VtcHR5IiwiX2l0ZW0iLCJBcHByb3ZhbExpc3QiLCJsYWJlbHMiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwicGVuZGluZyIsIl9pbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaWNvbnMiLCJfdG9hc3QiLCJfZm9ybSIsIml0ZW0iLCJ0ZXh0cyIsInVzZU1hbmFnZU9yZ2FuaXphdGlvbkNvbnRleHQiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInVzZVN0YXRlIiwiaGFuZGxlUm9sZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBcHByb3ZlIiwicHJldmVudERlZmF1bHQiLCJ1aWQiLCJyb2xlIiwidG9hc3QiLCJzdWNjZXNzIiwiaGFuZGxlUmVqZWN0Iiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsInRlYWNoZXJzIiwic2luZ2xlIiwiYWRtaW4iLCJrZXkiLCJwaG90b1VybCIsIkltYWdlIiwic3JjIiwiSWNvbiIsImljb24iLCJuYW1lIiwiU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwiSWNvbkJ1dHRvbiIsIl91aSIsIl9jb25maWciLCJIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwiTWFuYWdlT3JnYW5pemF0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJzZXRGZXRjaGluZyIsImdlbmVyYXRlSW1hZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJJQ09OUyIsImFpU3RhcnMiLCJnZW5lcmF0ZSIsInVwbG9hZCIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiQ292ZXJJbWFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwidXNlQmluZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkVtcHR5T3JnYW5pemF0aW9uIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImNyZWF0ZSIsIl9yb3V0aW5nIiwiT3JnYW5pemF0aW9uRm9ybSIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtYXRTdHJpbmciLCJpbnB1dFN0cmluZyIsInRyaW0iLCJyZXBsYWNlIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtZXNzYWdlIiwiUGFnZVRpdGxlIiwicG9zdFRpdGxlIiwiRm9ybSIsIm9uU3VibWl0IiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwicm93cyIsIl9jb3ZlckltYWdlIiwiX2FwcHJvdmFsTGlzdCIsIlVwZGF0ZU9yZ2FuaXphdGlvbkZvcm0iLCJpc0NvcHlpbmciLCJzZXRJc0NvcHlpbmciLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJqb2luIiwiY29kZSIsImVyciIsInNldFRpbWVvdXQiLCJvcmdDb2RlIiwiY29weSIsIlBlb3BsZUxpc3QiLCJwZW9wbGUiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl91cGRhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJjbHMiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsIl9tb2RhbCIsImVtYWlsIiwic2V0U2hvdyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2xvc2UiLCJyZXNwb25zZSIsInN5c3RlbSIsImhhbmRsZU1vZGFsIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJvbkNsb3NlIiwiZWRpdCIsImluZm8iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hcHByb3ZhbC1saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hcHByb3ZhbC1saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS91cGRhdGUudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1UsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkQsSUFBQWMsS0FBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixNQUFBLEdBQUFsQixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRVyxNQUFBLENBQUFDLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLFVBQVcsR0FBYSxFQUFFO1lBQzFCLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUFQLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUssS0FBTSxHQUFHRyxTQUFTO2NBQ3ZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7WUFDbkI7WUFFQSxNQUFNYixJQUFJQSxDQUFDYyxFQUFFO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUNELEtBQUssR0FBRyxLQUFLO2dCQUNsQixJQUFJLENBQUMsQ0FBQUgsTUFBTyxHQUFHSSxFQUFFO2dCQUNqQixNQUFNQyxLQUFLLEdBQUdELEVBQUUsS0FBSyxLQUFLLEdBQUcsRUFBRSxHQUFHO2tCQUFFQTtnQkFBRSxDQUFFO2dCQUN4QyxJQUFJQSxFQUFFLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTCxLQUFNLEVBQUUsSUFBSSxDQUFDTCxJQUFJLEVBQUU7Z0JBRTVDLElBQUksQ0FBQyxDQUFBSyxLQUFNLEdBQUcsSUFBSUgsS0FBQSxDQUFBVSxZQUFZLENBQUNELEtBQUssQ0FBQztnQkFFckMsSUFBSUQsRUFBRSxLQUFLLEtBQUssRUFBRTtrQkFDakIsTUFBTUcsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1QsSUFBSSxDQUFDO29CQUFFYztrQkFBRSxDQUFFLENBQUM7O2VBRTVDLENBQUMsT0FBT0ksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTCxLQUFLLEdBQUcsSUFBSTs7WUFFbkI7WUFFQSxNQUFNUSxNQUFNQSxDQUFDUCxFQUFFO2NBQ2QsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ2EsVUFBVSxDQUFDQyxNQUFNLENBQUNULEVBQUUsQ0FBQztjQUNqQyxJQUFJLENBQUNVLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQSxNQUFNQyxJQUFJQSxDQUFDQyxNQUFNO2NBQ2hCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsSUFBSVosS0FBSztnQkFFVCxJQUFJLElBQUksQ0FBQyxDQUFBTCxNQUFPLEtBQUssS0FBSyxFQUFFO2tCQUMzQkssS0FBSyxHQUFHO29CQUFFLEdBQUdXLE1BQU07b0JBQUVaLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQUo7a0JBQU8sQ0FBRTtpQkFDdkMsTUFBTTtrQkFDTkssS0FBSyxHQUFHVyxNQUFNOztnQkFHZixNQUFNO2tCQUFFRSxNQUFNO2tCQUFFWDtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUNSLEtBQUssQ0FBQ2dCLElBQUksQ0FBQ1YsS0FBSyxDQUFDO2dCQUVyRCxJQUFJLENBQUNhLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQzs7Z0JBRzlDLE9BQU9aLElBQUk7ZUFDWCxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFRixDQUFDLENBQUM7ZUFDbkIsU0FBUztnQkFDVCxJQUFJLENBQUNTLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1HLE1BQU1BLENBQUNKLE1BQU07Y0FDbEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQlIsT0FBTyxDQUFDWSxHQUFHLENBQUNMLE1BQU0sRUFBRSxRQUFRLENBQUM7Z0JBQzdCLE1BQU07a0JBQUVFLE1BQU07a0JBQUVYO2dCQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQ1IsS0FBSyxDQUFDcUIsTUFBTSxDQUFDSixNQUFNLENBQUM7Z0JBQ3hEUCxPQUFPLENBQUNZLEdBQUcsQ0FBQ2QsSUFBSSxFQUFFLFFBQVEsQ0FBQztnQkFFM0IsSUFBSSxDQUFDVyxNQUFNLEVBQUU7a0JBQ1osTUFBTSxJQUFJQyxLQUFLLENBQUMscUJBQXFCLENBQUM7O2dCQUd2QyxPQUFPWixJQUFJO2VBQ1gsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUYsQ0FBQyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNSyxPQUFPQSxDQUFDTixNQUFNO2NBQ25CLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDeEIsS0FBSyxDQUFDdUIsT0FBTyxDQUFDTixNQUFNLENBQUM7Z0JBRTVDLElBQUksQ0FBQ08sR0FBRyxDQUFDTCxNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztnQkFHdkMsT0FBT0ksR0FBRztlQUNWLENBQUMsT0FBT2YsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNTyxNQUFNQSxDQUFDUixNQUFNO2NBQ2xCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDeEIsS0FBSyxDQUFDeUIsTUFBTSxDQUFDUixNQUFNLENBQUM7Z0JBQzNDUCxPQUFPLENBQUNZLEdBQUcsQ0FBQ0UsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFFMUI7Z0JBQ0E7Z0JBQ0E7Z0JBRUEsT0FBT0EsR0FBRztlQUNWLENBQUMsT0FBT2YsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUVGLENBQUMsQ0FBQztlQUNuQixTQUFTO2dCQUNULElBQUksQ0FBQ1MsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTVEsVUFBVUEsQ0FBQ1QsTUFBTTtjQUN0QixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1NLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQ3hCLEtBQUssQ0FBQzBCLFVBQVUsQ0FBQ1QsTUFBTSxDQUFDO2dCQUUvQztnQkFDQTtnQkFDQTtnQkFFQSxPQUFPTyxHQUFHO2VBQ1YsQ0FBQyxPQUFPZixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNTLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQXRCLE9BQUEsQ0FBQVQsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hKRCxJQUFBd0MsTUFBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFnRCxLQUFBLEdBQUFoRCxPQUFBO1VBQ0EsSUFBQWlELE1BQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBa0QsS0FBQSxHQUFBbEQsT0FBQTtVQUVNLFNBQVVtRCxZQUFZQSxDQUFDO1lBQUV2QixJQUFJO1lBQUV3QjtVQUFNLENBQThEO1lBQ3hHLE1BQU1DLE9BQU8sR0FBR3pCLElBQUksQ0FBQzBCLE1BQU0sR0FBRyxDQUFDLEdBQUdOLEtBQUEsQ0FBQU8sSUFBSSxHQUFHTixNQUFBLENBQUFPLFNBQVM7WUFFbEQsT0FDQ1QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFJLEdBQUVQLE1BQU0sQ0FBQ1EsS0FBSyxDQUFRLENBQ3JDLEVBRU5iLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNMLE9BQU87Y0FBQzNCLEtBQUssRUFBRSxFQUFFO2NBQUVtQyxLQUFLLEVBQUVqQyxJQUFJO2NBQUVrQyxPQUFPLEVBQUVaLEtBQUEsQ0FBQWEsSUFBSTtjQUFFQyxPQUFPLEVBQUVwQyxJQUFJLENBQUMwQixNQUFNLEdBQUc7WUFBQyxFQUFJLENBQ3ZFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUFQLE1BQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBaUUsTUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUFrRSxXQUFBLEdBQUFsRSxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBb0UsTUFBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUFxRSxNQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQXNFLEtBQUEsR0FBQXRFLE9BQUE7VUFFTSxTQUFVK0QsSUFBSUEsQ0FBQztZQUFFUTtVQUFJLENBQUU7WUFDNUIsTUFBTTtjQUFFQyxLQUFLO2NBQUVuRTtZQUFLLENBQUUsR0FBRyxJQUFBOEQsUUFBQSxDQUFBTSw0QkFBNEIsR0FBRTtZQUN2RCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc1QixNQUFBLENBQUFVLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFFN0QsTUFBTUMsZ0JBQWdCLEdBQUdDLEtBQUssSUFBRztjQUNoQ0gsYUFBYSxDQUFDRyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxNQUFNQyxhQUFhLEdBQUcsTUFBT0gsS0FBSyxJQUFtQjtjQUNwREEsS0FBSyxDQUFDSSxjQUFjLEVBQUU7Y0FDdEIsSUFBSTtnQkFDSCxNQUFNN0UsS0FBSyxDQUFDc0MsT0FBTyxDQUFDO2tCQUNuQndDLEdBQUcsRUFBRVosSUFBSSxDQUFDWSxHQUFHO2tCQUNiQyxJQUFJLEVBQUVWO2lCQUNOLENBQUM7Z0JBQ0ZMLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLDJCQUEyQixDQUFDO2VBQzFDLENBQUMsT0FBT3pELENBQUMsRUFBRTtnQkFDWHdDLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ3RELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7WUFFckMsQ0FBQztZQUVELE1BQU13RCxZQUFZLEdBQUcsTUFBT1QsS0FBSyxJQUFtQjtjQUNuREEsS0FBSyxDQUFDSSxjQUFjLEVBQUU7Y0FDdEIsSUFBSTtnQkFDSCxNQUFNN0UsS0FBSyxDQUFDd0MsTUFBTSxDQUFDO2tCQUNsQnNDLEdBQUcsRUFBRVosSUFBSSxDQUFDWSxHQUFHO2tCQUNiQyxJQUFJLEVBQUVWO2lCQUNOLENBQUM7Z0JBQ0ZMLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLDJCQUEyQixDQUFDO2VBQzFDLENBQUMsT0FBT3pELENBQUMsRUFBRTtnQkFDWHdDLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ3RELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7WUFFckMsQ0FBQztZQUVELE1BQU15RCxPQUFPLEdBQUcsQ0FDZjtjQUFFUixLQUFLLEVBQUUsU0FBUztjQUFFUyxLQUFLLEVBQUVqQixLQUFLLENBQUNrQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0M7WUFBTSxDQUFFLEVBQ3ZEO2NBQUVaLEtBQUssRUFBRSxTQUFTO2NBQUVTLEtBQUssRUFBRWpCLEtBQUssQ0FBQ2tCLElBQUksQ0FBQ0csS0FBSyxDQUFDRDtZQUFNLENBQUUsQ0FDcEQ7WUFFRCxPQUNDN0MsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBSW9DLEdBQUcsRUFBRXZCLElBQUksQ0FBQzlDLEVBQUU7Y0FBRWtDLFNBQVMsRUFBQztZQUF3QixHQUNuRFosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW9CLEdBQ2pDWSxJQUFJLEVBQUV3QixRQUFRLEdBQUdoRCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUErQixLQUFLO2NBQUNDLEdBQUcsRUFBRTFCLElBQUksRUFBRXdCO1lBQVEsRUFBSSxHQUFHaEQsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBOEIsSUFBSTtjQUFDdkMsU0FBUyxFQUFDLElBQUk7Y0FBQ3dDLElBQUksRUFBRTtZQUFNLEVBQUksRUFDeEZwRCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFWSxJQUFJLENBQUM2QixJQUFJLENBQVEsQ0FDbEMsRUFFTnJELE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQlosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUErQixNQUFNO2NBQUM1RSxFQUFFLEVBQUMsWUFBWTtjQUFDK0QsT0FBTyxFQUFFQSxPQUFPO2NBQUVjLFlBQVksRUFBRTVCLFVBQVU7Y0FBRTZCLFFBQVEsRUFBRTFCO1lBQWdCLEVBQUksQ0FDN0YsRUFDTjlCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQXNDLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFekIsYUFBYTtjQUFFMEIsUUFBUTtjQUFDQyxRQUFRLEVBQUU7WUFBSyxHQUN4RXBDLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ2xFLE9BQU8sQ0FDZCxFQUNUSSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxXQUFBLENBQUFzQyxNQUFNO2NBQUNDLE9BQU8sRUFBQyxPQUFPO2NBQUNHLFFBQVEsRUFBRSxJQUFJO2NBQUVGLE9BQU8sRUFBRW5CO1lBQVksR0FDM0RmLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ2hFLE1BQU0sQ0FDYixFQUNURSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVSxNQUFBLENBQUEwQyxVQUFVO2NBQUNYLElBQUksRUFBQyxVQUFVO2NBQUN4QyxTQUFTLEVBQUM7WUFBUSxFQUFHLENBQzVDLENBQ0Y7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRUEsSUFBQW9ELEdBQUEsR0FBQS9HLE9BQUE7VUFDQSxJQUFBK0MsTUFBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFnSCxPQUFBLEdBQUFoSCxPQUFBO1VBQ087VUFBVSxTQUFVaUgsTUFBTUEsQ0FBQTtZQUNoQyxPQUNDbEUsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsa0JBQ0NYLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNxRCxHQUFBLENBQUFHLFVBQVU7Y0FDVkMsVUFBVSxFQUFFLENBQ1gsQ0FBQ0gsT0FBQSxDQUFBdkQsT0FBTSxDQUFDcEMsTUFBTSxDQUFDK0YsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUM3QixDQUFDLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxFQUN2QyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7WUFDbEIsRUFDQSxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQXJFLE1BQUEsR0FBQS9DLE9BQUE7VUFTTyxNQUFNcUgseUJBQXlCLEdBQUFyRyxPQUFBLENBQUFxRyx5QkFBQSxHQUFHdEUsTUFBQSxDQUFBVSxPQUFLLENBQUM2RCxhQUFhLENBQUMsRUFBeUIsQ0FBQztVQUNoRixNQUFNN0MsNEJBQTRCLEdBQUdBLENBQUEsS0FBTTFCLE1BQUEsQ0FBQVUsT0FBSyxDQUFDOEQsVUFBVSxDQUFDRix5QkFBeUIsQ0FBQztVQUFDckcsT0FBQSxDQUFBeUQsNEJBQUEsR0FBQUEsNEJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVjlGLElBQUExQixNQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQWtFLFdBQUEsR0FBQWxFLE9BQUE7VUFDQSxJQUFBb0UsTUFBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUFtRSxRQUFBLEdBQUFuRSxPQUFBO1VBRU0sU0FBVXdILGlCQUFpQkEsQ0FBQztZQUFFQztVQUFXLENBQUU7WUFDaEQsTUFBTTtjQUFFakQsS0FBSztjQUFFbkU7WUFBSyxDQUFFLEdBQUcsSUFBQThELFFBQUEsQ0FBQU0sNEJBQTRCLEdBQUU7WUFFdkQsTUFBTWlELGFBQWEsR0FBRyxNQUFNNUMsS0FBSyxJQUFHO2NBQ25DQSxLQUFLLENBQUNJLGNBQWMsRUFBRTtjQUN0QnVDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsTUFBTXBILEtBQUssQ0FBQ2UsS0FBSyxDQUFDdUcsZUFBZSxFQUFFO2NBQ25DRixXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFFRCxPQUNDMUUsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQVMsR0FDMUJaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQXNDLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0csUUFBUTtjQUFDRixPQUFPLEVBQUVnQixhQUFhO2NBQUVmLFFBQVE7Y0FBQ1IsSUFBSSxFQUFFL0IsTUFBQSxDQUFBd0QsS0FBSyxDQUFDQztZQUFPLEdBQ3JGckQsS0FBSyxDQUFDcUMsT0FBTyxDQUFDaUIsUUFBUSxDQUNmLEVBQ1QvRSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxXQUFBLENBQUFzQyxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNHLFFBQVE7Y0FBQ2pELFNBQVMsRUFBQyxRQUFRO2NBQUN3QyxJQUFJLEVBQUU7WUFBZ0IsR0FDMUUzQixLQUFLLENBQUNxQyxPQUFPLENBQUNrQixNQUFNLENBQ2IsQ0FDRDtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBaEYsTUFBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFnSSxRQUFBLEdBQUFoSSxPQUFBO1VBQ0EsSUFBQStHLEdBQUEsR0FBQS9HLE9BQUE7VUFDQSxJQUFBaUksTUFBQSxHQUFBakksT0FBQTtVQUNBLElBQUFpRSxNQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFFTSxTQUFVa0ksVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUU3SDtZQUFLLENBQUUsR0FBRyxJQUFBOEQsUUFBQSxDQUFBTSw0QkFBNEIsR0FBRTtZQUVoRCxNQUFNLENBQUMwRCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHckYsTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUN2RSxLQUFLLENBQUNlLEtBQUssRUFBRWlILE9BQU8sQ0FBQztZQUM5RCxNQUFNLENBQUMvRixRQUFRLEVBQUVtRixXQUFXLENBQUMsR0FBRzFFLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxJQUFBcUQsTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQ2pJLEtBQUssQ0FBQyxFQUFFLE1BQU0rSCxRQUFRLENBQUMvSCxLQUFLLENBQUNlLEtBQUssRUFBRWlILE9BQU8sQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1lBRTNFLE9BQ0N0RixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDckN0RCxLQUFLLENBQUNlLEtBQUssRUFBRWlILE9BQU8sSUFBSXRGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQStCLEtBQUs7Y0FBQ0MsR0FBRyxFQUFFa0M7WUFBSyxFQUFJLEVBQzlDcEYsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLFFBQUEsQ0FBQVIsaUJBQWlCO2NBQUNDLFdBQVcsRUFBRUE7WUFBVyxFQUFJLEVBQy9DMUUsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FELEdBQUEsQ0FBQXdCLGdCQUFnQjtjQUFDakcsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDbkM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQVMsTUFBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFrRSxXQUFBLEdBQUFsRSxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBK0csR0FBQSxHQUFBL0csT0FBQTtVQUVNLFNBQVV3SSxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFaEU7WUFBSyxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSw0QkFBNEIsR0FBRTtZQUNoRCxPQUNDMUIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FELEdBQUEsQ0FBQTBCLFNBQVM7Y0FBQ0MsSUFBSSxFQUFFbEUsS0FBSyxDQUFDbUUsS0FBSyxDQUFDL0UsS0FBSztjQUFFZ0YsV0FBVyxFQUFFcEUsS0FBSyxDQUFDbUUsS0FBSyxDQUFDQyxXQUFXO2NBQUV6QyxJQUFJLEVBQUM7WUFBTSxHQUNwRnBELE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFvQyxHQUNsRFosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsV0FBQSxDQUFBMkUsSUFBSTtjQUFDQyxJQUFJLEVBQUMsOEJBQThCO2NBQUNuRixTQUFTLEVBQUM7WUFBc0IsR0FDeEVhLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQ2tDLE1BQU0sQ0FDZixDQUNGLENBQ0s7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQWhHLE1BQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBc0UsS0FBQSxHQUFBdEUsT0FBQTtVQUVBLElBQUFrRSxXQUFBLEdBQUFsRSxPQUFBO1VBQ0EsSUFBQWlJLE1BQUEsR0FBQWpJLE9BQUE7VUFDQSxJQUFBcUUsTUFBQSxHQUFBckUsT0FBQTtVQUNBLElBQUFnSixRQUFBLEdBQUFoSixPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBK0csR0FBQSxHQUFBL0csT0FBQTtVQUVPO1VBQVUsU0FBVWlKLGdCQUFnQkEsQ0FBQTtZQUMxQyxNQUFNLENBQUNsSCxLQUFLLEVBQUVtSCxRQUFRLENBQUMsR0FBR25HLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNO2NBQUVKLEtBQUs7Y0FBRWxDLFFBQVE7Y0FBRWpDO1lBQUssQ0FBRSxHQUFHLElBQUE4RCxRQUFBLENBQUFNLDRCQUE0QixHQUFFO1lBQ2pFLE1BQU0wRSxhQUFhLEdBQUc7Y0FBRS9DLElBQUksRUFBRS9GLEtBQUssQ0FBQ2UsS0FBSyxDQUFDZ0YsSUFBSSxJQUFJLEVBQUU7Y0FBRXdDLFdBQVcsRUFBRXZJLEtBQUssQ0FBQ2UsS0FBSyxDQUFDd0gsV0FBVyxJQUFJO1lBQUUsQ0FBRTtZQUNsRyxNQUFNLENBQUN2RyxNQUFNLEVBQUUrRyxTQUFTLENBQUMsR0FBR3JHLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDdUUsYUFBYSxDQUFDO1lBQ3pELE1BQU12QyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFdEU7WUFBUSxDQUFFO1lBRXZDLElBQUEyRixNQUFBLENBQUFLLFNBQVMsRUFBQyxDQUFDakksS0FBSyxDQUFDZSxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQzdCZ0ksU0FBUyxDQUFDO2dCQUFFaEQsSUFBSSxFQUFFL0YsS0FBSyxDQUFDZSxLQUFLLENBQUNnRixJQUFJLElBQUksRUFBRTtnQkFBRXdDLFdBQVcsRUFBRXZJLEtBQUssQ0FBQ2UsS0FBSyxDQUFDd0gsV0FBVyxJQUFJO2NBQUUsQ0FBRSxDQUFDO1lBQ3hGLENBQUMsQ0FBQztZQUVGLE1BQU1TLFlBQVksR0FBR0EsQ0FBQztjQUFFQyxhQUFhLEVBQUV2RTtZQUFNLENBQUUsS0FBSTtjQUNsRCxNQUFNd0UsWUFBWSxHQUFHO2dCQUFFLEdBQUdsSDtjQUFNLENBQUU7Y0FDbENrSCxZQUFZLENBQUN4RSxNQUFNLENBQUNxQixJQUFJLENBQUMsR0FBR3JCLE1BQU0sQ0FBQ0MsS0FBSztjQUN4Q29FLFNBQVMsQ0FBQ0csWUFBWSxDQUFDO2NBQ3ZCTCxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2IsQ0FBQztZQUVELE1BQU1NLFlBQVksR0FBRyxNQUFPMUUsS0FBSyxJQUFtQjtjQUNuREEsS0FBSyxDQUFDSSxjQUFjLEVBQUU7Y0FDdEJKLEtBQUssQ0FBQzJFLGVBQWUsRUFBRTtjQUN2QixJQUFJO2dCQUNILE1BQU1DLFlBQVksR0FBSUMsV0FBbUIsSUFDeENBLFdBQVcsQ0FBQ0MsSUFBSSxFQUFFLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUtBLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLENBQUM7Z0JBRWpFLE1BQU1wSSxJQUFJLEdBQUcsTUFBTXZCLEtBQUssQ0FBQytCLElBQUksQ0FBQztrQkFDN0JnRSxJQUFJLEVBQUVzRCxZQUFZLENBQUNySCxNQUFNLENBQUMrRCxJQUFJLENBQUM7a0JBQy9Cd0MsV0FBVyxFQUFFYyxZQUFZLENBQUNySCxNQUFNLENBQUN1RyxXQUFXO2lCQUM1QyxDQUFDO2dCQUNGdkUsTUFBQSxDQUFBZ0IsS0FBSyxDQUFDQyxPQUFPLENBQUMscUNBQXFDLENBQUM7Z0JBQ3BEMEQsUUFBQSxDQUFBaUIsT0FBTyxDQUFDQyxTQUFTLENBQUMsNEJBQTRCdEksSUFBSSxDQUFDSCxFQUFFLEVBQUUsQ0FBQztlQUN4RCxDQUFDLE9BQU9JLENBQUMsRUFBRTtnQkFDWHFILFFBQVEsQ0FBQ3JILENBQUMsQ0FBQ3NJLE9BQU8sQ0FBQztnQkFDbkI5RixNQUFBLENBQUFnQixLQUFLLENBQUN0RCxLQUFLLENBQUMscUNBQXFDLENBQUM7O1lBRXBELENBQUM7WUFFRCxPQUNDZ0IsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsY0FDQ1gsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FELEdBQUEsQ0FBQXFELFNBQVM7Y0FBQ3hHLEtBQUssRUFBRVksS0FBSyxDQUFDWjtZQUFLLEdBQzVCYixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxZQUFJYyxLQUFLLENBQUM2RixTQUFTLENBQUssQ0FDYixFQUNadEgsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBZ0csSUFBSTtjQUFDQyxRQUFRLEVBQUVmLFlBQVk7Y0FBRTdGLFNBQVMsRUFBQztZQUE4QixHQUNyRVosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0IsR0FDN0NaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNyQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQUksR0FBRWEsS0FBSyxDQUFDcEIsTUFBTSxDQUFDZ0QsSUFBSSxDQUFLLEVBQ3pDckQsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBa0csS0FBSztjQUNMQyxXQUFXLEVBQUVqRyxLQUFLLENBQUNpRyxXQUFXLENBQUNyRSxJQUFJO2NBQ25DcEIsS0FBSyxFQUFFM0MsTUFBTSxDQUFDK0QsSUFBSTtjQUNsQkEsSUFBSSxFQUFDLE1BQU07Y0FDWHNFLElBQUksRUFBQyxNQUFNO2NBQ1huRSxRQUFRLEVBQUU4QyxZQUFZO2NBQ3RCc0IsUUFBUTtZQUFBLEVBQ1AsQ0FDRyxFQUNONUgsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBSSxHQUFFYSxLQUFLLENBQUNwQixNQUFNLENBQUN3RixXQUFXLENBQUssRUFDaEQ3RixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUFzRyxRQUFRO2NBQ1JDLElBQUksRUFBRSxDQUFDO2NBQ1B6RSxJQUFJLEVBQUMsYUFBYTtjQUNsQnBCLEtBQUssRUFBRTNDLE1BQU0sQ0FBQ3VHLFdBQVc7Y0FDekI2QixXQUFXLEVBQUVqRyxLQUFLLENBQUNpRyxXQUFXLENBQUM3QixXQUFXO2NBQzFDckMsUUFBUSxFQUFFOEMsWUFBWTtjQUN0QnNCLFFBQVE7WUFBQSxFQUNQLENBQ0csQ0FDRCxDQUNELEVBQ041SCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0IsR0FDN0NaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQXNDLE1BQU07Y0FBQ2xFLFFBQVEsRUFBRWpDLEtBQUssQ0FBQ2lDLFFBQVE7Y0FBQSxHQUFNc0UsUUFBUTtjQUFFSCxPQUFPLEVBQUMsU0FBUztjQUFDaUUsSUFBSSxFQUFDO1lBQVEsR0FDN0VsRyxLQUFLLENBQUNxQyxPQUFPLENBQUN6RSxJQUFJLENBQ1gsQ0FDSixDQUNBLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RkEsSUFBQVcsTUFBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFtRSxRQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQXNFLEtBQUEsR0FBQXRFLE9BQUE7VUFFQSxJQUFBa0UsV0FBQSxHQUFBbEUsT0FBQTtVQUNBLElBQUFxRSxNQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQWdKLFFBQUEsR0FBQWhKLE9BQUE7VUFDQSxJQUFBZ0QsS0FBQSxHQUFBaEQsT0FBQTtVQUNBLElBQUFvRSxNQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQThLLFdBQUEsR0FBQTlLLE9BQUE7VUFDQSxJQUFBK0ssYUFBQSxHQUFBL0ssT0FBQTtVQUVPO1VBQVUsU0FBVWdMLHNCQUFzQkEsQ0FBQTtZQUNoRCxNQUFNO2NBQUV4RyxLQUFLO2NBQUVsQyxRQUFRO2NBQUVqQztZQUFLLENBQUUsR0FBRyxJQUFBOEQsUUFBQSxDQUFBTSw0QkFBNEIsR0FBRTtZQUNqRSxNQUFNMEUsYUFBYSxHQUFHO2NBQUUvQyxJQUFJLEVBQUUvRixLQUFLLENBQUNlLEtBQUssQ0FBQ2dGLElBQUksSUFBSSxFQUFFO2NBQUV3QyxXQUFXLEVBQUV2SSxLQUFLLENBQUNlLEtBQUssQ0FBQ3dILFdBQVcsSUFBSTtZQUFFLENBQUU7WUFDbEcsTUFBTWhDLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUV0RTtZQUFRLENBQUU7WUFDdkMsTUFBTSxDQUFDRCxNQUFNLEVBQUUrRyxTQUFTLENBQUMsR0FBR3JHLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDdUUsYUFBYSxDQUFDO1lBQ3pELE1BQU0sQ0FBQ3BILEtBQUssRUFBRW1ILFFBQVEsQ0FBQyxHQUFHbkcsTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU0sQ0FBQ3FHLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUduSSxNQUFBLENBQUFVLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkQsTUFBTXVHLGVBQWUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDbEMsSUFBSTtnQkFDSCxJQUFJRixTQUFTLEVBQUU7Z0JBRWZDLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBRWxCLElBQUk7a0JBQ0gsTUFBTUUsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ2pMLEtBQUssQ0FBQ2UsS0FBSyxFQUFFbUssSUFBSSxFQUFFQyxJQUFJLENBQUM7a0JBQzVEbkgsTUFBQSxDQUFBZ0IsS0FBSyxDQUFDQyxPQUFPLENBQUMsMEJBQTBCLENBQUM7aUJBQ3pDLENBQUMsT0FBT21HLEdBQUcsRUFBRTtrQkFDYjNKLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLG1DQUFtQyxFQUFFMEosR0FBRyxDQUFDOztnQkFHeERDLFVBQVUsQ0FBQyxNQUFLO2tCQUNmUixZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDO2VBQ1IsQ0FBQyxPQUFPTyxHQUFHLEVBQUU7Z0JBQ2IzSixPQUFPLENBQUNDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRTBKLEdBQUcsQ0FBQzs7WUFFekQsQ0FBQztZQUVELE1BQU1wQyxZQUFZLEdBQUdBLENBQUM7Y0FBRUMsYUFBYSxFQUFFdkU7WUFBTSxDQUFFLEtBQUk7Y0FDbEQsTUFBTXdFLFlBQVksR0FBRztnQkFBRSxHQUFHbEg7Y0FBTSxDQUFFO2NBQ2xDa0gsWUFBWSxDQUFDeEUsTUFBTSxDQUFDcUIsSUFBSSxDQUFDLEdBQUdyQixNQUFNLENBQUNDLEtBQUs7Y0FDeENvRSxTQUFTLENBQUNHLFlBQVksQ0FBQztjQUN2QkwsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNTSxZQUFZLEdBQUcsTUFBTzFFLEtBQUssSUFBbUI7Y0FDbkRBLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO2NBQ3RCSixLQUFLLENBQUMyRSxlQUFlLEVBQUU7Y0FDdkIsSUFBSTtnQkFDSCxNQUFNQyxZQUFZLEdBQUlDLFdBQW1CLElBQ3hDQSxXQUFXLENBQUNDLElBQUksRUFBRSxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFDLENBQUNDLFdBQVcsRUFBRSxDQUFDO2dCQUVqRSxNQUFNcEksSUFBSSxHQUFHLE1BQU12QixLQUFLLENBQUMrQixJQUFJLENBQUM7a0JBQzdCZ0UsSUFBSSxFQUFFc0QsWUFBWSxDQUFDckgsTUFBTSxDQUFDK0QsSUFBSSxDQUFDO2tCQUMvQndDLFdBQVcsRUFBRWMsWUFBWSxDQUFDckgsTUFBTSxDQUFDdUcsV0FBVztpQkFDNUMsQ0FBQztnQkFDRnZFLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLHFDQUFxQyxDQUFDO2dCQUNwRDBELFFBQUEsQ0FBQWlCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLDRCQUE0QnRJLElBQUksQ0FBQ0gsRUFBRSxFQUFFLENBQUM7ZUFDeEQsQ0FBQyxPQUFPSSxDQUFDLEVBQUU7Z0JBQ1hxSCxRQUFRLENBQUNySCxDQUFDLENBQUNzSSxPQUFPLENBQUM7Z0JBQ25COUYsTUFBQSxDQUFBZ0IsS0FBSyxDQUFDdEQsS0FBSyxDQUFDLHFDQUFxQyxDQUFDOztZQUVwRCxDQUFDO1lBRUQsT0FDQ2dCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQWdHLElBQUk7Y0FBQ0MsUUFBUSxFQUFFZixZQUFZO2NBQUU3RixTQUFTLEVBQUM7WUFBOEIsR0FDckVaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFzQixHQUNwQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUIsR0FDckNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFJLEdBQUVhLEtBQUssQ0FBQ3BCLE1BQU0sQ0FBQ2dELElBQUksQ0FBSyxFQUN6Q3JELE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQWtHLEtBQUs7Y0FDTEMsV0FBVyxFQUFFakcsS0FBSyxDQUFDaUcsV0FBVyxDQUFDckUsSUFBSTtjQUNuQ3BCLEtBQUssRUFBRTNDLE1BQU0sQ0FBQytELElBQUk7Y0FDbEJBLElBQUksRUFBQyxNQUFNO2NBQ1hzRSxJQUFJLEVBQUMsTUFBTTtjQUNYbkUsUUFBUSxFQUFFOEMsWUFBWTtjQUN0QnNCLFFBQVE7WUFBQSxFQUNQLENBQ0csRUFDTjVILE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNyQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQUksR0FBRWEsS0FBSyxDQUFDcEIsTUFBTSxDQUFDd0YsV0FBVyxDQUFLLEVBQ2hEN0YsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBc0csUUFBUTtjQUNSQyxJQUFJLEVBQUUsQ0FBQztjQUNQekUsSUFBSSxFQUFDLGFBQWE7Y0FDbEJwQixLQUFLLEVBQUUzQyxNQUFNLENBQUN1RyxXQUFXO2NBQ3pCNkIsV0FBVyxFQUFFakcsS0FBSyxDQUFDaUcsV0FBVyxDQUFDN0IsV0FBVztjQUMxQ3JDLFFBQVEsRUFBRThDO1lBQVksRUFDckIsQ0FDRyxDQUNELEVBQ050RyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBc0IsR0FDcENaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNvSCxXQUFBLENBQUE1QyxVQUFVLE9BQUcsRUFDZG5GLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFzQixHQUNwQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXVELEdBQ3JFWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxlQUFPYyxLQUFLLENBQUNtSCxPQUFPLENBQVEsRUFDNUI1SSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVSxNQUFBLENBQUEwQyxVQUFVO2NBQ1ZsRCxLQUFLLEVBQUVZLEtBQUssQ0FBQ3FDLE9BQU8sQ0FBQytFLElBQUk7Y0FDekJqSSxTQUFTLEVBQUMsY0FBYztjQUN4QndDLElBQUksRUFBRSxXQUFXO2NBQ2pCUyxRQUFRLEVBQUUsQ0FBQ3ZHLEtBQUssQ0FBQ2UsS0FBSyxFQUFFbUssSUFBSSxFQUFFQyxJQUFJO2NBQ2xDOUUsT0FBTyxFQUFFeUU7WUFBZSxFQUN2QixDQUNHLEVBQ05wSSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDdENaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFZLEdBQUV0RCxLQUFLLENBQUNlLEtBQUssRUFBRW1LLElBQUksRUFBRUMsSUFBSSxJQUFJLGVBQWUsQ0FBUSxDQUMzRSxDQUNELENBQ0QsQ0FDRCxFQUVOekksTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxXQUFBLENBQUFzQyxNQUFNO2NBQUNsRSxRQUFRLEVBQUVqQyxLQUFLLENBQUNpQyxRQUFRO2NBQUEsR0FBTXNFLFFBQVE7Y0FBRUgsT0FBTyxFQUFDLFNBQVM7Y0FBQ2lFLElBQUksRUFBQztZQUFRLEdBQzdFbEcsS0FBSyxDQUFDcUMsT0FBTyxDQUFDekUsSUFBSSxDQUNYLENBQ0osQ0FDQSxFQUNQVyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBc0IsR0FDcENaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNWLEtBQUEsQ0FBQTZJLFVBQVU7Y0FBQ3hMLEtBQUssRUFBRUEsS0FBSztjQUFFdUIsSUFBSSxFQUFFdkIsS0FBSyxDQUFDZSxLQUFLLEVBQUUwSyxNQUFNO2NBQUUxSSxNQUFNLEVBQUVvQixLQUFLLENBQUNrQixJQUFJLENBQUNHLEtBQUs7Y0FBRVQsSUFBSSxFQUFFO1lBQVMsRUFBSSxFQUNsR3JDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNWLEtBQUEsQ0FBQTZJLFVBQVU7Y0FBQ3hMLEtBQUssRUFBRUEsS0FBSztjQUFFdUIsSUFBSSxFQUFFLEVBQUU7Y0FBRXdCLE1BQU0sRUFBRW9CLEtBQUssQ0FBQ2tCLElBQUksQ0FBQ0MsUUFBUTtjQUFFUCxJQUFJLEVBQUU7WUFBUyxFQUFJLEVBQ3BGckMsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FILGFBQUEsQ0FBQTVILFlBQVk7Y0FBQ3ZCLElBQUksRUFBRSxFQUFFO2NBQUV3QixNQUFNLEVBQUVvQixLQUFLLENBQUNrQixJQUFJLENBQUMxQjtZQUFPLEVBQUksQ0FDakQsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9IQSxJQUFBakIsTUFBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUErRyxHQUFBLEdBQUEvRyxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBaUksTUFBQSxHQUFBakksT0FBQTtVQUNBLElBQUErTCxlQUFBLEdBQUEvTCxPQUFBO1VBQ0EsSUFBQWdNLE9BQUEsR0FBQWhNLE9BQUE7VUFFQSxJQUFBaU0sT0FBQSxHQUFBak0sT0FBQTtVQUNBLElBQUFrRSxXQUFBLEdBQUFsRSxPQUFBO1VBQ0EsSUFBQWlELE1BQUEsR0FBQWpELE9BQUE7VUFDQSxJQUFBc0UsS0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUFrTSxPQUFBLEdBQUFsTSxPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDOEwsVUFBVSxFQUFFM0gsS0FBSyxDQUFDLEdBQUcsSUFBQXlELE1BQUEsQ0FBQW1FLFFBQVEsRUFBQ0wsZUFBQSxDQUFBTSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNoSyxRQUFRLEVBQUVtRixXQUFXLENBQUMsR0FBRzFFLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDdkUsS0FBSyxDQUFDaUMsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ2QsS0FBSyxFQUFFK0ssUUFBUSxDQUFDLEdBQUd4SixNQUFBLENBQUFVLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQ3ZFLEtBQUssQ0FBQ21CLEtBQUssQ0FBQztZQUVyRCxJQUFBeUssT0FBQSxDQUFBM0QsU0FBUyxFQUFDLENBQUNqSSxLQUFLLENBQUNlLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDN0JxRyxXQUFXLENBQUNwSCxLQUFLLENBQUNlLEtBQUssRUFBRWtCLFFBQVEsQ0FBQztZQUNuQyxDQUFDLENBQUM7WUFFRixJQUFBMkosT0FBQSxDQUFBM0QsU0FBUyxFQUFDLENBQUNqSSxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCa00sUUFBUSxDQUFDbE0sS0FBSyxDQUFDbUIsS0FBSyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ0EsS0FBSyxJQUFJLENBQUMySyxVQUFVLEVBQUUsT0FBT3BKLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQXNJLGFBQWEsT0FBRztZQUVuRCxNQUFNeEgsS0FBSyxHQUFHO2NBQUUzRSxLQUFLO2NBQUVpQyxRQUFRO2NBQUVrQztZQUFLLENBQUU7WUFDeEMsTUFBTWlJLEdBQUcsR0FBRyxJQUFJbkssUUFBUSxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFFL0MsTUFBTWUsT0FBTyxHQUNaaEQsS0FBSyxDQUFDZ0IsTUFBTSxLQUFLLEtBQUssR0FBR2lELEtBQUEsQ0FBQTJFLGdCQUFnQixHQUFHNUksS0FBSyxDQUFDZSxLQUFLLEVBQUVnRixJQUFJLEdBQUc4RixPQUFBLENBQUFsQixzQkFBc0IsR0FBRy9ILE1BQUEsQ0FBQXVGLGlCQUFpQjtZQUUzRyxPQUNDekYsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQVgsTUFBQSxDQUFBVSxPQUFBLENBQUFpSixRQUFBLFFBQ0MzSixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxRQUFBLENBQUFrRCx5QkFBeUIsQ0FBQ3NGLFFBQVE7Y0FBQzNILEtBQUssRUFBRUE7WUFBSyxHQUMvQ2pDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxPQUFBLENBQUEvRSxNQUFNLE9BQUcsRUFDVmxFLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNxRCxHQUFBLENBQUE2RixhQUFhO2NBQUNqSixTQUFTLEVBQUU4SSxHQUFHO2NBQUVuSyxRQUFRLEVBQUVBO1lBQVEsR0FDaERTLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFnQyxHQUM5Q1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsT0FBTyxPQUFHLENBQ04sQ0FDUyxDQUNvQixDQUNuQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBTixNQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQW1FLFFBQUEsR0FBQW5FLE9BQUE7VUFFTSxTQUFVd0QsU0FBU0EsQ0FBQztZQUFFUTtVQUFPLENBQUU7WUFDcEMsTUFBTTtjQUFFUTtZQUFLLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLDRCQUE0QixHQUFFO1lBRWhELE1BQU1vSSxTQUFTLEdBQUc3SSxPQUFPLEdBQ3RCUSxLQUFLLENBQUNtRSxLQUFLLENBQUNtRSxTQUFTLENBQUNqRCxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUlyRixLQUFLLENBQUNxQyxPQUFPLENBQUNwRSxNQUFNLEdBQUcsQ0FBQyxHQUNyRStCLEtBQUssQ0FBQ21FLEtBQUssQ0FBQzNFLE9BQU87WUFFdEIsT0FDQ2pCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFtRCxHQUNqRVosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksRyxLQUFHa0osU0FBUyxDQUFRLENBQ25DO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQTlKLE1BQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBbUUsUUFBQSxHQUFBbkUsT0FBQTtVQUNBLElBQUFrRSxXQUFBLEdBQUFsRSxPQUFBO1VBQ0EsSUFBQWdELEtBQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBa0QsS0FBQSxHQUFBbEQsT0FBQTtVQUNBLElBQUFpRCxNQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQStNLE1BQUEsR0FBQS9NLE9BQUE7VUFDQSxJQUFBc0UsS0FBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUFxRSxNQUFBLEdBQUFyRSxPQUFBO1VBR00sU0FBVTZMLFVBQVVBLENBQUM7WUFDMUJqSyxJQUFJO1lBQ0p3QixNQUFNO1lBQ05nQyxJQUFJO1lBQ0ovRTtVQUFLLENBTUw7WUFDQSxNQUFNO2NBQUVtRTtZQUFLLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLDRCQUE0QixHQUFFO1lBQ2hELE1BQU0wRSxhQUFhLEdBQUc7Y0FDckIvQyxJQUFJLEVBQUUsRUFBRTtjQUNSNEcsS0FBSyxFQUFFO2FBQ1A7WUFDRCxNQUFNLENBQUMzSyxNQUFNLEVBQUUrRyxTQUFTLENBQUMsR0FBR3JHLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDdUUsYUFBYSxDQUFDO1lBQ3pELE1BQU0sQ0FBQ3pJLElBQUksRUFBRXVNLE9BQU8sQ0FBQyxHQUFHbEssTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU0sQ0FBQ3NJLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdwSyxNQUFBLENBQUFVLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkQsTUFBTSxDQUFDN0MsS0FBSyxFQUFFbUgsUUFBUSxDQUFDLEdBQUduRyxNQUFBLENBQUFVLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFNUMsTUFBTXlFLFlBQVksR0FBR0EsQ0FBQztjQUFFQyxhQUFhLEVBQUV2RTtZQUFNLENBQUUsS0FBSTtjQUNsRCxNQUFNd0UsWUFBWSxHQUFHO2dCQUFFLEdBQUdsSDtjQUFNLENBQUU7Y0FDbENrSCxZQUFZLENBQUN4RSxNQUFNLENBQUNxQixJQUFJLENBQUMsR0FBR3JCLE1BQU0sQ0FBQ0MsS0FBSztjQUN4Q29FLFNBQVMsQ0FBQ0csWUFBWSxDQUFDO2NBQ3ZCTCxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2IsQ0FBQztZQUVELFNBQVNrRSxXQUFXQSxDQUFBO2NBQ25CbEUsUUFBUSxDQUFDLEVBQUUsQ0FBQztjQUNaaUUsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNqQi9ELFNBQVMsQ0FBQ0QsYUFBYSxDQUFDO2NBQ3hCOEQsT0FBTyxDQUFDLENBQUN2TSxJQUFJLENBQUM7WUFDZjtZQUVBLE1BQU04SSxZQUFZLEdBQUcsTUFBTTFFLEtBQUssSUFBRztjQUNsQ0EsS0FBSyxDQUFDSSxjQUFjLEVBQUU7Y0FDdEJpSSxVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ2hCLE1BQU1FLFFBQVEsR0FBRyxNQUFNaE4sS0FBSyxDQUFDb0MsTUFBTSxDQUFDO2dCQUFFLEdBQUdKLE1BQU07Z0JBQUUrQztjQUFJLENBQUUsQ0FBQztjQUN4RCxJQUFJLENBQUNpSSxRQUFRLENBQUM5SyxNQUFNLEVBQUU7Z0JBQ3JCMkcsUUFBUSxDQUFDbUUsUUFBUSxDQUFDdEwsS0FBSyxDQUFDO2dCQUN4QnNDLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdkQsS0FBSyxDQUFDOztjQUdyQnNDLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDZCxLQUFLLENBQUM4SSxNQUFNLENBQUM3SyxNQUFNLENBQUM2QyxPQUFPLENBQUM7Y0FDMUM4SCxXQUFXLEVBQUU7WUFDZCxDQUFDO1lBRUQsU0FBU0csV0FBV0EsQ0FBQTtjQUNuQk4sT0FBTyxDQUFDLENBQUN2TSxJQUFJLENBQUM7WUFDZjtZQUVBLE1BQU07Y0FBRTBGLElBQUk7Y0FBRTRHO1lBQUssQ0FBRSxHQUFHM0ssTUFBTTtZQUU5QixNQUFNZ0IsT0FBTyxHQUFHekIsSUFBSSxDQUFDMEIsTUFBTSxHQUFHLENBQUMsR0FBR04sS0FBQSxDQUFBTyxJQUFJLEdBQUdOLE1BQUEsQ0FBQU8sU0FBUztZQUVsRCxNQUFNZ0ssVUFBVSxHQUFHaEosS0FBSyxDQUFDaUosS0FBSyxDQUFDaEwsTUFBTSxDQUFDbUIsS0FBSyxDQUFDaUcsT0FBTyxDQUFDLE9BQU8sRUFBRXpHLE1BQU0sQ0FBQ3dDLE1BQU0sQ0FBQztZQUUzRSxPQUNDN0MsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFJLEdBQUVQLE1BQU0sQ0FBQ1EsS0FBSyxDQUFRLEVBQ3pDd0IsSUFBSSxJQUFJckMsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsV0FBQSxDQUFBc0MsTUFBTTtjQUFDTCxJQUFJLEVBQUMsS0FBSztjQUFDVixLQUFLLEVBQUVqQixLQUFLLENBQUNxQyxPQUFPLENBQUNwRSxNQUFNO2NBQUVrQixTQUFTLEVBQUMsS0FBSztjQUFDK0MsT0FBTyxFQUFFNkc7WUFBVyxFQUFJLENBQzVGLEVBRUw3TSxJQUFJLElBQ0pxQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUosTUFBQSxDQUFBVyxLQUFLO2NBQUNoTixJQUFJO2NBQUNpRCxTQUFTLEVBQUMsY0FBYztjQUFDZ0ssT0FBTyxFQUFFSjtZQUFXLEdBQ3hEeEssTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksR0FBRTZKLFVBQVUsQ0FBUSxFQUN4Q3pLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQWdHLElBQUk7Y0FBQzNHLFNBQVMsRUFBQyxPQUFPO2NBQUM0RyxRQUFRLEVBQUVmO1lBQVksR0FDN0N6RyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUFrRyxLQUFLO2NBQ0wvRSxLQUFLLEVBQUMsTUFBTTtjQUNaaUYsSUFBSSxFQUFDLE1BQU07Y0FDWHRFLElBQUksRUFBQyxNQUFNO2NBQ1hwQixLQUFLLEVBQUVvQixJQUFJO2NBQ1hHLFFBQVEsRUFBRThDLFlBQVk7Y0FDdEJvQixXQUFXLEVBQUMsaUJBQWlCO2NBQzdCRSxRQUFRO1lBQUEsRUFDUCxFQUNGNUgsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBa0csS0FBSztjQUNMQyxXQUFXLEVBQUMsa0JBQWtCO2NBQzlCaEYsS0FBSyxFQUFDLE9BQU87Y0FDYmlGLElBQUksRUFBQyxPQUFPO2NBQ1p0RSxJQUFJLEVBQUMsT0FBTztjQUNacEIsS0FBSyxFQUFFZ0ksS0FBSztjQUNaekcsUUFBUSxFQUFFOEMsWUFBWTtjQUN0QnNCLFFBQVE7WUFBQSxFQUNQLEVBQ0Y1SCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQXNDLE1BQU07Y0FDTmtFLElBQUksRUFBQyxRQUFRO2NBQ2JqRSxPQUFPLEVBQUMsU0FBUztjQUNqQk4sSUFBSSxFQUFDLFlBQVk7Y0FDakIrRyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJ6SCxLQUFLLEVBQUM7WUFBUSxFQUNiLENBQ0csQ0FDQSxDQUVSLEVBRUQxQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTCxPQUFPO2NBQUMzQixLQUFLLEVBQUUsRUFBRTtjQUFFbUMsS0FBSyxFQUFFakMsSUFBSTtjQUFFa0MsT0FBTyxFQUFFWixLQUFBLENBQUFhLElBQUk7Y0FBRUMsT0FBTyxFQUFFLENBQUMsQ0FBQ29CO1lBQUksRUFBSSxDQUM5RDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xIQSxJQUFBckMsTUFBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFpRSxNQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQWtFLFdBQUEsR0FBQWxFLE9BQUE7VUFDQSxJQUFBbUUsUUFBQSxHQUFBbkUsT0FBQTtVQUNBLElBQUFvRSxNQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQXFFLE1BQUEsR0FBQXJFLE9BQUE7VUFDQSxJQUFBK00sTUFBQSxHQUFBL00sT0FBQTtVQUNBLElBQUFzRSxLQUFBLEdBQUF0RSxPQUFBO1VBRU0sU0FBVStELElBQUlBLENBQUM7WUFBRVE7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRUMsS0FBSztjQUFFbkU7WUFBSyxDQUFFLEdBQUcsSUFBQThELFFBQUEsQ0FBQU0sNEJBQTRCLEdBQUU7WUFDdkQsTUFBTSxDQUFDL0QsSUFBSSxFQUFFdU0sT0FBTyxDQUFDLEdBQUdsSyxNQUFBLENBQUFVLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTSxDQUFDRixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHNUIsTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUNMLElBQUksQ0FBQ2EsSUFBSSxJQUFJLFNBQVMsQ0FBQztZQUMxRSxNQUFNLENBQUM4SCxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHcEssTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRW5ELE1BQU00RSxZQUFZLEdBQUcsTUFBTTFFLEtBQUssSUFBRztjQUNsQ0EsS0FBSyxDQUFDSSxjQUFjLEVBQUU7Y0FDdEIsSUFBSTtnQkFDSGlJLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBRWhCLE1BQU05TSxLQUFLLENBQUN5QyxVQUFVLENBQUM7a0JBQUVzQyxJQUFJLEVBQUVWLFVBQVU7a0JBQUVTLEdBQUcsRUFBRVosSUFBSSxDQUFDWTtnQkFBRyxDQUFFLENBQUM7Z0JBRTNEZCxNQUFBLENBQUFnQixLQUFLLENBQUNDLE9BQU8sQ0FBQ2QsS0FBSyxDQUFDOEksTUFBTSxDQUFDN0ssTUFBTSxDQUFDNkMsT0FBTyxDQUFDO2VBQzFDLENBQUMsT0FBT3pELENBQUMsRUFBRTtnQkFDWHdDLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ3RELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztnQkFDbkNELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVHNMLFVBQVUsQ0FBQyxLQUFLLENBQUM7O1lBRW5CLENBQUM7WUFFRCxNQUFNdEksZ0JBQWdCLEdBQUdDLEtBQUssSUFBRztjQUNoQ0gsYUFBYSxDQUFDRyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxTQUFTdUksV0FBV0EsQ0FBQTtjQUNuQk4sT0FBTyxDQUFDLENBQUN2TSxJQUFJLENBQUM7WUFDZjtZQUVBLE1BQU04RSxPQUFPLEdBQUcsQ0FDZjtjQUFFUixLQUFLLEVBQUUsU0FBUztjQUFFUyxLQUFLLEVBQUVqQixLQUFLLENBQUNrQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0M7WUFBTSxDQUFFLEVBQ3ZEO2NBQUVaLEtBQUssRUFBRSxTQUFTO2NBQUVTLEtBQUssRUFBRWpCLEtBQUssQ0FBQ2tCLElBQUksQ0FBQ0csS0FBSyxDQUFDRDtZQUFNLENBQUUsQ0FDcEQ7WUFFRCxPQUNDN0MsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBSW9DLEdBQUcsRUFBRXZCLElBQUksQ0FBQzlDLEVBQUU7Y0FBRWtDLFNBQVMsRUFBQztZQUF3QixHQUNuRFosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW9CLEdBQ2pDWSxJQUFJLEVBQUV3QixRQUFRLEdBQUdoRCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUErQixLQUFLO2NBQUNDLEdBQUcsRUFBRTFCLElBQUksRUFBRXdCO1lBQVEsRUFBSSxHQUFHaEQsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBOEIsSUFBSTtjQUFDdkMsU0FBUyxFQUFDLElBQUk7Y0FBQ3dDLElBQUksRUFBRTtZQUFNLEVBQUksRUFDeEZwRCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFWSxJQUFJLENBQUM2QixJQUFJLENBQVEsQ0FDbEMsRUFDTnJELE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQlosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsV0FBQSxDQUFBc0MsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDRSxRQUFRO2NBQUNELE9BQU8sRUFBRTZHO1lBQVcsR0FDckQvSSxLQUFLLENBQUNxQyxPQUFPLENBQUMrRyxJQUFJLENBQ1gsRUFDVDdLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNVLE1BQUEsQ0FBQTBDLFVBQVU7Y0FBQ1gsSUFBSSxFQUFDLFVBQVU7Y0FBQ1MsUUFBUTtjQUFDakQsU0FBUyxFQUFDO1lBQVEsRUFBRyxDQUNyRCxFQUVMakQsSUFBSSxJQUNKcUMsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FKLE1BQUEsQ0FBQVcsS0FBSztjQUFDaE4sSUFBSTtjQUFDaUQsU0FBUyxFQUFDLGdCQUFnQjtjQUFDZ0ssT0FBTyxFQUFFSjtZQUFXLEdBQzFEeEssTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsR0FDM0JaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFJLEdBQUVhLEtBQUssQ0FBQ2lKLEtBQUssQ0FBQ0csSUFBSSxDQUFDaEssS0FBSyxDQUFRLEVBQ3BEYixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBSSxHQUFFYSxLQUFLLENBQUNpSixLQUFLLENBQUNHLElBQUksQ0FBQ0MsSUFBSSxDQUFLLENBQ3hDLEVBQ045SyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUErQixNQUFNO2NBQUM1RSxFQUFFLEVBQUMsWUFBWTtjQUFDK0QsT0FBTyxFQUFFQSxPQUFPO2NBQUVjLFlBQVksRUFBRTVCLFVBQVU7Y0FBRTZCLFFBQVEsRUFBRTFCO1lBQWdCLEVBQUksRUFFbEc5QixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQXNDLE1BQU07Y0FDTmtFLElBQUksRUFBQyxRQUFRO2NBQ2JqRSxPQUFPLEVBQUMsU0FBUztjQUNqQk4sSUFBSSxFQUFDLFlBQVk7Y0FDakIrRyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJ4RyxPQUFPLEVBQUU4QztZQUFZLEdBRXBCaEYsS0FBSyxDQUFDcUMsT0FBTyxDQUFDekUsSUFBSSxDQUNYLENBQ0osQ0FFUCxDQUNHO1VBRVAifQ==