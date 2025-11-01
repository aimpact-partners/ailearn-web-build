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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/identify",
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
        hash: 94587574,
        creator: function (require, exports) {
          exports.txt = {
            "errors": {
              "ERROR_PUBLISHING": "Não foi possível fazer a solicitação, tente novamente mais tarde",
              "INVALID_CODE": "Código incorreto",
              "ALREADY_WAITING": "Você já fez a solicitação para se juntar à instituição, aguarde que o administrador o aceite ou entre em contato com ele",
              "ALREADY_MEMBER": "Você já é membro da instituição",
              "ALREADY_WAITING_CLASSROOM": "Sua solicitação de acesso ainda está pendente, entre em contato com o professor da sala de aula",
              "ALREADY_WAITING_ORG": "Você já fez a solicitação para se juntar à instituição, aguarde que o administrador o aceite ou entre em contato com ele"
            },
            "institution": {
              "form": {
                "title": "Comece uma prova gratuita para instituições e explore a transformação educacional",
                "description": "Acesse uma prova gratuita preenchendo o formulário. Atribuiremos a você os créditos necessários para que possa experimentar e compartilhar com seus professores a assistência da Inteligência Artificial no seu espaço educacional. Verifique seu e-mail para mais detalhes.",
                "fields": {
                  "name": {
                    "label": "Nome da Instituição",
                    "errorMessage": "Campo obrigatório"
                  },
                  "type": {
                    "label": "Tipo de Instituição",
                    "errorMessage": "Campo obrigatório"
                  },
                  "educationalLevel": {
                    "label": "Nível educacional",
                    "errorMessage": "Campo obrigatório"
                  },
                  "geographicAddress": {
                    "label": "Endereço geográfico"
                  },
                  "authorizedUser": {
                    "label": "Sou um usuário autorizado pela instituição educacional"
                  },
                  "submit": {
                    "label": "ENVIAR SOLICITAÇÃO"
                  }
                }
              },
              "title": "Solicite uma prova gratuita para instituições e comece a explorar a transformação educacional",
              "description": "Solicite o acesso a uma prova gratuita preenchendo o formulário. Uma vez enviado, revisaremos sua solicitação. Lembre-se de verificar seu e-mail, onde informaremos sobre a aprovação da sua solicitação e atribuiremos os créditos necessários para que sua comunidade educacional possa experimentar a assistência da Inteligência Artificial na sala de aula."
            },
            "requested": {
              "teacher": {
                "title": "Parabéns! Você já pode iniciar seu período de teste",
                "description": "Atribuímos a você <strong>{totalGenerative} créditos gerativos</strong> para criar {totalGenerative} módulos com IA e <strong>{totalInteraction} créditos interativos</strong> para a interação com IA dos seus alunos."
              },
              "teacherInstitution": {
                "title": "Sua solicitação para se juntar à instituição está em processo de revisão.",
                "description": "Por favor, aguarde a aprovação do administrador para acessar o espaço educacional da instituição. <strong>Verifique seu e-mail</strong> onde notificaremos você assim que sua solicitação for aprovada para poder acessar o <strong>AILearn</strong>."
              },
              "teacherApproved": {
                "title": "Parabéns! Sua solicitação foi aprovada",
                "description": "Você já faz parte da instituição {organization}. Comece a usar o AILearn."
              },
              "student": {
                "title": "Sua solicitação para se juntar à sala de aula está em processo de revisão.",
                "description": "Por favor, aguarde a aprovação do professor para acessar a sala de aula. <strong>Verifique seu e-mail</strong> onde notificaremos você assim que sua solicitação for aprovada para poder acessar o <strong>AILearn</strong>."
              },
              "studentApproved": {
                "title": "Parabéns! Sua solicitação foi aprovada",
                "description": "Você já faz parte da sala de aula. Comece a usar o AILearn."
              },
              "institution": {
                "title": "Parabéns! Sua instituição já pode iniciar seu período de teste",
                "description": "Atribuímos ao seu período de teste {totalGenerative} créditos para criar {totalGenerative} módulos com IA e {totalInteraction} créditos para a interação com IA dos alunos.",
                "start": "Começar"
              }
            },
            "cards": {
              "student": {
                "icon": "student",
                "title": "Sou Aluno",
                "description": "Acesse os conteúdos atribuídos pelos seus professores e aprenda no seu próprio ritmo com a orientação da IA."
              },
              "teacher": {
                "icon": "teacher",
                "title": "Sou Professor",
                "description": "Crie conteúdos educacionais e monitore seus alunos com a assistência da IA."
              },
              "institution": {
                "icon": "institution",
                "title": "Sou uma Instituição",
                "description": "Adicione Inteligência Artificial à sua proposta educacional e permita que sua comunidade gere conteúdos assistidos por IA."
              }
            },
            "student": {
              "selection": {
                "title": "Você está prestes a começar o caminho para a transformação educacional",
                "description": "Para começar sua experiência de aprendizagem com o AILearn, você pode pedir ao professor o código de acesso à sala de aula e inseri-lo para continuar, ou solicitar o link de acesso a uma atividade. Uma vez que você tenha essas informações, poderá entrar no módulo de aprendizagem e começar a explorar o conteúdo projetado especialmente para você."
              },
              "form": {
                "title": "Comece sua transformação educacional",
                "description": "Você está prestes a se juntar ao espaço educacional da sua instituição. Para entrar no AILearn, você deve validar o código de acesso fornecido pelo administrador da sua instituição.",
                "form": {
                  "legend": {
                    "title": "Não tem seu código?",
                    "description": "Peça ao seu professor o código de acesso ou link."
                  },
                  "action": "Inserir código",
                  "error": {
                    "title": "Código incorreto.",
                    "description": "Por favor, verifique o código e tente novamente. Se o problema persistir, entre em contato com o administrador da sua instituição para obter o código correto."
                  }
                }
              }
            },
            "teacher": {
              "form": {
                "title": "Comece sua prova gratuita para professores e explore a transformação educacional",
                "description": "Acesse uma prova gratuita preenchendo o formulário. Atribuiremos a você os créditos necessários para que possa experimentar a assistência da Inteligência Artificial no seu trabalho docente. Verifique seu e-mail para mais detalhes.",
                "fields": {
                  "role": {
                    "label": "Cargo",
                    "errorMessage": "Campo obrigatório"
                  },
                  "grade": {
                    "label": "Nível educacional",
                    "errorMessage": "Campo obrigatório"
                  },
                  "curricularArea": {
                    "label": "Área curricular",
                    "errorMessage": "Campo obrigatório"
                  },
                  "name": {
                    "label": "Nome da instituição",
                    "errorMessage": "Campo obrigatório"
                  },
                  "type": {
                    "label": "Tipo de instituição",
                    "errorMessage": "Campo obrigatório"
                  },
                  "address": {
                    "label": "Endereço geográfico",
                    "errorMessage": "Campo obrigatório"
                  },
                  "submit": {
                    "label": "ENVIAR SOLICITAÇÃO",
                    "errorMessage": ""
                  }
                }
              },
              "institution": {
                "intro": {
                  "hello": "Olá {username}",
                  "title": "A instituição onde você trabalha usa o AILearn?",
                  "description": "Minha instituição já trabalha com o <strong>AILearn</strong> Rivadavia e quero me juntar ao seu espaço educacional.",
                  "options": {
                    "yes": {
                      "label": "Sim",
                      "description": "Minha instituição já trabalha com o <strong>AILearn</strong> e quero me juntar ao seu espaço educacional."
                    },
                    "no": {
                      "label": "Não",
                      "description": "Minha instituição não trabalha com o <strong>AILearn</strong>. Quero me juntar à ferramenta como professor independente."
                    }
                  }
                },
                "form": {
                  "title": "Comece a transformação educacional",
                  "description": "Você está prestes a se juntar ao espaço educacional da sua instituição. Para acessar o AILearn, você deve validar o código de acesso fornecido pelo administrador da sua instituição.",
                  "form": {
                    "legend": {
                      "title": "Não tem seu código?",
                      "description": "Verifique seu e-mail ou entre em contato com o administrador da sua instituição se ainda não recebeu o convite."
                    },
                    "action": "Inserir código",
                    "error": {
                      "title": "Código incorreto.",
                      "description": "Por favor, verifique o código e tente novamente. Se o problema persistir, entre em contato com o administrador da sua instituição para obter o código correto."
                    }
                  }
                }
              },
              "actions": {
                "continue": "Continuar"
              },
              "welcome": {
                "user": {
                  "hello": "Olá {username}!",
                  "description": "Bem-vindo ao AILearn"
                }
              },
              "processed": {
                "title": "Você já tem créditos de IA atribuídos ao seu perfil!",
                "subtitle": "Atribuímos ao seu período de teste:",
                "description": "{totalGenerative} créditos para criar 5 módulos com IA e {totalInteraction} créditos para a interação com IA dos seus alunos."
              }
            },
            "title": "Bem-vindo!",
            "subtitle": "Selecione seu papel no campo educacional",
            "back": "Voltar",
            "welcome": {
              "hello": "Olá {username}!",
              "description": "Bem-vindo ao AILearn"
            },
            "actions": {
              "accept": "ACEITAR",
              "back": "VOLTAR",
              "continue": "Continuar",
              "join": "Enviar solicitação",
              "start": "Começar"
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