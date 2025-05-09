System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/ailearn-app',
				version: '0.4.1',
				languages: {
					default: 'en',
					supported: ['en', 'es', 'de'],
				},
				environment: 'local',
				'global.css': true,
				local: 'web',
				params: {
					container: 'file',
					project: 'rvd',
					APP_NAME: 'Ailearn',
					APP_LOGO: 'branding/logo.png',
				},
			});
		},
	};
});
111;
