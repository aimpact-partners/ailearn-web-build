System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-app@0.0.24/components/ui", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/form", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.24/components/cover-image.code", "pragmate-ui@0.0.6/icons", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, Header, OrganizationForm, UpdateOrganizationForm, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_8 = _aimpactAilearnApp0024Config;
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
    }, function (_aimpactAilearnApp0024ComponentsCoverImageCode) {
      dependency_14 = _aimpactAilearnApp0024ComponentsCoverImageCode;
    }, function (_pragmateUi006Icons) {
      dependency_15 = _pragmateUi006Icons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/form', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['@aimpact/ailearn-app/components/cover-image.code', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/organizations/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3787026708,
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
        hash: 3337839328,
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
                this.#model = new _core.Organization(specs);
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

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 2566353067,
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.management, '']]
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 631431152,
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
        hash: 2310553441,
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
            } = (0, _context.useModuleContext)();
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
        hash: 731768859,
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
                _routing.routing.pushState(`/organization/management/${data.id}`);
              } catch (e) {
                setError(e.message);
                _toast.toast.error(texts.create.error);
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
        hash: 3377522542,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UpdateOrganizationForm = UpdateOrganizationForm;
          var _react = require("react");
          var _people = require("../list/people");
          /*bundle*/
          function UpdateOrganizationForm() {
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
        hash: 2886210719,
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
          function CodeSection() {
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
              className: "top-code__container flex-container flex-space-between copy-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__text"
            }, code), _react.default.createElement("span", null, texts.orgCode)), _react.default.createElement(_icons.IconButton, {
              "data-text": store.model?.join?.code,
              title: texts.actions.copy,
              className: "copy__button",
              icon: "copy-link",
              disabled: !store.model?.join?.code,
              onClick: _copy.copyToClipboard
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 118609185,
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
            }, store.model.description), _react.default.createElement(_codeSection.CodeSection, null)), _react.default.createElement(_coverImage.CoverImage, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2825641345,
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
            if (!store.model.found) return _react.default.createElement(_empty.EmptyOrganization, null);
            const value = {
              store,
              fetching,
              texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_ui.PageContainer, {
              className: "app-organization-creation-page",
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
        hash: 1858264984,
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
        hash: 3273518866,
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
          function ApprovalList({
            type
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const data = store.model[type];
            const labels = texts.list[type];
            if (!data.length) return _react.default.createElement(_empty.EmptyList, null);
            return _react.default.createElement("div", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("h4", null, labels.title)), _react.default.createElement(_list.List, {
              items: data,
              control: _item.Item
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/list/approval/item
      ******************************************/

      ims.set('./views/list/approval/item', {
        hash: 1038710922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("pragmate-ui/icons");
          var _pendingData = require("./pending-data");
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
            }), _react.default.createElement("div", null, _react.default.createElement("h5", null, item.name), _react.default.createElement("span", null, item.email))), _react.default.createElement(_pendingData.PendingData, {
              item: item
            }), _react.default.createElement("section", {
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
        hash: 3985790137,
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
        hash: 3890567447,
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
            const handleModal = () => setShow(!show);
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
              onClick: handleModal
            })), _react.default.createElement(_list.List, {
              items: data,
              control: _item.Item
            }), show && _react.default.createElement(_invitationForm.InvitationForm, {
              role: role,
              onClose: () => setShow(false)
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/list/people/invitation-form
      ***************************************************/

      ims.set('./views/list/people/invitation-form', {
        hash: 407176732,
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
              onClose();
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
            const modalTitle = texts.modal.invite.title.replace('%role', texts.list[role].role);
            const {
              name,
              email
            } = values;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiT3JnYW5pemF0aW9uIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsImxvZyIsInVwZGF0ZVJvbGUiLCJfdWkiLCJfcmVhY3QiLCJfY29uZmlnIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsIm9yZ2FuaXphdGlvbnMiLCJtYW5hZ2VtZW50IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJFbXB0eU9yZ2FuaXphdGlvbiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3RvYXN0IiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjdXJyZW5UYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwiX2Zvcm0iLCJfaG9va3MiLCJfcm91dGluZyIsIk9yZ2FuaXphdGlvbkZvcm0iLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJzZXRWYWx1ZXMiLCJkaXNhYmxlZCIsInVzZUJpbmRlciIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZm9ybWF0U3RyaW5nIiwiaW5wdXRTdHJpbmciLCJ0cmltIiwicmVwbGFjZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwibWVzc2FnZSIsIlBhZ2VUaXRsZSIsInBvc3RUaXRsZSIsIkZvcm0iLCJvblN1Ym1pdCIsImxhYmVscyIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwicm93cyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJfcGVvcGxlIiwiVXBkYXRlT3JnYW5pemF0aW9uRm9ybSIsIlBlb3BsZUxpc3QiLCJyb2xlIiwiX2NvcHkiLCJfaWNvbnMiLCJDb2RlU2VjdGlvbiIsIm9uU2F2ZSIsImNvZGUiLCJqb2luIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiX2NvdmVySW1hZ2UiLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJzZWxlY3RvciIsIkNvdmVySW1hZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9lbXB0eSIsIl9oZWFkZXIyIiwiX2FwcHJvdmFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJmb3VuZCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFwcHJvdmFsTGlzdCIsIl9yZWFjdFNlbGVjdCIsIkNob2ljZVJ1bGUiLCJpdGVtIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJpbnZpdGVkIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsImFjdGlvbiIsInVpZCIsImFwcHJvdmFsIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJib3JkZXJlZCIsIl9saXN0IiwiX2l0ZW0iLCJsZW5ndGgiLCJFbXB0eUxpc3QiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9wZW5kaW5nRGF0YSIsIl9jaG9pY2VSdWxlIiwia2V5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsInBlbmRpbmciLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJfaW52aXRhdGlvbkZvcm0iLCJzZXRTaG93IiwiaGFuZGxlTW9kYWwiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvbGVUeXBlIiwicmVzcG9uc2UiLCJzeXN0ZW0iLCJtb2RhbFRpdGxlIiwibW9kYWwiLCJNb2RhbCIsIkVkaXRpb25Nb2RhbCIsInNpbmdsZSIsImVkaXQiLCJpbmZvIiwiX2VkaXRpb24iLCJ0b2dnbGVNb2RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvcHkudHMiLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS91cGRhdGUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1ydWxlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtj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