System.register(["@beyond-js/kernel@0.1.9/bundle", "pragmate-ui@0.0.6/components", "@aimpact/chat@1.0.1/shared/components", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/modal", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
  _export("ModuleAssignments", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_pragmateUi006Components) {
      dependency_1 = _pragmateUi006Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_2 = _aimpactChat101SharedComponents;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_4 = _aimpactAilearnApp0027Config;
    }, function (_pragmateUi006Toast) {
      dependency_5 = _pragmateUi006Toast;
    }, function (_pragmateUi006Icons) {
      dependency_6 = _pragmateUi006Icons;
    }, function (_pragmateUi006List) {
      dependency_7 = _pragmateUi006List;
    }, function (_pragmateUi006Modal) {
      dependency_8 = _pragmateUi006Modal;
    }, function (_beyondJsReactive1111Model) {
      dependency_9 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['pragmate-ui/components', dependency_1], ['@aimpact/chat/shared/components', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/toast', dependency_5], ['pragmate-ui/icons', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/modal', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/modules/assign');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwidGV4dHMiLCJtb2R1bGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsImFzc2lnbm1lbnQiLCJzZXRBc3NpZ25tZW50IiwiYXNzaWdubWVudHMiLCJjbGFzc3Jvb21zIiwiZ2V0IiwiY29weSIsImZpbmFsTGluayIsInBhcmFtcyIsImJhc2VVcmwiLCJsaW5rIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiY29waWVkIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFjdGlvbnMiLCJkYXNoYm9hcmQiLCJsYWJlbCIsIkxpbmsiLCJ0aXRsZSIsImljb24iLCJocmVmIiwiYnV0dG9uIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwiYXNzaWduIiwibG9hZGluZyIsImV4cG9ydHMiLCJfaXRlbSIsIl9saXN0IiwiQ2xhc3Nyb29tcyIsInN0YXRlIiwicmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiTGlzdCIsIml0ZW1zIiwibW9kZWwiLCJjb250cm9sIiwiQ2xhc3Nyb29tSXRlbSIsInNwZWNzIiwiX2NsYXNzcm9vbXMiLCJfbW9kYWwiLCJfdXNlU3RvcmUiLCJNb2R1bGVBc3NpZ25tZW50cyIsIm9uQ2xvc2UiLCJzdG9yZSIsInVzZVN0b3JlIiwiTW9kYWwiLCJzaG93IiwiX2FjdGlvbnMiLCJuYW1lIiwic2VjdGlvbiIsImtleSIsIl9tb2RlbCIsIl9jb3JlIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwiYyIsImRlbGV0ZSIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlIiwiZ2V0UHJvcGVydGllcyIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBR08sTUFBTUksV0FBVyxHQUFHQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsS0FBSztZQUFFQztVQUFNLENBQUUsS0FBSTtZQUN0RCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdSLE1BQUEsQ0FBQVMsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0MsRUFBRSxFQUFFQyxLQUFLLENBQUMsR0FBR1osTUFBQSxDQUFBUyxPQUFLLENBQUNDLFFBQVEsQ0FBQ04sSUFBSSxDQUFDTyxFQUFFLENBQUM7WUFDM0MsTUFBTSxDQUFDRSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHZCxNQUFBLENBQUFTLE9BQUssQ0FBQ0MsUUFBUSxDQUFDSixNQUFNLENBQUNTLFdBQVcsQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUNiLElBQUksQ0FBQ08sRUFBRSxDQUFDLENBQUM7WUFFOUYsTUFBTU8s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