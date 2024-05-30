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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.3.2"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/documents",
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
        hash: 2805402447,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "search": "Pesquisar documentos",
              "upload": "Carregar documentos",
              "close": "Fechar",
              "copy": "Copiar link"
            },
            "empty": {
              "start": "Vamos começar agora!",
              "noResult": "Nenhuma pasta encontrada.",
              "sub": "Ainda não há caixas de conhecimento em seu espaço.",
              "desc": "Você pode começar criando sua primeira caixa de conhecimento agora.",
              "upload": "Carregar Conteúdo"
            },
            "folder": {
              "empty": "Esta pasta está vazia",
              "actions": {
                "add": "Adicionar chat",
                "upload": "Carregar arquivo",
                "delete": "Excluir pasta",
                "share": "Compartilhar pasta"
              },
              "views": {
                "list": "Visualização de lista",
                "grid": "Visualização de grade"
              },
              "table": {
                "header": {
                  "name": "Nome",
                  "date": "Data",
                  "format": "Formato",
                  "size": "Tamanho",
                  "actions": "Ações"
                }
              }
            },
            "upload": {
              "title": "Carregar Conteúdo",
              "action": "Carregar arquivo",
              "drag": "Arraste e solte ou faça o upload de um documento para criar a pasta",
              "help": "Você pode carregar documentos nos formatos PDF, TXT e DOC. Lembre-se de que o tamanho máximo permitido do arquivo é de 10 MB.",
              "save": "Salvar",
              "input": "Indique o nome da Caixa de Conhecimento",
              "cancel": "Cancelar",
              "success": "Arquivos carregados com sucesso!",
              "error": "Ocorreu um erro ao carregar seus arquivos :'("
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