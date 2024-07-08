System.register([], function (a, e) {
	'use strict';
	return {
		setters: [],
		execute: function () {
			a('default', {
				package: '@aimpact/auth',
				version: '0.0.1',
				languages: {
					default: 'en',
					supported: ['en', 'es'],
				},
				environment: 'development',
				'global.css': true,
				local: 'web',
				layout: 'main-layout',
				params: {},
			});
		},
	};
});
