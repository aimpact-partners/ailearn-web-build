System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/chips", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/components/cover-image.code", "@aimpact/ailearn-app@0.7.0/main-layout.widget"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Header, ModuleOverview, __beyond_pkg, hmr;
  _export({
    Header: void 0,
    ModuleOverview: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Empty) {
      dependency_2 = _pragmateUi108Empty;
    }, function (_pragmateUi108Components) {
      dependency_3 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_4 = _aimpactAilearnApp070ComponentsUi;
    }, function (_framerMotion2) {
      dependency_5 = _framerMotion2;
    }, function (_pragmateUi108Form) {
      dependency_6 = _pragmateUi108Form;
    }, function (_pragmateUi108List) {
      dependency_7 = _pragmateUi108List;
    }, function (_pragmateUi108Modal) {
      dependency_8 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_beyondJsKernel0114Routing) {
      dependency_10 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Icons) {
      dependency_11 = _pragmateUi108Icons;
    }, function (_pragmateUi108Toast) {
      dependency_12 = _pragmateUi108Toast;
    }, function (_pragmateUi108Chips) {
      dependency_13 = _pragmateUi108Chips;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_14 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactAilearnApp070ComponentsCoverImageCode) {
      dependency_15 = _aimpactAilearnApp070ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_16 = _aimpactAilearnApp070MainLayoutWidget;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/management/overview",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/empty', dependency_2], ['pragmate-ui/components', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['framer-motion', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['pragmate-ui/chips', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/components/cover-image.code', dependency_15], ['@aimpact/ailearn-app/main-layout.widget', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/modules/management/overview.code');
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
        hash: 3729895068,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.AnimatedContainer, {
              as: "header",
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
            }, _react.default.createElement(_ui.AnimatedContainer, null, reordering ? _react.default.createElement(_form.Form, {
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
            }))));
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
        hash: 2656880479,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ModuleData() {
            const {
              store,
              texts: {
                module: moduleTexts
              }
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(store.model, ['activities.updated', 'objective.changed']);
            const onBlur = () => store.save();
            const onChange = event => {
              store.model.set({
                objective: event.currentTarget.value
              });
            };
            return _react.default.createElement(_ui.AnimatedContainer, {
              as: "section"
            }, _react.default.createElement(_form.Textarea, {
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
        hash: 771990984,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _publish = require("./publish");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const {
              images: {
                generation: {
                  sufix
                }
              }
            } = texts;
            const {
              generatePicture
            } = store.model;
            const [title, setTitle] = _react.default.useState(store.model.title ?? '');
            const onGenerate = notes => _mainLayout.LayoutBroker.ensureCredits(notes => generatePicture(notes, {
              sufix
            }), notes);
            const onChange = event => {
              setTitle(event.target.value);
              store.model.set({
                title: event.target.value
              });
            };
            const onBlur = event => {
              store.save();
            };
            const {
              picture
            } = store.model;
            (0, _hooks.useStore)(store.model, ['image.generated']);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.AnimatedContainer, {
              as: "section",
              className: "section-actions__container actions-end pt-0 m-0"
            }, _react.default.createElement(_publish.PublishModule, null)), _react.default.createElement(_ui.AnimatedContainer, {
              as: "header",
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
        hash: 294310184,
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
          /*bundle*/
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
        hash: 3318256283,
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
            const [fetching, setFetching] = _react.default.useState(store.fetching || store.model?.fetching);
            const attrs = {
              disabled: fetching || store.fetching || store.model?.fetching || !store.model.completed || !store.model.activities.items.length
            };
            const onSubmit = async () => {
              try {
                setFetching(true);
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
              } finally {
                setFetching(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIl9yZW9yZGVySXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiYWN0aW9uVGV4dHMiLCJnbG9iYWxUZXh0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInJlb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvcmRlclVwZGF0ZWQiLCJzZXRPcmRlclVwZGF0ZWQiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJzYXZlUmVvcmRlcmluZyIsIm1vZGVsIiwicmVvcmRlciIsInRvZ2xlUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsImNsb3NlIiwiRnJhZ21lbnQiLCJBbmltYXRlZENvbnRhaW5lciIsImluZGV4IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJSZW9yZGVyTW9kdWxlQWN0aXZpdHkiLCJrZXkiLCJpZCIsIkxpc3QiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJfbW9kYWwiLCJEZWxldGVNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJlIiwiY29uc29sZSIsImVycm9yIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwic2hvdyIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsInJlZiIsInVzZVJlZiIsImNvbnRyb2xzIiwidXNlRHJhZ0NvbnRyb2xzIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJhY3Rpdml0eSIsImRlbGV0ZUl0ZW0iLCJldmVudCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJlZGl0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QWN0aXZpdHkiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJkZXNjcmlwdGlvbiIsImdldEFjdGl2aXR5RGV0YWlsIiwiQmdJY29uIiwidHlwZSIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIlByb3BlcnR5IiwidmFsdWUiLCJmaW5kIiwiaVJlZiIsIm9uRHJhZyIsInByZXZlbnREZWZhdWx0Iiwic3RhcnQiLCJJdGVtIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsInBvc2l0aW9uIiwibGVmdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInN0eWxlIiwiSWNvbiIsImRpc2FibGVkIiwiX2NoaXBzIiwiQWN0aXZpdHlTcGVjcyIsInNwZWNzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dDIiLCJfdmFsaWRhdGlvbiIsIk1vZGFsU2VsZWN0aW9uIiwic2V0QWN0aXZpdHkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidmlldyIsInNldFZpZXciLCJoYW5kbGVPbkNsb3NlIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1vZGFsQWN0aXZpdHlMaXN0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwiY2xzIiwiZGVzY3JpcHRpb25UeXBlcyIsIl9yb3V0aW5nIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInVybCIsImluc3RhbmNlSWQiLCJjcmVhdGVNb2RhbCIsImF2YWlsYWJsZVR5cGVzIiwiYmxvY2siLCJjb250aW51ZSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRvdXIiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIm9uRWRpdCIsInNldCIsIm9uQmx1ciIsInNhdmUiLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJfaG9va3MiLCJfZGVzY3JpcHRpb24iLCJNb2R1bGVEYXRhIiwidXNlU3RvcmUiLCJvYmplY3RpdmUiLCJjdXJyZW50VGFyZ2V0IiwiTW9kdWxlQ29udGV4dCIsIl9jb3ZlckltYWdlIiwiX21haW5MYXlvdXQiLCJfcHVibGlzaCIsIkhlYWRlciIsImltYWdlcyIsImdlbmVyYXRpb24iLCJzdWZpeCIsImdlbmVyYXRlUGljdHVyZSIsInNldFRpdGxlIiwib25HZW5lcmF0ZSIsIm5vdGVzIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsInBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiSW5wdXQiLCJvd25lciIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2FjdGl2aXRpZXMiLCJfbW9kYWxTZWxlY3Rpb24iLCJfYm9keSIsIl9oZWFkZXIiLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJpc0Zvcm0iLCJQcmVsb2FkIiwiQ29udGVudEVkaXRhYmxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJhdHRycyIsImNvbXBsZXRlZCIsImdldEl0ZW1zIiwicmVzcG9uc2UiLCJwdWJsaXNoIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJlcGxhY2VTdGF0ZSIsImxvZyIsImVycm9yUHVibGlzaGluZ01vZHVsZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcmVvcmRlci1pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy9ib2R5L2Rlc2NyaXB0aW9uLnRzeCIsIi90cy9ib2R5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wdWJsaXNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxHQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVSyxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVcsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFakQsT0FDQ1QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FB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