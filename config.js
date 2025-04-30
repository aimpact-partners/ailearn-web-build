System.register([], function (e, a) {
	return {
		setters: [],
		execute: function () {
			e('default', {
				package: '@aimpact/ailearn-app',
				version: '0.4.1-beta.07',
				languages: { default: 'en', supported: ['en', 'es', 'de'] },
				environment: 'quality',
				'global.css': !0,
				params: {
					config: { system: !1 },
					container: 'file',
					project: 'rvd',
					APP_NAME: 'Ailearn',
					APP_LOGO: 'logo.png',
					url: 'https://documents-rb5caohzgq-wl.a.run.app/upload',
					DOCUMENTS_SERVER: 'https://documents-rb5caohzgq-wl.a.run.app',
					CHAT_API_SERVER: 'https://chat-api-http-v2-rb5caohzgq-uc.a.run.app/upload',
					beta: !1,
					baseUrl: 'https://beta.app.rvd.ai',
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
							apiKey: 'AIzaSyAEEozzwR0cguqynxvL1qB38i8liOCgtJc',
							authDomain: 'aimpact-partners-prod.firebaseapp.com',
							projectId: 'aimpact-partners-prod',
							storageBucket: 'aimpact-partners-prod.appspot.com',
							messagingSenderId: '741854278426',
							appId: '1:741854278426:web:9ff2a50e705edcc501f2a3'
						}
					},
					apis: {
						rvd: 'https://beta.ailearn.api.aimpact.partners',
						'better-mind': 'https://better-mind-api-1062406359948.europe-west10.run.app'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
