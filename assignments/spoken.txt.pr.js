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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/assignments/spoken",
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
        hash: 3814029164,
        creator: function (require, exports) {
          exports.txt = {
            "assessments": {
              "quiz": "Avaliação",
              "oral": "Oral",
              "title": "Atividade",
              "oralText": "Grave um áudio onde você resume e comenta o conteúdo estudado. Destaque os conceitos-chave, use linguagem apropriada e ofereça sua opinião pessoal. Mantenha uma ordem lógica e fidelidade aos fatos do texto original.",
              "record": "Gravar",
              "recordAgain": "Gravar novamente",
              "stop": "Parar",
              "send": "Enviar áudio",
              "redo": "Faça de novo!",
              "analysisTitle": "Resultado da análise",
              "analysis": "Relatório",
              "feedback": "Conhecimento",
              "competencies": "Competências",
              "processMessages": ["Processando o áudio", "Transcrevendo o texto", "Avaliando a compreensão de leitura e conteúdo", "Analisando a coerência e coesão", "Avaliando síntese e paráfrase", "Avaliando o uso do vocabulário", "Analisando o pensamento crítico", "Revisando a base de conteúdo para validações cruzadas", "Estimando a relevância do contexto", "Verificando padrões de entonação", "Comparando com modelos de referência linguística", "Identificando elementos-chave do discurso", "Cruzando referências com o banco de dados de conteúdo", "Examinando a estrutura narrativa", "Correlacionando com estudos de caso relevantes", "Comprovando a precisão de termos técnicos", "Avaliando a originalidade do conteúdo", "Verificando a autenticidade das emoções expressas"]
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