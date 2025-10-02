System.register(
	[
		'@beyond-js/kernel@0.1.14/bundle',
		'@beyond-js/reactive@2.1.1/entities/collection',
		'@beyond-js/reactive@2.1.1/model',
		'@aimpact/chat-sdk@1.5.5/session',
		'@beyond-js/http-suite@0.1.1/api',
		'@aimpact/ailearn-sdk@1.2.0/config',
		'@aimpact/ailearn-sdk@1.2.0/startup',
		'@beyond-js/reactive@2.1.1/entities/item'
	],
	function (_export, _context) {
		var dependency_0,
			dependency_1,
			dependency_2,
			dependency_3,
			dependency_4,
			dependency_5,
			dependency_6,
			dependency_7,
			__pkg,
			__Bundle;
		return (
			_export({ Groups: void 0, DataProvider: void 0, GroupItem: void 0 }),
			{
				setters: [
					function (_beyondJsKernel0114Bundle) {
						dependency_0 = _beyondJsKernel0114Bundle;
					},
					function (_beyondJsReactive211EntitiesCollection) {
						dependency_1 = _beyondJsReactive211EntitiesCollection;
					},
					function (_beyondJsReactive211Model) {
						dependency_2 = _beyondJsReactive211Model;
					},
					function (_aimpactChatSdk155Session) {
						dependency_3 = _aimpactChatSdk155Session;
					},
					function (_beyondJsHttpSuite011Api) {
						dependency_4 = _beyondJsHttpSuite011Api;
					},
					function (_aimpactAilearnSdk120Config) {
						dependency_5 = _aimpactAilearnSdk120Config;
					},
					function (_aimpactAilearnSdk120Startup) {
						dependency_6 = _aimpactAilearnSdk120Startup;
					},
					function (_beyondJsReactive211EntitiesItem) {
						dependency_7 = _beyondJsReactive211EntitiesItem;
					}
				],
				execute: function () {
					(__Bundle = dependency_0.Bundle),
						(__pkg = new __Bundle(
							{ module: { vspecifier: '@aimpact/ailearn-sdk@1.2.0/groups' }, type: 'ts' },
							_context.meta.url
						).package()).dependencies.update([
							['@beyond-js/reactive/entities/collection', dependency_1],
							['@beyond-js/reactive/model', dependency_2],
							['@aimpact/chat-sdk/session', dependency_3],
							['@beyond-js/http-suite/api', dependency_4],
							['@aimpact/ailearn-sdk/config', dependency_5],
							['@aimpact/ailearn-sdk/startup', dependency_6],
							['@beyond-js/reactive/entities/item', dependency_7]
						]),
						(__Bundle = new Map()).set('./collection', {
							hash: 270024252,
							creator: function (require, exports) {
								Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Groups = void 0);
								var _collection = require('@beyond-js/reactive/entities/collection'),
									_dataProvider = require('./data-provider');
								class Groups extends _collection.Collection {
									constructor(entity, item) {
										super({ entity: entity, item: item, provider: _dataProvider.DataProvider });
									}
								}
								exports.Groups = Groups;
							}
						}),
						__Bundle.set('./data-provider', {
							hash: 655844068,
							creator: function (require, exports) {
								Object.defineProperty(exports, '__esModule', { value: !0 }),
									(exports.DataProvider = void 0);
								var _session = require('@aimpact/chat-sdk/session'),
									_api = require('@beyond-js/http-suite/api'),
									_error = require('./error'),
									_startup = require('@aimpact/ailearn-sdk/startup');
								exports.DataProvider = class {
									#api;
									#model;
									#entity;
									constructor(model) {
										(this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn)),
											(this.#model = model),
											(this.#entity = model.entity);
									}
									setModel(model) {
										this.#model = model;
									}
									async load(specs) {
										console.trace('specs in data-provider.ts line 32\n', specs);
										var token = await _session.sessionWrapper.user.token,
											token = (this.#api.bearer(token), specs.id || specs.code),
											specs = await this.#api.get(`/${this.#entity}/` + token);
										if (specs.status) return specs.data;
										throw new _error.CustomError(specs.error.text, specs.error.code);
									}
									async publish(specs = {}) {
										var token = await _session.sessionWrapper.user.token,
											token =
												(this.#api.bearer(token),
												await this.#api.post('/' + this.#entity, specs));
										if (token.status) return token;
										throw new _error.CustomError(token.error.text, token.error.code);
									}
									async list(specs = { endpoint: void 0 }) {
										try {
											var token = await _session.sessionWrapper.user.token,
												endpoint =
													(this.#api.bearer(token), specs.endpoint || '/' + this.#entity),
												response =
													(delete specs.endpoint, await this.#api.get(endpoint, specs));
											return response.data.items;
										} catch (e) {
											console.error(e);
										}
									}
									test() {}
									async invite(specs = {}) {
										try {
											var token = await _session.sessionWrapper.user.token,
												res =
													(this.#api.bearer(token),
													await this.#api.post(
														`/${this.#entity}/${this.#model.id}/invite`,
														specs
													));
											if (res.status) return res;
											throw new Error('error publishing organization');
										} catch (e) {
											console.error(e);
										}
									}
									async cancelInvitation(specs = {}) {
										try {
											var token = await _session.sessionWrapper.user.token,
												res =
													(this.#api.bearer(token),
													await this.#api.delete(
														`/${this.#entity}/${this.#model.id}/invite/user/` + specs.email,
														specs
													));
											if (res.status) return res;
											throw new Error('error publishing organization');
										} catch (e) {
											console.error(e);
										}
									}
									async join(specs = {}) {
										var token = await _session.sessionWrapper.user.token,
											token =
												(this.#api.bearer(token),
												await this.#api.post(`/${this.#entity}/join`, specs));
										if (token.status) return token;
										if (104 === token.error.code) throw new Error('ALREADY_MEMBER');
										if (101 === token.error.code) throw new Error('ALREADY_WAITING');
										if (100 === token.error.code) throw new Error('INVALID_CODE');
										throw new Error('ERROR_PUBLISHING');
									}
									async approve(specs = {}) {
										var token = await _session.sessionWrapper.user.token,
											token =
												(this.#api.bearer(token),
												await this.#api.post(
													`/${this.#entity}/${this.#model.id}/approve`,
													specs
												));
										if (token.status) return token;
										throw new _error.CustomError(token.error.text, token.error.code);
									}
									async delete(specs) {
										var token = await _session.sessionWrapper.user.token,
											token =
												(this.#api.bearer(token),
												await this.#api.delete(`/${this.#entity}/` + specs.id));
										if (token.status) return token;
										throw new _error.CustomError(token.error.text, token.error.code);
									}
									async removeMember(specs) {
										var token = await _session.sessionWrapper.user.token,
											token =
												(this.#api.bearer(token),
												await this.#api.delete(
													`/${this.#entity}/${specs.id}/user/` + specs.uid
												));
										if (token.status) return token;
										throw new _error.CustomError(token.error.text, token.error.code);
									}
									async reject(specs) {
										try {
											var token = await _session.sessionWrapper.user.token,
												res =
													(this.#api.bearer(token),
													await this.#api.delete(
														`/${this.#entity}/${specs.id}/join/user/` + specs.uid,
														{}
													));
											if (res.status) return res;
											throw new Error('Error rejecting the user from the ' + this.#entity);
										} catch (e) {
											console.error(e);
										}
									}
									async requestAccess() {
										return (await this.#api.post(`/classrooms/${this.#model.id}/request`, {})).data;
									}
								};
							}
						}),
						__Bundle.set('./error', {
							hash: 2905388780,
							creator: function (require, exports) {
								Object.defineProperty(exports, '__esModule', { value: !0 }),
									(exports.CustomError = void 0);
								class CustomError extends Error {
									message;
									code;
									constructor(message, code) {
										super(message), (this.name = 'CustomError'), (this.code = code);
									}
								}
								exports.CustomError = CustomError;
							}
						}),
						__Bundle.set('./item', {
							hash: 888708355,
							creator: function (require, exports) {
								Object.defineProperty(exports, '__esModule', { value: !0 }),
									(exports.GroupItem = void 0);
								var _item = require('@beyond-js/reactive/entities/item'),
									_dataProvider = require('./data-provider'),
									_session = require('@aimpact/chat-sdk/session');
								class GroupItem extends _item.Item {
									#hasAccess = !1;
									get hasAccess() {
										return this.#hasAccess;
									}
									#members = [];
									get members() {
										return this.#members;
									}
									#managers = [];
									get managers() {
										return this.#managers;
									}
									#pendings = [];
									get pendings() {
										return this.#pendings;
									}
									#registered = new Map();
									#isAdmin;
									get isAdmin() {
										return this.#isAdmin;
									}
									get authorizedPeople() {
										return this.people.filter(i => i.authorized);
									}
									#ready = !1;
									get ready() {
										return this.#ready;
									}
									constructor(entity, { properties, ...data }) {
										super({
											entity: entity,
											...data,
											provider: _dataProvider.DataProvider,
											properties: [
												'timeCreated',
												'timeUpdated',
												'name',
												'access',
												'address',
												'description',
												'people',
												'joinSpecs',
												'id',
												'status',
												'joined',
												...properties
											]
										}),
											this.provider.setModel(this);
									}
									async load(specs) {
										console.log('specs in item.ts line 82\n', specs),
											(this.#pendings = []),
											(this.#managers = []),
											(this.#members = []),
											(this.#registered = new Map()),
											console.log('specs in item.ts line 86\n', specs),
											((specs =
												'number' == typeof specs || 'string' == typeof specs
													? { id: specs }
													: specs) &&
												0 !== Object.keys(specs).length) ||
												(specs = { id: this.id }),
											console.log('specs in item.ts line 89\n', specs);
										specs = await super.load(specs);
										if (this.people) {
											(this.#hasAccess = !0),
												this.people.sort((a, b) => a.name.localeCompare(b.name));
											var people = this.people;
											let isAdmin = people.some(
												i => 'manager' === i.role && i.uid === _session.sessionWrapper.user.id
											);
											this.#isAdmin = isAdmin;
											return (
												(this.#ready = !0),
												people.forEach(person => {
													var currentRole = this.#registered.get(person.id);
													!person.invited && person.role && currentRole === person.role
														? (this.#pendings = this.#pendings.filter(
																i => i.id !== person.id
														  ))
														: (isAdmin &&
																!person.invited &&
																currentRole &&
																('manager' === currentRole
																	? (this.#managers = this.#managers.filter(
																			i => i.id !== person.id
																	  ))
																	: (this.#members = this.#members.filter(
																			i => i.id !== person.id
																	  ))),
														  (this.#pendings = this.#pendings.filter(
																i => i.id !== person.id
														  )),
														  !isAdmin ||
																(person.authorized && !person.invited) ||
																this.#pendings.push(person),
														  person.role &&
																('manager' === person.role
																	? this.#managers
																	: this.#members
																).push(person),
														  person.invited ||
																this.#registered.set(person.id, person.role));
												}),
												specs
											);
										}
									}
									async approve(specs) {
										if (!specs || !specs.uid) throw new Error('Invalid specifications provided.');
										var uid = ((await this.provider.approve(specs)).status, specs).uid;
										let id = uid || specs.id;
										var uid = this.#pendings.findIndex(p => p.uid === id || p.id === id);
										this.#registered.set(this.#pendings[uid].id, specs.role),
											0 <= uid &&
												(([uid] = this.#pendings.splice(uid, 1)),
												(uid.authorized = !0),
												('member' === specs.role ? this.#members : this.#managers).push(uid)),
											this.triggerEvent();
									}
									async removeMember(args) {
										(await this.provider.removeMember(args)).status &&
											((this.people = this.people.filter(i => i.uid !== args.uid)),
											(this.#managers = this.#managers.filter(i => i.uid !== args.uid)),
											(this.#members = this.#members.filter(i => i.uid !== args.uid)),
											this.triggerEvent());
									}
									async reject(specs) {
										(await this.provider.reject({ id: this.id, ...specs })).status &&
											((this.people = this.people.filter(i => i.uid !== specs.uid)),
											(this.#pendings = this.#pendings.filter(i => i.uid !== specs.uid)),
											this.triggerEvent());
									}
									async invite(specs) {
										var response = await this.provider.invite(specs),
											specs = { ...specs, invited: !0 };
										return (
											this.people.push(specs),
											this.#pendings.push(specs),
											this.trigger('change'),
											response
										);
									}
									async cancelInvitation(specs) {
										(await this.provider.cancelInvitation(specs)).status &&
											((this.people = this.people.filter(i => i.email !== specs.email)),
											(this.#pendings = this.#pendings.filter(i => i.email !== specs.email)),
											this.triggerEvent());
									}
									async delete() {
										var response = await this.provider.delete({ id: this.id });
										return response.status && this.triggerEvent(), response;
									}
									async join({ code }) {
										var data = await this.provider.join({ code: code });
										return this.set({ code: code }), data;
									}
									async requestAccess() {
										var data = await this.provider.requestAccess();
										return (
											'authorized' === data.status.toLowerCase()
												? await this.load({ id: this.id })
												: await this.set({ access: data.status }),
											this.set(data),
											data
										);
									}
								}
								exports.GroupItem = GroupItem;
							}
						}),
						(__pkg.exports.descriptor = [
							{ im: './collection', from: 'Groups', name: 'Groups' },
							{ im: './data-provider', from: 'DataProvider', name: 'DataProvider' },
							{ im: './item', from: 'GroupItem', name: 'GroupItem' }
						]),
						(__pkg.exports.process = function ({ require, prop, value }) {
							(!require && 'Groups' !== prop) ||
								_export('Groups', require ? require('./collection').Groups : value),
								(!require && 'DataProvider' !== prop) ||
									_export('DataProvider', require ? require('./data-provider').DataProvider : value),
								(!require && 'GroupItem' !== prop) ||
									_export('GroupItem', require ? require('./item').GroupItem : value);
						}),
						_export('__beyond_pkg', __pkg),
						_export(
							'hmr',
							new (function () {
								(this.on = (event, listener) => __pkg.hmr.on(event, listener)),
									(this.off = (event, listener) => __pkg.hmr.off(event, listener));
							})()
						),
						__pkg.initialise(__Bundle);
				}
			}
		);
	}
);
