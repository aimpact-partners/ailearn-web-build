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
            "ailearn": "https://ailearn.api.aimpact.partners",
            "chat": "https://agents.api.aimpact.partners"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});