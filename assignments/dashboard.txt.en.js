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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/assignments/dashboard",
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
        hash: 4174294105,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "summary": "Conversation Summary",
              "progres": "Conversation Progress",
              "type": "Activity type",
              "subtype": "Subtype",
              "description": "Description",
              "empty": "The student has not yet completed this activity",
              "types": {
                "content-theory": "Content/Theory",
                "debate": "Debate",
                "multiple-choice": "Multiple Choice",
                "character-talk": "Conversation with a Character",
                "spoken": "Oral Presentation"
              }
            },
            "assessments": {
              "quiz": "Assessment",
              "oral": "Oral",
              "title": "Activity",
              "oralText": "Record an audio where you summarize and comment on the content studied. Highlight the key concepts, use appropriate language and offer your personal opinion. Keep a logical order and fidelity to the facts of the original text.",
              "record": "Record",
              "recordAgain": "Record again",
              "stop": "Stop",
              "send": "Send audio",
              "redo": "Do it again!",
              "analysisTitle": "Analysis report",
              "analysis": "Report",
              "feedback": "Knowledge",
              "competencies": "Competences"
            },
            "assignment": {
              "empty": {
                "title": "The student has not participated in this assignment"
              }
            },
            "chat": {
              "title": "Student conversation",
              "empty": {
                "title": "There are no messages in this conversation",
                "description": "The student has not sent messages through the chat yet."
              },
              "synthesis": "Conversation summary",
              "systemActions": {
                "kb-response": "Data obtained from the knowledge base: ",
                "fetching-tool-data": "I will query the documents of the class",
                "kb-processed-response": "Analysis on content finished",
                "transcription": "Getting transcription",
                "functions": {
                  "kb": "Querying the knowledge base about: "
                }
              }
            },
            "list": {
              "students": "Students",
              "participants": "participants",
              "search": "search",
              "generalPanel": "General panel"
            },
            "finish": "Finish",
            "results": "Results",
            "total": "Total questions",
            "correct": "Correct answers",
            "wrong": "Wrong answers",
            "title": "Classroom Status",
            "alerts": "Alerts",
            "type": "Activity type",
            "subtype": "Activity subtype",
            "owner": "Administrator",
            "creator": "Creator",
            "actions": {
              "wall": "Wall"
            },
            "interaction": "Interaction",
            "percentil": "Total participation",
            "preevaluation": "Pre-evaluation",
            "multiple": "Multiple choice",
            "spoken": "Oral evaluation",
            "empty": "There are no participations in this assignment yet",
            "participation": {
              "total": "Total participation",
              "pending": "Students without participation"
            },
            "messageCounter": "Messages "
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