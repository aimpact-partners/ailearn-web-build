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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["socket.io-client", "4.7.3"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-recovery",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('pr');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 3427049238,
        creator: function (require, exports) {
          exports.txt = {
            "recoveryTitle": "Recuperação de senha",
            "recoverySubtitle": "Sabemos que pode ser frustrante esquecer sua senha, mas não se preocupe, nós o ajudaremos a recuperá-la!",
            "recoveryIntro": "Para começar, precisamos verificar sua identidade. Forneça-nos seu endereço de e-mail. Nós lhe enviaremos um e-mail com um link para redefinir sua senha. Esse link terá duração de 24 horas.",
            "recoveryInstructions": "Digite o endereço de e-mail",
            "recoveryFinish": "Se tiver alguma dúvida, não hesite em entrar em contato conosco.",
            "recoveryBye": "Obrigado por sua paciência!",
            "checkYourEmail": "Para concluir o processo, verifique seu endereço de e-mail. Nós lhe enviamos um e-mail com um link para redefinir sua senha. O link terá duração de 24 horas. Se não conseguir encontrar o e-mail, verifique sua pasta de spam ou lixo eletrônico. Se ainda não tiver recebido o e-mail, não hesite em entrar em contato conosco. Obrigado por sua paciência.",
            "email": "Email",
            "writeEmail": "Digite o endereço de e-mail com o qual você está registrado no aplicativo.",
            "recoveryButton": "Enviar e-mail",
            "theme": "Modo %them"
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