System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.25/components/ui", "@aimpact/ailearn-app@0.0.25/config", "@aimpact/ailearn-app@0.0.25/components/icons", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0025ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0025ComponentsUi;
    }, function (_aimpactAilearnApp0025Config) {
      dependency_14 = _aimpactAilearnApp0025Config;
    }, function (_aimpactAilearnApp0025ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0025ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.25"], ["@aimpact/ailearn-app", "0.0.25"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.25/classroom/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/toast', dependency_11], ['pragmate-ui/form', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classroom-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.25/classroom/management.widget",
        "is": "page",
        "route": "/classroom/management/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.25/classroom/management.widget');
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
        hash: 469311279,
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
            return _react.default.createElement("section", null, _react.default.createElement(_ui.NavbarHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwibWVtYmVycyIsInVuZGVmaW5lZCIsInJlYWR5IiwiZmlsdGVyVXNlcnNCeVJvbGVBbmRSZXR1cm5BbGwiLCJwZW9wbGUiLCJmaWx0ZXIiLCJ1c2VyIiwicm9sZSIsImF1dGhvcml6ZWQiLCJpZCIsInNwZWNzIiwiQ2xhc3Nyb29tIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwibG9nIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfcmVhY3QiLCJfbGlzdCIsIl9lbXB0eSIsIl9pdGVtIiwiQXBwcm92YWxMaXN0IiwibGFiZWxzIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJFbXB0eUxpc3QiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsInBlbmRpbmciLCJfaW1hZ2UiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2ljb25zIiwiX3RvYXN0IiwiX2Zvcm0iLCJpdGVtIiwidGV4dHMiLCJ1c2VNYW5hZ2VDbGFzc3Jvb21Db250ZXh0Iiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJ1c2VTdGF0ZSIsImhhbmRsZVJvbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQXBwcm92ZSIsInByZXZlbnREZWZhdWx0IiwidWlkIiwidG9hc3QiLCJzdWNjZXNzIiwiaGFuZGxlUmVqZWN0Iiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsInN0dWRlbnRzIiwic2luZ2xlIiwidGVhY2hlcnMiLCJDaG9pY2VSb2xlIiwiRnJhZ21lbnQiLCJTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsImFjdGlvbnMiLCJXYWl0aW5nSm9pbiIsImVtYWlsIiwiaW52aXRlZCIsImtleSIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiaWNvbiIsIm5hbWUiLCJJY29uQnV0dG9uIiwiX3VpIiwiX2NvbmZpZyIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsIk1hbmFnZUNsYXNzcm9vbUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwic2V0RmV0Y2hpbmciLCJnZW5lcmF0ZUltYWdlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiSUNPTlMiLCJhaVN0YXJzIiwiZ2VuZXJhdGUiLCJ1cGxvYWQiLCJfYWN0aW9ucyIsIl9ob29rcyIsIkNvdmVySW1hZ2UiLCJpbWFnZSIsInNldEltYWdlIiwicGljdHVyZSIsInVzZUJpbmRlciIsIlByb2Nlc3NDb250YWluZXIiLCJFbXB0eUNsYXNzcm9vbSIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImRlc2NyaXB0aW9uIiwiTGluayIsImhyZWYiLCJjcmVhdGUiLCJfcm91dGluZyIsIkNsYXNzcm9vbUZvcm0iLCJzZXRFcnJvciIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZm9ybWF0U3RyaW5nIiwiaW5wdXRTdHJpbmciLCJ0cmltIiwicmVwbGFjZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwibWVzc2FnZSIsIlBhZ2VUaXRsZSIsIlBhZ2VTdWJ0aXRsZSIsInBvc3RUaXRsZSIsIkZvcm0iLCJvblN1Ym1pdCIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsInJvd3MiLCJfY292ZXJJbWFnZSIsIl9hcHByb3ZhbExpc3QiLCJVcGRhdGVDbGFzc3Jvb21Gb3JtIiwiaXNDb3B5aW5nIiwic2V0SXNDb3B5aW5nIiwiY29weVRvQ2xpcGJvYXJkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwiam9pbiIsImNvZGUiLCJlcnIiLCJzZXRUaW1lb3V0IiwiY2xhc3NDb2RlIiwiY29weSIsIlBlb3BsZUxpc3QiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl91cGRhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJjbHMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJfbW9kYWwiLCJzZXRTaG93IiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlTW9kYWwiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIm9uQ2xvc2UiLCJvcGVuU2VsZWN0b3IiLCJzZXRPcGVuU2VsZWN0b3IiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwid2FybmluZyIsImVkaXQiLCJpbmZvIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXBwcm92YWwtbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvYXBwcm92YWwtbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vdXBkYXRlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FB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