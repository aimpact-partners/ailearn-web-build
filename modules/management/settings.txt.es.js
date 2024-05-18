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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.13"], ["@aimpact/ailearn-app", "0.0.32-beta.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.13/modules/management/settings",
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
        hash: 2850549296,
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
              "generate": "Generar con IA",
              "next": "Siguiente",
              "publish": "Publicar",
              "removeSuggestions": "Ignorar sugerencias",
              "refine": "Refinar",
              "save": "Guardar",
              "update": "Subir documento",
              "upload": "Subir imagen",
              "manual": "Diseño manual"
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
                "title": "Aún no posees actividades",
                "text": "Agrega una actividad a tu módulo"
              },
              "createModal": {
                "title": "Selecciona el tipo de actividad",
                "validation": "Debes completar el titulo y la descripción del módulo para poder agregar una actividad.",
                "validationTitle": "Módulo incompleto"
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
              "owner": "Administrador",
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
            "refine": {
              "title": "Asistente de Diseño de Actividad con IA",
              "description": "Utiliza el asistente de IA para personalizar y mejorar el diseño de la actividad.",
              "description2": "Simplemente escribe lo que tienes en mente, y la IA ayudará a estructurar la actividad para que se ajuste a tus objetivos de aprendizaje.",
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
              },
              "module": {
                "title": "Refina la calidad de tu módulo",
                "subtitle": "Tus aportes nos ayudarán a mejorar el contenido.",
                "confirm": {
                  "title": "¿Deseas reemplazar el contenido actual?",
                  "subtitle": "Si confirmas, el proceso de generación reemplazará el contenido actual con el nuevo. Si deseas conservar el contenido actual, haz clic en cancelar."
                }
              }
            },
            "modal": {
              "cancel": {
                "title": "¿Estás seguro?",
                "description": "Tus cambios no han sido guardados. Si continúas, los perderás."
              }
            },
            "delete": {
              "title": "Eliminar contenido",
              "description": "¿Estás seguro de que quieres eliminar el contenido de esta actividad?"
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
            "refiningActivity": ["Analizando el objetivo de la actividad para garantizar alineación con los resultados de aprendizaje...", "Revisando los componentes de la actividad para maximizar la participación estudiantil...", "Optimizando la estructura de la actividad para facilitar la comprensión y la aplicación del conocimiento...", "Ajustando los materiales didácticos para una mayor accesibilidad y diversidad...", "Evaluando métodos de entrega para una interacción efectiva y adaptativa...", "Incorporando feedback estudiantil para mejorar la experiencia de aprendizaje...", "Calibrando el nivel de dificultad para satisfacer un rango amplio de habilidades estudiantiles...", "Integrando tecnología educativa para enriquecer la actividad...", "Actualizando los recursos de la actividad para mantener relevancia y actualidad...", "Finalizando el proceso de refinamiento para una actividad educativa integral y atractiva..."],
            "generatingImage": ["Recepción del texto para la generación de la imagen...", "Análisis del contexto del módulo educativo...", "Selección de elementos visuales acorde al año escolar...", "Composición de bocetos preliminares basados en el texto...", "Ajuste de detalles gráficos y estilo visual...", "Incorporación de criterios pedagógicos en la imagen...", "Optimización de la imagen para una mejor retención educativa...", "Finalización de la renderización de la imagen...", "Revisión de calidad y coherencia con el módulo...", "Imagen generada con éxito y lista para su integración en el módulo."],
            "errors": {
              "CONTACT_ADMIN": "Por favor, contacte con el administrador"
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