System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "0.0.1"], ["@aimpact/ailearn-api", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["firebase", "10.0.0"], ["highlight.js", "11.8.0"], ["firebase-admin", "11.10.1"], ["marked", "5.1.1"], ["marked-mangle", "1.1.0"], ["dompurify", "3.0.5"], ["marked-highlight", "2.0.1"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/list",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 2025048887,
        creator: function (require, exports) {
          exports.txt = {
            "classes": {
              "search": "Buscar Clases",
              "topics-list": "Ver lista de temas",
              "classes": "Clases",
              "status": "Status",
              "create": "Creá",
              "elements": {
                "relevance": "Relevancia",
                "synthesis": "Sintesis",
                "assessment": "Evaluación"
              },
              "share": {
                "header": "Compartí tu clase",
                "title": "Compartí tu clase con tus estudiantes",
                "description": "Copiá el link de abajo y compartilo con tus estudiantes",
                "close": "Cerrar",
                "copy": "Copiar Link"
              }
            },
            "topics": {
              "elements": {
                "relevance": "Relevancia",
                "synthesis": "Sintesis",
                "prerequisites": "Prerrequisitos"
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