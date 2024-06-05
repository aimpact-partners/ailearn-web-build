System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.46.dev-06/components/ui", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.46.dev-06/config", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.46.dev-06/components/icons", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0046Dev06ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0046Dev06ComponentsUi;
    }, function (_pragmateUi011Empty) {
      dependency_5 = _pragmateUi011Empty;
    }, function (_pragmateUi011Modal) {
      dependency_6 = _pragmateUi011Modal;
    }, function (_aimpactAilearnApp0046Dev06Config) {
      dependency_7 = _aimpactAilearnApp0046Dev06Config;
    }, function (_pragmateUi011Toast) {
      dependency_8 = _pragmateUi011Toast;
    }, function (_pragmateUi011Icons) {
      dependency_9 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0046Dev06ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0046Dev06ComponentsIcons;
    }, function (_beyondJsReactive1112Model) {
      dependency_11 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_12 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_13 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-06"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['pragmate-ui/toast', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/reactive/model', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-06/modules/assign');
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
        hash: 2570996221,
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
              globalThis.c = this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiX3VpIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJFbXB0eSIsIkxpbmsiLCJocmVmIiwiX2NsYXNzcm9vbXMiLCJfbW9kYWwiLCJfdXNlU3RvcmUiLCJNb2R1bGVBc3NpZ25tZW50cyIsInN0b3JlIiwidXNlU3RvcmUiLCJNb2RhbCIsInNob3ciLCJjbG9zZUJhY2tkcm9wIiwiX2NvbmZpZyIsIl90b2FzdCIsIl9pY29ucyIsIl9pY29uczIiLCJJdGVtQWN0aW9ucyIsIml0ZW0iLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiYXNzaWdubWVudCIsInNldEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50cyIsImNsYXNzcm9vbXMiLCJnZXQiLCJpZCIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJhc3NpZ25lZCIsImUiLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3BpZWQiLCJkYXNoYm9hcmQiLCJ0YXJnZXQiLCJBcHBJY29uQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiYWN0aW9ucyIsIm5hdmlnYXRlIiwiSWNvbkJ1dHRvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsb2FkaW5nIiwiYXNzaWduIiwiYnV0dG9uIiwiX2FjdGlvbnMiLCJuYW1lIiwic2VjdGlvbiIsImtleSIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwicmF0aW8iLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwiYyIsInVzZXIiLCJvd25lciIsInNlc3Npb25XcmFwcGVyIiwib3JnYW5pemF0aW9uSWQiLCJjb25zb2xlIiwiZGVsZXRlIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImluc3RhbmNlIiwib25DaGFuZ2UiLCJnZXRQcm9wZXJ0aWVzIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2NsYXNzcm9vbXMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy9pdGVtL2luZGV4LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssR0FBQSxHQUFBTCxPQUFBO1VBTU8sTUFBTU0sVUFBVSxHQUFHQSxDQUFDO1lBQUVDLE9BQU87WUFBRUMsS0FBSztZQUFFQyxNQUFNO1lBQUVDO1VBQUssQ0FBRSxLQUFJO1lBQy9ELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2IsTUFBQSxDQUFBYyxPQUFLLENBQUNDLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUNOLEtBQUssQ0FBQ08sS0FBSyxFQUFFLE9BQU9oQixNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQSxDQUFDZixXQUFBLENBQUFnQixPQUFPO2NBQUNDLE1BQU07WUFBQSxFQUFHO1lBRTNDLElBQUlWLEtBQUssQ0FBQ1csS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUUsT0FBT3RCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBLENBQUNaLE1BQUEsQ0FBQWtCLFNBQVMsT0FBRztZQUN4RCxNQUFNQyxNQUFNLEdBQUdmLEtBQUssQ0FBQ1csS0FBSyxDQUFDQyxLQUFLO1lBRWhDLE9BQ0NyQixNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQSxDQUFBakIsTUFBQSxDQUFBYyxPQUFBLENBQUFXLFFBQUEsUUFDQ3pCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBLGlCQUNDakIsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUEsYUFBS04sS0FBSyxDQUFDZSxLQUFLLENBQU0sRUFDdEIxQixNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQTtjQUFJVSxTQUFTLEVBQUM7WUFBYSxHQUN6QmhCLEtBQUssQ0FBQ0QsTUFBTSxFLE1BQUlBLE1BQU0sQ0FBQ2dCLEtBQUssQ0FDekIsQ0FDRyxFQUVUMUIsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDM0IsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUEsQ0FBQ1gsR0FBQSxDQUFBc0IsYUFBYTtjQUFDaEIsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDL0JaLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBLENBQUNiLEtBQUEsQ0FBQXlCLElBQUk7Y0FDSkYsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQk4sS0FBSyxFQUFFRyxNQUFNO2NBQ2JNLE9BQU8sRUFBRTNCLEtBQUEsQ0FBQTRCLGFBQWE7Y0FDdEJDLEtBQUssRUFBRTtnQkFBRXRCLE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVILE9BQU87Z0JBQUVLO2NBQVE7WUFBRSxFQUMxQyxDQUNHLENBQ0o7VUFFTCxDQUFDO1VBQUNvQixPQUFBLENBQUExQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENGLElBQUFQLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUVBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVVzQixTQUFTQSxDQUFBO1lBQ3hCLE9BQ0N2QixNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQSxjQUNDakIsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUEsQ0FBQ1osTUFBQSxDQUFBNkIsS0FBSyxRQUNMbEMsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUEsNkJBQWlCLEVBQ2pCakIsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUEsbUdBQXNGLEVBQ3RGakIsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCM0IsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUEsQ0FBQ2YsV0FBQSxDQUFBaUMsSUFBSTtjQUFDQyxJQUFJLEVBQUMsb0JBQW9CO2NBQUNULFNBQVMsRUFBQztZQUE4QixnQkFFakUsQ0FDRixDQUNDLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQTNCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFvQyxXQUFBLEdBQUFwQyxPQUFBO1VBQ0EsSUFBQXFDLE1BQUEsR0FBQXJDLE9BQUE7VUFDQSxJQUFBc0MsU0FBQSxHQUFBdEMsT0FBQTtVQUVPO1VBQVUsU0FBVXVDLGlCQUFpQkEsQ0FBQztZQUFFaEMsT0FBTztZQUFFRSxNQUFNO1lBQUVDO1VBQUssQ0FBRTtZQUN0RSxNQUFNLENBQUM4QixLQUFLLEVBQUVoQyxLQUFLLENBQUMsR0FBRyxJQUFBOEIsU0FBQSxDQUFBRyxRQUFRLEVBQUM7Y0FBRWhDO1lBQU0sQ0FBRSxDQUFDO1lBRTNDLE9BQ0NWLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBLENBQUNxQixNQUFBLENBQUFLLEtBQUs7Y0FBQ0MsSUFBSTtjQUFDcEMsT0FBTyxFQUFFQSxPQUFPO2NBQUVxQyxhQUFhLEVBQUUsS0FBSztjQUFFbEIsU0FBUyxFQUFDO1lBQW1CLEdBQ2hGM0IsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUEsQ0FBQ29CLFdBQUEsQ0FBQTlCLFVBQVU7Y0FBQ0MsT0FBTyxFQUFFQSxPQUFPO2NBQUVDLEtBQUssRUFBRUEsS0FBSztjQUFFQyxNQUFNLEVBQUVBLE1BQU07Y0FBRUMsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDckU7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBVCxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkMsT0FBQSxHQUFBN0MsT0FBQTtVQUNBLElBQUE4QyxNQUFBLEdBQUE5QyxPQUFBO1VBQ0EsSUFBQStDLE1BQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBZ0QsT0FBQSxHQUFBaEQsT0FBQTtVQUVPLE1BQU1pRCxXQUFXLEdBQUdBLENBQUM7WUFBRWxCLEtBQUssRUFBRTtjQUFFbkIsUUFBUTtjQUFFRixLQUFLO2NBQUVELE1BQU07Y0FBRUY7WUFBTyxDQUFFO1lBQUUyQztVQUFJLENBQUUsS0FBSTtZQUNwRixNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdyRCxNQUFBLENBQUFjLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxNQUFNLENBQUN1QyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHdkQsTUFBQSxDQUFBYyxPQUFLLENBQUNDLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDOEMsV0FBVyxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDUSxFQUFFLENBQUMsQ0FBQztZQUU5RixNQUFNQyxPQUFPLEdBQUcsTUFBTUMsS0FBSyxJQUFHO2NBQzdCLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN2QlQsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakJRLEtBQUssQ0FBQ0UsY0FBYyxFQUFFO2dCQUV0QixNQUFNVCxVQUFVLEdBQUcsTUFBTTVDLE1BQU0sQ0FBQzhDLFdBQVcsQ0FBQ1EsR0FBRyxDQUFDYixJQUFJLENBQUNRLEVBQUUsQ0FBQztnQkFDeERKLGFBQWEsQ0FBQ0QsVUFBVSxDQUFDO2dCQUN6QkQsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbEJOLE1BQUEsQ0FBQWtCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdkQsS0FBSyxDQUFDd0QsUUFBUSxDQUFDQyxRQUFRLENBQUM7ZUFDdEMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1h4RCxRQUFRLENBQUNGLEtBQUssQ0FBQzJELE1BQU0sQ0FBQ3hELE9BQU8sQ0FBQzs7WUFFaEMsQ0FBQztZQUVELElBQUl3QyxVQUFVLEVBQUU7Y0FDZixNQUFNaUIsU0FBUyxHQUFHLEdBQUd6QixPQUFBLENBQUFoQyxPQUFNLENBQUMwRCxNQUFNLENBQUNDLE9BQU8sR0FBR25CLFVBQVUsQ0FBQ29CLElBQUksRUFBRTtjQUM5RCxNQUFNQyxJQUFJLEdBQUdkLEtBQUssSUFBRztnQkFDcEJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUV2QmMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1AsU0FBUyxDQUFDO2dCQUN4Q3hCLE1BQUEsQ0FBQWtCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdkQsS0FBSyxDQUFDd0QsUUFBUSxDQUFDWSxNQUFNLENBQUM7Y0FDckMsQ0FBQztjQUNELE9BQ0MvRSxNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQTtnQkFBS1UsU0FBUyxFQUFDO2NBQTJFLEdBQ3pGM0IsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUEsQ0FBQ2YsV0FBQSxDQUFBaUMsSUFBSTtnQkFBQ1QsS0FBSyxFQUFFZixLQUFLLENBQUNxRSxTQUFTO2dCQUFFcEIsT0FBTyxFQUFFcEQsT0FBTztnQkFBRXlFLE1BQU0sRUFBQyxRQUFRO2dCQUFDN0MsSUFBSSxFQUFFa0IsVUFBVSxDQUFDMEI7Y0FBUyxHQUN6RmhGLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBLENBQUNnQyxPQUFBLENBQUFpQyxhQUFhO2dCQUFDQyxRQUFRO2dCQUFDeEQsU0FBUyxFQUFDLFFBQVE7Z0JBQUN5RCxJQUFJLEVBQUMsV0FBVztnQkFBQzFELEtBQUssRUFBRWYsS0FBSyxDQUFDMEUsT0FBTyxDQUFDTDtjQUFTLEVBQUksQ0FDeEYsRUFDUGhGLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBLENBQUNmLFdBQUEsQ0FBQWlDLElBQUk7Z0JBQUNULEtBQUssRUFBRWYsS0FBSyxDQUFDcUUsU0FBUztnQkFBRXBCLE9BQU8sRUFBRXBELE9BQU87Z0JBQUV5RSxNQUFNLEVBQUMsUUFBUTtnQkFBQzdDLElBQUksRUFBRW1DO2NBQVMsR0FDOUV2RSxNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQSxDQUFDZ0MsT0FBQSxDQUFBaUMsYUFBYTtnQkFBQ0MsUUFBUTtnQkFBQ3hELFNBQVMsRUFBQyxRQUFRO2dCQUFDeUQsSUFBSSxFQUFDLE1BQU07Z0JBQUMxRCxLQUFLLEVBQUVmLEtBQUssQ0FBQzBFLE9BQU8sQ0FBQ0M7Y0FBUSxFQUFJLENBQ2xGLEVBRVB0RixNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQSxDQUFDK0IsTUFBQSxDQUFBdUMsVUFBVTtnQkFBQzVELFNBQVMsRUFBQyxRQUFRO2dCQUFDeUQsSUFBSSxFQUFDLE1BQU07Z0JBQUN4QixPQUFPLEVBQUVlLElBQUk7Z0JBQUVqRCxLQUFLLEVBQUVmLEtBQUssQ0FBQzBFLE9BQU8sQ0FBQ1Y7Y0FBSSxFQUFJLENBQ2xGOztZQUdSLE9BQ0MzRSxNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBZSxHQUM3QjNCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBLENBQUNmLFdBQUEsQ0FBQXNGLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ04sUUFBUTtjQUFDTyxPQUFPLEVBQUV0QyxRQUFRO2NBQUVRLE9BQU8sRUFBRUE7WUFBTyxHQUNwRWpELEtBQUssQ0FBQzBFLE9BQU8sQ0FBQ00sTUFBTSxDQUFDQyxNQUFNLENBQ3BCLENBQ0o7VUFFUixDQUFDO1VBQUMzRCxPQUFBLENBQUFpQixXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRGLElBQUFsRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEYsUUFBQSxHQUFBNUYsT0FBQTtVQUNBLElBQUFLLEdBQUEsR0FBQUwsT0FBQTtVQUNPLE1BQU04QixhQUFhLEdBQUdBLENBQUM7WUFBRW9CLElBQUk7WUFBRW5CO1VBQUssQ0FBRSxLQUFJO1lBQ2hELE1BQU04RCxJQUFJLEdBQUcsR0FBRzNDLElBQUksQ0FBQzJDLElBQUksR0FBRzNDLElBQUksQ0FBQzRDLE9BQU8sR0FBRyxNQUFNNUMsSUFBSSxDQUFDNEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRXRFLE9BQ0MvRixNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQTtjQUFJK0UsR0FBRyxFQUFFN0MsSUFBSSxDQUFDUTtZQUFFLEdBQ2YzRCxNQUFBLENBQUFjLE9BQUEsQ0FBQUcsYUFBQSxDQUFDWCxHQUFBLENBQUEyRixXQUFXO2NBQUNDLE1BQU0sRUFBQyxXQUFXO2NBQUNDLEtBQUssRUFBQyxRQUFRO2NBQUN4RSxTQUFTLEVBQUM7WUFBa0IsRUFBRyxFQUM5RTNCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUFvQixHQUN0QzNCLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBLGFBQUs2RSxJQUFJLENBQU0sRUFDZjlGLE1BQUEsQ0FBQWMsT0FBQSxDQUFBRyxhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFlLEdBQzdCM0IsTUFBQSxDQUFBYyxPQUFBLENBQUFHLGFBQUEsQ0FBQzRFLFFBQUEsQ0FBQTNDLFdBQVc7Y0FBQ0MsSUFBSSxFQUFFQSxJQUFJO2NBQUVuQixLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUNwQyxDQUNHLENBQ047VUFFUCxDQUFDO1VBQUNDLE9BQUEsQ0FBQUYsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCRixJQUFBcUUsTUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFvRyxLQUFBLEdBQUFwRyxPQUFBO1VBQ0EsSUFBQXFHLFFBQUEsR0FBQXJHLE9BQUE7VUFDTSxNQUFPc0csWUFBYSxTQUFRSCxNQUFBLENBQUFJLGFBQTJCO1lBQzVEQyxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDdEIsQ0FBQS9GLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLENBQUFnRyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQUMsWUFBWTNFLEtBQUs7Y0FDaEIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDWixLQUFLLEdBQUcsSUFBSWlGLEtBQUEsQ0FBQTlGLFVBQVUsRUFBRTtjQUM3QixJQUFJLENBQUNhLEtBQUssQ0FBQ3dGLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDMUMsSUFBSSxDQUFDQyxJQUFJLENBQUM5RSxLQUFLLENBQUM7WUFDakI7WUFFQSxNQUFNOEUsSUFBSUEsQ0FBQzlFLEtBQUs7Y0FDZixJQUFJLENBQUMsQ0FBQXRCLE1BQU8sR0FBR3NCLEtBQUssQ0FBQ3RCLE1BQU07Y0FDM0IsSUFBSSxDQUFDLENBQUFnRyxVQUFXLEdBQUcxRSxLQUFLLENBQUMwRSxVQUFVO2NBQ25DSyxVQUFVLENBQUNDLENBQUMsR0FBRyxJQUFJO2NBQ25CLElBQUk7Z0JBQ0gsTUFBTWhGLEtBQUssR0FBK0M7a0JBQUVpRixJQUFJLEVBQUU7Z0JBQUksQ0FBRTtnQkFDeEUsSUFBSSxJQUFJLENBQUMsQ0FBQXZHLE1BQU8sQ0FBQ3dHLEtBQUssRUFBRXZELEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQWpELE1BQU8sQ0FBQ3dHLEtBQUssRUFBRXZELEVBQUUsS0FBSzJDLFFBQUEsQ0FBQWEsY0FBYyxDQUFDRixJQUFJLENBQUN0RCxFQUFFLEVBQUU7a0JBQ2hGM0IsS0FBSyxDQUFDb0YsY0FBYyxHQUFHLElBQUksQ0FBQzFHLE1BQU0sQ0FBQ3dHLEtBQUssRUFBRXZELEVBQUU7O2dCQUc3QyxNQUFNLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQzBGLElBQUksQ0FBQzlFLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDaEIsS0FBSyxHQUFHLElBQUk7ZUFDakIsQ0FBQyxPQUFPcUQsQ0FBQyxFQUFFO2dCQUNYZ0QsT0FBTyxDQUFDekcsS0FBSyxDQUFDeUQsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1pRCxNQUFNQSxDQUFDbkUsSUFBSTtjQUNoQixNQUFNQSxJQUFJLENBQUNtRSxNQUFNLEVBQUU7WUFDcEI7O1VBQ0FyRixPQUFBLENBQUFzRSxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENELElBQUF2RyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBc0gsTUFBQSxHQUFBdEgsT0FBQTtVQUVNLFNBQVV5QyxRQUFRQSxDQUFDVixLQUFLO1lBQzdCLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFK0UsUUFBUSxDQUFDLEdBQUd4SCxNQUFBLENBQUFjLE9BQUssQ0FBQ0MsUUFBUSxFQUFnQjtZQUN4RCxNQUFNLENBQUNOLEtBQUssRUFBRWdILFFBQVEsQ0FBQyxHQUFHekgsTUFBQSxDQUFBYyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFNUNmLE1BQUEsQ0FBQWMsT0FBSyxDQUFDNEcsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsUUFBUSxHQUFHLElBQUlKLE1BQUEsQ0FBQWhCLFlBQVksQ0FBQ3ZFLEtBQUssQ0FBQztjQUN4Q3dGLFFBQVEsQ0FBQ0csUUFBUSxDQUFDO2NBRWxCLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2dCQUNyQkgsUUFBUSxDQUFDaEgsS0FBSyxLQUFLO2tCQUFFLEdBQUdBLEtBQUs7a0JBQUVPLEtBQUssRUFBRTJHLFFBQVEsQ0FBQzNHLEtBQUs7a0JBQUUsR0FBRzJHLFFBQVEsQ0FBQ0UsYUFBYTtnQkFBRSxDQUFFLENBQUMsQ0FBQztjQUN0RixDQUFDO2NBQ0RGLFFBQVEsQ0FBQ2YsRUFBRSxDQUFDLFFBQVEsRUFBRWdCLFFBQVEsQ0FBQztjQUMvQixPQUFPLE1BQUs7Z0JBQ1hELFFBQVEsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDO2NBQ2pDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FBTyxDQUFDbkYsS0FBSyxFQUFFaEMsS0FBSyxDQUFDO1VBQ3RCIn0=