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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.24"], ["@aimpact/ailearn-app", "0.3.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.24/auth-login",
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
        hash: 236848709,
        creator: function (require, exports) {
          exports.txt = {
            "footer": {
              "intro": "By creating an account you are agreeing to the ",
              "terms": "terms and conditions",
              "connector": "of service and the",
              "privacy": "privacy policy"
            },
            "tutorials": {
              "webinar": {
                "title": "Online webinar",
                "description": "Every Thursday 5.30 PM"
              },
              "teachers": "Tutorial for teachers",
              "students": "Tutorial for students"
            },
            "presentation": {
              "title": "We empower teaching and learning processes with Artificial Intelligence",
              "contents": "<strong>Create dynamic curricular contents</strong> and monitor students' learning process.",
              "experience": "<strong>Personalize the educational experience</strong>, adapting to students' learning pace and style.",
              "tutorials": {
                "webinar": {
                  "title": "Online webinar",
                  "description": "Visit our YouTube channel"
                },
                "teachers": "Tutorial for teachers",
                "students": "Tutorial for students"
              },
              "socialMedia": "Follow us on our social media"
            },
            "errors": {
              "unknown": "The action could not be completed. Please try again later."
            },
            "title": "Transforming education with the power of AI",
            "description": "Our platform offers both an assistant AI for teachers and an AI tutor for students. We aim to provide comprehensive support for both educators and learners alike.",
            "loginTitle": "Login",
            "subtitle": "Start your trial period",
            "emailLabel": "Email",
            "passwordLabel": "Password",
            "termsAndPrivacy": "By creating an account you agree to",
            "terms": "Terms of Service",
            "connector": "and",
            "policy": "Privacy Policy",
            "signInButton": "Sign in",
            "closeButton": "Close",
            "socialLoginTitle": "Or sign in with social login",
            "googleSignInButton": "Google Sign In",
            "emailSignInButton": "Continue with email",
            "facebookSignInButton": "Facebook Sign In",
            "forgotPasswordLink": "Forgot your password?",
            "createAccountLink": "Create a new account?",
            "theme": "theme Mode",
            "passwordConditions": {
              "title": "Password must contain",
              "minimumCharacters": "At least 8 characters",
              "minimumLetters": "At least one letter",
              "minimumSpecial": "At least one number or special character"
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