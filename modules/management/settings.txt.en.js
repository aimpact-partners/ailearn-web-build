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
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/settings",
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
        hash: 66250633,
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
              "generate": "Generate",
              "next": "Next",
              "publish": "Publish",
              "removeSuggestions": "Cancel suggestions",
              "refine": "Refine",
              "save": "Save",
              "update": "Upload Document",
              "upload": "Upload Image"
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
                "title": "Module without activities",
                "text": "Add one activity to your module"
              },
              "createModal": {
                "title": "Select the activity type"
              },
              "delete": {
                "title": "Do you really want to delete this activity?",
                "subtitle": "By deleting this activity, you won't be able to recover it."
              },
              "types": {
                "content-theory": "Content/Theory",
                "multiple-choice": "Multiple Choice",
                "character-talk": "Character Talk",
                "debate": "Debate",
                "spoken": "Spoken"
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
                "processing": "In process"
              }
            },
            "breadcrumb": {
              "modules": "Modules",
              "management": "Draft"
            },
            "module": {
              "title": "Add the Learning Module name here",
              "description": "Description",
              "objective": "Module objetive",
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
            "generatingImage": ["Receiving text for image generation...", "Analyzing educational module context...", "Selecting visual elements according to school year...", "Composing preliminary sketches based on text...", "Adjusting graphic details and visual style...", "Incorporating pedagogical criteria in the image...", "Optimizing the image for better educational retention...", "Finalizing image rendering...", "Reviewing quality and coherence with the module...", "Image successfully generated and ready for integration into the module."],
            "refine": {
              "module": {
                "title": "Refine the quality of your module",
                "subtitle": "Your insights will help us refine the content.",
                "confirm": {
                  "title": "Do you want to replace the current content?",
                  "subtitle": "If you confirm, the genreration process will replace the current content with the new one. If you want to keep the current content, click cancel."
                }
              },
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
              }
            },
            "toast": {
              "modulePublished": "'Module published successfully",
              "errorPublishingModule": "Error while publishing module"
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