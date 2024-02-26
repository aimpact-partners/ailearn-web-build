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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 1127343119,
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
                this.#model = new _core.Classroom(specs);
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
        hash: 1986251034,
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
            const [selectRole, setSelectRole] = _react.default.useState('student');
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
        hash: 3055102842,
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
            console.log(store.model);
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
              data: store.model?.teachers,
              labels: texts.list.teachers,
              role: 'teacher'
            }), _react.default.createElement(_list.PeopleList, {
              store: store,
              data: store.model?.students,
              labels: texts.list.students,
              role: 'student'
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
        hash: 3928322658,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImlkIiwic3BlY3MiLCJDbGFzc3Jvb20iLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJpbnZpdGUiLCJsb2ciLCJhcHByb3ZlIiwicmVzIiwicmVqZWN0IiwidXBkYXRlUm9sZSIsIl9yZWFjdCIsIl9saXN0IiwiX2VtcHR5IiwiX2l0ZW0iLCJBcHByb3ZhbExpc3QiLCJsYWJlbHMiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwicGVuZGluZyIsIl9pbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaWNvbnMiLCJfdG9hc3QiLCJfZm9ybSIsIml0ZW0iLCJ0ZXh0cyIsInVzZU1hbmFnZUNsYXNzcm9vbUNvbnRleHQiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInVzZVN0YXRlIiwiaGFuZGxlUm9sZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBcHByb3ZlIiwicHJldmVudERlZmF1bHQiLCJ1aWQiLCJyb2xlIiwidG9hc3QiLCJzdWNjZXNzIiwiaGFuZGxlUmVqZWN0Iiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsInN0dWRlbnRzIiwic2luZ2xlIiwidGVhY2hlcnMiLCJrZXkiLCJwaG90b1VybCIsIkltYWdlIiwic3JjIiwiSWNvbiIsImljb24iLCJuYW1lIiwiU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwiSWNvbkJ1dHRvbiIsIl91aSIsIl9jb25maWciLCJIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIkFQUF9OQU1FIiwiTWFuYWdlQ2xhc3Nyb29tQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJzZXRGZXRjaGluZyIsImdlbmVyYXRlSW1hZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJJQ09OUyIsImFpU3RhcnMiLCJnZW5lcmF0ZSIsInVwbG9hZCIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiQ292ZXJJbWFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwidXNlQmluZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkVtcHR5Q2xhc3Nyb29tIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImNyZWF0ZSIsIl9yb3V0aW5nIiwiQ2xhc3Nyb29tRm9ybSIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtYXRTdHJpbmciLCJpbnB1dFN0cmluZyIsInRyaW0iLCJyZXBsYWNlIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtZXNzYWdlIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwicG9zdFRpdGxlIiwiRm9ybSIsIm9uU3VibWl0IiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwicm93cyIsIl9jb3ZlckltYWdlIiwiX2FwcHJvdmFsTGlzdCIsIlVwZGF0ZUNsYXNzcm9vbUZvcm0iLCJpc0NvcHlpbmciLCJzZXRJc0NvcHlpbmciLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJqb2luIiwiY29kZSIsImVyciIsInNldFRpbWVvdXQiLCJjbGFzc0NvZGUiLCJjb3B5IiwiUGVvcGxlTGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfaG9va3MyIiwiX3VwZGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsImNscyIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiZW1wdHlUZXh0IiwibGFiZWxMaXN0IiwiX21vZGFsIiwiZW1haWwiLCJzZXRTaG93IiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlTW9kYWwiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIm9uQ2xvc2UiLCJvcGVuU2VsZWN0b3IiLCJzZXRPcGVuU2VsZWN0b3IiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwid2FybmluZyIsImVkaXQiLCJpbmZvIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXBwcm92YWwtbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvYXBwcm92YWwtbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vdXBkYXRlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxD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