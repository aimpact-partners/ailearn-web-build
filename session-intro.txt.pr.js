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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.10"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.10/session-intro",
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
        hash: 486712476,
        creator: function (require, exports) {
          exports.txt = {
            "assessments": {
              "quiz": "Avaliação",
              "oral": "Oral",
              "oralText": "%1, grave um áudio onde você resume e comenta o conteúdo estudado. Destaque os conceitos-chave, use linguagem apropriada e ofereça sua opinião pessoal. Mantenha uma ordem lógica e fidelidade aos fatos do texto original.",
              "record": "Gravar",
              "recordAgain": "Gravar novamente",
              "stop": "Parar",
              "send": "Enviar áudio",
              "redo": "Faça de novo!",
              "analysisTitle": "Resultado da análise",
              "analysis": "Relatório",
              "feedback": "Conhecimento",
              "competencies": "Competências",
              "processMessages": ["Estamos processando o áudio", "Transcrevendo o texto", "Avaliando a compreensão da leitura e do conteúdo", "Analisando coerência e coesão", "Avaliando síntese e parafraseando", "Avaliando o uso do vocabulário", "Analisando o pensamento crítico"]
            },
            "elements": {
              "synthesis": "Síntese",
              "content": "Conteúdo",
              "intro": "Introdução",
              "assessment": "Avaliação"
            },
            "header": {
              "titles": {
                "spoken": "Avaliação oral",
                "introduction": "Introdução",
                "selection": "Avaliação de seleção",
                "content": "Objetivos"
              },
              "actions": {
                "spoken": "Aval. oral",
                "content": "Introdução",
                "selection": "Aval. de seleção"
              }
            },
            "permissions": {
              "title": "Permissões",
              "description": "Você precisa fornecer acesso ao microfone para poder enviar um áudio",
              "button": "Aceitar"
            },
            "intro": {
              "hello": "Olá",
              "message": "o tema que vamos ver aborda o seguinte"
            },
            "synthesis": "Pontos principais que trabalharemos durante a aula são:"
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