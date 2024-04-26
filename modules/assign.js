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
        hash: 1878380104,
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
        hash: 688709568,
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
              className: "list-item__content"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29tcG9uZW50cyIsInJlcXVpcmUiLCJfcmVhY3QiLCJfY29uZmlnIiwiX3RvYXN0IiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1BY3Rpb25zIiwiaXRlbSIsInRleHRzIiwibW9kdWxlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImNvcHkiLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYXNzaWduZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiTGluayIsInRpdGxlIiwiZGFzaGJvYXJkIiwiaHJlZiIsIkFwcEljb25CdXR0b24iLCJpY29uIiwiSWNvbkJ1dHRvbiIsImFjdGlvbnMiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJsb2FkaW5nIiwiYXNzaWduIiwiYnV0dG9uIiwiZXhwb3J0cyIsIl9pdGVtIiwiX2xpc3QiLCJfZW1wdHkiLCJDbGFzc3Jvb21zIiwic3RhdGUiLCJyZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0IiwiTGlzdCIsImNvbnRyb2wiLCJDbGFzc3Jvb21JdGVtIiwic3BlY3MiLCJfdWkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2NsYXNzcm9vbXMiLCJfbW9kYWwiLCJfdXNlU3RvcmUiLCJNb2R1bGVBc3NpZ25tZW50cyIsIm9uQ2xvc2UiLCJzdG9yZSIsInVzZVN0b3JlIiwiTW9kYWwiLCJzaG93IiwiY2xvc2VCYWNrZHJvcCIsIl9hY3Rpb25zIiwiX2ltYWdlIiwibmFtZSIsInNlY3Rpb24iLCJkZXNjcmlwdGlvbiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwibG9nIiwia2V5IiwiSW1hZ2UiLCJzcmMiLCJfbW9kZWwiLCJfY29yZSIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkIiwiZ2xvYmFsVGhpcyIsImMiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvYWN0aW9ucy50c3giLCIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtLnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7VUFDTyxNQUFNTSxXQUFXLEdBQUdBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxLQUFLO1lBQUVDO1VBQU0sQ0FBRSxLQUFJO1lBQ3RELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1YsTUFBQSxDQUFBVyxPQUFL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