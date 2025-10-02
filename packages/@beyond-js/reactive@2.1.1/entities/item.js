System.register(
	['@beyond-js/kernel@0.1.14/bundle', '@beyond-js/reactive@2.1.1/model', 'uuid@11.1.0'],
	function (_export, _context) {
		var dependency_0, dependency_1, dependency_2, __pkg, __Bundle;
		return (
			_export({
				Item: void 0,
				RegistryFactory: void 0,
				IItem: void 0,
				ItemId: void 0,
				IItemProps: void 0,
				IEntityProvider: void 0,
				IRecordProps: void 0
			}),
			{
				setters: [
					function (_beyondJsKernel0114Bundle) {
						dependency_0 = _beyondJsKernel0114Bundle;
					},
					function (_beyondJsReactive211Model) {
						dependency_1 = _beyondJsReactive211Model;
					},
					function (_uuid2) {
						dependency_2 = _uuid2;
					}
				],
				execute: function () {
					(__Bundle = dependency_0.Bundle),
						(__pkg = new __Bundle(
							{ module: { vspecifier: '@beyond-js/reactive@2.1.1/entities/item' }, type: 'ts' },
							_context.meta.url
						).package()).dependencies.update([
							['@beyond-js/reactive/model', dependency_1],
							['uuid', dependency_2]
						]),
						(__Bundle = new Map()).set('./index', {
							hash: 3786656747,
							creator: function (require, exports) {
								Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Item = void 0);
								var _model = require('@beyond-js/reactive/model'),
									_factory = require('./registry/factory');
								class Item extends _model.ReactiveModel {
									#factory;
									#entity;
									get entity() {
										return this.#entity;
									}
									#registry;
									get __registryState() {
										return this.#registry.state;
									}
									#fetched;
									get fetched() {
										return this.#fetched;
									}
									#found = !1;
									get found() {
										return this.#found;
									}
									_provider;
									get provider() {
										return this._provider;
									}
									get registry() {
										return this.#registry;
									}
									get __instanceId() {
										return this.#registry.instanceId;
									}
									#draft;
									get draft() {
										return this.#draft;
									}
									constructor({ entity, provider, properties, ...args } = {}) {
										if ((super({ ...args, properties: properties }), !entity))
											throw new Error('Entity is required');
										if (provider && 'function' != typeof provider)
											throw new Error('Provider must be a class/constructor in object ' + entity);
										this.reactiveProps(['deleted']),
											(this.#entity = entity),
											(this.onSet = this.onSet.bind(this)),
											this.on('set.executed', this.onSet),
											provider && (this._provider = new provider(this)),
											(this.#factory = _factory.RegistryFactory.getInstance(entity)),
											this.initialize(args);
									}
									initialize({ ...args }) {
										(args = this.#factory.getItem(this.getProperty('id'), args)),
											(this.#registry = args),
											(args = this.#registry.getValues());
										this.setInitialValues(args),
											this.properties.forEach(property => {
												'string' == typeof property &&
													this.on(property + '.changed', () => {
														this.#registry.setValues({
															[property]: this.getProperty(property)
														});
													});
											});
									}
									set(values) {
										return super.set(values);
									}
									onSet() {
										this.#registry?.setValues(this.getProperties());
									}
									_load(args) {}
									async load(args) {
										if (!this.provider || 'function' != typeof this.provider.load)
											throw new Error(
												'DataProvider is not defined or does not implement the load() method in object ' +
													this.constructor.name
											);
										try {
											console.log('load in reactive item', args);
											var response = await this.provider.load(args),
												data = response;
											if (data)
												return (
													(this.#found = !0),
													(this.#fetched = !0),
													this.set(data),
													this.setInitialValues(data),
													this.trigger('load', { ...this.getProperties() }),
													this.trigger('change'),
													response
												);
											throw (
												((this.#found = !1),
												new Error('Provider.load() did not return an item.'))
											);
										} catch (e) {
											throw ((this.#found = !1), e);
										}
									}
									async publish(data) {
										if (
											((data = data || this.getProperties()),
											this.set({ ...this.getProperties(), ...data }),
											this.#registry.setValues(this.getProperties, !0),
											super.saveChanges(),
											this.provider && 'function' == typeof this.provider.publish)
										) {
											data = await this.provider.publish(data);
											if (data.status) return this.set(data.data), data.data;
											throw new Error('Error saving item');
										}
										return this.getProperties();
									}
									async delete(options) {
										try {
											var id = this.getProperty('id');
											return (
												(this.#registry.deleted = !0),
												this.trigger('change'),
												!options?.skipProvider &&
													this.provider &&
													'function' == typeof this.provider.delete &&
													((this.processing = !0), await this.provider.delete(id)),
												!0
											);
										} catch (e) {
											return console.error(e), !1;
										} finally {
											this.processing = !1;
										}
									}
								}
								exports.Item = Item;
							}
						}),
						__Bundle.set('./registry/factory', {
							hash: 1412870569,
							creator: function (require, exports) {
								Object.defineProperty(exports, '__esModule', { value: !0 }),
									(exports.RegistryFactory = void 0);
								var _model = require('@beyond-js/reactive/model'),
									_ = require('./');
								class RegistryFactory extends _model.ReactiveModel {
									static #instances = new Map();
									items = new Map();
									#name;
									constructor(name, properties) {
										super({ properties: properties }), (this.#name = name), (this.ready = !0);
									}
									getItem(id, data) {
										(id && this.items.has(id)) ||
											((specs = data
												? { id: id, ...data }
												: { id: id, properties: this.properties, ...data }),
											(specs = new _.Registry(this.#name, specs)).on(
												'record.published',
												registry => {
													this.trigger('record.published', registry);
												}
											),
											data.register && this.trigger('record.published', specs.getValues()),
											specs.on('record.updated', registry =>
												this.trigger('update.registry', registry)
											),
											specs.on('record.deleted', registry =>
												this.trigger('record.deleted', registry)
											),
											(id = specs.id),
											this.items.set(id, specs));
										var specs,
											data = this.items.get(id);
										return data;
									}
									static getInstance(entity, data) {
										return (
											this.#instances.has(entity) ||
												this.#instances.set(entity, new RegistryFactory(entity, data)),
											this.#instances.get(entity)
										);
									}
								}
								exports.RegistryFactory = RegistryFactory;
							}
						}),
						__Bundle.set('./registry/index', {
							hash: 1251785185,
							creator: function (require, exports) {
								Object.defineProperty(exports, '__esModule', { value: !0 }),
									(exports.Registry = void 0);
								var _model = require('@beyond-js/reactive/model'),
									_uuid = require('uuid');
								class Registry extends _model.ReactiveModel {
									#id;
									#instanceId;
									#isDeleted = !1;
									#draft = !1;
									#state = 'draft';
									get state() {
										return this.#state;
									}
									get draft() {
										return this.#draft;
									}
									set draft(value) {
										value !== this.#draft && ((this.#draft = value), this.trigger('change'));
									}
									get id() {
										return this.#id || this.#values.id;
									}
									get instanceId() {
										return this.#instanceId;
									}
									#values;
									get values() {
										return this.#values;
									}
									get deleted() {
										return this.#isDeleted;
									}
									set deleted(value) {
										value !== this.#isDeleted &&
											((this.#isDeleted = value),
											this.trigger('record.deleted', this.#values),
											this.trigger('change'));
									}
									#entity;
									constructor(entity, { properties, parent, register, ...data } = {}) {
										super({ properties: properties || [] }), (this.#entity = entity);
										properties = data.id;
										(this.#instanceId = data?.instanceId ? data.instanceId : (0, _uuid.v4)()),
											(this.#id = properties),
											(this.#draft = !properties),
											(this.#values = Object.entries(data).reduce(
												(acc, [key, value]) => (
													('object' == typeof value && value?.isReactive) ||
														(acc[key] = value),
													acc
												),
												{ id: this.#id }
											)),
											(this.#state = this.#id ? 'published' : 'draft'),
											this.setValues(this.#values);
									}
									setValues(data, publish = !1) {
										if (!data || 0 === Object.keys(data).length) return !1;
										var key,
											value,
											baseState = this.#state;
										let updated = !1;
										for (key in data)
											Object.prototype.hasOwnProperty.call(data, key) &&
												(value = data[key]) !== this.#values[key] &&
												((this.#values[key] = value), (updated = !0));
										return (
											!!updated &&
											(this.trigger('change', { values: this.#values }),
											this.trigger('record.updated', { ...this.#values }),
											publish &&
												'draft' === baseState &&
												((this.#state = 'published'),
												this.trigger('record.published', { ...this.#values })),
											!0)
										);
									}
									getValues() {
										return { ...this.#values };
									}
								}
								exports.Registry = Registry;
							}
						}),
						__Bundle.set('./registry/types/index', {
							hash: 1952711566,
							creator: function (require, exports) {
								Object.defineProperty(exports, '__esModule', { value: !0 });
							}
						}),
						__Bundle.set('./types', {
							hash: 3056830740,
							creator: function (require, exports) {
								Object.defineProperty(exports, '__esModule', { value: !0 });
							}
						}),
						(__pkg.exports.descriptor = [
							{ im: './index', from: 'Item', name: 'Item' },
							{ im: './registry/factory', from: 'RegistryFactory', name: 'RegistryFactory' },
							{ im: './types', from: 'IItem', name: 'IItem' },
							{ im: './types', from: 'ItemId', name: 'ItemId' },
							{ im: './types', from: 'IItemProps', name: 'IItemProps' },
							{ im: './types', from: 'IEntityProvider', name: 'IEntityProvider' },
							{ im: './types', from: 'IRecordProps', name: 'IRecordProps' }
						]),
						(__pkg.exports.process = function ({ require, prop, value }) {
							(!require && 'Item' !== prop) || _export('Item', require ? require('./index').Item : value),
								(!require && 'RegistryFactory' !== prop) ||
									_export(
										'RegistryFactory',
										require ? require('./registry/factory').RegistryFactory : value
									),
								(!require && 'IItem' !== prop) ||
									_export('IItem', require ? require('./types').IItem : value),
								(!require && 'ItemId' !== prop) ||
									_export('ItemId', require ? require('./types').ItemId : value),
								(!require && 'IItemProps' !== prop) ||
									_export('IItemProps', require ? require('./types').IItemProps : value),
								(!require && 'IEntityProvider' !== prop) ||
									_export('IEntityProvider', require ? require('./types').IEntityProvider : value),
								(!require && 'IRecordProps' !== prop) ||
									_export('IRecordProps', require ? require('./types').IRecordProps : value);
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
