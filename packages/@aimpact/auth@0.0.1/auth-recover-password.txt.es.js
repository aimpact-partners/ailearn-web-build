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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.2.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.6-dev.33"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-recover-password",
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
        hash: 2753368650,
        creator: function (require, exports) {
          exports.txt = {
            "theme": "Modo %them",
            "title": "Ingresar Nueva Contraseña",
            "subTitle": "Tu nueva contraseña debe ser diferente de la contraseña utilizada anteriormente",
            "labelPassword": "Nueva Contraseña",
            "labelConfirmPassword": "Confirmar Contraseña",
            "recoveryButton": "Enviar",
            "passwordConditions": {
              "title": "La contraseña debe contener",
              "minimumCharacters": "De 8 a 32 caracteres",
              "minimumLetters": "Al menos una letra mayúscula y una minúscula",
              "minimumSpecial": "Al menos un número y un carácter especial"
            },
            "empty": {
              "title": "¡Ups!",
              "description": "No se encontró el token solicitado. Por favor, genera un nuevo token y revisa tu correo electrónico.",
              "back": "Volver"
            },
            "errorMessages": {
              "match": "Las contraseñas no coinciden.",
              "minimumCharacters": "La contraseña debe tener entre 8 y 32 caracteres.",
              "minimumLetters": "Debe incluir al menos 1 letra mayúscula y 1 minúscula.",
              "minimumNumbers": "Debe contener al menos 1 número y 1 carácter especial.",
              "minimumSpecial": "Debe incluir al menos 1 carácter especial.",
              "minimumUpper": "Debe contener al menos 1 letra mayúscula.",
              "minimumLower": "Debe contener al menos 1 letra minúscula.",
              "lostConnection": "Perdimos conexión a Internet. Verifica router o conexión.",
              "internalFail": "Se ha producido un error interno. Estamos trabajando para solucionarlo. Vuelva a intentarlo más tarde o comuníquese con soporte técnico."
            },
            "wellDone": {
              "title": "¡Contraseña Cambiada Exitosamente!",
              "subtitle": "¡Bienvenido de nuevo! ",
              "message": "¡Hurra! Tu contraseña ha sido cambiada con éxito. ¡Muchísimas gracias por elegir nuestra aplicación! Estamos emocionados de tenerte de vuelta. Recuerda que siempre estamos aquí para hacer tu experiencia increíble. 🚀"
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