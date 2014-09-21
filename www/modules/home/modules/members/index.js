module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.members',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.members', {
          url: "/home/members",
          views: {
            'tab-home' :{
              templateUrl: "modules/home/modules/members/views/members-view.html",
              controller: 'MembersCtrl'
            }
          }
        })
    })

    .controller('MembersCtrl',require('./controllers/members-ctrl'))
    
})(angular);