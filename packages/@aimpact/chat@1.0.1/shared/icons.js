System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/components"], function (_export, _context) {
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
    }, function (_pragmateUi003Icons) {
      dependency_2 = _pragmateUi003Icons;
    }, function (_pragmateUi003Components) {
      dependency_3 = _pragmateUi003Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/shared/icons"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/components', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./icons
      ***********************/
      ims.set('./icons', {
        hash: 745277336,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          /* bundle */
          const ICONS = exports.ICONS = {
            'aip-chat-logo': {
              viewBox: '0 0 137.637 36',
              icon: `<defs>
    <linearGradient id="linear-gradient" x1="-0.109" y1="0.256" x2="0.989" y2="0.558" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#115efa"/>
      <stop offset="0.058" stop-color="#1461fa"/>
      <stop offset="0.209" stop-color="#1c67fa"/>
      <stop offset="0.329" stop-color="#2c74fa"/>
      <stop offset="0.513" stop-color="#367bfa"/>
      <stop offset="0.599" stop-color="#348ff8"/>
      <stop offset="0.776" stop-color="#30c3f6"/>
      <stop offset="0.951" stop-color="#2cfdf3"/>
      <stop offset="1" stop-color="#2cfdf3"/>
    </linearGradient>
    <clipPath id="clip-path-1">
      <rect id="Rectángulo_83"  width="35.976" height="36" fill="url(#linear-gradient)"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <path id="Trazado_109"  d="M3.379,35.961A2.968,2.968,0,0,0,.545,38.2,17.919,17.919,0,0,0,0,42.546v.079A17.984,17.984,0,0,0,17.987,60.587h.005A17.983,17.983,0,0,0,35.469,38.356a2.967,2.967,0,1,0-5.766,1.4,12.053,12.053,0,1,1-23.4-.1,2.979,2.979,0,0,0-2.81-3.7H3.379m12.482,6.625a2.127,2.127,0,1,1,2.128,2.127,2.085,2.085,0,0,1-2.128-2.127m-5.937,0a8.064,8.064,0,1,0,8.065-8.064,8.11,8.11,0,0,0-8.065,8.064" transform="translate(0 -34.522)" fill="url(#linear-gradient)"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <path id="Trazado_110"  d="M23.707,5.2a.639.639,0,0,0-.161.028,13.3,13.3,0,0,0-5.832,3.834h0a1.68,1.68,0,0,1-2.4-2.352.625.625,0,0,0-.029-.883h0a.627.627,0,0,0-.882.029,2.922,2.922,0,0,0,4,4.244.626.626,0,0,0,.176-.139l0-.005h0a.6.6,0,0,0,.041-.044,12.045,12.045,0,0,1,5.3-3.493.625.625,0,0,0,.4-.787v0a.625.625,0,0,0-.593-.43h-.034m12.331.172a.625.625,0,0,0,.136.873h0A14.383,14.383,0,0,1,38.1,7.923a.625.625,0,1,0,.9-.864,15.655,15.655,0,0,0-2.09-1.828.628.628,0,0,0-.351-.118h-.02a.625.625,0,0,0-.5.255M25.828,4.7A.625.625,0,0,0,26,5.936a12.046,12.046,0,0,1,8.046,1.709.625.625,0,0,0,.861-.2h0a.625.625,0,0,0-.2-.861,13.3,13.3,0,0,0-6.561-2.007q-.235-.009-.471-.008a13.344,13.344,0,0,0-1.848.129M28.868,2.8a.625.625,0,0,0,.547.694h0a14.328,14.328,0,0,1,4.978,1.556.624.624,0,1,0,.583-1.1h0a15.562,15.562,0,0,0-5.41-1.692.6.6,0,0,0-.072,0h0a.625.625,0,0,0-.621.55m-1.632-.562a15.637,15.637,0,0,0-10.855,4.85.625.625,0,0,0,.021.884h0a.625.625,0,0,0,.884-.022h0a14.386,14.386,0,0,1,9.989-4.461.625.625,0,0,0,.606-.644h0a.625.625,0,0,0-.624-.606h-.019m8.177.191a.625.625,0,0,0,.25.848h0a16.734,16.734,0,0,1,4.316,3.364L40,6.663a1.68,1.68,0,1,1-2.428,2.321l0,0-.012-.014a13.24,13.24,0,0,0-.979-.978.625.625,0,0,0-.838.928h0a12.215,12.215,0,0,1,.887.886l.017.021A2.928,2.928,0,1,0,40.933,5.84c-.011-.014-.022-.028-.034-.041a17.983,17.983,0,0,0-4.637-3.615.622.622,0,0,0-.292-.077h-.007a.624.624,0,0,0-.549.327M20.848,1.344a17.988,17.988,0,0,0-4.909,3.01.625.625,0,0,0,.815.947,16.721,16.721,0,0,1,4.568-2.8.625.625,0,0,0,.342-.815h0A.625.625,0,0,0,21.1,1.3h-.008a.627.627,0,0,0-.24.047M27.652,0Q27.441,0,27.23,0a18,18,0,0,0-4.2.6.626.626,0,0,0,.324,1.208h0a16.724,16.724,0,0,1,10.357.558.625.625,0,0,0,.809-.356h0a.625.625,0,0,0-.357-.809h0A17.987,17.987,0,0,0,28.641.025Q28.167,0,27.691,0Z" transform="translate(-13.615 0.001)" fill="url(#linear-gradient)"/>
    </clipPath>
    <clipPath id="clip-path-5">
      <rect id="Rectángulo_81"  width="35.66" height="18.133" fill="url(#linear-gradient)"/>
    </clipPath>
  </defs>
  <g id="Grupo_47"  transform="translate(-0.001)">
    <g id="Grupo_119" >
      <g id="Grupo_120" >
        <g id="Grupo_119-2" >
          <g id="Grupo_120-2" >
            <g id="Grupo_103" >
              <g id="Grupo_118" >
                <g id="Grupo_172"  transform="translate(44 10.627)">                 
                <g id='theme-toggle-text'>                
                <path id="Trazado_85"  d="M73.9,32.458l-1.293-3.173H66.624l-1.293,3.173H62.158l6.063-14.246H71.09l6.063,14.246ZM69.615,21.95l-1.879,4.587h3.758Z" transform="translate(-62.158 -18.212)" fill="#11395d"/>
                  <rect id="Rectángulo_72"  width="3.112" height="14.145" transform="translate(17.52 0.101)" fill="#11395d"/>
                  <path id="Trazado_87"  d="M134.19,25.452a4.4,4.4,0,0,1-1.223,1.557,5.314,5.314,0,0,1-1.818.939,7.71,7.71,0,0,1-2.233.313h-2.365V32.5H123.44V18.359h5.779a6.8,6.8,0,0,1,2.274.354,4.806,4.806,0,0,1,1.7,1,4.374,4.374,0,0,1,1.071,1.546,5.144,5.144,0,0,1,.374,1.99v.041a4.958,4.958,0,0,1-.445,2.162m-2.708-2.142a1.931,1.931,0,0,0-.677-1.6,2.865,2.865,0,0,0-1.849-.546h-2.4v4.325h2.465a2.531,2.531,0,0,0,1.819-.616,2.023,2.023,0,0,0,.647-1.526Z" transform="translate(-99.398 -18.258)" fill="#11395d"/>
                </g>              
                 <path id="Trazado_119"  d="M8.382,17.393a7.54,7.54,0,0,1-5.409-2.051A6.963,6.963,0,0,1,.816,10.061,6.954,6.954,0,0,1,2.973,4.768a7.562,7.562,0,0,1,5.409-2.04,6.337,6.337,0,0,1,5.909,3.464L11.7,7.468A3.9,3.9,0,0,0,10.327,5.99a3.514,3.514,0,0,0-1.945-.584,4.244,4.244,0,0,0-3.2,1.318,4.624,4.624,0,0,0-1.265,3.337A4.624,4.624,0,0,0,5.184,13.4a4.244,4.244,0,0,0,3.2,1.318,3.514,3.514,0,0,0,1.945-.584A3.9,3.9,0,0,0,11.7,12.653l2.593,1.254A6.388,6.388,0,0,1,8.382,17.393Zm20.467-.255H25.81V11.166H19.115v5.972H16.1V2.962h3.018V8.53H25.81V2.962H28.85Zm16,0H41.432l-.893-2.4H34.461l-.893,2.4H30.146L35.608,2.962h3.783ZM39.71,12.08,37.5,5.98l-2.21,6.1Zm11.413,5.058H48.084V5.619H43.94V2.962H55.247V5.619H51.123Z" transform="translate(38.391 -2.648)" fill="#227dc5"/>
                </g>
                <g id="Grupo_262"  transform="translate(0.001)">
                  <g id="Grupo_120-3" >
                    <g id="Grupo_119-3" >
                      <g id="Grupo_120-4" >
                        <g id="Grupo_103-2" >
                          <g id="Grupo_118-2" >
                            <g id="Grupo_147" >
                              <g id="Grupo_156"  clip-path="url(#clip-path-1)">
                                <g id="Grupo_148"  transform="translate(0 9.936)">
                                  <g id="Grupo_147-2"  clip-path="url(#clip-path-2)">
                                    <rect id="Rectángulo_79"  width="38.191" height="44.316" transform="translate(-9.112 22.35) rotate(-67.82)" fill="url(#linear-gradient)"/>
                                  </g>
                                </g>
                                <g id="Grupo_150"  transform="translate(3.918 0)">
                                  <g id="Grupo_149"  clip-path="url(#clip-path-3)">
                                    <rect id="Rectángulo_80"  width="24.251" height="30.182" transform="matrix(0.518, -0.856, 0.856, 0.518, -5.188, 8.087)" fill="url(#linear-gradient)"/>
                                  </g>
                                </g>
                                <g id="Grupo_155" >
                                  <g id="Grupo_154"  clip-path="url(#clip-path-1)">
                                    <g id="Grupo_153"  transform="translate(0.131 17.867)" opacity="0.2">
                                      <g id="Grupo_152" >
                                        <g id="Grupo_151"  clip-path="url(#clip-path-5)">
                                          <path id="Trazado_111"  d="M30.3,65.861a12.051,12.051,0,0,1-24.028,0q-2.961.562-5.82,1.394a17.98,17.98,0,0,0,35.66,0q-2.854-.826-5.811-1.392" transform="translate(-0.455 -64.772)" fill="url(#linear-gradient)"/>
                                          <path id="Trazado_112"  d="M42.5,70.277a8.1,8.1,0,0,0,8.046-7.73q-2.928-.367-5.933-.468c0,.045.013.087.013.134a2.127,2.127,0,0,1-4.254,0c0-.046.01-.088.013-.134q-3,.1-5.933.468a8.106,8.106,0,0,0,8.048,7.73" transform="translate(-24.667 -62.08)" fill="url(#linear-gradient)"/>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>`
            },
            logo: {
              viewBox: '0 0 35.976 39.035',
              icon: `<g> <defs>
		<linearGradient id="linear-gradient" x1="-0.109" y1="0.256" x2="0.989" y2="0.558" gradientUnits="objectBoundingBox">
		  <stop offset="0" stop-color="#115efa"/>
		  <stop offset="0.058" stop-color="#1461fa"/>
		  <stop offset="0.209" stop-color="#1c67fa"/>
		  <stop offset="0.329" stop-color="#2c74fa"/>
		  <stop offset="0.513" stop-color="#367bfa"/>
		  <stop offset="0.599" stop-color="#348ff8"/>
		  <stop offset="0.776" stop-color="#30c3f6"/>
		  <stop offset="0.951" stop-color="#2cfdf3"/>
		  <stop offset="1" stop-color="#2cfdf3"/>
		</linearGradient>
		<clipPath id="clip-path">
		  <rect id="Rectángulo_83"  width="35.976" height="39.035" fill="url(#linear-gradient)"/>
		</clipPath>
		<clipPath id="clip-path-2">
		  <path id="Trazado_109"  d="M3.379,36.082A3.028,3.028,0,0,0,.545,38.514,20.983,20.983,0,0,0,0,43.223v.085A20.074,20.074,0,0,0,7.7,59.284a17.014,17.014,0,0,0,10.282,3.5h.005a17,17,0,0,0,10.155-3.4,20.352,20.352,0,0,0,7.322-20.7,2.964,2.964,0,0,0-3.584-2.366A3.242,3.242,0,0,0,29.7,40.2a13.6,13.6,0,0,1-4.9,13.867A11.276,11.276,0,0,1,11.1,54,13.611,13.611,0,0,1,6.3,40.09a3.248,3.248,0,0,0-2.15-3.907,2.759,2.759,0,0,0-.66-.1H3.379m12.482,7.184a2.134,2.134,0,1,1,2.128,2.306,2.178,2.178,0,0,1-2.128-2.306m-5.937,0c0,4.791,3.646,8.744,8.065,8.744s8.064-3.953,8.064-8.744-3.645-8.744-8.064-8.744-8.065,3.954-8.065,8.744" transform="translate(0 -34.522)" fill="url(#linear-gradient)"/>
		</clipPath>
		<clipPath id="clip-path-3">
		  <path id="Trazado_110"  d="M23.707,5.634a.6.6,0,0,0-.161.03,13.265,13.265,0,0,0-5.832,4.157v0a1.579,1.579,0,0,1-2.348,0,1.925,1.925,0,0,1-.051-2.549.718.718,0,0,0-.029-.958h0a.6.6,0,0,0-.442-.181.606.606,0,0,0-.441.213,3.386,3.386,0,0,0,.089,4.444,2.762,2.762,0,0,0,3.914.158.637.637,0,0,0,.176-.151l0-.006h0a.632.632,0,0,0,.041-.048,12.017,12.017,0,0,1,5.3-3.788.691.691,0,0,0,.4-.854v0a.632.632,0,0,0-.593-.467h-.034m12.331.187a.716.716,0,0,0,.136.947h0A14.807,14.807,0,0,1,38.1,8.591a.591.591,0,0,0,.884.022A.719.719,0,0,0,39,7.654a16.119,16.119,0,0,0-2.09-1.982.6.6,0,0,0-.351-.128h-.02a.611.611,0,0,0-.5.277M25.828,5.094a.671.671,0,0,0-.532.765.636.636,0,0,0,.7.577,11.289,11.289,0,0,1,8.046,1.853.6.6,0,0,0,.861-.216h0a.712.712,0,0,0-.2-.933,12.572,12.572,0,0,0-6.561-2.176q-.235-.009-.471-.009a12.325,12.325,0,0,0-1.848.14m3.041-2.053a.668.668,0,0,0,.547.753h0a13.54,13.54,0,0,1,4.978,1.687.6.6,0,0,0,.845-.282.707.707,0,0,0-.262-.915h0a14.707,14.707,0,0,0-5.41-1.834.554.554,0,0,0-.072-.005h0a.645.645,0,0,0-.621.6m-1.632-.609A15.118,15.118,0,0,0,16.381,7.691a.719.719,0,0,0,.021.958h0a.591.591,0,0,0,.884-.024h0a13.909,13.909,0,0,1,9.989-4.837.657.657,0,0,0,.606-.7h0a.651.651,0,0,0-.624-.657h-.019m8.177.207a.708.708,0,0,0,.25.919h0a17,17,0,0,1,4.316,3.648L40,7.225a1.931,1.931,0,0,1,.428,1.789,1.746,1.746,0,0,1-1.233,1.274,1.593,1.593,0,0,1-1.623-.547l0,0-.012-.016a13.853,13.853,0,0,0-.979-1.06.6.6,0,0,0-.444-.174.608.608,0,0,0-.437.223.719.719,0,0,0,.044.957h0a12.78,12.78,0,0,1,.887.961l.017.023a2.793,2.793,0,0,0,2.835.954,3.051,3.051,0,0,0,2.148-2.223,3.37,3.37,0,0,0-.694-3.052c-.011-.015-.022-.031-.034-.045a18.268,18.268,0,0,0-4.637-3.92.585.585,0,0,0-.292-.083h-.007a.619.619,0,0,0-.549.355M20.848,1.457a17.806,17.806,0,0,0-4.909,3.264.718.718,0,0,0-.066.956.592.592,0,0,0,.881.072,16.551,16.551,0,0,1,4.568-3.036.7.7,0,0,0,.342-.884h0a.628.628,0,0,0-.568-.422h-.008a.585.585,0,0,0-.24.051M27.652,0Q27.441,0,27.23,0a16.7,16.7,0,0,0-4.2.655.685.685,0,0,0-.441.83.622.622,0,0,0,.765.48h0a15.5,15.5,0,0,1,10.357.6.611.611,0,0,0,.809-.386h0a.7.7,0,0,0-.357-.877h0A16.8,16.8,0,0,0,28.641.027Q28.167,0,27.691,0Z" transform="translate(-13.615 0.001)" fill="url(#linear-gradient)"/>
		</clipPath>
		<clipPath id="clip-path-5">
		  <rect id="Rectángulo_81"  width="35.66" height="19.662" fill="url(#linear-gradient)"/>
		</clipPath>
	  </defs>
	  <g id="Grupo_118" >
		<g id="Grupo_147" >
		  <g id="Grupo_156"  clip-path="url(#clip-path)">
			<g id="Grupo_148"  transform="translate(0 10.773)">
			  <g id="Grupo_147-2"  clip-path="url(#clip-path-2)">
				<rect id="Rectángulo_79"  width="40.952" height="44.849" transform="translate(-9.112 24.234) rotate(-67.82)" fill="url(#linear-gradient)"/>
			  </g>
			</g>
			<g id="Grupo_150"  transform="translate(3.918 0)">
			  <g id="Grupo_149"  clip-path="url(#clip-path-3)">
				<rect id="Rectángulo_80"  width="25.748" height="30.864" transform="matrix(0.518, -0.856, 0.856, 0.518, -5.188, 8.769)" fill="url(#linear-gradient)"/>
			  </g>
			</g>
			<g id="Grupo_155" >
			  <g id="Grupo_154"  clip-path="url(#clip-path)">
				<g id="Grupo_153"  transform="translate(0.131 19.373)" opacity="0.2">
				  <g id="Grupo_152" >
					<g id="Grupo_151"  clip-path="url(#clip-path-5)">
					  <path id="Trazado_111"  d="M30.3,65.861A13.3,13.3,0,0,1,25.1,75.625a11.276,11.276,0,0,1-13.7-.065,13.309,13.309,0,0,1-5.119-9.7,59.487,59.487,0,0,0-5.82,1.511A19.848,19.848,0,0,0,8,80.843a16.859,16.859,0,0,0,20.442.1A19.817,19.817,0,0,0,36.115,67.37,59.5,59.5,0,0,0,30.3,65.861" transform="translate(-0.455 -64.68)" fill="url(#linear-gradient)"/>
					  <path id="Trazado_112"  d="M42.5,70.968c4.306,0,7.867-3.756,8.046-8.381a59.524,59.524,0,0,0-5.933-.507c0,.049.013.095.013.145a2.134,2.134,0,1,1-4.254,0c0-.05.01-.1.013-.145a59.537,59.537,0,0,0-5.933.507c.18,4.625,3.742,8.381,8.048,8.381" transform="translate(-24.667 -62.08)" fill="url(#linear-gradient)"/>
					</g>
				  </g>
				</g>
			  </g>
			</g>
		  </g>
		</g>
	  </g></g>`
            },
            'icon-menu': {
              viewBox: '0 0 24 24',
              icon: `<g><path id="Trazado_154" data-name="Trazado 154" d="M0,0H24V24H0Z" fill="none"/><path id="Trazado_158" data-name="Trazado 158" d="M3,18H16V16H3Zm0-5H13V11H3ZM3,6V8H16V6Zm18,9.59L17.42,12,21,8.41,19.59,7l-5,5,5,5Z"/></g>`
            },
            'ai-profile': {
              viewBox: `0 0 38 38`,
              icon: `<g> <defs>
    <linearGradient id="linear-gradient" x1="-0.109" y1="0.256" x2="0.989" y2="0.558" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#115efa"/>
      <stop offset="0.058" stop-color="#1461fa"/>
      <stop offset="0.209" stop-color="#1c67fa"/>
      <stop offset="0.329" stop-color="#2c74fa"/>
      <stop offset="0.513" stop-color="#367bfa"/>
      <stop offset="0.599" stop-color="#348ff8"/>
      <stop offset="0.776" stop-color="#30c3f6"/>
      <stop offset="0.951" stop-color="#2cfdf3"/>
      <stop offset="1" stop-color="#2cfdf3"/>
    </linearGradient>
    <clipPath id="clip-path">
      <rect id="Rectángulo_89" data-name="Rectángulo 89" width="26.779" height="26.796" fill="url(#linear-gradient)"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <path id="Trazado_113" data-name="Trazado 113" d="M2.515,35.593a2.209,2.209,0,0,0-2.11,1.669A13.338,13.338,0,0,0,0,40.495v.058A13.386,13.386,0,0,0,13.388,53.923h0A13.385,13.385,0,0,0,26.4,37.376a2.209,2.209,0,1,0-4.292,1.044,8.971,8.971,0,1,1-17.417-.076A2.217,2.217,0,0,0,2.6,35.593H2.515m9.291,4.932a1.583,1.583,0,1,1,1.584,1.583,1.552,1.552,0,0,1-1.584-1.583m-4.419,0a6,6,0,1,0,6-6,6.036,6.036,0,0,0-6,6" transform="translate(0 -34.522)" fill="url(#linear-gradient)"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <path id="Trazado_114" data-name="Trazado 114" d="M21.127,3.867a.476.476,0,0,0-.12.021,9.9,9.9,0,0,0-4.341,2.854h0A1.251,1.251,0,0,1,14.88,4.992a.465.465,0,0,0-.022-.657h0a.467.467,0,0,0-.657.022,2.175,2.175,0,0,0,2.98,3.159.466.466,0,0,0,.131-.1l0,0h0a.447.447,0,0,0,.031-.033,8.965,8.965,0,0,1,3.948-2.6.465.465,0,0,0,.3-.586h0a.465.465,0,0,0-.442-.32h-.025M30.305,4a.465.465,0,0,0,.1.65h0A10.705,10.705,0,0,1,31.839,5.9a.465.465,0,0,0,.672-.643,11.653,11.653,0,0,0-1.555-1.36.467.467,0,0,0-.261-.088h-.015a.466.466,0,0,0-.375.19m-7.6-.5a.465.465,0,0,0,.128.922A8.967,8.967,0,0,1,28.822,5.69a.465.465,0,0,0,.641-.148h0a.466.466,0,0,0-.149-.641,9.9,9.9,0,0,0-4.884-1.494q-.175-.006-.351-.006a9.933,9.933,0,0,0-1.376.1m2.263-1.409a.465.465,0,0,0,.407.517h0a10.664,10.664,0,0,1,3.705,1.158.465.465,0,1,0,.434-.822h0a11.583,11.583,0,0,0-4.027-1.259.447.447,0,0,0-.054,0h0a.465.465,0,0,0-.462.41m-1.215-.418a11.639,11.639,0,0,0-8.08,3.61.465.465,0,0,0,.015.658h0a.465.465,0,0,0,.658-.016h0A10.708,10.708,0,0,1,23.782,2.6a.465.465,0,0,0,.451-.479h0a.465.465,0,0,0-.465-.451h-.014m6.087.142a.465.465,0,0,0,.186.631h0a12.455,12.455,0,0,1,3.213,2.5l.012.013a1.251,1.251,0,1,1-1.807,1.728l0,0-.009-.011a9.857,9.857,0,0,0-.729-.728.465.465,0,0,0-.623.691h0a9.093,9.093,0,0,1,.66.66l.013.016a2.179,2.179,0,1,0,3.193-2.967l-.025-.031a13.386,13.386,0,0,0-3.451-2.691.463.463,0,0,0-.217-.057h-.005a.465.465,0,0,0-.409.244M19,1A13.389,13.389,0,0,0,15.345,3.24a.465.465,0,0,0,.607.705,12.446,12.446,0,0,1,3.4-2.084.466.466,0,0,0,.254-.607h0a.465.465,0,0,0-.422-.29h-.006A.466.466,0,0,0,19,1m5.064-1q-.157,0-.314,0a13.4,13.4,0,0,0-3.129.45.466.466,0,0,0,.241.9h0a12.448,12.448,0,0,1,7.709.415.465.465,0,0,0,.6-.265h0a.465.465,0,0,0-.266-.6h0A13.389,13.389,0,0,0,24.8.018Q24.446,0,24.092,0Z" transform="translate(-13.615 0.001)" fill="url(#linear-gradient)"/>
    </clipPath>
    <clipPath id="clip-path-5">
      <rect id="Rectángulo_87" data-name="Rectángulo 87" width="26.543" height="13.497" fill="url(#linear-gradient)"/>
    </clipPath>
  </defs>
  <circle id="Elipse_3" data-name="Elipse 3" cx="19" cy="19" r="19" fill="#11395d"/>
  <g id="Grupo_166" data-name="Grupo 166" transform="translate(5.611 5.602)" clip-path="url(#clip-path)">
    <g id="Grupo_158" data-name="Grupo 158" transform="translate(0 7.395)">
      <g id="Grupo_157" data-name="Grupo 157" clip-path="url(#clip-path-2)">
        <rect id="Rectángulo_85" data-name="Rectángulo 85" width="28.427" height="32.986" transform="translate(-6.782 16.636) rotate(-67.82)" fill="url(#linear-gradient)"/>
      </g>
    </g>
    <g id="Grupo_160" data-name="Grupo 160" transform="translate(2.917 0)">
      <g id="Grupo_159" data-name="Grupo 159" clip-path="url(#clip-path-3)">
        <rect id="Rectángulo_86" data-name="Rectángulo 86" width="18.051" height="22.466" transform="matrix(0.518, -0.856, 0.856, 0.518, -3.862, 6.02)" fill="url(#linear-gradient)"/>
      </g>
    </g>
    <g id="Grupo_165" data-name="Grupo 165">
      <g id="Grupo_164" data-name="Grupo 164" clip-path="url(#clip-path)">
        <g id="Grupo_163" data-name="Grupo 163" transform="translate(0.097 13.299)" opacity="0.2">
          <g id="Grupo_162" data-name="Grupo 162">
            <g id="Grupo_161" data-name="Grupo 161" clip-path="url(#clip-path-5)">
              <path id="Trazado_115" data-name="Trazado 115" d="M22.672,65.861a8.97,8.97,0,0,1-17.885,0q-2.2.418-4.332,1.037A13.383,13.383,0,0,0,27,66.9q-2.124-.615-4.325-1.036" transform="translate(-0.455 -65.05)" fill="url(#linear-gradient)"/>
              <path id="Trazado_116" data-name="Trazado 116" d="M40.442,68.181a6.033,6.033,0,0,0,5.989-5.753q-2.179-.273-4.416-.348c0,.034.009.065.009.1a1.583,1.583,0,0,1-3.166,0c0-.034.007-.066.01-.1q-2.236.073-4.416.348a6.034,6.034,0,0,0,5.99,5.753" transform="translate(-27.169 -62.08)" fill="url(#linear-gradient)"/>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g></g>`
            },
            chat: {
              viewBox: `0 0 28 28`,
              icon: `<path  d="M23,2H4.333A2.34,2.34,0,0,0,2,4.333v21l4.667-4.667H23a2.34,2.34,0,0,0,2.333-2.333v-14A2.34,2.34,0,0,0,23,2Zm0,16.333H6.667L4.333,20.667V4.333H23Z" transform="translate(0.333 0.333)" />`
            },
            documents: {
              viewBox: '0 0 28 28',
              icon: `<path id="Unión_12" data-name="Unión 12" d="M2.534,24.078A2.542,2.542,0,0,1,0,21.543L.013,7.6a2.533,2.533,0,0,1,2.255-2.52V2.534A2.542,2.542,0,0,1,4.8,0H20.009a2.542,2.542,0,0,1,2.534,2.534v5.1a2.544,2.544,0,0,1,2.128,2.5V21.543a2.542,2.542,0,0,1-2.534,2.534Zm0-2.534h19.6V10.138H10.354L7.819,7.6H2.534ZM8.87,5.069,11.4,7.6h8.6V2.255H4.8V5.069Zm3.535,1.267V3.8h6.336V6.336Z" transform="translate(1.689 2.333)"/>`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJQ09OUyIsImV4cG9ydHMiLCJ2aWV3Qm94IiwiaWNvbiIsImxvZ28iLCJjaGF0IiwiZG9jdW1lbnRzIiwiX3JlYWN0IiwicmVxdWlyZSIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIkFwcEljb24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbiIsIkFwcEljb25CdXR0b24iLCJwcm9wcyIsImF0dHJzIiwiY2hpbGRyZW4iLCJJY29uQnV0dG9uIiwiQXBwQnV0dG9uIiwiQnV0dG9uIl0sInNvdXJjZXMiOlsiL2ljb25zLnRzIiwiL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBYSxNQUFNQSxLQUFLLEdBQUFDLE9BQUEsQ0FBQUQsS0FBQSxHQUFHO1lBQ2pDLGVBQWUsRUFBRTtjQUNoQkUsT0FBTyxFQUFFLGdCQUFnQjtjQUN6QkMsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBcUZOO1lBQ0RDLElBQUksRUFBRTtjQUNMRixPQUFPLEVBQUUsbUJBQW1CO2NBQzVCQyxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBcUROO1lBQ0QsV0FBVyxFQUFFO2NBQ1pELE9BQU8sRUFBRSxXQUFXO2NBQ3BCQyxJQUFJLEVBQUU7YUFDTjtZQUNELFlBQVksRUFBRTtjQUNiRCxPQUFPLEVBQUUsV0FBVztjQUNwQkMsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQWtETjtZQUNERSxJQUFJLEVBQUU7Y0FDTEgsT0FBTyxFQUFFLFdBQVc7Y0FDcEJDLElBQUksRUFBRTthQUNOO1lBQ0RHLFNBQVMsRUFBRTtjQUNWSixPQUFPLEVBQUUsV0FBVztjQUNwQkMsSUFBSSxFQUFFOztXQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbE5ELElBQUFJLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUVPO1VBQVUsU0FBVUksT0FBT0EsQ0FBQztZQUFFVDtVQUFJLENBQUU7WUFDMUNBLElBQUksR0FBR1EsT0FBQSxDQUFBWCxLQUFLLENBQUNhLGNBQWMsQ0FBQ1YsSUFBSSxDQUFDLEdBQUdRLE9BQUEsQ0FBQVgsS0FBSyxDQUFDRyxJQUFJLENBQUMsR0FBR0EsSUFBSTtZQUV0RCxPQUFPSSxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixNQUFBLENBQUFPLElBQUk7Y0FBQ2IsSUFBSSxFQUFFQTtZQUFJLEVBQUk7VUFDNUI7VUFFTztVQUFVLFNBQVVjLGFBQWFBLENBQUNDLEtBQUs7WUFDN0MsTUFBTUMsS0FBSyxHQUFHO2NBQUUsR0FBR0Q7WUFBSyxDQUFFO1lBQzFCLE9BQU9DLEtBQUssQ0FBQ0MsUUFBUTtZQUNyQixJQUFJRixLQUFLLENBQUNmLElBQUksRUFBRTtjQUNmLElBQUk7Z0JBQUVBO2NBQUksQ0FBRSxHQUFHZSxLQUFLO2NBQ3BCZixJQUFJLEdBQUdRLE9BQUEsQ0FBQVgsS0FBSyxDQUFDYSxjQUFjLENBQUNWLElBQUksQ0FBQyxHQUFHUSxPQUFBLENBQUFYLEtBQUssQ0FBQ0csSUFBSSxDQUFDLEdBQUdBLElBQUk7Y0FDdERnQixLQUFLLENBQUNoQixJQUFJLEdBQUdBLElBQUk7O1lBR2xCLE9BQU9JLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNOLE1BQUEsQ0FBQVksVUFBVTtjQUFBLEdBQUtGO1lBQUssRUFBSTtVQUNqQztVQUVPO1VBQVcsU0FBVUcsU0FBU0EsQ0FBQ0osS0FBSztZQUMxQyxNQUFNQyxLQUFLLEdBQUc7Y0FBRSxHQUFHRDtZQUFLLENBQUU7WUFDMUIsT0FBT0MsS0FBSyxDQUFDQyxRQUFRO1lBQ3JCLElBQUlGLEtBQUssQ0FBQ2YsSUFBSSxFQUFFO2NBQ2YsSUFBSTtnQkFBRUE7Y0FBSSxDQUFFLEdBQUdlLEtBQUs7Y0FDcEJmLElBQUksR0FBR1EsT0FBQSxDQUFBWCxLQUFLLENBQUNhLGNBQWMsQ0FBQ1YsSUFBSSxDQUFDLEdBQUdRLE9BQUEsQ0FBQVgsS0FBSyxDQUFDRyxJQUFJLENBQUMsR0FBR0EsSUFBSTtjQUN0RGdCLEtBQUssQ0FBQ2hCLElBQUksR0FBR0EsSUFBSTs7WUFHbEIsT0FBT0ksTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsV0FBQSxDQUFBYSxNQUFNO2NBQUEsR0FBS0o7WUFBSyxHQUFHRCxLQUFLLENBQUNFLFFBQVEsQ0FBVTtVQUNwRCJ9