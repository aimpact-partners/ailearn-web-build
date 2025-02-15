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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/management/activity",
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
        hash: 931215371,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "progress": {
                "title": "Titulo",
                "description": "Descripción",
                "picture": "Imagen",
                "general": "General",
                "agent": "Agente IA",
                "advanced": "Avanzado"
              },
              "test": {
                "warning": "Debes llenar todos los campos requeridos para poder probar la actividad"
              },
              "minutes": "Mins",
              "sections": {
                "general": "",
                "advanced": {
                  "title": "Configuración Avanzada",
                  "subtitle": "Instrucciones adicionales para el agente y la actividad"
                },
                "agent": {
                  "title": "Configuración del Agente de IA",
                  "subtitle": "Estos son los datos que usará la IA para interactuar con cada uno de los alumnos."
                }
              },
              "description": {
                "label": "¿De qué trata esta actividad?*",
                "placeholder": "Añadir una descripción"
              },
              "instructions": {
                "label": "Instrucciones",
                "placeholder": "Agrega las instrucciones"
              },
              "objective": {
                "label": "Objetivo",
                "placeholder": "Agregar un objetivo para tu actividad"
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
                "description": "Utiliza la IA para dar forma a este elemento específico. Haz clic en 'Generar con IA' para crear contenido atractivo sin esfuerzo. Eleva tu experiencia de enseñanza con una creación innovadora. "
              },
              "deleteModal": {
                "title": "Eliminar Contenido",
                "description": "¿Estás seguro de que quieres eliminar el contenido de esta actividad?"
              },
              "settings": {
                "layout": {
                  "label": "Layout",
                  "title": "¿Cómo quieres que se vea esta actividad?",
                  "description": "Selecciona el tipo de visualización que quieres dar a la actividad",
                  "options": {
                    "fullContentLayout": {
                      "title": "Diseño de contenido completo",
                      "description": "<strong>Quiero una actividad de contenido educativo.</strong>"
                    },
                    "mainContentLayout": {
                      "title": "Diseño de contenido principal",
                      "description": "<strong>Quiero priorizar el contenido educativo</strong>, sobre el chat con el agente"
                    },
                    "mainChatLayout": {
                      "title": "Diseño de chat principal",
                      "description": "<strong>Quiero priorizar el chat con el agente</strong>, sobre el contenido educativo."
                    }
                  }
                }
              }
            },
            "contentTheory": {
              "materials": {
                "empty": "Este módulo de aprendizaje no contiene documentos adjuntos",
                "title": "¿Sobre que documentos quiere se base el agente?",
                "characters": "Caracteres disponibles:",
                "types": {
                  "article": "Contenido",
                  "synthesis": "Resumen",
                  "dyslexia": "Adaptaciones",
                  "audios": "Audios"
                },
                "audio": {
                  "noAudio": "Este elemento no posee audio creado",
                  "maxLength": "No se puede crear el audio del elemento pues supera el límite de caracteres permitidos (4000)."
                },
                "article": {
                  "textarea": "Artículo"
                },
                "dyslexia": {
                  "textarea": "Adaptaciones"
                },
                "refinement": {
                  "title": "Crea el contenido de tu actividad con IA",
                  "description": "Tus aportes nos ayudarán a mejorar el contenido."
                },
                "form": {
                  "title": "Creación de contenido educativo",
                  "content": {
                    "title": "Redacción del  contenido",
                    "placeholder": "Comience a crear su contenido aquí…."
                  },
                  "article": {
                    "placeholder": "Comience a crear su contenido aquí…."
                  }
                }
              },
              "empty": {
                "title": "Esta actividad no tiene contenido educativo asociado",
                "description": "Agrega un contenido educativo a tu módulo para comenzar.",
                "actions": {
                  "add": "Agregar articulo",
                  "upload": "Cargar documento"
                }
              }
            },
            "multipleChoice": {
              "questions": {
                "placeholder": "Inserta una pregunta"
              },
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
            "specs": {
              "general": {
                "label": "Datos generales"
              },
              "agent": {
                "label": "Datos requeridos para el agente"
              },
              "advanced": {
                "label": "Datos avanzados"
              },
              "title": "Especificaciones de la actividad",
              "topic": {
                "title": "1. ¿Sobre qué debe enseñar el agente?",
                "label": "Tema de estudio*",
                "placeholder": "Agrega el tema de la actividad"
              },
              "task": {
                "label": "Información adicional para el alumno",
                "placeholder": "Agrega la tarea de la actividad"
              },
              "assessment": {
                "label": "¿Cómo evaluará la IA la presentación oral del alumno?",
                "placeholder": "Agrega la evaluación de la actividad"
              },
              "objective": {
                "label": "Objetivo",
                "placeholder": "Agrega el objetivo de la actividad",
                "empty": "Esta actividad no tiene objetivos asociados. Agregue un objetivo para poder guiar a la IA"
              },
              "related": {
                "label": "Actividad relacionada",
                "placeholder": "Selecciona la actividad relacionada"
              },
              "instructions": {
                "label": "⁠Instrucciones adicionales para el agente",
                "placeholder": "Agrega instrucciones adicionales si es necesario"
              },
              "subjectDebate": {
                "label": "Moción del debate",
                "placeholder": "Add the subject"
              },
              "subject": {
                "title": "¿Cúal es el tópico a debatir? *",
                "label": "Tópico del debate",
                "placeholder": "Tópico del debate"
              },
              "character": {
                "label": "Personaje",
                "placeholder": "Agrega el personaje de la actividad"
              },
              "role": {
                "title": "¿Qué rol debe cumplir el agente en el debate? *",
                "label": "Rol del agente",
                "placeholder": "Agrega el rol del personaje"
              },
              "questions": {
                "title": "Preguntas"
              },
              "objectives": {
                "title": "¿Qué objetivos debe lograr el alumno? *",
                "label": "¿Qué objetivos debe lograr el alumno? *",
                "name": {
                  "label": "Nombre",
                  "placeholder": "Agrega el nombre del objetivo"
                },
                "objective": {
                  "label": "Descripción",
                  "placeholder": "Describe el objetivo de la actividad"
                }
              },
              "criteria": {
                "label": "Criterios de evaluación",
                "placeholder": "Agrega los criterios de la actividad",
                "name": {
                  "label": "Nombre",
                  "placeholder": "Agrega el nombre del criterio"
                },
                "subject": {
                  "label": "Criterio",
                  "placeholder": "Agrega los criterios de la actividad"
                }
              }
            },
            "spoken": {
              "criteria": {
                "label": "Criterios de evaluación"
              }
            },
            "types": {
              "content-theory": "Contenido/Teoría",
              "multiple-choice": "Selección Múltiple",
              "character-talk": "Conversación con un Personaje",
              "debate": "Debate",
              "spoken": "Exposición Oral",
              "written": "Escrito"
            },
            "chat": {
              "empty": {
                "credits": {
                  "title": "¿Listo para aprender?",
                  "description": "Empieza haciendo la consulta que desees"
                },
                "noCredits": {
                  "title": "Necesitas creditos de AI para empezar",
                  "description": "Solicita creditos para empezar a aprender con el Agente de AI"
                }
              }
            },
            "errors": {
              "INCOMPLETE_MODULE": "Debes completar el módulo antes de continuar. Campos faltantes: ",
              "default": "Ha ocurrido un error. Por favor, intenta de nuevo.",
              "NO_RELATED_ACTIVITY": " La actividad seleccionada no tiene un artículo. Debes generar el articulo primero para poder utilizarla",
              "wrongQuestions": "Para guardar, debes haber agregado correctamente las opciones de respuesta y seleccionado la opción correcta para cada pregunta."
            },
            "form": {
              "title": "Titulo de la actividad *"
            },
            "languages": {
              "select": {
                "label": "Idioma",
                "placeholder": "Seleccionar Idioma",
                "tooltip": "El idioma de la actividad es "
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
            "progress": {
              "label": "Estado de la edición",
              "states": {
                "optional": "Opcional",
                "completed": "Completo",
                "inprogress": "En progreso",
                "pending": "Completar"
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