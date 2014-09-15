'use strict';

module.exports = (function(angular){
    'use strict';
    
    return angular.module('app.summary',[])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app.summary', {
          url: "/summary",
          views: {
            'menuContent' :{
              templateUrl: "modules/summary/views/summary-view.html",
              controller: 'SummaryCtrl'
            }
          }
        })
    })

    .controller('SummaryCtrl',require('./controllers/summary-ctrl'))
    
})(angular);