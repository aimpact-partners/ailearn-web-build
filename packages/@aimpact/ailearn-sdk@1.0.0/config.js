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
          "ailearnAPI": "https://ailearn-http-v2-6dlchqr2za-uc.a.run.app"
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});