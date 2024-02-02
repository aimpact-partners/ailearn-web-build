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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["socket.io-client", "4.7.3"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-login",
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
        hash: 2243211256,
        creator: function (require, exports) {
          exports.txt = {
            "title": "Transforming education with the power of AI",
            "description": "Our platform offers both an assistant AI for teachers and an AI tutor for students. We aim to provide comprehensive support for both educators and learners alike.",
            "loginTitle": "Login",
            "emailLabel": "Email",
            "passwordLabel": "Password",
            "termsAndPrivacy": "By creating an account you agree to our Terms of Service and Privacy Policy",
            "signInButton": "Sign in",
            "closeButton": "Close",
            "socialLoginTitle": "Or sign in with social login",
            "googleSignInButton": "Google Sign In",
            "emailSignInButton": "Continue with email",
            "facebookSignInButton": "Facebook Sign In",
            "forgotPasswordLink": "Forgot your password?",
            "createAccountLink": "Create a new account?",
            "theme": "%them Mode",
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