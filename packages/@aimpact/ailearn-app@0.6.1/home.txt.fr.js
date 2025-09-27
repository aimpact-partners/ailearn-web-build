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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/home",
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
        hash: 1793200714,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "join": "Rejoindre",
              "assign": "Attribuer",
              "create": "Créer",
              "register": "S'inscrire",
              "activities": "Générer des activités",
              "refine": "Affiner",
              "generate": "Générer",
              "save": "Enregistrer",
              "imported": "Importé",
              "edit": "Modifier",
              "delete": "Supprimer",
              "clean": "Nettoyer",
              "activity": "Activités",
              "update": "Télécharger un document",
              "next": "Suivant",
              "back": "Retour",
              "continue": "Continuer",
              "cancel": "Annuler",
              "link": "Lier",
              "gTooltip": "Classe importée de Google",
              "import": "Importer"
            },
            "assign": {
              "title": {
                "share": "Attribuer le module aux salles de classe",
                "dashboard": "Accéder au tableau de bord des attributions"
              },
              "assigned": "Attribué",
              "noAssigned": "Aucune salle de classe attribuée",
              "module": "Module",
              "messages": {
                "copied": "Lien copié dans le presse-papiers",
                "assigned": "Module attribué à la salle de classe {classroom}"
              },
              "item": {
                "description": "L'élément n'a pas de description"
              },
              "actions": {
                "dashboard": "Tableau de bord",
                "copy": "Copier le lien",
                "test": "Tester",
                "navigate": "Naviguer",
                "createClassroom": "Créer une salle de classe",
                "assign": {
                  "button": "Attribuer",
                  "label": "Le module n'a pas été attribué à cette salle de classe"
                }
              },
              "errors": {
                "default": "Le module n'a pas pu être attribué à cette salle de classe, veuillez réessayer plus tard ou contacter l'administrateur"
              },
              "empty": {
                "share": {
                  "text": "Attention",
                  "description": "Vous n'avez pas encore de salles de classe créées, vous devez en créer une pour pouvoir attribuer cette activité.",
                  "action": "Créer une salle de classe"
                },
                "dashboard": {
                  "description": "Module sans attributions"
                }
              }
            },
            "tour": {
              "buttons": {
                "nextBtnText": "Suivant",
                "prevBtnText": "Précédent",
                "doneBtnText": "Terminé"
              },
              "teacher": {
                "step0": {
                  "title": "Bienvenue dans votre profil",
                  "description": "Ici, vous pouvez personnaliser votre expérience dans AILearn. Vous pouvez mettre à jour vos informations personnelles, indiquer votre langue préférée, configurer les options d'accessibilité et ajuster la vitesse audio."
                },
                "drafts": {
                  "title": "Modules en brouillon",
                  "description": "Travaillez sur vos modules d'apprentissage en brouillon jusqu'à ce qu'ils soient prêts à être publiés et attribués à une salle de classe. Ils seront sauvegardés ici pour que vous puissiez les modifier selon vos besoins. Commencez par créer votre premier module !"
                },
                "community": {
                  "title": "Communauté",
                  "description": "Explorez notre collection de modules d'apprentissage créés par des experts. Trouvez une variété de contenus prêts à utiliser dans vos salles de classe. Vous pouvez modifier et personnaliser ces modules selon vos critères pour les adapter aux besoins de vos élèves."
                },
                "classrooms": {
                  "title": "Salles de classe",
                  "description": "Dans cet espace, vous pouvez créer des salles de classe où vous pouvez regrouper vos élèves et leur attribuer les modules d'apprentissage que vous publiez. Organisez vos cours efficacement et personnalisez-les. Commencez à créer vos salles de classe et transformez l'expérience éducative !"
                },
                "step3": {
                  "title": "Besoin d'aide ?",
                  "description": "Trouvez toutes les informations dans nos tutoriels conçus pour vous aider à tirer le meilleur parti d'AILearn. Apprenez à créer des modules d'apprentissage, gérer vos salles de classe et utiliser tous les outils que nous offrons. Explorez nos tutoriels et naviguez sur la plateforme !"
                },
                "modules": {
                  "title": "Mes modules d'apprentissage",
                  "description": "Cette section affichera les modules que l'utilisateur a créés."
                },
                "assignments": {
                  "title": "Mes devoirs",
                  "description": "Ici, vous pouvez voir tous les modules d'apprentissage qui vous ont été attribués dans vos salles de classe. Ces devoirs contiennent le contenu que vous devez compléter. Explorez vos devoirs et continuez votre parcours d'apprentissage !"
                }
              },
              "student": {
                "step0": {
                  "title": "Bienvenue dans votre profil",
                  "description": "Ici, vous pouvez personnaliser votre expérience dans AILearn. Vous pouvez mettre à jour vos informations personnelles, indiquer votre langue préférée, configurer les options d'accessibilité et ajuster la velocidad audio."
                },
                "classrooms": {
                  "title": "Salles de classe",
                  "description": "Ici, vous pouvez voir toutes les salles de classe auxquelles vous appartenez. Explorez les modules d'apprentissage attribués, examinez le contenu et restez à jour avec vos cours. Vous pouvez également rejoindre de nouvelles salles de classe en utilisant un code. Découvrez tout ce que vous pouvez apprendre dans vos salles de classe !"
                },
                "assignments": {
                  "title": "Mes devoirs",
                  "description": "Ici, vous pouvez voir tous les modules d'apprentissage qui vous ont été attribués dans vos salles de classe. Ces devoirs contiennent le contenu que vous devez compléter. Explorez vos devoirs et continuez votre parcours d'apprentissage !"
                }
              }
            },
            "errors": {
              "default": "L'opération a échoué. Veuillez réessayer."
            },
            "title": "Bienvenue !",
            "profile": {
              "edit": "Aller à mon profil"
            },
            "assignments": {
              "title": "Mes devoirs",
              "activities": "Mes activités",
              "actions": {
                "link": "Entrer"
              },
              "item": {
                "description": "Ce devoir n'a pas de description ou d'objectif"
              }
            },
            "modules": {
              "title": "Mes modules d'apprentissage",
              "empty": "Vous n'avez pas encore de modules d'apprentissage",
              "action": "Publier un module",
              "activities": "Mes activités",
              "items": {
                "description": "Ce module n'a pas de description ou d'objectif",
                "title": "Ce module n'a pas de titre"
              }
            },
            "drafts": {
              "title": "Mes brouillons",
              "empty": {
                "description": "Vous n'avez pas encore de brouillons",
                "action": "Créer un nouveau"
              },
              "action": "Créer",
              "items": {
                "description": "Ce module n'a pas de description ou d'objectif",
                "title": "Ce brouillon n'a pas de titre"
              }
            },
            "community": {
              "title": "Communauté",
              "actions": {
                "link": "Voir tout",
                "test": "Démo",
                "use": "Créer votre propre version"
              }
            },
            "classrooms": {
              "title": "Mes salles de classe",
              "action": "Créer",
              "actions": {
                "create": "Créer",
                "join": "Rejoindre"
              },
              "empty": {
                "description": "Regroupez vos élèves dans des espaces de travail et attribuez des modules d'apprentissage personnalisés.",
                "action": "Créez votre première salle de classe"
              },
              "items": {
                "description": "Cette salle de classe n'a pas de description ou d'objectif"
              }
            },
            "students": {
              "title": "Mes élèves"
            },
            "members": {
              "children": "Mes enfants"
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