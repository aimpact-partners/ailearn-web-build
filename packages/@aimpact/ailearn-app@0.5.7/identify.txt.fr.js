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
          "vspecifier": "@aimpact/ailearn-app@0.5.7/identify",
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
        hash: 1571057973,
        creator: function (require, exports) {
          exports.txt = {
            "errors": {
              "ERROR_PUBLISHING": "La demande n'a pas pu être effectuée, veuillez réessayer plus tard",
              "INVALID_CODE": "Code incorrect",
              "ALREADY_WAITING": "Vous avez déjà fait la demande pour rejoindre l'organisation, attendez que l'administrateur vous accepte ou contactez-le",
              "ALREADY_MEMBER": "Vous êtes déjà membre de l'organisation",
              "ALREADY_WAITING_CLASSROOM": "Votre demande d'accès est encore en attente, contactez l'enseignant de la classe",
              "ALREADY_WAITING_ORG": "Vous avez déjà fait la demande pour rejoindre l'organisation, attendez que l'administrateur vous accepte ou contactez-le"
            },
            "institution": {
              "form": {
                "title": "Commencez un essai gratuit pour les institutions et explorez la transformation éducative",
                "description": "Accédez à un essai gratuit en remplissant le formulaire. Nous vous attribuerons les crédits nécessaires pour que vous puissiez expérimenter et partager avec vos enseignants l'assistance de l'Intelligence Artificielle dans votre espace éducatif. Vérifiez votre e-mail pour plus de détails.",
                "fields": {
                  "name": {
                    "label": "Nom de l'institution",
                    "errorMessage": "Champ requis"
                  },
                  "type": {
                    "label": "Type d'institution",
                    "errorMessage": "Champ requis"
                  },
                  "educationalLevel": {
                    "label": "Niveau d'enseignement",
                    "errorMessage": "Champ requis"
                  },
                  "geographicAddress": {
                    "label": "Adresse géographique"
                  },
                  "authorizedUser": {
                    "label": "Je suis un utilisateur autorisé par l'institution éducative"
                  },
                  "submit": {
                    "label": "ENVOYER LA DEMANDE"
                  }
                }
              },
              "title": "Demandez un essai gratuit pour les institutions et commencez à explorer la transformation éducative",
              "description": "Demandez l'accès à un essai gratuit en remplissant le formulaire. Une fois soumis, nous examinerons votre demande. N'oubliez pas de vérifier votre e-mail, où nous vous informerons de l'approbation de votre demande et vous attribuerons les crédits nécessaires pour que votre communauté éducative puisse expérimenter l'assistance de l'Intelligence Artificielle en classe."
            },
            "requested": {
              "teacher": {
                "title": "Félicitations ! Vous pouvez maintenant commencer votre période d'essai",
                "description": "Nous vous avons attribué <strong>{totalGenerative} crédits génératifs</strong> pour créer {totalGenerative} modules avec l'IA et <strong>{totalInteraction} crédits interactifs</strong> pour l'interaction avec l'IA de vos élèves."
              },
              "teacherInstitution": {
                "title": "Votre demande de rejoindre l'institution est en cours d'examen.",
                "description": "Veuillez attendre l'approbation de l'administrateur pour accéder à l'espace éducatif. <strong>Vérifiez votre e-mail</strong> où nous vous notifierons une fois que votre demande aura été approuvée pour pouvoir accéder à <strong>AILearn</strong>."
              },
              "teacherApproved": {
                "title": "Félicitations ! Votre demande a été approuvée",
                "description": "Vous faites maintenant partie de l'institution {organization}. Commencez à utiliser AILearn."
              },
              "student": {
                "title": "Votre demande de rejoindre la salle de classe est en cours d'examen.",
                "description": "Veuillez attendre l'approbation du professeur pour accéder à la salle de classe. <strong>Vérifiez votre e-mail</strong> où nous vous notifierons une fois que votre demande aura été approuvée pour pouvoir accéder à <strong>AILearn</strong>."
              },
              "studentApproved": {
                "title": "Félicitations ! Votre demande a été approuvée",
                "description": "Vous faites maintenant partie de la salle de classe. Commencez à utiliser AILearn."
              },
              "institution": {
                "title": "Félicitations ! Votre institution peut maintenant commencer sa période d'essai",
                "description": "Nous vous avons attribué pour votre période d'essai {totalGenerative} crédits pour créer {totalGenerative} modules avec l'IA et {totalInteraction} crédits pour l'interaction avec l'IA des élèves.",
                "start": "Commencer"
              }
            },
            "cards": {
              "student": {
                "icon": "student",
                "title": "Je suis un étudiant",
                "description": "Accédez aux contenus assignés par vos enseignants et apprenez à votre propre rythme avec l'orientation de l'IA."
              },
              "teacher": {
                "icon": "teacher",
                "title": "Je suis un enseignant",
                "description": "Créez du contenu éducatif et surveillez vos élèves avec l'assistance de l'IA."
              },
              "institution": {
                "icon": "institution",
                "title": "Je suis une institution",
                "description": "Ajoutez l'intelligence artificielle à votre offre éducative et permettez à votre communauté de générer du contenu assisté par l'IA."
              }
            },
            "student": {
              "selection": {
                "title": "Vous êtes sur le point de commencer le chemin vers la transformation éducative",
                "description": "Pour commencer votre expérience d'apprentissage avec AILearn, vous pouvez demander à l'enseignant le code d'accès à la classe et l'insérer pour continuer, ou demander le lien d'accès à une activité. Une fois que vous avez ces informations, vous pouvez entrer dans le module d'apprentissage et commencer à explorer le contenu conçu spécialement pour vous."
              },
              "form": {
                "title": "Commencez votre transformation éducative",
                "description": "Vous êtes sur le point de rejoindre l'espace éducatif de votre institution. Pour entrer dans AILearn, vous devez valider le code d'accès fourni par l'administrateur de votre institution.",
                "form": {
                  "legend": {
                    "title": "Vous n'avez pas votre code ?",
                    "description": "Demandez à votre enseignant le code d'accès ou le lien."
                  },
                  "action": "Entrer le code",
                  "error": {
                    "title": "Code incorrect.",
                    "description": "Veuillez vérifier le code et réessayer. Si le problème persiste, contactez l'administrateur de votre institution pour obtenir le bon code."
                  }
                }
              }
            },
            "teacher": {
              "form": {
                "title": "Commencez votre essai gratuit pour enseignants et explorez la transformation éducative",
                "description": "Accédez à un essai gratuit en remplissant le formulaire. Nous vous attribuerons les crédits nécessaires pour que vous puissiez expérimenter l'assistance de l'Intelligence Artificielle dans votre travail d'enseignant. Vérifiez votre e-mail pour plus de détails.",
                "fields": {
                  "role": {
                    "label": "Poste",
                    "errorMessage": "Champ requis"
                  },
                  "grade": {
                    "label": "Niveau d'enseignement",
                    "errorMessage": "Champ requis"
                  },
                  "curricularArea": {
                    "label": "Domaine disciplinaire",
                    "errorMessage": "Champ requis"
                  },
                  "name": {
                    "label": "Nom de l'institution",
                    "errorMessage": "Champ requis"
                  },
                  "type": {
                    "label": "Type d'institution",
                    "errorMessage": "Champ requis"
                  },
                  "address": {
                    "label": "Adresse géographique",
                    "errorMessage": "Champ requis"
                  },
                  "submit": {
                    "label": "ENVOYER LA DEMANDE",
                    "errorMessage": ""
                  }
                }
              },
              "institution": {
                "intro": {
                  "hello": "Bonjour {username}",
                  "title": "Votre institution utilise-t-elle AILearn ?",
                  "description": "Mon institution utilise déjà <strong>AILearn</strong> Rivadavia et je souhaite rejoindre son espace éducatif.",
                  "options": {
                    "yes": {
                      "label": "Oui",
                      "description": "Mon institution utilise déjà <strong>AILearn</strong> et je souhaite rejoindre son espace éducatif."
                    },
                    "no": {
                      "label": "Non",
                      "description": "Mon institution n'utilise pas <strong>AILearn</strong>. Je souhaite rejoindre l'outil en tant qu'enseignant indépendant."
                    }
                  }
                },
                "form": {
                  "title": "Commencez la transformation éducative",
                  "description": "Vous êtes sur le point de rejoindre l'espace éducatif de votre institution. Pour accéder à AILearn, vous devez valider le code d'accès fourni par l'administrateur de votre institution.",
                  "form": {
                    "legend": {
                      "title": "Vous n'avez pas votre code ?",
                      "description": "Vérifiez votre e-mail ou contactez l'administrateur de votre institution si vous n'avez pas encore reçu l'invitation."
                    },
                    "action": "Entrer le code",
                    "error": {
                      "title": "Code incorrect.",
                      "description": "Veuillez vérifier le code et réessayer. Si le problème persiste, contactez l'administrateur de votre institution pour obtenir le bon code."
                    }
                  }
                }
              },
              "actions": {
                "continue": "Continuer"
              },
              "welcome": {
                "user": {
                  "hello": "Bonjour {username} !",
                  "description": "Bienvenue sur AILearn"
                }
              },
              "processed": {
                "title": "Vous avez déjà des crédits IA attribués à votre profil !",
                "subtitle": "Nous avons attribué à votre période d'essai :",
                "description": "{totalGenerative} crédits pour créer 5 modules avec l'IA et {totalInteraction} crédits pour l'interaction avec l'IA de vos élèves."
              }
            },
            "title": "Bienvenue !",
            "subtitle": "Sélectionnez votre rôle dans le domaine éducatif",
            "back": "Retour",
            "welcome": {
              "hello": "Bonjour {username} !",
              "description": "Bienvenue sur AILearn"
            },
            "actions": {
              "accept": "ACCEPTER",
              "back": "RETOUR",
              "continue": "Continuer",
              "join": "Envoyer la demande",
              "start": "Commencer"
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