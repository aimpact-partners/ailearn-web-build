System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.5.7/components/ui", "pragmate-ui@1.0.6/components", "pragmate-ui@1.0.6/list", "react@18.3.1", "pragmate-ui@1.0.6/empty", "pragmate-ui@1.0.6/modal", "@aimpact/ailearn-app@0.5.7/components/icons", "pragmate-ui@1.0.6/toast", "@aimpact/ailearn-app@0.5.7/model/wrapper", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
  _export("ModuleAssignments", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_1 = _aimpactAilearnApp057ComponentsUi;
    }, function (_pragmateUi106Components) {
      dependency_2 = _pragmateUi106Components;
    }, function (_pragmateUi106List) {
      dependency_3 = _pragmateUi106List;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi106Empty) {
      dependency_5 = _pragmateUi106Empty;
    }, function (_pragmateUi106Modal) {
      dependency_6 = _pragmateUi106Modal;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_pragmateUi106Toast) {
      dependency_8 = _pragmateUi106Toast;
    }, function (_aimpactAilearnApp057ModelWrapper) {
      dependency_9 = _aimpactAilearnApp057ModelWrapper;
    }, function (_beyondJsReactive211Model) {
      dependency_10 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_aimpactChatSdk155Session) {
      dependency_12 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0112Styles) {
      dependency_13 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/ui', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['react', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/toast', dependency_8], ['@aimpact/ailearn-app/model/wrapper', dependency_9], ['@beyond-js/reactive/model', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/modules/assign');
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
        hash: 225376334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = void 0;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
              const finalLink = `${_wrapper.settings.baseUrl}${assignment.link}`;
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
                    className: "item__actions"
                  }, _react.default.createElement("div", {
                    className: "item__actions--link"
                  }, _react.default.createElement("span", {
                    className: "link visiable-xs"
                  }, texts.assigned), _react.default.createElement(_icons.AppIconButton, {
                    className: "circle",
                    icon: "copy",
                    onClick: copy,
                    title: texts.actions.copy
                  })), _react.default.createElement(_icons.AppIconButton, {
                    bordered: true,
                    className: "circle",
                    icon: "frontArrow",
                    title: texts.actions.watchActivity,
                    href: finalLink
                  }))
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
        hash: 700526550,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9yZWFjdCIsIl9lbXB0eSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJhdHRycyIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZUNsYXNzcm9vbSIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJpdGVtIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfaWNvbnMiLCJfdG9hc3QiLCJfd3JhcHBlciIsIkl0ZW1BY3Rpb25zIiwicHJvcHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiYXNzaWdubWVudCIsInNldEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50cyIsImNsYXNzcm9vbXMiLCJnZXQiLCJpZCIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwicmVwbGFjZSIsInN0ciIsInZhbHVlcyIsIl8iLCJrZXkiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFzc2lnbmVkIiwiY2xhc3Nyb29tIiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJzZXR0aW5ncyIsImJhc2VVcmwiLCJsaW5rIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcGllZCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImRhc2hib2FyZCIsIkFwcEljb25CdXR0b24iLCJib3JkZXJlZCIsInNoYXJlIiwibmF2aWdhdGUiLCJ3YXRjaEFjdGl2aXR5IiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJhc3NpZ24iLCJidXR0b24iLCJfYWN0aW9ucyIsIm5hbWUiLCJzZWN0aW9uIiwiQXBwSWNvbiIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImFzc29jaWF0ZWQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImdsb2JhbFRoaXMiLCJ1c2VyIiwib3duZXIiLCJzZXNzaW9uV3JhcHBlciIsIm9yZ2FuaXphdGlvbklkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvL3RzL2NsYXNzcm9vbXMudHN4IiwiLy90cy9lbXB0eS50c3giLCIvL3RzL2luZGV4LnRzeCIsIi8vdHMvaXRlbS9hY3Rpb25zLnRzeCIsIi8vdHMvaXRlbS9pbmRleC50c3giLCIvL3RzL3N0b3JlLnRzIiwiLy90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtB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