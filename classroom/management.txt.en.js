System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/classroom/management",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('en');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 555126895,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Add",
              "approve": "Approve",
              "reject": "Reject",
              "invite": "Invite",
              "copy": "Copy to clipboard",
              "create": "Create",
              "activities": "Generate activities",
              "refine": "Refine",
              "generate": "Generate",
              "save": "Save",
              "edit": "Edit",
              "delete": "Delete",
              "clean": "Clean",
              "activity": "Activities",
              "upload": "Upload",
              "next": "Next",
              "back": "Back",
              "cancel": "Cancel"
            },
            "ERR_GENERATING_ACTIVITIES": "Error generating classes",
            "classCode": "Classroom Code",
            "title": "Create a Classroom",
            "postTitle": "Select the aspects that the content to be generated in the following form must have",
            "class": "Learning Classroom Objective",
            "empty": {
              "title": "Classroom Not Found",
              "pending": "Excellent, you no longer have any outstanding issues to resolve. All invitations have been resolved.",
              "labelList": "Add users to this list by clicking the %action button.",
              "description": "Oops! The classroom was not found. There's a possibility you're using an outdated link or searching for a non-existent classroom. We invite you to create a new one and continue exploring this incredible world of teaching and learning. Let's embark on a new educational journey together! 🌟"
            },
            "placeholder": {
              "name": "What will be the name of the classroom?",
              "description": "What's the mission of this classroom?"
            },
            "labels": {
              "name": "Name",
              "description": "Description"
            },
            "list": {
              "teachers": {
                "title": "Teachers",
                "single": "Teacher"
              },
              "students": {
                "title": "Students",
                "single": "Student"
              },
              "pending": {
                "title": "Pending",
                "single": "",
                "invited": "Invited"
              }
            },
            "modal": {
              "edit": {
                "title": "Would you like to change the user role ?",
                "info": "Remember that changing the role also modifies the user's access and actions inside the classroom."
              },
              "invite": {
                "title": "Invite a user as %role"
              }
            },
            "system": {
              "invite": {
                "success": "Invitation sent"
              }
            }
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./txt",
        "from": "txt",
        "name": "txt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
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