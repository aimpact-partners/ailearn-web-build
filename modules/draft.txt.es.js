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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.08"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/modules/draft",
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
        hash: 1802583620,
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
            "alerts": {
              "coins": {
                "user": {
                  "available": "¡Buenas noticias! Tienes creditos listos para usar.",
                  "unavailable": "Actualmente no posees creditos disponibles."
                },
                "organization": {
                  "available": "¡Tu organización tiene creditos disponibles para usar!",
                  "unavailable": "Tu organización no posee creditos en este momento."
                }
              }
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
            "audience": {
              "input": {
                "label": "Año escolar",
                "error": "Por favor seleccione un nivel de grado",
                "select": "Seleccionar año escolar"
              },
              "argentine": {
                "4to grado": "4to grado",
                "5to grado": "5to grado",
                "6to grado": "6to grado",
                "7mo grado": "7mo grado",
                "1er año": "1er año",
                "2do año": "2do año",
                "3er año": "3er año",
                "4to año": "4to año",
                "5to año": "5to año",
                "6to añ": "6to año"
              },
              "k12": {
                "4": "Year 4",
                "5": "Year 5",
                "6": "Year 6",
                "7": "Year 7",
                "8": "Year 8",
                "9": "Year 9",
                "10": "Year 10",
                "11": "Year 11",
                "12": "Year 12"
              }
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
            "refine": {
              "activities": {
                "title": "Define las instrucciones para la IA",
                "description": "Guía a la Inteligencia Artificial para generar contenido basados en tus principios pedagógicos indicando, por ejemplo, los tipos de actividades y el tono de las mismas (informal, inspirador, etc.)."
              },
              "textarea": {
                "label": "Tus aportes",
                "placeholder": "Comparte sugerencias específicas o áreas de mejora..."
              },
              "errors": {
                "default": "Ha ocurrido un error, por favor intenta nuevamente."
              },
              "confirm": {
                "title": "Estas por confirmar el objetivo de tu modulo",
                "description": " No has seleccionado ninguna de las sugerencias generadas ¿Deseas avanzar sin implementarlas?"
              }
            },
            "requestCredits": {
              "title": "Solicitud de Créditos",
              "subtitle": "Debes solicitar créditos IA al propietario del módulo para utilizar esta función.",
              "ownerDescription": "Propietario del módulo de aprendizaje",
              "action": "¿Deseas solicitar créditos al propietario del módulo?",
              "detail": "Los créditos de IA habilitan todas las funciones avanzadas de Inteligencia Artificial en la creación de módulos de aprendizaje."
            },
            "pathway": {
              "manual": {
                "title": "Continuemos de forma manual",
                "form": {
                  "title": {
                    "label": "Titulo del módulo",
                    "placeholder": "Ingresa el título del módulo"
                  },
                  "description": {
                    "label": "Descripción del módulo",
                    "placeholder": "Ingresa la descripción del módulo"
                  }
                }
              },
              "ai": {
                "title": "Continuemos de forma asistida",
                "form": {
                  "size": {
                    "placeholder": "Cantidad de actividades del módulo",
                    "items": {
                      "brief": "Breve (3 actividades)",
                      "standard": "Estándar (5 actividades)",
                      "extended": "Extendido (7 actividades)"
                    }
                  },
                  "notes": {
                    "placeholder": "Ingrese las instrucciones para guiar a la IA en la creación de tus actividades"
                  }
                }
              }
            },
            "setup": {
              "actions": {
                "cancel": "Cancelar",
                "continue": "Continuar"
              },
              "generation": {
                "title": "Comencemos a dar forma al módulo",
                "subtitle": "Indica de qué manera deseas continuar",
                "options": {
                  "ai": "Quiero generar las actividades con ayuda de la IA",
                  "manually": "Quiero generar las actividades de forma manual"
                }
              },
              "form": {
                "title": {
                  "label": "Titulo del módulo"
                },
                "description": {
                  "label": "Descripción del módulo"
                },
                "activities": {
                  "label": "Cantidad de actividades del módulo"
                },
                "notes": {
                  "placeholder": "Ingrese las instrucciones para guiar a la IA en la creación de tus actividades"
                }
              },
              "sugestions": {
                "title": "Sugerencias de instrucción"
              }
            },
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
              "irrelevant": "El objetivo del módulo proporcionado parece no ser adecuado para la audiencia definida. Por favor, verifica esto y vuelve a intentarlo."
            },
            "title": "Crea un Módulo de aprendizaje",
            "postTitle": "Selecciona los aspectos que debe tener el contenido a generar en el siguiente formulariona los aspectos que debe tener el contenido a generar en el siguiente formulario",
            "module": "Objetivo Módulo de aprendizaje",
            "empty": "Acá podrás visualizar el contenido personalizado, adaptado por nuestro asistente en función de tus entradas de formulario",
            "duration": {
              "brief": "Breve (3 actividades)",
              "standard": "Estándar (5 actividades)",
              "extended": "Extendido (7 actividades)"
            },
            "form": {
              "module": "¿Cuál es el objetivo de este módulo?",
              "target": "Edad media de los alumnos",
              "duration": "Duración del módulo",
              "languages": "Idiomas"
            },
            "labels": {
              "title": "Título",
              "description": "Descripción"
            },
            "objectiveTour": {
              "buttons": {
                "nextBtnText": "Siguiente",
                "prevBtnText": "Anterior",
                "doneBtnText": "Listo"
              },
              "administrator": {
                "title": "Selecciona un Administrador",
                "description": "Elige el administrador responsable del módulo de aprendizaje. Debe tener créditos asignados para la creación de módulos con asistencia de IA."
              },
              "parameters": {
                "title": "Selecciona los parámetros del módulo de aprendizaje",
                "description": "Selecciona el idioma del módulo de aprendizaje, el año escolar de tus alumnos y el número de actividades. Podrás encontrar más información en nuestro canal de YouTube @RVDAIRIVADAVIA24."
              },
              "objective": {
                "title": "Redacta el objetivo principal del módulo de aprendizaje",
                "description": "Este objetivo será central para guiar el resto del contenido y las actividades del módulo."
              },
              "save": {
                "title": "Guarda el objetivo del módulo de aprendizaje",
                "description": "Una vez guardado, podrás solicitar créditos para mejorar el objetivo y comenzar a trabajar con IA."
              }
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
              "suggestions": "Si lo deseas, selecciona una de las siguientes opciones de mejora y se llevará a cabo una refinación del objetivo definido."
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