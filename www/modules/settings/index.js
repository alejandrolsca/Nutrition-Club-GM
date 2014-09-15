module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.settings',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.settings', {
          url: "/settings",
          views: {
            'tab-club-management' :{
              templateUrl: "modules/settings/views/settings-view.html",
              controller: 'SettingsCtrl'
            }
          }
        })
    })

    .controller('SettingsCtrl',require('./controllers/settings-ctrl'))
    
})(angular);