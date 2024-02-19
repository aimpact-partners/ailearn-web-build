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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/draft",
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
        hash: 16549054,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "analyse": "Sugerir mejoras",
              "activities": "Generar actividades",
              "activity": "Actividades",
              "applySuggestions": "Aplicar sugerencias",
              "back": "Atrás",
              "cancel": "Cancelar",
              "cover": "Generar portada",
              "clean": "Limpiar",
              "continue": "Continuar",
              "create": "Crear",
              "confirm": "Confirmar",
              "delete": "Eliminar",
              "edit": "Editar",
              "generate": "Generar",
              "next": "Siguiente",
              "publish": "Publicar",
              "removeSuggestions": "Cancelar sugerencias",
              "refine": "Refinar",
              "save": "Guardar",
              "update": "Subir documento",
              "upload": "Subir imagen"
            },
            "grades": {
              "pre-k": "Preescolar",
              "kindergarten": "Jardín de Infantes",
              "1st-grade": "1er grado",
              "2nd-grade": "2do grado",
              "3rd-grade": "3er grado",
              "4th-grade": "4to grado",
              "5th-grade": "5to grado",
              "6th-grade": "6to grado",
              "7th-grade": "7mo grado",
              "8th-grade": "8vo grado",
              "9th-grade": "9no grado",
              "10th-grade": "10mo grado",
              "11th-grade": "11vo grado",
              "12th-grade": "12vo grado",
              "university": "Universidad",
              "year-1": "Año 1",
              "year-2": "Año 2",
              "year-3": "Año 3",
              "year-4": "Año 4",
              "year-5": "Año 5",
              "year-6": "Año 6",
              "year-7": "Año 7",
              "year-8": "Año 8",
              "year-9": "Año 9",
              "year-10": "Año 10",
              "year-11": "Año 11",
              "year-12": "Año 12",
              "year-13": "Año 13"
            },
            "languages": {
              "label": "Idiomas",
              "en": "Inglés",
              "es": "Español",
              "pt": "Portugués",
              "fr": "Francés",
              "de": "Alemán",
              "it": "Italiano"
            },
            "processMessages": ["Evaluando la demografía de la audiencia...", "Estimando la duración óptima de la clase...", "Seleccionando actividades de aprendizaje potenciales...", "Determinando el propósito de cada actividad...", "Secuenciando actividades para un máximo compromiso...", "Adaptando el contenido a los objetivos de aprendizaje...", "Ajustando los niveles de dificultad para la competencia de la audiencia...", "Finalizando elementos interactivos para el aprendizaje activo...", "Creando estrategias de evaluación para la retención de conocimientos...", "Optimizando el flujo de contenido para una experiencia de aprendizaje sin problemas...", "Preparando los toques finales en el diseño educativo...", "Generación de contenido de microaprendizaje personalizado completo."],
            "suggestions": {
              "step1": {
                "titulo": "Definir Objetivo",
                "description": "Selecciona o define el objetivo principal de tu módulo del listado de sugerencias proporcionado. Estas sugerencias facilitan el manejo y el correcto flujo de la IA con tu trabajo buscado. Encuentra la opción que mejor se alinee con tus metas educativas."
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
            },
            "wizard": {
              "messages": {
                "save": "Objetivo guardado con éxito"
              },
              "introduction": {
                "title": "Construyamos juntos un nuevo módulo de aprendizaje",
                "subtitle": "Seleccione las características que querés darle al módulo"
              },
              "grades": {
                "label": "Nivel de grado",
                "error": "Por favor seleccione un nivel de grado"
              },
              "schools": {
                "label": "Propiedad",
                "select": "Seleccionar propiedad",
                "account": "Cuenta actual",
                "error": "Necesita especificar la propiedad del módulo de aprendizaje"
              },
              "objective": {
                "title": "Tema u objetivo",
                "textArea": "Escribe el objetivo de tu módulo aquí",
                "description": "Define el principal resultado de aprendizaje de tu módulo."
              },
              "suggestions": "Si lo deseas, selecciona una de las siguientes opciones de mejora y se llevará a cabo una refinación del objetivo definido.",
              "forWhom": "Identifica para quién está diseñado el módulo para adaptar el contenido adecuadamente. Opciones: Escuela, Universidad, Empresa.",
              "howLong": "Selecciona la duración aproximada del módulo. Opciones: Breve (una visión general rápida), Estándar (exploración en profundidad), Extendido (cobertura completa)."
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