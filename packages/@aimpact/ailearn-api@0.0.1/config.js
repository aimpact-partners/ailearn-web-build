System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-api",
        "version": "0.0.1",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "params": {},
        "ssr": {},
        "backend": {
		  "host": "https://ailearn-api-ws-build-rb5caohzgq-uc.a.run.app"
		}
      });
    }
  };
});