System.register(["@beyond-js/kernel@0.1.9/bundle", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/components", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/image", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
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
    }, function (_pragmateUi011List) {
      dependency_8 = _pragmateUi011List;
    }, function (_pragmateUi011Empty) {
      dependency_9 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011Modal) {
      dependency_11 = _pragmateUi011Modal;
    }, function (_pragmateUi011Image) {
      dependency_12 = _pragmateUi011Image;
    }, function (_beyondJsReactive1112Model) {
      dependency_13 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_14 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Styles) {
      dependency_15 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['pragmate-ui/components', dependency_1], ['@aimpact/chat/shared/components', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/toast', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/empty', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/image', dependency_12], ['@beyond-js/reactive/model', dependency_13], ['@aimpact/ailearn-sdk/core', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/assign');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 922786071,
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
                className: "flex flex-container flex-vertical-center flex-space-between"
              }, _react.default.createElement(_components.Link, {
                className: "pui-button button-primary btn-outline",
                title: texts.dashboard,
                href: assignment.dashboard
              }, _react.default.createElement(_icons2.AppIconButton, {
                icon: "dashboard"
              })), _react.default.createElement(_icons.IconButton, {
                icon: "copy",
                title: texts.actions.copy
              }));
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
        hash: 641430684,
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
        hash: 1001466462,
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
              module
            }
          }) => {
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            const description = ![undefined, '', '\\n'].includes(item.description) ? item.description : texts.item.description;
            console.log(20, description);
            return _react.default.createElement("li", {
              key: item.id
            }, _react.default.createElement(_image.Image, {
              src: "#",
              className: "list-item__image"
            }), _react.default.createElement("section", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("div", null, _react.default.createElement("h4", null, name), _react.default.createElement("span", null, texts.item.description)), _react.default.createElement("div", {
              className: "item__actions"
            }, _react.default.createElement(_actions.ItemActions, {
              item: item,
              texts: texts,
              module: module
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1BY3Rpb25zIiwiaXRlbSIsInRleHRzIiwibW9kdWxlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImNvcHkiLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYXNzaWduZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiTGluayIsInRpdGxlIiwiZGFzaGJvYXJkIiwiaHJlZiIsIkFwcEljb25CdXR0b24iLCJpY29uIiwiSWNvbkJ1dHRvbiIsImFjdGlvbnMiLCJhc3NpZ24iLCJsYWJlbCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsImxvYWRpbmciLCJidXR0b24iLCJleHBvcnRzIiwiX2l0ZW0iLCJfbGlzdCIsIl9lbXB0eSIsIkNsYXNzcm9vbXMiLCJzdGF0ZSIsInJlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIm1vZGVsIiwiaXRlbXMiLCJsZW5ndGgiLCJFbXB0eUxpc3QiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsIl91aSIsIkVtcHR5Q2FyZCIsInRleHQiLCJfY2xhc3Nyb29tcyIsIl9tb2RhbCIsIl91c2VTdG9yZSIsIk1vZHVsZUFzc2lnbm1lbnRzIiwib25DbG9zZSIsInN0b3JlIiwidXNlU3RvcmUiLCJNb2RhbCIsInNob3ciLCJjbG9zZUJhY2tkcm9wIiwiX2FjdGlvbnMiLCJfaW1hZ2UiLCJuYW1lIiwic2VjdGlvbiIsImRlc2NyaXB0aW9uIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJsb2ciLCJrZXkiLCJJbWFnZSIsInNyYyIsIl9tb2RlbCIsIl9jb3JlIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwiYyIsImRlbGV0ZSIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlIiwiZ2V0UHJvcGVydGllcyIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLE9BQUEsR0FBQUwsT0FBQTtVQUNPLE1BQU1NLFdBQVcsR0FBR0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLEtBQUs7WUFBRUM7VUFBTSxDQUFFLEtBQUk7WUFDdEQsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHVixNQUFBLENB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