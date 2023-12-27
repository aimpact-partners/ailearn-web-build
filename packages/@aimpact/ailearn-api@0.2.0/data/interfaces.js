System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, IAssignmentActivityBase, IAssignmentData, IDashboardData, TrackingStatusType, IActivityTrackingBase, ActivityItemType, ITrackingData, IActivityTrackingData, IAssignmentWallMessageBase, IAssignmentWallData, IClassroomBaseData, IClassroomData, IGClassroomOAuthStateData, IModuleBaseData, IModuleData, IActivityBaseData, IActivityData, IOrganizationData, IStudentHomeData, __beyond_pkg, hmr;
  _export({
    IAssignmentActivityBase: void 0,
    IAssignmentData: void 0,
    IDashboardData: void 0,
    TrackingStatusType: void 0,
    IActivityTrackingBase: void 0,
    ActivityItemType: void 0,
    ITrackingData: void 0,
    IActivityTrackingData: void 0,
    IAssignmentWallMessageBase: void 0,
    IAssignmentWallData: void 0,
    IClassroomBaseData: void 0,
    IClassroomData: void 0,
    IGClassroomOAuthStateData: void 0,
    IModuleBaseData: void 0,
    IModuleData: void 0,
    IActivityBaseData: void 0,
    IActivityData: void 0,
    IOrganizationData: void 0,
    IStudentHomeData: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/widgets", "0.1.5"], ["@beyond-js/pending-promise", "0.0.1"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@beyond-js/firestore-collection", "0.0.5"], ["@beyond-js/response", "0.0.2"], ["@aimpact/agents-client", "0.0.8"], ["@google-cloud/tasks", "3.2.0"], ["@google-cloud/storage", "7.0.1"], ["@google-cloud/text-to-speech", "5.0.1"], ["googleapis", "122.0.0"], ["socket.io-client", "4.7.2"], ["openai", "4.2.0"], ["dotenv", "16.3.1"], ["uuid", "9.0.1"], ["express", "4.18.2"], ["express-openapi-validator", "5.1.0"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.0"], ["node-fetch", "2.6.13"], ["form-data", "4.0.0"], ["busboy", "1.6.0"], ["@beyond-js/bee", "0.0.6"], ["@types/express", "4.17.21"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.7"], ["@types/busboy", "1.5.3"], ["@aimpact/ailearn-api", "0.2.0"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-api@0.2.0/data/interfaces"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./assignment/assignment
      ***************************************/
      ims.set('./assignment/assignment', {
        hash: 2158719355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./assignment/dashboard
      **************************************/

      ims.set('./assignment/dashboard', {
        hash: 1341378988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************************
      INTERNAL MODULE: ./assignment/tracking
      *************************************/

      ims.set('./assignment/tracking', {
        hash: 3298339947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************
      INTERNAL MODULE: ./assignment/wall
      *********************************/

      ims.set('./assignment/wall', {
        hash: 3372572621,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************
      INTERNAL MODULE: ./classroom
      ***************************/

      ims.set('./classroom', {
        hash: 839651034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./gclassroom
      ****************************/

      ims.set('./gclassroom', {
        hash: 465467695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./module
      ************************/

      ims.set('./module', {
        hash: 3464604220,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./organization
      ******************************/

      ims.set('./organization', {
        hash: 6545241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IOrganizationData = void 0;
          /*bundle*/
          class IOrganizationData {
            name;
          }
          exports.IOrganizationData = IOrganizationData;
        }
      });

      /******************************
      INTERNAL MODULE: ./student/home
      ******************************/

      ims.set('./student/home', {
        hash: 3517604781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./assignment/assignment",
        "from": "IAssignmentActivityBase",
        "name": "IAssignmentActivityBase"
      }, {
        "im": "./assignment/assignment",
        "from": "IAssignmentData",
        "name": "IAssignmentData"
      }, {
        "im": "./assignment/dashboard",
        "from": "IDashboardData",
        "name": "IDashboardData"
      }, {
        "im": "./assignment/tracking",
        "from": "TrackingStatusType",
        "name": "TrackingStatusType"
      }, {
        "im": "./assignment/tracking",
        "from": "IActivityTrackingBase",
        "name": "IActivityTrackingBase"
      }, {
        "im": "./assignment/tracking",
        "from": "ActivityItemType",
        "name": "ActivityItemType"
      }, {
        "im": "./assignment/tracking",
        "from": "ITrackingData",
        "name": "ITrackingData"
      }, {
        "im": "./assignment/tracking",
        "from": "IActivityTrackingData",
        "name": "IActivityTrackingData"
      }, {
        "im": "./assignment/wall",
        "from": "IAssignmentWallMessageBase",
        "name": "IAssignmentWallMessageBase"
      }, {
        "im": "./assignment/wall",
        "from": "IAssignmentWallData",
        "name": "IAssignmentWallData"
      }, {
        "im": "./classroom",
        "from": "IClassroomBaseData",
        "name": "IClassroomBaseData"
      }, {
        "im": "./classroom",
        "from": "IClassroomData",
        "name": "IClassroomData"
      }, {
        "im": "./gclassroom",
        "from": "IGClassroomOAuthStateData",
        "name": "IGClassroomOAuthStateData"
      }, {
        "im": "./module",
        "from": "IModuleBaseData",
        "name": "IModuleBaseData"
      }, {
        "im": "./module",
        "from": "IModuleData",
        "name": "IModuleData"
      }, {
        "im": "./module",
        "from": "IActivityBaseData",
        "name": "IActivityBaseData"
      }, {
        "im": "./module",
        "from": "IActivityData",
        "name": "IActivityData"
      }, {
        "im": "./organization",
        "from": "IOrganizationData",
        "name": "IOrganizationData"
      }, {
        "im": "./student/home",
        "from": "IStudentHomeData",
        "name": "IStudentHomeData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IAssignmentActivityBase') && _export("IAssignmentActivityBase", IAssignmentActivityBase = require ? require('./assignment/assignment').IAssignmentActivityBase : value);
        (require || prop === 'IAssignmentData') && _export("IAssignmentData", IAssignmentData = require ? require('./assignment/assignment').IAssignmentData : value);
        (require || prop === 'IDashboardData') && _export("IDashboardData", IDashboardData = require ? require('./assignment/dashboard').IDashboardData : value);
        (require || prop === 'TrackingStatusType') && _export("TrackingStatusType", TrackingStatusType = require ? require('./assignment/tracking').TrackingStatusType : value);
        (require || prop === 'IActivityTrackingBase') && _export("IActivityTrackingBase", IActivityTrackingBase = require ? require('./assignment/tracking').IActivityTrackingBase : value);
        (require || prop === 'ActivityItemType') && _export("ActivityItemType", ActivityItemType = require ? require('./assignment/tracking').ActivityItemType : value);
        (require || prop === 'ITrackingData') && _export("ITrackingData", ITrackingData = require ? require('./assignment/tracking').ITrackingData : value);
        (require || prop === 'IActivityTrackingData') && _export("IActivityTrackingData", IActivityTrackingData = require ? require('./assignment/tracking').IActivityTrackingData : value);
        (require || prop === 'IAssignmentWallMessageBase') && _export("IAssignmentWallMessageBase", IAssignmentWallMessageBase = require ? require('./assignment/wall').IAssignmentWallMessageBase : value);
        (require || prop === 'IAssignmentWallData') && _export("IAssignmentWallData", IAssignmentWallData = require ? require('./assignment/wall').IAssignmentWallData : value);
        (require || prop === 'IClassroomBaseData') && _export("IClassroomBaseData", IClassroomBaseData = require ? require('./classroom').IClassroomBaseData : value);
        (require || prop === 'IClassroomData') && _export("IClassroomData", IClassroomData = require ? require('./classroom').IClassroomData : value);
        (require || prop === 'IGClassroomOAuthStateData') && _export("IGClassroomOAuthStateData", IGClassroomOAuthStateData = require ? require('./gclassroom').IGClassroomOAuthStateData : value);
        (require || prop === 'IModuleBaseData') && _export("IModuleBaseData", IModuleBaseData = require ? require('./module').IModuleBaseData : value);
        (require || prop === 'IModuleData') && _export("IModuleData", IModuleData = require ? require('./module').IModuleData : value);
        (require || prop === 'IActivityBaseData') && _export("IActivityBaseData", IActivityBaseData = require ? require('./module').IActivityBaseData : value);
        (require || prop === 'IActivityData') && _export("IActivityData", IActivityData = require ? require('./module').IActivityData : value);
        (require || prop === 'IOrganizationData') && _export("IOrganizationData", IOrganizationData = require ? require('./organization').IOrganizationData : value);
        (require || prop === 'IStudentHomeData') && _export("IStudentHomeData", IStudentHomeData = require ? require('./student/home').IStudentHomeData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIklPcmdhbml6YXRpb25EYXRhIiwibmFtZSJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50LnRzIiwiL2Rhc2hib2FyZC50cyIsIi90cmFja2luZy50cyIsIi93YWxsLnRzIiwiL2NsYXNzcm9vbS50cyIsIi9nY2xhc3Nyb29tLnRzIiwiL21vZHVsZS50cyIsIi9vcmdhbml6YXRpb24udHMiLCIvaG9tZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pPO1VBQVUsTUFBT0MsaUJBQWlCO1lBQ3hDQyxJQUFJOztVQUNKSCxPQUFBLENBQUFFLGlCQUFBLEdBQUFBLGlCQUFBOzs7Ozs7Ozs7OztVQ0ZEOztVQUVBSixNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0EifQ==