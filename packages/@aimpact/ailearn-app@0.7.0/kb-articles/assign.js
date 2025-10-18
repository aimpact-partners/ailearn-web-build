System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/ailearn-app@0.7.0/components/ui", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/list", "react@18.3.1", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/toast", "@aimpact/ailearn-app@0.7.0/model/wrapper", "@beyond-js/reactive@2.1.1/model", "@aimpact/ailearn-sdk@1.2.0/entities/sections", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, ArticleKbObjects, __beyond_pkg, hmr;
  _export("ArticleKbObjects", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_1 = _aimpactAilearnApp070ComponentsUi;
    }, function (_pragmateUi108Components) {
      dependency_2 = _pragmateUi108Components;
    }, function (_pragmateUi108List) {
      dependency_3 = _pragmateUi108List;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi108Empty) {
      dependency_5 = _pragmateUi108Empty;
    }, function (_pragmateUi108Modal) {
      dependency_6 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Toast) {
      dependency_8 = _pragmateUi108Toast;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_9 = _aimpactAilearnApp070ModelWrapper;
    }, function (_beyondJsReactive211Model) {
      dependency_10 = _beyondJsReactive211Model;
    }, function (_aimpactAilearnSdk120EntitiesSections) {
      dependency_11 = _aimpactAilearnSdk120EntitiesSections;
    }, function (_aimpactChatSdk155Session) {
      dependency_12 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0114Styles) {
      dependency_13 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/kb-articles/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/ui', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['react', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/toast', dependency_8], ['@aimpact/ailearn-app/model/wrapper', dependency_9], ['@beyond-js/reactive/model', dependency_10], ['@aimpact/ailearn-sdk/entities/sections', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/kb-articles/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 1024310178,
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
            }, error ? _react.default.createElement("div", {
              className: "pi-1"
            }, _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            })) : null, output.length ? _react.default.createElement(_list.List, {
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
        hash: 2457495986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleKbObjects = ArticleKbObjects;
          var _react = require("react");
          var _classrooms = require("./classrooms");
          var _modal = require("pragmate-ui/modal");
          var _useStore = require("./use-store");
          /*bundle*/
          function ArticleKbObjects({
            onClose,
            item,
            texts,
            action
          }) {
            console.log(0.1, item, item.owner);
            const [store, state] = (0, _useStore.useStore)({
              article: item,
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
        hash: 1270430731,
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
            const [kbObject, setkbObject] = _react.default.useState(module.kbObjects?.items.find(e => e.section?.id === item.id));
            const onClick = async event => {
              try {
                event.stopPropagation();
                setFetching(true);
                event.preventDefault();
                const kbObject = await module.kbObjects.add(item.id);
                setkbObject(kbObject);
                const replace = (str, values) => str.replace(/{(\w+)}/g, (_, key) => values[key] || `{${key}}`);
                _toast.toast.success(replace(texts.messages.assigned, {
                  classroom: module.title
                }));
              } catch (e) {
                console.error(e);
                setError(texts.errors.default);
              } finally {
                setFetching(false);
              }
            };
            if (kbObject) {
              const finalLink = `${_wrapper.settings.baseUrl}${kbObject.link}`;
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
                    href: kbObject.dashboard,
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
        hash: 2383130384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _sections = require("@aimpact/ailearn-sdk/entities/sections");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #article;
            get article() {
              return this.#article;
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
              this.#model = new _sections.Sections({});
              this.#model.on('change', this.triggerEvent);
              this.load(specs);
              this.#action = specs.action;
              this.#article = specs.article;
              globalThis.specs = specs;
            }
            async load(specs) {
              this.#article = specs.article;
              this.#associated = specs.associated;
              try {
                const specs = {
                  user: true
                };
                if (this.#article.owner?.id && this.#article.owner?.id !== _session.sessionWrapper.user.id) {
                  specs.organizationId = this.article.owner?.id;
                }
                await this.model.load(specs);
                this.#items = this.model.items;
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
        "from": "ArticleKbObjects",
        "name": "ArticleKbObjects"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ArticleKbObjects') && _export("ArticleKbObjects", ArticleKbObjects = require ? require('./index').ArticleKbObjects : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9yZWFjdCIsIl9lbXB0eSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJhdHRycyIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZUNsYXNzcm9vbSIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiQXJ0aWNsZUtiT2JqZWN0cyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwib3duZXIiLCJzdG9yZSIsInVzZVN0b3JlIiwiYXJ0aWNsZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfaWNvbnMiLCJfdG9hc3QiLCJfd3JhcHBlciIsIkl0ZW1BY3Rpb25zIiwicHJvcHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwia2JPYmplY3QiLCJzZXRrYk9iamVjdCIsImtiT2JqZWN0cyIsImZpbmQiLCJlIiwic2VjdGlvbiIsImlkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJyZXBsYWNlIiwic3RyIiwidmFsdWVzIiwiXyIsImtleSIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiYXNzaWduZWQiLCJjbGFzc3Jvb20iLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJzZXR0aW5ncyIsImJhc2VVcmwiLCJsaW5rIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcGllZCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImRhc2hib2FyZCIsIkFwcEljb25CdXR0b24iLCJib3JkZXJlZCIsInNoYXJlIiwibmF2aWdhdGUiLCJ3YXRjaEFjdGl2aXR5IiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJhc3NpZ24iLCJidXR0b24iLCJfYWN0aW9ucyIsIm5hbWUiLCJBcHBJY29uIiwiX21vZGVsIiwiX3NlY3Rpb25zIiwiX3Nlc3Npb24iLCJTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXNzb2NpYXRlZCIsImNvbnN0cnVjdG9yIiwiU2VjdGlvbnMiLCJvbiIsInRyaWdnZXJFdmVudCIsImxvYWQiLCJnbG9iYWxUaGlzIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwib3JnYW5pemF0aW9uSWQiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvL3RzL2NsYXNzcm9vbXMudHN4IiwiLy90cy9lbXB0eS50c3giLCIvL3RzL2luZGV4LnRzeCIsIi8vdHMvaXRlbS9hY3Rpb25zLnRzeCIsIi8vdHMvaXRlbS9pbmRleC50c3giLCIvL3RzL3N0b3JlLnRzIiwiLy90cy91c2Utc3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtB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RyxJQUFJLENBQUNELEtBQUssQ0FBQ0MsS0FBSztnQkFFOUIsSUFBSSxDQUFDTCxLQUFLLEdBQUcsSUFBSTtlQUNqQixDQUFDLE9BQU9tRCxDQUFDLEVBQUU7Z0JBQ1hwQixPQUFPLENBQUNuQyxLQUFLLENBQUN1RCxDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTTRELE1BQU1BLENBQUNqRixJQUFJO2NBQ2hCLE1BQU1BLElBQUksQ0FBQ2lGLE1BQU0sRUFBRTtZQUNwQjs7VUFDQTlGLE9BQUEsQ0FBQWtGLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6REQsSUFBQWhILE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFnSSxNQUFBLEdBQUFoSSxPQUFBO1VBRU0sU0FBVW1ELFFBQVFBLENBQUNuQixLQUFLO1lBQzdCLE1BQU0sQ0FBQ2tCLEtBQUssRUFBRStFLFFBQVEsQ0FBQyxHQUFHOUgsTUFBQSxDQUFBVyxPQUFLLENBQUNDLFFBQVEsRUFBZ0I7WUFDeEQsTUFBTSxDQUFDUCxLQUFLLEVBQUUwSCxRQUFRLENBQUMsR0FBRy9ILE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDWixNQUFBLENBQUFXLE9BQUssQ0FBQ3FILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLFFBQVEsR0FBRyxJQUFJSixNQUFBLENBQUFiLFlBQVksQ0FBQ25GLEtBQUssQ0FBQztjQUN4Q2lHLFFBQVEsQ0FBQ0csUUFBUSxDQUFDO2NBRWxCLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2dCQUNyQkgsUUFBUSxDQUFDMUgsS0FBSyxLQUFLO2tCQUNsQixHQUFHQSxLQUFLO2tCQUNSWSxLQUFLLEVBQUVnSCxRQUFRLENBQUNoSCxLQUFLO2tCQUNyQkosS0FBSyxFQUFFb0gsUUFBUSxDQUFDcEgsS0FBSztrQkFDckJLLEtBQUssRUFBRStHLFFBQVEsQ0FBQy9HLEtBQUs7a0JBQ3JCLEdBQUcrRyxRQUFRLENBQUNFLGFBQWE7aUJBQ3pCLENBQUMsQ0FBQztjQUNKLENBQUM7Y0FFREYsUUFBUSxDQUFDWixFQUFFLENBQUMsUUFBUSxFQUFFYSxRQUFRLENBQUM7Y0FDL0IsT0FBTyxNQUFLO2dCQUNYRCxRQUFRLENBQUNHLEdBQUcsQ0FBQyxRQUFRLEVBQUVGLFFBQVEsQ0FBQztjQUNqQyxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE9BQU8sQ0FBQ25GLEtBQUssRUFBRTFDLEtBQUssQ0FBQztVQUN0QiIsImlnbm9yZUxpc3QiOltdfQ==