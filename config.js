System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-app",
        "version": "0.0.1",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "layout": "main-layout",
        "params": {
          "config": {
            "system": true
          },
          "container": "file",
          "project": "ailearn-estrada",
          "url": "https://documents-6dlchqr2za-uc.a.run.app/upload",
          "DOCUMENTS_SERVER": "https://documents-6dlchqr2za-uc.a.run.app",
          "CHAT_API_SERVER": "https://chat-api-http-6dlchqr2za-uc.a.run.app/upload",
          "elevenlabs": {
            "key": "ebe05ca0a4d9aafb4024d0666471a0c7",
            "id": "pNInz6obpgDQGcFmaJgB"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});