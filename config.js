System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/rvd',
				version: '0.5.1-dev.13',
				languages: {
					default: 'en',
					supported: ['en', 'es', 'de']
				},
				environment: 'local',
				'global.css': true,
				params: {
					app: 'rvd',
					APP_LOGO: '/assets/images/branding/logo.png',
					APP_NAME: 'AILearn',
					APP_SUPPORT_EMAIL: 'soporte@rvd.ai',
					tutorials: true,
					baseUrl: 'http://localhost:4530',
					apis: {
						ailearn: 'https://dev.ailearn.api.aimpact.partners',
						agents: 'https://dev.agents.api.aimpact.partners',
						realtime: 'wss://dev.agents.api.aimpact.partners'
					},
					firebase: {
						baseUrl: 'http://localhost:4530',
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
