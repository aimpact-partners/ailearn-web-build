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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.30"], ["@aimpact/ailearn-app", "0.0.30"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.30/modules/management/activity",
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
        hash: 3834722088,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Agregar",
              "confirm": "Confirmar",
              "analyse": "Sugerir mejoras",
              "activities": "Generar actividades",
              "refine": "Refinar",
              "generate": "Generar con IA",
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
              "upload": "Subir Imagen",
              "inspiration": "Generar con IA",
              "manual": "Diseño manual"
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
              },
              "deleteModal": {
                "title": "Eliminar Contenido",
                "description": "¿Estás seguro de que quieres eliminar el contenido de esta actividad?"
              }
            },
            "conversation": {
              "description": "Especifique todo lo que considere importante para la conversación. Esto ayudará al bot a entenderlo mejor y a proporcionarle las mejores respuestas posibles. También puede especificar los temas sobre los que desea hablar.",
              "topics": "Enumere todos los temas sobre los que desea hablar"
            },
            "manual": {
              "cancel": "¿Estás seguro de que quieres cancelar?",
              "article": {
                "textarea": "Añade el contenido de la actividad"
              },
              "content": {
                "textarea": "Añade el contenido de la actividad"
              },
              "synthesis": {
                "textarea": "Añade tu síntesis aquí"
              },
              "dyslexia": {
                "textarea": "Añade tu contenido aquí"
              }
            },
            "materials": {
              "article": "Artículo",
              "content": "Contenido",
              "synthesis": "Síntesis",
              "dyslexia": "Adecuaciones",
              "audios": "Audios",
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
            "multipleChoice": {
              "labels": {
                "correct": "Respuesta correcta",
                "mark": "Marcar como correcta"
              },
              "related": {
                "label": "Actividad relacionada",
                "independent": "Independiente"
              },
              "emptyOptions": "No hay opciones disponibles"
            },
            "picture": {
              "title": "Genera la mejor imagen para tu actividad",
              "description": "Esta herramienta te ayudará a generar la mejor imagen para tu actividad. Puedes subir una imagen y nosotros generaremos la mejor imagen para tu módulo. También puedes usar el editor de imágenes para editar la imagen y generar la mejor imagen para tu módulo.",
              "notes": {
                "label": "Notas",
                "placeholder": "Comparte tus sugerencias para crear la mejor imagen para tu módulo"
              },
              "confirm": {
                "title": "¿Quieres reemplazar la imagen actual?",
                "subtitle": "Si confirmas, la imagen actual será reemplazada."
              }
            },
            "processMessages": ["Evaluando la demografía de la audiencia...", "Estimando la duración óptima de la clase...", "Seleccionando actividades de aprendizaje potenciales...", "Determinando el propósito de cada actividad...", "Secuenciando actividades para un máximo compromiso...", "Adaptando el contenido a los objetivos de aprendizaje...", "Ajustando los niveles de dificultad para la competencia de la audiencia...", "Finalizando elementos interactivos para el aprendizaje activo...", "Creando estrategias de evaluación para la retención de conocimientos...", "Optimizando el flujo de contenido para una experiencia de aprendizaje sin problemas...", "Preparando los toques finales en el diseño educativo...", "Generación de contenido de microaprendizaje personalizado completo."],
            "refiningActivity": ["Analizando el objetivo de la actividad para garantizar alineación con los resultados de aprendizaje...", "Revisando los componentes de la actividad para maximizar la participación estudiantil...", "Optimizando la estructura de la actividad para facilitar la comprensión y la aplicación del conocimiento...", "Ajustando los materiales didácticos para una mayor accesibilidad y diversidad...", "Evaluando métodos de entrega para una interacción efectiva y adaptativa...", "Incorporando feedback estudiantil para mejorar la experiencia de aprendizaje...", "Calibrando el nivel de dificultad para satisfacer un rango amplio de habilidades estudiantiles...", "Integrando tecnología educativa para enriquecer la actividad...", "Actualizando los recursos de la actividad para mantener relevancia y actualidad...", "Finalizando el proceso de refinamiento para una actividad educativa integral y atractiva..."],
            "refiningQuestions": ["Formulando preguntas claras sobre el tema...", "Seleccionando diferentes perspectivas de respuesta...", "Diseñando preguntas específicas para aprender...", "Creando opciones para pensar críticamente...", "Elaborando preguntas para aplicar conceptos...", "Integrando preguntas para comprender mejor...", "Generando preguntas para recordar...", "Construyendo un cuestionario lógico...", "Asegurando cobertura completa de la actividad...", "Revisando preguntas para alinearse con objetivos educativos..."],
            "refiningAnswers": ["Compilando respuestas correctas...", "Incluyendo opciones desafiantes...", "Reforzando conocimientos esenciales...", "Manteniendo un desafío apropiado...", "Incorporando retroalimentación inmediata...", "Estableciendo una secuencia coherente...", "Revisando respuestas completas...", "Creando un banco de respuestas para el éxito..."],
            "generatingImage": ["Iniciando generación de imagen para la actividad del módulo...", "Integrando parámetros de la actividad para personalizar la imagen...", "Seleccionando iconografía y colores basados en el contenido de la actividad...", "Elaborando esquemas visuales para facilitar la comprensión del tema...", "Adaptando la complejidad visual al nivel educativo del módulo...", "Enriqueciendo la imagen con elementos interactivos para la actividad...", "Armonizando la imagen con el esquema de diseño del módulo...", "Realizando ajustes finos en la composición de la imagen...", "Verificando la alineación de la imagen con los objetivos de aprendizaje...", "Imagen de actividad generada exitosamente y preparada para su uso."],
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
              "assessment": {
                "label": "Forma de evaluación",
                "placeholder": "Agrega las instrucciones de la actividad"
              },
              "task": {
                "label": "Tarea solicitada al alumno",
                "placeholder": "Agrega la tarea de la actividad"
              },
              "criteria": {
                "title": "Criterios de evaluación",
                "label": "Criterio",
                "placeholder": "Agrega los criterios de la actividad"
              },
              "subjectDebate": {
                "label": "Moción del debate",
                "placeholder": "Add the subject"
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
                "title": "Preguntas"
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