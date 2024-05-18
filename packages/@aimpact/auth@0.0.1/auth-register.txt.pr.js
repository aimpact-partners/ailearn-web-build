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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.32-dev.46"]]);
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
      }, _context.meta.url).package('pr');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 238728995,
        creator: function (require, exports) {
          exports.txt = {
            "createAccount": "Registre-se com o e-mail",
            "fullName": "Nome completo",
            "password": "Senha",
            "confirmPassword": "Confirmar senha",
            "email": "Email",
            "termsCondition": "Ao criar uma conta, você concorda com nossos Termos de Serviço e Política de Privacidade",
            "signIn": "Entrar",
            "submit": "Registarse",
            "socialLogin": "Ou entre com uma conta de rede social",
            "googleSignIn": "Entrar com o Google",
            "facebookSignIn": "Entrar com o Facebook",
            "helpSignIn": "Precisa de ajuda para entrar?",
            "alreadyAccount": "Já tem uma conta?",
            "theme": "Modo %them",
            "errorMessages": {
              "match": "Senhas não coincidem. Por favor, tente novamente.",
              "minimumCharacters": "Senha deve ter entre 8 e 32 caracteres.",
              "minimumLetters": "Deve incluir pelo menos 1 letra maiúscula e 1 minúscula.",
              "minimumNumbers": "Deve incluir pelo menos 1 número e 1 caractere especial.",
              "minimumSpecial": "Deve incluir pelo menos 1 caractere especial.",
              "minimumUpper": "Deve incluir pelo menos 1 letra maiúscula.",
              "minimumLower": "Deve incluir pelo menos 1 letra minúscula.",
              "email": "Desculpe, o e-mail não é válido. Por favor, tente novamente.",
              "emailExist": "Desculpe, esta conta já existe. Tente novamente com um e-mail diferente.",
              "lostConnection": "Perdemos a conexão com a Internet. Verifique roteador ou conexão.",
              "internalFail": "Ocorreu um erro interno. Estamos trabalhando para resolvê-lo. Tente novamente mais tarde ou entre em contato com o suporte."
            },
            "passwordConditions": {
              "title": "A senha deve conter",
              "minimumCharacters": "De 8 a 32 caracteres",
              "minimumLetters": "Pelo menos uma letra maiúscula e uma letra minúscula",
              "minimumSpecial": "Pelo menos um número e um carácter especial"
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