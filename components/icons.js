System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components"], function (_export, _context) {
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
    }, function (_pragmateUi011Icons) {
      dependency_2 = _pragmateUi011Icons;
    }, function (_pragmateUi011Components) {
      dependency_3 = _pragmateUi011Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/components/icons"
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
        hash: 1233856214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ACTIVITY_ICONS = void 0;
          const ACTIVITY_ICONS = exports.ACTIVITY_ICONS = {
            spoken: {
              viewBox: '0 -960 960 960',
              path: '<path d="M680-560q-33 0-56.5-23T600-640v-160q0-34 23.5-57t56.5-23q34 0 57 23t23 57v160q0 34-23 57t-57 23ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320v80H200v640h440v-80h80v80q0 33-23.5 56.5T640-80H200Zm80-160v-80h280v80H280Zm0-120v-80h200v80H280Zm440 40h-80v-104q-77-14-128.5-74.5T460-640h80q0 58 41 99t99 41q59 0 99.5-41t40.5-99h80q0 81-51 141.5T720-424v104Z"/>'
            },
            'multiple-choice': {
              viewBox: '0 -960 960 960',
              path: 'path d="m576-160-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm79-360L513-662l56-56 85 85 170-170 56 57-225 226ZM80-280v-80h360v80H80Zm0-320v-80h360v80H80Z"/>'
            },
            dialog: {
              viewBox: '0 -960 960 960',
              path: '<path d="M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v600L720-240H280ZM80-280v-560q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240L80-280Zm520-240v-280H160v280h440Zm-440 0v-280 280Z"/>'
            },
            debate: {
              viewBox: '0 -960 960 960',
              path: '<path d="m408-432-42-42q8-11 11-22.5t3-23.5q0-12-3-23.5T366-565l42-43q16 19 24 42t8 46q0 23-8 45.5T408-432Zm85 86-43-43q25-28 37.5-62t12.5-69q0-35-12.5-68.5T450-650l43-43q34 37 50.5 81.5T560-520q0 47-16.5 92T493-346ZM200-480q-33 0-56.5-23.5T120-560q0-33 23.5-56.5T200-640q33 0 56.5 23.5T280-560q0 33-23.5 56.5T200-480ZM40-320v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H40Zm720-160q-33 0-56.5-23.5T680-560q0-33 23.5-56.5T760-640q33 0 56.5 23.5T840-560q0 33-23.5 56.5T760-480ZM600-320v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H600Z"/>'
            },
            reading: {
              viewBox: '0 -960 960 960',
              path: '<path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>'
            },
            activities: {
              viewBox: '0 -960 960 960',
              path: '<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z"/>'
            }
          };
        }
      });

      /**************************
      INTERNAL MODULE: ./entities
      **************************/

      ims.set('./entities', {
        hash: 333756083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ENTITIY_ICONS = void 0;
          const ENTITIY_ICONS = exports.ENTITIY_ICONS = {
            admin: {
              viewBox: '0 -960 960 960',
              path: '<path d="M480-440q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0-80q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0 440q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-400Zm0-315-240 90v189q0 54 15 105t41 96q42-21 88-33t96-12q50 0 96 12t88 33q26-45 41-96t15-105v-189l-240-90Zm0 515q-36 0-70 8t-65 22q29 30 63 52t72 34q38-12 72-34t63-52q-31-14-65-22t-70-8Z"/>'
            },
            classroom: {
              viewBox: '0 -960 960 960',
              path: '<path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/>'
            },
            draft: {
              viewBox: '0 -960 960 960',
              path: `<g><path
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
              path: '<path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>'
            },
            module: {
              viewBox: '0 -960 960 960',
              path: '<path d="M240-320h320v-80H240v80Zm0-160h480v-80H240v80Zm-80 320q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/>'
            },
            school: {
              viewBox: '0 -960 960 960',
              path: '<path d="M80-120v-650l200-150 200 150v90h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 0h80v-80h-80v80Zm0 480h480v-400H320v400Zm240-240v-80h160v80H560Zm0 160v-80h160v80H560ZM400-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z"/>'
            },
            student: {
              viewBox: '0 -960 960 960',
              path: '<path d="M480-480q81 0 169-16.5T800-540v400q-60 27-146 43.5T480-80q-88 0-174-16.5T160-140v-400q63 27 151 43.5T480-480Zm240 280v-230q-50 14-115.5 22T480-400q-59 0-124.5-8T240-430v230q50 18 115 29t125 11q60 0 125-11t115-29ZM480-880q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-66 47-113t113-47Zm0 240q33 0 56.5-23.5T560-720q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720q0 33 23.5 56.5T480-640Zm0-80Zm0 425Z"/>'
            },
            teacher: {
              viewBox: '0 -960 960 960',
              path: '<path d="M840-120v-640H120v320H40v-320q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Zm80-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z"/>'
            }
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./general
      *************************/

      ims.set('./general', {
        hash: 2224172522,
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
        hash: 3860192280,
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
            icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBQ1RJVklUWV9JQ09OUyIsImV4cG9ydHMiLCJzcG9rZW4iLCJ2aWV3Qm94IiwicGF0aCIsImRpYWxvZyIsImRlYmF0ZSIsInJlYWRpbmciLCJhY3Rpdml0aWVzIiwiRU5USVRJWV9JQ09OUyIsImFkbWluIiwiY2xhc3Nyb29tIiwiZHJhZnQiLCJob21lIiwibW9kdWxlIiwic2Nob29sIiwic3R1ZGVudCIsInRlYWNoZXIiLCJHRU5FUkFMX0lDT05TIiwiYWlTdGFycyIsImljb24iLCJwcm9maWxlIiwiX2FjdGl2aXRpZXMiLCJyZXF1aXJlIiwiX2VudGl0aWVzIiwiX2dlbmVyYWwiLCJJQ09OUyIsIl9yZWFjdCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsImdldEF0dHJpYnV0ZXMiLCJzcmMiLCJuYW1lIiwiYXR0cnMiLCJjaGlsZHJlbiIsImhhc093blByb3BlcnR5IiwiQXBwSWNvbiIsInByb3BlcnRpZXMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkljb24iLCJBcHBJY29uQnV0dG9uIiwicHJvcHMiLCJJY29uQnV0dG9uIiwiQXBwQnV0dG9uIiwiQnV0dG9uIl0sInNvdXJjZXMiOlsiL2FjdGl2aXRpZXMudHMiLCIvZW50aXRpZXMudHMiLCIvZ2VuZXJhbC50cyIsIi9pY29ucy50cyIsIi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLGNBQWMsR0FBQUMsT0FBQSxDQUFBRCxjQUFBLEdBQUc7WUFDN0JFLE1BQU0sRUFBRTtjQUNQQyxPQUFPLEVBQUUsZ0JBQWdCO2NBQ3pCQyxJQUFJLEVBQUU7YUFDTjtZQUNELGlCQUFpQixFQUFFO2NBQ2xCRCxPQUFPLEVBQUUsZ0JBQWdCO2NBQ3pCQyxJQUFJLEVBQUU7YUFDTjtZQUNEQyxNQUFNLEVBQUU7Y0FD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