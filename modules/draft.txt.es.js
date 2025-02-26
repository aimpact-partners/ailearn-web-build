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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.16"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.16/modules/draft",
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
        hash: 875932838,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "types": {
                "content-theory": "Contenido/Teoría",
                "multiple-choice": "Selección Múltiple",
                "character-talk": "Conversación con un Personaje",
                "debate": "Debate",
                "spoken": "Exposición Oral"
              }
            },
            "alerts": {
              "coins": {
                "available": "El propietario dispone de créditos IA",
                "unavailable": "El propietario no dispone de créditos IA"
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
                  "require": "Habilitar IA",
                  "available": "CRÉDITOS DISPONIBLES"
                },
                "messages": {
                  "add": "Adquiriste  créditos para utilizar las funciones con IA",
                  "middle": "Consumiste el 50% de los créditos disponibles",
                  "finishing": "Te estás quedando sin créditos IA disponibles"
                }
              }
            },
            "refine": {
              "activities": {
                "title": "Define las instrucciones para la IA",
                "description": "Guía a la Inteligencia Artificial para generar contenido basados en tus principios pedagógicos indicando, por ejemplo, los tipos de actividades y el tono de las mismas (informal, inspirador, etc.)."
              },
              "textarea": {
                "label": "Información adicional",
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
            "suggestions": {
              "objective": {
                "actions": {
                  "label": "¿Desea utilizar esta versión mejorada de tu objetivo?",
                  "cancel": "No, gracias",
                  "confirm": "Sí, actualizar mi objetivo"
                }
              },
              "total": "Sugerencias seleccionadas",
              "origin": "Lineamientos educativos",
              "label": "Sugerencia de ajuste",
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