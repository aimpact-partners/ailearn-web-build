System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/list", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
  _export("ModuleAssignments", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_1 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_2 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7List) {
      dependency_3 = _pragmateUi100Beta7List;
    }, function (_react2) {
      dependency_4 = _react2;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/ui', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['react', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/toast', dependency_9], ['@aimpact/reactive/model', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 1003619796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classrooms = void 0;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _empty = require("./empty");
          var _item = require("./item");
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
              texts: texts,
              action: action
            });
            const output = state.items;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title[action]), _react.default.createElement("h5", {
              className: "module-name"
            }, texts.module, ": ", module.title)), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), output.length ? _react.default.createElement(_list.List, {
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
            }) : _react.default.createElement(_empty.EmptyList, {
              texts: texts,
              action: action
            })));
          };
          exports.Classrooms = Classrooms;
        }
      });

      /***********************
      INTERNAL MODULE: ./empty
      ***********************/

      ims.set('./empty', {
        hash: 3798357979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function EmptyList({
            texts,
            action
          }) {
            const attrs = texts.empty[action];
            console.log(1, action);
            return _react.default.createElement(_ui.EmptyCard, {
              ...attrs,
              icon: "info"
            }, action === 'share' && _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/management",
              className: "grow btn btn-primary"
            }, texts.actions.createClassroom)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1066586211,
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
              module: item,
              action
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
        hash: 1579908736,
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
                const replace = (str, values) => str.replace(/{(\w+)}/g, (_, key) => values[key] || `{${key}}`);
                _toast.toast.success(replace(texts.messages.assigned, {
                  classroom: module.title
                }));
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
                    className: "item__actions"
                  }, _react.default.createElement(_icons.AppIconButton, {
                    bordered: true,
                    className: "circle",
                    icon: "frontArrow",
                    href: assignment.dashboard,
                    title: texts.actions.share
                  })),
                  navigate: _react.default.createElement("div", {
                    className: "item__actions "
                  }, _react.default.createElement(_icons.AppIconButton, {
                    bordered: true,
                    className: "circle",
                    icon: "frontArrow",
                    title: texts.actions.watchActivity,
                    href: finalLink
                  })),
                  share: _react.default.createElement("div", {
                    className: "item__actions item__actions--link "
                  }, _react.default.createElement("span", {
                    className: "link visiable-xs"
                  }, "Assignado"), _react.default.createElement(_icons.AppIconButton, {
                    className: "circle",
                    icon: "copy",
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
        hash: 2186876838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomItem = void 0;
          var _react = require("react");
          var _actions = require("./actions");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          const ClassroomItem = ({
            item,
            ...props
          }) => {
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            return _react.default.createElement("li", {
              key: item.id
            }, _react.default.createElement("section", {
              className: "list-item__content"
            }, _react.default.createElement("div", {
              className: "item__content"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("h4", null, name)), _react.default.createElement(_actions.ItemActions, {
              item: item,
              ...props
            })));
          };
          exports.ClassroomItem = ClassroomItem;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3524226767,
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
            #action;
            get associated() {
              return this.#associated;
            }
            #items;
            get items() {
              return this.#items;
            }
            constructor(specs) {
              super();
              this.#model = new _classrooms.Classrooms();
              this.#model.on('change', this.triggerEvent);
              this.load(specs);
              this.#action = specs.action;
              this.#module = specs.module;
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
                if (['dashboard'].includes(this.#action)) {
                  this.#items = this.model.items.filter(item => this.#module.assignments.classrooms.get(item.id));
                } else {
                  this.#items = this.model.items;
                }
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
        hash: 727170923,
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
                  items: instance.items,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9yZWFjdCIsIl9lbXB0eSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJhdHRycyIsImVtcHR5IiwiY29uc29sZSIsImxvZyIsIkVtcHR5Q2FyZCIsImljb24iLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGVDbGFzc3Jvb20iLCJfY2xhc3Nyb29tcyIsIl9tb2RhbCIsIl91c2VTdG9yZSIsIk1vZHVsZUFzc2lnbm1lbnRzIiwiaXRlbSIsInN0b3JlIiwidXNlU3RvcmUiLCJNb2RhbCIsInNob3ciLCJjbG9zZUJhY2tkcm9wIiwiX2ljb25zIiwiX2NvbmZpZyIsIl90b2FzdCIsIkl0ZW1BY3Rpb25zIiwicHJvcHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiYXNzaWdubWVudCIsInNldEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50cyIsImNsYXNzcm9vbXMiLCJnZXQiLCJpZCIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwicmVwbGFjZSIsInN0ciIsInZhbHVlcyIsIl8iLCJrZXkiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFzc2lnbmVkIiwiY2xhc3Nyb29tIiwiZSIsImVycm9ycyIsImZpbmFsTGluayIsInBhcmFtcyIsImJhc2VVcmwiLCJsaW5rIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcGllZCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImRhc2hib2FyZCIsIkFwcEljb25CdXR0b24iLCJib3JkZXJlZCIsInNoYXJlIiwibmF2aWdhdGUiLCJ3YXRjaEFjdGl2aXR5IiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJhc3NpZ24iLCJidXR0b24iLCJfYWN0aW9ucyIsIm5hbWUiLCJzZWN0aW9uIiwiQXBwSWNvbiIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImFzc29jaWF0ZWQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImdsb2JhbFRoaXMiLCJ1c2VyIiwib3duZXIiLCJzZXNzaW9uV3JhcHBlciIsIm9yZ2FuaXphdGlvbklkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsR0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxH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