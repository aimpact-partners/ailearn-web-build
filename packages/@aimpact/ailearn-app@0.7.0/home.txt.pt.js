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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/home",
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
        hash: 3551828136,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "join": "Unirse",
              "assign": "Atribuir",
              "create": "Criar",
              "register": "Registrar",
              "activities": "Gerar Atividades",
              "refine": "Refinar",
              "imported": "Importado",
              "generate": "Gerar",
              "save": "Salvar",
              "clean": "Limpar",
              "activity": "Atividades",
              "update": "Enviar Documento",
              "edit": "Editar",
              "delete": "Excluir",
              "cancel": "Cancelar",
              "next": "Próximo",
              "back": "Voltar",
              "link": "Ligação",
              "gTooltip": "Sala de aula importada do Google",
              "import": "importação"
            },
            "assign": {
              "title": {
                "share": "Atribuir módulo às salas de aula",
                "dashboard": "Acessar painel de atribuições"
              },
              "assigned": "Atribuído",
              "noAssigned": "Nenhuma sala de aula atribuída",
              "module": "Módulo",
              "messages": {
                "copied": "Link copiado para a área de transferência",
                "assigned": "Módulo atribuído à sala de aula {classroom}"
              },
              "item": {
                "description": "O item não tem descrição"
              },
              "actions": {
                "dashboard": "Painel",
                "copy": "Copiar link",
                "test": "Testar",
                "navigate": "Navegar",
                "assign": {
                  "button": "Atribuir",
                  "label": "O módulo não foi atribuído a esta Sala de Aula"
                },
                "createClassroom": "Criar sala de aula"
              },
              "errors": {
                "default": "Não foi possível atribuir o módulo a esta Sala de Aula, por favor tente novamente mais tarde ou contacte o administrador"
              },
              "empty": {
                "share": {
                  "text": "Atenção",
                  "description": "Você ainda não possui salas de aula criadas, deve criar uma para poder atribuir esta atividade.",
                  "action": "Criar sala de aula"
                },
                "dashboard": {
                  "description": "Módulo sem atribuições"
                }
              }
            },
            "tour": {
              "buttons": {
                "nextBtnText": "Próximo",
                "prevBtnText": "Anterior",
                "doneBtnText": "Concluído"
              },
              "teacher": {
                "step0": {
                  "title": "Bem-vindo ao seu perfil",
                  "description": "Aqui você pode personalizar sua experiência no AILearn. Você pode atualizar suas informações pessoais, indicar seu idioma de preferência, configurar opções de acessibilidade e ajustar a velocidade do áudio."
                },
                "drafts": {
                  "title": "Módulos em rascunho",
                  "description": "Trabalhe em seus módulos de aprendizagem em estado de rascunho até que estejam prontos para serem publicados e atribuídos a uma sala de aula. Eles ficarão salvos aqui para que você possa editá-los conforme necessário. Comece criando seu primeiro módulo!"
                },
                "community": {
                  "title": "Comunidade",
                  "description": "Explore nossa coleção de módulos de aprendizagem criados por especialistas. Encontre uma variedade de conteúdos prontos para usar em suas salas de aula. Você pode editar e personalizar esses módulos conforme seus critérios para adaptá-los às necessidades dos seus alunos."
                },
                "classrooms": {
                  "title": "Salas de Aula",
                  "description": "Neste espaço você pode criar salas de aula onde poderá agrupar seus alunos e atribuir os módulos de aprendizagem que publicar. Organize suas aulas de forma eficaz e personalizada. Comece a criar suas salas de aula e transforme a experiência educacional!"
                },
                "step3": {
                  "title": "Precisa de ajuda?",
                  "description": "Encontre todas as informações em nossos tutoriais projetados para ajudá-lo a aproveitar ao máximo o AILearn. Aprenda a criar módulos de aprendizagem, gerenciar suas salas de aula e usar todas as ferramentas que oferecemos. Explore nossos tutoriais e navegue pela plataforma!"
                },
                "modules": {
                  "title": "Meus Módulos de Aprendizagem",
                  "description": "Nesta seção serão exibidos os módulos que o usuário criou."
                },
                "assignments": {
                  "title": "Minhas Atribuições",
                  "description": "Aqui você pode ver todos os módulos que foram atribuídos a você em suas salas de aula. Essas atribuições contêm o conteúdo de aprendizagem que você deve completar. Explore suas atribuições e continue seu caminho de aprendizagem!"
                }
              },
              "student": {
                "step0": {
                  "title": "Bem-vindo ao seu perfil",
                  "description": "Aqui você pode personalizar sua experiência no AILearn. Você pode atualizar suas informações pessoais, indicar seu idioma de preferência, configurar opções de acessibilidade e ajustar a velocidade do áudio."
                },
                "classrooms": {
                  "title": "Salas de Aula",
                  "description": "Aqui você pode ver todas as salas de aula das quais faz parte. Explore os módulos de aprendizagem atribuídos, revise o conteúdo e fique em dia com suas aulas. Você também pode participar de novas salas de aula usando um código. Descubra tudo o que pode aprender em suas salas de aula!"
                },
                "assignments": {
                  "title": "Minhas Atribuições",
                  "description": "Aqui você pode ver todos os módulos que foram atribuídos a você em suas salas de aula. Essas atribuições contêm o conteúdo de aprendizagem que você deve completar. Explore suas atribuições e continue seu caminho de aprendizagem!"
                }
              }
            },
            "errors": {
              "default": "A operação falhou. Por favor, tente novamente."
            },
            "title": "Bem-vindo!",
            "profile": {
              "edit": "Ir para meu perfil"
            },
            "assignments": {
              "title": "Minhas Atribuições",
              "activities": "Minhas Atividades",
              "actions": {
                "link": "Entrar"
              },
              "item": {
                "description": "Esta atribuição não possui descrição ou objetivo"
              }
            },
            "modules": {
              "title": "Meus Módulos de Aprendizagem",
              "empty": "Você ainda não possui módulos de aprendizagem",
              "action": "Publicar um módulo",
              "activities": "Minhas Atividades",
              "items": {
                "description": "Este módulo não possui descrição ou objetivo",
                "title": "Este módulo não possui título"
              }
            },
            "drafts": {
              "title": "Meus Rascunhos",
              "empty": {
                "description": "Você ainda não possui rascunhos",
                "action": "Criar um novo"
              },
              "action": "Criar",
              "items": {
                "description": "Este módulo não possui descrição ou objetivo",
                "title": "Este rascunho não possui título"
              }
            },
            "community": {
              "title": "Comunidade",
              "actions": {
                "link": "Ver tudo",
                "test": "Demo",
                "use": "Criar sua própria versão"
              }
            },
            "classrooms": {
              "title": "Minhas Salas de Aula",
              "action": "Criar",
              "actions": {
                "create": "Criar",
                "join": "Participar"
              },
              "empty": {
                "description": "Agrupe seus alunos em espaços de trabalho e atribua módulos de aprendizagem personalizados.",
                "action": "Crie sua primeira sala de aula"
              },
              "items": {
                "description": "Esta sala de aula não possui descrição ou objetivo"
              }
            },
            "students": {
              "title": "Meus Alunos"
            },
            "members": {
              "children": "Meus Filhos"
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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/home",
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
        hash: 3551828136,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "join": "Unirse",
              "assign": "Atribuir",
              "create": "Criar",
              "register": "Registrar",
              "activities": "Gerar Atividades",
              "refine": "Refinar",
              "imported": "Importado",
              "generate": "Gerar",
              "save": "Salvar",
              "clean": "Limpar",
              "activity": "Atividades",
              "update": "Enviar Documento",
              "edit": "Editar",
              "delete": "Excluir",
              "cancel": "Cancelar",
              "next": "Próximo",
              "back": "Voltar",
              "link": "Ligação",
              "gTooltip": "Sala de aula importada do Google",
              "import": "importação"
            },
            "assign": {
              "title": {
                "share": "Atribuir módulo às salas de aula",
                "dashboard": "Acessar painel de atribuições"
              },
              "assigned": "Atribuído",
              "noAssigned": "Nenhuma sala de aula atribuída",
              "module": "Módulo",
              "messages": {
                "copied": "Link copiado para a área de transferência",
                "assigned": "Módulo atribuído à sala de aula {classroom}"
              },
              "item": {
                "description": "O item não tem descrição"
              },
              "actions": {
                "dashboard": "Painel",
                "copy": "Copiar link",
                "test": "Testar",
                "navigate": "Navegar",
                "assign": {
                  "button": "Atribuir",
                  "label": "O módulo não foi atribuído a esta Sala de Aula"
                },
                "createClassroom": "Criar sala de aula"
              },
              "errors": {
                "default": "Não foi possível atribuir o módulo a esta Sala de Aula, por favor tente novamente mais tarde ou contacte o administrador"
              },
              "empty": {
                "share": {
                  "text": "Atenção",
                  "description": "Você ainda não possui salas de aula criadas, deve criar uma para poder atribuir esta atividade.",
                  "action": "Criar sala de aula"
                },
                "dashboard": {
                  "description": "Módulo sem atribuições"
                }
              }
            },
            "tour": {
              "buttons": {
                "nextBtnText": "Próximo",
                "prevBtnText": "Anterior",
                "doneBtnText": "Concluído"
              },
              "teacher": {
                "step0": {
                  "title": "Bem-vindo ao seu perfil",
                  "description": "Aqui você pode personalizar sua experiência no AILearn. Você pode atualizar suas informações pessoais, indicar seu idioma de preferência, configurar opções de acessibilidade e ajustar a velocidade do áudio."
                },
                "drafts": {
                  "title": "Módulos em rascunho",
                  "description": "Trabalhe em seus módulos de aprendizagem em estado de rascunho até que estejam prontos para serem publicados e atribuídos a uma sala de aula. Eles ficarão salvos aqui para que você possa editá-los conforme necessário. Comece criando seu primeiro módulo!"
                },
                "community": {
                  "title": "Comunidade",
                  "description": "Explore nossa coleção de módulos de aprendizagem criados por especialistas. Encontre uma variedade de conteúdos prontos para usar em suas salas de aula. Você pode editar e personalizar esses módulos conforme seus critérios para adaptá-los às necessidades dos seus alunos."
                },
                "classrooms": {
                  "title": "Salas de Aula",
                  "description": "Neste espaço você pode criar salas de aula onde poderá agrupar seus alunos e atribuir os módulos de aprendizagem que publicar. Organize suas aulas de forma eficaz e personalizada. Comece a criar suas salas de aula e transforme a experiência educacional!"
                },
                "step3": {
                  "title": "Precisa de ajuda?",
                  "description": "Encontre todas as informações em nossos tutoriais projetados para ajudá-lo a aproveitar ao máximo o AILearn. Aprenda a criar módulos de aprendizagem, gerenciar suas salas de aula e usar todas as ferramentas que oferecemos. Explore nossos tutoriais e navegue pela plataforma!"
                },
                "modules": {
                  "title": "Meus Módulos de Aprendizagem",
                  "description": "Nesta seção serão exibidos os módulos que o usuário criou."
                },
                "assignments": {
                  "title": "Minhas Atribuições",
                  "description": "Aqui você pode ver todos os módulos que foram atribuídos a você em suas salas de aula. Essas atribuições contêm o conteúdo de aprendizagem que você deve completar. Explore suas atribuições e continue seu caminho de aprendizagem!"
                }
              },
              "student": {
                "step0": {
                  "title": "Bem-vindo ao seu perfil",
                  "description": "Aqui você pode personalizar sua experiência no AILearn. Você pode atualizar suas informações pessoais, indicar seu idioma de preferência, configurar opções de acessibilidade e ajustar a velocidade do áudio."
                },
                "classrooms": {
                  "title": "Salas de Aula",
                  "description": "Aqui você pode ver todas as salas de aula das quais faz parte. Explore os módulos de aprendizagem atribuídos, revise o conteúdo e fique em dia com suas aulas. Você também pode participar de novas salas de aula usando um código. Descubra tudo o que pode aprender em suas salas de aula!"
                },
                "assignments": {
                  "title": "Minhas Atribuições",
                  "description": "Aqui você pode ver todos os módulos que foram atribuídos a você em suas salas de aula. Essas atribuições contêm o conteúdo de aprendizagem que você deve completar. Explore suas atribuições e continue seu caminho de aprendizagem!"
                }
              }
            },
            "errors": {
              "default": "A operação falhou. Por favor, tente novamente."
            },
            "title": "Bem-vindo!",
            "profile": {
              "edit": "Ir para meu perfil"
            },
            "assignments": {
              "title": "Minhas Atribuições",
              "activities": "Minhas Atividades",
              "actions": {
                "link": "Entrar"
              },
              "item": {
                "description": "Esta atribuição não possui descrição ou objetivo"
              }
            },
            "modules": {
              "title": "Meus Módulos de Aprendizagem",
              "empty": "Você ainda não possui módulos de aprendizagem",
              "action": "Publicar um módulo",
              "activities": "Minhas Atividades",
              "items": {
                "description": "Este módulo não possui descrição ou objetivo",
                "title": "Este módulo não possui título"
              }
            },
            "drafts": {
              "title": "Meus Rascunhos",
              "empty": {
                "description": "Você ainda não possui rascunhos",
                "action": "Criar um novo"
              },
              "action": "Criar",
              "items": {
                "description": "Este módulo não possui descrição ou objetivo",
                "title": "Este rascunho não possui título"
              }
            },
            "community": {
              "title": "Comunidade",
              "actions": {
                "link": "Ver tudo",
                "test": "Demo",
                "use": "Criar sua própria versão"
              }
            },
            "classrooms": {
              "title": "Minhas Salas de Aula",
              "action": "Criar",
              "actions": {
                "create": "Criar",
                "join": "Participar"
              },
              "empty": {
                "description": "Agrupe seus alunos em espaços de trabalho e atribua módulos de aprendizagem personalizados.",
                "action": "Crie sua primeira sala de aula"
              },
              "items": {
                "description": "Esta sala de aula não possui descrição ou objetivo"
              }
            },
            "students": {
              "title": "Meus Alunos"
            },
            "members": {
              "children": "Meus Filhos"
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