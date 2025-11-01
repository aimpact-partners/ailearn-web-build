System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/modal", "@aimpact/ailearn-app@0.7.0/components/icons", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/chips", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/ailearn-app@0.7.0/components/cover-image.code", "@aimpact/ailearn-app@0.7.0/main-layout.widget"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_5 = _aimpactAilearnApp070ComponentsUi;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi108Form) {
      dependency_7 = _pragmateUi108Form;
    }, function (_pragmateUi108List) {
      dependency_8 = _pragmateUi108List;
    }, function (_pragmateUi108Modal) {
      dependency_9 = _pragmateUi108Modal;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp070ComponentsIcons;
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
    }, function (_aimpactAilearnApp070ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp070ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp070MainLayoutWidget) {
      dependency_17 = _aimpactAilearnApp070MainLayoutWidget;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['framer-motion', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/chips', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@aimpact/ailearn-app/main-layout.widget', dependency_17]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIl9yZW9yZGVySXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiYWN0aW9uVGV4dHMiLCJnbG9iYWxUZXh0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInJlb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvcmRlclVwZGF0ZWQiLCJzZXRPcmRlclVwZGF0ZWQiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJzYXZlUmVvcmRlcmluZyIsIm1vZGVsIiwicmVvcmRlciIsInRvZ2xlUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsImNsb3NlIiwiRnJhZ21lbnQiLCJBbmltYXRlZENvbnRhaW5lciIsImluZGV4IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJSZW9yZGVyTW9kdWxlQWN0aXZpdHkiLCJrZXkiLCJpZCIsIkxpc3QiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJfbW9kYWwiLCJEZWxldGVNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJlIiwiY29uc29sZSIsImVycm9yIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwic2hvdyIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsInJlZiIsInVzZVJlZiIsImNvbnRyb2xzIiwidXNlRHJhZ0NvbnRyb2xzIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJhY3Rpdml0eSIsImRlbGV0ZUl0ZW0iLCJldmVudCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJlZGl0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QWN0aXZpdHkiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJkZXNjcmlwdGlvbiIsImdldEFjdGl2aXR5RGV0YWlsIiwiQmdJY29uIiwidHlwZSIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIlByb3BlcnR5IiwidmFsdWUiLCJmaW5kIiwiaVJlZiIsIm9uRHJhZyIsInByZXZlbnREZWZhdWx0Iiwic3RhcnQiLCJJdGVtIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsInBvc2l0aW9uIiwibGVmdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInN0eWxlIiwiSWNvbiIsImRpc2FibGVkIiwiX2NoaXBzIiwiQWN0aXZpdHlTcGVjcyIsInNwZWNzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dDIiLCJfdmFsaWRhdGlvbiIsIk1vZGFsU2VsZWN0aW9uIiwic2V0QWN0aXZpdHkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidmlldyIsInNldFZpZXciLCJoYW5kbGVPbkNsb3NlIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1vZGFsQWN0aXZpdHlMaXN0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwiY2xzIiwiZGVzY3JpcHRpb25UeXBlcyIsIl9yb3V0aW5nIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInVybCIsImluc3RhbmNlSWQiLCJjcmVhdGVNb2RhbCIsImF2YWlsYWJsZVR5cGVzIiwiYmxvY2siLCJjb250aW51ZSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRvdXIiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIm9uRWRpdCIsInNldCIsIm9uQmx1ciIsInNhdmUiLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJfaG9va3MiLCJfZGVzY3JpcHRpb24iLCJNb2R1bGVEYXRhIiwidXNlU3RvcmUiLCJvYmplY3RpdmUiLCJjdXJyZW50VGFyZ2V0IiwiTW9kdWxlQ29udGV4dCIsIl9jb3ZlckltYWdlIiwiX21haW5MYXlvdXQiLCJfcHVibGlzaCIsIkhlYWRlciIsImltYWdlcyIsImdlbmVyYXRpb24iLCJzdWZpeCIsImdlbmVyYXRlUGljdHVyZSIsInNldFRpdGxlIiwib25HZW5lcmF0ZSIsIm5vdGVzIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsInBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiSW5wdXQiLCJvd25lciIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2FjdGl2aXRpZXMiLCJfbW9kYWxTZWxlY3Rpb24iLCJfYm9keSIsIl9oZWFkZXIiLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJpc0Zvcm0iLCJQcmVsb2FkIiwiQ29udGVudEVkaXRhYmxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJhdHRycyIsImNvbXBsZXRlZCIsImdldEl0ZW1zIiwicmVzcG9uc2UiLCJwdWJsaXNoIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJlcGxhY2VTdGF0ZSIsImxvZyIsImVycm9yUHVibGlzaGluZ01vZHVsZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcmVvcmRlci1pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy9ib2R5L2Rlc2NyaXB0aW9uLnRzeCIsIi90cy9ib2R5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wdWJsaXNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLEdBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVVLLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBVyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUVqRCxPQUNDVCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUErQixHQUNoRFosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxD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