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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.31"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.31/modules/management/activity",
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
        hash: 3661874724,
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
              "manual": "Manual Design"
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
              },
              "deleteModal": {
                "title": "Delete Content",
                "description": "Are you sure you want to delete the content from this activity?"
              }
            },
            "conversation": {
              "description": "Specify everything you consider important for the conversation. This will help the bot to understand you better and to provide you with the best possible answers. You can also specify the topics you want to talk about.",
              "topics": "List all topics you want to talk about"
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
                "textarea": "Add your synthesis here"
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
            "multipleChoice": {
              "labels": {
                "correct": "Correct answer",
                "mark": "Mark as correct"
              },
              "related": {
                "label": "Related activity",
                "independent": "Independent"
              },
              "emptyOptions": "No options available"
            },
            "picture": {
              "title": "Generate the best image for your activity",
              "description": "This tool will help you generate the best image for your activity. You can upload an image and we will generate the best image for your module. You can also use the image editor to edit the image and generate the best image for your module.",
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
            "refiningActivity": ["Analyzing the activity objective to ensure alignment with learning outcomes...", "Reviewing activity components to maximize student engagement...", "Optimizing activity structure to facilitate understanding and application of knowledge...", "Adjusting instructional materials for greater accessibility and diversity...", "Evaluating delivery methods for effective and adaptive interaction...", "Incorporating student feedback to enhance the learning experience...", "Calibrating difficulty level to satisfy a broad range of student abilities...", "Integrating educational technology to enrich the activity...", "Updating activity resources to maintain relevance and currency...", "Finalizing the refinement process for a comprehensive and engaging educational activity..."],
            "refiningQuestions": ["Formulating clear questions about the topic...", "Selecting different perspectives of response...", "Designing specific questions to learn...", "Creating options to think critically...", "Elaborating questions to apply concepts...", "Integrating questions to better understand...", "Generating questions to remember...", "Building a logical questionnaire...", "Ensuring complete coverage of the activity...", "Reviewing questions to align with educational objectives..."],
            "refiningAnswers": ["Compiling correct answers...", "Including challenging options...", "Reinforcing essential knowledge...", "Maintaining an appropriate challenge...", "Incorporating immediate feedback...", "Establishing a coherent sequence...", "Reviewing complete answers...", "Creating an answer bank for success..."],
            "generatingImage": ["Starting image generation for the module activity...", "Integrating activity parameters to customize the image...", "Selecting iconography and colors based on the activity content...", "Developing visual schemes to facilitate the understanding of the topic...", "Adapting the visual complexity to the educational level of the module...", "Enriching the image with interactive elements for the activity...", "Harmonizing the image with the module's design scheme...", "Making fine adjustments to the image composition...", "Verifying the alignment of the image with the learning objectives...", "Activity image successfully generated and ready for use."],
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
              "content-theory": "Content Theory",
              "debate": "Debate",
              "character-talk": "Character Talk",
              "multiple-choice": "Multiple Choice",
              "spoken/written": "Spoken/Written",
              "spoken": "Spoken",
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