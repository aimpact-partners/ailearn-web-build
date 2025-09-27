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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dayjs", "1.11.13"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.8"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/chat-component",
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
        hash: 2232916900,
        creator: function (require, exports) {
          exports.txt = {
            "permissions": {
              "intro": "Permissions d'accès",
              "title": "Activation vocale",
              "description": "Activez le microphone pour améliorer votre expérience en interagissant via des commandes vocales.",
              "concedded": {
                "title": "Prêt !",
                "description": "Vous pouvez maintenant profiter de l'activation vocale."
              },
              "error": {
                "title": "Nous n'avons pas accès au microphone",
                "description": "Pour activer la fonction vocale, nous avons besoin d'accéder à votre microphone. Veuillez l'activer dans les paramètres de votre navigateur et actualiser la page."
              }
            },
            "systemActions": {
              "kb-response": "Données obtenues de la base de connaissances : ",
              "fetching-tool-data": "Je vais interroger les documents de la classe",
              "kb-processed-response": "Analyse du contenu terminée",
              "transcription": "Obtention de la transcription",
              "functions": {
                "kb": "Interrogation de la base de connaissances sur : "
              }
            },
            "system": {
              "success": "Système mis à jour avec succès"
            },
            "assistant": {
              "title": "Mission de l'assistant",
              "message": "La mission que l'agent aura pour interagir dans le chat"
            },
            "errors": {
              "default": "Une erreur s'est produite, veuillez réessayer"
            },
            "actions": {
              "retry": "Réessayer"
            },
            "message": {
              "transcribing": "Transcription en cours..."
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