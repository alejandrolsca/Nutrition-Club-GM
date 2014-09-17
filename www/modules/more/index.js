module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.more',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('more', {
          url: "/more",
              templateUrl: "modules/more/views/more-view.html",
              controller: 'MoreCtrl'
        })
    })

    .controller('MoreCtrl',require('./controllers/more-ctrl'))
    
})(angular);