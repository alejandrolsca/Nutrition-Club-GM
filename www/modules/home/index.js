module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.home',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.home', {
          url: "/home",
          views: {
            'tab-home':{
              templateUrl: "modules/home/views/home-view.html",
              controller: 'HomeCtrl'
            }
          }
        })
    })

    .controller('HomeCtrl',require('./controllers/home-ctrl'))
    
})(angular)