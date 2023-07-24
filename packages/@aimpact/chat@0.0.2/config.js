System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat",
        "version": "0.0.2",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "layout": "default-layout",
        "params": {
          "config": {
            "system": true
          },
          "container": "file",
          "project": "ailearn-estrada",
          "url": "http://localhost:5020/upload",
          "DOCUMENTS_SERVER": "http://localhost:5020",
          "CHAT_API_SERVER": "http://localhost:5040/upload",
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