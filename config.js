System.register([], function (a, e) {
	'use strict';
	return {
		setters: [],
		execute: function () {
			a('default', {
				package: '@aimpact/ailearn-app',
				version: '0.1.6-test.29',
				languages: { default: 'en', supported: ['en', 'es', 'pt'] },
				environment: 'testing',
				'global.css': !0,
				params: {
					config: { system: !1 },
					container: 'file',
					project: 'ailearn-estrada',
					APP_NAME: 'RVD.AI',
					APP_LOGO: '/assets/rvd/rvd.png',
					url: 'https://documents-rb5caohzgq-wl.a.run.app/upload',
					DOCUMENTS_SERVER: 'https://documents-rb5caohzgq-wl.a.run.app',
					CHAT_API_SERVER: 'https://chat-api-http-v2-rb5caohzgq-uc.a.run.app/upload',
					beta: !1,
					elevenlabs: { key: 'ebe05ca0a4d9aafb4024d0666471a0c7', id: 'pNInz6obpgDQGcFmaJgB' },
					baseUrl: 'https://test.app.rvd.ai',
					apis: { ailearn: 'https://test.ailearn.api.aimpact.partners' }
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
