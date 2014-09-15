module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.members',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.members', {
          url: "/club-management/members",
          views: {
            'tab-club-management' :{
              templateUrl: "modules/club-management/modules/members/views/members-view.html",
              controller: 'MembersCtrl'
            }
          }
        })
    })

    .controller('MembersCtrl',require('./controllers/members-ctrl'))
    
})(angular);