module.exports = (function(angular){
    'use strict';
    
    return function ($scope, $ionicPopup, $timeout) {
        $scope.showAlert = function() {
           var alertPopup = $ionicPopup.alert({
             title: 'Consumption',
             template: '<center>Your consumption was saved successfully</center>',
             buttons: [{ //Array[Object] (optional). Buttons to place in the popup footer.
                text: 'Aceptar',
                type: 'button-assertive',
                onTap: function(e) {
                  // e.preventDefault() will stop the popup from closing when tapped.
                  //e.preventDefault();
                }
              }]
           });
           alertPopup.then(function(res) {
             console.log('Thank you for not eating my delicious ice cream cone');
           });
         };
    };
    
})(angular);