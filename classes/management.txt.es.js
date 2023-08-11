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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/classes/management",
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
        hash: 1133623143,
        creator: function (require, exports) {
          exports.txt = {
            "title": "¡Crea una clase increíble!",
            "curriculumObjective": "Objetivo curricular",
            "assessmentReview": "¡Prepárate para Inspirar! Revisa esta evaluación cuidadosamente diseñada para asegurar que se alinee con tus objetivos educativos. Tu herramienta para moldear las mentes del mañana te espera.",
            "elements": {
              "content": "Contenido",
              "synthesis": "Síntesis",
              "assessment": "Evaluación"
            },
            "titles": {
              "lessons": "Lesson",
              "topics": "Topics"
            },
            "topics": {
              "title": "Temas",
              "description": "Agrega la lista de puntos a repasar como objetivos en la clase.",
              "elements": {
                "content": "Contenido",
                "synthesis": "Síntesis",
                "assessment": "Evaluación",
                "previous": "Previo"
              }
            },
            "submit": "Crear clase",
            "actions": {
              "next": "Siguiente",
              "synthesis": "Síntesis",
              "prerequisites": "Prerrequisitos",
              "content": "Contenido",
              "assessment": "Evaluación"
            },
            "generate": "Generate",
            "state": "Estado",
            "processAlert": "Estamos generando tu clase, por favor espera, este proceso puede tardar unos minutos.",
            "empty": {
              "title": "No hay información disponible.",
              "subtitle": "Puedes crearla con IA.",
              "generating": "Estamos generando el contenido, por favor espera, este proceso puede tardar un poco."
            },
            "generator": {
              "title": "Generador de clases",
              "empty": "No hay contenido para mostrar",
              "action": "Genera el contenido con IA"
            },
            "classTopics": {
              "synthesis": "Resumen",
              "assessment": "Evaluación"
            },
            "generalTopics": {
              "synthesis": "Síntesis",
              "prerequisiteEvaluation": "Evaluación de Prerrequisitos",
              "content": "Contenido",
              "assessment": "Evaluación"
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