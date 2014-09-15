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