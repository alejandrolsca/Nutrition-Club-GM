module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.daily-consumption',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('daily-consumption', {
          url: "/daily-consumption",
              templateUrl: "modules/daily-consumption/views/daily-consumption-view.html",
              controller: 'DailyConsumptionCtrl'
        })
    })

    .controller('DailyConsumptionCtrl',require('./controllers/daily-consumption-ctrl'))
    
})(angular);