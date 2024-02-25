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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/activity",
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
        hash: 3633086228,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Agregar",
              "manual": "Generar manualmente",
              "confirm": "Confirmar",
              "analyse": "Sugerir mejoras",
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
              "back": "Atrás",
              "cover": "Generar portada",
              "upload": "Subir Imagen"
            },
            "activities": {
              "minutes": "Mins",
              "description": "Descripción",
              "objective": "Objetivo",
              "type": "Tipo",
              "questions": "Preguntas",
              "topics": "Temas",
              "actions": {
                "generateAnswers": "Generar respuestas"
              },
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
              "empty": {
                "title": "Crea Este Elemento",
                "description": "Utiliza la IA para dar forma a este elemento específico. Haz clic en 'Generar' para crear contenido atractivo sin esfuerzo. Eleva tu experiencia de enseñanza con una creación innovadora. 🚀"
              }
            },
            "conversation": {
              "description": "Especifique todo lo que considere importante para la conversación. Esto ayudará al bot a entenderlo mejor y a proporcionarle las mejores respuestas posibles. También puede especificar los temas sobre los que desea hablar.",
              "topics": "Enumere todos los temas sobre los que desea hablar"
            },
            "manual": {
              "textarea": "Agrega el contenido de la actividad",
              "cancel": "¿Estás seguro que quieres cancelar?"
            },
            "materials": {
              "article": "Artículo",
              "content": "Contenido",
              "synthesis": "Síntesis",
              "dyslexia": "Dislexia",
              "introduction": "introducción"
            },
            "refine": {
              "title": "Mejorar la calidad del contenido",
              "description": "Tus aportes nos ayudarán a mejorar el contenido.",
              "textarea": {
                "label": "Tus aportes",
                "placeholder": "Comparte sugerencias específicas o áreas de mejora..."
              },
              "image": {
                "title": "Mejora la calidad de tu imagen",
                "subtitle": "Tus aportes nos ayudarán a mejorar el contenido.",
                "confirm": {
                  "title": "¿Quieres reemplazar la imagen actual?",
                  "subtitle": "Si confirmas, la imagen actual será reemplazada."
                }
              }
            },
            "multipleChoice": {
              "labels": {
                "correct": "Respuesta correcta",
                "mark": "Marcar como correcta"
              },
              "related": {
                "label": "Actividad relacionada",
                "independent": "Independiente"
              }
            },
            "processMessages": ["Evaluando la demografía de la audiencia...", "Estimando la duración óptima de la clase...", "Seleccionando actividades de aprendizaje potenciales...", "Determinando el propósito de cada actividad...", "Secuenciando actividades para un máximo compromiso...", "Adaptando el contenido a los objetivos de aprendizaje...", "Ajustando los niveles de dificultad para la competencia de la audiencia...", "Finalizando elementos interactivos para el aprendizaje activo...", "Creando estrategias de evaluación para la retención de conocimientos...", "Optimizando el flujo de contenido para una experiencia de aprendizaje sin problemas...", "Preparando los toques finales en el diseño educativo...", "Generación de contenido de microaprendizaje personalizado completo."],
            "refiningActivity": ["Analizando el objetivo de la actividad para garantizar alineación con los resultados de aprendizaje...", "Revisando los componentes de la actividad para maximizar la participación estudiantil...", "Optimizando la estructura de la actividad para facilitar la comprensión y la aplicación del conocimiento...", "Ajustando los materiales didácticos para una mayor accesibilidad y diversidad...", "Evaluando métodos de entrega para una interacción efectiva y adaptativa...", "Incorporando feedback estudiantil para mejorar la experiencia de aprendizaje...", "Calibrando el nivel de dificultad para satisfacer un rango amplio de habilidades estudiantiles...", "Integrando tecnología educativa para enriquecer la actividad...", "Actualizando los recursos de la actividad para mantener relevancia y actualidad...", "Finalizando el proceso de refinamiento para una actividad educativa integral y atractiva..."],
            "refiningQuestions": ["Formulando preguntas para evaluar la comprensión del tema central...", "Seleccionando opciones de respuesta que reflejen una variedad de perspectivas...", "Diseñando preguntas para abarcar los objetivos de aprendizaje específicos...", "Creando distractores plausibles para evaluar el pensamiento crítico...", "Elaborando preguntas que midan la aplicación práctica de los conceptos...", "Integrando preguntas de análisis para profundizar en la comprensión conceptual...", "Generando preguntas que fomenten la retención a largo plazo...", "Construyendo un flujo lógico en el cuestionario que refleje la estructura del contenido...", "Asegurando que las preguntas cubran todos los aspectos clave de la actividad...", "Finalizando la revisión de preguntas para garantizar la alineación con los objetivos educativos..."],
            "refiningAnswers": ["Compilando respuestas correctas basadas en los puntos clave de la materia...", "Incluyendo opciones variadas que desafíen la comprensión del estudiante...", "Asegurando que cada respuesta refuerce el conocimiento esencial de la actividad...", "Balanceando la dificultad de las respuestas para mantener un desafío apropiado...", "Vinculando respuestas con ejemplos prácticos para facilitar la aplicación del conocimiento...", "Seleccionando respuestas que requieran análisis y no solo memorización...", "Incorporando retroalimentación inmediata en respuestas para fomentar el aprendizaje...", "Estableciendo una secuencia coherente de preguntas y respuestas...", "Revisando que las respuestas representen un espectro completo de la lección...", "Completando la creación de un banco de respuestas que apoye el éxito del estudiante..."],
            "specs": {
              "title": "Recursos",
              "objective": {
                "label": "Objetivo",
                "placeholder": "Agrega el objetivo de la actividad"
              },
              "related": {
                "label": "Actividad relacionada",
                "placeholder": "Selecciona la actividad relacionada"
              },
              "instructions": {
                "label": "Instrucciones",
                "placeholder": "Agrega las instrucciones de la actividad"
              },
              "task": {
                "label": "Tarea",
                "placeholder": "Agrega la tarea de la actividad"
              },
              "criteria": {
                "title": "Criterios de evaluación",
                "label": "Criterio",
                "placeholder": "Agrega los criterios de la actividad"
              },
              "subject": {
                "label": "Tema",
                "placeholder": "Agrega el tema de los criterios"
              },
              "character": {
                "label": "Personaje",
                "placeholder": "Agrega el personaje de la actividad"
              },
              "role": {
                "label": "Rol",
                "placeholder": "Agrega el rol del personaje"
              },
              "questions": {
                "title": "Questions"
              }
            },
            "bulletPoint": {
              "add": "Nuevo elemento",
              "refine": "Refinar"
            },
            "labels": {
              "title": "Título",
              "description": "Descripción"
            },
            "types": {
              "content-theory": "Teoría de Contenido",
              "debate": "Debate",
              "character-talk": "Charla de Personaje",
              "multiple-choice": "Múltiple Elección",
              "spoken/written": "Hablado/Escrito",
              "spoken": "Hablado",
              "written": "Escrito"
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