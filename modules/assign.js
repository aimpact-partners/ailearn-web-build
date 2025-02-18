System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/list", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/config", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/reactive@0.0.1/model", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@aimpact/chat-sdk@1.4.1/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/ui', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['react', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/toast', dependency_9], ['@aimpact/reactive/model', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11], ['@aimpact/chat-sdk/session', dependency_12]]);
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
        hash: 348826222,
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
        hash: 2206731569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomItem = void 0;
          var _react = require("react");
          var _actions = require("./actions");
          const ClassroomItem = ({
            item,
            ...props
          }) => {
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            return _react.default.createElement("li", {
              key: item.id
            }, _react.default.createElement("section", {
              className: "list-item__content"
            }, _react.default.createElement("h4", null, name), _react.default.createElement(_actions.ItemActions, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9yZWFjdCIsIl9lbXB0eSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJhdHRycyIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZUNsYXNzcm9vbSIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJpdGVtIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfaWNvbnMiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJwcm9wcyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImlkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJyZXBsYWNlIiwic3RyIiwidmFsdWVzIiwiXyIsImtleSIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiYXNzaWduZWQiLCJjbGFzc3Jvb20iLCJlIiwiY29uc29sZSIsImVycm9ycyIsImZpbmFsTGluayIsInBhcmFtcyIsImJhc2VVcmwiLCJsaW5rIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcGllZCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImRhc2hib2FyZCIsIkFwcEljb25CdXR0b24iLCJib3JkZXJlZCIsInNoYXJlIiwibmF2aWdhdGUiLCJ3YXRjaEFjdGl2aXR5IiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJhc3NpZ24iLCJidXR0b24iLCJfYWN0aW9ucyIsIm5hbWUiLCJzZWN0aW9uIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkIiwiZ2xvYmFsVGhpcyIsInVzZXIiLCJvd25lciIsInNlc3Npb25XcmFwcGVyIiwib3JnYW5pemF0aW9uSWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImRlbGV0ZSIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlIiwiZ2V0UHJvcGVydGllcyIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvaXRlbS9pbmRleC50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsR0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFB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