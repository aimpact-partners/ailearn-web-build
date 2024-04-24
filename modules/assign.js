System.register(["@beyond-js/kernel@0.1.9/bundle", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/components", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/modal", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
  _export("ModuleAssignments", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_pragmateUi011Components) {
      dependency_1 = _pragmateUi011Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_2 = _aimpactChat101SharedComponents;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_4 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Toast) {
      dependency_5 = _pragmateUi011Toast;
    }, function (_pragmateUi011Icons) {
      dependency_6 = _pragmateUi011Icons;
    }, function (_pragmateUi011List) {
      dependency_7 = _pragmateUi011List;
    }, function (_pragmateUi011Modal) {
      dependency_8 = _pragmateUi011Modal;
    }, function (_beyondJsReactive1112Model) {
      dependency_9 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Styles) {
      dependency_11 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['pragmate-ui/components', dependency_1], ['@aimpact/chat/shared/components', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/toast', dependency_5], ['pragmate-ui/icons', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/modal', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/styles', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/assign');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 1384598385,
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
          const ItemActions = ({
            item,
            texts,
            module
          }) => {
            const [fetching, setFetching] = _react.default.useState(false);
            const [id, setId] = _react.default.useState(item.id);
            const [assignment, setAssignment] = _react.default.useState(module.assignments.classrooms.get(item.id));
            const copy = () => {
              const finalLink = `${_config.default.params.baseUrl}${assignment.link}`;
              navigator.clipboard.writeText(finalLink);
              _toast.toast.success(texts.messages.copied);
            };
            const onClick = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const assignment = await module.assignments.add(item.id);
                setAssignment(assignment);
                setFetching(false);
              } catch (e) {
                console.error(e);
              } finally {
                _toast.toast.success(texts.messages.assigned);
              }
            };
            if (assignment) {
              return _react.default.createElement("div", {
                className: ""
              }, _react.default.createElement("div", {
                className: "flex flex-container flex-vertical-center flex-space-between"
              }, texts.actions.dashboard.label, _react.default.createElement(_components.Link, {
                className: "pui-button button-primary btn-outline",
                title: texts.dashboard,
                icon: "eye",
                href: assignment.dashboard
              }, texts.actions.dashboard.button)), _react.default.createElement("div", {
                className: "flex flex-container flex-vertical-center flex-space-between"
              }, _react.default.createElement("span", null, texts.actions.assignment.label), _react.default.createElement(_components.Button, {
                variant: "",
                bordered: true,
                onClick: copy,
                icon: "copy",
                title: texts.actions.copy
              }, texts.actions.assignment.button)));
            }
            return _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, texts.actions.assign.label, _react.default.createElement(_components.Button, {
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
      INTERNAL MODULE: ./classrooms
      ****************************/

      ims.set('./classrooms', {
        hash: 1206845518,
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
          const Classrooms = ({
            state,
            module,
            texts
          }) => {
            if (!state.ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            return _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement("h3", null, texts.title), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement(_list.List, {
              className: "classroom__list",
              items: state.model.items,
              control: _item.ClassroomItem,
              specs: {
                module,
                texts
              }
            })));
          };
          exports.Classrooms = Classrooms;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 312963720,
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
              closeBackdrop: false
            }, _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement(_classrooms.Classrooms, {
              state: state,
              module: module,
              texts: texts
            })));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1591390496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomItem = void 0;
          var _react = require("react");
          var _actions = require("./actions");
          const ClassroomItem = ({
            item,
            specs: {
              texts,
              module
            }
          }) => {
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            return _react.default.createElement("li", {
              key: item.id
            }, _react.default.createElement("h4", null, name), _react.default.createElement("div", {
              className: "item__actions"
            }, _react.default.createElement(_actions.ItemActions, {
              item: item,
              texts: texts,
              module: module
            })));
          };
          exports.ClassroomItem = ClassroomItem;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3185825012,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          class StoreManager extends _model.ReactiveModel {
            #items;
            get items() {
              return this.model.items;
            }
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
                await this.model.load();
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
        hash: 2441126484,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwidGV4dHMiLCJtb2R1bGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsImFzc2lnbm1lbnQiLCJzZXRBc3NpZ25tZW50IiwiYXNzaWdubWVudHMiLCJjbGFzc3Jvb21zIiwiZ2V0IiwiY29weSIsImZpbmFsTGluayIsInBhcmFtcyIsImJhc2VVcmwiLCJsaW5rIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3BpZWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhc3NpZ25lZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhY3Rpb25zIiwiZGFzaGJvYXJkIiwibGFiZWwiLCJMaW5rIiwidGl0bGUiLCJpY29uIiwiaHJlZiIsImJ1dHRvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsImFzc2lnbiIsImxvYWRpbmciLCJleHBvcnRzIiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbXMiLCJzdGF0ZSIsInJlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIkxpc3QiLCJpdGVtcyIsIm1vZGVsIiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJvbkNsb3NlIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfYWN0aW9ucyIsIm5hbWUiLCJzZWN0aW9uIiwia2V5IiwiX21vZGVsIiwiX2NvcmUiLCJTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicHJvcGVydGllcyIsImFzc29jaWF0ZWQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImdsb2JhbFRoaXMiLCJjIiwiZGVsZXRlIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImluc3RhbmNlIiwib25DaGFuZ2UiLCJnZXRQcm9wZXJ0aWVzIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMudHN4IiwiL3RzL2NsYXNzcm9vbXMudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtLnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUdPLE1BQU1JLFdBQVcsR0FBR0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLEtBQUs7WUFBRUM7VUFBTSxDQUFFLEtBQUk7WUFDdEQsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHUixNQUFBLENBQUFTLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNDLEVBQUUsRUFBRUMsS0FBSyxDQUFDLEdBQUdaLE1BQUEsQ0FBQVMsT0FBSyxDQUFDQyxRQUFRLENBQUNOLElBQUksQ0FBQ08sRUFBRSxDQUFDO1lBQzNDLE1BQU0sQ0FBQ0UsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2QsTUFBQSxDQUFBUyxPQUFLLENBQUNDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDUyxXQUFXLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFD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