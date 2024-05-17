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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-dev.44"], ["@aimpact/ailearn-app", "0.0.32-dev.44"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.44/organizations/list",
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
        hash: 1013035759,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "join": "Unirse",
              "create": "Crear",
              "activities": "Generar actividades",
              "refine": "Refinar",
              "generate": "Generar",
              "imported": "Importado",
              "save": "Guardar",
              "clean": "Limpiar",
              "activity": "Actividades",
              "update": "Subir Documento",
              "edit": "Editar",
              "delete": "Eliminar",
              "cancel": "Cancelar",
              "next": "Siguiente",
              "back": "Atrás",
              "link": "Vincular",
              "gTooltip": "Aula importada desde Google",
              "import": "Importar"
            },
            "breadcrumb": {
              "organizations": "Institución",
              "management": "Gestión"
            },
            "create": {
              "title": "Agregar Institución",
              "success": "Institución publicada con éxito",
              "error": "Error al publicar la institución",
              "name": {
                "label": "Nombre de la Institución",
                "placeholder": "¿Cuál será el nombre de la Institución?"
              },
              "description": {
                "label": "Descripción de la Institución",
                "placeholder": "¿Cuál es la misión de esta Institución?"
              },
              "actions": {
                "save": "Continuar"
              }
            },
            "welcome": {
              "message": "Bienvenido %name a tu lista de organizaciones",
              "actionInfo": "Aquí podrás ver y gestionar todas las organizaciones que tienes actualmente. Tendrás acceso a diversas acciones, incluyendo la creación, eliminación y edición de organizaciones. Aprovecha estas herramientas para personalizar cada institución de acuerdo a tus requerimientos."
            },
            "title": "Mis Organizaciones",
            "subtitle": "Explora, ajusta y gestiona tus organizaciones según tus necesidades",
            "errors": {
              "ERROR_GETTING_URL": "Error obteniendo URL"
            },
            "empty": {
              "title": "Crea tu primera institución",
              "description": "Inicia tu travesía educativa dando vida a tu primer curso. Libera tu creatividad, da forma a un contenido atractivo y disfruta de la gratificante experiencia de enseñar a otros. 🚀"
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