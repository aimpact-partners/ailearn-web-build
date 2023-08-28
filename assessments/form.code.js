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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/react-18-widgets/base', dependency_2], ['react', dependency_3], ['pragmate-ui/form', dependency_4], ['pragmate-ui/components', dependency_5], ['@aimpact/chat/shared/hooks', dependency_6]]);
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

      /********************************
      INTERNAL MODULE: ./views/Question
      ********************************/

      ims.set('./views/Question', {
        hash: 3965328984,
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
            console.log(10, question);
            const inputs = question.options.map((option, index) => {
              const name = question.text.replace(/[^a-zA-Z0-9]/g, '');
              return React.createElement(_Input.InputControl, {
                key: index,
                option: option,
                name: name,
                isMultiple: question.isMultiple
              });
            });
            return React.createElement("div", {
              className: "question__container"
            }, React.createElement("h4", null, question.text), inputs);
          };
          exports.Question = Question;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/Quiz
      ****************************/

      ims.set('./views/Quiz', {
        hash: 2547136507,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Quiz = void 0;
          var _react = require("react");
          var _Question = require("./Question");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          const Quiz = ({
            assessments
          }) => {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const handleSubmit = e => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              console.log(formData); // Aquí puedes manejar los resultados
            };

            if (!textsReady) return _react.default.createElement(_components.Spinner, null);
            const output = assessments.questions.map((question, index) => _react.default.createElement(_Question.Question, {
              key: index,
              question: question
            }));
            return _react.default.createElement("form", {
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
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/Quiz",
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
        (require || prop === 'Quiz') && _export("Quiz", Quiz = require ? require('./views/Quiz').Quiz : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1A3Qiw2QkFBQ2lDLGtCQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLElBQUksRUFBQztZQUFRLEdBQ3JDakIsS0FBSyxFQUFFa0IsTUFBTSxDQUNOLENBQ0g7VUFFVCxDQUFDO1VBQUM1QyIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsImV4cG9ydHMiLCJJbnB1dENvbnRyb2wiLCJvcHRpb24iLCJuYW1lIiwiaXNNdWx0aXBsZSIsIkNvbnRyb2wiLCJDaGVja0JveCIsIlJhZGlvIiwiUmVhY3QiLCJsYWJlbCIsInZhbHVlIiwiUXVlc3Rpb24iLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dHMiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJ0ZXh0IiwicmVwbGFjZSIsImtleSIsImNsYXNzTmFtZSIsIlF1aXoiLCJhc3Nlc3NtZW50cyIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJ0YXJnZXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiU3Bpbm5lciIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm9uU3VibWl0IiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwidHlwZSIsImZpbmlzaCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvSW5wdXQudHN4IiwidHMvdmlld3MvUXVlc3Rpb24udHN4IiwidHMvdmlld3MvUXVpei50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==