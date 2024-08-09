System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.3-dev.11/components/ui", "pragmate-ui@1.0.0-beta.1/empty", "pragmate-ui@1.0.0-beta.1/modal", "@aimpact/ailearn-app@0.1.3-dev.11/config", "pragmate-ui@1.0.0-beta.1/toast", "pragmate-ui@1.0.0-beta.1/icons", "@aimpact/ailearn-app@0.1.3-dev.11/components/icons", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
  _export("ModuleAssignments", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_2 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1List) {
      dependency_3 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp013Dev11ComponentsUi) {
      dependency_4 = _aimpactAilearnApp013Dev11ComponentsUi;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_5 = _pragmateUi100Beta1Empty;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_6 = _pragmateUi100Beta1Modal;
    }, function (_aimpactAilearnApp013Dev11Config) {
      dependency_7 = _aimpactAilearnApp013Dev11Config;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_8 = _pragmateUi100Beta1Toast;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_9 = _pragmateUi100Beta1Icons;
    }, function (_aimpactAilearnApp013Dev11ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp013Dev11ComponentsIcons;
    }, function (_beyondJsReactive120Model) {
      dependency_11 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_12 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk101Session) {
      dependency_13 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-dev.11"], ["@aimpact/ailearn-app", "0.1.3-dev.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-dev.11/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['pragmate-ui/toast', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/reactive/model', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-dev.11/modules/assign');
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

      /******************************
      INTERNAL MODULE: ./item/actions
      ******************************/

      ims.set('./item/actions', {
        hash: 2831330916,
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
            specs: {
              setError,
              texts,
              module,
              onClose
            },
            item
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
        hash: 4242669926,
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
            specs
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
              specs: specs
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiX3VpIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJFbXB0eSIsImVtcHR5IiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImFjdGlvbiIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJzdG9yZSIsInVzZVN0b3JlIiwiTW9kYWwiLCJzaG93IiwiY2xvc2VCYWNrZHJvcCIsIl9jb25maWciLCJfdG9hc3QiLCJfaWNvbnMiLCJfaWNvbnMyIiwiSXRlbUFjdGlvbnMiLCJpdGVtIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImFzc2lnbm1lbnQiLCJzZXRBc3NpZ25tZW50IiwiYXNzaWdubWVudHMiLCJjbGFzc3Jvb21zIiwiZ2V0IiwiaWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImFkZCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiYXNzaWduZWQiLCJlIiwiZXJyb3JzIiwiZmluYWxMaW5rIiwicGFyYW1zIiwiYmFzZVVybCIsImxpbmsiLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29waWVkIiwiZGFzaGJvYXJkIiwidGFyZ2V0IiwiQXBwSWNvbkJ1dHRvbiIsImJvcmRlcmVkIiwiaWNvbiIsImFjdGlvbnMiLCJuYXZpZ2F0ZSIsIkljb25CdXR0b24iLCJCdXR0b24iLCJ2YXJpYW50IiwibG9hZGluZyIsImFzc2lnbiIsImJ1dHRvbiIsIl9hY3Rpb25zIiwibmFtZSIsInNlY3Rpb24iLCJrZXkiLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsInJhdGlvIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkIiwidXNlciIsIm93bmVyIiwic2Vzc2lvbldyYXBwZXIiLCJvcmdhbml6YXRpb25JZCIsImNvbnNvbGUiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxHQUFBLEdBQUFMLE9BQUE7VUFNTyxN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