System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-app",
        "version": "1.0.0",
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
          },
          "baseUrl": "https://ailearn-test.netlify.app/",
          "apis": {
            "ailearn": "https://ailearn-http-v2-6dlchqr2za-uc.a.run.app",
            "chat": "https://chat-api-http-6dlchqr2za-uc.a.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});