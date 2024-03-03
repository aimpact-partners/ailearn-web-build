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
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/settings",
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
        hash: 3589006221,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Agregar",
              "analyse": "Sugerir mejoras",
              "activities": "Generar actividades",
              "activity": "Actividades",
              "applySuggestions": "Aplicar sugerencias",
              "back": "Atrás",
              "cancel": "Cancelar",
              "continue": "Continuar",
              "cover": "Generar portada",
              "clean": "Limpiar",
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
            "activities": {
              "minutes": "Min",
              "description": "Descripción",
              "objective": "Objetivo",
              "type": "Tipo",
              "questions": "Preguntas",
              "topics": "Temas",
              "title": "Actividades",
              "empty": {
                "title": "Módulo sin actividades",
                "text": "Agrega una actividad a tu módulo"
              },
              "createModal": {
                "title": "Selecciona el tipo de actividad"
              },
              "delete": {
                "title": "¿Realmente desea eliminar esta actividad?",
                "subtitle": "Al eliminar esta actividad, no podrá recuperarla."
              },
              "types": {
                "content-theory": "Contenido/Teoría",
                "multiple-choice": "Selección Múltiple",
                "character-talk": "Hablar con un Personaje",
                "debate": "Debate",
                "spoken": "Exposición Oral Individual"
              },
              "descriptionTypes": {
                "content-theory": "Artículo, adaptaciones y audios sobre un tema específico para construir una base teórica.",
                "multiple-choice": "Preguntas de selección múltiple para evaluar comprensión",
                "character-talk": "Aprender a través de una conversación con un personaje de ficción",
                "debate": " Conversación uno-a-uno con un asistente virtual para explorar y profundizar temas",
                "spoken": "Presentación oral sobre un tema asignado para evaluar conocimientos u otros usos como creatividad, presentaciones originales, etc"
              },
              "states": {
                "empty": "Actividad vacia",
                "completed": "Completada",
                "processing": "En proceso"
              }
            },
            "breadcrumb": {
              "modules": "Módulos",
              "management": "Borrador"
            },
            "module": {
              "title": "Agrega el nombre del módulo de aprendizaje",
              "description": "Descripción",
              "objective": "Objetivo del módulo",
              "actions": {
                "description": "Agrega una descripción",
                "addActivity": "Agrega actividad"
              },
              "activities": {
                "title": "Lista de actividades",
                "empty": {
                  "title": "Módulo sin actividades",
                  "text": "Agrega una actividad a tu módulo"
                }
              }
            },
            "picture": {
              "title": "Genera la mejor imagen para tu módulo",
              "description": "Esta herramienta te ayudará a generar la mejor imagen para tu módulo. Puedes subir una imagen y nosotros generaremos la mejor imagen para tu módulo. También puedes usar el editor de imágenes para editar la imagen y generar la mejor imagen para tu módulo.",
              "notes": {
                "label": "Notas",
                "placeholder": "Comparte tus sugerencias para crear la mejor imagen para tu módulo"
              },
              "confirm": {
                "title": "¿Quieres reemplazar la imagen actual?",
                "subtitle": "Si confirmas, la imagen actual será reemplazada."
              }
            },
            "generatingImage": ["Recepción del texto para la generación de la imagen...", "Análisis del contexto del módulo educativo...", "Selección de elementos visuales acorde al año escolar...", "Composición de bocetos preliminares basados en el texto...", "Ajuste de detalles gráficos y estilo visual...", "Incorporación de criterios pedagógicos en la imagen...", "Optimización de la imagen para una mejor retención educativa...", "Finalización de la renderización de la imagen...", "Revisión de calidad y coherencia con el módulo...", "Imagen generada con éxito y lista para su integración en el módulo."],
            "refine": {
              "module": {
                "title": "Refina la calidad de tu módulo",
                "subtitle": "Tus aportes nos ayudarán a mejorar el contenido.",
                "confirm": {
                  "title": "¿Deseas reemplazar el contenido actual?",
                  "subtitle": "Si confirmas, el proceso de generación reemplazará el contenido actual con el nuevo. Si deseas conservar el contenido actual, haz clic en cancelar."
                }
              },
              "textarea": {
                "label": "Tus aportes",
                "placeholder": "Comparte sugerencias específicas o áreas de mejora..."
              },
              "image": {
                "title": "Refina la calidad de tu imagen",
                "subtitle": "Tus aportes nos ayudarán a mejorar el contenido.",
                "confirm": {
                  "title": "¿Deseas reemplazar la imagen actual?",
                  "subtitle": "Si confirmas, la imagen actual será reemplazada."
                }
              }
            },
            "toast": {
              "modulePublished": "Módulo publicado correctamente",
              "errorPublishingModule": "Error al publicar el módulo"
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