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
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management",
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
        hash: 2965998667,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "activities": "Generate activities",
              "refine": "Refine",
              "generate": "Generate",
              "save": "Save",
              "edit": "Edit",
              "delete": "Delete",
              "clean": "Clean",
              "activity": "Activities",
              "update": "Upload Document",
              "next": "Next",
              "back": "Back",
              "cancel": "Cancel"
            },
            "activities": {
              "types": {
                "content-theory": "Topics",
                "multiple-choice": "Questions",
                "spoken": "Criterias",
                "topics": "Topics",
                "questions": "Questions"
              },
              "minutes": "Min",
              "description": "Description",
              "objective": "Objective",
              "type": "Type",
              "questions": "Questions",
              "topics": "Topics",
              "form": {
                "description": "Description",
                "title": "Title"
              },
              "actions": {
                "generateAnswers": "Generate answers"
              },
              "refine": {
                "type": {
                  "label": "What do you want to improve?",
                  "answers": "Answers",
                  "questions": "Questions"
                }
              },
              "materials": {
                "article": "Article",
                "synthesis": "Synthesis",
                "instructions": "Instructions",
                "flashcards": "Flashcards",
                "topics": "Topics",
                "criterias": "Criterias",
                "": "Instructions",
                "introduction": "Introduction"
              }
            },
            "ERR_GENERATING_ACTIVITIES": "Error generating activities",
            "languages": {
              "label": "Languages",
              "en": "English",
              "es": "Spanish",
              "pt": "Portuguese",
              "fr": "French",
              "de": "German",
              "it": "Italian"
            },
            "refine": {
              "module": {
                "title": "Refine the quality of your module",
                "subtitle": "Your insights will help us refine the content.",
                "textarea": {
                  "label": "Your Insights",
                  "placeholder": "Share specific suggestions or areas for improvement..."
                }
              }
            },
            "processMessages": ["Evaluating audience demographics...", "Estimating optimal class duration...", "Selecting potential learning activities...", "Determining the purpose of each activity...", "Sequencing activities for maximum engagement...", "Tailoring content to learning objectives...", "Adjusting difficulty levels for audience proficiency...", "Finalizing interactive elements for active learning...", "Crafting assessment strategies for knowledge retention...", "Optimizing content flow for seamless learning experience...", "Preparing final touches on educational design...", "Generation of personalized microlearning content complete."],
            "suggestions": {
              "step0": {
                "title": "Add your insights",
                "textArea": "Craft your module's objective here",
                "description": "Define the main goal or outcome that learners will achieve upon completing this module"
              },
              "step1": {
                "titulo": "Define Objective",
                "description": "Select or define the main objective of your module from the provided list of suggestions. These suggestions facilitate the handling and proper flow of the AI with your sought-after work. Find the option that aligns best with your educational goals."
              },
              "step2": {
                "forWhom": "Identify who the module is designed for to tailor the content appropriately. Options: School, University, Company.",
                "howLong": "Select the approximate duration of the module. Options: Brief (a quick overview), Standard (in-depth exploration), Extended (comprehensive coverage)."
              }
            },
            "title": "Create a Learning Module",
            "postTitle": "Select the aspects that the content to be generated in the following form must have",
            "module": "Learning Module Objective",
            "empty": "View your custom-created content here, tailored by our assistant based on your form inputs",
            "audience": {
              "school": "School",
              "university": "University",
              "company": "Company"
            },
            "moduleLength": {
              "brief": "Brief",
              "standard": "Standard",
              "extended": "Extended"
            },
            "form": {
              "audience": "Who is this module for?",
              "module": "What's the goal of this module?",
              "target": "Average Age of Learners",
              "duration": "Module Length",
              "languages": "Languages"
            },
            "labels": {
              "title": "Title",
              "description": "Description"
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