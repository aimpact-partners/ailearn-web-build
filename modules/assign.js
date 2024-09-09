System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/modal", "@aimpact/ailearn-app@0.1.6-dev.21/config", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.6-dev.21/components/icons", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
  _export("ModuleAssignments", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta6Components) {
      dependency_2 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6List) {
      dependency_3 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp016Dev21ComponentsUi) {
      dependency_4 = _aimpactAilearnApp016Dev21ComponentsUi;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_5 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_6 = _pragmateUi100Beta6Modal;
    }, function (_aimpactAilearnApp016Dev21Config) {
      dependency_7 = _aimpactAilearnApp016Dev21Config;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_8 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_9 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp016Dev21ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp016Dev21ComponentsIcons;
    }, function (_beyondJsReactive120Model) {
      dependency_11 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_12 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk110Session) {
      dependency_13 = _aimpactChatSdk110Session;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["simplebar-react", "3.2.6"], ["swiper", "10.3.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['pragmate-ui/toast', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/reactive/model', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.21/modules/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 2823949906,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const Classrooms = ({
            onClose,
            state,
            module,
            texts
          }) => {
            const [error, setError] = _react.default.useState();
            if (!state.ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            if (state.model.items.length === 0) return _react.default.createElement(_empty.EmptyList, {
              texts: texts
            });
            const output = state.model.items;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("h5", {
              className: "module-name"
            }, texts.module, ": ", module.title)), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_list.List, {
              className: "classroom__list",
              items: output,
              control: _item.ClassroomItem,
              specs: {
                module,
                texts,
                onClose,
                setError
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
        hash: 511639491,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          function EmptyList({
            texts
          }) {
            return _react.default.createElement("div", null, _react.default.createElement(_empty.Empty, null, _react.default.createElement("h3", null, texts.empty.title), _react.default.createElement("p", null, texts.empty.description), _react.default.createElement("div", {
              className: "empty__actions"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/create",
              className: "btn btn-primary btn-bordered"
            }, texts.empty.action))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1516419438,
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
            item,
            texts
          }) {
            const [store, state] = (0, _useStore.useStore)({
              module: item
            });
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose,
              closeBackdrop: false,
              className: "modal--assignment"
            }, _react.default.createElement(_classrooms.Classrooms, {
              onClose: onClose,
              state: state,
              module: item,
              texts: texts
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./item/actions
      ******************************/

      ims.set('./item/actions', {
        hash: 1846059321,
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
          0;
          const ItemActions = props => {
            const {
              setError,
              texts,
              module,
              onClose,
              item
            } = props;
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
                _toast.toast.success(texts.messages.assigned);
              } catch (e) {
                setError(texts.errors.default);
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
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 470978484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomItem = void 0;
          var _react = require("react");
          var _actions = require("./actions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const ClassroomItem = ({
            item,
            ...props
          }) => {
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            return _react.default.createElement("li", {
              key: item.id
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "classroom",
              ratio: "square",
              className: "list-item__image"
            }), _react.default.createElement("section", {
              className: "list-item__content"
            }, _react.default.createElement("h4", null, name), _react.default.createElement("div", {
              className: "item__actions"
            }, _react.default.createElement(_actions.ItemActions, {
              item: item,
              ...props
            }))));
          };
          exports.ClassroomItem = ClassroomItem;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3977937475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
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
              try {
                const specs = {
                  user: true
                };
                if (this.#module.owner?.id && this.#module.owner?.id !== _session.sessionWrapper.user.id) {
                  specs.organizationId = this.module.owner?.id;
                }
                await this.model.load(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiX3VpIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJFbXB0eSIsImVtcHR5IiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImFjdGlvbiIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJpdGVtIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfY29uZmlnIiwiX3RvYXN0IiwiX2ljb25zIiwiX2ljb25zMiIsIkl0ZW1BY3Rpb25zIiwicHJvcHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiYXNzaWdubWVudCIsInNldEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50cyIsImNsYXNzcm9vbXMiLCJnZXQiLCJpZCIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJhc3NpZ25lZCIsImUiLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3BpZWQiLCJkYXNoYm9hcmQiLCJ0YXJnZXQiLCJBcHBJY29uQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiYWN0aW9ucyIsIm5hdmlnYXRlIiwiSWNvbkJ1dHRvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsb2FkaW5nIiwiYXNzaWduIiwiYnV0dG9uIiwiX2FjdGlvbnMiLCJuYW1lIiwic2VjdGlvbiIsImtleSIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwicmF0aW8iLCJfbW9kZWwiLCJfY29yZSIsIl9zZXNzaW9uIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJ1c2VyIiwib3duZXIiLCJzZXNzaW9uV3JhcHBlciIsIm9yZ2FuaXphdGlvbklkIiwiY29uc29sZSIsImRlbGV0ZSIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlIiwiZ2V0UHJvcGVydGllcyIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvaXRlbS9pbmRleC50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLEdBQUEsR0FBQUwsT0FB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