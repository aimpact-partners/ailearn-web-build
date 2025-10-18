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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/dashboard/assignments",
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
        hash: 1934297232,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "summary": "Resumo",
              "objectives": "Progresso",
              "noSummary": "Esta atividade não possui resumo ou objetivos",
              "progress": "Progresso",
              "type": "Tipo de atividade",
              "subtype": "Subtipo",
              "description": "Descrição",
              "empty": "O estudante ainda não concluiu esta atividade",
              "noAnalysis": "O estudante não fez nenhum progresso neste objetivo",
              "interactions": "Interações",
              "chat": {
                "tab": "Conversa",
                "action": "Ver mensagens"
              },
              "objectivesStatus": {
                "in-progress": "Em progresso",
                "completed": "Concluído",
                "pending": "Pendente",
                "outstanding": "Destaque"
              },
              "handWritten": {
                "picture": "Imagem"
              },
              "written": {
                "transcription": "Producción escrita"
              },
              "status": {
                "done": "Feito",
                "pending": "Pendente"
              },
              "spoken": {
                "audio": "Áudio do estudante",
                "feedback": "Avaliação e Feedback",
                "transcription": "Transcrição"
              },
              "multipleChoice": {
                "participation": {
                  "title": "Participação",
                  "detail": "Respostas corretas"
                },
                "correct": "Respostas corretas",
                "wrong": "Respostas incorretas"
              },
              "types": {
                "content-theory": "Conteúdo/Teoria",
                "debate": "Debate",
                "multiple-choice": "Múltipla Escolha",
                "character-talk": "Conversa com um Personagem",
                "spoken": "Apresentação Oral",
                "hand-written": "Escrito a mão",
                "written": "Escrito",
                "free-conversation": "Conversação livre"
              }
            },
            "assignment": {
              "empty": {
                "title": "O aluno não participou desta atribuição"
              },
              "messages": "mensagens"
            },
            "chat": {
              "title": "Conversa",
              "empty": {
                "title": "Não há mensagens nesta conversa",
                "description": "O aluno ainda não enviou mensagens através do chat."
              },
              "synthesis": "Síntese da conversa",
              "systemActions": {
                "kb-response": "Dados obtidos da base de conhecimento: ",
                "fetching-tool-data": "Vou consultar os documentos da aula",
                "kb-processed-response": "Análise sobre conteúdo finalizada",
                "transcription": "Obtendo transcrição",
                "functions": {
                  "kb": "Consultando a base de conhecimento sobre: "
                }
              }
            },
            "list": {
              "students": "Alunos",
              "participants": "participantes",
              "search": "buscar",
              "generalPanel": "Painel geral"
            },
            "finish": "Concluir",
            "results": "Resultados",
            "total": "Total de perguntas",
            "correct": "Respostas corretas",
            "wrong": "Respostas incorretas",
            "title": "Status da Sala de Aula",
            "alerts": "Alertas",
            "type": "Tipo de atividade",
            "subtype": "Subtipo de atividade",
            "archived": "Esta atribuição está arquivada",
            "owner": "Administrador",
            "creator": "Criador",
            "noMessages": "Não há mensagens anteriores",
            "addCredits": {
              "action": "Solicitar créditos",
              "title": "Deseja solicitar créditos para o aluno?",
              "subtitle": "Os créditos permitem que o aluno interaja com a IA da atividade"
            },
            "actions": {
              "wall": "Mensagens do módulo",
              "archive": "Arquivar",
              "restore": "Restaurar"
            },
            "studentHeader": {
              "filter": "Filtrar por atividade"
            },
            "interaction": "Interação",
            "interactions": "Interações",
            "percentil": "Participação total",
            "preevaluation": "Pré-avaliação",
            "multiple": "Múltipla escolha",
            "enableAI": {
              "action": "Habilitar IA",
              "success": "A IA foi habilitada corretamente para o aluno",
              "noEnable": "O aluno ainda não habilitou a IA"
            },
            "of": "de",
            "spoken": "Avaliação oral",
            "empty": "Ainda não há participações nesta atribuição",
            "participation": {
              "total": "Participação total",
              "pending": "Alunos sem participação"
            },
            "messageCounter": "Mensagens ",
            "wall": {
              "header": "Mensagens do módulo",
              "emptyTitle": "Ops! A lista está vazia.",
              "empty": "Não há itens para exibir no momento. Mas não se preocupe, em breve haverá muito histórico para explorar!",
              "description": "Bem-vindo ao Histórico de Conversas! Este espaço é uma janela para as interações fascinantes entre nossos alunos em cada atividade, enriquecidas com um chat integrado. Explore a elegância do aprendizado nesta linha do tempo detalhada. 📚",
              "tabs": {
                "wall": "Mensagens",
                "alerts": "Alertas"
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
});System.register(["@beyond-js/kernel@0.1.14/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/dashboard/assignments",
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
        hash: 1934297232,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "summary": "Resumo",
              "objectives": "Progresso",
              "noSummary": "Esta atividade não possui resumo ou objetivos",
              "progress": "Progresso",
              "type": "Tipo de atividade",
              "subtype": "Subtipo",
              "description": "Descrição",
              "empty": "O estudante ainda não concluiu esta atividade",
              "noAnalysis": "O estudante não fez nenhum progresso neste objetivo",
              "interactions": "Interações",
              "chat": {
                "tab": "Conversa",
                "action": "Ver mensagens"
              },
              "objectivesStatus": {
                "in-progress": "Em progresso",
                "completed": "Concluído",
                "pending": "Pendente",
                "outstanding": "Destaque"
              },
              "handWritten": {
                "picture": "Imagem"
              },
              "written": {
                "transcription": "Producción escrita"
              },
              "status": {
                "done": "Feito",
                "pending": "Pendente"
              },
              "spoken": {
                "audio": "Áudio do estudante",
                "feedback": "Avaliação e Feedback",
                "transcription": "Transcrição"
              },
              "multipleChoice": {
                "participation": {
                  "title": "Participação",
                  "detail": "Respostas corretas"
                },
                "correct": "Respostas corretas",
                "wrong": "Respostas incorretas"
              },
              "types": {
                "content-theory": "Conteúdo/Teoria",
                "debate": "Debate",
                "multiple-choice": "Múltipla Escolha",
                "character-talk": "Conversa com um Personagem",
                "spoken": "Apresentação Oral",
                "hand-written": "Escrito a mão",
                "written": "Escrito",
                "free-conversation": "Conversação livre"
              }
            },
            "assignment": {
              "empty": {
                "title": "O aluno não participou desta atribuição"
              },
              "messages": "mensagens"
            },
            "chat": {
              "title": "Conversa",
              "empty": {
                "title": "Não há mensagens nesta conversa",
                "description": "O aluno ainda não enviou mensagens através do chat."
              },
              "synthesis": "Síntese da conversa",
              "systemActions": {
                "kb-response": "Dados obtidos da base de conhecimento: ",
                "fetching-tool-data": "Vou consultar os documentos da aula",
                "kb-processed-response": "Análise sobre conteúdo finalizada",
                "transcription": "Obtendo transcrição",
                "functions": {
                  "kb": "Consultando a base de conhecimento sobre: "
                }
              }
            },
            "list": {
              "students": "Alunos",
              "participants": "participantes",
              "search": "buscar",
              "generalPanel": "Painel geral"
            },
            "finish": "Concluir",
            "results": "Resultados",
            "total": "Total de perguntas",
            "correct": "Respostas corretas",
            "wrong": "Respostas incorretas",
            "title": "Status da Sala de Aula",
            "alerts": "Alertas",
            "type": "Tipo de atividade",
            "subtype": "Subtipo de atividade",
            "archived": "Esta atribuição está arquivada",
            "owner": "Administrador",
            "creator": "Criador",
            "noMessages": "Não há mensagens anteriores",
            "addCredits": {
              "action": "Solicitar créditos",
              "title": "Deseja solicitar créditos para o aluno?",
              "subtitle": "Os créditos permitem que o aluno interaja com a IA da atividade"
            },
            "actions": {
              "wall": "Mensagens do módulo",
              "archive": "Arquivar",
              "restore": "Restaurar"
            },
            "studentHeader": {
              "filter": "Filtrar por atividade"
            },
            "interaction": "Interação",
            "interactions": "Interações",
            "percentil": "Participação total",
            "preevaluation": "Pré-avaliação",
            "multiple": "Múltipla escolha",
            "enableAI": {
              "action": "Habilitar IA",
              "success": "A IA foi habilitada corretamente para o aluno",
              "noEnable": "O aluno ainda não habilitou a IA"
            },
            "of": "de",
            "spoken": "Avaliação oral",
            "empty": "Ainda não há participações nesta atribuição",
            "participation": {
              "total": "Participação total",
              "pending": "Alunos sem participação"
            },
            "messageCounter": "Mensagens ",
            "wall": {
              "header": "Mensagens do módulo",
              "emptyTitle": "Ops! A lista está vazia.",
              "empty": "Não há itens para exibir no momento. Mas não se preocupe, em breve haverá muito histórico para explorar!",
              "description": "Bem-vindo ao Histórico de Conversas! Este espaço é uma janela para as interações fascinantes entre nossos alunos em cada atividade, enriquecidas com um chat integrado. Explore a elegância do aprendizado nesta linha do tempo detalhada. 📚",
              "tabs": {
                "wall": "Mensagens",
                "alerts": "Alertas"
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