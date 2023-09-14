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
          "baseUrl": "http://localhost:4530",
          "apis": {
            "chat": "https://chat-api-http-v2-rb5caohzgq-uc.a.run.app"
          },
          "firebaseConfig": {
            "apiKey": "AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU",
            "authDomain": "aimpact-partners-dev.firebaseapp.com",
            "databaseURL": "https://aimpact-partners-dev-default-rtdb.firebaseio.com",
            "projectId": "aimpact-partners-dev",
            "storageBucket": "aimpact-partners-dev.appspot.com",
            "messagingSenderId": "1081434267674",
            "appId": "1:1081434267674:web:9396cc23e55385b5d171a3",
            "measurementId": "G-QLL5WFH89Y"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});