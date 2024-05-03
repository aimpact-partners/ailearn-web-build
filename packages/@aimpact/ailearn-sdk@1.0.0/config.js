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
        "environment": "development",
        "global.css": true,
        "params": {
          "ailearnAPI": "https://ailearn-http-v2-j2rcifstnq-uc.a.run.app"
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});