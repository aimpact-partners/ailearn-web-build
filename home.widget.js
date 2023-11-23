System.register(
	[
		'@beyond-js/widgets@0.1.5/render',
		'@beyond-js/kernel@0.1.9/bundle',
		'@beyond-js/kernel@0.1.9/styles',
		'@beyond-js/react-18-widgets@1.0.1/page',
		'@aimpact/ailearn-sdk@1.0.0/core',
		'@beyond-js/reactive@1.1.6/model',
		'react@18.2.0',
		'pragmate-ui@0.0.3/icons',
		'@aimpact/ailearn-app@0.0.14/components/ui',
		'@beyond-js/react-18-widgets@1.0.1/hooks',
		'pragmate-ui@0.0.3/components',
		'@aimpact/chat-sdk@1.0.0/session',
	],
	function (_export, _context2) {
		'use strict';

		var dependency_0,
			dependency_1,
			dependency_2,
			dependency_3,
			dependency_4,
			dependency_5,
			dependency_6,
			dependency_7,
			dependency_8,
			dependency_9,
			dependency_10,
			dependency_11,
			bimport,
			__Bundle,
			__pkg,
			ims,
			Controller,
			View,
			__beyond_pkg,
			hmr;
		_export({
			Controller: void 0,
			View: void 0,
		});
		return {
			setters: [
				function (_beyondJsWidgets015Render) {
					dependency_0 = _beyondJsWidgets015Render;
				},
				function (_beyondJsKernel019Bundle) {
					dependency_1 = _beyondJsKernel019Bundle;
				},
				function (_beyondJsKernel019Styles) {
					dependency_2 = _beyondJsKernel019Styles;
				},
				function (_beyondJsReact18Widgets101Page) {
					dependency_3 = _beyondJsReact18Widgets101Page;
				},
				function (_aimpactAilearnSdk100Core) {
					dependency_4 = _aimpactAilearnSdk100Core;
				},
				function (_beyondJsReactive116Model) {
					dependency_5 = _beyondJsReactive116Model;
				},
				function (_react2) {
					dependency_6 = _react2;
				},
				function (_pragmateUi003Icons) {
					dependency_7 = _pragmateUi003Icons;
				},
				function (_aimpactAilearnApp0014ComponentsUi) {
					dependency_8 = _aimpactAilearnApp0014ComponentsUi;
				},
				function (_beyondJsReact18Widgets101Hooks) {
					dependency_9 = _beyondJsReact18Widgets101Hooks;
				},
				function (_pragmateUi003Components) {
					dependency_10 = _pragmateUi003Components;
				},
				function (_aimpactChatSdk100Session) {
					dependency_11 = _aimpactChatSdk100Session;
				},
			],
			execute: function () {
				bimport = specifier => {
					const dependencies = new Map([
						['@aimpact/chat-api', '0.1.0'],
						['@aimpact/chat', '1.0.1'],
						['@aimpact/chat-sdk', '1.0.0'],
						['@aimpact/ailearn-sdk', '1.0.0'],
						['@aimpact/ailearn-api', '0.2.0'],
						['@bgroup/media-manager', '1.0.0'],
						['@beyond-js/reactive', '1.1.6'],
						['pragmate-ui', '0.0.3'],
						['@beyond-js/backend', '0.1.9'],
						['@beyond-js/events', '0.0.6'],
						['@beyond-js/kernel', '0.1.9'],
						['@beyond-js/local', '0.1.3'],
						['@beyond-js/react-18-widgets', '1.0.1'],
						['apexcharts', '3.44.0'],
						['dayjs', '1.11.10'],
						['dexie', '3.2.4'],
						['dompurify', '3.0.6'],
						['firebase', '10.5.0'],
						['firebase-admin', '11.11.0'],
						['highlight.js', '11.9.0'],
						['marked', '5.1.2'],
						['marked-highlight', '2.0.6'],
						['marked-mangle', '1.1.4'],
						['perfect-scrollbar', '1.5.5'],
						['prism-react-renderer', '1.3.5'],
						['prismjs', '1.29.0'],
						['socket.io-client', '4.7.2'],
						['swiper', '8.4.7'],
						['tippy.js', '6.3.7'],
						['@types/react', '18.2.29'],
						['@types/react-dom', '18.2.14'],
						['@aimpact/ailearn-app', '0.0.14'],
						['@aimpact/ailearn-app', '0.0.14'],
					]);
					return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
				};
				({ Bundle: __Bundle } = dependency_1);
				__pkg = new __Bundle(
					{
						module: {
							vspecifier: '@aimpact/ailearn-app@0.0.14/home',
							multibundle: true,
						},
						type: 'widget',
					},
					_context2.meta.url
				).package();
				__pkg.dependencies.update([
					['@beyond-js/widgets/render', dependency_0],
					['@beyond-js/kernel/styles', dependency_2],
					['@beyond-js/react-18-widgets/page', dependency_3],
					['@aimpact/ailearn-sdk/core', dependency_4],
					['@beyond-js/reactive/model', dependency_5],
					['react', dependency_6],
					['pragmate-ui/icons', dependency_7],
					['@aimpact/ailearn-app/components/ui', dependency_8],
					['@beyond-js/react-18-widgets/hooks', dependency_9],
					['pragmate-ui/components', dependency_10],
					['@aimpact/chat-sdk/session', dependency_11],
				]);
				brequire('@beyond-js/widgets/render').widgets.register([
					{
						name: 'student-home',
						vspecifier: '@aimpact/ailearn-app@0.0.14/home.widget',
						is: 'page',
						route: '/home',
						layout: 'chat-layout',
					},
				]);
				brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/home.widget');
				ims = new Map();
				/****************************
      INTERNAL MODULE: ./controller
      ****************************/
				ims.set('./controller', {
					hash: 2747464748,
					creator: function (require, exports) {
						'use strict';

						Object.defineProperty(exports, '__esModule', {
							value: true,
						});
						exports.Controller = void 0;
						var _page = require('@beyond-js/react-18-widgets/page');
						var _store = require('./store');
						var _views = require('./views');
						/*bundle*/
						class Controller extends _page.PageReactWidgetController {
							#store;
							createStore() {
								this.#store = new _store.StoreManager();
								return this.#store;
							}
							get Widget() {
								return _views.View;
							}
							/**
							 * this method is executed when the widget is showd
							 */
							show() {
								this.#store.load();
							}
							/**
							 * this method is executed when the widget is hidden
							 */
							hide() {}
						}
						exports.Controller = Controller;
					},
				});

				/***********************
      INTERNAL MODULE: ./store
      ***********************/

				ims.set('./store', {
					hash: 844238308,
					creator: function (require, exports) {
						'use strict';

						Object.defineProperty(exports, '__esModule', {
							value: true,
						});
						exports.StoreManager = void 0;
						var _core = require('@aimpact/ailearn-sdk/core');
						var _model = require('@beyond-js/reactive/model');
						class StoreManager extends _model.ReactiveModel {
							#model;
							get model() {
								return this.#model;
							}
							get items() {
								return this.#model.assignments;
							}
							async load() {
								try {
									this.#model = new _core.Classroom();
									const id = '618347977411';
									// if (!status) throw new Error('Error loading prompts');
									this.#model = await this.#model.load({
										id,
									});
									this.ready = true;
									// this.triggerEvent();
								} catch (e) {
									console.error(e);
								}
							}
						}
						exports.StoreManager = StoreManager;
					},
				});

				/*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

				ims.set('./views/context', {
					hash: 2750163565,
					creator: function (require, exports) {
						'use strict';

						Object.defineProperty(exports, '__esModule', {
							value: true,
						});
						exports.useProjectsContext = exports.ProjectsContext = void 0;
						var _react = require('react');
						const ProjectsContext = (exports.ProjectsContext = _react.default.createContext({}));
						const useProjectsContext = () => _react.default.useContext(ProjectsContext);
						exports.useProjectsContext = useProjectsContext;
					},
				});

				/*******************************
      INTERNAL MODULE: ./views/divider
      *******************************/

				ims.set('./views/divider', {
					hash: 3754943255,
					creator: function (require, exports) {
						'use strict';

						Object.defineProperty(exports, '__esModule', {
							value: true,
						});
						exports.ModuleDivider = ModuleDivider;
						var _react = require('react');
						var _context = require('./context');
						function ModuleDivider() {
							const { texts } = (0, _context.useProjectsContext)();
							return _react.default.createElement(
								'div',
								{
									className: 'divider__container',
								},
								_react.default.createElement(
									'h2',
									{
										className: 'divider__title',
									},
									texts.dividerTitle
								),
								_react.default.createElement('div', {
									className: 'divider__bar',
								})
							);
						}
					},
				});

				/*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

				ims.set('./views/index', {
					hash: 3539998502,
					creator: function (require, exports) {
						'use strict';

						Object.defineProperty(exports, '__esModule', {
							value: true,
						});
						exports.View = View;
						var _ui = require('@aimpact/ailearn-app/components/ui');
						var _react = require('react');
						var _hooks = require('@beyond-js/react-18-widgets/hooks');
						var _module2 = require('./module');
						var _divider = require('./divider');
						var _context = require('./context');
						var _components = require('pragmate-ui/components');
						var _beyond_context = require('beyond_context');
						var _session = require('@aimpact/chat-sdk/session');
						/*bundle*/
						function View({ store }) {
							const [ready, setReady] = (0, _react.useState)(store.ready);
							const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
							const userName = _session.sessionWrapper.user.displayName;
							(0, _hooks.useBinder)([store], () => {
								setReady(store.ready);
							});
							if (!textsReady || !ready)
								return _react.default.createElement(_components.Spinner, {
									active: true,
								});
							const { sessions } = store.model;
							const contextValue = {
								store,
								fetching: store.fetching,
								texts,
								items: sessions,
							};
							return _react.default.createElement(
								_context.ProjectsContext.Provider,
								{
									value: contextValue,
								},
								_react.default.createElement(_ui.PageHeader, {
									breadcrumb: [['AI-Learn', '/']],
								}),
								_react.default.createElement(
									_ui.PageContainer,
									null,
									_react.default.createElement(
										_ui.HeaderCard,
										{
											title: texts.greeting.replace('%name', userName),
											alt: 'card-robot',
											image: '/assets/ai-robot.webp',
										},
										_react.default.createElement('p', null, texts.greetingIntro)
									),
									_react.default.createElement(_divider.ModuleDivider, null),
									_react.default.createElement(_ui.ListContainer, {
										items: store.items,
										control: _module2.Module,
									})
								)
							);
						}
					},
				});

				/******************************
      INTERNAL MODULE: ./views/module
      ******************************/

				ims.set('./views/module', {
					hash: 3345083147,
					creator: function (require, exports) {
						'use strict';

						Object.defineProperty(exports, '__esModule', {
							value: true,
						});
						exports.Module = Module;
						var _ui = require('@aimpact/ailearn-app/components/ui');
						var _react = require('react');
						var _context = require('./context');
						function applyEllipsis(text, maxLength) {
							return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
						}
						/**bundle*/
						function Module({ data }) {
							const { texts } = (0, _context.useProjectsContext)();
							const attrs = {
								image: 'https://img.freepik.com/free-vector/classroom-mathematics-learning_107791-1354.jpg',
								classroom: 'Classroom',
							};
							const staticDescription = 'Missing: Descripción del objetivo de aprendizaje';
							return _react.default.createElement(
								_ui.Card,
								{
									data: data,
									link: `/assignment/${data.id}`,
								},
								_react.default.createElement(
									_ui.CardImage,
									{
										src: attrs.image,
										alt: data.module.title,
									},
									_react.default.createElement(
										'div',
										{
											className: 'card__top_text',
										},
										attrs.classroom
									)
								),
								_react.default.createElement(
									_ui.CardContent,
									{
										option: 1,
										className: 'theme-0',
									},
									_react.default.createElement(
										'h5',
										{
											className: 'card__title h3',
										},
										applyEllipsis(data.module.title, 55)
									),
									_react.default.createElement(
										'span',
										{
											className: 'card__subtitle disabled-text',
										},
										applyEllipsis(data.module.description, 135)
									),
									_react.default.createElement(
										'div',
										{
											className: 'card__footer-actions',
										},
										_react.default.createElement('hr', {
											className: 'card__divider',
										}),
										_react.default.createElement(
											'div',
											{
												className: 'card__details',
											},
											_react.default.createElement(
												'p',
												{
													className: 'cart__text-non-hover',
												},
												data.module?.activities?.length,
												' ',
												texts.moduleSubtitleText,
												' '
											),
											_react.default.createElement(
												'p',
												{
													className: 'card__text-hover',
												},
												texts.moduleAccess
											)
										)
									)
								)
							);
						}
					},
				});
				__pkg.exports.descriptor = [
					{
						im: './controller',
						from: 'Controller',
						name: 'Controller',
					},
					{
						im: './views/index',
						from: 'View',
						name: 'View',
					},
				];
				// Module exports
				__pkg.exports.process = function ({ require, prop, value }) {
					(require || prop === 'Controller') &&
						_export('Controller', (Controller = require ? require('./controller').Controller : value));
					(require || prop === 'View') &&
						_export('View', (View = require ? require('./views/index').View : value));
				};
				_export('__beyond_pkg', (__beyond_pkg = __pkg));
				_export(
					'hmr',
					(hmr = new (function () {
						this.on = (event, listener) => __pkg.hmr.on(event, listener);
						this.off = (event, listener) => __pkg.hmr.off(event, listener);
					})())
				);
				__pkg.initialise(ims);
			},
		};
	}
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJhc3NpZ25tZW50cyIsIkNsYXNzcm9vbSIsImlkIiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiUHJvamVjdHNDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9qZWN0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJNb2R1bGVEaXZpZGVyIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGl2aWRlclRpdGxlIiwiX3VpIiwiX2hvb2tzIiwiX21vZHVsZTIiLCJfZGl2aWRlciIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlck5hbWUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJzZXNzaW9ucyIsImNvbnRleHRWYWx1ZSIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJ0aXRsZSIsImdyZWV0aW5nIiwicmVwbGFjZSIsImFsdCIsImltYWdlIiwiZ3JlZXRpbmdJbnRybyIsIkxpc3RDb250YWluZXIiLCJjb250cm9sIiwiTW9kdWxlIiwiYXBwbHlFbGxpcHNpcyIsInRleHQiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsImRhdGEiLCJhdHRycyIsImNsYXNzcm9vbSIsInN0YXRpY0Rlc2NyaXB0aW9uIiwiQ2FyZCIsImxpbmsiLCJDYXJkSW1hZ2UiLCJzcmMiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsImRlc2NyaXB0aW9uIiwiYWN0aXZpdGllcyIsIm1vZHVsZVN1YnRpdGxlVGV4dCIsIm1vZHVsZUFjY2VzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZGl2aWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9B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
