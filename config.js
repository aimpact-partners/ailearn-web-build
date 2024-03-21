System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/ailearn-app',
				version: 'test-0.0.29-06',
				languages: {
					default: 'en',
					supported: ['en', 'es', 'pr'],
				},
				environment: 'testing',
				'global.css': true,
				layout: 'ailearn-layout',
				params: {
					config: {
						system: false,
					},
					container: 'file',
					project: 'ailearn-estrada',
					APP_NAME: 'RVD.AI',
					APP_LOGO: '/assets/RVD.AI.Branding.Negative.png',
					url: 'https://documents-rb5caohzgq-wl.a.run.app/upload',
					DOCUMENTS_SERVER: 'https://documents-rb5caohzgq-wl.a.run.app',
					CHAT_API_SERVER: 'https://chat-api-http-v2-rb5caohzgq-uc.a.run.app/upload',
					elevenlabs: {
						key: 'ebe05ca0a4d9aafb4024d0666471a0c7',
						id: 'pNInz6obpgDQGcFmaJgB',
					},
					baseUrl: 'https://test.app.rvd.ai',
					apis: {
						ailearn: 'https://ailearn-http-v2-6dlchqr2za-uc.a.run.app',
						chat: 'https://chat-api-http-skvkre4apq-uc.a.run.app',
					},
				},
				ssr: {},
				backend: {},
			});
		},
	};
});
