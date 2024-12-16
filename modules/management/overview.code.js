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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
        hash: 4132299997,
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
          function ModuleActivities() {
            const {
              texts,
              activities,
              onSubmit,
              store,
              toggleModal
            } = (0, _context.useModuleContext)();
            const [items, setItems] = _react.default.useState(activities);
            const [dragging, setDragging] = _react.default.useState(null);
            _react.default.useEffect(() => {
              setItems(activities);
            }, [activities]);
            if (!activities.length) return _react.default.createElement(_empty.EmptyActivityList, null);
            const onReorder = items => {
              setDragging(true);
              setItems(items);
              store.model.activities.reorder(items);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h5", null, texts.activities.title), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "addActivity",
              as: "div"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: toggleModal
            }, texts.actions.add))), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "activities",
              as: "div"
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_framerMotion.Reorder.Group, {
              as: "div",
              values: items,
              onReorder: onReorder
            }, _react.default.createElement(_list.List, {
              className: "draft-activity-list",
              specs: setItems,
              items: items,
              control: _item.ModuleActivity
            })))));
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
        hash: 2439274615,
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
            item,
            index,
            specs
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
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const [showDelete, setShowDelete] = _react.default.useState(false);
            const activity = item;
            const handleDragEnd = () => {
              setIsDragging(false);
            };
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
              event.stopPropagation();
              store.editActivity(activity);
              const current = store.model.activities.items.find(item => item.id === activity.id);
              store.editActivity(current);
            };
            const iRef = _react.default.useRef(null);
            const imgCls = `activity-type__image image--${activity.type}`;
            const clsState = `activity__state state--${activity.state}`;
            const onDelete = event => {
              event.stopPropagation();
              toggleDelete();
            };
            const onDrag = event => controls.start(event);
            _react.default.useEffect(() => {
              const touchHandler = e => e.preventDefault();
              const iTag = iRef.current;
              if (iTag) {
                //@ts-ignore
                iTag.addEventListener('touchstart', touchHandler, {
                  passive: false
                });
                return () => {
                  //@ts-ignore
                  iTag.removeEventListener('touchstart', touchHandler, {
                    passive: false
                  });
                };
              }
            }, [iRef]);
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              className: "item-list__reorder-container",
              dragListener: false,
              dragControls: controls,
              onDragEnd: handleDragEnd,
              as: "div"
            }, _react.default.createElement("div", {
              ref: ref,
              className: "draft-activity-list__item",
              onClick: edit
            }, _react.default.createElement("section", {
              className: "list-item__column header__main-content"
            }, _react.default.createElement("div", {
              onPointerDown: onDrag,
              ref: iRef,
              className: "drag-icon__container"
            }, _react.default.createElement(_icons2.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            })), _react.default.createElement(_icons.BgIcon, {
              name: activity.type
            }), _react.default.createElement("div", {
              className: "activity__data-container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "activity__name"
            }, _react.default.createElement("h6", {
              className: "activity__type"
            }, texts.types[activity.type]), _react.default.createElement("span", null, activity.objective)))), _react.default.createElement("div", {
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
        hash: 363868758,
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
            return _react.default.createElement("div", null, _react.default.createElement("h3", null, texts.activities.createModal.title), _react.default.createElement(_list.List, {
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
        hash: 937081216,
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
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
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
            }, _react.default.createElement("strong", null, texts.module.owner, ": "), store.model.owner?.name)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm9uUmVvcmRlciIsIm1vZGVsIiwicmVvcmRlciIsIkZyYWdtZW50IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIkxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImdsb2JhbFRleHRzIiwidGV4dEFjdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJpdGVtIiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJjb250cm9scyIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJhY3Rpdml0eSIsImhhbmRsZURyYWdFbmQiLCJkZWxldGVJdGVtIiwiZXZlbnQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaWQiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJlZGl0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZWRpdEFjdGl2aXR5IiwiZmluZCIsImlSZWYiLCJpbWdDbHMiLCJ0eXBlIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwib25EcmFnIiwic3RhcnQiLCJ0b3VjaEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlUYWciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJdGVtIiwidmFsdWUiLCJkcmFnTGlzdGVuZXIiLCJkcmFnQ29udHJvbHMiLCJvbkRyYWdFbmQiLCJvblBvaW50ZXJEb3duIiwiSWNvbiIsIkJnSWNvbiIsInR5cGVzIiwib2JqZWN0aXZlIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIlByb3BlcnR5IiwiX2NoaXBzIiwiQWN0aXZpdHlTcGVjcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQyIiwiX3ZhbGlkYXRpb24iLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlT25DbG9zZSIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNb2RhbEFjdGl2aXR5TGlzdCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImNscyIsImRlc2NyaXB0aW9uVHlwZXMiLCJfcm91dGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ1cmwiLCJpbnN0YW5jZUlkIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImJsb2NrIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRvdXIiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImRlc2NyaXB0aW9uIiwib25FZGl0IiwidGFyZ2V0Iiwic2V0Iiwib25CbHVyIiwic2F2ZSIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl9ob29rcyIsIl9kZXNjcmlwdGlvbiIsIk1vZHVsZURhdGEiLCJ1c2VCaW5kZXIiLCJNb2R1bGVDb250ZXh0IiwiX2NvdmVySW1hZ2UiLCJfbWFpbkxheW91dCIsIl9wdWJsaXNoIiwiSGVhZGVyIiwic2V0VGl0bGUiLCJvbkdlbmVyYXRlIiwibm90ZXMiLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiSW5wdXQiLCJvd25lciIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2FjdGl2aXRpZXMiLCJfbW9kYWxTZWxlY3Rpb24iLCJfYm9keSIsIl9oZWFkZXIiLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImF0dHJzIiwiY29tcGxldGVkIiwiZ2V0SXRlbXMiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwicmVwbGFjZVN0YXRlIiwibG9nIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy9ib2R5L2Rlc2NyaXB0aW9uLnRzeCIsIi90cy9ib2R5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wdWJsaXNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxHQUFBLEdBQUFKLE9BQUE7VUFDTSxTQUFVSyxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQVcsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFakQsT0FDQ1QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ00sTUFBTSxDQUFDQyxVQUFVLENBQUNDLEtBQUssQ0FBTSxFQUN4Q2YsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sR0FBQSxDQUFBVyxRQUFRO2NBQUNULEtBQUssRUFBRUEsS0FBSyxDQUFDVSxVQUFVO2NBQUVDLElBQUksRUFBQztZQUFhLEdBQ3BEbEIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsV0FBQSxDQUFBZ0IsTUFBTTtjQUFDQyxPQUFPLEVBQUMsTUFBTTtjQUFD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