System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, Header, ClassroomForm, UpdateClassroomForm, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    ClassroomForm: void 0,
    UpdateClassroomForm: void 0,
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
          "vspecifier": "@aimpact/ailearn-app@0.0.24/classroom/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/toast', dependency_11], ['pragmate-ui/form', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classroom-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/classroom/management.widget",
        "is": "page",
        "route": "/classroom/management/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/classroom/management.widget');
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
        hash: 1840825393,
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
                this.#model = new _core.Classroom(specs);
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
                this.hide();
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
                if (!res?.status) {
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
        hash: 2105559953,
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
            } = (0, _context.useManageClassroomContext)();
            const [selectRole, setSelectRole] = _react.default.useState('member');
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
              label: texts.list.students.single
            }, {
              value: 'manager',
              label: texts.list.teachers.single
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
              const role = item.role === 'member' ? texts.list.students.single : texts.list.teachers.single;
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
        hash: 3381558606,
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Classrooms', '/classrooms/list'], ['Management', '']]
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1369749925,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useManageClassroomContext = exports.ManageClassroomContext = void 0;
          var _react = require("react");
          const ManageClassroomContext = exports.ManageClassroomContext = _react.default.createContext({});
          const useManageClassroomContext = () => _react.default.useContext(ManageClassroomContext);
          exports.useManageClassroomContext = useManageClassroomContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/cover-image/actions
      *******************************************/

      ims.set('./views/cover-image/actions', {
        hash: 3339365280,
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
            } = (0, _context.useManageClassroomContext)();
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
        hash: 3925206935,
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
            } = (0, _context.useManageClassroomContext)();
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
        hash: 1467902510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyClassroom = EmptyClassroom;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyClassroom() {
            const {
              texts
            } = (0, _context.useManageClassroomContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/classroom/management/new",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 601324417,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomForm = ClassroomForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function ClassroomForm() {
            const [error, setError] = _react.default.useState('');
            const {
              texts,
              fetching,
              store
            } = (0, _context.useManageClassroomContext)();
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
                _toast.toast.success('Classroom published successfully');
                _routing.routing.pushState(`/classroom/management/${data.id}`);
              } catch (e) {
                setError(e.message);
                _toast.toast.error('Error while publishing classroom');
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_ui.PageSubtitle, null, texts.postTitle)), _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: "classroom-form__container"
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
        hash: 1260717070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UpdateClassroomForm = UpdateClassroomForm;
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
          function UpdateClassroomForm() {
            const {
              texts,
              fetching,
              store
            } = (0, _context.useManageClassroomContext)();
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
                _toast.toast.success('Classroom published successfully');
                _routing.routing.pushState(`/classroom/management/${data.id}`);
              } catch (e) {
                setError(e.message);
                _toast.toast.error('Error while publishing classroom');
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: "classroom-form__container"
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
            }, _react.default.createElement("span", null, texts.classCode), _react.default.createElement(_icons.IconButton, {
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
              labels: texts.list.teachers,
              role: 'manager'
            }), _react.default.createElement(_list.PeopleList, {
              store: store,
              data: store.members,
              labels: texts.list.students,
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
        hash: 1621948818,
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
            const Control = store.params === 'new' ? _form.ClassroomForm : store.model?.name ? _update.UpdateClassroomForm : _empty.EmptyClassroom;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ManageClassroomContext.Provider, {
              value: value
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching
            }, _react.default.createElement("div", {
              className: "app-classroom-creation-page"
            }, _react.default.createElement(Control, null)))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 1217749532,
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
            } = (0, _context.useManageClassroomContext)();
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
        hash: 290672304,
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
            } = (0, _context.useManageClassroomContext)();
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
            const Control = data?.length > 0 ? _list.List : _empty.EmptyList;
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
        hash: 4010206538,
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
          var _modal = require("pragmate-ui/modal");
          var _toast = require("pragmate-ui/toast");
          var _form = require("pragmate-ui/form");
          function Item({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useManageClassroomContext)();
            const [show, setShow] = _react.default.useState(false);
            const [selectRole, setSelectRole] = _react.default.useState(item.role || 'student');
            const [loading, setLoading] = _react.default.useState(false);
            const [openSelector, setOpenSelector] = _react.default.useState(false);
            const [selectedOption, setSelectedOption] = _react.default.useState(null);
            const handleSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                if (item.role === 'manager') {
                  return _toast.toast.warning('At the moment it is not possible to change the manager role.');
                }
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
              value: 'student',
              label: texts.list.students.single
            }, {
              value: 'teacher',
              label: texts.list.teachers.single
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
              disabled: item.role === 'manager',
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
        "from": "ClassroomForm",
        "name": "ClassroomForm"
      }, {
        "im": "./views/form/update",
        "from": "UpdateClassroomForm",
        "name": "UpdateClassroomForm"
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
        (require || prop === 'ClassroomForm') && _export("ClassroomForm", ClassroomForm = require ? require('./views/form/index').ClassroomForm : value);
        (require || prop === 'UpdateClassroomForm') && _export("UpdateClassroomForm", UpdateClassroomForm = require ? require('./views/form/update').UpdateClassroomForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsInVuZGVmaW5lZCIsInJlYWR5IiwiZmlsdGVyVXNlcnNCeVJvbGVBbmRSZXR1cm5BbGwiLCJwZW9wbGUiLCJmaWx0ZXIiLCJ1c2VyIiwicm9sZSIsImF1dGhvcml6ZWQiLCJpZCIsInNwZWNzIiwiQ2xhc3Nyb29tIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwibG9nIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfcmVhY3QiLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwiQXBwcm92YWxMaXN0IiwibGFiZWxzIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsInBlbmRpbmciLCJfaW1hZ2UiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2ljb25zIiwiX3RvYXN0IiwiX2Zvcm0iLCJpdGVtIiwidGV4dHMiLCJ1c2VNYW5hZ2VDbGFzc3Jvb21Db250ZXh0Iiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJ1c2VTdGF0ZSIsImhhbmRsZVJvbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQXBwcm92ZSIsInByZXZlbnREZWZhdWx0IiwidWlkIiwidG9hc3QiLCJzdWNjZXNzIiwiaGFuZGxlUmVqZWN0Iiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsInN0dWRlbnRzIiwic2luZ2xlIiwidGVhY2hlcnMiLCJDaG9pY2VSb2xlIiwiRnJhZ21lbnQiLCJTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsImFjdGlvbnMiLCJXYWl0aW5nSm9pbiIsImVtYWlsIiwiaW52aXRlZCIsImtleSIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiaWNvbiIsIm5hbWUiLCJJY29uQnV0dG9uIiwiX3VpIiwiX2NvbmZpZyIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiQVBQX05BTUUiLCJNYW5hZ2VDbGFzc3Jvb21Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJDb3ZlckltYWdlQWN0aW9ucyIsInNldEZldGNoaW5nIiwiZ2VuZXJhdGVJbWFnZSIsImdlbmVyYXRlUGljdHVyZSIsIklDT05TIiwiYWlTdGFycyIsImdlbmVyYXRlIiwidXBsb2FkIiwiX2FjdGlvbnMiLCJfaG9va3MiLCJDb3ZlckltYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInBpY3R1cmUiLCJ1c2VCaW5kZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiRW1wdHlDbGFzc3Jvb20iLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiY3JlYXRlIiwiX3JvdXRpbmciLCJDbGFzc3Jvb21Gb3JtIiwic2V0RXJyb3IiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImhhbmRsZVN1Ym1pdCIsInN0b3BQcm9wYWdhdGlvbiIsImZvcm1hdFN0cmluZyIsImlucHV0U3RyaW5nIiwidHJpbSIsInJlcGxhY2UiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1lc3NhZ2UiLCJQYWdlVGl0bGUiLCJQYWdlU3VidGl0bGUiLCJwb3N0VGl0bGUiLCJGb3JtIiwib25TdWJtaXQiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJyb3dzIiwiX2NvdmVySW1hZ2UiLCJfYXBwcm92YWxMaXN0IiwiVXBkYXRlQ2xhc3Nyb29tRm9ybSIsImlzQ29weWluZyIsInNldElzQ29weWluZyIsImNvcHlUb0NsaXBib2FyZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImpvaW4iLCJjb2RlIiwiZXJyIiwic2V0VGltZW91dCIsImNsYXNzQ29kZSIsImNvcHkiLCJQZW9wbGVMaXN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9ob29rczIiLCJfdXBkYXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwiY2xzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiZW1wdHlUZXh0IiwibGFiZWxMaXN0IiwiX21vZGFsIiwic2V0U2hvdyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlQ2xvc2UiLCJyZXNwb25zZSIsInN5c3RlbSIsImhhbmRsZU1vZGFsIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJvbkNsb3NlIiwib3BlblNlbGVjdG9yIiwic2V0T3BlblNlbGVjdG9yIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsIndhcm5pbmciLCJlZGl0IiwiaW5mbyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FwcHJvdmFsLWxpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FwcHJvdmFsLWxpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3VwZGF0ZS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRCxJQUFBYyxLQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFZTSxNQUFPTyxZQUFhLFNBQVFXLE1BQUEsQ0FBQUMsYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQUMsVUFBVyxHQUFhLEVBQUU7WUFDMUIsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBQyxRQUFTLEdBQVksRUFBRTtZQUN2QixJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLFFBQVMsR0FBWSxFQUFFO1lBQ3ZCLElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsT0FBUSxHQUFZLEVBQUU7WUFDdEIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQVYsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSyxLQUFNLEdBQUdNLFNBQVM7Y0FDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBQyw2QkFBNkJBLENBQUNDLE1BQWU7Y0FDNUMsTUFBTU4sUUFBUSxHQUFHTSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUNDLElBQUksS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDRCxJQUFJLENBQUNFLFVBQVUsQ0FBQztjQUNwRixNQUFNUixPQUFPLEdBQUdJLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUNELElBQUksQ0FBQ0UsVUFBVSxDQUFDO2NBQ2xGLE1BQU1ULFFBQVEsR0FBR0ssTUFBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNFLFVBQVUsQ0FBQztjQUN4RCxPQUFPO2dCQUFFVixRQUFRO2dCQUFFRSxPQUFPO2dCQUFFRDtjQUFRLENBQUU7WUFDdkM7WUFFQSxNQUFNYixJQUFJQSxDQUFDdUIsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsSUFBSSxDQUFDUCxLQUFLLEdBQUcsS0FBSztnQkFDbEIsSUFBSSxDQUFDLENBQUFOLE1BQU8sR0FBR2EsRUFBRTtnQkFDakIsTUFBTUMsS0FBSyxHQUFHRCxFQUFFLEtBQUssS0FBSyxHQUFHLEVBQUUsR0FBRztrQkFBRUE7Z0JBQUUsQ0FBRTtnQkFDeEMsSUFBSUEsRUFBRSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQWQsS0FBTSxFQUFFLElBQUksQ0FBQ0wsSUFBSSxFQUFFO2dCQUU1QyxJQUFJLENBQUMsQ0FBQUssS0FBTSxHQUFHLElBQUlILEtBQUEsQ0FBQW1CLFNBQVMsQ0FBQ0QsS0FBSyxDQUFDO2dCQUVsQyxJQUFJRCxFQUFFLEtBQUssS0FBSyxFQUFFO2tCQUNqQixNQUFNRyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWpCLEtBQU0sQ0FBQ1QsSUFBSSxDQUFDO29CQUFFdUI7a0JBQUUsQ0FBRSxDQUFDO2tCQUMzQyxNQUFNO29CQUFFWCxRQUFRO29CQUFFRSxPQUFPO29CQUFFRDtrQkFBUSxDQUFFLEdBQUcsSUFBSSxDQUFDSSw2QkFBNkIsQ0FBQ1MsSUFBSSxDQUFDUixNQUFNLENBQUM7a0JBRXZGLElBQUksQ0FBQyxDQUFBTixRQUFTLEdBQUdBLFFBQVE7a0JBQ3pCLElBQUksQ0FBQyxDQUFBRSxPQUFRLEdBQUdBLE9BQU87a0JBQ3ZCLElBQUksQ0FBQyxDQUFBRCxRQUFTLEdBQUdBLFFBQVE7O2VBRTFCLENBQUMsT0FBT2MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDWCxLQUFLLEdBQUcsSUFBSTs7WUFFbkI7WUFFQSxNQUFNYyxNQUFNQSxDQUFDUCxFQUFFO2NBQ2QsSUFBSSxDQUFDLENBQUFkLEtBQU0sQ0FBQ3NCLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDVCxFQUFFLENBQUM7Y0FDakMsSUFBSSxDQUFDVSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQ0MsTUFBTTtjQUNoQixJQUFJO2dCQUNILElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Z0JBRXBCLElBQUlaLEtBQUs7Z0JBRVQsSUFBSSxJQUFJLENBQUMsQ0FBQWQsTUFBTyxLQUFLLEtBQUssRUFBRTtrQkFDM0JjLEtBQUssR0FBRztvQkFBRSxHQUFHVyxNQUFNO29CQUFFWixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFiO2tCQUFPLENBQUU7aUJBQ3ZDLE1BQU07a0JBQ05jLEtBQUssR0FBR1csTUFBTTs7Z0JBR2YsTUFBTTtrQkFBRUUsTUFBTTtrQkFBRVg7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDakIsS0FBSyxDQUFDeUIsSUFBSSxDQUFDVixLQUFLLENBQUM7Z0JBRXJELElBQUksQ0FBQ2EsTUFBTSxFQUFFO2tCQUNaLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDOztnQkFHOUMsSUFBSSxDQUFDbEMsSUFBSSxFQUFFO2dCQUVYLE9BQU9zQixJQUFJO2VBQ1gsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUYsQ0FBQyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNRyxNQUFNQSxDQUFDSixNQUFNO2NBQ2xCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEJSLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDTCxNQUFNLEVBQUUsUUFBUSxDQUFDO2dCQUM3QixNQUFNO2tCQUFFRSxNQUFNO2tCQUFFWDtnQkFBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUNqQixLQUFLLENBQUM4QixNQUFNLENBQUNKLE1BQU0sQ0FBQztnQkFDeERQLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDZCxJQUFJLEVBQUUsUUFBUSxDQUFDO2dCQUUzQixJQUFJLENBQUNXLE1BQU0sRUFBRTtrQkFDWixNQUFNLElBQUlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Z0JBR3ZDLE9BQU9aLElBQUk7ZUFDWCxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFRixDQUFDLENBQUM7ZUFDbkIsU0FBUztnQkFDVCxJQUFJLENBQUNTLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1LLE9BQU9BLENBQUNOLE1BQU07Y0FDbkIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUNqQyxLQUFLLENBQUNnQyxPQUFPLENBQUNOLE1BQU0sQ0FBQztnQkFFNUMsSUFBSSxDQUFDTyxHQUFHLEVBQUVMLE1BQU0sRUFBRTtrQkFDakIsTUFBTSxJQUFJQyxLQUFLLENBQUMscUJBQXFCLENBQUM7O2dCQUd2QyxPQUFPSSxHQUFHO2VBQ1YsQ0FBQyxPQUFPZixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNTLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1PLE1BQU1BLENBQUNSLE1BQU07Y0FDbEIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUNqQyxLQUFLLENBQUNrQyxNQUFNLENBQUNSLE1BQU0sQ0FBQztnQkFDM0NQLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUUxQjtnQkFDQTtnQkFDQTtnQkFFQSxPQUFPQSxHQUFHO2VBQ1YsQ0FBQyxPQUFPZixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUYsQ0FBQyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNUSxVQUFVQSxDQUFDVCxNQUFNO2NBQ3RCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDakMsS0FBSyxDQUFDbUMsVUFBVSxDQUFDVCxNQUFNLENBQUM7Z0JBRS9DO2dCQUNBO2dCQUNBO2dCQUVBLE9BQU9PLEdBQUc7ZUFDVixDQUFDLE9BQU9mLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ1MsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBL0IsT0FBQSxDQUFBVCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkxELElBQUFpRCxNQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQXlELEtBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBMEQsTUFBQSxHQUFBMUQsT0FBQTtVQUNBLElBQUEyRCxLQUFBLEdBQUEzRCxPQUFBO1VBRU0sU0FBVTRELFlBQVlBLENBQUM7WUFBRXZCLElBQUk7WUFBRXdCO1VBQU0sQ0FBOEQ7WUFDeEcsTUFBTUMsT0FBTyxHQUFHekIsSUFBSSxDQUFDMEIsTUFBTSxHQUFHLENBQUMsR0FBR04sS0FBQSxDQUFBTyxJQUFJLEdBQUdOLE1BQUEsQ0FBQU8sU0FBUztZQUVsRCxPQUNDVCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDdENaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksR0FBRVAsTUFBTSxDQUFDUSxLQUFLLENBQVEsQ0FDckMsRUFFTmIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsT0FBTztjQUFDM0IsS0FBSyxFQUFFLEVBQUU7Y0FBRW1DLEtBQUssRUFBRWpDLElBQUk7Y0FBRWtDLE9BQU8sRUFBRVosS0FBQSxDQUFBYSxJQUFJO2NBQUVDLE9BQU8sRUFBRXBDLElBQUksQ0FBQzBCLE1BQU0sR0FBRztZQUFDLEVBQUksQ0FDdkU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQVAsTUFBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUEwRSxNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsUUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxNQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQThFLE1BQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBK0UsS0FBQSxHQUFBL0UsT0FBQTtVQUVNLFNBQVV3RSxJQUFJQSxDQUFDO1lBQUVRO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUVDLEtBQUs7Y0FBRTVFO1lBQUssQ0FBRSxHQUFHLElBQUF1RSxRQUFBLENBQUFNLHlCQUF5QixHQUFFO1lBQ3BELE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzVCLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUU1RCxNQUFNQyxnQkFBZ0IsR0FBR0MsS0FBSyxJQUFHO2NBQ2hDSCxhQUFhLENBQUNHLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7WUFDbEMsQ0FBQztZQUVELE1BQU1DLGFBQWEsR0FBRyxNQUFPSCxLQUFLLElBQW1CO2NBQ3BEQSxLQUFLLENBQUNJLGNBQWMsRUFBRTtjQUN0QixJQUFJO2dCQUNILE1BQU10RixLQUFLLENBQUMrQyxPQUFPLENBQUM7a0JBQ25Cd0MsR0FBRyxFQUFFWixJQUFJLENBQUNZLEdBQUc7a0JBQ2I1RCxJQUFJLEVBQUVtRDtpQkFDTixDQUFDO2dCQUNGTCxNQUFBLENBQUFlLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLDJCQUEyQixDQUFDO2VBQzFDLENBQUMsT0FBT3hELENBQUMsRUFBRTtnQkFDWHdDLE1BQUEsQ0FBQWUsS0FBSyxDQUFDckQsS0FBSyxDQUFDLHNCQUFzQixDQUFDOztZQUVyQyxDQUFDO1lBRUQsTUFBTXVELFlBQVksR0FBRyxNQUFPUixLQUFLLElBQW1CO2NBQ25EQSxLQUFLLENBQUNJLGNBQWMsRUFBRTtjQUN0QixJQUFJO2dCQUNILE1BQU10RixLQUFLLENBQUNpRCxNQUFNLENBQUM7a0JBQ2xCc0MsR0FBRyxFQUFFWixJQUFJLENBQUNZLEdBQUc7a0JBQ2I1RCxJQUFJLEVBQUVtRDtpQkFDTixDQUFDO2dCQUNGTCxNQUFBLENBQUFlLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLDJCQUEyQixDQUFDO2VBQzFDLENBQUMsT0FBT3hELENBQUMsRUFBRTtnQkFDWHdDLE1BQUEsQ0FBQWUsS0FBSyxDQUFDckQsS0FBSyxDQUFDLHNCQUFzQixDQUFDOztZQUVyQyxDQUFDO1lBRUQsTUFBTXdELE9BQU8sR0FBRyxDQUNmO2NBQUVQLEtBQUssRUFBRSxRQUFRO2NBQUVRLEtBQUssRUFBRWhCLEtBQUssQ0FBQ2lCLElBQUksQ0FBQ0MsUUFBUSxDQUFDQztZQUFNLENBQUUsRUFDdEQ7Y0FBRVgsS0FBSyxFQUFFLFNBQVM7Y0FBRVEsS0FBSyxFQUFFaEIsS0FBSyxDQUFDaUIsSUFBSSxDQUFDRyxRQUFRLENBQUNEO1lBQU0sQ0FBRSxDQUN2RDtZQUVELE1BQU1FLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCLE9BQ0M5QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFBWCxNQUFBLENBQUFVLE9BQUEsQ0FBQXFDLFFBQUEsUUFDQy9DLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2dCQUFLQyxTQUFTLEVBQUM7Y0FBb0IsR0FDbENaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQXlCLE1BQU07Z0JBQUN0RSxFQUFFLEVBQUMsWUFBWTtnQkFBQzhELE9BQU8sRUFBRUEsT0FBTztnQkFBRVMsWUFBWSxFQUFFdEIsVUFBVTtnQkFBRXVCLFFBQVEsRUFBRXBCO2NBQWdCLEVBQUksQ0FDN0YsRUFDTjlCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQWdDLE1BQU07Z0JBQUNDLE9BQU8sRUFBQyxTQUFTO2dCQUFDQyxPQUFPLEVBQUVuQixhQUFhO2dCQUFFb0IsUUFBUTtnQkFBQ0MsUUFBUSxFQUFFO2NBQUssR0FDeEU5QixLQUFLLENBQUMrQixPQUFPLENBQUM1RCxPQUFPLENBQ2QsRUFDVEksTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsV0FBQSxDQUFBZ0MsTUFBTTtnQkFBQ0MsT0FBTyxFQUFDLE9BQU87Z0JBQUNHLFFBQVEsRUFBRSxJQUFJO2dCQUFFRixPQUFPLEVBQUVkO2NBQVksR0FDM0RkLEtBQUssQ0FBQytCLE9BQU8sQ0FBQzFELE1BQU0sQ0FDYixDQUNQO1lBRUwsQ0FBQztZQUVELE1BQU0yRCxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUN4QixNQUFNakYsSUFBSSxHQUFHZ0QsSUFBSSxDQUFDaEQsSUFBSSxLQUFLLFFBQVEsR0FBR2lELEtBQUssQ0FBQ2lCLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLEdBQUduQixLQUFLLENBQUNpQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0QsTUFBTTtjQUM3RixPQUNDNUMsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQVgsTUFBQSxDQUFBVSxPQUFBLENBQUFxQyxRQUFBLFFBQ0MvQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtnQkFBR0MsU0FBUyxFQUFDO2NBQUksR0FBRVksSUFBSSxDQUFDa0MsS0FBSyxDQUFLLEVBQ2xDMUQsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsWUFBSW5DLElBQUksQ0FBSyxFQUNid0IsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsWUFBSWMsS0FBSyxDQUFDaUIsSUFBSSxDQUFDekIsT0FBTyxDQUFDMEMsT0FBTyxDQUFLLENBQ2pDO1lBRUwsQ0FBQztZQUVELE9BQ0MzRCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFJaUQsR0FBRyxFQUFFcEMsSUFBSSxDQUFDOUMsRUFBRTtjQUFFa0MsU0FBUyxFQUFFLDBCQUEwQlksSUFBSSxDQUFDbUMsT0FBTyxJQUFJLENBQUNuQyxJQUFJLENBQUMvQyxVQUFVLElBQUksVUFBVTtZQUFFLEdBQ3RHdUIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW9CLEdBQ2pDWSxJQUFJLEVBQUVxQyxRQUFRLEdBQUc3RCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTyxNQUFBLENBQUE0QyxLQUFLO2NBQUNDLEdBQUcsRUFBRXZDLElBQUksRUFBRXFDO1lBQVEsRUFBSSxHQUFHN0QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBMkMsSUFBSTtjQUFDcEQsU0FBUyxFQUFDLElBQUk7Y0FBQ3FELElBQUksRUFBRTtZQUFNLEVBQUksRUFDeEZqRSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFWSxJQUFJLENBQUMwQyxJQUFJLENBQVEsQ0FDbEMsRUFDTDFDLElBQUksQ0FBQ21DLE9BQU8sSUFBSTNELE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUM4QyxXQUFXLE9BQUcsRUFDaEN6RCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDOUIsQ0FBQ1ksSUFBSSxDQUFDbUMsT0FBTyxJQUFJM0QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21DLFVBQVUsT0FBRyxFQUNoQzlDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNVLE1BQUEsQ0FBQThDLFVBQVU7Y0FBQ0YsSUFBSSxFQUFDLFVBQVU7Y0FBQ3JELFNBQVMsRUFBQztZQUFRLEVBQUcsQ0FDNUMsQ0FDRjtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZGQSxJQUFBd0QsR0FBQSxHQUFBNUgsT0FBQTtVQUNBLElBQUF3RCxNQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQTZILE9BQUEsR0FBQTdILE9BQUE7VUFDTztVQUFVLFNBQVU4SCxNQUFNQSxDQUFBO1lBQ2hDLE9BQ0N0RSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxrQkFDQ1gsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lELEdBQUEsQ0FBQUcsVUFBVTtjQUNWQyxVQUFVLEVBQUUsQ0FDWCxDQUFDSCxPQUFBLENBQUEzRCxPQUFNLENBQUM3QyxNQUFNLENBQUM0RyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQzdCLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDLEVBQ2xDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNsQixFQUNBLENBQ087VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBekUsTUFBQSxHQUFBeEQsT0FBQTtVQVNPLE1BQU1rSSxzQkFBc0IsR0FBQWxILE9BQUEsQ0FBQWtILHNCQUFBLEdBQUcxRSxNQUFBLENBQUFVLE9BQUssQ0FBQ2lFLGFBQWEsQ0FBQyxFQUFzQixDQUFDO1VBQzFFLE1BQU1qRCx5QkFBeUIsR0FBR0EsQ0FBQSxLQUFNMUIsTUFBQSxDQUFBVSxPQUFLLENBQUNrRSxVQUFVLENBQUNGLHNCQUFzQixDQUFDO1VBQUNsSCxPQUFBLENBQUFrRSx5QkFBQSxHQUFBQSx5QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWeEYsSUFBQTFCLE1BQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBMkUsV0FBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE2RSxNQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQTRFLFFBQUEsR0FBQTVFLE9BQUE7VUFFTSxTQUFVcUksaUJBQWlCQSxDQUFDO1lBQUVDO1VBQVcsQ0FBRTtZQUNoRCxNQUFNO2NBQUVyRCxLQUFLO2NBQUU1RTtZQUFLLENBQUUsR0FBRyxJQUFBdUUsUUFBQSxDQUFBTSx5QkFBeUIsR0FBRTtZQUVwRCxNQUFNcUQsYUFBYSxHQUFHLE1BQU1oRCxLQUFLLElBQUc7Y0FDbkNBLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO2NBQ3RCMkMsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNakksS0FBSyxDQUFDZSxLQUFLLENBQUNvSCxlQUFlLEVBQUU7Y0FDbkNGLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUVELE9BQ0M5RSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBUyxHQUMxQlosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsV0FBQSxDQUFBZ0MsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDRyxRQUFRO2NBQUNGLE9BQU8sRUFBRTBCLGFBQWE7Y0FBRXpCLFFBQVE7Y0FBQ1csSUFBSSxFQUFFNUMsTUFBQSxDQUFBNEQsS0FBSyxDQUFDQztZQUFPLEdBQ3JGekQsS0FBSyxDQUFDK0IsT0FBTyxDQUFDMkIsUUFBUSxDQUNmLEVBQ1RuRixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxXQUFBLENBQUFnQyxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNHLFFBQVE7Y0FBQzNDLFNBQVMsRUFBQyxRQUFRO2NBQUNxRCxJQUFJLEVBQUU7WUFBZ0IsR0FDMUV4QyxLQUFLLENBQUMrQixPQUFPLENBQUM0QixNQUFNLENBQ2IsQ0FDRDtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBcEYsTUFBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUE2SSxRQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQTRILEdBQUEsR0FBQTVILE9BQUE7VUFDQSxJQUFBOEksTUFBQSxHQUFBOUksT0FBQTtVQUNBLElBQUEwRSxNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTRFLFFBQUEsR0FBQTVFLE9BQUE7VUFFTSxTQUFVK0ksVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQUUxSTtZQUFLLENBQUUsR0FBRyxJQUFBdUUsUUFBQSxDQUFBTSx5QkFBeUIsR0FBRTtZQUU3QyxNQUFNLENBQUM4RCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHekYsTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUNoRixLQUFLLENBQUNlLEtBQUssRUFBRThILE9BQU8sQ0FBQztZQUM5RCxNQUFNLENBQUNuRyxRQUFRLEVBQUV1RixXQUFXLENBQUMsR0FBRzlFLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxJQUFBeUQsTUFBQSxDQUFBSyxTQUFTLEVBQUMsQ0FBQzlJLEtBQUssQ0FBQyxFQUFFLE1BQU00SSxRQUFRLENBQUM1SSxLQUFLLENBQUNlLEtBQUssRUFBRThILE9BQU8sQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1lBRTNFLE9BQ0MxRixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDckMvRCxLQUFLLENBQUNlLEtBQUssRUFBRThILE9BQU8sSUFBSTFGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNPLE1BQUEsQ0FBQTRDLEtBQUs7Y0FBQ0MsR0FBRyxFQUFFeUI7WUFBSyxFQUFJLEVBQzlDeEYsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBFLFFBQUEsQ0FBQVIsaUJBQWlCO2NBQUNDLFdBQVcsRUFBRUE7WUFBVyxFQUFJLEVBQy9DOUUsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lELEdBQUEsQ0FBQXdCLGdCQUFnQjtjQUFDckcsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDbkM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQVMsTUFBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTRFLFFBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBNEgsR0FBQSxHQUFBNUgsT0FBQTtVQUVNLFNBQVVxSixjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRXBFO1lBQUssQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0seUJBQXlCLEdBQUU7WUFDN0MsT0FDQzFCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUN5RCxHQUFBLENBQUEwQixTQUFTO2NBQUNDLElBQUksRUFBRXRFLEtBQUssQ0FBQ3VFLEtBQUssQ0FBQ25GLEtBQUs7Y0FBRW9GLFdBQVcsRUFBRXhFLEtBQUssQ0FBQ3VFLEtBQUssQ0FBQ0MsV0FBVztjQUFFaEMsSUFBSSxFQUFDO1lBQU0sR0FDcEZqRSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBb0MsR0FDbERaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQStFLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLDJCQUEyQjtjQUFDdkYsU0FBUyxFQUFDO1lBQXNCLEdBQ3JFYSxLQUFLLENBQUMrQixPQUFPLENBQUM0QyxNQUFNLENBQ2YsQ0FDRixDQUNLO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFwRyxNQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQStFLEtBQUEsR0FBQS9FLE9BQUE7VUFFQSxJQUFBMkUsV0FBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE4SSxNQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQThFLE1BQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBNkosUUFBQSxHQUFBN0osT0FBQTtVQUNBLElBQUE0RSxRQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQTRILEdBQUEsR0FBQTVILE9BQUE7VUFFTztVQUFVLFNBQVU4SixhQUFhQSxDQUFBO1lBQ3ZDLE1BQU0sQ0FBQ3RILEtBQUssRUFBRXVILFFBQVEsQ0FBQyxHQUFHdkcsTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU07Y0FBRUosS0FBSztjQUFFbEMsUUFBUTtjQUFFMUM7WUFBSyxDQUFFLEdBQUcsSUFBQXVFLFFBQUEsQ0FBQU0seUJBQXlCLEdBQUU7WUFDOUQsTUFBTThFLGFBQWEsR0FBRztjQUFFdEMsSUFBSSxFQUFFckgsS0FBSyxDQUFDZSxLQUFLLENBQUNzRyxJQUFJLElBQUksRUFBRTtjQUFFK0IsV0FBVyxFQUFFcEosS0FBSyxDQUFDZSxLQUFLLENBQUNxSSxXQUFXLElBQUk7WUFBRSxDQUFFO1lBQ2xHLE1BQU0sQ0FBQzNHLE1BQU0sRUFBRW1ILFNBQVMsQ0FBQyxHQUFHekcsTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUMyRSxhQUFhLENBQUM7WUFDekQsTUFBTWpELFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUVoRTtZQUFRLENBQUU7WUFFdkMsSUFBQStGLE1BQUEsQ0FBQUssU0FBUyxFQUFDLENBQUM5SSxLQUFLLENBQUNlLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDN0I2SSxTQUFTLENBQUM7Z0JBQUV2QyxJQUFJLEVBQUVySCxLQUFLLENBQUNlLEtBQUssQ0FBQ3NHLElBQUksSUFBSSxFQUFFO2dCQUFFK0IsV0FBVyxFQUFFcEosS0FBSyxDQUFDZSxLQUFLLENBQUNxSSxXQUFXLElBQUk7Y0FBRSxDQUFFLENBQUM7WUFDeEYsQ0FBQyxDQUFDO1lBRUYsTUFBTVMsWUFBWSxHQUFHQSxDQUFDO2NBQUVDLGFBQWEsRUFBRTNFO1lBQU0sQ0FBRSxLQUFJO2NBQ2xELE1BQU00RSxZQUFZLEdBQUc7Z0JBQUUsR0FBR3RIO2NBQU0sQ0FBRTtjQUNsQ3NILFlBQVksQ0FBQzVFLE1BQU0sQ0FBQ2tDLElBQUksQ0FBQyxHQUFHbEMsTUFBTSxDQUFDQyxLQUFLO2NBQ3hDd0UsU0FBUyxDQUFDRyxZQUFZLENBQUM7Y0FDdkJMLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDYixDQUFDO1lBRUQsTUFBTU0sWUFBWSxHQUFHLE1BQU85RSxLQUFLLElBQW1CO2NBQ25EQSxLQUFLLENBQUNJLGNBQWMsRUFBRTtjQUN0QkosS0FBSyxDQUFDK0UsZUFBZSxFQUFFO2NBQ3ZCLElBQUk7Z0JBQ0gsTUFBTUMsWUFBWSxHQUFJQyxXQUFtQixJQUN4Q0EsV0FBVyxDQUFDQyxJQUFJLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0EsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsQ0FBQztnQkFFakUsTUFBTXhJLElBQUksR0FBRyxNQUFNaEMsS0FBSyxDQUFDd0MsSUFBSSxDQUFDO2tCQUM3QjZFLElBQUksRUFBRTZDLFlBQVksQ0FBQ3pILE1BQU0sQ0FBQzRFLElBQUksQ0FBQztrQkFDL0IrQixXQUFXLEVBQUVjLFlBQVksQ0FBQ3pILE1BQU0sQ0FBQzJHLFdBQVc7aUJBQzVDLENBQUM7Z0JBQ0YzRSxNQUFBLENBQUFlLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLGtDQUFrQyxDQUFDO2dCQUNqRCtELFFBQUEsQ0FBQWlCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLHlCQUF5QjFJLElBQUksQ0FBQ0gsRUFBRSxFQUFFLENBQUM7ZUFDckQsQ0FBQyxPQUFPSSxDQUFDLEVBQUU7Z0JBQ1h5SCxRQUFRLENBQUN6SCxDQUFDLENBQUMwSSxPQUFPLENBQUM7Z0JBQ25CbEcsTUFBQSxDQUFBZSxLQUFLLENBQUNyRCxLQUFLLENBQUMsa0NBQWtDLENBQUM7O1lBRWpELENBQUM7WUFFRCxPQUNDZ0IsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsY0FDQ1gsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lELEdBQUEsQ0FBQXFELFNBQVM7Y0FBQzVHLEtBQUssRUFBRVksS0FBSyxDQUFDWjtZQUFLLEdBQzVCYixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUQsR0FBQSxDQUFBc0QsWUFBWSxRQUFFakcsS0FBSyxDQUFDa0csU0FBUyxDQUFnQixDQUNuQyxFQUNaM0gsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBcUcsSUFBSTtjQUFDQyxRQUFRLEVBQUVoQixZQUFZO2NBQUVqRyxTQUFTLEVBQUM7WUFBMkIsR0FDbEVaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFzQixHQUNwQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQStCLEdBQzdDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUIsR0FDckNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFJLEdBQUVhLEtBQUssQ0FBQ3BCLE1BQU0sQ0FBQzZELElBQUksQ0FBSyxFQUN6Q2xFLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQXVHLEtBQUs7Y0FDTEMsV0FBVyxFQUFFdEcsS0FBSyxDQUFDc0csV0FBVyxDQUFDN0QsSUFBSTtjQUNuQ2pDLEtBQUssRUFBRTNDLE1BQU0sQ0FBQzRFLElBQUk7Y0FDbEJBLElBQUksRUFBQyxNQUFNO2NBQ1g4RCxJQUFJLEVBQUMsTUFBTTtjQUNYOUUsUUFBUSxFQUFFd0QsWUFBWTtjQUN0QnVCLFFBQVE7WUFBQSxFQUNQLENBQ0csRUFDTmpJLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNyQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQUksR0FBRWEsS0FBSyxDQUFDcEIsTUFBTSxDQUFDNEYsV0FBVyxDQUFLLEVBQ2hEakcsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBMkcsUUFBUTtjQUNSQyxJQUFJLEVBQUUsQ0FBQztjQUNQakUsSUFBSSxFQUFDLGFBQWE7Y0FDbEJqQyxLQUFLLEVBQUUzQyxNQUFNLENBQUMyRyxXQUFXO2NBQ3pCOEIsV0FBVyxFQUFFdEcsS0FBSyxDQUFDc0csV0FBVyxDQUFDOUIsV0FBVztjQUMxQy9DLFFBQVEsRUFBRXdELFlBQVk7Y0FDdEJ1QixRQUFRO1lBQUEsRUFDUCxDQUNHLENBQ0QsQ0FDRCxFQUNOakksTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQStCLEdBQzdDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxXQUFBLENBQUFnQyxNQUFNO2NBQUM1RCxRQUFRLEVBQUUxQyxLQUFLLENBQUMwQyxRQUFRO2NBQUEsR0FBTWdFLFFBQVE7Y0FBRUgsT0FBTyxFQUFDLFNBQVM7Y0FBQzRFLElBQUksRUFBQztZQUFRLEdBQzdFdkcsS0FBSyxDQUFDK0IsT0FBTyxDQUFDbkUsSUFBSSxDQUNYLENBQ0osQ0FDQSxDQUNGO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkZBLElBQUFXLE1BQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBNEUsUUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUErRSxLQUFBLEdBQUEvRSxPQUFBO1VBRUEsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBOEUsTUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUE2SixRQUFBLEdBQUE3SixPQUFBO1VBQ0EsSUFBQXlELEtBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBNkUsTUFBQSxHQUFBN0UsT0FBQTtVQUNBLElBQUE0TCxXQUFBLEdBQUE1TCxPQUFBO1VBQ0EsSUFBQTZMLGFBQUEsR0FBQTdMLE9BQUE7VUFFTztVQUFVLFNBQVU4TCxtQkFBbUJBLENBQUE7WUFDN0MsTUFBTTtjQUFFN0csS0FBSztjQUFFbEMsUUFBUTtjQUFFMUM7WUFBSyxDQUFFLEdBQUcsSUFBQXVFLFFBQUEsQ0FBQU0seUJBQXlCLEdBQUU7WUFDOUQsTUFBTThFLGFBQWEsR0FBRztjQUFFdEMsSUFBSSxFQUFFckgsS0FBSyxDQUFDZSxLQUFLLENBQUNzRyxJQUFJLElBQUksRUFBRTtjQUFFK0IsV0FBVyxFQUFFcEosS0FBSyxDQUFDZSxLQUFLLENBQUNxSSxXQUFXLElBQUk7WUFBRSxDQUFFO1lBQ2xHLE1BQU0xQyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFaEU7WUFBUSxDQUFFO1lBQ3ZDLE1BQU0sQ0FBQ0QsTUFBTSxFQUFFbUgsU0FBUyxDQUFDLEdBQUd6RyxNQUFBLENBQUFVLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQzJFLGFBQWEsQ0FBQztZQUN6RCxNQUFNLENBQUN4SCxLQUFLLEVBQUV1SCxRQUFRLENBQUMsR0FBR3ZHLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUMwRyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHeEksTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXZELE1BQU00RyxlQUFlLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ2xDLElBQUk7Z0JBQ0gsSUFBSUYsU0FBUyxFQUFFO2dCQUVmQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUVsQixJQUFJO2tCQUNILE1BQU1FLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUMvTCxLQUFLLENBQUNlLEtBQUssRUFBRWlMLElBQUksRUFBRUMsSUFBSSxDQUFDO2tCQUM1RHhILE1BQUEsQ0FBQWUsS0FBSyxDQUFDQyxPQUFPLENBQUMsMEJBQTBCLENBQUM7aUJBQ3pDLENBQUMsT0FBT3lHLEdBQUcsRUFBRTtrQkFDYmhLLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLG1DQUFtQyxFQUFFK0osR0FBRyxDQUFDOztnQkFHeERDLFVBQVUsQ0FBQyxNQUFLO2tCQUNmUixZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDO2VBQ1IsQ0FBQyxPQUFPTyxHQUFHLEVBQUU7Z0JBQ2JoSyxPQUFPLENBQUNDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRStKLEdBQUcsQ0FBQzs7WUFFekQsQ0FBQztZQUVELE1BQU1yQyxZQUFZLEdBQUdBLENBQUM7Y0FBRUMsYUFBYSxFQUFFM0U7WUFBTSxDQUFFLEtBQUk7Y0FDbEQsTUFBTTRFLFlBQVksR0FBRztnQkFBRSxHQUFHdEg7Y0FBTSxDQUFFO2NBQ2xDc0gsWUFBWSxDQUFDNUUsTUFBTSxDQUFDa0MsSUFBSSxDQUFDLEdBQUdsQyxNQUFNLENBQUNDLEtBQUs7Y0FDeEN3RSxTQUFTLENBQUNHLFlBQVksQ0FBQztjQUN2QkwsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNTSxZQUFZLEdBQUcsTUFBTzlFLEtBQUssSUFBbUI7Y0FDbkRBLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO2NBQ3RCSixLQUFLLENBQUMrRSxlQUFlLEVBQUU7Y0FDdkIsSUFBSTtnQkFDSCxNQUFNQyxZQUFZLEdBQUlDLFdBQW1CLElBQ3hDQSxXQUFXLENBQUNDLElBQUksRUFBRSxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLQSxDQUFDLENBQUNDLFdBQVcsRUFBRSxDQUFDO2dCQUVqRSxNQUFNeEksSUFBSSxHQUFHLE1BQU1oQyxLQUFLLENBQUN3QyxJQUFJLENBQUM7a0JBQzdCNkUsSUFBSSxFQUFFNkMsWUFBWSxDQUFDekgsTUFBTSxDQUFDNEUsSUFBSSxDQUFDO2tCQUMvQitCLFdBQVcsRUFBRWMsWUFBWSxDQUFDekgsTUFBTSxDQUFDMkcsV0FBVztpQkFDNUMsQ0FBQztnQkFDRjNFLE1BQUEsQ0FBQWUsS0FBSyxDQUFDQyxPQUFPLENBQUMsa0NBQWtDLENBQUM7Z0JBQ2pEK0QsUUFBQSxDQUFBaUIsT0FBTyxDQUFDQyxTQUFTLENBQUMseUJBQXlCMUksSUFBSSxDQUFDSCxFQUFFLEVBQUUsQ0FBQztlQUNyRCxDQUFDLE9BQU9JLENBQUMsRUFBRTtnQkFDWHlILFFBQVEsQ0FBQ3pILENBQUMsQ0FBQzBJLE9BQU8sQ0FBQztnQkFDbkJsRyxNQUFBLENBQUFlLEtBQUssQ0FBQ3JELEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQzs7WUFFakQsQ0FBQztZQUVELE9BQ0NnQixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxjQUNDWCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUFxRyxJQUFJO2NBQUNDLFFBQVEsRUFBRWhCLFlBQVk7Y0FBRWpHLFNBQVMsRUFBQztZQUEyQixHQUNsRVosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMEIsR0FDeENaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNyQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQUksR0FBRWEsS0FBSyxDQUFDcEIsTUFBTSxDQUFDNkQsSUFBSSxDQUFLLEVBQ3pDbEUsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBdUcsS0FBSztjQUNMQyxXQUFXLEVBQUV0RyxLQUFLLENBQUNzRyxXQUFXLENBQUM3RCxJQUFJO2NBQ25DakMsS0FBSyxFQUFFM0MsTUFBTSxDQUFDNEUsSUFBSTtjQUNsQkEsSUFBSSxFQUFDLE1BQU07Y0FDWDhELElBQUksRUFBQyxNQUFNO2NBQ1g5RSxRQUFRLEVBQUV3RCxZQUFZO2NBQ3RCdUIsUUFBUTtZQUFBLEVBQ1AsQ0FDRyxFQUNOakksTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBSSxHQUFFYSxLQUFLLENBQUNwQixNQUFNLENBQUM0RixXQUFXLENBQUssRUFDaERqRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUEyRyxRQUFRO2NBQ1JDLElBQUksRUFBRSxDQUFDO2NBQ1BqRSxJQUFJLEVBQUMsYUFBYTtjQUNsQmpDLEtBQUssRUFBRTNDLE1BQU0sQ0FBQzJHLFdBQVc7Y0FDekI4QixXQUFXLEVBQUV0RyxLQUFLLENBQUNzRyxXQUFXLENBQUM5QixXQUFXO2NBQzFDL0MsUUFBUSxFQUFFd0Q7WUFBWSxFQUNyQixDQUNHLENBQ0QsRUFDTjFHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFzQixHQUNwQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lILFdBQUEsQ0FBQTdDLFVBQVUsT0FBRyxFQUNkdkYsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUQsR0FDckVaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGVBQU9jLEtBQUssQ0FBQ3dILFNBQVMsQ0FBUSxFQUM5QmpKLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNVLE1BQUEsQ0FBQThDLFVBQVU7Y0FDVnRELEtBQUssRUFBRVksS0FBSyxDQUFDK0IsT0FBTyxDQUFDMEYsSUFBSTtjQUN6QnRJLFNBQVMsRUFBQyxjQUFjO2NBQ3hCcUQsSUFBSSxFQUFFLFdBQVc7Y0FDakJWLFFBQVEsRUFBRSxDQUFDMUcsS0FBSyxDQUFDZSxLQUFLLEVBQUVpTCxJQUFJLEVBQUVDLElBQUk7Y0FDbEN6RixPQUFPLEVBQUVvRjtZQUFlLEVBQ3ZCLENBQ0csRUFDTnpJLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF3QixHQUN0Q1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQVksR0FBRS9ELEtBQUssQ0FBQ2UsS0FBSyxFQUFFaUwsSUFBSSxFQUFFQyxJQUFJLElBQUksZUFBZSxDQUFRLENBQzNFLENBQ0QsQ0FDRCxDQUNELEVBRU45SSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMkIsR0FDekNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQWdDLE1BQU07Y0FBQzVELFFBQVEsRUFBRTFDLEtBQUssQ0FBQzBDLFFBQVE7Y0FBQSxHQUFNZ0UsUUFBUTtjQUFFSCxPQUFPLEVBQUMsU0FBUztjQUFDNEUsSUFBSSxFQUFDO1lBQVEsR0FDN0V2RyxLQUFLLENBQUMrQixPQUFPLENBQUNuRSxJQUFJLENBQ1gsQ0FDSixDQUNBLEVBQ1BXLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFzQixHQUNwQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsS0FBQSxDQUFBa0osVUFBVTtjQUFDdE0sS0FBSyxFQUFFQSxLQUFLO2NBQUVnQyxJQUFJLEVBQUVoQyxLQUFLLENBQUNrQixRQUFRO2NBQUVzQyxNQUFNLEVBQUVvQixLQUFLLENBQUNpQixJQUFJLENBQUNHLFFBQVE7Y0FBRXJFLElBQUksRUFBRTtZQUFTLEVBQUksRUFDaEd3QixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixLQUFBLENBQUFrSixVQUFVO2NBQUN0TSxLQUFLLEVBQUVBLEtBQUs7Y0FBRWdDLElBQUksRUFBRWhDLEtBQUssQ0FBQ29CLE9BQU87Y0FBRW9DLE1BQU0sRUFBRW9CLEtBQUssQ0FBQ2lCLElBQUksQ0FBQ0MsUUFBUTtjQUFFbkUsSUFBSSxFQUFFO1lBQVEsRUFBSSxFQUM5RndCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUMwSCxhQUFBLENBQUFqSSxZQUFZO2NBQUN2QixJQUFJLEVBQUVoQyxLQUFLLENBQUNtQixRQUFRO2NBQUVxQyxNQUFNLEVBQUVvQixLQUFLLENBQUNpQixJQUFJLENBQUN6QjtZQUFPLEVBQUksQ0FDN0QsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9IQSxJQUFBakIsTUFBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUE0SCxHQUFBLEdBQUE1SCxPQUFBO1VBQ0EsSUFBQTRFLFFBQUEsR0FBQTVFLE9BQUE7VUFDQSxJQUFBOEksTUFBQSxHQUFBOUksT0FBQTtVQUNBLElBQUE0TSxlQUFBLEdBQUE1TSxPQUFBO1VBQ0EsSUFBQTZNLE9BQUEsR0FBQTdNLE9BQUE7VUFFQSxJQUFBOE0sT0FBQSxHQUFBOU0sT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQTBELE1BQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBK0UsS0FBQSxHQUFBL0UsT0FBQTtVQUNBLElBQUErTSxPQUFBLEdBQUEvTSxPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDMk0sVUFBVSxFQUFFL0gsS0FBSyxDQUFDLEdBQUcsSUFBQTZELE1BQUEsQ0FBQW1FLFFBQVEsRUFBQ0wsZUFBQSxDQUFBTSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNwSyxRQUFRLEVBQUV1RixXQUFXLENBQUMsR0FBRzlFLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDaEYsS0FBSyxDQUFDMEMsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ3BCLEtBQUssRUFBRXlMLFFBQVEsQ0FBQyxHQUFHNUosTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUNoRixLQUFLLENBQUNzQixLQUFLLENBQUM7WUFFckQsSUFBQW1MLE9BQUEsQ0FBQTNELFNBQVMsRUFBQyxDQUFDOUksS0FBSyxDQUFDZSxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQzdCa0gsV0FBVyxDQUFDakksS0FBSyxDQUFDZSxLQUFLLEVBQUUyQixRQUFRLENBQUM7WUFDbkMsQ0FBQyxDQUFDO1lBRUYsSUFBQStKLE9BQUEsQ0FBQTNELFNBQVMsRUFBQyxDQUFDOUksS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QitNLFFBQVEsQ0FBQy9NLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUNBLEtBQUssSUFBSSxDQUFDcUwsVUFBVSxFQUFFLE9BQU94SixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxXQUFBLENBQUEwSSxhQUFhLE9BQUc7WUFFbkQsTUFBTTVILEtBQUssR0FBRztjQUFFcEYsS0FBSztjQUFFMEMsUUFBUTtjQUFFa0M7WUFBSyxDQUFFO1lBQ3hDLE1BQU1xSSxHQUFHLEdBQUcsSUFBSXZLLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBRS9DLE1BQU1lLE9BQU8sR0FBR3pELEtBQUssQ0FBQ2dCLE1BQU0sS0FBSyxLQUFLLEdBQUcwRCxLQUFBLENBQUErRSxhQUFhLEdBQUd6SixLQUFLLENBQUNlLEtBQUssRUFBRXNHLElBQUksR0FBR3FGLE9BQUEsQ0FBQWpCLG1CQUFtQixHQUFHcEksTUFBQSxDQUFBMkYsY0FBYztZQUVqSCxPQUNDN0YsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQVgsTUFBQSxDQUFBVSxPQUFBLENBQUFxQyxRQUFBLFFBQ0MvQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxRQUFBLENBQUFzRCxzQkFBc0IsQ0FBQ3FGLFFBQVE7Y0FBQzlILEtBQUssRUFBRUE7WUFBSyxHQUM1Q2pDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUMwSSxPQUFBLENBQUEvRSxNQUFNLE9BQUcsRUFDVnRFLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUN5RCxHQUFBLENBQUE0RixhQUFhO2NBQUNwSixTQUFTLEVBQUVrSixHQUFHO2NBQUV2SyxRQUFRLEVBQUVBO1lBQVEsR0FDaERTLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUMzQ1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsT0FBTyxPQUFHLENBQ04sQ0FDUyxDQUNpQixDQUNoQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBTixNQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQTRFLFFBQUEsR0FBQTVFLE9BQUE7VUFFTSxTQUFVaUUsU0FBU0EsQ0FBQztZQUFFUTtVQUFPLENBQUU7WUFDcEMsTUFBTTtjQUFFUTtZQUFLLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLHlCQUF5QixHQUFFO1lBRTdDLE1BQU11SSxTQUFTLEdBQUdoSixPQUFPLEdBQ3RCUSxLQUFLLENBQUN1RSxLQUFLLENBQUNrRSxTQUFTLENBQUNoRCxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUl6RixLQUFLLENBQUMrQixPQUFPLENBQUM5RCxNQUFNLEdBQUcsQ0FBQyxHQUNyRStCLEtBQUssQ0FBQ3VFLEtBQUssQ0FBQy9FLE9BQU87WUFFdEIsT0FDQ2pCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFtRCxHQUNqRVosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksRyxLQUFHcUosU0FBUyxDQUFRLENBQ25DO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQWpLLE1BQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBNEUsUUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQXlELEtBQUEsR0FBQXpELE9BQUE7VUFDQSxJQUFBMkQsS0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUEwRCxNQUFBLEdBQUExRCxPQUFBO1VBQ0EsSUFBQTJOLE1BQUEsR0FBQTNOLE9BQUE7VUFDQSxJQUFBK0UsS0FBQSxHQUFBL0UsT0FBQTtVQUNBLElBQUE4RSxNQUFBLEdBQUE5RSxPQUFBO1VBU00sU0FBVTJNLFVBQVVBLENBQUM7WUFBRXRLLElBQUk7WUFBRXdCLE1BQU07WUFBRTdCLElBQUk7WUFBRTNCO1VBQUssQ0FBZTtZQUNwRSxNQUFNO2NBQUU0RTtZQUFLLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLHlCQUF5QixHQUFFO1lBQzdDLE1BQU04RSxhQUFhLEdBQUc7Y0FDckJ0QyxJQUFJLEVBQUUsRUFBRTtjQUNSUixLQUFLLEVBQUU7YUFDUDtZQUNELE1BQU0sQ0FBQ3BFLE1BQU0sRUFBRW1ILFNBQVMsQ0FBQyxHQUFHekcsTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUMyRSxhQUFhLENBQUM7WUFDekQsTUFBTSxDQUFDdEosSUFBSSxFQUFFa04sT0FBTyxDQUFDLEdBQUdwSyxNQUFBLENBQUFVLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTSxDQUFDd0ksT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3RLLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNLENBQUM3QyxLQUFLLEVBQUV1SCxRQUFRLENBQUMsR0FBR3ZHLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1QyxNQUFNNkUsWUFBWSxHQUFHQSxDQUFDO2NBQUVDLGFBQWEsRUFBRTNFO1lBQU0sQ0FBRSxLQUFJO2NBQ2xELE1BQU00RSxZQUFZLEdBQUc7Z0JBQUUsR0FBR3RIO2NBQU0sQ0FBRTtjQUNsQ3NILFlBQVksQ0FBQzVFLE1BQU0sQ0FBQ2tDLElBQUksQ0FBQyxHQUFHbEMsTUFBTSxDQUFDQyxLQUFLO2NBQ3hDd0UsU0FBUyxDQUFDRyxZQUFZLENBQUM7Y0FDdkJMLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDYixDQUFDO1lBRUQsU0FBU2dFLFdBQVdBLENBQUE7Y0FDbkJoRSxRQUFRLENBQUMsRUFBRSxDQUFDO2NBQ1orRCxVQUFVLENBQUMsS0FBSyxDQUFDO2NBQ2pCN0QsU0FBUyxDQUFDRCxhQUFhLENBQUM7Y0FDeEI0RCxPQUFPLENBQUMsQ0FBQ2xOLElBQUksQ0FBQztZQUNmO1lBRUEsTUFBTTJKLFlBQVksR0FBRyxNQUFNOUUsS0FBSyxJQUFHO2NBQ2xDQSxLQUFLLENBQUNJLGNBQWMsRUFBRTtjQUN0Qm1JLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDaEIsTUFBTUUsUUFBUSxHQUFHLE1BQU0zTixLQUFLLENBQUM2QyxNQUFNLENBQUM7Z0JBQUUsR0FBR0osTUFBTTtnQkFBRWQ7Y0FBSSxDQUFFLENBQUM7Y0FDeEQsSUFBSSxDQUFDZ00sUUFBUSxDQUFDaEwsTUFBTSxFQUFFO2dCQUNyQitHLFFBQVEsQ0FBQ2lFLFFBQVEsQ0FBQ3hMLEtBQUssQ0FBQztnQkFDeEJzQyxNQUFBLENBQUFlLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdEQsS0FBSyxDQUFDOztjQUdyQnNDLE1BQUEsQ0FBQWUsS0FBSyxDQUFDQyxPQUFPLENBQUNiLEtBQUssQ0FBQ2dKLE1BQU0sQ0FBQy9LLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQztjQUMxQ2lJLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFFRCxTQUFTRyxXQUFXQSxDQUFBO2NBQ25CTixPQUFPLENBQUMsQ0FBQ2xOLElBQUksQ0FBQztZQUNmO1lBRUEsTUFBTTtjQUFFZ0gsSUFBSTtjQUFFUjtZQUFLLENBQUUsR0FBR3BFLE1BQU07WUFFOUIsTUFBTWdCLE9BQU8sR0FBR3pCLElBQUksRUFBRTBCLE1BQU0sR0FBRyxDQUFDLEdBQUdOLEtBQUEsQ0FBQU8sSUFBSSxHQUFHTixNQUFBLENBQUFPLFNBQVM7WUFFbkQsTUFBTWtLLFVBQVUsR0FBR2xKLEtBQUssQ0FBQ21KLEtBQUssQ0FBQ2xMLE1BQU0sQ0FBQ21CLEtBQUssQ0FBQ3FHLE9BQU8sQ0FBQyxPQUFPLEVBQUU3RyxNQUFNLENBQUN1QyxNQUFNLENBQUM7WUFFM0UsT0FDQzVDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF3QixHQUN0Q1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFUCxNQUFNLENBQUNRLEtBQUssQ0FBUSxFQUN6Q3JDLElBQUksSUFBSXdCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQWdDLE1BQU07Y0FBQ2MsSUFBSSxFQUFDLEtBQUs7Y0FBQ3hCLEtBQUssRUFBRWhCLEtBQUssQ0FBQytCLE9BQU8sQ0FBQzlELE1BQU07Y0FBRWtCLFNBQVMsRUFBQyxLQUFLO2NBQUN5QyxPQUFPLEVBQUVxSDtZQUFXLEVBQUksQ0FDNUYsRUFFTHhOLElBQUksSUFDSjhDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUN3SixNQUFBLENBQUFVLEtBQUs7Y0FBQzNOLElBQUk7Y0FBQzBELFNBQVMsRUFBQyxjQUFjO2NBQUNrSyxPQUFPLEVBQUVKO1lBQVcsR0FDeEQxSyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFK0osVUFBVSxDQUFRLEVBQ3hDM0ssTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBcUcsSUFBSTtjQUFDaEgsU0FBUyxFQUFDLE9BQU87Y0FBQ2lILFFBQVEsRUFBRWhCO1lBQVksR0FDN0M3RyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxLQUFBLENBQUF1RyxLQUFLO2NBQ0xyRixLQUFLLEVBQUMsTUFBTTtjQUNadUYsSUFBSSxFQUFDLE1BQU07Y0FDWDlELElBQUksRUFBQyxNQUFNO2NBQ1hqQyxLQUFLLEVBQUVpQyxJQUFJO2NBQ1hoQixRQUFRLEVBQUV3RCxZQUFZO2NBQ3RCcUIsV0FBVyxFQUFDLGlCQUFpQjtjQUM3QkUsUUFBUTtZQUFBLEVBQ1AsRUFDRmpJLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQXVHLEtBQUs7Y0FDTEMsV0FBVyxFQUFDLGtCQUFrQjtjQUM5QnRGLEtBQUssRUFBQyxPQUFPO2NBQ2J1RixJQUFJLEVBQUMsT0FBTztjQUNaOUQsSUFBSSxFQUFDLE9BQU87Y0FDWmpDLEtBQUssRUFBRXlCLEtBQUs7Y0FDWlIsUUFBUSxFQUFFd0QsWUFBWTtjQUN0QnVCLFFBQVE7WUFBQSxFQUNQLEVBQ0ZqSSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQWdDLE1BQU07Y0FDTjZFLElBQUksRUFBQyxRQUFRO2NBQ2I1RSxPQUFPLEVBQUMsU0FBUztjQUNqQmEsSUFBSSxFQUFDLFlBQVk7Y0FDakJvRyxPQUFPLEVBQUVBLE9BQU87Y0FDaEI1SCxLQUFLLEVBQUM7WUFBUSxFQUNiLENBQ0csQ0FDQSxDQUVSLEVBRUR6QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTCxPQUFPO2NBQUMzQixLQUFLLEVBQUUsRUFBRTtjQUFFbUMsS0FBSyxFQUFFakMsSUFBSTtjQUFFa0MsT0FBTyxFQUFFWixLQUFBLENBQUFhLElBQUk7Y0FBRUMsT0FBTyxFQUFFLENBQUMsQ0FBQ3pDO1lBQUksRUFBSSxDQUM5RDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlHQSxJQUFBd0IsTUFBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUEwRSxNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsUUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxNQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQTJOLE1BQUEsR0FBQTNOLE9BQUE7VUFDQSxJQUFBOEUsTUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUErRSxLQUFBLEdBQUEvRSxPQUFBO1VBRU0sU0FBVXdFLElBQUlBLENBQUM7WUFBRVE7VUFBSSxDQUFFO1lBQzVCLE1BQU07Y0FBRUMsS0FBSztjQUFFNUU7WUFBSyxDQUFFLEdBQUcsSUFBQXVFLFFBQUEsQ0FBQU0seUJBQXlCLEdBQUU7WUFDcEQsTUFBTSxDQUFDeEUsSUFBSSxFQUFFa04sT0FBTyxDQUFDLEdBQUdwSyxNQUFBLENBQUFVLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTSxDQUFDRixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHNUIsTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUNMLElBQUksQ0FBQ2hELElBQUksSUFBSSxTQUFTLENBQUM7WUFDMUUsTUFBTSxDQUFDNkwsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3RLLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNLENBQUNrSixZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHaEwsTUFBQSxDQUFBVSxPQUFLLENBQUNtQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdELE1BQU0sQ0FBQ29KLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2xMLE1BQUEsQ0FBQVUsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLElBQUksQ0FBQztZQUVoRSxNQUFNZ0YsWUFBWSxHQUFHLE1BQU05RSxLQUFLLElBQUc7Y0FDbENBLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO2NBQ3RCLElBQUk7Z0JBQ0htSSxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNoQixJQUFJOUksSUFBSSxDQUFDaEQsSUFBSSxLQUFLLFNBQVMsRUFBRTtrQkFDNUIsT0FBTzhDLE1BQUEsQ0FBQWUsS0FBSyxDQUFDOEksT0FBTyxDQUFDLDhEQUE4RCxDQUFDOztnQkFHckYsTUFBTXRPLEtBQUssQ0FBQ2tELFVBQVUsQ0FBQztrQkFBRXZCLElBQUksRUFBRW1ELFVBQVU7a0JBQUVTLEdBQUcsRUFBRVosSUFBSSxDQUFDWTtnQkFBRyxDQUFFLENBQUM7Z0JBRTNEZCxNQUFBLENBQUFlLEtBQUssQ0FBQ0MsT0FBTyxDQUFDYixLQUFLLENBQUNnSixNQUFNLENBQUMvSyxNQUFNLENBQUM0QyxPQUFPLENBQUM7ZUFDMUMsQ0FBQyxPQUFPeEQsQ0FBQyxFQUFFO2dCQUNYd0MsTUFBQSxDQUFBZSxLQUFLLENBQUNyRCxLQUFLLENBQUMsc0JBQXNCLENBQUM7Z0JBQ25DRCxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1R3TCxVQUFVLENBQUMsS0FBSyxDQUFDOztZQUVuQixDQUFDO1lBRUQsTUFBTXhJLGdCQUFnQixHQUFHQyxLQUFLLElBQUc7Y0FDaENILGFBQWEsQ0FBQ0csS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBRUQsU0FBU3lJLFdBQVdBLENBQUE7Y0FDbkJOLE9BQU8sQ0FBQyxDQUFDbE4sSUFBSSxDQUFDO1lBQ2Y7WUFFQSxNQUFNc0YsT0FBTyxHQUFHLENBQ2Y7Y0FBRVAsS0FBSyxFQUFFLFNBQVM7Y0FBRVEsS0FBSyxFQUFFaEIsS0FBSyxDQUFDaUIsSUFBSSxDQUFDQyxRQUFRLENBQUNDO1lBQU0sQ0FBRSxFQUN2RDtjQUFFWCxLQUFLLEVBQUUsU0FBUztjQUFFUSxLQUFLLEVBQUVoQixLQUFLLENBQUNpQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0Q7WUFBTSxDQUFFLENBQ3ZEO1lBRUQsT0FDQzVDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUlpRCxHQUFHLEVBQUVwQyxJQUFJLENBQUM5QyxFQUFFO2NBQUVrQyxTQUFTLEVBQUM7WUFBd0IsR0FDbkRaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFvQixHQUNqQ1ksSUFBSSxFQUFFcUMsUUFBUSxHQUFHN0QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ08sTUFBQSxDQUFBNEMsS0FBSztjQUFDQyxHQUFHLEVBQUV2QyxJQUFJLEVBQUVxQztZQUFRLEVBQUksR0FBRzdELE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNVLE1BQUEsQ0FBQTJDLElBQUk7Y0FBQ3BELFNBQVMsRUFBQyxJQUFJO2NBQUNxRCxJQUFJLEVBQUU7WUFBTSxFQUFJLEVBQ3hGakUsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksR0FBRVksSUFBSSxDQUFDMEMsSUFBSSxDQUFRLENBQ2xDLEVBQ05sRSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNRLFdBQUEsQ0FBQWdDLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtjQUFDQyxRQUFRLEVBQUUvQixJQUFJLENBQUNoRCxJQUFJLEtBQUssU0FBUztjQUFFNkUsT0FBTyxFQUFFcUg7WUFBVyxHQUN4RmpKLEtBQUssQ0FBQytCLE9BQU8sQ0FBQzRILElBQUksQ0FDWCxFQUNUcEwsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1UsTUFBQSxDQUFBOEMsVUFBVTtjQUFDRixJQUFJLEVBQUMsVUFBVTtjQUFDVixRQUFRO2NBQUMzQyxTQUFTLEVBQUM7WUFBUSxFQUFHLENBQ3JELEVBRUwxRCxJQUFJLElBQ0o4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0osTUFBQSxDQUFBVSxLQUFLO2NBQUMzTixJQUFJO2NBQUMwRCxTQUFTLEVBQUMsZ0JBQWdCO2NBQUNrSyxPQUFPLEVBQUVKO1lBQVcsR0FDMUQxSyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYSxHQUMzQlosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksR0FBRWEsS0FBSyxDQUFDbUosS0FBSyxDQUFDUSxJQUFJLENBQUN2SyxLQUFLLENBQVEsRUFDcERiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFJLEdBQUVhLEtBQUssQ0FBQ21KLEtBQUssQ0FBQ1EsSUFBSSxDQUFDQyxJQUFJLENBQUssQ0FDeEMsRUFDTnJMLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQXlCLE1BQU07Y0FBQ3RFLEVBQUUsRUFBQyxZQUFZO2NBQUM4RCxPQUFPLEVBQUVBLE9BQU87Y0FBRVMsWUFBWSxFQUFFdEIsVUFBVTtjQUFFdUIsUUFBUSxFQUFFcEI7WUFBZ0IsRUFBSSxFQUNsRzlCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1EsV0FBQSxDQUFBZ0MsTUFBTTtjQUNONkUsSUFBSSxFQUFDLFFBQVE7Y0FDYjVFLE9BQU8sRUFBQyxTQUFTO2NBQ2pCYSxJQUFJLEVBQUMsWUFBWTtjQUNqQm9HLE9BQU8sRUFBRUEsT0FBTztjQUNoQmhILE9BQU8sRUFBRXdEO1lBQVksR0FFcEJwRixLQUFLLENBQUMrQixPQUFPLENBQUNuRSxJQUFJLENBQ1gsQ0FDSixDQUVQLENBQ0c7VUFFUCJ9