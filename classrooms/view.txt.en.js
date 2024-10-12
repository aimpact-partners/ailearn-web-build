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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/classrooms/view",
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
        hash: 3850559242,
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
              "cancel": "Cancel",
              "confirm": "Confirm"
            },
            "coins": {
              "label": "Available coins",
              "assignments": "Assignments",
              "modules": "Modules"
            },
            "errors": {
              "10003": "The user could not be approved, try again later and if the problem persists contact support."
            },
            "form": {
              "title": "Invite user",
              "role": {
                "label": "Role",
                "placeholder": "Select role"
              },
              "name": {
                "label": "Name",
                "placeholder": "Input user name"
              },
              "email": {
                "label": "Email",
                "placeholder": "Input user email"
              },
              "button": "Submit"
            },
            "forms": {
              "approve": {
                "title": "Do you want to approve the user request?",
                "description": "Remember that approving the user's request also modifies their role and access within the classroom."
              },
              "delete": {
                "title": "Do you want to delete the user?",
                "description": "Remember that deleting a user also deletes their access and actions within the classroom."
              },
              "cancel": {
                "title": "Do you want to cancel the user invitation?",
                "description": "Remember that canceling the user's invitation also cancels their access and actions within the classroom."
              },
              "reject": {
                "title": "Do you want to reject the user request?",
                "description": "Remember that rejecting the user's request also cancels their access and actions within the classroom."
              },
              "edit": {
                "title": "Do you want to change the user role?",
                "info": "Remember that changing the role also modifies the user's access and actions inside the classroom."
              }
            },
            "editForm": {
              "title": "Do you want to change the user role?",
              "info": "Remember that changing the role also modifies the user's access and actions inside the classroom."
            },
            "roles": {
              "all": {
                "identifier": "all",
                "title": "All",
                "entity": "All"
              },
              "manager": {
                "title": "Teachers",
                "role": "Teacher",
                "single": "Teacher"
              },
              "member": {
                "title": "Student",
                "identifier": "members",
                "entity": "Students"
              },
              "pending": {
                "identifier": "pendings",
                "title": "Pending",
                "entity": "Pending"
              }
            },
            "list": {
              "managers": {
                "title": "Teachers",
                "role": "Teacher",
                "single": "Teacher"
              },
              "members": {
                "title": "Teachers",
                "role": "Teacher",
                "single": "Teacher"
              },
              "pendings": {
                "title": "Pending",
                "invited": "Invited"
              }
            },
            "messages": {
              "approval": {
                "success": "Successfully approve user",
                "error": "Error approving user"
              },
              "copy": "Text copied successfully ",
              "copyError": "Error when copying to clipboard"
            },
            "ERR_GENERATING_ACTIVITIES": "Error generating classes",
            "orgCode": "Classroom Code",
            "title": "Add a name",
            "description": "Add a description",
            "empty": {
              "rol": {
                "title": "No members registered with this profile"
              },
              "pending": {
                "title": "No members pending review"
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