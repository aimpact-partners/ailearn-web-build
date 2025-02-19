System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/chips", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "@aimpact/ailearn-app@0.3.1/main-layout.widget"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Header, ModuleOverview, __beyond_pkg, hmr;
  _export({
    Header: void 0,
    ModuleOverview: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_2 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_3 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_4 = _aimpactAilearnApp031ComponentsUi;
    }, function (_framerMotion2) {
      dependency_5 = _framerMotion2;
    }, function (_pragmateUi100Beta7Form) {
      dependency_6 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7List) {
      dependency_7 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_8 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_11 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_12 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_13 = _pragmateUi100Beta7Chips;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_14 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp031ComponentsCoverImageCode) {
      dependency_15 = _aimpactAilearnApp031ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_16 = _aimpactAilearnApp031MainLayoutWidget;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/empty', dependency_2], ['pragmate-ui/components', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['framer-motion', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/modal', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['pragmate-ui/chips', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/components/cover-image.code', dependency_15], ['@aimpact/ailearn-app/main-layout.widget', dependency_16]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIl9yZW9yZGVySXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiYWN0aW9uVGV4dHMiLCJnbG9iYWxUZXh0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInJlb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvcmRlclVwZGF0ZWQiLCJzZXRPcmRlclVwZGF0ZWQiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJzYXZlUmVvcmRlcmluZyIsIm1vZGVsIiwicmVvcmRlciIsInRvZ2xlUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsImNsb3NlIiwiRnJhZ21lbnQiLCJhZGQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwidmFsdWVzIiwibWFwIiwiaXRlbSIsIlJlb3JkZXJNb2R1bGVBY3Rpdml0eSIsImtleSIsImlkIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJDb25maXJtTW9kYWwiLCJjZW50ZXJlZCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJzaG93IiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwicmVmIiwidXNlUmVmIiwiY29udHJvbHMiLCJ1c2VEcmFnQ29udHJvbHMiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImFjdGl2aXR5IiwiZGVsZXRlSXRlbSIsImV2ZW50IiwiY3VycmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsImVkaXQiLCJ0YXJnZXQiLCJjb250YWlucyIsInN0b3BQcm9wYWdhdGlvbiIsImVkaXRBY3Rpdml0eSIsImZpbmQiLCJpUmVmIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwib25EcmFnIiwicHJldmVudERlZmF1bHQiLCJzdGFydCIsImRlc2NyaXB0aW9uIiwiZ2V0QWN0aXZpdHlEZXRhaWwiLCJCZ0ljb24iLCJ0eXBlIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiUHJvcGVydHkiLCJ2YWx1ZSIsIkl0ZW0iLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwicG9zaXRpb24iLCJsZWZ0Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic3R5bGUiLCJJY29uIiwiZGlzYWJsZWQiLCJfY2hpcHMiLCJBY3Rpdml0eVNwZWNzIiwic3BlY3MiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJpbmRleCIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQyIiwiX3ZhbGlkYXRpb24iLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlT25DbG9zZSIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNb2RhbEFjdGl2aXR5TGlzdCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImNscyIsImRlc2NyaXB0aW9uVHlwZXMiLCJfcm91dGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ1cmwiLCJpbnN0YW5jZUlkIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImJsb2NrIiwiY29udGludWUiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiX2hvb2tzIiwiX2Rlc2NyaXB0aW9uIiwiTW9kdWxlRGF0YSIsInVzZUJpbmRlciIsIm9iamVjdGl2ZSIsIk1vZHVsZUNvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9tYWluTGF5b3V0IiwiX3B1Ymxpc2giLCJIZWFkZXIiLCJzZXRUaXRsZSIsIm9uR2VuZXJhdGUiLCJub3RlcyIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJJbnB1dCIsIm93bmVyIiwiUmVhY3QiLCJfYmV5b25kX2NvbnRleHQiLCJfYWN0aXZpdGllcyIsIl9tb2RhbFNlbGVjdGlvbiIsIl9ib2R5IiwiX2hlYWRlciIsIk1vZHVsZU92ZXJ2aWV3IiwicHJvcHMiLCJyZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiUGFnZUNvbnRhaW5lciIsImlzRm9ybSIsIlByZWxvYWQiLCJBbmltYXRlZENvbnRhaW5lciIsIkNvbnRlbnRFZGl0YWJsZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiYXR0cnMiLCJjb21wbGV0ZWQiLCJnZXRJdGVtcyIsInJlc3BvbnNlIiwicHVibGlzaCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJyZXBsYWNlU3RhdGUiLCJsb2ciLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Jlb3JkZXItaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvYm9keS9kZXNjcmlwdGlvbi50c3giLCIvdHMvYm9keS9pbmRleC50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcHJlbG9hZC50c3giLCIvdHMvcHVibGlzaC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksR0FBQSxHQUFBSixPQUFBO1VBQ00sU0FBVUssaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFXLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRWpELE9BQ0NULE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNNLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLLENB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UUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixJQUFJO2dCQUNILE1BQU1yQixVQUFVLEdBQUdzQixLQUFLLENBQUNlLEtBQUssQ0FBQ3JDLFVBQVUsQ0FBQ3NQLFFBQVEsRUFBRTtnQkFDcEQsTUFBTUMsUUFBUSxHQUFHLE1BQU1qTyxLQUFLLENBQUNlLEtBQUssQ0FBQ21OLE9BQU8sQ0FBQztrQkFBRXhQLFVBQVU7a0JBQUVpSCxJQUFJLEVBQUU7Z0JBQVEsQ0FBRSxDQUFDO2dCQUUxRSxJQUFJLENBQUNzSSxRQUFRLENBQUNFLE1BQU0sRUFBRTtrQkFDckIzQyxXQUFBLENBQUFNLFlBQVksQ0FBQ3NDLFdBQVcsQ0FBQyxPQUFPLEVBQUVqUSxLQUFLLENBQUNrUSxNQUFNLENBQUNDLGFBQWEsQ0FBQztrQkFDN0Q7O2dCQUVENUssTUFBQSxDQUFBYyxLQUFLLENBQUMrSixPQUFPLENBQUNwUSxLQUFLLENBQUNxRyxLQUFLLENBQUNnSyxlQUFlLENBQUM7Z0JBQzFDL0UsUUFBQSxDQUFBQyxPQUFPLENBQUMrRSxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSw2QkFBNkIsQ0FBQztlQUM3RCxDQUFDLE9BQU85TCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQzhMLEdBQUcsQ0FBQy9MLENBQUMsQ0FBQztnQkFDZGUsTUFBQSxDQUFBYyxLQUFLLENBQUMzQixLQUFLLENBQUMxRSxLQUFLLENBQUNxRyxLQUFLLENBQUNtSyxxQkFBcUIsQ0FBQzs7WUFFaEQsQ0FBQztZQUNELE9BQ0MvUSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixHQUFBLENBQUFXLFFBQVE7Y0FBQ1QsS0FBSyxFQUFFQSxLQUFLLENBQUNVLFVBQVU7Y0FBRUMsSUFBSSxFQUFDLFNBQVM7Y0FBQ3lJLEtBQUssRUFBRTtZQUFFLEdBQzFEM0osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixXQUFBLENBQUFnQixNQUFNO2NBQUMwRCxRQUFRLEVBQUV6QyxLQUFLLENBQUN5QyxRQUFRO2NBQUV2RCxPQUFPLEVBQUVhLFFBQVE7Y0FBRWYsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLOE87WUFBSyxHQUM5RTNQLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQytPLE9BQU8sQ0FDZCxDQUNKLENBQ0k7VUFFYiIsImlnbm9yZUxpc3QiOltdfQ==