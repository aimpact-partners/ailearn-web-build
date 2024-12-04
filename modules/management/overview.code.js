System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.2.16/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.2.16/components/icons", "pragmate-ui@1.0.0-beta.7/collapsible", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.2.16/components/cover-image.code", "@aimpact/ailearn-app@0.2.16/main-layout.widget"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Header, ModuleOverview, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0216ComponentsUi) {
      dependency_5 = _aimpactAilearnApp0216ComponentsUi;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi100Beta7Form) {
      dependency_7 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7List) {
      dependency_8 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_9 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_10 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0216ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0216ComponentsIcons;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_12 = _pragmateUi100Beta7Collapsible;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_14 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_15 = _pragmateUi100Beta7Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0216ComponentsCoverImageCode) {
      dependency_17 = _aimpactAilearnApp0216ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp0216MainLayoutWidget) {
      dependency_18 = _aimpactAilearnApp0216MainLayoutWidget;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.16"], ["@aimpact/ailearn-app", "0.2.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.16/modules/management/overview",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['framer-motion', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/chips', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/ailearn-app/components/cover-image.code', dependency_17], ['@aimpact/ailearn-app/main-layout.widget', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.16/modules/management/overview.code');
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
        hash: 2456097900,
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
            }, _react.default.createElement("h2", null, texts.activities.title), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "addActivity",
              as: "div"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
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
              className: "module-activity-list",
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

      /*********************************************
      INTERNAL MODULE: ./activities/list/item/header
      *********************************************/

      ims.set('./activities/list/item/header', {
        hash: 3913417097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityListHeader = ActivityListHeader;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          var _routing = require("@beyond-js/kernel/routing");
          function ActivityListHeader({
            openDeleteModal,
            activity,
            controls
          }) {
            const {
              texts: {
                actions,
                activities: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const edit = event => {
              event.stopPropagation();
              store.editActivity(activity);
              const current = store.model.activities.items.find(item => item.id === activity.id);
              store.editActivity(current);
              _routing.routing.pushState(`/modules/management?id=${store.model.id}&activityId=${activity.id}`);
            };
            const iRef = _react.default.useRef(null);
            const imgCls = `activity-type__image image--${activity.type}`;
            const clsState = `activity__state state--${activity.state}`;
            const onDelete = event => {
              event.stopPropagation();
              openDeleteModal();
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
            return _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("div", {
              className: "header__main-content"
            }, _react.default.createElement("div", {
              onPointerDown: onDrag,
              ref: iRef,
              className: "drag-icon__container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            })), _react.default.createElement("section", {
              className: imgCls
            }, _react.default.createElement(_icons2.AppIcon, {
              icon: _icons2.ICONS[activity.type]
            })), _react.default.createElement("div", {
              className: "activity__data-container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "activity__name"
            }, _react.default.createElement("span", {
              className: "activity__type"
            }, texts.types[activity.type]), _react.default.createElement("h6", null, activity.title)))), _react.default.createElement("div", {
              className: "activity__details "
            }, _react.default.createElement("div", {
              className: clsState
            }, texts.states[activity.state]), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons.IconButton, {
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: onDelete
            })))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/list/item/index
      ********************************************/

      ims.set('./activities/list/item/index', {
        hash: 707022477,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _specs = require("./specs");
          var _context = require("../../../context");
          var _collapsible = require("pragmate-ui/collapsible");
          var _header = require("./header");
          var _toast = require("pragmate-ui/toast");
          var _deleteModal = require("./delete-modal");
          var _property = require("./property");
          var _framerMotion = require("framer-motion");
          function ModuleActivity({
            item,
            index,
            specs
          }) {
            const {
              texts: {
                activities: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const ref = (0, _react.useRef)(null);
            const controls = (0, _framerMotion.useDragControls)();
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const [showDelete, setShowDelete] = _react.default.useState(false);
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
            const onToggle = () => !isDragging;
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              className: "activity__item",
              dragListener: false,
              dragControls: controls,
              onDragEnd: handleDragEnd,
              as: "div"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement(_header.ActivityListHeader, {
              openDeleteModal: toggleDelete,
              activity: item,
              controls: controls
            }), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "activity__pane-content"
            }, item.specs.empty && !item.description ? _react.default.createElement("h6", null, texts.activity.empty) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_property.Property, {
              name: texts.objective,
              value: item.specs.objective
            }), _react.default.createElement(_property.Property, {
              name: texts.description,
              value: item.description
            }), _react.default.createElement(_specs.ActivitySpecs, {
              type: item.type,
              specs: item.specs
            })))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
              onConfirm: deleteItem,
              onClose: toggleDelete
            })));
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
        hash: 3888096406,
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
        hash: 3777338342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalSelection = ModalSelection;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          var _validation = require("./validation");
          var _routing = require("@beyond-js/kernel/routing");
          var _list = require("./list");
          var _context2 = require("./context");
          var _suggestions = require("./suggestions");
          var _requestCredits = require("./request-credits");
          var _components = require("pragmate-ui/components");
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
            const createActivity = async (type, manual = false) => {
              const activity = await store.model.activities.add(type, manual);
              setActivity(activity);
              return activity;
            };
            const navigate = activity => {
              if (!activity) {
                console.error('Activity not found');
              }
              store.editActivity(activity);
              _routing.routing.pushState(`${store.url}&activityId=${activity.instanceId}`);
              onClose();
            };
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
              createActivity,
              setActivity,
              navigate,
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
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: view,
              options: {
                list: _react.default.createElement(_list.ModalActivityList, {
                  onClose: handleOnClose
                }),
                ai: _react.default.createElement(_suggestions.ModalActivitySuggestions, null),
                requestCredits: _react.default.createElement(_requestCredits.RequestCreditsContainer, null)
              }
            })));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/item
      ******************************************************/

      ims.set('./activities/list/modal-selection/item', {
        hash: 833976060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionActivityItem = void 0;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _icons2 = require("pragmate-ui/icons");
          const SelectionActivityItem = ({
            item,
            selected,
            setSelected
          }) => {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const onClick = event => {
              setSelected(item);
            };
            const cls = `activity__selection-item activity--${item}${item === selected ? ' selected' : ''}`;
            const icon = _icons.ICONS[item];
            const clsImage = `activity-type__image image--${item}`;
            return _react.default.createElement("li", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: clsImage
            }, _react.default.createElement(_icons2.Icon, {
              icon: icon
            })), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.activities.types[item]), _react.default.createElement("span", null, texts.activities.descriptionTypes[item])));
          };
          exports.SelectionActivityItem = SelectionActivityItem;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/list
      ******************************************************/

      ims.set('./activities/list/modal-selection/list', {
        hash: 1059129825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivityList = ModalActivityList;
          var _react = require("react");
          var _context = require("../../../context");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _item = require("./item");
          var _context2 = require("./context");
          var _components = require("pragmate-ui/components");
          function ModalActivityList({
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              setView,
              navigate,
              createActivity,
              selected,
              setSelected
            } = (0, _context2.useCreateActivityContext)();
            const onSubmit = async event => {
              event;
              const activity = await createActivity(selected, true);
              navigate(activity);
            };
            const onAI = async event => {
              event.preventDefault();
              event.stopPropagation();
              if (!store.model.credits.total) {
                setView('requestCredits');
                return;
              }
              await createActivity(selected);
              setView('ai');
            };
            return _react.default.createElement("div", null, _react.default.createElement("h3", null, texts.activities.createModal.title), _react.default.createElement(_list.List, {
              className: "module-activity-list",
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
              bordered: true,
              onClick: onSubmit,
              disabled: !selected
            }, texts.actions.manual), _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: onAI,
              disabled: !selected,
              ensure: false
            }, texts.actions.generate)));
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/request-credits
      *****************************************************************/

      ims.set('./activities/list/modal-selection/request-credits', {
        hash: 2337899099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsContainer = RequestCreditsContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _context2 = require("../../../context");
          function RequestCreditsContainer() {
            const {
              onClose,
              setView,
              createActivity,
              selected
            } = (0, _context.useCreateActivityContext)();
            const {
              store
            } = (0, _context2.useModuleContext)();
            const texts = {
              ...store.globalTexts
            };
            texts.actions.cancel = store.globalTexts.actions.back;
            const onCancel = () => setView('list');
            const onSuccess = async () => {
              await createActivity(selected);
              setView('ai');
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.RequestCreditsForm, {
              onConsume: store.model.consumeCoins,
              globalTexts: texts,
              owner: store.model.owner,
              onClose: onClose,
              onCancel: onCancel,
              onSuccess: onSuccess
            }));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/suggestions
      *************************************************************/

      ims.set('./activities/list/modal-selection/suggestions', {
        hash: 3605372254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivitySuggestions = ModalActivitySuggestions;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          var _context2 = require("./context");
          function ModalActivitySuggestions() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              activity,
              navigate,
              setView
            } = (0, _context2.useCreateActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const onBack = () => setView('list');
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                try {
                  setFetching(true);
                  await activity.generate(notes);
                  navigate(activity);
                } catch (e) {
                  console.error(e);
                } finally {
                  setTimeout(() => {
                    setFetching(false);
                  }, 2000);
                }
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("p", null, texts.refine.description), _react.default.createElement("p", null, texts.refine.description2)), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onBack
            }, texts.actions.back), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
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
        hash: 1658927461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleDescription = ModuleDescription;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
              setContent(target.value);
              store.save({
                [target.name]: target.value
              });
            };
            return _react.default.createElement(_ui.TourStep, {
              name: "description",
              texts: tour,
              className: "module-property"
            }, _react.default.createElement("h6", null, moduleTexts.description.label), _react.default.createElement(_ui.ContentEditable, {
              name: "description",
              placeholder: moduleTexts.description.placeholder,
              onSave: onEdit,
              selector: "p",
              content: content
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
        hash: 1520979135,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _publish = require("./publish");
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
            const onSave = event => {
              setTitle(event.target.value);
              store.save({
                title: event.target.value
              });
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
            }), _react.default.createElement("div", null, _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              as: "h3",
              onSave: onSave,
              content: title,
              placeholder: texts.module.title
            }), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm9uUmVvcmRlciIsIm1vZGVsIiwicmVvcmRlciIsIkZyYWdtZW50IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIkxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImdsb2JhbFRleHRzIiwidGV4dEFjdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImFjdGl2aXR5IiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QWN0aXZpdHkiLCJjdXJyZW50IiwiZmluZCIsIml0ZW0iLCJpZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpUmVmIiwidXNlUmVmIiwiaW1nQ2xzIiwidHlwZSIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInN0YXJ0IiwidG91Y2hIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpVGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvblBvaW50ZXJEb3duIiwicmVmIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsInZhbHVlIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ0NvbnRyb2xzIiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsIlByb3BlcnR5Iiwib2JqZWN0aXZlIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3ZhbGlkYXRpb24iLCJfY29udGV4dDIiLCJfc3VnZ2VzdGlvbnMiLCJfcmVxdWVzdENyZWRpdHMiLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiY3JlYXRlQWN0aXZpdHkiLCJtYW51YWwiLCJuYXZpZ2F0ZSIsInVybCIsImluc3RhbmNlSWQiLCJoYW5kbGVPbkNsb3NlIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImxpc3QiLCJNb2RhbEFjdGl2aXR5TGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwicmVxdWVzdENyZWRpdHMiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIm9uQUkiLCJjcmVkaXRzIiwidG90YWwiLCJjcmVhdGVNb2RhbCIsImF2YWlsYWJsZVR5cGVzIiwiZGlzYWJsZWQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImdlbmVyYXRlIiwiYmFjayIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIm93bmVyIiwibm90ZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwidG91ciIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25FZGl0IiwidGFyZ2V0Iiwic2F2ZSIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiX2hvb2tzIiwiX2Rlc2NyaXB0aW9uIiwiTW9kdWxlRGF0YSIsInVzZUJpbmRlciIsIk1vZHVsZUNvbnRleHQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiX21haW5MYXlvdXQiLCJIZWFkZXIiLCJzZXRUaXRsZSIsIm9uR2VuZXJhdGUiLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiUmVhY3QiLCJfYmV5b25kX2NvbnRleHQiLCJfYWN0aXZpdGllcyIsIl9tb2RhbFNlbGVjdGlvbiIsIl9ib2R5IiwiTW9kdWxlT3ZlcnZpZXciLCJwcm9wcyIsInJlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJQYWdlQ29udGFpbmVyIiwiUHJlbG9hZCIsIkFuaW1hdGVkQ29udGFpbmVyIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJhdHRycyIsImNvbXBsZXRlZCIsImdldEl0ZW1zIiwicmVzcG9uc2UiLCJwdWJsaXNoIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJlcGxhY2VTdGF0ZSIsImxvZyIsImVycm9yUHVibGlzaGluZ01vZHVsZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vc3VnZ2VzdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvYm9keS9kZXNjcmlwdGlvbi50c3giLCIvdHMvYm9keS9pbmRleC50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcHJlbG9hZC50c3giLCIvdHMvcHVibGlzaC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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