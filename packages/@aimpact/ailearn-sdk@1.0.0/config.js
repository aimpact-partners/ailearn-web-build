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
        "environment": "testing",
        "global.css": true,
        "params": {
          "baseUrl": "https://test.app.rvd.ai",
          "apis": {
            "ailearn": "https://test.ailearn.api.aimpact.partners",
            "chat": "https://test.agents.api.aimpact.partners"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});