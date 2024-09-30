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
        "environment": "local",
        "global.css": true,
        "params": {
          "baseUrl": "http://localhost:4530",
          "apis": {
            "ailearn": "https://dev.ailearn.api.aimpact.partners",
            "chat": "https://dev.agents.api.aimpact.partners"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});