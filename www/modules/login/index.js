module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.login',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app.login', {
          url: "/login",
          views: {
            'menuContent' :{
              templateUrl: "modules/login/views/login-view.html",
              controller: 'LoginCtrl'
            }
          }
        })
    })

    .controller('LoginCtrl',require('./controllers/login-ctrl'))
    
})(angular);