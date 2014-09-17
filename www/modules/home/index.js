module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.home',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: "/home",
                templateUrl: "modules/home/views/home-view.html",
                controller: 'HomeCtrl'
        })
    })

    .controller('HomeCtrl',require('./controllers/home-ctrl'))
    
})(angular)