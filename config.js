System.register([], function (a, e) {
	return {
		setters: [],
		execute: function () {
			a('default', {
				package: '@aimpact/rvd',
				version: '0.4.1-beta.14',
				languages: { default: 'en', supported: ['en', 'es', 'de'] },
				environment: 'quality',
				'global.css': !0,
				params: {
					app: 'rvd',
					APP_LOGO: '/assets/images/branding/logo.png',
					APP_NAME: 'AILearn',
					APP_SUPPORT_EMAIL: 'soporte@rvd.ai',
					tutorials: !0,
					baseUrl: 'https://beta.app.rvd.ai',
					apis: {
						ailearn: 'https://beta.ailearn.api.aimpact.partners',
						agents: 'https://beta.agents.api.aimpact.partners'
					},
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
