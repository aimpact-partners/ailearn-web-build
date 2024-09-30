System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/form", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/collapsible", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/chips", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.13/components/cover-image.code"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_13 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_15 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Chips) {
      dependency_16 = _pragmateUi100Beta6Chips;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0113ComponentsCoverImageCode) {
      dependency_18 = _aimpactAilearnApp0113ComponentsCoverImageCode;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/list', dependency_6], ['pragmate-ui/form', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['@aimpact/ailearn-app/main-layout.widget', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['pragmate-ui/toast', dependency_15], ['pragmate-ui/chips', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/ailearn-app/components/cover-image.code', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/modules/management/overview.code');
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./activities/empty
      **********************************/
      ims.set('./activities/empty', {
        hash: 3918254615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyActivityList = EmptyActivityList;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          var _modalSelection = require("./list/modal-selection");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyActivityList() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => {
              setShowModal(!showModal);
            };
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
            }, _react.default.createElement(_empty.Empty, null, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text))), _react.default.createElement(_modalSelection.ModalSelection, {
              show: showModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/index
      **********************************/

      ims.set('./activities/index', {
        hash: 2238730782,
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
          var _modalSelection = require("./list/modal-selection");
          var _empty = require("./empty");
          var _framerMotion = require("framer-motion");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ModuleActivities() {
            const {
              texts,
              activities,
              onSubmit,
              store
            } = (0, _context.useModuleContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const [items, setItems] = _react.default.useState(activities);
            const [dragging, setDragging] = _react.default.useState(null);
            const toggleModal = () => setShowModal(show => !show);
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
            })))), _react.default.createElement(_modalSelection.ModalSelection, {
              show: showModal,
              onClose: toggleModal
            }));
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
        hash: 3906961169,
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
              // store.editActivity(data.id);
              const current = store.model.activities.items.find(item => item.id === activity.id);
              store.editActivity = current;
              const baseUri = `/modules/management?id=${store.model.id}`;
              store.setBreadcrumb();
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
        hash: 60330569,
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
            const handleDragStart = () => {
              setIsDragging(true);
            };
            const handleDragEnd = () => {
              setIsDragging(false);
            };
            const deleteItem = event => {
              try {
                ref.current.classList.add('fade-out');
                store.deleteActivity(item.id);
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
            }, _react.default.createElement(_property.Property, {
              name: texts.objective,
              value: item.specs.objective
            }), _react.default.createElement(_property.Property, {
              name: texts.description,
              value: item.description
            }), _react.default.createElement(_specs.ActivitySpecs, {
              type: item.type,
              specs: item.specs
            }))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
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
        hash: 1502866493,
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
              type: "primary"
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
        hash: 4005488184,
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
              const baseUri = `/modules/management?id=${store.model.id}`;
              _routing.routing.pushState(`${baseUri}&activityId=${activity.id}`);
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
        hash: 2016068064,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Body = Body;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _description = require("./description");
          function Body() {
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
        hash: 4232673321,
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
        hash: 1587048821,
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
          /*bundle*/
          function Header() {
            const {
              texts,
              store,
              texts: {
                module: moduleTexts
              },
              ensureCredits
            } = (0, _context.useModuleContext)();
            const [title, setTitle] = _react.default.useState(store.model.title ?? '');
            const onGenerate = notes => ensureCredits(notes => store.model.generatePicture(notes), notes);
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
        hash: 2311563307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleOverview = ModuleOverview;
          var React = require("react");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _context = require("./context");
          var _header = require("./header");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _body = require("./body");
          var _activities = require("./activities");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/ //@ts-check

          function ModuleOverview(props) {
            const {
              store,
              fetching
            } = props;
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!ready) return;
            const value = {
              store,
              texts,
              ensureCredits: _mainLayout.LayoutBroker.ensureCredits,
              activities: []
            };
            const cls = `${fetching ? 'is-fetching' : ''}`;
            return React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, null), React.createElement("div", {
              className: "app-module-creation-page"
            }, React.createElement(_body.Body, null), React.createElement(_activities.ModuleActivities, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWxTZWxlY3Rpb24iLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiYWN0aXZpdGllcyIsInRpdGxlIiwiVG91clN0ZXAiLCJtb2R1bGVUb3VyIiwibmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsImFzIiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsInNob3ciLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiX2ZyYW1lck1vdGlvbiIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiaXRlbXMiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJtb2RlbCIsInJlb3JkZXIiLCJGcmFnbWVudCIsImFkZCIsIkZvcm0iLCJSZW9yZGVyIiwiR3JvdXAiLCJ2YWx1ZXMiLCJMaXN0Iiwic3BlY3MiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJfbW9kYWwiLCJEZWxldGVNb2RhbCIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJDb25maXJtTW9kYWwiLCJjZW50ZXJlZCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImFjdGl2aXR5IiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiZmluZCIsIml0ZW0iLCJpZCIsImVkaXRBY3Rpdml0eSIsImJhc2VVcmkiLCJzZXRCcmVhZGNydW1iIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImlSZWYiLCJ1c2VSZWYiLCJpbWdDbHMiLCJ0eXBlIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwib25EcmFnIiwic3RhcnQiLCJ1c2VFZmZlY3QiLCJ0b3VjaEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlUYWciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIm9uUG9pbnRlckRvd24iLCJyZWYiLCJJY29uIiwiQXBwSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIl9wcm9wZXJ0eSIsImluZGV4IiwidXNlRHJhZ0NvbnRyb2xzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImhhbmRsZURyYWdTdGFydCIsImhhbmRsZURyYWdFbmQiLCJkZWxldGVJdGVtIiwiY2xhc3NMaXN0IiwiZGVsZXRlQWN0aXZpdHkiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJ2YWx1ZSIsImRyYWdMaXN0ZW5lciIsImRyYWdDb250cm9scyIsIm9uRHJhZ0VuZCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiUHJvcGVydHkiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIl92YWxpZGF0aW9uIiwiX2NvbnRleHQyIiwiX3N1Z2dlc3Rpb25zIiwiX3JlcXVlc3RDcmVkaXRzIiwic2V0QWN0aXZpdHkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidmlldyIsInNldFZpZXciLCJjcmVhdGVBY3Rpdml0eSIsIm1hbnVhbCIsIm5hdmlnYXRlIiwiaGFuZGxlT25DbG9zZSIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJsaXN0IiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInJlcXVlc3RDcmVkaXRzIiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwib25BSSIsImNyZWRpdHMiLCJ0b3RhbCIsImNyZWF0ZU1vZGFsIiwiYXZhaWxhYmxlVHlwZXMiLCJkaXNhYmxlZCIsIkFJQnV0dG9uIiwiZW5zdXJlIiwiZ2VuZXJhdGUiLCJnbG9iYWxUZXh0cyIsImJhY2siLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJvd25lciIsIm5vdGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJzZXRUaW1lb3V0IiwicmVmaW5lIiwiZGVzY3JpcHRpb24yIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRvdXIiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIm9uRWRpdCIsInRhcmdldCIsInNhdmUiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsIl9ob29rcyIsIl9kZXNjcmlwdGlvbiIsIkJvZHkiLCJ1c2VCaW5kZXIiLCJNb2R1bGVDb250ZXh0IiwiX3B1Ymxpc2giLCJfY292ZXJJbWFnZSIsIkhlYWRlciIsImVuc3VyZUNyZWRpdHMiLCJzZXRUaXRsZSIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJSZWFjdCIsIl9tYWluTGF5b3V0IiwiX2JleW9uZF9jb250ZXh0IiwiX2JvZHkiLCJfYWN0aXZpdGllcyIsIk1vZHVsZU92ZXJ2aWV3IiwicHJvcHMiLCJyZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiTGF5b3V0QnJva2VyIiwiUGFnZUNvbnRhaW5lciIsIlByZWxvYWQiLCJBbmltYXRlZENvbnRhaW5lciIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiYXR0cnMiLCJjb21wbGV0ZWQiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy9ib2R5L2Rlc2NyaXB0aW9uLnRzeCIsIi90cy9ib2R5L2luZGV4LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wcmVsb2FkLnRzeCIsIi90cy9wdWJsaXNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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