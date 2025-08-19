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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/i18n",
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
        hash: 1044125345,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "management": "Gestion",
              "archive": "Archiver",
              "restore": "Restaurer",
              "close": "Fermer",
              "talktoAI": "Parler à l'IA",
              "select": "Sélectionner",
              "filters": "Filtres",
              "assign": "Assigner",
              "assignToClassroom": "Assigner à une classe",
              "use": "Utiliser",
              "refresh": "Actualiser",
              "copy": "Copier",
              "watch": "Voir",
              "testActivity": "Tester l'activité",
              "invite": "Inviter",
              "dashboard": "Tableau de bord",
              "search": "Rechercher",
              "watchActivity": "Voir l'activité",
              "share": "Partager",
              "clone": "Cloner",
              "add": "Ajouter",
              "send": "Envoyer",
              "inspiration": "Générer avec l'IA",
              "manual": "Conception manuelle",
              "order": "Modifier l'ordre",
              "analyse": "Suggérer des améliorations",
              "activities": "Générer des activités",
              "activity": "Activités",
              "applySuggestions": "Appliquer les suggestions",
              "back": "Retour",
              "cancel": "Annuler",
              "continue": "Continuer",
              "cover": "Générer la couverture",
              "clean": "Nettoyer",
              "create": "Créer",
              "confirm": "Confirmer",
              "delete": "Supprimer",
              "edit": "Modifier",
              "generate": "Générer avec l'IA",
              "next": "Suivant",
              "publish": "Publier",
              "remove": "Supprimer",
              "removeSuggestions": "Supprimer les suggestions",
              "refine": "Affiner",
              "save": "Sauvegarder",
              "update": "Télécharger le document",
              "upload": "Télécharger l'image",
              "approve": "Approuver",
              "reject": "Rejeter",
              "recordAgain": "Enregistrer à nouveau",
              "join": "Rejoindre",
              "register": "Enregistrer",
              "imported": "Importé",
              "link": "Lien",
              "gTooltip": "Salle de classe importée de Google",
              "import": "Importer"
            },
            "activities": {
              "types": {
                "content-theory": "Contenu/Théorie",
                "multiple-choice": "Choix Multiple",
                "character-talk": "Conversation avec un Personnage",
                "debate": "Débat",
                "assessment": "Choix Multiple",
                "spoken": "Exposition Orale",
                "hand-written": "Écrit à la Main",
                "written": "Écrit",
                "free-conversation": "Conversation Libre",
                "exercise": "Exercice"
              },
              "empty": {
                "synthesis": "L'activité n'a pas de synthèse",
                "content": "L'activité n'a pas de contenu"
              }
            },
            "classrooms": {
              "code": "Code de la salle de classe"
            },
            "entities": {
              "assignments": "Devoirs",
              "modules": "Modules d'Apprentissage",
              "community": "Communauté",
              "activities": "Activités",
              "drafts": "Brouillons",
              "classrooms": "Salles de Classe",
              "newDraft": "Module",
              "archive": "Archive",
              "organizations": "Institutions",
              "profile": "Mon Profil",
              "kbSections": "Sections",
              "kbArticles": "Articles"
            },
            "errors": {
              "46": "Vous n'avez pas assez de crédits pour effectuer cette action avec l'IA",
              "NO_CREDITS": "Vous n'avez pas assez de crédits pour effectuer cette action",
              "DEFAULT_ERROR": "Une erreur s'est produite, veuillez réessayer plus tard"
            },
            "languages": {
              "es": {
                "code": "es",
                "name": "Espagnol"
              },
              "en": {
                "code": "en",
                "name": "Anglais"
              },
              "pt": {
                "code": "pt",
                "name": "Portugais"
              },
              "de": {
                "code": "de",
                "name": "Allemand"
              },
              "fr": {
                "code": "fr",
                "name": "Français"
              }
            },
            "languagesSelect": {
              "label": "Langue",
              "placeholder": "Sélectionner la langue"
            },
            "modal": {
              "delete": {
                "title": "Voulez-vous supprimer cet élément?",
                "description": "Une fois supprimé, vous ne pourrez plus le récupérer."
              }
            },
            "requestCredits": {
              "title": "Activer l'IA",
              "subtitle": {
                "user": "Souhaitez-vous utiliser un crédit pour activer les fonctions d'IA pour la génération de modules?",
                "org": "Vous êtes un instructeur autorisé par {institution} à utiliser des crédits IA pour générer des modules. Veuillez confirmer l'utilisation d'un crédit pour activer l'IA dans ce module d'apprentissage.",
                "interactive": "Souhaitez-vous utiliser un crédit pour activer les fonctions d'IA?"
              },
              "ownerDescription": "Propriétaire du module",
              "action": "Voulez-vous demander des crédits au propriétaire du module?",
              "detail": {
                "user": "Dans AILearn, les fonctions qui nécessitent l'IA utilisent un système basé sur les crédits. Chaque crédit consommé permet des interactions avec l'IA.",
                "org": "Dans AILearn, les fonctions qui nécessitent l'IA utilisent un système basé sur les crédits. Chaque crédit consommé permet des interactions avec l'IA et est accordé par l'institution où le module est créé.",
                "interactive": "Dans AILearn, les fonctions qui nécessitent l'IA utilisent un système basé sur les crédits. Chaque crédit consommé permet des interactions avec l'IA."
              },
              "alerts": {
                "noCredits": "L'attribution n'a pas pu être traitée, veuillez contacter l'administrateur de l'institution"
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