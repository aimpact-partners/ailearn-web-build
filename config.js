System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/rvd',
				version: '0.7.0-test.21',
				languages: {
					default: 'en',
					supported: ['en', 'es', 'de', 'pt', 'fr']
				},
				environment: 'testing',
				'global.css': true,
				params: {
					app: 'rvd',
					APP_LOGO: '/assets/images/branding/logo.png',
					APP_NAME: 'RVD AI',
					APP_SUPPORT_EMAIL: 'soporte@rvd.ai',
					tutorials: true,
					baseUrl: 'https://test.app.rvd.ai',
					apis: {
						ailearn: 'https://test.ailearn.api.aimpact.partners',
						agents: 'https://test.agents.api.aimpact.partners',
						realtime: 'wss://test.agents.api.aimpact.partners'
					},
					ailearn: 'https://dev.ailearn.api.aimpact.partners',
					agents: {
						projectId: 'a1l34rn1-453a-4612-b6fd-59cb742111d0'
					},
					firebase: {
						baseUrl: 'https://test.app.rvd.ai',
						apiKey: 'AIzaSyAf35-QuW6en70ZMeMX22g_gfAM1y-seno',
						authDomain: 'ailearn-test.firebaseapp.com',
						projectId: 'ailearn-test',
						storageBucket: 'ailearn-test.firebasestorage.app',
						messagingSenderId: '128578436998',
						appId: '1:128578436998:web:55d6185e5b5027bd477607'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
