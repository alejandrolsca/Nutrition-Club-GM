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