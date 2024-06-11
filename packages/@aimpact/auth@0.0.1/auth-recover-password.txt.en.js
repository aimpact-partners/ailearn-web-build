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
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.0.46.dev-16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-recover-password",
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
        hash: 196179541,
        creator: function (require, exports) {
          exports.txt = {
            "theme": "%them Mode",
            "title": "Enter New Password",
            "subTitle": "Your new password must be different from previously used password",
            "labelPassword": "New Password",
            "labelConfirmPassword": "Confirm Password",
            "recoveryButton": "Submit",
            "empty": {
              "title": "Oops!",
              "description": "The requested token could not be found. Please generate a new token and check your email.",
              "back": "Go Back"
            },
            "passwordConditions": {
              "title": "Password must contain",
              "minimumCharacters": "From 8 to 32 characters",
              "minimumLetters": "At least one uppercase and one lowercase letter",
              "minimumSpecial": "At least one number and one special character"
            },
            "errorMessages": {
              "match": "Passwords do not match.",
              "minimumCharacters": "Password must be between 8 and 32 characters.",
              "minimumLetters": "Must include at least 1 uppercase and 1 lowercase letter.",
              "minimumNumbers": "Must include at least 1 number and 1 special character.",
              "minimumSpecial": "Must include at least 1 special character.",
              "minimumUpper": "Must include at least 1 uppercase letter.",
              "minimumLower": "Must include at least 1 lowercase letter.",
              "lostConnection": "We lost internet connection. Check router or connection.",
              "internalFail": "An internal error has occurred. We are working to resolve it. Try again later or contact customer support."
            },
            "wellDone": {
              "title": "Password Changed Successfully!",
              "subtitle": "Welcome back!",
              "message": "Hooray! Your password has been changed successfully. Thanks a bunch for choosing our application! We're thrilled to have you back. Remember, we're always here to make your experience amazing. 🚀"
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