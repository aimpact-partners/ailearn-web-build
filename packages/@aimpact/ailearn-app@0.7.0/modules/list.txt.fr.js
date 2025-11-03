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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/modules/list",
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
        hash: 3932521960,
        creator: function (require, exports) {
          exports.txt = {
            "assign": {
              "title": {
                "share": "Assigner le module aux salles de classe",
                "dashboard": "Accéder au tableau de bord des affectations"
              },
              "assigned": "Assigné",
              "noAssigned": "Aucune salle de classe assignée",
              "module": "Module",
              "messages": {
                "copied": "Lien copié dans le presse-papiers",
                "assigned": "Module assigné à la salle de classe {classroom}"
              },
              "item": {
                "description": "L'élément n'a pas de description"
              },
              "actions": {
                "dashboard": "Tableau de bord",
                "copy": "Copier le lien",
                "test": "Tester",
                "navigate": "Naviguer",
                "assign": {
                  "button": "Assigner",
                  "label": "Le module n'a pas été assigné à cette salle de classe"
                },
                "createClassroom": "Créer une salle de classe"
              },
              "errors": {
                "default": "Le module n'a pas pu être assigné à cette salle de classe, veuillez réessayer plus tard ou contacter l'administrateur"
              },
              "empty": {
                "share": {
                  "text": "Attention",
                  "description": "Vous n'avez pas encore de salles de classe créées, vous devez en créer une pour pouvoir assigner cette activité.",
                  "action": "Créer une salle de classe"
                },
                "dashboard": {
                  "description": "Module sans affectations"
                }
              }
            },
            "delete": {
              "title": "Supprimer le module",
              "description": "Êtes-vous sûr de vouloir supprimer ce module ? Cette action ne peut pas être annulée.",
              "errors": {
                "59": "Le module ne peut pas être supprimé car il a déjà des données associées.",
                "default": "Une erreur s'est produite lors de la suppression du module."
              }
            },
            "archive": {
              "title": "Archiver le module",
              "description": "Êtes-vous sûr de vouloir archiver ce module ?",
              "errors": {
                "default": "Une erreur s'est produite lors de l'archivage du module."
              }
            },
            "empty": {
              "general": {
                "title": "Créez votre premier module",
                "description": "Modernisez votre approche pédagogique en donnant vie à votre premier module. Libérez votre créativité, façonnez votre contenu et profitez de l'expérience d'apprentissage !"
              },
              "drafts": {
                "title": "Aucun brouillon pour le moment",
                "description": "Vous n'avez aucun brouillon pour le moment. Commencez à créer et à perfectionner votre contenu avant de le publier."
              },
              "published": {
                "title": "Aucun module publié",
                "description": "Aucun module publié n'est disponible. Travaillez sur chaque module et publiez-les pour mettre à jour cette liste de publications."
              }
            },
            "errors": {
              "default": "L'opération a échoué. Veuillez réessayer.",
              "ERROR_GETTING_URL": "Erreur lors de l'obtention de l'URL"
            },
            "title": "Mes modules d'apprentissage",
            "tabs": {
              "drafts": "Brouillons",
              "published": "Publiés"
            },
            "actions": {
              "create": "Créer",
              "delete": "Supprimer l'élément",
              "use": "Créer une nouvelle version"
            },
            "loading": {
              "title": "Chargement des données",
              "description": "Nous chargeons vos données. Veuillez patienter un moment."
            },
            "item": {
              "description": "Le module n'a pas encore de description",
              "draftTitle": "Module brouillon"
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