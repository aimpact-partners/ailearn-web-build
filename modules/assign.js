System.register(["@beyond-js/kernel@0.1.9/bundle", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/components", "react@18.2.0", "@aimpact/ailearn-app@0.0.34.dev-01/config", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.34.dev-01/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.34.dev-01/components/ui", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/image", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0034Dev01Config) {
      dependency_4 = _aimpactAilearnApp0034Dev01Config;
    }, function (_pragmateUi011Toast) {
      dependency_5 = _pragmateUi011Toast;
    }, function (_pragmateUi011Icons) {
      dependency_6 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0034Dev01ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0034Dev01ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011List) {
      dependency_9 = _pragmateUi011List;
    }, function (_pragmateUi011Empty) {
      dependency_10 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0034Dev01ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0034Dev01ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.34.dev-01"], ["@aimpact/ailearn-app", "0.0.34.dev-01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.34.dev-01/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['pragmate-ui/components', dependency_1], ['@aimpact/chat/shared/components', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/toast', dependency_5], ['pragmate-ui/icons', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/empty', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/image', dependency_13], ['@beyond-js/reactive/model', dependency_14], ['@aimpact/ailearn-sdk/core', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.34.dev-01/modules/assign');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1BY3Rpb25zIiwiaXRlbSIsInRleHRzIiwibW9kdWxlIiwib25DbG9zZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImlkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJlIiwiY29uc29sZSIsImVycm9yIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJhc3NpZ25lZCIsImZpbmFsTGluayIsInBhcmFtcyIsImJhc2VVcmwiLCJsaW5rIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcGllZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJMaW5rIiwidGl0bGUiLCJkYXNoYm9hcmQiLCJ0YXJnZXQiLCJocmVmIiwiQXBwSWNvbkJ1dHRvbiIsImJvcmRlcmVkIiwiaWNvbiIsImFjdGlvbnMiLCJuYXZpZ2F0ZSIsIkljb25CdXR0b24iLCJCdXR0b24iLCJ2YXJpYW50IiwibG9hZGluZyIsImFzc2lnbiIsImJ1dHRvbiIsImV4cG9ydHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiQ2xhc3Nyb29tcyIsInN0YXRlIiwicmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwibW9kZWwiLCJpdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiQ2xhc3Nyb29tSXRlbSIsInNwZWNzIiwiX3VpIiwiRW1wdHlDYXJkIiwidGV4dCIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJzdG9yZSIsInVzZVN0b3JlIiwiTW9kYWwiLCJzaG93IiwiY2xvc2VCYWNrZHJvcCIsIl9hY3Rpb25zIiwiX2ltYWdlIiwibmFtZSIsInNlY3Rpb24iLCJrZXkiLCJJbWFnZSIsInNyYyIsIl9tb2RlbCIsIl9jb3JlIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwiYyIsImRlbGV0ZSIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlIiwiZ2V0UHJvcGVydGllcyIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zLnRzeCIsIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssT0FBQSxHQUFBTCxPQUFBO1VBRU8sTUFBTU0sV0FBVyxHQUFHQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsS0FBSztZQUFFQyxNQUFNO1lBQUVDO1VBQU8sQ0FBRSxLQUFJO1lBQy9ELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1gsTUFBQSxDQUFBWSxPQUFL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