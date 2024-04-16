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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/organizations/view",
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
        hash: 2785530264,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Agregar",
              "approve": "Autorizar",
              "reject": "Rechazar",
              "invite": "Invitar",
              "copy": "Copiar en el portapapeles",
              "create": "Crear",
              "activities": "Generar actividades",
              "refine": "Refinar",
              "generate": "Generar",
              "save": "Guardar",
              "clean": "Limpiar",
              "activity": "Actividades",
              "upload": "Subir",
              "edit": "Editar",
              "delete": "Eliminar",
              "cancel": "Cancelar",
              "next": "Siguiente",
              "back": "Atrás"
            },
            "breadcrumb": {
              "organizations": "Organización",
              "management": "Gestión"
            },
            "list": {
              "managers": {
                "title": "Administradores",
                "role": "Administrador"
              },
              "members": {
                "title": "Docentes",
                "role": "Docente"
              },
              "pendings": {
                "title": "Pendientes",
                "invited": "Invitado"
              }
            },
            "ERR_GENERATING_ACTIVITIES": "Error generando classes",
            "orgCode": "Código de Organización",
            "title": "Crea una Organización",
            "postTitle": "Nos complace darle la bienvenida a este apasionante proceso de creación de su espacio educativo. Este formulario marca el primer paso hacia la excelencia en la gestión de su equipo educativo. Dispondrá de las herramientas necesarias para personalizar todos los aspectos de su organización y alcanzar sus objetivos académicos. Trabajando juntos, construiremos un entorno que refleje sus estándares de calidad y fomente un aprendizaje continuo y significativo. ¡Empecemos a construir juntos un futuro educativo brillante!",
            "class": "Objetivo Organización de Aprendizaje",
            "messages": {
              "copy": "Texto copiado con éxito",
              "copyError": "Error al copiar al portapapeles"
            },
            "empty": {
              "title": "Organización no Encontrada",
              "pending": "Excelente, ya no tiene asuntos pendientes que resolver. Todas las invitaciones se han resuelto.",
              "description": "¡Ups! No se encontró el Organización. Existe la posibilidad de que estés utilizando un enlace antiguo o buscando un Organización inexistente. Te invitamos a crear una nueva y continuar explorando este increíble mundo de enseñanza y aprendizaje. ¡Embárcate en una nueva travesía educativa con nosotros! 🌟",
              "labelList": "Suma usuarios en esta lista dándole click al botón de %action"
            },
            "modal": {
              "edit": {
                "title": "¿Deseas cambiar el rol del usuario?",
                "info": "Recuerda que cambiar el rol también modifica el acceso y las acciones del usuario dentro de la organización."
              },
              "invite": {
                "title": "Invitar un usuario como %role"
              }
            },
            "system": {
              "invite": {
                "success": "Invitación enviada"
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