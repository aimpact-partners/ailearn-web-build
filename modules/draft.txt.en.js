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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["simplebar-react", "3.2.6"], ["swiper", "10.3.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/modules/draft",
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
        hash: 4277440786,
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
            "alerts": {
              "coins": {
                "available": "Owner has AI credits available",
                "unavailable": "Owner has no AI credits available"
              }
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
                "4th grade": "4th grade",
                "5th grade": "5th grade",
                "6th grade": "6th grade",
                "7th grade": "7th grade",
                "1st year": "1st year",
                "2nd year": "2nd year",
                "3rd year": "3rd year",
                "4th year": "4th year",
                "5th year": "5th year",
                "6th year": "6th year"
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
                "title": "Define the instructions for the AI",
                "description": "Guide the Artificial Intelligence to generate content based on your pedagogical principles by indicating, for example, the types of activities and their tone (informal, inspiring, etc.)."
              },
              "textarea": {
                "label": "Your Insights",
                "placeholder": "Share specific suggestions or areas for improvement..."
              },
              "errors": {
                "default": "An error occurred, please try again."
              },
              "confirm": {
                "title": "You are about to confirm the objective of your module",
                "description": "You have not selected any of the generated suggestions. Do you want to proceed without implementing them?"
              }
            },
            "requestCredits": {
              "title": "Request Credits",
              "subtitle": "You must request AI credits from the module owner to use this feature.",
              "ownerDescription": "Module owner",
              "action": "Do you want to request credits from the module owner?",
              "detail": "AI credits enable all advanced Artificial Intelligence features in the creation of learning modules."
            },
            "pathway": {
              "manual": {
                "title": {
                  "label": "Module Title",
                  "placeholder": "Enter the module title"
                },
                "description": {
                  "label": "Module Description",
                  "placeholder": "Enter the module description"
                }
              },
              "ai": {
                "title": "Let's continue with AI",
                "form": {
                  "size": {
                    "placeholder": "Amount of activities in the module",
                    "items": {
                      "brief": "Brief (3 activities)",
                      "standard": "Standard (5 activities)",
                      "extended": "Extended (7 activities)"
                    },
                    "notes": {
                      "placeholder": "Enter the instructions to guide the AI in creating your activities"
                    }
                  }
                }
              }
            },
            "setup": {
              "actions": {
                "cancel": "Cancel",
                "continue": "Continue"
              },
              "messages": {
                "save": "Objective saved successfully"
              },
              "title": "Create a New Learning Module",
              "subtitle": "Set up the features of your module to get started.",
              "generation": {
                "title": "Let's shape the module",
                "subtitle": "Indicate how you want to continue",
                "options": {
                  "ai": "I want to generate the activities with the help of AI",
                  "manually": "I want to generate the activities manually"
                }
              },
              "form": {
                "administrator": {
                  "label": "Administrator",
                  "select": "Select administrator",
                  "account": "Current account",
                  "error": "You need to specify the administrator of the learning module"
                },
                "title": {
                  "label": "Module title"
                },
                "description": {
                  "label": "Module description"
                },
                "activities": {
                  "label": "Number of module activities"
                },
                "notes": {
                  "placeholder": "Enter the instructions to guide the AI in creating your activities"
                },
                "objective": {
                  "textArea": "Enter the module objective"
                }
              },
              "sugestions": {
                "title": "Instruction suggestions"
              },
              "confirmation": {
                "title": "Attention",
                "subtitle": "You are about to create a learning module for:",
                "ownerDescription": "Owner of the learning module",
                "description": "The AI credits you request within the creation of this learning module will be requested and provided by the module owner"
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
            "postTitle": "Select the aspects that the content to be generated in the following form should have",
            "module": "Learning Module Objective",
            "empty": "Here you can view the personalized content, adapted by our assistant based on your form inputs",
            "duration": {
              "brief": "Brief (3 activities)",
              "standard": "Standard (5 activities)",
              "extended": "Extended (7 activities)"
            },
            "form": {
              "module": "What is the objective of this module?",
              "target": "Average age of students",
              "duration": "Module duration",
              "languages": "Languages"
            },
            "labels": {
              "title": "Title",
              "description": "Description"
            },
            "confirm": {
              "title": "You are about to confirm the objective of your module",
              "messages": "You have not selected any of the generated suggestions. Do you want to continue without implementing them?"
            },
            "objectiveTour": {
              "buttons": {
                "nextBtnText": "Next",
                "prevBtnText": "Previous",
                "doneBtnText": "Done"
              },
              "administrator": {
                "title": "Select an Administrator",
                "description": "Choose the administrator responsible for the learning module. They must have credits assigned to create modules with AI assistance."
              },
              "parameters": {
                "title": "Select the parameters of the learning module",
                "description": "Select the language of the learning module, the school year of your students, and the number of activities. You can find more information on our YouTube channel @RVDAIRIVADAVIA24."
              },
              "objective": {
                "title": "Write the main objective of the learning module",
                "description": "This objective will be central to guide the rest of the content and activities of the module."
              },
              "save": {
                "title": "Save the objective of the learning module",
                "description": "Once saved, you can request credits to improve the objective and start working with AI."
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