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
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management",
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
        hash: 1215479711,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "activities": "Generar actividades",
              "refine": "Refinar",
              "generate": "Generar",
              "save": "Guardar",
              "clean": "Limpiar",
              "activity": "Actividades",
              "update": "Subir Documento",
              "edit": "Editar",
              "delete": "Eliminar",
              "cancel": "Cancelar",
              "next": "Siguiente",
              "back": "Atrás"
            },
            "activities": {
              "types": {
                "content-theory": "Temas",
                "multiple-choice": "Preguntas",
                "spoken": "Criterios",
                "topics": "Temas",
                "questions": "Preguntas"
              },
              "actions": {
                "generateAnswers": "Generar respuestas"
              },
              "minutes": "Mins",
              "description": "Descripción",
              "objective": "Objetivo",
              "type": "Tipo",
              "questions": "Preguntas",
              "topics": "Temas",
              "form": {
                "description": "Descripción",
                "title": "Titulo"
              },
              "refine": {
                "type": {
                  "label": "¿Qué quieres mejorar?",
                  "answers": "Respuestas",
                  "questions": "Preguntas"
                }
              },
              "materials": {
                "article": "Artículo",
                "synthesis": "Síntesis",
                "instructions": "Instrucciones",
                "flashcards": "Flashcards",
                "introduction": "Introducción"
              }
            },
            "ERR_GENERATING_ACTIVITIES": "Error generando actividades",
            "languages": {
              "label": "Idiomas",
              "en": "Inglés",
              "es": "Español",
              "pt": "Portugués",
              "fr": "Francés",
              "de": "Alemán",
              "it": "Italiano"
            },
            "refine": {
              "module": {
                "title": "Refine the quality of your module",
                "subtitle": "Your insights will help us refine the content.",
                "textarea": {
                  "label": "Your Insights",
                  "placeholder": "Share specific suggestions or areas for improvement..."
                }
              }
            },
            "processMessages": ["Evaluando la demografía de la audiencia...", "Estimando la duración óptima de la clase...", "Seleccionando actividades de aprendizaje potenciales...", "Determinando el propósito de cada actividad...", "Secuenciando actividades para un máximo compromiso...", "Adaptando el contenido a los objetivos de aprendizaje...", "Ajustando los niveles de dificultad para la competencia de la audiencia...", "Finalizando elementos interactivos para el aprendizaje activo...", "Creando estrategias de evaluación para la retención de conocimientos...", "Optimizando el flujo de contenido para una experiencia de aprendizaje sin problemas...", "Preparando los toques finales en el diseño educativo...", "Generación de contenido de microaprendizaje personalizado completo."],
            "suggestions": {
              "step0": {
                "title": "Añade tus ideas",
                "textArea": "Elabora el objetivo de tu módulo aquí",
                "description": "Define el objetivo principal o resultado que los aprendices alcanzarán al completar este módulo"
              },
              "step1": {
                "titulo": "Definir Objetivo",
                "description": "Selecciona o define el objetivo principal de tu módulo del listado de sugerencias proporcionado. Estas sugerencias facilitan el manejo y el correcto flujo de la IA con tu trabajo buscado. Encuentra la opción que mejor se alinee con tus metas educativas."
              },
              "step2": {
                "forWhom": "Identifica para quién está diseñado el módulo para adaptar el contenido adecuadamente. Opciones: Escuela, Universidad, Empresa.",
                "howLong": "Selecciona la duración aproximada del módulo. Opciones: Breve (una visión rápida), Estándar (exploración profunda), Extendido (cobertura completa)."
              }
            },
            "title": "Crea un Módulo de aprendizaje",
            "postTitle": "Selecciona los aspectos que debe tener el contenido a generar en el siguiente formulariona los aspectos que debe tener el contenido a generar en el siguiente formulario",
            "module": "Objetivo Módulo de aprendizaje",
            "empty": "Acá podrás visualizar el contenido personalizado, adaptado por nuestro asistente en función de tus entradas de formulario",
            "audience": {
              "school": "Escuela",
              "university": "Universidad",
              "company": "Empresa"
            },
            "moduleLength": {
              "brief": "Breve",
              "standard": "Estándar",
              "extended": "Extendido"
            },
            "form": {
              "audience": "¿Para quién es este módulo?",
              "module": "¿Cuál es el objetivo de este módulo?",
              "target": "Edad media de los alumnos",
              "duration": "Duración del módulo",
              "languages": "Idiomas"
            },
            "labels": {
              "title": "Título",
              "description": "Descripción"
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