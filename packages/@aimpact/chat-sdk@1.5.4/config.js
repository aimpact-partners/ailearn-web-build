System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat-sdk",
        "version": "1.5.4",
        "languages": {
          "default": "en",
          "supported": ["en", "es", "pr"]
        },
        "environment": "quality",
        "global.css": true,
        "layout": "main-layout",
        "params": {
          "project": "betterMind",
          "baseUrl": "https://beta.app.rvd.ai",
          "apis": {
            "chat": "https://chat-api-http-beta-pjv2z6fura-uc.a.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});