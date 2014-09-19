module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.more',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.more', {
          url: "/more",
            views:{
                "tab-more":{
                  templateUrl: "modules/more/views/more-view.html",
                  controller: 'MoreCtrl'
                }
            }
        })
    })

    .controller('MoreCtrl',require('./controllers/more-ctrl'))
    
})(angular);