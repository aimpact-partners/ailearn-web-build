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
          "vspecifier": "@aimpact/ailearn-app@0.6.1/classrooms/view",
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
        hash: 2154938279,
        creator: function (require, exports) {
          exports.txt = {
            "coins": {
              "label": "Crédits disponibles",
              "assignments": "Devoirs",
              "modules": "Modules"
            },
            "errors": {
              "10003": "L'utilisateur n'a pas pu être approuvé, réessayez plus tard et si le problème persiste, contactez le support."
            },
            "form": {
              "title": "Inviter un utilisateur",
              "role": {
                "label": "Rôle",
                "placeholder": "Sélectionner le rôle"
              },
              "name": {
                "label": "Nom",
                "placeholder": "Saisir le nom d'utilisateur"
              },
              "email": {
                "label": "Email",
                "placeholder": "Saisir l'email de l'utilisateur"
              },
              "button": "Soumettre"
            },
            "forms": {
              "approve": {
                "title": "Voulez-vous approuver la demande de l'utilisateur ?",
                "description": "N'oubliez pas qu'approuver la demande de l'utilisateur modifie également son rôle et son accès dans la salle de classe."
              },
              "delete": {
                "title": "Voulez-vous supprimer l'utilisateur ?",
                "description": "N'oubliez pas que supprimer un utilisateur supprime également son accès et ses actions dans la salle de classe."
              },
              "cancel": {
                "title": "Voulez-vous annuler l'invitation de l'utilisateur ?",
                "description": "N'oubliez pas qu'annuler l'invitation de l'utilisateur annule également son accès et ses actions dans la salle de classe."
              },
              "reject": {
                "title": "Voulez-vous rejeter la demande de l'utilisateur ?",
                "description": "N'oubliez pas que rejeter la demande de l'utilisateur annule également son accès et ses actions dans la salle de classe."
              },
              "edit": {
                "title": "Voulez-vous changer le rôle de l'utilisateur ?",
                "info": "N'oubliez pas que changer le rôle modifie également l'accès et les actions de l'utilisateur dans la salle de classe."
              }
            },
            "editForm": {
              "title": "Voulez-vous changer le rôle de l'utilisateur ?",
              "info": "N'oubliez pas que changer le rôle modifie également l'accès et les actions de l'utilisateur dans la salle de classe."
            },
            "item": {
              "description": "Le module n'a pas encore de description"
            },
            "roles": {
              "all": {
                "identifier": "all",
                "title": "Tous",
                "entity": "Tous"
              },
              "manager": {
                "title": "Enseignants",
                "role": "Enseignant",
                "single": "Enseignant",
                "entity": "Enseignants",
                "identifier": "managers"
              },
              "member": {
                "title": "Étudiant",
                "identifier": "members",
                "entity": "Étudiants"
              },
              "pending": {
                "identifier": "pendings",
                "title": "En attente",
                "entity": "En attente"
              }
            },
            "list": {
              "manager": {
                "title": "Enseignants",
                "role": "Enseignant",
                "single": "Enseignant",
                "entity": "Enseignants"
              },
              "member": {
                "title": "Enseignants",
                "role": "Enseignant",
                "single": "Enseignant"
              },
              "pendings": {
                "title": "En attente",
                "invited": "Invité"
              }
            },
            "messages": {
              "approval": {
                "success": "Utilisateur approuvé avec succès",
                "error": "Erreur lors de l'approbation de l'utilisateur"
              },
              "copy": "Texte copié avec succès",
              "copyError": "Erreur lors de la copie dans le presse-papiers"
            },
            "ERR_GENERATING_ACTIVITIES": "Erreur lors de la génération des classes",
            "not_member": {
              "title": "Bonjour",
              "subtitle": "Il semble que vous n'ayez pas accès à",
              "description": "Vous n'avez pas accès à la salle de classe, vous devez le demander à l'enseignant et attendre qu'il confirme",
              "action": "Demander l'accès",
              "request": {
                "error": "Erreur lors de la demande d'accès, réessayez",
                "success": "Votre demande d'accès a été envoyée, attendez que l'enseignant confirme"
              }
            },
            "invited": {
              "title": "Bonjour",
              "subtitle": "Vous avez une invitation à rejoindre",
              "description": "Commencez votre expérience d'apprentissage assisté par IA, explorez du contenu conçu spécialement pour vous en participant à des activités interactives à votre propre rythme et selon votre style d'apprentissage.",
              "action": "Accéder"
            },
            "pending": {
              "title": "Bonjour",
              "subtitle": "Votre demande est en cours de traitement",
              "description": "Veuillez vérifier votre email pour confirmer l'approbation de votre demande. Si vous travaillez avec votre enseignant en ce moment, vous pouvez actualiser la page pour voir si vous avez déjà obtenu l'accès.",
              "action": "Actualiser"
            },
            "orgCode": "Code de la salle de classe",
            "title": "Ajouter un nom",
            "description": "Ajouter une description",
            "people": "Personnes",
            "viewAssignment": "Voir le devoir",
            "empty": {
              "assignments": {
                "title": "Aucun devoir disponible"
              },
              "rol": {
                "title": "Aucun membre enregistré avec ce profil"
              },
              "pending": {
                "title": "Aucun membre en attente de révision"
              }
            },
            "system": {
              "invite": {
                "success": "Invitation envoyée"
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