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