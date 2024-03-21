System.register(["@beyond-js/kernel@0.1.9/bundle", "pragmate-ui@0.0.6/components", "@aimpact/chat@1.0.1/shared/components", "react@18.2.0", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/modal", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_11 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['pragmate-ui/components', dependency_1], ['@aimpact/chat/shared/components', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/toast', dependency_5], ['pragmate-ui/icons', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/modal', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@beyond-js/kernel/styles', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/modules/assign');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 3691005978,
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
            const [assignmentURL, setAssignmentURL] = _react.default.useState(null);
            const assignment = module.assignments.classrooms.has(item.id);
            const copy = () => {
              navigator.clipboard.writeText(assignment.link);
              _toast.toast.success(texts.copied);
            };
            const onClick = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const session = await module.addSession(item.id);
                setFetching(false);
                setAssignmentURL(`${_config.default.params.baseUrl}/assignments/${session.id}`);
              } catch (e) {
                console.error(e);
              }
            };
            if (assignment) {
              return _react.default.createElement("div", {
                className: "flex-container flex-center flex-vertical-center"
              }, _react.default.createElement(_components.Button, {
                title: texts.dashboard,
                icon: "eye"
              }, texts.actions.dashboard), _react.default.createElement(_components.Button, {
                title: texts.actions.copy,
                icon: "copy-link",
                onClick: copy
              }, texts.actions.copy));
            }
            return _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              loading: fetching,
              onClick: onClick
            }, texts.actions.assign);
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
        hash: 3301314594,
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
            }, name, _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwidGV4dHMiLCJtb2R1bGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiYXNzaWdubWVudFVSTCIsInNldEFzc2lnbm1lbnRVUkwiLCJhc3NpZ25tZW50IiwiYXNzaWdubWVudHMiLCJjbGFzc3Jvb21zIiwiaGFzIiwiaWQiLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibGluayIsInRvYXN0Iiwic3VjY2VzcyIsImNvcGllZCIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbiIsImFkZFNlc3Npb24iLCJwYXJhbXMiLCJiYXNlVXJsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJ0aXRsZSIsImRhc2hib2FyZCIsImljb24iLCJhY3Rpb25zIiwidmFyaWFudCIsImJvcmRlcmVkIiwibG9hZGluZyIsImFzc2lnbiIsImV4cG9ydHMiLCJfaXRlbSIsIl9saXN0IiwiQ2xhc3Nyb29tcyIsInN0YXRlIiwicmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiTGlzdCIsIml0ZW1zIiwibW9kZWwiLCJjb250cm9sIiwiQ2xhc3Nyb29tSXRlbSIsInNwZWNzIiwiX2NsYXNzcm9vbXMiLCJfbW9kYWwiLCJfdXNlU3RvcmUiLCJNb2R1bGVBc3NpZ25tZW50cyIsIm9uQ2xvc2UiLCJzdG9yZSIsInVzZVN0b3JlIiwiTW9kYWwiLCJzaG93IiwiX2FjdGlvbnMiLCJuYW1lIiwic2VjdGlvbiIsImtleSIsIl9tb2RlbCIsIl9jb3JlIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwiYyIsImRlbGV0ZSIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlIiwiZ2V0UHJvcGVydGllcyIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFHTyxNQUFNSSxXQUFXLEdBQUdBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxLQUFLO1lBQUVDO1VBQU0sQ0FBRSxLQUFJO1lBQ3RELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1IsTUFBQSxDQUFBUyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDQyxhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUdaLE1BQUEsQ0FBQVMsT0FBSyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlELE1BQU1HLFVBQVUsR0FBR1AsTUFBTSxDQUFDUSxXQUFXLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDWixJQUFJLENBQUNhLEVBQUUsQ0FBQztZQUU3RCxNQUFNQyxJQUFJLEdBQUdBLENBQUEsS0FBSztjQUNqQkMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1IsVUFBVSxDQUFDUyxJQUFJLENBQUM7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