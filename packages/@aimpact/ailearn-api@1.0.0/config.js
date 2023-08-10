System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-api",
        "version": "1.0.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "params": {
          "chatAPI": "https://chat-api-http-6dlchqr2za-uc.a.run.app"
        },
        "ssr": {},
        "backend": {
          "host": "https://ailearn-api-ws-6dlchqr2za-uc.a.run.app"
        }
      });
    }
  };
});