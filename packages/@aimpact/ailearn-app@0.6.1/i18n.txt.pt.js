System.register(["@beyond-js/kernel@0.1.14/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/i18n",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('pt');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 137522944,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "management": "Gestão",
              "add": "Adicionar",
              "send": "Enviar",
              "inspiration": "Gerar com IA",
              "manual": "Design manual",
              "order": "Editar ordem",
              "analyse": "Sugerir melhorias",
              "activities": "Gerar atividades",
              "activity": "Atividades",
              "applySuggestions": "Aplicar sugestões",
              "back": "Voltar",
              "cancel": "Cancelar",
              "continue": "Continuar",
              "cover": "Gerar capa",
              "clean": "Limpar",
              "create": "Criar",
              "confirm": "Confirmar",
              "delete": "Eliminar",
              "edit": "Editar",
              "generate": "Gerar",
              "next": "Seguinte",
              "publish": "Publicar",
              "removeSuggestions": "Cancelar sugestões",
              "refine": "Refinar",
              "save": "Guardar",
              "update": "Subir documento",
              "upload": "Subir imagem",
              "recordAgain": "Gravar novamente",
              "join": "Unirse",
              "register": "Registrar",
              "imported": "Importado",
              "link": "Ligação",
              "gTooltip": "Sala de aula importada do Google",
              "import": "importação"
            },
            "activities": {
              "types": {
                "content-theory": "Conteúdo/Teoria",
                "multiple-choice": "Múltipla Escolha",
                "character-talk": "Conversa com Personagem",
                "debate": "Debate",
                "assessment": "Múltipla Escolha",
                "spoken": "Exposição Oral",
                "hand-written": "Escrito à Mão",
                "written": "Escrito",
                "free-conversation": "Conversa Livre",
                "exercise": "Exercício"
              },
              "empty": {
                "synthesis": "A atividade não possui síntese",
                "content": "A atividade não possui conteúdo"
              }
            },
            "classrooms": {
              "code": "Código da sala de aula"
            },
            "entities": {
              "assignments": "Atribuições",
              "modules": "Módulos de Aprendizagem",
              "community": "Comunidade",
              "activities": "Atividades",
              "drafts": "Rascunhos",
              "classrooms": "Salas de Aula",
              "newDraft": "Módulo",
              "archive": "Arquivo",
              "organizations": "Instituições",
              "profile": "Meu Perfil",
              "kb": "Bases de Conhecimento",
              "kbSections": "Seções",
              "kbArticles": "Artigos"
            },
            "errors": {
              "46": "Você não tem créditos suficientes para realizar esta ação com IA",
              "NO_CREDITS": "Você não tem créditos suficientes para realizar esta ação",
              "DEFAULT_ERROR": "Ocorreu um erro, por favor tente novamente mais tarde"
            },
            "languages": {
              "es": {
                "code": "es",
                "name": "Espanhol"
              },
              "en": {
                "code": "en",
                "name": "Inglês"
              },
              "pt": {
                "code": "pt",
                "name": "Português"
              },
              "de": {
                "code": "de",
                "name": "Alemão"
              },
              "fr": {
                "code": "fr",
                "name": "Francês"
              }
            },
            "languagesSelect": {
              "label": "Idioma",
              "placeholder": "Selecionar Idioma"
            },
            "modal": {
              "delete": {
                "title": "Deseja excluir este item?",
                "description": "Uma vez excluído, você não poderá recuperá-lo."
              }
            },
            "requestCredits": {
              "title": "Habilitar IA",
              "subtitle": {
                "user": "Deseja usar um crédito para habilitar as funções de IA na geração do módulo?",
                "org": "Você é um instrutor autorizado por {institution} a usar créditos de IA para gerar módulos. Confirme o uso de um crédito para habilitar a IA neste módulo de aprendizagem.",
                "interactive": "Deseja usar um crédito para habilitar as funções de IA?"
              },
              "ownerDescription": "Proprietário do módulo",
              "action": "Deseja solicitar créditos ao proprietário do módulo?",
              "detail": {
                "user": "No AILearn, funções que requerem IA usam um sistema baseado em créditos. Cada crédito consumido permite interações com a IA.",
                "org": "No AILearn, funções que requerem IA usam um sistema baseado em créditos. Cada crédito consumido permite interações com a IA e é concedido pela instituição onde o módulo está sendo criado.",
                "interactive": "No AILearn, funções que requerem IA usam um sistema baseado em créditos. Cada crédito consumido permite interações com a IA."
              },
              "alerts": {
                "noCredits": "A atribuição não pôde ser processada, por favor, contate o administrador da instituição"
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