System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, ICONS, AppIcon, AppIconButton, AppButton, __beyond_pkg, hmr;
  _export({
    ICONS: void 0,
    AppIcon: void 0,
    AppIconButton: void 0,
    AppButton: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_2 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_3 = _pragmateUi100Beta2Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.14"], ["@aimpact/ailearn-app", "0.1.6-dev.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.14/components/icons"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/components', dependency_3]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./activities
      ****************************/
      ims.set('./activities', {
        hash: 4115678282,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ACTIVITY_ICONS = void 0;
          const ACTIVITY_ICONS = exports.ACTIVITY_ICONS = {
            spoken: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M680-560q-33 0-56.5-23T600-640v-160q0-34 23.5-57t56.5-23q34 0 57 23t23 57v160q0 34-23 57t-57 23ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320v80H200v640h440v-80h80v80q0 33-23.5 56.5T640-80H200Zm80-160v-80h280v80H280Zm0-120v-80h200v80H280Zm440 40h-80v-104q-77-14-128.5-74.5T460-640h80q0 58 41 99t99 41q59 0 99.5-41t40.5-99h80q0 81-51 141.5T720-424v104Z"/>'
            },
            'multiple-choice': {
              viewBox: '0 -960 960 960',
              icon: '<path d="m576-160-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm79-360L513-662l56-56 85 85 170-170 56 57-225 226ZM80-280v-80h360v80H80Zm0-320v-80h360v80H80Z"/>'
            },
            'character-talk': {
              viewBox: '0 -960 960 960',
              icon: '<path d="M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v600L720-240H280ZM80-280v-560q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240L80-280Zm520-240v-280H160v280h440Zm-440 0v-280 280Z"/>'
            },
            debate: {
              viewBox: '0 -960 960 960',
              icon: '<path d="m408-432-42-42q8-11 11-22.5t3-23.5q0-12-3-23.5T366-565l42-43q16 19 24 42t8 46q0 23-8 45.5T408-432Zm85 86-43-43q25-28 37.5-62t12.5-69q0-35-12.5-68.5T450-650l43-43q34 37 50.5 81.5T560-520q0 47-16.5 92T493-346ZM200-480q-33 0-56.5-23.5T120-560q0-33 23.5-56.5T200-640q33 0 56.5 23.5T280-560q0 33-23.5 56.5T200-480ZM40-320v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H40Zm720-160q-33 0-56.5-23.5T680-560q0-33 23.5-56.5T760-640q33 0 56.5 23.5T840-560q0 33-23.5 56.5T760-480ZM600-320v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H600Z"/>'
            },
            'content-theory': {
              viewBox: '0 -960 960 960',
              icon: '<path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>'
            },
            activities: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z"/>'
            }
          };
        }
      });

      /**************************
      INTERNAL MODULE: ./entities
      **************************/

      ims.set('./entities', {
        hash: 2657808070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ENTITIY_ICONS = void 0;
          const ENTITIY_ICONS = exports.ENTITIY_ICONS = {
            admin: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M480-440q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0-80q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0 440q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-400Zm0-315-240 90v189q0 54 15 105t41 96q42-21 88-33t96-12q50 0 96 12t88 33q26-45 41-96t15-105v-189l-240-90Zm0 515q-36 0-70 8t-65 22q29 30 63 52t72 34q38-12 72-34t63-52q-31-14-65-22t-70-8Z"/>'
            },
            classroom: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/>'
            },
            draft: {
              viewBox: '0 -960 960 960',
              icon: `<g><path
        id="path833"
        style="stroke-width:1"
        d="m 139.57032,-833.55468 c -22,0 -40.817704,7.84896 -56.484376,23.51562 -15.666664,15.66668 -23.515624,34.48438 -23.515624,56.48438 v 480 c 0,22 7.848956,40.81772 23.515624,56.48436 15.666672,15.66668 34.484376,23.51564 56.484376,23.51564 h 328.51564 a 267.72565,267.72565 0 0 1 -30.07812,-80 H 139.57032 v -480 h 207.03125 l 79.99999,80 h 352.96876 v 91.40624 a 267.72565,267.72565 0 0 1 80,40.54688 v -131.95312 c 0,-22 -7.84896,-40.8177 -23.51564,-56.48438 -15.66664,-15.66666 -34.48436,-23.51562 -56.48436,-23.51562 h -320 l -80,-80 z m 80,240 v 80 h 160 v -80 z m 480.85936,67.10936 c -55.33328,0 -102.48436,19.51564 -141.48436,58.51564 -39,39 -58.51564,86.15104 -58.51564,141.48436 0,55.33336 19.51564,102.56252 58.51564,141.56252 39,39 86.15108,58.43748 141.48436,58.43748 55.33332,0 102.4844,-19.43748 141.4844,-58.43748 39,-39 58.5156,-86.22916 58.5156,-141.56252 0,-55.33332 -19.5156,-102.48436 -58.5156,-141.48436 -39,-39 -86.15108,-58.51564 -141.4844,-58.51564 z m -480.85936,92.89064 v 80 h 80 v -80 z m 370.85936,77.10936 c 8.00004,0 15.01564,3.0624 21.01564,9.06252 6,6 8.98436,12.93748 8.98436,20.93748 0,8 -2.9844,15.01564 -8.98436,21.01564 -6,6 -13.0156,8.98436 -21.01564,8.98436 -8,0 -15.0156,-2.9844 -21.0156,-8.98436 -6,-6 -8.9844,-13.01564 -8.9844,-21.01564 0,-8 2.9844,-14.93748 8.9844,-20.93748 6,-6 13.0156,-9.06252 21.0156,-9.06252 z m 110,0 c 8,0 15.01564,3.0624 21.01564,9.06252 6,6 8.98436,12.93748 8.98436,20.93748 0,8 -2.9844,15.01564 -8.98436,21.01564 -6,6 -13.01564,8.98436 -21.01564,8.98436 -8,0 -15.0156,-2.9844 -21.0156,-8.98436 -6,-6 -8.9844,-13.01564 -8.9844,-21.01564 0,-8 2.9844,-14.93748 8.9844,-20.93748 6,-6 13.0156,-9.06252 21.0156,-9.06252 z m 110,0 c 8,0 15.01564,3.0624 21.01564,9.06252 6,6 8.98436,12.93748 8.98436,20.93748 0,8 -2.9844,15.01564 -8.98436,21.01564 -6,6 -13.01564,8.98436 -21.01564,8.98436 -8,0 -15.0156,-2.9844 -21.0156,-8.98436 -6,-6 -8.9844,-13.01564 -8.9844,-21.01564 0,-8 2.9844,-14.93748 8.9844,-20.93748 6,-6 13.0156,-9.06252 21.0156,-9.06252 z" />
     <path
        d="m 1846.2735,-280.74971 h 320 v -80 h -320 z m 0,-160 h 480 v -80 h -480 z m -80,320 q -33,0 -56.5,-23.5 -23.5,-23.5 -23.5,-56.5 v -480 q 0,-33 23.5,-56.5 23.5,-23.5 56.5,-23.5 h 240 l 80,80 h 320 q 33,0 56.5,23.5 23.5,23.5 23.5,56.5 v 400 q 0,33 -23.5,56.5 -23.5,23.5 -56.5,23.5 z m 0,-80 h 640 v -400 h -353 l -80,-80 h -207 z m 0,0 v -480 z"
        id="path833-7"
        style="stroke-width:1" />
     <path
        d="m 1857.2731,610.51015 h 80 v -80 h -80 z m 0,-240 h 80 v 80 h -80 z m -80,400 c -22,0 -40.8334,-7.83333 -56.5,-23.5 -15.6667,-15.66667 -23.5,-34.5 -23.5,-56.5 v -480 c 0,-22 7.8333,-40.83333 23.5,-56.5 15.6666,-15.66667 34.5,-23.5 56.5,-23.5 h 240 l 80,80 h 320 c 22,0 40.8333,7.83333 56.5,23.5 15.6666,15.66667 23.5,34.5 23.5,56.5 v 400 c 0,22 -7.8334,40.83333 -23.5,56.5 -15.6667,15.66667 -34.5,23.5 -56.5,23.5 z m 0,-80 h 640 v -400 h -353 l -80,-80 h -207 z m 0,0 v -480 z"
        id="path833-8"
        style="stroke-width:1" />
     <circle
        style="fill:#ffffff;stroke-width:60;stroke-dashoffset:3.18;stop-color:#000000"
        id="path2609-4"
        cx="2338.1394"
        cy="637.6582"
        r="267.72565" />
     <path
        d="m 2228.1395,667.65815 c 8,0 15,-3 21,-9 6,-6 9,-13 9,-21 0,-8 -3,-15 -9,-21 -6,-6 -13,-9 -21,-9 -8,0 -15,3 -21,9 -6,6 -9,13 -9,21 0,8 3,15 9,21 6,6 13,9 21,9 z m 110,0 c 8,0 15,-3 21,-9 6,-6 9,-13 9,-21 0,-8 -3,-15 -9,-21 -6,-6 -13,-9 -21,-9 -8,0 -15,3 -21,9 -6,6 -9,13 -9,21 0,8 3,15 9,21 6,6 13,9 21,9 z m 110,0 c 8,0 15,-3 21,-9 6,-6 9,-13 9,-21 0,-8 -3,-15 -9,-21 -6,-6 -13,-9 -21,-9 -8,0 -15,3 -21,9 -6,6 -9,13 -9,21 0,8 3,15 9,21 6,6 13,9 21,9 z m -110,170 c -55.3333,0 -102.5,-19.5 -141.5,-58.5 -39,-39 -58.5,-86.16667 -58.5,-141.5 0,-55.33333 19.5,-102.5 58.5,-141.5 39,-39 86.1667,-58.5 141.5,-58.5 55.3333,0 102.5,19.5 141.5,58.5 39,39 58.5,86.16667 58.5,141.5 0,55.33333 -19.5,102.5 -58.5,141.5 -39,39 -86.1667,58.5 -141.5,58.5 z"
        id="path2005-8" />
     <path
        d="m 1962.129,370.51015 h 80 v 80 h -80 z"
        id="path833-8-6"
        style="stroke-width:1" />
     <path
        d="m 2060.4438,370.51015 h 80 v 80 h -80 z"
        id="path833-8-6-5"
        style="stroke-width:1" /></g>`
            },
            home: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>'
            },
            module: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M240-320h320v-80H240v80Zm0-160h480v-80H240v80Zm-80 320q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/>'
            },
            school: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M80-120v-650l200-150 200 150v90h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 0h80v-80h-80v80Zm0 480h480v-400H320v400Zm240-240v-80h160v80H560Zm0 160v-80h160v80H560ZM400-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/>'
            },
            student: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M480-480q81 0 169-16.5T800-540v400q-60 27-146 43.5T480-80q-88 0-174-16.5T160-140v-400q63 27 151 43.5T480-480Zm240 280v-230q-50 14-115.5 22T480-400q-59 0-124.5-8T240-430v230q50 18 115 29t125 11q60 0 125-11t115-29ZM480-880q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47Zm0 240q33 0 56.5-23.5T560-720q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720q0 33 23.5 56.5T480-640Zm0-80Zm0 425Z"/>'
            },
            teacher: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M840-120v-640H120v320H40v-320q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Zm80-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z"/>'
            },
            institution: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M80-120v-650l200-150 200 150v90h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 0h80v-80h-80v80Zm0 480h480v-400H320v400Zm240-240v-80h160v80H560Zm0 160v-80h160v80H560ZM400-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/>'
            }
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./general
      *************************/

      ims.set('./general', {
        hash: 649049824,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GENERAL_ICONS = void 0;
          const GENERAL_ICONS = exports.GENERAL_ICONS = {
            aiStars: {
              viewBox: '0 0 100 125',
              icon: `<path d="m90.64,59.09l-16.25-7.09c-3.93-1.71-7.06-4.85-8.77-8.77l-7.09-16.25c-.55-1.26-2.34-1.26-2.89,0l-7.09,16.25c-1.71,3.93-4.85,7.06-8.77,8.77l-16.27,7.1c-1.26.55-1.26,2.33,0,2.88l16.55,7.32c3.92,1.73,7.04,4.88,8.73,8.82l6.86,15.94c.54,1.27,2.34,1.27,2.89,0l7.08-16.22c1.71-3.93,4.85-7.06,8.77-8.77l16.25-7.09c1.26-.55,1.26-2.34,0-2.89Z"/><path d="m25.28,48.51l3.32-7.61c.8-1.84,2.27-3.31,4.11-4.11l7.62-3.32c.59-.26.59-1.1,0-1.35l-7.62-3.32c-1.84-.8-3.31-2.27-4.11-4.11l-3.32-7.62c-.26-.59-1.1-.59-1.35,0l-3.32,7.62c-.8,1.84-2.27,3.31-4.11,4.11l-7.63,3.33c-.59.26-.59,1.09,0,1.35l7.76,3.43c1.84.81,3.3,2.29,4.09,4.13l3.22,7.47c.26.59,1.1.6,1.35,0Z"/><path d="m39.89,13.95l4.12,1.82c.98.43,1.75,1.22,2.17,2.19l1.71,3.97c.14.32.58.32.72,0l1.76-4.04c.43-.98,1.21-1.76,2.18-2.18l4.04-1.76c.31-.14.31-.58,0-.72l-4.04-1.76c-.98-.43-1.76-1.21-2.18-2.18l-1.76-4.04c-.14-.31-.58-.31-.72,0l-1.76,4.04c-.43.98-1.21,1.76-2.18,2.18l-4.05,1.77c-.31.14-.31.58,0,.72Z"/>`
            },
            profile: {
              viewBox: '0 -960 960 960',
              icon: `<path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>`
            },
            'account-circle': {
              viewBox: '0 -960 960 960',
              icon: '<path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>'
            },
            dashboard: {
              viewBox: '0 -960 960 960',
              icon: '<path d="M80-600v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v120h-80v-120H160v120H80Zm80 440q-33 0-56.5-23.5T80-240v-120h80v120h640v-120h80v120q0 33-23.5 56.5T800-160H160Zm240-120q11 0 21-5.5t15-16.5l124-248 44 88q5 11 15 16.5t21 5.5h240v-80H665l-69-138q-5-11-15-15.5t-21-4.5q-11 0-21 4.5T524-658L400-410l-44-88q-5-11-15-16.5t-21-5.5H80v80h215l69 138q5 11 15 16.5t21 5.5Zm80-200Z"/>'
            },
            community: {
              viewBox: '0 0 502.648 502.648',
              icon: `<g>
			<circle style="fill:#010002;" cx="250.399" cy="91.549" r="58.694"/>
			<path style="fill:#010002;" d="M455.861,253.028l-54.703-11.411c-18.637-3.904-37.037,4.638-46.765,19.824
				c-9.448-4.853-19.608-9.038-30.415-12.511v-32.529c0.022-24.612-20.126-44.738-44.651-44.738h-55.933
				c-24.655,0-44.716,20.126-44.716,44.738v32.701c-10.699,3.408-20.751,7.593-30.264,12.468
				c-9.728-15.251-28.15-23.857-46.809-19.953l-54.747,11.411c-24.03,5.026-39.626,28.862-34.6,52.978l13.741,65.64
				c4.983,24.051,28.84,39.647,52.892,34.621l17.321-3.624c8.671,12.813,20.665,24.569,36.023,34.621
				c31.989,20.967,74.247,32.529,119.092,32.529c68.617,0,127.721-27.589,154.943-67.215l17.602,3.689
				c24.03,5.004,47.887-10.57,52.87-34.621l13.762-65.64C495.508,281.89,479.912,258.054,455.861,253.028z M251.305,447.381
				c-40.51,0-78.475-10.203-106.797-28.862c-9.707-6.342-17.753-13.395-24.202-20.945l13.266-2.783
				c24.073-5.004,39.669-28.84,34.643-52.913l-12.317-59.018c7.183-3.861,14.733-7.248,22.757-10.138v10.764
				c0,24.569,20.104,44.695,44.716,44.695h55.933c24.548,0,44.652-20.147,44.652-44.695v-11.325
				c8.175,2.912,15.854,6.256,22.973,10.052L334.439,341.9c-4.983,24.073,10.591,47.909,34.664,52.913l13.395,2.804
				C357.52,427.191,308.101,447.381,251.305,447.381z"/>
			<circle style="fill:#010002;" cx="443.954" cy="168.708" r="58.694"/>
			<path style="fill:#010002;" d="M70.736,226.172c31.752-6.644,52.029-37.77,45.471-69.501
				c-6.687-31.709-37.749-52.072-69.523-45.428c-31.709,6.622-52.072,37.727-45.428,69.458
				C7.879,212.453,38.984,232.795,70.736,226.172z"/>
		</g>`
            }
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 1908781083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          var _activities = require("./activities");
          var _entities = require("./entities");
          var _general = require("./general");
          const /*bundle*/ICONS = exports.ICONS = {
            ..._activities.ACTIVITY_ICONS,
            ..._entities.ENTITIY_ICONS,
            ..._general.GENERAL_ICONS
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 104572533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppButton = AppButton;
          exports.AppIcon = AppIcon;
          exports.AppIconButton = AppIconButton;
          exports.getAttributes = getAttributes;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("./icons");
          function getAttributes({
            src,
            icon,
            name,
            ...attrs
          }) {
            delete attrs.children;
            if (src) {
              const path = '/assets/icons/';
              src = `${path}${src}.svg`;
              return {
                src,
                ...attrs
              };
            }
            name = name ?? icon;
            if (typeof name === 'string') name = name.replace('entities/', '');
            icon = _icons2.ICONS.hasOwnProperty(name) ? _icons2.ICONS[name] : icon;
            return {
              icon,
              ...attrs
            };
          }
          /*bundle*/
          function AppIcon(properties) {
            const attrs = getAttributes(properties);
            return _react.default.createElement(_icons.Icon, {
              ...attrs
            });
          }
          /*bundle*/
          function AppIconButton(props) {
            const attrs = getAttributes({
              ...props
            });
            return _react.default.createElement(_icons.IconButton, {
              ...attrs
            });
          }
          /*bundle */
          function AppButton(props) {
            const attrs = {
              ...props
            };
            delete attrs.children;
            if (props.icon) {
              let {
                icon
              } = props;
              icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
              attrs.icon = icon;
            }
            return _react.default.createElement(_components.Button, {
              ...attrs
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icons",
        "from": "ICONS",
        "name": "ICONS"
      }, {
        "im": "./index",
        "from": "AppIcon",
        "name": "AppIcon"
      }, {
        "im": "./index",
        "from": "AppIconButton",
        "name": "AppIconButton"
      }, {
        "im": "./index",
        "from": "AppButton",
        "name": "AppButton"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ICONS') && _export("ICONS", ICONS = require ? require('./icons').ICONS : value);
        (require || prop === 'AppIcon') && _export("AppIcon", AppIcon = require ? require('./index').AppIcon : value);
        (require || prop === 'AppIconButton') && _export("AppIconButton", AppIconButton = require ? require('./index').AppIconButton : value);
        (require || prop === 'AppButton') && _export("AppButton", AppButton = require ? require('./index').AppButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBQ1RJVklUWV9JQ09OUyIsImV4cG9ydHMiLCJzcG9rZW4iLCJ2aWV3Qm94IiwiaWNvbiIsImRlYmF0ZSIsImFjdGl2aXRpZXMiLCJFTlRJVElZX0lDT05TIiwiYWRtaW4iLCJjbGFzc3Jvb20iLCJkcmFmdCIsImhvbWUiLCJtb2R1bGUiLCJzY2hvb2wiLCJzdHVkZW50IiwidGVhY2hlciIsImluc3RpdHV0aW9uIiwiR0VORVJBTF9JQ09OUyIsImFpU3RhcnMiLCJwcm9maWxlIiwiZGFzaGJvYXJkIiwiY29tbXVuaXR5IiwiX2FjdGl2aXRpZXMiLCJyZXF1aXJlIiwiX2VudGl0aWVzIiwiX2dlbmVyYWwiLCJJQ09OUyIsIl9yZWFjdCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsImdldEF0dHJpYnV0ZXMiLCJzcmMiLCJuYW1lIiwiYXR0cnMiLCJjaGlsZHJlbiIsInBhdGgiLCJyZXBsYWNlIiwiaGFzT3duUHJvcGVydHkiLCJBcHBJY29uIiwicHJvcGVydGllcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbiIsIkFwcEljb25CdXR0b24iLCJwcm9wcyIsIkljb25CdXR0b24iLCJBcHBCdXR0b24iLCJCdXR0b24iXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy50cyIsIi9lbnRpdGllcy50cyIsIi9nZW5lcmFsLnRzIiwiL2ljb25zLnRzIiwiL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU8sTUFBTUEsY0FBYyxHQUFBQyxPQUFBLENBQUFELGNBQUEsR0FBRztZQUM3QkUsTUFBTSxFQUFFO2NBQ1BDLE9BQU8sRUFBRSxnQkFBZ0I7Y0FDekJDLElBQUksRUFBRTthQUNOO1lBQ0QsaUJBQWlCLEVBQUU7Y0FDbEJELE9BQU8sRUFBRSxnQkFBZ0I7Y0FDekJDLElBQUks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