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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/modules/draft",
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
        hash: 386302730,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
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
              "removeSuggestions": "Remove suggestions",
              "refine": "Refine",
              "save": "Save",
              "update": "Upload Document",
              "upload": "Upload Image"
            },
            "breadcrumb": {
              "modules": "Modules",
              "management": "Draft"
            },
            "coins": {
              "alert": {
                "title": "You need AI credits",
                "description": "You need to get AI credits to enable all the features with artificial intelligence.",
                "action": "Accept"
              },
              "modal": {
                "title": "Request AI credits to continue with this feature",
                "description": "You need to get AI credits to enable all the features with artificial intelligence.",
                "actions": {
                  "cancel": "No, not now, thanks",
                  "confirm": "Request now"
                },
                "errors": {
                  "noCredits": "The assignment could not be processed, please contact the institution's administrator"
                }
              },
              "header": {
                "actions": {
                  "require": "REQUEST CREDITS",
                  "available": "AVAILABLE CREDITS"
                },
                "messages": {
                  "add": "You acquired credits to use the AI functions",
                  "middle": "You consumed 50% of the available credits",
                  "finishing": "You are running out of available AI credits"
                }
              }
            },
            "audience": {
              "input": {
                "label": "Grade level",
                "error": "Please select a grade level",
                "select": "Select grade level"
              },
              "argentine": {
                "4": "4th grade",
                "5": "5th grade",
                "6": "6th grade",
                "7": "7th grade",
                "8": "1st year",
                "9": "2nd year",
                "10": "3rd year",
                "11": "4th year",
                "12": "5th year",
                "13": "6th year"
              },
              "k12": {
                "4": "Year 4",
                "5": "Year 5",
                "6": "Year 6",
                "7": "Year 7",
                "8": "Year 8",
                "9": "Year 9",
                "10": "Year 10",
                "11": "Year 11",
                "12": "Year 12"
              }
            },
            "languages": {
              "select": {
                "label": "Language",
                "placeholder": "Select Language"
              },
              "selectLabel": "Select Language",
              "label": "Languages",
              "en": "English",
              "es": "Spanish",
              "pt": "Portuguese",
              "fr": "French",
              "de": "German",
              "it": "Italian"
            },
            "refine": {
              "activities": {
                "title": "Refine the activities",
                "description": "Define the observations you consider important to generate the activities you want."
              },
              "examples": {
                "title": "Examples of observations",
                "actions": {
                  "see": "See examples",
                  "select": "Use",
                  "back": "back"
                },
                "items": ["Create theoretical activities and selection evaluations only", "Create theoretical, debate and oral evaluation activities where the students' form of expression and argumentation is analyzed", "Start with a basic selection evaluation that allows the student to discover their knowledge, then a theoretical evaluation and finish with an oral evaluation where the students' form of expression and argumentation is analyzed"]
              },
              "textarea": {
                "label": "Your Insights",
                "placeholder": "Share specific suggestions or areas for improvement..."
              },
              "errors": {
                "default": "An error occurred, please try again."
              }
            },
            "suggestions": {
              "objective": {
                "actions": {
                  "label": "Would you like to use this enhanced version of your objective?",
                  "cancel": "No, thanks",
                  "confirm": "Yes, update my objective"
                }
              },
              "total": "Selected suggestions",
              "origin": "Ministry",
              "label": "Suggestion",
              "irrelevant": "The objective of the provided module seems not to be suitable for the defined audience. Please, check this and try again."
            },
            "title": "Create a Learning Module",
            "postTitle": "Select the aspects that the content to be generated in the following form must have",
            "module": "Learning Module Objective",
            "empty": "View your custom-created content here, tailored by our assistant based on your form inputs",
            "duration": {
              "brief": "Brief (3 activities)",
              "standard": "Standard (5 activities)",
              "extended": "Extended (7 activities)"
            },
            "form": {
              "module": "What's the goal of this module?",
              "target": "Average Age of Learners",
              "duration": "Module Length",
              "languages": "Languages"
            },
            "labels": {
              "title": "Title",
              "description": "Description"
            },
            "objectiveTour": {
              "buttons": {
                "nextBtnText": "Next",
                "prevBtnText": "Previous",
                "doneBtnText": "Done"
              },
              "language": {
                "title": "Select Language",
                "description": "Select the language in which the learning module will be developed."
              },
              "ownership": {
                "title": "Select Administrator",
                "description": "Choose the administrator responsible for the learning module."
              },
              "audience": {
                "title": "Select School Year",
                "description": "Indicate the school year for which the module is intended."
              },
              "duration": {
                "title": "Number of Activities",
                "description": "Define the number of activities that the learning module will include. You can adjust this amount according to your needs."
              },
              "objective": {
                "title": "Module Objective",
                "description": "Write the main objective of the learning module. This objective will help guide the content and activities of the module."
              },
              "saveButton": {
                "title": "Save Module",
                "description": "Save the details of the learning module. Once saved, you can request credits to get AI recommendations."
              },
              "requestCredits": {
                "title": "Request Credits",
                "description": "Request credits to be able to access all AI functionalities."
              },
              "suggestions": {
                "title": "Suggest Improvements",
                "description": "Get improvement suggestions for the title and options defined by the ministry of education to be implemented in the objective."
              }
            },
            "wizard": {
              "messages": {
                "save": "Objective saved successfully"
              },
              "introduction": {
                "title": "Let's build a new learning module",
                "subtitle": "Select the features you want to give to the module"
              },
              "duration": {
                "placeholder": "Select",
                "label": "Number of activities"
              },
              "grades": {
                "label": "Grade level",
                "error": "Please select a grade level",
                "select": "Select grade level"
              },
              "schools": {
                "label": "Administrator",
                "select": "Select administrator",
                "account": "Current account",
                "error": "You need to specify the administrator of the learning module"
              },
              "objective": {
                "title": "Topic or objective",
                "textArea": "Module objective",
                "description": "Define the main learning outcome of your module."
              },
              "suggestions": "If you wish, select one of the following improvement options and a refinement of the defined objective will be carried out.",
              "forWhom": "Identify who the module is designed for to adapt the content accordingly. Options: School, University, Company.",
              "howLong": "Select the approximate duration of the module. Options: Brief (a quick overview), Standard (in-depth exploration), Extended (full coverage).",
              "generatingModule": ["Starting AI-assisted design for the learning module...", "Analyzing the specified grade level and module duration...", "Gathering educational standards for the selected grade level...", "Consulting curricular databases for age-appropriate activities...", "Applying AI creativity for the initial draft of learning activities...", "Refining activities based on best pedagogical practices...", "Integrating interactive elements tailored to the module duration...", "Optimizing the flow of the learning module for student engagement...", "Performing final reviews on the coherence and consistency of the module...", "Learning module and activities successfully generated by AI assistance."],
              "modalSuggestions": {
                "title": "Let's move on",
                "description": "Let's design the module activities.",
                "buttons": {
                  "generate": "Generate with AI",
                  "manual": "Manual design"
                }
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