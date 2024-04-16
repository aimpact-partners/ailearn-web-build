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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 2915325997,
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
              _toast.toast.success(texts.copied);
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
        hash: 452426616,
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
              onClose: onClose
            }, _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement(_classrooms.Classrooms, {
              state: state,
              module: module,
              texts: texts.assign
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwidGV4dHMiLCJtb2R1bGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsImFzc2lnbm1lbnQiLCJzZXRBc3NpZ25tZW50IiwiYXNzaWdubWVudHMiLCJjbGFzc3Jvb21zIiwiZ2V0IiwiY29weSIsImZpbmFsTGluayIsInBhcmFtcyIsImJhc2VVcmwiLCJsaW5rIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiY29waWVkIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFjdGlvbnMiLCJkYXNoYm9hcmQiLCJsYWJlbCIsIkxpbmsiLCJ0aXRsZSIsImljb24iLCJocmVmIiwiYnV0dG9uIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiYXNzaWduIiwibG9hZGluZyIsImV4cG9ydHMiLCJfaXRlbSIsIl9saXN0IiwiQ2xhc3Nyb29tcyIsInN0YXRlIiwicmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiTGlzdCIsIml0ZW1zIiwibW9kZWwiLCJjb250cm9sIiwiQ2xhc3Nyb29tSXRlbSIsInNwZWNzIiwiX2NsYXNzcm9vbXMiLCJfbW9kYWwiLCJfdXNlU3RvcmUiLCJNb2R1bGVBc3NpZ25tZW50cyIsIm9uQ2xvc2UiLCJzdG9yZSIsInVzZVN0b3JlIiwiTW9kYWwiLCJzaG93IiwiX2FjdGlvbnMiLCJuYW1lIiwic2VjdGlvbiIsImtleSIsIl9tb2RlbCIsIl9jb3JlIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwiYyIsImRlbGV0ZSIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlIiwiZ2V0UHJvcGVydGllcyIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFHTyxNQUFNSSxXQUFXLEdBQUdBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxLQUFLO1lBQUVDO1VBQU0sQ0FBRSxLQUFJO1lBQ3RELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1IsTUFBQSxDQUFBUyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDQyxFQUFFLEVBQUVDLEtBQUssQ0FBQyxHQUFHWixNQUFBLENBQUFTLE9BQUssQ0FBQ0MsUUFBUSxDQUFDTixJQUFJLENBQUNPLEVBQUUsQ0FBQztZQUMzQyxNQUFNLENBQUNFLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdkLE1BQUEsQ0FBQVMsT0FBSyxDQUFDQyxRQUFRLENBQUNKLE1BQU0sQ0FBQ1MsV0FBVyxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQ2IsSUFBSSxDQUFDTyxFQUFFLENBQUMsQ0FBQztZQUU5RixNQUFN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VUFBVTtjQUNuQ0ssVUFBVSxDQUFDQyxDQUFDLEdBQUcsSUFBSTtjQUNuQixJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDNUIsS0FBSyxDQUFDMEIsSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMvQixLQUFLLEdBQUcsSUFBSTtlQUNqQixDQUFDLE9BQU92QixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTXlELE1BQU1BLENBQUN0RixJQUFJO2NBQ2hCLE1BQU1BLElBQUksQ0FBQ3NGLE1BQU0sRUFBRTtZQUNwQjs7VUFDQXZDLE9BQUEsQ0FBQTZCLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0QsSUFBQWhGLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUE0RixNQUFBLEdBQUE1RixPQUFBO1VBRU0sU0FBVXdFLFFBQVFBLENBQUNQLEtBQUs7WUFDN0IsTUFBTSxDQUFDTSxLQUFLLEVBQUVzQixRQUFRLENBQUMsR0FBRzVGLE1BQUEsQ0FBQVMsT0FBSyxDQUFDQyxRQUFRLEVBQWdCO1lBQ3hELE1BQU0sQ0FBQzZDLEtBQUssRUFBRXNDLFFBQVEsQ0FBQyxHQUFHN0YsTUFBQSxDQUFBUyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFNUNWLE1BQUEsQ0FBQVMsT0FBSyxDQUFDcUYsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsUUFBUSxHQUFHLElBQUlKLE1BQUEsQ0FBQVgsWUFBWSxDQUFDaEIsS0FBSyxDQUFDO2NBQ3hDNEIsUUFBUSxDQUFDRyxRQUFRLENBQUM7Y0FFbEIsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3JCSCxRQUFRLENBQUN0QyxLQUFLLEtBQUs7a0JBQUUsR0FBR0EsS0FBSztrQkFBRUMsS0FBSyxFQUFFdUMsUUFBUSxDQUFDdkMsS0FBSztrQkFBRSxHQUFHdUMsUUFBUSxDQUFDRSxhQUFhO2dCQUFFLENBQUUsQ0FBQyxDQUFDO2NBQ3RGLENBQUM7Y0FDREYsUUFBUSxDQUFDVixFQUFFLENBQUMsUUFBUSxFQUFFVyxRQUFRLENBQUM7Y0FDL0IsT0FBTyxNQUFLO2dCQUNYRCxRQUFRLENBQUNHLEdBQUcsQ0FBQyxRQUFRLEVBQUVGLFFBQVEsQ0FBQztjQUNqQyxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQU8sQ0FBQzFCLEtBQUssRUFBRWYsS0FBSyxDQUFDO1VBQ3RCIiwiaWdub3JlTGlzdCI6W119