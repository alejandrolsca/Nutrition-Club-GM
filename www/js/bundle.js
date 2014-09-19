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
        require('./tabs').name,
        require('./home').name,
        //require('./club-management').name,
        require('./daily-activity').name,   
        require('./daily-consumption').name,
        //require('./reports').name,
        require('./goals').name,
        require('./more').name,
        //require('./settings').name
        //require('./login').name,
        //require('./logout').name
    ])
//
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


},{"./daily-activity":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\daily-activity\\index.js","./daily-consumption":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\daily-consumption\\index.js","./goals":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\goals\\index.js","./home":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\home\\index.js","./more":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\more\\index.js","./tabs":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\tabs\\index.js"}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\daily-activity\\controllers\\daily-activity-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\daily-activity\\index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.daily-activity',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.daily-activity', {
          url: "/daily-activity",
            views:{
                "tab-daily-activity":{
                  templateUrl: "modules/daily-activity/views/daily-activity-view.html",
                  controller: 'DailyActivityCtrl'
                }
            }
        })
    })

    .controller('DailyActivityCtrl',require('./controllers/daily-activity-ctrl'))
    
})(angular);
},{"./controllers/daily-activity-ctrl":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\daily-activity\\controllers\\daily-activity-ctrl.js"}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\daily-consumption\\controllers\\daily-consumption-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\daily-consumption\\index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.daily-consumption',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.daily-consumption', {
          url: "/daily-consumption",
            views:{
                "tab-daily-consumption":{
                  templateUrl: "modules/daily-consumption/views/daily-consumption-view.html",
                  controller: 'DailyConsumptionCtrl'
                }
            }
        })
    })

    .controller('DailyConsumptionCtrl',require('./controllers/daily-consumption-ctrl'))
    
})(angular);
},{"./controllers/daily-consumption-ctrl":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\daily-consumption\\controllers\\daily-consumption-ctrl.js"}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\goals\\controllers\\goals-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\goals\\index.js":[function(require,module,exports){
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
},{"./controllers/goals-ctrl":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\goals\\controllers\\goals-ctrl.js"}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\home\\controllers\\home-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope) {
    
    };
    
})(angular);
},{}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\home\\index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.home',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.home', {
          url: "/home",
            views:{
                "tab-home":{
                templateUrl: "modules/home/views/home-view.html",
                controller: 'HomeCtrl'
                }
            }
        })
    })

    .controller('HomeCtrl',require('./controllers/home-ctrl'))
    
})(angular)
},{"./controllers/home-ctrl":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\home\\controllers\\home-ctrl.js"}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\more\\controllers\\more-ctrl.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
    };
    
})(angular);
},{}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\more\\index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.more',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.more', {
          url: "/more",
            views:{
                "tab-more":{
                  templateUrl: "modules/more/views/more-view.html",
                  controller: 'MoreCtrl'
                }
            }
        })
    })

    .controller('MoreCtrl',require('./controllers/more-ctrl'))
    
})(angular);
},{"./controllers/more-ctrl":"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\more\\controllers\\more-ctrl.js"}],"C:\\wamp\\www\\nutrition-club-gm\\www\\modules\\tabs\\index.js":[function(require,module,exports){
module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.tab',[])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "modules/tabs/views/tabs-view.html"
        })
        
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/home');
    })

})(angular);
},{}]},{},["./www/modules/index.js"]);
