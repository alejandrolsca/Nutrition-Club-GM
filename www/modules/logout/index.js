module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.logout',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app.logout', {
          url: "/logout",
          views: {
            'menuContent' :{
              templateUrl: "modules/logout/views/logout-view.html",
              controller: 'LogoutCtrl'
            }
          }
        })
    })

    .controller('LogoutCtrl',require('./controllers/logout-ctrl'))
    
})(angular);