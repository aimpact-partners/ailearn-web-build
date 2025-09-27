System.register([], function (_export, _context) {
	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/rvd',
				version: '0.6.2-beta.04',
				languages: { default: 'en', supported: ['en', 'es', 'de', 'pt', 'fr'] },
				environment: 'quality',
				'global.css': !0,
				params: {
					app: 'rvd',
					APP_LOGO: '/assets/images/branding/logo.png',
					APP_NAME: 'RVD AI',
					APP_SUPPORT_EMAIL: 'soporte@rvd.ai',
					tutorials: !0,
					baseUrl: 'https://beta.app.rvd.ai',
					apis: {
						ailearn: 'https://beta.ailearn.api.aimpact.partners',
						agents: 'https://beta.agents.api.aimpact.partners',
						realtime: 'wss://beta.agents.api.aimpact.partners'
					},
					ailearn: 'https://dev.ailearn.api.aimpact.partners',
					agents: { projectId: 'a1l34rn1-453a-4612-b6fd-59cb742111d0' },
					firebase: {
						baseUrl: 'https://beta.app.rvd.ai',
						apiKey: 'AIzaSyAEEozzwR0cguqynxvL1qB38i8liOCgtJc',
						authDomain: 'aimpact-partners-prod.firebaseapp.com',
						projectId: 'aimpact-partners-prod',
						storageBucket: 'aimpact-partners-prod.appspot.com',
						messagingSenderId: '741854278426',
						appId: '1:741854278426:web:9ff2a50e705edcc501f2a3'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
