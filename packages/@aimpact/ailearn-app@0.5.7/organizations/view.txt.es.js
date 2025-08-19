System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/organizations/view",
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
        hash: 2013317068,
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
              "back": "Atrás",
              "confirm": "Confirmar"
            },
            "coins": {
              "label": "Interacciones disponibles",
              "assignments": "Interactivos",
              "modules": "Generativos"
            },
            "errors": {
              "10003": "No se ha podido aprobar el usuario, vuelva a intentarlo más tarde y si el problema persiste contacte con el soporte."
            },
            "form": {
              "title": "Invitar usuario",
              "role": {
                "label": "Rol",
                "placeholder": "Selecciona el rol"
              },
              "name": {
                "label": "Nombre",
                "placeholder": "Ingresa el nombre"
              },
              "email": {
                "label": "Correo electrónico",
                "placeholder": "Ingresa el correo electrónico"
              },
              "button": "Invitar"
            },
            "forms": {
              "approve": {
                "title": "¿Deseas aprobar la solicitud del usuario?",
                "description": "Selecciona el rol que deseas asignar al usuario."
              },
              "delete": {
                "title": "¿Deseas eliminar el usuario?",
                "description": "Recuerda que eliminar un usuario también elimina su acceso y acciones dentro de la institución."
              },
              "cancel": {
                "title": "¿Deseas cancelar la invitación del usuario?",
                "description": "Recuerda que cancelar la invitación del usuario también cancela su acceso y acciones dentro de la institución."
              },
              "reject": {
                "title": "¿Deseas rechazar la solicitud del usuario?",
                "description": "Recuerda que rechazar la solicitud del usuario también cancela su acceso y acciones dentro de la institución."
              },
              "edit": {
                "title": "¿Deseas cambiar el rol del usuario?",
                "info": "Recuerda que cambiar el rol también modifica el acceso y las acciones del usuario dentro de la institución."
              }
            },
            "editForm": {
              "title": "¿Deseas cambiar el rol del usuario?",
              "info": "Recuerda que cambiar el rol también modifica el acceso y las acciones del usuario dentro de la institución."
            },
            "roles": {
              "all": {
                "identifier": "all",
                "title": "Todos",
                "entity": "Todos"
              },
              "manager": {
                "identifier": "managers",
                "title": "Administrador",
                "entity": "Administradores"
              },
              "member": {
                "identifier": "members",
                "title": "Docente",
                "entity": "Docentes"
              },
              "pending": {
                "identifier": "pendings",
                "title": "Pendiente",
                "entity": "Pendientes"
              }
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
            "messages": {
              "approval": {
                "success": "Usuario aprobado con éxito",
                "error": "Error al aprobar usuario"
              },
              "copy": "Texto copiado con éxito",
              "copyError": "Error al copiar al portapapeles"
            },
            "orgCode": "Código de Institución",
            "title": "Agrega un titulo",
            "description": "Agrega una descripción",
            "empty": {
              "rol": {
                "title": "No hay integrantes registrados con este perfil"
              },
              "pending": {
                "title": "No hay integrantes pendientes de revisión"
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