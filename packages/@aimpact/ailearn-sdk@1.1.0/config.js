System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-sdk",
        "version": "1.1.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "environment": "quality",
        "global.css": true,
        "params": {
          "baseUrl": "https://beta.app.rvd.ai",
          "apis": {
            "ailearn": "https://beta.ailearn.api.aimpact.partners",
            "chat": "https://beta.agents.api.aimpact.partners"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});