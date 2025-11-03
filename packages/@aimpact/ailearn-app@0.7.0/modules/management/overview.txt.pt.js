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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/management/overview",
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
        hash: 1601910132,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Adicionar",
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
              "delete": "Excluir",
              "edit": "Editar",
              "generate": "Gerar com IA",
              "next": "Próximo",
              "publish": "Publicar",
              "removeSuggestions": "Ignorar sugestões",
              "refine": "Aprimorar",
              "save": "Salvar",
              "update": "Enviar Documento",
              "upload": "Enviar Imagem",
              "manual": "Design Manual"
            },
            "activities": {
              "item": {
                "empty": "Esta atividade ainda não possui conteúdo ou título definido"
              },
              "types": {
                "content-theory": "Conteúdo/Teoria",
                "multiple-choice": "Múltipla Escolha",
                "character-talk": "Conversa com Personagem",
                "debate": "Debate",
                "spoken": "Apresentação Oral",
                "hand-written": "Atividade Manual",
                "written": "Atividade Escrita",
                "free-conversation": "Conversa livre",
                "exercise": "Exercício"
              },
              "minutes": "Min",
              "description": "Descrição",
              "objective": "Objetivo",
              "activity": {
                "empty": "Esta atividade não possui conteúdo"
              },
              "type": "Tipo",
              "questions": "Perguntas",
              "topics": "Tópicos",
              "title": "Atividades",
              "empty": {
                "title": "Você ainda não possui atividades",
                "text": "Adicione uma atividade ao seu módulo"
              },
              "createModal": {
                "title": "Selecione o tipo de atividade",
                "validation": "Você deve completar o título e a descrição do módulo para poder adicionar uma atividade.",
                "validationTitle": "Módulo incompleto"
              },
              "delete": {
                "title": "Deseja realmente excluir esta atividade?",
                "subtitle": "Ao excluir esta atividade, não será possível recuperá-la."
              },
              "descriptionTypes": {
                "content-theory": "Aprender e compreender conteúdo teórico por meio de explicações e exemplos guiados.",
                "multiple-choice": "Responder perguntas de múltipla escolha para avaliar a compreensão.",
                "character-talk": "Aprender por meio de uma conversa guiada com um personagem fictício para explorar um tema ou perspectiva.",
                "debate": "Argumentar e defender um ponto de vista em uma conversa individual com um assistente virtual.",
                "spoken": "Apresentação oral sobre um tema proposto para demonstrar conhecimento, criatividade ou originalidade.",
                "free-conversation": "Atividade flexível em que o aluno relata, explica ou reflete sobre uma tarefa proposta pelo professor.",
                "hand-written": "Atividade versátil em que o aluno envia uma foto de uma produção manuscrita.",
                "written": "Atividade versátil em que o aluno redige e envia um texto sobre qualquer tema.",
                "exercise": "Resolução passo a passo de um exercício específico guiada por uma conversa com o assistente."
              },
              "states": {
                "empty": "Atividade vazia",
                "completed": "Concluída",
                "processing": "Em edição"
              }
            },
            "images": {
              "generation": {
                "prefix": "Ilustração:",
                "sufix": "gere a imagem no formato 16:9."
              }
            },
            "module": {
              "title": "Adicione o nome do Módulo de Aprendizagem aqui",
              "description": {
                "label": "Descrição",
                "placeholder": "Adicione a descrição aqui"
              },
              "objective": "Objetivo do módulo",
              "owner": "Administrador",
              "actions": {
                "description": "Adicionar descrição",
                "addActivity": "Adicionar atividade"
              },
              "activities": {
                "title": "Lista de atividades",
                "empty": {
                  "title": "Módulo sem atividades",
                  "text": "Adicione uma atividade ao seu módulo"
                }
              }
            },
            "refine": {
              "title": "Assistente de Design de Atividades com IA",
              "description": "Use o assistente de IA para personalizar e melhorar o design da atividade.",
              "description2": "Basta escrever o que você tem em mente, e a IA ajudará a estruturar a atividade para atender aos seus objetivos de aprendizagem.",
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
              },
              "module": {
                "title": "Aprimore a qualidade do seu módulo",
                "subtitle": "Suas ideias nos ajudarão a aprimorar o conteúdo.",
                "confirm": {
                  "title": "Deseja substituir o conteúdo atual?",
                  "subtitle": "Se você confirmar, o processo de geração substituirá o conteúdo atual pelo novo. Se quiser manter o conteúdo atual, clique em cancelar."
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
              "title": "Excluir conteúdo",
              "description": "Tem certeza de que deseja excluir o conteúdo desta atividade?"
            },
            "picture": {
              "title": "Gere a melhor imagem para o seu módulo",
              "description": "Esta ferramenta irá ajudá-lo a gerar a melhor imagem para o seu módulo. Você pode fazer upload de uma imagem e nós geraremos a melhor imagem para o seu módulo. Você também pode usar o editor de imagens para editar a imagem e gerar a melhor imagem para o seu módulo.",
              "notes": {
                "label": "Notas",
                "placeholder": "Compartilhe suas sugestões para criar a melhor imagem para o seu módulo"
              },
              "confirm": {
                "title": "Deseja substituir a imagem atual?",
                "subtitle": "Se você confirmar, a imagem atual será substituída."
              }
            },
            "errors": {
              "CONTACT_ADMIN": "Por favor, entre em contato com o administrador"
            },
            "toast": {
              "modulePublished": "Módulo publicado com sucesso",
              "errorPublishingModule": "Erro ao publicar o módulo"
            },
            "moduleTour": {
              "moduleName": {
                "title": "Adicione o Nome do Módulo",
                "description": "Digite o nome do módulo de aprendizagem neste campo."
              },
              "description": {
                "title": "Descrição",
                "description": "Adicione uma descrição do módulo aqui."
              },
              "image": {
                "title": "Gerar Imagem",
                "description": "Clique neste ícone para gerar uma imagem do módulo usando IA."
              },
              "activities": {
                "title": "Atividades",
                "description": "Aqui você pode visualizar as atividades adicionadas ao módulo."
              },
              "addActivity": {
                "title": "Adicionar Atividade",
                "description": "Clique neste botão para adicionar uma nova atividade ao módulo."
              },
              "publish": {
                "title": "Uma vez Concluído",
                "description": "Clique neste botão para publicar o módulo após a conclusão."
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