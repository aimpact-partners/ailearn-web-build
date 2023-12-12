System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/modal", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.23/config", "pragmate-ui@0.0.3/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, ShareLesson, __beyond_pkg, hmr;
  _export("ShareLesson", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_2 = _pragmateUi003Components;
    }, function (_pragmateUi003Modal) {
      dependency_3 = _pragmateUi003Modal;
    }, function (_aimpactChat101SharedComponents) {
      dependency_4 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0023Config) {
      dependency_5 = _aimpactAilearnApp0023Config;
    }, function (_pragmateUi003Toast) {
      dependency_6 = _pragmateUi003Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.23"], ["@aimpact/ailearn-app", "0.0.23"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.21/classworks/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/modal', dependency_3], ['@aimpact/chat/shared/components', dependency_4], ['@aimpact/ailearn-app/config', dependency_5], ['pragmate-ui/toast', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.21/classworks/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 2278012352,
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
            const items = [...gclassrooms.values()].map(item => {
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
        hash: 3819775593,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClassroomItem = void 0;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _toast = require("pragmate-ui/toast");
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
                setSessionURL(`${_config.default.params.baseUrl}/assignments/${session.id}`);
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
            }, link ? _react.default.createElement(_components.Button, {
              mode: "secondary",
              icon: "copy-link",
              onClick: copy
            }, texts.copy) : _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2l0ZW0iLCJHQ2xhc3Nyb29tc0xpc3QiLCJnY2xhc3Nyb29tcyIsImxlc3NvbiIsInRleHRzIiwiaXRlbXMiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJHQ2xhc3Nyb29tSXRlbSIsImtleSIsImlkIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJleHBvcnRzIiwiX2NsYXNzcm9vbXMiLCJfbW9kYWwiLCJTaGFyZUxlc3NvbiIsIm9uQ2xvc2UiLCJNb2RhbCIsInNob3ciLCJfY29tcG9uZW50cyIsIl9jb25maWciLCJfdG9hc3QiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXNzaW9uVVJMIiwic2V0U2Vzc2lvblVSTCIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbiIsImFkZFNlc3Npb24iLCJwYXJhbXMiLCJiYXNlVXJsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJzZWN0aW9uIiwibGluayIsInNlc3Npb25zTWFwIiwiaGFzIiwiZ2V0IiwidXJsIiwidW5kZWZpbmVkIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsImNvcGllZCIsIkJ1dHRvbiIsIm1vZGUiLCJpY29uIiwibG9hZGluZyIsImFzc2lnbiJdLCJzb3VyY2VzIjpbIi90cy9jbGFzc3Jvb21zLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQU9PLE1BQU1FLGVBQWUsR0FBR0EsQ0FBQztZQUFF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