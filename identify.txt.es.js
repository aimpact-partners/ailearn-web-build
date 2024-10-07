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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/identify",
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
        hash: 265371847,
        creator: function (require, exports) {
          exports.txt = {
            "errors": {
              "ERROR_PUBLISHING": "No se ha podido hacer la solicitud, vuelva a intentarlo más tarde",
              "INVALID_CODE": {
                "title": "Código incorrecto",
                "description": "Por favor, verifica el código y vuelve a intentarlo.Si el problema persiste, contacta al administrador de tu institución para obtener el código correcto."
              },
              "ALREADY_WAITING": "Ya realizaste la solicitud para unirte a la institución, espera a que el administrador te acepte o ponte en contacto con él",
              "ALREADY_MEMBER": "Ya eres miembro de la institución"
            },
            "institution": {
              "form": {
                "title": "Comienza una prueba gratuita para instituciones y explorar la transformación educativa",
                "description": "Accede a una prueba gratuita completando el formulario. Te asignaremos los créditos necesarios para que puedas experimentar y compartir con tus docentes  la asistencia de la Inteligencia Artificial en tu espacio educativo. Chequea tu correo electrónico para más detalle.",
                "fields": {
                  "name": {
                    "label": "Nombre de la Institución",
                    "errorMessage": "Campo requerido"
                  },
                  "type": {
                    "label": "Tipo de Institución",
                    "errorMessage": "Campo requerido"
                  },
                  "educationalLevel": {
                    "label": "Nivel educativo",
                    "errorMessage": "Campo requerido"
                  },
                  "geographicAddress": {
                    "label": "Dirección geográfica"
                  },
                  "authorizedUser": {
                    "label": "Soy un usuario autorizado por la institución educativa"
                  },
                  "submit": {
                    "label": "ENVIAR SOLICITUD"
                  }
                }
              },
              "title": "Pide una prueba gratuita para instituciones y comienza a explorar la transformación educativa",
              "description": "Solicita el acceso a una prueba gratuita completando el formulario. Una vez enviado, revisaremos tu solicitud. Recuerda chequear tu correo electrónico, donde te informaremos sobre la aprobación de tu solicitud y te asignaremos los créditos necesarios para que tu comunidad educativa pueda experimentar la asistencia de la Inteligencia Artificial en el aula."
            },
            "requested": {
              "teacher": {
                "title": "¡Felicitaciones! Ya puedes iniciar tu período de prueba",
                "description": "Te hemos asignado <strong>{totalGenerative} créditos generativos</strong> para crear {totalGenerative} módulos con IA y <strong>{totalInteraction} créditos interactivos</strong> para la interacción con IA de tus alumnos."
              },
              "teacherInstitution": {
                "title": "Tu solicitud para unirte a la institución está en proceso de revisión.",
                "description": "Por favor, espera la aprobación del administrador para acceder al espacio educativo de la institución. <strong>Revisa tu correo electrónico</strong> donde te notificaremos una vez que tu solicitud haya sido aprobada para poder acceder a <strong>RVD.AI Rivadavia</strong>."
              },
              "teacherApproved": {
                "title": "¡Felicitaciones! Tu solicitud ha sido aprobada",
                "description": "Ya eres parte de la institución {organization}, Comienza a utilizar RVD.AI."
              },
              "institution": {
                "title": "¡Felicitaciones! Tu institución ya puede iniciar su período de prueba",
                "description": "Te hemos asignado a tu período de prueba {totalGenerative} créditos para crear {totalGenerative} módulos con IA y {totalInteraction} créditos para la interacción con IA de los alumnos.",
                "start": "Comenzar"
              }
            },
            "cards": {
              "student": {
                "icon": "student",
                "title": "Soy Alumno",
                "description": "Accede a los contenidos asignados por tus docentes y aprende a tu propio ritmo con la orientación de la IA."
              },
              "teacher": {
                "icon": "teacher",
                "title": "Soy Docente",
                "description": "Crea contenidos educativos y monitorea a tus alumnos con la asistencia de la IA."
              },
              "institution": {
                "icon": "institution",
                "title": "Soy una Institución",
                "description": "Suma Inteligencia Artificial a tu propuesta educativa y permite a tu comunidad generar contenidos asistidos por IA."
              }
            },
            "student": {
              "selection": {
                "title": "Estás a punto de comenzar el camino hacia la transformación educativa",
                "description": "Para iniciar tu experiencia de aprendizaje con RVD.AI Rivadavia, necesitarás un enlace de acceso proporcionado por tu docente. Una vez que recibas el enlace o link de acceso, podrás ingresar al módulo de aprendizaje y comenzar a explorar los contenidos diseñados especialmente para ti."
              }
            },
            "teacher": {
              "form": {
                "title": "Comienza tu  prueba gratuita para docentes y explorar la transformación educativa",
                "description": "Accede a una prueba gratuita completando el formulario. Te asignaremos los créditos necesarios para que puedas experimentar la asistencia de la Inteligencia Artificial en tu labor docente. Chequea tu correo electrónico para más detalle.",
                "fields": {
                  "role": {
                    "label": "Cargo",
                    "errorMessage": "Campo requerido"
                  },
                  "grade": {
                    "label": "Nivel educativo",
                    "errorMessage": "Campo requerido"
                  },
                  "curricularArea": {
                    "label": "Área curricular",
                    "errorMessage": "Campo requerido"
                  },
                  "name": {
                    "label": "Nombre de la institución",
                    "errorMessage": "Campo requerido"
                  },
                  "type": {
                    "label": "Tipo de Institución",
                    "errorMessage": "Campo requerido"
                  },
                  "address": {
                    "label": "Dirección geográfica",
                    "errorMessage": "Campo requerido"
                  },
                  "submit": {
                    "label": "ENVIAR SOLICITUD",
                    "errorMessage": ""
                  }
                }
              },
              "institution": {
                "intro": {
                  "hello": "Hola {username}",
                  "title": "¿La institución donde trabajas utiliza RVD.AI?",
                  "description": "Mi institución ya trabaja con <strong>RVD.AI</strong> Rivadavia y quiero sumarme a su espacio educativo.",
                  "options": {
                    "yes": {
                      "label": "Sí",
                      "description": "Mi institución ya trabaja con <strong>RVD.AI Rivadavia</strong> y quiero sumarme a su espacio educativo."
                    },
                    "no": {
                      "label": "No",
                      "description": "Mi institución no trabaja con <strong>RVD.AI Rivadavia</strong>. Quiero sumarme a la herramienta como docente independiente."
                    }
                  }
                },
                "form": {
                  "title": "Comienza a transitar la transformación educativa",
                  "description": "Estás a punto de unirte al espacio educativo de tu institución. Para ingresar a RVD.AI Rivadavia debes validar el código de acceso provisto por el administrador de tu institución.",
                  "form": {
                    "legend": {
                      "title": "¿No tienes tu código?",
                      "description": " Chequea tu correo electrónico o contacta al administrador de tu institución si aún no has recibido la invitación."
                    },
                    "action": "Ingresar código",
                    "error": {
                      "title": "Código incorrecto.",
                      "description": "Por favor, verifica el código y vuelve a intentarlo. Si el problema persiste, contacta al administrador de tu institución para obtener el código correcto."
                    }
                  }
                }
              },
              "actions": {
                "continue": "Continuar"
              },
              "welcome": {
                "user": {
                  "hello": "¡Hola {username}!",
                  "description": "Bienvenido a RVD.AI Rivadavia"
                }
              },
              "processed": {
                "title": "¡Ya cuentas con créditos IA asignados a tu perfil!",
                "subtitle": "Hemos asignado a tu período de prueba:",
                "description": "{totalGenerative} créditos para crear 5 módulos con IA y  {totalInteraction} créditos para la interacción con IA de tus alumnos."
              }
            },
            "title": "¡Bienvenido/a!",
            "subtitle": "Selecciona tu rol dentro del ámbito educativo",
            "back": "Volver",
            "welcome": {
              "hello": "¡Hola {username}!",
              "description": "Bienvenido/a a RVD.AI Rivadavia"
            },
            "actions": {
              "accept": "ACEPTAR",
              "back": "VOLVER",
              "continue": "Continuar",
              "join": "Enviar solicitud",
              "start": "Comenzar"
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