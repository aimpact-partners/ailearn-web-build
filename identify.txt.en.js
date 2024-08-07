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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.03"], ["@aimpact/ailearn-app", "0.1.3-test.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.03/identify",
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
        hash: 1375445743,
        creator: function (require, exports) {
          exports.txt = {
            "errors": {
              "ERROR_PUBLISHING": "The request could not be made, please try again later",
              "INVALID_CODE": {
                "title": "Incorrect code",
                "description": "Please verify the code and try again. If the problem persists, contact the administrator of your institution to obtain the correct code."
              },
              "ALREADY_WAITING": "You have already made the request to join the organization, wait for the administrator to accept you or contact him",
              "ALREADY_MEMBER": "You are already a member of the organization"
            },
            "institution": {
              "form": {
                "title": "Start a free trial for institutions and explore educational transformation",
                "description": "Access a free trial by completing the form. We will assign you the necessary credits so you can experience and share with your teachers the assistance of Artificial Intelligence in your educational space. Check your email for more details.",
                "fields": {
                  "name": {
                    "label": "Institution Name",
                    "errorMessage": "Required field"
                  },
                  "type": {
                    "label": "Institution Type",
                    "errorMessage": "Required field"
                  },
                  "educationalLevel": {
                    "label": "Educational Level",
                    "errorMessage": "Required field"
                  },
                  "geographicAddress": {
                    "label": "Geographic Address"
                  },
                  "authorizedUser": {
                    "label": "I am an authorized user by the educational institution"
                  },
                  "submit": {
                    "label": "SEND REQUEST"
                  }
                }
              },
              "title": "Request a free trial for institutions and start exploring educational transformation",
              "description": "Request access to a free trial by completing the form. Once submitted, we will review your request. Remember to check your email, where we will inform you about the approval of your request and assign the necessary credits so that your educational community can experience the assistance of Artificial Intelligence in the classroom."
            },
            "requested": {
              "teacher": {
                "title": "Congratulations! You can now start your trial period",
                "description": "We have assigned you <strong>5 generative credits</strong> to create 5 modules with AI and <strong>30 interactive credits</strong> for AI interaction with your students."
              },
              "teacherInstitution": {
                "title": "Your request to join the institution is under review.",
                "description": "Please wait for the administrator's approval to access the educational space. Check your email where we will notify you once your request has been approved."
              },
              "teacherApproved": {
                "title": "Congratulations! Your request has been approved",
                "description": "You are now part of the {organization} institution, Start using RVD.AI."
              },
              "institution": {
                "title": "Congratulations! Your institution can now start its trial period",
                "description": "We have assigned you 20 credits for your trial period to create 20 modules with AI and 120 credits for AI interaction with students.",
                "start": "Start"
              }
            },
            "cards": {
              "student": {
                "icon": "student",
                "title": "I am a Student",
                "description": "Access content assigned by your teachers and learn at your own pace with AI guidance."
              },
              "teacher": {
                "icon": "teacher",
                "title": "I am a Teacher",
                "description": "Create educational content and monitor your students with AI assistance."
              },
              "institution": {
                "icon": "institution",
                "title": "I am an Institution",
                "description": "Add Artificial Intelligence to your educational offering and enable your community to generate AI-assisted content."
              }
            },
            "student": {
              "selection": {
                "title": "You are about to start the path to educational transformation",
                "description": "To start your learning experience with RVD.AI Rivadavia, you will need an access link provided by your teacher. Once you receive the access link, you will be able to enter the learning module and start exploring the content designed especially for you."
              }
            },
            "teacher": {
              "form": {
                "title": "Start your free trial for teachers and explore educational transformation",
                "description": "Access a free trial by completing the form. We will assign you the necessary credits so you can experience the assistance of Artificial Intelligence in your teaching work. Check your email for more details.",
                "fields": {
                  "role": {
                    "label": "Cargo",
                    "errorMessage": "Required field"
                  },
                  "grade": {
                    "label": "Educational level",
                    "errorMessage": "Required field"
                  },
                  "curricularArea": {
                    "label": "Curricular area",
                    "errorMessage": "Required field"
                  },
                  "name": {
                    "label": "Institution name",
                    "errorMessage": "Required field"
                  },
                  "type": {
                    "label": "Institution type",
                    "errorMessage": "Required field"
                  },
                  "address": {
                    "label": "Geographic address",
                    "errorMessage": "Required field"
                  },
                  "submit": {
                    "label": "SEND REQUEST",
                    "errorMessage": ""
                  }
                }
              },
              "institution": {
                "intro": {
                  "hello": "Hello {username}",
                  "title": "Does the institution where you work use RVD.AI?",
                  "description": "My institution already works with <strong>RVD.AI</strong> Rivadavia and I want to join its educational space.",
                  "options": {
                    "yes": {
                      "label": "Yes",
                      "description": "My institution already works with <strong>RVD.AI Rivadavia</strong> and I want to join its educational space."
                    },
                    "no": {
                      "label": "No",
                      "description": "My institution does not work with <strong>RVD.AI Rivadavia</strong>. I want to join the tool as an independent teacher."
                    }
                  }
                },
                "form": {
                  "title": "Start the educational transformation",
                  "description": "You are about to join your institution's educational space. To access RVD.AI Rivadavia, you must validate the access code provided by your institution's administrator.",
                  "form": {
                    "legend": {
                      "title": "Don't you have your code?",
                      "description": "Check your email or contact your institution's administrator if you have not yet received the invitation."
                    },
                    "action": "Enter code",
                    "error": {
                      "title": "Incorrect code.",
                      "description": "Please verify the code and try again. If the problem persists, contact your institution's administrator to obtain the correct code."
                    }
                  }
                }
              },
              "actions": {
                "continue": "Continue"
              },
              "welcome": {
                "user": {
                  "hello": "Hello {username}!",
                  "description": "Welcome to RVD.AI Rivadavia"
                }
              },
              "processed": {
                "title": "You already have AI credits assigned to your profile!",
                "subtitle": "We have assigned to your trial period:",
                "description": "{totalGenerative} credits to create 5 modules with AI and {totalInteraction} credits for the interaction with AI of your students."
              }
            },
            "title": "Welcome!",
            "subtitle": "Select your role within the educational field",
            "back": "Back",
            "welcome": {
              "hello": "Hello {username}!",
              "description": "Welcome to RVD.AI Rivadavia"
            },
            "actions": {
              "accept": "ACCEPT",
              "back": "BACK",
              "continue": "Continue",
              "join": "Send request",
              "start": "Start"
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