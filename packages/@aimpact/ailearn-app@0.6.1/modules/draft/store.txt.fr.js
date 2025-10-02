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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/modules/draft/store",
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
        hash: 3534457253,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "item": {
                "empty": "Cette activité n'a pas encore de contenu ou de titre défini"
              },
              "types": {
                "content-theory": "Contenu/Théorie",
                "multiple-choice": "Choix multiple",
                "character-talk": "Conversation avec un personnage",
                "debate": "Débat",
                "spoken": "Présentation orale"
              },
              "minutes": "Min",
              "description": "Description",
              "objective": "Objectif",
              "activity": {
                "empty": "Cette activité n'a pas de contenu"
              },
              "type": "Type",
              "questions": "Questions",
              "topics": "Sujets",
              "title": "Activités",
              "empty": {
                "title": "Vous n'avez pas encore d'activités",
                "text": "Ajoutez une activité à votre module"
              },
              "createModal": {
                "title": "Sélectionnez le type d'activité",
                "validation": "Vous devez compléter le titre et la description du module pour pouvoir ajouter une activité.",
                "validationTitle": "Module incomplet"
              },
              "delete": {
                "title": "Voulez-vous vraiment supprimer cette activité ?",
                "subtitle": "En supprimant cette activité, vous ne pourrez pas la récupérer."
              },
              "descriptionTypes": {
                "content-theory": "Article, adaptations et audios sur un sujet spécifique pour construire une base théorique.",
                "multiple-choice": "Questions à choix multiples pour évaluer la compréhension",
                "character-talk": "Apprendre à travers une conversation avec un personnage fictif",
                "debate": "Conversation en tête-à-tête avec un assistant virtuel pour explorer et approfondir des sujets",
                "spoken": "Présentation orale sur un sujet assigné pour évaluer les connaissances ou d'autres usages comme la créativité, les présentations originales, etc"
              },
              "states": {
                "empty": "Activité vide",
                "completed": "Terminée",
                "processing": "En cours d'édition"
              }
            },
            "synthesis": "Synthèse",
            "article": "Contenu",
            "description": "Description",
            "objectives": "Objectifs",
            "task": "Votre tâche",
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
            "tabs": {
              "chat": "Chat",
              "content": "Contenu"
            },
            "languages": {
              "select": {
                "label": "Langue",
                "placeholder": "Sélectionner la langue"
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
            "alerts": {
              "coins": {
                "available": "Le propriétaire dispose de crédits IA",
                "unavailable": "Le propriétaire ne dispose pas de crédits IA"
              }
            },
            "audience": {
              "label": "Type de formation",
              "error": "Veuillez sélectionner le type de formation",
              "select": "Sélectionner le type de formation"
            },
            "level": {
              "label": "Niveau ou Grade",
              "error": "Veuillez sélectionner un niveau de grade",
              "select": "Sélectionner le niveau"
            },
            "objectiveTour": {
              "buttons": {
                "nextBtnText": "Suivant",
                "prevBtnText": "Précédent",
                "doneBtnText": "Terminé"
              },
              "administrator": {
                "title": "Sélectionnez un administrateur",
                "description": "Choisissez l'administrateur responsable du module d'apprentissage. Il doit avoir des crédits attribués pour créer des modules avec l'assistance de l'IA."
              },
              "parameters": {
                "title": "Sélectionnez les paramètres du module d'apprentissage",
                "description": "Sélectionnez la langue du module d'apprentissage, l'année scolaire de vos élèves et le nombre d'activités. Vous pouvez trouver plus d'informations sur notre chaîne YouTube @RVDAIRIVADAVIA24."
              },
              "objective": {
                "title": "Rédigez l'objectif principal du module d'apprentissage",
                "description": "Cet objectif sera central pour guider le reste du contenu et des activités du module."
              },
              "save": {
                "title": "Sauvegardez l'objectif du module d'apprentissage",
                "description": "Une fois sauvegardé, vous pourrez demander des crédits pour améliorer l'objectif et commencer à travailler avec l'IA."
              }
            },
            "pathway": {
              "manual": {
                "title": {
                  "label": "Titre du Module",
                  "placeholder": "Saisissez le titre du module"
                },
                "description": {
                  "label": "Description du Module",
                  "placeholder": "Saisissez la description du module"
                }
              },
              "ai": {
                "title": "Continuons avec l'IA",
                "form": {
                  "size": {
                    "placeholder": "Nombre d'activités dans le module",
                    "items": {
                      "brief": "Court (3 activités)",
                      "standard": "Standard (5 activités)",
                      "extended": "Étendu (7 activités)"
                    }
                  },
                  "notes": {
                    "placeholder": "Saisissez les instructions pour guider l'IA dans la création de vos activités"
                  }
                }
              }
            },
            "refine": {
              "activities": {
                "title": "Définissez les instructions pour l'IA",
                "description": "Guidez l'Intelligence Artificielle pour générer du contenu basé sur vos principes pédagogiques en indiquant, par exemple, les types d'activités et leur ton (informel, inspirant, etc.)."
              },
              "textarea": {
                "label": "Informations supplémentaires",
                "placeholder": "Partagez des suggestions spécifiques ou des domaines d'amélioration..."
              },
              "errors": {
                "default": "Une erreur s'est produite, veuillez réessayer."
              },
              "confirm": {
                "title": "Vous êtes sur le point de confirmer l'objectif de votre module",
                "description": "Vous n'avez sélectionné aucune des suggestions générées. Voulez-vous continuer sans les implémenter ?"
              }
            },
            "suggestions": {
              "objective": {
                "actions": {
                  "label": "Souhaitez-vous utiliser cette version améliorée de votre objectif ?",
                  "cancel": "Non, merci",
                  "confirm": "Oui, mettre à jour mon objectif"
                }
              },
              "total": "Suggestions sélectionnées",
              "origin": "Entité éducative",
              "label": "Suggestion",
              "irrelevant": "L'objectif du module fourni ne semble pas convenir au public défini. Veuillez vérifier cela et réessayer."
            },
            "setup": {
              "actions": {
                "cancel": "Annuler",
                "continue": "Continuer"
              },
              "messages": {
                "save": "Objectif sauvegardé avec succès"
              },
              "title": "Créer un nouveau module d'apprentissage",
              "subtitle": "Configurez les fonctionnalités de votre module pour commencer.",
              "generation": {
                "title": "Donnons forme au module",
                "subtitle": "Indiquez comment vous souhaitez continuer",
                "options": {
                  "ai": "Je veux générer les activités avec l'aide de l'IA",
                  "manually": "Je veux générer les activités manuellement"
                }
              },
              "form": {
                "administrator": {
                  "label": "Administrateur",
                  "select": "Sélectionner l'administrateur",
                  "account": "Compte actuel",
                  "error": "Vous devez spécifier l'administrateur du module d'apprentissage"
                },
                "title": {
                  "label": "Titre du module"
                },
                "description": {
                  "label": "Description du module"
                },
                "activities": {
                  "label": "Nombre d'activités du module"
                },
                "notes": {
                  "placeholder": "Saisissez les instructions pour guider l'IA dans la création de vos activités"
                },
                "objective": {
                  "textArea": "Saisissez l'objectif du module"
                }
              },
              "sugestions": {
                "title": "Suggestions d'instruction"
              },
              "confirmation": {
                "title": "⚠️ Réviser et confirmer",
                "ownerDescription": "Propriétaire du module d'apprentissage",
                "description": "Une fois ces informations sauvegardées, elles ne pourront plus être modifiées."
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