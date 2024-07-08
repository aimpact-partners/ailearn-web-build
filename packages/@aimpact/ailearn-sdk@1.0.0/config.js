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
        "environment": "production",
        "global.css": true,
        "params": {
          "baseUrl": "https://app.rvd.ai",
          "apis": {
            "ailearn": "https://ailearn-http-d7gw5k2ica-uc.a.run.app",
            "chat": "https://chat-api-http-pjv2z6fura-uc.a.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});