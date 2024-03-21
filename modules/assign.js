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
        hash: 1642033557,
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
            const assignment = module.assignments.classrooms.get(item.id);
            console.log(44, module);
            const copy = () => {
              const finalLink = `${_config.default.params.baseUrl}/${assignment.link}`;
              navigator.clipboard.writeText(finalLink);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwidGV4dHMiLCJtb2R1bGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiYXNzaWdubWVudFVSTCIsInNldEFzc2lnbm1lbnRVUkwiLCJhc3NpZ25tZW50IiwiYXNzaWdubWVudHMiLCJjbGFzc3Jvb21zIiwiZ2V0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY29weSIsImZpbmFsTGluayIsInBhcmFtcyIsImJhc2VVcmwiLCJsaW5rIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiY29waWVkIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uIiwiYWRkU2Vzc2lvbiIsImUiLCJlcnJvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhY3Rpb25zIiwiZGFzaGJvYXJkIiwibGFiZWwiLCJMaW5rIiwidGl0bGUiLCJpY29uIiwiaHJlZiIsImJ1dHRvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsImFzc2lnbiIsImxvYWRpbmciLCJleHBvcnRzIiwiX2l0ZW0iLCJfbGlzdCIsIkNsYXNzcm9vbXMiLCJzdGF0ZSIsInJlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIkxpc3QiLCJpdGVtcyIsIm1vZGVsIiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJvbkNsb3NlIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsIl9hY3Rpb25zIiwibmFtZSIsInNlY3Rpb24iLCJrZXkiLCJfbW9kZWwiLCJfY29yZSIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkIiwiZ2xvYmFsVGhpcyIsImMiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUdPLE1BQU1JLFdBQVcsR0FBR0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLEtBQUs7WUFBRUM7VUFBTSxDQUFFLEtBQUk7WUFDdEQsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHUixNQUFBLENBQUFTLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNDLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR1osTUFBQSxDQUFBUyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUQsTUFBTUcsVUFBVSxHQUFHUCxNQUFNLENBQUNRLFdBQVcsQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUNaLElBQUksQ0FBQ2EsRUFBRSxDQUFDO1lBQzdEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFFLEVBQUViLE1BQU0sQ0FB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