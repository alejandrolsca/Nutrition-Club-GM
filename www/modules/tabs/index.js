module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.tabs',[])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('tabs', {
          url: "/tabs",
          abstract: true,
          templateUrl: "modules/tabs/views/tabs-view.html"
        })
        
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tabs/home');
    })

})(angular);