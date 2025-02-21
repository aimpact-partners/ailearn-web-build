System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/chips", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "@aimpact/ailearn-app@0.3.1/main-layout.widget"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_15 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp031ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp031ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_17 = _aimpactAilearnApp031MainLayoutWidget;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 2748422189,
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
        hash: 1789241161,
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
        hash: 4142650990,
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
              disabled: !store.model.completed
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIl9yZW9yZGVySXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiYWN0aW9uVGV4dHMiLCJnbG9iYWxUZXh0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInJlb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvcmRlclVwZGF0ZWQiLCJzZXRPcmRlclVwZGF0ZWQiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJzYXZlUmVvcmRlcmluZyIsIm1vZGVsIiwicmVvcmRlciIsInRvZ2xlUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsImNsb3NlIiwiRnJhZ21lbnQiLCJhZGQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwidmFsdWVzIiwibWFwIiwiaXRlbSIsIlJlb3JkZXJNb2R1bGVBY3Rpdml0eSIsImtleSIsImlkIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJDb25maXJtTW9kYWwiLCJjZW50ZXJlZCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJzaG93IiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwicmVmIiwidXNlUmVmIiwiY29udHJvbHMiLCJ1c2VEcmFnQ29udHJvbHMiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImFjdGl2aXR5IiwiZGVsZXRlSXRlbSIsImV2ZW50IiwiY3VycmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsImVkaXQiLCJ0YXJnZXQiLCJjb250YWlucyIsInN0b3BQcm9wYWdhdGlvbiIsImVkaXRBY3Rpdml0eSIsImZpbmQiLCJpUmVmIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwib25EcmFnIiwicHJldmVudERlZmF1bHQiLCJzdGFydCIsImRlc2NyaXB0aW9uIiwiZ2V0QWN0aXZpdHlEZXRhaWwiLCJCZ0ljb24iLCJ0eXBlIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiUHJvcGVydHkiLCJ2YWx1ZSIsIkl0ZW0iLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwicG9zaXRpb24iLCJsZWZ0Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic3R5bGUiLCJJY29uIiwiZGlzYWJsZWQiLCJfY2hpcHMiLCJBY3Rpdml0eVNwZWNzIiwic3BlY3MiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJpbmRleCIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQyIiwiX3ZhbGlkYXRpb24iLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlT25DbG9zZSIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNb2RhbEFjdGl2aXR5TGlzdCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImNscyIsImRlc2NyaXB0aW9uVHlwZXMiLCJfcm91dGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ1cmwiLCJpbnN0YW5jZUlkIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImJsb2NrIiwiY29udGludWUiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiX2hvb2tzIiwiX2Rlc2NyaXB0aW9uIiwiTW9kdWxlRGF0YSIsInVzZUJpbmRlciIsIm9iamVjdGl2ZSIsImN1cnJlbnRUYXJnZXQiLCJNb2R1bGVDb250ZXh0IiwiX2NvdmVySW1hZ2UiLCJfbWFpbkxheW91dCIsIl9wdWJsaXNoIiwiSGVhZGVyIiwic2V0VGl0bGUiLCJvbkdlbmVyYXRlIiwibm90ZXMiLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiSW5wdXQiLCJvd25lciIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2FjdGl2aXRpZXMiLCJfbW9kYWxTZWxlY3Rpb24iLCJfYm9keSIsIl9oZWFkZXIiLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJpc0Zvcm0iLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImF0dHJzIiwiY29tcGxldGVkIiwiZ2V0SXRlbXMiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwicmVwbGFjZVN0YXRlIiwibG9nIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9yZW9yZGVyLWl0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL2JvZHkvZGVzY3JpcHRpb24udHN4IiwiL3RzL2JvZHkvaW5kZXgudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3ByZWxvYWQudHN4IiwiL3RzL3B1Ymxpc2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksR0FBQSxHQUFBSixPQUFBO1VBQ00sU0FBVUssaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFXLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRWpELE9BQ0NULE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNNLE1BQU0sQ0FBQ0Ms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