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
        hash: 3254012336,
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
            _react.default.useEffect(() => {
              setItems(activities);
            }, [activities]);
            if (!activities.length) return _react.default.createElement(_empty.EmptyActivityList, null);
            const onReorder = items => {
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
              className: "draft-activity-list mobile-column-list",
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
        hash: 3788122760,
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
            const description = store.getActivityDetail(activity.objective) ?? texts.item.empty;
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              className: "item-list__reorder-container",
              as: "div"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwib25SZW9yZGVyIiwibW9kZWwiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJhZGQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwidmFsdWVzIiwiTGlzdCIsInNwZWNzIiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiX21vZGFsIiwiRGVsZXRlTW9kYWwiLCJvbkNsb3NlIiwib25Db25maXJtIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0QWN0aW9ucyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJlIiwiY29uc29sZSIsImVycm9yIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwic2hvdyIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIml0ZW0iLCJyZWYiLCJ1c2VSZWYiLCJjb250cm9scyIsInVzZURyYWdDb250cm9scyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiYWN0aXZpdHkiLCJkZWxldGVJdGVtIiwiZXZlbnQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaWQiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJlZGl0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QWN0aXZpdHkiLCJmaW5kIiwiaVJlZiIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInByZXZlbnREZWZhdWx0Iiwic3RhcnQiLCJkZXNjcmlwdGlvbiIsImdldEFjdGl2aXR5RGV0YWlsIiwib2JqZWN0aXZlIiwiSXRlbSIsInZhbHVlIiwib25Qb2ludGVyRG93biIsIkljb24iLCJCZ0ljb24iLCJ0eXBlIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiUHJvcGVydHkiLCJfY2hpcHMiLCJBY3Rpdml0eVNwZWNzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwiaW5kZXgiLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0MiIsIl92YWxpZGF0aW9uIiwiTW9kYWxTZWxlY3Rpb24iLCJzZXRBY3Rpdml0eSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ2aWV3Iiwic2V0VmlldyIsImhhbmRsZU9uQ2xvc2UiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJjbHMiLCJkZXNjcmlwdGlvblR5cGVzIiwiX3JvdXRpbmciLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwidXJsIiwiaW5zdGFuY2VJZCIsImNyZWF0ZU1vZGFsIiwiYXZhaWxhYmxlVHlwZXMiLCJibG9jayIsImRpc2FibGVkIiwiY29udGludWUiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiX2hvb2tzIiwiX2Rlc2NyaXB0aW9uIiwiTW9kdWxlRGF0YSIsInVzZUJpbmRlciIsIk1vZHVsZUNvbnRleHQiLCJfY292ZXJJbWFnZSIsIl9tYWluTGF5b3V0IiwiX3B1Ymxpc2giLCJIZWFkZXIiLCJzZXRUaXRsZSIsIm9uR2VuZXJhdGUiLCJub3RlcyIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJJbnB1dCIsIm93bmVyIiwiUmVhY3QiLCJfYmV5b25kX2NvbnRleHQiLCJfYWN0aXZpdGllcyIsIl9tb2RhbFNlbGVjdGlvbiIsIl9ib2R5IiwiX2hlYWRlciIsIk1vZHVsZU92ZXJ2aWV3IiwicHJvcHMiLCJyZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiUGFnZUNvbnRhaW5lciIsIlByZWxvYWQiLCJBbmltYXRlZENvbnRhaW5lciIsIkNvbnRlbnRFZGl0YWJsZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiYXR0cnMiLCJjb21wbGV0ZWQiLCJnZXRJdGVtcyIsInJlc3BvbnNlIiwicHVibGlzaCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJyZXBsYWNlU3RhdGUiLCJsb2ciLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL2JvZHkvZGVzY3JpcHRpb24udHN4IiwiL3RzL2JvZHkvaW5kZXgudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3ByZWxvYWQudHN4IiwiL3RzL3B1Ymxpc2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLEdBQUEsR0FBQUosT0FBQTtVQUNNLFNBQVVLLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBVyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUVqRCxPQUNDVCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBeUIsR0FDdkNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUErQixHQUNoRFosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDTSxNQUFNLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFNLEVBQ3hDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixHQUFBLENBQUFXLFFBQVE7Y0FBQ1QsS0FBSyxFQUFFQSxLQUFLLENBQUNVLFVBQVU7Y0FBRUMsSUFBSSxFQUFDO1lBQWEsR0FDcERsQixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixXQUFBLENBQUFnQixNQUFNO2NBQUNDLE9BQU8sRUFBQyxNQUFNO2NBQUNDLElBQUksRUFBQyxLQUFLO2NBQUNDLE9BQU8sRUFBRWQ7WUFBVyxHQUNwREQsS0FBSyxDQUFDTSxNQUFNLENBQUNVLE9BQU8sQ0FBQ0MsV0FBVyxDQUN6QixDQUNDLENBQ0gsRUFDVHhCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEdBQUEsQ0FBQVcsUUFBUTtjQUFDVCxLQUFLLEVBQUVBLEtBQUssQ0FBQ1UsVUFBVTtjQUFFQyxJQUFJLEVBQUMsWUFBWTtjQUFDTyxFQUFFLEVBQUM7WUFBSyxHQUM1RHpCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNULE1BQUEsQ0FBQXdCLEtBQUssUUFDTDFCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ00sTUFBTSxDQUFDQyxVQUFVLENBQUNhLEtBQUssQ0FBQ1osS0FBSyxDQUFNLEVBQzlDZixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNNLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDYSxLQUFLLENBQUNDLElBQUksQ0FBUSxDQUMxQyxDQUNFLENBQ047VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkEsSUFBQXZCLEdBQUEsR0FBQUosT0FBQTtVQUNBLElBQUE0QixhQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTZCLEtBQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBOEIsS0FBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUErQixLQUFBLEdBQUEvQixPQUFBO1VBRU0sU0FBVWdDLGdCQUFnQkEsQ0FBQTtZQUMvQixNQUFNO2NBQUUxQixLQUFLO2NBQUVPLFVBQVU7Y0FBRW9CLFFBQVE7Y0FBRUMsS0FBSztjQUFFM0I7WUFBVyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUU5RSxNQUFNLENBQUMyQixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHckMsTUFBQSxDQUFBVSxPQUFLLENBQUM0QixRQUFRLENBQUN4QixVQUFVLENBQUM7WUFFcERkLE1BQUEsQ0FBQVUsT0FBSyxDQUFDNkIsU0FBUyxDQUFDLE1BQUs7Y0FDcEJGLFFBQVEsQ0FBQ3ZCLFVBQVUsQ0FBQztZQUNyQixDQUFDLEVBQUUsQ0FBQ0EsVUFBVSxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDQSxVQUFVLENBQUMwQixNQUFNLEVBQUUsT0FBT3hDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNULE1BQUEsQ0FBQUksaUJBQWlCLE9BQUc7WUFFcEQsTUFBTW1DLFNBQVMsR0FBR0wsS0FBSyxJQUFHO2NBQ3pCRCxLQUFLLENBQUNPLEtBQUssQ0FBQzVCLFVBQVUsQ0FBQzZCLE9BQU8sQ0FBQ1AsS0FBSyxDQUFDO1lBQ3RDLENBQUM7WUFFRCxPQUNDcEMsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQVgsTUFBQSxDQUFBVSxPQUFBLENBQUFrQyxRQUFBLFFBQ0M1QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDQyxLQUFLLENBQU0sRUFDakNmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEdBQUEsQ0FBQVcsUUFBUTtjQUFDVCxLQUFLLEVBQUVBLEtBQUssQ0FBQ1UsVUFBVTtjQUFFQyxJQUFJLEVBQUMsYUFBYTtjQUFDTyxFQUFFLEVBQUM7WUFBSyxHQUM3RHpCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNSLFdBQUEsQ0FBQWdCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLE1BQU07Y0FBQ0UsT0FBTyxFQUFFZDtZQUFXLEdBQ3pDRCxLQUFLLENBQUNnQixPQUFPLENBQUNzQixHQUFHLENBQ1YsQ0FDQyxDQUNILEVBRVQ3QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixHQUFBLENBQUFXLFFBQVE7Y0FBQ1QsS0FBSyxFQUFFQSxLQUFLLENBQUNVLFVBQVU7Y0FBRUMsSUFBSSxFQUFDLFlBQVk7Y0FBQ08sRUFBRSxFQUFDO1lBQUssR0FDNUR6QixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUIsS0FBQSxDQUFBZ0IsSUFBSTtjQUFDWixRQUFRLEVBQUVBO1lBQVEsR0FDdkJsQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0IsYUFBQSxDQUFBa0IsT0FBTyxDQUFDQyxLQUFLO2NBQUN2QixFQUFFLEVBQUMsS0FBSztjQUFDd0IsTUFBTSxFQUFFYixLQUFLO2NBQUVLLFNBQVMsRUFBRUE7WUFBUyxHQUMxRHpDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQixLQUFBLENBQUFtQixJQUFJO2NBQ0p0QyxTQUFTLEVBQUMsd0NBQXdDO2NBQ2xEdUMsS0FBSyxFQUFFZCxRQUFRO2NBQ2ZELEtBQUssRUFBRUEsS0FBSztjQUNaZ0IsT0FBTyxFQUFFcEIsS0FBQSxDQUFBcUI7WUFBYyxFQUN0QixDQUNhLENBQ1YsQ0FDRyxDQUNUO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRBLElBQUFDLE1BQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFFTSxTQUFVc0QsV0FBV0EsQ0FBQztZQUFFQyxPQUFPO1lBQUVDO1VBQVMsQ0FBRTtZQUNqRCxNQUFNO2NBQ0xsRCxLQUFLO2NBQ0w0QixLQUFLLEVBQUU7Z0JBQ051QixXQUFXLEVBQUU7a0JBQUVuQyxPQUFPLEVBQUVvQztnQkFBVztjQUFFO1lBQ3JDLENBQ0QsR0FBRyxJQUFBdkQsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNLENBQUNtRCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN0QsTUFBQSxDQUFBVSxPQUFLLENBQUM0QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1oQixPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzFCLElBQUk7Z0JBQ0h1QyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNSixTQUFTLEVBQUU7Z0JBQ2pCSSxXQUFXLENBQUMsS0FBSyxDQUFDO2VBQ2xCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1ROLE9BQU8sRUFBRTs7WUFFWCxDQUFDO1lBQ0QsT0FDQ3hELE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUMyQyxNQUFBLENBQUFXLFlBQVk7Y0FDWlIsU0FBUyxFQUFFbkMsT0FBTztjQUNsQjRDLFFBQVE7Y0FDUkMsUUFBUSxFQUFFWCxPQUFPO2NBQ2pCakMsT0FBTyxFQUFFO2dCQUNSNkMsT0FBTyxFQUFFO2tCQUNSaEQsT0FBTyxFQUFFLFNBQVM7a0JBQ2xCaUQsS0FBSyxFQUFFVixXQUFXLENBQUNTO2lCQUNuQjtnQkFDREUsTUFBTSxFQUFFO2tCQUFFRCxLQUFLLEVBQUVWLFdBQVcsQ0FBQ1csTUFBTTtrQkFBRWxELE9BQU8sRUFBRSxTQUFTO2tCQUFFbUQsUUFBUSxFQUFFO2dCQUFJO2VBQ3ZFO2NBQ0RDLElBQUk7Y0FDSnpELEtBQUssRUFBRVIsS0FBSyxDQUFDTyxVQUFVLENBQUMyRCxNQUFNLENBQUMxRCxLQUFLO2NBQ3BDYSxJQUFJLEVBQUVyQixLQUFLLENBQUNPLFVBQVUsQ0FBQzJELE1BQU0sQ0FBQ0M7WUFBUSxFQUNyQztVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBQyxNQUFBLEdBQUExRSxPQUFBO1VBRUEsSUFBQTRCLGFBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBMkUsT0FBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUE0RSxNQUFBLEdBQUE1RSxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQTZFLFlBQUEsR0FBQTdFLE9BQUE7VUFFTSxTQUFVb0QsY0FBY0EsQ0FBQztZQUFFMEI7VUFBSSxDQUFFO1lBQ3RDLE1BQU07Y0FDTHhFLEtBQUssRUFBRTtnQkFBRWdCLE9BQU87Z0JBQUVULFVBQVUsRUFBRVA7Y0FBSyxDQUFFO2NBQ3JDNEI7WUFBSyxDQUNMLEdBQUcsSUFBQS9CLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTXVFLEdBQUcsR0FBRyxJQUFBaEYsTUFBQSxDQUFBaUYsTUFBTSxFQUFDLElBQUksQ0FBQztZQUN4QixNQUFNQyxRQUFRLEdBQUcsSUFBQXJELGFBQUEsQ0FBQXNELGVBQWUsR0FBRTtZQUVsQyxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdyRixNQUFBLENBQUFVLE9BQUssQ0FBQzRCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTWdELFFBQVEsR0FBR1AsSUFBSTtZQUVyQixNQUFNUSxVQUFVLEdBQUdDLEtBQUssSUFBRztjQUMxQixJQUFJO2dCQUNIUixHQUFHLENBQUNTLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDN0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDckNWLEtBQUssQ0FBQ08sS0FBSyxDQUFDNUIsVUFBVSxDQUFDNkUsTUFBTSxDQUFDWixJQUFJLENBQUNhLEVBQUUsQ0FBQztlQUN0QyxDQUFDLE9BQU85QixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7Z0JBQ2hCZSxNQUFBLENBQUFnQixLQUFLLENBQUM3QixLQUFLLENBQUNGLENBQUMsQ0FBQ2dDLE9BQU8sQ0FBQzs7WUFFeEIsQ0FBQztZQUNELE1BQU1DLFlBQVksR0FBR0EsQ0FBQSxLQUFNVixhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO1lBRXJELE1BQU1ZLElBQUksR0FBR1IsS0FBSyxJQUFHO2NBQ3BCLElBQUlBLEtBQUssQ0FBQ1MsTUFBTSxDQUFDUCxTQUFTLENBQUNRLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO2NBQzFEVixLQUFLLENBQUNXLGVBQWUsRUFBRTtjQUN2QmhFLEtBQUssQ0FBQ2lFLFlBQVksQ0FBQ2QsUUFBUSxDQUFDO2NBQzVCLE1BQU1HLE9BQU8sR0FBR3RELEtBQUssQ0FBQ08sS0FBSyxDQUFDNUIsVUFBVSxDQUFDc0IsS0FBSyxDQUFDaUUsSUFBSSxDQUFDdEIsSUFBSSxJQUFJQSxJQUFJLENBQUNhLEVBQUUsS0FBS04sUUFBUSxDQUFDTSxFQUFFLENBQUM7Y0FDbEZ6RCxLQUFLLENBQUNpRSxZQUFZLENBQUNYLE9BQU8sQ0FBQztZQUM1QixDQUFDO1lBQ0QsTUFBTWEsSUFBSSxHQUFHdEcsTUFBQSxDQUFBVSxPQUFLLENBQUN1RSxNQUFNLENBQXdCLElBQUksQ0FBQztZQUV0RCxNQUFNc0IsUUFBUSxHQUFHLDBCQUEwQmpCLFFBQVEsQ0FBQ2tCLEtBQUssRUFBRTtZQUMzRCxNQUFNQyxRQUFRLEdBQUdqQixLQUFLLElBQUc7Y0FDeEJBLEtBQUssQ0FBQ1csZUFBZSxFQUFFO2NBQ3ZCSixZQUFZLEVBQUU7WUFDZixDQUFDO1lBRUQsTUFBTVcsTUFBTSxHQUFHbEIsS0FBSyxJQUFHO2NBQ3RCQSxLQUFLLENBQUNXLGVBQWUsRUFBRTtjQUN2QlgsS0FBSyxDQUFDbUIsY0FBYyxFQUFFO2NBQ3RCekIsUUFBUSxDQUFDMEIsS0FBSyxDQUFDcEIsS0FBSyxDQUFDO1lBQ3RCLENBQUM7WUFFRCxNQUFNcUIsV0FBVyxHQUFHMUUsS0FBSyxDQUFDMkUsaUJBQWlCLENBQUN4QixRQUFRLENBQUN5QixTQUFTLENBQUMsSUFBSXhHLEtBQUssQ0FBQ3dFLElBQUksQ0FBQ3BELEtBQUs7WUFFbkYsT0FDQzNCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNrQixhQUFBLENBQUFrQixPQUFPLENBQUNpRSxJQUFJO2NBQUNDLEtBQUssRUFBRWxDLElBQUk7Y0FBRW5FLFNBQVMsRUFBQyw4QkFBOEI7Y0FBQ2EsRUFBRSxFQUFDO1lBQUssR0FDM0V6QixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLcUUsR0FBRyxFQUFFQSxHQUFHO2NBQUVwRSxTQUFTLEVBQUMsOENBQThDO2NBQUNVLE9BQU8sRUFBRTBFO1lBQUksR0FDcEZoRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBeUMsR0FDM0RaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLdUcsYUFBYSxFQUFFUixNQUFNO2NBQUUxQixHQUFHLEVBQUVzQixJQUFJO2NBQUUxRixTQUFTLEVBQUM7WUFBc0IsR0FDdEVaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNpRSxPQUFBLENBQUF1QyxJQUFJO2NBQUM5RixJQUFJLEVBQUMsTUFBTTtjQUFDVCxTQUFTLEVBQUM7WUFBbUIsRUFBRyxDQUM3QyxFQUNOWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxjQUNDWCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0UsTUFBQSxDQUFBeUMsTUFBTTtjQUFDbEcsSUFBSSxFQUFFb0UsUUFBUSxDQUFDK0I7WUFBSSxFQUFJLENBQzFCLENBQ0QsRUFFTnJILE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE0RCxHQUMxRVosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWdCLEdBQ2xDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBZ0IsR0FBRUwsS0FBSyxDQUFDK0csS0FBSyxDQUFDaEMsUUFBUSxDQUFDK0IsSUFBSSxDQUFDLENBQU0sRUFDaEVySCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxlQUFPa0csV0FBVyxDQUFRLENBQ2pCLENBQ0wsQ0FDRyxFQUNWN0csTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNDLEdBQ3BEWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUUyRjtZQUFRLEdBQUdoRyxLQUFLLENBQUNnSCxNQUFNLENBQUNqQyxRQUFRLENBQUNrQixLQUFLLENBQUMsQ0FBTyxFQUM5RHhHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFTLEdBQ3ZCWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUUsT0FBQSxDQUFBNEMsVUFBVTtjQUFDekcsS0FBSyxFQUFFUSxPQUFPLENBQUN5RSxJQUFJO2NBQUUzRSxJQUFJLEVBQUMsTUFBTTtjQUFDVCxTQUFTLEVBQUMsUUFBUTtjQUFDVSxPQUFPLEVBQUUwRTtZQUFJLEVBQUksRUFDakZoRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUUsT0FBQSxDQUFBNEMsVUFBVTtjQUFDekcsS0FBSyxFQUFFUSxPQUFPLENBQUNrRCxNQUFNO2NBQUVwRCxJQUFJLEVBQUMsUUFBUTtjQUFDVCxTQUFTLEVBQUMsUUFBUTtjQUFDVSxPQUFPLEVBQUVtRjtZQUFRLEVBQUksQ0FDcEYsQ0FDRCxDQUNELEVBRUxyQixVQUFVLElBQUlwRixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUUsWUFBQSxDQUFBdkIsV0FBVztjQUFDRSxTQUFTLEVBQUU4QixVQUFVO2NBQUUvQixPQUFPLEVBQUV1QztZQUFZLEVBQUksQ0FDOUQ7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEZBLElBQUEvRixNQUFBLEdBQUFDLE9BQUE7VUFDTSxTQUFVd0gsUUFBUUEsQ0FBQztZQUFFdkcsSUFBSTtZQUFFK0Y7VUFBSyxDQUFFO1lBQ3ZDLElBQUksQ0FBQ0EsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUN2QixPQUNDakgsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsY0FDQ1gsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsYUFBS08sSUFBSSxDQUFNLEVBQ2ZsQixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxlQUFPc0csS0FBSyxDQUFRLENBQ2Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBakgsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXlILE1BQUEsR0FBQXpILE9BQUE7VUFFQSxJQUFBOEIsS0FBQSxHQUFBOUIsT0FBQTtVQUNNLFNBQVUwSCxhQUFhQSxDQUFDO1lBQUV4RSxLQUFLO1lBQUVrRTtVQUFJLENBQUU7WUFDNUMsT0FDQ3JILE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUFYLE1BQUEsQ0FBQVUsT0FBQSxDQUFBa0MsUUFBQSxRQUNFTyxLQUFLLENBQUN5RSxJQUFJLElBQUk1SCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0csTUFBQSxDQUFBRyxJQUFJO2NBQUN6RyxPQUFPLEVBQUM7WUFBUyxHQUFFK0IsS0FBSyxDQUFDeUUsSUFBSSxDQUFRLEVBQzFENUgsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29CLEtBQUEsQ0FBQStGLFNBQVM7Y0FBQzNFLEtBQUssRUFBRUEsS0FBSztjQUFFa0UsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDckM7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBckgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQThCLEtBQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFFQSxNQUFNK0csSUFBSSxHQUFHQSxDQUFDO1lBQUVlO1VBQUksQ0FBRSxLQUFLL0gsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsYUFBS29ILElBQUksQ0FBTTtVQUMxQyxNQUFNQyxZQUFZLEdBQUdBLENBQUM7WUFBRUQsSUFBSTtZQUFFRTtVQUFLLENBQUUsS0FBSTtZQUN4QyxNQUFNO2NBQUVDO1lBQVEsQ0FBRSxHQUFHSCxJQUFJO1lBQ3pCLE9BQU8vSCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxhQUFLdUgsUUFBUSxDQUFNO1VBQzNCLENBQUM7VUFFSyxTQUFVSixTQUFTQSxDQUFDO1lBQUVULElBQUk7WUFBRWxFO1VBQUssQ0FBRTtZQUN4QyxNQUFNO2NBQ0w1QyxLQUFLLEVBQUU7Z0JBQUVPLFVBQVUsRUFBRVA7Y0FBSztZQUFFLENBQzVCLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNNkcsS0FBSyxHQUFHO2NBQ2IsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLEVBQUVOLElBQUksQ0FBQztjQUNsQyxpQkFBaUIsRUFBRSxDQUFDLFdBQVcsRUFBRWdCLFlBQVksQ0FBQztjQUU5Q0csTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFbkIsSUFBSTthQUMxQjtZQUVELElBQUksQ0FBQ00sS0FBSyxDQUFDRCxJQUFJLENBQUMsRUFBRSxPQUFPLElBQUk7WUFFN0IsTUFBTSxDQUFDZSxTQUFTLEVBQUVDLFdBQVcsQ0FBQyxHQUFHZixLQUFLLENBQUNELElBQUksQ0FBQztZQUU1QyxNQUFNaUIsU0FBUyxHQUNkakIsSUFBSSxLQUFLLGdCQUFnQixHQUN0QmxFLEtBQUssQ0FBQ29GLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FDbENwRixLQUFLLENBQUNxRixXQUFXLEdBQ2pCckYsS0FBSyxDQUFDaUYsU0FBUyxDQUFDLEdBQ2pCakYsS0FBSyxDQUFDaUYsU0FBUyxDQUFDO1lBQ3BCLElBQUksQ0FBQ0UsU0FBUyxJQUFLRyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0osU0FBUyxDQUFDLElBQUksQ0FBQ0EsU0FBUyxDQUFDOUYsTUFBTyxFQUFFLE9BQU8sSUFBSTtZQUU5RSxPQUNDeEMsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQVgsTUFBQSxDQUFBVSxPQUFBLENBQUFrQyxRQUFBLFFBQ0M1QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUM2SCxTQUFTLENBQUMsQ0FBTSxFQUMzQnBJLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQixLQUFBLENBQUFtQixJQUFJO2NBQUN0QyxTQUFTLEVBQUMsZ0JBQWdCO2NBQUN3QixLQUFLLEVBQUVrRyxTQUFTO2NBQUVsRixPQUFPLEVBQUVpRjtZQUFXLEVBQUksQ0FDekU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQXJJLE1BQUEsR0FBQUMsT0FBQTtVQVlPLE1BQU0wSSxxQkFBcUIsR0FBQUMsT0FBQSxDQUFBRCxxQkFBQSxHQUFHM0ksTUFBQSxDQUFBVSxPQUFLLENBQUNtSSxhQUFhLENBQWtCLEVBQXFCLENBQUM7VUFDekYsTUFBTUMsd0JBQXdCLEdBQUdBLENBQUEsS0FBTTlJLE1BQUEsQ0FBQVUsT0FBSyxDQUFDcUksVUFBVSxDQUFDSixxQkFBcUIsQ0FBQztVQUFDQyxPQUFBLENBQUFFLHdCQUFBLEdBQUFBLHdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1p0RixJQUFBeEYsTUFBQSxHQUFBckQsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUErSSxTQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQThCLEtBQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBZ0osV0FBQSxHQUFBaEosT0FBQTtVQUVNLFNBQVVpSixjQUFjQSxDQUFDO1lBQUUxRSxJQUFJO1lBQUVoQjtVQUFPLENBQUU7WUFDL0MsTUFBTTtjQUFFckIsS0FBSztjQUFFNUI7WUFBSyxDQUFFLEdBQUcsSUFBQUgsUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUUzQyxNQUFNLENBQUM2RSxRQUFRLEVBQUU2RCxXQUFXLENBQUMsR0FBR25KLE1BQUEsQ0FBQVUsT0FBSyxDQUFDNEIsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNwRCxNQUFNLENBQUM4RyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckosTUFBQSxDQUFBVSxPQUFLLENBQUM0QixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3BELE1BQU0sQ0FBQ2dILElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUd2SixNQUFBLENBQUFVLE9BQUssQ0FBQzRCLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFOUMsSUFBSSxDQUFDa0MsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixNQUFNZ0YsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUJELE9BQU8sQ0FBQyxNQUFNLENBQUM7Y0FDZi9GLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFFRCxJQUFJLENBQUNyQixLQUFLLENBQUNPLEtBQUssQ0FBQytHLEtBQUssRUFBRSxPQUFPekosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NJLFdBQUEsQ0FBQVMsZUFBZTtjQUFDbEcsT0FBTyxFQUFFZ0c7WUFBYSxFQUFJO1lBQzFFLE1BQU1HLFlBQVksR0FBRztjQUFFbkcsT0FBTztjQUFFOEIsUUFBUTtjQUFFNkQsV0FBVztjQUFFSSxPQUFPO2NBQUVILFFBQVE7Y0FBRUM7WUFBVyxDQUFFO1lBRXZGLE9BQ0NySixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUksU0FBQSxDQUFBTCxxQkFBcUIsQ0FBQ2lCLFFBQVE7Y0FBQzNDLEtBQUssRUFBRTBDO1lBQVksR0FDbEQzSixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkMsTUFBQSxDQUFBdUcsS0FBSztjQUFDQyxhQUFhLEVBQUUsS0FBSztjQUFFdEYsSUFBSTtjQUFDaEIsT0FBTyxFQUFFZ0c7WUFBYSxHQUN2RHhKLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNvQixLQUFBLENBQUFnSSxpQkFBaUI7Y0FBQ3ZHLE9BQU8sRUFBRWdHO1lBQWEsRUFBSSxDQUN0QyxDQUN3QjtVQUVuQztVQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNELElBQUE3RSxNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBRU8sTUFBTStKLHFCQUFxQixHQUFHQSxDQUFDO1lBQUVqRixJQUFJO1lBQUVxRSxRQUFRO1lBQUVDO1VBQVcsQ0FBRSxLQUFJO1lBQ3hFLE1BQU07Y0FBRTlJO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTWEsT0FBTyxHQUFHa0UsS0FBSyxJQUFJNkQsV0FBVyxDQUFDdEUsSUFBSSxDQUFDO1lBQzFDLE1BQU1rRixHQUFHLEdBQUcsdUNBQXVDbEYsSUFBSSxHQUFHQSxJQUFJLEtBQUtxRSxRQUFRLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUVoRyxPQUNDcEosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBSUMsU0FBUyxFQUFFcUosR0FBRztjQUFFM0ksT0FBTyxFQUFFQTtZQUFPLEdBQ25DdEIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dFLE1BQUEsQ0FBQXlDLE1BQU07Y0FBQ2xHLElBQUksRUFBRTZEO1lBQUksRUFBSSxFQUN0Qi9FLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDd0csS0FBSyxDQUFDdkMsSUFBSSxDQUFDLENBQU0sRUFDdkMvRSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxlQUFPSixLQUFLLENBQUNPLFVBQVUsQ0FBQ29KLGdCQUFnQixDQUFDbkYsSUFBSSxDQUFDLENBQVEsQ0FDakQsQ0FDRjtVQUVQLENBQUM7VUFBQzZELE9BQUEsQ0FBQW9CLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRixJQUFBRyxRQUFBLEdBQUFsSyxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQThCLEtBQUEsR0FBQTlCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBK0ksU0FBQSxHQUFBL0ksT0FBQTtVQUNBLElBQUErQixLQUFBLEdBQUEvQixPQUFBO1VBRU0sU0FBVThKLGlCQUFpQkEsQ0FBQztZQUFFdkc7VUFBTyxDQUFFO1lBQzVDLE1BQU07Y0FBRXJCLEtBQUs7Y0FBRTVCO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFM0MsTUFBTTtjQUFFMkksUUFBUTtjQUFFQztZQUFXLENBQUUsR0FBRyxJQUFBTCxTQUFBLENBQUFGLHdCQUF3QixHQUFFO1lBRTVELE1BQU01RyxRQUFRLEdBQUcsTUFBTXNELEtBQUssSUFBRztjQUM5QkEsS0FBSztjQUNMLE1BQU1GLFFBQVEsR0FBUSxNQUFNbkQsS0FBSyxDQUFDTyxLQUFLLENBQUM1QixVQUFVLENBQUMrQixHQUFHLENBQUN1RyxRQUFRLEVBQUUsSUFBSSxDQUFDO2NBQ3RFakgsS0FBSyxDQUFDaUUsWUFBWSxDQUFDZCxRQUFRLENBQUM7Y0FDNUI2RSxRQUFBLENBQUFDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLEdBQUdsSSxLQUFLLENBQUNtSSxHQUFHLGVBQWVoRixRQUFRLENBQUNpRixVQUFVLEVBQUUsQ0FBQztjQUNuRS9HLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFFRCxPQUNDeEQsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNPLFVBQVUsQ0FBQzBKLFdBQVcsQ0FBQ3pKLEtBQUssQ0FBTSxFQUM3Q2YsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29CLEtBQUEsQ0FBQW1CLElBQUk7Y0FDSnRDLFNBQVMsRUFBQyxxQkFBcUI7Y0FDL0J1QyxLQUFLLEVBQUU7Z0JBQUVpRyxRQUFRO2dCQUFFQztjQUFXLENBQUU7Y0FDaENqSCxLQUFLLEVBQUVELEtBQUssQ0FBQ08sS0FBSyxDQUFDNUIsVUFBVSxDQUFDMkosY0FBYztjQUM1Q3JILE9BQU8sRUFBRXBCLEtBQUEsQ0FBQWdJO1lBQXFCLEVBQzdCLEVBQ0ZoSyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNSLFdBQUEsQ0FBQWdCLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ3NKLEtBQUs7Y0FBQ3BKLE9BQU8sRUFBRVksUUFBUTtjQUFFeUksUUFBUSxFQUFFLENBQUN2QjtZQUFRLEdBQ3BFakgsS0FBSyxDQUFDdUIsV0FBVyxDQUFDbkMsT0FBTyxDQUFDcUosUUFBUSxDQUMzQixDQUNELENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQXRILE1BQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFFTSxTQUFVeUosZUFBZUEsQ0FBQztZQUFFbEc7VUFBTyxDQUFFO1lBQzFDLE1BQU07Y0FBRXJCLEtBQUs7Y0FBRTVCO1lBQUssQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFM0MsT0FDQ1QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJDLE1BQUEsQ0FBQXVILFVBQVU7Y0FBQ3JHLElBQUk7Y0FBQ2hCLE9BQU8sRUFBRUE7WUFBTyxHQUNoQ3hELE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ08sVUFBVSxDQUFDMEosV0FBVyxDQUFDTSxlQUFlLENBQU0sRUFDdkQ5SyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSixLQUFLLENBQUNPLFVBQVUsQ0FBQzBKLFdBQVcsQ0FBQ08sVUFBVSxDQUFLLENBQzNDLENBQ007VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBMUssR0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQTZCLEtBQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFFTSxTQUFVK0ssaUJBQWlCQSxDQUFDLEVBQUU7WUFDbkMsTUFBTTtjQUNMekssS0FBSyxFQUFFO2dCQUFFTSxNQUFNLEVBQUVvSyxXQUFXO2dCQUFFaEssVUFBVSxFQUFFaUs7Y0FBSSxDQUFFO2NBQ2hEL0k7WUFBSyxDQUNMLEdBQUcsSUFBQS9CLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTSxDQUFDMEssT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3BMLE1BQUEsQ0FBQVUsT0FBSyxDQUFDNEIsUUFBUSxDQUFDSCxLQUFLLENBQUNPLEtBQUssQ0FBQ21FLFdBQVcsQ0FBQztZQUNyRSxNQUFNd0UsTUFBTSxHQUFHLE1BQU03RixLQUFLLElBQUc7Y0FDNUIsTUFBTTtnQkFBRVM7Y0FBTSxDQUFFLEdBQUdULEtBQUs7Y0FDeEJyRCxLQUFLLENBQUNPLEtBQUssQ0FBQzRJLEdBQUcsQ0FBQztnQkFBRSxDQUFDckYsTUFBTSxDQUFDL0UsSUFBSSxHQUFHK0UsTUFBTSxDQUFDZ0I7Y0FBSyxDQUFFLENBQUM7Y0FDaERtRSxVQUFVLENBQUNuRixNQUFNLENBQUNnQixLQUFLLENBQUM7WUFDekIsQ0FBQztZQUVELE1BQU1zRSxNQUFNLEdBQUdBLENBQUEsS0FBTXBKLEtBQUssQ0FBQ3FKLElBQUksRUFBRTtZQUNqQyxPQUNDeEwsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sR0FBQSxDQUFBVyxRQUFRO2NBQUNFLElBQUksRUFBQyxhQUFhO2NBQUNYLEtBQUssRUFBRTJLLElBQUk7Y0FBRXRLLFNBQVMsRUFBQztZQUFpQixHQUNwRVosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21CLEtBQUEsQ0FBQTJKLFFBQVE7Y0FDUnZLLElBQUksRUFBQyxhQUFhO2NBQ2xCRSxPQUFPLEVBQUMsVUFBVTtjQUNsQmlELEtBQUssRUFBRTRHLFdBQVcsQ0FBQ3BFLFdBQVcsQ0FBQ3hDLEtBQUs7Y0FDcENxSCxXQUFXLEVBQUVULFdBQVcsQ0FBQ3BFLFdBQVcsQ0FBQzZFLFdBQVc7Y0FDaERDLFFBQVEsRUFBRU4sTUFBTTtjQUNoQkUsTUFBTSxFQUFFQSxNQUFNO2NBQ2R0RSxLQUFLLEVBQUVrRTtZQUFPLEVBQ2IsQ0FDUTtVQUViOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDQSxJQUFBbkwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQTJMLE1BQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBNEwsWUFBQSxHQUFBNUwsT0FBQTtVQUVNLFNBQVU2TCxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FDTDNKLEtBQUs7Y0FDTDVCLEtBQUssRUFBRTtnQkFBRU0sTUFBTSxFQUFFb0s7Y0FBVztZQUFFLENBQzlCLEdBQUcsSUFBQTdLLFFBQUEsQ0FBQUssZ0JBQWdCLEdBQUU7WUFFdEIsSUFBQW1MLE1BQUEsQ0FBQUcsU0FBUyxFQUFDLENBQUM1SixLQUFLLENBQUNPLEtBQUssQ0FBQyxFQUFFLE1BQUssQ0FBRSxDQUFDLEVBQUUsb0JBQW9CLENBQUM7WUFFeEQsT0FDQzFDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGtCQUNDWCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGFBQUtzSyxXQUFXLENBQUNsRSxTQUFTLEUsSUFBTyxFQUNqQy9HLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLFksS0FBS3dCLEtBQUssQ0FBQ08sS0FBSyxDQUFDcUUsU0FBUyxDQUFLLENBQzFCLEVBQ04vRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0wsWUFBQSxDQUFBYixpQkFBaUIsT0FBRyxDQUNaO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFoTCxNQUFBLEdBQUFDLE9BQUE7VUFZTyxNQUFNK0wsYUFBYSxHQUFBcEQsT0FBQSxDQUFBb0QsYUFBQSxHQUFHaE0sTUFBQSxDQUFBVSxPQUFLLENBQUNtSSxhQUFhLENBQUMsRUFBbUIsQ0FBQztVQUM5RCxNQUFNcEksZ0JBQWdCLEdBQUdBLENBQUEsS0FBTVQsTUFBQSxDQUFBVSxPQUFLLENBQUNxSSxVQUFVLENBQUNpRCxhQUFhLENBQUM7VUFBQ3BELE9BQUEsQ0FBQW5JLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2J0RSxJQUFBd0wsV0FBQSxHQUFBaE0sT0FBQTtVQUVBLElBQUFpTSxXQUFBLEdBQUFqTSxPQUFBO1VBQ0EsSUFBQTJMLE1BQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBa00sUUFBQSxHQUFBbE0sT0FBQTtVQUNBLElBQUE2QixLQUFBLEdBQUE3QixPQUFBO1VBR087VUFBVSxTQUFVbU0sTUFBTUEsQ0FBQTtZQUNoQyxNQUFNO2NBQ0w3TCxLQUFLO2NBQ0w0QixLQUFLO2NBQ0w1QixLQUFLLEVBQUU7Z0JBQUVNLE1BQU0sRUFBRW9LO2NBQVc7WUFBRSxDQUM5QixHQUFHLElBQUE3SyxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRXRCLE1BQU0sQ0FBQ00sS0FBSyxFQUFFc0wsUUFBUSxDQUFDLEdBQUdyTSxNQUFBLENBQUFVLE9BQUssQ0FBQzRCLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDTyxLQUFLLENBQUMzQixLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pFLE1BQU11TCxVQUFVLEdBQUdDLEtBQUssSUFBSUwsV0FBQSxDQUFBTSxZQUFZLENBQUNDLGFBQWEsQ0FBQ0YsS0FBSyxJQUFJcEssS0FBSyxDQUFDTyxLQUFLLENBQUNnSyxlQUFlLENBQUNILEtBQUssQ0FBQyxFQUFFQSxLQUFLLENBQUM7WUFDMUcsTUFBTVosUUFBUSxHQUFHbkcsS0FBSyxJQUFHO2NBQ3hCNkcsUUFBUSxDQUFDN0csS0FBSyxDQUFDUyxNQUFNLENBQUNnQixLQUFLLENBQUM7Y0FDNUI5RSxLQUFLLENBQUNPLEtBQUssQ0FBQzRJLEdBQUcsQ0FBQztnQkFBRXZLLEtBQUssRUFBRXlFLEtBQUssQ0FBQ1MsTUFBTSxDQUFDZ0I7Y0FBSyxDQUFFLENBQUM7WUFDL0MsQ0FBQztZQUNELE1BQU1zRSxNQUFNLEdBQUcvRixLQUFLLElBQUc7Y0FDdEJyRCxLQUFLLENBQUNxSixJQUFJLEVBQUU7WUFDYixDQUFDO1lBQ0QsTUFBTSxDQUFDbUIsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzVNLE1BQUEsQ0FBQVUsT0FBSyxDQUFDNEIsUUFBUSxDQUFDSCxLQUFLLENBQUNPLEtBQUssQ0FBQ2lLLE9BQU8sQ0FBQztZQUNqRSxJQUFBZixNQUFBLENBQUFHLFNBQVMsRUFBQyxDQUFDNUosS0FBSyxDQUFDTyxLQUFLLENBQUMsRUFBRSxNQUFNa0ssVUFBVSxDQUFDekssS0FBSyxDQUFDTyxLQUFLLENBQUNpSyxPQUFPLENBQUMsRUFBRSxpQkFBaUIsQ0FBQztZQUVsRixPQUNDM00sTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQVgsTUFBQSxDQUFBVSxPQUFBLENBQUFrQyxRQUFBLFFBQ0M1QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBaUQsR0FDbkVaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUN3TCxRQUFBLENBQUFVLGFBQWEsT0FBRyxDQUNSLEVBQ1Y3TSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBMkIsR0FDNUNaLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNzTCxXQUFBLENBQUFhLFVBQVU7Y0FDVi9MLEtBQUssRUFBRVIsS0FBSyxDQUFDb00sT0FBTyxDQUFDNUwsS0FBSztjQUMxQjhGLFdBQVcsRUFBRXRHLEtBQUssQ0FBQ29NLE9BQU8sQ0FBQzlGLFdBQVc7Y0FDdENrRyxXQUFXLEVBQUU1SyxLQUFLLENBQUNPLEtBQUssQ0FBQ3NLLGtCQUFrQjtjQUMzQ0wsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCTCxVQUFVLEVBQUVBO1lBQVUsRUFDckIsRUFFRnRNLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLGNBQ0NYLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNtQixLQUFBLENBQUFtTCxLQUFLO2NBQ0wxQixNQUFNLEVBQUVBLE1BQU07Y0FDZHJLLElBQUksRUFBQyxPQUFPO2NBQ1p5SyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEIvSyxTQUFTLEVBQUMsZUFBZTtjQUN6QnFHLEtBQUssRUFBRWxHLEtBQUs7Y0FDWjJLLFdBQVcsRUFBRW5MLEtBQUssQ0FBQ00sTUFBTSxDQUFDRSxLQUFLO2NBQy9CTSxJQUFJLEVBQUM7WUFBTSxFQUNWLENBQ0csRUFFTnJCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzdCWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxpQkFBU0osS0FBSyxDQUFDTSxNQUFNLENBQUNxTSxLQUFLLEUsS0FBWSxFQUN0Qy9LLEtBQUssQ0FBQ08sS0FBSyxDQUFDd0ssS0FBSyxFQUFFaE0sSUFBSSxDQUNuQixDQUNELENBQ0UsQ0FDUDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFQSxJQUFBaU0sS0FBQSxHQUFBbE4sT0FBQTtVQUVBLElBQUFJLEdBQUEsR0FBQUosT0FBQTtVQUNBLElBQUEyTCxNQUFBLEdBQUEzTCxPQUFBO1VBQ0EsSUFBQW1OLGVBQUEsR0FBQW5OLE9BQUE7VUFDQSxJQUFBb04sV0FBQSxHQUFBcE4sT0FBQTtVQUNBLElBQUFxTixlQUFBLEdBQUFyTixPQUFBO1VBQ0EsSUFBQXNOLEtBQUEsR0FBQXROLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBdU4sT0FBQSxHQUFBdk4sT0FBQTtVQUVPLFdBVlA7O1VBVWlCLFNBQ1J3TixjQUFjQSxDQUFDQyxLQUFLO1lBQzVCLE1BQU07Y0FBRXZMLEtBQUs7Y0FBRXlCO1lBQVEsQ0FBRSxHQUFHOEosS0FBSztZQUVqQyxNQUFNLENBQUNDLEtBQUssRUFBRXBOLEtBQUssQ0FBQyxHQUFHLElBQUFxTCxNQUFBLENBQUFnQyxRQUFRLEVBQUNSLGVBQUEsQ0FBQXZNLE1BQU0sQ0FBQ2dOLFNBQVMsQ0FBQztZQUNqRCxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdaLEtBQUssQ0FBQzdLLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsSUFBSSxDQUFDcUwsS0FBSyxFQUFFO1lBQ1osTUFBTW5OLFdBQVcsR0FBR0EsQ0FBQSxLQUFNdU4sWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUVsRCxNQUFNN0csS0FBSyxHQUFHO2NBQ2I5RSxLQUFLO2NBQ0w1QixLQUFLO2NBQ0x1TixTQUFTO2NBQ1R0TixXQUFXO2NBQ1hNLFVBQVUsRUFBRSxDQUFDLEdBQUdxQixLQUFLLENBQUNPLEtBQUssQ0FBQzVCLFVBQVUsQ0FBQ3NCLEtBQUs7YUFDNUM7WUFDRCxNQUFNNkgsR0FBRyxHQUFHLEdBQUdyRyxRQUFRLEdBQUcsYUFBYSxHQUFHLEVBQUUsRUFBRTtZQUU5QyxPQUNDdUosS0FBQSxDQUFBeE0sYUFBQSxDQUFDTixHQUFBLENBQUEyTixhQUFhO2NBQUNwTixTQUFTLEVBQUVxSixHQUFHO2NBQUVyRyxRQUFRLEVBQUVBLFFBQVEsSUFBSSxDQUFDLENBQUN6QixLQUFLLENBQUNPLEtBQUssRUFBRTVCLFVBQVUsQ0FBQzBCO1lBQU0sR0FDcEYySyxLQUFBLENBQUF4TSxhQUFBLENBQUNQLFFBQUEsQ0FBQTRMLGFBQWEsQ0FBQ3BDLFFBQVE7Y0FBQzNDLEtBQUssRUFBRUE7WUFBSyxHQUNuQ2tHLEtBQUEsQ0FBQXhNLGFBQUEsQ0FBQzZNLE9BQUEsQ0FBQXBCLE1BQU0sT0FBRyxFQUNWZSxLQUFBLENBQUF4TSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUEwQixHQUN4Q3VNLEtBQUEsQ0FBQXhNLGFBQUEsQ0FBQzRNLEtBQUEsQ0FBQXpCLFVBQVUsT0FBRyxFQUNkcUIsS0FBQSxDQUFBeE0sYUFBQSxDQUFDME0sV0FBQSxDQUFBcEwsZ0JBQWdCLE9BQUcsQ0FDZixFQUNOa0wsS0FBQSxDQUFBeE0sYUFBQSxDQUFDMk0sZUFBQSxDQUFBcEUsY0FBYztjQUFDMUUsSUFBSSxFQUFFc0osU0FBUztjQUFFdEssT0FBTyxFQUFFaEQ7WUFBVyxFQUFJLENBQ2pDLENBQ1Y7VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFSLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFJLEdBQUEsR0FBQUosT0FBQTtVQUVNLFNBQVVnTyxPQUFPQSxDQUFBO1lBQ3RCLE9BQ0NqTyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixHQUFBLENBQUE2TixpQkFBaUIsUUFDakJsTyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixHQUFBLENBQUEyTixhQUFhLFFBQ2JoTyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxrQkFDQ1gsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1ELEdBQ2pFWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixXQUFBLENBQUFnQixNQUFNO2NBQUNDLE9BQU8sRUFBQztZQUFTLEVBQVUsQ0FDOUIsRUFDTnBCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUE0RCxHQUM3RVosTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQTZDLEdBQy9EWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxFQUFPLEVBQ3JDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxjQUNDWCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixHQUFBLENBQUE4TixlQUFlO2NBQUNqTixJQUFJLEVBQUMsT0FBTztjQUFDTyxFQUFFLEVBQUM7WUFBSSxHQUNwQ3pCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNOLEdBQUEsQ0FBQStOLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLE1BQU07Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUMzQixFQUVsQnRPLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzdCWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixHQUFBLENBQUErTixZQUFZO2NBQUNDLE1BQU0sRUFBQyxLQUFLO2NBQUNDLEtBQUssRUFBQztZQUFNLEVBQUcsQ0FDckMsQ0FDRCxDQUNHLENBQ0YsQ0FDQSxDQUNLLENBQ0c7VUFFdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUF0TyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBNEUsTUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUFrSyxRQUFBLEdBQUFsSyxPQUFBO1VBQ0EsSUFBQWlNLFdBQUEsR0FBQWpNLE9BQUE7VUFDQSxJQUFBSSxHQUFBLEdBQUFKLE9BQUE7VUFFTSxTQUFVNE0sYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUUxSyxLQUFLO2NBQUU1QjtZQUFLLENBQUUsR0FBRyxJQUFBSCxRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBQzNDLE1BQU04TixLQUFLLEdBQUc7Y0FBRTVELFFBQVEsRUFBRXhJLEtBQUssQ0FBQ08sS0FBSyxDQUFDMkUsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDbEYsS0FBSyxDQUFDTyxLQUFLLENBQUM4TDtZQUFTLENBQUU7WUFFbEYsTUFBTXRNLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSCxNQUFNcEIsVUFBVSxHQUFHcUIsS0FBSyxDQUFDTyxLQUFLLENBQUM1QixVQUFVLENBQUMyTixRQUFRLEVBQUU7Z0JBQ3BELE1BQU1DLFFBQVEsR0FBRyxNQUFNdk0sS0FBSyxDQUFDTyxLQUFLLENBQUNpTSxPQUFPLENBQUM7a0JBQUU3TixVQUFVO2tCQUFFdUcsSUFBSSxFQUFFO2dCQUFRLENBQUUsQ0FBQztnQkFFMUUsSUFBSSxDQUFDcUgsUUFBUSxDQUFDRSxNQUFNLEVBQUU7a0JBQ3JCMUMsV0FBQSxDQUFBTSxZQUFZLENBQUNxQyxXQUFXLENBQUMsT0FBTyxFQUFFdE8sS0FBSyxDQUFDdU8sTUFBTSxDQUFDQyxhQUFhLENBQUM7a0JBQzdEOztnQkFFRGxLLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ21KLE9BQU8sQ0FBQ3pPLEtBQUssQ0FBQ3NGLEtBQUssQ0FBQ29KLGVBQWUsQ0FBQztnQkFDMUM5RSxRQUFBLENBQUFDLE9BQU8sQ0FBQzhFLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixDQUFDO2VBQzdELENBQUMsT0FBT3BMLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDb0wsR0FBRyxDQUFDckwsQ0FBQyxDQUFDO2dCQUNkZSxNQUFBLENBQUFnQixLQUFLLENBQUM3QixLQUFLLENBQUN6RCxLQUFLLENBQUNzRixLQUFLLENBQUN1SixxQkFBcUIsQ0FBQzs7WUFFaEQsQ0FBQztZQUNELE9BQ0NwUCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixHQUFBLENBQUFXLFFBQVE7Y0FBQ1QsS0FBSyxFQUFFQSxLQUFLLENBQUNVLFVBQVU7Y0FBRUMsSUFBSSxFQUFDLFNBQVM7Y0FBQytHLEtBQUssRUFBRTtZQUFFLEdBQzFEakksTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixXQUFBLENBQUFnQixNQUFNO2NBQUN5QyxRQUFRLEVBQUV6QixLQUFLLENBQUN5QixRQUFRO2NBQUV0QyxPQUFPLEVBQUVZLFFBQVE7Y0FBRWQsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLbU47WUFBSyxHQUM5RWhPLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ29OLE9BQU8sQ0FDZCxDQUNKLENBQ0k7VUFFYiIsImlnbm9yZUxpc3QiOltdfQ==