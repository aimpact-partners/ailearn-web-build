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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.02"], ["@aimpact/ailearn-app", "0.1.3-test.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.02/home",
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
        hash: 1220143401,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "join": "Unirse",
              "assign": "Asignar",
              "create": "Crear",
              "register": "Registrar",
              "activities": "Generar actividades",
              "refine": "Refinar",
              "generate": "Generar",
              "imported": "Importado",
              "save": "Guardar",
              "continue": "Continuar",
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
            "assign": {
              "title": "Listado de aulas",
              "noAssigned": "No hay aulas asignadas",
              "module": "Módulo",
              "messages": {
                "copied": "Enlace copiado al portapapeles",
                "assigned": "Aula asignada"
              },
              "item": {
                "description": "El item no tiene descripción"
              },
              "actions": {
                "dashboard": "Dashboard",
                "copy": "Copiar link",
                "test": "Probar",
                "navigate": "Navegar",
                "assign": {
                  "button": "Asignar",
                  "label": "El módulo no ha sido asignado a esta Aula"
                }
              },
              "errors": {
                "default": "No se ha podido asignar el módulo a esta Aula, por favor inténtelo de nuevo más tarde o contacte al administador"
              },
              "empty": {
                "title": "Atención",
                "description": "Aún no posees aulas creadas, debes crear una para poder asignar esta actividad.",
                "action": "Crear aula"
              }
            },
            "tour": {
              "buttons": {
                "nextBtnText": "Siguiente",
                "prevBtnText": "Anterior",
                "doneBtnText": "Listo"
              },
              "step0": {
                "title": "Bienvenido a tu perfil",
                "description": "Aquí puedes personalizar tu experiencia en RVD.AI Rivadavia. Podrás  actualizar tu información personal, indicar  tu idioma de preferencia, configurar opciones de accesibilidad y ajustar la velocidad del audio."
              },
              "drafts": {
                "title": "Módulos en borrador",
                "description": "Trabaja en tus módulos de aprendizaje en estado de borrador hasta que estén listos para ser publicados y asignados a un aula. Aquí quedarán guardados para que puedas editarlos según tus necesidades. ¡Comienza creando tu primer módulo!"
              },
              "library": {
                "title": "Comunidad",
                "description": "Explora nuestra colección de módulos de aprendizaje creados por expertos. Encuentra una variedad de contenidos listos para usar en tus aulas. Puedes editar y personalizar estos módulos según tus criterios para adaptarlos a las necesidades de tus alumnos."
              },
              "classrooms": {
                "title": "Aulas",
                "description": "En este espacio puedes crear aulas donde podrás agrupar a tus alumnos y asignarles los módulos de aprendizaje que publiques. Organiza tu clases de manera efectiva y personalizada. ¡Empieza a crear tus aulas y transforma la experiencia educativa!"
              },
              "step3": {
                "title": "¿Necesitas ayuda?",
                "description": "Encuentra toda la información en nuestros tutoriales diseñados para ayudarte a sacar el máximo provecho de RVD.AI. Aprende a crear módulos de aprendizaje, gestionar tus aulas y utilizar todas las herramientas que ofrecemos. ¡Explora nuestros tutoriales y navega la plataforma!"
              },
              "modules": {
                "title": "Mis módulos",
                "description": "En esta sección se verán los módulos que el usuario ha creado."
              },
              "assignments": {
                "title": "Mis asignaciones",
                "description": "Representan las asignaciones hechas en aulas de clases."
              }
            },
            "errors": {
              "default": "No se ha podido realizar la operación. Por favor, inténtelo de nuevo."
            },
            "title": "¡Bienvenido!",
            "profile": {
              "edit": "Ir a mi perfil"
            },
            "assignments": {
              "title": "Mis Asignaciones",
              "activities": "Mis Actividades",
              "item": {
                "description": "Esta asignación no posee descripción u objetivo"
              },
              "actions": {
                "link": "Entrar"
              }
            },
            "modules": {
              "title": "Mis Módulos",
              "empty": "No posees módulos de aprendizaje aún",
              "action": "Publicar un módulo",
              "activities": "Mis Actividades",
              "items": {
                "description": "Este módulo no posee descripción u objetivo",
                "title": "Este módulo no posee título"
              }
            },
            "drafts": {
              "title": "Mis Borradores",
              "empty": {
                "description": "Genera actividades dinámicas e interactivas que podrás asignar a un aula.",
                "title": "Crea tu primer módulo de aprendizaje",
                "action": "CREA TU PRIMER MÓDULO"
              },
              "action": "Crear",
              "items": {
                "description": "Este módulo no posee descripción u objetivo",
                "title": "Este borrador no posee título"
              }
            },
            "library": {
              "title": "Comunidad",
              "actions": {
                "link": "Ver todo",
                "test": "Demo",
                "use": "Utilizar"
              }
            },
            "classrooms": {
              "title": "Mis Aulas",
              "action": "Crear",
              "empty": {
                "description": "Agrupa a tus alumnos en espacios de trabajo y asigna módulos de aprendizaje personalizados.",
                "action": "Crea tu primer aula"
              },
              "items": {
                "description": "Esta aula no posee descripción u objetivo"
              }
            },
            "students": {
              "title": "Mis Estudiantes"
            },
            "members": {
              "children": "Mis Hijos"
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