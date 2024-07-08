System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/chat-auth',
				version: '1.0.0',
				languages: {
					default: 'en',
					supported: ['en', 'es'],
				},
				environment: 'production',
				'global.css': true,
				params: {
					baseUrl: 'https://app.rvd.ai',
				},
				ssr: {},
				backend: {},
			});
		},
	};
});
