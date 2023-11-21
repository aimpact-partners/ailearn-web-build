System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat",
        "version": "1.0.1",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "layout": "default-layout",
        "params": {
          "config": {
            "system": false
          },
          "container": "file",
          "project": "ailearn-estrada",
          "url": "https://documents-rb5caohzgq-wl.a.run.app/upload",
          "DOCUMENTS_SERVER": "https://documents-rb5caohzgq-wl.a.run.app",
          "CHAT_API_SERVER": "https://chat-api-http-v2-rb5caohzgq-uc.a.run.app/upload",
          "elevenlabs": {
            "key": "ebe05ca0a4d9aafb4024d0666471a0c7",
            "id": "pNInz6obpgDQGcFmaJgB"
          },
          "baseUrl": "https://app.rvd.ai",
          "apis": {
            "chat": "https://chat-api-http-pjv2z6fura-uc.a.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});