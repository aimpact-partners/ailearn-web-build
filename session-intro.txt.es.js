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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/session-intro",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 2248312027,
        creator: function (require, exports) {
          exports.txt = {
            "assessments": {
              "quiz": "Evaluación",
              "oral": "Oral",
              "oralText": "%1, graba un audio donde resumas y comentes el contenido estudiado. Destaca los conceptos clave, usa un lenguaje adecuado y ofrece tu opinión personal. Mantén un orden lógico y fidelidad a los hechos del texto original.",
              "record": "Grabar",
              "recordAgain": "Volver a grabar",
              "stop": "Detener",
              "send": "Enviar audio",
              "redo": "¡Volver a intentar!",
              "analysisTitle": "Resultado del análisis",
              "analysis": "Reporte",
              "feedback": "Conocimientos",
              "competencies": "Competencias",
              "processMessages": ["Estamos procesando el audio", "Transcribiendo el texto", "Evaluando la comprensión lectora y del contenido", "Analizando la coherencia y cohesión", "Evaluando síntesis y parafrasis", "Evaluando uso de vocabulario", "Analizando el pensamiento critico"]
            },
            "elements": {
              "synthesis": "Síntesis",
              "content": "Contenido",
              "intro": "Introducción",
              "assessment": "Evaluación"
            },
            "header": {
              "titles": {
                "content": "Objetivos",
                "introduction": "Introducción",
                "spoken": "Evaluación oral",
                "selection": "Evaluación de selección"
              },
              "actions": {
                "spoken": "Eval. oral",
                "selection": "Eval. de selección"
              }
            },
            "permissions": {
              "title": "Permisos",
              "description": "Necesitas brindar acceso al microfono para poder enviar un audio.",
              "button": "Aceptar"
            },
            "intro": {
              "hello": "Hola",
              "message": "el tema que vamos a ver aborda lo siguiente"
            },
            "synthesis": "Puntos principales que trabajaremos durante la clase son:"
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