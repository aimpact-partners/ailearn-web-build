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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/draft",
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
        hash: 462440749,
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
              "generate": "Generar con IA",
              "next": "Siguiente",
              "publish": "Publicar",
              "removeSuggestions": "Remover sugerencias",
              "refine": "Refinar",
              "save": "Guardar",
              "update": "Subir documento",
              "upload": "Subir imagen"
            },
            "breadcrumb": {
              "modules": "Módulos",
              "management": "Borrador"
            },
            "coins": {
              "alert": {
                "title": "Necesitas créditos IA",
                "description": "Necesitas obtener créditos IA para habilitar todas las funciones con inteligencia artificial.",
                "action": "Aceptar"
              },
              "modal": {
                "title": "Solicita créditos IA para continuar con esa función",
                "description": "Necesitas obtener créditos IA para habilitar todas las funciones con inteligencia artificial.",
                "actions": {
                  "cancel": "No, por ahora, gracias",
                  "confirm": "Solicitar ahora"
                },
                "errors": {
                  "noCredits": "No se ha podido procesar la asignacion, por favor contacte al administrador de la institución"
                }
              },
              "header": {
                "actions": {
                  "require": "SOLICITAR CRÉDITOS",
                  "available": "CRÉDITOS DISPONIBLES"
                },
                "messages": {
                  "add": "Adquiriste  créditos para utilizar las funciones con IA",
                  "middle": "Consumiste el 50% de los créditos disponibles",
                  "finishing": "Te estás quedando sin créditos IA disponibles"
                }
              }
            },
            "grades": {
              "7": "Año 7",
              "8": "Año 8",
              "9": "Año 9",
              "10": "Año 10",
              "11": "Año 11",
              "12": "Año 12"
            },
            "languages": {
              "select": {
                "label": "Idioma",
                "placeholder": "Seleccionar Idioma"
              },
              "label": "Idiomas",
              "en": "Inglés",
              "es": "Español",
              "pt": "Portugués",
              "fr": "Francés",
              "de": "Alemán",
              "it": "Italiano"
            },
            "changingObjective": ["Adaptando el módulo para resaltar los conceptos clave de manera efectiva...", "Configurando actividades interactivas para facilitar el aprendizaje activo...", "Añadiendo contenido adaptable a diversos temas y áreas de estudio...", "Estructurando el módulo para promover habilidades de pensamiento crítico...", "Incorporando técnicas de enseñanza innovadoras para mejorar la retención de conocimiento...", "Asegurando que el módulo cumpla con los estándares educativos generales...", "Fomentando la curiosidad y el aprendizaje autodirigido a través de los objetivos del módulo...", "Implementando metodologías pedagógicas actualizadas para un enfoque integral...", "Optimizando la estructura del módulo para un proceso de aprendizaje escalonado y progresivo...", "Finalizando la personalización del módulo para una experiencia educativa enriquecedora y completa..."],
            "generatingDraft": ["Identificando las mejores actividades para el objetivo del módulo...", "Analizando la audiencia para adecuar las actividades educativas...", "Estimando la duración óptima de cada actividad del módulo...", "Seleccionando tipos de actividades para promover un aprendizaje dinámico...", "Creando objetivos individuales para cada actividad propuesta...", "Integrando actividades que fomenten la interacción y el debate...", "Diseñando tareas que refuercen el conocimiento teórico y práctico...", "Incorporando ejercicios para el análisis crítico de la información...", "Estableciendo actividades para desarrollar habilidades de investigación...", "Elaborando dinámicas que estimulen la reflexión sobre problemáticas actuales...", "Ajustando actividades para cubrir diferentes estilos de aprendizaje...", "Configurando evaluaciones formativas para medir el progreso...", "Incluyendo recursos interactivos para complementar la enseñanza...", "Finalizando la selección de actividades que aseguren el cumplimiento de los objetivos...", "Compilando el borrador final del módulo con todas las actividades diseñadas..."],
            "objectiveSuggestions": ["Evaluando las directrices educativas actuales...", "Adaptando sugerencias a los estándares del ministerio de educación...", "Incorporando mejores prácticas pedagógicas...", "Personalizando contenido para un aprendizaje integral...", "Optimizando sugerencias para competencias del siglo XXI...", "Integrando habilidades críticas y análisis reflexivo...", "Alineando objetivos con expectativas educativas nacionales...", "Enriqueciendo el módulo con enfoques interdisciplinarios...", "Fortaleciendo la propuesta con valores y ética educativa...", "Finalizando ajustes para un aprendizaje significativo y actualizado..."],
            "processMessages": ["Evaluando la demografía de la audiencia...", "Estimando la duración óptima de la clase...", "Seleccionando actividades de aprendizaje potenciales...", "Determinando el propósito de cada actividad...", "Secuenciando actividades para un máximo compromiso...", "Adaptando el contenido a los objetivos de aprendizaje...", "Ajustando los niveles de dificultad para la competencia de la audiencia...", "Finalizando elementos interactivos para el aprendizaje activo...", "Creando estrategias de evaluación para la retención de conocimientos...", "Optimizando el flujo de contenido para una experiencia de aprendizaje sin problemas...", "Preparando los toques finales en el diseño educativo...", "Generación de contenido de microaprendizaje personalizado completo."],
            "suggestions": {
              "objective": {
                "actions": {
                  "label": "¿Desea utilizar esta versión mejorada de tu objetivo?",
                  "cancel": "No, gracias",
                  "confirm": "Sí, actualizar mi objetivo"
                }
              },
              "total": "Sugerencias seleccionadas",
              "origin": "Ministerio",
              "label": "Sugerencia",
              "irrelevant": "El contenido agregado como objetivo no es aplicable para un módulo, por favor verificalo y vuelve a intentar"
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
            "duration": {
              "brief": "Breve (3 actividades)",
              "standard": "Estándar (5 actividades)",
              "extended": "Extendido (7 actividades)"
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
                "title": "Construyamos un nuevo módulo de aprendizaje",
                "subtitle": "Selecciona las características que querés darle al módulo"
              },
              "duration": {
                "placeholder": "Seleccione",
                "label": "Número de actividades"
              },
              "grades": {
                "label": "Año escolar",
                "error": "Por favor seleccione un nivel de grado",
                "select": "Seleccionar año escolar"
              },
              "schools": {
                "label": "Administrador",
                "select": "Seleccionar administrador",
                "account": "Cuenta actual",
                "error": "Necesita especificar el administrador del módulo de aprendizaje"
              },
              "objective": {
                "title": "Tema u objetivo",
                "textArea": "Objetivo del módulo",
                "description": "Define el principal resultado de aprendizaje de tu módulo."
              },
              "suggestions": "Si lo deseas, selecciona una de las siguientes opciones de mejora y se llevará a cabo una refinación del objetivo definido.",
              "forWhom": "Identifica para quién está diseñado el módulo para adaptar el contenido adecuadamente. Opciones: Escuela, Universidad, Empresa.",
              "howLong": "Selecciona la duración aproximada del módulo. Opciones: Breve (una visión general rápida), Estándar (exploración en profundidad), Extendido (cobertura completa).",
              "generatingModule": ["Iniciando diseño asistido por IA para el módulo de aprendizaje...", "Analizando el año escolar especificado y la duración del módulo...", "Recopilando estándares educativos para el año escolar seleccionado...", "Consultando bases de datos curriculares para actividades apropiadas para la edad...", "Aplicando creatividad IA para el borrador inicial de actividades de aprendizaje...", "Refinando actividades basadas en las mejores prácticas pedagógicas...", "Integrando elementos interactivos adaptados a la duración del módulo...", "Optimizando el flujo del módulo de aprendizaje para el compromiso del estudiante...", "Realizando revisiones finales en la coherencia y consistencia del módulo...", "Módulo de aprendizaje y actividades generadas con éxito por asistencia de IA."],
              "modalSuggestions": {
                "title": "Avancemos",
                "description": "Diseñemos las actividades del módulo.",
                "buttons": {
                  "generate": "Generar con IA",
                  "manual": "Diseño manual"
                }
              }
            },
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
              },
              "activities": {
                "title": "Refina las actividades",
                "subtitle": "Define las observaciones que consideres importantes para generar las actividades que desees.",
                "confirm": {
                  "title": "¿Deseas reemplazar el contenido actual?",
                  "subtitle": "Si confirmas, el proceso de generación reemplazará el contenido actual con el nuevo. Si deseas conservar el contenido actual, haz clic en cancelar."
                },
                "description": "Define las observaciones que consideres importantes para generar las actividades que desees."
              },
              "examples": {
                "action": "Ver ejemplos",
                "items": ["Crear actividades teoricas y de evaluaciones de seleccion unicamente", "Crea actividades teoricas, de debate y de evaluación oral donde se analice la forma de expresión y argumentación de los estudiantes", "Empieza con una evaluación básica de selección que permita al estudiante descubrir sus conocimientos, luego una evaluación teorica y finaliza con una evaluación oral donde se analice la forma de expresión y argumentación de los estudiantes"],
                "actions": {
                  "see": "Ver ejemplos",
                  "select": "Usar",
                  "back": "Volver"
                },
                "title": "Ejemplos de observaciones"
              }
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