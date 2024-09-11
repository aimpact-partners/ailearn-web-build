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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.1.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-login",
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
        hash: 3531818648,
        creator: function (require, exports) {
          exports.txt = {
            "footer": {
              "intro": "Al crear una cuenta estás aceptando los ",
              "terms": "términos y condiciones",
              "connector": "del servicio y la",
              "privacy": "política de privacidad"
            },
            "tutorials": {
              "webinar": {
                "title": "Webinar online",
                "description": "Todos los jueves 17.30 HS"
              },
              "teachers": "Tutorial para docentes",
              "students": "Tutorial para alumnos"
            },
            "presentation": {
              "title": "Potenciamos la enseñanza y el proceso de aprendizaje con Inteligencia Artificial",
              "contents": "<strong>Crea contenidos curriculares</strong> dinámicos y monitorea el proceso de aprendizaje de los alumnos.",
              "experience": "<strong>Personaliza la experiencia educativa</strong>, adaptándose al ritmo y estilo de aprendizaje de los alumnos.",
              "tutorials": {
                "webinar": {
                  "title": "Webinar online",
                  "description": "Visitá nuestro canal de YouTube"
                },
                "teachers": "Tutorial para docentes",
                "students": "Tutorial para alumnos"
              },
              "socialMedia": "Seguinos en nuestras redes"
            },
            "title": "Transformar la educación con el poder de la IA",
            "description": "Nuestra plataforma ofrece tanto un asistente de IA para profesores como un tutor de IA para alumnos. Nuestro objetivo es ofrecer un apoyo integral tanto a los educadores como a los alumnos.",
            "loginTitle": "Inicie sesión",
            "subtitle": "Comience su periodo de prueba",
            "emailLabel": "Correo electrónico",
            "passwordLabel": "Contraseña",
            "termsAndPrivacy": "Al crear una cuenta, aceptas nuestros ",
            "tterms": "Términos de servicio",
            "connector": "y",
            "policy": "Política de privacidad",
            "signInButton": "Inicie sesión",
            "socialLoginTitle": "O inicia sesión con una cuenta de redes sociales",
            "googleSignInButton": "Iniciar sesión con Google",
            "emailSignInButton": "Continuar con tu correo",
            "closeButton": "Cerrar",
            "facebookSignInButton": "Iniciar sesión con Facebook",
            "forgotPasswordLink": "¿Olvidaste tu contraseña?",
            "createAccountLink": "Crear una cuenta nueva",
            "theme": "Modo %them",
            "passwordConditions": {
              "title": "La contraseña debe contener",
              "minimumCharacters": "Al menos 8 caracteres",
              "minimumLetters": "Al menos una letra",
              "minimumSpecial": "Al menos un número o carácter especial"
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