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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.31"]]);
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
      }, _context.meta.url).package('pr');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 3946293765,
        creator: function (require, exports) {
          exports.txt = {
            "title": "Transformando a educação com o poder da IA",
            "description": "Nossa plataforma oferece um assistente de IA para professores e um tutor de IA para alunos. Nosso objetivo é oferecer suporte abrangente para educadores e alunos.",
            "logo": "AI•LEARN",
            "loginTitle": "Entrar",
            "emailLabel": "Email",
            "passwordLabel": "Senha",
            "termsAndPrivacy": "Ao criar uma conta, você concorda com nossos Termos de Serviço e Política de Privacidade",
            "signInButton": "Entrar",
            "closeButton": "Fechar",
            "socialLoginTitle": "Ou entre com uma conta de rede social",
            "googleSignInButton": "Entrar com o Google",
            "emailSignInButton": "Continuar com o e-mail",
            "facebookSignInButton": "Entrar com o Facebook",
            "forgotPasswordLink": "Esqueceu sua senha?",
            "createAccountLink": "Criar uma nova conta",
            "theme": "Modo %them",
            "passwordConditions": {
              "title": "A senha deve conter",
              "minimumCharacters": "Pelo menos 8 caracteres",
              "minimumLetters": "Pelo menos uma letra",
              "minimumSpecial": "Pelo menos um número ou caractere especial"
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