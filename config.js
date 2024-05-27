System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/ailearn-app",
        "version": "0.0.43",
        "languages": {
          "default": "en",
          "supported": ["en", "es", "pr"]
        },
        "environment": "development",
        "global.css": true,
        "params": {
          "config": {
            "system": false
          },
          "container": "file",
          "project": "ailearn-estrada",
          "APP_NAME": "RVD.AI",
          "APP_LOGO": "/assets/rvd/rvd.png",
          "url": "https://documents-rb5caohzgq-wl.a.run.app/upload",
          "DOCUMENTS_SERVER": "https://documents-rb5caohzgq-wl.a.run.app",
          "CHAT_API_SERVER": "https://chat-api-http-v2-rb5caohzgq-uc.a.run.app/upload",
          "elevenlabs": {
            "key": "ebe05ca0a4d9aafb4024d0666471a0c7",
            "id": "pNInz6obpgDQGcFmaJgB"
          },
          "baseUrl": "https://dev.app.rvd.ai",
          "apis": {
            "ailearn": "https://ailearn-http-v2-j2rcifstnq-uc.a.run.app",
            "chat": "https://chat-api-http-v2-rb5caohzgq-uc.a.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});