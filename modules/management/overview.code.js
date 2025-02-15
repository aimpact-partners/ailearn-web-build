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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIl9yZW9yZGVySXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiYWN0aW9uVGV4dHMiLCJnbG9iYWxUZXh0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInJlb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvcmRlclVwZGF0ZWQiLCJzZXRPcmRlclVwZGF0ZWQiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJzYXZlUmVvcmRlcmluZyIsIm1vZGVsIiwicmVvcmRlciIsInRvZ2xlUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsImNsb3NlIiwiRnJhZ21lbnQiLCJhZGQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwidmFsdWVzIiwibWFwIiwiaXRlbSIsIlJlb3JkZXJNb2R1bGVBY3Rpdml0eSIsImtleSIsImlkIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJDb25maXJtTW9kYWwiLCJjZW50ZXJlZCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJzaG93IiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwicmVmIiwidXNlUmVmIiwiY29udHJvbHMiLCJ1c2VEcmFnQ29udHJvbHMiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImFjdGl2aXR5IiwiZGVsZXRlSXRlbSIsImV2ZW50IiwiY3VycmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsImVkaXQiLCJ0YXJnZXQiLCJjb250YWlucyIsInN0b3BQcm9wYWdhdGlvbiIsImVkaXRBY3Rpdml0eSIsImZpbmQiLCJpUmVmIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwib25EcmFnIiwicHJldmVudERlZmF1bHQiLCJzdGFydCIsImRlc2NyaXB0aW9uIiwiZ2V0QWN0aXZpdHlEZXRhaWwiLCJCZ0ljb24iLCJ0eXBlIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiUHJvcGVydHkiLCJ2YWx1ZSIsIkl0ZW0iLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwicG9zaXRpb24iLCJsZWZ0Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic3R5bGUiLCJJY29uIiwiZGlzYWJsZWQiLCJfY2hpcHMiLCJBY3Rpdml0eVNwZWNzIiwic3BlY3MiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJpbmRleCIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQyIiwiX3ZhbGlkYXRpb24iLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlT25DbG9zZSIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNb2RhbEFjdGl2aXR5TGlzdCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImNscyIsImRlc2NyaXB0aW9uVHlwZXMiLCJfcm91dGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ1cmwiLCJpbnN0YW5jZUlkIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImJsb2NrIiwiY29udGludWUiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiX2hvb2tzIiwiX2Rlc2NyaXB0aW9uIiwiTW9kdWxlRGF0YSIsInVzZUJpbmRlciIsIm9iamVjdGl2ZSIsIk1vZHVsZUNvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9tYWluTGF5b3V0IiwiX3B1Ymxpc2giLCJIZWFkZXIiLCJzZXRUaXRsZSIsIm9uR2VuZXJhdGUiLCJub3RlcyIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJJbnB1dCIsIm93bmVyIiwiUmVhY3QiLCJfYmV5b25kX2NvbnRleHQiLCJfYWN0aXZpdGllcyIsIl9tb2RhbFNlbGVjdGlvbiIsIl9ib2R5IiwiX2hlYWRlciIsIk1vZHVsZU92ZXJ2aWV3IiwicHJvcHMiLCJyZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiUGFnZUNvbnRhaW5lciIsImlzRm9ybSIsIlByZWxvYWQiLCJBbmltYXRlZENvbnRhaW5lciIsIkNvbnRlbnRFZGl0YWJsZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiYXR0cnMiLCJjb21wbGV0ZWQiLCJnZXRJdGVtcyIsInJlc3BvbnNlIiwicHVibGlzaCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJyZXBsYWNlU3RhdGUiLCJsb2ciLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Jlb3JkZXItaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvYm9keS9kZXNjcmlwdGlvbi50c3giLCIvdHMvYm9keS9pbmRleC50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcHJlbG9hZC50c3giLCIvdHMvcHVibGlzaC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxHQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVSyxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVcsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFakQsT0FDQ1QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ00sTUFBTSxDQUFDQyxVQUFVLENBQUNDLEtBQUss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TyxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLElBQUk7Z0JBQ0gsTUFBTXJCLFVBQVUsR0FBR3NCLEtBQUssQ0FBQ2UsS0FBSyxDQUFDckMsVUFBVSxDQUFDc1AsUUFBUSxFQUFFO2dCQUNwRCxNQUFNQyxRQUFRLEdBQUcsTUFBTWpPLEtBQUssQ0FBQ2UsS0FBSyxDQUFDbU4sT0FBTyxDQUFDO2tCQUFFeFAsVUFBVTtrQkFBRWlILElBQUksRUFBRTtnQkFBUSxDQUFFLENBQUM7Z0JBRTFFLElBQUksQ0FBQ3NJLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2tCQUNyQjNDLFdBQUEsQ0FBQU0sWUFBWSxDQUFDc0MsV0FBVyxDQUFDLE9BQU8sRUFBRWpRLEtBQUssQ0FBQ2tRLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDO2tCQUM3RDs7Z0JBRUQ1SyxNQUFBLENBQUFjLEtBQUssQ0FBQytKLE9BQU8sQ0FBQ3BRLEtBQUssQ0FBQ3FHLEtBQUssQ0FBQ2dLLGVBQWUsQ0FBQztnQkFDMUMvRSxRQUFBLENBQUFDLE9BQU8sQ0FBQytFLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixDQUFDO2VBQzdELENBQUMsT0FBTzlMLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDOEwsR0FBRyxDQUFDL0wsQ0FBQyxDQUFDO2dCQUNkZSxNQUFBLENBQUFjLEtBQUssQ0FBQzNCLEtBQUssQ0FBQzFFLEtBQUssQ0FBQ3FHLEtBQUssQ0FBQ21LLHFCQUFxQixDQUFDOztZQUVoRCxDQUFDO1lBQ0QsT0FDQy9RLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEdBQUEsQ0FBQVcsUUFBUTtjQUFDVCxLQUFLLEVBQUVBLEtBQUssQ0FBQ1UsVUFBVTtjQUFFQyxJQUFJLEVBQUMsU0FBUztjQUFDeUksS0FBSyxFQUFFO1lBQUUsR0FDMUQzSixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMkIsR0FDekNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNSLFdBQUEsQ0FBQWdCLE1BQU07Y0FBQzBELFFBQVEsRUFBRXpDLEtBQUssQ0FBQ3lDLFFBQVE7Y0FBRXZELE9BQU8sRUFBRWEsUUFBUTtjQUFFZixPQUFPLEVBQUMsU0FBUztjQUFBLEdBQUs4TztZQUFLLEdBQzlFM1AsS0FBSyxDQUFDZ0IsT0FBTyxDQUFDK08sT0FBTyxDQUNkLENBQ0osQ0FDSTtVQUViIiwiaWdub3JlTGlzdCI6W119