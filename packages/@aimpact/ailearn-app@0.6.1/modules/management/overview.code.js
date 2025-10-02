System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.6.1/components/icons", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/chips", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.6.1/components/cover-image.code", "@aimpact/ailearn-app@0.6.1/main-layout.widget"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Header, ModuleOverview, __beyond_pkg, hmr;
  _export({
    Header: void 0,
    ModuleOverview: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Empty) {
      dependency_3 = _pragmateUi108Empty;
    }, function (_pragmateUi108Components) {
      dependency_4 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_5 = _aimpactAilearnApp061ComponentsUi;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi108Form) {
      dependency_7 = _pragmateUi108Form;
    }, function (_pragmateUi108List) {
      dependency_8 = _pragmateUi108List;
    }, function (_pragmateUi108Modal) {
      dependency_9 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_beyondJsKernel0114Routing) {
      dependency_11 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Icons) {
      dependency_12 = _pragmateUi108Icons;
    }, function (_pragmateUi108Toast) {
      dependency_13 = _pragmateUi108Toast;
    }, function (_pragmateUi108Chips) {
      dependency_14 = _pragmateUi108Chips;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_15 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp061ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp061ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp061MainLayoutWidget) {
      dependency_17 = _aimpactAilearnApp061MainLayoutWidget;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/modules/management/overview",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['framer-motion', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/chips', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@aimpact/ailearn-app/main-layout.widget', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/modules/management/overview.code');
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./activities/empty
      **********************************/
      ims.set('./activities/empty', {
        hash: 404134800,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyActivityList = EmptyActivityList;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyActivityList() {
            const {
              texts,
              toggleModal
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "module-activities__list"
            }, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h2", null, texts.module.activities.title), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "addActivity"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: toggleModal
            }, texts.module.actions.addActivity))), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "activities",
              as: "div"
            }, _react.default.createElement(_empty.Empty, {
              className: "empty-section__container mt-1"
            }, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/index
      **********************************/

      ims.set('./activities/index', {
        hash: 2739799850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../context");
          var _empty = require("./empty");
          var _item = require("./list/item");
          var _reorderItem = require("./list/item/reorder-item");
          function ModuleActivities() {
            const {
              texts,
              activities,
              onSubmit,
              store,
              toggleModal
            } = (0, _context.useModuleContext)();
            const actionTexts = store.globalTexts.actions;
            const [items, setItems] = _react.default.useState(activities);
            const [reordering, setReorder] = _react.default.useState(false);
            const [processing, setProcessing] = _react.default.useState(false);
            const [orderUpdated, setOrderUpdated] = _react.default.useState(false);
            if (!activities.length) return _react.default.createElement(_empty.EmptyActivityList, null);
            const onReorder = items => {
              if (!orderUpdated) setOrderUpdated(true);
              setItems(items);
            };
            const saveReordering = async () => {
              setProcessing(true);
              await store.model.activities.reorder(items);
              setProcessing(false);
              togleReorder();
            };
            const togleReorder = () => setReorder(!reordering);
            const reorderAttrs = reordering ? {
              onClick: saveReordering
            } : {
              onClick: togleReorder
            };
            const orderLabel = !reordering ? actionTexts.order : actionTexts.close;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h5", null, texts.activities.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              ...reorderAttrs,
              icon: "list"
            }, orderLabel), !reordering && _react.default.createElement(_ui.TourStep, {
              index: 10,
              texts: texts.moduleTour,
              name: "addActivity",
              as: "div"
            }, _react.default.createElement(_components.Button, {
              icon: "add-circle",
              variant: "link",
              onClick: toggleModal
            }, texts.actions.add)))), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "activities",
              as: "div"
            }, reordering ? _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_framerMotion.Reorder.Group, {
              className: "draft-activity-list mobile-column-list",
              as: "div",
              values: items,
              onReorder: onReorder
            }, items.map(item => {
              return _react.default.createElement(_reorderItem.ReorderModuleActivity, {
                key: item.id,
                item: item
              });
            }))) : _react.default.createElement(_list.List, {
              className: "draft-activity-list mobile-column-list",
              items: items,
              control: _item.ModuleActivity
            })));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./activities/list/item/delete-modal
      ***************************************************/

      ims.set('./activities/list/item/delete-modal', {
        hash: 1701603921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteModal = DeleteModal;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          function DeleteModal({
            onClose,
            onConfirm
          }) {
            const {
              texts,
              store: {
                globalTexts: {
                  actions: textActions
                }
              }
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onClick = async () => {
              try {
                setFetching(true);
                await onConfirm();
                setFetching(false);
              } catch (e) {
                console.error(e);
              } finally {
                onClose();
              }
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onClick,
              centered: true,
              onCancel: onClose,
              actions: {
                confirm: {
                  variant: 'primary',
                  label: textActions.confirm
                },
                cancel: {
                  label: textActions.cancel,
                  variant: 'primary',
                  bordered: true
                }
              },
              show: true,
              title: texts.activities.delete.title,
              text: texts.activities.delete.subtitle
            });
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/list/item/index
      ********************************************/

      ims.set('./activities/list/item/index', {
        hash: 1854528439,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _framerMotion = require("framer-motion");
          var _icons2 = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _context = require("../../../context");
          var _deleteModal = require("./delete-modal");
          function ModuleActivity({
            item
          }) {
            const {
              texts: {
                actions,
                activities: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const ref = (0, _react.useRef)(null);
            const controls = (0, _framerMotion.useDragControls)();
            const [showDelete, setShowDelete] = _react.default.useState(false);
            const activity = item;
            const deleteItem = event => {
              try {
                ref.current.classList.add('fade-out');
                store.model.activities.remove(item.id);
              } catch (e) {
                console.error(e);
                _toast.toast.error(e.message);
              }
            };
            const toggleDelete = () => setShowDelete(!showDelete);
            const edit = event => {
              if (event.target.classList.contains('drag-bullet-point')) return;
              event.stopPropagation();
              store.editActivity(activity);
            };
            const clsState = `activity__state state--${activity.state}`;
            const onDelete = event => {
              event.stopPropagation();
              toggleDelete();
            };
            const description = store.getActivityDetail(activity) ?? texts.item.empty;
            return _react.default.createElement("div", {
              className: "item-list__reorder-container"
            }, _react.default.createElement("div", {
              ref: ref,
              className: "draft-activity-list__item mobile-column-list",
              onClick: edit
            }, _react.default.createElement("section", {
              className: "list-item__column header__main-content "
            }, _react.default.createElement("div", {
              className: "column-icons"
            }, _react.default.createElement("div", null, _react.default.createElement(_icons.BgIcon, {
              name: activity.type
            }))), _react.default.createElement("div", {
              className: "activity__data-container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "activity__name"
            }, _react.default.createElement("h6", {
              className: "activity__type"
            }, texts.types[activity.type]), _react.default.createElement("span", null, description)))), _react.default.createElement("div", {
              className: "list-item__column list-item__actions"
            }, _react.default.createElement("div", {
              className: clsState
            }, texts.states[activity.state]), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_icons2.IconButton, {
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons2.IconButton, {
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: onDelete
            })))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
              onConfirm: deleteItem,
              onClose: toggleDelete
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./activities/list/item/property
      ***********************************************/

      ims.set('./activities/list/item/property', {
        hash: 2437299253,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Property = Property;
          var _react = require("react");
          function Property({
            name,
            value
          }) {
            if (!value) return null;
            return _react.default.createElement("div", null, _react.default.createElement("h6", null, name), _react.default.createElement("span", null, value));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./activities/list/item/reorder-item
      ***************************************************/

      ims.set('./activities/list/item/reorder-item', {
        hash: 3763198779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReorderModuleActivity = ReorderModuleActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _framerMotion = require("framer-motion");
          var _icons2 = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _context = require("../../../context");
          var _deleteModal = require("./delete-modal");
          function ReorderModuleActivity({
            item
          }) {
            const {
              texts: {
                actions,
                activities: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const ref = (0, _react.useRef)(null);
            const controls = (0, _framerMotion.useDragControls)();
            const [showDelete, setShowDelete] = _react.default.useState(false);
            const activity = item;
            const deleteItem = event => {
              try {
                ref.current.classList.add('fade-out');
                store.model.activities.remove(item.id);
              } catch (e) {
                console.error(e);
                _toast.toast.error(e.message);
              }
            };
            const toggleDelete = () => setShowDelete(!showDelete);
            const edit = event => {
              if (event.target.classList.contains('drag-bullet-point')) return;
              event.stopPropagation();
              store.editActivity(activity);
              const current = store.model.activities.items.find(item => item.id === activity.id);
              store.editActivity(current);
            };
            const iRef = _react.default.useRef(null);
            const clsState = `activity__state state--${activity.state}`;
            const onDelete = event => {
              event.stopPropagation();
              toggleDelete();
            };
            const onDrag = event => {
              event.stopPropagation();
              event.preventDefault();
              controls.start(event);
            };
            const description = store.getActivityDetail(activity) ?? texts.item.empty;
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              className: "item-list__reorder-container",
              as: "div"
            }, _react.default.createElement("div", {
              ref: ref,
              className: "draft-activity-list__item mobile-column-list"
            }, _react.default.createElement("section", {
              className: "list-item__column header__main-content "
            }, _react.default.createElement("div", {
              className: "column-icons animated-icons"
            }, _react.default.createElement(_framerMotion.motion.div, {
              ref: iRef,
              className: "drag-icon__container",
              initial: {
                position: 'absolute',
                left: '-100%',
                opacity: 0
              },
              animate: {
                left: 0,
                opacity: 1
              },
              transition: {
                duration: 0.3,
                ease: 'easeOut'
              },
              style: {
                position: 'absolute'
              }
            }, _react.default.createElement(_icons2.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            })), _react.default.createElement("div", null, _react.default.createElement(_icons.BgIcon, {
              name: activity.type
            }))), _react.default.createElement("div", {
              className: "activity__data-container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "activity__name"
            }, _react.default.createElement("h6", {
              className: "activity__type"
            }, texts.types[activity.type]), _react.default.createElement("span", null, description)))), _react.default.createElement("div", {
              className: "list-item__column list-item__actions"
            }, _react.default.createElement("div", {
              className: clsState
            }, texts.states[activity.state]), _react.default.createElement(_framerMotion.motion.div, {
              className: "actions"
            }, _react.default.createElement(_icons2.IconButton, {
              disabled: true,
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons2.IconButton, {
              disabled: true,
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: onDelete
            })))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
              onConfirm: deleteItem,
              onClose: toggleDelete
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/list/item/specs/index
      **************************************************/

      ims.set('./activities/list/item/specs/index', {
        hash: 3192841847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = ActivitySpecs;
          var _react = require("react");
          var _chips = require("pragmate-ui/chips");
          var _list = require("./list");
          function ActivitySpecs({
            specs,
            type
          }) {
            return _react.default.createElement(_react.default.Fragment, null, specs.kind && _react.default.createElement(_chips.Chip, {
              variant: "primary"
            }, specs.kind), _react.default.createElement(_list.SpecsList, {
              specs: specs,
              type: type
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/list/item/specs/list
      *************************************************/

      ims.set('./activities/list/item/specs/list', {
        hash: 3707831496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsList = SpecsList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../../context");
          const Item = ({
            data
          }) => _react.default.createElement("li", null, data);
          const QuestionItem = ({
            data,
            index
          }) => {
            const {
              question
            } = data;
            return _react.default.createElement("li", null, question);
          };
          function SpecsList({
            type,
            specs
          }) {
            const {
              texts: {
                activities: texts
              }
            } = (0, _context.useModuleContext)();
            const types = {
              'content-theory': ['topics', Item],
              'multiple-choice': ['questions', QuestionItem],
              spoken: ['criterias', Item]
            };
            if (!types[type]) return null;
            const [itemsType, ItemControl] = types[type];
            const itemsList = type === 'content-theory' ? specs.hasOwnProperty('keyConcepts') ? specs.keyConcepts : specs[itemsType] : specs[itemsType];
            if (!itemsList || Array.isArray(itemsList) && !itemsList.length) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h6", null, texts[itemsType]), _react.default.createElement(_list.List, {
              className: "questions-list",
              items: itemsList,
              control: ItemControl
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/context
      *********************************************************/

      ims.set('./activities/list/modal-selection/context', {
        hash: 1482088572,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCreateActivityContext = exports.CreateActivityContext = void 0;
          var _react = require("react");
          const CreateActivityContext = exports.CreateActivityContext = _react.default.createContext({});
          const useCreateActivityContext = () => _react.default.useContext(CreateActivityContext);
          exports.useCreateActivityContext = useCreateActivityContext;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/index
      *******************************************************/

      ims.set('./activities/list/modal-selection/index', {
        hash: 3377393389,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalSelection = ModalSelection;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          var _context2 = require("./context");
          var _list = require("./list");
          var _validation = require("./validation");
          function ModalSelection({
            show,
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [activity, setActivity] = _react.default.useState(null);
            const [selected, setSelected] = _react.default.useState(null);
            const [view, setView] = _react.default.useState('list');
            if (!show) return null;
            const handleOnClose = () => {
              setView('list');
              onClose();
            };
            if (!store.model.valid) return _react.default.createElement(_validation.ModalValidation, {
              onClose: handleOnClose
            });
            const contextValue = {
              onClose,
              activity,
              setActivity,
              setView,
              selected,
              setSelected
            };
            return _react.default.createElement(_context2.CreateActivityContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_modal.Modal, {
              className: "modal-activity-selection",
              closeBackdrop: false,
              show: true,
              onClose: handleOnClose
            }, _react.default.createElement(_list.ModalActivityList, {
              onClose: handleOnClose
            })));
          }
          0;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/item
      ******************************************************/

      ims.set('./activities/list/modal-selection/item', {
        hash: 1837744184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionActivityItem = void 0;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("../../../context");
          const SelectionActivityItem = ({
            item,
            selected,
            setSelected
          }) => {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const onClick = event => setSelected(item);
            const cls = `draft-activity-list__item activity--${item}${item === selected ? ' selected' : ''}`;
            return _react.default.createElement("li", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement(_icons.BgIcon, {
              name: item
            }), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.activities.types[item]), _react.default.createElement("span", null, texts.activities.descriptionTypes[item])));
          };
          exports.SelectionActivityItem = SelectionActivityItem;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/list
      ******************************************************/

      ims.set('./activities/list/modal-selection/list', {
        hash: 2111573130,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivityList = ModalActivityList;
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../../context");
          var _context2 = require("./context");
          var _item = require("./item");
          function ModalActivityList({
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              selected,
              setSelected
            } = (0, _context2.useCreateActivityContext)();
            const onSubmit = async event => {
              event;
              const activity = await store.model.activities.add(selected, true);
              store.editActivity(activity);
              _routing.routing.pushState(`${store.url}&activityId=${activity.instanceId}`);
              onClose();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "modal-container"
            }, _react.default.createElement("h3", null, texts.activities.createModal.title), _react.default.createElement(_list.List, {
              className: "draft-activity-list",
              specs: {
                selected,
                setSelected
              },
              items: store.model.activities.availableTypes,
              control: _item.SelectionActivityItem
            })), _react.default.createElement("footer", {
              className: "footer-actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              block: true,
              onClick: onSubmit,
              disabled: !selected
            }, store.globalTexts.actions.continue)));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/validation
      ************************************************************/

      ims.set('./activities/list/modal-selection/validation', {
        hash: 4222962394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalValidation = ModalValidation;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          function ModalValidation({
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_modal.AlertModal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", null, _react.default.createElement("h3", null, texts.activities.createModal.validationTitle), _react.default.createElement("p", null, texts.activities.createModal.validation)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./body/description
      **********************************/

      ims.set('./body/description', {
        hash: 685892777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleDescription = ModuleDescription;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          function ModuleDescription({}) {
            const {
              texts: {
                module: moduleTexts,
                moduleTour: tour
              },
              store
            } = (0, _context.useModuleContext)();
            const [content, setContent] = _react.default.useState(store.model.description);
            const onEdit = async event => {
              const {
                target
              } = event;
              store.model.set({
                [target.name]: target.value
              });
              setContent(target.value);
            };
            const onBlur = () => store.save();
            return _react.default.createElement(_ui.TourStep, {
              name: "description",
              texts: tour,
              className: "module-property"
            }, _react.default.createElement(_form.Textarea, {
              name: "description",
              variant: "floating",
              label: moduleTexts.description.label,
              placeholder: moduleTexts.description.placeholder,
              onChange: onEdit,
              onBlur: onBlur,
              value: content
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./body/index
      ****************************/

      ims.set('./body/index', {
        hash: 1662668743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleData = ModuleData;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _description = require("./description");
          var _form = require("pragmate-ui/form");
          function ModuleData() {
            const {
              store,
              texts: {
                module: moduleTexts
              }
            } = (0, _context.useModuleContext)();
            (0, _hooks.useBinder)([store.model], () => {}, ['activities.updated', 'objective.changed']);
            const onBlur = () => store.save();
            const onChange = event => store.model.set({
              objective: event.currentTarget.value
            });
            return _react.default.createElement("section", null, _react.default.createElement(_form.Textarea, {
              label: moduleTexts.objective,
              variant: "floating",
              onChange: onChange,
              value: store.model.objective,
              onBlur: onBlur
            }), _react.default.createElement(_description.ModuleDescription, null));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2525156511,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 668456881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("./context");
          var _publish = require("./publish");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [title, setTitle] = _react.default.useState(store.model.title ?? '');
            const onGenerate = notes => _mainLayout.LayoutBroker.ensureCredits(notes => store.model.generatePicture(notes), notes);
            const onChange = event => {
              setTitle(event.target.value);
              store.model.set({
                title: event.target.value
              });
            };
            const onBlur = event => {
              store.save();
            };
            const [picture, setPicture] = _react.default.useState(store.model.picture);
            (0, _hooks.useBinder)([store.model], () => setPicture(store.model.picture), 'image.generated');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "section-actions__container actions-end pt-0 m-0"
            }, _react.default.createElement(_publish.PublishModule, null)), _react.default.createElement("header", {
              className: "header-module__container "
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: store.model.pictureSuggestions,
              picture: picture,
              onGenerate: onGenerate
            }), _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement(_form.Input, {
              onBlur: onBlur,
              name: "title",
              onChange: onChange,
              className: "input__header",
              value: title,
              placeholder: texts.module.title,
              icon: "edit"
            })), store.model.owner && _react.default.createElement("div", {
              className: "module__owner"
            }, _react.default.createElement("strong", null, texts.module.owner, ": "), store.model.owner?.name))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 970839485,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleOverview = ModuleOverview;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _activities = require("./activities");
          var _modalSelection = require("./activities/list/modal-selection");
          var _body = require("./body");
          var _context = require("./context");
          var _header = require("./header");
          /*bundle*/ //@ts-check

          function ModuleOverview(props) {
            const {
              store,
              fetching
            } = props;
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showModal, setShowModal] = React.useState(false);
            if (!ready) return;
            const toggleModal = () => setShowModal(!showModal);
            const value = {
              store,
              texts,
              showModal,
              toggleModal,
              activities: [...store.model.activities.items]
            };
            const cls = `${fetching ? 'is-fetching' : ''}`;
            return React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length,
              isForm: true
            }, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, null), React.createElement("div", {
              className: "app-module-creation-page"
            }, React.createElement(_body.ModuleData, null), React.createElement(_activities.ModuleActivities, null)), React.createElement(_modalSelection.ModalSelection, {
              show: showModal,
              onClose: toggleModal
            })));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./preload
      *************************/

      ims.set('./preload', {
        hash: 3382098941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Preload() {
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "section-actions__container actions-end border-top"
            }, _react.default.createElement(_components.Button, {
              variant: "primary"
            })), _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
            }, _react.default.createElement("div", {
              className: "image-preload"
            }), _react.default.createElement("div", null, _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              as: "h3"
            }, _react.default.createElement(_ui.SkeletonText, {
              height: "10px",
              width: "100px"
            })), _react.default.createElement("div", {
              className: "module__owner"
            }, _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "60px"
            }))))))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./publish
      *************************/

      ims.set('./publish', {
        hash: 3937827622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PublishModule = PublishModule;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function PublishModule() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const attrs = {
              disabled: !store.model.completed || !store.model.activities.items.length
            };
            const onSubmit = async () => {
              try {
                const activities = store.model.activities.getItems();
                const response = await store.model.publish({
                  activities,
                  type: 'module'
                });
                if (!response.status) {
                  _mainLayout.LayoutBroker.showMessage('error', texts.errors.CONTACT_ADMIN);
                  return;
                }
                _toast.toast.success(texts.toast.modulePublished);
                _routing.routing.replaceState({}, null, `/modules/list?tab=published`);
              } catch (e) {
                console.log(e);
                _toast.toast.error(texts.toast.errorPublishingModule);
              }
            };
            return _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "publish",
              index: 10
            }, _react.default.createElement("div", {
              className: "publish-action__container"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              onClick: onSubmit,
              variant: "primary",
              ...attrs
            }, texts.actions.publish)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./index",
        "from": "ModuleOverview",
        "name": "ModuleOverview"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Header') && _export("Header", Header = require ? require('./header').Header : value);
        (require || prop === 'ModuleOverview') && _export("ModuleOverview", ModuleOverview = require ? require('./index').ModuleOverview : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIl9yZW9yZGVySXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiYWN0aW9uVGV4dHMiLCJnbG9iYWxUZXh0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInJlb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvcmRlclVwZGF0ZWQiLCJzZXRPcmRlclVwZGF0ZWQiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJzYXZlUmVvcmRlcmluZyIsIm1vZGVsIiwicmVvcmRlciIsInRvZ2xlUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsImNsb3NlIiwiRnJhZ21lbnQiLCJpbmRleCIsImFkZCIsIkZvcm0iLCJSZW9yZGVyIiwiR3JvdXAiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiUmVvcmRlck1vZHVsZUFjdGl2aXR5Iiwia2V5IiwiaWQiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiX21vZGFsIiwiRGVsZXRlTW9kYWwiLCJvbkNsb3NlIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJyZWYiLCJ1c2VSZWYiLCJjb250cm9scyIsInVzZURyYWdDb250cm9scyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiYWN0aXZpdHkiLCJkZWxldGVJdGVtIiwiZXZlbnQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9hc3QiLCJtZXNzYWdlIiwidG9nZ2xlRGVsZXRlIiwiZWRpdCIsInRhcmdldCIsImNvbnRhaW5zIiwic3RvcFByb3BhZ2F0aW9uIiwiZWRpdEFjdGl2aXR5IiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwiZGVzY3JpcHRpb24iLCJnZXRBY3Rpdml0eURldGFpbCIsIkJnSWNvbiIsInR5cGUiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJQcm9wZXJ0eSIsInZhbHVlIiwiZmluZCIsImlSZWYiLCJvbkRyYWciLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0IiwiSXRlbSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJwb3NpdGlvbiIsImxlZnQiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJzdHlsZSIsIkljb24iLCJkaXNhYmxlZCIsIl9jaGlwcyIsIkFjdGl2aXR5U3BlY3MiLCJzcGVjcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQyIiwiX3ZhbGlkYXRpb24iLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlT25DbG9zZSIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNb2RhbEFjdGl2aXR5TGlzdCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImNscyIsImRlc2NyaXB0aW9uVHlwZXMiLCJfcm91dGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ1cmwiLCJpbnN0YW5jZUlkIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImJsb2NrIiwiY29udGludWUiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiX2hvb2tzIiwiX2Rlc2NyaXB0aW9uIiwiTW9kdWxlRGF0YSIsInVzZUJpbmRlciIsIm9iamVjdGl2ZSIsImN1cnJlbnRUYXJnZXQiLCJNb2R1bGVDb250ZXh0IiwiX2NvdmVySW1hZ2UiLCJfbWFpbkxheW91dCIsIl9wdWJsaXNoIiwiSGVhZGVyIiwic2V0VGl0bGUiLCJvbkdlbmVyYXRlIiwibm90ZXMiLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiSW5wdXQiLCJvd25lciIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2FjdGl2aXRpZXMiLCJfbW9kYWxTZWxlY3Rpb24iLCJfYm9keSIsIl9oZWFkZXIiLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJpc0Zvcm0iLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImF0dHJzIiwiY29tcGxldGVkIiwiZ2V0SXRlbXMiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwicmVwbGFjZVN0YXRlIiwibG9nIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIl0sInNvdXJjZXMiOlsiLy90cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiLy90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9yZW9yZGVyLWl0ZW0udHN4IiwiLy90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiLy90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiLy90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2luZGV4LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9pdGVtLnRzeCIsIi8vdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9saXN0LnRzeCIsIi8vdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi8vdHMvYm9keS9kZXNjcmlwdGlvbi50c3giLCIvL3RzL2JvZHkvaW5kZXgudHN4IiwiLy90cy9jb250ZXh0LnRzeCIsIi8vdHMvaGVhZGVyLnRzeCIsIi8vdHMvaW5kZXgudHN4IiwiLy90cy9wcmVsb2FkLnRzeCIsIi8vdHMvcHVibGlzaC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxHQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVSyxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVcsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFakQsT0FDQ1QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtB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