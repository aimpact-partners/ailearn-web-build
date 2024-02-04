System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/modal", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/toast", "@beyond-js/reactive@1.1.9/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, ShareLesson, __beyond_pkg, hmr;
  _export("ShareLesson", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi006Components) {
      dependency_2 = _pragmateUi006Components;
    }, function (_pragmateUi006List) {
      dependency_3 = _pragmateUi006List;
    }, function (_pragmateUi006Modal) {
      dependency_4 = _pragmateUi006Modal;
    }, function (_aimpactChat101SharedComponents) {
      dependency_5 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_6 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Toast) {
      dependency_7 = _pragmateUi006Toast;
    }, function (_beyondJsReactive119Model) {
      dependency_8 = _beyondJsReactive119Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Styles) {
      dependency_10 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/classworks/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['pragmate-ui/modal', dependency_4], ['@aimpact/chat/shared/components', dependency_5], ['@aimpact/ailearn-app/config', dependency_6], ['pragmate-ui/toast', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['@beyond-js/kernel/styles', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/classworks/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 1246712182,
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
          const Classrooms = ({
            state,
            module,
            texts
          }) => {
            if (!state.ready) {
              return _react.default.createElement(_components.Spinner, {
                active: true
              });
            }
            console.log(21, state.model, state.model?.items);
            return _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement("h3", null, texts.title), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement(_list.List, {
              className: "classroom__list",
              items: state.model.items,
              control: _item.ClassroomItem,
              specs: {
                module,
                texts
              }
            })));
          };
          exports.Classrooms = Classrooms;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2570657777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShareLesson = ShareLesson;
          var _react = require("react");
          var _classrooms = require("./classrooms");
          var _modal = require("pragmate-ui/modal");
          var _useStore = require("./use-store");
          /*bundle*/
          function ShareLesson({
            onClose,
            module,
            texts
          }) {
            const [store, state] = (0, _useStore.useStore)({
              module
            });
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement(_classrooms.Classrooms, {
              state: state,
              module: module,
              texts: texts.assign
            })));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 3631335313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomItem = void 0;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _toast = require("pragmate-ui/toast");
          const ClassroomItem = ({
            data: item,
            specs: {
              texts,
              module
            }
          }) => {
            const [fetching, setFetching] = _react.default.useState(false);
            const [assignmentURL, setAssignmentURL] = _react.default.useState(null);
            const onClick = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const session = await module.addSession(item.id);
                setFetching(false);
                setAssignmentURL(`${_config.default.params.baseUrl}/assignments/${session.id}`);
              } catch (e) {
                console.error(e);
              }
            };
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            let link = assignmentURL;
            if (!assignmentURL) {
              link = module.sessionsMap.has(item.id) ? module.sessionsMap.get(item.id).url : undefined;
            }
            const copy = () => {
              navigator.clipboard.writeText(link);
              _toast.toast.success(texts.copied);
            };
            return _react.default.createElement("li", {
              key: item.id
            }, name, _react.default.createElement("div", {
              className: "item__actions"
            }, link ? _react.default.createElement(_components.Button, {
              variant: "secondary",
              icon: "copy-link",
              onClick: copy
            }, texts.copy) : _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              loading: fetching,
              onClick: onClick
            }, texts.actions.assign)));
          };
          exports.ClassroomItem = ClassroomItem;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3185825012,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          class StoreManager extends _model.ReactiveModel {
            #items;
            get items() {
              return this.model.items;
            }
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
              globalThis.c = this;
              try {
                await this.model.load();
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
        hash: 2441126484,
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
        "from": "ShareLesson",
        "name": "ShareLesson"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ShareLesson') && _export("ShareLesson", ShareLesson = require ? require('./index').ShareLesson : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiQ2xhc3Nyb29tcyIsInN0YXRlIiwibW9kdWxlIiwidGV4dHMiLCJyZWFkeSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJtb2RlbCIsIml0ZW1zIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJfY2xhc3Nyb29tcyIsIl9tb2RhbCIsIl91c2VTdG9yZSIsIlNoYXJlTGVzc29uIiwib25DbG9zZSIsInN0b3JlIiwidXNlU3RvcmUiLCJNb2RhbCIsInNob3ciLCJhc3NpZ24iLCJfY29uZmlnIiwiX3RvYXN0IiwiZGF0YSIsIml0ZW0iLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJhc3NpZ25tZW50VVJMIiwic2V0QXNzaWdubWVudFVSTCIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbiIsImFkZFNlc3Npb24iLCJpZCIsInBhcmFtcyIsImJhc2VVcmwiLCJlIiwiZXJyb3IiLCJuYW1lIiwic2VjdGlvbiIsImxpbmsiLCJzZXNzaW9uc01hcCIsImhhcyIsImdldCIsInVybCIsInVuZGVmaW5lZCIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjb3BpZWQiLCJrZXkiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsImJvcmRlcmVkIiwibG9hZGluZyIsImFjdGlvbnMiLCJfbW9kZWwiLCJfY29yZSIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkIiwiZ2xvYmFsVGhpcyIsImMiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFPTyxNQUFNSSxVQUFVLEdBQUdBLENBQUM7WUFBRUMsS0FBSztZQUFFQyxNQUFNO1lBQUVDO1VBQUssQ0FBRSxLQUFJO1lBQ3RELElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxLQUFLLEVBQUU7Y0FDakIsT0FBT1QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1QsV0FBQSxDQUFBVSxPQUFPO2dCQUFDQyxNQUFNO2NBQUEsRUFBRzs7WUFHMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRVQsS0FBSyxDQUFDVSxLQUFLLEVBQUVWLEtBQUssQ0FBQ1UsS0FBSyxFQUFFQyxLQUFLLENBQUM7WUFDaEQsT0FDQ2pCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtPLFNBQVMsRUFBQztZQUFjLEdBQzVCbEIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsYUFBS0gsS0FBSyxDQUFDVyxLQUFLLENBQU0sRUFDdEJuQixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTyxTQUFTLEVBQUM7WUFBa0IsR0FDaENsQixNQUFBLENBQUFV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