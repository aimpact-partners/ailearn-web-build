System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/cover-image.code", "@aimpact/ailearn-app@0.3.1/main-layout.widget"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ComponentsCoverImageCode) {
      dependency_15 = _aimpactAilearnApp031ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_16 = _aimpactAilearnApp031MainLayoutWidget;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm9uUmVvcmRlciIsIm1vZGVsIiwicmVvcmRlciIsIkZyYWdtZW50IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIkxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImdsb2JhbFRleHRzIiwidGV4dEFjdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJpdGVtIiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJjb250cm9scyIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJhY3Rpdml0eSIsImhhbmRsZURyYWdFbmQiLCJkZWxldGVJdGVtIiwiZXZlbnQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaWQiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJlZGl0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZWRpdEFjdGl2aXR5IiwiZmluZCIsImlSZWYiLCJpbWdDbHMiLCJ0eXBlIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwib25EcmFnIiwic3RhcnQiLCJ0b3VjaEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlUYWciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJJdGVtIiwidmFsdWUiLCJkcmFnTGlzdGVuZXIiLCJkcmFnQ29udHJvbHMiLCJvbkRyYWdFbmQiLCJvblBvaW50ZXJEb3duIiwiSWNvbiIsIkJnSWNvbiIsInR5cGVzIiwib2JqZWN0aXZlIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIlByb3BlcnR5IiwiX2NoaXBzIiwiQWN0aXZpdHlTcGVjcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQyIiwiX3ZhbGlkYXRpb24iLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlT25DbG9zZSIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNb2RhbEFjdGl2aXR5TGlzdCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImNscyIsImRlc2NyaXB0aW9uVHlwZXMiLCJfcm91dGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ1cmwiLCJpbnN0YW5jZUlkIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImJsb2NrIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRvdXIiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImRlc2NyaXB0aW9uIiwib25FZGl0IiwidGFyZ2V0Iiwic2V0Iiwib25CbHVyIiwic2F2ZSIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl9ob29rcyIsIl9kZXNjcmlwdGlvbiIsIk1vZHVsZURhdGEiLCJ1c2VCaW5kZXIiLCJNb2R1bGVDb250ZXh0IiwiX2NvdmVySW1hZ2UiLCJfbWFpbkxheW91dCIsIl9wdWJsaXNoIiwiSGVhZGVyIiwic2V0VGl0bGUiLCJvbkdlbmVyYXRlIiwibm90ZXMiLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiSW5wdXQiLCJvd25lciIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2FjdGl2aXRpZXMiLCJfbW9kYWxTZWxlY3Rpb24iLCJfYm9keSIsIl9oZWFkZXIiLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImF0dHJzIiwiY29tcGxldGVkIiwiZ2V0SXRlbXMiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwicmVwbGFjZVN0YXRlIiwibG9nIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy9ib2R5L2Rlc2NyaXB0aW9uLnRzeCIsIi90cy9ib2R5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wdWJsaXNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksR0FBQSxHQUFBSixPQUFBO1VBQ00sU0FBVUssaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFXLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRWpELE9BQ0NULE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNNLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLLENBQU0sRUFDeENmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEdBQUEsQ0FBQVcsUUFBUTtjQUFDVCxLQUFLLEVBQUVBLEtBQUssQ0FBQ1UsVUFBVTtjQUFFQyxJQUFJLEVBQUM7WUFBYSxHQUNwRGxCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNSLFdBQUEsQ0FBQWdCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLE1BQU07Y0FBQ0Ms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