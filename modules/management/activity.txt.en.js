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
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/activity",
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
        hash: 3996010105,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Add",
              "manual": "Generate manually",
              "confirm": "Confirm",
              "analyse": "Suggest Improvements",
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
              "back": "Back to",
              "cancel": "Cancel",
              "cover": "Generate cover",
              "upload": "Upload Image"
            },
            "activities": {
              "minutes": "Min",
              "description": "Description",
              "objective": "Objective",
              "module": "Module",
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
              "empty": {
                "title": "Create This Element",
                "description": "Use AI to shape this specific element. Click 'Generate' to effortlessly craft engaging content. Elevate your teaching experience with innovative creation! 🚀"
              }
            },
            "conversation": {
              "description": "Specify everything you consider important for the conversation. This will help the bot to understand you better and to provide you with the best possible answers. You can also specify the topics you want to talk about.",
              "topics": "List all topics you want to talk about"
            },
            "manual": {
              "textarea": "Add the content of the activity",
              "cancel": "Are you sure you want to cancel?"
            },
            "materials": {
              "article": "Content",
              "content": "Content",
              "synthesis": "Synthesis",
              "dyslexia": "Dyslexia",
              "introduction": "introduction"
            },
            "refine": {
              "title": "Enhance Content Quality",
              "description": "Your insights will help us refine the content.",
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
            "processMessages": ["Evaluating audience demographics...", "Estimating optimal class duration...", "Selecting potential learning activities...", "Determining the purpose of each activity...", "Sequencing activities for maximum engagement...", "Tailoring content to learning objectives...", "Adjusting difficulty levels for audience proficiency...", "Finalizing interactive elements for active learning...", "Crafting assessment strategies for knowledge retention...", "Optimizing content flow for seamless learning experience...", "Preparing final touches on educational design...", "Generation of personalized microlearning content complete."],
            "refiningActivity": ["Analyzing the activity objective to ensure alignment with learning outcomes...", "Reviewing activity components to maximize student engagement...", "Optimizing activity structure to facilitate understanding and application of knowledge...", "Adjusting instructional materials for greater accessibility and diversity...", "Evaluating delivery methods for effective and adaptive interaction...", "Incorporating student feedback to enhance the learning experience...", "Calibrating difficulty level to satisfy a broad range of student abilities...", "Integrating educational technology to enrich the activity...", "Updating activity resources to maintain relevance and currency...", "Finalizing the refinement process for a comprehensive and engaging educational activity..."],
            "refiningQuestions": ["Formulating questions to assess understanding of the central topic...", "Selecting answer choices that reflect a variety of perspectives...", "Designing questions to encompass specific learning objectives...", "Creating plausible distractors to assess critical thinking...", "Crafting questions that measure practical application of concepts...", "Integrating analysis questions to deepen conceptual understanding...", "Generating questions that encourage long-term retention...", "Building a logical flow in the quiz that reflects content structure...", "Ensuring questions cover all key aspects of the activity...", "Finalizing question review to ensure alignment with educational objectives..."],
            "refiningAnswers": ["Compiling correct answers based on key points of the subject matter...", "Including varied choices that challenge student understanding...", "Ensuring each answer reinforces essential knowledge of the activity...", "Balancing answer difficulty to maintain appropriate challenge...", "Linking answers with practical examples to facilitate knowledge application...", "Selecting answers that require analysis and not just memorization...", "Incorporating immediate feedback in answers to encourage learning...", "Establishing a coherent sequence of questions and answers...", "Reviewing that answers represent a full spectrum of the lesson...", "Completing the creation of an answer bank that supports student success..."],
            "specs": {
              "title": "Resources",
              "objective": {
                "label": "Objective",
                "placeholder": "Add the objective of the activity"
              },
              "related": {
                "label": "Related activity",
                "placeholder": "Select the related activity"
              },
              "instructions": {
                "label": "Instructions",
                "placeholder": "Add the instructions of the activity"
              },
              "task": {
                "label": "Task",
                "placeholder": "Add the task of the activity"
              },
              "criteria": {
                "title": "Evaluation criteria",
                "label": "Criteria",
                "placeholder": "Add the criteria of the activity"
              },
              "subject": {
                "label": "Subject",
                "placeholder": "Add the subject of the criteria"
              },
              "character": {
                "label": "Character",
                "placeholder": "Add the character of the activity"
              },
              "role": {
                "label": "Role",
                "placeholder": "Add the role of the character"
              },
              "questions": {
                "title": "Questions"
              }
            },
            "bulletPoint": {
              "add": "Add elemento",
              "refine": "Refine"
            },
            "labels": {
              "title": "Title",
              "description": "Description"
            },
            "types": {
              "content-theory": "Content Theory",
              "debate": "Debate",
              "character-talk": "Character Talk",
              "multiple-choice": "Multiple Choice",
              "spoken/written": "Spoken/Written",
              "spoken": "Spoken",
              "written": "Written"
            },
            "multipleChoice": {
              "labels": {
                "correct": "Correct answer",
                "mark": "Mark as correct"
              },
              "related": {
                "label": "Related activity",
                "independent": "Independent"
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