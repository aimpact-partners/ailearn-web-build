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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-06"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/assignment-dashboard-participant",
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
        hash: 3937977253,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "type": "Activity type",
              "subtype": "Subtype",
              "description": "Description",
              "empty": "The student has not yet completed this activity"
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
            "breadcrumb": {
              "modules": "Modules",
              "management": "Management",
              "assignments": "Assignments",
              "chat": "Chat",
              "dashboard": "Dashboard"
            },
            "chat": {
              "title": "User conversation",
              "empty": "There are no messages in this conversation yet",
              "synthesis": "Conversation synthesis",
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
            "finish": "Finish",
            "results": "Results",
            "total": "Total questions",
            "correct": "Correct answers",
            "wrong": "Wrong answers",
            "title": "Study detail",
            "conversation": "Chat",
            "multiple": "Multiple selection evaluation",
            "spoken": "Oral evaluation",
            "percentileDetail": "El alumno ha completado actualmente un percentile%% de la actividad.",
            "studentAudio": "Student audio"
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