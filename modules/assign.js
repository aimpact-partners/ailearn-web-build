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
        hash: 2893483924,
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
              texts: texts
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
        hash: 3838194054,
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
        hash: 2211350129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9yZWFjdCIsIl9lbXB0eSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJhdHRycyIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZUNsYXNzcm9vbSIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJpdGVtIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfaWNvbnMiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJwcm9wcyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImlkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFzc2lnbmVkIiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3BpZWQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJkYXNoYm9hcmQiLCJBcHBJY29uQnV0dG9uIiwiYm9yZGVyZWQiLCJzaGFyZSIsIm5hdmlnYXRlIiwid2F0Y2hBY3Rpdml0eSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsb2FkaW5nIiwiYXNzaWduIiwiYnV0dG9uIiwiX2FjdGlvbnMiLCJuYW1lIiwic2VjdGlvbiIsImtleSIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwicmF0aW8iLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwidXNlciIsIm93bmVyIiwic2Vzc2lvbldyYXBwZXIiLCJvcmdhbml6YXRpb25JZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiZGVsZXRlIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImluc3RhbmNlIiwib25DaGFuZ2UiLCJnZXRQcm9wZXJ0aWVzIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2NsYXNzcm9vbXMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy9pdGVtL2luZGV4LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLEtBQUEsR0FBQUwsT0FBQTtVQUlPLE1BQU1NLFVBQVUsR0FBR0EsQ0FBQztZQUFFQyxPQUFPO1lBQUVDLEtBQUs7WUFBRUMsTUFBTTtZQUFFQyxNQUFNO1lBQUVDO1VBQUssQ0FBRSxLQUFJO1lBQ3ZFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1YsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxFQUFFLE9BQU9iLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNoQixXQUFBLENBQUFpQixPQUFPO2NBQUNDLE1BQU07WUFBQSxFQUFHO1lBRTNDLElBQUlYLEtBQUssQ0FBQ1ksS0FBSyxFQUFFQyxLQUFLLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUUsT0FBT25CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNiLE1BQUEsQ0FBQW1CLFNBQVM7Y0FBQ1osS0FBSyxFQUFFQTtZQUFLLEVBQUk7WUFDdkUsTUFBTWEsTUFBTSxHQUFHaEIsS0FBSyxDQUFDYSxLQUFLO1lBRTFCLE9BQ0NsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFBZCxNQUFBLENBQUFXLE9BQUEsQ0FBQVcsUUFBQSxRQUNDdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsaUJBQ0NkLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLGFBQUtOLEtBQUssQ0FBQ2UsS0FBSyxDQUFDakIsTUFBTSxDQUFDLENBQU0sRUFDOUJOLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO2NBQUlVLFNBQVMsRUFBQztZQUFhLEdBQ3pCaEIsS0FBSyxDQUFDRCxNQUFNLEUsTUFBSUEsTUFBTSxDQUFDZ0IsS0FBSyxDQUN6QixDQUNHLEVBRVR2QixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBa0IsR0FDaEN4QixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFDbEIsR0FBQSxDQUFBNkIsYUFBYTtjQUFDaEIsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDOUJZLE1BQU0sQ0FBQ0YsTUFBTSxHQUNibkIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ2YsS0FBQSxDQUFBMkIsSUFBSTtjQUNKRixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCTixLQUFLLEVBQUVHLE1BQU07Y0FDYk0sT0FBTyxFQUFFekIsS0FBQSxDQUFBMEIsYUFBYTtjQUN0QkMsS0FBSyxFQUFFO2dCQUFFdEIsTUFBTTtnQkFBRUMsS0FBSztnQkFBRUosT0FBTztnQkFBRU0sUUFBUTtnQkFBRUo7Y0FBTTtZQUFFLEVBQ2xELEdBRUZOLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNiLE1BQUEsQ0FBQW1CLFNBQVM7Y0FBQ1osS0FBSyxFQUFFQSxLQUFLO2NBQUVGLE1BQU0sRUFBRUE7WUFBTSxFQUN2QyxDQUNJLENBQ0o7VUFFTCxDQUFDO1VBQUN3QixPQUFBLENBQUEzQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENGLElBQUFILE1BQUEsR0FBQUgsT0FBQTtVQUVBLElBQUFELEdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVV1QixTQUFTQSxDQUFDO1lBQUVaLEtBQUs7WUFBRUY7VUFBTSxDQUFFO1lBQzFDLE1BQU15QixLQUFLLEdBQUd2QixLQUFLLENBQUN3QixLQUFLLENBQUMxQixNQUFNLENBQUM7WUFFakMsT0FDQ04sTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQXFDLFNBQVM7Y0FBQSxHQUFLRixLQUFLO2NBQUVHLElBQUksRUFBQztZQUFNLEdBQy9CNUIsTUFBTSxLQUFLLE9BQU8sSUFDbEJOLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFvQyxHQUNsRHhCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNoQixXQUFBLENBQUFxQyxJQUFJO2NBQUNDLElBQUksRUFBQyx3QkFBd0I7Y0FBQ1osU0FBUyxFQUFDO1lBQXNCLEdBQ2xFaEIsS0FBSyxDQUFDNkIsT0FBTyxDQUFDQyxlQUFlLENBQ3hCLENBRVIsQ0FDVTtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBdEMsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQTBDLFdBQUEsR0FBQTFDLE9BQUE7VUFDQSxJQUFBMkMsTUFBQSxHQUFBM0MsT0FBQTtVQUNBLElBQUE0QyxTQUFBLEdBQUE1QyxPQUFBO1VBRU87VUFBVSxTQUFVNkMsaUJBQWlCQSxDQUFDO1lBQUV0QyxPQUFPO1lBQUV1QyxJQUFJO1lBQUVuQyxLQUFLO1lBQUVGO1VBQU0sQ0FBRTtZQUM1RSxNQUFNLENBQUNzQyxLQUFLLEVBQUV2QyxLQUFLLENBQUMsR0FBRyxJQUFBb0MsU0FBQSxDQUFBSSxRQUFRLEVBQUM7Y0FBRXRDLE1BQU0sRUFBRW9DLElBQUk7Y0FBRXJDO1lBQU0sQ0FBRSxDQUFDO1lBRXpELE9BQ0NOLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUMwQixNQUFBLENBQUFNLEtBQUs7Y0FBQ0MsSUFBSTtjQUFDM0MsT0FBTyxFQUFFQSxPQUFPO2NBQUU0QyxhQUFhLEVBQUUsS0FBSztjQUFFeEIsU0FBUyxFQUFDO1lBQW1CLEdBQ2hGeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ3lCLFdBQUEsQ0FBQXBDLFVBQVU7Y0FBQ0MsT0FBTyxFQUFFQSxPQUFPO2NBQUVDLEtBQUssRUFBRUEsS0FBSztjQUFFRSxNQUFNLEVBQUVvQyxJQUFJO2NBQUVyQyxNQUFNLEVBQUVBLE1BQU07Y0FBRUUsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDbkY7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBeUMsTUFBQSxHQUFBcEQsT0FBQTtVQUNBLElBQUFxRCxPQUFBLEdBQUFyRCxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNELE1BQUEsR0FBQXRELE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFFTyxNQUFNdUQsV0FBVyxHQUFHQyxLQUFLLElBQUc7WUFDbEMsTUFBTTtjQUFFM0MsUUFBUTtjQUFFRixLQUFLO2NBQUVELE1BQU07Y0FBRW9DLElBQUk7Y0FBRXJDO1lBQU0sQ0FBRSxHQUFHK0MsS0FBSztZQUN2RCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd2RCxNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxNQUFNLENBQUM0QyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHekQsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDbUQsV0FBVyxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQ2tCLEVBQUUsQ0FBQyxDQUFDO1lBRTlGLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDN0IsSUFBSTtnQkFDSEEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3ZCVCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQlEsS0FBSyxDQUFDRSxjQUFjLEVBQUU7Z0JBRXRCLE1BQU1ULFVBQVUsR0FBRyxNQUFNakQsTUFBTSxDQUFDbUQsV0FBVyxDQUFDUSxHQUFHLENBQUN2QixJQUFJLENBQUNrQixFQUFFLENBQUM7Z0JBQ3hESixhQUFhLENBQUNELFVBQVUsQ0FBQztnQkFDekJELFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCSixNQUFBLENBQUFnQixLQUFLLENBQUNDLE9BQU8sQ0FBQzVELEtBQUssQ0FBQzZELFFBQVEsQ0FBQ0MsUUFBUSxDQUFDO2VBQ3RDLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUMvRCxLQUFLLENBQUM4RCxDQUFDLENBQUM7Z0JBQ2hCN0QsUUFBUSxDQUFDRixLQUFLLENBQUNpRSxNQUFNLENBQUM5RCxPQUFPLENBQUM7O1lBRWhDLENBQUM7WUFFRCxJQUFJNkMsVUFBVSxFQUFFO2NBQ2YsTUFBTWtCLFNBQVMsR0FBRyxHQUFHeEIsT0FBQSxDQUFBdkMsT0FBTSxDQUFDZ0UsTUFBTSxDQUFDQyxPQUFPLEdBQUdwQixVQUFVLENBQUNxQixJQUFJLEVBQUU7Y0FDOUQsTUFBTUMsSUFBSSxHQUFHZixLQUFLLElBQUc7Z0JBQ3BCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtnQkFDdkJlLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNQLFNBQVMsQ0FBQztnQkFDeEN2QixNQUFBLENBQUFnQixLQUFLLENBQUNDLE9BQU8sQ0FBQzVELEtBQUssQ0FBQzZELFFBQVEsQ0FBQ2EsTUFBTSxDQUFDO2NBQ3JDLENBQUM7Y0FFRCxPQUNDbEYsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQXFGLG9CQUFvQjtnQkFDcEJDLFNBQVMsRUFBRTlFLE1BQU07Z0JBQ2pCK0UsT0FBTyxFQUFFO2tCQUNSQyxTQUFTLEVBQ1J0RixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQTtvQkFBS1UsU0FBUyxFQUFDO2tCQUF3RCxHQUN0RXhCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNtQyxNQUFBLENBQUFzQyxhQUFhO29CQUNiQyxRQUFRO29CQUNSaEUsU0FBUyxFQUFDLFFBQVE7b0JBQ2xCVSxJQUFJLEVBQUMsWUFBWTtvQkFDakJFLElBQUksRUFBRW9CLFVBQVUsQ0FBQzhCLFNBQVM7b0JBQzFCL0QsS0FBSyxFQUFFZixLQUFLLENBQUM2QixPQUFPLENBQUNvRDtrQkFBSyxFQUN6QixDQUVIO2tCQUNEQyxRQUFRLEVBQ1AxRixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQTtvQkFBS1UsU0FBUyxFQUFDO2tCQUF3RCxHQUN0RXhCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNtQyxNQUFBLENBQUFzQyxhQUFhO29CQUNiQyxRQUFRO29CQUNSaEUsU0FBUyxFQUFDLFFBQVE7b0JBQ2xCVSxJQUFJLEVBQUMsWUFBWTtvQkFDakJYLEtBQUssRUFBRWYsS0FBSyxDQUFDNkIsT0FBTyxDQUFDc0QsYUFBYTtvQkFDbEN2RCxJQUFJLEVBQUVzQztrQkFBUyxFQUNkLENBRUg7a0JBQ0RlLEtBQUssRUFDSnpGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO29CQUFLVSxTQUFTLEVBQUM7a0JBQXdELEdBQ3RFeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUE7b0JBQU1VLFNBQVMsRUFBQztrQkFBTSxHQUFFZ0MsVUFBVSxDQUFDOEIsU0FBUyxDQUFRLEVBQ3BEdEYsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ21DLE1BQUEsQ0FBQXNDLGFBQWE7b0JBQ2IvRCxTQUFTLEVBQUMsUUFBUTtvQkFDbEJVLElBQUksRUFBQyxPQUFPO29CQUNaNEIsT0FBTyxFQUFFZ0IsSUFBSTtvQkFDYnZELEtBQUssRUFBRWYsS0FBSyxDQUFDNkIsT0FBTyxDQUFDeUM7a0JBQUksRUFDeEIsRUFBQyxHQUFHOztjQUdSLEVBQ0E7O1lBR0osT0FDQzlFLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFlLEdBQzdCeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQThGLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0wsUUFBUTtjQUFDTSxPQUFPLEVBQUV4QyxRQUFRO2NBQUVRLE9BQU8sRUFBRUE7WUFBTyxHQUNwRXRELEtBQUssQ0FBQzZCLE9BQU8sQ0FBQzBELE1BQU0sQ0FBQ0MsTUFBTSxDQUNwQixDQUNKO1VBRVIsQ0FBQztVQUFDbEUsT0FBQSxDQUFBc0IsV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BGRixJQUFBcEQsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQW9HLFFBQUEsR0FBQXBHLE9BQUE7VUFDQSxJQUFBRCxHQUFBLEdBQUFDLE9BQUE7VUFDTyxNQUFNK0IsYUFBYSxHQUFHQSxDQUFDO1lBQUVlLElBQUk7WUFBRSxHQUFHVTtVQUFLLENBQUUsS0FBSTtZQUNuRCxNQUFNNkMsSUFBSSxHQUFHLEdBQUd2RCxJQUFJLENBQUN1RCxJQUFJLEdBQUd2RCxJQUFJLENBQUN3RCxPQUFPLEdBQUcsTUFBTXhELElBQUksQ0FBQ3dELE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUV0RSxPQUNDbkcsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUE7Y0FBSXNGLEdBQUcsRUFBRXpELElBQUksQ0FBQ2tCO1lBQUUsR0FDZjdELE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNsQixHQUFBLENBQUF5RyxXQUFXO2NBQUNDLE1BQU0sRUFBQyxXQUFXO2NBQUNDLEtBQUssRUFBQyxRQUFRO2NBQUMvRSxTQUFTLEVBQUM7WUFBa0IsRUFBRyxFQUM5RXhCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO2NBQVNVLFNBQVMsRUFBQztZQUFvQixHQUN0Q3hCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLGFBQUtvRixJQUFJLENBQU0sRUFDZmxHLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFlLEdBQzdCeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ21GLFFBQUEsQ0FBQTdDLFdBQVc7Y0FBQ1QsSUFBSSxFQUFFQSxJQUFJO2NBQUEsR0FBTVU7WUFBSyxFQUFJLENBQ2pDLENBQ0csQ0FDTjtVQUVQLENBQUM7VUFBQ3ZCLE9BQUEsQ0FBQUYsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCRixJQUFBNEUsTUFBQSxHQUFBM0csT0FBQTtVQUNBLElBQUEwQyxXQUFBLEdBQUExQyxPQUFBO1VBQ0EsSUFBQTRHLFFBQUEsR0FBQTVHLE9BQUE7VUFDTSxNQUFPNkcsWUFBYSxTQUFRRixNQUFBLENBQUFHLGFBQTJCO1lBQzVELENBQUExRixLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBVixNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBcUcsVUFBVztZQUVYLENBQUF0RyxNQUFPO1lBQ1AsSUFBSXNHLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBRUEsQ0FBQTFGLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBMkYsWUFBWWhGLEtBQUs7Y0FDaEIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFaLEtBQU0sR0FBRyxJQUFJc0IsV0FBQSxDQUFBcEMsVUFBVSxFQUFFO2NBQzlCLElBQUksQ0FBQyxDQUFBYyxLQUFNLENBQUM2RixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDbkYsS0FBSyxDQUFDO2NBQ2hCLElBQUksQ0FBQyxDQUFBdkIsTUFBTyxHQUFHdUIsS0FBSyxDQUFDdkIsTUFBTTtjQUMzQixJQUFJLENBQUMsQ0FBQUMsTUFBTyxHQUFHc0IsS0FBSyxDQUFDdEIsTUFBTTtjQUMzQjBHLFVBQVUsQ0FBQ3BGLEtBQUssR0FBR0EsS0FBSztZQUN6QjtZQUVBLE1BQU1tRixJQUFJQSxDQUFDbkYsS0FBSztjQUNmLElBQUksQ0FBQyxDQUFBdEIsTUFBTyxHQUFHc0IsS0FBSyxDQUFDdEIsTUFBTTtjQUMzQixJQUFJLENBQUMsQ0FBQXFHLFVBQVcsR0FBRy9FLEtBQUssQ0FBQytFLFVBQVU7Y0FFbkMsSUFBSTtnQkFDSCxNQUFNL0UsS0FBSyxHQUErQztrQkFBRXFGLElBQUksRUFBRTtnQkFBSSxDQUFFO2dCQUN4RSxJQUFJLElBQUksQ0FBQyxDQUFBM0csTUFBTyxDQUFDNEcsS0FBSyxFQUFFdEQsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBdEQsTUFBTyxDQUFDNEcsS0FBSyxFQUFFdEQsRUFBRSxLQUFLNEMsUUFBQSxDQUFBVyxjQUFjLENBQUNGLElBQUksQ0FBQ3JELEVBQUUsRUFBRTtrQkFDaEZoQyxLQUFLLENBQUN3RixjQUFjLEdBQUcsSUFBSSxDQUFDOUcsTUFBTSxDQUFDNEcsS0FBSyxFQUFFdEQsRUFBRTs7Z0JBRzdDLE1BQU0sSUFBSSxDQUFDNUMsS0FBSyxDQUFDK0YsSUFBSSxDQUFDbkYsS0FBSyxDQUFDO2dCQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUN5RixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUFoSCxNQUFPLENBQUMsRUFBRTtrQkFDekMsSUFBSSxDQUFDLENBQUFZLEtBQU0sR0FBRyxJQUFJLENBQUNELEtBQUssQ0FBQ0MsS0FBSyxDQUFDcUcsTUFBTSxDQUFDNUUsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFBcEMsTUFBTyxDQUFDbUQsV0FBVyxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQ2pCLElBQUksQ0FBQ2tCLEVBQUUsQ0FBQyxDQUFDO2lCQUMvRixNQUFNO2tCQUNOLElBQUksQ0FBQyxDQUFBM0MsS0FBTSxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLOztnQkFHL0IsSUFBSSxDQUFDTCxLQUFLLEdBQUcsSUFBSTtlQUNqQixDQUFDLE9BQU8wRCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQy9ELEtBQUssQ0FBQzhELENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNaUQsTUFBTUEsQ0FBQzdFLElBQUk7Y0FDaEIsTUFBTUEsSUFBSSxDQUFDNkUsTUFBTSxFQUFFO1lBQ3BCOztVQUNBMUYsT0FBQSxDQUFBNEUsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdERCxJQUFBMUcsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQTRILE1BQUEsR0FBQTVILE9BQUE7VUFFTSxTQUFVZ0QsUUFBUUEsQ0FBQ2hCLEtBQUs7WUFDN0IsTUFBTSxDQUFDZSxLQUFLLEVBQUU4RSxRQUFRLENBQUMsR0FBRzFILE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLEVBQWdCO1lBQ3hELE1BQU0sQ0FBQ1AsS0FBSyxFQUFFc0gsUUFBUSxDQUFDLEdBQUczSCxNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q1osTUFBQSxDQUFBVyxPQUFLLENBQUNpSCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxRQUFRLEdBQUcsSUFBSUosTUFBQSxDQUFBZixZQUFZLENBQUM3RSxLQUFLLENBQUM7Y0FDeEM2RixRQUFRLENBQUNHLFFBQVEsQ0FBQztjQUVsQixNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztnQkFDckJILFFBQVEsQ0FBQ3RILEtBQUssS0FBSztrQkFDbEIsR0FBR0EsS0FBSztrQkFDUlksS0FBSyxFQUFFNEcsUUFBUSxDQUFDNUcsS0FBSztrQkFDckJKLEtBQUssRUFBRWdILFFBQVEsQ0FBQ2hILEtBQUs7a0JBQ3JCSyxLQUFLLEVBQUUyRyxRQUFRLENBQUMzRyxLQUFLO2tCQUNyQixHQUFHMkcsUUFBUSxDQUFDRSxhQUFhO2lCQUN6QixDQUFDLENBQUM7Y0FDSixDQUFDO2NBRURGLFFBQVEsQ0FBQ2YsRUFBRSxDQUFDLFFBQVEsRUFBRWdCLFFBQVEsQ0FBQztjQUMvQixPQUFPLE1BQUs7Z0JBQ1hELFFBQVEsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDO2NBQ2pDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FBTyxDQUFDbEYsS0FBSyxFQUFFdkMsS0FBSyxDQUFDO1VBQ3RCIiwiaWdub3JlTGlzdCI6W119