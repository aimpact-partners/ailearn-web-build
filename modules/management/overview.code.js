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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
        hash: 2879810046,
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
            console.log(1, selected);
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
        hash: 2417245294,
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
                const response = await store.model.publish();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiX2ZyYW1lck1vdGlvbiIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImxlbmd0aCIsIm9uUmVvcmRlciIsIm1vZGVsIiwicmVvcmRlciIsIkZyYWdtZW50IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIkxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImdsb2JhbFRleHRzIiwidGV4dEFjdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImFjdGl2aXR5IiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QWN0aXZpdHkiLCJjdXJyZW50IiwiZmluZCIsIml0ZW0iLCJpZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpUmVmIiwidXNlUmVmIiwiaW1nQ2xzIiwidHlwZSIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInN0YXJ0IiwidXNlRWZmZWN0IiwidG91Y2hIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpVGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvblBvaW50ZXJEb3duIiwicmVmIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsInZhbHVlIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ0NvbnRyb2xzIiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsIlByb3BlcnR5Iiwib2JqZWN0aXZlIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3ZhbGlkYXRpb24iLCJfY29udGV4dDIiLCJfc3VnZ2VzdGlvbnMiLCJfcmVxdWVzdENyZWRpdHMiLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiY3JlYXRlQWN0aXZpdHkiLCJtYW51YWwiLCJuYXZpZ2F0ZSIsInVybCIsImhhbmRsZU9uQ2xvc2UiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwibGlzdCIsIk1vZGFsQWN0aXZpdHlMaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJyZXF1ZXN0Q3JlZGl0cyIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwibG9nIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwib25BSSIsImNyZWRpdHMiLCJ0b3RhbCIsImNyZWF0ZU1vZGFsIiwiYXZhaWxhYmxlVHlwZXMiLCJkaXNhYmxlZCIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiZ2VuZXJhdGUiLCJiYWNrIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwib3duZXIiLCJub3RlcyIsInNldE5vdGVzIiwib25CYWNrIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJ0YXJnZXQiLCJzYXZlIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJfaG9va3MiLCJfZGVzY3JpcHRpb24iLCJNb2R1bGVEYXRhIiwidXNlQmluZGVyIiwiTW9kdWxlQ29udGV4dCIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJfbWFpbkxheW91dCIsIkhlYWRlciIsInNldFRpdGxlIiwib25HZW5lcmF0ZSIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJSZWFjdCIsIl9iZXlvbmRfY29udGV4dCIsIl9ib2R5IiwiX2FjdGl2aXRpZXMiLCJfbW9kYWxTZWxlY3Rpb24iLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImF0dHJzIiwiY29tcGxldGVkIiwicmVzcG9uc2UiLCJwdWJsaXNoIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJlcGxhY2VTdGF0ZSIsImVycm9yUHVibGlzaGluZ01vZHVsZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vc3VnZ2VzdGlvbnMudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvYm9keS9kZXNjcmlwdGlvbi50c3giLCIvdHMvYm9keS9pbmRleC50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvcHJlbG9hZC50c3giLCIvdHMvcHVibGlzaC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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