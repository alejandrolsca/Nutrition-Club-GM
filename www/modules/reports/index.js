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