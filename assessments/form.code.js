System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "react@18.2.0", "pragmate-ui@0.0.36/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, Quiz, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Quiz: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Base) {
      dependency_2 = _beyondJsReact18Widgets101Base;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_pragmateUi0036Form) {
      dependency_4 = _pragmateUi0036Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/assessments/form",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/base', dependency_2], ['react', dependency_3], ['pragmate-ui/form', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/assessments/form.code');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4166703135,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _Question = require("./views/Question");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _Question.Widget;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1793251939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/Input
      *****************************/

      ims.set('./views/Input', {
        hash: 380648024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputControl = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          const InputControl = ({
            option,
            name,
            isMultiple,
            currentValue
          }) => {
            const Control = isMultiple ? _form.CheckBox : _form.Radio;
            return _react.default.createElement("label", null, _react.default.createElement(Control, {
              value: option,
              name: name,
              checked: currentValue === option
            }), option);
          };
          exports.InputControl = InputControl;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/Question
      ********************************/

      ims.set('./views/Question', {
        hash: 2542118335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Question = void 0;
          var React = require("react");
          var _Input = require("./Input");
          const Question = ({
            question
          }) => {
            const inputs = question.options.map((option, index) => React.createElement(_Input.InputControl, {
              key: index,
              option: option,
              name: question.question,
              isMultiple: question.isMultiple
            }));
            return React.createElement("div", null, React.createElement("h3", null, question.question), inputs);
          };
          exports.Question = Question;
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/QuizProps
      *********************************/

      ims.set('./views/QuizProps', {
        hash: 1335835654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Quiz = void 0;
          var _react = require("react");
          var _Question = require("./Question");
          /*bundle*/
          const Quiz = ({
            questions
          }) => {
            const handleSubmit = e => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              console.log(formData); // Aquí puedes manejar los resultados
            };

            const output = questions.map((question, index) => _react.default.createElement(_Question.Question, {
              key: index,
              question: question
            }));
            return _react.default.createElement("form", {
              onSubmit: handleSubmit
            }, output, _react.default.createElement("button", {
              type: "submit"
            }, "Finalizar"));
          };
          exports.Quiz = Quiz;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/QuizProps",
        "from": "Quiz",
        "name": "Quiz"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Quiz') && _export("Quiz", Quiz = require ? require('./views/QuizProps').Quiz : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLDJCQUFxQjtZQUM3QyxNQUFNO1lBQ05DLFdBQVc7Y0FDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLG1CQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUNBLElBQUlDLE1BQU07Y0FDVCxPQUFPQSxnQkFBTTtZQUNkOztVQUNBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiSyxNQUFPRixZQUFZO1VBQTJCRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEcEQ7VUFFQTtVQVNPLE1BQU1DLFlBQVksR0FBeUIsQ0FBQztZQUFFQyxNQUFNO1lBQUVDLElBQUk7WUFBRUMsVUFBVTtZQUFFQztVQUFZLENBQUUsS0FBSTtZQUNoRyxNQUFNQyxPQUFPLEdBQUdGLFVBQVUsR0FBR0csY0FBUSxHQUFHQyxXQUFLO1lBQzdDLE9BQ0NDLDRDQUNDQSw2QkFBQ0gsT0FBTztjQUFDSSxLQUFLLEVBQUVSLE1BQU07Y0FBRUMsSUFBSSxFQUFFQSxJQUFJO2NBQUVRLE9BQU8sRUFBRU4sWUFBWSxLQUFLSDtZQUFNLEVBQUksRUFDdkVBLE1BQU0sQ0FDQTtVQUVWLENBQUM7VUFBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJGO1VBQ0E7VUFhTyxNQUFNWSxRQUFRLEdBQTRCLENBQUM7WUFBRUM7VUFBUSxDQUFFLEtBQUk7WUFDakUsTUFBTUMsTUFBTSxHQUFHRCxRQUFRLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNkLE1BQU0sRUFBRWUsS0FBSyxLQUNqRFIsb0JBQUNSLG1CQUFZO2NBQUNpQixHQUFHLEVBQUVELEtBQUs7Y0FBRWYsTUFBTSxFQUFFQSxNQUFNO2NBQUVDLElBQUksRUFBRVUsUUFBUSxDQUFDQSxRQUFRO2NBQUVULFVBQVUsRUFBRVMsUUFBUSxDQUFDVDtZQUFVLEVBQ2xHLENBQUM7WUFFRixPQUNDSyxpQ0FDQ0EsZ0NBQUtJLFFBQVEsQ0FBQ0EsUUFBUSxDQUFNLEVBQzNCQyxNQUFNLENBQ0Y7VUFFUixDQUFDO1VBQUNkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRjtVQUNBO1VBS087VUFBVyxNQUFNbUIsSUFBSSxHQUF3QixDQUFDO1lBQUVDO1VBQVMsQ0FBRSxLQUFJO1lBQ3JFLE1BQU1DLFlBQVksR0FBSUMsQ0FBa0IsSUFBSTtjQUMzQ0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7Y0FDbEIsTUFBTUMsSUFBSSxHQUFHRixDQUFDLENBQUNHLE1BQXlCO2NBQ3hDLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFRLENBQUNILElBQUksQ0FBQztjQUNuQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsQ0FBQzs7WUFFRCxNQUFNSSxNQUFNLEdBQUdWLFNBQVMsQ0FBQ0osR0FBRyxDQUFDLENBQUNILFFBQVEsRUFBRUksS0FBSyxLQUFLUiw2QkFBQ0csa0JBQVE7Y0FBQ00sR0FBRyxFQUFFRCxLQUFLO2NBQUVKLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQUM7WUFFL0YsT0FDQ0o7Y0FBTXNCLFFBQVEsRUFBRVY7WUFBWSxHQUMxQlMsTUFBTSxFQUNQckI7Y0FBUXVCLElBQUksRUFBQztZQUFRLGVBQW1CLENBQ2xDO1VBRVQsQ0FBQztVQUFDaEMiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJleHBvcnRzIiwiSW5wdXRDb250cm9sIiwib3B0aW9uIiwibmFtZSIsImlzTXVsdGlwbGUiLCJjdXJyZW50VmFsdWUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJSYWRpbyIsIlJlYWN0IiwidmFsdWUiLCJjaGVja2VkIiwiUXVlc3Rpb24iLCJxdWVzdGlvbiIsImlucHV0cyIsIm9wdGlvbnMiLCJtYXAiLCJpbmRleCIsImtleSIsIlF1aXoiLCJxdWVzdGlvbnMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwidGFyZ2V0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJvblN1Ym1pdCIsInR5cGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL0lucHV0LnRzeCIsInRzL3ZpZXdzL1F1ZXN0aW9uLnRzeCIsInRzL3ZpZXdzL1F1aXpQcm9wcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==