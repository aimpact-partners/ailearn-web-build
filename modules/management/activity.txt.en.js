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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-07"], ["@aimpact/ailearn-app", "0.0.46.dev-07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-07/modules/management/activity",
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
        hash: 4177075106,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Add",
              "confirm": "Confirm",
              "analyse": "Suggest Improvements",
              "activities": "Generate activities",
              "refine": "Refine",
              "generate": "Generate with AI",
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
              "upload": "Upload Image",
              "inspiration": "Generate with AI",
              "manual": "Manual Design",
              "order": "Edit order"
            },
            "activities": {
              "minutes": "Min",
              "description": {
                "label": "Description",
                "placeholder": "What is the description of this activity?"
              },
              "instructions": {
                "label": "Instructions",
                "placeholder": "What are the instructions for this activity?"
              },
              "objective": {
                "label": "Objective",
                "placeholder": "What is the objective of this activity?"
              },
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
                "description": "Use AI to shape this specific element. Click 'Generate' to effortlessly craft engaging content. Elevate your teaching experience with innovative creation!"
              },
              "deleteModal": {
                "title": "Delete Content",
                "description": "Are you sure you want to delete the content from this activity?"
              }
            },
            "multipleChoice": {
              "modalQuestions": {
                "title": "Generate questions",
                "description": "Add the observations you consider necessary to generate the questions and answers"
              },
              "modalAnswers": {
                "title": "Generate answers",
                "description": "Add the observations you consider necessary to generate the answers"
              },
              "actions": {
                "generateAnswers": "Generate answers",
                "addAnswer": "Add answer",
                "addQuestion": "Add question",
                "generateQuestions": "Generate questions",
                "delete": "Delete",
                "markCorrect": "Mark as correct"
              },
              "answers": {
                "placeholder": "Insert an answer option and mark it as correct or incorrect"
              },
              "related": {
                "label": "Related activity",
                "independent": "Independent"
              },
              "emptyOptions": "Answer options have not been defined"
            },
            "spoken": {
              "criteria": {
                "label": "Evaluation Criteria"
              }
            },
            "conversation": {
              "description": "Specify everything you consider important for the conversation. This will help the bot to understand you better and to provide you with the best possible answers. You can also specify the topics you want to talk about.",
              "topics": "List all topics you want to talk about"
            },
            "errors": {
              "INCOMPLETE_MODULE": "You must complete the module before continuing. Missing fields: ",
              "default": "An error occurred. Please try again.",
              "relatedArticle": " The selected activity does not have an article. You must generate the article first in order to use it",
              "wrongQuestions": "To save, you must have correctly added response options and selected the correct option for each question."
            },
            "form": {
              "title": "Add the name of the activity"
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
            "manual": {
              "cancel": "Are you sure you want to cancel?",
              "article": {
                "textarea": "Add the content of the activity"
              },
              "content": {
                "textarea": "Add the content of the activity"
              },
              "synthesis": {
                "textarea": "Add your summary here"
              },
              "dyslexia": {
                "textarea": "Add your content here"
              }
            },
            "materials": {
              "article": "Content",
              "content": "Content",
              "synthesis": "Synthesis",
              "dyslexia": "Adaptations",
              "introduction": "introduction",
              "audios": "Audios"
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
              "title": "Generate images for your activity",
              "description": "Describe the image you want to generate in detail so that the artificial intelligence can imagine and generate it.",
              "notes": {
                "label": "Notes",
                "placeholder": "Share your suggestions to create the best image for your module"
              },
              "confirm": {
                "title": "Do you want to replace the current image?",
                "subtitle": "If you confirm, the current image will be replaced."
              }
            },
            "processMessages": ["Evaluating audience demographics...", "Estimating optimal class duration...", "Selecting potential learning activities...", "Determining the purpose of each activity...", "Sequencing activities for maximum engagement...", "Tailoring content to learning objectives...", "Adjusting difficulty levels for audience proficiency...", "Finalizing interactive elements for active learning...", "Crafting assessment strategies for knowledge retention...", "Optimizing content flow for seamless learning experience...", "Preparing final touches on educational design...", "Generation of personalized microlearning content complete."],
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
              "assessment": {
                "label": "Instructions",
                "placeholder": "Add the instructions of the activity"
              },
              "task": {
                "label": "Task requested to the student",
                "placeholder": "Add the task of the activity"
              },
              "criteria": {
                "title": "Evaluation criteria",
                "label": "Criteria",
                "placeholder": "Add the criteria of the activity"
              },
              "subject": {
                "label": "Subject",
                "placeholder": "Add the subject"
              },
              "subjectDebate": {
                "label": "Subject",
                "placeholder": "Add the subject"
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
              "content-theory": "Content/Theory",
              "debate": "Debate",
              "multiple-choice": "Multiple Choice",
              "character-talk": "Conversation with a Character",
              "spoken": "Oral Presentation",
              "written": "Written"
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