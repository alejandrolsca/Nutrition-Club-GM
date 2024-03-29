module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.tab',[])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "modules/tabs/views/tabs-view.html",
          controller: 'TabsCtrl'
        })
        
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/home');
    })
    
    .controller('TabsCtrl',require('./controllers/tabs-ctrl'));

})(angular);