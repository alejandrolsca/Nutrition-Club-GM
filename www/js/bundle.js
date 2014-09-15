(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./www/modules/index.js":[function(require,module,exports){
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
(function(angular){
    'use strict';

    angular.module('app', [
        'ionic', 
        require('./tab').name,
        require('./home').name,
        require('./club-management').name,
        require('./daily-activity').name,   
        require('./daily-consumption').name,
        require('./reports').name,
        require('./goals').name,
        require('./more').name,
        require('./settings').name
        //require('./login').name,
        //require('./logout').name
    ])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })

})(angular);


},{"./club-management":"/Applications/MAMP/htdocs/nc-management/www/modules/club-management/index.js","./daily-activity":"/Applications/MAMP/htdocs/nc-management/www/modules/daily-activity/index.js","./daily-consumption":"/Applications/MAMP/htdocs/nc-management/www/modules/daily-consumption/index.js","./goals":"/Applications/MAMP/htdocs/nc-management/www/modules/goals/index.js","./home":"/Applications/MAMP/htdocs/nc-management/www/modules/home/index.js","./more":"/Applications/MAMP/htdocs/nc-management/www/modules/more/index.js","./reports":"/Applications/MAMP/htdocs/nc-management/www/modules/reports/index.js","./settings":"/Applications/MAMP/htdocs/nc-management/www/modules/settings/index.js","./tab":"/Applications/MAMP/htdocs/nc-management/www/modules/tab/index.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/club-management/controllers/club-management-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function($scope) {

    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/nc-management/www/modules/club-management/index.js":[function(require,module,exports){
'use strict';

module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.club-management',[
        require('./modules/members').name,
    ])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.club-management', {
          url: "/club-management",
          views: {
            'tab-club-management' :{
              templateUrl: "modules/club-management/views/club-management-view.html",
              controller: 'ClubManagementCtrl'
            }
          }
        })
    })

    .controller('ClubManagementCtrl',require('./controllers/club-management-ctrl'))
    
})(angular);
},{"./controllers/club-management-ctrl":"/Applications/MAMP/htdocs/nc-management/www/modules/club-management/controllers/club-management-ctrl.js","./modules/members":"/Applications/MAMP/htdocs/nc-management/www/modules/club-management/modules/members/index.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/club-management/modules/members/controllers/members-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function($scope, $ionicActionSheet, $timeout ) {
        // Triggered on a button click, or some other target
         $scope.show = function() {
             
           console.log('click')

           // Show the action sheet
           var hideSheet = $ionicActionSheet.show({
             buttons: [
               { text: 'Edit Member' },
               { text: 'Call' }
             ],
             destructiveText: 'Delete',
             titleText: 'Member Actions',
             cancelText: 'Cancel',
             cancel: function() {
                  // add cancel code..
                },
             buttonClicked: function(index) {
               return true;
             },
             destructiveButtonClicked: function(index) {
               return true;
             }
           });

           // For example's sake, hide the sheet after two seconds
           $timeout(function() {
             hideSheet();
           }, 4000);

         };
        
        $scope.members = [];
        for(var i=0;i<3000;i++){
            $scope.members.push({"id":"ID: "+i,"name":"McFly "+i})
        }
        $scope.getItemHeight = function(item, index) {
            //Make evenly indexed items be 10px taller, for the sake of example
            return (index % 2) === 0 ? 50 : 60;
        };
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/nc-management/www/modules/club-management/modules/members/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.members',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.members', {
          url: "/club-management/members",
          views: {
            'tab-club-management' :{
              templateUrl: "modules/club-management/modules/members/views/members-view.html",
              controller: 'MembersCtrl'
            }
          }
        })
    })

    .controller('MembersCtrl',require('./controllers/members-ctrl'))
    
})(angular);
},{"./controllers/members-ctrl":"/Applications/MAMP/htdocs/nc-management/www/modules/club-management/modules/members/controllers/members-ctrl.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/daily-activity/controllers/daily-activity-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/nc-management/www/modules/daily-activity/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.daily-activity',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.daily-activity', {
          url: "/daily-activity",
          views: {
            'tab-daily-activity' :{
              templateUrl: "modules/daily-activity/views/daily-activity-view.html",
              controller: 'DailyActivityCtrl'
            }
          }
        })
    })

    .controller('DailyActivityCtrl',require('./controllers/daily-activity-ctrl'))
    
})(angular);
},{"./controllers/daily-activity-ctrl":"/Applications/MAMP/htdocs/nc-management/www/modules/daily-activity/controllers/daily-activity-ctrl.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/daily-consumption/controllers/daily-consumption-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/nc-management/www/modules/daily-consumption/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.daily-consumption',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.daily-consumption', {
          url: "/daily-consumption",
          views: {
            'tab-daily-consumption' :{
              templateUrl: "modules/daily-consumption/views/daily-consumption-view.html",
              controller: 'DailyConsumptionCtrl'
            }
          }
        })
    })

    .controller('DailyConsumptionCtrl',require('./controllers/daily-consumption-ctrl'))
    
})(angular);
},{"./controllers/daily-consumption-ctrl":"/Applications/MAMP/htdocs/nc-management/www/modules/daily-consumption/controllers/daily-consumption-ctrl.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/goals/controllers/goals-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/nc-management/www/modules/goals/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.goals',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.goals', {
          url: "/goals",
          views: {
            'tab-goals' :{
              templateUrl: "modules/goals/views/goals-view.html",
              controller: 'GoalsCtrl'
            }
          }
        })
    })

    .controller('GoalsCtrl',require('./controllers/goals-ctrl'))
    
})(angular);
},{"./controllers/goals-ctrl":"/Applications/MAMP/htdocs/nc-management/www/modules/goals/controllers/goals-ctrl.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/home/controllers/home-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope) {
    
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/nc-management/www/modules/home/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.home',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.home', {
          url: "/home",
          views: {
            'tab-home':{
              templateUrl: "modules/home/views/home-view.html",
              controller: 'HomeCtrl'
            }
          }
        })
    })

    .controller('HomeCtrl',require('./controllers/home-ctrl'))
    
})(angular)
},{"./controllers/home-ctrl":"/Applications/MAMP/htdocs/nc-management/www/modules/home/controllers/home-ctrl.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/more/controllers/more-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/nc-management/www/modules/more/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.more',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.more', {
          url: "/more",
          views: {
            'tab-more' :{
              templateUrl: "modules/more/views/more-view.html",
              controller: 'MoreCtrl'
            }
          }
        })
    })

    .controller('MoreCtrl',require('./controllers/more-ctrl'))
    
})(angular);
},{"./controllers/more-ctrl":"/Applications/MAMP/htdocs/nc-management/www/modules/more/controllers/more-ctrl.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/reports/controllers/reports-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function($scope) {

    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/nc-management/www/modules/reports/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.reports',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.reports', {
          url: "/reports",
          views: {
            'tab-reports' :{
              templateUrl: "modules/reports/views/reports-view.html",
              controller: 'ReportsCtrl'
            }
          }
        })
    })

    .controller('ReportsCtrl',require('./controllers/reports-ctrl'))
    
})(angular);
},{"./controllers/reports-ctrl":"/Applications/MAMP/htdocs/nc-management/www/modules/reports/controllers/reports-ctrl.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/settings/controllers/settings-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function($scope) {

    };
    
})(angular);
},{}],"/Applications/MAMP/htdocs/nc-management/www/modules/settings/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.settings',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.settings', {
          url: "/settings",
          views: {
            'tab-club-management' :{
              templateUrl: "modules/settings/views/settings-view.html",
              controller: 'SettingsCtrl'
            }
          }
        })
    })

    .controller('SettingsCtrl',require('./controllers/settings-ctrl'))
    
})(angular);
},{"./controllers/settings-ctrl":"/Applications/MAMP/htdocs/nc-management/www/modules/settings/controllers/settings-ctrl.js"}],"/Applications/MAMP/htdocs/nc-management/www/modules/tab/index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab',[])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "modules/tab/views/tab-view.html"
        })
        
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/club-management');
    })

})(angular);
},{}]},{},["./www/modules/index.js"]);
