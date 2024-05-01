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
        hash: 3656970758,
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
            const [assignment, setAssignment] = _react.default.useState(module.assignments.classrooms.get(item.id));
            const copy = event => {
              event.stopPropagation();
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
                className: "item__actions flex flex-container flex-vertical-center flex-space-between"
              }, _react.default.createElement(_components.Link, {
                className: "pui-button button-primary btn-outline",
                title: texts.dashboard,
                href: assignment.dashboard
              }, _react.default.createElement(_icons2.AppIconButton, {
                onClick: onClick,
                bordered: true,
                className: "circle",
                icon: "dashboard",
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
        hash: 1131208068,
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
        hash: 2435106557,
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
        hash: 1302017815,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1BY3Rpb25zIiwiaXRlbSIsInRleHRzIiwibW9kdWxlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImFzc2lnbm1lbnQiLCJzZXRBc3NpZ25tZW50IiwiYXNzaWdubWVudHMiLCJjbGFzc3Jvb21zIiwiZ2V0IiwiaWQiLCJjb3B5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwib25DbGljayIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFzc2lnbmVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkxpbmsiLCJ0aXRsZSIsImRhc2hib2FyZCIsImhyZWYiLCJBcHBJY29uQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiYWN0aW9ucyIsIkljb25CdXR0b24iLCJCdXR0b24iLCJ2YXJpYW50IiwibG9hZGluZyIsImFzc2lnbiIsImJ1dHRvbiIsImV4cG9ydHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiQ2xhc3Nyb29tcyIsInN0YXRlIiwicmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwibW9kZWwiLCJpdGVtcyIsImxlbmd0aCIsIkVtcHR5TGlzdCIsIkxpc3QiLCJjb250cm9sIiwiQ2xhc3Nyb29tSXRlbSIsInNwZWNzIiwiX3VpIiwiRW1wdHlDYXJkIiwidGV4dCIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJvbkNsb3NlIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfYWN0aW9ucyIsIl9pbWFnZSIsIm5hbWUiLCJzZWN0aW9uIiwia2V5IiwiSW1hZ2UiLCJzcmMiLCJfbW9kZWwiLCJfY29yZSIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkIiwiZ2xvYmFsVGhpcyIsImMiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtLnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7VUFDTyxNQUFNTSxXQUFXLEdBQUdBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxLQUFLO1lBQUVDO1VBQU0sQ0FBRSxLQUFJO1lBQ3RELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1YsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFckQs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R2dFLEtBQUssQ0FBQ2hFLE1BQU07Y0FDM0IsSUFBSSxDQUFDLENBQUEwRixVQUFXLEdBQUcxQixLQUFLLENBQUMwQixVQUFVO2NBQ25DSyxVQUFVLENBQUNDLENBQUMsR0FBRyxJQUFJO2NBQ25CLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUN2QyxLQUFLLENBQUNxQyxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQ3hDLEtBQUssR0FBRyxJQUFJO2VBQ2pCLENBQUMsT0FBTzFCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNcUUsTUFBTUEsQ0FBQ25HLElBQUk7Y0FDaEIsTUFBTUEsSUFBSSxDQUFDbUcsTUFBTSxFQUFFO1lBQ3BCOztVQUNBakQsT0FBQSxDQUFBdUMsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDRCxJQUFBL0YsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTJHLE1BQUEsR0FBQTNHLE9BQUE7VUFFTSxTQUFVbUYsUUFBUUEsQ0FBQ1YsS0FBSztZQUM3QixNQUFNLENBQUNTLEtBQUssRUFBRTBCLFFBQVEsQ0FBQyxHQUFHM0csTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsRUFBZ0I7WUFDeEQsTUFBTSxDQUFDaUQsS0FBSyxFQUFFK0MsUUFBUSxDQUFDLEdBQUc1RyxNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q1osTUFBQSxDQUFBVyxPQUFLLENBQUNrRyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxRQUFRLEdBQUcsSUFBSUosTUFBQSxDQUFBWCxZQUFZLENBQUN2QixLQUFLLENBQUM7Y0FDeENtQyxRQUFRLENBQUNHLFFBQVEsQ0FBQztjQUVsQixNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztnQkFDckJILFFBQVEsQ0FBQy9DLEtBQUssS0FBSztrQkFBRSxHQUFHQSxLQUFLO2tCQUFFQyxLQUFLLEVBQUVnRCxRQUFRLENBQUNoRCxLQUFLO2tCQUFFLEdBQUdnRCxRQUFRLENBQUNFLGFBQWE7Z0JBQUUsQ0FBRSxDQUFDLENBQUM7Y0FDdEYsQ0FBQztjQUNERixRQUFRLENBQUNWLEVBQUUsQ0FBQyxRQUFRLEVBQUVXLFFBQVEsQ0FBQztjQUMvQixPQUFPLE1BQUs7Z0JBQ1hELFFBQVEsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDO2NBQ2pDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FBTyxDQUFDOUIsS0FBSyxFQUFFcEIsS0FBSyxDQUFDO1VBQ3RCIiwiaWdub3JlTGlzdCI6W119