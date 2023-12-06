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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.21"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.21/classworks/management",
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
        hash: 2007587876,
        creator: function (require, exports) {
          exports.txt = {
            "empty": {
              "title": "Não há informações disponíveis.",
              "subtitle": "Você pode criá-las com IA.",
              "load": "Carregar conteúdo",
              "generating": "Estamos gerando o conteúdo, por favor aguarde, esse processo pode levar um tempo."
            },
            "gclassrooms": {
              "title": "Selecione a sala de aula do Google onde deseja compartilhar sua aula",
              "confirm": "Confirmar",
              "assign": "Atribuir",
              "copy": "Copiar link",
              "copied": "Link copiado para a área de transferência"
            },
            "lesson": {
              "step": "Introdução",
              "elements": {
                "content": "Conteúdo",
                "introduction": "Introdução",
                "synthesis": "Síntese",
                "assessment": "Avaliações"
              }
            },
            "title": "",
            "totalLegend": "Elementos gerados",
            "lessonUpdated": "Elementos da lição atualizados",
            "topicUpdated": "Tema %1 atualizado",
            "assessmentReview": "Prepare-se para inspirar! Revise esta avaliação cuidadosamente elaborada para garantir que esteja alinhada com seus objetivos educacionais. Sua ferramenta para moldar as mentes de amanhã está à sua espera.",
            "assign": "Atribuir",
            "processAlert": "Estamos gerando seu trabalho de classe, por favor aguarde, esse processo pode levar alguns minutos.",
            "elements": {
              "content": "Conteúdo",
              "synthesis": "Síntese",
              "assessment": "Avaliação"
            },
            "titles": {
              "lessons": "Classe",
              "topic": "Tópico",
              "topics": "Tópicos"
            },
            "topics": {
              "title": "Lista de temas",
              "description": "Adicione a lista de pontos a serem revisados como objetivos em seu trabalho de classe.",
              "elements": {
                "content": "Conteúdo",
                "introduction": "Introdução",
                "synthesis": "Síntese",
                "previous": "Avaliações Anteriores",
                "assessment": "Avaliações"
              }
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