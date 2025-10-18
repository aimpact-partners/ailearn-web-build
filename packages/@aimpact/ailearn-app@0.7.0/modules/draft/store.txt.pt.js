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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/draft/store",
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
        hash: 1841122054,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "item": {
                "empty": "Esta atividade ainda não tem conteúdo ou título definido"
              },
              "types": {
                "content-theory": "Conteúdo/Teoria",
                "multiple-choice": "Múltipla Escolha",
                "character-talk": "Conversa com Personagem",
                "debate": "Debate",
                "spoken": "Apresentação Oral"
              },
              "minutes": "Min",
              "description": "Descrição",
              "objective": "Objetivo",
              "activity": {
                "empty": "Esta atividade não tem conteúdo"
              },
              "type": "Tipo",
              "questions": "Perguntas",
              "topics": "Tópicos",
              "title": "Atividades",
              "empty": {
                "title": "Você ainda não tem atividades",
                "text": "Adicione uma atividade ao seu módulo"
              },
              "createModal": {
                "title": "Selecione o tipo de atividade",
                "validation": "Você deve completar o título e a descrição do módulo para poder adicionar uma atividade.",
                "validationTitle": "Módulo incompleto"
              },
              "delete": {
                "title": "Você realmente quer excluir esta atividade?",
                "subtitle": "Ao excluir esta atividade, você não poderá recuperá-la."
              },
              "descriptionTypes": {
                "content-theory": "Artigo, adaptações e áudios sobre um tópico específico para construir uma base teórica.",
                "multiple-choice": "Perguntas de múltipla escolha para avaliar compreensão",
                "character-talk": "Aprender através de uma conversa com um personagem fictício",
                "debate": "Conversa um-a-um com um assistente virtual para explorar e aprofundar tópicos",
                "spoken": "Apresentação oral sobre um tópico designado para avaliar conhecimentos ou outros usos como criatividade, apresentações originais, etc"
              },
              "states": {
                "empty": "Atividade vazia",
                "completed": "Concluída",
                "processing": "Em edição"
              }
            },
            "synthesis": "Síntese",
            "article": "Conteúdo",
            "description": "Descrição",
            "objectives": "Objetivos",
            "task": "Sua tarefa",
            "chat": {
              "empty": {
                "credits": {
                  "title": "Pronto para aprender?",
                  "description": "Comece fazendo a consulta que desejar"
                },
                "noCredits": {
                  "title": "Você precisa de créditos de IA para começar",
                  "description": "Solicite créditos para começar a aprender com o Agente de IA"
                }
              }
            },
            "tabs": {
              "chat": "Chat",
              "content": "Conteúdo"
            },
            "languages": {
              "select": {
                "label": "Idioma",
                "placeholder": "Selecionar Idioma"
              },
              "label": "Idiomas",
              "en": "Inglês",
              "es": "Espanhol",
              "pt": "Português",
              "fr": "Francês",
              "de": "Alemão",
              "it": "Italiano"
            },
            "alerts": {
              "coins": {
                "available": "O proprietário tem créditos de IA disponíveis",
                "unavailable": "O proprietário não tem créditos de IA disponíveis"
              }
            },
            "audience": {
              "label": "Tipo de formação",
              "error": "Por favor selecione o tipo de formação",
              "select": "Selecionar tipo de formação"
            },
            "level": {
              "label": "Série ou Nível",
              "error": "Por favor selecione um nível de série",
              "select": "Selecionar série"
            },
            "objectiveTour": {
              "buttons": {
                "nextBtnText": "Próximo",
                "prevBtnText": "Anterior",
                "doneBtnText": "Concluído"
              },
              "administrator": {
                "title": "Selecione o administrador",
                "description": "Escolha o administrador responsável pelo módulo de aprendizagem. Ele deve ter créditos atribuídos para criar módulos com assistência de IA."
              },
              "parameters": {
                "title": "Selecione os parâmetros do módulo de aprendizagem",
                "description": "Selecione o idioma do módulo de aprendizagem, o ano escolar dos seus alunos e o número de atividades. Você pode encontrar mais informações em nosso canal do YouTube @RVDAIRIVADAVIA24."
              },
              "objective": {
                "title": "Escreva o objetivo principal do módulo de aprendizagem",
                "description": "Este objetivo será central para guiar o resto do conteúdo e atividades do módulo."
              },
              "save": {
                "title": "Salve o objetivo do módulo de aprendizagem",
                "description": "Uma vez salvo, você poderá solicitar créditos para melhorar o objetivo e começar a trabalhar com IA."
              }
            },
            "pathway": {
              "manual": {
                "title": {
                  "label": "Título do Módulo",
                  "placeholder": "Digite o título do módulo"
                },
                "description": {
                  "label": "Descrição do Módulo",
                  "placeholder": "Digite a descrição do módulo"
                }
              },
              "ai": {
                "title": "Vamos continuar com IA",
                "form": {
                  "size": {
                    "placeholder": "Quantidade de atividades no módulo",
                    "items": {
                      "brief": "Breve (3 atividades)",
                      "standard": "Padrão (5 atividades)",
                      "extended": "Estendido (7 atividades)"
                    }
                  },
                  "notes": {
                    "placeholder": "Digite as instruções para guiar a IA na criação de suas atividades"
                  }
                }
              }
            },
            "refine": {
              "activities": {
                "title": "Defina as instruções para a IA",
                "description": "Guie a Inteligência Artificial para gerar conteúdo baseado em seus princípios pedagógicos indicando, por exemplo, os tipos de atividades e seu tom (informal, inspirador, etc.)."
              },
              "textarea": {
                "label": "Informação adicional",
                "placeholder": "Compartilhe sugestões específicas ou áreas para melhoria..."
              },
              "errors": {
                "default": "Ocorreu um erro, por favor tente novamente."
              },
              "confirm": {
                "title": "Você está prestes a confirmar o objetivo do seu módulo",
                "description": "Você não selecionou nenhuma das sugestões geradas. Deseja prosseguir sem implementá-las?"
              }
            },
            "suggestions": {
              "objective": {
                "actions": {
                  "label": "Gostaria de usar esta versão aprimorada do seu objetivo?",
                  "cancel": "Não, obrigado",
                  "confirm": "Sim, atualizar meu objetivo"
                }
              },
              "total": "Sugestões selecionadas",
              "origin": "Entidade educacional",
              "label": "Sugestão",
              "irrelevant": "O objetivo do módulo fornecido parece não ser adequado para o público definido. Por favor, verifique isso e tente novamente."
            },
            "setup": {
              "actions": {
                "cancel": "Cancelar",
                "continue": "Continuar"
              },
              "messages": {
                "save": "Objetivo salvo com sucesso"
              },
              "title": "Criar um Novo Módulo de Aprendizagem",
              "subtitle": "Configure as características do seu módulo para começar.",
              "generation": {
                "title": "Vamos dar forma ao módulo",
                "subtitle": "Indique como deseja continuar",
                "options": {
                  "ai": "Quero gerar as atividades com ajuda da IA",
                  "manually": "Quero gerar as atividades manualmente"
                }
              },
              "form": {
                "administrator": {
                  "label": "Administrador",
                  "select": "Selecionar administrador",
                  "account": "Conta atual",
                  "error": "Você precisa especificar o administrador do módulo de aprendizagem"
                },
                "title": {
                  "label": "Título do módulo"
                },
                "description": {
                  "label": "Descrição do módulo"
                },
                "activities": {
                  "label": "Número de atividades do módulo"
                },
                "notes": {
                  "placeholder": "Digite as instruções para guiar a IA na criação de suas atividades"
                },
                "objective": {
                  "textArea": "Digite o objetivo do módulo"
                }
              },
              "sugestions": {
                "title": "Sugestões de instrução"
              },
              "confirmation": {
                "title": "⚠️ Revisar e Confirmar",
                "ownerDescription": "Proprietário do módulo de aprendizagem",
                "description": "Uma vez que esta informação for salva, ela não poderá ser alterada."
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