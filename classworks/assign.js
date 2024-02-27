System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/modal", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/toast", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_beyondJsReactive1111Model) {
      dependency_8 = _beyondJsReactive1111Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Styles) {
      dependency_10 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 21187114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiQ2xhc3Nyb29tcyIsInN0YXRlIiwibW9kdWxlIiwidGV4dHMiLCJyZWFkeSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiTGlzdCIsIml0ZW1zIiwibW9kZWwiLCJjb250cm9sIiwiQ2xhc3Nyb29tSXRlbSIsInNwZWNzIiwiZXhwb3J0cyIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiU2hhcmVMZXNzb24iLCJvbkNsb3NlIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImFzc2lnbiIsIl9jb25maWciLCJfdG9hc3QiLCJkYXRhIiwiaXRlbSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsImFzc2lnbm1lbnRVUkwiLCJzZXRBc3NpZ25tZW50VVJMIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uIiwiYWRkU2Vzc2lvbiIsImlkIiwicGFyYW1zIiwiYmFzZVVybCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJuYW1lIiwic2VjdGlvbiIsImxpbmsiLCJzZXNzaW9uc01hcCIsImhhcyIsImdldCIsInVybCIsInVuZGVmaW5lZCIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjb3BpZWQiLCJrZXkiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsImJvcmRlcmVkIiwibG9hZGluZyIsImFjdGlvbnMiLCJfbW9kZWwiLCJfY29yZSIsIlN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwcm9wZXJ0aWVzIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJsb2FkIiwiZ2xvYmFsVGhpcyIsImMiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFPTyxNQUFNSSxVQUFVLEdBQUdBLENBQUM7WUFBRUMsS0FBSztZQUFFQyxNQUFNO1lBQUVDO1VBQUssQ0FBRSxLQUFJO1lBQ3RELElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxLQUFLLEVBQUU7Y0FDakIsT0FBT1QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1QsV0FBQSxDQUFBVSxPQUFPO2dCQUFDQyxNQUFNO2NBQUEsRUFBRzs7WUFHMUIsT0FDQ2IsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWMsR0FDNUJkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtILEtBQUssQ0FBQ08sS0FBSyxDQUFNLEVBQ3RCZixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBa0IsR0FDaENkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNQLEtBQUEsQ0FBQVksSUFBSTtjQUNKRixTQUFTLEVBQUMsaUJBQWlCO2NBQzNCRyxLQUFLLEVBQUVYLEtBQUssQ0FBQ1ksS0FBSyxDQUFDRCxL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