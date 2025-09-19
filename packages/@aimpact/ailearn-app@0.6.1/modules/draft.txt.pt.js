System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.13.16"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/modules/draft",
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
        hash: 1368504678,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "types": {
                "content-theory": "Conteúdo/Teoria",
                "multiple-choice": "Múltipla Escolha",
                "character-talk": "Conversa com Personagem",
                "debate": "Debate",
                "spoken": "Apresentação Oral",
                "hand-written": "Escrito a mão",
                "written": "Escrito",
                "free-conversation": "Conversação livre"
              }
            },
            "alerts": {
              "coins": {
                "available": "O proprietário possui créditos de IA disponíveis",
                "unavailable": "O proprietário não possui créditos de IA disponíveis"
              }
            },
            "coins": {
              "alert": {
                "title": "Você precisa de créditos de IA",
                "description": "Você precisa obter créditos de IA para habilitar todos os recursos com inteligência artificial.",
                "action": "Aceitar"
              },
              "modal": {
                "title": "Solicite créditos de IA para continuar com este recurso",
                "description": "Você precisa obter créditos de IA para habilitar todos os recursos com inteligência artificial.",
                "actions": {
                  "cancel": "Não, agora não, obrigado",
                  "confirm": "Solicitar agora"
                },
                "errors": {
                  "noCredits": "Não foi possível processar a atribuição, por favor entre em contato com o administrador da instituição"
                }
              },
              "header": {
                "actions": {
                  "require": "Habilitar IA",
                  "available": "Créditos disponíveis"
                },
                "messages": {
                  "add": "Você adquiriu créditos para usar as funções de IA",
                  "middle": "Você consumiu 50% dos créditos disponíveis",
                  "finishing": "Você está ficando sem créditos de IA disponíveis"
                }
              }
            },
            "refine": {
              "activities": {
                "title": "Defina as instruções para a IA",
                "description": "Guie a Inteligência Artificial para gerar conteúdo com base em seus princípios pedagógicos, indicando, por exemplo, os tipos de atividades e o tom das mesmas (informal, inspirador, etc.)."
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
                "description": "Você não selecionou nenhuma das sugestões geradas. Deseja continuar sem implementá-las?"
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
              "origin": "Diretrizes educacionais",
              "label": "Ajuste recomendado",
              "irrelevant": "O objetivo do módulo fornecido parece não ser adequado para o público definido. Por favor, verifique isso e tente novamente."
            },
            "title": "Crie um Módulo de Aprendizagem",
            "postTitle": "Selecione os aspectos que o conteúdo a ser gerado no formulário a seguir deve ter",
            "module": "Objetivo do Módulo de Aprendizagem",
            "empty": "Aqui você pode visualizar o conteúdo personalizado, adaptado pelo nosso assistente com base nas suas entradas do formulário",
            "duration": {
              "brief": "Breve (3 atividades)",
              "standard": "Padrão (5 atividades)",
              "extended": "Estendido (7 atividades)"
            },
            "form": {
              "module": "Qual é o objetivo deste módulo?",
              "target": "Idade média dos alunos",
              "duration": "Duração do módulo",
              "languages": "Idiomas"
            },
            "labels": {
              "title": "Título",
              "description": "Descrição"
            },
            "confirm": {
              "title": "Você está prestes a confirmar o objetivo do seu módulo",
              "messages": "Você não selecionou nenhuma das sugestões geradas. Deseja continuar sem implementá-las?"
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