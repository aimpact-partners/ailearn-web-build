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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/draft",
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
        hash: 1203192464,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "types": {
                "content-theory": "Contenu/Théorie",
                "multiple-choice": "Choix multiple",
                "character-talk": "Conversation avec un personnage",
                "debate": "Débat",
                "spoken": "Présentation orale",
                "hand-written": "Écrit à la main",
                "written": "Écrit",
                "free-conversation": "Conversation libre"
              }
            },
            "alerts": {
              "coins": {
                "available": "Le propriétaire dispose de crédits IA",
                "unavailable": "Le propriétaire ne dispose pas de crédits IA"
              }
            },
            "coins": {
              "alert": {
                "title": "Vous avez besoin de crédits IA",
                "description": "Vous devez obtenir des crédits IA pour activer toutes les fonctionnalités avec l'intelligence artificielle.",
                "action": "Accepter"
              },
              "modal": {
                "title": "Demandez des crédits IA pour continuer avec cette fonctionnalité",
                "description": "Vous devez obtenir des crédits IA pour activer toutes les fonctionnalités avec l'intelligence artificielle.",
                "actions": {
                  "cancel": "Non, pas maintenant, merci",
                  "confirm": "Demander maintenant"
                },
                "errors": {
                  "noCredits": "L'attribution n'a pas pu être traitée, veuillez contacter l'administrateur de l'institution"
                }
              },
              "header": {
                "actions": {
                  "require": "Activer l'IA",
                  "available": "Crédits disponibles"
                },
                "messages": {
                  "add": "Vous avez acquis des crédits pour utiliser les fonctions IA",
                  "middle": "Vous avez consommé 50% des crédits disponibles",
                  "finishing": "Vous manquez de crédits IA disponibles"
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
              "origin": "Directives éducatives",
              "label": "Ajustements recommandés",
              "irrelevant": "L'objectif du module fourni ne semble pas convenir au public défini. Veuillez vérifier cela et réessayer."
            },
            "title": "Créer un module d'apprentissage",
            "postTitle": "Sélectionnez les aspects que le contenu à générer dans le formulaire suivant doit avoir",
            "module": "Objectif du module d'apprentissage",
            "empty": "Ici vous pouvez voir le contenu personnalisé, adapté par notre assistant en fonction de vos entrées de formulaire",
            "duration": {
              "brief": "Bref (3 activités)",
              "standard": "Standard (5 activités)",
              "extended": "Étendu (7 activités)"
            },
            "form": {
              "module": "Quel est l'objectif de ce module ?",
              "target": "Âge moyen des élèves",
              "duration": "Durée du module",
              "languages": "Langues"
            },
            "labels": {
              "title": "Titre",
              "description": "Description"
            },
            "confirm": {
              "title": "Vous êtes sur le point de confirmer l'objectif de votre module",
              "messages": "Vous n'avez sélectionné aucune des suggestions générées. Voulez-vous continuer sans les implémenter ?"
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