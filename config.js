System.register([], function (a, e) {
	'use strict';
	return {
		setters: [],
		execute: function () {
			a('default', {
				package: '@aimpact/ailearn-app',
				version: 'dev-0.0.32-37',
				languages: { default: 'en', supported: ['en', 'es', 'pr'] },
				environment: 'development',
				'global.css': !0,
				params: {
					config: { system: !1 },
					container: 'file',
					project: 'ailearn-estrada',
					APP_NAME: 'RVD.AI',
					APP_LOGO: '/assets/RVD.AI.Branding.Negative.png',
					url: 'https://documents-rb5caohzgq-wl.a.run.app/upload',
					DOCUMENTS_SERVER: 'https://documents-rb5caohzgq-wl.a.run.app',
					CHAT_API_SERVER: 'https://chat-api-http-v2-rb5caohzgq-uc.a.run.app/upload',
					elevenlabs: { key: 'ebe05ca0a4d9aafb4024d0666471a0c7', id: 'pNInz6obpgDQGcFmaJgB' },
					baseUrl: 'https://dev.app.rvd.ai',
					apis: {
						ailearn: 'https://ailearn-http-v2-j2rcifstnq-uc.a.run.app',
						chat: 'https://chat-api-http-v2-rb5caohzgq-uc.a.run.app',
					},
				},
				ssr: {},
				backend: {},
			});
		},
	};
});
