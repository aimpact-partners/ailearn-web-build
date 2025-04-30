System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/ailearn-app',
				version: '0.4.1-test.07',
				languages: {
					default: 'en',
					supported: ['en', 'es', 'de']
				},
				environment: 'testing',
				'global.css': true,
				params: {
					config: {
						system: false
					},
					container: 'file',
					project: 'rvd',
					APP_NAME: 'Ailearn',
					APP_LOGO: 'logo.png',
					url: 'https://documents-rb5caohzgq-wl.a.run.app/upload',
					DOCUMENTS_SERVER: 'https://documents-rb5caohzgq-wl.a.run.app',
					CHAT_API_SERVER: 'https://chat-api-http-v2-rb5caohzgq-uc.a.run.app/upload',
					beta: false,
					baseUrl: 'https://test.app.rvd.ai',
					apps: {
						'better-mind': {
							apiKey: 'AIzaSyBpF4toVpG-m_XQa3S1Z43hpe766H2JUUA',
							authDomain: 'better-mind-dev.firebaseapp.com',
							projectId: 'better-mind-dev',
							storageBucket: 'better-mind-dev.firebasestorage.app',
							messagingSenderId: '1062406359948',
							appId: '1:1062406359948:web:6423f65f5a0cb0358864a9',
							measurementId: 'G-KMQ7Z80SH9'
						},
						rvd: {
							apiKey: 'AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0',
							authDomain: 'chat-api-test-393820.firebaseapp.com',
							projectId: 'chat-api-test-393820',
							storageBucket: 'chat-api-test-393820.appspot.com',
							messagingSenderId: '1083395329827',
							appId: '1:1083395329827:web:c6fead0e2d4124b4f90696'
						}
					},
					apis: {
						rvd: 'https://test.ailearn.api.aimpact.partners',
						'better-mind': 'https://better-mind-api-1062406359948.europe-west10.run.app'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
