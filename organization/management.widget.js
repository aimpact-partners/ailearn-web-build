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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 695891831,
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
            #managers = [];
            get managers() {
              return this.#managers;
            }
            #pendings = [];
            get pendings() {
              return this.#pendings;
            }
            #members = [];
            get members() {
              return this.#members;
            }
            hide() {
              this.#model = undefined;
              this.ready = false;
            }
            filterUsersByRoleAndReturnAll(people) {
              const managers = people.filter(user => user.role === 'manager' && !!user.authorized);
              const members = people.filter(user => user.role === 'member' && !!user.authorized);
              const pendings = people.filter(user => !user.authorized);
              return {
                managers,
                members,
                pendings
              };
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
                  const {
                    managers,
                    members,
                    pendings
                  } = this.filterUsersByRoleAndReturnAll(data.people);
                  this.#managers = managers;
                  this.#members = members;
                  this.#pendings = pendings;
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
        hash: 3022562526,
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
              value: 'member',
              label: texts.list.teachers.single
            }, {
              value: 'manager',
              label: texts.list.admin.single
            }];
            const ChoiceRole = () => {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
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
              }, texts.actions.reject));
            };
            const WaitingJoin = () => {
              const role = item.role === 'member' ? texts.list.teachers.single : texts.list.admin.single;
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", {
                className: "p2"
              }, item.email), _react.default.createElement("p", null, role), _react.default.createElement("p", null, texts.list.pending.invited));
            };
            return _react.default.createElement("li", {
              key: item.id,
              className: `person-item__container ${item.invited && !item.authorized && ' invited'}`
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, item?.photoUrl ? _react.default.createElement(_image.Image, {
              src: item?.photoUrl
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: 'user'
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), item.invited && _react.default.createElement(WaitingJoin, null), _react.default.createElement("div", {
              className: "actions_buttons"
            }, !item.invited && _react.default.createElement(ChoiceRole, null), _react.default.createElement(_icons.IconButton, {
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
        hash: 2932620362,
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
              data: store.managers,
              labels: texts.list.admin,
              role: 'manager'
            }), _react.default.createElement(_list.PeopleList, {
              store: store,
              data: store.members,
              labels: texts.list.teachers,
              role: 'member'
            }), _react.default.createElement(_approvalList.ApprovalList, {
              data: store.pendings,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsInVuZGVmaW5lZCIsInJlYWR5IiwiZmlsdGVyVXNlcnNCeVJvbGVBbmRSZXR1cm5BbGwiLCJwZW9wbGUiLCJmaWx0ZXIiLCJ1c2VyIiwicm9sZSIsImF1dGhvcml6ZWQiLCJpZCIsInNwZWNzIiwiT3JnYW5pemF0aW9uIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwibG9nIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfcmVhY3QiLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwiQXBwcm92YWxMaXN0IiwibGFiZWxzIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsInBlbmRpbmciLCJfaW1hZ2UiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2ljb25zIiwiX3RvYXN0IiwiX2Zvcm0iLCJpdGVtIiwidGV4dHMiLCJ1c2VNYW5hZ2VPcmdhbml6YXRpb25Db250ZXh0Iiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJ1c2VTdGF0ZSIsImhhbmRsZVJvbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQXBwcm92ZSIsInByZXZlbnREZWZhdWx0IiwidWlkIiwidG9hc3QiLCJzdWNjZXNzIiwiaGFuZGxlUmVqZWN0Iiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsInRlYWNoZXJzIiwic2luZ2xlIiwiYWRtaW4iLCJDaG9pY2VSb2xlIiwiRnJhZ21lbnQiLCJTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsImFjdGlvbnMiLCJXYWl0aW5nSm9pbiIsImVtYWlsIiwiaW52aXRlZCIsImtleSIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiaWNvbiIsIm5hbWUiLCJJY29uQnV0dG9uIiwiX3VpIiwiX2NvbmZpZyIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiQVBQX05BTUUiLCJNYW5hZ2VPcmdhbml6YXRpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJDb3ZlckltYWdlQWN0aW9ucyIsInNldEZldGNoaW5nIiwiZ2VuZXJhdGVJbWFnZSIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsImdlbmVyYXRlIiwidXBsb2FkIiwiX2FjdGlvbnMiLCJfaG9va3MiLCJDb3ZlckltYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInBpY3R1cmUiLCJ1c2VCaW5kZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiRW1wdHlPcmdhbml6YXRpb24iLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiY3JlYXRlIiwiX3JvdXRpbmciLCJPcmdhbml6YXRpb25Gb3JtIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImhhbmRsZVN1Ym1pdCIsInN0b3BQcm9wYWdhdGlvbiIsImZvcm1hdFN0cmluZyIsImlucHV0U3RyaW5nIiwidHJpbSIsInJlcGxhY2UiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1lc3NhZ2UiLCJQYWdlVGl0bGUiLCJwb3N0VGl0bGUiLCJGb3JtIiwib25TdWJtaXQiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJyb3dzIiwiX2NvdmVySW1hZ2UiLCJfYXBwcm92YWxMaXN0IiwiVXBkYXRlT3JnYW5pemF0aW9uRm9ybSIsImlzQ29weWluZyIsInNldElzQ29weWluZyIsImNvcHlUb0NsaXBib2FyZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImpvaW4iLCJjb2RlIiwiZXJyIiwic2V0VGltZW91dCIsIm9yZ0NvZGUiLCJjb3B5IiwiUGVvcGxlTGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfaG9va3MyIiwiX3VwZGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsImNscyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsIl9tb2RhbCIsInNldFNob3ciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJoYW5kbGVNb2RhbCIsIm1vZGFsVGl0bGUiLCJtb2RhbCIsIk1vZGFsIiwib25DbG9zZSIsImVkaXQiLCJpbmZvIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXBwcm92YWwtbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvYXBwcm92YWwtbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vdXBkYXRlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENB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