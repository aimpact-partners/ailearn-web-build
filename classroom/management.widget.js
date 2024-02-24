System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/components/icons", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Header, ClassroomForm, UpdateClassroomForm, View, __beyond_pkg, hmr;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.24/classroom/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/toast', dependency_11], ['pragmate-ui/form', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['pragmate-ui/modal', dependency_19]]);
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
        hash: 2337772046,
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
              breadcrumb: [['AI-Learn', '/'], ['Classrooms', '/classrooms/list'], ['Management', '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInBhcmFtcyIsIm9iamVjdGl2ZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImlkIiwic3BlY3MiLCJDbGFzc3Jvb20iLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZSIsImNsYXNzcm9vbXMiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwic2F2ZSIsInZhbHVlcyIsImZldGNoaW5nIiwic3RhdHVzIiwiRXJyb3IiLCJpbnZpdGUiLCJsb2ciLCJhcHByb3ZlIiwicmVzIiwicmVqZWN0IiwidXBkYXRlUm9sZSIsIl9yZWFjdCIsIl9saXN0IiwiX2VtcHR5IiwiX2l0ZW0iLCJBcHByb3ZhbExpc3QiLCJsYWJlbHMiLCJDb250cm9sIiwibGVuZ3RoIiwiTGlzdCIsIkVtcHR5TGlzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwicGVuZGluZyIsIl9pbWFnZSIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaWNvbnMiLCJfdG9hc3QiLCJfZm9ybSIsIml0ZW0iLCJ0ZXh0cyIsInVzZU1hbmFnZUNsYXNzcm9vbUNvbnRleHQiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInVzZVN0YXRlIiwiaGFuZGxlUm9sZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBcHByb3ZlIiwicHJldmVudERlZmF1bHQiLCJ1aWQiLCJyb2xlIiwidG9hc3QiLCJzdWNjZXNzIiwiaGFuZGxlUmVqZWN0Iiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsInN0dWRlbnRzIiwic2luZ2xlIiwidGVhY2hlcnMiLCJrZXkiLCJwaG90b1VybCIsIkltYWdlIiwic3JjIiwiSWNvbiIsImljb24iLCJuYW1lIiwiU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwiSWNvbkJ1dHRvbiIsIl91aSIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiTWFuYWdlQ2xhc3Nyb29tQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJzZXRGZXRjaGluZyIsImdlbmVyYXRlSW1hZ2UiLCJnZW5lcmF0ZVBpY3R1cmUiLCJJQ09OUyIsImFpU3RhcnMiLCJnZW5lcmF0ZSIsInVwbG9hZCIsIl9hY3Rpb25zIiwiX2hvb2tzIiwiQ292ZXJJbWFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwaWN0dXJlIiwidXNlQmluZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkVtcHR5Q2xhc3Nyb29tIiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImNyZWF0ZSIsIl9yb3V0aW5nIiwiQ2xhc3Nyb29tRm9ybSIsInNldEVycm9yIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtYXRTdHJpbmciLCJpbnB1dFN0cmluZyIsInRyaW0iLCJyZXBsYWNlIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtZXNzYWdlIiwiUGFnZVRpdGxlIiwiUGFnZVN1YnRpdGxlIiwicG9zdFRpdGxlIiwiRm9ybSIsIm9uU3VibWl0IiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwicm93cyIsIl9jb3ZlckltYWdlIiwiX2FwcHJvdmFsTGlzdCIsIlVwZGF0ZUNsYXNzcm9vbUZvcm0iLCJpc0NvcHlpbmciLCJzZXRJc0NvcHlpbmciLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJqb2luIiwiY29kZSIsImVyciIsInNldFRpbWVvdXQiLCJjbGFzc0NvZGUiLCJjb3B5IiwiUGVvcGxlTGlzdCIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfaG9va3MyIiwiX3VwZGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsImNscyIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiZW1wdHlUZXh0IiwibGFiZWxMaXN0IiwiX21vZGFsIiwiZW1haWwiLCJzZXRTaG93IiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwic3lzdGVtIiwiaGFuZGxlTW9kYWwiLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIm9uQ2xvc2UiLCJvcGVuU2VsZWN0b3IiLCJzZXRPcGVuU2VsZWN0b3IiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwid2FybmluZyIsImVkaXQiLCJpbmZvIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXBwcm92YWwtbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvYXBwcm92YWwtbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vdXBkYXRlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVSxJQUFJLEVB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