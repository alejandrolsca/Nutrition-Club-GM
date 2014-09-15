module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicModal, $timeout) {
    
      // Form data for the login modal
      $scope.loginData = {};

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('modules/login/views/signin-view.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
        $scope.login();
      });

      // Triggered in the login modal to close it
      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function() {
        $scope.modal.show();
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };

      $scope.$on('$viewContentLoaded',function(){


      });
    };
    
})(angular);