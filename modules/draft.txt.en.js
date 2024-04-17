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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/draft",
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
        hash: 3486914046,
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
            "grades": {
              "7": "Year 7",
              "8": "Year 8",
              "9": "Year 9",
              "10": "Year 10",
              "11": "Year 11",
              "12": "Year 12"
            },
            "languages": {
              "select": {
                "label": "Lanaguage",
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
            "changingObjective": ["Adapting the module to effectively highlight key concepts...", "Configuring interactive activities to facilitate active learning...", "Adding adaptable content to various themes and areas of study...", "Structuring the module to promote critical thinking skills...", "Incorporating innovative teaching techniques to improve knowledge retention...", "Ensuring that the module meets general educational standards...", "Fostering curiosity and self-directed learning through module objectives...", "Implementing updated pedagogical methodologies for a comprehensive approach...", "Optimizing the module structure for a staggered and progressive learning process...", "Finalizing the customization of the module for an enriching and complete educational experience..."],
            "generatingDraft": ["Identifying the best activities for the module's objective...", "Analyzing the audience to adapt educational activities...", "Estimating the optimal duration of each module activity...", "Selecting types of activities to promote dynamic learning...", "Creating individual objectives for each proposed activity...", "Integrating activities that promote interaction and debate...", "Designing tasks that reinforce theoretical and practical knowledge...", "Incorporating exercises for critical analysis of information...", "Establishing activities to develop research skills...", "Developing dynamics that stimulate reflection on current issues...", "Adjusting activities to cover different learning styles...", "Configuring formative assessments to measure progress...", "Including interactive resources to complement teaching...", "Finalizing the selection of activities to ensure the fulfillment of the objectives...", "Compiling the final draft of the module with all the designed activities..."],
            "objectiveSuggestions": ["Evaluating current educational guidelines...", "Adapting suggestions to the ministry of education standards...", "Incorporating best pedagogical practices...", "Personalizing content for comprehensive learning...", "Optimizing suggestions for 21st century skills...", "Integrating critical skills and reflective analysis...", "Aligning objectives with national educational expectations...", "Enriching the module with interdisciplinary approaches...", "Strengthening the proposal with educational values and ethics...", "Finalizing adjustments for meaningful and updated learning..."],
            "processMessages": ["Evaluating audience demographics...", "Estimating optimal class duration...", "Selecting potential learning activities...", "Determining the purpose of each activity...", "Sequencing activities for maximum engagement...", "Tailoring content to learning objectives...", "Adjusting difficulty levels for audience proficiency...", "Finalizing interactive elements for active learning...", "Crafting assessment strategies for knowledge retention...", "Optimizing content flow for seamless learning experience...", "Preparing final touches on educational design...", "Generation of personalized microlearning content complete."],
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
              "irrelevant": "The content added as an objective is not applicable for a module, please verify and try again"
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
            "duration": {
              "brief": "Brief (3 activities)",
              "standard": "Standard (5 activities)",
              "extended": "Extended (7 activities)"
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