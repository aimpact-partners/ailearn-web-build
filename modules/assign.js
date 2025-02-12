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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 992692129,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("h5", {
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
            }) : _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/management",
              className: "grow btn btn-primary"
            }, texts.actions.createClassroom)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9yZWFjdCIsIl9lbXB0eSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsIkVtcHR5Q2FyZCIsInRleHQiLCJlbXB0eSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZUNsYXNzcm9vbSIsImV4cG9ydHMiLCJFbXB0eSIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJpdGVtIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfaWNvbnMiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJwcm9wcyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImlkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFzc2lnbmVkIiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3BpZWQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJkYXNoYm9hcmQiLCJBcHBJY29uQnV0dG9uIiwiYm9yZGVyZWQiLCJzaGFyZSIsIm5hdmlnYXRlIiwid2F0Y2hBY3Rpdml0eSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsb2FkaW5nIiwiYXNzaWduIiwiYnV0dG9uIiwiX2FjdGlvbnMiLCJuYW1lIiwic2VjdGlvbiIsImtleSIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwicmF0aW8iLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwidXNlciIsIm93bmVyIiwic2Vzc2lvbldyYXBwZXIiLCJvcmdhbml6YXRpb25JZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiZGVsZXRlIiwiX3N0b3JlIiwic2V0U3RvcmUiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImluc3RhbmNlIiwib25DaGFuZ2UiLCJnZXRQcm9wZXJ0aWVzIiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL2NsYXNzcm9vbXMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy9pdGVtL2luZGV4LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLEtBQUEsR0FBQUwsT0FBQTtVQUlPLE1BQU1NLFVBQVUsR0FBR0EsQ0FBQztZQUFFQyxPQUFPO1lBQUVDLEtBQUs7WUFBRUMsTUFBTTtZQUFFQyxNQUFNO1lBQUVDO1VBQUssQ0FBRSxLQUFJO1lBQ3ZFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1YsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxFQUFFLE9BQU9iLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNoQixXQUFBLENBQUFpQixPQUFPO2NBQUNDLE1BQU07WUFBQSxFQUFHO1lBRTNDLElBQUlYLEtBQUssQ0FBQ1ksS0FBSyxFQUFFQyxLQUFLLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUUsT0FBT25CLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNiLE1BQUEsQ0FBQW1CLFNBQVM7Y0FBQ1osS0FBSyxFQUFFQTtZQUFLLEVBQUk7WUFDdkUsTUFBTWEsTUFBTSxHQUFHaEIsS0FBSyxDQUFDYSxLQUFLO1lBRTFCLE9BQ0NsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFBZCxNQUFBLENBQUFXLE9BQUEsQ0FBQVcsUUFBQSxRQUNDdEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsaUJBQ0NkLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLGFBQUtOLEtBQUssQ0FBQ2UsS0FBSyxDQUFNLEVBQ3RCdkIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUE7Y0FBSVUsU0FBUyxFQUFDO1lBQWEsR0FDekJoQixLQUFLLENBQUNELE1BQU0sRSxNQUFJQSxNQUFNLENBQUNnQixLQUFLLENBQ3pCLENBQ0csRUFFVHZCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFrQixHQUNoQ3hCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNsQixHQUFBLENBQUE2QixhQUFhO2NBQUNoQixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM5QlksTUFBTSxDQUFDRixNQUFNLEdBQ2JuQixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFDZixLQUFBLENBQUEyQixJQUFJO2NBQ0pGLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0JOLEtBQUssRUFBRUcsTUFBTTtjQUNiTSxPQUFPLEVBQUV6QixLQUFBLENBQUEwQixhQUFhO2NBQ3RCQyxLQUFLLEVBQUU7Z0JBQUV0QixNQUFNO2dCQUFFQyxLQUFLO2dCQUFFSixPQUFPO2dCQUFFTSxRQUFRO2dCQUFFSjtjQUFNO1lBQUUsRUFDbEQsR0FFRk4sTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQWtDLFNBQVM7Y0FBQ0MsSUFBSSxFQUFFdkIsS0FBSyxDQUFDd0IsS0FBSyxDQUFDVCxLQUFLO2NBQUVVLFdBQVcsRUFBRXpCLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ0MsV0FBVztjQUFFQyxJQUFJLEVBQUM7WUFBTSxHQUNwRmxDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO2NBQUtVLFNBQVMsRUFBQztZQUFvQyxHQUNsRHhCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNoQixXQUFBLENBQUFxQyxJQUFJO2NBQUNDLElBQUksRUFBQyx3QkFBd0I7Y0FBQ1osU0FBUyxFQUFDO1lBQXNCLEdBQ2xFaEIsS0FBSyxDQUFDNkIsT0FBTyxDQUFDQyxlQUFlLENBQ3hCLENBQ0YsQ0FFUCxDQUNJLENBQ0o7VUFFTCxDQUFDO1VBQUNDLE9BQUEsQ0FBQXBDLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0YsSUFBQUgsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBRUEsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVXVCLFNBQVNBLENBQUM7WUFBRVo7VUFBSyxDQUFFO1lBQ2xDLE9BQ0NSLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLGNBQ0NkLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLENBQUNiLE1BQUEsQ0FBQXVDLEtBQUssUUFDTHhDLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBLGFBQUtOLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ1QsS0FBSyxDQUFNLEVBQzVCdkIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsWUFBSU4sS0FBSyxDQUFDd0IsS0FBSyxDQUFDQyxXQUFXLENBQUssRUFDaENqQyxNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQTtjQUFLVSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJ4QixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFDaEIsV0FBQSxDQUFBcUMsSUFBSTtjQUFDQyxJQUFJLEVBQUMsd0JBQXdCO2NBQUNaLFNBQVMsRUFBQztZQUE4QixHQUMxRWhCLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQzFCLE1BQU0sQ0FDYixDQUNGLENBQ0MsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBTixNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBNEMsV0FBQSxHQUFBNUMsT0FBQTtVQUNBLElBQUE2QyxNQUFBLEdBQUE3QyxPQUFBO1VBQ0EsSUFBQThDLFNBQUEsR0FBQTlDLE9BQUE7VUFFTztVQUFVLFNBQVUrQyxpQkFBaUJBLENBQUM7WUFBRXhDLE9BQU87WUFBRXlDLElBQUk7WUFBRXJDLEtBQUs7WUFBRUY7VUFBTSxDQUFFO1lBQzVFLE1BQU0sQ0FBQ3dDLEtBQUssRUFBRXpDLEtBQUssQ0FBQyxHQUFHLElBQUFzQyxTQUFBLENBQUFJLFFBQVEsRUFBQztjQUFFeEMsTUFBTSxFQUFFc0MsSUFBSTtjQUFFdkM7WUFBTSxDQUFFLENBQUM7WUFFekQsT0FDQ04sTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQU0sS0FBSztjQUFDQyxJQUFJO2NBQUM3QyxPQUFPLEVBQUVBLE9BQU87Y0FBRThDLGFBQWEsRUFBRSxLQUFLO2NBQUUxQixTQUFTLEVBQUM7WUFBbUIsR0FDaEZ4QixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFDMkIsV0FBQSxDQUFBdEMsVUFBVTtjQUFDQyxPQUFPLEVBQUVBLE9BQU87Y0FBRUMsS0FBSyxFQUFFQSxLQUFLO2NBQUVFLE1BQU0sRUFBRXNDLElBQUk7Y0FBRXZDLE1BQU0sRUFBRUEsTUFBTTtjQUFFRSxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUNuRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUEyQyxNQUFBLEdBQUF0RCxPQUFBO1VBQ0EsSUFBQXVELE9BQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBd0QsTUFBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUVPLE1BQU15RCxXQUFXLEdBQUdDLEtBQUssSUFBRztZQUNsQyxNQUFNO2NBQUU3QyxRQUFRO2NBQUVGLEtBQUs7Y0FBRUQsTUFBTTtjQUFFc0MsSUFBSTtjQUFFdkM7WUFBTSxDQUFFLEdBQUdpRCxLQUFLO1lBQ3ZELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3pELE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU0sQ0FBQzhDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUczRCxNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDTCxNQUFNLENBQUNxRCxXQUFXLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDakIsSUFBSSxDQUFDa0IsRUFBRSxDQUFDLENBQUM7WUFFOUYsTUFBTUMsT0FBTyxHQUFHLE1BQU1DLEtBQUssSUFBRztjQUM3QixJQUFJO2dCQUNIQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtnQkFDdkJULFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCUSxLQUFLLENBQUNFLGNBQWMsRUFBRTtnQkFFdEIsTUFBTVQsVUFBVSxHQUFHLE1BQU1uRCxNQUFNLENBQUNxRCxXQUFXLENBQUNRLEdBQUcsQ0FBQ3ZCLElBQUksQ0FBQ2tCLEVBQUUsQ0FBQztnQkFDeERKLGFBQWEsQ0FBQ0QsVUFBVSxDQUFDO2dCQUN6QkQsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDbEJKLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDOUQsS0FBSyxDQUFDK0QsUUFBUSxDQUFDQyxRQUFRLENBQUM7ZUFDdEMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ2pFLEtBQUssQ0FBQ2dFLENBQUMsQ0FBQztnQkFDaEIvRCxRQUFRLENBQUNGLEtBQUssQ0FBQ21FLE1BQU0sQ0FBQ2hFLE9BQU8sQ0FBQzs7WUFFaEMsQ0FBQztZQUVELElBQUkrQyxVQUFVLEVBQUU7Y0FDZixNQUFNa0IsU0FBUyxHQUFHLEdBQUd4QixPQUFBLENBQUF6QyxPQUFNLENBQUNrRSxNQUFNLENBQUNDLE9BQU8sR0FBR3BCLFVBQVUsQ0FBQ3FCLElBQUksRUFBRTtjQUM5RCxNQUFNQyxJQUFJLEdBQUdmLEtBQUssSUFBRztnQkFDcEJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN2QmUsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1AsU0FBUyxDQUFDO2dCQUN4Q3ZCLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDOUQsS0FBSyxDQUFDK0QsUUFBUSxDQUFDYSxNQUFNLENBQUM7Y0FDckMsQ0FBQztjQUVELE9BQ0NwRixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFDaEIsV0FBQSxDQUFBdUYsb0JBQW9CO2dCQUNwQkMsU0FBUyxFQUFFaEYsTUFBTTtnQkFDakJpRixPQUFPLEVBQUU7a0JBQ1JDLFNBQVMsRUFDUnhGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO29CQUFLVSxTQUFTLEVBQUM7a0JBQXdELEdBQ3RFeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ3FDLE1BQUEsQ0FBQXNDLGFBQWE7b0JBQ2JDLFFBQVE7b0JBQ1JsRSxTQUFTLEVBQUMsUUFBUTtvQkFDbEJVLElBQUksRUFBQyxZQUFZO29CQUNqQkUsSUFBSSxFQUFFc0IsVUFBVSxDQUFDOEIsU0FBUztvQkFDMUJqRSxLQUFLLEVBQUVmLEtBQUssQ0FBQzZCLE9BQU8sQ0FBQ3NEO2tCQUFLLEVBQ3pCLENBRUg7a0JBQ0RDLFFBQVEsRUFDUDVGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBRyxhQUFBO29CQUFLVSxTQUFTLEVBQUM7a0JBQXdELEdBQ3RFeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ3FDLE1BQUEsQ0FBQXNDLGFBQWE7b0JBQ2JDLFFBQVE7b0JBQ1JsRSxTQUFTLEVBQUMsUUFBUTtvQkFDbEJVLElBQUksRUFBQyxZQUFZO29CQUNqQlgsS0FBSyxFQUFFZixLQUFLLENBQUM2QixPQUFPLENBQUN3RCxhQUFhO29CQUNsQ3pELElBQUksRUFBRXdDO2tCQUFTLEVBQ2QsQ0FFSDtrQkFDRGUsS0FBSyxFQUNKM0YsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUE7b0JBQUtVLFNBQVMsRUFBQztrQkFBd0QsR0FDdEV4QixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQTtvQkFBTVUsU0FBUyxFQUFDO2tCQUFNLEdBQUVrQyxVQUFVLENBQUM4QixTQUFTLENBQVEsRUFDcER4RixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFDcUMsTUFBQSxDQUFBc0MsYUFBYTtvQkFDYmpFLFNBQVMsRUFBQyxRQUFRO29CQUNsQlUsSUFBSSxFQUFDLE9BQU87b0JBQ1o4QixPQUFPLEVBQUVnQixJQUFJO29CQUNiekQsS0FBSyxFQUFFZixLQUFLLENBQUM2QixPQUFPLENBQUMyQztrQkFBSSxFQUN4QixFQUFDLEdBQUc7O2NBR1IsRUFDQTs7WUFHSixPQUNDaEYsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQWUsR0FDN0J4QixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFDaEIsV0FBQSxDQUFBZ0csTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDTCxRQUFRO2NBQUNNLE9BQU8sRUFBRXhDLFFBQVE7Y0FBRVEsT0FBTyxFQUFFQTtZQUFPLEdBQ3BFeEQsS0FBSyxDQUFDNkIsT0FBTyxDQUFDNEQsTUFBTSxDQUFDQyxNQUFNLENBQ3BCLENBQ0o7VUFFUixDQUFDO1VBQUMzRCxPQUFBLENBQUFlLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRkYsSUFBQXRELE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFzRyxRQUFBLEdBQUF0RyxPQUFBO1VBQ0EsSUFBQUQsR0FBQSxHQUFBQyxPQUFBO1VBQ08sTUFBTStCLGFBQWEsR0FBR0EsQ0FBQztZQUFFaUIsSUFBSTtZQUFFLEdBQUdVO1VBQUssQ0FBRSxLQUFJO1lBQ25ELE1BQU02QyxJQUFJLEdBQUcsR0FBR3ZELElBQUksQ0FBQ3VELElBQUksR0FBR3ZELElBQUksQ0FBQ3dELE9BQU8sR0FBRyxNQUFNeEQsSUFBSSxDQUFDd0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRXRFLE9BQ0NyRyxNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQTtjQUFJd0YsR0FBRyxFQUFFekQsSUFBSSxDQUFDa0I7WUFBRSxHQUNmL0QsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsQ0FBQ2xCLEdBQUEsQ0FBQTJHLFdBQVc7Y0FBQ0MsTUFBTSxFQUFDLFdBQVc7Y0FBQ0MsS0FBSyxFQUFDLFFBQVE7Y0FBQ2pGLFNBQVMsRUFBQztZQUFrQixFQUFHLEVBQzlFeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUE7Y0FBU1UsU0FBUyxFQUFDO1lBQW9CLEdBQ3RDeEIsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUEsYUFBS3NGLElBQUksQ0FBTSxFQUNmcEcsTUFBQSxDQUFBVyxPQUFBLENBQUFHLGFBQUE7Y0FBS1UsU0FBUyxFQUFDO1lBQWUsR0FDN0J4QixNQUFBLENBQUFXLE9BQUEsQ0FBQUcsYUFBQSxDQUFDcUYsUUFBQSxDQUFBN0MsV0FBVztjQUFDVCxJQUFJLEVBQUVBLElBQUk7Y0FBQSxHQUFNVTtZQUFLLEVBQUksQ0FDakMsQ0FDRyxDQUNOO1VBRVAsQ0FBQztVQUFDaEIsT0FBQSxDQUFBWCxhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJGLElBQUE4RSxNQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQTRDLFdBQUEsR0FBQTVDLE9BQUE7VUFDQSxJQUFBOEcsUUFBQSxHQUFBOUcsT0FBQTtVQUNNLE1BQU8rRyxZQUFhLFNBQVFGLE1BQUEsQ0FBQUcsYUFBMkI7WUFDNUQsQ0FBQTVGLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFWLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUF1RyxVQUFXO1lBRVgsQ0FBQXhHLE1BQU87WUFDUCxJQUFJd0csVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBNUYsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0E2RixZQUFZbEYsS0FBSztjQUNoQixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQVosS0FBTSxHQUFHLElBQUl3QixXQUFBLENBQUF0QyxVQUFVLEVBQUU7Y0FDOUIsSUFBSSxDQUFDLENBQUFjLEtBQU0sQ0FBQytGLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDQyxJQUFJLENBQUNyRixLQUFLLENBQUM7Y0FDaEIsSUFBSSxDQUFDLENBQUF2QixNQUFPLEdBQUd1QixLQUFLLENBQUN2QixNQUFNO2NBQzNCLElBQUksQ0FBQyxDQUFBQyxNQUFPLEdBQUdzQixLQUFLLENBQUN0QixNQUFNO2NBQzNCNEcsVUFBVSxDQUFDdEYsS0FBSyxHQUFHQSxLQUFLO1lBQ3pCO1lBRUEsTUFBTXFGLElBQUlBLENBQUNyRixLQUFLO2NBQ2YsSUFBSSxDQUFDLENBQUF0QixNQUFPLEdBQUdzQixLQUFLLENBQUN0QixNQUFNO2NBQzNCLElBQUksQ0FBQyxDQUFBdUcsVUFBVyxHQUFHakYsS0FBSyxDQUFDaUYsVUFBVTtjQUVuQyxJQUFJO2dCQUNILE1BQU1qRixLQUFLLEdBQStDO2tCQUFFdUYsSUFBSSxFQUFFO2dCQUFJLENBQUU7Z0JBQ3hFLElBQUksSUFBSSxDQUFDLENBQUE3RyxNQUFPLENBQUM4RyxLQUFLLEVBQUV0RCxFQUFFLElBQUksSUFBSSxDQUFDLENBQUF4RCxNQUFPLENBQUM4RyxLQUFLLEVBQUV0RCxFQUFFLEtBQUs0QyxRQUFBLENBQUFXLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDckQsRUFBRSxFQUFFO2tCQUNoRmxDLEtBQUssQ0FBQzBGLGNBQWMsR0FBRyxJQUFJLENBQUNoSCxNQUFNLENBQUM4RyxLQUFLLEVBQUV0RCxFQUFFOztnQkFHN0MsTUFBTSxJQUFJLENBQUM5QyxLQUFLLENBQUNpRyxJQUFJLENBQUNyRixLQUFLLENBQUM7Z0JBRTVCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzJGLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQWxILE1BQU8sQ0FBQyxFQUFFO2tCQUN6QyxJQUFJLENBQUMsQ0FBQVksS0FBTSxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLENBQUN1RyxNQUFNLENBQUM1RSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUF0QyxNQUFPLENBQUNxRCxXQUFXLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDakIsSUFBSSxDQUFDa0IsRUFBRSxDQUFDLENBQUM7aUJBQy9GLE1BQU07a0JBQ04sSUFBSSxDQUFDLENBQUE3QyxLQUFNLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNDLEtBQUs7O2dCQUcvQixJQUFJLENBQUNMLEtBQUssR0FBRyxJQUFJO2VBQ2pCLENBQUMsT0FBTzRELENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDakUsS0FBSyxDQUFDZ0UsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1pRCxNQUFNQSxDQUFDN0UsSUFBSTtjQUNoQixNQUFNQSxJQUFJLENBQUM2RSxNQUFNLEVBQUU7WUFDcEI7O1VBQ0FuRixPQUFBLENBQUFxRSxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RELElBQUE1RyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBOEgsTUFBQSxHQUFBOUgsT0FBQTtVQUVNLFNBQVVrRCxRQUFRQSxDQUFDbEIsS0FBSztZQUM3QixNQUFNLENBQUNpQixLQUFLLEVBQUU4RSxRQUFRLENBQUMsR0FBRzVILE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLEVBQWdCO1lBQ3hELE1BQU0sQ0FBQ1AsS0FBSyxFQUFFd0gsUUFBUSxDQUFDLEdBQUc3SCxNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q1osTUFBQSxDQUFBVyxPQUFLLENBQUNtSCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxRQUFRLEdBQUcsSUFBSUosTUFBQSxDQUFBZixZQUFZLENBQUMvRSxLQUFLLENBQUM7Y0FDeEMrRixRQUFRLENBQUNHLFFBQVEsQ0FBQztjQUVsQixNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztnQkFDckJILFFBQVEsQ0FBQ3hILEtBQUssS0FBSztrQkFDbEIsR0FBR0EsS0FBSztrQkFDUlksS0FBSyxFQUFFOEcsUUFBUSxDQUFDOUcsS0FBSztrQkFDckJKLEtBQUssRUFBRWtILFFBQVEsQ0FBQ2xILEtBQUs7a0JBQ3JCSyxLQUFLLEVBQUU2RyxRQUFRLENBQUM3RyxLQUFLO2tCQUNyQixHQUFHNkcsUUFBUSxDQUFDRSxhQUFhO2lCQUN6QixDQUFDLENBQUM7Y0FDSixDQUFDO2NBRURGLFFBQVEsQ0FBQ2YsRUFBRSxDQUFDLFFBQVEsRUFBRWdCLFFBQVEsQ0FBQztjQUMvQixPQUFPLE1BQUs7Z0JBQ1hELFFBQVEsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDO2NBQ2pDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FBTyxDQUFDbEYsS0FBSyxFQUFFekMsS0FBSyxDQUFDO1VBQ3RCIiwiaWdub3JlTGlzdCI6W119