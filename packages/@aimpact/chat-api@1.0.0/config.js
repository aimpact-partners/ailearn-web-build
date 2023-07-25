System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat-api",
        "version": "1.0.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "params": {
          "AGENT_API": "https://agent-6dlchqr2za-uc.a.run.app/agent"
        },
        "ssr": {},
        "backend": {
          "host": "https://chat-api-ws-6dlchqr2za-uc.a.run.app"
        }
      });
    }
  };
});