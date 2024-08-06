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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3"], ["@aimpact/ailearn-app", "0.1.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3/assignments/spoken",
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
        hash: 845125107,
        creator: function (require, exports) {
          exports.txt = {
            "breadcrumb": {
              "modules": "Módulos",
              "management": "Gestión",
              "assignment": "Asignaciones",
              "chat": "Chat",
              "spoken": "Evaluación oral"
            },
            "permissions": {
              "intro": "Permisos de acceso",
              "title": "Activación de voz",
              "description": "Activa el micrófono para potenciar tu experiencia interactuando por medio de comandos de voz.",
              "concedded": {
                "title": "¡Listo!",
                "description": "Ahora puedes disfrutar de la activación por voz."
              },
              "error": {
                "title": "No tenemos acceso al micrófono",
                "description": "Para activar la voz, necesitamos acceso al micrófono. Por favor, habilita el acceso en la configuración de tu navegador."
              }
            },
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
              "processMessages": ["Estamos procesando el audio", "Transcribiendo el texto", "Evaluando la comprensión lectora y del contenido", "Analizando la coherencia y cohesión", "Evaluando síntesis y parafrasis", "Evaluando uso de vocabulario", "Analizando el pensamiento crítico", "Revisando la base de contenido para validaciones cruzadas", "Estimando la relevancia del contexto", "Verificando patrones de entonación", "Comparando con modelos de referencia lingüística", "Identificando elementos clave del discurso", "Cruzando referencias con la base de datos de contenido", "Examinando la estructura narrativa", "Correlacionando con casos de estudio relevantes", "Comprobando la precisión de términos técnicos", "Evaluando la originalidad del contenido", "Verificando la autenticidad de las emociones expresadas"]
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