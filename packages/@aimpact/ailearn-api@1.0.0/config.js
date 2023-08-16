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
          "chatAPI": "https://chat-api-http-rb5caohzgq-uc.a.run.app",
          "baseUrl": "https://ailearn-http-v2-6dlchqr2za-uc.a.run.app"
        },
        "ssr": {},
        "backend": {
          "host": "https://ailearn-ws-v2-6dlchqr2za-uc.a.run.app"
        }
      });
    }
  };
});