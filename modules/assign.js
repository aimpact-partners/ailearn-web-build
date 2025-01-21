System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
  _export("ModuleAssignments", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_2 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7List) {
      dependency_3 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_4 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_6 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactAilearnApp031Config) {
      dependency_8 = _aimpactAilearnApp031Config;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_9 = _pragmateUi100Beta7Toast;
    }, function (_aimpactReactive001Model) {
      dependency_10 = _aimpactReactive001Model;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_aimpactChatSdk141Session) {
      dependency_12 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/toast', dependency_9], ['@aimpact/reactive/model', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 1212022160,
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
            action,
            module,
            texts
          }) => {
            const [error, setError] = _react.default.useState();
            if (!state.ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            if (state.model?.items.length === 0) return _react.default.createElement(_empty.EmptyList, {
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
                setError,
                action
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
        hash: 415970960,
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
              href: "/classrooms/management",
              className: "btn btn-primary btn-bordered"
            }, texts.empty.action))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2361183441,
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
            texts,
            action
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
              action: action,
              texts: texts
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./item/actions
      ******************************/

      ims.set('./item/actions', {
        hash: 3239096759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = void 0;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _config = require("@aimpact/ailearn-app/config");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          const ItemActions = props => {
            const {
              setError,
              texts,
              module,
              item,
              action
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
                console.error(e);
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
              return _react.default.createElement(_components.ConditionalContainer, {
                condition: action,
                options: {
                  dashboard: _react.default.createElement("div", {
                    className: "item__actions flex flex-container flex-vertical-center"
                  }, _react.default.createElement(_icons.AppIconButton, {
                    bordered: true,
                    className: "circle",
                    icon: "frontArrow",
                    href: assignment.dashboard,
                    title: texts.actions.share
                  })),
                  navigate: _react.default.createElement("div", {
                    className: "item__actions flex flex-container flex-vertical-center"
                  }, _react.default.createElement(_icons.AppIconButton, {
                    bordered: true,
                    className: "circle",
                    icon: "frontArrow",
                    title: texts.actions.watchActivity,
                    target: "_blank",
                    href: finalLink
                  })),
                  share: _react.default.createElement("div", {
                    className: "item__actions flex flex-container flex-vertical-center"
                  }, _react.default.createElement("span", {
                    className: "link"
                  }, assignment.dashboard), _react.default.createElement(_icons.AppIconButton, {
                    className: "circle",
                    icon: "share",
                    onClick: copy,
                    title: texts.actions.copy
                  }), ' ')
                }
              });
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
        hash: 2378863148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
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
              this.#model = new _classrooms.Classrooms();
              this.#model.on('change', this.triggerEvent);
              this.load(specs);
              globalThis.specs = specs;
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
        hash: 2709640165,
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
                  model: instance.model,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiX3VpIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJFbXB0eSIsImVtcHR5IiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJpdGVtIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfaWNvbnMiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJwcm9wcyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImlkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFzc2lnbmVkIiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3BpZWQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJkYXNoYm9hcmQiLCJBcHBJY29uQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiYWN0aW9ucyIsInNoYXJlIiwibmF2aWdhdGUiLCJ3YXRjaEFjdGl2aXR5IiwidGFyZ2V0IiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJhc3NpZ24iLCJidXR0b24iLCJfYWN0aW9ucyIsIm5hbWUiLCJzZWN0aW9uIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJyYXRpbyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImFzc29jaWF0ZWQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImdsb2JhbFRoaXMiLCJ1c2VyIiwib3duZXIiLCJzZXNzaW9uV3JhcHBlciIsIm9yZ2FuaXphdGlvbklkIiwiZGVsZXRlIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImluc3RhbmNlIiwib25DaGFuZ2UiLCJnZXRQcm9wZXJ0aWVzIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2NsYXNzcm9vbXMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy9pdGVtL2luZGV4LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEs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