System.register(["@beyond-js/kernel@0.1.9/bundle", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/components", "react@18.2.0", "@aimpact/ailearn-app@0.0.45/config", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.45/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.45/components/ui", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/image", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0045Config) {
      dependency_4 = _aimpactAilearnApp0045Config;
    }, function (_pragmateUi011Toast) {
      dependency_5 = _pragmateUi011Toast;
    }, function (_pragmateUi011Icons) {
      dependency_6 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0045ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0045ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011List) {
      dependency_9 = _pragmateUi011List;
    }, function (_pragmateUi011Empty) {
      dependency_10 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0045ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['pragmate-ui/components', dependency_1], ['@aimpact/chat/shared/components', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/toast', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/image', dependency_13], ['@beyond-js/reactive/model', dependency_14], ['@aimpact/ailearn-sdk/core', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/modules/assign');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 2284706237,
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
      INTERNAL MODULE: ./classrooms
      ****************************/

      ims.set('./classrooms', {
        hash: 2537774833,
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
            const output = state.model.items;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("h5", {
              className: "module-name"
            }, texts.module, ": ", module.title)), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement(_list.List, {
              className: "classroom__list",
              items: output,
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
        hash: 3154662945,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1BY3Rpb25zIiwiaXRlbSIsInRleHRzIiwibW9kdWxlIiwib25DbG9zZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImlkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJlIiwiY29uc29sZSIsImVycm9yIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJhc3NpZ25lZCIsImZpbmFsTGluayIsInBhcmFtcyIsImJhc2VVcmwiLCJsaW5rIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcGllZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJMaW5rIiwidGl0bGUiLCJkYXNoYm9hcmQiLCJ0YXJnZXQiLCJocmVmIiwiQXBwSWNvbkJ1dHRvbiIsImJvcmRlcmVkIiwiaWNvbiIsImFjdGlvbnMiLCJuYXZpZ2F0ZSIsIkljb25CdXR0b24iLCJCdXR0b24iLCJ2YXJpYW50IiwibG9hZGluZyIsImFzc2lnbiIsImJ1dHRvbiIsImV4cG9ydHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiQ2xhc3Nyb29tcyIsInN0YXRlIiwicmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwibW9kZWwiLCJpdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIm91dHB1dCIsIkZyYWdtZW50IiwiTGlzdCIsImNvbnRyb2wiLCJDbGFzc3Jvb21JdGVtIiwic3BlY3MiLCJfdWkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2NsYXNzcm9vbXMiLCJfbW9kYWwiLCJfdXNlU3RvcmUiLCJNb2R1bGVBc3NpZ25tZW50cyIsInN0b3JlIiwidXNlU3RvcmUiLCJNb2RhbCIsInNob3ciLCJjbG9zZUJhY2tkcm9wIiwiX2FjdGlvbnMiLCJfaW1hZ2UiLCJuYW1lIiwic2VjdGlvbiIsImtleSIsIkltYWdlIiwic3JjIiwiX21vZGVsIiwiX2NvcmUiLCJTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicHJvcGVydGllcyIsImFzc29jaWF0ZWQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImdsb2JhbFRoaXMiLCJjIiwiZGVsZXRlIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImluc3RhbmNlIiwib25DaGFuZ2UiLCJnZXRQcm9wZXJ0aWVzIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMudHN4IiwiL3RzL2NsYXNzcm9vbXMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7VUFFTyxNQUFNTSxXQUFXLEdBQUdBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxLQUFLO1lBQUVDLE1BQU07WUFBRUM7VUFBTyxDQUFFLEtBQUk7WUFDL0QsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxH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