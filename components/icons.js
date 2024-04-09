System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.0/icons", "pragmate-ui@0.1.0/components"], function (_export, _context) {
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
    }, function (_pragmateUi010Icons) {
      dependency_2 = _pragmateUi010Icons;
    }, function (_pragmateUi010Components) {
      dependency_3 = _pragmateUi010Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      /***********************
      INTERNAL MODULE: ./icons
      ***********************/
      ims.set('./icons', {
        hash: 1515482332,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          const /*bundle*/ICONS = exports.ICONS = {
            voice: '<path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"></path>',
            conversation: {
              viewBox: '0 0 60  60',
              icon: `<path d="M10,25.465h13c0.553,0,1-0.448,1-1s-0.447-1-1-1H10c-0.553,0-1,0.448-1,1S9.447,25.465,10,25.465z"/><path d="M36,29.465H10c-0.553,0-1,0.448-1,1s0.447,1,1,1h26c0.553,0,1-0.448,1-1S36.553,29.465,36,29.465z"/><path d="M36,35.465H10c-0.553,0-1,0.448-1,1s0.447,1,1,1h26c0.553,0,1-0.448,1-1S36.553,35.465,36,35.465z"/><path d="M54.072,2.535L19.93,2.465c-3.27,0-5.93,2.66-5.93,5.93v5.124l-8.07,0.017c-3.27,0-5.93,2.66-5.93,5.93v21.141   c0,3.27,2.66,5.929,5.93,5.929H12v10c0,0.413,0.254,0.784,0.64,0.933c0.117,0.045,0.239,0.067,0.36,0.067   c0.276,0,0.547-0.115,0.74-0.327l9.704-10.675l16.626-0.068c3.27,0,5.93-2.66,5.93-5.929v-0.113l5.26,5.786   c0.193,0.212,0.464,0.327,0.74,0.327c0.121,0,0.243-0.022,0.36-0.067c0.386-0.149,0.64-0.52,0.64-0.933v-10h1.07   c3.27,0,5.93-2.66,5.93-5.929V8.465C60,5.196,57.341,2.536,54.072,2.535z M44,40.536c0,2.167-1.763,3.929-3.934,3.929l-17.07,0.07   c-0.28,0.001-0.548,0.12-0.736,0.327L14,53.949v-8.414c0-0.552-0.447-1-1-1H5.93c-2.167,0-3.93-1.763-3.93-3.929V19.465   c0-2.167,1.763-3.93,3.932-3.93l9.068-0.019c0,0,0,0,0,0c0.001,0,0.001,0,0.002,0l25.068-0.052c2.167,0,3.93,1.763,3.93,3.93   v18.441V40.536z M58,29.606c0,2.167-1.763,3.929-3.93,3.929H52c-0.553,0-1,0.448-1,1v8.414l-5-5.5V19.395   c0-3.27-2.66-5.93-5.932-5.93L16,13.514v-5.12c0-2.167,1.763-3.93,3.928-3.93l34.141,0.07c0.001,0,0.001,0,0.002,0   c2.167,0,3.93,1.763,3.93,3.93V29.606z"/>`
            },
            'content-theory': {
              viewBox: '0 0 24 24',
              icon: `<path d="M1 6v12h9V6zm8 11H2V7h7zm-8 3h22v1H1zM1 3h22v1H1zm11 4h11v1H12zm0 3h11v1H12zm0 3h11v1H12zm0 3h11v1H12z"/><path fill="none" d="M0 0h24v24H0z"/>`
            },
            schools: `<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>`,
            debate: {
              viewBox: '0 0 128 128',
              icon: `<g>
			<g><ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -11.3148 8.9075)" cx="28.2" cy="47.4" rx="7.8" ry="7.8"/>
	<path d="M37.4,97.5h-9.5c0,0-0.5,0-0.9,0c-4.3-0.4-8-3.5-9.1-7.8l-6.5-24.2c-0.4-1.4-1.8-2.1-3-1.8c-1.4,0.4-2.1,1.8-1.8,3
		l6.4,24.2c1.7,6.3,7,10.9,13.5,11.4c0.6,0.1,1.3,0.1,1.3,0.1h9.5c1.4,0,2.4-1.1,2.5-2.5C39.8,98.5,38.8,97.5,37.4,97.5z"/>
	<path d="M48.6,83.9h-13c-0.3-4.9-1.1-9.8-2.3-14.7c-0.1-0.4-0.4-1.4-0.4-1.5c-1.7-6.3-7.7-10.3-14-9.7c0,0-0.8,0.1-1,0.1
		c-2.3,0.6-3.7,3-3.1,5.4l6.7,24.9c0.7,2.8,3.1,4.9,6.1,5.1h0.6h15.5v17.8c0,2.7,2.1,4.9,4.9,4.9c2.7,0,4.9-2.1,4.9-4.9V88.8
		c0-1.3-0.5-2.5-1.5-3.4C51.1,84.4,49.8,83.9,48.6,83.9z"/>
</g>
<g>
	<ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 29.3697 133.1303)" cx="101.4" cy="47.4" rx="7.8" ry="7.8"/>
	<path d="M90.2,97.5h9.5c0,0,0.5,0,0.9,0c4.3-0.4,8-3.5,9.1-7.8l6.5-24.2c0.4-1.4,1.8-2.1,3-1.8c1.4,0.4,2.1,1.8,1.8,3l-6.4,24.2
		c-1.7,6.3-7,10.9-13.5,11.4c-0.6,0.1-1.3,0.1-1.3,0.1h-9.5c-1.4,0-2.4-1.1-2.5-2.5C87.8,98.5,88.9,97.5,90.2,97.5z"/>
	<path d="M79,83.9h13c0.3-4.9,1.1-9.8,2.3-14.7c0.1-0.4,0.4-1.4,0.4-1.5c1.7-6.3,7.7-10.3,14-9.7c0,0,0.8,0.1,1,0.1
		c2.3,0.6,3.7,3,3.1,5.4L106,88.4c-0.7,2.8-3.1,4.9-6.1,5.1h-0.6H83.9v17.8c0,2.7-2.1,4.9-4.9,4.9s-4.9-2.1-4.9-4.9V88.8
		c0-1.3,0.5-2.5,1.5-3.4C76.5,84.4,77.8,83.9,79,83.9z"/>
</g>
<rect x="38.8" y="70.8"/></g>`
            },
            'multiple-choice': {
              viewBox: '0 0 48 48',
              icon: `<g><path d="M10 29V26H13V29H10Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 44H8C5.79086 44 4 42.2091 4 40V8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V40C36 42.2091 34.2091 44 32 44ZM18 13C18 12.4477 18.4477 12 19 12H31C31.5523 12 32 12.4477 32 13C32 13.5523 31.5523 14 31 14H19C18.4477 14 18 13.5523 18 13ZM19 16C18.4477 16 18 16.4477 18 17C18 17.5523 18.4477 18 19 18H31C31.5523 18 32 17.5523 32 17C32 16.4477 31.5523 16 31 16H19ZM15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L11 18.4142L8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929L11 15.5858L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929ZM19 24C18.4477 24 18 24.4477 18 25C18 25.5523 18.4477 26 19 26H31C31.5523 26 32 25.5523 32 25C32 24.4477 31.5523 24 31 24H19ZM18 29C18 28.4477 18.4477 28 19 28H31C31.5523 28 32 28.4477 32 29C32 29.5523 31.5523 30 31 30H19C18.4477 30 18 29.5523 18 29ZM14 24H9C8.44772 24 8 24.4477 8 25V30C8 30.5523 8.44772 31 9 31H14C14.5523 31 15 30.5523 15 30V25C15 24.4477 14.5523 24 14 24Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M44 40L41 44L38 40V22H44V40Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 15H42C43.1046 15 44 15.8954 44 17V21H38V17C38 15.8954 38.8954 15 40 15Z" /></g>`
            },
            spoken: `<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.75 14.14C6.75 14.55 6.41 14.89 6 14.89C5.59 14.89 5.25 14.55 5.25 14.14V9.86C5.25 9.45 5.59 9.11 6 9.11C6.41 9.11 6.75 9.45 6.75 9.86V14.14ZM9.75 15.57C9.75 15.98 9.41 16.32 9 16.32C8.59 16.32 8.25 15.98 8.25 15.57V8.43C8.25 8.02 8.59 7.68 9 7.68C9.41 7.68 9.75 8.02 9.75 8.43V15.57ZM12.75 17C12.75 17.41 12.41 17.75 12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17ZM15.75 15.57C15.75 15.98 15.41 16.32 15 16.32C14.59 16.32 14.25 15.98 14.25 15.57V8.43C14.25 8.02 14.59 7.68 15 7.68C15.41 7.68 15.75 8.02 15.75 8.43V15.57ZM18.75 14.14C18.75 14.55 18.41 14.89 18 14.89C17.59 14.89 17.25 14.55 17.25 14.14V9.86C17.25 9.45 17.59 9.11 18 9.11C18.41 9.11 18.75 9.45 18.75 9.86V14.14Z"/>`,
            'written-spoken': `<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.75 14.14C6.75 14.55 6.41 14.89 6 14.89C5.59 14.89 5.25 14.55 5.25 14.14V9.86C5.25 9.45 5.59 9.11 6 9.11C6.41 9.11 6.75 9.45 6.75 9.86V14.14ZM9.75 15.57C9.75 15.98 9.41 16.32 9 16.32C8.59 16.32 8.25 15.98 8.25 15.57V8.43C8.25 8.02 8.59 7.68 9 7.68C9.41 7.68 9.75 8.02 9.75 8.43V15.57ZM12.75 17C12.75 17.41 12.41 17.75 12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17ZM15.75 15.57C15.75 15.98 15.41 16.32 15 16.32C14.59 16.32 14.25 15.98 14.25 15.57V8.43C14.25 8.02 14.59 7.68 15 7.68C15.41 7.68 15.75 8.02 15.75 8.43V15.57ZM18.75 14.14C18.75 14.55 18.41 14.89 18 14.89C17.59 14.89 17.25 14.55 17.25 14.14V9.86C17.25 9.45 17.59 9.11 18 9.11C18.41 9.11 18.75 9.45 18.75 9.86V14.14Z"/>`,
            faces: {
              outstanding: '🤩',
              'very good': '😁',
              good: '😀',
              bad: '😡',
              regular: '😐',
              indifferent: '😑',
              inappropriate: '🤢'
            },
            written: {
              viewBox: '0 0 511.999 511.999',
              icon: `<g>
			<g>
				<path d="M421.578,190.264l-99.847-99.847c-2.439-2.439-6.391-2.439-8.829,0L82.824,320.495c-2.439,2.439-2.439,6.392,0,8.829
					l99.847,99.847c2.439,2.439,6.391,2.439,8.829,0l230.078-230.078C424.017,196.655,424.017,192.703,421.578,190.264z"/>
			</g>
		</g>
		<g>
			<g>
				<path d="M506.511,87.672L424.323,5.484c-7.308-7.31-19.175-7.315-26.488,0l-49.616,49.616c-2.439,2.439-2.439,6.391,0,8.829
					l99.847,99.847c2.439,2.437,6.391,2.437,8.829,0l49.616-49.616C513.826,106.847,513.826,94.987,506.511,87.672z"/>
			</g>
		</g>
		<g>
			<g>
				<path d="M508.133,491.11c-1.054-9.556-9.489-16.599-19.104-16.599H111.633l36.058-15.163c4.088-1.719,5.131-7.034,1.994-10.17
					l-86.854-86.854c-3.137-3.135-8.451-2.094-10.17,1.994C52.224,365.359,2.052,484.66,1.627,485.707
					c-5.815,13.208,4.855,27.01,18.107,26.263H489.52C500.566,511.97,509.379,502.408,508.133,491.11z"/>
			</g>
		</g>`
            },
            aiStars: {
              viewBox: '0 0 100 125',
              icon: `<path d="m90.64,59.09l-16.25-7.09c-3.93-1.71-7.06-4.85-8.77-8.77l-7.09-16.25c-.55-1.26-2.34-1.26-2.89,0l-7.09,16.25c-1.71,3.93-4.85,7.06-8.77,8.77l-16.27,7.1c-1.26.55-1.26,2.33,0,2.88l16.55,7.32c3.92,1.73,7.04,4.88,8.73,8.82l6.86,15.94c.54,1.27,2.34,1.27,2.89,0l7.08-16.22c1.71-3.93,4.85-7.06,8.77-8.77l16.25-7.09c1.26-.55,1.26-2.34,0-2.89Z"/><path d="m25.28,48.51l3.32-7.61c.8-1.84,2.27-3.31,4.11-4.11l7.62-3.32c.59-.26.59-1.1,0-1.35l-7.62-3.32c-1.84-.8-3.31-2.27-4.11-4.11l-3.32-7.62c-.26-.59-1.1-.59-1.35,0l-3.32,7.62c-.8,1.84-2.27,3.31-4.11,4.11l-7.63,3.33c-.59.26-.59,1.09,0,1.35l7.76,3.43c1.84.81,3.3,2.29,4.09,4.13l3.22,7.47c.26.59,1.1.6,1.35,0Z"/><path d="m39.89,13.95l4.12,1.82c.98.43,1.75,1.22,2.17,2.19l1.71,3.97c.14.32.58.32.72,0l1.76-4.04c.43-.98,1.21-1.76,2.18-2.18l4.04-1.76c.31-.14.31-.58,0-.72l-4.04-1.76c-.98-.43-1.76-1.21-2.18-2.18l-1.76-4.04c-.14-.31-.58-.31-.72,0l-1.76,4.04c-.43.98-1.21,1.76-2.18,2.18l-4.05,1.77c-.31.14-.31.58,0,.72Z"/>`
            },
            'character-talk': {
              viewBox: '0 0 416.043 416.043',
              icon: `<g>
			<path style="fill:#030104;" d="M208.86,80.696C84.671,76.046-3.953,136.891,0.136,214.624c0,51.973,70.945,99.063,141.394,115.228
				c0,0-0.357,20.263-24.416,53.068c52.804-9.686,91.313-46.161,91.313-46.161s16.252-0.813,17.884-0.87
				c91.267-5.813,162.656-56.548,162.656-118.37C388.967,151.903,308.305,80.696,208.86,80.696z M111.467,236.684
				c-16.106,0-29.188-13.035-29.188-29.181c0-16.122,13.082-29.196,29.188-29.196c16.138,0,29.22,13.074,29.22,29.196
				C140.688,223.648,127.605,236.684,111.467,236.684z M191.467,236.684c-16.105,0-29.188-13.035-29.188-29.181
				c0-16.122,13.082-29.196,29.188-29.196c16.138,0,29.222,13.074,29.222,29.196C220.689,223.648,207.605,236.684,191.467,236.684z
				 M271.468,236.684c-16.105,0-29.188-13.035-29.188-29.181c0-16.122,13.082-29.196,29.188-29.196
				c16.139,0,29.221,13.074,29.221,29.196C300.689,223.648,287.607,236.684,271.468,236.684z"/>
			<path style="fill:#030104;" d="M272.189,33.322c-53.318-1.995-98.421,11.129-128.234,33.334c23.07-4.393,48.248-6.32,75.021-5.318
				c92.221,0,168.932,58.788,184.655,119.916c7.976-11.806,12.412-24.883,12.412-38.65C416.042,90.196,351.617,33.322,272.189,33.322
				z"/>
		</g>`
            },
            classworks: {
              icon: `<g>
		
		<path id="Unión_4" data-name="Unión 4" d="M2.507,24A2.6,2.6,0,0,1,0,21.335V2.67A2.6,2.6,0,0,1,2.507,0h20.8a2.6,2.6,0,0,1,2.507,2.67v4H23.312v-4H2.507V21.335H9.521V24Zm9.08-.011V19.535l7.764-8.2,1.667-1.763a1.862,1.862,0,0,1,2.743,0l1.486,1.573a2.114,2.114,0,0,1,0,2.9l-.878.93L24.344,15l-.751.792-7.759,8.2ZM13.6,20.424V21.9h1.4L22.159,14.3l-1.386-1.465ZM5.573,14V11.335h6.91V14Zm0-5.333V6H20.179V8.669Z" transform="translate(1.179 1.998)"/>
	  </g>`,
              viewBox: '0 0 28 28'
            },
            classes: {
              viewBox: '0 0 28 28',
              icon: `<g>
		
		<path id="Unión_8" data-name="Unión 8" d="M11.792,18.936V17.314c0-2.16,4.362-3.244,6.545-3.244s6.55,1.084,6.55,3.244v1.622Zm-3.426,0H0V15.695c0-1.2.654-2.888,3.766-4.123a16.065,16.065,0,0,1,3.254-.879,9.577,9.577,0,0,1,1.767-.117c1.259,0,2.511.1,2.533.117a15.677,15.677,0,0,1,3.25.879c.229.089.453.187.673.292a16.243,16.243,0,0,0-4.254,1.407A11.47,11.47,0,0,0,9.175,13.1a13.274,13.274,0,0,0-4.432.879c-1.31.525-2.124,1.186-2.124,1.717v.642H8.372c0,.043,0,.086,0,.132v2.467Zm6.7-9.732a3.273,3.273,0,1,1,3.271,3.244A3.257,3.257,0,0,1,15.066,9.2ZM3.875,4.642a4.689,4.689,0,0,1,9.378,0,4.689,4.689,0,0,1-9.378,0Zm2.348,0A2.343,2.343,0,1,0,8.567,2.322,2.339,2.339,0,0,0,6.222,4.642Z" transform="translate(1.555 4.532)"/>
	  </g>
	  `
            }
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 733975510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppButton = AppButton;
          exports.AppIcon = AppIcon;
          exports.AppIconButton = AppIconButton;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("./icons");
          /*bundle*/
          function AppIcon({
            icon
          }) {
            icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
            return _react.default.createElement(_icons.Icon, {
              icon: icon
            });
          }
          /*bundle*/
          function AppIconButton(props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJQ09OUyIsImV4cG9ydHMiLCJ2b2ljZSIsImNvbnZlcnNhdGlvbiIsInZpZXdCb3giLCJpY29uIiwic2Nob29scyIsImRlYmF0ZSIsInNwb2tlbiIsImZhY2VzIiwib3V0c3RhbmRpbmciLCJnb29kIiwiYmFkIiwicmVndWxhciIsImluZGlmZmVyZW50IiwiaW5hcHByb3ByaWF0ZSIsIndyaXR0ZW4iLCJhaVN0YXJzIiwiY2xhc3N3b3JrcyIsImNsYXNzZXMiLCJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQXBwSWNvbiIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJJY29uIiwiQXBwSWNvbkJ1dHRvbiIsInByb3BzIiwiYXR0cnMiLCJjaGlsZHJlbiIsIkljb25CdXR0b24iLCJBcHBCdXR0b24iLCJCdXR0b24iXSwic291cmNlcyI6WyIvaWNvbnMudHMiLCIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTyxNQUFNLFVBQVdBLEtBQUssR0FBQUMsT0FBQSxDQUFBRCxLQUFBLEdBQUc7WUFDOUJFLEtBQUssRUFBRSxzR0FBc0c7WUFDN0dDLFlBQVksRUFBRTtjQUNiQyxPQUFPLEVBQUUsWUFBWTtjQUNyQkMsSUFBSSxFQUFFO2FBQ047WUFDRCxnQkFBZ0IsRUFBRTtjQUNqQkQsT0FBTyxFQUFFLFdBQVc7Y0FDcEJDLElBQUksRUFBRTthQUNOO1lBQ0RDLE9BQU8sRUFBRSwrRkFBK0Y7WUFDeEdDLE1BQU0sRUFBRTtjQUNQSCxPQUFPLEVBQUUsYUFBYTtjQUN0QkMsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzthQWlCTjtZQUNELGlCQUFpQixFQUFFO2NBQ2xCRCxPQUFPLEVBQUUsV0FBVztjQUNwQkMsSUFBSSxFQUFFOzs7O2FBSU47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