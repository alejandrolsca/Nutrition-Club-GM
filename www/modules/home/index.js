module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.home',[
        require('./modules/members').name
    ])

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