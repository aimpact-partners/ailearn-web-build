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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/management/activity",
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
        hash: 3582197583,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "test": {
                "warning": "Você deve preencher todos os campos obrigatórios para poder testar a atividade"
              },
              "minutes": "Min",
              "sections": {
                "general": "",
                "advanced": {
                  "title": "Configurações Avançadas",
                  "subtitle": "Instruções adicionais para o agente e a atividade"
                },
                "agent": {
                  "title": "Configurações do Agente de IA",
                  "subtitle": "Estes são os dados que a IA usará para interagir com cada um dos alunos."
                }
              },
              "description": {
                "label": "Sobre o que é esta atividade?*",
                "placeholder": "Adicionar uma descrição"
              },
              "instructions": {
                "label": "Instruções",
                "placeholder": "Adicionar instruções"
              },
              "objective": {
                "label": "Objetivo",
                "placeholder": "Adicionar um objetivo"
              },
              "module": "Módulo",
              "type": "Tipo",
              "questions": "Perguntas",
              "topics": "Tópicos",
              "form": {
                "description": "Descrição",
                "title": "Título"
              },
              "actions": {
                "generateAnswers": "Gerar respostas"
              },
              "generateImage": {
                "prefix": "Ilustração:",
                "sufix": "gere a imagem no formato 16:9."
              },
              "refine": {
                "type": {
                  "label": "O que você quer melhorar?",
                  "answers": "Respostas",
                  "questions": "Perguntas"
                }
              },
              "empty": {
                "title": "Gerar conteúdo para a atividade",
                "description": "Você pode criar este conteúdo manualmente ou gerar uma versão automática usando inteligência artificial clicando em 'Gerar com IA'"
              },
              "deleteModal": {
                "title": "Excluir Conteúdo",
                "description": "Tem certeza de que deseja excluir o conteúdo desta atividade?"
              },
              "settings": {
                "layout": {
                  "label": "Layout",
                  "title": "Como você quer que esta atividade pareça?",
                  "description": "Selecione o tipo de visualização que deseja dar à atividade",
                  "options": {
                    "fullContentLayout": {
                      "title": "Layout de Conteúdo Completo",
                      "description": "Quero <strong>que o conteúdo educacional ocupe o máximo de espaço possível.</strong>"
                    },
                    "mainContentLayout": {
                      "title": "Layout de Conteúdo Principal",
                      "description": "<strong>Quero priorizar o conteúdo educacional</strong>, em vez do chat com o agente"
                    },
                    "mainChatLayout": {
                      "title": "Layout de Chat Principal",
                      "description": "<strong>Quero priorizar o chat com o agente</strong>, em vez do conteúdo educacional."
                    }
                  }
                }
              }
            },
            "contentTheory": {
              "materials": {
                "empty": "Esta atividade não possui conteúdo anexado",
                "title": "Anexe conteúdo à atividade",
                "characters": "Caracteres disponíveis:",
                "deleteModal": {
                  "title": "Deseja excluir este conteúdo?",
                  "description": "Esta ação não pode ser desfeita."
                },
                "types": {
                  "article": "Conteúdo",
                  "synthesis": "Resumo",
                  "dyslexia": "Adaptações",
                  "audios": "Áudios",
                  "attachments": "Imagens"
                },
                "article": {
                  "textarea": "Artigo"
                },
                "dyslexia": {
                  "textarea": "Adaptações"
                },
                "audio": {
                  "noAudio": "Este elemento não possui áudio criado",
                  "maxLength": "O áudio do elemento não pode ser criado porque excede o limite de caracteres permitido (4000).",
                  "emptyMaterial": "Este áudio não pode ser gerado se {type} não foi definido",
                  "content": "O conteúdo",
                  "dyslexia": "As adaptações"
                },
                "refinement": {
                  "title": "Gerar conteúdo",
                  "description": "O conteúdo será gerado com base no seguinte objetivo:"
                },
                "form": {
                  "title": "Artigos de conteúdo educacional",
                  "content": {
                    "title": "Redação do conteúdo",
                    "placeholder": "Comece a criar seu conteúdo aqui…."
                  },
                  "article": {
                    "placeholder": "Comece a criar seu conteúdo aqui…."
                  }
                }
              },
              "empty": {
                "title": "Esta atividade não possui conteúdo educacional associado",
                "description": "Adicione conteúdo educacional ao seu módulo para começar.",
                "actions": {
                  "add": "Adicionar conteúdo",
                  "upload": "Carregar documento"
                }
              }
            },
            "multipleChoice": {
              "questions": {
                "placeholder": "Insira uma pergunta"
              },
              "modalQuestions": {
                "title": "Gerar perguntas",
                "description": "Adicione as observações que considerar necessárias para gerar as perguntas e respostas"
              },
              "modalAnswers": {
                "title": "Gerar respostas",
                "description": "Adicione as observações que considerar necessárias para gerar as respostas"
              },
              "actions": {
                "generateAnswers": "Gerar respostas",
                "addAnswer": "Adicionar resposta",
                "addQuestion": "Adicionar pergunta",
                "generateQuestions": "Gerar perguntas",
                "delete": "Excluir",
                "markCorrect": "Marcar como correta"
              },
              "cancel": {
                "title": "Deseja voltar?",
                "description": "Quaisquer alterações feitas serão perdidas"
              },
              "answers": {
                "placeholder": "Insira uma opção de resposta e marque-a como correta ou incorreta"
              },
              "related": {
                "label": "Atividade relacionada",
                "independent": "Independente"
              },
              "emptyOptions": "As opções de resposta não foram definidas"
            },
            "specs": {
              "title": "Especificações da atividade",
              "titles": {
                "multiplechoice": "Perguntas e respostas"
              },
              "requestedTask": {
                "title": "Qual tarefa deve ser realizada pelo aluno? *",
                "label": "Tarefa solicitada"
              },
              "exercise": {
                "title": "Qual exercício deve ser realizado pelo aluno? *",
                "label": "Exercicio"
              },
              "general": {
                "label": "Dados gerais"
              },
              "agent": {
                "label": "Dados necessários para o agente"
              },
              "advanced": {
                "label": "Dados avançados"
              },
              "assessment": {
                "label": "Como a IA avaliará a apresentação oral do aluno?",
                "placeholder": "Adicione a avaliação da atividade"
              },
              "topic": {
                "title": "Sobre o que o agente deve ensinar?",
                "label": "Tópico de estudo*",
                "placeholder": "Adicione o tópico da atividade"
              },
              "task": {
                "label": "Informações adicionais para o aluno *",
                "placeholder": "Adicione a tarefa da atividade"
              },
              "objective": {
                "label": "Objetivos",
                "placeholder": "Adicione o objetivo da atividade",
                "empty": "Esta atividade não possui objetivos associados. Adicione um objetivo para orientar a IA"
              },
              "related": {
                "label": "Atividade relacionada",
                "placeholder": "Selecione a atividade relacionada"
              },
              "instructions": {
                "label": "Instruções adicionais para o agente",
                "placeholder": "Adicione instruções adicionais se necessário"
              },
              "subjectDebate": {
                "label": "Moção do debate",
                "placeholder": "Adicione a moção do debate"
              },
              "subject": {
                "title": "Sobre o que o agente de IA deve debater? *",
                "label": "Assunto do debate",
                "placeholder": "Adicione o assunto do debate"
              },
              "character": {
                "label": "Personagem",
                "placeholder": "Adicione o personagem da atividade"
              },
              "role": {
                "title": "Que papel o agente deve assumir no debate? *",
                "label": "Papel do agente",
                "placeholder": "Adicione o papel do agente"
              },
              "characterRole": {
                "title": "Que papel o personagem deve assumir na conversa? *",
                "label": "Papel do personagem",
                "placeholder": "Adicione o papel do personagem"
              },
              "questions": {
                "title": "Perguntas"
              },
              "objectives": {
                "label": "Quais objetivos o aluno deve alcançar? *",
                "name": {
                  "label": "Nome",
                  "placeholder": "Adicione o nome do objetivo"
                },
                "objective": {
                  "label": "Objetivo",
                  "placeholder": "Adicione o objetivo da atividade"
                }
              },
              "criteria": {
                "label": "Critérios de avaliação",
                "placeholder": "Adicione os critérios da atividade",
                "name": {
                  "label": "Nome",
                  "placeholder": "Adicione o nome do critério"
                },
                "subject": {
                  "label": "Critério",
                  "placeholder": "Adicione os critérios da atividade"
                }
              }
            },
            "spoken": {
              "criteria": {
                "label": "Critérios de Avaliação"
              }
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
            },
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
            "errors": {
              "INCOMPLETE_MODULE": "Você deve completar o módulo antes de continuar. Campos ausentes: ",
              "default": "Ocorreu um erro. Por favor, tente novamente.",
              "NO_RELATED_ACTIVITY": "A atividade selecionada não possui um artigo. Você deve gerar o artigo primeiro para poder usá-la",
              "wrongQuestions": "Para salvar, você deve ter adicionado corretamente as opções de resposta e selecionado a opção correta para cada pergunta."
            },
            "form": {
              "title": "Título da atividade *"
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
            "manual": {
              "cancel": "Tem certeza de que deseja cancelar?",
              "article": {
                "textarea": "Adicione o conteúdo da atividade"
              },
              "content": {
                "textarea": "Adicione o conteúdo da atividade"
              },
              "synthesis": {
                "textarea": "Adicione seu resumo aqui"
              },
              "dyslexia": {
                "textarea": "Adicione seu conteúdo aqui"
              }
            },
            "refine": {
              "title": "Gerar Atividade",
              "description": "Vamos gerar a atividade com base no seguinte objetivo",
              "synthesis": {
                "title": "Gerar resumo",
                "description": "Um resumo do conteúdo previamente gerado será criado."
              },
              "dyslexia": {
                "title": "Gerar adaptações",
                "description": "Uma versão acessível do conteúdo será gerada para alunos com diferentes estilos e necessidades de aprendizagem."
              },
              "textarea": {
                "label": "Instruções adicionais",
                "placeholder": "Compartilhe sugestões específicas ou áreas para melhoria..."
              },
              "image": {
                "title": "Aprimore a qualidade da sua imagem",
                "subtitle": "Suas ideias nos ajudarão a aprimorar o conteúdo.",
                "confirm": {
                  "title": "Deseja substituir a imagem atual?",
                  "subtitle": "Se você confirmar, a imagem atual será substituída."
                }
              }
            },
            "modal": {
              "cancel": {
                "title": "Tem certeza?",
                "description": "Suas alterações não foram salvas. Se continuar, você as perderá."
              }
            },
            "delete": {
              "title": "Excluir Conteúdo",
              "description": "Tem certeza de que deseja excluir o conteúdo desta atividade?"
            },
            "picture": {
              "title": "Gere imagens para sua atividade",
              "description": "Descreva a imagem que deseja gerar em detalhes para que a inteligência artificial possa imaginá-la e gerá-la.",
              "notes": {
                "label": "Notas",
                "placeholder": "Compartilhe suas sugestões para criar a melhor imagem para o seu módulo"
              },
              "confirm": {
                "title": "Deseja substituir a imagem atual?",
                "subtitle": "Se você confirmar, a imagem atual será substituída."
              }
            },
            "progress": {
              "label": "Status da edição",
              "fields": {
                "title": "Título",
                "description": "Descrição",
                "picture": "Imagem",
                "general": "Geral",
                "agent": "Agente IA",
                "advanced": "Avançado",
                "questions": "Perguntas"
              },
              "states": {
                "optional": "Opcional",
                "completed": "Completo",
                "inprogress": "Em progresso",
                "pending": "A completar"
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