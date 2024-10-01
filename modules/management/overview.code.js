System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/form", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/collapsible", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.13/components/cover-image.code", "@aimpact/ailearn-app@0.1.13/main-layout.widget"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_5 = _aimpactAilearnApp0113ComponentsUi;
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
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0113ComponentsIcons;
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
    }, function (_aimpactAilearnApp0113ComponentsCoverImageCode) {
      dependency_17 = _aimpactAilearnApp0113ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_18 = _aimpactAilearnApp0113MainLayoutWidget;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/modules/management/overview",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/list', dependency_6], ['pragmate-ui/form', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/chips', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/ailearn-app/components/cover-image.code', dependency_17], ['@aimpact/ailearn-app/main-layout.widget', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/modules/management/overview.code');
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
        hash: 3159365712,
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
              texts: {
                actions: textActions
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
        hash: 1844436495,
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
              setSelected(item.id);
            };
            const key = item.id.replace('/', '-');
            const cls = `activity__selection-item activity--${key}${item.id === selected?.id ? ' selected' : ''}`;
            const icon = _icons.ICONS[key];
            const clsImage = `activity-type__image image--${item.id}`;
            return _react.default.createElement("li", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: clsImage
            }, _react.default.createElement(_icons2.Icon, {
              icon: icon
            })), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.activities.types[item.id]), _react.default.createElement("span", null, texts.activities.descriptionTypes[item.id])));
          };
          exports.SelectionActivityItem = SelectionActivityItem;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/list
      ******************************************************/

      ims.set('./activities/list/modal-selection/list', {
        hash: 1006583719,
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
              className: "actions"
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
        hash: 2848134042,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleOverview = ModuleOverview;
          var React = require("react");
          var _context = require("./context");
          var _header = require("./header");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _body = require("./body");
          var _activities = require("./activities");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _modalSelection = require("./activities/list/modal-selection");
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
        hash: 4282785488,
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
                const response = await store.publish();
                if (!response.status) {
                  _mainLayout.LayoutBroker.showMessage('error', texts.errors.CONTACT_ADMIN);
                  return;
                }
                _toast.toast.success(texts.toast.modulePublished);
                _routing.routing.replaceState({}, null, `/modules/list?tab=published`);
              } catch (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiX2ZyYW1lck1vdGlvbiIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImxlbmd0aCIsIm9uUmVvcmRlciIsIm1vZGVsIiwicmVvcmRlciIsIkZyYWdtZW50IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIkxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJDb25maXJtTW9kYWwiLCJjZW50ZXJlZCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJzaG93IiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiX3JvdXRpbmciLCJBY3Rpdml0eUxpc3RIZWFkZXIiLCJvcGVuRGVsZXRlTW9kYWwiLCJhY3Rpdml0eSIsImNvbnRyb2xzIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZWRpdEFjdGl2aXR5IiwiY3VycmVudCIsImZpbmQiLCJpdGVtIiwiaWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiaVJlZiIsInVzZVJlZiIsImltZ0NscyIsInR5cGUiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJvbkRyYWciLCJzdGFydCIsInVzZUVmZmVjdCIsInRvdWNoSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaVRhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwib25Qb2ludGVyRG93biIsInJlZiIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJ1c2VEcmFnQ29udHJvbHMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaGFuZGxlRHJhZ0VuZCIsImRlbGV0ZUl0ZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJ2YWx1ZSIsImRyYWdMaXN0ZW5lciIsImRyYWdDb250cm9scyIsIm9uRHJhZ0VuZCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiZGVzY3JpcHRpb24iLCJQcm9wZXJ0eSIsIm9iamVjdGl2ZSIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIl92YWxpZGF0aW9uIiwiX2NvbnRleHQyIiwiX3N1Z2dlc3Rpb25zIiwiX3JlcXVlc3RDcmVkaXRzIiwiTW9kYWxTZWxlY3Rpb24iLCJzZXRBY3Rpdml0eSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ2aWV3Iiwic2V0VmlldyIsImNyZWF0ZUFjdGl2aXR5IiwibWFudWFsIiwibmF2aWdhdGUiLCJ1cmwiLCJoYW5kbGVPbkNsb3NlIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImxpc3QiLCJNb2RhbEFjdGl2aXR5TGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwicmVxdWVzdENyZWRpdHMiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJvbkFJIiwiY3JlZGl0cyIsInRvdGFsIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJlbnN1cmUiLCJnZW5lcmF0ZSIsImdsb2JhbFRleHRzIiwiYmFjayIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIm93bmVyIiwibm90ZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwidG91ciIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25FZGl0IiwidGFyZ2V0Iiwic2F2ZSIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiX2hvb2tzIiwiX2Rlc2NyaXB0aW9uIiwiTW9kdWxlRGF0YSIsInVzZUJpbmRlciIsIk1vZHVsZUNvbnRleHQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiX21haW5MYXlvdXQiLCJIZWFkZXIiLCJzZXRUaXRsZSIsIm9uR2VuZXJhdGUiLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiUmVhY3QiLCJfYmV5b25kX2NvbnRleHQiLCJfYm9keSIsIl9hY3Rpdml0aWVzIiwiX21vZGFsU2VsZWN0aW9uIiwiTW9kdWxlT3ZlcnZpZXciLCJwcm9wcyIsInJlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJQYWdlQ29udGFpbmVyIiwiUHJlbG9hZCIsIkFuaW1hdGVkQ29udGFpbmVyIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJhdHRycyIsImNvbXBsZXRlZCIsInJlc3BvbnNlIiwicHVibGlzaCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJyZXBsYWNlU3RhdGUiLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vcmVxdWVzdC1jcmVkaXRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL2JvZHkvZGVzY3JpcHRpb24udHN4IiwiL3RzL2JvZHkvaW5kZXgudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3ByZWxvYWQudHN4IiwiL3RzL3B1Ymxpc2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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