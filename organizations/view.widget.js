System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-app@0.0.27/components/ui", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/form", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.27/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwicGFyYW1zIiwib2JqZWN0aXZlcyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJtZW1iZXJzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwiT3JnYW5pemF0aW9uIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGUiLCJjbGFzc3Jvb21zIiwicmVtb3ZlIiwidHJpZ2dlciIsInNhdmUiLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInN0YXR1cyIsIkVycm9yIiwiaW52aXRlIiwiYXBwcm92ZSIsInJlcyIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJfdWkiLCJfcmVhY3QiLCJfY29uZmlnIiwiX2NvbnRleHQiLCJIZWFkZXIiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsIm9yZ2FuaXphdGlvbnMiLCJtYW5hZ2VtZW50IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJFbXB0eU9yZ2FuaXphdGlvbiIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX3RvYXN0IiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjdXJyZW5UYXJnZXQiLCJkYXRhc2V0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwiX2Zvcm0iLCJfaG9va3MiLCJfcm91dGluZyIsIk9yZ2FuaXphdGlvbkZvcm0iLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJzZXRWYWx1ZXMiLCJkaXNhYmxlZCIsInVzZUJpbmRlciIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZm9ybWF0U3RyaW5nIiwiaW5wdXRTdHJpbmciLCJ0cmltIiwicmVwbGFjZSIsIl8iLCJjIiwidG9VcHBlckNhc2UiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwibWVzc2FnZSIsIlBhZ2VUaXRsZSIsInBvc3RUaXRsZSIsIkZvcm0iLCJvblN1Ym1pdCIsImxhYmVscyIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwicm93cyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJfcGVvcGxlIiwiVXBkYXRlT3JnYW5pemF0aW9uRm9ybSIsIlBlb3BsZUxpc3QiLCJyb2xlIiwiX2NvcHkiLCJfaWNvbnMiLCJDb2RlU2VjdGlvbiIsImNvZGUiLCJqb2luU3BlY3MiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsImpvaW4iLCJvbkNsaWNrIiwiX2NvdmVySW1hZ2UiLCJfY29kZVNlY3Rpb24iLCJIZWFkZXJDb250YWluZXIiLCJvblNhdmUiLCJDb250ZW50RWRpdGFibGUiLCJzZWxlY3RvciIsIkNvdmVySW1hZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9lbXB0eSIsIl9oZWFkZXIyIiwiX2FwcHJvdmFsIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJmb3VuZCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkFwcHJvdmFsTGlzdCIsIl9yZWFjdFNlbGVjdCIsIkNob2ljZVJ1bGUiLCJpdGVtIiwic2VsZWN0Um9sZSIsInNldFNlbGVjdFJvbGUiLCJpbnZpdGVkIiwib3B0aW9ucyIsImxhYmVsIiwibGlzdCIsIm9uUHJvY2VzcyIsImFjdGlvbiIsInVpZCIsImFwcHJvdmFsIiwiaGFuZGxlUm9sZUNoYW5nZSIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJib3JkZXJlZCIsIl9saXN0IiwiX2l0ZW0iLCJpdGVtcyIsInNldEl0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2ltYWdlIiwiX2Nob2ljZVJ1bGUiLCJrZXkiLCJhdXRob3JpemVkIiwicGhvdG9VcmwiLCJJbWFnZSIsInNyYyIsIkljb24iLCJlbWFpbCIsIlBlbmRpbmdEYXRhIiwicGVuZGluZyIsImVtcHR5VGV4dCIsImxhYmVsTGlzdCIsIl9pbnZpdGF0aW9uRm9ybSIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwib25DbG9zZSIsIl9tb2RhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm9sZVR5cGUiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwic3lzdGVtIiwibW9kYWxUaXRsZSIsIm1vZGFsIiwiTW9kYWwiLCJFZGl0aW9uTW9kYWwiLCJzaW5nbGUiLCJlZGl0IiwiaW5mbyIsIl9lZGl0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29weS50cyIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3VwZGF0ZS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvY2hvaWNlLXJ1bGUudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvYXBwcm92YWwvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC9hcHByb3ZhbC9wZW5kaW5nLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L3Blb3BsZS9pbnZpdGF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvcGVvcGxlL2l0ZW0vZWRpdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9wZW9wbGUvaXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFB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