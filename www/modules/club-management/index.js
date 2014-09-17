'use strict';

module.exports = (function(angular){
    'use strict';
    
    return angular.module('tab.club-management',[
        require('./modules/members').name,
    ])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tab.club-management', {
          url: "/club-management",
            views:
            "tabs-club-management": {
              templateUrl: "modules/club-management/views/club-management-view.html",
              controller: 'ClubManagementCtrl'
            }
        })
    })

    .controller('ClubManagementCtrl',require('./controllers/club-management-ctrl'))
    
})(angular);