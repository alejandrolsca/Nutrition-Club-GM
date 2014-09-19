module.exports = (function(angular){
    'use strict';
    
    return function($scope, $ionicPopup, $timeout) {
        $scope.badge1 = Math.floor((Math.random() * 10) + 1);
        $scope.badge2 = Math.floor((Math.random() * 10) + 1);
        $scope.badge3 = Math.floor((Math.random() * 10) + 1);
        $scope.badge4 = Math.floor((Math.random() * 10) + 1);
        
        // A confirm dialog
         $scope.showConfirm = function() {
           var confirmPopup = $ionicPopup.confirm({
             title: 'Log out',
             template: 'Are you sure you want to log out?'
           });
           confirmPopup.then(function(res) {
             if(res) {
               console.log('You are sure');
             } else {
               console.log('You are not sure');
             }
           });
         };
    }
    
})(angular);