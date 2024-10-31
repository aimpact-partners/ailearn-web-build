System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.9"], ["@aimpact/ailearn-app", "0.1.9"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.9/assignment/view",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 122268233,
        creator: function (require, exports) {
          exports.txt = {
            "breadcrumb": {
              "modules": "Módulos",
              "management": "Gestión",
              "assignment": "Asignaciones",
              "chat": "Chat"
            },
            "not_member": {
              "title": "Hola",
              "subtitle": "Parece que aún no tienes acceso a",
              "description": "No tienes acceso al aula, debes solicitarlo al docente y esperar a que él lo confirme",
              "action": "Solicitar acceso",
              "request": {
                "error": "Error al solicitar acceso, inténtalo de nuevo",
                "success": "Tu solicitud de acceso ha sido enviada, espera a que el docente la confirme"
              }
            },
            "invited": {
              "title": "Hola",
              "subtitle": "Tienes una invitación para unirte",
              "description": "Inicia tu experiencia de aprendizaje asistido por IA, explora contenido diseñado especialmente para ti participando en actividades interactivas a tu propio ritmo y según tu estilo de aprendizaje.",
              "action": "Acceder"
            },
            "pending": {
              "title": "Hola",
              "subtitle": "Tu solicitud está siendo procesada",
              "description": "Por favor, revisa tu correo electrónico para verificar la aprobación de tu solicitud. Si estás trabajando con tu docente en este momento, puedes refrescar la página para ver si ya te han dado acceso.",
              "action": "Refrescar"
            },
            "module": {
              "description": "Descripción",
              "objective": "Objetivo"
            },
            "activities": {
              "title": "Listado de actividades"
            },
            "empty": "No tienes trabajos de clase todavía",
            "access": "Acceder",
            "description": "Aqui encontraras los Módulos de aprendizaje que tu docente te compartirá para poder trabajar los objetivos curriculares. Ingresá a los diferentes classrooms y diviertete aprendiendo con tu tutor.",
            "textCounter": "Actividad ",
            "moduleSubtitleText": "Actividades",
            "accessed": "Ya puedes acceder a las actividades",
            "moduleAccess": "Access"
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./txt",
        "from": "txt",
        "name": "txt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});