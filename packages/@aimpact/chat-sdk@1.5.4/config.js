System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/chat-sdk',
				version: '1.5.4',
				languages: {
					default: 'en',
					supported: ['en', 'es', 'pr']
				},
				environment: 'testing',
				'global.css': true,
				local: 'web-testing',
				layout: 'main-layout',
				params: {
					project: 'betterMind',
					baseUrl: 'https://test.app.rvd.ai',
					apis: {
						chat: 'https://chat-api-http-skvkre4apq-uc.a.run.app'
					}
				}
			});
		}
	};
});
