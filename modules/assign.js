System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/modal", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.27/config", "pragmate-ui@0.0.6/toast", "@beyond-js/reactive@1.1.11/model", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, ShareLearningModule, __beyond_pkg, hmr;
  _export("ShareLearningModule", void 0);
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
    }, function (_aimpactAilearnApp0027Config) {
      dependency_6 = _aimpactAilearnApp0027Config;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['pragmate-ui/modal', dependency_4], ['@aimpact/chat/shared/components', dependency_5], ['@aimpact/ailearn-app/config', dependency_6], ['pragmate-ui/toast', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['@beyond-js/kernel/styles', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/modules/assign');
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
        hash: 1628617297,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShareLearningModule = ShareLearningModule;
          var _react = require("react");
          var _classrooms = require("./classrooms");
          var _modal = require("pragmate-ui/modal");
          var _useStore = require("./use-store");
          /*bundle*/
          function ShareLearningModule({
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
        "from": "ShareLearningModule",
        "name": "ShareLearningModule"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ShareLearningModule') && _export("ShareLearningModule", ShareLearningModule = require ? require('./index').ShareLearningModule : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfaXRlbSIsIl9saXN0IiwiQ2xhc3Nyb29tcyIsInN0YXRlIiwibW9kdWxlIiwidGV4dHMiLCJyZWFkeSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiTGlzdCIsIml0ZW1zIiwibW9kZWwiLCJjb250cm9sIiwiQ2xhc3Nyb29tSXRlbSIsInNwZWNzIiwiZXhwb3J0cyIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiU2hhcmVMZWFybmluZ01vZHVsZSIsIm9uQ2xvc2UiLCJzdG9yZSIsInVzZVN0b3JlIiwiTW9kYWwiLCJzaG93IiwiYXNzaWduIiwiX2NvbmZpZyIsIl90b2FzdCIsImRhdGEiLCJpdGVtIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiYXNzaWdubWVudFVSTCIsInNldEFzc2lnbm1lbnRVUkwiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb24iLCJhZGRTZXNzaW9uIiwiaWQiLCJwYXJhbXMiLCJiYXNlVXJsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJzZWN0aW9uIiwibGluayIsInNlc3Npb25zTWFwIiwiaGFzIiwiZ2V0IiwidXJsIiwidW5kZWZpbmVkIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImNvcGllZCIsImtleSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwiYm9yZGVyZWQiLCJsb2FkaW5nIiwiYWN0aW9ucyIsIl9tb2RlbCIsIl9jb3JlIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInByb3BlcnRpZXMiLCJhc3NvY2lhdGVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwiYyIsImRlbGV0ZSIsIl9zdG9yZSIsInNldFN0b3JlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnN0YW5jZSIsIm9uQ2hhbmdlIiwiZ2V0UHJvcGVydGllcyIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQU9PLE1BQU1JLFVBQVUsR0FBR0EsQ0FBQztZQUFFQyxLQUFLO1lBQUVDLE1BQU07WUFBRUM7VUFBSyxDQUFFLEtBQUk7WUFDdEQsSUFBSSxDQUFDRixLQUFLLENBQUNHLEtBQUssRUFBRTtjQUNqQixPQUFPVCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVCxXQUFBLENBQUFVLE9BQU87Z0JBQUNDLE1BQU07Y0FBQSxFQUFHOztZQUcxQixPQUNDYixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYyxHQUM1QmQsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsYUFBS0gsS0FBSyxDQUFDTyxLQUFLLENBQU0sRUFDdEJmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFrQixHQUNoQ2QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsS0FBQSxDQUFBWSxJQUFJO2NBQ0pGLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0JHLEtBQUssRUFBRVgsS0FBSyxDQUFDWSxLQUFL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