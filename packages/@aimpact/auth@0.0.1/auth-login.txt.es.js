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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.55"]]);
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
        hash: 1989654982,
        creator: function (require, exports) {
          exports.txt = {
            "presentation": {
              "title": "Transformar la educación con el poder de la IA",
              "description": "Una solución innovadora que integra la IA de forma segura y efectiva en el entorno educativo para una enseñanza y aprendizaje más eficiente."
            },
            "title": "Transformar la educación con el poder de la IA",
            "description": "Nuestra plataforma ofrece tanto un asistente de IA para profesores como un tutor de IA para alumnos. Nuestro objetivo es ofrecer un apoyo integral tanto a los educadores como a los alumnos.",
            "loginTitle": "Iniciar sesión",
            "emailLabel": "Correo electrónico",
            "passwordLabel": "Contraseña",
            "termsAndPrivacy": "Al crear una cuenta, aceptas nuestros Términos de servicio y Política de privacidad",
            "signInButton": "Iniciar sesión",
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