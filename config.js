System.register([], function (_export, _context) {
	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/rvd',
				version: '0.6.6',
				languages: { default: 'en', supported: ['en', 'es', 'de', 'pt', 'fr'] },
				environment: 'production',
				'global.css': !0,
				params: {
					app: 'rvd',
					APP_LOGO: '/assets/images/branding/logo.png',
					APP_NAME: 'RVD AI',
					APP_SUPPORT_EMAIL: 'soporte@rvd.ai',
					tutorials: !0,
					baseUrl: 'https://app.rvd.ai',
					apis: {
						ailearn: 'https://ailearn.api.aimpact.partners',
						agents: 'https://agents.api.aimpact.partners',
						realtime: 'wss://agents.api.aimpact.partners'
					},
					ailearn: 'https://dev.ailearn.api.aimpact.partners',
					agents: { projectId: 'a1l34rn1-453a-4612-b6fd-59cb742111d0' },
					firebase: {
						baseUrl: 'https://app.rvd.ai',
						apiKey: 'AIzaSyAx9lNe3j-LBqdqhAVl3ytmZxUI3xcAMmo',
						authDomain: 'ailearn-prod-404415.firebaseapp.com',
						projectId: 'ailearn-prod-404415',
						storageBucket: 'ailearn-prod-404415.firebasestorage.app',
						messagingSenderId: '755928984767',
						appId: '1:755928984767:web:d9fc0405944137fdf0ea0a'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
