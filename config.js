System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/rvd',
				version: '0.7.0-dev.22',
				languages: {
					default: 'en',
					supported: ['en', 'es', 'de', 'pt', 'fr']
				},
				environment: 'development',
				'global.css': true,
				params: {
					app: 'rvd',
					APP_LOGO: '/assets/images/branding/logo.png',
					APP_NAME: 'RVD AI',
					APP_SUPPORT_EMAIL: 'soporte@rvd.ai',
					tutorials: true,
					baseUrl: 'https://dev.app.rvd.ai',
					apis: {
						ailearn: 'https://dev.ailearn.api.aimpact.partners',
						agents: 'https://dev.agents.api.aimpact.partners',
						realtime: 'wss://dev.agents.api.aimpact.partners'
					},
					agents: {
						projectId: 'a1l34rn1-453a-4612-b6fd-59cb742111d0'
					},
					firebase: {
						baseUrl: 'https://dev.app.rvd.ai',
						apiKey: 'AIzaSyBLJbMs8avqc-poEz_CA0qzF8-0DzAtxfI',
						authDomain: 'ailearn-dev-393820.firebaseapp.com',
						databaseURL: 'https://ailearn-dev-393820-default-rtdb.firebaseio.com',
						projectId: 'ailearn-dev-393820',
						storageBucket: 'ailearn-dev-393820.firebasestorage.app',
						messagingSenderId: '192195764403',
						appId: '1:192195764403:web:fa6928e365b01ee6d310c6',
						measurementId: 'G-QLL5WFH89Y'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
