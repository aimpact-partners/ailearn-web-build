System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.2.16/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.2.16/config", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.2.16/components/icons", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.3.0/session", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0216ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0216ComponentsUi;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_6 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp0216Config) {
      dependency_7 = _aimpactAilearnApp0216Config;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_8 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_9 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0216ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0216ComponentsIcons;
    }, function (_beyondJsReactive1112Model) {
      dependency_11 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_12 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk130Session) {
      dependency_13 = _aimpactChatSdk130Session;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.16"], ["@aimpact/ailearn-app", "0.2.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.16/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['pragmate-ui/toast', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/reactive/model', dependency_11], ['@aimpact/ailearn-sdk/core', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.16/modules/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 3722619581,
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
        hash: 2255691530,
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
          var _icons = require("@aimpact/ailearn-app/components/icons");
          0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiX2VtcHR5IiwiX3VpIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJFbXB0eSIsImVtcHR5IiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJpdGVtIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfY29uZmlnIiwiX3RvYXN0IiwiX2ljb25zIiwiSXRlbUFjdGlvbnMiLCJwcm9wcyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImlkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFzc2lnbmVkIiwiZSIsImVycm9ycyIsImZpbmFsTGluayIsInBhcmFtcyIsImJhc2VVcmwiLCJsaW5rIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcGllZCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImRhc2hib2FyZCIsIkFwcEljb25CdXR0b24iLCJib3JkZXJlZCIsImljb24iLCJhY3Rpb25zIiwic2hhcmUiLCJuYXZpZ2F0ZSIsIndhdGNoQWN0aXZpdHkiLCJ0YXJnZXQiLCJCdXR0b24iLCJ2YXJpYW50IiwibG9hZGluZyIsImFzc2lnbiIsImJ1dHRvbiIsIl9hY3Rpb25zIiwibmFtZSIsInNlY3Rpb24iLCJrZXkiLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsInJhdGlvIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkIiwidXNlciIsIm93bmVyIiwic2Vzc2lvbldyYXBwZXIiLCJvcmdhbml6YXRpb25JZCIsImNvbnNvbGUiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJ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