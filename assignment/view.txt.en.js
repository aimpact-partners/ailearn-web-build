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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.03"], ["@aimpact/ailearn-app", "0.1.3-test.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.03/assignment/view",
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
        hash: 132333248,
        creator: function (require, exports) {
          exports.txt = {
            "breadcrumb": {
              "modules": "Modules",
              "management": "Management",
              "assignment": "Assignment",
              "chat": "Chat"
            },
            "not_member": {
              "title": "Hello",
              "subtitle": "Parece que aún no tienes acceso a",
              "description": "You do not have access to the classroom, you must request it from the teacher and wait for him to confirm",
              "action": "Request access",
              "request": {
                "error": "Error requesting access, try again",
                "success": "Your access request has been sent, wait for the teacher to confirm"
              }
            },
            "invited": {
              "title": "Hello",
              "subtitle": "You have an invitation to join",
              "description": "Start your AI-assisted learning experience, explore content designed especially for you by participating in interactive activities at your own pace and according to your learning style.",
              "action": "Access"
            },
            "pending": {
              "title": "Hello",
              "subtitle": "Your request is being processed ",
              "description": "Please check your email to verify the approval of your request. If you are working with your teacher at this time, you can refresh the page to see if you have already been granted access.",
              "action": "Refresh"
            },
            "module": {
              "description": "Description",
              "objective": "Objective"
            },
            "activities": {
              "title": "List of activities"
            },
            "empty": "You don't have classworks yet",
            "access": "Access",
            "description": "Here you will find the Learning Modules that your teacher will share with you in order to work on the curricular objectives. Enter the different classrooms and have fun learning with your tutor.",
            "dividerTitle": "Activities",
            "textCounter": "Activity ",
            "moduleSubtitleText": "Activities",
            "accessed": "You can now access the activities",
            "moduleAccess": "Access"
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