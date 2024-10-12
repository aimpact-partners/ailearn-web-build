System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/collection", "@aimpact/ailearn-sdk@1.0.0/reactive/model", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/ailearn-sdk@1.0.0/reactive/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Groups, DataProvider, GroupItem, __beyond_pkg, hmr;
  _export({
    Groups: void 0,
    DataProvider: void 0,
    GroupItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesCollection) {
      dependency_1 = _aimpactAilearnSdk100ReactiveEntitiesCollection;
    }, function (_aimpactAilearnSdk100ReactiveModel) {
      dependency_2 = _aimpactAilearnSdk100ReactiveModel;
    }, function (_aimpactChatSdk130Session) {
      dependency_3 = _aimpactChatSdk130Session;
    }, function (_aimpactHttpSuite001Api) {
      dependency_4 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_5 = _aimpactAilearnSdk100Config;
    }, function (_aimpactAilearnSdk100ReactiveEntitiesItem) {
      dependency_6 = _aimpactAilearnSdk100ReactiveEntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "0.0.1-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@types/node", "22.7.5"], ["dexie", "4.0.8"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.8.1"], ["socket.io-client", "4.8.0"], ["zod", "3.23.8"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.0.0/groups"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/reactive/entities/collection', dependency_1], ['@aimpact/ailearn-sdk/reactive/model', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/ailearn-sdk/reactive/entities/item', dependency_6]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 2400583736,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Groups = void 0;
          var _collection = require("@aimpact/ailearn-sdk/reactive/entities/collection");
          var _dataProvider = require("./data-provider");
          /*bundle*/
          class Groups extends _collection.Collection {
            constructor(entity, item) {
              super({
                entity,
                item,
                dataProvider: _dataProvider.DataProvider
              });
            }
          }
          exports.Groups = Groups;
        }
      });

      /*******************************
      INTERNAL MODULE: ./data-provider
      *******************************/

      ims.set('./data-provider', {
        hash: 412059673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataProvider = void 0;
          var _model = require("@aimpact/ailearn-sdk/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@aimpact/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _error = require("./error");
          /*bundle */
          class DataProvider extends _model.ReactiveModel {
            #api;
            #model;
            #entity;
            constructor(model) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.#model = model;
              this.#entity = model.entity;
            }
            setModel(model) {
              this.#model = model;
            }
            async load(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/${this.#entity}/${specs.id}`);
              return response.data;
            }
            async publish(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/${this.#entity}`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async list(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.get(`/${this.#entity}`);
                return response.data.items;
              } catch (e) {
                console.error(e);
              }
            }
            test() {
              //code
            }
            async invite(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post(`/${this.#entity}/${this.#model.id}/invite`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async cancelInvitation(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.delete(`/${this.#entity}/${this.#model.id}/invitations/user/${specs.email}`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async join(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.post(`/${this.#entity}/join`, specs);
              if (!res.status) {
                if (res.error.code === 42 || res.error.code === 41) {
                  throw new Error('ALREADY_MEMBER');
                }
                if (res.error.code === 39) {
                  throw new Error('ALREADY_WAITING');
                }
                if (res.error.code === 44) {
                  throw new Error('INVALID_CODE');
                }
                throw new Error('ERROR_PUBLISHING');
              }
              return res;
            }
            async approve(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/${this.#entity}/${this.#model.id}/approve`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async delete(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async removeMember(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}/user/${specs.uid}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async reject(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post(`/${this.#entity}/${specs.id}/requests/user/${specs.uid}/reject`, {});
                if (!res.status) {
                  throw new Error(`Error rejecting the user from the ${this.#entity}`);
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.DataProvider = DataProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 1142626891,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor(message, code) {
              super(message); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
              this.message = message;
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 785980699,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GroupItem = void 0;
          var _item = require("@aimpact/ailearn-sdk/reactive/entities/item");
          var _dataProvider = require("./data-provider");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class GroupItem extends _item.Item {
            #hasAccess = false;
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
            #isAdmin;
            get isAdmin() {
              return this.#isAdmin;
            }
            get authorizedPeople() {
              return this.people.filter(i => i.authorized);
            }
            #ready = false;
            get ready() {
              return this.#ready;
            }
            constructor(entity, {
              properties,
              ...data
            }) {
              super({
                entity,
                ...data,
                dataProvider: _dataProvider.DataProvider,
                properties: ['timeCreated', 'timeUpdated', 'name', 'address', 'description', 'people', 'joinSpecs', 'id', ...properties]
              });
              this.dataProvider.setModel(this);
            }
            async load(id) {
              await super.load({
                id: id ?? this.id
              });
              if (!this.people) return;
              this.#hasAccess = true;
              const {
                people
              } = this;
              const isAdmin = people.some(i => i.role === 'manager' && i.uid === _session.sessionWrapper.user.id);
              this.#isAdmin = isAdmin;
              const checkMember = person => {
                if (isAdmin && (!person.authorized || person.invited)) {
                  this.#pendings.push(person);
                  return;
                }
                if (person.role) {
                  person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
                  return;
                }
              };
              this.#ready = true;
              people.forEach(checkMember);
            }
            async approve(specs) {
              // Validate input
              if (!specs || !specs.uid) throw new Error('Invalid specifications provided.');
              const response = await this.dataProvider.approve(specs);
              if (!response.status) {}
              const {
                uid
              } = specs;
              // Find and remove the pending member with the specified id
              const pendingIndex = this.#pendings.findIndex(p => p.uid === uid);
              if (pendingIndex === -1) {
                throw new Error(`Pending member with id ${uid} not found.`);
              }
              const [pendingMember] = this.#pendings.splice(pendingIndex, 1);
              // Add the pending member to the members list
              specs.role === 'member' ? this.#members.push(pendingMember) : this.#managers.push(pendingMember);
              this.triggerEvent();
            }
            async removeMember(args) {
              const response = await this.dataProvider.removeMember(args);
              if (response.status) {
                this.people = this.people.filter(i => i.uid !== args.uid);
                this.#managers = this.#managers.filter(i => i.uid !== args.uid);
                this.#members = this.#members.filter(i => i.uid !== args.uid);
                this.triggerEvent();
              }
            }
            async reject(specs) {
              const response = await this.dataProvider.reject({
                id: this.id,
                ...specs
              });
              if (response.status) {
                this.people = this.people.filter(i => i.uid !== specs.uid);
                this.#pendings = this.#pendings.filter(i => i.uid !== specs.uid);
                this.triggerEvent();
              }
            }
            async invite(specs) {
              const response = await this.dataProvider.invite(specs);
              const member = {
                ...specs,
                invited: true
              };
              // this.#pendings.push(member);
              this.people.push(member);
              this.#pendings.push(member);
              this.trigger('change');
              return response;
            }
            async cancelInvitation(specs) {
              const response = await this.dataProvider.cancelInvitation(specs);
              if (response.status) {
                this.people = this.people.filter(i => i.email !== specs.email);
                this.#pendings = this.#pendings.filter(i => i.email !== specs.email);
                this.triggerEvent();
              }
            }
            async delete() {
              const response = await this.dataProvider.delete({
                id: this.id
              });
              if (response.status) {
                this.triggerEvent();
              }
              return response;
            }
          }
          exports.GroupItem = GroupItem;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Groups",
        "name": "Groups"
      }, {
        "im": "./data-provider",
        "from": "DataProvider",
        "name": "DataProvider"
      }, {
        "im": "./item",
        "from": "GroupItem",
        "name": "GroupItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Groups') && _export("Groups", Groups = require ? require('./collection').Groups : value);
        (require || prop === 'DataProvider') && _export("DataProvider", DataProvider = require ? require('./data-provider').DataProvider : value);
        (require || prop === 'GroupItem') && _export("GroupItem", GroupItem = require ? require('./item').GroupItem : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsImRhdGFQcm92aWRlciIsIkRhdGFQcm92aWRlciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9hcGkiLCJfY29uZmlnIiwiX2Vycm9yIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsIm1vZGVsIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwic2V0TW9kZWwiLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwiZ2V0IiwiaWQiLCJkYXRhIiwicHVibGlzaCIsInBvc3QiLCJzdGF0dXMiLCJDdXN0b21FcnJvciIsImVycm9yIiwidGV4dCIsImNvZGUiLCJsaXN0IiwiaXRlbXMiLCJlIiwiY29uc29sZSIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwibWVzc2FnZSIsIm5hbWUiLCJfaXRlbSIsIkdyb3VwSXRlbSIsIkl0ZW0iLCJoYXNBY2Nlc3MiLCJtZW1iZXJzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsImlzQWRtaW4iLCJhdXRob3JpemVkUGVvcGxlIiwicGVvcGxlIiwiZmlsdGVyIiwiaSIsImF1dGhvcml6ZWQiLCJyZWFkeSIsInByb3BlcnRpZXMiLCJzb21lIiwicm9sZSIsImNoZWNrTWVtYmVyIiwicGVyc29uIiwiaW52aXRlZCIsInB1c2giLCJmb3JFYWNoIiwicGVuZGluZ0luZGV4IiwiZmluZEluZGV4IiwicCIsInBlbmRpbmdNZW1iZXIiLCJzcGxpY2UiLCJ0cmlnZ2VyRXZlbnQiLCJhcmdzIiwibWVtYmVyIiwidHJpZ2dlciJdLCJzb3VyY2VzIjpbIi9jb2xsZWN0aW9uLnRzIiwiL2RhdGEtcHJvdmlkZXIudHMiLCIvZXJyb3IudHMiLCIvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPRSxNQUFPLFNBQVFILFdBQUEsQ0FBQUksVUFBbUM7WUFDekVDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSTtjQUN2QixLQUFLLENBQUM7Z0JBQ0xELE1BQU07Z0JBQ05DLElBQUk7Z0JBQ0pDLFlBQVksRUFBRU4sYUFBQSxDQUFBTztlQUNkLENBQUM7WUFDSDs7VUFDQUMsT0FBQSxDQUFBUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEQsSUFBQVEsTUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBRUEsSUFBQVksSUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsT0FBQSxHQUFBYixPQUFBO1VBR0EsSUFBQWMsTUFBQSxHQUFBZCxPQUFBO1VBRU87VUFBVyxNQUFPUSxZQUFhLFNBQVFFLE1BQUEsQ0FBQUssYUFBMkI7WUFDeEUsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLEtBQU07WUFFTixDQUFBWixNQUFPO1lBRVBELFlBQVlhLEtBQUs7Y0FDaEIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFNLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFMLEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQVosTUFBTyxHQUFHWSxLQUFLLENBQUNa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