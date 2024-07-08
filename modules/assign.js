System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.51.dev-04/components/ui", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.51.dev-04/config", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.51.dev-04/components/icons", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
  _export("ModuleAssignments", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_2 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_3 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0051Dev04ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0051Dev04ComponentsUi;
    }, function (_pragmateUi011Empty) {
      dependency_5 = _pragmateUi011Empty;
    }, function (_pragmateUi011Modal) {
      dependency_6 = _pragmateUi011Modal;
    }, function (_aimpactAilearnApp0051Dev04Config) {
      dependency_7 = _aimpactAilearnApp0051Dev04Config;
    }, function (_pragmateUi011Toast) {
      dependency_8 = _pragmateUi011Toast;
    }, function (_pragmateUi011Icons) {
      dependency_9 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0051Dev04ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0051Dev04ComponentsIcons;
    }, function (_beyondJsReactive1112Model) {
      dependency_11 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_12 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk101Session) {
      dependency_13 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.51.dev-04"], ["@aimpact/ailearn-app", "0.0.51.dev-04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.51.dev-04/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['pragmate-ui/toast', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/reactive/model', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.51.dev-04/modules/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 4098369483,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classrooms = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _empty = require("./empty");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const Classrooms = ({
            onClose,
            state,
            module,
            texts
          }) => {
            const [error, setError] = _react.default.useState();
            if (!state.ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            if (state.model.items.length === 0) return _react.default.createElement(_empty.EmptyList, null);
            const output = state.model.items;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("h5", {
              className: "module-name"
            }, texts.module, ": ", module.title)), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_list.List, {
              className: "classroom__list",
              items: output,
              control: _item.ClassroomItem,
              specs: {
                module,
                texts,
                onClose,
                setError
              }
            })));
          };
          exports.Classrooms = Classrooms;
        }
      });

      /***********************
      INTERNAL MODULE: ./empty
      ***********************/

      ims.set('./empty', {
        hash: 2271576078,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          function EmptyList() {
            return _react.default.createElement("div", null, _react.default.createElement(_empty.Empty, null, _react.default.createElement("h3", null, "Atenci\u00F3n"), _react.default.createElement("p", null, "A\u00FAn no posees aulas creadas, debes crear una para poder asignar esta actividad."), _react.default.createElement("div", {
              className: "empty__actions"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/create",
              className: "btn btn-primary btn-bordered"
            }, "Crear aula"))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2821136962,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignments = ModuleAssignments;
          var _react = require("react");
          var _classrooms = require("./classrooms");
          var _modal = require("pragmate-ui/modal");
          var _useStore = require("./use-store");
          /*bundle*/
          function ModuleAssignments({
            onClose,
            module,
            texts
          }) {
            const [store, state] = (0, _useStore.useStore)({
              module
            });
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose,
              closeBackdrop: false,
              className: "modal--assignment"
            }, _react.default.createElement(_classrooms.Classrooms, {
              onClose: onClose,
              state: state,
              module: module,
              texts: texts
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./item/actions
      ******************************/

      ims.set('./item/actions', {
        hash: 2831330916,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = void 0;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _toast = require("pragmate-ui/toast");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          const ItemActions = ({
            specs: {
              setError,
              texts,
              module,
              onClose
            },
            item
          }) => {
            const [fetching, setFetching] = _react.default.useState(false);
            const [assignment, setAssignment] = _react.default.useState(module.assignments.classrooms.get(item.id));
            const onClick = async event => {
              try {
                event.stopPropagation();
                setFetching(true);
                event.preventDefault();
                const assignment = await module.assignments.add(item.id);
                setAssignment(assignment);
                setFetching(false);
                _toast.toast.success(texts.messages.assigned);
              } catch (e) {
                setError(texts.errors.default);
              }
            };
            if (assignment) {
              const finalLink = `${_config.default.params.baseUrl}${assignment.link}`;
              const copy = event => {
                event.stopPropagation();
                navigator.clipboard.writeText(finalLink);
                _toast.toast.success(texts.messages.copied);
              };
              return _react.default.createElement("div", {
                className: "item__actions flex flex-container flex-vertical-center flex-space-between"
              }, _react.default.createElement(_components.Link, {
                title: texts.dashboard,
                onClick: onClose,
                target: "_blank",
                href: assignment.dashboard
              }, _react.default.createElement(_icons2.AppIconButton, {
                bordered: true,
                className: "circle",
                icon: "dashboard",
                title: texts.actions.dashboard
              })), _react.default.createElement(_components.Link, {
                title: texts.dashboard,
                onClick: onClose,
                target: "_blank",
                href: finalLink
              }, _react.default.createElement(_icons2.AppIconButton, {
                bordered: true,
                className: "circle",
                icon: "link",
                title: texts.actions.navigate
              })), _react.default.createElement(_icons.IconButton, {
                className: "circle",
                icon: "copy",
                onClick: copy,
                title: texts.actions.copy
              }));
            }
            return _react.default.createElement("div", {
              className: "item__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              loading: fetching,
              onClick: onClick
            }, texts.actions.assign.button));
          };
          exports.ItemActions = ItemActions;
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 4242669926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomItem = void 0;
          var _react = require("react");
          var _actions = require("./actions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const ClassroomItem = ({
            item,
            specs
          }) => {
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            return _react.default.createElement("li", {
              key: item.id
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "classroom",
              ratio: "square",
              className: "list-item__image"
            }), _react.default.createElement("section", {
              className: "list-item__content"
            }, _react.default.createElement("h4", null, name), _react.default.createElement("div", {
              className: "item__actions"
            }, _react.default.createElement(_actions.ItemActions, {
              item: item,
              specs: specs
            }))));
          };
          exports.ClassroomItem = ClassroomItem;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3977937475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            properties = ['model'];
            #module;
            get module() {
              return this.#module;
            }
            #associated;
            get associated() {
              return this.#associated;
            }
            constructor(specs) {
              super();
              this.model = new _core.Classrooms();
              this.model.on('change', this.triggerEvent);
              this.load(specs);
            }
            async load(specs) {
              this.#module = specs.module;
              this.#associated = specs.associated;
              try {
                const specs = {
                  user: true
                };
                if (this.#module.owner?.id && this.#module.owner?.id !== _session.sessionWrapper.user.id) {
                  specs.organizationId = this.module.owner?.id;
                }
                await this.model.load(specs);
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
            async delete(item) {
              await item.delete();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************
      INTERNAL MODULE: ./use-store
      ***************************/

      ims.set('./use-store', {
        hash: 4027213740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          var _store = require("./store");
          function useStore(specs) {
            const [store, setStore] = _react.default.useState();
            const [state, setState] = _react.default.useState({});
            _react.default.useEffect(() => {
              const instance = new _store.StoreManager(specs);
              setStore(instance);
              const onChange = () => {
                setState(state => ({
                  ...state,
                  ready: instance.ready,
                  ...instance.getProperties()
                }));
              };
              instance.on('change', onChange);
              return () => {
                instance.off('change', onChange);
              };
            }, []);
            return [store, state];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ModuleAssignments",
        "name": "ModuleAssignments"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ModuleAssignments') && _export("ModuleAssignments", ModuleAssignments = require ? require('./index').ModuleAssignments : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiX3VpIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJFbXB0eSIsIkxpbmsiLCJocmVmIiwiX2NsYXNzcm9vbXMiLCJfbW9kYWwiLCJfdXNlU3RvcmUiLCJNb2R1bGVBc3NpZ25tZW50cyIsInN0b3JlIiwidXNlU3RvcmUiLCJNb2RhbCIsInNob3ciLCJjbG9zZUJhY2tkcm9wIiwiX2NvbmZpZyIsIl90b2FzdCIsIl9pY29ucyIsIl9pY29uczIiLCJJdGVtQWN0aW9ucyIsIml0ZW0iLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiYXNzaWdubWVudCIsInNldEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50cyIsImNsYXNzcm9vbXMiLCJnZXQiLCJpZCIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJhc3NpZ25lZCIsImUiLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3BpZWQiLCJkYXNoYm9hcmQiLCJ0YXJnZXQiLCJBcHBJY29uQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiYWN0aW9ucyIsIm5hdmlnYXRlIiwiSWNvbkJ1dHRvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsb2FkaW5nIiwiYXNzaWduIiwiYnV0dG9uIiwiX2FjdGlvbnMiLCJuYW1lIiwic2VjdGlvbiIsImtleSIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwicmF0aW8iLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJ1c2VyIiwib3duZXIiLCJzZXNzaW9uV3JhcHBlciIsIm9yZ2FuaXphdGlvbklkIiwiY29uc29sZSIsImRlbGV0ZSIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlIiwiZ2V0UHJvcGVydGllcyIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvaXRlbS9pbmRleC50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLEdBQUEsR0FBQUwsT0FBQTtVQU1PLE1BQU1NLFVBQVUsR0FBR0EsQ0FBQztZQUFFQyxPQUFP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