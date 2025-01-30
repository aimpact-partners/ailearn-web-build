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
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/ui', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['react', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/toast', dependency_9], ['@aimpact/reactive/model', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 3645631045,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9yZWFjdCIsIl9lbXB0eSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJFbXB0eSIsImVtcHR5IiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJpdGVtIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfaWNvbnMiLCJfY29uZmlnIiwiX3RvYXN0IiwiSXRlbUFjdGlvbnMiLCJwcm9wcyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJhc3NpZ25tZW50Iiwic2V0QXNzaWdubWVudCIsImFzc2lnbm1lbnRzIiwiY2xhc3Nyb29tcyIsImdldCIsImlkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFzc2lnbmVkIiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJwYXJhbXMiLCJiYXNlVXJsIiwibGluayIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3BpZWQiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJkYXNoYm9hcmQiLCJBcHBJY29uQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiYWN0aW9ucyIsInNoYXJlIiwibmF2aWdhdGUiLCJ3YXRjaEFjdGl2aXR5IiwidGFyZ2V0IiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJhc3NpZ24iLCJidXR0b24iLCJfYWN0aW9ucyIsIm5hbWUiLCJzZWN0aW9uIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJyYXRpbyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImFzc29jaWF0ZWQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImdsb2JhbFRoaXMiLCJ1c2VyIiwib3duZXIiLCJzZXNzaW9uV3JhcHBlciIsIm9yZ2FuaXphdGlvbklkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsR0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxP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