System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/modal", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, ShareLesson, __beyond_pkg, hmr;
  _export("ShareLesson", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0036Form) {
      dependency_2 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Modal) {
      dependency_3 = _pragmateUi0036Modal;
    }, function (_pragmateUi0036Toast) {
      dependency_4 = _pragmateUi0036Toast;
    }, function (_aimpactAilearnApp100Config) {
      dependency_5 = _aimpactAilearnApp100Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_6 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/form', dependency_2], ['pragmate-ui/modal', dependency_3], ['pragmate-ui/toast', dependency_4], ['@aimpact/ailearn-app/config', dependency_5], ['@aimpact/chat/shared/components', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/lessons/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 406427886,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClassroomsList = void 0;
          var _react = require("react");
          var _item = require("./item");
          const GClassroomsList = ({
            gclassrooms,
            lesson,
            texts
          }) => {
            const items = gclassrooms.map(item => {
              return _react.default.createElement(_item.GClassroomItem, {
                texts: texts,
                key: item.id,
                lesson: lesson,
                item: item
              });
            });
            return _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement("h3", null, texts.title), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement("ul", {
              className: "classroom__list"
            }, items)));
          };
          exports.GClassroomsList = GClassroomsList;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4165287062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShareLesson = ShareLesson;
          var _react = require("react");
          var _classrooms = require("./classrooms");
          var _modal = require("pragmate-ui/modal");
          /*bundle*/
          function ShareLesson({
            gclassrooms,
            onClose,
            lesson,
            texts
          }) {
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", {
              className: "share__modal"
            }, _react.default.createElement(_classrooms.GClassroomsList, {
              lesson: lesson,
              gclassrooms: gclassrooms,
              texts: texts
            })));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1767074670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClassroomItem = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _form = require("pragmate-ui/form");
          var _config = require("@aimpact/ailearn-app/config");
          const GClassroomItem = ({
            gclassrooms,
            texts,
            item,
            lesson
          }) => {
            const [fetching, setFetching] = _react.default.useState(false);
            const [sessionURL, setSessionURL] = _react.default.useState(null);
            const onClick = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const session = await lesson.addSession(item.id);
                setFetching(false);
                setSessionURL(`${_config.default.params.baseUrl}/sessions/access/${session.id}`);
              } catch (e) {
                console.error(e);
              }
            };
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            let link = sessionURL;
            if (!sessionURL) {
              link = lesson.sessionsMap.has(item.id) ? lesson.sessionsMap.get(item.id).url : undefined;
            }
            const copy = () => {
              navigator.clipboard.writeText(link);
              _toast.toast.success(texts.copied);
            };
            return _react.default.createElement("li", {
              key: item.id
            }, name, _react.default.createElement("div", {
              className: "item__actions"
            }, link ? _react.default.createElement(_form.Button, {
              mode: "secondary",
              icon: "copy-link",
              onClick: copy
            }, texts.copy) : _react.default.createElement(_form.Button, {
              loading: fetching,
              onClick: onClick
            }, texts.assign)));
          };
          exports.GClassroomItem = GClassroomItem;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ShareLesson",
        "name": "ShareLesson"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ShareLesson') && _export("ShareLesson", ShareLesson = require ? require('./index').ShareLesson : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2l0ZW0iLCJHQ2xhc3Nyb29tc0xpc3QiLCJnY2xhc3Nyb29tcyIsImxlc3NvbiIsInRleHRzIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJHQ2xhc3Nyb29tSXRlbSIsImtleSIsImlkIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJleHBvcnRzIiwiX2NsYXNzcm9vbXMiLCJfbW9kYWwiLCJTaGFyZUxlc3NvbiIsIm9uQ2xvc2UiLCJNb2RhbCIsInNob3ciLCJfdG9hc3QiLCJfZm9ybSIsIl9jb25maWciLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXNzaW9uVVJMIiwic2V0U2Vzc2lvblVSTCIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbiIsImFkZFNlc3Npb24iLCJwYXJhbXMiLCJiYXNlVXJsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJzZWN0aW9uIiwibGluayIsInNlc3Npb25zTWFwIiwiaGFzIiwiZ2V0IiwidXJsIiwidW5kZWZpbmVkIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImNvcGllZCIsIkJ1dHRvbiIsIm1vZGUiLCJpY29uIiwibG9hZGluZyIsImFzc2lnbiJdLCJzb3VyY2VzIjpbIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQU9PLE1BQU1FLGVBQWUsR0FBR0EsQ0FBQztZQUFFQyxXQUFXO1lBQUVDLE1B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