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
        const dependencies = new Map([["@beyond-js/reactive", "1.1.10"], ["@aimpact/chat-api", "0.3.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/auth", "1.7.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.46.dev-16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/documents",
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
        hash: 2311761067,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "search": "Search documents",
              "upload": "Upload documents",
              "close": "Close",
              "copy": "Copy link"
            },
            "empty": {
              "start": "Let's start Now!",
              "noResult": "No folder found.",
              "sub": "There are no knowledge box in your space yet.",
              "desc": "You can start by creating your first knowledge box now.",
              "upload": "Upload Content"
            },
            "folder": {
              "empty": "This folder is empty",
              "actions": {
                "add": "Add chat",
                "upload": "Upload file",
                "delete": "Delete folder",
                "share": "Share folder"
              },
              "views": {
                "list": "List view",
                "grid": "Grid view"
              },
              "table": {
                "header": {
                  "name": "Name",
                  "date": "Date",
                  "format": "Format",
                  "size": "Size",
                  "actions": "Actions"
                }
              }
            },
            "home": {
              "title": "Documents",
              "search": "Search documents",
              "upload": "Upload Content"
            },
            "kbs": {
              "empty": "This folder is empty",
              "new": "Create a new Knowledge Box"
            },
            "confirmation": {
              "delete": "Are you sure you want to delete"
            },
            "upload": {
              "title": "Upload Content",
              "action": "Upload file",
              "drag": "Drag and drop or upload a document to the folder to create it",
              "help": "You can upload documents in PDF, TXT, DOC formats. Remember that the maximum allowed file size is 10 MB.",
              "save": "Save",
              "input": "Indicate the Knowledge Box name",
              "cancel": "Cancel",
              "success": "Files uploaded successfully!",
              "error": "'An error occurred while upfetching your files :'("
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