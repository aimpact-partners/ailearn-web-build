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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiX2ZyYW1lck1vdGlvbiIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImxlbmd0aCIsIm9uUmVvcmRlciIsIm1vZGVsIiwicmVvcmRlciIsIkZyYWdtZW50IiwiYWRkIiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsInZhbHVlcyIsIkxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImdsb2JhbFRleHRzIiwidGV4dEFjdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImFjdGl2aXR5IiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0QWN0aXZpdHkiLCJjdXJyZW50IiwiZmluZCIsIml0ZW0iLCJpZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpUmVmIiwidXNlUmVmIiwiaW1nQ2xzIiwidHlwZSIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInN0YXJ0IiwidXNlRWZmZWN0IiwidG91Y2hIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpVGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvblBvaW50ZXJEb3duIiwicmVmIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsInZhbHVlIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ0NvbnRyb2xzIiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsIlByb3BlcnR5Iiwib2JqZWN0aXZlIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3ZhbGlkYXRpb24iLCJfY29udGV4dDIiLCJfc3VnZ2VzdGlvbnMiLCJfcmVxdWVzdENyZWRpdHMiLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiY3JlYXRlQWN0aXZpdHkiLCJtYW51YWwiLCJuYXZpZ2F0ZSIsInVybCIsImhhbmRsZU9uQ2xvc2UiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwibGlzdCIsIk1vZGFsQWN0aXZpdHlMaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJyZXF1ZXN0Q3JlZGl0cyIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIm9uQUkiLCJjcmVkaXRzIiwidG90YWwiLCJjcmVhdGVNb2RhbCIsImF2YWlsYWJsZVR5cGVzIiwiZGlzYWJsZWQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImdlbmVyYXRlIiwiYmFjayIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIm93bmVyIiwibm90ZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwidG91ciIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25FZGl0IiwidGFyZ2V0Iiwic2F2ZSIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiX2hvb2tzIiwiX2Rlc2NyaXB0aW9uIiwiTW9kdWxlRGF0YSIsInVzZUJpbmRlciIsIk1vZHVsZUNvbnRleHQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiX21haW5MYXlvdXQiLCJIZWFkZXIiLCJzZXRUaXRsZSIsIm9uR2VuZXJhdGUiLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiUmVhY3QiLCJfYmV5b25kX2NvbnRleHQiLCJfYm9keSIsIl9hY3Rpdml0aWVzIiwiX21vZGFsU2VsZWN0aW9uIiwiTW9kdWxlT3ZlcnZpZXciLCJwcm9wcyIsInJlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJQYWdlQ29udGFpbmVyIiwiUHJlbG9hZCIsIkFuaW1hdGVkQ29udGFpbmVyIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJhdHRycyIsImNvbXBsZXRlZCIsInJlc3BvbnNlIiwicHVibGlzaCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJyZXBsYWNlU3RhdGUiLCJsb2ciLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vcmVxdWVzdC1jcmVkaXRzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL2JvZHkvZGVzY3JpcHRpb24udHN4IiwiL3RzL2JvZHkvaW5kZXgudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3ByZWxvYWQudHN4IiwiL3RzL3B1Ymxpc2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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