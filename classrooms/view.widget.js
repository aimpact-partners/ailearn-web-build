System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-app@0.0.27/components/ui", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/form", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.27/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, Header, EntityForm, UpdateClassroomForm, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    EntityForm: void 0,
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
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_8 = _aimpactAilearnApp0027Config;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_pragmateUi006Toast) {
      dependency_10 = _pragmateUi006Toast;
    }, function (_pragmateUi006Form) {
      dependency_11 = _pragmateUi006Form;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_12 = _beyondJsReact18Widgets104Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006Icons) {
      dependency_14 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0027ComponentsCoverImageCode) {
      dependency_15 = _aimpactAilearnApp0027ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_18 = _pragmateUi006FormReactSelect;
    }, function (_pragmateUi006List) {
      dependency_19 = _pragmateUi006List;
    }, function (_pragmateUi006Image) {
      dependency_20 = _pragmateUi006Image;
    }, function (_pragmateUi006Modal) {
      dependency_21 = _pragmateUi006Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/form', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/cover-image.code', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/classrooms/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 398392217,
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
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2690229917,
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
            get managers() {
              return this.model.managers;
            }
            get pendings() {
              return this.model.pendings;
            }
            get members() {
              return this.model.members;
            }
            clear() {
              this.#model = undefined;
              this.ready = false;
            }
            async load(id) {
              try {
                this.ready = false;
                this.#params = id;
                const specs = {
                  id
                };
                this.#model = new _core.Classroom(specs);
                if (id) {
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
                const specs = this.#params !== 'new' ? {
                  ...values,
                  id: this.#params
                } : values;
                const {
                  status,
                  data
                } = await this.model.save(specs);
                if (!status) throw new Error('ERROR_PUBLISHING_CLASSROOM');
                return data;
              } catch (e) {
                throw new Error(e);
              } finally {
                this.fetching = false;
              }
            }
            async invite(values) {
              try {
                this.fetching = true;
                const {
                  status,
                  data
                } = await this.model.invite(values);
                if (!status) throw new Error('error inviting user');
                return data;
              } catch (e) {
                throw new Error(e);
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
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 3865526598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.classrooms, '/classrooms/list'], [texts.breadcrumb.management, '']]
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2774478415,
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

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 4220760104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyEntity = EmptyEntity;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyEntity() {
            const {
              texts
            } = (0, _context.useModuleContext)();
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

      /*********************************
      INTERNAL MODULE: ./views/form/copy
      *********************************/

      ims.set('./views/form/copy', {
        hash: 1346253237,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.copyToClipboard = void 0;
          var _toast = require("pragmate-ui/toast");
          var _context = require("../context");
          const copyToClipboard = async event => {
            const {
              texts
            } = (0, _context.useModuleContext)();
            try {
              await navigator.clipboard.writeText(event.currenTarget.dataset.text);
              _toast.toast.success(texts.messages.copy);
            } catch (err) {
              console.error(texts.copyError, err);
            }
          };
          exports.copyToClipboard = copyToClipboard;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 1796236677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntityForm = EntityForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function EntityForm() {
            const [error, setError] = _react.default.useState('');
            const {
              texts,
              fetching,
              store
            } = (0, _context.useModuleContext)();
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
                _toast.toast.success(texts.create.success);
                _routing.routing.pushState(`/classroom/management/${data.id}`);
              } catch (e) {
                setError(e.message);
                _toast.toast.error(texts.create.error);
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement("p", null, texts.postTitle)), _react.default.createElement(_form.Form, {
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
        hash: 3960178294,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UpdateClassroomForm = UpdateClassroomForm;
          var _react = require("react");
          var _people = require("../list/people");
          /*bundle*/
          function UpdateClassroomForm() {
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "list-info__container"
            }, _react.default.createElement(_people.PeopleList, {
              role: "managers"
            }), _react.default.createElement(_people.PeopleList, {
              role: "members"
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/header/code-section
      *******************************************/

      ims.set('./views/header/code-section', {
        hash: 1522505992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeSection = CodeSection;
          var _react = require("react");
          var _copy = require("../form/copy");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          //@ts-ignore

          function CodeSection() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              code
            } = store.model.joinSpecs;
            return _react.default.createElement("div", {
              className: "top-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__label"
            }, texts.orgCode), _react.default.createElement("span", {
              className: "code__text"
            }, code)), _react.default.createElement(_icons.IconButton, {
              "data-text": store.model?.join?.code,
              title: texts.actions.copy,
              className: "copy__button",
              icon: "link",
              disabled: !store.model?.joinSpecs?.code,
              onClick: _copy.copyToClipboard
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 1146089885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _codeSection = require("./code-section");
          //@ts-ignore

          // import { CoverImage } from './cover-image';

          function HeaderContainer() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const onSave = ({
              target
            }) => store.model.save({
              [target.name]: target.value
            });
            const {
              code
            } = store.model.join;
            return _react.default.createElement("div", {
              className: "page-container__header"
            }, _react.default.createElement("div", {
              className: "cover-content__container"
            }, _react.default.createElement(_ui.ContentEditable, {
              selector: "h1",
              name: "title",
              onSave: onSave
            }, store.model.name), _react.default.createElement(_ui.ContentEditable, {
              selector: "p",
              name: "title",
              onSave: onSave
            }, store.model.description)), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center"
            }, _react.default.createElement(_coverImage.CoverImage, null)), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center"
            }, _react.default.createElement(_codeSection.CodeSection, null)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2070664987,
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
          var _header2 = require("./header/header");
          var _people = require("./list/people");
          var _approval = require("./list/approval");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks2.useBinder)([store.model], () => setFetching(store.model?.fetching));
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            if (!store.model.found) return _react.default.createElement(_empty.EmptyEntity, null);
            const value = {
              store,
              fetching,
              texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, {
              className: "app-classroom-creation-page",
              fetching: fetching
            }, _react.default.createElement(_header2.HeaderContainer, null), _react.default.createElement("div", {
              className: "list-info__container"
            }, _react.default.createElement(_people.PeopleList, {
              role: "managers"
            }), _react.default.createElement(_people.PeopleList, {
              role: "members"
            }), _react.default.createElement(_approval.ApprovalList, {
              type: "pendings"
            }))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/list/approval/choice-rule
      *************************************************/

      ims.set('./views/list/approval/choice-rule', {
        hash: 1340364912,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChoiceRule = ChoiceRule;
          var _react = require("react");
          var _context = require("../../context");
          var _toast = require("pragmate-ui/toast");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _components = require("pragmate-ui/components");
          function ChoiceRule({
            item
          }) {
            const [selectRole, setSelectRole] = _react.default.useState('member');
            if (!item.invited) return null;
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const options = [{
              value: 'member',
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
            }];
            const onProcess = async event => {
              event.preventDefault();
              const {
                action
              } = event.currentTarget.dataset;
              if (!store[action]) {
                console.error('action not found', action);
                return;
              }
              try {
                await store[action]({
                  uid: item.uid,
                  role: selectRole
                });
                _toast.toast.success(texts.messages.approval.success);
              } catch (e) {
                _toast.toast.error(texts.messages.approval.error);
              }
            };
            if (item.invited) return null;
            const handleRoleChange = event => setSelectRole(event.target.value);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "div-select__button"
            }, _react.default.createElement(_reactSelect.ReactSelect, {
              className: "select-option",
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            })), _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-action": "approve",
              onClick: onProcess,
              bordered: true,
              disabled: false
            }, texts.actions.approve), _react.default.createElement(_components.Button, {
              variant: "error",
              "data-action": "reject",
              disabled: true,
              onClick: onProcess
            }, texts.actions.reject));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/list/approval/index
      *******************************************/

      ims.set('./views/list/approval/index', {
        hash: 1643823951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApprovalList = ApprovalList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _empty = require("../empty");
          var _item = require("./item");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ApprovalList({
            type
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const data = store.model[type];
            const labels = texts.list[type];
            const [items, setItems] = _react.default.useState(data);
            (0, _hooks.useBinder)([store.model], () => setItems([...store.model[type]]), `member.invited`);
            if (!items.length) return _react.default.createElement(_empty.EmptyList, null);
            return _react.default.createElement("div", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("h4", null, labels.title)), _react.default.createElement(_list.List, {
              items: items,
              control: _item.Item
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/list/approval/item
      ******************************************/

      ims.set('./views/list/approval/item', {
        hash: 2200027350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("pragmate-ui/icons");
          var _choiceRule = require("./choice-rule");
          function Item({
            item
          }) {
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
            }), _react.default.createElement("div", null, _react.default.createElement("h5", null, item.name), _react.default.createElement("span", null, item.email))), _react.default.createElement("section", {
              className: "actions_buttons"
            }, _react.default.createElement(_choiceRule.ChoiceRule, {
              item: item
            }), _react.default.createElement(_icons.IconButton, {
              icon: "moreVert",
              className: "circle"
            })));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/list/approval/pending-data
      **************************************************/

      ims.set('./views/list/approval/pending-data', {
        hash: 3084286369,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingData = PendingData;
          var _react = require("react");
          var _context = require("../../context");
          function PendingData({
            item
          }) {
            if (!item.invited) return null;
            const {
              texts
            } = (0, _context.useModuleContext)();
            const role = item.role === 'member' ? texts.list.members.role : texts.list.managers.role;
            return _react.default.createElement(_react.default.Fragment, null);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 1525994089,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _context = require("../context");
          function EmptyList({
            role = undefined
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const labels = texts.list[role];
            if (!labels) return null;
            const pending = !!role;
            const emptyText = pending ? texts.empty.labelList.replace('%action', `"${texts.actions.invite}"`) : texts.empty.pending;
            return _react.default.createElement("section", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("h4", null, labels.title)), _react.default.createElement("div", {
              className: "person-item__container flex-container flex-center"
            }, _react.default.createElement("span", {
              className: "p2"
            }, " ", emptyText)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/people/index
      *****************************************/

      ims.set('./views/list/people/index', {
        hash: 3076001337,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PeopleList = PeopleList;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          var _empty = require("../empty");
          var _invitationForm = require("./invitation-form");
          function PeopleList({
            role
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const data = store[role];
            const labels = texts.list[role];
            const toggleModal = () => setShow(!show);
            if (!data.length) return _react.default.createElement(_empty.EmptyList, {
              role: role
            });
            return _react.default.createElement("section", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("h4", null, labels.title), role && _react.default.createElement(_components.Button, {
              icon: "add",
              label: texts.actions.invite,
              className: "add",
              onClick: toggleModal
            })), _react.default.createElement(_list.List, {
              items: data,
              control: _item.Item
            }), _react.default.createElement(_invitationForm.InvitationForm, {
              show: show,
              role: role,
              onClose: toggleModal
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/list/people/invitation-form
      ***************************************************/

      ims.set('./views/list/people/invitation-form', {
        hash: 2588400508,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitationForm = InvitationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          function InvitationForm({
            show,
            onClose,
            role
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const defaultValues = {
              name: '',
              email: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const roleType = {
              managers: 'manager',
              members: 'member'
            };
            const handleClose = () => {
              setValues(defaultValues);
              setError('');
              setLoading(false);
              onClose();
            };
            const onSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await store.invite({
                ...values,
                role: roleType[role]
              });
              if (!response.status) {
                setError(response.error);
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
            const modalTitle = texts.modal.invite.title.replace('%role', texts.list[role].role);
            const {
              name,
              email
            } = values;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: handleClose
            }, _react.default.createElement("header", {
              className: "modal-form__header"
            }, _react.default.createElement("h3", null, modalTitle)), _react.default.createElement(_form.Form, {
              className: "mt-15",
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              label: "Name",
              type: "text",
              name: "name",
              variant: "floating",
              value: name,
              onChange: handleChange,
              placeholder: "Input user name",
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: "Input user email",
              label: "Email",
              variant: "floating",
              type: "email",
              name: "email",
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement("div", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              label: "Submit"
            }))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/list/people/item/edition
      ************************************************/

      ims.set('./views/list/people/item/edition', {
        hash: 3086394599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EditionModal = EditionModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function EditionModal({
            item,
            show,
            onClose
          }) {
            const {
              texts,
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
              label: texts.list.members.single
            }, {
              value: 'manager',
              label: texts.list.managers.single
            }];
            const handleRoleChange = event => {
              setSelectRole(event.target.value);
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("span", {
              className: "h4"
            }, texts.modal.edit.title), _react.default.createElement("p", {
              className: "p2"
            }, texts.modal.edit.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, texts.actions.save))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/list/people/item/index
      **********************************************/

      ims.set('./views/list/people/item/index', {
        hash: 2961835600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          var _edition = require("./edition");
          function Item({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
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
              onClick: toggleModal
            }, texts.actions.edit), _react.default.createElement(_icons.IconButton, {
              icon: "moreVert",
              disabled: true,
              className: "circle"
            }), _react.default.createElement(_edition.EditionModal, {
              item: item,
              show: show,
              onClose: toggleModal
            })));
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
        "from": "EntityForm",
        "name": "EntityForm"
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
        (require || prop === 'EntityForm') && _export("EntityForm", EntityForm = require ? require('./views/form/index').EntityForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiQ2xhc3Nyb29tIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfdWkiLCJfcmVhY3QiLCJfY29uZmlnIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsIm1hbmFnZW1lbnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIkVtcHR5RW50aXR5IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfdG9hc3QiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImN1cnJlblRhcmdldCIsImRhdGFzZXQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJfZm9ybSIsIl9ob29rcyIsIl9yb3V0aW5nIiwiRW50aXR5Rm9ybSIsInNldEVycm9yIiwidXNlU3RhdGUiLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsInNldFZhbHVlcyIsImRpc2FibGVkIiwidXNlQmluZGVyIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsImN1cnJlbnRWYWx1ZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtYXRTdHJpbmciLCJpbnB1dFN0cmluZyIsInRyaW0iLCJyZXBsYWNlIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJtZXNzYWdlIiwiUGFnZVRpdGxlIiwicG9zdFRpdGxlIiwiRm9ybSIsIm9uU3VibWl0IiwibGFiZWxzIiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJyb3dzIiwiQnV0dG9uIiwidmFyaWFudCIsIl9wZW9wbGUiLCJVcGRhdGVDbGFzc3Jvb21Gb3JtIiwiUGVvcGxlTGlzdCIsInJvbGUiLCJfY29weSIsIl9pY29ucyIsIkNvZGVTZWN0aW9uIiwiY29kZSIsImpvaW5TcGVjcyIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiam9pbiIsIm9uQ2xpY2siLCJfY292ZXJJbWFnZSIsIl9jb2RlU2VjdGlvbiIsIkhlYWRlckNvbnRhaW5lciIsIm9uU2F2ZSIsIkNvbnRlbnRFZGl0YWJsZSIsInNlbGVjdG9yIiwiQ292ZXJJbWFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfaG9va3MyIiwiX2VtcHR5IiwiX2hlYWRlcjIiLCJfYXBwcm92YWwiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsImZvdW5kIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQXBwcm92YWxMaXN0IiwiX3JlYWN0U2VsZWN0IiwiQ2hvaWNlUnVsZSIsIml0ZW0iLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsImludml0ZWQiLCJvcHRpb25zIiwibGFiZWwiLCJsaXN0Iiwib25Qcm9jZXNzIiwiYWN0aW9uIiwidWlkIiwiYXBwcm92YWwiLCJoYW5kbGVSb2xlQ2hhbmdlIiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImJvcmRlcmVkIiwiX2xpc3QiLCJfaXRlbSIsIml0ZW1zIiwic2V0SXRlbXMiLCJsZW5ndGgiLCJFbXB0eUxpc3QiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfaW1hZ2UiLCJfY2hvaWNlUnVsZSIsImtleSIsImF1dGhvcml6ZWQiLCJwaG90b1VybCIsIkltYWdlIiwic3JjIiwiSWNvbiIsImVtYWlsIiwiUGVuZGluZ0RhdGEiLCJwZW5kaW5nIiwiZW1wdHlUZXh0IiwibGFiZWxMaXN0IiwiX2ludml0YXRpb25Gb3JtIiwic2V0U2hvdyIsInRvZ2dsZU1vZGFsIiwiSW52aXRhdGlvbkZvcm0iLCJvbkNsb3NlIiwiX21vZGFsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb2xlVHlwZSIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIkVkaXRpb25Nb2RhbCIsInNpbmdsZSIsImVkaXQiLCJpbmZvIiwiX2VkaXRpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvZm9ybS9jb3B5LnRzIiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vdXBkYXRlLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9jaG9pY2UtcnVsZS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL3BlbmRpbmctZGF0YS50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2ludml0YXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElB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