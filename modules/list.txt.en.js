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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-09"], ["@aimpact/ailearn-app", "0.0.46.dev-09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-09/modules/list",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('en');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 157139102,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "assign": "Assign",
              "use": "Use",
              "continue": "Continue",
              "create": "Create",
              "delete": "Delete item"
            },
            "assign": {
              "title": "Classrooms list",
              "noAssigned": "No assigned classrooms",
              "module": "Module",
              "item": {
                "description": "The item does not have description"
              },
              "messages": {
                "copied": "Link copied to clipboard",
                "assigned": "Classroom assigned"
              },
              "actions": {
                "dashboard": "Dashboard",
                "copy": "Copy link",
                "test": "Test",
                "navigate": "Navigate",
                "assign": {
                  "button": "Assign",
                  "label": "The module has not been assigned to this Classroom"
                }
              },
              "errors": {
                "default": "The module could not be assigned to this Classroom, please try again later or contact the administrator"
              }
            },
            "breadcrumb": {
              "modules": "Modules",
              "management": "Management",
              "assignment": "Assignment",
              "chat": "Chat"
            },
            "errors": {
              "default": "Operation failed. Please try again.",
              "ERROR_GETTING_URL": "Error getting url"
            },
            "title": "My Learning Modules",
            "tabs": {
              "drafts": "Drafts",
              "published": "Published",
              "community": "Library"
            },
            "loading": {
              "title": "Loading Data",
              "description": "We are loading your data. Please wait for a moment."
            },
            "item": {
              "description": "The module does not have a description yet"
            },
            "empty": {
              "general": {
                "title": "Create Your First Module",
                "description": "Modernize your teaching approach by bringing your first module to life. Unleash your creativity, shape your content, and enjoy the experience of learning! "
              },
              "drafts": {
                "title": "No Drafts Yet",
                "description": "You don't have any drafts at the moment. Start creating and perfecting your content before publishing. "
              },
              "published": {
                "title": "No Published Modules",
                "description": "There are no published modules available. Work on each module and publish them to update this list of publications. "
              },
              "community": {
                "title": "No Modules in the Community",
                "description": "There are no modules available in the community. Share your modules with the community and discover modules from other authors! "
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