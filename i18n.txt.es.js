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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.26"], ["@aimpact/ailearn-app", "0.3.26"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.26/i18n",
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
        hash: 2046961933,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "archive": "Archivar",
              "restore": "Restaurar",
              "close": "Cerrar",
              "talktoAI": "Conversar con la IA",
              "select": "Seleccione",
              "filters": "Filtros",
              "assign": "Asignar",
              "assignToClassroom": "Asignar a un aula",
              "use": "Usar",
              "refresh": "Actualizar",
              "copy": "Copiar",
              "watch": "Ver",
              "testActivity": "Probar actividad",
              "invite": "Invitar",
              "dashboard": "Dashboard",
              "search": "Buscar",
              "watchActivity": "Ver actividad",
              "share": "Compartir",
              "clone": "Clonar",
              "add": "Agregar",
              "send": "Enviar",
              "inspiration": "Generar con IA",
              "manual": "Diseño manual",
              "order": "Editar orden",
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
              "removeSuggestions": "Remover sugerencias",
              "refine": "Refinar",
              "save": "Guardar",
              "update": "Subir documento",
              "upload": "Subir imagen",
              "approve": "Aprobar",
              "reject": "Rechazar",
              "recordAgain": "Grabar nuevamente"
            },
            "activities": {
              "types": {
                "content-theory": "Contenido/Teoría",
                "multiple-choice": "Selección Múltiple",
                "character-talk": "Conversación con un Personaje",
                "debate": "Debate",
                "assessment": "Selección Múltiple",
                "spoken": "Exposición Oral"
              },
              "empty": {
                "synthesis": "La actividad no posee sintesis",
                "content": "La actividad no posee contenido"
              }
            },
            "classrooms": {
              "code": "Código de aula"
            },
            "entities": {
              "assignments": "Asignaciones",
              "modules": "Módulos de Aprendizaje",
              "community": "Comunidad",
              "activities": "Actividades",
              "drafts": "Borradores",
              "classrooms": "Aulas",
              "newDraft": "Módulo",
              "archive": "Archivo",
              "organizations": "Instituciones",
              "profile": "Mi Perfil"
            },
            "errors": {
              "46": "No posees creditos para utilizar acciones con Inteligencia artificial",
              "NO_CREDITS": "No tienes suficientes créditos para realizar esta acción",
              "DEFAULT_ERROR": "Ocurrió un error, por favor intenta nuevamente más tarde"
            },
            "languages": {
              "es": {
                "code": "es",
                "name": "Español"
              },
              "en": {
                "code": "en",
                "name": "Inglés"
              },
              "pt": {
                "code": "pt",
                "name": "Portugués"
              },
              "de": {
                "code": "de",
                "name": "Alemán"
              }
            },
            "modal": {
              "delete": {
                "title": "¿Deseas eliminar este elemento?",
                "description": "Una vez eliminado, no podrás recuperarlo."
              }
            },
            "requestCredits": {
              "title": "Habilitar IA",
              "subtitle": {
                "user": "¿Deseas consumir un crédito para habilitar las funciones de IA en la generación del módulo?",
                "org": "Eres un docente autorizado por {institution} para utilizar créditos IA en la generación de los módulos. Confirma el consumo de un crédito para habilitar IA en este módulo de aprendizaje.",
                "interactive": "¿Deseas consumir un crédito para habilitar las funciones de IA?"
              },
              "ownerDescription": "Propietario del módulo de aprendizaje",
              "action": "¿Deseas solicitar créditos al propietario del módulo?",
              "detail": {
                "user": "En RVD.AI las funciones que requieren usar IA utilizan un sistema de créditos. Cada crédito consumido equivale a habilitar interacciones con la IA.",
                "org": "En RVD.AI las funciones que requieren IA utilizan un sistema de créditos. Cada crédito consumido equivale a habilitar interacciones con la IA, y este es otorgado por la institución en la que se está creando el módulo.",
                "interactive": "En RVD.AI las funciones que requieren usar IA utilizan un sistema de créditos. Cada crédito consumido equivale a habilitar interacciones con la IA."
              },
              "alerts": {
                "noCredits": "La asignación no pudo ser procesada, por favor contacta al administrador de la institución"
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