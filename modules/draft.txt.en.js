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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/draft",
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
        hash: 4184437628,
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
              "generate": "Generate",
              "next": "Next",
              "publish": "Publish",
              "removeSuggestions": "Cancel suggestions",
              "refine": "Refine",
              "save": "Save",
              "update": "Upload Document",
              "upload": "Upload Image"
            },
            "grades": {
              "7": "Year 7",
              "8": "Year 8",
              "9": "Year 9",
              "10": "Year 10",
              "11": "Year 11",
              "12": "Year 12",
              "year-7": "Year 7",
              "year-8": "Year 8",
              "year-9": "Year 9",
              "year-10": "Year 10",
              "year-11": "Year 11",
              "year-12": "Year 12"
            },
            "languages": {
              "label": "Languages",
              "en": "English",
              "es": "Spanish",
              "pt": "Portuguese",
              "fr": "French",
              "de": "German",
              "it": "Italian"
            },
            "processMessages": ["Evaluating audience demographics...", "Estimating optimal class duration...", "Selecting potential learning activities...", "Determining the purpose of each activity...", "Sequencing activities for maximum engagement...", "Tailoring content to learning objectives...", "Adjusting difficulty levels for audience proficiency...", "Finalizing interactive elements for active learning...", "Crafting assessment strategies for knowledge retention...", "Optimizing content flow for seamless learning experience...", "Preparing final touches on educational design...", "Generation of personalized microlearning content complete."],
            "changingObjective": ["Adapting the module to effectively highlight key concepts...", "Configuring interactive activities to facilitate active learning...", "Adding adaptable content to various themes and areas of study...", "Structuring the module to promote critical thinking skills...", "Incorporating innovative teaching techniques to improve knowledge retention...", "Ensuring that the module meets general educational standards...", "Fostering curiosity and self-directed learning through module objectives...", "Implementing updated pedagogical methodologies for a comprehensive approach...", "Optimizing the module structure for a staggered and progressive learning process...", "Finalizing the customization of the module for an enriching and complete educational experience..."],
            "generatingDraft": ["Identifying the best activities for the module's objective...", "Analyzing the audience to adapt educational activities...", "Estimating the optimal duration of each module activity...", "Selecting types of activities to promote dynamic learning...", "Creating individual objectives for each proposed activity...", "Integrating activities that promote interaction and debate...", "Designing tasks that reinforce theoretical and practical knowledge...", "Incorporating exercises for critical analysis of information...", "Establishing activities to develop research skills...", "Developing dynamics that stimulate reflection on current issues...", "Adjusting activities to cover different learning styles...", "Configuring formative assessments to measure progress...", "Including interactive resources to complement teaching...", "Finalizing the selection of activities to ensure the fulfillment of the objectives...", "Compiling the final draft of the module with all the designed activities..."],
            "objectiveSuggestions": ["Evaluating current educational guidelines...", "Adapting suggestions to the ministry of education standards...", "Incorporating best pedagogical practices...", "Personalizing content for comprehensive learning...", "Optimizing suggestions for 21st century skills...", "Integrating critical skills and reflective analysis...", "Aligning objectives with national educational expectations...", "Enriching the module with interdisciplinary approaches...", "Strengthening the proposal with educational values and ethics...", "Finalizing adjustments for meaningful and updated learning..."],
            "moduleSuggestion": {
              "title": "Let's Innovate Education!",
              "description": "Craft your learning module and its activities with AI as your co-creator. Embark on an educational journey where technology meets creativity.",
              "buttons": {
                "inspiration": "Ignite Inspiration",
                "manual": "Craft Manually"
              }
            },
            "suggestions": {
              "step1": {
                "titulo": "Define Objective",
                "description": "Select or define the main objective of your module from the provided list of suggestions. These suggestions facilitate the handling and proper flow of the AI with your sought-after work. Find the option that aligns best with your educational goals."
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
              "brief": "Single Session",
              "standard": "⁠Double Session",
              "extended": "Monthly Module"
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
                "title": "Let's build a new learning module together",
                "subtitle": "Select the characteristics you want to give to the module"
              },
              "grades": {
                "label": "Grade level",
                "error": "Please select a grade level"
              },
              "schools": {
                "label": "Ownership",
                "select": "Select ownership",
                "account": "Current account",
                "error": "You need to specify the ownership of the learning module"
              },
              "objective": {
                "title": "Topic or objective",
                "textArea": "Craft your module's objective here",
                "description": "Define your module's main learning outcome."
              },
              "suggestions": "If you wish, select one of the following improvement options and a refinement of the defined objective will be carried out.",
              "forWhom": "Identify who the module is designed for to tailor the content appropriately. Options: School, University, Company.",
              "howLong": "Select the approximate duration of the module. Options: Brief (a quick overview), Standard (in-depth exploration), Extended (comprehensive coverage)."
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