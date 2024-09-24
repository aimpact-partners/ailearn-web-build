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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.9"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.9/modules/management/settings",
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
        hash: 2370088319,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Add",
              "analyse": "Suggest Improvements",
              "activities": "Generate activities",
              "activity": "Activities",
              "applySuggestions": "Apply Suggestions",
              "back": "Back",
              "cancel": "Cancel",
              "continue": "Continue",
              "cover": "Generate cover",
              "clean": "Clean",
              "create": "Create",
              "confirm": "Confirm",
              "delete": "Delete",
              "edit": "Edit",
              "generate": "Generate with AI",
              "next": "Next",
              "publish": "Publish",
              "removeSuggestions": "Ignore suggestions",
              "refine": "Refine",
              "save": "Save",
              "update": "Upload Document",
              "upload": "Upload Image",
              "manual": "Manual Design"
            },
            "activities": {
              "minutes": "Min",
              "description": "Description",
              "objective": "Objective",
              "type": "Type",
              "questions": "Questions",
              "topics": "Topics",
              "title": "List of activities",
              "empty": {
                "title": "You don't have any activities yet",
                "text": "Add one activity to your module"
              },
              "createModal": {
                "title": "Select the activity type",
                "validation": "You must complete the title and description of the module to be able to add an activity.",
                "validationTitle": "Incomplete module"
              },
              "delete": {
                "title": "Do you really want to delete this activity?",
                "subtitle": "By deleting this activity, you won't be able to recover it."
              },
              "types": {
                "content-theory": "Content/Theory",
                "debate": "Debate",
                "multiple-choice": "Multiple Choice",
                "character-talk": "Conversation with a Character",
                "spoken": "Oral Presentation"
              },
              "descriptionTypes": {
                "content-theory": "Article, adaptations and audios about a specific topic to build a theoretical base.",
                "multiple-choice": "Multiple choice questions to evaluate comprehension",
                "character-talk": "Learn through a conversation with a fictional character",
                "debate": "One-on-one conversation with a virtual assistant to explore and deepen topics",
                "spoken": "Oral presentation on an assigned topic to evaluate knowledge or other uses such as creativity, original presentations, etc."
              },
              "states": {
                "empty": "Empty activity",
                "completed": "Completed",
                "processing": "In edition"
              }
            },
            "breadcrumb": {
              "modules": "Modules",
              "management": "Draft"
            },
            "module": {
              "title": "Add the Learning Module name here",
              "description": {
                "label": "Description",
                "placeholder": "Add description here"
              },
              "objective": "Module objetive",
              "owner": "Owner",
              "actions": {
                "description": "Add descripton",
                "addActivity": "Add activity"
              },
              "activities": {
                "title": "List of activities",
                "empty": {
                  "title": "Module without activities",
                  "text": "Add one activity to your module"
                }
              }
            },
            "refine": {
              "title": "AI Activity Design Assistant",
              "description": "Use the AI assistant to customize and improve the activity design.",
              "description2": "Simply write what you have in mind, and the AI will help structure the activity to fit your learning goals.",
              "textarea": {
                "label": "Your Insights",
                "placeholder": "Share specific suggestions or areas for improvement..."
              },
              "image": {
                "title": "Refine the quality of your image",
                "subtitle": "Your insights will help us refine the content.",
                "confirm": {
                  "title": "Do you want to replace the current image?",
                  "subtitle": "If you confirm, the current image will be replaced."
                }
              },
              "module": {
                "title": "Refine the quality of your module",
                "subtitle": "Your insights will help us refine the content.",
                "confirm": {
                  "title": "Do you want to replace the current content?",
                  "subtitle": "If you confirm, the genreration process will replace the current content with the new one. If you want to keep the current content, click cancel."
                }
              }
            },
            "modal": {
              "cancel": {
                "title": "Are you sure?",
                "description": "Your changes have not been saved. If you continue, you will lose them."
              }
            },
            "delete": {
              "title": "Delete Content",
              "description": "Are you sure you want to delete the content of this activity?"
            },
            "picture": {
              "title": "Generate the best image for your module",
              "description": "This tool will help you generate the best image for your module. You can upload an image and we will generate the best image for your module. You can also use the image editor to edit the image and generate the best image for your module.",
              "notes": {
                "label": "Notes",
                "placeholder": "Share your suggestions to create the best image for your module"
              },
              "confirm": {
                "title": "Do you want to replace the current image?",
                "subtitle": "If you confirm, the current image will be replaced."
              }
            },
            "errors": {
              "CONTACT_ADMIN": "Please contact the administrator"
            },
            "toast": {
              "modulePublished": "'Module published successfully",
              "errorPublishingModule": "Error while publishing module"
            },
            "moduleTour": {
              "moduleName": {
                "title": "Add Module Name",
                "description": "Enter the name of the learning module in this field."
              },
              "description": {
                "title": "Description",
                "description": "Add a description of the module here."
              },
              "image": {
                "title": "Generate Image",
                "description": "Click this icon to generate an image of the module using AI."
              },
              "activities": {
                "title": "Activities",
                "description": "Here you can view the activities added in the module."
              },
              "addActivity": {
                "title": "Add Activity",
                "description": "Click this button to add a new activity to the module."
              },
              "publish": {
                "title": "Once Completed",
                "description": "Click this button to publish the module once completed."
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