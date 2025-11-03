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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/management/activity",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('fr');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 44534894,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "test": {
                "warning": "Vous devez remplir tous les champs obligatoires pour pouvoir tester l'activité"
              },
              "minutes": "Min",
              "sections": {
                "general": "",
                "advanced": {
                  "title": "Paramètres avancés",
                  "subtitle": "Instructions supplémentaires pour l'agent et l'activité"
                },
                "agent": {
                  "title": "Paramètres de l'Agent IA",
                  "subtitle": "Ce sont les données que l'IA utilisera pour interagir avec chacun des élèves."
                }
              },
              "description": {
                "label": "De quoi s'agit-il dans cette activité ?*",
                "placeholder": "Ajouter une description"
              },
              "instructions": {
                "label": "Instructions",
                "placeholder": "Ajouter des instructions"
              },
              "objective": {
                "label": "Objectif",
                "placeholder": "Ajouter un objectif"
              },
              "module": "Module",
              "type": "Type",
              "questions": "Questions",
              "topics": "Sujets",
              "form": {
                "description": "Description",
                "title": "Titre"
              },
              "actions": {
                "generateAnswers": "Générer des réponses"
              },
              "generateImage": {
                "prefix": "Illustration:",
                "sufix": "générez l'image au format 16:9."
              },
              "refine": {
                "type": {
                  "label": "Que souhaitez-vous améliorer ?",
                  "answers": "Réponses",
                  "questions": "Questions"
                }
              },
              "empty": {
                "title": "Générer du contenu pour l'activité",
                "description": "Vous pouvez créer ce contenu manuellement ou générer une version automatique avec l'intelligence artificielle en cliquant sur 'Générer avec IA'"
              },
              "deleteModal": {
                "title": "Supprimer le contenu",
                "description": "Êtes-vous sûr de vouloir supprimer le contenu de cette activité ?"
              },
              "settings": {
                "layout": {
                  "label": "Mise en page",
                  "title": "Comment voulez-vous que cette activité ressemble ?",
                  "description": "Sélectionnez le type de visualisation que vous voulez donner à l'activité",
                  "options": {
                    "fullContentLayout": {
                      "title": "Mise en page de contenu complet",
                      "description": "Je veux que <strong>le contenu éducatif occupe le maximum d'espace possible.</strong>"
                    },
                    "mainContentLayout": {
                      "title": "Mise en page de contenu principal",
                      "description": "<strong>Je veux prioriser le contenu éducatif</strong>, plutôt que le chat avec l'agent"
                    },
                    "mainChatLayout": {
                      "title": "Mise en page de chat principal",
                      "description": "<strong>Je veux prioriser le chat avec l'agent</strong>, plutôt que le contenu éducatif."
                    }
                  }
                }
              }
            },
            "contentTheory": {
              "materials": {
                "empty": "Cette activité n'a pas de contenu joint",
                "title": "Joindre du contenu à l'activité",
                "characters": "Caractères disponibles :",
                "deleteModal": {
                  "title": "Voulez-vous supprimer ce contenu ?",
                  "description": "Cette action ne peut pas être annulée."
                },
                "types": {
                  "article": "Contenu",
                  "synthesis": "Résumé",
                  "dyslexia": "Adaptations",
                  "audios": "Audios",
                  "attachments": "Images"
                },
                "article": {
                  "textarea": "Article"
                },
                "dyslexia": {
                  "textarea": "Adaptations"
                },
                "audio": {
                  "noAudio": "Cet élément n'a pas d'audio créé",
                  "maxLength": "L'audio de l'élément ne peut pas être créé car il dépasse la limite de caractères autorisée (4000).",
                  "emptyMaterial": "Cet audio ne peut pas être généré si {type} n'a pas été défini",
                  "content": "Le contenu",
                  "dyslexia": "Les adaptations"
                },
                "refinement": {
                  "title": "Générer du contenu",
                  "description": "Le contenu sera généré basé sur l'objectif suivant :"
                },
                "form": {
                  "title": "Articles de contenu éducatif",
                  "content": {
                    "title": "Rédaction du contenu",
                    "placeholder": "Commencez à créer votre contenu ici…."
                  },
                  "article": {
                    "placeholder": "Commencez à créer votre contenu ici…."
                  }
                }
              },
              "empty": {
                "title": "Cette activité n'a pas de contenu éducatif associé",
                "description": "Ajoutez du contenu éducatif à votre module pour commencer.",
                "actions": {
                  "add": "Ajouter du contenu",
                  "upload": "Télécharger un document"
                }
              }
            },
            "multipleChoice": {
              "questions": {
                "placeholder": "Insérer une question"
              },
              "modalQuestions": {
                "title": "Générer des questions",
                "description": "Ajoutez les observations que vous considérez nécessaires pour générer les questions et réponses"
              },
              "modalAnswers": {
                "title": "Générer des réponses",
                "description": "Ajoutez les observations que vous considérez nécessaires pour générer les réponses"
              },
              "actions": {
                "generateAnswers": "Générer des réponses",
                "addAnswer": "Ajouter une réponse",
                "addQuestion": "Ajouter une question",
                "generateQuestions": "Générer des questions",
                "delete": "Supprimer",
                "markCorrect": "Marquer comme correcte"
              },
              "cancel": {
                "title": "Voulez-vous revenir ?",
                "description": "Toute modification effectuée sera perdue"
              },
              "answers": {
                "placeholder": "Insérez une option de réponse et marquez-la comme correcte ou incorrecte"
              },
              "related": {
                "label": "Activité liée",
                "independent": "Indépendante"
              },
              "emptyOptions": "Les options de réponse n'ont pas été définies"
            },
            "specs": {
              "title": "Spécifications de l'activité",
              "requestedTask": {
                "title": "Que doit faire l'élève ? *",
                "label": "Tâche demandée"
              },
              "titles": {
                "multiplechoice": "Questions et réponses"
              },
              "exercise": {
                "title": "Que doit faire l'élève ? *",
                "label": "Exercice"
              },
              "general": {
                "label": "Données générales"
              },
              "agent": {
                "label": "Données requises pour l'agent"
              },
              "advanced": {
                "label": "Données avancées"
              },
              "assessment": {
                "label": "Comment l'IA évalue-t-elle la présentation orale de l'élève ?",
                "placeholder": "Ajoutez l'évaluation de l'activité"
              },
              "topic": {
                "title": "Sur quoi l'agent doit-il enseigner ?",
                "label": "Sujet d'étude*",
                "placeholder": "Ajoutez le sujet de l'activité"
              },
              "task": {
                "label": "Informations supplémentaires pour l'élève *",
                "placeholder": "Ajoutez la tâche de l'activité"
              },
              "objective": {
                "label": "Objectifs",
                "placeholder": "Ajoutez l'objectif de l'activité",
                "empty": "Cette activité n'a pas d'objectifs assignés. Ajoutez un objectif pour guider l'IA"
              },
              "related": {
                "label": "Activité liée",
                "placeholder": "Sélectionnez l'activité liée"
              },
              "instructions": {
                "label": "Instructions supplémentaires pour l'agent",
                "placeholder": "Ajoutez des instructions supplémentaires si nécessaire"
              },
              "subjectDebate": {
                "label": "Sujet du débat",
                "placeholder": "Ajoutez le sujet du débat"
              },
              "subject": {
                "title": "Sur quoi l'agent IA doit-il débattre ? *",
                "label": "Sujet du débat",
                "placeholder": "Ajoutez le sujet du débat"
              },
              "character": {
                "label": "Personnage",
                "placeholder": "Ajoutez le personnage de l'activité"
              },
              "role": {
                "title": "Quel rôle l'agent doit-il assumer dans le débat ? *",
                "label": "Rôle de l'agent",
                "placeholder": "Ajoutez le rôle de l'agent"
              },
              "characterRole": {
                "title": "Quel rôle le personnage doit-il assumer dans la conversation ? *",
                "label": "Rôle du personnage",
                "placeholder": "Ajoutez le rôle du personnage"
              },
              "questions": {
                "title": "Questions"
              },
              "objectives": {
                "label": "Quels objectifs l'élève doit-il atteindre ? *",
                "name": {
                  "label": "Nom",
                  "placeholder": "Ajoutez le nom de l'objectif"
                },
                "objective": {
                  "label": "Objectif",
                  "placeholder": "Ajoutez l'objectif de l'activité"
                }
              },
              "criteria": {
                "label": "Critères d'évaluation",
                "placeholder": "Ajoutez les critères de l'activité",
                "name": {
                  "label": "Nom",
                  "placeholder": "Ajoutez le nom du critère"
                },
                "subject": {
                  "label": "Critère",
                  "placeholder": "Ajoutez les critères de l'activité"
                }
              }
            },
            "spoken": {
              "criteria": {
                "label": "Critères d'évaluation"
              }
            },
            "types": {
              "content-theory": "Contenu/Théorie",
              "debate": "Débat",
              "multiple-choice": "Choix multiple",
              "character-talk": "Conversation avec un personnage",
              "spoken": "Présentation orale",
              "hand-written": "Écrit à la main",
              "written": "Écrit",
              "free-conversation": "Conversation libre"
            },
            "chat": {
              "empty": {
                "credits": {
                  "title": "Prêt à apprendre ?",
                  "description": "Commencez par faire la requête que vous souhaitez"
                },
                "noCredits": {
                  "title": "Vous avez besoin de crédits IA pour commencer",
                  "description": "Demandez des crédits pour commencer à apprendre avec l'Agent IA"
                }
              }
            },
            "errors": {
              "INCOMPLETE_MODULE": "Vous devez compléter le module avant de continuer. Champs manquants : ",
              "default": "Une erreur s'est produite. Veuillez réessayer.",
              "NO_RELATED_ACTIVITY": "L'activité sélectionnée n'a pas d'article. Vous devez d'abord générer l'article pour pouvoir l'utiliser",
              "wrongQuestions": "Pour sauvegarder, vous devez avoir correctement ajouté les options de réponse et sélectionné l'option correcte pour chaque question."
            },
            "form": {
              "title": "Titre de l'activité *"
            },
            "languages": {
              "select": {
                "label": "Langue",
                "placeholder": "Sélectionner la langue",
                "tooltip": "La langue de l'activité est "
              },
              "selectLabel": "Sélectionner la langue",
              "label": "Langues",
              "en": "Anglais",
              "es": "Espagnol",
              "pt": "Portugais",
              "fr": "Français",
              "de": "Allemand",
              "it": "Italien"
            },
            "manual": {
              "cancel": "Êtes-vous sûr de vouloir annuler ?",
              "article": {
                "textarea": "Ajoutez le contenu de l'activité"
              },
              "content": {
                "textarea": "Ajoutez le contenu de l'activité"
              },
              "synthesis": {
                "textarea": "Ajoutez votre résumé ici"
              },
              "dyslexia": {
                "textarea": "Ajoutez votre contenu ici"
              }
            },
            "refine": {
              "title": "Générer une activité",
              "description": "Nous générerons l'activité basée sur l'objectif suivant",
              "synthesis": {
                "title": "Générer un résumé",
                "description": "Un résumé du contenu précédemment généré sera créé."
              },
              "dyslexia": {
                "title": "Générer des adaptations",
                "description": "Une version accessible du contenu sera générée pour les élèves avec différents styles et besoins d'apprentissage."
              },
              "textarea": {
                "label": "Instructions supplémentaires",
                "placeholder": "Partagez des suggestions spécifiques ou des domaines d'amélioration..."
              },
              "image": {
                "title": "Affiner la qualité de votre image",
                "subtitle": "Vos idées nous aideront à affiner le contenu.",
                "confirm": {
                  "title": "Voulez-vous remplacer l'image actuelle ?",
                  "subtitle": "Si vous confirmez, l'image actuelle sera remplacée."
                }
              }
            },
            "modal": {
              "cancel": {
                "title": "Êtes-vous sûr ?",
                "description": "Vos modifications n'ont pas été sauvegardées. Si vous continuez, vous les perdrez."
              }
            },
            "delete": {
              "title": "Supprimer le contenu",
              "description": "Êtes-vous sûr de vouloir supprimer le contenu de cette activité ?"
            },
            "picture": {
              "title": "Générer des images pour votre activité",
              "description": "Décrivez l'image que vous souhaitez générer en détail pour que l'intelligence artificielle puisse l'imaginer et la générer.",
              "notes": {
                "label": "Notes",
                "placeholder": "Partagez vos suggestions pour créer la meilleure image pour votre module"
              },
              "confirm": {
                "title": "Voulez-vous remplacer l'image actuelle ?",
                "subtitle": "Si vous confirmez, l'image actuelle sera remplacée."
              }
            },
            "progress": {
              "label": "Statut de l'édition",
              "fields": {
                "title": "Titre",
                "description": "Description",
                "picture": "Image",
                "general": "Général",
                "agent": "Agent IA",
                "advanced": "Avancé",
                "questions": "Questions"
              },
              "states": {
                "optional": "Optionnel",
                "completed": "Terminé",
                "inprogress": "En cours",
                "pending": "À compléter",
                "questions": "Questions"
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