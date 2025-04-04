System.register([], function (a, t) {
	return {
		setters: [],
		execute: function () {
			a('default', {
				package: '@aimpact/ailearn-app',
				version: '0.3.34',
				languages: { default: 'en', supported: ['en', 'es'] },
				environment: 'production',
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
					baseUrl: 'https://app.rvd.ai',
					apis: { ailearn: 'https://ailearn.api.aimpact.partners' }
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
