System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/rvd',
				version: '0.5.1-test.15',
				languages: {
					default: 'en',
					supported: ['en', 'es', 'de']
				},
				environment: 'testing',
				'global.css': true,
				params: {
					app: 'rvd',
					APP_LOGO: '/assets/images/branding/logo.png',
					APP_NAME: 'AILearn',
					APP_SUPPORT_EMAIL: 'soporte@rvd.ai',
					tutorials: true,
					baseUrl: 'https://test.app.rvd.ai',
					apis: {
						ailearn: 'https://test.ailearn.api.aimpact.partners',
						agents: 'https://test.agents.api.aimpact.partners',
						realtime: 'wss://test.agents.api.aimpact.partners'
					},
					firebase: {
						baseUrl: 'https://test.app.rvd.ai',
						apiKey: 'AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0',
						authDomain: 'chat-api-test-393820.firebaseapp.com',
						projectId: 'chat-api-test-393820',
						storageBucket: 'chat-api-test-393820.appspot.com',
						messagingSenderId: '1083395329827',
						appId: '1:1083395329827:web:c6fead0e2d4124b4f90696'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
