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
          "supported": ["en", "es", "pr"]
        },
        "global.css": true,
        "layout": "main-layout",
        "params": {
          "baseUrl": "https://dev.app.rvd.ai",
          "apis": {
            "chat": "https://chat-api-http-v2-rb5caohzgq-uc.a.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});