System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-api",
        "version": "0.9.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "environment": "development",
        "global.css": true,
        "params": {
          "applicationName": "RVD.AI",
          "versions": {
            "terms": 1,
            "data": 1
          },
          "applicationUrl": "https://dev.app.rvd.ai",
          "chatAPI": "https://dev.agents.api.aimpact.partners",
          "baseUrl": "https://dev.ailearn.api.aimpact.partners"
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});