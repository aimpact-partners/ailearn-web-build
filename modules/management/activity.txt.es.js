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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-06"], ["@aimpact/ailearn-app", "0.0.46.dev-06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-06/modules/management/activity",
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
        hash: 1456123387,
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
              "manual": "Diseño manual",
              "order": "Editar orden"
            },
            "activities": {
              "minutes": "Mins",
              "description": {
                "label": "Descripción",
                "placeholder": "¿Cuál es la descripción de esta actividad?"
              },
              "instructions": {
                "label": "Instrucciones",
                "placeholder": "¿Cuáles son las instrucciones para esta actividad?"
              },
              "objective": {
                "label": "Objetivo",
                "placeholder": "¿Cuál es el objetivo de esta actividad?"
              },
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
                "description": "Utiliza la IA para dar forma a este elemento específico. Haz clic en 'Generar' para crear contenido atractivo sin esfuerzo. Eleva tu experiencia de enseñanza con una creación innovadora. "
              },
              "deleteModal": {
                "title": "Eliminar Contenido",
                "description": "¿Estás seguro de que quieres eliminar el contenido de esta actividad?"
              }
            },
            "multipleChoice": {
              "modalQuestions": {
                "title": "Generar preguntas",
                "description": "Agrega las observaciones que consideres necesarias para generar las preguntas y respuestas"
              },
              "modalAnswers": {
                "title": "Generar respuestas",
                "description": "Agrega las observaciones que consideres necesarias para generar las respuestas"
              },
              "actions": {
                "generateAnswers": "Generar respuestas",
                "addAnswer": "Agregar respuesta",
                "addQuestion": "Agregar pregunta",
                "generateQuestions": "Generar preguntas",
                "delete": "Eliminar",
                "markCorrect": "Marcar como correcta"
              },
              "answers": {
                "placeholder": "Inserta una opción de respuesta y márcala como correcta o incorrecta"
              },
              "related": {
                "label": "Actividad relacionada",
                "independent": "Independiente"
              },
              "emptyOptions": "Las opciones de respuesta no han sido definidas"
            },
            "spoken": {
              "criteria": {
                "label": "Criterios de evaluación"
              }
            },
            "conversation": {
              "description": "Especifique todo lo que considere importante para la conversación. Esto ayudará al bot a entenderlo mejor y a proporcionarle las mejores respuestas posibles. También puede especificar los temas sobre los que desea hablar.",
              "topics": "Enumere todos los temas sobre los que desea hablar"
            },
            "errors": {
              "INCOMPLETE_MODULE": "Debes completar el módulo antes de continuar. Campos faltantes: ",
              "default": "Ha ocurrido un error. Por favor, intenta de nuevo.",
              "relatedArticle": " La actividad seleccionada no tiene un artículo. Debes generar el articulo primero para poder utilizarla",
              "wrongQuestions": "Para guardar, debes haber agregado correctamente las opciones de respuesta y seleccionado la opción correcta para cada pregunta."
            },
            "form": {
              "title": "Agrega el nombre de la actividad"
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
              "synthesis": "Summary",
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
            "picture": {
              "title": "Genere imágenes para su actividad",
              "description": "Describa la imagen que desee generar de manera detallada para que la inteligencia artificial pueda imaginarla y generarla.",
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
              "content-theory": "Contenido/Teoría",
              "multiple-choice": "Selección Múltiple",
              "character-talk": "Conversación con un Personaje",
              "debate": "Debate",
              "spoken": "Exposición Oral",
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