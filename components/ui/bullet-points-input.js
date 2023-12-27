System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Control, BulletPointsInput, __beyond_pkg, hmr;
  _export({
    Control: void 0,
    BulletPointsInput: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_3 = _pragmateUi003Components;
    }, function (_pragmateUi003Icons) {
      dependency_4 = _pragmateUi003Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/components/ui/bullet-points-input');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1043499290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = void 0;
          /*bundle*/
          class Control {
            constructor() {}
          }
          exports.Control = Control;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./hooks/use-bullet-points
      *****************************************/

      ims.set('./hooks/use-bullet-points', {
        hash: 3071613647,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBulletPoints = useBulletPoints;
          var _react = require("react");
          function useBulletPoints(handleChange, name, {
            minBulletPoints,
            maxBulletPoints,
            values = ['']
          }) {
            const bulletPoints = !!values.length ? values : [''];
            const bulletPointRefs = (0, _react.useRef)([]);
            const [draggedIndex, setDraggedIndex] = (0, _react.useState)(null);
            const [droppedIndex, setDroppedIndex] = (0, _react.useState)(null);
            const handleBulletPointsChange = updatedBulletPoints => {
              handleChange({
                currentTarget: {
                  name,
                  value: updatedBulletPoints
                }
              });
            };
            const handleDragStart = (_, index) => setDraggedIndex(index);
            const handleDragOver = droppedPosition => {
              if (draggedIndex !== droppedPosition) setDroppedIndex(droppedPosition);
            };
            const handleDragEnd = () => {
              const newBulletPoints = [...bulletPoints];
              const movedBulletPoint = bulletPoints[draggedIndex];
              newBulletPoints.splice(draggedIndex, 1);
              newBulletPoints.splice(droppedIndex, 0, movedBulletPoint);
              setDraggedIndex(null);
            };
            const handleInputChange = (index, event) => {
              const {
                value
              } = event.target;
              const updatedBulletPoints = [...bulletPoints];
              updatedBulletPoints[index] = value;
              handleBulletPointsChange(updatedBulletPoints);
            };
            const handleKeyDown = (index, event) => {
              const isLastBulletPoint = index === bulletPoints.length - 1;
              const isNotEmpty = bulletPoints[index].trim() !== '';
              if (event.key === 'Tab') {
                event.preventDefault();
                if (isLastBulletPoint && isNotEmpty) {
                  addBulletPoint();
                } else if (!event.shiftKey && event.key === 'Tab') {
                  focusBulletPoint(index + 1);
                } else if (event.key === 'Tab' && event.shiftKey) {
                  focusBulletPoint(index - 1);
                }
              } else if (event.key === 'Backspace' && bulletPoints[index] === '' && bulletPoints.length > 1) {
                event.preventDefault();
                removeBulletPoint(index);
              }
            };
            const addBulletPoint = () => {
              if (bulletPoints.length < maxBulletPoints) {
                handleBulletPointsChange([...bulletPoints, '']);
                setTimeout(() => {
                  focusBulletPoint(bulletPoints.length);
                }, 0);
              }
            };
            const removeBulletPoint = index => {
              if (bulletPoints.length > minBulletPoints) {
                const updatedBulletPoints = [...bulletPoints];
                updatedBulletPoints.splice(index, 1);
                focusBulletPoint(updatedBulletPoints.length - 1);
                handleBulletPointsChange(updatedBulletPoints);
              }
            };
            const focusBulletPoint = index => {
              const inputElement = bulletPointRefs.current[index];
              if (inputElement) {
                inputElement.focus();
                inputElement.setSelectionRange(0, inputElement.value.length);
              }
            };
            const registerBulletPointRef = (index, element) => {
              bulletPointRefs.current[index] = element;
            };
            const canRemoveBulletPoint = bulletPoints.length > minBulletPoints;
            return {
              bulletPoints,
              handleInputChange,
              handleKeyDown,
              addBulletPoint,
              removeBulletPoint,
              registerBulletPointRef,
              canRemoveBulletPoint,
              handleDragOver,
              handleDragEnd,
              handleDragStart
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1665790593,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsInput = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _useBulletPoints = require("./hooks/use-bullet-points");
          /* bundle */
          const BulletPointsInput = ({
            values = [],
            handleChange,
            disabled = false,
            minBulletPoints = 1,
            maxBulletPoints = 10,
            fieldName,
            texts = {
              add: 'Add'
            }
          }) => {
            const {
              addBulletPoint,
              bulletPoints,
              canRemoveBulletPoint,
              handleInputChange,
              handleKeyDown,
              registerBulletPointRef,
              removeBulletPoint,
              handleDragEnd,
              handleDragOver,
              handleDragStart
            } = (0, _useBulletPoints.useBulletPoints)(handleChange, fieldName, {
              maxBulletPoints,
              minBulletPoints,
              values
            });
            return _react.default.createElement("section", {
              className: "bullet-points-form"
            }, _react.default.createElement("header", {
              className: "bullet-points-form-header"
            }, _react.default.createElement(_components.Button, {
              variant: "primary outline",
              label: texts.add,
              onClick: addBulletPoint
            })), bulletPoints.map((point, index) => _react.default.createElement("div", {
              key: index,
              className: "bullet-points-item",
              draggable: true,
              onDragStart: event => handleDragStart(event, index),
              onDragOver: () => handleDragOver(index),
              onDragEnd: handleDragEnd
            }, _react.default.createElement(_icons.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            }), _react.default.createElement("p", null, " ", index + 1, ". "), _react.default.createElement("input", {
              className: "bullet-points-input",
              type: "text",
              value: point,
              disabled: disabled,
              onChange: event => handleInputChange(index, event),
              onKeyDown: event => handleKeyDown(index, event),
              ref: element => registerBulletPointRef(index, element)
            }), canRemoveBulletPoint && _react.default.createElement(_icons.Icon, {
              icon: "delete",
              className: "delete-bullet-point",
              onClick: () => removeBulletPoint(index)
            }))));
          };
          exports.BulletPointsInput = BulletPointsInput;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "Control",
        "name": "Control"
      }, {
        "im": "./index",
        "from": "BulletPointsInput",
        "name": "BulletPointsInput"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Control') && _export("Control", Control = require ? require('./control').Control : value);
        (require || prop === 'BulletPointsInput') && _export("BulletPointsInput", BulletPointsInput = require ? require('./index').BulletPointsInput : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb250cm9sIiwiY29uc3RydWN0b3IiLCJleHBvcnRzIiwiX3JlYWN0IiwicmVxdWlyZSIsInVzZUJ1bGxldFBvaW50cyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJtaW5CdWxsZXRQb2ludHMiLCJtYXhCdWxsZXRQb2ludHMiLCJ2YWx1ZXMiLCJidWxsZXRQb2ludHMiLCJsZW5ndGgiLCJidWxsZXRQb2ludFJlZnMiLCJ1c2VSZWYiLCJkcmFnZ2VkSW5kZXgiLCJzZXREcmFnZ2VkSW5kZXgiLCJ1c2VTdGF0ZSIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEcmFnU3RhcnQiLCJfIiwiaW5kZXgiLCJoYW5kbGVEcmFnT3ZlciIsImRyb3BwZWRQb3NpdGlvbiIsImhhbmRsZURyYWdFbmQiLCJuZXdCdWxsZXRQb2ludHMiLCJtb3ZlZEJ1bGxldFBvaW50Iiwic3BsaWNlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUtleURvd24iLCJpc0xhc3RCdWxsZXRQb2ludCIsImlzTm90RW1wdHkiLCJ0cmltIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJhZGRCdWxsZXRQb2ludCIsInNoaWZ0S2V5IiwiZm9jdXNCdWxsZXRQb2ludCIsInJlbW92ZUJ1bGxldFBvaW50Iiwic2V0VGltZW91dCIsImlucHV0RWxlbWVudCIsImN1cnJlbnQiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwicmVnaXN0ZXJCdWxsZXRQb2ludFJlZiIsImVsZW1lbnQiLCJjYW5SZW1vdmVCdWxsZXRQb2ludCIsIl9jb21wb25lbnRzIiwiX2ljb25zIiwiX3VzZUJ1bGxldFBvaW50cyIsIkJ1bGxldFBvaW50c0lucHV0IiwiZGlzYWJsZWQiLCJmaWVsZE5hbWUiLCJ0ZXh0cyIsImFkZCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwidmFyaWFudCIsImxhYmVsIiwib25DbGljayIsIm1hcCIsInBvaW50IiwiZHJhZ2dhYmxlIiwib25EcmFnU3RhcnQiLCJvbkRyYWdPdmVyIiwib25EcmFnRW5kIiwiSWNvbiIsImljb24iLCJ0eXBlIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJyZWYiXSwic291cmNlcyI6WyIvdHMvY29udHJvbC50cyIsIi90cy9ob29rcy91c2UtYnVsbGV0LXBvaW50cy50cyIsIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPO1VBQVUsTUFDWEEsT0FBTztZQUNaQyxZQUFBLEdBQWU7O1VBQ2ZDLE9BQUEsQ0FBQUYsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hELElBQUFHLE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVVDLGVBQWVBLENBQUNDLFlBQVksRUFBRUMsSUFBSSxFQUFFO1lBQUVDLGVBQWU7WUFBRUMsZUFBZTtZQUFFQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQUMsQ0FBRTtZQUN0RyxNQUFNQyxZQUFZLEdBQUcsQ0FBQyxDQUFDRCxNQUFNLENBQUNFLE1BQU0sR0FBR0YsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3BELE1BQU1HLGVBQWUsR0FBRyxJQUFBVixNQUFBLENBQUFXLE1BQU0sRUFBQyxFQUFFLENBQUM7WUFDbEMsTUFBTSxDQUFDQyxZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHLElBQUFiLE1BQUEsQ0FBQWMsUUFBUSxFQUFDLElBQUksQ0FBQztZQUN0RCxNQUFNLENBQUNDLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUcsSUFBQWhCLE1BQUEsQ0FBQWMsUUFBUSxFQUFDLElBQUksQ0FBQztZQUV0RCxNQUFNRyx3QkFBd0IsR0FBR0Ms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