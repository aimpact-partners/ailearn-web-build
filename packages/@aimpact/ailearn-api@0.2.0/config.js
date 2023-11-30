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
        "params": {},
        "ssr": {},
        "backend": {
          "host": "https://ailearn-ws-production"
        }
      });
    }
  };
});