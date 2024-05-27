System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-sdk",
        "version": "1.0.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "environment": "development",
        "global.css": true,
        "params": {
          "baseUrl": "https://dev.app.rvd.ai",
          "apis": {
            "ailearn": "https://ailearn-http-v2-j2rcifstnq-uc.a.run.app",
            "chat": "https://chat-api-http-v2-rb5caohzgq-uc.a.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});