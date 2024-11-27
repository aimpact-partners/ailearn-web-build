System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.2.10/components/ui", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/form", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/collapsible", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.2.10/components/cover-image.code", "@aimpact/ailearn-app@0.2.10/main-layout.widget"], function (_export, _context3) {
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
    }, function (_pragmateUi100Beta6Empty) {
      dependency_3 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_5 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_pragmateUi100Beta6List) {
      dependency_6 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Form) {
      dependency_7 = _pragmateUi100Beta6Form;
    }, function (_framerMotion2) {
      dependency_8 = _framerMotion2;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_9 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_10 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_12 = _pragmateUi100Beta6Collapsible;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_14 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_15 = _pragmateUi100Beta6Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0210ComponentsCoverImageCode) {
      dependency_17 = _aimpactAilearnApp0210ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_18 = _aimpactAilearnApp0210MainLayoutWidget;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/modules/management/overview",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/list', dependency_6], ['pragmate-ui/form', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/chips', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/ailearn-app/components/cover-image.code', dependency_17], ['@aimpact/ailearn-app/main-layout.widget', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/modules/management/overview.code');
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
        hash: 3340430950,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _item = require("./list/item");
          var _form = require("pragmate-ui/form");
          var _empty = require("./empty");
          var _framerMotion = require("framer-motion");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
        hash: 4247845884,
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
              _routing.routing.pushState(`${store.url}&activityId=${activity.id}`);
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
        hash: 625192693,
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
              activities: store.model.activities.items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiX2ZyYW1lck1vdGlvbiIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImxlbmd0aCIsIm9uUmVvcmRlciIsIm1vZGVsIiwicmVvcmRlciIsIkZyYWdtZW50IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIkxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImdsb2JhbFRleHRzIiwidGV4dEFjdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImFjdGl2aXR5IiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QWN0aXZpdHkiLCJjdXJyZW50IiwiZmluZCIsIml0ZW0iLCJpZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpUmVmIiwidXNlUmVmIiwiaW1nQ2xzIiwidHlwZSIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInN0YXJ0IiwidXNlRWZmZWN0IiwidG91Y2hIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpVGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvblBvaW50ZXJEb3duIiwicmVmIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsInZhbHVlIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ0NvbnRyb2xzIiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsIlByb3BlcnR5Iiwib2JqZWN0aXZlIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3ZhbGlkYXRpb24iLCJfY29udGV4dDIiLCJfc3VnZ2VzdGlvbnMiLCJfcmVxdWVzdENyZWRpdHMiLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiY3JlYXRlQWN0aXZpdHkiLCJtYW51YWwiLCJuYXZpZ2F0ZSIsInVybCIsImhhbmRsZU9uQ2xvc2UiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwibGlzdCIsIk1vZGFsQWN0aXZpdHlMaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJyZXF1ZXN0Q3JlZGl0cyIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwib25BSSIsImNyZWRpdHMiLCJ0b3RhbCIsImNyZWF0ZU1vZGFsIiwiYXZhaWxhYmxlVHlwZXMiLCJkaXNhYmxlZCIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiZ2VuZXJhdGUiLCJiYWNrIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwib3duZXIiLCJub3RlcyIsInNldE5vdGVzIiwib25CYWNrIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJ0YXJnZXQiLCJzYXZlIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJfaG9va3MiLCJfZGVzY3JpcHRpb24iLCJNb2R1bGVEYXRhIiwidXNlQmluZGVyIiwiTW9kdWxlQ29udGV4dCIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJfbWFpbkxheW91dCIsIkhlYWRlciIsInNldFRpdGxlIiwib25HZW5lcmF0ZSIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJSZWFjdCIsIl9iZXlvbmRfY29udGV4dCIsIl9hY3Rpdml0aWVzIiwiX21vZGFsU2VsZWN0aW9uIiwiX2JvZHkiLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImF0dHJzIiwiY29tcGxldGVkIiwiZ2V0SXRlbXMiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwicmVwbGFjZVN0YXRlIiwibG9nIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy9ib2R5L2Rlc2NyaXB0aW9uLnRzeCIsIi90cy9ib2R5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wdWJsaXNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.2.10/components/ui", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/form", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.10/components/icons", "pragmate-ui@1.0.0-beta.6/collapsible", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.2.10/components/cover-image.code", "@aimpact/ailearn-app@0.2.10/main-layout.widget"], function (_export, _context3) {
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
    }, function (_pragmateUi100Beta6Empty) {
      dependency_3 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6Components) {
      dependency_4 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_5 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_pragmateUi100Beta6List) {
      dependency_6 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Form) {
      dependency_7 = _pragmateUi100Beta6Form;
    }, function (_framerMotion2) {
      dependency_8 = _framerMotion2;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_9 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_10 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_pragmateUi100Beta6Collapsible) {
      dependency_12 = _pragmateUi100Beta6Collapsible;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_14 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_15 = _pragmateUi100Beta6Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0210ComponentsCoverImageCode) {
      dependency_17 = _aimpactAilearnApp0210ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_18 = _aimpactAilearnApp0210MainLayoutWidget;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/modules/management/overview",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/list', dependency_6], ['pragmate-ui/form', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/chips', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/ailearn-app/components/cover-image.code', dependency_17], ['@aimpact/ailearn-app/main-layout.widget', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/modules/management/overview.code');
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
        hash: 3340430950,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _item = require("./list/item");
          var _form = require("pragmate-ui/form");
          var _empty = require("./empty");
          var _framerMotion = require("framer-motion");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
        hash: 4247845884,
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
              _routing.routing.pushState(`${store.url}&activityId=${activity.id}`);
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
        hash: 625192693,
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
              activities: store.model.activities.items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiX2ZyYW1lck1vdGlvbiIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImxlbmd0aCIsIm9uUmVvcmRlciIsIm1vZGVsIiwicmVvcmRlciIsIkZyYWdtZW50IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIkxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImdsb2JhbFRleHRzIiwidGV4dEFjdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImFjdGl2aXR5IiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QWN0aXZpdHkiLCJjdXJyZW50IiwiZmluZCIsIml0ZW0iLCJpZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpUmVmIiwidXNlUmVmIiwiaW1nQ2xzIiwidHlwZSIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInN0YXJ0IiwidXNlRWZmZWN0IiwidG91Y2hIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpVGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvblBvaW50ZXJEb3duIiwicmVmIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsInZhbHVlIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ0NvbnRyb2xzIiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsIlByb3BlcnR5Iiwib2JqZWN0aXZlIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3ZhbGlkYXRpb24iLCJfY29udGV4dDIiLCJfc3VnZ2VzdGlvbnMiLCJfcmVxdWVzdENyZWRpdHMiLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiY3JlYXRlQWN0aXZpdHkiLCJtYW51YWwiLCJuYXZpZ2F0ZSIsInVybCIsImhhbmRsZU9uQ2xvc2UiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwibGlzdCIsIk1vZGFsQWN0aXZpdHlMaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJyZXF1ZXN0Q3JlZGl0cyIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwib25BSSIsImNyZWRpdHMiLCJ0b3RhbCIsImNyZWF0ZU1vZGFsIiwiYXZhaWxhYmxlVHlwZXMiLCJkaXNhYmxlZCIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiZ2VuZXJhdGUiLCJiYWNrIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwib3duZXIiLCJub3RlcyIsInNldE5vdGVzIiwib25CYWNrIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJ0YXJnZXQiLCJzYXZlIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJfaG9va3MiLCJfZGVzY3JpcHRpb24iLCJNb2R1bGVEYXRhIiwidXNlQmluZGVyIiwiTW9kdWxlQ29udGV4dCIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJfbWFpbkxheW91dCIsIkhlYWRlciIsInNldFRpdGxlIiwib25HZW5lcmF0ZSIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJSZWFjdCIsIl9iZXlvbmRfY29udGV4dCIsIl9hY3Rpdml0aWVzIiwiX21vZGFsU2VsZWN0aW9uIiwiX2JvZHkiLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImF0dHJzIiwiY29tcGxldGVkIiwiZ2V0SXRlbXMiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwicmVwbGFjZVN0YXRlIiwibG9nIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy9ib2R5L2Rlc2NyaXB0aW9uLnRzeCIsIi90cy9ib2R5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wdWJsaXNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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