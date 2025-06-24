System.register([], function (_export, _context) {
	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/rvd',
				version: '0.5.1-dev.07',
				languages: { default: 'en', supported: ['en', 'es', 'de'] },
				environment: 'development',
				'global.css': !0,
				params: {
					app: 'rvd',
					APP_LOGO: '/assets/images/branding/logo.png',
					APP_NAME: 'AILearn',
					APP_SUPPORT_EMAIL: 'soporte@rvd.ai',
					tutorials: !0,
					baseUrl: 'https://dev.app.rvd.ai',
					apis: {
						ailearn: 'https://dev.ailearn.api.aimpact.partners',
						agents: 'https://dev.agents.api.aimpact.partners',
						realtime: 'wss://dev.agents.api.aimpact.partners'
					},
					firebase: {
						baseUrl: 'https://dev.app.rvd.ai',
						apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
						authDomain: 'aimpact-partners-dev.firebaseapp.com',
						databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
						projectId: 'aimpact-partners-dev',
						storageBucket: 'aimpact-partners-dev.appspot.com',
						messagingSenderId: '1081434267674',
						appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
						measurementId: 'G-QLL5WFH89Y'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
