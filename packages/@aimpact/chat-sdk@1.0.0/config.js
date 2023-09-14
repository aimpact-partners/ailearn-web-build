System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat-sdk",
        "version": "1.0.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "layout": "main-layout",
        "params": {
          "baseUrl": "https://test.app.rvd.ai",
          "apis": {
            "chat": "https://chat-api-http-skvkre4apq-uc.a.run.app"
          },
          "firebaseConfig": {
            "apiKey": "AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0",
            "authDomain": "chat-api-test-393820.firebaseapp.com",
            "projectId": "chat-api-test-393820",
            "storageBucket": "chat-api-test-393820.appspot.com",
            "messagingSenderId": "1083395329827",
            "appId": "1:1083395329827:web:c6fead0e2d4124b4f90696"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});