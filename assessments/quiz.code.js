System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/base", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, Quiz, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0036Components) {
      dependency_5 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_6 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/assessments/quiz",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/base', dependency_2], ['react', dependency_3], ['pragmate-ui/form', dependency_4], ['pragmate-ui/components', dependency_5], ['@aimpact/chat/shared/hooks', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/assessments/quiz.code');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4260947061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _question = require("./views/question-2");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _question.Widget;
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
        hash: 3126064951,
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
            isMultiple
          }) => {
            const Control = isMultiple ? _form.CheckBox : _form.Radio;
            return _react.default.createElement(Control, {
              label: option,
              value: option,
              name: name
            });
          };
          exports.InputControl = InputControl;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4040768564,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getFormData = exports.Quiz = void 0;
          var _react = require("react");
          var _question = require("./question-2");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          const getFormData = formElement => {
            const formData = {};
            Array.from(formElement.elements).forEach(element => {
              if (element.name) {
                formData[element.name] = element.type === 'checkbox' ? element.checked : element.value;
              }
            });
            return formData;
          };
          exports.getFormData = getFormData;
          /*bundle*/
          const Quiz = ({
            assessments
          }) => {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const handleSubmit = e => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              const data = getFormData(form);
              console.log(formData, data); // Aquí puedes manejar los resultados
            };

            if (!textsReady) return _react.default.createElement(_components.Spinner, null);
            const output = assessments.questions.map((question, index) => _react.default.createElement(_question.Question, {
              key: index,
              index: index,
              question: question
            }));
            return _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: "assessment__container"
            }, _react.default.createElement("h3", null, assessments.title), output, _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "submit"
            }, texts?.finish));
          };
          exports.Quiz = Quiz;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/question-2
      **********************************/

      ims.set('./views/question-2', {
        hash: 126231045,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Question = void 0;
          var _react = require("react");
          var _Input = require("./Input");
          const Question = ({
            question
          }) => {
            const inputs = question.options.map((option, index) => {
              const name = question.text.replace(/[^a-zA-Z0-9]/g, '');
              return _react.default.createElement(_Input.InputControl, {
                key: index,
                option: option,
                name: name,
                isMultiple: question.isMultiple
              });
            });
            const onSubmit = event => {
              event.preventDefault();
            };
            return _react.default.createElement("div", {
              className: "question__container"
            }, _react.default.createElement("h4", null, question.text), inputs);
          };
          exports.Question = Question;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
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
        (require || prop === 'Quiz') && _export("Quiz", Quiz = require ? require('./views/index').Quiz : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7VUFFVCxDQUFDO1VBQUNsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREY7VUFDQTtVQWFPLE1BQU0wQyxRQUFRLEdBQTRCLENBQUM7WUFBRUY7VUFBUSxDQUFpQixLQUFJO1lBQ2hGLE1BQU1XLE1BQU0sR0FBR1gsUUFBUSxDQUFDWSxPQUFPLENBQUNiLEdBQUcsQ0FBQyxDQUFDckMsTUFBTSxFQUFFdUMsS0FBSyxLQUFJO2NBQ3JELE1BQU10QyxJQUFJLEdBQUdxQyxRQUFRLENBQUNhLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7Y0FDdkQsT0FBTzlDLDZCQUFDUCxtQkFBWTtnQkFBQzBDLEdBQUcsRUFBRUYsS0FBSztnQkFBRXZDLE1BQU0sRUFBRUEsTUFBTTtnQkFBRUMsSUFBSSxFQUFFQSxJQUFJO2dCQUFFQyxVQUFVLEVBQUVvQyxRQUFRLENBQUNwQztjQUFVLEVBQUk7WUFDakcsQ0FBQyxDQUFDO1lBRUYsTUFBTXlDLFFBQVEsR0FBR1UsS0FBSyxJQUFHO2NBQ3hCQSxLQUFLLENBQUMxQixjQUFjLEVBQUU7WUFDdkIsQ0FBQztZQUVELE9BQ0NyQjtjQUFLc0MsU0FBUyxFQUFDO1lBQXFCLEdBQ25DdEMseUNBQUtnQyxRQUFRLENBQUNhLElBQUksQ0FBTSxFQUN2QkYsTUFBTSxDQUNGO1VBRVIsQ0FBQztVQUFDbkQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJleHBvcnRzIiwiSW5wdXRDb250cm9sIiwib3B0aW9uIiwibmFtZSIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJSYWRpbyIsIlJlYWN0IiwibGFiZWwiLCJ2YWx1ZSIsImdldEZvcm1EYXRhIiwiZm9ybUVsZW1lbnQiLCJmb3JtRGF0YSIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0eXBlIiwiY2hlY2tlZCIsIlF1aXoiLCJhc3Nlc3NtZW50cyIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJ0YXJnZXQiLCJGb3JtRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiU3Bpbm5lciIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm1hcCIsInF1ZXN0aW9uIiwiaW5kZXgiLCJRdWVzdGlvbiIsImtleSIsIkZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImZpbmlzaCIsImlucHV0cyIsIm9wdGlvbnMiLCJ0ZXh0IiwicmVwbGFjZSIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9JbnB1dC50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9xdWVzdGlvbi0yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19