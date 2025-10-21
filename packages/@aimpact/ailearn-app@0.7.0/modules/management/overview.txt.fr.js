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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/management/overview",
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
        hash: 135371120,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Ajouter",
              "analyse": "Suggérer des améliorations",
              "activities": "Générer des activités",
              "activity": "Activités",
              "applySuggestions": "Appliquer les suggestions",
              "back": "Retour",
              "cancel": "Annuler",
              "continue": "Continuer",
              "cover": "Générer une couverture",
              "clean": "Nettoyer",
              "create": "Créer",
              "confirm": "Confirmer",
              "delete": "Supprimer",
              "edit": "Éditer",
              "generate": "Générer avec l'IA",
              "next": "Suivant",
              "publish": "Publier",
              "removeSuggestions": "Ignorer les suggestions",
              "refine": "Affiner",
              "save": "Enregistrer",
              "update": "Téléverser un document",
              "upload": "Téléverser une image",
              "manual": "Conception manuelle"
            },
            "activities": {
              "item": {
                "empty": "Cette activité n'a pas encore de contenu ou de titre défini"
              },
              "types": {
                "content-theory": "Contenu/Théorie",
                "multiple-choice": "Choix multiple",
                "character-talk": "Conversation avec un personnage",
                "debate": "Débat",
                "spoken": "Présentation orale",
                "hand-written": "Activité manuelle",
                "written": "Activité écrite",
                "free-conversation": "Conversation libre",
                "exercise": "Exercice"
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
                "validation": "Vous devez compléter le titre et la description du module pour ajouter une activité.",
                "validationTitle": "Module incomplet"
              },
              "delete": {
                "title": "Voulez-vous vraiment supprimer cette activité ?",
                "subtitle": "Une fois supprimée, vous ne pourrez pas récupérer cette activité."
              },
              "descriptionTypes": {
                "content-theory": "Apprenez et comprenez le contenu théorique grâce à des explications et des exemples guidés.",
                "multiple-choice": "Répondez à des questions à choix multiple pour évaluer la compréhension.",
                "character-talk": "Apprenez par le biais d'une conversation guidée avec un personnage fictif pour explorer un sujet ou une perspective.",
                "debate": "Argumentez et défendez une position dans une conversation individuelle avec un assistant virtuel.",
                "spoken": "Présentation orale sur un sujet assigné pour démontrer des connaissances, de la créativité ou de l'originalité.",
                "free-conversation": "Activité flexible où l'étudiant réfléchit, explique ou décrit comment il a réalisé une tâche assignée par l'enseignant.",
                "hand-written": "Activité polyvalente où l'étudiant télécharge une photo d'une production manuscrite.",
                "written": "Activité polyvalente où l'étudiant rédige et soumet un texte sur n'importe quel sujet.",
                "exercise": "Résolution étape par étape d'une tâche spécifique guidée par une conversation avec l'assistant."
              },
              "states": {
                "empty": "Activité vide",
                "completed": "Terminée",
                "processing": "En édition"
              }
            },
            "module": {
              "title": "Ajoutez le nom du module d'apprentissage ici",
              "description": {
                "label": "Description",
                "placeholder": "Ajoutez la description ici"
              },
              "objective": "Objectif du module",
              "owner": "Propriétaire",
              "actions": {
                "description": "Ajouter une description",
                "addActivity": "Ajouter une activité"
              },
              "activities": {
                "title": "Liste des activités",
                "empty": {
                  "title": "Module sans activités",
                  "text": "Ajoutez une activité à votre module"
                }
              }
            },
            "refine": {
              "title": "Assistant de conception d'activité IA",
              "description": "Utilisez l'assistant IA pour personnaliser et améliorer la conception de l'activité.",
              "description2": "Écrivez simplement ce que vous avez en tête, et l'IA vous aidera à structurer l'activité selon vos objectifs d'apprentissage.",
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
              },
              "module": {
                "title": "Affiner la qualité de votre module",
                "subtitle": "Vos idées nous aideront à affiner le contenu.",
                "confirm": {
                  "title": "Voulez-vous remplacer le contenu actuel ?",
                  "subtitle": "Si vous confirmez, le processus de génération remplacera le contenu actuel par le nouveau. Si vous voulez conserver le contenu actuel, cliquez sur annuler."
                }
              }
            },
            "modal": {
              "cancel": {
                "title": "Êtes-vous sûr ?",
                "description": "Vos modifications n'ont pas été enregistrées. Si vous continuez, vous les perdrez."
              }
            },
            "delete": {
              "title": "Supprimer le contenu",
              "description": "Êtes-vous sûr de vouloir supprimer le contenu de cette activité ?"
            },
            "picture": {
              "title": "Générer la meilleure image pour votre module",
              "description": "Cet outil vous aidera à générer la meilleure image pour votre module. Vous pouvez télécharger une image et nous générerons la meilleure image pour votre module. Vous pouvez également utiliser l'éditeur d'images pour modifier l'image et générer la meilleure image pour votre module.",
              "notes": {
                "label": "Notes",
                "placeholder": "Partagez vos suggestions pour créer la meilleure image pour votre module"
              },
              "confirm": {
                "title": "Voulez-vous remplacer l'image actuelle ?",
                "subtitle": "Si vous confirmez, l'image actuelle sera remplacée."
              }
            },
            "errors": {
              "CONTACT_ADMIN": "Veuillez contacter l'administrateur"
            },
            "toast": {
              "modulePublished": "Module publié avec succès",
              "errorPublishingModule": "Erreur lors de la publication du module"
            },
            "moduleTour": {
              "moduleName": {
                "title": "Ajouter le nom du module",
                "description": "Saisissez le nom du module d'apprentissage dans ce champ."
              },
              "description": {
                "title": "Description",
                "description": "Ajoutez une description du module ici."
              },
              "image": {
                "title": "Générer une image",
                "description": "Cliquez sur cette icône pour générer une image du module à l'aide de l'IA."
              },
              "activities": {
                "title": "Activités",
                "description": "Ici, vous pouvez voir les activités ajoutées dans le module."
              },
              "addActivity": {
                "title": "Ajouter une activité",
                "description": "Cliquez sur ce bouton pour ajouter une nouvelle activité au module."
              },
              "publish": {
                "title": "Une fois terminé",
                "description": "Cliquez sur ce bouton pour publier le module une fois terminé."
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