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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.03"], ["@aimpact/ailearn-app", "0.1.0-dev.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.03/home",
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
        hash: 15457992,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "join": "Join",
              "assign": "Assign",
              "create": "Create",
              "register": "Register",
              "activities": "Generate activities",
              "refine": "Refine",
              "generate": "Generate",
              "save": "Save",
              "imported": "Imported",
              "edit": "Edit",
              "delete": "Delete",
              "clean": "Clean",
              "activity": "Activities",
              "update": "Upload Document",
              "next": "Next",
              "back": "Back",
              "continue": "Continue",
              "cancel": "Cancel",
              "link": "Link",
              "gTooltip": "Classroom imported from Google",
              "import": "Import"
            },
            "assign": {
              "title": "Classrooms list",
              "noAssigned": "No assigned classrooms",
              "module": "Module",
              "item": {
                "description": "The item does not have description"
              },
              "messages": {
                "copied": "Link copied to clipboard",
                "assigned": "Classroom assigned"
              },
              "actions": {
                "dashboard": "Dashboard",
                "copy": "Copy link",
                "test": "Test",
                "navigate": "Navigate",
                "assign": {
                  "button": "Assign",
                  "label": "The module has not been assigned to this Classroom"
                }
              },
              "errors": {
                "default": "The module could not be assigned to this Classroom, please try again later or contact the administrator"
              }
            },
            "tour": {
              "buttons": {
                "nextBtnText": "Next",
                "prevBtnText": "Previous",
                "doneBtnText": "Done"
              },
              "step0": {
                "title": "Welcome to your profile",
                "description": "Here you can customize your experience in RVD.AI Rivadavia. You can update your personal information, indicate your preferred language, configure accessibility options, and adjust the audio speed."
              },
              "library": {
                "title": "Module Library",
                "description": "Explore our collection of learning modules created by experts. Find a variety of ready-to-use content for your classrooms. You can edit and customize these modules according to your criteria to adapt them to the needs of your students."
              },
              "drafts": {
                "title": "Draft Modules",
                "description": "Work on your draft learning modules until they are ready to be published and assigned to a classroom. They will be saved here so you can edit them as needed. Start creating your first module!"
              },
              "classrooms": {
                "title": "Classrooms",
                "description": "In this space, you can create classrooms where you can group your students and assign them the learning modules you publish. Organize your classes effectively and personalize them. Start creating your classrooms and transform the educational experience!"
              },
              "step3": {
                "title": "Need Help?",
                "description": "Find all the information in our tutorials designed to help you get the most out of RVD.AI. Learn how to create learning modules, manage your classrooms, and use all the tools we offer. Explore our tutorials and navigate the platform!"
              },
              "modules": {
                "title": "My Modules",
                "description": "This section will show the modules that the user has created."
              },
              "assignments": {
                "title": "My Assignments",
                "description": "Represent the assignments made in classrooms."
              }
            },
            "errors": {
              "default": "Operation failed. Please try again."
            },
            "title": "Welcome!",
            "profile": {
              "edit": "Go to my profile"
            },
            "assignments": {
              "title": "My Assignments",
              "activities": "My Activities"
            },
            "modules": {
              "title": "My Modules",
              "empty": "You don't have learning modules yet",
              "action": "Publish a module",
              "activities": "My Activities",
              "items": {
                "description": "This module has no description or objective",
                "title": "This module has no title"
              }
            },
            "drafts": {
              "title": "My Drafts",
              "empty": "You don't have drafts",
              "action": "Create",
              "items": {
                "description": "This module has no description or objective",
                "title": "This draft has no title"
              }
            },
            "library": {
              "title": "Module Library",
              "actions": {
                "link": "See all",
                "use": "Use"
              }
            },
            "classrooms": {
              "title": "My Classrooms",
              "empty": "You don't have classrooms",
              "action": "Create",
              "items": {
                "description": "This classroom has no description or objective"
              }
            },
            "students": {
              "title": "My Students"
            },
            "members": {
              "children": "My Children"
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