System.register(["@beyond-js/kernel@0.1.14/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/i18n",
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
        hash: 685712108,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "management": "Gestion",
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
              "recordAgain": "Grabar nuevamente",
              "join": "Unirse",
              "register": "Registrar",
              "imported": "Importado",
              "link": "Vincular",
              "gTooltip": "Aula importada desde Google",
              "import": "Importar"
            },
            "activities": {
              "types": {
                "content-theory": "Contenido/Teoría",
                "multiple-choice": "Selección Múltiple",
                "character-talk": "Conversación con un Personaje",
                "debate": "Debate",
                "assessment": "Selección Múltiple",
                "spoken": "Exposición Oral",
                "hand-written": "Escrito a mano",
                "written": "Escrito",
                "free-conversation": "Conversación libre",
                "exercise": "Ejercicio"
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
              "profile": "Mi Perfil",
              "kb": "Bases de Conocimiento",
              "kbSections": "Secciones",
              "kbArticles": "Artículos"
            },
            "errors": {
              "46": "No posees creditos para utilizar acciones con Inteligencia artificial",
              "NO_CREDITS": "No tienes suficientes créditos para realizar esta acción",
              "DEFAULT_ERROR": "Ocurrió un error, por favor intenta nuevamente más tarde",
              "NO_ENOUGH_CONTEXT": "El contexto proporcionado no es suficiente para generar la imagen. Por favor agrega más detalles descriptivos. Por ejemplo: 'Una ciudad futurista al atardecer con autos voladores y luces neón'.",
              "NO_IMAGE_GENERATED": "No pudimos procesar tu solicitud, por favor inténtalo nuevamente."
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
              },
              "fr": {
                "code": "fr",
                "name": "Francés"
              }
            },
            "languagesSelect": {
              "label": "Idioma",
              "placeholder": "Seleccionar Idioma"
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