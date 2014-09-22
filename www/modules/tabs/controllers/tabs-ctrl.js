module.exports = (function(angular){
    'use strict';
    
    return function($scope, $ionicModal, $ionicActionSheet, $timeout, i18nFilter) {
        $scope.badge1 = Math.floor((Math.random() * 10) + 1);
        $scope.badge2 = Math.floor((Math.random() * 10) + 1);
        $scope.badge3 = Math.floor((Math.random() * 10) + 1);
        $scope.badge4 = Math.floor((Math.random() * 10) + 1);
          // Triggered on a button click, or some other target
         $scope.show = function() {
             
           console.log('click')

           // Show the action sheet
           var hideSheet = $ionicActionSheet.show({
             buttons: [
               { text: '<i class="icon fa fa-bar-chart"></i> ' + i18nFilter('more.option1')},
               { text: '<i class="icon fa fa-area-chart"></i> ' + i18nFilter('more.option2')},
               { text: '<i class="icon fa fa-pie-chart"></i> '  + i18nFilter('more.option3')},
               { text: '<i class="icon ion-ios7-bell"></i> '  + i18nFilter('more.option4')},
               { text: '<i class="icon ion-speakerphone"></i> '  + i18nFilter('more.option5')},
               { text: '<i class="icon ion-android-star"></i> '  + i18nFilter('more.option6')},
               { text: '<i class="icon ion-power"></i> '  + i18nFilter('more.option7')}
             ],
             //destructiveText: 'Delete',
             titleText: i18nFilter('optionstitle'),
             cancelText: i18nFilter('common.cancel'),
             cancel: function() {
                  // add cancel code..
                },
             buttonClicked: function(index) {
               return true;
             },
             destructiveButtonClicked: function(index) {
               return true;
             }
           });

           // For example's sake, hide the sheet after 4 seconds
           $timeout(function() {
             hideSheet();
           }, 4000);

         };
           // Form data for the login modal
          $scope.loginData = {};

          // Create the login modal that we will use later
          $ionicModal.fromTemplateUrl('modules/tabs/views/login.html', {
            scope: $scope
          }).then(function(modal) {
            $scope.modal = modal;
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
          $timeout(function() {
              $scope.login();
          }, 500);
    }
    
})(angular);