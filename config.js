System.register([], function (e, a) {
	return {
		setters: [],
		execute: function () {
			e('default', {
				package: '@aimpact/ailearn-app',
				version: '0.3.35-beta.01',
				languages: { default: 'en', supported: ['en', 'es', 'de'] },
				environment: 'quality',
				'global.css': !0,
				params: {
					config: { system: !1 },
					container: 'file',
					project: 'ailearn',
					APP_NAME: 'RVD.AI',
					APP_LOGO: '/assets/rvd/rvd.png',
					url: 'https://documents-rb5caohzgq-wl.a.run.app/upload',
					DOCUMENTS_SERVER: 'https://documents-rb5caohzgq-wl.a.run.app',
					CHAT_API_SERVER: 'https://chat-api-http-v2-rb5caohzgq-uc.a.run.app/upload',
					beta: !1,
					apps: {
						betterMind: {
							apiKey: 'AIzaSyBpF4toVpG-m_XQa3S1Z43hpe766H2JUUA',
							authDomain: 'better-mind-dev.firebaseapp.com',
							projectId: 'better-mind-dev',
							storageBucket: 'better-mind-dev.firebasestorage.app',
							messagingSenderId: '1062406359948',
							appId: '1:1062406359948:web:6423f65f5a0cb0358864a9',
							measurementId: 'G-KMQ7Z80SH9'
						},
						ailearn: {
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
					baseUrl: 'https://beta.app.rvd.ai',
					apis: {
						ailearn: 'https://beta.ailearn.api.aimpact.partners',
						betterMind: 'https://better-mind-api-1062406359948.europe-west10.run.app/'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
