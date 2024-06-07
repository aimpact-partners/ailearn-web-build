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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.46.dev-13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-register",
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
        hash: 3550563941,
        creator: function (require, exports) {
          exports.txt = {
            "createAccount": "Regístrate con Email",
            "fullName": "Nombre completo",
            "password": "Contraseña",
            "confirmPassword": "Confirmar contraseña",
            "email": "Correo electrónico",
            "termsCondition": "Al crear una cuenta, aceptas nuestros Términos de servicio y Política de privacidad",
            "signIn": "Iniciar sesión",
            "submit": "Registrarse",
            "socialLogin": "O inicia sesión con una cuenta de redes sociales",
            "googleSignIn": "Iniciar sesión con Google",
            "facebookSignIn": "Iniciar sesión con Facebook",
            "helpSignIn": "¿Necesitas ayuda para iniciar sesión?",
            "alreadyAccount": "¿Ya tienes una cuenta?",
            "theme": "Modo %them",
            "errorMessages": {
              "match": "Las contraseñas no coinciden. Por favor, inténtalo de nuevo.",
              "minimumCharacters": "La contraseña debe tener entre 8 y 32 caracteres.",
              "minimumLetters": "Debe incluir al menos 1 letra mayúscula y 1 minúscula.",
              "minimumNumbers": "Debe contener al menos 1 número y 1 carácter especial.",
              "minimumSpecial": "Debe incluir al menos 1 carácter especial.",
              "minimumUpper": "Debe contener al menos 1 letra mayúscula.",
              "minimumLower": "Debe contener al menos 1 letra minúscula.",
              "email": "Lo sentimos, la dirección de correo no es válida. Por favor, inténtalo de nuevo.",
              "emailExist": "Lo sentimos, esta cuenta ya existe. Por favor, intenta con otro correo electrónico.",
              "lostConnection": "Perdimos conexión a Internet. Verifica router o conexión.",
              "internalFail": "Se ha producido un error interno. Estamos trabajando para solucionarlo. Vuelva a intentarlo más tarde o comuníquese con soporte técnico."
            },
            "passwordConditions": {
              "title": "La contraseña debe contener",
              "minimumCharacters": "De 8 a 32 caracteres",
              "minimumLetters": "Al menos una letra mayúscula y una minúscula",
              "minimumSpecial": "Al menos un número y un carácter especial"
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