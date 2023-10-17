System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/modal", "pragmate-ui@0.0.37/toast", "@aimpact/ailearn-app@0.0.10/config", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, ShareLesson, __beyond_pkg, hmr;
  _export("ShareLesson", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi0037Components) {
      dependency_2 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Modal) {
      dependency_3 = _pragmateUi0037Modal;
    }, function (_pragmateUi0037Toast) {
      dependency_4 = _pragmateUi0037Toast;
    }, function (_aimpactAilearnApp0010Config) {
      dependency_5 = _aimpactAilearnApp0010Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_6 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.10"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.10/lessons/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/modal', dependency_3], ['pragmate-ui/toast', dependency_4], ['@aimpact/ailearn-app/config', dependency_5], ['@aimpact/chat/shared/components', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.10/lessons/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 2536543264,
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
        hash: 200743577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClassroomItem = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _components = require("pragmate-ui/components");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztZQUd6RixNQUFNQyxJQUFJLEdBQUcsTUFBSztjQUNqQkMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDO2NBQ25DVSxZQUFLLENBQUNDLE9BQU8sQ0FBQzVDLEtBQUssQ0FBQzZDLE1BQU0sQ0FBQztZQUM1QixDQUFDO1lBRUQsT0FDQ3pDO2NBQUlFLEdBQUcsRUFBRUgsSUFBSSxDQUFDSTtZQUFFLEdBQ2R3QixJQUFJLEVBQ0wzQjtjQUFLSSxTQUFTLEVBQUM7WUFBZSxHQUM1QnlCLElBQUksR0FDSjdCLDZCQUFDMEMsa0JBQU07Y0FBQ0MsSUFBSSxFQUFDLFdBQVc7Y0FBQ0MsSUFBSSxFQUFDLFdBQVc7Y0FBQzVCLE9BQU8sRUFBRW1CO1lBQUksR0FDckR2QyxLQUFLLENBQUN1QyxJQUFJLENBQ0gsR0FFVG5DLDZCQUFDMEMsa0JBQU07Y0FBQ0csT0FBTyxFQUFFbEMsUUFBUTtjQUFFSyxPQUFPLEVBQUVBO1lBQU8sR0FDekNwQixLQUFLLENBQUNrRCxNQUFNLENBRWQsQ0FDSSxDQUNGO1VBRVAsQ0FBQztVQUFDeEMiLCJuYW1lcyI6WyJHQ2xhc3Nyb29tc0xpc3QiLCJnY2xhc3Nyb29tcyIsImxlc3NvbiIsInRleHRzIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiUmVhY3QiLCJHQ2xhc3Nyb29tSXRlbSIsImtleSIsImlkIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJleHBvcnRzIiwiU2hhcmVMZXNzb24iLCJvbkNsb3NlIiwiTW9kYWwiLCJzaG93IiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2Vzc2lvblVSTCIsInNldFNlc3Npb25VUkwiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb24iLCJhZGRTZXNzaW9uIiwiY29uZmlnIiwicGFyYW1zIiwiYmFzZVVybCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJuYW1lIiwic2VjdGlvbiIsImxpbmsiLCJzZXNzaW9uc01hcCIsImhhcyIsImdldCIsInVybCIsInVuZGVmaW5lZCIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjb3BpZWQiLCJCdXR0b24iLCJtb2RlIiwiaWNvbiIsImxvYWRpbmciLCJhc3NpZ24iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NsYXNzcm9vbXMudHN4IiwidHMvaW5kZXgudHN4IiwidHMvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19