System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-api",
        "version": "0.2.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "params": {
          "chatAPI": "http://localhost:5040",
          "baseUrl": "http://localhost:5050"
        },
        "ssr": {},
        "backend": {
          "host": "http://localhost:5050"
        }
      });
    }
  };
});