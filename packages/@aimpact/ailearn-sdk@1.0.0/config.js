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
            "ailearn": "https://ailearn-http-v2-j2rcifstnq-uc.a.run.app",
            "chat": "https://dev.agents.api.aimpact.partners"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});