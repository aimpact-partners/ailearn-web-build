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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/modules/management/activity",
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
        hash: 2822777770,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "minutes": "Min",
              "description": {
                "label": "Description",
                "placeholder": "Add a description"
              },
              "instructions": {
                "label": "Instructions",
                "placeholder": "Add instructions"
              },
              "objective": {
                "label": "Objective",
                "placeholder": "Add an objective"
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
                "description": "Use AI to shape this specific element. Click 'Generate with AI' to effortlessly craft engaging content. Elevate your teaching experience with innovative creation!"
              },
              "deleteModal": {
                "title": "Delete Content",
                "description": "Are you sure you want to delete the content from this activity?"
              }
            },
            "contentTheory": {
              "materials": {
                "title": "Attachments",
                "types": {
                  "article": "Content",
                  "synthesis": "Summary",
                  "dyslexia": "Adaptations",
                  "audios": "Audios"
                },
                "refinement": {
                  "title": "Create the content of your activity with AI",
                  "description": "Your contributions will help us improve the content."
                },
                "form": {
                  "title": "Educational content articles",
                  "content": {
                    "title": "Redacción del  contenido",
                    "placeholder": "Comience a crear su contenido aquí…."
                  },
                  "article": {
                    "placeholder": "Comience a crear su contenido aquí…."
                  }
                }
              },
              "empty": {
                "title": "This activity has no educational content associated",
                "description": "Add educational content to your module to start.",
                "actions": {
                  "add": "Add article",
                  "upload": "Upload document"
                }
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
            "specs": {
              "title": "Activity specifications",
              "assessment": {
                "label": "Assessment",
                "placeholder": "Add the assessment of the activity"
              },
              "topic": {
                "label": "Topic *",
                "placeholder": "Add the topic of the activity"
              },
              "task": {
                "label": "Task requested to the student *",
                "placeholder": "Add the task of the activity"
              },
              "objective": {
                "label": "Objective",
                "placeholder": "Add the objective of the activity"
              },
              "related": {
                "label": "Related activity",
                "placeholder": "Select the related activity"
              },
              "instructions": {
                "label": "Additional instructions",
                "placeholder": "Add additional instructions if necessary"
              },
              "subjectDebate": {
                "label": "Debate motion",
                "placeholder": "Add the motion of the debate"
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
              },
              "objectives": {
                "name": {
                  "label": "Name",
                  "placeholder": "Add the name of the objective"
                },
                "objective": {
                  "label": "Objective",
                  "placeholder": "Add the objective of the activity"
                },
                "label": "Objectives of the activity *"
              },
              "criteria": {
                "title": "Evaluation criteria",
                "label": "Criteria",
                "placeholder": "Add the criteria of the activity",
                "name": {
                  "label": "Name",
                  "placeholder": "Add the name of the criteria"
                },
                "subject": {
                  "label": "Criteria",
                  "placeholder": "Add the criteria of the activity"
                }
              }
            },
            "spoken": {
              "criteria": {
                "label": "Evaluation Criteria"
              }
            },
            "types": {
              "content-theory": "Content/Theory",
              "debate": "Debate",
              "multiple-choice": "Multiple Choice",
              "character-talk": "Conversation with a Character",
              "spoken": "Oral Presentation",
              "written": "Written"
            },
            "conversation": {
              "description": "Specify everything you consider important for the conversation. This will help the bot to understand you better and to provide you with the best possible answers. You can also specify the topics you want to talk about.",
              "topics": "List all topics you want to talk about"
            },
            "errors": {
              "INCOMPLETE_MODULE": "You must complete the module before continuing. Missing fields: ",
              "default": "An error occurred. Please try again.",
              "NO_RELATED_ACTIVITY": " The selected activity does not have an article. You must generate the article first in order to use it",
              "wrongQuestions": "To save, you must have correctly added response options and selected the correct option for each question."
            },
            "form": {
              "title": "Add the name of the activity"
            },
            "languages": {
              "select": {
                "label": "Language",
                "placeholder": "Select Language",
                "tooltip": "The activity language is "
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