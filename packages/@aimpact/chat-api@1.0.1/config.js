System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat-api",
        "version": "1.0.1",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "params": {
          "AGENT_API": "https://agent-api-rb5caohzgq-uc.a.run.app/agent"
        },
        "ssr": {},
        "backend": {
          "host": "https://chat-api-ws-v2-rb5caohzgq-uc.a.run.app"
        }
      });
    }
  };
});