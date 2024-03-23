System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-app@0.0.27/components/ui", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/form", "@beyond-js/react-18-widgets@1.1.1/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.27/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
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
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
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
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_12 = _beyondJsReact18Widgets111Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/form', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/cover-image.code', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/organizations/view.widget');
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
        hash: 4134713027,
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
                const specs = this.#params !== 'new' ? {
                  ...values,
                  id: this.#params
                } : values;
                const {
                  status,
                  data
                } = await this.model.save(specs);
                if (!status) throw new Error('ERROR_PUBLISHING_ORGANIZATION');
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
        hash: 629756106,
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
          function CodeSection() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              code
            } = store.model.joinSpecs;
            const copyToClipboard = async event => {
              try {
                await navigator.clipboard.writeText(event.currentTarget.dataset.text);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            return _react.default.createElement("div", {
              className: "top-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__label"
            }, texts.orgCode), _react.default.createElement("span", {
              className: "code__text"
            }, code)), _react.default.createElement(_icons.IconButton, {
              "data-text": store.model.joinSpecs?.code,
              title: texts.actions.copy,
              className: "copy__button",
              icon: "link",
              disabled: !store.model.joinSpecs?.code,
              onClick: copyToClipboard
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
        hash: 3228659036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _context = require("../context");
          var _invitationForm = require("./people/invitation-form");
          var _components = require("pragmate-ui/components");
          function EmptyList({
            role = undefined
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const labels = texts.list[role];
            if (!labels) return null;
            const pending = !!role;
            const toggleModal = () => setShow(!show);
            const emptyText = pending ? texts.empty.labelList.replace('%action', `"${texts.actions.invite}"`) : texts.empty.pending;
            return _react.default.createElement("section", {
              className: "people-list__container"
            }, _react.default.createElement("div", {
              className: "subtitle-list_container"
            }, _react.default.createElement("h4", null, labels.title), role && _react.default.createElement(_components.Button, {
              icon: "add",
              label: texts.actions.invite,
              className: "add",
              onClick: toggleModal
            })), _react.default.createElement("div", {
              className: "person-item__container flex-container flex-center"
            }, _react.default.createElement("span", {
              className: "p2"
            }, " ", emptyText)), _react.default.createElement(_invitationForm.InvitationForm, {
              show: show,
              role: role,
              onClose: toggleModal
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiT3JnYW5pemF0aW9uIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfdWkiLCJfcmVhY3QiLCJfY29uZmlnIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsIm9yZ2FuaXphdGlvbnMiLCJtYW5hZ2VtZW50IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJFbXB0eU9yZ2FuaXphdGlvbiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3RvYXN0IiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjdXJyZW5UYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwiX2Zvcm0iLCJfaG9va3MiLCJfcm91dGluZyIsIk9yZ2FuaXphdGlvbkZvcm0iLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJzZXRWYWx1ZXMiLCJkaXNhYmxlZCIsInVzZUJpbmRlciIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZm9ybWF0U3RyaW5nIiwiaW5wdXRTdHJpbmciLCJ0cmltIiwicmVwbGFjZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwibWVzc2FnZSIsIlBhZ2VUaXRsZSIsInBvc3RUaXRsZSIsIkZvcm0iLCJvblN1Ym1pdCIsImxhYmVscyIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwicm93cyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJfcGVvcGxlIiwiVXBkYXRlT3JnYW5pemF0aW9uRm9ybSIsIlBlb3BsZUxpc3QiLCJyb2xlIiwiX2ljb25zIiwiQ29kZVNlY3Rpb24iLCJjb2RlIiwiam9pblNwZWNzIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiX2NvdmVySW1hZ2UiLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJqb2luIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJDb3ZlckltYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9ob29rczIiLCJfZW1wdHkiLCJfaGVhZGVyMiIsIl9hcHByb3ZhbCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0UmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwiZm91bmQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJBcHByb3ZhbExpc3QiLCJfcmVhY3RTZWxlY3QiLCJDaG9pY2VSdWxlIiwiaXRlbSIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwiaW52aXRlZCIsIm9wdGlvbnMiLCJsYWJlbCIsImxpc3QiLCJvblByb2Nlc3MiLCJhY3Rpb24iLCJ1aWQiLCJhcHByb3ZhbCIsImhhbmRsZVJvbGVDaGFuZ2UiLCJGcmFnbWVudCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiYm9yZGVyZWQiLCJfbGlzdCIsIl9pdGVtIiwiaXRlbXMiLCJzZXRJdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9pbWFnZSIsIl9jaG9pY2VSdWxlIiwia2V5IiwiYXV0aG9yaXplZCIsInBob3RvVXJsIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiZW1haWwiLCJQZW5kaW5nRGF0YSIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJwZW5kaW5nIiwidG9nZ2xlTW9kYWwiLCJlbXB0eVRleHQiLCJsYWJlbExpc3QiLCJJbnZpdGF0aW9uRm9ybSIsIm9uQ2xvc2UiLCJfbW9kYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvbGVUeXBlIiwiaGFuZGxlQ2xvc2UiLCJyZXNwb25zZSIsInN5c3RlbSIsIm1vZGFsVGl0bGUiLCJtb2RhbCIsIk1vZGFsIiwiRWRpdGlvbk1vZGFsIiwic2luZ2xlIiwiZWRpdCIsImluZm8iLCJfZWRpdGlvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvcHkudHMiLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS91cGRhdGUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2Nob2ljZS1ydWxlLnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2FwcHJvdmFsL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvcGVuZGluZy1kYXRhLnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaW52aXRhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pdGVtL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElB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