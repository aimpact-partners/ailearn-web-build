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
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.23"], ["@aimpact/ailearn-app", "0.0.23"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment-intro",
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
        hash: 3570069955,
        creator: function (require, exports) {
          exports.txt = {
            "assessments": {
              "quiz": "Assessment",
              "oral": "Oral",
              "oralText": "%1, record an audio where you summarize and comment on the content studied. Highlight the key concepts, use appropriate language and offer your personal opinion. Keep a logical order and fidelity to the facts of the original text.",
              "record": "Record",
              "recordAgain": "Record again",
              "stop": "Stop",
              "send": "Send audio",
              "redo": "Do it again!",
              "analysisTitle": "Analysis report",
              "analysis": "Report",
              "feedback": "Knowledge",
              "competencies": "Competences",
              "processMessages": ["We are processing the audio", "Transcribing the text", "Evaluating reading comprehension and content", "Analyzing coherence and cohesion", "Evaluating synthesis and paraphrasing", "Evaluating use of vocabulary", "Analyzing critical thinking"]
            },
            "elements": {
              "synthesis": "Synthesis",
              "content": "Content",
              "intro": "Introduction",
              "assessment": "Assessment"
            },
            "header": {
              "titles": {
                "spoken": "Oral assessment",
                "introduction": "Module",
                "selection": "Multiple choice evaluation",
                "content": "Module"
              },
              "actions": {
                "spoken": "Oral assessment",
                "content": "Introduction",
                "selection": "Multiple choice"
              }
            },
            "permissions": {
              "title": "Permissions",
              "description": "You need to provide access to the microphone to be able to send an audio.",
              "button": "Accept"
            },
            "intro": {
              "hello": "Hi",
              "message": "the topic that we will see deals with the following"
            },
            "synthesis": "Main topics we will work during the class are:"
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