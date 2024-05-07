System.register(["@beyond-js/kernel@0.1.9/bundle", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/components", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/image", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011List) {
      dependency_9 = _pragmateUi011List;
    }, function (_pragmateUi011Empty) {
      dependency_10 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Modal) {
      dependency_12 = _pragmateUi011Modal;
    }, function (_pragmateUi011Image) {
      dependency_13 = _pragmateUi011Image;
    }, function (_beyondJsReactive1112Model) {
      dependency_14 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_15 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Styles) {
      dependency_16 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['pragmate-ui/components', dependency_1], ['@aimpact/chat/shared/components', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/toast', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/image', dependency_13], ['@beyond-js/reactive/model', dependency_14], ['@aimpact/ailearn-sdk/core', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/assign');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 2514526373,
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
            item,
            texts,
            module,
            onClose
          }) => {
            const [fetching, setFetching] = _react.default.useState(false);
            const [assignment, setAssignment] = _react.default.useState(module.assignments.classrooms.get(item.id));
            const finalLink = `${_config.default.params.baseUrl}${assignment.link}`;
            const copy = event => {
              event.stopPropagation();
              navigator.clipboard.writeText(finalLink);
              _toast.toast.success(texts.messages.copied);
            };
            const onClick = async event => {
              try {
                event.stopPropagation();
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
                title: texts.actions.dashboard
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
      INTERNAL MODULE: ./classrooms
      ****************************/

      ims.set('./classrooms', {
        hash: 2115102148,
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
          const Classrooms = ({
            onClose,
            state,
            module,
            texts
          }) => {
            if (!state.ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            if (state.model.items.length === 0) return _react.default.createElement(_empty.EmptyList, null);
            return _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("h5", {
              className: "module-name"
            }, texts.module, ": ", module.title)), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement(_list.List, {
              className: "classroom__list",
              items: state.model.items,
              control: _item.ClassroomItem,
              specs: {
                module,
                texts,
                onClose
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
        hash: 2680377530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function EmptyList() {
            return _react.default.createElement("div", null, _react.default.createElement(_ui.EmptyCard, {
              text: "a\u00FAn no posees aulas creadas",
              icon: "info"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/create",
              className: "btn btn-primary btn-bordered"
            }, "Crear aula")));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2082168089,
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
            }, _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement(_classrooms.Classrooms, {
              onClose: onClose,
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
        hash: 4191729342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomItem = void 0;
          var _react = require("react");
          var _actions = require("./actions");
          var _image = require("pragmate-ui/image");
          const ClassroomItem = ({
            item,
            specs: {
              texts,
              module,
              onClose
            }
          }) => {
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            return _react.default.createElement("li", {
              key: item.id
            }, _react.default.createElement(_image.Image, {
              src: "#",
              className: "list-item__image"
            }), _react.default.createElement("section", {
              className: "list-item__content"
            }, _react.default.createElement("h4", null, name), _react.default.createElement("div", {
              className: "item__actions"
            }, _react.default.createElement(_actions.ItemActions, {
              item: item,
              texts: texts,
              module: module,
              onClose: onClose
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1BY3Rpb25zIiwiaXRlbSIsInRleHRzIiwibW9kdWxlIiwib25DbG9zZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImlkIiwiZmluYWxMaW5rIiwicGFyYW1zIiwiYmFzZVVybCIsImxpbmsiLCJjb3B5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcGllZCIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImFkZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhc3NpZ25lZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJMaW5rIiwidGl0bGUiLCJkYXNoYm9hcmQiLCJ0YXJnZXQiLCJocmVmIiwiQXBwSWNvbkJ1dHRvbiIsImJvcmRlcmVkIiwiaWNvbiIsImFjdGlvbnMiLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJhc3NpZ24iLCJidXR0b24iLCJleHBvcnRzIiwiX2l0ZW0iLCJfbGlzdCIsIl9lbXB0eSIsIkNsYXNzcm9vbXMiLCJzdGF0ZSIsInJlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIm1vZGVsIiwiaXRlbXMiLCJsZW5ndGgiLCJFbXB0eUxpc3QiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsIl91aSIsIkVtcHR5Q2FyZCIsInRleHQiLCJfY2xhc3Nyb29tcyIsIl9tb2RhbCIsIl91c2VTdG9yZSIsIk1vZHVsZUFzc2lnbm1lbnRzIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfYWN0aW9ucyIsIl9pbWFnZSIsIm5hbWUiLCJzZWN0aW9uIiwia2V5IiwiSW1hZ2UiLCJzcmMiLCJfbW9kZWwiLCJfY29yZSIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkIiwiZ2xvYmFsVGhpcyIsImMiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtLnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE9BQUEsR0FBQUwsT0FBQTtVQUVPLE1BQU1NLFdBQVcsR0FBR0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLEtBQUs7WUFBRUMsTUFBTTtZQUFFQztVQUFPLENBQUUsS0FBSTtZQUMvRCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdYLE1BQUEsQ0FBQVksT0FBSyxDQUFDQyxRQUFR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