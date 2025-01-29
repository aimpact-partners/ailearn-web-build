System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "@aimpact/ailearn-app@0.3.1/main-layout.widget"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Header, ModuleOverview, __beyond_pkg, hmr;
  _export({
    Header: void 0,
    ModuleOverview: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_3 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_4 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_5 = _aimpactAilearnApp031ComponentsUi;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi100Beta7Form) {
      dependency_7 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7List) {
      dependency_8 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_9 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_13 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_14 = _pragmateUi100Beta7Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp031ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_17 = _aimpactAilearnApp031MainLayoutWidget;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/management/overview",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['framer-motion', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/chips', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@aimpact/ailearn-app/main-layout.widget', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/modules/management/overview.code');
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./activities/empty
      **********************************/
      ims.set('./activities/empty', {
        hash: 3049423641,
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
            }, _react.default.createElement(_empty.Empty, null, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/index
      **********************************/

      ims.set('./activities/index', {
        hash: 3916606952,
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
            // React.useEffect(() => {
            // 	setItems(activities);
            // }, [activities]);
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
            const reorderAttrs = {
              onClick: togleReorder
            };
            const orderLabel = !reordering ? actionTexts.order : actionTexts.cancel;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h5", null, texts.activities.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              ...reorderAttrs,
              icon: "list"
            }, orderLabel), _react.default.createElement(_ui.TourStep, {
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
            })), _react.default.createElement("section", {
              className: "section-actions__container actions-end"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: saveReordering,
              disabled: processing || !orderUpdated
            }, store.globalTexts.actions.save))) : _react.default.createElement(_list.List, {
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
        hash: 1915017752,
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
            }, _react.default.createElement("div", {
              onPointerDown: onDrag,
              ref: iRef,
              className: "drag-icon__container"
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
        hash: 2342671415,
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
              className: "column-icons"
            }, _react.default.createElement("div", {
              ref: iRef,
              className: "drag-icon__container"
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
        hash: 1768562555,
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
        hash: 712982921,
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
            return _react.default.createElement("div", {
              className: "modal-container"
            }, _react.default.createElement("h3", null, texts.activities.createModal.title), _react.default.createElement(_list.List, {
              className: "draft-activity-list",
              specs: {
                selected,
                setSelected
              },
              items: store.model.activities.availableTypes,
              control: _item.SelectionActivityItem
            }), _react.default.createElement("footer", {
              className: "actions flex-container gap-05"
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
        hash: 3646264377,
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
          function ModuleData() {
            const {
              store,
              texts: {
                module: moduleTexts
              }
            } = (0, _context.useModuleContext)();
            (0, _hooks.useBinder)([store.model], () => {}, 'activities.updated');
            return _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("h6", null, moduleTexts.objective, ":"), _react.default.createElement("p", null, " ", store.model.objective)), _react.default.createElement(_description.ModuleDescription, null));
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
        hash: 2972552941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("./context");
          var _publish = require("./publish");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function Header() {
            const {
              texts,
              store,
              texts: {
                module: moduleTexts
              }
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
            })), _react.default.createElement("div", {
              className: "module__owner"
            }, _react.default.createElement("strong", null, texts.module.owner, ": "), store.model.owner?.name))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2258946782,
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
              fetching: fetching && !!store.model?.activities.length
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
        hash: 217123352,
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
              disabled: store.model.type !== 'draft' || !store.model.completed
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIl9yZW9yZGVySXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiYWN0aW9uVGV4dHMiLCJnbG9iYWxUZXh0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInJlb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvcmRlclVwZGF0ZWQiLCJzZXRPcmRlclVwZGF0ZWQiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJzYXZlUmVvcmRlcmluZyIsIm1vZGVsIiwicmVvcmRlciIsInRvZ2xlUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsImNhbmNlbCIsIkZyYWdtZW50IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJSZW9yZGVyTW9kdWxlQWN0aXZpdHkiLCJrZXkiLCJpZCIsImRpc2FibGVkIiwic2F2ZSIsIkxpc3QiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJfbW9kYWwiLCJEZWxldGVNb2RhbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJlIiwiY29uc29sZSIsImVycm9yIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImJvcmRlcmVkIiwic2hvdyIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsInJlZiIsInVzZVJlZiIsImNvbnRyb2xzIiwidXNlRHJhZ0NvbnRyb2xzIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJhY3Rpdml0eSIsImRlbGV0ZUl0ZW0iLCJldmVudCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJlZGl0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QWN0aXZpdHkiLCJmaW5kIiwiaVJlZiIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInByZXZlbnREZWZhdWx0Iiwic3RhcnQiLCJkZXNjcmlwdGlvbiIsImdldEFjdGl2aXR5RGV0YWlsIiwib25Qb2ludGVyRG93biIsIkljb24iLCJCZ0ljb24iLCJ0eXBlIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiUHJvcGVydHkiLCJ2YWx1ZSIsIkl0ZW0iLCJfY2hpcHMiLCJBY3Rpdml0eVNwZWNzIiwic3BlY3MiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJpbmRleCIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQyIiwiX3ZhbGlkYXRpb24iLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlT25DbG9zZSIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNb2RhbEFjdGl2aXR5TGlzdCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImNscyIsImRlc2NyaXB0aW9uVHlwZXMiLCJfcm91dGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ1cmwiLCJpbnN0YW5jZUlkIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImJsb2NrIiwiY29udGludWUiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJzZXQiLCJvbkJsdXIiLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJfaG9va3MiLCJfZGVzY3JpcHRpb24iLCJNb2R1bGVEYXRhIiwidXNlQmluZGVyIiwib2JqZWN0aXZlIiwiTW9kdWxlQ29udGV4dCIsIl9jb3ZlckltYWdlIiwiX21haW5MYXlvdXQiLCJfcHVibGlzaCIsIkhlYWRlciIsInNldFRpdGxlIiwib25HZW5lcmF0ZSIsIm5vdGVzIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiUHVibGlzaE1vZHVsZSIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsIklucHV0Iiwib3duZXIiLCJSZWFjdCIsIl9iZXlvbmRfY29udGV4dCIsIl9hY3Rpdml0aWVzIiwiX21vZGFsU2VsZWN0aW9uIiwiX2JvZHkiLCJfaGVhZGVyIiwiTW9kdWxlT3ZlcnZpZXciLCJwcm9wcyIsInJlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJQYWdlQ29udGFpbmVyIiwiUHJlbG9hZCIsIkFuaW1hdGVkQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJhdHRycyIsImNvbXBsZXRlZCIsImdldEl0ZW1zIiwicmVzcG9uc2UiLCJwdWJsaXNoIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJlcGxhY2VTdGF0ZSIsImxvZyIsImVycm9yUHVibGlzaGluZ01vZHVsZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcmVvcmRlci1pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy9ib2R5L2Rlc2NyaXB0aW9uLnRzeCIsIi90cy9ib2R5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wdWJsaXNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLEdBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVVLLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBVyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUVqRCxPQUNDVCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUErQixHQUNoRFosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDTSxNQUFNLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFNLEVBQ3hDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixHQUFBLENBQUFXLFFBQVE7Y0FBQ1QsS0FBSyxFQUFFQSxLQUFLLENBQUNVLFVBQVU7Y0FBRUMsSUFB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QUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLElBQUk7Z0JBQ0gsTUFBTXJCLFVBQVUsR0FBR3NCLEtBQUssQ0FBQ2UsS0FBSyxDQUFDckMsVUFBVSxDQUFDME8sUUFBUSxFQUFFO2dCQUNwRCxNQUFNQyxRQUFRLEdBQUcsTUFBTXJOLEtBQUssQ0FBQ2UsS0FBSyxDQUFDdU0sT0FBTyxDQUFDO2tCQUFFNU8sVUFBVTtrQkFBRW9ILElBQUksRUFBRTtnQkFBUSxDQUFFLENBQUM7Z0JBRTFFLElBQUksQ0FBQ3VILFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2tCQUNyQjFDLFdBQUEsQ0FBQU0sWUFBWSxDQUFDcUMsV0FBVyxDQUFDLE9BQU8sRUFBRXJQLEtBQUssQ0FBQ3NQLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDO2tCQUM3RDs7Z0JBRUQvSixNQUFBLENBQUFjLEtBQUssQ0FBQ2tKLE9BQU8sQ0FBQ3hQLEtBQUssQ0FBQ3NHLEtBQUssQ0FBQ21KLGVBQWUsQ0FBQztnQkFDMUM3RSxRQUFBLENBQUFDLE9BQU8sQ0FBQzZFLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixDQUFDO2VBQzdELENBQUMsT0FBT2hMLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDZ0wsR0FBRyxDQUFDakwsQ0FBQyxDQUFDO2dCQUNkYyxNQUFBLENBQUFjLEtBQUssQ0FBQzFCLEtBQUssQ0FBQzVFLEtBQUssQ0FBQ3NHLEtBQUssQ0FBQ3NKLHFCQUFxQixDQUFDOztZQUVoRCxDQUFDO1lBQ0QsT0FDQ25RLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEdBQUEsQ0FBQVcsUUFBUTtjQUFDVCxLQUFLLEVBQUVBLEtBQUssQ0FBQ1UsVUFBVTtjQUFFQyxJQUFJLEVBQUMsU0FBUztjQUFDK0gsS0FBSyxFQUFFO1lBQUUsR0FDMURqSixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMkIsR0FDekNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNSLFdBQUEsQ0FBQWdCLE1BQU07Y0FBQzRELFFBQVEsRUFBRTNDLEtBQUssQ0FBQzJDLFFBQVE7Y0FBRXpELE9BQU8sRUFBRWEsUUFBUTtjQUFFZixPQUFPLEVBQUMsU0FBUztjQUFBLEdBQUtrTztZQUFLLEdBQzlFL08sS0FBSyxDQUFDZ0IsT0FBTyxDQUFDbU8sT0FBTyxDQUNkLENBQ0osQ0FDSTtVQUViIiwiaWdub3JlTGlzdCI6W119