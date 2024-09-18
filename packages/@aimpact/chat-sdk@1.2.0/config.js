System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat-sdk",
        "version": "1.2.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es", "pr"]
        },
        "environment": "production",
        "global.css": true,
        "layout": "main-layout",
        "params": {
          "elevenlabs": {
            "key": "ebe05ca0a4d9aafb4024d0666471a0c7",
            "id": "pNInz6obpgDQGcFmaJgB"
          },
          "baseUrl": "https://app.rvd.ai",
          "apis": {
            "chat": "https://chat-api-http-pjv2z6fura-uc.a.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});